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
/******/ 		2: 0
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
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
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
/******/ 	__webpack_require__.p = "/farm/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(108);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(63);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(128);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(132);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(63);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(82);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(5);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(19);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(58);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
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
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60);
var defined = __webpack_require__(43);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(59);
var enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(43);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(57);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(18);

__webpack_require__(193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function (_React$Component) {
  (0, _inherits3.default)(Navbar, _React$Component);

  function Navbar() {
    (0, _classCallCheck3.default)(this, Navbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'NAVBAR' },
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/home', className: this.props.name === 'home' ? 'active' : '' },
            _react2.default.createElement(
              'div',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-home' })
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u9996\u9875'
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category', className: this.props.name === 'category' ? 'active' : '' },
            _react2.default.createElement(
              'div',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-th' })
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5206\u7C7B'
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/shopping_cart', className: this.props.name === 'shoppingCart' ? 'active' : '' },
            _react2.default.createElement(
              'div',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-shopping-cart' })
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u8D2D\u7269\u8F66'
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/member', className: this.props.name === 'mine' ? 'active' : '' },
            _react2.default.createElement(
              'div',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-user' })
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u6211'
            )
          )
        )
      );
    }
  }]);
  return Navbar;
}(_react2.default.Component);

exports.Navbar = Navbar;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Topbar = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(206);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topbar = function (_React$Component) {
  (0, _inherits3.default)(Topbar, _React$Component);

  function Topbar(props) {
    (0, _classCallCheck3.default)(this, Topbar);
    return (0, _possibleConstructorReturn3.default)(this, (Topbar.__proto__ || (0, _getPrototypeOf2.default)(Topbar)).call(this, props));
  }

  (0, _createClass3.default)(Topbar, [{
    key: "back",
    value: function back() {
      history.go(-1);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "Topbar" },
        React.createElement(
          "div",
          { className: "content__" },
          React.createElement(
            "div",
            { className: "c-icon" },
            React.createElement("i", { className: "fa fa-angle-left", onClick: this.back.bind(this) })
          ),
          React.createElement(
            "div",
            { className: "c-text" },
            this.props.name
          )
        )
      );
    }
  }]);
  return Topbar;
}(React.Component);

Topbar.defaultProps = {
  name: ''
};

exports.Topbar = Topbar;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
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
/* 43 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(113)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(64)(String, 'String', function (iterated) {
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(115);
var enumBugKeys = __webpack_require__(48);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(66).appendChild(iframe);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(37);
var wksExt = __webpack_require__(52);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(34);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(12);
var normalizeHeaderName = __webpack_require__(163);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(83);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(83);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(162)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(142);

var Redux = _interopRequireWildcard(_redux);

var _revuex = __webpack_require__(143);

var _revuex2 = _interopRequireDefault(_revuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = _revuex2.default.createStore({
  redux: Redux,
  state: {
    inited: false,
    what: 'I d know'
  },
  modules: {
    app: __webpack_require__(149).default,
    shoppingCart: __webpack_require__(88).default
  }
});

console.log(store);

console.log(store.getState());

// var map = {
//   user,
//   shoppingCart,
//   notice,
//   mask,
//   homeSwiper,
//   items,
//   item
// };

// var rootReducer = combineReducers(map);

// console.log(rootReducer)
// function enhancer({ dispatch, getState }) {
//   return next => action => {

//   }
// }

// store
// const store = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk)
//   /*,enhancer*/
// );
// console.debug('Redux: store created.', store);

