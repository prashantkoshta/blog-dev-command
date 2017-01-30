import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginlogoutService {
  private baseUrl = 'http://localhost:3000/users/signin';
  constructor(private http: Http) { }

  login(arg:any):Observable<Response>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers, withCredentials: true}); 
     const url = `${this.baseUrl}`;
     return this.http.post(this.baseUrl, arg, options)
        .map(this.extractData)
        .do(data => data)//console.log('Login Response: ',data))
        .catch(this.handleError);
  }

   private extractData(response: Response) {
        return response.status || {};
    }

    private handleError(error: Response): Observable<any> {
        return Observable.throw(error.json().error || 'Server error');
    }

}
