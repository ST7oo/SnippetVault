import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snippet } from '../snippets/snippet';

@Component({
    selector: 'app-new-dialog',
    templateUrl: './new-dialog.component.html',
    styleUrls: ['./new-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewDialogComponent implements OnInit {

    snippet: Snippet;
    type: string;
    title: string;
    text: string;
    saving: boolean;
    callSave: boolean;
    @ViewChild('newStepElement') newStepElement: ElementRef;
    @ViewChild('titleElement') titleElement: ElementRef;

    constructor(private dialogRef: MatDialogRef<NewDialogComponent>) { }

    ngOnInit() {
        this.type = 'text';
        this.title = '';
        this.text = '';
        this.snippet = new Snippet();
    }

    close() {
        this.dialogRef.close();
    }

    typeTitle($event) {
        if (this.title.trim().length) {
            this.save();
        }
    }

    typeText($event) {
        if (this.text.trim().length) {
            this.save();
        }
    }

    private save() {
        if (!this.saving) {
            this.saving = true;
            setTimeout(() => {
                console.log(this.title);
                this.saving = false;
                if (this.callSave) {
                    this.callSave = false;
                    this.save();
                }
            }, 5000);
        }
        else {
            this.callSave = true;
        }
    }
}
