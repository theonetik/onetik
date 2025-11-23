import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'app-skillverse',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    SkillcardComponent,
    MatDialogModule
  ],
  templateUrl: './skillverse.component.html',
  styleUrl: './skillverse.component.sass'
})
export class SkillverseComponent {
  @Input() type: 'tech' | 'digital' | 'ecommerce' = 'tech';

  categories: Skillcategory[] = [];
  selectedCategoryIndex = 0;
  selectedSubcategoryIndex = 0;
  selectedItem: string | null = null;
  cards: SkillCard[] = [];
  isSuperUser: boolean = false;

  constructor(
    private skillsVerseService: SkillverseService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}
  

  async ngOnInit() {
    this.isSuperUser = (await this.authService.getCurrentUserRole()) === 'superuser';

    if (this.type === 'tech') this.categories = TechSkill;
    if (this.type === 'digital') this.categories = Digitalskill;
    if (this.type === 'ecommerce') this.categories = EcommerceSkills;

    // Select first category/subcategory/item by default
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
    this.selectedSubcategoryIndex = 0;
    this.selectedItem = null;
    this.cards = [];

    const cat = this.categories[index];
    if (cat.subcategories.length > 0 && cat.subcategories[0].items.length > 0) {
      this.selectSubItem(cat.subcategories[0].items[0]);
    }
  }

  subcategoryChanged(index: number) {
    this.selectedSubcategoryIndex = index;
    this.selectedItem = null;
    this.cards = [];

    const cat = this.categories[this.selectedCategoryIndex];
    const sub = cat.subcategories[index];
    if (sub.items.length > 0) {
      this.selectSubItem(sub.items[0]);
    }
  }

  selectSubItem(item: string) {
    this.selectedItem = item;
    this.loadCards();
  }

  loadCards() {
    if (!this.selectedItem) return;

    this.skillsVerseService.getCardsBySubItem(this.selectedItem)
      .subscribe(cards => {
        this.cards = cards; // Only cards for this subItem
      });
  }

  addCard(item: string) {
    if (!item || !this.isSuperUser) return;

    const dialogRef = this.dialog.open(SkillformComponent, { width: '500px', data: {} });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.card) {
        result.card.subItem = item; // Save the correct subItem

        this.skillsVerseService.addCard(result.card).then(() => {
          this.selectSubItem(item); // reload only this item
        });
      }
    });
  }

  editCard(card: SkillCard) {
    if (!this.isSuperUser) return;

    const dialogRef = this.dialog.open(SkillformComponent, { width: '500px', data: { card } });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.card) {
        const updatedCard: SkillCard = { ...result.card, subItem: card.subItem };
        this.skillsVerseService.updateCard(card.id!, updatedCard).then(() => {
          this.selectSubItem(card.subItem!); // reload only this item
        });
      }
    });
  }

  deleteCard(cardId: string) {
    if (!this.isSuperUser) return;

    this.skillsVerseService.deleteCard(cardId).then(() => {
      this.cards = this.cards.filter(c => c.id !== cardId);
    });
  }
}
