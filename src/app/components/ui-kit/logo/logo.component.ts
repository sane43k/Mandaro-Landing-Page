import { Component, Input } from '@angular/core';
import { WindowService } from '../../../services/window.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})

export class LogoComponent {
  @Input() logoType: 'bw' | 'colored' | null = null;

  constructor(private router: Router, private windowService: WindowService) {}

  navigateToMain(): void {
    this.router.navigate([''])
      .then(() => {
        const win = this.windowService.nativeWindow;
        win?.scrollTo({
          top: 0,
        });
      })
  }
}