(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
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
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/demo.html":
/*!************************!*\
  !*** ./demo/demo.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     bon-grid\n     bon-grid-cols=\"1\"\n     bon-grid-cols-md=\"25% 1fr\"\n     bon-grid-rows=\"12.5rem auto 1fr\"\n     bon-grid-rows-md=\"12.5rem 1fr\"\n     bon-grid-area=\"'h' 'a' 'm'\"\n     bon-grid-area-md=\"'h h' 'a m'\">\n\n  <header bon-grid-item bon-grid-item-area=\"h\">\n    <div bon-flex bon-flex-align-items=\"center\">\n      <div bon-flex-item bon-flex-item-grow=\"1\">\n        <h1 class=\"logo\">angular<img src=\"assets/bone.png\" />bone</h1>\n        <p>Provides structure to your angular apps using CSS3 Grid and Flex</p>\n      </div>\n      <a class=\"github\" bon-flex-item bon-flex-item-align=\"flex-start\" target=\"_blank\" href=\"https://github.com/vjai/angular-bone\">GITHUB</a>\n    </div>\n  </header>\n\n  <aside #aside [class.sticky]=\"isSticky\" bon-grid-item bon-grid-item-area=\"a\">\n    <nav>\n      <h4>Table of Contents</h4>\n\n      <ul>\n        <li><a href=\"#intro\">Introduction</a></li>\n        <li><a href=\"#simple-flex\">Simple flex layout</a></li>\n        <li><a href=\"#\">Simple grid layout</a></li>\n        <li><a href=\"#\">Responsive flex layout</a></li>\n        <li><a href=\"#\">Responsive grid layout</a></li>\n        <li><a href=\"#\">Mixing grid and flex</a></li>\n        <li><a href=\"#\">Real world example</a></li>\n        <li><a href=\"#\">API</a></li>\n      </ul>\n    </nav>\n  </aside>\n\n  <main bon-grid-item bon-grid-item-area=\"m\">\n    <h1>angular-bone</h1>\n\n    <h2 id=\"intro\">Introduction</h2>\n\n    <p>\n      <a href=\"#\">angular-bone</a> helps to build page layouts using CSS3 Grid and Flex concepts for your angular apps. It\n      provides you a set of directives that helps to build responsive layouts in a declarative way.\n    </p>\n\n    <h2>Simple flex layout</h2>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-flex</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-flex-item bon-flex-item-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-flex-item bon-flex-item-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-flex-item bon-flex-item-grow=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-flex-example\" class=\"canvas\" bon-flex>\n      <div class=\"green\" bon-flex-item bon-flex-item-grow=\"1\"></div>\n      <div class=\"yellow\" bon-flex-item bon-flex-item-grow=\"1\"></div>\n      <div class=\"pink\" bon-flex-item bon-flex-item-grow=\"2\"></div>\n    </div>\n\n    <h2>Simple grid layout</h2>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div id=\"simple-grid-example\" class=\"canvas\"\n      <strong>bon-grid bon-grid-cols=\"30% 1fr\"\n      bon-grid-rows=\"20% 1fr 10%\"\n      bon-grid-area=\"'a a' 'b c' 'd d'\"</strong>&gt;\n\n  &lt;div class=\"purple\" <strong>bon-grid-item bon-grid-item-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-grid-item bon-grid-item-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-grid-item bon-grid-item-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-grid-item bon-grid-item-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-grid-example\" class=\"canvas\" bon-grid bon-grid-cols=\"30% 1fr\" bon-grid-rows=\"20% 1fr 10%\" bon-grid-area=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-grid-item bon-grid-item-area=\"a\"></div>\n      <div class=\"yellow\" bon-grid-item bon-grid-item-area=\"b\"></div>\n      <div class=\"green\" bon-grid-item bon-grid-item-area=\"c\"></div>\n      <div class=\"pink\" bon-grid-item bon-grid-item-area=\"d\"></div>\n    </div>\n\n    <h2>Responsive flex layout</h2>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-flex bon-flex-direction-md=\"column\" bon-flex-direction-md=\"row\"</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-flex-item bon-flex-item-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-flex-item bon-flex-item-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-flex-item bon-flex-item-grow=\"1\" bon-flex-item-grow-md=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-flex-example\" class=\"canvas\" bon-flex bon-flex-direction=\"column\" bon-flex-direction-md=\"row\">\n      <div class=\"green\" bon-flex-item bon-flex-item-grow=\"1\"></div>\n      <div class=\"yellow\" bon-flex-item bon-flex-item-grow=\"1\"></div>\n      <div class=\"pink\" bon-flex-item bon-flex-item-grow=\"1\" bon-flex-item-grow-md=\"2\"></div>\n    </div>\n\n    <h2>Responsive grid layout</h2>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div id=\"simple-grid-example\" class=\"canvas\"\n      <strong>bon-grid bon-grid-cols=\"1\"\n      bon-grid-cols-md=\"30% 1fr\"\n      bon-grid-rows=\"20% 30% 1fr 10%\"\n      bon-grid-rows-md=\"20% 1fr 10%\"\n      bon-grid-area=\"'a' 'b' 'c' 'd'\"\n      bon-grid-area-md=\"'a a' 'b c' 'd d'\"</strong>&gt;\n\n  &lt;div class=\"purple\" <strong>bon-grid-item bon-grid-item-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-grid-item bon-grid-item-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-grid-item bon-grid-item-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-grid-item bon-grid-item-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-grid-example\" class=\"canvas\"\n         bon-grid\n         bon-grid-cols=\"1\"\n         bon-grid-cols-md=\"30% 1fr\"\n         bon-grid-rows=\"20% 30% 1fr 10%\"\n         bon-grid-rows-md=\"20% 1fr 10%\"\n         bon-grid-area=\"'a' 'b' 'c' 'd'\"\n         bon-grid-area-md=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-grid-item bon-grid-item-area=\"a\"></div>\n      <div class=\"yellow\" bon-grid-item bon-grid-item-area=\"b\"></div>\n      <div class=\"green\" bon-grid-item bon-grid-item-area=\"c\"></div>\n      <div class=\"pink\" bon-grid-item bon-grid-item-area=\"d\"></div>\n    </div>\n\n    <h2>Mixing grid and flex</h2>\n\n    <p>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n    </p>\n\n    <h2>Real world example</h2>\n\n    <p>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n    </p>\n\n    <h2>API</h2>\n\n    <p>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n    </p>\n  </main>\n</div>\n"

/***/ }),

