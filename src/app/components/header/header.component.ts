import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WindowService } from '../../services/window.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
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

  scrollToForm(isMainMenuBtn: boolean): void {
    if (isMainMenuBtn) {
      this.showMainMenu();
    }

    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  navigateAndScroll(isMainMenuBtn: boolean): void {
    this.router.navigate([''])
      .then(() => {
        this.scrollToForm(isMainMenuBtn);
      });
  }
}