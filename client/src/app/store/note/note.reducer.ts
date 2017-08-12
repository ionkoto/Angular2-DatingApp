import {initialState} from "./note.state";
import {NOTE_CREATED, ALL_POSTS} from "./note.actions";

function getAllPosts (state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    posts: result
  });
}

export function noteReducer(state = initialState, action) {
  switch (action.type ) {
    case NOTE_CREATED:
      return state;
    case ALL_POSTS:
      return getAllPosts(state, action);
    default:
      return state;
  }
}
