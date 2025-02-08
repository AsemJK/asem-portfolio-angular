import { inject, Injectable } from '@angular/core';
import { Project } from '../models/project.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  dataUrl = 'data/projects.json';
  http = inject(HttpClient);

  getProjects() {
    return this.http.get<Array<Project>>(this.dataUrl);
  }
}
