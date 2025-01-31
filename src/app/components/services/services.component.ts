import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ServiceCardComponent } from '../ui-kit/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent implements OnInit, AfterViewInit {  
  private threshold: number = 0.45;

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined') {
      window.innerWidth <= 968 ? this.threshold = 0.3 : null;
      window.innerWidth <= 576 ? this.threshold = 0.2 : null;
    }
  }

  @ViewChildren(ServiceCardComponent) serviceCards!: QueryList<ServiceCardComponent>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.onResize();
  }

  ngAfterViewInit(): void {
    // проверка перед использованием IntersectionObserver, 
    // чтобы убедиться, что код выполняется в браузере,
    // а не в серверной среде (Angular Universal)
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            this.serviceCards.forEach(card => card.show());
            observer.disconnect();
          }
        }, 
        { threshold: this.threshold }
      );

      observer.observe(this.elementRef.nativeElement);
    }
  }
}