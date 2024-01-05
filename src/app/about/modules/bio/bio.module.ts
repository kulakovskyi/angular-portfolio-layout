import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BioComponent } from './componets/bio/bio.component';
import {RouterModule} from "@angular/router";
import { PersonalInfoComponent } from './componets/personal-info/personal-info.component';
import { CodeSnippetComponent } from './componets/code-snippet/code-snippet.component';
import {Highlight} from "ngx-highlightjs";
import {BioService} from "./services/bio.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BioComponent},
      {path: 'code', component: CodeSnippetComponent}
    ]),
    Highlight,

  ],
  declarations: [
    BioComponent,
    PersonalInfoComponent,
    CodeSnippetComponent
  ],
  providers:[
    BioService
  ]
})

export class BioModule{}
