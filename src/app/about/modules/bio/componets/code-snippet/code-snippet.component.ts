import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {HighlightAutoResult, HighlightLoader} from "ngx-highlightjs";

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit{
  snippets: any[] = [];
  response!: HighlightAutoResult;
  currentTheme: string = 'themeAndroidStudio';

  constructor(private githubService: GithubService,
              private hljsLoader: HighlightLoader) {}


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

  getSnippets(): void {
    const owner = 'kulakovskyi';
    const repo = 'twitter-angular-realworld';
    const paths = [
      'src/app/auth/store/selectors.ts',
      'src/app/auth/components/login/login.component.ts'

    ];

    this.githubService.getSnippets(owner, repo, paths).subscribe(
      (data: any[]) => {
        console.log(data)
        this.snippets = data.map(snippet => atob(snippet.content));
      },
      (error) => {
        console.error('Error fetching snippets:', error);
      }
    );
  }

}
