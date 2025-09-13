// mainlayout.component.ts - Updated with responsive features

import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MenuItem } from 'src/app/common/interface/menuItem';
import { CountrylistComponent } from 'src/app/common/components/countrylist/countrylist.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from 'src/app/common/pipe/safe-url.pipe';
import { FrameService } from 'src/app/common/services/frame.service';
import { SuperuserService } from 'src/app/modules/Admin/superuser.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [
    CommonModule, 
    CountrylistComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    SafeUrlPipe,
    RouterModule,
    MatListModule, 
    MatCardModule,
    RouterOutlet, 
    MatTooltipModule,
    SidenavComponent
  ],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.sass'
})
export class MainlayoutComponent implements OnDestroy {
  isAdmin = false;
  currentUserEmail = '';
  currentUserRole = '';
  isSuperUser: boolean = false;
  
  // Screen size tracking
  isMobile = false;
  isTablet = false;
  isDesktop = true;
  
  @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;
  rawLink: string | null = null;
  currentLink: SafeResourceUrl | null = null;
  
  @ViewChild('sideNav') sideNav!: MatSidenav;
  @ViewChild('sideNavBar') sideNavBar!: MatSidenav;
  
  sidenavIsOpened = true;
  disableSideNavClose = true;
  hiddenItems = false;
  selectedModuleId: string | null = null;
  
  private subscriptions: Subscription[] = [];
  
  constructor(
    private frameService: FrameService, 
    private sanitizer: DomSanitizer, 
    private authService: AuthService, 
    private router: Router,
    private superuserService: SuperuserService,
    private breakpointObserver: BreakpointObserver
  ) {
    // Initialize responsive behavior
    this.initializeResponsiveLayout();
    
    // Frame service subscription
    const frameSubscription = this.frameService.currentLink$.subscribe(link => {
      if (link) {
        this.rawLink = link;
        this.currentLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
        setTimeout(() => this.checkIframeLoaded(), 500);
      } else {
        this.currentLink = null;
      }
    });
    
    this.subscriptions.push(frameSubscription);
  }

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();

