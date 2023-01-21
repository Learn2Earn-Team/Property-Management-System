"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-plot_add-plot_module_ts"],{

/***/ 9686:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-plot/add-plot-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlotPageRoutingModule": () => (/* binding */ AddPlotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_plot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-plot.page */ 5659);




const routes = [
    {
        path: '',
        component: _add_plot_page__WEBPACK_IMPORTED_MODULE_0__.AddPlotPage
    }
];
let AddPlotPageRoutingModule = class AddPlotPageRoutingModule {
};
AddPlotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPlotPageRoutingModule);



/***/ }),

/***/ 6000:
/*!***************************************************!*\
  !*** ./src/app/pages/add-plot/add-plot.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlotPageModule": () => (/* binding */ AddPlotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-plot-routing.module */ 9686);
/* harmony import */ var _add_plot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-plot.page */ 5659);







let AddPlotPageModule = class AddPlotPageModule {
};
AddPlotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_plot_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPlotPageRoutingModule
        ],
        declarations: [_add_plot_page__WEBPACK_IMPORTED_MODULE_1__.AddPlotPage]
    })
], AddPlotPageModule);



/***/ }),

/***/ 5659:
/*!*************************************************!*\
  !*** ./src/app/pages/add-plot/add-plot.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlotPage": () => (/* binding */ AddPlotPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-plot.page.html?ngResource */ 3682);
/* harmony import */ var _add_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-plot.page.scss?ngResource */ 9000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);









