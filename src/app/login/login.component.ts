import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    email: FormControl;
    password: FormControl;
    loading = false;
    error: string;

    constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', Validators.required);
        this.form = fb.group({
            email: this.email,
            password: this.password
        });
    }

    ngOnInit() {
    }

    login() {
        this.error = '';
        this.loading = true;
        this.auth.signIn(this.email.value, this.password.value).then((response) => {
            this.router.navigate(['/snippets']);
        }).catch((error) => {
            switch (error.code) {
                case 'auth/user-not-found':
                    this.error = 'User not found';
                    break;
                case 'auth/wrong-password':
                    this.error = 'Wrong password';
                    break;
                case 'auth/invalid-email':
                    this.error = 'Invalid email';
                    break;
                default:
                    this.error = 'Unexpected error';
                    break;
            }
            this.loading = false;
        });
    }

    loginGoogle() {
        this.error = '';
        this.loading = true;
        this.auth.googleLogin().then((response) => {
            this.router.navigate(['/snippets']);
        }).catch((error) => {
            console.log(error);
            this.loading = false;
        });
    }

    getError(control) {
        if (control == 'email') {
            return this.email.hasError('required') ? 'Email is required' : this.email.hasError('email') ? 'Email is invalid' : '';
        }
        else if (control == 'password') {
            return this.password.hasError('required') ? 'Password is required' : '';
        }
    }

}
