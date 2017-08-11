import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {UsersModule} from './users/users.module';
import {CarRoutesModule} from './routes.module';
import {MessagesModule} from "./messages/messages.module";

import {AppComponent} from './app.component';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import {IAppState, store} from './store';
import {Router} from '@angular/router';

import {AuthService} from './core/auth.service';
import {config} from './core/config';

import {NotesModule} from './notes/notes.module';
import {SpinnerComponent} from "./core/spinner/spinner.component";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    CarRoutesModule,
    UsersModule,
    CoreModule,
    NotesModule,
    ProfileModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private authService: AuthService,
              private router: Router) {
    this.ngRedux.provideStore(store);
    config(ngRedux, router, authService);
  }
}
