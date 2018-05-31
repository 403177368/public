webpackJsonp([0],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(294)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(312),
  /* scopeId */
  "data-v-248bd508",
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(173), __esModule: true };

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
module.exports = __webpack_require__(4).Object.keys;


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(32);

__webpack_require__(175)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(4);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(165);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(29);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(170);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(52);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

var _binance = __webpack_require__(177);

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
    binance: _binance2.default,
    comment_box: __webpack_require__(178).default
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(170);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(52);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(172);

var _keys2 = _interopRequireDefault(_keys);

var _axios = __webpack_require__(17);

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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    list: [],
    content: ''
  },
  actions: {
    init: function init(_ref) {
      var state = _ref.state;

      return (0, _axios2.default)({
        url: '/api/sqlite/comments/',
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        state.inited = true;
        state.list = res.data.data.items;
      });
    },
    commit: function commit(_ref2) {
      var state = _ref2.state,
          dispatch = _ref2.dispatch;

      if (!state.content) {
        alert('Your comment can not be empty!');
        return;
      }
      return (0, _axios2.default)({
        url: '/api/sqlite/comments/',
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        data: {
          author_id: null,
          content: state.content
        }
      }).then(function (res) {
        if (res.data.errno === 0) {
          state.content = '';
          dispatch('init');
        }
      });
    }
  }
};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(180), __esModule: true };

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(181);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(186)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fbfcd892!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BoxSignin.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fbfcd892!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BoxSignin.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n", ""]);

// exports


/***/ }),

/***/ 188:
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

/***/ 189:
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
    attrs: {
      "type": "password"
    },
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
      value: (_vm.user.info),
      expression: " user.info "
    }],
    staticClass: "form-group has-error"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_vm._v("\n        " + _vm._s(_vm.user.info) + "\n      ")])]), _c('div', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      Login\n    ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(191)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66fec26c!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66fec26c!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Posts.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.Posts .panel-heading {\n  vertical-align: middle;\n}\n.Posts .title {\n  font-size: 22px;\n}\n.Posts .title a {\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(194);

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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(179);

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

/***/ 195:
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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-248bd508&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-248bd508&scoped=true!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.Home .panel-heading span[data-v-248bd508] {\n  margin-right: 15px;\n  cursor: pointer;\n}\n.Home .panel-heading span.active[data-v-248bd508] {\n  color: #0f88eb;\n}\n.Home .list-group-item .label-[data-v-248bd508] {\n  display: inline-block;\n  width: 100px;\n}\n.Home .list-group-item .sum[data-v-248bd508] {\n  display: inline-block;\n  text-align: right;\n}\n.Home .list-group-item .price-[data-v-248bd508] {\n  display: inline-block;\n  width: 70px;\n  color: orange;\n}\n.Home .list-group-item .percent[data-v-248bd508] {\n  display: inline-block;\n  width: 46px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(176);

var _index2 = _interopRequireDefault(_index);

var _axios = __webpack_require__(17);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    News: __webpack_require__(297),
    BoxSignin: __webpack_require__(185),
    Posts: __webpack_require__(190),
    // DatePicker: require('./DatePicker.vue'),
    'tabbed-panel': __webpack_require__(302),
    'comment-box': __webpack_require__(307)
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
    this.$store.complete(['main', 'home'], _index2.default);
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
      store.complete(['main', 'home'], _index2.default);
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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(298)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(300),
  /* template */
  __webpack_require__(301),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1fe2b659!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./News.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1fe2b659!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./News.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.News .pagination {\n  display: table;\n  margin: 0 auto;\n}\n.News .pagination a {\n  cursor: pointer;\n}\n.News .list-group-item {\n  position: relative;\n  overflow: hidden;\n}\n.News .left-part {\n  position: absolute;\n  margin-right: 15px;\n}\n.News .left-part .avatar {\n  width: 40px;\n  border-radius: 1000px;\n}\n.News .middle-part {\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 55px;\n}\n.News .middle-part .title-- {\n  margin-bottom: 0px;\n}\n.News .middle-part .title-- a {\n  display: inline-block;\n  width: 82%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.News .right-part .cell {\n  display: table-cell;\n}\n.News .right-part .cell .badge {\n  vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ 300:
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

/***/ 301:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "News list-group",
    attrs: {
      "id": "container-1996"
    }
  }, [(_vm.news.status === 'loading') ? _c('li', {
    staticClass: "list-group-item text-center"
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })]) : _vm._e(), _vm._l((_vm.news.items), function(a) {
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
    }, [_c('div', {}, [_c('router-link', {
      attrs: {
        "to": '/main/cnode_post/' + a.id
      }
    }, [_vm._v(_vm._s(a.title))]), _c('span', {
      staticClass: "badge pull-right"
    }, [_vm._v(_vm._s(a.reply_count))])], 1), _c('div', [_vm._v(_vm._s(a.author.loginname))])])])
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(303)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(306),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-60138f3d!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbed-panel.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-60138f3d!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbed-panel.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.TabbedPanel777 .panel-heading span {\n  margin-right: 15px;\n  cursor: pointer;\n}\n.TabbedPanel777 .panel-heading span.active {\n  color: #0f88eb;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #0f88eb;\n}\n.TabbedPanel777 .list-group {\n  margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 305:
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

/***/ 306:
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

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(308)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(310),
  /* template */
  __webpack_require__(311),
  /* scopeId */
  "data-v-420f6216",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-420f6216&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment_box.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-420f6216&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment_box.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 310:
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
  computed: {
    box: function box() {
      return this.$store.state.main.home.comment_box;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('main/home/comment_box/init');
  },

  methods: {}
};

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment_box"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Comment")]), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {}, [_c('div', {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.box.content),
      expression: " box.content "
    }],
    staticClass: "form-control",
    domProps: {
      "value": (_vm.box.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.box.content = $event.target.value
      }
    }
  })]), _c('div', {
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm pull-right",
    on: {
      "click": function($event) {
        _vm.$store.dispatch('main/home/comment_box/commit')
      }
    }
  }, [_vm._v("Commit")])])])]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.box.list), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "text-muted"
    }, [_vm._v("\n          " + _vm._s(a.author ? a.author.name : 'Anonymous User') + " - " + _vm._s(_vm._f("date")(a.updatedAt)) + "\n        ")]), _vm._v("\n        " + _vm._s(a.content) + "\n      ")])
  }))])])
},staticRenderFns: []}

