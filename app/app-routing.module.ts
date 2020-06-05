import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TrendsComponent } from './trends/trends.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  //{path:"home",component:HomeComponentComponent},
   {path:"register",component:CreatecandidateComponent},
   {path:"search",component:SearchdeleteComponent},
   {path:"trends",component:TrendsComponent},
   {path:"view",component:ViewComponent},
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
