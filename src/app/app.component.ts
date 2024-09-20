import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from "./components/headline/headline.component";
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SectionSeperatorComponent } from './components/section-seperator/section-seperator.component';
import { MouseGlowComponent } from './components/mouse-glow/mouse-glow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeadlineComponent, 
    HeroComponent, 
    NavbarComponent, 
    ProjectsComponent, 
    ExperienceComponent,
    SectionSeperatorComponent,
    MouseGlowComponent,
    FooterComponent,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
