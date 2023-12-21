import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProjectsService} from "../../services/projects.service";
import {ProjectsDataInterface} from "../../types/projects-data.interface";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnChanges{
  @Input() selectedTech: string[] = ['angular'];

  projects$!: Observable<ProjectsDataInterface[]>

  constructor(private projectsService: ProjectsService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    this.projects$ = this.projectsService.getInterests().pipe(
      map(projects => projects.filter(project => project.tech.some(tech => this.selectedTech.includes(tech))))
    )
  }


}
