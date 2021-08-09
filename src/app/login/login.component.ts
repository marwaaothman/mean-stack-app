import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        /*Validators.minLength(6)*/
      ])
    }
    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit(): void {

    /*let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/users']);
    }*/
  }

  login() {
    let data = this.loginForm.value;

    let user = new User();

    this.userService.login(user).subscribe(
      res=>{
        console.log(res);
        /*let token = res.token;
        localStorage.setItem("myToken",token );
        */
        this.router.navigate(['/users']);
      },
      err=>{
        console.log(err);

      }
    )

  }
}
