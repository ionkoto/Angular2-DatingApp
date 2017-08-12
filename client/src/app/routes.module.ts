import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { PrivateRoute } from './core/private-route';

import {RegisterComponent} from './users/register/register.component';
import {LoginComponent} from './users/login/login.component';
import {AddNoteComponent} from "./notes/add-note.component";
import {ProfileComponent} from "./profile/profile.component";
import {SendMessageComponent} from "./messages/send-message.component";
import {UserInboxComponent} from "./users/user-inbox.component";
import {ProfilePicAdd} from "./profile/profile-pic-add.component";
import {EditDescriptionComponent} from "./profile/edit-description/edit-description.component";
import {HomeComponent} from "./home/home.component";
import {AdminRoute} from "./core/admin-route";
import {AdminPanelComponent} from "./admin/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/inbox', component: UserInboxComponent },
  {
    path: 'notes/add',
    component: AddNoteComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'user/profile/:id',
    component: ProfileComponent,
    canActivate: [PrivateRoute]
  },
  // { path: 'message/send', component: SendMessageComponent, canActivate: [PrivateRoute] },
  { path: 'user/profile-picture/:id', component: ProfilePicAdd, canActivate: [PrivateRoute] },
  {
    path: 'message/send/:username',
    component: SendMessageComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'profile/edit/description',
    component: EditDescriptionComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'admin/panel',
    component: AdminPanelComponent,
    canActivate: [PrivateRoute, AdminRoute]
  }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule { }
