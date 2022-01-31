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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n    const body = document.querySelector('body');\n    const footer = document.createElement('footer');\n\n    const footerText = document.createElement('p');\n    footerText.textContent = 'Created by Sam Baldwin';\n\n    const gitHubLogo = document.createElement('img')\n    gitHubLogo.src = '../dist/res/GitHub-Mark-Light-32px.png';\n    gitHubLogo.alt = '';\n\n    const gitHubLink = document.createElement('a');\n    gitHubLink.href = 'https://github.com/SBaldwin-Git/Cafe-Website';\n\n    footer.appendChild(footerText);\n    footer.appendChild(gitHubLink).appendChild(gitHubLogo);\n    body.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n\n\n    header.appendChild(createHeading());\n    header.appendChild(createNavBar());\n    body.insertBefore(header, document.querySelector('#content'));\n}\n\nfunction createHeading() {\n    const shopHeader = document.createElement('h1');\n\n    shopHeader.textContent = 'Cafe Naples';\n    shopHeader.classList.add('cafeName');\n\n    return shopHeader;\n}\n\nfunction createNavBar() {\n\n    const navBar = document.createElement('ul');\n    const navHome = document.createElement('li');\n    const navMenu = document.createElement('li');\n    const navConact = document.createElement('li');\n\n    const navHomeAnchor = document.createElement('a');\n    const navMenuAnchor = document.createElement('a');\n    const navContactAnchor = document.createElement('a');\n\n    navHomeAnchor.href = '';\n    navMenuAnchor.href = '';\n    navContactAnchor.href = '';\n\n    navHomeAnchor.textContent = 'Home';\n    navMenuAnchor.textContent = 'Menu';\n    navContactAnchor.textContent = 'Contact';\n\n    navBar.appendChild(navHome).appendChild(navHomeAnchor);\n    navBar.appendChild(navMenu).appendChild(navMenuAnchor);\n    navBar.appendChild(navConact).appendChild(navContactAnchor);\n\n    return navBar;\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n\n    const content = document.getElementById('content');\n\n    //TODO LIST\n    //Customer reviews\n    //Opening times and location\n\n    content.appendChild(createSlogan());\n}\n\nfunction createSlogan(){\n\n    const sloganDiv = document.createElement('div');\n    const sloganText = document.createElement('h2');\n\n    sloganDiv.classList.add('sloganContainer');\n    sloganText.classList.add('sloganText');\n\n    sloganText.textContent = 'FRESHLY BREWED COFFEE, YOUR WAY, EVERYDAY';\n\n    sloganDiv.appendChild(sloganText);\n\n    return sloganDiv;\n}\n\nfunction createReview(){\n\n}\n\nfunction createOpeningTimes(){\n\n}\n\n\n\n//# sourceURL=webpack://restaurant_odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.createHome)();\n(0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n\n//# sourceURL=webpack://restaurant_odin/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;