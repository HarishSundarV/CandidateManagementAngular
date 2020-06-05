import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NotificationService } from '../notification.service';
import { User } from '../user';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  p:number=1;
  curr:number;
  showedit=false;
  users:any;
  constructor(private userService: UserserviceService,private notificationService: NotificationService) { }
  Loc=["Bangalore","Mumbai","Chennai","Hyderabad"];
  Role=["Intern","Employee","Manager","HR"];
  ngOnInit(): void {
    let resp= this.userService.getAllCandidates();
    resp.subscribe((data)=>this.users=data)
  }
  public deleteCandidate(id:number)
  {
    if(confirm('Are you sure to delete this the record?'))
    {
      this.notificationService.warn('! Deleted Successfully');
      let resp=this.userService.deleteById(id);
    resp.subscribe((data)=>this.users=data)
    }
    
  }
  public openEdit(id:number,user:User)
{
  this.curr=id;
  this.showedit=true;
 
}
public updateDetails(id:number,user:User){


  this.showedit=false;
  // console.log(id);
  // console.log(grad);
  let resp=this.userService.updateCandidate(user,id);
  resp.subscribe((data)=> this.users=data);
}
}
