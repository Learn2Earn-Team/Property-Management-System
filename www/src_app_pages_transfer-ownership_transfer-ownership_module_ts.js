"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_transfer-ownership_transfer-ownership_module_ts"],{

/***/ 4112:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/transfer-ownership/transfer-ownership-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferOwnershipPageRoutingModule": () => (/* binding */ TransferOwnershipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _transfer_ownership_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-ownership.page */ 8413);




const routes = [
    {
        path: '',
        component: _transfer_ownership_page__WEBPACK_IMPORTED_MODULE_0__.TransferOwnershipPage
    }
];
let TransferOwnershipPageRoutingModule = class TransferOwnershipPageRoutingModule {
};
TransferOwnershipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferOwnershipPageRoutingModule);



/***/ }),

/***/ 3123:
/*!***********************************************************************!*\
  !*** ./src/app/pages/transfer-ownership/transfer-ownership.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferOwnershipPageModule": () => (/* binding */ TransferOwnershipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _transfer_ownership_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-ownership-routing.module */ 4112);
/* harmony import */ var _transfer_ownership_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-ownership.page */ 8413);







let TransferOwnershipPageModule = class TransferOwnershipPageModule {
};
TransferOwnershipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transfer_ownership_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferOwnershipPageRoutingModule
        ],
        declarations: [_transfer_ownership_page__WEBPACK_IMPORTED_MODULE_1__.TransferOwnershipPage]
    })
], TransferOwnershipPageModule);



/***/ }),

/***/ 8413:
/*!*********************************************************************!*\
  !*** ./src/app/pages/transfer-ownership/transfer-ownership.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferOwnershipPage": () => (/* binding */ TransferOwnershipPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _transfer_ownership_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-ownership.page.html?ngResource */ 4775);
/* harmony import */ var _transfer_ownership_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfer-ownership.page.scss?ngResource */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toasts/toast.service */ 5473);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.page */ 8167);












