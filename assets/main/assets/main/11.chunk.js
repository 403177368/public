webpackJsonp([11],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(283)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(284),
  /* template */
  __webpack_require__(286),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 283:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(285);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    // Slider: require('./Slider.vue')
  },
  computed: {
    items: function items() {
      return this.$store.state.admin.items.items;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['mall'], _index2.default);
    console.log(this.$store);
  },
  mounted: function mounted() {
    this.$store.dispatch('admin/items/changeDB', '/sqlite');
    this.$store.dispatch('admin/items/fetchItems');
  },

  methods: {
    register: function register(store) {
      store.complete(['mall'], _index2.default);
    },
    preFetch: function preFetch(store) {
      return store.dispatch('mall/fetch');
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

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(49);

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

/***/ 286:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RouteMall"
  }, [_vm._m(0), _c('router-view'), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('v-slider')], 1), _c('div', {
    staticClass: "form-group"
  }, [_c('v-calender')], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('div', {
    staticClass: "navbar-brand"
  }, [_vm._v("\n        Brand\n      ")])])])
}]}

/***/ })

});