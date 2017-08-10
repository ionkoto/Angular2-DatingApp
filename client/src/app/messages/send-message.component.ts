import {Component, OnInit} from '@angular/core';
import {MessageModel} from "./message.model";
import {UsersActions} from "../store/users/users.actions";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'send-message',
  templateUrl: 'src/app/messages/send-message.component.html'
})

export class SendMessageComponent implements OnInit{
  message: MessageModel = new MessageModel();
  users: Array<object> = [];

  constructor(
    private usersActions: UsersActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {

  }

}
