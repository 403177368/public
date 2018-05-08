/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/canvas/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(53);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //THREEJS RELATED VARIABLES 

var _Cow = __webpack_require__(54);

var _User = __webpack_require__(56);

var _Block = __webpack_require__(57);

var _ControlLayer = __webpack_require__(58);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  // camera: THREE.PerspectiveCamera;
  // controls: THREE.OrbitControls;
  // keys: Object;
  // things: Array<any>;
  // time: number;

  function Game() {
    _classCallCheck(this, Game);

    // this.scene;
    // this.camera;
    // this.renderer;

    // this.time;

    // this.user;
    this.view = 'third';
    this.player;

    this.keys = {
      'left': false,
      'right': false,
      'space': false
    };
    this.things = [];
    this.init();
  }

  _createClass(Game, [{
    key: 'init',
    value: function init() {
      this.scene = new THREE.Scene();
      this.camera = this.createCamera();
      this.controls = new THREE.OrbitControls(this.camera);
      // this.controls = new THREE.FlyControls(this.camera);
      // console.log(this.controls)
      //   controls.maxPolarAngle = Math.PI * 0.5;
      this.renderer = this.createRenderer();

      var container = document.createElement('div');
      document.body.appendChild(container);
      container.appendChild(this.renderer.domElement);
      this.windowHalfX = this.WIDTH / 2;
      this.windowHalfY = this.HEIGHT / 2;
      this.initEvents();
      this.listenKeys();

      this.createLights();
      this.createFloor();

      this.player = new _Cow.Cow(this, 0, 70, 0);
      this.add(this.player);
      // this.enterFirst();

      this.add(new _Block.Block(200, 50, 200));
      this.add(new _Block.Block(300, 50, 200));
      this.add(new _User.User(this));

      new _ControlLayer.ControlLayer(this);

      this.time = new Date().getTime();
      this.loop();
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var self = this;
      var HEIGHT,
          WIDTH,
          windowHalfX,
          windowHalfY,
          mousePos = { x: 0, y: 0 },
          dist = 0;
      this.mousePos = mousePos;

      var floor,
          lion,
          fan,
          isBlowing = false;
      function onWindowResize() {
        self.HEIGHT = window.innerHeight;
        self.WIDTH = window.innerWidth;
        self.windowHalfX = self.WIDTH / 2;
        self.windowHalfY = self.HEIGHT / 2;
        self.renderer.setSize(self.WIDTH, self.HEIGHT);
        self.camera.aspect = self.WIDTH / self.HEIGHT;
        self.camera.updateProjectionMatrix();
      }

      function handleMouseMove(event) {
        mousePos = { x: event.clientX, y: event.clientY };
      }

      function handleMouseDown(event) {
        isBlowing = true;
      }

      function handleMouseUp(event) {
        isBlowing = false;
      }

      function handleTouchStart(event) {
        if (event.touches.length > 1) {
          event.preventDefault();
          mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
          isBlowing = true;
        }
      }

      function handleTouchEnd(event) {
        mousePos = { x: windowHalfX, y: windowHalfY };
        isBlowing = false;
      }

      function handleTouchMove(event) {
        if (event.touches.length == 1) {
          event.preventDefault();
          mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        }
      }
      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', handleMouseMove, false);
      document.addEventListener('mousedown', handleMouseDown, false);
      document.addEventListener('mouseup', handleMouseUp, false);
      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchend', handleTouchEnd, false);
      document.addEventListener('touchmove', handleTouchMove, false);
    }
  }, {
    key: 'add',
    value: function add(sprite) {
      sprite.game = this;
      if (sprite.threegroup) {
        this.scene.add(sprite.threegroup);
      }
      this.things.push(sprite);
    }
  }, {
    key: 'loop',
    value: function loop() {
      var time = new Date().getTime();
      var dt = (time - this.time) / 1000;
      this.time = time;
      requestAnimationFrame(this.loop.bind(this));

      // var x = this.cow.threegroup.position.x;
      // var y = this.cow.threegroup.position.y;
      // var z = this.cow.threegroup.position.z;

      // var xTarget = (this.mousePos.x - this.windowHalfX);
      // var yTarget = (this.mousePos.y - this.windowHalfY);

      // fan.isBlowing = isBlowing;
      // fan.update(xTarget, yTarget);
      // // if (isBlowing) {
      // //   lion.cool(xTarget, yTarget);
      // // } else {
      // //   lion.look(xTarget, yTarget);
      // // }
      // cow.update();
      // pig.update();
      // requestAnimationFrame(loop);
      this.things.forEach(function (a) {
        if (a.update) {
          a.update(dt);
        }
      });

      // this.controls.target.x = x;
      // this.controls.target.y = y;
      // this.controls.target.z = z;

      // if (this.keys.KeyW) {
      // camera.position.z = z - 800;
      // camera.position.x = x;
      // camera.position.y = y + 800;
      // camera.lookAt(new THREE.Vector3(x, y, z));
      // }
      // camera.lookAt(new THREE.Vector3(x, y, z));
      // camera.position.z = z;
      // camera.position.x = x;
      // camera.position.y = y + 100;
      // camera.lookAt(new THREE.Vector3(x, y, z + 1000));
      if (this.controls) {
        // this.controls.zoom0 = 1;
        // this.controls.target.x = x;
        // this.controls.target.y = y;
        // this.controls.target.z = z;
        this.controls.update();
      }
      this.cameraFollow();
      // camera.lookAt(new THREE.Vector3(x, y, z));
      this.renderer.render(this.scene, this.camera);
    }
    // handleKeys() {
    //   if (this.keys.KeyA === true) {
    //     camera.position.x -= 5;
    //   }
    //   if (this.keys.KeyD === true) {
    //     camera.position.x += 5;
    //   }
    // }

  }, {
    key: 'createCamera',
    value: function createCamera() {
      this.HEIGHT = window.innerHeight;
      this.WIDTH = window.innerWidth;
      this.aspectRatio = this.WIDTH / this.HEIGHT;
      this.fieldOfView = 60;
      this.nearPlane = 1;
      // How far the camera can reach
      this.farPlane = 10000;
      var camera = new THREE.PerspectiveCamera(this.fieldOfView, this.aspectRatio, this.nearPlane, this.farPlane);
      camera.position.x = 0;
      camera.position.z = -1000;
      camera.position.y = 1000;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      return camera;
    }
  }, {
    key: 'cameraFollow',
    value: function cameraFollow() {
      var x = this.player.threegroup.position.x;
      var y = this.player.threegroup.position.y;
      var z = this.player.threegroup.position.z;
      if (this.view === 'third') {
        this.camera.position.x = x;
        this.camera.position.y = y + 1000;
        this.camera.position.z = z - 1000;
        this.camera.lookAt(new THREE.Vector3(x, y, z));
      } else {
        this.camera.position.x = x;
        this.camera.position.y = y + 100;
        this.camera.position.z = z - 100;
        this.camera.lookAt(new THREE.Vector3(x, (y + 10000) * this.player.threegroup.rotation.y, z));
      }
    }
  }, {
    key: 'createRenderer',
    value: function createRenderer() {
      var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor('#ebe5e7');
      renderer.setSize(this.WIDTH, this.HEIGHT);
      renderer.shadowMap.enabled = true;
      return renderer;
    }
  }, {
    key: 'createLights',
    value: function createLights() {
      var daylight = new THREE.AmbientLight(0xffffff, .9);
      var light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);

      var shadowLight = new THREE.DirectionalLight(0xffffff, 1.5);
      shadowLight.position.set(0, 10000, 0);
      shadowLight.castShadow = true;

      // var shadow = new THREE.DirectionalLightShadow(shadowLight);

      // shadow.shadowDarkness = .2;

      var backLight = new THREE.DirectionalLight(0xffffff, .4);
      backLight.position.set(-100, 200, 50);
      backLight.shadowDarkness = .1;
      backLight.castShadow = true;

      var pl = new THREE.PointLight(0xffffff, 2, 10000);
      pl.position.set(0, 200, 0);
      // scene.add(backLight);

      // scene.add(backLight);
      // scene.add(light);
      this.scene.add(daylight);
    }
  }, {
    key: 'createFloor',
    value: function createFloor() {
      var floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(4000, 2000), new THREE.MeshLambertMaterial({ color: '#00AA72' }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = 0;
      floor.receiveShadow = true;

      var fl = new THREE.PlaneGeometry(2000, 2000);
      fl.rotateX(-Math.PI / 2);
      var pl = new THREE.ShadowMaterial();
      pl.opacity = 0.2;
      var plane = new THREE.Mesh(fl, pl);
      plane.position.y = 0;
      plane.receiveShadow = true;

      var helper = new THREE.GridHelper(2000, 50);
      helper.position.y = 1;
      this.scene.add(helper);

      this.scene.add(floor);
    }
  }, {
    key: 'listenKeys',
    value: function listenKeys() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        _this.keys[e.code] = true;
      });
      document.addEventListener('keyup', function (e) {
        _this.keys[e.code] = false;
      });
    }
  }]);

  return Game;
}();

