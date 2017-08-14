import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store/app.state';
import {PostActions} from '../../store/post/post.actions';


@Component({
  selector: 'delete-post',
  templateUrl: './delete-post.component.html'
})
export class DeletePostComponent implements OnInit {
  post: object = {};

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private postActions: PostActions,
              private router: Router) {

  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.post)
      .subscribe(result => {
        this.post = result['deletePost'];
      });
    this.activatedRoute.params.subscribe((params: Params) => {
      const postId = params['postId'];
      this.postActions.getDeletePost(postId);
    });
  }

  deletePost(post) {

  }
}
