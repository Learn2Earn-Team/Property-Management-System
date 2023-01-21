"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_print-installment_print-installment_module_ts"],{

/***/ 1150:
/*!***********************************************************************!*\
  !*** ./src/app/print-installment/print-installment-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintInstallmentPageRoutingModule": () => (/* binding */ PrintInstallmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _print_installment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-installment.page */ 8725);




const routes = [
    {
        path: '',
        component: _print_installment_page__WEBPACK_IMPORTED_MODULE_0__.PrintInstallmentPage
    }
];
let PrintInstallmentPageRoutingModule = class PrintInstallmentPageRoutingModule {
};
PrintInstallmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrintInstallmentPageRoutingModule);



/***/ }),

/***/ 3447:
/*!***************************************************************!*\
  !*** ./src/app/print-installment/print-installment.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintInstallmentPageModule": () => (/* binding */ PrintInstallmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _print_installment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-installment-routing.module */ 1150);
/* harmony import */ var _print_installment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-installment.page */ 8725);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print-element */ 3412);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ 1365);









let PrintInstallmentPageModule = class PrintInstallmentPageModule {
};
PrintInstallmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _print_installment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintInstallmentPageRoutingModule,
            ngx_print_element__WEBPACK_IMPORTED_MODULE_7__.NgxPrintElementModule,
            ngx_print__WEBPACK_IMPORTED_MODULE_8__.NgxPrintModule
        ],
        declarations: [_print_installment_page__WEBPACK_IMPORTED_MODULE_1__.PrintInstallmentPage]
    })
], PrintInstallmentPageModule);



/***/ }),

/***/ 8725:
/*!*************************************************************!*\
  !*** ./src/app/print-installment/print-installment.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintInstallmentPage": () => (/* binding */ PrintInstallmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _print_installment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-installment.page.html?ngResource */ 7763);
/* harmony import */ var _print_installment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-installment.page.scss?ngResource */ 7837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PrintInstallmentPage = class PrintInstallmentPage {
    constructor() {
        // public data: any = {};
        this.data = { p_id: '', customer_id: '', customer_name: '', installment_no: '', amount: '', remaning_payment: '', upcoming_installment: '', a_id: '' };
    }
    ngOnInit() {
        this.data = history.state.data;
        console.log(this.data);
        this.plot = history.state.plot[0];
        console.log(this.plot);
    }
};
PrintInstallmentPage.ctorParameters = () => [];
PrintInstallmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-print-installment',
        template: _print_installment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_print_installment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrintInstallmentPage);



/***/ }),

