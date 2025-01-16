import { Component } from '@angular/core';
import { TagComponent } from '../ui-kit/tag/tag.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TagComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

}
