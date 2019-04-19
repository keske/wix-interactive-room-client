// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
import Ticker from '../components/Ticker';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        <div style={styles.ticker}>
          {
            // <Ticker text="DJ MASHA | COMPUTER CRAPHICS | ANDREY KESKE" />
          }
        </div>
      </div>
    ),
  )({
    styles: {
      root: {
        position: 'absolute',
        zIndex: 1,
      },

      ticker: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
      },
    },
  })
);
