"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_see-plot_see-plot_module_ts"],{

/***/ 981:
/*!***********************************************************!*\
  !*** ./src/app/pages/see-plot/see-plot-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeePlotPageRoutingModule": () => (/* binding */ SeePlotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _see_plot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-plot.page */ 2977);




const routes = [
    {
        path: '',
        component: _see_plot_page__WEBPACK_IMPORTED_MODULE_0__.SeePlotPage
    }
];
let SeePlotPageRoutingModule = class SeePlotPageRoutingModule {
};
SeePlotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeePlotPageRoutingModule);



/***/ }),

/***/ 8791:
/*!***************************************************!*\
  !*** ./src/app/pages/see-plot/see-plot.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeePlotPageModule": () => (/* binding */ SeePlotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _see_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-plot-routing.module */ 981);
/* harmony import */ var _see_plot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-plot.page */ 2977);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let SeePlotPageModule = class SeePlotPageModule {
};
SeePlotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _see_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeePlotPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_see_plot_page__WEBPACK_IMPORTED_MODULE_1__.SeePlotPage]
    })
], SeePlotPageModule);



/***/ }),

/***/ 2977:
/*!*************************************************!*\
  !*** ./src/app/pages/see-plot/see-plot.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeePlotPage": () => (/* binding */ SeePlotPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _see_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-plot.page.html?ngResource */ 3869);
/* harmony import */ var _see_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-plot.page.scss?ngResource */ 9753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pages/modal/modal.page */ 8167);
/* harmony import */ var src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toasts/toast.service */ 5473);











