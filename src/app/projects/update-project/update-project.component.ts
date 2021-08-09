import { Project } from './../../models/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  currentProject = new Project();
  message='';
  constructor( private projectService : ProjectService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( data=>{ this.currentProject = data; });
  }

   updateProject(): void {
      this.projectService.updateProject(this.currentProject._id, this.currentProject)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
            this.router.navigate(['projects']);
          },
          error => {
            console.log(error);
          });
    }
}
