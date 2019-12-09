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

let plain_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off — then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs — commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.`;

let short_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.`;

let ps = 6;

function convertChar(char) {
  return char
    .charCodeAt(0)
    .toString(2)
    .padStart(8, '0');
}

function convertBinary(bstring) {
  return String.fromCharCode(parseInt(bstring, 2));
}

function convertToText(binary) {
  let char_array = binary.map(bstring => convertBinary(bstring));
  return char_array.join('');
}

function convert(string) {
  let chars = string.split('');
  let binary = chars.map(char => convertChar(char));
  return binary;
}

const Home = img => {
  let rref = useRef(null);
  let targetref = useRef(null);
  let wwref = useRef(null);
  let containerref = useRef(null);
  let readoutref = useRef(null);
  let keymap = useRef({});
  let tref = useRef(null);
  let imgref = useRef(null);
  let dref = useRef(null);
  let cursorref = useRef([0, 0]);
  let textarearef = useRef(null);
  let [text, setText] = useState(plain_text);
  let [help, setHelp] = useState(true);
  let [mode, setMode] = useState('default');
  let [kickoff, setKickoff] = useState(false);

  function changeBit(val) {
    let tw = tref.current.offsetWidth;
    let th = tref.current.offsetHeight;

    let bcols = 4;
    let brows = 2;
    let byte_width = ps * bcols;
    let bi_width = Math.floor(tw / byte_width) * byte_width;

    let byte_length = text.length;

    let bc = bi_width / byte_width;
    let br = Math.ceil(byte_length / bc);

    let cursor = cursorref.current;

    let byte_x = Math.floor(cursor[0] / (bcols * ps));
    let byte_y = Math.floor(cursor[1] / (brows * ps));

    let byte_index = byte_y * bc + byte_x;

    let bit_x = (cursor[0] - byte_x * bcols * ps) / ps;
    let bit_y = (cursor[1] - byte_y * brows * ps) / ps;

    let bit_index = bit_y * bcols + bit_x;

    let binary = convert(text);

    let bexpand = binary[byte_index].split('');
    bexpand[bit_index] = val.toString();
    let bcontract = bexpand.join('');

    binary[byte_index] = bcontract;

    let new_text = convertToText(binary);
    setText(new_text);
  }

  function respond() {
    let tw = tref.current.offsetWidth;
    let th = tref.current.offsetHeight;

    let bcols = 4;
    let brows = 2;
    let byte_width = ps * bcols;
    let bi_width = Math.floor(tw / byte_width) * byte_width;

    let byte_length = text.length;

    let bc = bi_width / byte_width;
    let br = Math.ceil(byte_length / bc);

    let cursor = cursorref.current;

    let byte_x = Math.floor(cursor[0] / (bcols * ps));
    let byte_y = Math.floor(cursor[1] / (brows * ps));

    let byte_index = byte_y * bc + byte_x;

    let text_split = text.split('');

    text_split[byte_index] = `<span style="background: cyan;">${
      text_split[byte_index]
    }</span>`;

    let text_join = text_split.join('');

    tref.current.innerHTML = text_join + '​';

    let r = rref.current;

    r.width = wwref.current;
    r.height = br * brows * ps + rlh * 2;

    let rtx = r.getContext('2d');

    rtx.fillStyle = 'white';
    rtx.fillRect(0, 0, r.width, r.height);

    let binary = convert(text);

    rtx.fillStyle = 'black';
    for (let brc = 0; brc < br; brc++) {
      for (let bcc = 0; bcc < bc; bcc++) {
        let byte = binary[brc * bc + bcc];
        if (byte !== undefined) {
          for (let r = 0; r < brows; r++) {
            for (let c = 0; c < bcols; c++) {
              let bit = byte[r * bcols + c];
              if (parseInt(bit) === 1) {
                let x = rlh + bcc * byte_width + c * ps;
                let y = rlh + brc * brows * ps + r * ps;
                rtx.fillRect(x, y, ps, ps);
              }
            }
          }
        }
      }
    }

    let d = dref.current;

    d.width = bc * bcols * ps + rlh * 2;
    d.height = br * brows * ps + rlh * 2;

    let dtx = d.getContext('2d');

    dtx.lineWidth = 2;
    dtx.strokeStyle = 'cyan';
    dtx.strokeRect(
      rlh + byte_x * bcols * ps,
      rlh + byte_y * brows * ps,
      bcols * ps,
      brows * ps
    );

    dtx.strokeStyle = 'magenta';
    dtx.strokeRect(rlh + cursor[0] - 1, rlh + cursor[1] - 1, ps + 2, ps + 2);

    // let area = aw * ah;
    // let img = imgref.current;
    // let iw = img.width;
    // let ih = img.height;
    // let ratio = iw / ih;
    // let sw = Math.floor(Math.sqrt(area * ratio));
    // let sh = Math.floor(area / sw);
    // let source = document.createElement('canvas');
    // source.width = sw;
    // source.height = sh;
    // let stx = source.getContext('2d');
    // stx.drawImage(img, 0, 0, sw, sh);
    // let pixels = stx.getImageData(0, 0, sw, sh);
    // let r = rref.current;
    // let rtx = r.getContext('2d');
    // let new_pixels = rtx.createImageData(aw, ah);
    // new_pixels.data.set(pixels.data);
    // r.width = wwref.current;
    // r.height = ah + rlh * 2;
    // rtx.fillStyle = 'white';
    // rtx.fillRect(0, 0, r.width, r.height);
    // rtx.putImageData(new_pixels, ch * 2, rlh);
    // // rtx.imageSmoothingEnabled = false;
    // rtx.font = `${fs}px/${lh} custom`;
    // rtx.textBaseline = 'middle';
    // rtx.fillStyle = 'black';
    // let height = wrapText(
    //   rtx,
    //   text,
    //   r.width - ch * 2 - aw,
    //   rlh + rlh / 2 + 2,
    //   aw + ch / 2,
    //   fs * lh
    // );
    // readoutref.current.innerHTML = `width: ${
    //   wwref.current
    // }  image: ${iw}x${ih} (${Math.round((iw / ih) * 1000) /
    //   1000})  source: ${sw}x${sh}  target: ${aw}x${ah} (${Math.round(
    //   (aw / ah) * 1000
    // ) / 1000})`;
  }

  useEffect(() => {
    setSize(window.innerWidth);
    respond();
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
    respond();
  }, [text]);

  function keyAction(key, repeat) {
    let km = keymap.current;
    let cursor = cursorref.current;
    let inc = ps;
    if (km['shift']) inc = ps * 2;

    if (km['j']) cursor[1] += inc;
    if (km['k']) cursor[1] -= inc;
    if (km['h']) cursor[0] -= inc;
    if (km['l']) cursor[0] += inc;

    if (km['d']) changeBit(1);
    if (km['e']) changeBit(0);

    respond();

    if (key === 'w') {
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
    } else if (key === 'i') {
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

  function downHandler(e) {
    let key = e.key.toLowerCase();
    keymap.current[key] = true;
    keyAction(key, e.repeat);
  }

  function upHandler(e) {
    let key = e.key.toLowerCase();
    keymap.current[key] = false;
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
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
          <div
            ref={tref}
            style={{
              position: 'relative',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              pointerEvents: 'none',
            }}
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

      <div
        style={{
          fontFamily: 'customono',
          display: 'none',
          fontSize: mfs,
          lineHeight: lh,
        }}
      >
        <Info rlh={mrlh} help={help} mode={mode} clickKey={clickKey} />
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
          font-family: 'customono', sans-serif;
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
        #__next-prerender-indicator {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
