import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BioComponent } from './componets/bio/bio.component';
import {RouterModule} from "@angular/router";
import { PersonalInfoComponent } from './componets/personal-info/personal-info.component';
import { CodeSnippetComponent } from './componets/code-snippet/code-snippet.component';
import {GithubService} from "./services/github.service";
import {Highlight} from "ngx-highlightjs";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BioComponent, children:[

        ]},
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
    GithubService,

  ]
})

export class BioModule{}
