// @flow

import * as THREE from 'three';

type Props = {
  images?: Array<string>,
  path?: string,
  radius?: number,
  refractionRatio?: number,
  widthSegments?: number,
  heightSegments?: number,
};

export default ({
  images = ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
  path = 'https://threejs.org/examples/textures/cube/Park3Med/',
  radius = 10,
  refractionRatio = 0.95,
  widthSegments = 32,
  heightSegments = 32,
}: Props = {}): * => {
  const envMap = new THREE.CubeTextureLoader().setPath(path).load(images);

  envMap.mapping = THREE.CubeRefractionMapping;

  return (
    new THREE.Mesh(
      new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments,
      ),
      new THREE.MeshBasicMaterial({
        envMap,
        refractionRatio,
      }),
    )
  );
};
