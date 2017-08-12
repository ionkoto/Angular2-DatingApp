import {Injectable} from "@angular/core";
import {HomeService} from "../../home/home.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const TOTAL_USERS = 'users/TOTAL';
export const USER_PAGE = 'users/PAGE';

@Injectable()
export class HomeActions {
  constructor(private homeService: HomeService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getTotalUsers() {
    this.homeService
      .getTotalUsers()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: TOTAL_USERS,
          result
        });
      })
  }

  getPageOfUsers (page: number) {
    this.homeService
      .getPageOfUsers(page)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_PAGE,
          result
        });
      })
  }
}
