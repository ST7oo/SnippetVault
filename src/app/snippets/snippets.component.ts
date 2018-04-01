import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Snippet } from './snippet';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-snippets',
    templateUrl: './snippets.component.html',
    styleUrls: ['./snippets.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SnippetsComponent implements OnInit {

    private snippetsCollection: AngularFirestoreCollection<Snippet>;
    snippets: Observable<Snippet[]>;
    sidenavOpened: boolean;

    constructor(private dialog: MatDialog, private aFirestore: AngularFirestore) { }

    ngOnInit() {
        this.sidenavOpened = true;
        this.snippetsCollection = this.aFirestore.collection<Snippet>('snippets', ref => ref.orderBy('updatedAt', 'desc'));
        this.snippets = this.snippetsCollection.valueChanges();
    }

    showDialog(id?: string) {
        const dialogRef = this.dialog.open(NewDialogComponent, {
            minWidth: '600px',
            disableClose: true,
            data: {
                id: id
            }
        });
    }

    remove(id: string) {
        this.snippetsCollection.doc<Snippet>(id).delete();
    }

}
