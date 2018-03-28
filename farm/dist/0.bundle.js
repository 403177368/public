webpackJsonp([0],{

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _stringify = __webpack_require__(37);

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

__webpack_require__(225);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(14);

var _index = __webpack_require__(85);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(227);

var _index4 = _interopRequireDefault(_index3);

var _Topbar = __webpack_require__(31);

var _Swiper = __webpack_require__(87);

var _CommentBox = __webpack_require__(232);

var _config = __webpack_require__(222);

var _config2 = _interopRequireDefault(_config);

var _store = __webpack_require__(54);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_React$Component) {
  (0, _inherits3.default)(Item, _React$Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call(this));

    _this.state = {
      quantity: 1,
      tabPanel: 0,
      options: {},
      thumbnail: 0
    };
    window.scroll(0, 0);
    console.log('<Item/> constructing', _this.props, _this.state);
    return _this;
  }

  (0, _createClass3.default)(Item, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      // var id = location.hash.match(/\?id=(\w+)/)[1];
      // console.log(self);
      var id = this.props.params.id;
      // console.log(this.props)
      _store2.default.ensure(['shoppingCart'], _index2.default);
      _store2.default.ensure(['item'], _index4.default);

      _store2.default.run('item/fetch_item', { id: id });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(new_props) {
      console.log(new_props);
      var new_options = JSON.parse((0, _stringify2.default)(this.state.options));
      if (new_props.item.specs) {
        for (var key in new_props.item.specs) {
          new_options[key] = '';
        }
      }
      this.setState({
        options: new_options
      });
    }
  }, {
    key: 'thumbnails',
    value: function thumbnails() {
      var id = this.props.params.id;
      return [{
        img: '/img/farm/items/' + id + '/t.jpg'
      }, {
        img: '/img/farm/items/' + id + '/t.jpg'
      }, {
        img: '/img/farm/items/' + id + '/t.jpg'
      }, {
        img: '/img/farm/items/' + id + '/t.jpg'
      }];
    }
  }, {
    key: 'increase',
    value: function increase() {
      var val = this.state.quantity + 1;
      this.setState({
        quantity: val
      });
    }
  }, {
    key: 'decrease',
    value: function decrease() {
      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      }
    }
  }, {
    key: 'toImg',
    value: function toImg(index) {
      this.setState({
        thumbnail: index
      });
    }
  }, {
    key: 'toTab',
    value: function toTab(index) {
      this.setState({
        tabPanel: index
      });
    }
  }, {
    key: 'ADD_TO_CART',
    value: function ADD_TO_CART() {
      for (var key in this.state.options) {
        if (this.state.options[key] === '') {
          _store2.default.dispatch('app/notice/ALERT', {
            // type: 'app/notice/ALERT',
            text: '\u8BF7\u9009\u62E9' + key + '!'
          });
          return;
        }
      }
      var newItem = JSON.parse((0, _stringify2.default)(this.props.item));
      newItem.selected = false;
      newItem.spec = this.getSpec(this.state.options);
      // dispatch an action.
      _store2.default.run('item/addToCart', { item: newItem });
    }
  }, {
    key: 'getSpec',
    value: function getSpec(options) {
      var spec = '';
      for (var key in options) {
        spec += key + ':' + options[key] + ';';
      }
      return spec;
    }
  }, {
    key: 'buyNow',
    value: function buyNow() {
      console.log((0, _stringify2.default)([this.state.item]));
      sessionStorage.items = (0, _stringify2.default)([this.state.item]);
      location.hash = 'confirm_order';
    }
  }, {
    key: 'back',
    value: function back() {
      history.go(-1);
    }
  }, {
    key: 'toCart',
    value: function toCart() {
      this.props.history.push('/shopping_cart');
    }
  }, {
    key: 'checkOption',
    value: function checkOption(key, value) {
      var newOptions = JSON.parse((0, _stringify2.default)(this.state.options));
      newOptions[key] = value;
      this.setState({
        options: newOptions
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.debug('<Item/> rendering');
      var self = this;
      var item = this.props.item;
      // console.log(item);
      return _react2.default.createElement(
        'div',
        { className: 'ITEM' },
        _react2.default.createElement(_Topbar.Topbar, { name: '\u5546\u54C1\u8BE6\u60C5' }),
        _react2.default.createElement(_Swiper.Swiper, {
          sticky: true, carousel: false,
          autoplay: false,
          items: this.thumbnails() }),
        _react2.default.createElement(
          'div',
          { className: 'info' },
          _react2.default.createElement(
            'p',
            { className: 'name' },
            item.name
          ),
          _react2.default.createElement(
            'p',
            { className: 'price' },
            '\uFFE5',
            item.price.toFixed(2)
          )
        ),
        item.specs ? function () {
          var arr = [];
          for (var key in item.specs) {
            arr.push(_react2.default.createElement(
              'ul',
              { className: 'spec' },
              _react2.default.createElement(
                'li',
                { className: '_key' },
                key
              ),
              item.specs[key].map(function (a) {
                return _react2.default.createElement(
                  'li',
                  { className: a === self.state.options[key] ? '_option active' : '_option',
                    onClick: self.checkOption.bind(self, key, a) },
                  a
                );
              })
            ));
          }
          return arr;
        }() : null,
        _react2.default.createElement(
          'div',
          { className: 'block-quantity' },
          _react2.default.createElement(
            'p',
            null,
            '\u8D2D\u4E70\u6570\u91CF'
          ),
          _react2.default.createElement(
            'div',
            { className: 'counter' },
            _react2.default.createElement(
              'p',
              { className: 'minus', onClick: this.decrease.bind(this) },
              '-'
            ),
            _react2.default.createElement(
              'p',
              { className: 'quantity' },
              this.state.quantity
            ),
            _react2.default.createElement(
              'p',
              { className: 'plus', onClick: this.increase.bind(this) },
              '+'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'details' },
          _react2.default.createElement('img', { src: '/img/farm/items/1609291750/d0.jpg?raw=true' })
        ),
        _react2.default.createElement('div', { className: 'item_nav_shadow' }),
        _react2.default.createElement(
          'div',
          { className: 'item_nav' },
          _react2.default.createElement(
            'div',
            { className: 'part-left' },
            _react2.default.createElement(
              'div',
              { className: 'favor' },
              _react2.default.createElement(
                'p',
                { className: 'icon-star' },
                _react2.default.createElement('i', { className: 'fa fa-star-o' })
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-favor' },
                '\u6536\u85CF'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'favor favor_cart', onClick: this.toCart.bind(this) },
              _react2.default.createElement('div', { className: 'redDot', style: { display: this.props.cart && this.props.cart.length > 0 ? 'block' : 'none' } }),
              _react2.default.createElement(
                'p',
                { className: 'icon-star' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-cart' })
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-favor' },
                '\u8D2D\u7269\u8F66'
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'to_cart', onClick: this.ADD_TO_CART.bind(this) },
            '\u52A0\u5165\u8D2D\u7269\u8F66'
          ),
          _react2.default.createElement(
            'a',
            { className: 'to-buy', onClick: this.buyNow.bind(this) },
            '\u7ACB\u5373\u8D2D\u4E70'
          )
        )
      );
    }
  }]);
  return Item;
}(_react2.default.Component);

Item.defaultProps = {
  item: {
    id: '',
    name: '',
    specs: [],
    price: 0
  },
  cart: []
};

exports.Item = Item = (0, _reactRedux.connect)(function (state) {
  return {
    cart: state.shoppingCart.items,
    item: state.item
  };
})(Item);

exports.Item = Item;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var root = location.origin;

var dir = {
  root: root,
  img: root + '/../img/farm'
};

exports.default = dir;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Item.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./Item.less");
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

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ITEM {\n  width: 100%;\n  height: 15rem;\n  background: #ECEBEB;\n}\n.ITEM .topbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.ITEM .topbar-shadow {\n  height: 1rem;\n}\n.ITEM .info {\n  padding: 0.1rem 0.15rem;\n  border-bottom: 1px solid #dfdfdf;\n  background: white;\n}\n.ITEM .info .name {\n  width: 5.6rem;\n  font-size: 0.26rem;\n  line-height: 0.4rem;\n  font-weight: normal;\n}\n.ITEM .info .price {\n  font-size: 0.4rem;\n  color: #0f88eb;\n}\n.ITEM .spec {\n  padding: 0.15rem;\n  font-size: 0.28rem;\n  line-height: 0.5rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n}\n.ITEM .spec li {\n  float: left;\n}\n.ITEM .spec li._key {\n  width: 2rem;\n}\n.ITEM .spec li._option {\n  box-sizing: border-box;\n  height: 0.5rem;\n  padding: 0 0.2rem;\n  margin-right: 0.2rem;\n  font-size: 0.28rem;\n  color: #3A3A3A;\n  background: #ECEBEB;\n}\n.ITEM .spec li._option.active {\n  background: #0f88eb;\n  color: white;\n}\n.ITEM .block-quantity {\n  padding: 0.2rem 0.15rem;\n  font-size: 0.28rem;\n  background: white;\n  overflow: hidden;\n  border-bottom: 1px solid #dfdfdf;\n  margin-bottom: 0.2rem;\n}\n.ITEM .block-quantity p {\n  float: left;\n  line-height: 0.5rem;\n}\n.ITEM .block-quantity .counter {\n  float: right;\n}\n.ITEM .block-quantity .counter .minus {\n  float: left;\n  box-sizing: border-box;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  background: white;\n  font-size: .32rem;\n  line-height: .50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .block-quantity .counter .quantity {\n  box-sizing: border-box;\n  float: left;\n  width: 1rem;\n  height: .50rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: .50rem;\n  text-align: center;\n}\n.ITEM .block-quantity .counter .plus {\n  box-sizing: border-box;\n  float: left;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: 0.50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .details img {\n  width: 100%;\n}\n.ITEM .desc {\n  position: relative;\n  width: 100%;\n  height: 2.20rem;\n  background: white;\n  border-top: 1px solid grey;\n  margin: .05rem 0 .20rem 0;\n}\n.ITEM .desc .upper {\n  position: relative;\n  width: 6.60rem;\n  height: 1.00rem;\n  border-bottom: 1px solid grey;\n  margin: 0 0 0 .30rem;\n}\n.ITEM .desc .upper .price {\n  position: absolute;\n  left: .05rem;\n  top: .30rem;\n  color: #FF9900;\n  font-size: .4rem;\n}\n.ITEM .desc .lower {\n  position: relative;\n  width: 6.60rem;\n  height: 1rem;\n  margin-left: .30rem;\n}\n.ITEM .desc .lower p {\n  font-size: .2rem;\n  margin: .10rem 0 .10rem 0;\n}\n.ITEM .desc .lower p:last-child {\n  color: grey;\n}\n.ITEM .item_spec {\n  position: relative;\n  width: 7.20rem;\n  height: 1.80rem;\n  background: white;\n  margin-bottom: .20rem;\n}\n.ITEM .item_spec p {\n  width: 6.60rem;\n  margin-left: .30rem;\n  padding: .20rem 0 .10rem 0;\n  font-size: .2rem;\n  border-bottom: 1px solid grey;\n  color: grey;\n}\n.ITEM .spec1 {\n  margin: .35rem 0 0 .60rem;\n  float: left;\n}\n.ITEM .spec2 {\n  margin: .35rem 0 0 1.20rem;\n}\n.ITEM .details {\n  position: relative;\n  width: 7.20rem;\n  background: white;\n}\n.ITEM .details ul {\n  position: relative;\n  width: 6.63rem;\n  height: .25rem;\n  margin-left: .30rem;\n  padding: .15rem 0 .15rem 0;\n}\n.ITEM .details ul li {\n  width: 2.18rem;\n  height: .25rem;\n  float: left;\n  font-size: .2rem;\n  color: grey;\n  line-height: .20rem;\n  text-align: center;\n  border-right: 1px solid grey;\n  cursor: pointer;\n}\n.ITEM .details ul li:last-child {\n  border: none;\n}\n.ITEM .details ul li.selected {\n  color: #66CC66!important;\n}\n.ITEM .line {\n  position: relative;\n  width: 6.60rem;\n  height: .01rem;\n  background: grey;\n  margin: 0 0 .20rem .30rem;\n}\n.ITEM .square {\n  position: relative;\n  width: 6.90rem;\n  margin: 0 0 0 .15rem;\n}\n.ITEM .square img {\n  width: 100%;\n}\n.ITEM .item_nav_shadow {\n  width: 7.20rem;\n  height: .80rem;\n  background: white;\n}\n.ITEM .item_nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.80rem;\n  background: white;\n}\n.ITEM .item_nav .part-left {\n  float: left;\n  width: 33.333333%;\n  height: 0.8rem;\n}\n.ITEM .item_nav .favor {\n  position: relative;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  height: 0.8rem;\n  border-right: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: 0.3rem;\n  text-align: center;\n}\n.ITEM .item_nav .favor.favor_cart {\n  border-right: 1px solid transparent;\n}\n.ITEM .item_nav .favor .redDot {\n  position: absolute;\n  right: 0.3rem;\n  top: 0.05rem;\n  width: 0.18rem;\n  height: 0.18rem;\n  border-radius: 1000px;\n  background: #0f88eb;\n}\n.ITEM .item_nav .favor .icon-star {\n  position: relative;\n  padding: 0.1rem 0;\n}\n.ITEM .item_nav .favor .text-favor {\n  font-size: 0.2rem;\n  text-align: center;\n}\n.ITEM .item_nav .to_cart {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.80rem;\n  background: orange;\n  color: white;\n  line-height: 0.80rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .item_nav .to-buy {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.8rem;\n  background: #0f88eb;\n  color: white;\n  line-height: 0.8rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .home:link {\n  float: left;\n  width: 0.42rem;\n  display: block;\n  margin: 0.1rem 1.3rem 0 1.14rem;\n  color: black;\n}\n.ITEM .home:visited {\n  color: black;\n}\n.ITEM .home img {\n  width: 0.4rem;\n  display: block;\n  margin: auto;\n}\n.ITEM .home p {\n  font-size: 0.19rem;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(228);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(55);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(231);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(37);

var _stringify2 = _interopRequireDefault(_stringify);

var _api_items = __webpack_require__(86);

var _api_items2 = _interopRequireDefault(_api_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      id: '',
      name: '--',
      specs: {},
      price: 0
    };
    var action = arguments[1];

    // console.log('changing item', action, state);
    switch (action.type) {
      case 'SET_ITEM':
        var new_state = JSON.parse((0, _stringify2.default)(state));
        for (var key in action.item) {
          new_state[key] = action.item[key];
        }
        // console.log('new_state', new_state);
        return new_state;
      default:
        return state;
    }
  },

  creators: {
    fetch_item: function fetch_item(_ref, _ref2) {
      var _this = this;

      var dispatch = _ref.dispatch;
      var id = _ref2.id;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve, reject) {
                  var item;
                  _api_items2.default.forEach(function (a) {
                    if (id + '' === a.id + '') {
                      item = a;
                      item.quantity = 1;
                    }
                  });
                  resolve(item);
                });

              case 2:
                item = _context.sent;
                _context.next = 5;
                return dispatch('SET_ITEM', {
                  item: item
                });

              case 5:
                return _context.abrupt('return', _context.sent);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    addToCart: function addToCart(_ref3, _ref4) {
      var _this2 = this;

      var dispatch = _ref3.dispatch;
      var item = _ref4.item;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var shoppingCart;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (sessionStorage.shoppingCart) {
                  shoppingCart = JSON.parse(sessionStorage.shoppingCart);

                  shoppingCart.push(item);
                  sessionStorage.shoppingCart = (0, _stringify2.default)(shoppingCart);
                } else {
                  sessionStorage.shoppingCart = '[]';
                }
                _context2.next = 3;
                return dispatch('shoppingCart/ADD_TO_CART', {
                  item: item
                }, {
                  root: true
                });

              case 3:
                _context2.next = 5;
                return dispatch('app/notice/ALERT', {
                  text: '成功加入购物车'
                }, { root: true });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
};

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(229);


/***/ }),

