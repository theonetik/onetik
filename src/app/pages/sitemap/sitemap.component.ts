import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sitemap',
   standalone: true,
  imports: [CommonModule, MatCardModule,RouterModule],
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.sass']
})
export class SitemapComponent {
  // Pages array matches your XML sitemap
  pages = [
    { name: 'Home', path: '/home' },
    { name: 'Skillverse', path: '/skillverse/it-skill' },
    { name: 'Frontend Development', path: '/skillverse/it-skill' },
    { name: 'Backend Development', path: '/skillverse/it-skill' },
    { name: 'Mobile Development', path: '/skillverse/it-skill' },
    { name: 'Databases', path: '/skillverse/it-skill' },
    { name: 'DevOps', path: '/skillverse/it-skill' },
    { name: 'Cloud', path: '/skillverse/it-skill' },
    { name: 'AI & ML', path: '/skillverse/it-skill' },
    { name: 'Cybersecurity', path: '/skillverse/it-skill' },
    { name: 'Tools & Productivity', path: '/skillverse/it-skill' },
    { name: 'Digital Marketing', path: '/skillverse/digital-skill' },
    { name: 'Graphic Design', path: '/skillverse/digital-skill' },
    { name: 'Video & Multimedia', path: '/skillverse/digital-skill' },
    { name: 'Office Productivity', path: '/skillverse/digital-skill' },
    { name: 'E-Commerce & Online Business', path: '/skillverse/ecommerce-skill' },
    { name: 'Programming & Web Tools', path: '/skillverse/it-skill' },
    { name: 'Cloud & Remote Tools', path: '/skillverse/it-skill' },
    { name: 'AI Automation', path: '/skillverse/ai-automation' },
    { name: 'E-Commerce Platforms', path: '/skillverse/ecommerce-skill' },
    { name: 'Product Management', path: '/skillverse/digital-skill' },
    { name: 'Marketing & Sales', path: '/skillverse/digital-skill' },
    { name: 'Operations & Payments', path: '/skillverse/digital-skill' },
    { name: 'Customer Support', path: '/skillverse/ecommerce-skill' },
    { name: 'E-Commerce Analytics & AI', path: '/skillverse/ecommerce-skill' },
    { name: 'Logistics & Supply Chain', path: '/skillverse/it-skill' },
    { name: 'Visas', path: '/dashboard/world-visa' },
    { name: 'Canada Visa', path: '/dashboard/world-visa' },
    { name: 'UK Visa', path: '/dashboard/world-visa' },
    { name: 'Australia Visa', path: '/dashboard/world-visa' },
    { name: 'Jobs', path: '/dashboard/world-opportunities' },
    { name: 'Education', path: '/dashboard/uni-world' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Partners', path: '/partners' }
  ];
}
