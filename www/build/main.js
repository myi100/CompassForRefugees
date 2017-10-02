webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_compass_main_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_compass_welcome_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_compass_slider_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main_compass_menu_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_compass_login_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_safeHtml_pipe__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_resource_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_parent_visible_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_common_dynamic_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_common_compass_dynamic_viewer_component__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_safeHtml_pipe__["a" /* Safe */],
            __WEBPACK_IMPORTED_MODULE_16__components_common_dynamic_component__["a" /* Dynamic */],
            __WEBPACK_IMPORTED_MODULE_5__components_main_compass_main_component__["a" /* CompassMain */],
            __WEBPACK_IMPORTED_MODULE_6__components_main_compass_welcome_component__["a" /* CompassWelcome */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_compass_slider_component__["a" /* CompassSlider */],
            __WEBPACK_IMPORTED_MODULE_8__components_main_compass_menu_component__["a" /* CompassMenu */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_compass_login_component__["a" /* CompassLogin */],
            __WEBPACK_IMPORTED_MODULE_17__components_common_compass_dynamic_viewer_component__["a" /* CompassDynamicViewer */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__components_common_dynamic_component__["a" /* Dynamic */],
            __WEBPACK_IMPORTED_MODULE_5__components_main_compass_main_component__["a" /* CompassMain */],
            __WEBPACK_IMPORTED_MODULE_6__components_main_compass_welcome_component__["a" /* CompassWelcome */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_compass_slider_component__["a" /* CompassSlider */],
            __WEBPACK_IMPORTED_MODULE_8__components_main_compass_menu_component__["a" /* CompassMenu */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_compass_login_component__["a" /* CompassLogin */],
            __WEBPACK_IMPORTED_MODULE_17__components_common_compass_dynamic_viewer_component__["a" /* CompassDynamicViewer */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__services_resource_service__["a" /* ResourceServices */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_15__services_parent_visible_service__["a" /* ParentVisibleService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, loginService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loginService = loginService;
        this.loggedin = false;
        loginService.loggedInStatus$.subscribe(function (loggedIn) {
            _this.loggedin = loggedIn;
        });
    }
    MyApp.prototype.logout = function () {
        this.menu.swipeEnabled = false;
        this.loginService.logout();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Menu */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Menu */])
], MyApp.prototype, "menu", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n        <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n        <ion-list>\n        <ion-item class="item-icon-left assertive" id="menu-list-item58" data-componentid="list-item58">\n            <ion-icon name="call" item-start></ion-icon>Useful Phone Numbers\n        </ion-item>\n        <div class="spacer" data-componentid="spacer100" style="width: 268px; height: 30px;"></div>\n        <ion-list id="menu-list12" data-componentid="list12">\n            <ion-item id="menu-list-item59" data-componentid="list-item59">911\n            <span class="item-note">Emergency (police, fire)</span>\n            </ion-item>\n            <ion-item id="menu-list-item60" data-componentid="list-item60">311\n            <span class="item-note">City of Montréal</span>\n            </ion-item>\n            <ion-item id="menu-list-item61" data-componentid="list-item61">514-864-9191\n            <span class="item-note">Immigration</span>\n            </ion-item>\n            <ion-item id="menu-list-item62" data-componentid="list-item62">811\n            <span class="item-note">Health Information</span>\n            </ion-item>\n            <ion-item id="menu-list-item63" data-componentid="list-item63">1-800-463-5069\n            <span class="item-note">Poison</span>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" data-componentid="spacer101" style="width: 268px; height: 30px;"></div>\n        <button id="menu-button16" (click)="logout()" menuClose ion-button full>Logout</button>\n        <ion-list id="menu-list15" data-componentid="list15">\n            <ion-item class="item-icon-left" id="menu-list-item65" data-componentid="list-item65">\n            <i class="icon ion-help-buoy"></i>Contact:\n            <span class="item-note">support@edel.io</span>\n            </ion-item>\n        </ion-list>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-content #content>\n  <compass-main></compass-main>\n</ion-content>'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page() {
    }
    return Page;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_compass_welcome_component__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompassLogin = (function () {
    function CompassLogin(loginService, navctr, navparams) {
        this.loginService = loginService;
        this.navctr = navctr;
        this.navparams = navparams;
    }
    CompassLogin.prototype.goToNextPage = function () {
        this.slides.slideNext();
    };
    CompassLogin.prototype.goToPrevPage = function () {
        this.slides.slidePrev();
    };
    CompassLogin.prototype.login = function () {
        this.loginService.login();
    };
    CompassLogin.prototype.backToWelcome = function () {
        this.navctr.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_compass_welcome_component__["a" /* CompassWelcome */]);
    };
    return CompassLogin;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], CompassLogin.prototype, "slides", void 0);
CompassLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-login',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\login\compass-login.html"*/'<ion-slides style="width:100%;height:100%;">\n\n    <ion-slide style="background-color:#F6F6F6;">\n\n        <div class="spacer" style="height: 100px;"></div>\n\n        <h3 id="login-heading13" style="color:#272727;text-align:center;" class="addPadding">What is your phone number?</h3>\n\n        <div class="spacer" style="height: 15px;"></div>\n\n        <div id="login-markdown19" ng-repeat="err in error" style="text-align:center;" class="show-list-numbers-and-dots">\n\n        <p style="color:#F33232;">\n\n            <strong></strong>\n\n        </p>\n\n        </div>\n\n        <div class="spacer" style="height: 15px;"></div>\n\n        <form id="login-form22" class="list">\n\n        <label class="item item-input" id="login-input12">\n\n            <input type="tel" placeholder="Phone #" ng-model="data.phone">\n\n        </label>\n\n        </form>\n\n        <div class="spacer" style="height: 30px;"></div>\n\n        <button (click)="goToNextPage()" style="font-weight:500;font-size:14px;" ion-button full>Next: Passcode</button>\n\n        <button id="login-button63" (click)="backToWelcome()" ion-button clear>&lt; Back</button>\n\n        <div class="spacer" style="height: 30px;"></div>\n\n    </ion-slide>\n\n    <ion-slide style="background-color:#F6F6F6;">\n\n        <div class="spacer" style="height: 100px;"></div>\n\n        <h3 id="login-heading37" style="color:#272727;text-align:center;" class="addPadding">Enter Passcode</h3>\n\n        <div id="login-markdown18" ng-repeat="err in error" style="text-align:center;" class="show-list-numbers-and-dots">\n\n        <p style="color:#F33232;">\n\n            <strong></strong>\n\n        </p>\n\n        </div>\n\n        <div class="spacer" style="height: 30px;"></div>\n\n        <form id="login-form23" class="list">\n\n        <label class="item item-input" id="login-input18">\n\n            <input type="password" placeholder="Passcode" ng-model="data.passcode">\n\n        </label>\n\n        </form>\n\n        <div class="spacer" style="height: 28px;"></div>\n\n        <button id="login-button62" (click)="login()"  style="font-weight:600;color:#345167;" ion-button full>Login</button>\n\n        <div class="spacer" style="height: 30px;"></div>\n\n        <button id="login-button63" (click)="goToPrevPage()" ion-button clear>&lt; Back</button>\n\n    </ion-slide>\n\n </ion-slides>\n\n\n\n'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\login\compass-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CompassLogin);

//# sourceMappingURL=compass-login.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassMain; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compass_welcome_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compass_menu_component__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompassMain = (function () {
    function CompassMain(loginService) {
        this.loginService = loginService;
        this.loggedin = false;
    }
    CompassMain.prototype.bindLoginService = function () {
        var _this = this;
        this.loginService.loggedInStatus$.subscribe(function (loggedIn) {
            if (_this.loggedin !== loggedIn) {
                _this.loggedin = loggedIn;
                //if not logged in set root to welcome screen
                if (!_this.loggedin) {
                    _this.navObj.setRoot(__WEBPACK_IMPORTED_MODULE_3__compass_welcome_component__["a" /* CompassWelcome */]);
                }
                else {
                    _this.navObj.setRoot(__WEBPACK_IMPORTED_MODULE_4__compass_menu_component__["a" /* CompassMenu */]);
                }
            }
        });
    };
    CompassMain.prototype.goToPage = function (page) {
        this.navObj.setRoot(page);
    };
    CompassMain.prototype.ngOnInit = function () {
        this.bindLoginService();
        this.goToPage(__WEBPACK_IMPORTED_MODULE_3__compass_welcome_component__["a" /* CompassWelcome */]);
    };
    return CompassMain;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], CompassMain.prototype, "navObj", void 0);
CompassMain = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-main',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\main\compass-main.html"*/'\n\n<ion-nav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\main\compass-main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
], CompassMain);

