webpackJsonp([14],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(232),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    axios({
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
};

/***/ }),

/***/ 233:
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
    staticClass: "card post--"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "page-header"
  }, [_c('h1', [_vm._v(_vm._s(_vm.post.title))])]), _c('div', [_c('div', {
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
    staticClass: "card"
  }, [_c('li', {
    staticClass: "card-heading"
  }, [_vm._v("\n              Comments\n            ")]), _c('ul', {
    staticClass: "card-group comments"
  }, [_vm._l((_vm.post.comments), function(a, i) {
    return _c('li', {
      staticClass: "card-item"
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
    staticClass: "card-item text-center"
  }, [_vm._v("\n                No comments.\n              ")])], 2)])])])])])
},staticRenderFns: []}

/***/ })

});