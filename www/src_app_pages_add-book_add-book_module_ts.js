"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-book_add-book_module_ts"],{

/***/ 1036:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-book/add-book-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookPageRoutingModule": () => (/* binding */ AddBookPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-book.page */ 8837);




const routes = [
    {
        path: '',
        component: _add_book_page__WEBPACK_IMPORTED_MODULE_0__.AddBookPage
    }
];
let AddBookPageRoutingModule = class AddBookPageRoutingModule {
};
AddBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddBookPageRoutingModule);



/***/ }),

/***/ 8463:
/*!***************************************************!*\
  !*** ./src/app/pages/add-book/add-book.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookPageModule": () => (/* binding */ AddBookPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-book-routing.module */ 1036);
/* harmony import */ var _add_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-book.page */ 8837);







let AddBookPageModule = class AddBookPageModule {
};
AddBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBookPageRoutingModule
        ],
        declarations: [_add_book_page__WEBPACK_IMPORTED_MODULE_1__.AddBookPage]
    })
], AddBookPageModule);



/***/ }),

/***/ 8837:
/*!*************************************************!*\
  !*** ./src/app/pages/add-book/add-book.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookPage": () => (/* binding */ AddBookPage)
/* harmony export */ });
/* harmony import */ var F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-book.page.html?ngResource */ 6878);
/* harmony import */ var _add_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-book.page.scss?ngResource */ 5787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let AddBookPage = class AddBookPage {
  constructor(route) {
    this.route = route;
    this.isEnabled = false;
    this.customer_T = [{
      plot: 'Plot No'
    }, {
      location: 'Location'
    }, {
      status: 'Status'
    }, {
      number: 'Phone Number'
    }, {
      t_amount: 'Total Amount'
    }, {
      r_amount: 'Remaning Amount'
    }, {
      t_instalment: 'Toatal Instalments'
    }, {
      r_instalment: 'Remaining Instalments'
    }];
    this.Plot_D = [{
      id: 1,
      customer: 'Haroon',
      plot_no: '5',
      location: 'Kameer Chungi',
      phone_number: '032979292',
      status: 'pending',
      total_amount: '200000',
      remaining_amount: '150000',
      total_instalments: '36',
      remaining_instalments: '30'
    }, {
      id: 2,
      customer: 'Asad',
      plot_no: '10',
      location: 'Muhammad pur Chungi',
      phone_number: '032979292',
      status: 'pending',
      total_amount: '100000',
      remaining_amount: '50000',
      total_instalments: '30',
      remaining_instalments: '25'
    }, {
      id: 3,
      customer: 'Ali',
      plot_no: '4',
      location: 'test',
      phone_number: '032979292',
      status: 'successful',
      total_amount: '300000',
      remaining_amount: '0',
      total_instalments: '36',
      remaining_instalments: '0'
    }, {
      id: 4,
      customer: 'Zagham',
      plot_no: '7',
      location: 'fareed nagar',
      phone_number: '032979292',
      status: 'cancel',
      total_amount: '400000',
      remaining_amount: '300000',
      total_instalments: '15',
      remaining_instalments: '14'
    }];
  }

  ngOnInit() {}

  Add_book() {
    this.route.navigate(['add-book']);
  }

  select_plot($event) {
    var _this = this;

    return (0,F_Fiverr_L2E_Property_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log($event.target.value);
      _this.isEnabled = true;
    })();
  }

};

AddBookPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];

AddBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-add-book',
  template: _add_book_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_book_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddBookPage);


/***/ }),

