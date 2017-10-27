webpackJsonp([1],{

/***/ 15:
/***/ (function(module, exports) {

module.exports = window.Vuex;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(271);


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(14);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#root',
	store: _store2.default,
	components: {
		App: __webpack_require__(272)
	},
	template: '<app></app>'
});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(273),
  /* template */
  __webpack_require__(284),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 273:
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

exports.default = {
	components: {
		MyHeader: __webpack_require__(35),
		MyFooter: __webpack_require__(36),
		BackToTop: __webpack_require__(34),

		Item: __webpack_require__(274)
	},
	computed: {
		dir: function dir() {
			return this.$store.state.dir;
		},
		items: function items() {
			return this.$store.state.items;
		}
	},
	mounted: function mounted() {
		this.$store.dispatch('init');
	}
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(275)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(277),
  /* template */
  __webpack_require__(283),
  /* scopeId */
  "data-v-50303ad6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("01a4acf6", content, true);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".Item[data-v-50303ad6]{background:#127bab;overflow:hidden}.Item .not_found[data-v-50303ad6]{padding:20px 0;text-align:center;color:#fff}.Item .content1739 .item[data-v-50303ad6]{padding:0 0 30px;margin-top:30px;background:#fff;overflow:hidden}.Item .content1739 .item .header[data-v-50303ad6]{margin:15px 20px 10px;padding-bottom:10px;border-bottom:1px solid #d3d3d3}.Item .content1739 .item .header a[data-v-50303ad6]:link,.Item .content1739 .item .header a[data-v-50303ad6]:visited{color:#000}.Item .content1739 .item .images[data-v-50303ad6]{float:left;margin:0 0 0 20px}.Item .content1739 .item .images .thumbnail[data-v-50303ad6]{width:464px;height:464px;padding:2px;border:1px solid #d3d3d3}.Item .content1739 .item .images .thumbnail img[data-v-50303ad6]{width:100%}.Item .content1739 .item .images .tabs[data-v-50303ad6]{width:256px;margin:auto}.Item .content1739 .item .images .tabs li[data-v-50303ad6]{float:left;width:54px;height:54px;margin:4px 2px;padding:2px;border:1px solid #d3d3d3}.Item .content1739 .item .images .tabs li img[data-v-50303ad6]{width:100%}.Item .content1739 .item .images .tabs li[data-v-50303ad6]:hover{background:#dd4a4d}.Item .content1739 .information[data-v-50303ad6]{float:left;width:470px;margin:0 0 0 20px;overflow:hidden}.Item .content1739 .information .name[data-v-50303ad6]{padding:15px 0;font-size:200%}.Item .content1739 .information .priceWrapper[data-v-50303ad6]{padding:10px 0;border-bottom:1px solid #d3d3d3;color:#dd4a4d;font-size:40px;font-family:helvetica}.Item .content1739 .information .priceWrapper .price[data-v-50303ad6]{font-size:50px;color:#df4949}.Item .content1739 .information .buy[data-v-50303ad6]{float:left;width:187px;height:45px;margin:0 20px 0 0;line-height:45px;text-align:center;background:#dd4a4d;cursor:pointer;color:#fff;border-radius:5px}.Item .content1739 .information .buy[data-v-50303ad6]:hover{background:#cc3134}.Item .content1739 .information .toCart[data-v-50303ad6]{float:left;width:183px;height:41px;line-height:41px;text-align:center;background:#fff;border:2px solid #dd4a4d;color:#dd4a4d;cursor:pointer;border-radius:5px}.Item .content1739 .information .toCart[data-v-50303ad6]:hover{color:#cc3134;border:2px solid #cc3134}.Item .content1739 .shuliang[data-v-50303ad6]{padding:30px 0}.Item .content1739 .shuliang p[data-v-50303ad6]{float:left;height:30px;vertical-align:top;line-height:30px}.Item .content1739 .shuliang .counter[data-v-50303ad6]{overflow:hidden}.Item .content1739 .shuliang .counter .minus[data-v-50303ad6],.Item .content1739 .shuliang .counter .plus[data-v-50303ad6]{float:left;width:28px;height:28px;border:1px solid #d3d3d3;line-height:28px;text-align:center;background:#f4f4f4;cursor:pointer}.Item .content1739 .shuliang .counter .quantity[data-v-50303ad6]{float:left;width:49px;height:28px;border-top:1px solid #d3d3d3;border-bottom:1px solid #d3d3d3;line-height:28px;text-align:center}.Item .content1739 .shuliang .counter .minus[data-v-50303ad6]:hover,.Item .content1739 .shuliang .counter .plus[data-v-50303ad6]:hover{border:1px solid #dd4a4d;color:#dd4a4d}", ""]);

// exports


/***/ }),

/***/ 277:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TabbedBox: __webpack_require__(278)
  },
  data: function data() {
    return {
      id: '',
      query: '',
      current: 0,
      quantity: 1
    };
  },
  mounted: function mounted() {
    //this.get_id();
    this.get_query();
    this.$store.dispatch('fetchItem', this.get_id());
  },
  computed: {
    item: function item() {
      return this.$store.state.item;
    }
  },
  methods: {
    get_id: function get_id() {
      var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/, '');
      return id;
    },
    get_query: function get_query() {
      this.query = location.href.match(/\?.+/)[0];
    },
    get_item: function get_item() {
      var self = this;
    },
    plus: function plus() {
      this.quantity++;
    },
    minus: function minus() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    pick: function pick(n) {
      this.current = n;
    }
  }
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(279)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(282),
  /* scopeId */
  "data-v-3e7038ac",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("bed1d57a", content, true);

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".TabbedBox[data-v-3e7038ac]{width:1000px;margin:30px auto 40px}.TabbedBox .tabs[data-v-3e7038ac]{width:100%;height:60px;background:#fff;overflow:hidden;border-bottom:1px solid #bababa}.TabbedBox .tabs li[data-v-3e7038ac]{float:left;margin:20px;color:#127bab;cursor:pointer}.TabbedBox .tabs li.active[data-v-3e7038ac]{border-bottom:4px solid orange}.TabbedBox .content[data-v-3e7038ac]{position:relative}.TabbedBox .content>li[data-v-3e7038ac]{box-sizing:border-box;width:100%;padding:20px;background:#fff}.TabbedBox .content img[data-v-3e7038ac]{margin-bottom:20px}", ""]);

