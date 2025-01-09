import { Component, HostListener, OnInit } from '@angular/core';
import { SocialMediaComponent } from "../ui-kit/social-media/social-media.component";
import { WindowService } from '../../services/window.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaComponent,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit{
  isMobile: boolean = false;

  constructor(private windowService: WindowService) {}

  @HostListener('window:resize')
  onResize(): void {
    const win = this.windowService.nativeWindow;
    if (win) {
      this.isMobile = win.innerWidth <= 768;
    }
  }

  ngOnInit(): void {
    this.onResize();
  }
}
