import {initialState, IHomeState} from "./home.state";
import {TOTAL_USERS, USER_PAGE} from "./home.actions";
import {UserModel} from "./user.model";

function totalUsers(state: IHomeState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    totalUsers: result.totalUsers,
  })
}

function pagedUsers (state:IHomeState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    pagedUsers: result,
  })
}

export function homeReducer(state = initialState, action) {
  if (action.type === TOTAL_USERS) {
    return totalUsers(state, action);
  } else if (action.type  === USER_PAGE) {
    return pagedUsers(state, action);
  }
  return state
}