/***/ 7837:
/*!**************************************************************************!*\
  !*** ./src/app/print-installment/print-installment.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".list {\n  width: auto;\n  background: #3b4cb8;\n  box-shadow: none;\n  margin: 10px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n\n.page-titles {\n  margin-top: 0.125rem;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n\n.d1 {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d2 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  height: 200px;\n  width: 300px;\n}\n\n.d3 {\n  display: flex;\n  justify-content: center;\n}\n\n.d4 {\n  padding: 20px;\n}\n\n.d5 {\n  float: left;\n  padding: 20px;\n}\n\n.h11 {\n  font-weight: 800;\n  color: rgb(101, 96, 96);\n  font-family: sans-serif;\n}\n\n.h31 {\n  color: blue;\n  font-weight: 800;\n}\n\n.dev1 {\n  display: flex;\n}\n\n.div2 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div4 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div5 {\n  width: 79%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div6 {\n  width: 40%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div7 {\n  width: 30%;\n  border-bottom: 1px solid black;\n  height: 37px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div8 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div9 {\n  width: 71%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div10 {\n  width: 73%;\n  border-bottom: 1px solid black;\n  margin-left: 5px;\n  height: 37px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.div11 {\n  width: 22%;\n  border-bottom: 1px solid black;\n  margin-left: 51%;\n  height: 37px;\n}\n\n.name {\n  font-weight: 700;\n  color: rgb(101, 96, 96);\n  width: auto;\n}\n\n.names {\n  font-weight: 700;\n  margin-left: 10px;\n  color: rgb(101, 96, 96);\n}\n\n@media (max-width: 1395px) {\n  .name {\n    font-weight: 700;\n    font-size: 94%;\n    color: rgb(101, 96, 96);\n    width: auto;\n  }\n  .names {\n    font-weight: 700;\n    font-size: 94%;\n    margin-left: 10px;\n    color: rgb(101, 96, 96);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWluc3RhbGxtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFHQTtFQUNJLG9CQUFBO0FBQUo7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFDQTtFQUNDLFVBQUE7RUFDRyxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRCxnQkFBQTtFQUNHLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQztFQUNDLGFBQUE7RUFDRSx1QkFBQTtBQUtKOztBQUZDO0VBQ0MsYUFBQTtBQUtGOztBQUhDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QUFNRjs7QUFIQztFQUNDLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUhDO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkM7RUFFQyxhQUFBO0FBTUY7O0FBSEM7RUFDQyxVQUFBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDSCxrQkFBQTtFQUNBLGdCQUFBO0FBTUQ7O0FBSEM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBTUQ7O0FBSkM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBT0Q7O0FBSkM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBT0Q7O0FBTEM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBT0Q7O0FBTEM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBUUQ7O0FBTkM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBU0Q7O0FBTkM7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNELGdCQUFBO0FBU0Q7O0FBUEM7RUFFQyxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQztFQUNDLGdCQUFBO0VBRUEsdUJBQUE7RUFDRyxXQUFBO0FBU0w7O0FBTEM7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFMSTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VBUVY7RUFKTTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7RUFNVjtBQUNGIiwiZmlsZSI6InByaW50LWluc3RhbGxtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I0Y2I4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5kMXtcclxuXHR3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5kMntcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHRpbWd7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdH1cclxuXHQuZDN7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHJcblx0fVxyXG5cdC5kNHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cdC5kNXtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHR9XHJcblx0XHJcblx0LmgxMXtcclxuXHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRjb2xvcjogcmdiKDEwMSwgOTYsIDk2KTtcclxuXHRcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuXHR9XHJcblx0LmgzMXtcclxuXHRcdGNvbG9yOiBibHVlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHR9XHJcblx0LmRldjF7XHJcblx0XHRcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdFxyXG5cdC5kaXYye1xyXG5cdFx0d2lkdGg6IDIyJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cclxuXHR9XHJcblx0LmRpdjR7XHJcblx0XHR3aWR0aDogNzMlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblx0LmRpdjV7XHJcblx0XHR3aWR0aDogNzklO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcclxuXHR9XHJcblx0LmRpdjZ7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblx0LmRpdjd7XHJcblx0XHR3aWR0aDogMzAlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdFx0XHJcblx0XHRtYXJnaW4tbGVmdDogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHQuZGl2OHtcclxuXHRcdHdpZHRoOiA3MyU7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0aGVpZ2h0OiAzN3B4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cdC5kaXY5e1xyXG5cdFx0d2lkdGg6IDcxJTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcclxuXHR9XHJcblx0LmRpdjEwe1xyXG5cdFx0d2lkdGg6IDczJTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRoZWlnaHQ6IDM3cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblx0LmRpdjExe1xyXG5cdFx0XHJcblx0XHR3aWR0aDogMjIlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUxJTtcclxuXHRcdGhlaWdodDogMzdweDtcclxuXHR9XHJcblx0Lm5hbWV7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHJcblx0XHRjb2xvcjogcmdiKDEwMSwgOTYsIDk2KTtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHQubmFtZXN7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRjb2xvcjogcmdiKDEwMSwgOTYsIDk2KTtcclxuXHRcdFxyXG5cdH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzk1cHgpIHtcclxuICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5NCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5NiwgOTYpO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZXN7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTQlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMDEsIDk2LCA5Nik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */";

/***/ }),

