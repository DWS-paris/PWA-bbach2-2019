(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-login-page-module"],{

/***/ "./src/app/components/form-login/form-login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form \n  [formGroup]=\"formData\"\n  (submit)=\"submitForm()\"\n>\n  <label for=\"email\">Email</label>\n  <input \n    type=\"email\" name=\"email\" id=\"email\"\n    required minlength=\"2\"\n    formControlName=\"email\"\n  >\n\n  <label for=\"password\">Mot de passe</label>\n  <input \n    type=\"password\" name=\"password\" id=\"password\"\n    required minlength=\"2\"\n    formControlName=\"password\"\n  >\n\n  <button type=\"submit\" [disabled]=\"!formData.valid\">Connexion</button>\n</form>"

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.ts ***!
  \***************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent(FormBuilder) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetForm = function () {
            _this.formData = _this.FormBuilder.group({
                email: ['juju@juju.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['12345', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        };
        this.submitForm = function () {
            _this.formSubmit.emit(_this.formData.value);
        };
    }
    FormLoginComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormLoginComponent.prototype, "formSubmit", void 0);
    FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/components/form-login/form-login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormLoginComponent);
    return FormLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/login-page/login-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/routes/login-page/login-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-login\n    (formSubmit)=\"loginUser($event)\"\n></app-form-login>"

/***/ }),

/***/ "./src/app/routes/login-page/login-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/login-page/login-page.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(AuthService) {
        var _this = this;
        this.AuthService = AuthService;
        this.loginUser = function (userData) {
            _this.AuthService.login(userData)
                .then(function (apiResponse) {
                console.log(apiResponse);
                window.localStorage.setItem('user-token', apiResponse.data.token);
            })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/routes/login-page/login-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/routes/login-page/module.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/login-page/module.ts ***!
  \*********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/app/routes/login-page/router.ts");
/* harmony import */ var _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-login/form-login.component */ "./src/app/components/form-login/form-login.component.ts");

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
            declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_6__["FormLoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

/***/ "./src/app/routes/login-page/router.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/login-page/router.ts ***!
  \*********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component */ "./src/app/routes/login-page/login-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]
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
//# sourceMappingURL=routes-login-page-module.js.map