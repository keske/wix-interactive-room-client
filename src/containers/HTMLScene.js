// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
// import Lens from '../components/Lens';
// import Ticker from '../components/Ticker';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        {
          // <Lens />
        }
        {
          // <Ticker text="DJ MASHA | COMPUTER CRAPHICS | ANDREY KESKE" />
        }
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
