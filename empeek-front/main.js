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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n<!--There could be common header for each page-->\n\n<router-outlet></router-outlet>\n\n<!--Footer also-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/home-page/home-page.module */ "./src/app/modules/home-page/home-page.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _modules_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_4__["HomePageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ui-button/ui-button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/ui-button/ui-button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttonGroup\">\n\t<button\n\t\t[disabled]=\"disabled\"\n\t\t(click)=\"emitClick()\"\n\t\t[class.delete]=\"isDelete\"\n\t>\n\t\t{{value}}\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ui-button/ui-button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/ui-button/ui-button.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonGroup {\n  z-index: 1;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer; }\n  .buttonGroup button {\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 15px;\n    line-height: 1.5;\n    cursor: pointer;\n    color: #fff;\n    text-transform: uppercase;\n    height: 55px;\n    border: none;\n    border-radius: 5px;\n    background: #51d0b9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 25px;\n    transition: all 0.4s; }\n  .buttonGroup button.delete {\n    background: #ffff;\n    border: 2px solid #f91010cf;\n    height: 35px;\n    color: #f91010cf;\n    font-weight: 600;\n    font-size: 13px; }\n  .buttonGroup button.delete:hover {\n    background: #f91010cf;\n    border: 2px solid #f91010cf;\n    color: #ffff; }\n"

/***/ }),

/***/ "./src/app/components/ui-button/ui-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-button/ui-button.component.ts ***!
  \*************************************************************/
/*! exports provided: UiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButtonComponent", function() { return UiButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorators/unsubscribe.decorator */ "./src/app/decorators/unsubscribe.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiButtonComponent = /** @class */ (function () {
    function UiButtonComponent() {
        var _this = this;
        this.value = '';
        this.disabled = false;
        this.isDelete = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitClick = function () { return _this.onClick.emit(); };
    }
    UiButtonComponent.prototype.ngOnInit = function () {
    };
    UiButtonComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", String)
    ], UiButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disabled'),
        __metadata("design:type", Boolean)
    ], UiButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isDelete'),
        __metadata("design:type", Boolean)
    ], UiButtonComponent.prototype, "isDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onClick'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiButtonComponent.prototype, "onClick", void 0);
    UiButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ui-button',
            template: __webpack_require__(/*! ./ui-button.component.html */ "./src/app/components/ui-button/ui-button.component.html"),
            styles: [__webpack_require__(/*! ./ui-button.component.scss */ "./src/app/components/ui-button/ui-button.component.scss")]
        }),
        Object(_decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [])
    ], UiButtonComponent);
    return UiButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-input/ui-input.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-input/ui-input.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inputGroup\">\n\t<label *ngIf=\"labelInput\"> {{labelInput}} </label>\n\t<input placeholder=\"{{placeholderInput}}\"\n\t\t   *ngIf=\"!isTextarea\"\n\t\t   [(ngModel)]=\"_ngModel\"\n\t\t   type = {{inputType}}\n\t\t   (ngModelChange)=\"handleChanges($event)\"\n\t\t   (blur)=\"checkError(true)\"\n\t\t   [class.inValid]=\"showErrorFlag\">\n\t<textarea\n\t\tplaceholder=\"{{placeholderInput}}\"\n\t\t*ngIf=\"isTextarea\"\n\t\t[(ngModel)]=\"_ngModel\"\n\t\t(ngModelChange)=\"handleChanges($event)\"\n\t\t(blur)=\"checkError(true)\"\n\t\t[class.inValid]=\"showErrorFlag\"\n\t\t(keydown.control.enter)=\"emitSubmitEvent()\"\n\t></textarea>\n\t<p class=\"error\" *ngIf=\"showErrorFlag\">{{error}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ui-input/ui-input.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-input/ui-input.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputGroup {\n  z-index: 1;\n  display: inline-block;\n  width: 100%; }\n  .inputGroup input {\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    font-size: 15px;\n    line-height: 1.5;\n    color: #3f3f56;\n    background-color: #ffffff;\n    border: 2px solid #e6e6e6;\n    height: 50px;\n    border-radius: 5px;\n    padding-left: 15px; }\n  .inputGroup textarea {\n    margin: 0;\n    resize: none;\n    font-family: 'Poppins', sans-serif;\n    width: 93%;\n    font-size: 15px;\n    line-height: 1.5;\n    color: #3f3f56;\n    background-color: #ffffff;\n    border: 2px solid #e6e6e6;\n    height: 110px;\n    border-radius: 5px;\n    padding-left: 15px; }\n  .inputGroup .error {\n    margin: 0;\n    text-align: left;\n    margin-left: 10px;\n    font-size: 14px;\n    color: red; }\n  .inputGroup input.inValid {\n    border: 1px solid red; }\n  .inputGroup ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    color: #e6e6e6; }\n  .inputGroup ::-moz-placeholder {\n    /* Firefox 19+ */\n    color: #e6e6e6; }\n  .inputGroup :-ms-input-placeholder {\n    /* IE 10+ */\n    color: #e6e6e6; }\n  .inputGroup :-moz-placeholder {\n    /* Firefox 18- */\n    color: #e6e6e6; }\n"

