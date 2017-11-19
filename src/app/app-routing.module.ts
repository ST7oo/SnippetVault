import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { AuthGuard } from "./shared/auth.guard";
import { AuthResolver } from './shared/auth.resolver';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        resolve: [AuthResolver]
    },
    {
        path: 'login',
        component: LoginComponent,
        resolve: [AuthResolver]
    },
    {
        path: 'signup',
        component: SignupComponent,
        resolve: [AuthResolver]
    },
    {
        path: 'snippets',
        component: SnippetsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
