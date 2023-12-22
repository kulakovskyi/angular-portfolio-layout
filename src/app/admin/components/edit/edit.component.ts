import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {UserDataInterface} from "../../types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../shared/store/selectors";
import {updateCurrentUserAction} from "../../../shared/store/action/update-current-user.action";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy{
  formUser!: FormGroup
  currentUser$!: Observable<UserDataInterface | null>
  updateUserDataSub$!: Subscription

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.initialFormUser()
    this.currentUser$.subscribe(userData => {
      if(userData) this.formUser.patchValue(userData)
    })

  }

  ngOnDestroy() {
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
    const updateUserData = {...this.formUser.value}
    this.store.dispatch(updateCurrentUserAction({currentUserInput: updateUserData}))
  }
}
