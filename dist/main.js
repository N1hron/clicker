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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  var startButton = document.querySelector('.clicker__btn-start'),\n    timerField = document.querySelector('.clicker__timer'),\n    zone = document.querySelector('.clicker__zone'),\n    scoreField = document.querySelector('.clicker__score'),\n    resultTime = document.querySelector('.statistics__time'),\n    resultScore = document.querySelector('.statistics__score'),\n    resultCPS = document.querySelector('.statistics__cps'),\n    liveCps = document.querySelector('.clicker__cps'),\n    target = createTarget();\n  var data = {\n    startTime: 10000,\n    current: 0,\n    passed: 0,\n    minutesLeft: 0,\n    secondsLeft: 0,\n    minutesPassed: 0,\n    secondsPassed: 0,\n    onlySeconds: 0,\n    left: 0,\n    score: 0,\n    intervalId: null,\n    intervalCpsId: null,\n    clicksPerSecond: 0\n  };\n  zone.appendChild(target);\n  updateTimer(data.startTime);\n  zone.addEventListener('click', function (event) {\n    if (event.target == target) {\n      if (data.intervalId) {\n        increaseScore(1);\n        relocateTarget(target);\n      }\n    } else {\n      if (data.intervalId) {\n        increaseScore(-1);\n      }\n    }\n  });\n  startButton.addEventListener('click', function () {\n    if (data.intervalId) {\n      onStop();\n    } else {\n      onStart();\n    }\n  });\n\n  // Functions\n\n  function setResults() {\n    resultTime.textContent = \"\".concat(data.minutesPassed, \":\").concat(data.secondsPassed);\n    resultScore.textContent = data.score;\n    resultCPS.textContent = data.clicksPerSecond;\n  }\n  function onStop() {\n    calcClicksPerSecond();\n    setResults();\n    clearInterval(data.intervalId);\n    data.intervalId = null;\n    clearInterval(data.intervalCpsId);\n    data.intervalCpsId = null;\n    target.style.display = 'none';\n    startButton.textContent = 'START';\n    resetScore();\n    resetCps();\n    updateTimer(data.startTime);\n  }\n  function onStart() {\n    initTimer();\n    relocateTarget();\n    target.style.display = 'block';\n    startButton.textContent = 'STOP';\n  }\n  function initTimer() {\n    var start = Date.parse(new Date());\n    data.intervalCpsId = setInterval(function () {\n      calcClicksPerSecond();\n      liveCps.textContent = 'CPS: ' + data.clicksPerSecond;\n    }, 100);\n    data.intervalId = setInterval(function () {\n      data.current = Date.parse(new Date());\n      data.passed = data.current - start;\n      console.log(data.passed);\n      data.left = data.startTime - data.passed;\n      data.onlySeconds = Math.floor(data.passed / 1000);\n      data.minutesPassed = insertZeros(Math.floor(data.passed / 60000));\n      data.secondsPassed = insertZeros(Math.floor(data.passed % 60000 / 1000));\n      if (data.passed >= data.startTime) {\n        onStop();\n      } else {\n        updateTimer(data.left);\n      }\n    }, 1000);\n  }\n  function calcClicksPerSecond() {\n    if (data.onlySeconds != 0) {\n      data.clicksPerSecond = (data.score / data.onlySeconds).toFixed(2);\n    } else {\n      data.clicksPerSecond = '0.00';\n    }\n  }\n  function updateTimer(milliseconds) {\n    data.minutesLeft = insertZeros(Math.floor(milliseconds / 60000));\n    data.secondsLeft = insertZeros(Math.floor(milliseconds % 60000 / 1000));\n    console.log(milliseconds);\n    timerField.textContent = \"\".concat(data.minutesLeft, \" : \").concat(data.secondsLeft);\n  }\n  function resetCps() {\n    data.clicksPerSecond = '0.00';\n    liveCps.textContent = 'CPS: ' + data.clicksPerSecond;\n  }\n  function resetScore() {\n    data.score = 0;\n    scoreField.textContent = 'SCORE: ' + data.score;\n  }\n  function increaseScore(num) {\n    data.score += num;\n    scoreField.textContent = 'SCORE: ' + data.score;\n  }\n  function relocateTarget() {\n    target.style.left = generateCoordinate();\n    target.style.bottom = generateCoordinate();\n  }\n  function generateCoordinate() {\n    return Math.floor(Math.random() * (497 - 15) + 15) - 15 + 'px';\n  }\n  function insertZeros(time) {\n    return (time + '').length < 2 ? '0' + time : time;\n  }\n  function createTarget() {\n    var target = document.createElement('div');\n    target.classList.add('target');\n    target.style.display = 'none';\n    return target;\n  }\n});\n\n//# sourceURL=webpack://webpack-test/./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;