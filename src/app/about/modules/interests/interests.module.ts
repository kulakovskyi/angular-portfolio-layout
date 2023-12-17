import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { InterestsComponent } from './componets/interests/interests.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InterestsComponent}
    ]),
  ],
  declarations: [
    InterestsComponent
  ]
})

export class InterestsModule{}
