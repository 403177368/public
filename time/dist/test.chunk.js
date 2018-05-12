/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/time/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 600);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(15);

var _vuex2 = _interopRequireDefault(_vuex);

var _cart = __webpack_require__(19);

var _cart2 = _interopRequireDefault(_cart);

var _items = __webpack_require__(20);

var _items2 = _interopRequireDefault(_items);

var _item = __webpack_require__(21);

var _item2 = _interopRequireDefault(_item);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vue.use( Vuex );

// import dir from './modules/dir.js';
var store = new _vuex2.default.Store({
  // modules in Vuex are just like reducers in Redux
  modules: {
    tip: __webpack_require__(23).default,

    dir: __webpack_require__(24).default,

    signup: __webpack_require__(25).default,
    user: _user2.default,

    cart: _cart2.default,
    items: _items2.default,
    focus: __webpack_require__(26).default,

    item: _item2.default,
    _search: __webpack_require__(27).default
  },
  actions: {
    init: function init(ctx) {
      ctx.dispatch('initCart');
    }
  },
  mutations: {}
});

exports.default = store;

/*
state = {
  dir: {
    root: '',
    api: '',
    img: '',
  },
  user: {
    name: ''
  },
  items: [{
    id: '',
    price: 5000,
  }],
  cart: [{
    id: '111',
    name: 'iPhone 7',
    price: 4000,
    quantity: 1,
    checked: false
  }],
  orders: [],
  mask: {
    show: false
  }
}
 */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = window.Vuex;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(17)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js??ref--2-3!./common.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js??ref--2-3!./common.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var state = {
  inited: false,
  state: 'resolved',
  items: []
};

var actions = {
  initCart: function initCart(ctx) {
    if (ctx.state.inited === false) {
      ctx.dispatch('fetchCart');
    };
  },
  fetchCart: function fetchCart(ctx) {
    fetch('/api/cart/', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors"
    }).then(function (res) {
      if (res.status === 200) {
        res.json().then(function (items) {
          if (!Array.isArray(items)) {
            items = [items];
          };
          items.forEach(function (a) {
            a.quantity = 1;
            a.checked = false;
          });
          ctx.commit('INIT_CART');
          ctx.commit('FETCH_CART', items);
        });
      } else {
        console.log(res.json());
      }
    }).catch(function (err) {
      console.log(err);
    });
  },
  removeItemFromCart: function removeItemFromCart(ctx, i) {
    fetch('/api/cart/', {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({ id: ctx.state.items[i].id })
    }).then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        console.log(res.json());
      }
    }).then(function (items) {
      ctx.commit('REMOVE_FROM_CART', i);
    }).catch(function (err) {
      console.log(err);
    });
  }
};

var mutations = {
  INIT_CART: function INIT_CART(state) {
    state.inited = true;
  },
  FETCH_CART: function FETCH_CART(state, items) {
    var _state$items;

    state.items.length = 0;
    (_state$items = state.items).push.apply(_state$items, _toConsumableArray(items));
  },

  REMOVE_FROM_CART: function REMOVE_FROM_CART(state, i) {
    state.items.splice(i, 1);
  },

  ADD_TO_CART: function ADD_TO_CART(state) {
    state.items.push({});
  },


  CART_PLUS: function CART_PLUS(state, i) {
    state.items[i].quantity++;
  },
  CART_MINUS: function CART_MINUS(state, i) {
    if (state.items[i].quantity > 1) {
      state.items[i].quantity--;
    }
  },
  LOGOUT: function LOGOUT(state) {
    state.items = [];
  }
};

exports.default = { state: state, actions: actions, mutations: mutations };

/***/ }),