//# sourceMappingURL=compass-main.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassWelcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_compass_login_component__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompassWelcome = (function () {
    function CompassWelcome(nav) {
        this.nav = nav;
    }
    CompassWelcome.prototype.goToNextPage = function (page) {
        this.slides.slideNext();
    };
    CompassWelcome.prototype.goToNextPrev = function (page) {
        this.slides.slidePrev();
    };
    CompassWelcome.prototype.goToLogin = function (page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_compass_login_component__["a" /* CompassLogin */]);
    };
    return CompassWelcome;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], CompassWelcome.prototype, "slides", void 0);
CompassWelcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-welcome',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\main\compass-welcome.html"*/'<ion-slides style="background-color:#ffffff;">\n\n    <ion-slide>\n\n            <div class="spacer" style="height: 100px;"></div>\n\n            <div>\n\n              <img src="assets/img/tj7VRuvnTBGgu3jZIogm_compass-logo.png" style="display: block; width: 40%; height: auto; margin-left: auto; margin-right: auto;">\n\n            </div>\n\n            <div class="spacer" style="height: 30px;"></div>\n\n            <h4 id="selectLanguage-heading5" style="color:#272727;text-align:center;">Welcome / Beinvenue / أهلا وسهلا</h4>\n\n            <div class="spacer" style="height: 30px;"></div>\n\n            <ion-list id="selectLanguage-list4" class="manual-list-fullwidth">\n\n              <ion-item class="item-icon-right" id="selectLanguage-list-item15" (click)="goToNextPage()">Continue in English\n\n                <i class="icon ion-android-arrow-forward"></i>\n\n              </ion-item>\n\n              <ion-item id="selectLanguage-list-item16">Continuer en français\n\n                <span class="item-note">(arrive bientôt)</span>\n\n              </ion-item>\n\n              <ion-item id="selectLanguage-list-item17">تابع بالعربية\n\n                <span class="item-note">(قريبا)</span>\n\n              </ion-item>\n\n            </ion-list>\n\n            <div class="spacer" style="width: 300px; height: 43px;"></div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n            <div style="background-color:#5897CB; height:100%;"><div class="spacer" style="width: 320px; height: 63px;"></div>\n\n            <h2 id="welcome-heading8" style="color:#FFFFFF;font-weight:600;text-align:center;">Welcome!</h2>\n\n            <div class="spacer" style="height: 30px;"></div>\n\n            <button id="welcome-button65" ng-click="showInfo(&quot;http://www.freepik.com/free-vector/hand-holding-a-mobile_815656.htm&quot;)" style="color:#FFFFFF;" class="button button-positive button-small button-clear icon-right ion-ios-information-outline info"></button>\n\n            <div>\n\n              <img src="assets/img/EY4qXPtmQ0S4ZOTuafgb_99.jpg" style="display: block; width: 70%; height: auto; margin-left: auto; margin-right: auto;">\n\n            </div>\n\n            <div class="spacer" style="height: 40px;"></div>\n\n            <div id="welcome-markdown4" style="text-align:center;" class="show-list-numbers-and-dots addPadding">\n\n              <p style="color:#FFFFFF;font-size:17px;">\n\n                <strong>Compass</strong> is a simple tool to help you figure out the asylum seeking process.</p>\n\n            </div>\n\n            <div style="color:#FFFFFF;" (click)="goToNextPage()" >Next >></div><div style="color:#FFFFFF;" (click)="goToPrevPage()">Change Language</div></div>    \n\n    </ion-slide>\n\n    <ion-slide>\n\n            <div style="background-color:#51BCB1; height:100%;">\n\n                    <div class="spacer" style="width: 320px; height: 20px;"></div>\n\n                            <div (click)="goToPrevPage()" style="color:#FFFFFF;">Back</div>\n\n                            <h2 id="welcome-heading10" style="color:#FFFFFF;font-weight:600;text-align:center;">Curated.</h2>\n\n                            <div class="spacer" style="height: 30px;"></div>\n\n                            <button id="welcome-button64" ng-click="showInfo(&quot;http://www.freepik.com/free-vector/social-network-communication_1063712.htm&quot;)" style="color:#FFFFFF;" class="button button-positive button-small button-clear icon-right ion-ios-information-outline info"></button>\n\n                            <div>\n\n                              <img src="assets/img/oS6myUAESqOeFv2xVfBG_56.jpg" style="display: block; width: 70%; height: auto; margin-left: auto; margin-right: auto;">\n\n                            </div>\n\n                            <div class="spacer" style="height: 50px;"></div>\n\n                            <div id="welcome-markdown3" style="text-align:center;" class="show-list-numbers-and-dots addPadding">\n\n                              <p style="color:#FFFFFF;font-size:17px;">We collect information about essentials, legal, housing, education, and health.</p>\n\n                            </div>\n\n                            \n\n                    \n\n                    <div style="color:#ffffff;" (click)="goToNextPage()">Next >></div>\n\n                    </div>        \n\n    </ion-slide>\n\n    <ion-slide>\n\n            <div class="spacer" style="width: 320px; height: 20px;"></div>\n\n            <div (click)="goToPrevPage()" style="color:#0572C1;">Back</div>\n\n            <h2 id="welcome-heading11" style="color:#345167;font-weight:600;text-align:center;">Smart.</h2>\n\n            <button id="welcome-button61" ng-click="showInfo(&quot;http://www.freepik.com/free-photos-vectors/travel&quot;)" class="button button-positive button-small button-clear icon-right ion-ios-information-outline info"></button>\n\n            <div>\n\n              <img src="assets/img/wmuxgKpRQ72jkinFunLB_364.jpg" style="display: block; width: 80%; height: auto; margin-left: auto; margin-right: auto;">\n\n            </div>\n\n            <div id="welcome-markdown5" style="text-align:center;" class="show-list-numbers-and-dots addPadding">\n\n              <p style="color:#345167;font-size:17px;">We create customized guides so that you\n\n                <strong>spend less time waiting!</strong>\n\n              </p>\n\n            </div>\n\n            <div class="spacer" style="height: 15px;"></div>\n\n            \n\n    \n\n    <div style="font-weight:600;color:#0572C1;">Register account to continue</div>\n\n            \n\n    \n\n    <div (click)="goToLogin()" style="color:#0572C1;">Already have an account?</div>\n\n            \n\n    </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\main\compass-welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]])
], CompassWelcome);

