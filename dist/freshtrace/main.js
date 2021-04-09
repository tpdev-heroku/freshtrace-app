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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n\r\n<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n<!-- <app-app-blockchain></app-app-blockchain> -->\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEJpdG5hbWlcXG1lYW5zdGFjay0zLjQuNC0wXFxwcm9qZWN0c1xcY2xpZW50c1xcVFAtRGV2XFxmcmVzaHRyYWNlLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0NDY0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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
/*! exports provided: DashboardService, NgoService, DonateService, BlockchainService */
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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<section class=\"cd-horizontal-blockchain border-bottom shadow-sm bg-white pt-3\" [ngClass]=\"{'loaded': loaded}\">\r\n  <div class=\"blockchain\">\r\n    <ul class=\"cd-blockchain-navigation\">\r\n      <li>\r\n        <a href=\"#\" (click)=\"onBlocksScrollChange($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\"></a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" (click)=\"onBlocksScrollChange($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\"></a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"events-wrapper\">\r\n      <h6 class=\"text-center text-orange\">Blockchain Events</h6>\r\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\r\n        <ol>\r\n          <li *ngFor=\"let item of blockElements; let index = index;\">\r\n            <a #blockEvents [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\">\r\n              <img [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\" data-toggle=\"tooltip\"\r\n                data-html=\"true\" [title]=\"getTransections(item)\" src=\"/assets/images/block-dark.png\"> </a> <span class=\"text-center\">Block:\r\n              {{item.caption}}</span>\r\n          </li>\r\n        </ol>\r\n        <span class=\"filling-line\" aria-hidden=\"true\" #connectBlocks></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/ui/components/blockchain-progress/blockchain-progress.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/components/blockchain-progress/blockchain-progress.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\nol, ul {\n  list-style: none; }\n.cd-horizontal-blockchain {\n  opacity: 0;\n  transition: opacity 0.2s; }\n.cd-horizontal-blockchain::before {\n    content: 'mobile';\n    display: none; }\n.cd-horizontal-blockchain.loaded {\n    opacity: 1; }\n.cd-horizontal-blockchain .blockchain {\n    position: relative;\n    height: 84px;\n    width: 90%;\n    max-width: 800px;\n    margin: 0 auto; }\n.cd-horizontal-blockchain .events-wrapper {\n    position: relative;\n    height: 100%;\n    margin: 0 40px;\n    overflow: hidden; }\n.cd-horizontal-blockchain .events-wrapper::after {\n      content: '';\n      position: absolute;\n      z-index: 2;\n      top: 0;\n      height: 100%;\n      width: 20px; }\n.cd-horizontal-blockchain .events-wrapper::before {\n      content: '';\n      position: absolute;\n      z-index: 2;\n      top: 0;\n      height: 100%;\n      width: 20px;\n      left: 0;\n      background-image: linear-gradient(to right, #fff, rgba(248, 248, 248, 0)); }\n.cd-horizontal-blockchain .events-wrapper::after {\n      right: 0;\n      background-image: linear-gradient(to left, #fff, rgba(248, 248, 248, 0)); }\n.cd-horizontal-blockchain .events {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 43px;\n    height: 2px;\n    background: #dfdfdf;\n    transition: transform 0.4s; }\n.cd-horizontal-blockchain .filling-line {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #7b9d6f;\n    transform: scaleX(0);\n    transform-origin: left center;\n    transition: transform 0.3s; }\n.cd-horizontal-blockchain .events a img {\n    position: absolute;\n    bottom: -26px;\n    z-index: 2;\n    text-align: center;\n    font-size: 12px;\n    text-decoration: none;\n    padding-bottom: 15px;\n    color: #383838;\n    height: 40px;\n    transform: translateZ(0); }\n.cd-horizontal-blockchain .events a img::after {\n      bottom: -2.5px;\n      height: 8px;\n      width: 8px;\n      position: absolute;\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n      border-radius: 50%;\n      border: 2px solid #dfdfdf;\n      background-color: #f8f8f8;\n      transition: background-color 0.3s, border-color 0.3s; }\n.cd-horizontal-blockchain .events a img:hover::after {\n      background-color: #7b9d6f;\n      border-color: #7b9d6f;\n      height: 52px !important; }\n.cd-horizontal-blockchain .events a img.selected {\n      height: 48px !important;\n      bottom: -29px;\n      cursor: pointer; }\n.cd-horizontal-blockchain .events a img.selected::after {\n        background-color: #7b9d6f;\n        border-color: #7b9d6f; }\n.cd-horizontal-blockchain .events a img.older-event::after {\n      border-color: #7b9d6f;\n      cursor: pointer; }\n.cd-horizontal-blockchain li span {\n    position: absolute;\n    left: 1700px;\n    bottom: -30px;\n    font-size: 12px; }\n@media only screen and (min-width: 1100px) {\n  .cd-horizontal-blockchain::before {\n    content: 'desktop'; } }\n.cd-blockchain-navigation a {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  bottom: auto;\n  transform: translateY(-50%);\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  overflow: hidden;\n  color: transparent;\n  text-indent: 100%;\n  white-space: nowrap;\n  transition: border-color 0.3s; }\n.cd-blockchain-navigation a::after {\n    content: '';\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translateX(-50%) translateY(-50%);\n    background: url(/assets/images/arrow-gr.png) no-repeat 0 0; }\n.cd-blockchain-navigation a.prev {\n    left: 0;\n    transform: translateY(-50%) rotate(180deg); }\n.cd-blockchain-navigation a.next {\n    right: 0; }\n.cd-blockchain-navigation a:hover {\n    border-color: #7b9d6f; }\n.cd-blockchain-navigation a.inactive {\n    cursor: not-allowed; }\n.cd-blockchain-navigation a.inactive::after {\n      background-position: 0 -16px; }\n.cd-blockchain-navigation a.inactive:hover {\n      border-color: #dfdfdf; }\n.cd-blockchain-navigation a li {\n    list-style: none; }\n@media only screen and (min-width: 768px) {\n  .cd-horizontal-blockchain .events-content h2 {\n    font-size: 7rem; }\n  .cd-horizontal-blockchain .events-content em {\n    font-size: 2rem; }\n  .cd-horizontal-blockchain .events-content p {\n    font-size: 1.8rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9ibG9ja2NoYWluLXByb2dyZXNzL0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxibG9ja2NoYWluLXByb2dyZXNzXFxibG9ja2NoYWluLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL2Jsb2NrY2hhaW4tcHJvZ3Jlc3MvYmxvY2tjaGFpbi1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQztBRENEO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxVQUFVO0VBR1Ysd0JBQXdCLEVBQUE7QUFKMUI7SUFNSSxpQkFBaUI7SUFDakIsYUFBYSxFQUFBO0FBUGpCO0lBVUksVUFBVSxFQUFBO0FBVmQ7SUFhSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0FBakJsQjtJQW9CSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtBQXZCcEI7TUF5Qk0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsTUFBTTtNQUNOLFlBQVk7TUFDWixXQUFXLEVBQUE7QUE5QmpCO01BaUNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLE1BQU07TUFDTixZQUFZO01BQ1osV0FBVztNQUNYLE9BQU87TUFFUCx5RUFBeUUsRUFBQTtBQXpDL0U7TUE0Q00sUUFBUTtNQUVSLHdFQUF3RSxFQUFBO0FBOUM5RTtJQWtESSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtJQUduQiwwQkFBMEIsRUFBQTtBQTFEOUI7SUE2REksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBS3pCLG9CQUFvQjtJQUtwQiw2QkFBNkI7SUFHN0IsMEJBQTBCLEVBQUE7QUFoRjlCO0lBbUZJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQU1aLHdCQUF3QixFQUFBO0FBakc1QjtNQW1HTSxjQUFjO01BQ2QsV0FBVztNQUNYLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFLWCwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFHekIsb0RBQW9ELEVBQUE7QUFuSDFEO01Bc0hNLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFDckIsdUJBQXVCLEVBQUE7QUF4SDdCO01BMkhNLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsZUFBZSxFQUFBO0FBN0hyQjtRQWdJUSx5QkFBeUI7UUFDekIscUJBQXFCLEVBQUE7QUFqSTdCO01BcUlNLHFCQUFxQjtNQUNyQixlQUFlLEVBQUE7QUF0SXJCO0lBMElJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWUsRUFBQTtBQUluQjtFQUNFO0lBRUksa0JBQWtCLEVBQUEsRUFDbkI7QUFJTDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFLWiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQiw2QkFBNkIsRUFBQTtBQXBCL0I7SUFzQkksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFLWCw0Q0FBNEM7SUFDNUMsMERBQTBELEVBQUE7QUFuQzlEO0lBc0NJLE9BQU87SUFLUCwwQ0FBMEMsRUFBQTtBQTNDOUM7SUE4Q0ksUUFBUSxFQUFBO0FBOUNaO0lBaURJLHFCQUFxQixFQUFBO0FBakR6QjtJQW9ESSxtQkFBbUIsRUFBQTtBQXBEdkI7TUFzRE0sNEJBQTRCLEVBQUE7QUF0RGxDO01BeURNLHFCQUFxQixFQUFBO0FBekQzQjtJQTZESSxnQkFBZ0IsRUFBQTtBQU1wQjtFQUNFO0lBRUksZUFBZSxFQUFBO0VBRm5CO0lBS0ksZUFBZSxFQUFBO0VBTG5CO0lBUUksaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL2Jsb2NrY2hhaW4tcHJvZ3Jlc3MvYmxvY2tjaGFpbi1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xyXG5vbCwgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnbW9iaWxlJztcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICYubG9hZGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIC5ibG9ja2NoYWluIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDg0cHg7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmV2ZW50cy13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCA0MHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCkpO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI2ZmZiwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmZmYsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXZlbnRzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDQzcHg7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC40cztcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XHJcbiAgICB9XHJcbiAgICAuZmlsbGluZy1saW5lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjlkNmY7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XHJcbiAgICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgfVxyXG4gICAgLmV2ZW50cyBhIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtMjZweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgYm90dG9tOiAtMi41cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiOWQ2ZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAtMjlweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiOWQ2ZjtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5vbGRlci1ldmVudDo6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDE3MDBweDtcclxuICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4ge1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdkZXNrdG9wJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYXJyb3ctZ3IucG5nKSBuby1yZXBlYXQgMCAwO1xyXG4gICAgfVxyXG4gICAgJi5wcmV2IHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgICYubmV4dCB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcclxuICAgIH1cclxuICAgICYuaW5hY3RpdmUge1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTZweDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNkZmRmZGY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzLWNvbnRlbnQge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiIsIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4uY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IH1cbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnbW9iaWxlJztcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4ubG9hZGVkIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmJsb2NrY2hhaW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCA0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtd3JhcHBlcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDIwcHg7IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmYsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCkpO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTsgfVxuICAgIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cy13cmFwcGVyOjphZnRlciB7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDApKTsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA0M3B4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC40cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40czsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5maWxsaW5nLWxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cyBhIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTI2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzM4MzgzODtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyB9XG4gICAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzIGEgaW1nOjphZnRlciB7XG4gICAgICBib3R0b206IC0yLjVweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMgYSBpbWc6aG92ZXI6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjlkNmY7XG4gICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7XG4gICAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDsgfVxuICAgIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cyBhIGltZy5zZWxlY3RlZCB7XG4gICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgICAgIGJvdHRvbTogLTI5cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cyBhIGltZy5zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I5ZDZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICM3YjlkNmY7IH1cbiAgICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMgYSBpbWcub2xkZXItZXZlbnQ6OmFmdGVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzdiOWQ2ZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIGxpIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNzAwcHg7XG4gICAgYm90dG9tOiAtMzBweDtcbiAgICBmb250LXNpemU6IDEycHg7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnZGVza3RvcCc7IH0gfVxuXG4uY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBib3R0b206IGF1dG87XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7IH1cbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2Fycm93LWdyLnBuZykgbm8tcmVwZWF0IDAgMDsgfVxuICAuY2QtYmxvY2tjaGFpbi1uYXZpZ2F0aW9uIGEucHJldiB7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7IH1cbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhLm5leHQge1xuICAgIHJpZ2h0OiAwOyB9XG4gIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjN2I5ZDZmOyB9XG4gIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYS5pbmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuICAgIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYS5pbmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTZweDsgfVxuICAgIC5jZC1ibG9ja2NoYWluLW5hdmlnYXRpb24gYS5pbmFjdGl2ZTpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmRmZGY7IH1cbiAgLmNkLWJsb2NrY2hhaW4tbmF2aWdhdGlvbiBhIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNkLWhvcml6b250YWwtYmxvY2tjaGFpbiAuZXZlbnRzLWNvbnRlbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogN3JlbTsgfVxuICAuY2QtaG9yaXpvbnRhbC1ibG9ja2NoYWluIC5ldmVudHMtY29udGVudCBlbSB7XG4gICAgZm9udC1zaXplOiAycmVtOyB9XG4gIC5jZC1ob3Jpem9udGFsLWJsb2NrY2hhaW4gLmV2ZW50cy1jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtOyB9IH1cbiJdfQ== */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class='pie-chart' #chart></div>\r\n"

