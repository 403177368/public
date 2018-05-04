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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Bodies.polygon
Bodies.rectangle
World.add
*/
// Matter.js module aliases
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Constraint = Matter.Constraint;
var Composite = Matter.Composite;
var Composites = Matter.Composites;
var MouseConstraint = Matter.MouseConstraint;
var Events = Matter.Events;

function App() {
	this.w = 1000;
	this.h = 600;

	this.imgDir = './image/';

	this.engine = null;
	this.runner = null;

	this.mouseConstraint = null;

	this.button = null;

	this.addToWorld = [];

	this.init();
}

App.prototype = {
	init: function init() {
		this.createEngine();
		this.createBorders();
		this.createRect(0, 0);
		this.createMouseConstraint();
		this.createObjects();
		this.render();
		this.listen();
		this.runner = Engine.run(this.engine);
	},
	createEngine: function createEngine() {
		this.engine = Engine.create({
			render: {
				element: document.body,
				options: {
					width: this.w,
					height: this.h,
					wireframes: false,
					background: 'black' || '#1A54FE'
				}
			}
		});
		this.engine.world.gravity.y = 1;
		this.engine.world.gravity.x = 0;
		this.engine.world.gravity.isPoint = false;
		console.log(this.engine);
	},
	createBorders: function createBorders() {
		var border = 50;
		var borderColor = 'grey' || '#0134CB';
		var halfBorder = border / 2;
		var borders = [Bodies.rectangle(this.w / 2, halfBorder, this.w + border, border, {
			isStatic: true,
			render: {
				fillStyle: borderColor,
				strokeStyle: 'transparent'
			}
		}), Bodies.rectangle(this.w / 2, this.h - halfBorder, this.w + border, border, {
			isStatic: true,
			render: {
				fillStyle: borderColor,
				strokeStyle: 'transparent'
			}
		}), Bodies.rectangle(halfBorder, this.h / 2, border, this.h + border, {
			isStatic: true,
			render: {
				fillStyle: borderColor,
				strokeStyle: 'transparent'
			}
		}), Bodies.rectangle(this.w - halfBorder, this.h / 2, border, this.h + border, {
			isStatic: true,
			render: {
				fillStyle: borderColor,
				strokeStyle: 'transparent'
			}
		})];
		this.addToWorld = this.addToWorld.concat(borders);
	},
	createMouseConstraint: function createMouseConstraint() {
		this.mouseConstraint = MouseConstraint.create(this.engine, {
			constraint: {
				stiffness: 1,
				render: {
					lineWidth: 15,
					strokeStyle: 'orange',
					visible: true
				}
			}
		});
		World.add(this.engine.world, this.mouseConstraint);
	},
	createRect: function createRect(x, y) {
		var rect = Bodies.rectangle(x, y, 100, 25, {
			render: {
				fillStyle: 'transparent',
				strokeStyle: 'blue',
				lineWidth: 5
			},
			_class: 'rect',
			density: 1,
			isStatic: false,
			friction: 1,
			frictionStatic: 0.01,
			frictionAir: 0.01,
			restitution: 0.5
		});
		World.add(this.engine.world, rect);
	},
	createBall: function createBall(x, y) {
		var ball = Bodies.polygon(x, y, 100, 70, {
			render: {
				fillStyle: 'red',
				strokeStyle: 'white',
				lineWidth: 3,
				opacity: 0.8
			},
			density: Math.random() * 0.1,
			isStatic: false,
			restitution: Math.random() * 1
		});
		World.add(this.engine.world, ball);
	},
	createObjects: function createObjects() {
		this.button = Bodies.rectangle(this.w / 2, this.h / 2, 200, 50, {
			render: {
				fillStyle: 'grey',
				//strokeStyle: 'blue',
				lineWidth: 0
			},
			id: 'button',
			density: 1,
			isStatic: false,
			friction: 1,
			frictionStatic: 100,
			frictionAir: 1,
			restitution: 1
		});
		var trip = Bodies.polygon(this.w / 2, this.h / 2, 100, 70, {
			render: {
				fillStyle: makePattern(),
				strokeStyle: 'white',
				lineWidth: 3,
				opacity: 0.8,
				sprite: {
					texture: __webpack_require__(27)(this.imgDir + 'trip.png'),
					xScale: 0.5,
					yScale: 0.5
				}
			},
			id: 'trip',
			density: Math.random() * 0.1,
			isStatic: false,
			restitution: Math.random() * 1
		});
		var Prague = Bodies.polygon(500, 100, 100, 50, {
			render: {
				fillStyle: makePattern(),
				strokeStyle: 'white',
				lineWidth: 3,
				sprite: {
					texture: __webpack_require__(29)(this.imgDir + 'Prague.png')
				}
			},
			density: Math.random() * 0.1,
			isStatic: false,
			restitution: Math.random() * 1
		});
		var Yunnan = Bodies.polygon(500, 100, 100, 50, {
			render: {
				fillStyle: makePattern(),
				strokeStyle: 'white',
				lineWidth: 3,
				sprite: {
					texture: __webpack_require__(31)(this.imgDir + 'Yunnan.png')
				}
			},
			density: Math.random() * 0.1,
			isStatic: false,
			restitution: Math.random() * 1
		});
		var France = Bodies.polygon(500, 100, 100, 50, {
			render: {
				fillStyle: makePattern(),
				strokeStyle: 'white',
				lineWidth: 3,
				sprite: {
					texture: __webpack_require__(33)(this.imgDir + 'France.png')
				}
			},
			density: Math.random() * 0.1,
			isStatic: false,
			restitution: Math.random() * 1
		});
		this.addToWorld.push(trip);
		this.addToWorld.push(Prague);
		this.addToWorld.push(Yunnan);
		this.addToWorld.push(France);

		var chain1 = Constraint.create({
			bodyA: trip,
			bodyB: Prague,
			stiffness: 0.001,
			length: 300,
			render: {
				strokeStyle: '#50BDD9',
				lineWidth: 1
			}
		});
		var chain2 = Constraint.create({
			bodyA: trip,
			bodyB: Yunnan,
			stiffness: 0.01,
			length: 400,
			render: {
				strokeStyle: '#50BDD9',
				lineWidth: 1
			}
		});
		var chain3 = Constraint.create({
			bodyA: Yunnan,
			bodyB: France,
			stiffness: 0.01,
			length: 400,
			render: {
				strokeStyle: '#50BDD9',
				lineWidth: 1
			}
		});

		this.addToWorld.push(chain1);
		this.addToWorld.push(chain2);
		this.addToWorld.push(chain3);

		console.log(trip);
		console.log(chain1);

		setInterval(function () {
			trip.angle = 0;
			Prague.angle = 0;
			Yunnan.angle = 0;
			France.angle = 0;
		}, 10);
		this.addToWorld.push(this.button);
	},
	listen: function listen() {
		var self = this;
		Events.on(this.mouseConstraint, 'startdrag', function (e) {
			console.log(e);
			if (e.body.id === 'trip') {};
		});
		self.listenClick();
	},
	listenClick: function listenClick() {
		var self = this;
		var x1, y1, x2, y2;
		Events.on(this.mouseConstraint, 'mousedown', function (e) {
			x1 = e.mouse.mousedownPosition.x;
			y1 = e.mouse.mousedownPosition.y;
		});
		Events.on(this.mouseConstraint, 'mouseup', function (e) {
			x2 = e.mouse.mouseupPosition.x;
			y2 = e.mouse.mouseupPosition.y;
			if (x1 === x2 && y1 === y2) {
				console.log(e);
				self.createRect(x1, y1);
			};
			x1 = x2 = y1 = y2 = null;
		});
	},
	render: function render() {
		World.add(this.engine.world, this.addToWorld);
	}
};

