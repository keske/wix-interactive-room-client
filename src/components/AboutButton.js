// @flow

import * as React from 'react';
import * as R from 'ramda';

// Components
import { AboutContext } from '../modules/About';

export default (): React.Node => (
  R.pipe(
    ({ styles }) => (
      <AboutContext.Consumer>
        {
          ({ handle }) => (
            <div style={styles.root}>
              <button
                onClick={() => {
                  handle();
                }}
                style={styles.button}
              >
                <span aria-label="" role="img">
                  🤟
                </span>
              </button>
            </div>
          )
        }
      </AboutContext.Consumer>
    ),
  )({
    styles: {
      root: {
        bottom: 20,
        right: 0,
        position: 'absolute',
        zIndex: 8,
      },
      button: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        background: 'none',
        border: 'none',
      },
    },
  })
);
