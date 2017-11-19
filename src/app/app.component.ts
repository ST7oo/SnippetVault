import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private auth: AuthService, private router: Router) { }

    signOut() {
        this.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

}
