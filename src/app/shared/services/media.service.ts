import {Injectable} from "@angular/core";
import {debounceTime, distinctUntilChanged, fromEvent, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MediaService{
  screenWidth!: number;
  initialResize(): Observable<number>{
    this.screenWidth = window.innerWidth;
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(300),
        map(() => window.innerWidth),
        distinctUntilChanged()
      );

    return resize$

  }

  checkScreenWidth() {
    return window.innerWidth;
  }


}
