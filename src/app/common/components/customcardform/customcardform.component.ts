import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customcardform',
  standalone: true,
  imports: [ CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './customcardform.component.html',
  styleUrl: './customcardform.component.sass'
})
export class CustomcardformComponent {
  title: string = '';
  description: string = '';
  countryCode: string = '';

  websiteLink: string = '';
  aboutWebsiteLink: string = '';
  aboutCountryLink: string = '';
  youtubeLink: string = '';
   moduleType: string= ''

  constructor(
    public dialogRef: MatDialogRef<CustomcardformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService: CountryService
  ) {
    this.title = data.title || '';
    this.description = data.description || '';
    this.countryCode = data.countryCode || '';

    this.websiteLink = data.websiteLink || '';
    this.aboutWebsiteLink = data.aboutWebsiteLink || '';
    this.aboutCountryLink = data.aboutCountryLink || '';
    this.youtubeLink = data.youtubeLink || '';
      this.moduleType = data.moduleType || '';
  }

 onSubmit(): void {
  const cardData: any = {
    title: this.title,
    description: this.description,
    websiteLink: this.websiteLink,
    aboutWebsiteLink: this.aboutWebsiteLink,
    aboutCountryLink: this.aboutCountryLink,
    youtubeLink: this.youtubeLink
    
  };

  if (!this.data.cardId) {
    cardData.countryCode = this.countryCode;
  }

  const request = this.data.cardId
    ? this.countryService.updateCard(
        this.data.cardId,
        this.countryCode,
        this.data.moduleType,  // ✅ FIXED: pass moduleType here
        cardData
      )
    : this.countryService.addCard(cardData, this.data.moduleType); // ✅ FIXED: pass moduleType here

  request.then(() =>
    this.dialogRef.close({ ...cardData, updated: !!this.data.cardId })
  );
}


  onCancel(): void {
    this.dialogRef.close();
  }
}

