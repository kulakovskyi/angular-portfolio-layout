import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BioComponent } from './componets/bio/bio.component';
import {RouterModule} from "@angular/router";
import { PersonalInfoComponent } from './componets/personal-info/personal-info.component';
import { CodeSnippetComponent } from './componets/code-snippet/code-snippet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BioComponent}
    ]),

  ],
  declarations: [
    BioComponent,
    PersonalInfoComponent,
    CodeSnippetComponent
  ]
})

export class BioModule{}
