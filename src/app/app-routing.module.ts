import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldVisaComponent } from './modules/GeoPortal/world-visa/world-visa.component';
import { WorldOpportunitiesComponent } from './modules/GeoPortal/world-opportunities/world-opportunities.component';
import { UniWorldComponent } from './modules/GeoPortal/uni-world/uni-world.component';
import { RecruitmentagencieComponent } from './modules/GeoPortal/recruitmentagencie/recruitmentagencie.component';
import { SuperuserlistComponent } from './modules/Admin/superuserlist/superuserlist.component';
import { SuperuserformComponent } from './modules/Admin/superuserform/superuserform.component';
import { SuperUserGuard } from './common/guards/super-user.guard';
import { ItskillComponent } from './modules/SkillVerse/itskill/itskill.component';
import { DigtalskillComponent } from './modules/SkillVerse/digtalskill/digtalskill.component';
import { EcommerceskillComponent } from './modules/SkillVerse/ecommerceskill/ecommerceskill.component';
import { AIPromptComponent } from './modules/SkillVerse/aiprompt/aiprompt.component';
export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // redirect root based on login state
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: RecruitmentagencieComponent,
  },
  {
    path: 'dashboard/world-visa',
    component: WorldVisaComponent,
  },
  {
    path: 'dashboard/world-opportunities',
    component: WorldOpportunitiesComponent,
  },
  {
    path: 'dashboard/uni-world',
    component: UniWorldComponent,
  },
  {
    path: 'dashboard/recruitment-agencie',
    component: RecruitmentagencieComponent,
  },
    {
    path: 'skillverse/it-skill',
    component: ItskillComponent,
  },
   {
    path: 'skillverse/digital-skill',
    component: DigtalskillComponent,
  },
   {
    path: 'skillverse/ecommerce-skill',
    component: EcommerceskillComponent,
  },
  {
    path: 'skillverse/AI-prompt',
    component: AIPromptComponent,
  },

  {
    path: 'admin/super-users-list',
    component: SuperuserlistComponent,
    canActivate: [SuperUserGuard]  
  },
  {
    path: 'admin/super-users',
    component: SuperuserformComponent,
    canActivate: [SuperUserGuard]
  },
  { 
  path: '', 
  loadChildren: () => import('./pages/modules/trust-pages/trust-pages.module').then(m => m.TrustPagesModule) 
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }