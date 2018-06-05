webpackJsonp([9],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(351)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(353),
  /* template */
  __webpack_require__(354),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(166);

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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(168);
module.exports = __webpack_require__(4).Array.from;


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(13);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(28);
var call = __webpack_require__(48);
var isArrayIter = __webpack_require__(49);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(169);
var getIterFn = __webpack_require__(50);

$export($export.S + $export.F * !__webpack_require__(51)(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2462ab83!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2462ab83!../../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../../node_modules/less-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*@pink: #e91e63;*/\n.RouteCnodePost .post-- img {\n  max-width: 100%!important;\n  margin: auto;\n}\n.RouteCnodePost .comments {\n  border: none!important;\n}\n.RouteCnodePost .comments .list-group-item {\n  overflow: hidden;\n}\n.RouteCnodePost .comments .list-group-item .avatar {\n  float: left;\n}\n.RouteCnodePost .comments .list-group-item img {\n  float: left;\n  width: 40px;\n  border-radius: 1000px;\n}\n.RouteCnodePost .comments .list-group-item .media-body span {\n  margin-right: 15px;\n}\n.RouteCnodePost .comments .list-group-item .details {\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 55px;\n}\n.RouteCnodePost .comments .list-group-item .details span {\n  margin-right: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(165);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(29);

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawModule = {
  namespaced: true,
  state: {
    inited: false,
    post: {
      title: '',
      author: {},
      content: '',
      create_at: '',
      comments: []
    }
  },
  actions: {
    init: function init(_ref, _ref2) {
      var state = _ref.state;
      var id = _ref2.id;

      return new _promise2.default(function (resolve, reject) {
        // var id = router.currentRoute.params.id;
        state.inited = false;
        (0, _axios2.default)({
          url: '/api/cnode/post/' + id,
          // this is essential cause a fetch request is without cookie by default
          credentials: 'include',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }).then(function (res) {
          var _state$post$comments;

          state.post.title = res.data.data.title;
          state.post.content = res.data.data.content;
          state.post.author = res.data.data.author;
          state.post.create_at = res.data.data.create_at;
          state.post.comments.length = 0;
          (_state$post$comments = state.post.comments).push.apply(_state$post$comments, (0, _toConsumableArray3.default)(res.data.data.replies.slice()));
          // console.log(this.post);
          window.scroll(0, 0);
          state.inited = true;
          resolve();
        }).catch(function (err) {
          // this.post.title = 'A Post';
          // this.post.content = '<p>Post\'s content...</p>';
          // this.post.comments.length = 0;
          // this.post.comments.push({
          //   author: {

          //   },
          //   create_at: '2017-07-07'
          // })
          reject();
          console.log(err);
        });
      });
    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      // post: {
      //   title: '',
      //   author: {},
      //   content: '',
      //   create_at: '',
      //   comments: []
      // }
    };
  },

  // beforeRouteEnter(from, to, next) {
  //   this.$store.ensure(['main', 'cnode_post'], rawModule);
  //   this.$store.dispatch('main/cnode_post/init', { id: this.$route.params.id }).then(() => {
  //     next();
  //   });
  //   // this.preFetch().then(() => {
  //   //   next();
  //   // });
  // },
  components: {},
  computed: {
    state: function state() {
      return this.$store.state.main.cnode_post;
    },
    post: function post() {
      return this.$store.state.main.cnode_post.post;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.ensure(['main', 'cnode_post'], rawModule);
    this.$store.dispatch('main/cnode_post/init', { id: this.$route.params.id });
  },
  mounted: function mounted() {
    window.scroll(0, 0);
    // this.preFetch();
  },

  methods: {
    preFetch: function preFetch(store, router) {
      store.ensure(['main', 'cnode_post'], rawModule);
      return store.dispatch('main/cnode_post/init', { id: router.currentRoute.params.id });
    }
  }
};

/***/ }),

/***/ 354:
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.inited === false),
      expression: "state.inited === false"
    }],
    staticClass: "panel panel-default panel-full-sm post--",
    staticStyle: {
      "height": "150vh"
    }
  }, [_vm._m(0)]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.inited),
      expression: "state.inited"
    }],
    staticClass: "panel panel-default panel-full-sm post--"
  }, [_c('div', {
    staticClass: "panel-body",
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_vm._m(1), _c('div', {
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.inited),
      expression: "state.inited"
    }],
    staticClass: "panel panel-default panel-full-sm"
  }, [_vm._m(2), _c('ul', {
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
  return _c('div', {
    staticClass: "panel-body text-center",
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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