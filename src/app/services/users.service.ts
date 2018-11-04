import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly URL_API = 'http://localhost:3000/api/persons/';

  selectedUser:Users;
  users:Users[];

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.URL_API);
  }

  postUser(user:Users):Observable<any>{
    return this.http.post(this.URL_API,user);
  }

  putUser(user:Users):Observable<any>{

    return this.http.put(this.URL_API + `/${user._id}`,user);
  }

  deleteUser(_id:String):Observable<any>{

    return this.http.delete(this.URL_API+ `/${_id}`);
  }
}
