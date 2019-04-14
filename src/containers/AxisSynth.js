// @flow

import * as React from 'react';

// Components
import { Scene, cube, sphere } from '../modules/Three';

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
      // {
      //   animate: {
      //     position: {
      //       x: (props.mouse.x - (window.innerWidth / 2)) / 30,
      //       y: (props.mouse.y - (window.innerHeight / 2)) / -30,
      //       z: (props.mouse.x - props.mouse.y) / 30,
      //     },
      //   },
      //   object: sphere({
      //     size: 2.5,
      //     color: '#000',
      //   }),
      // },
      // {
      //   animate: {
      //     position: {
      //       x: (props.mouse.x - (window.innerWidth / 2)) / 70,
      //       y: (props.mouse.y - (window.innerHeight / 2)) / -70,
      //       z: (props.mouse.x - props.mouse.y) / 50,
      //     },
      //     rotation: {
      //       x: props.mouse.x / 50,
      //       y: props.mouse.y / 50,
      //       z: 0,
      //     },
      //   },
      //   object: cube({ size: 2 }),
      // },
      {
        animate: {
          position: {
            x: props.mouse.x - (window.innerWidth / 2),
            y: -(props.mouse.y - (window.innerHeight / 2)),
            z: (props.mouse.x - props.mouse.y) / 50,
          },
          rotation: {
            x: props.mouse.x / 20,
            y: props.mouse.y / 20,
            z: 0,
          },
        },
        object: cube(),
      },
    ]}
  >
    {
      (/*{ scene }*/) => false
    }
  </Scene>
);
