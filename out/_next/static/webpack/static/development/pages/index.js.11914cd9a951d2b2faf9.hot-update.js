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
    console.log(freq);
    var audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Web Tuner"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['E1']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "E"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['A1']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "A"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['D2']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "D"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['G2']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "G"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.11914cd9a951d2b2faf9.hot-update.js.map