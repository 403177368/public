/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "assets/main/" + ({}[chunkId]||chunkId) + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/main/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(26);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{
  //   path: '*',
  //   // component: {
  //   //   template: '<div class="Route404">404: This route doesn\'t exist.</div>'
  //   // }
  //   component: () => import('./void.vue')
  // }, {
  path: '/',
  redirect: '/main/home'
}, {

  path: '/main',
  component: function component() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 36));
  },
  children: [{
    path: 'home',
    component: function component() {
      return __webpack_require__.e/* import() */(0/* limit */).then(__webpack_require__.bind(null, 37));
    }
  }, {
    path: 'projects',
    component: function component() {
      return __webpack_require__.e/* import() */(0/* limit */).then(__webpack_require__.bind(null, 38));
    }
  }, {
    path: 'canvas',
    component: function component() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 39));
    }
  }, {
    path: 'blog',
    component: function component() {
      return __webpack_require__.e/* import() */(0/* limit */).then(__webpack_require__.bind(null, 40));
    }
  }, {
    path: 'post/:id',
    component: function component() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 41));
    }
  }, {
    path: 'signin',
    component: function component() {
      return __webpack_require__.e/* import() */(0/* limit */).then(__webpack_require__.bind(null, 42));
    }
  }, {
    path: 'cnode_post/:id',
    component: function component() {
      return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 43));
    }
  }]

}, {

  path: '/binance',
  component: function component() {
    return __webpack_require__.e/* import() */(0/* limit */).then(__webpack_require__.bind(null, 44));
  }

}, {

  path: '/mall',
  component: function component() {
    return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 45));
  },
  children: [{
    path: 'cart',
    component: function component() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 46));
    }
  }]

}, {
  path: '/admin',
  component: function component() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 47));
  },
  children: [{
    path: 'dashboard',
    component: function component() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 48));
    }
  }, {
    path: 'deployment',
    component: function component() {
      return __webpack_require__.e/* import() */(2/* limit */).then(__webpack_require__.bind(null, 49));
    }
  }, {
    path: 'lowdb',
    alias: '',
    component: function component() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 50));
    }
  }, {
    path: 'sequelize',
    component: function component() {
      return __webpack_require__.e/* import() */(1/* limit */).then(__webpack_require__.bind(null, 51));
    }
  }, {
    path: 'tables',
    component: function component() {
      return __webpack_require__.e/* import() */(3/* limit */).then(__webpack_require__.bind(null, 52));
    }
  }]
}];

var router = new _vueRouter2.default({
  mode: 'history',
  base: '/main',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: routes
});

// if (module.hot) {
//   module.hot.accept();
// }

exports.router = router;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(5);

var _vuex2 = _interopRequireDefault(_vuex);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// in Node.js environment:
if (typeof window === 'undefined') {
  _vue2.default.use(_vuex2.default);
}

// var enhance = function(Vuex, options) {
// 	var copy = options;

// 	function replace(ctx) {
// 		var modules = ctx.modules;
// 		if (modules) {
// 			for (let key in modules) {
// 				// copy[key] = modules[key];
// 				if (modules[key] instanceof Promise) {
// 					modules[key] = {
// 						_activated: false,
// 						namespaced: true,
// 						state: {}
// 					}
// 				} else {
// 					modules[key]._activated = true;
// 					replace(modules[key])
// 				}
// 			}
// 		}
// 	}

// 	replace(options);

// 	var store = new Vuex.Store(options);

// 	var queue = [];

// 	var agent = {};

// 	agent.state = store.state;

// 	agent.dispatch = function(type, payload) {
// 		var arr = type.split('/');
// 		var ctx = copy;
// 		console.log(arr)
// 		for (let i = 0; i < arr.length - 1; i++) {
// 			ctx = ctx[arr[i]];
// 		}
// 		console.log(ctx)
// 		// store.dispatch(type, payload);
// 	}

// 	agent.commit = function(type, options) {
// 		store.commit(type, payload);
// 	}

// 	agent.getters = store.getters;

// 	console.log(copy)

// 	return agent;
// }

// var store = enhance(Vuex, {
// 	modules: {
//     app: require('./app/').default,

//     // main: require('./main/main.store.js').default,
//     main: import('./main/main.store.js'),
//     admin: require('./admin/index.js').default,
//   },
//   state: {
//   },
//   actions: {
//     // init(ctx, url) {}
//   }
// })


