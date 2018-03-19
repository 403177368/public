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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpriteSheet = exports.SpriteSheet = function () {
  function SpriteSheet() {
    _classCallCheck(this, SpriteSheet);

    this.map = {};
  }

  _createClass(SpriteSheet, [{
    key: 'load',
    value: function load(spriteData, callback) {
      this.map = spriteData;
      this.image = new Image();
      this.image.onload = callback;
      this.image.src = __webpack_require__(14);
    }
  }, {
    key: 'draw',
    value: function draw(ctx, sprite, x, y, frame) {
      var s = this.map[sprite];
      if (!frame) frame = 0;
      ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(x), Math.floor(y), s.w, s.h);
    }
  }]);

  return SpriteSheet;
}();

;

var Sprite = exports.Sprite = function () {
  function Sprite(game) {
    _classCallCheck(this, Sprite);

    this.game = game;
  }

  _createClass(Sprite, [{
    key: 'setup',
    value: function setup(sprite, props) {
      this.sprite = sprite;
      this.merge(props);
      this.frame = this.frame || 0;
      this.w = this.game.spriteSheet.map[sprite].w;
      this.h = this.game.spriteSheet.map[sprite].h;
    }
  }, {
    key: 'merge',
    value: function merge(props) {
      if (props) {
        for (var prop in props) {
          this[prop] = props[prop];
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.game.spriteSheet.draw(ctx, this.sprite, this.x, this.y, this.frame);
    }
  }, {
    key: 'hit',
    value: function hit(damage) {
      this.board.remove(this);
    }
  }]);

  return Sprite;
}();

var OBJECT_PLAYER = 1,
    OBJECT_PLAYER_PROJECTILE = 2,
    OBJECT_ENEMY = 4,
    OBJECT_ENEMY_PROJECTILE = 8,
    OBJECT_POWERUP = 16;

exports.OBJECT_ENEMY = OBJECT_ENEMY;

var PlayerShip = exports.PlayerShip = function (_Sprite) {
  _inherits(PlayerShip, _Sprite);

  function PlayerShip(game) {
    _classCallCheck(this, PlayerShip);

    var _this = _possibleConstructorReturn(this, (PlayerShip.__proto__ || Object.getPrototypeOf(PlayerShip)).call(this, game));

    _this.game = game;
    _this.hp = 3;
    _this.missiles = 6;

    _this.setup('ship', {
      vx: 0,
      vy: 0,
      reloadTime: 0.25,
      maxVel: 200
    });

    // 
    _this.reload = _this.reloadTime;
    _this.x = game.width / 2 - _this.w / 2;
    _this.y = game.height - game.playerOffset - _this.h;
    return _this;
  }

  _createClass(PlayerShip, [{
    key: 'step',
    value: function step(dt) {
      var game = this.game;
      if (game.keys['left']) {
        this.vx = -this.maxVel;
      } else if (game.keys['right']) {
        this.vx = this.maxVel;
      } else {
        this.vx = 0;
      }

      this.x += this.vx * dt;

      if (this.x < 0) {
        this.x = 0;
      } else if (this.x > game.width - this.w) {
        this.x = game.width - this.w;
      }

      if (game.keys['up']) {
        this.vy = -this.maxVel;
      } else if (game.keys['down']) {
        this.vy = this.maxVel;
      } else {
        this.vy = 0;
      }
      this.y += this.vy * dt;
      if (this.y < 0) {
        this.y = 0;
      } else if (this.y > game.height - this.h) {
        this.y = game.height - this.h;
      }

      this.reload -= dt;
      if (game.keys['fire'] && this.reload < 0) {
        this.fire();
      }
    }
  }, {
    key: 'fire',
    value: function fire() {
      // this.game.keys['fire'] = false;
      this.reload = this.reloadTime;

      this.board.add(new PlayerMissile(this.game, this.x, this.y + this.h / 2));
      this.board.add(new PlayerMissile(this.game, this.x + this.w, this.y + this.h / 2));
      if (this.missiles === 6) {
        this.board.add(new PlayerMissile(this.game, this.x + this.w / 4, this.y + this.h / 2));
        this.board.add(new PlayerMissile(this.game, this.x + this.w / 4 * 3, this.y + this.h / 2));
      }
    }
  }, {
    key: 'hit',
    value: function hit(damage) {
      this.hp -= 1;
      // if (this.board.remove(this)) {
      //   this.game.loseGame();
      // }
    }
  }]);

  return PlayerShip;
}(Sprite);

PlayerShip.prototype.type = OBJECT_PLAYER;

var PlayerMissile = exports.PlayerMissile = function (_Sprite2) {
  _inherits(PlayerMissile, _Sprite2);

  function PlayerMissile(game, x, y) {
    _classCallCheck(this, PlayerMissile);

    var _this2 = _possibleConstructorReturn(this, (PlayerMissile.__proto__ || Object.getPrototypeOf(PlayerMissile)).call(this, game));

    _this2.setup('missile', { vy: -700, damage: 10 });
    _this2.x = x - _this2.w / 2;
    _this2.y = y - _this2.h;
    return _this2;
  }

  _createClass(PlayerMissile, [{
    key: 'step',
    value: function step(dt) {
      this.y += this.vy * dt;
      var collision = this.board.collide(this, OBJECT_ENEMY);
      if (collision) {
        collision.hit(this.damage);
        this.board.remove(this);
      } else if (this.y < -this.h) {
        this.board.remove(this);
      }
    }
  }]);

  return PlayerMissile;
}(Sprite);

PlayerMissile.prototype.type = OBJECT_PLAYER_PROJECTILE;

var Enemy = exports.Enemy = function (_Sprite3) {
  _inherits(Enemy, _Sprite3);

  function Enemy(game, blueprint, override) {
    _classCallCheck(this, Enemy);

    var _this3 = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game));

    _this3.game = game;
    _this3.merge(_this3.baseParameters);
    _this3.setup(blueprint.sprite, blueprint);
    _this3.merge(override);
    return _this3;
  }

  _createClass(Enemy, [{
    key: 'step',
    value: function step(dt) {
      this.t += dt;

      // A: base vx, for instance, 50px/s 
      this.vx = this.A + this.B * Math.sin(this.C * this.t + this.D);
      this.vy = this.E + this.F * Math.sin(this.G * this.t + this.H);

      this.x += this.vx * dt;
      this.y += this.vy * dt;

      var collision = this.board.collide(this, OBJECT_PLAYER);
      if (collision) {
        collision.hit(this.damage);
        this.board.remove(this);
      }

      if (Math.random() < 0.01 && this.reload <= 0) {
        this.reload = this.reloadTime;
        if (this.missiles == 2) {
          this.board.add(new EnemyMissile(this.game, this.x + this.w - 2, this.y + this.h));
          this.board.add(new EnemyMissile(this.game, this.x + 2, this.y + this.h));
        } else {
          this.board.add(new EnemyMissile(this.game, this.x + this.w / 2, this.y + this.h));
        }
      }
      this.reload -= dt;

      if (this.y > this.game.height || this.x < -this.w || this.x > this.game.width) {
        this.board.remove(this);
      }
    }
  }, {
    key: 'hit',
    value: function hit(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        if (this.board.remove(this)) {
          this.game.points += this.points || 100;
          this.board.add(new Explosion(this.game, this.x + this.w / 2, this.y + this.h / 2));
        }
      }
    }
  }]);

  return Enemy;
}(Sprite);

