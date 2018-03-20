webpackJsonp([0],Array(122).concat([
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(150)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(167),
  /* scopeId */
  "data-v-4f860d3b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(196),
  /* scopeId */
  "data-v-7f7ff48e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(197)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(201),
  /* scopeId */
  "data-v-2fa9fa19",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(224),
  /* template */
  __webpack_require__(225),
  /* scopeId */
  "data-v-bd9c99de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  "data-v-e2f22a1c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(51);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _binance = __webpack_require__(170);

var _binance2 = _interopRequireDefault(_binance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  inited: false,
  box: {
    tabs: ['Echojs', '简书', 'Cnode'],
    current: 0
  },
  items: [],
  jianshu: {
    inited: false,
    items: []
  },
  echojs: {
    inited: false,
    items: []
  },
  coins: {
    status: 'Waiting',
    start_time: null,
    pairs: function () {
      return [{
        key: 'BTC / USDT',
        symbol: 'tBTCUSD'
      }, {
        key: 'BCH / USDT',
        symbol: 'tBCHUSD'
      }, {
        key: 'LTC / USDT',
        symbol: 'tLTCUSD'
      }, {
        key: 'ETH / USDT',
        symbol: 'tETHUSD'
      }, {
        key: 'XRP / USDT',
        symbol: 'tXRPUSD'
      }, {
        key: 'EOS / USDT',
        symbol: 'tEOSUSD'
      }, {
        key: 'IOTA / USDT',
        symbol: 'tIOTUSD'
      }, {
        key: 'ETC / USDT',
        symbol: 'tETCUSD'
      }, {
        key: 'NEO / USDT',
        symbol: 'tNEOUSD'
      }, {
        key: 'QTUM / USDT',
        symbol: 'tQTMUSD'
      }, {
        key: 'BTG / USDT',
        symbol: 'tBTGUSD'
      }].map(function (a) {
        return (0, _extends3.default)(a, {
          id: 0,
          last_price: 0,
          prices: [],
          sum: 0,
          percent: [],
          color: ''
        });
      });
    }()
  },
  okex: {
    status: '',
    pairs: [{
      key: 'BCH/USDT',
      last_price: 0
    }]
  }
};
// import CryptoJS from './hmac-sha256.js';
// import './enc-base64-min.js';
exports.default = {
  namespaced: true,
  state: state,
  modules: {
    binance: _binance2.default
  },
  actions: {
    init: function init(_ref) {
      var state = _ref.state,
          dispatch = _ref.dispatch;

      if (state.inited === false) {
        return _axios2.default.all([
          // dispatch('main/posts/init', null, { root: true }),
          // dispatch('fetch_jianshu')
        ]).then(function () {
          state.inited = true;
        });
      }
    },
    initAtClient: function initAtClient() {},
    initWebSocket: function initWebSocket(_ref2) {
      var state = _ref2.state,
          dispatch = _ref2.dispatch;

      if (state.coins.status === 'Waiting') {
        try {
          //  Try to establish the WebSocket connection
          var ws = new WebSocket('wss://api.bitfinex.com/ws/2');
          ws.onopen = function (event) {
            state.coins.status = 'Connected';
            console.log('Connection established. ' + this.readyState);

            // Send messages
            state.coins.pairs.forEach(function (a) {
              ws.send((0, _stringify2.default)({
                event: 'subscribe',
                channel: 'ticker',
                symbol: a.symbol
                // symbols: ['tBTCUSD', 'tBTGUSD']
              }));
            });
          };
          ws.onmessage = function (event) {
            // console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            if (obj.pair) {
              state.coins.pairs.forEach(function (a) {
                if (obj.symbol === a.symbol) {
                  a.id = obj.chanId;
                }
              });
            } else {
              if (Array.isArray(obj[1])) {
                // Update 
                var update = function update() {
                  state.coins.pairs.forEach(function (a) {
                    a.prices.length = 0;
                    a.percent.push('');
                    if (a.percent.length > 5) {
                      a.percent.shift();
                    }
                  });
                  state.coins.start_time = now;
                };

                var last = state.coins.start_time;
                var now = new Date().getTime();
                if (!last) {
                  update();
                } else if (now - last > 180000) {
                  update();
                }

                state.coins.pairs.forEach(function (a) {
                  if (obj[0] === a.id) {
                    var price = obj[1][6];
                    if (price > a.last_price) {
                      a.color = 'green';
                    } else {
                      a.color = 'red';
                    }
                    a.last_price = price;
                    a.prices.push(price);
                    if (a.prices.length > 1) {
                      var start = a.prices[0];
                      var end = a.prices[a.prices.length - 1];
                      a.percent[a.percent.length - 1] = ((end - start) / start * 100).toFixed(2);
                      // console.log(a.percent);
                    }
                    a.sum = a.percent.reduce(function (sum, b) {
                      return sum + Number(b);
                    }, 0).toFixed(2);
                  }
                });
              }
            }
          };
          ws.onclose = function (event) {
            state.coins.status = 'Disconnected';
            state.coins.pairs.forEach(function (a) {
              a.last_price = 0;
              a.color = 'black';
            });
            console.log('Disconnected: ' + this.readyState);
          };
          ws.onerror = function (event) {
            state.coins.pairs.forEach(function (a) {
              a.last_price = 0;
              a.color = 'black';
            });
            state.coins.status = 'Errored';
            console.log('Errored!');
          };
        } catch (e) {
          alert(e.message);
        }
      }
    },
    initOkex: function initOkex(_ref3) {
      var state = _ref3.state;

      if (state.okex.status === '') {
        try {
          var ws = new WebSocket('wss://real.okex.com:10441/websocket');
          ws.onopen = function (event) {
            state.okex.status = 'connected';
            console.log('Connection established. ' + this.readyState);

            ws.send((0, _stringify2.default)({
              event: 'addChannel',
              channel: 'ok_sub_spot_bch_usdt_ticker'
              // binary: 1
            }));
          };
          ws.onmessage = function (event) {
            console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            // if (obj.pair) {
            //   if (obj.pair === 'BTCUSD') {
            //     state.coins.pairs[0].id = obj.chanId;
            //   }
            //   if (obj.pair === 'BTGUSD') {
            //     state.coins.pairs[1].id = obj.chanId;
            //   }
            // } else {
            //   if (Array.isArray(obj[1])) {
            //     state.coins.pairs.forEach(a => {
            //       if (obj[0] === a.id) {
            //         a.last_price = obj[1][6];
            //       }
            //     })
            //   }
            // }
          };
          ws.onclose = function (event) {
            state.okex.status = '';
            console.log('Disconnected: ' + this.readyState);
          };
          ws.onerror = function (event) {
            console.log('Errored!');
          };
        } catch (e) {
          alert(e.message);
        }
      }
    },
    fetch: function fetch(_ref4, _ref5) {
      var state = _ref4.state;
      var what = _ref5.what;

      // axios({
      //   url: `https://www.okex.com/api/v1/ticker.do?symbol=ltc_btc`,
      //   // this is essential cause a fetch request is without cookie by default
      //   withCredentials: true,
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   mode: 'cors',
      // }).then(res => {
      //   // state[what].inited = true;
      //   // state[what].items.length = 0;
      //   // state[what].items.push(...res.data.data);
      // })
      if (state[what].inited === true) {
        return _promise2.default.resolve();
      } else {
        return (0, _axios2.default)({
          url: '/api/crawler/' + what + '/',
          // this is essential cause a fetch request is without cookie by default
          withCredentials: true,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }).then(function (res) {
          var _state$what$items;

          state[what].inited = true;
          state[what].items.length = 0;
          (_state$what$items = state[what].items).push.apply(_state$what$items, (0, _toConsumableArray3.default)(res.data.data));
        });
      }
    },
    switch_tab: function switch_tab(_ref6, _ref7) {
      var state = _ref6.state,
          dispatch = _ref6.dispatch;
      var i = _ref7.i;

      state.box.current = i;
      if (i === 0) {
        dispatch('fetch', { what: 'jianshu' });
      } else if (i === 1) {
        dispatch('fetch', { what: 'echojs' });
      }
    }
  },
  mutations: {}
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(143);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(144);

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
        href: '/farm/index.html'
      }, {
        name: 'Vue',
        icon: 'fa-cog',
        href: '/vue/index.html'
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
      val: 'blue'
    }
  },
  modules: {
    // routes
    // home: require('./home/home.js').default,
    // blog: require('./blog/blog.js').default,
    // projects: require('./projects/projects.js').default,
    post: __webpack_require__(154).default,
    // Canvas: require('./canvas/Canvas.js').default,

    // data
    // posts: require('./posts.js').default,
    // focus: require('./focus.js').default,
    news: __webpack_require__(155).default
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(181),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(187),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(185), __esModule: true };

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexMain = __webpack_require__(142);

var _indexMain2 = _interopRequireDefault(_indexMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Navbar: __webpack_require__(156),
    MyMenu: __webpack_require__(160),
    // Slider: require('./Slider.vue'),
    MyFooter: __webpack_require__(164)
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(153);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(16);

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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(157)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(159),
  /* scopeId */
  "data-v-66ff04d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
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
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Navbar"
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('transition', {
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
  }, [(!_vm.user.name) ? _c('li', [_c('router-link', {
    attrs: {
      "to": "/main/signin"
    }
  }, [_c('i', {
    staticClass: "fa fa-sign-in"
  }), _vm._v(" Signin\n            ")])], 1) : _vm._e(), (_vm.user.name) ? _c('li', {
    on: {
      "click": function($event) {
        _vm.$store.dispatch('user/logout')
      }
    }
  }, [_c('a', [_c('i', {
    staticClass: "fa fa-sign-out"
  }), _vm._v(" Logout\n            ")])]) : _vm._e()])])]), _c('div', {
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
        _vm.$store.dispatch('user/logout')
      }
    }
  }, [_c('a', [_vm._v("Logout")])])])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(161)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  "data-v-ae7bca36",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */
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
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(165)

