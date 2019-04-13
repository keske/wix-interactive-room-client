// @flow

import * as THREE from 'three';

type Props = {
  size: number,
  color: string,
};

export default ({
  size = 1,
  color = '#FFF',
}: Props = {}): * => (
  new THREE.Mesh(
    new THREE.BoxGeometry(size, size, size),
    new THREE.MeshBasicMaterial({
      color,
    }),
  )
);
