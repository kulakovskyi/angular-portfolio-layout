import { Component } from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {slideInAnimation} from "../../../shared/animation/route-animation";

@Component({
  selector: 'app-about-layout',
  templateUrl: './about-layout.component.html',
  styleUrls: ['./about-layout.component.scss'],
  animations: [slideInAnimation],
})
export class AboutLayoutComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
