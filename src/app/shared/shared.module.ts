import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';
import { AuthResolver } from './auth.resolver';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [
        AuthService,
        AuthResolver,
        NotifyService
    ]
})
export class SharedModule { }
