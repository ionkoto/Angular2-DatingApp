import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class NoteService {
  constructor(private httpService: HttpService) {
  }

  addNote(note) {
    return this.httpService.post('api/post/add', note, true);
  }
}
