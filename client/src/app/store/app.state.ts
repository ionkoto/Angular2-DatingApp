import {IUsersState} from './users/users.state';
import {ICoreState} from './core/core.state';
import {IProfileState} from "./profile/profile.state";
import {IHomeState} from "./home/home.state";

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  profile: IProfileState;
  home: IHomeState
}
