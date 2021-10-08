import { Project } from './../models/project';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  projet =new  Project();
  currentProject = new Project();
  message='';

  constructor(private projectService : ProjectService , private route:Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.projectService.listeProjets().subscribe(
      data=> {
        console.log(data);
        this.projects=data;
      }
    );
    this.projectService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( data=>{ this.currentProject = data; });
  }
  delete(id:number){
    this.projectService.delete(id).subscribe(
      data=> {
        this.toastr.error('User supprimé!!');
        this.ngOnInit()  },
      err => {  }
    )
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
        this.toastr.success('added successfuly!!');
        let ref =document.getElementById('cancel')
        ref?.click();
        this.ngOnInit()

      },
      err=>{}
    )
    };

    updateProject(): void {

      this.projectService.updateProject(this.currentProject._id, this.currentProject)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
            this.route.navigate(['projects']);
          },
          error => {
            console.log(error);
          });
    }
consulter(): void {
    this.projectService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( data=>{ this.currentProject = data; });
}
}


