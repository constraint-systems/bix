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

var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var fs = 16;
var lh = 1.5;
var rlh = fs * lh; // measured

var cr = 8.4 / 21;
var ch = cr * rlh;

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(plain_text),
      text = _useState[0],
      setText = _useState[1];

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
    }
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
      lineNumber: 268
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Diptych"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
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
      lineNumber: 274
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
      lineNumber: 290
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
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
      lineNumber: 301
    },
    __self: this
  }, text, "\u200B"), __jsx("textarea", {
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
      lineNumber: 313
    },
    __self: this
  }))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      whiteSpace: 'pre-wrap',
      fontFamily: 'customono',
      fontSize: 14,
      lineHeight: 1.5
    },
    ref: readoutref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2820767456", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
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
      lineNumber: 357
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2820767456",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:white;}textarea:focus{background:#ddd;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3doYWxlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdYeUIsQUFHZ0MsQUFLRyxBQUtGLEFBR1csQUFNeEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0csQUFHRCxTQS9CTixBQVlRLEFBTXdCLEtBZDVDLEFBa0JhLEFBSWIsRUFNZSxDQUhmLEVBNUJBLEVBbkJtRCxDQVNuRCxFQUptRCxDQW9DbkQsRUFWc0IsRUFvQnRCLEdBdkMyQyxlQW9CdEIsSUFLckIsZUFKQSxPQXBCMkMseUNBQ3pCLFVBYmxCLEdBS0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy93aGFsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxubGV0IGZzID0gMTY7XG5sZXQgbGggPSAxLjU7XG5sZXQgcmxoID0gZnMgKiBsaDtcbi8vIG1lYXN1cmVkXG5sZXQgY3IgPSA4LjQgLyAyMTtcbmxldCBjaCA9IGNyICogcmxoO1xuXG5mdW5jdGlvbiB3cmFwVGV4dChjb250ZXh0LCB0ZXh0LCB4LCB5LCBtYXhXaWR0aCwgbGluZUhlaWdodCkge1xuICAvLyBmcm9tIGh0dHBzOi8vY29kZXBlbi5pby9wZXRlcmhyeS9wZW4vQUdJRWFcbiAgLy8gbW9kaWZpZWQgdG8gcmVzcGVjdCBsaW5lIGJyZWFrc1xuICBsZXQgb2d4ID0geDtcbiAgbGV0IG9neSA9IHk7XG4gIGxldCBwYXJhZ3JhcGhzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gIGxldCBoZWlnaHQgPSAwO1xuICBmb3IgKGxldCBwID0gMDsgcCA8IHBhcmFncmFwaHMubGVuZ3RoOyBwKyspIHtcbiAgICBsZXQgdGV4dCA9IHBhcmFncmFwaHNbcF07XG4gICAgdmFyIHdvcmRzID0gdGV4dC5zcGxpdCgnICcpLFxuICAgICAgbGluZSA9ICcnLFxuICAgICAgbGluZUNvdW50ID0gMCxcbiAgICAgIGksXG4gICAgICB0ZXN0LFxuICAgICAgbWV0cmljcztcblxuICAgIGZvciAoaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGVzdCA9IHdvcmRzW2ldO1xuICAgICAgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdCk7XG4gICAgICB3aGlsZSAobWV0cmljcy53aWR0aCA+PSBtYXhXaWR0aCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgaG93IG11Y2ggb2YgdGhlIHdvcmQgd2lsbCBmaXRcbiAgICAgICAgdGVzdCA9IHRlc3Quc3Vic3RyaW5nKDAsIHRlc3QubGVuZ3RoIC0gMSk7XG4gICAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmRzW2ldICE9IHRlc3QpIHtcbiAgICAgICAgd29yZHMuc3BsaWNlKGkgKyAxLCAwLCB3b3Jkc1tpXS5zdWJzdHIodGVzdC5sZW5ndGgpKTtcbiAgICAgICAgd29yZHNbaV0gPSB0ZXN0O1xuICAgICAgfVxuXG4gICAgICB0ZXN0ID0gbGluZSArIHdvcmRzW2ldICsgJyAnO1xuICAgICAgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdCk7XG5cbiAgICAgIGlmIChtZXRyaWNzLndpZHRoID49IG1heFdpZHRoICYmIGkgPiAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAgIGxpbmUgPSB3b3Jkc1tpXSArICcgJztcbiAgICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICBsaW5lQ291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmUgPSB0ZXN0O1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICBoZWlnaHQgKz0gbGluZUhlaWdodDtcbiAgfVxuICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAvLyBjb250ZXh0LmZpbGxSZWN0KG9neCwgb2d5LCBtYXhXaWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIGhlaWdodDtcbn1cblxubGV0IHBsYWluX3RleHQgPSBgQ0hBUFRFUiAxLiBMb29taW5ncy5cblxuQ2FsbCBtZSBJc2htYWVsLiBTb21lIHllYXJzIGFnbyDigJQgbmV2ZXIgbWluZCBob3cgbG9uZyBwcmVjaXNlbHkg4oCUIGhhdmluZyBsaXR0bGUgb3Igbm8gbW9uZXkgaW4gbXkgcHVyc2UsIGFuZCBub3RoaW5nIHBhcnRpY3VsYXIgdG8gaW50ZXJlc3QgbWUgb24gc2hvcmUsIEkgdGhvdWdodCBJIHdvdWxkIHNhaWwgYWJvdXQgYSBsaXR0bGUgYW5kIHNlZSB0aGUgd2F0ZXJ5IHBhcnQgb2YgdGhlIHdvcmxkLiBJdCBpcyBhIHdheSBJIGhhdmUgb2YgZHJpdmluZyBvZmYgdGhlIHNwbGVlbiBhbmQgcmVndWxhdGluZyB0aGUgY2lyY3VsYXRpb24uIFdoZW5ldmVyIEkgZmluZCBteXNlbGYgZ3Jvd2luZyBncmltIGFib3V0IHRoZSBtb3V0aDsgd2hlbmV2ZXIgaXQgaXMgYSBkYW1wLCBkcml6emx5IE5vdmVtYmVyIGluIG15IHNvdWw7IHdoZW5ldmVyIEkgZmluZCBteXNlbGYgaW52b2x1bnRhcmlseSBwYXVzaW5nIGJlZm9yZSBjb2ZmaW4gd2FyZWhvdXNlcywgYW5kIGJyaW5naW5nIHVwIHRoZSByZWFyIG9mIGV2ZXJ5IGZ1bmVyYWwgSSBtZWV0OyBhbmQgZXNwZWNpYWxseSB3aGVuZXZlciBteSBoeXBvcyBnZXQgc3VjaCBhbiB1cHBlciBoYW5kIG9mIG1lLCB0aGF0IGl0IHJlcXVpcmVzIGEgc3Ryb25nIG1vcmFsIHByaW5jaXBsZSB0byBwcmV2ZW50IG1lIGZyb20gZGVsaWJlcmF0ZWx5IHN0ZXBwaW5nIGludG8gdGhlIHN0cmVldCwgYW5kIG1ldGhvZGljYWxseSBrbm9ja2luZyBwZW9wbGXigJlzIGhhdHMgb2ZmIOKAlCB0aGVuLCBJIGFjY291bnQgaXQgaGlnaCB0aW1lIHRvIGdldCB0byBzZWEgYXMgc29vbiBhcyBJIGNhbi4gVGhpcyBpcyBteSBzdWJzdGl0dXRlIGZvciBwaXN0b2wgYW5kIGJhbGwuICBXaXRoIGEgcGhpbG9zb3BoaWNhbCBmbG91cmlzaCBDYXRvIHRocm93cyBoaW1zZWxmIHVwb24gaGlzIHN3b3JkOyBJIHF1aWV0bHkgdGFrZSB0byB0aGUgc2hpcC4gVGhlcmUgaXMgbm90aGluZyBzdXJwcmlzaW5nIGluIHRoaXMuIElmIHRoZXkgYnV0IGtuZXcgaXQsIGFsbW9zdCBhbGwgbWVuIGluIHRoZWlyIGRlZ3JlZSwgc29tZSB0aW1lIG9yIG90aGVyLCBjaGVyaXNoIHZlcnkgbmVhcmx5IHRoZSBzYW1lIGZlZWxpbmdzIHRvd2FyZHMgdGhlIG9jZWFuIHdpdGggbWUuXG5cblRoZXJlIG5vdyBpcyB5b3VyIGluc3VsYXIgY2l0eSBvZiB0aGUgTWFuaGF0dG9lcywgYmVsdGVkIHJvdW5kIGJ5IHdoYXJ2ZXMgYXMgSW5kaWFuIGlzbGVzIGJ5IGNvcmFsIHJlZWZzIOKAlCBjb21tZXJjZSBzdXJyb3VuZHMgaXQgd2l0aCBoZXIgc3VyZi4gUmlnaHQgYW5kIGxlZnQsIHRoZSBzdHJlZXRzIHRha2UgeW91IHdhdGVyd2FyZC4gSXRzIGV4dHJlbWUgZG93bnRvd24gaXMgdGhlIGJhdHRlcnksIHdoZXJlIHRoYXQgbm9ibGUgbW9sZSBpcyB3YXNoZWQgYnkgd2F2ZXMsIGFuZCBjb29sZWQgYnkgYnJlZXplcywgd2hpY2ggYSBmZXcgaG91cnMgcHJldmlvdXMgd2VyZSBvdXQgb2Ygc2lnaHQgb2YgbGFuZC4gTG9vayBhdCB0aGUgY3Jvd2RzIG9mIHdhdGVyLWdhemVycyB0aGVyZS5gO1xuXG5jb25zdCBIb21lID0gaW1nID0+IHtcbiAgbGV0IHJyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCB0YXJnZXRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCB3d3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNvbnRhaW5lcnJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHJlYWRvdXRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCB0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgaW1ncmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUocGxhaW5fdGV4dCk7XG5cbiAgZnVuY3Rpb24gcmVzcG9uZCgpIHtcbiAgICBsZXQgYXcgPSB0cmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGFoID0gdHJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICBsZXQgYXJlYSA9IGF3ICogYWg7XG5cbiAgICBsZXQgaW1nID0gaW1ncmVmLmN1cnJlbnQ7XG4gICAgbGV0IGl3ID0gaW1nLndpZHRoO1xuICAgIGxldCBpaCA9IGltZy5oZWlnaHQ7XG5cbiAgICBsZXQgcmF0aW8gPSBpdyAvIGloO1xuICAgIGxldCBzdyA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KGFyZWEgKiByYXRpbykpO1xuICAgIGxldCBzaCA9IE1hdGguZmxvb3IoYXJlYSAvIHN3KTtcblxuICAgIGxldCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBzb3VyY2Uud2lkdGggPSBzdztcbiAgICBzb3VyY2UuaGVpZ2h0ID0gc2g7XG4gICAgbGV0IHN0eCA9IHNvdXJjZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBzdywgc2gpO1xuXG4gICAgbGV0IHBpeGVscyA9IHN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc3csIHNoKTtcblxuICAgIGxldCByID0gcnJlZi5jdXJyZW50O1xuICAgIGxldCBydHggPSByLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IG5ld19waXhlbHMgPSBydHguY3JlYXRlSW1hZ2VEYXRhKGF3LCBhaCk7XG4gICAgbmV3X3BpeGVscy5kYXRhLnNldChwaXhlbHMuZGF0YSk7XG4gICAgci53aWR0aCA9IHd3cmVmLmN1cnJlbnQ7XG4gICAgci5oZWlnaHQgPSBhaCArIHJsaCAqIDI7XG5cbiAgICBydHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBydHguZmlsbFJlY3QoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpO1xuICAgIHJ0eC5wdXRJbWFnZURhdGEobmV3X3BpeGVscywgY2ggKiAyLCBybGgpO1xuXG4gICAgcnR4LmZvbnQgPSBgJHtmc31weC8ke2xofSBjdXN0b21gO1xuICAgIHJ0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBydHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBsZXQgaGVpZ2h0ID0gd3JhcFRleHQoXG4gICAgICBydHgsXG4gICAgICB0ZXh0LFxuICAgICAgci53aWR0aCAtIGNoICogMiAtIGF3LFxuICAgICAgcmxoICsgcmxoIC8gMiArIDIsXG4gICAgICBhdyArIGNoIC8gMixcbiAgICAgIGZzICogbGhcbiAgICApO1xuXG4gICAgcmVhZG91dHJlZi5jdXJyZW50LmlubmVySFRNTCA9IGB3aWR0aDogJHtcbiAgICAgIHd3cmVmLmN1cnJlbnRcbiAgICB9ICBpbWFnZTogJHtpd314JHtpaH0gKCR7TWF0aC5yb3VuZCgoaXcgLyBpaCkgKiAxMDAwKSAvXG4gICAgICAxMDAwfSkgIHNvdXJjZTogJHtzd314JHtzaH0gIHRhcmdldDogJHthd314JHthaH0gKCR7TWF0aC5yb3VuZChcbiAgICAgIChhdyAvIGFoKSAqIDEwMDBcbiAgICApIC8gMTAwMH0pYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbWFnZShzcmMpIHtcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGltZ3JlZi5jdXJyZW50ID0gaW1nO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfVxuXG4gIGxldCBpbWFnZXMgPSBbJ3BlY2suanBnJywgJ2NydWlzZS5qcGcnLCAnd2hhbGUuanBnJ107XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgLy8gc2V0U2l6ZSg4OTgpO1xuICAgIGluaXRJbWFnZShpbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VzLmxlbmd0aCldKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltZ3JlZi5jdXJyZW50ICE9PSBudWxsKSByZXNwb25kKCk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5O1xuICAgIGxldCBpbmMgPSAxO1xuICAgIGlmIChzaGlmdCkgaW5jID0gMTA7XG4gICAgaWYgKGtleSA9PT0gJ2gnKSB7XG4gICAgICBsZXQgbmV4dCA9IHd3cmVmLmN1cnJlbnQgLSBpbmM7XG4gICAgICBpZiAobmV4dCA8IDEwKSBuZXh0ID0gMTA7XG4gICAgICBzZXRTaXplKG5leHQpO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbCcpIHtcbiAgICAgIGxldCBuZXh0ID0gd3dyZWYuY3VycmVudCArIGluYztcbiAgICAgIHNldFNpemUobmV4dCk7XG4gICAgICByZXNwb25kKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pO1xuICAgICAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICd3Jykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwobWUuaHJlZik7XG4gICAgICAgICAgbWUuaHJlZiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgIH07XG5cbiAgICAgIHJyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgIGBkaXB0eWNoLSR7bmV3IERhdGUoKVxuICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpfVoucG5nYFxuICAgICAgICApO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKTtcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTaXplKHdpZHRoKSB7XG4gICAgd3dyZWYuY3VycmVudCA9IHdpZHRoO1xuICAgIGNvbnRhaW5lcnJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGUuY2xpcGJvYXJkRGF0YS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgaW5pdEltYWdlKHNyYyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnO1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIGluaXRJbWFnZShzcmMpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUFjdGlvbik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5QWN0aW9uKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFt0ZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EaXB0eWNoPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGFpbmVycmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAvLyBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsICR7NjggKiBjaH1weClgLFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoMiwgMWZyKWAsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCxcbiAgICAgICAgICBncmlkQ29sdW1uR2FwOiAnM2NoJyxcbiAgICAgICAgICAvLyB3aWR0aDogY2ggKiAoNjggKiAyICsgMiAqIDIgKyAzKSxcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtycmVmfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3RyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAncmdiYSgwLDI1NSwwLDAuMiknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGV4dH3igItcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleSA9PT0gJ0VudGVyJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICBmb250RmFtaWx5OiAnY3VzdG9tb25vJyxcbiAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICB9fVxuICAgICAgICByZWY9e3JlYWRvdXRyZWZ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgcmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIGJvdHRvbTogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tb25vJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.283084f8cabf230c7242.hot-update.js.map