Enemy.prototype.type = OBJECT_ENEMY;
Enemy.prototype.baseParameters = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  t: 0,
  reloadTime: 0.75,
  reload: 0
};

var EnemyMissile = exports.EnemyMissile = function (_Sprite4) {
  _inherits(EnemyMissile, _Sprite4);

  function EnemyMissile(game, x, y) {
    _classCallCheck(this, EnemyMissile);

    var _this4 = _possibleConstructorReturn(this, (EnemyMissile.__proto__ || Object.getPrototypeOf(EnemyMissile)).call(this, game));

    _this4.game = game;
    _this4.setup('enemy_missile', { vy: 200, damage: 10 });
    _this4.x = x - _this4.w / 2;
    _this4.y = y;
    return _this4;
  }

  _createClass(EnemyMissile, [{
    key: 'step',
    value: function step(dt) {
      this.y += this.vy * dt;
      var collision = this.board.collide(this, OBJECT_PLAYER);
      if (collision) {
        collision.hit(this.damage);
        this.board.remove(this);
      } else if (this.y > this.game.height) {
        this.board.remove(this);
      }
    }
  }]);

  return EnemyMissile;
}(Sprite);

EnemyMissile.prototype.type = OBJECT_ENEMY_PROJECTILE;

var Explosion = exports.Explosion = function (_Sprite5) {
  _inherits(Explosion, _Sprite5);

  function Explosion(game, centerX, centerY) {
    _classCallCheck(this, Explosion);

    var _this5 = _possibleConstructorReturn(this, (Explosion.__proto__ || Object.getPrototypeOf(Explosion)).call(this, game));

    _this5.setup('explosion', { frame: 0 });
    _this5.x = centerX - _this5.w / 2;
    _this5.y = centerY - _this5.h / 2;
    return _this5;
  }

  _createClass(Explosion, [{
    key: 'step',
    value: function step(dt) {
      this.frame++;
      if (this.frame >= 12) {
        this.board.remove(this);
      }
    }
  }]);

  return Explosion;
}(Sprite);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(11);