exports.default = store;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(97)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13);
var core = __webpack_require__(5);
var fails = __webpack_require__(23);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(111);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(119);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(65);
var hide = __webpack_require__(19);
var has = __webpack_require__(21);
var Iterators = __webpack_require__(29);
var $iterCreate = __webpack_require__(114);
var setToStringTag = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(10)('iterator');
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
var global = __webpack_require__(9);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(29);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(59);
var hiddenKeys = __webpack_require__(48).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(36);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(58);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
function log(what) {
  console.debug(what);
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = use;
exports.getRedux = getRedux;
var redux;

function use(ref) {
  redux = ref;
}

function getRedux() {
  if (!redux) {
    // throw new Error('[revuex] Must register redux first!');
  }
  return redux;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(27);
var TAG = __webpack_require__(10)('toStringTag');
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(29);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(73);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(29);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(16);
var aFunction = __webpack_require__(34);
var SPECIES = __webpack_require__(10)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var invoke = __webpack_require__(154);
var html = __webpack_require__(66);
var cel = __webpack_require__(41);
var global = __webpack_require__(9);
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
  if (__webpack_require__(27)(process) == 'process') {
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
/* 79 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var isObject = __webpack_require__(20);
var newPromiseCapability = __webpack_require__(54);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var settle = __webpack_require__(164);
var buildURL = __webpack_require__(166);
var parseHeaders = __webpack_require__(167);
var isURLSameOrigin = __webpack_require__(168);
var createError = __webpack_require__(84);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(169);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(170);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(165);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Showcase = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRouter = __webpack_require__(18);

__webpack_require__(197);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Showcase = function (_React$Component) {
  (0, _inherits3.default)(Showcase, _React$Component);

  function Showcase() {
    (0, _classCallCheck3.default)(this, Showcase);
    return (0, _possibleConstructorReturn3.default)(this, (Showcase.__proto__ || (0, _getPrototypeOf2.default)(Showcase)).apply(this, arguments));
  }

  (0, _createClass3.default)(Showcase, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Showcase' },
        this.props.items.map(function (a) {
          return React.createElement(
            _reactRouter.Link,
            { className: 'item-2',
              to: '/item/' + a.id },
            React.createElement('img', { src: a.thumb }),
            React.createElement(
              'div',
              { className: 'tag' },
              React.createElement(
                'p',
                { className: 'name' },
                a.name
              ),
              React.createElement(
                'p',
                { className: 'price' },
                '\uFFE5',
                a.price.toFixed(2)
              )
            )
          );
        })
      );
    }
  }]);
  return Showcase;
}(React.Component);

Showcase.defaultProps = {
  items: []
};

exports.Showcase = Showcase;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(40);

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = __webpack_require__(184);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(30);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(31);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    items: []
  },
  actions: {
    INIT: function INIT(state, action) {
      return (0, _extends3.default)({}, state, {
        items: action.shoppingCart
      });
    },
    SET_ITEMS: function SET_ITEMS(state, action) {
      return (0, _extends3.default)({}, state, {
        items: action.shoppingCart
      });
    },
    ADD_TO_CART: function ADD_TO_CART(state, action) {
      var canPush = true;
      state.items.forEach(function (a) {
        if (a.id === action.item.id) {
          canPush = false;
        }
      });
      if (canPush) {
        return {
          items: [].concat((0, _toConsumableArray3.default)(state.items), [action.item])
        };
      } else {
        return state;
      }
    },
    CHECK_THIS: function CHECK_THIS(state, action) {
      return (0, _extends3.default)({}, state, {
        items: state.items.map(function (a, i) {
          if (i === action.i) {
            return (0, _extends3.default)({}, a, {
              selected: a.selected ? false : true
            });
          } else {
            return a;
          }
        })
      });
    }
  },
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      items: []
    };
    var action = arguments[1];


    var newState = {
      items: [].concat((0, _toConsumableArray3.default)(state.items))
    };

    switch (action.type) {
      case 'PLUS':
        newState.items[action.i].quantity++;
        return newState;
      case 'MINUS':
        if (state.items[action.i].quantity > 1) {
          newState.items[action.i].quantity--;
        }
        return newState;
      case 'CHECK_THIS':
        return {
          items: state.items.map(function (a, i) {
            if (i === action.i) {
              var new_item = {};
              for (var key in a) {
                new_item[key] = a[key];
                new_item.selected = a.selected ? false : true;
              }
              return new_item;
            } else {
              return a;
            }
          })
        };
      case 'CHECK_ALL':
        var allChecked = function () {
          for (var i = 0; i < state.items.length; i++) {
            if (!state.items[i].selected) {
              return false;
            }
          }
          return true;
        }();
        if (allChecked) {
          newState.items.forEach(function (a) {
            a.selected = false;
          });
        } else {
          newState.items.forEach(function (a) {
            a.selected = true;
          });
        }
        return newState;
      case 'REMOVE':
        var _newState = {
          items: []
        };
        newState.items.forEach(function (a) {
          if (!a.selected) {
            _newState.items.push(a);
          }
        });
        return _newState;
      case 'CLEAR':
        return {
          items: []
        };
      default:
        return state;
    }
  },

  creators: {
    init: function init(_ref) {
      var dispatch = _ref.dispatch;

      new _promise2.default(function (resolve, reject) {
        var shoppingCart = [];
        if (sessionStorage.shoppingCart) {
          shoppingCart = JSON.parse(sessionStorage.shoppingCart);
        }
        resolve(shoppingCart);
      }).then(function (items) {
        dispatch('INIT', {
          shoppingCart: items
        });
      });
    },
    remove: function remove(_ref2) {
      var rootState = _ref2.rootState;
    }
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swiper = undefined;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

__webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swiper = function (_Component) {
  (0, _inherits3.default)(Swiper, _Component);

  function Swiper(props) {
    (0, _classCallCheck3.default)(this, Swiper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this, props));

    var self = _this;
    _this.width = 0;
    _this.Swiper = null;
    _this.train = null;
    _this.dots = null;
    _this.$trainOffset = 0;
    _this.$currentOne = 0;

    _this.X0 = null;
    _this.X1 = null;
    _this.Y1 = null;
    _this.Y2 = null;

    _this.cycle = false;
    _this.switching = false;
    _this.moveCount = 0;
    _this.canScroll = false;
    // console.log(this.props)

    _this.state = {
      items: _this.getNewItems(_this.props.items),
      trainStyle: {},
      itemStyle: {},
      currentDot: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Swiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // console.log(this.props)
      var self = this;
      this.train = this.refs.train;

      self.setWidth();
      window.addEventListener('resize', function () {
        self.setWidth();
      }, 50);
      if (this.props.autoplay === true) {
        setInterval(function () {
          if (_this2.cycle === false && _this2.switching === false) {
            _this2.cycle = true;
            _this2.toNext();
          }
        }, self.props.interval);
      }
      // console.log(this.$currentOne)
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.$trainOffset = 0;
      this.$currentOne = 0;
      this.train.style.transition = '0s';
      this.train.style.webkitTransition = '0s';
      this.train.style.transform = 'translate3d(0,0,0)';
      this.train.style.webkitTransform = 'translate3d(0,0,0)';
      this.setState({
        items: this.getNewItems(newProps.items)
      });
    }
  }, {
    key: 'getNewItems',
    value: function getNewItems(items) {
      var newItems = JSON.parse((0, _stringify2.default)(items));
      newItems.forEach(function (a, i) {
        a._id = i;
      });
      return newItems;
    }
  }, {
    key: 'getCurrentDot',
    value: function getCurrentDot(self) {
      if (self.$currentOne > self.props.items.length - 1) {
        return self.$currentOne - self.props.items.length;
      } else {
        return self.$currentOne;
      }
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var self = this;
      var swiper = self.refs.Swiper;
      self.width = Number(document.defaultView.getComputedStyle(swiper).width.replace(/px/, ''));
      self.$trainOffset = -self.width * self.$currentOne;
      self.train.style.transition = '0s';
      self.train.style.webkitTransition = '0s';
      self.train.style.transform = 'translate3d(' + self.$trainOffset + ',0,0)';
      self.train.style.webkitTransform = 'translate3d(' + self.$trainOffset + ',0,0)';
    }
  }, {
    key: 'updatePagi',
    value: function updatePagi() {}
  }, {
    key: 'toNext',
    value: function toNext() {
      var _this3 = this;

      var self = this;
      if (!this.switching) {
        this.switching = true;
        if (self.$currentOne < self.state.items.length - 1) {
          self.$currentOne++;
          self.$trainOffset = -self.$currentOne * self.width;
        } else {
          if (self.props.carousel) {
            self.$currentOne = 0;
            self.$trainOffset = -self.state.items.length * self.width;
          } else if (self.props.autoplay) {
            self.$currentOne = 0;
            self.$trainOffset = 0;
          } else {
            self.$trainOffset = -self.$currentOne * self.width;
          }
        }
        self.setState({ currentDot: self.$currentOne });
        self.train.style.transition = self.props.duration + 'ms';
        self.train.style.webkitTransition = self.props.duration + 'ms';
        self.train.style.transform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        self.train.style.webkitTransform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        setTimeout(function () {
          self.train.style.transition = '0s';
          self.train.style.webkitTransition = '0s';
          if (self.props.carousel && self.$currentOne === 0) {
            self.$trainOffset = 0;
            self.train.style.transform = 'translate3d(0,0,0)';
            self.train.style.webkitTransform = 'translate3d(0,0,0)';
          }
          _this3.switching = false;
          _this3.cycle = false;
        }, self.props.duration);
      }
    }
  }, {
    key: 'toPrev',
    value: function toPrev() {
      var _this4 = this;

      var self = this;
      if (!this.switching) {
        this.switching = true;
        if (self.$currentOne > 0) {
          self.$currentOne--;
          self.$trainOffset = -self.$currentOne * self.width;
        } else {
          if (self.props.carousel) {
            self.$currentOne = self.state.items.length - 1;
            self.$trainOffset = self.width;
          } else {
            self.$trainOffset = 0;
          }
        }
        self.setState({ currentDot: self.$currentOne });
        self.train.style.transition = self.props.duration + 'ms';
        self.train.style.webkitTransition = self.props.duration + 'ms';
        self.train.style.transform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        self.train.style.webkitTransform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        setTimeout(function () {
          self.train.style.transition = '0s';
          self.train.style.webkitTransition = '0s';
          if (self.props.carousel && self.$currentOne === self.state.items.length - 1) {
            self.$trainOffset = -(self.state.items.length - 1) * self.width;
            self.train.style.transform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
            self.train.style.webkitTransform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
          }
          _this4.switching = false;
          _this4.cycle = false;
        }, self.props.duration);
      }
    }
  }, {
    key: 'toItem',
    value: function toItem(i) {
      var _this5 = this;

      var self = this;
      if (!this.switching) {
        this.switching = true;
        this.$currentOne = i;
        this.$trainOffset = -i * this.width;
        self.setState({ currentDot: self.$currentOne });
        self.train.style.transition = self.props.duration + 'ms';
        self.train.style.webkitTransition = self.props.duration + 'ms';
        self.train.style.transform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        self.train.style.webkitTransform = 'translate3d(' + self.$trainOffset + 'px,0,0)';
        setTimeout(function () {
          self.train.style.transition = '0s';
          self.train.style.webkitTransition = '0s';
          _this5.switching = false;
          _this5.cycle = false;
        }, self.props.duration);
      }
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      if (!this.cycle) {
        this.cycle = true;
        this.canScroll = false;
        this.moveCount = 0;
        this.X0 = this.X1 = e.changedTouches[0].pageX;
        this.Y1 = e.changedTouches[0].pageY;
      }
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      if (this.cycle && !this.switching) {
        this.moveCount++;
        if (!this.canScroll) {
          if (this.moveCount === 1) {
            this.X2 = e.changedTouches[0].pageX;
            this.Y2 = e.changedTouches[0].pageY;
            var distanceY = this.Y2 - this.Y1;
            var distanceX = this.X2 - this.X1;
            if (Math.abs(distanceY) > Math.abs(distanceX)) {
              this.canScroll = true;
            } else {
              e.preventDefault();
            }
          }

          if (!this.canScroll && this.props.sticky) {
            this.X2 = e.changedTouches[0].pageX;
            var distance = this.X2 - this.X1;
            this.$trainOffset += distance;
            this.train.style.transition = '0s';
            this.train.style.webkitTransition = '0s';
            this.train.style.transform = 'translate3d(' + this.$trainOffset + 'px,0,0)';
            this.train.style.webkitTransform = 'translate3d(' + this.$trainOffset + 'px,0,0)';
            this.X1 = this.X2;
          }
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(e) {
      if (this.cycle) {
        if (!this.canScroll) {
          this.X2 = e.changedTouches[0].pageX;
          var distance = this.X2 - this.X0;
          if (distance > 0) {
            this.toPrev();
          } else if (distance < 0) {
            this.toNext();
          } else {
            this.switching = false;
            this.cycle = false;
          }
        } else {
          this.switching = false;
          this.cycle = false;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var items = this.state.items;
      return React.createElement(
        'div',
        { className: 'Swiper', ref: 'Swiper',
          style: this.props.style,
          onTouchStart: this.handleTouchStart.bind(this),
          onTouchMove: this.handleTouchMove.bind(this),
          onTouchEnd: this.handleTouchEnd.bind(this) },
        React.createElement(
          'ul',
          { className: 'train',
            style: { marginLeft: self.props.carousel ? '-100%' : '0' },
            ref: 'train' },
          this.props.carousel && items.length > 0 ? React.createElement('a', { className: 'item', style: {
              backgroundImage: items[items.length - 1].background ? 'url(' + items[items.length - 1].background + ')' : ''
            } }) : null,
          items.map(function (a, i) {
            return React.createElement(
              'a',
              { className: 'item', href: a.href || '#/shopping_cart', key: i, style: {
                  backgroundImage: a.background ? 'url(' + a.background + ')' : ''
                } },
              a.img ? React.createElement('img', { src: a.img }) : null
            );
          }),
          this.props.carousel && items.length > 0 ? React.createElement('a', { className: 'item', style: {
              backgroundImage: items[0].background ? 'url(' + items[0].background + ')' : ''
            } }) : null
        ),
        React.createElement(
          'div',
          { className: 'pagi' },
          React.createElement(
            'ul',
            { className: 'pagination', ref: 'pagination' },
            this.props.pagi ? this.props.items.map(function (elem, i) {
              return React.createElement('li', { className: i === self.state.currentDot ? 'dot active' : 'dot',
                onClick: self.toItem.bind(self, i) });
            }) : null
          )
        )
      );
    }
  }]);
  return Swiper;
}(_react.Component);

Swiper.defaultProps = {
  items: [],
  duration: 300,
  interval: 3000,
  carousel: true,
  sticky: true,
  autoplay: true,
  pagi: true
};

exports.Swiper = Swiper;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(92);

var _reactDom = __webpack_require__(103);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(104);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (true) {
  _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById('app'));
} else {
  var AppContainer = require('react-hot-loader').AppContainer;

  var render = function render(App) {
    _reactDom2.default.render(React.createElement(
      AppContainer,
      null,
      React.createElement(App, null)
    ), document.getElementById('app'));
  };

  render(_App2.default);

  if (module.hot) {
    module.hot.accept('./App.js', function () {
      // re-render App when code is changed
      render(require('./App.js').default);
    });
  }
} // import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';
// var DevTools = createDevTools(
//  <DockMonitor 
//    toggleVisibilityKey='ctrl-h'
//    changePositionKey='ctrl-q'>
//    <LogMonitor />
//  </DockMonitor>
// );
// const enhancer = compose(
//  DevTools.instrument()
// );

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(93);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(102);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!_assign2.default) {
  Object.assign = function (dest, src) {
    for (var key in src) {
      dest[key] = src[key];
    }
    return dest;
  };
  console.warn('Object.assign polyfilled.');
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(96) });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(36);
var toObject = __webpack_require__(28);
var IObject = __webpack_require__(60);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function () {
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(44);
var toAbsoluteIndex = __webpack_require__(98);
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {

  var $html = document.querySelector('html');
  var $body = document.querySelector('body');
  var $screen = document.createElement('div');

  $screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
  $body.insertBefore($screen, $body.firstChild);

  function setRem() {
    $screen.style.display = 'block';
    var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
    var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
    $screen.style.display = 'none';
    $html.style.fontSize = 100 * w / 720 + 'px';
    // document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
  }
  setRem();
  window.addEventListener('resize', setRem);
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./common.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./common.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul {\n  list-style: none;\n}\nimg {\n  display: block;\n}\na:link {\n  color: ;\n  text-decoration: none;\n}\n.c-topbar {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 1rem;\n  padding: 0 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n  font-size: 0.3rem;\n  line-height: 1rem;\n  box-shadow: inset 0 1px 0 #fff, 0 1px 10px rgba(0, 0, 0, 0.15);\n}\n.c-topbar .c-icon {\n  float: left;\n  margin-right: 0.2rem;\n}\n.c-topbar .c-icon i {\n  font-size: 0.5rem;\n  line-height: 1rem;\n}\n.c-topbar .c-text {\n  float: left;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n.container {\n  background: orange;\n  overflow: hidden;\n  display: none;\n}\n.clearfix {\n  clear: both;\n}\nbody {\n  background: #ECEBEB;\n}\n/* Media Queries */\n@media (-webkit-min-device-pixel-ratio: 2) {\n}\n.wrapper {\n  width: 7.2rem;\n}\n.shown {\n  display: block!important;\n}\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log(location);

var $$production = false;

window.DIR = {
  img: '../../img/farm'
};

exports.$$production = $$production;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _reactRouter = __webpack_require__(18);

var _App = __webpack_require__(105);

var _RouteIndex = __webpack_require__(189);

var _Home = __webpack_require__(190);

var _Member = __webpack_require__(202);

var _Orders = __webpack_require__(205);

var _Signin = __webpack_require__(208);

var _Signup = __webpack_require__(211);

var _Category = __webpack_require__(214);

var _DIManagement = __webpack_require__(217);

var _DIAdd = __webpack_require__(220);

var _Test = __webpack_require__(223);

var _reactRedux = __webpack_require__(14);

var _store = __webpack_require__(56);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Item } from 'views/_item/Item.jsx';
var ShoppingCart = function ShoppingCart(nextState, cb) {
  __webpack_require__.e/* require.ensure */(1).then((function (require) {
    cb(null, __webpack_require__(224).ShoppingCart);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};


var MyApp = function MyApp() {
  return React.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    React.createElement(
      _reactRouter.Router,
      { history: _reactRouter.hashHistory },
      React.createElement(
        _reactRouter.Route,
        { path: '/', component: _App.App },
        React.createElement(_reactRouter.IndexRedirect, { to: '/index' }),
        React.createElement(
          _reactRouter.Route,
          { path: '/index', component: _RouteIndex.RouteIndex },
          React.createElement(_reactRouter.IndexRoute, { component: _Home.Home }),
          React.createElement(_reactRouter.Route, { path: '/home', component: _Home.Home }),
          React.createElement(_reactRouter.Route, { path: '/category', component: _Category.Category }),
          React.createElement(_reactRouter.Route, { path: '/shopping_cart', getComponent: ShoppingCart }),
          React.createElement(_reactRouter.Route, { path: '/member', component: _Member.Member })
        ),
        React.createElement(_reactRouter.Route, { path: '/settings' }),
        React.createElement(_reactRouter.Route, { path: '/item/:id', getComponent: function getComponent(nextState, cb) {
            __webpack_require__.e/* require.ensure */(0).then((function (require) {
              cb(null, __webpack_require__(225).Item);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          } }),
        React.createElement(_reactRouter.Route, { path: '/signin', component: _Signin.Signin }),
        React.createElement(_reactRouter.Route, { path: '/signup', component: _Signup.Signup }),
        React.createElement(
          _reactRouter.Route,
          { path: '/orders', component: _Orders.Orders },
          React.createElement(_reactRouter.IndexRoute, null),
          React.createElement(_reactRouter.Route, { path: 'unpaid' }),
          React.createElement(_reactRouter.Route, { path: 'cancelled' })
        ),
        React.createElement(_reactRouter.Route, { path: '/msgs' }),
        React.createElement(_reactRouter.Route, { path: '/pocket' }),
        React.createElement(_reactRouter.Route, { path: '/di_management', component: _DIManagement.DIManagement }),
        React.createElement(_reactRouter.Route, { path: '/di_add', component: _DIAdd.DIAdd }),
        React.createElement(_reactRouter.Route, { path: '/haha' }),
        React.createElement(
          _reactRouter.Route,
          { path: '/test', component: _Test.Test },
          React.createElement(_reactRouter.IndexRoute, { component: _Home.Home }),
          React.createElement(_reactRouter.Route, { path: 'test', component: _Test.Test })
        )
      )
    )
  );
};

exports.default = MyApp;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _log = __webpack_require__(71);

var _Mask = __webpack_require__(135);

var _Notice = __webpack_require__(138);

var _NoticePretty = __webpack_require__(141);

var _store = __webpack_require__(56);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    (0, _log.log)('<App/> constructing');
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _store2.default.invoke('app/init');
      _store2.default.invoke('app/user/fetchUser');
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _log.log)('<App/> rendering.');
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_Mask.Mask, null),
        _react2.default.createElement(_Notice.Notice, null),
        _react2.default.createElement(_NoticePretty.NoticePretty, null),
        this.props.children
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.App = App = (0, _reactRedux.connect)(function (state) {
  return {
    mask: state.mask
  };
})(App);

exports.App = App;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(5).Object.getPrototypeOf;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(28);
var $getPrototypeOf = __webpack_require__(61);

__webpack_require__(62)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(67);
module.exports = __webpack_require__(52).f('iterator');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var defined = __webpack_require__(43);
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(51);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(117);
var step = __webpack_require__(118);
var Iterators = __webpack_require__(29);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(64)(Array, 'Array', function (iterated, kind) {
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
/* 117 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
__webpack_require__(70);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(17);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(65);
var META = __webpack_require__(122).KEY;
var $fails = __webpack_require__(23);
var shared = __webpack_require__(47);
var setToStringTag = __webpack_require__(38);
var uid = __webpack_require__(35);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(52);
var wksDefine = __webpack_require__(53);
var enumKeys = __webpack_require__(123);
var isArray = __webpack_require__(124);
var anObject = __webpack_require__(16);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(51);
var gOPNExt = __webpack_require__(125);
var $GOPD = __webpack_require__(69);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(68).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(36).f = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(37)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(20);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(23)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(36);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(24);
var gOPN = __webpack_require__(68).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('observable');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
module.exports = __webpack_require__(5).Object.setPrototypeOf;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(13);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(131).set });


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(20);
var anObject = __webpack_require__(16);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(22)(Function.call, __webpack_require__(69).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(51) });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(136);

var _reactRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import store from 'store/store.js';

var Mask = function (_React$Component) {
  (0, _inherits3.default)(Mask, _React$Component);

  function Mask(props) {
    (0, _classCallCheck3.default)(this, Mask);
    return (0, _possibleConstructorReturn3.default)(this, (Mask.__proto__ || (0, _getPrototypeOf2.default)(Mask)).call(this, props));
  }

  (0, _createClass3.default)(Mask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'cancel',
    value: function cancel() {
      this.props.dispatch('app/mask/CLOSE');
    }
  }, {
    key: 'confirm',
    value: function confirm() {
      this.props.dispatch('shoppingCart/REMOVE');
      this.props.dispatch('app/mask/CLOSE');
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        'div',
        { className: 'Mask', style: { display: this.props.mask.show ? 'table' : 'none' } },
        _react2.default.createElement(
          'div',
          { className: '__container' },
          _react2.default.createElement(
            'div',
            { className: '_panel' },
            _react2.default.createElement(
              'div',
              { className: '_header' },
              '\u786E\u8BA4\u5220\u9664'
            ),
            _react2.default.createElement(
              'p',
              { className: '_text' },
              this.props.mask.text
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn cancel', onClick: this.cancel.bind(this) },
              '\u53D6\u6D88'
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn confirm', onClick: this.confirm.bind(this) },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);
  return Mask;
}(_react2.default.Component);

Mask.defaultProps = {};

exports.Mask = Mask = (0, _reactRedux.connect)(function (state) {
  return {
    mask: state.app.mask
  };
})(Mask);

exports.Mask = Mask;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./Mask.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./Mask.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Mask {\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.Mask .__container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.Mask .__container ._panel {\n  position: relative;\n  margin: auto;\n  width: 5.4rem;\n  padding: 0 0.3rem 0.3rem 0.3rem;\n  border-radius: 0.05rem;\n  background: white;\n  overflow: hidden;\n}\n.Mask .__container ._panel ._header {\n  box-sizing: border-box;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n  text-align: center;\n}\n.Mask .__container ._panel ._text {\n  padding: 0.2rem 0;\n  font-size: 0.3rem;\n}\n.Mask .__container ._panel .btn {\n  box-sizing: border-box;\n  width: 2.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  border-radius: 0.05rem;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.Mask .__container ._panel .cancel {\n  float: left;\n  border: 1px solid #0f88eb;\n  color: #0f88eb;\n}\n.Mask .__container ._panel .confirm {\n  float: right;\n  background: #0f88eb;\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notice = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(139);

var _reactRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notice = function (_React$Component) {
  (0, _inherits3.default)(Notice, _React$Component);

  function Notice() {
    (0, _classCallCheck3.default)(this, Notice);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notice.__proto__ || (0, _getPrototypeOf2.default)(Notice)).call(this));

    _this.state = {
      show: false
    };
    return _this;
  }

  (0, _createClass3.default)(Notice, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.notice.tick !== this.props.notice.tick) {
        this.showOnce();
      }
    }
  }, {
    key: 'showOnce',
    value: function showOnce() {
      var _this2 = this;

      var self = this;
      this.setState({
        show: true
      });
      setTimeout(function () {
        _this2.setState({
          show: false
        });
      }, 1200);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        'p',
        { className: 'NOTICE',
          style: {
            display: this.state.show === true ? 'block' : 'none'
          } },
        self.props.notice.text
      );
    }
  }]);
  return Notice;
}(_react2.default.Component);

Notice.defaultProps = {
  notice: {}
};

exports.Notice = Notice = (0, _reactRedux.connect)(function (state) {
  return {
    notice: state.app.notice
  };
})(Notice);

exports.Notice = Notice;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./Notice.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./Notice.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".NOTICE {\n  position: fixed;\n  left: 2.1rem;\n  top: 40%;\n  margin: auto;\n  box-sizing: border-box;\n  width: 3rem;\n  padding: 0.3rem;\n  line-height: 0.4rem;\n  border-radius: 0.1rem;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  font-size: 0.24rem;\n  z-index: 1000;\n}\n", ""]);

// exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoticePretty = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoticePretty = function (_React$Component) {
  (0, _inherits3.default)(NoticePretty, _React$Component);

  function NoticePretty() {
    (0, _classCallCheck3.default)(this, NoticePretty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NoticePretty.__proto__ || (0, _getPrototypeOf2.default)(NoticePretty)).call(this));

    _this.style = {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '1.5rem',
      background: 'blue',
      opacity: '0.6',
      color: 'white',
      textAlign: 'center',
      fontSize: '0.4rem',
      lineHeight: '1.5rem',
      transition: 'transform 0.3s',
      zIndex: '1000',
      transform: 'translate3d(0,-100%,0)'
    };
    return _this;
  }

  (0, _createClass3.default)(NoticePretty, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      console.debug('<NoticePretty/> newProps');
      if (newProps.notice.text === '您输入的用户名或密码有误！') {
        this.refs.p.style.background = 'red';
      } else {
        this.refs.p.style.background = 'blue';
      }
      if (newProps.notice.tick !== this.props.notice.tick) {
        this.showOnce();
      }
    }
  }, {
    key: 'showOnce',
    value: function showOnce() {
      var _this2 = this;

      this.refs.p.style.transform = 'translate3d(0,0,0)';
      setTimeout(function () {
        _this2.refs.p.style.transform = 'translate3d(0,-100%,0)';
      }, 600);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return React.createElement(
        'p',
        { style: this.style, ref: 'p' },
        self.props.notice.text
      );
    }
  }]);
  return NoticePretty;
}(React.Component);

exports.NoticePretty = NoticePretty = (0, _reactRedux.connect)(function (state) {
  return {
    notice: state.app.notice
  };
})(NoticePretty);

exports.NoticePretty = NoticePretty;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(72);

var _Store = __webpack_require__(144);

// Organize your react/redux application in the vuex way.

/*
API Reference
  createStore(options): Store
    Arguments
  	Returns
  Store
	ensure(path: Array<string>)
  	dispatch(path: string, payload)
*/

/**
 * Create a store.
 * @returns
 */
function createStore(options) {
  return new _Store.Store(options);
}

var Revuex = {
  use: _functions.use,
  createStore: createStore
};

exports.default = Revuex;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _functions = __webpack_require__(72);

var _Module = __webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = exports.Store = function () {
  function Store(options) {
    (0, _classCallCheck3.default)(this, Store);

    if (!options.redux) {
      throw new Error('[revuex] \'Redux\' must be assigned to options.redux');
    }
    this.redux = options.redux;
    this.modulesMap = {};
    this._creatorsMap = {};
    this._rootModule = new _Module.Module([], options, this);
    this._reduxStore = this.redux.createStore(this._rootModule.reducer, undefined);
    this.getState = this._reduxStore.getState;
    this.subscribe = this._reduxStore.subscribe;
    // Object.assign(this, this._reduxStore);
  }
  // Invoke an action-creator


  (0, _createClass3.default)(Store, [{
    key: 'invoke',
    value: function invoke(path, payload) {
      var self = this;
      console.log('[revuex] Invoking action creator: ' + path);
      if (!this._creatorsMap[path]) {
        throw new Error('[revuex] Unknown action creator: ' + path + '.');
      }
      var arr = path.split('/');
      arr.pop();
      var modulePath = arr.join('/');
      var ctx = {
        // dispatch: store.dispatch,
        invoke: function invoke(key, payload, options) {
          if (options && options.root) {
            return self.invoke(key, payload);
          } else {
            return self.invoke(modulePath + '/' + key, payload);
          }
        },

        // dispatch function passed to a creator:
        dispatch: function dispatch(key, payload, options) {
          // In case that payload is null:
          var action = payload || {};
          if (options && options.root) {
            action.type = key;
            return self._reduxStore.dispatch(action);
          } else {
            // Complete the action type:
            // Make this action a global action:
            // console.log('\n' + modulePath);
            action.type = (modulePath === '' ? '' : modulePath + '/') + key;
            return self._reduxStore.dispatch(action);
          }
        }
      };
      Object.defineProperty(ctx, 'rootState', {
        enumerable: true,
        configurable: true,
        // writable: elKey?true:false,,
        get: function get() {
          return self._reduxStore.getState();
        },
        set: function set() {
          throw new Error('[revuex] The state must not be mutated.');
        }
      });
      Object.defineProperty(ctx, 'state', {
        enumerable: true,
        configurable: true,
        // writable: elKey?true:false,,
        get: function get() {
          var state = self._reduxStore.getState();
          arr.forEach(function (a) {
            state = state[a];
          });
          return state;
        },
        set: function set() {
          throw new Error('[revuex] The state must not be mutated.');
        }
      });

      return self._creatorsMap[path](ctx, payload);
    }
    // Dispatch an action

  }, {
    key: 'dispatch',
    value: function dispatch(path) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var action = payload;
      action.type = path;
      this._reduxStore.dispatch(action);
    }
    // Ensure the given module is installed to the given path

  }, {
    key: 'ensure',
    value: function ensure(pathArr, rawModule) {
      this.registerModule(pathArr, rawModule);
    }
    // Register a module to the given path

  }, {
    key: 'registerModule',
    value: function registerModule(pathArr, rawModule) {
      if (!Array.isArray(pathArr)) {
        throw new Error('[revuex] Expect pathArr to be an array but get ' + pathArr.toString());
      }
      var path = pathArr.join('/');
      if (!this.modulesMap[path]) {
        console.log('[revuex] Registering module ' + path);
        var module = new _Module.Module(pathArr, rawModule, this);
        // Update this module's ancestors' internalReducer and reducer:
        while (module.parent) {
          module.parent.updateReducer();
          module = module.parent;
        }
        // var nextReducer = getNextReducer(rootModule);
        // store.replaceReducer(rootModule.reducer);
        // console.log(this.modulesMap);
      }
    }
  }]);
  return Store;
}();

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Module = undefined;

var _keys = __webpack_require__(146);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(30);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { getRedux } from './functions.js';

var Module = exports.Module = function () {
  function Module(path, rawModule, store) {
    (0, _classCallCheck3.default)(this, Module);

    this.store = store;
    if (!Array.isArray(path)) {
      throw new Error('[revuex] Expect module path to be an array.');
    }

    if (path.length === 0) {
      this.isRoot = true;
      this.name = '@@root';
      this.path = '@@root';
    } else {
      this.isRoot = false;
      this.name = path[path.length - 1];
      if (path.length === 1) {
        this.path = path[0];
      } else {
        this.path = path.join('/');
      }
    }

    // Put this module into modulesMap.
    store.modulesMap[this.path] = this;
    // console.log(this.path)

    // Set parent for this module:
    var parentPath;
    var parentModule;
    if (path.length === 0) {
      parentModule = null;
    } else if (path.length === 1) {
      parentModule = store.modulesMap['@@root'];
    } else {
      var arr = path.slice();
      arr.pop();
      parentPath = arr.join('/');
      parentModule = store.modulesMap[parentPath];
    }

    this.parent = parentModule;
    if (parentModule) {
      parentModule.modules[this.name] = this;
      // console.log(parentModule);
      // if (parentModule.childrenKeys.indexOf(this.name) === -1) {
      //   parentModule.childrenKeys.push(this.name);
      // }
    }

    // Create and set children for this module:
    this.modules = {};
    // this.childrenKeys = [];
    if (rawModule.modules) {
      for (var key in rawModule.modules) {
        // Create the children modules:
        var childPath = path.slice();
        childPath.push(key);
        this.modules[key] = new Module(childPath, rawModule.modules[key], store);
      }
    }

    // this.state = rawModule.state || {};

    this.initialState = rawModule.state || {};
    this.indexState;
    this.childrenState;
    // Create internalReducer and wrapperReducer for this module:
    this.initReducer(rawModule);

    // Register the creators:
    this.creators = rawModule.creators || {};
    for (var _key in this.creators) {
      if (this.isRoot) {
        (0, _extends3.default)(store._creatorsMap, this.creators);
      } else {
        store._creatorsMap[this.path + '/' + _key] = this.creators[_key];
      }
    }

    this.handlers = rawModule.actions || {};
  }
  // Children modules


  (0, _createClass3.default)(Module, [{
    key: 'initReducer',
    value: function initReducer(rawModule) {
      var self = this;
      // this.indexReducer =
      //   rawModule.reducer ||
      //   function(state, action) {
      //     if (!state) {
      //       state = self.state;
      //     }
      //     return state;
      //   };
      // this.childrenReducer = function(state, action) {
      //   return state;
      // };
      this.updateReducer();
    }
    // internalReducer and reducer of this module must be updated when a new child module is installed.

  }, {
    key: 'updateReducer',
    value: function updateReducer() {
      var self = this;
      self.indexReducer = function (state, action) {
        if (!self.handlers[action.type]) {
          return state;
        } else {
          return self.handlers[action.type](state, action);
        }
      };

      var childrenKeys = (0, _keys2.default)(self.modules) || [];
      if (childrenKeys.length > 0) {
        var reducers = {};
        for (var key in this.modules) {
          reducers[key] = this.modules[key].reducer;
        }
        // Combine wrapper reducers of the children into a children reducer for this module:
        self.childrenReducer = self.store.redux.combineReducers(reducers);
      } else {
        self.childrenReducer = function (state, action) {
          return state;
        };
      }

      self.reducer = function (state, action) {
        if (self.isRoot) {
          console.log('\nReducing: ' + action.type);
        }
        if (state === void 0) {
          state = self.initialState;
        }

        if (action.type) {
          var indexState;
          var childrenState;
          if (state) {
            if (state.toString() !== '[object Object]') {
              throw new Error('[revuex] State of a module must be a plain object!');
            } else {
              // Split the state into indexState and childrenState
              indexState = {};
              childrenState = {};
              for (var _key2 in state) {
                if (self.modules[_key2]) {
                  childrenState[_key2] = state[_key2];
                } else {
                  indexState[_key2] = state[_key2];
                }
              }
            }
          }

          // If path of this module is matched in action.type:
          var rawType = action.type;
          var arr = action.type.split('/');
          var name = arr.pop();
          var path = arr.join('/') || '@@root';
          var nextState;

          // if (path === 'item') {
          //   console.log(self.path + ' indexState', indexState);
          // }
          // console.log('path: ', path);
          // console.log('reducing: ' + action.type);

          if (path === self.path) {
            console.log('[revuex] path \'' + path + '\' matched action: ' + action.type);
            // Remove the prefix:
            action.type = name;
            indexState = self.indexReducer(indexState, action);
            action.type = rawType;
            childrenState = self.childrenReducer(childrenState, action);

            nextState = self.mergeState(indexState, childrenState);

            // return (self.state = nextState);
            return nextState;
          } else {
            // Make sure not to change the state.
            indexState = self.indexReducer(indexState, action);

            childrenState = self.childrenReducer(childrenState, action);

            nextState = self.mergeState(indexState, childrenState);
            // return (self.state = nextState);
            return nextState;
            // throw new Error('[revuex] Invalid action type: ' + action.type + '.');
          }
        } else {
          throw new Error('[revuex] Action needs a type field.');
        }
      };
    }
  }, {
    key: 'mergeState',
    value: function mergeState(indexState, childrenState) {
      var state = {};
      for (var key in indexState) {
        if (this.modules[key]) {
          throw new Error('[revuex] Duplicated state key "' + key + '" in module "' + this.path + '".\'');
        }
        state[key] = indexState[key];
      }
      for (var _key3 in childrenState) {
        state[_key3] = childrenState[_key3];
      }
      return state;
    }
  }]);
  return Module;
}();

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(26);

__webpack_require__(62)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(40);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(31);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    inited: false
  },
  modules: {
    user: __webpack_require__(178).default,
    mask: __webpack_require__(181).default,
    notice: __webpack_require__(182).default,
    items: __webpack_require__(183).default
  },
  creators: {
    init: function init(_ref) {
      var invoke = _ref.invoke,
          dispatch = _ref.dispatch;

      _promise2.default.all([invoke('app/user/fetchUser', null, { root: true }),
      // invoke('shoppingCart/init', null, { root: true }),
      invoke('app/items/init', null, { root: true })]).then(function (res) {});
    }
  }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(50);
__webpack_require__(67);
__webpack_require__(151);
__webpack_require__(158);
__webpack_require__(159);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var global = __webpack_require__(9);
var ctx = __webpack_require__(22);
var classof = __webpack_require__(73);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(20);
var aFunction = __webpack_require__(34);
var anInstance = __webpack_require__(152);
var forOf = __webpack_require__(153);
var speciesConstructor = __webpack_require__(77);
var task = __webpack_require__(78).set;
var microtask = __webpack_require__(155)();
var newPromiseCapabilityModule = __webpack_require__(54);
var perform = __webpack_require__(79);
var promiseResolve = __webpack_require__(80);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(156)($Promise.prototype, {
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
__webpack_require__(38)($Promise, PROMISE);
__webpack_require__(157)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(81)(function (iter) {
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
/* 152 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var call = __webpack_require__(74);
var isArrayIter = __webpack_require__(75);
var anObject = __webpack_require__(16);
var toLength = __webpack_require__(44);
var getIterFn = __webpack_require__(76);
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
/* 154 */
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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var macrotask = __webpack_require__(78).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(27)(process) == 'process';

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(19);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var core = __webpack_require__(5);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(17);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(13);
var core = __webpack_require__(5);
var global = __webpack_require__(9);
var speciesConstructor = __webpack_require__(77);
var promiseResolve = __webpack_require__(80);

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(54);
var perform = __webpack_require__(79);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var bind = __webpack_require__(82);
var Axios = __webpack_require__(161);
var defaults = __webpack_require__(55);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(86);
axios.CancelToken = __webpack_require__(176);
axios.isCancel = __webpack_require__(85);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(177);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(55);
var utils = __webpack_require__(12);
var InterceptorManager = __webpack_require__(171);
var dispatchRequest = __webpack_require__(172);
var isAbsoluteURL = __webpack_require__(174);
var combineURLs = __webpack_require__(175);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(84);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var transformData = __webpack_require__(173);
var isCancel = __webpack_require__(85);
var defaults = __webpack_require__(55);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(86);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(30);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(31);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(18);

var _hmacSha = __webpack_require__(180);

var _hmacSha2 = _interopRequireDefault(_hmacSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    loggedIn: false,
    id: '',
    name: ''
  },
  actions: {
    SET_USER: function SET_USER(state, payload) {
      return payload.user;
    },
    LOGIN: function LOGIN(state, action) {
      return action.user;
    },
    LOGOUT: function LOGOUT(state, payload) {
      return (0, _extends3.default)({}, state, {
        loggedIn: false,
        id: '',
        name: ''
      });
    }
  },
  creators: {
    fetchUser: function fetchUser(_ref) {
      var dispatch = _ref.dispatch;

      (0, _axios2.default)({
        url: '/api/user',
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.data.errno === 0) {
          return dispatch('SET_USER', {
            user: {
              loggedIn: true,
              id: res.data.data.id,
              name: res.data.data.name
            }
          });
        }
      }).then(function () {
        // hashHistory.push('/member');
      });
    },
    login: function login(_ref2, _ref3) {
      var dispatch = _ref2.dispatch;
      var name = _ref3.name,
          password = _ref3.password;

      fetch('/api/user/login/', {
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: (0, _stringify2.default)({
          name: name,
          password: _hmacSha2.default.HmacSHA256(password, 'rabbit').toString(_hmacSha2.default.enc.Hex)
        })
      }).then(function (res) {
        return res.json();
      }).then(function (obj) {
        if (obj.errno === 0) {
          // sessionStorage.user = '{"id":"15911111111"}';

          dispatch('SET_USER', {
            user: {
              loggedIn: true,
              id: obj.data.id,
              name: obj.data.name
            }
          });
          dispatch('app/notice/ALERT', {
            text: '登录成功！'
          }, {
            root: true
          });
          _reactRouter.hashHistory.replace('/member');
        } else {
          return dispatch('app/notice/ALERT', {
            text: obj.msg
          }, {
            root: true
          });
        }
      }).catch(function (err) {
        dispatch('app/notice/ALERT', {
          text: e.message
        }, {
          root: true
        });
      });
    },
    login_as_guest: function login_as_guest(_ref4) {
      var rootState = _ref4.rootState,
          state = _ref4.state,
          invoke = _ref4.invoke;

      // console.log(state);
      // rootState = 111;
      // console.log(rootState)
      invoke('login', {
        name: 'soap',
        password: '1'
      });
    },
    logout: function logout(_ref5) {
      var dispatch = _ref5.dispatch;

      (0, _axios2.default)({
        url: '/api/user/logout',
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.data.errno === 0) {
          // delete sessionStorage.user;
          dispatch('LOGOUT');
          dispatch('app/notice/ALERT', {
            text: '注销成功！'
          }, {
            root: true
          });
          dispatch('cart/CLEAR', null, { root: true });
          _reactRouter.hashHistory.push('/signin');
        }
      });
    }
  }
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (h, s) {
  var f = {},
      g = f.lib = {},
      q = function q() {},
      m = g.Base = { extend: function extend(a) {
      q.prototype = this;var c = new q();a && c.mixIn(a);c.hasOwnProperty("init") || (c.init = function () {
        c.$super.init.apply(this, arguments);
      });c.init.prototype = c;c.$super = this;return c;
    }, create: function create() {
      var a = this.extend();a.init.apply(a, arguments);return a;
    }, init: function init() {}, mixIn: function mixIn(a) {
      for (var c in a) {
        a.hasOwnProperty(c) && (this[c] = a[c]);
      }a.hasOwnProperty("toString") && (this.toString = a.toString);
    }, clone: function clone() {
      return this.init.prototype.extend(this);
    } },
      r = g.WordArray = m.extend({ init: function init(a, c) {
      a = this.words = a || [];this.sigBytes = c != s ? c : 4 * a.length;
    }, toString: function toString(a) {
      return (a || k).stringify(this);
    }, concat: function concat(a) {
      var c = this.words,
          d = a.words,
          b = this.sigBytes;a = a.sigBytes;this.clamp();if (b % 4) for (var e = 0; e < a; e++) {
        c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
      } else if (65535 < d.length) for (e = 0; e < a; e += 4) {
        c[b + e >>> 2] = d[e >>> 2];
      } else c.push.apply(c, d);this.sigBytes += a;return this;
    }, clamp: function clamp() {
      var a = this.words,
          c = this.sigBytes;a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);a.length = h.ceil(c / 4);
    }, clone: function clone() {
      var a = m.clone.call(this);a.words = this.words.slice(0);return a;
    }, random: function random(a) {
      for (var c = [], d = 0; d < a; d += 4) {
        c.push(4294967296 * h.random() | 0);
      }return new r.init(c, a);
    } }),
      l = f.enc = {},
      k = l.Hex = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
        var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;d.push((e >>> 4).toString(16));d.push((e & 15).toString(16));
      }return d.join("");
    }, parse: function parse(a) {
      for (var c = a.length, d = [], b = 0; b < c; b += 2) {
        d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);
      }return new r.init(d, c / 2);
    } },
      n = l.Latin1 = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
        d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
      }return d.join("");
    }, parse: function parse(a) {
      for (var c = a.length, d = [], b = 0; b < c; b++) {
        d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
      }return new r.init(d, c);
    } },
      j = l.Utf8 = { stringify: function stringify(a) {
      try {
        return decodeURIComponent(escape(n.stringify(a)));
      } catch (c) {
        throw Error("Malformed UTF-8 data");
      }
    }, parse: function parse(a) {
      return n.parse(unescape(encodeURIComponent(a)));
    } },
      u = g.BufferedBlockAlgorithm = m.extend({ reset: function reset() {
      this._data = new r.init();this._nDataBytes = 0;
    }, _append: function _append(a) {
      "string" == typeof a && (a = j.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
    }, _process: function _process(a) {
      var c = this._data,
          d = c.words,
          b = c.sigBytes,
          e = this.blockSize,
          f = b / (4 * e),
          f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);a = f * e;b = h.min(4 * a, b);if (a) {
        for (var g = 0; g < a; g += e) {
          this._doProcessBlock(d, g);
        }g = d.splice(0, a);c.sigBytes -= b;
      }return new r.init(g, b);
    }, clone: function clone() {
      var a = m.clone.call(this);
      a._data = this._data.clone();return a;
    }, _minBufferSize: 0 });g.Hasher = u.extend({ cfg: m.extend(), init: function init(a) {
      this.cfg = this.cfg.extend(a);this.reset();
    }, reset: function reset() {
      u.reset.call(this);this._doReset();
    }, update: function update(a) {
      this._append(a);this._process();return this;
    }, finalize: function finalize(a) {
      a && this._append(a);return this._doFinalize();
    }, blockSize: 16, _createHelper: function _createHelper(a) {
      return function (c, d) {
        return new a.init(d).finalize(c);
      };
    }, _createHmacHelper: function _createHmacHelper(a) {
      return function (c, d) {
        return new t.HMAC.init(a, d).finalize(c);
      };
    } });var t = f.algo = {};return f;
}(Math);
(function (h) {
  for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function l(a) {
    return 4294967296 * (a - (a | 0)) | 0;
  }, k = 2, n = 0; 64 > n;) {
    var j;a: {
      j = k;for (var u = h.sqrt(j), t = 2; t <= u; t++) {
        if (!(j % t)) {
          j = !1;break a;
        }
      }j = !0;
    }j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);k++;
  }var a = [],
      f = f.SHA256 = q.extend({ _doReset: function _doReset() {
      this._hash = new g.init(m.slice(0));
    }, _doProcessBlock: function _doProcessBlock(c, d) {
      for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
        if (16 > p) a[p] = c[d + p] | 0;else {
          var k = a[p - 15],
              l = a[p - 2];a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
        }k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);q = n;n = m;m = h;h = j + k | 0;j = g;g = f;f = e;e = k + l | 0;
      }b[0] = b[0] + e | 0;b[1] = b[1] + f | 0;b[2] = b[2] + g | 0;b[3] = b[3] + j | 0;b[4] = b[4] + h | 0;b[5] = b[5] + m | 0;b[6] = b[6] + n | 0;b[7] = b[7] + q | 0;
    }, _doFinalize: function _doFinalize() {
      var a = this._data,
          d = a.words,
          b = 8 * this._nDataBytes,
          e = 8 * a.sigBytes;
      d[e >>> 5] |= 128 << 24 - e % 32;d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);d[(e + 64 >>> 9 << 4) + 15] = b;a.sigBytes = 4 * d.length;this._process();return this._hash;
    }, clone: function clone() {
      var a = q.clone.call(this);a._hash = this._hash.clone();return a;
    } });s.SHA256 = q._createHelper(f);s.HmacSHA256 = q._createHmacHelper(f);
})(Math);
(function () {
  var h = CryptoJS,
      s = h.enc.Utf8;h.algo.HMAC = h.lib.Base.extend({ init: function init(f, g) {
      f = this._hasher = new f.init();"string" == typeof g && (g = s.parse(g));var h = f.blockSize,
          m = 4 * h;g.sigBytes > m && (g = f.finalize(g));g.clamp();for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) {
        k[j] ^= 1549556828, n[j] ^= 909522486;
      }r.sigBytes = l.sigBytes = m;this.reset();
    }, reset: function reset() {
      var f = this._hasher;f.reset();f.update(this._iKey);
    }, update: function update(f) {
      this._hasher.update(f);return this;
    }, finalize: function finalize(f) {
      var g = this._hasher;f = g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f));
    } });
})();

