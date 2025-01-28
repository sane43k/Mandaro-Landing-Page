import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reason-card',
  standalone: true,
  imports: [],
  templateUrl: './reason-card.component.html',
  styleUrl: './reason-card.component.scss'
})

export class ReasonCardComponent {
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = '';
}