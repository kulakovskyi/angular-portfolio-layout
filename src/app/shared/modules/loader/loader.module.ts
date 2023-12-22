import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ]
})

export class LoaderModule{}