var Component = __webpack_require__(14)(
  /* script */
  null,
  /* template */
  __webpack_require__(166),
  /* scopeId */
  "data-v-2dce59a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "Footer"
  }, [_vm._v("\n\tCopyright ©2016 SoapTech\n")])
},staticRenderFns: []}

/***/ }),
/* 167 */
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
  }, [_c('navbar'), _c('keep-alive', [(_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1), (!_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e(), _c('my-menu'), _c('my-footer')], 1)])
},staticRenderFns: []}

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(141);

var _home2 = _interopRequireDefault(_home);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'main-home',
  components: {
    News: __webpack_require__(175),
    BoxSignin: __webpack_require__(145),
    Posts: __webpack_require__(146),
    DatePicker: __webpack_require__(188),
    'tabbed-panel': __webpack_require__(192)
    // Slider: require('./Slider.vue')
  },
  computed: {
    home: function home() {
      return this.$store.state.main.home;
    },
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   // if (!this.$store.state.main.home) {
  //   //   this.$store.registerModule(['main', 'home'], home);
  //   // }
  //   // next();
  // },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main', 'home'], _home2.default);
  },
  mounted: function mounted() {
    this.$store.dispatch('main/home/init');
    this.$store.dispatch('main/home/initWebSocket');
    this.$store.dispatch('main/home/initOkex');
    // this.$store.dispatch('main/home/binance/init');

    this.$store.dispatch('main/home/fetch', { what: 'jianshu' });
    this.$store.dispatch('main/home/fetch', { what: 'echojs' });
    // console.log(__webpack_public_path__);
    // console.log(VENDOR);
  },

  methods: {
    register: function register(store) {
      store.complete(['main', 'home'], _home2.default);
    },
    preFetch: function preFetch(store) {
      return store.dispatch('main/home/init');
    },
    fetch_jianshu: function fetch_jianshu() {
      (0, _axios2.default)({
        url: 'http://www.jianshu.com',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        var html = res.data;
        var div = document.createElement('div');
        div.innerHTML = html;
        var arr = div.querySelectorAll('.note-list li');
        console.log(arr);
      });
    }
  }
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(51);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(171);

var _keys2 = _interopRequireDefault(_keys);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  inited: false,
  status: 'Waiting',
  ratio: 0,
  watching: false,
  alerting: false,
  alert_text: '',
  items: function () {
    var obj = {
      btcusdt: {
        key: 'BTC / USDT',
        symbol: 'BTCUSDT'
      },
      bccusdt: {
        key: 'BCC / USDT',
        symbol: 'BCCUSDT',
        target: 2389
      },
      ethusdt: {
        key: 'ETH / USDT',
        symbol: 'ETHUSDT'
      },
      ltcusdt: {
        key: 'LTC / USDT',
        symbol: 'LTCUSDT'
      },

      ethbtc: {
        key: 'ETH / BTC',
        symbol: 'ETHBTC',
        target: 0.09
      },
      xvgbtc: {
        key: 'XVG / BTC',
        symbol: 'XVGBTC'
      },

      sntbtc: {
        key: 'SNT / BTC',
        symbol: 'SNTBTC'
      },
      mthbtc: {
        key: 'MTH / BTC',
        symbol: 'MTHBTC'
      },
      gxsbtc: {
        key: 'GXS / BTC',
        symbol: 'GXSBTC'
      },
      iotabtc: {
        key: 'IOTA / BTC',
        symbol: 'IOTABTC'
      },
      eosbtc: {
        key: 'EOS / BTC',
        symbol: 'EOSBTC'
      },
      manabtc: {
        key: 'MANA / BTC',
        symbol: 'MANABTC'
      },
      enjbtc: {
        key: 'ENJ / BTC',
        symbol: 'ENJBTC'
      },
      insbtc: {
        key: 'INS / BTC',
        symbol: 'INSBTC'
      },
      iostbtc: {
        key: 'IOST / BTC',
        symbol: 'IOSTBTC'
      }

    };
    var keys = (0, _keys2.default)(obj);
    keys.forEach(function (key) {
      (0, _extends3.default)(obj[key], {
        stream: key + '@kline_1h',
        start_time: '',
        open_price: 0,
        last_price: 0,
        upper: null,
        lower: null,
        percent: 0,
        volume: 0
      });
    });
    return obj;
  }()
  // pairs: [{
  //   stream: 'btcusdt',
  //   key: 'BTC / USDT',
  //   symbol: 'BTCUSDT',
  // }, {
  //   stream: 'ethbtc',
  //   key: 'ETH / BTC',
  //   symbol: 'ETHBTC',
  // }, {
  //   stream: 'xvgbtc',
  //   key: 'XVG / BTC',
  //   symbol: 'XVGBTC',
  //   target: 0.000012
  // }, {
  //   stream: 'sntbtc',
  //   key: 'SNT / BTC',
  //   symbol: 'SNTBTC',
  //   target: 0.000038
  // }, {
  //   stream: 'iotabtc',
  //   key: 'IOTA / BTC',
  //   symbol: 'IOTABTC',
  //   // target: 0.000260
  // }, {

  //   stream: '--',

  // }, {
  //   stream: 'bccusdt',
  //   key: 'BCC / USDT',
  //   symbol: 'BCCUSDT',
  //   target: 2389
  // }, {
  //   stream: 'ethusdt',
  //   key: 'ETH / USDT',
  //   symbol: 'ETHUSDT',
  // }, {
  //   stream: 'ltcusdt',
  //   key: 'LTC / USDT',
  //   symbol: 'LTCUSDT',
  // }, {
  //   stream: '--',
  // }, {

  //   stream: 'xrpbtc',
  //   key: 'XRP / BTC',
  //   symbol: 'XRPBTC',
  // }, {
  //   stream: 'xlmbtc',
  //   key: 'XLM / BTC',
  //   symbol: 'XLMBTC',
  // }, {
  //   stream: '--'
  // }, {

  // }, {
  //   stream: 'gxsbtc',
  //   key: 'GXS / BTC',
  //   symbol: 'GXSBTC',
  // }, {
  //   stream: 'trxbtc',
  //   key: 'TRX / BTC',
  //   symbol: 'TRXBTC',
  // }, {

  //   stream: 'rdnbtc',
  //   key: 'RDN / BTC',
  //   symbol: 'RDNBTC',
  // }, {
  //   stream: 'lendbtc',
  //   key: 'LEND / BTC',
  //   symbol: 'LENDBTC',
  // }, {
  //   stream: 'mthbtc',
  //   key: 'MTH / BTC',
  //   symbol: 'MTHBTC',
  //   // target: 0.00002522

  // }, {
  //   stream: 'saltbtc',
  //   key: 'SALT / BTC',
  //   symbol: 'SALTBTC',
  //   // target: 0.000904
  // }, {
  //   stream: 'iotabtc',
  //   key: 'IOTA / BTC',
  //   symbol: 'IOTABTC',
  //   // target: 0.000260
  // }, {
  //   stream: 'funbtc',
  //   key: 'FUN / BTC',
  //   symbol: 'FUNBTC'
  // }, {

  //   stream: 'eosbtc',
  //   key: 'EOS / BTC',
  //   symbol: 'EOSBTC'
  // }, {

  //   stream: 'manabtc',
  //   key: 'MANA / BTC',
  //   symbol: 'MANABTC',
  //   // }, {
  //   //   stream: 'xrpbtc',
  //   //   key: 'XRP / BTC',
  //   //   symbol: 'XRPBTC'
  // }].map(a => {
  //   a.stream += '@kline_60m';
  //   return Object.assign(a, {
  //     start_time: '',
  //     open_price: 0,
  //     last_price: 0,
  //     upper: null,
  //     lower: null,
  //     percent: 0,
  //     volume: 0
  //   });
  // }),
};

