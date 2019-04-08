// @flow

import * as React from 'react';

// Types
import type { Acceleration } from '../types';

type Props = {
  children: any,
};

type State = {
  acceleration: Acceleration,
};

export default class Gyroscope extends React.Component<Props, State> {

  state = {
    acceleration: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  handleDeviceMotion = (event: State) => {
    this.setState(event);
  };

  componentDidMount = () => {
    window.addEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  componentWillUnmount = () => {
    window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  render = () => (
    this.props.children(this.state)
  )

}