/***/ "./demo/demo.scss":
/*!************************!*\
  !*** ./demo/demo.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%; }\n  .container header {\n    background-color: #00bfff;\n    color: #efefef;\n    box-shadow: 0 3px 3px -3px #949a9c;\n    text-shadow: 0 1px 0 #949a9c;\n    z-index: 1; }\n  .container header div {\n      margin: 0 1rem 0 1rem; }\n  .container header div .logo {\n        font-size: 3.5rem;\n        font-family: 'Fredoka One', cursive; }\n  .container header div .logo img {\n          position: relative;\n          bottom: 5px;\n          margin: 0 5px; }\n  .container header div .github {\n        margin-top: 1rem; }\n  .container aside {\n    background-color: #f2f4f4; }\n  .container aside nav {\n      padding-top: 20px; }\n  .container aside nav h4 {\n        font-size: 1.5rem;\n        text-align: center; }\n  .container aside nav ul {\n        text-transform: capitalize;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        font-size: 1.2rem;\n        font-weight: bold;\n        letter-spacing: 0.5px; }\n  .container aside nav ul li a {\n          padding: 0.5rem 0.75rem;\n          display: block;\n          text-align: center;\n          transition: all 0.25s; }\n  .container aside nav ul li a:hover {\n            background-color: #fff; }\n  .container aside.sticky {\n      position: fixed;\n      top: 0;\n      height: 100%;\n      width: 25%; }\n  .container main {\n    padding: 2rem 4rem; }\n  .container main h1 {\n      border-bottom: solid 1px #eaefef; }\n  .container main .canvas {\n      background-color: #f2f2f2;\n      border-radius: 5px;\n      padding: 10px; }\n  .container main .canvas div {\n        margin: 5px;\n        border-radius: 5px;\n        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n  .container main .green {\n      background-color: #c7e853; }\n  .container main .yellow {\n      background-color: #f2ef37; }\n  .container main .pink {\n      background-color: #ff2873; }\n  .container main .purple {\n      background-color: #a07df2; }\n  .container main #simple-flex-example, .container main #responsive-flex-example {\n      height: 300px; }\n  .container main #simple-grid-example, .container main #responsive-grid-example {\n      height: 500px; }\n  @media screen and (max-width: 575px) {\n  .container header div .logo {\n    font-size: 2.2rem; }\n    .container header div .logo img {\n      width: 20px; }\n  .container main {\n    padding: 2rem; } }\n"

/***/ }),

