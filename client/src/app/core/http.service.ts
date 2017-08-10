import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import {Observable} from 'rxjs/Rx';
import {SpinnerService} from "./spinner/spinner.service";
import {AuthService} from "./auth.service";

const baseUrl = 'http://localhost:3000/';

@Injectable()
export class HttpService {
  constructor(private http: Http,
              private _spinnerService: SpinnerService,
              private authService: AuthService) {
  }

  get (url, authenticate?: boolean) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    if(authenticate) {
      headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${this.authService.getToken()}`
      });
    }

    const requestOptions = new RequestOptions({
      headers: headers
    });

    this._spinnerService.show();
    return this.http
      .get(`${baseUrl}${url}`, requestOptions)
      .map(res => res.json())
      .finally(() => this._spinnerService.hide());
  }

  post(url, data, authenticate?: boolean) {

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    if(authenticate) {
      headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${this.authService.getToken()}`
      });
    }

    const requestOptions = new RequestOptions({
      headers: headers
    });

    this._spinnerService.show();
    return this.http
      .post(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
      .map(res => {
        let result = res.json();
        result.success = true;
        return result
      })
      .catch((err: any) => {
        let result = err.json();
        result.success = false;
        return Observable.of(result);
      })
      .finally(() => this._spinnerService.hide())
  }
}
