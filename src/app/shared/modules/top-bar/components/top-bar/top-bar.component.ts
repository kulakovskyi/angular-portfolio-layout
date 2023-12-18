import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";
import {MediaService} from "../../../../services/media.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  isMenuOpen = false;
  screenWidth!: number;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isScreenWidthLessThan1080(): boolean {
    return this.screenWidth < 1080;
  }


}
