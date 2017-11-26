import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MdlDialogReference } from '@angular-mdl/core';

@Component({
    selector: 'app-new-dialog',
    templateUrl: './new-dialog.component.html',
    styleUrls: ['./new-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewDialogComponent implements OnInit {

    type: object;

    constructor(private dialog: MdlDialogReference) { }

    ngOnInit() {
        this.type = {
            text: true,
            code: false
        };
    }

    close() {
        this.dialog.hide();
    }

    changeType(type) {
        Object.keys(this.type).forEach(t => this.type[t] = false);
        switch (type) {
            case 'text':
                this.type['text'] = true;
                break;
            case 'code':
                this.type['code'] = true;
                break;
        }
    }

    onKeyup($event) {

    }

}
