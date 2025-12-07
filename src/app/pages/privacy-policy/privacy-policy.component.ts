import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-privacy-policy',
    standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.sass']
})
export class PrivacyPolicyComponent implements OnInit {

  lastUpdated = '2024-12-02';

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    // Page Title
    this.title.setTitle('Privacy Policy - TheOneTik');

    // Meta Tags
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read TheOneTik privacy policy to understand how we protect your data. We provide guidance only and do not collect sensitive personal information.' 
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'privacy policy, data protection, user privacy, guidance only, TheOneTik'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Privacy Policy - TheOneTik' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn how TheOneTik protects your privacy while offering guidance on global opportunities.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://theonetik.com/assets/images/logo.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://theonetik.com/privacy-policy' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Privacy Policy - TheOneTik' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Learn how TheOneTik protects your privacy while offering guidance on global opportunities.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://theonetik.com/assets/images/logo.png' });

    // Structured Data (JSON-LD)
    const schema = {
      "@context": "https://schema.org",
      "@type": "PolicyPage",
      "name": "Privacy Policy - TheOneTik",
      "url": "https://theonetik.com/privacy-policy",
      "description": "TheOneTik privacy policy explaining data protection and user privacy. Guidance only; no personal data collected.",
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

}
