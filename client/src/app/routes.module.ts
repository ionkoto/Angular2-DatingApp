import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { PrivateRoute } from './core/private-route';

import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component';
import {AddNoteComponent} from "./notes/add-note.component";


const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  {
    path: 'notes/add',
    component: AddNoteComponent,
    canActivate: [PrivateRoute]
  }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule { }
