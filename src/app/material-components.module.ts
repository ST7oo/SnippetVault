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
    MatTooltipModule,
    MatCardModule,
    MatSidenavModule
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
        MatTooltipModule,
        MatCardModule,
        MatSidenavModule
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
        MatTooltipModule,
        MatCardModule,
        MatSidenavModule
    ]
})
export class MaterialComponentsModule { }
