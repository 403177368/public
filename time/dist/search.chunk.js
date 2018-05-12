webpackJsonp([2],{

/***/ 15:
/***/ (function(module, exports) {

module.exports = window.Vuex;

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(576);


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(18);

var _store = __webpack_require__(14);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#root',
	store: _store2.default,
	components: {
		App: __webpack_require__(577)
	},
	template: '<app></app>',
	mounted: function mounted() {
		var self = this;
		self.$store.dispatch('items/fetchItems');
	},
	methods: {}
});

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(578),
  /* template */
  __webpack_require__(589),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		MyHeader: __webpack_require__(35),
		MyFooter: __webpack_require__(36),
		BackToTop: __webpack_require__(34),
		SearchResults: __webpack_require__(579)
	},
	computed: {
		dir: function () {
			return this.$store.state.dir;
		},
		items: function () {
			return this.$store.state.items;
		}
	}
});

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(580)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(582),
  /* template */
  __webpack_require__(588),
  /* scopeId */
  "data-v-3a024d90",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(581);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6c7e4262", content, true);

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".SearchResults[data-v-3a024d90]{padding-bottom:100px;background:#127bab;overflow:hidden}.SearchResults .center[data-v-3a024d90]{width:970px;background:#fff;padding:0 15px;margin-top:80px}.SearchResults .center .all[data-v-3a024d90]{padding:20px 0 10px;border-bottom:1px solid #d3d3d3;color:grey}.SearchResults .center .all a[data-v-3a024d90]{cursor:pointer}.SearchResults .center .all a[data-v-3a024d90]:link,.SearchResults .center .all a[data-v-3a024d90]:visited{color:#000}.SearchResults .center .Row[data-v-3a024d90]{padding:10px 0;border-bottom:1px solid #d3d3d3}.SearchResults .center .Row .title[data-v-3a024d90]{float:left;margin-right:15px;color:grey;font-size:15px}.SearchResults .center .Row a[data-v-3a024d90]{display:inline-block;margin-right:10px;cursor:pointer}.SearchResults .center .Row a.active[data-v-3a024d90]{color:#e83729}.SearchResults .center .Row a[data-v-3a024d90]:link{color:#000;margin-right:15px}.SearchResults .center .Row a[data-v-3a024d90]:visited{color:#000}.SearchResults .center .Row a[data-v-3a024d90]:hover{color:#e83729}", ""]);

// exports


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Showcase: __webpack_require__(583)
  },
  computed: {
    dir() {
      return this.$store.state.dir;
    },
    search() {
      return this.$store.state._search;
    },
    items() {
      return this.$store.state.items;
    }
  },
  methods: {
    searchItems(key, i) {
      this.$store.dispatch('searchItems', { key, i });
    },
    searchItemsByBrand(i) {
      this.$store.dispatch('searchItemsByBrand', i);
    }
  }
});

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(584)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(586),
  /* template */
  __webpack_require__(587),
  /* scopeId */
  "data-v-9138c00a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("622b8f5c", content, true);

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".Showcase[data-v-9138c00a]{width:1000px;margin:auto;padding:10px 0;background:#fff;overflow:hidden}.Showcase .item__[data-v-9138c00a]{display:block;box-sizing:border-box;float:left;width:240px;margin:5px;padding:5px;border:3px solid transparent;transition:.2s}.Showcase .item__[data-v-9138c00a]:link,.Showcase .item__[data-v-9138c00a]:visited{color:#000}.Showcase .item__[data-v-9138c00a]:hover{border:3px solid #c40000}.Showcase .item__ .thumb[data-v-9138c00a]{width:224px;height:224px}.Showcase .item__ .price[data-v-9138c00a]{font-size:20px;color:#c40000}.Showcase .item__ .name[data-v-9138c00a]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}", ""]);

// exports


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['items'],
  computed: {
    dir: function () {
      return this.$store.state.dir;
    }
  }
});

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Showcase"
  }, _vm._l((_vm.items), function(a) {
    return _c('a', {
      staticClass: "item__",
      attrs: {
        "href": _vm.dir.root + '/item.html?id=' + a.id
      }
    }, [_c('img', {
      staticClass: "thumb",
      attrs: {
        "src": "//img.alicdn.com/bao/uploaded/i4/TB1tqD6RFXXXXamaXXXPd6L8pXX_024206.jpg_b.jpg"
      }
    }), _c('p', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(Number(a.price).toFixed(2)))]), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(a.name || '--'))])])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "SearchResults"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "center"
  }, [_c('div', {
    staticClass: "all"
  }, [_c('p', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("全部商品")]), _vm._v(" > 共" + _vm._s(_vm.items.length) + "件商品")])]), _c('div', {
    staticClass: "Row"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("类别")]), _vm._l((_vm.search.classes.items), function(a, i) {
    return _c('a', {
      class: i === _vm.search.classes.current ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.searchItems('classes', i)
        }
      }
    }, [_vm._v(_vm._s(a))])
  })], 2), _c('div', {
    staticClass: "Row"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("品牌")]), _vm._l((_vm.search.brands.items), function(a, i) {
    return _c('a', {
      class: i === _vm.search.brands.current ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.searchItemsByBrand(i)
        }
      }
    }, [_vm._v(_vm._s(a))])
  })], 2), _vm._m(0)])]), _c('showcase', {
    attrs: {
      "items": _vm.$store.state.items.items
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Row"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("价格")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("0-49")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("50-99")]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("100-199")])])
}]}

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "App"
  }, [_c('back-to-top'), _c('my-header', {
    attrs: {
      "dir": _vm.dir
    }
  }), _c('search-results', {
    attrs: {
      "items": _vm.items
    }
  }), _c('my-footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ })

},[575]);