export class Project {
    title: string;
    description: string;
    url: string;
    image: string;
  
    constructor(title: string, description: string, url: string, image: string) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.image = image;
    }
  }