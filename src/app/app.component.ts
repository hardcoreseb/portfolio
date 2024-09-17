import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from "./components/headline/headline.component";
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadlineComponent, HeroComponent, NavbarComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
