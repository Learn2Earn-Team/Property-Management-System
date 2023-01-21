"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_plots_plots_module_ts"],{

/***/ 1188:
/*!*****************************************************!*\
  !*** ./src/app/pages/plots/plots-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlotsPageRoutingModule": () => (/* binding */ PlotsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _plots_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plots.page */ 712);




const routes = [
    {
        path: '',
        component: _plots_page__WEBPACK_IMPORTED_MODULE_0__.PlotsPage
    }
];
let PlotsPageRoutingModule = class PlotsPageRoutingModule {
};
PlotsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlotsPageRoutingModule);



/***/ }),

/***/ 2018:
/*!*********************************************!*\
  !*** ./src/app/pages/plots/plots.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlotsPageModule": () => (/* binding */ PlotsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _plots_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plots-routing.module */ 1188);
/* harmony import */ var _plots_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plots.page */ 712);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let PlotsPageModule = class PlotsPageModule {
};
PlotsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _plots_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlotsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_plots_page__WEBPACK_IMPORTED_MODULE_1__.PlotsPage]
    })
], PlotsPageModule);



/***/ }),

/***/ 712:
/*!*******************************************!*\
  !*** ./src/app/pages/plots/plots.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlotsPage": () => (/* binding */ PlotsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _plots_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plots.page.html?ngResource */ 2821);
/* harmony import */ var _plots_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plots.page.scss?ngResource */ 1203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PlotsPage = class PlotsPage {
    constructor(route) {
        this.route = route;
        this.P_Card = [
            { img: '../../../assets/icon/Propert Icons/Plot4.png', title: 'Add Plot', path: 'add-plot' },
            { img: '../../../assets/icon/Propert Icons/seeplot1.png', title: 'See Plot', path: 'see-plot' },
            { img: './../../../assets/icon/Propert Icons/instalment.png', title: 'Instalment', path: 'instalment' },
            { img: './../../../assets/icon/Propert Icons/transfer_ownership.png', title: 'Transfer Ownership', path: 'transfer-ownership' },
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
    Plot() {
        this.route.navigate(['plots']);
    }
    see_plot() {
        this.route.navigate(['see-plot']);
    }
    Home() {
        this.route.navigate(['home']);
    }
};
PlotsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PlotsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-plots',
        template: _plots_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_plots_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlotsPage);



/***/ }),

/***/ 1203:
/*!********************************************************!*\
  !*** ./src/app/pages/plots/plots.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  justify-content: center;\n}\nion-row ion-col ion-card {\n  width: 85%;\n  text-align: center;\n  box-shadow: 2px 2px 6px 2px rgba(40, 40, 177, 0.19);\n  color: white;\n  border-radius: 17px;\n}\nion-row ion-col img {\n  height: 90px;\n  padding: 8px;\n}\nion-row ion-col p {\n  margin-top: 2px;\n  font-size: 16px;\n}\n.list {\n  width: auto;\n  height: 80px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n.page-titles {\n  margin-top: 0.125rem;\n}\n.d-flex {\n  display: flex !important;\n}\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsb3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7QUFDWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ2hCO0FBQ1k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNoQjtBQUNZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDaEI7QUFJQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUlBO0VBQ0ksb0JBQUE7QUFESjtBQUdBO0VBQ0ksd0JBQUE7QUFBSjtBQUVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUNBO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFHSjtBQURBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFJSjtBQUZBO0VBQ0ksaUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBS0o7QUFIQTtFQUNJO0lBQ0ksZ0JBQUE7RUFNTjtBQUNGO0FBSkE7RUFDSTtJQUNJLGdCQUFBO0VBTU47QUFDRiIsImZpbGUiOiJwbG90cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAycHggcmdiKDQwIDQwIDE3NyAvIDE5JSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gaGVhZGVyXHJcbi5saXN0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogYXV0bzsgXHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBsb3R7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtOyAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wYWdle1xyXG4gICAgY29sb3I6ICM4Mjg2OTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG59XHJcbi5wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAyMzcgMjQ4KTtcclxuICAgIGNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTQgMjIxIDI0Mik7XHJcbn1cclxuLnJhZGl1c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNiNGNiODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjRjYjg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 2821:
/*!********************************************************!*\
  !*** ./src/app/pages/plots/plots.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n   \r\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \r\n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filterTerm\"></ion-input>\r\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"property\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n     \r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 10px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col  size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Add Plot</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\"(click)=\"Home()\" ><a class=\"text\">Home</a></li>\r\n              <li class=\"breadcrumb-item \"(click)=\"Property()\" ><a class=\"plot\">Property</a></li>\r\n              <li class=\"breadcrumb-item\" (click)=\"Plot()\"><a class=\"page\" >Plot</a></li>\r\n              \r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size-lg=\"1.3\" size-md=\"1.7\" size=\"\" (click)=\"Refresh()\">\r\n          <a  class=\"btn btn-primary top rounded primary light me-3\">Refresh</a>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n\r\n  <ion-row> \r\n    <ion-col size=\"6\" size-lg=\"2.5\"  *ngFor=\"let P of P_Card | filter:filterTerm\">\r\n      <ion-card class=\"bd3\" (click)=\"details(P.path)\">\r\n        <img src=\"{{P.img}}\" alt=\"\">\r\n        <p>{{P.title}}</p>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_plots_plots_module_ts.js.map