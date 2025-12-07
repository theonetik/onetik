import { Injectable } from '@angular/core';
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}
@Injectable({
  providedIn: 'root'
})
export class SitmapService {

 private baseUrl = 'https://theonetik.com';

  getUrls(): SitemapUrl[] {
    const today = new Date().toISOString().split('T')[0];

    return [
      {
        loc: `${this.baseUrl}/`,
        lastmod: today,
        changefreq: 'daily',
        priority: 1.0
      },
      {
        loc: `${this.baseUrl}/about`,
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${this.baseUrl}/contact`,
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${this.baseUrl}/faq`,
        lastmod: today,
        changefreq: 'weekly',
        priority: 0.7
      },
      {
        loc: `${this.baseUrl}/privacy-policy`,
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.5
      },
      {
        loc: `${this.baseUrl}/terms-conditions`,
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.5
      },
      {
        loc: `${this.baseUrl}/cookie-policy`,
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.5
      },
      {
        loc: `${this.baseUrl}/partners`,
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6
      }
    ];
  }

  generateXML(): string {
    const urls = this.getUrls();
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    urls.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${url.loc}</loc>\n`;
      if (url.lastmod) xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      if (url.changefreq) xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      if (url.priority) xml += `    <priority>${url.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    return xml;
  }
}
