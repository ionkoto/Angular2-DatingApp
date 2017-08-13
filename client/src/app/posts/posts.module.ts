import {NgModule} from '@angular/core';
import {AddPostComponent} from './add-post.component';
import {PostActions} from '../store/post/post.actions';
import {PostService} from './post.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddPostComponent],
  imports: [CommonModule, FormsModule],
  providers: [PostService, PostActions]
})

export class PostsModule { }
