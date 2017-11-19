import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MdlSnackbarService } from '@angular-mdl/core';

export interface Msg {
    content: string;
    style: string;
}

@Injectable()
export class NotifyService {

    private _msgSource = new Subject<Msg>();
    msg = this._msgSource.asObservable();

    constructor(private mdlSnackbarService: MdlSnackbarService) { }


    update(content: string, style: string) {
        const msg: Msg = { content, style }
        this._msgSource.next(msg)
        this.mdlSnackbarService.showToast(msg.content);
    }

    clear() {
        this._msgSource.next(null)
    }

}
