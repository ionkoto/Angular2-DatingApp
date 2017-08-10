import {Injectable} from "@angular/core";
import {ProfileService} from "../../profile/profile.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const PROFILE_LOADED = 'profile/LOADED';

@Injectable()
export class ProfileActions {
  constructor(private profileService: ProfileService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getProfile(userId) {
    this.profileService
      .getProfile(userId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: PROFILE_LOADED,
          result
        });
      })
  }
}
