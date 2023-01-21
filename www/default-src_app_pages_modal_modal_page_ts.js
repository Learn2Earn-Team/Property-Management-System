"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_modal_modal_page_ts"],{

/***/ 8167:
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.html?ngResource */ 1769);
/* harmony import */ var _modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss?ngResource */ 5298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);
/* harmony import */ var src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toasts/toast.service */ 5473);











let ModalPage = class ModalPage {
  constructor(route, toast, global, apiCall, modal) {
    this.route = route;
    this.toast = toast;
    this.global = global;
    this.apiCall = apiCall;
    this.modal = modal;
    this.See_Customer = {
      name: '',
      father_name: '',
      cnic: '',
      cnic_img: '',
      mobile_no: '',
      address: ''
    };
    this.plotupdate = {
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
    this.booking_data = {
      p_id: '',
      plot: '',
      plot_no: '',
      area_marla: '',
      area_sqf: '',
      p_location: '',
      type: '',
      price: '',
      img: '',
      description: '',
      customer_id: '',
      status: '',
      total_payment: '',
      advance: '',
      total_installment: '',
      remaining_payment: '',
      booking_date: '',
      granter_name: '',
      granter_mobileno: '',
      granter_cnic: '',
      granter_cnic_img: '',
      name: '',
      father_name: '',
      cnic: '',
      cnic_img: '',
      mobile_no: '',
      address: ''
    };
    this.printaaray = {
      name: '',
      plot_no: '',
      price: '',
      area_marla: '',
      area_sqf: ''
    };
  }

  ngOnInit() {
    // updateplot
    this.update = this.Category;
    this.plotupdate = this.updatePlot; // updateCustomer

    this.See_Customer = this.updateCustomer; // updateCustomer

    this.installmentbymonth = this.Monthly_Installment_details; // bookingupdate

    this.booking_data = this.UpdateBooking; // bookingdetails

    this.see_detailsbooking = this.bookingDetails;
    console.log(this.Installment_details);
    this.printaaray.name = this.Installment_details[0].name;
    this.printaaray.plot_no = this.Installment_details[0].plot_no;
    this.printaaray.price = this.Installment_details[0].price;
    this.printaaray.area_marla = this.Installment_details[0].area_marla;
    this.printaaray.area_sqf = this.Installment_details[0].area_sqf;
    console.log(this.printaaray);
    console.log(this.Category); // // console.log(this.updateCustomer);
    // installment

    this.month_installment = this.installmentdetails;
  } // async view_all_installment(customer_id) {
  //   await this.apiCall.api_getInstallmentByp_id(customer_id)
  //   this.global.Getinstallmentbyid.subscribe(res => {
  //     console.log(res);
  //     this.installmentbymonth = res; 
  //    });


  updateimg() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,` + img.base64String);
      console.log(img.base64String);
      _this.plotupdate.img = img.base64String;
    })();
  } // update_customer_img


  update_customer_img() {
    var _this2 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,` + img.base64String);
      console.log(img.base64String);
      _this2.See_Customer.cnic_img = img.base64String;
    })();
  } // update_booking_img


  update_booking_img() {
    var _this3 = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera
      });
      document.getElementById('cameraImage').setAttribute('src', `data:image/${img.format};base64,` + img.base64String);
      console.log(img.base64String);
      _this3.UpdateBooking.granter_cnic_img = img.base64String;
    })();
  } // plotupdate function


  Plot_Update() {
    console.log(this.plotupdate);
    this.apiCall.api_update_plot(this.plotupdate);
    this.Plot_close();
  } // customerupdate function


  see_customer() {
    console.log(this.See_Customer);
    this.apiCall.api_update_customer(this.See_Customer);
    this.customer_close();
  } // updatebooking function


  Booking() {
    console.log(this.UpdateBooking);
    this.apiCall.api_update_booking(this.UpdateBooking);
    this.booking_close();
  }

  Plot_close() {
    this.close();
  }

  customer_close() {
    this.close();
  }

  booking_close() {
    this.close();
  }

  installment_close() {
    this.close();
  }

  Plot_delete() {
    console.log('delete');
  }

  customer_delete() {
    console.log('delete');
  }

  close() {
    this.modal.dismiss(close).then(r => {
      console.log(r);
    });
  }

  printbtn(data) {
    // this.route.navigate[('instalmentprint')]
    this.route.navigate(['instalmentprint'], {
      state: {
        data: data
      }
    });
    this.close();
  }

};

ModalPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

ModalPage.propDecorators = {
  Category: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  plotDetails: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  updatePlot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  UpdateBooking: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  Installment_details: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  Monthly_Installment_details: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  bookingDetails: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  installmentdetails: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  updateCustomer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-modal',
  template: _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ModalPage);


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

/***/ 5298:
/*!********************************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  --background-hover: none;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .main {\n    margin: 5px;\n  }\n}\n\n@media (min-width: 769px) {\n  .main {\n    width: 55%;\n    margin: 10px;\n  }\n}\n\nspan {\n  color: rgba(60, 77, 184, 0.6862745098);\n}\n\np {\n  margin-top: 12px;\n  font-size: 17px;\n  margin-bottom: 3px;\n}\n\nion-button {\n  text-transform: none;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 15px;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .input {\n    height: 50px;\n  }\n}\n\nion-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n}\n\n.modalmaindiv {\n  margin-bottom: 85px;\n}\n\nbutton {\n  background-color: #0093e9;\n  color: white;\n  border-radius: 5px;\n}\n\n.trfor {\n  display: none;\n}\n\n.template {\n  display: none;\n}\n\n.b1 {\n  width: 40%;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.list1 {\n  width: 100%;\n  display: flex;\n  margin-top: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUVJLFdBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxzQ0FBQTtBQUFKOztBQUVDO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSTtJQUNBLFlBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFTSiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxcHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAubWFpbntcclxuXHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn19XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufX1cclxuXHJcbnNwYW57XHJcbiAgICBjb2xvcjogIzNjNGRiOGFmO1xyXG59XHJcbiBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmlucHV0e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuLm1vZGFsbWFpbmRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDg1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTNlOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udHJmb3J7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50ZW1wbGF0ZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmIxe1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5saXN0MXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDUzcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1769:
/*!********************************************************!*\
  !*** ./src/app/pages/modal/modal.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-app *ngIf=\"this.update == 'Plot'\" mode=\"ios\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Update Plot</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <!-- <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"Plot_delete()\"></ion-icon> -->\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"Plot_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content mode=\"ios\">\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card ion-margin\">\r\n          <div class=\"card-body modalmaindiv\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3 mb-2\">\r\n                      <div class=\"d-flex  flex-column justify-content-center align-items-center\">\r\n                        <img class=\"placeholder_img\" id=\"cameraImage\">\r\n                        <div (click)=\"updateimg()\"\r\n                          class=\"d-flex justify-content-center align-items-center position-absolute pic_button\">\r\n                          <ion-icon color=\"light\" style=\"width: 35px;height: 25px;\" name=\"image-outline\"></ion-icon>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-9 mb-2\">\r\n                      <!-- <div class=\"form-group\">\r\n                        <label class=\"text-label\">Plot Name</label>\r\n                        <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"plotupdate.plot\" placeholder=\"xyz\" required></ion-input>\r\n                      </div> -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 mb-2 mt-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Plot</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"plotupdate.plot\" class=\"form-control\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Plot No</label>\r\n                            <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"plotupdate.plot_no\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Type</label>\r\n                        <ion-select interface=\"action-sheet\" [(ngModel)]=\"plotupdate.type\" placeholder=\"Select type\">\r\n                          <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n                          <ion-select-option value=\"Residential\">Residential</ion-select-option>\r\n                        </ion-select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Location</label>\r\n                        <ion-input type=\"text\" [(ngModel)]=\"plotupdate.p_location\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Marla</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"plotupdate.area_marla\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Sq.ft</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"plotupdate.area_sqf\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Price</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"plotupdate.price\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Description</label>\r\n                        <ion-input [(ngModel)]=\"plotupdate.description\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ion-button fill=\"solid\" color=\"secondary\" class=\"mt-2\" (click)=\"Plot_Update()\">Update</ion-button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n<ion-app *ngIf=\"this.Category == 'viewplotdetails'\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Plot Detail</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <!-- <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"Plot_delete()\"></ion-icon> -->\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"Plot_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n\r\n\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card mb-5\">\r\n          <div class=\"card-body\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n                  <div style=\"width: 100%; height: 250px;\">\r\n                    <img style=\"width: 100%; height: 250px;\" src=\"{{plotDetails.img}}\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Plot No</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.plot_no\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Plot Name</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.plot\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Type</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.type\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Marla </label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.area_marla\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-3\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Sq.ft </label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.area_sqf\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Price</label>\r\n                        <ion-input type=\"number\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.price\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Status</label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.status\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Location</label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.p_location\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\" style=\"margin-bottom: 50px;\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Description</label>\r\n                        <ion-textarea readonly=\"true\" class=\"form-control\" [(ngModel)]=\"plotDetails.description\"\r\n                          required></ion-textarea>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <!-- <div class=\"col-lg-12 mb-3\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Where are you from*</label>\r\n                        <ion-input type=\"text\"  class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\"this.update == 'Booking'\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Update Booking</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <!-- <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"booking_delete()\"></ion-icon> -->\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"booking_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card ion-margin\">\r\n          <div class=\"card-body modalmaindiv\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3 mb-2\">\r\n                      <div class=\"d-flex  flex-column justify-content-center align-items-center\">\r\n                        <img class=\"placeholder_img\" id=\"cameraImage\">\r\n                        <div (click)=\"update_booking_img()\"\r\n                          class=\"d-flex justify-content-center align-items-center position-absolute pic_button\">\r\n                          <ion-icon color=\"light\" style=\"width: 35px;height: 25px;\" name=\"image-outline\"></ion-icon>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-9 mb-2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Plot No</label>\r\n                            <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"booking_data.plot_no\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-12 mb-2 mt-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Customer</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"booking_data.name\" class=\"form-control\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Type</label>\r\n                        <ion-select interface=\"action-sheet\" [(ngModel)]=\"booking_data.type\" placeholder=\"Select type\">\r\n                          <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n                          <ion-select-option value=\"Residential\">Residential</ion-select-option>\r\n                        </ion-select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Location</label>\r\n                        <ion-input [(ngModel)]=\"booking_data.p_location\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Marla</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.area_marla\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Sq.ft</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.area_sqf\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Price</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.price\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Advance</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.advance\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Total Payment</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.total_payment\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Remaining Payment</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.remaining_payment\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Total Installment</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"booking_data.total_installment\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Status</label>\r\n                        <ion-input [(ngModel)]=\"booking_data.status\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Booking Date</label>\r\n                        <ion-input [(ngModel)]=\"booking_data.booking_date\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Description</label>\r\n                        <ion-input [(ngModel)]=\"booking_data.description\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ion-button fill=\"solid\" color=\"secondary\" class=\"mt-2\" (click)=\"Booking()\">Update</ion-button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\"this.update == 'Customer'\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Update Customer</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <!-- <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"customer_delete()\"></ion-icon> -->\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"customer_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card ion-margin\">\r\n          <div class=\"card-body modalmaindiv\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3 mb-2\">\r\n                      <div class=\"d-flex  flex-column justify-content-center align-items-center\">\r\n                        <img class=\"placeholder_img\" id=\"cameraImage\">\r\n                        <div (click)=\"update_customer_img()\"\r\n                          class=\"d-flex justify-content-center align-items-center position-absolute pic_button\">\r\n                          <ion-icon color=\"light\" style=\"width: 35px;height: 25px;\" name=\"image-outline\"></ion-icon>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-9 mb-2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 mb-2 mt-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Customer</label>\r\n                            <ion-input type=\"text\" [(ngModel)]=\"See_Customer.name\" class=\"form-control\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 mb-2\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"text-label\">Father name</label>\r\n                            <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"See_Customer.father_name\"\r\n                              placeholder=\"#0001234\" required></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">CNIC</label>\r\n                        <ion-input type=\"text\" [(ngModel)]=\"See_Customer.cnic\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Mobile</label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"See_Customer.mobile_no\" class=\"form-control\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Address</label>\r\n                        <ion-input [(ngModel)]=\"See_Customer.address\" class=\"form-control\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ion-button fill=\"solid\" color=\"secondary\" class=\"mt-2\" (click)=\"see_customer()\">Update</ion-button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\" this.Category == 'View all installment'\">\r\n\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">All Installment</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"installment_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <div class=\"card ion-margin rounded-3\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-responsive-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Customer Name</th>\r\n                <th>Status</th>\r\n                <th>Installment no</th>\r\n                <th>Paid Installment Date</th>\r\n                <th>Next Installment Date</th>\r\n                <th>Amount</th>\r\n                <th>print</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of Installment_details ; let i=index\">\r\n                <th>{{ i+1 }}</th>\r\n                <td>{{data.name}}</td>\r\n                <td> {{data.status}}</td>\r\n                <td>{{data.installment_no}}</td>\r\n                <td>{{data.installment_date}}</td>\r\n                <td>{{data.upcoming_installment}}</td>\r\n                <td class=\"color-primary\">Rs,{{data.amount}}</td>\r\n                <td> <button (click)=\"printbtn(data)\">\r\n                    Print\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n          <!-- All installment print -->\r\n          <div id=\"template\" class=\"template\">\r\n            <div id=\"d1\">\r\n              <div id=\"divall\">\r\n                <div id=\"dimg\">\r\n                  <img src=\"../../../assets/Baba Farid Smart Valley Logo.png\" alt=\"\" id=\"img\">\r\n                </div>\r\n                <div id=\"name\">\r\n                  <h4>Name: {{this.printaaray.name}}</h4>\r\n                  <h5>#Plot No.: {{this.printaaray.plot_no}}</h5>\r\n                  <h5> Plot Size: {{this.printaaray.area_marla}}</h5>\r\n                  <h5> Totall Amount: {{this.printaaray.price}}</h5>\r\n                </div>\r\n              </div>\r\n              <div id=\"dh2\">\r\n                <h3 id=\"d2\">\r\n                  All installment Slip\r\n                </h3>\r\n              </div>\r\n              <div>\r\n                <table id=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th id=\"th\"><h5># Installment no</h5></th>\r\n                      <th id=\"th\"><h5>Amount</h5></th>\r\n                      <th id=\"th\"><h5>Remaing Amount</h5></th>\r\n                      <th id=\"th\"><h5>Installment Date</h5></th>\r\n                      <th id=\"th\"><h5>Next Installment Date</h5></th>\r\n                   \r\n                      <th id=\"th\"><h5>Remaining Installment</h5></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of Installment_details\">\r\n                      <td id=\"td\">\r\n                        {{data.installment_no}}\r\n                      </td>\r\n                      <td id=\"td\">\r\n                        {{data.amount}}\r\n                      </td>\r\n                      <td id=\"td\">\r\n                        {{data.remaning_payment}}\r\n                      </td>\r\n                      <td id=\"td\">\r\n                        {{data.installment_date}}\r\n                      </td>\r\n                      <td id=\"td\">\r\n                        {{data.upcoming_installment}}\r\n                      </td>\r\n                      <td id=\"td\">\r\n                        {{data.total_installment - data.installment_no}}\r\n                      </td>\r\n                    </tr> \r\n        \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- <div class=\"sign\" id=\"sign\">\r\n                <div id=\"mainsin\">\r\n                  <div id=\"cssign\">\r\n\r\n                  </div>\r\n                  <h4 id=\"name\">\r\n                    Customer Sign\r\n                  </h4>\r\n                </div>\r\n                <div id=\"mainsin\">\r\n                  <div id=\"float\">\r\n                    <div id=\"msign\">\r\n\r\n                    </div>\r\n                    <h4 id=\"name\">\r\n                      Managing Direcor\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <!-- <<Print -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ion-list class=\"list1\">\r\n      <button styleSheetFile=\"assets/css/allinstallmentdat.css\" printSectionId=\"template\" ngxPrint class=\"b1\">export</button>\r\n    </ion-list>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n\r\n\r\n<ion-app *ngIf=\" this.Category == 'Monthly Installments'\">\r\n\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Monthly Installment</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"installment_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <div class=\"card ion-margin rounded-3\">\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-responsive-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n                <th>Father Name</th>\r\n                <th>CNIC</th>\r\n                <th>Mobile No</th>\r\n                <th>Address</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of installmentbymonth ; let i=index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{data.name}}</td>\r\n                <td>{{data.father_name}}</td>\r\n                <td>{{data.cnic}}</td>\r\n                <td>{{data.mobile_no}}</td>\r\n                <td>{{data.address}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<!-- booking -->\r\n<div class=\"h-100\" *ngIf=\"this.Category == 'viewbookingdetails'\">\r\n  <h2 class=\"text-black font-w500 page-titles\">Plot Detail</h2>\r\n  <ion-item lines=\"none\" class=\"item-2\">\r\n    <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"Plot_delete()\"></ion-icon>\r\n    <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"Plot_close()\"></ion-icon>\r\n  </ion-item>\r\n  <ion-content>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card ion-margin\">\r\n          <div class=\"card-body modalmaindiv\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n\r\n                  <div style=\"width: 100%; height: 250px;\">\r\n                    <img style=\"width: 100%; height: 250px;\" src=\"{{see_detailsbooking.cnic_img}}\" alt=\"\">\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-9 mb-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 mb-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Plot No</label>\r\n                          <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"see_detailsbooking.plot_no\"\r\n                            placeholder=\"#0001234\" required></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 mb-2 mt-2\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"text-label\">Customer</label>\r\n                          <ion-input type=\"text\" [(ngModel)]=\"see_detailsbooking.name\" class=\"form-control\"\r\n                            placeholder=\"#0001234\" required></ion-input>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Type</label>\r\n                      <ion-select interface=\"action-sheet\" [(ngModel)]=\"see_detailsbooking.type\"\r\n                        placeholder=\"Select type\">\r\n                        <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n                        <ion-select-option value=\"Residential\">Residential</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Location</label>\r\n                      <ion-input [(ngModel)]=\"see_detailsbooking.p_location\" class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Size in Marla</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.area_marla\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Size in Sq.ft</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.area_sqf\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Price</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.price\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Advance</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.advance\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Total Payment</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.total_payment\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Remaining Payment</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.remaining_payment\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Total Installment</label>\r\n                      <ion-input type=\"number\" [(ngModel)]=\"see_detailsbooking.total_installment\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Status</label>\r\n                      <ion-input [(ngModel)]=\"see_detailsbooking.status\" class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Booking Date</label>\r\n                      <ion-input [(ngModel)]=\"see_detailsbooking.booking_date\" class=\"form-control\"\r\n                        required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12 mb-2\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"text-label\">Description</label>\r\n                      <ion-input [(ngModel)]=\"see_detailsbooking.description\" class=\"form-control\" required></ion-input>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <ion-button  fill=\"solid\" color=\"secondary\" class=\"mt-2\" (click)=\"Booking()\">Update</ion-button> -->\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</div>\r\n\r\n<!-- \r\nmonthlyinstallment -->\r\n<ion-app *ngIf=\"this.Category == 'viewinstallmentdetails'\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n      <div class=\"form-head\">\r\n        <div class=\"me-auto w-100 d-flex  align-items-center justify-content-between\">\r\n          <h2 class=\"text-black font-w500 page-titles\">Installment Details</h2>\r\n          <ion-item lines=\"none\" class=\"item-2\">\r\n            <!-- <ion-icon name=\"trash-outline\" class=\"close-icon\" (click)=\"Plot_delete()\"></ion-icon> -->\r\n            <ion-icon class=\"close-icon\" name=\"close-circle-outline\" (click)=\"Plot_close()\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n\r\n\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-xl-12 col-xxl-12\">\r\n        <div class=\"card mb-5\">\r\n          <div class=\"card-body\">\r\n            <div class=\"form-wizard order-create\">\r\n              <div class=\"tab-content\">\r\n                <div>\r\n                  <div style=\"width: 100%; height: 250px;\">\r\n                    <img style=\"width: 100%; height: 250px;\" src=\"{{month_installment.cnic_img}}\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Plot No</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\"\r\n                          [(ngModel)]=\"month_installment.plot_no\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Plot Name</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.plot\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Type</label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.type\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Marla </label>\r\n                        <ion-input type=\"text\" readonly=\"true\" class=\"form-control\"\r\n                          [(ngModel)]=\"month_installment.area_marla\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-3\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Size in Sq.ft </label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.area_sqf\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Price</label>\r\n                        <ion-input type=\"number\" readonly=\"true\" class=\"form-control\"\r\n                          [(ngModel)]=\"month_installment.price\" required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Status</label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.status\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Location</label>\r\n                        <ion-input readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.p_location\"\r\n                          required></ion-input>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12 mb-2\" style=\"margin-bottom: 50px;\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"text-label\">Description</label>\r\n                        <ion-textarea readonly=\"true\" class=\"form-control\" [(ngModel)]=\"month_installment.description\"\r\n                          required></ion-textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-app>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_modal_modal_page_ts.js.map