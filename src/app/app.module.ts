import { LoginComponent } from './login/login.component';
import { ProjectService } from './services/project.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProjectsComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    AddUserComponent,
    UpdateUserComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [UserService,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