new Game();

// new User();

//INIT THREE JS, SCREEN AND MOUSE EVENTS

// function init() {
//   scene = new THREE.Scene();
//   HEIGHT = window.innerHeight;
//   WIDTH = window.innerWidth;
//   aspectRatio = WIDTH / HEIGHT;
//   fieldOfView = 60;
//   nearPlane = 1;
//   farPlane = 2000;
//   camera = new THREE.PerspectiveCamera(
//     fieldOfView,
//     aspectRatio,
//     nearPlane,
//     farPlane);
//   camera.position.z = 800;
//   camera.position.y = 0;
//   camera.lookAt(new THREE.Vector3(0, 0, 0));

//   var controls = new THREE.OrbitControls(camera);
//   //   controls.maxPolarAngle = Math.PI * 0.5;

//   renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setClearColor('#ebe5e7');
//   renderer.setSize(WIDTH, HEIGHT);
//   renderer.shadowMap.enabled = true;

//   container = document.createElement('div');
//   document.body.appendChild(container)
//   container.appendChild(renderer.domElement);
//   windowHalfX = WIDTH / 2;
//   windowHalfY = HEIGHT / 2;
//   window.addEventListener('resize', onWindowResize, false);
//   document.addEventListener('mousemove', handleMouseMove, false);
//   document.addEventListener('mousedown', handleMouseDown, false);
//   document.addEventListener('mouseup', handleMouseUp, false);
//   document.addEventListener('touchstart', handleTouchStart, false);
//   document.addEventListener('touchend', handleTouchEnd, false);
//   document.addEventListener('touchmove', handleTouchMove, false);

