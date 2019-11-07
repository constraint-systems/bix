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
    }
  }

  function setSize(width) {
    wwref.current = width;
    containerref.current.style.width = width + 'px';
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('keydown', keyAction);
    return function () {
      window.removeEventListener('keydown', keyAction);
    };
  }, [text]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Diptych"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: rref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      whiteSpace: 'pre-wrap'
    },
    ref: readoutref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "355732643",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:transparent;}textarea:focus{background:#ddd;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3doYWxlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZSeUIsQUFHZ0MsQUFLQyxBQUdRLEFBTXJCLEFBSUssQUFRTCxBQU1BLEFBSUssQUFJQSxBQUdTLEFBR1AsU0EvQk4sQUFZUSxBQU13QixLQWQ1QyxBQWtCYSxBQUliLEVBTWUsR0EvQmYsRUFkbUQsQ0FJbkQsQ0FzQ0EsRUFOQSxFQVZzQixFQW5CcUIsQUF1QzNDLGtCQW5CcUIsSUFLckIsZUFKQSxJQXBCMkMseUNBQ3pCLGFBUmxCLEdBU0EiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50LXN5c3RlbXMvd2hhbGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmxldCBmcyA9IDE2O1xubGV0IGxoID0gMS41O1xubGV0IHJsaCA9IGZzICogbGg7XG4vLyBtZWFzdXJlZFxubGV0IGNyID0gOC40IC8gMjE7XG5sZXQgY2ggPSBjciAqIHJsaDtcblxuZnVuY3Rpb24gd3JhcFRleHQoY29udGV4dCwgdGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQpIHtcbiAgLy8gZnJvbSBodHRwczovL2NvZGVwZW4uaW8vcGV0ZXJocnkvcGVuL0FHSUVhXG4gIC8vIG1vZGlmaWVkIHRvIHJlc3BlY3QgbGluZSBicmVha3NcbiAgbGV0IG9neCA9IHg7XG4gIGxldCBvZ3kgPSB5O1xuICBsZXQgcGFyYWdyYXBocyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICBsZXQgaGVpZ2h0ID0gMDtcbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBwYXJhZ3JhcGhzLmxlbmd0aDsgcCsrKSB7XG4gICAgbGV0IHRleHQgPSBwYXJhZ3JhcGhzW3BdO1xuICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKSxcbiAgICAgIGxpbmUgPSAnJyxcbiAgICAgIGxpbmVDb3VudCA9IDAsXG4gICAgICBpLFxuICAgICAgdGVzdCxcbiAgICAgIG1ldHJpY3M7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlc3QgPSB3b3Jkc1tpXTtcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuICAgICAgd2hpbGUgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtdWNoIG9mIHRoZSB3b3JkIHdpbGwgZml0XG4gICAgICAgIHRlc3QgPSB0ZXN0LnN1YnN0cmluZygwLCB0ZXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIH1cbiAgICAgIGlmICh3b3Jkc1tpXSAhPSB0ZXN0KSB7XG4gICAgICAgIHdvcmRzLnNwbGljZShpICsgMSwgMCwgd29yZHNbaV0uc3Vic3RyKHRlc3QubGVuZ3RoKSk7XG4gICAgICAgIHdvcmRzW2ldID0gdGVzdDtcbiAgICAgIH1cblxuICAgICAgdGVzdCA9IGxpbmUgKyB3b3Jkc1tpXSArICcgJztcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuXG4gICAgICBpZiAobWV0cmljcy53aWR0aCA+PSBtYXhXaWR0aCAmJiBpID4gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgICBsaW5lID0gd29yZHNbaV0gKyAnICc7XG4gICAgICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgbGluZUNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gdGVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgaGVpZ2h0ICs9IGxpbmVIZWlnaHQ7XG4gIH1cbiAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgLy8gY29udGV4dC5maWxsUmVjdChvZ3gsIG9neSwgbWF4V2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmxldCBwbGFpbl90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLiBXaGVuZXZlciBJIGZpbmQgbXlzZWxmIGdyb3dpbmcgZ3JpbSBhYm91dCB0aGUgbW91dGg7IHdoZW5ldmVyIGl0IGlzIGEgZGFtcCwgZHJpenpseSBOb3ZlbWJlciBpbiBteSBzb3VsOyB3aGVuZXZlciBJIGZpbmQgbXlzZWxmIGludm9sdW50YXJpbHkgcGF1c2luZyBiZWZvcmUgY29mZmluIHdhcmVob3VzZXMsIGFuZCBicmluZ2luZyB1cCB0aGUgcmVhciBvZiBldmVyeSBmdW5lcmFsIEkgbWVldDsgYW5kIGVzcGVjaWFsbHkgd2hlbmV2ZXIgbXkgaHlwb3MgZ2V0IHN1Y2ggYW4gdXBwZXIgaGFuZCBvZiBtZSwgdGhhdCBpdCByZXF1aXJlcyBhIHN0cm9uZyBtb3JhbCBwcmluY2lwbGUgdG8gcHJldmVudCBtZSBmcm9tIGRlbGliZXJhdGVseSBzdGVwcGluZyBpbnRvIHRoZSBzdHJlZXQsIGFuZCBtZXRob2RpY2FsbHkga25vY2tpbmcgcGVvcGxl4oCZcyBoYXRzIG9mZiDigJQgdGhlbiwgSSBhY2NvdW50IGl0IGhpZ2ggdGltZSB0byBnZXQgdG8gc2VhIGFzIHNvb24gYXMgSSBjYW4uIFRoaXMgaXMgbXkgc3Vic3RpdHV0ZSBmb3IgcGlzdG9sIGFuZCBiYWxsLiAgV2l0aCBhIHBoaWxvc29waGljYWwgZmxvdXJpc2ggQ2F0byB0aHJvd3MgaGltc2VsZiB1cG9uIGhpcyBzd29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlIHNoaXAuIFRoZXJlIGlzIG5vdGhpbmcgc3VycHJpc2luZyBpbiB0aGlzLiBJZiB0aGV5IGJ1dCBrbmV3IGl0LCBhbG1vc3QgYWxsIG1lbiBpbiB0aGVpciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlcmlzaCB2ZXJ5IG5lYXJseSB0aGUgc2FtZSBmZWVsaW5ncyB0b3dhcmRzIHRoZSBvY2VhbiB3aXRoIG1lLlxuXG5UaGVyZSBub3cgaXMgeW91ciBpbnN1bGFyIGNpdHkgb2YgdGhlIE1hbmhhdHRvZXMsIGJlbHRlZCByb3VuZCBieSB3aGFydmVzIGFzIEluZGlhbiBpc2xlcyBieSBjb3JhbCByZWVmcyDigJQgY29tbWVyY2Ugc3Vycm91bmRzIGl0IHdpdGggaGVyIHN1cmYuIFJpZ2h0IGFuZCBsZWZ0LCB0aGUgc3RyZWV0cyB0YWtlIHlvdSB3YXRlcndhcmQuIEl0cyBleHRyZW1lIGRvd250b3duIGlzIHRoZSBiYXR0ZXJ5LCB3aGVyZSB0aGF0IG5vYmxlIG1vbGUgaXMgd2FzaGVkIGJ5IHdhdmVzLCBhbmQgY29vbGVkIGJ5IGJyZWV6ZXMsIHdoaWNoIGEgZmV3IGhvdXJzIHByZXZpb3VzIHdlcmUgb3V0IG9mIHNpZ2h0IG9mIGxhbmQuIExvb2sgYXQgdGhlIGNyb3dkcyBvZiB3YXRlci1nYXplcnMgdGhlcmUuYDtcblxuY29uc3QgSG9tZSA9IGltZyA9PiB7XG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGFyZ2V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgd3dyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBjb250YWluZXJyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCByZWFkb3V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGltZ3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKHBsYWluX3RleHQpO1xuXG4gIGZ1bmN0aW9uIHJlc3BvbmQoKSB7XG4gICAgbGV0IGF3ID0gdHJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGxldCBhaCA9IHRyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGFyZWEgPSBhdyAqIGFoO1xuXG4gICAgbGV0IGltZyA9IGltZ3JlZi5jdXJyZW50O1xuICAgIGxldCBpdyA9IGltZy53aWR0aDtcbiAgICBsZXQgaWggPSBpbWcuaGVpZ2h0O1xuXG4gICAgbGV0IHJhdGlvID0gaXcgLyBpaDtcbiAgICBsZXQgc3cgPSBNYXRoLmZsb29yKE1hdGguc3FydChhcmVhICogcmF0aW8pKTtcbiAgICBsZXQgc2ggPSBNYXRoLmZsb29yKGFyZWEgLyBzdyk7XG5cbiAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlLndpZHRoID0gc3c7XG4gICAgc291cmNlLmhlaWdodCA9IHNoO1xuICAgIGxldCBzdHggPSBzb3VyY2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBzdHguZHJhd0ltYWdlKGltZywgMCwgMCwgc3csIHNoKTtcblxuICAgIGxldCBwaXhlbHMgPSBzdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHN3LCBzaCk7XG5cbiAgICBsZXQgciA9IHJyZWYuY3VycmVudDtcbiAgICBsZXQgcnR4ID0gci5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBuZXdfcGl4ZWxzID0gcnR4LmNyZWF0ZUltYWdlRGF0YShhdywgYWgpO1xuICAgIG5ld19waXhlbHMuZGF0YS5zZXQocGl4ZWxzLmRhdGEpO1xuICAgIHIud2lkdGggPSB3d3JlZi5jdXJyZW50O1xuICAgIHIuaGVpZ2h0ID0gYWggKyBybGggKiAyO1xuXG4gICAgcnR4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgcnR4LmZpbGxSZWN0KDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KTtcbiAgICBydHgucHV0SW1hZ2VEYXRhKG5ld19waXhlbHMsIGNoICogMiwgcmxoKTtcblxuICAgIHJ0eC5mb250ID0gYCR7ZnN9cHgvJHtsaH0gY3VzdG9tYDtcbiAgICBydHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgcnR4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgbGV0IGhlaWdodCA9IHdyYXBUZXh0KFxuICAgICAgcnR4LFxuICAgICAgdGV4dCxcbiAgICAgIHIud2lkdGggLSBjaCAqIDIgLSBhdyxcbiAgICAgIHJsaCArIHJsaCAvIDIgKyAyLFxuICAgICAgYXcgKyBjaCAvIDIsXG4gICAgICBmcyAqIGxoXG4gICAgKTtcblxuICAgIHJlYWRvdXRyZWYuY3VycmVudC5pbm5lckhUTUwgPSBgd2lkdGg6ICR7XG4gICAgICB3d3JlZi5jdXJyZW50XG4gICAgfSAgaW1hZ2U6ICR7aXd9eCR7aWh9ICgke01hdGgucm91bmQoKGl3IC8gaWgpICogMTAwMCkgL1xuICAgICAgMTAwMH0pICBzb3VyY2U6ICR7c3d9eCR7c2h9ICB0YXJnZXQ6ICR7YXd9eCR7YWh9ICgke01hdGgucm91bmQoXG4gICAgICAoYXcgLyBhaCkgKiAxMDAwXG4gICAgKSAvIDEwMDB9KWA7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpbWdyZWYuY3VycmVudCA9IGltZztcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH1cblxuICBsZXQgaW1hZ2VzID0gWydwZWNrLmpwZycsICdjcnVpc2UuanBnJywgJ3doYWxlLmpwZyddO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vIHNldFNpemUoODk4KTtcbiAgICBpbml0SW1hZ2UoaW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlcy5sZW5ndGgpXSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWdyZWYuY3VycmVudCAhPT0gbnVsbCkgcmVzcG9uZCgpO1xuICB9LCBbdGV4dF0pO1xuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHNoaWZ0ID0gZS5zaGlmdEtleTtcbiAgICBsZXQgaW5jID0gMTtcbiAgICBpZiAoc2hpZnQpIGluYyA9IDEwO1xuICAgIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgbGV0IG5leHQgPSB3d3JlZi5jdXJyZW50IC0gaW5jO1xuICAgICAgaWYgKG5leHQgPCAxMCkgbmV4dCA9IDEwO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2wnKSB7XG4gICAgICBsZXQgbmV4dCA9IHd3cmVmLmN1cnJlbnQgKyBpbmM7XG4gICAgICBzZXRTaXplKG5leHQpO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpemUod2lkdGgpIHtcbiAgICB3d3JlZi5jdXJyZW50ID0gd2lkdGg7XG4gICAgY29udGFpbmVycmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5QWN0aW9uKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgIH07XG4gIH0sIFt0ZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EaXB0eWNoPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGFpbmVycmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAvLyBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsICR7NjggKiBjaH1weClgLFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoMiwgMWZyKWAsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCxcbiAgICAgICAgICBncmlkQ29sdW1uR2FwOiAnM2NoJyxcbiAgICAgICAgICAvLyB3aWR0aDogY2ggKiAoNjggKiAyICsgMiAqIDIgKyAzKSxcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtycmVmfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3RyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAncmdiYSgwLDI1NSwwLDAuMiknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGV4dH3igItcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleSA9PT0gJ0VudGVyJykgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e3JlYWRvdXRyZWZ9XG4gICAgICAvPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9JQk1QbGV4U2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3VzdG9tLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZzfXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xofTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.921a1e3fc9aaac6f7241.hot-update.js.map