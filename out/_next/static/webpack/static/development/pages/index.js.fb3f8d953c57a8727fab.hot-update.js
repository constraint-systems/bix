webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/info.js":
/*!****************************!*\
  !*** ./components/info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/whale/components/info.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
var fs = 14;
var lh = 1.5;
var rlh = fs * lh;
var ts = {
  textTransform: 'uppercase'
};
var maxch = '74ch';

var Key = function Key(item, clickKey) {
  var _item = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 2),
      key = _item[0],
      label = _item[1];

  return __jsx("div", {
    onClick: function onClick() {
      clickKey(key);
    },
    style: {
      cursor: 'pointer',
      marginRight: label !== false ? '1ch' : 0,
      display: 'flex',
      marginBottom: label !== false ? rlh / 4 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    style: {
      border: 'solid 1px black',
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch',
      background: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, key), label !== false ? __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      borderTop: 'solid 1px transparent',
      borderRight: 'solid 1px transparent',
      borderBottom: 'solid 1px transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, label) : null);
};

var KeyList = function KeyList(_ref) {
  var items = _ref.items,
      clickKey = _ref.clickKey;
  return __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, items.map(function (item) {
    return Key(item, clickKey);
  }));
};

var Relevant = function Relevant(_ref2) {
  var mode = _ref2.mode,
      clickKey = _ref2.clickKey;

  switch (mode) {
    case 'default':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        style: {
          marginBottom: rlh / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        style: ts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Image"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "To upload an image you can paste, drop or press"), __jsx(KeyList, {
        items: [['o', 'to open a file dialog']],
        clickKey: clickKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })));
      break;

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var _ref4;

  var rlh = _ref3.rlh,
      mode = _ref3.mode,
      help = _ref3.help,
      clickKey = _ref3.clickKey;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'fixed',
      right: '2ch',
      bottom: rlh,
      display: !help ? 'block' : 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, Key(['?', false], clickKey)), __jsx("div", {
    style: (_ref4 = {
      paddingRight: '1ch',
      paddingLeft: '1ch',
      paddingTop: rlh / 4,
      paddingBottom: rlh / 4,
      position: 'fixed',
      outline: 'solid 1px black',
      width: maxch,
      maxWidth: "calc(100% - 4ch)",
      background: 'white'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "paddingLeft", '2ch'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "paddingRight", '2ch'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "paddingBottom", rlh / 2), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "paddingTop", rlh / 2), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "right", '2ch'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "bottom", rlh), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "overflowY", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "display", help ? 'block' : 'none'), _ref4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Edit an image using keyboard-controlled pixel flows."), __jsx("div", {
    style: {
      marginLeft: '-2ch',
      marginRight: '-2ch',
      paddingLeft: '2ch',
      paddingRight: '2ch'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(Relevant, {
    mode: mode,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx("div", {
    style: {
      marginBottom: rlh / 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    style: ts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Special"), __jsx(KeyList, {
    clickKey: clickKey,
    items: [['w', 'save diptych as png'], ['?', 'help']],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("a", {
    href: "https://en.wikipedia.org/wiki/It%27s_Blitz!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Default photo by Urs Fischer")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/constraint-systems/flow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "View source"))));
});

/***/ })

})
//# sourceMappingURL=index.js.fb3f8d953c57a8727fab.hot-update.js.map