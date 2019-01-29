import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankRouteComponent } from './blank-route.component';

describe('BlankRouteComponent', () => {
  let component: BlankRouteComponent;
  let fixture: ComponentFixture<BlankRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
