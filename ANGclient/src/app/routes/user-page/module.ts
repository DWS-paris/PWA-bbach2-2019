/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { UserPageComponent } from './user-page.component';
    import { Routing } from "./router";
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [ 
            CommonModule, 

            // Ajouter le router dans la tableau des imports
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//