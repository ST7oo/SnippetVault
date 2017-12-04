import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from "./not-found/not-found.component";
import { SignupComponent } from './signup/signup.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { MaterialComponentsModule } from './material-components.module';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent,
        SignupComponent,
        SnippetsComponent,
        NewDialogComponent
    ],
    entryComponents: [
        NewDialogComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialComponentsModule,
        FlexLayoutModule
    ],
    providers: [
        AngularFireAuth
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
