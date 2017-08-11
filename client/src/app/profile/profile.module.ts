import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {ProfileComponent} from "./profile.component";
import {ProfilePicAdd} from "./profile-pic-add.component";
import {ProfileService} from "./profile.service";
import {ProfileActions} from "../store/profile/profile.actions";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePicAdd
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProfileComponent],
  providers: [ProfileService, ProfileActions]
})
export class ProfileModule {

}
