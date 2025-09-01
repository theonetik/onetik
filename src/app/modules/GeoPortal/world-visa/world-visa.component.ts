import { Component } from '@angular/core';
import { CountrylistComponent } from 'src/app/common/components/countrylist/countrylist.component';

@Component({
  selector: 'app-world-visa',
  standalone: true,
  imports: [CountrylistComponent],
  templateUrl: './world-visa.component.html',
  styleUrl: './world-visa.component.sass'
})
export class WorldVisaComponent {

}
