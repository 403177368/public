webpackJsonp([14],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(311)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(313),
  /* template */
  __webpack_require__(314),
  /* scopeId */
  "data-v-4b71b2f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4b71b2f6&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4b71b2f6&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 313:
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
    next(function (vm) {
      if (!vm.user.loggedIn) {}
    });
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

/***/ 314:
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