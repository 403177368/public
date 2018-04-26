webpackJsonp([19],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(230),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  "data-v-d1f1f1b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
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

exports.default = {
  components: {},
  data: function data() {
    return {
      data: ''
    };
  },

  computed: {},
  mounted: function mounted() {},
  methods: {
    get: function get(url) {
      var _this = this;

      this.data = 'Loading...';
      this.$store.dispatch('get', { url: url }).then(function (res) {
        _this.data = (0, _stringify2.default)(res, null, 2).replace(/\n/g, '<br/>');
      });
    }
  }
};

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "route-crawler"
  }, [_c('div', {
    staticClass: "btn-group btn-group-sm",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('div', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.get('/api/crawler/echojs')
      }
    }
  }, [_vm._v("\n      Echojs\n    ")]), _c('div', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.get('/api/crawler/tieba')
      }
    }
  }, [_vm._v("\n      Tie-ba\n    ")])]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body",
    domProps: {
      "innerHTML": _vm._s(_vm.data)
    }
  }, [_vm._v("\n      " + _vm._s(_vm.data) + "\n    ")])])])
},staticRenderFns: []}

/***/ })

});