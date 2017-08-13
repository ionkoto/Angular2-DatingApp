import {Component, OnInit} from '@angular/core';
import {NoteModel} from "./note.model";
import {Router} from "@angular/router";
import {NoteActions} from "../store/note/note.actions";
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.component.html'
})

export class AddNoteComponent implements OnInit {
  post: NoteModel = new NoteModel();
  currentUser: string = null;

  constructor(private noteActions: NoteActions,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }

  addPost(id) {
    this.noteActions.addNote(this.post);
    this.router.navigateByUrl(`user/profile/${this.currentUser['id']}`);
  }
}
