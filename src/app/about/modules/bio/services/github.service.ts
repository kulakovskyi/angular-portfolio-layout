import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, forkJoin, Observable, of} from "rxjs";
import {SnippetGithubInterface} from "../types/snippet-github.interface";
import {environment} from "../../../../../environment/environment";

@Injectable()

export class GithubService{
  private apiUrl = environment.apiGithub;

  constructor(private http: HttpClient) {}


  getSnippets(owner: string, repo: string, paths: string[]): Observable<SnippetGithubInterface[]> {
    const observables = paths.map(path => {
      const url = `${this.apiUrl}/repos/${owner}/${repo}/contents/${path}`;
      return this.http.get<SnippetGithubInterface>(url);
    });

    return forkJoin(observables);
  }

  getSnippetContent(path: string): Observable<string> {
    const url = `assets/snippets/${path}`;

    return this.http.get(url, { responseType: 'text' }).pipe(
      catchError(() => of(''))
    );
  }

}
