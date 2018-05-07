webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(206),
  /* scopeId */
  "data-v-690b9843",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(150);

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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(152);
module.exports = __webpack_require__(2).Array.from;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(11);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(26);
var call = __webpack_require__(45);
var isArrayIter = __webpack_require__(46);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(153);
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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(28);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(26);
var $keys = __webpack_require__(30);

__webpack_require__(159)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(2);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(179);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MaskEdit: __webpack_require__(186),
    'mask-nav': __webpack_require__(190),
    Tip: __webpack_require__(194),
    'v-menu': __webpack_require__(198),
    Navbar: __webpack_require__(202)
  },
  beforeCreate: function beforeCreate() {
    this.$store.ensure(['admin'], _index2.default);
  },

  created: function created() {
    // this.$store.dispatch('admin/items/fetchItems');
    // this.$store.dispatch('PLUS');
  },
  mounted: function mounted() {
    this.$store.dispatch('admin/items/fetchItems');
  },

  computed: {
    items: function items() {
      return this.$store.state.admin.items;
    }
  },
  methods: {
    register: function register(store) {
      store.ensure(['admin'], _index2.default);
    }
    // preFetch(store) {
    //   store.dispatch('admin/items/fetchItems');
    // }

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

/***/ }),

/***/ 179:
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
    mask_nav: __webpack_require__(180).default,
    menu: __webpack_require__(181).default,

    items: __webpack_require__(182).default,
    tip: __webpack_require__(183).default,

    graphql: __webpack_require__(184).default,
    sequelize: __webpack_require__(185).default
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    show: false
  },
  actions: {
    toggle: function toggle(_ref) {
      var state = _ref.state;

      state.show = !state.show;
    }
  }
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  state: {
    tabs: [{
      name: 'Dashboard',
      href: '/admin/dashboard'
    }, {
      name: 'Deployment',
      href: '/admin/deployment',
      active: false
      // children: [{
      //   name: 'aaa'
      // }, {
      //   name: 'bbb'
      // }]
    }, {
      name: 'Crawler',
      href: '/admin/crawler',
      subs: []
    }, {
      name: 'Graphql',
      href: '/admin/graphql',
      subs: []
    }, {
      name: 'Databases',
      href: '',
      active: false,
      children: [{
        name: 'Sequelize',
        href: '/admin/sequelize'
      }, {
        name: 'MongoDB',
        href: '/admin/mongo'
      }, {
        name: 'Lowdb',
        href: '/admin/lowdb'
      }]
    }]
  }
};

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(49);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(149);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(154);

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

/***/ 183:
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