//   // controls = new THREE.OrbitControls( camera, renderer.domElement);

// }

// function onWindowResize() {
//   HEIGHT = window.innerHeight;
//   WIDTH = window.innerWidth;
//   windowHalfX = WIDTH / 2;
//   windowHalfY = HEIGHT / 2;
//   renderer.setSize(WIDTH, HEIGHT);
//   camera.aspect = WIDTH / HEIGHT;
//   camera.updateProjectionMatrix();
// }

// function handleMouseMove(event) {
//   mousePos = { x: event.clientX, y: event.clientY };
// }

// function handleMouseDown(event) {
//   isBlowing = true;
// }

// function handleMouseUp(event) {
//   isBlowing = false;
// }

// function handleTouchStart(event) {
//   if (event.touches.length > 1) {
//     event.preventDefault();
//     mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
//     isBlowing = true;
//   }
// }

// function handleTouchEnd(event) {
//   mousePos = { x: windowHalfX, y: windowHalfY };
//   isBlowing = false;
// }

// function handleTouchMove(event) {
//   if (event.touches.length == 1) {
//     event.preventDefault();
//     mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
//   }
// }

// function createLights() {
//   light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)

//   shadowLight = new THREE.DirectionalLight(0xffffff, .8);
//   shadowLight.position.set(200, 200, 200);
//   shadowLight.castShadow = true;
//   var shadow = new THREE.DirectionalLightShadow(shadowLight);
//   shadow.shadowDarkness = .2;

//   backLight = new THREE.DirectionalLight(0xffffff, .4);
//   backLight.position.set(-100, 200, 50);
//   backLight.shadowDarkness = .1;
//   backLight.castShadow = true;

