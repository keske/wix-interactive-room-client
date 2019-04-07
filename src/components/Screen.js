// @flow

import * as React from 'react';
import * as R from 'ramda';

// Types
type Props = {
  children: any,
};

export default ({ children }: Props): React.Node => (
  R.pipe(
    ({ styles }) => (
      <div style={styles.root}>
        {
          children
        }
      </div>
    ),
  )({
    styles: {
      root: {
        width: '100vw',
        height: '100vh',
      },
    },
  })
);
