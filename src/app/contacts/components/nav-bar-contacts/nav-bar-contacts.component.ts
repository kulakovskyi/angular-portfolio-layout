import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../shared/services/media.service";
import {Observable} from "rxjs";
import {UserDataInterface} from "../../../admin/types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../shared/store/selectors";

@Component({
  selector: 'app-nav-bar-contacts',
  templateUrl: './nav-bar-contacts.component.html',
  styleUrls: ['./nav-bar-contacts.component.scss']
})
export class NavBarContactsComponent implements OnInit{
  currentUser$!: Observable<UserDataInterface | null>
  isListOpen = false;
  isListOpenContacts = false;
  screenWidth!: number;
  isMenuOpen = false;

  constructor(private mediaService: MediaService,
              private store: Store) {
  }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
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
