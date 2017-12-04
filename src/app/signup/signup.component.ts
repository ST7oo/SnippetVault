import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    email: FormControl;
    name: FormControl;
    password: FormControl;
    password2: FormControl;
    loading = false;
    error: string;

    constructor(public auth: AuthService, private fb: FormBuilder, private router: Router) {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.name = new FormControl('', [Validators.required]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
        this.password2 = new FormControl('', [Validators.required, this.password_match_validator]);
        this.form = fb.group({
            email: this.email,
            name: this.name,
            password: this.password,
            password2: this.password2
        });
    }

    ngOnInit() {
    }

    signup() {
        this.error = '';
        this.loading = true;
        this.auth.signUp(this.email.value, this.password.value, this.name.value).then((response) => {
            this.router.navigate(['/snippets']);
        }).catch((error) => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    this.error = 'Email already exists';
                    break;
                case 'auth/invalid-email':
                    this.error = 'Email is invalid';
                    break;
                case 'auth/weak-password':
                    this.error = 'Weak password';
                    break;
                default:
                    this.error = 'Unexpected error';
                    break;
            }
            this.loading = false;
        });
    }

    getError(control) {
        if (control == 'email') {
            return this.email.hasError('required') ? 'Email is required' : this.email.hasError('email') ? 'Email is invalid' : '';
        }
        else if (control == 'name') {
            return this.password.hasError('required') ? 'Name is required' : '';
        }
        else if (control == 'password') {
            return this.password.hasError('required') ? 'Password is required' : this.password.hasError('minlength') ? 'Password must have minimun 6 characters' : '';
        }
        else if (control == 'password2') {
            return this.password2.hasError('required') ? 'Repeat Password is required' : this.password2.hasError('mismatch') ? 'Passwords are not the same' : '';
        }
    }

    private password_match_validator(g: FormControl) {
        if (g.root.get('password') && g.root.get('password').value === g.value) {
            return null;
        }
        else {
            return { mismatch: true };
        }
    }

}
