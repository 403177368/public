webpackJsonp([9],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(301)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(302),
  /* template */
  __webpack_require__(303),
  /* scopeId */
  null,
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

/***/ 301:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(149);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      post: {
        title: '',
        author: {},
        content: '',
        create_at: '',
        comments: []
      }
    };
  },

  components: {},
  computed: {},
  mounted: function mounted() {
    var _this = this;

    var id = this.$route.params.id;
    (0, _axios2.default)({
      url: '//cnodejs.org/api/v1/topic/' + id,
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      var _post$comments;

      _this.post.title = res.data.data.title;
      _this.post.content = res.data.data.content;
      _this.post.author = res.data.data.author;
      _this.post.create_at = res.data.data.create_at;
      _this.post.comments.length = 0;
      (_post$comments = _this.post.comments).push.apply(_post$comments, (0, _toConsumableArray3.default)(res.data.data.replies.slice()));
      console.log(_this.post);
    }).catch(function (err) {
      // this.post.title = 'A Post';
      // this.post.content = '<p>Post\'s content...</p>';
      // this.post.comments.length = 0;
      // this.post.comments.push({
      //   author: {

      //   },
      //   create_at: '2017-07-07'
      // })
      console.log(err);
    });
  },

  methods: {}
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

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "RouteCnodePost"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8 col-sm-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default panel-full-sm post--"
  }, [_c('div', {
    staticClass: "panel-body",
    staticStyle: {
      "overflow": "scroll"
    }
  }, [_vm._m(0), _c('div', {
    staticClass: "page-header",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('h1', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v(_vm._s(_vm.post.title))])]), _c('div', [_c('div', {
    staticStyle: {
      "margin-bottom": "15px",
      "overflow": "hidden"
    }
  }, [_c('div', {
    staticStyle: {
      "float": "left",
      "margin-right": "15px"
    }
  }, [_c('img', {
    staticClass: "img-circle",
    staticStyle: {
      "width": "50px"
    },
    attrs: {
      "src": _vm.post.author.avatar_url
    }
  })]), _c('div', {
    staticStyle: {
      "float": "left",
      "line-height": "50px"
    }
  }, [_c('span', {
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_vm._v(_vm._s(_vm.post.author.loginname))]), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.post.create_at.substr(0, 10)))])])])]), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.content)
    }
  })])]), _c('div', {
    staticClass: "panel panel-default panel-full-sm"
  }, [_vm._m(1), _c('ul', {
    staticClass: "list-group comments"
  }, [_vm._l((_vm.post.comments), function(a, i) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "media-left"
    }, [_c('img', {
      attrs: {
        "src": a.author.avatar_url
      }
    })]), _c('div', {
      staticClass: "media-body"
    }, [_c('p', {
      staticClass: "media-heading text-muted"
    }, [_c('span', {
      staticClass: "author"
    }, [_vm._v(_vm._s(a.author.loginname))]), _c('span', [_vm._v(_vm._s(i + 1) + "楼")]), _vm._v(_vm._s(a.create_at.substr(0, 10)) + "\n                    ")]), _c('div', {
      staticClass: "content",
      domProps: {
        "innerHTML": _vm._s(a.content)
      }
    })])])])
  }), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.post.comments.length === 0),
      expression: " post.comments.length === 0 "
    }],
    staticClass: "list-group-item text-center"
  }, [_vm._v("\n                No comments.\n              ")])], 2)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    attrs: {
      "href": "javascript:history.back();"
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-double-left"
  }), _vm._v(" Back")]), _c('span', {
    staticClass: "pull-right"
  }, [_c('a', {
    staticStyle: {
      "cursor": "pointer",
      "margin-right": "10px"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  })]), _c('a', {
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-share"
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading",
    staticStyle: {
      "padding-left": "0"
    }
  }, [_c('span', {
    staticStyle: {
      "padding-left": "12px",
      "border-left": "3px solid #0f88eb"
    }
  }, [_vm._v("Comments")])])
}]}

/***/ })

});