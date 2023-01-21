"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customers_customers_module_ts"],{

/***/ 1930:
/*!*************************************************************!*\
  !*** ./src/app/pages/customers/customers-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageRoutingModule": () => (/* binding */ CustomersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page */ 6120);




const routes = [
    {
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_0__.CustomersPage
    }
];
let CustomersPageRoutingModule = class CustomersPageRoutingModule {
};
CustomersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomersPageRoutingModule);



/***/ }),

/***/ 6056:
/*!*****************************************************!*\
  !*** ./src/app/pages/customers/customers.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageModule": () => (/* binding */ CustomersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-routing.module */ 1930);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page */ 6120);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let CustomersPageModule = class CustomersPageModule {
};
CustomersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_1__.CustomersPage]
    })
], CustomersPageModule);



/***/ }),

/***/ 6120:
/*!***************************************************!*\
  !*** ./src/app/pages/customers/customers.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPage": () => (/* binding */ CustomersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page.html?ngResource */ 8761);
/* harmony import */ var _customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page.scss?ngResource */ 9106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let CustomersPage = class CustomersPage {
    constructor(route) {
        this.route = route;
        this.P_Card = [
            { img: './../../../assets/icon/Add Customer/Add customer3.png', title: 'Add Customer', path: 'add-customer' },
            { img: './../../../assets/icon/Add Customer/See customer.png', title: 'See Customer', path: 'see-customer' },
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
    Plot() {
        this.route.navigate(['plots']);
    }
    Customer() {
        this.route.navigate(['customers']);
    }
    Home() {
        this.route.navigate(['home']);
    }
};
CustomersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CustomersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-customers',
        template: _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomersPage);



/***/ }),

/***/ 9106:
/*!****************************************************************!*\
  !*** ./src/app/pages/customers/customers.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  justify-content: center;\n}\nion-row ion-col ion-card {\n  text-align: center;\n  --background: var(--ion-color-secondary);\n  box-shadow: 2px 2px 6px 2px rgba(40, 40, 177, 0.19);\n  color: white;\n  border-radius: 17px;\n}\nion-row ion-col img {\n  height: 90px;\n  padding: 8px;\n}\nion-row ion-col p {\n  margin-top: 2px;\n  font-size: 16px;\n}\n.list {\n  width: auto;\n  background: #624dcb;\n  height: 80px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n.page-titles {\n  margin-top: 0.125rem;\n}\n.d-flex {\n  display: flex !important;\n}\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKO0FBQ1k7RUFDSSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDaEI7QUFDWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ2hCO0FBQ1k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNoQjtBQUtBO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBSEo7QUFLQTtFQUNJLG9CQUFBO0FBRko7QUFJQTtFQUNJLHdCQUFBO0FBREo7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQUo7QUFFQTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBRUo7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBR0o7QUFEQTtFQUNJLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUlKO0FBRkE7RUFDSTtJQUNJLGdCQUFBO0VBS047QUFDRjtBQUhBO0VBQ0k7SUFDSSxnQkFBQTtFQUtOO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3d7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDJweCByZ2IoNDAgNDAgMTc3IC8gMTklKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaGVhZGVyXHJcbi5saXN0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM2MjRkY2I7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBsb3R7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtOyAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wYWdle1xyXG4gICAgY29sb3I6ICM4Mjg2OTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG59XHJcbi5wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAyMzcgMjQ4KTtcclxuICAgIGNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTQgMjIxIDI0Mik7XHJcbn1cclxuLnJhZGl1c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNiNGNiODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjRjYjg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 8761:
/*!****************************************************************!*\
  !*** ./src/app/pages/customers/customers.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n   \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \r\n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons> \r\n\r\n     \r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 50px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col  size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Customers</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\"(click)=\"Home()\" ><a class=\"text\">Home</a></li>\r\n              <li class=\"breadcrumb-item \"(click)=\"Property()\" ><a class=\"plot\">Property</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"Customer()\"><a class=\"page\" >Customers</a></li>\r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size-lg=\"1.3\" size-md=\"1.7\" size=\"\" (click)=\"Refresh()\">\r\n          <a  class=\"btn btn-primary top rounded primary light me-3\">Refresh</a>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-lg=\"2.5\"  *ngFor=\"let P of P_Card | filter:filterTerm\">\r\n      <ion-card (click)=\"details(P.path)\">\r\n        <img src=\"{{P.img}}\" alt=\"\">\r\n        <p>{{P.title}}</p>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_customers_module_ts.js.map