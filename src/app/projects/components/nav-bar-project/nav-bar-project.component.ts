import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MediaService} from "../../../shared/services/media.service";

@Component({
  selector: 'app-nav-bar-project',
  templateUrl: './nav-bar-project.component.html',
  styleUrls: ['./nav-bar-project.component.scss']
})
export class NavBarProjectComponent implements OnInit{
  isListOpen = false;
  screenWidth!: number;
  isMenuOpen = false;
  @Output() techSelected = new EventEmitter<string[]>();
  selectedTech: string[] = ['angular'];
  inputCheckData: string[] = ['angular','react','vue','node_js','html','css']
  constructor(private mediaService: MediaService) {
  }

  ngOnInit() {
    this.screenWidth = this.mediaService.checkScreenWidth()
    this.mediaService.initialResize().subscribe(width => {
      this.screenWidth = width
    })

  }

  updateSelectedTech(tech: string): void {
    const index = this.selectedTech.indexOf(tech);

    if (index !== -1) {
      this.selectedTech.splice(index, 1);
    } else {
      this.selectedTech.push(tech);
    }

    this.techSelected.emit([...this.selectedTech]);
  }

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
