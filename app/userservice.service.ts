import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private  http: HttpClient) { }
  

public doEnroll(userModel:User){
  console.log("This is also called")
  console.log(userModel)
  return this.http.post("http://localhost:8080/addcandidate",userModel,{responseType:'text' as 'json'});
}
public getAllCandidates()
{
    return this.http.get("http://localhost:8080/getallcandidates")
}
public getUserById(id:number)
{
  console.log("Service Id also called")
  return this.http.get("http://localhost:8080/getcandidatebyid/"+id)
}
public getUserByLocation(location:string)
{
  return this.http.get("http://localhost:8080//getcandidatebylocation/"+location)
}
public deleteById(id:number)
{
  return this.http.delete("http://localhost:8080/deletecandidate/"+id)
}
public countByLocation()
{
  return this.http.get("http://localhost:8080/getlocationcount")
}
public countByJob()
{
  return this.http.get("http://localhost:8080/getjob")
}
public countBySkill()
{
  return this.http.get("http://localhost:8080/getskill")
}
public getCandidateById(id:number)
{
  console.log("Service Id also called")
  return this.http.get("http://localhost:8080/getuserbyid/"+id)
}
public updateCandidate(user:User,id:number)
{
  return this.http.post("http://localhost:8080/updatecandidate/"+id,user,{responseType:'text' as 'json'});
}

}
