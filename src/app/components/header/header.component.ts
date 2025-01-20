import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { Router } from '@angular/router';
import { LogoComponent } from '../ui-kit/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  isMainMenuShow: boolean = false;

  constructor(private windowService: WindowService, private router: Router) {
  }

  ngOnInit(): void {
    const win = this.windowService.nativeWindow;  
    win?.addEventListener('scroll', () => {
      const header = document.querySelector('.header-section');
      const bodyStyle = document.body.style;

      if (win.scrollY) {
        header?.classList.add('fixed');
        bodyStyle.cssText = `
          padding-top: 80px;
        `;
      } else {
        header?.classList.remove('fixed');
        bodyStyle.cssText = `
          padding-top: 0;
        `;
      }
    })
  }

  showMainMenu(): void {
    const burgerBtn = document.querySelector('.burger-btn');
    const mainMenu = document.querySelector('.main-menu');
    const bodyStyle = document.body.style;
    const win = this.windowService.nativeWindow;

    burgerBtn?.classList.toggle('show');
    mainMenu?.classList.toggle('show');
    
    if (mainMenu?.classList.contains('show')) {
      this.isMainMenuShow = true;
      if (win!.scrollY) {
        bodyStyle.cssText = `
          overflow: hidden;
          padding-top: 80px;
        `;
      } else {
        bodyStyle.cssText = `
          overflow: hidden;
        `;
      }
    } else {
      this.isMainMenuShow = false;
      if (win!.scrollY) {
        bodyStyle.cssText = `
          overflow: auto;
          padding-top: 80px;
        `;
      } else {
        bodyStyle.cssText = `
          overflow: auto;
        `;
      }
    }
  }

  hideMainMenu(): void {
    if (this.isMainMenuShow) {
      this.showMainMenu();
    }
  }

  scrollToForm(): void {
    this.hideMainMenu();

    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  navigateAndScroll(): void {
    this.router.navigate([''])
      .then(() => {
        this.scrollToForm();
      });
  }
}