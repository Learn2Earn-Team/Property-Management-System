"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_booking-plot_booking-plot_module_ts"],{

/***/ 1177:
/*!*******************************************************************!*\
  !*** ./src/app/pages/booking-plot/booking-plot-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPlotPageRoutingModule": () => (/* binding */ BookingPlotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _booking_plot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-plot.page */ 9995);




const routes = [
    {
        path: '',
        component: _booking_plot_page__WEBPACK_IMPORTED_MODULE_0__.BookingPlotPage
    }
];
let BookingPlotPageRoutingModule = class BookingPlotPageRoutingModule {
};
BookingPlotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingPlotPageRoutingModule);



/***/ }),

/***/ 5003:
/*!***********************************************************!*\
  !*** ./src/app/pages/booking-plot/booking-plot.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPlotPageModule": () => (/* binding */ BookingPlotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booking_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-plot-routing.module */ 1177);
/* harmony import */ var _booking_plot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-plot.page */ 9995);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let BookingPlotPageModule = class BookingPlotPageModule {
};
BookingPlotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _booking_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingPlotPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_booking_plot_page__WEBPACK_IMPORTED_MODULE_1__.BookingPlotPage]
    })
], BookingPlotPageModule);



/***/ }),

/***/ 9995:
/*!*********************************************************!*\
  !*** ./src/app/pages/booking-plot/booking-plot.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPlotPage": () => (/* binding */ BookingPlotPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _booking_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-plot.page.html?ngResource */ 899);
/* harmony import */ var _booking_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-plot.page.scss?ngResource */ 7348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);








let BookingPlotPage = class BookingPlotPage {
  constructor(apiCall, route, global) {
    this.apiCall = apiCall;
    this.route = route;
    this.global = global;
    this.booking_attr = [{
      title: 'Plot No'
    }, {
      title: 'type'
    }, // {title:'Property'},
    // {title:'Date'},
    {
      title: 'Location'
    }, {
      title: 'Size(Marla)'
    }, {
      title: 'Size(Sq.ft)'
    }, {
      title: 'Price'
    }, {
      title: 'Status'
    }, {
      title: 'Book'
    }, {
      title: 'Delete'
    }];
    this.booking_details = {
      p_id: '',
      plot: '',
      plot_no: '',
      area_marla: '',
      area_sqf: '',
      p_location: '',
      type: '',
      price: '',
      img: '',
      description: ''
    };
  }

  ngOnInit() {
    this.get_Plot();
  } // Get function of plot_data


  get_Plot() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.apiCall.api_getPlots();

      yield _this.global.Plots.subscribe(user => {
        console.log(user);
        _this.booking_details = user;
      });
    })();
  } // Delete function of plot_data


  Delete_Plot(p_id) {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        p_id: p_id
      };
      yield _this2.apiCall.api_delete_plot(x);

      _this2.get_Plot();

      console.log(p_id);
    })();
  }

  add_booking(booking) {
    console.log(booking);
    this.route.navigate(['add-booking'], {
      state: {
        data: booking
      }
    });
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
    this.apiCall.api_getPlots();
  }

};

BookingPlotPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

BookingPlotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-booking-plot',
  template: _booking_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_booking_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookingPlotPage);


/***/ }),

/***/ 7348:
/*!**********************************************************************!*\
  !*** ./src/app/pages/booking-plot/booking-plot.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".list {\n  width: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n\n.form-head {\n  background: #fff;\n}\n\n.page-titles {\n  margin-top: 0.125rem;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n\n@media (min-width: 550px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctcGxvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxXQUFBO0VBRUEsNENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBS0E7RUFDSSxvQkFBQTtBQUZKOztBQUlBO0VBQ0ksd0JBQUE7QUFESjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQUo7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBREE7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJO0lBQ0ksZ0JBQUE7RUFLTjtBQUNGOztBQUhBO0VBQ0k7SUFDSSxnQkFBQTtFQUtOO0FBQ0YiLCJmaWxlIjoiYm9va2luZy1wbG90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBoZWFkZXJcclxuLmxpc3R7XHJcbiAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5wYWdlLXRpdGxlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4udGV4dHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGxvdHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjE4NzVyZW07ICAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnBhZ2V7XHJcbiAgICBjb2xvcjogIzgyODY5MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbn1cclxuLnByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDIzNyAyNDgpO1xyXG4gICAgY29sb3I6ICMzYjRjYjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjgxM3JlbTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNCAyMjEgMjQyKTtcclxufVxyXG4ucmFkaXVze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNGNiODtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo1NTBweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 899:
/*!**********************************************************************!*\
  !*** ./src/app/pages/booking-plot/booking-plot.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n   \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \r\n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n     \r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 10px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col  size-lg=\"10.4\" size-md=\"10\" size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Plot Booking</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\" (click)=\"Home()\"><a class=\"text\">Home</a></li>\r\n              <li class=\"breadcrumb-item \" (click)=\"Property()\"><a class=\"plot\">Property</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"booking()\"><a class=\"plot\">Booking</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"booking_plot()\"><a class=\"page\">Plot Booking</a></li>\r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n\r\n  <ion-row style=\"justify-content: center;\">\r\n    <ion-col size-md=\"4\" size=\"12\" >\r\n      <div class=\"form-head ion-margin \">\r\n        <div class=\"me-auto w-100\">\r\n          <div class=\"d-flex flex-column\">\r\n            <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\"> {{this.booking_details.length}} </h2>\r\n            <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Total Plots</h2>\r\n          </div>\r\n        </div> \r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <div>\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n        <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let book of booking_attr\">\r\n                {{book.title}}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let booking of booking_details | filter:filterTerm \">\r\n              <td>{{booking.plot_no}}</td>\r\n              <td>{{booking.type}}</td>\r\n              <!-- <td>{{booking.Property}}</td> -->\r\n              <!-- <td>{{booking.Date}}</td> -->\r\n              <td>{{booking.p_location}}</td>\r\n              <td>{{booking.area_sqf}}</td>\r\n              <td>{{booking.area_marla}}</td>\r\n              <td>Rs.{{booking.price}}</td>\r\n              <td>{{booking.description}}</td>\r\n              <td (click)=\"add_booking(booking)\"><span style=\"font-size: 15px;color: var(--ion-color-primary);\">Book now</span></td>\r\n                <td  (click)=\"Delete_Plot(booking.p_id)\"><span style=\"font-size: 15px;color: var(--ion-color-primary);\"  >Delete</span></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_booking-plot_booking-plot_module_ts.js.map