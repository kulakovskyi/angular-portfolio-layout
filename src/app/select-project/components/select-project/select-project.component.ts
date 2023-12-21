import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsData, ProjectsDataInterface} from "../../../projects/data/projects-data";

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectProjectComponent implements OnInit{

  project: ProjectsDataInterface | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const anyText = this.route.snapshot.paramMap.get('id');
    this.project = ProjectsData.find(item => item.title === anyText);
    console.log(anyText);
    console.log(this.project)
  }

}