/***/ "./demo/demo.ts":
/*!**********************!*\
  !*** ./demo/demo.ts ***!
  \**********************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_bone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/bone */ "./lib/bone.ts");
/* harmony import */ var _lib_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/watcher */ "./lib/watcher.ts");
/* harmony import */ var _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/breakpoint */ "./lib/breakpoint.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DemoComponent = /** @class */ (function () {
    function DemoComponent(watcher) {
        var _this = this;
        this.watcher = watcher;
        this.title = 'angular-bone';
        this.breakpoint = this.watcher.getCurrentMedia();
        this.setAside();
        this.mediaWatcherUnSubscribeFunction = this.watcher.watch(function (breakpoint) {
            _this.breakpoint = breakpoint;
            _this.setAside();
        });
    }
    DemoComponent.prototype.setAside = function () {
        if (!this.aside) {
            return;
        }
        if (this.breakpoint == _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__["Breakpoint"].Large || this.breakpoint === _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__["Breakpoint"].ExtraLarge) {
            this.isSticky = window.pageYOffset >= this.initialOffset;
        }
        else {
            this.isSticky = false;
        }
    };
    DemoComponent.prototype.ngAfterViewInit = function () {
        this.initialOffset = this.aside.nativeElement.offsetTop;
    };
    DemoComponent.prototype.ngOnDestroy = function () {
        this.mediaWatcherUnSubscribeFunction && this.mediaWatcherUnSubscribeFunction();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aside'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DemoComponent.prototype, "aside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DemoComponent.prototype, "setAside", null);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-root',
            template: __webpack_require__(/*! ./demo.html */ "./demo/demo.html"),
            styles: [__webpack_require__(/*! ./demo.scss */ "./demo/demo.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_lib_watcher__WEBPACK_IMPORTED_MODULE_4__["MediaSizeWatcher"])),
        __metadata("design:paramtypes", [_lib_watcher__WEBPACK_IMPORTED_MODULE_4__["MediaSizeWatcher"]])
    ], DemoComponent);
    return DemoComponent;
}());
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                DemoComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _lib_bone__WEBPACK_IMPORTED_MODULE_3__["BoneModule"]
            ],
            bootstrap: [DemoComponent]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo */ "./demo/demo.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_demo__WEBPACK_IMPORTED_MODULE_1__["DemoModule"]);


/***/ }),

/***/ "./lib/base.ts":
/*!*********************!*\
  !*** ./lib/base.ts ***!
  \*********************/
/*! exports provided: BoneBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneBase", function() { return BoneBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watcher */ "./lib/watcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BoneBase = /** @class */ (function () {
    function BoneBase(el, watcher) {
        var _this = this;
        this.el = el;
        this.watcher = watcher;
        this.currentAppliedStyles = null;
        this.breakpoint = this.watcher.getCurrentMedia();
        this.mediaWatcherUnSubscribeFunction = this.watcher.watch(function (breakpoint) {
            _this.breakpoint = breakpoint;
            _this.applyLayout();
            _this.breakpointChange && _this.breakpointChange.emit({
                breakpoint: _this.breakpoint,
                el: _this.el,
                directive: _this
            });
        });
    }
    /**
     * Re-apply the layout on change of props.
     */
    BoneBase.prototype.ngOnChanges = function () {
        this.applyLayout();
    };
    /**
     * Unsubscribe from watcher and remove the applied styles.
     */
    BoneBase.prototype.ngOnDestroy = function () {
        var _this = this;
        this.mediaWatcherUnSubscribeFunction();
        this.getStylePropNames().forEach(function (style) {
            _this.el.nativeElement.style.removeProperty(style);
        });
    };
    /**
     * Applies the layout style properties to the attached element.
     */
    BoneBase.prototype.applyLayout = function () {
        var _this = this;
        var styles = this.getStyles();
        if (!styles) {
            return;
        }
        Object.keys(styles).forEach(function (style) {
            var value = styles[style];
            if (value) {
                _this.el.nativeElement.style.setProperty(_this.toKebab(style), value);
            }
            else {
                _this.el.nativeElement.style.removeProperty(_this.toCamel(style));
            }
        });
    };
    /**
     * Destroys the directive and removes the changes applied by it.
     */
    BoneBase.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    BoneBase.prototype.getValue = function (arr) {
        return arr.splice(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(this.breakpoint)).find(function (val) { return val; });
    };
    BoneBase.prototype.isNumeric = function (num) {
        return !isNaN(num);
    };
    BoneBase.prototype.toKebab = function (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };
    BoneBase.prototype.toCamel = function (str) {
        return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('breakpoint-change'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BoneBase.prototype, "breakpointChange", void 0);
    BoneBase = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_watcher__WEBPACK_IMPORTED_MODULE_1__["MediaSizeWatcher"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _watcher__WEBPACK_IMPORTED_MODULE_1__["MediaSizeWatcher"]])
    ], BoneBase);
    return BoneBase;
}());



