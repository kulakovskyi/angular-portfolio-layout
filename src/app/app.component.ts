import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {slideInAnimation} from "./shared/animation/route-animation";
import {select, Store} from "@ngrx/store";
import {getCurrentUserAction} from "./shared/store/action/get-current-user.action";
import {Observable} from "rxjs";
import {isLoadingSelector} from "./shared/store/selectors";
import {fadeInOut} from "./shared/animation/fade-animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, fadeInOut],
})
export class AppComponent implements OnInit{
  isLoading$!: Observable<boolean>

  constructor(private contexts: ChildrenOutletContexts,
              private store: Store) {}

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.store.dispatch(getCurrentUserAction())
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
