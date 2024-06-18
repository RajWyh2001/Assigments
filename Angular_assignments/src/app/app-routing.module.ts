import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileBuliderComponent } from './profile-bulider/profile-bulider.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path:"" ,
    component:HomeComponent
  },
  {
    path:"Assigment2" ,
    component:ProfileBuliderComponent
  },
  
  {
    path:"Assigment3" ,
    component:ToDoListComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
