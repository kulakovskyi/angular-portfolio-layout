import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ContactsComponent } from './components/contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";
import { NavBarContactsComponent } from './components/nav-bar-contacts/nav-bar-contacts.component';
import { FormComponent } from './components/form/form.component';
import { FormOutputComponent } from './components/form-output/form-output.component';
import {AboutModule} from "../about/about.module";

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AboutModule
  ],
  exports: [
    NavBarContactsComponent
  ],
  declarations: [
    ContactsComponent,
    NavBarContactsComponent,
    FormComponent,
    FormOutputComponent
  ]
})

export class ContactsModule{}