let SeePlotPage = class SeePlotPage {
  constructor(route, toast, global, apiCall, modalController) {
    this.route = route;
    this.toast = toast;
    this.global = global;
    this.apiCall = apiCall;
    this.modalController = modalController;
    this.Category = 'Plot';
    this.for_sale = 0;
    this.plot_attr = [{
      title: 'Plot No'
    }, {
      title: 'Plot type'
    }, {
      title: 'Size(in Sq.ft)'
    }, {
      title: 'Size(in Marla)'
    }, {
      title: 'No.of Blocks'
    }, {
      title: 'Location'
    }, {
      title: 'Book Now'
    }];
    this.booking_type = {
      type: ''
    };
    this.booking_status = {
      status: ''
    };
    this.Plot_Data = {
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
    this.selectTabs = 'Baba Fareed';
  }

  ngOnInit() {
    this.get_Plot(); // setInterval(() => {
    //   this.get_Plot(); // api call
    // }, 30000);
  }

  changesSegment() {
    this.get_Plot();
  } //   async Select_type($event){
  //     console.log($event.target.value);
  //     this.booking_type.type = $event.target.value;
  //     }
  //     async getbystatus() {
  //       console.log(this.booking_type);
  //       await this.apiCall.getallbookingbytype(this.booking_type);
  //       await this.global.BookingbyType.subscribe(res=>{
  //           this.allLqPlots = res;
  //           console.log(this.allLqPlots);
  //       });
  // }


  getbyType($event) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      console.log(_this.booking_type);
      console.log(_this.booking_status);

      if ($event.target.value == 'all') {
        _this.apiCall.api_getPlots();
      }

      if ($event.target.value == 'for sale') {
        _this.booking_status.status = $event.target.value;

        _this.apiCall.getPlotsbystatus(_this.booking_status);

        _this.global.BookingbyStatus.subscribe(res => {
          console.log(res);
          _this.allLqPlots = res;
          console.log(_this.allLqPlots);
        });
      }

      if ($event.target.value == 'booked') {
        _this.booking_status.status = $event.target.value;

        _this.apiCall.getPlotsbystatus(_this.booking_status);

        _this.global.BookingbyStatus.subscribe(res => {
          console.log(res);
          _this.allLqPlots = res;
          console.log(_this.allLqPlots);
        });
      }

      if ($event.target.value == 'Commercial') {
        _this.booking_type.type = $event.target.value;

        _this.apiCall.getPlotsbyType(_this.booking_type);

        _this.global.BookingbyType.subscribe(res => {
          console.log(res);
          _this.allLqPlots = res;
          console.log(_this.allLqPlots);
        });
      }

      if ($event.target.value == 'Residential') {
        _this.booking_type.type = $event.target.value;

        _this.apiCall.getPlotsbyType(_this.booking_type);

        _this.global.BookingbyType.subscribe(res => {
          console.log(res);
          _this.allLqPlots = res;
          console.log(_this.allLqPlots);
        });
      } else {
        console.log('no data');
      }
    })();
  } // Get function of plot_data


  get_Plot() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.apiCall.api_getPlots();

      _this2.global.Lq_only.subscribe(res => {
        _this2.allLqPlots = res;
        console.log(res);
      });

      _this2.global._7S_Only.subscribe(res => {
        _this2.all7starPlots = res;
        console.log(res);
      });

      _this2.global.LQ_length.subscribe(res => {
        _this2.lq_avaiable_plot_1 = res;
        console.log(res);
      });

      _this2.global.LQC_length.subscribe(res => {
        _this2.lq_avaiable_plot_2 = res;
        console.log(res);
      });

      _this2.global.LQR_length.subscribe(res => {
        _this2.lq_avaiable_plot_3 = res;
        console.log(res);
      });

      _this2.global.LQCB_length.subscribe(res => {
        _this2.lq_avaiable_plot_4 = res;
        console.log(res);
      });

      _this2.global.LQCS_length.subscribe(res => {
        _this2.lq_avaiable_plot_5 = res;
        console.log(res);
      });

      _this2.global.LQRB_length.subscribe(res => {
        _this2.lq_avaiable_plot_6 = res;
        console.log(res);
      });

      _this2.global.LQRS_length.subscribe(res => {
        _this2.lq_avaiable_plot_7 = res;
        console.log(res);
      });

      _this2.global._7S_length.subscribe(res => {
        _this2._7s_avaiable_plot_8 = res;
        console.log(res);
      });

      _this2.global._7SC_length.subscribe(res => {
        _this2._7s_avaiable_plot_9 = res;
        console.log(res);
      });

      _this2.global._7SR_length.subscribe(res => {
        _this2._7s_avaiable_plot_10 = res;
        console.log(res);
      });

      _this2.global._7SCB_length.subscribe(res => {
        _this2._7s_avaiable_plot_11 = res;
        console.log(res);
      });

      _this2.global._7SCS_length.subscribe(res => {
        _this2._7s_avaiable_plot_12 = res;
        console.log(res);
      });

      _this2.global._7SRB_length.subscribe(res => {
        _this2._7s_avaiable_plot_13 = res;
        console.log(res);
      });

      _this2.global._7SRS_length.subscribe(res => {
        _this2._7s_avaiable_plot_14 = res;
        console.log(res);
      });
    })();
  } // Delete function of plot_data


  Delete_Plot(p_id) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        p_id: p_id
      };
      yield _this3.apiCall.api_delete_plot(x);

      _this3.get_Plot();

      console.log(p_id);

      _this3.Refresh();

      _this3.toast.plotdeletedToast();
    })();
  }

  add_booking() {
    this.route.navigate(['add-booking']);
  }

  Property() {
    this.route.navigate(['property']);
  }

  Plot() {
    this.route.navigate(['plots']);
  }

  see_plot() {
    this.route.navigate(['see-plot']);
  }

  Refresh() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.apiCall.api_getPlots();
    }, 1500);
  }

  Home() {
    this.route.navigate(['home']);
  }

  seeDeatils(data) {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'plotDetails': data,
          'Category': "viewplotdetails"
        }
      });
      return yield modal.present();
    })();
  }

  updateModal(data) {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'updatePlot': data,
          'Category': _this5.Category
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

  book(booking) {
    console.log(booking);
    booking.status == 'booked' ? this.toast.alreaybooked() : this.route.navigate(['add-booking'], {
      state: {
        data: booking
      }
    });
    console.log(booking);
  }

};

SeePlotPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

SeePlotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-see-plot',
  template: _see_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_see_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SeePlotPage);


/***/ }),

