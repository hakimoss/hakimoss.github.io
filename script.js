/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 4);
    
    if (random_box_math === 0){
        window.location.replace("https://hakimoss.github.io/random_image/index.html")
    } else if (random_box_math === 1) {
        window.location.replace("https://hakimoss.github.io/random_color/index.html")
    } else if (random_box_math === 2){
        window.location.replace("https://hakimoss.github.io/random_position/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_dice/index.html")
    }
}


/// obj 3d


import { GLTFLoader } from "./GLTFLoader.js";

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    5000,
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/1.4, window.innerHeight/1.4);
document.body.appendChild(renderer.domElement);
console.log(renderer.domElement)


var loader = new GLTFLoader();

var obj;
loader.load("scene.gltf", function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xffffff)
var light = new THREE.HemisphereLight(0xffffff, 0x000000, 3.7);
scene.add(light);
camera.position.set(-5, 15, 15);


camera.lookAt(0, 0, 0)
function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

camera.filmOffset
animate();
