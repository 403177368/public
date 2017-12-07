webpackJsonp([0],Array(37).concat([
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  "data-v-7f7ff48e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-2fa9fa19",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(110)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var state = {
  inited: false,
  box: {
    tabs: ['简书', 'Echojs', 'Cnode'],
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
    status: '',
    pairs: [{
      id: 0,
      key: 'BTC',
      symbol: 'tBTCUSD',
      last_price: 0,
      color: ''
    }, {
      id: 0,
      key: 'BCH',
      symbol: 'tBCHUSD',
      last_price: 0,
      color: ''
    }, {
      id: 0,
      key: 'BTG',
      symbol: 'tBTGUSD',
      last_price: 0,
      color: ''
    }]
  },
  okex: {
    status: '',
    pairs: [{
      key: 'BCH/USDT',
      last_price: 0
    }]
  }
};

var actions = {
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
    };
  },
  initWebSocket: function initWebSocket(_ref2) {
    var state = _ref2.state;

    if (state.coins.status === '') {
      try {
        var ws = new WebSocket('wss://api.bitfinex.com/ws/2');
        ws.onopen = function (event) {
          state.coins.status = 'connected';
          console.log('Connection established. ' + this.readyState);

          state.coins.pairs.forEach(function (a) {
            ws.send(JSON.stringify({
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
              state.coins.pairs.forEach(function (a) {
                if (obj[0] === a.id) {
                  var price = obj[1][6];
                  if (price > a.last_price) {
                    a.color = 'green';
                  } else {
                    a.color = 'red';
                  };
                  a.last_price = price;
                }
              });
            }
          }
        };
        ws.onclose = function (event) {
          state.coins.status = '';
          console.log('Disconnected: ' + this.readyState);
        };
        ws.onerror = function (event) {
          console.log('Errored!');
        };
      } catch (e) {
        alert(e.message);
      }
    };
  },
  initOkex: function initOkex(_ref3) {
    var state = _ref3.state;

    if (state.okex.status === '') {
      try {
        var ws = new WebSocket('wss://real.okex.com:10441/websocket');
        ws.onopen = function (event) {
          state.okex.status = 'connected';
          console.log('Connection established. ' + this.readyState);

          ws.send(JSON.stringify({
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
    };
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
      return Promise.resolve();
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
        (_state$what$items = state[what].items).push.apply(_state$what$items, _toConsumableArray(res.data.data));
      });
    };
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
};

var mutations = {};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(52);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    News: __webpack_require__(75),
    BoxSignin: __webpack_require__(53),
    Posts: __webpack_require__(54),
    DatePicker: __webpack_require__(85)
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
    // this.$store.dispatch('main/home/initOkex');

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
      axios({
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

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "News list-group"
  }, [_vm._l((_vm.news.items), function(a) {
    return _c('li', {
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
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
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
/* 81 */
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
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      Login\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = _defineProperty({
  computed: {
    list: function list() {
      return this.$store.state.main.blog.posts.items;
    }
  },
  methods: {},
  mounted: function mounted() {}
}, "methods", {});

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('div', {
    staticClass: "Posts"
  }, [_c('div', {
    staticClass: "panel panel-default"
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  "data-v-79915ab6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
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
        };
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
/* 88 */
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
/* 89 */
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
  }, [_vm._v("\n              Bitfinex\n            ")]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.home.coins.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('span', [_vm._v(_vm._s(a.key))]), _c('span', {
      style: ('color: ' + a.color + ';')
    }, [_vm._v("$" + _vm._s(a.last_price.toFixed(2)))])])
  }))]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n              Okex\n            ")]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.home.okex.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('span', [_vm._v(_vm._s(a.key))]), _c('span', [_vm._v("$" + _vm._s(a.last_price.toFixed(2)))])])
  }))]), _c('div', {
    staticClass: "panel panel-default tabbed"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, _vm._l((_vm.home.box.tabs), function(a, i) {
    return _c('span', {
      class: i === _vm.home.box.current ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/home/switch_tab', {
            i: i
          })
        }
      }
    }, [_vm._v(_vm._s(a))])
  })), (_vm.home.box.current === 0) ? _c('ul', {
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
  }, [_vm._v("\n                Loading...\n              ")]), _vm._l((_vm.$store.state.main.home.jianshu.items), function(a) {
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
  })], 2) : _vm._e(), (_vm.home.box.current === 0) ? _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("加载更多")])]) : _vm._e(), (_vm.home.box.current === 1) ? _c('ul', {
    staticClass: "list-group"
  }, _vm._l((_vm.$store.state.main.home.echojs.items), function(a) {
    return _c('a', {
      staticClass: "list-group-item",
      attrs: {
        "href": a.href
      }
    }, [_c('p', [_vm._v(_vm._s(a.author.name) + " " + _vm._s(a.time))]), _c('h4', [_vm._v(_vm._s(a.title))])])
  })) : _vm._e(), (_vm.home.box.current === 1) ? _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "btn btn-primary btn-sm"
  }, [_vm._v("加载更多")])]) : _vm._e(), (_vm.home.box.current === 2) ? _c('news') : _vm._e()], 1)]), _c('div', {
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
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(92);

var _projects2 = _interopRequireDefault(_projects);

var _home = __webpack_require__(52);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    };
  },
  fetchProjects: function fetchProjects(ctx) {
    return new Promise(function (resolve, reject) {
      var projects = __webpack_require__(93).default;
      resolve(projects);
    });
  }
};

var mutations = {
  SET_PROJECTS: function SET_PROJECTS(state, arr) {
    var _state$projects;

    state.inited = true;
    (_state$projects = state.projects).push.apply(_state$projects, _toConsumableArray(arr));
  }
};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),
/* 93 */
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
/* 94 */
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
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-heading color-text"
  }, [_c('span', [_vm._v("简书")]), _c('span', [_vm._v("豆瓣")])]), _c('div', {
    staticClass: "card-group"
  }, _vm._l((_vm.$store.state.main.home.jianshu.items), function(a) {
    return _c('div', {
      staticClass: "card-item"
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
    staticClass: "card-body"
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
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blog = __webpack_require__(105);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Posts: __webpack_require__(54)
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
        return Promise.resolve();
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

      return new Promise(function (resolve, reject) {
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
      (_state$posts$items = state.posts.items).push.apply(_state$posts$items, _toConsumableArray(arr));
    },
    SET_FOCUS: function SET_FOCUS(state, arr) {
      var _state$focus$items;

      state.focus.inited = true;
      state.focus.items.length = 0;
      (_state$focus$items = state.focus.items).push.apply(_state$focus$items, _toConsumableArray(arr));
    }
  }
};

/***/ }),
/* 106 */
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
    staticClass: "panel panel-default"
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
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
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
    BoxSignin: __webpack_require__(53)
  },
  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  methods: {}
};

/***/ }),
/* 112 */
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

/***/ })
]));