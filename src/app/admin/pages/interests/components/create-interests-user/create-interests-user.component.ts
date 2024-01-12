import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, Subscription, throwError} from "rxjs";
import {EditService} from "../../../../services/edit.service";
import {AlertServices} from "../../../../../shared/services/alert.service";

@Component({
  selector: 'app-create-interests-user',
  templateUrl: './create-interests-user.component.html',
  styleUrls: ['./create-interests-user.component.scss']
})
export class CreateInterestsUserComponent implements OnInit{
  formInterestsUser!: FormGroup
  createInterestsSub$!: Subscription
  editorConfig = {
    toolbar: [
      ['image']
    ],
  };

  constructor(private editService: EditService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormInterestsUser()
  }

  submitInterestsUser() {
    if (this.formInterestsUser.invalid) return
    this.createInterestsSub$ = this.editService.createUserInterests({...this.formInterestsUser.value})
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

  initialFormInterestsUser() {
    this.formInterestsUser = new FormGroup({
      title_interests: new FormControl(null),
      text_interests: new FormControl(null),
      image_interests: new FormControl(null)
    })
  }
}
