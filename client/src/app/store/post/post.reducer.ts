import {initialState} from './post.state';
import {POST_CREATED, ALL_POSTS} from './post.actions';

function getAllPosts (state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    posts: result
  });
}

export function postReducer(state = initialState, action) {
  switch (action.type ) {
    case POST_CREATED:
      return state;
    case ALL_POSTS:
      return getAllPosts(state, action);
    default:
      return state;
  }
}
