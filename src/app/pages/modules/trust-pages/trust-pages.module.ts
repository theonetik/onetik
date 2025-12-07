import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrustPagesRoutingModule } from './trust-pages-routing.module';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from '../../cookie-policy/cookie-policy.component';
import { TermsConditionsComponent } from '../../terms-conditions/terms-conditions.component';
import { SitemapComponent } from '../../sitemap/sitemap.component';
import { FAQComponent } from '../../faq/faq.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TrustPagesRoutingModule
  ]
})
export class TrustPagesModule { }
