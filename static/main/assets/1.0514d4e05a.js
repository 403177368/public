webpackJsonp([1],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  "data-v-690b9843",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(164);

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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(166);
module.exports = __webpack_require__(4).Array.from;


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(13);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(28);
var call = __webpack_require__(47);
var isArrayIter = __webpack_require__(48);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(167);
var getIterFn = __webpack_require__(49);

$export($export.S + $export.F * !__webpack_require__(50)(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
module.exports = __webpack_require__(4).Object.keys;


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(32);

__webpack_require__(173)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 173:
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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-690b9843&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.admin.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-690b9843&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.admin.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.RouteAdmin[data-v-690b9843] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.RouteAdmin .my-group[data-v-690b9843] {\n  margin-bottom: 15px!important;\n}\n.RouteAdmin .main-part[data-v-690b9843] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100vh;\n  padding-top: 50px;\n  overflow: hidden;\n}\n.RouteAdmin .main-part [data-v-690b9843]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.RouteAdmin .right-part[data-v-690b9843] {\n  height: 100%;\n  overflow: scroll;\n}\n@media (min-width: 992px) {\n.RouteAdmin .right-part[data-v-690b9843] {\n    margin-left: 200px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(197);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MaskEdit: __webpack_require__(204),
    'mask-nav': __webpack_require__(209),
    Tip: __webpack_require__(214),
    'v-menu': __webpack_require__(219),
    Navbar: __webpack_require__(224)
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
//

/***/ }),

/***/ 197:
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
    mask_nav: __webpack_require__(198).default,
    menu: __webpack_require__(199).default,

    items: __webpack_require__(200).default,
    tip: __webpack_require__(201).default,

    graphql: __webpack_require__(202).default,
    sequelize: __webpack_require__(203).default
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

/***/ 198:
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

/***/ 199:
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(163);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(168);

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

/***/ 201:
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

/***/ 202:
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

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(170);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(52);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(163);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(53);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(17);

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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(208),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c05caac!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Mask.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c05caac!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Mask.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.Mask {\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 9999;\n}\n.Mask .cell {\n  display: table-cell;\n  vertical-align: middle;\n}\n.Mask .cell .Edit {\n  width: 60%;\n  margin: 0;\n  margin: auto;\n  overflow: scroll;\n}\n.Mask .cell .Edit .close {\n  color: black;\n  cursor: pointer;\n}\n.Mask .cell .Edit .panel-body {\n  max-height: 60vh;\n  overflow: scroll;\n}\n.Mask .cell .Edit .panel-footer .btn {\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(168);

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

/***/ 208:
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

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0045ee0a!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mask_nav.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0045ee0a!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mask_nav.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.mask_nav {\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 9999;\n}\n.mask_nav .inner-- {\n  padding: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 212:
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

/***/ 213:
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(215)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(217),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-379c7cea!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tip.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-379c7cea!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tip.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.Tip {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  z-index: 9999;\n}\n", ""]);

// exports


/***/ }),

/***/ 217:
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

/***/ 218:
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

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  "data-v-03f608f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03f608f6&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-menu.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-03f608f6&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-menu.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.v-menu[data-v-03f608f6] {\n  position: relative;\n  background: #34485E;\n  overflow: hidden;\n}\n.v-menu > li[data-v-03f608f6] {\n  height: 50px;\n  line-height: 50px;\n  background: #34485E;\n  border-bottom: 1px solid #324456;\n  color: grey;\n  cursor: pointer;\n}\n.v-menu > li a[data-v-03f608f6] {\n  text-indent: 20px;\n  text-decoration: none;\n}\n.v-menu > li:hover a[data-v-03f608f6] {\n  color: white;\n}\n.menu > li:hover > p[data-v-03f608f6] {\n  color: white;\n}\n.menu > li > p[data-v-03f608f6] {\n  width: 140px;\n  height: 60px;\n  background: #34485E;\n  line-height: 60px;\n  font-size: 90%;\n}\n.menu .span-icon[data-v-03f608f6] {\n  margin: 0 5px 0 10px;\n}\n.icon-arrow[data-v-03f608f6] {\n  float: right;\n  margin-right: 20px;\n}\n.menu .ulb[data-v-03f608f6] {\n  width: 140px;\n  display: none;\n}\n.menu .ulb > li[data-v-03f608f6] {\n  background: #2C3E50;\n}\n.menu .ulb > li > p[data-v-03f608f6] {\n  width: 140px;\n  height: 40px;\n  text-indent: 20px;\n  line-height: 40px;\n  font-size: 80%;\n}\n.menu .ulb > li:hover > p[data-v-03f608f6] {\n  color: white;\n}\n.menu .ulc[data-v-03f608f6] {\n  width: 140px;\n  display: none;\n}\n.menu .ulc > li[data-v-03f608f6] {\n  height: 25px;\n  background: #1E2A38;\n  font-size: 80%;\n  line-height: 25px;\n  text-indent: 40px;\n}\n.menu .ulc > li[data-v-03f608f6]:hover {\n  color: white;\n  background: #38A7F1;\n}\n", ""]);

// exports


/***/ }),

/***/ 222:
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

/***/ 223:
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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(227),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f7cf860!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f7cf860!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.MyNavbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  margin-bottom: 0;\n  border: none;\n  border-radius: 0;\n  z-index: 1000;\n}\n.MyNavbar a {\n  color: white;\n  text-decoration: none;\n}\n.MyNavbar .navicon-- {\n  float: right;\n  line-height: 50px;\n  font-size: 18px;\n  cursor: pointer;\n  padding-right: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
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

/***/ 228:
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

/***/ 229:
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