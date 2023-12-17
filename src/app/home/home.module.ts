import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomeLayoutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeLayoutComponent
  ]
})

export class HomeModule{}
