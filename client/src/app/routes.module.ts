import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { PrivateRoute } from './core/private-route';

import {RegisterComponent} from './users/register/register.component';
import {LoginComponent} from './users/login/login.component';
import {AddNoteComponent} from "./notes/add-note.component";
import {SendMessageComponent} from "./messages/send-message.component";
import {UserInboxComponent} from "./users/user-inbox.component";


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/inbox', component: UserInboxComponent },
  {
    path: 'notes/add',
    component: AddNoteComponent,
    canActivate: [PrivateRoute]
  },
  { path: 'message/send', component: SendMessageComponent }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule { }
