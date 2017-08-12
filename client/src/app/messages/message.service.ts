import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class MessageService {
  constructor(private httpService: HttpService) {
  }

  getThread (otherUserUsername) {
    return this.httpService.get(`api/thread/${otherUserUsername}`, true);
  }

}
