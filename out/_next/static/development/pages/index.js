(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/*! exports provided: plain_text, short_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plain_text", function() { return plain_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "short_text", function() { return short_text; });
var plain_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off \u2014 then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n\nThere now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs \u2014 commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.";
var short_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.";

/***/ }),

/***/ "./components/keycap.js":
/*!******************************!*\
  !*** ./components/keycap.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/grant/sites/constraint-systems/bix/components/keycap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Keycap = function Keycap(_ref) {
  var k = _ref.k,
      label = _ref.label,
      clickKey = _ref.clickKey;
  return __jsx("div", {
    style: {
      userSelect: 'none',
      MozUserSelect: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("span", {
    style: {
      outline: 'solid 1px black',
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch',
      background: 'white',
      cursor: 'default'
    },
    onClick: function onClick() {
      clickKey(k);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, k), label !== '' ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " ", __jsx("span", {
    style: {
      marginRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, label)) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Keycap);

/***/ }),

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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fsites%2Fconstraint-systems%2Fbix%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fsites%2Fconstraint-systems%2Fbix%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_e9ad7d891b372a4221cf ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e9ad7d891b372a4221cf */ "dll-reference dll_e9ad7d891b372a4221cf"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/constants */ "./components/constants.js");
/* harmony import */ var _components_keycap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/keycap */ "./components/keycap.js");
/* harmony import */ var _components_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/utilities */ "./components/utilities.js");








var _jsxFileName = "/home/grant/sites/constraint-systems/bix/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




 // let short_text = `Rachel: Can I ask you a personal question?
// Deckard: Sure.
// Rachel: Have you ever retired a human by mistake?
// Deckard: No.
// Rachel: But in your position that is a risk.`;

var fs = 16;
var lh = 1.5; // let lh = 1.1999988555908203;

