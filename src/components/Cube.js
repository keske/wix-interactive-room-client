// @flow

import * as React from 'react';
import * as THREE from 'three';

// Components
import Three from './Three';

// Types
import type { Screen } from './Screen';

type Props = {
  scene: any,
  screen: Screen,
};

export default class Cube extends React.Component<Props> {

  add = (scene: any) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });

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
