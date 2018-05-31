webpackJsonp([2],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(276)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(278),
  /* template */
  __webpack_require__(293),
  /* scopeId */
  "data-v-4f860d3b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(166);

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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(168);
module.exports = __webpack_require__(4).Array.from;


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(13);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(28);
var call = __webpack_require__(48);
var isArrayIter = __webpack_require__(49);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(169);
var getIterFn = __webpack_require__(50);

$export($export.S + $export.F * !__webpack_require__(51)(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(53);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(29);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(54);

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
    post: __webpack_require__(183).default,
    // Canvas: require('./canvas/Canvas.js').default,

    // data
    // posts: require('./posts.js').default,
    // focus: require('./focus.js').default,
    news: __webpack_require__(184).default
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

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(19);

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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(165);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _axios = __webpack_require__(17);

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
        // url: '//cnodejs.org/api/v1/topics?page=' + page + '&limit=20',
        url: '/api/cnode?page=' + page,
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        var _state$items;

        state.items.length = 0;
        (_state$items = state.items).push.apply(_state$items, (0, _toConsumableArray3.default)(res.data.data));
        state.inited = true;
        state.page = page;
        state.status = 'success';

        var el = document.querySelector('#container-1996');
        window.scroll(0, el.offsetTop - 30);
      }).catch(function (err) {
        alert(err.message);
        // state.status = 'error';
        // state.items.length = 0;
        // state.items.push(...[{
        //   author: {

        //   }
        // }]);
        // state.inited = true;
        // state.page = 1;
        // console.log(err);
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4f860d3b&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.main.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4f860d3b&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.main.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.bg[data-v-4f860d3b] {\n  min-height: 100vh;\n}\n", ""]);

// exports


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexMain = __webpack_require__(182);

var _indexMain2 = _interopRequireDefault(_indexMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Navbar: __webpack_require__(279),
    MyMenu: __webpack_require__(284),
    // Slider: require('./Slider.vue'),
    MyFooter: __webpack_require__(289)
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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(280)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(283),
  /* scopeId */
  "data-v-66ff04d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66ff04d4&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66ff04d4&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.Navbar[data-v-66ff04d4] {\n  position: relative;\n  height: 50px;\n  margin-bottom: 20px;\n}\n.Navbar .navbar[data-v-66ff04d4] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  z-index: 99;\n}\n.Navbar .navbar .navbar-header .navbar-toggle--[data-v-66ff04d4] {\n  float: right;\n  height: 50px;\n  padding: 15px 20px 15px 15px;\n}\n.Navbar .box[data-v-66ff04d4] {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n  z-index: 99;\n}\n.Navbar .hidden-one[data-v-66ff04d4] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 30%;\n}\n.Navbar .navbar-menu .nav[data-v-66ff04d4] {\n  float: left;\n  width: 50%;\n}\n.Navbar .navbar-menu .nav i[data-v-66ff04d4] {\n  width: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 282:
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

/***/ 283:
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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(285)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(287),
  /* template */
  __webpack_require__(288),
  /* scopeId */
  "data-v-ae7bca36",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ae7bca36&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ae7bca36&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Menu.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.Menu[data-v-ae7bca36] {\n  position: fixed;\n  bottom: 50px;\n  right: -200px;\n  width: 200px;\n  height: 400px;\n  background: white;\n  z-index: 999;\n  transition: 300ms;\n}\n.Menu.active[data-v-ae7bca36] {\n  right: 0;\n}\n.Menu .tag--[data-v-ae7bca36] {\n  position: absolute;\n  left: -20px;\n  bottom: 20px;\n  width: 20px;\n  height: 44px;\n  background: black;\n}\n", ""]);

// exports


/***/ }),

/***/ 287:
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

/***/ 288:
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

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(290)

var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(292),
  /* scopeId */
  "data-v-2dce59a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2dce59a1&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2dce59a1&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.Footer[data-v-2dce59a1] {\n  padding: 12px 0;\n  text-align: center;\n  font-size: 14px;\n  clear: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "Footer"
  }, [_vm._v("\n\tCopyright ©2016 SoapTech\n")])
},staticRenderFns: []}

/***/ }),

/***/ 293:
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