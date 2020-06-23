import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandidateComponent } from './createcandidate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CreatecandidateComponent', () => {
  let component: CreatecandidateComponent;
  let fixture: ComponentFixture<CreatecandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,FormsModule, MatSnackBarModule ],
      declarations: [ CreatecandidateComponent ],
      providers:[UserserviceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
