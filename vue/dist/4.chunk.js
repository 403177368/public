webpackJsonp([4],{

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	props: ['act'],
	data: function data() {
		return {
			papers: [{
				status: ''
			}, {
				status: ''
			}],

			moveCount: 0,
			canScroll: true,

			X0: null,
			X1: null,
			Y0: null,
			Y1: null
		};
	},
	mounted: function mounted() {
		var self = this;
		self.papers[0].status = 'next';
		self.papers[1].status = 'first';
	},
	methods: {
		touchstart: function touchstart(e) {
			this.moveCount = 0;
			this.canScroll = true;
			this.X0 = e.changedTouches[0].pageX;
			this.Y0 = e.changedTouches[0].pageY;
			console.log(this.X0);
		},
		touchmove: function touchmove(e) {
			this.moveCount++;
			if (this.moveCount === 1) {
				this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
				var dY = this.Y1 - this.Y0;
				var dX = this.X1 - this.X0;
				if (Math.abs(dY) > Math.abs(dX)) {
					this.canScroll = true;
				} else {
					this.canScroll = false;
				}
			};
			if (!this.canScroll) {
				e.preventDefault();
			}
		},
		touchend: function touchend(e) {
			if (!this.canScroll) {
				this.X1 = e.changedTouches[0].pageX;
				var dX = this.X1 - this.X0;
				if (dX < 0) {
					this.switch__();
				}
			}
		},
		switch__: function switch__() {
			if (this.papers[0].status === 'enter') {
				this.papers[0].status = 'leave';
				this.papers[1].status = 'enter';
			} else {
				this.papers[0].status = 'enter';
				this.papers[1].status = 'leave';
			}
		}
	}
};

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CardsTwo",
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, _vm._l((_vm.papers), function(a, i) {
    return _c('div', {
      staticClass: "paper__",
      class: a.status
    })
  }))
},staticRenderFns: []}

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	mounted: function mounted() {

		var SmoothTrail = function SmoothTrail(c, cw, ch) {

			this.init = function () {
				this.loop();
			};

			this.c = c;
			this.ctx = c.getContext('2d');
			this.cw = cw;
			this.ch = ch;
			this.mx = 0;
			this.my = 0;

			//trail
			this.trail = [];
			this.maxTrail = 200;
			this.mouseDown = false;

			this.ctx.lineWidth = .1;
			this.ctx.lineJoin = 'round';

			this.radius = 1;
			this.speed = 0.4;
			this.angle = 0;
			this.arcx = 0;
			this.arcy = 0;
			this.growRadius = true;
			this.seconds = 0;
			this.milliseconds = 0;
		};

		SmoothTrail.prototype = {

			rand: function rand(min, max) {
				return ~~(Math.random() * (max - min + 1) + min);
			},
			hitTest: function hitTest(x1, y1, w1, h1, x2, y2, w2, h2) {
				return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
			},

			createPoint: function createPoint(x, y) {
				this.trail.push({
					x: x,
					y: y
				});
			},

			updateTrail: function updateTrail() {

				if (this.trail.length < this.maxTrail) {
					this.createPoint(this.arcx, this.arcy);
				}

				if (this.trail.length >= this.maxTrail) {
					this.trail.splice(0, 1);
				}
			},

			updateArc: function updateArc() {
				this.arcx = this.cw / 2 + Math.sin(this.angle) * this.radius;
				this.arcy = this.ch / 2 + Math.cos(this.angle) * this.radius;
				var d = new Date();
				this.seconds = d.getSeconds();
				this.milliseconds = d.getMilliseconds();
				this.angle += this.speed * (this.seconds + 1 + this.milliseconds / 1000);

				if (this.radius <= 1) {
					this.growRadius = true;
				}
				if (this.radius >= 200) {
					this.growRadius = false;
				}

				if (this.growRadius) {
					this.radius += 1;
				} else {
					this.radius -= 1;
				}
			},

			renderTrail: function renderTrail() {
				var i = this.trail.length;

				this.ctx.beginPath();
				while (i--) {
					var point = this.trail[i];
					var nextPoint = i == this.trail.length ? this.trail[i + 1] : this.trail[i];

					var c = (point.x + nextPoint.x) / 2;
					var d = (point.y + nextPoint.y) / 2;
					this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
				};
				this.ctx.strokeStyle = 'hsla(' + this.rand(170, 300) + ', 100%, ' + this.rand(50, 75) + '%, 1)';
				this.ctx.stroke();
				this.ctx.closePath();
			},

			clearCanvas: function clearCanvas() {
				//this.ctx.globalCompositeOperation = 'source-over';
				//this.ctx.clearRect(0,0,this.cw,this.ch);

				this.ctx.globalCompositeOperation = 'destination-out';
				this.ctx.fillStyle = 'rgba(0,0,0,.1)';
				this.ctx.fillRect(0, 0, this.cw, this.ch);
				this.ctx.globalCompositeOperation = 'lighter';
			},
			loop: function loop() {
				var _this = this;
				var loopIt = function loopIt() {
					requestAnimationFrame(loopIt, _this.c);
					_this.clearCanvas();
					_this.updateArc();
					_this.updateTrail();
					_this.renderTrail();
				};
				loopIt();
			}

		};

		/*=============================================================================*/
		/* Check Canvas Support
  /*=============================================================================*/
		var isCanvasSupported = function isCanvasSupported() {
			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		};

		/*=============================================================================*/
		/* Setup requestAnimationFrame
  /*=============================================================================*/
		var setupRAF = function setupRAF() {
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
			};

			if (!window.requestAnimationFrame) {
				window.requestAnimationFrame = function (callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			};

			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function (id) {
					clearTimeout(id);
				};
			};
		};

		/*=============================================================================*/
		/* Define Canvas and Initialize
  /*=============================================================================*/
		if (isCanvasSupported) {
			// var c = document.createElement('canvas');
			// c.width = 400;
			// c.height = 400;			
			// var cw = c.width;
			// var ch = c.height;	
			// document.body.appendChild(c);
			var c = document.getElementById('scope');
			var cw = c.width;
			var ch = c.height;
			var cl = new SmoothTrail(c, cw, ch);

			setupRAF();
			cl.init();
		}
	}
};

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "_space"
  }, [_c('canvas', {
    attrs: {
      "id": "scope",
      "width": "400",
      "height": "400"
    }
  })])
}]}

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {};
	}
};

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Wave"
  }, [_c('svg', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px"
    }
  }, [_c('symbol', {
    attrs: {
      "id": "wave"
    }
  }, [_c('path', {
    attrs: {
      "d": "M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
    }
  }), _c('path', {
    attrs: {
      "d": "M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
    }
  }), _c('path', {
    attrs: {
      "d": "M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
    }
  }), _c('path', {
    attrs: {
      "d": "M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
    }
  })])]), _c('svg', {
    staticClass: "WATER",
    attrs: {
      "viewBox": "0 0 560 20"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#wave"
    }
  })]), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "water",
    attrs: {
      "id": "water"
    }
  }, [_c('svg', {
    staticClass: "wave wave_back",
    attrs: {
      "viewBox": "0 0 560 20"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#wave"
    }
  })]), _c('svg', {
    staticClass: "wave wave_front",
    attrs: {
      "viewBox": "0 0 560 20"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#wave"
    }
  })])])])])
},staticRenderFns: []}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  "data-v-4f392ae4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(141)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  "data-v-5b3b2ba1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(159)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(161),
  /* scopeId */
  "data-v-597d401e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});