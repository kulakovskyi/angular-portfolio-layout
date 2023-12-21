import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environment/environment";
import {map, Observable} from "rxjs";
import {InterestsDataInterface} from "../types/interests-data.interface";


@Injectable()

export class InterestsService{
  constructor(private http: HttpClient) {
  }

  create(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/interests.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  getInterests(): Observable<InterestsDataInterface[]>{
    return this.http.get(`${environment?.['fbDBUrl']}/interests.json`).pipe(
      map(response => [].concat(...Object.values(response)))
    )
  }


}
