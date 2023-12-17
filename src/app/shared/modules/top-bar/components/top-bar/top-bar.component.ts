import {Component, HostListener, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";
import {DataTopBar, DataTopBarInterface} from "../../data-top-bar";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  isMenuOpen = false;
  screenWidth!: number;
  dataLinks: DataTopBarInterface[] = DataTopBar

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

  checkScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

}
