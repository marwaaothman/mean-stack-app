import { Project } from './../../models/project';
import { Router } from '@angular/router';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
})
export class AddProjectComponent implements OnInit {
projet =new  Project();
message='';
  constructor( private projectService : ProjectService,
        private router :Router) { }

  ngOnInit(): void {
  }
  addProject(){
    this.projectService.ajoutProduit(this.projet).subscribe(
      /* data => {
    console.log(data);
    });
    this.router.navigate(['users']).then(() => {
      window.location.reload();
      }); */
      data=>{
        this.router.navigate(['projects']);
      },
      err=>{}
    )
    };
}
