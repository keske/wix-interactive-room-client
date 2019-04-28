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
  endPoint: string,
  mouse: MouseOrTouchPosition,
  id: string,
};

export default class Audio extends React.Component<Props> {

  getRandomSample = () => (
    'http://localhost:4444/wix/1.wav'
  )

  play = () => {
    const { mouse } = this.props;

    const source = this.getRandomSample();

    this.send(source);

    const sample = (
      new Wad({
        delay: {
          delayTime: mouse.x / 1000,
          wet: mouse.y / 1000,
          feedback: 0.25,
        },
        source,
      })
    );

    sample.play();
  }

  send = async (source: string) => {
    const { endPoint, id } = this.props;

    await axios.post(`${endPoint}/audio`, {
      id,
      source,
    });
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
