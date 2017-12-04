import {
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatListModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatListModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class MaterialComponentsModule { }
