import { Component, model } from '@angular/core';
import { Project } from '../../models/project.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public openNewTab(url: string) {
    window.open(url, '_blank')
  }

  public checkTechnologiesArray(project: Project) {
    for (var i=0; i<project.technologies.length; i++) {
      if (project.technologies[i] === "") return false;
    }
    return true;
  }

  projects: Project[] = [
    new Project(
      'Youtube2Spotify Converter',
      'Youtube2Spotify is a simple playlist converter to convert your Youtube playlist into a spotify playlist. This app was used to get some practice in python and one of its GUI-tools; in this case CustomTinker.',
      'https://github.com/hardcoreseb/youtube2spotify',
      '../../../assets/youtube2spotify.webp',
      ['Python', 'Spotify API', 'Youtube API']
    ),
  ]

}