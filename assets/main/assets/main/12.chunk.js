webpackJsonp([12],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(279)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(280),
  /* template */
  __webpack_require__(281),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 280:
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

/***/ 281:
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
    staticClass: "panel panel-full-sm"
  }, [_c('div', {
    ref: "post_main",
    staticClass: "panel-body",
    domProps: {
      "innerHTML": _vm._s(_vm.post.html)
    }
  })])])])])])])
},staticRenderFns: []}

/***/ })

});