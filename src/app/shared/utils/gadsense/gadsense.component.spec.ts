/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GadsenseComponent } from './gadsense.component';

describe('GadsenseComponent', () => {
  let component: GadsenseComponent;
  let fixture: ComponentFixture<GadsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadsenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
