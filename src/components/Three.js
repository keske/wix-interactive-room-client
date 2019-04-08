// @flow

import * as React from 'react';
import * as THREE from 'three';

// Types
import type { Screen } from './Screen';

type Props = {
  addObjectsToTheScene: Function,
  animateObjectsToTheScene: Function,
  screen: Screen,
};

export default class Scene extends React.Component<Props> {

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

  componentDidMount = () => {
    const { addObjectsToTheScene } = this.props;

    this.setScene();
    this.setCamera();
    this.setRendener();

    addObjectsToTheScene(this.scene);

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
    const { animateObjectsToTheScene } = this.props;

    animateObjectsToTheScene();

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }

  camera: any

  frameId: any

  mount: any

  renderer: any

  scene: any

  render = () => {
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
