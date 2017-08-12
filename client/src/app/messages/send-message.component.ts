import {Component, OnInit} from '@angular/core';
import {MessageModel} from "./message.model";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageActions} from "../store/message/message.actions";
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'send-message',
  templateUrl: './send-message.component.html'
})

export class SendMessageComponent implements OnInit{
  message: MessageModel = new MessageModel();
  recipient: string = '';
  currentThread = {};

  constructor(
    private messageActions: MessageActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const username = params['username'];
        this.recipient = username;
        this.messageActions.getThread(username);
        this.ngRedux
          .select(state => state.message.messageThread)
          .subscribe(thread => {
            this.currentThread = thread;
            let messages = this.currentThread ? this.currentThread['messages'] : [];
            messages = messages ? messages.reverse() : [];
            this.message.threadId = thread['_id'];
          })
      })
  }

  sendMessage(recipientUsername) {
    const threadId = this.message.threadId;
    const content = this.message;
    this.messageActions.sendMessage(threadId, content);
    this.message = new MessageModel();
  }

}
