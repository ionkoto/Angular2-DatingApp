import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgRedux} from "ng2-redux";
import {ProfileModel} from "./profile.model";
import {IAppState} from "../store/app.state";
import {ProfileActions} from "../store/profile/profile.actions";
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  isAbleToEdit = false;
  profile: ProfileModel = new ProfileModel();

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private profileActions: ProfileActions,
              private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.profile)
      .subscribe(profile => {
        this.profile = profile;
      });

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
<<<<<<< HEAD
      console.log(userId)

=======
      this.isAbleToEdit = userId === this.authService.getUser().id;
>>>>>>> refs/remotes/origin/master
      this.profileActions.getProfile(userId);
    });

  }

  goToEditPage () {
    this.router.navigateByUrl('profile/edit/description')
  }

  goToEditPagee () {
    this.router.navigateByUrl('profile/edit/description')
  }
}
