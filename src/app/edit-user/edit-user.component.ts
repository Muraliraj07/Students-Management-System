import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

// refer list-user.component.ts, same as we defined there

  ulist:any=[];

  uid:number=this.act.snapshot.params['id']; // we need id only, using ActivatedRoute we get it.

  constructor(public cs:CrudService,
              public act:ActivatedRoute,  // ActivatedRoute is used to get the URL value.
              public rt:Router){}      // importing ROUTER used to redirect form ts file into another component

  ngOnInit()
  {
    this.fetchSingleUser(this.uid);    
  }

  fetchSingleUser(eid:number)
  {
    this.cs.getSingleUser(eid).subscribe(res => {
      this.ulist=res;
    });
  }

  updateEmployee(eid:number,info:any)
  {
    this.cs.updateUser(eid,info).subscribe();
    this.rt.navigate(['list']);
  }

}
