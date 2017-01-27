import { Component, OnInit, ViewChildren, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, AbstractControl } from '@angular/forms';
import {Title} from '@angular/platform-browser';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription'

import {Genericvalidator} from './../shared/utils/genericvalidator'


@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.scss']
})
export class LoginlogoutComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  loginFrom:FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: Genericvalidator;

  constructor(private fb: FormBuilder, private router: Router,private titleService: Title) { 
      this.titleService.setTitle( "SignIn" );
      this.validationMessages = {
            loginName: {
                required: 'Userid or Email is required.',
                minlength: 'Userid must be at least 8 characters.',
                maxlength: 'Userid cannot exceed 50 characters.'
            },
            loginPassword: {
                required: 'Password is required.',
                minlength: 'Password must be at least 8 characters.',
                maxlength: 'Password cannot exceed 50 characters.'
            }
      };
  }

  ngOnInit() : void {
    this.loginFrom = this.fb.group({
      loginName : ["",[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
      loginPassword  : ["",[Validators.required,Validators.minLength(8),Validators.maxLength(50)]]
    });

   this.genericValidator = new Genericvalidator(this.validationMessages);

  }

 ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
      let controlBlurs: Observable<any>[] = this.formInputElements
          .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

      // Merge the blur event observable with the valueChanges observable
      Observable.merge(this.loginFrom.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
          this.displayMessage = this.genericValidator.processMessages(this.loginFrom);
      });
 }

  ngOnDestroy(): void {

  }

  onLogin(): void {
     // DO action
     this.loginFrom
  }

}
