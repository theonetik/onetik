import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.sass']
})
export class CookiePolicyComponent implements OnInit {

  lastUpdated = '2024-12-02';

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Cookie & Privacy Policy - TheOneTik');

    this.meta.updateTag({ 
      name: 'description', 
      content: 'Learn how TheOneTik uses cookies and protects your privacy. We provide guidance only and do not collect sensitive personal information.' 
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'cookie policy, privacy policy, data protection, user privacy, TheOneTik, guidance only'
    });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
