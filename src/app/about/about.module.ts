import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AboutLayoutComponent } from './components/about-layout/about-layout.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'about', component: AboutLayoutComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AboutLayoutComponent
  ]
})

export class AboutModule{}
