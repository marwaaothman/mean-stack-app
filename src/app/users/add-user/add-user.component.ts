import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',

})
export class AddUserComponent implements OnInit {
  user = new User();
  message :string;
  constructor(private userService : UserService,
                private router :Router,
                private toastr: ToastrService ) { }

  ngOnInit(): void {
  }
  addUser(){
    this.userService.ajoutUser(this.user).subscribe(
      /* data => {
    console.log(data);
    });
    this.router.navigate(['users']).then(() => {
      window.location.reload();
      }); */
      data=>{
        this.toastr.success('added successfuly!!');
        this.router.navigate(["users"])
      },
      err=>{}
    )
    };
}
