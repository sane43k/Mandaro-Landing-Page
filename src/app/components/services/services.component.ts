import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {
  // scrollPosition: number = 0;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
  //   if (this.scrollPosition !== 550) {
  //     return;
  //   }
  //   console.log(`Пользователь прокрутил: ${this.scrollPosition}px`);
  // }
}