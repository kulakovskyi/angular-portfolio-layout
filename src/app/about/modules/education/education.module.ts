import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { EducationComponent } from './componets/education/education.component';
import {RouterModule} from "@angular/router";
import {QuillViewComponent} from "ngx-quill";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: EducationComponent}
        ]),
        QuillViewComponent,
    ],
  declarations: [
    EducationComponent
  ]
})

export class EducationModule{}
