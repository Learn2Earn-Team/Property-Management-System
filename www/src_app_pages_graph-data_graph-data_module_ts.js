"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_graph-data_graph-data_module_ts"],{

/***/ 4946:
/*!***************************************************************!*\
  !*** ./src/app/pages/graph-data/graph-data-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphDataPageRoutingModule": () => (/* binding */ GraphDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _graph_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-data.page */ 1756);




const routes = [
    {
        path: '',
        component: _graph_data_page__WEBPACK_IMPORTED_MODULE_0__.GraphDataPage
    }
];
let GraphDataPageRoutingModule = class GraphDataPageRoutingModule {
};
GraphDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GraphDataPageRoutingModule);



/***/ }),

/***/ 6482:
/*!*******************************************************!*\
  !*** ./src/app/pages/graph-data/graph-data.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphDataPageModule": () => (/* binding */ GraphDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _graph_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-data-routing.module */ 4946);
/* harmony import */ var _graph_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-data.page */ 1756);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let GraphDataPageModule = class GraphDataPageModule {
};
GraphDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _graph_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.GraphDataPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_graph_data_page__WEBPACK_IMPORTED_MODULE_1__.GraphDataPage]
    })
], GraphDataPageModule);



/***/ }),

/***/ 1756:
/*!*****************************************************!*\
  !*** ./src/app/pages/graph-data/graph-data.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphDataPage": () => (/* binding */ GraphDataPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _graph_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-data.page.html?ngResource */ 3499);
/* harmony import */ var _graph_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph-data.page.scss?ngResource */ 2908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ 8167);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ 3905);











chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_6__.registerables);
let GraphDataPage = class GraphDataPage {
  // public  lineChart2:any;
  // public lineCanvas: any;
  // @ViewChild('lineChart') private lineCanvas: ElementRef;
  constructor(modalController, apiCall, route, global) {
    this.modalController = modalController;
    this.apiCall = apiCall;
    this.route = route;
    this.global = global;
    this.totalnetBalance = 0;
    this.totalDebit = 0;
    this.totalCredit = 0;
    this.show = false;
    this.Category = 'Booking';
  }

  ngOnInit() {
    // this.getAllAccountsData();
    this.data = history.state.data;
    console.log(this.data);
    this.see_data_details();
    this.lineChartMethod(); // this.lineChartMethod2();
  }

  ngAfterViewInit() {
    this.lineChartMethod(); // this.lineChartMethod2();
  } //  async getAllAccountsData(){
  //   await this.apicall.api_get_all_accounts();
  //    this.global.StoreAllaccounts.subscribe(res =>{
  //      this.Account_details = res[0];
  //      this.totalDebit = res[1][0];
  //      this.totalCredit = res[2][0];
  //      this.totalnetBalance = res[3][0];
  //      console.log(this.Account_details);      
  //      console.log(this.totalCredit);      
  //      console.log(this.totalDebit);      
  //      console.log(this.totalnetBalance);      
  //    })


  see_data_details() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.global.Graphdetailsdata.subscribe(user => {
        console.log(user);
        _this.bookedrevenudetailbyday = user;
        _this.bookedrevenudetailbymonth = user;
        _this.installmentrevenudetailbyday = user;
        _this.installmentrevenudetailbymonth = user;
        _this.bookedstarrevenudetailbyday = user;
        _this.bookedstarrevenudetailbymonth = user;
        _this.starinstallmentrevenudetailbyday = user;
        _this.starinstallmentrevenudetailbymonth = user;
        console.log(_this.bookedrevenudetailbyday);
      });
    })();
  }

  Home() {
    this.route.navigate(['home']);
  }

  Property() {
    this.route.navigate(['property']);
  }

  UpdateBooking(data) {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'UpdateBooking': data,
          'Category': _this2.Category
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

  seeDeatils(data) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'bookingDetails': data,
          'Category': "viewbookingdetails"
        }
      });
      return yield modal.present();
    })();
  } // chart_data


  lineChartMethod() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['June', 'March', 'April', 'July', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [{
          label: "Sales",
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: 'blue',
          minBarLength: 500
        }, {
          label: "Profit",
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: 'limegreen'
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

};

GraphDataPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

GraphDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-graph-data',
  template: _graph_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_graph_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GraphDataPage);


/***/ }),

