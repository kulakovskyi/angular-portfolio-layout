import { Component } from '@angular/core';
import {environment} from "../../../../../../environment/environment";
import {Data} from "../../../../../data/data";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  data = Data

}

