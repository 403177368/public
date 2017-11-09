webpackJsonp([2],{

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
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

exports.default = {
  computed: {
    post: function post() {
      return this.$store.state.main.post;
    }
  },
  watch: {
    '$store.state.main.post': function $storeStateMainPost(nv) {}
  },
  mounted: function mounted() {
    var id = this.$route.params.id;

    var state_id = this.$store.state.main.post.id;
    if (state_id === null || state_id !== id) {
      this.$store.dispatch('main/post/fetchPost', { id: id });
    }
  },
  methods: {
    preFetch: function preFetch(store, router) {
      // console.log(router.history.current.params.id);
      return store.dispatch('main/post/fetchPost', { id: router.history.current.params.id });
    }
  }
};

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    ref: "Post",
    staticClass: "Post"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.post.state === 'pending'),
      expression: "post.state==='pending'"
    }]
  }, [_vm._v("loading...")]), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8 col-sm-offset-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    ref: "post_main",
    staticClass: "card-body",
    domProps: {
      "innerHTML": _vm._s(_vm.post.html)
    }
  })])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(121);

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

/***/ 121:
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

/***/ 122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RouteMallCart"
  })
},staticRenderFns: []}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  "data-v-8275c764",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});