/***/ }),

/***/ "./src/app/components/ui-input/ui-input.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ui-input/ui-input.component.ts ***!
  \***********************************************************/
/*! exports provided: UiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputComponent", function() { return UiInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorators/unsubscribe.decorator */ "./src/app/decorators/unsubscribe.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiInputComponent = /** @class */ (function () {
    function UiInputComponent() {
        var _this = this;
        this.placeholder = null;
        this.type = 'placeholder';
        this.inputType = 'text';
        this.isTextarea = false;
        this.submitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placeholderInput = '';
        this.labelInput = '';
        this.error = '';
        this.showErrorFlag = false;
        this.handleChanges = function (val) {
            _this.formCtrl.patchValue(val);
        };
        this.checkError = function (isBluer) {
            if (_this.formCtrl.errors) {
                var bluer = isBluer;
                Object.values(_this.formCtrl.errors).forEach(function (err) {
                    _this.error = '';
                    if (typeof err != 'object') {
                        _this.error += err + ' ';
                        return;
                    }
                    Object.keys(err).forEach(function (key) {
                        _this.error += key + ' ' + err[key] + ' ';
                    });
                });
                if (bluer) {
                    _this.showErrorFlag = true;
                }
            }
            else {
                _this.showErrorFlag = false;
            }
        };
        this.emitSubmitEvent = function () {
            _this.submitEvent.emit();
        };
        this.setPlaceHolder = function () {
            if (_this.type == 'placeholder') {
                _this.placeholderInput = _this.placeholder;
                _this.labelInput = '';
            }
            else if (_this.type == 'label') {
                _this.labelInput = _this.placeholder;
                _this.placeholderInput = '';
            }
        };
    }
    UiInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type && this.placeholder)
            this.setPlaceHolder();
        this.formCtrl.valueChanges.subscribe(function (value) {
            if (!value)
                _this._ngModel = value;
        });
    };
    UiInputComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.formCtrl.statusChanges.subscribe(function (newStatus) {
            if (newStatus == 'INVALID') {
                _this.checkError(false);
            }
        });
    };
    UiInputComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('placeholder'),
        __metadata("design:type", String)
    ], UiInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", String)
    ], UiInputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('inputType'),
        __metadata("design:type", String)
    ], UiInputComponent.prototype, "inputType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('formCtrl'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], UiInputComponent.prototype, "formCtrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isTextarea'),
        __metadata("design:type", Boolean)
    ], UiInputComponent.prototype, "isTextarea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('submitEvent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UiInputComponent.prototype, "submitEvent", void 0);
    UiInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ui-input',
            template: __webpack_require__(/*! ./ui-input.component.html */ "./src/app/components/ui-input/ui-input.component.html"),
            styles: [__webpack_require__(/*! ./ui-input.component.scss */ "./src/app/components/ui-input/ui-input.component.scss")]
        }),
        Object(_decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [])
    ], UiInputComponent);
    return UiInputComponent;
}());



/***/ }),

/***/ "./src/app/decorators/unsubscribe.decorator.ts":
/*!*****************************************************!*\
  !*** ./src/app/decorators/unsubscribe.decorator.ts ***!
  \*****************************************************/
