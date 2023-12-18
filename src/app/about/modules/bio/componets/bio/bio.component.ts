import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";
import {MediaService} from "../../../../../shared/services/media.service";

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit{
  screenWidth!: number;

  constructor(private mediaService: MediaService) {
  }


  ngOnInit() {
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })
  }


  isScreenWidthLessThan1200(): boolean {
    return this.screenWidth < 1200;
  }

}
