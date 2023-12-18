import {Component, OnInit} from '@angular/core';
import {FormOutputService} from "../../services/form-output.service";
import {MessageInterface} from "../../types/message.interface";

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.scss']
})
export class FormOutputComponent implements OnInit{
  message: MessageInterface = {
    name: "",
    email: "",
    message: "",
  };
  date: string = this.getCurrentDate()

  constructor(private formOutputService: FormOutputService) {
  }

  ngOnInit() {
    this.formOutputService.currentMessage.subscribe(message => this.message = message);
  }

  private getCurrentDate(): string {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = monthsOfYear[currentDate.getMonth()];

    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }

}
