import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {
  @Input() index: number = 0
  @Input() title: string = ''
  @Input() image: string = ''
  @Input() icon: string = ''
  @Input() description: string = ''

}
