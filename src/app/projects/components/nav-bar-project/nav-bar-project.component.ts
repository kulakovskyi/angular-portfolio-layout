import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../shared/services/media.service";

@Component({
  selector: 'app-nav-bar-project',
  templateUrl: './nav-bar-project.component.html',
  styleUrls: ['./nav-bar-project.component.scss']
})
export class NavBarProjectComponent implements OnInit{
  isListOpen = false;
  screenWidth!: number;
  isMenuOpen = false;

  constructor(private mediaService: MediaService) {
  }

  ngOnInit() {
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })

  }

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
