import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable()

export class GithubService{
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}


  getSnippets(owner: string, repo: string, paths: string[]): Observable<any[]> {
    const observables = paths.map(path => {
      const url = `${this.apiUrl}/repos/${owner}/${repo}/contents/${path}`;
      return this.http.get(url);
    });

    return forkJoin(observables);
  }
}
