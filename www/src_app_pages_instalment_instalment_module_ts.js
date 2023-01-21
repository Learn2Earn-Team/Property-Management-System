"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_instalment_instalment_module_ts"],{

/***/ 6875:
/*!***************************************************************!*\
  !*** ./src/app/pages/instalment/instalment-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentPageRoutingModule": () => (/* binding */ InstalmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _instalment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instalment.page */ 3836);




const routes = [
    {
        path: '',
        component: _instalment_page__WEBPACK_IMPORTED_MODULE_0__.InstalmentPage
    }
];
let InstalmentPageRoutingModule = class InstalmentPageRoutingModule {
};
InstalmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InstalmentPageRoutingModule);



/***/ }),

/***/ 9748:
/*!*******************************************************!*\
  !*** ./src/app/pages/instalment/instalment.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentPageModule": () => (/* binding */ InstalmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _instalment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instalment-routing.module */ 6875);
/* harmony import */ var _instalment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instalment.page */ 3836);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 1365);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-print-element */ 3412);










let InstalmentPageModule = class InstalmentPageModule {
};
InstalmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _instalment_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstalmentPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintModule,
            ngx_print_element__WEBPACK_IMPORTED_MODULE_9__.NgxPrintElementModule
        ],
        declarations: [_instalment_page__WEBPACK_IMPORTED_MODULE_1__.InstalmentPage]
    })
], InstalmentPageModule);



/***/ }),

/***/ 3836:
/*!*****************************************************!*\
  !*** ./src/app/pages/instalment/instalment.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstalmentPage": () => (/* binding */ InstalmentPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _instalment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instalment.page.html?ngResource */ 7230);
/* harmony import */ var _instalment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instalment.page.scss?ngResource */ 6998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pages/modal/modal.page */ 8167);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print-element */ 3412);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6527);












