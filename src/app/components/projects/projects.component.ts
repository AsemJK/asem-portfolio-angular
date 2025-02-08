import { Component, OnInit, signal } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects = signal(new Array<Project>());
  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit(): void {
    this.ProjectsService.getProjects().pipe(
      catchError((error) => {
        console.log(error);
        return error;
      })
    )
      .subscribe((data: any) => {
        this.projects.set(data.projects);
        console.log(this.projects);
      });
  }

}