/***/ 2:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      fetch('' + rootState.dir.api + state.db + '/items' + (query ? query : ''), {
        credentials: 'include',
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
      }).then(function (data) {
        var items = data.data.items;
        if (!Array.isArray(items)) {
          items = [items];
        };
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
      console.log(state);
      fetch('' + ctx.rootState.dir.api + ctx.state.db + '/items/patch', {
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

      fetch('' + ctx.rootState.dir.api + ctx.state.db + '/items/', {
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
      fetch('' + ctx.rootState.dir.api + ctx.state.db + '/items/', {
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
            ctx.dispatch('tip/show', { msg: 'Item created!' }, { root: true });
          });
        } else {
          ctx.dispatch('tip/show', { msg: 'Failed to create item!' }, { root: true });
          res.json.then(function (echo) {
            ctx.dispatch('tip/show', { msg: echo.msg }, { root: true });
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

      fetch('' + rootState.dir.api + state.db + '/items/' + id, {
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
            dispatch('tip/show', { msg: 'Field updated!' }, { root: true });
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
      fetch('' + rootState.dir.api + state.db + '/items/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(ids)
      }).then(function (res) {
        if (res.status === 204) {
          commit('DELETE_ITEMS');
          dispatch('tip/show', { msg: 'Item deleted!' }, { root: true });
        } else {
          res.json().then(function (data) {
            console.warn(data.msg);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteItemsChecked: function deleteItemsChecked(ctx) {
      var ids = [];
      ctx.state.items.forEach(function (a) {
        if (a._checked) {
          ids.push(a.id);
        }
      });
      ctx.dispatch('deleteItems', ids);
    },
    changeDB: function changeDB(_ref7, db) {
      var commit = _ref7.commit,
          dispatch = _ref7.dispatch;

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
      Object.assign(state.items[state.beingEditted], JSON.parse(patch_json));
    },
    DELETE_ITEMS: function DELETE_ITEMS(state) {
      var i = state.items.length - 1;
      while (i >= 0) {
        if (state.items[i]._checked === true) {
          state.items.splice(i, 1);
        };
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var state = {
  state: 'pending',
  show: false,
  inCart: false,
  content: {
    id: '--',
    class_: '--',
    brand: '--',
    name: '--'
  }
};

var actions = {
  fetchItem: function fetchItem(ctx, id) {
    // console.log(id)
    fetch(ctx.rootState.dir.api + '/items/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      if (res.status === 200) {
        res.json().then(function (body) {
          ctx.commit('FETCH_ITEM', body.data.item);
        });
      } else {
        ctx.commit('FETCH_ITEM_FAILED');
      }
    }).catch(function (err) {
      console.log(err);
    });
  },
  addToCart: function addToCart(ctx, item_id) {
    if (ctx.rootState.user.loggedIn === false) {
      location.href = dir.signin;
    } else if (ctx.state.inCart === false) {
      fetch(dir.api + '/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ id: item_id })
      }).then(function (res) {
        if (res.status === 200) {
          res.json().then(function (item) {
            ctx.commit('ADD_TO_CART');
          });
        } else {
          // return Promise.reject(res.json())
        }
      }).catch(function (err) {
        console.log(err);
      });
    };
  }
};

var mutations = {
  FETCH_ITEM: function FETCH_ITEM(state, item) {
    for (var key in item) {
      if (key !== 'checked') {
        state.content[key] = item[key];
      }
    }
    state.state = 'resolved';
  },
  FETCH_ITEM_FAILED: function FETCH_ITEM_FAILED(state) {
    state.state = 'failed';
  },
  ADD_TO_CART: function ADD_TO_CART(state) {
    state.inCart = true;
  },

  EDIT_ITEM_VALUE: function EDIT_ITEM_VALUE(state, _ref) {
    var key = _ref.key,
        val = _ref.val;

    state.content[key] = val;
  },
  // EDIT_ITEM: function(state) {
  //   state.show = true;
  // },
  CLOSE_ITEM: function CLOSE_ITEM(state) {
    state.show = false;
  }
};

exports.default = { state: state, actions: actions, mutations: mutations };

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  namespaced: true,
  state: {
    inited: false,
    loggedIn: false,
    state: '',
    name: ''
  },
  actions: {
    fetchUser: function fetchUser(ctx) {
      if (ctx.state.inited === false) {
        fetch('/api/user/', {
          credentials: 'include',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: "cors"
        }).then(function (res) {
          if (res.status === 200) {
            return res.json().then(function (data) {
              if (data.id) {
                ctx.commit('LOGIN', data);
              } else {}
            });
          } else {
            return;
          }
        }).catch(function (err) {
          console.log(err);
        });
      };
    },
    login: function login(ctx, user) {
      ctx.commit('LOGIN_PENDING');
      fetch('/api/login/', {
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: user
      }).then(function (res) {
        if (res.status === 200) {
          return res.json().then(function (data) {
            location.href = ctx.rootState.dir.index;
            ctx.commit('LOGIN', user);
          });
        } else {
          return ctx.commit('LOGIN_FAILED');
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
        mode: "cors"
      }).then(function (res) {
        if (res.status === 200) {
          return res.json();
        } else {
          return;
        }
      }).then(function (data) {
        if (data.state === 'successful') {
          ctx.commit('LOGOUT');
        };
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    LOGIN_PENDING: function LOGIN_PENDING(state) {
      state.state = 'pending';
    },
    LOGIN_FAILED: function LOGIN_FAILED(state, a, b) {
      state.state = 'failed';
      console.log(arguments);
    },
    LOGIN: function LOGIN(state, user) {
      state.inited = true;
      state.loggedIn = true;
      state.name = user.name;
      state.state = 'resolved';
    },
    LOGOUT: function LOGOUT(state) {
      state.loggedIn = false;
      state.name = '';
    }
  }
};

/***/ }),

/***/ 23:
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _root;

if (/^http/.test(location.href)) {
  _root = location.origin + '/time';
} else {
  _root = location.href.replace(/time\/.+/, 'time');
}

var state = {
  host: location.host,
  root: _root,
  img: _root + '/../img/time',
  // img: '//github.com/403177368/img/blob/master/time/',
  //api: _root+'/../api/time',
  api: location.origin + '/api',

  admin: _root + '/admin.html',

  index: _root + '/index.html',
  signin: _root + '/signin.html',
  cart: _root + '/cart.html',
  item: _root + '/item.html',
  search: _root + '/search.html'
};

exports.default = { state: state };

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  form: {
    mobile: {
      val: '',
      state: '',
      info: ''
    },
    password: {
      val: '',
      state: '',
      info: ''
    },
    password2: {
      val: '',
      state: '',
      info: ''
    },
    verif: {
      val: '',
      state: '',
      info: ''
    },
    agreed: false
  }
};

var actions = {
  checkMobile: function checkMobile(ctx, mobile) {
    fetch('/api/checkMobile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({ mobile: mobile })
    }).then(function (res) {
      if (res.status === 200) {
        return res.json();
      } else {
        return;
      }
    }).then(function (data) {
      ctx.commit('CHECK_MOBILE', {
        mobile: mobile,
        green: !data.state
      });
    }).catch(function (err) {
      console.log(err);
    });
  },
  signup: function signup(ctx, payload) {
    var form = ctx.state.form;
    if (form.mobile.state === 'success' && form.password.state === 'success' && form.password2.state === 'success' && form.verif.state === 'success' && form.agreed === true) {} else {}
  }
};

var mutations = {
  SIGNUP_FOCUS: function SIGNUP_FOCUS(state, str) {
    state.form[str].state = 'active';
    state.form[str].info = '';
  },
  CHECK_MOBILE: function CHECK_MOBILE(state, _ref) {
    var mobile = _ref.mobile,
        green = _ref.green;

    state.form.mobile.val = mobile;
    if (mobile === '') {
      state.form.mobile.state = '';
    } else if (!/^1[3|4|5|8]\d{9}$/.test(mobile)) {
      state.form.mobile.state = 'error';
      state.form.mobile.info = '手机号格式不正确';
    } else {
      if (green === false) {
        state.form.mobile.state = 'error';
        state.form.mobile.info = '该手机号已被注册';
      } else {
        state.form.mobile.state = 'success';
      }
    }
  },
  CHECK_PASSWORD: function CHECK_PASSWORD(state, password) {
    state.form.password.val = password;
    if (/^\w{6,20}$/.test(password)) {
      state.form.password.state = 'success';
    } else if (password === '') {
      state.form.password.state = '';
    } else {
      state.form.password.state = 'error';
      state.form.password.info = '密码格式不正确';
    }
  },
  CHECK_PASSWORD2: function CHECK_PASSWORD2(state, password2) {
    state.form.password2.val = password2;
    if (/^\w{6,20}$/.test(password2) && state.form.password.val === password2) {
      state.form.password2.state = 'success';
    } else if (state.password === '' && password2 === '') {
      state.form.password2.state = '';
    } else {
      state.form.password2.state = 'error';
      state.form.password2.info = '两次输入的密码不一致';
    }
  },
  CHECK_VERIF: function CHECK_VERIF(state, verif) {
    state.form.verif.val = verif;
    if (verif) {
      state.form.verif.state = 'success';
    } else {
      state.form.verif.state = 'error';
    }
  },
  CHECK_AGREE: function CHECK_AGREE(state) {
    state.form.agreed = !state.form.agreed;
  },
  SIGNUP: function SIGNUP(state, user) {
    for (var key in state) {
      state[key] = user[key];
    }
  }
};

exports.default = { state: state, actions: actions, mutations: mutations };

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    state: 'uninitialized',
    items: []
  },
  actions: {
    init: function init(ctx) {
      if (ctx.state.inited === false) {
        ctx.dispatch('fetchFocus');
      }
    },
    fetchFocus: function fetchFocus(ctx, query) {
      fetch(ctx.rootState.dir.api + '/lowdb/focus/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors"
      }).then(function (res) {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log(res.json());
        }
      }).then(function (items) {
        ctx.commit('INIT');
        ctx.commit('FETCH_FOCUS', items);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    INIT: function INIT(state) {
      state.inited = true;
    },
    FETCH_FOCUS: function FETCH_FOCUS(state, items) {
      var _state$items;

      state.state = 'resolved';
      state.items.length = 0;
      (_state$items = state.items).push.apply(_state$items, _toConsumableArray(items));
    }
  }
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  state: {
    classes: {
      current: -1,
      items: ['数码产品', '服装', '玩具']
    },
    brands: {
      current: -1,
      items: ['Apple', 'Huawei']
    }
  },
  actions: {
    searchItems: function searchItems(ctx, pl) {
      ctx.commit('SEARCH_ITEMS', pl);
      ctx.dispatch('items/fetchItems');
    },
    searchItemsByBrand: function searchItemsByBrand(ctx, i) {
      ctx.commit('SEARCH_ITEMS', {
        key: 'brands',
        i: i
      });
      ctx.dispatch('items/fetchItems', '?brand=' + ctx.state.brands.items[i]);
    }
  },
  mutations: {
    SEARCH_ITEMS: function SEARCH_ITEMS(state, pl) {
      state[pl.key].current = pl.i;
    }
  }
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "a:link {\n  text-decoration: none;\n}\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nul,\nli {\n  list-style: none;\n}\nimg {\n  display: block;\n}\nbutton {\n  display: block;\n  border: none;\n  cursor: pointer;\n}\nbody {\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1';\n}\n[v-cloak] {\n  display: none;\n}\n/**/\n.wrapper {\n  width: 100%;\n  min-width: 1000px;\n}\n.container {\n  width: 1000px;\n  margin: auto;\n}\n.row {\n  width: 1000px;\n  margin: auto;\n}\n.clear {\n  clear: both;\n}\n/**/\n#main {\n  z-index: -1;\n}\n.banner {\n  height: 150px;\n  overflow: hidden;\n}\n.banner > ul > a {\n  width: 180px;\n  height: 95px;\n  display: block;\n  border: 1px solid lightgrey;\n}\n.banner a:visited {\n  color: black;\n}\n.banner .label {\n  width: 42px;\n  height: 20px;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: white;\n  background: #FF5A44;\n}\n.banner p {\n  color: black;\n}\n.LINE {\n  height: 4px;\n  background: linear-gradient(to right, #D2AB1A, #337FAB);\n}\n", ""]);

// exports


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-1773a3ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1d65f15c", content, true);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".TopbarBlack[data-v-1773a3ba]{position:relative;width:100%;height:60px}.TopbarBlack .fixed[data-v-1773a3ba]{position:fixed;left:0;top:0;box-sizing:border-box;width:100%;height:60px;padding-left:20px;background:#192332;z-index:999}.TopbarBlack .fixed a[data-v-1773a3ba]{display:block;float:left;margin-right:20px;font-size:14px;line-height:60px;color:#c8c8c8}.TopbarBlack .fixed a[data-v-1773a3ba]:visited{color:#c8c8c8}.TopbarBlack .fixed a[data-v-1773a3ba]:hover{color:#fff}", ""]);

// exports


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(16)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		items: {
			default: function () {
				return [{}];
			}
		}
	}
});

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "TopbarBlack"
  }, [_c('div', {
    staticClass: "fixed"
  }, [_c('a', {
    staticClass: "li",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("MadSoap")]), _c('a', {
    staticClass: "li",
    attrs: {
      "href": "./index.html"
    }
  }, [_vm._v("Home")]), _c('a', {
    staticClass: "li",
    attrs: {
      "href": "./test.html"
    }
  }, [_vm._v("Test")]), _c('a', {
    staticClass: "li",
    attrs: {
      "href": "./admin.html"
    }
  }, [_vm._v("Admin")]), _c('a', {
    staticClass: "li",
    attrs: {
      "href": "./admer.html"
    }
  }, [_vm._v("Admer")])])])
}]}

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(601);


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#root',
	components: {
		App: __webpack_require__(602)
	},
	template: '<app></app>'
});

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(603)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(605),
  /* template */
  __webpack_require__(611),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("13a7f9da", content, true);

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".line{width:400px;line-height:60px;background:orange;text-align:center}.line img{display:inline-block;height:40px;vertical-align:middle;margin-left:20px}", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		TopbarBlack: __webpack_require__(37),
		NavbarWeifeng: __webpack_require__(606)
	}
});

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(607)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(609),
  /* template */
  __webpack_require__(610),
  /* scopeId */
  "data-v-6e075505",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("66d29648", content, true);

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".NavbarWeifeng[data-v-6e075505]{width:100%;min-width:1000px;background:#3d455f}.NavbarWeifeng .container__[data-v-6e075505]{width:1000px;margin:auto;background:#3d455f}.NavbarWeifeng .container__ .tabs[data-v-6e075505]{padding:10px 0;overflow:hidden}.NavbarWeifeng .container__ .tabs li[data-v-6e075505]{width:83px;height:28px;line-height:28px;text-align:center;float:left;font-size:15px;color:#fff;cursor:pointer}.NavbarWeifeng .container__ .tabs li[data-v-6e075505]:hover{color:#0cf}.NavbarWeifeng .container__ .bar-wrapper[data-v-6e075505]{position:relative;height:3px}.NavbarWeifeng .container__ .bar[data-v-6e075505]{position:absolute;left:0;top:0;width:83px;height:3px;background:#0cf;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}", ""]);

