import React, { useState, useEffect, useRef, useCallback } from 'react';
import Info from '../components/info';

let fs = 16;
let lh = 1.5;
let rlh = fs * lh;
// measured
let cr = 8.4 / 21;
let ch = cr * rlh;

let mfs = 14;
let mrlh = mfs * lh;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  // from https://codepen.io/peterhry/pen/AGIEa
  // modified to respect line breaks
  let ogx = x;
  let ogy = y;
  let paragraphs = text.split('\n');
  let height = 0;
  for (let p = 0; p < paragraphs.length; p++) {
    let text = paragraphs[p];
    var words = text.split(' '),
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
  }
  // context.fillStyle = 'red';
  // context.fillRect(ogx, ogy, maxWidth, height);
  return height;
}

let images = [
  ['beach.jpg', 'by José Duarte', 'https://unsplash.com/photos/DuholBfUUCY'],
  // [
  //   'illustration.jpg',
  //   'by Rockwell Kent',
  //   'https://www.apollo-magazine.com/herman-melville-moby-dick-artists-illustrators/',
  // ],
  [
    'peck.jpg',
    'from Moby Dick (1956 film)',
    'https://en.wikipedia.org/wiki/Moby_Dick_(1956_film)',
  ],
  [
    'whale-jump.jpg',
    'by Thomas Kelley',
    'https://unsplash.com/photos/t20pc32VbrU',
  ],
  [
    'whale-tail.jpg',
    'by Iswanto Arif',
    'https://unsplash.com/photos/VziuvwpGatM',
  ],
];
let plain_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off — then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs — commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.`;

let short_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.`;

