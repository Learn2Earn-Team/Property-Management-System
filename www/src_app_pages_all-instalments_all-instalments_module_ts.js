"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all-instalments_all-instalments_module_ts"],{

/***/ 3502:
/*!*************************************************************************!*\
  !*** ./src/app/pages/all-instalments/all-instalments-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllInstalmentsPageRoutingModule": () => (/* binding */ AllInstalmentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _all_instalments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-instalments.page */ 755);




const routes = [
    {
        path: '',
        component: _all_instalments_page__WEBPACK_IMPORTED_MODULE_0__.AllInstalmentsPage
    }
];
let AllInstalmentsPageRoutingModule = class AllInstalmentsPageRoutingModule {
};
AllInstalmentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllInstalmentsPageRoutingModule);



/***/ }),

/***/ 34:
/*!*****************************************************************!*\
  !*** ./src/app/pages/all-instalments/all-instalments.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllInstalmentsPageModule": () => (/* binding */ AllInstalmentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _all_instalments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-instalments-routing.module */ 3502);
/* harmony import */ var _all_instalments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-instalments.page */ 755);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let AllInstalmentsPageModule = class AllInstalmentsPageModule {
};
AllInstalmentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _all_instalments_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllInstalmentsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_all_instalments_page__WEBPACK_IMPORTED_MODULE_1__.AllInstalmentsPage]
    })
], AllInstalmentsPageModule);



/***/ }),

/***/ 755:
/*!***************************************************************!*\
  !*** ./src/app/pages/all-instalments/all-instalments.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllInstalmentsPage": () => (/* binding */ AllInstalmentsPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _all_instalments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-instalments.page.html?ngResource */ 2869);
/* harmony import */ var _all_instalments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-instalments.page.scss?ngResource */ 9479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ 8167);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/share */ 8921);











let AllInstalmentsPage = class AllInstalmentsPage {
  constructor(apiCall, modal, route, global, modalController) {
    this.apiCall = apiCall;
    this.modal = modal;
    this.route = route;
    this.global = global;
    this.modalController = modalController;
    this.show = false; // public Category: any = 'Customer' ;

    this.Category = 'monthlyinstallmentDetails';
    this.by_Month = {
      i_month: ''
    };
    this.selectTabs = 'Luqman Town';
    this.sharingText = 'Please Pay Your Monthly Plot Installment';
    this.whatsappSubject = 'Installment';
    this.sharingImage = [''];
  }

  ngOnInit() {}

  refresh() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.apiCall.GetInstallmentsbymonth(this.by_Month.i_month);
    }, 1500);
  }

  select_customer_Data($event) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this.by_Month.i_month = $event.target.value;
      console.log(_this.by_Month);
      yield _this.apiCall.GetInstallmentsbymonth(_this.by_Month.i_month);
      yield _this.global.Monthlyinstallment.subscribe(res => {
        _this.See_Customer = res;
        console.log(res);
      });
    })();
  }

  sharesocial(data) {
    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(data);
      const x = JSON.stringify(data);
      yield _capacitor_share__WEBPACK_IMPORTED_MODULE_6__.Share.share({
        title: 'Monthly Installment',
        url: x,
        dialogTitle: 'Please Pay Your Monthly Plot Installment',
        text: 'Zagham'
      });
    })();
  } // Delete function of customer


  Delete_Customer(customer_id) {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        customer_id: customer_id
      };
      yield _this2.apiCall.api_del_customer(x);

      _this2.apiCall.GetInstallmentsbymonth(_this2.by_Month.i_month);

      console.log(customer_id);
    })();
  } // async view_all_installment(customer_id) {
  //   await this.apiCall.api_get_customer_by_id(customer_id)
  //   this.global.Getinstallmentbyid.subscribe(res => {
  //     console.log(res);
  //     this.installment_by_id = res; 
  //    });
  //  const modal = await this.modal.create({
  //     component: ModalPage,
  //     cssClass: 'my-modal-class',
  //     initialBreakpoint: 0.93 ,
  //     breakpoints: [0, 0.435, 0.93],
  //     componentProps: {
  //       'Category' : this.Category,
  //       'Monthly_Installment_details' : this.installment_by_id,
  //     }
  //   });
  //   console.log('modal')
  //   return await modal.present();
  // }


  seeDeatils(data) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'installmentdetails': data,
          'Category': "viewinstallmentdetails"
        }
      });
      return yield modal.present();
    })();
  }

};

AllInstalmentsPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

AllInstalmentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-all-instalments',
  template: _all_instalments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_all_instalments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AllInstalmentsPage);


/***/ }),

/***/ 8470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3656)).then(m => new m.ShareWeb())
});



/***/ }),

