import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AboutEducationComponent } from './components/about-education/about-education.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AboutEducationComponent}
    ])
  ],
  declarations: [
    AboutEducationComponent
  ]
})

export class AboutEducationModule{}