/***/ 184:
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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(156);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(149);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    tables: [],
    tableName: '',
    page: 1,
    filter: [],

    result: {
      page: 0,
      page_count: 0,
      count: 0
    },

    rows: [],
    checked: []
  },
  actions: {
    init: function init(_ref) {
      var _this = this;

      var state = _ref.state,
          dispatch = _ref.dispatch;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _state$tables;

        var _ref2, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch('get', { url: '/api/sqlite/' }, { root: true });

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;

                // console.log(data);
                state.tables.length = 0;
                (_state$tables = state.tables).push.apply(_state$tables, (0, _toConsumableArray3.default)(data));
                // console.log(data);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    query: function query(_ref3) {
      var _this2 = this;

      var state = _ref3.state,
          dispatch = _ref3.dispatch;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _state$rows;

        var query, _ref4, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = state.filter.reduce(function (str, a) {
                  if (a.val) {
                    return str += a.key + '=' + a.val + '&';
                  }
                  return str += '';
                }, 'page=' + state.page + '&');
                _context2.next = 3;
                return dispatch('get', { url: '/api/sqlite/' + state.tableName + '?' + query }, { root: true });

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;


                state.rows.length = 0;
                (_state$rows = state.rows).push.apply(_state$rows, (0, _toConsumableArray3.default)(data.data.items));

                state.result.page = data.data.page;
                state.result.page_count = data.data.page_count;
                state.result.count = data.data.count;

                return _context2.abrupt('return', data.data.items);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    fetchTable: function fetchTable(_ref5, _ref6) {
      var _this3 = this;

      var state = _ref5.state,
          dispatch = _ref5.dispatch;
      var tableName = _ref6.tableName;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var items, _state$filter, arr;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:

                state.tableName = tableName;
                state.filter.length = 0;
                state.page = 1;

                _context3.next = 5;
                return dispatch('query');

              case 5:
                items = _context3.sent;


                if (items.length > 0) {
                  // console.log(Object.keys(data.data.items[0]));
                  arr = (0, _keys2.default)(items[0]).map(function (a) {
                    return {
                      key: a,
                      val: ''
                    };
                  });
                  // console.log(arr);

                  (_state$filter = state.filter).push.apply(_state$filter, (0, _toConsumableArray3.default)(arr));
                  // console.log(state.rows);
                }

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    prev: function prev(_ref7) {
      var state = _ref7.state,
          dispatch = _ref7.dispatch;

      if (state.page > 1) {
        state.page--;
        dispatch('query');
      }
    },
    next: function next(_ref8) {
      var state = _ref8.state,
          dispatch = _ref8.dispatch;

      state.page++;
      dispatch('query');
    },
    delete: function _delete(_ref9, _ref10) {
      var _this4 = this;

      var state = _ref9.state,
          dispatch = _ref9.dispatch;
      var id = _ref10.id;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _axios2.default)({
                  url: '/api/sqlite/' + state.tableName,
                  // this is essential cause a fetch request is without cookie by default
                  withCredentials: true,
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data: [id]
                }).then(function (res) {
                  console.log(res);
                  if (res.data.errno === 0) {
                    dispatch('query');
                  }
                });

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  }
};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(187)

var Component = __webpack_require__(4)(
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

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

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

exports.default = {
  data: function data() {
    return {
      patch: {}
    };
  },
  computed: {
    beingEditted: function beingEditted() {
      return this.$store.state.admin.items.beingEditted;
    },
    item: function item() {
      // console.log(this.$store.getters)
      return this.$store.getters['admin/items/item'];
    }
  },
  watch: {},
  methods: {
    EDIT_ITEM_VALUE: function EDIT_ITEM_VALUE(key, e) {
      this.patch[key] = e.target.value;
      // this.$store.commit('EDIT_ITEM_VALUE',{
      //   key: key,
      //   val: e.target.value
      // })
    },

    // saveItem() {
    //   this.$store.dispatch('saveItem', JSON.stringify(this.item))
    // },
    close: function close() {
      this.patch = {};
      this.$store.commit('admin/items/EDIT_ITEM_OVER');
    },
    patchItem: function patchItem() {
      this.$store.dispatch('admin/items/patchItem', {
        id: this.item.id,
        patch_json: (0, _stringify2.default)(this.patch)
      });
    }
  }
};

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.beingEditted >= 0),
      expression: " beingEditted>=0 "
    }],
    staticClass: "Mask"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "Edit panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n          " + _vm._s(_vm.item.id) + "\n          "), _c('span', {
    staticClass: "pull-right close"
  }, [_c('i', {
    staticClass: "fa fa-close",
    on: {
      "click": _vm.close
    }
  })])]), _c('div', {
    staticClass: "panel-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, _vm._l((_vm.item), function(val, key) {
    return _c('div', {
      key: "key",
      staticClass: "row"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('div', {
      staticClass: "col-sm-2"
    }, [_c('label', {
      staticClass: "control-label"
    }, [_vm._v("\n                      " + _vm._s(key) + "\n                    ")])]), _c('div', {
      staticClass: "col-sm-10"
    }, [(key !== 'id') ? _c('input', {
      staticClass: "form-control input-sm",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": val
      },
      on: {
        "change": function($event) {
          _vm.EDIT_ITEM_VALUE(key, $event)
        }
      }
    }) : _vm._e()])])])
  }))])]), _c('div', {
    staticClass: "panel-footer"
  }, [_c('div', {
    staticClass: "btn btn-success",
    on: {
      "click": _vm.patchItem
    }
  }, [_vm._v("\n            save\n          ")]), _c('div', {
    staticClass: "btn btn-danger"
  }, [_vm._v("\n            new\n          ")])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(191)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(193),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
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
  data: function data() {
    return {};
  },

  computed: {
    mask: function mask() {
      return this.$store.state.admin.mask_nav;
    },
    menu: function menu() {
      return this.$store.state.admin.menu;
    }
  },
  watch: {},
  methods: {}
};

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: " mask.show "
    }],
    staticClass: "mask_nav",
    on: {
      "click": function($event) {
        _vm.$store.dispatch('admin/mask_nav/toggle')
      }
    }
  }, [_c('div', {
    staticClass: "inner--"
  }, [_vm._l((_vm.menu.tabs), function(a) {
    return [_c('router-link', {
      attrs: {
        "to": a.href
      }
    }, [_vm._v(_vm._s(a.name))]), _c('br'), (a.children) ? [_vm._l((a.children), function(b) {
      return [_c('router-link', {
        staticStyle: {
          "padding-left": "15px"
        },
        attrs: {
          "to": b.href
        }
      }, [_vm._v(_vm._s(b.name))]), _c('br')]
    })] : _vm._e()]
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(195)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(197),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
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
  computed: {
    tip: function tip() {
      return this.$store.state.admin.tip;
    }
  }
};

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tip.show),
      expression: " tip.show "
    }],
    staticClass: "Tip alert alert-danger"
  }, [_vm._v("\n  " + _vm._s(_vm.tip.msg) + "\n")])
},staticRenderFns: []}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(201),
  /* scopeId */
  "data-v-03f608f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
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

