"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ 8072);
/* harmony import */ var _copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../copy-right/copy-right.component */ 100);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__.NgCircleProgressModule.forRoot({
                "outerStrokeLinecap": "butt"
            })
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_2__.CopyRightComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toasts/toast.service */ 5473);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var _services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/CallApi/apicall.service */ 3773);
/* harmony import */ var _services_data_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data/global.service */ 6606);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);












chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_4__.registerables);
let HomePage = class HomePage {
  constructor(toast, route, apicall, global, menuCtrl) {
    this.toast = toast;
    this.route = route;
    this.apicall = apicall;
    this.global = global;
    this.menuCtrl = menuCtrl;
    this.summary = {
      totalinstallment: 0,
      totalexpense: 0,
      totalbooking: 0
    }; //  Luqman Town

    this.dailybookedrevenue_label = [];
    this.dailybookedrevenue_data = [];
    this.monthlyBookedrevenue_label = [];
    this.monthlyBookedrevenue_data = [];
    this.dailyrevenue_label = [];
    this.dailyrevenue_data = [];
    this.monthlyrevenue_label = [];
    this.monthlyrevenue_data = []; // transactions
    // daily

    this.dailytransactions_label = [];
    this.dailytransactionsdebit_data = [];
    this.dailytransactionscredit_data = [];
    this.dailytransactionstype_data = []; // month

    this.monthlytransactions_label = [];
    this.monthlytransactionsdebit_data = [];
    this.monthlytransactionscredit_data = [];
    this.monthlytransactionstype_data = []; // // expense
    // daily

    this.dailyexpense_label = [];
    this.dailyexpensedebit_data = [];
    this.dailyexpensecredit_data = [];
    this.dailyexpensetype_data = []; //monthly

    this.monthlyexpense_label = [];
    this.monthlyexpensedebit_data = [];
    this.monthlyexpensecredit_data = [];
    this.monthlyexpensetype_data = []; //assets
    //daily

    this.dailyassets_label = [];
    this.dailyassetsdebit_data = [];
    this.dailyassetscredit_data = [];
    this.dailyassetstype_data = []; //monthly

    this.monthlyassets_label = [];
    this.monthlyassetsdebit_data = [];
    this.monthlyassetscredit_data = [];
    this.monthlyassetstype_data = []; // 7 Start

    this.star_dailybookedrevenue_label = [];
    this.star_dailybookedrevenue_data = [];
    this.star_monthlyBookedrevenue_label = [];
    this.star_monthlyBookedrevenue_data = [];
    this.star_dailyrevenue_label = [];
    this.star_dailyrevenue_data = [];
    this.star_monthlyrevenue_label = [];
    this.star_monthlyrevenue_data = [];
    this.show = false;
    this.pastSummary = {
      start: '',
      end: ''
    };
    this.Details = {
      ide: 2
    };
    this.selectTabs = 'luqman';
    this.See_Customer = [];
    this.menuCtrl.enable(true);
  }

  opentaost() {
    this.toast.plotaddedToast();
  }

  ngOnInit() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.get_Customer();
      yield _this.menuCtrl.enable(true);
      yield _this.getAllPlots();
      yield _this.getsummary();
    })();
  }

  getsummary() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.apicall.api_getsummary();
      yield _this2.global.Summary.subscribe(data => {
        _this2.summary.totalinstallment = data[0].totalinstallment;
        _this2.summary.totalexpense = data[1].totalexpense;
        _this2.summary.totalbooking = data[2].totalbooking;
      });
    })();
  }

  gotoplots() {
    this.route.navigate(['see-plot']);
  }

  ngAfterViewInit() {
    this.getsummary();
    this.getAllPlots();
    this.getAllGraphs();
    this.getAllGraphs7Star();
    this.lineChartMethod();
    this.lineChartMethod1();
    this.lineChartMethod3();
    this.lineChartMethod4();
    this.lineChartMethod2();
    this.lineChartMethod10();
    this.lineChartMethod11();
    this.lineChartMethod12();
    this.lineChartMethod13();
    this.lineChartMethod14();
    console.log(this.dailybookedrevenue_label);
  }

  get_Customer() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.apicall.api_get_customer();

      yield _this3.global.Customer.subscribe(data => {
        console.log(data);
        _this3.See_Customer = data;
      });
    })();
  }

  getAllPlots() {
    this.apicall.api_getPlots();
    this.global.LQ_length.subscribe(res => {
      this.lq_avaiable_plot_1 = res;
      console.log(res);
    });
    this.global.LqBooked_length.subscribe(res => {
      this.lqBooked_length = res;
      console.log(res);
    });
    this.global.LqForsale_length.subscribe(res => {
      this.lqforsale_length = res;
      console.log(res);
    });

    this.global._7S_length.subscribe(res => {
      this._7Slength = res;
      console.log(res);
    });

    this.global._7SBooked_length.subscribe(res => {
      this._7Sbooked_length = res;
      console.log(res);
    });

    this.global._7SForsale_length.subscribe(res => {
      this._7Sforsale_length = res;
      console.log(res);
    });
  }

  getAllGraphs() {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Luqman Town");
      yield _this4.apicall.api_getallLuqmanGraphs();
      yield _this4.global.AllLuqmanGraphs.subscribe(graphs => {
        console.log(graphs);
        _this4.allGraphs = graphs[0]; // Days

        if (graphs[0].length !== 0) {
          for (let i = 0; i < graphs[0].length; i++) {
            _this4.dailybookedrevenue_label.push(graphs[0][i].day);

            _this4.dailybookedrevenue_data.push(graphs[0][i].total_bookedrevenue);
          }

          console.log(_this4.dailybookedrevenue_data);
        } // Month


        if (graphs[1].length !== 0) {
          for (let i = 0; i < graphs[1].length; i++) {
            _this4.monthlyBookedrevenue_label.push(graphs[1][i].month);

            _this4.monthlyBookedrevenue_data.push(graphs[1][i].total_bookedrevenue);
          }

          console.log(_this4.monthlyBookedrevenue_data);
        }

        if (graphs[3].length !== 0) {
          for (let i = 0; i < graphs[3].length; i++) {
            _this4.dailyrevenue_label.push(graphs[3][i].day);

            _this4.dailyrevenue_data.push(graphs[3][i].total_installmentrevenue);
          }

          console.log(_this4.dailyrevenue_data);
        } // Month


        if (graphs[4].length !== 0) {
          for (let i = 0; i < graphs[4].length; i++) {
            _this4.monthlyrevenue_label.push(graphs[4][i].month);

            _this4.monthlyrevenue_data.push(graphs[4][i].total_installmentrevenue);
          }

          console.log(_this4.monthlyrevenue_data);
        } //  transactions
        //day 


        if (graphs[6].length !== 0) {
          for (let i = 0; i < graphs[6].length; i++) {
            _this4.dailytransactions_label.push(graphs[6][i].day);

            _this4.dailytransactionsdebit_data.push(graphs[6][i].total_debit);

            _this4.dailytransactionscredit_data.push(graphs[6][i].total_credit);

            _this4.dailytransactionstype_data.push(graphs[6][i].type);
          }

          console.log(_this4.dailytransactions_label);
          console.log(_this4.dailytransactionsdebit_data);
        } // Month


        if (graphs[7].length !== 0) {
          for (let i = 0; i < graphs[7].length; i++) {
            _this4.monthlytransactions_label.push(graphs[7][i].month);

            _this4.monthlytransactionsdebit_data.push(graphs[7][i].total_debit);

            _this4.monthlytransactionscredit_data.push(graphs[7][i].total_credit);

            _this4.monthlytransactionstype_data.push(graphs[7][i].type);
          }

          console.log(_this4.monthlytransactions_label);
          console.log(_this4.monthlytransactionsdebit_data);
        } //  expense
        //day 


        if (graphs[8].length !== 0) {
          for (let i = 0; i < graphs[8].length; i++) {
            _this4.dailyexpense_label.push(graphs[8][i].day);

            _this4.dailyexpensedebit_data.push(graphs[8][i].total_debit);

            _this4.dailyexpensecredit_data.push(graphs[8][i].total_credit);

            _this4.dailyexpensetype_data.push(graphs[8][i].type);
          }

          console.log(_this4.dailyexpense_label);
          console.log(_this4.dailyexpensedebit_data);
        } // Month


        if (graphs[9].length !== 0) {
          for (let i = 0; i < graphs[9].length; i++) {
            _this4.monthlyexpense_label.push(graphs[9][i].month);

            _this4.monthlyexpensedebit_data.push(graphs[9][i].total_debit);

            _this4.monthlyexpensecredit_data.push(graphs[9][i].total_credit);

            _this4.monthlyexpensetype_data.push(graphs[9][i].type);
          }

          console.log(_this4.monthlyexpense_label);
          console.log(_this4.monthlyexpensedebit_data);
        } //  assets
        //day 


        if (graphs[10].length !== 0) {
          for (let i = 0; i < graphs[10].length; i++) {
            _this4.dailyassets_label.push(graphs[10][i].day);

            _this4.dailyassetsdebit_data.push(graphs[10][i].total_debit);

            _this4.dailyassetscredit_data.push(graphs[10][i].total_credit);

            _this4.dailyassetstype_data.push(graphs[10][i].type);
          }

          console.log(_this4.dailyassets_label);
          console.log(_this4.dailyassetsdebit_data);
        } // Month


        if (graphs[11].length !== 0) {
          for (let i = 0; i < graphs[11].length; i++) {
            _this4.monthlyassets_label.push(graphs[11][i].month);

            _this4.monthlyassetsdebit_data.push(graphs[11][i].total_debit);

            _this4.monthlyassetscredit_data.push(graphs[11][i].total_credit);

            _this4.monthlyassetstype_data.push(graphs[11][i].type);
          }

          console.log(_this4.monthlyassets_label);
          console.log(_this4.monthlyassetsdebit_data);
        }
      });
    })();
  } //  7 Star


  getAllGraphs7Star() {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.apicall.api_getallGraphs();
      console.log("7 Star");
      yield _this5.apicall.api_getallStarGraphs();
      yield _this5.global.AllStarGraphs.subscribe(graphs => {
        console.log(graphs); // Days

        if (graphs[0].length !== 0) {
          for (let i = 0; i < graphs[0].length; i++) {
            _this5.star_dailybookedrevenue_label.push(graphs[0][i].day);

            _this5.star_dailybookedrevenue_data.push(graphs[0][i].total_bookedrevenue);
          }

          console.log(_this5.star_dailybookedrevenue_data);
        } // Month


        if (graphs[1].length !== 0) {
          for (let i = 0; i < graphs[1].length; i++) {
            _this5.star_monthlyBookedrevenue_label.push(graphs[1][i].month);

            _this5.star_monthlyBookedrevenue_data.push(graphs[1][i].total_bookedrevenue);
          }

          console.log(_this5.star_monthlyBookedrevenue_data);
        }

        if (graphs[3].length !== 0) {
          for (let i = 0; i < graphs[3].length; i++) {
            _this5.star_dailyrevenue_label.push(graphs[3][i].day);

            _this5.star_dailyrevenue_data.push(graphs[3][i].total_installmentrevenue);
          }

          console.log(_this5.star_dailyrevenue_data);
        } // Month


        if (graphs[4].length !== 0) {
          for (let i = 0; i < graphs[4].length; i++) {
            _this5.star_monthlyrevenue_label.push(graphs[4][i].month);

            _this5.star_monthlyrevenue_data.push(graphs[4][i].total_installmentrevenue);
          }

          console.log(_this5.star_monthlyrevenue_data);
        }
      });
    })();
  }

  getgraphbyPlot($event) {
    console.log(this.monthlyrevenue_label.length);
    console.log(this.monthlyrevenue_label);
    console.log($event.target.value); //  this.apicall.api_getallGraphsbyplots($event.target.value);

    this.getAllGraphs();
    this.ngAfterViewInit();
  }

  lineChartMethod() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dailybookedrevenue_label,
        datasets: [{
          label: "Daily",
          data: this.dailybookedrevenue_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent"
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  }

  lineChartMethod1() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas1.nativeElement, {
      type: 'line',
      data: {
        labels: this.monthlyBookedrevenue_label,
        datasets: [{
          label: "Monthly",
          data: this.monthlyBookedrevenue_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent"
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  }

  lineChartMethod3() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas3.nativeElement, {
      type: 'line',
      data: {
        labels: this.dailyrevenue_label,
        datasets: [{
          label: "Daily",
          data: this.dailyrevenue_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  }

  lineChartMethod4() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas4.nativeElement, {
      type: 'line',
      data: {
        labels: this.monthlyrevenue_label,
        datasets: [{
          label: "Monthly",
          data: this.monthlyrevenue_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //daily transactions


  lineChartMethod2() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas9.nativeElement, {
      type: 'line',
      data: {
        labels: this.dailytransactions_label,
        datasets: [{
          label: "Daily Debit",
          data: this.dailytransactionsdebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Daily Credit",
          data: this.dailytransactionscredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //monthly transactions


  lineChartMethod10() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas10.nativeElement, {
      type: 'line',
      data: {
        labels: this.monthlytransactions_label,
        datasets: [{
          label: "Monthly Debit",
          data: this.monthlytransactionsdebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Monthly Credit",
          data: this.monthlytransactionscredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //daily expense


  lineChartMethod11() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas11.nativeElement, {
      type: 'line',
      data: {
        labels: this.dailyexpense_label,
        datasets: [{
          label: "Daily Debit",
          data: this.dailyexpensedebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Daily Credit",
          data: this.dailyexpensecredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //monthly expense


  lineChartMethod12() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas12.nativeElement, {
      type: 'line',
      data: {
        labels: this.monthlyexpense_label,
        datasets: [{
          label: "Monthly Debit",
          data: this.monthlyexpensedebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Monthly Credit",
          data: this.monthlyexpensecredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //daily assets


  lineChartMethod13() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas13.nativeElement, {
      type: 'line',
      data: {
        labels: this.dailyassets_label,
        datasets: [{
          label: "Daily Debit",
          data: this.dailyassetsdebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Daily Credit",
          data: this.dailyassetscredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  } //monthly expense


  lineChartMethod14() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.lineCanvas14.nativeElement, {
      type: 'line',
      data: {
        labels: this.monthlyassets_label,
        datasets: [{
          label: "Monthly Debit",
          data: this.monthlyassetsdebit_data,
          borderColor: "#3e95cd",
          backgroundColor: "transparent",
          fill: false
        }, {
          label: "Monthly Credit",
          data: this.monthlyassetscredit_data,
          borderColor: "#c45850",
          backgroundColor: "transparent",
          fill: false
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        }
      }
    });
  }

  changesSegment() {
    this.ngAfterViewInit();
  }

  six_ID() {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 6
      };
      yield _this6.apicall.api_post_graphdetailsbyide(x);

      _this6.route.navigate(['graph-data'], {
        state: {
          data: 6
        }
      });
    })();
  }

  seven_ID() {
    var _this7 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 7
      };
      yield _this7.apicall.api_post_graphdetailsbyide(x);

      _this7.route.navigate(['graph-data'], {
        state: {
          data: 7
        }
      });
    })();
  }

  eight_ID() {
    var _this8 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 8
      };
      yield _this8.apicall.api_post_graphdetailsbyide(x);

      _this8.route.navigate(['graph-data'], {
        state: {
          data: 8
        }
      });
    })();
  }

  nine_ID() {
    var _this9 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 9
      };
      yield _this9.apicall.api_post_graphdetailsbyide(x);

      _this9.route.navigate(['graph-data'], {
        state: {
          data: 9
        }
      });
    })();
  }

  Graph_data() {
    this.route.navigate(['graph-data']);
  }

  getbyType($event) {
    var _this10 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);

      if ($event.target.value == 'all') {
        yield _this10.apicall.api_get_all_accounts();
      } else {
        yield _this10.apicall.api_getaccountsBytype($event.target.value);
      }
    })();
  }

  getbySource($event) {
    var _this11 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);

      if ($event.target.value == 'all') {
        yield _this11.apicall.api_get_all_accounts();
      } else {
        yield _this11.apicall.api_getaccountsBysource($event.target.value);
      }
    })();
  }

  Refresh() {
    var _this12 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.show = true;
      setTimeout(() => {
        _this12.show = false;

        _this12.apicall.api_get_all_accounts();
      }, 1500);
    })();
  }

  segmentChanged(ev) {
    console.log('Segment changed', ev);
  }

  formatDate(value) {
    console.log(value);
    this.fromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(value), 'yyyy-MM-dd');
    console.log(this.fromDate);
    this.pastSummary.start = this.fromDate;
  }

  todate(toDate) {
    console.log(toDate);
    this.toDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(toDate), 'yyyy-MM-dd');
    console.log(this.toDate);
    this.pastSummary.end = this.toDate;
    this.apicall.api_getaccountsBydate(this.pastSummary);
  }

  DatePicker() {
    this.pickerSelect = 'picker';
  }

  One_ID() {
    var _this13 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 1
      };
      yield _this13.apicall.api_post_graphdetailsbyide(x);

      _this13.route.navigate(['graph-data'], {
        state: {
          data: 1
        }
      });
    })();
  }

  Tow_ID() {
    var _this14 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 2
      };
      yield _this14.apicall.api_post_graphdetailsbyide(x);

      _this14.route.navigate(['graph-data'], {
        state: {
          data: 2
        }
      });
    })();
  }

  three_ID() {
    var _this15 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 4
      };
      yield _this15.apicall.api_post_graphdetailsbyide(x);

      _this15.route.navigate(['graph-data'], {
        state: {
          data: 4
        }
      });
    })();
  }

  four_ID() {
    var _this16 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 5
      };
      yield _this16.apicall.api_post_graphdetailsbyide(x);

      _this16.route.navigate(['graph-data'], {
        state: {
          data: 5
        }
      });
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_5__.ApicallService
}, {
  type: _services_data_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
}];

