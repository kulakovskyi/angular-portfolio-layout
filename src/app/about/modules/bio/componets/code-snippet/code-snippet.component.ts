import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {SnippetGithubInterface} from "../../types/snippet-github.interface";
import {environment} from "../../../../../../environment/environment";
import {map, Observable, Subscription} from "rxjs";
import {BioService} from "../../services/bio.service";
import {fadeInOut} from "../../../../../shared/animation/fade-animation";
import {UserDataInterface} from "../../../../../admin/types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../../../shared/store/selectors";


@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  animations: [fadeInOut]
})
export class CodeSnippetComponent implements OnInit, OnDestroy{
  currentUser$!: Observable<UserDataInterface | null>
  response!: HighlightAutoResult;
  snippets$!: Observable<Array<{code: string, text: string}>>
  descriptionTextArray: any = []
  dSub$! : Subscription

  constructor(private githubService: GithubService,
              private bioService: BioService,
              private store: Store) {}

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
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
