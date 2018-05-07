webpackJsonp([8],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(289)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(295),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(169)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
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

/***/ 171:
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
    attrs: {
      "type": "password"
    },
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
      value: (_vm.user.info),
      expression: " user.info "
    }],
    staticClass: "form-group has-error"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_vm._v("\n        " + _vm._s(_vm.user.info) + "\n      ")])]), _c('div', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      Login\n    ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 290:
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

exports.default = {
  props: {},
  data: function data() {
    return {};
  },
  components: {
    BoxSignin: __webpack_require__(168),
    'signup-box': __webpack_require__(291)
  },
  computed: {
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  methods: {}
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(292)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(294),
  /* scopeId */
  "data-v-8a2fd2ec",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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


exports.default = {
  data: function data() {
    return {
      name: '',
      password: '',

      msg: ''
    };
  },

  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {
    submit: function submit() {
      var _this = this;

      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.name) {
                  _context.next = 3;
                  break;
                }

                _this.msg = 'Please input username';
                return _context.abrupt('return');

              case 3:
                if (_this.password) {
                  _context.next = 6;
                  break;
                }

                _this.msg = 'Please input password';
                return _context.abrupt('return');

              case 6:
                _this.msg = '';
                _context.next = 9;
                return _this.$store.dispatch('app/user/signup', {
                  name: _this.name,
                  password: _this.password
                });

              case 9:
                res = _context.sent;

                if (res.data.errno !== 0) {
                  _this.msg = res.data.msg;
                }

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
};

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BoxSignin panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n    Signup\n  ")]), _c('div', {
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
    attrs: {
      "type": "password"
    },
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
    staticClass: "form-group has-error"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_vm._v("\n        " + _vm._s(_vm.msg) + "\n      ")])]), _c('div', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n      Signup\n    ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 295:
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
  }, [_c('box-signin'), _c('signup-box')], 1)])])
},staticRenderFns: []}

/***/ })

});