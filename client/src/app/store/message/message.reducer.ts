import {THREAD_LOADED} from "./message.actions";
import {initialState, IMessageState} from "./message.state";

function threadLoaded(state: IMessageState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    messageThread: result
  })
}

export function messageReducer(state = initialState, action) {
  if (action.type === THREAD_LOADED) {
    return threadLoaded(state, action);
  }
  return state
}
