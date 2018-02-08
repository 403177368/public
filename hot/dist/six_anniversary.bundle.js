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
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
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
/* 7 */,
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
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(181);

__webpack_require__(182);

__webpack_require__(183);
// import '../debugger.js';


Vue.component('app', __webpack_require__(184));

var root = new Vue({
  el: '#app',
  template: '<app></app>'
});

/***/ }),
/* 181 */
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
		$html.style.fontSize = 100 * w / 750 + 'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = location.href.replace(/act161203.+/, 'act161203/adr/');

window.DIR = {
	video: root + 'video/'
};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(186);

var _store = __webpack_require__(187);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Debugger: __webpack_require__(189),
    MaskLoading: __webpack_require__(193),
    MaskOver: __webpack_require__(197),

    Focus: __webpack_require__(201),

    MainBlock: __webpack_require__(205),
    MaskBooks: __webpack_require__(225)
  },
  data: function data() {
    return _store.data;
  },
  computed: {
    href: function href() {
      var self = this;
      return location.href
      // .replace( /http:\/\/solomotest4\.3g\.qq\.com/,'https://ptsolomo.reader.qq.com' )
      // .replace( /http:\/\/iyuedu\.qq\.com/,'https://yuedu.reader.qq.com' )
      .replace(/act161203.+/, 'act161203/com/share.html?tf=1&uid=' + self.uid + '&aid=' + self.current + '&act_f=161222&tl=' + self.tl);
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.act({ type: 'INIT' });
  },
  methods: {
    act: _store.act
  }
};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  dev: true,

  page: 'pending',

  what: function () {
    // var el = document.querySelector('[what]');
    // var val = el.getAttribute('what');
    // return val;
    return 'adr';
  }(),

  adr: function () {
    // var el = document.querySelector('[config]');
    // var val = el.getAttribute('config');
    // console.log(val)
    // return /adr/.test( val )?true:false
    return true;
  }(),

  ios: function () {
    // var el = document.querySelector('[config]');
    // var val = el.getAttribute('config');
    // console.log(val)
    // return /ios/.test( val )?true:false
    return false;
  }(),

  share: function () {
    // var el = document.querySelector('[config]');
    // var val = el.getAttribute('config');
    // return /share/.test( val )?true:false
    return false;
  }(),
  entry: function () {
    // var el = document.querySelector('[config]');
    // var val = el.getAttribute('config');
    // return /entry/.test( val )?true:false
    return false;
  }(),

  loggedIn: false,
  vip: false,
  uid: '',
  avatar: './img/default.jpg',

  stage: -1,
  mask_books: false,

  day: 0,
  current: 0,

  total: 0,

  writers: __webpack_require__(188).default,

  info: {
    time: 0,
    billsAvailable: 0,
    billsReceived: 0
  },

  tl: ''
};

