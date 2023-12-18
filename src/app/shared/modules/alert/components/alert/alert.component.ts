import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AlertServices} from "../../../../services/alert.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class AlertComponent implements OnInit, OnDestroy{
  @Input() delay = 5000

  public text!: string
  public type = 'success'
  aSub!: Subscription

  constructor(private alertService: AlertServices) {
  }

  ngOnInit() {
    this.aSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeOut = setTimeout(() => {
        this.text = ''
      },this.delay)
    })
  }

  ngOnDestroy() {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }
}
