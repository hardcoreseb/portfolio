import { Component, model } from '@angular/core';
import { Project } from '../../models/project.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public openNewTab(url: string) {
    window.open(url, '_blank')
  }

  projects: Project[] = [
    new Project(
      'Youtube2Spotify Converter',
      'Youtube2Spotify is a simple playlist converter to convert your Youtube playlist into a spotify playlist. This app was used to get some practice in python and one of its GUI-tools; in this case CustomTinker.',
      'https://github.com/hardcoreseb/youtube2spotify',
      '../../../assets/youtube2spotify.webp'
    ),
    new Project(
      'Image to WebP Converter',
      'WIP',
      'WIP',
      'WIP'
    )
  ]

}