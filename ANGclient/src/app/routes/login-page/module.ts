/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";

    // Inner
    import { LoginPageComponent } from './login-page.component';
    import { Routing } from "./router";
    import { FormLoginComponent } from "../../components/form-login/form-login.component";
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ LoginPageComponent, FormLoginComponent ],
        imports: [ 
            CommonModule, 

            FormsModule, ReactiveFormsModule,

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