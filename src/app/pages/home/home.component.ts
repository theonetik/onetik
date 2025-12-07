import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title, private router: Router) { }

  ngOnInit(): void {
    // Page Title
    this.title.setTitle('Home - TheOneTik | Global Opportunities & Skillverse');

    // Meta Description
    this.meta.updateTag({
      name: 'description',
      content: 'Explore global jobs, visas, study abroad opportunities, and Skillverse IT & digital skills with TheOneTik.'
    });

    // Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'global jobs, visas, study abroad, Skillverse, IT skills, digital skills, AI, ecommerce, TheOneTik'
    });

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: 'Home - TheOneTik | Global Opportunities & Skillverse' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore global jobs, visas, study abroad opportunities, and Skillverse IT & digital skills.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://theonetik.com/assets/images/og-image.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://theonetik.com/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Home - TheOneTik | Global Opportunities & Skillverse' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Explore global jobs, visas, study abroad opportunities, and Skillverse IT & digital skills.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://theonetik.com/assets/images/og-image.jpg' });

    // Structured Data (JSON-LD)
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TheOneTik",
      "url": "https://theonetik.com",
      "description": "Explore global jobs, visas, study abroad opportunities, and Skillverse IT & digital skills.",
      "publisher": {
        "@type": "Organization",
        "name": "TheOneTik",
        "logo": {
          "@type": "ImageObject",
          "url": "https://theonetik.com/assets/images/logo.png"
        }
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  getWorldVisa() {
    this.router.navigate(['/dashboard/world-visa']);
  }

  getSkill() {
    this.router.navigate(['/skillverse/it-skill']);
  }
}
