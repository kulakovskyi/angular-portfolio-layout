import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditService} from "../../services/edit.service";
import {catchError, Observable, Subscription, throwError} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertServices} from "../../../shared/services/alert.service";
import {InterestsDataInterface} from "../../../about/modules/interests/types/interests-data.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  formAboutUser!: FormGroup
  formEducationUser!: FormGroup
  aboutSub$!: Subscription
  updateAboutSub$!: Subscription
  educations$!: Observable<InterestsDataInterface[]>
  editorConfig = {
    toolbar: [
      ['image']
    ],
  };

  constructor(private editService: EditService,
              private alertService: AlertServices) {
  }

  ngOnInit() {
    this.initialFormAboutUser()
    this.initialFormEducationUser()
    this.aboutSub$ = this.editService.getUserAboutInfo().subscribe(res => {
      this.formAboutUser.patchValue({
        about_user: res.text,
      });
    })

    this.educations$ = this.editService.getUserEducation()

    this.editService.getUserEducation().subscribe((res)  => {
      console.log(res)
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


  initialFormEducationUser() {
    this.formEducationUser = new FormGroup({
      title_education: new FormControl(null),
      text_education: new FormControl(null),
      image: new FormControl(null)
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

  submitEducationUser() {
    if (this.formEducationUser.invalid) return
    this.editService.createUserEducation({...this.formEducationUser.value}).subscribe(res => {
    })
  }
}
