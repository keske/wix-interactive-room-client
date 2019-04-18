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
  endPoint: string,
  id: number | null,
};

export default class AxisSynth extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      id: null,
      endPoint: process.env.NODE_ENV === 'development'
        ? 'http://10.0.1.102:3030/'
        : 'http://174.138.54.13:3030/',
    };
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
    const { endPoint } = this.state;

    const id = +(new Date());
    const objects = this.composeObjects(false);

    this.setState(() => {
      axios.post(endPoint, {
        id,
        type: 'axissynth',
        objects,
      });

      return { id };
    });
  }

  updateDevice = async () => {
    const { endPoint, id } = this.state;

    const objects = this.composeObjects(false);

    await axios.patch(endPoint, {
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
            (/* { scene } */) => (
              <div style={{ top: 100, left: 100 }}>
                <h1 style={{ color: '#FFF' }}>
                  Hello
                </h1>
              </div>
            )
          }
        </Scene>
      )
    );
  }

}
