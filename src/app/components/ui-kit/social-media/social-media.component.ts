import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  @Input() isFooter: boolean = false;
}