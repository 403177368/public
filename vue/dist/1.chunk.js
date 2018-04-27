webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
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

var arr = [];
var uid = 0;

// var img = new Image();
// img.src = './img/red/panel.png';

function start(el) {

  var Score = function Score(el, fontSize, fontWidth) {
    this.canvas = el;
    this.fontSize = fontSize || "18";
    this.fontWidth = fontWidth || 18;
    this.ctx = this.canvas.getContext("2d");
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.mub_list = [null, null, null, null, null, null, null, null], this.all_mub = "00000000";
  };

  Score.prototype = {
    update: function update(n) {
      var len = this.mub_list.length - n.toString().length;
      for (var i = 0; i < len; i++) {
        n = " " + n;
      }
      var k2 = n.toString().split(""),
          k1 = this.all_mub.toString().split(""),
          j = 0;
      for (var i = 0; i < 8; i++) {
        if (k2[i] != " ") {
          k1[i] == " " && (k1[i] = "0");
          this.mub_list[i] = new Mub(parseInt(k1[i]), 16 + this.fontWidth * j, parseInt(k2[i]), 1.5, 65);
          j++;
        } else {
          this.mub_list[i] = new Mub(0, 16 + this.fontWidth * j, 0, 9 - i, 65);
          j++;
        }
      }
      this.all_mub = n.toString();
    },
    draw: function draw() {
      var _this = this;

      var self = this;
      this.stimer = requestAnimFrame(function () {
        self.draw();
      });
      this.ctx.clearRect(0, 0, this.w, this.h);
      for (var i = 0; i < 8; i++) {
        // this.ctx.drawImage( img,4+61*i,0 );
      };
      this.mub_list.forEach(function (a) {
        if (a !== null) {
          a.draw(_this.ctx, _this.fontSize);
          a.move();
        }
      });
      // for( let i = 0; i<8; i++ ){
      //     if (this.mub_list[i] != null) {
      //         this.mub_list[i].draw(this.ctx,this.fontSize);
      //         this.mub_list[i].move();
      //     }
      // }
    }
  };

  var Mub = function Mub(a, x, n, speed, h) {
    this.a = a; //µ±Ç°Í£Ö¹µÄÊý×Ö
    this.n = n; //¸üÐÂµ½µÄÊý×Ö
    this.x = x; //ºá×ø±ê
    this.h = h;
    this.speed = speed; //×ª¶¯ËÙ¶È
    this.y = -this.h * 4 - 8;
    this.nub = [];
    this.__init();
  };
  Mub.prototype = {
    __init: function __init() {
      this.nub[5] = this.a;
      for (var i = 6; i < 10; i++) {
        this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
      }
      for (var i = 4; i >= 0; i--) {
        this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
      }
    },
    draw: function draw(ctx, fontSize) {
      ctx.save();
      ctx.font = fontSize + "px arial";
      //       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
      // ctx.shadowColor = "#000";
      //       ctx.shadowOffsetX = 1;
      //       ctx.shadowOffsetY = 1;
      //       gradient.addColorStop("0", "#fff");
      //       gradient.addColorStop("0.2", "#444");
      //       gradient.addColorStop("0.6", "#fff");
      //       gradient.addColorStop("0.8", "#444");
      //       gradient.addColorStop("1", "#fff");
      ctx.fillStyle = '#774445';
      for (var i = 0; i < this.nub.length; i++) {
        var _y = this.y + i * this.h;
        if (_y > 0 && _y < 130) {
          ctx.fillText(this.nub[i], this.x, _y);
        }
      }
      ctx.restore();
    },
    move: function move() {
      if (this.n !== this.nub[5]) {
        this.y += 7.5 / this.speed;
        if (this.h * 4 + 8 + this.y == this.h) {
          this.nub.splice(0, 0, this.nub.pop());
          this.y = -this.h * 4 - 8;
        }
      }
    }
  };

  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  window.cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  //¼ÆÈëÊý×Ö
  var score1 = 0;
  var s1 = new Score(el, 54, 61);
  s1.update(score1);
  s1.draw();
  // setInterval(function() {
  //     var d = score1 += 9234;
  //     s1.update(d);
  // },
  // 2000)
  arr.push(s1);
  uid++;
}
exports.default = {
  // props: ['act','num'],
  data: function data() {
    return {
      uid: 0,
      num: 0
    };
  },
  watch: {
    num: function num(nv) {
      arr[this.uid].update(nv);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.uid = uid;
    start(this.$refs.canvas);
    setInterval(function () {
      _this2.num += 12345;
    }, 2000);
  },
  methods: {}

};

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CanvasCounter"
  }, [_c('canvas', {
    ref: "canvas",
    attrs: {
      "unselectable": "on",
      "width": "490",
      "height": "77"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RibbonContainer"
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('h3', {
    staticClass: "ribbon"
  }, [_vm._v("This is a ribbon.")])])])
}]}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  "data-v-4423c4cf",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  "data-v-4f8cbfa7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-502bd4a2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(139)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(140),
  /* scopeId */
  "data-v-7df20c3b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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

exports.default = {
  data: function data() {
    return {
      state: '',
      pages: [{
        z: 100,
        state: ''
      }, {
        z: 99,
        state: ''
      }, {
        z: 98,
        state: ''
      }, {
        z: 97,
        state: ''
      }],
      current: 0
    };
  },
  watch: {
    current: function current(nv, ov) {
      this.pages.forEach(function (a, i) {
        if (ov === i) {
          a.state = 'turned';
          setTimeout(function () {
            a.z = i;
          }, 500);
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 39) {
        _this.state = 'two';
      } else if (e.keyCode === 37) {
        _this.state = '';
      }
      // console.log(e)
    });
  },
  methods: {
    handleClick: function handleClick() {
      this.current++;
      console.log(this.current);
    }
  }
};

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookSpace"
  }, [_c('div', {
    staticClass: "book",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l((_vm.pages), function(a, i) {
    return _c('div', {
      staticClass: "page__",
      class: a.state,
      style: ('z-index:' + a.z + ';')
    }, [_c('div', {
      staticClass: "face front"
    }, [_c('p', [_vm._v(_vm._s(i))])]), _c('div', {
      staticClass: "face back"
    }, [_c('p', [_vm._v(_vm._s(i))])])])
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
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

exports.default = {};

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ButtonRipple"
  }, [_c('div', {
    staticClass: "button"
  }, [_c('div', {
    staticClass: "ripple"
  }), _c('span', [_vm._v("Stark")])]), _c('div', {
    staticClass: "button raised"
  }, [_c('div', {
    staticClass: "ripple"
  }), _c('span', [_vm._v("Lannister")])])])
}]}

/***/ })

});