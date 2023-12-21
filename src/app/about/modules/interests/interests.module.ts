import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { InterestsComponent } from './components/interests/interests.component';
import {RouterModule} from "@angular/router";
import { InterestItemComponent } from './components/interest-item/interest-item.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InterestsComponent}
    ]),
  ],
  declarations: [
    InterestsComponent,
    InterestItemComponent
  ]
})

export class InterestsModule{}
