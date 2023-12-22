import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../../types/auth.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup
  submitted = false
  message: string = ''

  constructor(public auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if(params['loginAgain']){
        this.message = 'Sign in in account'
      } else if(params['authFailed']) {
        this.message = 'Session has ended, please re-enter your details'
      }


    })

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
    })

  }

  submit() {
    if(this.form.invalid){
      return
    }

    this.submitted = true
    const user: User = {...this.form.value}
    this.auth.login(user).subscribe(() => {
      this.form.reset()
      //this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, ()=>{
      this.submitted = false
    })
  }

}