new App();

var ropeRenderStyle = {
	fillStyle: '#fff',
	strokeStyle: '#fff',
	lineWidth: 1

	/**
  * @return {[type]}
  */
};function createObjects() {
	var button = Bodies.rectangle($w / 2, $h / 2, 200, 50, {
		render: {
			fillStyle: 'orange',
			//strokeStyle: 'blue',
			lineWidth: 0
		},
		density: 100000,
		isStatic: false,
		friction: 1,
		frictionStatic: 100,
		frictionAir: 1,
		restitution: 1
	});
	addToWorld.push(button);

	var trip = Bodies.polygon($w / 2, $h / 2, 100, 70, {
		render: {
			fillStyle: makePattern(),
			strokeStyle: 'white',
			lineWidth: 3,
			opacity: 0.8,
			sprite: {
				texture: $imgDir + 'trip.png',
				xScale: 0.8,
				yScale: 0.8
			}
		},
		id: 'trip',
		density: Math.random() * 0.1,
		isStatic: false,
		restitution: Math.random() * 1
	});
	Events.on(mouseConstraint, 'startdrag', function (e) {
		if (e.body.id === 'trip') {
			console.log('yeah!!!');
		};
	});
	var Prague = Bodies.polygon(500, 100, 100, 50, {
		render: {
			fillStyle: makePattern(),
			strokeStyle: 'white',
			lineWidth: 3,
			sprite: {
				texture: $imgDir + 'Prague.png'
			}
		},
		density: Math.random() * 0.1,
		isStatic: false,
		restitution: Math.random() * 1
	});
	var Yunnan = Bodies.polygon(500, 100, 100, 50, {
		render: {
			fillStyle: makePattern(),
			strokeStyle: 'white',
			lineWidth: 3,
			sprite: {
				texture: $imgDir + 'Yunnan.png'
			}
		},
		density: Math.random() * 0.1,
		isStatic: false,
		restitution: Math.random() * 1
	});
	var France = Bodies.polygon(500, 100, 100, 50, {
		render: {
			fillStyle: makePattern(),
			strokeStyle: 'white',
			lineWidth: 3,
			sprite: {
				texture: $imgDir + 'France.png'
			}
		},
		density: Math.random() * 0.1,
		isStatic: false,
		restitution: Math.random() * 1
	});
	addToWorld.push(trip);
	addToWorld.push(Prague);
	addToWorld.push(Yunnan);
	addToWorld.push(France);

	var chain1 = Constraint.create({
		bodyA: trip,
		bodyB: Prague,
		stiffness: 0.001,
		length: 300,
		render: {
			strokeStyle: '#50BDD9',
			lineWidth: 1
		}
	});
	var chain2 = Constraint.create({
		bodyA: trip,
		bodyB: Yunnan,
		stiffness: 0.01,
		length: 400,
		render: {
			strokeStyle: '#50BDD9',
			lineWidth: 1
		}
	});
	var chain3 = Constraint.create({
		bodyA: Yunnan,
		bodyB: France,
		stiffness: 0.01,
		length: 400,
		render: {
			strokeStyle: '#50BDD9',
			lineWidth: 1
		}
	});

	addToWorld.push(chain1);
	addToWorld.push(chain2);
	addToWorld.push(chain3);

	console.log(trip);
	console.log(chain1);

	setInterval(function () {
		trip.angle = 0;
		Prague.angle = 0;
		Yunnan.angle = 0;
		France.angle = 0;
	}, 10);
	// var group = Body.nextGroup(true);

	//    var segments = Math.random() * 10 + 5 >> 0;
	//    var ropeA = Composites.stack(trip.position.x, trip.bounds.max.y, 1, segments, 20, 20, function(x, y) {
	//      return Bodies.rectangle(x, y, 4, 4, {
	//        collisionFilter: {
	//          group: group
	//        },
	//        render: ropeRenderStyle
	//      });
	//    });
	//    Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
	//      stiffness: 0.8,
	//      length: 20,
	//      render: ropeRenderStyle
	//    });

}

