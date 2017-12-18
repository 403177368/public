webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(105);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(107);

var _index4 = _interopRequireDefault(_index3);

var _Topbar = __webpack_require__(8);

var _Swiper = __webpack_require__(21);

var _CommentBox = __webpack_require__(108);

var _config = __webpack_require__(102);

var _config2 = _interopRequireDefault(_config);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

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

  _createClass(Item, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      // var id = location.hash.match(/\?id=(\w+)/)[1];
      var id = this.props.params.id;
      // console.log(this.props)
      _store2.default.ensure(['shoppingCart'], _index2.default);
      _store2.default.ensure(['item'], _index4.default);
      _store2.default.run('item/fetch_item', id);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(new_props) {
      var new_options = JSON.parse(JSON.stringify(this.state.options));
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
      var id = this.props.item.id;
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
          _store2.default.dispatch({
            type: 'ALERT',
            text: '\u8BF7\u9009\u62E9' + key + '!'
          });
          return;
        }
      }
      var newItem = JSON.parse(JSON.stringify(this.props.item));
      newItem.selected = false;
      newItem.spec = this.getSpec(this.state.options);
      // dispatch an action.
      _store2.default.run('item/addToCart', newItem);
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
      console.log(JSON.stringify([this.state.item]));
      sessionStorage.items = JSON.stringify([this.state.item]);
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
      var newOptions = JSON.parse(JSON.stringify(this.state.options));
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
      return React.createElement(
        'div',
        { className: 'ITEM' },
        React.createElement(_Topbar.Topbar, { name: '\u5546\u54C1\u8BE6\u60C5' }),
        React.createElement(_Swiper.Swiper, {
          sticky: true, carousel: false,
          autoplay: false,
          items: this.thumbnails() }),
        React.createElement(
          'div',
          { className: 'info' },
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
        ),
        item.specs ? function () {
          var arr = [];
          for (var key in item.specs) {
            arr.push(React.createElement(
              'ul',
              { className: 'spec' },
              React.createElement(
                'li',
                { className: '_key' },
                key
              ),
              item.specs[key].map(function (a) {
                return React.createElement(
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
        React.createElement(
          'div',
          { className: 'block-quantity' },
          React.createElement(
            'p',
            null,
            '\u8D2D\u4E70\u6570\u91CF'
          ),
          React.createElement(
            'div',
            { className: 'counter' },
            React.createElement(
              'p',
              { className: 'minus', onClick: this.decrease.bind(this) },
              '-'
            ),
            React.createElement(
              'p',
              { className: 'quantity' },
              this.state.quantity
            ),
            React.createElement(
              'p',
              { className: 'plus', onClick: this.increase.bind(this) },
              '+'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'details' },
          React.createElement('img', { src: '/img/farm/items/1609291750/d0.jpg?raw=true' })
        ),
        React.createElement('div', { className: 'item_nav_shadow' }),
        React.createElement(
          'div',
          { className: 'item_nav' },
          React.createElement(
            'div',
            { className: 'part-left' },
            React.createElement(
              'div',
              { className: 'favor' },
              React.createElement(
                'p',
                { className: 'icon-star' },
                React.createElement('i', { className: 'fa fa-star-o' })
              ),
              React.createElement(
                'p',
                { className: 'text-favor' },
                '\u6536\u85CF'
              )
            ),
            React.createElement(
              'div',
              { className: 'favor favor_cart', onClick: this.toCart.bind(this) },
              React.createElement('div', { className: 'redDot', style: { display: this.props.cart && this.props.cart.length > 0 ? 'block' : 'none' } }),
              React.createElement(
                'p',
                { className: 'icon-star' },
                React.createElement('i', { className: 'fa fa-shopping-cart' })
              ),
              React.createElement(
                'p',
                { className: 'text-favor' },
                '\u8D2D\u7269\u8F66'
              )
            )
          ),
          React.createElement(
            'a',
            { className: 'to_cart', onClick: this.ADD_TO_CART.bind(this) },
            '\u52A0\u5165\u8D2D\u7269\u8F66'
          ),
          React.createElement(
            'a',
            { className: 'to-buy', onClick: this.buyNow.bind(this) },
            '\u7ACB\u5373\u8D2D\u4E70'
          )
        )
      );
    }
  }]);

  return Item;
}(React.Component);

Item.defaultProps = {
  item: {
    id: '',
    name: '',
    specs: [],
    price: 0
  },
  cart: []
};

exports.Item = Item = ReactRedux.connect(function (state) {
  return {
    cart: state.shoppingCart.items,
    item: state.item
  };
})(Item);

exports.Item = Item;

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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ITEM {\n  width: 100%;\n  height: 15rem;\n  background: #ECEBEB;\n}\n.ITEM .topbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.ITEM .topbar-shadow {\n  height: 1rem;\n}\n.ITEM .info {\n  padding: 0.1rem 0.15rem;\n  border-bottom: 1px solid #dfdfdf;\n  background: white;\n}\n.ITEM .info .name {\n  width: 5.6rem;\n  font-size: 0.26rem;\n  line-height: 0.4rem;\n  font-weight: normal;\n}\n.ITEM .info .price {\n  font-size: 0.4rem;\n  color: #0f88eb;\n}\n.ITEM .spec {\n  padding: 0.15rem;\n  font-size: 0.28rem;\n  line-height: 0.5rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n}\n.ITEM .spec li {\n  float: left;\n}\n.ITEM .spec li._key {\n  width: 2rem;\n}\n.ITEM .spec li._option {\n  box-sizing: border-box;\n  height: 0.5rem;\n  padding: 0 0.2rem;\n  margin-right: 0.2rem;\n  font-size: 0.28rem;\n  color: #3A3A3A;\n  background: #ECEBEB;\n}\n.ITEM .spec li._option.active {\n  background: #0f88eb;\n  color: white;\n}\n.ITEM .block-quantity {\n  padding: 0.2rem 0.15rem;\n  font-size: 0.28rem;\n  background: white;\n  overflow: hidden;\n  border-bottom: 1px solid #dfdfdf;\n  margin-bottom: 0.2rem;\n}\n.ITEM .block-quantity p {\n  float: left;\n  line-height: 0.5rem;\n}\n.ITEM .block-quantity .counter {\n  float: right;\n}\n.ITEM .block-quantity .counter .minus {\n  float: left;\n  box-sizing: border-box;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  background: white;\n  font-size: .32rem;\n  line-height: .50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .block-quantity .counter .quantity {\n  box-sizing: border-box;\n  float: left;\n  width: 1rem;\n  height: .50rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: .50rem;\n  text-align: center;\n}\n.ITEM .block-quantity .counter .plus {\n  box-sizing: border-box;\n  float: left;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: 0.50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .details img {\n  width: 100%;\n}\n.ITEM .desc {\n  position: relative;\n  width: 100%;\n  height: 2.20rem;\n  background: white;\n  border-top: 1px solid grey;\n  margin: .05rem 0 .20rem 0;\n}\n.ITEM .desc .upper {\n  position: relative;\n  width: 6.60rem;\n  height: 1.00rem;\n  border-bottom: 1px solid grey;\n  margin: 0 0 0 .30rem;\n}\n.ITEM .desc .upper .price {\n  position: absolute;\n  left: .05rem;\n  top: .30rem;\n  color: #FF9900;\n  font-size: .4rem;\n}\n.ITEM .desc .lower {\n  position: relative;\n  width: 6.60rem;\n  height: 1rem;\n  margin-left: .30rem;\n}\n.ITEM .desc .lower p {\n  font-size: .2rem;\n  margin: .10rem 0 .10rem 0;\n}\n.ITEM .desc .lower p:last-child {\n  color: grey;\n}\n.ITEM .item_spec {\n  position: relative;\n  width: 7.20rem;\n  height: 1.80rem;\n  background: white;\n  margin-bottom: .20rem;\n}\n.ITEM .item_spec p {\n  width: 6.60rem;\n  margin-left: .30rem;\n  padding: .20rem 0 .10rem 0;\n  font-size: .2rem;\n  border-bottom: 1px solid grey;\n  color: grey;\n}\n.ITEM .spec1 {\n  margin: .35rem 0 0 .60rem;\n  float: left;\n}\n.ITEM .spec2 {\n  margin: .35rem 0 0 1.20rem;\n}\n.ITEM .details {\n  position: relative;\n  width: 7.20rem;\n  background: white;\n}\n.ITEM .details ul {\n  position: relative;\n  width: 6.63rem;\n  height: .25rem;\n  margin-left: .30rem;\n  padding: .15rem 0 .15rem 0;\n}\n.ITEM .details ul li {\n  width: 2.18rem;\n  height: .25rem;\n  float: left;\n  font-size: .2rem;\n  color: grey;\n  line-height: .20rem;\n  text-align: center;\n  border-right: 1px solid grey;\n  cursor: pointer;\n}\n.ITEM .details ul li:last-child {\n  border: none;\n}\n.ITEM .details ul li.selected {\n  color: #66CC66!important;\n}\n.ITEM .line {\n  position: relative;\n  width: 6.60rem;\n  height: .01rem;\n  background: grey;\n  margin: 0 0 .20rem .30rem;\n}\n.ITEM .square {\n  position: relative;\n  width: 6.90rem;\n  margin: 0 0 0 .15rem;\n}\n.ITEM .square img {\n  width: 100%;\n}\n.ITEM .item_nav_shadow {\n  width: 7.20rem;\n  height: .80rem;\n  background: white;\n}\n.ITEM .item_nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.80rem;\n  background: white;\n}\n.ITEM .item_nav .part-left {\n  float: left;\n  width: 33.333333%;\n  height: 0.8rem;\n}\n.ITEM .item_nav .favor {\n  position: relative;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  height: 0.8rem;\n  border-right: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: 0.3rem;\n  text-align: center;\n}\n.ITEM .item_nav .favor.favor_cart {\n  border-right: 1px solid transparent;\n}\n.ITEM .item_nav .favor .redDot {\n  position: absolute;\n  right: 0.3rem;\n  top: 0.05rem;\n  width: 0.18rem;\n  height: 0.18rem;\n  border-radius: 1000px;\n  background: #0f88eb;\n}\n.ITEM .item_nav .favor .icon-star {\n  position: relative;\n  padding: 0.1rem 0;\n}\n.ITEM .item_nav .favor .text-favor {\n  font-size: 0.2rem;\n  text-align: center;\n}\n.ITEM .item_nav .to_cart {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.80rem;\n  background: orange;\n  color: white;\n  line-height: 0.80rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .item_nav .to-buy {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.8rem;\n  background: #0f88eb;\n  color: white;\n  line-height: 0.8rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .home:link {\n  float: left;\n  width: 0.42rem;\n  display: block;\n  margin: 0.1rem 1.3rem 0 1.14rem;\n  color: black;\n}\n.ITEM .home:visited {\n  color: black;\n}\n.ITEM .home img {\n  width: 0.4rem;\n  display: block;\n  margin: auto;\n}\n.ITEM .home p {\n  font-size: 0.19rem;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api_items = __webpack_require__(20);

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

    // console.log('hahaha')
    switch (action.type) {
      case 'SET_ITEM':
        var new_state = JSON.parse(JSON.stringify(state));
        for (var key in action.item) {
          new_state[key] = action.item[key];
        }
        // console.log(new_state)
        return new_state;
      default:
        return state;
    }
  },

  creators: {
    fetch_item: function fetch_item(_ref, id) {
      var dispatch = _ref.dispatch;

      return new Promise(function (resolve, reject) {
        var item;
        _api_items2.default.forEach(function (a) {
          if (id === a.id) {
            item = a;
            item.quantity = 1;
          }
        });
        resolve(item);
      }).then(function (item) {
        dispatch('SET_ITEM', {
          item: item
        });
      });
    },
    addToCart: function addToCart(_ref2, item) {
      var dispatch = _ref2.dispatch;

      new Promise(function (resolve, reject) {
        if (sessionStorage.shoppingCart) {
          var shoppingCart = JSON.parse(sessionStorage.shoppingCart);
          shoppingCart.push(item);
          sessionStorage.shoppingCart = JSON.stringify(shoppingCart);
        } else {
          sessionStorage.shoppingCart = '[]';
        }
        resolve();
      }).then(function () {
        dispatch('shoppingCart/ADD_TO_CART', {
          item: item
        }, {
          root: true
        });
        dispatch('app/notice/ALERT', {
          text: '成功加入购物车'
        }, { root: true });
      });
    }
  }
};

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(CommentList, _React$Component);

  function CommentList() {
    _classCallCheck(this, CommentList);

    return _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).apply(this, arguments));
  }

  _createClass(CommentList, [{
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
  _inherits(CommentBox, _React$Component2);

  function CommentBox(props) {
    _classCallCheck(this, CommentBox);

    var _this2 = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));

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

  _createClass(CommentBox, [{
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