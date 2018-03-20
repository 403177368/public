webpackJsonp([9],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(213)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Canvas = __webpack_require__(215);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    matrix: __webpack_require__(216)
  },
  data: function data() {
    return {
      src: '',
      websites: [{
        name: 'Three.js',
        href: '//threejs.org/examples/'
      }, {
        name: 'Codepen',
        href: '//codepen.io'
      }, {
        name: 'Phaser.js',
        href: '//www.phaser.io/'
      }]
    };
  },

  computed: {
    canvas: function canvas() {
      return this.$store.state.main.Canvas;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main', 'Canvas'], _Canvas2.default);
  },
  mounted: function mounted() {
    this.$store.dispatch('main/Canvas/init');
  },

  methods: {
    register: function register(store) {
      store.complete(['main', 'Canvas'], _Canvas2.default);
    },
    preFetch: function preFetch(store) {
      return store.dispatch('main/Canvas/init');
    },
    to: function to(src) {
      this.src = src;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    initialized: false,
    canvas: {}
  },
  actions: {
    init: function init(ctx) {
      if (ctx.state.initialized === false) {
        return ctx.dispatch('fetch').then(function (res) {
          if (res.status === 200) {
            ctx.state.initialized = true;
            ctx.state.canvas = res.data;
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    fetch: function fetch(ctx) {
      return (0, _axios2.default)({
        method: 'GET',
        url: '/api/canvas/',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
    }
  },
  mutations: {
    INIT_CANVAS: function INIT_CANVAS(state, arr) {
      state.initialized = true;
    },
    SET_CANVAS: function SET_CANVAS(state, arr) {
      var _state$items;

      state.items.length = 0;
      (_state$items = state.items).push.apply(_state$items, (0, _toConsumableArray3.default)(arr));
    }
  }
};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 218:
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

exports.default = {
  data: function data() {
    return {};
  },

  computed: {},
  mounted: function mounted() {
    var self = this;
    var canvas = this.$refs.matrix;
    var ctx = canvas.getContext('2d');
    var fontSize = 14;
    var chars = generateChars();
    var columns;
    var drops; // Current position of last letter (for each column)
    var drawnToBottom;

    // Generate Matrix code characters
    function generateChars() {
      var chars = '0123456789';

      // Get ALL half-width katakana characters by unicode value
      for (var i = 0; i <= 55; i++) {
        chars += String.fromCharCode(i + 65382);
      }

      return chars.split('');
    }

    // Initialize default canvas state
    function initCanvas() {
      setSize();

      columns = Math.round(canvas.width / fontSize);
      drops = [];

      // Set initial position on y coordinate for each column
      for (var i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      drawnToBottom = false;
    }

    // Resize canvas to fit window
    window.addEventListener('resize', function () {
      initCanvas();
    });

    function setSize() {
      var container = self.$refs.container;
      if (container) {
        var w = Number(document.defaultView.getComputedStyle(container).width.replace('px', ''));
        if (canvas.width !== w) {
          canvas.width = w;
          canvas.height = 300;
        }
      }
    }

    function draw() {
      // Set nearly transparent background so character trail is visible
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set color and font of falling letters
      ctx.fillStyle = '#19FF19';
      ctx.font = 'bold ' + fontSize + 'px monospace';

      var dropCount = drops.length;
      var charCount = chars.length;

      for (var i = 0; i < dropCount; i++) {
        // Choose a random letter
        var text = chars[Math.floor(Math.random() * charCount)];
        // Get the y position of the letter
        var rowNum = drops[i] * fontSize;
        // Draw it!
        ctx.fillText(text, i * fontSize, rowNum);

        // Check if the canvas has been drawn to the bottom
        if (rowNum > canvas.height) drawnToBottom = true;

        // Randomly reset the y position of a column
        if (!drawnToBottom && Math.random() > 0.925 || drawnToBottom && Math.random() > 0.95) drops[i] = 0;

        drops[i]++;
      }
    }

    setTimeout(function () {
      initCanvas();
      setInterval(draw, 45);
    }, 300);
  },
  methods: {}
};

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "Matrix"
  }, [_c('canvas', {
    ref: "matrix"
  })])
},staticRenderFns: []}

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "RouteCanvas"
  }, [_c('matrix'), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "panel panel-default panel-full-md"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Canvas\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, [_vm._l((_vm.canvas.canvas.left), function(a) {
    return _c('p', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.name))])])
  }), _vm._l((_vm.canvas.canvas.right), function(a) {
    return _c('p', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.name))])])
  })], 2)])]), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Websites")]), _c('div', {
    staticClass: "panel-body"
  }, _vm._l((_vm.websites), function(a) {
    return _c('p', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.name))])])
  }))])])])])], 1)])
},staticRenderFns: []}

/***/ })

});