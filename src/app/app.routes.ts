import { Routes } from '@angular/router';

//Components
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'register', component: SignUpComponent }
];
