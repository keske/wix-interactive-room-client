// @flow

import * as R from 'ramda';
import * as React from 'react';

import axios from 'axios';

// Components
import { Scene, cube } from '../modules/Three';

// Types
import type { Acceleration, Mouse, Screen } from '../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
  screen: Screen,
};

type State = {
  id: number | null,
};

export default class AxisSynth extends React.Component<Props, State> {

  state = {
    id: null,
  }

  componentDidMount = () => {
    this.registerDevice();

    this.timer = setInterval(() => this.updateDevice(), 100);
  }

  composeObjects = (scene: boolean = true) => {
    const { mouse } = this.props;

    return [{
      animate: {
        position: {
          x: mouse.x - (window.innerWidth / 2),
          y: -(mouse.y - (window.innerHeight / 2)),
          z: (mouse.x - mouse.y) / 10,
        },
        rotation: {
          x: mouse.x / 20,
          y: mouse.y / 20,
          z: 0,
        },
      },
      object: scene && cube(),
      render: {
        type: 'cube',
      },
    }];
  }

  registerDevice = () => {
    const id = +(new Date());

    const objects = R.omit(['object'], this.composeObjects(false));

    this.setState(() => {
      axios.post('http://localhost:3030/', {
        id,
        type: 'axissynth',
        objects,
      });

      return { id };
    });
  }

  updateDevice = () => {
    const { id } = this.state;

    const objects = R.omit(['object'], this.composeObjects(false));

    axios.patch('http://localhost:3030/', {
      id,
      device: {
        objects,
      },
    });
  }

  timer: any

  render = () => {
    const { id } = this.state;

    return (
      id && (
        <Scene
          {...this.props}
          objects={this.composeObjects()}
        >
          {
            (/* { scene } */) => false
          }
        </Scene>
      )
    );
  }

}
