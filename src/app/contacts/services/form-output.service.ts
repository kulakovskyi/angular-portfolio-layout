import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class FormOutputService {


  private messageSource = new BehaviorSubject({
    name: "",
    email: "",
    message: "",
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message);
  }


}
