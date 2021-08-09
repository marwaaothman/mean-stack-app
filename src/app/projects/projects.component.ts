import { Project } from './../models/project';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private projectService : ProjectService , private route:Router) { }

  ngOnInit(): void {
    this.projectService.listeProjets().subscribe(
      data=> {
        console.log(data);
        this.projects=data;
      }
    );
  }
  delete(id:number){
    this.projectService.delete(id).subscribe(
      data=> { this.ngOnInit()  },
      err => {  }
    )
  }
}
