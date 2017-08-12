import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {ProfileComponent} from "./profile.component";
import {ProfilePicAdd} from "./profile-pic-add.component";
import {ProfileService} from "./profile.service";
import {ProfileActions} from "../store/profile/profile.actions";
import {EditDescriptionComponent} from "./edit-description/edit-description.component";
import {EditDescriptionService} from "./edit-description/edit-description.service";
import {AddImageService} from "./add-image/add-image.service";
import {AddImage} from "./add-image/add-image.component";
import {ListImagesComponent} from "./list-images/list-images.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePicAdd,
    EditDescriptionComponent,
    AddImage,
    ListImagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProfileComponent],
  providers: [ProfileService, ProfileActions, EditDescriptionService, AddImageService]
})
export class ProfileModule {

}
