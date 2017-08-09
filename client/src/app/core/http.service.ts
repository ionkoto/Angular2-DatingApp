import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import {Observable} from 'rxjs/Rx';

const baseUrl = 'http://localhost:3000/';

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  get (url) {
    return this.http
      .get(`${baseUrl}${url}`)
      .map(res => res.json());
  }

  post(url, data) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const requestOptions = new RequestOptions({
      headers: headers
    });

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
  }
}
