import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Data, DataInterface} from "../../../data/data";
import {EditService} from "../../services/edit.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy{
  formUser!: FormGroup
  data: DataInterface = Data
  userDataSub$!: Subscription
  updateUserDataSub$!: Subscription

  constructor(private editService: EditService) {
  }

  ngOnInit() {
    this.initialFormUser()
    this.userDataSub$ = this.editService.getUserData().subscribe(res => {
      this.formUser.patchValue(res)
    })
  }

  ngOnDestroy() {
    if(this.userDataSub$) this.userDataSub$.unsubscribe()
    if(this.updateUserDataSub$) this.updateUserDataSub$.unsubscribe()
  }

  initialFormUser(){
    this.formUser = new FormGroup({
      user: new FormControl(null),
      github: new FormControl(null),
      profession: new FormControl(null),
      gitHubLinkUser: new FormControl(null),
      telegramLinkUser: new FormControl(null),
      instagramLinkUser: new FormControl(null),
      linkedinLinkUser: new FormControl(null),
      mailLinkUser: new FormControl(null),
    })
  }

  submitUser() {
    if(this.formUser.invalid) return
    this.updateUserDataSub$ = this.editService.updateUserData(this.formUser.value).subscribe()
  }
}
