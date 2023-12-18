import { Component } from '@angular/core';
import {ProjectsData, ProjectsDataInterface} from "../../data/projects-data";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {

  projects: ProjectsDataInterface[] = ProjectsData


}
