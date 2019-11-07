webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/info */ "./components/info.js");

var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



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

var plain_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off \u2014 then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n\nThere now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs \u2014 commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.";

var Home = function Home(img) {
  var rref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var targetref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var wwref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var containerref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var readoutref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var tref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var imgref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var textarearef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(plain_text),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      help = _useState2[0],
      setHelp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('default'),
      mode = _useState3[0],
      setMode = _useState3[1];

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
  }

  function initImage(src) {
    var img = new Image();

    img.onload = function () {
      imgref.current = img;
      respond();
    };

    img.src = src;
  }

  var images = ['peck.jpg', 'cruise.jpg', 'whale.jpg'];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSize(window.innerWidth); // setSize(898);

    initImage(images[Math.floor(Math.random() * images.length)]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (imgref.current !== null) respond();
  }, [text]);

  function keyAction(e) {
    var key = e.key.toLowerCase();
    var shift = e.shiftKey;
    var inc = 1;
    if (shift) inc = 10;

    if (key === 'h') {
      var next = wwref.current - inc;
      if (next < 10) next = 10;
      setSize(next);
      respond();
    } else if (key === 'l') {
      var _next = wwref.current + inc;

      setSize(_next);
      respond();
    } else if (key === 'o') {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      e.preventDefault();
    }
  }

  function clickKey(key) {
    keyAction(key, false);
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
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Diptych"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  })), __jsx("div", {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: rref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx("div", {
    ref: tref,
    style: {
      position: 'relative',
      whiteSpace: 'pre-wrap',
      pointerEvents: 'none',
      background: 'white' // background: 'rgba(0,255,0,0.2)',

    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, text, "\u200B"), __jsx("textarea", {
    ref: textarearef,
    style: {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }), __jsx("div", {
    style: {
      fontFamily: 'customono',
      fontSize: mfs,
      lineHeight: lh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx(_components_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rlh: mrlh,
    help: help,
    mode: mode,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2820767456",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:white;}textarea:focus{background:#ddd;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3doYWxlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlZeUIsQUFHZ0MsQUFLRyxBQUtGLEFBR1csQUFNeEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0csQUFHRCxTQS9CTixBQVlRLEFBTXdCLEtBZDVDLEFBa0JhLEFBSWIsRUFNZSxDQUhmLEVBNUJBLEVBbkJtRCxDQVNuRCxFQUptRCxDQW9DbkQsRUFWc0IsRUFvQnRCLEdBdkMyQyxlQW9CdEIsSUFLckIsZUFKQSxPQXBCMkMseUNBQ3pCLFVBYmxCLEdBS0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy93aGFsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvaW5mbyc7XG5cbmxldCBmcyA9IDE2O1xubGV0IGxoID0gMS41O1xubGV0IHJsaCA9IGZzICogbGg7XG4vLyBtZWFzdXJlZFxubGV0IGNyID0gOC40IC8gMjE7XG5sZXQgY2ggPSBjciAqIHJsaDtcblxubGV0IG1mcyA9IDE0O1xubGV0IG1ybGggPSBtZnMgKiBsaDtcblxuZnVuY3Rpb24gd3JhcFRleHQoY29udGV4dCwgdGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQpIHtcbiAgLy8gZnJvbSBodHRwczovL2NvZGVwZW4uaW8vcGV0ZXJocnkvcGVuL0FHSUVhXG4gIC8vIG1vZGlmaWVkIHRvIHJlc3BlY3QgbGluZSBicmVha3NcbiAgbGV0IG9neCA9IHg7XG4gIGxldCBvZ3kgPSB5O1xuICBsZXQgcGFyYWdyYXBocyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICBsZXQgaGVpZ2h0ID0gMDtcbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBwYXJhZ3JhcGhzLmxlbmd0aDsgcCsrKSB7XG4gICAgbGV0IHRleHQgPSBwYXJhZ3JhcGhzW3BdO1xuICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKSxcbiAgICAgIGxpbmUgPSAnJyxcbiAgICAgIGxpbmVDb3VudCA9IDAsXG4gICAgICBpLFxuICAgICAgdGVzdCxcbiAgICAgIG1ldHJpY3M7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlc3QgPSB3b3Jkc1tpXTtcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuICAgICAgd2hpbGUgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtdWNoIG9mIHRoZSB3b3JkIHdpbGwgZml0XG4gICAgICAgIHRlc3QgPSB0ZXN0LnN1YnN0cmluZygwLCB0ZXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIH1cbiAgICAgIGlmICh3b3Jkc1tpXSAhPSB0ZXN0KSB7XG4gICAgICAgIHdvcmRzLnNwbGljZShpICsgMSwgMCwgd29yZHNbaV0uc3Vic3RyKHRlc3QubGVuZ3RoKSk7XG4gICAgICAgIHdvcmRzW2ldID0gdGVzdDtcbiAgICAgIH1cblxuICAgICAgdGVzdCA9IGxpbmUgKyB3b3Jkc1tpXSArICcgJztcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuXG4gICAgICBpZiAobWV0cmljcy53aWR0aCA+PSBtYXhXaWR0aCAmJiBpID4gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgICBsaW5lID0gd29yZHNbaV0gKyAnICc7XG4gICAgICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgbGluZUNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gdGVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgaGVpZ2h0ICs9IGxpbmVIZWlnaHQ7XG4gIH1cbiAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgLy8gY29udGV4dC5maWxsUmVjdChvZ3gsIG9neSwgbWF4V2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmxldCBwbGFpbl90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLiBXaGVuZXZlciBJIGZpbmQgbXlzZWxmIGdyb3dpbmcgZ3JpbSBhYm91dCB0aGUgbW91dGg7IHdoZW5ldmVyIGl0IGlzIGEgZGFtcCwgZHJpenpseSBOb3ZlbWJlciBpbiBteSBzb3VsOyB3aGVuZXZlciBJIGZpbmQgbXlzZWxmIGludm9sdW50YXJpbHkgcGF1c2luZyBiZWZvcmUgY29mZmluIHdhcmVob3VzZXMsIGFuZCBicmluZ2luZyB1cCB0aGUgcmVhciBvZiBldmVyeSBmdW5lcmFsIEkgbWVldDsgYW5kIGVzcGVjaWFsbHkgd2hlbmV2ZXIgbXkgaHlwb3MgZ2V0IHN1Y2ggYW4gdXBwZXIgaGFuZCBvZiBtZSwgdGhhdCBpdCByZXF1aXJlcyBhIHN0cm9uZyBtb3JhbCBwcmluY2lwbGUgdG8gcHJldmVudCBtZSBmcm9tIGRlbGliZXJhdGVseSBzdGVwcGluZyBpbnRvIHRoZSBzdHJlZXQsIGFuZCBtZXRob2RpY2FsbHkga25vY2tpbmcgcGVvcGxl4oCZcyBoYXRzIG9mZiDigJQgdGhlbiwgSSBhY2NvdW50IGl0IGhpZ2ggdGltZSB0byBnZXQgdG8gc2VhIGFzIHNvb24gYXMgSSBjYW4uIFRoaXMgaXMgbXkgc3Vic3RpdHV0ZSBmb3IgcGlzdG9sIGFuZCBiYWxsLiAgV2l0aCBhIHBoaWxvc29waGljYWwgZmxvdXJpc2ggQ2F0byB0aHJvd3MgaGltc2VsZiB1cG9uIGhpcyBzd29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlIHNoaXAuIFRoZXJlIGlzIG5vdGhpbmcgc3VycHJpc2luZyBpbiB0aGlzLiBJZiB0aGV5IGJ1dCBrbmV3IGl0LCBhbG1vc3QgYWxsIG1lbiBpbiB0aGVpciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlcmlzaCB2ZXJ5IG5lYXJseSB0aGUgc2FtZSBmZWVsaW5ncyB0b3dhcmRzIHRoZSBvY2VhbiB3aXRoIG1lLlxuXG5UaGVyZSBub3cgaXMgeW91ciBpbnN1bGFyIGNpdHkgb2YgdGhlIE1hbmhhdHRvZXMsIGJlbHRlZCByb3VuZCBieSB3aGFydmVzIGFzIEluZGlhbiBpc2xlcyBieSBjb3JhbCByZWVmcyDigJQgY29tbWVyY2Ugc3Vycm91bmRzIGl0IHdpdGggaGVyIHN1cmYuIFJpZ2h0IGFuZCBsZWZ0LCB0aGUgc3RyZWV0cyB0YWtlIHlvdSB3YXRlcndhcmQuIEl0cyBleHRyZW1lIGRvd250b3duIGlzIHRoZSBiYXR0ZXJ5LCB3aGVyZSB0aGF0IG5vYmxlIG1vbGUgaXMgd2FzaGVkIGJ5IHdhdmVzLCBhbmQgY29vbGVkIGJ5IGJyZWV6ZXMsIHdoaWNoIGEgZmV3IGhvdXJzIHByZXZpb3VzIHdlcmUgb3V0IG9mIHNpZ2h0IG9mIGxhbmQuIExvb2sgYXQgdGhlIGNyb3dkcyBvZiB3YXRlci1nYXplcnMgdGhlcmUuYDtcblxuY29uc3QgSG9tZSA9IGltZyA9PiB7XG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGFyZ2V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgd3dyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBjb250YWluZXJyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCByZWFkb3V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGltZ3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRleHRhcmVhcmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUocGxhaW5fdGV4dCk7XG4gIGxldCBbaGVscCwgc2V0SGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7XG5cbiAgZnVuY3Rpb24gcmVzcG9uZCgpIHtcbiAgICBsZXQgYXcgPSB0cmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGFoID0gdHJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICBsZXQgYXJlYSA9IGF3ICogYWg7XG5cbiAgICBsZXQgaW1nID0gaW1ncmVmLmN1cnJlbnQ7XG4gICAgbGV0IGl3ID0gaW1nLndpZHRoO1xuICAgIGxldCBpaCA9IGltZy5oZWlnaHQ7XG5cbiAgICBsZXQgcmF0aW8gPSBpdyAvIGloO1xuICAgIGxldCBzdyA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KGFyZWEgKiByYXRpbykpO1xuICAgIGxldCBzaCA9IE1hdGguZmxvb3IoYXJlYSAvIHN3KTtcblxuICAgIGxldCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBzb3VyY2Uud2lkdGggPSBzdztcbiAgICBzb3VyY2UuaGVpZ2h0ID0gc2g7XG4gICAgbGV0IHN0eCA9IHNvdXJjZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBzdywgc2gpO1xuXG4gICAgbGV0IHBpeGVscyA9IHN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc3csIHNoKTtcblxuICAgIGxldCByID0gcnJlZi5jdXJyZW50O1xuICAgIGxldCBydHggPSByLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IG5ld19waXhlbHMgPSBydHguY3JlYXRlSW1hZ2VEYXRhKGF3LCBhaCk7XG4gICAgbmV3X3BpeGVscy5kYXRhLnNldChwaXhlbHMuZGF0YSk7XG4gICAgci53aWR0aCA9IHd3cmVmLmN1cnJlbnQ7XG4gICAgci5oZWlnaHQgPSBhaCArIHJsaCAqIDI7XG5cbiAgICBydHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBydHguZmlsbFJlY3QoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpO1xuICAgIHJ0eC5wdXRJbWFnZURhdGEobmV3X3BpeGVscywgY2ggKiAyLCBybGgpO1xuXG4gICAgcnR4LmZvbnQgPSBgJHtmc31weC8ke2xofSBjdXN0b21gO1xuICAgIHJ0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBydHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBsZXQgaGVpZ2h0ID0gd3JhcFRleHQoXG4gICAgICBydHgsXG4gICAgICB0ZXh0LFxuICAgICAgci53aWR0aCAtIGNoICogMiAtIGF3LFxuICAgICAgcmxoICsgcmxoIC8gMiArIDIsXG4gICAgICBhdyArIGNoIC8gMixcbiAgICAgIGZzICogbGhcbiAgICApO1xuXG4gICAgcmVhZG91dHJlZi5jdXJyZW50LmlubmVySFRNTCA9IGB3aWR0aDogJHtcbiAgICAgIHd3cmVmLmN1cnJlbnRcbiAgICB9ICBpbWFnZTogJHtpd314JHtpaH0gKCR7TWF0aC5yb3VuZCgoaXcgLyBpaCkgKiAxMDAwKSAvXG4gICAgICAxMDAwfSkgIHNvdXJjZTogJHtzd314JHtzaH0gIHRhcmdldDogJHthd314JHthaH0gKCR7TWF0aC5yb3VuZChcbiAgICAgIChhdyAvIGFoKSAqIDEwMDBcbiAgICApIC8gMTAwMH0pYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbWFnZShzcmMpIHtcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGltZ3JlZi5jdXJyZW50ID0gaW1nO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfVxuXG4gIGxldCBpbWFnZXMgPSBbJ3BlY2suanBnJywgJ2NydWlzZS5qcGcnLCAnd2hhbGUuanBnJ107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgLy8gc2V0U2l6ZSg4OTgpO1xuICAgIGluaXRJbWFnZShpbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VzLmxlbmd0aCldKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltZ3JlZi5jdXJyZW50ICE9PSBudWxsKSByZXNwb25kKCk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5O1xuICAgIGxldCBpbmMgPSAxO1xuICAgIGlmIChzaGlmdCkgaW5jID0gMTA7XG4gICAgaWYgKGtleSA9PT0gJ2gnKSB7XG4gICAgICBsZXQgbmV4dCA9IHd3cmVmLmN1cnJlbnQgLSBpbmM7XG4gICAgICBpZiAobmV4dCA8IDEwKSBuZXh0ID0gMTA7XG4gICAgICBzZXRTaXplKG5leHQpO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbCcpIHtcbiAgICAgIGxldCBuZXh0ID0gd3dyZWYuY3VycmVudCArIGluYztcbiAgICAgIHNldFNpemUobmV4dCk7XG4gICAgICByZXNwb25kKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pO1xuICAgICAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICd3Jykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwobWUuaHJlZik7XG4gICAgICAgICAgbWUuaHJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgIH07XG5cbiAgICAgIHJyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgIGBkaXB0eWNoLSR7bmV3IERhdGUoKVxuICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpfVoucG5nYFxuICAgICAgICApO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2UnKSB7XG4gICAgICB0ZXh0YXJlYXJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tLZXkoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZSh3aWR0aCkge1xuICAgIHd3cmVmLmN1cnJlbnQgPSB3aWR0aDtcbiAgICBjb250YWluZXJyZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUFjdGlvbik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbdGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGlwdHljaDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRhaW5lcnJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgLy8gZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgyLCAkezY4ICogY2h9cHgpYCxcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsIDFmcilgLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGgsXG4gICAgICAgICAgZ3JpZENvbHVtbkdhcDogJzNjaCcsXG4gICAgICAgICAgLy8gd2lkdGg6IGNoICogKDY4ICogMiArIDIgKiAyICsgMyksXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogJ2dyZWVuJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17cnJlZn1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXt0cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJ3JnYmEoMCwyNTUsMCwwLjIpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RleHR94oCLXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByZWY9e3RleHRhcmVhcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kZSgnZWRpdGluZycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGUoJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUua2V5ID09PSAnRW50ZXInKSBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdjdXN0b21vbm8nLFxuICAgICAgICAgIGZvbnRTaXplOiBtZnMsXG4gICAgICAgICAgbGluZUhlaWdodDogbGgsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17cmVhZG91dHJlZn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICByaWdodDogJzJjaCcsXG4gICAgICAgICAgYm90dG9tOiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdjdXN0b21vbm8nLCBmb250U2l6ZTogbWZzLCBsaW5lSGVpZ2h0OiBsaCB9fT5cbiAgICAgICAgPEluZm8gcmxoPXttcmxofSBoZWxwPXtoZWxwfSBtb2RlPXttb2RlfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tb25vJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.1b2c339004192004c6db.hot-update.js.map