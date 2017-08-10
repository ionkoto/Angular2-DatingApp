import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from './register-user.model';
import {UsersActions} from '../../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {Router} from '@angular/router';
import {IAppState} from '../../store/app.state';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  registerForm: FormGroup;
  user: RegisterUserModel = new RegisterUserModel();

  constructor(private userActions: UsersActions,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  register() {
    this.userActions.register(this.user);
    this.ngRedux
      .select(state => state.users.userRegistered)
      .subscribe(usersRegistered => {
        if (usersRegistered) {
          this.router.navigateByUrl('users/login');
        }
      });
  }
}
