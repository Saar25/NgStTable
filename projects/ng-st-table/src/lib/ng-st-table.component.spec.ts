import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStTableComponent } from './ng-st-table.component';

describe('NgStTableComponent', () => {
  let component: NgStTableComponent;
  let fixture: ComponentFixture<NgStTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
