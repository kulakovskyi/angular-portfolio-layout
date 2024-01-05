import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environment/environment";
import {map, Observable} from "rxjs";
import {UserDataInterface} from "../../../../admin/types/user-data.interface";

@Injectable()

export class BioService{
  constructor(private http: HttpClient) {
  }

  create(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/description-code.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  createSnippets(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/description-snippets.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  getSnippets(): Observable<Array<{code: string}>>{
    return this.http.get<Array<{code: string}>>(`${environment?.['fbDBUrl']}/description-snippets/-NnNfW4vDHSTmUOKDJgY.json`)
  }

  updateSnippets(data: Record<string, { code: string }>): Observable<{code: string}[]>{
    return this.http.patch<{code: string}[]>(`${environment?.['fbDBUrl']}/description-snippets/-NnNfW4vDHSTmUOKDJgY.json`, data)
  }


  getDescriptionCode(): Observable<Array<{text: string}>>{
    return this.http.get<Array<{text: string}>>(`${environment?.['fbDBUrl']}/description-code/-NmBhBm9qrnq12MeD7jb.json`)
  }

  updateDescriptionCode(data: Record<string, { text: string }>): Observable<{text: string}[]>{
    return this.http.patch<{text: string}[]>(`${environment?.['fbDBUrl']}/description-code/-NmBhBm9qrnq12MeD7jb.json`, data)
  }

}