exports.default = {
  namespaced: true,
  state: state,
  getters: {
    picked: function picked(state) {
      return ['btcusdt', 'ethbtc', 'eosbtc', 'gxsbtc', 'sntbtc', 'mthbtc', 'iotabtc', 'xvgbtc', 'manabtc', 'enjbtc', 'insbtc', 'iostbtc'].map(function (a) {
        return state.items[a];
      });
    }
  },
  actions: {
    watch: function watch(_ref) {
      var state = _ref.state;

      state.watching = true;
    },
    unwatch: function unwatch(_ref2) {
      var state = _ref2.state;

      state.watching = false;
    },
    init: function init(_ref3) {
      var state = _ref3.state;


      // var trading = localStorage.getItem('trading');
      // if (trading) {
      //   var obj = JSON.parse(trading);
      //   console.log(obj);
      //   state.pairs[0].trading.usdt = obj.usdt;
      //   for (let key in obj.balance) {
      //     state.pairs[0].trading.balance[key] = obj.balance[key];
      //   }
      // }
      function warn(str) {
        console.warn(str);
        state.alert_text = str;
        var el = document.createElement('audio');
        el.setAttribute('src', 'http://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.mp3');
        el.setAttribute('autoplay', 'autoplay');
        el.setAttribute('cotrols', 'controls');
        document.body.appendChild(el);
      }

      function connect() {
        try {
          //  Try to establish the WebSocket connection
          // var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
          var streams = function () {
            var str = '';
            // state.pairs.forEach(a => {
            //   str += a.stream + '/';
            // });
            for (var key in state.items) {
              str += state.items[key].stream + '/';
            }
            return str;
          }();
          // var ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=' + streams);
          var ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=' + streams);
          // setTimeout(() => {
          //   ws.close();
          // }, 8000);
          ws.onopen = function (event) {
            state.status = 'Connected';
            console.log('Binance Connection established. ' + this.readyState);
          };
          ws.onmessage = function (event) {
            // console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            // console.log(obj);
            function save(trading) {
              localStorage.setItem('trading', (0, _stringify2.default)(trading));
            }
            if (obj.stream) {
              var a = state.items[obj.stream.split('@')[0]];
              a.start_time = new Date(obj.data.k.t).getMinutes();
              a.open_price = obj.data.k.o;
              a.last_price = obj.data.k.c;
              if (state.watching && state.alerting === false) {
                if (a.lower && Number(a.last_price) < Number(a.lower)) {
                  state.alerting = true;
                  warn(a.symbol + ' is too low!!!');
                  // if (navigator.vibrate) {
                  //   navigator.vibrate(60 * 1000);
                  // }
                }
                if (a.upper && Number(a.last_price) > Number(a.upper)) {
                  state.alerting = true;
                  warn(a.symbol + ' is too high!!!');
                  // if (navigator.vibrate) {
                  //   navigator.vibrate(60 * 1000);
                  // }
                }
              }
              a.volume = obj.data.k.q;
              a.percent = ((obj.data.k.c - obj.data.k.o) / obj.data.k.c * 100).toFixed(2);
              if (obj.data.s === 'BTCUSDT') {
                state.ratio = obj.data.k.c;
              }
              // state.pairs.forEach(a => {
              //   if (a.stream === obj.stream) {
              //     a.start_time = new Date(obj.data.k.t).getMinutes();
              //     a.open_price = obj.data.k.o;
              //     a.last_price = obj.data.k.c;
              //     a.volume = obj.data.k.q;
              //     a.percent = ((obj.data.k.c - obj.data.k.o) / obj.data.k.c * 100).toFixed(2);
              //   }
              //   if (obj.data.s === 'BTCUSDT') {
              //     state.ratio = obj.data.k.c;
              //   }
              // });
            } else {
                // if (Array.isArray(obj[1])) {
                //   var last = state.coins.start_time;
                //   var now = new Date().getTime();
                //   // Update 
                //   function update() {
                //     state.coins.pairs.forEach(a => {
                //       a.prices.length = 0;
                //       a.percent.push('');
                //       if (a.percent.length > 5) {
                //         a.percent.shift();
                //       }
                //     });
                //     state.coins.start_time = now;
                //   }
                //   if (!last) {
                //     update();
                //   } else if (now - last > 180000) {
                //     update();
                //   }

                //   state.coins.pairs.forEach(a => {
                //     if (obj[0] === a.id) {
                //       var price = obj[1][6];
                //       if (price > a.last_price) {
                //         a.color = 'green';
                //       }
                //       else {
                //         a.color = 'red';
                //       }
                //       a.last_price = price;
                //       a.prices.push(price);
                //       if (a.prices.length > 1) {
                //         var start = a.prices[0];
                //         var end = a.prices[a.prices.length - 1];
                //         a.percent[a.percent.length - 1] = ((end - start) / start * 100).toFixed(2);
                //         // console.log(a.percent);
                //       }
                //       a.sum = a.percent.reduce((sum, b) => {
                //         return sum + Number(b);
                //       }, 0).toFixed(2);
                //     }
                //   });
                // }
              }
          };
          ws.onclose = function (event) {
            state.status = 'Disconnected';
            console.warn('Disconnected: ' + this.readyState);
            // connect();
            // state.coins.pairs.forEach(a => {
            //   a.last_price = 0;
            //   a.color = 'black';
            // });
          };
          ws.onerror = function (event) {
            state.status = 'Errored';
            console.warn('Errored!');
            // connect();
            // state.coins.pairs.forEach(a => {
            //   a.last_price = 0;
            //   a.color = 'black';
            // });
            // state.coins.status = 'Errored';
          };
        } catch (e) {
          alert(e.message);
        }
      }

      if (state.status === 'Waiting') {
        connect();
      }
      // var hash = CryptoJS.HmacSHA256('', 'zhRco1KqyFSHBg7f46IxkGYk90Cq6uueascgK8onGVvW9chd5nrrKmk5S55cunCB');
      // var signature = CryptoJS.enc.Base64.stringify(hash);
      // console.log(signature);
      // axios({
      //   // url: `https://api.binance.com/api/v3/account?signature=${signature}`,
      //   url: `https://api.binance.com/api/v1/ping`,
      //   // this is essential cause a fetch request is without cookie by default
      //   withCredentials: true,
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-MBX-APIKEY': 'hoJJNqGnwueeGPjdajf7h54HttIdV8kfGeKuTnxGRDmGpmDfeklp27Smc4WVTL8l'
      //   },
      //   mode: 'cors',
      // }).then(res => {
      //   console.log(res);
      // });
    }
  },
  mutations: {}
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(172), __esModule: true };

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(18);
var $keys = __webpack_require__(30);

