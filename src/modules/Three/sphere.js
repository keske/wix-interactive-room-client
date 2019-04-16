// @flow

import * as THREE from 'three';

type Props = {
  color: string,
  radius: number,
  widthSegments: number,
  heightSegments: number,
};

export default ({
  color = '#FFF',
  radius = 1,
  widthSegments = 32,
  heightSegments = 32,
}: Props = {}): * => {
  console.log('textureCube');

  return (
    new THREE.Mesh(
      new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments,
      ),
      new THREE.MeshBasicMaterial({
        color,
      }),
    )
  );
};
