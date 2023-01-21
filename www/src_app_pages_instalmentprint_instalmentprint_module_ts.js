"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_instalmentprint_instalmentprint_module_ts"],{

/***/ 7991:
/*!*************************************************************************!*\
  !*** ./src/app/pages/instalmentprint/instalmentprint-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentprintPageRoutingModule": () => (/* binding */ InstalmentprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _instalmentprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instalmentprint.page */ 5146);




const routes = [
    {
        path: '',
        component: _instalmentprint_page__WEBPACK_IMPORTED_MODULE_0__.InstalmentprintPage
    }
];
let InstalmentprintPageRoutingModule = class InstalmentprintPageRoutingModule {
};
InstalmentprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InstalmentprintPageRoutingModule);



/***/ }),

/***/ 1660:
/*!*****************************************************************!*\
  !*** ./src/app/pages/instalmentprint/instalmentprint.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentprintPageModule": () => (/* binding */ InstalmentprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ 1365);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _instalmentprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instalmentprint-routing.module */ 7991);
/* harmony import */ var _instalmentprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instalmentprint.page */ 5146);








let InstalmentprintPageModule = class InstalmentprintPageModule {
};
InstalmentprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ngx_print__WEBPACK_IMPORTED_MODULE_7__.NgxPrintModule,
            _instalmentprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstalmentprintPageRoutingModule
        ],
        declarations: [_instalmentprint_page__WEBPACK_IMPORTED_MODULE_1__.InstalmentprintPage]
    })
], InstalmentprintPageModule);



/***/ }),

/***/ 5146:
/*!***************************************************************!*\
  !*** ./src/app/pages/instalmentprint/instalmentprint.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentprintPage": () => (/* binding */ InstalmentprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _instalmentprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instalmentprint.page.html?ngResource */ 8447);
/* harmony import */ var _instalmentprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instalmentprint.page.scss?ngResource */ 7630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InstalmentprintPage = class InstalmentprintPage {
    constructor() {
        this.data = { p_id: '', customer_id: '', customer_name: '', installment_no: '', amount: '', remaning_payment: '', upcoming_installment: '', a_id: '', discount: '' };
    }
    ngOnInit() {
        this.data = history.state.data;
        console.log(this.data);
    }
};
InstalmentprintPage.ctorParameters = () => [];
InstalmentprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-instalmentprint',
        template: _instalmentprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_instalmentprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InstalmentprintPage);



/***/ }),

