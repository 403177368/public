webpackJsonp([6],{

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(127);

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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    fetched: false
  },
  actions: {
    fetch: function fetch(_ref) {
      var state = _ref.state;

      return new Promise(function (resolve, reject) {
        state.fetched = true;
        resolve();
      });
    }
  }
};

/***/ }),

/***/ 128:
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

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(128),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});