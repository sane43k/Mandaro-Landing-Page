import { Component } from '@angular/core';
import { TagComponent } from '../ui-kit/tag/tag.component';
import { SocialMediaComponent } from '../ui-kit/social-media/social-media.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TagComponent,
    SocialMediaComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
