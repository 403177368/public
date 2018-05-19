webpackJsonp([16],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(261)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(264),
  /* scopeId */
  "data-v-304f6735",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-304f6735&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableRoute.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-304f6735&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableRoute.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.TableRoute[data-v-304f6735] {\n  margin-left: 200px;\n  overflow: hidden;\n}\n.TableRoute table[data-v-304f6735] {\n  border-collapse: collapse;\n  border: none;\n  border-color: lightgrey;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.TableRoute table thead th[data-v-304f6735] {\n  border-left: none;\n  border-right: none;\n}\n.TableRoute table th[data-v-304f6735] {\n  font-size: 14px;\n  font-weight: normal;\n  width: 200px;\n  height: 30px;\n}\n", ""]);

// exports


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TableRoute"
  }, [_c('table', {
    attrs: {
      "border": "1"
    }
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("ID")]), _c('th', [_vm._v("Name")]), _c('th', [_vm._v("Price")])])]), _c('tbody', [_c('tr', [_c('th', [_vm._v("0001")]), _c('th', [_vm._v("iPhone 7")]), _c('th', [_vm._v("6000")])])])])])
}]}

/***/ })

});