// @flow

import * as THREE from 'three';

type Props = {
  size: number,
  color: string,
};

export default ({
  size = 1,
  color = '#FFF',
}: Props = {}): * => {
  console.log('textureCube');

  return (
    new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 32, 16),
      new THREE.MeshBasicMaterial({
        color: 0x111111,
      }),
    )
  );
};
