import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, private notify: NotifyService) { }

    canActivate() {
        return this.auth.user.take(1).map(user => !!user).do((loggedIn) => {
            if (!loggedIn) {
                this.notify.update('You must log in first', 'error');
                this.router.navigate(['/login']);
            }
        });
    }
}
