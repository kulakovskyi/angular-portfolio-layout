import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserDataInterface} from "../../../admin/types/user-data.interface";
import {currentUserSelector} from "../../../shared/store/selectors";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  currentUser$!: Observable<UserDataInterface | null>

  constructor(private store: Store) {}

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

}
