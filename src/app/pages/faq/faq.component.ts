import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FAQComponent implements OnInit {

  faqs: FAQ[] = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including web development, mobile app development, and digital marketing solutions.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team via the contact form, email, or phone number listed on our contact page.'
    },
    {
      question: 'What are your business hours?',
      answer: 'We operate Monday to Friday, 9 AM to 6 PM EST. Emergency support is available 24/7.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer refunds within 30 days of purchase if you are not satisfied with our services. Please refer to our Terms & Conditions for more details.'
    }
  ];

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('FAQ - Frequently Asked Questions | TheOneTik');

    this.meta.updateTag({ 
      name: 'description', 
      content: 'Find answers to frequently asked questions about TheOneTik services, policies, and guidance.' 
    });

    this.addFAQSchema();
  }

  private addFAQSchema(): void {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }

}
