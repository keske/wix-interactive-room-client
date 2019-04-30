// @flow

import * as R from 'ramda';
import * as React from 'react';

// Libs
import axios from 'axios';
import Wad from 'web-audio-daw';

// Types
import type { MouseOrTouchPosition } from '../../types';

type Props = {
  children: any,
  id: string,
  mouse: MouseOrTouchPosition,
};

type State = {
  source: string,
};

// TODO:
// 1. Refactor developmetn and production ip's to functions()
export default class Audio extends React.Component<Props, State> {

  state = {
    source: (
      R.pipe(
        () => (
          Math.floor(Math.random() * 94) + 1
        ),
        (_) => (
          process.env.REACT_APP_STAGE === 'production'
            ? `http://134.209.218.211:3080/samples/${_}.wav`
            : `http://192.168.1.6:3080/samples/${_}.wav`
            // : `http://localhost:3080/samples/${_}.wav`
        ),
      )()
    ),
  }

  getRandomSample = () => (
    R.pipe(
      () => (
        process.env.REACT_APP_STAGE === 'production'
          ? 'http://134.209.218.211:3080/samples'
          : 'http://192.168.1.6:3080/samples'
          // : 'http://localhost:3080/samples'
      ),
      (url) => (
        `${url}/${Math.floor(Math.random() * 94) + 1}.wav`
      ),
    )()
  )

  play = async () => {
    const { source } = this.state;
    const { id, mouse } = this.props;

    const delay = {
      delayTime: mouse.x / 1000,
      wet: mouse.y / 1000,
      feedback: 0.25,
    };

    await axios.post((
      process.env.REACT_APP_STAGE === 'production'
        ? 'http://134.209.218.211:3080/'
        : 'http://192.168.1.6:3080/'
        // : 'http://localhost:3080/'
    ), {
      id,
      delay,
      source,
    });

    const sample = (
      new Wad({
        delay,
        source,
      })
    );

    sample.play();
  }

  render = () => {
    const { children } = this.props;

    return (
      <div
        onClick={() => {
          this.play();
        }}
        onTouchStart={() => {
          this.play();
        }}
      >
        {
          children
        }
      </div>
    );
  }

}
