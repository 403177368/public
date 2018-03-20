webpackJsonp([16],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(288)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(290),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    // Management: require('../Management.vue')
  },
  mounted: function mounted() {
    var data = {
      query: '\n        mutation HaHa(\n          $id: [Int]\n          $brand: [String]\n        ) {\n          items_1: getItems(\n            id: $id\n            brand: $brand\n          ) {\n            id\n            name\n            price\n            brand\n          }\n          items_2: getItems {\n            id\n            name\n            brand\n          }\n        }\n      ',
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

/***/ 290:
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