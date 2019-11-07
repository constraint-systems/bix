let fs = 14;
let lh = 1.5;
let rlh = fs * lh;
let ts = {
  textTransform: 'uppercase',
};
let maxch = '74ch';

let Key = (item, clickKey) => {
  let [key, label] = item;
  return (
    <div
      onClick={() => {
        clickKey(key);
      }}
      style={{
        cursor: 'pointer',
        marginRight: label !== false ? '1ch' : 0,
        display: 'flex',
        marginBottom: label !== false ? rlh / 4 : 0,
      }}
    >
      <div
        style={{
          border: 'solid 1px black',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          background: '#fff',
        }}
      >
        {key}
      </div>
      {label !== false ? (
        <div
          style={{
            paddingLeft: '1ch',
            paddingRight: '1ch',
            borderTop: 'solid 1px transparent',
            borderRight: 'solid 1px transparent',
            borderBottom: 'solid 1px transparent',
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

let KeyList = ({ items, clickKey }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map(item => {
        return Key(item, clickKey);
      })}
    </div>
  );
};

let Relevant = ({ mode, clickKey }) => {
  switch (mode) {
    case 'default':
      return (
        <div>
          <div
            style={{
              marginBottom: rlh / 4,
            }}
          >
            <div style={ts}>Width</div>
            <KeyList
              items={[['h', 'narrower'], ['l', 'wider']]}
              clickKey={clickKey}
            />
            <KeyList
              clickKey={clickKey}
              items={[['shift', 'hold to move by 10']]}
            />
          </div>

          <div
            style={{
              marginBottom: rlh / 4,
            }}
          >
            <div style={ts}>Text</div>
            <KeyList items={[['e', 'edit text']]} clickKey={clickKey} />
          </div>

          <div
            style={{
              marginBottom: rlh / 4,
            }}
          >
            <div style={ts}>Image</div>
            <div>To upload an image you can paste, drop or press</div>
            <KeyList
              items={[['o', 'to open a file dialog']]}
              clickKey={clickKey}
            />
          </div>
        </div>
      );
      break;
    case 'editing':
      return (
        <div>
          <div
            style={{
              marginBottom: rlh / 4,
            }}
          >
            <div style={ts}>Editing</div>
            <KeyList
              items={[['escape', 'stop editing (or shift+enter)']]}
              clickKey={clickKey}
            />
          </div>
        </div>
      );
      break;

    default:
      return null;
  }
};

export default ({ rlh, mode, help, clickKey, image_info }) => {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          right: '2ch',
          bottom: rlh,
          display: !help ? 'block' : 'none',
        }}
      >
        {Key(['?', false], clickKey)}
      </div>

      <div
        style={{
          paddingRight: '1ch',
          paddingLeft: '1ch',
          paddingTop: rlh / 4,
          paddingBottom: rlh / 4,
          position: 'fixed',
          outline: 'solid 1px black',
          width: maxch,
          maxWidth: `calc(100% - 4ch)`,
          background: 'white',
          paddingLeft: '2ch',
          paddingRight: '2ch',
          paddingBottom: rlh / 2,
          paddingTop: rlh / 2,
          right: '2ch',
          bottom: rlh,
          overflowY: 'auto',
          display: help ? 'block' : 'none',
        }}
      >
        <div style={{ marginBottom: rlh / 4 }}>
          Pixel-reflow an image to match the dimensions of your text.
        </div>

        <div
          style={{
            background: '#efefef',
            marginLeft: '-2ch',
            marginRight: '-2ch',
            paddingLeft: '2ch',
            paddingRight: '2ch',
          }}
        >
          <Relevant mode={mode} clickKey={clickKey} />
        </div>
        <div
          style={{
            marginBottom: rlh / 4,
          }}
        >
          <div style={ts}>Special</div>
          <KeyList
            clickKey={clickKey}
            items={[['w', 'save diptych as png'], ['?', 'help']]}
          />
        </div>
        <div>
          <a href={image_info[2]}>Default image {image_info[1]}</a>
        </div>

        <div>
          <a href="https://github.com/constraint-systems/diptych">
            View source
          </a>
        </div>
      </div>
    </div>
  );
};
