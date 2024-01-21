import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { InterestsComponent } from './components/interests/interests.component';
import {RouterModule} from "@angular/router";
import { InterestItemComponent } from './components/interest-item/interest-item.component';
import {InterestsService} from "./services/interests.service";
import {QuillViewComponent} from "ngx-quill";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: InterestsComponent}
        ]),
        QuillViewComponent,
    ],
  declarations: [
    InterestsComponent,
    InterestItemComponent
  ],
  providers:[
    InterestsService
  ]
})

export class InterestsModule{}
