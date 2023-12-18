import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as emailjs from 'emailjs-com';
import {environment} from "../../../environment/environment";

@Injectable()

export class FormService {
  private serviceId = environment.serviceId;
  private templateId = environment.templateId;
  private userId = environment.userIdPublic;

  constructor(private http: HttpClient) {
    emailjs.init(this.userId);
  }

  sendEmail(formData: any) {
    const templateParams = {
      // name: formData.name,
      // email: formData.email,
      message: formData,
    };

    return emailjs.send(this.serviceId, this.templateId, templateParams);
  }
}