// exports


/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		items: {
			default: function () {
				return [{
					name: '首页'
				}, {
					name: '新手'
				}, {
					name: '游戏'
				}, {
					name: '新闻'
				}, {
					name: '锋科技'
				}, {
					name: '锋观点'
				}, {
					name: '评测'
				}, {
					name: '论坛'
				}, {
					name: '威锋源'
				}, {
					name: '威锋游戏'
				}, {
					name: '威锋商城'
				}, {
					name: '兔兔助手'
				}];
			}
		}
	},
	data: function () {
		return {
			current: 0
		};
	},
	methods: {
		mouseenter: function (e, i) {
			this.current = i;
		},
		mouseleave: function () {
			this.current = 0;
		},
		haha: function (e) {
			console.log(e);
		}
	}
});

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "NavbarWeifeng"
  }, [_c('div', {
    staticClass: "container__"
  }, [_c('ul', {
    staticClass: "tabs",
    on: {
      "mouseleave": _vm.mouseleave
    }
  }, _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      on: {
        "mouseenter": function($event) {
          _vm.mouseenter($event, i)
        }
      }
    }, [_vm._v(_vm._s(a.name))])
  })), _c('div', {
    staticClass: "bar-wrapper"
  }, [_c('div', {
    staticClass: "bar",
    style: ('transform:translate3d(' + (_vm.current * 83) + 'px,0,0);')
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "App"
  }, [_c('topbar-black'), _c('navbar-weifeng'), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "line"
  }, [_vm._v("\n\t\t\tThis is a line very very very long line for test. Really, I mean it. Just for test. "), _c('i', {
    staticClass: "fa fa-close"
  }), _c('img', {
    attrs: {
      "src": "http://img.cyol.com/img/news/attachement/jpg/site2/20170420/IMG484d7ea271d544266946594.jpg"
    }
  })])])
}]}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ })

/******/ });