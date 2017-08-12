import {Injectable} from "@angular/core";
import {ProfileService} from "../../profile/profile.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";
import {NoteService} from "../../notes/note.service";

export const NOTE_CREATED = 'note/CREATED';
@Injectable()
export class NoteActions {
  constructor(private noteService: NoteService,
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
}
