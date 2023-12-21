import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { SelectProjectComponent } from './components/select-project/select-project.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'select-project/:id', component: SelectProjectComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
  declarations: [
    SelectProjectComponent
  ]
})

export class SelectProjectModule{}
