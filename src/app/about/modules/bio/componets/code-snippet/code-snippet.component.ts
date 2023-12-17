import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {SnippetGithubInterface} from "../../types/snippet-github.interface";
import {environment} from "../../../../../../environment/environment";
import {DescriptionCode} from "../../data/description-code";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit{
  response!: HighlightAutoResult;
  snippets$!: Observable<Array<{code: string, text: string}>>

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.getSnippets();
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
            text: DescriptionCode[index].text
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
