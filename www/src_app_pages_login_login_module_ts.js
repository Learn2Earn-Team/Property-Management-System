"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CallApi/apicall.service */ 3773);
/* harmony import */ var src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/global.service */ 6606);









let LoginPage = class LoginPage {
  constructor(route, menuCtrl, global, apicall) {
    this.route = route;
    this.menuCtrl = menuCtrl;
    this.global = global;
    this.apicall = apicall;
    this.user = {
      username: '',
      password: '',
      role: ''
    };
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    // this.disableIonSplitPange();
    this.menuCtrl.enable(false);
  }

  submitLogin() {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.apicall.api_login(_this.user);
      _this.user = {
        username: '',
        password: '',
        role: ''
      };
    })();
  }

  disableIonSplitPange() {
    this.ionSplitPane.disabled = true;
  }

  user_login() {
    this.route.navigate(['home']);
    console.log(this.user);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: src_app_services_data_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}, {
  type: src_app_services_CallApi_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService
}];

LoginPage.propDecorators = {
  ionSplitPane: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['ionSplitPane']
  }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".c1 {\n  height: 100%;\n  width: 100%;\n  background-image: url('wp2406726.jpg');\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.c2 {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 0px;\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.c2 ion-list {\n  background: transparent;\n  color: white;\n  text-align: center;\n}\n\n.c2 ion-list h1 {\n  font-weight: bold;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.c2 ion-list p {\n  font-family: sans-serif;\n  letter-spacing: 2px;\n}\n\nion-input, ion-item {\n  --background: transparent;\n  color: white;\n  width: 100%;\n  max-width: 480px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-select {\n  color: white;\n  width: 100%;\n}\n\nion-input {\n  border-bottom: 0.6px solid var(--ion-color-primary);\n}\n\nion-button {\n  width: 150px;\n  margin-top: 40px;\n}\n\n.center1 {\n  margin-top: 50px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNDLDhCQUFBO0FBQUw7O0FBQ0s7RUFDRyx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUFRO0VBQ0ksaUJBQUE7RUFDQSw2RUFBQTtBQUVaOztBQUFRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUVaOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLG1EQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUtKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYzF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL3dwMjQwNjcyNi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jMntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLDAuOCk7XHJcbiAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG59XHJcbmlvbi1pbnB1dCwgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlci1ib3R0b206IC42cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5jZW50ZXIxe1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content mode=\"ios\">\r\n  <ion-card class=\"c1\">\r\n  \r\n    <ion-card class=\"c2\">\r\n  \r\n      <div class=\"center1\">\r\n        <ion-list>\r\n          <h1>BABA FAREED SMART VALLEY</h1>\r\n          <p>Home Of Your Dreams</p>\r\n        </ion-list>\r\n    \r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Username</ion-label>\r\n          <ion-input  type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"user.username\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Password</ion-label>\r\n          <ion-input type=\"number\" type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"user.password\"></ion-input>\r\n        </ion-item>\r\n  \r\n    \r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">Role</ion-label>\r\n            <ion-select interface=\"popover\"  placeholder=\"Select Type\" [(ngModel)]=\"user.role\" >\r\n              <ion-select-option value=\"admin\">Admin</ion-select-option>\r\n              <ion-select-option value=\"Employ\">Employ</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n      \r\n    \r\n        <center> \r\n        <ion-button color=\"primary\" (click)=\"submitLogin()\">LogIn</ion-button>\r\n        </center>\r\n      </div>\r\n  \r\n    </ion-card>\r\n  \r\n    </ion-card>\r\n  \r\n  \r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map