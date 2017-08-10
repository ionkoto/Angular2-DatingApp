import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import {Observable} from 'rxjs/Rx';

const baseUrl = 'http://localhost:3000/';
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class HttpService {
  constructor(
    private http: Http,
    private authService: AuthService) {
  }

  get (url, authenticated = false) {
    const requestOptions = this.getRequestOptions(getMethod, authenticated);

    return this.http
      .get(`${baseUrl}${url}`, requestOptions);
  }

  post(url, data, authenticated = false) {
    const requestOptions = this.getRequestOptions(postMethod, authenticated);
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

  private getRequestOptions(method, authenticated) {
    const headers = new Headers();

    if (method !== getMethod) {
      headers.append('Content-Type', 'application/json');
    }

    if (authenticated) {
      const token = this.authService.getToken();
      headers.append('Authorization', `bearer ${token}`);
    }

    const requestOptions = new RequestOptions({
      headers: headers
    });

    return requestOptions;
  }
}
