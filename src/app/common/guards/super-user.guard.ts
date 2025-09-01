// src/app/common/guards/super-user.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SuperuserService } from 'src/app/modules/Admin/superuser.service';
import { AuthService } from 'src/app/auth/auth.service';
import { map, switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperUserGuard  {
     constructor(private authService: AuthService, private router: Router) {}

  async canActivate() {
    const role = await this.authService.getCurrentUserRole();
    if (role === 'superuser') return true;
    this.router.navigate(['/dashboard']);
    return false;
  }

}
