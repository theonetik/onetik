import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { CustomcardComponent } from '../customcard/customcard.component';
import { CustomcardformComponent } from '../customcardform/customcardform.component';
import { CountryService } from '../../services/country.service';

import { FrameService } from '../../services/frame.service';
import { SafeUrlPipe } from '../../pipe/safe-url.pipe';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CountryList } from '../../classes/country-list';

@Component({
  selector: 'app-countrylist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    CustomcardComponent,
    SafeUrlPipe,
  ],
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.sass'
})
export class CountrylistComponent implements OnInit {
  @Input() moduleType: string = '';
  @ViewChild('iframeContainer') iframeContainer?: ElementRef;
  @Output() iframeLinkSelected = new EventEmitter<string>();
  private subscription = new Subscription();
  iframeUrl: string = 'about:blank';
  searchText = '';
  selectedIndex = 0;
  pageSize = 4;
  pageIndex = 0;
  isSuperUser = false;

  constructor(private dialog: MatDialog, private countryService: CountryService, private authService: AuthService) { }

  cardsByCountry: { [countryCode: string]: any[] } = {};

  async ngOnInit(): Promise<void> {
    const role = await this.authService.getCurrentUserRole();
    this.isSuperUser = role === 'superuser';

    const initialCountry = this.filteredCountries()[0];
    if (initialCountry) {
      this.loadCardsForCountry(initialCountry.code);
    }

  }

  onCountryTabChange(event: any) {
    this.selectedIndex = event.index;
    this.pageIndex = 0;
    const selectedCountry = this.filteredCountries()[event.index];
    if (selectedCountry) {
      this.loadCardsForCountry(selectedCountry.code);
    }
  }

  loadCardsForCountry(countryCode: string) {
    this.countryService.getCardsByCountryAndModule(countryCode, this.moduleType).then(snapshot => {
      this.cardsByCountry[countryCode] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }).catch(error => {
      console.error(`Error loading cards for ${countryCode} in ${this.moduleType}:`, error);
    });
  }
  addCard(countryCode: string, countryName: string) {
    const dialogRef = this.dialog.open(CustomcardformComponent, {
      width: '400px',
      data: {
        title: '',
        description: '',
        countryCode,
        moduleType: this.moduleType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCardsForCountry(countryCode);
      }
    });
  }

  deleteCard(countryCode: string, cardId: string) {
    this.countryService.deleteCardByModule(cardId, countryCode, this.moduleType).then(() => {
      this.loadCardsForCountry(countryCode);
    });
  }

  getPaginatedCards(countryCode: string) {
    const cards = this.cardsByCountry[countryCode] || [];
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return cards.slice(startIndex, endIndex);
  }

  getTotalCards(countryCode: string) {
    return (this.cardsByCountry[countryCode] || []).length;
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // Use your existing country list here
  countryList = CountryList.list
  filteredCountries() {
    const search = this.searchText.toLowerCase();
    return this.countryList.filter(c => c.name.toLowerCase().includes(search));
  }

  previousTab() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.pageIndex = 0;
      this.onCountryTabChange({ index: this.selectedIndex });
    }
  }

  nextTab() {
    if (this.selectedIndex < this.filteredCountries().length - 1) {
      this.selectedIndex++;
      this.pageIndex = 0;
      this.onCountryTabChange({ index: this.selectedIndex });
    }
  }

onLinkClick(link: string) {
  // Convert YouTube link if needed
  const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
  const match = link.match(youtubeRegex);
  if (match && match[1]) {
    link = `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  }

  this.iframeUrl = link;

  setTimeout(() => {
    this.iframeContainer?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

  closeIframe(): void {
    this.iframeUrl = 'about:blank';
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}