/***/ 2908:
/*!******************************************************************!*\
  !*** ./src/app/pages/graph-data/graph-data.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".list {\n  width: auto;\n  height: 80px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n\nion-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n}\n\nion-segment {\n  width: 150px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.dateDisplay {\n  width: 300px;\n  text-align: center;\n  height: 45px;\n}\n\n.dateDisplay .button {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.dateDisplayText {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n\n.fromDate {\n  width: 120px;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n.dateDash {\n  width: 40px;\n}\n\n.toDate {\n  width: 120px;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\nion-datetime {\n  --title-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-text);\n}\n\nion-datetime button {\n  color: var(--ion-color-primary-text);\n}\n\n.cahrt-list {\n  min-width: 300px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoLWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQURKOztBQU1BO0VBQ0ksd0JBQUE7QUFISjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBRko7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJO0lBQ0ksZ0JBQUE7RUFHTjtBQUNGOztBQURBO0VBQ0k7SUFDSSxnQkFBQTtFQUdOO0FBQ0Y7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtBQUFKOztBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsaURBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDQSxpREFBQTtBQUlKOztBQUZFO0VBQ0UsdUNBQUE7RUFDQSxvQ0FBQTtBQUtKOztBQUpJO0VBQ0Esb0NBQUE7QUFNSjs7QUFEQTtFQUNRLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSVIiLCJmaWxlIjoiZ3JhcGgtZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkZXJcclxuLmxpc3R7XHJcbiAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLy8gLnBhZ2UtdGl0bGVzIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG4vLyB9XHJcbi5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wbG90e1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTg3NXJlbTsgICBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucGFnZXtcclxuICAgIGNvbG9yOiAjODI4NjkwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxufVxyXG4ucHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQgMjM3IDI0OCk7XHJcbiAgICBjb2xvcjogIzNiNGNiODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEzcmVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE0IDIyMSAyNDIpO1xyXG59XHJcbi5yYWRpdXN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYjRjYjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0Y2I4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgIC50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gc2VlYWNvdW50XHJcbmlvbi1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuZGF0ZURpc3BsYXkge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmRhdGVEaXNwbGF5VGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5mcm9tRGF0ZSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAuZGF0ZURhc2gge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4gIC50b0RhdGUge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10ZXh0KTtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gICBjaGFydFxyXG4uY2FocnQtbGlzdHtcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59Il19 */";

/***/ }),

