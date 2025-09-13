import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AUTH_ROUTES, AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES),
    FormsModule,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent
  
  ]
})
export class AuthModule {}
