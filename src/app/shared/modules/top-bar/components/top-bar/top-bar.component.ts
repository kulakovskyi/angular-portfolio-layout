import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  isMenuOpen = false;
  screenWidth!: number;

  constructor() { }

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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isScreenWidthLessThan1080(): boolean {
    return this.screenWidth < 1080;
  }

  checkScreenWidth() {
    this.screenWidth = window.innerWidth;
  }

}
