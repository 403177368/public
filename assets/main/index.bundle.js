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
/******/ 		21: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(33);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(8);
var hide = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(79);
var toPrimitive = __webpack_require__(80);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(11);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vue = __webpack_require__(19);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(73);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{
  path: '*',
  // component: {
  //   template: '<div class="Route404">404: This route doesn\'t exist.</div>'
  // }
  component: function component() {
    return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 130));
  }
}, {
  path: '/',
  redirect: '/main/home'
}, {

  path: '/main',
  component: function component() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 131));
  },
  children: [{
    path: 'home',
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 132));
    },
    meta: {
      keepAlive: true
    }
  }, {
    path: 'projects',
    component: function component() {
      return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 133));
    }
  }, {
    path: 'canvas',
    component: function component() {
      return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 134));
    }
  }, {
    path: 'blog',
    component: function component() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 135));
    }
  }, {
    path: 'post/:id',
    component: function component() {
      return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 136));
    }
  }, {
    path: 'signin',
    component: function component() {
      return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 137));
    }
  }, {
    path: 'cnode_post/:id',
    component: function component() {
      return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 138));
    }
  }]

}, {

  path: '/binance',
  component: function component() {
    return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 139));
  }

}, {

  path: '/mall',
  component: function component() {
    return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 140));
  },
  children: [{
    path: 'cart',
    component: function component() {
      return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 141));
    }
  }]

}, {

  path: '/d3',
  component: function component() {
    return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 142));
  }

}, __webpack_require__(74).default];

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
/* 19 */
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(31);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(33);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(11);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(82);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(89)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(90);
var hide = __webpack_require__(5);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(91);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(94);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(42);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(11);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var invoke = __webpack_require__(109);
var html = __webpack_require__(38);
var cel = __webpack_require__(20);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(28);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _vue = __webpack_require__(19);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(53);

var _vuex2 = _interopRequireDefault(_vuex);

var _axios = __webpack_require__(15);

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
    app: __webpack_require__(115).default,

    // main: require('./main/main.store.js').default,
    admin: __webpack_require__(52).default
  },
  state: {},
  actions: {
    get: function get(_ref, _ref2) {
      var state = _ref.state;
      var url = _ref2.url;

      return (0, _axios2.default)({
        url: url,
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
    }
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
      var raw = (0, _extends3.default)({}, rawModule);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(87);

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
/* 52 */
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
    items: __webpack_require__(75).default,
    tip: __webpack_require__(98).default,

    graphql: __webpack_require__(99).default
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
/* 53 */
/***/ (function(module, exports) {

module.exports = window.Vuex;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(56);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(48);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(18);

var _a = __webpack_require__(121);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(57);

var _vue = __webpack_require__(19);

var _vue2 = _interopRequireDefault(_vue);

var _components = __webpack_require__(64);

var _components2 = _interopRequireDefault(_components);

var _router = __webpack_require__(18);

var _store = __webpack_require__(48);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import axios from 'axios';

(0, _components2.default)(_vue2.default);


var app = new _vue2.default({
  store: _store2.default,
  router: _router.router,
  components: {
    App: __webpack_require__(117)
  },
  template: '<app></app>'
});

exports.default = app;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(63);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Vue) {
  Vue.component('v-slider', __webpack_require__(65));
  Vue.component('v-calender', __webpack_require__(69));
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(66)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(70)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-54ec0e2b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports) {

module.exports = window.VueRouter;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  path: '/admin',
  component: function component() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 122));
  },
  children: [{
    path: 'dashboard',
    component: function component() {
      return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 123));
    }
  }, {
    path: 'deployment',
    component: function component() {
      return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 124));
    }
  }, {
    path: 'lowdb',
    alias: '',
    component: function component() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 125));
    }
  }, {
    path: 'sequelize',
    component: function component() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 126));
    }
  }, {
    path: 'tables',
    component: function component() {
      return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 127));
    }
  }, {
    path: 'graphql',
    component: function component() {
      return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 128));
    }
  }, {
    path: 'crawler',
    component: function component() {
      return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 129));
    }
  }]
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(51);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(50);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          dispatch = _ref.dispatch,
          commit = _ref.commit;

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          query = _ref2.query;

      var url;
      // console.log(state.db)
      dispatch('get', { url: '/api' + state.db + '/items' + (query ? query : '') }, { root: true }).then(function (data) {
        // console.log(data);
        var items = data.data.data.items;
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
        body: (0, _stringify2.default)(ids)
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
      (_state$items = state.items).push.apply(_state$items, (0, _toConsumableArray3.default)(items));
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
      (0, _extends3.default)(state.items[state.beingEditted], JSON.parse(patch_json));
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(81) });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(85);
var pIE = __webpack_require__(86);
var toObject = __webpack_require__(17);
var IObject = __webpack_require__(31);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(83)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(24);
var toAbsoluteIndex = __webpack_require__(84);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(95);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(92);
var descriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(93);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(38).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(17);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(8);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(17);
var call = __webpack_require__(39);
var isArrayIter = __webpack_require__(40);
var toLength = __webpack_require__(24);
var createProperty = __webpack_require__(96);
var getIterFn = __webpack_require__(41);

$export($export.S + $export.F * !__webpack_require__(43)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(21);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 98 */
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
/* 99 */
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
  modules: {},
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(35);
__webpack_require__(102);
__webpack_require__(106);
__webpack_require__(113);
__webpack_require__(114);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 101 */
/***/ (function(module, exports) {



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(104);
var step = __webpack_require__(105);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var global = __webpack_require__(0);
var ctx = __webpack_require__(8);
var classof = __webpack_require__(42);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(11);
var anInstance = __webpack_require__(107);
var forOf = __webpack_require__(108);
var speciesConstructor = __webpack_require__(44);
var task = __webpack_require__(45).set;
var microtask = __webpack_require__(110)();
var newPromiseCapabilityModule = __webpack_require__(28);
var perform = __webpack_require__(46);
var promiseResolve = __webpack_require__(47);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(111)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(112)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(43)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var call = __webpack_require__(39);
var isArrayIter = __webpack_require__(40);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(24);
var getIterFn = __webpack_require__(41);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(45).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(44);
var promiseResolve = __webpack_require__(47);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(28);
var perform = __webpack_require__(46);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  modules: {
    user: __webpack_require__(116).default
  },
  actions: {
    load_script: function load_script(_ref, _ref2) {
      var state = _ref.state;
      var src = _ref2.src;

      return new _promise2.default(function (resolve, reject) {
        var el = document.createElement('script');
        el.setAttribute('src', src);
        el.addEventListener('load', function () {
          resolve();
        });
        document.querySelector('head').appendChild(el);
      });
    }
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(18);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(118)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
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

exports.default = {
  components: {},
  watch: {
    $route: function $route() {
      // window.scroll(0, 0);
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("app/user/fetchUser");
    // var undefined = 1;
    // console.log(undefined)
  },

  methods: {}
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "App"
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 121 */
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