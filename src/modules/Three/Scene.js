// @flow

import * as React from 'react';
import * as THREE from 'three';

// Types
import type { Screen } from '../../types';

type CameraConfig = {
  frustumVerticalFieldOfView: number,
  frustumAspectRatio: number,
  frustumNearPlane: number,
  frustumFarPlane: number,
};

type Props = {
  // addObjects: Function,
  // animateObjects: Function,
  camera?: CameraConfig,
  screen: Screen,
};

export default class Scene extends React.Component<Props> {

  static defaultProps = {
    camera: {
      frustumVerticalFieldOfView: 75,
      frustumAspectRatio: (window.innerWidth / window.innerHeight),
      frustumNearPlane: 0.1,
      frustumFarPlane: 1000,
    },
  }

  setScene = () => {
    this.scene = (
      new THREE.Scene()
    );
  }

  setCamera = () => {
    const {
      camera: {
        frustumVerticalFieldOfView,
        frustumAspectRatio,
        frustumNearPlane,
        frustumFarPlane,
      },
    } = this.props;

    this.camera = (
      new THREE.PerspectiveCamera(
        frustumVerticalFieldOfView,
        frustumAspectRatio,
        frustumNearPlane,
        frustumFarPlane,
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
    // TODO:
    // const { addObjects } = this.props;

    this.setScene();
    this.setCamera();
    this.setRendener();

    // TODO:
    // addObjects(this.scene);

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
    // TODO:
    // const { animateObjects } = this.props;

    // TODO:
    // animateObjects();

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

    console.log('render scene');

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
