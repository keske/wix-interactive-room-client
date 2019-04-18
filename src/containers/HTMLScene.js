// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
import Ticker from '../components/Ticker';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        <Ticker />
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