/*! exports provided: AutoUnsubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return AutoUnsubscribe; });
function AutoUnsubscribe(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.blackList, blackList = _c === void 0 ? [] : _c, _d = _b.includeArrays, includeArrays = _d === void 0 ? false : _d, _e = _b.arrayName, arrayName = _e === void 0 ? '' : _e, _f = _b.event, event = _f === void 0 ? 'ngOnDestroy' : _f;
    return function (constructor) {
        var original = constructor.prototype[event];
        if (!isFunction(original) && !disableAutoUnsubscribeAot()) {
            console.warn(constructor.name + " is using @AutoUnsubscribe but does not implement OnDestroy");
        }
        constructor.prototype[event] = function () {
            if (arrayName) {
                return doUnsubscribeIfArray(this[arrayName]);
            }
            for (var propName in this) {
                if (blackList.includes(propName))
                    continue;
                var property = this[propName];
                doUnsubscribe(property);
                doUnsubscribeIfArray(property);
            }
            isFunction(original) && original.apply(this, arguments);
        };
    };
    function disableAutoUnsubscribeAot() {
        return window && window['disableAutoUnsubscribeAot'] || window['disableAuthUnsubscribeAot'];
    }
}
var isFunction = function (fn) { return typeof fn === 'function'; };
var doUnsubscribe = function (subscription) {
    subscription && isFunction(subscription.unsubscribe) && subscription.unsubscribe();
};
var doUnsubscribeIfArray = function (subscriptionsArray) {
    Array.isArray(subscriptionsArray) && subscriptionsArray.forEach(doUnsubscribe);
};


/***/ }),

/***/ "./src/app/helpers/formsGenerator.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/formsGenerator.ts ***!
  \*******************************************/
/*! exports provided: formGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formGenerator", function() { return formGenerator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var FormsGenerator = /** @class */ (function () {
    function FormsGenerator() {
        var _this = this;
        this.generateNewItemForm = function () {
            return _this.formBuilder.group({
                itemName: [null,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(25)
                    ])
                ]
            });
        };
        this.getNewItemForm = function () {
            if (_this.addNewItemForm)
                return _this.addNewItemForm;
            else {
                _this.addNewItemForm = _this.generateNewItemForm();
                return _this.addNewItemForm;
            }
            ;
        };
        this.generateNewCommentForm = function () {
            return _this.formBuilder.group({
                commentText: [null,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)
                    ])
                ]
            });
        };
        this.getNewCommentForm = function () {
            if (_this.addNewCommentForm)
                return _this.addNewCommentForm;
            else {
                _this.addNewCommentForm = _this.generateNewCommentForm();
                return _this.addNewCommentForm;
            }
            ;
        };
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.addNewItemForm = this.generateNewItemForm();
    }
    return FormsGenerator;
}());
var formGenerator = new FormsGenerator();


/***/ }),

/***/ "./src/app/helpers/idGenerator.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/idGenerator.ts ***!
  \****************************************/
/*! exports provided: idGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idGenerator", function() { return idGenerator; });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
        this.generateId = function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        };
    }
    return IdGenerator;
}());
var idGenerator = new IdGenerator();


/***/ }),

/***/ "./src/app/helpers/localStorageHelper.ts":
/*!***********************************************!*\
  !*** ./src/app/helpers/localStorageHelper.ts ***!
  \***********************************************/
/*! exports provided: localStorageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageHelper", function() { return localStorageHelper; });
var LocalStorageHelper = /** @class */ (function () {
    function LocalStorageHelper() {
        this.setItem = function (value, name) {
            var valueToStorage = '';
            if (typeof value !== 'string') {
                valueToStorage = JSON.stringify(value);
            }
            localStorage.setItem(name, valueToStorage);
        };
        this.getItem = function (name) {
            return localStorage.getItem(name) ? localStorage.getItem(name) : null;
        };
        this.dropItem = function (name) {
            localStorage.removeItem(name);
        };
    }
    return LocalStorageHelper;
}());
var localStorageHelper = new LocalStorageHelper();


/***/ }),

/***/ "./src/app/models/Commets.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Commets.model.ts ***!
  \*****************************************/
/*! exports provided: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony import */ var _helpers_idGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/idGenerator */ "./src/app/helpers/idGenerator.ts");

var Comments = /** @class */ (function () {
    function Comments(contentText) {
        if (!contentText)
            throw new Error('Comment can not be empty');
        this.contentText = contentText;
        this.id = _helpers_idGenerator__WEBPACK_IMPORTED_MODULE_0__["idGenerator"].generateId();
    }
    ;
    return Comments;
}());



/***/ }),

/***/ "./src/app/models/Item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/Item.model.ts ***!
  \**************************************/
/*! exports provided: ItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModel", function() { return ItemModel; });
/* harmony import */ var _helpers_idGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/idGenerator */ "./src/app/helpers/idGenerator.ts");

