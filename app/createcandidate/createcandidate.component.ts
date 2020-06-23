import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormGroup } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { NotificationService } from '../notification.service';

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
 

  constructor(private serv: UserserviceService,private notificationService:NotificationService) { }
message:any;
  ngOnInit(): void {
  }

userModel:User = new User(0,'','','','','','','');

public enrollNow(){

 this.errorCheck();
  if (this.hasError==false){
    this.errorMsg="";
    console.log("calling the function")
    this.notificationService.warn('! Added Successfully');
  let resp=this.serv.doEnroll(this.userModel);
resp.subscribe((data)=>this.message=data);
this.userModel.firstName='';
this.userModel.lastName='';
this.userModel.location='';
this.userModel.feedback='';
this.userModel.contactNumber='';
this.userModel.email='';
// formGroup.reset();
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
