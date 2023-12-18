import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit{
  screenWidth!: number;

  ngOnInit() {
    this.checkScreenWidth()
    this.initialResize()
  }

  initialResize(){
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(300),
        map(() => window.innerWidth),
        distinctUntilChanged()
      );

    resize$.subscribe((width: number) => {
      this.screenWidth = width;
    });

  }

  isScreenWidthLessThan1200(): boolean {
    return this.screenWidth < 1200;
  }
  checkScreenWidth() {
    this.screenWidth = window.innerWidth;
  }


}
