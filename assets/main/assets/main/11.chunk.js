webpackJsonp([11],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  "data-v-d1f1f1b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(150);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      data: ''
    };
  },

  computed: {},
  mounted: function mounted() {},
  methods: {
    get: function get(url) {
      var _this = this;

      this.data = 'Loading...';
      this.$store.dispatch('get', { url: url }).then(function (res) {
        _this.data = (0, _stringify2.default)(res, null, 2).replace(/\n/g, '<br/>');
      });
    }
  }
};

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "route-crawler"
  }, [_c('v-breadcrumb', {
    attrs: {
      "items": [{
        name: 'Crawler'
      }]
    }
  }), _c('div', {
    staticClass: "btn-group btn-group-sm",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('div', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.get('/api/crawler/echojs')
      }
    }
  }, [_vm._v("\n      Echojs\n    ")]), _c('div', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.get('/api/crawler/tieba')
      }
    }
  }, [_vm._v("\n      Tie-ba\n    ")])]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body",
    domProps: {
      "innerHTML": _vm._s(_vm.data)
    }
  }, [_vm._v("\n      " + _vm._s(_vm.data) + "\n    ")])])], 1)
},staticRenderFns: []}

/***/ })

});