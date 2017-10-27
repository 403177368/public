webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingCart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(103);

var _Navbar = __webpack_require__(7);

var _config = __webpack_require__(102);

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingCart = function (_React$Component) {
  _inherits(ShoppingCart, _React$Component);

  function ShoppingCart(props) {
    _classCallCheck(this, ShoppingCart);

    return _possibleConstructorReturn(this, (ShoppingCart.__proto__ || Object.getPrototypeOf(ShoppingCart)).call(this, props));
    // console.log('<ShoppingCart/> constructing');
  }

  _createClass(ShoppingCart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _store2.default.ensure(['shoppingCart'], _index2.default);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      sessionStorage.shoppingCart = JSON.stringify(this.props.items);
    }
    // computed

  }, {
    key: 'allChecked',
    value: function allChecked() {
      for (var i = 0; i < this.props.items.length; i++) {
        if (!this.props.items[i].selected) {
          return false;
        };
      };
      return true;
    }
  }, {
    key: 'getTotalPrice',
    value: function getTotalPrice() {
      var totalPrice = 0;
      for (var i = 0; i < this.props.items.length; i++) {
        if (this.props.items[i].selected === true) {
          totalPrice += this.props.items[i].price * this.props.items[i].quantity;
        };
      }
      return totalPrice;
    }
  }, {
    key: 'totalQuantity',
    value: function totalQuantity(items) {
      var totalQuantity = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].selected === true) {
          totalQuantity++;
        };
      }
      return totalQuantity;
    }
    // methods

  }, {
    key: 'checkAll',
    value: function checkAll() {
      this.props.dispatch('shoppingCart/CHECK_ALL');
    }
  }, {
    key: 'checkThis',
    value: function checkThis(i) {
      this.props.dispatch('shoppingCart/CHECK_THIS', { i: i });
    }
  }, {
    key: 'minusOne',
    value: function minusOne(i) {
      this.props.dispatch('shoppingCart/MINUS', { i: i });
    }
  }, {
    key: 'plusOne',
    value: function plusOne(i) {
      this.props.dispatch('shoppingCart/PLUS', { i: i });
    }
  }, {
    key: 'remove',
    value: function remove(i) {
      if (this.props.items.length === 0) {
        this.props.dispatch('notice/ALERT', {
          text: '您的购物车是空的！'
        });
      } else {
        this.props.dispatch('app/mask/CONFIRM', {
          text: '确认删除选中的商品吗？'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log(React);
      // console.log(Function);
      console.debug('<ShoppingCart/> rendering');
      return React.createElement(
        'div',
        { className: 'ShoppingCart' },
        React.createElement(
          'div',
          { className: 'header c-topbar' },
          '\u8D2D\u7269\u8F66',
          React.createElement(
            'span',
            { className: 'remove', onClick: this.remove.bind(this) },
            '\u5220\u9664'
          )
        ),
        this.props.items.length === 0 ? React.createElement(
          'p',
          { className: '_info' },
          '\u60A8\u7684\u8D2D\u7269\u8F66\u662F\u7A7A\u7684'
        ) : null,
        this.props.items.map(function (item, i) {
          return React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
              'div',
              { className: 'part part-left' },
              React.createElement(
                'div',
                { className: item.selected ? 'circle active' : 'circle', onClick: _this2.checkThis.bind(_this2, i) },
                React.createElement('i', { className: 'fa fa-check' })
              )
            ),
            React.createElement('img', { className: 'part thumbnail', src: _config2.default.img + '/items/' + item.id + '/t.jpg' }),
            React.createElement(
              'div',
              { className: 'part part-3' },
              React.createElement(
                'p',
                { className: 'name' },
                item.name
              ),
              React.createElement(
                'p',
                { className: 'spec' },
                item.spec
              ),
              React.createElement(
                'div',
                { className: 'counter' },
                React.createElement(
                  'p',
                  { className: 'counter1', onClick: _this2.minusOne.bind(_this2, i) },
                  '-'
                ),
                React.createElement(
                  'p',
                  { className: 'counter2' },
                  item.quantity
                ),
                React.createElement(
                  'p',
                  { className: 'counter3', onClick: _this2.plusOne.bind(_this2, i) },
                  '+'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'part part-4' },
              React.createElement(
                'p',
                { className: 'price' },
                '\uFFE5',
                item.price.toFixed(2)
              ),
              React.createElement(
                'p',
                { className: 'quantity' },
                'x',
                item.quantity
              )
            )
          );
        }),
        React.createElement(
          'div',
          { className: 'footer' },
          React.createElement(
            'div',
            { className: 'content__' },
            React.createElement(
              'div',
              { className: this.allChecked() ? 'circle active' : 'circle', onClick: this.checkAll.bind(this) },
              React.createElement('i', { className: 'fa fa-check' })
            ),
            React.createElement(
              'p',
              { className: 'text-all' },
              '\u5168\u9009'
            ),
            React.createElement(
              'a',
              { className: this.totalQuantity(this.props.items) > 0 ? 'pay' : 'pay disabled', href: '' },
              '\u53BB\u7ED3\u7B97(',
              this.totalQuantity(this.props.items),
              ')'
            ),
            React.createElement(
              'p',
              { className: 'sum' },
              '\u603B\u8BA1\uFF1A',
              React.createElement(
                'span',
                { className: 'money' },
                '\uFFE5',
                this.getTotalPrice().toFixed(2)
              )
            )
          )
        ),
        React.createElement(_Navbar.Navbar, { name: 'shoppingCart' })
      );
    }
  }]);

  return ShoppingCart;
}(React.Component);

