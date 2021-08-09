import { Project } from './../models/project';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HttpOptions ={
  headers : new HttpHeaders ({'content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiURL : string = 'http://localhost:5000/projects/';
  projects: Project[];

  constructor(private http :HttpClient) { }

  listeProjets(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL);
    }

  ajoutProduit( proj:Project ):Observable<Project>{
      return this.http.post<Project>(this.apiURL,proj,HttpOptions);
    }
  /*supprimerProduit(id : Number) {
    const url= ${this.apiURL}/${id};
    return this.http.delete(url,HttpOptions);
  }*/
  delete(id:number)
{return this.http.delete(this.apiURL+id)}

consulterProjet(id: number): Observable<any> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get(url);
  }


/* updateUser(user :User) : Observable<any>
{
return this.http.patch(this.apiURL,user, HttpOptions);
}*/
updateProject(id, data): Observable<any> {
return this.http.patch(`${this.apiURL}/${id}`, data);
}
}