var ItemModel = /** @class */ (function () {
    function ItemModel(name, id, comments) {
        var _this = this;
        this.addComment = function (comment) {
            if (!comment)
                throw new Error('You can not push nothing');
            _this.comments.push(comment);
            return _this.comments;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.deleteComment = function (commentForDeleting) {
            _this.comments = _this.comments.filter(function (comment) { return comment.id !== commentForDeleting.id; });
            return _this.comments;
        };
        if (!name)
            throw new Error('Item should have name');
        this.name = name;
        this.id = id ? id : _helpers_idGenerator__WEBPACK_IMPORTED_MODULE_0__["idGenerator"].generateId();
        this.comments = comments ? comments : [];
    }
    return ItemModel;
}());



/***/ }),

/***/ "./src/app/modules/home-page/home-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/home-page/home-page.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_home_page_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/home-page/components/side-menu/side-menu.component */ "./src/app/pages/home-page/components/side-menu/side-menu.component.ts");
/* harmony import */ var _pages_home_page_components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/home-page/components/items-list/items-list.component */ "./src/app/pages/home-page/components/items-list/items-list.component.ts");
/* harmony import */ var _pages_home_page_components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/home-page/components/comments-list/comments-list.component */ "./src/app/pages/home-page/components/comments-list/comments-list.component.ts");
/* harmony import */ var _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _pages_home_page_components_items_list_components_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/home-page/components/items-list/components/item/item.component */ "./src/app/pages/home-page/components/items-list/components/item/item.component.ts");
/* harmony import */ var _pages_home_page_components_comments_list_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/home-page/components/comments-list/components/comment/comment.component */ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"]
            ],
            declarations: [
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                _pages_home_page_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
                _pages_home_page_components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemsListComponent"],
                _pages_home_page_components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_5__["CommentsListComponent"],
                _pages_home_page_components_items_list_components_item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _pages_home_page_components_comments_list_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_8__["CommentComponent"]
            ],
            exports: [
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                _pages_home_page_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/modules/ui/ui.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/ui/ui.module.ts ***!
  \*****************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui-button/ui-button.component */ "./src/app/components/ui-button/ui-button.component.ts");
