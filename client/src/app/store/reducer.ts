import { combineReducers } from 'redux';
import {IAppState} from "./app.state";
import {usersReducer} from "./users/users.reducer";
import {coreReducer} from "./core/core.reducer";
import {profileReducer} from "./profile/profile.reducer";
import {messageReducer} from "./message/message.reducer";

export const reducer = combineReducers<IAppState>({
  users: usersReducer,
  core: coreReducer,
  profile: profileReducer,
  message: messageReducer
});
