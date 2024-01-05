import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule{}
