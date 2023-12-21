import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {SnippetGithubInterface} from "../../types/snippet-github.interface";
import {environment} from "../../../../../../environment/environment";
import {map, Observable, Subscription} from "rxjs";
import {Data, DataInterface} from "../../../../../data/data";
import {BioService} from "../../services/bio.service";


@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit, OnDestroy{
  response!: HighlightAutoResult;
  snippets$!: Observable<Array<{code: string, text: string}>>
  data: DataInterface =  Data
  descriptionTextArray: Array<{text: string}> = []
  dSub$! : Subscription

  constructor(private githubService: GithubService,
              private bioService: BioService) {}

  ngOnInit() {
    this.dSub$ = this.bioService.getDescriptionCode().subscribe(res => {
      this.descriptionTextArray = res
      this.getSnippets();
    })
  }

  ngOnDestroy() {
    if(this.dSub$) this.dSub$.unsubscribe()
  }

  getSnippets() {
    const owner: string = environment.gitHubUser;
    const repo: string = environment.repoSnippet;
    const paths: string[] = environment.pathSnippet

    this.snippets$ = this.githubService.getSnippets(owner, repo, paths).pipe(
      map((data: SnippetGithubInterface[]) => {
        return data.map((snippet, index) => {
          return {
            code: atob(snippet.content),
            text: this.descriptionTextArray[index].text
          };
        });
      })
    );

  }
  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }

}
