import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ContactsComponent } from './components/contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactsComponent
  ]
})

export class ContactsModule{}