//# sourceMappingURL=compass-welcome.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parent_visible_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_compass_login_component__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompassSlider = (function () {
    function CompassSlider(appService, parentVisibileService) {
        this.parentVisibileService = parentVisibileService;
        this.pages = [];
        this.navControlSet = false;
        this._appService = appService;
        this.dynamicProps = {
            goToNextPage: this.goToNextPage.bind(this),
            goToPrevPage: this.goToPrevPage.bind(this),
            goToPage: this.goToPage.bind(this)
        };
        this.components = [
            { title: 'CompassLogin', component: __WEBPACK_IMPORTED_MODULE_5__login_compass_login_component__["a" /* CompassLogin */] }
        ];
    }
    CompassSlider.prototype.getJson = function () {
        var _this = this;
        this._appService.getJSON("file").subscribe(function (data) {
            _this.populateJson(data);
            _this.populatePages();
        });
    };
    CompassSlider.prototype.populateJson = function (data) {
        var self = this;
        this.json = data.find(function (obj) {
            return obj.groupname === self.filesGroup;
        });
    };
    CompassSlider.prototype.populatePages = function () {
        for (var i = 0; i < this.json.pages.length; i++) {
            var newPage = new __WEBPACK_IMPORTED_MODULE_4__models_page__["a" /* Page */]();
            newPage.name = this.json.pages[i].name;
            newPage.template = this.json.pages[i].template;
            this.pages.push(newPage);
        }
    };
    CompassSlider.prototype.goToFirstPage = function () {
        //go back to first page
        this.slides.slideTo(0);
    };
    CompassSlider.prototype.goToNextPage = function () {
        this.slides.slideNext();
    };
    CompassSlider.prototype.goToPrevPage = function () {
        this.slides.slidePrev();
    };
    CompassSlider.prototype.goToPage = function (page) {
        this.navControlSet = true;
        this.parentVisibileService.setVisibility(false);
        this.navControl.setRoot(this.components.find(function (elem) {
            if (elem.title === page) {
                return true;
            }
        }).component, {
            "slider": this
        });
    };
    CompassSlider.prototype.showParent = function (show) {
        this.parentVisibileService.setVisibility(show);
    };
    CompassSlider.prototype.ngOnInit = function () {
        if (this.filesGroup) {
            this.getJson();
        }
    };
    return CompassSlider;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], CompassSlider.prototype, "navControl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CompassSlider.prototype, "filesGroup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], CompassSlider.prototype, "slides", void 0);
