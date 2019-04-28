// @flow

import * as React from 'react';

// Libs
import axios from 'axios';
import Wad from 'web-audio-daw';

// Types
import type { Acceleration, MouseOrTouchPosition } from '../../types';

type Props = {
  acceleration: Acceleration,
  children: any,
  id: string,
  mouse: MouseOrTouchPosition,
};

export default class Audio extends React.Component<Props> {

  getRandomSample = () => (
    'http://localhost:3017/samples/1.wav'
  )

  play = async () => {
    const { id, mouse } = this.props;

    const delay = {
      delayTime: mouse.x / 1000,
      wet: mouse.y / 1000,
      feedback: 0.25,
    };

    const source = this.getRandomSample();

    await axios.post('http://localhost:3017/', {
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
      >
        {
          children
        }
      </div>
    );
  }

}
