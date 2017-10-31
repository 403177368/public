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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(13);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Navbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(5);

__webpack_require__(69);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

		_this.state = {};
		return _this;
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'NAVBAR' },
				React.createElement(
					'ul',
					{ className: 'nav' },
					React.createElement(
						_reactRouter.Link,
						{ to: '/home', className: this.props.name === 'home' ? 'active' : '' },
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-home' })
						),
						React.createElement(
							'p',
							null,
							'\u9996\u9875'
						)
					),
					React.createElement(
						_reactRouter.Link,
						{ to: '/category', className: this.props.name === 'category' ? 'active' : '' },
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-th' })
						),
						React.createElement(
							'p',
							null,
							'\u5206\u7C7B'
						)
					),
					React.createElement(
						_reactRouter.Link,
						{ to: '/shopping_cart', className: this.props.name === 'shoppingCart' ? 'active' : '' },
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-shopping-cart' })
						),
						React.createElement(
							'p',
							null,
							'\u8D2D\u7269\u8F66'
						)
					),
					React.createElement(
						_reactRouter.Link,
						{ to: '/member', className: this.props.name === 'mine' ? 'active' : '' },
						React.createElement(
							'div',
							{ className: 'icon' },
							React.createElement('i', { className: 'fa fa-user' })
						),
						React.createElement(
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
}(React.Component);

exports.Navbar = Navbar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Topbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(82);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topbar = function (_React$Component) {
	_inherits(Topbar, _React$Component);

	function Topbar(props) {
		_classCallCheck(this, Topbar);

		return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).call(this, props));
	}

	_createClass(Topbar, [{
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(46);

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
    adapter = __webpack_require__(14);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(14);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Revuex = __webpack_require__(40);

var _Revuex2 = _interopRequireDefault(_Revuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = _Revuex2.default.createStore({
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      inited: false
    };

    return state;
  },

  modules: {
    app: __webpack_require__(42).default,
    shoppingCart: __webpack_require__(19).default,
    items: __webpack_require__(64).default
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(47);
var buildURL = __webpack_require__(49);
var parseHeaders = __webpack_require__(50);
var isURLSameOrigin = __webpack_require__(51);
var createError = __webpack_require__(15);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(52);

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
      var cookies = __webpack_require__(53);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(48);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Showcase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(5);

__webpack_require__(73);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Showcase = function (_React$Component) {
  _inherits(Showcase, _React$Component);

  function Showcase() {
    _classCallCheck(this, Showcase);

    return _possibleConstructorReturn(this, (Showcase.__proto__ || Object.getPrototypeOf(Showcase)).apply(this, arguments));
  }

  _createClass(Showcase, [{
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
            React.createElement('img', { src: '/img/farm/items/' + a.id + '/t.jpg?raw=true' }),
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      items: []
    };
    var action = arguments[1];


    var newState = {
      items: [].concat(_toConsumableArray(state.items))
    };

    switch (action.type) {
      case 'INIT':
        return {
          items: action.shoppingCart
        };
      case 'SET_ITEMS':
        return {
          items: action.shoppingCart
        };
      case 'PLUS':
        newState[items][action.i].quantity++;
        return newState;
      case 'MINUS':
        if (state[items][action.i].quantity > 1) {
          newState[items][action.i].quantity--;
        }
        return newState;
      case 'CHECK_THIS':
        return state.items.map(function (a, i) {
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
        });
      case 'CHECK_ALL':
        var allChecked = function () {
          for (var i = 0; i < state.length; i++) {
            if (!state[i].selected) {
              return false;
            };
          };
          return true;
        }();
        if (allChecked) {
          newState.forEach(function (a) {
            a.selected = false;
          });
        } else {
          newState.forEach(function (a) {
            a.selected = true;
          });
        }
        return newState;
      case 'REMOVE':
        var _newState = [];
        newState.forEach(function (a) {
          if (!a.selected) {
            _newState.push(a);
          };
        });
        return _newState;
      case 'ADD_TO_CART':
        var canPush = true;
        state.items.forEach(function (a) {
          if (a.id === action.item.id) {
            canPush = false;
          }
        });
        if (canPush) {
          return {
            items: [].concat(_toConsumableArray(state.items), [action.item])
          };
        } else {
          return state;
        }
      case 'CLEAR':
        return [];
      default:
        return state;
    }
  },

  creators: {
    init: function init(_ref) {
      var dispatch = _ref.dispatch;

      new Promise(function (resolve, reject) {
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var items = [{
	'id': '1609291750',
	'className': 'watch',
	'name': 'Issey Miyake/三宅一生 W系列三眼计时中性石英手表',
	'desc': '--',
	'price': 4233
}, {
	'id': '1609291813',
	'className': 'bag',
	'name': 'HERMES/爱马仕 Birkin 30 CCQ5 草莓红 EPSOM皮 金扣 X刻',
	'desc': '--',
	price: 139768
}, {
	'id': '1609301428',
	'className': 'clothes',
	'name': 'By Creations Lite/By Creations Lite 桑蚕丝真丝领带 男士斜条纹时尚窄领带',
	'desc': '--',
	'price': 320
}, {
	'id': '1609301441',
	'className': 'jewelry',
	'name': 'GZUAN/古钻珠宝 初见 2.5克拉紫晶女戒指彩宝首饰古钻品牌商品订单满2000赠送精美品',
	'desc': '--',
	'price': 599
}, {
	'id': '1609301449',
	'className': 'shoes',
	'name': 'AJ ARMANI JEANS/阿玛尼牛仔酒红色牛皮材质镂空元素男士休闲鞋,B6562 NG LACED ',
	'desc': '--',
	'specs': {
		'尺码': ['41', '42', '43', '44']
	},
	'price': 1805
}, {
	'id': '1609301450',
	'className': 'clothes',
	'name': 'ARMANI JEANS/阿玛尼牛仔 男士经典时尚圆领套头T恤',
	'desc': '--',
	'specs': {
		'尺码': ['M', 'L', 'XL'],
		'颜色': ['黑色', '白色', '红色']
	},
	'price': 789
}];

exports.default = items;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(71);

var Swiper = function (_React$Component) {
  _inherits(Swiper, _React$Component);

  function Swiper(props) {
    _classCallCheck(this, Swiper);

    var _this = _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call(this, props));

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
    //console.log(this.props)

    _this.state = {
      items: _this.getNewItems(_this.props.items),
      trainStyle: {},
      itemStyle: {},
      currentDot: 0
    };
    return _this;
  }

  _createClass(Swiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //console.log(this.props)
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
          };
        }, self.props.interval);
      };
      //console.log(this.$currentOne)
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
      var newItems = JSON.parse(JSON.stringify(items));
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
        };
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
          };
          _this3.switching = false;
          _this3.cycle = false;
        }, self.props.duration);
      };
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
          };
        };
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
          };
          _this4.switching = false;
          _this4.cycle = false;
        }, self.props.duration);
      };
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
      };
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
          };
        };
      };
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
      };
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
}(React.Component);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(24);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(31);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(29);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Object.assign) {
  Object.assign = function (dest, src) {
    for (var key in src) {
      dest[key] = src[key];
    }
    return dest;
  };
  console.warn('Object.assign polyfilled.');
};

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul {\n  list-style: none;\n}\nimg {\n  display: block;\n}\na:link {\n  color: ;\n  text-decoration: none;\n}\n.c-topbar {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 1rem;\n  padding: 0 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n  font-size: 0.3rem;\n  line-height: 1rem;\n  box-shadow: inset 0 1px 0 #fff, 0 1px 10px rgba(0, 0, 0, 0.15);\n}\n.c-topbar .c-icon {\n  float: left;\n  margin-right: 0.2rem;\n}\n.c-topbar .c-icon i {\n  font-size: 0.5rem;\n  line-height: 1rem;\n}\n.c-topbar .c-text {\n  float: left;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n.container {\n  background: orange;\n  overflow: hidden;\n  display: none;\n}\n.clearfix {\n  clear: both;\n}\nbody {\n  background: #ECEBEB;\n}\n/* Media Queries */\n@media (-webkit-min-device-pixel-ratio: 2) {\n}\n.wrapper {\n  width: 7.2rem;\n}\n.shown {\n  display: block!important;\n}\n", ""]);

// exports


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _reactRouter = __webpack_require__(5);

var _App = __webpack_require__(32);

var _RouteIndex = __webpack_require__(65);

var _Home = __webpack_require__(66);

var _Member = __webpack_require__(78);

var _Orders = __webpack_require__(81);

var _Signin = __webpack_require__(84);

var _Signup = __webpack_require__(87);

var _Category = __webpack_require__(90);

var _DIManagement = __webpack_require__(93);

var _DIAdd = __webpack_require__(96);

var _Test = __webpack_require__(99);

var _reactRedux = __webpack_require__(6);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Item } from 'views/_item/Item.jsx';
var ShoppingCart = function ShoppingCart(nextState, cb) {
  __webpack_require__.e/* require.ensure */(1).then((function (require) {
    cb(null, __webpack_require__(100).ShoppingCart);
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
              cb(null, __webpack_require__(101).Item);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _log = __webpack_require__(12);

var _Mask = __webpack_require__(33);

var _Notice = __webpack_require__(36);

var _NoticePretty = __webpack_require__(39);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    (0, _log.log)('<App/> constructing');
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _store2.default.run('app/init');
      _store2.default.run('app/user/fetchUser');
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

var _reactRedux = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import store from 'store/store.js';

var Mask = function (_React$Component) {
  _inherits(Mask, _React$Component);

  function Mask(props) {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this, props));
  }

  _createClass(Mask, [{
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Mask {\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.Mask .__container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.Mask .__container ._panel {\n  position: relative;\n  margin: auto;\n  width: 5.4rem;\n  padding: 0 0.3rem 0.3rem 0.3rem;\n  border-radius: 0.05rem;\n  background: white;\n  overflow: hidden;\n}\n.Mask .__container ._panel ._header {\n  box-sizing: border-box;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n  text-align: center;\n}\n.Mask .__container ._panel ._text {\n  padding: 0.2rem 0;\n  font-size: 0.3rem;\n}\n.Mask .__container ._panel .btn {\n  box-sizing: border-box;\n  width: 2.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  border-radius: 0.05rem;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.Mask .__container ._panel .cancel {\n  float: left;\n  border: 1px solid #0f88eb;\n  color: #0f88eb;\n}\n.Mask .__container ._panel .confirm {\n  float: right;\n  background: #0f88eb;\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notice = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

var _reactRedux = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notice = function (_React$Component) {
  _inherits(Notice, _React$Component);

  function Notice() {
    _classCallCheck(this, Notice);

    var _this = _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).call(this));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Notice, [{
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".NOTICE {\n  position: fixed;\n  left: 2.1rem;\n  top: 40%;\n  margin: auto;\n  box-sizing: border-box;\n  width: 3rem;\n  padding: 0.3rem;\n  line-height: 0.4rem;\n  border-radius: 0.1rem;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  font-size: 0.24rem;\n  z-index: 1000;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoticePretty = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoticePretty = function (_React$Component) {
  _inherits(NoticePretty, _React$Component);

  function NoticePretty() {
    _classCallCheck(this, NoticePretty);

    var _this = _possibleConstructorReturn(this, (NoticePretty.__proto__ || Object.getPrototypeOf(NoticePretty)).call(this));

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

  _createClass(NoticePretty, [{
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Organize your react/redux application in the vuex way.

function createStore(options) {
  var map = {};
  var creatorsMap = {};
  var modulesMap = {};
  var rootModule;
  // var rootState = {}

  var Module = function () {
    function Module(path, rawModule) {
      _classCallCheck(this, Module);

      // console.log(path)
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
      modulesMap[this.path] = this;
      // console.log(this.path)

      // Set parent for this module:
      var parentPath;
      var parentModule;
      if (path.length === 0) {
        parentModule = null;
      } else if (path.length === 1) {
        parentModule = modulesMap['@@root'];
      } else {
        var arr = path.slice();
        arr.pop();
        parentPath = arr.join('/');
        parentModule = modulesMap[parentPath];
      }

      this.parent = parentModule;
      if (parentModule) {
        parentModule.modules[this.name] = this;
      }

      // Create and set children for this module:
      this.modules = {};
      if (rawModule.modules) {
        for (var key in rawModule.modules) {
          // Create the children modules:
          var childPath = path.slice();
          childPath.push(key);
          this.modules[key] = new Module(childPath, rawModule.modules[key]);
        }
      }
      this.childrenKeys = Object.keys(this.modules);

      this.state;
      // this.indexState;
      // this.childrenState;
      // Create internalReducer and wrapperReducer for this module:
      this.initReducer(rawModule);

      // Register the creators:
      this.creators = rawModule.creators || {};
      for (var _key in this.creators) {
        creatorsMap[this.path + '/' + _key] = this.creators[_key];
      }
    }

    _createClass(Module, [{
      key: 'initReducer',
      value: function initReducer(rawModule) {
        this.indexReducer = rawModule.reducer || function (state, action) {
          return state;
        };
        this.childrenReducer = function (state, action) {
          return state;
        };
        this.updateReducer();
      }
      // internalReducer and reducer of this module must be updated when a new child module is installed.

    }, {
      key: 'updateReducer',
      value: function updateReducer() {
        var self = this;
        if (self.childrenKeys.length > 0) {
          var reducers = {};
          for (var key in this.modules) {
            reducers[key] = this.modules[key].reducer;
          }
          // Combine wrapper reducers of the children into a children reducer for this module:
          self.childrenReducer = (0, _redux.combineReducers)(reducers);
        }

        self.reducer = function (state, action) {
          if (action.type) {
            var indexState;
            var childrenState;
            if (state) {
              if (state.toString() !== '[object Object]') {
                throw new Error('[revuex] State of a module must be a plain object!');
              } else {
                // Split the state:
                indexState = {};
                childrenState = {};
                for (var _key2 in state) {
                  if (self.childrenKeys.indexOf(_key2) > -1) {
                    childrenState[_key2] = state[_key2];
                  } else {
                    indexState[_key2] = state[_key2];
                  }
                }
              }
            }
            // console.log('reducing: ' + action.type)
            // If path of this module is matched in action.type:
            var rawType = action.type;
            var arr = action.type.split('/');
            var name = arr.pop();
            var path = arr.join('/');

            if (path === self.path) {
              console.log('[revuex] matched action: ' + action.type);
              // Remove the prefix:
              action.type = name;

              indexState = self.indexReducer(indexState, action);
              action.type = rawType;
              childrenState = self.childrenReducer(childrenState, action);

              var nextState = self.mergeState(indexState, childrenState);

              return self.state = nextState;
            } else {
              // Make sure not to change the state.
              indexState = self.indexReducer(indexState, action);

              childrenState = self.childrenReducer(childrenState, action);

              var nextState = self.mergeState(indexState, childrenState);
              return self.state = nextState;
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
          if (this.childrenKeys.indexOf(key) > -1) {
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

  function registerModule(path, rawModule) {
    if (!modulesMap[path]) {
      console.log('registering ' + path);
      var _module = new Module(path, rawModule);
      // Update this module's ancestors' internalReducer and reducer:
      while (_module.parent) {
        _module.parent.updateReducer();
        _module = _module.parent;
      }
      // var nextReducer = getNextReducer(rootModule);
      // store.replaceReducer(rootModule.reducer);
      console.log(modulesMap);
    }
  }

  function complete() {}

  // function getNextReducer(parent) {
  //   if (parent.modules) {
  //     var reducers = {};
  //     for (let key in parent.modules) {
  //       reducers[key] = getNextReducer(parent.modules[key]);
  //     }
  //     parent.reducer = combineReducers(reducers);
  //   }
  //   return parent.reducer;
  // }

  // Create the root module and all its descendant modules:
  rootModule = new Module([], {
    reducer: options.reducer,
    modules: options.modules
  });
  // console.log(rootModule)

  // function middleware() {
  //   ({dispatch, getState}) => next => (path, payload) => {
  //     return next(action);
  //   }
  // }
  // console.log(rootState)

  // Create the redux store.
  var store = (0, _redux.createStore)(rootModule.reducer, undefined);
  console.log('store: ', store);

  store._rootModule = rootModule;
  store._creatorsMap = creatorsMap;
  var reduxDispatch = store.dispatch;
  var internalDispatch = function internalDispatch(action) {
    // console.log('dispatching: ' + action.type, action);
    reduxDispatch(action);
    // console.log(store.getState());
  };
  // 
  store.dispatch = function (path) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var action = payload;
    action.type = path;
    internalDispatch(action);
  };
  store.ensure = registerModule;

  // Function to run a creator:
  store.run = function (path, payload) {
    console.log('[revuex] running action creator: ' + path);
    if (!creatorsMap[path]) {
      throw new Error('[revuex] Unknown action creator: ' + path + '.');
    }
    var arr = path.split('/');
    arr.pop();
    var modulePath = arr.join('/');
    var ctx = {
      // dispatch: store.dispatch,
      create: function create(key) {
        var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments[2];

        if (options && options.root) {
          return store.create(key, payload);
        } else {
          return store.create(modulePath + '/' + key, payload);
        }
      },
      run: function run(key, payload, options) {
        if (options && options.root) {
          return store.run(key, payload);
        } else {
          return store.run(modulePath + '/' + key, payload);
        }
      },

      // dispatch function passed to a creator:
      dispatch: function dispatch(key, payload, options) {
        // In case that payload is null:
        var action = payload || {};
        if (options && options.root) {
          action.type = key;
          return internalDispatch(action);
        } else {
          // Complete the action type:
          // Make this action a global action:
          action.type = modulePath + '/' + key;
          return internalDispatch(action);
        }
      }
    };
    Object.defineProperty(ctx, 'rootState', {
      enumerable: true,
      configurable: true,
      // writable: elKey?true:false,,
      get: function get() {
        return store.getState();
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
        var state = store.getState();
        arr.forEach(function (a) {
          state = state[a];
        });
        return state;
      },
      set: function set() {
        throw new Error('[revuex] The state must not be mutated.');
      }
    });

    return creatorsMap[path](ctx, payload);
  };
  // store.create = store.run;

  // store.dispatch.create = store.create;
  // Function to run an action creator:
  // store.dispatch.run = store.create;

  // store.dispatch.registerModule = registerModule;
  // Function to ensure that a module is installed:
  // store.dispatch.ensure = registerModule;
  return store;
}

var Revuex = {
  createStore: createStore
};

exports.default = Revuex;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      inited: false
    };
    var action = arguments[1];

    return state;
  },

  modules: {
    user: __webpack_require__(61).default,
    mask: __webpack_require__(62).default,
    notice: __webpack_require__(63).default
  },
  creators: {
    init: function init(_ref) {
      var run = _ref.run,
          dispatch = _ref.dispatch;

      Promise.all([run('shoppingCart/init', null, { root: true }), run('fetchItems')]).then(function (res) {
        dispatch('items/INIT', {
          items: res[1]
        }, {
          root: true
        });
      });
    },
    fetchItems: function fetchItems(_ref2) {
      var dispatch = _ref2.dispatch;

      return new Promise(function (resolve, reject) {
        var items = __webpack_require__(20).default;
        // console.log(items)
        resolve(items);
      });
    }
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(13);
var Axios = __webpack_require__(44);
var defaults = __webpack_require__(10);

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
axios.Cancel = __webpack_require__(17);
axios.CancelToken = __webpack_require__(59);
axios.isCancel = __webpack_require__(16);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(60);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(10);
var utils = __webpack_require__(3);
var InterceptorManager = __webpack_require__(54);
var dispatchRequest = __webpack_require__(55);
var isAbsoluteURL = __webpack_require__(57);
var combineURLs = __webpack_require__(58);

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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(15);

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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(56);
var isCancel = __webpack_require__(16);
var defaults = __webpack_require__(10);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

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
/* 57 */
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
/* 58 */
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(17);

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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      loggedIn: false,
      id: '',
      name: ''
    };
    var action = arguments[1];


    switch (action.type) {
      // case 'INIT':
      //   return action.user;
      case 'LOGIN':
        return action.user;
      case 'SET_USER':
        return action.user;
      case 'LOGOUT':
        return {
          loggedIn: false,
          id: '',
          name: ''
        };
      default:
        return state;
    }
  },

  handlers: {
    LOGIN: function LOGIN(state, action) {
      return action.user;
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
        if (res.status === 200) {
          return dispatch('SET_USER', {
            user: {
              loggedIn: true,
              id: res.data.id,
              name: res.data.name
            }
          });
        }
      });
    },
    login: function login(_ref2, _ref3) {
      var dispatch = _ref2.dispatch;
      var id = _ref3.id,
          password = _ref3.password;

      fetch('/api/login/', {
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
          name: id,
          password: password
        })
      }).then(function (res) {
        if (res.status === 200) {
          sessionStorage.user = '{"id":"15911111111"}';
          return res.json().then(function (data) {
            console.log(data);
            dispatch('SET_USER', {
              user: {
                loggedIn: true,
                id: id,
                name: id
              }
            });
            dispatch('app/notice/ALERT', {
              text: '登录成功！'
            }, {
              root: true
            });
            _reactRouter.hashHistory.replace('/member');
          });
        } else {
          return dispatch('app/notice/ALERT', {
            text: '您输入的用户名或密码有误！'
          }, {
            root: true
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    login_as_guest: function login_as_guest(_ref4) {
      var run = _ref4.run,
          rootState = _ref4.rootState,
          state = _ref4.state;

      console.log(state);
      // rootState = 111;
      // console.log(rootState)
      run('login', {
        id: '15911111111',
        password: '111111'
      });
    },
    logout: function logout(_ref5) {
      var dispatch = _ref5.dispatch;

      (0, _axios2.default)({
        url: '/api/logout',
        // this is essential cause a fetch request is without cookie by default
        withCredentials: true,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200) {
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      show: false,
      text: ''
    };
    var action = arguments[1];

    switch (action.type) {
      case 'CONFIRM':
        var newState = {
          show: true,
          text: action.text
        };
        return newState;
      case 'CLOSE':
        return {
          show: false,
          text: ''
        };
      default:
        return state;
    }
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { tick: 0, text: '' };
    var action = arguments[1];

    switch (action.type) {
      case 'ALERT':
        var newState = {
          tick: state.tick + 1,
          text: action.text
        };
        return newState;
      default:
        return state;
    }
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      items: []
    };
    var action = arguments[1];


    switch (action.type) {
      case 'INIT':
        return {
          items: action.items
        };
      default:
        return state;
    }
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteIndex = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _log = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteIndex = exports.RouteIndex = function (_React$Component) {
  _inherits(RouteIndex, _React$Component);

  function RouteIndex() {
    _classCallCheck(this, RouteIndex);

    return _possibleConstructorReturn(this, (RouteIndex.__proto__ || Object.getPrototypeOf(RouteIndex)).call(this));
  }

  _createClass(RouteIndex, [{
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(67);

var _Navbar = __webpack_require__(7);

var _Swiper = __webpack_require__(21);

var _Showcase = __webpack_require__(18);

var _Showcase2 = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    var self = _this;
    console.log('<Home/> constructing');
    return _this;
  }

  _createClass(Home, [{
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
    items: state.items.items
  };
})(Home);

exports.Home = Home;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Home {\n  background: #ECEBEB;\n}\n.Home .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.Home .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.Home .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.Home .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.Home .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.Home .block {\n  overflow: hidden;\n}\n.Home .block .block-header {\n  padding: 0.15rem 0;\n  font-size: 0.24rem;\n  color: #0f88eb;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".NAVBAR {\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 1rem;\n}\n.NAVBAR .nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n  border-top: 1px solid #dfdfdf;\n  background: white;\n  overflow: hidden;\n}\n.NAVBAR .nav a {\n  position: relative;\n  width: 25%;\n  height: 1rem;\n  float: left;\n  color: black;\n  display: block;\n  color: #999999;\n}\n.NAVBAR .nav a .icon {\n  width: 100%;\n  font-size: 0.4rem;\n  line-height: 0.6rem;\n  text-align: center;\n}\n.NAVBAR .nav a p {\n  line-height: 0.4rem;\n  font-size: 0.2rem;\n  text-align: center;\n}\n.NAVBAR .nav a .line {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  background: lightgrey;\n}\n.NAVBAR .nav a:link {\n  color: #999999;\n}\n.NAVBAR .nav a:visited {\n  color: #999999;\n}\n.NAVBAR .nav a.active {\n  color: #0f88eb !important;\n}\n", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Swiper {\n  position: relative;\n  width: 100%;\n  height: 4.9rem;\n  overflow: hidden;\n}\n.Swiper .train {\n  width: 2000%;\n  height: 100%;\n}\n.Swiper .train .item {\n  display: block;\n  float: left;\n  width: 5%;\n  height: 100%;\n  background: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  overflow: hidden;\n}\n.Swiper .train .item img {\n  height: 100%;\n  margin: auto;\n  display: block;\n}\n.Swiper .pagi {\n  position: absolute;\n  left: 0;\n  top: 90%;\n  width: 100%;\n}\n.Swiper .pagination {\n  display: table;\n  margin: auto;\n}\n.Swiper .pagination .dot {\n  float: left;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin: 0 0.1rem 0 0.1rem;\n  border-radius: 1000px;\n  background: #999999;\n}\n.Swiper .pagination .dot.active {\n  background: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Showcase {\n  overflow: hidden;\n}\n.Showcase .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n}\n.Showcase .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.Showcase .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.Showcase .item-2 img {\n  width: 100%;\n  margin: auto;\n}\n.Showcase .item-2 .tag {\n  background: white;\n}\n.Showcase .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #3A3A3A;\n}\n.Showcase .item-2 .tag .price {\n  font-size: 0.22rem;\n  color: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Showcase2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(5);

__webpack_require__(76);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Showcase2 = function (_React$Component) {
	_inherits(Showcase2, _React$Component);

	function Showcase2() {
		_classCallCheck(this, Showcase2);

		return _possibleConstructorReturn(this, (Showcase2.__proto__ || Object.getPrototypeOf(Showcase2)).apply(this, arguments));
	}

	_createClass(Showcase2, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'Showcase2' },
				this.props.items.map(function (item, i) {
					var href = '/item/' + item.id;
					// var src = DIR.img+'/items/'+item.id+'/t.jpg';
					var src = '/img/farm/items/' + item.id + '/t.jpg?raw=true';
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Showcase2 {\n  overflow: hidden;\n}\n.Showcase2 .item {\n  float: left;\n  width: 50%;\n  padding-bottom: 0.15rem;\n  background: white;\n  overflow: hidden;\n}\n.Showcase2 .item a {\n  display: block;\n  width: 80%;\n  margin: auto;\n}\n.Showcase2 .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.Showcase2 .item a .thumbnail {\n  width: 100%;\n  display: block;\n}\n.Showcase2 .item a p {\n  width: 100%;\n  font-size: .2rem;\n}\n.Showcase2 .item a .description {\n  color: grey;\n}\n.Showcase2 .item a .price {\n  color: #0f88eb;\n}\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Member = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(79);

var _react = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

var _Navbar = __webpack_require__(7);

var _reactRouter = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Member = function (_Component) {
  _inherits(Member, _Component);

  function Member() {
    _classCallCheck(this, Member);

    return _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this));
    // console.log('<Member/> constructing');
  }

  _createClass(Member, [{
    key: 'logout',
    value: function logout() {
      this.context.store.run('app/user/logout');
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
              this.props.user.id
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".RouteMember {\n  width: 100%;\n  background: #ECEBEB;\n}\n.RouteMember .header {\n  position: relative;\n  height: 3.60rem;\n  background: #0f88eb;\n  overflow: hidden;\n}\n.RouteMember .outerRound {\n  position: relative;\n  width: 1.80rem;\n  height: 1.80rem;\n  border-radius: 10rem;\n  margin: auto;\n  margin-top: 0.60rem;\n  background: rgba(255, 255, 255, 0.5);\n}\n.RouteMember .innerRound {\n  position: absolute;\n  left: 0.20rem;\n  top: 0.20rem;\n  width: 1.40rem;\n  height: 1.40rem;\n  border-radius: 10rem;\n  background: white;\n  opacity: 1;\n  overflow: hidden;\n}\n.RouteMember .innerRound img {\n  width: 100%;\n  height: 100%;\n}\n.RouteMember .account {\n  position: relative;\n  height: 0.30rem;\n  margin: auto;\n  margin-top: 0.20rem;\n  color: white;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.RouteMember .block {\n  margin-bottom: 0.2rem;\n  background: white;\n}\n.RouteMember .block .row {\n  box-sizing: border-box;\n  padding: 0.2rem;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n}\n.RouteMember .block .row i {\n  float: right;\n  font-size: 0.4rem;\n}\n.RouteMember .box1 {\n  position: relative;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.RouteMember .box a:link {\n  position: relative;\n  width: 6.40rem;\n  height: 0.60rem;\n  border-bottom: 0.01rem solid grey;\n  margin-left: 0.30rem;\n  display: block;\n  color: black;\n}\n.RouteMember .box a:visited {\n  color: black;\n}\n.RouteMember .box .icon {\n  width: 0.2rem;\n  float: left;\n  margin: 0.2rem 0.2rem 0 0.2rem;\n}\n.RouteMember .box a p {\n  float: left;\n  margin-top: 0.15rem;\n  font-size: 0.2rem;\n}\n.RouteMember .box .arrow {\n  float: right;\n  width: 0.19rem;\n  margin: 0.1rem 0.2rem 0 0;\n}\n.RouteMember .box .tip {\n  position: absolute;\n  left: 4rem;\n  bottom: 0.18rem;\n  font-size: 0.2rem;\n  color: #FFB340;\n}\n.RouteMember .box2 {\n  position: relative;\n  height: 2.43rem;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.RouteMember .logout {\n  width: 6.80rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0.20rem 0px 0px 0.20rem;\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orders = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _Topbar = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orders = exports.Orders = function (_Component) {
  _inherits(Orders, _Component);

  function Orders() {
    _classCallCheck(this, Orders);

    return _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).apply(this, arguments));
  }

  _createClass(Orders, [{
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Topbar {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 1rem;\n}\n.Topbar .content__ {\n  box-sizing: border-box;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  height: 1rem;\n  padding: 0 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n  font-size: 0.3rem;\n  line-height: 1rem;\n  box-shadow: inset 0 1px 0 #fff, 0 1px 10px rgba(0, 0, 0, 0.15);\n}\n.Topbar .content__ .c-icon {\n  float: left;\n  margin-right: 0.2rem;\n}\n.Topbar .content__ .c-icon i {\n  font-size: 0.5rem;\n  line-height: 1rem;\n}\n.Topbar .content__ .c-text {\n  float: left;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

__webpack_require__(85);

var _Navbar = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    _classCallCheck(this, Signin);

    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this));

    _this.state = {
      user: {
        id: '',
        password: ''
      }
    };
    window.scroll(0, 0);
    // console.log('<Signin/> constructing');
    return _this;
  }

  _createClass(Signin, [{
    key: 'setUserID',
    value: function setUserID(e) {
      this.setState({
        user: {
          id: e.target.value,
          password: this.state.user.password
        }
      });
    }
  }, {
    key: 'setPassword',
    value: function setPassword(e) {
      var new_user = JSON.parse(JSON.stringify(this.state.user));
      new_user.password = e.target.value;
      this.setState({
        user: new_user
      });
    }
  }, {
    key: 'login',
    value: function login() {
      var self = this;
      this.context.store.run('app/user/login', self.state.user);
    }
  }, {
    key: 'loginAsGuest',
    value: function loginAsGuest() {
      this.context.store.run('app/user/login_as_guest');
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Signin {\n  background: #ECEBEB;\n}\n.Signin .header {\n  margin-bottom: .20rem;\n}\n.Signin .header .a-guest {\n  float: right;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.Signin input {\n  display: block;\n  width: 6.6rem;\n  height: 0.8rem;\n  margin: auto;\n  margin-bottom: 0.15rem;\n  border-radius: 0.03rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.32rem;\n  text-indent: 0.20rem;\n}\n.Signin input:focus {\n  border: 1px solid #999999;\n}\n.Signin .login {\n  width: 6.60rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 auto 0.3rem auto;\n  display: block;\n}\n.Signin .options {\n  padding: 0 0.3rem;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.Signin .options .a-signup {\n  float: left;\n}\n.Signin .options .a-retrive {\n  float: right;\n}\n.Signin .options a:link {\n  color: #999999;\n}\n.Signin .options a:visited {\n  color: #999999;\n}\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(88);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Signup, [{
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".SIGNUP {\n  height: 15rem;\n  background: lightgrey;\n}\n.SIGNUP .grass {\n  width: 100%;\n}\n.SIGNUP .spacer {\n  position: relative;\n  width: 100%;\n  height: 3.62rem;\n  background: lightgrey;\n}\n.SIGNUP .outer-circle {\n  position: absolute;\n  left: 1.625rem;\n  top: 0.8rem;\n  width: 3.95rem;\n  height: 3.95rem;\n  background: lightgrey;\n  border-radius: 1.975rem;\n}\n.SIGNUP .circle {\n  position: absolute;\n  left: 0.645rem;\n  top: 0.4rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #5EA626;\n  border-radius: 1.33rem;\n}\n.SIGNUP .word {\n  position: absolute;\n  top: 3.2rem;\n  width: 3.95rem;\n  text-align: center;\n  font-size: 0.48rem;\n}\n.SIGNUP .words {\n  font-size: 0.32rem;\n  margin: 0 0 0.2rem 0.3rem;\n}\n.SIGNUP .words a {\n  color: #FF6600;\n  text-decoration: none;\n}\n.SIGNUP .words span {\n  color: grey;\n  margin: 0 0.1rem 0 0.1rem;\n}\n.SIGNUP form {\n  position: relative;\n}\n.SIGNUP .input1 {\n  width: 7.2rem;\n  height: 1.15rem;\n  font-size: 0.32rem;\n  border: none;\n  text-indent: 0.3rem;\n  font-family: ΢���ź�;\n  margin-bottom: 0.02rem;\n}\n.SIGNUP .get-verif {\n  position: absolute;\n  top: 2.05rem;\n  right: 0.3rem;\n  width: 2.3rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n}\n.SIGNUP .cb {\n  position: relative;\n  width: 5rem;\n  height: 0.34rem;\n  margin: 0.2rem 0 0.2rem 2rem;\n}\n.SIGNUP label {\n  display: block;\n  width: 0.34rem;\n  height: 0.34rem;\n  background-size: 100%;\n  float: left;\n  margin-right: 0.1rem;\n}\n.SIGNUP label img {\n  position: relative;\n  width: 80%;\n  left: 0.03rem;\n  top: 0.03rem;\n  display: none;\n}\n.SIGNUP #agree {\n  position: absolute;\n  left: 0.05rem;\n  top: 0.05rem;\n  z-index: -1;\n}\n.SIGNUP #agree:checked + label img {\n  display: block;\n}\n.SIGNUP .cb p {\n  height: 0.34rem;\n  line-height: 0.34rem;\n  font-size: 0.32rem;\n  float: left;\n  color: #663399;\n}\n.SIGNUP .register:link {\n  width: 6.8rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 0.2rem 2rem 0.2rem;\n  display: block;\n}\n.SIGNUP .register:visited {\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Category = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(91);

var _Topbar = __webpack_require__(8);

var _Navbar = __webpack_require__(7);

var _Showcase = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
	_inherits(Category, _React$Component);

	function Category(props) {
		_classCallCheck(this, Category);

		var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

		var self = _this;
		console.log('<Home/> constructing', self.state);
		return _this;
	}

	_createClass(Category, [{
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

exports.Category = Category = ReactRedux.connect(function (state) {
	return {
		items: state.items.items
	};
})(Category);

exports.Category = Category;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".HOME {\n  background: #ECEBEB;\n}\n.HOME .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.HOME .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.HOME .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.HOME .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.HOME .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.HOME .slider {\n  position: relative;\n  width: 7.20rem;\n  height: 4.90rem;\n  margin-bottom: .20rem;\n  overflow: hidden;\n}\n.HOME .slider-imgs {\n  width: 36rem;\n  overflow: hidden;\n}\n.HOME .slider li {\n  float: left;\n  width: 7.2rem;\n}\n.HOME .slider img {\n  width: 100%;\n}\n.HOME .slider-tabs {\n  position: absolute;\n  width: 1.29rem;\n  height: .22rem;\n  border-radius: .11rem;\n  background: white;\n  padding: 0 .10rem 0 .10rem;\n  left: 2.8rem;\n  top: 4.50rem;\n}\n.HOME .slider-tabs li {\n  width: .12rem;\n  height: .12rem;\n  border-radius: .06rem;\n  background: grey;\n  float: left;\n  margin: .05rem .10rem .05rem .10rem;\n}\n.HOME .slider-tabs .selected {\n  background: #66CC66;\n}\n.HOME .block-2 {\n  overflow: hidden;\n}\n.HOME .block-2 .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  border-bottom: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.HOME .block-2 .item-2 img {\n  width: 100%;\n}\n.HOME .block-2 .item-2 .tag {\n  padding: 0.2rem;\n  background: white;\n}\n.HOME .block-2 .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #999999;\n}\n.HOME .block-2 .item-2 .tag .price {\n  font-size: 0.24rem;\n  color: #0f88eb;\n}\n.HOME .panel {\n  position: relative;\n  background: white;\n  margin: 0 0 .20rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header {\n  position: relative;\n  width: 100%;\n  padding: 0.1rem 0 0.15rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header .class-name {\n  position: relative;\n  font-size: .32rem;\n  margin: 0 0 0 .40rem;\n  float: left;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:link {\n  font-size: .32rem;\n  margin: 0 .40rem 0 0;\n  float: right;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:visited {\n  color: #FF9900;\n}\n.HOME .panel .panel-body {\n  position: relative;\n  padding: 0 .40rem 0.1rem 0.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item {\n  float: left;\n  width: 50%;\n  height: 4.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a {\n  width: 2.60rem;\n  float: left;\n}\n.HOME .panel .panel-body .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a .thumbnail {\n  width: 2.60rem;\n  height: 2.60rem;\n  display: block;\n}\n.HOME .panel .panel-body .item a p {\n  width: 2.40rem;\n  margin: .05rem 0 .05rem 0;\n  font-size: .2rem;\n}\n.HOME .panel .panel-body .item a .description {\n  color: grey;\n}\n.HOME .panel .panel-body .item a .price {\n  color: #0f88eb;\n}\n.HOME .nav_shadow {\n  height: 0.8rem;\n}\n", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DIManagement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Topbar = __webpack_require__(8);

var _reactRouter = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(94);

var DIManagement = function (_React$Component) {
	_inherits(DIManagement, _React$Component);

	function DIManagement() {
		_classCallCheck(this, DIManagement);

		var _this = _possibleConstructorReturn(this, (DIManagement.__proto__ || Object.getPrototypeOf(DIManagement)).call(this));

		_this.state = {};
		//console.log('<ConfirmOrder/> creating',this.props,this.state);
		return _this;
	}

	_createClass(DIManagement, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({
				user: this.props.user
			});
			//console.log('<ConfirmOrder/> will mount',this.props,this.state);
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
			//console.log('<ConfirmOrder/> updated',this.props,this.state);
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
			};
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".DIMANAGEMENT .add {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.9rem;\n  background: #0f88eb;\n  color: white;\n  text-align: center;\n  font-size: 0.3rem;\n  line-height: 0.9rem;\n}\n", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DIAdd = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Topbar = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(97);

var DIAdd = exports.DIAdd = function (_React$Component) {
	_inherits(DIAdd, _React$Component);

	function DIAdd() {
		_classCallCheck(this, DIAdd);

		var _this = _possibleConstructorReturn(this, (DIAdd.__proto__ || Object.getPrototypeOf(DIAdd)).call(this));

		_this.state = {};
		//console.log('<ConfirmOrder/> creating',this.props,this.state);
		return _this;
	}

	_createClass(DIAdd, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({
				user: this.props.user
			});
			//console.log('<ConfirmOrder/> will mount',this.props,this.state);
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
			//console.log('<ConfirmOrder/> updated',this.props,this.state);
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
			};
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Test = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = exports.Test = function (_Component) {
	_inherits(Test, _Component);

	function Test() {
		_classCallCheck(this, Test);

		return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
	}

	_createClass(Test, [{
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