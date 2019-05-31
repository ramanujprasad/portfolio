(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/home/home.component */ "./src/app/profile/home/home.component.ts");
/* harmony import */ var _profile_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/contact/contact.component */ "./src/app/shared/contact/contact.component.ts");
/* harmony import */ var _shared_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/skills/skills.component */ "./src/app/shared/skills/skills.component.ts");
/* harmony import */ var _shared_awards_awards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/awards/awards.component */ "./src/app/shared/awards/awards.component.ts");
/* harmony import */ var _shared_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/experience/experience.component */ "./src/app/shared/experience/experience.component.ts");










// Routing in the application
var routes = [
    { path: 'home', component: _profile_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _profile_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'awards', component: _shared_awards_awards_component__WEBPACK_IMPORTED_MODULE_8__["AwardsComponent"] },
    { path: 'skills', component: _shared_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"] },
    { path: 'experience', component: _shared_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"] },
    { path: 'contact', component: _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Application header -->\r\n<app-header></app-header>\r\n\r\n<!-- Awards banner -->\r\n<div class=\"awards\">\r\n  <a [routerLink]=\"['awards']\">\r\n    <img class=\"awards__img\" src=\"../../assets/images/awards.png\" alt=\"awards\">\r\n  </a>\r\n</div>\r\n<!-- Application container  -->\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n\r\n    <!-- Particle background  -->\r\n    <app-particle></app-particle>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n  padding-top: 100px; }\n\n@media only screen and (max-width: 678px) {\n  :host .container {\n    width: 85%; } }\n\n.awards {\n  position: relative; }\n\n.awards__img {\n    position: absolute;\n    top: 80px;\n    right: 0px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdwQjtFQVJGO0lBVU0sVUFBVSxFQUFBLEVBQ1g7O0FBSUw7RUFDRSxrQkFBa0IsRUFBQTs7QUFFbEI7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuLmF3YXJkcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router) {
        this.translate = translate;
        this.router = router;
    }
    /**
     * used to set the default language and navigate to search page
     * @returns void
     */
    AppComponent.prototype.ngOnInit = function () {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.router.navigate(['']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");












// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_11__["ProfileModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/profile/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\r\n  <div class=\"about-container__title\">\r\n      <h2>{{'about.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <br>\r\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"30px\">\r\n          <!-- 1st card for the photo -->\r\n          <div fxFlex=\"30\" fxFlex.lt-md=\"100\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n                <div class=\"image-cropper\">\r\n                  <img src=\"assets/images/ramanuj.jpeg\" alt=\"avatar\" class=\"profile-pic\">\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <!-- 2nd card for the about me content -->\r\n          <div fxFlex=\"70\" fxFlex.lt-md=\"100\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <span>{{'about.description'| translate}}</span>\r\n            </div>\r\n            <p>{{'about.timeline.header'| translate}}</p>\r\n            <!-- 2nd card - row -->\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >arrow_right_alt</mat-icon>\r\n              <span>{{'about.timeline.one'| translate}}</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >arrow_right_alt</mat-icon>\r\n              <span>{{'about.timeline.two'| translate}}</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >arrow_right_alt</mat-icon>\r\n              <span>{{'about.timeline.three'| translate}}\r\n              </span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >arrow_right_alt</mat-icon>\r\n              <span>{{'about.timeline.four'| translate}}</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >arrow_right_alt</mat-icon>\r\n              <span>{{'about.timeline.five'| translate}}</span>\r\n            </div>\r\n            <p>{{'about.passion.header'| translate}}</p>\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <mat-icon >mood</mat-icon>\r\n              <span>{{'about.passion.description'| translate}}</span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  font-size: 18px; }\n\n.image-cropper {\n  width: 400px;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%; }\n\n@media only screen and (max-width: 678px) {\n  .image-cropper {\n    width: 300px;\n    height: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hYm91dC9EOlxcUHJvamVjdHNcXFBvcnRmb2xpby9zcmNcXGFwcFxccHJvZmlsZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmltYWdlLWNyb3BwZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4vLyBNb2JpbGUgdmlld1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3OHB4KSB7XHJcbiAgLmltYWdlLWNyb3BwZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/profile/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/profile/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/profile/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <div class=\"home-container__title\">\r\n      <h1>{{'home.title'| translate}}</h1>\r\n      <span>{{'home.description'| translate}}</span>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n  </div>\r\n  <app-tech></app-tech>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --animation-delay: 0;\n  --duration: 200ms;\n  --iterations: 1; }\n\n.home-container {\n  display: flex;\n  align-items: center; }\n\n.home-container__title, .home-container__title::after {\n    -webkit-animation-delay: var(--animation-delay, 0.5s);\n            animation-delay: var(--animation-delay, 0.5s);\n    -webkit-animation-iteration-count: var(--iterations, 1);\n            animation-iteration-count: var(--iterations, 1);\n    -webkit-animation-duration: var(--duration, 800ms);\n            animation-duration: var(--duration, 800ms);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n\n.home-container__title {\n    position: relative;\n    margin-right: 15%;\n    -webkit-animation-name: clip-text;\n            animation-name: clip-text;\n    color: #000;\n    cursor: default; }\n\n.home-container__title::after {\n      content: \"\";\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #85cfd5;\n      -webkit-transform: scaleX(0);\n              transform: scaleX(0);\n      -webkit-transform-origin: 0 50%;\n              transform-origin: 0 50%;\n      pointer-events: none;\n      -webkit-animation-name: text-revealer;\n              animation-name: text-revealer; }\n\n.home-container__title h1 {\n      font-size: 95px; }\n\n.home-container__title span {\n      font-size: 20px; }\n\n@-webkit-keyframes clip-text {\n  from {\n    -webkit-clip-path: inset(0 100% 0 0);\n            clip-path: inset(0 100% 0 0); }\n  to {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); } }\n\n@keyframes clip-text {\n  from {\n    -webkit-clip-path: inset(0 100% 0 0);\n            clip-path: inset(0 100% 0 0); }\n  to {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); } }\n\n@-webkit-keyframes text-revealer {\n  0%, 50% {\n    -webkit-transform-origin: 0 50%;\n            transform-origin: 0 50%; }\n  60%, 100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n  100% {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); } }\n\n@keyframes text-revealer {\n  0%, 50% {\n    -webkit-transform-origin: 0 50%;\n            transform-origin: 0 50%; }\n  60%, 100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n  100% {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); } }\n\n@media only screen and (max-width: 678px) {\n  .home-container {\n    display: block; }\n  .home-container__title h1 {\n    font-size: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9ob21lL0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9maWxlXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQWtCO0VBQ2xCLGlCQUFXO0VBQ1gsZUFBYSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVuQjtJQUVFLHFEQUE2QztZQUE3Qyw2Q0FBNkM7SUFDN0MsdURBQStDO1lBQS9DLCtDQUErQztJQUMvQyxrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNkRBQXlEO1lBQXpELHFEQUF5RCxFQUFBOztBQUczRDtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQUxoQjtNQVFHLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCx5QkFBeUI7TUFDekIsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQiwrQkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixxQ0FBNkI7Y0FBN0IsNkJBQTZCLEVBQUE7O0FBbkJoQztNQXVCRyxlQUFlLEVBQUE7O0FBdkJsQjtNQTJCRyxlQUFlLEVBQUE7O0FBS3JCO0VBQ0M7SUFDQyxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFN0I7SUFDQyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMM0I7RUFDQztJQUNDLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU3QjtJQUNDLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUszQjtFQUVDO0lBQ0MsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3hCO0lBQ0Msa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBSTNCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBR3JCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7O0FBaEJ0QjtFQUVDO0lBQ0MsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3hCO0lBQ0Msa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBSTNCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBR3JCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7O0FBS3RCO0VBQ0U7SUFDRSxjQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuXHQtLWFuaW1hdGlvbi1kZWxheTogMDtcclxuXHQtLWR1cmF0aW9uOiAyMDBtcztcclxuXHQtLWl0ZXJhdGlvbnM6IDE7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX190aXRsZSxcclxuICAmX190aXRsZTo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1hbmltYXRpb24tZGVsYXksIDAuNXMpO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0taXRlcmF0aW9ucywgMSk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWR1cmF0aW9uLCA4MDBtcyk7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY2xpcC10ZXh0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVjZmQ1O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogdGV4dC1yZXZlYWxlcjtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOTVweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjbGlwLXRleHQge1xyXG5cdGZyb20ge1xyXG5cdFx0Y2xpcC1wYXRoOiBpbnNldCgwIDEwMCUgMCAwKTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0Y2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHRleHQtcmV2ZWFsZXIge1xyXG5cclxuXHQwJSwgNTAlIHtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG5cdH1cclxuXHJcblx0NjAlLCAxMDAlIHtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xyXG5cdH1cclxuXHJcblxyXG5cdDYwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuXHR9XHJcblxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBNb2JpbGUgdmlld1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3OHB4KSB7XHJcbiAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaG9tZS1jb250YWluZXJfX3RpdGxlIGgxe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/profile/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/profile/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/profile/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_tagcanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-tagcanvas */ "./node_modules/ng-tagcanvas/fesm5/ng-tagcanvas.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/profile/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tech_tech_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tech/tech.component */ "./src/app/profile/tech/tech.component.ts");











var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _tech_tech_component__WEBPACK_IMPORTED_MODULE_10__["TechComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ng_tagcanvas__WEBPACK_IMPORTED_MODULE_6__["TagCanvasModule"]
            ],
            exports: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/tech/tech.component.html":
/*!**************************************************!*\
  !*** ./src/app/profile/tech/tech.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-charts\">\r\n    <tag-canvas class=\"skill-tag\" [tags]=\"tags\" [options]=\"options\" (tagClick)=\"tagClicked($event)\"></tag-canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/tech/tech.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/tech/tech.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGVjaC90ZWNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/tech/tech.component.ts":
/*!************************************************!*\
  !*** ./src/app/profile/tech/tech.component.ts ***!
  \************************************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechComponent = /** @class */ (function () {
    function TechComponent() {
        this.tags = [
            { weight: 24, text: 'SCSS' },
            { weight: 18, text: 'AngularJS' },
            { weight: 20, text: 'JavaScript' },
            { weight: 20, text: 'TypeScript' },
            { weight: 18, text: 'Node' },
            { weight: 24, text: 'Angular 2x' },
            { weight: 24, text: 'HTML5' },
            { weight: 24, text: 'CSS3' },
            { weight: 24, text: 'Bootstrap' },
            { weight: 16, text: 'GraphQL' },
            { weight: 18, text: 'Express' },
            { weight: 24, text: 'Git' },
            { weight: 18, text: 'Protractor' },
            { weight: 16, text: 'Jasmine' },
            { weight: 20, text: 'REST' },
            { weight: 22, text: 'Bitbucket' },
            { weight: 18, text: 'Karma' },
            { weight: 24, text: 'Jira' },
            { weight: 20, text: 'Confluence' },
            { weight: 18, text: 'JSP' },
            { weight: 22, text: 'SVN' },
            { weight: 20, text: 'jQuery' },
            { weight: 18, text: 'Jenkins' },
            { weight: 20, text: 'oAuth 2.0' }
        ];
        this.options = {
            dragControl: true,
            clickToFront: 500,
            initial: [.1, 0],
            weight: true,
            textFont: 'Niconne, sans-serif',
            maxSpeed: 0.02,
            fadeIn: 800,
            textColour: '#900',
            textHeight: 25,
            outlineMethod: 'colour',
            outlineColour: '#039'
        };
    }
    TechComponent.prototype.ngOnInit = function () {
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width = 400;
        canvas.height = 400;
    };
    TechComponent.prototype.tagClicked = function (tag) {
        console.log(tag);
    };
    TechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech',
            template: __webpack_require__(/*! ./tech.component.html */ "./src/app/profile/tech/tech.component.html"),
            styles: [__webpack_require__(/*! ./tech.component.scss */ "./src/app/profile/tech/tech.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechComponent);
    return TechComponent;
}());



/***/ }),

/***/ "./src/app/shared/awards/awards.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/awards/awards.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"awards-container\">\r\n  <div class=\"awards-container__title\">\r\n      <h2>{{'awards.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <br>\r\n      <!-- 1st Award -->\r\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\r\n          <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n                <span class=\"awards-container__icon\">\r\n                    <mat-icon >looks_one</mat-icon>\r\n                    {{'awards.one.name'| translate}}\r\n                </span>\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n              <span class=\"awards-container__details\">{{'awards.one.description'| translate}}</span>\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\r\n                <div class=\"image-cropper\">\r\n                  <a href=\"assets/pdf/cert/StarOfMonthCertificate.pdf\" target=\"_blank\">\r\n                    <img src=\"assets/images/awards/starofmonth.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\r\n                  </a>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n      <!-- 2nd Award -->\r\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\r\n        <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n            <span class=\"awards-container__icon\">\r\n                <mat-icon >looks_two</mat-icon>\r\n                {{'awards.two.name'| translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n            <span class=\"awards-container__details\">{{'awards.two.description'| translate}}</span>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\r\n              <div class=\"image-cropper\">\r\n                <a href=\"assets/pdf/cert/BestTeamCertificate.pdf\" target=\"_blank\">\r\n                  <img src=\"assets/images/awards/bestteam.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\r\n                </a>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 3rd Award -->\r\n    <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n          <span class=\"awards-container__icon\">\r\n              <mat-icon >looks_3</mat-icon>\r\n              {{'awards.three.name'| translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\r\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n            <span class=\"awards-container__details\">{{'awards.three.description'| translate}}</span>\r\n          </div>\r\n        </div>\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\r\n            <div class=\"image-cropper\">\r\n              <a href=\"assets/pdf/cert/SpecialInitialtiveCertificate.pdf\" target=\"_blank\">\r\n                <img src=\"assets/images/awards/specialinitiative.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\r\n              </a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n    <!-- 4th Award -->\r\n    <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n          <span class=\"awards-container__icon\">\r\n              <mat-icon >looks_4</mat-icon>\r\n              {{'awards.four.name'| translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n          <span class=\"awards-container__details\">{{'awards.four.description'| translate}}</span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\r\n            <div class=\"image-cropper\">\r\n              <a href=\"assets/pdf/cert/DigitalLiteracyCertificate.pdf\" target=\"_blank\">\r\n                <img src=\"assets/images/awards/digitalliteracy.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\r\n              </a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n     <!-- 5th Award -->\r\n     <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n          <span class=\"awards-container__icon\">\r\n              <mat-icon >looks_5</mat-icon>\r\n              {{'awards.five.name'| translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n          <span class=\"awards-container__details\">{{'awards.five.description'| translate}}</span>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\r\n            <div class=\"image-cropper\">\r\n              <a href=\"assets/pdf/cert/OnTheSpotCertificate.pdf\" target=\"_blank\">\r\n                <img src=\"assets/images/awards/onthespot.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\r\n              </a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Notification -->\r\n  <div class=\"awards-notification\">\r\n    {{'awards.nitification'| translate}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/awards/awards.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/awards/awards.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".awards-container__row {\n  float: right;\n  cursor: pointer; }\n  .awards-container__row__pic {\n    height: 70px;\n    width: 200px;\n    border: 2px solid #000; }\n  .awards-container__icon {\n  font-size: 20px;\n  font-family: monospace;\n  font-style: italic;\n  text-transform: uppercase; }\n  .awards-container__details {\n  font-family: cursive; }\n  .awards-notification {\n  float: right;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2F3YXJkcy9EOlxcUHJvamVjdHNcXFBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxhd2FyZHNcXGF3YXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFFZjtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCLEVBQUE7RUFHMUI7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtFQUUzQjtFQUNFLG9CQUFvQixFQUFBO0VBSXhCO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF3YXJkcy1jb250YWluZXIge1xyXG4gICZfX3JvdyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJl9fcGljIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2ljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICZfX2RldGFpbHMge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXdhcmRzLW5vdGlmaWNhdGlvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/awards/awards.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/awards/awards.component.ts ***!
  \***************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    AwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./src/app/shared/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.scss */ "./src/app/shared/awards/awards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/shared/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Me -->\r\n<div class=\"contact-container\">\r\n  <div class=\"contact-container__title\">\r\n      <h2>{{'contact.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <br>\r\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\">\r\n        <!-- contact me card -->\r\n        <div fxFlex=\"100\" fxFlex.lt-md=\"100\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"100px\">\r\n                  <p class=\"text-white animation-element fadeInUp\">{{'contact.description'| translate}}\r\n                      <a href=\"mailto:pd.ramanuj@gmail.com\">{{'contact.link'| translate}}</a>\r\n                      <span class=\"sr-only\">pd.ramanuj@gmail.com</span>\r\n                  </p>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a mat-raised-button href=\"https://www.linkedin.com/in/ramanujprasad/\" target=\"_blank\" class=\"social-footer\">\r\n                <i class=\"fa fa-linkedin-square fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a mat-raised-button href=\"https://github.com/ramanujprasad\" target=\"_blank\" class=\"social-footer\">\r\n                <i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a mat-raised-button href=\"mailto:pd.ramanuj@gmail.com\" class=\"social-footer\">\r\n                <i class=\"fa fa-envelope-o fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a mat-raised-button href=\"assets/images/resume.pdf\" target=\"_blank\" class=\"social-footer\">\r\n                <i class=\"fa fa-file-text-o fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a mat-raised-button href=\"tel:+31-647351314\" target=\"_blank\" class=\"social-footer\">\r\n                <i class=\"fa fa fa-mobile fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a mat-raised-button href=\"https://www.google.com/maps/place/Franciscus+van+Assisi%C3%ABlaan+35,+1185+CE+Amstelveen/@52.2938839,4.8594108,17z/data=!3m1!4b1!4m5!3m4!1s0x47c60a84adebe243:0xc817bdb3218b5960!8m2!3d52.2938839!4d4.8615995\" target=\"_blank\" class=\"social-footer\">\r\n                <i class=\"fa fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/contact/contact.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/contact/contact.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-card {\n  background: none;\n  border: 2px solid #000; }\n\n:host .mat-raised-button {\n  background: #c8e4df;\n  color: rgba(191, 27, 27, 0.87); }\n\n:host .mat-raised-button:hover {\n    background: #000;\n    opacity: 0.87; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRhY3QvRDpcXFByb2plY3RzXFxQb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFIMUI7RUFNSSxtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBUGxDO0lBVU0sZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gIH1cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogI2M4ZTRkZjtcclxuICAgIGNvbG9yOiByZ2JhKDE5MSwgMjcsIDI3LCAwLjg3KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgb3BhY2l0eTogMC44NztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/shared/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/shared/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/shared/experience/experience.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/experience/experience.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experience-container\">\r\n  <div class=\"experience-container__title\">\r\n      <h2>{{'experience.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <br>\r\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"30px\">\r\n        <!-- 1st card -->\r\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"header-image header-image__movie\"></div>\r\n              <mat-card-title>{{'experience.one.title'| translate}}</mat-card-title>\r\n              <mat-card-subtitle>{{'experience.one.subtitle'| translate}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\r\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/movie.jpg\" height=\"400px\" alt=\"Movie image\">\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/MovieApp/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\r\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/MovieApp\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n        <!-- 2nd card -->\r\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"header-image header-image__profile\"></div>\r\n              <mat-card-title>{{'experience.two.title'| translate}}</mat-card-title>\r\n              <mat-card-subtitle>{{'experience.two.subtitle'| translate}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\r\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/profile.jpg\" height=\"400px\" alt=\"Profile image\">\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\r\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n\r\n         <!-- 3rd card -->\r\n         <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"header-image header-image__login\"></div>\r\n              <mat-card-title>{{'experience.three.title'| translate}}</mat-card-title>\r\n              <mat-card-subtitle>{{'experience.three.subtitle'| translate}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\r\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/login.jpg\" height=\"400px\" alt=\"Admin app image\">\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/Angular4AdminApp/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\r\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/Angular4AdminApp\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n\r\n           <!-- 4th card -->\r\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"header-image__cockroach\"></div>\r\n              <mat-card-title>{{'experience.four.title'| translate}}</mat-card-title>\r\n              <mat-card-subtitle>{{'experience.four.subtitle'| translate}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\r\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/cockroach.jpg\" height=\"400px\" alt=\"Cockroach image\">\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/CockroachSmasherGame/Cockroach/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\r\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/CockroachSmasherGame\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/experience/experience.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/experience/experience.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-card-content {\n  margin-top: 5px; }\n\n.header-image {\n  background-size: cover; }\n\n.header-image__movie {\n    background-image: url('movie.jpg'); }\n\n.header-image__profile {\n    background-image: url('profile.jpg'); }\n\n.header-image__login {\n    background-image: url('login.jpg'); }\n\n.header-image__cockroach {\n    background-image: url('cockroach.jpg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2V4cGVyaWVuY2UvRDpcXFByb2plY3RzXFxQb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxzQkFBc0IsRUFBQTs7QUFFdEI7SUFDRSxrQ0FBb0UsRUFBQTs7QUFHdEU7SUFDRSxvQ0FBc0UsRUFBQTs7QUFHeEU7SUFDRSxrQ0FBb0UsRUFBQTs7QUFFdEU7SUFDRSxzQ0FBd0UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxufVxyXG4uaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAmX19tb3ZpZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZXhwZXJpZW5jZS9tb3ZpZS5qcGcnKTtcclxuICB9XHJcblxyXG4gICZfX3Byb2ZpbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGVyaWVuY2UvcHJvZmlsZS5qcGcnKTtcclxuICB9XHJcblxyXG4gICZfX2xvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBlcmllbmNlL2xvZ2luLmpwZycpO1xyXG4gIH1cclxuICAmX19jb2Nrcm9hY2gge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGVyaWVuY2UvY29ja3JvYWNoLmpwZycpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/experience/experience.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/experience/experience.component.ts ***!
  \***********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/shared/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/shared/experience/experience.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" ngClass.lt-sm=\"small-device\">\r\n  <mat-icon >dashboard</mat-icon>\r\n  <span class=\"title\">{{'header.title'| translate}}</span>\r\n\r\n  <!-- This fills the remaining space of the current row -->\r\n   <span class=\"fill-remaining-space\"></span>\r\n\r\n  <!-- Download option -->\r\n  <button mat-button (click)=\"loadPage('download')\">{{'header.download'| translate}}</button>\r\n\r\n  <!-- Show more menu items -->\r\n  <button mat-button [matMenuTriggerFor]=\"moreMenu\">{{'header.more'| translate}}<mat-icon>more_vert</mat-icon></button>\r\n  <mat-menu #moreMenu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"loadPage('home')\">{{'header.home'| translate}}</button>\r\n    <button mat-menu-item (click)=\"loadPage('about')\">{{'header.about'| translate}}</button>\r\n    <button mat-menu-item (click)=\"loadPage('skills')\">{{'header.skills'| translate}}</button>\r\n    <button mat-menu-item (click)=\"loadPage('experience')\">{{'header.experience'| translate}}</button>\r\n    <button mat-menu-item (click)=\"loadPage('contact')\">{{'header.contact'| translate}}</button>\r\n  </mat-menu>\r\n\r\n  <!-- Used to show the language option -->\r\n  <button mat-button [matMenuTriggerFor]=\"langMenu\">{{selectedLanguage}}<mat-icon >expand_more</mat-icon></button>\r\n  <mat-menu #langMenu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let item of languages\" (click)=\"changeLanguage(item)\">{{item.name}}</button>\r\n  </mat-menu>\r\n\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  :host .fill-remaining-space {\n    flex: 1 1 auto; }\n  :host .mat-toolbar.mat-primary {\n    background: #000; }\n  :host .small-device {\n  justify-content: space-between; }\n  :host .small-device .title {\n    display: none; }\n  button:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9EOlxcUHJvamVjdHNcXFBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlIQUVpQztFQUNqQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVUsRUFBQTtFQVRaO0lBWUksY0FBYyxFQUFBO0VBWmxCO0lBZUksZ0JBQWdCLEVBQUE7RUFLcEI7RUFLRSw4QkFBOEIsRUFBQTtFQUxoQztJQUVJLGFBQWEsRUFBQTtFQU1qQjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxyXG4gICAgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcclxuICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIC5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4vL0NTUyBmb3Igc21hbGwgZGV2aWNlc1xyXG46aG9zdCAuc21hbGwtZGV2aWNlIHtcclxuICAudGl0bGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translateService, router) {
        var _this = this;
        this.translateService = translateService;
        this.router = router;
        this.selectedLanguage = 'English';
        this.tit = 'as';
        this.languages = [];
        /**
         * language change handler
         * @param  {ILanguage} item
         */
        this.changeLanguage = function (item) {
            _this.selectedLanguage = item.name;
            _this.translateService.use(item.code);
        };
        /**
         * Navigate the pages
         * @param  {string} pageName
         */
        this.loadPage = function (pageName) {
            if (pageName === 'download') {
                _this.goToDownload();
            }
            else {
                _this.router.navigate([pageName]);
            }
        };
    }
    /**
     * Set the language option as 'English' and 'Dutch'
     */
    HeaderComponent.prototype.ngOnInit = function () {
        this.languages.push({ name: 'English', code: 'en' });
        this.languages.push({ name: 'Dutch', code: 'nl' });
    };
    HeaderComponent.prototype.goToDownload = function () {
        window.open('../../assets/images/resume.pdf', '_blank');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-container\">\r\n  <div class=\"not-container__title\">\r\n      <h2>{{'notfound.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/shared/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/particle/particle.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/particle/particle.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- To show the particle moving in background images -->\r\n<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\r\n"

/***/ }),

/***/ "./src/app/shared/particle/particle.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/particle/particle.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYXJ0aWNsZS9wYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/particle/particle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/particle/particle.component.ts ***!
  \*******************************************************/
/*! exports provided: ParticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleComponent", function() { return ParticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParticleComponent = /** @class */ (function () {
    function ParticleComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    ParticleComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 280,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#ff0000'
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                }
            }
        };
    };
    ParticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-particle',
            template: __webpack_require__(/*! ./particle.component.html */ "./src/app/shared/particle/particle.component.html"),
            styles: [__webpack_require__(/*! ./particle.component.scss */ "./src/app/shared/particle/particle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParticleComponent);
    return ParticleComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var ng_tagcanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-tagcanvas */ "./node_modules/ng-tagcanvas/fesm5/ng-tagcanvas.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _particle_particle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./particle/particle.component */ "./src/app/shared/particle/particle.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/shared/contact/contact.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/shared/skills/skills.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/shared/awards/awards.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/shared/experience/experience.component.ts");
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _particle_particle_component__WEBPACK_IMPORTED_MODULE_11__["ParticleComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_14__["AwardsComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_8__["ParticlesModule"],
                ng_tagcanvas__WEBPACK_IMPORTED_MODULE_9__["TagCanvasModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _particle_particle_component__WEBPACK_IMPORTED_MODULE_11__["ParticleComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/skills/skills.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/skills/skills.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-container\">\r\n  <div class=\"skills-container__title\">\r\n      <h2>{{'skills.title'| translate}}</h2>\r\n      <div class=\"separator\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n      </div>\r\n      <div class=\"skills-charts\">\r\n          <tag-canvas class=\"skill-tag\" [tags]=\"tags\" [options]=\"options\" (tagClick)=\"tagClicked($event)\"></tag-canvas>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/skills/skills.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/skills/skills.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/skills/skills.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/skills/skills.component.ts ***!
  \***************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.tags = [
            { weight: 35, text: 'SCSS' },
            { weight: 35, text: 'AngularJS' },
            { weight: 35, text: 'JavaScript' },
            { weight: 35, text: 'TypeScript' },
            { weight: 35, text: 'Node' },
            { weight: 35, text: 'Karma' },
            { weight: 35, text: 'jQuery' },
            { weight: 35, text: 'CSS3' },
            { weight: 35, text: 'GraphQL' },
            { weight: 35, text: 'Express' },
            { weight: 35, text: 'Git' },
            { weight: 35, text: 'Protractor' },
            { weight: 35, text: 'Jasmine' },
            { weight: 35, text: 'REST' },
            { weight: 35, text: 'Bitbucket' },
            { weight: 35, text: 'Angular 2x' },
            { weight: 35, text: 'Jira' },
            { weight: 35, text: 'Confluence' },
            { weight: 35, text: 'JSP' },
            { weight: 35, text: 'SVN' },
            { weight: 35, text: 'jQuery' },
            { weight: 35, text: 'Jenkins' },
            { weight: 35, text: 'oAuth 2.0' },
            { weight: 35, text: 'HTML5' },
            { weight: 35, text: 'Optimizely' },
            { weight: 35, text: 'NgRX' },
            { weight: 35, text: 'Bootstrap' },
            { weight: 35, text: 'Angular Material' },
            { weight: 35, text: 'Flex' }
        ];
        this.options = {
            dragControl: true,
            clickToFront: 500,
            initial: [.1, 0],
            weight: true,
            textFont: 'Impact,"Arial Black",sans-serif',
            maxSpeed: 0.02,
            fadeIn: 800,
            textColour: null,
            textHeight: 25
        };
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width = 500;
        canvas.height = 500;
    };
    SkillsComponent.prototype.tagClicked = function (tag) {
        console.log(tag);
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/shared/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/shared/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map