    if (user) {
      this.currentUserEmail = user.email ?? '';
      this.isSuperUser = false;
      this.currentUserRole = 'user';

      const superUserSubscription = this.superuserService.getSuperUsers().subscribe(users => {
        const found = users.some(u => u.email === user.email);
        if (found) {
          this.isSuperUser = true;
          this.currentUserRole = 'superuser';
        }

        console.log('Logged In User:', this.currentUserEmail);
        console.log('Role:', this.currentUserRole);
      });
      
      this.subscriptions.push(superUserSubscription);
    } else {
      this.currentUserRole = 'guest';
      this.isSuperUser = false;
      console.log('No user logged in');
    }
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initializeResponsiveLayout() {
    // Monitor screen size changes
    const breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.XSmall,  // < 600px
      Breakpoints.Small,   // 600px - 959px
      Breakpoints.Medium,  // 960px - 1279px
      Breakpoints.Large,   // 1280px - 1919px
      Breakpoints.XLarge   // >= 1920px
    ]).subscribe(result => {
      this.updateLayoutForScreenSize(result.breakpoints);
    });
    
    this.subscriptions.push(breakpointSubscription);
  }

  private updateLayoutForScreenSize(breakpoints: any) {
    this.isMobile = breakpoints[Breakpoints.XSmall];
    this.isTablet = breakpoints[Breakpoints.Small];
    this.isDesktop = breakpoints[Breakpoints.Medium] || 
                     breakpoints[Breakpoints.Large] || 
                     breakpoints[Breakpoints.XLarge];

    // Adjust sidebar behavior based on screen size
    if (this.isMobile) {
      this.sidenavIsOpened = false;
      this.disableSideNavClose = false;
      // Close subsection sidebar on mobile by default
      if (this.sideNavBar && this.sideNavBar.opened) {
        this.sideNavBar.close();
      }
    } else if (this.isTablet) {
      this.sidenavIsOpened = true;
      this.disableSideNavClose = true;
    } else {
      this.sidenavIsOpened = true;
      this.disableSideNavClose = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    
    // Auto-close subsection sidebar on small screens when resizing
    if (width <= 768 && this.sideNavBar && this.sideNavBar.opened) {
      this.sideNavBar.close();
    }
    
    // Update layout flags
    this.isMobile = width < 600;
    this.isTablet = width >= 600 && width < 960;
    this.isDesktop = width >= 960;
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    // Handle orientation changes on mobile devices
    setTimeout(() => {
      if (this.isMobile && this.sideNavBar && this.sideNavBar.opened) {
        this.sideNavBar.close();
      }
    }, 100);
  }

  // Updated menu structure with better organization
  sideMenu: MenuItem[] = [
      {
      id: 'login',
      icon: 'login',
      name: 'Login',
      subsections: [
        { 
          id: 'Login', 
          name: 'Login', 
          route: '/auth/login', 
          icon: 'login' 
        }
      ]
    },
    {
      id: 'dashboard',
      icon: 'dashboard',
      name: 'GeoPortal',
      subsections: [
        { 
          id: 'world-visa', 
          name: 'World Visa', 
          route: '/dashboard/world-visa', 
          icon: 'travel_explore' 
        },
        { 
          id: 'world-opportunities', 
          name: 'World Opportunities', 
          route: '/dashboard/world-opportunities', 
          icon: 'public' 
        },
        { 
          id: 'uni-world', 
          name: 'Uni World', 
          route: '/dashboard/uni-world', 
          icon: 'school' 
        },
        { 
          id: 'recruitmentagencie', 
          name: 'Recruitment Agencies', 
          route: '/dashboard/recruitment-agencie', 
          icon: 'business_center' 
        }
      ]
    },
  
    {
      id: 'Admin',
      icon: 'admin_panel_settings',
      name: 'Admin',
      subsections: [
        { 
          id: 'SuperUserList', 
          name: 'Super User List', 
          route: '/admin/super-users-list', 
          icon: 'supervisor_account' 
        }
      ]
    }
  ];

  toggleSideBar(moduleId: string, isOpened: boolean): void {
    if (this.selectedModuleId !== moduleId) {
      this.selectedModuleId = moduleId;
      this.sideNavBar.open();
    } else {
      this.sideNavBar.toggle();
    }

    // On mobile, ensure main sidebar closes when subsection opens
    if (this.isMobile && this.sideNav && this.sideNav.opened) {
      this.sideNav.close();
    }
  }

  sideNavClosed(isOpened: boolean): void {
    if (isOpened) {
      this.sideNavBar.close();
    }
  }

  getSelectedModule(): MenuItem | undefined {
    return this.sideMenu.find(menu => menu.id === this.selectedModuleId);
  }

  checkIframeLoaded(): void {
    if (!this.iframeRef || !this.rawLink) return;

    const iframe = this.iframeRef.nativeElement;
    const timeout = setTimeout(() => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        const isIframeEmpty = !iframeDoc || iframeDoc.body?.innerHTML.trim() === '';

        if (isIframeEmpty) {
          window.open(this.rawLink as string, '_blank');
          this.currentLink = null;
        }
      } catch (e) {
        window.open(this.rawLink as string, '_blank');
        this.currentLink = null;
      }
    }, 2000);
  }

async logout() {
  try {
    // 1) Firebase sign-out (fast)
    await this.authService.logout();

    // 2) Remove only specific keys (fast)
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    sessionStorage.clear();

    // 3) Navigate to login immediately (no delay)
    this.router.navigate(['/auth/login']);

    // 4) Optional cache cleanup in background (non-blocking)
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => caches.delete(cacheName));
      });
    }

  } catch (error) {
    console.error('Logout failed:', error);
  }
}



  // Helper methods for responsive behavior
  shouldShowFullMenu(): boolean {
    return !this.isMobile;
  }

  shouldAutoCloseSidebar(): boolean {
    return this.isMobile || this.isTablet;
  }

  getSidebarMode(): 'side' | 'over' | 'push' {
    if (this.isMobile) {
      return 'over';
    } else if (this.isTablet) {
      return 'side';
    } else {
      return 'side';
    }
  }

  getSubsectionSidebarMode(): 'side' | 'over' | 'push' {
    return this.isMobile ? 'over' : 'over'; // Always use 'over' for subsection sidebar
  }

  // Method to handle clicks outside sidebar on mobile
  onMainContentClick(): void {
    if (this.shouldAutoCloseSidebar()) {
      if (this.sideNavBar && this.sideNavBar.opened) {
        this.sideNavBar.close();
      }
      if (this.isMobile && this.sideNav && this.sideNav.opened) {
        this.sideNav.close();
      }
    }
  }

  // Method to open external link in new tab
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  // Method to close iframe
  closeIframe(): void {
    this.currentLink = null;
  }

  // Method to toggle main sidebar on mobile
  toggleMainSidebar(): void {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }
}