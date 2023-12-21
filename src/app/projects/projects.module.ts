import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ProjectsLayoutComponent } from './components/projects-layout/projects-layout.component';
import {RouterModule, Routes} from "@angular/router";
import {NavBarProjectComponent} from "./components/nav-bar-project/nav-bar-project.component";
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import {SingleProjectComponent} from "./components/single-project/single-project.component";
import {ProjectsService} from "./services/projects.service";

const routes: Routes = [
  {path: 'projects', component: ProjectsLayoutComponent,data: { animation: 'HomePage' }}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavBarProjectComponent
  ],
  declarations: [
    ProjectsLayoutComponent,
    NavBarProjectComponent,
    AllProjectsComponent,
    SingleProjectComponent,
  ],
  providers:[
    ProjectsService
  ]
})

export class ProjectsModule{}
