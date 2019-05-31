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

module.exports = "<!-- Application header -->\n<app-header></app-header>\n\n<!-- Awards banner -->\n<div class=\"awards\">\n  <a [routerLink]=\"['awards']\">\n    <img class=\"awards__img\" src=\"../../assets/images/awards.png\" alt=\"awards\">\n  </a>\n</div>\n<!-- Application container  -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n\n    <!-- Particle background  -->\n    <app-particle></app-particle>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n  padding-top: 100px; }\n\n@media only screen and (max-width: 678px) {\n  :host .container {\n    width: 85%; } }\n\n.awards {\n  position: relative; }\n\n.awards__img {\n    position: absolute;\n    top: 80px;\n    right: 0px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdwQjtFQVJGO0lBVU0sVUFBVSxFQUFBLEVBQ1g7O0FBSUw7RUFDRSxrQkFBa0IsRUFBQTs7QUFFbEI7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzhweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gIH1cblxufVxuLmF3YXJkcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX19pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDgwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<div class=\"about-container\">\n  <div class=\"about-container__title\">\n      <h2>{{'about.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <br>\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"30px\">\n          <!-- 1st card for the photo -->\n          <div fxFlex=\"30\" fxFlex.lt-md=\"100\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n                <div class=\"image-cropper\">\n                  <img src=\"assets/images/ramanuj.jpeg\" alt=\"avatar\" class=\"profile-pic\">\n                </div>\n            </div>\n          </div>\n          <!-- 2nd card for the about me content -->\n          <div fxFlex=\"70\" fxFlex.lt-md=\"100\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <span>{{'about.description'| translate}}</span>\n            </div>\n            <p>{{'about.timeline.header'| translate}}</p>\n            <!-- 2nd card - row -->\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >arrow_right_alt</mat-icon>\n              <span>{{'about.timeline.one'| translate}}</span>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >arrow_right_alt</mat-icon>\n              <span>{{'about.timeline.two'| translate}}</span>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >arrow_right_alt</mat-icon>\n              <span>{{'about.timeline.three'| translate}}\n              </span>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >arrow_right_alt</mat-icon>\n              <span>{{'about.timeline.four'| translate}}</span>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >arrow_right_alt</mat-icon>\n              <span>{{'about.timeline.five'| translate}}</span>\n            </div>\n            <p>{{'about.passion.header'| translate}}</p>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <mat-icon >mood</mat-icon>\n              <span>{{'about.passion.description'| translate}}</span>\n            </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  font-size: 18px; }\n\n.image-cropper {\n  width: 400px;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%; }\n\n@media only screen and (max-width: 678px) {\n  .image-cropper {\n    width: 300px;\n    height: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250YWluZXIge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaW1hZ2UtY3JvcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vLyBNb2JpbGUgdmlld1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzhweCkge1xuICAuaW1hZ2UtY3JvcHBlciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<div class=\"home-container\">\n  <div class=\"home-container__title\">\n      <h1>{{'home.title'| translate}}</h1>\n      <span>{{'home.description'| translate}}</span>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n  </div>\n  <app-tech></app-tech>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --animation-delay: 0;\n  --duration: 200ms;\n  --iterations: 1; }\n\n.home-container {\n  display: flex;\n  align-items: center; }\n\n.home-container__title, .home-container__title::after {\n    -webkit-animation-delay: var(--animation-delay, 0.5s);\n            animation-delay: var(--animation-delay, 0.5s);\n    -webkit-animation-iteration-count: var(--iterations, 1);\n            animation-iteration-count: var(--iterations, 1);\n    -webkit-animation-duration: var(--duration, 800ms);\n            animation-duration: var(--duration, 800ms);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n\n.home-container__title {\n    position: relative;\n    margin-right: 15%;\n    -webkit-animation-name: clip-text;\n            animation-name: clip-text;\n    color: #000;\n    cursor: default; }\n\n.home-container__title::after {\n      content: \"\";\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #85cfd5;\n      -webkit-transform: scaleX(0);\n              transform: scaleX(0);\n      -webkit-transform-origin: 0 50%;\n              transform-origin: 0 50%;\n      pointer-events: none;\n      -webkit-animation-name: text-revealer;\n              animation-name: text-revealer; }\n\n.home-container__title h1 {\n      font-size: 95px; }\n\n.home-container__title span {\n      font-size: 20px; }\n\n@-webkit-keyframes clip-text {\n  from {\n    -webkit-clip-path: inset(0 100% 0 0);\n            clip-path: inset(0 100% 0 0); }\n  to {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); } }\n\n@keyframes clip-text {\n  from {\n    -webkit-clip-path: inset(0 100% 0 0);\n            clip-path: inset(0 100% 0 0); }\n  to {\n    -webkit-clip-path: inset(0 0 0 0);\n            clip-path: inset(0 0 0 0); } }\n\n@-webkit-keyframes text-revealer {\n  0%, 50% {\n    -webkit-transform-origin: 0 50%;\n            transform-origin: 0 50%; }\n  60%, 100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n  100% {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); } }\n\n@keyframes text-revealer {\n  0%, 50% {\n    -webkit-transform-origin: 0 50%;\n            transform-origin: 0 50%; }\n  60%, 100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n  100% {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); } }\n\n@media only screen and (max-width: 678px) {\n  .home-container {\n    display: block; }\n  .home-container__title h1 {\n    font-size: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3Byb2ZpbGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQWtCO0VBQ2xCLGlCQUFXO0VBQ1gsZUFBYSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVuQjtJQUVFLHFEQUE2QztZQUE3Qyw2Q0FBNkM7SUFDN0MsdURBQStDO1lBQS9DLCtDQUErQztJQUMvQyxrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNkRBQXlEO1lBQXpELHFEQUF5RCxFQUFBOztBQUczRDtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQUxoQjtNQVFHLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCx5QkFBeUI7TUFDekIsNEJBQW9CO2NBQXBCLG9CQUFvQjtNQUNwQiwrQkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixxQ0FBNkI7Y0FBN0IsNkJBQTZCLEVBQUE7O0FBbkJoQztNQXVCRyxlQUFlLEVBQUE7O0FBdkJsQjtNQTJCRyxlQUFlLEVBQUE7O0FBS3JCO0VBQ0M7SUFDQyxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFN0I7SUFDQyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFMM0I7RUFDQztJQUNDLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU3QjtJQUNDLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUszQjtFQUVDO0lBQ0MsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3hCO0lBQ0Msa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBSTNCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBR3JCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7O0FBaEJ0QjtFQUVDO0lBQ0MsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBR3hCO0lBQ0Msa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBSTNCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBR3JCO0lBQ0MsNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBLEVBQUE7O0FBS3RCO0VBQ0U7SUFDRSxjQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcblx0LS1hbmltYXRpb24tZGVsYXk6IDA7XG5cdC0tZHVyYXRpb246IDIwMG1zO1xuXHQtLWl0ZXJhdGlvbnM6IDE7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9fdGl0bGUsXG4gICZfX3RpdGxlOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1hbmltYXRpb24tZGVsYXksIDAuNXMpO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWl0ZXJhdGlvbnMsIDEpO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZHVyYXRpb24sIDgwMG1zKTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNsaXAtdGV4dDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1Y2ZkNTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiB0ZXh0LXJldmVhbGVyO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjbGlwLXRleHQge1xuXHRmcm9tIHtcblx0XHRjbGlwLXBhdGg6IGluc2V0KDAgMTAwJSAwIDApO1xuXHR9XG5cdHRvIHtcblx0XHRjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xuXHR9XG59XG5cblxuQGtleWZyYW1lcyB0ZXh0LXJldmVhbGVyIHtcblxuXHQwJSwgNTAlIHtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcblx0fVxuXG5cdDYwJSwgMTAwJSB7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG5cdH1cblxuXG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZVgoMSk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcblx0fVxufVxuXG4vLyBNb2JpbGUgdmlld1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzhweCkge1xuICAuaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob21lLWNvbnRhaW5lcl9fdGl0bGUgaDF7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4iXX0= */"

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

