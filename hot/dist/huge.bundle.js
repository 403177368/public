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
/******/ 	__webpack_require__.p = "/hot/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(161)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  "data-v-f0a388f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(102);

var _store = __webpack_require__(107);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = new Vue({
  el: '#app',
  store: _store2.default,
  components: {
    App: __webpack_require__(112)
  },
  template: '<app></app>'
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(106);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $html = document.querySelector('html');
var $body = document.querySelector('body');
var $screen = document.createElement('div');

$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
$body.insertBefore($screen, $body.firstChild);

var rem = {
  isSet: false,
  designWidth: 750,
  val: null,
  h: null,

  init: function init(designWidth) {
    rem.set(designWidth);
    window.addEventListener('resize', rem.set);
  },
  set: function set() {
    $screen.style.display = 'block';
    var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
    var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
    $screen.style.display = 'none';
    $html.style.fontSize = 100 * w / rem.designWidth + 'px';
    rem.val = 100 * w / 750;
    rem.w = w;
    rem.h = h;
    //document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
    rem.isSet = true;
    var $rem_height = document.querySelectorAll('.rem_height');
    [].forEach.call($rem_height, function (a) {
      a.style.height = h + 'px';
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {

  if (!rem.isSet) {
    rem.init(750);
  }
});

window.rem = rem;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Vix = __webpack_require__(108);

var _Vix2 = _interopRequireDefault(_Vix);

var _base = __webpack_require__(109);

var _base2 = _interopRequireDefault(_base);

var _main = __webpack_require__(110);

var _main2 = _interopRequireDefault(_main);

var _test = __webpack_require__(111);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_Vix2.default);

var store = _Vix2.default.createStore([_base2.default, _main2.default, _test2.default]);

exports.default = store;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Vix = {
  version: '0.0.1'
};

function install(Vue) {
  var _init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    // if ( options === void 0 ) options = {};

    // options.init = options.init
    //   ? [vuexInit].concat(options.init)
    //   : vuexInit

    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
    _init.call(this, options);
  };
}

function createStore(modules) {

  var state = {};
  var mutators = {};

  modules.forEach(function (a) {
    // shallowly merge a.state into state
    for (var key in a.state) {
      if (state[key] !== undefined) {
        throw new Error('[Vix] state.' + key + ' is already occupied.');
      } else {
        state[key] = a.state[key];
      };
    };
    // mutator is a function that takes the action
    // and mutate the state
    for (var key in a.mutators) {
      if (mutators[key] !== undefined) {
        throw new Error('[Vix] mutators.' + key + ' is already occupied.');
      } else {
        mutators[key] = a.mutators[key];
      };
    };
  });

  // make state reactive
  new Vue({
    data: state
  });

  var store = {
    state: state,
    mutators: mutators,
    act: dispatch,
    dispatch: dispatch,
    enhance: enhance,
    merge: enhance
  };
  //console.log(store)
  return store;

  function enhance(_ref) {
    var state = _ref.state,
        reducer = _ref.reducer;

    var store = this;
    for (var key in state) {
      store.state[key] = state[key];
    };
    mutators.push(mutator);
    return store;
  }

  // dispatch an action which will change the state
  function dispatch(action) {
    var vm = this;
    // call the mutator with the same name of action.type
    if (typeof mutators[action.type] === 'function') {
      mutators[action.type].call(vm, { state: state, dispatch: dispatch }, action);
    } else {
      throw new Error('[Vix] "' + action.type + '" is an invalid action-type.');
    }
  }
}

Vix.install = install;
Vix.createStore = createStore;
// console.log(Vix)
exports.default = Vix;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  img: '/img/huge/',

  dev: function () {
    // if( common.param('z_dev')==='true' ){
    //   return true;
    // }else{
    //   return true;
    // };
  }(),

  page: 'pending',
  loaded: false,

  conf: {
    act_f: {
      one: '170330'
    },
    share_title: {
      one: '有声有色，悦读于乐'
    },
    share_desc: {
      one: '听正版有声小说《九州•海上牧云记》尽在QQ阅读'
    }
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    ticket: ''
  },

  meta: {
    // share: (function(){
    //   var el = document.querySelector('[config]');
    //   var val = el.getAttribute('config');
    //   return /share/.test( val )?true:false
    // })(),

    // name: (function(){
    //   var el = document.querySelector('html');
    //   var val = el.getAttribute('name');
    //   return val;
    // })(),
    // batch: (function(){
    //   var el = document.querySelector('html');
    //   var val = el.getAttribute('batch');
    //   return val;
    // })(),
    // platform: (function(){
    //   var el = document.querySelector('html');
    //   var val = el.getAttribute('platform');
    //   return val;
    // })(),
    // normal: (function(){
    //   if( common.param('z_normal')==='true' ){
    //     return true;
    //   }else{
    //     return false;
    //   }
    // })()
  },

  // ios: (function(){
  //   if( window.env!==undefined ){
  //     return env.pt==='ios'?true:false;
  //   }else{
  //     var el = document.querySelector('[config]');
  //     var val = el.getAttribute('config');
  //     console.log(val)
  //     return /ios/.test( val )?true:false
  //   };
  // })(),
  // share: (function(){
  //   var el = document.querySelector('[config]');
  //   var val = el.getAttribute('config');
  //   return /share/.test( val )?true:false
  // })(),

  loggedIn: false,

  mask_rules: {
    show: false
  },
  mask_form: {
    show: false
  },
  mask_confirm: {
    show: false
  },
  mask_download: {
    show: false
  }
};

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref, action) {
    var state = _ref.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE() {},
  TO_CONTACT: function TO_CONTACT(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    if (state.meta.share) {
      dispatch({ type: 'TO_APP' });
    } else {
      if (state.user.loggedIn === false) {
        dispatch({ type: 'TO_LOGIN' });
      } else {
        Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'contact.html'));
      }
    };
  },
  TO_CHARGE: function TO_CHARGE() {
    Local.doCharge('act', true, action.money * 100);
  },
  TO_BOOK: function TO_BOOK(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch;

    if (!state.share) {

      if (state.meta.batch === 'one') {
        if (state.meta.name === 'one') {
          Local.forceLog(common.param('act_f'), 'one_cover_main_' + action.bid);
        } else {
          Local.forceLog(common.param('act_f'), 'one_cover_ques_' + action.bid);
        }
      } else {
        if (state.books.shared === false) {
          Local.forceLog(common.param('act_f'), 'two_cover_before_' + action.bid);
        } else {
          Local.forceLog(common.param('act_f'), 'two_cover_after_' + action.bid);
        }
      }

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch;

    Local.$toRead(action.bid);
  },
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  SET_ICON: function SET_ICON(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch;

    var pre = function () {
      // 如果当前环境为测试环境：
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      } else {
        return 'https://yuedu.reader.qq.com/event';
      }
    }();

    var href = pre + ('/act170303/adr/share.html?tf=1&act_f=' + state.conf.act_f.one);

    Local.$setIconForShareing(href, location.href.replace(/act170303.+/, 'act170303/adr/img/thumb.jpg'), state.conf.share_title.one, state.conf.share_desc.one);
  },
  SHARE: function SHARE(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch;

    // Local.forceLog( common.param('act_f'),`share` );
    // // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if (!state.meta.share) {

      var pre = function () {
        // 如果当前环境为测试环境：
        if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        } else {
          return 'https://yuedu.reader.qq.com/event';
        }
      }();
      var act_f = state.conf.act_f.one;
      var href = pre + ('/act170303/adr/share.html?tf=1&act_f=' + act_f);

      // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
      Local.$share(href, location.href.replace(/act170303.+/, 'act170303/adr/img/thumb.jpg'), state.conf.share_title.one, state.conf.share_desc.one);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref8, action) {
    var state = _ref8.state,
        dispatch = _ref8.dispatch;

    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: 'https://ptsolomo.reader.qq.com/book_res/event/act170303/adr/img/thumb.jpg',
      title: state.conf.share_title.one,
      desc: state.conf.share_desc.one
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch;

    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );
    var test = function () {
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return true;
      } else {
        return false;
      }
    }();
    var act_f = state.conf.act_f.one;
    var href = function () {
      if (test) {
        if (env.pt === 'adr') {
          return 'http://solomotest4.3g.qq.com/book_res/event/act170304/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event/act170304/ios/main.html?act_f=' + act_f;
        }
      } else {
        if (env.pt === 'adr') {
          return 'http://iyuedu.qq.com/event/act170304/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://yuedu.reader.qq.com/event/act170304/ios/main.html?act_f=' + act_f;
        }
      };
    }();
    // if the current env is adr&&wx
    if (env.vw === 'wx' && env.pt === 'adr') {
      sns.open(function (installStat, plat) {
        if (installStat === -2) {//浏览器
          // window.location.href="uniteqqreader://nativepage/client/bookshelf";
        } else if (installStat) {
          // if qqreader is installed
          bnative.openPage(href);
          state.mask_download.show = true;
        } else {
          state.mask_download.show = true;
        }
      });
    } else {
      bnative.openPage(href);
      setTimeout(function () {
        state.mask_download.show = true;
      }, 1000);
    };
  },
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref11, action) {
    var state = _ref11.state,
        dispatch = _ref11.dispatch;

    Local.forceLog(common.param('act_f'), 'replay');
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
    if (window.env && env.vw === 'wx') {
      location.href = function () {
        if (/\?/.test(location.href)) {
          return location.href + '&zrand=' + new Date().getTime();
        } else {
          return location.href + '?zrand=' + new Date().getTime();
        }
      }();
    } else {
      location.href = location.href;
    }
  },
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch;

    state[action.what].show = true;
    if (action.what === 'mask_form') {
      Local.forceLog(common.param('act_f'), 'to_form');
    }
  },
  HIDE: function HIDE(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch;

    state[action.what].show = false;
  }
};

exports.default = { state: state, mutators: mutators };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  share_btn: {
    show: false
  },
  pic: {
    bg: 0,
    playing: false,
    slogan: 0,
    done: false
  },
  change_main: {
    stage: 'fall'
  }
  // form: {
  //   inited: false,
  //   done: false
  // }
  // audio: {
  // 	on: false
  // },
  // change: {
  // 	stage: 0
  // }
};

var mutators = {
  INIT_MAIN: function INIT_MAIN(_ref, action) {
    var state = _ref.state,
        dispatch = _ref.dispatch;


    // Local.forceLog( common.param('act_f'),`enter` );

    // var pre = (function(){
    //   // 如果当前环境为测试环境：
    //   // if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
    //   //   return 'https://ptsolomo.reader.qq.com/book_res/event';
    //   // }else{
    //   //   return 'https://yuedu.reader.qq.com/event';
    //   // }
    //   if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
    //     if( state.meta.platform==='adr' ){
    //       return `http://solomotest4.3g.qq.com/book_res/event`;
    //     }else{
    //       return `https://ptsolomo.reader.qq.com/book_res/event`;
    //     }
    //   }else{
    //     if( state.meta.platform==='adr' ){
    //       return `http://iyuedu.qq.com/event`;
    //     }else{
    //       return `https://yuedu.reader.qq.com/event`;
    //     }
    //   };
    // })();
    // var bg = pre+'/act170304/adr/img/main/cards/0.jpg';
    // for( let i=0;i<6;i++ ){
    // 	let bg = `${pre}/act170304/adr/img/main/cards/${i}.jpg`;
    // 	Local.cacheImage( bg );
    // }

    // window.CLOSE_WINDOW = function(){
    //   console.log('CLOSE_WINDOW');
    //   dispatch({
    //     type: 'CLOSE_WINDOW'
    //   })
    //   return true;
    // }// if( state.meta.share ){
    // 	dispatch({
    // 		type: 'SET_SECOND_SHARING'
    // 	});
    // 	state.page = 'ready';
    // }else{
    // 	// Local.forceLog( common.param('act_f'),`enter` );
    // 	dispatch({
    // 		type: 'SET_ICON'
    // 	});
    // 	state.page = 'ready';

    // }
    state.page = 'ready';
  },
  CLOSE_WINDOW: function CLOSE_WINDOW(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    if (state.pic.done === true) {
      state.pic.done = false;
    } else {
      // Local.closePage();
    }
  },

  // TURN_AUDIO ({state,dispatch},action) {
  // 	Local.forceLog( common.param('act_f'),`play` );
  // 	state.audio.on = !state.audio.on;
  // },
  TO_FACTORY: function TO_FACTORY(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch;

    // Local.forceLog(common.param('act_f'), `toFactory`);
    state.change_main.stage = 'factory';
  },
  PICK_BG: function PICK_BG(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch;

    state.pic.bg = action.i;
  },
  NEXT_SLOGAN: function NEXT_SLOGAN(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch;

    if (state.pic.playing === true) {
      if (state.pic.slogan < 11) {
        state.pic.slogan++;
      } else {
        state.pic.slogan = 0;
      }
      setTimeout(function () {
        dispatch({
          type: 'NEXT_SLOGAN'
        });
      }, 200);
    }
  },
  PLAY_SLOGAN: function PLAY_SLOGAN(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch;

    state.pic.playing = true;
    dispatch({
      type: 'NEXT_SLOGAN'
    });
    // Local.forceLog(common.param('act_f'), `fingerprint`);
  },
  STOP_SLOGAN: function STOP_SLOGAN(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch;

    state.share_btn.show = true;
    state.pic.playing = false;
  },
  CHANGE_MAIN: function CHANGE_MAIN(_ref8, action) {
    var state = _ref8.state,
        dispatch = _ref8.dispatch;

    console.log(action);
    state.change_main.stage = action.to;
  },
  SHARE_PIC: function SHARE_PIC(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch;

    // Local.forceLog(common.param('act_f'), `share_bg${state.pic.bg}_slogan${state.pic.slogan}`);
    state.pic.done = true;
    var pre = function () {
      // 如果当前环境为测试环境：
      // if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
      //   return 'https://ptsolomo.reader.qq.com/book_res/event';
      // }else{
      //   return 'https://yuedu.reader.qq.com/event';
      // }
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        if (state.meta.platform === 'adr') {
          return 'http://solomotest4.3g.qq.com/book_res/event';
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        }
      } else {
        if (state.meta.platform === 'adr') {
          return 'http://iyuedu.qq.com/event';
        } else {
          return 'https://yuedu.reader.qq.com/event';
        }
      }
    }();
    var bg = pre + ('/act170304/adr/img/main/cards/' + state.pic.bg + '.jpg');
    var slogan = pre + ('/act170304/adr/img/main/slogan/' + state.pic.slogan + '.png');
    console.log(bg);
    console.log(slogan);

    // Local.shareStyleImage(bg, slogan);
  },
  SUBMIT_FORM: function SUBMIT_FORM(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch;

    var pl = action.form;
    localStorage.form = JSON.stringify(action.form);
    // Local.forceLog(88888, `${pl.city.val}|${pl.school.val}|${pl.name.val}|${pl.qq.val}|${pl.mobile.val}`);
  }
  // CLICK_BTN ({state,dispatch},action) {
  // 	if( state.meta.share ){
  // 		dispatch({
  // 			type: 'TO_APP'
  // 		})
  // 	}else{
  // 		dispatch({
  // 			type: 'SHARE'
  // 		})
  // 	}
  // }

};

