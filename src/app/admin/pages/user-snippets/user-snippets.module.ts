import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { UserSnippetsComponent } from './components/user-snippets/user-snippets.component';
import {RouterModule} from "@angular/router";
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserSnippetsComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserSnippetsComponent,
    UserFormComponent,
    UserBioComponent
  ]
})

export class UserSnippetsModule{}