exports.default = CryptoJS;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(30);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    show: false,
    text: ''
  },
  actions: {
    CONFIRM: function CONFIRM(state, _ref) {
      var text = _ref.text;

      return (0, _extends3.default)({}, state, {
        show: true,
        text: text
      });
    },
    CLOSE: function CLOSE(state) {
      return (0, _extends3.default)({}, state, {
        show: false,
        text: ''
      });
    }
  }
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  state: {
    tick: 0,
    text: ''
  },
  actions: {
    ALERT: function ALERT(state, _ref) {
      var text = _ref.text;

      return {
        tick: state.tick + 1,
        text: text
      };
    }
  }
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(40);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(31);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  state: {
    items: []
  },
  actions: {
    INIT: function INIT(state, _ref) {
      var items = _ref.items;

      return {
        items: items
      };
    }
  },
  creators: {
    init: function init(_ref2) {
      var dispatch = _ref2.dispatch;

      return new _promise2.default(function (resolve, reject) {
        // var items = require('./api_items.js').default;
        (0, _axios2.default)({
          url: '/api/sqlite/items/',
          // this is essential cause a fetch request is without cookie by default
          withCredentials: true,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }).then(function (res) {
          if (res.data.errno === 0) {
            // state[what].inited = true;
            // state[what].items.length = 0;
            // state[what].items.push(...res.data.items);
            dispatch('INIT', {
              items: res.data.data.items
            });
            resolve();
          }
        });
        // console.log(items)
        // resolve();
      });
    }
  }
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(185);

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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(187);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(22);
var $export = __webpack_require__(13);
var toObject = __webpack_require__(28);
var call = __webpack_require__(74);
var isArrayIter = __webpack_require__(75);
var toLength = __webpack_require__(44);
var createProperty = __webpack_require__(188);
var getIterFn = __webpack_require__(76);