__webpack_require__(174)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(176)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(178),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
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

exports.default = {
  data: function data() {
    return {};
  },
  computed: {
    news: function news() {
      return this.$store.state.main.news;
    },
    nav: function nav() {
      return this.$store.getters['main/news/nav'];
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('main/news/init');
  },

  methods: {}
};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "News list-group",
    attrs: {
      "id": "container-1996"
    }
  }, [(_vm.news.status === 'loading') ? _c('li', {
    staticClass: "list-group-item text-center"
  }, [_vm._v("\n        Loading...\n      ")]) : _vm._e(), _vm._l((_vm.news.items), function(a) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.news.status === 'success'),
        expression: " news.status === 'success' "
      }],
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "left-part pull-left"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": a.author.avatar_url
      }
    })]), _c('div', {
      staticClass: "middle-part"
    }, [_c('p', {
      staticClass: "title--"
    }, [_c('router-link', {
      attrs: {
        "to": '/main/cnode_post/' + a.id
      }
    }, [_vm._v(_vm._s(a.title))]), _c('span', {
      staticClass: "badge pull-right"
    }, [_vm._v(_vm._s(a.reply_count))])], 1), _vm._v("\n          " + _vm._s(a.author.loginname) + "\n        ")])])
  }), _c('li', {
    staticClass: "list-group-item"
  }, [_c('nav', {
    staticClass: "Page navigation"
  }, [_c('ul', {
    staticClass: "pagination pagination-sm"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.$store.dispatch('main/news/fetch', {
          page: 1
        })
      }
    }
  }, [_c('a', [_vm._v("«")])]), _vm._l((_vm.nav), function(a, i) {
    return _c('li', {
      class: _vm.news.page === a ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/news/fetch', {
            page: a
          })
        }
      }
    }, [_c('a', [_vm._v(_vm._s(a))])])
  })], 2)])])], 2)
},staticRenderFns: []}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
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

exports.default = {
  data: function data() {
    return {
      name: '',
      password: ''
    };
  },

  components: {},
  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  mounted: function mounted() {},
  methods: {
    login: function login() {
      this.$store.dispatch('app/user/login', {
        name: this.name,
        password: this.password
      });
    }
  }
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BoxSignin panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n    Signin\n  ")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Username")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: " name "
    }],
    staticClass: "form-control input-sm",
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Password")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: " password "
    }],
    staticClass: "form-control input-sm",
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.user.state === 'failed'),
      expression: " user.state === 'failed' "
    }],
    staticClass: "form-group has-error"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_vm._v("\n        Invalid username or password.\n      ")])]), _c('div', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      Login\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(184);

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
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(147);

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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 187 */
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(189)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(191),
  /* scopeId */
  "data-v-79915ab6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
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


exports.default = {
  props: {
    placeholder: {
      default: function _default() {
        return '请选择日期';
      }
    },
    onPicked: {
      default: function _default() {
        return function () {};
      }
    }
  },
  components: {},
  data: function data() {
    return {
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
      this.today();
    },
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
    set_year: function set_year(e) {
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
    set_month: function set_month(e) {
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
    today: function today() {
      var time = new Date();
      this.year = time.getFullYear();
      this.month = time.getMonth() + 1;
      this.date = time.getDate();
      this.day = time.getDay();

      this.generate();
    },
    pick: function pick(obj) {
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
      this.value = year + '-' + month + '-' + date;
      this.hide_panel();
      this.onPicked(this.value);
    }
  }
};

/***/ }),
/* 191 */
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
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: "part-666"
  }, [_c('i', {
    staticClass: "fa fa-angle-left",
    on: {
      "click": function($event) {
        _vm.prev($event)
      }
    }
  })]), _c('div', {
    staticClass: "part-666 middle-666"
  }, [_c('div', {
    staticClass: "form-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.year),
      expression: "year"
    }],
    staticClass: "form-control input-sm",
    staticStyle: {
      "width": "50px"
    },
    domProps: {
      "value": (_vm.year)
    },
    on: {
      "blur": function($event) {
        _vm.set_year($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.year = $event.target.value
      }
    }
  }), _vm._v("\n          年\n          "), _c('input', {
    staticClass: "form-control input-sm",
    staticStyle: {
      "width": "50px"
    },
    domProps: {
      "value": _vm.month
    },
    on: {
      "blur": function($event) {
        _vm.set_month($event)
      }
    }
  }), _vm._v("\n          月\n        ")])]), _c('div', {
    staticClass: "part-666"
  }, [_c('i', {
    staticClass: "fa fa-angle-right pull-right",
    on: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  })])]), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table"
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
    staticClass: "panel-footer"
  }, [_c('div', {
    staticClass: "btn btn-default btn-sm",
    staticStyle: {
      "display": "table",
      "margin": "auto"
    },
    on: {
      "click": _vm.today
    }
  }, [_vm._v("\n        今天\n      ")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("日")]), _c('th', [_vm._v("一")]), _c('th', [_vm._v("二")]), _c('th', [_vm._v("三")]), _c('th', [_vm._v("四")]), _c('th', [_vm._v("五")]), _c('th', [_vm._v("六")])])])
}]}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(193)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
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


