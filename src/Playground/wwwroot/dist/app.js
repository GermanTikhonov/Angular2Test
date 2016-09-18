webpackJsonp([0],{

/***/ 0:
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 23);
	var platform = platform_browser_dynamic_1.platformBrowserDynamic();
	platform.bootstrapModule(app_module_1.AppModule);
	if (true) {
	    module.hot.accept();
	}


/***/ },

/***/ 23:
/*!******************************!*\
  !*** ./client/app.module.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 24);
	var user_service_1 = __webpack_require__(/*! ./services/user.service */ 25);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule],
	            declarations: [app_component_1.AppComponent],
	            bootstrap: [app_component_1.AppComponent],
	            providers: [user_service_1.UserService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/*!*********************************!*\
  !*** ./client/app.component.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var user_service_1 = __webpack_require__(/*! ./services/user.service */ 25);
	var AppComponent = (function () {
	    function AppComponent(userService) {
	        this.userService = userService;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 26),
	            styleUrls: [__webpack_require__(/*! ./app.component.scss */ 27)]
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 25:
/*!*****************************************!*\
  !*** ./client/services/user.service.ts ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var UserService = (function () {
	    function UserService() {
	        this.name = 'notSetted';
	    }
	    UserService.prototype.setName = function (name) {
	        this.name = name;
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], UserService);
	    return UserService;
	}());
	exports.UserService = UserService;


/***/ },

/***/ 26:
/*!***********************************!*\
  !*** ./client/app.component.html ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "<h1>My First Angular 2 App!!!! Hi, {{userService.name}}</h1>\r\n<button class=\"btn\" (click)=\"userService.setName('test')\">Set name!</button> reloadedssssss"

/***/ },

/***/ 27:
/*!***********************************!*\
  !*** ./client/app.component.scss ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.component.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.component.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.component.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ }

});
//# sourceMappingURL=app.js.map