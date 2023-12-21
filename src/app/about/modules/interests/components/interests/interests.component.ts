import { Component } from '@angular/core';
import {InterestsData, InterestsDataInterface} from "../../data/interests-data";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent {
  interestsData: InterestsDataInterface[] = InterestsData

}
