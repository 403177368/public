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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.map;
    this.tileset;
    this.layer;
    this.player;
    this.facing = 'left';
    this.weapon;
    this.bg;

    this.jumpTimer = 0;
    this.cursors;
    this.jumpButton;
    this.controls;
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this),
      render: this.render.bind(this)
    });
  }

  _createClass(App, [{
    key: 'preload',
    value: function preload() {
      var game = this.game;
      game.load.tilemap('level1', '//examples.phaser.io/assets/games/starstruck/level1.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.image('tiles-1', '//examples.phaser.io/assets/games/starstruck/tiles-1.png');
      game.load.spritesheet('dude', '//examples.phaser.io/assets/games/starstruck/dude.png', 32, 48);
      game.load.spritesheet('droid', '//examples.phaser.io/assets/games/starstruck/droid.png', 32, 32);
      game.load.image('starSmall', '//examples.phaser.io/assets/games/starstruck/star.png');
      game.load.image('starBig', '//examples.phaser.io/assets/games/starstruck/star2.png');
      game.load.image('background', '//examples.phaser.io/assets/games/starstruck/background2.png');

      game.load.image('bullet', '//examples.phaser.io/assets/sprites/shmup-bullet.png');

      game.load.atlas('dpad', '//examples.phaser.io/assets/virtualjoystick/skins/dpad.png', '//examples.phaser.io/assets/virtualjoystick/skins/dpad.json');
      game.load.image('ball', '//examples.phaser.io/assets/virtualjoystick/beball1.png');
      game.load.image('bg', '//examples.phaser.io/assets/virtualjoystick/space2.png');
    }
  }, {
    key: 'create',
    value: function create() {
      var game = this.game;
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.stage.backgroundColor = '#000000';

      var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
      bg.fixedToCamera = true;

      var map = game.add.tilemap('level1');

      map.addTilesetImage('tiles-1');

      map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);

      var layer = map.createLayer('Tile Layer 1');

      //  Un-comment this on to see the collision tiles
      // layer.debug = true;

      layer.resizeWorld();
      this.layer = layer;

      game.physics.arcade.gravity.y = 250;

      this.createPlayer(game);
      this.createWeapon(game, this.player);

      this.cursors = game.input.keyboard.createCursorKeys();
      this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      this.createControls(game);
    }
  }, {
    key: 'createPlayer',
    value: function createPlayer(game) {
      var player = game.add.sprite(32, 32, 'dude');
      game.physics.enable(player, Phaser.Physics.ARCADE);

      player.body.bounce.y = 0.2;
      player.body.collideWorldBounds = true;
      player.body.setSize(20, 32, 5, 16);

      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('turn', [4], 20, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);

      game.camera.follow(player);

      this.player = player;
    }
  }, {
    key: 'createWeapon',
    value: function createWeapon(game, player) {
      var weapon = game.add.weapon(30, 'bullet');

      //  The bullet will be automatically killed when it leaves the world bounds
      weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

      //  The speed at which the bullet is fired
      weapon.bulletSpeed = 100;
      weapon.bulletGravity = new Phaser.Point(-1, -1);

      //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
      weapon.fireRate = 300;

      //  Tell the Weapon to track the 'player' Sprite
      //  With no offsets from the position
      //  But the 'true' argument tells the weapon to track sprite rotation
      weapon.trackSprite(player, 30, 30, true);
      this.weapon = weapon;
    }
  }, {
    key: 'createControls',
    value: function createControls(game) {
      // game.add.image(0, 0, 'bg');
      var controls = {
        left: false,
        right: false,

        jump: false
      };

      var btn_left = game.add.button(50, game._height - 50, 'button', null, this, 2, 1, 0);
      btn_left.scale.setTo(2, 2);
      btn_left.anchor.setTo(0.5, 0.5);
      btn_left.onInputDown.add(function () {
        controls.left = true;
      });
      btn_left.onInputUp.add(function () {
        controls.left = false;
      });
      btn_left.fixedToCamera = true;

      var btn_right = game.add.button(150, game._height - 50, 'button', null, this, 2, 1, 0);
      btn_right.scale.setTo(2, 2);
      btn_right.anchor.setTo(0.5, 0.5);
      btn_right.onInputDown.add(function () {
        controls.right = true;
      });
      btn_right.onInputUp.add(function () {
        controls.right = false;
      });
      btn_right.fixedToCamera = true;

      var btn = game.add.button(game.width - 50, game._height - 50, 'button', null, this, 2, 1, 0);
      btn.scale.setTo(2, 2);
      btn.anchor.setTo(0.5, 0.5);
      btn.onInputDown.add(function () {
        controls.jump = true;
      });
      btn.onInputUp.add(function () {
        controls.jump = false;
      });
      btn.fixedToCamera = true;

      this.controls = controls;
    }
  }, {
    key: 'update',
    value: function update() {
      var game = this.game;
      var player = this.player;
      var layer = this.layer;
      var facing = this.facing;
      var cursors = this.cursors;
      var jumpTimer = this.jumpTimer;
      var jumpButton = this.jumpButton;
      var controls = this.controls;

      game.physics.arcade.collide(player, layer);

      player.body.velocity.x = 0;

      if (cursors.left.isDown || controls.left) {
        player.body.velocity.x = -150;

        if (facing != 'left') {
          player.animations.play('left');
          facing = 'left';
        }
      } else if (cursors.right.isDown || controls.right) {
        player.body.velocity.x = 150;

        if (facing != 'right') {
          player.animations.play('right');
          facing = 'right';
        }
      } else {
        if (facing != 'idle') {
          player.animations.stop();

          if (facing == 'left') {
            player.frame = 0;
          } else {
            player.frame = 5;
          }

          facing = 'idle';
        }
      }

      if ((jumpButton.isDown || controls.jump) && player.body.onFloor() && game.time.now > jumpTimer) {
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
      }

      this.weapon.fire();
      this.weapon.bullets.forEach(function (a) {
        a.allowGravity = false;
      });
    }
  }, {
    key: 'render',
    value: function render() {

      // game.debug.text(game.time.physicsElapsed, 32, 32);
      // game.debug.body(player);
      // game.debug.bodyInfo(player, 16, 24);

    }
  }]);

  return App;
}();
// var game;

window.addEventListener('load', function () {
  new App();
});

/***/ })

/******/ });