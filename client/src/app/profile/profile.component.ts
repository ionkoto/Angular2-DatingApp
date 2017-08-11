import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {NgRedux} from "ng2-redux";
import {ProfileModel} from "./profile.model";
import {IAppState} from "../store/app.state";
import {ProfileActions} from "../store/profile/profile.actions";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profile: ProfileModel = new ProfileModel();

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private profileActions: ProfileActions) {
  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.profile)
      .subscribe(profile => {
        this.profile = profile;
        console.log(profile);
      });

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];

      this.profileActions.getProfile(userId);
    });

  }
}
