import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult} from "ngx-highlightjs";
import {SnippetGithubInterface} from "../../types/snippet-github.interface";
import {environment} from "../../../../../../environment/environment";
import {DescriptionCode} from "../../data/description-code";

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit{
  snippets: Array<{code: string, text: string}> = [];
  response!: HighlightAutoResult;
  descriptionCode: Array<{text: string}> = DescriptionCode

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

        this.snippets = data.map((snippet, index) => {
          return {
            code: atob(snippet.content),
            text: DescriptionCode[index].text
          };
        });
        console.log(this.snippets)
      },
      (error) => {
        console.error('Error fetching snippets:', error);
      }
    );
  }

}
