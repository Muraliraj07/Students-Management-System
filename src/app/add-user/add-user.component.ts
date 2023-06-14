import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
//  @Input is a child component which is used to fetch values from the parent component
// we defined name, email, phone in curd.service.ts   id is auto incre no need to define it.

  @Input() userObj={regno:'',fname:'', lname:'', email:'',mobile:''};

  constructor(public cs:CrudService,   // creating object for Crud service class, which is defined in curd.service.ts
              public rt:Router){}  // importing ROUTER used to redirect form ts file into another component

  addEmployee(add:any)   //need to pass same arguments we defined in curd.service.ts
  { 
    // using the object calling the method
    // SUBSCRIBE method is used to receive the values from the service file using OBSERVABLE

    this.cs.addUser(add).subscribe();  
    this.rt.navigate(['list']);  // redirect to list page using ROUTER
  }

}