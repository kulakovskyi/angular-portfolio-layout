import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsService} from "../../../projects/services/projects.service";
import {catchError, map, Observable, of} from "rxjs";
import {ProjectsDataInterface} from "../../../projects/types/projects-data.interface";

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectProjectComponent implements OnInit{
  project$!: Observable<ProjectsDataInterface | undefined>

  constructor(private route: ActivatedRoute,
              private projectsService: ProjectsService) {
  }

  ngOnInit() {
    const anyText = this.route.snapshot.paramMap.get('id');
    this.project$ = this.projectsService.getInterests().pipe(
      map(projects => projects.find(item => item.title === anyText)),
      catchError(() => of(undefined))
    );

  }

}


