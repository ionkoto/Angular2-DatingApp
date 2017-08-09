import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar.component';
import {HttpService} from './http.service';
import {AuthService} from './auth.service';
import {MessageHandlerComponent} from './message-handler.component';
import {PrivateRoute} from './private-route';


@NgModule({
  declarations: [NavbarComponent, MessageHandlerComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent, MessageHandlerComponent],
  providers: [HttpService, AuthService, PrivateRoute]
})
export class CoreModule {

}