/*
// create random poly's and a ground
// polygons count
var polygonsNumber = Math.random() * 10 + 5 >> 0;
var prevPoly;
// Create the polygons.
for (var i = 0; i < polygonsNumber; i++) {
  var polyRadius = Math.random() * 40 + 40 >> 0;
  var polySides = Math.random() * 12 + 3 >> 0;
  var x = Math.random() * (w - polyRadius * 2) + polyRadius >> 0;
  var y = Math.random() * (h / 2 - polyRadius * 2) + polyRadius >> 0;
  var isStatic = Math.random() * 1 < 0.2;

  var poly = Bodies.polygon(x, y, polySides, polyRadius, {
    render: {
      fillStyle: isStatic ? '#0134CB' : makePattern(),
      strokeStyle: isStatic ? 'transparent' : '#fff',
      lineWidth: Math.random() * 5 + 2 >> 0
    },
    density: Math.random() * 0.1,
    isStatic: isStatic,
    restitution: Math.random() * 1
  });
  addToWorld.push(poly);

  //add rope if last poly was static
  if (prevPoly && prevPoly.isStatic && !isStatic) {
    var group = Body.nextGroup(true);

    var segments = 1||Math.random() * 10 + 5 >> 0;
    var ropeA = Composites.stack(prevPoly.position.x, prevPoly.bounds.max.y, 1, segments, 20, 20, function(x, y) {
      return Bodies.rectangle(x, y, 4, 4, {
        collisionFilter: {
          group: group
        },
        render: ropeRenderStyle
      });
    });
    Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
      stiffness: 1.6,
      length: 20,
      render: ropeRenderStyle
    });

    var newPosition = ropeA.bodies[ropeA.bodies.length - 1].position;
    Body.setPosition(poly, {
      x: newPosition.x,
      y: newPosition.y + polyRadius + 4
    });
    poly.collisionFilter.group = group;
    prevPoly.collisionFilter.group = group;

    var connectA = Constraint.create({
      bodyA: prevPoly,
      bodyB: ropeA.bodies[0],
      pointB: {
        x: -2,
        y: 0
      },
      render: ropeRenderStyle,
      stiffness: 0.8
    });
    var connectB = Constraint.create({
      bodyA: poly,
      bodyB: ropeA.bodies[ropeA.bodies.length - 1],
      render: ropeRenderStyle,
      stiffness: 0.8
    });
    addToWorld.push(ropeA);
    addToWorld.push(connectA);
    addToWorld.push(connectB);

  }

  prevPoly = poly;
}
*/

