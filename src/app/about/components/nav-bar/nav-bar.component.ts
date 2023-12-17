import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {

  isListOpen = false;
  isListOpenContacts = false;

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }

  toggleListContacts() {
    this.isListOpenContacts = !this.isListOpenContacts;
  }
}