let InstalmentPage = class InstalmentPage {
  constructor(apiCall, route, modal, global, print) {
    this.apiCall = apiCall;
    this.route = route;
    this.modal = modal;
    this.global = global;
    this.print = print;
    this.isEnabled = false;
    this.link = [{
      path: 'add-plot'
    }, {
      path: 'see-plot'
    }, {
      path: 'instalment'
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
      styles: ['']
    };
    this.Plot_D = [{
      plot_no: '2',
      name: 'Sumama',
      type: 'Commercial',
      status: 'avaiable',
      description: 'fjksfalksjhdjgfhdjghdksdjhgkjdshgfhsjahf',
      advance: '30000',
      total_payment: '342355',
      total_installment: '21',
      remaining_payment: '482348'
    }, {
      plot_no: '2',
      name: 'Sumama',
      type: 'Commercial',
      status: 'avaiable',
      description: 'fjksfalksjffjdfjkddjkhsjahf',
      advance: '30000',
      total_payment: '342355',
      total_installment: '21',
      remaining_payment: '482348'
    }];
    this.next_installment = {
      p_id: '',
      customer_id: '',
      customer_name: '',
      installment_no: '',
      amount: '',
      remaning_payment: '',
      upcoming_installment: '',
      i_month: '',
      a_id: ''
    };
    this.next_7starinstallment = {
      p_id: '',
      customer_id: '',
      customer_name: '',
      installment_no: '',
      amount: '',
      remaning_payment: '',
      installment_date: '',
      upcoming_installment: ''
    };
    this.Category = 'View all installment';
    this.selectTabs = 'Baba Fareed';
  }

  ngOnInit() {
    this.get_Booking();
    this.get_Plot();
  } // Get function of plot_data


  get_Booking() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.apiCall.api_get_all_boooking();

      yield _this.global.Allbooking.subscribe(user => {
        console.log(user); // this.Plot_D = user;
      });
    })();
  } // Get function for customer


  Get_Customer() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.apiCall.api_get_customer();

      yield _this2.global.Customer.subscribe(data => {
        _this2.Selec_Customer = data;
        console.log(_this2.Selec_Customer);
      });
    })();
  }

  get_Plot() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.apiCall.api_getPlots();

      _this3.global.Plots.subscribe(user => {
        console.log(user);
        _this3.Plot_Data = user;
      });
    })();
  }

  Property() {
    this.route.navigate(['property']);
  }

  Plot() {
    this.route.navigate(['plots']);
  }

  Instalment() {
    this.route.navigate(['instalment']);
  }

  Refresh() {
    this.apiCall.api_get_all_boooking();
  }

  Home() {
    this.route.navigate(['home']);
  }

  get_bookedplots($event) {
    var _this4 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      yield _this4.apiCall.api_getbooked_plots($event.target.value);
      yield _this4.global.BookedProperties.subscribe(res => {
        _this4.p_no = res;
      });
      console.log(_this4.p_no[0].p_id);
      yield _this4.apiCall.api_getlast_InstallmentByp_id(_this4.p_no[0].p_id);

      _this4.get_last_install();
    })();
  }

  get_last_install() {
    var _this5 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.selectTabs == 'Baba Fareed') {
        _this5.global.LumanTownInstallments.subscribe(res => {
          console.log(res);
          _this5.allinstallments = res;
          console.log('Baba Fareed');
        });
      }

      if (_this5.selectTabs == '7 Star') {
        _this5.global._7Starinstallments.subscribe(res => {
          console.log(res);
          _this5.all7Starinstallments = res;
          console.log('7 Star');
        });
      } else {
        console.log('no plots');
      } // this.global.Getlast_installmentbyid.subscribe(res => {
      //   console.log(res);
      //   this.allinstallments = res;  
      //  });


      if (_this5.selectTabs == 'Baba Fareed') {
        console.log(_this5.allinstallments[0].installment_no + 'incoming install');
        _this5.install_no = _this5.allinstallments[0].installment_no;
        _this5.install_no++;
        console.log(_this5.install_no + 'current isntall');
      }

      if (_this5.selectTabs == '7 Star') {
        console.log(_this5.all7Starinstallments[0].installment_no + 'incoming install');
        _this5._7Starinstall_no = _this5.all7Starinstallments[0].installment_no;
        _this5._7Starinstall_no++;
        console.log(_this5._7Starinstall_no + 'current isntall');
      } else {
        console.log('no plots');
      }
    })();
  }

  installment_amount($event) {
    if (this.selectTabs == 'Baba Fareed') {
      console.log($event.target.value);
      const x = $event.target.value;
      this.next_installment.remaning_payment = this.allinstallments[0].remaning_payment - x;
    }

    if (this.selectTabs == '7 Star') {
      console.log($event.target.value);
      const x = $event.target.value;
      this.next_installment.remaning_payment = this.all7Starinstallments[0].remaning_payment - x;
    } else {
      console.log('no amount');
    }
  }

  month($event) {
    console.log($event.target.value);
    this.next_installment.i_month = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])($event.target.value), 'MMMM');
    console.log(this.next_installment.i_month);
  }

  Next_installment() {
    if (this.selectTabs == 'Baba Fareed') {
      console.log(this.allinstallments);
      this.next_installment.p_id = this.allinstallments[0].p_id;
      this.next_installment.customer_id = this.allinstallments[0].customer_id;
      this.next_installment.installment_no = this.allinstallments[0].installment_no;
      this.next_installment.installment_no++; // this.next_installment.remaning_payment =  this.allinstallments[0].remaning_payment - this.next_installment.amount;

      console.log(this.next_installment.remaning_payment);
      this.next_installment.customer_name = this.allinstallments[0].name;
      this.next_installment.a_id = 1;
      console.log(this.next_installment.installment_no + 'next install');
      console.log(this.next_installment);
    }

    if (this.selectTabs == '7 Star') {
      console.log(this.all7Starinstallments);
      this.next_installment.p_id = this.all7Starinstallments[0].p_id;
      this.next_installment.customer_id = this.all7Starinstallments[0].customer_id;
      this.next_installment.installment_no = this.all7Starinstallments[0].installment_no;
      this.next_installment.installment_no++; // this.next_installment.remaning_payment =  this.all7Starinstallments[0].remaning_payment - this.next_installment.amount;

      this.next_installment.customer_name = this.all7Starinstallments[0].name;
      this.next_installment.a_id = 2;
      console.log(this.next_installment.installment_no + 'next install');
      console.log(this.next_installment);
    } else {
      console.log('no plots');
    } // this.route.navigate(['print-installment'],{state:{data:this.next_installment, plot:this.allinstallments}});


    console.log(this.next_installment);
    this.apiCall.api_insert_installment(this.next_installment);
    this.next_installment = {
      p_id: '',
      customer_id: '',
      customer_name: '',
      installment_no: '',
      amount: '',
      remaning_payment: '',
      installment_date: '',
      upcoming_installment: '',
      i_month: '',
      a_id: ''
    };
    this.route.navigate(['property']);
  }

  print_installment() {
    this.route.navigate(['print-installment'], {
      state: {
        data: this.next_installment
      }
    });
    console.log(this.next_installment);
  }

  all_installment(id) {
    var _this6 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.apiCall.api_getInstallmentByp_id(id);

      _this6.global.Getinstallmentbyid.subscribe(res => {
        console.log(res);
        _this6.installment_by_id = res;
      }); // this.isEnabled = true;

    })();
  }

  view_all_installment(id) {
    var _this7 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.apiCall.api_getInstallmentByp_id(id);

      _this7.global.Getinstallmentbyid.subscribe(res => {
        console.log(res);
        _this7.installment_by_id = res;
      });

      _this7.installmentrdata = _this7.installment_by_id.filter(x => x.installment_no > 0);
      console.log(_this7.installmentrdata);
      const modal = yield _this7.modal.create({
        component: _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        initialBreakpoint: 0.93,
        breakpoints: [0, 0.435, 0.93],
        componentProps: {
          'Category': _this7.Category,
          'Installment_details': _this7.installmentrdata
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

};

InstalmentPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: ngx_print_element__WEBPACK_IMPORTED_MODULE_10__.NgxPrintElementService
}];

InstalmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-instalment',
  template: _instalment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_instalment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InstalmentPage);


