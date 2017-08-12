import {Component, Input} from '@angular/core';
import {UserModel} from "../../store/home/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent {
  @Input() profile: UserModel;
  @Input() index: number;
  defaultProfilePic = 'https://cdn3.iconfinder.com/data/icons/security-3-1/512/mask_person-512.png';

  constructor(
    private router: Router
  ) { }

  viewProfile(id) {
    this.router.navigateByUrl(`/user/profile/${id}`);
  }
}
