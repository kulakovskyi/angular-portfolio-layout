import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {AuthService} from "./services/auth.service";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./services/auth.guard";
import {EditService} from "./services/edit.service";
import {AlertModule} from "../shared/modules/alert/alert.module";
import {BioService} from "../about/modules/bio/services/bio.service";
import { TopBarAdminComponent } from './components/top-bar-admin/top-bar-admin.component';
import {QuillModule} from "ngx-quill";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
          {path: 'user-snippets', loadChildren: () => import('./pages/user-snippets/user-snippets.module').then(m => m.UserSnippetsModule), canActivate: [AuthGuard]},
          {path: 'about-education', loadChildren: () => import('./pages/about-education/about-education.module').then(m => m.AboutEducationModule), canActivate: [AuthGuard]},
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
    TopBarAdminComponent,
  ],
  providers:[
    AuthGuard,
    AuthService,
    EditService,
    BioService
  ]
})

export class AdminModule{}