/***/ 7763:
/*!**************************************************************************!*\
  !*** ./src/app/print-installment/print-installment.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n\r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">\r\n      <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <ion-content>\r\n\r\n  <ion-list class=\"list bd2\" style=\"margin-top: 10px;\">\r\n    <div class=\"bd3\">\r\n      <ion-row>\r\n        <ion-col  size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\"  style=\"margin-left: 11px;\">Installment</h2>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <!-- <ion-row >\r\n    <button style=\"width: 50%; margin: 5px;\" \r\n     [print]=\"['example5', config]\"\r\n      class=\"mt-1 ms-auto btn1 printbtn me-auto  text-center\"\r\n        >\r\n      Print\r\n    </button>\r\n  </ion-row> -->\r\n\r\n<!-- <div>\r\n    <div class=\"col-xl-12\" >\r\n      <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n        <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n          <thead>\r\n            <tr class=\" text-clr1\">\r\n              <th>Plot No</th>\r\n              <th>Plot </th>\r\n              <th>Customer</th>\r\n              <th>Type</th>\r\n              <th>Booking Date</th> \r\n              <th>Location</th>\r\n              <th>Size(Sq.ft)</th>\r\n              <th>Size(Marla)</th>\r\n              <th>Price</th>\r\n              <th>Advance</th>\r\n              <th>Total Price</th>\r\n              <th>Total Installment</th>\r\n              <th>Status</th>\r\n              <th>Description</th>\r\n              <th>Installment Amount</th>\r\n              <th>Installment No</th>\r\n              <th>Remaining Payment</th>\r\n              <th>UpComing Installment</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\" text-clr\">\r\n              <td>{{this.plot.plot_no}} </td>\r\n              <td>{{this.plot.plot}} </td>\r\n              <td>{{this.data.customer_name}} </td>\r\n              <td>{{this.plot.type}}</td>\r\n              <td>{{this.plot.booking_date}} </td>\r\n              <td>{{this.plot.p_location}}</td>\r\n              <td>{{this.plot.area_sqf}}</td>\r\n              <td>{{this.plot.area_marla}}</td>\r\n              <td>{{this.plot.price}}</td>\r\n              <td>{{this.plot.advance}}</td>\r\n              <td>{{this.plot.total_payment}}</td>\r\n              <td>{{this.plot.status}}</td> \r\n              <td>{{this.plot.description}}</td> \r\n              <td>{{this.data.amount}}</td> \r\n              <td>{{this.data.installment_no}}</td>\r\n              <td>{{this.data.remaning_payment}}</td> \r\n              <td>{{this.data.upcoming_installment}}</td> \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n<!-- \r\n</ion-content>  -->\r\n\r\n<ion-content>\r\n\r\n  <button class=\"btn1\" styleSheetFile=\"assets/css/style.css\" printSectionId=\"demo\" ngxPrint>\r\n    <ion-icon name=\"document-text-outline\"></ion-icon> Export\r\n  </button>\r\n\r\n  <div id=\"demo\">\r\n    <div class=\"invoice overflow-auto\">\r\n      <div style=\"min-width: 600px\">\r\n\r\n        <header>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\" style=\"height: 153px;\">\r\n              <a><img src=\"./../../assets/Luqman_town.png\" data-holder-rendered=\"true\" style=\"width: 38%;\" /></a>\r\n            </div>\r\n            <div class=\"col-md-3 text company-details\" style=\"font-size: 21px;margin-top: 16px;\">\r\n              <h2 class=\"name\"><a href=\"#\">Rana Waseem</a></h2>\r\n              <div class=\"text2\">Pakpattan</div>\r\n              <div class=\"text2\">031273829</div>\r\n              <div class=\"text2\">luqman893@gmail.com</div>\r\n            </div>\r\n          </div>\r\n        </header>\r\n\r\n        \r\n          <div class=\"row contacts\" id=\"row\">\r\n            <div class=\"col-md-9 invoice-to\">\r\n              <div class=\"text-gray-light\">INVOICE TO:</div>\r\n              <h2 class=\"to\"> <a href=\"#\">Customer Name</a> </h2>\r\n              <div class=\"text3\">Customer Location</div>\r\n              <div class=\"text3\">0317382302</div>\r\n              <div class=\"text3\">36402-187282-2</div>\r\n            </div>\r\n            <div class=\"col-md-3 invoice-details\">\r\n              <h2 class=\"invoice-id2\" style=\"margin-top: 19px;font-size: 25px;\">Booking No:5</h2>\r\n              <div class=\"date\">Date of Invoice: 01/10/2018</div>\r\n              <div class=\"date\">Due Date: 30/10/2018</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n    <thead>\r\n    <tr>\r\n    <th>#</th>\r\n    <th>DESCRIPTION</th>\r\n    <th>HOUR PRICE</th>\r\n    <th>HOURS</th>\r\n    <th>TOTAL</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n    <td class=\"no\">04</td>\r\n    <td class=\"text-left\"><h3>\r\n    <a target=\"_blank\" href=\"https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w\">\r\n    Youtube channel\r\n    </a>\r\n    </h3>\r\n    <a target=\"_blank\" href=\"https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w\">\r\n    Useful videos\r\n    </a>\r\n    to improve your Javascript skills. Subscribe and stay tuned :)\r\n    </td>\r\n    <td class=\"unit\">$0.00</td>\r\n    <td class=\"qty\">100</td>\r\n    <td class=\"total\">$0.00</td>\r\n    </tr>\r\n    <tr>\r\n    <td class=\"no\">01</td>\r\n    <td class=\"text-left\"><h3>Website Design</h3>Creating a recognizable design solution based on the company's existing visual identity</td>\r\n    <td class=\"unit\">$40.00</td>\r\n    <td class=\"qty\">30</td>\r\n    <td class=\"total\">$1,200.00</td>\r\n    </tr>\r\n    <tr>\r\n    <td class=\"no\">02</td>\r\n    <td class=\"text-left\"><h3>Website Development</h3>Developing a Content Management System-based Website</td>\r\n    <td class=\"unit\">$40.00</td>\r\n    <td class=\"qty\">80</td>\r\n    <td class=\"total\">$3,200.00</td>\r\n    </tr>\r\n    <tr>\r\n    <td class=\"no\">03</td>\r\n    <td class=\"text-left\"><h3>Search Engines Optimization</h3>Optimize the site for search engines (SEO)</td>\r\n    <td class=\"unit\">$40.00</td>\r\n    <td class=\"qty\">20</td>\r\n    <td class=\"total\">$800.00</td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n    <tr>\r\n    <td colspan=\"2\"></td>\r\n    <td colspan=\"2\">SUBTOTAL</td>\r\n    <td>$5,200.00</td>\r\n    </tr>\r\n    <tr>\r\n    <td colspan=\"2\"></td>\r\n    <td colspan=\"2\">TAX 25%</td>\r\n    <td>$1,300.00</td>\r\n    </tr>\r\n    <tr>\r\n    <td colspan=\"2\"></td>\r\n    <td colspan=\"2\">GRAND TOTAL</td>\r\n    <td>$6,500.00</td>\r\n    </tr>\r\n    </tfoot>\r\n    </table> -->\r\n\r\n          <div class=\"thanks\" style=\"text-align: center;\"> <a href=\"#\">Your Plot Details</a> </div>\r\n\r\n          <div>\r\n            <div class=\"col-xl-12\">\r\n              <div class=\"table-responsive table-hover fs-14 ion-margin bg-white\">\r\n                <table class=\"table table-hover display mb-4 dataTablesCard  card-table\" id=\"example5\">\r\n                  <thead>\r\n                    <tr class=\" text-clr1\">\r\n                      <th>Plot No</th>\r\n                      <th>Plot </th>\r\n                      <th>Customer</th>\r\n                      <th>Type</th>\r\n                      <th>Booking Date</th>\r\n                      <th>Location</th>\r\n                      <th>Size(Sq.ft)</th>\r\n                      <th>Size(Marla)</th>\r\n                      <th>Price</th>\r\n                      <th>Advance</th>\r\n                      <th>Total Price</th>\r\n                      <th>Total Installment</th>\r\n                      <th>Status</th>\r\n                      <th>Description</th>\r\n                      <th>Installment Amount</th>\r\n                      <th>Installment No</th>\r\n                      <th>Remaining Payment</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr class=\" text-clr\">\r\n                      <td>q</td>\r\n                      <td>Luqman Town</td>\r\n                      <td>Customr</td>\r\n                      <td>commercial</td>\r\n                      <td>2022-10-11 </td>\r\n                      <td>Pakpattan</td>\r\n                      <td>7.5</td>\r\n                      <td>7</td>\r\n                      <td>80000</td>\r\n                      <td>6000</td>\r\n                      <td>800</td>\r\n                      <td>booked</td>\r\n                      <td>Description</td>\r\n                      <td>900</td>\r\n                      <td>9</td>\r\n                      <td>387</td>\r\n                      <td>782</td>\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"thanks\" style=\"text-align: center;margin-top: 54px;\">Thank you!</div>\r\n          <div class=\"notices\">\r\n            <div>NOTICE:</div>\r\n            <div class=\"notice\">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>\r\n          </div>\r\n        \r\n        <footer>\r\n          Invoice was created on a computer and is valid without the signature and seal.\r\n        </footer>\r\n      </div>\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"d1\" id=\"demo\">\r\n<div class=\"d2\" id=\"d2\">\r\n<img src=\"../../../assets/Baba Farid Smart Valley Logo.png\" alt=\"\" id=\"img\">\r\n\r\n</div>\r\n<div class=\"d3\" id=\"d3\">\r\n<h3 class=\"h11\" id=\"h11\">\r\n Well Come \r\n</h3>\r\n</div>\r\n<div class=\"d4\" id=\"d4\">\r\n\r\n <div class=\"dev1\" id=\"dev1\">\r\n   <h4 class=\"name\" id=\"name\">\r\n     Plot NO:\r\n   </h4>\r\n   <div class=\"div2\" id=\"div2\">\r\n     <p>\r\n      {{this.plot.plot_no}}\r\n     </p>\r\n   </div>\r\n   <h4 class=\"name\" id=\"name\">\r\n     Plot:\r\n   </h4>\r\n   <div class=\"div2\" id=\"div2\">\r\n     <p>\r\n      {{this.plot.plot}}\r\n     </p>\r\n   </div>\r\n   <h4 class=\"name\" id=\"name\">\r\n    Area Marla:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.area_marla}}\r\n    </p>\r\n  </div> \r\n   <h4 class=\"name\" id=\"name\">\r\n    Area Sq.Ft:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.area_sqf}}\r\n    </p>\r\n  </div> \r\n   <h4 class=\"name\" id=\"name\">\r\n    Plot Location:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.p_location}}\r\n    </p>\r\n  </div> \r\n   <h4 class=\"name\" id=\"name\">\r\n    Plot Type:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.type}}\r\n    </p>\r\n  </div> \r\n </div>\r\n\r\n <div class=\"dev1\" id=\"dev1\">\r\n\r\n  <h4 class=\"name\" id=\"name\">\r\n    Plot Price:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.price}}\r\n    </p>\r\n  </div> \r\n   <h4 class=\"name\" id=\"name\">\r\n    Plot Advance\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.advance}}\r\n    </p>\r\n  </div>  \r\n   <h4 class=\"name\" id=\"name\">\r\n    Plot Status\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.status}}\r\n    </p>\r\n  </div>  \r\n   <h4 class=\"name\" id=\"name\">\r\n    Plot Discription\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.description}}\r\n    </p>\r\n  </div>   \r\n    <h4 class=\"name\" id=\"name\">\r\n    Booking Date:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.booking_date}}\r\n    </p>\r\n  </div> \r\n   <h4 class=\"name\" id=\"name\">\r\n    Customer Name:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.data.customer_name}}\r\n    </p>\r\n  </div>  \r\n  <h4 class=\"name\" id=\"name\">\r\n    CNIC:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.cnic}}\r\n    </p>\r\n  </div>\r\n    <h4 class=\"name\" id=\"name\">\r\n    Mobile No:\r\n  </h4>\r\n  <div class=\"div2\" id=\"div2\">\r\n    <p>\r\n      {{this.plot.mobile_no}}\r\n    </p>\r\n  </div>\r\n\r\n </div>\r\n\r\n <div class=\"dev1\" id=\"dev1\">\r\n   <h4 class=\"name\" id=\"name\">\r\n    Installment Amount:\r\n   </h4>\r\n   <div class=\"div8\" id=\"div8\">\r\n     <p>\r\n      {{this.data.amount}}\r\n     </p>\r\n   </div>\r\n </div>\r\n <div class=\"dev1\" id=\"dev1\">\r\n   <h4 class=\"name\" id=\"name\">\r\n    Installment No:\r\n   </h4>\r\n   <div class=\"div9\" id=\"div9\">\r\n     <p>\r\n      {{this.data.installment_no}}\r\n     </p>\r\n   </div>\r\n </div>\r\n <div class=\"dev1\" id=\"dev1\">\r\n   <h4 class=\"name\" id=\"name\">\r\n    Remaining Amount:\r\n   </h4>\r\n   <div class=\"div10\" id=\"div10\">\r\n     <p>\r\n      {{this.data.remaning_payment}}\r\n     </p>\r\n   </div>\r\n </div>\r\n <div class=\"dev1\" id=\"dev1\">\r\n   <h4 class=\"name\" id=\"name\">\r\n    Managing Director:\r\n   </h4>\r\n   <div class=\"div11\" id=\"div11\">\r\n\r\n   </div>\r\n </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n</div> -->\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_print-installment_print-installment_module_ts.js.map