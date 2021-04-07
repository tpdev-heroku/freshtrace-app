(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dashboard/dashboard.component */ "./src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var _ui_ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ngo-details/ngo-details.component */ "./src/app/ui/ngo-details/ngo-details.component.ts");
/* harmony import */ var _ui_ngos_list_ngos_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ngos-list/ngos-list.component */ "./src/app/ui/ngos-list/ngos-list.component.ts");
/* harmony import */ var _ui_donate_donate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/donate/donate.component */ "./src/app/ui/donate/donate.component.ts");
/* harmony import */ var _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/signin/signin.component */ "./src/app/ui/signin/signin.component.ts");
/* harmony import */ var _ui_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/signup/signup.component */ "./src/app/ui/signup/signup.component.ts");
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signup', component: _ui_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'signin', component: _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: 'ngolist', component: _ui_ngos_list_ngos_list_component__WEBPACK_IMPORTED_MODULE_4__["NgosListComponent"] },
    { path: 'details/:id', component: _ui_ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_3__["NgoDetailsComponent"] },
    { path: 'donate/:id', component: _ui_donate_donate_component__WEBPACK_IMPORTED_MODULE_5__["DonateComponent"] },
    { path: 'dashboard', component: _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\nTest\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n<!-- <app-app-blockchain></app-app-blockchain> -->\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxvY29vbmV5XFxEb2N1bWVudHNcXEdpdEh1YlxcZnJlc2h0cmFjZS1hcHAxL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/


var AppComponent = /** @class */ (function () {
    function AppComponent(donorService) {
        this.donorService = donorService;
        this.title = 'freshtrace-blockchain';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.donorService.populate();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_shared__WEBPACK_IMPORTED_MODULE_1__["DonorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/shared/header/header.component */ "./src/app/ui/shared/header/header.component.ts");
/* harmony import */ var _ui_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/shared/footer/footer.component */ "./src/app/ui/shared/footer/footer.component.ts");
/* harmony import */ var _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/dashboard/dashboard.component */ "./src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/signin/signin.component */ "./src/app/ui/signin/signin.component.ts");
/* harmony import */ var _ui_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/signup/signup.component */ "./src/app/ui/signup/signup.component.ts");
/* harmony import */ var _ui_donate_donate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/donate/donate.component */ "./src/app/ui/donate/donate.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ui_ngos_list_ngos_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/ngos-list/ngos-list.component */ "./src/app/ui/ngos-list/ngos-list.component.ts");
/* harmony import */ var _ui_ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/ngo-details/ngo-details.component */ "./src/app/ui/ngo-details/ngo-details.component.ts");
/* harmony import */ var _ui_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/components/rating/rating.component */ "./src/app/ui/components/rating/rating.component.ts");
/* harmony import */ var _ui_components_blockchain_progress_blockchain_progress_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/components/blockchain-progress/blockchain-progress.component */ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.ts");
/* harmony import */ var _services_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var _ui_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/components/gallery/gallery.component */ "./src/app/ui/components/gallery/gallery.component.ts");
/* harmony import */ var _ui_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/shared/breadcrumb/breadcrumb.component */ "./src/app/ui/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ui_shared_blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/shared/blockchain/blockchain.component */ "./src/app/ui/shared/blockchain/blockchain.component.ts");
/* harmony import */ var _ui_shared_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/shared/sidenav/sidenav.component */ "./src/app/ui/shared/sidenav/sidenav.component.ts");
/* harmony import */ var _ui_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/components/donorchart/donorchart.component */ "./src/app/ui/components/donorchart/donorchart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/















// Custom Componants


// Shared Services






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ui_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _ui_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _ui_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _ui_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _ui_donate_donate_component__WEBPACK_IMPORTED_MODULE_11__["DonateComponent"],
                _ui_ngos_list_ngos_list_component__WEBPACK_IMPORTED_MODULE_13__["NgosListComponent"],
                _ui_ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_14__["NgoDetailsComponent"],
                _ui_components_blockchain_progress_blockchain_progress_component__WEBPACK_IMPORTED_MODULE_16__["BlockchainProgressComponent"],
                _ui_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"],
                _ui_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
                _ui_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"],
                _ui_shared_blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_20__["BlockchainComponent"],
                _ui_shared_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
                _ui_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_22__["DonorchartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            providers: [
                _services_shared__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _services_shared__WEBPACK_IMPORTED_MODULE_17__["ApiService"],
                _services_shared__WEBPACK_IMPORTED_MODULE_17__["SessionService"],
                _ui_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_ui_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_22__["DonorchartComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/donation.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/donation.model.ts ***!
  \******************************************/
/*! exports provided: Donation, Donate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donation", function() { return Donation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donate", function() { return Donate; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var Donation = /** @class */ (function () {
    function Donation() {
        this.id = null;
        this.Donor_id = null;
        this.ngo_id = null;
        this.ngo_name = null;
        this.project_id = null;
        this.status = null;
        this.amount = 0;
        this.utilized = 0;
        this.transaction_id = null;
        this.date = null;
    }
    return Donation;
}());
var Donate = /** @class */ (function () {
    function Donate() {
        this.donationId = null;
        this.donationAmount = null;
        this.donationDate = null;
        this.donorUserName = null;
        this.ngoRegistrationNumber = null;
    }
    Donate.prototype.set = function (donationAmount, donor, ngo) {
        this.donationId = uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
        this.donationAmount = donationAmount;
        this.donationDate = '';
        this.donorUserName = donor;
        this.ngoRegistrationNumber = ngo;
        return this;
    };
    Donate.prototype.toString = function () {
        try {
            return JSON.stringify(this);
        }
        catch (error) {
            // do nothing;
        }
        return null;
    };
    return Donate;
}());



/***/ }),

/***/ "./src/app/models/donor.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/donor.model.ts ***!
  \***************************************/
/*! exports provided: Donor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donor", function() { return Donor; });
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var Donor = /** @class */ (function () {
    function Donor() {
        this.id = null;
        this.name = null;
        this.email = null;
        this.password = null;
    }
    Donor.prototype.get = function (name, email) {
        this.name = name;
        this.email = email;
        this.id = name;
        return this;
    };
    return Donor;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Donation, Donate, Donor, Ngo, Rating, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation.model */ "./src/app/models/donation.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donation", function() { return _donation_model__WEBPACK_IMPORTED_MODULE_0__["Donation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donate", function() { return _donation_model__WEBPACK_IMPORTED_MODULE_0__["Donate"]; });

/* harmony import */ var _donor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donor.model */ "./src/app/models/donor.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donor", function() { return _donor_model__WEBPACK_IMPORTED_MODULE_1__["Donor"]; });

/* harmony import */ var _ngo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngo.model */ "./src/app/models/ngo.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ngo", function() { return _ngo_model__WEBPACK_IMPORTED_MODULE_2__["Ngo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return _ngo_model__WEBPACK_IMPORTED_MODULE_2__["Rating"]; });

/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.model */ "./src/app/models/project.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _project_model__WEBPACK_IMPORTED_MODULE_3__["Project"]; });

/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/








/***/ }),

/***/ "./src/app/models/ngo.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/ngo.model.ts ***!
  \*************************************/
/*! exports provided: Ngo, Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ngo", function() { return Ngo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var Ngo = /** @class */ (function () {
    function Ngo() {
        this.id = null;
        this.ngo_name = null;
        this.ngo_reg_no = null;
        this.ngo_address = null;
        this.ngo_phone = null;
        this.ngo_email = null;
        this.ngo_website = null;
        this.ngo_Donors = 0;
        this.ngo_donations = 0;
        this.ngo_fund_utilized = 0;
        this.ngo_projects = 0;
        this.ngo_active_projects = 0;
        this.ngo_on_hold_projects = 0;
        this.ngo_complete_projects = 0;
        this.ngo_about = null;
        this.ngo_project_details = null;
        this.ngo_rating = 0;
        this.ngo_user_rating = 0;
        this.ngo_funds_details = null;
        this.ngo_user_donations = 0.00;
        this.ngo_donor_details = new Map();
        this.ngo_spend_details = [];
        this.ngo_donors_list = [];
    }
    return Ngo;
}());
var Rating = /** @class */ (function () {
    function Rating() {
        this.ratingId = null;
        this.rating = 0;
        this.donorUserName = null;
        this.ngoRegistrationNumber = null;
        this.ratingDate = new Date();
        this.transactionId = null;
    }
    Rating.prototype.set = function (rating, donor, ngo) {
        this.donorUserName = "" + donor;
        this.ngoRegistrationNumber = "" + ngo;
        this.rating = rating;
        this.ratingId = uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]();
        return this;
    };
    Rating.prototype.toString = function () {
        try {
            return JSON.stringify(this);
        }
        catch (error) {
            // do nothing;
        }
        return null;
    };
    return Rating;
}());



/***/ }),

/***/ "./src/app/models/project.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var Project = /** @class */ (function () {
    function Project() {
        this.id = null;
        this.ngo_id = null;
        this.details = null;
        this.gallary_url = null;
        this.donation = null;
        this.fund_utilized = null;
        this.address = null;
        this.country = null;
        this.is_completed = false;
        this.star_date = null;
        this.end_date = null;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var BlockchainService = /** @class */ (function () {
    function BlockchainService() {
    }
    BlockchainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var src_app_services_ngo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ngo.service */ "./src/app/services/ngo.service.ts");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/





var DashboardService = /** @class */ (function () {
    function DashboardService(apiService, ngoService, sessionService) {
        this.apiService = apiService;
        this.ngoService = ngoService;
        this.sessionService = sessionService;
        this.ngoMap = src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].jsonToMap(src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getValue('ngos'));
    }
    DashboardService.prototype.getUserDonations = function () {
        var _this = this;
        var path = "donors/" + src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getUser().name + "/donations";
        return this.apiService.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return _this.userDonationsJsonAdopter(data); }));
    };
    DashboardService.prototype.getDonationsByNGO = function (ngo_id) {
        var path = "ngos/" + ngo_id + "/donations";
        return this.apiService.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    DashboardService.prototype.getContributorsBySpend = function (spendId) {
        var path = "spend/" + spendId + "/spendallocations";
        return this.apiService.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }));
    };
    DashboardService.prototype.getNGONameById = function (nog_id) {
        var data = this.ngoService.getNGO(nog_id);
        if (data[0] !== undefined) {
            return data[0].ngo_name;
        }
        return null;
    };
    DashboardService.prototype.userContributionJsonAdopter = function (userContributionData) {
        if (userContributionData === void 0) { userContributionData = []; }
        var userContributions = [];
        if (userContributionData.length === undefined) {
            userContributionData = [userContributionData];
        }
        for (var key in userContributionData) {
            if (userContributionData[key] !== undefined) {
                var userContribution = userContributionData[key];
                userContributions.push(userContribution);
            }
        }
        return userContributions;
    };
    DashboardService.prototype.userDonationsJsonAdopter = function (userDonationsData) {
        if (userDonationsData === void 0) { userDonationsData = []; }
        var userDonations = [];
        if (userDonationsData.length === undefined) {
            userDonationsData = [userDonationsData];
        }
        for (var key in userDonationsData) {
            if (userDonationsData[key] !== undefined) {
                var data = userDonationsData[key];
                var userDonation = new _models__WEBPACK_IMPORTED_MODULE_2__["Donation"]();
                userDonation.id = data.donationId;
                userDonation.Donor_id = data.donorUserName;
                userDonation.ngo_id = data.ngoRegistrationNumber;
                userDonation.date = new Date(data.donationDate);
                userDonation.amount = data.donationAmount;
                if (this.ngoMap.get(userDonation.ngo_id)) {
                    userDonation.ngo_name = this.ngoMap.get(userDonation.ngo_id).ngo_name;
                    userDonation.project_id = this.ngoMap.get(userDonation.ngo_id).ngo_about;
                }
                userDonations.push(userDonation);
            }
        }
        return userDonations;
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_services_ngo_service__WEBPACK_IMPORTED_MODULE_3__["NgoService"],
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/donate.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/donate.service.ts ***!
  \********************************************/
/*! exports provided: DonateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateService", function() { return DonateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/



var DonateService = /** @class */ (function () {
    function DonateService(apiService) {
        this.apiService = apiService;
    }
    DonateService.prototype.makeDonation = function (ngoName, DonorUserName, donationAmount) {
        var donate = new _models__WEBPACK_IMPORTED_MODULE_2__["Donate"]().set(donationAmount, DonorUserName, ngoName);
        donate.donationDate = new Date().toISOString();
        var path = "donations";
        return this.apiService.post(path, donate);
    };
    DonateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DonateService);
    return DonateService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: DashboardService, DonateService, NgoService, BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]; });

/* harmony import */ var _donate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.service */ "./src/app/services/donate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonateService", function() { return _donate_service__WEBPACK_IMPORTED_MODULE_1__["DonateService"]; });

/* harmony import */ var _ngo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngo.service */ "./src/app/services/ngo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgoService", function() { return _ngo_service__WEBPACK_IMPORTED_MODULE_2__["NgoService"]; });

/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return _blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"]; });

/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/






/***/ }),

/***/ "./src/app/services/ngo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/ngo.service.ts ***!
  \*****************************************/
/*! exports provided: NgoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgoService", function() { return NgoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared/api.service */ "./src/app/services/shared/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/




