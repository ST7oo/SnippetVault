import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
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

    constructor(public auth: AuthService, private fb: FormBuilder, private dialogService: MdlDialogService, private router: Router) {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.name = new FormControl();
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
        this.loading = true;
        this.auth.signUp(this.email.value, this.password.value).then((response) => {
            this.router.navigate(['/snippets']);
        }).catch((error) => {
            console.log(error);
            let errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                this.dialogService.alert('Email already exists');
            }
            else if (errorCode == 'auth/weak-password') {
                this.dialogService.alert('Weak password');
            }
            else {
                this.dialogService.alert('Unexpected error')
            }
            this.loading = false;
        });
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
