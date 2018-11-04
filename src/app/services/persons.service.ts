import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persons } from '../models/persons';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  readonly URL_API = 'http://localhost:3000/api/persons/';

  selectedPerson:Persons;
  person:Persons[];

  constructor(private http:HttpClient) { }

  getPersons():Observable<any>{
    return this.http.get(this.URL_API);
  }

  postPerson(person:Persons):Observable<any>{
    return this.http.post(this.URL_API,person);
  }

  putPerson(person:Persons):Observable<any>{

    return this.http.put(this.URL_API + `/${person._id}`,person);
  }

  deletePerson(_id:String):Observable<any>{

    return this.http.delete(this.URL_API+ `/${_id}`);
  }
}
