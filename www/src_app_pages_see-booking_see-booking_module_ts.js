"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_see-booking_see-booking_module_ts"],{

/***/ 9377:
/*!*****************************************************************!*\
  !*** ./src/app/pages/see-booking/see-booking-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeBookingPageRoutingModule": () => (/* binding */ SeeBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _see_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-booking.page */ 1504);




const routes = [
    {
        path: '',
        component: _see_booking_page__WEBPACK_IMPORTED_MODULE_0__.SeeBookingPage
    }
];
let SeeBookingPageRoutingModule = class SeeBookingPageRoutingModule {
};
SeeBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeeBookingPageRoutingModule);



/***/ }),

/***/ 112:
/*!*********************************************************!*\
  !*** ./src/app/pages/see-booking/see-booking.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeBookingPageModule": () => (/* binding */ SeeBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _see_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-booking-routing.module */ 9377);
/* harmony import */ var _see_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-booking.page */ 1504);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print-element */ 3412);









let SeeBookingPageModule = class SeeBookingPageModule {
};
SeeBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _see_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeeBookingPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_print_element__WEBPACK_IMPORTED_MODULE_8__.NgxPrintElementModule
        ],
        declarations: [_see_booking_page__WEBPACK_IMPORTED_MODULE_1__.SeeBookingPage]
    })
], SeeBookingPageModule);



/***/ }),

/***/ 1504:
/*!*******************************************************!*\
  !*** ./src/app/pages/see-booking/see-booking.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeBookingPage": () => (/* binding */ SeeBookingPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _see_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-booking.page.html?ngResource */ 1073);
/* harmony import */ var _see_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-booking.page.scss?ngResource */ 3515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ 8167);










let SeeBookingPage = class SeeBookingPage {
  // public config = {
  //   printMode: 'template-popup', // template
  //   popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
  //   pageTitle: 'Luqman Town',
  //   templateString: '{{printBody}}<footer>Luqman Town</footer>',
  //   stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
  //   styles: ['td { border: 1px solid black; color: black; }', 'table { border: 1px solid black; color: red }', 'header, table, footer { margin: auto; text-align: center; }']
  // }
  constructor(modalController, apiCall, route, global) {
    this.modalController = modalController;
    this.apiCall = apiCall;
    this.route = route;
    this.global = global;
    this.Category = 'Booking';
    this.selectTabs = 'Luqman Town';
    this.booking_type = {
      type: ''
    };
  }

  ngOnInit() {
    this.get_Booking();
  }

  changesSegment() {
    this.get_Booking();
  } //   async Select_type($event){
  //     console.log($event.target.value);
  //     this.booking_type.type = $event.target.value;
  //     }
  //     async getbystatus() {
  //       console.log(this.booking_type);
  //       await this.apiCall.getallbookingbytype(this.booking_type);
  //       await this.global.BookingbyType.subscribe(res=>{
  //           this.LQ_bookingData = res;
  //           console.log(this.LQ_bookingData);
  //       });
  // }


  getbyType($event) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this.booking_type.type = $event.target.value;
      console.log(_this.booking_type);

      if ($event.target.value == 'all') {
        _this.apiCall.api_get_all_boooking();
      } else {
        _this.apiCall.getbookingbytype(_this.booking_type);

        _this.global.BookingbyType.subscribe(res => {
          console.log(res);
          _this.LQ_bookingData = res;
          console.log(_this.LQ_bookingData);
        });
      }
    })();
  } // Get function of plot_data


  get_Booking() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.apiCall.api_get_all_boooking();

      _this2.global.LQ_bookedPlots.subscribe(user => {
        console.log(user);
        _this2.LQ_bookingData = user;
        console.log(_this2.LQ_bookingData);
      });

      _this2.global._7s_Bookedpots.subscribe(user => {
        console.log(user);
        _this2._7s_bookingData = user;
        console.log(_this2.LQ_bookingData);
      });
    })();
  } // Delete function of plot_data


  Delete_Plot(data) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        p_id: data.p_id,
        b_id: data.b_id
      };
      yield _this3.apiCall.api_delete_booking(x);

      _this3.get_Booking();

      console.log(data.p_id);
    })();
  }

  UpdateBooking(data) {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'UpdateBooking': data,
          'Category': _this4.Category
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

  seeDeatils(data) {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'bookingDetails': data,
          'Category': "viewbookingdetails"
        }
      });
      return yield modal.present();
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

  Refresh() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.apiCall.api_get_all_boooking();
    }, 1500);
  }

  see_booking() {
    this.route.navigate(['see-booking']);
  }

};

SeeBookingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

SeeBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-see-booking',
  template: _see_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_see_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SeeBookingPage);


/***/ }),

/***/ 3515:
/*!********************************************************************!*\
  !*** ./src/app/pages/see-booking/see-booking.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n}\n\n.line {\n  height: 1.3px;\n  width: 90%;\n  --background: #3b6ac7;\n  z-index: 1;\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n\n.red1 {\n  color: red;\n  cursor: pointer;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1ib29raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0U7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFKSiIsImZpbGUiOiJzZWUtYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudDF7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmxpbmV7XHJcbiAgICBoZWlnaHQ6IDEuM3B4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzNiNmFjNztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuYzJ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICB0aHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgLnJlZDF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmJsdWV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 1073:
/*!********************************************************************!*\
  !*** ./src/app/pages/see-booking/see-booking.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Booked Plot</ion-card-title>\r\n<ion-row>\r\n  \r\n<ion-col size-xs=\"11.2\" size-md=\"3\">\r\n  <ion-item>\r\n    <ion-select  class=\"st\" placeholder=\"Select Type\"[(ngModel)]=\"booking_type.type\" (ionChange)=\"getbyType($event)\" >\r\n      <ion-select-option value=\"all\">All</ion-select-option>\r\n      <ion-select-option value=\"Residential\">Residential</ion-select-option>\r\n      <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-col>\r\n\r\n</ion-row>\r\n\r\n  <ion-card class=\"c2\">\r\n    <table>\r\n      <tr>\r\n          <th>Plot No</th>\r\n          <th>Plot </th>\r\n          <th>Customer</th>\r\n          <th>Type</th>\r\n         <!-- <th>Property</th> -->\r\n          <th>Date</th> \r\n          <th>Location</th>\r\n        \r\n          <th>Size(Marla)</th>\r\n          <th>Price</th>\r\n          <th>Advance</th>\r\n       \r\n          <th>Remaining Payment</th>\r\n          <th>Monthly Installment</th>\r\n          <th>Discount</th>\r\n          <th>Upcoming_installment</th>\r\n          <th>Total Installment</th>\r\n          <th>Status</th>\r\n          <th>Description</th>\r\n          <!-- <th>See Details</th> -->\r\n          <th>Update</th>\r\n          <th>Delete</th>\r\n      </tr>\r\n      <tr class=\" text-clr\" *ngFor=\"let data of LQ_bookingData | filter:filterTerm\">\r\n        <td>{{data.plot_no}} </td>\r\n        <td>{{data.plot}} </td>\r\n        <td>{{data.name}} </td>\r\n        <td>{{data.type}}</td>\r\n        <td>{{data.booking_date}} </td>\r\n        <td>{{data.p_location}}</td>\r\n        \r\n        <td>{{data.area_marla}}</td>\r\n        <td>{{data.price}}</td>\r\n        <td>{{data.advance}}</td>\r\n       \r\n        <td>{{data.remaining_payment}}</td>\r\n        <td>{{data.per_installment}}</td>\r\n        <td>{{data.discount}}</td>\r\n        <td> {{data.upcoming_installment}}</td>\r\n        <td>{{data.total_installment}}</td>\r\n        <td>{{data.status}}</td> \r\n        <td>{{data.description}}</td> \r\n        <td class=\"blue\" (click)=\"UpdateBooking(data)\">Update</td>\r\n        <td class=\"red1\" (click)=\"Delete_Plot(data)\">Delete</td>\r\n      </tr>\r\n    \r\n    </table>\r\n  </ion-card>\r\n\r\n\r\n\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_see-booking_see-booking_module_ts.js.map