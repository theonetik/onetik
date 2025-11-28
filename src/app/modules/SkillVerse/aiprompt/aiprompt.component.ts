import { Component } from '@angular/core';
import { AIPromptCardComponent } from 'src/app/common/components/aiprompt-card/aiprompt-card.component';


@Component({
  selector: 'app-aiprompt',
  standalone: true,
  imports: [AIPromptCardComponent],
  templateUrl: './aiprompt.component.html',
  styleUrl: './aiprompt.component.sass'
})
export class AIPromptComponent {

}

