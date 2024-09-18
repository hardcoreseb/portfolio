export class Experience {
    jobtitle: string;
    company: string;
    description: string;
    url: string;
    dateRange: string;
    technologies: string[];
  
    constructor(jobtitle: string, company: string, description: string, url: string, dateRange: string, technologies: string[]) {
      this.jobtitle = jobtitle;
      this.company = company;
      this.description = description;
      this.url = url;
      this.dateRange = dateRange;
      this.technologies = technologies;
    }
  }