import React, { useState, useEffect, useRef, useCallback } from 'react';

let Keycap = ({ k, label, clickKey }) => {
  return (
    <div
      style={{
              userSelect: 'none',
              MozUserSelect: 'none'

      }}
    >
      <span
        style={{
          outline: 'solid 1px black',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          background: 'white',
                cursor: 'default'
        }}
              onClick={() => {clickKey(k)}}
      >
        {k}
      </span>{label !== '' ? <span> <span style={{marginRight: '2ch'}}>{label}</span></span> : ''}
    </div>
  );
};

export default Keycap;