__webpack_require__(12);

var _Game2 = __webpack_require__(13);

var _Sprite = __webpack_require__(1);

var _Layers = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShooterGame = function (_Game) {
  _inherits(ShooterGame, _Game);

  function ShooterGame() {
    _classCallCheck(this, ShooterGame);

    return _possibleConstructorReturn(this, (ShooterGame.__proto__ || Object.getPrototypeOf(ShooterGame)).apply(this, arguments));
  }

  _createClass(ShooterGame, [{
    key: 'startGame',
    value: function startGame() {
      var ua = navigator.userAgent.toLowerCase();

      // Only 1 row of stars
      // boards: {
      //   0: 'starfield',
      //   1: 'starfield',
      //   2: 'startfild',
      //   3: 'game',
      //   4: 'controlsBoard',
      //   5: 'points' 
      // }
      if (ua.match(/android/)) {
        this.setBoard(0, new _Layers.LayerStarfield(this, 50, 0.6, 100, true));
      } else {
        this.setBoard(0, new _Layers.LayerStarfield(this, 20, 0.4, 100, true));
        this.setBoard(1, new _Layers.LayerStarfield(this, 50, 0.6, 100));
        this.setBoard(2, new _Layers.LayerStarfield(this, 100, 1.0, 50));
      }
      this.setBoard(3, new _Layers.LayerTitle(this, "Alien Invasion", "Press fire to start playing", this.playGame.bind(this)));
    }
  }, {
    key: 'playGame',
    value: function playGame() {
      var _this2 = this;

      var board = new _Game2.GameBoard();
      this.stage = 1;
      this.maxStage = 2;

      // !!!
      this.player = new _Sprite.PlayerShip(this);
      this.level = new Level(this, level_1, this.stageClear.bind(this));
      board.add(this.player);
      board.add(this.level);
      // setTimeout(() => {
      //   board.add(new Level(this, level2, this.winGame.bind(this)));
      // }, 2000);

      this.setBoard(3, board);

      this.setBoard(5, new _Layers.LayerPoints(this, 0));
      document.addEventListener('click', function () {
        _this2.stageClear();
        // console.log(this.levelData.length, this.board.cnt)
      });
    }
  }, {
    key: 'stageClear',
    value: function stageClear() {
      var _this3 = this;

      setTimeout(function () {
        _this3.level.end();
        if (_this3.stage !== _this3.maxStage) {
          _this3.setBoard(6, new _Layers.LayerTitle(_this3, "STAGE CLEAR!", "Press fire to next stage", _this3.nextStage.bind(_this3)));
        } else {
          _this3.winGame();
        }
      }, 1000);
    }
  }, {
    key: 'nextStage',
    value: function nextStage() {
      this.stage++;
      this.boards[6] = {
        step: function step() {},
        draw: function draw() {}
      };
      this.level = new Level(this, level_2, this.stageClear.bind(this));
      this.boards[3].add(this.level);
      // this.setBoard(3, board);
    }
  }, {
    key: 'winGame',
    value: function winGame() {
      this.setBoard(3, new _Layers.LayerTitle(this, "You win!", "Press fire to play again", this.playGame.bind(this)));
    }
  }, {
    key: 'loseGame',
    value: function loseGame() {
      this.setBoard(3, new _Layers.LayerTitle(this, "You lose!", "Press fire to play again", this.playGame.bind(this)));
    }
  }]);

  return ShooterGame;
}(_Game2.Game);

var game = new ShooterGame();