/***/ }),

/***/ "./lib/bone.flex.ts":
/*!**************************!*\
  !*** ./lib/bone.flex.ts ***!
  \**************************/
/*! exports provided: BoneFlex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneFlex", function() { return BoneFlex; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneFlex = /** @class */ (function (_super) {
    __extends(BoneFlex, _super);
    function BoneFlex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._display = 'flex';
        _this._displaySm = 'flex';
        _this._displayMd = 'flex';
        _this._displayLg = 'flex';
        _this._displayXl = 'flex';
        _this.currentStyles = null;
        return _this;
    }
    Object.defineProperty(BoneFlex.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (display) {
            this._display = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displaySm", {
        get: function () {
            return this._displaySm;
        },
        set: function (display) {
            this._displaySm = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayMd", {
        get: function () {
            return this._displayMd;
        },
        set: function (display) {
            this._displayMd = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayLg", {
        get: function () {
            return this._displayLg;
        },
        set: function (display) {
            this._displayLg = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayXl", {
        get: function () {
            return this._displayXl;
        },
        set: function (display) {
            this._displayXl = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    BoneFlex.prototype.getStyles = function () {
        var newStyles = {
            display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
            flexDirection: this.getValue([this.directionXl, this.directionLg, this.directionMd, this.directionSm, this.direction]),
            flexWrap: this.getValue([this.wrapXl, this.wrapLg, this.wrapMd, this.wrapSm, this.wrap]),
            justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg,
                this.justifyContentMd, this.justifyContentSm, this.justifyContent]),
            alignItems: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignItems]),
            alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.display !== newStyles.display ||
            this.currentStyles.flexDirection !== newStyles.flexDirection ||
            this.currentStyles.flexWrap !== newStyles.flexWrap ||
            this.currentStyles.justifyContent !== newStyles.justifyContent ||
            this.currentStyles.alignItems !== newStyles.alignItems ||
            this.currentStyles.alignContent !== newStyles.alignContent) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    BoneFlex.prototype.getStylePropNames = function () {
        return ['display', 'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "display", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-direction'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "direction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-wrap'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-justify-content'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-items'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-content'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-sm'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displaySm", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-direction-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-wrap-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-justify-content-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-items-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-content-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-md'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayMd", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-direction-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-wrap-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-justify-content-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-items-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-content-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-lg'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayLg", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-direction-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-wrap-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-justify-content-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-items-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-content-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-xl'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayXl", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-direction-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-wrap-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-justify-content-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-items-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-align-content-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentXl", void 0);
    BoneFlex = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-flex]'
        })
    ], BoneFlex);
    return BoneFlex;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.flexitem.ts":
/*!******************************!*\
  !*** ./lib/bone.flexitem.ts ***!
  \******************************/
/*! exports provided: BoneFlexItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneFlexItem", function() { return BoneFlexItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneFlexItem = /** @class */ (function (_super) {
    __extends(BoneFlexItem, _super);
    function BoneFlexItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    BoneFlexItem.prototype.getStyles = function () {
        var newStyles = {
            flexOrder: this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]),
            flexGrow: this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]),
            flexShrink: this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]),
            flexBasis: this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.flexOrder !== newStyles.flexOrder ||
            this.currentStyles.flexShrink !== newStyles.flexShrink ||
            this.currentStyles.flexBasis !== newStyles.flexBasis ||
            this.currentStyles.alignSelf !== newStyles.alignSelf) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    BoneFlexItem.prototype.getStylePropNames = function () {
        return ['order', 'grow', 'shrink', 'basis', 'align'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-order'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-grow'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "grow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-shrink'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-basis'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-align'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-order-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-grow-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-shrink-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-basis-sm'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-align-sm'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-order-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-grow-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-shrink-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-basis-md'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-align-md'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-order-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-grow-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-shrink-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-basis-lg'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-align-lg'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-order-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-grow-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-shrink-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-basis-xl'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-flex-item-align-xl'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignXl", void 0);
    BoneFlexItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-flex-item]'
        })
    ], BoneFlexItem);
    return BoneFlexItem;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.grid.ts":
