webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/info */ "./components/info.js");


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/diptych/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var fs = 16;
var lh = 1.5;
var rlh = fs * lh; // measured

var cr = 8.4 / 21;
var ch = cr * rlh;
var mfs = 14;
var mrlh = mfs * lh;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  // from https://codepen.io/peterhry/pen/AGIEa
  // modified to respect line breaks
  var ogx = x;
  var ogy = y;
  var paragraphs = text.split('\n');
  var height = 0;

  for (var p = 0; p < paragraphs.length; p++) {
    var _text = paragraphs[p];

    var words = _text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

    for (i = 0; i < words.length; i++) {
      test = words[i];
      metrics = context.measureText(test);

      while (metrics.width >= maxWidth) {
        // Determine how much of the word will fit
        test = test.substring(0, test.length - 1);
        metrics = context.measureText(test);
      }

      if (words[i] != test) {
        words.splice(i + 1, 0, words[i].substr(test.length));
        words[i] = test;
      }

      test = line + words[i] + ' ';
      metrics = context.measureText(test);

      if (metrics.width >= maxWidth && i > 0) {
        context.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
        lineCount++;
      } else {
        line = test;
      }
    }

    context.fillText(line, x, y);
    y += lineHeight;
    height += lineHeight;
  } // context.fillStyle = 'red';
  // context.fillRect(ogx, ogy, maxWidth, height);


  return height;
}

var images = [['beach.jpg', 'by José Duarte', 'https://unsplash.com/photos/DuholBfUUCY'], // [
//   'illustration.jpg',
//   'by Rockwell Kent',
//   'https://www.apollo-magazine.com/herman-melville-moby-dick-artists-illustrators/',
// ],
['peck.jpg', 'from Moby Dick (1956 film)', 'https://en.wikipedia.org/wiki/Moby_Dick_(1956_film)'], ['whale-jump.jpg', 'by Thomas Kelley', 'https://unsplash.com/photos/t20pc32VbrU'], ['whale-tail.jpg', 'by Iswanto Arif', 'https://unsplash.com/photos/VziuvwpGatM']];
var plain_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off \u2014 then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n\nThere now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs \u2014 commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.";
var short_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.";

