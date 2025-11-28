import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CustomcardformComponent } from '../customcardform/customcardform.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-customcard',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './customcard.component.html',
  styleUrl: './customcard.component.sass',
  animations: [
    trigger('slideInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      state('out', style({ transform: 'translateY(20px)', opacity: 0 })),
      transition('out => in', [
        animate('300ms ease-in-out')
      ]),
      transition('in => out', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class CustomcardComponent implements OnInit, AfterViewInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() cardId: string = '';
  @Input() countryCode: string = '';
  @Input() websiteLink: string = '';
  @Input() aboutWebsiteLink: string = '';
  @Input() aboutCountryLink: string = '';
  @Input() youtubeLink: string = '';
  @Input() isSuperUser: boolean = false;
  @Input() moduleType: string = '';

  @Output() delete = new EventEmitter<void>();
  @Output() openLink = new EventEmitter<string>();

  @ViewChild('descriptionElement') descriptionElement!: ElementRef;

  // Properties for description truncation
  displayDescription: string = '';
  fullDescription: string = '';
  isDescriptionTruncated: boolean = false;
  shouldShowTooltip: boolean = false;
  private readonly WORD_LIMIT = 30;

  constructor(
    private dialog: MatDialog, 
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const role = await this.authService.getCurrentUserRole();
    this.isSuperUser = role === 'superuser';
    this.processDescription();
  }

  ngAfterViewInit() {
    // Additional processing after view initialization if needed
  }

  private processDescription(): void {
    this.fullDescription = this.description;
    const words = this.description.split(' ');
    
    if (words.length > this.WORD_LIMIT) {
      this.displayDescription = words.slice(0, this.WORD_LIMIT).join(' ') + '...';
      this.isDescriptionTruncated = true;
      this.shouldShowTooltip = true;
    } else {
      this.displayDescription = this.description;
      this.isDescriptionTruncated = false;
      this.shouldShowTooltip = false;
    }
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(CustomcardformComponent, {
      width: '500px',
      maxWidth: '90vw',
      data: {
        title: this.title,
        description: this.description,
        countryCode: this.countryCode,
        cardId: this.cardId,
        websiteLink: this.websiteLink,
        aboutWebsiteLink: this.aboutWebsiteLink,
        aboutCountryLink: this.aboutCountryLink,
        youtubeLink: this.youtubeLink,
          moduleType: this.moduleType 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.updated) {
        this.title = result.title;
        this.description = result.description;
        this.websiteLink = result.websiteLink;
        this.aboutWebsiteLink = result.aboutWebsiteLink;
        this.aboutCountryLink = result.aboutCountryLink;
        this.youtubeLink = result.youtubeLink;
        
        // Reprocess description after update
        this.processDescription();
      }
    });
  }

  onDelete() {
    this.delete.emit();
  }

  openInFrame(link: string) {
    this.openLink.emit(link);
  }
}