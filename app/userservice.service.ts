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
public getUserById()
{
  return this.http.get("http://localhost:8080/getcandidatebyid")
}
public deleteById(id:number)
{
  return this.http.delete("http://localhost:8080/deletecandidate/"+id)
}
}