const Home = img => {
  let rref = useRef(null);
  let targetref = useRef(null);
  let wwref = useRef(null);
  let containerref = useRef(null);
  let readoutref = useRef(null);
  let tref = useRef(null);
  let imgref = useRef(null);
  let dref = useRef(null);
  let textarearef = useRef(null);
  let [text, setText] = useState(plain_text);
  let [help, setHelp] = useState(true);
  let [mode, setMode] = useState('default');
  let [default_image] = useState(
    images[Math.floor(Math.random() * (images.length - 1))]
  );
  let [kickoff, setKickoff] = useState(false);

  function respond() {
    let aw = tref.current.offsetWidth;
    let ah = tref.current.offsetHeight;
    let area = aw * ah;

    let img = imgref.current;
    let iw = img.width;
    let ih = img.height;

    let ratio = iw / ih;
    let sw = Math.floor(Math.sqrt(area * ratio));
    let sh = Math.floor(area / sw);

    let source = document.createElement('canvas');
    source.width = sw;
    source.height = sh;
    let stx = source.getContext('2d');
    stx.drawImage(img, 0, 0, sw, sh);

    let pixels = stx.getImageData(0, 0, sw, sh);

    let r = rref.current;
    let rtx = r.getContext('2d');
    let new_pixels = rtx.createImageData(aw, ah);
    new_pixels.data.set(pixels.data);
    r.width = wwref.current;
    r.height = ah + rlh * 2;

    rtx.fillStyle = 'white';
    rtx.fillRect(0, 0, r.width, r.height);
    rtx.putImageData(new_pixels, ch * 2, rlh);

    // rtx.imageSmoothingEnabled = false;

    rtx.font = `${fs}px/${lh} custom`;
    rtx.textBaseline = 'middle';
    rtx.fillStyle = 'black';
    let height = wrapText(
      rtx,
      text,
      r.width - ch * 2 - aw,
      rlh + rlh / 2 + 2,
      aw + ch / 2,
      fs * lh
    );

    readoutref.current.innerHTML = `width: ${
      wwref.current
    }  image: ${iw}x${ih} (${Math.round((iw / ih) * 1000) /
      1000})  source: ${sw}x${sh}  target: ${aw}x${ah} (${Math.round(
      (aw / ah) * 1000
    ) / 1000})`;

    // {
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
    let img = new Image();
    img.onload = () => {
      imgref.current = img;
      respond();
    };
    img.src = src;
  }

  useEffect(() => {
    setSize(window.innerWidth);
    initImage(default_image[0]);
  }, [kickoff]);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setText(short_text);
    }
    setTimeout(() => {
      setKickoff(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (imgref.current !== null) respond();
  }, [text]);

  function keyAction(e) {
    let key = e.key.toLowerCase();
    let shift = e.shiftKey;
    let inc = 10;
    if (shift) inc = 1;
    if (key === 'h' || key === 'arrowleft') {
      let next = wwref.current - inc;
      if (next < 10) next = 10;
      setSize(next);
      respond();
    } else if (key === 'l' || key === 'arrowright') {
      let next = wwref.current + inc;
      setSize(next);
      respond();
    } else if (key === 'o') {
      let input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      function handleChange(e) {
        for (const item of this.files) {
          if (item.type.indexOf('image') < 0) {
            continue;
          }
          let src = URL.createObjectURL(item);
          initImage(src);
        }
        this.removeEventListener('change', handleChange);
      }
      input.addEventListener('change', handleChange);
    } else if (key === 'w') {
      let link = document.createElement('a');

      var revokeURL = function() {
        let me = this;
        requestAnimationFrame(function() {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      rref.current.toBlob(function(blob) {
        link.setAttribute(
          'download',
          `diptych-${new Date()
            .toISOString()
            .slice(0, -4)
            .replace(/-/g, '')
            .replace(/:/g, '')
            .replace(/_/g, '')
            .replace(/\./g, '')}Z.png`
        );
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      });
    } else if (key === 'e') {
      textarearef.current.focus();
      let t = textarearef.current;
      t.selectionStart = t.selectionEnd = t.value.length;
      e.preventDefault();
    } else if (key === '?') {
      setHelp(prevState => {
        return !prevState;
      });
    }
  }

  function clickKey(key) {
    keyAction({ key: key });
  }

  function setSize(width) {
    wwref.current = width;
    containerref.current.style.width = width + 'px';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue;
      }
      let file = item.getAsFile();
      let src = URL.createObjectURL(file);
      initImage(src);
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
    let file = e.dataTransfer.files[0];
    let filename = file.path ? file.path : file.name ? file.name : '';
    let src = URL.createObjectURL(file);
    initImage(src);
  }

  useEffect(() => {
    window.addEventListener('keydown', keyAction);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return () => {
      window.removeEventListener('keydown', keyAction);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [text]);

  return (
    <div className="diptych-container">
      <div
        ref={containerref}
        style={{
          display: 'grid',
          // gridTemplateColumns: `repeat(2, ${68 * ch}px)`,
          gridTemplateColumns: `repeat(2, 1fr)`,
          paddingLeft: '2ch',
          paddingRight: '2ch',
          paddingTop: rlh,
          paddingBottom: rlh,
          gridColumnGap: '3ch',
          // width: ch * (68 * 2 + 2 * 2 + 3),
          // background: 'green',
          background: 'white',
        }}
      >
        <canvas
          style={{
            position: 'absolute',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          ref={rref}
        />
        <canvas
          ref={dref}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
          }}
        />

        <div />
        <div style={{ position: 'relative' }}>
          <div
            ref={tref}
            style={{
              position: 'relative',
              whiteSpace: 'pre-wrap',
              pointerEvents: 'none',
              background: 'white',
              // background: 'rgba(0,255,0,0.2)',
            }}
          >
            {text}​
          </div>
          <textarea
            ref={textarearef}
            style={{
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
              resize: 'none',
            }}
            onPaste={e => {
              e.stopPropagation();
            }}
            onFocus={e => {
              setMode('editing');
            }}
            onBlur={e => {
              setMode('default');
            }}
            onKeyDown={e => {
              if (e.key === 'Escape') e.target.blur();
              if (e.shiftKey && e.key === 'Enter') e.target.blur();
              e.stopPropagation();
            }}
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
            spellCheck="false"
          />
        </div>
      </div>

      <div
        style={{
          paddingLeft: '2ch',
          paddingRight: '2ch',
          paddingTop: rlh / 2,
          paddingBottom: rlh / 2,
          whiteSpace: 'pre-wrap',
          fontFamily: 'customono',
          fontSize: mfs,
          lineHeight: lh,
        }}
        ref={readoutref}
      />

      <div
        style={{
          position: 'fixed',
          right: '2ch',
          bottom: '2ch',
          paddingLeft: '1ch',
          paddingRight: '1ch',
          paddingTop: rlh / 2,
          paddingBottom: rlh / 2,
        }}
      />

      <div style={{ fontFamily: 'customono', fontSize: mfs, lineHeight: lh }}>
        <Info
          rlh={mrlh}
          help={help}
          mode={mode}
          clickKey={clickKey}
          image_info={default_image}
        />
      </div>

      <style global jsx>{`
        @font-face {
          font-family: 'custom';
          src: url('/IBMPlexSans-Regular.woff2') format('woff2'),
            url('/IBMPlexSans-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'customono';
          src: url('/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/IBMPlexMono-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
        }
        html {
          font-family: 'custom', sans-serif;
          font-size: ${fs}px;
          line-height: ${lh};
          background: #ddd;
        }
        body {
          margin: 0;
          padding: 0;
        }
        canvas {
          display: block;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          line-height: inherit;
          font-weight: normal;
        }
        p {
          margin: 0;
          margin-top: ${rlh}px;
        }
        img {
          display: block;
          width: 100%;
        }
        a {
          color: inherit;
        }
        a:hover {
          opacity: 0.8;
        }
        textarea {
          background: white;
        }
        textarea:focus {
          background: #efefef;
          outline: none;
        }
        @media (max-width: 800px) {
          .help {
            max-height: calc(50vh - ${rlh * 2}px);
          }
          .diptych-container {
            padding-bottom: 50vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
