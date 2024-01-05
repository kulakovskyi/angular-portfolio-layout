import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./services/auth.service";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EditComponent } from './components/edit/edit.component';
import {AuthGuard} from "./services/auth.guard";
import {EditService} from "./services/edit.service";
import {AlertModule} from "../shared/modules/alert/alert.module";
import {BioService} from "../about/modules/bio/services/bio.service";
import { TopBarAdminComponent } from './components/top-bar-admin/top-bar-admin.component';
import { AboutComponent } from './components/about/about.component';
import {QuillModule} from "ngx-quill";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
          {path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
          {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
        ]
      }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    QuillModule.forRoot(),
  ],
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    EditComponent,
    TopBarAdminComponent,
    AboutComponent
  ],
  providers:[
    AuthGuard,
    AuthService,
    EditService,
    BioService
  ]
})

export class AdminModule{}
