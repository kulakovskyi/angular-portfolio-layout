import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AboutEducationComponent } from './components/about-education/about-education.component';
import {RouterModule} from "@angular/router";
import { AboutUserComponent } from './components/about-user/about-user.component';
import { EducationUserComponent } from './components/education-user/education-user.component';
import {AlertModule} from "../../../shared/modules/alert/alert.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuillEditorComponent} from "ngx-quill";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AboutEducationComponent}
    ]),
    AlertModule,
    FormsModule,
    QuillEditorComponent,
    ReactiveFormsModule
  ],
  declarations: [
    AboutEducationComponent,
    AboutUserComponent,
    EducationUserComponent
  ]
})

export class AboutEducationModule{}
