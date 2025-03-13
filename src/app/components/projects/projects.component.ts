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

  hoverTimer: any = 0;

  public openImageModal(imageSource: string) {
    this.hoverTimer = setTimeout(() => {
      const modal = document.getElementById("ImgModal");
      const modalImg = document.getElementById("ImgModalContent");
    
      modal!.style.display = "flex";
      modalImg!.setAttribute("src", imageSource);
    
      window.onclick = (event) => { 
        if (event.target === modal) {
          modal!.style.display = "none";
        }
      };
    }, 2000);
  }

  public stopHoverTimer() {
    clearTimeout(this.hoverTimer);
  }

  public closeImgModal() {
    const modal = document.getElementById("ImgModal");
    modal!.style.display = "none";
  }

  projects: Project[] = [
    new Project(
      'League of Legends Ranking App',
      'This app is a ranking app for the game League of Legends. It uses the Riot API to get the data from the user and displays it in a nice way. This app was used to get some practice in Frontend- & Responsive-Design and to get some experience with the Riot API.',
      'https://sparkling-toffee-bcc41a.netlify.app/',
      '../../../assets/League_Ranking_Project.webp',
      ['CSS', 'JavaScript', 'Riot Games API']
    ),
    new Project(
      'Youtube2Spotify Converter',
      'Youtube2Spotify is a simple playlist converter to convert your Youtube playlist into a spotify playlist. This app was used to get some practice in python and one of its GUI-tools; in this case CustomTinker.',
      'https://github.com/hardcoreseb/youtube2spotify',
      '../../../assets/youtube2spotify.webp',
      ['Python', 'Spotify API', 'Youtube API']
    ),
  ]

}