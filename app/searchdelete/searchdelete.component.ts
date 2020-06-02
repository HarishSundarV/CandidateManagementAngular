import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrls: ['./searchdelete.component.css']
})
export class SearchdeleteComponent implements OnInit {
  loc:string;
users:any;
id:number;
types=["id","location"];
type: string;
  constructor(private userService: UserserviceService,private notificationService: NotificationService) { }
public deleteCandidate(id:number)
{
  if(confirm('Are you sure to delete this the record?'))
  {
    this.notificationService.warn('! Deleted Successfully');
    let resp=this.userService.deleteById(id);
  resp.subscribe((data)=>this.users=data)
  }
  
}
public GetCandidateByLoc()
{
  let resp=this.userService.getUserByLocation(this.loc)
  resp.subscribe((data)=>this.users=data)
  console.log(this.users)
}
public GetCandidateById()
{
  console.log("Id getting called ")
  let resp=this.userService.getUserById(this.id)
  resp.subscribe((data)=>this.users=data)
}
  ngOnInit(): void {
    let resp= this.userService.getAllCandidates();
    resp.subscribe((data)=>this.users=data)
  }

}