/***/ 9479:
/*!****************************************************************************!*\
  !*** ./src/app/pages/all-instalments/all-instalments.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".selectlist {\n  margin: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 15px;\n  border-radius: 10px;\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\nion-select {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n  width: 100%;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n\n.red {\n  color: red;\n}\n\n.red1 {\n  color: red;\n  cursor: pointer;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1pbnN0YWxtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxtREFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESjs7QUFLRTtFQUNFLFVBQUE7QUFGSjs7QUFLRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFGSiIsImZpbGUiOiJhbGwtaW5zdGFsbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHNlbGVjdG9yXHJcbi5zZWxlY3RsaXN0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYzJ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgdGh7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAucmVkMXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYmx1ZXtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 2869:
/*!****************************************************************************!*\
  !*** ./src/app/pages/all-instalments/all-instalments.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-segment class=\"m-2 p-3\"  [(ngModel)]=\"selectTabs\" mode=\"md\">\r\n  <ion-segment-button value=\"Luqman Town\">\r\n    <ion-label>Luqman Town</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"7 Star\">\r\n    <ion-label>7 Star</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment> -->\r\n\r\n<ion-content>\r\n\r\n  <div class=\"form-head bd2 bd3 ion-margin \">\r\n    <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n      <h2 class=\"font-w600 page-titles text-white\">Monthly Installments</h2>\r\n      <ion-button  (click)=\"refresh()\"  class=\"refresh_button\">\r\n        <span style=\"margin-right: 3px;\" *ngIf=\"!show\">Refresh</span>\r\n        <ion-spinner name=\"circles\" *ngIf=\"show\"></ion-spinner>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <ion-row>\r\n    <ion-col size-md=\"4\" size=\"12\"style=\"margin-left: auto;margin-right: auto;\" >\r\n      <div class=\"form-head ion-margin \">\r\n        <div class=\"me-auto w-100\">\r\n          <div class=\"d-flex flex-column\">\r\n            <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\"></h2>\r\n            <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Total Customers</h2>\r\n          </div>\r\n        </div> \r\n      </div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n<ion-row>\r\n  <ion-col size-xs=\"12\" size-md=\"4\">\r\n      <ion-item lines=\"none\">\r\n        <ion-select placeholder=\"Select Month\"  interface=\"popover\" (ionChange)=\"select_customer_Data($event)\">\r\n          <ion-select-option value=\"January\">January</ion-select-option>\r\n          <ion-select-option value=\"February\">February</ion-select-option>\r\n          <ion-select-option value=\"March\">March</ion-select-option>\r\n          <ion-select-option value=\"April\">April</ion-select-option>\r\n          <ion-select-option value=\"May\">May</ion-select-option>\r\n          <ion-select-option value=\"June\">June</ion-select-option>\r\n          <ion-select-option value=\"July\">July</ion-select-option>\r\n          <ion-select-option value=\"August\">August</ion-select-option>\r\n          <ion-select-option value=\"September\">September</ion-select-option>\r\n          <ion-select-option value=\"October\">October</ion-select-option>\r\n          <ion-select-option value=\"November\">November</ion-select-option>\r\n          <ion-select-option value=\"December\">December</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n\r\n\r\n\r\n  <ion-card class=\"c2\">\r\n    <table>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Customer Name</th>\r\n        <th>Father Name</th>\r\n        <th>CNIC</th>\r\n        <th>Mobile No</th>\r\n        <th>Installment No</th>\r\n        <th>Installment Amount</th>\r\n        <th>Remaining Amount</th>\r\n        <th>Monthly Installment</th>\r\n        <th>Installment Date</th>\r\n        <th>Upcoming Installment</th>\r\n        <th>Action</th>\r\n      </tr>\r\n     \r\n     \r\n\r\n      <tr *ngFor=\"let data of See_Customer | filter: filterTerm; index as i\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{data.name}}</td>\r\n        <td>{{data.father_name}}</td>\r\n        <td>{{data.cnic}}</td>\r\n        <td>{{data.mobile_no}}</td>\r\n        <td>{{data.installment_no}}</td>\r\n        <td>{{data.amount}}</td>\r\n        <td class=\"red\">{{data.remaining_payment}}</td>\r\n        <td class=\"blue\">{{data.per_installment}}</td>\r\n        <td class=\"red\">{{data.installment_date}}</td>\r\n        <td class=\"blue\">{{data.upcoming_installment}}</td>\r\n          <td (click)=\"seeDeatils(data)\"><span\r\n            style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">See Details</span></td>         \r\n      </tr>\r\n    </table>\r\n  </ion-card>\r\n\r\n  \r\n\r\n\r\n  <!-- <div *ngIf=\"this.selectTabs == '7 Star'\">\r\n    <div>\r\n      <div class=\"col-xl-12\">\r\n        <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n          <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n                <th>Father Name</th>\r\n                <th>CNIC</th>\r\n                <th>Mobile No</th>\r\n                <th>Address</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of See_Customer | filter: filterTerm; index as i\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{data.name}}</td>\r\n                <td>{{data.father_name}}</td>\r\n                <td>{{data.cnic}}</td>\r\n                <td>{{data.mobile_no}}</td>\r\n                <td>{{data.address}}</td>\r\n                <td>\r\n                  <ul class=\"list-unstyled hstack gap-1 mb-0\" >\r\n                    <li class=\"li1\">\r\n                      <a  class=\"btn btn-sm btn-soft-primary\"><ion-icon class=\"icon\" name=\"cash-outline\"></ion-icon></a>\r\n                  </li>\r\n                    <li (click)=\"Delete_Customer(data.customer_id)\">\r\n                        <a   data-bs-toggle=\"modal\" class=\"btn btn-sm btn-soft-danger\"><ion-icon class=\"icon\" name=\"trash-outline\"></ion-icon></a>\r\n                    </li>\r\n                    <li>\r\n                      <a   data-bs-toggle=\"modal\" class=\"btn btn-sm btn-soft-danger\"><ion-icon class=\"icon\" name=\"share-outline\"></ion-icon></a>\r\n                  </li>\r\n                </ul>\r\n                </td>           \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n  \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all-instalments_all-instalments_module_ts.js.map