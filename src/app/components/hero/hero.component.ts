import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeadlineComponent, DescriptionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
