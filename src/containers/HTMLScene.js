// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
import Cube from '../components/Cube';
import Ticker from '../components/Ticker';

// Types
import type { MouseOrTouchPosition } from '../types';

type Props = {
  mouse: MouseOrTouchPosition,
};

export default ({ mouse }: Props): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        <Cube {...{ mouse }}/>
        <div style={styles.ticker}>
          <Ticker text="DJ MASHA | COMPUTER CRAPHICS | ANDREY KESKE" />
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