/*!**************************!*\
  !*** ./lib/bone.grid.ts ***!
  \**************************/
/*! exports provided: BoneGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGrid", function() { return BoneGrid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneGrid = /** @class */ (function (_super) {
    __extends(BoneGrid, _super);
    function BoneGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._display = 'grid';
        _this._displaySm = 'grid';
        _this._displayMd = 'grid';
        _this._displayLg = 'grid';
        _this._displayXl = 'grid';
        _this.currentStyles = null;
        return _this;
    }
    Object.defineProperty(BoneGrid.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (display) {
            this._display = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displaySm", {
        get: function () {
            return this._displaySm;
        },
        set: function (display) {
            this._displaySm = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayMd", {
        get: function () {
            return this._displayMd;
        },
        set: function (display) {
            this._displayMd = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayLg", {
        get: function () {
            return this._displayLg;
        },
        set: function (display) {
            this._displayLg = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayXl", {
        get: function () {
            return this._displayXl;
        },
        set: function (display) {
            this._displayXl = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    BoneGrid.prototype.getStyles = function () {
        var newStyles = {
            display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
            gridTemplateColumns: this.getCols(),
            gridTemplateRows: this.getRows(),
            gridTemplateAreas: this.getAreas(),
            gridAutoColumns: this.getAutoCols(),
            gridAutoRows: this.getAutoRows(),
            gridGap: this.getGap(),
            justifyItems: this.getValue([this.justifyItemsXl, this.justifyItemsLg, this.justifyItemsMd, this.justifyItemsSm, this.justifyItems]),
            alignItems: this.getValue([this.alignItemsXl, this.alignItemsLg, this.alignItemsMd, this.alignItemsSm, this.alignItems]),
            justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg, this.justifyContentMd,
                this.justifyContentSm, this.justifyContent]),
            alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.display !== newStyles.display ||
            this.currentStyles.gridTemplateColumns !== newStyles.gridTemplateColumns ||
            this.currentStyles.gridTemplateRows !== newStyles.gridTemplateRows ||
            this.currentStyles.gridTemplateAreas !== newStyles.gridTemplateAreas ||
            this.currentStyles.gridAutoColumns !== newStyles.gridAutoColumns ||
            this.currentStyles.gridAutoRows !== newStyles.gridAutoRows ||
            this.currentStyles.gridGap !== newStyles.gridGap ||
            this.currentStyles.justifyItems !== newStyles.justifyItems ||
            this.currentStyles.alignItems !== newStyles.alignItems ||
            this.currentStyles.justifyContent !== newStyles.justifyContent ||
            this.currentStyles.alignContent !== newStyles.alignContent) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    BoneGrid.prototype.getStylePropNames = function () {
        return [
            'display',
            'grid-template-columns',
            'grid-template-rows',
            'grid-template-areas',
            'grid-auto-columns',
            'grid-auto-rows',
            'grid-gap',
            'justify-items',
            'align-items',
            'justify-content',
            'align-content'
        ];
    };
    BoneGrid.prototype.getCols = function () {
        var cols = this.getValue([this.colsXl, this.colsLg, this.colsMd, this.colsSm, this.cols]);
        return this.getTracks(cols);
    };
    BoneGrid.prototype.getRows = function () {
        var rows = this.getValue([this.rowsXl, this.rowsLg, this.rowsMd, this.rowsSm, this.rows]);
        return this.getTracks(rows);
    };
    BoneGrid.prototype.getTracks = function (tracks) {
        if (this.isNumeric(tracks)) {
            return "repeat(" + tracks + ", 1fr)";
        }
        else if (Array.isArray(tracks)) {
            return tracks.map(function (track) { return typeof track === 'number' ? track + "px" : track; }).join(' ');
        }
        return tracks;
    };
    BoneGrid.prototype.getAutoCols = function () {
        var colDefaultSize = this.getValue([this.autoColsXl, this.autoColsLg, this.autoColsMd, this.autoColsSm, this.autoCols]);
        return this.getTrackDefaultSize(colDefaultSize);
    };
    BoneGrid.prototype.getAutoRows = function () {
        var rowDefaultSize = this.getValue([this.autoRowsXl, this.autoRowsLg, this.autoRowsMd, this.autoColsSm, this.autoRows]);
        return this.getTrackDefaultSize(rowDefaultSize);
    };
    BoneGrid.prototype.getTrackDefaultSize = function (size) {
        return this.isNumeric(size) ? size + "px" : size;
    };
    BoneGrid.prototype.getAreas = function () {
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return area.map(function (row) { return row.join(' '); }).reduce(function (areaStr, row, index) { return (index === 0 ? "'" + areaStr + "'" : areaStr) + " '" + row + "'"; });
        }
        return area;
    };
    BoneGrid.prototype.getGap = function () {
        var gridGap = this.getValue([this.gridGapXl, this.gridGapLg, this.gridGapMd, this.gridGapSm, this.gridGap]);
        if (this.isNumeric(gridGap)) {
            return gridGap + "px";
        }
        else if (Array.isArray(gridGap)) {
            return gridGap.map(function (g) { return typeof g === 'number' ? g + "px" : g; }).join(' ');
        }
        else {
            return gridGap;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "display", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-cols'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "cols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-rows'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-area'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "area", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-cols'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoCols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-rows'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-flow'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-gap'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-items'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-items'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-content'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-content'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-sm'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displaySm", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-cols-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-rows-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-area-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-cols-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-rows-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-flow-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-gap-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-items-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-items-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-content-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-content-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-md'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayMd", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-cols-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-rows-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-area-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-cols-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-rows-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-flow-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-gap-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-items-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-items-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-content-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-content-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-lg'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayLg", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-cols-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-rows-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-area-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-cols-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-rows-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-flow-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-gap-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-items-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-items-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-content-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-content-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-xl'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayXl", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-cols-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-rows-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-area-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-cols-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-rows-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-auto-flow-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-gap-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-items-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-items-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-justify-content-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-align-content-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentXl", void 0);
    BoneGrid = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-grid]'
        })
    ], BoneGrid);
    return BoneGrid;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.griditem.ts":
/*!******************************!*\
  !*** ./lib/bone.griditem.ts ***!
  \******************************/
/*! exports provided: BoneGridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGridItem", function() { return BoneGridItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneGridItem = /** @class */ (function (_super) {
    __extends(BoneGridItem, _super);
    function BoneGridItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    BoneGridItem.prototype.getStyles = function () {
        var newStyles = {
            justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align]),
            gridArea: this.getAreaInfo(),
            gridColumn: this.getCol(),
            gridRow: this.getRow()
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.justifySelf !== newStyles.justifySelf ||
            this.currentStyles.alignSelf !== newStyles.alignSelf ||
            this.currentStyles.gridArea !== newStyles.gridArea ||
            this.currentStyles.gridColumn !== newStyles.gridColumn ||
            this.currentStyles.gridRow !== newStyles.gridRow) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    BoneGridItem.prototype.getStylePropNames = function () {
        return ['grid-column', 'grid-row', 'grid-area', 'justify-self', 'align-self'];
    };
    BoneGridItem.prototype.getCol = function () {
        var col = this.getValue([this.colXl, this.colLg, this.colMd, this.colSm, this.col]);
        return this.getTrackInfo(col);
    };
    BoneGridItem.prototype.getRow = function () {
        var row = this.getValue([this.rowXl, this.rowLg, this.rowMd, this.rowSm, this.row]);
        return this.getTrackInfo(row);
    };
    BoneGridItem.prototype.getTrackInfo = function (track) {
        if (this.isNumeric(track)) {
            return "span " + track;
        }
        else if (Array.isArray(track)) {
            return track[0] + " / " + track[1];
        }
        return track || '';
    };
    BoneGridItem.prototype.getAreaInfo = function () {
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return "" + area[0] / area[1] / area[2] / area[3];
        }
        return area;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-col'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-row'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-area'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "area", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-justify'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-align'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-col-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "colSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-row-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-area-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-justify-sm'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifySm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-align-sm'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-col-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-row-md'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-area-md'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-justify-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-align-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-col-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-row-lg'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-area-lg'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-justify-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-align-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-col-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-row-xl'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-area-xl'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-justify-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-grid-item-align-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignXl", void 0);
    BoneGridItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-grid-item]'
        })
    ], BoneGridItem);
    return BoneGridItem;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.ts":
