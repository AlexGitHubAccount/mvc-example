/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/model.js */ \"./js/model.js\");\n/* harmony import */ var _js_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/view */ \"./js/view.js\");\n/* harmony import */ var _js_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/controller */ \"./js/controller.js\");\n\r\n\r\n\r\n\r\n\r\nlet model = new _js_model_js__WEBPACK_IMPORTED_MODULE_0__.GalleryModel([\"images/photo-01.jpg\", \"images/photo-02.jpg\", \"images/photo-03.jpg\"]),\r\n    view = new _js_view__WEBPACK_IMPORTED_MODULE_1__.LikeView({\r\n        likeButton: document.querySelector(\".like__like-btn\"),\r\n        prevButton: document.querySelector(\".like__prev-btn\"),\r\n        nextButton: document.querySelector(\".like__next-btn\"),\r\n        imagePlaceholder: document.querySelector(\".like__image\"),\r\n        likeNum: document.querySelector(\".like__like-num\")\r\n    }),\r\n    controller = new _js_controller__WEBPACK_IMPORTED_MODULE_2__.GalleryController(model, view);\n\n//# sourceURL=webpack://task-01/./index.js?");

/***/ }),

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryController\": () => (/* binding */ GalleryController)\n/* harmony export */ });\nclass GalleryController {\r\n    constructor(model, view) {\r\n        this._model = model;\r\n        this._view = view;\r\n\r\n        this._view.onLikeButtonClick.attach(this.addLike.bind(this));\r\n        this._view.onPrevButtonClick.attach(this.setPrevImage.bind(this));\r\n        this._view.onNextButtonClick.attach(this.setNextImage.bind(this));\r\n\r\n        this._model.onUpdate.attach(this.updateView.bind(this));\r\n\r\n        const initialData = this._model.getData();\r\n        this.updateView(initialData);\r\n    }\r\n\r\n    addLike() {\r\n        this._model.addLike();\r\n    }\r\n\r\n    setPrevImage() {\r\n        this._model.decrementPhotoIndex();\r\n    }\r\n\r\n    setNextImage() {\r\n        this._model.incrementPhotoIndex();\r\n    }\r\n\r\n    updateView(data) {\r\n        this._view.update(data);\r\n    }\r\n}\n\n//# sourceURL=webpack://task-01/./js/controller.js?");

/***/ }),

/***/ "./js/event.js":
/*!*********************!*\
  !*** ./js/event.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => (/* binding */ Event)\n/* harmony export */ });\n//observer pattern realization\r\nclass Event {\r\n    constructor() {\r\n        this._listeners = [];\r\n    }\r\n\r\n    attach(listener) {\r\n        this._listeners.push(listener);\r\n    }\r\n\r\n    notify(args) {\r\n        this._listeners.forEach(listener => listener(args));\r\n    }\r\n}\n\n//# sourceURL=webpack://task-01/./js/event.js?");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryModel\": () => (/* binding */ GalleryModel)\n/* harmony export */ });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./js/event.js\");\n\r\n\r\nclass GalleryModel {\r\n    constructor(photos) {\r\n        const gallery = photos.map(photo => {\r\n            return {photo, likes: 0}\r\n        });\r\n\r\n        this._data = {\r\n            gallery,\r\n            currentPhotoIndex: 0\r\n        }\r\n\r\n        this.onUpdate = new _event__WEBPACK_IMPORTED_MODULE_0__.Event();\r\n    }\r\n\r\n    _notifyAboutUpdates() {\r\n        const currentPhoto = this.getData();\r\n\r\n        console.log(currentPhoto)\r\n\r\n        this.onUpdate.notify(currentPhoto);\r\n    }\r\n\r\n    getCurrentPhotoIndex() {\r\n        return this._data.currentPhotoIndex;\r\n    }\r\n\r\n    setCurrentPhotoIndex(index) {\r\n        this._data.currentPhotoIndex = index;\r\n    }\r\n\r\n    getData() {\r\n        return this._data.gallery[this.getCurrentPhotoIndex()];\r\n    }\r\n\r\n    addLike() {\r\n        this._data.gallery[this.getCurrentPhotoIndex()].likes += 1;\r\n        this._notifyAboutUpdates();\r\n    }\r\n\r\n    decrementPhotoIndex() {\r\n        const index = this.getCurrentPhotoIndex();\r\n\r\n        if (index > 0) {\r\n            this.setCurrentPhotoIndex(index - 1);\r\n            this._notifyAboutUpdates();\r\n        }\r\n    }\r\n\r\n    incrementPhotoIndex() {\r\n        const index = this.getCurrentPhotoIndex();\r\n\r\n        if (index < this._data.gallery.length - 1) {\r\n            this.setCurrentPhotoIndex(index + 1);\r\n            this._notifyAboutUpdates();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://task-01/./js/model.js?");

/***/ }),

/***/ "./js/view.js":
/*!********************!*\
  !*** ./js/view.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LikeView\": () => (/* binding */ LikeView)\n/* harmony export */ });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./js/event.js\");\n\r\n\r\nclass LikeView {\r\n    constructor(elements) {\r\n        this._elements = elements;\r\n\r\n        this.onLikeButtonClick = new _event__WEBPACK_IMPORTED_MODULE_0__.Event();\r\n        this.onPrevButtonClick = new _event__WEBPACK_IMPORTED_MODULE_0__.Event();\r\n        this.onNextButtonClick = new _event__WEBPACK_IMPORTED_MODULE_0__.Event();\r\n\r\n        this._elements.likeButton.addEventListener(\"click\", () => {\r\n            this.onLikeButtonClick.notify();\r\n        });\r\n        this._elements.prevButton.addEventListener(\"click\", () => {\r\n            this.onPrevButtonClick.notify();\r\n        });\r\n        this._elements.nextButton.addEventListener(\"click\", () => {\r\n            this.onNextButtonClick.notify();\r\n        });\r\n    }\r\n\r\n    update({photo, likes}) {\r\n        this._elements.imagePlaceholder.style.backgroundImage = 'url(' + photo + \")\";\r\n        this._elements.likeNum.innerHTML = likes;\r\n    }\r\n}\n\n//# sourceURL=webpack://task-01/./js/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;