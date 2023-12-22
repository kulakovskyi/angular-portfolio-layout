import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MediaService} from "../../../../services/media.service";
import {UserDataInterface} from "../../../../../admin/types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../../store/selectors";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  currentUser$!: Observable<UserDataInterface | null>
  isMenuOpen = false;
  screenWidth!: number;

  constructor(private mediaService: MediaService,
              private store: Store) { }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
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
