import {Component, OnInit} from '@angular/core';
import {Data} from "../../../data/data";
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit{
  data=  Data
  isListOpen = false;
  isListOpenContacts = false;
  screenWidth!: number;
  isMenuOpen = false;

  ngOnInit() {
    this.checkScreenWidth()
    this.initialResize()
  }

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }

  toggleListContacts() {
    this.isListOpenContacts = !this.isListOpenContacts;
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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
