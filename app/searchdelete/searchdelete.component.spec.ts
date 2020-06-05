import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeleteComponent } from './searchdelete.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
describe('SearchdeleteComponent', () => {
  let component: SearchdeleteComponent;
  let fixture: ComponentFixture<SearchdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdeleteComponent ],
      imports: [ HttpClientTestingModule,  MatSnackBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
