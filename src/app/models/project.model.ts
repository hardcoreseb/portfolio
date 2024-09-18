export class Project {
    title: string;
    description: string;
    url: string;
    image: string;
    technologies: string[];
  
    constructor(title: string, description: string, url: string, image: string, technologies: string[]) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.image = image;
      this.technologies = technologies;
    }
  }