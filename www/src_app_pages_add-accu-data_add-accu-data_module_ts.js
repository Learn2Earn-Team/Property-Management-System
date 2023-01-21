"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-accu-data_add-accu-data_module_ts"],{

/***/ 1592:
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-accu-data/add-accu-data-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccuDataPageRoutingModule": () => (/* binding */ AddAccuDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_accu_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-accu-data.page */ 625);




const routes = [
    {
        path: '',
        component: _add_accu_data_page__WEBPACK_IMPORTED_MODULE_0__.AddAccuDataPage
    }
];
let AddAccuDataPageRoutingModule = class AddAccuDataPageRoutingModule {
};
AddAccuDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddAccuDataPageRoutingModule);



/***/ }),

/***/ 6885:
/*!*************************************************************!*\
  !*** ./src/app/pages/add-accu-data/add-accu-data.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccuDataPageModule": () => (/* binding */ AddAccuDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_accu_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-accu-data-routing.module */ 1592);
/* harmony import */ var _add_accu_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-accu-data.page */ 625);







let AddAccuDataPageModule = class AddAccuDataPageModule {
};
AddAccuDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_accu_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddAccuDataPageRoutingModule
        ],
        declarations: [_add_accu_data_page__WEBPACK_IMPORTED_MODULE_1__.AddAccuDataPage]
    })
], AddAccuDataPageModule);



/***/ }),

/***/ 625:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-accu-data/add-accu-data.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccuDataPage": () => (/* binding */ AddAccuDataPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_accu_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-accu-data.page.html?ngResource */ 6776);
/* harmony import */ var _add_accu_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-accu-data.page.scss?ngResource */ 7159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let AddAccuDataPage = class AddAccuDataPage {
  constructor(apicall, alert, global) {
    this.apicall = apicall;
    this.alert = alert;
    this.global = global;
    this.accountData = {
      type: '',
      stype: '',
      source: '',
      description: '',
      credit: '',
      debit: '',
      o_id: ''
    }; // Transaction Variables by Zagham Nadeem

    this.transaction = {
      from: '',
      to: '',
      debit: '',
      credit: '',
      type: '',
      description: ''
    };
    this.selectTabs = "Bank";
  }

  ngOnInit() {
    this.getOwner();
  } //  Get Owners


  getOwner() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.apicall.api_getOwner();
      yield _this.global.Owner.subscribe(owner => {
        _this.owners = owner;
      });
    })();
  } //  Select Owner


  selectFrom($event) {
    console.log($event.target.value);
    this.transaction.from = $event.target.value.id;
    console.log(this.transaction);
  }

  selectTo($event) {
    console.log($event.target.value);
    this.transaction.to = $event.target.value.id;
    console.log(this.transaction);
  } // Select Account Transaction Type


  selectTypeTransaction($event) {
    console.log($event.target.value);
    this.type = $event.target.value;
    this.transaction.type = $event.target.value;
    this.transaction.to = this.transaction.from;
  }

  submitAccounts() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        message: 'Are you sure?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            _this2.handlerMessage = 'Alert canceled';
          }
        }, {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            _this2.handlerMessage = 'Alert confirmed';

            if (_this2.accountData.credit == '') {
              _this2.accountData.credit = 0;
              console.log(_this2.accountData.credit);
            } else if (_this2.accountData.debit == '') {
              _this2.accountData.debit = 0;
              console.log(_this2.accountData.debit);
            }

            console.log(_this2.transaction);

            _this2.apicall.api_insert_accounts(_this2.transaction);

            _this2.transaction = {
              from: '',
              to: '',
              type: '',
              description: '',
              credit: '',
              debit: ''
            };
          }
        }]
      });
      yield alert.present();
    })();
  }

  submitKhata() {}

};

AddAccuDataPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

AddAccuDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-add-accu-data',
  template: _add_accu_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_accu_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddAccuDataPage);


/***/ }),

