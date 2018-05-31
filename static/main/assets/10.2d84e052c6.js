webpackJsonp([10],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(369)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(371),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  "data-v-e2f22a1c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(180), __esModule: true };

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(181);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e2f22a1c&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e2f22a1c&scoped=true!../../../../../../../node_modules/postcss-loader/index.js!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\nsvg[data-v-e2f22a1c] {\n  box-sizing: border-box;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(372);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(373);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(53);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(54);

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

exports.default = {
  components: {},
  watch: {
    $route: function $route() {
      // window.scroll(0, 0);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('app/load_script', { src: '/vendor/d3/d3.min.js' });

            case 2:
              console.log('d3 loaded');
              _this.initSvg();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: {
    initSvg: function initSvg() {

      var d3 = window.d3;

      var ForceChart = function () {
        function ForceChart(options) {
          (0, _classCallCheck3.default)(this, ForceChart);

          this.el = options.el;
          this.data = options.data;

          this.containerWidth = this.el.parentElement.offsetWidth;
          this.margin = { top: 60, right: 60, bottom: 60, left: 60 };
          this.width = this.containerWidth - this.margin.left - this.margin.right;
          this.height = 700 - this.margin.top - this.margin.bottom;

          this.color = d3.scaleOrdinal(d3.schemeCategory20);

          this.init();
        }

        (0, _createClass3.default)(ForceChart, [{
          key: 'init',
          value: function init() {
            this.chart = d3.select(this.el).attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom);
            this.graph = this.chart.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            // Create the simulation:
            this.simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d, i) {
              return i;
            }).distance(function (d) {
              return d.value * 50;
            })).force('charge', d3.forceManyBody()).force('center', d3.forceCenter(this.width / 2, this.height / 2));

            this.simulation.nodes(this.data.nodes);
            this.simulation.force('link').links(this.data.edges);
            this.simulation.on('tick', this.tick.bind(this));

            this.createLinks();
            this.createNodes();
            this.addTitle();
          }
        }, {
          key: 'createLinks',
          value: function createLinks() {
            // Draw the links:
            this.links = this.graph.append('g').attr('class', 'links').selectAll('line').data(this.data.edges).enter().append('line');

            this.show_links();

            // Draw the texts:
            this.linkTexts = this.graph.append('g').attr('class', 'link-text').selectAll('text').data(this.data.edges).enter().append('text').text(function (d) {
              return d.relation;
            }).style('fill-opacity', 0);
          }
        }, {
          key: 'createNodes',
          value: function createNodes() {
            var _this2 = this;

            this.nodes = this.graph.append('g') // 画圆圈和文字
            .attr('class', 'nodes').selectAll('g').data(this.data.nodes).enter().append('g').on('mouseover', function (d, i) {
              // Show text on the link:
              _this2.linkTexts.style('fill-opacity', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return 1;
                } else {
                  return 0;
                }
              });
              // Bold the link:
              _this2.links.style('stroke-width', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return '2px';
                } else {
                  return '1px';
                }
              }).style('stroke', function (edge) {
                if (edge.source === d || edge.target === d) {
                  return 'red';
                } else {
                  return 'grey';
                }
              });
            }).on('mouseout', function (d, i) {
              // 隐去连接线上的文字
              _this2.linkTexts.style('fill-opacity', function (edge) {
                // if (edge.source === d || edge.target === d) {
                return 0;
                // }
              });
              _this2.show_links();
            }).call(d3.drag().on('start', this.dragstart.bind(this)).on('drag', this.dragmove.bind(this)).on('end', this.dragend.bind(this)));

            this.nodes.append('circle').attr('r', function (item) {
              // console.log(item);
              if (item.index <= 3) {
                return 8;
              } else {
                return 3;
              }
            }).attr('fill', function (d, i) {
              return _this2.color(i);
            });

            this.nodes.append('text').attr('fill', function (d, i) {
              return _this2.color(i);
            }).attr('y', -20).attr('dy', '.71em').text(function (d) {
              return d.name;
            });
          }
        }, {
          key: 'addTitle',
          value: function addTitle() {
            // Add title:
            this.chart.append('g')
            // .attr('class', 'bar--title')
            .append('text').attr('fill', '#000').attr('font-size', '16px').attr('font-weight', '700').attr('text-anchor', 'middle').attr('x', this.containerWidth / 2).attr('y', 20).text('Relationships');
          }
        }, {
          key: 'tick',
          value: function tick() {
            this.links.attr('x1', function (d) {
              return d.source.x;
            }).attr('y1', function (d) {
              return d.source.y;
            }).attr('x2', function (d) {
              return d.target.x;
            }).attr('y2', function (d) {
              return d.target.y;
            });
            this.linkTexts.attr('x', function (d) {
              return (d.source.x + d.target.x) / 2;
            }).attr('y', function (d) {
              return (d.source.y + d.target.y) / 2;
            });
            this.nodes.attr('transform', function (d) {
              return 'translate(' + d.x + ',' + d.y + ')';
            });
          }
        }, {
          key: 'show_links',
          value: function show_links() {
            this.links.style('stroke-width', '1px').style('stroke-opacity', 0.2).style('stroke', 'grey');
          }
        }, {
          key: 'dragstart',
          value: function dragstart(d) {
            if (!d3.event.active) {
              this.simulation.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
          }
        }, {
          key: 'dragmove',
          value: function dragmove(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
        }, {
          key: 'dragend',
          value: function dragend(d) {
            if (!d3.event.active) {
              this.simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
          }
        }]);
        return ForceChart;
      }();
      // var el_ = this.$refs.svg;
      // const containerWidth = el_.parentElement.offsetWidth;


      var data = {
        nodes: [{ name: 'Jon' }, { name: 'Tyrion' }, { name: 'Daenerys' }, { name: 'Jamie' }, { name: 'Bran' }],
        edges: [// value越小关系越近
        { 'source': 0, 'target': 1, 'relation': 'friends', value: 3 }, { 'source': 0, 'target': 2, 'relation': 'lovers', value: 3 }, { 'source': 0, 'target': 4, 'relation': 'brothers', value: 3 }, { 'source': 1, 'target': 2, 'relation': 'serve', value: 3 }, { 'source': 1, 'target': 3, 'relation': 'brothers', value: 3 }]
      };

      new ForceChart({
        el: this.$refs.svg,
        data: data
      });
      // const margin = { top: 60, right: 60, bottom: 60, left: 60 };
      // const width = containerWidth - margin.left - margin.right;
      // const height = 700 - margin.top - margin.bottom;
      // let chart = d3
      //   .select(el_)
      //   .attr('width', width + margin.left + margin.right)
      //   .attr('height', height + margin.top + margin.bottom);
      // let g = chart
      //   .append('g')
      //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // 设最外包层在总图上的相对位置

      // // Create the simulation:
      // let simulation = d3.forceSimulation()
      //   .force('link', d3.forceLink()
      //     .id(function(d, i) { return i; })
      //     .distance((d) => { return d.value * 50; }))
      //   .force('charge', d3.forceManyBody())
      //   .force('center', d3.forceCenter(width / 2, height / 2));


      // simulation // 初始化力导向图
      //   .nodes(data.nodes)
      //   .on('tick', ticked);

      // simulation.force('link')
      //   .links(data.edges);

      // let z = d3.scaleOrdinal(d3.schemeCategory20); // 通用线条的颜色 

      // let link = g.append('g') // 画连接线
      //   .attr('class', 'links')
      //   .selectAll('line')
      //   .data(data.edges)
      //   .enter()
      //   .append('line');

      // show_links();

      // function show_links() {
      //   link.style('stroke-width', '1px')
      //     .style('stroke-opacity', 0.2)
      //     .style('stroke', 'grey');
      // }

      // let linkText = g.append('g') // 画连接连上面的关系文字
      //   .attr('class', 'link-text')
      //   .selectAll('text')
      //   .data(data.edges)
      //   .enter().append('text')
      //   .text(function(d) {
      //     return d.relation;
      //   })
      //   .style('fill-opacity', 0);

      // let node = g.append('g') // 画圆圈和文字
      //   .attr('class', 'nodes')
      //   .selectAll('g')
      //   .data(data.nodes)
      //   .enter().append('g')
      //   .on('mouseover', (d, i) => {
      //     // Show text on the link:
      //     linkText.style('fill-opacity', function(edge) {
      //       if (edge.source === d || edge.target === d) {
      //         return 1;
      //       } else {
      //         return 0;
      //       }
      //     });
      //     // Bold the link:
      //     link.style('stroke-width', (edge) => {
      //       if (edge.source === d || edge.target === d) {
      //         return '2px';
      //       } else {
      //         return '1px';
      //       }
      //     }).style('stroke', (edge) => {
      //       if (edge.source === d || edge.target === d) {
      //         return 'red';
      //       } else {
      //         return 'grey';
      //       }
      //     });
      //   })
      //   .on('mouseout', function(d, i) {
      //     // 隐去连接线上的文字
      //     linkText.style('fill-opacity', function(edge) {
      //       // if (edge.source === d || edge.target === d) {
      //       return 0;
      //       // }
      //     });
      //     show_links();
      //   })
      //   .call(d3.drag()
      //     .on('start', dragstarted)
      //     .on('drag', dragged)
      //     .on('end', dragended));

      // node.append('circle')
      //   .attr('r', item => {
      //     // console.log(item);
      //     if (item.index <= 3) {
      //       return 8;
      //     } else {
      //       return 3;
      //     }
      //   })
      //   .attr('fill', function(d, i) { return z(i); });

      // node.append('text')
      //   .attr('fill', function(d, i) { return z(i); })
      //   .attr('y', -20)
      //   .attr('dy', '.71em')
      //   .text(function(d) { return d.name; });

      // // Add title:
      // chart.append('g')
      //   .attr('class', 'bar--title')
      //   .append('text')
      //   .attr('fill', '#000')
      //   .attr('font-size', '16px')
      //   .attr('font-weight', '700')
      //   .attr('text-anchor', 'middle')
      //   .attr('x', containerWidth / 2)
      //   .attr('y', 20)
      //   .text('Relationships');

      // function ticked() { // 力导向图变化函数，让力学图不断更新
      //   link
      //     .attr('x1', function(d) { return d.source.x; })
      //     .attr('y1', function(d) { return d.source.y; })
      //     .attr('x2', function(d) { return d.target.x; })
      //     .attr('y2', function(d) { return d.target.y; });
      //   linkText
      //     .attr('x', function(d) { return (d.source.x + d.target.x) / 2; })
      //     .attr('y', function(d) { return (d.source.y + d.target.y) / 2; });
      //   node
      //     .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
      // }

      // function dragstarted(d) {
      //   if (!d3.event.active) {
      //     simulation.alphaTarget(0.3).restart();
      //   }
      //   d.fx = d.x;
      //   d.fy = d.y;
      // }

      // function dragged(d) {
      //   d.fx = d3.event.x;
      //   d.fy = d3.event.y;
      // }

      // function dragended(d) {
      //   if (!d3.event.active) {
      //     simulation.alphaTarget(0);
      //   }
      //   d.fx = null;
      //   d.fy = null;
      // }
    }
  }
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(179);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "route-d3 container-fluid",
    staticStyle: {
      "padding-top": "15px"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _c('br'), _vm._v("\n      d3 - ForceChart\n    ")], 1)]), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('svg', {
    ref: "svg"
  })])])])
},staticRenderFns: []}

/***/ })

});