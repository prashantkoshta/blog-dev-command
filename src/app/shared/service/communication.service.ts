import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject'

@Injectable()
export class CommunicationService {
  // Observable string sources
  private notifyLoginSource:Subject<boolean>;
  // Observable string streams
  public nofityLoginObserable:Observable<boolean>;

  constructor(){
    this.notifyLoginSource = new Subject<boolean>();
    this.nofityLoginObserable = this.notifyLoginSource.asObservable();
  }
  // Service message commands
  notifyLogin(status: boolean) {
    this.notifyLoginSource.next(status);
  }

}
