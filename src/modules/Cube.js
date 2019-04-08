// @flow

import * as React from 'react';
import * as THREE from 'three';

// Utils
import getRandomRGBColor from '../utils/getRandomRGBColor';

// Components
import Three from './Three';

// Types
import type { Screen } from '../components/Screen';

type Props = {
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
  }

  object: any

  render = () => (
    <Three
      {...this.props}
      addObjectsToTheScene={(scene) => {
        this.add(scene);
      }}
      animateObjectsToTheScene={() => {
        this.animate();
      }}
    />
  )

}
