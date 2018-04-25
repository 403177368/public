webpackJsonp([3],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
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

exports.default = {
  components: {
    Management: __webpack_require__(201)
  },
  mounted: function mounted() {
    this.$store.dispatch('admin/items/changeDB', '/lowdb');
  }
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(212),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(53);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TitleBar: __webpack_require__(204),
    MyForm: __webpack_require__(208)
    // Editing: require('./Editing.vue'),
    // Edit: require('./Edit.vue')
  },
  data: function data() {
    return {
      item: {
        // id: '',
        name: '',
        price: 0,
        desc_: '',
        specs: [],
        class_: '',
        sub_class: ''
      },
      current: -1
    };
  },
  computed: {
    items: function items() {
      return this.$store.state.admin.items;
    }
  },
  mounted: function mounted() {
    // this.$store.dispatch('admin/items/changeDB', '');
  },
  methods: {
    reset: function reset() {
      for (var key in this.item) {
        this.item[key] = '';
      }
    },
    TO_ITEM: function TO_ITEM(i) {
      this.$store.commit('admin/items/SET_ITEM', this.items[i]);
      location.href = '#/item';
    },
    CHECK_TOGGLE: function CHECK_TOGGLE(i) {
      this.$store.commit('admin/items/CHECK_TOGGLE', i);
    },
    edit: function edit(i) {
      // this.$store.commit('FETCH_ITEM',JSON.parse(
      //   JSON.stringify(this.items[i])
      // ));
      this.$store.commit('admin/items/EDIT_ITEM', { i: i });
    },
    postItem: function postItem() {
      this.$store.dispatch('admin/items/postItem', (0, _stringify2.default)(this.item));
    },

    SAVE_ITEM: function SAVE_ITEM() {
      if (!this.item.id) {
        this.item.id = new Date().getTime() + '';
        this.$store.dispatch('admin/items/addItem', (0, _stringify2.default)(this.item));
      } else {
        this.$store.dispatch('admin/items/saveItem', (0, _stringify2.default)(this.item));
      }
      this.reset();
    },
    // DELETE_ITEMS: function() {
    //   var ids = [];
    //   this.items.items.forEach(a=> {
    //     if(a._checked){
    //       ids.push(a.id)
    //     }
    //   });
    //   this.$store.dispatch(
    //     'items/deleteItems',ids
    //   );
    // },
    getTime: function getTime() {
      var time = new Date();
      var fullYear = time.getFullYear();
      var month = time.getMonth() + 1;
      time = fullYear + '-' + month;
      return time;
    }
  }
};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(207),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
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

exports.default = {
  props: {
    title: {}
  }
};

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TitleBar"
  }, [_vm._v("\n  " + _vm._s(_vm.title) + "\n")])
},staticRenderFns: []}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(211),
  /* scopeId */
  "data-v-2c970050",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 209:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
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

exports.default = {
  props: {
    form: {
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      form: {}
    };
  }
};

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "Myform form-horizontal container-fluid"
  }, [_c('div', {
    staticClass: "row-fluid"
  }, [_c('div', {
    staticClass: "col-xs-2"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_vm._v("aaaaaaaa")])]), _c('div', {
    staticClass: "col-xs-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control"
  })])])])])
}]}

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Management"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.$store.dispatch('admin/items/fetchItems')
      }
    }
  }, [_vm._v("All")])]), _vm._l((_vm.items.brands), function(a) {
    return _c('li', [_c('a', {
      on: {
        "click": function($event) {
          _vm.$store.dispatch('admin/items/fetchItems', {
            query: '?brand=' + a
          })
        }
      }
    }, [_vm._v(_vm._s(a))])])
  })], 2)]), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(0), _c('tbody', _vm._l((_vm.items.items), function(a, i) {
    return _c('tr', {
      key: "a.id",
      class: a._checked ? 'info' : ''
    }, [_c('td', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": a._checked
      },
      on: {
        "click": function($event) {
          _vm.CHECK_TOGGLE(i)
        }
      }
    })]), _c('td', {
      on: {
        "click": function($event) {
          _vm.TO_ITEM(i)
        }
      }
    }, [_vm._v(_vm._s(a.id))]), _c('td', [_vm._v(_vm._s(a.name))]), _c('td', [_vm._v(_vm._s(a.description))]), _c('td', [_vm._v("￥" + _vm._s(Number(a.price).toFixed(2)))]), _c('td', [_c('div', {
      staticClass: "edit btn btn-primary btn-xs",
      on: {
        "click": function($event) {
          _vm.edit(i)
        }
      }
    }, [_vm._v("edit")])])])
  }))])]), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "manipulation"
  }, [_c('div', {
    staticClass: "delete btn btn-primary",
    on: {
      "click": function($event) {
        _vm.$store.dispatch('admin/items/patchItems')
      }
    }
  }, [_vm._v("patch")]), _c('div', {
    staticClass: "save btn btn-success",
    on: {
      "click": _vm.postItem
    }
  }, [_vm._v("new")]), _c('div', {
    staticClass: "delete btn btn-danger",
    on: {
      "click": function($event) {
        _vm.$store.dispatch('admin/items/deleteItemsChecked')
      }
    }
  }, [_vm._v("delete")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th'), _c('th', [_vm._v("id")]), _c('th', [_vm._v("name")]), _c('th', [_vm._v("description")]), _c('th', [_vm._v("price")]), _c('th')])])
}]}

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    staticClass: "RouteLowdb"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('a', [_vm._v("Lowdb")])])]), _c('management')], 1)])])
},staticRenderFns: []}

/***/ })

});