/***/ 229:
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

module.exports = __webpack_require__(230);

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

/***/ 230:
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(55);

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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentBox = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'I am read-only.';

var CommentBoxStyle = {
  width: '300px',
  padding: '15px',
  border: '1px solid black',
  background: 'lightblue',
  color: 'red'
};

var CommentStyle = {
  marginBottom: '5px',
  background: 'white'
};

var CommentList = function (_React$Component) {
  (0, _inherits3.default)(CommentList, _React$Component);

  function CommentList() {
    (0, _classCallCheck3.default)(this, CommentList);
    return (0, _possibleConstructorReturn3.default)(this, (CommentList.__proto__ || (0, _getPrototypeOf2.default)(CommentList)).apply(this, arguments));
  }

  (0, _createClass3.default)(CommentList, [{
    key: 'render',
    value: function render() {
      function renderComment(comment) {
        return React.createElement(
          'li',
          { key: comment.id, style: CommentStyle },
          comment.id,
          React.createElement(
            'span',
            { style: { color: 'blue' } },
            comment.author
          ),
          comment.time,
          React.createElement('br', null),
          comment.text
        );
      }
      return React.createElement(
        'ul',
        null,
        this.props.comments.map(renderComment)
      );
    }
  }]);
  return CommentList;
}(React.Component);

