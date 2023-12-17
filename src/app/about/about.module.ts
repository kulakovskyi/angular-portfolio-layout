import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AboutLayoutComponent } from './components/about-layout/about-layout.component';
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {path: 'about', component: AboutLayoutComponent,data: { animation: 'AboutPage' }, children: [
      {path: '', redirectTo: 'bio', pathMatch: 'full'},
      {path: 'bio', loadChildren: () => import('./modules/bio/bio.module').then(m => m.BioModule)},
      {path: 'interests', loadChildren: () => import('./modules/interests/interests.module').then(m => m.InterestsModule)},
      {path: 'education', loadChildren: () => import('./modules/education/education.module').then(m => m.EducationModule)},
    ]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AboutLayoutComponent,
    NavBarComponent
  ]
})

export class AboutModule{}
