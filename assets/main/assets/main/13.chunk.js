webpackJsonp([13],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(311)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(312),
  /* template */
  __webpack_require__(314),
  /* scopeId */
  "data-v-8275c764",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(313);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {},
  computed: {},
  beforeCreate: function beforeCreate() {
    this.$store.complete(['mall', 'cart'], _index2.default);
  },

  methods: {
    register: function register(store) {
      store.complete(['mall', 'cart'], _index2.default);
    },
    preFetch: function preFetch(store) {
      return store.dispatch('mall/cart/fetch');
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

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(27);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    fetched: false
  },
  actions: {
    fetch: function fetch(_ref) {
      var state = _ref.state;

      return new _promise2.default(function (resolve, reject) {
        state.fetched = true;
        resolve();
      });
    }
  }
};

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RouteMallCart"
  })
},staticRenderFns: []}

/***/ })

});