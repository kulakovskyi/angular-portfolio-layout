import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {slideInAnimation} from "./shared/animation/route-animation";
import {Store} from "@ngrx/store";
import {getCurrentUserAction} from "./shared/store/action/get-current-user.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit{
  constructor(private contexts: ChildrenOutletContexts,
              private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction())
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
