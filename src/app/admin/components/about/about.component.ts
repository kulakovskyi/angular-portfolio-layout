import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from "../../services/edit.service";
import {catchError, Subscription, throwError} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertServices} from "../../../shared/services/alert.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  formAboutUser!: FormGroup
  aboutSub$!: Subscription
  updateAboutSub$!: Subscription

  constructor(private editService: EditService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormAboutUser()
    this.aboutSub$ = this.editService.getUserAboutInfo().subscribe(res => {
      this.formAboutUser.patchValue({
        about_user: res.text,
      });
    })
  }

  ngOnDestroy() {
    if (this.aboutSub$) this.aboutSub$.unsubscribe()
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
