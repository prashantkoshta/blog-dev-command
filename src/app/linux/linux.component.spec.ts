/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinuxComponent } from './linux.component';

describe('LinuxComponent', () => {
  let component: LinuxComponent;
  let fixture: ComponentFixture<LinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