$export($export.S + $export.F * !__webpack_require__(81)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteIndex = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _log = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouteIndex = exports.RouteIndex = function (_React$Component) {
  (0, _inherits3.default)(RouteIndex, _React$Component);

  function RouteIndex() {
    (0, _classCallCheck3.default)(this, RouteIndex);
    return (0, _possibleConstructorReturn3.default)(this, (RouteIndex.__proto__ || (0, _getPrototypeOf2.default)(RouteIndex)).call(this));
  }

  (0, _createClass3.default)(RouteIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        { className: 'RouteIndex' },
        this.props.children
      );
    }
  }]);
  return RouteIndex;
}(_react2.default.Component);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(191);

var _Navbar = __webpack_require__(32);

var _Swiper = __webpack_require__(89);

var _Showcase = __webpack_require__(87);

var _Showcase2 = __webpack_require__(199);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    var self = _this;
    console.log('<Home/> constructing');
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // window.scroll(0,0);
    }
  }, {
    key: 'back',
    value: function back() {
      // console.log(111)
      history.go(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'Home' },
        _react2.default.createElement(
          'div',
          { className: 'searchbar' },
          _react2.default.createElement(
            'div',
            { className: 'search' },
            _react2.default.createElement(
              'div',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-search' })
            ),
            _react2.default.createElement('input', { type: 'text', name: '', placeholder: '\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0' })
          )
        ),
        _react2.default.createElement(_Swiper.Swiper, {
          sticky: true,
          items: this.props.homeSwiper,
          style: { height: '4rem' } }),
        [0, 1, 2].map(function () {
          return _react2.default.createElement(_Showcase.Showcase, { items: _this2.props.items });
        }),
        _react2.default.createElement(
          'div',
          { className: 'block' },
          _react2.default.createElement(
            'div',
            { className: 'block-header' },
            _react2.default.createElement('i', { className: 'fa fa-heart-o' }),
            ' \u731C\u4F60\u559C\u6B22'
          ),
          _react2.default.createElement(_Showcase2.Showcase2, { items: this.props.items })
        ),
        _react2.default.createElement(_Navbar.Navbar, { name: 'home' })
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

Home.propTypes = {
  homeSwiper: _react2.default.PropTypes.array.isRequired,
  items: _react2.default.PropTypes.number.isRequired
};
Home.defaultProps = {
  homeSwiper: [{
    background: '/img/farm/index/banner_0.jpg?raw=true',
    href: '#/shopping_cart'
  }, {
    background: '/img/farm/index/banner_1.jpg?raw=true'
  }, {
    background: '/img/farm/index/banner_2.jpg?raw=true'
  }, {
    background: '/img/farm/index/banner_3.jpg?raw=true'
  }],
  items: []
};

exports.Home = Home = ReactRedux.connect(function (state) {
  return {
    // homeSwiper: state.homeSwiper,
    items: state.app.items.items
  };
})(Home);

exports.Home = Home;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/less-loader/index.js!./Home.less", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/postcss-loader/index.js!../../../../../../node_modules/less-loader/index.js!./Home.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Home {\n  background: #ECEBEB;\n}\n.Home .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.Home .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.Home .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.Home .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.Home .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.Home .block {\n  overflow: hidden;\n}\n.Home .block .block-header {\n  padding: 0.15rem 0;\n  font-size: 0.24rem;\n  color: #0f88eb;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Navbar.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Navbar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".NAVBAR {\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 1rem;\n}\n.NAVBAR .nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n  border-top: 1px solid #dfdfdf;\n  background: white;\n  overflow: hidden;\n}\n.NAVBAR .nav a {\n  position: relative;\n  width: 25%;\n  height: 1rem;\n  float: left;\n  color: black;\n  display: block;\n  color: #999999;\n}\n.NAVBAR .nav a .icon {\n  width: 100%;\n  font-size: 0.4rem;\n  line-height: 0.6rem;\n  text-align: center;\n}\n.NAVBAR .nav a p {\n  line-height: 0.4rem;\n  font-size: 0.2rem;\n  text-align: center;\n}\n.NAVBAR .nav a .line {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  background: lightgrey;\n}\n.NAVBAR .nav a:link {\n  color: #999999;\n}\n.NAVBAR .nav a:visited {\n  color: #999999;\n}\n.NAVBAR .nav a.active {\n  color: #0f88eb !important;\n}\n", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Swiper.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Swiper.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Swiper {\n  position: relative;\n  width: 100%;\n  height: 4.9rem;\n  overflow: hidden;\n}\n.Swiper .train {\n  width: 2000%;\n  height: 100%;\n}\n.Swiper .train .item {\n  display: block;\n  float: left;\n  width: 5%;\n  height: 100%;\n  background: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  overflow: hidden;\n}\n.Swiper .train .item img {\n  height: 100%;\n  margin: auto;\n  display: block;\n}\n.Swiper .pagi {\n  position: absolute;\n  left: 0;\n  top: 90%;\n  width: 100%;\n}\n.Swiper .pagination {\n  display: table;\n  margin: auto;\n}\n.Swiper .pagination .dot {\n  float: left;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin: 0 0.1rem 0 0.1rem;\n  border-radius: 1000px;\n  background: #999999;\n}\n.Swiper .pagination .dot.active {\n  background: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Showcase.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Showcase.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Showcase {\n  overflow: hidden;\n}\n.Showcase .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n}\n.Showcase .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.Showcase .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.Showcase .item-2 img {\n  width: 100%;\n  margin: auto;\n}\n.Showcase .item-2 .tag {\n  background: white;\n}\n.Showcase .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #3A3A3A;\n}\n.Showcase .item-2 .tag .price {\n  font-size: 0.22rem;\n  color: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Showcase2 = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactRouter = __webpack_require__(18);

__webpack_require__(200);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Showcase2 = function (_React$Component) {
  (0, _inherits3.default)(Showcase2, _React$Component);

  function Showcase2() {
    (0, _classCallCheck3.default)(this, Showcase2);
    return (0, _possibleConstructorReturn3.default)(this, (Showcase2.__proto__ || (0, _getPrototypeOf2.default)(Showcase2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Showcase2, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Showcase2' },
        this.props.items.map(function (item, i) {
          var href = '/item/' + item.id;
          // var src = DIR.img+'/items/'+item.id+'/t.jpg';
          var src = item.thumb;
          var style = {
            float: i % 2 === 0 ? 'left' : 'right'
          };
          return React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
              _reactRouter.Link,
              { to: href },
              React.createElement('img', { className: 'thumbnail', src: src }),
              React.createElement(
                'p',
                { className: 'name' },
                item.name
              ),
              React.createElement(
                'p',
                { className: 'price' },
                '\uFFE5',
                item.price.toFixed(2)
              )
            )
          );
        })
      );
    }
  }]);
  return Showcase2;
}(React.Component);

