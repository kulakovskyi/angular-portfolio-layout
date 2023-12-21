import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-interest-item',
  templateUrl: './interest-item.component.html',
  styleUrls: ['./interest-item.component.scss']
})
export class InterestItemComponent {
  @Input() title: string = ''
  @Input() image: string = ''
  @Input() description: string = ''
}
