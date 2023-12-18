import { Component } from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {slideInAnimation} from "./shared/animation/route-animation";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'angular-portfolio';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    // console.log(this.contexts.getContext('primary')?.route?.snapshot?.data)
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
