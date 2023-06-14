import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

class Employee
{
  id!:number;
  name!:string;
  email!:string;
  phone!:number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
// storing url into a variable
  endpoint="http://localhost:3000/user/";

//observable is use to handle multiple values.
//we pass data to different components
//it will invoke when we call subscribe()  

// to perform HTTP methods need to import libraries in app.module.ts
constructor(public hc:HttpClient) { }

// here while add and update we pass 3 values with different datatype so we set "data:any"

// OBSERVABLE is used to pass the values from service to components. Using SUBSCRIBE we can receive values

  addUser(data:any):Observable<Employee>
  { 
    return this.hc.post<Employee>(this.endpoint,data);  // passing our url and data 
  }
  getAllUsers():Observable<Employee>
  {
    return this.hc.get<Employee>(this.endpoint);
  }

  // we need particular data of a user so we pass id 
  getSingleUser(id:number):Observable<Employee>
  {
    return this.hc.get<Employee>(this.endpoint+id);
  }
  updateUser(id:number,data:any):Observable<Employee>
  {
    return this.hc.put<Employee>(this.endpoint+id,data);
  }
  deleteUser(id:number):Observable<Employee>
  {
    return this.hc.delete<Employee>(this.endpoint+id);
  }


}


