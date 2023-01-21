"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_see-accu-data_see-accu-data_module_ts"],{

/***/ 795:
/*!*********************************************************************!*\
  !*** ./src/app/pages/see-accu-data/see-accu-data-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeAccuDataPageRoutingModule": () => (/* binding */ SeeAccuDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _see_accu_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-accu-data.page */ 4785);




const routes = [
    {
        path: '',
        component: _see_accu_data_page__WEBPACK_IMPORTED_MODULE_0__.SeeAccuDataPage
    }
];
let SeeAccuDataPageRoutingModule = class SeeAccuDataPageRoutingModule {
};
SeeAccuDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeeAccuDataPageRoutingModule);



/***/ }),

/***/ 6867:
/*!*************************************************************!*\
  !*** ./src/app/pages/see-accu-data/see-accu-data.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeAccuDataPageModule": () => (/* binding */ SeeAccuDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _see_accu_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-accu-data-routing.module */ 795);
/* harmony import */ var _see_accu_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-accu-data.page */ 4785);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 1365);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-print-element */ 3412);










let SeeAccuDataPageModule = class SeeAccuDataPageModule {
};
SeeAccuDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _see_accu_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeeAccuDataPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintModule,
            ngx_print_element__WEBPACK_IMPORTED_MODULE_9__.NgxPrintElementModule
        ],
        declarations: [_see_accu_data_page__WEBPACK_IMPORTED_MODULE_1__.SeeAccuDataPage]
    })
], SeeAccuDataPageModule);



/***/ }),

/***/ 4785:
/*!***********************************************************!*\
  !*** ./src/app/pages/see-accu-data/see-accu-data.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeAccuDataPage": () => (/* binding */ SeeAccuDataPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _see_accu_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-accu-data.page.html?ngResource */ 8456);
/* harmony import */ var _see_accu_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-accu-data.page.scss?ngResource */ 389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toasts/toast.service */ 5473);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print-element */ 3412);










