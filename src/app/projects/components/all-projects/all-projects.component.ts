import {Component, Input, OnInit} from '@angular/core';
import {ProjectsData, ProjectsDataInterface} from "../../data/projects-data";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit{
  @Input() selectedTech: string[] = ['angular'];
  projects: ProjectsDataInterface[] = ProjectsData

  ngOnInit() {
    this.filterProjects()
  }


  get filteredProjects(): ProjectsDataInterface[] {
    return this.projects.filter(project => project.tech.some(tech => this.selectedTech.includes(tech)));
  }

  private filterProjects() {
  }


}
