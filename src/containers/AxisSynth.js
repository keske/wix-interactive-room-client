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
        object: new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
            color: '#FFF',
          }),
        ),
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
        object: new THREE.Mesh(
          new THREE.BoxGeometry(0.5, 0.5, 0.5),
          new THREE.MeshBasicMaterial({
            color: '#FFF',
          }),
        ),
      },
    ]}
  />
);
