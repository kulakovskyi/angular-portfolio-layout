import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {environment} from "../../../../../../environment/environment";
import {forkJoin, map, Observable, of, Subscription} from "rxjs";
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
    this.dSub$ = forkJoin([
      this.bioService.getDescriptionCode(),
      this.bioService.getSnippets()
    ]).subscribe(([descriptionCode, snippets]) => {
      this.descriptionTextArray = descriptionCode;

      if (this.descriptionTextArray && this.descriptionTextArray.length > 0) {
        this.snippets$ = of(snippets.map(snippet => ({
          code: snippet.code,
          text: this.descriptionTextArray.shift().text
        })));
      } else {
        console.error("Error: descriptionTextArray is not defined or empty");
        this.snippets$ = of([]);
      }
    });
  }

  ngOnDestroy() {
    if(this.dSub$) this.dSub$.unsubscribe()
  }

  getSnippets() {
    const paths: string[] = environment.pathSnippet;

    const snippetRequests = paths.map(path => this.githubService.getSnippetContent(path));

    this.snippets$ = forkJoin(snippetRequests).pipe(
      map((data: string[]) => {
        return data.map((snippet, index) => {
          return {
            code: snippet,
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
