import { Component } from '@angular/core';
import { TagComponent } from '../ui-kit/tag/tag.component';
import { ExperienceBlockComponent } from '../ui-kit/experience-block/experience-block.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    TagComponent,
    ExperienceBlockComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
