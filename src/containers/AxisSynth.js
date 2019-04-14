// @flow

import * as React from 'react';
import * as THREE from 'three';

// Components
import { Scene, cube, sphere } from '../modules/Three';

// Types
import type { Acceleration, Mouse, Screen } from '../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
  screen: Screen,
};

export default (props: Props): React.Node => (
  <Scene
    {...props}
    objects={[
      // {
      //   animate: {
      //     position: {
      //       x: (props.mouse.x - (window.innerWidth / 2)) / 30,
      //       y: (props.mouse.y - (window.innerHeight / 2)) / -30,
      //       z: (props.mouse.x - props.mouse.y) / 30,
      //     },
      //   },
      //   object: sphere({
      //     size: 2.5,
      //     color: '#000',
      //   }),
      // },
      // {
      //   animate: {
      //     position: {
      //       x: (props.mouse.x - (window.innerWidth / 2)) / 70,
      //       y: (props.mouse.y - (window.innerHeight / 2)) / -70,
      //       z: (props.mouse.x - props.mouse.y) / 50,
      //     },
      //     rotation: {
      //       x: props.mouse.x / 50,
      //       y: props.mouse.y / 50,
      //       z: 0,
      //     },
      //   },
      //   object: cube({ size: 2 }),
      // },
      {
        animate: {
          position: {
            x: props.mouse.x - (window.innerWidth / 2),
            y: -(props.mouse.y - (window.innerHeight / 2)),
            z: (props.mouse.x - props.mouse.y) / 50,
          },
          rotation: {
            x: props.mouse.x / 20,
            y: props.mouse.y / 20,
            z: 0,
          },
        },
        object: cube(),
      },
    ]}
  >
    {
      ({ scene }) => {
        // scene.background = new THREE.CubeTextureLoader()
          // .setPath('./')
          // .load('1.jpg');
          // .setPath( 'textures/cube/Park3Med/' )
          // .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
        const geometry = new THREE.SphereBufferGeometry(5, 32, 16);
        const textureCube = new THREE.CubeTextureLoader()
          .setPath('./')
          .load(['1.jpg']);
          // .load(['1.jpg']);

        textureCube.mapping = THREE.CubeRefractionMapping;

        const material = new THREE.MeshBasicMaterial({
          // color: 'red',
          color: 0xffffff,
          envMap: textureCube,
          refractionRatio: 0.15,
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = (props.mouse.x - (window.innerWidth / 2)) / 100;
        mesh.position.y = (props.mouse.y - (window.innerHeight / 2)) / -100;
        mesh.position.z = 0;
        // mesh.position.z = Math.random() * 10000 - 5000;
        // mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
        scene.add(mesh);

        // const refractSphereCamera = new THREE.CubeCamera(0.1, 5000, 512);
        // scene.add(refractSphereCamera);

        // var fShader = THREE.FresnelShader;
        
        // var fresnelUniforms = 
        // {
        //   "mRefractionRatio": { type: "f", value: 1.02 },
        //   "mFresnelBias":   { type: "f", value: 0.1 },
        //   "mFresnelPower":  { type: "f", value: 2.0 },
        //   "mFresnelScale":  { type: "f", value: 1.0 },
        //   "tCube":      { type: "t", value: refractSphereCamera.renderTarget } //  textureCube }
        // };
        
        // // create custom material for the shader
        // var customMaterial = new THREE.ShaderMaterial( 
        // {
        //     uniforms:     fresnelUniforms,
        //   vertexShader:   fShader.vertexShader,
        //   fragmentShader: fShader.fragmentShader
        // }   );
        
        // var sphereGeometry = new THREE.SphereGeometry( 100, 64, 32 );
        // this.sphere = new THREE.Mesh( sphereGeometry, customMaterial );
        // sphere.position.set(0, 50, 100);
        // scene.add(sphere);
        
        // refractSphereCamera.position = sphere.position;

        //////////////////////////////

        // const sphereGeom = new THREE.SphereGeometry(50, 32, 16);
        // const mirrorSphereCamera = new THREE.CubeCamera(0.1, 5000, 512);

        // scene.add(mirrorSphereCamera);

        // const mirrorSphereMaterial = new THREE.MeshBasicMaterial({
        //   envMap: mirrorSphereCamera.renderTarget,
        // });

        // const mirrorSphere = new THREE.Mesh(sphereGeom, mirrorSphereMaterial);
        // mirrorSphere.position.set(75, 50, 0);

        // mirrorSphereCamera.position.x = mirrorSphere.position.x;
        // mirrorSphereCamera.position.y = mirrorSphere.position.y;
        // mirrorSphereCamera.position.z = mirrorSphere.position.z;

        // scene.add(mirrorSphere);

        return false;
      }
    }
  </Scene>
);
