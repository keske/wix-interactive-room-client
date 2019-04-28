// @flow

import * as React from 'react';

// Libs
import axios from 'axios';

// Components
import Scene, { sphere } from '../../modules/Three';

// Types
import type { Acceleration, MouseOrTouchPosition, Screen } from '../../types';

type Props = {
  acceleration: Acceleration,
  endPoint: string,
  mouse: MouseOrTouchPosition,
  id: string,
  screen: Screen,
};

export default class Graphics extends React.Component<Props> {

  componentDidMount = () => {
    this.init();

    this.timer = setInterval(() => this.updateDevice(), 100);
  }

  composeObjects = (scene: boolean = true) => {
    const { mouse } = this.props;

    return [{
      animate: {
        position: {
          x: mouse.x - (window.innerWidth / 2),
          y: -(mouse.y - (window.innerHeight / 2)),
          // z: (mouse.x - mouse.y) / 7,
        },
        rotation: {
          x: mouse.y / 7,
          y: mouse.x / 7,
          z: 0,
        },
      },
      object: scene && sphere(),
      render: {
        type: 'sphere',
      },
    }];
  }

  init = async () => {
    const { endPoint, id } = this.props;

    const objects = this.composeObjects(false);

    await axios.post(endPoint, {
      id,
      type: 'lenssynth',
      objects,
    });
  }

  updateDevice = async () => {
    const { endPoint, id } = this.props;

    const objects = this.composeObjects(false);

    await axios.patch(endPoint, {
      id,
      device: {
        objects,
      },
    });
  }

  timer: any

  render = () => (
    <Scene
      {...this.props}
      objects={this.composeObjects()}
    >
      {
        () => false
      }
    </Scene>
  )

}