/***/ 7159:
/*!************************************************************************!*\
  !*** ./src/app/pages/add-accu-data/add-accu-data.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--ion-color-primary);\n}\n\nion-content ion-input, ion-content ion-textarea, ion-content ion-select {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\nion-item {\n  --background: transparent;\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.btn {\n  width: 200px;\n  color: #fff;\n  --border-radius: 30px;\n  height: 60px;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n  --background: var(--ion-color-primary);\n}\n\n.r1 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2N1LWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBSUk7RUFDSSxtREFBQTtBQURSOztBQUtFO0VBQ0UseUJBQUE7QUFGSjs7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSEo7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtBQUpKIiwiZmlsZSI6ImFkZC1hY2N1LWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQxe1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmwxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG5cclxuICAuYzF7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcblxyXG4gIC5idG57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5yMXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 6776:
/*!************************************************************************!*\
  !*** ./src/app/pages/add-accu-data/add-accu-data.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Add Account Data</ion-card-title>\r\n\r\n\r\n  <ion-card class=\"c1\">\r\n\r\n      <ion-row class=\"r1\">\r\n        \r\n        \r\n  <ion-col size-xs=\"6\" size-md=\"6\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">From</ion-label>\r\n      <ion-select mode=\"ios\"  interface=\"popover\" placeholder=\"Select type\"  (ionChange)=\"selectFrom($event)\">\r\n        <ion-select-option *ngFor=\"let owner of owners\"  [value]=\"{name: owner.name, id: owner.a_id}\">{{owner.name}}</ion-select-option>               \r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"6\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Type</ion-label>\r\n      <ion-select mode=\"ios\"  interface=\"action-sheet\" placeholder=\"Select type\"  (ionChange)=\"selectTypeTransaction($event)\">\r\n        <ion-select-option value =\"transaction\">Transaction</ion-select-option> \r\n        <ion-select-option value =\"asset\">Assets</ion-select-option> \r\n        <ion-select-option value =\"expense\">Expense</ion-select-option>               \r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"12\" size-md=\"12\">\r\n\r\n    <div *ngIf=\"type == 'expense'\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Sub Expense</ion-label>\r\n      <ion-select mode=\"ios\"  interface=\"action-sheet\" placeholder=\"Select type\" [(ngModel)]=\"transaction.description\">\r\n        <ion-select-option value=\"Staff Salary\">Staff Salary</ion-select-option>\r\n        <ion-select-option value=\"Shop 25,26\">Shop 25,26</ion-select-option>\r\n        <ion-select-option value=\"Kitchen Expense\">Kitchen Expense</ion-select-option>\r\n        <ion-select-option value=\"Petrol\">Petrol</ion-select-option>\r\n        <ion-select-option value=\"Sewerage Account\">Sewerage Account</ion-select-option>\r\n        <ion-select-option value=\"Electricity Bill\">Electricity Bill</ion-select-option>\r\n        <ion-select-option value=\"Commercial Share 7 Star\">Commercial Share</ion-select-option>\r\n        <ion-select-option value=\"Commercial Share Rana Waseem\">Commercial Share</ion-select-option>\r\n        <ion-select-option value=\"Bajri Mix\">Bajri Mix</ion-select-option>\r\n        <ion-select-option value=\"Park Account\">Park Account</ion-select-option>\r\n        <ion-select-option value=\"Town Road Tar Labour Expense\">Town Road ,Tar, Labour Expense</ion-select-option>\r\n        <ion-select-option value=\"Msajid Account\">Msajid Account</ion-select-option>\r\n        <ion-select-option value=\"Mutual Account\">Mutual Account</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    </div>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"12\" size-md=\"12\">\r\n\r\n    <div *ngIf=\"type == 'transaction'\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">To</ion-label>\r\n      <ion-select mode=\"ios\"  interface=\"action-sheet\" placeholder=\"Select type\"  (ionChange)=\"selectTo($event)\">\r\n        <ion-select-option *ngFor=\"let owner of owners\"  [value]=\"{name: owner.name, id: owner.a_id}\">{{owner.name}}</ion-select-option>               \r\n      </ion-select>\r\n    </ion-item>\r\n    </div>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"6\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Credit</ion-label>\r\n    <ion-input type=\"number\" placeholder=\"Enter Amount\" [(ngModel)]=\"transaction.credit\"  required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"6\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Debit</ion-label>\r\n    <ion-input type=\"number\" placeholder=\"Enter Amount\" [(ngModel)]=\"transaction.debit\" required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"6\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Description</ion-label>\r\n    <ion-textarea placeholder=\"Type something here\" [autoGrow]=\"true\" [(ngModel)]=\"transaction.description\" required></ion-textarea>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"c1\">\r\n\r\n      <ion-button expand=\"block\" class=\"btn\" (click)=\"submitAccounts()\">Submit</ion-button>\r\n      </ion-card>\r\n      \r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-accu-data_add-accu-data_module_ts.js.map