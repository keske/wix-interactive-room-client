// @flow

import * as React from 'react';
import * as R from 'ramda';

// Types
import type { Acceleration, Mouse } from '../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
};

export default ({ acceleration, mouse }: Props): React.Node => (
  R.equals(process.env.REACT_APP_STAGE, 'development') && (
    R.pipe(
      ({ styles }) => (
        <div style={styles.root}>
          <span style={styles.text}>
            {`
              Acceleration 
                X: ${acceleration.x}
                Y: ${acceleration.y}
                Z: ${acceleration.z}
              Mouse
                X: ${mouse.x}
                Y: ${mouse.y}
            `}
          </span>
        </div>
      ),
    )({
      styles: {
        root: {
          backgroundColor: 'yellow',
          top: 0,
          left: 0,
          padding: 7,
          position: 'absolute',
        },
        text: {
          fontFamily: 'Helvetica',
          fontSize: 10,
          fontWeight: 'bold',
        },
      },
    })
  )
);
