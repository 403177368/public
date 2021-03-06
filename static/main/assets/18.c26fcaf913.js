webpackJsonp([18],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(270),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ced1c88!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ced1c88!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.RouteGraphql {\n  padding: 15px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    // Management: require('../Management.vue')
  },
  mounted: function mounted() {
    this.query();
    this.mutate();
  },

  methods: {
    query: function query() {
      var str = '\n        query {\n          user {\n            items {\n              id\n              name\n            }\n          }\n        }\n      ';
      (0, _axios2.default)({
        url: '/api/v1?query=' + str,
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {}).catch(function (err) {});
    },
    mutate: function mutate() {
      var data = {
        query: '\n          mutation HaHa(\n            $id: [Int]\n            $brand: [String]\n          ) {\n            items_1: getItems(\n              id: $id\n              brand: $brand\n            ) {\n              id\n              name\n              price\n              brand\n            }\n            items_2: getItems {\n              id\n              name\n              brand\n            }\n          }\n        ',
        variables: {
          id: [137, 173],
          brand: ['CK', 'Apple']
        }
      };
      (0, _axios2.default)({
        url: '/api/v1',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        data: data
      }).then(function (res) {}).catch(function (err) {});
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

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "RouteGraphql"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('a', [_vm._v("Graphql")])])])])])])
},staticRenderFns: []}

/***/ })

});