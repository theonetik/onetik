import { Component } from '@angular/core';
import { AIPromptService } from '../../services/aiprompt.service';
import { MatDialog } from '@angular/material/dialog';
import { AIPrompt } from '../../interface/aiprompt';
import { AIPromptFormComponent } from '../aiprompt-form/aiprompt-form.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-aiprompt-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule, MatPaginatorModule,
    MatDialogModule, MatTooltipModule, MatIcon
  ],
  templateUrl: './aiprompt-card.component.html',
  styleUrl: './aiprompt-card.component.sass'
})
export class AIPromptCardComponent {

  prompts: AIPrompt[] = [];
  isSuperUser = false;
  pageSize = 6;
  pageIndex = 0;
  displayedPrompts: AIPrompt[] = [];

  constructor(
    private aiservice: AIPromptService, private authService: AuthService,
    private dialog: MatDialog, private snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    const role = await this.authService.getCurrentUserRole();
    this.isSuperUser = role === 'superuser';
    this.aiservice.getPrompts().subscribe(res => {
      this.prompts = res;
      this.updateDisplayedPrompts();
    });

  }

  // ADD
  addPrompt() {
    const dialogRef = this.dialog.open(AIPromptFormComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.aiservice.addPrompt({
          ...data,
          createdAt: Date.now()
        });
      }
    });
  }

  // UPDATE
  updatePrompt(prompt: AIPrompt) {
    const dialogRef = this.dialog.open(AIPromptFormComponent, {
      width: '450px',
      data: prompt
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.aiservice.updatePrompt(prompt.id!, data);
      }
    });
  }

  // DELETE
  deletePrompt(id: string) {
    this.aiservice.deletePrompt(id);
  }

  copy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Copied!', '', { duration: 2000 });
    });
  }
  getShortText(text: string, wordLimit: number): string {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  updateDisplayedPrompts() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedPrompts = this.prompts.slice(start, end);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedPrompts();
  }
}
