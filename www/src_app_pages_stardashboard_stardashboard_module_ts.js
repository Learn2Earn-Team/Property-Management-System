"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_stardashboard_stardashboard_module_ts"],{

/***/ 5115:
/*!*********************************************************************!*\
  !*** ./src/app/pages/stardashboard/stardashboard-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StardashboardPageRoutingModule": () => (/* binding */ StardashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stardashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stardashboard.page */ 9211);




const routes = [
    {
        path: '',
        component: _stardashboard_page__WEBPACK_IMPORTED_MODULE_0__.StardashboardPage
    }
];
let StardashboardPageRoutingModule = class StardashboardPageRoutingModule {
};
StardashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StardashboardPageRoutingModule);



/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./src/app/pages/stardashboard/stardashboard.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StardashboardPageModule": () => (/* binding */ StardashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stardashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stardashboard-routing.module */ 5115);
/* harmony import */ var _stardashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stardashboard.page */ 9211);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ 8072);








let StardashboardPageModule = class StardashboardPageModule {
};
StardashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stardashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.StardashboardPageRoutingModule,
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__.NgCircleProgressModule.forRoot({
                "outerStrokeLinecap": "butt"
            })
        ],
        declarations: [_stardashboard_page__WEBPACK_IMPORTED_MODULE_1__.StardashboardPage]
    })
], StardashboardPageModule);



/***/ }),

/***/ 9211:
/*!***********************************************************!*\
  !*** ./src/app/pages/stardashboard/stardashboard.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StardashboardPage": () => (/* binding */ StardashboardPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stardashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stardashboard.page.html?ngResource */ 3131);
/* harmony import */ var _stardashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stardashboard.page.scss?ngResource */ 5185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);









chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
let StardashboardPage = class StardashboardPage {
  constructor(apicall, global, route) {
    this.apicall = apicall;
    this.global = global;
    this.route = route; // 7 Start

    this.star_dailybookedrevenue_label = [];
    this.star_dailybookedrevenue_data = [];
    this.star_monthlyBookedrevenue_label = [];
    this.star_monthlyBookedrevenue_data = [];
    this.star_dailyrevenue_label = [];
    this.star_dailyrevenue_data = [];
    this.star_monthlyrevenue_label = [];
    this.star_monthlyrevenue_data = [];
  }

  ngOnInit() {
    this.getAllPlots();
  }

  ngAfterViewInit() {
    this.getAllPlots();
    this.getAllGraphs7Star();
    this.lineChartMethod5();
    this.lineChartMethod6();
    this.lineChartMethod7();
    this.lineChartMethod8();
  } //  7 Star


  getAllGraphs7Star() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.apicall.api_getallGraphs();
      console.log("7 Star");
      yield _this.apicall.api_getallStarGraphs();
      yield _this.global.AllStarGraphs.subscribe(graphs => {
        console.log(graphs); // Days

        if (graphs[0].length !== 0) {
          for (let i = 0; i < graphs[0].length; i++) {
            _this.star_dailybookedrevenue_label.push(graphs[0][i].day);

            _this.star_dailybookedrevenue_data.push(graphs[0][i].total_bookedrevenue);
          }

          console.log(_this.star_dailybookedrevenue_data);
        } // Month


        if (graphs[1].length !== 0) {
          for (let i = 0; i < graphs[1].length; i++) {
            _this.star_monthlyBookedrevenue_label.push(graphs[1][i].month);

            _this.star_monthlyBookedrevenue_data.push(graphs[1][i].total_bookedrevenue);
          }

          console.log(_this.star_monthlyBookedrevenue_data);
        }

        if (graphs[3].length !== 0) {
          for (let i = 0; i < graphs[3].length; i++) {
            _this.star_dailyrevenue_label.push(graphs[3][i].day);

            _this.star_dailyrevenue_data.push(graphs[3][i].total_installmentrevenue);
          }

          console.log(_this.star_dailyrevenue_data);
        } // Month


        if (graphs[4].length !== 0) {
          for (let i = 0; i < graphs[4].length; i++) {
            _this.star_monthlyrevenue_label.push(graphs[4][i].month);

            _this.star_monthlyrevenue_data.push(graphs[4][i].total_installmentrevenue);
          }

          console.log(_this.star_monthlyrevenue_data);
        }
      });
    })();
  }

  getAllPlots() {
    this.apicall.api_getPlots();

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

  lineChartMethod5() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.lineCanvas5.nativeElement, {
      type: 'bar',
      data: {
        labels: this.star_dailybookedrevenue_label,
        datasets: [{
          label: 'Daily',
          backgroundColor: "rgba(255,255,255,0)",
          borderColor: "#3C4CB8",
          borderWidth: 3,
          hoverBackgroundColor: "#002f85",
          hoverBorderColor: "#6495ed",
          data: this.star_dailybookedrevenue_data
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#6495ed'
            }
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.5
            },
            ticks: {
              display: true
            },
            afterFit: function (scaleInstance) {
              scaleInstance.width = 2; // sets the width to 100px
            }
          },
          x: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.8
            },
            ticks: {
              font: {
                size: 17
              },
              color: 'white'
            }
          }
        }
      }
    });
  }

  lineChartMethod6() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.lineCanvas6.nativeElement, {
      type: 'line',
      data: {
        labels: this.star_monthlyBookedrevenue_label,
        datasets: [{
          label: 'Monthly',
          backgroundColor: "rgba(255,255,255,0)",
          borderColor: "#3C4CB8",
          borderWidth: 3,
          hoverBackgroundColor: "#002f85",
          hoverBorderColor: "#6495ed",
          data: this.star_monthlyBookedrevenue_data
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#6495ed'
            }
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.5
            },
            ticks: {
              display: true
            },
            afterFit: function (scaleInstance) {
              scaleInstance.width = 2; // sets the width to 100px
            }
          },
          x: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.8
            },
            ticks: {
              font: {
                size: 17
              },
              color: 'white'
            }
          }
        }
      }
    });
  }

  lineChartMethod7() {
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.lineCanvas7.nativeElement, {
      type: 'line',
      data: {
        labels: this.star_dailyrevenue_label,
        datasets: [{
          label: 'Daily',
          backgroundColor: "rgba(255,255,255,0)",
          borderColor: "#3C4CB8",
          borderWidth: 3,
          hoverBackgroundColor: "#002f85",
          hoverBorderColor: "#6495ed",
          data: this.star_dailyrevenue_data
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#6495ed'
            }
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.5
            },
            ticks: {
              display: true
            },
            afterFit: function (scaleInstance) {
              scaleInstance.width = 2; // sets the width to 100px
            }
          },
          x: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.8
            },
            ticks: {
              font: {
                size: 17
              },
              color: 'white'
            }
          }
        }
      }
    });
  }

  lineChartMethod8() {
    console.log(this.star_monthlyrevenue_label);
    console.log(this.star_monthlyrevenue_data);
    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.lineCanvas8.nativeElement, {
      type: 'bar',
      data: {
        labels: this.star_monthlyrevenue_label,
        datasets: [{
          label: 'Monthly',
          backgroundColor: "rgba(255,255,255,0)",
          borderColor: "#3C4CB8",
          borderWidth: 3,
          hoverBackgroundColor: "#002f85",
          hoverBorderColor: "#6495ed",
          data: this.star_monthlyrevenue_data
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.4 // smooth lines

          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#6495ed'
            }
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.5
            },
            ticks: {
              display: true
            },
            afterFit: function (scaleInstance) {
              scaleInstance.width = 2; // sets the width to 100px
            }
          },
          x: {
            grid: {
              display: true,
              drawBorder: false,
              lineWidth: 0.8
            },
            ticks: {
              font: {
                size: 17
              },
              color: 'white'
            }
          }
        }
      }
    });
  }

  six_ID() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 6
      };
      yield _this2.apicall.api_post_graphdetailsbyide(x);

      _this2.route.navigate(['graph-data'], {
        state: {
          data: 6
        }
      });
    })();
  }

  seven_ID() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 7
      };
      yield _this3.apicall.api_post_graphdetailsbyide(x);

      _this3.route.navigate(['graph-data'], {
        state: {
          data: 7
        }
      });
    })();
  }

  eight_ID() {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 8
      };
      yield _this4.apicall.api_post_graphdetailsbyide(x);

      _this4.route.navigate(['graph-data'], {
        state: {
          data: 8
        }
      });
    })();
  }

  nine_ID() {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        ide: 9
      };
      yield _this5.apicall.api_post_graphdetailsbyide(x);

      _this5.route.navigate(['graph-data'], {
        state: {
          data: 9
        }
      });
    })();
  }

};

StardashboardPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

StardashboardPage.propDecorators = {
  lineCanvas5: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['lineChart5']
  }],
  lineCanvas6: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['lineChart6']
  }],
  lineCanvas7: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['lineChart7']
  }],
  lineCanvas8: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['lineChart8']
  }]
};
StardashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-stardashboard',
  template: _stardashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_stardashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], StardashboardPage);


/***/ }),

/***/ 5185:
/*!************************************************************************!*\
  !*** ./src/app/pages/stardashboard/stardashboard.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #f2f4f5;\n}\nion-toolbar ion-label {\n  padding: 0px 7px;\n  font-size: 14px;\n}\nion-toolbar ion-avatar {\n  width: 30px;\n  height: 30px;\n}\nion-content {\n  --background: #f2f4f5;\n}\nion-content h2 {\n  margin: 0%;\n}\nion-content ion-item {\n  --background: transparent;\n}\nion-progress-bar {\n  height: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n.card-header {\n  background: none;\n}\nion-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n}\nion-segment {\n  width: 150px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.dateDisplay {\n  width: 300px;\n  text-align: center;\n  height: 45px;\n}\n.dateDisplay .button {\n  margin-left: auto;\n  margin-right: auto;\n}\n.dateDisplayText {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n.fromDate {\n  width: 120px;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n.dateDash {\n  width: 40px;\n}\n.toDate {\n  width: 120px;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\nion-datetime {\n  --title-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-text);\n}\nion-datetime button {\n  color: var(--ion-color-primary-text);\n}\n.margin {\n  margin-top: 21px;\n  --border-radius: 7px;\n  text-transform: none;\n  font-size: 17px;\n  text-decoration: none;\n  --background-hover-opacity:0px;\n  --background-hover:0px ;\n}\n.icon {\n  width: 50px;\n}\n.card2 {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n.center1 {\n  padding: 5px;\n}\n.button2 {\n  --border-radius: 7px;\n  text-transform: none;\n  margin-bottom: 10px;\n  font-size: 17px;\n  --background-hover-opacity:0px;\n  --background-hover:0px;\n  margin-top: 10px;\n}\n.card2 {\n  box-shadow: none;\n  margin: 18px;\n  border-radius: 11px;\n  padding: 20px;\n}\n.card2 h2 {\n  font-weight: 600;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n.seedetailBtn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-segment {\n  width: 100%;\n}\n.list {\n  background-color: #624dcb;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRU47QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRU47QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFBSztFQUNDLFVBQUE7QUFFTjtBQUFLO0VBQ0MseUJBQUE7QUFFTjtBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFBO0VBQ0UsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdGO0FBREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxZQUFBO0FBRUY7QUFERTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxpREFBQTtBQUlGO0FBRkE7RUFDRSxXQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxpREFBQTtBQU1GO0FBSkE7RUFDRSx1Q0FBQTtFQUNBLG9DQUFBO0FBT0Y7QUFORTtFQUNBLG9DQUFBO0FBUUY7QUFKQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFPRjtBQUxBO0VBQ0UsV0FBQTtBQVFGO0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsWUFBQTtBQVVGO0FBUEU7RUFFRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBU0o7QUFQRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVVKO0FBVEk7RUFDRSxnQkFBQTtFQUNBLG1FQUFBO0FBV047QUFQQTtFQUNFLGFBQUE7RUFDQyw4QkFBQTtFQUNDLG1CQUFBO0FBVUo7QUFQQTtFQUNFLFdBQUE7QUFVRjtBQVJBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBV0YiLCJmaWxlIjoic3RhcmRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI2YyZjRmNTtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgcGFkZGluZzogMHB4IDdweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWF2YXRhcntcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YyZjRmNTtcclxuICAgICBoMntcclxuICAgICAgbWFyZ2luOiAwJTtcclxuICAgICB9XHJcbiAgICAgaW9uLWl0ZW17XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgfVxyXG4gIH1cclxuICBpb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kYXRlRGlzcGxheSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIC5idXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbi5kYXRlRGlzcGxheVRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mcm9tRGF0ZSB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLmRhdGVEYXNoIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG4udG9EYXRlIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIC0tdGl0bGUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGV4dCk7XHJcbiAgYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFyZ2lue1xyXG4gIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTowcHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOjBweFxyXG59XHJcbi5pY29ue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5jYXJkMntcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2VudGVyMXtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiAgLmJ1dHRvbjJ7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkMntcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGgye1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogcmdiYSh2YXIoLS1icy1ibGFjay1yZ2IpLHZhcigtLWJzLXRleHQtb3BhY2l0eSkpIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlZWRldGFpbEJ0bntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2VnbWVudHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGlzdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI0ZGNiO1xyXG4gIGhlaWdodDogODBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 3131:
/*!************************************************************************!*\
  !*** ./src/app/pages/stardashboard/stardashboard.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n    <div class=\"form-head list mt-3 mx-4\">\r\n      <div class=\"me-auto w-100 p-4 d-flex  align-items-center justify-content-between\">\r\n        <div class=\"me-auto  d-lg-block\">\r\n          <h2 class=\"text-black font-w600\">7 star Dashboard</h2>\r\n          <p class=\"mb-0\">Welcome to 7 star Admin</p>\r\n        </div>\r\n        <ion-button  (click)=\"Refresh()\" color=\"secondary\" class=\"refresh_button mt-3\">\r\n          <span style=\"margin-right: 3px;\" *ngIf=\"!show\">Refresh</span>\r\n                <ion-spinner name=\"circles\" *ngIf=\"show\"></ion-spinner>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  \r\n   \r\n  \r\n    <div class=\"content-body\">\r\n      <!-- row -->\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 col-xxl-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-12\">\r\n                <div class=\"card bg-color property-bx text-white ion-margin\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"media d-sm-flex d-block align-items-center\">\r\n                      <span class=\"me-4 d-block mb-sm-0 mb-3\">\r\n                        <svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                          <path\r\n                            d=\"M31.8333 79.1667H4.16659C2.33325 79.1667 0.833252 77.6667 0.833252 75.8333V29.8333C0.833252 29 1.16659 28 1.83325 27.5L29.4999 1.66667C30.4999 0.833332 31.8333 0.499999 32.9999 0.999999C34.3333 1.66667 34.9999 2.83333 34.9999 4.16667V76C34.9999 77.6667 33.4999 79.1667 31.8333 79.1667ZM7.33325 72.6667H28.4999V11.6667L7.33325 31.3333V72.6667Z\"\r\n                            fill=\"white\" />\r\n                          <path\r\n                            d=\"M75.8333 79.1667H31.6666C29.8333 79.1667 28.3333 77.6667 28.3333 75.8334V36.6667C28.3333 34.8334 29.8333 33.3334 31.6666 33.3334H75.8333C77.6666 33.3334 79.1666 34.8334 79.1666 36.6667V76C79.1666 77.6667 77.6666 79.1667 75.8333 79.1667ZM34.9999 72.6667H72.6666V39.8334H34.9999V72.6667Z\"\r\n                            fill=\"white\" />\r\n                          <path\r\n                            d=\"M60.1665 79.1667H47.3332C45.4999 79.1667 43.9999 77.6667 43.9999 75.8334V55.5C43.9999 53.6667 45.4999 52.1667 47.3332 52.1667H60.1665C61.9999 52.1667 63.4999 53.6667 63.4999 55.5V75.8334C63.4999 77.6667 61.9999 79.1667 60.1665 79.1667ZM50.6665 72.6667H56.9999V58.8334H50.6665V72.6667Z\"\r\n                            fill=\"white\" />\r\n                        </svg>\r\n                      </span>\r\n  \r\n                      <div class=\"media-body mb-sm-0 mb-3 me-5 w-100\">\r\n                        <h4 class=\"fs-22 text-white \">Total Properties</h4>\r\n  \r\n                        <div>\r\n                          <ion-progress-bar value=\"{{_7Slength/100}}\" color=\"light\"></ion-progress-bar>\r\n                        </div>\r\n  \r\n                        <span class=\"fs-14\">{{_7Sforsale_length}} Remaning</span>\r\n                      </div>\r\n                      <span class=\"fs-3 font-w700 d-flex align-items-center\">{{_7Slength}}</span>\r\n  \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"card ion-margin\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"media d-flex justify-content-between align-items-center\">\r\n                      <div class=\"media-body me-3\">\r\n                        <h2 class=\"fs-36 text-black font-w600\">{{_7Sbooked_length}}</h2>\r\n                        <p class=\"fs-18 mb-0 text-black font-w500\">Properties Booked</p>\r\n                        <span class=\"fs-13\">Total Booked {{_7Sbooked_length}}/{{_7Slength}}</span>\r\n                      </div>\r\n                      <div style=\"width: 100px ;\">\r\n                        <circle-progress [responsive]=true [subtitle]=\"'Booked'\" [backgroundColor]=\"'#ffffff'\"\r\n                          [backgroundStrokeWidth]=\"0\" [backgroundPadding]=\"0\" [radius]=\"200\" [space]=\"-10\" [percent]=this._7Sbooked_length\r\n                          [units]=\"''\" [unitsFontSize]=\"36\" [unitsFontWeight]=\"400\" [unitsColor]=\"'#4854e0'\"\r\n                          [outerStrokeGradient]=true [outerStrokeWidth]=\"13\" [outerStrokeColor]=\"'#4854e0'\"\r\n                          [outerStrokeGradientStopColor]=\"'#4854e0'\" [innerStrokeColor]=\"'#f8f1f1'\" [innerStrokeWidth]=\"8\"\r\n                          [titleColor]=\"'#4854e0'\" [titleFontSize]=\"70\" [titleFontWeight]=\"800\"\r\n                          [subtitleColor]=\"'#4854e0'\" [subtitleFontSize]=\"47\" [subtitleFontWeight]=\"380\">\r\n                        </circle-progress>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"card ion-margin\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"media d-flex justify-content-between align-items-center\">\r\n                      <div class=\"media-body me-3\">\r\n                        <h2 class=\"fs-36 text-black font-w600\">{{_7Sforsale_length}}</h2>\r\n                        <p class=\"fs-18 mb-0 text-black font-w500\">Properties for Sale</p>\r\n                        <span class=\"fs-13\">Total Remaining {{_7Sforsale_length}}/{{_7Slength}}</span>\r\n                      </div>\r\n                      <div style=\"width: 100px ;\">\r\n                        <circle-progress [responsive]=true [subtitle]=\"'For Sale'\" [backgroundColor]=\"'#ffffff'\"\r\n                          [backgroundStrokeWidth]=\"0\" [backgroundPadding]=\"0\" [radius]=\"200\" [space]=\"-10\" [percent]=this._7Sforsale_length\r\n                          [units]=\"''\" [unitsFontSize]=\"'36'\" [unitsFontWeight]=\"400\" [unitsColor]=\"'#4854e0'\"\r\n                          [outerStrokeGradient]=true [outerStrokeWidth]=\"13\" [outerStrokeColor]=\"'#4854e0'\"\r\n                          [outerStrokeGradientStopColor]=\"'#4854e0'\" [innerStrokeColor]=\"'#f8f1f1'\" [innerStrokeWidth]=\"10\"\r\n                          [titleColor]=\"'#4854e0'\" [titleFontSize]=\"70\" [titleFontWeight]=\"800\"\r\n                          [subtitleColor]=\"'#4854e0'\" [subtitleFontSize]=\"47\" [subtitleFontWeight]=\"380\">\r\n                        </circle-progress>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <!-- 7 Star  -->\r\n          <center>\r\n            <ion-card class=\"card2 \">\r\n              <h2 class=\"text-black font-w900\">7 Star</h2>\r\n        </ion-card>\r\n        </center>\r\n          <div class=\"col-xl-12 col-xxl-12\">\r\n            <div class=\"card ion-margin\">\r\n                  <div class=\"card-header border-0 pb-0\">\r\n                    <h3 class=\"fs-20 text-black\">Total Booking Revenue  </h3>\r\n                  </div>\r\n              <div class=\"card-body pt-2 pb-0\">\r\n                <ion-row class=\"card-main\">\r\n                  <ion-col size-md=\"6\" size-sm=\"12\">\r\n                    <div class=\"seedetailBtn\">\r\n                      <p class=\"me-sm-auto me-3 mb-sm-0 mb-3 margin\">Daily</p>\r\n                      <ion-button fill=\"clear\" class=\"margin\" (click)=\"six_ID()\">\r\n                        See Details<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                    <canvas #lineChart5></canvas>\r\n                  </ion-col>\r\n                  <ion-col size-md=\"6\" size-sm=\"12\">\r\n                    <div class=\"seedetailBtn\">\r\n                      <p class=\"me-sm-auto me-3 mb-sm-0 mb-3 margin\">Monthly</p>\r\n                      <ion-button fill=\"clear\" class=\"margin\" (click)=\"seven_ID()\">\r\n                        See Details<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                    <canvas #lineChart6 id=\"lineChart1\" ></canvas>\r\n                  </ion-col>\r\n                </ion-row>\r\n  \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-xxl-12\">\r\n            <div class=\"card ion-margin\">\r\n                  <div class=\"card-header border-0 pb-0\">\r\n                    <h3 class=\"fs-20 text-black\">Total Installments Revenue  </h3>\r\n                  </div>\r\n              <div class=\"card-body pt-2 pb-0\">\r\n                <ion-row class=\"card-main\">\r\n                  <ion-col size-md=\"6\" size-sm=\"12\">\r\n                    <div class=\"seedetailBtn\">\r\n                      <p class=\"me-sm-auto me-3 mb-sm-0 mb-3 margin\">Daily</p>\r\n                      <ion-button fill=\"clear\" class=\"margin\" (click)=\"eight_ID()\">\r\n                        See Details<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                    <canvas #lineChart7 ></canvas>\r\n                  </ion-col>\r\n                  <ion-col size-md=\"6\" size-sm=\"12\">\r\n                    <div class=\"seedetailBtn\">\r\n                      <p class=\"me-sm-auto me-3 mb-sm-0 mb-3 margin\">Monthly</p>\r\n                      <ion-button fill=\"clear\" class=\"margin\" (click)=\"nine_ID()\">\r\n                        See Details<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                    <canvas #lineChart8 ></canvas>\r\n                  </ion-col>\r\n                </ion-row>\r\n  \r\n              </div>\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stardashboard_stardashboard_module_ts.js.map