/***/ }),

/***/ "./src/app/ui/components/donorchart/donorchart.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/ui/components/donorchart/donorchart.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n.pie-chart {\n  width: 100%;\n  display: inline-block;\n  height: 400px !important; }\n.pie-chart /deep/ path {\n    stroke: #fff;\n    stroke-width: 2; }\n.pie-chart /deep/ .totalspend {\n    font-size: 1.6em; }\n.pie-chart /deep/ .label {\n    font-size: 1.2em; }\n.pie-chart /deep/ .percent {\n    font-size: 1.4em; }\n.legend {\n  font-weight: bold; }\n.legend .item {\n    padding: 0 30px; }\n.legend .item .circle {\n      height: 30px;\n      width: 30px;\n      border-radius: 50%;\n      margin-right: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9kb25vcmNoYXJ0L0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxkb25vcmNoYXJ0XFxkb25vcmNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL2Rvbm9yY2hhcnQvZG9ub3JjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQztBRE9EO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUdyQix3QkFBd0IsRUFBQTtBQUwxQjtJQVFJLFlBQVk7SUFDWixlQUFlLEVBQUE7QUFUbkI7SUFZSSxnQkFBZ0IsRUFBQTtBQVpwQjtJQWdCSSxnQkFBZ0IsRUFBQTtBQWhCcEI7SUFvQkksZ0JBQWdCLEVBQUE7QUFJcEI7RUFDRSxpQkFBaUIsRUFBQTtBQURuQjtJQUlJLGVBQWUsRUFBQTtBQUpuQjtNQU9NLFlBQVk7TUFDWixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9kb25vcmNoYXJ0L2Rvbm9yY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuLy8gLndyYXBwZXJ7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLnBpZS1jaGFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6MHB4O1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgL2RlZXAvIHBhdGgge1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gIH1cclxuICAvZGVlcC8gLnRvdGFsc3BlbmR7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgL2RlZXAvIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxuICAvZGVlcC8gLnBlcmNlbnR7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxlZ2VuZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgLml0ZW17XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcblxyXG4gICAgLmNpcmNsZXtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4ucGllLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50OyB9XG4gIC5waWUtY2hhcnQgL2RlZXAvIHBhdGgge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDI7IH1cbiAgLnBpZS1jaGFydCAvZGVlcC8gLnRvdGFsc3BlbmQge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07IH1cbiAgLnBpZS1jaGFydCAvZGVlcC8gLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5waWUtY2hhcnQgL2RlZXAvIC5wZXJjZW50IHtcbiAgICBmb250LXNpemU6IDEuNGVtOyB9XG5cbi5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuICAubGVnZW5kIC5pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAubGVnZW5kIC5pdGVtIC5jaXJjbGUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuIl19 */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"gallery\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header pt-3 pb-3\">\r\n        <h4 class=\"modal-title\">Gallery</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body gallery mb-3 pt-0\">\r\n        <div *ngFor=\"let img of images; let i = index\">\r\n          <img class=\"img-fluid\" src=\"{{img}}\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/components/gallery/gallery.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/components/gallery/gallery.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9nYWxsZXJ5L0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXHJcbiIsIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xuIl19 */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<fieldset class=\"rating\">\r\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"5\" [checked]=\"rating===5\" />\r\n  <span (click)='onClick(5)'></span>\r\n\r\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"4\" [checked]=\"rating===4\" />\r\n  <span (click)='onClick(4)'></span>\r\n\r\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\r\n  <span (click)='onClick(3)'></span>\r\n\r\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\r\n  <span (click)='onClick(2)'></span>\r\n\r\n  <input type=\"radio\" readOnly=\"true\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\r\n  <span (click)='onClick(1)'></span>\r\n</fieldset>\r\n"