var CommentBox = function (_React$Component2) {
  (0, _inherits3.default)(CommentBox, _React$Component2);

  function CommentBox(props) {
    (0, _classCallCheck3.default)(this, CommentBox);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (CommentBox.__proto__ || (0, _getPrototypeOf2.default)(CommentBox)).call(this, props));

    _this2.state = { // MODEL //this.state={}
      comments: [{
        author: 'Ned',
        time: '2016-03-01 10:11:33',
        text: 'Good!',
        id: 1
      }, {
        author: 'Rob',
        time: '2016-03-01 13:11:33',
        text: 'Nice!',
        id: 2
      }],
      text: ''
    };
    return _this2;
  }

  (0, _createClass3.default)(CommentBox, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: 'submitComment',
    value: function submitComment(e) {
      e.preventDefault();
      var updatedComments = this.state.comments.concat([{
        author: 'Jon',
        time: '',
        text: this.state.text,
        id: this.state.comments.length + 1
      }]);
      this.setState({ // MODEL
        comments: updatedComments,
        text: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (// VIEW virtual DOM
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'div',
            { style: CommentBoxStyle },
            React.createElement(
              'h3',
              null,
              'CommentBox'
            ),
            React.createElement(CommentList, { comments: this.state.comments }),
            React.createElement(
              'form',
              { onSubmit: this.submitComment.bind(this) },
              React.createElement('input', { value: this.state.text, onChange: this.handleChange.bind(this), placeholder: 'Your comment here...' }),
              React.createElement(
                'button',
                null,
                'comment'
              )
            )
          )
        )
      );
    }
  }]);
  return CommentBox;
}(React.Component);

exports.CommentBox = CommentBox;

/***/ })

});