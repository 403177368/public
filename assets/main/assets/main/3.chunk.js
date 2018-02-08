webpackJsonp([3],{

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
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

/***/ 117:
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

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
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


exports.default = {
  data: function data() {
    return {
      list: []
    };
  },

  components: {},
  beforeCreate: function beforeCreate() {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    axios({
      url: '/api/sqlite/deployments',
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      console.log(res);
      _this.list.length = 0;
      _this.list.push(res.data.data.items);
    });
  },

  computed: {},
  methods: {}
};

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "AdminDeployment"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_vm._m(0), _vm._m(1), _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', _vm._l((_vm.list), function(a) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(a.createdAt))])])
  }))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('a', [_vm._v("Deployment")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "btn btn-primary"
  }, [_vm._v("\n        Deploy\n      ")])])
}]}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(161)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  "data-v-a67932b0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});