//   scene.add(backLight);
//   scene.add(light);
//   scene.add(shadowLight);
// }

// function createFloor() {
//   floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 500), new THREE.MeshBasicMaterial({ color: 'green' }));
//   floor.rotation.x = -Math.PI / 2;
//   floor.position.y = -100;
//   floor.receiveShadow = true;
//   scene.add(floor);
// }


// function loop() {
//   render();
//   var xTarget = (mousePos.x - windowHalfX);
//   var yTarget = (mousePos.y - windowHalfY);

//   fan.isBlowing = isBlowing;
//   fan.update(xTarget, yTarget);
//   // if (isBlowing) {
//   //   lion.cool(xTarget, yTarget);
//   // } else {
//   //   lion.look(xTarget, yTarget);
//   // }
//   cow.update();
//   pig.update();
//   requestAnimationFrame(loop);
// }

// function render() {
//   if (controls) controls.update();
//   renderer.render(scene, camera);
// }

// document.addEventListener('click', () => {
//   cow.walk();
// })

// init();
// createLights();
// createFloor();
// // createLion();
// import { Fan } from './Fan.js';
// createFan();

// import { Pig } from './Pig.js';
// import { Lion } from './Lion.js';

// function createLion() {
//   lion = new Lion();
//   scene.add(lion.threegroup);
// }

// function createFan() {
//   fan = new Fan();
//   fan.threegroup.position.z = 350;
//   scene.add(fan.threegroup);
// }

// var pig = new Pig();
// scene.add(pig.head);

// import { Cow } from './Cow.js';
// var cow = new Cow(0, 0, 0);
// scene.add(cow.threegroup);
// var cow1 = new Cow(100, 0, 120);
// scene.add(cow1.threegroup);

// import { Block } from './Block.js';
// console.log(new Block({
//   scene,
//   x: 200,
//   y: 0,
//   z: 200
// }))
// loop();


function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

// function rule3(v, vmin, vmax, tmin, tmax) {
//   var nv = Math.max(Math.min(v, vmax), vmin);
//   var dv = vmax - vmin;
//   var pc = (nv - vmin) / dv;
//   var dt = tmax - tmin;
//   var tv = tmin + (pc * dt);
//   return tv;

// }

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cow = undefined;

var _Sprite2 = __webpack_require__(55);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import THREE from 'three';


