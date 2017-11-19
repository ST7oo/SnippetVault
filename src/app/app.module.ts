import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { MdlModule } from "@angular-mdl/core";

import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from "./not-found/not-found.component";
import { SignupComponent } from './signup/signup.component';
import { SnippetsComponent } from './snippets/snippets.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent,
        SignupComponent,
        SnippetsComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        MdlModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        AngularFireAuth
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
