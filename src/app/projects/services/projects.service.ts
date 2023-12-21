import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {map, Observable} from "rxjs";
import {ProjectsDataInterface} from "../types/projects-data.interface";

@Injectable()

export class ProjectsService{
  constructor(private http: HttpClient) {
  }

  create(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/projects.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  getInterests(): Observable<ProjectsDataInterface[]>{
    return this.http.get(`${environment?.['fbDBUrl']}/projects.json`).pipe(
      map(response => [].concat(...Object.values(response)))
    )
  }


}