var Home = function Home(img) {
  var _ref;

  var rref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var targetref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var wwref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var containerref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var readoutref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var tref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var imgref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var dref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var textarearef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(plain_text),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      help = _useState2[0],
      setHelp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('default'),
      mode = _useState3[0],
      setMode = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(images[Math.floor(Math.random() * (images.length - 1))]),
      default_image = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      kickoff = _useState5[0],
      setKickoff = _useState5[1];

  function respond() {
    var aw = tref.current.offsetWidth;
    var ah = tref.current.offsetHeight;
    var area = aw * ah;
    var img = imgref.current;
    var iw = img.width;
    var ih = img.height;
    var ratio = iw / ih;
    var sw = Math.floor(Math.sqrt(area * ratio));
    var sh = Math.floor(area / sw);
    var source = document.createElement('canvas');
    source.width = sw;
    source.height = sh;
    var stx = source.getContext('2d');
    stx.drawImage(img, 0, 0, sw, sh);
    var pixels = stx.getImageData(0, 0, sw, sh);
    var r = rref.current;
    var rtx = r.getContext('2d');
    var new_pixels = rtx.createImageData(aw, ah);
    new_pixels.data.set(pixels.data);
    r.width = wwref.current;
    r.height = ah + rlh * 2;
    rtx.fillStyle = 'white';
    rtx.fillRect(0, 0, r.width, r.height);
    rtx.putImageData(new_pixels, ch * 2, rlh);
    rtx.font = "".concat(fs, "px/").concat(lh, " custom");
    rtx.textBaseline = 'middle';
    rtx.fillStyle = 'black';
    var height = wrapText(rtx, text, r.width - ch * 2 - aw, rlh + rlh / 2 + 2, aw + ch / 2, fs * lh);
    readoutref.current.innerHTML = "width: ".concat(wwref.current, "  image: ").concat(iw, "x").concat(ih, " (").concat(Math.round(iw / ih * 1000) / 1000, ")  source: ").concat(sw, "x").concat(sh, "  target: ").concat(aw, "x").concat(ah, " (").concat(Math.round(aw / ah * 1000) / 1000, ")");
    {
      var d = dref.current;
      d.width = aw * 2;
      d.height = ah * 2;
      d.style.width = aw + 'px';
      d.style.height = ah + 'px';
      var dtx = d.getContext('2d');
      dtx.font = "".concat(fs, "px/").concat(lh, " custom");
      dtx.textBaseline = 'middle';
      dtx.scale(2, 2);
      dtx.fillStyle = 'white';
      dtx.fillRect(0, 0, aw, ah);
      dtx.fillStyle = 'black';

      var _height = wrapText(dtx, text, 0, rlh + rlh / 2 + 2, aw + ch / 2, fs * lh);

      ctx.style.display = 'none';
      rtx.fillStyle = 'white';
      rtx.fillRect(0, 0, aw, ah); // rtx.drawImage(d, 0, 0,
    }
  }

  function initImage(src, callback) {
    var img = new Image();

    img.onload = function () {
      imgref.current = img;
      respond();
    };

    img.src = src;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSize(window.innerWidth);
    initImage(default_image[0]);
  }, [kickoff]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (window.innerWidth < 600) {
      setText(short_text);
    }

    setTimeout(function () {
      setKickoff(true);
    }, 0);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (imgref.current !== null) respond();
  }, [text]);

  function keyAction(e) {
    var key = e.key.toLowerCase();
    var shift = e.shiftKey;
    var inc = 1;
    if (shift) inc = 10;

    if (key === 'h' || key === 'arrowleft') {
      var next = wwref.current - inc;
      if (next < 10) next = 10;
      setSize(next);
      respond();
    } else if (key === 'l' || key === 'arrowright') {
      var _next = wwref.current + inc;

      setSize(_next);
      respond();
    } else if (key === 'o') {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            initImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    } else if (key === 'w') {
      var link = document.createElement('a');

      var revokeURL = function revokeURL() {
        var me = this;
        requestAnimationFrame(function () {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      rref.current.toBlob(function (blob) {
        link.setAttribute('download', "diptych-".concat(new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, ''), "Z.png"));
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    } else if (key === 'e') {
      textarearef.current.focus();
      var t = textarearef.current;
      t.selectionStart = t.selectionEnd = t.value.length;
      e.preventDefault();
    } else if (key === '?') {
      setHelp(function (prevState) {
        return !prevState;
      });
    }
  }

  function clickKey(key) {
    keyAction({
      key: key
    });
  }

  function setSize(width) {
    wwref.current = width;
    containerref.current.style.width = width + 'px';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        initImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    initImage(src);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', keyAction);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return function () {
      window.removeEventListener('keydown', keyAction);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [text]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("div", {
    ref: containerref,
    style: {
      display: 'grid',
      // gridTemplateColumns: `repeat(2, ${68 * ch}px)`,
      gridTemplateColumns: "repeat(2, 1fr)",
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingTop: rlh,
      paddingBottom: rlh,
      gridColumnGap: '3ch',
      // width: ch * (68 * 2 + 2 * 2 + 3),
      // background: 'green',
      background: 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx("canvas", {
    style: (_ref = {
      position: 'absolute'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "position", 'absolute'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "left", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "top", 0), _ref),
    ref: rref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }), __jsx("canvas", {
    ref: dref,
    style: {
      position: 'fixed',
      left: 0,
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, __jsx("div", {
    ref: tref,
    style: {
      position: 'relative',
      whiteSpace: 'pre-wrap',
      pointerEvents: 'none',
      background: 'white',
      // background: 'rgba(0,255,0,0.2)',
      opacity: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, text, "\u200B"), __jsx("textarea", {
    ref: textarearef,
    style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'block',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      border: 'none',
      padding: 0,
      margin: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      resize: 'none'
    }, "display", 'none'),
    onPaste: function onPaste(e) {
      e.stopPropagation();
    },
    onFocus: function onFocus(e) {
      setMode('editing');
    },
    onBlur: function onBlur(e) {
      setMode('default');
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') e.target.blur();
      if (e.shiftKey && e.key === 'Enter') e.target.blur();
      e.stopPropagation();
    },
    onChange: function onChange(e) {
      setText(e.target.value);
    },
    value: text,
    spellCheck: "false",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }))), __jsx("div", {
    style: {
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      whiteSpace: 'pre-wrap',
      fontFamily: 'customono',
      fontSize: mfs,
      lineHeight: lh
    },
    ref: readoutref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'fixed',
      right: '2ch',
      bottom: '2ch',
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }), __jsx("div", {
    style: {
      fontFamily: 'customono',
      fontSize: mfs,
      lineHeight: lh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx(_components_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rlh: mrlh,
    help: help,
    mode: mode,
    clickKey: clickKey,
    image_info: default_image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1263658118",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:white;}textarea:focus{background:#efefef;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2RpcHR5Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK2R5QixBQUdnQyxBQUtHLEFBS0YsQUFHVyxBQU14QixBQUlLLEFBUUwsQUFNQSxBQUlLLEFBSUEsQUFHRyxBQUdFLFNBL0JULEFBWVEsQUFNd0IsS0FkNUMsQUFrQmEsQUFJYixHQUdBLEVBNUJBLEFBK0JlLEVBbERvQyxDQVNuRCxFQUptRCxDQW9DbkQsRUFWc0IsS0FuQnFCLEFBdUMzQyxlQW5CcUIsSUFLckIsZUFKQSxPQXBCMkMseUNBQ3pCLFVBYmxCLEdBS0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9kaXB0eWNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL2luZm8nO1xuXG5sZXQgZnMgPSAxNjtcbmxldCBsaCA9IDEuNTtcbmxldCBybGggPSBmcyAqIGxoO1xuLy8gbWVhc3VyZWRcbmxldCBjciA9IDguNCAvIDIxO1xubGV0IGNoID0gY3IgKiBybGg7XG5cbmxldCBtZnMgPSAxNDtcbmxldCBtcmxoID0gbWZzICogbGg7XG5cbmZ1bmN0aW9uIHdyYXBUZXh0KGNvbnRleHQsIHRleHQsIHgsIHksIG1heFdpZHRoLCBsaW5lSGVpZ2h0KSB7XG4gIC8vIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL3BldGVyaHJ5L3Blbi9BR0lFYVxuICAvLyBtb2RpZmllZCB0byByZXNwZWN0IGxpbmUgYnJlYWtzXG4gIGxldCBvZ3ggPSB4O1xuICBsZXQgb2d5ID0geTtcbiAgbGV0IHBhcmFncmFwaHMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgbGV0IGhlaWdodCA9IDA7XG4gIGZvciAobGV0IHAgPSAwOyBwIDwgcGFyYWdyYXBocy5sZW5ndGg7IHArKykge1xuICAgIGxldCB0ZXh0ID0gcGFyYWdyYXBoc1twXTtcbiAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyksXG4gICAgICBsaW5lID0gJycsXG4gICAgICBsaW5lQ291bnQgPSAwLFxuICAgICAgaSxcbiAgICAgIHRlc3QsXG4gICAgICBtZXRyaWNzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXN0ID0gd29yZHNbaV07XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIHdoaWxlIChtZXRyaWNzLndpZHRoID49IG1heFdpZHRoKSB7XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBvZiB0aGUgd29yZCB3aWxsIGZpdFxuICAgICAgICB0ZXN0ID0gdGVzdC5zdWJzdHJpbmcoMCwgdGVzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdCk7XG4gICAgICB9XG4gICAgICBpZiAod29yZHNbaV0gIT0gdGVzdCkge1xuICAgICAgICB3b3Jkcy5zcGxpY2UoaSArIDEsIDAsIHdvcmRzW2ldLnN1YnN0cih0ZXN0Lmxlbmd0aCkpO1xuICAgICAgICB3b3Jkc1tpXSA9IHRlc3Q7XG4gICAgICB9XG5cbiAgICAgIHRlc3QgPSBsaW5lICsgd29yZHNbaV0gKyAnICc7XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcblxuICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGggJiYgaSA+IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgICAgbGluZSA9IHdvcmRzW2ldICsgJyAnO1xuICAgICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgIGxpbmVDb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHRlc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgIGhlaWdodCArPSBsaW5lSGVpZ2h0O1xuICB9XG4gIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XG4gIC8vIGNvbnRleHQuZmlsbFJlY3Qob2d4LCBvZ3ksIG1heFdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5sZXQgaW1hZ2VzID0gW1xuICBbJ2JlYWNoLmpwZycsICdieSBKb3PDqSBEdWFydGUnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0R1aG9sQmZVVUNZJ10sXG4gIC8vIFtcbiAgLy8gICAnaWxsdXN0cmF0aW9uLmpwZycsXG4gIC8vICAgJ2J5IFJvY2t3ZWxsIEtlbnQnLFxuICAvLyAgICdodHRwczovL3d3dy5hcG9sbG8tbWFnYXppbmUuY29tL2hlcm1hbi1tZWx2aWxsZS1tb2J5LWRpY2stYXJ0aXN0cy1pbGx1c3RyYXRvcnMvJyxcbiAgLy8gXSxcbiAgW1xuICAgICdwZWNrLmpwZycsXG4gICAgJ2Zyb20gTW9ieSBEaWNrICgxOTU2IGZpbG0pJyxcbiAgICAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9ieV9EaWNrXygxOTU2X2ZpbG0pJyxcbiAgXSxcbiAgW1xuICAgICd3aGFsZS1qdW1wLmpwZycsXG4gICAgJ2J5IFRob21hcyBLZWxsZXknLFxuICAgICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdDIwcGMzMlZiclUnLFxuICBdLFxuICBbXG4gICAgJ3doYWxlLXRhaWwuanBnJyxcbiAgICAnYnkgSXN3YW50byBBcmlmJyxcbiAgICAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1Z6aXV2d3BHYXRNJyxcbiAgXSxcbl07XG5sZXQgcGxhaW5fdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdvIOKAlCBuZXZlciBtaW5kIGhvdyBsb25nIHByZWNpc2VseSDigJQgaGF2aW5nIGxpdHRsZSBvciBubyBtb25leSBpbiBteSBwdXJzZSwgYW5kIG5vdGhpbmcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSSB0aG91Z2h0IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0aGUgd29ybGQuIEl0IGlzIGEgd2F5IEkgaGF2ZSBvZiBkcml2aW5nIG9mZiB0aGUgc3BsZWVuIGFuZCByZWd1bGF0aW5nIHRoZSBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBncm93aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoOyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkgTm92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBpbnZvbHVudGFyaWx5IHBhdXNpbmcgYmVmb3JlIGNvZmZpbiB3YXJlaG91c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJlYXIgb2YgZXZlcnkgZnVuZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2lhbGx5IHdoZW5ldmVyIG15IGh5cG9zIGdldCBzdWNoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYSBzdHJvbmcgbW9yYWwgcHJpbmNpcGxlIHRvIHByZXZlbnQgbWUgZnJvbSBkZWxpYmVyYXRlbHkgc3RlcHBpbmcgaW50byB0aGUgc3RyZWV0LCBhbmQgbWV0aG9kaWNhbGx5IGtub2NraW5nIHBlb3BsZeKAmXMgaGF0cyBvZmYg4oCUIHRoZW4sIEkgYWNjb3VudCBpdCBoaWdoIHRpbWUgdG8gZ2V0IHRvIHNlYSBhcyBzb29uIGFzIEkgY2FuLiBUaGlzIGlzIG15IHN1YnN0aXR1dGUgZm9yIHBpc3RvbCBhbmQgYmFsbC4gIFdpdGggYSBwaGlsb3NvcGhpY2FsIGZsb3VyaXNoIENhdG8gdGhyb3dzIGhpbXNlbGYgdXBvbiBoaXMgc3dvcmQ7IEkgcXVpZXRseSB0YWtlIHRvIHRoZSBzaGlwLiBUaGVyZSBpcyBub3RoaW5nIHN1cnByaXNpbmcgaW4gdGhpcy4gSWYgdGhleSBidXQga25ldyBpdCwgYWxtb3N0IGFsbCBtZW4gaW4gdGhlaXIgZGVncmVlLCBzb21lIHRpbWUgb3Igb3RoZXIsIGNoZXJpc2ggdmVyeSBuZWFybHkgdGhlIHNhbWUgZmVlbGluZ3MgdG93YXJkcyB0aGUgb2NlYW4gd2l0aCBtZS5cblxuVGhlcmUgbm93IGlzIHlvdXIgaW5zdWxhciBjaXR5IG9mIHRoZSBNYW5oYXR0b2VzLCBiZWx0ZWQgcm91bmQgYnkgd2hhcnZlcyBhcyBJbmRpYW4gaXNsZXMgYnkgY29yYWwgcmVlZnMg4oCUIGNvbW1lcmNlIHN1cnJvdW5kcyBpdCB3aXRoIGhlciBzdXJmLiBSaWdodCBhbmQgbGVmdCwgdGhlIHN0cmVldHMgdGFrZSB5b3Ugd2F0ZXJ3YXJkLiBJdHMgZXh0cmVtZSBkb3dudG93biBpcyB0aGUgYmF0dGVyeSwgd2hlcmUgdGhhdCBub2JsZSBtb2xlIGlzIHdhc2hlZCBieSB3YXZlcywgYW5kIGNvb2xlZCBieSBicmVlemVzLCB3aGljaCBhIGZldyBob3VycyBwcmV2aW91cyB3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBjcm93ZHMgb2Ygd2F0ZXItZ2F6ZXJzIHRoZXJlLmA7XG5cbmxldCBzaG9ydF90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLmA7XG5cbmNvbnN0IEhvbWUgPSBpbWcgPT4ge1xuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRhcmdldHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHd3cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY29udGFpbmVycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgcmVhZG91dHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBpbWdyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBkcmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGV4dGFyZWFyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShwbGFpbl90ZXh0KTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcbiAgbGV0IFtkZWZhdWx0X2ltYWdlXSA9IHVzZVN0YXRlKFxuICAgIGltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2VzLmxlbmd0aCAtIDEpKV1cbiAgKTtcbiAgbGV0IFtraWNrb2ZmLCBzZXRLaWNrb2ZmXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiByZXNwb25kKCkge1xuICAgIGxldCBhdyA9IHRyZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgYWggPSB0cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBhcmVhID0gYXcgKiBhaDtcblxuICAgIGxldCBpbWcgPSBpbWdyZWYuY3VycmVudDtcbiAgICBsZXQgaXcgPSBpbWcud2lkdGg7XG4gICAgbGV0IGloID0gaW1nLmhlaWdodDtcblxuICAgIGxldCByYXRpbyA9IGl3IC8gaWg7XG4gICAgbGV0IHN3ID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoYXJlYSAqIHJhdGlvKSk7XG4gICAgbGV0IHNoID0gTWF0aC5mbG9vcihhcmVhIC8gc3cpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHNvdXJjZS53aWR0aCA9IHN3O1xuICAgIHNvdXJjZS5oZWlnaHQgPSBzaDtcbiAgICBsZXQgc3R4ID0gc291cmNlLmdldENvbnRleHQoJzJkJyk7XG4gICAgc3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHN3LCBzaCk7XG5cbiAgICBsZXQgcGl4ZWxzID0gc3R4LmdldEltYWdlRGF0YSgwLCAwLCBzdywgc2gpO1xuXG4gICAgbGV0IHIgPSBycmVmLmN1cnJlbnQ7XG4gICAgbGV0IHJ0eCA9IHIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgbmV3X3BpeGVscyA9IHJ0eC5jcmVhdGVJbWFnZURhdGEoYXcsIGFoKTtcbiAgICBuZXdfcGl4ZWxzLmRhdGEuc2V0KHBpeGVscy5kYXRhKTtcbiAgICByLndpZHRoID0gd3dyZWYuY3VycmVudDtcbiAgICByLmhlaWdodCA9IGFoICsgcmxoICogMjtcblxuICAgIHJ0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHJ0eC5maWxsUmVjdCgwLCAwLCByLndpZHRoLCByLmhlaWdodCk7XG4gICAgcnR4LnB1dEltYWdlRGF0YShuZXdfcGl4ZWxzLCBjaCAqIDIsIHJsaCk7XG5cbiAgICBydHguZm9udCA9IGAke2ZzfXB4LyR7bGh9IGN1c3RvbWA7XG4gICAgcnR4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIHJ0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGxldCBoZWlnaHQgPSB3cmFwVGV4dChcbiAgICAgIHJ0eCxcbiAgICAgIHRleHQsXG4gICAgICByLndpZHRoIC0gY2ggKiAyIC0gYXcsXG4gICAgICBybGggKyBybGggLyAyICsgMixcbiAgICAgIGF3ICsgY2ggLyAyLFxuICAgICAgZnMgKiBsaFxuICAgICk7XG5cbiAgICByZWFkb3V0cmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gYHdpZHRoOiAke1xuICAgICAgd3dyZWYuY3VycmVudFxuICAgIH0gIGltYWdlOiAke2l3fXgke2lofSAoJHtNYXRoLnJvdW5kKChpdyAvIGloKSAqIDEwMDApIC9cbiAgICAgIDEwMDB9KSAgc291cmNlOiAke3N3fXgke3NofSAgdGFyZ2V0OiAke2F3fXgke2FofSAoJHtNYXRoLnJvdW5kKFxuICAgICAgKGF3IC8gYWgpICogMTAwMFxuICAgICkgLyAxMDAwfSlgO1xuXG4gICAge1xuICAgICAgbGV0IGQgPSBkcmVmLmN1cnJlbnQ7XG4gICAgICBkLndpZHRoID0gYXcgKiAyO1xuICAgICAgZC5oZWlnaHQgPSBhaCAqIDI7XG4gICAgICBkLnN0eWxlLndpZHRoID0gYXcgKyAncHgnO1xuICAgICAgZC5zdHlsZS5oZWlnaHQgPSBhaCArICdweCc7XG4gICAgICBsZXQgZHR4ID0gZC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgZHR4LmZvbnQgPSBgJHtmc31weC8ke2xofSBjdXN0b21gO1xuICAgICAgZHR4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgZHR4LnNjYWxlKDIsIDIpO1xuICAgICAgZHR4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICBkdHguZmlsbFJlY3QoMCwgMCwgYXcsIGFoKTtcbiAgICAgIGR0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgbGV0IGhlaWdodCA9IHdyYXBUZXh0KFxuICAgICAgICBkdHgsXG4gICAgICAgIHRleHQsXG4gICAgICAgIDAsXG4gICAgICAgIHJsaCArIHJsaCAvIDIgKyAyLFxuICAgICAgICBhdyArIGNoIC8gMixcbiAgICAgICAgZnMgKiBsaFxuICAgICAgKTtcbiAgICAgIGN0eC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcnR4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICBydHguZmlsbFJlY3QoMCwgMCwgYXcsIGFoKTtcbiAgICAgIC8vIHJ0eC5kcmF3SW1hZ2UoZCwgMCwgMCxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjLCBjYWxsYmFjaykge1xuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgaW1ncmVmLmN1cnJlbnQgPSBpbWc7XG4gICAgICByZXNwb25kKCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBpbml0SW1hZ2UoZGVmYXVsdF9pbWFnZVswXSk7XG4gIH0sIFtraWNrb2ZmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcbiAgICAgIHNldFRleHQoc2hvcnRfdGV4dCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0S2lja29mZih0cnVlKTtcbiAgICB9LCAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltZ3JlZi5jdXJyZW50ICE9PSBudWxsKSByZXNwb25kKCk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5O1xuICAgIGxldCBpbmMgPSAxO1xuICAgIGlmIChzaGlmdCkgaW5jID0gMTA7XG4gICAgaWYgKGtleSA9PT0gJ2gnIHx8IGtleSA9PT0gJ2Fycm93bGVmdCcpIHtcbiAgICAgIGxldCBuZXh0ID0gd3dyZWYuY3VycmVudCAtIGluYztcbiAgICAgIGlmIChuZXh0IDwgMTApIG5leHQgPSAxMDtcbiAgICAgIHNldFNpemUobmV4dCk7XG4gICAgICByZXNwb25kKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0Jykge1xuICAgICAgbGV0IG5leHQgPSB3d3JlZi5jdXJyZW50ICsgaW5jO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ28nKSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSk7XG4gICAgICAgICAgaW5pdEltYWdlKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3cnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgdmFyIHJldm9rZVVSTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChtZS5ocmVmKTtcbiAgICAgICAgICBtZS5ocmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgfTtcblxuICAgICAgcnJlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgYGRpcHR5Y2gtJHtuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyl9Wi5wbmdgXG4gICAgICAgICk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZScpIHtcbiAgICAgIHRleHRhcmVhcmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIGxldCB0ID0gdGV4dGFyZWFyZWYuY3VycmVudDtcbiAgICAgIHQuc2VsZWN0aW9uU3RhcnQgPSB0LnNlbGVjdGlvbkVuZCA9IHQudmFsdWUubGVuZ3RoO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnPycpIHtcbiAgICAgIHNldEhlbHAocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuICFwcmV2U3RhdGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0tleShrZXkpIHtcbiAgICBrZXlBY3Rpb24oeyBrZXk6IGtleSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpemUod2lkdGgpIHtcbiAgICB3d3JlZi5jdXJyZW50ID0gd2lkdGg7XG4gICAgY29udGFpbmVycmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJyc7XG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgaW5pdEltYWdlKHNyYyk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5QWN0aW9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW3RleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGFpbmVycmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAvLyBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsICR7NjggKiBjaH1weClgLFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoMiwgMWZyKWAsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCxcbiAgICAgICAgICBncmlkQ29sdW1uR2FwOiAnM2NoJyxcbiAgICAgICAgICAvLyB3aWR0aDogY2ggKiAoNjggKiAyICsgMiAqIDIgKyAzKSxcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZWY9e3JyZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2RyZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3RyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAncmdiYSgwLDI1NSwwLDAuMiknLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGV4dH3igItcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJlZj17dGV4dGFyZWFyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25QYXN0ZT17ZSA9PiB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGUoJ2VkaXRpbmcnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRNb2RlKCdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleSA9PT0gJ0VudGVyJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICBmb250RmFtaWx5OiAnY3VzdG9tb25vJyxcbiAgICAgICAgICBmb250U2l6ZTogbWZzLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IGxoLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e3JlYWRvdXRyZWZ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgcmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIGJvdHRvbTogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnY3VzdG9tb25vJywgZm9udFNpemU6IG1mcywgbGluZUhlaWdodDogbGggfX0+XG4gICAgICAgIDxJbmZvXG4gICAgICAgICAgcmxoPXttcmxofVxuICAgICAgICAgIGhlbHA9e2hlbHB9XG4gICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICBjbGlja0tleT17Y2xpY2tLZXl9XG4gICAgICAgICAgaW1hZ2VfaW5mbz17ZGVmYXVsdF9pbWFnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9JQk1QbGV4U2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b21vbm8nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMsXG4gICAgICAgIGg0LFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtybGh9cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/diptych/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6c626a265225c54dc2bf.hot-update.js.map