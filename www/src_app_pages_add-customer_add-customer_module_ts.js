"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-customer_add-customer_module_ts"],{

/***/ 1461:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPageRoutingModule": () => (/* binding */ AddCustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer.page */ 413);




const routes = [
    {
        path: '',
        component: _add_customer_page__WEBPACK_IMPORTED_MODULE_0__.AddCustomerPage
    }
];
let AddCustomerPageRoutingModule = class AddCustomerPageRoutingModule {
};
AddCustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCustomerPageRoutingModule);



/***/ }),

/***/ 9746:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPageModule": () => (/* binding */ AddCustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer-routing.module */ 1461);
/* harmony import */ var _add_customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.page */ 413);







let AddCustomerPageModule = class AddCustomerPageModule {
};
AddCustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCustomerPageRoutingModule
        ],
        declarations: [_add_customer_page__WEBPACK_IMPORTED_MODULE_1__.AddCustomerPage]
    })
], AddCustomerPageModule);



/***/ }),

/***/ 413:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPage": () => (/* binding */ AddCustomerPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.page.html?ngResource */ 9334);
/* harmony import */ var _add_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-customer.page.scss?ngResource */ 3780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 4241);









let AddCustomerPage = class AddCustomerPage {
  constructor(apiCall, router, global) {
    this.apiCall = apiCall;
    this.router = router;
    this.global = global;
    this.Insert_Customer = {
      name: '',
      father_name: '',
      cnic: '',
      cnic_img: '',
      mobile_no: '',
      address: '',
      query: ''
    };
  }

  ngOnInit() {} // Insert Plot_Data


  InsertCustomer() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.Insert_Customer);
      yield _this.apiCall.api_insert_customer(_this.Insert_Customer);
      _this.Insert_Customer = {
        name: '',
        father_name: '',
        cnic: '',
        cnic_img: '',
        mobile_no: '',
        address: '',
        query: ''
      };
      document.getElementById('cameraImage').setAttribute('src', './../../../assets/placholder_img.png');
    })();
  }

  takePictureBase64() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Prompt,
        allowEditing: true
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${image.format};base64,` + image.base64String);
      console.log(image.base64String);
      _this2.Insert_Customer.cnic_img = image.base64String;
    })();
  }

  Property() {
    this.router.navigate(['property']);
  }

  Add_Customer() {
    this.router.navigate(['add-customer']);
  }

  Customer() {
    this.router.navigate(['customers']);
  }

  Home() {
    this.router.navigate(['home']);
  }

};

AddCustomerPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

AddCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-add-customer',
  template: _add_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddCustomerPage);


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

/***/ 3780:
/*!**********************************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  color: var(--ion-color-primary);\n  z-index: 1;\n  text-align: left;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--ion-color-primary);\n}\n\nion-content ion-input {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\nion-item {\n  --background: transparent;\n}\n\n.c1 {\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 60px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 96%;\n  z-index: 1;\n}\n\n.img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  background: transparent;\n  object-fit: cover;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn {\n  width: 200px;\n  margin-top: 0;\n  height: 60px;\n  --border-radius: 30px;\n  color: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n  --background: var(--ion-color-primary);\n}\n\n.r1 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFJSTtFQUNJLG1EQUFBO0FBRFI7O0FBS0U7RUFDRSx5QkFBQTtBQUZKOztBQU1FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSiIsImZpbGUiOiJhZGQtY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQxe1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmwxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmMxe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC5idG57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5yMXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 9334:
/*!**********************************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n\r\n\r\n  <ion-card-title class=\"t1\">Add Customer</ion-card-title>\r\n\r\n\r\n  <ion-card class=\"c1\">\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n      <img (click)=\"takePictureBase64()\" src=\"./../../../assets/images.png\" id=\"cameraImage\" class=\"img\">\r\n    </ion-item>\r\n\r\n      <ion-row class=\"r1\">\r\n        \r\n        \r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Name</ion-label>\r\n    <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"Insert_Customer.name\" required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Father Name</ion-label>\r\n    <ion-input placeholder=\"Enter Father Name\" [(ngModel)]=\"Insert_Customer.father_name\" required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Cnic</ion-label>\r\n    <ion-input placeholder=\"Enter Cnic\" type=\"number\" [(ngModel)]=\"Insert_Customer.cnic\" required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Mobile No</ion-label>\r\n    <ion-input placeholder=\"Enter Mobile no\" type=\"number\" [(ngModel)]=\"Insert_Customer.mobile_no\" required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Address</ion-label>\r\n    <ion-input placeholder=\"Enter Address\" type=\"number\" [(ngModel)]=\"Insert_Customer.address\"required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n\r\n  <ion-col size-xs=\"6\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Query</ion-label>\r\n    <ion-input placeholder=\"Enter Address\" type=\"number\" [(ngModel)]=\"Insert_Customer.query\"required></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"c1\">\r\n\r\n      <ion-button expand=\"block\" (click)=\"InsertCustomer()\" class=\"btn\" required>Submit</ion-button>\r\n      </ion-card>\r\n      \r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-customer_add-customer_module_ts.js.map