exports.default = { state: state, mutators: mutators };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var state = {
	audio: {
		on: false
	},
	change: {
		stage: 0
	}
};

var mutators = {
	INIT: function INIT(_ref, action) {
		var state = _ref.state,
		    dispatch = _ref.dispatch;

		Local.forceLog(common.param('act_f'), 'enter');

		window.CLOSE_WINDOW = function () {
			console.log('CLOSE_WINDOW');
			dispatch({
				type: 'CLOSE_WINDOW'
			});
			return true;
		};

		state.page = 'ready';
	},
	TURN_AUDIO: function TURN_AUDIO(_ref2, action) {
		var state = _ref2.state,
		    dispatch = _ref2.dispatch;

		state.audio.on = !state.audio.on;
	},
	CHANGE: function CHANGE(_ref3, action) {
		var state = _ref3.state,
		    dispatch = _ref3.dispatch;

		state.change.stage = action.to;
	},
	CLICK_BTN: function CLICK_BTN(_ref4, action) {
		var state = _ref4.state,
		    dispatch = _ref4.dispatch;

		if (state.meta.share) {
			dispatch({
				type: 'TO_APP'
			});
		} else {
			dispatch({
				type: 'SHARE'
			});
		}
	}
};

exports.default = { state: state, mutators: mutators };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(178),
  /* scopeId */
  "data-v-8d0688a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Debugger: __webpack_require__(115),
    MaskLoading: __webpack_require__(119),
    MaskOver: __webpack_require__(123),

    MaskDownload: __webpack_require__(127),
    MaskRules: __webpack_require__(131),
    MaskForm: __webpack_require__(135),

    BooksFallTwo: __webpack_require__(139),
    PageEntry: __webpack_require__(143),
    PageFactory: __webpack_require__(155)
  },
  data: function data() {
    return {};
  },
  computed: {
    change_main: function change_main() {
      return this.$store.state.change_main;
    },
    page: function page() {
      return this.$store.state.page;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    img: function img() {
      return this.$store.state.img;
    },
    pic: function pic() {
      return this.$store.state.pic;
    },
    show: function show() {
      if (this.change_main.stage !== 'fall') {
        // if (this.meta.platform === 'adr') {
        if (this.meta.normal === true) {
          if (this.pic.done === true) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
        // } else {
        //   // ios
        //   if (this.meta.normal === true) {
        //     if (this.pic.done === true) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   } else {
        //     return false;
        //   }
        // }
      } else {
        return false;
      }
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch({ type: 'INIT_MAIN' });
  },
  methods: {
    touchmove: function touchmove(e) {
      e.preventDefault();
    }
  }
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(116)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(118),
  /* scopeId */
  "data-v-6b10dd4e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
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

exports.default = {
	props: ['state'],
	computed: {
		writers: function writers() {
			var state = [];
			this.state.writers.forEach(function (a) {
				state.push(a.state);
			});
			return state;
		}
	},
	mounted: function mounted() {}
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  "data-v-4a205db6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	data: function data() {
		return {};
	},
	mounted: function mounted() {}
};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskLoading"
  }, [_c('p', {
    staticClass: "_text"
  }, [_vm._v("加载中...")])])
}]}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  "data-v-0b5a53bb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
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
//
//
//
//