var rlh = fs * lh;
var keys_used = 'hjklfdeastw?uiUI';
var bs = 6;
var byte_cols = 1;
var byte_rows = 8;
var byte_width = byte_cols * bs;
var byte_height = byte_rows * bs;
var red = '#fb4934';
var green = '#b8bb26';
var yellow = '#fab2f';
var blue = '#83a598';
var purple = '#d3869b';
var aqua = '#8ec07c';

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(_components_constants__WEBPACK_IMPORTED_MODULE_10__["short_text"]),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(_components_constants__WEBPACK_IMPORTED_MODULE_10__["short_text"]),
      display_text = _useState2[0],
      setDisplayText = _useState2[1];

  var textarea_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var textdiv_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var canvas_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var canvas_overlay_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var container_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var cursor_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])([0, 0, bs, bs]);
  var keymap_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])({});
  var byte_holder_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])([0, 0]);
  var offset_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])([0, 0]);
  var readout_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  var width_ref = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(); // let [help, setHelp] = useState(true);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(true),
      help = _useState3[0],
      setHelp = _useState3[1];

  function clickKey(key) {
    var km = keymap_ref.current;
    km[key] = true;
    keyAction({
      key: key
    }, false);
    setTimeout(function () {
      km[key] = false;
    }, 0);
  }

  function setSize(width) {
    width_ref.current = width;
    container_ref.current.style.width = width + 'px';
  }

  function changeBit(val) {
    var cursor = cursor_ref.current;
    var byte_holder = byte_holder_ref.current;
    var bytes = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertStringToBytes"])(text);
    var byte_x = Math.floor(cursor[0] / (byte_cols * bs));
    var byte_y = Math.floor(cursor[1] / (byte_rows * bs));
    var byte_index = byte_y * byte_holder[0] + byte_x;
    var bit_x = (cursor[0] - byte_x * byte_cols * bs) / bs;
    var bit_y = (cursor[1] - byte_y * byte_rows * bs) / bs;
    var bit_index = bit_y * byte_cols + bit_x;
    var bexpand = bytes[byte_index].split('');
    var current_bit = bexpand[bit_index];
    var new_bit;

    if (val === 'f') {
      new_bit = 1 - current_bit;
    } else {
      new_bit = val;
    }

    if (current_bit !== new_bit.toString()) {
      bexpand[bit_index] = new_bit.toString();
      var bcontract = bexpand.join('');
      bytes[byte_index] = bcontract;
      var new_text = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertBytesToText"])(bytes);
      setText(new_text);
    } else {
      move();
    }
  }

  function mathByte(operation) {
    var cursor = cursor_ref.current;
    var byte_holder = byte_holder_ref.current;
    var bytes = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertStringToBytes"])(text);
    var byte_x = Math.floor(cursor[0] / (byte_cols * bs));
    var byte_y = Math.floor(cursor[1] / (byte_rows * bs));
    var byte_index = byte_y * byte_holder[0] + byte_x;

    var _byte = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["reverseString"])(bytes[byte_index]);

    var min = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()('00000000', 2);

    var max = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()('11111111', 2);

    var new_byte;

    if (operation === 'subtract') {
      new_byte = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(_byte, 2) - 1;
    } else {
      new_byte = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(_byte, 2) + 1;
    }

    if (new_byte < min) new_byte = min;
    if (new_byte > max) new_byte = max;
    bytes[byte_index] = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["reverseString"])(new_byte.toString(2));
    var new_text = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertBytesToText"])(bytes);
    setText(new_text);
  }

  function move() {
    var textdiv = textdiv_ref.current;
    var cursor = cursor_ref.current;
    var byte_holder = byte_holder_ref.current;
    var offset = offset_ref.current;
    var readout = readout_ref.current;
    var bytes = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertStringToBytes"])(text);
    var overlay = canvas_overlay_ref.current;
    var otx = overlay.getContext('2d');
    var offset_x = offset[0];
    var offset_y = offset[1];
    var byte_holder_cols = byte_holder[0];
    var byte_holder_rows = byte_holder[1];
    var byte_holder_width = byte_holder_cols * byte_cols * bs;
    var byte_holder_height = byte_holder_rows * byte_rows * bs;
    overlay.width = byte_holder_width + offset_x * 2;
    overlay.height = byte_holder_height + offset_y * 2;
    otx.clearRect(0, 0, overlay.width, overlay.height);
    otx.strokeStyle = '#888';
    otx.lineWidth = 1;

    for (var i = 0; i < bytes.length; i++) {
      var x = i % byte_holder_cols * byte_cols * bs + offset_x;
      var y = Math.floor(i / byte_holder_cols) * byte_rows * bs + offset_y; // otx.strokeRect(x, y, byte_cols * bs, byte_rows * bs);
    }

    var byte_index = Math.floor(cursor[1] / byte_height) * byte_holder_cols + Math.floor(cursor[0] / byte_width);
    var byte_x = byte_index % byte_holder_cols * byte_cols * bs;
    var byte_y = Math.floor(byte_index / byte_holder_cols) * byte_rows * bs;
    var bit_x = (cursor[0] - byte_x) / bs;
    var bit_y = (cursor[1] - byte_y) / bs;
    var bit_index = bit_y * byte_cols + bit_x; // clean up byte index if it is outside the bounds

    if (byte_index > bytes.length - 1) {
      var last_byte_index = bytes.length - 1;
      byte_index = last_byte_index;
      byte_x = last_byte_index % byte_holder[0] * byte_cols * bs;
      byte_y = Math.floor(last_byte_index / byte_holder[0]) * byte_rows * bs;
      cursor[0] = byte_x + bit_x * bs;
      cursor[1] = byte_y + bit_y * bs;
    }

    otx.strokeStyle = blue;
    otx.lineWidth = 2;
    otx.strokeRect(byte_x - 1 + offset_x, byte_y - 1 + offset_y, byte_cols * bs + 2, byte_rows * bs + 2);
    otx.strokeStyle = red;
    otx.lineWidth = 2;
    otx.strokeRect(cursor[0] - 1 + offset_x, cursor[1] - 1 + offset_y, bs + 2, bs + 2);
    var display_text = text.slice();
    if (display_text.length === 0) display_text = ' ';
    var display_array = display_text.split('');
    display_array[byte_index] = "<span style=\"background: ".concat(blue, "\">") + display_array[byte_index] + '</span>';
    var new_text = display_array.join('');
    setDisplayText(new_text);

    if (bytes[byte_index] !== undefined) {
      var bit_readout = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["reverseString"])(bytes[byte_index]).split('').map(function (b, i) {
        if (bit_index === 7 - i) {
          return "<span style=\"background: ".concat(red, ";\">").concat(b, "</span>");
        } else {
          return b;
        }
      }).join('');
      bit_readout += "  width: ".concat(width_ref.current);
      readout.innerHTML = "byte ".concat(byte_index.toString().padStart(bytes.length.toString().length, '0'), ": ").concat(bit_readout);
    }
  }

  function respond() {
    var textdiv = textdiv_ref.current;
    var container = container_ref.current;
    var canvas = canvas_ref.current;
    canvas.width = width_ref.current;
    var ctx = canvas.getContext('2d');
    ctx.font = "".concat(fs, "px/").concat(lh, " customono");
    var ch = ctx.measureText('w').width;
    var offset_x = ch * 2;
    var offset_y = rlh;
    offset_ref.current = [offset_x, offset_y];
    var bytes = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertStringToBytes"])(text);
    var byte_width = byte_cols * bs;
    var byte_height = byte_rows * bs;
    var byte_holder_cols = Math.floor(textdiv.offsetWidth / byte_width);
    var byte_holder_rows = Math.ceil(bytes.length / byte_holder_cols);
    byte_holder_ref.current = [byte_holder_cols, Math.max(1, byte_holder_rows)];
    var byte_holder_width = byte_holder_cols * byte_cols * bs;
    var byte_holder_height = byte_holder_rows * byte_rows * bs;
    canvas.width = byte_holder_width + ch * 4;
    canvas.height = byte_holder_height + rlh * 2;

    if (byte_holder_height > textdiv.offsetHeight) {
      container.style.height = byte_holder_height + rlh * 2 + 'px';
    } else {
      canvas.height = textdiv.offsetHeight + rlh * 2;
      container.style.height = textdiv.offsetHeight + rlh * 2 + 'px';
    }

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    for (var byr = 0; byr < byte_holder_rows; byr++) {
      for (var byc = 0; byc < byte_holder_cols; byc++) {
        var byte_index = byr * byte_holder_cols + byc;
        var _byte2 = bytes[byte_index];

        if (_byte2 !== undefined) {
          for (var br = 0; br < byte_rows; br++) {
            for (var bc = 0; bc < byte_cols; bc++) {
              var bit = _byte2.split('')[br * byte_cols + bc];

              if (bit === '1') {
                var x = byc * byte_cols * bs + bc * bs + offset_x;
                var y = byr * byte_rows * bs + br * bs + offset_y;
                ctx.fillRect(x, y, bs, bs);
              }
            }
          }
        }
      }
    }
  }

  function handleText(value) {
    setText(value);
  }

  function keyAction(e) {
    var key = e.key.toLowerCase();
    var repeat = e.repeat;
    var km = keymap_ref.current;
    var cursor = cursor_ref.current;
    var x_inc = bs;
    var y_inc = bs;
    var byte_holder = byte_holder_ref.current;
    var bytes = Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["convertStringToBytes"])(text);
    var byte_index = Math.floor(cursor[1] / byte_height) * byte_holder[0] + Math.floor(cursor[0] / byte_width);
    var byte_x = byte_index % byte_holder[0] * byte_cols * bs;
    var byte_y = Math.floor(byte_index / byte_holder[0]) * byte_rows * bs;
    var prev_cursor = cursor.slice();
    var bit_x = (cursor[0] - byte_x) / bs;
    var bit_y = (cursor[1] - byte_y) / bs;
    var bit_index = bit_y * byte_cols + bit_x;
    if (km['h']) cursor[0] -= x_inc;
    if (km['l']) cursor[0] += x_inc;
    if (km['j']) cursor[1] += y_inc;
    if (km['k']) cursor[1] -= y_inc;
    var new_byte_index = Math.floor(cursor[1] / byte_height) * byte_holder[0] + Math.floor(cursor[0] / byte_width);

    if (new_byte_index > bytes.length - 1) {
      if (cursor[0] > prev_cursor[0]) {
        cursor[0] = prev_cursor[0];
      }

      if (cursor[1] > prev_cursor[1]) {
        cursor[1] = prev_cursor[1];
      }
    } else {
      if (cursor[0] + cursor[2] > byte_holder[0] * bs) {
        if (bytes[byte_index + 1] !== undefined) {
          cursor[0] = 0;
          cursor[1] += 8 * bs;
        }
      }

      if (cursor[0] < 0) {
        if (byte_index === 0) {
          cursor[0] = 0;
        } else {
          cursor[0] = byte_holder[0] * byte_cols * bs - cursor[2];
          cursor[1] -= 8 * bs;
        }
      }

      if (cursor[1] < 0) {
        cursor[1] = 0;
      }
    }

    var bit_changed = false;

    if (key === 'f' && !repeat || km['f'] && key !== 'f') {
      bit_changed = true;
      changeBit('f');
    } else if (km['d']) {
      bit_changed = true;
      changeBit(1);
    } else if (km['e']) {
      bit_changed = true;
      changeBit(0);
    }

    var shift = e.shiftKey;
    var inc = 10;
    if (shift) inc = 1;

    if (key === 'u' || key === 'arrowleft') {
      var next = width_ref.current - inc;
      if (next < 40) next = 40;
      setSize(next);
      respond();
    } else if (key === 'i' || key === 'arrowright') {
      var _next = width_ref.current + inc;

      setSize(_next);
      respond();
    } // if (km['a'] && !(key === 'a' && repeat)) {


    if (km['a']) {
      bit_changed = true;
      mathByte('add'); // } else if (km['s'] && !(key === 's' && repeat)) {
    } else if (km['s']) {
      bit_changed = true;
      mathByte('subtract');
    }

    if (!bit_changed) move();

    if (key === 't') {
      textarea_ref.current.focus();
      var t = textarea_ref.current;
      t.selectionStart = t.selectionEnd = t.value.length;
    } else if (key === 'w') {
      var link = document.createElement('a');
      link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)); // TODO: set width

      link.setAttribute('download', "bix-width-".concat(width_ref.current, "-").concat(new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, ''), "Z.txt"));
      link.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else if (key === '?') {
      setHelp(function (prevState) {
        return !prevState;
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    respond();
    move();
  }, [text]);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    console.log('keys used', keys_used);
    setSize(window.innerWidth);
    respond();
    move();
  }, []);

  function downHandler(e) {
    var key = e.key.toLowerCase();
    keymap_ref.current[key] = true;
    keyAction(e);
    if (key === 't') e.preventDefault();
  }

  function upHandler(e) {
    var key = e.key.toLowerCase();
    keymap_ref.current[key] = false;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [text]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx("div", {
    ref: container_ref,
    style: {
      background: 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: canvas_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      pointerEvents: 'none'
    },
    ref: canvas_overlay_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }), __jsx("div", {
    style: _objectSpread({
      display: 'grid'
    }, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pInline"])('2ch'), {}, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pBlock"])(rlh), {
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '2ch'
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, __jsx("div", {
    ref: textdiv_ref,
    style: {
      color: 'transparent',
      background: 'white',
      position: 'relative',
      width: '100%',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      pointerEvents: 'none'
    },
    dangerouslySetInnerHTML: {
      __html: display_text + '​'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }), __jsx("textarea", {
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') e.target.blur();
      if (e.shiftKey && e.key === 'Enter') e.target.blur();
      e.stopPropagation();
    },
    onChange: function onChange(e) {
      handleText(e.target.value);
    },
    ref: textarea_ref,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      resize: 'none',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },
    spellCheck: "false",
    value: text,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  })))), __jsx("div", {
    style: _objectSpread({}, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pInline"])('2ch'), {}, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pBlock"])(rlh / 2), {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }),
    ref: readout_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'fixed',
      right: '2ch',
      maxWidth: 'calc(100% - 4ch)',
      bottom: rlh,
      background: 'white',
      fontSize: 15,
      lineHeight: 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'fixed',
      right: '2ch',
      bottom: rlh,
      display: !help ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "?",
    label: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  })), __jsx("div", {
    style: _objectSpread({}, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pInline"])('2ch'), {}, Object(_components_utilities__WEBPACK_IMPORTED_MODULE_12__["pBlock"])(rlh / 2), {
      outline: 'solid 1px black',
      display: help ? 'block' : 'none'
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "Bix let's you draw on binary to glitch text."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, "MOVE"), __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "h",
    label: "previous byte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "j",
    label: "next bit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "k",
    label: "previous bit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "l",
    label: "next byte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "EDIT BINARY"), __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "d",
    label: "draw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "e",
    label: "erase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "f",
    label: "flip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "a",
    label: "add 1 to byte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "s",
    label: "subtract 1 from byte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, "SIZE"), __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "u",
    label: "decrease width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "i",
    label: "increase width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, "SPECIAL"), __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "t",
    label: "edit text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "w",
    label: "save as txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }), __jsx(_components_keycap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    clickKey: clickKey,
    k: "?",
    label: "toggle help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/constraint-systems/bix",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["2969947943", [fs, lh, rlh, rlh * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "View source")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2969947943",
    dynamic: [fs, lh, rlh, rlh * 2],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'customono',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}textarea{border:none;margin:0;font-size:inherit;padding:0;line-height:inherit;font-weight:normal;font:inherit;background:transparent;}textarea:focus{outline:none;background:rgba(0,0,0,0.125);}@media (max-width:800px){.help{max-height:calc(50vh - ").concat(rlh * 2, "px);}.diptych-container{padding-bottom:50vh;}}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9iaXgvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd21CeUIsQUFHZ0MsQUFLRyxBQUtGLEFBR2MsQUFNM0IsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQSxBQVVDLEFBSzRDLEFBR25DLEFBSVQsU0FyREgsQUFZUSxBQU13QixHQVc1QyxBQUdXLENBVXVCLEFBWWxDLENBbERBLEFBa0JhLEFBSWIsS0F6QkEsQ0FpREUsQ0FwRWlELEFBbUQvQixDQTFDcEIsRUFKbUQsQ0FvQ25ELEVBVnNCLFFBbkJxQixJQXdDL0IsR0FTWixLQTdCcUIsRUFxQkMsRUFoQnRCLElBNEJFLFdBaENGLEdBcUJxQixPQXpDc0IsWUEwQzVCLGFBQ1UsZ0JBMUNQLE9BYmxCLEFBd0RBLEdBbkRBLE1BU0EiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvc2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2JpeC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2hvcnRfdGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJztcbmltcG9ydCBLZXljYXAgZnJvbSAnLi4vY29tcG9uZW50cy9rZXljYXAnO1xuaW1wb3J0IHtcbiAgcElubGluZSxcbiAgcEJsb2NrLFxuICBjb252ZXJ0U3RyaW5nVG9CeXRlcyxcbiAgY29udmVydEJ5dGVzVG9UZXh0LFxuICByZXZlcnNlU3RyaW5nLFxufSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcyc7XG5cbi8vIGxldCBzaG9ydF90ZXh0ID0gYFJhY2hlbDogQ2FuIEkgYXNrIHlvdSBhIHBlcnNvbmFsIHF1ZXN0aW9uP1xuLy8gRGVja2FyZDogU3VyZS5cbi8vIFJhY2hlbDogSGF2ZSB5b3UgZXZlciByZXRpcmVkIGEgaHVtYW4gYnkgbWlzdGFrZT9cbi8vIERlY2thcmQ6IE5vLlxuLy8gUmFjaGVsOiBCdXQgaW4geW91ciBwb3NpdGlvbiB0aGF0IGlzIGEgcmlzay5gO1xuXG5sZXQgZnMgPSAxNjtcbmxldCBsaCA9IDEuNTtcbi8vIGxldCBsaCA9IDEuMTk5OTk4ODU1NTkwODIwMztcbmxldCBybGggPSBmcyAqIGxoO1xuXG5sZXQga2V5c191c2VkID0gJ2hqa2xmZGVhc3R3P3VpVUknO1xuXG5sZXQgYnMgPSA2O1xubGV0IGJ5dGVfY29scyA9IDE7XG5sZXQgYnl0ZV9yb3dzID0gODtcbmxldCBieXRlX3dpZHRoID0gYnl0ZV9jb2xzICogYnM7XG5sZXQgYnl0ZV9oZWlnaHQgPSBieXRlX3Jvd3MgKiBicztcbmxldCByZWQgPSAnI2ZiNDkzNCc7XG5sZXQgZ3JlZW4gPSAnI2I4YmIyNic7XG5sZXQgeWVsbG93ID0gJyNmYWIyZic7XG5sZXQgYmx1ZSA9ICcjODNhNTk4JztcbmxldCBwdXJwbGUgPSAnI2QzODY5Yic7XG5sZXQgYXF1YSA9ICcjOGVjMDdjJztcblxubGV0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoc2hvcnRfdGV4dCk7XG4gIGxldCBbZGlzcGxheV90ZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZShzaG9ydF90ZXh0KTtcbiAgbGV0IHRleHRhcmVhX3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRleHRkaXZfcmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY2FudmFzX3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNhbnZhc19vdmVybGF5X3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNvbnRhaW5lcl9yZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBjdXJzb3JfcmVmID0gdXNlUmVmKFswLCAwLCBicywgYnNdKTtcbiAgbGV0IGtleW1hcF9yZWYgPSB1c2VSZWYoe30pO1xuICBsZXQgYnl0ZV9ob2xkZXJfcmVmID0gdXNlUmVmKFswLCAwXSk7XG4gIGxldCBvZmZzZXRfcmVmID0gdXNlUmVmKFswLCAwXSk7XG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHdpZHRoX3JlZiA9IHVzZVJlZigpO1xuICAvLyBsZXQgW2hlbHAsIHNldEhlbHBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGxldCBbaGVscCwgc2V0SGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBjbGlja0tleShrZXkpIHtcbiAgICBsZXQga20gPSBrZXltYXBfcmVmLmN1cnJlbnQ7XG4gICAga21ba2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKHsga2V5IH0sIGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGttW2tleV0gPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpemUod2lkdGgpIHtcbiAgICB3aWR0aF9yZWYuY3VycmVudCA9IHdpZHRoO1xuICAgIGNvbnRhaW5lcl9yZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUJpdCh2YWwpIHtcbiAgICBsZXQgY3Vyc29yID0gY3Vyc29yX3JlZi5jdXJyZW50O1xuICAgIGxldCBieXRlX2hvbGRlciA9IGJ5dGVfaG9sZGVyX3JlZi5jdXJyZW50O1xuXG4gICAgbGV0IGJ5dGVzID0gY29udmVydFN0cmluZ1RvQnl0ZXModGV4dCk7XG5cbiAgICBsZXQgYnl0ZV94ID0gTWF0aC5mbG9vcihjdXJzb3JbMF0gLyAoYnl0ZV9jb2xzICogYnMpKTtcbiAgICBsZXQgYnl0ZV95ID0gTWF0aC5mbG9vcihjdXJzb3JbMV0gLyAoYnl0ZV9yb3dzICogYnMpKTtcblxuICAgIGxldCBieXRlX2luZGV4ID0gYnl0ZV95ICogYnl0ZV9ob2xkZXJbMF0gKyBieXRlX3g7XG5cbiAgICBsZXQgYml0X3ggPSAoY3Vyc29yWzBdIC0gYnl0ZV94ICogYnl0ZV9jb2xzICogYnMpIC8gYnM7XG4gICAgbGV0IGJpdF95ID0gKGN1cnNvclsxXSAtIGJ5dGVfeSAqIGJ5dGVfcm93cyAqIGJzKSAvIGJzO1xuXG4gICAgbGV0IGJpdF9pbmRleCA9IGJpdF95ICogYnl0ZV9jb2xzICsgYml0X3g7XG5cbiAgICBsZXQgYmV4cGFuZCA9IGJ5dGVzW2J5dGVfaW5kZXhdLnNwbGl0KCcnKTtcbiAgICBsZXQgY3VycmVudF9iaXQgPSBiZXhwYW5kW2JpdF9pbmRleF07XG4gICAgbGV0IG5ld19iaXQ7XG4gICAgaWYgKHZhbCA9PT0gJ2YnKSB7XG4gICAgICBuZXdfYml0ID0gMSAtIGN1cnJlbnRfYml0O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdfYml0ID0gdmFsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50X2JpdCAhPT0gbmV3X2JpdC50b1N0cmluZygpKSB7XG4gICAgICBiZXhwYW5kW2JpdF9pbmRleF0gPSBuZXdfYml0LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgYmNvbnRyYWN0ID0gYmV4cGFuZC5qb2luKCcnKTtcblxuICAgICAgYnl0ZXNbYnl0ZV9pbmRleF0gPSBiY29udHJhY3Q7XG5cbiAgICAgIGxldCBuZXdfdGV4dCA9IGNvbnZlcnRCeXRlc1RvVGV4dChieXRlcyk7XG4gICAgICBzZXRUZXh0KG5ld190ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGhCeXRlKG9wZXJhdGlvbikge1xuICAgIGxldCBjdXJzb3IgPSBjdXJzb3JfcmVmLmN1cnJlbnQ7XG4gICAgbGV0IGJ5dGVfaG9sZGVyID0gYnl0ZV9ob2xkZXJfcmVmLmN1cnJlbnQ7XG5cbiAgICBsZXQgYnl0ZXMgPSBjb252ZXJ0U3RyaW5nVG9CeXRlcyh0ZXh0KTtcblxuICAgIGxldCBieXRlX3ggPSBNYXRoLmZsb29yKGN1cnNvclswXSAvIChieXRlX2NvbHMgKiBicykpO1xuICAgIGxldCBieXRlX3kgPSBNYXRoLmZsb29yKGN1cnNvclsxXSAvIChieXRlX3Jvd3MgKiBicykpO1xuXG4gICAgbGV0IGJ5dGVfaW5kZXggPSBieXRlX3kgKiBieXRlX2hvbGRlclswXSArIGJ5dGVfeDtcbiAgICBsZXQgYnl0ZSA9IHJldmVyc2VTdHJpbmcoYnl0ZXNbYnl0ZV9pbmRleF0pO1xuXG4gICAgbGV0IG1pbiA9IHBhcnNlSW50KCcwMDAwMDAwMCcsIDIpO1xuICAgIGxldCBtYXggPSBwYXJzZUludCgnMTExMTExMTEnLCAyKTtcblxuICAgIGxldCBuZXdfYnl0ZTtcbiAgICBpZiAob3BlcmF0aW9uID09PSAnc3VidHJhY3QnKSB7XG4gICAgICBuZXdfYnl0ZSA9IHBhcnNlSW50KGJ5dGUsIDIpIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3X2J5dGUgPSBwYXJzZUludChieXRlLCAyKSArIDE7XG4gICAgfVxuXG4gICAgaWYgKG5ld19ieXRlIDwgbWluKSBuZXdfYnl0ZSA9IG1pbjtcbiAgICBpZiAobmV3X2J5dGUgPiBtYXgpIG5ld19ieXRlID0gbWF4O1xuXG4gICAgYnl0ZXNbYnl0ZV9pbmRleF0gPSByZXZlcnNlU3RyaW5nKG5ld19ieXRlLnRvU3RyaW5nKDIpKTtcblxuICAgIGxldCBuZXdfdGV4dCA9IGNvbnZlcnRCeXRlc1RvVGV4dChieXRlcyk7XG4gICAgc2V0VGV4dChuZXdfdGV4dCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKCkge1xuICAgIGxldCB0ZXh0ZGl2ID0gdGV4dGRpdl9yZWYuY3VycmVudDtcbiAgICBsZXQgY3Vyc29yID0gY3Vyc29yX3JlZi5jdXJyZW50O1xuICAgIGxldCBieXRlX2hvbGRlciA9IGJ5dGVfaG9sZGVyX3JlZi5jdXJyZW50O1xuICAgIGxldCBvZmZzZXQgPSBvZmZzZXRfcmVmLmN1cnJlbnQ7XG4gICAgbGV0IHJlYWRvdXQgPSByZWFkb3V0X3JlZi5jdXJyZW50O1xuXG4gICAgbGV0IGJ5dGVzID0gY29udmVydFN0cmluZ1RvQnl0ZXModGV4dCk7XG5cbiAgICBsZXQgb3ZlcmxheSA9IGNhbnZhc19vdmVybGF5X3JlZi5jdXJyZW50O1xuICAgIGxldCBvdHggPSBvdmVybGF5LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgb2Zmc2V0X3ggPSBvZmZzZXRbMF07XG4gICAgbGV0IG9mZnNldF95ID0gb2Zmc2V0WzFdO1xuXG4gICAgbGV0IGJ5dGVfaG9sZGVyX2NvbHMgPSBieXRlX2hvbGRlclswXTtcbiAgICBsZXQgYnl0ZV9ob2xkZXJfcm93cyA9IGJ5dGVfaG9sZGVyWzFdO1xuXG4gICAgbGV0IGJ5dGVfaG9sZGVyX3dpZHRoID0gYnl0ZV9ob2xkZXJfY29scyAqIGJ5dGVfY29scyAqIGJzO1xuICAgIGxldCBieXRlX2hvbGRlcl9oZWlnaHQgPSBieXRlX2hvbGRlcl9yb3dzICogYnl0ZV9yb3dzICogYnM7XG5cbiAgICBvdmVybGF5LndpZHRoID0gYnl0ZV9ob2xkZXJfd2lkdGggKyBvZmZzZXRfeCAqIDI7XG4gICAgb3ZlcmxheS5oZWlnaHQgPSBieXRlX2hvbGRlcl9oZWlnaHQgKyBvZmZzZXRfeSAqIDI7XG5cbiAgICBvdHguY2xlYXJSZWN0KDAsIDAsIG92ZXJsYXkud2lkdGgsIG92ZXJsYXkuaGVpZ2h0KTtcbiAgICBvdHguc3Ryb2tlU3R5bGUgPSAnIzg4OCc7XG4gICAgb3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSAoaSAlIGJ5dGVfaG9sZGVyX2NvbHMpICogYnl0ZV9jb2xzICogYnMgKyBvZmZzZXRfeDtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gYnl0ZV9ob2xkZXJfY29scykgKiBieXRlX3Jvd3MgKiBicyArIG9mZnNldF95O1xuICAgICAgLy8gb3R4LnN0cm9rZVJlY3QoeCwgeSwgYnl0ZV9jb2xzICogYnMsIGJ5dGVfcm93cyAqIGJzKTtcbiAgICB9XG5cbiAgICBsZXQgYnl0ZV9pbmRleCA9XG4gICAgICBNYXRoLmZsb29yKGN1cnNvclsxXSAvIGJ5dGVfaGVpZ2h0KSAqIGJ5dGVfaG9sZGVyX2NvbHMgK1xuICAgICAgTWF0aC5mbG9vcihjdXJzb3JbMF0gLyBieXRlX3dpZHRoKTtcbiAgICBsZXQgYnl0ZV94ID0gKGJ5dGVfaW5kZXggJSBieXRlX2hvbGRlcl9jb2xzKSAqIGJ5dGVfY29scyAqIGJzO1xuICAgIGxldCBieXRlX3kgPSBNYXRoLmZsb29yKGJ5dGVfaW5kZXggLyBieXRlX2hvbGRlcl9jb2xzKSAqIGJ5dGVfcm93cyAqIGJzO1xuXG4gICAgbGV0IGJpdF94ID0gKGN1cnNvclswXSAtIGJ5dGVfeCkgLyBicztcbiAgICBsZXQgYml0X3kgPSAoY3Vyc29yWzFdIC0gYnl0ZV95KSAvIGJzO1xuXG4gICAgbGV0IGJpdF9pbmRleCA9IGJpdF95ICogYnl0ZV9jb2xzICsgYml0X3g7XG5cbiAgICAvLyBjbGVhbiB1cCBieXRlIGluZGV4IGlmIGl0IGlzIG91dHNpZGUgdGhlIGJvdW5kc1xuICAgIGlmIChieXRlX2luZGV4ID4gYnl0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgbGV0IGxhc3RfYnl0ZV9pbmRleCA9IGJ5dGVzLmxlbmd0aCAtIDE7XG4gICAgICBieXRlX2luZGV4ID0gbGFzdF9ieXRlX2luZGV4O1xuICAgICAgYnl0ZV94ID0gKGxhc3RfYnl0ZV9pbmRleCAlIGJ5dGVfaG9sZGVyWzBdKSAqIGJ5dGVfY29scyAqIGJzO1xuICAgICAgYnl0ZV95ID0gTWF0aC5mbG9vcihsYXN0X2J5dGVfaW5kZXggLyBieXRlX2hvbGRlclswXSkgKiBieXRlX3Jvd3MgKiBicztcbiAgICAgIGN1cnNvclswXSA9IGJ5dGVfeCArIGJpdF94ICogYnM7XG4gICAgICBjdXJzb3JbMV0gPSBieXRlX3kgKyBiaXRfeSAqIGJzO1xuICAgIH1cblxuICAgIG90eC5zdHJva2VTdHlsZSA9IGJsdWU7XG4gICAgb3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgb3R4LnN0cm9rZVJlY3QoXG4gICAgICBieXRlX3ggLSAxICsgb2Zmc2V0X3gsXG4gICAgICBieXRlX3kgLSAxICsgb2Zmc2V0X3ksXG4gICAgICBieXRlX2NvbHMgKiBicyArIDIsXG4gICAgICBieXRlX3Jvd3MgKiBicyArIDJcbiAgICApO1xuXG4gICAgb3R4LnN0cm9rZVN0eWxlID0gcmVkO1xuICAgIG90eC5saW5lV2lkdGggPSAyO1xuICAgIG90eC5zdHJva2VSZWN0KFxuICAgICAgY3Vyc29yWzBdIC0gMSArIG9mZnNldF94LFxuICAgICAgY3Vyc29yWzFdIC0gMSArIG9mZnNldF95LFxuICAgICAgYnMgKyAyLFxuICAgICAgYnMgKyAyXG4gICAgKTtcblxuICAgIGxldCBkaXNwbGF5X3RleHQgPSB0ZXh0LnNsaWNlKCk7XG4gICAgaWYgKGRpc3BsYXlfdGV4dC5sZW5ndGggPT09IDApIGRpc3BsYXlfdGV4dCA9ICcgJztcbiAgICBsZXQgZGlzcGxheV9hcnJheSA9IGRpc3BsYXlfdGV4dC5zcGxpdCgnJyk7XG4gICAgZGlzcGxheV9hcnJheVtieXRlX2luZGV4XSA9XG4gICAgICBgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2JsdWV9XCI+YCArXG4gICAgICBkaXNwbGF5X2FycmF5W2J5dGVfaW5kZXhdICtcbiAgICAgICc8L3NwYW4+JztcbiAgICBsZXQgbmV3X3RleHQgPSBkaXNwbGF5X2FycmF5LmpvaW4oJycpO1xuICAgIHNldERpc3BsYXlUZXh0KG5ld190ZXh0KTtcblxuICAgIGlmIChieXRlc1tieXRlX2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgYml0X3JlYWRvdXQgPSByZXZlcnNlU3RyaW5nKGJ5dGVzW2J5dGVfaW5kZXhdKVxuICAgICAgICAuc3BsaXQoJycpXG5cbiAgICAgICAgLm1hcCgoYiwgaSkgPT4ge1xuICAgICAgICAgIGlmIChiaXRfaW5kZXggPT09IDcgLSBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogJHtyZWR9O1wiPiR7Yn08L3NwYW4+YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgICBiaXRfcmVhZG91dCArPSBgICB3aWR0aDogJHt3aWR0aF9yZWYuY3VycmVudH1gO1xuICAgICAgcmVhZG91dC5pbm5lckhUTUwgPSBgYnl0ZSAke2J5dGVfaW5kZXhcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnBhZFN0YXJ0KGJ5dGVzLmxlbmd0aC50b1N0cmluZygpLmxlbmd0aCwgJzAnKX06ICR7Yml0X3JlYWRvdXR9YDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25kKCkge1xuICAgIGxldCB0ZXh0ZGl2ID0gdGV4dGRpdl9yZWYuY3VycmVudDtcbiAgICBsZXQgY29udGFpbmVyID0gY29udGFpbmVyX3JlZi5jdXJyZW50O1xuXG4gICAgbGV0IGNhbnZhcyA9IGNhbnZhc19yZWYuY3VycmVudDtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aF9yZWYuY3VycmVudDtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguZm9udCA9IGAke2ZzfXB4LyR7bGh9IGN1c3RvbW9ub2A7XG4gICAgbGV0IGNoID0gY3R4Lm1lYXN1cmVUZXh0KCd3Jykud2lkdGg7XG5cbiAgICBsZXQgb2Zmc2V0X3ggPSBjaCAqIDI7XG4gICAgbGV0IG9mZnNldF95ID0gcmxoO1xuICAgIG9mZnNldF9yZWYuY3VycmVudCA9IFtvZmZzZXRfeCwgb2Zmc2V0X3ldO1xuXG4gICAgbGV0IGJ5dGVzID0gY29udmVydFN0cmluZ1RvQnl0ZXModGV4dCk7XG5cbiAgICBsZXQgYnl0ZV93aWR0aCA9IGJ5dGVfY29scyAqIGJzO1xuICAgIGxldCBieXRlX2hlaWdodCA9IGJ5dGVfcm93cyAqIGJzO1xuXG4gICAgbGV0IGJ5dGVfaG9sZGVyX2NvbHMgPSBNYXRoLmZsb29yKHRleHRkaXYub2Zmc2V0V2lkdGggLyBieXRlX3dpZHRoKTtcbiAgICBsZXQgYnl0ZV9ob2xkZXJfcm93cyA9IE1hdGguY2VpbChieXRlcy5sZW5ndGggLyBieXRlX2hvbGRlcl9jb2xzKTtcbiAgICBieXRlX2hvbGRlcl9yZWYuY3VycmVudCA9IFtieXRlX2hvbGRlcl9jb2xzLCBNYXRoLm1heCgxLCBieXRlX2hvbGRlcl9yb3dzKV07XG5cbiAgICBsZXQgYnl0ZV9ob2xkZXJfd2lkdGggPSBieXRlX2hvbGRlcl9jb2xzICogYnl0ZV9jb2xzICogYnM7XG4gICAgbGV0IGJ5dGVfaG9sZGVyX2hlaWdodCA9IGJ5dGVfaG9sZGVyX3Jvd3MgKiBieXRlX3Jvd3MgKiBicztcblxuICAgIGNhbnZhcy53aWR0aCA9IGJ5dGVfaG9sZGVyX3dpZHRoICsgY2ggKiA0O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBieXRlX2hvbGRlcl9oZWlnaHQgKyBybGggKiAyO1xuICAgIGlmIChieXRlX2hvbGRlcl9oZWlnaHQgPiB0ZXh0ZGl2Lm9mZnNldEhlaWdodCkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGJ5dGVfaG9sZGVyX2hlaWdodCArIHJsaCAqIDIgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGV4dGRpdi5vZmZzZXRIZWlnaHQgKyBybGggKiAyO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRleHRkaXYub2Zmc2V0SGVpZ2h0ICsgcmxoICogMiArICdweCc7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBmb3IgKGxldCBieXIgPSAwOyBieXIgPCBieXRlX2hvbGRlcl9yb3dzOyBieXIrKykge1xuICAgICAgZm9yIChsZXQgYnljID0gMDsgYnljIDwgYnl0ZV9ob2xkZXJfY29sczsgYnljKyspIHtcbiAgICAgICAgbGV0IGJ5dGVfaW5kZXggPSBieXIgKiBieXRlX2hvbGRlcl9jb2xzICsgYnljO1xuICAgICAgICBsZXQgYnl0ZSA9IGJ5dGVzW2J5dGVfaW5kZXhdO1xuICAgICAgICBpZiAoYnl0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9yIChsZXQgYnIgPSAwOyBiciA8IGJ5dGVfcm93czsgYnIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYmMgPSAwOyBiYyA8IGJ5dGVfY29sczsgYmMrKykge1xuICAgICAgICAgICAgICBsZXQgYml0ID0gYnl0ZS5zcGxpdCgnJylbYnIgKiBieXRlX2NvbHMgKyBiY107XG4gICAgICAgICAgICAgIGlmIChiaXQgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gYnljICogYnl0ZV9jb2xzICogYnMgKyBiYyAqIGJzICsgb2Zmc2V0X3g7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBieXIgKiBieXRlX3Jvd3MgKiBicyArIGJyICogYnMgKyBvZmZzZXRfeTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgYnMsIGJzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRleHQodmFsdWUpIHtcbiAgICBzZXRUZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlcGVhdCA9IGUucmVwZWF0O1xuXG4gICAgbGV0IGttID0ga2V5bWFwX3JlZi5jdXJyZW50O1xuICAgIGxldCBjdXJzb3IgPSBjdXJzb3JfcmVmLmN1cnJlbnQ7XG4gICAgbGV0IHhfaW5jID0gYnM7XG4gICAgbGV0IHlfaW5jID0gYnM7XG4gICAgbGV0IGJ5dGVfaG9sZGVyID0gYnl0ZV9ob2xkZXJfcmVmLmN1cnJlbnQ7XG5cbiAgICBsZXQgYnl0ZXMgPSBjb252ZXJ0U3RyaW5nVG9CeXRlcyh0ZXh0KTtcbiAgICBsZXQgYnl0ZV9pbmRleCA9XG4gICAgICBNYXRoLmZsb29yKGN1cnNvclsxXSAvIGJ5dGVfaGVpZ2h0KSAqIGJ5dGVfaG9sZGVyWzBdICtcbiAgICAgIE1hdGguZmxvb3IoY3Vyc29yWzBdIC8gYnl0ZV93aWR0aCk7XG4gICAgbGV0IGJ5dGVfeCA9IChieXRlX2luZGV4ICUgYnl0ZV9ob2xkZXJbMF0pICogYnl0ZV9jb2xzICogYnM7XG4gICAgbGV0IGJ5dGVfeSA9IE1hdGguZmxvb3IoYnl0ZV9pbmRleCAvIGJ5dGVfaG9sZGVyWzBdKSAqIGJ5dGVfcm93cyAqIGJzO1xuXG4gICAgbGV0IHByZXZfY3Vyc29yID0gY3Vyc29yLnNsaWNlKCk7XG5cbiAgICBsZXQgYml0X3ggPSAoY3Vyc29yWzBdIC0gYnl0ZV94KSAvIGJzO1xuICAgIGxldCBiaXRfeSA9IChjdXJzb3JbMV0gLSBieXRlX3kpIC8gYnM7XG5cbiAgICBsZXQgYml0X2luZGV4ID0gYml0X3kgKiBieXRlX2NvbHMgKyBiaXRfeDtcblxuICAgIGlmIChrbVsnaCddKSBjdXJzb3JbMF0gLT0geF9pbmM7XG4gICAgaWYgKGttWydsJ10pIGN1cnNvclswXSArPSB4X2luYztcblxuICAgIGlmIChrbVsnaiddKSBjdXJzb3JbMV0gKz0geV9pbmM7XG4gICAgaWYgKGttWydrJ10pIGN1cnNvclsxXSAtPSB5X2luYztcblxuICAgIGxldCBuZXdfYnl0ZV9pbmRleCA9XG4gICAgICBNYXRoLmZsb29yKGN1cnNvclsxXSAvIGJ5dGVfaGVpZ2h0KSAqIGJ5dGVfaG9sZGVyWzBdICtcbiAgICAgIE1hdGguZmxvb3IoY3Vyc29yWzBdIC8gYnl0ZV93aWR0aCk7XG5cbiAgICBpZiAobmV3X2J5dGVfaW5kZXggPiBieXRlcy5sZW5ndGggLSAxKSB7XG4gICAgICBpZiAoY3Vyc29yWzBdID4gcHJldl9jdXJzb3JbMF0pIHtcbiAgICAgICAgY3Vyc29yWzBdID0gcHJldl9jdXJzb3JbMF07XG4gICAgICB9XG4gICAgICBpZiAoY3Vyc29yWzFdID4gcHJldl9jdXJzb3JbMV0pIHtcbiAgICAgICAgY3Vyc29yWzFdID0gcHJldl9jdXJzb3JbMV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJzb3JbMF0gKyBjdXJzb3JbMl0gPiBieXRlX2hvbGRlclswXSAqIGJzKSB7XG4gICAgICAgIGlmIChieXRlc1tieXRlX2luZGV4ICsgMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGN1cnNvclswXSA9IDA7XG4gICAgICAgICAgY3Vyc29yWzFdICs9IDggKiBicztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnNvclswXSA8IDApIHtcbiAgICAgICAgaWYgKGJ5dGVfaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjdXJzb3JbMF0gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnNvclswXSA9IGJ5dGVfaG9sZGVyWzBdICogYnl0ZV9jb2xzICogYnMgLSBjdXJzb3JbMl07XG4gICAgICAgICAgY3Vyc29yWzFdIC09IDggKiBicztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnNvclsxXSA8IDApIHtcbiAgICAgICAgY3Vyc29yWzFdID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYml0X2NoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoKGtleSA9PT0gJ2YnICYmICFyZXBlYXQpIHx8IChrbVsnZiddICYmIGtleSAhPT0gJ2YnKSkge1xuICAgICAgYml0X2NoYW5nZWQgPSB0cnVlO1xuICAgICAgY2hhbmdlQml0KCdmJyk7XG4gICAgfSBlbHNlIGlmIChrbVsnZCddKSB7XG4gICAgICBiaXRfY2hhbmdlZCA9IHRydWU7XG4gICAgICBjaGFuZ2VCaXQoMSk7XG4gICAgfSBlbHNlIGlmIChrbVsnZSddKSB7XG4gICAgICBiaXRfY2hhbmdlZCA9IHRydWU7XG4gICAgICBjaGFuZ2VCaXQoMCk7XG4gICAgfVxuXG4gICAgbGV0IHNoaWZ0ID0gZS5zaGlmdEtleTtcbiAgICBsZXQgaW5jID0gMTA7XG4gICAgaWYgKHNoaWZ0KSBpbmMgPSAxO1xuICAgIGlmIChrZXkgPT09ICd1JyB8fCBrZXkgPT09ICdhcnJvd2xlZnQnKSB7XG4gICAgICBsZXQgbmV4dCA9IHdpZHRoX3JlZi5jdXJyZW50IC0gaW5jO1xuICAgICAgaWYgKG5leHQgPCA0MCkgbmV4dCA9IDQwO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2knIHx8IGtleSA9PT0gJ2Fycm93cmlnaHQnKSB7XG4gICAgICBsZXQgbmV4dCA9IHdpZHRoX3JlZi5jdXJyZW50ICsgaW5jO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoa21bJ2EnXSAmJiAhKGtleSA9PT0gJ2EnICYmIHJlcGVhdCkpIHtcbiAgICBpZiAoa21bJ2EnXSkge1xuICAgICAgYml0X2NoYW5nZWQgPSB0cnVlO1xuICAgICAgbWF0aEJ5dGUoJ2FkZCcpO1xuICAgICAgLy8gfSBlbHNlIGlmIChrbVsncyddICYmICEoa2V5ID09PSAncycgJiYgcmVwZWF0KSkge1xuICAgIH0gZWxzZSBpZiAoa21bJ3MnXSkge1xuICAgICAgYml0X2NoYW5nZWQgPSB0cnVlO1xuICAgICAgbWF0aEJ5dGUoJ3N1YnRyYWN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFiaXRfY2hhbmdlZCkgbW92ZSgpO1xuXG4gICAgaWYgKGtleSA9PT0gJ3QnKSB7XG4gICAgICB0ZXh0YXJlYV9yZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgbGV0IHQgPSB0ZXh0YXJlYV9yZWYuY3VycmVudDtcbiAgICAgIHQuc2VsZWN0aW9uU3RhcnQgPSB0LnNlbGVjdGlvbkVuZCA9IHQudmFsdWUubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndycpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2hyZWYnLFxuICAgICAgICAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KVxuICAgICAgKTtcbiAgICAgIC8vIFRPRE86IHNldCB3aWR0aFxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgIGBiaXgtd2lkdGgtJHt3aWR0aF9yZWYuY3VycmVudH0tJHtuZXcgRGF0ZSgpXG4gICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyl9Wi50eHRgXG4gICAgICApO1xuXG4gICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJz8nKSB7XG4gICAgICBzZXRIZWxwKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiAhcHJldlN0YXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXNwb25kKCk7XG4gICAgbW92ZSgpO1xuICB9LCBbdGV4dF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2tleXMgdXNlZCcsIGtleXNfdXNlZCk7XG4gICAgc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgcmVzcG9uZCgpO1xuICAgIG1vdmUoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBrZXltYXBfcmVmLmN1cnJlbnRba2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUpO1xuICAgIGlmIChrZXkgPT09ICd0JykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBrZXltYXBfcmVmLmN1cnJlbnRba2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW3RleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHJlZj17Y29udGFpbmVyX3JlZn0gc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICByZWY9e2NhbnZhc19yZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtjYW52YXNfb3ZlcmxheV9yZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgLi4ucElubGluZSgnMmNoJyksXG4gICAgICAgICAgICAuLi5wQmxvY2socmxoKSxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcbiAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6ICcyY2gnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0ZXh0ZGl2X3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheV90ZXh0ICsgJ+KAiycgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXkgPT09ICdFbnRlcicpIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlZj17dGV4dGFyZWFfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLnBJbmxpbmUoJzJjaCcpLFxuICAgICAgICAgIC4uLnBCbG9jayhybGggLyAyKSxcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e3JlYWRvdXRfcmVmfVxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICByaWdodDogJzJjaCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA0Y2gpJyxcbiAgICAgICAgICBib3R0b206IHJsaCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICByaWdodDogJzJjaCcsXG4gICAgICAgICAgICBib3R0b206IHJsaCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICFoZWxwID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEtleWNhcCBjbGlja0tleT17Y2xpY2tLZXl9IGs9XCI/XCIgbGFiZWw9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5wSW5saW5lKCcyY2gnKSxcbiAgICAgICAgICAgIC4uLnBCbG9jayhybGggLyAyKSxcbiAgICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyA0IH19PlxuICAgICAgICAgICAgQml4IGxldCdzIHlvdSBkcmF3IG9uIGJpbmFyeSB0byBnbGl0Y2ggdGV4dC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pk1PVkU8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIG1hcmdpbkJvdHRvbTogcmxoIC8gNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwiaFwiIGxhYmVsPVwicHJldmlvdXMgYnl0ZVwiIC8+XG4gICAgICAgICAgICA8S2V5Y2FwIGNsaWNrS2V5PXtjbGlja0tleX0gaz1cImpcIiBsYWJlbD1cIm5leHQgYml0XCIgLz5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwia1wiIGxhYmVsPVwicHJldmlvdXMgYml0XCIgLz5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwibFwiIGxhYmVsPVwibmV4dCBieXRlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PkVESVQgQklOQVJZPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBtYXJnaW5Cb3R0b206IHJsaCAvIDQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8S2V5Y2FwIGNsaWNrS2V5PXtjbGlja0tleX0gaz1cImRcIiBsYWJlbD1cImRyYXdcIiAvPlxuICAgICAgICAgICAgPEtleWNhcCBjbGlja0tleT17Y2xpY2tLZXl9IGs9XCJlXCIgbGFiZWw9XCJlcmFzZVwiIC8+XG4gICAgICAgICAgICA8S2V5Y2FwIGNsaWNrS2V5PXtjbGlja0tleX0gaz1cImZcIiBsYWJlbD1cImZsaXBcIiAvPlxuICAgICAgICAgICAgPEtleWNhcCBjbGlja0tleT17Y2xpY2tLZXl9IGs9XCJhXCIgbGFiZWw9XCJhZGQgMSB0byBieXRlXCIgLz5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwic1wiIGxhYmVsPVwic3VidHJhY3QgMSBmcm9tIGJ5dGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+U0laRTwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgbWFyZ2luQm90dG9tOiBybGggLyA0IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEtleWNhcCBjbGlja0tleT17Y2xpY2tLZXl9IGs9XCJ1XCIgbGFiZWw9XCJkZWNyZWFzZSB3aWR0aFwiIC8+XG4gICAgICAgICAgICA8S2V5Y2FwIGNsaWNrS2V5PXtjbGlja0tleX0gaz1cImlcIiBsYWJlbD1cImluY3JlYXNlIHdpZHRoXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlNQRUNJQUw8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIG1hcmdpbkJvdHRvbTogcmxoIC8gNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwidFwiIGxhYmVsPVwiZWRpdCB0ZXh0XCIgLz5cbiAgICAgICAgICAgIDxLZXljYXAgY2xpY2tLZXk9e2NsaWNrS2V5fSBrPVwid1wiIGxhYmVsPVwic2F2ZSBhcyB0eHRcIiAvPlxuICAgICAgICAgICAgPEtleWNhcCBjbGlja0tleT17Y2xpY2tLZXl9IGs9XCI/XCIgbGFiZWw9XCJ0b2dnbGUgaGVscFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL2JpeFwiPlZpZXcgc291cmNlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tb25vJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuaGVscCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDUwdmggLSAke3JsaCAqIDJ9cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlwdHljaC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwdmg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/grant/sites/constraint-systems/bix/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fsites%2Fconstraint-systems%2Fbix%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fsites%2Fconstraint-systems%2Fbix%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fsites%2Fconstraint-systems%2Fbix%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_e9ad7d891b372a4221cf":
/*!*******************************************!*\
  !*** external "dll_e9ad7d891b372a4221cf" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e9ad7d891b372a4221cf;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map