var store = new _vuex2.default.Store({
  modules: {
    app: __webpack_require__(29).default,

    // main: require('./main/main.store.js').default,
    admin: __webpack_require__(6).default
  },
  state: {},
  actions: {
    // init(ctx, url) {}
  }
});

store.complete = function (path, rawModule) {
  if (!store._modulesNamespaceMap[key]) {
    if (typeof path === 'string') path = [path];
    var key = path.join('/');

    var state;

    var hasState = function () {
      var parent = store.state;
      for (var i = 0; i < path.length; i++) {
        var _key = path[i];
        if (parent[_key]) {
          parent = parent[_key];
          continue;
        } else {
          return false;
        }
      }
      state = parent;
      return true;
    }();

    // if (!store._modulesNamespaceMap[key]) {
    if (hasState) {
      var raw = _extends({}, rawModule);
      raw.state = state;
      store.registerModule(path, raw);
    } else {
      store.registerModule(path, rawModule);
    }
  }
};

// console.log(store)

exports.default = store;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = window.Vuex;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    inited: false,
    height: 0
  },
  modules: {
    items: __webpack_require__(27).default,
    tip: __webpack_require__(28).default
  },
  action: {
    init: function init(_ref) {
      var state = _ref.state,
          dispatch = _ref.dispatch;

      if (state.inited === false) {
        dispatch('set_height');
      }
    },
    set_height: function set_height(_ref2) {
      var state = _ref2.state;

      var height = window.innerHeight - 50;
      state.height = height;
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(2);

var _a = __webpack_require__(35);

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.__VUEX_PRELOADED_STATE__) {
  _store2.default.replaceState(window.__VUEX_PRELOADED_STATE__);
}

_router.router.onReady(function () {
  _app2.default.$mount('.App');
});

console.log(_a2.default.num);
// console.log(installedModules);

if (false) {
  module.hot.accept();
  // module.hot.accept(a);
  // module.hot.dispose(function() {});
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(10);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _components = __webpack_require__(17);

var _components2 = _interopRequireDefault(_components);

var _router = __webpack_require__(2);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import axios from 'axios';

(0, _components2.default)(_vue2.default);


var app = new _vue2.default({
  store: _store2.default,
  router: _router.router,
  components: {
    App: __webpack_require__(31)
  },
  template: '<app></app>'
});

exports.default = app;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue) {
  Vue.component('v-slider', __webpack_require__(18));
  Vue.component('v-calender', __webpack_require__(22));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
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


exports.default = {
  props: {
    // type: Array
    // Options waiting to be picked.
    options: {
      default: function _default() {
        var arr = [];
        for (var i = 0; i < 50; i++) {
          arr.push({
            text: i
          });
        }
        return arr;
      }
    },
    // type: Function
    // Function called when the value picked changes.
    onChange: {
      default: function _default() {
        return function (nv, ov) {
          console.log(nv);
        };
      }
    }
  },
  components: {},
  data: function data() {
    return {
      margin: 0,
      bar_width: 0,
      current: 0,

      active: false,
      down: false,

      x0: 0,
      x1: 0,

      left: 0
    };
  },

  computed: {
    span: function span() {
      return 100 / (this.options.length - 1);
    },
    span_px: function span_px() {
      return this.bar_width / (this.options.length - 1);
    },
    pos: function pos() {
      if (this.options.length === 1) {
        return 50;
      }
      return this.span * this.current;
    },
    disabled: function disabled() {
      if (this.options.length === 0 || this.options.length === 1) {
        return true;
      }
      return false;
    }
  },
  watch: {
    options: function options(nv, ov) {
      var _this = this;

      // Pick option 0 when options change.
      this.pick(0);
      setTimeout(function () {
        _this.setMargin();
      }, 300);
    }
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    init: function init() {
      var _this2 = this;

      var self = this;
      setTimeout(function () {
        _this2.resize();
        _this2.setMargin();
      }, 300);
      window.addEventListener('resize', function () {
        setTimeout(self.resize.bind(self), 300);
      });
      document.addEventListener('mousemove', function (e) {
        if (!_this2.disabled && _this2.down) {
          _this2.x1 = e.pageX;
          _this2.left += _this2.x1 - _this2.x0;
          if (_this2.left < 0) {
            _this2.left = 0;
          } else if (_this2.left > _this2.bar_width) {
            _this2.left = _this2.bar_width;
          }

          _this2.pick(Math.round(_this2.left / _this2.span_px));

          _this2.x0 = _this2.x1;
        }
      });
      document.addEventListener('mouseup', function () {
        _this2.down = false;
        _this2.active = false;
      });
    },
    pick: function pick(i) {
      this.current = i;
      this.setMargin();
      this.onChange(i);
    },
    resize: function resize() {
      this.bar_width = Number(document.defaultView.getComputedStyle(this.$refs.bar).width.replace(/px/, ''));
    },
    setMargin: function setMargin() {
      this.margin = Number(document.defaultView.getComputedStyle(this.$refs.tooltip).width.replace(/px/, '')) / 2;
    },
    mouseover: function mouseover(e) {
      this.active = true;
    },
    mouseout: function mouseout() {
      if (this.down === false) {
        this.active = false;
      }
    },
    mousedown: function mousedown(e) {
      this.down = true;
      this.x0 = e.pageX;
      this.left = this.current * this.span_px;
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Slider-666",
    attrs: {
      "ondragstart": "return false;",
      "draggable": "false"
    }
  }, [_c('div', {
    staticClass: "innner-666"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "8px"
    }
  }), _c('div', {
    ref: "bar",
    staticClass: "bar-666",
    attrs: {
      "draggable": "false"
    }
  }), _c('div', {
    staticClass: "tooltip-wrapper",
    style: ('left: ' + _vm.pos + '%; visibility: ' + (_vm.active || _vm.down ? 'visible' : 'hidden') + ';')
  }, [_c('div', {
    ref: "tooltip",
    staticClass: "tooltip-666",
    style: ('left: -' + _vm.margin + 'px;')
  }, [_vm._v("\n        " + _vm._s(_vm.options[_vm.current] && _vm.options[_vm.current].text) + "\n      ")])]), _c('div', {
    staticClass: "btn-wrapper-666",
    style: ('left: ' + _vm.pos + '%;')
  }, [_c('div', {
    staticClass: "btn-666",
    class: (_vm.disabled ? 'disabled' : '') + ' ' + ((!_vm.disabled && _vm.active) ? 'active' : ''),
    attrs: {
      "draggable": "false"
    },
    on: {
      "mouseover": _vm.mouseover,
      "mouseout": _vm.mouseout,
      "mousedown": function($event) {
        _vm.mousedown($event)
      }
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-54ec0e2b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
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
//

var uid = 0;
var map = {};

exports.default = {
  props: {
    placeholder: {
      default: function _default() {
        return '请选择日期';
      }
    },
    'initValue': {},
    onPick: {
      default: function _default() {
        return function () {};
      }
    }
  },
  components: {},
  data: function data() {
    return {
      id: uid++,

      show: false,

      year: 0,
      month: 0,
      date: 0,
      day: 0,

      calender: [],

      value: ''
    };
  },

  computed: {
    user: function user() {}
  },
  mounted: function mounted() {
    if (this.calender.length === 0) {
      this.init();
    }
  },

  methods: {
    hijack: function hijack(e) {
      e.stopPropagation();
    },
    show_panel: function show_panel() {
      this.show = true;
    },
    hide_panel: function hide_panel() {
      this.show = false;
    },
    init: function init() {
      var _this = this;

      document.addEventListener('click', function () {
        if (_this.show) {
          _this.hide_panel();
        }
      });
      if (this.initValue) {
        // Generate the calender according to initValue and _pick it.
        this.set(this.initValue);
        this._pick({
          raw: this.initValue
        });
      } else {
        // Generate the calender to today and pick today.
        this.to_today();
      }
    },
    set: function set(time) {
      time = new Date(time);
      this.year = time.getFullYear();
      this.month = time.getMonth() + 1;
      this.date = time.getDate();
      this.day = time.getDay();

      this.generate();
    },
    to_today: function to_today() {
      var time = new Date().getTime();
      this.set(time);
    },

    // Regenerate the calender.
    generate: function generate() {
      this.calender.length = 0;

      var start = new Date(this.year + '-' + this.month + '-01').getTime() - 7 * 24 * 3600 * 1000;
      if (this.month !== 12) {
        var end = new Date(this.year + '-' + (this.month + 1) + '-00');
      } else {
        var end = new Date(this.year + 1 + '-01-00');
      }
      var end_date = end.getDate();
      // var day = start.getDay();

      var started = false;
      var inited = false;
      var arr;
      var limit = Infinity;

      while (start < limit) {
        // for (let i = 0; i < 43; i++) {
        // if (!inited) {
        //   inited = true;
        //   start += 24 * 3600 * 1000;
        //   continue;
        // }

        if (!started) {
          if (new Date(start).getDay() === 6) {
            started = true;
          }
          start += 24 * 3600 * 1000;
          limit = start + 42 * 24 * 3600 * 1000;
          continue;
        }

        if (new Date(start).getDay() === 0) {
          arr = [];
          this.calender.push(arr);
        }

        var year = new Date(start).getFullYear();
        var month = new Date(start).getMonth() + 1;
        var date = new Date(start).getDate();

        var obj = {
          raw: start,
          date: date,
          able: month === this.month ? true : false,
          today: year === new Date().getFullYear() && month === new Date().getMonth() + 1 && date === new Date().getDate() ? true : false
        };
        arr.push(obj);
        start += 24 * 3600 * 1000;
      }
      // };
      // console.log(this.calender)
    },
    input_set_year: function input_set_year(e) {
      var val = Number(e.target.value);
      if (typeof val !== 'number' || isNaN(val)) {
        val = 1900;
      } else if (val < 1900) {
        val = 1900;
      } else if (val > 2099) {
        val = 2099;
      }
      this.year = val;
      this.$forceUpdate();
      this.generate();
    },
    input_set_month: function input_set_month(e) {
      var val = Number(e.target.value);
      if (typeof val !== 'number' || isNaN(val)) {
        val = 1;
      } else if (val < 1) {
        val = 1;
      } else if (val > 12) {
        val = 12;
      }
      // console.log(val)
      this.month = val;
      this.$forceUpdate();
      this.generate();
    },

    // To next month.
    next: function next(e) {
      e.preventDefault();
      e.stopPropagation();
      var next = this.month + 1;
      if (next > 12) {
        this.month = 1;
        this.year++;
      } else {
        this.month = next;
      }
      this.generate();
    },

    // To previous month.
    prev: function prev(e) {
      e.preventDefault();
      e.stopPropagation();
      var prev = this.month - 1;
      if (prev < 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month = prev;
      }
      this.generate();
    },


    // Methods about picking:
    // Pick a date but not trigger 'onPick'.
    _pick: function _pick(obj) {
      var time = new Date(obj.raw);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      var date = time.getDate();
      if (date < 10) {
        date = '0' + date;
      }
      // Set value.
      this.value = year + '-' + month + '-' + date;
    },

    // Pick a date and trigger 'onPick' callback.
    pick: function pick(obj) {
      this._pick(obj);
      this.hide_panel();
      this.onPick(this.value);
    },
    pickToday: function pickToday() {
      this.to_today();
      this.pick({
        raw: new Date()
      });
    }
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DatePicker",
    on: {
      "click": function($event) {
        _vm.hijack($event)
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background": "white"
    },
    attrs: {
      "placeholder": _vm.placeholder,
      "readonly": "readonly"
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "focus": _vm.show_panel,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "calender-panel"
  }, [_c('div', {
    staticClass: "calender-heading"
  }, [_c('div', {
    staticClass: "calender-left"
  }, [_c('i', {
    staticClass: "fa fa-angle-left",
    on: {
      "click": function($event) {
        _vm.prev($event)
      }
    }
  })]), _c('div', {
    staticClass: "calender-middle"
  }, [_c('div', {}, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.year),
      expression: "year"
    }],
    staticClass: "calender-input",
    staticStyle: {
      "width": "50px"
    },
    domProps: {
      "value": (_vm.year)
    },
    on: {
      "blur": function($event) {
        _vm.input_set_year($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.year = $event.target.value
      }
    }
  }), _vm._v("\n          年\n          "), _c('input', {
    staticClass: "calender-input",
    staticStyle: {
      "width": "30px"
    },
    domProps: {
      "value": _vm.month
    },
    on: {
      "blur": function($event) {
        _vm.input_set_month($event)
      }
    }
  }), _vm._v("\n          月\n        ")])]), _c('div', {
    staticClass: "calender-right"
  }, [_c('i', {
    staticClass: "fa fa-angle-right pull-right",
    on: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  })])]), _c('div', {
    staticClass: "calender-body"
  }, [_c('table', {
    staticClass: "calender-table"
  }, [_vm._m(0), _c('tbody', _vm._l((_vm.calender), function(a) {
    return _c('tr', _vm._l((a), function(b) {
      return _c('td', {
        style: ('color: ' + (b.able ? '' : 'lightgrey') + ';' +
          'background: ' + (b.today ? '#F7BA2A' : '') + ';'),
        on: {
          "click": function($event) {
            _vm.pick(b)
          }
        }
      }, [_vm._v("\n              " + _vm._s(b.date) + "\n            ")])
    }))
  }))])]), _c('div', {
    staticClass: "calender-footer"
  }, [_c('div', {
    staticClass: "calender-btn",
    staticStyle: {
      "display": "table",
      "margin": "auto"
    },
    on: {
      "click": _vm.pickToday
    }
  }, [_vm._v("\n        今天\n      ")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("日")]), _c('th', [_vm._v("一")]), _c('th', [_vm._v("二")]), _c('th', [_vm._v("三")]), _c('th', [_vm._v("四")]), _c('th', [_vm._v("五")]), _c('th', [_vm._v("六")])])])
}]}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = window.VueRouter;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  namespaced: true,

  state: {
    inited: false,
    db: '/lowdb',

    brands: ['Apple', 'Huawei'],
    items: [],
    beingEditted: -1
  },

  getters: {
    item: function item(state) {
      return state.items[state.beingEditted] || {};
    }
  },

  actions: {
    fetchItems: function fetchItems(_ref) {
      var state = _ref.state,
          rootState = _ref.rootState,
          commit = _ref.commit;

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          query = _ref2.query;

      var url;
      // console.log(state.db)
      fetch('/api' + state.db + '/items' + (query ? query : ''), {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        // console.log(res)
        if (res.status === 200) {
          return res.json();
        } else {
          // console.log(res.json());
        }
      }).then(function (data) {
        var items = data.data.items;
        if (!Array.isArray(items)) {
          items = [items];
        }
        items.forEach(function (a) {
          a._checked = false;
        });
        // console.log(items)
        commit('FETCH_ITEMS', items);
      }).catch(function (err) {
        console.log(err);
      });
    },
    updateItems: function updateItems(ctx) {},
    patchItems: function patchItems(ctx) {
      // console.log(state);
      fetch('/api' + ctx.state.db + '/items/patch', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log(res.json());
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    saveItem: function saveItem(_ref3, item_json) {
      var commit = _ref3.commit;

      fetch('/api' + ctx.state.db + '/items/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: item_json
      }).then(function (res) {
        if (res.status === 200) {
          // return res.json()
        } else {
            // return Promise.reject(res.json())
          }
      }).then(function (data) {
        var new_item = JSON.parse(item_json);
        new_item.checked = false;
        commit('SAVE_ITEM', new_item);
      }).catch(function (err) {
        console.log(err);
      });
    },
    postItem: function postItem(ctx, item_json) {
      fetch('/api' + ctx.state.db + '/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: item_json
      }).then(function (res) {
        if (res.status === 200) {
          res.json().then(function (data) {
            var new_item = data.data;
            new_item._checked = false;
            ctx.commit('POST_ITEM', new_item);
            ctx.dispatch('admin/tip/show', { msg: 'Item created!' }, { root: true });
          });
        } else {
          ctx.dispatch('admin/tip/show', { msg: 'Failed to create item!' }, { root: true });
          res.json.then(function (echo) {
            ctx.dispatch('admin/tip/show', { msg: echo.msg }, { root: true });
          });
          // throw new Error('');
        }
      }).catch(function (err) {
        // ctx.dispatch('tip/show', {msg: err}, {root: true})
        // console.log(err);
      });
    },
    patchItem: function patchItem(_ref4, _ref5) {
      var state = _ref4.state,
          rootState = _ref4.rootState,
          dispatch = _ref4.dispatch,
          commit = _ref4.commit;
      var id = _ref5.id,
          patch_json = _ref5.patch_json;

      fetch('/api' + state.db + '/items/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: patch_json
      }).then(function (res) {
        if (res.status === 200) {
          res.json().then(function (data) {
            commit('PATCH_ITEM', patch_json);
            dispatch('admin/tip/show', { msg: 'Field updated!' }, { root: true });
          });
        } else {
          // return Promise.reject(res.json())
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteItems: function deleteItems(_ref6, ids) {
      var state = _ref6.state,
          rootState = _ref6.rootState,
          dispatch = _ref6.dispatch,
          commit = _ref6.commit;

      // console.log('deleteItems')
      fetch('/api' + state.db + '/items/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(ids)
      }).then(function (res) {
        if (res.status === 204) {
          commit('DELETE_ITEMS');
          dispatch('admin/tip/show', { msg: 'Item deleted!' }, { root: true });
        } else {
          res.json().then(function (data) {
            console.warn(data.msg);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteItemsChecked: function deleteItemsChecked(_ref7) {
      var state = _ref7.state,
          dispatch = _ref7.dispatch;

      var ids = [];
      state.items.forEach(function (a) {
        if (a._checked) {
          ids.push(a.id);
        }
      });
      if (ids.length === 0) {
        dispatch('admin/tip/show', { msg: 'No item selected!' }, { root: true });
      } else {
        dispatch('deleteItems', ids);
      }
    },
    changeDB: function changeDB(_ref8, db) {
      var commit = _ref8.commit,
          dispatch = _ref8.dispatch;

      commit('CHANGE_DB', db);
      dispatch('fetchItems');
    }
  },

  mutations: {
    FETCH_ITEMS: function FETCH_ITEMS(state, items) {
      var _state$items;

      state.items.length = 0;
      (_state$items = state.items).push.apply(_state$items, _toConsumableArray(items));
    },
    EDIT_ITEM: function EDIT_ITEM(state, pl) {
      state.beingEditted = pl.i;
    },
    EDIT_ITEM_OVER: function EDIT_ITEM_OVER(state) {
      state.beingEditted = -1;
    },

    SAVE_ITEM: function SAVE_ITEM(state, item) {
      state.items.forEach(function (a) {
        if (a.id === item.id) {
          for (var key in a) {
            a[key] = item[key];
          }
        }
      });
    },
    POST_ITEM: function POST_ITEM(state, new_item) {
      state.items.push(new_item);
    },
    PATCH_ITEM: function PATCH_ITEM(state, patch_json) {
      _extends(state.items[state.beingEditted], JSON.parse(patch_json));
    },
    DELETE_ITEMS: function DELETE_ITEMS(state) {
      var i = state.items.length - 1;
      while (i >= 0) {
        if (state.items[i]._checked === true) {
          state.items.splice(i, 1);
        }
        i--;
      }
    },

    CHECK_TOGGLE: function CHECK_TOGGLE(state, i) {
      state.items[i]._checked = !state.items[i]._checked;
    },

    CHANGE_DB: function CHANGE_DB(state, db) {
      state.db = db;
    }
  }

};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    id: -1,
    show: false,
    msg: ''
  },
  actions: {
    show: function show(_ref, _ref2) {
      var state = _ref.state;
      var msg = _ref2.msg;

      state.id++;
      var id = state.id;
      state.msg = msg;
      state.show = true;
      setTimeout(function () {
        if (state.id === id) {
          state.show = false;
        }
      }, 1200);
    }
  },
  mutations: {}
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {};

var actions = {};

var mutations = {};

exports.default = {
  namespaced: true,
  modules: {
    user: __webpack_require__(30).default
  },
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  loggedIn: false,
  state: '',
  name: ''
};

var actions = {
  login: function login(ctx, user) {
    ctx.commit('SET_STATE', { val: 'pending' });
    return (0, _axios2.default)({
      url: '/api/login',
      // this is essential cause a fetch request is without cookie by default
      withCredentials: true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    }).then(function (res) {
      if (res.status === 200) {
        ctx.commit('LOGIN', user);
        ctx.commit('SET_STATE', { val: 'resolved' });
        _router.router.push('/main/home');
      }
    }).catch(function (err) {
      ctx.commit('SET_STATE', { val: 'failed' });
      console.log(err);
    });
  },
  fetchUser: function fetchUser(ctx) {
    return (0, _axios2.default)({
      url: '/api/user',
      // this is essential cause a fetch request is without cookie by default
      withCredentials: false,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      if (res.status === 200) {
        return ctx.commit('LOGIN', res.data);
      }
    }).catch(function (err) {
      console.log(err);
    });
  },
  logout: function logout(ctx) {
    fetch('/api/logout/', {
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      if (res.status === 200) {
        return ctx.commit('LOGOUT');
      } else {
        return;
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
};

var mutations = {
  SET_STATE: function SET_STATE(state, _ref) {
    var val = _ref.val;

    state.state = val;
  },
  LOGIN: function LOGIN(state) {
    state.loggedIn = true;
    state.name = 'soap';
    state.state = 'resolved';
  },
  LOGOUT: function LOGOUT(state) {
    state.loggedIn = false;
    state.name = '';
  }
};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
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

exports.default = {
  components: {},
  watch: {
    $route: function $route() {
      // window.scroll(0, 0);
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('app/user/fetchUser');
    // var undefined = 1;
    // console.log(undefined)
  },

  methods: {}
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "App"
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var num = 4;
var a = 2;

exports.default = { num: num };

// if (module.hot) {
// 	module.hot.accept()
// }

/***/ })
/******/ ]);