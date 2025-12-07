import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('../../home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('../../about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('../../contact/contact.component').then(m => m.ContactComponent) },
  { path: 'faq', loadComponent: () => import('../../faq/faq.component').then(m => m.FAQComponent) },
  { path: 'privacy-policy', loadComponent: () => import('../../privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
  { path: 'cookie-policy', loadComponent: () => import('../../cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent) },
  { path: 'terms-conditions', loadComponent: () => import('../../terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent) },
  { path: 'sitemap', loadComponent: () => import('../../sitemap/sitemap.component').then(m => m.SitemapComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrustPagesRoutingModule { }
