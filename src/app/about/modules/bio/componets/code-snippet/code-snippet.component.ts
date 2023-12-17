import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {SnippetGithubInterface} from "../../types/snippet-github.interface";
import {environment} from "../../../../../../environment/environment";

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit{
  snippets: string[] = [];
  response!: HighlightAutoResult;

  constructor(private githubService: GithubService) {}


  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }



  ngOnInit() {
    this.getSnippets();
  }

  getSnippets() {
    const owner: string = environment.gitHubUser;
    const repo: string = environment.repoSnippet;
    const paths: string[] = environment.pathSnippet

    this.githubService.getSnippets(owner, repo, paths).subscribe(
      (data: SnippetGithubInterface[]) => {
        console.log(data)
        this.snippets = data.map(snippet => atob(snippet.content));
      },
      (error) => {
        console.error('Error fetching snippets:', error);
      }
    );
  }

}
