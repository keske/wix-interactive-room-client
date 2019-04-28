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

  handleDeviceMotion = () => {
    // console.log('handleDeviceMotion');
    // this.setState(event);
  };

  handleResize = () => {
    // console.log('resize');
  }

  componentDidMount = () => {
    // console.log(window);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  componentWillUnmount = () => {
    window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  render = () => (
    this.props.children(this.state)
  )

}
