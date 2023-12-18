import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageInterface} from "../../types/message.interface";
import {FormService} from "../../services/form.service";
import {AlertServices} from "../../../shared/services/alert.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class FormComponent implements OnInit {
  form!: FormGroup
  submitted = false

  constructor(private formService: FormService,
              private alertService: AlertServices) {
  }

  submit() {
    if (this.form.invalid) return
    this.submitted = true
    const message: any = {...this.form.value}
    const objectAsString: string = Object.keys(message)
      .map(key => `${key}: ${message[key]}`)
      .join('\n');
    this.formService.sendEmail(objectAsString).then(
       () => {
         this.alertService.success('Success')
         this.submitted = false
         this.form.reset()
      }, (err) =>  {
        this.alertService.danger('Failure')
        this.submitted = false
      }
    )
  }

  ngOnInit() {
    this.initialForm()
  }

  initialForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      message: new FormControl(null, [
        Validators.required,
      ]),

    })
  }
}