var NgoService = /** @class */ (function () {
    function NgoService(apiService) {
        this.apiService = apiService;
    }
    NgoService.prototype.getNGOs = function () {
        var _this = this;
        var path = 'ngos';
        return this.apiService.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.ngoJsonAdopter(data); }));
    };
    NgoService.prototype.getNGO = function (ngo_id) {
        var _this = this;
        var path = "ngos/" + ngo_id;
        return this.apiService.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.ngoJsonAdopter(data); }));
    };
    NgoService.prototype.getNGOSpend = function (ngo_id) {
        var path = "ngos/" + ngo_id + "/spend";
        return this.apiService.get(path);
    };
    NgoService.prototype.getNGORating = function (ngo_id) {
        var path = "ngos/" + ngo_id + "/ratings";
        return this.apiService.get(path);
    };
    NgoService.prototype.getDonorNGORating = function (ngo_id, donor_id) {
        var path = "ratings/" + ngo_id + "/" + donor_id;
        return this.apiService.get(path);
    };
    NgoService.prototype.updateDonorNGORating = function (rating_id, userRating, Donor_name, ngo_id) {
        var rating = new _models__WEBPACK_IMPORTED_MODULE_1__["Rating"]().set(userRating, Donor_name, ngo_id);
        rating.transactionId = rating_id;
        var path = "ratings";
        return this.apiService.put(path, rating);
    };
    NgoService.prototype.createDonorNGORating = function (userRating, Donor_name, ngo_id) {
        var rating = new _models__WEBPACK_IMPORTED_MODULE_1__["Rating"]().set(userRating, Donor_name, ngo_id);
        var path = "ratings";
        return this.apiService.post(path, rating);
    };
    NgoService.prototype.ngoJsonAdopter = function (ngoData) {
        if (ngoData === void 0) { ngoData = []; }
        var ngos = [];
        if (ngoData.length === undefined) {
            ngoData = [ngoData];
        }
        for (var key in ngoData) {
            if (ngoData[key] !== undefined) {
                var data = ngoData[key];
                var ngo = new _models__WEBPACK_IMPORTED_MODULE_1__["Ngo"]();
                ngo.id = data.ngoRegistrationNumber;
                ngo.ngo_about = data.ngoDescription;
                ngo.ngo_reg_no = data.ngoRegistrationNumber;
                ngo.ngo_name = data.ngoName;
                ngo.ngo_address = data.address;
                ngo.ngo_phone = data.contactNumber;
                ngo.ngo_email = data.contactEmail;
                ngo.ngo_icon_url = "assets/images/" + data.ngoRegistrationNumber + "/" + data.ngoRegistrationNumber + ".png";
                ngo.ngo_rating = 0;
                ngo.ngo_projects = Math.floor(Math.random() * (+40 - +10)) + +10;
                ngos.push(ngo);
            }
        }
        return ngos;
    };
    NgoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], NgoService);
    return NgoService;
}());



/***/ }),

/***/ "./src/app/services/shared/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/shared/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headersConfig);
    };
    ApiService.prototype.setHeadersCustomer = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Token': ' bla bla '
        };
        return new Headers(headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        var err_msg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        return this.http.get("" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, { headers: this.setHeaders(), params: params }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        var _this = this;
        if (body === void 0) { body = {}; }
        return this.http.put("" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, JSON.stringify(body), { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.formatErrors(error); }));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, JSON.stringify(body), { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url + path, { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/shared/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donor.service */ "./src/app/services/shared/donor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/



var AuthService = /** @class */ (function () {
    function AuthService(router, injector) {
        this.router = router;
        this.injector = injector;
    }
    AuthService.prototype.canActivate = function (route, state) {
        var donorService = this.injector.get(_donor_service__WEBPACK_IMPORTED_MODULE_2__["DonorService"]);
        return donorService.isAuthenticated;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/shared/donor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shared/donor.service.ts ***!
  \**************************************************/
/*! exports provided: DonorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorService", function() { return DonorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/







var DonorService = /** @class */ (function () {
    function DonorService(apiService, sessionService, route, activatedRoute) {
        var _this = this;
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.currentDonorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentDonor = this.currentDonorSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        this.currentUrl = '';
        route.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                _this.currentUrl = event.url;
            }
        });
    }
    DonorService.prototype.signin = function (logindata) {
        return this.apiService.get("donors/" + logindata.username);
    };
    DonorService.prototype.createUser = function (userdata) {
        var userData = {
            username: userdata.username,
            orgName: 'Org1'
        };
        return this.apiService.post("users", userData);
    };
    DonorService.prototype.signup = function (userdata) {
        var reqData = {
            donorUserName: userdata.username,
            email: userdata.email,
            registeredDate: new Date().toISOString()
        };
        return this.apiService.post("donors", reqData);
    };
    DonorService.prototype.signout = function () {
        this.purgeAuth();
        this.route.navigate(['signin']);
    };
    DonorService.prototype.populate = function () {
        var _this = this;
        var userinfo = _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"].getUser();
        if (userinfo) {
            this.apiService.get("donors/" + userinfo.name)
                .subscribe(function (data) {
                if (data.length > 0) {
                    var datum = data[0];
                    var donor = new _models__WEBPACK_IMPORTED_MODULE_2__["Donor"]().get(datum.donorUserName, datum.email);
                    _this.setAuth(donor);
                    if (_this.currentUrl !== '/' || _this.currentUrl !== '/singin') {
                        _this.route.navigate(['ngolist']);
                    }
                    return;
                }
            }, function (err) {
                _this.purgeAuth();
                if (_this.currentUrl !== '/singup') {
                    _this.route.navigate(['signin']);
                }
            });
        }
        else {
            if (this.currentUrl !== '/singup') {
                this.route.navigate(['signin']);
            }
        }
    };
    DonorService.prototype.setAuth = function (donor) {
        this.sessionService.saveUser(donor);
        this.currentDonorSubject.next(donor);
        this.isAuthenticatedSubject.next(true);
    };
    DonorService.prototype.purgeAuth = function () {
        this.sessionService.deleteUser();
        this.currentDonorSubject.next(null);
        this.isAuthenticatedSubject.next(false);
    };
    DonorService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.get("/donors/" + credentials.name + route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            var donor = new _models__WEBPACK_IMPORTED_MODULE_2__["Donor"]().get(data.name, data.email);
            _this.setAuth(donor);
            return donor;
        }));
    };
    DonorService.prototype.getCurrentDonor = function () {
        return this.currentDonorSubject.value;
    };
    DonorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], DonorService);
    return DonorService;
}());



/***/ }),

/***/ "./src/app/services/shared/index.ts":
/*!******************************************!*\
  !*** ./src/app/services/shared/index.ts ***!
  \******************************************/
/*! exports provided: SocketService, ApiService, AuthService, SessionService, DonorService, UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/services/shared/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/shared/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/shared/session.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]; });

/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/shared/socket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]; });

/* harmony import */ var _donor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor.service */ "./src/app/services/shared/donor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonorService", function() { return _donor_service__WEBPACK_IMPORTED_MODULE_4__["DonorService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/shared/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]; });

/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/








/***/ }),

/***/ "./src/app/services/shared/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/shared/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/


