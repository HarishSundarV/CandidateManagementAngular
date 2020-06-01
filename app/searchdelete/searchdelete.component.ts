import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrls: ['./searchdelete.component.css']
})
export class SearchdeleteComponent implements OnInit {
users:any;
  constructor(private userService: UserserviceService) { }
public deleteCandidate(id:number)
{
  let resp=this.userService.deleteById(id);
  resp.subscribe((data)=>this.users=data)
}
  ngOnInit(): void {
    let resp= this.userService.getAllCandidates();
    resp.subscribe((data)=>this.users=data)
  }

}
