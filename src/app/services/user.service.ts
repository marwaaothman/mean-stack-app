import { User } from 'src/app/models/user';


import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

const HttpOptions ={
  headers : new HttpHeaders ({'content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

 apiURL : string = 'http://localhost:5000/users';
 users: User[];

  constructor(private http :HttpClient) { }

listeUsers(): Observable<User[]> {
return this.http.get<User[]>(this.apiURL);
}
/*delete(id:number)
{return this.http.delete(this.apiURL+id)}*/

supprimerUser(_id : String) {
  const url= `${this.apiURL}/${_id}`;
  return this.http.delete(url,HttpOptions);
}
/*delete(id:number): Observable<any> {
return this.http.delete(`${this.apiURL}/${id}`);
}*/
  ajoutUser( user: User):Observable<User>{

      return this.http.post<User>(this.apiURL, user, HttpOptions);

      }

  /*consulterUser(id: number): Observable<User> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<User>(url);
        }*/


 /*updateUser(user: any,id:any) : Observable<any>
{
      return this.http.patch(this.apiURL+id,user, HttpOptions);
}*/
updateUser(id, data): Observable<any> {
  return this.http.patch(`${this.apiURL}/${id}`, data);
}
login(user:User){
  return this.http.post(`${this.apiURL}/login`,user)
}
register(user:User){
  return this.http.post(`${this.apiURL}/register`,user)
}
isLoggedIn(){

  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
}


