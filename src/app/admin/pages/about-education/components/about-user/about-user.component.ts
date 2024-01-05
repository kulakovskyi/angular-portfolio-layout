import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, Subscription, throwError} from "rxjs";
import {EditService} from "../../../../services/edit.service";
import {AlertServices} from "../../../../../shared/services/alert.service";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit, OnDestroy{
  formAboutUser!: FormGroup
  updateAboutSub$!: Subscription
  aboutUserInfoSub$!: Subscription

  constructor(private editService: EditService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormAboutUser()
    this.aboutUserInfoSub$ = this.editService.getUserAboutInfo().subscribe(res => {
      this.formAboutUser.patchValue({
        about_user: res.text,
      });
    })
  }

  ngOnDestroy() {
    if (this.updateAboutSub$) this.updateAboutSub$.unsubscribe()
    if (this.aboutUserInfoSub$) this.aboutUserInfoSub$.unsubscribe()
  }

  initialFormAboutUser() {
    this.formAboutUser = new FormGroup({
      about_user: new FormControl(null),
    })
  }


  submitAboutUser() {
    if (this.formAboutUser.invalid) return
    const modifiedData = {
      text: this.formAboutUser.value.about_user,
    };
    this.updateAboutSub$ = this.editService.updateUserAboutInfo(modifiedData)
      .pipe(
        catchError(error => {
          this.alertService.danger('Failure');
          return throwError(error)
        })
      )
      .subscribe(() => {
        this.alertService.success('Success');
      })
  }

}
