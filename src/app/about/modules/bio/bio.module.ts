import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BioComponent } from './componets/bio/bio.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BioComponent}
    ]),
  ],
  declarations: [
    BioComponent
  ]
})

export class BioModule{}