var Level = function () {
  function Level(game, levelData, callback) {
    _classCallCheck(this, Level);

    this.game = game;
    this.levelData = [];
    for (var i = 0; i < levelData.length; i++) {
      this.levelData.push(Object.create(levelData[i]));
    }
    this.t = 0;
    this.callback = callback;
    this.over = false;
  }

  _createClass(Level, [{
    key: 'step',
    value: function step(dt) {
      var _this4 = this;

      if (this.over) {
        // console.log(this.board)
        this.board.objects.forEach(function (a) {
          if (a instanceof _Sprite.PlayerShip === false) {
            _this4.board.remove(a);
          }
        });
        // this.board.remove(this);
        if (this.callback) this.callback();
        return;
      }

      var idx = 0,
          remove = [],
          curShip = null;

      // Update the current time offset
      this.t += dt * 1000;

      //   Start, End,  Gap, Type,   Override
      // [ 0,     4000, 500, 'step', { x: 100 } ]
      while ((curShip = this.levelData[idx]) && curShip[0] < this.t + 2000) {
        // Check if we've passed the end time 
        if (this.t > curShip[1]) {
          remove.push(curShip);
        } else if (curShip[0] < this.t) {
          // Get the enemy definition blueprint
          var enemy = enemies[curShip[3]],
              override = curShip[4];

          // Add a new enemy with the blueprint and override
          this.board.add(new _Sprite.Enemy(this.game, enemy, override));

          // Increment the start time by the gap
          curShip[0] += curShip[2];
        }
        idx++;
      }

      // Remove any objects from the levelData that have passed
      for (var i = 0, len = remove.length; i < len; i++) {
        var remIdx = this.levelData.indexOf(remove[i]);
        if (remIdx != -1) this.levelData.splice(remIdx, 1);
      }

      // If there are no more enemies on the board or in 
      // levelData, this level is done
      if (this.levelData.length === 0 && this.board.cnt[_Sprite.OBJECT_ENEMY] === 0) {
        this.end();
      }
    }
  }, {
    key: 'end',
    value: function end() {
      this.over = true;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {}
  }]);

  return Level;
}();

var sprites = {
  ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
  missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
  enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
  enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
  enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
  enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
  explosion: { sx: 0, sy: 64, w: 64, h: 64, frames: 12 },
  enemy_missile: { sx: 9, sy: 42, w: 3, h: 20, frame: 1 }
};

var enemies = {
  straight: {
    x: 0, y: -50,
    sprite: 'enemy_ship', health: 10,
    E: 100
  },
  ltr: {
    x: 0, y: -100,
    sprite: 'enemy_purple', health: 10,
    B: 75, C: 1, E: 100, missiles: 2
  },
  circle: {
    x: 250, y: -50,
    sprite: 'enemy_circle', health: 10,
    A: 0, B: -100, C: 1,
    E: 20, F: 100, G: 1, H: Math.PI / 2
  },
  wiggle: {
    x: 100, y: -50, sprite: 'enemy_bee', health: 20,
    B: 100, C: 4, E: 100, firePercentage: 0.001, missiles: 2 },
  step: {
    x: 0, y: -50, sprite: 'enemy_ship', health: 30,
    B: 150, C: 1.2,
    E: 75
  },

  lord: {
    x: 0, y: -50,
    sprite: 'enemy_bee', health: 20,
    B: 250, C: 2.2,
    E: 75
  },
  green: {
    x: 250, y: -50,
    sprite: 'enemy_ship', health: 20,
    A: 0, B: -100, C: 1,
    E: 20, F: 100, G: 1, H: Math.Pi / 2
  }
};

var level_1 = [
// Start,   End, Gap,  Type,   Override
[0, 4000, 500, 'step'], [6000, 13000, 800, 'ltr'], [10000, 16000, 400, 'circle'], [17800, 20000, 500, 'straight', { x: 50 }], [18200, 20000, 500, 'straight', { x: 90 }], [18200, 20000, 500, 'straight', { x: 10 }], [22000, 25000, 400, 'wiggle', { x: 150 }], [22000, 25000, 400, 'wiggle', { x: 100 }]];

var level_2 = [[0, 8000, 500, 'lord'], [0, 8000, 500, 'circle']];

window.addEventListener("load", function () {
  game.initialize("game", sprites, game.startGame.bind(game));
});

var a = '';

if (false) {
  module.hot.accept();
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameBoard = exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sprite = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Handle Input
var KEY_CODES = {
  32: 'fire',
  37: 'left', 39: 'right',
  38: 'up', 40: 'down'
};

var Game = exports.Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.boards = [];
    this.keys = {};
  }

  _createClass(Game, [{
    key: 'initialize',
    value: function initialize(canvasElementId, sprite_data, callback) {

      this.canvas = document.getElementById(canvasElementId);

      this.playerOffset = 10;
      this.canvasMultiplier = 1;
      this.setupMobile();
      this.width = this.canvas.width;
      this.height = this.canvas.height;

      this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
      if (!this.ctx) {
        return alert("Please upgrade your browser to play");
      }

      this.setupInput();

      this.lastTime = new Date().getTime();
      this.maxTime = 1 / 30;
      this.loop();

      if (this.mobile) {
        this.setBoard(4, new TouchControlsBoard(this));
      }

      this.spriteSheet = new _Sprite.SpriteSheet();
      this.spriteSheet.load(sprite_data, callback);
    }
  }, {
    key: 'setupMobile',
    value: function setupMobile() {
      var container = document.getElementById("container"),
          hasTouch = !!('ontouchstart' in window),
          w = window.innerWidth,
          h = window.innerHeight;

      if (hasTouch) {
        this.mobile = true;
      }

      if (container.width >= 1280 || !hasTouch) {
        return false;
      }

      if (w > h) {
        alert("Please rotate the device and then click OK");
        w = window.innerWidth;
        h = window.innerHeight;
      }

      container.style.height = h * 2 + "px";
      window.scrollTo(0, 1);

      h = window.innerHeight + 2;
      container.style.height = h + "px";
      container.style.width = w + "px";
      container.style.padding = 0;

      if (h >= this.canvas.height * 1.75 || w >= this.canvas.height * 1.75) {
        this.canvasMultiplier = 2;
        this.canvas.width = w / 2;
        this.canvas.height = h / 2;
        this.canvas.style.width = w + "px";
        this.canvas.style.height = h + "px";
      } else {
        this.canvas.width = w;
        this.canvas.height = h;
      }

      this.canvas.style.position = 'absolute';
      this.canvas.style.left = "0px";
      this.canvas.style.top = "0px";
    }
  }, {
    key: 'setupInput',
    value: function setupInput() {
      var self = this;
      window.addEventListener('keydown', function (e) {
        if (KEY_CODES[e.keyCode]) {
          self.keys[KEY_CODES[e.keyCode]] = true;
          e.preventDefault();
        }
      }, false);

      window.addEventListener('keyup', function (e) {
        if (KEY_CODES[e.keyCode]) {
          self.keys[KEY_CODES[e.keyCode]] = false;
          e.preventDefault();
        }
      }, false);
    }
    // Change an active game board

  }, {
    key: 'setBoard',
    value: function setBoard(num, board) {
      this.boards[num] = board;
    }
  }, {
    key: 'loop',
    value: function loop() {
      // Game Loop
      var curTime = new Date().getTime();
      requestAnimationFrame(this.loop.bind(this));
      var dt = (curTime - this.lastTime) / 1000;
      if (dt > this.maxTime) {
        dt = this.maxTime;
      }

      // Draw the boards:
      try {
        for (var i = 0, len = this.boards.length; i < len; i++) {
          if (this.boards[i]) {
            this.boards[i].step(dt);
            this.boards[i].draw(this.ctx);
          }
        }
      } catch (e) {
        console.log(e.stack);
      }

      this.lastTime = curTime;
    }
  }]);

  return Game;
}();