/***/ 3499:
/*!******************************************************************!*\
  !*** ./src/app/pages/graph-data/graph-data.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <div>\r\n    <div class=\"form-head list ion-margin \">\r\n      <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n        <h2 class=\"text-white font-w600 page-titles\">All Details</h2>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- <ion-row>\r\n      <ion-col size-md=\"4\" size=\"12\" >\r\n        <div class=\"form-head ion-margin \">\r\n          <div class=\"me-auto w-100\">\r\n            <div class=\"d-flex flex-column\">\r\n              <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">Rs.{{this.totalnetBalance.netbalance}}</h2>\r\n              <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Net Balance</h2>\r\n            </div>\r\n          </div> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size-md=\"4\" size=\"12\">\r\n        <div class=\"form-head ion-margin \">\r\n          <div class=\"me-auto w-100\">\r\n            <div class=\"d-flex flex-column\">\r\n              <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">Rs.{{this.totalCredit.total_credit}}</h2>\r\n              <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Credit Balance</h2>\r\n            </div>\r\n          </div> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size-md=\"4\" size=\"12\">\r\n        <div class=\"form-head ion-margin \">\r\n          <div class=\"me-auto w-100\">\r\n            <div class=\"d-flex flex-column\">\r\n              <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">Rs.{{this.totalDebit.total_debit}}</h2>\r\n              <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Debit Balance</h2>\r\n            </div>\r\n          </div> \r\n        </div>\r\n      </ion-col>\r\n    </ion-row>  -->\r\n\r\n    <div *ngIf=\"this.data == 1\">\r\n      <ion-row>\r\n        <ion-col size-md=\"12\" size=\"12\">\r\n          <!-- <div class=\"form-head ion-margin \">\r\n            <div class=\"me-auto w-100\">\r\n              <div class=\"d-flex flex-column\">\r\n                <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">#{{this.bookedrevenudetailbyday.length}}</h2>\r\n                <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Total Baba Fareed Smart Valley Booking In Last 7 Day</h2>\r\n              </div>\r\n            </div> \r\n          </div> -->\r\n          <ion-list  class=\"chart-list\">\r\n            <div class=\"chart-container\">\r\n              <canvas  #MyChart style=\"width:100%;max-width:700px;\">{{MyChart}}</canvas>\r\n            </div>\r\n          </ion-list>          \r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"col-xl-12\">\r\n        <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n          <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" >\r\n            <thead>\r\n              <tr>\r\n                <th>No.</th>\r\n                <th>Customer Name</th>\r\n                <th>Plot</th>\r\n                <th>Price</th>\r\n                <th>Status</th>\r\n                <th>Type</th>\r\n                <th>Total Payment</th>\r\n                <th>Total Installment</th>\r\n                <th>Advance</th>\r\n                <th>Remaining Payment</th>\r\n                <th>Booking Date</th>\r\n                <th>Day</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of bookedrevenudetailbyday | filter:filterTerm; index as i\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{data.name}}</td>\r\n                <td>{{data.plot}}</td>\r\n                <td>Rs. {{data.price}}</td>\r\n                <td>{{data.status}}</td>\r\n                <td>{{data.type}}</td>\r\n                <td>{{data.total_payment}}</td>\r\n                <td>{{data.total_installment}}</td>\r\n                <td>{{data.advance}}</td>\r\n                <td>{{data.remaining_payment}}</td>\r\n                <td>{{data.booking_date}}</td>\r\n                <td>{{data.day}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"this.data == 2\">\r\n      <ion-row>\r\n        <ion-col size-md=\"12\" size=\"12\">\r\n          <div class=\"form-head ion-margin \">\r\n            <div class=\"me-auto w-100\">\r\n              <div class=\"d-flex flex-column\">\r\n                <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">#{{this.bookedrevenudetailbymonth.length}}\r\n                </h2>\r\n                <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Baba Fareed Smart Valley Booking In Last 7 Month\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div>\r\n        <div class=\"col-xl-12\">\r\n          <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n            <table class=\"table table-hover display mb-4 dataTablesCard  card-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>Customer Name</th>\r\n                  <th>Plot</th>\r\n                  <th>Price</th>\r\n                  <th>Status</th>\r\n                  <th>Type</th>\r\n                  <th>Total Payment</th>\r\n                  <th>Total Installment</th>\r\n                  <th>Advance</th>\r\n                  <th>Remaining Payment</th>\r\n                  <th>Booking Date</th>\r\n                  <th>Month</th>\r\n                  <th>Year</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of bookedrevenudetailbymonth | filter:filterTerm; index as i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{data.name}}</td>\r\n                  <td>{{data.plot}}</td>\r\n                  <td>Rs. {{data.price}}</td>\r\n                  <td>{{data.status}}</td>\r\n                  <td>{{data.type}}</td>\r\n                  <td>{{data.total_payment}}</td>\r\n                  <td>{{data.total_installment}}</td>\r\n                  <td>{{data.advance}}</td>\r\n                  <td>{{data.remaining_payment}}</td>\r\n                  <td>{{data.booking_date}}</td>\r\n                  <td>{{data.month}}</td>\r\n                  <td>{{data.year}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"this.data == 4\">\r\n      <ion-row>\r\n        <ion-col size-md=\"12\" size=\"12\">\r\n          <div class=\"form-head ion-margin \">\r\n            <div class=\"me-auto w-100\">\r\n              <div class=\"d-flex flex-column\">\r\n                <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">\r\n                  #{{this.installmentrevenudetailbyday.length}}</h2>\r\n                <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Baba Fareed Smart Valley Installment In Last 7 Day\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div>\r\n        <div class=\"col-xl-12\">\r\n          <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n            <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>Customer Name</th>\r\n                  <th>Plot</th>\r\n                  <th>Price</th>\r\n                  <th>Status</th>\r\n                  <th>Type</th>\r\n                  <th>Installment No</th>\r\n                  <th>Amount</th>\r\n                  <th>Remaining Payment</th>\r\n                  <th>Installment Date</th>\r\n                  <th>Upcoming Installment</th>\r\n                  <th>Day</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of installmentrevenudetailbyday | filter:filterTerm; index as i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{data.name}}</td>\r\n                  <td>{{data.plot}}</td>\r\n                  <td>Rs. {{data.price}}</td>\r\n                  <td>{{data.status}}</td>\r\n                  <td>{{data.type}}</td>\r\n                  <td>{{data.installment_no}}</td>\r\n                  <td>{{data.amount}}</td>\r\n                  <td>{{data.remaning_payment}}</td>\r\n                  <td>{{data.installment_date}}</td>\r\n                  <td>{{data.upcoming_installment}}</td>\r\n                  <td>{{data.day}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"this.data == 5\">\r\n      <ion-row>\r\n        <ion-col size-md=\"12\" size=\"12\">\r\n          <div class=\"form-head ion-margin \">\r\n            <div class=\"me-auto w-100\">\r\n              <div class=\"d-flex flex-column\">\r\n                <h2 class=\"text-black mx-3 mt-4 mb-1 font-w600 page-titles\">\r\n                  #{{this.installmentrevenudetailbymonth.length}}</h2>\r\n                <h2 class=\"text-black mx-3 mb-4 mt-1 fs-5 font-w800\">Total Baba Fareed Smart Valley Installment In Last\r\n                  7 Month</h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div>\r\n        <div class=\"col-xl-12\">\r\n          <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n            <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>Customer Name</th>\r\n                  <th>Plot</th>\r\n                  <th>Price</th>\r\n                  <th>Status</th>\r\n                  <th>Type</th>\r\n                  <th>Installment No</th>\r\n                  <th>Amount</th>\r\n                  <th>Remaining Payment</th>\r\n                  <th>Installment Date</th>\r\n                  <th>Upcoming Installment</th>\r\n                  <th>Month</th>\r\n                  <th>Year</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of installmentrevenudetailbymonth | filter:filterTerm; index as i\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{data.name}}</td>\r\n                  <td>{{data.plot}}</td>\r\n                  <td>Rs. {{data.price}}</td>\r\n                  <td>{{data.status}}</td>\r\n                  <td>{{data.type}}</td>\r\n                  <td>{{data.installment_no}}</td>\r\n                  <td>{{data.amount}}</td>\r\n                  <td>{{data.remaning_payment}}</td>\r\n                  <td>{{data.installment_date}}</td>\r\n                  <td>{{data.upcoming_installment}}</td>\r\n                  <td>{{data.month}}</td>\r\n                  <td>{{data.year}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_graph-data_graph-data_module_ts.js.map