import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EducationResponseInterface} from "../../../../types/education-response.interface";
import {EditService} from "../../../../services/edit.service";
import {AlertServices} from "../../../../../shared/services/alert.service";
import {catchError, Subscription, throwError} from "rxjs";

@Component({
  selector: 'app-education-user',
  templateUrl: './education-user.component.html',
  styleUrls: ['./education-user.component.scss']
})
export class EducationUserComponent implements OnInit, OnDestroy{
  formEducationUser!: FormGroup
  educations!: EducationResponseInterface[]
  userEducationSub$!: Subscription
  createEducationSub$!: Subscription
  editorConfig = {
    toolbar: [
      ['image']
    ],
  };

  constructor(private editService: EditService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormEducationUser()
    this.userEducationSub$ = this.editService.getUserEducation().subscribe((res)  => {
      this.educations = res
    })
  }

  ngOnDestroy() {
    if (this.userEducationSub$) this.userEducationSub$.unsubscribe()
    if (this.createEducationSub$) this.createEducationSub$.unsubscribe()
  }

  submitEducationUser() {
    if (this.formEducationUser.invalid) return
    this.createEducationSub$ = this.editService.createUserEducation({...this.formEducationUser.value})
      .pipe(
        catchError(error => {
          this.alertService.danger('Failure');
          return throwError(error)
        })
      )
      .subscribe(() => {
        this.userEducationSub$ = this.editService.getUserEducation().subscribe((res)  => {
          this.educations = res
        })
        this.alertService.success('Success');
      })
  }

  deleteEducations(id: string) {
    this.editService.removeUserEducation(id)
      .pipe(
        catchError(error => {
          this.alertService.danger('Failure');
          return throwError(error)
        })
      )
      .subscribe(() => {
        this.alertService.success('Success');
        this.educations = this.educations.filter(education => education.id !== id)
      })
  }

  initialFormEducationUser() {
    this.formEducationUser = new FormGroup({
      title_education: new FormControl(null),
      text_education: new FormControl(null),
      image: new FormControl(null)
    })
  }

}