var Cow = function (_Sprite) {
  _inherits(Cow, _Sprite);

  // game;
  // angleLegs;
  // speed: number;
  // state;
  // threegroup: THREE.Group;
  // whiteMat;
  // blackMat;
  // greyMat;
  // pinkMat;
  // greenMat;
  // orangeMat;
  // yellowMat;
  // wireMat;
  // body;
  // spot1;
  // spot2;
  // spot3;
  // spot4;
  // tail;
  function Cow(game, x, y, z, options) {
    _classCallCheck(this, Cow);

    var _this = _possibleConstructorReturn(this, (Cow.__proto__ || Object.getPrototypeOf(Cow)).call(this));

    _this.game = game;
    _this.angleLegs = 0;
    _this.speed = 600;
    _this.state = {};

    _this.threegroup = new THREE.Group();
    _this.whiteMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading
    });

    _this.blackMat = new THREE.MeshLambertMaterial({
      color: 0x000000,
      shading: THREE.FlatShading
    });

    _this.greyMat = new THREE.MeshLambertMaterial({
      color: 0x999999,
      shading: THREE.FlatShading
    });

    _this.pinkMat = new THREE.MeshLambertMaterial({
      color: 0xfaa288,
      shading: THREE.FlatShading
    });

    _this.greenMat = new THREE.MeshLambertMaterial({
      color: 0x6ec098,
      shading: THREE.FlatShading
    });

    _this.orangeMat = new THREE.MeshLambertMaterial({
      color: 0xef704f,
      shading: THREE.FlatShading
    });

    _this.yellowMat = new THREE.MeshLambertMaterial({
      color: 0xd7a25e,
      shading: THREE.FlatShading
    });

    _this.wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1,
      fog: true
    });

    var bodyGeom = new THREE.BoxGeometry(100, 100, 100);
    var spotGeom = new THREE.BoxGeometry(20, 20, 20);
    var tailGeom = new THREE.BoxGeometry(10, 10, 30);
    tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -20));
    var faceGeom = new THREE.BoxGeometry(100, 100, 100);
    var ringGeom = new THREE.TorusGeometry(200, 3, 4, 4);
    var ringGeom2 = new THREE.TorusGeometry(50, 3, 4, 4);

    var wireGeom = new THREE.Geometry();
    wireGeom.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 2000, 0));

    _this.body = new THREE.Mesh(bodyGeom, _this.whiteMat);

    // SPOTS

    _this.spot1 = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.spot1.position.y = 41;
    _this.spot1.position.x = 41;
    _this.spot1.position.z = 25;

    _this.spot2 = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.spot2.scale.set(2, 2, 2);
    _this.spot2.position.y = 31;
    _this.spot2.position.x = -31;
    _this.spot2.position.z = -31;

    _this.spot3 = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.spot3.scale.set(2.5, 2.5, 2.5);
    _this.spot3.position.y = -26;
    _this.spot3.position.x = 26;
    _this.spot3.position.z = 26;

    _this.spot4 = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.spot4.position.y = -41;
    _this.spot4.position.x = 41;
    _this.spot4.position.z = -41;

    // TAIL

    _this.tail = new THREE.Mesh(tailGeom, _this.whiteMat);
    _this.tail.position.y = 45;
    _this.tail.position.z = -60;

    // FACE

    _this.face = new THREE.Mesh(faceGeom, _this.pinkMat);
    _this.face.position.z = 100;

    // NOSTRILS

    _this.nostril1 = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.nostril1.scale.set(.5, .5, 1);
    _this.nostril2 = _this.nostril1.clone();
    _this.nostril1.position.z = _this.nostril2.position.z = 141;
    _this.nostril1.position.y = _this.nostril2.position.y = 35;
    _this.nostril1.position.x = -35;
    _this.nostril2.position.x = 35;

    // EYES

    _this.leftEye = new THREE.Mesh(spotGeom, _this.whiteMat);
    _this.leftEye.scale.set(1, 2.5, 2.5);
    _this.leftEye.position.x = 41;
    _this.leftEye.position.y = 26;
    _this.leftEye.position.z = 100;

    _this.rightEye = _this.leftEye.clone();
    _this.rightEye.position.x = -41;

    // IRIS

    _this.leftIris = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.leftIris.scale.set(.5, .5, .5);
    _this.leftIris.position.x = 50;
    _this.leftIris.position.y = 26;
    _this.leftIris.position.z = 110;

    _this.rightIris = _this.leftIris.clone();
    _this.leftIris.position.x = -50;

    // EARS

    _this.leftEar = new THREE.Mesh(spotGeom, _this.pinkMat);
    _this.leftEar.position.x = 60;
    _this.leftEar.position.y = 40;
    _this.leftEar.position.z = 60;

    _this.rightEar = _this.leftEar.clone();
    _this.leftEar.position.x = -60;

    // HORNS
    _this.leftHorn = new THREE.Mesh(spotGeom, _this.greyMat);
    _this.leftHorn.position.x = 25;
    _this.leftHorn.position.y = 60;
    _this.leftHorn.position.z = 60;

    _this.rightHorn = _this.leftHorn.clone();
    _this.rightHorn.position.x = -25;

    // MOUTH
    _this.mouth = new THREE.Mesh(spotGeom, _this.blackMat);
    _this.mouth.scale.set(1, 1, 1);
    _this.mouth.position.y = -40;
    _this.mouth.position.z = 141;

    // LIPS
    _this.lips = new THREE.Mesh(spotGeom, _this.pinkMat);
    _this.lips.scale.set(2, .5, 1);
    _this.lips.position.y = -55;
    _this.lips.position.z = 140;

    if (options && options.rings) {
      // RINGS
      _this.ring1 = new THREE.Mesh(ringGeom, _this.yellowMat);
      _this.ring1.position.y = 0;
      _this.ring1.position.z = 0;
      _this.ring1.rotation.x = -Math.PI / 8;

      _this.ring2 = new THREE.Mesh(ringGeom, _this.orangeMat);
      _this.ring2.scale.set(1.3, 1.3, 1.3);
      _this.ring2.position.y = 0;
      _this.ring2.position.z = 25;
      _this.ring2.rotation.x = -Math.PI / 8;

      _this.ring3 = new THREE.Mesh(ringGeom, _this.greenMat);
      _this.ring3.position.y = 0;
      _this.ring3.position.z = 50;
      _this.ring3.rotation.x = -Math.PI / 8;

      _this.ring4 = new THREE.Mesh(ringGeom2, _this.yellowMat);
      _this.ring4.position.y = 80;
      _this.ring4.position.z = 100;
      _this.ring4.rotation.x = -Math.PI / 2;

      _this.threegroup.add(_this.ring1);
      _this.threegroup.add(_this.ring2);
      _this.threegroup.add(_this.ring3);
      _this.threegroup.add(_this.ring4);
    }

    // LEGS

    _this.leg1 = new THREE.Mesh(spotGeom, _this.pinkMat);
    _this.leg1.position.x = -40;
    _this.leg1.position.y = -60;
    _this.leg1.position.z = -40;

    _this.leg2 = _this.leg1.clone();
    _this.leg2.position.x = 40;

    _this.leg3 = _this.leg1.clone();
    _this.leg3.position.z = 40;

    _this.leg4 = _this.leg3.clone();
    _this.leg4.position.x = 40;

    // UDDER
    _this.udder = new THREE.Mesh(spotGeom, _this.pinkMat);
    _this.udder.scale.set(2, 1, 2);
    _this.udder.position.y = -55;
    _this.udder.position.z = -10;

    // WIRE
    _this.wire = new THREE.Line(wireGeom, _this.wireMat);
    _this.wire.position.z = 50;

    _this.threegroup.add(_this.body);
    _this.threegroup.add(_this.spot1);
    _this.threegroup.add(_this.spot2);
    _this.threegroup.add(_this.spot3);
    _this.threegroup.add(_this.spot4);
    _this.threegroup.add(_this.tail);
    _this.threegroup.add(_this.face);
    _this.threegroup.add(_this.nostril1);
    _this.threegroup.add(_this.nostril2);
    _this.threegroup.add(_this.leftEye);
    _this.threegroup.add(_this.rightEye);
    _this.threegroup.add(_this.leftIris);
    _this.threegroup.add(_this.rightIris);
    _this.threegroup.add(_this.leftEar);
    _this.threegroup.add(_this.rightEar);
    _this.threegroup.add(_this.leftHorn);
    _this.threegroup.add(_this.rightHorn);
    _this.threegroup.add(_this.mouth);
    _this.threegroup.add(_this.lips);

    _this.threegroup.add(_this.leg1);
    _this.threegroup.add(_this.leg2);
    _this.threegroup.add(_this.leg3);
    _this.threegroup.add(_this.leg4);
    _this.threegroup.add(_this.udder);
    // this.threegroup.add(this.wire);

    _this.threegroup.traverse(function (object) {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    Object.assign(_this.threegroup.position, {
      x: x,
      y: y,
      z: z
    });

    // this.threegroup.rotation.y = Math.PI/2;

    setTimeout(function () {
      _this.walk();
    }, 0);
    // setTimeout(() => {
    //   this.turn();
    // }, 4000)
    return _this;
  }

  return Cow;
}(_Sprite2.Sprite);

