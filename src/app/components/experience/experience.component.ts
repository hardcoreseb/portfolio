import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { Experience } from '../../models/experience.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public openNewTab(url: string) {
    window.open(url, '_blank')
  }

  public checkTechnologiesArray(experience: Experience) {
    for (var i=0; i<experience.technologies.length; i++) {
      if (experience.technologies[i] === "") return false;
    }
    return true;
  }

  experiences: Experience[] = [
    new Experience(
      'Web Developer',
      'Medicomp GmbH',
      'Main focus was on maintaining the construct of the company code. It was written in a company-designed framework existing off HTML and PHP. Features and Bugfixes were also written in said framework.',
      'https://www.medicomp.de/',
      'August 2024 - September 2024',
      ['HTML', 'PHP']
    ),
    new Experience(
      'Apprenticeship as Computer Science Expert in the Subject Area: Software Development',
      'JobRouter AG',
      'Trained Fullstack Developer with focus on Frontend Development. Leading of small projects while incorporating user stories and working with different teams. Working with the UI/UX team to create high quality Web-Apps that contain the basics of accessibility.',
      'https://www.jobrouter.com/en/',
      'August 2022 - July 2024',
      ['HTML', 'SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Storybook', 'PHP', 'FatFree', 'Symfony']
    ),
    new Experience(
      'Apprenticeship as Computer Science Expert in the Subject Area: Software Development',
      'PRO MEDISOFT AG',
      'Trained in talking to customers as a 2nd and 3rd level Support.',
      'https://www.pro-medisoft.de/',
      'August 2021 - July 2022',
      ['Communication']
    ),
  ]


  projects: Project[] = [
    new Project(
      'Youtube2Spotify Converter',
      'Youtube2Spotify is a simple playlist converter to convert your Youtube playlist into a spotify playlist. This app was used to get some practice in python and one of its GUI-tools; in this case CustomTinker.',
      'https://github.com/hardcoreseb/youtube2spotify',
      '../../../assets/youtube2spotify.webp',
      ['Python', 'Spotify API', 'Youtube API']
    ),
    new Project(
      'Image to WebP Converter',
      'WIP',
      'WIP',
      'WIP',
      ['']
    )
  ]

}
