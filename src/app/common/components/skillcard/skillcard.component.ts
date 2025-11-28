import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SkillCard } from '../../interface/skill-card';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skillcard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './skillcard.component.html',
  styleUrls: ['./skillcard.component.sass']
})
export class SkillcardComponent implements AfterViewInit {
  @Input() card!: SkillCard;
  @Input() isSuperUser: boolean = false;

  @Output() edit = new EventEmitter<SkillCard>();
  @Output() delete = new EventEmitter<string>();
  @Output() openLink = new EventEmitter<string>();

  displayDescription: string = '';
  fullDescription: string = '';
  shouldShowTooltip: boolean = false;
  isDescriptionTruncated: boolean = false;

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.fullDescription = this.card.description || '';
    this.truncateDescription();
    this.cd.detectChanges();
  }

  truncateDescription() {
    const maxLength = 150; // characters limit
    if (this.fullDescription.length > maxLength) {
      this.displayDescription = this.fullDescription.slice(0, maxLength) + '...';
      this.shouldShowTooltip = true;
      this.isDescriptionTruncated = true;
    } else {
      this.displayDescription = this.fullDescription;
      this.shouldShowTooltip = false;
      this.isDescriptionTruncated = false;
    }
  }

  openInWindow(url: string) {
    window.open(url, '_blank');
  }

  openFormDialog() {
    this.edit.emit(this.card);
  }

  onDelete() {
    if (this.card.id) {
      this.delete.emit(this.card.id);
    }
  }
  openInFrame(link: string) {
    this.openLink.emit(link);
  }
  
  trackByCardId(index: number, card: SkillCard): string {
  return card.id || index.toString();
}

}
