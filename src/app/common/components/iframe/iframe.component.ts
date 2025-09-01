import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.sass'
})
export class IframeComponent {
  @Input() src!: string;
  @Input() width: string = '100%';
  @Input() height: string = '500px';
}