/***/ 7630:
/*!****************************************************************************!*\
  !*** ./src/app/pages/instalmentprint/instalmentprint.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".dev1 {\n  display: none;\n}\n\n.list1 {\n  display: flex;\n  justify-content: center;\n}\n\n.list2 {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 57px;\n}\n\n.ddd {\n  width: 250px;\n}\n\nbutton {\n  background-color: #0093e9;\n  color: white;\n  border-radius: 5px;\n  width: 40%;\n  height: 40px;\n}\n\ntable {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d12 {\n  border: 1px solid black;\n  width: 100%;\n  display: flex;\n}\n\nth {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbG1lbnRwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7QUFNSiIsImZpbGUiOiJpbnN0YWxtZW50cHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldjF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5saXN0MXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGlzdDJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogNTdweDtcclxufVxyXG4uZGRke1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICBcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M2U5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG50YWJsZXtcclxuICAgXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZDEye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxudGh7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8447:
/*!****************************************************************************!*\
  !*** ./src/app/pages/instalmentprint/instalmentprint.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <div class=\"col-xl-12\" >\r\n      <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n        <table class=\"table table-hover display mb-4 dataTablesCard  card-table\">\r\n          <thead>\r\n            <tr class=\" text-clr1\">\r\n              <th>Plot No</th>\r\n              <th>Installment No</th>\r\n              <th>Name </th>\r\n              <th>Type</th>            \r\n              <th>Size(Marla)</th>\r\n              <th>Price</th>    \r\n              <th>installment Amount</th>       \r\n              <th>Remaining Payment</th>\r\n              <th>Installment Date</th>\r\n              <th>Next installment Date</th>\r\n              <th>Total Installment</th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\" text-clr\" >\r\n              <td>{{this.data.plot_no}} </td>\r\n              <td>{{this.data.installment_no}} </td>\r\n              <td>{{this.data.name}}</td>\r\n              <td>{{this.data.type}}</td>\r\n              \r\n              <td>{{this.data.area_marla}}</td>\r\n              <td>{{this.data.price}}</td>\r\n              <td>{{this.data.amount}}</td>\r\n              <td>{{this.data.remaning_payment}}</td>\r\n              <td>{{this.data.installment_date}}</td>\r\n             \r\n              <td> {{this.data.upcoming_installment}}</td>\r\n              <td> {{this.data.total_installment}}</td>\r\n              \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n \r\n  <div id=\"demoint\" class=\"dev1\">\r\n    <div class=\"dev1\" id=\"devdate\">\r\n      <h4 class=\"name\" id=\"name\">\r\n        Date:\r\n      </h4>\r\n      <div class=\"div51\" id=\"date\">\r\n        <p>\r\n          {{this.data.installment_date}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"d4\" id=\"d4\">\r\n      <div class=\"dev1\" id=\"dev2\">\r\n\r\n        <img src=\"../../../assets/Baba Farid Smart Valley Logo.png\" alt=\"\" id=\"img\">\r\n      </div>\r\n\r\n\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Plot NO:\r\n\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n          <p>\r\n            {{this.data.plot_no}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Plot Size:\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n\r\n          <p>\r\n            {{this.data.area_marla}} Marla\r\n          </p>\r\n\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Type:\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n          <p>\r\n            {{this.data.type}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Name of Purchaser:\r\n        </h4>\r\n        <div class=\"div4\" id=\"div4\">\r\n          <p>\r\n            {{this.data.name}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Total Amount:\r\n        </h4>\r\n        <div class=\"div5\" id=\"div5\">\r\n          <p>\r\n            {{this.data.price}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"name\" id=\"name\">\r\n          Discount:\r\n        </h4>\r\n        <div class=\"div5\" id=\"discount\">\r\n          <p>\r\n            {{this.data.discount}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"name\" id=\"name\">\r\n          Net Amount:\r\n        </h4>\r\n        <div class=\"div5\" id=\"net\">\r\n          <p>\r\n            {{this.data.price - this.data.discount}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Total Installment:\r\n\r\n        </h4>\r\n        <div class=\"div6\" id=\"div6\">\r\n          <p>\r\n            {{this.data.total_installment}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Remainig Installment:\r\n        </h4>\r\n        <div class=\"div7\" id=\"div7\">\r\n          <p>\r\n            {{this.data.total_installment - this.data.installment_no}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Current Installment No:\r\n        </h4>\r\n        <div class=\"div9\" id=\"inst\">\r\n          <p>\r\n            {{this.data.installment_no}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Installment Amount:\r\n        </h4>\r\n        <div class=\"div9\" id=\"div9\">\r\n          <p>\r\n            {{this.data.amount}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Remaining Amount:\r\n        </h4>\r\n        <div class=\"div10\" id=\"div10\">\r\n          <p>\r\n            {{this.data.remaning_payment}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Next Installment Date:\r\n        </h4>\r\n        <div class=\"div12\" id=\"div12\">\r\n          {{this.data.upcoming_installment}}\r\n        </div>\r\n      </div>\r\n      <div class=\"sign\" id=\"sign\">\r\n        <div id=\"mainsin\">\r\n          <div id=\"cssign\">\r\n\r\n          </div>\r\n          <h4 id=\"name\">\r\n            Customer Sign\r\n          </h4>\r\n        </div>\r\n        <div id=\"mainsin\">\r\n          <div id=\"float\">\r\n            <div id=\"msign\">\r\n\r\n            </div>\r\n            <h4 id=\"name\">\r\n              Managing Direcor\r\n            </h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"footer\">\r\n        <span id=\"spanf1\"> Cell# 03006150619 PH# 0457 38 35 41<br>\r\n          ADDRESS: Sahiwal Road Near Baba Farid Rice Mills Pakpattan<br>\r\n          G-MAIL: babafareedsmartvalley@gmail.com\r\n        </span>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ion-list class=\"list1\">\r\n    <button styleSheetFile=\"assets/css/installprint.css\" printSectionId=\"demoint\" ngxPrint>Export</button>\r\n  </ion-list>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_instalmentprint_instalmentprint_module_ts.js.map