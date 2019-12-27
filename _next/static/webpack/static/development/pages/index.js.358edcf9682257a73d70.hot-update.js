webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/utilities.js":
/*!*********************************!*\
  !*** ./components/utilities.js ***!
  \*********************************/
/*! exports provided: pInline, pBlock, reverseString, convertCharToByte, convertStringToBytes, convertByteToText, convertBytesToText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pInline", function() { return pInline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pBlock", function() { return pBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseString", function() { return reverseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCharToByte", function() { return convertCharToByte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertStringToBytes", function() { return convertStringToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertByteToText", function() { return convertByteToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBytesToText", function() { return convertBytesToText; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

function pInline(val) {
  return {
    paddingLeft: val,
    paddingRight: val
  };
}
function pBlock(val) {
  return {
    paddingTop: val,
    paddingBottom: val
  };
}
function reverseString(string) {
  var _s = string.split('');

  _s = _s.reverse();
  return _s.join('');
}
function convertCharToByte(_char) {
  return reverseString(_char.charCodeAt(0).toString(2).padStart(8, '0'));
}
function convertStringToBytes(string) {
  var chars = string.split('');
  if (chars.length === 0) chars = [' '];
  var binary = chars.map(function (_char2) {
    return convertCharToByte(_char2);
  });
  return binary;
}
function convertByteToText(_byte) {
  var rev_byte = reverseString(_byte);
  return String.fromCharCode(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(rev_byte, 2));
}
function convertBytesToText(bytes) {
  var char_array = bytes.map(function (_byte2) {
    return convertByteToText(_byte2);
  });
  return char_array.join('');
}

/***/ })

})
//# sourceMappingURL=index.js.358edcf9682257a73d70.hot-update.js.map