/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { LoginPageComponent } from './login-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: LoginPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//