// gravity variety
// function ranGrav() {
//   engine.world.gravity.y = Math.random() * 2 - 1;
//   engine.world.gravity.x = Math.random() * 2 - 1;
//   var nextRanInc = Math.random() * 2000 + 1000;
//   setTimeout(ranGrav, nextRanInc);
// }
// setTimeout(ranGrav, 2000);

// patterns please
function makePattern(pWidth) {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = canvas.height = pWidth || 10 + Math.random() * 20 >> 0;
	ctx.fillStyle = '#fff';
	if (Math.random() * 2 < 1) {
		ctx.arc(canvas.width / 2 >> 0, canvas.width / 2 >> 0, canvas.width * (Math.random() * 0.5), 0, 2 * Math.PI);
		ctx.fill();
	} else {
		var half = canvas.width / 2;
		var lineHeight = Math.random() * canvas.width >> 0;
		ctx.translate(half, half);
		ctx.rotate(Math.random() * 90 * Math.PI / 180);
		ctx.fillRect(-canvas.width, -lineHeight / 2 >> 0, canvas.width * 2, lineHeight);
	}
	return ctx.createPattern(canvas, 'repeat');
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image/trip.png": 28
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 27;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trip.39058a9e.png";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image/Prague.png": 30
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Prague.5b91567a.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image/Yunnan.png": 32
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Yunnan.8c6dcb0b.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image/France.png": 34
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/France.0c763524.png";

/***/ })

/******/ });