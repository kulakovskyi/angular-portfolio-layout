import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environment/environment";
import {map, Observable} from "rxjs";

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

  getDescriptionCode(): Observable<Array<{text: string}>>{
    return this.http.get(`${environment?.['fbDBUrl']}/description-code.json`).pipe(
      map(response => [].concat(...Object.values(response)))
    )
  }
}
