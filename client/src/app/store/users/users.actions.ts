import {Injectable} from '@angular/core';
import {UsersService} from '../../users/users.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';
export const USER_REGISTERED = 'users/REGISTER';
export const USER_LOGGED_IN = 'users/LOGIN';
export const USER_LOGOUT = 'users/LOGOUT';
export const GET_ALL_USERS = 'users/ALL';
export const GET_USER_THREADS = 'users/THREADS';

@Injectable()
export class UsersActions {
  constructor(
    private usersService: UsersService,
    private ngRedux: NgRedux<IAppState>) { }

  register (user) {
    this.usersService
      .register(user)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_REGISTERED,
          result
        });
      });
  }

  login(user) {
    this.usersService
      .login(user)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_LOGGED_IN,
          result
        });
      });
  }

  logout() {
    this.ngRedux.dispatch({
      type: USER_LOGOUT
    });
  }

  allUsers() {
    this.usersService
      .allUsers()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_ALL_USERS,
          result: result.json()
        });
      });
  }

  userThreads() {
    this.usersService
      .getMessageThreads()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_USER_THREADS,
          result
        });
      });
  }
}
