import React, { useState, useEffect, useRef, useCallback } from 'react';

let Keycap = ({ k, label }) => {
  return (
    <div
      style={{
        marginRight: '2ch',
      }}
    >
      <span
        style={{
          outline: 'solid 1px black',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
        }}
      >
        {k}
      </span>{' '}
      {label}
    </div>
  );
};

export default Keycap;
