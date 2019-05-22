/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
//

/* 
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module'
        },
        {
            path: 'register',
            loadChildren: './routes/register-page/module#Module'
        },
        {
            path: 'login',
            loadChildren: './routes/login-page/module#Module'
        },
        {
            path: 'me',
            loadChildren: './routes/user-page/module#Module'
        }
    ];
//
