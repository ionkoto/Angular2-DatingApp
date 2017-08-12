import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../../store/app.state";
import {NoteActions} from "../../store/note/note.actions";


@Component({
  selector: 'list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  posts: Array<object> = [ ]

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private noteActions: NoteActions,
              private router: Router) {

  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.note)
      .subscribe(notes => {
        this.posts = notes.posts;
        for (let post of this.posts) {
          let date = new Date(post['dateCreated'])
          let dateToString = date.toString();
          post['dateCreated'] = dateToString.slice(0, dateToString.indexOf('GMT'));
        }
      });

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.noteActions.getAllPosts(userId);
    });
  }
}
