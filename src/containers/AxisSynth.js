// @flow

import * as React from 'react';
import * as THREE from 'three';

// Components
import { Scene } from '../modules/Three';

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
          rotation: {
            x: props.mouse.x,
            y: 90.1,
            z: 45.1,
          },
          // this.object.rotation.x += 0.01;
          // this.object.rotation.y += 0.01;
          // this.object.rotation.z += 0.01;
        },
        object: new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
            color: 'red',
          }),
        ),
      },
    ]}
  />
);