Cow.prototype.speed = 1;

Cow.prototype.update = function (dt) {
  var game = this.game;
  var v = this.speed;
  var angle = this.threegroup.rotation.y;
  var ds = dt * v;

  if (game.keys.KeyA === true) {
    this.threegroup.rotation.y += Math.PI / 45;
  }
  if (game.keys.KeyD === true) {
    this.threegroup.rotation.y -= Math.PI / 45;
  }
  if (game.keys.KeyW === true) {
    this.threegroup.position.x += ds * Math.sin(this.threegroup.rotation.y);
    this.threegroup.position.z += ds * Math.cos(this.threegroup.rotation.y);
  }
  if (game.keys.KeyS === true) {
    this.threegroup.position.x -= ds * Math.sin(this.threegroup.rotation.y);
    this.threegroup.position.z -= ds * Math.cos(this.threegroup.rotation.y);
  }
  if (game.keys.Space === true) {
    if (this.jumping === 'false') {
      this.jumping = 'upward';
    }
  }
  this.jump(dt);

  // this.threegroup.rotation.y += 0.01;
  if (this.rings1) {
    this.ring1.rotation.z += .005;
    this.ring2.rotation.z -= .005;
    this.ring3.rotation.z += .01;
    this.ring4.rotation.z += .1;
  }

  for (var key in this.state) {
    if (this.state[key] === true) {
      this[key]();
    }
  }
  // this.updateRotate();
  // this.updateForward();
};

