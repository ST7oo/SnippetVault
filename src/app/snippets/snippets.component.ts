import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MdlDialogService, MdlDialogReference } from '@angular-mdl/core';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
    selector: 'app-snippets',
    templateUrl: './snippets.component.html',
    styleUrls: ['./snippets.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SnippetsComponent implements OnInit {

    constructor(private dialogService: MdlDialogService) { }

    ngOnInit() {
    }

    showDialog($event: MouseEvent) {
        let dialog = this.dialogService.showCustomDialog({
            component: NewDialogComponent,
            isModal: true,
            // openFrom: $event,
            clickOutsideToClose: true,
            styles: { 'width': '400px' }
        });
        dialog.subscribe((dialogReference: MdlDialogReference) => {
            console.log(dialogReference);
        });
    }

}
