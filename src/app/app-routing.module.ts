
import { HomeComponent } from './home/home.component';
import { AffectationComponent } from './affectation/affectation.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'users' ,component: UsersComponent},

  {path: 'projects', component: ProjectsComponent,
  children: [
    {
      path: 'updateProj/:id',
      component: ProjectsComponent
    },
  ]},
  {path :"add", component:AddUserComponent},
  {path :"update/:id", component:UpdateUserComponent},
  {path:"addProj", component:AddProjectComponent},

  {path:'login' ,component: LoginComponent},
  {path:'register' ,component: RegisterComponent},
  {path:'affectation' ,component: AffectationComponent},
  {path:'home' ,component: HomeComponent},
  {path:'dashboard' ,component: DashboardComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
