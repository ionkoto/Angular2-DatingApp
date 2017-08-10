import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class ProfileService {
  constructor(private httpService: HttpService) {
  }

  getProfile (userId) {
    return this.httpService.get(`api/user/${userId}`, true);
  }

}
