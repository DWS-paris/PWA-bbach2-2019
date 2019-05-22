/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";

    // Inner
    import { RegisterPageComponent } from './register-page.component';
    import { Routing } from "./router";
    import { FormRegisterComponent } from "../../components/form-register/form-register.component";
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ RegisterPageComponent, FormRegisterComponent ],
        imports: [ 
            CommonModule, 
            FormsModule,
            ReactiveFormsModule,

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