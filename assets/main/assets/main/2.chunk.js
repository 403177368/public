webpackJsonp([2],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(237)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(250),
  /* scopeId */
  "data-v-4f860d3b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(146);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(148);
module.exports = __webpack_require__(2).Array.from;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(11);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(26);
var call = __webpack_require__(45);
var isArrayIter = __webpack_require__(46);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(149);
var getIterFn = __webpack_require__(47);

$export($export.S + $export.F * !__webpack_require__(48)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(28);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(27);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    navbar: {
      options: [{
        name: 'Home',
        icon: 'fa-home',
        to: '/main/home'
      }, {
        name: 'Projects',
        icon: 'fa-code',
        to: '/main/projects'
      }, {
        name: 'Canvas',
        icon: 'fa-image',
        to: '/main/canvas'
      }, {
        name: 'Blog',
        icon: 'fa-book',
        to: '/main/blog'
      }, {
        name: 'Farm',
        icon: 'fa-gamepad',
        href: '/farm/'
      }, {
        name: 'Vue',
        icon: 'fa-cog',
        href: '/vue/'
      }, {
        name: 'Mall',
        icon: 'fa-laptop',
        to: '/mall'
      }, {
        name: 'Admin',
        icon: 'fa-cogs',
        to: '/admin'
      }]
    },
    theme: {
      options: ['blue', 'zhihu', 'angulur', 'github'],
      val: 'zhihu'
    }
  },
  modules: {
    // routes
    // home: require('./home/home.js').default,
    // blog: require('./blog/blog.js').default,
    // projects: require('./projects/projects.js').default,
    post: __webpack_require__(162).default,
    // Canvas: require('./canvas/Canvas.js').default,

    // data
    // posts: require('./posts.js').default,
    // focus: require('./focus.js').default,
    news: __webpack_require__(163).default
  },
  actions: {
    init: function init(_ref) {
      var _this = this;

      var state = _ref.state,
          dispatch = _ref.dispatch;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var theme;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  setTimeout(function () {
                    console.log(111);
                    resolve();
                  }, 1000);
                });

              case 2:
                theme = localStorage.getItem('theme');

                if (theme) {
                  dispatch('switch_theme', { name: theme });
                }
                state.inited = true;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    switch_theme: function switch_theme(_ref2, _ref3) {
      var state = _ref2.state;
      var name = _ref3.name;

      state.theme.val = name;
      localStorage.setItem('theme', name);
    }
  }
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  firstMount: true,
  tick: 0,
  state: 'pending',
  id: null,
  html: ''
};

var actions = {
  fetchPost: function fetchPost(ctx, _ref) {
    var id = _ref.id;

    ctx.commit('FETCH_POST_PENDING');

    // var params = router.currentRoute.path.split('/');
    // var id = params[params.length - 1];
    // console.log(id)

    return (0, _axios2.default)({
      url: '/api/marked/' + id,
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      ctx.commit('SET_POST', { newPost: res.data, id: id });
    }).catch(function (err) {
      console.log(err);
    });
  }
};

var mutations = {
  FETCH_POST_PENDING: function FETCH_POST_PENDING(state) {
    state.state = 'pending';
    state.html = '';
  },
  SET_POST: function SET_POST(state, _ref2) {
    var newPost = _ref2.newPost,
        id = _ref2.id;

    state.state = 'resolved';
    state.tick++;
    state.id = id;
    state.html = newPost;
  }
};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(145);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    status: '',
    items: [],
    page: 1
  },
  getters: {
    nav: function nav(state) {
      var nav = [];
      var start, end;
      if (state.page <= 2) {
        start = 1;
        end = 5;
      } else {
        start = state.page - 2;
        end = state.page + 2;
      }
      for (var i = start; i < end + 1; i++) {
        nav.push(i);
      }
      console.log(nav);
      return nav;
    }
  },
  actions: {
    init: function init(_ref) {
      var state = _ref.state,
          dispatch = _ref.dispatch;

      if (state.inited === false) {
        dispatch('fetch', { page: 1 });
      }
    },
    fetch: function fetch(_ref2, _ref3) {
      var state = _ref2.state;
      var page = _ref3.page;

      state.status = 'loading';
      return (0, _axios2.default)({
        url: '//cnodejs.org/api/v1/topics?page=' + page + '&limit=20',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        var _state$items;

        // var el = document.querySelector('#container-1996');
        // window.scroll(0, el.offsetTop);
        state.items.length = 0;
        (_state$items = state.items).push.apply(_state$items, (0, _toConsumableArray3.default)(res.data.data));
        state.inited = true;
        state.page = page;
        state.status = 'success';
      }).catch(function (err) {
        var _state$items2;

        state.status = 'error';
        state.items.length = 0;
        (_state$items2 = state.items).push.apply(_state$items2, [{
          author: {}
        }]);
        state.inited = true;
        state.page = 1;
        console.log(err);
      });
    },
    to_page: function to_page(_ref4, _ref5) {
      var state = _ref4.state,
          dispatch = _ref4.dispatch;
      var page = _ref5.page;

      dispatch('fetch', { page: page }).then(function () {
        state.page = page;
      });
    }
  },
  mutations: {}
};

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexMain = __webpack_require__(161);

