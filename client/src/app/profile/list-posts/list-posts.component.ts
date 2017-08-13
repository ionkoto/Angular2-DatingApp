import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store/app.state';
import {PostActions} from '../../store/post/post.actions';


@Component({
  selector: 'list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  posts: Array<object> = [ ];

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private postActions: PostActions,
              private router: Router) {

  }

  convertDate (date) {
    const dateToConvert = new Date(date);
    let dateToDisplay = dateToConvert.toString();
    dateToDisplay = dateToDisplay.slice(0, dateToDisplay.indexOf('GMT'));
    return dateToDisplay;
  }

  ngOnInit() {
    // subscribe to router event

    this.ngRedux
      .select(state => state.post)
      .subscribe(posts => {
        this.posts = posts['post'];
      });

    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];
      this.postActions.getAllPosts(userId);
    });


  }
}