exports.default = {
	data: function data() {
		return {};
	}
};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskOver"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667"
  }, [_c('img', {
    attrs: {
      "src": '../adr/img/common/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(130),
  /* scopeId */
  "data-v-b71b8a9a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	computed: {
		mask_download: function mask_download() {
			return this.$store.state.mask_download;
		}
	},
	methods: {
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_download'
			});
		},
		CONFIRM: function CONFIRM() {
			this.$store.dispatch({
				type: 'TO_DOWNLOAD'
			});
		}
	}
};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_download.show),
      expression: "mask_download.show"
    }],
    staticClass: "MaskDownload"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("下载QQ阅读，畅读海量小说")]), _c('p', {
    staticClass: "middle"
  }, [_vm._v("如果还未安装QQ阅读，你可以：")]), _c('ul', {
    staticClass: "bottom"
  }, [_c('li', {
    staticClass: "confirm",
    on: {
      "click": _vm.CONFIRM
    }
  }, [_vm._v("下载QQ阅读")]), _c('li', {
    staticClass: "cancel",
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: []}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(132)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(134),
  /* scopeId */
  "data-v-77e3e42c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		mask: function mask() {
			return this.$store.state.mask_rules;
		}
	},
	mounted: function mounted() {},
	methods: {}
};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskRules"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_rules'
        })
      }
    }
  }), _c('img', {
    staticClass: "rules_header",
    attrs: {
      "src": _vm.img + '/main/rules_title.png'
    }
  }), _c('div', {
    staticClass: "text"
  }, [_c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1")]), _vm._v("活动时间：4月17日-30日。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2")]), _vm._v("用户可随机文案并更换图片组成自己的阅读自由主义海报。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3")]), _vm._v("海报可分享到微信，QQ和微博等渠道。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4")]), _vm._v("活动最终解释权归QQ阅读所有。")])])])])])])
},staticRenderFns: []}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(136)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  "data-v-6e59099f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			form: {
				city: {
					val: '',
					state: ''
				},
				school: {
					val: '',
					state: ''
				},
				name: {
					val: '',
					state: ''
				},
				qq: {
					val: '',
					state: ''
				},
				mobile: {
					val: '',
					state: ''
				}
			},
			done: false
		};
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		mask: function mask() {
			return this.$store.state.mask_form;
		},
		error: function error() {
			var error = false;
			for (var key in this.form) {
				if (this.form[key].state === 'error') {
					error = true;
				}
			}
			return error;
		}
	},
	created: function created() {
		if (localStorage.form) {
			var form = JSON.parse(localStorage.form);
			for (var key in form) {
				this.form[key].val = form[key].val;
			}
			this.done = true;
		};
	},
	mounted: function mounted() {},
	methods: {
		fill: function fill(e, key) {
			this.form[key].val = e.target.value;
			console.log(this.form[key].val);
		},
		check: function check(key) {
			if (this.form[key].val === '') {
				this.form[key].state = 'error';
			} else {
				this.form[key].state = '';
				return true;
			}
		},
		checkQQ: function checkQQ() {
			if (/^(\d{5,})$/.test(this.form.qq.val)) {
				this.form.qq.state = '';
				return true;
			} else {
				this.form.qq.state = 'error';
			}
		},
		checkMobile: function checkMobile() {
			if (/^1\d{10}$/.test(this.form.mobile.val)) {
				this.form.mobile.state = '';
				return true;
			} else {
				this.form.mobile.state = 'error';
			}
		},
		submit: function submit() {
			if (this.check('city') && this.check('school') && this.check('name') && this.checkQQ() && this.checkMobile()) {
				this.done = true;
				this.$store.dispatch({
					type: 'SUBMIT_FORM',
					form: this.form
				});
			};
		},
		edit: function edit() {
			this.done = false;
		}
	}
};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskForm"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_form'
        })
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t\t\t\t亲爱的同学，和胡歌一起自由阅读并分享到朋友圈提升中奖概率哦\r\n\t\t\t\t")]), _c('div', {
    staticClass: "info"
  }, [_c('span', {
    staticClass: "left_"
  }, [_vm._v(_vm._s(_vm.error ? '信息未填写或格式有误' : ''))]), _c('span', {
    staticClass: "right_"
  }, [_vm._v("(所有项均为必填项)")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.done === false),
      expression: "done===false"
    }],
    staticClass: "before"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.city.val),
      expression: " form.city.val "
    }],
    class: _vm.form.city.state,
    attrs: {
      "name": "city",
      "placeholder": "城市",
      "type": "text"
    },
    domProps: {
      "value": (_vm.form.city.val)
    },
    on: {
      "blur": function($event) {
        _vm.check('city')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.city.val = $event.target.value
      }
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.school.val),
      expression: " form.school.val "
    }],
    class: _vm.form.school.state,
    attrs: {
      "name": "school",
      "placeholder": "学校",
      "type": "text"
    },
    domProps: {
      "value": (_vm.form.school.val)
    },
    on: {
      "blur": function($event) {
        _vm.check('school')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.school.val = $event.target.value
      }
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name.val),
      expression: " form.name.val "
    }],
    class: _vm.form.name.state,
    attrs: {
      "name": "name",
      "placeholder": "姓名",
      "type": "text"
    },
    domProps: {
      "value": (_vm.form.name.val)
    },
    on: {
      "blur": function($event) {
        _vm.check('name')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name.val = $event.target.value
      }
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.qq.val),
      expression: " form.qq.val "
    }],
    class: _vm.form.qq.state,
    attrs: {
      "name": "qq",
      "placeholder": "QQ号",
      "type": "text"
    },
    domProps: {
      "value": (_vm.form.qq.val)
    },
    on: {
      "blur": function($event) {
        _vm.checkQQ()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.qq.val = $event.target.value
      }
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.mobile.val),
      expression: " form.mobile.val "
    }],
    class: _vm.form.mobile.state,
    attrs: {
      "name": "mobile",
      "placeholder": "手机",
      "type": "text"
    },
    domProps: {
      "value": (_vm.form.mobile.val)
    },
    on: {
      "blur": function($event) {
        _vm.checkMobile()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.mobile.val = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "submit",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t提 交\r\n\t\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.done === true),
      expression: "done===true"
    }],
    staticClass: "after"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('span', {
    staticClass: "key_part"
  }, [_vm._v("城市：")]), _vm._v(_vm._s(_vm.form.city.val) + "\r\n\t\t\t\t\t")]), _c('div', {
    staticClass: "field"
  }, [_c('span', {
    staticClass: "key_part"
  }, [_vm._v("学校：")]), _vm._v(_vm._s(_vm.form.school.val) + "\r\n\t\t\t\t\t")]), _c('div', {
    staticClass: "field"
  }, [_c('span', {
    staticClass: "key_part"
  }, [_vm._v("姓名：")]), _vm._v(_vm._s(_vm.form.name.val) + "\r\n\t\t\t\t\t")]), _c('div', {
    staticClass: "field"
  }, [_c('span', {
    staticClass: "key_part"
  }, [_vm._v("QQ号：")]), _vm._v(_vm._s(_vm.form.qq.val) + "\r\n\t\t\t\t\t")]), _c('div', {
    staticClass: "field"
  }, [_c('span', {
    staticClass: "key_part"
  }, [_vm._v("手机：")]), _vm._v(_vm._s(_vm.form.mobile.val) + "\r\n\t\t\t\t\t")]), _c('div', {
    staticClass: "edit",
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t修 改\r\n\t\t\t\t\t")])])])])])])
},staticRenderFns: []}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(140)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  "data-v-a5afe0d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    img: function img() {
      return '/img/huge/books_fall_2';
    },
    meta: function meta() {
      return this.$store.state.meta;
    }
  },
  components: {},
  data: function data() {
    return {
      arr: [{
        val: 1
      }, {
        val: 2
      }, {
        val: 3
      }, {
        val: 4
      }, {
        val: 5
      }, {
        val: 6
      }, {
        val: 7
      }, {
        val: 8
      }, {
        val: 9
      }, {
        val: 10
      }, {
        val: 11
      }, {
        val: 12
      }, {
        val: 1
      }, {
        val: 7
      }, {
        val: 11
      }, {
        val: 13
      }, {
        val: 14
      }, {
        val: 13
      }],
      class_: ''
    };
  },
  created: function created() {},
  watch: {
    // stage: function(new_val){
    // 	if( new_val===0 ){
    // 		this.animate();
    // 	}
    // }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.class_ = 'active';
      setTimeout(function () {
        _this.$store.dispatch({
          type: 'CHANGE_MAIN',
          to: 'entry'
        });
      }, 3400);
    }, 250);
  },
  methods: {
    jump: function jump() {
      if (this.meta.share) {
        this.$store.dispatch({
          type: 'TO_APP'
        });
      }
    },
    animate: function animate() {},
    CHANGE_STAGE: function CHANGE_STAGE() {}
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BooksFallTwo rem_height",
    on: {
      "click": _vm.jump
    }
  }, [_c('img', {
    staticClass: "bg",
    class: _vm.class_,
    attrs: {
      "src": _vm.img + '/bg.jpg'
    }
  }), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.arr), function(a) {
    return _c('img', {
      staticClass: "book",
      class: _vm.class_,
      attrs: {
        "src": _vm.img + '/' + a.val + '.png'
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(144)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  "data-v-23e10c38",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VideoHu: __webpack_require__(146),
    BtnToFactory: __webpack_require__(150)
  },
  computed: {
    change_main: function change_main() {
      return this.$store.state.change_main;
    },
    img: function img() {
      return this.$store.state.img;
    }
  },
  methods: {
    share: function share() {}
  }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(147)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  "data-v-4b915969",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	// props: {
	// 	video: {},
	// 	current: {},
	// 	act: {},
	// 	yyb: {}
	// },
	data: function data() {
		return {
			state: 'pending',
			loaded: false
		};
	},
	watch: {
		'$store.state.change_main.stage': function $storeStateChange_mainStage(nv) {
			if (nv === 'factory') {
				this.PAUSE();
			};
		},
		// current: function(){
		// 	if( this.state!=='pending' ){
		// 		this.state = 'ready';
		// 	};
		// },
		state: function state(_state) {
			var _this = this;

			var self = this;
			console.log('[video state] ' + _state);
			switch (_state) {
				case 'loading':

					this.$refs.video.setAttribute('src', DIR.video + this.video.id + '.mp4');
					console.log(this.$refs.video.src);
					this.$refs.video.load();

					this.$refs.video.addEventListener('pause', function () {
						if (_this.state === 'playing') {
							_this.state = 'paused';
						}
					});

					this.$refs.video.addEventListener('loadeddata', function () {
						console.log('loaded');
						self.loaded = true;
						// this.act({
						// 	type: 'SET_LOADED',
						// 	i: this.video.id
						// })

						setTimeout(function () {
							var tl2 = new TimelineMax();
							tl2.to(self.$refs.t5, 0.6, {
								y: '-500%',
								opacity: 1
							});

							var tl = new TimelineMax();
							tl.fromTo(self.$refs.progress, 1, {
								transformOrigin: '0% 0%',
								scaleX: 0
							}, {
								scaleX: 1,
								onComplete: function onComplete() {
									if (self.state === 'loading') {
										self.state = 'playing';
									};
								}
							});
						}, 3000);
					});
					break;
				case 'ready':
					if (this.loaded) {
						this.$refs.video.pause();
						this.$refs.video.currentTime = 0;
					};
					break;
				case 'playing':
					self.$refs.video.play();
					break;
				case 'paused':
					this.$refs.video.pause();
					break;
				case 'ended':
					break;
			}
		}
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
		// src: function(){
		// 	return location.href.replace(/act161203.+/,'act161203/video/'+this.video.id+'.mp4');
		// }

	},
	mounted: function mounted() {
		// if ( window&&window.wView ) {
		//    window.wView.allowsInlineMediaPlayback = "YES";
		//    window.wView.mediaPlaybackRequiresUserAction = "NO";
		//  }
		// this.state = 'loaded';
		// this.$refs.video.addEventListener('loadeddata',()=>{
		// 	console.log('loaded');
		// 	this.state = 'loaded';
		// 	this.loaded = true;
		// });
		// this.$refs.video.addEventListener('pause',()=>{
		// 	this.state = 'paused';
		// });
		// this.$refs.video.addEventListener('ended',()=>{
		// 	this.state = 'ended';
		// });
	},
	methods: {
		PLAY: function PLAY(e) {
			// this.act({
			// 	type: 'PLAY_VIDEO',
			// 	i: this.video.id
			// });
			e.stopPropagation();
			var self = this;
			console.log('dog');
			self.state = 'playing';
			Local.forceLog(common.param('act_f'), 'play');
			// if( this.state === 'pending' ){
			// 	if( !this.loaded ){
			// 		self.state = 'loading';
			// 	};
			// }else if( this.state === 'ready' ){
			// 	self.state = 'playing';
			// }else if( this.state === 'paused' ){
			// 	self.state = 'playing';
			// }
		},
		PAUSE: function PAUSE() {
			// if( this.$refs.video.ended ){
			// 	this.$refs.video.play();
			// }else{
			this.state = 'paused';
			// };
		}
	}
};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "VideoHu"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'pending' || _vm.state === 'loaded'),
      expression: " state==='pending'||state==='loaded' "
    }],
    staticClass: "overlay",
    style: ('background-image:url(' + _vm.img + '/main/video_bg.png);background-size:100% 100%;')
  }, [_c('p', [_vm._v("胡馆长有个见面礼送给你")])]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'loaded' || _vm.state === 'ready' || _vm.state === 'paused' || _vm.state === 'ended'),
      expression: " state==='loaded'||state==='ready'||state==='paused'||state==='ended' "
    }],
    staticClass: "btn_play",
    attrs: {
      "src": _vm.img + '/main/btn_play.png'
    },
    on: {
      "click": _vm.PLAY
    }
  }), (_vm.meta.platform === 'ios') ? _c('video', {
    ref: "video",
    attrs: {
      "src": "../adr/video.mp4",
      "preload": ""
    },
    on: {
      "click": _vm.PAUSE
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4"
    }
  })]) : _vm._e(), (_vm.meta.platform === 'adr') ? _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing' || _vm.state === 'paused' || _vm.state === 'ended'),
      expression: " state==='playing'||state==='paused'||state==='ended' "
    }],
    ref: "video",
    attrs: {
      "src": "../adr/video.mp4",
      "preload": ""
    },
    on: {
      "click": _vm.PAUSE
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4"
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(151)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(153),
  /* scopeId */
  "data-v-d614c43c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
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

exports.default = {
	computed: {
		img: function img() {
			return this.$store.state.img;
		}
	},
	data: function data() {
		return {
			pressed: false
		};
	},
	methods: {
		touchstart: function touchstart() {
			this.pressed = true;
		},
		touchmove: function touchmove() {
			this.pressed = false;
		},
		touchend: function touchend() {
			if (this.pressed) {
				this.$store.dispatch({ type: 'TO_FACTORY' });
			};
			this.pressed = false;
		},
		touchcancel: function touchcancel() {
			this.pressed = false;
		}
	}
};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    staticClass: "BtnToFactory",
    class: _vm.pressed ? 'pressed' : '',
    attrs: {
      "src": _vm.img + '/main/to_factory.png'
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend,
      "touchcancel": _vm.touchcancel
    }
  })
},staticRenderFns: []}

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change_main.stage === 'entry'),
      expression: " change_main.stage==='entry' "
    }],
    staticClass: "PageEntry rem_height"
  }, [_c('div', {
    staticClass: "content666",
    style: ('background-image:url(' + _vm.img + '/main/heading.png);background-size: 100% auto;background-repeat:no-repeat;background-position:0 7%;')
  }, [_c('div', {
    staticStyle: {
      "height": "10.52rem"
    }
  }), _c('btn-to-factory'), _c('video-hu'), _c('div', {
    staticClass: "two_btns"
  }, [_c('div', {
    staticClass: "to_rules",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_rules'
        })
      }
    }
  }, [_c('img', {
    staticClass: "icon_rules",
    attrs: {
      "src": _vm.img + '/main/icon_rules.png'
    }
  }), _vm._v("活动规则\r\n        ")]), _c('div', {
    staticClass: "to_form",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_form'
        })
      }
    }
  }, [_c('img', {
    staticClass: "icon_people",
    attrs: {
      "src": _vm.img + '/main/icon_people.png'
    }
  }), _vm._v("大学生入口\r\n        ")])])], 1)])])
},staticRenderFns: []}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(156)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  "data-v-2f8f07fc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
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