Showcase2.defaultProps = {
  items: []
};

exports.Showcase2 = Showcase2;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Showcase2.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Showcase2.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Showcase2 {\n  overflow: hidden;\n}\n.Showcase2 .item {\n  float: left;\n  width: 50%;\n  padding-bottom: 0.15rem;\n  background: white;\n  overflow: hidden;\n}\n.Showcase2 .item a {\n  display: block;\n  width: 80%;\n  margin: auto;\n}\n.Showcase2 .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.Showcase2 .item a .thumbnail {\n  width: 100%;\n  display: block;\n}\n.Showcase2 .item a p {\n  width: 100%;\n  font-size: .2rem;\n}\n.Showcase2 .item a .description {\n  color: grey;\n}\n.Showcase2 .item a .price {\n  color: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Member = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(203);

var _react = __webpack_require__(8);

var _reactRedux = __webpack_require__(14);

var _Navbar = __webpack_require__(32);

var _reactRouter = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Member = function (_Component) {
  (0, _inherits3.default)(Member, _Component);

  function Member() {
    (0, _classCallCheck3.default)(this, Member);
    return (0, _possibleConstructorReturn3.default)(this, (Member.__proto__ || (0, _getPrototypeOf2.default)(Member)).call(this));
    // console.log('<Member/> constructing');
  }

  (0, _createClass3.default)(Member, [{
    key: 'logout',
    value: function logout() {
      this.context.store.invoke('app/user/logout');
    }
  }, {
    key: 'to',
    value: function to(route) {
      this.props.history.push(route);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.user.loggedIn === false) {
        this.props.history.replace('/signin');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this);
    }
  }, {
    key: 'render',
    value: function render() {
      window.scroll(0, 0);
      return React.createElement(
        'div',
        { className: 'RouteMember' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'header' },
            React.createElement(
              'div',
              { className: 'outerRound' },
              React.createElement(
                'div',
                { className: 'innerRound' },
                React.createElement('img', { src: '/img/farm/avatar.png' })
              )
            ),
            React.createElement(
              'p',
              { className: 'account' },
              this.props.user.name
            )
          ),
          React.createElement(
            'div',
            { className: 'block' },
            React.createElement(
              'div',
              { className: 'row', onClick: this.to.bind(this, '/orders') },
              '\u5168\u90E8\u8BA2\u5355',
              React.createElement('i', { className: 'fa fa-angle-right' })
            )
          ),
          React.createElement(
            'div',
            { className: 'block' },
            React.createElement(
              'div',
              { className: 'row', onClick: this.to.bind(this, '/test') },
              '\u4FEE\u6539\u5BC6\u7801',
              React.createElement('i', { className: 'fa fa-angle-right' })
            ),
            React.createElement(
              'div',
              { className: 'row', onClick: this.to.bind(this, '/di_management') },
              '\u6536\u8D27\u5730\u5740\u7BA1\u7406',
              React.createElement('i', { className: 'fa fa-angle-right' })
            )
          ),
          React.createElement(
            'a',
            { className: 'logout', onClick: this.logout.bind(this) },
            '\u9000\u51FA\u767B\u5F55'
          )
        ),
        React.createElement(_Navbar.Navbar, { name: 'mine' })
      );
    }
  }]);
  return Member;
}(_react.Component);