/* harmony import */ var _components_ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui-input/ui-input.component */ "./src/app/components/ui-input/ui-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _components_ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_2__["UiButtonComponent"],
                _components_ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_3__["UiInputComponent"]
            ],
            exports: [
                _components_ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_2__["UiButtonComponent"],
                _components_ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_3__["UiInputComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/comments-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/comments-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments-list\">\n\t<h1 class=\"caption\">\n\t\tComments\n\t</h1>\n\n\t<div class=\"warning\" *ngIf=\"(!comments) || (comments && comments.length === 0)\">\n\t\t<p>\n\t\t\tNo comments yet.\n\t\t\tAdd your first comment to this item!\n\t\t</p>\n\t</div>\n\n\t<div class=\"comments\" *ngIf=\"comments && comments.length > 0\">\n\t\t<app-comment *ngFor=\"let comment of comments\" [comment]=\"comment\"></app-comment>\n\t</div>\n\n\t<div class=\"text-area\" *ngIf=\"selectedItem\">\n\t\t<app-ui-input\n\t\t\t[isTextarea]=\"true\"\n\t\t\t[placeholder]=\"'type your comment here'\"\n\t\t\t[type]=\"'placeholder'\"\n\t\t\t[formCtrl]=\"form.controls['commentText']\"\n\t\t\t(submitEvent)=\"createComment()\"\n\t\t></app-ui-input>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/comments-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/comments-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-list {\n  position: absolute;\n  left: 60%;\n  width: 35%;\n  top: 50px;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);\n  min-height: 80%;\n  background-color: #ffffff;\n  padding: 0 20px; }\n  .comments-list h1.caption {\n    margin-top: 10px;\n    font-size: 35px;\n    font-weight: 300; }\n  .comments-list .comments {\n    overflow-x: scroll;\n    max-height: 500px; }\n  .comments-list .text-area {\n    position: absolute;\n    top: 85%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 50%;\n    width: 90%; }\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/comments-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/comments-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_comment_communicate_item_comment_communicate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/item-comment-communicate/item-comment-communicate.service */ "./src/app/services/item-comment-communicate/item-comment-communicate.service.ts");
/* harmony import */ var _models_Commets_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/Commets.model */ "./src/app/models/Commets.model.ts");
/* harmony import */ var _helpers_formsGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/formsGenerator */ "./src/app/helpers/formsGenerator.ts");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var _decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../decorators/unsubscribe.decorator */ "./src/app/decorators/unsubscribe.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsListComponent = /** @class */ (function () {
    function CommentsListComponent(itemCommentCommunicateService, itemService) {
        var _this = this;
        this.itemCommentCommunicateService = itemCommentCommunicateService;
        this.itemService = itemService;
        this.createComment = function () {
            if (!_this.form.valid)
                return;
            var commentText = _this.form.value.commentText;
            var comment = new _models_Commets_model__WEBPACK_IMPORTED_MODULE_2__["Comments"](commentText);
            _this.selectedItem.addComment(comment);
            _this.itemService.updateItem(_this.selectedItem);
            _this.form.reset();
        };
    }
    CommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = _helpers_formsGenerator__WEBPACK_IMPORTED_MODULE_3__["formGenerator"].getNewCommentForm();
        this.itemCommentCommunicateService.emitSelectedItem.subscribe(function (item) {
            _this.selectedItem = item;
            _this.comments = _this.selectedItem.getComments();
        });
    };
    CommentsListComponent.prototype.ngOnDestroy = function () { };
    CommentsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments-list',
            template: __webpack_require__(/*! ./comments-list.component.html */ "./src/app/pages/home-page/components/comments-list/comments-list.component.html"),
            styles: [__webpack_require__(/*! ./comments-list.component.scss */ "./src/app/pages/home-page/components/comments-list/comments-list.component.scss")]
        }),
        Object(_decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [_services_item_comment_communicate_item_comment_communicate_service__WEBPACK_IMPORTED_MODULE_1__["ItemCommentCommunicateService"],
            _services_item_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]])
    ], CommentsListComponent);
    return CommentsListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/components/comment/comment.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\">\n\t<div class=\"photo\">\n\t\t<img src=\"./assets/images/photo.png\" alt=\"\">\n\t</div>\n\t<div class=\"text\">\n\t\t<p>\n\t\t\t{{comment.contentText}}\n\t\t</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/components/comment/comment.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment {\n  border-bottom: 1.3px solid #d6d5d5;\n  padding: 15px 0; }\n  .comment .photo {\n    display: inline-block; }\n  .comment .photo img {\n      height: 75px;\n      width: 75px; }\n  .comment .text {\n    display: inline-block;\n    margin-left: 15px;\n    vertical-align: top; }\n  .comment .text p {\n      margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/comments-list/components/comment/comment.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Commets_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Commets.model */ "./src/app/models/Commets.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('comment'),
        __metadata("design:type", _models_Commets_model__WEBPACK_IMPORTED_MODULE_1__["Comments"])
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/pages/home-page/components/comments-list/components/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/components/item/item.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/components/item/item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" (click)=\"emitSelectedItemEvent()\" [class.active]=\"active\">\n\t<div class=\"text\">\n\t\t{{item.name}}\n\t</div>\n\t<div class=\"button\">\n\t\t<app-ui-button\n\t\t\t[value]=\"'Delete'\"\n\t\t\t[isDelete]=\"true\"\n\t\t\t(onClick)=\"emitDeleteItemEvent()\"\n\t\t></app-ui-button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/components/item/item.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/components/item/item.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  border-bottom: 1.3px solid #d6d5d5;\n  padding-top: 12px;\n  cursor: pointer;\n  position: relative; }\n  .item .text {\n    display: inline-block;\n    width: 70%;\n    margin-right: 15%;\n    font-weight: bold; }\n  .item .button {\n    display: inline-block;\n    width: 15%; }\n  .item:hover:after {\n  content: '';\n  width: 3px;\n  position: absolute;\n  left: -20px;\n  height: 100%;\n  top: 50%;\n  background-color: red;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n  .item.active:after {\n  content: '';\n  width: 3px;\n  position: absolute;\n  left: -20px;\n  height: 100%;\n  top: 50%;\n  background-color: red;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/components/item/item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/components/item/item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Item.model */ "./src/app/models/Item.model.ts");
/* harmony import */ var _decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../decorators/unsubscribe.decorator */ "./src/app/decorators/unsubscribe.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        var _this = this;
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active = false;
        this.emitDeleteItemEvent = function () { return _this.onDeleteItem.emit(_this.item); };
        this.emitSelectedItemEvent = function () { return _this.onSelectItem.emit(_this.item); };
    }
    Object.defineProperty(ItemComponent.prototype, "activeItem", {
        set: function (item) {
            this.active = item;
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _models_Item_model__WEBPACK_IMPORTED_MODULE_1__["ItemModel"])
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isActive'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemComponent.prototype, "activeItem", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onDeleteItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemComponent.prototype, "onDeleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSelectItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemComponent.prototype, "onSelectItem", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pages/home-page/components/items-list/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/pages/home-page/components/items-list/components/item/item.component.scss")]
        }),
        Object(_decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_2__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/items-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/items-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"items-list\">\n\t<h1 class=\"caption\">\n\t\tItems\n\t</h1>\n\n\t<div class=\"form\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input\">\n\t\t\t\t<app-ui-input\n\t\t\t\t\t[type]=\"'placeholder'\"\n\t\t\t\t\t[placeholder]=\"'Type name here...'\"\n\t\t\t\t\t[formCtrl]=\"form.controls['itemName']\"\n\t\t\t\t></app-ui-input>\n\t\t\t</div>\n\t\t\t<div class=\"button\">\n\t\t\t\t<app-ui-button\n\t\t\t\t\t[value]=\"'Add new'\"\n\t\t\t\t\t(onClick)=\"addNewItem(form)\"\n\t\t\t\t></app-ui-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"list-of-items\" *ngIf=\"itemList.length > 0\">\n\t\t<app-item *ngFor=\"let item of itemList\"\n\t\t\t\t  [item]=\"item\"\n\t\t\t\t  [isActive]=\"selectedItem && selectedItem.id === item.id\"\n\t\t\t\t  (onDeleteItem)=\"deleteItem(item)\"\n\t\t\t\t  (onSelectItem)=\"selectItem(item)\"\n\t\t></app-item>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/items-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/items-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items-list {\n  position: absolute;\n  left: 22%;\n  width: 35%;\n  top: 50px;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);\n  min-height: 60%;\n  background-color: #ffffff;\n  padding: 0 20px; }\n  .items-list h1.caption {\n    margin-top: 10px;\n    font-size: 35px;\n    font-weight: 300; }\n  .items-list .form .row .input {\n    width: 70%;\n    display: inline-block;\n    margin-right: 5%;\n    min-height: 50px;\n    vertical-align: top; }\n  .items-list .form .row .button {\n    width: 25%;\n    min-height: 50px;\n    vertical-align: top;\n    display: inline-block; }\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/items-list/items-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home-page/components/items-list/items-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function() { return ItemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_formsGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/formsGenerator */ "./src/app/helpers/formsGenerator.ts");
/* harmony import */ var _models_Item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/Item.model */ "./src/app/models/Item.model.ts");
/* harmony import */ var _services_item_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/item/item.service */ "./src/app/services/item/item.service.ts");
/* harmony import */ var _services_item_comment_communicate_item_comment_communicate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/item-comment-communicate/item-comment-communicate.service */ "./src/app/services/item-comment-communicate/item-comment-communicate.service.ts");
/* harmony import */ var _decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../decorators/unsubscribe.decorator */ "./src/app/decorators/unsubscribe.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsListComponent = /** @class */ (function () {
    function ItemsListComponent(itemService, itemCommentCommunicateService) {
        var _this = this;
        this.itemService = itemService;
        this.itemCommentCommunicateService = itemCommentCommunicateService;
        this.itemList = [];
        this.selectedItem = null;
        this.addNewItem = function (form) {
            if (!form.valid) {
                return;
            }
            var item = new _models_Item_model__WEBPACK_IMPORTED_MODULE_2__["ItemModel"](form.value.itemName);
            _this.itemList = _this.itemService.saveItem(item);
            _this.form.reset();
        };
        this.deleteItem = function (itemToDelete) {
            _this.itemList = _this.itemService.deleteItem(itemToDelete);
        };
        this.selectItem = function (item) {
            _this.selectedItem = item;
            _this.itemCommentCommunicateService.setSelectedItem(_this.selectedItem);
        };
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        this.form = _helpers_formsGenerator__WEBPACK_IMPORTED_MODULE_1__["formGenerator"].getNewItemForm();
        this.itemList = this.itemService.getItems();
    };
    ItemsListComponent.prototype.ngOnDestroy = function () { };
    ItemsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-list',
            template: __webpack_require__(/*! ./items-list.component.html */ "./src/app/pages/home-page/components/items-list/items-list.component.html"),
            styles: [__webpack_require__(/*! ./items-list.component.scss */ "./src/app/pages/home-page/components/items-list/items-list.component.scss")]
        }),
        Object(_decorators_unsubscribe_decorator__WEBPACK_IMPORTED_MODULE_5__["AutoUnsubscribe"])(),
        __metadata("design:paramtypes", [_services_item_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _services_item_comment_communicate_item_comment_communicate_service__WEBPACK_IMPORTED_MODULE_4__["ItemCommentCommunicateService"]])
    ], ItemsListComponent);
    return ItemsListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/components/side-menu/side-menu.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home-page/components/side-menu/side-menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu\">\n\t<div class=\"header\">\n\t\t<h1>\n\t\t\tDairy app\n\t\t</h1>\n\t\t<p>\n\t\t\tComment with yes sense\n\t\t</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/side-menu/side-menu.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home-page/components/side-menu/side-menu.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 20%;\n  background-color: #3f3f56; }\n  .side-menu .header {\n    width: 100%;\n    margin: 20px 0; }\n  .side-menu .header h1 {\n      color: #ffffff;\n      text-transform: uppercase;\n      font-size: 30px;\n      font-weight: 300;\n      text-align: center; }\n  .side-menu .header p {\n      font-size: 14px;\n      font-weight: 300;\n      text-align: center;\n      color: #bbb7b7; }\n"

