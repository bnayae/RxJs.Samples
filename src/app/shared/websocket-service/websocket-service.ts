import * as rx from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class WebSocketService {
    private subject: rx.Subject<MessageEvent>;

    public connect(url): rx.Subject<MessageEvent> {
        if(!this.subject) {
            this.subject = this.create(url);
        }

        return this.subject;
    }

    private create(url): rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = rx.Observable.create((obs: rx.Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);

            return ws.close.bind(ws);
        });

        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };

        return rx.Subject.create(observer, observable);
    }
}