CompassSlider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-slider',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\main\compass-slider.html"*/'        <ion-slides>\n\n            <ion-slide *ngFor="let p of pages">\n\n                <dynamic [properties]="dynamicProps" [page]="p" ></dynamic>\n\n            </ion-slide>\n\n        </ion-slides>\n\n\n\n          \n\n    \n\n    '/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\main\compass-slider.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceServices */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_parent_visible_service__["a" /* ParentVisibleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_parent_visible_service__["a" /* ParentVisibleService */]) === "function" && _a || Object])
], CompassSlider);

var _a;
//# sourceMappingURL=compass-slider.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Safe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Safe = (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    return Safe;
}());
Safe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]])
], Safe);

//# sourceMappingURL=safeHtml.pipe.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dynamic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_page__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dynamic = (function () {
    function Dynamic(compiler) {
        this.compiler = compiler;
    }
    Dynamic.prototype.ngOnInit = function () {
        var self = this;
        if (this.page) {
            var htmlTemp = this.page.template;
            this.addComponent(htmlTemp, this.properties);
        }
    };
    Dynamic.prototype.addComponent = function (template, properties) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = (function () {
            function TemplateComponent() {
            }
            TemplateComponent.prototype.ngOnInit = function () {
                if (properties.OnInit) {
                    properties.OnInit();
                }
            };
            return TemplateComponent;
        }());
        __decorate([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
            __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
        ], TemplateComponent.prototype, "slider", void 0);
        TemplateComponent = __decorate([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
                selector: "compass-dynamic",
                template: template
            })
        ], TemplateComponent);
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            return TemplateModule;
        }());
        TemplateModule = __decorate([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({ declarations: [TemplateComponent], imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(TemplateComponent)] })
        ], TemplateModule);
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = this.container.createComponent(factory);
        Object.assign(component.instance, properties);
        // component.changeDetectorRef.detectChanges();
    };
    return Dynamic;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_page__["a" /* Page */])
], Dynamic.prototype, "page", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Dynamic.prototype, "properties", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */])
], Dynamic.prototype, "container", void 0);
Dynamic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dynamic',
        template: '<div #container></div>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Compiler */]])
], Dynamic);

