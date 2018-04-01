import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

export interface Msg {
    content: string;
    style: string;
}

@Injectable()
export class NotifyService {

    private _msgSource = new Subject<Msg>();
    msg = this._msgSource.asObservable();

    constructor(private snackBar: MatSnackBar) { }


    update(content: string, style: string) {
        const msg: Msg = { content, style };
        this._msgSource.next(msg);
        this.snackBar.open(msg.content, 'OK', { duration: 3500, verticalPosition: 'top' });
    }

    clear() {
        this._msgSource.next(null);
    }

}
