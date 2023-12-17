import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { EducationComponent } from './componets/education/education.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EducationComponent}
    ]),
  ],
  declarations: [
    EducationComponent
  ]
})

export class EducationModule{}
