webpackJsonp([0],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(247)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(261),
  /* scopeId */
  "data-v-7f7ff48e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(31);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(53);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(32);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _binance = __webpack_require__(156);

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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(53);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(32);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _axios = __webpack_require__(11);

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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(164)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(166),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
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

/***/ 166:
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

/***/ 247:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(155);

var _home2 = _interopRequireDefault(_home);

var _axios = __webpack_require__(11);

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

exports.default = {
  name: 'main-home',
  components: {
    News: __webpack_require__(249),
    BoxSignin: __webpack_require__(163),
    Posts: __webpack_require__(167),
    DatePicker: __webpack_require__(253),
    'tabbed-panel': __webpack_require__(257)
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

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(250)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(251),
  /* template */
  __webpack_require__(252),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 251:
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

/***/ 252:
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(254)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(256),
  /* scopeId */
  "data-v-79915ab6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 255:
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

/***/ 256:
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(258)

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(260),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 259:
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

/***/ 260:
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

/***/ 261:
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
  }, [_vm._v("\n                本站前端使用Vue技术栈搭建，后端使用了Node.js，并使用了服务端渲染。可打开浏览器控制台查看后端返回的HTML。\n              ")]), _c('div', {
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
  }, _vm._l((_vm.$store.state.main.home.echojs.items), function(a) {
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
  })], 2)]) : _vm._e()], 1), _c('div', {
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

/***/ })

});