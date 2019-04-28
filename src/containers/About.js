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
          ({ show }) => (
            show && (
              <div style={styles.root}>
                <h1 style={styles.title}>
                  Andrey Keske
                </h1>
                <p style={styles.paragraph}>
                  Andrey Keske
                </p>
                <a
                  href="http://www.andreykeske.com"
                  style={styles.link}
                >
                  Andrey Keske
                </a>
              </div>
            )
          )
        }
      </AboutContext.Consumer>
    ),
  )({
    styles: {
      root: {
        top: 0,
        left: 0,
        padding: 50,
        position: 'absolute',
        zIndex: 7,
        background: 'rgba(0, 0, 0, 0.87)',
        width: window.innerWidth,
        height: window.innerHeight,
      },
      title: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
      },
      paragraph: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        color: '#FFF',
      },
      link: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        color: '#FFF',
      },
    },
  })
);
