import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionOrderComponent } from './comission-order.component';

describe('ComissionOrderComponent', () => {
  let component: ComissionOrderComponent;
  let fixture: ComponentFixture<ComissionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
