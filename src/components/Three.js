// @flow

import * as React from 'react';
import * as THREE from 'three';

// Types
import type { Screen } from './Screen';

type Props = {
  screen: Screen,
};

export default class Scene extends React.Component<Props> {

  constructor(props: Props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  setScene = () => {
    this.scene = (
      new THREE.Scene()
    );
  }

  setCamera = () => {
    const {
      screen: {
        width,
        height,
      },
    } = this.props;

    this.camera = (
      new THREE.PerspectiveCamera(
        // Camera frustum vertical field of view.
        75,
        // Camera frustum aspect ratio.
        width / height,
        // Camera frustum near plane.
        0.1,
        //  Camera frustum far plane.
        1000,
      )
    );

    this.camera.position.z = 4;
  }

  setRendener = () => {
    const {
      screen: {
        width,
        height,
      },
    } = this.props;

    this.renderer = (
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
    );

    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
  }

  addCube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });

    this.cube = new THREE.Mesh(geometry, material);
    this.material = material;

    this.scene.add(this.cube);
  }

  animateCube = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }

  componentDidMount = () => {
    this.setScene();
    this.setCamera();
    this.setRendener();
    this.addCube();

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount = () => {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      // eslint-disable-next-line
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop = () => {
    // eslint-disable-next-line
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    this.animateCube();

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }

  animate: any

  camera: any

  frameId: any

  material: any

  mount: any

  renderer: any

  scene: any

  start: any

  stop : any

  render() {
    const {
      screen: {
        width,
        height,
      },
    } = this.props;

    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
        style={{
          width,
          height,

          position: 'absolute',
        }}
      />
    );
  }
}
