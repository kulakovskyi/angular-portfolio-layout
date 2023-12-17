import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ProjectsLayoutComponent } from './components/projects-layout/projects-layout.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'projects', component: ProjectsLayoutComponent,data: { animation: 'HomePage' }}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsLayoutComponent
  ]
})

export class ProjectsModule{}