let AddPlotPage = class AddPlotPage {
  constructor(apiCall, router, global) {
    this.apiCall = apiCall;
    this.router = router;
    this.global = global;
    this.Add_Plot = {
      plot: '',
      plot_no: '',
      area_marla: '',
      area_sqf: '',
      p_location: '',
      type: '',
      price: '',
      img: '',
      status: '',
      description: ''
    };
    this.size_plot = {
      total_size: ''
    };
    this.selectTabs = 'Baba Fareed';
    this.type = 'Commercial';
  }

  ngOnInit() {} // Insert Plot_Data


  Add_Plot_Data() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.Add_Plot.area_sqf = _this.property_total_size;
      _this.Add_Plot.plot = _this.selectTabs;
      console.log(_this.Add_Plot.plot);
      console.log(_this.Add_Plot);
      yield _this.apiCall.api_insert_plots(_this.Add_Plot);
      _this.Add_Plot = {
        plot: '',
        plot_no: '',
        area_marla: '',
        area_sqf: '',
        p_location: '',
        type: '',
        price: '',
        img: '',
        status: '',
        description: ''
      };
      _this.property_total_size = '';
      _this.size_plot.total_size = '';
      _this.price_marla = '';
      document.getElementById('cameraImage').setAttribute('src', './../../../assets/placholder_img.png');
    })();
  }

  check() {
    console.log(this.Add_Plot);
  }

  takePictureBase64() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt,
        allowEditing: true
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${image.format};base64,` + image.base64String);
      console.log(image.base64String);
      _this2.Add_Plot.img = image.base64String;
    })();
  }

  Property() {
    this.router.navigate(['property']);
  }

  Plot() {
    this.router.navigate(['plots']);
  }

  add_plot() {
    this.router.navigate(['add-plot']);
  }

  Home() {
    this.router.navigate(['home']);
  }

  price_calculations($event) {
    this.price_marla = $event.target.value;

    if (this.Add_Plot.type == 'Residential') {
      const q = this.property_total_size / this.size_plot.total_size;
      this.Add_Plot.price = this.price_marla * q;
      console.log($event.target.value);
    }

    if (this.Add_Plot.type == 'Commercial') {
      const q = this.property_total_size / this.size_plot.total_size;
      this.Add_Plot.price = this.price_marla * q;
      console.log($event.target.value);
    }
  }

  area_calculations() {
    if (this.Add_Plot.type == 'Residential') {
      const x = this.Add_Plot.area_marla * this.size_plot.total_size + this.Add_Plot.area_sqf;
      this.property_total_size = x;
      const q = this.property_total_size / this.size_plot.total_size;
      this.Add_Plot.price = this.price_marla * q;
      console.log(this.property_total_size);
    }

    if (this.Add_Plot.type == 'Commercial') {
      const x = this.Add_Plot.area_marla * this.size_plot.total_size + this.Add_Plot.area_sqf;
      this.property_total_size = x;
      const q = this.property_total_size / this.size_plot.total_size;
      this.Add_Plot.price = this.price_marla * q;
      console.log(this.property_total_size);
    }
  }

};

AddPlotPage.ctorParameters = () => [{
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}];

AddPlotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-add-plot',
  template: _add_plot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_plot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddPlotPage);


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

/***/ 9000:
/*!**************************************************************!*\
  !*** ./src/app/pages/add-plot/add-plot.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".t1 {\n  margin: 25px;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\nion-checkbox {\n  --size: 22px;\n  --background-checked: var(--ion-color-primary);\n}\n\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid var(--ion-color-primary);\n}\n\n.it1 {\n  margin-top: 20px;\n  width: 100%;\n}\n\n.l1 {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content ion-input {\n  border-bottom: 0.1px solid var(--ion-color-primary);\n}\n\nion-item {\n  --background: transparent;\n}\n\n.btn {\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  z-index: 1;\n  color: #fff;\n  height: 60px;\n  --background: var(--ion-color-primary);\n}\n\n.c1 {\n  z-index: 1;\n  --background: transparent;\n  box-shadow: none;\n}\n\n.placeholder_img {\n  height: 130px;\n  width: 150px;\n  border-radius: 15px;\n  object-fit: cover;\n  margin: 0px;\n  float: left;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wbG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsOENBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFLSTtFQUNJLG1EQUFBO0FBRlI7O0FBTUU7RUFDRSx5QkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBSEo7O0FBTUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxKIiwiZmlsZSI6ImFkZC1wbG90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50MXtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIC0tc2l6ZTogMjJweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5pdDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5sMXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAuYzF7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICAucGxhY2Vob2xkZXJfaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gICJdfQ== */";

/***/ }),

/***/ 3682:
/*!**************************************************************!*\
  !*** ./src/app/pages/add-plot/add-plot.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" class=\"srch\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-card-title class=\"t1\">Add Plot</ion-card-title>\r\n\r\n\r\n\r\n  <ion-row>\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"6\">\r\n      <img class=\"placeholder_img\" (click)=\"takePictureBase64()\" src=\"./../../../assets/placholder_img.png\" id=\"cameraImage\">\r\n                        \r\n    </ion-col>\r\n  \r\n    </ion-row>\r\n\r\n<ion-row>\r\n\r\n  <ion-col size-xs=\"12\" size-md=\"4\">\r\n    <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" class=\"l1\">Plot no</ion-label>\r\n    <ion-input placeholder=\"Enter Plot no\" [(ngModel)]=\"Add_Plot.plot_no\"></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n\r\n\r\n  <ion-radio-group class=\"d-flex\" [(ngModel)]=\"Add_Plot.type\" (ionChange)=\"area_calculations()\" mode=\"md\">\r\n\r\n   <ion-col size-xs=\"6.3\" size-md=\"7\">\r\n  <ion-item class=\"it1\" lines=\"none\">\r\nCommercial\r\n<ion-radio slot=\"start\" value=\"Commercial\"></ion-radio>\r\n</ion-item>\r\n</ion-col>\r\n\r\n<ion-col class=\"it1\" size-xs=\"6.3\" size-md=\"7\">\r\n  <ion-item lines=\"none\">\r\nResidential\r\n<ion-radio slot=\"start\" value=\"Residential\"></ion-radio>\r\n</ion-item>\r\n</ion-col>\r\n                              </ion-radio-group>\r\n\r\n  <!-- <ion-col size-xs=\"6\" size-md=\"2\">\r\n  <ion-item class=\"it1\" lines=\"none\">\r\n    <ion-checkbox slot=\"start\"></ion-checkbox>\r\n    <ion-label>Residential</ion-label>\r\n  </ion-item>\r\n  \r\n  </ion-col>\r\n\r\n\r\n  <ion-col class=\"it1\" size-xs=\"6\" size-md=\"2\">\r\n    <ion-item lines=\"none\">\r\n      <ion-checkbox slot=\"start\"></ion-checkbox>\r\n      <ion-label>Commercial</ion-label>\r\n    </ion-item>\r\n    </ion-col> -->\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"6\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Location</ion-label>\r\n      <ion-input placeholder=\"Enter Location\" [(ngModel)]=\"Add_Plot.p_location\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size-xs=\"12\" size-md=\"6\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Description</ion-label>\r\n      <ion-input placeholder=\"Enter Description\" [(ngModel)]=\"Add_Plot.description\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"2.2\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Price Per Marla</ion-label>\r\n      <ion-input placeholder=\"Enter Price\" [(ngModel)]=\"price_marla\" (ionChange)=\"price_calculations($event)\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"2.2\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Size in Sq ft</ion-label>\r\n      <ion-input placeholder=\"Enter Size\"  [(ngModel)]=\"this.size_plot.total_size\" ></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"2.2\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Size in Marla</ion-label>\r\n      <ion-input placeholder=\"Enter size\" [(ngModel)]=\"Add_Plot.area_marla\"\r\n      (ionChange)=\"area_calculations()\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"2.2\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Total size in Sq ft</ion-label>\r\n      <ion-input placeholder=\"Enter Description\" disabled=\"true\"  [(ngModel)]=\"property_total_size\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size-xs=\"6\" size-md=\"2.2\">\r\n      <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"l1\">Total Price</ion-label>\r\n      <ion-input placeholder=\"Enter Location\" disabled=\"true\" [(ngModel)]=\"Add_Plot.price\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n\r\n</ion-row>\r\n\r\n\r\n\r\n<ion-card class=\"c1\">\r\n\r\n<ion-button expand=\"block\" class=\"btn\" (click)=\"Add_Plot_Data()\">Submit</ion-button>\r\n</ion-card>\r\n\r\n\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F6F8FC\" fill-opacity=\"1\" d=\"M0,288L60,272C120,256,240,224,360,176C480,128,600,64,720,74.7C840,85,960,171,1080,176C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"></path></svg>\r\n\r\n\r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-plot_add-plot_module_ts.js.map