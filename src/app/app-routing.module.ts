import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {
    path:'',component:AddUserComponent
  },
  {
    path:'add',component:AddUserComponent
  },
  {
    path:'list',component:ListUserComponent
  },
  {
    path:'edit/:id',component:EditUserComponent // when we pass differnt values using routing we need to define it with "/:id"
  },                                            //for multiple values -> /:id/:name 
  {
    path:'**',component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }