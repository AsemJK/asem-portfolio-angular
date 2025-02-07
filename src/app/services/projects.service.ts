import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = signal<Array<Project>>([]);
  constructor() { }

  getProjects() {
    return this.projects;
  }
}
