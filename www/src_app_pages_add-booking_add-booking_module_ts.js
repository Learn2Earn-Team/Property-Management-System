"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-booking_add-booking_module_ts"],{

/***/ 2643:
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-booking/add-booking-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookingPageRoutingModule": () => (/* binding */ AddBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-booking.page */ 2424);




const routes = [
    {
        path: '',
        component: _add_booking_page__WEBPACK_IMPORTED_MODULE_0__.AddBookingPage
    }
];
let AddBookingPageRoutingModule = class AddBookingPageRoutingModule {
};
AddBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddBookingPageRoutingModule);



/***/ }),

/***/ 9037:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-booking/add-booking.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookingPageModule": () => (/* binding */ AddBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-booking-routing.module */ 2643);
/* harmony import */ var _add_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-booking.page */ 2424);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print-element */ 3412);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 1365);









let AddBookingPageModule = class AddBookingPageModule {
};
AddBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBookingPageRoutingModule,
            ngx_print_element__WEBPACK_IMPORTED_MODULE_7__.NgxPrintElementModule,
            ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintModule
        ],
        declarations: [_add_booking_page__WEBPACK_IMPORTED_MODULE_1__.AddBookingPage]
    })
], AddBookingPageModule);



/***/ }),

/***/ 2424:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-booking/add-booking.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookingPage": () => (/* binding */ AddBookingPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-booking.page.html?ngResource */ 9226);
/* harmony import */ var _add_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-booking.page.scss?ngResource */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);










