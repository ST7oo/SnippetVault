import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthResolver {
    constructor(private router: Router, private auth: AuthService) { }

    resolve() {
        // if (this.auth.user) this.router.navigate(['/snippets']);
        return this.auth.user.take(1).map(user => !!user).do((loggedIn) => {
            if (loggedIn) {
                this.router.navigate(['/snippets']);
            }
        });
    }
}
