import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AlertServices} from "../../../../services/alert.service";
import {fadeInOut} from "../../../../animation/fade-animation";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [fadeInOut]
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
