import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileComponent} from "./profile.component";
import {ProfileService} from "./profile.service";
import {ProfileActions} from "../store/profile/profile.actions";


@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule],
  exports: [ProfileComponent],
  providers: [ProfileService, ProfileActions]
})
export class ProfileModule {

}