exports.default = {
  props: {
    tabs: {
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      current: 0
    };
  },

  components: {},
  mounted: function mounted() {
    // console.log(this);
    this.change(0);
  },

  methods: {
    change: function change(i) {
      this.current = i;
      // for (let key in this.$slots) {
      //   this.$slots[key][0].elm.style.display = 'none';          
      // };
      // this.$slots['body_' + i][0].elm.style.display = '';
    }
  }
};

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TabbedPanel777 panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, _vm._l((_vm.tabs), function(a, i) {
    return _c('span', {
      class: i === _vm.current ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.change(i)
        }
      }
    }, [_vm._v(_vm._s(a))])
  })), _vm._l((_vm.tabs), function(a, i) {
    return (_vm.current === i) ? _vm._t('body_' + i) : _vm._e()
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "Home"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Showcase\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('router-link', {
    attrs: {
      "to": "/admin"
    }
  }, [_vm._v("admin")]), _c('br'), _c('router-link', {
    attrs: {
      "to": "/binance"
    }
  }, [_vm._v("binance")]), _c('br'), _c('router-link', {
    attrs: {
      "to": "/d3"
    }
  }, [_vm._v("d3")]), _c('br'), _c('a', {
    attrs: {
      "href": "/hot/huge.html"
    }
  }, [_vm._v("Huge")]), _c('br'), _c('a', {
    attrs: {
      "href": "/hot/wolf.html"
    }
  }, [_vm._v("Wolf")]), _c('br'), _c('a', {
    attrs: {
      "href": "/hot/six_anniversary.html"
    }
  }, [_vm._v("six_anniversary")]), _c('br'), _c('a', {
    attrs: {
      "href": "/hot/new_year.html"
    }
  }, [_vm._v("new_year")]), _c('br'), _c('a', {
    attrs: {
      "href": "//ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1"
    }
  }, [_vm._v("冬牧场")]), _c('br'), _c('a', {
    attrs: {
      "href": "/canvas/alien_invasion.html"
    }
  }, [_vm._v("Alien Invasion")]), _c('br'), _c('a', {
    attrs: {
      "href": "/canvas/phaser.html"
    }
  }, [_vm._v("Phaser")]), _c('br'), _c('a', {
    attrs: {
      "href": "/canvas/three.html"
    }
  }, [_vm._v("Three")]), _c('br')], 1)]), _c('tabbed-panel', {
    attrs: {
      "tabs": _vm.home.box.tabs
    }
  }, [_c('template', {
    attrs: {
      "slot": "body_0"
    },
    slot: "body_0"
  }, [_c('ul', {
    staticClass: "list-group"
  }, _vm._l((_vm.$store.state.main.home.echojs.items), function(a) {
    return _c('a', {
      staticClass: "list-group-item",
      attrs: {
        "href": a.href
      }
    }, [_c('p', [_vm._v(_vm._s(a.author.name) + " " + _vm._s(a.time))]), _c('h4', [_vm._v(_vm._s(a.title))])])
  })), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("加载更多")])])]), _c('template', {
    attrs: {
      "slot": "body_1"
    },
    slot: "body_1"
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_c('li', {
    staticClass: "list-group-item form-inline"
  }, [_c('input', {
    staticClass: "form-control input-sm",
    staticStyle: {
      "display": "inline-block",
      "width": "172px",
      "margin-right": "15px"
    }
  }), _c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("Search")])]), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$store.state.main.home.jianshu.items.length === 0),
      expression: " $store.state.main.home.jianshu.items.length === 0 "
    }],
    staticClass: "list-group-item",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                  Loading...\n                ")]), _vm._l((_vm.$store.state.main.home.jianshu.items), function(a) {
    return _c('li', {
      staticClass: "list-group-item",
      attrs: {
        "href": a.href
      }
    }, [_c('p', {
      staticClass: "small text-muted"
    }, [_vm._v(_vm._s(a.author.name) + " · " + _vm._s(a.time.substr(0, 10)))]), _c('h4', [_c('a', {
      staticClass: "color-text",
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.title))])]), _c('p', [_vm._v(_vm._s(a.abstract))])])
  })], 2), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("加载更多")])])]), _c('news', {
    attrs: {
      "slot": "body_2"
    },
    slot: "body_2"
  })], 2), _c('tabbed-panel', {
    attrs: {
      "tabs": ['Bitfinex', 'Okex', 'Binance']
    }
  }, [_c('div', {
    staticClass: "list-group",
    attrs: {
      "slot": "body_0"
    },
    slot: "body_0"
  }, [_c('div', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("Bitfinex(" + _vm._s(_vm.home.coins.status) + ")")])]), _vm._l((_vm.home.coins.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4"
    }, [_c('span', {
      staticClass: "label-"
    }, [_vm._v(_vm._s(a.key))]), _c('span', {
      staticClass: "price-",
      style: ('color: #FF9900;')
    }, [_vm._v("$" + _vm._s(a.last_price.toFixed(2)))])]), _c('div', {
      staticClass: "col-md-8"
    }, [_vm._l((a.percent), function(b) {
      return _c('span', {
        staticClass: "percent",
        style: ('color: ' + (b > 0 ? '#009933' : '#CC0033') + ';')
      }, [_vm._v(_vm._s(b))])
    }), _c('span', {
      staticClass: "sum pull-right",
      style: ('color: ' + (a.sum > 0 ? '#009933' : '#CC0033') + ';')
    }, [_vm._v("\n                      " + _vm._s(a.sum) + "%\n                    ")])], 2)])])
  })], 2), _c('div', {
    staticClass: "list-group",
    attrs: {
      "slot": "body_1"
    },
    slot: "body_1"
  }, [_c('div', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("Okex")])]), _vm._l((_vm.home.okex.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('span', [_vm._v(_vm._s(a.key))]), _c('span', [_vm._v("$" + _vm._s(a.last_price.toFixed(2)))])])
  })], 2)])], 1), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "panel-container"
  }, [_c('date-picker')], 1), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              About Me\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("Greetings! I am a front-end developer.")]), _c('p', [_vm._v("Github: "), _c('a', {
    attrs: {
      "href": "//github.com/403177368"
    }
  }, [_vm._v("github.com/403177368")])]), _c('p', [_vm._v("NPM: "), _c('a', {
    attrs: {
      "href": "//www.npmjs.com/~madsoap"
    }
  }, [_vm._v("www.npmjs.com/~madsoap")])]), _c('p', [_vm._v("Website: "), _c('a', {
    attrs: {
      "href": "//madsoap.net"
    }
  }, [_vm._v("madsoap.net")])]), _c('p', [_vm._v("Welcome, my friend! This is my personal website, built with node.js a set of RESTful APIs.")]), _c('p', [_vm._v("These are the npm packages I am maintaining currently:")]), _c('p', [_c('a', {
    attrs: {
      "href": "//www.npmjs.com/package/soap-rem"
    }
  }, [_vm._v("soap-rem")]), _vm._v(": A package which could set rem of current webpage according to the width of viewport.")]), _c('p', [_c('a', {
    attrs: {
      "href": "//www.npmjs.com/package/soap-canvas"
    }
  }, [_vm._v("soap-canvas")]), _vm._v(": A library which")]), _c('p', [_c('a', {
    attrs: {
      "href": "//www.npmjs.com/package/vix"
    }
  }, [_vm._v("vix")]), _vm._v(": A vue plugin as state manager for vue application inspired by vuex.")])])]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Switch theme\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, _vm._l((_vm.$store.state.main.theme.options), function(a) {
    return _c('span', [_c('a', {
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/switch_theme', {
            name: a
          })
        }
      }
    }, [_vm._v(_vm._s(a))]), _c('br')])
  }))]), (_vm.user.name === '') ? _c('box-signin') : _vm._e(), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              My works...\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_c('a', {
    attrs: {
      "href": "//ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1"
    }
  }, [_vm._v("冬牧场")])]), _c('p', [_c('a', {
    attrs: {
      "href": "//ptsolomo.reader.qq.com/book_res/event/act170104/adr/books_0.html?tf=1&z_dev=true"
    }
  }, [_vm._v("春节活动")])])])]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Some other websites...\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_c('a', {
    attrs: {
      "href": "//github.com"
    }
  }, [_vm._v("github")])]), _c('p', [_c('a', {
    attrs: {
      "href": "//medium.com"
    }
  }, [_vm._v("Medium")])]), _c('p', [_c('a', {
    attrs: {
      "href": "//codepen.io"
    }
  }, [_vm._v("codepen")])]), _c('p', [_c('a', {
    attrs: {
      "href": "//github.com"
    }
  }, [_vm._v("echojs")])])])])], 1)])])])])
},staticRenderFns: []}

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(199);

var _projects2 = _interopRequireDefault(_projects);

var _home = __webpack_require__(141);

var _home2 = _interopRequireDefault(_home);

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

