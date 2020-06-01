import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:CreatecandidateComponent},
   {path:"search",component:SearchdeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