var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.getUser = function () {
        if (window.localStorage['user']) {
            try {
                var data = JSON.parse(window.localStorage['user']);
                return new src_app_models__WEBPACK_IMPORTED_MODULE_1__["Donor"]().get(data.name, data.email);
            }
            catch (error) {
                return null;
            }
        }
    };
    SessionService.getValue = function (key) {
        if (key === void 0) { key = ''; }
        var value = window.localStorage[key];
        if (value && typeof value === 'string') {
            try {
                return JSON.parse(window.localStorage[key]);
            }
            catch (error) {
                // do nothing
            }
        }
        return value;
    };
    SessionService.setValue = function (key, value) {
        if (key === void 0) { key = ''; }
        if (value === void 0) { value = null; }
        if (typeof value === 'object') {
            try {
                var data = JSON.stringify(value);
                return window.localStorage[key] = data;
            }
            catch (error) {
                // do nothing
            }
        }
        return window.localStorage[key] = value;
    };
    SessionService.prototype.saveUser = function (donor) {
        var data = JSON.stringify(donor);
        window.localStorage['user'] = data;
    };
    SessionService.prototype.deleteUser = function () {
        window.localStorage.removeItem('user');
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/shared/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/


var SocketService = /** @class */ (function () {
    function SocketService() {
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    SocketService.prototype.create = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (obs) {
            _this.ws.onmessage = obs.next.bind(obs);
            _this.ws.onerror = obs.error.bind(obs);
            _this.ws.onclose = obs.complete.bind(obs);
            return _this.ws.close.bind(_this.ws);
        });
        var observer = {
            next: function (data) {
                if (_this.ws.readyState === WebSocket.OPEN) {
                    _this.ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    SocketService.prototype.close = function () {
        this.ws.close();
        this.subject = null;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/shared/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shared/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.onHeightChange = function (elementtoResize, offset) {
        if (offset === void 0) { offset = 50; }
        var x = $(elementtoResize).offset();
        var setElementHtTo = $(window).height() - x.top - offset;
        $(elementtoResize).css({ 'max-height': setElementHtTo });
    };
    UtilsService.mapToJson = function (map) {
        var josnObj = {};
        Array.from(map.entries()).forEach(function (entry) {
            josnObj[entry[0]] = JSON.stringify(entry[1]);
        });
        return josnObj;
    };
    UtilsService.jsonToMap = function (json) {
        if (json) {
            var mapObj_1 = new Map();
            Object.keys(json).forEach(function (key) {
                mapObj_1.set(key, JSON.parse(json[key]));
            });
            return mapObj_1;
        }
    };
    UtilsService.formatFloat = function (floatStr, offset) {
        if (offset === void 0) { offset = 4; }
        floatStr = String(floatStr);
        try {
            var decimalIndex = floatStr.indexOf('.');
            if (decimalIndex > 0 && floatStr.length > decimalIndex + offset) {
                return parseFloat(floatStr.substring(0, decimalIndex + offset));
            }
            return parseFloat(floatStr);
        }
        catch (e) {
            console.error("Cant format string " + floatStr + " to float");
            return 0.0;
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/components/blockchain-progress/blockchain-progress.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<section class=\"cd-horizontal-blockchain border-bottom shadow-sm bg-white pt-3\" [ngClass]=\"{'loaded': loaded}\">\n  <div class=\"blockchain\">\n    <ul class=\"cd-blockchain-navigation\">\n      <li>\n        <a href=\"#\" (click)=\"onBlocksScrollChange($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\"></a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"onBlocksScrollChange($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\"></a>\n      </li>\n    </ul>\n    <div class=\"events-wrapper\">\n      <h6 class=\"text-center text-orange\">Blockchain Events</h6>\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\n        <ol>\n          <li *ngFor=\"let item of blockElements; let index = index;\">\n            <a #blockEvents [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\">\n              <img [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\" data-toggle=\"tooltip\"\n                data-html=\"true\" [title]=\"getTransections(item)\" src=\"/assets/images/block-dark.png\"> </a> <span class=\"text-center\">Block:\n              {{item.caption}}</span>\n          </li>\n        </ol>\n        <span class=\"filling-line\" aria-hidden=\"true\" #connectBlocks></span>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/components/blockchain-progress/blockchain-progress.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\nol, ul {\n  list-style: none; }\n.cd-horizontal-blockchain {\n  opacity: 0;\n  transition: opacity 0.2s; }\n.cd-horizontal-blockchain::before {\n    content: 'mobile';\n    display: none; }\n.cd-horizontal-blockchain.loaded {\n    opacity: 1; }\n.cd-horizontal-blockchain .blockchain {\n    position: relative;\n    height: 84px;\n    width: 90%;\n    max-width: 800px;\n    margin: 0 auto; }\n.cd-horizontal-blockchain .events-wrapper {\n    position: relative;\n    height: 100%;\n    margin: 0 40px;\n    overflow: hidden; }\n.cd-horizontal-blockchain .events-wrapper::after {\n      content: '';\n      position: absolute;\n      z-index: 2;\n      top: 0;\n      height: 100%;\n      width: 20px; }\n.cd-horizontal-blockchain .events-wrapper::before {\n      content: '';\n      position: absolute;\n      z-index: 2;\n      top: 0;\n      height: 100%;\n      width: 20px;\n      left: 0;\n      background-image: linear-gradient(to right, #fff, rgba(248, 248, 248, 0)); }\n.cd-horizontal-blockchain .events-wrapper::after {\n      right: 0;\n      background-image: linear-gradient(to left, #fff, rgba(248, 248, 248, 0)); }\n.cd-horizontal-blockchain .events {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 43px;\n    height: 2px;\n    background: #dfdfdf;\n    transition: transform 0.4s; }\n.cd-horizontal-blockchain .filling-line {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #7b9d6f;\n    transform: scaleX(0);\n    transform-origin: left center;\n    transition: transform 0.3s; }\n.cd-horizontal-blockchain .events a img {\n    position: absolute;\n    bottom: -26px;\n    z-index: 2;\n    text-align: center;\n    font-size: 12px;\n    text-decoration: none;\n    padding-bottom: 15px;\n    color: #383838;\n    height: 40px;\n    transform: translateZ(0); }\n.cd-horizontal-blockchain .events a img::after {\n      bottom: -2.5px;\n      height: 8px;\n      width: 8px;\n      position: absolute;\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n      border-radius: 50%;\n      border: 2px solid #dfdfdf;\n      background-color: #f8f8f8;\n      transition: background-color 0.3s, border-color 0.3s; }\n.cd-horizontal-blockchain .events a img:hover::after {\n      background-color: #7b9d6f;\n      border-color: #7b9d6f;\n      height: 52px !important; }\n.cd-horizontal-blockchain .events a img.selected {\n      height: 48px !important;\n      bottom: -29px;\n      cursor: pointer; }\n.cd-horizontal-blockchain .events a img.selected::after {\n        background-color: #7b9d6f;\n        border-color: #7b9d6f; }\n.cd-horizontal-blockchain .events a img.older-event::after {\n      border-color: #7b9d6f;\n      cursor: pointer; }\n.cd-horizontal-blockchain li span {\n    position: absolute;\n    left: 1700px;\n    bottom: -30px;\n    font-size: 12px; }\n@media only screen and (min-width: 1100px) {\n  .cd-horizontal-blockchain::before {\n    content: 'desktop'; } }\n.cd-blockchain-navigation a {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  bottom: auto;\n  transform: translateY(-50%);\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  overflow: hidden;\n  color: transparent;\n  text-indent: 100%;\n  white-space: nowrap;\n  transition: border-color 0.3s; }\n.cd-blockchain-navigation a::after {\n    content: '';\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translateX(-50%) translateY(-50%);\n    background: url(/assets/images/arrow-gr.png) no-repeat 0 0; }\n.cd-blockchain-navigation a.prev {\n    left: 0;\n    transform: translateY(-50%) rotate(180deg); }\n.cd-blockchain-navigation a.next {\n    right: 0; }\n.cd-blockchain-navigation a:hover {\n    border-color: #7b9d6f; }\n.cd-blockchain-navigation a.inactive {\n    cursor: not-allowed; }\n.cd-blockchain-navigation a.inactive::after {\n      background-position: 0 -16px; }\n.cd-blockchain-navigation a.inactive:hover {\n      border-color: #dfdfdf; }\n.cd-blockchain-navigation a li {\n    list-style: none; }\n@media only screen and (min-width: 768px) {\n  .cd-horizontal-blockchain .events-content h2 {\n    font-size: 7rem; }\n  .cd-horizontal-blockchain .events-content em {\n    font-size: 2rem; }\n  .cd-horizontal-blockchain .events-content p {\n    font-size: 1.8rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9ibG9ja2NoYWluLXByb2dyZXNzL0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXGJsb2NrY2hhaW4tcHJvZ3Jlc3NcXGJsb2NrY2hhaW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvYmxvY2tjaGFpbi1wcm9ncmVzcy9ibG9ja2NoYWluLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDO0FEQ0Q7RUFDSSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFVBQVU7RUFHVix3QkFBd0IsRUFBQTtBQUoxQjtJQU1JLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7QUFQakI7SUFVSSxVQUFVLEVBQUE7QUFWZDtJQWFJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7QUFqQmxCO0lBb0JJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQixFQUFBO0FBdkJwQjtNQXlCTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixNQUFNO01BQ04sWUFBWTtNQUNaLFdBQVcsRUFBQTtBQTlCakI7TUFpQ00sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsTUFBTTtNQUNOLFlBQVk7TUFDWixXQUFXO01BQ1gsT0FBTztNQUVQLHlFQUF5RSxFQUFBO0FBekMvRTtNQTRDTSxRQUFRO01BRVIsd0VBQXdFLEVBQUE7QUE5QzlFO0lBa0RJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBR25CLDBCQUEwQixFQUFBO0FBMUQ5QjtJQTZESSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFLekIsb0JBQW9CO0lBS3BCLDZCQUE2QjtJQUc3QiwwQkFBMEIsRUFBQTtBQWhGOUI7SUFtRkksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0lBTVosd0JBQXdCLEVBQUE7QUFqRzVCO01BbUdNLGNBQWM7TUFDZCxXQUFXO01BQ1gsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsV0FBVztNQUtYLDJCQUEyQjtNQUMzQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUd6QixvREFBb0QsRUFBQTtBQW5IMUQ7TUFzSE0seUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQix1QkFBdUIsRUFBQTtBQXhIN0I7TUEySE0sdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixlQUFlLEVBQUE7QUE3SHJCO1FBZ0lRLHlCQUF5QjtRQUN6QixxQkFBcUIsRUFBQTtBQWpJN0I7TUFxSU0scUJBQXFCO01BQ3JCLGVBQWUsRUFBQTtBQXRJckI7SUEwSUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZSxFQUFBO0FBSW5CO0VBQ0U7SUFFSSxrQkFBa0IsRUFBQSxFQUNuQjtBQUlMO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUtaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBR25CLDZCQUE2QixFQUFBO0FBcEIvQjtJQXNCSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUtYLDRDQUE0QztJQUM1QywwREFBMEQsRUFBQTtBQW5DOUQ7SUFzQ0ksT0FBTztJQUtQLDBDQUEwQyxFQUFBO0FBM0M5QztJQThDSSxRQUFRLEVBQUE7QUE5Q1o7SUFpREkscUJBQXFCLEVBQUE7QUFqRHpCO0lBb0RJLG1CQUFtQixFQUFBO0FBcER2QjtNQXNETSw0QkFBNEIsRUFBQTtBQXREbEM7TUF5RE0scUJBQXFCLEVBQUE7QUF6RDNCO0lBNkRJLGdCQUFnQixFQUFBO0FBTXBCO0VBQ0U7SUFFSSxlQUFlLEVBQUE7RUFGbkI7SUFLSSxlQUFlLEVBQUE7RUFMbkI7SUFRSSxpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvYmxvY2tjaGFpbi1wcm9ncmVzcy9ibG9ja2NoYWluLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cbm9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnbW9iaWxlJztcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICYubG9hZGVkIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5ibG9ja2NoYWluIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogODRweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5ldmVudHMtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgNDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XG4gICAgICB9XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmV2ZW50cyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogNDNweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2RmZGZkZjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC40cztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICAgIH1cbiAgICAuZmlsbGluZy1saW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgIC5ldmVudHMgYSBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMjZweDtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIGNvbG9yOiAjMzgzODM4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm90dG9tOiAtMi41cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjlkNmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcbiAgICAgICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogLTI5cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5vbGRlci1ldmVudDo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGkgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxNzAwcHg7XG4gICAgICBib3R0b206IC0zMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiB7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnZGVza3RvcCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDUwJTtcbiAgICBib3R0b206IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogMzRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9hcnJvdy1nci5wbmcpIG5vLXJlcGVhdCAwIDA7XG4gICAgfVxuICAgICYucHJldiB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICAgICYubmV4dCB7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7XG4gICAgfVxuICAgICYuaW5hY3RpdmUge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTZweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNkZmRmZGY7XG4gICAgICB9XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuICB9XG5cblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtY29udGVudCB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICAgIGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIiwiLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW46OmJlZm9yZSB7XG4gICAgY29udGVudDogJ21vYmlsZSc7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluLmxvYWRlZCB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ibG9ja2NoYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA4NHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzLXdyYXBwZXI6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMHB4OyB9XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzLXdyYXBwZXI6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtd3JhcHBlcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7IH1cbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNDNweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7IH1cbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZmlsbGluZy1saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdiOWQ2ZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMgYSBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0yNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMzODM4Mzg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgfVxuICAgIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cyBhIGltZzo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAtMi41cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzOyB9XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzIGEgaW1nOmhvdmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjN2I5ZDZmO1xuICAgICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMgYSBpbWcuc2VsZWN0ZWQge1xuICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3R0b206IC0yOXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMgYSBpbWcuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiOWQ2ZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjN2I5ZDZmOyB9XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzIGEgaW1nLm9sZGVyLWV2ZW50OjphZnRlciB7XG4gICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiBsaSBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTcwMHB4O1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW46OmJlZm9yZSB7XG4gICAgY29udGVudDogJ2Rlc2t0b3AnOyB9IH1cblxuLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZmRmZGY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzOyB9XG4gIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9hcnJvdy1nci5wbmcpIG5vLXJlcGVhdCAwIDA7IH1cbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhLnByZXYge1xuICAgIGxlZnQ6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpOyB9XG4gIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYS5uZXh0IHtcbiAgICByaWdodDogMDsgfVxuICAuY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGE6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjsgfVxuICAuY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGEuaW5hY3RpdmUge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiAgICAuY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGEuaW5hY3RpdmU6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE2cHg7IH1cbiAgICAuY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGEuaW5hY3RpdmU6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZkZmRmOyB9XG4gIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYSBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cy1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDdyZW07IH1cbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzLWNvbnRlbnQgZW0ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ui/components/blockchain-progress/blockchain-progress.component.ts ***!
  \************************************************************************************/
/*! exports provided: BlockchainProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainProgressComponent", function() { return BlockchainProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_shared_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/socket.service */ "./src/app/services/shared/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/



var BlockchainProgressComponent = /** @class */ (function () {
    function BlockchainProgressComponent(detectChange, socketService) {
        var _this = this;
        this.detectChange = detectChange;
        this.socketService = socketService;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this.blockEventsWidth = 720;
        this.blockEventsGap = 100;
        this.socketService.newMessage.subscribe(function (data) {
            try {
                detectChange.detectChanges();
                _this.ngAfterViewInit();
            }
            catch (ex) {
                console.error(ex);
            }
        });
    }
    BlockchainProgressComponent_1 = BlockchainProgressComponent;
    Object.defineProperty(BlockchainProgressComponent.prototype, "blockElements", {
        get: function () {
            return this._blockElements;
        },
        set: function (value) {
            this._blockElements = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    BlockchainProgressComponent.pxToNumber = function (val) {
        return Number(val.replace('px', ''));
    };
    BlockchainProgressComponent.getElementWidth = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return BlockchainProgressComponent_1.pxToNumber(computedStyle.width);
    };
    BlockchainProgressComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() === tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    BlockchainProgressComponent.getTranslateValue = function (block) {
        var blockStyle = window.getComputedStyle(block);
        var blockTranslate = blockStyle.getPropertyValue('-webkit-transform') ||
            blockStyle.getPropertyValue('-moz-transform') ||
            blockStyle.getPropertyValue('-ms-transform') ||
            blockStyle.getPropertyValue('-o-transform') ||
            blockStyle.getPropertyValue('transform');
        var translateValue = 0;
        if (blockTranslate.indexOf('(') >= 0) {
            var blockTranslateStr = blockTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(blockTranslateStr);
        }
        return translateValue;
    };
    BlockchainProgressComponent.setTransformValue = function (element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    };
    BlockchainProgressComponent.dayDiff = function (first, second) {
        return Math.round(second.getTime() - first.getTime());
    };
    BlockchainProgressComponent.minLapse = function (elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        var result = 0;
        for (var i = 1; i < elements.length; i++) {
            var distance = BlockchainProgressComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    BlockchainProgressComponent.prototype.ngAfterViewInit = function () {
        this.detectChange.detach();
        this._viewInitialized = true;
        this.initView();
        $('[data-toggle="tooltip"]').tooltip();
    };
    BlockchainProgressComponent.prototype.initBlockChain = function (blockChains) {
        var blockEventsMinDist = 100;
        this.setBlockPosition(blockChains, this.blockEventsGap, blockEventsMinDist);
        this.setBlockChainWidth(blockChains, this.blockEventsGap, blockEventsMinDist);
        this.loaded = true;
    };
    BlockchainProgressComponent.prototype.onBlocksScrollChange = function (e, right) {
        e.preventDefault();
        this.updateBlocksVisibility(this.eventsWrapperWidth, right);
        this.detectChange.detectChanges();
    };
    BlockchainProgressComponent.prototype.updateBlocksVisibility = function (blockTotWidth, right) {
        var translateValue = BlockchainProgressComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (right) {
            this.translateBlockChain(translateValue - this.blockEventsWidth + this.blockEventsGap, this.blockEventsWidth - blockTotWidth);
        }
        else {
            this.translateBlockChain(translateValue + this.blockEventsWidth - this.blockEventsGap, null);
        }
    };
    BlockchainProgressComponent.prototype.translateBlockChain = function (value, totWidth) {
        value = (value > 0) ? 0 : value;
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        BlockchainProgressComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
    };
    BlockchainProgressComponent.prototype.updateBlockChainPosition = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = BlockchainProgressComponent_1.pxToNumber(eventStyle.getPropertyValue('left'));
        var translateValue = BlockchainProgressComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this.blockEventsWidth - translateValue) {
            this.translateBlockChain(-eventLeft + this.blockEventsWidth / 2, this.blockEventsWidth - this.eventsWrapperWidth);
        }
    };
    BlockchainProgressComponent.prototype.setBlockChainWidth = function (elements, width, blockEventsMinDist) {
        var timeSpan = 100;
        if (elements.length > 2) {
            timeSpan = timeSpan * elements.length;
        }
        else {
            timeSpan = 350;
        }
        var timeSpanNorm = timeSpan / blockEventsMinDist;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('img.selected')[0];
        this.updateConnectBlocks(aHref);
        this.updateBlockChainPosition(aHref);
        return this.eventsWrapperWidth;
    };
    BlockchainProgressComponent.prototype.updateConnectBlocks = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = eventStyle.getPropertyValue('left');
        var eventWidth = eventStyle.getPropertyValue('width');
        var eventLeftNum = BlockchainProgressComponent_1.pxToNumber(eventLeft) + BlockchainProgressComponent_1.pxToNumber(eventWidth) / 2;
        var scaleValue = eventLeftNum / this.eventsWrapperWidth;
        BlockchainProgressComponent_1.setTransformValue(this.connectBlocks.nativeElement, 'scaleX', scaleValue);
    };
    BlockchainProgressComponent.prototype.setBlockPosition = function (elements, min, blockEventsMinDist) {
        var blockEventsArray = this.blockEvents.toArray();
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = 100 * i + 1;
            var distanceNorm = Math.round(distance / blockEventsMinDist);
            blockEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            blockEventsArray[i].nativeElement.children[0].style.left = distanceNorm * min + 'px';
            var span = blockEventsArray[i].nativeElement.parentElement.children[1];
            var spanWidth = BlockchainProgressComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min - 8 + 'px';
            i++;
        }
    };
    BlockchainProgressComponent.prototype.initView = function () {
        if (!this._viewInitialized) {
            return;
        }
        if (this._blockElements && this._blockElements.length) {
            for (var i = 0; i < this._blockElements.length; i++) {
                if (this._blockElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initBlockChain(this._blockElements);
        }
        this.detectChange.detectChanges();
    };
    BlockchainProgressComponent.prototype.getTransections = function (item) {
        var translist = '';
        for (var i = 0; i < item.txInBlock.length; i++) {
            translist += "<em> " + item.txInBlock[i] + "</em><br>";
        }
        return "<span>Transaction Count:" + item.txCount + "</span><br><span>Transaction Blocks<span><br>" + translist;
    };
    var BlockchainProgressComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventsWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BlockchainProgressComponent.prototype, "eventsWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('connectBlocks'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BlockchainProgressComponent.prototype, "connectBlocks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('blockEvents'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BlockchainProgressComponent.prototype, "blockEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BlockchainProgressComponent.prototype, "blockElements", null);
    BlockchainProgressComponent = BlockchainProgressComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockchain-progress',
            template: __webpack_require__(/*! ./blockchain-progress.component.html */ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative', 'z-index': 2, opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./blockchain-progress.component.scss */ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], src_app_services_shared_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], BlockchainProgressComponent);
    return BlockchainProgressComponent;
}());



/***/ }),

/***/ "./src/app/ui/components/donorchart/donorchart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ui/components/donorchart/donorchart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class='pie-chart' #chart></div>\n"

/***/ }),

/***/ "./src/app/ui/components/donorchart/donorchart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/ui/components/donorchart/donorchart.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n.pie-chart {\n  width: 100%;\n  display: inline-block;\n  height: 400px !important; }\n.pie-chart /deep/ path {\n    stroke: #fff;\n    stroke-width: 2; }\n.pie-chart /deep/ .totalspend {\n    font-size: 1.6em; }\n.pie-chart /deep/ .label {\n    font-size: 1.2em; }\n.pie-chart /deep/ .percent {\n    font-size: 1.4em; }\n.legend {\n  font-weight: bold; }\n.legend .item {\n    padding: 0 30px; }\n.legend .item .circle {\n      height: 30px;\n      width: 30px;\n      border-radius: 50%;\n      margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9kb25vcmNoYXJ0L0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXGRvbm9yY2hhcnRcXGRvbm9yY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZG9ub3JjaGFydC9kb25vcmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDO0FET0Q7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBR3JCLHdCQUF3QixFQUFBO0FBTDFCO0lBUUksWUFBWTtJQUNaLGVBQWUsRUFBQTtBQVRuQjtJQVlJLGdCQUFnQixFQUFBO0FBWnBCO0lBZ0JJLGdCQUFnQixFQUFBO0FBaEJwQjtJQW9CSSxnQkFBZ0IsRUFBQTtBQUlwQjtFQUNFLGlCQUFpQixFQUFBO0FBRG5CO0lBSUksZUFBZSxFQUFBO0FBSm5CO01BT00sWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL2Rvbm9yY2hhcnQvZG9ub3JjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4vLyAud3JhcHBlcntcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4ucGllLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB0b3A6MHB4O1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cbiAgL2RlZXAvIHBhdGgge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cbiAgL2RlZXAvIC50b3RhbHNwZW5ke1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cblxuICAvZGVlcC8gLmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cblxuICAvZGVlcC8gLnBlcmNlbnR7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxufVxuXG4ubGVnZW5ke1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICAuaXRlbXtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG5cbiAgICAuY2lyY2xle1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4ucGllLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50OyB9XG4gIC5waWUtY2hhcnQgL2RlZXAvIHBhdGgge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDI7IH1cbiAgLnBpZS1jaGFydCAvZGVlcC8gLnRvdGFsc3BlbmQge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07IH1cbiAgLnBpZS1jaGFydCAvZGVlcC8gLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5waWUtY2hhcnQgL2RlZXAvIC5wZXJjZW50IHtcbiAgICBmb250LXNpemU6IDEuNGVtOyB9XG5cbi5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuICAubGVnZW5kIC5pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAubGVnZW5kIC5pdGVtIC5jaXJjbGUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/components/donorchart/donorchart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui/components/donorchart/donorchart.component.ts ***!
  \******************************************************************/
/*! exports provided: DonorchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorchartComponent", function() { return DonorchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/




var DonorchartComponent = /** @class */ (function () {
    function DonorchartComponent(dashboardService, elRef) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.elRef = elRef;
        this.svg = null;
        this.createChart = function () {
            _this.hostElement = _this.chartContainer.nativeElement;
            _this.radius = Math.min(_this.hostElement.offsetWidth, _this.hostElement.offsetHeight) / 2;
            var innerRadius = _this.radius - 80;
            var outerRadius = _this.radius - 15;
            var hoverRadius = _this.radius - 5;
            _this.pieColours = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
            _this.pieGenerator = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) { return d; })([0, 0, 0]);
            _this.arcGenerator = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);
            _this.arcHover = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
                .innerRadius(innerRadius)
                .outerRadius(hoverRadius);
            _this.labelArc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
                .outerRadius(innerRadius - 40)
                .innerRadius(outerRadius - 40);
        };
        this.updateChart = function (firstRun) {
            if (_this.svg === null) {
                _this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](_this.hostElement).append('svg')
                    .attr('viewBox', '0, -10, ' + _this.hostElement.offsetWidth + ', ' + (_this.hostElement.offsetHeight + 20))
                    .append('g')
                    .attr('transform', "translate(" + _this.hostElement.offsetWidth / 2 + ", " + _this.hostElement.offsetHeight / 2 + ")");
            }
            var vm = _this;
            _this.slices = _this.updateSlices(_this.data);
            _this.labels = _this.slices.map(function (slice) { return slice.name; });
            _this.donation = _this.slices.map(function (slice) { return slice.donation; });
            _this.colourSlices = _this.slices.map(function (slice) { return _this.pieColours(slice.name); });
            _this.values = firstRun ? [0, 0, 0] : underscore__WEBPACK_IMPORTED_MODULE_3__["toArray"](_this.slices).map(function (slice) { return slice.donation; });
            _this.pieGenerator = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) { return d; })(_this.values);
            var arc = _this.svg.selectAll('.arc')
                .data(_this.pieGenerator);
            arc.exit().remove();
            var arcEnter = arc.enter().append('g')
                .attr('class', 'arc');
            arcEnter.append('path')
                .attr('d', _this.arcGenerator)
                .each(function (values) { return firstRun ? values.storedValues = values : null; })
                .on('mouseover', _this.mouseover)
                .on('mouseout', _this.mouseout);
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](_this.hostElement).selectAll('path')
                .data(_this.pieGenerator)
                .attr('fill', function (datum, index) { return _this.pieColours(_this.labels[index]); })
                .attr('d', _this.arcGenerator)
                .attr('id', function (d, i) { return 'donutArc' + i; })
                .transition()
                .duration(750)
                .attrTween('d', function (newValues, i) {
                return vm.arcTween(newValues, i, this);
            });
            _this.svg.select('.totalspend').remove();
            _this.svg.append('text')
                .attr('dy', '-25px')
                .style('text-anchor', 'middle')
                .attr('class', 'totalspend')
                .attr('fill', '#57a1c6')
                .text('$ ' + _this.totalSpend);
        };
        this.mouseover = function (d, i) {
            _this.selectedSlice = _this.slices[i];
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](d3__WEBPACK_IMPORTED_MODULE_1__["event"].currentTarget).transition()
                .duration(200)
                .attr('d', _this.arcHover);
            _this.svg.append('text')
                .attr('dy', '0px')
                .style('text-anchor', 'middle')
                .attr('class', 'label')
                .attr('fill', '#57a1c6')
                .text(_this.labels[i] + ' contribution is $ ' + _this.donation[i]);
        };
        this.mouseout = function () {
            _this.svg.select('.label').remove();
            _this.svg.select('.percent').remove();
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](d3__WEBPACK_IMPORTED_MODULE_1__["event"].currentTarget).transition()
                .duration(100)
                .attr('d', _this.arcGenerator);
        };
        this.toPercent = function (a, b) {
            return Math.round(a / b * 100) + '%';
        };
        this.updateSlices = function (newData) {
            // const queriesByDonation = _.groupBy(_.sortBy(newData, 'donation'), 'donationId');
            // const queriesByDonation = _.sortBy(newData, 'donation');
            _this.totalSpend = _this.total;
            return underscore__WEBPACK_IMPORTED_MODULE_3__["sortBy"](newData, 'donation');
        };
    }
    DonorchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createChart();
        this.updateChart(true);
        setTimeout(function () { return _this.updateChart(false); }, 50);
    };
    DonorchartComponent.prototype.ngOnChanges = function () {
        //   if (this.svg) { this.updateChart(false); }
    };
    DonorchartComponent.prototype.arcTween = function (newValues, i, slice) {
        var _this = this;
        var interpolation = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](slice.storedValues, newValues);
        slice.storedValues = interpolation(0);
        return function (t) {
            return _this.arcGenerator(interpolation(t));
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DonorchartComponent.prototype, "chartContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DonorchartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DonorchartComponent.prototype, "colours", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DonorchartComponent.prototype, "total", void 0);
    DonorchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donorchart',
            template: __webpack_require__(/*! ./donorchart.component.html */ "./src/app/ui/components/donorchart/donorchart.component.html"),
            styles: [__webpack_require__(/*! ./donorchart.component.scss */ "./src/app/ui/components/donorchart/donorchart.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DonorchartComponent);
    return DonorchartComponent;
}());



/***/ }),

