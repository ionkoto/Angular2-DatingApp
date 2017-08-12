import {SEND_MESSAGE, THREAD_LOADED} from "./message.actions";
import {initialState, IMessageState} from "./message.state";

function threadLoaded(state: IMessageState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    messageThread: result
  })
}

function sendMessage(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    messageThread: result
  })
}

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return sendMessage(state, action);
    case THREAD_LOADED:
      return threadLoaded(state, action);
    default:
      return state
  }
}
