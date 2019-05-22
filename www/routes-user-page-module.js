(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");

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
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // Ajouter le router dans la tableau des imports
                _router__WEBPACK_IMPORTED_MODULE_4__["Routing"]
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

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(AuthService) {
        var _this = this;
        this.AuthService = AuthService;
        this.userAuthentication = function () {
            _this.AuthService.authenticate()
                .then(function (data) { return console.log(data); })
                .catch(function (err) { return console.error(err); });
        };
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.userAuthentication();
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map