HomePage.propDecorators = {
  lineCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart']
  }],
  lineCanvas1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart1']
  }],
  lineCanvas3: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart3']
  }],
  lineCanvas4: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart4']
  }],
  lineCanvas9: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart9']
  }],
  lineCanvas10: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart10']
  }],
  lineCanvas11: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart11']
  }],
  lineCanvas12: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart12']
  }],
  lineCanvas13: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart13']
  }],
  lineCanvas14: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['lineChart14']
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-content {\n  --background: #fff;\n  text-align: center;\n}\n\nsvg {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  z-index: 0;\n}\n\nion-card {\n  height: 200px;\n  --background: transparent;\n  z-index: 1;\n}\n\n.c1 {\n  --background: var(--ion-color-primary);\n  color: #fff;\n  min-width: 160px;\n  box-shadow: var(--ion-color-primary) 0px 25px 50px -12px;\n}\n\n.c2 {\n  position: fixed;\n  width: 350px;\n  height: 80%;\n  box-shadow: none;\n}\n\n.c5 {\n  height: 50px;\n  box-shadow: none;\n}\n\n.c3 {\n  height: auto;\n  text-align: center;\n  box-shadow: none;\n}\n\n.st1 {\n  color: #fff;\n  margin-top: 30px;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: 1px;\n}\n\n.st2 {\n  color: #fff;\n  margin-top: 10px;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: 1px;\n}\n\n.st3 {\n  float: left;\n  margin-top: 5px;\n  font-size: 15px;\n  color: #000;\n}\n\n.t1 {\n  color: #fff;\n  font-size: 70px;\n}\n\n.t2 {\n  text-align: left;\n  margin-left: 20px;\n  margin-top: 40px;\n}\n\n.t3 {\n  margin-top: 20px;\n}\n\n.t4 {\n  color: var(--ion-color-primary);\n  float: right;\n  font-size: 18px;\n}\n\n.t5 {\n  float: left;\n  font-size: 20px;\n}\n\n.t6 {\n  text-align: right;\n  font-size: 17px;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n  margin-right: 12px;\n}\n\ncanvas {\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 768px) {\n  .c2 {\n    position: static;\n    width: 96%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .c1 {\n    max-width: 150px;\n    margin: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBS0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFGRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUFKRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuc3Zne1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jMXtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwcHggMjVweCA1MHB4IC0xMnB4O1xyXG59XHJcblxyXG4uYzJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYzV7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jM3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zdDF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnICwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uc3Qye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnN0M3tcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udDF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG4udDJ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4udDN7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnQ0e1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnQ1e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnQ2e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDsgXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5jYW52YXN7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAuYzJ7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCl7XHJcbiAgLmMxe1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcblxyXG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-icon class=\"icn\" name=\"storefront\"></ion-icon>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" mode=\"ios\">\r\n \r\n\r\n\r\n  <ion-row>\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\" size-lg=\"2\" size-xl=\"2\">\r\n      <ion-card class=\"c1\"> \r\n        <ion-card-subtitle class=\"st1\">Total Plots</ion-card-subtitle> \r\n        <ion-card-title class=\"t1\">{{lq_avaiable_plot_1}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st2\">See Details</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n    <ion-col size-xs=\"6\" size-md=\"3\" size-lg=\"2\" size-xl=\"2\">\r\n      <ion-card class=\"c1\"> \r\n        <ion-card-subtitle class=\"st1\">Remaining Plots</ion-card-subtitle> \r\n        <ion-card-title class=\"t1\">{{lqforsale_length}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st2\">See Details</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\" size-lg=\"2\" size-xl=\"2\">\r\n      <ion-card class=\"c1\"> \r\n        <ion-card-subtitle class=\"st1\">Booked Plots</ion-card-subtitle>\r\n        <ion-card-title class=\"t1\">{{lqBooked_length}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st2\">See Details</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"3\" size-lg=\"2\" size-xl=\"2\">\r\n      <ion-card class=\"c1\"> \r\n        <ion-card-subtitle class=\"st1\">Total Customers</ion-card-subtitle>\r\n        <ion-card-title class=\"t1\">{{this.See_Customer.length}}</ion-card-title>\r\n        <ion-card-subtitle class=\"st2\">See Details</ion-card-subtitle> \r\n      </ion-card>\r\n    </ion-col>\r\n\r\n  \r\n\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n      <ion-card class=\"c2\"> \r\n        <ion-card-title class=\"t3\">Overview</ion-card-title>\r\n\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\">Total Plots</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{lq_avaiable_plot_1}}</ion-card-title>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\">Total Customers</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{this.See_Customer.length}}</ion-card-title>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\">Booked Plots</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{lqBooked_length}}</ion-card-title>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\">Remaining Plots</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{lqforsale_length}}</ion-card-title>\r\n        </ion-card>\r\n\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\"> Booking Revenue</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{ this.summary.totalbooking}}</ion-card-title>\r\n        </ion-card>\r\n\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\"> Installment Revenue</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{ this.summary.totalinstallment}}</ion-card-title>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"c5\">\r\n          <ion-card-subtitle class=\"st3\"> Total Expenses</ion-card-subtitle>\r\n          <ion-card-title class=\"t4\">{{ this.summary.totalexpense}}</ion-card-title>\r\n        </ion-card>\r\n\r\n\r\n\r\n\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-card-title class=\"t2\">Total Booking Revenue  </ion-card-title>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n       \r\n  <ion-row>\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"8\">\r\n      <ion-card class=\"c3\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Daily </ion-card-title>\r\n            <ion-card-title class=\"t6\" (click)=\"One_ID()\">See Details </ion-card-title>\r\n            <canvas #lineChart></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Monthly </ion-card-title>\r\n            <ion-card-title class=\"t6\" (click)=\"Tow_ID()\">See Details </ion-card-title>\r\n            <canvas #lineChart1 id=\"lineChart1\" ></canvas>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    </ion-row>\r\n    \r\n\r\n\r\n  <ion-row>\r\n   \r\n\r\n    <ion-col size=\"12\">\r\n      <ion-card-title class=\"t2\">Total Installment Revenue  </ion-card-title>\r\n    </ion-col>\r\n\r\n   \r\n  </ion-row>\r\n\r\n    \r\n    <ion-row>\r\n    <ion-col size-xs=\"12\" size-md=\"8\">\r\n      <ion-card class=\"c3\">\r\n        \r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Daily </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart3 ></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Monthly </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart4 ></canvas>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n\r\n  </ion-row>\r\n\r\n\r\n  \r\n  <ion-row>\r\n   \r\n\r\n    <ion-col size=\"12\">\r\n      <ion-card-title class=\"t2\">Total Transactions Revenue  </ion-card-title>\r\n    </ion-col>\r\n\r\n   \r\n  </ion-row>\r\n\r\n    \r\n    <ion-row>\r\n    <ion-col size-xs=\"12\" size-md=\"8\">\r\n      <ion-card class=\"c3\">\r\n        \r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Daily </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart9 ></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Monthly </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart10 ></canvas>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n\r\n  </ion-row>\r\n\r\n\r\n\r\n  \r\n  <ion-row>\r\n   \r\n\r\n    <ion-col size=\"12\">\r\n      <ion-card-title class=\"t2\">Total Expense Revenue  </ion-card-title>\r\n    </ion-col>\r\n\r\n   \r\n  </ion-row>\r\n\r\n    \r\n    <ion-row>\r\n    <ion-col size-xs=\"12\" size-md=\"8\">\r\n      <ion-card class=\"c3\">\r\n        \r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Daily </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart11 ></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Monthly </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart12 ></canvas>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n\r\n  </ion-row>\r\n\r\n\r\n  \r\n  <ion-row>\r\n   \r\n\r\n    <ion-col size=\"12\">\r\n      <ion-card-title class=\"t2\">Total Assets Revenue  </ion-card-title>\r\n    </ion-col>\r\n\r\n   \r\n  </ion-row>\r\n\r\n    \r\n    <ion-row>\r\n    <ion-col size-xs=\"12\" size-md=\"8\">\r\n      <ion-card class=\"c3\">\r\n        \r\n        <ion-row>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Daily </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart13 ></canvas>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-md=\"6\">\r\n            <ion-card-title class=\"t5\">Monthly </ion-card-title>\r\n            <ion-card-title class=\"t6\">See Details </ion-card-title>\r\n            <canvas #lineChart14 ></canvas>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n        \r\n\r\n      </ion-card>\r\n    </ion-col>\r\n    \r\n\r\n  </ion-row>\r\n\r\n\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map