/***/ }),

/***/ 6998:
/*!******************************************************************!*\
  !*** ./src/app/pages/instalment/instalment.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.t11 {\n  margin: 25px;\n  margin-left: 10px;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.t2 {\n  text-align: left;\n  font-size: 17px;\n  color: #000;\n  margin-bottom: 40px;\n  letter-spacing: 1px;\n  font-weight: 410;\n  z-index: 1;\n  margin-top: 10px;\n}\n\n.st1 {\n  text-align: left;\n  margin-top: 20px;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: 400;\n  z-index: 1;\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.srch1 {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 30px;\n  width: 300px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  --padding-bottom: 15px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 15px;\n  --placeholder-color: var(--ion-color-primary);\n}\n\n.srch2 {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 30px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  --padding-bottom: 15px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 15px;\n  --placeholder-color: var(--ion-color-primary);\n}\n\n.blue {\n  color: var(--ion-color-primary);\n}\n\n.btn {\n  width: 200px;\n  --border-radius: 30px;\n  margin-top: 20px;\n  color: #fff;\n  height: 60px;\n}\n\n.btn1 {\n  width: 150px;\n  --border-radius: 30px;\n  display: inline-block;\n  color: #fff;\n  height: 40px;\n}\n\n.list1 {\n  display: flex;\n  /* margin: auto; */\n  margin-left: auto;\n  text-align: center;\n  margin-right: auto;\n  flex-direction: column;\n  width: 49%;\n}\n\nbutton {\n  width: 150px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 30px;\n  margin: 10px;\n  margin-top: 40px;\n  display: inline-block;\n  height: 50px;\n  padding: 10px;\n}\n\n.d1 {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  display: none;\n}\n\n.d2 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  height: 200px;\n  width: 300px;\n}\n\n.d3 {\n  display: flex;\n  justify-content: center;\n}\n\n.d4 {\n  padding: 20px;\n}\n\n.d5 {\n  float: left;\n  padding: 20px;\n}\n\n.h11 {\n  font-weight: 800;\n  color: rgb(101, 96, 96);\n  font-family: sans-serif;\n}\n\n.h31 {\n  color: blue;\n  font-weight: 800;\n}\n\n.dev1 {\n  display: flex;\n}\n\n.div2 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div4 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div5 {\n  width: 79%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div6 {\n  width: 40%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div7 {\n  width: 30%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div8 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div9 {\n  width: 71%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div10 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div11 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  margin-left: 51%;\n  height: 37px;\n}\n\n.name {\n  font-weight: 700;\n  color: rgb(101, 96, 96);\n  width: auto;\n}\n\n.names {\n  font-weight: 700;\n  margin-left: 10px;\n  color: rgb(101, 96, 96);\n}\n\n.sign {\n  border: 1px solid black;\n}\n\n@media (max-width: 700px) {\n  .name {\n    font-weight: 700;\n    font-size: 90%;\n    color: rgb(101, 96, 96);\n    width: auto;\n  }\n  .names {\n    font-weight: 700;\n    font-size: 94%;\n    margin-left: 10px;\n    color: rgb(101, 96, 96);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUU7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFESjs7QUFLRTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBRko7O0FBTUU7RUFDRSwrQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9FO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBSko7O0FBTUE7RUFFSSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSko7O0FBTUE7RUFDQyxVQUFBO0VBQ0csaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFLRTtFQUNELGdCQUFBO0VBQ0csYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdDO0VBQ0MsYUFBQTtFQUNFLHVCQUFBO0FBQUo7O0FBR0M7RUFDQyxhQUFBO0FBQUY7O0FBRUM7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVDO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQztFQUVDLGFBQUE7QUFDRjs7QUFFQztFQUNDLFVBQUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNILGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFDRDs7QUFDQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFFRDs7QUFDQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFFRDs7QUFBQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFFRDs7QUFBQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFHRDs7QUFEQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFJRDs7QUFEQztFQUNDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsZ0JBQUE7QUFJRDs7QUFGQztFQUVDLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZDO0VBQ0MsZ0JBQUE7RUFFQSx1QkFBQTtFQUNHLFdBQUE7QUFJTDs7QUFBQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUFJO0VBQ0ksdUJBQUE7QUFHUjs7QUFESTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VBSVY7RUFBTTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7RUFFVjtBQUNGIiwiZmlsZSI6Imluc3RhbG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQxe1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcblxyXG4gIC50MTF7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG5cclxuICAudDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MTA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdDF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5jMXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuc3JjaDF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zcmNoMntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJsdWV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG5cclxuICAuYnRuMXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZDF7XHJcblx0d2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmQye1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdGltZ3tcclxuXHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0fVxyXG5cdC5kM3tcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcclxuXHR9XHJcblx0LmQ0e1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHR9XHJcblx0LmQ1e1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdH1cclxuXHRcclxuXHQuaDExe1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG5cdH1cclxuXHQuaDMxe1xyXG5cdFx0Y29sb3I6IGJsdWU7XHJcblx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdH1cclxuXHQuZGV2MXtcclxuXHRcdFxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblx0XHJcblx0LmRpdjJ7XHJcblx0XHR3aWR0aDogMjIlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG5cdH1cclxuXHQuZGl2NHtcclxuXHRcdHdpZHRoOiA3MyU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2NXtcclxuXHRcdHdpZHRoOiA3OSU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdFxyXG5cdH1cclxuXHQuZGl2NntcclxuXHRcdHdpZHRoOiA0MCU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2N3tcclxuXHRcdHdpZHRoOiAzMCU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHRcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cdC5kaXY4e1xyXG5cdFx0d2lkdGg6IDczJTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblx0LmRpdjl7XHJcblx0XHR3aWR0aDogNzElO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdGhlaWdodDogMzdweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdFxyXG5cdH1cclxuXHQuZGl2MTB7XHJcblx0XHR3aWR0aDogNzMlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdGhlaWdodDogMzdweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2MTF7XHJcblx0XHRcclxuXHRcdHdpZHRoOiAyMiU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRtYXJnaW4tbGVmdDogNTElO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdH1cclxuXHQubmFtZXtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdC5uYW1lc3tcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG5cdFx0XHJcblx0fVxyXG4gICAgLnNpZ257XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZXN7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTQlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMDEsIDk2LCA5Nik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19 */";

/***/ }),

/***/ 7230:
/*!******************************************************************!*\
  !*** ./src/app/pages/instalment/instalment.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Booked Plot</ion-card-title>\r\n\r\n\r\n  <ion-input class=\"srch1\" type=\"number\" placeholder=\"Search Plot\" (ionChange)=\"get_bookedplots($event)\"></ion-input>\r\n\r\n\r\n<div id=\"mydata\">\r\n\r\n  <ion-card class=\"c1\"  *ngFor=\"let detail of allinstallments\">\r\n\r\n    <ion-row>\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Plot No</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.plot_no}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Type</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.type}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Customer</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.name}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Discount</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.discount}}</ion-card-title>\r\n    </ion-col>\r\n    \r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Total Amount</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.total_payment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Advance Amount</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.advance}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Remaining Amount</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.remaning_payment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Monthly Installment</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.per_installment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Total Installments</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.total_installment}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Remaining Installments</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{(detail.total_installment) - (detail.installment_no)}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">Last Installment</ion-card-title>\r\n      <ion-card-title class=\"t2\">{{detail.installment_date}}</ion-card-title>\r\n    </ion-col>\r\n\r\n\r\n\r\n\r\n    <ion-col size=\"3\">\r\n      <ion-card-title class=\"st1\">All Installments</ion-card-title>\r\n      <ion-button (click)=\"view_all_installment(detail.p_id)\" class=\"btn1 t2 blue\" style=\"float: left; margin-left: 0;\">View</ion-button>\r\n    </ion-col>\r\n\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"d1\" id=\"demo\">\r\n    <div class=\"dev1\" id=\"devdate\">\r\n      <h4 class=\"name\" id=\"name\">\r\n        Date:\r\n      </h4>\r\n      <div class=\"div51\" id=\"date\">\r\n        <p>\r\n          {{next_installment.installment_date}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"d4\" id=\"d4\">\r\n      <div class=\"dev1\" id=\"dev2\">\r\n\r\n        <img src=\"../../../assets/Baba Farid Smart Valley Logo.png\" alt=\"\" id=\"img\">\r\n      </div>\r\n      <div class=\"d3\" id=\"d3\">\r\n        <h3 class=\"h11\" id=\"h11\">\r\n          Installment Slip\r\n        </h3>\r\n      </div>\r\n\r\n\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Plot NO:\r\n\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n          <p>\r\n            #{{detail.plot_no}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Plot Size:\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n\r\n          <p>\r\n            {{detail.area_marla}} Marla\r\n          </p>\r\n\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Type:\r\n        </h4>\r\n        <div class=\"div2\" id=\"div2\">\r\n          <p>\r\n            {{detail.type}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Name of Purchaser:\r\n        </h4>\r\n        <div class=\"div4\" id=\"div4\">\r\n          <p>\r\n            {{detail.name}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Total Amount:\r\n        </h4>\r\n        <div class=\"div5\" id=\"div5\">\r\n          <p>\r\n            {{detail.total_payment}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Total Installment:\r\n\r\n        </h4>\r\n        <div class=\"div6\" id=\"div6\">\r\n          <p>\r\n            {{detail.total_installment}}\r\n          </p>\r\n        </div>\r\n        <h4 class=\"names\" id=\"names\">\r\n          Remainig Installment:\r\n        </h4>\r\n        <div class=\"div7\" id=\"div7\">\r\n          <p>\r\n            {{(detail.total_installment) - (this.install_no)}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Current Installment No:\r\n        </h4>\r\n        <div class=\"div9\" id=\"inst\">\r\n          <p>\r\n            {{this.install_no}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Installment Amount:\r\n        </h4>\r\n        <div class=\"div9\" id=\"div9\">\r\n          <p>\r\n            {{next_installment.amount}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Remaining Amount:\r\n        </h4>\r\n        <div class=\"div10\" id=\"div10\">\r\n          <p>\r\n           {{next_installment.remaning_payment}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dev1\" id=\"dev1\">\r\n        <h4 class=\"name\" id=\"name\">\r\n          Next Installment Date:\r\n        </h4>\r\n        <div class=\"div12\" id=\"div12\">\r\n          {{next_installment.upcoming_installment}}\r\n        </div>\r\n      </div>\r\n      <div class=\"sign\" id=\"sign\">\r\n        <div id=\"mainsin\">\r\n          <div id=\"cssign\">\r\n\r\n          </div>\r\n          <h4 id=\"name\">\r\n            Customer Sign\r\n          </h4>\r\n        </div>\r\n        <div id=\"mainsin\">\r\n          <div id=\"float\">\r\n            <div id=\"msign\">\r\n\r\n            </div>\r\n            <h4 id=\"name\">\r\n              Managing Direcor\r\n            </h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"footer\">\r\n        <span id=\"spanf1\"> Cell# 03006150619 PH# 0457 38 35 41<br>\r\n          ADDRESS: Sahiwal Road Near Baba Farid Rice Mills Pakpattan<br>\r\n          G-MAIL: babafareedsmartvalley@gmail.com\r\n        </span>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n    </ion-card>\r\n</div>\r\n\r\n    <ion-card class=\"c1\">\r\n\r\n      \r\n  <ion-card-title class=\"t1\"> Installment No {{this.install_no}}</ion-card-title>\r\n\r\n\r\n  <ion-row>\r\n    \r\n\r\n\r\n    <ion-col size=\"6\">\r\n      <ion-label><ion-card-title class=\"t11\">Installment Amount</ion-card-title></ion-label>\r\n        \r\n      <ion-input class=\"srch2\" type=\"number\" [(ngModel)]=\"next_installment.amount\"  (ionChange)=\"installment_amount($event)\" required></ion-input>\r\n          </ion-col>\r\n\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-label><ion-card-title class=\"t11\">Remaining Amount</ion-card-title></ion-label>\r\n        \r\n        <ion-input class=\"srch2\" value=\"{next_installment.remaning_payment}\" [(ngModel)]=\"next_installment.remaning_payment\" readonly=\"true\" required></ion-input>\r\n            </ion-col>\r\n\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-label><ion-card-title class=\"t11\">Installment Date</ion-card-title></ion-label>\r\n        <ion-input class=\"srch2\" placeholder=\"Installment Date\" type=\"date\" [(ngModel)]=\"next_installment.installment_date\" (ionChange)=\"month($event)\" required></ion-input>\r\n            </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-label><ion-card-title class=\"t11\">Next Installment Date</ion-card-title></ion-label>\r\n        \r\n        <ion-input class=\"srch2\" placeholder=\"Next Installment Date\" type=\"date\" [(ngModel)]=\"next_installment.upcoming_installment\" required></ion-input>\r\n            </ion-col>\r\n  </ion-row>\r\n\r\n  <button (click)=\"Next_installment()\">Pay</button>\r\n  <button styleSheetFile=\"assets/css/print.css\" printSectionId=\"demo\" ngxPrint>\r\n    <ion-icon name=\"document-text-outline\"></ion-icon> Export\r\n  </button>\r\n\r\n    </ion-card>\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_instalment_instalment_module_ts.js.map