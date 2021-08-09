import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  currentUser = new User();
  message:String;
  constructor( private userService: UserService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.consulterUser(this.activatedRoute.snapshot.params.id).
    subscribe( data=>{ this.currentUser = data; });
  }

 /* ModifierUser() {
    this.userService.updateUser(this.currentUser).subscribe(() => {
    this.router.navigate(['users']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }*/
    updateUser(): void {
      this.userService.updateUser(this.currentUser._id, this.currentUser)
        .subscribe(
          response => {
            console.log(response);
            this.toastr.info('User was updated successfully!');
            /*this.message = 'user was updated successfully!';*/
            this.router.navigate(['users']);
          },
          error => {
            console.log(error);
          });
    }
}

