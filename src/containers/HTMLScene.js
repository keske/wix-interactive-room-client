// @flow

import * as R from 'ramda';
import * as React from 'react';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        <h1 style={{ color: '#FFF' }}>
          Hello
        </h1>
      </div>
    ),
  )({
    styles: {
      root: {
        position: 'absolute',
        zIndex: 13,

        top: 100,
        left: 100,
      },
    },
  })
);
