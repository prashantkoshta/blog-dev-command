/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginlogoutComponent } from './loginlogout.component';

describe('LoginlogoutComponent', () => {
  let component: LoginlogoutComponent;
  let fixture: ComponentFixture<LoginlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
