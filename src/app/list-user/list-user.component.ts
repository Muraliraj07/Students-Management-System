import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({ 
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
// using ulist array we fetch data from the server and storing it.
  ulist:any=[];

// same as we done in add-user 
  constructor(public cs:CrudService){}

  // Angular On Initialization
  // This will load automatically when we load the component
  // Used to load content dynamically
  ngOnInit()
  {
    this.fetchAllUsers();
  }

  fetchAllUsers()
  {                                           // subscribe is used to recive values from service
    this.cs.getAllUsers().subscribe(res => {  // for GET we need to perform like this. Creating new variable res, to fetch values form the server.
      this.ulist=res;      //  by using arrow function, the fetched values will be storing into ulist    
    });                    // fetchAllUsers need to run when the page refresh 
  }

  removeEmployee(id:number)
  {
    if(window.confirm("Are you remove this employee?"))
    {
      this.cs.deleteUser(id).subscribe();
      this.fetchAllUsers(); // after delete we need to refresh page so we call fetchAllUsers method
    }
  }

  list:any=[];  
}