Cow.prototype.name = 'cow';

Cow.prototype.idle = function () {};

Cow.prototype.updateWalk = function () {
  this.angleLegs += .2;
  var sin = Math.sin(this.angleLegs);
  var cos = Math.cos(this.angleLegs);

  if (this.game.keys.KeyW === true || this.game.keys.KeyS === true || this.game.keys.KeyA === true || this.game.keys.KeyD === true) {
    this.leg1.position.z = -40 + cos * 10;
    this.leg2.position.z = -40 + sin * 10;
    this.leg3.position.z = 40 + sin * 10;
    this.leg4.position.z = 40 + cos * 10;
  } else {
    this.leg1.position.z = -40;
    this.leg2.position.z = -40;
    this.leg3.position.z = 40;
    this.leg4.position.z = 40;
  }

  // this.threegroup.position.y = cos*10;

  // this.threegroup.position.x += this.speed * Math.sin(this.threegroup.rotation.y);
  // this.threegroup.position.y += this.speed * Math.cos(this.threegroup.rotation.y);
  // this.threegroup.position.z += 1;
  // this.threegroup.position.z += 0.5;

  this.leftEar.position.y = this.rightEar.position.y = 35 + Math.sin(this.angleLegs) * 5;
  this.mouth.position.y = -40 + sin * 5;
  this.mouth.scale.set(1, .5 + Math.abs(cos) * .5, 1);
  this.lips.position.y = -50 + sin * 5;
  this.tail.rotation.x = sin * Math.PI / 3;
  this.udder.position.y = -55 + sin * 10;
  if (this.ring4) {
    this.ring4.position.y = 80 + sin * 10;
  }
};

Cow.prototype.walk = function () {
  this.state.updateWalk = true;
};
Cow.prototype.turn = function () {
  this.threegroup.rotation.y = Math.PI - this.threegroup.rotation.y;
};

Cow.prototype.stop = function () {};

