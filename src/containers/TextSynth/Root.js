// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
// import Audio from './Audio';
// import Background from './Background';
// import Graphics from './Graphics';

// Types
import type { MouseOrTouchPosition, Screen } from '../../types';

type Props = {
  mouse: MouseOrTouchPosition,
  screen: Screen,
};

type State = {
  endPoint: string,
  id: number | null,
};

// TODO:
// 1. Refactor developmetn and production ip's to functions()
export default class LensSynth extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      id: null,
      endPoint: process.env.REACT_APP_STAGE === 'production'
        ? 'http://134.209.218.211:3070'
        : 'http://192.168.1.6:3070',
        // : 'http://localhost:3070',
    };
  }

  componentDidMount = () => {
    this.registerDevice();
  }

  registerDevice = () => {
    const id = +(new Date());

    this.setState({ id });
  }

  render = () => {
    const { endPoint, id } = this.state;
    const { mouse } = this.props;

    const props = ({
      endPoint,
      mouse,
      id,
    });

    return (
      id && (
        R.pipe(
          ({ styles }) => (
            <div style={styles.root}>
              <input
                style={styles.input}
                type="text"
              />
            </div>
          ),
        )({
          styles: {
            root: {
              // top: 20,
              // left: 20,

              position: 'fixed',
              zIndex: 2,

              width: `${window.innerWidth}px`,
              height: `${window.innerHeight}px`,

              textAlign: 'center',
            },
            input: {
              width: `${window.innerWidth - 150}px`,
              display: 'inline-block',
              // margin: 30,
            },
          },
        })
      )
    );
  }

}