module.exports = "<div class=\"skills-charts\">\n    <tag-canvas class=\"skill-tag\" [tags]=\"tags\" [options]=\"options\" (tagClick)=\"tagClicked($event)\"></tag-canvas>\n</div>\n"

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

module.exports = "<div class=\"awards-container\">\n  <div class=\"awards-container__title\">\n      <h2>{{'awards.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <br>\n      <!-- 1st Award -->\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n                <span class=\"awards-container__icon\">\n                    <mat-icon >looks_one</mat-icon>\n                    {{'awards.one.name'| translate}}\n                </span>\n            </div>\n          </div>\n          <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n              <span class=\"awards-container__details\">{{'awards.one.description'| translate}}</span>\n            </div>\n          </div>\n          <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\n                <div class=\"image-cropper\">\n                  <a href=\"assets/pdf/cert/StarOfMonthCertificate.pdf\" target=\"_blank\">\n                    <img src=\"assets/images/awards/starofmonth.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\n                  </a>\n                </div>\n            </div>\n          </div>\n      </div>\n\n      <!-- 2nd Award -->\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\n        <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n            <span class=\"awards-container__icon\">\n                <mat-icon >looks_two</mat-icon>\n                {{'awards.two.name'| translate}}\n            </span>\n          </div>\n        </div>\n        <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n            <span class=\"awards-container__details\">{{'awards.two.description'| translate}}</span>\n          </div>\n        </div>\n        <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\n              <div class=\"image-cropper\">\n                <a href=\"assets/pdf/cert/BestTeamCertificate.pdf\" target=\"_blank\">\n                  <img src=\"assets/images/awards/bestteam.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\n                </a>\n              </div>\n          </div>\n        </div>\n    </div>\n\n    <!-- 3rd Award -->\n    <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n          <span class=\"awards-container__icon\">\n              <mat-icon >looks_3</mat-icon>\n              {{'awards.three.name'| translate}}\n          </span>\n        </div>\n      </div>\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n            <span class=\"awards-container__details\">{{'awards.three.description'| translate}}</span>\n          </div>\n        </div>\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\n            <div class=\"image-cropper\">\n              <a href=\"assets/pdf/cert/SpecialInitialtiveCertificate.pdf\" target=\"_blank\">\n                <img src=\"assets/images/awards/specialinitiative.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\n              </a>\n            </div>\n        </div>\n      </div>\n  </div>\n\n    <!-- 4th Award -->\n    <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n          <span class=\"awards-container__icon\">\n              <mat-icon >looks_4</mat-icon>\n              {{'awards.four.name'| translate}}\n          </span>\n        </div>\n      </div>\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n          <span class=\"awards-container__details\">{{'awards.four.description'| translate}}</span>\n        </div>\n      </div>\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\n            <div class=\"image-cropper\">\n              <a href=\"assets/pdf/cert/DigitalLiteracyCertificate.pdf\" target=\"_blank\">\n                <img src=\"assets/images/awards/digitalliteracy.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\n              </a>\n            </div>\n        </div>\n      </div>\n    </div>\n\n     <!-- 5th Award -->\n     <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n          <span class=\"awards-container__icon\">\n              <mat-icon >looks_5</mat-icon>\n              {{'awards.five.name'| translate}}\n          </span>\n        </div>\n      </div>\n      <div fxFlex=\"60\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n          <span class=\"awards-container__details\">{{'awards.five.description'| translate}}</span>\n        </div>\n      </div>\n      <div fxFlex=\"20\" fxFlex.lt-md=\"100\">\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"awards-container__row\">\n            <div class=\"image-cropper\">\n              <a href=\"assets/pdf/cert/OnTheSpotCertificate.pdf\" target=\"_blank\">\n                <img src=\"assets/images/awards/onthespot.png\" alt=\"Awards pics\" class=\"awards-container__row__pic\">\n              </a>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Notification -->\n  <div class=\"awards-notification\">\n    {{'awards.nitification'| translate}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/awards/awards.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/awards/awards.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".awards-container__row {\n  float: right;\n  cursor: pointer; }\n  .awards-container__row__pic {\n    height: 70px;\n    width: 200px;\n    border: 2px solid #000; }\n  .awards-container__icon {\n  font-size: 20px;\n  font-family: monospace;\n  font-style: italic;\n  text-transform: uppercase; }\n  .awards-container__details {\n  font-family: cursive; }\n  .awards-notification {\n  float: right;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3NoYXJlZC9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTtFQUVmO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQUcxQjtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBO0VBRTNCO0VBQ0Usb0JBQW9CLEVBQUE7RUFJeEI7RUFDRSxZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXdhcmRzLWNvbnRhaW5lciB7XG4gICZfX3JvdyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICZfX3BpYyB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgIH1cbiAgfVxuICAmX19pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAmX19kZXRhaWxzIHtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgfVxufVxuXG4uYXdhcmRzLW5vdGlmaWNhdGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

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

module.exports = "<!-- Contact Me -->\n<div class=\"contact-container\">\n  <div class=\"contact-container__title\">\n      <h2>{{'contact.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <br>\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\">\n        <!-- contact me card -->\n        <div fxFlex=\"100\" fxFlex.lt-md=\"100\">\n          <mat-card>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"100px\">\n                  <p class=\"text-white animation-element fadeInUp\">{{'contact.description'| translate}}\n                      <a href=\"mailto:pd.ramanuj@gmail.com\">{{'contact.link'| translate}}</a>\n                      <span class=\"sr-only\">pd.ramanuj@gmail.com</span>\n                  </p>\n              </div>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-raised-button href=\"https://www.linkedin.com/in/ramanujprasad/\" target=\"_blank\" class=\"social-footer\">\n                <i class=\"fa fa-linkedin-square fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n              <a mat-raised-button href=\"https://github.com/ramanujprasad\" target=\"_blank\" class=\"social-footer\">\n                <i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n              <a mat-raised-button href=\"mailto:pd.ramanuj@gmail.com\" class=\"social-footer\">\n                <i class=\"fa fa-envelope-o fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n              <a mat-raised-button href=\"assets/images/resume.pdf\" target=\"_blank\" class=\"social-footer\">\n                <i class=\"fa fa-file-text-o fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n              <a mat-raised-button href=\"tel:+31-647351314\" target=\"_blank\" class=\"social-footer\">\n                <i class=\"fa fa fa-mobile fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n              <a mat-raised-button href=\"https://www.google.com/maps/place/Franciscus+van+Assisi%C3%ABlaan+35,+1185+CE+Amstelveen/@52.2938839,4.8594108,17z/data=!3m1!4b1!4m5!3m4!1s0x47c60a84adebe243:0xc817bdb3218b5960!8m2!3d52.2938839!4d4.8615995\" target=\"_blank\" class=\"social-footer\">\n                <i class=\"fa fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n              </a>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/contact/contact.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/contact/contact.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-card {\n  background: none;\n  border: 2px solid #000; }\n\n:host .mat-raised-button {\n  background: #c8e4df;\n  color: rgba(191, 27, 27, 0.87); }\n\n:host .mat-raised-button:hover {\n    background: #000;\n    opacity: 0.87; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3NoYXJlZC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBSDFCO0VBTUksbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQVBsQztJQVVNLGdCQUFnQjtJQUNoQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgfVxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNjOGU0ZGY7XG4gICAgY29sb3I6IHJnYmEoMTkxLCAyNywgMjcsIDAuODcpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgb3BhY2l0eTogMC44NztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<div class=\"experience-container\">\n  <div class=\"experience-container__title\">\n      <h2>{{'experience.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <br>\n      <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutGap=\"30px\">\n        <!-- 1st card -->\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\n          <mat-card>\n            <mat-card-header>\n              <div mat-card-avatar class=\"header-image header-image__movie\"></div>\n              <mat-card-title>{{'experience.one.title'| translate}}</mat-card-title>\n              <mat-card-subtitle>{{'experience.one.subtitle'| translate}}</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/movie.jpg\" height=\"400px\" alt=\"Movie image\">\n              </div>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/MovieApp/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/MovieApp\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n        <!-- 2nd card -->\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\n          <mat-card>\n            <mat-card-header>\n              <div mat-card-avatar class=\"header-image header-image__profile\"></div>\n              <mat-card-title>{{'experience.two.title'| translate}}</mat-card-title>\n              <mat-card-subtitle>{{'experience.two.subtitle'| translate}}</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/profile.jpg\" height=\"400px\" alt=\"Profile image\">\n              </div>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n\n         <!-- 3rd card -->\n         <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\n          <mat-card>\n            <mat-card-header>\n              <div mat-card-avatar class=\"header-image header-image__login\"></div>\n              <mat-card-title>{{'experience.three.title'| translate}}</mat-card-title>\n              <mat-card-subtitle>{{'experience.three.subtitle'| translate}}</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/login.jpg\" height=\"400px\" alt=\"Admin app image\">\n              </div>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/Angular4AdminApp/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/Angular4AdminApp\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n\n           <!-- 4th card -->\n        <div fxFlex=\"50\" fxFlex.lt-md=\"100\">\n          <mat-card>\n            <mat-card-header>\n              <div mat-card-avatar class=\"header-image__cockroach\"></div>\n              <mat-card-title>{{'experience.four.title'| translate}}</mat-card-title>\n              <mat-card-subtitle>{{'experience.four.subtitle'| translate}}</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"50px\">\n                <img fxFlexAlign=\"center\" mat-card-image src=\"assets/images/experience/cockroach.jpg\" height=\"400px\" alt=\"Cockroach image\">\n              </div>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-raised-button color=\"primary\" href=\"https://ramanujprasad.github.io/CockroachSmasherGame/Cockroach/\" target=\"_blank\">{{'experience.btn.website'| translate}}</a>\n              <a mat-raised-button href=\"https://github.com/ramanujprasad/CockroachSmasherGame\" target=\"_blank\">{{'experience.btn.code'| translate}}</a>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/experience/experience.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/experience/experience.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-card-content {\n  margin-top: 5px; }\n\n.header-image {\n  background-size: cover; }\n\n.header-image__movie {\n    background-image: url('movie.jpg'); }\n\n.header-image__profile {\n    background-image: url('profile.jpg'); }\n\n.header-image__login {\n    background-image: url('login.jpg'); }\n\n.header-image__cockroach {\n    background-image: url('cockroach.jpg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3NoYXJlZC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXRCO0lBQ0Usa0NBQW9FLEVBQUE7O0FBR3RFO0lBQ0Usb0NBQXNFLEVBQUE7O0FBR3hFO0lBQ0Usa0NBQW9FLEVBQUE7O0FBRXRFO0lBQ0Usc0NBQXdFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG4uaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAmX19tb3ZpZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGVyaWVuY2UvbW92aWUuanBnJyk7XG4gIH1cblxuICAmX19wcm9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZXhwZXJpZW5jZS9wcm9maWxlLmpwZycpO1xuICB9XG5cbiAgJl9fbG9naW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBlcmllbmNlL2xvZ2luLmpwZycpO1xuICB9XG4gICZfX2NvY2tyb2FjaCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGVyaWVuY2UvY29ja3JvYWNoLmpwZycpO1xuICB9XG59XG4iXX0= */"

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

module.exports = "<mat-toolbar color=\"primary\" ngClass.lt-sm=\"small-device\">\n  <mat-icon >dashboard</mat-icon>\n  <span class=\"title\">{{'header.title'| translate}}</span>\n\n  <!-- This fills the remaining space of the current row -->\n   <span class=\"fill-remaining-space\"></span>\n\n  <!-- Download option -->\n  <button mat-button (click)=\"loadPage('download')\">{{'header.download'| translate}}</button>\n\n  <!-- Show more menu items -->\n  <button mat-button [matMenuTriggerFor]=\"moreMenu\">{{'header.more'| translate}}<mat-icon>more_vert</mat-icon></button>\n  <mat-menu #moreMenu=\"matMenu\">\n    <button mat-menu-item (click)=\"loadPage('home')\">{{'header.home'| translate}}</button>\n    <button mat-menu-item (click)=\"loadPage('about')\">{{'header.about'| translate}}</button>\n    <button mat-menu-item (click)=\"loadPage('skills')\">{{'header.skills'| translate}}</button>\n    <button mat-menu-item (click)=\"loadPage('experience')\">{{'header.experience'| translate}}</button>\n    <button mat-menu-item (click)=\"loadPage('contact')\">{{'header.contact'| translate}}</button>\n  </mat-menu>\n\n  <!-- Used to show the language option -->\n  <button mat-button [matMenuTriggerFor]=\"langMenu\">{{selectedLanguage}}<mat-icon >expand_more</mat-icon></button>\n  <mat-menu #langMenu=\"matMenu\">\n    <button mat-menu-item *ngFor=\"let item of languages\" (click)=\"changeLanguage(item)\">{{item.name}}</button>\n  </mat-menu>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  :host .fill-remaining-space {\n    flex: 1 1 auto; }\n  :host .mat-toolbar.mat-primary {\n    background: #000; }\n  :host .small-device {\n  justify-content: space-between; }\n  :host .small-device .title {\n    display: none; }\n  button:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1hbnVqcHJhc2FkL0Rlc2t0b3AvUHJvamVjdC9Qcm9maWxlL1BvcnRmb2xpby9zcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUhBRWlDO0VBQ2pDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVSxFQUFBO0VBVFo7SUFZSSxjQUFjLEVBQUE7RUFabEI7SUFlSSxnQkFBZ0IsRUFBQTtFQUtwQjtFQUtFLDhCQUE4QixFQUFBO0VBTGhDO0lBRUksYUFBYSxFQUFBO0VBTWpCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxuICAgIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXG4gICAgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgfVxufVxuXG4vL0NTUyBmb3Igc21hbGwgZGV2aWNlc1xuOmhvc3QgLnNtYWxsLWRldmljZSB7XG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */"

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

module.exports = "<div class=\"not-container\">\n  <div class=\"not-container__title\">\n      <h2>{{'notfound.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <br>\n  </div>\n</div>\n"

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

module.exports = "<!-- To show the particle moving in background images -->\n<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n"

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

module.exports = "<div class=\"skills-container\">\n  <div class=\"skills-container__title\">\n      <h2>{{'skills.title'| translate}}</h2>\n      <div class=\"separator\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n      </div>\n      <div class=\"skills-charts\">\n          <tag-canvas class=\"skill-tag\" [tags]=\"tags\" [options]=\"options\" (tagClick)=\"tagClicked($event)\"></tag-canvas>\n      </div>\n  </div>\n</div>\n"

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

module.exports = __webpack_require__(/*! /Users/ramanujprasad/Desktop/Project/Profile/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map