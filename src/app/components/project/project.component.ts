import { Component, input, output } from '@angular/core';
import { Project } from '../../models/project.type';
import { ProjectTypeThemeDirective } from '../../directives/project-type-theme.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectTypeThemeDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  constructor() { }
  project = input.required<Project>();
  selectedProject = output<Project>();

  selectProject() {
    //emmit the project to parent component
    this.selectedProject.emit(this.project());
  }

}
