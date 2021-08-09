import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import {AddUserComponent} from './users/add-user/add-user.component';
const routes: Routes = [
  {path:'users' ,component: UsersComponent},
  {path:"projects",component:ProjectsComponent},
  {path :"add", component:AddUserComponent},
  {path :"update/:id", component:UpdateUserComponent},
  {path:"addProj", component:AddProjectComponent},
  {path:"updateProj/:id", component: UpdateProjectComponent},
  {path:'login' ,component: LoginComponent},
  {path:'register' ,component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
