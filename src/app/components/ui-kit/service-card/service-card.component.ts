import { NgFor } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})

export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = 'kek';

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