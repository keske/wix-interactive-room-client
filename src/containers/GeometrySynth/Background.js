// @flow

import * as React from 'react';
import * as R from 'ramda';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root} />
    ),
  )({
    styles: {
      root: {
        top: 0,
        left: 0,

        backgroundImage: 'linear-gradient(45deg, #000000 46.30%, #ffffff 46.30%, #ffffff 50%, #000000 50%, #000000 96.30%, #ffffff 96.30%, #ffffff 100%)',
        backgroundSize: '38.18px 38.18px',

        position: 'fixed',
        zIndex: 0,

        opacity: 0.2,

        width: window.innerWidth,
        height: window.innerHeight,
      },
    },
  })
);
