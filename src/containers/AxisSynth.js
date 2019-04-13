// @flow

import * as React from 'react';

// Components
import { Scene, cube } from '../modules/Three';

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
            x: props.mouse.x / 100,
            y: -(props.mouse.y / 100),
            z: 0,
          },
          rotation: {
            x: props.mouse.x / 100,
            y: 0,
            z: 0,
          },
        },
        object: cube(),
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
        object: cube(),
      },
    ]}
  />
);
