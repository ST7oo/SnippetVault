import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { MdlModule } from "@angular-mdl/core";

import { environment } from "../environments/environment";
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from "./not-found/not-found.component";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        MdlModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AngularFireAuth
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
