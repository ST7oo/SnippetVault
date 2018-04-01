import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { User } from './shared/User';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    user: User;

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
        this.auth.user.subscribe((user) => {
            this.user = user;
        });
    }

    signOut() {
        this.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

}
