"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_CallApi_apicall_service_ts"],{

/***/ 126:
/*!*************************************************!*\
  !*** ./src/app/services/Alert/alert.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let AlertService = class AlertService {
  constructor(alertController) {
    this.alertController = alertController;
  }

  presentAlert() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

AlertService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}];

AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AlertService);


/***/ }),

/***/ 3773:
/*!*****************************************************!*\
  !*** ./src/app/services/CallApi/apicall.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApicallService": () => (/* binding */ ApicallService)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth.service */ 3271);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _data_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/global.service */ 6606);
/* harmony import */ var _toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toasts/toast.service */ 5473);
/* harmony import */ var _Alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Alert/alert.service */ 126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);









let ApicallService = class ApicallService {
  constructor(route, authservice, http, global, toast, alert) {
    this.route = route;
    this.authservice = authservice;
    this.http = http;
    this.global = global;
    this.toast = toast;
    this.alert = alert;
  } //See Apointments


  api_login(data) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.authservice.con(data, 'login').then( /*#__PURE__*/function () {
        var _ref = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.data = JSON.parse(String(res).toString());
          console.log(_this.data);

          if (_this.data.error === false) {
            console.log('Login Successfully');

            _this.toast.loginSuccessfully();

            _this.route.navigate(['home']);

            console.log(_this.data);
            return;
          } else {
            console.log('invalid email or pasword');

            _this.toast.logininvalid();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        console.log(err);
      });
    })();
  }

  api_getPlots() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authservice.getdata('getPlots').then(result => {
        _this2.data = JSON.parse(String(result));
        console.log(_this2.data);
        console.log(_this2.data.filter(x => x.type === 'Commercial').length);
        console.log(_this2.data.filter(x => x.type === 'Residential').length);

        _this2.global.set_getplots(_this2.data); // luqman twon only


        _this2.global.store_LQ_only(_this2.data.filter(x => x.plot === 'Baba Fareed')); // luqman twon total plots


        _this2.global.store_LQ_length(_this2.data.filter(x => x.plot === 'Baba Fareed').length); // luqman twon total Commercial plots


        _this2.global.store_LQC_length(_this2.data.filter(x => x.type === 'Commercial' && x.plot == 'Baba Fareed').length); // luqman twon total Residential plots


        _this2.global.store_LQR_length(_this2.data.filter(x => x.type === 'Residential' && x.plot == 'Baba Fareed').length); // luqman twon total commercial booked plots


        _this2.global.store_LQCB_length(_this2.data.filter(x => x.status === 'booked' && x.type === 'Commercial' && x.plot == 'Baba Fareed').length); // luqman twon total commercial for sale plots


        _this2.global.store_LQCS_length(_this2.data.filter(x => x.status === 'for sale' && x.type === 'Commercial' && x.plot == 'Baba Fareed').length); // luqman twon total residential booked plots


        _this2.global.store_LQRB_length(_this2.data.filter(x => x.status === 'booked' && x.type === 'Residential' && x.plot == 'Baba Fareed').length); // luqman twon total residentail booked plots


        _this2.global.store_LQRS_length(_this2.data.filter(x => x.status === 'for sale' && x.type === 'Residential' && x.plot == 'Baba Fareed').length); // luqman twon total booked plots


        _this2.global.store_lqbooked_length(_this2.data.filter(x => x.status === 'booked' && x.plot == 'Baba Fareed').length); // luqman twon total for sale plots


        _this2.global.store_lqforsale_length(_this2.data.filter(x => x.status === 'for sale' && x.plot == 'Baba Fareed').length); // 7star Only


        _this2.global.store_7Splots_Only(_this2.data.filter(x => x.plot === '7 Star')); // 7star total plots


        _this2.global.store_7S_length(_this2.data.filter(x => x.plot === '7 Star').length); // 7 star total commercial  plots


        _this2.global.store_7SC_length(_this2.data.filter(x => x.type === 'Commercial' && x.plot == '7 Star').length); // 7 star total residentail  plots


        _this2.global.store_7SR_length(_this2.data.filter(x => x.type === 'Residential' && x.plot == '7 Star').length); // 7 star total commercial booked plots


        _this2.global.store_7SCB_length(_this2.data.filter(x => x.status === 'booked' && x.type === 'Commercial' && x.plot == '7 Star').length); // 7 star total commercial for sale plots


        _this2.global.store_7SCS_length(_this2.data.filter(x => x.status === 'for sale' && x.type === 'Commercial' && x.plot == '7 Star').length); // 7 star total residentail booked plots


        _this2.global.store_7SRB_length(_this2.data.filter(x => x.status === 'booked' && x.type === 'Residential' && x.plot == '7 Star').length); // 7 star total residentail for sale plots


        _this2.global.store_7SRS_length(_this2.data.filter(x => x.status === 'for sale' && x.type === 'Residential' && x.plot == '7 Star').length); // 7 Star total booked plots


        _this2.global.store_7sbooked_length(_this2.data.filter(x => x.status === 'booked' && x.plot == '7 Star').length); // 7 Star total for sale plots


        _this2.global.store_7sforsale_length(_this2.data.filter(x => x.status === 'for sale' && x.plot == '7 Star').length);
      }, err => {
        console.log(err);
      });
    })();
  }

  api_insert_plots(plot) {
    var _this3 = this;

    this.authservice.con(plot, 'insertplots').then( /*#__PURE__*/function () {
      var _ref2 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.get_plots = JSON.parse(String(res).toString());

        if (_this3.get_plots.error === false) {
          _this3.toast.plotaddedToast();

          console.log(_this3.get_plots);
          return;
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  } //Post//Add Appoinments


  api_update_plot(plot) {
    var _this4 = this;

    this.authservice.con(plot, 'updatePlots').then( /*#__PURE__*/function () {
      var _ref3 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this4.get_plots = JSON.parse(String(res).toString());

        if (_this4.get_plots.error === false) {
          console.log(_this4.get_plots);
          return;
        }
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  } //Post//Add Appoinments


  api_delete_plot(data) {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.authservice.con(data, 'deletePlots').then(result => {
        _this5.data = JSON.parse(String(result));

        if (_this5.data.error === false) {
          // this.toast.deleteDataToast();
          console.log(_this5.data);
          return;
        }

        console.log(_this5.data);
      }, err => {
        console.log(err);
      });
    })();
  } //Post//Add Appoinments


  api_delete_booking(data) {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.authservice.con(data, 'deletebooking').then(result => {
        _this6.data = JSON.parse(String(result));

        if (_this6.data.error === false) {
          // this.toast.deleteDataToast();
          console.log(_this6.data);
          return;
        }

        console.log(_this6.data);
      }, err => {
        console.log(err);
      });
    })();
  }

  api_insert_customer(customer) {
    var _this7 = this;

    this.authservice.con(customer, 'insertcustomer').then( /*#__PURE__*/function () {
      var _ref4 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this7.get_plots = JSON.parse(String(res).toString());

        if (_this7.get_plots.error === false) {
          _this7.toast.customeraddedToast();

          console.log(_this7.get_plots);
          return;
        }
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_insert_installment(install) {
    var _this8 = this;

    this.authservice.con(install, 'insertinstallment').then( /*#__PURE__*/function () {
      var _ref5 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.installment = JSON.parse(String(res).toString());

        if (_this8.installment.error === false) {
          _this8.toast.installaddedToast();

          console.log(_this8.installment);
          return;
        }
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  } // customer getdata
  //


  api_get_customer() {
    return this.authservice.getdata('getcustomer').then(result => {
      this.get_plots = JSON.parse(String(result));
      this.global.set_getcustomer(this.get_plots);
      console.log(this.get_plots, 'data Updated');
      return result;
    }, err => {
      console.log(err);
      return err;
    });
  } // customer dataupdate


  api_update_customer(customer) {
    var _this9 = this;

    this.authservice.con(customer, 'updatecustomer').then( /*#__PURE__*/function () {
      var _ref6 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this9.get_plots = JSON.parse(String(res).toString());

        if (_this9.get_plots.error === false) {
          console.log(_this9.get_plots);
          return;
        }
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  } // cutomer datadelete


  api_del_customer(customer) {
    var _this10 = this;

    this.authservice.con(customer, 'deletecustomer').then( /*#__PURE__*/function () {
      var _ref7 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this10.get_plots = JSON.parse(String(res).toString());

        if (_this10.get_plots.error === false) {
          console.log(_this10.get_plots);
          return;
        }
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_insert_booking(data) {
    var _this11 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.authservice.con(data, 'insertbooking').then(result => {
        _this11.data = JSON.parse(String(result));

        if (_this11.data.error === false) {
          // this.toast.add_booking();
          console.log(_this11.data);
          return;
        }

        console.log(_this11.data);
      }, err => {
        console.log(err); //  this.alert.presentAlert();
      });
    })();
  }

  api_post_graphdetailsbyide(data) {
    var _this12 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this12.authservice.con(data, 'post_graphdetailsbyide').then(result => {
        _this12.data = JSON.parse(String(result));

        _this12.global.See_Data(_this12.data);

        console.log(_this12.data);
      }, err => {
        console.log(err);
      });
    })();
  } //        // customer getdata
  //  async api_post_graphdetailsbyide() {
  //    await  this.authservice.getdata('post_graphdetailsbyide').then((result) => {
  //         this.get_plots = JSON.parse(String(result));
  //         this.global.set_getcustomer(this.get_plots);
  //         console.log(this.get_plots,'data Updated');
  //         return result;
  //       }, (err) => {
  //         console.log(err);
  //         return err
  //       });
  //     }
  // api_insert_booking(booking:any){
  //   this.authservice.con(booking, 'insertbooking').then(async (res) => {
  //     this.get_plots = JSON.parse(String(res).toString());
  //     if (this.get_plots.error === false) {
  //       console.log('send data successfull');
  //       return;
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }


  api_get_booking() {
    return this.authservice.getdata('getbookng').then(result => {
      this.get_plots = JSON.parse(String(result));
      this.global.set_getbooking(this.get_plots);
      console.log(this.get_plots, 'data Updated');
      return result;
    }, err => {
      console.log(err);
      return err;
    });
  }

  api_update_booking(booking) {
    var _this13 = this;

    this.authservice.con(booking, 'updatebooking').then( /*#__PURE__*/function () {
      var _ref8 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this13.get_plots = JSON.parse(String(res).toString());

        if (_this13.get_plots.error === false) {
          console.log(_this13.get_plots);
          return;
        }
      });

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_del_booking(booking) {
    var _this14 = this;

    this.authservice.con(booking, 'deletebooking').then( /*#__PURE__*/function () {
      var _ref9 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this14.get_plots = JSON.parse(String(res).toString());

        if (_this14.get_plots.error === false) {
          console.log(_this14.get_plots);
          return;
        }
      });

      return function (_x9) {
        return _ref9.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_get_all_boooking() {
    var _this15 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.authservice.getdata('getallbooking').then(result => {
        _this15.get_plots = JSON.parse(String(result));

        _this15.global.set_getAllbooking(_this15.get_plots);

        console.log(_this15.get_plots, 'data Updated');

        _this15.global.store_LQ_bookedPlots(_this15.get_plots.filter(x => x.status === 'booked' && x.plot == 'Baba Fareed'));

        _this15.global.store_7s_bookedPlots(_this15.get_plots.filter(x => x.status === 'booked' && x.plot == '7 Star'));

        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_insert_accounts(accounts) {
    var _this16 = this;

    this.authservice.con(accounts, 'insertTransactions').then( /*#__PURE__*/function () {
      var _ref10 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this16.accounts = JSON.parse(String(res).toString());
        console.log(_this16.accounts);

        if (_this16.accounts.error === false) {
          console.log(_this16.accounts);
          return;
        }
      });

      return function (_x10) {
        return _ref10.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_get_all_accounts() {
    var _this17 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this17.authservice.getdata('getmainaccounts').then(result => {
        _this17.get_plots = JSON.parse(String(result));

        _this17.global.set_storeAllaccounts(_this17.get_plots);

        console.log(_this17.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_get_totalnetbalance() {
    var _this18 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.authservice.getdata('gettotalnetbalance').then(result => {
        _this18.get_plots = JSON.parse(String(result));

        _this18.global.set_storetotalnetbalance(_this18.get_plots);

        console.log(_this18.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_get_totaldebit() {
    var _this19 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this19.authservice.getdata('gettotaldebit').then(result => {
        _this19.get_plots = JSON.parse(String(result));

        _this19.global.set_storetotalDebit(_this19.get_plots);

        console.log(_this19.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_get_totalcredit() {
    var _this20 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this20.authservice.getdata('gettotalcredit').then(result => {
        _this20.get_plots = JSON.parse(String(result));

        _this20.global.set_storetotalcredit(_this20.get_plots);

        console.log(_this20.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_insert_transfer(transfer) {
    var _this21 = this;

    this.authservice.con(transfer, 'inserttransferownership').then( /*#__PURE__*/function () {
      var _ref11 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this21.get_plots = JSON.parse(String(res).toString());

        if (_this21.get_plots.error === false) {
          _this21.toast.onwership_transfered();

          console.log(_this21.get_plots);
          return;
        }
      });

      return function (_x11) {
        return _ref11.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_getInstallmentByp_id(p_id) {
    var _this22 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this22.authservice.getdata('getinstallmentbyplotid/' + p_id).then(result => {
        _this22.get_plots = JSON.parse(String(result));

        _this22.global.set_getinstallmentbyid(_this22.get_plots);

        console.log(_this22.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getlast_InstallmentByp_id(p_id) {
    var _this23 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this23.authservice.getdata('getlastinstallmentbyplotid/' + p_id).then(result => {
        _this23.get_plots = JSON.parse(String(result));
        console.log(_this23.get_plots);

        _this23.global.set_getlast_installmentbyid(_this23.get_plots[0].plot);

        console.log(_this23.get_plots[0].plot);

        if (_this23.get_plots[0].plot == 'Baba Fareed') {
          _this23.global.stor_lumantownInstallments(_this23.get_plots.filter(x => x.plot == 'Baba Fareed'));
        }

        if (_this23.get_plots[0].plot == '7 Star') {
          _this23.global.stor__7starInstallments(_this23.get_plots.filter(x => x.plot == '7 Star'));
        } else {
          console.log('no plots found');
        }

        console.log(_this23.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_get_customer_by_id(customer_id) {
    var _this24 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this24.authservice.getdata('getcustomerbycustomerid/' + customer_id).then(result => {
        _this24.get_plots = JSON.parse(String(result));

        _this24.global.set_customer_byid(_this24.get_plots);

        console.log(_this24.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_get_plot_by_id(p_id) {
    var _this25 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this25.authservice.getdata('getplotbyplotid/' + p_id).then(result => {
        _this25.get_plots = JSON.parse(String(result));

        _this25.global.set_plot_byid(_this25.get_plots);

        console.log(_this25.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getaccountsBytype(type) {
    var _this26 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this26.authservice.getdata('getaccountsbytype/' + type).then(result => {
        _this26.get_plots = JSON.parse(String(result));

        _this26.global.set_storeAllaccounts(_this26.get_plots);

        console.log(_this26.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getaccountsBysource(source) {
    var _this27 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this27.authservice.getdata('getaccountsbysource/' + source).then(result => {
        _this27.get_plots = JSON.parse(String(result));

        _this27.global.set_storeAllaccounts(_this27.get_plots);

        console.log(_this27.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getaccountsBystype(stype) {
    var _this28 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this28.authservice.getdata('getaccountsbystype/' + stype).then(result => {
        _this28.get_plots = JSON.parse(String(result));

        _this28.global.set_storeAllaccounts(_this28.get_plots);

        console.log(_this28.get_plots);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getaccountsByalltype(data) {
    var _this29 = this;

    this.authservice.con(data, 'getaccountsbyalltype').then( /*#__PURE__*/function () {
      var _ref12 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this29.data = JSON.parse(String(res).toString());
        console.log(_this29.data);

        _this29.global.set_storeAllaccounts(_this29.data);
      });

      return function (_x12) {
        return _ref12.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_getaccountsBydate(data) {
    var _this30 = this;

    this.authservice.con(data, 'getaccountsbydate').then( /*#__PURE__*/function () {
      var _ref13 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this30.data = JSON.parse(String(res).toString());
        console.log(_this30.data);

        _this30.global.set_storeAllaccounts(_this30.data);
      });

      return function (_x13) {
        return _ref13.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_getallGraphs() {
    var _this31 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this31.authservice.getdata('get_allrevenue_graph').then(result => {
        _this31.get_graphs = JSON.parse(String(result));

        _this31.global.set_storeAllGraphs(_this31.get_graphs);

        console.log(_this31.get_graphs);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getallLuqmanGraphs() {
    var _this32 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this32.authservice.getdata('get_allLuqmanrevenue_graph').then(result => {
        _this32.data = JSON.parse(String(result));

        _this32.global.set_storeAllLuqmanGraphs(_this32.data);

        console.log(_this32.data);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getallStarGraphs() {
    var _this33 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this33.authservice.getdata('get_allStarrevenue_graph').then(result => {
        _this33.data = JSON.parse(String(result));

        _this33.global.set_storeAllStarGraphs(_this33.data);

        console.log(_this33.data);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getForsale() {
    var _this34 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this34.authservice.getdata('gettotalsaleproperties').then(result => {
        _this34.get_getForsale = JSON.parse(String(result));

        _this34.global.get_gettotalsaleproperties(_this34.get_getForsale[0].total_saleproperties);

        console.log(_this34.get_getForsale);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_gettotalbookedproperties() {
    var _this35 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this35.authservice.getdata('gettotalbookedproperties').then(result => {
        _this35.get_gettotalbooked = JSON.parse(String(result));

        _this35.global.get_gettotalbookedproperties(_this35.get_gettotalbooked[0].total_bookedproperties);

        console.log(_this35.get_gettotalbooked);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getAllGraphsbyDate(date) {
    var _this36 = this;

    this.authservice.con(date, 'get_revenue_graphbydate').then( /*#__PURE__*/function () {
      var _ref14 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this36.get_graphs = JSON.parse(String(res).toString());

        _this36.global.set_storeAllGraphs(_this36.get_graphs);

        console.log(_this36.get_graphs);
      });

      return function (_x14) {
        return _ref14.apply(this, arguments);
      };
    }(), err => {
      console.log(err);
    });
  }

  api_gettotalproperties() {
    var _this37 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this37.authservice.getdata('gettotalproperties').then(result => {
        _this37.get_gettotalproperties = JSON.parse(String(result));

        _this37.global.get_gettotalproperties(_this37.get_gettotalproperties[0].total_properties);

        console.log(_this37.get_gettotalproperties);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_getbooked_plots(plot_no) {
    var _this38 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this38.authservice.getdata('getbookedplots/' + plot_no).then(result => {
        _this38.get_getbooked_plots = JSON.parse(String(result));

        _this38.global.get_getbooked_plots(_this38.get_getbooked_plots);

        console.log(_this38.get_getbooked_plots);

        if (_this38.get_getbooked_plots == '') {
          _this38.toast.notbooked();
        }

        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  } // Get Owner


  api_getOwner() {
    var _this39 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this39.authservice.getdata('getmainaccounts').then(result => {
        _this39.getOwner = JSON.parse(String(result));

        _this39.global.store__owner(_this39.getOwner);

        console.log(_this39.getOwner);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  } // Get Ledgers by Owner


  api_getLedgers(o_id) {
    var _this40 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this40.authservice.getdata('getledgers/' + o_id).then(result => {
        _this40.getledgers = JSON.parse(String(result));

        _this40.global.store_ledgers(_this40.getledgers);

        console.log(_this40.getledgers);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  } // Get all khata 


  api_getallkhata() {
    var _this41 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this41.authservice.getdata('getkhata').then(result => {
        _this41.getallkhata = JSON.parse(String(result));

        _this41.global.store_allkhata(_this41.getallkhata);

        console.log(_this41.getallkhata);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

  api_gettransactionsbymainaccount(date) {
    var _this42 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this42.authservice.con(date, 'gettransactionsbymainaccount').then( /*#__PURE__*/function () {
        var _ref15 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this42.gettransactions = JSON.parse(String(res).toString());

          _this42.global.store_alltransactions(_this42.gettransactions);

          console.log(_this42.gettransactions);
        });

        return function (_x15) {
          return _ref15.apply(this, arguments);
        };
      }(), err => {
        console.log(err);
      });
    })();
  }

  Get_alltransaction(a_id) {
    var _this43 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(a_id + ' a_id');
      yield _this43.authservice.getdata('gettransactions_all/' + a_id).then(result => {
        _this43.data = JSON.parse(String(result));

        _this43.global.store_alltransactions(_this43.data);

        console.log(_this43.data, 'data Updated');
        return result;
      }, err => {
        console.log(err);
      });
    })();
  }

  api_gettransactionsbyexpense(date) {
    var _this44 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this44.authservice.con(date, 'gettransactionsbyexpense').then( /*#__PURE__*/function () {
        var _ref16 = (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this44.gettransactions = JSON.parse(String(res).toString());

          _this44.global.store_alltransactions(_this44.gettransactions);

          console.log(_this44.gettransactions);
        });

        return function (_x16) {
          return _ref16.apply(this, arguments);
        };
      }(), err => {
        console.log(err);
      });
    })();
  }

  GetInstallmentsbymonth(i_month) {
    var _this45 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this45.authservice.getdata('Monthlyinstallment/' + i_month).then(result => {
        _this45.data = JSON.parse(String(result));

        _this45.global.installmentbyMonth(_this45.data);

        console.log(_this45.data, 'data Updated');
        return result;
      }, err => {
        console.log(err);
      });
    })();
  } // getbooking by type
  // async   getallbookingbytype(data:any) {
  //   await    this.authservice.con(data,'getallbookingbytype').then((result) => {
  //       this.data = JSON.parse(String(result));
  //       this.global.bookingby_type(this.data);
  //       console.log(this.data,'data Updated');
  //       return result;
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   }
  // getaccount data by type & source


  getallbookingbytype(data) {
    var _this46 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this46.authservice.con(data, 'getallbookingbytype').then(result => {
        _this46.data = JSON.parse(String(result));

        _this46.global.bookingby_type(_this46.data);

        console.log(_this46.data);
        return result;
      }, err => {
        console.log(err);
      });
    })();
  } // booking status 


  getbookingbytype(data) {
    var _this47 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this47.authservice.con(data, 'getbookingbytype').then(result => {
        _this47.data = JSON.parse(String(result));

        _this47.global.bookingby_type(_this47.data);

        console.log(_this47.data);
        return result;
      }, err => {
        console.log(err);
      });
    })();
  }

  getPlotsbystatus(data) {
    var _this48 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this48.authservice.con(data, 'getPlotsbystatus').then(result => {
        _this48.data = JSON.parse(String(result));

        _this48.global.bookingby_status(_this48.data);

        console.log(_this48.data);
        return result;
      }, err => {
        console.log(err);
      });
    })();
  } // see-plot by type 


  getPlotsbyType(data) {
    var _this49 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this49.authservice.con(data, 'getPlotsbyType').then(result => {
        _this49.data = JSON.parse(String(result));

        _this49.global.bookingby_type(_this49.data);

        console.log(_this49.data);
        return result;
      }, err => {
        console.log(err);
      });
    })();
  }

  api_getsummary() {
    var _this50 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this50.authservice.getdata('getsummary1').then(result => {
        _this50.get_graphs = JSON.parse(String(result));

        _this50.global.set_summary(_this50.get_graphs);

        console.log(_this50.get_graphs[0].totalinstallment);
        return result;
      }, err => {
        console.log(err);
        return err;
      });
    })();
  }

};

ApicallService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _data_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
}, {
  type: _toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _Alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
}];

ApicallService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], ApicallService);


/***/ }),

/***/ 3271:
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



//const apiUrl = 'https://learn2earnn.com/babafareedtown/public/';
const apiUrl = 'https://learn2earnn.com/Portfolio/propertyclient/public/';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    con(data, type) {
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl + type, JSON.stringify(data)).
                subscribe(res => {
                resolve(JSON.stringify(res));
            }, (err) => {
                reject(err);
                console.log(err);
            });
        });
    }
    // geting posts
    getdata(type) {
        return new Promise((resolve, reject) => {
            this.http.get(apiUrl + type).
                subscribe(res => {
                resolve(JSON.stringify(res));
            }, (err) => {
                reject(err);
                console.log(err);
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 6606:
/*!*************************************************!*\
  !*** ./src/app/services/data/global.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let GlobalService = class GlobalService {
    constructor() {
        this.plots = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Plots = this.plots.asObservable();
        this.booking = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Booking = this.booking.asObservable();
        this.allbooking = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Allbooking = this.allbooking.asObservable();
        this.customer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Customer = this.customer.asObservable();
        this.storeAllaccounts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.StoreAllaccounts = this.storeAllaccounts.asObservable();
        this.storetotalnetbalance = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Storetotalnetbalance = this.storetotalnetbalance.asObservable();
        this.storetotalDebit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.StoretotalDebit = this.storetotalDebit.asObservable();
        this.storetotalcredit = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Storetotalcredit = this.storetotalcredit.asObservable();
        this.getinstallmentbyid = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Getinstallmentbyid = this.getinstallmentbyid.asObservable();
        this.getlast_installmentbyid = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Getlast_installmentbyid = this.getlast_installmentbyid.asObservable();
        this.lQ_bookedPlots = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQ_bookedPlots = this.lQ_bookedPlots.asObservable();
        this._7s_bookedPlots = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7s_Bookedpots = this._7s_bookedPlots.asObservable();
        this.lq_only = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Lq_only = this.lq_only.asObservable();
        this.lq_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQ_length = this.lq_length.asObservable();
        this.lqc_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQC_length = this.lqc_length.asObservable();
        this.lqr_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQR_length = this.lqr_length.asObservable();
        this.lqcb_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQCB_length = this.lqcb_length.asObservable();
        this.lqbooked_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LqBooked_length = this.lqbooked_length.asObservable();
        this.lqforsale_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LqForsale_length = this.lqforsale_length.asObservable();
        this.lqcs_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQCS_length = this.lqcs_length.asObservable();
        this.lqrb_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQRB_length = this.lqrb_length.asObservable();
        this.lqrs_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LQRS_length = this.lqrs_length.asObservable();
        this._7S_only = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7S_Only = this._7S_only.asObservable();
        this._7s_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7S_length = this._7s_length.asObservable();
        this._7sc_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SC_length = this._7sc_length.asObservable();
        this._7sr_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SR_length = this._7sr_length.asObservable();
        this._7scb_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SCB_length = this._7scb_length.asObservable();
        this._7scs_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SCS_length = this._7scs_length.asObservable();
        this._7srb_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SRB_length = this._7srb_length.asObservable();
        this._7srs_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SRS_length = this._7srs_length.asObservable();
        this._7sbooked_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SBooked_length = this._7sbooked_length.asObservable();
        this._7sforsale_length = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7SForsale_length = this._7sforsale_length.asObservable();
        // graphdata
        this.graphdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Graphdata = this.graphdata.asObservable();
        this.get_customer_byid = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Get_customer_byid = this.get_customer_byid.asObservable();
        this.get_plot_byid = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Get_plot_byid = this.get_plot_byid.asObservable();
        this.graphdetailsdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Graphdetailsdata = this.graphdetailsdata.asObservable();
        this.allGraphs = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AllGraphs = this.allGraphs.asObservable();
        this.allLuqmanGraphs = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AllLuqmanGraphs = this.allLuqmanGraphs.asObservable();
        this.allStarGraphs = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AllStarGraphs = this.allStarGraphs.asObservable();
        this.totalBooked = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.TotalBooked = this.totalBooked.asObservable();
        this.forSale = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.ForSale = this.forSale.asObservable();
        this.totalProperties = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.TotalProperties = this.totalProperties.asObservable();
        this.bookedProperties = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.BookedProperties = this.bookedProperties.asObservable();
        this.lumantownInstallments = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.LumanTownInstallments = this.lumantownInstallments.asObservable();
        this._7starInstallments = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this._7Starinstallments = this._7starInstallments.asObservable();
        //  Get Owner
        this.owner = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Owner = this.owner.asObservable();
        //  Get Ledgers
        this.ledgers = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Ledgers = this.ledgers.asObservable();
        //  Get all khata
        this.allkhata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Allkhata = this.allkhata.asObservable();
        this.alltransactions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Alltransactions = this.alltransactions.asObservable();
        this.monthlyinstallment = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Monthlyinstallment = this.monthlyinstallment.asObservable();
        // getbooking by type
        this.bookingbyType = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.BookingbyType = this.bookingbyType.asObservable();
        // getbooking by status
        this.bookingbyStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.BookingbyStatus = this.bookingbyStatus.asObservable();
        this.summary = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Summary = this.summary.asObservable();
    }
    set_getplots(plots) {
        this.plots.next(plots);
        console.log(plots);
    }
    set_getbooking(booking) {
        this.booking.next(booking);
    }
    set_getAllbooking(allbooking) {
        this.allbooking.next(allbooking);
    }
    set_getcustomer(customer) {
        this.customer.next(customer);
    }
    set_storeAllaccounts(storeAllaccounts) {
        this.storeAllaccounts.next(storeAllaccounts);
    }
    set_storetotalnetbalance(storetotalnetbalance) {
        this.storetotalnetbalance.next(storetotalnetbalance);
    }
    set_storetotalDebit(storetotalDebit) {
        this.storetotalDebit.next(storetotalDebit);
    }
    set_storetotalcredit(storetotalcredit) {
        this.storetotalcredit.next(storetotalcredit);
    }
    set_getinstallmentbyid(getinstallmentbyid) {
        this.getinstallmentbyid.next(getinstallmentbyid);
    }
    set_getlast_installmentbyid(getlast_installmentbyid) {
        this.getlast_installmentbyid.next(getlast_installmentbyid);
    }
    store_LQ_bookedPlots(lQ_bookedPlots) {
        this.lQ_bookedPlots.next(lQ_bookedPlots);
    }
    store_7s_bookedPlots(_7s_bookedPlots) {
        this._7s_bookedPlots.next(_7s_bookedPlots);
    }
    store_LQ_only(lq_only) {
        this.lq_only.next(lq_only);
    }
    store_LQ_length(lq_length) {
        this.lq_length.next(lq_length);
    }
    store_LQC_length(lqc_length) {
        this.lqc_length.next(lqc_length);
    }
    store_LQR_length(lqr_length) {
        this.lqr_length.next(lqr_length);
    }
    store_LQCB_length(lqcb_length) {
        this.lqcb_length.next(lqcb_length);
    }
    store_lqbooked_length(lqbooked_length) {
        this.lqbooked_length.next(lqbooked_length);
    }
    store_lqforsale_length(lqforsale_length) {
        this.lqforsale_length.next(lqforsale_length);
    }
    store_LQCS_length(lqcs_length) {
        this.lqcs_length.next(lqcs_length);
    }
    store_LQRB_length(lqrb_length) {
        this.lqrb_length.next(lqrb_length);
    }
    store_LQRS_length(lqrs_length) {
        this.lqrs_length.next(lqrs_length);
    }
    store_7Splots_Only(_7S_only) {
        this._7S_only.next(_7S_only);
        console.log(_7S_only);
    }
    store_7S_length(_7s_length) {
        this._7s_length.next(_7s_length);
    }
    store_7SC_length(_7sc_length) {
        this._7sc_length.next(_7sc_length);
    }
    store_7SR_length(_7sr_length) {
        this._7sr_length.next(_7sr_length);
    }
    store_7SCB_length(_7scb_length) {
        this._7scb_length.next(_7scb_length);
    }
    store_7SCS_length(_7scs_length) {
        this._7scs_length.next(_7scs_length);
    }
    store_7SRB_length(_7srb_length) {
        this._7srb_length.next(_7srb_length);
    }
    store_7SRS_length(_7srs_length) {
        this._7srs_length.next(_7srs_length);
    }
    store_7sbooked_length(_7sbooked_length) {
        this._7sbooked_length.next(_7sbooked_length);
    }
    store_7sforsale_length(_7sforsale_length) {
        this._7sforsale_length.next(_7sforsale_length);
    }
    set_customer_byid(get_customer_byid) {
        this.get_customer_byid.next(get_customer_byid);
    }
    set_plot_byid(get_plot_byid) {
        this.get_plot_byid.next(get_plot_byid);
    }
    See_Data(graphdetailsdata) {
        this.graphdetailsdata.next(graphdetailsdata);
        console.log(graphdetailsdata);
    }
    set_storeAllGraphs(allGraphs) {
        this.allGraphs.next(allGraphs);
        console.log(allGraphs);
    }
    set_storeAllLuqmanGraphs(allLuqmanGraphs) {
        this.allLuqmanGraphs.next(allLuqmanGraphs);
        console.log(allLuqmanGraphs);
    }
    set_storeAllStarGraphs(allStarGraphs) {
        this.allStarGraphs.next(allStarGraphs);
        console.log(allStarGraphs);
    }
    get_gettotalbookedproperties(value) {
        this.totalBooked.next(value);
    }
    get_gettotalsaleproperties(value) {
        this.forSale.next(value);
    }
    get_gettotalproperties(value) {
        this.totalProperties.next(value);
    }
    get_getbooked_plots(bookedProperties) {
        this.bookedProperties.next(bookedProperties);
    }
    stor_lumantownInstallments(lumantownInstallments) {
        this.lumantownInstallments.next(lumantownInstallments);
    }
    stor__7starInstallments(_7starInstallments) {
        this._7starInstallments.next(_7starInstallments);
    }
    store__owner(owner) {
        this.owner.next(owner);
    }
    store_ledgers(ledgers) {
        this.ledgers.next(ledgers);
    }
    store_allkhata(allkhata) {
        this.allkhata.next(allkhata);
    }
    store_alltransactions(alltransactions) {
        this.alltransactions.next(alltransactions);
        console.log(alltransactions);
    }
    installmentbyMonth(monthlyinstallment) {
        this.monthlyinstallment.next(monthlyinstallment);
        console.log(monthlyinstallment);
    }
    bookingby_type(bookingbyType) {
        this.bookingbyType.next(bookingbyType);
        console.log(bookingbyType);
    }
    bookingby_status(bookingbyStatus) {
        this.bookingbyStatus.next(bookingbyStatus);
        console.log(bookingbyStatus);
    }
    set_summary(summary) {
        this.summary.next(summary);
        console.log(summary);
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 5473:
/*!**************************************************!*\
  !*** ./src/app/services/toasts/toast.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let ToastService = class ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  } //  Plots


  plotaddedToast() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Plot Added Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  installaddedToast() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Installment Added Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  onwership_transfered() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'Onwership Transfered Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  plotdeletedToast() {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastController.create({
        message: 'Plot Deleted Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  plotupdated() {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: 'Plot Updated Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  } // Customer 


  customeraddedToast() {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this6.toastController.create({
        message: 'Customer Added Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  } // add-booking succesfull


  add_booking() {
    var _this7 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this7.toastController.create({
        message: 'Granter Added Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  nodatafound() {
    var _this8 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this8.toastController.create({
        message: 'We are not getting any data',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  loginSuccessfully() {
    var _this9 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this9.toastController.create({
        message: 'Login Successfully',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  alreaybooked() {
    var _this10 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this10.toastController.create({
        message: 'Plot Already Booked',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'checkmark-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  logininvalid() {
    var _this11 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this11.toastController.create({
        message: 'Invalid username or password',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'close-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

  notbooked() {
    var _this12 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this12.toastController.create({
        message: 'Plot not Booked',
        duration: 3000,
        cssClass: 'custom-toast',
        mode: 'ios',
        position: 'top',
        icon: 'close-circle',
        buttons: [{
          text: 'Dismiss',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }

};

ToastService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}];

ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_CallApi_apicall_service_ts.js.map