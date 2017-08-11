import {Component, OnInit} from '@angular/core';
import {PagerService} from "../shared/paging/pager.service";
import {HomeActions} from "../store/home/home.actions";
import {IAppState} from "../store/app.state";
import {NgRedux} from "ng2-redux";
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private pagerService: PagerService,
              private homeActions: HomeActions,
              private ngRedux: NgRedux<IAppState>,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isUserAuthenticated())
      this.homeActions.getTotalUsers();

    this.ngRedux
      .select(state => state.home)
      .subscribe((home) => {
        this.setPage(1)
      })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
