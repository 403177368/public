webpackJsonp([4],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(275)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(276),
  /* template */
  __webpack_require__(278),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(159);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(170);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

exports.default = (0, _defineProperty3.default)({
  computed: {
    list: function list() {
      return this.$store.state.main.blog.posts.items;
    }
  },
  methods: {},
  mounted: function mounted() {}
}, "methods", {});

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(157);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "Posts"
  }, [_c('div', {
    staticClass: "panel panel-default panel-full-sm"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('i', {
    staticClass: "fa fa-book"
  }), _vm._v(" My Blog\n      ")]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.list), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('p', {}, [_vm._v(_vm._s(a.author) + " · " + _vm._s(a.time))]), _c('p', {
      staticClass: "title"
    }, [_c('router-link', {
      staticClass: "title",
      attrs: {
        "to": '/main/post/' + a.id
      }
    }, [_vm._v(_vm._s(a.title) + "\n            ")])], 1), _c('div', {
      staticClass: "views"
    }, [_c('i', {
      staticClass: "fa fa-eye"
    }), _vm._v(" " + _vm._s(a.views))])])
  }))])])])
},staticRenderFns: []}

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blog = __webpack_require__(277);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Posts: __webpack_require__(167)
  },
  computed: {
    list: function list() {
      return this.$store.state.main.blog.items;
    },
    focus: function focus() {
      return this.$store.state.main.blog.focus;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main', 'blog'], _blog2.default);
  },

  mounted: function mounted() {
    this.$store.dispatch('main/blog/init');
  },
  methods: {
    register: function register(store) {
      store.complete(['main', 'blog'], _blog2.default);
    },
    preFetch: function preFetch(store) {
      return store.dispatch('main/blog/init');
    },
    toPost: function toPost(id) {
      this.$router.go({ path: '/main/main/post/' + id });
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

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(31);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    posts: {
      inited: false,
      items: []
    },
    focus: {
      inited: false,
      items: []
    }
  },
  actions: {
    init: function init(_ref) {
      var dispatch = _ref.dispatch;

      return _axios2.default.all([dispatch('initPosts'), dispatch('initFocus')]);
    },
    initPosts: function initPosts(_ref2) {
      var state = _ref2.state,
          dispatch = _ref2.dispatch,
          commit = _ref2.commit;

      if (state.posts.inited === false) {
        return dispatch('fetchPosts').then(function (res) {
          var arr = res.data;
          commit('SET_POSTS', arr);
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        return _promise2.default.resolve();
      }
    },
    fetchPosts: function fetchPosts(ctx) {
      return (0, _axios2.default)({
        url: '/api/marked',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
    },
    initFocus: function initFocus(_ref3) {
      var state = _ref3.state,
          dispatch = _ref3.dispatch,
          commit = _ref3.commit;

      return new _promise2.default(function (resolve, reject) {
        if (state.focus.inited === false) {
          dispatch('fetchFocus').then(function (res) {
            if (res.data.errno === 0) {
              commit('SET_FOCUS', res.data.data.items);
              resolve();
            } else {
              reject();
            }
          }).catch(function (err) {
            console.log(err);
          });
        } else {
          resolve();
        }
      });
    },
    fetchFocus: function fetchFocus(ctx) {
      return (0, _axios2.default)({
        url: '/api/sqlite/posts',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
    }
  },
  mutations: {
    SET_POSTS: function SET_POSTS(state, arr) {
      var _state$posts$items;

      state.posts.inited = true;
      state.posts.items.length = 0;
      (_state$posts$items = state.posts.items).push.apply(_state$posts$items, (0, _toConsumableArray3.default)(arr));
    },
    SET_FOCUS: function SET_FOCUS(state, arr) {
      var _state$focus$items;

      state.focus.inited = true;
      state.focus.items.length = 0;
      (_state$focus$items = state.focus.items).push.apply(_state$focus$items, (0, _toConsumableArray3.default)(arr));
    }
  }
};

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "Blog"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8"
  }, [_c('posts')], 1), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "panel panel-default panel-full-sm"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Focus\n            ")]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.focus.items), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('a', {
      attrs: {
        "href": a.url
      }
    }, [_vm._v(_vm._s(a.title))])])
  }))])])])])])])
},staticRenderFns: []}

/***/ })

});