import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../shared/services/media.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  screenWidth!: number;

  constructor(private mediaService: MediaService) {
  }


  ngOnInit() {
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })
  }


  isScreenWidthLessThan1200(): boolean {
    return this.screenWidth < 1200;
  }
}
