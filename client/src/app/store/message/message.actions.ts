import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";
import {MessageService} from "../../messages/message.service";

export const THREAD_LOADED = 'messages/THREAD_LOADED';
export const SEND_MESSAGE = 'messages/SEND';

@Injectable()
export class MessageActions {
  constructor(private messageService: MessageService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getThread(username) {
    this.messageService
      .getThread(username)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: THREAD_LOADED,
          result
        });
      })
  }

  sendMessage (threadId, content) {
    this.messageService
      .sendMessage(threadId, content)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: SEND_MESSAGE,
          result
        })
      })
  }
}