let AddBookingPage = class AddBookingPage {
  constructor(apiCall, route, global) {
    this.apiCall = apiCall;
    this.route = route;
    this.global = global;
    this.isEnabled = false;
    this.customer_T = [{
      plot: 'Plot No'
    }, {
      location: 'Location'
    }, {
      status: 'Status'
    }, {
      number: 'Phone Number'
    }, {
      t_amount: 'Total Amount'
    }, {
      r_amount: 'Remaning Amount'
    }, {
      t_instalment: 'Toatal Instalments'
    }, {
      r_instalment: 'Remaining Instalments'
    }];
    this.config = {
      printMode: 'template-popup',
      popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
      pageTitle: 'Luqman Town',
      templateString: '{{printBody}}<footer>Luqman Town</footer>',
      stylesheets: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
      }],
      styles: ['img { height: 100px;width:100px; }', 'div.small.break1 { margin-right:300px color: red; }', 'div.span.break1 { margin-right:100px color: red; }', 'header, table, footer { margin: auto; text-align: center; }']
    };
    this.booking_details = {
      user: {
        name: "",
        father_name: "",
        cnic: "",
        cnic_img: "",
        mobile_no: "",
        address: "",
        query: ""
      },
      bookingData: {
        p_id: null,
        customer_name: "",
        total_payment: null,
        advance: null,
        discount: null,
        total_installment: null,
        remaining_payment: null,
        per_installment: null,
        booking_date: "",
        upcoming_installment: "",
        granter_name: "",
        granter_mobileno: "",
        granter_cnic: "",
        granter_cnic_img: "",
        i_month: ""
      },
      a_id: ''
    };
  }

  ngOnInit() {
    this.data = history.state.data;
    this.booking_details.bookingData.p_id = this.data.p_id;

    if (this.data.plot == "Luqman Town") {
      this.booking_details.a_id = 1;
    }

    if (this.data.plot == "7 Star") {
      this.booking_details.a_id = 2;
    }

    this.booking_details.bookingData.total_payment = this.data.price;
    console.log(this.data); // this.Get_Customer();
    // this.netxdate();
  }

  totalamount($event) {
    this.amounttotal = $event.target.value;
    console.log(this.amounttotal);
    console.log($event.target.value);
  }

  discountamount($event) {
    this.totaldiscount = $event.target.value; // const percent = this.amounttotal * (this.totaldiscount/100);

    this.totaldiscountpayment = this.amounttotal - this.totaldiscount;
    this.booking_details.bookingData.remaining_payment = this.totaldiscountpayment;
    console.log(this.totaldiscount);
    console.log(this.totaldiscountpayment);
    console.log($event.target.value);
  }

  advanceamount($event) {
    this.advancepayment = $event.target.value;
    console.log(this.advancepayment);
    this.booking_details.bookingData.remaining_payment = this.totaldiscountpayment - this.advancepayment;
    console.log(this.booking_details.bookingData.remaining_payment);
  }

  Permonthinstallment($event) {
    this.monthlyInstallment = $event.target.value;
    console.log(this.monthlyInstallment);
    this.booking_details.bookingData.per_installment = this.booking_details.bookingData.remaining_payment / this.booking_details.bookingData.total_installment;
    console.log(this.booking_details.bookingData.per_installment);
  }

  month($event) {
    console.log($event.target.value);
    this.booking_details.bookingData.i_month = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])($event.target.value), 'MMMM');
    console.log(this.booking_details.bookingData.i_month);
  } // Insert function for Plot_Data


  Add_Plot_Data() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.booking_details.bookingData.customer_name = _this.booking_details.user.name;
      console.log(_this.booking_details);
      yield _this.apiCall.api_insert_booking(_this.booking_details);
      _this.booking_details = {
        user: {
          name: "",
          father_name: "",
          cnic: "",
          cnic_img: "",
          mobile_no: "",
          address: "",
          query: ""
        },
        bookingData: {
          p_id: null,
          customer_name: "",
          total_payment: null,
          advance: null,
          discount: null,
          total_installment: null,
          remaining_payment: null,
          per_installment: null,
          booking_date: "",
          upcoming_installment: "",
          granter_name: "",
          granter_mobileno: "",
          granter_cnic: "",
          granter_cnic_img: "",
          i_month: ""
        }
      };

      _this.route.navigate(['see-booking']);
    })();
  } // async Export() {
  //   this.booking_details.bookingData.customer_name = this.booking_details.user.name;
  //   console.log(this.booking_details);
  //   await this.apiCall.api_insert_booking(this.booking_details);
  //   this.booking_details={ 
  //     user:
  //     {
  //       name: "",
  //       father_name: "",
  //       cnic: "",
  //       cnic_img: "",
  //       mobile_no: "",
  //       address: "",
  //       query:"",
  //     },
  //     bookingData: 
  //     {
  //       p_id: null,
  //       customer_name: "",
  //       total_payment: null,
  //       advance: null,
  //       discount: null,
  //       total_installment: null,
  //       remaining_payment: null,
  //       per_installment: null,
  //       booking_date:"",
  //       granter_name: "",
  //       granter_mobileno: "",
  //       granter_cnic: "",
  //       granter_cnic_img: "",
  //       i_month:"",
  //     }
  //   }
  //   this.route.navigate(['see-booking']);
  // }
  //  // Get function for customer
  //  async Get_Customer() {
  //   this.apiCall.api_get_customer();
  //   await this.global.Customer.subscribe(data => {
  //     this.get_Customer = data;
  //     console.log(this.get_Customer);
  //    });
  //  }
  // granter_cnic_img


  granter_img() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt
      });
      document.getElementById('cameraImage2').setAttribute('src', `data:image/${img.format};base64,` + img.base64String);
      console.log(img.base64String);
      _this2.booking_details.bookingData.granter_cnic_img = img.base64String;
    })();
  } // user cnic img


  user_cnic() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt
      });
      _this3.customering = `data:image/${img.format};base64,` + img.base64String;
      document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,` + img.base64String);
      console.log(img.base64String);
      _this3.booking_details.user.cnic_img = img.base64String;
    })();
  }

  Check() {
    console.log(this.booking_details);
  }

  select_plot($event) {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this4.booking_details.customer_id = $event.target.value.customer_id;
      _this4.booking_details.customer_name = $event.target.value.customer_name;
      console.log(_this4.booking_details.customer_id);
      _this4.isEnabled = true;
    })();
  }

  Property() {
    this.route.navigate(['property']);
  }

  booking() {
    this.route.navigate(['booking']);
  }

  Home() {
    this.route.navigate(['home']);
  }

  booking_plot() {
    this.route.navigate(['booking-plot']);
  }

  add_book() {
    this.route.navigate(['add-booking']);
  }

  Refresh() {
    this.apiCall.api_getPlots();
  }

};

AddBookingPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}];

AddBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-booking',
  template: _add_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddBookingPage);


/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 5131:
/*!********************************************************************!*\
  !*** ./src/app/pages/add-booking/add-booking.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".select {\n  border-radius: 10px;\n  margin: 10px;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  ion-item {\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n\n@media (min-width: 769px) {\n  ion-item {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 8px;\n    border-radius: 10px;\n  }\n  .mainlist ion-col {\n    margin-left: 27px;\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n\n@media (min-width: 769px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 15px;\n    border-radius: 10px;\n    height: 350px;\n    padding-left: 85px;\n  }\n  .mainlist ion-col {\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n\nion-label {\n  color: #7e7e7e !important;\n  font-size: 0.875em;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n  margin-bottom: 0.5rem !important;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .toolbar {\n    margin-left: -24px;\n  }\n}\n\n@media (min-width: 769px) {\n  .toolbar {\n    margin-left: -39px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 508px) {\n  .label1 {\n    margin-right: 16px;\n  }\n  .btn4 {\n    margin-right: 34px;\n  }\n}\n\n@media (min-width: 509px) and (max-width: 768px) {\n  .label1 {\n    margin-right: 63px;\n  }\n  .btn4 {\n    margin-right: 34px;\n  }\n}\n\n@media (min-width: 769px) {\n  .btn3 {\n    margin-right: 70px;\n  }\n  .label1 {\n    margin-right: 35px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .col {\n    margin-left: 15px;\n  }\n}\n\n@media (min-width: 769px) {\n  .col {\n    margin-left: 13px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .col2 {\n    margin-left: 15px;\n  }\n}\n\n@media (min-width: 769px) {\n  .col2 {\n    margin-left: 42px;\n  }\n}\n\n@media (min-width: 769px) {\n  .card2 {\n    padding-left: 90px;\n    padding-right: 50px;\n  }\n}\n\n.list {\n  width: auto;\n  background: #624dcb;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 8px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n\n.page-titles {\n  margin-top: 0.125rem;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n\n@media (min-width: 550px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  ion-item {\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n\n@media (min-width: 769px) {\n  ion-item {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 8px;\n    border-radius: 10px;\n  }\n  .mainlist ion-col {\n    margin-left: 27px;\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n\n@media (min-width: 769px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 15px;\n    border-radius: 10px;\n    height: 350px;\n    padding-left: 85px;\n  }\n  .mainlist ion-col {\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n\nion-label {\n  color: #7e7e7e !important;\n  font-size: 0.875em;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n  margin-bottom: 0.5rem !important;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .toolbar {\n    margin-left: -24px;\n  }\n}\n\n@media (min-width: 769px) {\n  .toolbar {\n    margin-left: -39px;\n  }\n}\n\nion-card {\n  margin-top: 40px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 10px;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  ion-card ion-input {\n    border: 1px solid #7e7e7e;\n    border-radius: 10px;\n    margin-top: 15px;\n    font-weight: 500;\n    color: black;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n\n@media (min-width: 769px) {\n  ion-card ion-input {\n    width: 60%;\n    border: 1px solid #7e7e7e;\n    border-radius: 10px;\n    font-size: 0.875em;\n    font-weight: 500;\n    font-family: \"poppins\", sans-serif;\n    color: black;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  ion-card ion-col {\n    padding: 12px;\n  }\n  ion-card ion-col ion-button {\n    border: 1px solid blue;\n    border-radius: 10px;\n    text-transform: none;\n  }\n}\n\n@media (min-width: 769px) {\n  ion-card ion-col {\n    padding: 31px;\n  }\n  ion-card ion-col ion-button {\n    border: 1px solid blue;\n    border-radius: 10px;\n    text-transform: none;\n  }\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .mainlist2 {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 8px;\n    border-radius: 10px;\n  }\n}\n\n@media (min-width: 769px) {\n  .mainlist2 {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 15px;\n    border-radius: 10px;\n  }\n}\n\n.btn2 {\n  --border-radius: 10px;\n  text-transform: none;\n  color: white;\n}\n\n.list10 {\n  display: flex;\n  /* margin: auto; */\n  margin-left: auto;\n  text-align: center;\n  margin-right: auto;\n  flex-direction: column;\n  width: 49%;\n}\n\nbutton {\n  background: #0093e9;\n  width: 100%;\n  height: 40px;\n  color: white;\n  border-radius: 9px;\n}\n\n.d1 {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d1 {\n  display: none;\n}\n\n.d2 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  height: 200px;\n  width: 300px;\n}\n\n.d3 {\n  display: flex;\n  justify-content: center;\n}\n\n.d4 {\n  padding: 20px;\n}\n\n.d5 {\n  float: left;\n  padding: 20px;\n}\n\n.h11 {\n  font-weight: 800;\n  color: rgb(101, 96, 96);\n  font-family: sans-serif;\n}\n\n.h31 {\n  color: blue;\n  font-weight: 800;\n}\n\n.dev1 {\n  display: flex;\n}\n\n.div2 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div4 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div5 {\n  width: 79%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div6 {\n  width: 70%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div7 {\n  width: 30%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div8 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div9 {\n  width: 71%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div10 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div11 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  margin-left: 51%;\n  height: 37px;\n}\n\n.name {\n  font-weight: 700;\n  color: rgb(101, 96, 96);\n  width: auto;\n}\n\n.names {\n  font-weight: 700;\n  margin-left: 10px;\n  color: rgb(101, 96, 96);\n}\n\n@media (max-width: 700px) {\n  .name {\n    font-weight: 700;\n    font-size: 90%;\n    color: rgb(101, 96, 96);\n    width: auto;\n  }\n  .names {\n    font-weight: 700;\n    font-size: 94%;\n    margin-left: 10px;\n    color: rgb(101, 96, 96);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib29raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQU5SOztBQVNJO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0VBTlY7QUFDRjs7QUFRSTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7RUFOVjtBQUNGOztBQVFJO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLDRDQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBTlY7RUFRVTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtFQU5kO0VBT2M7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0NBQUE7RUFMbEI7QUFDRjs7QUFTSTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSw0Q0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQVBWO0VBU1U7SUFDSSxhQUFBO0VBUGQ7RUFRYztJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtFQU5sQjtBQUNGOztBQVVJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtBQVJSOztBQVVJO0VBQ0k7SUFDSSxrQkFBQTtFQVBWO0FBQ0Y7O0FBU0k7RUFDSTtJQUNJLGtCQUFBO0VBUFY7QUFDRjs7QUFVSTtFQUlLO0lBQ0csa0JBQUE7RUFYVjtFQWFPO0lBQ0csa0JBQUE7RUFYVjtBQUNGOztBQWFJO0VBQ0k7SUFDSSxrQkFBQTtFQVhWO0VBYU87SUFDRyxrQkFBQTtFQVhWO0FBQ0Y7O0FBZUk7RUFDSTtJQUNJLGtCQUFBO0VBYlY7RUFlTztJQUNJLGtCQUFBO0VBYlg7QUFDRjs7QUFlSTtFQUNJO0lBQ0ksaUJBQUE7RUFiVjtBQUNGOztBQWVJO0VB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LGtCQUFBO0VBQ0QsZ0JBQUE7QUFQRDs7QUFTQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFORDs7QUFTQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFORDs7QUFRQztFQUVDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVFDO0VBQ0MsZ0JBQUE7RUFFQSx1QkFBQTtFQUNHLFdBQUE7QUFOTDs7QUFVQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVVJO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUFQVjtFQVdNO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtFQVRWO0FBQ0YiLCJmaWxlIjoiYWRkLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuLy8gICAgIC5zZWxlY3R7XHJcbi8vICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4gICAgLnNlbGVjdHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpe1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIC5tYWlubGlzdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjdweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAgICAgLm1haW5saXN0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYnMtdGV4dC1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICM3ZTdlN2UgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIC50b29sYmFye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgICAgICAudG9vbGJhcntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo1MDhweCkge1xyXG4gICAgICAgIC8vIC5idG4ze1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLy8gIH1cclxuICAgICAgICAgLmxhYmVsMXtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5idG40e1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM0cHg7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjUwOXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIC5sYWJlbDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjNweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYnRuNHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgICAgIC5idG4ze1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmxhYmVsMXtcclxuICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIC5jb2x7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAgICAgLmNvbHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDoxcHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgLmNvbDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAgICAgLmNvbDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgICAgICAuY2FyZDJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDo5MHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0e1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2MjRkY2I7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjo4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5wYWdlLXRpdGxlcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbiAgICB9XHJcbiAgICAuZC1mbGV4IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAucGxvdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDEuMTg3NXJlbTsgICBcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucGFnZXtcclxuICAgICAgICBjb2xvcjogIzgyODY5MDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDIzNyAyNDgpO1xyXG4gICAgICAgIGNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE0IDIyMSAyNDIpO1xyXG4gICAgfVxyXG4gICAgLnJhZGl1c3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjRjYjg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDo1NTBweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgICAudG9we1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgICAgIC50b3B7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDoxcHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpe1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLm1haW5saXN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjo4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tYnMtdGV4dC1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLm1haW5saXN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjoxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogNzBweDtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWJzLXRleHQtb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjN2U3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC50b29sYmFye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLnRvb2xiYXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ZTdlN2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdlN2U3ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMXB4O1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIHVzZXJkYXRhXHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5tYWlubGlzdDJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAubWFpbmxpc3Qye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjoxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmJ0bjJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy9wcmludFxyXG4ubGlzdDEwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTNlOTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcbi5kMXtcclxuXHR3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiBcclxuICB9XHJcbiAgLmQxe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmQye1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdGltZ3tcclxuXHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0fVxyXG5cdC5kM3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcclxuXHR9XHJcblx0LmQ0e1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHR9XHJcblx0LmQ1e1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdH1cclxuXHRcclxuXHQuaDExe1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG5cdH1cclxuXHQuaDMxe1xyXG5cdFx0Y29sb3I6IGJsdWU7XHJcblx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdH1cclxuXHQuZGV2MXtcclxuXHRcdFxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblx0XHJcblx0LmRpdjJ7XHJcblx0XHR3aWR0aDogMjIlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG5cdH1cclxuXHQuZGl2NHtcclxuXHRcdHdpZHRoOiA3MyU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2NXtcclxuXHRcdHdpZHRoOiA3OSU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdFxyXG5cdH1cclxuXHQuZGl2NntcclxuXHRcdHdpZHRoOiA3MCU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2N3tcclxuXHRcdHdpZHRoOiAzMCU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cdC5kaXY4e1xyXG5cdFx0d2lkdGg6IDczJTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblx0LmRpdjl7XHJcblx0XHR3aWR0aDogNzElO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdGhlaWdodDogMzdweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdFxyXG5cdH1cclxuXHQuZGl2MTB7XHJcblx0XHR3aWR0aDogNzMlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdGhlaWdodDogMzdweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2MTF7XHJcblx0XHRcclxuXHRcdHdpZHRoOiAyMiU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRtYXJnaW4tbGVmdDogNTElO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdH1cclxuXHQubmFtZXtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdC5uYW1lc3tcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdFx0XHJcblx0fVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEwMSwgOTYsIDk2KTtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWVze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDk0JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 9226:
/*!********************************************************************!*\
  !*** ./src/app/pages/add-booking/add-booking.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n    <!-- \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item> -->\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Add Book\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 10px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col size-lg=\"10.4\" size-md=\"10\" size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Add Book</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\" (click)=\"Home()\"><a class=\"text\">Home</a></li>\r\n              <li class=\"breadcrumb-item \" (click)=\"Property()\"><a class=\"plot\">Property</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"booking()\"><a class=\"plot\">Booking</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"booking_plot()\"><a class=\"plot\">Plot Booking</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"add_book()\"><a class=\"page\">Add Book</a></li>\r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size-lg=\"1.3\" size-md=\"1.7\" size=\"\" (click)=\"Refresh()\">\r\n          <a class=\"btn btn-primary top rounded refresh primary light me-3\">Refresh</a>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n\r\n\r\n  <!-- <ion-list class=\"select\">\r\n    <ion-item>\r\n      <ion-select   placeholder=\"Select Customer\" (ionChange)=\"select_plot($event)\">\r\n        <ion-select-option *ngFor=\"let G_Customer of get_Customer\" [value]=\"{customer_id: G_Customer.customer_id, customer_name: G_Customer.name}\">{{G_Customer.name}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>   -->\r\n\r\n  <div>\r\n    <ion-list class=\"mainlist\">\r\n      <ion-row>\r\n        <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\" size=\"3\">\r\n          <ion-label>Plot No</ion-label>\r\n          <p>{{data.plot_no}} </p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2.5\" class=\"col\" size-md=\"2\" size-sm=\"5\">\r\n          <ion-label>Plot</ion-label>\r\n          <p>{{data.plot}}</p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2.5\" class=\"col\" size-md=\"2.5\" size=\"6\">\r\n          <ion-label>Type</ion-label>\r\n          <p>{{data.type}}</p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\" size=\"5\">\r\n          <ion-label>Status</ion-label>\r\n          <p>{{data.status}}</p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\">\r\n          <ion-label>Size(Sq.ft)</ion-label>\r\n          <p>{{data.area_sqf}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\">\r\n          <ion-label>Location</ion-label>\r\n          <p>{{data.p_location}}</p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2.6\" class=\"col\" size-md=\"2.5\">\r\n          <ion-label>Size(Marla)</ion-label>\r\n          <p>{{data.area_marla}}</p>\r\n        </ion-col>\r\n        <ion-col size-lg=\"2.4\" class=\"col\" size-md=\"2\">\r\n          <ion-label>Price</ion-label>\r\n          <p>{{data.price}}</p>\r\n        </ion-col>\r\n        <ion-col class=\"col\">\r\n          <ion-label>Description</ion-label>\r\n          <p>{{data.description}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-list>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card ion-margin\">\r\n          <div class=\"card-body\">\r\n            <div class=\"card-title fs-4 mb-3\">\r\n              Enter Customer:\r\n            </div>\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3 mb-2\">\r\n                      <div class=\"d-flex  flex-column justify-content-center align-items-center\">\r\n                        <img class=\"placeholder_img\" src=\"./../../../assets/placholder_img.png\" id=\"cameraImage\">\r\n                        <div (click)=\"user_cnic()\"\r\n                          class=\"d-flex justify-content-center align-items-center position-absolute pic_button\">\r\n                          <ion-icon color=\"light\" style=\"width: 35px;height: 25px;\" name=\"image-outline\"></ion-icon>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-9 mb-2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Customer Name</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"booking_details.user.name\" class=\"form-control\"\r\n                              placeholder=\"Miller\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Father Name</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"booking_details.user.father_name\" name=\"lastName\"\r\n                              class=\"form-control\" placeholder=\"Montana\" required>\r\n                            </ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">CNIC</label>\r\n                            <ion-input type=\"number\" [(ngModel)]=\"booking_details.user.cnic\" class=\"form-control\"\r\n                              required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Phone No.</label>\r\n                            <ion-input type=\"number\" [(ngModel)]=\"booking_details.user.mobile_no\" class=\"form-control\"\r\n                              required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Address</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"booking_details.user.address\" class=\"form-control\"\r\n                              required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-lg-12 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Query</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"booking_details.user.query\" class=\"form-control\"\r\n                              required></ion-input>\r\n                          </div>\r\n                        </div> -->\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-4 mb-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Next of kin</label>\r\n                          <ion-input [(ngModel)]=\"booking_details.bookingData.granter_name\" class=\"form-control\"\r\n                            required>\r\n                          </ion-input>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 mb-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Next Of Kin Mobile</label>\r\n                          <ion-input [(ngModel)]=\"booking_details.bookingData.granter_mobileno\" class=\"form-control\"\r\n                            required>\r\n                          </ion-input>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 mb-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Next Of Kin Cnic</label>\r\n                          <ion-input [(ngModel)]=\"booking_details.bookingData.granter_cnic\" class=\"form-control\"\r\n                            required>\r\n                          </ion-input>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"col-lg-4 mb-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Booking Month</label>\r\n                          <ion-select   [(ngModel)]=\"booking_details.bookingData.i_month\"   placeholder=\"Select Month\">\r\n                            <ion-select-option value=\"january\">January</ion-select-option>\r\n                            <ion-select-option value=\"february\">February</ion-select-option>\r\n                            <ion-select-option value=\"march\">March</ion-select-option>\r\n                            <ion-select-option value=\"april\">April</ion-select-option>\r\n                            <ion-select-option value=\"may\">May</ion-select-option>\r\n                            <ion-select-option value=\"june\">June</ion-select-option>\r\n                            <ion-select-option value=\"july\">July</ion-select-option>\r\n                            <ion-select-option value=\"august\">August</ion-select-option>\r\n                            <ion-select-option value=\"september\">September</ion-select-option>\r\n                            <ion-select-option value=\"october\">October</ion-select-option>\r\n                            <ion-select-option value=\"november\">November</ion-select-option>\r\n                            <ion-select-option value=\"december\">December</ion-select-option>\r\n                          </ion-select>\r\n                        </div>\r\n                      </div> -->\r\n\r\n                      <div class=\"col-lg-4 mb-2\" >\r\n                        <div class=\"form-group\" mode=\"md\">\r\n                          <label class=\"text-label\">Booking Date</label>\r\n                          <ion-input type=\"date\" [(ngModel)]=\"booking_details.bookingData.booking_date\" (ionChange)=\"month($event)\" class=\"form-control\"\r\n                            required>\r\n                          </ion-input>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-4 mb-2\" >\r\n                        <div class=\"form-group\" mode=\"md\">\r\n                          <label class=\"text-label\">Next Installment Date</label>\r\n                          <ion-input type=\"date\" [(ngModel)]=\"booking_details.bookingData.upcoming_installment\"  class=\"form-control\"\r\n                            required>\r\n                          </ion-input>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-list class=\"mainlist2\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 col-xxl-12\">\r\n          <div class=\"card ion-margin\">\r\n            <div class=\"card-body\">\r\n              <div class=\"card-title fs-4 mb-3\">\r\n                Enter Payment Details:\r\n              </div>\r\n              <div class=\"form-wizard order-create\">\r\n                <div class=\"tab-content\">\r\n                  <div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-3 mb-2\">\r\n                        <div class=\"d-flex  flex-column justify-content-center align-items-center\">\r\n                          <img class=\"placeholder_img\" src=\"./../../../assets/placholder_img.png\" id=\"cameraImage2\">\r\n                          <div (click)=\"granter_img()\"\r\n                            class=\"d-flex justify-content-center align-items-center position-absolute pic_button\">\r\n                            <ion-icon color=\"light\" style=\"width: 35px;height: 25px;\" name=\"image-outline\"></ion-icon>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-9 mb-2\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Total Amount</label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.total_payment\" class=\"form-control\"\r\n                                placeholder=\"xyz\" type=\"number\" readonly=\"true\" required (ionChange)=\"totalamount($event)\"></ion-input>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Discount</label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.discount\" class=\"form-control\"\r\n                                placeholder=\"---%\" type=\"number\" required (ionChange)=\"discountamount($event)\"></ion-input>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Advance Amount</label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.advance\"\r\n                                class=\"form-control\" type=\"number\" required (ionChange)=\"advanceamount($event)\">\r\n                              </ion-input>\r\n                            </div>\r\n                          </div>\r\n                          \r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Remaining Payment </label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.remaining_payment\" class=\"form-control\"\r\n                                placeholder=\"#0001234\" type=\"number\" required></ion-input>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Total Installments</label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.total_installment\" (ionChange)=\"Permonthinstallment($event)\"\r\n                                class=\"form-control\" type=\"number\" required>\r\n                              </ion-input>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-6 mb-2\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"text-label\">Per Month Installments</label>\r\n                              <ion-input [(ngModel)]=\"booking_details.bookingData.per_installment\"\r\n                                class=\"form-control\" type=\"number\" required>\r\n                              </ion-input>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    \r\n                  </div>\r\n                  <div>\r\n\r\n                    <ion-button fill=\"solid\" color=\"secondary\" class=\"mt-2 w-50 ms-auto me-auto d-flex\"\r\n                      (click)=\"Add_Plot_Data()\">Book Now</ion-button>\r\n\r\n                      <ion-list class=\"list10\">\r\n                        <button class=\"btn1\" fill=\"solid\"  styleSheetFile=\"assets/css/style.css\" printSectionId=\"demo\" ngxPrint>\r\n                          <ion-icon name=\"document-text-outline\"></ion-icon> Export\r\n                        </button>\r\n                      </ion-list>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n            <!-- print -->\r\n            <div class=\"d1\" id=\"demo\">\r\n        \r\n              <div class=\"d4\" id=\"d4\">\r\n                <div class=\"dev1\" id=\"dev2\">\r\n                  \r\n            \r\n                    <img src=\"../../../assets/Baba Farid Smart Valley Logo.png\" alt=\"\" id=\"img\">\r\n                  \r\n              </div>\r\n                <div class=\"d3\" id=\"d3\">\r\n                  <h3 class=\"h11\" id=\"h11\">\r\n                    Booking Slip \r\n                  </h3>\r\n                </div>\r\n      \r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Plot NO:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div2\" id=\"div2\">\r\n                      <p>\r\n                        {{data.plot_no}} \r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                     Plot Size:\r\n                    </h4>\r\n                    <div class=\"div2\" id=\"div2\">\r\n                     \r\n                        <p>\r\n                        {{data.area_marla}} Marla\r\n                        </p>\r\n                     \r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                     Type:\r\n                     </h4>\r\n                     <div class=\"div2\" id=\"div2\">\r\n                      <p>\r\n                        {{data.type}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                     Location:\r\n                    </h4>\r\n                    <div class=\"div51\" id=\"div51\">\r\n                      <p>\r\n                        {{data.p_location}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                     Customer Name:\r\n                    </h4>\r\n                    <div class=\"div4\" id=\"div4\">\r\n                      <p>\r\n                        {{booking_details.user.name}}\r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Father Name:\r\n                     </h4>\r\n                     <div class=\"div5\" id=\"div5\">\r\n                       <p>\r\n                         {{booking_details.user.father_name}}\r\n                       </p>\r\n                     </div>\r\n                  </div>\r\n                  <!-- <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                     Father Name:\r\n                    </h4>\r\n                    <div class=\"div5\" id=\"div5\">\r\n                      <p>\r\n                        {{booking_details.user.father_name}}\r\n                      </p>\r\n                    </div>\r\n                  </div> -->\r\n                  \r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      CNIC NO:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div6\" id=\"div6\">\r\n                      <p>\r\n                        {{booking_details.user.cnic}}\r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                     Mobile NO:\r\n                    </h4>\r\n                    <div class=\"div7\" id=\"div7\">\r\n                      <p>\r\n                        {{booking_details.user.mobile_no}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Address:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div6\" id=\"div61\">\r\n                      <p>\r\n                        {{booking_details.user.address}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                \r\n                \r\n                    <div class=\"dev1\" id=\"dev1\">\r\n                      <h4 class=\"name\" id=\"name\">\r\n                        Booking Date:\r\n                       </h4>\r\n                       <div class=\"div5\" id=\"div92\">\r\n                         <p>\r\n                           {{booking_details.bookingData.booking_date}}\r\n                         </p>\r\n                       </div>\r\n                      <h4 class=\"name\" id=\"name\">\r\n                       Booking Month:\r\n                      </h4>\r\n                      <div class=\"div5\" id=\"div92\">\r\n                        <p>\r\n                          {{booking_details.bookingData.i_month}}\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  \r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Total Amount:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div6\" id=\"div88\">\r\n                      <p>\r\n                        {{booking_details.bookingData.total_payment}}\r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                      Discount:\r\n                    </h4>\r\n                    <div class=\"div7\" id=\"div82\">\r\n                      <p>\r\n                        {{booking_details.bookingData.discount}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Advance Amount:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div6\" id=\"ad1\">\r\n                      <p>\r\n                        {{booking_details.bookingData.advance}}\r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                      Remaining Payment:\r\n                    </h4>\r\n                    <div class=\"div7\" id=\"rem1\">\r\n                      <p>\r\n                        {{booking_details.bookingData.remaining_payment}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"dev1\" id=\"dev1\">\r\n                    <h4 class=\"name\" id=\"name\">\r\n                      Total Installment:\r\n                    \r\n                    </h4>\r\n                    <div class=\"div6\" id=\"ad1\">\r\n                      <p>\r\n                        {{booking_details.bookingData.total_installment}}\r\n                      </p>\r\n                    </div>\r\n                    <h4 class=\"names\" id=\"names\">\r\n                      Per Month Installment:\r\n                    </h4>\r\n                    <div class=\"div7\" id=\"per\">\r\n                      <p>\r\n                        {{booking_details.bookingData.per_installment}}\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n\r\n                 \r\n                 \r\n                  <div class=\"sign\" id=\"sign\">\r\n                    <div  id=\"mainsin\">\r\n                        <div id=\"cssign\">\r\n            \r\n                        </div>\r\n                        <h4 id=\"name\">\r\n                          Customer Sign\r\n                        </h4>\r\n                    </div>\r\n                    <div  id=\"mainsin\">\r\n                      <div id=\"float\">\r\n                        <div id=\"msign\">\r\n            \r\n                        </div>\r\n                        <h4 id=\"name\">\r\n                          Managing Director\r\n                        </h4>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                 \r\n                 <div id=\"footer\">\r\n                  <span id=\"spanf1\">Cell# 03006150619 PH# 0457 38 35 41<br>\r\n                    ADDRESS: Sahiwal Road Near Baba Farid Rice Mills Pakpattan<br>\r\n                    G-MAIL: babafareedsmartvalley@gmail.com\r\n                  </span>\r\n                 </div>\r\n                \r\n              </div>\r\n             \r\n            </div>\r\n      \r\n\r\n\r\n    </ion-list>\r\n\r\n    <!-- <ion-card class=\"card2\">\r\n   <ion-row>\r\n    <ion-col size-lg=\"9\" size=\"12\">\r\n      <ion-input type=\"number\" placeholder=\"Enter Amount\"></ion-input>\r\n    </ion-col>\r\n\r\n   </ion-row>\r\n  </ion-card> -->\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- <div class=\"form-head ion-margin \">\r\n    <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n      <h2 class=\"text-black font-w500 page-titles\">Confrim Booking</h2>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-xl-12 col-xxl-12\">\r\n      <div class=\"card ion-margin\">\r\n        <div class=\"card-body\">\r\n          <div class=\"form-wizard order-create\">\r\n            <div class=\"tab-content\">\r\n              <div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Plot No</label>\r\n                      <ion-list class=\"form-control\"> \r\n                        <ion-item class=\"select\">\r\n                          <!-- (ionChange)=\"select_plot($event)value=\"{{plot.plot_no}} -->\r\n<!-- <ion-select class=\"w-100\" placeholder=\"Select Plot\" >\r\n                            <ion-select-option   [(ngModel)]=\"\" *ngFor=\"let plot of Plot_D\" >{{plot.plot_no}} </ion-select-option>\r\n                          </ion-select> -->\r\n<!-- </ion-item>\r\n                      </ion-list> \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Customer</label>\r\n                        <ion-list class=\"form-control\"> \r\n                          <ion-item class=\"select\"> -->\r\n<!-- <ion-select class=\"w-100\" placeholder=\"Select Customer\">\r\n                              <ion-select-option  [(ngModel)]=\"\" *ngFor=\"let plot of Plot_D\">{{plot.plot_no}} </ion-select-option>\r\n                            </ion-select> -->\r\n<!-- </ion-item>\r\n                        </ion-list> \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Type</label>\r\n                      <ion-input type=\"text\"  class=\"form-control\"  required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Property</label>\r\n                      <ion-input type=\"text\"  class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Date</label>\r\n                      <ion-input type=\"date\"  class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Location</label>\r\n                      <ion-input type=\"text\"  class=\"form-control\"  required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Size in Marla</label>\r\n                      <ion-input type=\"number\" class=\"form-control\"  required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Size in Sq.ft</label>\r\n                      <ion-input type=\"number\"  class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Price</label>\r\n                      <ion-input type=\"number\"   class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div> -->\r\n<!-- \r\n  <ion-row>\r\n    <ion-col size-lg=\"2\" class=\"col\" size-md=\"2.5\"  >\r\n      <ion-label>Total Amount</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"booking_details.total_payment\" placeholder=\"Enter Amount\"></ion-input>\r\n    </ion-col>\r\n    <ion-col size-lg=\"2.2\" class=\"col\" size-md=\"3\">\r\n      <ion-label>Advance Amount</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"booking_details.advance\" placeholder=\"Enter Amount\"></ion-input>\r\n\r\n    </ion-col>\r\n    <ion-col size-lg=\"2.6\" class=\"col2\" size-md=\"3\">\r\n      <ion-label>Total Instalments</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"booking_details.total_installment\" placeholder=\"Enter Amount\"></ion-input>\r\n\r\n    </ion-col>\r\n    <ion-col  size-lg=\"3\" size-md=\"3.5\">\r\n      <ion-label>Reamining Instalments</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"booking_details.remaining_payment\" placeholder=\"Enter Amount\"></ion-input>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"text-align: end;justify-content: end;\">\r\n    <ion-col size-lg=\"2\"  class=\"col  btn3 \" size-md=\"3\" size=\"5\">\r\n      <ion-label class=\"label1\">Book Now</ion-label>\r\n      <ion-button fill=\"clear\" class=\"btn2  btn4\" (click)=\"Add_Plot_Data()\">\r\n        Add Book\r\n    </ion-button>\r\n    </ion-col>\r\n  </ion-row> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-booking_add-booking_module_ts.js.map