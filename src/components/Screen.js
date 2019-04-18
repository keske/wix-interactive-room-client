// @flow

import * as React from 'react';
import * as R from 'ramda';

// Types
import type { Screen } from '../types';

type Props = {
  children: any,
};

export default ({ children }: Props): React.Node => (
  R.pipe(
    (screen: Screen): React.Node => (
      <div style={{ ...screen }}>
        {
          children({ ...screen })
        }
      </div>
    ),
  )({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000',
  })
);
