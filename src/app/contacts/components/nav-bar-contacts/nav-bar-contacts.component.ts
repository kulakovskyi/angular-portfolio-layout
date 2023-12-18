import {Component, OnInit} from '@angular/core';
import {Data} from "../../../data/data";
import {MediaService} from "../../../shared/services/media.service";

@Component({
  selector: 'app-nav-bar-contacts',
  templateUrl: './nav-bar-contacts.component.html',
  styleUrls: ['./nav-bar-contacts.component.scss']
})
export class NavBarContactsComponent implements OnInit{
  data=  Data
  isListOpen = false;
  isListOpenContacts = false;
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

  toggleListContacts() {
    this.isListOpenContacts = !this.isListOpenContacts;
  }

  isScreenWidthLessThan1200(): boolean {
    return this.screenWidth < 1200;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }



}
