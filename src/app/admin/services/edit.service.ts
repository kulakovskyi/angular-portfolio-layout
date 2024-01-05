import {Injectable} from "@angular/core";
import {environment} from "../../../environment/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserDataInterface} from "../types/user-data.interface";

@Injectable()

export class EditService{

  constructor(private http: HttpClient) {}


  create(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/bio-user.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  createUserAbout(des: any){
    return this.http.post(`${environment?.['fbDBUrl']}/about-user.json`, des).pipe(
      map(res => {
        return res
      })
    )
  }

  getUserData(): Observable<UserDataInterface>{
    return this.http.get<UserDataInterface>(`${environment?.['fbDBUrl']}/user-data/-NmG41cETnbZae0_4L7Q.json`)
  }

  updateUserData(data: UserDataInterface): Observable<UserDataInterface>{
    return this.http.patch<UserDataInterface>(`${environment?.['fbDBUrl']}/user-data/-NmG41cETnbZae0_4L7Q.json`, data)
  }

  getUserAboutInfo() :Observable<{text: string}>{
    return this.http.get<{text: string}>(`${environment?.['fbDBUrl']}/about-user/-NnO0z26nQYDj-2DPrQ0.json`)
  }

  updateUserAboutInfo(data: {text: string}): Observable<{text: string}>{
    return this.http.patch<{text: string}>(`${environment?.['fbDBUrl']}/about-user/-NnO0z26nQYDj-2DPrQ0.json`, data)
  }


}
