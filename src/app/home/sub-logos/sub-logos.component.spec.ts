import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLogosComponent } from './sub-logos.component';

describe('SubLogosComponent', () => {
  let component: SubLogosComponent;
  let fixture: ComponentFixture<SubLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
