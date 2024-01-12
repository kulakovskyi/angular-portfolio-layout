import {Component, OnInit} from '@angular/core';
import {EditService} from "../../../../services/edit.service";
import {InterestsResponseInterface} from "../../../../types/interests-response.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-interests-user',
  templateUrl: './interests-user.component.html',
  styleUrls: ['./interests-user.component.scss']
})
export class InterestsUserComponent implements OnInit{
  interests!: InterestsResponseInterface[]
  userInterestsSub$!: Subscription

  constructor(private editService: EditService) {
  }

  ngOnInit() {
    this.userInterestsSub$ = this.editService.getUserInterests().subscribe(res => {
      this.interests = res
      console.log(res)
    })
  }

  editInterests() {

  }
}
