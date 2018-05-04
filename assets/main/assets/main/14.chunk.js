webpackJsonp([14],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(262)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(264),
  /* scopeId */
  "data-v-4b71b2f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 263:
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
  props: {},
  data: function data() {
    return {
      arr: [{
        name: '知乎-发现',
        href: '//www.zhihu.com/explore'
      }, {
        name: '豆瓣',
        href: '//m.douban.com'
      }]
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next();
  },

  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  beforeCreate: function beforeCreate() {
    // this.$store.complete(['main', 'home'], home);
    // this.$store.complete(['main', 'projects'], obj);
  },
  created: function created() {},
  mounted: function mounted() {
    // this.$store.dispatch('main/home/fetch', { what: 'jianshu' });
    // this.$store.dispatch('main/projects/init');
  },

  methods: {
    // register(store) {
    //   store.complete(['main', 'home'], home);
    //   store.complete(['main', 'projects'], obj);
    // },
    // preFetch(store) {
    //   store.dispatch('main/projects/init');
    // }
  }
};

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n        " + _vm._s(_vm.user.name) + "\n      ")])])])])
},staticRenderFns: []}

/***/ })

});