exports.default = {
  props: {},
  data: function data() {
    return {
      arr: [{
        name: '知乎-发现',
        href: '//www.zhihu.com/explore'
      }, {
        name: '豆瓣',
        href: '//m.douban.com'
      }]
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next();
  },

  computed: {
    projects: function projects() {
      return this.$store.state.main.projects;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main', 'home'], _home2.default);
    this.$store.complete(['main', 'projects'], _projects2.default);
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch('main/home/fetch', { what: 'jianshu' });
    this.$store.dispatch('main/projects/init');
  },

  methods: {
    register: function register(store) {
      store.complete(['main', 'home'], _home2.default);
      store.complete(['main', 'projects'], _projects2.default);
    },
    preFetch: function preFetch(store) {
      store.dispatch('main/projects/init');
    }
  }
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  inited: false,
  projects: []
};

var actions = {
  init: function init(ctx) {
    if (ctx.state.inited === false) {
      ctx.dispatch('fetchProjects').then(function (projects) {
        ctx.commit('SET_PROJECTS', projects);
      });
    }
  },
  fetchProjects: function fetchProjects(ctx) {
    return new _promise2.default(function (resolve, reject) {
      var projects = __webpack_require__(200).default;
      resolve(projects);
    });
  }
};

var mutations = {
  SET_PROJECTS: function SET_PROJECTS(state, arr) {
    var _state$projects;

    state.inited = true;
    (_state$projects = state.projects).push.apply(_state$projects, (0, _toConsumableArray3.default)(arr));
  }
};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  title: 'Farm',
  desc: 'An E-commerce mobile webapp built with react, react-router, redux and webpack.',
  hrefs: ['/farm/index.html']
}, {
  title: 'Time',
  desc: 'An E-commerce website with an admin system built using vue, vue-router, vuex and webpack.',
  hrefs: ['/time/index.html']
}, {
  title: 'Effects Showcase',
  desc: 'A Showcase of effects including CSS3, svg and canvas, built using vue components.',
  hrefs: ['/vue/index.html']
}, {
  title: 'H5',
  desc: 'So-called H5 projects',
  hrefs: ['/hot/wolf.html', './_mobile/h5/star_wars/index.html', './_mobile/h5/olympics/index.html', './_mobile/h5/olympics/result.html', './h5/carnival.html', './_mobile/h5/school/index.html', './_mobile/h5/feast/feast.html', './_mobile/h5/live/live.html', './_mobile/h5/project/index.html']
}, {
  title: 'Desktop',
  desc: 'Some desktop website projects.',
  hrefs: ['./fytpy/index.html', './fytpy/react/index.html', './caredaily/index.html', './desktop/_wolf/index.html', './desktop/presentation/index.html']
}, {
  title: 'Canvas',
  desc: 'Some fun canvases.',
  hrefs: ['./_canvas/Heart.html', './_canvas/NeonHexagons/index.html', './_canvas/DriftingBalls/index.html', './_canvas/lion/index.html', './_canvas/cube/canvas_geometry_cube.html']
}];

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "Projects"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8"
  }, [_c('div', {
    staticClass: "panel panel-default panel-full-sm"
  }, [_c('div', {
    staticClass: "panel-heading color-text"
  }, [_c('span', [_vm._v("简书")]), _c('span', [_vm._v("豆瓣")])]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.$store.state.main.home.jianshu.items), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "small color-text"
    }, [_c('img', {
      staticStyle: {
        "width": "30px",
        "border-radius": "1000px",
        "display": "inline-block",
        "margin-right": "10px"
      },
      attrs: {
        "src": a.author.avatar
      }
    }), _c('span', {
      staticStyle: {
        "margin-right": "10px"
      }
    }, [_vm._v(_vm._s(a.author.name))]), _c('span', {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(a.time.substr(0, 10)))]), _c('h4', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v("\n                      " + _vm._s(a.title) + "\n                    ")])])]), _c('p', [_vm._v(_vm._s(a.abstract))])])
  })), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary"
  }, [_vm._v("加载更多")])])])]), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Fun Places\n            ")]), _c('div', {
    staticClass: "panel-body"
  }, _vm._l((_vm.arr), function(a) {
    return _c('p', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.name))])])
  }))])])]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n          Ah, you finally got here! These are the projects I am maintaining currently.\n        ")])]), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.projects.projects), function(a) {
    return _c('div', {
      staticClass: "col-sm-4"
    }, [_c('div', {
      staticClass: "panel panel-default"
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(a.title))])]), _c('div', {
      staticClass: "list-group"
    }, [_c('div', {
      staticClass: "list-group-item"
    }, [(a.desc) ? _c('div', {
      staticClass: "desc"
    }, [_vm._v("\n                  " + _vm._s(a.desc) + "\n                ")]) : _vm._e()]), (a.hrefs) ? _c('div', {
      staticClass: "list-group-item"
    }, _vm._l((a.hrefs), function(b) {
      return _c('span', [_c('a', {
        attrs: {
          "href": b,
          "target": "_blank"
        }
      }, [_vm._v(_vm._s(b))]), _c('br')])
    })) : _vm._e()])])])
  }))])])])
},staticRenderFns: []}

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blog = __webpack_require__(212);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Posts: __webpack_require__(146)
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(15);

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
            commit('SET_FOCUS', res.data);
            resolve();
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
        url: '/api/lowdb/focus',
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
/* 213 */
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
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.title))])])
  }))])])])])])])
},staticRenderFns: []}

/***/ }),
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
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