/*!*********************!*\
  !*** ./lib/bone.ts ***!
  \*********************/
/*! exports provided: BoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneModule", function() { return BoneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bone_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bone.flex */ "./lib/bone.flex.ts");
/* harmony import */ var _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bone.flexitem */ "./lib/bone.flexitem.ts");
/* harmony import */ var _bone_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bone.grid */ "./lib/bone.grid.ts");
/* harmony import */ var _bone_griditem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bone.griditem */ "./lib/bone.griditem.ts");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watcher */ "./lib/watcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BoneModule = /** @class */ (function () {
    function BoneModule() {
    }
    BoneModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _bone_flex__WEBPACK_IMPORTED_MODULE_1__["BoneFlex"],
                _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__["BoneFlexItem"],
                _bone_grid__WEBPACK_IMPORTED_MODULE_3__["BoneGrid"],
                _bone_griditem__WEBPACK_IMPORTED_MODULE_4__["BoneGridItem"]
            ],
            providers: [
                _watcher__WEBPACK_IMPORTED_MODULE_5__["MediaSizeWatcher"]
            ],
            exports: [
                _bone_flex__WEBPACK_IMPORTED_MODULE_1__["BoneFlex"],
                _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__["BoneFlexItem"],
                _bone_grid__WEBPACK_IMPORTED_MODULE_3__["BoneGrid"],
                _bone_griditem__WEBPACK_IMPORTED_MODULE_4__["BoneGridItem"]
            ]
        })
    ], BoneModule);
    return BoneModule;
}());



