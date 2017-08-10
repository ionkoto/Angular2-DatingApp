import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserInboxComponent} from "./user-inbox.component";
import {RouterModule} from "@angular/router";
import {MinimalAgeDirective} from "../shared/minimal.age.directive";

@NgModule({
  imports: [ FormsModule, CommonModule, RouterModule],
  declarations: [RegisterComponent, LoginComponent, UserInboxComponent, MinimalAgeDirective],
  providers: [ UsersService, UsersActions],
  exports: [MinimalAgeDirective]
})

export class UsersModule { }