exports.default = {
  components: {
    SwiperCards: __webpack_require__(158),
    CarouselCards: __webpack_require__(169),
    Controls: __webpack_require__(7),
    MaskDone: __webpack_require__(173)
  },
  computed: {
    pic: function pic() {
      return this.$store.state.pic;
    },
    change_main: function change_main() {
      return this.$store.state.change_main;
    },
    img: function img() {
      return this.$store.state.img;
    }
  },
  methods: {
    share: function share() {}
  }
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(159)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(168),
  /* scopeId */
  "data-v-60a1024c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		Controls: __webpack_require__(7),
		BtnShare: __webpack_require__(164)
	},
	props: {
		act: {},
		img: {},
		items: {
			default: function _default() {
				return [{}, {}, {}, {}, {}, {}];
			}
		},
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out' //'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: true
		},
		sticky: {
			default: false
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 400
		},
		interval: {
			default: 1000
		}
	},
	data: function data() {
		return _defineProperty({
			width: 0,
			//items: [],

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			X1: 0,
			X2: 0,

			currentOne: 0,
			transition: '0s'
		}, 'offset', 0);
	},
	computed: {
		share_btn: function share_btn() {
			return this.$store.state.share_btn;
		},
		pic: function pic() {
			return this.$store.state.pic;
		},

		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {
		items: function items() {
			//this.copy = this.items;
		},
		currentOne: function currentOne(new_val) {
			this.$store.dispatch({
				type: 'PICK_BG',
				i: new_val
			});
		}
	},
	mounted: function mounted() {
		var _this = this;

		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		// console.log(this.trainOffsetX)
		window.addEventListener('DOMContentLoaded', function () {
			setTimeout(function () {
				_this.setWidth();
			}, 600);
		});
		// window.addEventListener('load',()=>{
		// 	this.setWidth();
		// });
		window.addEventListener('resize', function () {
			setTimeout(function () {
				_this.setWidth();
			}, 50);
		});
		if (this.autoplay) {
			setInterval(function () {
				if (!_this.inCycle) {
					_this.toNext();
				};
			}, this.interval);
		}
		// var e = document.createEvent("Event");
		// e.init("resize", true, true);
		// window.dispatchEvent(e);
	},
	methods: {
		to_book: function to_book() {
			this.act({ type: 'TO_BOOK', bid: this.items[this.currentOne].bid });
		},

		__toItem: function __toItem(name) {
			var i;
			this.items.forEach(function (a) {
				if (a.name === name) {
					i = a.id;
				}
			});
			this.toCard(i);
		},
		setWidth: function setWidth() {
			var elem = this.$refs.swiper;
			var width = Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
			this.width = width;
			this.transition = '0s';
			this.trainOffsetX = -this.currentOne * this.width;
			console.log('trainOffsetX:' + this.trainOffsetX);
		},
		toNext: function toNext() {
			var _this2 = this;

			if (true) {
				this.switching = true;
				this.transition = this.duration + 'ms ' + this.ease;
				if (this.currentOne < this.items.length - 1) {
					this.currentOne++;
					this.trainOffsetX = -this.currentOne * this.width;
				} else if (this.carousel) {
					this.currentOne = 0;
					this.trainOffsetX = -this.items.length * this.width;
				} else {
					this.trainOffsetX = -this.currentOne * this.width;
				}
				setTimeout(function () {
					_this2.transition = '0s';
					if (_this2.carousel && _this2.currentOne === 0) {
						_this2.trainOffsetX = 0;
					};
					_this2.switching = false;
					_this2.inCycle = false;
				}, this.duration);
			}
		},
		toPrev: function toPrev() {
			var _this3 = this;

			this.switching = true;
			this.transition = this.duration + 'ms ' + this.ease;
			if (this.currentOne > 0) {
				this.currentOne--;
				this.trainOffsetX = -this.currentOne * this.width;
			} else if (this.carousel) {
				this.currentOne = this.items.length - 1;
				this.trainOffsetX = this.width;
			} else {
				this.trainOffsetX = -this.currentOne * this.width;
			}
			setTimeout(function () {
				_this3.transition = '0s';
				if (_this3.carousel && _this3.currentOne === _this3.items.length - 1) {
					_this3.trainOffsetX = -_this3.currentOne * _this3.width;
				};
				_this3.switching = false;
				_this3.inCycle = false;
			}, this.duration);
		},
		toCard: function toCard(i) {
			var _this4 = this;

			this.currentOne = i;
			this.transition = this.duration + 'ms ' + this.ease;
			this.trainOffsetX = -this.currentOne * this.width;
			setTimeout(function () {
				_this4.transition = '0s';
				_this4.switching = false;
				_this4.inCycle = false;
			}, this.duration);
		},
		touchstart: function touchstart(e) {
			e.stopPropagation();
			// console.log(this.items)
			console.log(this.inCycle);
			console.log(this.trainOffsetX);
			// if( isNaN(this.trainOffsetX) ){
			// 	this.trainOffsetX = 0;
			// }
			if (!this.inCycle && !this.switching) {
				this.setWidth();
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function touchmove(e) {
			e.stopPropagation();
			if (this.inCycle && !this.switching) {
				this.moveCount++;
				if (!this.scrolling) {
					// decide if it can scroll at the first touchmove
					if (this.moveCount === 1) {
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if (Math.abs(distanceY) > Math.abs(distanceX)) {
							this.scrolling = true;
						} else {
							// it is essential to preventDefault at the first touchmove
							// when using vanillajs or the subsequent touch-events would
							// not get triggered
							e.preventDefault();
						}
					}

					if (!this.scrolling && this.sticky) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
						// console.log(this.trainOffsetX)
						this.offset += distance;
						//console.log(this.trainOffsetX)
					}
				}
			}
		},
		touchend: function touchend(e) {
			e.stopPropagation();
			if (this.inCycle && !this.scrolling) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				// console.log(distance)
				if (distance < -5) {
					this.toNext();
				} else if (distance > 5) {
					this.toPrev();
				} else {
					if (!this.switching) {
						this.switching = false;
						this.inCycle = false;
					};
				}
			} else {
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      fp: '',
      class_: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    }
  },
  methods: {
    touchstart: function touchstart(e) {
      e.stopPropagation();
      e.preventDefault();
      this.fp = 'active';
      this.class_ = 'active';
      this.$store.dispatch({ type: 'PLAY_SLOGAN' });
    },
    touchend: function touchend(e) {
      e.stopPropagation();
      this.fp = '';
      this.class_ = '';
      this.$store.dispatch({ type: 'STOP_SLOGAN' });
    }
  }
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Controls"
  }, [_c('img', {
    staticClass: "console_img",
    attrs: {
      "src": _vm.img + 'main/console.png'
    }
  }), _c('img', {
    staticClass: "fp",
    class: _vm.fp,
    attrs: {
      "src": _vm.img + 'main/fp.png'
    },
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }), _vm._l((4), function(i) {
    return _c('div', {
      staticClass: "wdw",
      class: 'wdw' + i
    }, [_c('div', {
      staticClass: "scroller",
      class: _vm.class_
    }, [_c('img', {
      staticClass: "chars",
      attrs: {
        "src": _vm.img + '/main/chars.jpg'
      }
    }), _c('img', {
      staticClass: "chars",
      attrs: {
        "src": _vm.img + '/main/chars.jpg'
      }
    }), _c('img', {
      staticClass: "chars",
      attrs: {
        "src": _vm.img + '/main/chars.jpg'
      }
    })]), _c('img', {
      staticClass: "shadow",
      attrs: {
        "src": _vm.img + '/main/shadow.png'
      }
    })])
  }), _c('p', [_vm._v("按下指纹选择你的阅读主义")])], 2)
},staticRenderFns: []}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(165)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(167),
  /* scopeId */
  "data-v-61b69132",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
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

