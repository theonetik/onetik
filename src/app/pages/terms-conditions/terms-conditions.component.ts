import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-terms-conditions',
     standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.sass']
})
export class TermsConditionsComponent implements OnInit {

  lastUpdated = '2025-12-06';

  termsSections = [
    {
      title: 'Introduction',
      content: `Welcome to TheOneTik. By using our website, you agree to comply with these terms and conditions.`
    },
    {
      title: 'Use of Services',
      content: `You agree to use our services responsibly and not for any illegal activities.`
    },
    {
      title: 'Intellectual Property',
      content: `All content, logos, and images on TheOneTik are protected by copyright and cannot be reproduced without permission.`
    },
    {
      title: 'User Content',
      content: `Any content you submit must be legal and not infringe on others' rights.`
    },
    {
      title: 'Limitation of Liability',
      content: `TheOneTik is not responsible for any damages or losses resulting from the use of our website or services.`
    },
    {
      title: 'Changes to Terms',
      content: `We may update these terms at any time. Changes will be effective immediately upon posting.`
    },
    {
      title: 'Contact Information',
      content: `For questions regarding these terms, contact us at contact@theonetik.com.`
    }
  ];

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    // SEO Meta Tags
    this.title.setTitle('Terms & Conditions - TheOneTik');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Read the Terms & Conditions of TheOneTik, including usage rules, intellectual property, liability, and more.' 
    });
    this.meta.updateTag({ 
      name: 'robots', 
      content: 'index, follow' 
    });

    // Structured Data
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions",
      "url": window.location.href,
      "description": "TheOneTik Terms & Conditions including usage rules, liability, and user rights.",
      "lastReviewed": this.lastUpdated
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

}
