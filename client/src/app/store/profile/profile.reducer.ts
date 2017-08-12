import {PROFILE_LOADED, PROFILE_PIC_ADD} from "./profile.actions";
import {initialState, IProfileState} from "./profile.state";
import {NOTE_CREATED} from "../note/note.actions";

function profileLoaded(state: IProfileState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    userProfilePicture: result.profilePicture,
    userFirstName: result.firstName,
    userLastName: result.lastName,
    userGender: result.gender,
    userUsername: result.username,
    userAge: result.age,
    userDescription: result.description
  })
}

function noteCreated (state, action) {
  return state;
}

function profilePicAdded(state, action) {
  return Object.assign({}, state, {
    profilePicAdded: true
  })
}

export function profileReducer(state = initialState, action) {
  switch (action.type ) {
    case PROFILE_LOADED:
      return profileLoaded(state, action);
    case PROFILE_PIC_ADD:
      return profilePicAdded(state, action);
    case NOTE_CREATED:
      return noteCreated(state, action);
    default:
      return state;
  }
}