/***/ }),

/***/ "./lib/breakpoint.ts":
/*!***************************!*\
  !*** ./lib/breakpoint.ts ***!
  \***************************/
/*! exports provided: Breakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
var Breakpoint;
(function (Breakpoint) {
    Breakpoint["ExtraSmall"] = "xs";
    Breakpoint["Small"] = "sm";
    Breakpoint["Medium"] = "md";
    Breakpoint["Large"] = "lg";
    Breakpoint["ExtraLarge"] = "xl";
})(Breakpoint || (Breakpoint = {}));


/***/ }),

/***/ "./lib/watcher.ts":
/*!************************!*\
  !*** ./lib/watcher.ts ***!
  \************************/
/*! exports provided: MediaSizeWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSizeWatcher", function() { return MediaSizeWatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoint */ "./lib/breakpoint.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var MediaSizeWatcher = /** @class */ (function () {
    function MediaSizeWatcher() {
        var _this = this;
        this.subscribers = [];
        // https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes
        this.mediaSizeQueryMap = new Map([
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].ExtraLarge, window.matchMedia('(min-width: 1200px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Large, window.matchMedia('(min-width: 992px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Medium, window.matchMedia('(min-width: 768px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Small, window.matchMedia('(min-width: 576px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].ExtraSmall, window.matchMedia('(min-width: 0)')]
        ]);
        this.listen = this.listen.bind(this);
        this.mediaSizeQueryMap.forEach(function (value) { return value.addListener(_this.listen); });
        this.listen();
    }
    MediaSizeWatcher.prototype.getCurrentMedia = function () {
        return this.currentMediaSize;
    };
    MediaSizeWatcher.prototype.watch = function (subscriber) {
        var _this = this;
        this.subscribers.push(subscriber);
        return function () { return _this.subscribers.splice(_this.subscribers.length - 1, 1); };
    };
    MediaSizeWatcher.prototype.listen = function () {
        try {
            for (var _a = __values(this.mediaSizeQueryMap), _b = _a.next(); !_b.done; _b = _a.next()) {
                var mediaSizeQuery = _b.value;
                var _c = __read(mediaSizeQuery, 2), mediaSize = _c[0], query = _c[1];
                if (query.matches) {
                    if (mediaSize !== this.currentMediaSize) {
                        this.currentMediaSize = mediaSize;
                        this.alertSubscribers();
                    }
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
    };
    MediaSizeWatcher.prototype.alertSubscribers = function () {
        var _this = this;
        this.subscribers.forEach(function (subscriber) { return subscriber(_this.currentMediaSize); });
    };
    MediaSizeWatcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MediaSizeWatcher);
    return MediaSizeWatcher;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/VijayaAnand/Git/angular-bone/demo/main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map