exports.default = {
  props: {
    css: {
      default: function _default() {
        return '';
      }
    },
    list: {
      default: function _default() {
        return [{
          name: 'Lowdb',
          href: '/admin/lowdb',
          children: []
        }, {
          name: 'Sequelize',
          href: '/admin/sequelize',
          children: []
        }, {
          name: 'Posts',
          href: '/admin/posts',
          children: []
        }, {
          name: 'Focus',
          href: '/admin/focus',
          children: []
        }, {
          name: 'Tables',
          href: '/admin/tables',
          children: []
        }, {
          name: 'Mongo',
          href: '/admin/mongo'
        }];
      }
    }
  },
  computed: {}
};

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "v-menu",
    style: (_vm.css)
  }, _vm._l((_vm.list), function(a) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": a.href
      }
    }, [_c('i', {
      staticClass: "fa fa-eye"
    }), _vm._v("\n      " + _vm._s(a.name) + "\n      "), _c('i', {
      staticClass: "fa fa-caret-right"
    })]), _c('ul', {
      staticClass: "v-menu-second"
    }, _vm._l((a.children), function(b) {
      return _c('li', [_c('p', [_vm._v("电站分布地图")]), _c('ul', {
        staticClass: "v-menu-third"
      }, [_vm._l((b.children), function(c) {
        return _c('li', [_vm._v("三级列表1")])
      }), _c('li', [_vm._v("三级列表2")])], 2)])
    }))], 1)
  }))
},staticRenderFns: []}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(203)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(205),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
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

exports.default = {
  data: function data() {
    return {
      tabs: [{
        name: 'users',
        href: '#/admin/users',
        subs: []
      }, {
        name: 'items',
        href: '#/admin/items',
        subs: []
      }, {
        name: 'signin',
        href: '#/admin/signin',
        subs: []
      }]
    };
  },
  computed: {}
};

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MyNavbar navbar navbar-inverse"
  }, [_c('div', {}, [_c('div', {
    staticClass: "navbar-brand"
  }, [_c('router-link', {
    attrs: {
      "to": "/main/home"
    }
  }, [_vm._v("Madsoap")])], 1)]), _c('div', {
    staticClass: "navicon-- visible-sm visible-xs"
  }, [_c('i', {
    staticClass: "fa fa-navicon",
    staticStyle: {
      "color": "white"
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch('admin/mask_nav/toggle')
      }
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RouteAdmin"
  }, [_c('navbar'), _c('mask-edit'), _c('mask-nav'), _c('tip'), _c('div', {
    staticClass: "main-part"
  }, [_c('v-side-menu', {
    attrs: {
      "menu": _vm.$store.state.admin.menu.tabs
    }
  }), _c('div', {
    staticClass: "right-part"
  }, [_c('div', {
    staticClass: "container--"
  }, [_c('router-view')], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ })

});