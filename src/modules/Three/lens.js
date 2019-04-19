// @flow

import * as THREE from 'three';

type Props = {
  color: string,
  size: number,
};

export default ({
  color = '#FFF',
  size = 20,
}: Props = {}): * => {
  const geometry = new THREE.SphereBufferGeometry(10, 32, 16);

  const textureCube = new THREE.CubeTextureLoader()
    .setPath('https://threejs.org/examples/textures/cube/Park3Med/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

  textureCube.mapping = THREE.CubeRefractionMapping;

  const material = new THREE.MeshBasicMaterial({
    envMap: textureCube,
    refractionRatio: 0.95,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.x = 100;
  mesh.position.y = 100;
  mesh.position.z = 10;

  return mesh;
};
