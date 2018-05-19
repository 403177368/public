webpackJsonp([12],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(357)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(359),
  /* template */
  __webpack_require__(361),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(358);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dd4968fc!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RouteMall.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dd4968fc!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RouteMall.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.RouteMall .item {\n  display: inline-block;\n}\n.RouteMall img {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(360);

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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(29);

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

/***/ 361:
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