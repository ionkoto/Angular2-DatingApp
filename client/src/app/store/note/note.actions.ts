import {Injectable} from "@angular/core";
import {ProfileService} from "../../profile/profile.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";
import {NoteService} from "../../notes/note.service";
import {ListPostsService} from "../../profile/list-posts/list-posts.service";

export const NOTE_CREATED = 'note/CREATED';
export const ALL_POSTS = 'note/ALL_POSTS';

@Injectable()
export class NoteActions {
  constructor(private noteService: NoteService,
              private listPostsService: ListPostsService,
              private ngRedux: NgRedux<IAppState>) {
  }

  addNote(note) {
    this.noteService
      .addNote(note)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: NOTE_CREATED,
          result
        });
      })
  }

  getAllPosts(userId) {
    this.listPostsService
      .getAllPosts(userId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ALL_POSTS,
          result
        });
      })
  }
}