let TransferOwnershipPage = class TransferOwnershipPage {
  constructor(route, apicall, toast, global, modal) {
    this.route = route;
    this.apicall = apicall;
    this.toast = toast;
    this.global = global;
    this.modal = modal;
    this.show = 'false';
    this.addt_ownership = {
      b_id: '',
      p_id: '',
      customer_id: '',
      t_customer_id: '',
      t_total_payment: '',
      t_advance: '',
      t_total_installment: '',
      t_remaining_payment: '',
      t_granter_name: '',
      t_granter_mobileno: '',
      t_granter_cnic: '',
      t_granter_cnic_img: '',
      t_witness_name: '',
      t_witness_mobileno: '',
      t_witness_cnic: '',
      t_witness_cnic_img: ''
    };
    this.selected_customer = 0;
    this.lastluqmaninstallments = 0;
    this.last7starinstallments = 0;
    this.Category = 'View all installment';
    this.selectTabs = 'Baba Fareed';
  }

  ngOnInit() {
    this.get_Plot();
    this.get_Customer();
  }

  get_bookedplots($event) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      yield _this.apicall.api_getbooked_plots($event.target.value);
      yield _this.global.BookedProperties.subscribe(res => {
        _this.p_no = res;
      });
      console.log(_this.p_no[0].p_id);
      yield _this.apicall.api_getlast_InstallmentByp_id(_this.p_no[0].p_id);

      _this.get_last_install();
    })();
  }

  get_last_install() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.selectTabs == 'Baba Fareed') {
        _this2.global.LumanTownInstallments.subscribe(res => {
          console.log(res);
          _this2.lastluqmaninstallments = res[0];
          console.log(_this2.lastluqmaninstallments);
          _this2.addt_ownership.b_id = _this2.lastluqmaninstallments.b_id;
          _this2.addt_ownership.p_id = _this2.lastluqmaninstallments.p_id;
          _this2.addt_ownership.customer_id = _this2.lastluqmaninstallments.customer_id;
          console.log(_this2.lastluqmaninstallments);
          console.log(_this2.addt_ownership.customer_id);
          console.log('Baba Fareed');
        });
      } // if(this.selectTabs == '7 Star'){
      //   this.global._7Starinstallments.subscribe(res => {
      //     console.log(res);
      //     this.last7starinstallments = res[0];  
      //     console.log(this.last7starinstallments);
      //     this.addt_ownership.b_id = this.last7starinstallments.b_id;
      //     this.addt_ownership.p_id = this.last7starinstallments.p_id;
      //     this.addt_ownership.customer_id = this.last7starinstallments.customer_id;
      //      console.log(this.last7starinstallments);
      //      console.log(this.addt_ownership.customer_id);
      //     console.log('7 Star');
      //    });
      // }
      else {
        console.log('no plots');
      }
    })();
  }

  view_all_installment(id) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.apicall.api_getInstallmentByp_id(id);

      _this3.global.Getinstallmentbyid.subscribe(res => {
        console.log(res);
        _this3.installment_by_id = res;
      });

      const modal = yield _this3.modal.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__.ModalPage,
        cssClass: 'my-modal-class',
        initialBreakpoint: 0.93,
        breakpoints: [0, 0.435, 0.93],
        componentProps: {
          'Category': _this3.Category,
          'Installment_details': _this3.installment_by_id
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

  firstwitness_cnic() {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt,
        allowEditing: false
      });
      document.getElementById('cameraImage1').setAttribute('src', `data:image/${image.format};base64,` + image.base64String);
      console.log(image.base64String);
      _this4.addt_ownership.t_granter_cnic_img = image.base64String;
    })();
  }

  secondwitness_cnic() {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt,
        allowEditing: true
      });
      document.getElementById('cameraImage2').setAttribute('src', `data:image/${image.format};base64,` + image.base64String);
      console.log(image.base64String);
      _this5.addt_ownership.t_witness_cnic_img = image.base64String;
    })();
  }

  Property() {
    this.route.navigate(['property']);
  }

  Plot() {
    this.route.navigate(['plots']);
  }

  T_ownership() {
    this.route.navigate(['transfer-ownership']);
  }

  Home() {
    this.route.navigate(['home']);
  }

  get_Plot() {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.apicall.api_getPlots();

      _this6.global.Plots.subscribe(user => {
        console.log(user);
        _this6.Plot_Data = user;
      });
    })();
  }

  get_Customer() {
    var _this7 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.apicall.api_get_customer();

      yield _this7.global.Customer.subscribe(data => {
        console.log(data);
        _this7.Customer_Data = data;
      });
    })();
  }

  select_plot($event) {
    var _this8 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);

      _this8.apicall.api_get_plot_by_id($event.target.value);

      _this8.global.Get_plot_byid.subscribe(res => {
        console.log(res);
        _this8.selected_plot = res;
        _this8.show = 'true';
      });
    })();
  }

  select_customer($event) {
    var _this9 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      yield _this9.apicall.api_get_customer_by_id($event.target.value);

      _this9.global.Get_customer_byid.subscribe(res => {
        console.log(res);
        _this9.selected_customer = res[0];
        console.log(_this9.selected_customer);
        _this9.addt_ownership.t_customer_id = _this9.selected_customer.customer_id;
        console.log(_this9.addt_ownership.t_customer_id);
      });
    })();
  }

  totalamount($event) {
    this.amounttotal = $event.target.value;
    console.log(this.amounttotal);
    console.log($event.target.value);
  }

  advanceamount($event) {
    this.advanceAmount = $event.target.value;
    console.log(this.advanceAmount);
    this.addt_ownership.t_remaining_payment = this.amounttotal - this.advanceAmount;
    console.log(this.addt_ownership.t_remaining_payment);
  }

  transfer_plot() {
    var _this10 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this10.addt_ownership);
      yield _this10.apicall.api_insert_transfer(_this10.addt_ownership);
      document.getElementById('cameraImage1').setAttribute('src', '');
      document.getElementById('cameraImage2').setAttribute('src', '');
      _this10.addt_ownership = {
        b_id: '',
        p_id: '',
        customer_id: '',
        t_customer_id: '',
        t_total_payment: '',
        t_advance: '',
        t_total_installment: '',
        t_remaining_payment: '',
        t_granter_name: '',
        t_granter_mobileno: '',
        t_granter_cnic: '',
        t_granter_cnic_img: '',
        t_witness_name: '',
        t_witness_mobileno: '',
        t_witness_cnic: '',
        t_witness_cnic_img: ''
      };
    })();
  }

};

TransferOwnershipPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService
}, {
  type: src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

TransferOwnershipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-transfer-ownership',
  template: _transfer_ownership_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_transfer_ownership_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TransferOwnershipPage);


/***/ }),

