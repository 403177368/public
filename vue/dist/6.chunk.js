webpackJsonp([6],{

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		function App() {
			this.elem = document.querySelector('#feGB');
			this.init();
		}
		App.prototype = {
			init: function init() {
				this.setStdDeviation();
				window.addEventListener('resize', this.setStdDeviation.bind(this));
			},
			setStdDeviation: function setStdDeviation() {
				var self = this;
				setTimeout(function () {
					self.width = window.innerWidth;
					var deviation = 12 * self.width / 720;
					self.elem.setAttribute('stdDeviation', deviation);
				}, 300);
			}
		};
		new App();
	}
};

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "GooeyMenuContainer"
  }, [_c('div', {
    staticClass: "GooeyMenu"
  }, [_c('input', {
    staticClass: "menu-open",
    attrs: {
      "type": "checkbox",
      "href": "#",
      "name": "menu-open",
      "id": "menu-open"
    }
  }), _vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6), _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1",
      "viewBox": "0 0 100 100"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "red"
    }
  }), _c('defs', [_c('filter', {
    attrs: {
      "id": "shadowed-goo"
    }
  }, [_c('feGaussianBlur', {
    attrs: {
      "in": "SourceGraphic",
      "result": "blur",
      "stdDeviation": "10"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "blur",
      "mode": "matrix",
      "values": "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
      "result": "goo"
    }
  }), _c('feGaussianBlur', {
    attrs: {
      "in": "goo",
      "stdDeviation": "3",
      "result": "shadow"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "shadow",
      "mode": "matrix",
      "values": "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2",
      "result": "shadow"
    }
  }), _c('feOffset', {
    attrs: {
      "in": "shadow",
      "dx": "1",
      "dy": "1",
      "result": "shadow"
    }
  }), _c('feComposite', {
    attrs: {
      "in2": "shadow",
      "in": "goo",
      "result": "goo"
    }
  }), _c('feComposite', {
    attrs: {
      "in2": "goo",
      "in": "SourceGraphic",
      "result": "mix"
    }
  })], 1), _c('filter', {
    attrs: {
      "id": "goo",
      "x": "-300%",
      "y": "-300%",
      "width": "600%",
      "height": "600%"
    }
  }, [_c('feGaussianBlur', {
    attrs: {
      "id": "feGB",
      "in": "SourceGraphic",
      "result": "blur",
      "stdDeviation": "8"
    }
  }), _c('feColorMatrix', {
    attrs: {
      "in": "blur",
      "mode": "matrix",
      "values": "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
      "result": "goo"
    }
  }), _c('feComposite', {
    attrs: {
      "in2": "goo",
      "in": "SourceGraphic",
      "result": "mix"
    }
  })], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "menu-open-button",
    attrs: {
      "for": "menu-open"
    }
  }, [_c('span', {
    staticClass: "hamburger hamburger-1"
  }), _c('span', {
    staticClass: "hamburger hamburger-2"
  }), _c('span', {
    staticClass: "hamburger hamburger-3"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-bar-chart"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-heart"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-cog"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "menu-item"
  }, [_c('i', {
    staticClass: "fa fa-ellipsis-h"
  })])
}]}

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
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

