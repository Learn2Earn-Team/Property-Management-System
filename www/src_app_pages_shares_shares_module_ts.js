"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_shares_shares_module_ts"],{

/***/ 293:
/*!*******************************************************!*\
  !*** ./src/app/pages/shares/shares-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharesPageRoutingModule": () => (/* binding */ SharesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shares_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shares.page */ 2040);




const routes = [
    {
        path: '',
        component: _shares_page__WEBPACK_IMPORTED_MODULE_0__.SharesPage
    }
];
let SharesPageRoutingModule = class SharesPageRoutingModule {
};
SharesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SharesPageRoutingModule);



/***/ }),

/***/ 3645:
/*!***********************************************!*\
  !*** ./src/app/pages/shares/shares.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharesPageModule": () => (/* binding */ SharesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shares_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shares-routing.module */ 293);
/* harmony import */ var _shares_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shares.page */ 2040);







let SharesPageModule = class SharesPageModule {
};
SharesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _shares_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharesPageRoutingModule
        ],
        declarations: [_shares_page__WEBPACK_IMPORTED_MODULE_1__.SharesPage]
    })
], SharesPageModule);



/***/ }),

/***/ 2040:
/*!*********************************************!*\
  !*** ./src/app/pages/shares/shares.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharesPage": () => (/* binding */ SharesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _shares_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shares.page.html?ngResource */ 633);
/* harmony import */ var _shares_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shares.page.scss?ngResource */ 5730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SharesPage = class SharesPage {
    constructor() { }
    ngOnInit() {
    }
};
SharesPage.ctorParameters = () => [];
SharesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-shares',
        template: _shares_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shares_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharesPage);



/***/ }),

/***/ 5730:
/*!**********************************************************!*\
  !*** ./src/app/pages/shares/shares.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--ion-color-primary);\n}\n\nion-content ion-input, ion-content ion-textarea, ion-content ion-select {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\nion-item {\n  --background: transparent;\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.btn {\n  width: 200px;\n  color: #fff;\n  --border-radius: 30px;\n  height: 60px;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n  --background: var(--ion-color-primary);\n}\n\n.r1 {\n  margin-top: 20px;\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFJSTtFQUNJLG1EQUFBO0FBRFI7O0FBS0U7RUFDRSx5QkFBQTtBQUZKOztBQU1FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFISjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9FO0VBQ0UsK0JBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFKSiIsImZpbGUiOiJzaGFyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQxe1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmwxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG5cclxuICAuYzF7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcblxyXG4gIC5idG57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5yMXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYzJ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgdGh7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 633:
/*!**********************************************************!*\
  !*** ./src/app/pages/shares/shares.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"property\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\n    </ion-item>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n\n  <ion-card-title class=\"t1\">Shares Data</ion-card-title>\n\n  <ion-card class=\"c1\">\n\n    <ion-row class=\"r1\">\n\n\n      <ion-col size-xs=\"6\" size-md=\"6\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"l1\">Name</ion-label>\n          <ion-input type=\"text\" placeholder=\"Enter Name\" required></ion-input>\n        </ion-item>\n      </ion-col>\n\n\n      <ion-col size-xs=\"6\" size-md=\"6\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"l1\">CNIC</ion-label>\n          <ion-input type=\"text\" placeholder=\"Enter CNIC\" required></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size-xs=\"6\" size-md=\"6\">\n\n        <div>\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" class=\"l1\">Percentage%</ion-label>\n            <ion-input type=\"number\" placeholder=\"Enter Percentage\" required></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n\n      <ion-col size-xs=\"6\" size-md=\"6\">\n\n        <div>\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" class=\"l1\">Phone no</ion-label>\n            <ion-input type=\"number\" placeholder=\"Enter Phone no\" required></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-card>\n\n  <ion-card class=\"c1\">\n\n    <ion-button expand=\"block\" class=\"btn\">Submit</ion-button>\n  </ion-card>\n\n\n  <ion-card class=\"c2\">\n    <table>\n      <tr>\n        <th>#</th>\n        <th>Name</th>\n        <th>CNIC</th>\n        <th>Percentage%</th>\n        <th>Phone no</th>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>test</td>\n        <td>36402-1023839-7</td>\n        <td>50</td>\n        <td>0317293739</td>\n      </tr>\n\n\n    </table>\n  </ion-card>\n\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\n    <path fill=\"#F6F8FC\" fill-opacity=\"1\"\n      d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\">\n    </path>\n  </svg>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shares_shares_module_ts.js.map