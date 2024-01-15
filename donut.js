import * as THREE from "./node_modules/three/build/three.module.js";

const main = () => {
  //const canvas = document.querySelector("#cv");
  //const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  //ens fa falta -> scene,camera,render, geometria, material i animar la geometria.
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const aspect = 2;
  const fov = 60;
  const near = 0.1;
  const far = 200;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  const radius = 5;
  const tubeRadius = 3;
  const radialSegments = 100;
  const tubularSegments = 100;
  const geometry = new THREE.TorusGeometry(
    radius,
    tubeRadius,
    radialSegments,
    tubularSegments
  );
  const material = new THREE.MeshNormalMaterial();
  const donut = new THREE.Mesh(geometry, material);
  camera.position.z = 30;
  scene.add(donut);
  donutAnimation(donut, renderer, scene, camera);
};
const donutAnimation = (donut, renderer, scene, camera) => {
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.04;
  renderer.render(scene, camera);
  requestAnimationFrame(() => donutAnimation(donut, renderer, scene, camera));
};
window.onload = main;
