"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_property_property_module_ts"],{

/***/ 7548:
/*!***********************************************************!*\
  !*** ./src/app/pages/property/property-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyPageRoutingModule": () => (/* binding */ PropertyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.page */ 2638);




const routes = [
    {
        path: '',
        component: _property_page__WEBPACK_IMPORTED_MODULE_0__.PropertyPage
    }
];
let PropertyPageRoutingModule = class PropertyPageRoutingModule {
};
PropertyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropertyPageRoutingModule);



/***/ }),

/***/ 4117:
/*!***************************************************!*\
  !*** ./src/app/pages/property/property.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyPageModule": () => (/* binding */ PropertyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-routing.module */ 7548);
/* harmony import */ var _property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.page */ 2638);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/copy-right/copy-right.component */ 100);









let PropertyPageModule = class PropertyPageModule {
};
PropertyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _property_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropertyPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_property_page__WEBPACK_IMPORTED_MODULE_1__.PropertyPage, src_app_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_3__.CopyRightComponent]
    })
], PropertyPageModule);



/***/ }),

/***/ 2638:
/*!*************************************************!*\
  !*** ./src/app/pages/property/property.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyPage": () => (/* binding */ PropertyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.page.html?ngResource */ 9823);
/* harmony import */ var _property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.page.scss?ngResource */ 9882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PropertyPage = class PropertyPage {
    constructor(route) {
        this.route = route;
        this.P_Card = [
            { img: '../../../assets/icon/Propert Icons/Plot4.png', title: 'Add Plot', icn: "duplicate", path: 'add-plot' },
            { img: '../../../assets/icon/Propert Icons/seeplot1.png', title: 'All Plots', icn: "business", path: 'see-plot' },
            { img: './../../../assets/icon/Propert Icons/Booking5.png', title: 'Only Booked Plots', icn: "bag-check", path: 'see-booking' },
            { img: './../../../assets/icon/Propert Icons/instalment.png', title: 'Instalment', icn: "card", path: 'instalment' },
            { img: './../../../assets/icon/Propert Icons/Account3.png', title: 'Monthly Installments', icn: "card", path: 'all-instalments' },
            { img: './../../../assets/icon/Propert Icons/transfer_ownership.png', title: 'Transfer Ownership', icn: "documents", path: 'transfer-ownership' },
            { img: './../../../assets/icon/Add Customer/Add customer3.png', title: 'Add Customer', icn: "person-add", path: 'add-customer' },
            { img: './../../../assets/icon/Add Customer/See customer.png', title: 'Customer', icn: "search", path: 'see-customer' },
            { icn: 'add', title: 'Add Data', path: 'add-accu-data' },
            { icn: 'bar-chart', title: 'See Data', path: 'see-accu-data' },
            { icn: 'arrow-redo', title: 'Shares', path: 'shares' }
            // {img:'./../../../assets/icon/Propert Icons/instalment.png',title:'Instalment',path:'instalment'},
            // {img:'./../../../assets/icon/Propert Icons/transfer_ownership.png',title:'Transfer Ownership',path:'transfer-ownership'}, 
            // {img:'./../../../assets/icon/Propert Icons/add.png',title:'Add Data',path:'add-accu-data'},
            // {img:'./../../../assets/icon/Propert Icons/graph.png',title:'See Data' , path:'see-accu-data'},
            // {img:'../../../assets/icon/Propert Icons/Plot4.png',title:'Plots' , path:'plots'},
            // {img:'./../../../assets/icon/Propert Icons/Booking5.png',title:'Booking',path:'booking'},
            // {img:'./../../../assets/icon/Propert Icons/Customers5.png',title:'Customer',path:'customers'},
            // {img:'./../../../assets/icon/Propert Icons/Account3.png',title:'Account',path:'accounts'},
        ];
    }
    ngOnInit() {
    }
    details(item) {
        this.route.navigate([item]);
    }
    Property() {
        this.route.navigate(['property']);
    }
    Home() {
        this.route.navigate(['home']);
    }
};
PropertyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PropertyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-property',
        template: _property_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_property_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyPage);



/***/ }),

/***/ 9882:
/*!**************************************************************!*\
  !*** ./src/app/pages/property/property.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-content {\n  --background: #fff;\n  text-align: center;\n}\n\nion-card {\n  margin: 0;\n  --background: transparent;\n  z-index: 1;\n}\n\nsvg {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  z-index: 0;\n}\n\n.c1 {\n  --background: var(--ion-color-primary);\n  color: #fff;\n  max-width: 260px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  margin-top: 20px;\n  font-weight: bold;\n  box-shadow: var(--ion-color-primary) 0px 25px 50px -12px;\n  cursor: pointer;\n}\n\n.c1 ion-item {\n  padding: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  --background: transparent;\n  color: #fff;\n}\n\n.st1 {\n  color: #fff;\n  margin-top: 20px;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: 1px;\n  font-size: 30px;\n}\n\n.t1 {\n  margin: 25px;\n  text-align: left;\n}\n\n.icn1 {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdFO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFJRTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0EsZUFBQTtBQURKOztBQUVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRiIsImZpbGUiOiJwcm9wZXJ0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlciBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICBzdmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmMxe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMHB4IDI1cHggNTBweCAtMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4uc3Qxe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnQxe1xyXG4gIG1hcmdpbjogMjVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNuMXtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 9823:
/*!**************************************************************!*\
  !*** ./src/app/pages/property/property.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-icon class=\"icn\" name=\"storefront\"></ion-icon>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-card-title class=\"t1\">Property</ion-card-title>\r\n\r\n  <ion-row>\r\n    <ion-col size-xs=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let P of P_Card | filter:filterTerm\">\r\n      <ion-card class=\"c1\" (click)=\"details(P.path)\">\r\n        \r\n        <ion-item lines=\"none\">\r\n          <ion-icon name=\"{{P.icn}}-outline\" class=\"icn1\"></ion-icon>\r\n          <ion-label>{{P.title}}</ion-label>\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-item>\r\n        \r\n      </ion-card>\r\n    </ion-col>    \r\n  </ion-row>\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_property_property_module_ts.js.map