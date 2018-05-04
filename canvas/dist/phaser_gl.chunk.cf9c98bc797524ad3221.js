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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _phaser = __webpack_require__(43);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _phaser2.default.Game(800, 600, _phaser2.default.AUTO, 'phaser-example', {
  create: create,
  update: update
});

var filter;
var sprite;

function create() {
  //  From http://glslsandbox.com/e#20112.1

  var fragmentSrc = __webpack_require__(44);

  filter = new _phaser2.default.Filter(game, null, fragmentSrc);
  filter.setResolution(800, 600);

  sprite = game.add.sprite();
  sprite.width = 800;
  sprite.height = 600;

  sprite.filters = [filter];
}

function update() {
  filter.update();
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = window.Phaser;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nuniform float     time;\nuniform vec2      resolution;\nuniform vec2      mouse;\n\n// Yuldashev Mahmud Effect took from shaderToy mahmud9935@gmail.com\n\nfloat snoise(vec3 uv, float res)\n{\n  const vec3 s = vec3(1e0, 1e2, 1e3);\n\n  uv *= res;\n\n  vec3 uv0 = floor(mod(uv, res))*s;\n  vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;\n\n  vec3 f = fract(uv); f = f*f*(3.0-2.0*f);\n\n  vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,\n  uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);\n\n  vec4 r = fract(sin(v*1e-1)*1e3);\n  float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n  r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);\n  float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n  return mix(r0, r1, f.z)*2.-1.;\n}\n\nvoid main( void ) {\n\n  vec2 p = -.5 + gl_FragCoord.xy / resolution.xy;\n  p.x *= resolution.x/resolution.y;\n\n  float color = 3.0 - (3.*length(2.*p));\n\n  vec3 coord = vec3(atan(p.x,p.y)/6.2832+.5, length(p)*.4, .5);\n\n  for(int i = 1; i <= 7; i++)\n  {\n    float power = pow(2.0, float(i));\n    color += (1.5 / power) * snoise(coord + vec3(0.,-time*.05, time*.01), power*16.);\n  }\n\n  gl_FragColor = vec4( color, pow(max(color,0.),2.)*0.4, pow(max(color,0.),3.)*0.15 , 1.0);\n\n}\n"

/***/ })

/******/ });