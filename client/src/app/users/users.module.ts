import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [ FormsModule, CommonModule],
  declarations: [RegisterComponent, LoginComponent],
  providers: [ UsersService, UsersActions]
})

export class UsersModule { }
