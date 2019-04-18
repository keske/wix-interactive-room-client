// @flow

import * as R from 'ramda';
import * as React from 'react';
import * as THREE from 'three';

type Props = {
  duration?: number,
  text?: string,
};

export default ({
  duration = 20000,
  text = 'Ticker',
}: Props): React.Node => {
  let container, camera, scene, renderer, effect;

  var spheres = [];

  // init();
  // animate();

  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100000);

  camera.position.z = 3200;

  scene = new THREE.Scene();

  scene.background = new THREE.CubeTextureLoader()
    .setPath( 'textures/cube/Park3Med/' )
    .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );

  var geometry = new THREE.SphereBufferGeometry( 100, 32, 16 );

  var textureCube = new THREE.CubeTextureLoader()
    .setPath( 'textures/cube/Park3Med/' )
    .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
  textureCube.mapping = THREE.CubeRefractionMapping;

  var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube, refractionRatio: 0.95 } );

  for ( var i = 0; i < 500; i ++ ) {

    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = Math.random() * 10000 - 5000;
    mesh.position.y = Math.random() * 10000 - 5000;
    mesh.position.z = Math.random() * 10000 - 5000;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
    scene.add( mesh );

    spheres.push( mesh );

  }

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );

    return false;
};