function act(action) {
  var self = this;
  switch (action.type) {
    case 'CHANGE_STAGE':
      this.stage = action.n;
      break;
    case 'SWITCH':
      this.current = action.n;
      // Local.forceLog(common.param('act_f'), self.what + '_switch');
      break;
    case 'CHANGE_STATE':
      this.writers[action.i].state = action.state;
      break;
    case 'SET_LOADED':
      this.writers[action.i].loaded = true;
      break;

    case 'EXCHANGE':
      if (self.dev) {} else {
        if (!self.loggedIn) {
          self.act({
            type: 'LOGIN'
          });
        } else {
          if (!self.ios) {
            // Local.reqaObj('http://adr.reader.qq.com/6_2/weekReadTime/presentBilling', function(data) {
            //   if (data.code === 0) {
            //     Local.showToast('领取成功');
            //     location.href = location.href;
            //   } else {
            //     Local.showToast(data.msg);
            //   }
            // }, [], function() {
            //   Local.showToast('网络异常，请稍候重试');
            // }, 1);
          } else {
              // Local.reqaObj('https://ptbookios.reader.qq.com/v6_3_7/weekReadTime/presentBilling', function(data) {
              //   if (data.code === 0) {
              //     Local.showToast('领取成功');
              //     location.href = location.href;
              //   } else {
              //     Local.showToast(data.msg);
              //   }
              // }, [], function() {
              //   Local.showToast('网络异常，请稍候重试');
              // }, 1);
            }
        }
      }
      break;

    case 'PLAY_VIDEO':
      // Local.forceLog(common.param('act_f'), self.what + '_play_' + action.i);
      break;

    case 'INIT':
      if (self.dev) {
        self.day = 2;
        self.writers[6].unlocked = true;
        self.stage = 0;
        self.page = 'ready';
      } else {

        if (self.entry && self.ios) {
          // var client = common.param('client');
          if (client === 2 && client === 3) {
            if (window.iOSNative) {
              // iOSNative.customUI('红包','000000');
            }
          }
        }

        // 每次分享操作完成后，客户端将会自动调用的回调函数：
        // url：分享出去的链接，success:是否分享成功
        // window.afterShare = function(url, success) {
        //   // Local.showToast('分享成功！');
        //       // Local.reqaObj(common.server() + `pkg161203/pick?idx=${self.current}`, function(data) {
        //       //  if (data.code === 1) {
        //       //    self.writers[self.current].unlocked = true;
        //       //    self.total++;
        //       //  }
        //   }, [], function() {
        //     // Local.showToast('网络异常，请稍候重试');
        //   }, 1);
        // };

        // Local.forceLog(common.param('act_f'), self.what + '_enter');

        Local.reqaObj(common.server() + 'pkg161203/init', function (data) {
          console.log(data);

          self.loggedIn = data.isLogin;

          // self.day = data.index;
          // self.total = Number( data.totalFreeNumber );

          // if( data.isLogin ){
          //  if( data.hasFreeList ){
          //    data.hasFreeList.forEach(a=>{
          //      self.writers[Number(a)].unlocked = true;
          //    })
          //  };

          //  if( data.uid ){
          //    self.uid = data.uid;
          //  };
          //  if( data.userAvor ){
          //    self.avatar = data.userAvor;
          //  };
          // };

          // if( data.tl ){
          //  self.tl = data.tl;
          // };

          // if( data.code===-4 ){
          //  self.page = 'over';
          // }else{

          if (self.entry) {
            if (!self.ios) {
              Local.reqaObj('http://adr.reader.qq.com/6_2/getWeekReadTime', function (data) {
                console.log(data);
                self.info.time = data.weekExchangeInfo.weekReadTime;
                self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
                self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;

                self.page = 'ready';
                self.stage = 1;
              }, [], function () {
                Local.showToast('网络异常，请稍候重试');
              }, 1);
            } else {
              Local.reqaObj('https://ptbookios.reader.qq.com/v6_3_7/getWeekReadTime', function (data) {
                console.log(data);
                if (data.isLogin) {
                  self.info.time = data.weekExchangeInfo.weekReadTime;
                  self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
                  self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;
                }

                self.page = 'ready';
                self.stage = 1;
              }, [], function () {
                Local.showToast('网络异常，请稍候重试');
              }, 1);
            }
          } else {}
          // var href = location.href
          // .replace( /http:\/\/solomotest4\.3g\.qq\.com/,'https://ptsolomo.reader.qq.com' )
          // .replace( /http:\/\/iyuedu\.qq\.com/,'https://yuedu.reader.qq.com' )
          // .replace( /act161203.+/,`act161203/com/share.html?uid=${self.uid}&aid=${self.current}&act_f=act_f=161222` );
          // Local.setIconForShareing(
          //  self.href,
          //              location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
          //              '大神送祝福',
          //              'QQ阅读大神送祝福'
          // );

          // self.page = 'ready';
          // self.stage = 0;

          // };
        }, [], function () {
          Local.showToast('网络异常，请稍候重试');
        }, 1);
      }
      break;
    case 'MOCK':
      break;
    case 'LOGIN':
      if (self.dev) {
        self.loggedIn = true;
      } else {
        // Local.login();
      }
      break;

    case 'PICK':
      // Local.reqaObj(common.server() + `pkg161203/pick?idx=${self.current}`, function(data) {
      //   console.log(data);
      // }, [], function() {
      //   Local.showToast('网络异常，请稍候重试');
      // }, 1);
      break;

    case 'TO_BUY':
      // Local.forceLog(common.param('act_f'), 'THXbuy_' + action.bid);
      break;
    case 'MINUS':
      if (this.timeleft - 60000 > 0) {
        this.timeleft -= 60000;
      } else {
        this.timeleft = 0;
      }
      break;
    case 'TO_PLAY':
      // Local.openPage(self.href);
      break;

    case 'TO_JINGXUAN':
      // Local.forceLogTemp(self.page_no, 'to_shucheng', 0);
      // MtaH5.clickStat('to_shucheng', {
      //   'page': self.page_no
      // });
      // Local.toJingxuan();
      break;
    case 'TO_BAOYUE_ZONE':
      // Local.forceLogTemp(self.page_no, 'to_baoyuequ', 0);
      // MtaH5.clickStat('to_baoyuequ', {
      //   'page': self.page_no
      // });
      // Local.toBaoyueZone();
      break;

    case 'SHOW_MASK':
      this.mask_books = true;
      // Local.forceLog(common.param('act_f'), self.what + '_check');
      break;
    case 'HIDE_MASK':
      setTimeout(function () {
        self.mask_books = false;
      }, 300);
      break;
    case 'TO_DOWNLOAD':
      N.downLoad(null, '10003531');
      break;

    case '_TO_BOOK':
      if (!self.share) {
        // ABook.gotoDetail(action.bid);
      } else {
        self.act({
          type: 'SHOW_MASK'
        });
      }
      break;
    case '_SHARE':
      // console.log(location.href.replace(/svn/,''))
      if (self.dev) {
        if (!self.loggedIn) {
          self.loggedIn = true;
        } else {
          self.writers[self.current].unlocked = true;
        }
      } else {
        // Local.forceLog(common.param('act_f'), self.what + '_share_' + self.current);
        if (!self.loggedIn) {
          self.act({
            type: 'LOGIN'
          });
        } else {

          // Local.$share(
          //             self.href,
          //             location.href.replace(/act161203.+/, 'act161203/adr/img/qqreader.png'),
          //             'QQ阅读6周年，大神请客，经典免费读',
          //             '我领到免费神作，你也快来吧'
          //         );
        }
      }
      break;
  }
}

