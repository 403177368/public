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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(16);
var sprites_1 = __webpack_require__(3);
var Layers_1 = __webpack_require__(17);
var level_1 = __webpack_require__(18);
var ShooterGame = /** @class */ (function (_super) {
    __extends(ShooterGame, _super);
    function ShooterGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // level: Level;
    ShooterGame.prototype.startGame = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var ua;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = options;
                        return [4 /*yield*/, this.initialize(options)];
                    case 1:
                        _a.sent();
                        this.levels = options.levels;
                        ua = navigator.userAgent.toLowerCase();
                        if (ua.match(/android/)) {
                            // Only 1 row of stars
                            this.setBoard(0, new Layers_1.LayerStarfield(this, 50, 0.6, 100, true));
                        }
                        else {
                            // Add the boards of starfield
                            this.setBoard(0, new Layers_1.LayerStarfield(this, 20, 0.4, 100, true));
                            this.setBoard(1, new Layers_1.LayerStarfield(this, 50, 0.6, 100, false));
                            this.setBoard(2, new Layers_1.LayerStarfield(this, 100, 1.0, 50, false));
                        }
                        // Add the board of title
                        this.setBoard(3, new Layers_1.LayerTitle(this, 'Alien Invasion', 'Press fire to start playing', this.playGame.bind(this)));
                        return [2 /*return*/];
                }
            });
        });
    };
    ShooterGame.prototype.playGame = function () {
        var _this = this;
        var board = new Game_1.GameBoard(this);
        this.stage = 1;
        // this.maxStage = 2;
        // Add the player to gameBoard
        this.player = new sprites_1.PlayerShip(this, this.options.playerHp);
        board.add(this.player);
        // console.log(this.player);
        // Add level 1 to board
        board.setLevel(new level_1.Level(this, this.levels[this.stage - 1], this.stageClear.bind(this)));
        // board.add(this.level);
        // Add the board of game
        this.setBoard(3, board);
        // Add the board of points
        this.setBoard(5, new Layers_1.LayerPoints(this));
        document.addEventListener('click', function () {
            _this.boards[3].level.end();
            _this.stageClear();
            // console.log(this.levelData.length, this.board.cnt)
        });
    };
    ShooterGame.prototype.stageClear = function () {
        var _this = this;
        setTimeout(function () {
            // this.level.end();
            if (_this.stage !== _this.levels.length) {
                _this.setBoard(6, new Layers_1.LayerTitle(_this, 'STAGE CLEAR!', 'Press fire to next stage', _this.nextStage.bind(_this)));
            }
            else {
                _this.winGame();
            }
        }, 1000);
    };
    ShooterGame.prototype.nextStage = function () {
        this.stage++;
        this.boards[6] = null;
        this.boards[3].setLevel(new level_1.Level(this, this.levels[this.stage - 1], this.stageClear.bind(this)));
        // this.boards[3].add(this.level);
        // this.setBoard(3, board);
    };
    ShooterGame.prototype.winGame = function () {
        this.setBoard(3, new Layers_1.LayerTitle(this, 'You win!', 'Press fire to play again', this.playGame.bind(this)));
    };
    ShooterGame.prototype.loseGame = function () {
        this.setBoard(3, new Layers_1.LayerTitle(this, 'You lose!', 'Press fire to play again', this.playGame.bind(this)));
    };
    return ShooterGame;
}(Game_1.Game));
exports.ShooterGame = ShooterGame;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheet = /** @class */ (function () {
    function SpriteSheet() {
        this.map = {};
    }
    SpriteSheet.prototype.load = function (spritesImage, spriteMap, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.map = spriteMap;
            _this.image = new Image();
            _this.image.onload = function () { return resolve(); };
            _this.image.src = spritesImage;
        });
    };
    // Draw a sprite
    SpriteSheet.prototype.draw = function (ctx, sprite, x, y, frame) {
        var s = this.map[sprite];
        if (!frame)
            frame = 0;
        ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(x), Math.floor(y), s.w, s.h);
    };
    return SpriteSheet;
}());
exports.SpriteSheet = SpriteSheet;
var Sprite = /** @class */ (function () {
    function Sprite(game) {
        this.game = game;
    }
    Sprite.prototype.setup = function (name, props) {
        this.name = name;
        this.merge(props);
        this.frame = this.frame || 0;
        this.w = this.game.spriteSheet.map[name].w;
        this.h = this.game.spriteSheet.map[name].h;
    };
    Sprite.prototype.merge = function (props) {
        if (props) {
            for (var prop in props) {
                this[prop] = props[prop];
            }
        }
    };
    Sprite.prototype.draw = function (ctx) {
        this.game.spriteSheet.draw(ctx, this.name, this.x, this.y, this.frame);
    };
    Sprite.prototype.hit = function (damage) {
        this.board.remove(this);
    };
    return Sprite;
}());
exports.Sprite = Sprite;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sprite_1 = __webpack_require__(2);
var ShooterGame_1 = __webpack_require__(1);
var OBJECT_PLAYER = 1, OBJECT_PLAYER_PROJECTILE = 2, OBJECT_ENEMY = 4, OBJECT_ENEMY_PROJECTILE = 8, OBJECT_POWERUP = 16;
exports.OBJECT_ENEMY = OBJECT_ENEMY;
exports.OBJECT_ENEMY_PROJECTILE = OBJECT_ENEMY_PROJECTILE;
function SpriteType(type) {
    return function (target) {
        target.prototype.type = type;
    };
}
var PlayerShip = /** @class */ (function (_super) {
    __extends(PlayerShip, _super);
    function PlayerShip(game, hp) {
        var _this = _super.call(this, game) || this;
        _this.hp = 3;
        _this.game = game;
        _this.hp = hp;
        _this.missiles = 4;
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
    PlayerShip.prototype.step = function (dt) {
        var game = this.game;
        if (game.keys['left']) {
            this.vx = -this.maxVel;
        }
        else if (game.keys['right']) {
            this.vx = this.maxVel;
        }
        else {
            this.vx = 0;
        }
        this.x += this.vx * dt;
        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x > game.width - this.w) {
            this.x = game.width - this.w;
        }
        if (game.keys['up']) {
            this.vy = -this.maxVel;
        }
        else if (game.keys['down']) {
            this.vy = this.maxVel;
        }
        else {
            this.vy = 0;
        }
        this.y += this.vy * dt;
        if (this.y < 0) {
            this.y = 0;
        }
        else if (this.y > game.height - this.h) {
            this.y = game.height - this.h;
        }
        this.reload -= dt;
        if (game.keys['fire'] && this.reload < 0) {
            this.fire();
        }
    };
    PlayerShip.prototype.fire = function () {
        // this.game.keys['fire'] = false;
        this.reload = this.reloadTime;
        this.board.add(new PlayerMissile(this.game, this.x, this.y + this.h / 2));
        this.board.add(new PlayerMissile(this.game, this.x + this.w, this.y + this.h / 2));
        if (this.missiles === 4) {
            this.board.add(new PlayerMissile(this.game, this.x + this.w / 4, this.y + this.h / 2));
            this.board.add(new PlayerMissile(this.game, this.x + this.w / 4 * 3, this.y + this.h / 2));
        }
    };
    PlayerShip.prototype.explode = function () {
        this.board.add(new Explosion(this.game, this.x + this.w / 2, this.y + this.h / 2));
    };
    PlayerShip.prototype.hit = function (damage) {
        var _this = this;
        this.hp -= 1;
        if (this.hp <= 0) {
            if (this.board.remove(this)) {
                this.explode();
                setTimeout(function () {
                    _this.game.loseGame();
                }, 1000);
            }
        }
        // if (this.board.remove(this)) {
        //   this.game.loseGame();
        // }
    };
    PlayerShip = __decorate([
        SpriteType(OBJECT_PLAYER),
        __metadata("design:paramtypes", [ShooterGame_1.ShooterGame, Number])
    ], PlayerShip);
    return PlayerShip;
}(sprite_1.Sprite));
exports.PlayerShip = PlayerShip;
var PlayerMissile = /** @class */ (function (_super) {
    __extends(PlayerMissile, _super);
    function PlayerMissile(game, x, y) {
        var _this = _super.call(this, game) || this;
        _this.setup('missile', { vy: -700, damage: 10 });
        _this.x = x - _this.w / 2;
        _this.y = y - _this.h;
        return _this;
    }
    PlayerMissile.prototype.step = function (dt) {
        this.y += this.vy * dt;
        // Check if this missile hits an enemy
        var target = this.board.collide(this, OBJECT_ENEMY);
        if (target) {
            target.hit(this.damage);
            // Remove this missile
            this.board.remove(this);
            // If this missile is out of screen
        }
        else if (this.y < -this.h) {
            this.board.remove(this);
        }
    };
    return PlayerMissile;
}(sprite_1.Sprite));
exports.PlayerMissile = PlayerMissile;
PlayerMissile.prototype.type = OBJECT_PLAYER_PROJECTILE;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(game, blueprint, override) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.merge(_this.baseParameters);
        _this.setup(blueprint.sprite, blueprint);
        _this.merge(override);
        return _this;
    }
    Enemy.prototype.step = function (dt) {
        this.t += dt;
        // A: base vx, for instance, 50px/s
        this.vx = this.A + this.B * Math.sin(this.C * this.t + this.D);
        this.vy = this.E + this.F * Math.sin(this.G * this.t + this.H);
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        var collision = this.board.collide(this, OBJECT_PLAYER);
        // If this enemy hit playerShip
        if (collision) {
            collision.hit(this.damage);
            this.board.remove(this);
            this.explode();
        }
        if (Math.random() < 0.01 && this.reload <= 0) {
            this.reload = this.reloadTime;
            if (this.missiles === 2) {
                this.board.add(new EnemyMissile(this.game, this.x + this.w - 2, this.y + this.h));
                this.board.add(new EnemyMissile(this.game, this.x + 2, this.y + this.h));
            }
            else {
                this.board.add(new EnemyMissile(this.game, this.x + this.w / 2, this.y + this.h));
            }
        }
        this.reload -= dt;
        if (this.y > this.game.height ||
            this.x < -this.w ||
            this.x > this.game.width) {
            this.board.remove(this);
        }
    };
    Enemy.prototype.explode = function () {
        this.board.add(new Explosion(this.game, this.x + this.w / 2, this.y + this.h / 2));
    };
    Enemy.prototype.hit = function (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            if (this.board.remove(this)) {
                this.game.points += this.points || 100;
                this.explode();
            }
        }
    };
    return Enemy;
}(sprite_1.Sprite));
exports.Enemy = Enemy;
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
var EnemyMissile = /** @class */ (function (_super) {
    __extends(EnemyMissile, _super);
    function EnemyMissile(game, x, y) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.setup('enemy_missile', { vy: 200, damage: 10 });
        _this.x = x - _this.w / 2;
        _this.y = y;
        return _this;
    }
    EnemyMissile.prototype.step = function (dt) {
        this.y += this.vy * dt;
        var collision = this.board.collide(this, OBJECT_PLAYER);
        if (collision) {
            collision.hit(this.damage);
            this.board.remove(this);
            this.board.add(new Explosion(this.game, this.x, this.y));
        }
        else if (this.y > this.game.height) {
            this.board.remove(this);
        }
    };
    return EnemyMissile;
}(sprite_1.Sprite));
exports.EnemyMissile = EnemyMissile;
EnemyMissile.prototype.type = OBJECT_ENEMY_PROJECTILE;
var Explosion = /** @class */ (function (_super) {
    __extends(Explosion, _super);
    function Explosion(game, centerX, centerY) {
        var _this = _super.call(this, game) || this;
        _this.setup('explosion', { frame: 0 });
        _this.x = centerX - _this.w / 2;
        _this.y = centerY - _this.h / 2;
        return _this;
    }
    Explosion.prototype.step = function (dt) {
        this.frame++;
        if (this.frame >= 12) {
            this.board.remove(this);
        }
    };
    return Explosion;
}(sprite_1.Sprite));
exports.Explosion = Explosion;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(14);
__webpack_require__(15);
var ShooterGame_1 = __webpack_require__(1);
var spritesImage = __webpack_require__(19);
var spriteMap = {
    ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
    missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
    enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
    enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
    enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
    enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
    explosion: { sx: 0, sy: 64, w: 64, h: 64, frames: 12 },
    enemy_missile: { sx: 9, sy: 42, w: 3, h: 20, frames: 1 }
};
var enemies = {
    straight_ship: {
        x: 0,
        y: -50,
        sprite: 'enemy_ship',
        health: 10,
        E: 100
    },
    straight_purple: {
        x: 0,
        y: -50,
        sprite: 'enemy_purple',
        health: 10,
        E: 100
    },
    charge_bee: {
        x: 50,
        y: -50,
        sprite: 'enemy_bee',
        health: 10,
        v: function (t) {
            var vy = 2 * t;
        },
    },
    step_ship: {
        x: 0,
        y: -50,
        sprite: 'enemy_ship',
        health: 30,
        B: 150,
        C: 1.2,
        E: 75
    },
    step_bee: {
        x: 0,
        y: -50,
        sprite: 'enemy_bee',
        health: 30,
        B: 150,
        C: 1.2,
        E: 75
    },
    wave_purple: {
        x: 0,
        y: -100,
        sprite: 'enemy_purple',
        health: 10,
        B: 75,
        C: 1,
        E: 100,
        missiles: 2
    },
    circle: {
        x: 250,
        y: -50,
        sprite: 'enemy_circle',
        health: 10,
        A: 0,
        B: -100,
        C: 1,
        E: 20,
        F: 100,
        G: 1,
        H: Math.PI / 2
    },
    circle_purple: {
        x: 250,
        y: -50,
        sprite: 'enemy_purple',
        health: 10,
        A: 0,
        B: -100,
        C: 1,
        E: 20,
        F: 100,
        G: 1,
        H: Math.PI / 2
    },
    circle_bee: {
        x: 250,
        y: -50,
        sprite: 'enemy_bee',
        health: 10,
        A: 0,
        B: -100,
        C: 1,
        E: 20,
        F: 100,
        G: 1,
        H: Math.PI / 2
    },
    wiggle: {
        x: 100,
        y: -50,
        sprite: 'enemy_bee',
        health: 20,
        B: 100,
        C: 4,
        E: 100,
        firePercentage: 0.001,
        missiles: 2
    },
    wiggle_broad: {
        x: 0,
        y: -50,
        sprite: 'enemy_bee',
        health: 20,
        B: 250,
        C: 2.2,
        E: 75
    },
};
var level_1 = [
    // Start,   End, Gap,  Type,   Override
    [0, 4000, 500, 'step_ship'],
    [6000, 13000, 800, 'wave_purple'],
    [10000, 16000, 400, 'circle'],
    [17800, 20000, 500, 'straight_ship', { x: 50 }],
    [18200, 20000, 500, 'straight_ship', { x: 90 }],
    [18200, 20000, 500, 'straight_ship', { x: 10 }],
    [22000, 25000, 400, 'wiggle', { x: 150 }],
    [22000, 25000, 400, 'wiggle', { x: 100 }]
];
var level_2 = [
    [0, 4000, 500, 'wiggle_broad'],
    [5000, 9000, 600, 'circle_purple'],
    [10000, 14000, 400, 'circle'],
    [15000, 19000, 1000, 'straight_purple', { x: 10 }],
    [15100, 19100, 1000, 'straight_purple', { x: 80 }],
    [15000, 19000, 1000, 'straight_purple', { x: 150 }],
    [22000, 25000, 400, 'wiggle', { x: 150 }],
    [22000, 25000, 400, 'wiggle', { x: 100 }]
];
// Bootstrap
var game = new ShooterGame_1.ShooterGame();
window.addEventListener('load', function () {
    setTimeout(function () {
        game.startGame({
            canvasElementId: 'game',
            spritesImage: spritesImage,
            spriteMap: spriteMap,
            enemies: enemies,
            levels: [level_1, level_2, level_1],
            playerHp: 20
        });
    }, 500);
});
if (false) {
    module.hot.accept();
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sprite_1 = __webpack_require__(2);
// Handle Input
var KEY_CODES = {
    32: 'fire',
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
};
var Game = /** @class */ (function () {
    // level?: Level;
    function Game() {
        this.boards = [];
        this.keys = {};
        this.maxTime = 1 / 30;
    }
    Game.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.canvas = document.getElementById(options.canvasElementId);
                        // this.canvas.style.display = 'none';
                        this.playerOffset = 10;
                        this.canvasMultiplier = 1;
                        this.setupMobile();
                        this.width = this.canvas.width;
                        this.height = this.canvas.height;
                        this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
                        if (!this.ctx) {
                            return [2 /*return*/, alert('Please upgrade your browser to play')];
                        }
                        this.setupInput();
                        this.lastTime = new Date().getTime();
                        this.maxTime = 1 / 30;
                        this.loop();
                        if (this.mobile) {
                            this.setBoard(4, new TouchControlsBoard(this));
                        }
                        this.spriteSheet = new sprite_1.SpriteSheet();
                        return [4 /*yield*/, this.spriteSheet.load(options.spritesImage, options.spriteMap)];
                    case 1: 
                    // Load the sprite image
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Game.prototype.setupMobile = function () {
        var container = document.getElementById('container'), hasTouch = !!('ontouchstart' in window), w = window.innerWidth, h = window.innerHeight;
        if (hasTouch) {
            this.mobile = true;
        }
        if (Number(container.style.width) >= 1280 || !hasTouch) {
            return false;
        }
        if (w > h) {
            alert('Please rotate the device and then click OK');
            w = window.innerWidth;
            h = window.innerHeight;
        }
        container.style.height = h * 2 + 'px';
        window.scrollTo(0, 1);
        h = window.innerHeight + 2;
        container.style.height = h + 'px';
        container.style.width = w + 'px';
        container.style.padding = '0';
        if (h >= this.canvas.height * 1.75 || w >= this.canvas.height * 1.75) {
            this.canvasMultiplier = 2;
            this.canvas.width = w / 2;
            this.canvas.height = h / 2;
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';
        }
        else {
            this.canvas.width = w;
            this.canvas.height = h;
        }
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.top = '0px';
        this.canvas.style.display = '';
    };
    Game.prototype.setupInput = function () {
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
    };
    // Change an active game board
    Game.prototype.setBoard = function (num, board) {
        this.boards[num] = board;
    };
    Game.prototype.loop = function () {
        // Game Loop
        var curTime = new Date().getTime();
        requestAnimationFrame(this.loop.bind(this));
        var dt = (curTime - this.lastTime) / 1000;
        if (dt > this.maxTime) {
            dt = this.maxTime;
        }
        // Step and draw the boards one by one:
        try {
            for (var i = 0, len = this.boards.length; i < len; i++) {
                if (this.boards[i]) {
                    // Move and detect collisions
                    this.boards[i].step(dt);
                    this.boards[i].draw(this.ctx);
                }
            }
        }
        catch (e) {
            console.log(e.stack);
        }
        this.lastTime = curTime;
    };
    return Game;
}());
exports.Game = Game;
// singleton pattern??
var GameBoard = /** @class */ (function () {
    function GameBoard(game) {
        this.game = game;
        // The current list of objects/sprites
        this.objects = [];
        // Counts of objects with different types
        this.counts = {};
    }
    GameBoard.prototype.setLevel = function (level) {
        this.level = level;
        level.board = this;
    };
    // Add a new object to the object list
    GameBoard.prototype.add = function (obj) {
        obj.board = this;
        this.objects.push(obj);
        this.counts[obj.type] = (this.counts[obj.type] || 0) + 1;
        return obj;
    };
    // Mark an object for removal
    GameBoard.prototype.remove = function (obj) {
        var idx = this.removed.indexOf(obj);
        if (idx === -1) {
            this.removed.push(obj);
            return true;
        }
        else {
            return false;
        }
    };
    // Reset the list of removed objects
    GameBoard.prototype.resetRemoved = function () {
        this.removed = [];
    };
    // Actually remove the objects marked for removal from 'objects'
    GameBoard.prototype.finalizeRemoved = function () {
        for (var i = 0, len = this.removed.length; i < len; i++) {
            var idx = this.objects.indexOf(this.removed[i]);
            if (idx !== -1) {
                this.counts[this.removed[i].type]--;
                this.objects.splice(idx, 1);
            }
        }
    };
    // Call the same method on all current objects
    // player, level, enemies
    GameBoard.prototype.iterate = function (funcName, param) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, len = this.objects.length; i < len; i++) {
            var obj = this.objects[i];
            obj[funcName].apply(obj, args);
        }
    };
    // Find the first object for which func is true
    GameBoard.prototype.detect = function (func) {
        for (var i = 0, len = this.objects.length; i < len; i++) {
            if (func(this.objects[i])) {
                return this.objects[i];
            }
        }
        return false;
    };
    // Call step on all objects and then delete
    // any object that have been marked for removal
    GameBoard.prototype.step = function (dt) {
        this.resetRemoved();
        if (this.level) {
            this.level.step(dt);
        }
        // Every object steps
        this.iterate('step', dt);
        this.finalizeRemoved();
    };
    // Draw all the objects
    GameBoard.prototype.draw = function (ctx) {
        this.iterate('draw', ctx);
    };
    // Check for a collision between the
    // bounding rects of two objects
    GameBoard.prototype.overlap = function (o1, o2) {
        return !(o1.y + o1.h - 1 < o2.y ||
            o1.y > o2.y + o2.h - 1 ||
            o1.x + o1.w - 1 < o2.x ||
            o1.x > o2.x + o2.w - 1);
    };
    // Find the first object that collides with obj
    // match against an optional type
    GameBoard.prototype.collide = function (obj, spriteType) {
        var self = this;
        return this.detect(function (target) {
            if (obj != target) {
                var col = (!spriteType || target.type & spriteType) &&
                    self.overlap(obj, target);
                return col ? target : false;
            }
        });
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
var TouchControlsBoard = /** @class */ (function () {
    // objects: any[];
    function TouchControlsBoard(game) {
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
    TouchControlsBoard.prototype.drawSquare = function (ctx, x, y, txt, on) {
        ctx.globalAlpha = on ? 0.9 : 0.6;
        ctx.fillStyle = '#CCC';
        // Draw a square
        ctx.fillRect(x, y, this.blockWidth, this.blockWidth);
        ctx.fillStyle = '#FFF';
        ctx.globalAlpha = 1.0;
        ctx.font = 'bold ' + 3 * this.unitWidth / 4 + 'px arial';
        var txtSize = ctx.measureText(txt);
        ctx.fillText(txt, x + this.blockWidth / 2 - txtSize.width / 2, y + 3 * this.blockWidth / 4 + 5);
    };
    TouchControlsBoard.prototype.draw = function (ctx) {
        ctx.save();
        var yLoc = this.game.height - this.unitWidth;
        // Draw left button
        this.drawSquare(ctx, this.gutterWidth, yLoc, '\u25C0', this.game.keys['left']);
        // Draw right button
        this.drawSquare(ctx, this.unitWidth + this.gutterWidth, yLoc, '\u25B6', this.game.keys['right']);
        // Draw fire button
        this.drawSquare(ctx, 4 * this.unitWidth, yLoc, 'A', this.game.keys['fire']);
        ctx.restore();
    };
    TouchControlsBoard.prototype.step = function (dt) { };
    TouchControlsBoard.prototype.trackTouch = function (e) {
        var touch, x, y;
        var game = this.game;
        e.preventDefault();
        game.keys['left'] = false;
        game.keys['right'] = false;
        for (var i = 0; i < e.targetTouches.length; i++) {
            touch = e.targetTouches[i];
            x = touch.pageX / game.canvasMultiplier - game.canvas.offsetLeft;
            y = touch.pageY / game.canvasMultiplier - game.canvas.offsetTop;
            console.log(y);
            if (x < this.unitWidth && y > game.height - this.unitWidth) {
                game.keys['left'] = true;
            }
            if (x > this.unitWidth &&
                x < 2 * this.unitWidth &&
                y > game.height - this.unitWidth) {
                game.keys['right'] = true;
            }
        }
        if (e.type === 'touchstart' || e.type === 'touchend') {
            for (i = 0; i < e.changedTouches.length; i++) {
                touch = e.changedTouches[i];
                x = touch.pageX / game.canvasMultiplier - game.canvas.offsetLeft;
                y = touch.pageY / game.canvasMultiplier - game.canvas.offsetTop;
                if (x > 4 * this.unitWidth && y > game.height - this.unitWidth) {
                    game.keys['fire'] = e.type === 'touchstart';
                }
            }
        }
    };
    return TouchControlsBoard;
}());
exports.TouchControlsBoard = TouchControlsBoard;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LayerStarfield = /** @class */ (function () {
    function LayerStarfield(game, speed, opacity, numStars, clear) {
        this.speed = speed;
        // Set up the offscreen canvas
        this.stars = document.createElement('canvas');
        this.stars.width = game.width;
        this.stars.height = game.height;
        var starCtx = this.stars.getContext('2d');
        this.offset = 0;
        // If the clear option is set,
        // make the background black instead of transparent
        if (clear) {
            starCtx.fillStyle = '#000';
            starCtx.fillRect(0, 0, this.stars.width, this.stars.height);
        }
        // Now draw a bunch of random 2 pixel
        // rectangles onto the offscreen canvas
        starCtx.fillStyle = '#FFF';
        starCtx.globalAlpha = opacity;
        for (var i = 0; i < numStars; i++) {
            starCtx.fillRect(Math.floor(Math.random() * this.stars.width), Math.floor(Math.random() * this.stars.height), 2, 2);
        }
    }
    // This method is called every frame
    // to draw the starfield onto the canvas
    LayerStarfield.prototype.draw = function (ctx) {
        var intOffset = Math.floor(this.offset);
        var remaining = this.stars.height - intOffset;
        // Draw the top half of the starfield
        if (intOffset > 0) {
            ctx.drawImage(this.stars, 0, remaining, this.stars.width, intOffset, 0, 0, this.stars.width, intOffset);
        }
        // Draw the bottom half of the starfield
        if (remaining > 0) {
            ctx.drawImage(this.stars, 0, 0, this.stars.width, remaining, 0, intOffset, this.stars.width, remaining);
        }
    };
    // This method is called to update
    // the starfield
    LayerStarfield.prototype.step = function (dt) {
        this.offset += dt * this.speed;
        this.offset = this.offset % this.stars.height;
    };
    return LayerStarfield;
}());
exports.LayerStarfield = LayerStarfield;
var LayerTitle = /** @class */ (function () {
    function LayerTitle(game, title, subtitle, callback) {
        this.game = game;
        this.title = title;
        this.subtitle = subtitle;
        this.callback = callback;
        this.up = false;
    }
    LayerTitle.prototype.step = function (dt) {
        if (!this.game.keys['fire']) {
            this.up = true;
        }
        else {
        }
        if (this.up && this.game.keys['fire'] && this.callback) {
            this.callback();
        }
    };
    LayerTitle.prototype.draw = function (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 40px bangers';
        var measure = ctx.measureText(this.title);
        ctx.fillText(this.title, this.game.width / 2 - measure.width / 2, this.game.height / 2);
        ctx.font = 'bold 20px bangers';
        var measure2 = ctx.measureText(this.subtitle);
        ctx.fillText(this.subtitle, this.game.width / 2 - measure2.width / 2, this.game.height / 2 + 40);
    };
    return LayerTitle;
}());
exports.LayerTitle = LayerTitle;
var LayerPoints = /** @class */ (function () {
    function LayerPoints(game) {
        this.pointsLength = 8;
        this.game = game;
        game.points = 0;
        this.pointsLength = 8;
    }
    LayerPoints.prototype.draw = function (ctx) {
        // Save the current state of ctx
        ctx.save();
        ctx.font = 'bold 18px arial';
        ctx.fillStyle = '#FFFFFF';
        var txt = '' + this.game.points;
        var i = this.pointsLength - txt.length, zeros = '';
        while (i-- > 0) {
            zeros += '0';
        }
        var stageText = 'Stage-' + this.game.stage;
        var measure = ctx.measureText(stageText).width;
        // console.log(measure);
        ctx.fillText(zeros + txt, 10, 20);
        ctx.fillText('HP ' + this.game.player.hp, this.game.width - 50, 20);
        ctx.fillText(stageText, this.game.width / 2 - measure / 2, 20);
        ctx.restore();
    };
    LayerPoints.prototype.step = function (dt) { };
    return LayerPoints;
}());
exports.LayerPoints = LayerPoints;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sprites_1 = __webpack_require__(3);
var Level = /** @class */ (function () {
    function Level(game, levelData, callback) {
        this.game = game;
        this.levelData = [];
        for (var i = 0; i < levelData.length; i++) {
            this.levelData.push(Object.create(levelData[i]));
        }
        this.time = 0;
        this.callback = callback;
        this.over = false;
    }
    Level.prototype.step = function (dt) {
        if (this.over) {
            return;
        }
        var enemies = this.game.options.enemies;
        var idx = 0, remove = [], curWave = null;
        // Update the current time offset
        this.time += dt * 1000;
        //   Start, End,  Gap, Type,   Override
        // [ 0,     4000, 500, 'step', { x: 100 } ]
        while ((curWave = this.levelData[idx]) && curWave[0] < this.time + 2000) {
            // Check if we've passed the end time
            if (this.time > curWave[1]) {
                remove.push(curWave);
            }
            else if (curWave[0] < this.time) {
                // Get the enemy definition blueprint
                var enemy = enemies[curWave[3]], override = curWave[4];
                // Add a new enemy with the blueprint and override
                this.board.add(new sprites_1.Enemy(this.game, enemy, override));
                // Increment the start time by the gap
                curWave[0] += curWave[2];
            }
            idx++;
        }
        // Remove any objects from the levelData that have passed
        for (var i = 0, len = remove.length; i < len; i++) {
            var remIdx = this.levelData.indexOf(remove[i]);
            if (remIdx != -1)
                this.levelData.splice(remIdx, 1);
        }
        // If there are no more enemies on the board or in
        // levelData, this level is done
        if (this.levelData.length === 0 &&
            this.board.counts[sprites_1.OBJECT_ENEMY] === 0) {
            this.end();
        }
    };
    Level.prototype.end = function () {
        var _this = this;
        this.over = true;
        // console.log(this.board)
        // Remove all objects except the player ship from the gameBoard
        this.board.objects.forEach(function (a) {
            if (a instanceof sprites_1.PlayerShip === false) {
                _this.board.remove(a);
            }
        });
        // this.board.remove(this);
        if (this.callback)
            this.callback();
    };
    Level.prototype.draw = function (ctx) { };
    return Level;
}());
exports.Level = Level;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprites.6b1347de.png";

/***/ })
/******/ ]);