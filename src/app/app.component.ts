import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainlayoutComponent } from './main-lay-out/mainlayout/mainlayout.component';

@Component({
  selector: 'app-root',
   standalone: true,
  templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, MainlayoutComponent],
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'onetracksolutions';
}