/***/ }),

/***/ 312:
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
    staticClass: "list-group"
  }, [_c('div', {
    staticClass: "list-group-item"
  }, [_c('v-pills', {
    attrs: {
      "items": [{
        text: 'Game'
      }, {
        text: 'Template'
      }]
    }
  }), _vm._v("\n                本站前端使用Vue技术栈搭建，后端使用了Node.js，并使用了服务端渲染。可打开浏览器控制台查看后端返回的HTML。\n              ")], 1), _c('div', {
    staticClass: "list-group-item"
  }, [_c('a', {
    attrs: {
      "href": "/canvas/alien_invasion.html"
    }
  }, [_c('strong', [_vm._v("Alien Invasion")])]), _c('br'), _vm._v("\n                A space shooter game written in TypeScript."), _c('br'), _c('a', {
    attrs: {
      "href": "//github.com/403177368/all/tree/master/src/canvas/src/pages/alien_invasion"
    }
  }, [_vm._v("Source Code")])]), _c('div', {
    staticClass: "list-group-item"
  }, [_c('a', {
    attrs: {
      "href": "/vue/index.html"
    }
  }, [_c('strong', [_vm._v("Yux动效库")])]), _c('br'), _vm._v("\n                各种动画效果组件。"), _c('br'), _c('a', {
    attrs: {
      "href": "//github.com/403177368/all/tree/master/src/vue"
    }
  }, [_vm._v("Source Code")])]), _c('div', {
    staticClass: "list-group-item"
  }, [_c('a', {
    attrs: {
      "href": "/farm/index.html"
    }
  }, [_c('strong', [_vm._v("Mall")])]), _c('br'), _vm._v("\n                一个移动端商城，使用了react技术栈和自己开发的revuex库。"), _c('br'), _c('a', {
    attrs: {
      "href": "//github.com/403177368/all/tree/master/src/vue"
    }
  }, [_vm._v("Source Code")])])])]), _c('div', {
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
  }, [(_vm.$store.state.main.home.echojs.items.length === 0) ? _c('li', {
    staticClass: "list-group-item",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })]) : _vm._e(), _vm._l((_vm.$store.state.main.home.echojs.items), function(a) {
    return _c('a', {
      staticClass: "list-group-item",
      attrs: {
        "href": a.href
      }
    }, [_c('p', [_vm._v(_vm._s(a.author.name) + " " + _vm._s(a.time))]), _c('div', {
      staticStyle: {
        "font-size": "18px"
      }
    }, [_vm._v(_vm._s(a.title))])])
  })], 2), _c('div', {
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
  }, [_vm._v("Search")])]), (_vm.$store.state.main.home.jianshu.items.length === 0) ? _c('li', {
    staticClass: "list-group-item",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })]) : _vm._e(), _vm._l((_vm.$store.state.main.home.jianshu.items), function(a) {
    return _c('li', {
      staticClass: "list-group-item",
      attrs: {
        "href": a.href
      }
    }, [_c('p', {
      staticClass: "small text-muted"
    }, [_vm._v(_vm._s(a.author.name) + " · " + _vm._s(a.time.substr(0, 10)))]), _c('h4', [_c('a', {
      attrs: {
        "href": a.href
      }
    }, [_vm._v(_vm._s(a.title))])]), _c('div', [_vm._v(_vm._s(a.abstract))])])
  })], 2), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("加载更多")])])]), _c('news', {
    attrs: {
      "slot": "body_2"
    },
    slot: "body_2"
  })], 2), (false) ? _c('tabbed-panel', {
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
  })], 2)]) : _vm._e(), _c('comment-box')], 1), _c('div', {
    staticClass: "col-sm-4"
  }, [(_vm.user.loggedIn) ? _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n              Welcome, "), _c('router-link', {
    attrs: {
      "to": "/main/profile"
    }
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v("!\n            ")], 1)]) : _vm._e(), _c('div', {
    staticClass: "panel-container"
  }, [_c('v-calender')], 1), _c('div', {
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

/***/ })

});