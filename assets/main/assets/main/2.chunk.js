webpackJsonp([2],{

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
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

/***/ 113:
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

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(122);

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

/***/ 122:
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

/***/ 123:
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});