// @flow

import * as React from 'react';
import * as THREE from 'three';

// Utils
import getRandomRGBColor from '../../utils/getRandomRGBColor';

// Components
import Scene from './Scene';

// Types
import type { Acceleration, Mouse, Screen } from '../../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
  screen: Screen,
};

export default class Cube extends React.Component<Props> {

  add = (scene: any) => {
    const size = 0.5;

    const geometry = new THREE.BoxGeometry(size, size, size);

    const material = new THREE.MeshBasicMaterial({
      color: getRandomRGBColor(),
    });

    this.object = new THREE.Mesh(geometry, material);

    scene.add(this.object);
  }

  animate = () => {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
    this.object.rotation.z += 0.01;
  }

  object: any

  render = () => (
    <Scene
      {...this.props}
      addObjects={(scene) => {
        this.add(scene);
      }}
      animateObjects={() => {
        this.animate();
      }}
    />
  )

}
