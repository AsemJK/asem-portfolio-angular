import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  //get the project details from the service
  //display the project details
  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {

    //read the project id from the route
    const projectId = this.router.snapshot.paramMap.get('id');
    console.log(projectId);
  }
}
