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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = Sprite;
exports.canMove = canMove;
function Sprite() {
  this.rotating = false;
  this.fn = null;
}

Sprite.prototype = {
  mount: function mount() {
    if (this.container) {
      container.addChild(this.sprite);
    } else {
      this.app.stage.addChild(this.sprite);
    }
  },
  toggleRotate: function toggleRotate() {
    if (this.rotating === false) {
      this.rotating = true;
      this.fn = this.rotateFrame.bind(this);
      this.app.ticker.add(this.fn);
    } else {
      this.rotating = false;
      this.app.ticker.remove(this.fn);
    }
  },
  rotateFrame: function rotateFrame() {
    this.sprite.rotation += 0.1;
  },
  fadeOut: function fadeOut() {
    function fade() {
      this.sprite.y -= 1;
      this.sprite.alpha -= 0.05;
      if (this.sprite.alpha <= 0.5) {
        this.sprite.alpha = 0.5;
        this.app.ticker.remove(this._fadeFn);
      }
    }
    this._fadeFn = fade.bind(this);
    this.app.ticker.add(this._fadeFn);
  },
  dash: function dash() {
    var y = 0;
    var speed = 1;
    var state = 'backward';
    function _dash() {
      if (state === 'backward') {
        y += speed;
        this.sprite.y += speed;
        if (y === 20) {
          state = 'forward';
          speed = 2;
        };
      } else {
        y -= speed;
        this.sprite.y -= speed;
        speed++;
        if (this.sprite.y <= 0) {
          this.app.ticker.remove(_dashFrame);
        }
      }
    }
    var _dashFrame = _dash.bind(this);
    this.app.ticker.add(_dashFrame);
  },
  hide: function hide() {
    this.sprite.visible = false;
  },
  destroy: function destroy() {
    this.sprite.destroy();
  },
  blink: function blink() {},
  canMove: function canMove() {
    var _this = this;

    document.addEventListener('keydown', function (e) {
      // console.log(e)
      switch (e.code) {
        case 'ArrowLeft':
          _this.sprite.x -= 15;
          break;
        case 'ArrowRight':
          _this.sprite.x += 15;
          break;
        case 'ArrowUp':
          _this.sprite.y -= 15;
          break;
        case 'ArrowDown':
          _this.sprite.y += 15;
          break;
      }
      if (_this.sprite.x > _this.app.renderer.width) {
        _this.sprite.x = _this.app.renderer.width;
      }
      if (_this.sprite.x < 0) {
        _this.sprite.x = 0;
      }
      if (_this.sprite.y > _this.app.renderer.height) {
        _this.sprite.y = _this.app.renderer.height;
      }
    });
  },
  canFire: function canFire() {
    var _this2 = this;

    document.addEventListener('keydown', function (e) {
      switch (e.code) {
        case 'Space':
          _this2.fire();
          break;
      }
    });
  }
};

