webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/consts.ts":
/*!*************************!*\
  !*** ./pages/consts.ts ***!
  \*************************/
/*! exports provided: scales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return scales; });
var scales = {
  'A0': 27.5,
  'A#0': 29.135,
  'B0': 30.868,
  'C1': 32.703,
  'C#1': 34.648,
  'D1': 36.708,
  'D#1': 38.891,
  'E1': 41.203,
  'F1': 43.654,
  'F#1': 46.249,
  'G1': 48.999,
  'G#1': 51.913,
  'A1': 55,
  'A#1': 58.27,
  'B1': 61.735,
  'C2': 65.406,
  'C#2': 69.296,
  'D2': 73.416,
  'D#2': 77.782,
  'E2': 82.407,
  'F2': 87.307,
  'F#2': 92.499,
  'G2': 97.999,
  'G#2': 103.826,
  'A2': 110,
  'A#2': 116.541,
  'B2': 123.471,
  'C3': 130.813,
  'C#3': 138.591,
  'D3': 146.832,
  'D#3': 155.563,
  'E3': 164.814,
  'F3': 174.614,
  'F#3': 184.997,
  'G3': 195.998,
  'G#3': 207.652,
  'A3': 220,
  'A#3': 233.082,
  'B3': 246.942,
  'C4': 261.626,
  'C#4': 277.183,
  'D4': 293.665,
  'D#4': 311.127,
  'E4': 329.628,
  'F': 349.228,
  'F#4': 369.994,
  'G4': 391.995,
  'G#4': 415.305,
  'A4': 440,
  'A#4': 466.164,
  'B4': 493.883,
  'C5': 523.251,
  'C#5': 554.365,
  'D5': 587.33,
  'D#5': 622.254,
  'E5': 659.255,
  'F5': 698.456,
  'F#5': 739.989,
  'G5': 783.991,
  'G#5': 830.609,
  'A5': 880,
  'A#5': 932.328,
  'B5': 987.767,
  'C6': 1046.502,
  'C#6': 1108.731,
  'D6': 1174.659,
  'D#6': 1244.508,
  'E6': 1318.51,
  'F6': 1396.913,
  'F#6': 1479.978,
  'G6': 1567.982,
  'G#6': 1661.219,
  'A6': 1760,
  'A#6': 1864.655,
  'B6': 1975.533,
  'C7': 2093.005,
  'C#7': 2217.461,
  'D7': 2349.318,
  'D#7': 2489.016,
  'E7': 2637.02,
  'F7': 2793.826,
  'F#7': 2959.955,
  'G7': 3135.963,
  'G#7': 3322.438,
  'A7': 3520,
  'A#7': 3729.31,
  'B7': 3951.066,
  'C8': 4186.00
};

/***/ }),

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
    oscillator.start();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Web Tuner"), __jsx("button", {
    onClick: function onClick() {
      return sound(_consts__WEBPACK_IMPORTED_MODULE_1__["scales"]['E1']);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "E"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "A"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "D"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "G"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c79b5d63b2946a6839de.hot-update.js.map