var _indexMain2 = _interopRequireDefault(_indexMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Navbar: __webpack_require__(239),
    MyMenu: __webpack_require__(243),
    // Slider: require('./Slider.vue'),
    MyFooter: __webpack_require__(247)
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main'], _indexMain2.default);
  },
  mounted: function mounted() {
    this.$store.dispatch('main/init');
    // this.$store.dispatch('main/home/fetch', {what: 'jianshu'});
  },

  methods: {
    register: function register(store) {
      store.complete(['main'], _indexMain2.default);
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

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(240)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  "data-v-66ff04d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 241:
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

exports.default = {
  data: function data() {
    return {
      show: false
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  methods: {
    toggle: function toggle() {
      this.show = !this.show;
    },
    hide: function hide() {
      this.show = false;
    }
  }
};

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Navbar"
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('router-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("MadSoap")]), _c('div', {
    staticClass: "navbar-toggle-- visible-xs",
    on: {
      "click": _vm.toggle
    }
  }, [_c('i', {
    staticClass: "fa fa-navicon"
  })])], 1), _c('ul', {
    staticClass: "nav navbar-nav hidden-xs"
  }, _vm._l((_vm.$store.state.main.navbar.options), function(a) {
    return _c('li', [(a.to) ? _c('router-link', {
      attrs: {
        "to": a.to
      }
    }, [_vm._v(_vm._s(a.name))]) : _vm._e(), (a.href) ? _c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.name))]) : _vm._e()], 1)
  })), _c('ul', {
    staticClass: "nav navbar-nav pull-right hidden-xs"
  }, [_c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.user.name),
      expression: "!user.name"
    }]
  }, [_c('router-link', {
    attrs: {
      "to": "/main/signin"
    }
  }, [_vm._v("Signin")])], 1), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.user.name),
      expression: "user.name"
    }],
    on: {
      "click": function($event) {
        _vm.$store.dispatch('app/user/logout')
      }
    }
  }, [_c('a', [_vm._v("Logout")])])])]), _c('transition', {
    attrs: {
      "name": "slide-down"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "navbar-menu box",
    on: {
      "click": _vm.hide
    }
  }, [_c('ul', {
    staticClass: "nav visible-xs"
  }, _vm._l((_vm.$store.state.main.navbar.options), function(a) {
    return _c('li', [(a.to) ? _c('router-link', {
      attrs: {
        "to": a.to
      }
    }, [_c('i', {
      class: 'fa ' + a.icon
    }), _vm._v(" " + _vm._s(a.name) + "\n            ")]) : _vm._e(), (a.href) ? _c('a', {
      attrs: {
        "href": a.href
      }
    }, [_c('i', {
      class: 'fa ' + a.icon
    }), _vm._v(" " + _vm._s(a.name) + "\n            ")]) : _vm._e()], 1)
  })), _c('ul', {
    staticClass: "nav visible-xs"
  }, [(!_vm.user.loggedIn) ? _c('li', [_c('router-link', {
    attrs: {
      "to": "/main/signin"
    }
  }, [_c('i', {
    staticClass: "fa fa-sign-in"
  }), _vm._v(" Signin\n            ")])], 1) : _vm._e(), (_vm.user.loggedIn) ? _c('li', [_c('router-link', {
    attrs: {
      "to": "/main/profile"
    }
  }, [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" Profile\n            ")])], 1) : _vm._e(), (_vm.user.loggedIn) ? _c('li', {
    on: {
      "click": function($event) {
        _vm.$store.dispatch('app/user/logout')
      }
    }
  }, [_c('a', [_c('i', {
    staticClass: "fa fa-sign-out"
  }), _vm._v(" Logout\n            ")])]) : _vm._e()])])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(244)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  "data-v-ae7bca36",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 244:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 245:
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

exports.default = {
  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    theme: function theme() {
      return this.$store.state.main.theme;
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;
    }
  }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Menu container-fluid",
    class: _vm.active ? 'active' : ''
  }, [_c('div', {
    staticClass: "tag--",
    on: {
      "click": _vm.toggle
    }
  }), _c('ul', {
    staticClass: "ls-group"
  }, [_c('li', {
    staticClass: "ls-group-heading"
  }, [_vm._v("\n      Themes\n    ")]), _vm._l((_vm.theme.options), function(a) {
    return _c('li', {
      staticClass: "ls-group-item"
    }, [_c('a', {
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/switch_theme', {
            name: a
          })
        }
      }
    }, [_vm._v(_vm._s(a))])])
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(248)

var Component = __webpack_require__(5)(
  /* script */
  null,
  /* template */
  __webpack_require__(249),
  /* scopeId */
  "data-v-2dce59a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "Footer"
  }, [_vm._v("\n\tCopyright ©2016 SoapTech\n")])
},staticRenderFns: []}

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.main.inited),
      expression: " $store.state.main.inited "
    }],
    staticClass: "RouteMain",
    class: _vm.$store.state.main.theme.val
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('navbar'), _c('keep-alive', [(_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1), (!_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e(), _c('my-footer')], 1)])
},staticRenderFns: []}

/***/ })

});