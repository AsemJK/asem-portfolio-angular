import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = Array<Project>();
  dataUrl = 'data/projects.json';
  constructor() { }
  http = inject(HttpClient);

  getProjects() {
    //retrieve data from json file '../data/projects.js'
    return this.http.get<any>(this.dataUrl);
  }
}