/***/ "./src/app/ui/components/gallery/gallery.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ui/components/gallery/gallery.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"gallery\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header pt-3 pb-3\">\n        <h4 class=\"modal-title\">Gallery</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body gallery mb-3 pt-0\">\n        <div *ngFor=\"let img of images; let i = index\">\n          <img class=\"img-fluid\" src=\"{{img}}\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/components/gallery/gallery.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/components/gallery/gallery.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9nYWxsZXJ5L0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIiwiLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/components/gallery/gallery.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/components/gallery/gallery.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_cdr) {
        this._cdr = _cdr;
        this.images = [];
    }
    Object.defineProperty(GalleryComponent.prototype, "itemId", {
        set: function (value) {
            this._itemId = value;
            this._cdr.detectChanges();
            this.ngAfterViewInit();
        },
        enumerable: true,
        configurable: true
    });
    GalleryComponent.prototype.ngAfterViewInit = function () {
        this.images = [
            "assets/images/" + this._itemId + "/activities/01.jpg",
            "assets/images/" + this._itemId + "/activities/02.jpg",
            "assets/images/" + this._itemId + "/activities/03.jpg",
            "assets/images/" + this._itemId + "/activities/04.jpg",
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GalleryComponent.prototype, "itemId", null);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/ui/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/ui/components/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/ui/components/rating/rating.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui/components/rating/rating.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<fieldset class=\"rating\">\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"5\" [checked]=\"rating===5\" />\n  <span (click)='onClick(5)'></span>\n\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"4\" [checked]=\"rating===4\" />\n  <span (click)='onClick(4)'></span>\n\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\n  <span (click)='onClick(3)'></span>\n\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\n  <span (click)='onClick(2)'></span>\n\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\n  <span (click)='onClick(1)'></span>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/ui/components/rating/rating.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ui/components/rating/rating.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n.rating {\n  float: left;\n  min-width: 84px; }\n.rating:not(:checked) > input {\n    position: absolute;\n    top: -100000px;\n    clip: rect(0, 0, 0, 0); }\n.rating:not(:checked) > span {\n    float: right;\n    width: 1em;\n    padding: 0.1em;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n    font-size: 110%;\n    line-height: 1.2;\n    color: #ddd; }\n.rating:not(:checked) > span:before {\n      content: '★'; }\n.rating:not(:checked) > span:hover {\n    color: #ffc107; }\n.rating:not(:checked) > span:hover ~ span {\n      color: #ffc107; }\n.rating > input:checked ~ span {\n    color: #ffc107; }\n.rating > span:checked ~ span:hover {\n    color: #ffc107; }\n.rating > span:checked ~ span:hover ~ span {\n      color: #ffc107; }\n.rating > span:hover ~ input:checked ~ span {\n    color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL3JhdGluZy9DOlxcVXNlcnNcXG9jb29uZXlcXERvY3VtZW50c1xcR2l0SHViXFxmcmVzaHRyYWNlLWFwcDEvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxyYXRpbmdcXHJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7Ozs7Ozs7Ozs7O0NEY0M7QUNFRDtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFGbkI7SUFNVSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQixFQUFBO0FBUmhDO0lBV1UsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7QUFuQnJCO01BcUJZLFlBQVMsRUFBSTtBQXJCekI7SUEwQlEsY0FBYyxFQUFBO0FBMUJ0QjtNQTRCVSxjQUFjLEVBQUE7QUE1QnhCO0lBaUNNLGNBQWMsRUFBQTtBQWpDcEI7SUFxQ1EsY0FBYyxFQUFBO0FBckN0QjtNQXVDVSxjQUFjLEVBQUE7QUF2Q3hCO0lBMkNRLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4ucmF0aW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogODRweDsgfVxuICAucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMDAwMHB4O1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7IH1cbiAgLnJhdGluZzpub3QoOmNoZWNrZWQpID4gc3BhbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxZW07XG4gICAgcGFkZGluZzogMC4xZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBjb2xvcjogI2RkZDsgfVxuICAgIC5yYXRpbmc6bm90KDpjaGVja2VkKSA+IHNwYW46YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfimIUnOyB9XG4gIC5yYXRpbmc6bm90KDpjaGVja2VkKSA+IHNwYW46aG92ZXIge1xuICAgIGNvbG9yOiAjZmZjMTA3OyB9XG4gICAgLnJhdGluZzpub3QoOmNoZWNrZWQpID4gc3Bhbjpob3ZlciB+IHNwYW4ge1xuICAgICAgY29sb3I6ICNmZmMxMDc7IH1cbiAgLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcbiAgICBjb2xvcjogI2ZmYzEwNzsgfVxuICAucmF0aW5nID4gc3BhbjpjaGVja2VkIH4gc3Bhbjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmMxMDc7IH1cbiAgICAucmF0aW5nID4gc3BhbjpjaGVja2VkIH4gc3Bhbjpob3ZlciB+IHNwYW4ge1xuICAgICAgY29sb3I6ICNmZmMxMDc7IH1cbiAgLnJhdGluZyA+IHNwYW46aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XG4gICAgY29sb3I6ICNmZmMxMDc7IH1cbiIsIlxuLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cblxuLnJhdGluZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLXdpZHRoOiA4NHB4O1xuICAgICY6bm90KDpjaGVja2VkKSB7XG4gICAgICA+IHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC0xMDAwMDBweDtcbiAgICAgICAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMWVtO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMTAlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ+KYhSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IHNwYW46aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmYzEwNztcbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmYzEwNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICA+IGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgIH1cbiAgICA+IHtcbiAgICAgIHNwYW46Y2hlY2tlZCB+IHNwYW46aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmYzEwNztcbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmYzEwNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3Bhbjpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmMxMDc7XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/components/rating/rating.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui/components/rating/rating.component.ts ***!
  \**********************************************************/
/*! exports provided: RatingService, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingService", function() { return RatingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var RatingService = /** @class */ (function () {
    function RatingService() {
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RatingService);
    return RatingService;
}());

var RatingComponent = /** @class */ (function () {
    function RatingComponent(ratingService) {
        this.ratingService = ratingService;
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.inputName = this.itemId + '_rating';
    };
    RatingComponent.prototype.onClick = function (rating) {
        if (this.iseditable) {
            this.rating = rating;
            this.ratingService.ratingClick.emit({
                itemId: this.itemId,
                rating: rating
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "itemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "iseditable", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/ui/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/ui/components/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [RatingService])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/ui/dashboard/dashboard.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/dashboard/dashboard.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"container extra-margin-top\">\n    <div class=\"row mb-2\">\n        <div class=\"col\">\n            <h3 class=\"font-weight-light\">Your purchases dashboard</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-8 \">\n            <div class=\"border shadow-sm rounded p-4\">\n                <h5>My Purchases</h5>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"pl-0 border-top-0\">#</th>\n                                <th class=\"font-weight-normal text-nowrap border-top-0\">Supplier</th>\n                                <!-- <th class=\"font-weight-normal border-top-0\">No. of projects</th> -->\n                                <th class=\"font-weight-normal text-nowrap border-top-0\">Purchased on</th>\n                                <th class=\"font-weight-normal text-nowrap border-top-0 text-right\">My purchases</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let userDonation of userDonationslist; let i = index\">\n                                <td class=\"pl-0\">{{i+1}}</td>\n                                <td><a routerLink=\"/details/{{userDonation.ngo_id}}\">{{userDonation.ngo_name}}</a></td>\n                                <!-- <td>20</td> -->\n                                <td>{{userDonation.date | date: 'MM/dd/yyyy'}}</td>\n                                <td class=\"text-right\">{{userDonation.amount | currency:'USD':'symbol':'1.2-2'}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"d-flex flex-row justify-content-between align-items-center card p-3 rounded-0 mb-3\">\n                <div class=\"icon-circle m-0 bg-primary\"><i class=\"fa fa-dollar\"></i></div>\n                <div class=\"flex-fill ml-2 mr-2\">\n                    <p class=\"m-0 p-0 text-muted\">Your total purchases:</p>\n                    <h3 class=\"m-0 p-0\"> {{total_donation | currency:'USD':'symbol':'1.2-2'}}</h3>\n                </div>\n                <div><a class=\"btn btn-warning\" role=\"button\" routerLink=\"/ngolist\">Buy</a></div>\n            </div>\n            <div class=\"d-flex flex-row justify-content-between align-items-center card p-3 rounded-0 mb-3\">\n                <div class=\"icon-circle m-0 bg-light-green bg-jungle\"><i class=\"fa fa-calendar\"></i></div>\n                <div class=\"flex-fill ml-2 mr-2\">\n                    <p class=\"m-0 p-0 text-muted\">This month:</p>\n                    <h3 class=\"m-0 p-0\">{{month_donation | currency:'USD':'symbol':'1.2-2'}}<small class=\"ml-2 font-size-1rem text-muted\"></small></h3>\n                </div>\n            </div>\n            <div class=\"card rounded-0\">\n                <div class=\"bg-light p-3 border-bottom\">\n                    <h5 class=\"text-muted font-weight-normal m-0\">Links</h5>\n                </div>\n                <div class=\"p-3\">\n                    <ul class=\"list-unstyled m-0\">\n                        <li class=\"d-flex align-items-center mt-2 mb-2\">\n                            <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\n                            <a routerLink=\"/ngolist\">View all of my organizations</a>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/dashboard/dashboard.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/dashboard/dashboard.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/dashboard/dashboard.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/dashboard/dashboard.component.ts ***!
  \*****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userDonationsService, formBuilder, router) {
        this.userDonationsService = userDonationsService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userDonationslist = [];
        this.donateForm = null;
        this.submitted = false;
        this.total_donation = 0.00;
        this.month_donation = 0.00;
    }
    DashboardComponent.prototype.update = function (event) { src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__["UtilsService"].onHeightChange('.table-responsive'); };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userDonationsService.getUserDonations().subscribe(function (data) {
            _this.userDonationslist = data;
            for (var i in data) {
                if (data[i]) {
                    _this.total_donation = _this.total_donation + data[i].amount;
                    if (data[i].date.getMonth === new Date().getMonth) {
                        _this.month_donation = _this.month_donation + data[i].amount;
                    }
                }
            }
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__["UtilsService"].onHeightChange('.table-responsive', 50);
        }, function (err) {
            console.error(err);
        });
        this.donateForm = this.formBuilder.group({
            donate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "update", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/ui/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/ui/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DashboardService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/ui/donate/donate.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/donate/donate.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"container extra-margin-top\">\n    <div class=\"row mb-2\">\n        <div class=\"col-9\">\n            <div class=\"d-flex mb-5\">\n                <div class=\"mr-2\"><i class=\"fa fa-check-circle text-success font-size-2rem\"></i></div>\n                <div>\n                    <h2>Thank you for your purchase!</h2>\n                    <p class=\"font-size-1rem\">If you wish to continue purchasing more, click the 'Buy' button below.</p>\n                    <form>\n                        <div class=\"form-group\"><a class=\"btn btn-warning font-size-1rem\" role=\"button\" routerLink=\"/ngolist\">Purchase</a><span\n                                class=\"ml-3\">or</span><a class=\"btn btn-link font-size-1rem\" role=\"button\" routerLink=\"/dashboard\">Return\n                                to home</a></div>\n                    </form>\n\n                    <!--\n                    <div>\n                        <p class=\"font-size-1rem mb-2 mt-4\">NGO's who are now connected with your account</p>\n                        <div class=\"d-flex flex-column\">\n                            <ul class=\"d-inline-flex flex-wrap list-unstyled mb-1\">\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\n                                        style=\"height: 40px; width: auto;\"></li>\n                            </ul>\n                            <div class=\"mr-2\"><a routerLink=\"#\">View All</a></div>\n                        </div>\n                    </div> -->\n                </div>\n            </div>\n            <!-- <div>\n                <h4 class=\"m-0 mb-1\">Blockchain activity</h4>\n                <div class=\"p-5 text-center card body login-bg\">\n                    <span class=\"text-muted p-5\">Component to be built dynamically.</span>\n                </div>\n            </div> -->\n        </div>\n        <div class=\"col\">\n            <h5 class=\"pb-2\">Links to explore</h5>\n            <ul class=\"list-unstyled\">\n                <li class=\"d-flex align-items-center mt-2 mb-2\">\n                    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\n                    <a routerLink=\"/ngolist\">View all non-profit organizations</a>\n                </li>\n                <!--\n                <li class=\"d-flex align-items-center mt-2 mb-2\">\n                    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\n                    <a routerLink=\"#\">View my profile</a>\n                </li>\n              -->\n            </ul>\n\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"gallery\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header pt-3 pb-3\">\n                <h4 class=\"modal-title\">Gallery</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">×</span></button>\n            </div>\n            <div class=\"modal-body gallery mb-3 pt-0\">\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n                <div><span>image&nbsp;</span></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header border-0 pt-2 pb-2\">\n                <h4 class=\"modal-title\">Customer list</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                    aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n            </div>\n            <div class=\"modal-body overflow-y-auto max-height-200 p-0\">\n                <div class=\"table-responsive table-sm table-striped table-borderless\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"font-weight-normal\">#</th>\n                                <th class=\"font-weight-normal\">Customer name</th>\n                                <th class=\"text-right font-weight-normal\">Amount</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"overflow-y-auto max-height-200\">\n                            <tr>\n                                <td>1</td>\n                                <td>John Doe</td>\n                                <td class=\"text-right\">$1000</td>\n                            </tr>\n                            <tr>\n                                <td>2</td>\n                                <td>Brian Adams</td>\n                                <td class=\"text-right\">$3500</td>\n                            </tr>\n                            <tr>\n                                <td>3</td>\n                                <td>Mickey Mayer</td>\n                                <td class=\"text-right\">$400</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>4</td>\n                                <td>Peter Joy</td>\n                                <td class=\"text-right\">$100</td>\n                            </tr>\n                            <tr>\n                                <td>5</td>\n                                <td>Nicky Jones</td>\n                                <td class=\"text-right\">$450</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/donate/donate.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/donate/donate.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZG9uYXRlL0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXGRvbmF0ZVxcZG9uYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9kb25hdGUvZG9uYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/donate/donate.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/donate/donate.component.ts ***!
  \***********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var DonateComponent = /** @class */ (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    DonateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donate',
            template: __webpack_require__(/*! ./donate.component.html */ "./src/app/ui/donate/donate.component.html"),
            styles: [__webpack_require__(/*! ./donate.component.scss */ "./src/app/ui/donate/donate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DonateComponent);
    return DonateComponent;
}());



/***/ }),

/***/ "./src/app/ui/ngo-details/ngo-details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/ngo-details/ngo-details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"container extra-margin-top\">\n  <div class=\"row mb-2\">\n    <div class=\"col\">\n      <h5 class=\"font-weight-light\">NGO Details</h5>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card p-4 shadow-sm\">\n        <div class=\"d-flex flex-row justify-content-between mb-4\">\n          <div class=\"d-flex\">\n            <div class=\"d-flex flex-column align-items-center mr-4\">\n              <img [src]='selectedNGO.ngo_icon_url' class=\"img-fluid wdth-250\">\n              <div class=\"text-center mt-2\">\n                <app-star-rating [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.id+selectedNGO.ngo_rating'></app-star-rating>\n              </div>\n            </div>\n            <div>\n              <h4 class=\"m-0\">{{selectedNGO.ngo_name}}</h4>\n              <p class=\"m-0\">Regn. No. {{selectedNGO.ngo_reg_no}}<br>{{selectedNGO.ngo_address}}<br>{{selectedNGO.ngo_phone}}<br>{{selectedNGO.ngo_email}}</p>\n            </div>\n          </div>\n          <div class=\"d-flex flex-column align-items-end\">\n            <div>\n              <ul class=\"d-inline-flex list-unstyled border rounded\">\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3\">\n                  <span>Total Donations</span>\n                  <span><strong> {{selectedNGO.ngo_donations | currency:'USD':'symbol':'1.2-2'}}</strong></span>\n                </li>\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3 border-left border-right bg-gray-200\">\n                  <span>Utilized fund</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#funds-utilized\">{{selectedNGO.ngo_fund_utilized\n                      | currency:'USD':'symbol':'1.2-2'}}</a></span>\n                </li>\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3 bg-light\">\n                  <span>My donations</span><span> {{selectedNGO.ngo_user_donations | currency:'USD':'symbol':'1.2-2'}}</span>\n                </li>\n              </ul>\n            </div>\n            <div>\n              <ul class=\"d-inline-flex list-unstyled border rounded\">\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\n                  <span>Total Projects</span><span><strong>{{selectedNGO.ngo_projects}}</strong></span>\n                </li>\n                <li class=\"d-flex flex-column justify-content-center border-left align-items-center p-1 text-nowrap pl-2 pr-2\">\n                  <span>Total no. of donors</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#donors\">{{selectedNGO.ngo_Donors}}</a></span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"position-relative\">\n          <button class=\"btn btn-link gallery-link\" type=\"button\" data-toggle=\"modal\" data-target=\"#gallery\">\n            <i class=\"fa fa-photo mr-1 text-muted\"></i>Gallery\n          </button>\n\n          <div class=\"clear-both pt-3 pb-3\">\n            <h4 class=\"border-bottom\">About</h4>\n            <div class=\"about-content pr-4\">\n              <p class=\"pr-4\">{{selectedNGO.ngo_about}}</p>\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\n            </div>\n            <div class=\"mt-4\">\n              <form class=\"justify-content-start align-items-center\" [formGroup]=\"donateForm\">\n                <div class=\"form-group d-inline-flex m-0\">\n                  <input class=\"form-control font-size-1rem w-50\" type=\"number\" formControlName=\"donationAmount\"\n                    placeholder=\"$ 150.00\">\n                  <div *ngIf=\"submitted && donation.donationAmount.errors\" class=\"invalid-feedback\" [ngClass]=\"{ 'is-invalid': submitted && donation.donationAmount.errors}\">\n                    <div *ngIf=\"donation.donationAmount.errors.required\">Donation amount is required</div>\n                  </div>\n                  <a class=\"btn btn-warning ml-2 text-white\" (click)='makeDonation()' role=\"button\">\n                    <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'> </i>\n                    Donate</a>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-gallery></app-gallery>\n\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"funds-utilized\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header pb-2\">\n        <h4 class=\"modal-title\">Purchases</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" aria-hidden=\"true\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body p-0\">\n        <table class=\"table w-100 tbl-funds-utilized table-sm table-borderless table-striped\">\n          <thead class=\"bg-dark text-white\">\n            <tr>\n              <th class=\"font-weight-normal pl-4\">#</th>\n              <th class=\"font-weight-normal\">Item name</th>\n              <th class=\"text-right font-weight-normal pr-4\">Amount</th>\n            </tr>\n          </thead>\n          <tbody class=\"overflow-y-auto max-height-200\">\n            <tr *ngFor=\"let spendDetails of selectedNGO.ngo_spend_details; let i = index\">\n              <td class=\"pl-4\">{{i+1}}</td>\n              <td>{{spendDetails.spendDescription}}</td>\n              <td class=\"text-right pr-4\" data-dismiss=\"modal\" data-toggle=\"modal\" (click)='renderGraph(spendDetails.spendId,spendDetails.spendAmount)'\n                data-target=\"#contributionChart\"><a href='#'>{{spendDetails.spendAmount\n                  |\n                  currency:'USD':'symbol':'1.2-2'}}</a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade \" role=\"dialog\" tabindex=\"-1\" id=\"contributionChart\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header border-0 pt-2 pb-2\">\n        <h4 class=\"modal-title text-center\">Donor's contribution </h4>\n\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" data-toggle=\"modal\" data-target=\"#funds-utilized\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class='wrapper' style=\"text-align: center\">\n        <div #graphcontainer> </div>\n        <!-- <i *ngIf=\"show_graph\" class='fa fa-circle-o-notch fa-spin'>\n              </i> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header pb-2\">\n        <h4 class=\"modal-title\">Customer list</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">×</span></button>\n      </div>\n      <div class=\"modal-body overflow-y-auto max-height-200 p-0\">\n        <div class=\"table-responsive table-sm table-striped table-borderless\">\n          <table class=\"table\">\n            <thead class=\"bg-dark text-white\">\n              <tr>\n                <th class=\"font-weight-normal pl-4\">#</th>\n                <th class=\"font-weight-normal\">Customer name</th>\n                <th class=\"text-right font-weight-normal pr-4\">Amount</th>\n              </tr>\n            </thead>\n            <tbody class=\"overflow-y-auto max-height-200\">\n              <tr *ngFor=\"let donor of getNgoDonorsAmountKeys(); let i = index\">\n                <td class=\"pl-4\">{{i+1}}</td>\n                <td>{{donor}}</td>\n                <td class=\"text-right pr-4\">{{selectedNGO.ngo_donor_details.get(donor) |\n                  currency:'USD':'symbol':'1.2-2'}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/ngo-details/ngo-details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui/ngo-details/ngo-details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmdvLWRldGFpbHMvQzpcXFVzZXJzXFxvY29vbmV5XFxEb2N1bWVudHNcXEdpdEh1YlxcZnJlc2h0cmFjZS1hcHAxL3NyY1xcYXBwXFx1aVxcbmdvLWRldGFpbHNcXG5nby1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9uZ28tZGV0YWlscy9uZ28tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL25nby1kZXRhaWxzL25nby1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cbiIsIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ngo-details/ngo-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/ngo-details/ngo-details.component.ts ***!
  \*********************************************************/
/*! exports provided: NgoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgoDetailsComponent", function() { return NgoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var src_app_ui_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui/components/donorchart/donorchart.component */ "./src/app/ui/components/donorchart/donorchart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/







var NgoDetailsComponent = /** @class */ (function () {
    function NgoDetailsComponent(ngoService, formBuilder, router, route, donateService, dashboardService, 
    // private sessionService: SessionService,
    componentFactoryResolver) {
        this.ngoService = ngoService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.donateService = donateService;
        this.dashboardService = dashboardService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.ngoProjects = null;
        this.selectedNGO = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Ngo"]();
        this.donateForm = null;
        this.submitted = false;
        this.ngo_my_donation = 0.00;
        this.ngo_total_donation = 0.00;
        this.ngo_spend_amount = 0.00;
        this.ngo_total_donors_set = new Set();
        this.ngo_donors_amounts = new Map();
        this.userDonationslist = [];
        this.error = null;
        this.ngoRating = 4;
        this.ngo_donors_list = [];
        this.selected_ngo_spend_details = [];
        this.componentRef = null;
        this.loading = false;
        this.contribution_list = [];
        this.show_graph = false;
        if (this.ngo_id === null || this.ngo_id === undefined) {
            this.ngo_id = route.snapshot.params.id;
        }
    }
    Object.defineProperty(NgoDetailsComponent.prototype, "donation", {
        get: function () { return this.donateForm.controls; },
        enumerable: true,
        configurable: true
    });
    NgoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.donateForm = this.formBuilder.group({
            donationAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.ngoService.getNGO(this.ngo_id).subscribe(function (data) {
            _this.selectedNGO = data.length > 0 ? data[0] : new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Ngo"]();
            _this.getNGOSpendData(_this.selectedNGO);
            _this.getNGOFundsDetails(_this.selectedNGO);
            _this.setRatings(_this.selectedNGO);
        }, function (err) {
            console.error(err);
        });
    };
    NgoDetailsComponent.prototype.getNGOFundsDetails = function (ngo) {
        this.dashboardService.getDonationsByNGO(ngo.id).subscribe(function (ngo_data) {
            var ngo_total_donation = 0.00;
            var ngo_total_donors_set = new Set();
            var ngo_donors_amounts = new Map();
            for (var i in ngo_data) {
                if (ngo_data[i]) {
                    ngo_total_donation = ngo_total_donation + ngo_data[i].donationAmount;
                    if (!ngo_total_donors_set.has(ngo_data[i].donorUserName)) {
                        ngo_total_donors_set.add(ngo_data[i].donorUserName);
                    }
                    var donor_name = ngo_data[i].donorUserName;
                    if (!ngo_donors_amounts.has(donor_name)) {
                        ngo_donors_amounts.set(donor_name, ngo_data[i].donationAmount);
                    }
                    else {
                        ngo_donors_amounts.set(donor_name, ngo_data[i].donationAmount + ngo_donors_amounts.get(donor_name));
                    }
                }
            }
            var user_donation = ngo_donors_amounts.get(src_app_services_shared__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getUser().name);
            ngo.ngo_donations = ngo_total_donation;
            ngo.ngo_Donors = ngo_total_donors_set.size;
            ngo.ngo_donor_details = ngo_donors_amounts;
            ngo.ngo_user_donations = user_donation ? user_donation : 0;
            return ngo;
        });
    };
    NgoDetailsComponent.prototype.getNgoDonorsAmountKeys = function () {
        return Array.from(this.selectedNGO.ngo_donor_details.keys());
    };
    NgoDetailsComponent.prototype.getNGOSpendData = function (ngo) {
        this.ngoService.getNGOSpend(ngo.id).subscribe(function (ngospenddata) {
            var ngo_spend_amount = 0;
            var ngo_spend_data = [];
            for (var i in ngospenddata) {
                if (ngospenddata[i] && ngospenddata[i].docType === 'spend') {
                    ngo_spend_amount = ngo_spend_amount + ngospenddata[i].spendAmount;
                    ngo_spend_data.push(ngospenddata[i]);
                }
            }
            ngo.ngo_fund_utilized = ngo_spend_amount;
            ngo.ngo_spend_details = ngo_spend_data;
        }, function (err) {
            console.error(err);
        });
        return ngo;
    };
    NgoDetailsComponent.prototype.setRatings = function (ngo) {
        var _this = this;
        this.ngoService.getNGORating(ngo.id).subscribe(function (data) {
            var rating = 0;
            for (var i in data) {
                if (data[i]) {
                    rating = rating + data[i].rating;
                }
            }
            if (rating > 0) {
                rating = rating / data.length;
            }
            ngo.ngo_rating = Math.ceil(rating);
        });
        this.ngoService.getDonorNGORating(ngo.id, src_app_services_shared__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getUser().name).subscribe(function (data) {
            _this.userRating = new src_app_models__WEBPACK_IMPORTED_MODULE_2__["Rating"]();
            if (data[0]) {
                data = data[0];
            }
            _this.userRating = data;
        });
    };
    NgoDetailsComponent.prototype.makeDonation = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.submitted = true;
        if (this.donateForm.invalid) {
            return;
        }
        this.donateService.makeDonation(this.selectedNGO.ngo_reg_no, src_app_services_shared__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getUser().name, this.donateForm.value.donationAmount)
            .subscribe(function (data) {
            _this.router.navigate(["donate/" + data.donationId]);
        }, function (err) {
            _this.loading = false;
            _this.error = 'Something wrong with the donation. Will update you soon on this.';
        });
    };
    NgoDetailsComponent.prototype.getSpendData = function (spend_Id, totalamount) {
        var _this = this;
        this.dashboardService.getContributorsBySpend(spend_Id).subscribe(function (data) {
            if (data.length > 0) {
                var operations_1 = [];
                for (var i = 0; i < data.length; i++) {
                    var operation = {
                        spendAllocationId: data[i].spendAllocationId,
                        donation: src_app_services_shared__WEBPACK_IMPORTED_MODULE_5__["UtilsService"].formatFloat(data[i].spendAllocationAmount, 4),
                        name: 'Donor ' + i
                    };
                    operations_1.push(operation);
                }
                setTimeout(function () {
                    var factory = _this.componentFactoryResolver.resolveComponentFactory(src_app_ui_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_6__["DonorchartComponent"]);
                    _this.componentRef = _this.viewContainer.createComponent(factory);
                    _this.componentRef.instance.data = operations_1;
                    _this.componentRef.instance.total = totalamount;
                    _this.show_graph = true;
                }, 500);
            }
        }, function (err) {
            console.error(err);
        });
    };
    NgoDetailsComponent.prototype.renderGraph = function (spend_Id, totalamount) {
        if (this.componentRef !== null) {
            this.componentRef.destroy();
        }
        this.getSpendData(spend_Id, totalamount);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphcontainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], NgoDetailsComponent.prototype, "viewContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgoDetailsComponent.prototype, "ngo_id", void 0);
    NgoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngo-details',
            template: __webpack_require__(/*! ./ngo-details.component.html */ "./src/app/ui/ngo-details/ngo-details.component.html"),
            styles: [__webpack_require__(/*! ./ngo-details.component.scss */ "./src/app/ui/ngo-details/ngo-details.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_4__["NgoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["DonateService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], NgoDetailsComponent);
    return NgoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/ui/ngos-list/ngos-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/ngos-list/ngos-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"container h-9 extra-margin-top\">\n    <div class=\"row mb-2\">\n        <div class=\"col\">\n            <h5 class=\"font-weight-light\">Select an organization</h5>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4 h-95 display-inline-grid\">\n            <div class=\"shadow-sm donors-list container-dynamic-height\">\n                <div *ngFor=\"let ngo of ngolist; let i = index\" [class]=\"selectedNGO.id===ngo.id?'active':''\" (click)=\"onNGOSelect(ngo)\">\n                    <div class=\"mr-3\"><img src={{ngo.ngo_icon_url}} class=\"img-fluid\">\n                        <app-star-rating class=\"text-center\" class.disabled [rating]='ngo.ngo_rating' [itemId]='ngo.id+ngo.ngo_rating'></app-star-rating>\n                    </div>\n                    <div class=\"text-center mt-2\">\n                    </div>\n                    <div>\n                        <h5 class=\"m-0 font-weight-normal\">{{ngo.ngo_name}}</h5>\n                        <p class=\"m-0 mt-1\">Sales: {{ngo.ngo_donations | currency:'USD':'symbol':'1.2-2'}}\n                            USD</p>\n                        <p class=\"m-0 mt-1\">My purchases: {{ngo.ngo_user_donations | currency:'USD':'symbol':'1.2-2'}}\n                            USD</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-8\">\n            <div class=\"border p-3 shadow-sm rounded h-100 container-dynamic-height\">\n                <div class=\"d-flex flex-row justify-content-between mb-4 \">\n                    <div class=\"d-flex\">\n                        <div class=\"d-flex flex-column align-items-center mr-3\">\n                            <img src={{selectedNGO.ngo_icon_url}} class=\"img-fluid wdth-150\">\n                            <div class=\"text-center mt-2\">\n                                <app-star-rating class.disabled [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.ngo_rating+selectedNGO.id'\n                                    data-toggle=\"modal\" data-target=\"#rating\"></app-star-rating>\n                            </div>\n                        </div>\n                        <div>\n                            <h5 class=\"m-0\">{{selectedNGO.ngo_name}}</h5>\n                            <p class=\"m-0\">Regn. No. {{selectedNGO.ngo_reg_no}}<br>{{selectedNGO.ngo_address}}<br>{{selectedNGO.ngo_phone}}<br>{{selectedNGO.ngo_email}},</p>\n\n                        </div>\n                    </div>\n\n                    <div class=\"d-flex flex-column align-items-end\">\n                        <div>\n                            <ul class=\"d-inline-flex list-unstyled border rounded\">\n                                \n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2 border-left border-right bg-gray-200\">\n                                    <span>Total Purchases</span><span> <a href=\"#\" data-toggle=\"modal\" data-target=\"#funds-utilized\">\n                                            {{selectedNGO.ngo_fund_utilized | currency:'USD':'symbol':'1.2-2'}}</a></span>\n                                </li>\n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2 bg-light\">\n                                    <span>My purchases</span><span>{{selectedNGO.ngo_user_donations |\n                                        currency:'USD':'symbol':'1.2-2'}}</span>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <ul class=\"d-inline-flex list-unstyled border rounded\">\n                               <!--  <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\n                                    <span>Total Projects</span><span><strong>{{selectedNGO.ngo_projects}}</strong></span>\n                                </li> -->\n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\n                                    <span>Total Sales</span><span><strong>{{selectedNGO.ngo_donations |\n                                            currency:'USD':'symbol':'1.2-2'}}</strong></span>\n                                </li>\n                                <li class=\"d-flex flex-column justify-content-center border-left align-items-center p-1 text-nowrap pl-2 pr-2\">\n                                    <span>Customers</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#donors\">{{selectedNGO.ngo_Donors}}</a></span>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"position-relative\">\n                    <button class=\"btn btn-link gallery-link\" type=\"button\" data-toggle=\"modal\" data-target=\"#gallery\">\n                        <i class=\"fa fa-photo mr-1 text-muted\"></i>Gallery\n                    </button>\n\n                    <div class=\"clear-both pt-3 pb-3\">\n                        <h4 class=\"border-bottom\">About</h4>\n                        <div class=\"about-content pr-4\">\n                            <p class=\"about-content\">{{selectedNGO.ngo_about}}</p>\n                        </div>\n                        <div class=\"mt-5\">\n                            <form class=\"justify-content-start align-items-center\" [formGroup]=\"donateForm\">\n                                <div class=\"form-group d-inline-flex m-0\">\n                                    <input class=\"form-control font-size-1rem w-50\" type=\"number\" formControlName=\"donationAmount\"\n                                        placeholder=\"$ 150.00\">\n                                    <div *ngIf=\"submitted && donation.donationAmount.errors\" class=\"invalid-feedback\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && donation.donationAmount.errors}\">\n                                        <div *ngIf=\"donation.donationAmount.errors.required\">Donatoion amount is\n                                            required</div>\n                                    </div>\n                                    <a class=\"btn btn-warning ml-2 text-white\" (click)='onDonate()' role=\"button\">\n                                        Donate<i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin ml-2 '> </i>\n                                    </a>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-gallery [itemId]='selectedNGO.ngo_reg_no'></app-gallery>\n\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"funds-utilized\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header pb-2\">\n                <h4 class=\"modal-title\">Purchases</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" aria-hidden=\"true\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body p-0\">\n                <table class=\"table w-100 tbl-funds-utilized table-sm table-borderless table-striped\">\n                    <thead class=\"bg-dark text-white\">\n                        <tr>\n                            <th class=\"font-weight-normal pl-4\">#</th>\n                            <th class=\"font-weight-normal\">Item name</th>\n                            <th class=\"text-right font-weight-normal pr-4\">Amount</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"overflow-y-auto max-height-200\">\n                        <tr *ngFor=\"let spendDetails of selectedNGO.ngo_spend_details; let i = index\">\n                            <td class=\"pl-4\">{{i+1}}</td>\n                            <td>{{spendDetails.spendDescription}}</td>\n                            <td class=\"text-right pr-4\" data-dismiss=\"modal\" data-toggle=\"modal\" (click)='renderGraph(spendDetails.spendId,spendDetails.spendAmount)'\n                                data-target=\"#contributionChart\"><a href='#'>{{spendDetails.spendAmount\n                                    |\n                                    currency:'USD':'symbol':'1.2-2'}}</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"modal fade \" role=\"dialog\" tabindex=\"-1\" id=\"contributionChart\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header border-0 pt-2 pb-2\">\n                <h4 class=\"modal-title text-center\">Donor's contribution </h4>\n\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" data-toggle=\"modal\"\n                    data-target=\"#funds-utilized\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class='wrapper' style=\"text-align: center\">\n                <div #graphcontainer> </div>\n                <!-- <i *ngIf=\"show_graph\" class='fa fa-circle-o-notch fa-spin'>\n                </i> -->\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header border-0 pb-0\">\n                <h4 class=\"modal-title\">Customer list</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body overflow-y-auto max-height-200 p-0 mb-4 pt-2\">\n                <div class=\"table-responsive table-sm table-borderless table-striped\">\n                    <table class=\"table m-0\">\n                        <thead class=\"bg-dark text-white\">\n                            <tr>\n                                <th class=\"font-weight-normal pl-4\">#</th>\n                                <th class=\"font-weight-normal\">Customer name</th>\n                                <th class=\"text-right font-weight-normal  pr-4\">Amount</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"overflow-y-auto max-height-200\">\n                            <tr *ngFor=\"let ngo of getNgoDonorsAmountKeys(); let i = index\">\n                                <td class=\"pl-4\">{{i+1}}</td>\n                                <td>{{ngo}}</td>\n                                <td class=\"text-right pr-4\">{{selectedNGO.ngo_donor_details.get(ngo) |\n                                    currency:'USD':'symbol':'1.2-2'}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf='selectedNGO.ngo_user_rating===0' class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"rating\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header pt-3 pb-3\">\n                <h4 class=\"modal-title\">Rating for <strong>{{selectedNGO.ngo_name}}</strong></h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row h-100\">\n                    <div class=\"col- col-sm-6 text-center my-auto\">\n                        <p>My rating</p>\n                        <app-star-rating class=\"pop-rating\" [iseditable]='selectedNGO.ngo_user_rating===0' [rating]='selectedNGO.ngo_user_rating'\n                            [itemId]='userRating.transactionId' data-dismiss=\"modal\"></app-star-rating>\n                    </div>\n                    <div class=\"col- col-sm-6 text-center my-auto\">\n                        <div class=\"rounded-circle border align-middle d-block mx-auto pop-overall-rating\">\n                            <p class=\"mt-5\">Overall rating</p>\n                            <app-star-rating class=\"pop-rating\" [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.id'></app-star-rating>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/ngos-list/ngos-list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/ngos-list/ngos-list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n.wrapper {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmdvcy1saXN0L0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXG5nb3MtbGlzdFxcbmdvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9uZ29zLWxpc3Qvbmdvcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDO0FEQ0Q7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL25nb3MtbGlzdC9uZ29zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuLndyYXBwZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiA5MDBweDtcbn1cbiIsIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/ngos-list/ngos-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/ngos-list/ngos-list.component.ts ***!
  \*****************************************************/
/*! exports provided: NgosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgosListComponent", function() { return NgosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/rating/rating.component */ "./src/app/ui/components/rating/rating.component.ts");
/* harmony import */ var _components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/donorchart/donorchart.component */ "./src/app/ui/components/donorchart/donorchart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/








var NgosListComponent = /** @class */ (function () {
    function NgosListComponent(ngoService, formBuilder, router, donateService, ratingService, dashboardService, componentFactoryResolver) {
        var _this = this;
        this.ngoService = ngoService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.donateService = donateService;
        this.ratingService = ratingService;
        this.dashboardService = dashboardService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.ngolist = [];
        this.ngoProjects = null;
        this.selectedNGO = new src_app_models__WEBPACK_IMPORTED_MODULE_1__["Ngo"]();
        this.donateForm = null;
        this.submitted = false;
        this.error = null;
        this.ngoRating = 0;
        this.userRating = new src_app_models__WEBPACK_IMPORTED_MODULE_1__["Rating"]();
        this.contribution_list = [];
        this.show_graph = false;
        this.componentRef = null;
        this.loading = false;
        this.ngoMap = new Map();
        this.ratingService.ratingClick.subscribe(function (data) {
            var currentDonor = src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getUser().name;
            _this.selectedNGO.ngo_user_rating = data.rating;
            _this.ngoService.createDonorNGORating(data.rating, currentDonor, _this.selectedNGO.ngo_reg_no).subscribe(function (resp) { });
        });
    }
    NgosListComponent.prototype.update = function (event) { src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].onHeightChange('.container-dynamic-height'); };
    NgosListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngoService.getNGOs().subscribe(function (data) {
            _this.ngolist = data;
            _this.ngolist.forEach(function (element) {
                _this.setRatings(element);
                _this.getNGOFundsDetails(element);
                _this.getNGOSpendData(element);
                _this.ngoMap.set(element.id, element);
            });
            //remove test data
            _this.ngolist.splice(0, 5);
            _this.selectedNGO = _this.ngolist.length > 0 ? _this.ngoMap.get(_this.ngolist[0].id) : new src_app_models__WEBPACK_IMPORTED_MODULE_1__["Ngo"]();
            setTimeout(function () {
                var ngo_data = src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].mapToJson(_this.ngoMap);
                src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].setValue('ngos', ngo_data);
            }, 1000);
            // set height dynimically
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].onHeightChange('.container-dynamic-height', 20);
        }, function (err) {
            console.error(err);
        });
        this.donateForm = this.formBuilder.group({
            donationAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    NgosListComponent.prototype.getNGOFundsDetails = function (ngo) {
        this.dashboardService.getDonationsByNGO(ngo.id).subscribe(function (ngo_data) {
            var ngo_total_donation = 0.00;
            var ngo_total_donors_set = new Set();
            var ngo_donors_amounts = new Map();
            for (var i in ngo_data) {
                if (ngo_data[i]) {
                    ngo_total_donation = ngo_total_donation + ngo_data[i].donationAmount;
                    if (!ngo_total_donors_set.has(ngo_data[i].donorUserName)) {
                        ngo_total_donors_set.add(ngo_data[i].donorUserName);
                    }
                    var donor_name = ngo_data[i].donorUserName;
                    if (!ngo_donors_amounts.has(donor_name)) {
                        ngo_donors_amounts.set(donor_name, ngo_data[i].donationAmount);
                    }
                    else {
                        ngo_donors_amounts.set(donor_name, ngo_data[i].donationAmount + ngo_donors_amounts.get(donor_name));
                    }
                }
            }
            var user_donation = ngo_donors_amounts.get(src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getUser().name);
            ngo.ngo_donations = ngo_total_donation;
            ngo.ngo_Donors = ngo_total_donors_set.size;
            ngo.ngo_donor_details = ngo_donors_amounts;
            ngo.ngo_user_donations = user_donation ? user_donation : 0;
            return ngo;
        });
    };
    NgosListComponent.prototype.getNgoDonorsAmountKeys = function () {
        return Array.from(this.selectedNGO.ngo_donor_details.keys());
    };
    NgosListComponent.prototype.getNGOSpendData = function (ngo) {
        this.ngoService.getNGOSpend(ngo.id).subscribe(function (ngospenddata) {
            var ngo_spend_amount = 0;
            var ngo_spend_data = [];
            for (var i in ngospenddata) {
                if (ngospenddata[i] && ngospenddata[i].docType === 'spend') {
                    ngo_spend_amount = ngo_spend_amount + ngospenddata[i].spendAmount;
                    ngo_spend_data.push(ngospenddata[i]);
                }
            }
            ngo.ngo_fund_utilized = ngo_spend_amount;
            ngo.ngo_spend_details = ngo_spend_data;
        }, function (err) {
            console.error(err);
        });
        return ngo;
    };
    NgosListComponent.prototype.setRatings = function (ngo) {
        this.ngoService.getNGORating(ngo.id).subscribe(function (data) {
            var rating = 0;
            for (var i in data) {
                if (data[i]) {
                    rating = rating + data[i].rating;
                    if (src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getUser().name === data[i].donorUserName) {
                        ngo.ngo_user_rating = data[i].rating;
                    }
                }
            }
            if (rating > 0) {
                rating = rating / data.length;
            }
            ngo.ngo_rating = Math.ceil(rating);
        });
    };
    NgosListComponent.prototype.onNGOSelect = function (ngo) {
        this.selectedNGO = ngo;
        this.setRatings(ngo);
        this.getNGOFundsDetails(ngo);
        this.getNGOSpendData(ngo);
        return;
    };
    Object.defineProperty(NgosListComponent.prototype, "donation", {
        get: function () { return this.donateForm.controls; },
        enumerable: true,
        configurable: true
    });
    NgosListComponent.prototype.onDonate = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.submitted = true;
        if (this.donateForm.invalid) {
            return;
        }
        this.donateService.makeDonation(this.selectedNGO.ngo_reg_no, src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getUser().name, this.donateForm.value.donationAmount)
            .subscribe(function (data) {
            _this.router.navigate(["donate/" + data.donationId]);
        }, function (err) {
            _this.loading = false;
            console.error(err);
            _this.error = 'Something wrong with the donation. Will update you soon on this.';
        });
    };
    NgosListComponent.prototype.getSpendData = function (spend_Id, totalamount) {
        var _this = this;
        this.dashboardService.getContributorsBySpend(spend_Id).subscribe(function (data) {
            if (data.length > 0) {
                var operations_1 = [];
                for (var i = 0; i < data.length; i++) {
                    var operation = {
                        spendAllocationId: data[i].spendAllocationId,
                        donation: src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].formatFloat(data[i].spendAllocationAmount, 4),
                        name: 'Donor ' + i
                    };
                    operations_1.push(operation);
                }
                setTimeout(function () {
                    var factory = _this.componentFactoryResolver.resolveComponentFactory(_components_donorchart_donorchart_component__WEBPACK_IMPORTED_MODULE_7__["DonorchartComponent"]);
                    _this.componentRef = _this.viewContainer.createComponent(factory);
                    _this.componentRef.instance.data = operations_1;
                    _this.componentRef.instance.total = totalamount;
                    _this.show_graph = true;
                }, 500);
            }
        }, function (err) {
            console.error(err);
        });
    };
    NgosListComponent.prototype.renderGraph = function (spend_Id, totalamount) {
        if (this.componentRef !== null) {
            this.componentRef.destroy();
        }
        this.getSpendData(spend_Id, totalamount);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('graphcontainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], NgosListComponent.prototype, "viewContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgosListComponent.prototype, "update", null);
    NgosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngos-list',
            template: __webpack_require__(/*! ./ngos-list.component.html */ "./src/app/ui/ngos-list/ngos-list.component.html"),
            styles: [__webpack_require__(/*! ./ngos-list.component.scss */ "./src/app/ui/ngos-list/ngos-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_5__["NgoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_5__["DonateService"],
            _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], NgosListComponent);
    return NgosListComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/blockchain/blockchain.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/blockchain/blockchain.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<app-blockchain-progress *ngIf=\"currentUser\" [blockElements]=\"blockchain\"></app-blockchain-progress>\n"

/***/ }),

/***/ "./src/app/ui/shared/blockchain/blockchain.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/blockchain/blockchain.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2Jsb2NrY2hhaW4vQzpcXFVzZXJzXFxvY29vbmV5XFxEb2N1bWVudHNcXEdpdEh1YlxcZnJlc2h0cmFjZS1hcHAxL3NyY1xcYXBwXFx1aVxcc2hhcmVkXFxibG9ja2NoYWluXFxibG9ja2NoYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaGFyZWQvYmxvY2tjaGFpbi9ibG9ja2NoYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvc2hhcmVkL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/shared/blockchain/blockchain.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/shared/blockchain/blockchain.component.ts ***!
  \**************************************************************/
/*! exports provided: BlockchainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainComponent", function() { return BlockchainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_shared_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/socket.service */ "./src/app/services/shared/socket.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/





var BlockchainComponent = /** @class */ (function () {
    function BlockchainComponent(socketService, donorService) {
        this.socketService = socketService;
        this.donorService = donorService;
        this.error = null;
        this.connection = null;
        this.messageProducer = null;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentUser = null;
        this.content = 'Test Data';
        this.blockchain = [{
                caption: '0',
                date: new Date(),
                selected: true,
                title: 'Login',
                txCount: 0,
                txInBlock: []
            },
        ];
    }
    BlockchainComponent.prototype.setBlockChain = function (newdata) {
        this.blockchain = newdata;
    };
    BlockchainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = this.socketService.connect(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socket_url);
        this.messages.subscribe(function (message) {
            _this.processMessage(message);
        });
        setInterval(function () {
            try {
                _this.messages.next('ping');
            }
            catch (e) {
                console.error(e);
            }
        }, 1000);
        this.donorService.currentDonor.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    BlockchainComponent.prototype.processError = function (error) {
        console.error(error);
    };
    BlockchainComponent.prototype.processMessage = function (message) {
        var jsonobj = null;
        try {
            var resp_data = JSON.parse(message.data);
            var message_obj = {
                caption: resp_data.blockNumber,
                date: new Date(1 / 1 / 2019),
                selected: true,
                title: resp_data.txCount,
                txCount: resp_data.txCount,
                txInBlock: resp_data.txInBlock
            };
            jsonobj = message_obj;
        }
        catch (e) {
            console.error('Invalid JSON: ', message.data);
            return;
        }
        if (jsonobj) {
            this.updateData(jsonobj);
        }
        else {
            console.error('Hmm..., I\'ve never seen JSON like this:', jsonobj);
        }
    };
    BlockchainComponent.prototype.updateData = function (block) {
        var data = this.blockchain;
        var len = data.length;
        if (data && data[len - 1].caption !== block.caption) {
            if (len > 0 && data[len - 1]) {
                (data[len - 1]).selected = null;
            }
            data.push(block);
            this.setBlockChain(data);
            this.socketService.newMessage.emit({
                data: this.blockchain
            });
        }
    };
    BlockchainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockchain',
            template: __webpack_require__(/*! ./blockchain.component.html */ "./src/app/ui/shared/blockchain/blockchain.component.html"),
            styles: [__webpack_require__(/*! ./blockchain.component.scss */ "./src/app/ui/shared/blockchain/blockchain.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_shared_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_4__["DonorService"]])
    ], BlockchainComponent);
    return BlockchainComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/breadcrumb/breadcrumb.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/breadcrumb/breadcrumb.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"container mt-6\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb m-0\">\n      <div *ngFor=\"let item of breadcrumbs; let i = index\">\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"item.url\">{{item.label}}</a><span *ngIf=\"i !== breadcrumbs.length-1\">\n            /&nbsp; </span></li>\n      </div>\n    </ol>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/shared/breadcrumb/breadcrumb.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/breadcrumb/breadcrumb.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2JyZWFkY3J1bWIvQzpcXFVzZXJzXFxvY29vbmV5XFxEb2N1bWVudHNcXEdpdEh1YlxcZnJlc2h0cmFjZS1hcHAxL3NyY1xcYXBwXFx1aVxcc2hhcmVkXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaGFyZWQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/shared/breadcrumb/breadcrumb.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/shared/breadcrumb/breadcrumb.component.ts ***!
  \**************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.breadcrumbs = [{ label: 'Dashboard', url: '/dashboard' }];
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.buildBreadCrumb(e.url);
            }
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent.prototype.buildBreadCrumb = function (url) {
        var label = url.split('/')[1];
        var nextUrl = url;
        var breadcrumb = {
            label: label,
            url: nextUrl
        };
        var previousState = [];
        previousState = previousState.concat(this.breadcrumbs);
        var newState = [];
        for (var _i = 0, previousState_1 = previousState; _i < previousState_1.length; _i++) {
            var item = previousState_1[_i];
            if (item && nextUrl === item.url) {
                break;
            }
            newState = newState.concat([item]);
        }
        newState = newState.concat([breadcrumb]);
        this.breadcrumbs = newState;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/ui/shared/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/ui/shared/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<footer class=\"page-footer font-small blue pt-4\">\n  <div class=\"footer-copyright text-center py-3\"> © {{currentYear}} Copyright: Amazon Web Services, Inc. or its affiliates. All rights reserved.\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/ui/shared/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2Zvb3Rlci9DOlxcVXNlcnNcXG9jb29uZXlcXERvY3VtZW50c1xcR2l0SHViXFxmcmVzaHRyYWNlLWFwcDEvc3JjXFxhcHBcXHVpXFxzaGFyZWRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cbiIsIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/shared/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/shared/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"fixed-top\">\n    <nav class=\"navbar navbar-custom navbar-dark navbar-expand-md bg-info navigation-clean-button p-1\">\n        <div class=\"container-fluid\">\n          <span class=\"text-white my-donations\">Freshtrace</span>\n          <!-- <img src=\"../../../../assets/images/aws-logo.png\" title=\"AWS\" style=\"height:35px\"> -->\n          <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div *ngIf=\"currentUser\" class=\"collapse navbar-collapse\" id=\"navcol-1\">\n            <ul class=\"nav navbar-nav ml-auto\">\n              <li class=\"nav-item\" role=\"presentation\">\n                <a class=\"nav-link active\">{{greetingMsg}} {{currentUser.name}} !</a>\n              </li>\n            </ul>\n            <a routerLink='/dashboard'>\n              <span class=\"text-white my-donations\"><small>My Purchases</small>\n              </span>\n            </a>\n            <a routerLink='/dashboard'>\n              <span class=\"text-white my-donations\"><small>My Sales (Coming Soon)</small>\n              </span>\n            </a>\n            <a routerLink='/ngolist'>\n              <span class=\"text-white my-donations\"><small>My Organizations</small>\n              </span>\n            </a>\n            <span class=\"navbar-text actions\" (click)='doAction()'>\n              <a class=\"text-primary\">{{actionButton}}</a>\n            </span>\n          </div>\n        </div>\n\n      </nav>\n      <app-blockchain></app-blockchain>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/shared/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n/* change the background color */\n.navbar-custom {\n  background-color: #212529 !important; }\n.toggle-button {\n  margin: 10px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXG9jb29uZXlcXERvY3VtZW50c1xcR2l0SHViXFxmcmVzaHRyYWNlLWFwcDEvc3JjXFxhcHBcXHVpXFxzaGFyZWRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQztBRENELGdDQUFBO0FBQ0E7RUFDSSxvQ0FBb0MsRUFBQTtBQUV4QztFQUNJLFlBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4vKiBjaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cbi5uYXZiYXItY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG59XG4udG9nZ2xlLWJ1dHRvbntcbiAgICBtYXJnaW46MTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXG4ubmF2YmFyLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDsgfVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/shared/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/shared/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(donorService, userDonationsService) {
        this.donorService = donorService;
        this.userDonationsService = userDonationsService;
        this.isVisible = false;
        this.currentUser = null;
        this.greetingMsg = 'Hello';
        this.donationAmount = 0.00;
        this.actionButton = 'Logout';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.donorService.currentDonor.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    HeaderComponent.prototype.doAction = function () {
        if (this.actionButton === 'Logout') {
            this.donorService.signout();
            this.currentUser = null;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_shared__WEBPACK_IMPORTED_MODULE_1__["DonorService"], src_app_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/sidenav/sidenav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui/shared/sidenav/sidenav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"p-l-0 p-r-0 shadow-sm border-left border-top-0 border-right-0 border-bottom-0 h-100 in\" id=\"sidebar\">\n  <div class=\"list-group panel\">\n    <app-blockchain></app-blockchain>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/shared/sidenav/sidenav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui/shared/sidenav/sidenav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n#sidebar {\n  border: 1px solid; }\n#sidebar .list-group-item {\n    border-radius: 0;\n    background-color: #333;\n    color: #ccc;\n    border-left: 0;\n    border-right: 0;\n    border-color: #2c2c2c;\n    white-space: nowrap; }\n#sidebar .list-group-item:not(.collapsed) {\n      background-color: #222; }\n#sidebar .list-group .list-group-item[aria-expanded=\"false\"]::after {\n    content: \" \\f0d7\";\n    font-family: FontAwesome;\n    display: inline;\n    text-align: right;\n    padding-left: 5px; }\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"] {\n    background-color: #222; }\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"]::after {\n      content: \" \\f0da\";\n      font-family: FontAwesome;\n      display: inline;\n      text-align: right;\n      padding-left: 5px; }\n#sidebar .list-group .collapse .list-group-item {\n    padding-left: 20px; }\n#sidebar .list-group .collapse > .collapse .list-group-item {\n    padding-left: 30px; }\n#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {\n    padding-left: 40px; }\n#sidebar.collapse {\n    transition-timing-function: ease;\n    transition-duration: .2s; }\n#sidebar.collapsing {\n    opacity: 0.8;\n    width: 0;\n    transition-timing-function: ease-in;\n    transition-property: width; }\n@media (max-width: 48em) {\n  #sidebar .list-group .collapse.in, #sidebar .list-group .collapsing {\n    position: absolute;\n    z-index: 1;\n    width: 190px; }\n  #sidebar .list-group > .list-group-item {\n    text-align: center;\n    padding: .75rem .5rem; }\n    #sidebar .list-group > .list-group-item[aria-expanded=\"true\"]::after, #sidebar .list-group > .list-group-item[aria-expanded=\"false\"]::after {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL3NpZGVuYXYvQzpcXFVzZXJzXFxvY29vbmV5XFxEb2N1bWVudHNcXEdpdEh1YlxcZnJlc2h0cmFjZS1hcHAxL3NyY1xcYXBwXFx1aVxcc2hhcmVkXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaGFyZWQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7OztDQ2FDO0FER0Q7RUFDSSxpQkFBaUIsRUFBQTtBQURyQjtJQUdNLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBO0FBVHpCO01BV1Esc0JBQXNCLEVBQUE7QUFYOUI7SUFpQlUsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0FBckIzQjtJQXdCVSxzQkFBc0IsRUFBQTtBQXhCaEM7TUEwQlksaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBO0FBOUI3QjtJQW9DVSxrQkFBa0IsRUFBQTtBQXBDNUI7SUF3Q1ksa0JBQWtCLEVBQUE7QUF4QzlCO0lBMkNZLGtCQUFrQixFQUFBO0FBM0M5QjtJQW1ETSxnQ0FBZ0M7SUFHaEMsd0JBQXdCLEVBQUE7QUF0RDlCO0lBeURNLFlBQVk7SUFDWixRQUFRO0lBR1IsbUNBQW1DO0lBR25DLDBCQUEwQixFQUFBO0FBSzlCO0VBQ0U7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUpoQjtJQU9JLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQTtJQVJ6QjtNQVVNLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdWkvc2hhcmVkL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuI1xuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4jXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuI1xuKi9cblxuI3NpZGViYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICY6bm90KC5jb2xsYXBzZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtZ3JvdXAge1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICZbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCIgXFxmMGQ3XCI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAmW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFxcZjBkYVwiO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb2xsYXBzZSB7XG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICA+IC5jb2xsYXBzZSB7XG4gICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgID4gLmNvbGxhcHNlIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmNvbGxhcHNlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgfVxuICAgICYuY29sbGFwc2luZyB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgfVxuICB9XG5cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICAgICNzaWRlYmFyIC5saXN0LWdyb3VwIHtcbiAgICAgIC5jb2xsYXBzZS5pbiwgLmNvbGxhcHNpbmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgIH1cbiAgICAgID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtIC41cmVtO1xuICAgICAgICAmW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOjphZnRlciwgJlthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl06OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuI3NpZGViYXIge1xuICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAjc2lkZWJhciAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1jb2xvcjogIzJjMmMyYztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgI3NpZGViYXIgLmxpc3QtZ3JvdXAtaXRlbTpub3QoLmNvbGxhcHNlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgfVxuICAjc2lkZWJhciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFxcZjBkN1wiO1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7IH1cbiAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgfVxuICAgICNzaWRlYmFyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW1bYXJpYS1leHBhbmRlZD1cInRydWVcIl06OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFxcZjBkYVwiO1xuICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuICAjc2lkZWJhciAubGlzdC1ncm91cCAuY29sbGFwc2UgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG4gICNzaWRlYmFyIC5saXN0LWdyb3VwIC5jb2xsYXBzZSA+IC5jb2xsYXBzZSAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7IH1cbiAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgLmNvbGxhcHNlID4gLmNvbGxhcHNlID4gLmNvbGxhcHNlIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDsgfVxuICAjc2lkZWJhci5jb2xsYXBzZSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzOyB9XG4gICNzaWRlYmFyLmNvbGxhcHNpbmcge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB3aWR0aDogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgLmNvbGxhcHNlLmluLCAjc2lkZWJhciAubGlzdC1ncm91cCAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDE5MHB4OyB9XG4gICNzaWRlYmFyIC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC43NXJlbSAuNXJlbTsgfVxuICAgICNzaWRlYmFyIC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTo6YWZ0ZXIsICNzaWRlYmFyIC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl06OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/shared/sidenav/sidenav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/sidenav/sidenav.component.ts ***!
  \********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/ui/shared/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/ui/shared/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/ui/signin/signin.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/signin/signin.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"h-100 login-bg\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100\">\n\n            <div class=\"col d-flex justify-content-center align-items-center pb-5\">\n                <div>\n                    <div class=\"card rounded-0 login-wrapper pl-5 pr-5 pt-4 pb-4\">\n                        <div>\n                            <form [formGroup]=\"userForm\">\n                                <div>\n                                    <h3 class=\"text-muted text-center mb-3\">Login</h3>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"username\" class=\"form-control form-control-sm\"\n                                        placeholder=\"User Name\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.username.errors }\" />\n                                    <div *ngIf=\"submitted && user.username.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"user.username.errors.required\">Username is required</div>\n                                    </div>\n                                    <div *ngIf=\"error\" class=\"text-danger text-sm-left\">\n                                        <p>{{error}}</p>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group d-flex justify-content-center\">\n\n                                    <a class=\"btn btn-warning text-white rounded-0 pl-5 pr-5\" (click)=\"login()\">Login\n                                        <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'></i>\n\n                                    </a>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <p class=\"text-center p-2\">New to Website?&nbsp;<a routerLink=\"/signup\">Sign up</a></p>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/signin/signin.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/signin/signin.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lnbmluL0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXHNpZ25pblxcc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/signin/signin.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/signin/signin.component.ts ***!
  \***********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.error = null;
        this.loading = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
                updateOn: 'blur'
            })
        });
    };
    Object.defineProperty(SigninComponent.prototype, "user", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.login = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.error = null;
        this.submitted = true;
        this.loading = true;
        if (this.userForm.invalid) {
            this.loading = false;
            return;
        }
        var user = this.userForm.value;
        var resp = this.userService.signin(user).subscribe(function (data) {
            var fistrecord = data[0];
            var donor = new src_app_models__WEBPACK_IMPORTED_MODULE_4__["Donor"]().get(fistrecord.donorUserName, fistrecord.email);
            _this.userService.setAuth(donor);
            _this.router.navigate(['ngolist']);
        }, function (err) {
            _this.loading = false;
            _this.error = 'User not found';
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/ui/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/ui/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__["DonorService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/ui/signup/signup.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/signup/signup.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!––\n/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n––>\n<div class=\"h-100 login-bg\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100\">\n            <div class=\"col d-flex justify-content-center align-items-center pb-5\">\n                <div>\n                    <div class=\"card rounded-0 login-wrapper pl-5 pr-5 pt-4 pb-4\">\n                        <div>\n                            <form [formGroup]=\"userForm\">\n                                <div>\n                                    <h3 class=\"text-muted text-center mb-3\">Sign up</h3>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"username\" class=\"form-control form-control-sm\"\n                                        placeholder=\"User Name\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.username.errors }\" />\n                                    <div *ngIf=\"submitted && user.username.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"user.username.errors.required\">Username is required</div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-sm\"\n                                        placeholder=\"Email address\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.email.errors }\" />\n                                    <div *ngIf=\"submitted && user.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"user.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"user.email.errors.email\">Invalid Email address</div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"error\" class=\"text-danger text-sm-left\">\n                                    <p>{{error}}</p>\n                                </div>\n\n                                <div class=\"form-group d-flex justify-content-center\" (click)=\"signup()\"><a class=\"btn btn-warning text-white rounded-0 pl-5 pr-5\"\n                                        role=\"button\">Sign up\n                                        <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'> </i>\n                                    </a></div>\n                            </form>\n                        </div>\n                    </div>\n                    <p class=\"text-center p-2\">Already have an account?&nbsp;<a routerLink=\"/signin\">Login</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/ui/signup/signup.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/signup/signup.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\").\n# You may not use this file except in compliance with the License.\n# A copy of the License is located at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# or in the \"license\" file accompanying this file. This file is distributed\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n# express or implied. See the License for the specific language governing\n# permissions and limitations under the License.\n#\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lnbnVwL0M6XFxVc2Vyc1xcb2Nvb25leVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZyZXNodHJhY2UtYXBwMS9zcmNcXGFwcFxcdWlcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztDQ2NDIiwiZmlsZSI6InNyYy9hcHAvdWkvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiNcbiovXG4iLCIvKlxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuI1xuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4jXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/ui/signup/signup.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/signup/signup.component.ts ***!
  \***********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared */ "./src/app/services/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.error = null;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
                updateOn: 'blur'
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]))
        });
    };
    Object.defineProperty(SignupComponent.prototype, "user", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.submitted = true;
        if (this.userForm.invalid) {
            this.loading = false;
            return;
        }
        var user = this.userForm.value;
        this.userService.createUser(user).subscribe(function (data) {
            if (data.success) {
                _this.userService.signup(user).subscribe(function (resp) {
                    _this.router.navigate(['signin']);
                    return;
                }, function (err) {
                    _this.loading = false;
                    _this.error = err.statusText;
                });
            }
            else {
                _this.loading = false;
                _this.error = 'Username or email already in use!';
            }
        }, function (err) {
            _this.loading = false;
            _this.error = err.statusText + ". Ensure you are using HTTP, not HTTPS, to access the site.";
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/ui/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/ui/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_shared__WEBPACK_IMPORTED_MODULE_2__["DonorService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/
var environment = {
    production: false,
    host: '',
    port: '',
    dbhost: '',
    dbport: '',
    api_url: 'http://54.77.255.132:3000/',
    test: 'test',
    socket_url: 'ws://54.77.255.132:3000/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# or in the "license" file accompanying this file. This file is distributed
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
# express or implied. See the License for the specific language governing
# permissions and limitations under the License.
#
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ocooney\Documents\GitHub\freshtrace-app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map