module.exports = {
	props: {
		items: {
			default: function _default() {
				return [{
					id: 0,
					_class: ''
				}, {
					id: 1,
					_class: ''
				}, {
					id: 2,
					_class: ''
				}, {
					id: 3,
					_class: ''
				}];
			}
		}
	},
	data: function data() {
		return {
			cards: [],
			nav: [],
			dot: 0,
			current: null,

			switching: false,
			canScroll: true,
			X1: null,
			X2: null,
			Y1: null,
			Y2: null,
			moveCount: 0
		};
	},
	watch: {
		// items: function(){
		// 	var self = this;
		// 	setTimeout(()=>{
		// 		self.getData();
		// 	},300);
		// }
	},
	created: function created() {},
	mounted: function mounted() {
		this.getData();
	},
	methods: {
		getData: function getData() {
			var self = this;
			var cards = JSON.parse(JSON.stringify(self.items)).reverse();
			if (cards.length === 1) {
				//cards[1] = JSON.parse( JSON.stringify(cards[0]) );
				//cards[2] = JSON.parse( JSON.stringify(cards[0]) );
				//cards[3] = JSON.parse( JSON.stringify(cards[0]) );
				//this.cards = cards;
				this.nav = [0];
				this.navLength = 1;
			} else if (cards.length === 2) {
				cards[2] = JSON.parse(JSON.stringify(cards[0]));
				cards[3] = JSON.parse(JSON.stringify(cards[1]));
				this.nav = [0, 1];
				this.navLength = 2;
			} else if (cards.length === 3) {
				cards[3] = JSON.parse(JSON.stringify(cards[0]));
				cards[4] = JSON.parse(JSON.stringify(cards[1]));
				cards[5] = JSON.parse(JSON.stringify(cards[2]));
				this.nav = [0, 1, 2];
				this.navLength = 3;
			} else {
				var nav = [];
				for (var i = 0; i < cards.length; i++) {
					nav[i] = i;
				}
				this.nav = nav;
				this.navLength = cards.length;
			}
			this.cards = cards;

			this.length = this.cards.length;
			this.current = this.length - 1;

			if (self.cards.length === 1) {
				self.cards[0]._class = 'toFirst';
			} else if (self.cards.length >= 4) {
				self.cards[self.current]._class = 'toFirst';
				self.cards[self.current - 1]._class = 'toSecond';
				self.cards[self.current - 2]._class = 'toThird';
			}
		},
		play: function play(direction) {
			var self = this;
			if (!self.switching) {
				self.switching = true;
				if (self.dot < self.navLength - 1) {
					self.dot++;
				} else {
					self.dot = 0;
				}
				// console.log('true')
				this.cards[this.current]._class = 'wira-' + direction;
				this.cards[this.current - 1]._class = 'toFirst';
				this.cards[this.current - 2]._class = 'toSecond';
				this.cards[this.current - 3]._class = 'toThird';
				setTimeout(function () {
					self.cards.unshift(self.cards.splice(-1, 1)[0]);
					self.cards[0]._class = '';
					self.switching = false;
				}, 600);
			};
		},
		touchstart: function touchstart(e) {
			this.moveCount = 0;
			this.canScroll = true;
			this.X1 = e.changedTouches[0].pageX;
			this.Y1 = e.changedTouches[0].pageY;
		},
		touchmove: function touchmove(e) {
			this.moveCount++;
			if (this.moveCount === 1) {
				this.X2 = e.changedTouches[0].pageX;
				this.Y2 = e.changedTouches[0].pageY;
				var dY = this.Y2 - this.Y1;
				var dX = this.X2 - this.X1;
				if (Math.abs(dY) > 2 * Math.abs(dX)) {
					this.canScroll = true;
				} else {
					this.canScroll = false;
				}
			};
			if (!this.canScroll) {
				e.preventDefault();
			};
		},
		touchend: function touchend(e) {
			if (!this.canScroll) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				if (distance > 0) {
					if (this.nav.length > 1) {
						this.play('right');
					};
				} else if (distance < 0) {
					if (this.nav.length > 1) {
						this.play('left');
					};
				}
			};
		}
	}
};

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Stack"
  }, [_c('div', {
    staticClass: "space"
  }, [_c('ul', {
    staticClass: "stack",
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
  }, _vm._l((_vm.cards), function(a, i) {
    return _c('li', {
      key: a.id,
      class: 'card ' + a._class
    }, [_vm._v("\n\t\t\t\t" + _vm._s(a.id) + "\n\t\t\t")])
  }))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nav.length > 1),
      expression: " nav.length>1 "
    }],
    staticClass: "nav"
  }, _vm._l((_vm.nav), function(a, i) {
    return _c('li', {
      class: i === _vm.dot ? 'active' : ''
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(121)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  "data-v-7bbd9225",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(144)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  "data-v-4b5ea554",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});