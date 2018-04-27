webpackJsonp([5],{

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
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

exports.default = {
	data: function data() {
		return {
			rotationRate: {
				alpha: '111'
			},
			rotateX: 0,
			rotateY: 0,
			recalibrating: false
		};
	},
	created: function created() {
		var self = this;
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', self.handler.bind(self), false);
		} else {
			console.log('');
		}
	},
	methods: {
		recalibrate: function recalibrate(e) {
			var _this = this;

			this.recalibrating = true;
			this.rotateX = 0;
			this.rotateY = 0;
			setTimeout(function () {
				_this.recalibrating = false;
			}, 1000);
		},
		handler: function handler(e) {
			if (!this.recalibrating) {
				this.rotationRate.alpha = e.rotationRate.alpha;

				var nextX = this.rotateX + e.rotationRate.alpha * 3;
				if (nextX >= 45) {
					nextX = 45;
				} else if (nextX <= -45) {
					nextX = -45;
				}
				this.rotateX = nextX;

				var nextY = this.rotateY + e.rotationRate.beta * 3;
				if (nextY >= 45) {
					nextY = 45;
				} else if (nextY <= -45) {
					nextY = -45;
				}
				this.rotateY = nextY;
			}
		}
	}
};

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "space"
  }, [_c('div', {
    staticClass: "square",
    class: _vm.recalibrating ? 'recalibrating' : '',
    style: ('transform: rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);-webkit-transform:rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);'),
    on: {
      "click": _vm.recalibrate
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.rotationRate.alpha)), _c('br'), _vm._v("\n\t\t" + _vm._s(_vm.rotateY) + "\n\t")])])
},staticRenderFns: []}

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var swiper = {
	props: {
		items: {
			default: function _default() {
				return [];
			}
		},
		style: {},
		sticky: {
			default: true
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 300
		},
		interval: {
			default: 500
		}
	},
	data: function data() {
		return {
			width: 0,

			copy: [],

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			X1: 0,
			X2: 0,

			currentOne: 2,
			transition: '0s',
			offset: 0
		};
	},
	computed: {
		transform: function transform() {
			return 'translate3d(' + trainOffsetX + 'px,0,0)';
		}
	},
	watch: {
		items: function items() {
			this.copy = this.items;
		}
	},
	mounted: function mounted() {
		var _this = this;

		this.copy = JSON.parse(JSON.stringify(this.items));
		//window.addEventListener('load',()=>{
		this.setWidth();
		this.trainOffsetX = -this.width * 2;
		//});
		window.addEventListener('resize', function () {
			setTimeout(function () {
				_this.setWidth();
				_this.trainOffsetX = -_this.width * 2;
			}, 50);
		});
		if (this.autoplay) {
			setInterval(function () {
				_this.toNext();
			}, this.interval);
		}
	},
	methods: {
		setWidth: function setWidth() {
			this.transition = false;
			var elem = this.$el;
			var width = document.defaultView.getComputedStyle(elem).width.replace(/px/, '');
			this.width = width;
		},
		toNext: function toNext() {
			var _this2 = this;

			if (this.currentOne < this.copy.length - 1) {
				this.currentOne++;
				this.transition = '0.3s';
				this.trainOffsetX = -this.width * 3;
			}
			setTimeout(function () {
				_this2.transition = '0s';
				var first = _this2.copy[0];
				_this2.copy.splice(0, 1);
				_this2.copy.push(first);
				_this2.currentOne = 2;
				_this2.trainOffsetX = -_this2.width * 2;
				_this2.switching = false;
			}, this.duration);
		},
		toPrev: function toPrev() {
			var _this3 = this;

			if (this.currentOne > 0) {
				this.currentOne--;
				this.transition = '0.3s';
				this.trainOffsetX = -this.width;
			};
			setTimeout(function () {
				_this3.transition = '0s';
				var zz = _this3.copy.length - 1;
				var last = _this3.copy[zz];
				_this3.copy.splice(zz, 1);
				_this3.copy.unshift(last);
				_this3.currentOne = 2;
				_this3.trainOffsetX = -_this3.width * 2;
				_this3.switching = false;
			}, this.duration);
		},
		touchstart: function touchstart(e) {
			console.log(this.switching);
			if (this.switching === false) {
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function touchmove(e) {
			if (this.inCycle && !this.scrolling) {
				this.moveCount++;
				if (this.moveCount === 1) {
					this.X2 = e.changedTouches[0].pageX;
					this.Y2 = e.changedTouches[0].pageY;
					var distanceY = this.Y2 - this.Y1;
					var distanceX = this.X2 - this.X1;
					if (Math.abs(distanceY) > Math.abs(distanceX)) {
						this.scrolling = true;
					}
				}

				if (this.sticky) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X1;
					this.X1 = this.X2;
					this.trainOffsetX += distance;
				}
			}
		},
		touchend: function touchend(e) {
			if (this.inCycle && !this.scrolling) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				if (distance < 0) {
					this.switching = true;
					this.toNext();
				} else if (distance > 0) {
					this.switching = true;
					this.toPrev();
				};
				this.inCycle = false;
			};
		}
	}
};
module.exports = swiper;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper",
    style: (_vm.style),
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_c('ul', {
    staticClass: "train",
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';')
  }, _vm._l((_vm.copy), function(item, i) {
    return _c('li', {
      key: item.background,
      class: 'item ' + (i === _vm.currentOne ? 'active' : ''),
      style: (("background:" + (item.background)))
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-a2230630",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(130)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(132),
  /* scopeId */
  "data-v-432588bb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(162)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  "data-v-7be1da86",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
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

exports.default = {
  props: {},
  data: function data() {
    return {
      current: 0,
      turn: false
    };
  },
  watch: {
    current: function current() {
      var _this = this;

      this.$refs.page.style.display = 'block';
      this.$refs.page.classList.add('active');
      setTimeout(function () {
        _this.$refs.item0.style.display = 'none';
        _this.$refs.item1.style.display = 'block';
      }, 1000);
    }
  },
  mounted: function mounted() {
    this.$refs.item0.style.display = 'block';
  },
  methods: {
    turn_: function turn_() {
      this.current++;
    }
  }
};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookBlock",
    on: {
      "click": _vm.turn_
    }
  }, [_c('div', {
    ref: "item0",
    staticClass: "item"
  }, [_c('div', {
    staticClass: "upper"
  }, [_vm._v("0")]), _c('div', {
    staticClass: "lower"
  }, [_vm._v("0")])]), _c('div', {
    ref: "item1",
    staticClass: "item"
  }, [_c('div', {
    staticClass: "upper"
  }, [_vm._v("1")]), _c('div', {
    staticClass: "lower"
  }, [_vm._v("1")])]), _c('div', {
    ref: "page",
    staticClass: "page"
  }, [_c('div', {
    staticClass: "back"
  }, [_vm._v("1")]), _c('div', {
    staticClass: "front"
  }, [_vm._v("0")])])])
},staticRenderFns: []}

/***/ })

});