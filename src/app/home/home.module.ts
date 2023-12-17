import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import {RouterModule, Routes} from "@angular/router";
import { BannerComponent } from './components/banner/banner.component';
import {GameModule} from "../shared/modules/game/game.module";


const routes: Routes = [
  {path: '', component: HomeLayoutComponent,data: { animation: 'HomePage' }}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GameModule,
  ],
  declarations: [
    HomeLayoutComponent,
    BannerComponent
  ]
})

export class HomeModule{}
