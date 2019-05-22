/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { RegisterPageComponent } from './register-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: RegisterPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//