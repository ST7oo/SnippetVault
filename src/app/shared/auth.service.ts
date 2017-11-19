import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { NotifyService } from './notify.service';
import { Router } from '@angular/router';

interface User {
    uid: string;
    email?: string;
    photoURL?: string;
    displayName?: string;
}


@Injectable()
export class AuthService {

    user: Observable<User>;

    constructor(private aFireAuth: AngularFireAuth, private aFirestore: AngularFirestore, private notify: NotifyService, private router: Router) {
        this.user = this.aFireAuth.authState.switchMap(user => {
            if (user) {
                return this.aFirestore.doc<User>(`users/${user.uid}`).valueChanges()
            } else {
                return Observable.of(null)
            }
        });
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
        return this.oAuthLogin(provider);
    }

    githubLogin() {
        const provider = new firebase.auth.GithubAuthProvider()
        return this.oAuthLogin(provider);
    }

    facebookLogin() {
        const provider = new firebase.auth.FacebookAuthProvider()
        return this.oAuthLogin(provider);
    }

    twitterLogin() {
        const provider = new firebase.auth.TwitterAuthProvider()
        return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
        return this.aFireAuth.auth.signInWithPopup(provider)
            .then((credential) => {
                this.notify.update('Welcome ', 'success')
                return this.updateUserData(credential.user)
            })
            .catch(error => this.handleError(error));
    }


    anonymousLogin() {
        return this.aFireAuth.auth.signInAnonymously()
            .then((user) => {
                return this.updateUserData(user);
            })
            .catch(error => this.handleError(error));
    }


    signUp(email: string, password: string, name?: string) {
        return this.aFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.notify.update('Welcome ', 'success');
                return this.updateUserData(user, name);
            });
    }

    signIn(email: string, password: string) {
        return this.aFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.notify.update('Welcome ', 'success')
                return this.updateUserData(user);
            })
            .catch(error => this.handleError(error));
    }


    resetPassword(email: string) {
        return this.aFireAuth.auth.sendPasswordResetEmail(email)
            .then(() => this.notify.update('Password update email sent', 'info'))
            .catch((error) => this.handleError(error))
    }


    signOut() {
        return this.aFireAuth.auth.signOut().then(() => {
            this.notify.update('See you soon', 'success');
        }).catch((error) => this.handleError(error));
    }

    private handleError(error) {
        console.error(error)
        this.notify.update(error.message, 'error')
    }

    private updateUserData(user, name?: string) {
        const userRef: AngularFirestoreDocument<User> = this.aFirestore.doc(`users/${user.uid}`);
        const displayName = user.displayName || name || user.email;
        const data: User = {
            uid: user.uid,
            email: user.email || null,
            displayName: displayName,
            photoURL: user.photoURL || `http://identicon.org/?t=${displayName}&s=50`
        }
        return userRef.set(data)
    }

}
