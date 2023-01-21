"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_booking_booking_module_ts"],{

/***/ 9376:
/*!*********************************************************!*\
  !*** ./src/app/pages/booking/booking-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageRoutingModule": () => (/* binding */ BookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.page */ 3933);




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_0__.BookingPage
    }
];
let BookingPageRoutingModule = class BookingPageRoutingModule {
};
BookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingPageRoutingModule);



/***/ }),

/***/ 2800:
/*!*************************************************!*\
  !*** ./src/app/pages/booking/booking.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageModule": () => (/* binding */ BookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-routing.module */ 9376);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.page */ 3933);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let BookingPageModule = class BookingPageModule {
};
BookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_1__.BookingPage]
    })
], BookingPageModule);



/***/ }),

/***/ 3933:
/*!***********************************************!*\
  !*** ./src/app/pages/booking/booking.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPage": () => (/* binding */ BookingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.page.html?ngResource */ 1819);
/* harmony import */ var _booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.page.scss?ngResource */ 4321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let BookingPage = class BookingPage {
    constructor(route) {
        this.route = route;
        this.B_Card = [
            { img: './../../../assets/icon/Propert Icons/Booking5.png', title: 'Booking Plot', path: 'booking-plot' },
            { img: './../../../assets/icon/Propert Icons/Booking5.png', title: 'See Booking', path: 'see-booking' }
        ];
    }
    ngOnInit() {
    }
    details(item) {
        this.route.navigate([item]);
    }
    Property() {
        this.route.navigate(['property']);
    }
    booking() {
        this.route.navigate(['booking']);
    }
    Home() {
        this.route.navigate(['home']);
    }
};
BookingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-booking',
        template: _booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookingPage);



/***/ }),

/***/ 4321:
/*!************************************************************!*\
  !*** ./src/app/pages/booking/booking.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#f2f4f5 ;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-row ion-col ion-card {\n  width: 85%;\n  text-align: center;\n  --background: #58B852;\n  box-shadow: 2px 2px 6px 2px rgba(40, 40, 177, 0.19);\n  color: white;\n  border-radius: 17px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-row ion-col img {\n  height: 90px;\n  padding: 8px;\n}\n\nion-row ion-col p {\n  margin-top: 2px;\n  font-size: 16px;\n}\n\n.list {\n  width: auto;\n  height: 80px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n\n.page-titles {\n  margin-top: 0.125rem;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQVk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVoQjs7QUFBWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRWhCOztBQUFZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFFaEI7O0FBSUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBRko7O0FBSUE7RUFDSSxvQkFBQTtBQURKOztBQUdBO0VBQ0ksd0JBQUE7QUFBSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBSUo7O0FBRkE7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFLSjs7QUFIQTtFQUNJO0lBQ0ksZ0JBQUE7RUFNTjtBQUNGOztBQUpBO0VBQ0k7SUFDSSxnQkFBQTtFQU1OO0FBQ0YiLCJmaWxlIjoiYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZjJmNGY1IDtcclxufVxyXG5pb24tcm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM1OEI4NTI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAycHggcmdiKDQwIDQwIDE3NyAvIDE5JSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaGVhZGVyXHJcbi5saXN0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wYWdlLXRpdGxlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4udGV4dHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGxvdHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjE4NzVyZW07ICAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnBhZ2V7XHJcbiAgICBjb2xvcjogIzgyODY5MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbn1cclxuLnByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDIzNyAyNDgpO1xyXG4gICAgY29sb3I6ICMzYjRjYjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjgxM3JlbTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNCAyMjEgMjQyKTtcclxufVxyXG4ucmFkaXVze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNGNiODtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxcHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAudG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhICAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAudG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 1819:
/*!************************************************************!*\
  !*** ./src/app/pages/booking/booking.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n   \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \r\n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n     \r\n    <ion-buttons slot=\"end\"> \r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  \r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 10px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col  size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Booking</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\" (click)=\"Home()\"><a class=\"text\">Home</a></li>\r\n              <li class=\"breadcrumb-item \" (click)=\"Property()\"><a class=\"plot\">Property</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"booking()\"><a class=\"page\">Booking</a></li>\r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size-lg=\"1.3\" size-md=\"1.7\" size=\"\" (click)=\"Refresh()\">\r\n          <a  class=\"btn btn-primary top rounded primary light me-3\">Refresh</a>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-lg=\"2.5\"  *ngFor=\"let P of B_Card | filter:filterTerm\">\r\n      <ion-card (click)=\"details(P.path)\">\r\n        <img src=\"{{P.img}}\" alt=\"\">\r\n        <p>{{P.title}}</p>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_booking_booking_module_ts.js.map