exports.data = data;
exports.act = act;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	id: 0,
	state: 'pending',
	loaded: false,
	name: '犁天',
	desc: '阅文旗下创世中文网大神作家',
	unlocked: false,
	books: [{
		bid: 13510168,
		title: '至高主宰',
		price: 51.82
	}, {
		bid: 483050,
		title: '不朽神王',
		price: 126.49
	}, {
		bid: 475518,
		title: '气冲星河',
		price: 144.48
	}]
}, {
	id: 1,
	state: 'pending',
	loaded: false,
	name: '血红',
	desc: '白金作家，擅长玄幻热血风格',
	unlocked: false,
	books: [{
		bid: 717341,
		title: '巫神纪',
		price: 158.99
	}, {
		bid: 462593,
		title: '三界血歌',
		price: 196.33
	}, {
		bid: 468921,
		title: '逍行纪',
		price: 96.48
	}]
}, {
	id: 2,
	state: 'pending',
	loaded: false,
	name: '鱼人二代',
	desc: '白金作家，都市小说第一人',
	unlocked: false,
	books: [{
		bid: 825477,
		title: '总裁校花爱上我',
		price: 47.71
	}, {
		bid: 501245,
		title: '极品修真强少',
		price: 187.33
	}, {
		bid: 467098,
		title: '很纯很暧昧',
		price: 327.89
	}]
}, {
	id: 3,
	state: 'pending',
	loaded: false,
	name: '骷髅精灵',
	desc: '大神级作者',
	unlocked: false,
	books: [{
		bid: 13694333,
		title: '斗战狂潮',
		price: 18.77
	}, {
		bid: 498380,
		title: '星战风暴',
		price: 179.03
	}, {
		bid: 486914,
		title: '圣堂',
		price: 118.42
	}]
}, {
	id: 4,
	state: 'pending',
	loaded: false,
	name: '叶非夜',
	desc: '白金作家，言情天后',
	unlocked: false,
	books: [{
		bid: 749834,
		title: '傲娇男神住我家：99次说爱你',
		price: 48.42
	}, {
		bid: 612464,
		title: '国民老公带回家',
		price: 41.19
	}]
}, {
	id: 5,
	state: 'pending',
	loaded: false,
	name: '冷青衫',
	desc: '人气白金作者',
	unlocked: false,
	books: [{
		bid: 421015,
		title: '一世倾城：冷宫弃妃',
		price: 267.45
	}, {
		bid: 424736,
		title: '少女太后：弃妇荣华',
		price: 24.85
	}, {
		bid: 407914,
		title: '冷宫欢',
		price: 31.48
	}]
}, {
	id: 6,
	state: 'pending',
	loaded: false,
	name: '公子衍',
	desc: '白金作家，文风搞怪，文笔诙谐',
	unlocked: false,
	books: [{
		bid: 727913,
		title: 'Hello，继承者',
		price: 125.73
	}, {
		bid: 536171,
		title: '娱乐大亨的秘宠：甜心小呆妻',
		price: 93.67
	}]
}, {
	id: 7,
	state: 'pending',
	loaded: false,
	name: '夜北',
	desc: '白金作者，古言大神',
	unlocked: false,
	books: [{
		bid: 626275,
		title: '绝世神医：腹黑大小姐',
		price: 150.61
	}, {
		bid: 236549,
		title: '绝世神偷：废柴七小姐',
		price: 134.17
	}]
}];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(192),
  /* scopeId */
  "data-v-7f012ab0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
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
/* 192 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(196),
  /* scopeId */
  "data-v-67f62479",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
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
/* 196 */
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
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(198)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(200),
  /* scopeId */
  "data-v-7cc0e0e7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
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
/* 200 */
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
      "src": 'img/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(204),
  /* scopeId */
  "data-v-26e9e53e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
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