let SeeAccuDataPage = class SeeAccuDataPage {
  constructor(apicall, global, toast, print) {
    this.apicall = apicall;
    this.global = global;
    this.toast = toast;
    this.print = print;
    this.totalnetBalance = 0;
    this.totalDebit = 0;
    this.totalCredit = 0;
    this.show = false;
    this.postDate = {
      start: '',
      end: ''
    };
    this.postAlltypes = {
      type: '',
      stype: '',
      source: ''
    };
    this.selectTabs = 'Bank';
    this.maine_dene_hain = 0;
    this.maine_lene_hain = 0;
    this.transaction = {
      a_id: '',
      type: ''
    };
    this.expences = {
      a_id: '',
      type: '',
      description: ''
    };
    this.style = {
      'tr': {
        border: '1px solid black'
      }
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.apicall.api_getOwner();
      yield _this.global.Owner.subscribe(owner => {
        console.log(owner);
        _this.owners = owner[0];
        console.log(_this.owners);
      });
      yield _this.apicall.Get_alltransaction(_this.owners.a_id);
      yield _this.global.Alltransactions.subscribe(res => {
        _this.all_data_main = res[0];
        console.log(res);
        console.log(_this.all_data_main);
        _this.totalnetBalance_main = res[0];
        _this.totalDebit_main = res[1];
        _this.totalCredit_main = res[2];
        console.log(_this.totalnetBalance_main);
        console.log(_this.totalDebit_main);
        console.log(_this.totalCredit_main);
      });
    })();
  } //  Select Owner


  selectFrom($event) {
    console.log($event.target.value);
    this.transaction.a_id = $event.target.value.id;
    this.expences.a_id = $event.target.value.id;
    console.log(this.transaction);
  } // Select Account Transaction Type


  selectTypeTransaction($event) {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this2.type = $event.target.value;

      if ($event.target.value == 'transaction') {
        _this2.transaction.type = $event.target.value;
        yield _this2.apicall.api_gettransactionsbymainaccount(_this2.transaction);
        yield _this2.getalltranstions();
      }

      if ($event.target.value == 'asset') {
        _this2.transaction.type = $event.target.value;
        yield _this2.apicall.api_gettransactionsbymainaccount(_this2.transaction);
        yield _this2.getalltranstions();
      }

      if ($event.target.value == 'installments') {
        _this2.transaction.type = $event.target.value;
        yield _this2.apicall.api_gettransactionsbymainaccount(_this2.transaction);
        yield _this2.getalltranstions();
      }

      if ($event.target.value == 'bookings') {
        _this2.transaction.type = $event.target.value;
        yield _this2.apicall.api_gettransactionsbymainaccount(_this2.transaction);
        yield _this2.getalltranstions();
      } else {
        console.log('please select correct type');
        _this2.expences.type = $event.target.value;
      }
    })();
  }

  getbyExpense($event) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this3.expences.description = $event.target.value;
      console.log(_this3.expences);
      yield _this3.apicall.api_gettransactionsbyexpense(_this3.expences);
      yield _this3.getalltranstions();
    })();
  } // all balance by select value


  getalltranstions() {
    this.global.Alltransactions.subscribe(res => {
      this.alltypeData = res[0];
      console.log(res[0]);
      console.log(this.alltypeData);

      if (res[0] == '') {
        console.log('sorry no data found ');
        this.toast.nodatafound();
      } else {
        this.Account_details = res[0];
        this.totalDebit = res[1][0];
        this.totalCredit = res[2][0];
        this.totalnetBalance = res[3][0];
        console.log(this.Account_details);
        console.log(this.totalCredit);
        console.log(this.totalDebit);
        console.log(this.totalnetBalance);
      }
    });
  } // all balance without select value top
  //  gettransactions_all(){
  // }


  getAllAccountsData() {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.apicall.api_get_all_accounts();

      _this4.global.StoreAllaccounts.subscribe(res => {
        _this4.alltypeData = res[0];

        if (res[0] == '') {
          console.log('sorry no data found ');

          _this4.toast.nodatafound();
        } else {
          _this4.Account_details = res[0];
          _this4.totalDebit = res[1][0];
          _this4.totalCredit = res[2][0];
          _this4.totalnetBalance = res[3][0];
          console.log(_this4.Account_details);
          console.log(_this4.totalCredit);
          console.log(_this4.totalDebit);
          console.log(_this4.totalnetBalance);
        }
      });
    })();
  }

  getbyType($event) {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this5.postAlltypes.type = $event.target.value;
      console.log(_this5.postAlltypes.type);

      if ($event.target.value == 'all') {
        yield _this5.apicall.api_get_all_accounts();
      } else {
        yield _this5.apicall.api_getaccountsBytype($event.target.value);
      }
    })();
  }

  getbyStype($event) {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this6.postAlltypes.stype = $event.target.value;
      console.log(_this6.postAlltypes.stype);

      if ($event.target.value == 'all') {
        yield _this6.apicall.api_get_all_accounts();
      } else {
        yield _this6.apicall.api_getaccountsBystype($event.target.value);
      }
    })();
  }

  getbySource($event) {
    var _this7 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      const x = $event.target.value;
      _this7.postAlltypes.source = $event.target.value;
      console.log(_this7.postAlltypes.source); // await this.apicall.api_getaccountsByalltype(this.postAlltypes);

      if ($event.target.value == 'all') {
        yield _this7.apicall.api_get_all_accounts();
      } else {
        yield _this7.apicall.api_getaccountsBysource($event.target.value);
      }
    })();
  }

  getAlltypeaccount() {
    var _this8 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this8.postAlltypes);
      yield _this8.apicall.api_getaccountsByalltype(_this8.postAlltypes);
    })();
  }

  refresh() {
    var _this9 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.show = true;
      setTimeout(() => {
        _this9.show = false; // this.apicall.api_get_all_accounts();

        const x = [];

        _this9.global.store_alltransactions(x);

        _this9.totalDebit = '';
        _this9.totalCredit = '';
        _this9.totalnetBalance = '';
        _this9.toDate = '';
        _this9.fromDate = '';
        _this9.postDate.start = '';
        _this9.postDate.end = '';
        _this9.slectType = '';
        _this9.slectOwner = '';
        _this9.slectStype = '';
        _this9.slectSource = '';
        _this9.selectdate = '';
      }, 1500);
    })();
  }

  segmentChanged(ev) {
    console.log('Segment changed', ev);
  }

  formatDate(value) {
    console.log(value);
    this.fromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(value), 'yyyy-MM-dd');
    console.log(this.fromDate);
    this.postDate.start = this.fromDate;
  }

  todate(toDate) {
    console.log(toDate);
    this.toDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(toDate), 'yyyy-MM-dd');
    console.log(this.toDate);
    this.postDate.end = this.toDate;
    this.apicall.api_getaccountsBydate(this.postDate);
  }

  getKhata() {
    var _this10 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.apicall.api_getallkhata();

      _this10.global.Allkhata.subscribe(khata => {
        console.log(khata);
        _this10.allkhataData = khata[0];
        _this10.maine_lene_hain = khata[1][0];
        _this10.maine_dene_hain = khata[2][0];
      });
    })();
  }

};

SeeAccuDataPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: ngx_print_element__WEBPACK_IMPORTED_MODULE_8__.NgxPrintElementService
}];

SeeAccuDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-see-accu-data',
  template: _see_accu_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_see_accu_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SeeAccuDataPage);


/***/ }),

/***/ 389:
/*!************************************************************************!*\
  !*** ./src/app/pages/see-accu-data/see-accu-data.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.t2 {\n  margin: 25px;\n  margin-bottom: 0;\n  color: #fff;\n  z-index: 1;\n  text-align: left;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--ion-color-primary);\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n\nion-content ion-input, ion-content ion-textarea, ion-content ion-select {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 30px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.c3 {\n  --background: var(--ion-color-primary);\n  box-shadow: var(--ion-color-primary) 0px 25px 50px -12px;\n  z-index: 1;\n}\n\n.st1 {\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: 1px;\n  text-align: left;\n  margin-left: 25px;\n  margin-bottom: 25px;\n  font-size: 16px;\n}\n\n.red {\n  color: red;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1hY2N1LWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBRjs7QUFJRTtFQUNJLG1EQUFBO0FBRE47O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0Usc0NBQUE7RUFDQSx3REFBQTtFQUNBLFVBQUE7QUFGRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7QUFERiIsImZpbGUiOiJzZWUtYWNjdS1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50MXtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50MntcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sMXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIFxyXG59XHJcblxyXG4uYzJ7XHJcbiAgei1pbmRleDogMTtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG50aHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0e1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jMXtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmMze1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwcHggMjVweCA1MHB4IC0xMnB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnN0MXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnICwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yZWR7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 8456:
/*!************************************************************************!*\
  !*** ./src/app/pages/see-accu-data/see-accu-data.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">All Accounts</ion-card-title>\r\n  <!-- main Balance -->\r\n  <ion-row >\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"4\" *ngFor=\"let data2 of totalnetBalance_main\">\r\n      <ion-card class=\"c3\"> \r\n        <ion-card-title class=\"t2\">Rs.{{this.data2.netbalance}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st1\">Total Net Balance</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n  \r\n    <ion-col size-xs=\"12\" size-md=\"4\" *ngFor=\"let data3 of totalCredit_main\">\r\n      <ion-card class=\"c3\"> \r\n        <ion-card-title class=\"t2\">Rs.{{this.data3.total_credit}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st1\">Total Credit Balance</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n  \r\n    <ion-col size-xs=\"12\" size-md=\"4\" *ngFor=\"let data4 of  totalDebit_main\">\r\n      <ion-card class=\"c3\"> \r\n        <ion-card-title class=\"t2\">Rs.{{this.data4.total_debit}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st1\">Total Debit Balance</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n  \r\n    </ion-row>\r\n  \r\n\r\n\r\n\r\n  <ion-card class=\"c1\">\r\n\r\n    <ion-row class=\"r1\">\r\n\r\n      <ion-col size-xs=\"6\" size-md=\"6\">\r\n        <ion-item lines=\"none\" style=\"border-radius:10px;\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Name</ion-label>\r\n      <ion-select mode=\"ios\"  interface=\"popover\" [(ngModel)]=\"slectOwner\" placeholder=\"Select type\"  (ionChange)=\"selectFrom($event)\">\r\n        <ion-select-option *ngFor=\"let owner of owners\"  [value]=\"{name: owner.name, id: owner.a_id}\">{{owner.name}}</ion-select-option>               \r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-col>\r\n      \r\n<ion-col size-xs=\"6\" size-md=\"6\">\r\n  <ion-item lines=\"none\" style=\"border-radius:10px;\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Type</ion-label>\r\n    <ion-select mode=\"ios\"  interface=\"popover\" placeholder=\"Select type\" [(ngModel)]=\"slectType\" (ionChange)=\"selectTypeTransaction($event)\">\r\n      <ion-select-option value =\"transaction\">Transaction</ion-select-option> \r\n      <ion-select-option value =\"asset\">Assets</ion-select-option> \r\n      <ion-select-option value =\"installments\">Installments</ion-select-option> \r\n      <ion-select-option value =\"bookings\">Booking</ion-select-option> \r\n      <ion-select-option value =\"expense\">Expense</ion-select-option>               \r\n    </ion-select>\r\n  </ion-item>\r\n</ion-col>\r\n\r\n\r\n<ion-col size-xs=\"6\" size-md=\"6\" *ngIf=\"this.type == 'expense'\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Sub expense</ion-label>\r\n    <ion-select mode=\"ios\"  interface=\"popover\" [(ngModel)]=\"slectSource\" placeholder=\"Sub Expense\" (ionChange)=\"getbyExpense($event)\" #stype>\r\n      <ion-select-option value=\"Staff Salary\">Staff Salary</ion-select-option>\r\n      <ion-select-option value=\"Shop 25,26\">Shop 25,26</ion-select-option>\r\n      <ion-select-option value=\"Kitchen Expense\">Kitchen Expense</ion-select-option>\r\n      <ion-select-option value=\"Petrol\">Petrol</ion-select-option>\r\n      <ion-select-option value=\"Sewerage Account\">Sewerage Account</ion-select-option>\r\n      <ion-select-option value=\"Electricity Bill\">Electricity Bill</ion-select-option>\r\n      <ion-select-option value=\"Commercial Share 7 Star\">Commercial Share</ion-select-option>\r\n      <ion-select-option value=\"Commercial Share Rana Waseem\">Commercial Share</ion-select-option>\r\n      <ion-select-option value=\"Bajri Mix\">Bajri Mix</ion-select-option>\r\n      <ion-select-option value=\"Park Account\">Park Account</ion-select-option>\r\n      <ion-select-option value=\"Town Road Tar Labour Expense\">Town Road ,Tar, Labour Expense</ion-select-option>\r\n      <ion-select-option value=\"Msajid Account\">Msajid Account</ion-select-option>\r\n      <ion-select-option value=\"Mutual Account\">Mutual Account</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-col>\r\n\r\n</ion-row>\r\n\r\n</ion-card>\r\n\r\n\r\n\r\n<ion-row>\r\n\r\n  <!-- <ion-col size-xs=\"12\" size-md=\"4\">\r\n    <ion-card class=\"c3\"> \r\n      <ion-card-title class=\"t2\">Rs.{{this.totalnetBalance.netbalance}}</ion-card-title>\r\n      <ion-card-subtitle class=\"st1\">Net Balance</ion-card-subtitle> \r\n    </ion-card>\r\n  </ion-col> -->\r\n\r\n  <ion-col size-xs=\"12\" size-lg=\"6\" size-md=\"6\">\r\n    <ion-card class=\"c3\"> \r\n      <ion-card-title class=\"t2\">Rs.{{this.totalCredit.total_credit}}</ion-card-title>\r\n      <ion-card-subtitle class=\"st1\">Credit Balance</ion-card-subtitle> \r\n    </ion-card>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"12\" size-lg=\"6\"  size-md=\"6\">\r\n    <ion-card class=\"c3\"> \r\n      <ion-card-title class=\"t2\">Rs.{{this.totalDebit.total_debit}}</ion-card-title>\r\n      <ion-card-subtitle class=\"st1\">Debit Balance</ion-card-subtitle> \r\n    </ion-card>\r\n  </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <ion-card class=\"c2\">\r\n    <table>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Account</th>\r\n        <th>Type</th>\r\n        <th>Description</th>\r\n        <th>Credit</th>\r\n        <th>Debit</th>\r\n        <th>Net Balance</th>\r\n        <th>Date</th>\r\n      </tr>\r\n      <tr *ngFor=\"let data of Account_details | filter: filterTerm; index as i\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{data.name}}</td>\r\n        <td>{{data.type}}</td>\r\n        <td>{{data.description}}</td>\r\n        <td class=\"blue\">Rs.{{data.credit}}</td>\r\n        <td class=\"red\">Rs.{{data.debit}}</td>\r\n        <td>Rs.{{data.netbalance}}</td>\r\n        <td>{{data.date}}</td>    \r\n      </tr>\r\n     \r\n      \r\n    </table>\r\n  </ion-card>\r\n\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_see-accu-data_see-accu-data_module_ts.js.map