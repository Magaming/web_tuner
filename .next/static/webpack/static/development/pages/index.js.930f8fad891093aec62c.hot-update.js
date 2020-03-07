webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./pages/consts.ts");
var _jsxFileName = "/Users/magami_yu/dev/web_tuner/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Home = function Home() {
  var sound = function sound(freq) {
    var audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(audioCtx.destination);
    oscillator.start(); // 1秒後に音を止める

    setTimeout(function () {
      oscillator.stop();
    }, 1000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Web Tuner"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['E3']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "E"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['A3']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "A"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['D4']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "D"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['G4']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "G"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.930f8fad891093aec62c.hot-update.js.map