exports.Cow = Cow;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
  function Sprite() {
    _classCallCheck(this, Sprite);

    this.init();
  }

  _createClass(Sprite, [{
    key: 'init',
    value: function init() {
      // this.speed = 1500;
      this.jumpSpeed = 400;
      this.jumping = 'false';
      this.jumpingY = 0;
    }
  }, {
    key: 'jump',
    value: function jump(dt) {
      var dy = this.jumpSpeed * dt;
      if (this.jumping === 'upward') {
        if (this.jumpingY < 100) {
          this.jumpingY += dy;
          this.threegroup.position.y += dy;
        } else {
          this.jumping = 'downward';
        }
      } else if (this.jumping === 'downward') {
        if (this.jumpingY > 0) {
          this.jumpingY -= dy;
          this.threegroup.position.y -= dy;
        } else {
          this.jumpingY = 0;
          this.threegroup.position.y = 70;
          this.jumping = 'false';
          // remove();
        }
      }
    }
  }, {
    key: 'updateRotate',
    value: function updateRotate() {
      this.threegroup.rotation.y += 0.05;
    }
  }, {
    key: 'updateForward',
    value: function updateForward() {
      this.threegroup.position.x += Math.sin(this.threegroup.rotation.y) * this.speed;
      this.threegroup.position.z += Math.cos(this.threegroup.rotation.y) * this.speed;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(game) {
    _classCallCheck(this, User);

    this.game = game;

    this.health = 10;
    this.inventory = [];

    this.speed = 150;
    this.jumping = 'false';
    this.jumpingY = 0;
    this.jumpSpeed = 4;
  }

  _createClass(User, [{
    key: 'update',
    value: function update(dt) {
      var game = this.game;
      var v = this.speed;
      var camera = this.game.camera;
      // if (game.keys.KeyA === true) {
      //   camera.position.x -= dt*v;
      // }
      // if (game.keys.KeyD === true) {
      //   camera.position.x += dt*v;
      // }
      // if (game.keys.KeyW === true) {
      //   camera.position.z -= dt*v;
      // }
      // if (game.keys.KeyS === true) {
      //   camera.position.z += dt*v;
      // }
      // if (game.keys.Space === true) {
      //   if (this.jumping === 'false') {
      //     this.jumping = 'upward';
      //   }
      // }
      // if (this.jumping !== 'false') {
      //   this.jump();
      // }
    }
  }, {
    key: 'jump',
    value: function jump() {
      var camera = this.game.camera;
      if (this.jumping === 'upward') {
        if (this.jumpingY < 80) {
          this.jumpingY += this.jumpSpeed;
          camera.position.y += this.jumpSpeed;
        } else {
          this.jumping = 'downward';
        }
      } else {
        if (this.jumpingY > 0) {
          this.jumpingY -= this.jumpSpeed;
          camera.position.y -= this.jumpSpeed;
        } else {
          this.jumping = 'false';
          // remove();
        }
      }
    }
  }]);

  return User;
}();

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = exports.Block = function () {
  function Block(x, y, z) {
    _classCallCheck(this, Block);

    this.yellowMat = new THREE.MeshLambertMaterial({
      color: 0xd7a25e,
      shading: THREE.FlatShading
    });
    var bodyGeom = new THREE.BoxGeometry(100, 100, 100);
    this.threegroup = new THREE.Mesh(bodyGeom, this.yellowMat);
    Object.assign(this.threegroup.position, {
      x: x,
      y: y,
      z: z
    });
  }

  _createClass(Block, [{
    key: "die",
    value: function die() {}
  }]);

  return Block;
}();

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControlLayer = exports.ControlLayer = function ControlLayer(game) {
  _classCallCheck(this, ControlLayer);

  var pad = document.createElement('div');
  pad.style.cssText += '\n      position: fixed; left: 0; bottom: 0; width: 120px; height: 120px;\n    ';

  document.body.appendChild(pad);

  var _loop = function _loop(i) {
    var btn = document.createElement('div');
    btn.style.cssText += '\n        width: 30%; height: 30%; background: orange;\n        float: left;\n        border-radius: 1000px;\n      ';
    btn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      switch (i) {
        case 0:
          game.player.threegroup.rotation.y = Math.PI / 4;
          game.keys.KeyW = true;
          break;
        case 1:
          game.player.threegroup.rotation.y = 0;
          game.keys.KeyW = true;
          break;
        case 2:
          game.player.threegroup.rotation.y = -Math.PI / 4;
          game.keys.KeyW = true;
          break;
        case 3:
          game.player.threegroup.rotation.y = Math.PI / 2;
          game.keys.KeyW = true;
          break;
        case 4:
          // game.keys.Space = true;
          break;
        case 5:
          game.player.threegroup.rotation.y = -Math.PI / 2;
          game.keys.KeyW = true;
          break;
        case 6:
          game.player.threegroup.rotation.y = Math.PI / 4 * 3;
          game.keys.KeyW = true;
          break;
        case 7:
          game.player.threegroup.rotation.y = Math.PI;
          game.keys.KeyW = true;
          break;
        case 8:
          game.player.threegroup.rotation.y = -Math.PI / 4 * 3;
          game.keys.KeyW = true;
          break;
      }
    });
    btn.addEventListener('touchend', function () {
      game.keys.KeyW = false;
      game.keys.KeyS = false;
      switch (i) {
        case 0:
          game.keys.KeyW = false;
          break;
        case 1:
          game.keys.KeyW = false;
          break;
      }
    });
    pad.appendChild(btn);
  };

  for (var i = 0; i < 9; i++) {
    _loop(i);
  }

  // up.addEventListener('touchstart', () => {
  //   game.keys.KeyW = true;
  // });
  // up.addEventListener('touchend', () => {
  //   game.keys.KeyW = false;
  // });
};

/***/ })

/******/ });