/***/ 436:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/transfer-ownership/transfer-ownership.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.t2 {\n  text-align: left;\n  font-size: 17px;\n  color: #000;\n  margin-bottom: 40px;\n  letter-spacing: 1px;\n  font-weight: 410;\n  z-index: 1;\n  margin-top: 10px;\n}\n\n.t3 {\n  margin: 25px;\n  font-weight: 410;\n  z-index: 1;\n}\n\n.st1 {\n  text-align: left;\n  margin-top: 20px;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: 400;\n  z-index: 1;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--ion-color-primary);\n}\n\nion-content ion-input {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\nion-item {\n  --background: transparent;\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.srch1 {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 30px;\n  max-width: 300px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --placeholder-color: var(--ion-color-primary);\n  display: inline-block;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.srch2 {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 30px;\n  max-width: 300px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  --placeholder-color: var(--ion-color-primary);\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n}\n\n.img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--ion-color-primary);\n  object-fit: cover;\n}\n\n.img1 {\n  height: 100px;\n  width: 100px;\n  border-radius: 20px;\n  background: transparent;\n  object-fit: cover;\n}\n\n.btn {\n  width: 200px;\n  height: 60px;\n  --border-radius: 30px;\n  margin-left: auto;\n  color: #fff;\n  margin-right: auto;\n  margin-top: 20px;\n  z-index: 1;\n  --background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLW93bmVyc2hpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFLSTtFQUNJLG1EQUFBO0FBRlI7O0FBTUU7RUFDRSx5QkFBQTtBQUhKOztBQU9FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFKSjs7QUFPRTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQVFFO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBU0U7RUFDRSwrQkFBQTtBQU5KOztBQVVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFXRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBUkoiLCJmaWxlIjoidHJhbnNmZXItb3duZXJzaGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50MXtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG5cclxuICAudDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MTA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC50M3tcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MTA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnN0MXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmwxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmMxe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5zcmNoMXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5zcmNoMntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJsdWV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG5cclxuICAuaW1nMXtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5idG57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9Il19 */";

/***/ }),

