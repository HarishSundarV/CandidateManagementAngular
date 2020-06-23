import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserserviceService } from './userservice.service';
import { User } from './user';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add candidate from the API via POST',() =>{
    const candid ={id:1,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'chennai',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"};
    
    service.doEnroll(candid).subscribe(data=>{
      console.log(data);
      expect(data).toEqual("completed");
    });
  });


  it('should retrieve candidates from the API via GET',() =>{
    const cands:User[] = [
      {id:1,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'chennai',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
      {id:2,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'chennai',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
    ];
    service.getAllCandidates().subscribe((data:User[]) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(cands);
    });

    
  })
  
  it('should retrieve opportunties from the API via GET based on location ',() =>{
    const cands:User[] = [
      {id:1,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'chennai',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
      {id:2,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'hyderabad',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
    ];
    service.getUserByLocation('chennai').subscribe((data:User[]) => {
      expect(data.length).toBe(1);
      
     
    });

    
  })

  it('should retrieve opportunties from the API via GET based on id ',() =>{
    const cands:User[] = [
      {id:1,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'chennai',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
      {id:2,firstName: 'Harish',lastName: 'Sundar',email: 'hello',location: 'hyderabad',feedback : 'nice',jobDescription: 'chennai',contactNumber:"9842507"},
    ];
    service.getUserById(1).subscribe((data:User[]) => {
      expect(data.length).toBe(1);
     
    });

    
  })

});
