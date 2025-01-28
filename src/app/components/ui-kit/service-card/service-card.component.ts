import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  @Input() header: string = '';
  @Input() items: string[] = [];
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = 'kek';
}