/***/ 4775:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/transfer-ownership/transfer-ownership.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Transfer Ownership</ion-card-title>\r\n\r\n\r\n\r\n  <ion-row>\r\n\r\n  <ion-col size=\"6\">\r\n    <ion-input class=\"srch1\" placeholder=\"Search Plot\" type=\"number\" (ionChange)=\"get_bookedplots($event)\" ></ion-input>\r\n  </ion-col>\r\n  \r\n    <ion-col size=\"6\">\r\n    <ion-select class=\"srch2\" placeholder=\"Select Customer\" interface=\"popover\" (ionChange)=\"select_customer($event)\">\r\n      <ion-select-option *ngFor=\"let allcustomer of Customer_Data\" value=\"{{allcustomer.customer_id}}\">{{allcustomer.name}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n    </ion-col>\r\n  \r\n  </ion-row>\r\n  <ion-card class=\"c1\" *ngIf=\"this.lastluqmaninstallments != 0\">\r\n    \r\n\r\n    <ion-card-title class=\"t3\">Plot Details</ion-card-title>\r\n\r\n    <img src=\"{{this.lastluqmaninstallments.plot_img}}\" class=\"img\">\r\n\r\n    <ion-row>\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Plot No</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.plot_no}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Type</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.type}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Customer</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.name}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Status</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.status}}</ion-card-title>\r\n    </ion-col>\r\n    \r\n        <ion-col size=\"3\">\r\n          <ion-card-title class=\"st1\">Advance Amount</ion-card-title>\r\n          <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.advance}}</ion-card-title>\r\n        </ion-col>\r\n    \r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Total Amount</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.total_payment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Total Installments</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{this.lastluqmaninstallments.total_installment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Remaining Installments</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{(this.lastluqmaninstallments.total_installment) - (this.lastluqmaninstallments.installment_no)}}</ion-card-title>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">All Installments</ion-card-title>\r\n      <ion-button (click)=\"view_all_installment(detail.p_id)\" class=\"btn1\" style=\"float: left;\"> View</ion-button>\r\n    </ion-col>\r\n\r\n    \r\n\r\n\r\n    </ion-row>\r\n\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"c1\" *ngIf=\" this.selected_customer  != 0\">\r\n\r\n      <ion-card-title class=\"t3\">Customer Details</ion-card-title>\r\n\r\n      <img src=\"{{this.selected_customer.cnic_img}}\" class=\"img\">\r\n  \r\n      <ion-row>\r\n  \r\n      <ion-col size=\"3\">\r\n        <ion-card-title class=\"st1\">Name</ion-card-title>\r\n        <ion-card-title class=\"t2\">{{this.selected_customer.name}}</ion-card-title>\r\n      </ion-col>\r\n  \r\n  \r\n      <ion-col size=\"3\">\r\n        <ion-card-title class=\"st1\">Father Name</ion-card-title>\r\n        <ion-card-title class=\"t2\">{{this.selected_customer.father_name}}</ion-card-title>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"3\">\r\n        <ion-card-title class=\"st1\">Cnic</ion-card-title>\r\n        <ion-card-title class=\"t2\"> {{this.selected_customer.cnic}}</ion-card-title>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"3\">\r\n        <ion-card-title class=\"st1\">Mobile No</ion-card-title>\r\n        <ion-card-title class=\"t2\">{{this.selected_customer.mobile_no}}</ion-card-title>\r\n      </ion-col>\r\n  \r\n\r\n      <ion-col size=\"3\">\r\n        <ion-card-title class=\"st1\">Address</ion-card-title>\r\n        <ion-card-title class=\"t2\"> {{this.selected_customer.address}}</ion-card-title>\r\n      </ion-col>\r\n  \r\n  \r\n      </ion-row>\r\n  \r\n      </ion-card>\r\n  \r\n\r\n      <ion-card class=\"c1\">\r\n\r\n\r\n      <ion-card-title class=\"t1\">Payment Details</ion-card-title>\r\n\r\n        <ion-row>\r\n          \r\n          \r\n    <ion-col size-xs=\"6\" size-md=\"3\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Total Amount</ion-label>\r\n      <ion-input placeholder=\"Enter Total Amount\" required [(ngModel)]=\"addt_ownership.t_total_payment\" (ionChange)=\"totalamount($event)\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Advance Amount</ion-label>\r\n      <ion-input placeholder=\"Enter Advance Amount\" [(ngModel)]=\"addt_ownership.t_advance\"\r\n      (ionChange)=\"advanceamount($event)\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Remaining Amount</ion-label>\r\n      <ion-input placeholder=\"-/12345\" [(ngModel)]=\"addt_ownership.t_remaining_payment\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Total Installments</ion-label>\r\n      <ion-input placeholder=\"Enter size\" [(ngModel)]=\"addt_ownership.t_total_installment\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <ion-card class=\"c1\">\r\n\r\n\r\n        <ion-card-title class=\"t1\">First Witness Details</ion-card-title>\r\n  \r\n        <ion-item lines=\"none\">\r\n          <img (click)=\"firstwitness_cnic()\" src=\"./../../../assets/images.png\" id=\"cameraImage1\" class=\"img1\">\r\n        </ion-item>\r\n\r\n          <ion-row>\r\n            \r\n            \r\n      <ion-col size-xs=\"6\" size-md=\"4\">\r\n        <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"l1\">Name</ion-label>\r\n        <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"addt_ownership.t_granter_name\" ></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n  \r\n  \r\n      <ion-col size-xs=\"6\" size-md=\"4\">\r\n        <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"l1\">Cnic</ion-label>\r\n        <ion-input placeholder=\"Enter Cnic\" [(ngModel)]=\"addt_ownership.t_granter_cnic\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n  \r\n  \r\n      <ion-col size-xs=\"6\" size-md=\"4\">\r\n        <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"l1\">Mobile No</ion-label>\r\n        <ion-input placeholder=\"Enter Mobile no\" [(ngModel)]=\"addt_ownership.t_granter_mobileno\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n  \r\n\r\n  \r\n      \r\n  \r\n          </ion-row>\r\n        </ion-card>\r\n  \r\n\r\n        <ion-card class=\"c1\">\r\n\r\n\r\n          <ion-card-title class=\"t1\">Second Witness Details</ion-card-title>\r\n    \r\n          <ion-item lines=\"none\">\r\n            <img (click)=\"secondwitness_cnic()\" src=\"./../../../assets/images.png\" id=\"cameraImage2\" class=\"img1\">\r\n          </ion-item>\r\n  \r\n            <ion-row>\r\n              \r\n              \r\n        <ion-col size-xs=\"6\" size-md=\"4\">\r\n          <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"l1\">Name</ion-label>\r\n          <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"addt_ownership.t_witness_name\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n    \r\n    \r\n        <ion-col size-xs=\"6\" size-md=\"4\">\r\n          <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"l1\">Cnic</ion-label>\r\n          <ion-input placeholder=\"Enter Cnic\" [(ngModel)]=\"addt_ownership.t_witness_cnic\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n    \r\n    \r\n        <ion-col size-xs=\"6\" size-md=\"4\">\r\n          <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"l1\">Mobile No</ion-label>\r\n          <ion-input placeholder=\"Enter Mobile no\" [(ngModel)]=\"addt_ownership.t_witness_mobileno\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n    \r\n  \r\n    \r\n        \r\n    \r\n            </ion-row>\r\n          </ion-card>\r\n    \r\n          <ion-card class=\"c1\">\r\n\r\n            <ion-button expand=\"block\" class=\"btn\" (click)=\"transfer_plot()\">Transfer</ion-button>\r\n            </ion-card>\r\n            \r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transfer-ownership_transfer-ownership_module_ts.js.map