//# sourceMappingURL=dynamic.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResourceServices = (function () {
    function ResourceServices(http) {
        this.http = http;
    }
    ResourceServices.prototype.getJSON = function (fileName) {
        return this.http.get("assets/" + fileName + ".json")
            .map(function (res) { return res.json(); });
    };
    ResourceServices.prototype.getHtml = function (fileName) {
        return this.http.get(fileName)
            .map(function (res) { return res; });
    };
    return ResourceServices;
}());
ResourceServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ResourceServices);

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginService = (function () {
    function LoginService() {
        this.loggedInStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loggedInStatus$ = this.loggedInStatus.asObservable();
    }
    LoginService.prototype.login = function () {
        //mimic for now logging in
        this.loggedInStatus.next(true);
    };
    LoginService.prototype.logout = function () {
        //mimic for now logging out
        this.loggedInStatus.next(false);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentVisibleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ParentVisibleService = (function () {
    function ParentVisibleService() {
        this.parentVisible = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.parentVisibleStatus$ = this.parentVisible.asObservable();
    }
    ParentVisibleService.prototype.setVisibility = function (parentVisible) {
        this.parentVisible.next(parentVisible);
    };
    return ParentVisibleService;
}());
ParentVisibleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ParentVisibleService);

//# sourceMappingURL=parent-visible.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_compass_dynamic_viewer_component__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompassMenu = (function () {
    function CompassMenu(nav) {
        this.nav = nav;
    }
    CompassMenu.prototype.goToDynamicPage = function (page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__common_compass_dynamic_viewer_component__["a" /* CompassDynamicViewer */], {
            "page": page
        });
    };
    return CompassMenu;
}());
CompassMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-menu',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\main\compass-menu.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>Compass</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n<ion-content>     \n\n    <ion-list>\n\n        <ion-item (click)="goToDynamicPage(\'justarrived\')">\n\n          I Just Arrived\n\n        </ion-item>\n\n        <ion-item>\n\n          Schedule Medical Exam\n\n        </ion-item>\n\n        <ion-item>\n\n          Find Housing\n\n        </ion-item>\n\n      </ion-list>\n\n       <button ion-button full>Share Compass</button>\n\n      <ion-list>\n\n        <ion-item>\n\n          Find / Buy Essentials\n\n        </ion-item>\n\n        <ion-item>\n\n          Study French or English\n\n        </ion-item>\n\n        <ion-item>\n\n          Check Application Status\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\main\compass-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]])
], CompassMenu);