exports.default = {
		props: ['stage', 'act'],
		components: {},
		data: function data() {
				return {
						img: '/img/six_anniversary/',

						penguin_0: '',
						penguin_1: '',
						bg_focus: ''
				};
		},
		created: function created() {},
		watch: {
				stage: function stage(new_val) {
						if (new_val === 0) {
								this.animate();
						}
				}
		},
		mounted: function mounted() {},
		methods: {
				animate: function animate() {
						var self = this;

						var penguin_0 = this.$refs.penguin_0;
						var penguin_1 = this.$refs.penguin_1;
						var penguin = this.$refs.penguin;
						var title_0 = this.$refs.title_0;
						var title_1 = this.$refs.title_1;
						var Focus = this.$refs.Focus;
						var group = this.$refs.group;

						var tl3 = new TimelineMax();
						tl3.fromTo(group, 1.5, {
								transformOrigin: '50% 50%',
								scale: 0.98
						}, {
								scale: 1.02
						}).to(group, 0.8, {
								scale: 1
						});

						var tl2 = new TimelineMax();
						tl2.to(title_0, 1, {
								opacity: 1
						}).to(title_1, 1, {
								opacity: 1
						});

						var tl = new TimelineMax();
						tl.fromTo(penguin_0, 0.6, {
								transformOrigin: '100% 100%',
								rotation: '50deg'
						}, {
								rotation: '0'
						}).to(penguin_0, 0.5, {
								x: '200%'
						}).fromTo(penguin_1, 0.6, {
								transformOrigin: '0% 100%',
								x: '-100%',
								rotation: '-50deg'
						}, {
								x: '0%',
								rotation: 0
						}).to(penguin_1, 0.5, {
								x: '-200%'
						}).fromTo(penguin, 0.5, {
								y: '50%'
						}, {
								y: '0%',
								onStart: function onStart() {},
								ease: Elastic
						}).fromTo(Focus, 0.3, {
								opacity: 1
						}, {
								opacity: 0,
								delay: 0.3
						}).to(Focus, 0.5, {
								opacity: 0.7,
								onComplete: this.CHANGE_STAGE.bind(this)
						});

						// setTimeout(()=>{
						// 	this.penguin_0 = 'active';
						// 	setTimeout(()=>{
						// 		this.penguin_1 = 'active';
						// 		setTimeout(()=>{
						// 			this.bg_focus = 'active';
						// 		},2000);
						// 	},2000);
						// },1000)
				},
				CHANGE_STAGE: function CHANGE_STAGE() {
						this.act({
								type: 'CHANGE_STAGE',
								n: 1
						});
				}
		}
};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "Focus",
    staticClass: "Focus"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.img + 'logo.png'
    }
  }), _c('div', {
    staticClass: "content"
  }, [_c('img', {
    staticClass: "bg_focus",
    class: _vm.bg_focus,
    attrs: {
      "src": _vm.img + 'bg_focus_2.png'
    }
  }), _c('div', {
    ref: "group",
    staticClass: "group"
  }, [_c('img', {
    staticClass: "man",
    attrs: {
      "src": _vm.img + 'man.png'
    }
  }), _c('img', {
    ref: "penguin",
    staticClass: "penguin",
    attrs: {
      "src": _vm.img + 'penguin_2.png'
    }
  }), _c('img', {
    staticClass: "shelf",
    attrs: {
      "src": _vm.img + 'shelf_2.png'
    }
  })])]), _c('img', {
    ref: "penguin_0",
    staticClass: "penguin_0",
    class: _vm.penguin_0,
    attrs: {
      "src": _vm.img + 'penguin_0_2.png'
    }
  }), _c('img', {
    ref: "penguin_1",
    staticClass: "penguin_1",
    class: _vm.penguin_1,
    attrs: {
      "src": _vm.img + 'penguin_1_2.png'
    }
  }), _c('img', {
    ref: "title_0",
    staticClass: "title_0",
    attrs: {
      "src": _vm.img + 'title_0.png'
    }
  }), _c('img', {
    ref: "title_1",
    staticClass: "title_1",
    attrs: {
      "src": _vm.img + 'title_1.png'
    }
  }), _c('img', {
    staticClass: "camera",
    attrs: {
      "src": _vm.img + 'camera.png'
    }
  }), _c('p', {
    staticClass: "skip",
    on: {
      "click": _vm.CHANGE_STAGE
    }
  }, [_vm._v("跳过 >")])])
},staticRenderFns: []}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(206)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(224),
  /* scopeId */
  "data-v-e8b89746",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
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

