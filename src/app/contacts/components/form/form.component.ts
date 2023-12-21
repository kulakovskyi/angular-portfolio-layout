import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageInterface} from "../../types/message.interface";
import {FormService} from "../../services/form.service";
import {AlertServices} from "../../../shared/services/alert.service";
import {FormOutputService} from "../../services/form-output.service";
import {fadeInOut} from "../../../shared/animation/fade-animation";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [fadeInOut]
})


export class FormComponent implements OnInit {
  form!: FormGroup
  submitted = false
  message: MessageInterface = {
    name: "",
    email: "",
    message: "",
  };

  constructor(private formService: FormService,
              private alertService: AlertServices,
              private formOutputService: FormOutputService) {
  }

  ngOnInit() {
    this.initialForm()
    this.formOutputService.currentMessage.subscribe(message => this.message = message);
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