/***/ 5787:
/*!**************************************************************!*\
  !*** ./src/app/pages/add-book/add-book.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@media (min-width: 1px) and (max-width: 768px) {\n  ion-item {\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n@media (min-width: 769px) {\n  ion-item {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    --border-radius: 10px;\n    padding: 10px;\n  }\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 8px;\n    border-radius: 10px;\n  }\n  .mainlist ion-col {\n    margin-left: 27px;\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\n@media (min-width: 769px) {\n  .mainlist {\n    background: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin: 15px;\n    border-radius: 10px;\n    height: 350px;\n    padding-left: 85px;\n  }\n  .mainlist ion-col {\n    padding: 20px;\n  }\n  .mainlist ion-col p {\n    margin-top: 4px;\n    font-weight: 600;\n    color: #000 !important;\n    --bs-text-opacity: 1;\n    font-family: \"poppins\", sans-serif;\n  }\n}\nion-label {\n  color: #7e7e7e !important;\n  font-size: 0.875em;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n  margin-bottom: 0.5rem !important;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .toolbar {\n    margin-left: -24px;\n  }\n}\n@media (min-width: 769px) {\n  .toolbar {\n    margin-left: -39px;\n  }\n}\n.btn2 {\n  border: 1px solid blue;\n  border-radius: 10px;\n  text-transform: none;\n  color: blue;\n  margin-left: -1px;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .col {\n    margin-left: 15px;\n  }\n}\n@media (min-width: 769px) {\n  .col {\n    margin-left: 13px;\n  }\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .col2 {\n    margin-left: 15px;\n  }\n}\n@media (min-width: 769px) {\n  .col2 {\n    margin-left: 42px;\n  }\n}\n@media (min-width: 769px) {\n  .card2 {\n    padding-left: 90px;\n    padding-right: 50px;\n  }\n}\n.list {\n  width: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 8px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n.page-titles {\n  margin-top: 0.125rem;\n}\n.d-flex {\n  display: flex !important;\n}\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 10px;\n  }\n}\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n.list {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtFQUNOO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsNENBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFDTjtFQUNNO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VBQ1Y7RUFBVTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtFQUVkO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSw0Q0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQUFOO0VBRU07SUFDSSxhQUFBO0VBQVY7RUFDVTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtFQUNkO0FBQ0Y7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUdBO0VBQ0k7SUFDSSxrQkFBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksa0JBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdBO0VBQ0k7SUFDSSxpQkFBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLGlCQUFBO0VBRE47QUFDRjtBQUdBO0VBQ0k7SUFDSSxpQkFBQTtFQUROO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUROO0FBQ0Y7QUFHQTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQURKO0FBR0E7RUFDSSxvQkFBQTtBQUFKO0FBRUE7RUFDSSx3QkFBQTtBQUNKO0FBQ0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUVKO0FBQUE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFHSjtBQURBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQUlKO0FBRkE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUtKO0FBSEE7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFNSjtBQUpBO0VBQ0k7SUFDSSxnQkFBQTtFQU9OO0FBQ0Y7QUFMQTtFQUNJO0lBQ0ksZ0JBQUE7RUFPTjtBQUNGO0FBTEE7RUFDSSxZQUFBO0FBT0oiLCJmaWxlIjoiYWRkLWJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OXB4KXtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5tYWlubGlzdHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA4NXB4O1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWJzLXRleHQtb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgIC5tYWlubGlzdHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46MTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4NXB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjN2U3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC50b29sYmFye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLnRvb2xiYXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuMntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jb2wye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAuY29sMntcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MnB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSB7XHJcbiAgICAuY2FyZDJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjkwcHg7IFxyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NTBweDtcclxuICAgIH1cclxufVxyXG4ubGlzdHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICBtYXJnaW46OHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZS10aXRsZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBsb3R7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtOyAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wYWdle1xyXG4gICAgY29sb3I6ICM4Mjg2OTA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG59XHJcbi5wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAyMzcgMjQ4KTtcclxuICAgIGNvbG9yOiAjM2I0Y2I4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTQgMjIxIDI0Mik7XHJcbn1cclxuLnJhZGl1c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNiNGNiODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjRjYjg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAgKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgLnRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi5saXN0e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6878:
/*!**************************************************************!*\
  !*** ./src/app/pages/add-book/add-book.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n      <ion-title> \r\n        Add Book\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list class=\"list\" style=\"margin-top: 50px;\">\r\n    <div class=\"\">\r\n      <ion-row>\r\n        <ion-col size-lg=\"10\" size-md=\"9\" size=\"12\">\r\n          <div class=\"me-auto  d-lg-block\">\r\n            <h2 class=\"text-white font-w600\">Add Book</h2>\r\n            <!-- <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item active\"><a class=\"text\" href=\"javascript:void(0)\">Property</a></li>\r\n              <li class=\"breadcrumb-item\"><a class=\"plot\"  href=\"javascript:void(0)\">Plot</a></li>\r\n              <li class=\"breadcrumb-item\"><a class=\"plot\" href=\"javascript:void(0)\">Instalment</a></li>\r\n              <li class=\"breadcrumb-item\"><a class=\"page\" href=\"javascript:void(0)\">Add Book</a></li>\r\n            </ol> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n  \r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-select placeholder=\"Select Plot\" (ionChange)=\"select_plot($event)\">\r\n        <ion-select-option *ngFor=\"let plot of Plot_D\" value=\"{{plot.plot_no}}\">{{plot.plot_no}} </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list> \r\n\r\n<div >\r\n  <ion-list class=\"mainlist\" *ngFor=\"let detail of Plot_D\">\r\n    <ion-row>\r\n      <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\" size=\"4\">\r\n        <ion-label>Plot No</ion-label>\r\n        <p>{{detail.plot_no}} </p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2.5\" class=\"col\" size-md=\"2\" size-sm=\"5\">\r\n        <ion-label>Location</ion-label>\r\n        <p>{{detail.location}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2.5\" class=\"col\" size-md=\"2.5\" size=\"6\">\r\n        <ion-label>Phone Number</ion-label>\r\n        <p>{{detail.phone_number}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\" size=\"5\">\r\n        <ion-label>Status</ion-label>\r\n        <p>{{detail.status}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"1\" class=\"col\" size-md=\"1\">\r\n        <div class=\"dropdown ms-4  mt-auto mb-auto\">\r\n          <div class=\"btn-link\" data-bs-toggle=\"dropdown\" >\r\n            <svg width=\"24px\" height=\"24px\" class=\"toolbar\" viewBox=\"0 0 24 24\" version=\"1.1\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><rect x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect><circle fill=\"#000000\" cx=\"5\" cy=\"12\" r=\"2\"></circle><circle fill=\"#000000\" cx=\"12\" cy=\"12\" r=\"2\"></circle><circle fill=\"#000000\" cx=\"19\" cy=\"12\" r=\"2\"></circle></g></svg>\r\n          </div>\r\n          <div class=\"dropdown-menu dropdown-menu-end\" >\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Edit</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Delete</a>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size-lg=\"2\" class=\"col\" size-md=\"2\">\r\n        <ion-label>Total Amount</ion-label>\r\n        <p>{{detail.total_amount}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2.2\" class=\"col\" size-md=\"2\">\r\n        <ion-label>Reamining Amount</ion-label>\r\n        <p>{{detail.remaining_amount}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2.6\" class=\"col2\" size-md=\"2.5\">\r\n        <ion-label>Total Instalments</ion-label>\r\n        <p>{{detail.total_instalments}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"3\" class=\"\" size-md=\"2\">\r\n        <ion-label>Reamining Instalments</ion-label>\r\n        <p>{{detail.remaining_instalments}}</p>\r\n      </ion-col>\r\n      <ion-col size-lg=\"2\"  class=\"col\" size-md=\"2\" size=\"5\">\r\n        <ion-label>Book Now</ion-label>\r\n        <ion-button fill=\"clear\" class=\"btn2\" (click)=\"Add_book()\">\r\n          Add Book\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n   \r\n  </ion-list>\r\n\r\n\r\n  <ion-card class=\"card2\">\r\n   <ion-row>\r\n    <ion-col size-lg=\"9\" size=\"12\">\r\n      <ion-input type=\"number\" placeholder=\"Enter Amount\"></ion-input>\r\n    </ion-col>\r\n    <ion-col size-lg=\"2.5\" style=\"text-align: end;\">\r\n      <ion-button fill=\"clear\">\r\n          Pay Now\r\n      </ion-button>\r\n    </ion-col>\r\n   </ion-row>\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-book_add-book_module_ts.js.map