import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MediaService} from "../../../../services/media.service";
import {UserDataInterface} from "../../../../../admin/types/user-data.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector} from "../../../../store/selectors";
import {AuthService} from "../../../../../admin/services/auth.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  currentUser$!: Observable<UserDataInterface | null>
  isMenuOpen = false;
  screenWidth!: number;
  isAuthenticated!: boolean

  constructor(private mediaService: MediaService,
              private store: Store,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })
    this.isAuthenticated = this.authService.isAuthenticated()
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isScreenWidthLessThan1080(): boolean {
    return this.screenWidth < 1080;
  }


}
