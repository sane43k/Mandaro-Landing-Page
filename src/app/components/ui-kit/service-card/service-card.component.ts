import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-50px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.6s ease')
      ])
    ]),
    trigger('textAnimation', [
      transition('hidden => visible', [
        query('.services-list__item', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(200, [
            animate('0.4s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('iconAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(.5)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden => visible', [
        animate('0.6s ease')
      ])
    ]),
  ]
})

export class ServiceCardComponent {
  @Input() header: string = '';
  @Input() items: string[] = [];
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = '';

  @HostBinding('@cardAnimation') cardAnimationState: string = 'hidden';
  @HostBinding('@textAnimation') textAnimationState: string = 'hidden';
  iconAnimationState: string = 'hidden';

  private static delayCounter = 0;
  private delay: number = 0;

  constructor() {
    this.delay = ServiceCardComponent.delayCounter;
    ServiceCardComponent.delayCounter += 400;
  }

  show() {
    this.cardAnimationState = 'visible';
    this.textAnimationState = 'visible';
    setTimeout(() => {
      this.iconAnimationState = 'visible';
    }, this.delay)
  }
}