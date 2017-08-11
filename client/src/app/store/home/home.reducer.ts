import {initialState, IHomeState} from "./home.state";
import {TOTAL_USERS} from "./home.actions";

function totalUsers(state: IHomeState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    totalUsers: result.totalUsers,
  })
}

export function homeReducer(state = initialState, action) {
  if (action.type === TOTAL_USERS) {
    return totalUsers(state, action);
  }
  return state
}
