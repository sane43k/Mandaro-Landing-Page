import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience-block',
  standalone: true,
  imports: [
    TagComponent,
    NgFor,
    NgClass
  ],
  templateUrl: './experience-block.component.html',
  styleUrl: './experience-block.component.scss'
})

export class ExperienceBlockComponent {
  @Input() isOrangeBlock: boolean = false;
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: string[] = [];
}