import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CommonService } from './../service/common.service';
import { CommunicationService } from './../service/communication.service';

@Injectable()
export class AuthGarudService implements CanActivate {

  constructor(private commonService: CommonService, private communicationService:CommunicationService) {}

  canActivate() {
    this.commonService.isAuth().subscribe(
      (value)=>this.communicationService.notifyLogin(true),
      (error)=>this.communicationService.notifyLogin(false)
    )
    return this.commonService.isAuth();
  }
}
