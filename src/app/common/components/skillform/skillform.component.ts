import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SkillCard } from '../../interface/skill-card';

@Component({
  selector: 'app-skillform',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './skillform.component.html',
  styleUrl: './skillform.component.sass'
})
export class SkillformComponent {

  card: SkillCard;

  constructor(
    public dialogRef: MatDialogRef<SkillformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card?: SkillCard }
  ) {
    this.card = {
      title: data.card?.title || '',
      description: data.card?.description || '',
      websiteLink: data.card?.websiteLink || '',
      youtubeLink: data.card?.youtubeLink || ''
    };
  }

  onSubmit() {
    this.dialogRef.close({ card: this.card });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
