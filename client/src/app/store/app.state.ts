import {IUsersState} from './users/users.state';
import {ICoreState} from './core/core.state';
import {IProfileState} from "./profile/profile.state";
import {IMessageState} from "./message/message.state";
import {IHomeState} from "./home/home.state";
import {INoteState} from "./note/note.state";

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  profile: IProfileState;
  message: IMessageState;
  home: IHomeState;
  note: INoteState
}
