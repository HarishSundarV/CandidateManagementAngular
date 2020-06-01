import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeleteComponent } from './searchdelete.component';

describe('SearchdeleteComponent', () => {
  let component: SearchdeleteComponent;
  let fixture: ComponentFixture<SearchdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdeleteComponent ]
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
