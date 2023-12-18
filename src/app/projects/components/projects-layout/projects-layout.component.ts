import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-layout',
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.scss'],
})
export class ProjectsLayoutComponent {
  selectedTech: string[] = ['angular'];


  updateSelectedTech(tech: string[]) {
    this.selectedTech = tech;
  }

}
