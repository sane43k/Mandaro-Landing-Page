import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { MainComponent } from '../../components/main/main.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ContactFormComponent,
    MainComponent,
    ServicesComponent,
    ExperienceComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
