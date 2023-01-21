"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_accounts_accounts_module_ts"],{

/***/ 8015:
/*!***********************************************************!*\
  !*** ./src/app/pages/accounts/accounts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageRoutingModule": () => (/* binding */ AccountsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page */ 4296);




const routes = [
    {
        path: '',
        component: _accounts_page__WEBPACK_IMPORTED_MODULE_0__.AccountsPage
    }
];
let AccountsPageRoutingModule = class AccountsPageRoutingModule {
};
AccountsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsPageRoutingModule);



/***/ }),

/***/ 3218:
/*!***************************************************!*\
  !*** ./src/app/pages/accounts/accounts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageModule": () => (/* binding */ AccountsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 8015);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page */ 4296);







let AccountsPageModule = class AccountsPageModule {
};
AccountsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsPageRoutingModule
        ],
        declarations: [_accounts_page__WEBPACK_IMPORTED_MODULE_1__.AccountsPage]
    })
], AccountsPageModule);



/***/ }),

/***/ 4296:
/*!*************************************************!*\
  !*** ./src/app/pages/accounts/accounts.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPage": () => (/* binding */ AccountsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page.html?ngResource */ 605);
/* harmony import */ var _accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page.scss?ngResource */ 9887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let AccountsPage = class AccountsPage {
    constructor(route) {
        this.route = route;
        this.B_Card = [
            { icon: 'add-outline', title: 'Add Data', path: 'add-accu-data' },
            { icon: 'bar-chart-outline', title: 'See Data', path: 'see-accu-data' },
            // {icon:'git-compare-outline',title:'See Ledgers' , path:'see-ledgers'}
        ];
    }
    ngOnInit() {
    }
    details(item) {
        console.log(item);
        this.route.navigate([item]);
    }
};
AccountsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AccountsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-accounts',
        template: _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountsPage);



/***/ }),

/***/ 9887:
/*!**************************************************************!*\
  !*** ./src/app/pages/accounts/accounts.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#fff ;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-row ion-col ion-card {\n  width: 85%;\n  text-align: center;\n  --background: #fff;\n  box-shadow: none;\n  border-radius: 17px;\n}\n\nion-row ion-col ion-card ion-icon {\n  margin: 10px;\n  font-size: 90px;\n}\n\nion-row ion-col img {\n  height: 90px;\n  padding: 8px;\n}\n\nion-row ion-col p {\n  margin-top: 2px;\n  font-size: 16px;\n}\n\n.list {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKOztBQUFZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRWhCOztBQURnQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR3BCOztBQUFZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFaEI7O0FBQVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVoQjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmIDtcclxufVxyXG5pb24tcm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubGlzdHtcclxuICAgIGhlaWdodDogODBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 605:
/*!**************************************************************!*\
  !*** ./src/app/pages/accounts/accounts.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\"  mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n   \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \r\n      <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n     \r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  mode=\"ios\">\r\n  \r\n  <div class=\"form-head list bd3 bd2 ion-margin \">\r\n    <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n      <h2 class=\"text-white font-w600 page-titles\">Accounts</h2>\r\n    </div> \r\n  </div>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-lg=\"2.5\"  *ngFor=\"let P of B_Card\">\r\n      <ion-card class=\"bd3\" (click)=\"details(P.path)\">\r\n        <ion-icon class=\"text-white\" name={{P.icon}}></ion-icon>\r\n        <p class=\"text-white\">{{P.title}}</p>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_accounts_accounts_module_ts.js.map