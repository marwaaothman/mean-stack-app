import { ToastrService } from 'ngx-toastr';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
users: User[];
  constructor(private userService: UserService, private router :Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.listeUsers().subscribe(data=>
      {
        console.log(data) ;
        this.users=data;

      });
  }
  delete(_id :String){
    this.userService.supprimerUser(_id).subscribe(
      data=> {
        this.toastr.error('User supprimé!!');
        this.ngOnInit()  },
      err => {  }
    )
  }
}
