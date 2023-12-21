import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProjectsService} from "../../services/projects.service";
import {ProjectsDataInterface} from "../../types/projects-data.interface";
import {fadeInOut} from "../../../shared/animation/fade-animation";
import {ProjectsData} from "../../data/projects-data";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  animations: [fadeInOut]
})
export class AllProjectsComponent implements OnChanges{
  @Input() selectedTech: string[] = ['angular'];

  projects$!: Observable<ProjectsDataInterface[]>

  data = ProjectsData

  constructor(private projectsService: ProjectsService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    //this.projectsService.create(ProjectsData).subscribe()

    this.projects$ = this.projectsService.getInterests().pipe(
      map(projects => projects.filter(project => project.tech.some(tech => this.selectedTech.includes(tech))))
    )
  }


}
