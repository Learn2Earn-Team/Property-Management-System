"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_see-customer_see-customer_module_ts"],{

/***/ 4183:
/*!*******************************************************************!*\
  !*** ./src/app/pages/see-customer/see-customer-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeCustomerPageRoutingModule": () => (/* binding */ SeeCustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _see_customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-customer.page */ 5181);




const routes = [
    {
        path: '',
        component: _see_customer_page__WEBPACK_IMPORTED_MODULE_0__.SeeCustomerPage
    }
];
let SeeCustomerPageRoutingModule = class SeeCustomerPageRoutingModule {
};
SeeCustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeeCustomerPageRoutingModule);



/***/ }),

/***/ 3017:
/*!***********************************************************!*\
  !*** ./src/app/pages/see-customer/see-customer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeCustomerPageModule": () => (/* binding */ SeeCustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _see_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-customer-routing.module */ 4183);
/* harmony import */ var _see_customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-customer.page */ 5181);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let SeeCustomerPageModule = class SeeCustomerPageModule {
};
SeeCustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _see_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeeCustomerPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_see_customer_page__WEBPACK_IMPORTED_MODULE_1__.SeeCustomerPage]
    })
], SeeCustomerPageModule);



/***/ }),

/***/ 5181:
/*!*********************************************************!*\
  !*** ./src/app/pages/see-customer/see-customer.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeCustomerPage": () => (/* binding */ SeeCustomerPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _see_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-customer.page.html?ngResource */ 3392);
/* harmony import */ var _see_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-customer.page.scss?ngResource */ 5194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pages/modal/modal.page */ 8167);










let SeeCustomerPage = class SeeCustomerPage {
  constructor(apiCall, route, global, modalController) {
    this.apiCall = apiCall;
    this.route = route;
    this.global = global;
    this.modalController = modalController;
    this.show = false;
    this.Category = 'Customer';
    this.customer_T = [{
      title: 'Customer Name'
    }, {
      title: 'Father Name'
    }, {
      title: 'CNIC'
    }, {
      title: 'Mobile Number'
    }, {
      title: 'Address'
    }];
    this.See_Customer = {
      name: '',
      father_name: '',
      cnic: '',
      cnic_img: '',
      mobile_no: '',
      address: ''
    };
  }

  ngOnInit() {
    this.get_Customer();
  } // Get function of customer


  get_Customer() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.apiCall.api_get_customer();

      yield _this.global.Customer.subscribe(data => {
        console.log(data);
        _this.See_Customer = data;
      });
    })();
  } // Delete function of customer


  Delete_Customer(customer_id) {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const x = {
        customer_id: customer_id
      };
      yield _this2.apiCall.api_del_customer(x);

      _this2.get_Customer();

      console.log(customer_id);
    })();
  }

  Property() {
    this.route.navigate(['property']);
  }

  See_customer() {
    this.route.navigate(['see-customer']);
  }

  Customer() {
    this.route.navigate(['customers']);
  }

  Home() {
    this.route.navigate(['home']);
  }

  Refresh() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.apiCall.api_get_customer();
    }, 1500);
  }

  updateModal(data) {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
        cssClass: 'my-modal-class',
        componentProps: {
          'updateCustomer': data,
          'Category': _this3.Category
        }
      });
      console.log('modal');
      return yield modal.present();
    })();
  }

};

SeeCustomerPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

SeeCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-see-customer',
  template: _see_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_see_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SeeCustomerPage);


/***/ }),

/***/ 5194:
/*!**********************************************************************!*\
  !*** ./src/app/pages/see-customer/see-customer.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.c2 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n  overflow: auto;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  z-index: 1;\n}\n\nth {\n  color: var(--ion-color-primary);\n}\n\ntd, th {\n  text-align: left;\n  padding: 8px;\n  z-index: 1;\n}\n\n.red1 {\n  color: red;\n  cursor: pointer;\n}\n\n.blue {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.img {\n  height: 60px;\n  width: 60px;\n  min-width: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSwrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUtFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InNlZS1jdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudDF7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuYzJ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICB0aHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgLnJlZDF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmJsdWV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmltZ3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 3392:
/*!**********************************************************************!*\
  !*** ./src/app/pages/see-customer/see-customer.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Total Customer: {{this.See_Customer.length}}</ion-card-title>\r\n\r\n\r\n\r\n  <ion-card class=\"c2\">\r\n    <table>\r\n      <tr>\r\n        <th>Photo</th>\r\n        <th>Name</th> \r\n        <th>Father Name</th>\r\n        <th>CNIC</th>\r\n        <th>Phone No</th>\r\n        <th>Address</th>\r\n        <th>Query</th>\r\n        <th>Update</th>\r\n      </tr>\r\n      <tr *ngFor=\"let detail of See_Customer | filter:filterTerm\">\r\n        <td><img src=\"{{detail.cnic_img}}\" class=\"img \"></td>\r\n          <td>{{detail.name}}</td> \r\n          <td>{{detail.father_name}}</td>\r\n          <td>{{detail.cnic}}</td>\r\n          <td>{{detail.mobile_no}}</td>\r\n          <td>{{detail.address}}</td>\r\n          <td class=\"red\">{{detail.query}}</td>\r\n        <td (click)=\"updateModal(detail)\" class=\"blue\">Update</td>\r\n      </tr>\r\n     \r\n    </table>\r\n  </ion-card>\r\n\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_see-customer_see-customer_module_ts.js.map