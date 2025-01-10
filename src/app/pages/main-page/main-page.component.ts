import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ContactFormComponent,
    MainComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}