/***/ }),

/***/ "./src/app/ui/components/rating/rating.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ui/components/rating/rating.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n.rating {\n  float: left;\n  min-width: 84px; }\n.rating:not(:checked) > input {\n    position: absolute;\n    top: -100000px;\n    clip: rect(0, 0, 0, 0); }\n.rating:not(:checked) > span {\n    float: right;\n    width: 1em;\n    padding: 0.1em;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n    font-size: 110%;\n    line-height: 1.2;\n    color: #ddd; }\n.rating:not(:checked) > span:before {\n      content: '★'; }\n.rating:not(:checked) > span:hover {\n    color: #ffc107; }\n.rating:not(:checked) > span:hover ~ span {\n      color: #ffc107; }\n.rating > input:checked ~ span {\n    color: #ffc107; }\n.rating > span:checked ~ span:hover {\n    color: #ffc107; }\n.rating > span:checked ~ span:hover ~ span {\n      color: #ffc107; }\n.rating > span:hover ~ input:checked ~ span {\n    color: #ffc107; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL3JhdGluZy9DOlxcQml0bmFtaVxcbWVhbnN0YWNrLTMuNC40LTBcXHByb2plY3RzXFxjbGllbnRzXFxUUC1EZXZcXGZyZXNodHJhY2UtYXBwL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xccmF0aW5nXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCOzs7Ozs7Ozs7Ozs7OztDRGNDO0FDRUQ7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBRm5CO0lBTVUsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0IsRUFBQTtBQVJoQztJQVdVLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0FBbkJyQjtNQXFCWSxZQUFTLEVBQUk7QUFyQnpCO0lBMEJRLGNBQWMsRUFBQTtBQTFCdEI7TUE0QlUsY0FBYyxFQUFBO0FBNUJ4QjtJQWlDTSxjQUFjLEVBQUE7QUFqQ3BCO0lBcUNRLGNBQWMsRUFBQTtBQXJDdEI7TUF1Q1UsY0FBYyxFQUFBO0FBdkN4QjtJQTJDUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cbi5yYXRpbmcge1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiA4NHB4OyB9XG4gIC5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwMDAwcHg7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTsgfVxuICAucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBzcGFuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbG9yOiAjZGRkOyB9XG4gICAgLnJhdGluZzpub3QoOmNoZWNrZWQpID4gc3BhbjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ+KYhSc7IH1cbiAgLnJhdGluZzpub3QoOmNoZWNrZWQpID4gc3Bhbjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmMxMDc7IH1cbiAgICAucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBzcGFuOmhvdmVyIH4gc3BhbiB7XG4gICAgICBjb2xvcjogI2ZmYzEwNzsgfVxuICAucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xuICAgIGNvbG9yOiAjZmZjMTA3OyB9XG4gIC5yYXRpbmcgPiBzcGFuOmNoZWNrZWQgfiBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5yYXRpbmcgPiBzcGFuOmNoZWNrZWQgfiBzcGFuOmhvdmVyIH4gc3BhbiB7XG4gICAgICBjb2xvcjogI2ZmYzEwNzsgfVxuICAucmF0aW5nID4gc3Bhbjpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcbiAgICBjb2xvcjogI2ZmYzEwNzsgfVxuIiwiXHJcbi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xyXG5cclxuLnJhdGluZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1pbi13aWR0aDogODRweDtcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgID4ge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTEwMDAwMHB4O1xyXG4gICAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4xZW07XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJ+KYhSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgID4gc3Bhbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgICAgICAgfiBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgfVxyXG4gICAgPiB7XHJcbiAgICAgIHNwYW46Y2hlY2tlZCB+IHNwYW46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgIH4gc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbjpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"container extra-margin-top\">\r\n    <div class=\"row mb-2\">\r\n        <div class=\"col\">\r\n            <h3 class=\"font-weight-light\">Your purchases dashboard</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-8 \">\r\n            <div class=\"border shadow-sm rounded p-4\">\r\n                <h5>My Purchases</h5>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"pl-0 border-top-0\">#</th>\r\n                                <th class=\"font-weight-normal text-nowrap border-top-0\">Supplier</th>\r\n                                <!-- <th class=\"font-weight-normal border-top-0\">No. of projects</th> -->\r\n                                <th class=\"font-weight-normal text-nowrap border-top-0\">Purchased on</th>\r\n                                <th class=\"font-weight-normal text-nowrap border-top-0 text-right\">My purchases</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let userDonation of userDonationslist; let i = index\">\r\n                                <td class=\"pl-0\">{{i+1}}</td>\r\n                                <td><a routerLink=\"/details/{{userDonation.ngo_id}}\">{{userDonation.ngo_name}}</a></td>\r\n                                <!-- <td>20</td> -->\r\n                                <td>{{userDonation.date | date: 'MM/dd/yyyy'}}</td>\r\n                                <td class=\"text-right\">{{userDonation.amount | currency:'USD':'symbol':'1.2-2'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"d-flex flex-row justify-content-between align-items-center card p-3 rounded-0 mb-3\">\r\n                <div class=\"icon-circle m-0 bg-primary\"><i class=\"fa fa-dollar\"></i></div>\r\n                <div class=\"flex-fill ml-2 mr-2\">\r\n                    <p class=\"m-0 p-0 text-muted\">Your total purchases:</p>\r\n                    <h3 class=\"m-0 p-0\"> {{total_donation | currency:'USD':'symbol':'1.2-2'}}</h3>\r\n                </div>\r\n                <div><a class=\"btn btn-warning\" role=\"button\" routerLink=\"/ngolist\">Buy</a></div>\r\n            </div>\r\n            <div class=\"d-flex flex-row justify-content-between align-items-center card p-3 rounded-0 mb-3\">\r\n                <div class=\"icon-circle m-0 bg-light-green bg-jungle\"><i class=\"fa fa-calendar\"></i></div>\r\n                <div class=\"flex-fill ml-2 mr-2\">\r\n                    <p class=\"m-0 p-0 text-muted\">This month:</p>\r\n                    <h3 class=\"m-0 p-0\">{{month_donation | currency:'USD':'symbol':'1.2-2'}}<small class=\"ml-2 font-size-1rem text-muted\"></small></h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"card rounded-0\">\r\n                <div class=\"bg-light p-3 border-bottom\">\r\n                    <h5 class=\"text-muted font-weight-normal m-0\">Links</h5>\r\n                </div>\r\n                <div class=\"p-3\">\r\n                    <ul class=\"list-unstyled m-0\">\r\n                        <li class=\"d-flex align-items-center mt-2 mb-2\">\r\n                            <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n                            <a routerLink=\"/ngolist\">View all of my organizations</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/dashboard/dashboard.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/dashboard/dashboard.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZGFzaGJvYXJkL0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"container extra-margin-top\">\r\n    <div class=\"row mb-2\">\r\n        <div class=\"col-9\">\r\n            <div class=\"d-flex mb-5\">\r\n                <div class=\"mr-2\"><i class=\"fa fa-check-circle text-success font-size-2rem\"></i></div>\r\n                <div>\r\n                    <h2>Thank you for your purchase!</h2>\r\n                    <p class=\"font-size-1rem\">If you wish to continue purchasing more, click the 'Buy' button below.</p>\r\n                    <form>\r\n                        <div class=\"form-group\"><a class=\"btn btn-warning font-size-1rem\" role=\"button\" routerLink=\"/ngolist\">Purchase</a><span\r\n                                class=\"ml-3\">or</span><a class=\"btn btn-link font-size-1rem\" role=\"button\" routerLink=\"/dashboard\">Return\r\n                                to home</a></div>\r\n                    </form>\r\n\r\n                    <!--\r\n                    <div>\r\n                        <p class=\"font-size-1rem mb-2 mt-4\">NGO's who are now connected with your account</p>\r\n                        <div class=\"d-flex flex-column\">\r\n                            <ul class=\"d-inline-flex flex-wrap list-unstyled mb-1\">\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/compassion-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                                <li class=\"border bg-white p-1 mr-2 mb-2\"><img src=\"assets/images/direct-relief-logo.png\"\r\n                                        style=\"height: 40px; width: auto;\"></li>\r\n                            </ul>\r\n                            <div class=\"mr-2\"><a routerLink=\"#\">View All</a></div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <!-- <div>\r\n                <h4 class=\"m-0 mb-1\">Blockchain activity</h4>\r\n                <div class=\"p-5 text-center card body login-bg\">\r\n                    <span class=\"text-muted p-5\">Component to be built dynamically.</span>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"col\">\r\n            <h5 class=\"pb-2\">Links to explore</h5>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"d-flex align-items-center mt-2 mb-2\">\r\n                    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n                    <a routerLink=\"/ngolist\">View all non-profit organizations</a>\r\n                </li>\r\n                <!--\r\n                <li class=\"d-flex align-items-center mt-2 mb-2\">\r\n                    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\r\n                    <a routerLink=\"#\">View my profile</a>\r\n                </li>\r\n              -->\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"gallery\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header pt-3 pb-3\">\r\n                <h4 class=\"modal-title\">Gallery</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                        aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body gallery mb-3 pt-0\">\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n                <div><span>image&nbsp;</span></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header border-0 pt-2 pb-2\">\r\n                <h4 class=\"modal-title\">Customer list</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                    aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body overflow-y-auto max-height-200 p-0\">\r\n                <div class=\"table-responsive table-sm table-striped table-borderless\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"font-weight-normal\">#</th>\r\n                                <th class=\"font-weight-normal\">Customer name</th>\r\n                                <th class=\"text-right font-weight-normal\">Amount</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"overflow-y-auto max-height-200\">\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>John Doe</td>\r\n                                <td class=\"text-right\">$1000</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2</td>\r\n                                <td>Brian Adams</td>\r\n                                <td class=\"text-right\">$3500</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3</td>\r\n                                <td>Mickey Mayer</td>\r\n                                <td class=\"text-right\">$400</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Peter Joy</td>\r\n                                <td class=\"text-right\">$100</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>5</td>\r\n                                <td>Nicky Jones</td>\r\n                                <td class=\"text-right\">$450</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/donate/donate.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/donate/donate.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZG9uYXRlL0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxkb25hdGVcXGRvbmF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"container extra-margin-top\">\r\n  <div class=\"row mb-2\">\r\n    <div class=\"col\">\r\n      <h5 class=\"font-weight-light\">NGO Details</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card p-4 shadow-sm\">\r\n        <div class=\"d-flex flex-row justify-content-between mb-4\">\r\n          <div class=\"d-flex\">\r\n            <div class=\"d-flex flex-column align-items-center mr-4\">\r\n              <img [src]='selectedNGO.ngo_icon_url' class=\"img-fluid wdth-250\">\r\n              <div class=\"text-center mt-2\">\r\n                <app-star-rating [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.id+selectedNGO.ngo_rating'></app-star-rating>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h4 class=\"m-0\">{{selectedNGO.ngo_name}}</h4>\r\n              <p class=\"m-0\">Regn. No. {{selectedNGO.ngo_reg_no}}<br>{{selectedNGO.ngo_address}}<br>{{selectedNGO.ngo_phone}}<br>{{selectedNGO.ngo_email}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex flex-column align-items-end\">\r\n            <div>\r\n              <ul class=\"d-inline-flex list-unstyled border rounded\">\r\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3\">\r\n                  <span>Total Donations</span>\r\n                  <span><strong> {{selectedNGO.ngo_donations | currency:'USD':'symbol':'1.2-2'}}</strong></span>\r\n                </li>\r\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3 border-left border-right bg-gray-200\">\r\n                  <span>Utilized fund</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#funds-utilized\">{{selectedNGO.ngo_fund_utilized\r\n                      | currency:'USD':'symbol':'1.2-2'}}</a></span>\r\n                </li>\r\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-3 pr-3 bg-light\">\r\n                  <span>My donations</span><span> {{selectedNGO.ngo_user_donations | currency:'USD':'symbol':'1.2-2'}}</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div>\r\n              <ul class=\"d-inline-flex list-unstyled border rounded\">\r\n                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\r\n                  <span>Total Projects</span><span><strong>{{selectedNGO.ngo_projects}}</strong></span>\r\n                </li>\r\n                <li class=\"d-flex flex-column justify-content-center border-left align-items-center p-1 text-nowrap pl-2 pr-2\">\r\n                  <span>Total no. of donors</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#donors\">{{selectedNGO.ngo_Donors}}</a></span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"position-relative\">\r\n          <button class=\"btn btn-link gallery-link\" type=\"button\" data-toggle=\"modal\" data-target=\"#gallery\">\r\n            <i class=\"fa fa-photo mr-1 text-muted\"></i>Gallery\r\n          </button>\r\n\r\n          <div class=\"clear-both pt-3 pb-3\">\r\n            <h4 class=\"border-bottom\">About</h4>\r\n            <div class=\"about-content pr-4\">\r\n              <p class=\"pr-4\">{{selectedNGO.ngo_about}}</p>\r\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\r\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\r\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\r\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\r\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\r\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\r\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\r\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\r\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\r\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\r\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\r\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\r\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\r\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\r\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\r\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\r\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\r\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\r\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\r\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\r\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\r\n                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\r\n                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\r\n                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\r\n                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of\r\n                \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book\r\n                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem\r\n                Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of\r\n                Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33\r\n                from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form,\r\n                accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n            </div>\r\n            <div class=\"mt-4\">\r\n              <form class=\"justify-content-start align-items-center\" [formGroup]=\"donateForm\">\r\n                <div class=\"form-group d-inline-flex m-0\">\r\n                  <input class=\"form-control font-size-1rem w-50\" type=\"number\" formControlName=\"donationAmount\"\r\n                    placeholder=\"$ 150.00\">\r\n                  <div *ngIf=\"submitted && donation.donationAmount.errors\" class=\"invalid-feedback\" [ngClass]=\"{ 'is-invalid': submitted && donation.donationAmount.errors}\">\r\n                    <div *ngIf=\"donation.donationAmount.errors.required\">Donation amount is required</div>\r\n                  </div>\r\n                  <a class=\"btn btn-warning ml-2 text-white\" (click)='makeDonation()' role=\"button\">\r\n                    <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'> </i>\r\n                    Donate</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-gallery></app-gallery>\r\n\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"funds-utilized\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header pb-2\">\r\n        <h4 class=\"modal-title\">Purchases</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" aria-hidden=\"true\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body p-0\">\r\n        <table class=\"table w-100 tbl-funds-utilized table-sm table-borderless table-striped\">\r\n          <thead class=\"bg-dark text-white\">\r\n            <tr>\r\n              <th class=\"font-weight-normal pl-4\">#</th>\r\n              <th class=\"font-weight-normal\">Item name</th>\r\n              <th class=\"text-right font-weight-normal pr-4\">Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"overflow-y-auto max-height-200\">\r\n            <tr *ngFor=\"let spendDetails of selectedNGO.ngo_spend_details; let i = index\">\r\n              <td class=\"pl-4\">{{i+1}}</td>\r\n              <td>{{spendDetails.spendDescription}}</td>\r\n              <td class=\"text-right pr-4\" data-dismiss=\"modal\" data-toggle=\"modal\" (click)='renderGraph(spendDetails.spendId,spendDetails.spendAmount)'\r\n                data-target=\"#contributionChart\"><a href='#'>{{spendDetails.spendAmount\r\n                  |\r\n                  currency:'USD':'symbol':'1.2-2'}}</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade \" role=\"dialog\" tabindex=\"-1\" id=\"contributionChart\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header border-0 pt-2 pb-2\">\r\n        <h4 class=\"modal-title text-center\">Donor's contribution </h4>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" data-toggle=\"modal\" data-target=\"#funds-utilized\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class='wrapper' style=\"text-align: center\">\r\n        <div #graphcontainer> </div>\r\n        <!-- <i *ngIf=\"show_graph\" class='fa fa-circle-o-notch fa-spin'>\r\n              </i> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header pb-2\">\r\n        <h4 class=\"modal-title\">Customer list</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n            aria-hidden=\"true\">×</span></button>\r\n      </div>\r\n      <div class=\"modal-body overflow-y-auto max-height-200 p-0\">\r\n        <div class=\"table-responsive table-sm table-striped table-borderless\">\r\n          <table class=\"table\">\r\n            <thead class=\"bg-dark text-white\">\r\n              <tr>\r\n                <th class=\"font-weight-normal pl-4\">#</th>\r\n                <th class=\"font-weight-normal\">Customer name</th>\r\n                <th class=\"text-right font-weight-normal pr-4\">Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"overflow-y-auto max-height-200\">\r\n              <tr *ngFor=\"let donor of getNgoDonorsAmountKeys(); let i = index\">\r\n                <td class=\"pl-4\">{{i+1}}</td>\r\n                <td>{{donor}}</td>\r\n                <td class=\"text-right pr-4\">{{selectedNGO.ngo_donor_details.get(donor) |\r\n                  currency:'USD':'symbol':'1.2-2'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/ngo-details/ngo-details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui/ngo-details/ngo-details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmdvLWRldGFpbHMvQzpcXEJpdG5hbWlcXG1lYW5zdGFjay0zLjQuNC0wXFxwcm9qZWN0c1xcY2xpZW50c1xcVFAtRGV2XFxmcmVzaHRyYWNlLWFwcC9zcmNcXGFwcFxcdWlcXG5nby1kZXRhaWxzXFxuZ28tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvbmdvLWRldGFpbHMvbmdvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0NDY0MiLCJmaWxlIjoic3JjL2FwcC91aS9uZ28tZGV0YWlscy9uZ28tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xyXG4iLCIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cbiJdfQ== */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"container h-9 extra-margin-top\">\r\n    <div class=\"row mb-2\">\r\n        <div class=\"col\">\r\n            <h5 class=\"font-weight-light\">Select an organization</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 h-95 display-inline-grid\">\r\n            <div class=\"shadow-sm donors-list container-dynamic-height\">\r\n                <div *ngFor=\"let ngo of ngolist; let i = index\" [class]=\"selectedNGO.id===ngo.id?'active':''\" (click)=\"onNGOSelect(ngo)\">\r\n                    <div class=\"mr-3\"><img src={{ngo.ngo_icon_url}} class=\"img-fluid\">\r\n                        <app-star-rating class=\"text-center\" class.disabled [rating]='ngo.ngo_rating' [itemId]='ngo.id+ngo.ngo_rating'></app-star-rating>\r\n                    </div>\r\n                    <div class=\"text-center mt-2\">\r\n                    </div>\r\n                    <div>\r\n                        <h5 class=\"m-0 font-weight-normal\">{{ngo.ngo_name}}</h5>\r\n                        <p class=\"m-0 mt-1\">Sales: {{ngo.ngo_donations | currency:'USD':'symbol':'1.2-2'}}\r\n                            USD</p>\r\n                        <p class=\"m-0 mt-1\">My purchases: {{ngo.ngo_user_donations | currency:'USD':'symbol':'1.2-2'}}\r\n                            USD</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"border p-3 shadow-sm rounded h-100 container-dynamic-height\">\r\n                <div class=\"d-flex flex-row justify-content-between mb-4 \">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column align-items-center mr-3\">\r\n                            <img src={{selectedNGO.ngo_icon_url}} class=\"img-fluid wdth-150\">\r\n                            <div class=\"text-center mt-2\">\r\n                                <app-star-rating class.disabled [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.ngo_rating+selectedNGO.id'\r\n                                    data-toggle=\"modal\" data-target=\"#rating\"></app-star-rating>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <h5 class=\"m-0\">{{selectedNGO.ngo_name}}</h5>\r\n                            <p class=\"m-0\">Regn. No. {{selectedNGO.ngo_reg_no}}<br>{{selectedNGO.ngo_address}}<br>{{selectedNGO.ngo_phone}}<br>{{selectedNGO.ngo_email}},</p>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex flex-column align-items-end\">\r\n                        <div>\r\n                            <ul class=\"d-inline-flex list-unstyled border rounded\">\r\n                                \r\n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2 border-left border-right bg-gray-200\">\r\n                                    <span>Total Purchases</span><span> <a href=\"#\" data-toggle=\"modal\" data-target=\"#funds-utilized\">\r\n                                            {{selectedNGO.ngo_fund_utilized | currency:'USD':'symbol':'1.2-2'}}</a></span>\r\n                                </li>\r\n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2 bg-light\">\r\n                                    <span>My purchases</span><span>{{selectedNGO.ngo_user_donations |\r\n                                        currency:'USD':'symbol':'1.2-2'}}</span>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div>\r\n                            <ul class=\"d-inline-flex list-unstyled border rounded\">\r\n                               <!--  <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\r\n                                    <span>Total Projects</span><span><strong>{{selectedNGO.ngo_projects}}</strong></span>\r\n                                </li> -->\r\n                                <li class=\"d-flex flex-column justify-content-center align-items-center p-1 text-nowrap pl-2 pr-2\">\r\n                                    <span>Total Sales</span><span><strong>{{selectedNGO.ngo_donations |\r\n                                            currency:'USD':'symbol':'1.2-2'}}</strong></span>\r\n                                </li>\r\n                                <li class=\"d-flex flex-column justify-content-center border-left align-items-center p-1 text-nowrap pl-2 pr-2\">\r\n                                    <span>Customers</span><span><a href=\"#\" data-toggle=\"modal\" data-target=\"#donors\">{{selectedNGO.ngo_Donors}}</a></span>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"position-relative\">\r\n                    <button class=\"btn btn-link gallery-link\" type=\"button\" data-toggle=\"modal\" data-target=\"#gallery\">\r\n                        <i class=\"fa fa-photo mr-1 text-muted\"></i>Gallery\r\n                    </button>\r\n\r\n                    <div class=\"clear-both pt-3 pb-3\">\r\n                        <h4 class=\"border-bottom\">About</h4>\r\n                        <div class=\"about-content pr-4\">\r\n                            <p class=\"about-content\">{{selectedNGO.ngo_about}}</p>\r\n                        </div>\r\n                        <div class=\"mt-5\">\r\n                            <form class=\"justify-content-start align-items-center\" [formGroup]=\"donateForm\">\r\n                                <div class=\"form-group d-inline-flex m-0\">\r\n                                    <input class=\"form-control font-size-1rem w-50\" type=\"number\" formControlName=\"donationAmount\"\r\n                                        placeholder=\"$ 150.00\">\r\n                                    <div *ngIf=\"submitted && donation.donationAmount.errors\" class=\"invalid-feedback\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && donation.donationAmount.errors}\">\r\n                                        <div *ngIf=\"donation.donationAmount.errors.required\">Donatoion amount is\r\n                                            required</div>\r\n                                    </div>\r\n                                    <a class=\"btn btn-warning ml-2 text-white\" (click)='onDonate()' role=\"button\">\r\n                                        Donate<i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin ml-2 '> </i>\r\n                                    </a>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-gallery [itemId]='selectedNGO.ngo_reg_no'></app-gallery>\r\n\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"funds-utilized\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header pb-2\">\r\n                <h4 class=\"modal-title\">Purchases</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" aria-hidden=\"true\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body p-0\">\r\n                <table class=\"table w-100 tbl-funds-utilized table-sm table-borderless table-striped\">\r\n                    <thead class=\"bg-dark text-white\">\r\n                        <tr>\r\n                            <th class=\"font-weight-normal pl-4\">#</th>\r\n                            <th class=\"font-weight-normal\">Item name</th>\r\n                            <th class=\"text-right font-weight-normal pr-4\">Amount</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class=\"overflow-y-auto max-height-200\">\r\n                        <tr *ngFor=\"let spendDetails of selectedNGO.ngo_spend_details; let i = index\">\r\n                            <td class=\"pl-4\">{{i+1}}</td>\r\n                            <td>{{spendDetails.spendDescription}}</td>\r\n                            <td class=\"text-right pr-4\" data-dismiss=\"modal\" data-toggle=\"modal\" (click)='renderGraph(spendDetails.spendId,spendDetails.spendAmount)'\r\n                                data-target=\"#contributionChart\"><a href='#'>{{spendDetails.spendAmount\r\n                                    |\r\n                                    currency:'USD':'symbol':'1.2-2'}}</a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade \" role=\"dialog\" tabindex=\"-1\" id=\"contributionChart\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header border-0 pt-2 pb-2\">\r\n                <h4 class=\"modal-title text-center\">Donor's contribution </h4>\r\n\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" data-toggle=\"modal\"\r\n                    data-target=\"#funds-utilized\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class='wrapper' style=\"text-align: center\">\r\n                <div #graphcontainer> </div>\r\n                <!-- <i *ngIf=\"show_graph\" class='fa fa-circle-o-notch fa-spin'>\r\n                </i> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"donors\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header border-0 pb-0\">\r\n                <h4 class=\"modal-title\">Customer list</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body overflow-y-auto max-height-200 p-0 mb-4 pt-2\">\r\n                <div class=\"table-responsive table-sm table-borderless table-striped\">\r\n                    <table class=\"table m-0\">\r\n                        <thead class=\"bg-dark text-white\">\r\n                            <tr>\r\n                                <th class=\"font-weight-normal pl-4\">#</th>\r\n                                <th class=\"font-weight-normal\">Customer name</th>\r\n                                <th class=\"text-right font-weight-normal  pr-4\">Amount</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class=\"overflow-y-auto max-height-200\">\r\n                            <tr *ngFor=\"let ngo of getNgoDonorsAmountKeys(); let i = index\">\r\n                                <td class=\"pl-4\">{{i+1}}</td>\r\n                                <td>{{ngo}}</td>\r\n                                <td class=\"text-right pr-4\">{{selectedNGO.ngo_donor_details.get(ngo) |\r\n                                    currency:'USD':'symbol':'1.2-2'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='selectedNGO.ngo_user_rating===0' class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"rating\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header pt-3 pb-3\">\r\n                <h4 class=\"modal-title\">Rating for <strong>{{selectedNGO.ngo_name}}</strong></h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row h-100\">\r\n                    <div class=\"col- col-sm-6 text-center my-auto\">\r\n                        <p>My rating</p>\r\n                        <app-star-rating class=\"pop-rating\" [iseditable]='selectedNGO.ngo_user_rating===0' [rating]='selectedNGO.ngo_user_rating'\r\n                            [itemId]='userRating.transactionId' data-dismiss=\"modal\"></app-star-rating>\r\n                    </div>\r\n                    <div class=\"col- col-sm-6 text-center my-auto\">\r\n                        <div class=\"rounded-circle border align-middle d-block mx-auto pop-overall-rating\">\r\n                            <p class=\"mt-5\">Overall rating</p>\r\n                            <app-star-rating class=\"pop-rating\" [rating]='selectedNGO.ngo_rating' [itemId]='selectedNGO.id'></app-star-rating>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/ngos-list/ngos-list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/ngos-list/ngos-list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n.wrapper {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmdvcy1saXN0L0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxuZ29zLWxpc3RcXG5nb3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvbmdvcy1saXN0L25nb3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQztBRENEO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9uZ29zLWxpc3Qvbmdvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXHJcbi53cmFwcGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiA5MDBweDtcclxufVxyXG4iLCIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlOyB9XG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<app-blockchain-progress *ngIf=\"currentUser\" [blockElements]=\"blockchain\"></app-blockchain-progress>\r\n"