Member.contextTypes = {
  store: _react.PropTypes.object
};

exports.Member = Member = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.app.user
  };
})(Member);

exports.Member = Member;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Member.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Member.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".RouteMember {\n  width: 100%;\n  background: #ECEBEB;\n}\n.RouteMember .header {\n  position: relative;\n  height: 3.60rem;\n  background: #0f88eb;\n  overflow: hidden;\n}\n.RouteMember .outerRound {\n  position: relative;\n  width: 1.80rem;\n  height: 1.80rem;\n  border-radius: 10rem;\n  margin: auto;\n  margin-top: 0.60rem;\n  background: rgba(255, 255, 255, 0.5);\n}\n.RouteMember .innerRound {\n  position: absolute;\n  left: 0.20rem;\n  top: 0.20rem;\n  width: 1.40rem;\n  height: 1.40rem;\n  border-radius: 10rem;\n  background: white;\n  opacity: 1;\n  overflow: hidden;\n}\n.RouteMember .innerRound img {\n  width: 100%;\n  height: 100%;\n}\n.RouteMember .account {\n  position: relative;\n  height: 0.30rem;\n  margin: auto;\n  margin-top: 0.20rem;\n  color: white;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.RouteMember .block {\n  margin-bottom: 0.2rem;\n  background: white;\n}\n.RouteMember .block .row {\n  box-sizing: border-box;\n  padding: 0.2rem;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n}\n.RouteMember .block .row i {\n  float: right;\n  font-size: 0.4rem;\n}\n.RouteMember .box1 {\n  position: relative;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.RouteMember .box a:link {\n  position: relative;\n  width: 6.40rem;\n  height: 0.60rem;\n  border-bottom: 0.01rem solid grey;\n  margin-left: 0.30rem;\n  display: block;\n  color: black;\n}\n.RouteMember .box a:visited {\n  color: black;\n}\n.RouteMember .box .icon {\n  width: 0.2rem;\n  float: left;\n  margin: 0.2rem 0.2rem 0 0.2rem;\n}\n.RouteMember .box a p {\n  float: left;\n  margin-top: 0.15rem;\n  font-size: 0.2rem;\n}\n.RouteMember .box .arrow {\n  float: right;\n  width: 0.19rem;\n  margin: 0.1rem 0.2rem 0 0;\n}\n.RouteMember .box .tip {\n  position: absolute;\n  left: 4rem;\n  bottom: 0.18rem;\n  font-size: 0.2rem;\n  color: #FFB340;\n}\n.RouteMember .box2 {\n  position: relative;\n  height: 2.43rem;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.RouteMember .logout {\n  width: 6.80rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0.20rem 0px 0px 0.20rem;\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orders = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _Topbar = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Orders = exports.Orders = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    (0, _classCallCheck3.default)(this, Orders);
    return (0, _possibleConstructorReturn3.default)(this, (Orders.__proto__ || (0, _getPrototypeOf2.default)(Orders)).apply(this, arguments));
  }

  (0, _createClass3.default)(Orders, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Orders' },
        React.createElement(_Topbar.Topbar, { name: '\u5168\u90E8\u8BA2\u5355' })
      );
    }
  }]);
  return Orders;
}(_react.Component);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Topbar.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Topbar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Topbar {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 1rem;\n}\n.Topbar .content__ {\n  box-sizing: border-box;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  height: 1rem;\n  padding: 0 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n  font-size: 0.3rem;\n  line-height: 1rem;\n  box-shadow: inset 0 1px 0 #fff, 0 1px 10px rgba(0, 0, 0, 0.15);\n}\n.Topbar .content__ .c-icon {\n  float: left;\n  margin-right: 0.2rem;\n}\n.Topbar .content__ .c-icon i {\n  font-size: 0.5rem;\n  line-height: 1rem;\n}\n.Topbar .content__ .c-text {\n  float: left;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n", ""]);

// exports


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signin = undefined;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _reactRedux = __webpack_require__(14);

__webpack_require__(209);

var _Navbar = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signin = function (_Component) {
  (0, _inherits3.default)(Signin, _Component);

  function Signin() {
    (0, _classCallCheck3.default)(this, Signin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Signin.__proto__ || (0, _getPrototypeOf2.default)(Signin)).call(this));

    _this.state = {
      user: {
        name: '',
        password: ''
      }
    };
    window.scroll(0, 0);
    // console.log('<Signin/> constructing');
    return _this;
  }

  (0, _createClass3.default)(Signin, [{
    key: 'setUserID',
    value: function setUserID(e) {
      this.setState({
        user: {
          name: e.target.value,
          password: this.state.user.password
        }
      });
    }
  }, {
    key: 'setPassword',
    value: function setPassword(e) {
      var new_user = JSON.parse((0, _stringify2.default)(this.state.user));
      new_user.password = e.target.value;
      this.setState({
        user: new_user
      });
    }
  }, {
    key: 'login',
    value: function login() {
      var self = this;
      this.context.store.invoke('app/user/login', self.state.user);
    }
  }, {
    key: 'loginAsGuest',
    value: function loginAsGuest() {
      this.context.store.invoke('app/user/login_as_guest');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Signin' },
        React.createElement(
          'div',
          { className: 'header c-topbar' },
          '\u767B\u5F55',
          React.createElement(
            'span',
            { className: 'a-guest', onClick: this.loginAsGuest.bind(this) },
            '\u6E38\u5BA2\u767B\u5F55 >'
          )
        ),
        React.createElement('input', { type: 'text', name: 'user_id', placeholder: '\u624B\u673A\u53F7/\u90AE\u7BB1',
          onChange: this.setUserID.bind(this) }),
        React.createElement('input', { type: 'password', name: 'password', placeholder: '\u5BC6\u7801', onChange: this.setPassword.bind(this) }),
        React.createElement(
          'a',
          { className: 'login', onClick: this.login.bind(this) },
          '\u767B\u5F55'
        ),
        React.createElement(
          'div',
          { className: 'options' },
          React.createElement(
            'a',
            { className: 'a-signup', href: '#/signup' },
            '\u6CE8\u518C\u8D26\u53F7'
          ),
          React.createElement(
            'a',
            { className: 'a-retrive', href: 'retrive_password.html' },
            '\u5FD8\u8BB0\u5BC6\u7801'
          )
        ),
        React.createElement(_Navbar.Navbar, { name: 'mine' })
      );
    }
  }]);
  return Signin;
}(_react.Component);

