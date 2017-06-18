/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var MusicPlayer = document.createElement('div');\n  MusicPlayer.textContent = \"Hi there and MusicPlayerings!\";\n  return MusicPlayer;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9NdXNpY1BsYXllci5qcz82MmMxIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJNdXNpY1BsYXllciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsTUFBSUMsY0FBY0MsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRixjQUFZRyxXQUFaLEdBQTBCLCtCQUExQjtBQUNBLFNBQU9ILFdBQVA7QUFDRCxDQUpEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgTXVzaWNQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBNdXNpY1BsYXllci50ZXh0Q29udGVudCA9IFwiSGkgdGhlcmUgYW5kIE11c2ljUGxheWVyaW5ncyFcIlxuICByZXR1cm4gTXVzaWNQbGF5ZXJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9NdXNpY1BsYXllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar music = __webpack_require__(0);\ndocument.getElementById('root').appendChild(music());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/ZDhlZSJdLCJuYW1lcyI6WyJtdXNpYyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQVo7QUFDQUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsV0FBaEMsQ0FBNENKLE9BQTVDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXVzaWMgPSByZXF1aXJlKCcuL011c2ljUGxheWVyLmpzJyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZENoaWxkKG11c2ljKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);