import {Component, OnInit} from '@angular/core';
import {InterestsService} from "../../services/interests.service";
import {Observable} from "rxjs";
import {InterestsDataInterface} from "../../types/interests-data.interface";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit{
  interestsData$! : Observable<InterestsDataInterface[]>

  constructor(private interestsService: InterestsService) {
  }

  ngOnInit() {
    this.interestsData$ = this.interestsService.getInterests()
  }
}