/***/ 9753:
/*!**************************************************************!*\
  !*** ./src/app/pages/see-plot/see-plot.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  text-align: left;\n  color: var(--ion-color-primary);\n  z-index: 1;\n}\n\n.t2 {\n  font-size: 17px;\n  color: #000;\n  margin-bottom: 40px;\n  letter-spacing: 1px;\n  font-weight: 410;\n  z-index: 1;\n}\n\n.st1 {\n  margin-top: 20px;\n  font-size: 18px;\n  color: #000;\n  font-weight: 410;\n  z-index: 1;\n}\n\n.c1 {\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.line {\n  height: 1.3px;\n  width: 90%;\n  --background: #3b6ac7;\n  z-index: 1;\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n\n.red {\n  color: red;\n}\n\n.red1 {\n  color: red;\n  cursor: pointer;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1wbG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0UsK0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFJRTtFQUNFLFVBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJzZWUtcGxvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudDF7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnQye1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MTA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnN0MXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MTA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmMxe1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmxpbmV7XHJcbiAgICBoZWlnaHQ6IDEuM3B4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzNiNmFjNztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuYzJ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICB0aHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuICAucmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5yZWQxe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5ibHVle1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */";

/***/ }),

/***/ 3869:
/*!**************************************************************!*\
  !*** ./src/app/pages/see-plot/see-plot.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Add Plot</ion-card-title>\r\n\r\n  <ion-card class=\"c1\">\r\n\r\n    <ion-row>\r\n\r\n    <ion-col size=\"3.5\">\r\n      <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_2}}</ion-card-subtitle>\r\n      <ion-card-title class=\"t2\">Commercial Plots</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3.5\">\r\n      <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_4}}</ion-card-subtitle>\r\n      <ion-card-title class=\"t2\">Commercial Booked</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3.5\">\r\n      <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_5}}</ion-card-subtitle>\r\n      <ion-card-title class=\"t2\">Commercial For Sale</ion-card-title>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card class=\"line\"></ion-card>\r\n\r\n\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"3.5\">\r\n        <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_3}}</ion-card-subtitle>\r\n        <ion-card-title class=\"t2\">Residential Plots</ion-card-title>\r\n      </ion-col>\r\n  \r\n  \r\n      <ion-col size=\"3.5\">\r\n        <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_6}}</ion-card-subtitle>\r\n        <ion-card-title class=\"t2\">Residential Booked</ion-card-title>\r\n      </ion-col>\r\n  \r\n  \r\n      <ion-col size=\"3.5\">\r\n        <ion-card-subtitle class=\"st1\">{{lq_avaiable_plot_7}}</ion-card-subtitle>\r\n        <ion-card-title class=\"t2\">Residential For Sale</ion-card-title>\r\n      </ion-col>\r\n      </ion-row>\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n  <ion-card class=\"c2\">\r\n    <table>\r\n      <tr>\r\n        <th>Plot No</th>\r\n        <th>Type</th>\r\n        <th>Size(Marla)</th>\r\n        <th>Size(sq.ft)</th>\r\n        <th>Price</th>\r\n        <th>Status</th>\r\n        <th>Book Now</th>\r\n        <th>Detail</th>\r\n        <th>Update</th>\r\n        <th>Delete</th>\r\n      </tr>\r\n      <tr *ngFor=\"let data of allLqPlots | filter:filterTerm ; index as i\">\r\n        <td>{{data.plot_no}}</td>\r\n        <td>{{data.type}}</td>\r\n        <td>{{data.area_marla}}</td>\r\n        <td>{{data.area_sqf}}</td>\r\n        <td>Rs.{{data.price}}</td>\r\n        <td class=\"red\">{{data.status}}</td>\r\n        <td class=\"blue\" (click)=\"book(data)\">Book Now</td>\r\n        <td class=\"blue\" (click)=\"seeDeatils(data)\">See Details</td>\r\n        <td class=\"blue\" (click)=\"updateModal(data)\">Update</td>\r\n        <td class=\"red1\" (click)=\"Delete_Plot(data.p_id)\">Delete</td>\r\n      </tr>\r\n    </table>\r\n  </ion-card>\r\n\r\n\r\n\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_see-plot_see-plot_module_ts.js.map