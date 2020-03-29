import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3NgforComponent } from './component3-ngfor.component';

describe('Component3NgforComponent', () => {
  let component: Component3NgforComponent;
  let fixture: ComponentFixture<Component3NgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3NgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
