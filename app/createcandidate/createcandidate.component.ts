import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-createcandidate',
  templateUrl: './createcandidate.component.html',
  styleUrls: ['./createcandidate.component.css']
})
export class CreatecandidateComponent implements OnInit {

  Loc=["Bangalore","Mumbai","Chennai","Hyderabad"];
  Role=["Intern","Employee","Manager","HR"];
  Skills=["C++","Java","Python","Angular","Spring"];
  hasError=true;
  errorMsg="";
 

  constructor(private serv: UserserviceService) { }
message:any;
  ngOnInit(): void {
  }

userModel:User = new User('','','','','','','',false,false,false,false,false);

public enrollNow(){
 this.errorCheck();
  if (this.hasError==false){
    this.errorMsg="";
    console.log("calling the function")
  let resp=this.serv.doEnroll(this.userModel);
resp.subscribe((data)=>this.message=data);
  }
  else {
    this.errorMsg="Enter correct Contact Number";
  }
}

public errorCheck(){
  if (this.userModel.contactNumber==''){
    this.hasError=true;
  }
  else{
    this.hasError=false;
  }
}

}
