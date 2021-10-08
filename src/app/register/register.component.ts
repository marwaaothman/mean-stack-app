import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      ]),
      prenom: new FormControl('',[
        Validators.required,
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }
  get nom() { return this.registerForm.get('nom') }
  get prenom() { return this.registerForm.get('prenom') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }


  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/users']);
    }
  }
  register() {
    let data = this.registerForm.value;

    this.userService.register(data).subscribe(
      res=>{
      let token = res['token'];
        console.log(res);
        localStorage.setItem("myToken",token);
        this.router.navigate(['/users']);
      },
      err=>{
        console.log(err);
      }

    )

  }

}
