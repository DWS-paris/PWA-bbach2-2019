(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-register-page-module"],{

/***/ "./src/app/components/form-register/form-register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form \n  [formGroup]=\"formData\"\n  (submit)=\"submitForm()\"\n>\n  <label for=\"first_name\">Prénom</label>\n  <input \n    type=\"text\" name=\"first_name\" id=\"first_name\"\n    required minlength=\"2\"\n    formControlName=\"first_name\"\n  >\n\n  <label for=\"last_name\">Nom</label>\n  <input \n    type=\"text\" name=\"last_name\" id=\"last_name\"\n    required minlength=\"2\"\n    formControlName=\"last_name\"\n  >\n\n  <label for=\"email\">Email</label>\n  <input \n    type=\"email\" name=\"email\" id=\"email\"\n    required minlength=\"2\"\n    formControlName=\"email\"\n  >\n\n  <label for=\"password\">Mot de passe</label>\n  <input \n    type=\"password\" name=\"password\" id=\"password\"\n    required minlength=\"2\"\n    formControlName=\"password\"\n  >\n\n  <label for=\"password_repeate\">Répéter le mot de passe</label>\n  <input \n    type=\"password\" name=\"password_repeate\" id=\"password_repeate\"\n    required minlength=\"2\"\n    formControlName=\"password_repeate\"\n  >\n\n  <label for=\"street\">Adresse</label>\n  <input \n    type=\"text\" name=\"street\" id=\"street\"\n    required minlength=\"2\"\n    formControlName=\"street\"\n  >\n\n  <label for=\"city\">Ville</label>\n  <input \n    type=\"text\" name=\"city\" id=\"city\"\n    required minlength=\"2\"\n    formControlName=\"city\"\n  >\n\n  <label for=\"zip_code\">Code postal</label>\n  <input \n    type=\"text\" name=\"zip_code\" id=\"zip_code\"\n    required minlength=\"2\"\n    formControlName=\"zip_code\"\n  >\n\n  <label for=\"country\">Pays</label>\n  <input \n    type=\"text\" name=\"country\" id=\"country\"\n    required minlength=\"2\"\n    formControlName=\"country\"\n  >\n\n  <label for=\"birthdate\">Date de naissance</label>\n  <input \n    type=\"text\" name=\"birthdate\" id=\"birthdate\"\n    required minlength=\"2\"\n    formControlName=\"birthdate\"\n  >\n\n  <label for=\"type\">Profil</label>\n  <select name=\"type\" id=\"type\" formControlName=\"type\">\n    <option *ngFor=\"let item of ['merchant', 'neighborhood', 'admin']\" [value]=\"item\">{{item}}</option>\n  </select>\n\n  <p><input type=\"checkbox\" required formControlName=\"cgu\"> Accépter les CGU</p>\n\n  <button type=\"submit\" [disabled]=\"!formData.valid\">Inscription</button>\n</form>"

/***/ }),

/***/ "./src/app/components/form-register/form-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterComponent", function() { return FormRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormRegisterComponent = /** @class */ (function () {
    function FormRegisterComponent(FormBuilder) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetForm = function () {
            _this.formData = _this.FormBuilder.group({
                first_name: ['Julien', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                last_name: ['Noyer', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['juju@juju.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['12345', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password_repeate: ['12345', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                street: ['21, boulevard de la République', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['Aix-en-Provence', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ['France', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                birthdate: ['18/08/1979', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                position: ['NULL', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                zip_code: ['13100', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cgu: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        };
        this.submitForm = function () {
            _this.formSubmit.emit(_this.formData.value);
        };
    }
    FormRegisterComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormRegisterComponent.prototype, "formSubmit", void 0);
    FormRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-register',
            template: __webpack_require__(/*! ./form-register.component.html */ "./src/app/components/form-register/form-register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormRegisterComponent);
    return FormRegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes/register-page/module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/register-page/module.ts ***!
  \************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-page.component */ "./src/app/routes/register-page/register-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/app/routes/register-page/router.ts");
/* harmony import */ var _components_form_register_form_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-register/form-register.component */ "./src/app/components/form-register/form-register.component.ts");

/*
Imports
*/
// Angular



// Inner



//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"], _components_form_register_form_register_component__WEBPACK_IMPORTED_MODULE_6__["FormRegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // Ajouter le router dans la tableau des imports
                _router__WEBPACK_IMPORTED_MODULE_5__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/register-page/register-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/routes/register-page/register-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-register\n    (formSubmit)=\"registerUser($event)\"\n></app-form-register>"

/***/ }),

/***/ "./src/app/routes/register-page/register-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/register-page/register-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(AuthService) {
        var _this = this;
        this.AuthService = AuthService;
        this.registerUser = function (userData) {
            _this.AuthService.register(userData)
                .then(function (apiResponse) { return console.log(apiResponse); })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/routes/register-page/register-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/routes/register-page/router.ts":
/*!************************************************!*\
  !*** ./src/app/routes/register-page/router.ts ***!
  \************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.component */ "./src/app/routes/register-page/register-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _register_page_component__WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-register-page-module.js.map