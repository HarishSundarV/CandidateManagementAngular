import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NotificationService } from '../notification.service';
import { User } from '../user';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrls: ['./searchdelete.component.css']
})
export class SearchdeleteComponent implements OnInit {
  loc:string;
users:any;
p: number = 1;
user:User;
showedit=false;
id:number;
curr:number;
harish:number;
types=["id","location"];
searchtype="football";
searchbool:boolean;
searchcontent:any;
  constructor(private userService: UserserviceService,private notificationService: NotificationService) { }

  searchGrad(searchtype:string,searchcontent:any){
    this.searchbool=true;
    console.log(searchtype)
    console.log(searchcontent)
    if(this.searchtype=="location"){
     
      let resp=this.userService.getUserByLocation(searchcontent);
      resp.subscribe((data)=> this.users=data);
    }
    else if(this.searchtype=="id"){
     this.harish=searchcontent;
      let resp=this.userService.getUserById(this.harish);
      resp.subscribe((data)=> this.users=data);
    }
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
  ngOnInit(): void {
   this.searchbool=false;
  }

}