exports.default = {
		props: {
				writers: {},
				current: {},
				act: {},
				day: {},
				stage: {},
				total: {},
				entry: {},
				avatar: {},
				adr: {},
				info: {}
		},
		components: {
				Swiper: __webpack_require__(208),
				FreeBooks: __webpack_require__(216),
				Rules: __webpack_require__(220)
		},
		data: function data() {
				return {
						img: '/img/six_anniversary/'
				};
		},
		created: function created() {},
		watch: {},
		methods: {}
};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  "data-v-01366b3f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MyVideo: __webpack_require__(211)
  },
  props: {
    act: {},
    day: {},
    stage: {},
    yyb: {},
    items: {},
    style: {
      default: ''
    },
    carousel: {
      default: false
    },
    sticky: {
      default: false
    },
    autoplay: {
      default: false
    },
    duration: {
      default: 500
    },
    interval: {
      default: 1000
    },
    authors: {}
  },
  data: function data() {
    return _defineProperty({
      img: '/img/six_anniversary/',

      width: 0,

      // items: [],

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
    author: function author() {
      return this.items[this.currentOne].name;
    }
  },
  watch: {
    day: function day(newVal) {
      this.currentOne = newVal;
    },
    currentOne: function currentOne(new_val, old) {
      // console.log(new_val)
      this.act({
        type: 'SWITCH',
        n: new_val
      });
    },
    stage: function stage(neo) {
      var self = this;
      if (neo === 1) {

        var tl = new TimelineMax();
        var advice = this.$refs.advice;

        tl.fromTo(advice, 1, {
          opacity: 0
        }, {
          opacity: 1
        }).to(advice, 1, {
          opacity: 0.5
        }).to(advice, 1, {
          opacity: 1
        }).to(advice, 1, {
          opacity: 0,
          onComplete: function onComplete() {
            advice.style.display = 'none';
          }
        });

        var tl2 = new TimelineMax();
        var swiper = this.$refs.swiper;
        tl2.to(swiper, 0.5, {
          x: '-40%',
          rotation: '-3deg'
        }).to(swiper, 0.5, {
          x: '40%',
          rotation: '3deg'
        }).to(swiper, 0.5, {
          x: '0%',
          rotation: 0
          // ease: Bounce.easeOut
        });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // console.log(this.$refs)
    var self = this;
    // this.items = (function(){
    //  var items = JSON.parse( JSON.stringify(self.raw) );
    //  return items;
    // })();
    window.addEventListener('load', function () {
      _this.setWidth();
    });
    window.addEventListener('resize', function () {
      setTimeout(function () {
        _this.setWidth();
      }, 50);
    });
    if (this.autoplay) {
      setInterval(function () {
        if (!_this.inCycle) {
          _this.toNext();
        }
      }, this.interval);
    }
  },
  methods: {
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
    },
    toNext: function toNext() {
      var _this2 = this;

      if (true) {
        this.switching = true;
        this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
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
          }
          _this2.switching = false;
          _this2.inCycle = false;
        }, this.duration);
      }
    },
    toPrev: function toPrev() {
      var _this3 = this;

      this.switching = true;
      this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
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
        }
        _this3.switching = false;
        _this3.inCycle = false;
      }, this.duration);
    },
    toCard: function toCard(i) {
      var _this4 = this;

      this.currentOne = i;
      this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      this.trainOffsetX = -this.currentOne * this.width;
      setTimeout(function () {
        _this4.transition = '0s';
        _this4.switching = false;
        _this4.inCycle = false;
      }, this.duration);
    },
    touchstart: function touchstart(e) {
      console.log(this.inCycle);
      e.stopPropagation();
      if (!this.inCycle) {
        // begin a new cycle
        this.inCycle = true;
        // reset states of this touch cycle
        this.moveCount = 0;
        this.scrolling = false;
        this.transition = '0s';

        this.X0 = this.X1 = e.changedTouches[0].pageX;
        this.Y1 = e.changedTouches[0].pageY;
      }
    },
    touchmove: function touchmove(e) {
      e.stopPropagation();
      if (this.inCycle) {
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
            this.offset += distance;
            // console.log(this.trainOffsetX)
          }
        }
      }
    },
    touchend: function touchend(e) {
      e.stopPropagation();
      if (this.inCycle && !this.scrolling) {
        this.X2 = e.changedTouches[0].pageX;
        var distance = this.X2 - this.X0;
        if (distance < -5) {
          this.toNext();
        } else if (distance > 5) {
          this.toPrev();
        } else {
          if (!this.switching) {
            this.switching = false;
            this.inCycle = false;
          }
        }
      } else {
        this.switching = false;
        this.inCycle = false;
      }
    }
  }
};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(212)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(214),
  /* scopeId */
  "data-v-3b34a893",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
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

