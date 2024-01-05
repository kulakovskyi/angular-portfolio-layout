import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from "../../../../../admin/services/edit.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy{
  textAbout!: string
  aboutTestSub$!: Subscription
  constructor(private editService: EditService) {
  }
  ngOnInit() {
    this.aboutTestSub$ = this.editService.getUserAboutInfo().subscribe(res => {
      this.textAbout = res.text
    })
  }

  ngOnDestroy() {
    if(this.aboutTestSub$) this.aboutTestSub$.unsubscribe()
  }

}
