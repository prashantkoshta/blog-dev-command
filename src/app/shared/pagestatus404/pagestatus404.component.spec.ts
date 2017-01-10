/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagestatus404Component } from './pagestatus404.component';

describe('Pagestatus404Component', () => {
  let component: Pagestatus404Component;
  let fixture: ComponentFixture<Pagestatus404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagestatus404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagestatus404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
