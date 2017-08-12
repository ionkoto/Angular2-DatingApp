import {initialState} from "./note.state";
import {NOTE_CREATED} from "./note.actions";

export function noteReducer(state = initialState, action) {
  switch (action.type ) {
    case NOTE_CREATED:
      return state;
    default:
      return state;
  }
}