// singleton pattern??

var GameBoard = exports.GameBoard = function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);

    // The current list of objects
    this.objects = [];
    this.cnt = {};
  }

  // Add a new object to the object list


  _createClass(GameBoard, [{
    key: 'add',
    value: function add(obj) {
      obj.board = this;
      this.objects.push(obj);
      this.cnt[obj.type] = (this.cnt[obj.type] || 0) + 1;
      return obj;
    }

    // Mark an object for removal

  }, {
    key: 'remove',
    value: function remove(obj) {
      var idx = this.removed.indexOf(obj);
      if (idx === -1) {
        this.removed.push(obj);
        return true;
      } else {
        return false;
      }
    }

    // Reset the list of removed objects

  }, {
    key: 'resetRemoved',
    value: function resetRemoved() {
      this.removed = [];
    }

    // Removed an objects marked for removal from the list

  }, {
    key: 'finalizeRemoved',
    value: function finalizeRemoved() {
      for (var i = 0, len = this.removed.length; i < len; i++) {
        var idx = this.objects.indexOf(this.removed[i]);
        if (idx != -1) {
          this.cnt[this.removed[i].type]--;
          this.objects.splice(idx, 1);
        }
      }
    }

    // Call the same method on all current objects 

  }, {
    key: 'iterate',
    value: function iterate(funcName) {
      var args = Array.prototype.slice.call(arguments, 1);
      for (var i = 0, len = this.objects.length; i < len; i++) {
        var obj = this.objects[i];
        obj[funcName].apply(obj, args);
      }
    }

    // Find the first object for which func is true

  }, {
    key: 'detect',
    value: function detect(func) {
      for (var i = 0, val = null, len = this.objects.length; i < len; i++) {
        if (func.call(this.objects[i])) return this.objects[i];
      }
      return false;
    }

    // Call step on all objects and then delete
    // any object that have been marked for removal

  }, {
    key: 'step',
    value: function step(dt) {
      this.resetRemoved();
      this.iterate('step', dt);
      this.finalizeRemoved();
    }

    // Draw all the objects

  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.iterate('draw', ctx);
    }

    // Check for a collision between the 
    // bounding rects of two objects

  }, {
    key: 'overlap',
    value: function overlap(o1, o2) {
      return !(o1.y + o1.h - 1 < o2.y || o1.y > o2.y + o2.h - 1 || o1.x + o1.w - 1 < o2.x || o1.x > o2.x + o2.w - 1);
    }

    // Find the first object that collides with obj
    // match against an optional type

  }, {
    key: 'collide',
    value: function collide(obj, type) {
      var self = this;
      return this.detect(function () {
        if (obj != this) {
          var col = (!type || this.type & type) && self.overlap(obj, this);
          return col ? this : false;
        }
      });
    }
  }]);

  return GameBoard;
}();