exports.default = {
  props: {},
  data: function data() {
    return {};
  },
  components: {
    BoxSignin: __webpack_require__(145)
  },
  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  methods: {}
};

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Signin container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }), _c('div', {
    staticClass: "signin_box col-sm-6 col-offset-4"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.user.state === 'failed') ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n            Incorrect username or password.\n          ")]) : _vm._e()]), _c('box-signin')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexMain = __webpack_require__(142);

var _indexMain2 = _interopRequireDefault(_indexMain);

var _home = __webpack_require__(141);

var _home2 = _interopRequireDefault(_home);

var _vuex = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {},
  computed: {
    picked: function picked() {
      // console.log(this.$store.getters['main/home/binance/picked']);
      return this.$store.getters['main/home/binance/picked'];
    },
    home: function home() {
      return this.$store.state.main.home;
    },
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main'], _indexMain2.default);
    this.$store.complete(['main', 'home'], _home2.default);
  },

  mounted: function mounted() {
    this.$store.dispatch('main/home/binance/init');
  },
  methods: {
    // register(store) {
    //   store.complete(['main', 'home'], rawModule);
    // },
    // preFetch(store) {
    //   return store.dispatch('main/home/init');
    // },
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 225 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Binance container-fluid"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": '/main/home'
    }
  }, [_vm._v("\n        Back\n      ")])], 1), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        Binance (" + _vm._s(_vm.home.binance.status) + ")\n      ")]), _c('div', {
    staticClass: "panel-body"
  }, [_vm._m(0), (_vm.home.binance.alert_text) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n          " + _vm._s(_vm.home.binance.alert_text) + "\n        ")]) : _vm._e()]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.picked), function(a) {
    return _c('div', {
      staticClass: "list-group-item",
      style: ((a.percent > 1 ? 'background: #dff0d8;' : '') +
        (a.percent < -1 ? 'background: #f2dede;' : ''))
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-3"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-4 col-sm-6"
    }, [_vm._v("\n                  " + _vm._s(a.key) + "\n                ")]), _c('div', {
      staticClass: "col-xs-6"
    }, [_vm._v("\n                  " + _vm._s(a.stream.match(/usdt/) ? Number(a.open_price).toFixed(2) : a.open_price) + "\n                ")])])]), _c('div', {
      staticClass: "col-sm-4"
    }, [_c('div', {
      staticClass: "row",
      class: (a.percent > 1 ? 'bg-success' : '') + ' ' +
        (a.percent < -1 ? 'bg-danger' : '')
    }, [_c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                  " + _vm._s(a.stream.match(/usdt/) ? Number(a.last_price).toFixed(2) : a.last_price) + "\n                ")]), _c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                  (" + _vm._s(a.percent) + "%)\n                ")]), _c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v(" \n                  $" + _vm._s(a.stream.match(/usdt/) ? '--' : (a.last_price * _vm.home.binance.ratio).toFixed(2)) + " \n                ")])])]), _c('div', {
      staticClass: "col-sm-5"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.lower),
        expression: "a.lower"
      }],
      staticClass: "input-sm form-control",
      attrs: {
        "placeholder": "Lower limit"
      },
      domProps: {
        "value": (a.lower)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.lower = $event.target.value
        }
      }
    })]), _c('div', {
      staticClass: "col-xs-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.upper),
        expression: "a.upper"
      }],
      staticClass: "input-sm form-control",
      attrs: {
        "placeholder": "Upper limit"
      },
      domProps: {
        "value": (a.upper)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.upper = $event.target.value
        }
      }
    })]), _c('div', {
      staticClass: "col-xs-4"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.home.binance.watching === false),
        expression: " home.binance.watching === false "
      }],
      staticClass: "btn btn-primary btn-sm",
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/home/binance/watch')
        }
      }
    }, [_vm._v("\n                    Watch\n                  ")]), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.home.binance.watching === true),
        expression: " home.binance.watching === true "
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/home/binance/unwatch')
        }
      }
    }, [_vm._v("\n                    Watching\n                  ")])])])])])])
  })), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _c('tbody', _vm._l((_vm.picked), function(a) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(a.key))]), _c('td', [_vm._v("\n                  " + _vm._s(a.open_price) + "\n                ")]), _c('td', {
      class: (a.percent > 1 ? 'bg-success' : '') + ' ' +
        (a.percent < -1 ? 'bg-danger' : '')
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                      " + _vm._s(a.stream.match(/usdt/) ? Number(a.last_price).toFixed(2) : a.last_price) + "\n                    ")]), _c('div', {
      staticClass: "col-md-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                      (" + _vm._s(a.percent) + "%)\n                    ")]), _c('div', {
      staticClass: "col-md-4"
    }, [_vm._v(" \n                      $" + _vm._s(a.stream.match(/usdt/) ? '--' : (a.last_price * _vm.home.binance.ratio).toFixed(2)) + " \n                    ")])])]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.lower),
        expression: "a.lower"
      }],
      staticClass: "input-sm form-control",
      domProps: {
        "value": (a.lower)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.lower = $event.target.value
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.upper),
        expression: "a.upper"
      }],
      staticClass: "input-sm form-control",
      domProps: {
        "value": (a.upper)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.upper = $event.target.value
        }
      }
    })]), _c('td', {
      style: ('color: ' + (a.last_price < a.target ? 'red' : 'green') + ';')
    }, [_vm._v("\n                  " + _vm._s(a.target) + "\n                ")]), _c('td', [_vm._v(_vm._s(parseInt(a.volume)))]), _c('td', [_vm._v(_vm._s(a.start_time))])])
  }))])])]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.home.binance.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.key) + "\n            ")]), _c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.open_price) + "\n            ")]), _c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.last_price) + "\n            ")]), _c('div', {
      staticClass: "col-xs-1"
    }, [_vm._v("\n              " + _vm._s(a.start_time) + "\n            ")]), _c('div', {
      staticClass: "col-xs-2"
    }, [_vm._v("\n              " + _vm._s(a.percent) + "\n            ")])])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n          Tips:"), _c('br'), _vm._v("\n          1. The only right moment to buy is when the price is falling hard. "), _c('br'), _vm._v("\n          2. The price always soar up all of a sudden. All you need to do is wait. "), _c('br'), _vm._v("\n          3. Sell half of your holdings near the top to refund. "), _c('br')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("\n                  Pair\n                ")]), _c('th', [_vm._v("Open Price")]), _c('th', [_vm._v("Last Price")]), _c('th', [_vm._v("Lower Limit")]), _c('th', [_vm._v("Upper Limit")]), _c('th', [_vm._v("Target")]), _c('th', [_vm._v("Volume")]), _c('th', [_vm._v("Start Time")])])])
}]}

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(236);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(237);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(143);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(144);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