/***/ }),

/***/ "./src/app/pages/home-page/components/side-menu/side-menu.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/home-page/components/side-menu/side-menu.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/pages/home-page/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/pages/home-page/components/side-menu/side-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-menu></app-side-menu>\n<app-items-list></app-items-list>\n<app-comments-list></app-comments-list>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/services/item-comment-communicate/item-comment-communicate.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/item-comment-communicate/item-comment-communicate.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemCommentCommunicateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCommentCommunicateService", function() { return ItemCommentCommunicateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemCommentCommunicateService = /** @class */ (function () {
    function ItemCommentCommunicateService() {
        var _this = this;
        this.emitSelectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setSelectedItem = function (item) {
            _this.selectedItem = item;
            _this.emitSelectedItem.emit(item);
        };
        this.getSelectedItem = function () {
            return _this.selectedItem;
        };
    }
    ItemCommentCommunicateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ItemCommentCommunicateService);
    return ItemCommentCommunicateService;
}());



/***/ }),

/***/ "./src/app/services/item/item.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/item/item.service.ts ***!
  \***********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Item.model */ "./src/app/models/Item.model.ts");
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/localStorageHelper */ "./src/app/helpers/localStorageHelper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = /** @class */ (function () {
    function ItemService() {
        var _this = this;
        this.itemList = [];
        this.ITEM_LIST_LOCAL_STORAGE_NAME = 'items';
        this.saveItem = function (item) {
            if (_this.itemList.length === 0)
                _this.itemList = _this.getItems();
            _this.itemList.push(item);
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["localStorageHelper"].setItem(_this.itemList, _this.ITEM_LIST_LOCAL_STORAGE_NAME);
            return _this.itemList;
        };
        this.getItems = function () {
            if ((_this.itemList.length === 0) && _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["localStorageHelper"].getItem(_this.ITEM_LIST_LOCAL_STORAGE_NAME)) {
                _this.itemList = JSON.parse(_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["localStorageHelper"].getItem(_this.ITEM_LIST_LOCAL_STORAGE_NAME));
            }
            _this.itemList = _this.itemList.map(function (item) { return new _models_Item_model__WEBPACK_IMPORTED_MODULE_1__["ItemModel"](item.name, item.id, item.comments); });
            return _this.itemList;
        };
        this.updateItem = function (itemForUpdate) {
            _this.itemList = _this.itemList.filter(function (item) { return (item.id !== itemForUpdate.id); });
            _this.itemList.push(itemForUpdate);
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["localStorageHelper"].setItem(_this.itemList, _this.ITEM_LIST_LOCAL_STORAGE_NAME);
        };
        this.deleteItem = function (itemForDelete) {
            if (_this.itemList.length === 0)
                _this.itemList = _this.getItems();
            _this.itemList = _this.itemList.filter(function (item) { return (item.id !== itemForDelete.id); });
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["localStorageHelper"].setItem(_this.itemList, _this.ITEM_LIST_LOCAL_STORAGE_NAME);
            return _this.itemList;
        };
    }
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/WebstormProjects/empeek-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map