import {Component} from '@angular/core';
import {NoteModel} from "./note.model";
import {Router} from "@angular/router";
import {NoteActions} from "../store/note/note.actions";

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.component.html'
})

export class AddNoteComponent {
  post: NoteModel = new NoteModel();

  constructor(private noteActions: NoteActions,
              private router: Router) {
  }

  addPost() {
    this.noteActions.addNote(this.post);
    this.router.navigateByUrl('/')
  }
}
