// @flow

import * as React from 'react';
import * as THREE from 'three';

// Components
import { Scene, cube, lens } from '../modules/Three';

// Types
import type { Acceleration, Mouse, Screen } from '../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
  screen: Screen,
};

export default (props: Props): React.Node => (
  <Scene
    {...props}
    objects={[
      {
        animate: {
          position: {
            x: props.mouse.x / 150,
            y: -(props.mouse.y / 150),
            z: 0,
          },
          // rotation: {
          //   x: props.mouse.x / 150,
          //   y: props.mouse.y / 150,
          //   z: 0,
          // },
        },
        object: lens(),
      },
      {
        animate: {
          position: {
            x: props.mouse.x / 50,
            y: -(props.mouse.y / 50),
            z: 0,
          },
          rotation: {
            x: props.mouse.x / 50,
            y: props.mouse.y / 50,
            z: 0,
          },
        },
        object: cube({ size: 4 }),
      },
    ]}
  />
);
