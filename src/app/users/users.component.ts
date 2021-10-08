import { FormBuilder, FormGroup } from '@angular/forms';
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
  currentUser = new User();
  users: User[];
  user = new User();
formValue !:FormGroup;
constructor(private formbuilder :FormBuilder,
  private userService: UserService, private router :Router,private toastr: ToastrService){
}
ngOnInit(){
this.formValue=this.formbuilder.group({
  _id:[''],
  nom:[''],
  prenom:[''],
  poste: [''],
  experience: [''],
  type_contrat: [''],
  date_entree:[''],
  stack_principale: [''],
  stack_secondaire: [''],
  email :[''],
  password:[''],
  role:[''],

})
this.getAllUsers();
}
addUser(){

  this.user.nom=this.formValue.value.nom;
  this.user.prenom=this.formValue.value.prenom;
  this.user.poste=this.formValue.value.poste;
  this.user.experience=this.formValue.value.experience;
  this.user.type_contrat=this.formValue.value.type_contrat;
  this.user.date_entree=this.formValue.value.date_entree;
  this.user.stack_principale=this.formValue.value.stack_principale;
  this.user.stack_secondaire=this.formValue.value.stack_secondaire;
  this.user.email=this.formValue.value.email;
  this.user.password=this.formValue.value.password;
  this.user.role=this.formValue.value.role;
  this.userService.ajoutUser(this.user).subscribe(

    data=>{
      this.toastr.success('added successfuly!!');
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.ngOnInit() ;

    },
    err=>{}
  )
  };
 getAllUsers(){
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
onEdit(user:any){
  this.currentUser._id=user.id;
  this.formValue.controls['nom'].setValue(user.nom);
  this.formValue.controls['prenom'].setValue(user.prenom);
  this.formValue.controls['poste'].setValue(user.poste);
  this.formValue.controls['experience'].setValue(user.experience);
  this.formValue.controls['type_contrat'].setValue(user.type_contrat);
  this.formValue.controls['date_entree'].setValue(user.date_entree);
  this.formValue.controls['stack_principale'].setValue(user.stack_principale);
  this.formValue.controls['stack_secondaire'].setValue(user.stack_secondaire);
  this.formValue.controls['email'].setValue(user.email);
  this.formValue.controls['password'].setValue(user.password);
  this.formValue.controls['role'].setValue(user.role);
}
updateUser() :void{
  this.user.nom=this.formValue.value.nom;
  this.user.prenom=this.formValue.value.prenom;
  this.user.poste=this.formValue.value.poste;
  this.user.experience=this.formValue.value.experience;
  this.user.type_contrat=this.formValue.value.type_contrat;
  this.user.date_entree=this.formValue.value.date_entree;
  this.user.stack_principale=this.formValue.value.stack_principale;
  this.user.stack_secondaire=this.formValue.value.stack_secondaire;
  this.user.email=this.formValue.value.email;
  this.user.password=this.formValue.value.password;
  this.user.role=this.formValue.value.role;

  this.userService.updateUser(this.currentUser._id,this.currentUser)
        .subscribe(
          response => {
            console.log(response);
            this.toastr.info('User was updated successfully!');
            let ref =document.getElementById('cancel')
           ref?.click();
            this.ngOnInit() ;
          },
          error => {
            console.log(error);
          });
}

}






  /*
users: User[];
user = new User();
  message :string;
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
  addUser(){
    this.userService.ajoutUser(this.user).subscribe(

      data=>{
        this.toastr.success('added successfuly!!');
        let ref =document.getElementById('cancel')
        ref?.click();
        this.ngOnInit() ;

      },
      err=>{}
    )
    };
    */


