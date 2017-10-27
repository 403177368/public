webpackJsonp([3],{

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
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

exports.default = {
	data: function data() {
		return {
			rotateY: 0
		};
	},
	methods: {
		next: function next() {
			this.rotateY -= 60;
		},
		prev: function prev() {
			this.rotateY += 60;
		}
	}
};

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Carousel"
  }, [_c('div', {
    staticClass: "cards",
    style: ('transform: rotateY(' + _vm.rotateY + 'deg);-webkit-transform: rotateY(' + _vm.rotateY + 'deg);')
  }, [_c('div', {
    staticClass: "item a"
  }, [_vm._v("A")]), _c('div', {
    staticClass: "item b"
  }, [_vm._v("B")]), _c('div', {
    staticClass: "item c"
  }, [_vm._v("C")]), _c('div', {
    staticClass: "item d"
  }, [_vm._v("D")]), _c('div', {
    staticClass: "item e"
  }, [_vm._v("E")]), _c('div', {
    staticClass: "item f"
  }, [_vm._v("F")])]), _c('div', {
    staticClass: "next",
    on: {
      "click": _vm.next
    }
  }, [_vm._v("Next")]), _c('div', {
    staticClass: "prev",
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("Prev")])])
},staticRenderFns: []}

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
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
  props: {
    change: {},
    dispatch: {}
  },
  data: function data() {
    return {
      playing: false,
      state: 'ready',
      cycle: 0,
      current: 0,
      over: false,
      comments: [{
        text: '［媒体评论］朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。',
        state: ''
      }, {
        text: '［媒体评论］舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系...',
        state: ''
      }, {
        text: '［媒体评论］王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变...',
        state: ''
      }, {
        text: '［读者评价］很多年不曾见过的温暖又干净的文字 ——dana (成都)',
        state: ''
      }, {
        text: '［读者评价］最几年读过的最好的华语散文，让我对文学有了一些... ——Xiao (New York City)',
        state: ''
      }, {
        text: '［读者评价］文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起... ——Fairylandyy',
        state: ''
      }]
    };
  },
  watch: {
    // 'change.page': function(nv){
    //   if( nv===3 ){
    //     if( this.playing===false ){
    //       this.playing = true;
    //       this.start();
    //     };
    //   }
    // },
    current: function current(nv) {
      if (this.over) {
        this.comments[nv].state = 'class0';
        this.comments[nv - 1 >= 0 ? nv - 1 : nv + 5].state = 'class1';
        this.comments[nv - 2 >= 0 ? nv - 2 : nv + 4].state = 'class2';
        this.comments[nv - 3 >= 0 ? nv - 3 : nv + 3].state = 'over';
        this.comments[nv - 4 >= 0 ? nv - 4 : nv + 2].state = '';
      };
    },
    state: function state(nv) {}
  },
  mounted: function mounted() {
    this.start();
  },
  methods: {
    show: function show() {
      // this.dispatch({
      //   type: 'SHOW',
      //   what: 'mask_comments'
      // })
    },
    restart: function restart() {
      this.stop();
      this.start();
    },
    stop: function stop() {
      this.cycle++;
      this.comments.forEach(function (a) {
        a.state = '';
      });
    },

    start: function start() {
      var _this = this;

      this.over = false;
      var cycle = this.cycle;
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class0';
      }, 500);
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class1';
        _this.comments[1].state = 'class0';
      }, 2500);
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class2';
        _this.comments[1].state = 'class1';
        _this.comments[2].state = 'class0';
        setTimeout(function () {
          if (cycle !== _this.cycle) return;
          _this.current = 3;
          _this.over = true;
          var interval = setInterval(function () {
            if (cycle !== _this.cycle) {
              clearInterval(interval);
              return;
            };
            if (_this.current + 1 <= _this.comments.length - 1) {
              _this.current++;
            } else {
              _this.current = 0;
            }
          }, 2000);
        }, 2000);
      }, 4500);
    }
  }
};

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Comments",
    on: {
      "click": _vm.show
    }
  }, _vm._l((_vm.comments), function(a) {
    return _c('div', {
      staticClass: "panel-arrow",
      class: a.state
    }, [_c('div', {
      staticClass: "arrow"
    }), _c('div', {
      staticClass: "panel"
    }, [_vm._v("\n      " + _vm._s(a.text) + "\n    ")])])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
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

exports.default = {
	data: function data() {
		return {
			current: 0,
			switching: false,
			items: [{
				state: 'current',
				background: 'red'
			}, {
				state: '',
				background: 'orange'
			}, {
				state: '',
				background: 'yellow'
			}]
		};
	},
	watch: {
		current: function current(newV, oldV) {
			var _this = this;

			this.items[newV].state = 'enter';
			this.items[oldV].state = 'leave';
			setTimeout(function () {
				_this.items[newV].state = 'current';
				_this.items[oldV].state = '';
				_this.switching = false;
			}, 2000);
		}
	},
	methods: {
		toNext: function toNext() {
			if (!this.switching) {
				this.switching = true;
				if (this.current < this.items.length - 1) {
					this.current++;
				} else {
					this.current = 0;
				}
			};
		}
	}
};

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Fader",
    on: {
      "click": _vm.toNext
    }
  }, _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      staticClass: "item",
      class: a.state,
      style: ('background:' + a.background + ';')
    }, [_vm._v("\n\t\t" + _vm._s(i) + "\n\t")])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  "data-v-50163485",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  "data-v-1a094719",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(118)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  "data-v-490cc3a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});