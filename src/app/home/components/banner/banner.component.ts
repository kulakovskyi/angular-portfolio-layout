import { Component } from '@angular/core';
import {Data, DataInterface} from "../../../data/data";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  data: DataInterface = Data

}