var TouchControlsBoard = function () {
  function TouchControlsBoard(game) {
    _classCallCheck(this, TouchControlsBoard);

    this.game = game;
    this.gutterWidth = 10;
    this.unitWidth = game.width / 5;
    this.blockWidth = this.unitWidth - this.gutterWidth;

    game.canvas.addEventListener('touchstart', this.trackTouch.bind(this), true);
    game.canvas.addEventListener('touchmove', this.trackTouch.bind(this), true);
    game.canvas.addEventListener('touchend', this.trackTouch.bind(this), true);

    // For Android
    game.canvas.addEventListener('dblclick', function (e) {
      e.preventDefault();
    }, true);
    game.canvas.addEventListener('click', function (e) {
      e.preventDefault();
    }, true);

    game.playerOffset = this.unitWidth + 20;
  }

  _createClass(TouchControlsBoard, [{
    key: 'drawSquare',
    value: function drawSquare(ctx, x, y, txt, on) {
      ctx.globalAlpha = on ? 0.9 : 0.6;
      ctx.fillStyle = "#CCC";
      ctx.fillRect(x, y, this.blockWidth, this.blockWidth);

      ctx.fillStyle = "#FFF";
      ctx.globalAlpha = 1.0;
      ctx.font = "bold " + 3 * this.unitWidth / 4 + "px arial";

      var txtSize = ctx.measureText(txt);

      ctx.fillText(txt, x + this.blockWidth / 2 - txtSize.width / 2, y + 3 * this.blockWidth / 4 + 5);
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.save();

      var yLoc = this.game.height - this.unitWidth;
      this.drawSquare(ctx, this.gutterWidth, yLoc, '\u25C0', this.game.keys['left']);
      this.drawSquare(ctx, this.unitWidth + this.gutterWidth, yLoc, '\u25B6', this.game.keys['right']);
      this.drawSquare(ctx, 4 * this.unitWidth, yLoc, "A", this.game.keys['fire']);

      ctx.restore();
    }
  }, {
    key: 'step',
    value: function step(dt) {}
  }, {
    key: 'trackTouch',
    value: function trackTouch(e) {
      var touch, x;
      var game = this.game;

      e.preventDefault();
      game.keys['left'] = false;
      game.keys['right'] = false;
      for (var i = 0; i < e.targetTouches.length; i++) {
        touch = e.targetTouches[i];
        x = touch.pageX / game.canvasMultiplier - game.canvas.offsetLeft;
        if (x < this.unitWidth) {
          game.keys['left'] = true;
        }
        if (x > this.unitWidth && x < 2 * this.unitWidth) {
          game.keys['right'] = true;
        }
      }

      if (e.type == 'touchstart' || e.type == 'touchend') {
        for (i = 0; i < e.changedTouches.length; i++) {
          touch = e.changedTouches[i];
          x = touch.pageX / game.canvasMultiplier - game.canvas.offsetLeft;
          if (x > 4 * this.unitWidth) {
            game.keys['fire'] = e.type == 'touchstart';
          }
        }
      }
    }
  }]);

  return TouchControlsBoard;
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprites.6b1347de.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.LayerStarfield = LayerStarfield;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { Game } from './engine.js';

function LayerStarfield(game, speed, opacity, numStars, clear) {

  // Set up the offscreen canvas
  var stars = document.createElement("canvas");
  stars.width = game.width;
  stars.height = game.height;
  var starCtx = stars.getContext("2d");

  var offset = 0;

  // If the clear option is set, 
  // make the background black instead of transparent
  if (clear) {
    starCtx.fillStyle = "#000";
    starCtx.fillRect(0, 0, stars.width, stars.height);
  }

  // Now draw a bunch of random 2 pixel
  // rectangles onto the offscreen canvas
  starCtx.fillStyle = "#FFF";
  starCtx.globalAlpha = opacity;
  for (var i = 0; i < numStars; i++) {
    starCtx.fillRect(Math.floor(Math.random() * stars.width), Math.floor(Math.random() * stars.height), 2, 2);
  }

  // This method is called every frame
  // to draw the starfield onto the canvas
  this.draw = function (ctx) {
    var intOffset = Math.floor(offset);
    var remaining = stars.height - intOffset;

    // Draw the top half of the starfield
    if (intOffset > 0) {
      ctx.drawImage(stars, 0, remaining, stars.width, intOffset, 0, 0, stars.width, intOffset);
    }

    // Draw the bottom half of the starfield
    if (remaining > 0) {
      ctx.drawImage(stars, 0, 0, stars.width, remaining, 0, intOffset, stars.width, remaining);
    }
  };

  // This method is called to update
  // the starfield
  this.step = function (dt) {
    offset += dt * speed;
    offset = offset % stars.height;
  };
};

var LayerTitle = exports.LayerTitle = function () {
  function LayerTitle(game, title, subtitle, callback) {
    _classCallCheck(this, LayerTitle);

    this.game = game;
    this.title = title;
    this.subtitle = subtitle;
    this.callback = callback;

    this.up = false;
  }

  _createClass(LayerTitle, [{
    key: "step",
    value: function step(dt) {
      if (!this.game.keys['fire']) {
        this.up = true;
      } else {}
      if (this.up && this.game.keys['fire'] && this.callback) {
        this.callback();
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "#FFFFFF";

      ctx.font = "bold 40px bangers";
      var measure = ctx.measureText(this.title);
      ctx.fillText(this.title, this.game.width / 2 - measure.width / 2, this.game.height / 2);

      ctx.font = "bold 20px bangers";
      var measure2 = ctx.measureText(this.subtitle);
      ctx.fillText(this.subtitle, this.game.width / 2 - measure2.width / 2, this.game.height / 2 + 40);
    }
  }]);

  return LayerTitle;
}();

;

var LayerPoints = exports.LayerPoints = function () {
  function LayerPoints(game) {
    _classCallCheck(this, LayerPoints);

    this.game = game;
    game.points = 0;
    this.pointsLength = 8;
  }

  _createClass(LayerPoints, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.font = "bold 18px arial";
      ctx.fillStyle = "#FFFFFF";

      var txt = "" + this.game.points;
      var i = this.pointsLength - txt.length,
          zeros = "";
      while (i-- > 0) {
        zeros += "0";
      }

      ctx.fillText(zeros + txt, 10, 20);
      ctx.fillText('HP ' + this.game.player.hp, this.game.width - 50, 20);
      ctx.fillText('Stage-' + this.game.stage, this.game.width / 2 - 50, 20);
      ctx.restore();
    }
  }, {
    key: "step",
    value: function step(dt) {}
  }]);

  return LayerPoints;
}();

;

/***/ })
/******/ ]);