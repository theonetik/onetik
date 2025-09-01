import { Component } from '@angular/core';
import { CountrylistComponent } from 'src/app/common/components/countrylist/countrylist.component';

@Component({
  selector: 'app-uni-world',
  standalone: true,
  imports: [CountrylistComponent],
  templateUrl: './uni-world.component.html',
  styleUrl: './uni-world.component.sass'
})
export class UniWorldComponent {

}
