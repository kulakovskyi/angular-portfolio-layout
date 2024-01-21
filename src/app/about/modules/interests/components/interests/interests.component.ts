import {Component, OnInit} from '@angular/core';
import {InterestsService} from "../../services/interests.service";
import {Observable} from "rxjs";
import {InterestsDataInterface} from "../../types/interests-data.interface";
import {fadeInOut} from "../../../../../shared/animation/fade-animation";
import {EditService} from "../../../../../admin/services/edit.service";
import {InterestsResponseInterface} from "../../../../../admin/types/interests-response.interface";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  animations: [fadeInOut]
})
export class InterestsComponent implements OnInit{
  interestsData$! : Observable<InterestsResponseInterface[]>

  constructor(private interestsService: InterestsService,
              private editService: EditService) {
  }

  ngOnInit() {
    this.interestsData$ = this.editService.getUserInterests()
  }
}
