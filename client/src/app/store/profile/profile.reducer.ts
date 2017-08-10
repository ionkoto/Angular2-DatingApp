import {PROFILE_LOADED} from "./profile.actions";
import {initialState, IProfileState} from "./profile.state";

function profileLoaded(state: IProfileState, action: any) {
  const result = action.result;

  return Object.assign({}, state, {
    userProfilePicture: '',
    userFirstName: result.firstName,
    userLastName: result.lastName,
    userGender: '',
    userUsername: result.username,
    userAge: ''
  })
}

export function profileReducer(state = initialState, action) {
  if (action.type === PROFILE_LOADED) {
    return profileLoaded(state, action);
  }
  return state
}
