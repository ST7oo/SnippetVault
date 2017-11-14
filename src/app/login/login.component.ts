import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', Validators.required);

    constructor(public afAuth: AngularFireAuth, private fb: FormBuilder) {
        this.form = fb.group({
            email: this.email,
            password: this.password
        });
     }

    ngOnInit() {
    }

    login() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

}
