import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';

@Injectable()
export class ListPostsService {
  constructor(private httpService: HttpService) {
  }

  getAllPosts(userId) {
    return this.httpService.get(`api/post/own/${userId}`, true);
  }
}

