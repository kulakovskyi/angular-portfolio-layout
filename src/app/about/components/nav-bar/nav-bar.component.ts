import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../shared/services/media.service";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserDataInterface} from "../../../admin/types/user-data.interface";
import {currentUserSelector} from "../../../shared/store/selectors";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit{
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
