webpackJsonp([19],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(211)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  "data-v-a67932b0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    (0, _axios2.default)({
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
  methods: {
    deploy: function deploy() {
      (0, _axios2.default)({
        url: '/api/admin/deploy',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {});
    },
    reload: function reload() {
      // axios({
      //   url: '/api/admin/reload',
      //   // this is essential cause a fetch request is without cookie by default
      //   credentials: 'include',
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   mode: 'cors',
      // }).then(res => {
      // });
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

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "AdminDeployment"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('v-breadcrumb', {
    attrs: {
      "items": [{
        name: 'Deployment'
      }]
    }
  }), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.deploy
    }
  }, [_vm._v("\n        Deploy\n      ")]), _c('div', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("\n        Reload\n      ")])]), _c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', _vm._l((_vm.list), function(a) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(a.createdAt))])])
  }))])], 1)])
},staticRenderFns: []}

/***/ })

});