//# sourceMappingURL=compass-menu.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassDynamicViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_component__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompassDynamicViewer = (function () {
    function CompassDynamicViewer(resourceService, nav, navparams) {
        var _this = this;
        this.resourceService = resourceService;
        this.nav = nav;
        this.navparams = navparams;
        this.dynamicProps = [];
        this.dynamicProps = {
            goToNextPage: function () {
                _this.slider.slideNext();
            },
            goToPrevPage: function () {
                _this.slider.slidePrev();
            }
        };
    }
    CompassDynamicViewer.prototype.ngOnInit = function () {
        this.getHtml();
    };
    CompassDynamicViewer.prototype.getHtml = function () {
        var _this = this;
        this.resourceService.getHtml("assets/pages/justarrived/index.html").subscribe(function (data) {
            _this.setPage = {
                name: "justarrived",
                template: data._body
            };
            _this.dynamic.page = _this.setPage;
            _this.dynamic.addComponent(_this.setPage.template, _this.dynamicProps);
        });
    };
    CompassDynamicViewer.prototype.getJson = function () {
        this.resourceService.getJSON("file").subscribe(function (data) {
        });
    };
    return CompassDynamicViewer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__dynamic_component__["a" /* Dynamic */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__dynamic_component__["a" /* Dynamic */])
], CompassDynamicViewer.prototype, "dynamic", void 0);
CompassDynamicViewer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'compass-dynamic-viewer',template:/*ion-inline-start:"C:\Users\bima\compassv2\src\app\components\common\compass-dynamic-viewer.html"*/'<dynamic [properties]="dynamicProps" [page]="setPage" ></dynamic>'/*ion-inline-end:"C:\Users\bima\compassv2\src\app\components\common\compass-dynamic-viewer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CompassDynamicViewer);

//# sourceMappingURL=compass-dynamic-viewer.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map