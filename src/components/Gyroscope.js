// @flow

import * as React from 'react';

// Types
type Props = {
  children: any,
};

type State = {
  acceleration: {
    x: number,
    y: number,
    z: number,
  },
  accelerationIncludingGravity: {
    x: number,
    y: number,
    z: number,
  },
  interval: number,
  rotationRate: {
    alpha: number,
    beta: number,
    gamma: number,
  },
};

export default class Gyroscope extends React.Component<Props, State> {

  state = {
    acceleration: {
      x: 0,
      y: 0,
      z: 0,
    },
    accelerationIncludingGravity: {
      x: 0,
      y: 0,
      z: 0,
    },
    interval: 0,
    rotationRate: {
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
  };

  handleDeviceMotion = (event: State) => {
    this.setState(event);
  };

  componentDidMount = () => {
    window.addEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  componentWillUnmount= () => {
    window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  render = () => (
    this.props.children(this.state)
  )

}