/***/ }),

/***/ "./src/app/ui/shared/blockchain/blockchain.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/blockchain/blockchain.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2Jsb2NrY2hhaW4vQzpcXEJpdG5hbWlcXG1lYW5zdGFjay0zLjQuNC0wXFxwcm9qZWN0c1xcY2xpZW50c1xcVFAtRGV2XFxmcmVzaHRyYWNlLWFwcC9zcmNcXGFwcFxcdWlcXHNoYXJlZFxcYmxvY2tjaGFpblxcYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2hhcmVkL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9ibG9ja2NoYWluL2Jsb2NrY2hhaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"container mt-6\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb m-0\">\r\n      <div *ngFor=\"let item of breadcrumbs; let i = index\">\r\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"item.url\">{{item.label}}</a><span *ngIf=\"i !== breadcrumbs.length-1\">\r\n            /&nbsp; </span></li>\r\n      </div>\r\n    </ol>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/shared/breadcrumb/breadcrumb.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/breadcrumb/breadcrumb.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2JyZWFkY3J1bWIvQzpcXEJpdG5hbWlcXG1lYW5zdGFjay0zLjQuNC0wXFxwcm9qZWN0c1xcY2xpZW50c1xcVFAtRGV2XFxmcmVzaHRyYWNlLWFwcC9zcmNcXGFwcFxcdWlcXHNoYXJlZFxcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<footer class=\"page-footer font-small blue pt-4\">\r\n  <div class=\"footer-copyright text-center py-3\"> © {{currentYear}} Copyright: Amazon Web Services, Inc. or its affiliates. All rights reserved.\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/ui/shared/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2Zvb3Rlci9DOlxcQml0bmFtaVxcbWVhbnN0YWNrLTMuNC40LTBcXHByb2plY3RzXFxjbGllbnRzXFxUUC1EZXZcXGZyZXNodHJhY2UtYXBwL3NyY1xcYXBwXFx1aVxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0NDY0MiLCJmaWxlIjoic3JjL2FwcC91aS9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xyXG4iLCIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cbiJdfQ== */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"fixed-top\">\r\n    <nav class=\"navbar navbar-custom navbar-dark navbar-expand-md bg-info navigation-clean-button p-1\">\r\n        <div class=\"container-fluid\">\r\n          <span class=\"text-white my-donations\">Freshtrace</span>\r\n          <!-- <img src=\"../../../../assets/images/aws-logo.png\" title=\"AWS\" style=\"height:35px\"> -->\r\n          <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div *ngIf=\"currentUser\" class=\"collapse navbar-collapse\" id=\"navcol-1\">\r\n            <ul class=\"nav navbar-nav ml-auto\">\r\n              <li class=\"nav-item\" role=\"presentation\">\r\n                <a class=\"nav-link active\">{{greetingMsg}} {{currentUser.name}} !</a>\r\n              </li>\r\n            </ul>\r\n            <a routerLink='/dashboard'>\r\n              <span class=\"text-white my-donations\"><small>My Purchases</small>\r\n              </span>\r\n            </a>\r\n            <a routerLink='/dashboard'>\r\n              <span class=\"text-white my-donations\"><small>My Sales (Coming Soon)</small>\r\n              </span>\r\n            </a>\r\n            <a routerLink='/ngolist'>\r\n              <span class=\"text-white my-donations\"><small>My Organizations</small>\r\n              </span>\r\n            </a>\r\n            <span class=\"navbar-text actions\" (click)='doAction()'>\r\n              <a class=\"text-primary\">{{actionButton}}</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </nav>\r\n      <app-blockchain></app-blockchain>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/shared/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ui/shared/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n/* change the background color */\n.navbar-custom {\n  background-color: #212529 !important; }\n.toggle-button {\n  margin: 10px;\n  color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL2hlYWRlci9DOlxcQml0bmFtaVxcbWVhbnN0YWNrLTMuNC40LTBcXHByb2plY3RzXFxjbGllbnRzXFxUUC1EZXZcXGZyZXNodHJhY2UtYXBwL3NyY1xcYXBwXFx1aVxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0NDY0M7QURDRCxnQ0FBQTtBQUNBO0VBQ0ksb0NBQW9DLEVBQUE7QUFFeEM7RUFDSSxZQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxufVxyXG4udG9nZ2xlLWJ1dHRvbntcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi8qXHJcbiMgQ29weXJpZ2h0IDIwMTggQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuI1xyXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXHJcbiMgWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4jIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XHJcbiNcclxuIyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiNcclxuIyBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcclxuIyBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuIyBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4jIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuI1xyXG4qL1xuLyogY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXG4ubmF2YmFyLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDsgfVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlOyB9XG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"p-l-0 p-r-0 shadow-sm border-left border-top-0 border-right-0 border-bottom-0 h-100 in\" id=\"sidebar\">\r\n  <div class=\"list-group panel\">\r\n    <app-blockchain></app-blockchain>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/shared/sidenav/sidenav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui/shared/sidenav/sidenav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n#sidebar {\n  border: 1px solid; }\n#sidebar .list-group-item {\n    border-radius: 0;\n    background-color: #333;\n    color: #ccc;\n    border-left: 0;\n    border-right: 0;\n    border-color: #2c2c2c;\n    white-space: nowrap; }\n#sidebar .list-group-item:not(.collapsed) {\n      background-color: #222; }\n#sidebar .list-group .list-group-item[aria-expanded=\"false\"]::after {\n    content: \" \\f0d7\";\n    font-family: FontAwesome;\n    display: inline;\n    text-align: right;\n    padding-left: 5px; }\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"] {\n    background-color: #222; }\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"]::after {\n      content: \" \\f0da\";\n      font-family: FontAwesome;\n      display: inline;\n      text-align: right;\n      padding-left: 5px; }\n#sidebar .list-group .collapse .list-group-item {\n    padding-left: 20px; }\n#sidebar .list-group .collapse > .collapse .list-group-item {\n    padding-left: 30px; }\n#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {\n    padding-left: 40px; }\n#sidebar.collapse {\n    transition-timing-function: ease;\n    transition-duration: .2s; }\n#sidebar.collapsing {\n    opacity: 0.8;\n    width: 0;\n    transition-timing-function: ease-in;\n    transition-property: width; }\n@media (max-width: 48em) {\n  #sidebar .list-group .collapse.in, #sidebar .list-group .collapsing {\n    position: absolute;\n    z-index: 1;\n    width: 190px; }\n  #sidebar .list-group > .list-group-item {\n    text-align: center;\n    padding: .75rem .5rem; }\n    #sidebar .list-group > .list-group-item[aria-expanded=\"true\"]::after, #sidebar .list-group > .list-group-item[aria-expanded=\"false\"]::after {\n      display: none; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2hhcmVkL3NpZGVuYXYvQzpcXEJpdG5hbWlcXG1lYW5zdGFjay0zLjQuNC0wXFxwcm9qZWN0c1xcY2xpZW50c1xcVFAtRGV2XFxmcmVzaHRyYWNlLWFwcC9zcmNcXGFwcFxcdWlcXHNoYXJlZFxcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2hhcmVkL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7Ozs7Ozs7Q0NhQztBREdEO0VBQ0ksaUJBQWlCLEVBQUE7QUFEckI7SUFHTSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUIsRUFBQTtBQVR6QjtNQVdRLHNCQUFzQixFQUFBO0FBWDlCO0lBaUJVLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtBQXJCM0I7SUF3QlUsc0JBQXNCLEVBQUE7QUF4QmhDO01BMEJZLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtBQTlCN0I7SUFvQ1Usa0JBQWtCLEVBQUE7QUFwQzVCO0lBd0NZLGtCQUFrQixFQUFBO0FBeEM5QjtJQTJDWSxrQkFBa0IsRUFBQTtBQTNDOUI7SUFtRE0sZ0NBQWdDO0lBR2hDLHdCQUF3QixFQUFBO0FBdEQ5QjtJQXlETSxZQUFZO0lBQ1osUUFBUTtJQUdSLG1DQUFtQztJQUduQywwQkFBMEIsRUFBQTtBQUs5QjtFQUNFO0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFKaEI7SUFPSSxrQkFBa0I7SUFDbEIscUJBQXFCLEVBQUE7SUFSekI7TUFVTSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAmOm5vdCguY29sbGFwc2VkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAmW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCIgXFxmMGQ3XCI7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFxcZjBkYVwiO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29sbGFwc2Uge1xyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IC5jb2xsYXBzZSB7XHJcbiAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPiAuY29sbGFwc2UgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuY29sbGFwc2Uge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG4gICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxuICAgIH1cclxuICAgICYuY29sbGFwc2luZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcclxuICAgICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XHJcbiAgICAjc2lkZWJhciAubGlzdC1ncm91cCB7XHJcbiAgICAgIC5jb2xsYXBzZS5pbiwgLmNvbGxhcHNpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgfVxyXG4gICAgICA+IC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAuNzVyZW0gLjVyZW07XHJcbiAgICAgICAgJlthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTo6YWZ0ZXIsICZbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4jc2lkZWJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gICNzaWRlYmFyIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2NjYztcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAjc2lkZWJhciAubGlzdC1ncm91cC1pdGVtOm5vdCguY29sbGFwc2VkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOyB9XG4gICNzaWRlYmFyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW1bYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOjphZnRlciB7XG4gICAgY29udGVudDogXCIgXFxmMGQ3XCI7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuICAjc2lkZWJhciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOyB9XG4gICAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXFxmMGRhXCI7XG4gICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4OyB9XG4gICNzaWRlYmFyIC5saXN0LWdyb3VwIC5jb2xsYXBzZSAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cbiAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgLmNvbGxhcHNlID4gLmNvbGxhcHNlIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDsgfVxuICAjc2lkZWJhciAubGlzdC1ncm91cCAuY29sbGFwc2UgPiAuY29sbGFwc2UgPiAuY29sbGFwc2UgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4OyB9XG4gICNzaWRlYmFyLmNvbGxhcHNlIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7IH1cbiAgI3NpZGViYXIuY29sbGFwc2luZyB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHdpZHRoOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICAjc2lkZWJhciAubGlzdC1ncm91cCAuY29sbGFwc2UuaW4sICNzaWRlYmFyIC5saXN0LWdyb3VwIC5jb2xsYXBzaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTkwcHg7IH1cbiAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjc1cmVtIC41cmVtOyB9XG4gICAgI3NpZGViYXIgLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOjphZnRlciwgI3NpZGViYXIgLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"h-100 login-bg\">\r\n    <div class=\"container h-100\">\r\n        <div class=\"row h-100\">\r\n\r\n            <div class=\"col d-flex justify-content-center align-items-center pb-5\">\r\n                <div>\r\n                    <div class=\"card rounded-0 login-wrapper pl-5 pr-5 pt-4 pb-4\">\r\n                        <div>\r\n                            <form [formGroup]=\"userForm\">\r\n                                <div>\r\n                                    <h3 class=\"text-muted text-center mb-3\">Login</h3>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" formControlName=\"username\" class=\"form-control form-control-sm\"\r\n                                        placeholder=\"User Name\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.username.errors }\" />\r\n                                    <div *ngIf=\"submitted && user.username.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"user.username.errors.required\">Username is required</div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error\" class=\"text-danger text-sm-left\">\r\n                                        <p>{{error}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group d-flex justify-content-center\">\r\n\r\n                                    <a class=\"btn btn-warning text-white rounded-0 pl-5 pr-5\" (click)=\"login()\">Login\r\n                                        <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'></i>\r\n\r\n                                    </a>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"text-center p-2\">New to FreshTrace?&nbsp;<a routerLink=\"/signup\">Sign up</a></p>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/signin/signin.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/signin/signin.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lnbmluL0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = "<!––\r\n/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\r\n––>\r\n<div class=\"h-100 login-bg\">\r\n    <div class=\"container h-100\">\r\n        <div class=\"row h-100\">\r\n            <div class=\"col d-flex justify-content-center align-items-center pb-5\">\r\n                <div>\r\n                    <div class=\"card rounded-0 login-wrapper pl-5 pr-5 pt-4 pb-4\">\r\n                        <div>\r\n                            <form [formGroup]=\"userForm\">\r\n                                <div>\r\n                                    <h3 class=\"text-muted text-center mb-3\">Sign up</h3>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" formControlName=\"username\" class=\"form-control form-control-sm\"\r\n                                        placeholder=\"User Name\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.username.errors }\" />\r\n                                    <div *ngIf=\"submitted && user.username.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"user.username.errors.required\">Username is required</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-sm\"\r\n                                        placeholder=\"Email address\" autofocus=\"\" [ngClass]=\"{ 'is-invalid': submitted && user.email.errors }\" />\r\n                                    <div *ngIf=\"submitted && user.email.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"user.email.errors.required\">Email is required</div>\r\n                                        <div *ngIf=\"user.email.errors.email\">Invalid Email address</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"error\" class=\"text-danger text-sm-left\">\r\n                                    <p>{{error}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"form-group d-flex justify-content-center\" (click)=\"signup()\"><a class=\"btn btn-warning text-white rounded-0 pl-5 pr-5\"\r\n                                        role=\"button\">Sign up\r\n                                        <i *ngIf=\"loading\" class='fa fa-circle-o-notch fa-spin'> </i>\r\n                                    </a></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"text-center p-2\">Already have an account?&nbsp;<a routerLink=\"/signin\">Login</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/ui/signup/signup.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/signup/signup.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.\r\n#\r\n# Licensed under the Apache License, Version 2.0 (the \"License\").\r\n# You may not use this file except in compliance with the License.\r\n# A copy of the License is located at\r\n#\r\n#     http://www.apache.org/licenses/LICENSE-2.0\r\n#\r\n# or in the \"license\" file accompanying this file. This file is distributed\r\n# on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\r\n# express or implied. See the License for the specific language governing\r\n# permissions and limitations under the License.\r\n#\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lnbnVwL0M6XFxCaXRuYW1pXFxtZWFuc3RhY2stMy40LjQtMFxccHJvamVjdHNcXGNsaWVudHNcXFRQLURldlxcZnJlc2h0cmFjZS1hcHAvc3JjXFxhcHBcXHVpXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Q0NjQyIsImZpbGUiOiJzcmMvYXBwL3VpL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4jIENvcHlyaWdodCAyMDE4IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiNcclxuIyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxyXG4jIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuIyBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxyXG4jXHJcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4jXHJcbiMgb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXHJcbiMgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiMgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuIyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiNcclxuKi9cclxuIiwiLypcclxuIyBDb3B5cmlnaHQgMjAxOCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4jXHJcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cclxuIyBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiMgQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcclxuI1xyXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuI1xyXG4jIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxyXG4jIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4jIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiMgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4jXHJcbiovXG4iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Bitnami\meanstack-3.4.4-0\projects\clients\TP-Dev\freshtrace-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map