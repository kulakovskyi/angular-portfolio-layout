import {Component, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.scss']
})
export class SelectProjectComponent implements OnInit{

  project$!: Observable<any>

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.project$ = this.route.params
      .pipe(switchMap((params: Params) => {
       console.log(params)
        return (params['id'])
      }))
  }

}