// exports


/***/ }),

/***/ 281:
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
//
//
//
//
//
//
//

exports.default = {
	props: {
		tabs: {
			default: function _default() {
				return ['商品详情', '评价晒单', '购买须知'];
			}
		}
	},
	data: function data() {
		return {
			current: 0
		};
	},
	methods: {
		pick: function pick(i) {
			this.current = i;
		}
	}
};

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TabbedBox"
  }, [_c('ul', {
    staticClass: "tabs"
  }, _vm._l((_vm.tabs), function(a, i) {
    return _c('li', {
      class: _vm.current === i ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.pick(i)
        }
      }
    }, [_vm._v("\n\t\t" + _vm._s(a))])
  })), _c('ul', {
    staticClass: "content"
  }, [_c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current === 0),
      expression: " current===0 "
    }],
    staticClass: "imgs_detailed"
  }, [_c('img', {
    attrs: {
      "src": "https://img.alicdn.com/imgextra/i1/1114511827/TB2.d3zaBUSMeJjy1zkXXaWmpXa_!!1114511827.jpg"
    }
  }), _c('img', {
    attrs: {
      "src": ""
    }
  }), _c('img', {
    attrs: {
      "src": ""
    }
  })]), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current === 1),
      expression: " current===1 "
    }]
  }, [_vm._v("\n\t\t尚无评价晒单")]), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current === 2),
      expression: " current===2 "
    }]
  }, [_c('h3', [_vm._v("退货政策")]), _vm._m(0), _c('h3', [_vm._v("配送速度查询")]), _vm._m(1), _c('h3', [_vm._v("服务承诺")]), _vm._m(2), _c('h3', [_vm._v("权利声明")]), _vm._m(3)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\t\t\t\t自实际收到商品之日起15日内可以退货。"), _c('br'), _vm._v("    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。\n\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\t\t\t\t1.下单成功之后，订单会随时更新您的订单状态。"), _c('br'), _vm._v("\n\t\t\t\t2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。"), _c('br'), _vm._v("\n\t\t\t\t3.订单显示已发货状态，即可看到物流信息更新显示。"), _c('br'), _vm._v("\t4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。\n\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\t\t\t\t1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。"), _c('br'), _vm._v("\n\t\t\t\t2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。"), _c('br'), _vm._v("\n\t\t\t\t3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。\n\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\t\t\t\t\t\t\t\t\t\t\t\t\t\t时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。"), _c('br'), _vm._v("\t\t\t\t注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！\n\t\t\t")])
}]}

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Item"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.item.state === 'failed'),
      expression: " item.state==='failed' "
    }],
    staticClass: "not_found"
  }, [_vm._v("\n    商品未找到\n  ")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.item.state === 'resolved'),
      expression: " item.state==='resolved' "
    }],
    staticClass: "content1739"
  }, [_c('div', {
    staticClass: "item container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('p', [_c('a', {
    attrs: {
      "href": "../"
    }
  }, [_vm._v("主页")]), _vm._v(" > "), _c('a', {
    staticClass: "item_class",
    attrs: {
      "href": ""
    }
  }, [_vm._v(_vm._s(_vm.item.content.class_))]), _vm._v(" > "), _c('a', {
    staticClass: "sub_class",
    attrs: {
      "href": ""
    }
  }, [_vm._v(_vm._s(_vm.item.content.sub_class))])])]), _vm._m(0), _c('div', {
    staticClass: "information"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.item.content.name))]), _c('p', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.item.content.desc_))]), _c('p', {
    staticClass: "priceWrapper"
  }, [_c('b', [_vm._v("￥"), _c('span', {
    staticClass: "price"
  }, [_vm._v(_vm._s(Number(_vm.item.content.price).toFixed(2)))])])]), _c('div', {
    staticClass: "shuliang"
  }, [_c('p', [_vm._v("数量：")]), _c('div', {
    staticClass: "counter"
  }, [_c('div', {
    staticClass: "minus",
    on: {
      "click": _vm.minus
    }
  }, [_vm._v("-")]), _c('div', {
    staticClass: "quantity"
  }, [_vm._v(_vm._s(_vm.quantity))]), _c('div', {
    staticClass: "plus",
    on: {
      "click": _vm.plus
    }
  }, [_vm._v("+")])])]), _c('div', {
    staticClass: "buy"
  }, [_vm._v("立即购买")]), _c('div', {
    staticClass: "toCart",
    on: {
      "click": function($event) {
        _vm.$store.dispatch('addToCart', _vm.item.content.id)
      }
    }
  }, [_vm._v(_vm._s(_vm.item.inCart ? '已加入购物车' : '放入购物车'))])])]), _c('tabbed-box')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "images"
  }, [_c('div', {
    staticClass: "thumbnail"
  }, [_c('img', {
    attrs: {
      "src": "//img.alicdn.com/bao/uploaded/i2/TB16LpENVXXXXXaaXXXs9oT8FXX_030716.jpg_b.jpg"
    }
  })]), _c('ul', {
    staticClass: "tabs"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": "//img.alicdn.com/bao/uploaded/i2/TB16LpENVXXXXXaaXXXs9oT8FXX_030716.jpg_b.jpg"
    }
  })]), _c('li', [_c('img', {
    attrs: {
      "src": "//img.alicdn.com/bao/uploaded/i2/TB16LpENVXXXXXaaXXXs9oT8FXX_030716.jpg_b.jpg"
    }
  })]), _c('li', [_c('img', {
    attrs: {
      "src": "//img.alicdn.com/bao/uploaded/i2/TB16LpENVXXXXXaaXXXs9oT8FXX_030716.jpg_b.jpg"
    }
  })]), _c('li', [_c('img', {
    attrs: {
      "src": "//img.alicdn.com/bao/uploaded/i2/TB16LpENVXXXXXaaXXXs9oT8FXX_030716.jpg_b.jpg"
    }
  })])])])
}]}

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    }
  }, [_c('back-to-top'), _c('my-header', {
    attrs: {
      "dir": _vm.dir
    }
  }), _c('item'), _c('my-footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ })

},[270]);