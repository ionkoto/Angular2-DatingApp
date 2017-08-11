import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {PagerService} from "../shared/paging/pager.service";
import {CommonModule} from "@angular/common";
import {HomeActions} from "../store/home/home.actions";
import {HomeService} from "./home.service";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
  providers: [PagerService, HomeActions, HomeService],
  exports: [HomeComponent]
})

export class HomeModule { }