function canMove(app, sprite) {
  document.addEventListener('keydown', function (e) {
    // console.log(e)
    switch (e.code) {
      case 'ArrowLeft':
        sprite.x -= 15;
        break;
      case 'ArrowRight':
        sprite.x += 15;
        break;
      case 'ArrowUp':
        sprite.y -= 15;
        break;
      case 'ArrowDown':
        sprite.y += 15;
        break;
    }
    if (sprite.x > app.renderer.width) {
      sprite.x = app.renderer.width;
    }
    if (sprite.x < 0) {
      sprite.x = 0;
    }
    if (sprite.y > app.renderer.height) {
      sprite.y = app.renderer.height;
    }
  });
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Missile = undefined;

var _Sprite2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Missile = exports.Missile = function (_Sprite) {
  _inherits(Missile, _Sprite);

  function Missile(options) {
    _classCallCheck(this, Missile);

    var _this = _possibleConstructorReturn(this, (Missile.__proto__ || Object.getPrototypeOf(Missile)).call(this));

    _this.texture = PIXI.Texture.fromImage('/img/pixi/missile.png');
    _this.sprite = new PIXI.Sprite(_this.texture);
    var missile = _this.sprite;
    missile.anchor.set(0.5);

    Object.assign(_this, options);
    missile.scale.x = 3;
    missile.scale.y = 3;
    missile.x = _this.x;
    missile.y = _this.y;
    missile.rotation -= 0.8;
    _this.mount();
    _this.dash();
    return _this;
  }

  return Missile;
}(_Sprite2.Sprite);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createPlane = __webpack_require__(44);

var _Plane = __webpack_require__(45);

var _createText = __webpack_require__(46);

var _AnimatedPlane = __webpack_require__(47);

var app = new PIXI.Application(500, 800, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
var texture = PIXI.Texture.fromImage('/img/vue/plane.png');

// Create a 5x5 grid of bunnies
for (var i = 0; i < 1; i++) {
  var bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = i % 5 * 40;
  bunny.y = Math.floor(i / 5) * 40;
  container.addChild(bunny);
}

// move container to the center
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

new _Plane.Plane({
  app: app,
  x: 100,
  y: 700
}).mount();

// Listen for animate update
app.ticker.add(function (delta) {
  // rotate the container!
  // use delta to create frame-independent tranform
  // container.rotation -= 0.01 * delta;
});

var containerText = new PIXI.Container();
containerText.width = 500;
containerText.height = 500;
containerText.backgroundColor = 'red';
app.stage.addChild(containerText);

containerText.addChild((0, _createText.createText)(app));
// app.ticker.add(()=>{
//   containerText.x += 0.1;
// })

// if (module.hot) {
//   module.hot.accept();
// }

new _AnimatedPlane.AnimatedPlane({
  app: app,
  x: app.renderer.width / 2,
  y: app.renderer.height - 200
});

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlane = createPlane;
// import {Sprite} from './Sprite.js';

function Bullet() {}

function createPlane(app, x, y) {
  var hp = 1000;
  var speed = 5;

  var texture = PIXI.Texture.fromImage('/img/pixi/shuttle.png');
  var plane = new PIXI.Sprite(texture);
  plane.anchor.set(0.5);
  plane.scale.x = 0.2;
  plane.scale.y = 0.2;
  plane.x = x;
  plane.y = y;

  // Opt-in to interactivity
  plane.interactive = true;

  // Shows hand cursor
  plane.buttonMode = true;

  // Pointers normalize touch and mouse
  plane.on('pointerdown', function () {
    // forward();
    // plane.scale.x *= 1.25;
    // plane.scale.y *= 1.25;
  });
  canMove(app, plane);

  app.stage.addChild(plane);

  function fire() {}

  function forward() {
    plane.y -= 5;
    // app.ticker.add((delta)=>{
    //   plane.rotation += 0.01;
    //   plane.x += 2;
    // })
  }
}

function hide(sprite) {
  sprite.visible = false;
}

function fadeOut(sprite) {}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = Plane;

var _Sprite = __webpack_require__(0);

var _Missile = __webpack_require__(4);

function Plane(options) {
  var _this = this;

  this.hp = 1000;
  this.speed = 5;

  Object.assign(this, options);

  this.texture = PIXI.Texture.fromImage('/img/pixi/shuttle.png');
  this.sprite = new PIXI.Sprite(this.texture);
  var plane = this.sprite;
  plane.anchor.set(0.5);
  plane.scale.x = 0.2;
  plane.scale.y = 0.2;
  plane.x = this.x;
  plane.y = this.y;

  // Opt-in to interactivity
  plane.interactive = true;
  // Shows hand cursor
  plane.buttonMode = true;
  plane.on('pointerdown', function () {
    // this.toggleRotate();
    _this.dash();
  });
}

Plane.prototype = new _Sprite.Sprite();

Object.assign(Plane.prototype, {
  fire: function fire() {
    new _Missile.Missile({
      app: this.app,
      x: this.sprite.x,
      y: this.sprite.y
    });
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createText = createText;
function createText(app) {
  var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
  });

  var richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
  richText.x = 30;
  richText.y = 180;

  return richText;
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedPlane = AnimatedPlane;

var _Sprite = __webpack_require__(0);

var _Missile = __webpack_require__(4);

function AnimatedPlane(options) {
  var self = this;
  self.missiles = 5;
  PIXI.loader.add('/img/pixi/fighter.json').load(onAssetsLoaded);

  function onAssetsLoaded() {
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 30; i++) {
      var val = i < 10 ? '0' + i : i;

      // magically works since the spritesheet was loaded with the pixi loader
      frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);

    Object.assign(self, options);
    self.sprite = anim;
    self.canMove();
    self.canFire();
    anim.interactive = true;

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = self.x;
    anim.y = self.y;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();

    anim.on('pointerdown', function () {
      self.dash();
    });
    self.mount();
    // Animate the rotation
    // app.ticker.add(function() {
    //   anim.rotation += 0.01;
    // });
  }
}

AnimatedPlane.prototype = new _Sprite.Sprite();

Object.assign(AnimatedPlane.prototype, {
  fire: function fire() {
    if (this.missiles > 0) {
      new _Missile.Missile({
        app: this.app,
        x: this.sprite.x - 35,
        y: this.sprite.y - 20
      });
      this.missiles--;
    };
  }
});

/***/ })

/******/ });