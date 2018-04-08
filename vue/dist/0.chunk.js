webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
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

exports.default = {
  data: function data() {
    return {
      music: {
        on: true
      }
    };
  },
  watch: {
    // 'change': function(nv){

    // }
  },
  computed: {
    // change(){
    //   return this.$store.state.change;
    // },
    // music(){
    //   return this.$store.state.music;
    // }
  },
  methods: {
    toggle: function toggle() {
      this.music.on = !this.music.on;
    }
  }
};

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "IconMusic",
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    staticClass: "_bar _bar0",
    class: _vm.music.on ? 'active' : ''
  }), _c('div', {
    staticClass: "_bar _bar1",
    class: _vm.music.on ? 'active' : ''
  }), _c('div', {
    staticClass: "_bar _bar2",
    class: _vm.music.on ? 'active' : ''
  })])
},staticRenderFns: []}

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
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

/***/ 135:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "space"
  }, [_c('div', {
    staticClass: "roller"
  }, _vm._l((32), function(n) {
    return _c('div', {
      staticClass: "slice"
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	data: function data() {
		return {};
	}
};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "PreloaderContainer"
  }, [_c('svg', {
    staticClass: "Preloader",
    attrs: {
      "viewBox": "0 0 120 120"
    }
  }, [_c('symbol', {
    attrs: {
      "id": "s-circle"
    }
  }, [_c('circle', {
    attrs: {
      "r": "10",
      "cx": "20",
      "cy": "20"
    }
  })]), _c('g', {
    staticClass: "g-circles"
  }, _vm._l((12), function(a) {
    return _c('g', {
      staticClass: "g-circle"
    }, [_c('use', {
      attrs: {
        "xlink:href": "#s-circle"
      }
    })])
  }))])])
},staticRenderFns: []}

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
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

function haha() {
	var container = document.querySelector('.MachineGunText');
	var _sentenceEndExp = /(榜)$/g; //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly

	function machineGun(text) {
		var words = text.split(" "),
		    tl = new TimelineMax({ delay: 0.6, repeat: 2, repeatDelay: 4 }),
		    wordCount = words.length,
		    time = 0,
		    word,
		    element,
		    duration,
		    isSentenceEnd,
		    i;

		for (i = 0; i < wordCount; i++) {
			word = words[i];
			isSentenceEnd = _sentenceEndExp.test(word);
			element = function () {
				var child = document.createElement('h3');
				child.innerHTML = word;
				container.appendChild(child);
				return child;
			}();
			//$("<h3>" + word + "</h3>").appendTo(container);
			duration = Math.max(0.5, word.length * 0.15); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
			if (isSentenceEnd) {
				duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
			}
			//set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
			TweenLite.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });
			//the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See http://www.greensock.com/v12/#slowmo and http://api.greensock.com/js/com/greensock/easing/SlowMo.html
			tl.to(element, duration, {
				scale: 1.2,
				ease: SlowMo.ease.config(0.25, 0.9)
			}, time)
			//notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
			.to(element, duration, { autoAlpha: 1, ease: SlowMo.ease.config(0.25, 0.9, true) }, time);
			time += duration - 0.05;
			if (isSentenceEnd) {
				time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
			}
		}
	}

	machineGun("阅文集团 年度庆典 原创 文学 风 云 榜");
};

exports.default = {
	mounted: function mounted() {
		haha();
	}
};

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MachineGunText"
  })
},staticRenderFns: []}

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
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


exports.default = {
  components: {},
  data: function data() {
    return {};
  },
  computed: {
    example: function example() {
      return this.$store.state._example;
    }
  },
  mounted: function mounted() {
    // console.dir( this.$refs.iframe );
  },
  methods: {
    back: function back() {
      history.go(-1);
    }
  }
};

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Example"
  }, [_c('div', {
    staticClass: "fixedbar"
  }, [_c('i', {
    staticClass: "fa fa-angle-left",
    on: {
      "click": _vm.back
    }
  }), _c('div', {
    staticClass: "title004"
  }, [_vm._v("\n      " + _vm._s(_vm.example.name) + "\n    ")])]), _c('div', {
    ref: "container",
    staticClass: "container118"
  }, [_c('iframe', {
    ref: "iframe",
    attrs: {
      "src": _vm.example.url,
      "width": "100%",
      "height": "100%",
      "seamless": "",
      "frameborder": "0"
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  "data-v-45db51ab",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  "data-v-2d8222d7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(133)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(135),
  /* scopeId */
  "data-v-15ffea31",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(136)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  "data-v-3e0035be",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(153)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(155),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(165)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(167),
  /* scopeId */
  "data-v-53676c92",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
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
      alert('Sorry, your browser doesn\'t support DeviceMotionEvent.');
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

        var nextX = this.rotateX - e.rotationRate.alpha * 3;
        // if(nextX>=45){
        //  nextX = 45;
        // }else if(nextX<=-45){
        //  nextX = -45;
        // }
        this.rotateX = nextX;

        var nextY = this.rotateY + e.rotationRate.beta * 3;
        // if(nextY>=45){
        //  nextY = 45;
        // }else if(nextY<=-45){
        //  nextY = -45;
        // }
        this.rotateY = nextY;
      }
    }
  }
};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CubeWhite"
  }, [_c('div', {
    staticClass: "space3d"
  }, [_c('div', {
    staticClass: "cube",
    class: _vm.recalibrating ? 'recalibrating' : '',
    style: ('transform: rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);-webkit-transform:rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);'),
    on: {
      "click": _vm.recalibrate
    }
  }, [_c('div', {
    staticClass: "face face-front"
  }), _c('div', {
    staticClass: "face face-top"
  }), _c('div', {
    staticClass: "face face-bottom"
  }), _c('div', {
    staticClass: "face face-left"
  }), _c('div', {
    staticClass: "face face-right"
  }), _c('div', {
    staticClass: "face face-back"
  })])])])
},staticRenderFns: []}

/***/ })

});