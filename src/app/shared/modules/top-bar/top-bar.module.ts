import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    TopBarComponent
  ],
  declarations: [
    TopBarComponent
  ]
})

export class TopBarModule{}
