import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { InterestsComponent } from './components/interests/interests.component';
import {RouterModule} from "@angular/router";
import { InterestsUserComponent } from './components/interests-user/interests-user.component';
import { CreateInterestsUserComponent } from './components/create-interests-user/create-interests-user.component';
import {QuillEditorComponent} from "ngx-quill";
import {ReactiveFormsModule} from "@angular/forms";
import {EditService} from "../../services/edit.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InterestsComponent}
    ]),
    QuillEditorComponent,
    ReactiveFormsModule
  ],
  declarations: [
    InterestsComponent,
    InterestsUserComponent,
    CreateInterestsUserComponent
  ],
  providers:[
    EditService
  ]
})

export class InterestsModule{}
