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
                  Welcome to the Interaction Room.
                </h1>
                <p style={styles.paragraph}>
                  Here you can modify your own graphic element with unique sound effects. Look at the projection screen above the DJ, now you are part of the show.
                </p>

                <p style={styles.paragraph}>
                  This project is open source project, check it out our repository on GitHub: 
                  <a
                    href="https://github.com/keske/wix-interactive-room"
                    style={styles.link}
                  >
                    https://github.com/keske/wix-interactive-room
                  </a>
                </p>
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
