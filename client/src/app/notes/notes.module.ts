import {NgModule} from '@angular/core';
import {AddNoteComponent} from './add-note.component';
import {NoteActions} from "../store/note/note.actions";
import {NoteService} from "./note.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddNoteComponent],
  imports: [CommonModule, FormsModule],
  providers: [NoteService, NoteActions]
})

export class NotesModule { }