Signin.contextTypes = {
  store: _react.PropTypes.object
};

exports.Signin = Signin = (0, _reactRedux.connect)(function (state) {
  return {};
})(Signin);

exports.Signin = Signin;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Signin.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Signin.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".Signin {\n  background: #ECEBEB;\n}\n.Signin .header {\n  margin-bottom: .20rem;\n}\n.Signin .header .a-guest {\n  float: right;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.Signin input {\n  display: block;\n  width: 6.6rem;\n  height: 0.8rem;\n  margin: auto;\n  margin-bottom: 0.15rem;\n  border-radius: 0.03rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.32rem;\n  text-indent: 0.20rem;\n}\n.Signin input:focus {\n  border: 1px solid #999999;\n}\n.Signin .login {\n  width: 6.60rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 auto 0.3rem auto;\n  display: block;\n}\n.Signin .options {\n  padding: 0 0.3rem;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.Signin .options .a-signup {\n  float: left;\n}\n.Signin .options .a-retrive {\n  float: right;\n}\n.Signin .options a:link {\n  color: #999999;\n}\n.Signin .options a:visited {\n  color: #999999;\n}\n", ""]);

// exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signup = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(212);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signup = function (_React$Component) {
  (0, _inherits3.default)(Signup, _React$Component);

  function Signup() {
    (0, _classCallCheck3.default)(this, Signup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Signup, [{
    key: 'getID',
    value: function getID(e) {
      this.setState({ userID: e.target.value });
      console.log(this.state);
    }
  }, {
    key: 'getPwd',
    value: function getPwd(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'login',
    value: function login() {
      if (this.state.userID === '111' && this.state.password === '111111') {
        this.props.onLogin({
          type: 'LOGIN',
          data: this.state
        });
      } else {
        alert('Invalid username or password.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'SIGNUP' },
        React.createElement('img', { className: 'grass', src: 'img/grass1.png' }),
        React.createElement('div', { className: 'spacer' }),
        React.createElement(
          'div',
          { className: 'outer-circle' },
          React.createElement('div', { className: 'circle' }),
          React.createElement(
            'div',
            { className: 'word' },
            '\u591A\u5229\u519C\u5E84'
          )
        ),
        React.createElement(
          'p',
          { className: 'words' },
          '\u5207\u6362\u5230 ',
          React.createElement(
            'a',
            { href: '' },
            '\u90AE\u7BB1\u6CE8\u518C'
          ),
          React.createElement(
            'span',
            null,
            ' | '
          ),
          '\u5DF2\u7ECF\u6709\u8D26\u53F7\u4E86\uFF1F\u70B9\u6B64 ',
          React.createElement(
            'a',
            { href: '#/signin' },
            '\u767B\u5F55'
          )
        ),
        React.createElement(
          'form',
          null,
          React.createElement('input', { className: 'input1', type: 'text', name: 'phonenumber', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801' }),
          React.createElement('br', null),
          React.createElement('input', { className: 'input1', type: 'text', name: 'verif', placeholder: '\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801' }),
          React.createElement(
            'a',
            { href: '', className: 'get-verif' },
            '\u83B7\u53D6\u9A8C\u8BC1\u7801(60)'
          ),
          React.createElement('br', null),
          React.createElement('input', { className: 'input1', type: 'password', name: 'password', placeholder: '\u8BBE\u7F6E\u65B0\u5BC6\u7801\uFF086-18\u4F4D\u6570\u5B57\u6216\u5B57\u6BCD\uFF09' }),
          React.createElement('br', null),
          React.createElement('input', { className: 'input1', type: 'password', name: 'password2', placeholder: '\u518D\u6B21\u8F93\u5165\u5BC6\u7801' }),
          React.createElement('br', null),
          React.createElement(
            'div',
            { className: 'cb' },
            React.createElement('input', { id: 'agree', type: 'checkbox', name: 'agree' }),
            React.createElement(
              'label',
              { htmlFor: 'agree' },
              React.createElement('img', { className: 'check', src: 'img/checkmark.png' })
            ),
            React.createElement(
              'p',
              null,
              '\u540C\u610F\u591A\u5229\u5E84\u56ED\u4F7F\u7528\u534F\u8BAE'
            )
          )
        ),
        React.createElement(
          'a',
          { className: 'register', href: '' },
          '\u6CE8 \u518C'
        )
      );
    }
  }]);
  return Signup;
}(React.Component);

exports.Signup = Signup;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Signup.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Signup.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".SIGNUP {\n  height: 15rem;\n  background: lightgrey;\n}\n.SIGNUP .grass {\n  width: 100%;\n}\n.SIGNUP .spacer {\n  position: relative;\n  width: 100%;\n  height: 3.62rem;\n  background: lightgrey;\n}\n.SIGNUP .outer-circle {\n  position: absolute;\n  left: 1.625rem;\n  top: 0.8rem;\n  width: 3.95rem;\n  height: 3.95rem;\n  background: lightgrey;\n  border-radius: 1.975rem;\n}\n.SIGNUP .circle {\n  position: absolute;\n  left: 0.645rem;\n  top: 0.4rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #5EA626;\n  border-radius: 1.33rem;\n}\n.SIGNUP .word {\n  position: absolute;\n  top: 3.2rem;\n  width: 3.95rem;\n  text-align: center;\n  font-size: 0.48rem;\n}\n.SIGNUP .words {\n  font-size: 0.32rem;\n  margin: 0 0 0.2rem 0.3rem;\n}\n.SIGNUP .words a {\n  color: #FF6600;\n  text-decoration: none;\n}\n.SIGNUP .words span {\n  color: grey;\n  margin: 0 0.1rem 0 0.1rem;\n}\n.SIGNUP form {\n  position: relative;\n}\n.SIGNUP .input1 {\n  width: 7.2rem;\n  height: 1.15rem;\n  font-size: 0.32rem;\n  border: none;\n  text-indent: 0.3rem;\n  font-family: ΢���ź�;\n  margin-bottom: 0.02rem;\n}\n.SIGNUP .get-verif {\n  position: absolute;\n  top: 2.05rem;\n  right: 0.3rem;\n  width: 2.3rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n}\n.SIGNUP .cb {\n  position: relative;\n  width: 5rem;\n  height: 0.34rem;\n  margin: 0.2rem 0 0.2rem 2rem;\n}\n.SIGNUP label {\n  display: block;\n  width: 0.34rem;\n  height: 0.34rem;\n  background-size: 100%;\n  float: left;\n  margin-right: 0.1rem;\n}\n.SIGNUP label img {\n  position: relative;\n  width: 80%;\n  left: 0.03rem;\n  top: 0.03rem;\n  display: none;\n}\n.SIGNUP #agree {\n  position: absolute;\n  left: 0.05rem;\n  top: 0.05rem;\n  z-index: -1;\n}\n.SIGNUP #agree:checked + label img {\n  display: block;\n}\n.SIGNUP .cb p {\n  height: 0.34rem;\n  line-height: 0.34rem;\n  font-size: 0.32rem;\n  float: left;\n  color: #663399;\n}\n.SIGNUP .register:link {\n  width: 6.8rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 0.2rem 2rem 0.2rem;\n  display: block;\n}\n.SIGNUP .register:visited {\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

__webpack_require__(215);

var _Topbar = __webpack_require__(33);

var _Navbar = __webpack_require__(32);

var _Showcase = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function (_React$Component) {
  (0, _inherits3.default)(Category, _React$Component);

  function Category(props) {
    (0, _classCallCheck3.default)(this, Category);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).call(this, props));

    var self = _this;
    console.log('<Home/> constructing', self.state);
    return _this;
  }

  (0, _createClass3.default)(Category, [{
    key: 'back',
    value: function back() {
      history.go(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      window.scroll(0, 0);
      return _react2.default.createElement(
        'div',
        { className: 'CATEGORY' },
        _react2.default.createElement(_Topbar.Topbar, { name: '\u5546\u54C1\u5206\u7C7B' }),
        _react2.default.createElement(_Showcase.Showcase, { items: this.props.items }),
        _react2.default.createElement(_Navbar.Navbar, { name: 'category' })
      );
    }
  }]);
  return Category;
}(_react2.default.Component);

Category.defaultProps = {
  items: []
};

exports.Category = Category = (0, _reactRedux.connect)(function (state) {
  return {
    items: state.app.items.items
  };
})(Category);

exports.Category = Category;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Category.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Category.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".HOME {\n  background: #ECEBEB;\n}\n.HOME .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.HOME .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.HOME .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.HOME .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.HOME .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.HOME .slider {\n  position: relative;\n  width: 7.20rem;\n  height: 4.90rem;\n  margin-bottom: .20rem;\n  overflow: hidden;\n}\n.HOME .slider-imgs {\n  width: 36rem;\n  overflow: hidden;\n}\n.HOME .slider li {\n  float: left;\n  width: 7.2rem;\n}\n.HOME .slider img {\n  width: 100%;\n}\n.HOME .slider-tabs {\n  position: absolute;\n  width: 1.29rem;\n  height: .22rem;\n  border-radius: .11rem;\n  background: white;\n  padding: 0 .10rem 0 .10rem;\n  left: 2.8rem;\n  top: 4.50rem;\n}\n.HOME .slider-tabs li {\n  width: .12rem;\n  height: .12rem;\n  border-radius: .06rem;\n  background: grey;\n  float: left;\n  margin: .05rem .10rem .05rem .10rem;\n}\n.HOME .slider-tabs .selected {\n  background: #66CC66;\n}\n.HOME .block-2 {\n  overflow: hidden;\n}\n.HOME .block-2 .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  border-bottom: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.HOME .block-2 .item-2 img {\n  width: 100%;\n}\n.HOME .block-2 .item-2 .tag {\n  padding: 0.2rem;\n  background: white;\n}\n.HOME .block-2 .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #999999;\n}\n.HOME .block-2 .item-2 .tag .price {\n  font-size: 0.24rem;\n  color: #0f88eb;\n}\n.HOME .panel {\n  position: relative;\n  background: white;\n  margin: 0 0 .20rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header {\n  position: relative;\n  width: 100%;\n  padding: 0.1rem 0 0.15rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header .class-name {\n  position: relative;\n  font-size: .32rem;\n  margin: 0 0 0 .40rem;\n  float: left;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:link {\n  font-size: .32rem;\n  margin: 0 .40rem 0 0;\n  float: right;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:visited {\n  color: #FF9900;\n}\n.HOME .panel .panel-body {\n  position: relative;\n  padding: 0 .40rem 0.1rem 0.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item {\n  float: left;\n  width: 50%;\n  height: 4.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a {\n  width: 2.60rem;\n  float: left;\n}\n.HOME .panel .panel-body .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a .thumbnail {\n  width: 2.60rem;\n  height: 2.60rem;\n  display: block;\n}\n.HOME .panel .panel-body .item a p {\n  width: 2.40rem;\n  margin: .05rem 0 .05rem 0;\n  font-size: .2rem;\n}\n.HOME .panel .panel-body .item a .description {\n  color: grey;\n}\n.HOME .panel .panel-body .item a .price {\n  color: #0f88eb;\n}\n.HOME .nav_shadow {\n  height: 0.8rem;\n}\n", ""]);

// exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIManagement = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Topbar = __webpack_require__(33);

var _reactRouter = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(218);

var DIManagement = function (_React$Component) {
  (0, _inherits3.default)(DIManagement, _React$Component);

  function DIManagement() {
    (0, _classCallCheck3.default)(this, DIManagement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DIManagement.__proto__ || (0, _getPrototypeOf2.default)(DIManagement)).call(this));

    _this.state = {};
    // console.log('<ConfirmOrder/> creating',this.props,this.state);
    return _this;
  }

  (0, _createClass3.default)(DIManagement, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        user: this.props.user
      });
      // console.log('<ConfirmOrder/> will mount',this.props,this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        deliveryInformation: newProps.DI
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // console.log('<ConfirmOrder/> updated',this.props,this.state);
    }
  }, {
    key: 'getTotal',
    value: function getTotal() {
      var total = 0;
      var items = this.state.items;
      for (var i = 0; i < items.length; i++) {
        total += Number(items[i].price) * Number(items[i].quantity);
      }
      return total.toFixed(2);
    }
  }, {
    key: 'setConsignee',
    value: function setConsignee(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.consignee = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'setPhoneNumber',
    value: function setPhoneNumber(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.phoneNumber = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'setDeliveryAddress',
    value: function setDeliveryAddress(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.deliveryAddress = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'addDI',
    value: function addDI() {
      this.setState({
        veilVisible: true
      });
    }
  }, {
    key: 'editDI',
    value: function editDI(i) {
      this.setState({
        veilVisible: true,
        targetDI: this.props.user.deliveryInformation[i]
      });
    }
  }, {
    key: 'deleteDI',
    value: function deleteDI(i) {
      this.props.act({
        type: 'DELETE_DI',
        date: this.props.user.deliveryInformation[i].date
      });
    }
  }, {
    key: 'savetargetDI',
    value: function savetargetDI() {
      if (!this.state.targetDI.consignee || !this.state.targetDI.phoneNumber || !this.state.targetDI.deliveryAddress) {
        alert('您输入的信息不完整！');
      } else {
        this.props.act({
          type: 'SAVE_NEW_DI',
          consignee: this.state.targetDI.consignee,
          phoneNumber: this.state.targetDI.phoneNumber,
          deliveryAddress: this.state.targetDI.deliveryAddress,
          date: new Date()
        });
        this.hideVeil();
      }
    }
  }, {
    key: 'hideVeil',
    value: function hideVeil() {
      this.setState({
        veilVisible: false,
        targetDI: {}
      });
    }
  }, {
    key: 'back',
    value: function back() {
      history.go(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      console.log('<DIManagement/> rendering');
      return React.createElement(
        'div',
        { className: 'DIMANAGEMENT' },
        React.createElement(_Topbar.Topbar, { name: '\u6536\u8D27\u5730\u5740\u7BA1\u7406' }),
        React.createElement(
          _reactRouter.Link,
          { to: '/di_add' },
          React.createElement(
            'div',
            { className: 'add' },
            '\u65B0\u589E\u6536\u8D27\u5730\u5740'
          )
        )
      );
    }
  }]);
  return DIManagement;
}(React.Component);

exports.DIManagement = DIManagement;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./DIManagement.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./DIManagement.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".DIMANAGEMENT .add {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.9rem;\n  background: #0f88eb;\n  color: white;\n  text-align: center;\n  font-size: 0.3rem;\n  line-height: 0.9rem;\n}\n", ""]);

// exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIAdd = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Topbar = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(221);

var DIAdd = exports.DIAdd = function (_React$Component) {
  (0, _inherits3.default)(DIAdd, _React$Component);

  function DIAdd() {
    (0, _classCallCheck3.default)(this, DIAdd);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DIAdd.__proto__ || (0, _getPrototypeOf2.default)(DIAdd)).call(this));

    _this.state = {};
    // console.log('<ConfirmOrder/> creating',this.props,this.state);
    return _this;
  }

  (0, _createClass3.default)(DIAdd, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        user: this.props.user
      });
      // console.log('<ConfirmOrder/> will mount',this.props,this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        deliveryInformation: newProps.DI
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // console.log('<ConfirmOrder/> updated',this.props,this.state);
    }
  }, {
    key: 'getTotal',
    value: function getTotal() {
      var total = 0;
      var items = this.state.items;
      for (var i = 0; i < items.length; i++) {
        total += Number(items[i].price) * Number(items[i].quantity);
      }
      return total.toFixed(2);
    }
  }, {
    key: 'setConsignee',
    value: function setConsignee(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.consignee = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'setPhoneNumber',
    value: function setPhoneNumber(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.phoneNumber = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'setDeliveryAddress',
    value: function setDeliveryAddress(e) {
      var targetDI = this.state.targetDI || {};
      targetDI.deliveryAddress = e.target.value;
      this.setState({
        targetDI: targetDI
      });
    }
  }, {
    key: 'addDI',
    value: function addDI() {
      this.setState({
        veilVisible: true
      });
    }
  }, {
    key: 'editDI',
    value: function editDI(i) {
      this.setState({
        veilVisible: true,
        targetDI: this.props.user.deliveryInformation[i]
      });
    }
  }, {
    key: 'deleteDI',
    value: function deleteDI(i) {
      this.props.act({
        type: 'DELETE_DI',
        date: this.props.user.deliveryInformation[i].date
      });
    }
  }, {
    key: 'savetargetDI',
    value: function savetargetDI() {
      if (!this.state.targetDI.consignee || !this.state.targetDI.phoneNumber || !this.state.targetDI.deliveryAddress) {
        alert('您输入的信息不完整！');
      } else {
        this.props.act({
          type: 'SAVE_NEW_DI',
          consignee: this.state.targetDI.consignee,
          phoneNumber: this.state.targetDI.phoneNumber,
          deliveryAddress: this.state.targetDI.deliveryAddress,
          date: new Date()
        });
        this.hideVeil();
      }
    }
  }, {
    key: 'hideVeil',
    value: function hideVeil() {
      this.setState({
        veilVisible: false,
        targetDI: {}
      });
    }
  }, {
    key: 'back',
    value: function back() {
      history.go(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      console.log('<DIManagement/> rendering');
      return React.createElement(
        'div',
        { className: 'DIAdd' },
        React.createElement(_Topbar.Topbar, { name: '\u65B0\u589E\u6536\u8D27\u5730\u5740' })
      );
    }
  }]);
  return DIAdd;
}(React.Component);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./DIAdd.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./DIAdd.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = exports.Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  function Test() {
    (0, _classCallCheck3.default)(this, Test);
    return (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).apply(this, arguments));
  }

  (0, _createClass3.default)(Test, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "Test" },
        "Test",
        this.props.children
      );
    }
  }]);
  return Test;
}(_react.Component);

/***/ })
/******/ ]);