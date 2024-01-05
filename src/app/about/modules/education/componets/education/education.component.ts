import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EducationResponseInterface} from "../../../../../admin/types/education-response.interface";
import {EditService} from "../../../../../admin/services/edit.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{
  educations$!: Observable<EducationResponseInterface[]>

  constructor(private editService: EditService) {
  }

  ngOnInit() {
    this.educations$ = this.editService.getUserEducation()
  }

}
