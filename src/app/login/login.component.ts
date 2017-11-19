import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MdlDialogService } from '@angular-mdl/core';
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

    constructor(private auth: AuthService, private fb: FormBuilder, private dialogService: MdlDialogService, private router: Router) {
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
        this.loading = true;
        this.auth.signIn(this.email.value, this.password.value).then((response) => {
            this.router.navigate(['/snippets']);
        }).catch((error) => {
            let errorCode = error.code;
            if (errorCode == 'auth/user-not-found') {
                this.dialogService.alert('User not found');
            }
            else if (errorCode == 'auth/wrong-password') {
                this.dialogService.alert('Wrong password');
            }
            else {
                this.dialogService.alert('Unexpected error')
            }
            this.loading = false;
        });
    }

}