exports.default = {
	computed: {
		pic: function pic() {
			return this.$store.state.pic;
		},
		share_btn: function share_btn() {
			return this.$store.state.share_btn;
		},
		img: function img() {
			return this.$store.state.img;
		}
	},
	data: function data() {
		return {
			pressed: false
		};
	},
	methods: {
		touchstart: function touchstart() {
			this.pressed = true;
		},
		touchmove: function touchmove() {
			this.pressed = false;
		},
		touchend: function touchend() {
			if (this.pressed) {
				this.$store.dispatch({ type: 'SHARE_PIC' });
			};
			this.pressed = false;
		},
		touchcancel: function touchcancel() {
			this.pressed = false;
		}
	}
};

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.share_btn.show === true),
      expression: "share_btn.show===true"
    }],
    staticClass: "BtnShare",
    class: _vm.pressed ? 'pressed' : '',
    attrs: {
      "src": _vm.img + 'main/btn_share.png'
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend,
      "touchcancel": _vm.touchcancel
    }
  })
},staticRenderFns: []}

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__ rem_height",
    style: ('background-image:url(' + _vm.img + '/main/bg_factory.png);background-size:100% auto;'),
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_c('btn-share'), _c('controls'), _c('img', {
    staticClass: "arrow_left",
    attrs: {
      "src": _vm.img + '/main/arrow_left.png'
    },
    on: {
      "click": _vm.toPrev
    }
  }), _c('img', {
    staticClass: "arrow_right",
    attrs: {
      "src": _vm.img + '/main/arrow_right.png'
    },
    on: {
      "click": _vm.toNext
    }
  }), _c('div', {
    ref: "swiper",
    staticClass: "Swiper"
  }, [_c('img', {
    staticClass: "slogan",
    attrs: {
      "src": _vm.img + 'main/slogan/' + _vm.pic.slogan + '.png'
    }
  }), _c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 4 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/4.jpg'
    }
  })]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 5 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/5.jpg'
    }
  })]) : _vm._e(), _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      key: a.id,
      staticClass: "item",
      class: i === _vm.currentOne ? 'active' : ''
    }, [_c('img', {
      staticClass: "card",
      attrs: {
        "src": _vm.img + '/main/cards/' + i + '.jpg'
      }
    })])
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 0 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/0.jpg'
    }
  })]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 1 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/1.jpg'
    }
  })]) : _vm._e(), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(170)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(172),
  /* scopeId */
  "data-v-fb72cfb8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			cards: [{
				p: 0,
				bg: '#ed1c24'
			}, {
				p: 1,
				bg: '#0072bc'
			}, {
				p: -1,
				bg: '#39b54a'
			}],
			current: 0,
			rotateY: 0
		};
	},
	watch: {
		current: function current(nv) {}
	},
	methods: {
		next: function next() {
			this.cards.forEach(function (a) {
				if (a.p < 1) {
					a.p++;
				} else {
					a.p = -1;
				}
			});
			// this.current++;
		},
		prev: function prev() {
			this.rotateY += 60;
		}
	}
};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CarouselCards"
  }, [_c('div', {
    staticClass: "cards",
    style: ('transform: rotateY(' + _vm.rotateY + 'deg);-webkit-transform: rotateY(' + _vm.rotateY + 'deg);')
  }, _vm._l((_vm.cards), function(a, i) {
    return _c('div', {
      staticClass: "item",
      class: 'p_' + a.p,
      style: ('background:' + a.bg + ';')
    }, [_vm._v(_vm._s(i))])
  })), _c('div', {
    staticClass: "next",
    on: {
      "click": _vm.next
    }
  }, [_vm._v("Next")]), _c('div', {
    staticClass: "prev",
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("Prev")])])
},staticRenderFns: []}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(174)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  "data-v-d15add46",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
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

exports.default = {
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		pic: function pic() {
			return this.$store.state.pic;
		}
	},
	mounted: function mounted() {},
	methods: {}
};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "scale"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pic.done),
      expression: "pic.done"
    }],
    staticClass: "MaskDone"
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/' + (_vm.pic.bg) + '.jpg'
    }
  }), _c('img', {
    staticClass: "slogan",
    attrs: {
      "src": _vm.img + '/main/slogan/' + (_vm.pic.slogan) + '.png'
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change_main.stage === 'factory'),
      expression: " change_main.stage==='factory' "
    }],
    staticClass: "PageFactory rem_height"
  }, [_c('swiper-cards'), _c('mask-done')], 1)
},staticRenderFns: []}

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    }
  }, [_c('mask-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'pending'),
      expression: " page==='pending' "
    }]
  }), _c('mask-over', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'over'),
      expression: " page==='over' "
    }]
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main"
  }, [_c('mask-download'), _c('mask-rules'), _c('mask-form'), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: " show "
    }],
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/test/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'CLOSE_WINDOW'
        })
      }
    }
  }), _c('books-fall-two'), _c('page-entry'), _c('page-factory')], 1)], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);