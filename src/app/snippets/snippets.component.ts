import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
    selector: 'app-snippets',
    templateUrl: './snippets.component.html',
    styleUrls: ['./snippets.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SnippetsComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    showDialog() {
        let dialogRef = this.dialog.open(NewDialogComponent, {
            minWidth: '600px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

}
