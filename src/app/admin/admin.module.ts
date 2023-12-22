import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./services/auth.service";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent}
        ]
      }
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminLayoutComponent,
    LoginComponent
  ],
  providers:[
    AuthService
  ]
})

export class AdminModule{}
