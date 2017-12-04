import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-new-dialog',
    templateUrl: './new-dialog.component.html',
    styleUrls: ['./new-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewDialogComponent implements OnInit {

    type: string;

    constructor(private dialogRef: MatDialogRef<NewDialogComponent>) { }

    ngOnInit() {
        this.type = 'text';
    }

    close() {
        this.dialogRef.close();
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
