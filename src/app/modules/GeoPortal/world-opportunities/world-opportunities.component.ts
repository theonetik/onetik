import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ <-- import this
import { CountrylistComponent } from 'src/app/common/components/countrylist/countrylist.component';
import { SafeUrlPipe } from 'src/app/common/pipe/safe-url.pipe';
import { FrameService } from 'src/app/common/services/frame.service';

@Component({
  selector: 'app-world-opportunities',
  standalone: true,
  imports: [
    CommonModule,          // ✅ REQUIRED for *ngIf, *ngFor etc.
    CountrylistComponent,
    SafeUrlPipe,
  ],
  templateUrl: './world-opportunities.component.html',
  styleUrl: './world-opportunities.component.sass'
})
export class WorldOpportunitiesComponent {
  iframeUrl: string = 'about:blank';
  @ViewChild('iframeContainer') iframeContainer?: ElementRef;
  @Output() iframeLinkSelected = new EventEmitter<string>();

  constructor(private frameService: FrameService) {}

  ngOnInit(): void {
    this.frameService.currentLink$.subscribe(link => {
      if (link) {
        this.iframeUrl = link;
        setTimeout(() => {
          this.iframeContainer?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }

  updateIframeUrl(link: string): void {
    this.iframeUrl = link;
    setTimeout(() => {
      this.iframeContainer?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
