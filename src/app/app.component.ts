import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Mandaro';
  
  // ngOnInit(): void {
  //   if (typeof window !== 'undefined' && window.sessionStorage) {
  //     window.addEventListener('beforeunload', () => {
  //       sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  //     });

  //     window.addEventListener('load', () => {
  //       const savedPosition = sessionStorage.getItem('scrollPosition');
  //       if (savedPosition) {
  //         window.scrollTo(0, parseInt(savedPosition, 10));
  //       }
  //     });
  //   }
  // }
}
