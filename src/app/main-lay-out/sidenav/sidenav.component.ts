import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { NAVIGATION_DATA } from 'src/app/common/contants/navigation.constants';
import { MenuItem } from 'src/app/common/interface/menuItem';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule, MatIconModule,MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass'
})
export class SidenavComponent {
   @Input() selectedModule: MenuItem | null = null;
}