exports.default = {
  props: {
    video: {},
    current: {},
    act: {},
    yyb: {}
  },
  data: function data() {
    return {
      img: '/img/six_anniversary/',
      state: 'pending',
      loaded: false
    };
  },
  watch: {
    current: function current() {
      if (this.state !== 'pending') {
        this.state = 'ready';
      }
    },
    state: function state(_state) {
      var _this = this;

      var self = this;
      switch (_state) {
        case 'loading':
          var tl0 = new TimelineMax();

          // tl0.to( this.$refs.t0,1,{
          //  opacity: 1
          // }).to( this.$refs.t1,1,{
          //  opacity: 1
          // }).to( this.$refs.t2,1,{
          //  opacity: 1
          // }).to( this.$refs.t3,1,{
          //  opacity: 1
          // })

          tl0.to(this.$refs.t0, 0.6, {
            y: '-1000%',
            opacity: 1,
            ease: Expo.easeOut
          }).to(this.$refs.t1, 0.6, {
            y: '-900%',
            opacity: 1
          }).to(this.$refs.t2, 0.6, {
            y: '-800%',
            opacity: 1
          }).to(this.$refs.t3, 0.6, {
            y: '-700%',
            opacity: 1
          }).to(this.$refs.t4, 0.6, {
            y: '-600%',
            opacity: 1
          });

          var tlx = new TimelineMax();
          tlx.fromTo(self.$refs.progress, 0.6, {
            transformOrigin: '0% 0%',
            scaleX: 0
          }, {
            scaleX: 1
          }).fromTo(self.$refs.progress, 0.6, {
            transformOrigin: '0% 0%',
            scaleX: 0
          }, {
            scaleX: 1
          }).fromTo(self.$refs.progress, 0.6, {
            transformOrigin: '0% 0%',
            scaleX: 0
          }, {
            scaleX: 1
          }).fromTo(self.$refs.progress, 0.6, {
            transformOrigin: '0% 0%',
            scaleX: 0
          }, {
            scaleX: 1
          }).fromTo(self.$refs.progress, 0.6, {
            transformOrigin: '0% 0%',
            scaleX: 0
          }, {
            scaleX: 1
          }).to(self.$refs.progress, 0, {
            scaleX: 0
          });

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
            //  type: 'SET_LOADED',
            //  i: this.video.id
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
                  }
                }
              });
            }, 3000);
          });
          break;
        case 'ready':
          if (this.loaded) {
            this.$refs.video.pause();
            this.$refs.video.currentTime = 0;
          }
          break;
        case 'playing':
          self.$refs.video.play();
          break;
        case 'paused':
          this.$refs.video.pause();
          break;
      }
    }
  },
  computed: {
    src: function src() {
      return location.href.replace(/act161203.+/, 'act161203/video/' + this.video.id + '.mp4');
    }
  },
  mounted: function mounted() {},
  methods: {
    PLAY: function PLAY(e) {
      this.act({
        type: 'PLAY_VIDEO',
        i: this.video.id
      });
      e.stopPropagation();
      var self = this;
      if (this.state === 'pending') {
        if (!this.loaded) {
          self.state = 'loading';
        }
      } else if (this.state === 'ready') {
        self.state = 'playing';
      } else if (this.state === 'paused') {
        self.state = 'playing';
      }
    },
    PAUSE: function PAUSE() {
      if (this.$refs.video.ended) {
        this.$refs.video.play();
      } else {
        this.state = 'paused';
      }
    }
  }
};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MyVideo"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.yyb && _vm.state !== 'playing' && _vm.state !== 'loading'),
      expression: " !yyb&&state!=='playing'&&state!=='loading' "
    }],
    staticClass: "play",
    attrs: {
      "src": _vm.img + 'play_2.png'
    },
    on: {
      "click": function($event) {
        _vm.PLAY($event)
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'pending' || _vm.state === 'loading' || _vm.state === 'ready'),
      expression: " state==='pending'||state==='loading'||state==='ready' "
    }],
    staticClass: "bob",
    attrs: {
      "src": _vm.img + 'cards/' + _vm.video.id + '.jpg'
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'loading'),
      expression: " state==='loading' "
    }],
    staticClass: "loading"
  }, [_c('p', {
    ref: "t0",
    staticClass: "text text_0"
  }, [_vm._v("大神开始试妆")]), _c('p', {
    ref: "t1",
    staticClass: "text text_1"
  }, [_vm._v("大神正在准备台词")]), _c('p', {
    ref: "t2",
    staticClass: "text text_2"
  }, [_vm._v("导演摄影已到位")]), _c('p', {
    ref: "t3",
    staticClass: "text text_3"
  }, [_vm._v("大神正在酝酿情绪")]), _c('p', {
    ref: "t4",
    staticClass: "text text_4"
  }, [_vm._v("准备好了")]), _c('p', {
    ref: "t5",
    staticClass: "text text_5"
  }, [_vm._v("action!")]), _c('div', {
    ref: "progress",
    staticClass: "progress",
    class: _vm.state === 'loading' ? '_loading' : ''
  })]), _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing' || _vm.state === 'paused'),
      expression: " state==='playing'||state==='paused' "
    }],
    ref: "video",
    attrs: {
      "src": "./video/2.mp4",
      "preload": "metadata"
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4"
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing' || _vm.state === 'paused'),
      expression: " state==='playing'||state==='paused' "
    }],
    staticClass: "glass",
    on: {
      "click": function($event) {
        _vm.PAUSE()
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__"
  }, [_c('div', {
    staticClass: "blurred"
  }, _vm._l((8), function(n) {
    return _c('img', {
      ref: "blurred_img",
      refInFor: true,
      class: n === _vm.currentOne + 1 ? 'active' : '',
      attrs: {
        "src": _vm.img + 'blurred_bg/' + (n - 1) + '.jpg'
      }
    })
  })), _c('div', {
    ref: "swiper",
    staticClass: "Swiper",
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
  }, _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      key: a.id,
      staticClass: "item",
      class: (i === _vm.currentOne ? 'current ' : ' ') +
        (i === _vm.currentOne - 1 ? 'prev ' : ' ') +
        (i === _vm.currentOne + 1 ? 'next ' : ' ') +
        (i > _vm.currentOne + 1 ? 'right ' : ' ') +
        (i < _vm.currentOne - 1 ? 'left ' : ' ')
    }, [_c('my-video', {
      attrs: {
        "video": a,
        "act": _vm.act,
        "current": _vm.currentOne,
        "yyb": _vm.yyb
      }
    })], 1)
  })), _c('p', {
    ref: "advice",
    staticClass: "advice__"
  }, [_vm._v("建议在wifi环境下观看")]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentOne < _vm.items.length - 1),
      expression: "currentOne<items.length-1"
    }],
    staticClass: "arrow arrow_right",
    attrs: {
      "src": _vm.img + 'arrow_right.png'
    },
    on: {
      "click": _vm.toNext
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentOne > 0),
      expression: "currentOne>0"
    }],
    staticClass: "arrow arrow_left",
    attrs: {
      "src": _vm.img + 'arrow_left.png'
    },
    on: {
      "click": _vm.toPrev
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(218),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  "data-v-372476b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
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

exports.default = {
		props: {
				writers: {},
				current: {},
				act: {},
				total: {},
				yyb: {}
		},
		components: {},
		data: function data() {
				return {
						img: '/img/six_anniversary/'
				};
		},

		computed: {
				books: function books() {
						return this.writers[this.current].books;
				},
				unlocked: function unlocked() {
						return this.writers[this.current].unlocked;
				}
		},
		methods: {
				SHOW_MASK: function SHOW_MASK() {
						this.act({
								type: 'SHOW_MASK'
						});
				},
				_TO_BOOK: function _TO_BOOK(bid) {
						this.act({
								type: '_TO_BOOK',
								bid: bid
						});
				},
				_SHARE: function _SHARE() {
						this.act({
								type: '_SHARE'
						});
				}
		}
};

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FreeBooks"
  }, [_c('div', {
    staticClass: "textBellow"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.writers[_vm.current].name))]), _c('p', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.writers[_vm.current].desc))])]), _c('div', {
    staticClass: "books_container"
  }, _vm._l((_vm.writers), function(a, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i === _vm.current),
        expression: " i===current "
      }],
      staticClass: "books"
    }, _vm._l((a.books), function(b) {
      return _c('div', {
        staticClass: "book"
      }, [_c('div', {
        staticClass: "cover",
        on: {
          "click": function($event) {
            _vm._TO_BOOK(b.bid)
          }
        }
      }, [_c('img', {
        staticClass: "cover_img",
        attrs: {
          "src": _vm.img + 'covers/x_' + b.bid + '.jpg'
        }
      }), _c('img', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (!_vm.yyb && !a.unlocked),
          expression: " !yyb&&!a.unlocked "
        }],
        staticClass: "lock",
        attrs: {
          "src": _vm.img + 'lock.png'
        }
      }), _c('p', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (!_vm.yyb && a.unlocked),
          expression: " !yyb&&a.unlocked "
        }],
        staticClass: "orange"
      }, [_vm._v("已7天限免")])]), _c('p', {
        staticClass: "title"
      }, [_vm._v(_vm._s(b.title))]), _c('p', {
        staticClass: "price"
      }, [_vm._v(_vm._s(b.price) + "元")])])
    }))
  })), (!_vm.yyb) ? _c('div', {
    staticClass: "buttons"
  }, [_c('img', {
    staticClass: "share_btn",
    attrs: {
      "src": _vm.img + 'btn_share.png'
    },
    on: {
      "click": _vm._SHARE
    }
  }), (!_vm.yyb) ? _c('p', {
    staticClass: "how_many"
  }, [_vm._v("已有"), _c('span', [_vm._v(_vm._s(_vm.total))]), _vm._v("人获得限时免费")]) : _vm._e()]) : _vm._e(), (!_vm.yyb) ? _c('p', {
    staticClass: "notice"
  }, [_vm._v("分享到平台后点击"), _c('span', [_vm._v("「返回QQ阅读」")]), _vm._v("方可享受限免")]) : _vm._e(), (!_vm.yyb) ? _c('img', {
    staticClass: "check_btn",
    attrs: {
      "src": _vm.img + 'check_btn.png'
    },
    on: {
      "click": _vm.SHOW_MASK
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  "data-v-0fd1da00",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
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

exports.default = {
	props: ['adr']
};

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n\t\t\t活动规则\n\t\t")]), _vm._m(0), _vm._m(1), (!_vm.adr) ? _c('p', [_c('span', [_vm._v("3.")]), _vm._v("iOS游客用户无法参加本次活动。")]) : _vm._e(), _c('p', [_c('span', [_vm._v(_vm._s(_vm.adr ? '3.' : '4.'))]), _vm._v("活动结束后，再分享时将无法获得相关免费权益。")]), _c('div', {
    staticClass: "copyright"
  }, [_vm._v("\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("1.")]), _vm._v("2016年12月23日15点-2016年12月30日24点。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("2.")]), _vm._v("用户成功分享活动后，即可获得对应大神书籍的7天限时免费阅读权。")])
}]}

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MainBlock"
  }, [(_vm.entry) ? _c('img', {
    staticClass: "ice",
    attrs: {
      "src": _vm.img + 'ice.png'
    }
  }) : _vm._e(), (_vm.entry) ? _c('div', {
    staticClass: "entry",
    staticStyle: {
      "background": "url(img/bg_exchange_2.png)",
      "background-size": "100% auto"
    }
  }, [_c('div', {
    staticClass: "entry_main"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.avatar
    }
  })]), _c('p', {
    staticClass: "time"
  }, [_vm._v("本周阅读时长：" + _vm._s(_vm.info.time) + "分钟")]), _c('div', {
    staticClass: "billsAvailable"
  }, [_c('img', {
    staticClass: "coin",
    attrs: {
      "src": 'img/coin.png'
    }
  }), _c('span', [_vm._v("当前可兑换：" + _vm._s(_vm.info.billsAvailable) + "书券")])]), _c('div', {
    staticClass: "exchange"
  }, [_c('img', {
    staticClass: "btn_exchange",
    attrs: {
      "src": _vm.img + 'btn_exchange.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'EXCHANGE'
        })
      }
    }
  }), _c('p', {
    staticClass: "billsReceived"
  }, [_vm._v("本周已兑换" + _vm._s(_vm.info.billsReceived) + "书券")])])])]) : _vm._e(), _c('div', {
    staticClass: "index_part"
  }, [_c('swiper', {
    attrs: {
      "items": _vm.writers,
      "act": _vm.act,
      "stage": _vm.stage,
      "day": _vm.day
    }
  }), _c('div', {
    staticClass: "lower_part",
    style: ('background:url(' + _vm.img + 'main_bg_2.png);background-size:100% auto;')
  }, [_c('img', {
    staticClass: "text_snowman",
    attrs: {
      "src": _vm.img + 'text_snowman.png'
    }
  }), _c('free-books', {
    attrs: {
      "writers": _vm.writers,
      "current": _vm.current,
      "total": _vm.total,
      "act": _vm.act
    }
  }), _c('rules', {
    attrs: {
      "adr": _vm.adr
    }
  })], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(227),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  "data-v-751d37b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  props: {
    act: {},
    writers: {}
  },
  data: function data() {
    return {
      img: '/img/six_anniversary/'
    };
  },
  computed: {
    books: function books() {
      var books = [];
      this.writers.forEach(function (a) {
        if (a.unlocked) {
          books.push.apply(books, _toConsumableArray(a.books));
        }
      });
      return books;
    }
  },
  methods: {
    HIDE_MASK: function HIDE_MASK() {
      this.act({
        type: 'HIDE_MASK'
      });
    },
    touchmove: function touchmove(e) {
      e.stopPropagation();
    }
  }
};

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskInfo",
    on: {
      "touchmove": _vm.touchmove
    }
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667",
    style: ('background:url(' + _vm.img + 'panel_books.png);background-size:100% 100%;')
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + 'close.png'
    },
    on: {
      "click": _vm.HIDE_MASK
    }
  }), (_vm.books.length === 0) ? _c('p', {
    staticClass: "empty"
  }, [_vm._v("尚未有解锁限免权的书籍")]) : _vm._e(), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.books), function(a) {
    return _c('div', {
      staticClass: "item"
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": _vm.img + 'covers/x_' + a.bid + '.jpg'
      },
      on: {
        "click": function($event) {
          _vm.act({
            type: '_TO_BOOK',
            bid: a.bid
          })
        }
      }
    }), _c('div', {
      staticClass: "right"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(a.title))]), _c('img', {
      staticClass: "pill",
      attrs: {
        "src": _vm.img + 'pill.png'
      }
    })])])
  }))])])])
},staticRenderFns: []}

/***/ }),
/* 229 */
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
  }, [_c('mask-books', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_books),
      expression: " mask_books "
    }],
    attrs: {
      "writers": _vm.writers,
      "act": _vm.act
    }
  }), _c('focus', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stage === 0),
      expression: " stage===0 "
    }],
    attrs: {
      "stage": _vm.stage,
      "act": _vm.act
    }
  }), _c('main-block', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stage === 1),
      expression: " stage===1 "
    }],
    attrs: {
      "writers": _vm.writers,
      "current": _vm.current,
      "day": _vm.day,
      "avatar": _vm.avatar,
      "info": _vm.info,
      "entry": _vm.entry,
      "total": _vm.total,
      "stage": _vm.stage,
      "adr": _vm.adr,
      "act": _vm.act
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);