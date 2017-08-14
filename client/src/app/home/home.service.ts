import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class HomeService {
  constructor(private httpService: HttpService) {
  }

  getTotalUsers() {
    return this.httpService.get('api/users/total');
  }

  getPageOfUsers (page) {
    return this.httpService.get(`api/users/page?page=${page}`)
  }

}