ShoppingCart.defaultProps = {
  items: []
};

exports.ShoppingCart = ShoppingCart = ReactRedux.connect(function (_ref) {
  var shoppingCart = _ref.shoppingCart;

  return {
    items: shoppingCart.items
  };
})(ShoppingCart);

exports.ShoppingCart = ShoppingCart;

/***/ }),

/***/ 102:
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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./ShoppingCart.less", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/less-loader/index.js!./ShoppingCart.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ShoppingCart {\n  background: #ECEBEB;\n}\n.ShoppingCart .header {\n  margin-bottom: .20rem;\n}\n.ShoppingCart .header .remove {\n  float: right;\n}\n.ShoppingCart ._info {\n  font-size: 0.28rem;\n  color: #999999;\n  text-align: center;\n}\n.ShoppingCart .item {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  padding: 0.15rem;\n  margin-bottom: .20rem;\n  background: white;\n  overflow: hidden;\n}\n.ShoppingCart .item .part {\n  float: left;\n}\n.ShoppingCart .item .part .circle {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-top: 0.7rem;\n  border-radius: 1rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.1rem;\n  text-align: center;\n  line-height: 0.3rem;\n  color: white;\n}\n.ShoppingCart .item .part .circle.active {\n  background: #0f88eb;\n  border-color: #0f88eb;\n}\n.ShoppingCart .item .part-left {\n  margin-right: 0.15rem;\n}\n.ShoppingCart .item .thumbnail {\n  width: 1.90rem;\n  height: 1.90rem;\n  margin-right: 0.15rem;\n}\n.ShoppingCart .item .thumbnail img {\n  width: 100%;\n}\n.ShoppingCart .item .part-3 {\n  position: relative;\n  width: 2.2rem;\n  height: 1.9rem;\n}\n.ShoppingCart .item .part-3 .name {\n  width: 100%;\n  height: 0.6rem;\n  font-size: 0.22rem;\n  line-height: 0.3rem;\n  overflow: hidden;\n}\n.ShoppingCart .item .part-3 .spec {\n  font-size: 0.22rem;\n  color: #999999;\n}\n.ShoppingCart .item .part-3 .counter {\n  position: absolute;\n  left: 0;\n  bottom: 0.3rem;\n}\n.ShoppingCart .item .part-3 .counter1 {\n  width: .30rem;\n  height: .30rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n  color: grey;\n}\n.ShoppingCart .item .part-3 .counter2 {\n  width: 1rem;\n  height: .30rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.2rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n}\n.ShoppingCart .item .part-3 .counter3 {\n  width: .30rem;\n  height: .30rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n}\n.ShoppingCart .item .part-4 {\n  width: 2rem;\n  float: right;\n  text-align: right;\n}\n.ShoppingCart .item .part-4 .price {\n  color: #0f88eb;\n  font-size: 0.3rem;\n}\n.ShoppingCart .item .part-4 .quantity {\n  color: #999999;\n  font-size: 0.3rem;\n}\n.ShoppingCart .footer {\n  position: relative;\n  width: 100%;\n  height: 1rem;\n}\n.ShoppingCart .footer .content__ {\n  box-sizing: border-box;\n  position: fixed;\n  left: 0;\n  bottom: 1rem;\n  width: 100%;\n  height: 1rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  background: white;\n}\n.ShoppingCart .footer .content__ .circle {\n  float: left;\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-left: 0.15rem;\n  margin-top: 0.3rem;\n  margin-right: 0.2rem;\n  border-radius: 1rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.1rem;\n  text-align: center;\n  line-height: 0.3rem;\n  color: white;\n}\n.ShoppingCart .footer .content__ .circle.active {\n  background: #0f88eb;\n  border-color: #0f88eb;\n}\n.ShoppingCart .footer .content__ .text-all {\n  float: left;\n  line-height: 1rem;\n  font-size: 0.3rem;\n}\n.ShoppingCart .footer .content__ .back {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-right: 1px solid black;\n  overflow: hidden;\n  display: block;\n}\n.ShoppingCart .footer .content__ .back img {\n  width: 0.19rem;\n  height: 0.37rem;\n  margin: auto;\n  margin-top: .30rem;\n  display: block;\n}\n.ShoppingCart .footer .content__ .discount {\n  position: absolute;\n  left: 1.25rem;\n  top: .15rem;\n  color: grey;\n  font-size: 0.2rem;\n}\n.ShoppingCart .footer .content__ .sum {\n  float: right;\n  padding-right: 0.15rem;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n.ShoppingCart .footer .content__ .sum .money {\n  color: #0f88eb;\n}\n.ShoppingCart .footer .content__ .pay {\n  float: right;\n  height: 100%;\n  padding: 0 0.2rem;\n  background: #0f88eb;\n  color: white;\n  text-align: center;\n  font-size: 0.32rem;\n  line-height: 1rem;\n}\n.ShoppingCart .footer .content__ .pay.disabled {\n  background: #999999 !important;\n}\n", ""]);

// exports


/***/ })

});