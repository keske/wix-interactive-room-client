// @flow

import * as React from 'react';
import * as R from 'ramda';

// Types
import type { MouseOrTouchPosition } from '../types';

type Props = {
  mouse: MouseOrTouchPosition,
};

export default ({ mouse: { x, y } }: Props): React.Node => (
  R.equals(process.env.REACT_APP_STAGE, 'development') && (
    R.pipe(
      ({ styles }) => (
        <div style={styles.root}>
          <p style={styles.text}>
            {`
              Server
              ip: 134.209.218.211
            `}
          </p>
          <p style={styles.text}>
            {`
              Pixel Ratio
              ${window.devicePixelRatio}
            `}
          </p>
          <p style={styles.text}>
            {`
              Screen
              w: ${window.innerWidth} px / 
              h: ${window.innerHeight} px
            `}
          </p>
          <p style={styles.text}>
            {`
              Position
              x: ${x} px /
              y: ${y} px
            `}
          </p>
          <p style={styles.text}>
            {`
              Delay
              time: ${x / 1000} ms /
              wet: ${y / 1000} ms /
              feedback: ${(x / 2 + y / 2) / 1000} ms
            `}
          </p>
        </div>
      ),
    )({
      styles: {
        root: {
          top: 20,
          left: 20,
          padding: 7,
          position: 'absolute',
          zIndex: 2,

          opacity: 0.3,
        },
        text: {
          color: '#FFF',
          fontFamily: 'Monospace',
          fontSize: 10,
          fontWeight: 'bold',
        },
      },
    })
  )
);
