import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandidateComponent } from './createcandidate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreatecandidateComponent', () => {
  let component: CreatecandidateComponent;
  let fixture: ComponentFixture<CreatecandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CreatecandidateComponent ]
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
