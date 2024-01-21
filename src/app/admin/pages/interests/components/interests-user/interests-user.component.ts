import {Component, OnInit} from '@angular/core';
import {EditService} from "../../../../services/edit.service";
import {InterestsResponseInterface} from "../../../../types/interests-response.interface";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-interests-user',
  templateUrl: './interests-user.component.html',
  styleUrls: ['./interests-user.component.scss']
})
export class InterestsUserComponent implements OnInit{
  interests$!: Observable<InterestsResponseInterface[]>
  userInterestsSub$!: Subscription

  constructor(private editService: EditService) {
  }

  ngOnInit() {
    this.interests$ = this.editService.getUserInterests()
  }

  deleteInterests(id: string) {
    this.editService.removeUserInterests(id).subscribe()
  }
}
