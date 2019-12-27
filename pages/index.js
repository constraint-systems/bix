import React, { useState, useEffect, useRef, useCallback } from 'react';
import { short_text } from '../components/constants';
import Keycap from '../components/keycap';
import {
  pInline,
  pBlock,
  convertStringToBytes,
  convertBytesToText,
  reverseString,
} from '../components/utilities';

// let short_text = `Rachel: Can I ask you a personal question?
// Deckard: Sure.
// Rachel: Have you ever retired a human by mistake?
// Deckard: No.
// Rachel: But in your position that is a risk.`;

let fs = 16;
let lh = 1.5;
// let lh = 1.1999988555908203;
let rlh = fs * lh;

let keys_used = 'hjklfdeastw?uiUI';

let bs = 6;
let byte_cols = 1;
let byte_rows = 8;
let byte_width = byte_cols * bs;
let byte_height = byte_rows * bs;
let red = '#fb4934';
let green = '#b8bb26';
let yellow = '#fab2f';
let blue = '#83a598';
let purple = '#d3869b';
let aqua = '#8ec07c';

let Index = () => {
  let [text, setText] = useState(short_text);
  let [display_text, setDisplayText] = useState(short_text);
  let textarea_ref = useRef(null);
  let textdiv_ref = useRef(null);
  let canvas_ref = useRef(null);
  let canvas_overlay_ref = useRef(null);
  let container_ref = useRef(null);
  let cursor_ref = useRef([0, 0, bs, bs]);
  let keymap_ref = useRef({});
  let byte_holder_ref = useRef([0, 0]);
  let offset_ref = useRef([0, 0]);
  let readout_ref = useRef(null);
  let width_ref = useRef();
  // let [help, setHelp] = useState(true);
  let [help, setHelp] = useState(true);

  function clickKey(key) {
    let km = keymap_ref.current;
    km[key] = true;
    keyAction({ key }, false);
    setTimeout(() => {
      km[key] = false;
    }, 0);
  }

  function setSize(width) {
    width_ref.current = width;
    container_ref.current.style.width = width + 'px';
  }

  function changeBit(val) {
    let cursor = cursor_ref.current;
    let byte_holder = byte_holder_ref.current;

    let bytes = convertStringToBytes(text);

    let byte_x = Math.floor(cursor[0] / (byte_cols * bs));
    let byte_y = Math.floor(cursor[1] / (byte_rows * bs));

    let byte_index = byte_y * byte_holder[0] + byte_x;

    let bit_x = (cursor[0] - byte_x * byte_cols * bs) / bs;
    let bit_y = (cursor[1] - byte_y * byte_rows * bs) / bs;

    let bit_index = bit_y * byte_cols + bit_x;

    let bexpand = bytes[byte_index].split('');
    let current_bit = bexpand[bit_index];
    let new_bit;
    if (val === 'f') {
      new_bit = 1 - current_bit;
    } else {
      new_bit = val;
    }

    if (current_bit !== new_bit.toString()) {
      bexpand[bit_index] = new_bit.toString();
      let bcontract = bexpand.join('');

      bytes[byte_index] = bcontract;

      let new_text = convertBytesToText(bytes);
      setText(new_text);
    } else {
      move();
    }
  }

  function mathByte(operation) {
    let cursor = cursor_ref.current;
    let byte_holder = byte_holder_ref.current;

    let bytes = convertStringToBytes(text);

    let byte_x = Math.floor(cursor[0] / (byte_cols * bs));
    let byte_y = Math.floor(cursor[1] / (byte_rows * bs));

    let byte_index = byte_y * byte_holder[0] + byte_x;
    let byte = reverseString(bytes[byte_index]);

    let min = parseInt('00000000', 2);
    let max = parseInt('11111111', 2);

    let new_byte;
    if (operation === 'subtract') {
      new_byte = parseInt(byte, 2) - 1;
    } else {
      new_byte = parseInt(byte, 2) + 1;
    }

    if (new_byte < min) new_byte = min;
    if (new_byte > max) new_byte = max;

    bytes[byte_index] = reverseString(new_byte.toString(2));

    let new_text = convertBytesToText(bytes);
    setText(new_text);
  }

  function move() {
    let textdiv = textdiv_ref.current;
    let cursor = cursor_ref.current;
    let byte_holder = byte_holder_ref.current;
    let offset = offset_ref.current;
    let readout = readout_ref.current;

    let bytes = convertStringToBytes(text);

    let overlay = canvas_overlay_ref.current;
    let otx = overlay.getContext('2d');

    let offset_x = offset[0];
    let offset_y = offset[1];

    let byte_holder_cols = byte_holder[0];
    let byte_holder_rows = byte_holder[1];

    let byte_holder_width = byte_holder_cols * byte_cols * bs;
    let byte_holder_height = byte_holder_rows * byte_rows * bs;

    overlay.width = byte_holder_width + offset_x * 2;
    overlay.height = byte_holder_height + offset_y * 2;

    otx.clearRect(0, 0, overlay.width, overlay.height);
    otx.strokeStyle = '#888';
    otx.lineWidth = 1;
    for (let i = 0; i < bytes.length; i++) {
      let x = (i % byte_holder_cols) * byte_cols * bs + offset_x;
      let y = Math.floor(i / byte_holder_cols) * byte_rows * bs + offset_y;
      // otx.strokeRect(x, y, byte_cols * bs, byte_rows * bs);
    }

    let byte_index =
      Math.floor(cursor[1] / byte_height) * byte_holder_cols +
      Math.floor(cursor[0] / byte_width);
    let byte_x = (byte_index % byte_holder_cols) * byte_cols * bs;
    let byte_y = Math.floor(byte_index / byte_holder_cols) * byte_rows * bs;

    let bit_x = (cursor[0] - byte_x) / bs;
    let bit_y = (cursor[1] - byte_y) / bs;

    let bit_index = bit_y * byte_cols + bit_x;

    // clean up byte index if it is outside the bounds
    if (byte_index > bytes.length - 1) {
      let last_byte_index = bytes.length - 1;
      byte_index = last_byte_index;
      byte_x = (last_byte_index % byte_holder[0]) * byte_cols * bs;
      byte_y = Math.floor(last_byte_index / byte_holder[0]) * byte_rows * bs;
      cursor[0] = byte_x + bit_x * bs;
      cursor[1] = byte_y + bit_y * bs;
    }

    otx.strokeStyle = blue;
    otx.lineWidth = 2;
    otx.strokeRect(
      byte_x - 1 + offset_x,
      byte_y - 1 + offset_y,
      byte_cols * bs + 2,
      byte_rows * bs + 2
    );

    otx.strokeStyle = red;
    otx.lineWidth = 2;
    otx.strokeRect(
      cursor[0] - 1 + offset_x,
      cursor[1] - 1 + offset_y,
      bs + 2,
      bs + 2
    );

    let display_text = text.slice();
    if (display_text.length === 0) display_text = ' ';
    let display_array = display_text.split('');
    display_array[byte_index] =
      `<span style="background: ${blue}">` +
      display_array[byte_index] +
      '</span>';
    let new_text = display_array.join('');
    setDisplayText(new_text);

    if (bytes[byte_index] !== undefined) {
      let bit_readout = reverseString(bytes[byte_index])
        .split('')

        .map((b, i) => {
          if (bit_index === 7 - i) {
            return `<span style="background: ${red};">${b}</span>`;
          } else {
            return b;
          }
        })
        .join('');
      bit_readout += `  width: ${width_ref.current}`;
      readout.innerHTML = `byte ${byte_index
        .toString()
        .padStart(bytes.length.toString().length, '0')}: ${bit_readout}`;
    }
  }

  function respond() {
    let textdiv = textdiv_ref.current;
    let container = container_ref.current;

    let canvas = canvas_ref.current;
    canvas.width = width_ref.current;
    let ctx = canvas.getContext('2d');

    ctx.font = `${fs}px/${lh} customono`;
    let ch = ctx.measureText('w').width;

    let offset_x = ch * 2;
    let offset_y = rlh;
    offset_ref.current = [offset_x, offset_y];

    let bytes = convertStringToBytes(text);

    let byte_width = byte_cols * bs;
    let byte_height = byte_rows * bs;

    let byte_holder_cols = Math.floor(textdiv.offsetWidth / byte_width);
    let byte_holder_rows = Math.ceil(bytes.length / byte_holder_cols);
    byte_holder_ref.current = [byte_holder_cols, Math.max(1, byte_holder_rows)];

    let byte_holder_width = byte_holder_cols * byte_cols * bs;
    let byte_holder_height = byte_holder_rows * byte_rows * bs;

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
    for (let byr = 0; byr < byte_holder_rows; byr++) {
      for (let byc = 0; byc < byte_holder_cols; byc++) {
        let byte_index = byr * byte_holder_cols + byc;
        let byte = bytes[byte_index];
        if (byte !== undefined) {
          for (let br = 0; br < byte_rows; br++) {
            for (let bc = 0; bc < byte_cols; bc++) {
              let bit = byte.split('')[br * byte_cols + bc];
              if (bit === '1') {
                let x = byc * byte_cols * bs + bc * bs + offset_x;
                let y = byr * byte_rows * bs + br * bs + offset_y;
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
    let key = e.key.toLowerCase();
    let repeat = e.repeat;

    let km = keymap_ref.current;
    let cursor = cursor_ref.current;
    let x_inc = bs;
    let y_inc = bs;
    let byte_holder = byte_holder_ref.current;

    let bytes = convertStringToBytes(text);
    let byte_index =
      Math.floor(cursor[1] / byte_height) * byte_holder[0] +
      Math.floor(cursor[0] / byte_width);
    let byte_x = (byte_index % byte_holder[0]) * byte_cols * bs;
    let byte_y = Math.floor(byte_index / byte_holder[0]) * byte_rows * bs;

    let prev_cursor = cursor.slice();

    let bit_x = (cursor[0] - byte_x) / bs;
    let bit_y = (cursor[1] - byte_y) / bs;

    let bit_index = bit_y * byte_cols + bit_x;

    if (km['h']) cursor[0] -= x_inc;
    if (km['l']) cursor[0] += x_inc;

    if (km['j']) cursor[1] += y_inc;
    if (km['k']) cursor[1] -= y_inc;

    let new_byte_index =
      Math.floor(cursor[1] / byte_height) * byte_holder[0] +
      Math.floor(cursor[0] / byte_width);

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

    let bit_changed = false;
    if ((key === 'f' && !repeat) || (km['f'] && key !== 'f')) {
      bit_changed = true;
      changeBit('f');
    } else if (km['d']) {
      bit_changed = true;
      changeBit(1);
    } else if (km['e']) {
      bit_changed = true;
      changeBit(0);
    }

    let shift = e.shiftKey;
    let inc = 10;
    if (shift) inc = 1;
    if (key === 'u' || key === 'arrowleft') {
      let next = width_ref.current - inc;
      if (next < 40) next = 40;
      setSize(next);
      respond();
    } else if (key === 'i' || key === 'arrowright') {
      let next = width_ref.current + inc;
      setSize(next);
      respond();
    }

    // if (km['a'] && !(key === 'a' && repeat)) {
    if (km['a']) {
      bit_changed = true;
      mathByte('add');
      // } else if (km['s'] && !(key === 's' && repeat)) {
    } else if (km['s']) {
      bit_changed = true;
      mathByte('subtract');
    }

    if (!bit_changed) move();

    if (key === 't') {
      textarea_ref.current.focus();
      let t = textarea_ref.current;
      t.selectionStart = t.selectionEnd = t.value.length;
    } else if (key === 'w') {
      let link = document.createElement('a');

      link.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
      );
      // TODO: set width
      link.setAttribute(
        'download',
        `bix-width-${width_ref.current}-${new Date()
          .toISOString()
          .slice(0, -4)
          .replace(/-/g, '')
          .replace(/:/g, '')
          .replace(/_/g, '')
          .replace(/\./g, '')}Z.txt`
      );

      link.dispatchEvent(
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
    } else if (key === '?') {
      setHelp(prevState => {
        return !prevState;
      });
    }
  }

  useEffect(() => {
    respond();
    move();
  }, [text]);

  useEffect(() => {
    console.log('keys used', keys_used);
    setSize(window.innerWidth);
    respond();
    move();
  }, []);

  function downHandler(e) {
    let key = e.key.toLowerCase();
    keymap_ref.current[key] = true;
    keyAction(e);
    if (key === 't') e.preventDefault();
  }

  function upHandler(e) {
    let key = e.key.toLowerCase();
    keymap_ref.current[key] = false;
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
    <div>
      <div ref={container_ref} style={{ background: 'white' }}>
        <canvas
          style={{ position: 'absolute', left: 0, top: 0 }}
          ref={canvas_ref}
        />
        <canvas
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            pointerEvents: 'none',
          }}
          ref={canvas_overlay_ref}
        />
        <div
          style={{
            display: 'grid',
            ...pInline('2ch'),
            ...pBlock(rlh),
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '2ch',
          }}
        >
          <div />
          <div style={{ position: 'relative' }}>
            <div
              ref={textdiv_ref}
              style={{
                color: 'transparent',
                background: 'white',
                position: 'relative',
                width: '100%',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                pointerEvents: 'none',
              }}
              dangerouslySetInnerHTML={{ __html: display_text + '​' }}
            />
            <textarea
              onKeyDown={e => {
                if (e.key === 'Escape') e.target.blur();
                if (e.shiftKey && e.key === 'Enter') e.target.blur();
                e.stopPropagation();
              }}
              onChange={e => {
                handleText(e.target.value);
              }}
              ref={textarea_ref}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                resize: 'none',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
              spellCheck="false"
              value={text}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          ...pInline('2ch'),
          ...pBlock(rlh / 2),
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
        ref={readout_ref}
      />
      <div
        style={{
          position: 'fixed',
          right: '2ch',
          maxWidth: 'calc(100% - 4ch)',
          bottom: rlh,
          background: 'white',
          fontSize: 15,
          lineHeight: 1.5,
        }}
      >
        <div
          style={{
            position: 'fixed',
            right: '2ch',
            bottom: rlh,
            display: !help ? 'block' : 'none',
          }}
        >
          <Keycap clickKey={clickKey} k="?" label="" />
        </div>
        <div
          style={{
            ...pInline('2ch'),
            ...pBlock(rlh / 2),
            outline: 'solid 1px black',
            display: help ? 'block' : 'none',
          }}
        >
          <div style={{ marginBottom: rlh / 4 }}>
            Bix let's you draw on binary to glitch text.
          </div>
          <div>MOVE</div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', marginBottom: rlh / 4 }}
          >
            <Keycap clickKey={clickKey} k="h" label="previous byte" />
            <Keycap clickKey={clickKey} k="j" label="next bit" />
            <Keycap clickKey={clickKey} k="k" label="previous bit" />
            <Keycap clickKey={clickKey} k="l" label="next byte" />
          </div>
          <div>EDIT BINARY</div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', marginBottom: rlh / 4 }}
          >
            <Keycap clickKey={clickKey} k="d" label="draw" />
            <Keycap clickKey={clickKey} k="e" label="erase" />
            <Keycap clickKey={clickKey} k="f" label="flip" />
            <Keycap clickKey={clickKey} k="a" label="add 1 to byte" />
            <Keycap clickKey={clickKey} k="s" label="subtract 1 from byte" />
          </div>
          <div>SIZE</div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', marginBottom: rlh / 4 }}
          >
            <Keycap clickKey={clickKey} k="u" label="decrease width" />
            <Keycap clickKey={clickKey} k="i" label="increase width" />
          </div>
          <div>SPECIAL</div>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', marginBottom: rlh / 4 }}
          >
            <Keycap clickKey={clickKey} k="t" label="edit text" />
            <Keycap clickKey={clickKey} k="w" label="save as txt" />
            <Keycap clickKey={clickKey} k="?" label="toggle help" />
          </div>
          <div>
            <a href="https://github.com/constraint-systems/bix">View source</a>
          </div>
        </div>
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
          border: none;
          margin: 0;
          font-size: inherit;
          padding: 0;
          line-height: inherit;
          font-weight: normal;
          font: inherit;
          background: transparent;
        }
        textarea:focus {
          outline: none;
          background: rgba(0, 0, 0, 0.125);
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

export default Index;