exports.default = {
  components: {},
  watch: {
    $route: function $route() {
      // window.scroll(0, 0);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('app/load_script', { src: '/vendor/d3/d3.min.js' });

            case 2:
              console.log('d3 loaded');
              _this.initSvg();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: {
    initSvg: function initSvg() {

      var d3 = window.d3;

      var ForceChart = function () {
        function ForceChart(options) {
          (0, _classCallCheck3.default)(this, ForceChart);

          this.el = options.el;
          this.data = options.data;

          this.containerWidth = this.el.parentElement.offsetWidth;
          this.margin = { top: 60, right: 60, bottom: 60, left: 60 };
          this.width = this.containerWidth - this.margin.left - this.margin.right;
          this.height = 700 - this.margin.top - this.margin.bottom;

          this.color = d3.scaleOrdinal(d3.schemeCategory20);

          this.init();
        }

        (0, _createClass3.default)(ForceChart, [{
          key: 'init',
          value: function init() {
            this.chart = d3.select(this.el).attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom);
            this.graph = this.chart.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            // Create the simulation:
            this.simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d, i) {
              return i;
            }).distance(function (d) {
              return d.value * 50;
            })).force('charge', d3.forceManyBody()).force('center', d3.forceCenter(this.width / 2, this.height / 2));

            this.simulation.nodes(this.data.nodes);
            this.simulation.force('link').links(this.data.edges);
            this.simulation.on('tick', this.tick.bind(this));

            this.createLinks();
            this.createNodes();
            this.addTitle();
          }
        }, {
          key: 'createLinks',
          value: function createLinks() {
            // Draw the links:
            this.links = this.graph.append('g').attr('class', 'links').selectAll('line').data(this.data.edges).enter().append('line');

            this.show_links();

            // Draw the texts:
            this.linkTexts = this.graph.append('g').attr('class', 'link-text').selectAll('text').data(this.data.edges).enter().append('text').text(function (d) {
              return d.relation;
            }).style('fill-opacity', 0);
          }
        }, {
          key: 'createNodes',
          value: function createNodes() {
            var _this2 = this;

            this.nodes = this.graph.append('g') // 画圆圈和文字
            .attr('class', 'nodes').selectAll('g').data(this.data.nodes).enter().append('g').on('mouseover', function (d, i) {
              // Show text on the link:
              _this2.linkTexts.style('fill-opacity', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return 1;
                } else {
                  return 0;
                }
              });
              // Bold the link:
              _this2.links.style('stroke-width', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return '2px';
                } else {
                  return '1px';
                }
              }).style('stroke', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return 'red';
                } else {
                  return 'grey';
                }
              });
            }).on('mouseout', function (d, i) {
              // 隐去连接线上的文字
              _this2.linkTexts.style('fill-opacity', function (edge) {
                // if (edge.source === d || edge.target === d) {
                return 0;
                // }
              });
              _this2.show_links();
            }).call(d3.drag().on('start', this.dragstart.bind(this)).on('drag', this.dragmove.bind(this)).on('end', this.dragend.bind(this)));

            this.nodes.append('circle').attr('r', function (item) {
              // console.log(item);
              if (item.index <= 3) {
                return 8;
              } else {
                return 3;
              }
            }).attr('fill', function (d, i) {
              return _this2.color(i);
            });

            this.nodes.append('text').attr('fill', function (d, i) {
              return _this2.color(i);
            }).attr('y', -20).attr('dy', '.71em').text(function (d) {
              return d.name;
            });
          }
        }, {
          key: 'addTitle',
          value: function addTitle() {
            // Add title:
            this.chart.append('g')
            // .attr('class', 'bar--title')
            .append('text').attr('fill', '#000').attr('font-size', '16px').attr('font-weight', '700').attr('text-anchor', 'middle').attr('x', this.containerWidth / 2).attr('y', 20).text('Relationships');
          }
        }, {
          key: 'tick',
          value: function tick() {
            this.links.attr('x1', function (d) {
              return d.source.x;
            }).attr('y1', function (d) {
              return d.source.y;
            }).attr('x2', function (d) {
              return d.target.x;
            }).attr('y2', function (d) {
              return d.target.y;
            });
            this.linkTexts.attr('x', function (d) {
              return (d.source.x + d.target.x) / 2;
            }).attr('y', function (d) {
              return (d.source.y + d.target.y) / 2;
            });
            this.nodes.attr('transform', function (d) {
              return 'translate(' + d.x + ',' + d.y + ')';
            });
          }
        }, {
          key: 'show_links',
          value: function show_links() {
            this.links.style('stroke-width', '1px').style('stroke-opacity', 0.2).style('stroke', 'grey');
          }
        }, {
          key: 'dragstart',
          value: function dragstart(d) {
            if (!d3.event.active) {
              this.simulation.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
          }
        }, {
          key: 'dragmove',
          value: function dragmove(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
        }, {
          key: 'dragend',
          value: function dragend(d) {
            if (!d3.event.active) {
              this.simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
          }
        }]);
        return ForceChart;
      }();
      // var el_ = this.$refs.svg;
      // const containerWidth = el_.parentElement.offsetWidth;


      var data = {
        nodes: [{ name: 'Jon' }, { name: 'Tyrion' }, { name: 'Daenerys' }, { name: 'Jamie' }, { name: 'Bran' }],
        edges: [// value越小关系越近
        { 'source': 0, 'target': 1, 'relation': 'friends', value: 3 }, { 'source': 0, 'target': 2, 'relation': 'lovers', value: 3 }, { 'source': 0, 'target': 4, 'relation': 'brothers', value: 3 }, { 'source': 1, 'target': 2, 'relation': 'serve', value: 3 }, { 'source': 1, 'target': 3, 'relation': 'brothers', value: 3 }]
      };

      new ForceChart({
        el: this.$refs.svg,
        data: data
      });
      // const margin = { top: 60, right: 60, bottom: 60, left: 60 };
      // const width = containerWidth - margin.left - margin.right;
      // const height = 700 - margin.top - margin.bottom;
      // let chart = d3
      //   .select(el_)
      //   .attr('width', width + margin.left + margin.right)
      //   .attr('height', height + margin.top + margin.bottom);
      // let g = chart
      //   .append('g')
      //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // 设最外包层在总图上的相对位置

      // // Create the simulation:
      // let simulation = d3.forceSimulation()
      //   .force('link', d3.forceLink()
      //     .id(function(d, i) { return i; })
      //     .distance((d) => { return d.value * 50; }))
      //   .force('charge', d3.forceManyBody())
      //   .force('center', d3.forceCenter(width / 2, height / 2));


      // simulation // 初始化力导向图
      //   .nodes(data.nodes)
      //   .on('tick', ticked);

      // simulation.force('link')
      //   .links(data.edges);

      // let z = d3.scaleOrdinal(d3.schemeCategory20); // 通用线条的颜色 

      // let link = g.append('g') // 画连接线
      //   .attr('class', 'links')
      //   .selectAll('line')
      //   .data(data.edges)
      //   .enter()
      //   .append('line');

      // show_links();

      // function show_links() {
      //   link.style('stroke-width', '1px')
      //     .style('stroke-opacity', 0.2)
      //     .style('stroke', 'grey');
      // }

      // let linkText = g.append('g') // 画连接连上面的关系文字
      //   .attr('class', 'link-text')
      //   .selectAll('text')
      //   .data(data.edges)
      //   .enter().append('text')
      //   .text(function(d) {
      //     return d.relation;
      //   })
      //   .style('fill-opacity', 0);

      // let node = g.append('g') // 画圆圈和文字
      //   .attr('class', 'nodes')
      //   .selectAll('g')
      //   .data(data.nodes)
      //   .enter().append('g')
      //   .on('mouseover', (d, i) => {
      //     // Show text on the link:
      //     linkText.style('fill-opacity', function(edge) {
      //       if (edge.source === d || edge.target === d) {
      //         return 1;
      //       } else {
      //         return 0;
      //       }
      //     });
      //     // Bold the link:
      //     link.style('stroke-width', (edge) => {
      //       if (edge.source === d || edge.target === d) {
      //         return '2px';
      //       } else {
      //         return '1px';
      //       }
      //     }).style('stroke', (edge) => {
      //       if (edge.source === d || edge.target === d) {
      //         return 'red';
      //       } else {
      //         return 'grey';
      //       }
      //     });
      //   })
      //   .on('mouseout', function(d, i) {
      //     // 隐去连接线上的文字
      //     linkText.style('fill-opacity', function(edge) {
      //       // if (edge.source === d || edge.target === d) {
      //       return 0;
      //       // }
      //     });
      //     show_links();
      //   })
      //   .call(d3.drag()
      //     .on('start', dragstarted)
      //     .on('drag', dragged)
      //     .on('end', dragended));

      // node.append('circle')
      //   .attr('r', item => {
      //     // console.log(item);
      //     if (item.index <= 3) {
      //       return 8;
      //     } else {
      //       return 3;
      //     }
      //   })
      //   .attr('fill', function(d, i) { return z(i); });

      // node.append('text')
      //   .attr('fill', function(d, i) { return z(i); })
      //   .attr('y', -20)
      //   .attr('dy', '.71em')
      //   .text(function(d) { return d.name; });

      // // Add title:
      // chart.append('g')
      //   .attr('class', 'bar--title')
      //   .append('text')
      //   .attr('fill', '#000')
      //   .attr('font-size', '16px')
      //   .attr('font-weight', '700')
      //   .attr('text-anchor', 'middle')
      //   .attr('x', containerWidth / 2)
      //   .attr('y', 20)
      //   .text('Relationships');

      // function ticked() { // 力导向图变化函数，让力学图不断更新
      //   link
      //     .attr('x1', function(d) { return d.source.x; })
      //     .attr('y1', function(d) { return d.source.y; })
      //     .attr('x2', function(d) { return d.target.x; })
      //     .attr('y2', function(d) { return d.target.y; });
      //   linkText
      //     .attr('x', function(d) { return (d.source.x + d.target.x) / 2; })
      //     .attr('y', function(d) { return (d.source.y + d.target.y) / 2; });
      //   node
      //     .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
      // }

      // function dragstarted(d) {
      //   if (!d3.event.active) {
      //     simulation.alphaTarget(0.3).restart();
      //   }
      //   d.fx = d.x;
      //   d.fy = d.y;
      // }

      // function dragged(d) {
      //   d.fx = d3.event.x;
      //   d.fy = d3.event.y;
      // }

      // function dragended(d) {
      //   if (!d3.event.active) {
      //     simulation.alphaTarget(0);
      //   }
      //   d.fx = null;
      //   d.fy = null;
      // }
    }
  }
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(147);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "route-d3 container-fluid",
    staticStyle: {
      "padding-top": "15px"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _c('br'), _vm._v("\n      d3 - ForceChart\n    ")], 1)]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('svg', {
    ref: "svg"
  })])])])
},staticRenderFns: []}

/***/ })
]));