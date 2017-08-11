import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileComponent} from "./profile.component";
import {ProfileService} from "./profile.service";
import {ProfileActions} from "../store/profile/profile.actions";
import {EditDescriptionComponent} from "./edit-description/edit-description.component";
import {FormsModule} from "@angular/forms";
import {EditDescriptionService} from "./edit-description/edit-description.service";


@NgModule({
  declarations: [ProfileComponent, EditDescriptionComponent],
  imports: [FormsModule, CommonModule],
  exports: [ProfileComponent],
  providers: [ProfileService, ProfileActions, EditDescriptionService]
})
export class ProfileModule {

}
