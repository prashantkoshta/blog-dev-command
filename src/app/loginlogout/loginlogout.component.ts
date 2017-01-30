import { Component, OnInit, ViewChildren, ElementRef, OnDestroy, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, AbstractControl } from '@angular/forms';
import {Title} from '@angular/platform-browser';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {Genericvalidator} from './../shared/utils/genericvalidator';
import {LoginlogoutService} from './loginlogout.service';
import {ILoginlogout} from "./Loginlogout";

import {CommunicationService} from './../shared/service/communication.service';


@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.scss']
})

export class LoginlogoutComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  loginFrom:FormGroup;
  errorMessage:string;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: Genericvalidator;
  data:ILoginlogout


  constructor(private fb: FormBuilder, private router: Router,
    private titleService: Title,
    private loginService:LoginlogoutService, 
    private communicationService:CommunicationService) { 

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
      loginName : ["prashant",[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
      loginPassword  : ["prashant",[Validators.required,Validators.minLength(8),Validators.maxLength(50)]]
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
     let p = Object.assign({}, this.data, this.loginFrom.value);
     this.loginService.login(p)
            .subscribe(
                (value) =>{ 
                    this.router.navigate(['/application']);
                    this.communicationService.notifyLogin(true);
                },
                (error: any) => this.errorMessage="Invalid Userid & Password."
        );
  }
  onCancel():void{
      this.router.navigate(['/git']);
  }


}
