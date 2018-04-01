import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Snippet } from '../snippets/snippet';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-new-dialog',
    templateUrl: './new-dialog.component.html',
    styleUrls: ['./new-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewDialogComponent implements OnInit {

    snippet: Snippet;
    type: string;
    text: string;
    saving: boolean;
    callSave: boolean;
    docId: string;
    private snippetsCollection: AngularFirestoreCollection<Snippet>;
    private snippetDoc: AngularFirestoreDocument<Snippet>;
    private timeout: any;
    @ViewChild('newStepElement') newStepElement: ElementRef;
    @ViewChild('titleElement') titleElement: ElementRef;

    constructor(
        private aFirestore: AngularFirestore,
        private dialogRef: MatDialogRef<NewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        this.dialogRef.backdropClick().subscribe(() => {
            this.close();
        });
        this.snippetsCollection = this.aFirestore.collection<Snippet>('snippets');
        this.type = 'text';
        this.text = '';
        this.snippet = new Snippet();
        if (this.data.id) {
            this.docId = this.data.id;
            this.snippetDoc = this.snippetsCollection.doc<Snippet>(this.docId);
            this.snippetDoc.valueChanges().subscribe((snippet) => {
                this.snippet = snippet;
            });
        } else {
            this.docId = this.aFirestore.createId();
            this.snippet.id = this.docId;
            this.snippet.createdAt = this.timestamp;
            this.snippet.updatedAt = this.timestamp;
        }
    }

    close() {
        clearTimeout(this.timeout);
        if (this.snippet.title && this.snippet.title.trim().length) {
            this.snippetsCollection.doc(this.docId).set(Object.assign({}, this.snippet));
        }
        this.dialogRef.close();
    }

    typeTitle($event) {
        if (this.snippet.title.trim().length) {
            this.save();
        }
    }

    typeText($event) {
        if (this.text.trim().length) {
            // this.save();
        }
    }

    private save() {
        if (!this.saving) {
            this.saving = true;
            this.timeout = setTimeout(() => {
                console.log(this.snippet);
                this.snippet.updatedAt = this.timestamp;
                this.snippetsCollection.doc(this.docId).set(Object.assign({}, this.snippet));
                this.saving = false;
                if (this.callSave) {
                    this.callSave = false;
                    this.save();
                }
            }, 5000);
        } else {
            this.callSave = true;
        }
    }

    get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
    }
}
