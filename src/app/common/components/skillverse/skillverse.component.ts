import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Skillcategory } from '../../interface/skillcategory';
import { Digitalskill, EcommerceSkills, TechSkill } from '../../classes/skillverse';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SkillcardComponent } from '../skillcard/skillcard.component';
import { SkillformComponent } from '../skillform/skillform.component';
import { SkillverseService } from '../../services/skillverse.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SkillCard } from '../../interface/skill-card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SafeUrlPipe } from '../../pipe/safe-url.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skillverse',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    SkillcardComponent,
    MatDialogModule,
    MatPaginatorModule,
    SafeUrlPipe
  ],
  templateUrl: './skillverse.component.html',
  styleUrl: './skillverse.component.sass'
})
export class SkillverseComponent {

  @ViewChild('iframeContainer') iframeContainer?: ElementRef;
  @Output() iframeLinkSelected = new EventEmitter<string>();
  private subscription = new Subscription();
  iframeUrl: string = 'about:blank';
  @Input() type: 'tech' | 'digital' | 'ecommerce' = 'tech';

  categories: Skillcategory[] = [];
  selectedCategoryIndex = 0;
  selectedSubcategoryIndex = 0;
  selectedItem: string | null = null;

  cards: SkillCard[] = [];
  paginatedCards: SkillCard[] = [];

  pageSize: number = 3;
  pageIndex: number = 0;

  isSuperUser: boolean = false;

  selectedIframeUrl: string | null = null;

  constructor(
    private skillsVerseService: SkillverseService,
    private dialog: MatDialog,
    private authService: AuthService,
    private cdr: ChangeDetectorRef // Add ChangeDetectorRef
  ) { }

  async ngOnInit() {
    this.isSuperUser = (await this.authService.getCurrentUserRole()) === 'superuser';
    
    if (this.type === 'tech') this.categories = TechSkill;
    if (this.type === 'digital') this.categories = Digitalskill;
    if (this.type === 'ecommerce') this.categories = EcommerceSkills;

    // SOLUTION 1: Use setTimeout to defer auto-selection
    setTimeout(() => {
      this.autoSelectFirstItem();
    });
    
    // OR SOLUTION 2: Manually trigger change detection
    // this.autoSelectFirstItem();
    // this.cdr.detectChanges();
  }

  // Separate method for auto-selection
  private autoSelectFirstItem() {
    if (this.categories.length > 0) {
      const firstCat = this.categories[0];
      if (firstCat.subcategories.length > 0) {
        const firstSub = firstCat.subcategories[0];
        if (firstSub.items.length > 0) {
          this.selectSubItem(firstSub.items[0]);
        }
      }
    }
  }

  categoryChanged(index: number) {
    this.selectedCategoryIndex = index;
    const cat = this.categories[index];

    this.selectedSubcategoryIndex = 0;
    this.selectedItem = cat.subcategories[0].items[0];

    this.loadCards();
  }

  subcategoryChanged(index: number) {
    this.selectedSubcategoryIndex = index;
    const sub = this.categories[this.selectedCategoryIndex].subcategories[index];

    this.selectedItem = sub.items[0];
    this.loadCards();
  }

  selectSubItem(item: string) {
    this.selectedItem = item;
    this.loadCards();
  }

  loadCards() {
    if (!this.selectedItem) return;

    this.skillsVerseService.getCardsBySubItem(this.selectedItem)
      .subscribe(cards => {
        this.cards = cards;
        this.updatePagination();
      });
  }

  updatePagination() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCards = this.cards.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  addCard(item: string) {
    if (!this.isSuperUser) return;
    const dialogRef = this.dialog.open(SkillformComponent, { width: '500px', data: {} });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.card) {
        result.card.subItem = item;
        this.skillsVerseService.addCard(result.card).then(() => this.loadCards());
      }
    });
  }

  editCard(card: SkillCard) {
    if (!this.isSuperUser) return;
    const dialogRef = this.dialog.open(SkillformComponent, { width: '500px', data: { card } });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.card) {
        const updated: SkillCard = { ...result.card, subItem: card.subItem };
        this.skillsVerseService.updateCard(card.id!, updated).then(() => this.loadCards());
      }
    });
  }

  deleteCard(cardId: string) {
    if (!this.isSuperUser) return;
    this.skillsVerseService.deleteCard(cardId).then(() => {
      this.loadCards();
    });
  }

  openIframe(url: string) {
    this.selectedIframeUrl = url;
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
  trackByCardId(index: number, card: SkillCard): string {
  return card.id || index.toString();
}

}