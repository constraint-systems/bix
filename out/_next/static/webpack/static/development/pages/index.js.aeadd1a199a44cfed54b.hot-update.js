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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Diptych"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    spellcheck: "false",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
      whiteSpace: 'pre-wrap'
    },
    ref: readoutref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["355732643", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "355732643",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:custom,monospace;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:transparent;}textarea:focus{background:#ddd;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3doYWxlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRXeUIsQUFHZ0MsQUFLQyxBQUdRLEFBTXJCLEFBSUssQUFRTCxBQU1BLEFBSUssQUFJQSxBQUdTLEFBR1AsU0EvQk4sQUFZUSxBQU13QixLQWQ1QyxBQWtCYSxBQUliLEVBTWUsR0EvQmYsRUFkbUQsQ0FJbkQsQ0FzQ0EsRUFOQSxFQVZzQixFQW5CcUIsQUF1QzNDLGtCQW5CcUIsSUFLckIsZUFKQSxJQXBCMkMseUNBQ3pCLGFBUmxCLEdBU0EiLCJmaWxlIjoiL1VzZXJzL2dyYW50LmN1c3Rlci9TaXRlcy9jb25zdHJhaW50LXN5c3RlbXMvd2hhbGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmxldCBmcyA9IDE2O1xubGV0IGxoID0gMS41O1xubGV0IHJsaCA9IGZzICogbGg7XG4vLyBtZWFzdXJlZFxubGV0IGNyID0gOC40IC8gMjE7XG5sZXQgY2ggPSBjciAqIHJsaDtcblxuZnVuY3Rpb24gd3JhcFRleHQoY29udGV4dCwgdGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQpIHtcbiAgLy8gZnJvbSBodHRwczovL2NvZGVwZW4uaW8vcGV0ZXJocnkvcGVuL0FHSUVhXG4gIC8vIG1vZGlmaWVkIHRvIHJlc3BlY3QgbGluZSBicmVha3NcbiAgbGV0IG9neCA9IHg7XG4gIGxldCBvZ3kgPSB5O1xuICBsZXQgcGFyYWdyYXBocyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICBsZXQgaGVpZ2h0ID0gMDtcbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBwYXJhZ3JhcGhzLmxlbmd0aDsgcCsrKSB7XG4gICAgbGV0IHRleHQgPSBwYXJhZ3JhcGhzW3BdO1xuICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKSxcbiAgICAgIGxpbmUgPSAnJyxcbiAgICAgIGxpbmVDb3VudCA9IDAsXG4gICAgICBpLFxuICAgICAgdGVzdCxcbiAgICAgIG1ldHJpY3M7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlc3QgPSB3b3Jkc1tpXTtcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuICAgICAgd2hpbGUgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBtdWNoIG9mIHRoZSB3b3JkIHdpbGwgZml0XG4gICAgICAgIHRlc3QgPSB0ZXN0LnN1YnN0cmluZygwLCB0ZXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIH1cbiAgICAgIGlmICh3b3Jkc1tpXSAhPSB0ZXN0KSB7XG4gICAgICAgIHdvcmRzLnNwbGljZShpICsgMSwgMCwgd29yZHNbaV0uc3Vic3RyKHRlc3QubGVuZ3RoKSk7XG4gICAgICAgIHdvcmRzW2ldID0gdGVzdDtcbiAgICAgIH1cblxuICAgICAgdGVzdCA9IGxpbmUgKyB3b3Jkc1tpXSArICcgJztcbiAgICAgIG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3QpO1xuXG4gICAgICBpZiAobWV0cmljcy53aWR0aCA+PSBtYXhXaWR0aCAmJiBpID4gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgICBsaW5lID0gd29yZHNbaV0gKyAnICc7XG4gICAgICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgbGluZUNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gdGVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgaGVpZ2h0ICs9IGxpbmVIZWlnaHQ7XG4gIH1cbiAgLy8gY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgLy8gY29udGV4dC5maWxsUmVjdChvZ3gsIG9neSwgbWF4V2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmxldCBwbGFpbl90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLiBXaGVuZXZlciBJIGZpbmQgbXlzZWxmIGdyb3dpbmcgZ3JpbSBhYm91dCB0aGUgbW91dGg7IHdoZW5ldmVyIGl0IGlzIGEgZGFtcCwgZHJpenpseSBOb3ZlbWJlciBpbiBteSBzb3VsOyB3aGVuZXZlciBJIGZpbmQgbXlzZWxmIGludm9sdW50YXJpbHkgcGF1c2luZyBiZWZvcmUgY29mZmluIHdhcmVob3VzZXMsIGFuZCBicmluZ2luZyB1cCB0aGUgcmVhciBvZiBldmVyeSBmdW5lcmFsIEkgbWVldDsgYW5kIGVzcGVjaWFsbHkgd2hlbmV2ZXIgbXkgaHlwb3MgZ2V0IHN1Y2ggYW4gdXBwZXIgaGFuZCBvZiBtZSwgdGhhdCBpdCByZXF1aXJlcyBhIHN0cm9uZyBtb3JhbCBwcmluY2lwbGUgdG8gcHJldmVudCBtZSBmcm9tIGRlbGliZXJhdGVseSBzdGVwcGluZyBpbnRvIHRoZSBzdHJlZXQsIGFuZCBtZXRob2RpY2FsbHkga25vY2tpbmcgcGVvcGxl4oCZcyBoYXRzIG9mZiDigJQgdGhlbiwgSSBhY2NvdW50IGl0IGhpZ2ggdGltZSB0byBnZXQgdG8gc2VhIGFzIHNvb24gYXMgSSBjYW4uIFRoaXMgaXMgbXkgc3Vic3RpdHV0ZSBmb3IgcGlzdG9sIGFuZCBiYWxsLiAgV2l0aCBhIHBoaWxvc29waGljYWwgZmxvdXJpc2ggQ2F0byB0aHJvd3MgaGltc2VsZiB1cG9uIGhpcyBzd29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlIHNoaXAuIFRoZXJlIGlzIG5vdGhpbmcgc3VycHJpc2luZyBpbiB0aGlzLiBJZiB0aGV5IGJ1dCBrbmV3IGl0LCBhbG1vc3QgYWxsIG1lbiBpbiB0aGVpciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlcmlzaCB2ZXJ5IG5lYXJseSB0aGUgc2FtZSBmZWVsaW5ncyB0b3dhcmRzIHRoZSBvY2VhbiB3aXRoIG1lLlxuXG5UaGVyZSBub3cgaXMgeW91ciBpbnN1bGFyIGNpdHkgb2YgdGhlIE1hbmhhdHRvZXMsIGJlbHRlZCByb3VuZCBieSB3aGFydmVzIGFzIEluZGlhbiBpc2xlcyBieSBjb3JhbCByZWVmcyDigJQgY29tbWVyY2Ugc3Vycm91bmRzIGl0IHdpdGggaGVyIHN1cmYuIFJpZ2h0IGFuZCBsZWZ0LCB0aGUgc3RyZWV0cyB0YWtlIHlvdSB3YXRlcndhcmQuIEl0cyBleHRyZW1lIGRvd250b3duIGlzIHRoZSBiYXR0ZXJ5LCB3aGVyZSB0aGF0IG5vYmxlIG1vbGUgaXMgd2FzaGVkIGJ5IHdhdmVzLCBhbmQgY29vbGVkIGJ5IGJyZWV6ZXMsIHdoaWNoIGEgZmV3IGhvdXJzIHByZXZpb3VzIHdlcmUgb3V0IG9mIHNpZ2h0IG9mIGxhbmQuIExvb2sgYXQgdGhlIGNyb3dkcyBvZiB3YXRlci1nYXplcnMgdGhlcmUuYDtcblxuY29uc3QgSG9tZSA9IGltZyA9PiB7XG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGFyZ2V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgd3dyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBjb250YWluZXJyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCByZWFkb3V0cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGltZ3JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKHBsYWluX3RleHQpO1xuXG4gIGZ1bmN0aW9uIHJlc3BvbmQoKSB7XG4gICAgbGV0IGF3ID0gdHJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGxldCBhaCA9IHRyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGFyZWEgPSBhdyAqIGFoO1xuXG4gICAgbGV0IGltZyA9IGltZ3JlZi5jdXJyZW50O1xuICAgIGxldCBpdyA9IGltZy53aWR0aDtcbiAgICBsZXQgaWggPSBpbWcuaGVpZ2h0O1xuXG4gICAgbGV0IHJhdGlvID0gaXcgLyBpaDtcbiAgICBsZXQgc3cgPSBNYXRoLmZsb29yKE1hdGguc3FydChhcmVhICogcmF0aW8pKTtcbiAgICBsZXQgc2ggPSBNYXRoLmZsb29yKGFyZWEgLyBzdyk7XG5cbiAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlLndpZHRoID0gc3c7XG4gICAgc291cmNlLmhlaWdodCA9IHNoO1xuICAgIGxldCBzdHggPSBzb3VyY2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBzdHguZHJhd0ltYWdlKGltZywgMCwgMCwgc3csIHNoKTtcblxuICAgIGxldCBwaXhlbHMgPSBzdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHN3LCBzaCk7XG5cbiAgICBsZXQgciA9IHJyZWYuY3VycmVudDtcbiAgICBsZXQgcnR4ID0gci5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBuZXdfcGl4ZWxzID0gcnR4LmNyZWF0ZUltYWdlRGF0YShhdywgYWgpO1xuICAgIG5ld19waXhlbHMuZGF0YS5zZXQocGl4ZWxzLmRhdGEpO1xuICAgIHIud2lkdGggPSB3d3JlZi5jdXJyZW50O1xuICAgIHIuaGVpZ2h0ID0gYWggKyBybGggKiAyO1xuXG4gICAgcnR4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgcnR4LmZpbGxSZWN0KDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KTtcbiAgICBydHgucHV0SW1hZ2VEYXRhKG5ld19waXhlbHMsIGNoICogMiwgcmxoKTtcblxuICAgIHJ0eC5mb250ID0gYCR7ZnN9cHgvJHtsaH0gY3VzdG9tYDtcbiAgICBydHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgcnR4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgbGV0IGhlaWdodCA9IHdyYXBUZXh0KFxuICAgICAgcnR4LFxuICAgICAgdGV4dCxcbiAgICAgIHIud2lkdGggLSBjaCAqIDIgLSBhdyxcbiAgICAgIHJsaCArIHJsaCAvIDIgKyAyLFxuICAgICAgYXcgKyBjaCAvIDIsXG4gICAgICBmcyAqIGxoXG4gICAgKTtcblxuICAgIHJlYWRvdXRyZWYuY3VycmVudC5pbm5lckhUTUwgPSBgd2lkdGg6ICR7XG4gICAgICB3d3JlZi5jdXJyZW50XG4gICAgfSAgaW1hZ2U6ICR7aXd9eCR7aWh9ICgke01hdGgucm91bmQoKGl3IC8gaWgpICogMTAwMCkgL1xuICAgICAgMTAwMH0pICBzb3VyY2U6ICR7c3d9eCR7c2h9ICB0YXJnZXQ6ICR7YXd9eCR7YWh9ICgke01hdGgucm91bmQoXG4gICAgICAoYXcgLyBhaCkgKiAxMDAwXG4gICAgKSAvIDEwMDB9KWA7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpbWdyZWYuY3VycmVudCA9IGltZztcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH1cblxuICBsZXQgaW1hZ2VzID0gWydwZWNrLmpwZycsICdjcnVpc2UuanBnJywgJ3doYWxlLmpwZyddO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpemUod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vIHNldFNpemUoODk4KTtcbiAgICBpbml0SW1hZ2UoaW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlcy5sZW5ndGgpXSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbWdyZWYuY3VycmVudCAhPT0gbnVsbCkgcmVzcG9uZCgpO1xuICB9LCBbdGV4dF0pO1xuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHNoaWZ0ID0gZS5zaGlmdEtleTtcbiAgICBsZXQgaW5jID0gMTtcbiAgICBpZiAoc2hpZnQpIGluYyA9IDEwO1xuICAgIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgbGV0IG5leHQgPSB3d3JlZi5jdXJyZW50IC0gaW5jO1xuICAgICAgaWYgKG5leHQgPCAxMCkgbmV4dCA9IDEwO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2wnKSB7XG4gICAgICBsZXQgbmV4dCA9IHd3cmVmLmN1cnJlbnQgKyBpbmM7XG4gICAgICBzZXRTaXplKG5leHQpO1xuICAgICAgcmVzcG9uZCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKTtcbiAgICAgICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndycpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICB2YXIgcmV2b2tlVVJMID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG1lLmhyZWYpO1xuICAgICAgICAgIG1lLmhyZWYgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICB9O1xuXG4gICAgICBycmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICBgZGlwdHljaC0ke25ldyBEYXRlKClcbiAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKX1aLnBuZ2BcbiAgICAgICAgKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTCk7XG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZSh3aWR0aCkge1xuICAgIHd3cmVmLmN1cnJlbnQgPSB3aWR0aDtcbiAgICBjb250YWluZXJyZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGluaXRJbWFnZShzcmMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJztcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUFjdGlvbik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbdGV4dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGlwdHljaDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRhaW5lcnJlZn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgLy8gZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgyLCAkezY4ICogY2h9cHgpYCxcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsIDFmcilgLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGgsXG4gICAgICAgICAgZ3JpZENvbHVtbkdhcDogJzNjaCcsXG4gICAgICAgICAgLy8gd2lkdGg6IGNoICogKDY4ICogMiArIDIgKiAyICsgMyksXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogJ2dyZWVuJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17cnJlZn1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXt0cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJ3JnYmEoMCwyNTUsMCwwLjIpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RleHR94oCLXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXkgPT09ICdFbnRlcicpIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17cmVhZG91dHJlZn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHJpZ2h0OiAnMmNoJyxcbiAgICAgICAgYm90dG9tOiAnMmNoJyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICBwYWRkaW5nVG9wOiBybGgvMixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoLzIsXG4gICAgICB9fT5cbiAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGN1c3RvbSwgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMsXG4gICAgICAgIGg0LFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtybGh9cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/whale/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.aeadd1a199a44cfed54b.hot-update.js.map