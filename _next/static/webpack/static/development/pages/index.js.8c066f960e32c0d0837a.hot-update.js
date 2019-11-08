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
    readoutref.current.innerHTML = "width: ".concat(wwref.current, "  image: ").concat(iw, "x").concat(ih, " (").concat(Math.round(iw / ih * 1000) / 1000, ")  source: ").concat(sw, "x").concat(sh, "  target: ").concat(aw, "x").concat(ah, " (").concat(Math.round(aw / ah * 1000) / 1000, ")"); // {
    //   let d = dref.current;
    //   d.width = aw * 2;
    //   d.height = ah * 2;
    //   d.style.width = aw + 'px';
    //   d.style.height = ah + 'px';
    //   let dtx = d.getContext('2d');
    //   dtx.font = `${fs}px/${lh} custom`;
    //   dtx.textBaseline = 'middle';
    //   dtx.scale(2, 2);
    //   dtx.fillStyle = 'white';
    //   dtx.fillRect(0, 0, aw, ah);
    //   dtx.fillStyle = 'black';
    //   let height = wrapText(
    //     dtx,
    //     text,
    //     0,
    //     rlh + rlh / 2 + 2,
    //     aw + ch / 2,
    //     fs * lh
    //   );
    //   d.style.display = 'none';
    //   rtx.fillStyle = 'white';
    //   rtx.fillRect(0, 0, aw, ah);
    //   rtx.drawImage(d, 0, 0, aw * 2, ah * 2, 0, 0, aw, ah);
    // }
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
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:white;}textarea:focus{background:#efefef;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2RpcHR5Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK2R5QixBQUdnQyxBQUtHLEFBS0YsQUFHVyxBQU14QixBQUlLLEFBUUwsQUFNQSxBQUlLLEFBSUEsQUFHRyxBQUdFLFNBL0JULEFBWVEsQUFNd0IsS0FkNUMsQUFrQmEsQUFJYixHQUdBLEVBNUJBLEFBK0JlLEVBbERvQyxDQVNuRCxFQUptRCxDQW9DbkQsRUFWc0IsS0FuQnFCLEFBdUMzQyxlQW5CcUIsSUFLckIsZUFKQSxPQXBCMkMseUNBQ3pCLFVBYmxCLEdBS0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9kaXB0eWNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL2luZm8nO1xuXG5sZXQgZnMgPSAxNjtcbmxldCBsaCA9IDEuNTtcbmxldCBybGggPSBmcyAqIGxoO1xuLy8gbWVhc3VyZWRcbmxldCBjciA9IDguNCAvIDIxO1xubGV0IGNoID0gY3IgKiBybGg7XG5cbmxldCBtZnMgPSAxNDtcbmxldCBtcmxoID0gbWZzICogbGg7XG5cbmZ1bmN0aW9uIHdyYXBUZXh0KGNvbnRleHQsIHRleHQsIHgsIHksIG1heFdpZHRoLCBsaW5lSGVpZ2h0KSB7XG4gIC8vIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL3BldGVyaHJ5L3Blbi9BR0lFYVxuICAvLyBtb2RpZmllZCB0byByZXNwZWN0IGxpbmUgYnJlYWtzXG4gIGxldCBvZ3ggPSB4O1xuICBsZXQgb2d5ID0geTtcbiAgbGV0IHBhcmFncmFwaHMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgbGV0IGhlaWdodCA9IDA7XG4gIGZvciAobGV0IHAgPSAwOyBwIDwgcGFyYWdyYXBocy5sZW5ndGg7IHArKykge1xuICAgIGxldCB0ZXh0ID0gcGFyYWdyYXBoc1twXTtcbiAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyksXG4gICAgICBsaW5lID0gJycsXG4gICAgICBsaW5lQ291bnQgPSAwLFxuICAgICAgaSxcbiAgICAgIHRlc3QsXG4gICAgICBtZXRyaWNzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXN0ID0gd29yZHNbaV07XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIHdoaWxlIChtZXRyaWNzLndpZHRoID49IG1heFdpZHRoKSB7XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBvZiB0aGUgd29yZCB3aWxsIGZpdFxuICAgICAgICB0ZXN0ID0gdGVzdC5zdWJzdHJpbmcoMCwgdGVzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdCk7XG4gICAgICB9XG4gICAgICBpZiAod29yZHNbaV0gIT0gdGVzdCkge1xuICAgICAgICB3b3Jkcy5zcGxpY2UoaSArIDEsIDAsIHdvcmRzW2ldLnN1YnN0cih0ZXN0Lmxlbmd0aCkpO1xuICAgICAgICB3b3Jkc1tpXSA9IHRlc3Q7XG4gICAgICB9XG5cbiAgICAgIHRlc3QgPSBsaW5lICsgd29yZHNbaV0gKyAnICc7XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcblxuICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGggJiYgaSA+IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgICAgbGluZSA9IHdvcmRzW2ldICsgJyAnO1xuICAgICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgIGxpbmVDb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHRlc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgIGhlaWdodCArPSBsaW5lSGVpZ2h0O1xuICB9XG4gIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XG4gIC8vIGNvbnRleHQuZmlsbFJlY3Qob2d4LCBvZ3ksIG1heFdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5sZXQgaW1hZ2VzID0gW1xuICBbJ2JlYWNoLmpwZycsICdieSBKb3PDqSBEdWFydGUnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0R1aG9sQmZVVUNZJ10sXG4gIC8vIFtcbiAgLy8gICAnaWxsdXN0cmF0aW9uLmpwZycsXG4gIC8vICAgJ2J5IFJvY2t3ZWxsIEtlbnQnLFxuICAvLyAgICdodHRwczovL3d3dy5hcG9sbG8tbWFnYXppbmUuY29tL2hlcm1hbi1tZWx2aWxsZS1tb2J5LWRpY2stYXJ0aXN0cy1pbGx1c3RyYXRvcnMvJyxcbiAgLy8gXSxcbiAgW1xuICAgICdwZWNrLmpwZycsXG4gICAgJ2Zyb20gTW9ieSBEaWNrICgxOTU2IGZpbG0pJyxcbiAgICAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9ieV9EaWNrXygxOTU2X2ZpbG0pJyxcbiAgXSxcbiAgW1xuICAgICd3aGFsZS1qdW1wLmpwZycsXG4gICAgJ2J5IFRob21hcyBLZWxsZXknLFxuICAgICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdDIwcGMzMlZiclUnLFxuICBdLFxuICBbXG4gICAgJ3doYWxlLXRhaWwuanBnJyxcbiAgICAnYnkgSXN3YW50byBBcmlmJyxcbiAgICAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1Z6aXV2d3BHYXRNJyxcbiAgXSxcbl07XG5sZXQgcGxhaW5fdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdvIOKAlCBuZXZlciBtaW5kIGhvdyBsb25nIHByZWNpc2VseSDigJQgaGF2aW5nIGxpdHRsZSBvciBubyBtb25leSBpbiBteSBwdXJzZSwgYW5kIG5vdGhpbmcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSSB0aG91Z2h0IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0aGUgd29ybGQuIEl0IGlzIGEgd2F5IEkgaGF2ZSBvZiBkcml2aW5nIG9mZiB0aGUgc3BsZWVuIGFuZCByZWd1bGF0aW5nIHRoZSBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBncm93aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoOyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkgTm92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBpbnZvbHVudGFyaWx5IHBhdXNpbmcgYmVmb3JlIGNvZmZpbiB3YXJlaG91c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJlYXIgb2YgZXZlcnkgZnVuZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2lhbGx5IHdoZW5ldmVyIG15IGh5cG9zIGdldCBzdWNoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYSBzdHJvbmcgbW9yYWwgcHJpbmNpcGxlIHRvIHByZXZlbnQgbWUgZnJvbSBkZWxpYmVyYXRlbHkgc3RlcHBpbmcgaW50byB0aGUgc3RyZWV0LCBhbmQgbWV0aG9kaWNhbGx5IGtub2NraW5nIHBlb3BsZeKAmXMgaGF0cyBvZmYg4oCUIHRoZW4sIEkgYWNjb3VudCBpdCBoaWdoIHRpbWUgdG8gZ2V0IHRvIHNlYSBhcyBzb29uIGFzIEkgY2FuLiBUaGlzIGlzIG15IHN1YnN0aXR1dGUgZm9yIHBpc3RvbCBhbmQgYmFsbC4gIFdpdGggYSBwaGlsb3NvcGhpY2FsIGZsb3VyaXNoIENhdG8gdGhyb3dzIGhpbXNlbGYgdXBvbiBoaXMgc3dvcmQ7IEkgcXVpZXRseSB0YWtlIHRvIHRoZSBzaGlwLiBUaGVyZSBpcyBub3RoaW5nIHN1cnByaXNpbmcgaW4gdGhpcy4gSWYgdGhleSBidXQga25ldyBpdCwgYWxtb3N0IGFsbCBtZW4gaW4gdGhlaXIgZGVncmVlLCBzb21lIHRpbWUgb3Igb3RoZXIsIGNoZXJpc2ggdmVyeSBuZWFybHkgdGhlIHNhbWUgZmVlbGluZ3MgdG93YXJkcyB0aGUgb2NlYW4gd2l0aCBtZS5cblxuVGhlcmUgbm93IGlzIHlvdXIgaW5zdWxhciBjaXR5IG9mIHRoZSBNYW5oYXR0b2VzLCBiZWx0ZWQgcm91bmQgYnkgd2hhcnZlcyBhcyBJbmRpYW4gaXNsZXMgYnkgY29yYWwgcmVlZnMg4oCUIGNvbW1lcmNlIHN1cnJvdW5kcyBpdCB3aXRoIGhlciBzdXJmLiBSaWdodCBhbmQgbGVmdCwgdGhlIHN0cmVldHMgdGFrZSB5b3Ugd2F0ZXJ3YXJkLiBJdHMgZXh0cmVtZSBkb3dudG93biBpcyB0aGUgYmF0dGVyeSwgd2hlcmUgdGhhdCBub2JsZSBtb2xlIGlzIHdhc2hlZCBieSB3YXZlcywgYW5kIGNvb2xlZCBieSBicmVlemVzLCB3aGljaCBhIGZldyBob3VycyBwcmV2aW91cyB3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBjcm93ZHMgb2Ygd2F0ZXItZ2F6ZXJzIHRoZXJlLmA7XG5cbmxldCBzaG9ydF90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLmA7XG5cbmNvbnN0IEhvbWUgPSBpbWcgPT4ge1xuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRhcmdldHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHd3cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY29udGFpbmVycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgcmVhZG91dHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBpbWdyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBkcmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGV4dGFyZWFyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShwbGFpbl90ZXh0KTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcbiAgbGV0IFtkZWZhdWx0X2ltYWdlXSA9IHVzZVN0YXRlKFxuICAgIGltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2VzLmxlbmd0aCAtIDEpKV1cbiAgKTtcbiAgbGV0IFtraWNrb2ZmLCBzZXRLaWNrb2ZmXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiByZXNwb25kKCkge1xuICAgIGxldCBhdyA9IHRyZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgYWggPSB0cmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBhcmVhID0gYXcgKiBhaDtcblxuICAgIGxldCBpbWcgPSBpbWdyZWYuY3VycmVudDtcbiAgICBsZXQgaXcgPSBpbWcud2lkdGg7XG4gICAgbGV0IGloID0gaW1nLmhlaWdodDtcblxuICAgIGxldCByYXRpbyA9IGl3IC8gaWg7XG4gICAgbGV0IHN3ID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoYXJlYSAqIHJhdGlvKSk7XG4gICAgbGV0IHNoID0gTWF0aC5mbG9vcihhcmVhIC8gc3cpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHNvdXJjZS53aWR0aCA9IHN3O1xuICAgIHNvdXJjZS5oZWlnaHQgPSBzaDtcbiAgICBsZXQgc3R4ID0gc291cmNlLmdldENvbnRleHQoJzJkJyk7XG4gICAgc3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHN3LCBzaCk7XG5cbiAgICBsZXQgcGl4ZWxzID0gc3R4LmdldEltYWdlRGF0YSgwLCAwLCBzdywgc2gpO1xuXG4gICAgbGV0IHIgPSBycmVmLmN1cnJlbnQ7XG4gICAgbGV0IHJ0eCA9IHIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgbmV3X3BpeGVscyA9IHJ0eC5jcmVhdGVJbWFnZURhdGEoYXcsIGFoKTtcbiAgICBuZXdfcGl4ZWxzLmRhdGEuc2V0KHBpeGVscy5kYXRhKTtcbiAgICByLndpZHRoID0gd3dyZWYuY3VycmVudDtcbiAgICByLmhlaWdodCA9IGFoICsgcmxoICogMjtcblxuICAgIHJ0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHJ0eC5maWxsUmVjdCgwLCAwLCByLndpZHRoLCByLmhlaWdodCk7XG4gICAgcnR4LnB1dEltYWdlRGF0YShuZXdfcGl4ZWxzLCBjaCAqIDIsIHJsaCk7XG5cbiAgICBydHguZm9udCA9IGAke2ZzfXB4LyR7bGh9IGN1c3RvbWA7XG4gICAgcnR4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIHJ0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGxldCBoZWlnaHQgPSB3cmFwVGV4dChcbiAgICAgIHJ0eCxcbiAgICAgIHRleHQsXG4gICAgICByLndpZHRoIC0gY2ggKiAyIC0gYXcsXG4gICAgICBybGggKyBybGggLyAyICsgMixcbiAgICAgIGF3ICsgY2ggLyAyLFxuICAgICAgZnMgKiBsaFxuICAgICk7XG5cbiAgICByZWFkb3V0cmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gYHdpZHRoOiAke1xuICAgICAgd3dyZWYuY3VycmVudFxuICAgIH0gIGltYWdlOiAke2l3fXgke2lofSAoJHtNYXRoLnJvdW5kKChpdyAvIGloKSAqIDEwMDApIC9cbiAgICAgIDEwMDB9KSAgc291cmNlOiAke3N3fXgke3NofSAgdGFyZ2V0OiAke2F3fXgke2FofSAoJHtNYXRoLnJvdW5kKFxuICAgICAgKGF3IC8gYWgpICogMTAwMFxuICAgICkgLyAxMDAwfSlgO1xuXG4gICAgLy8ge1xuICAgIC8vICAgbGV0IGQgPSBkcmVmLmN1cnJlbnQ7XG4gICAgLy8gICBkLndpZHRoID0gYXcgKiAyO1xuICAgIC8vICAgZC5oZWlnaHQgPSBhaCAqIDI7XG4gICAgLy8gICBkLnN0eWxlLndpZHRoID0gYXcgKyAncHgnO1xuICAgIC8vICAgZC5zdHlsZS5oZWlnaHQgPSBhaCArICdweCc7XG4gICAgLy8gICBsZXQgZHR4ID0gZC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vICAgZHR4LmZvbnQgPSBgJHtmc31weC8ke2xofSBjdXN0b21gO1xuICAgIC8vICAgZHR4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIC8vICAgZHR4LnNjYWxlKDIsIDIpO1xuICAgIC8vICAgZHR4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgLy8gICBkdHguZmlsbFJlY3QoMCwgMCwgYXcsIGFoKTtcbiAgICAvLyAgIGR0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIC8vICAgbGV0IGhlaWdodCA9IHdyYXBUZXh0KFxuICAgIC8vICAgICBkdHgsXG4gICAgLy8gICAgIHRleHQsXG4gICAgLy8gICAgIDAsXG4gICAgLy8gICAgIHJsaCArIHJsaCAvIDIgKyAyLFxuICAgIC8vICAgICBhdyArIGNoIC8gMixcbiAgICAvLyAgICAgZnMgKiBsaFxuICAgIC8vICAgKTtcbiAgICAvLyAgIGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyAgIHJ0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIC8vICAgcnR4LmZpbGxSZWN0KDAsIDAsIGF3LCBhaCk7XG4gICAgLy8gICBydHguZHJhd0ltYWdlKGQsIDAsIDAsIGF3ICogMiwgYWggKiAyLCAwLCAwLCBhdywgYWgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbWFnZShzcmMsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpbWdyZWYuY3VycmVudCA9IGltZztcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgIGluaXRJbWFnZShkZWZhdWx0X2ltYWdlWzBdKTtcbiAgfSwgW2tpY2tvZmZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuICAgICAgc2V0VGV4dChzaG9ydF90ZXh0KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRLaWNrb2ZmKHRydWUpO1xuICAgIH0sIDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW1ncmVmLmN1cnJlbnQgIT09IG51bGwpIHJlc3BvbmQoKTtcbiAgfSwgW3RleHRdKTtcblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oZSkge1xuICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBzaGlmdCA9IGUuc2hpZnRLZXk7XG4gICAgbGV0IGluYyA9IDE7XG4gICAgaWYgKHNoaWZ0KSBpbmMgPSAxMDtcbiAgICBpZiAoa2V5ID09PSAnaCcgfHwga2V5ID09PSAnYXJyb3dsZWZ0Jykge1xuICAgICAgbGV0IG5leHQgPSB3d3JlZi5jdXJyZW50IC0gaW5jO1xuICAgICAgaWYgKG5leHQgPCAxMCkgbmV4dCA9IDEwO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2wnIHx8IGtleSA9PT0gJ2Fycm93cmlnaHQnKSB7XG4gICAgICBsZXQgbmV4dCA9IHd3cmVmLmN1cnJlbnQgKyBpbmM7XG4gICAgICBzZXRTaXplKG5leHQpO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndycpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICB2YXIgcmV2b2tlVVJMID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG1lLmhyZWYpO1xuICAgICAgICAgIG1lLmhyZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICB9O1xuXG4gICAgICBycmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICBgZGlwdHljaC0ke25ldyBEYXRlKClcbiAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKX1aLnBuZ2BcbiAgICAgICAgKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlJykge1xuICAgICAgdGV4dGFyZWFyZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgbGV0IHQgPSB0ZXh0YXJlYXJlZi5jdXJyZW50O1xuICAgICAgdC5zZWxlY3Rpb25TdGFydCA9IHQuc2VsZWN0aW9uRW5kID0gdC52YWx1ZS5sZW5ndGg7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICc/Jykge1xuICAgICAgc2V0SGVscChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gIXByZXZTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrS2V5KGtleSkge1xuICAgIGtleUFjdGlvbih7IGtleToga2V5IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZSh3aWR0aCkge1xuICAgIHd3cmVmLmN1cnJlbnQgPSB3aWR0aDtcbiAgICBjb250YWluZXJyZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUFjdGlvbik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbdGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250YWluZXJyZWZ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgIC8vIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoMiwgJHs2OCAqIGNofXB4KWAsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgyLCAxZnIpYCxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGgsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoLFxuICAgICAgICAgIGdyaWRDb2x1bW5HYXA6ICczY2gnLFxuICAgICAgICAgIC8vIHdpZHRoOiBjaCAqICg2OCAqIDIgKyAyICogMiArIDMpLFxuICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICdncmVlbicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17cnJlZn1cbiAgICAgICAgLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17ZHJlZn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17dHJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICdyZ2JhKDAsMjU1LDAsMC4yKScsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0ZXh0feKAi1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcmVmPXt0ZXh0YXJlYXJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblBhc3RlPXtlID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kZSgnZWRpdGluZycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGUoJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUua2V5ID09PSAnRW50ZXInKSBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdjdXN0b21vbm8nLFxuICAgICAgICAgIGZvbnRTaXplOiBtZnMsXG4gICAgICAgICAgbGluZUhlaWdodDogbGgsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17cmVhZG91dHJlZn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICByaWdodDogJzJjaCcsXG4gICAgICAgICAgYm90dG9tOiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdjdXN0b21vbm8nLCBmb250U2l6ZTogbWZzLCBsaW5lSGVpZ2h0OiBsaCB9fT5cbiAgICAgICAgPEluZm9cbiAgICAgICAgICBybGg9e21ybGh9XG4gICAgICAgICAgaGVscD17aGVscH1cbiAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgIGNsaWNrS2V5PXtjbGlja0tleX1cbiAgICAgICAgICBpbWFnZV9pbmZvPXtkZWZhdWx0X2ltYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4U2Fucy1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbW9ubyc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZzfXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xofTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/diptych/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8c066f960e32c0d0837a.hot-update.js.map