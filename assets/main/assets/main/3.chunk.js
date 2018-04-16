webpackJsonp([3],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(280)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(282),
  /* scopeId */
  "data-v-bd9c99de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 144:
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

module.exports = __webpack_require__(145);

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

/***/ 145:
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(49);

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

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(51);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(50);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _binance = __webpack_require__(148);

var _binance2 = _interopRequireDefault(_binance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  inited: false,
  box: {
    tabs: ['Echojs', '简书', 'Cnode'],
    current: 0
  },
  items: [],
  jianshu: {
    inited: false,
    items: []
  },
  echojs: {
    inited: false,
    items: []
  },
  coins: {
    status: 'Waiting',
    start_time: null,
    pairs: function () {
      return [{
        key: 'BTC / USDT',
        symbol: 'tBTCUSD'
      }, {
        key: 'BCH / USDT',
        symbol: 'tBCHUSD'
      }, {
        key: 'LTC / USDT',
        symbol: 'tLTCUSD'
      }, {
        key: 'ETH / USDT',
        symbol: 'tETHUSD'
      }, {
        key: 'XRP / USDT',
        symbol: 'tXRPUSD'
      }, {
        key: 'EOS / USDT',
        symbol: 'tEOSUSD'
      }, {
        key: 'IOTA / USDT',
        symbol: 'tIOTUSD'
      }, {
        key: 'ETC / USDT',
        symbol: 'tETCUSD'
      }, {
        key: 'NEO / USDT',
        symbol: 'tNEOUSD'
      }, {
        key: 'QTUM / USDT',
        symbol: 'tQTMUSD'
      }, {
        key: 'BTG / USDT',
        symbol: 'tBTGUSD'
      }].map(function (a) {
        return (0, _extends3.default)(a, {
          id: 0,
          last_price: 0,
          prices: [],
          sum: 0,
          percent: [],
          color: ''
        });
      });
    }()
  },
  okex: {
    status: '',
    pairs: [{
      key: 'BCH/USDT',
      last_price: 0
    }]
  }
};
// import CryptoJS from './hmac-sha256.js';
// import './enc-base64-min.js';
exports.default = {
  namespaced: true,
  state: state,
  modules: {
    binance: _binance2.default
  },
  actions: {
    init: function init(_ref) {
      var state = _ref.state,
          dispatch = _ref.dispatch;

      if (state.inited === false) {
        return _axios2.default.all([
          // dispatch('main/posts/init', null, { root: true }),
          // dispatch('fetch_jianshu')
        ]).then(function () {
          state.inited = true;
        });
      }
    },
    initAtClient: function initAtClient() {},
    initWebSocket: function initWebSocket(_ref2) {
      var state = _ref2.state,
          dispatch = _ref2.dispatch;

      if (state.coins.status === 'Waiting') {
        try {
          //  Try to establish the WebSocket connection
          var ws = new WebSocket('wss://api.bitfinex.com/ws/2');
          ws.onopen = function (event) {
            state.coins.status = 'Connected';
            console.log('Connection established. ' + this.readyState);

            // Send messages
            state.coins.pairs.forEach(function (a) {
              ws.send((0, _stringify2.default)({
                event: 'subscribe',
                channel: 'ticker',
                symbol: a.symbol
                // symbols: ['tBTCUSD', 'tBTGUSD']
              }));
            });
          };
          ws.onmessage = function (event) {
            // console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            if (obj.pair) {
              state.coins.pairs.forEach(function (a) {
                if (obj.symbol === a.symbol) {
                  a.id = obj.chanId;
                }
              });
            } else {
              if (Array.isArray(obj[1])) {
                // Update 
                var update = function update() {
                  state.coins.pairs.forEach(function (a) {
                    a.prices.length = 0;
                    a.percent.push('');
                    if (a.percent.length > 5) {
                      a.percent.shift();
                    }
                  });
                  state.coins.start_time = now;
                };

                var last = state.coins.start_time;
                var now = new Date().getTime();
                if (!last) {
                  update();
                } else if (now - last > 180000) {
                  update();
                }

                state.coins.pairs.forEach(function (a) {
                  if (obj[0] === a.id) {
                    var price = obj[1][6];
                    if (price > a.last_price) {
                      a.color = 'green';
                    } else {
                      a.color = 'red';
                    }
                    a.last_price = price;
                    a.prices.push(price);
                    if (a.prices.length > 1) {
                      var start = a.prices[0];
                      var end = a.prices[a.prices.length - 1];
                      a.percent[a.percent.length - 1] = ((end - start) / start * 100).toFixed(2);
                      // console.log(a.percent);
                    }
                    a.sum = a.percent.reduce(function (sum, b) {
                      return sum + Number(b);
                    }, 0).toFixed(2);
                  }
                });
              }
            }
          };
          ws.onclose = function (event) {
            state.coins.status = 'Disconnected';
            state.coins.pairs.forEach(function (a) {
              a.last_price = 0;
              a.color = 'black';
            });
            console.log('Disconnected: ' + this.readyState);
          };
          ws.onerror = function (event) {
            state.coins.pairs.forEach(function (a) {
              a.last_price = 0;
              a.color = 'black';
            });
            state.coins.status = 'Errored';
            console.log('Errored!');
          };
        } catch (e) {
          alert(e.message);
        }
      }
    },
    initOkex: function initOkex(_ref3) {
      var state = _ref3.state;

      if (state.okex.status === '') {
        try {
          var ws = new WebSocket('wss://real.okex.com:10441/websocket');
          ws.onopen = function (event) {
            state.okex.status = 'connected';
            console.log('Connection established. ' + this.readyState);

            ws.send((0, _stringify2.default)({
              event: 'addChannel',
              channel: 'ok_sub_spot_bch_usdt_ticker'
              // binary: 1
            }));
          };
          ws.onmessage = function (event) {
            console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            // if (obj.pair) {
            //   if (obj.pair === 'BTCUSD') {
            //     state.coins.pairs[0].id = obj.chanId;
            //   }
            //   if (obj.pair === 'BTGUSD') {
            //     state.coins.pairs[1].id = obj.chanId;
            //   }
            // } else {
            //   if (Array.isArray(obj[1])) {
            //     state.coins.pairs.forEach(a => {
            //       if (obj[0] === a.id) {
            //         a.last_price = obj[1][6];
            //       }
            //     })
            //   }
            // }
          };
          ws.onclose = function (event) {
            state.okex.status = '';
            console.log('Disconnected: ' + this.readyState);
          };
          ws.onerror = function (event) {
            console.log('Errored!');
          };
        } catch (e) {
          alert(e.message);
        }
      }
    },
    fetch: function fetch(_ref4, _ref5) {
      var state = _ref4.state;
      var what = _ref5.what;

      // axios({
      //   url: `https://www.okex.com/api/v1/ticker.do?symbol=ltc_btc`,
      //   // this is essential cause a fetch request is without cookie by default
      //   withCredentials: true,
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   mode: 'cors',
      // }).then(res => {
      //   // state[what].inited = true;
      //   // state[what].items.length = 0;
      //   // state[what].items.push(...res.data.data);
      // })
      if (state[what].inited === true) {
        return _promise2.default.resolve();
      } else {
        return (0, _axios2.default)({
          url: '/api/crawler/' + what + '/',
          // this is essential cause a fetch request is without cookie by default
          withCredentials: true,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        }).then(function (res) {
          var _state$what$items;

          state[what].inited = true;
          state[what].items.length = 0;
          (_state$what$items = state[what].items).push.apply(_state$what$items, (0, _toConsumableArray3.default)(res.data.data));
        });
      }
    },
    switch_tab: function switch_tab(_ref6, _ref7) {
      var state = _ref6.state,
          dispatch = _ref6.dispatch;
      var i = _ref7.i;

      state.box.current = i;
      if (i === 0) {
        dispatch('fetch', { what: 'jianshu' });
      } else if (i === 1) {
        dispatch('fetch', { what: 'echojs' });
      }
    }
  },
  mutations: {}
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(50);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(29);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(149);

var _keys2 = _interopRequireDefault(_keys);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  inited: false,
  status: 'Waiting',
  ratio: 0,
  watching: false,
  alerting: false,
  alert_text: '',
  items: function () {
    var obj = {
      btcusdt: {
        key: 'BTC / USDT',
        symbol: 'BTCUSDT'
      },
      bccusdt: {
        key: 'BCC / USDT',
        symbol: 'BCCUSDT',
        target: 2389
      },
      ethusdt: {
        key: 'ETH / USDT',
        symbol: 'ETHUSDT'
      },
      ltcusdt: {
        key: 'LTC / USDT',
        symbol: 'LTCUSDT'
      },

      ethbtc: {
        key: 'ETH / BTC',
        symbol: 'ETHBTC',
        target: 0.09
      },
      xvgbtc: {
        key: 'XVG / BTC',
        symbol: 'XVGBTC'
      },

      sntbtc: {
        key: 'SNT / BTC',
        symbol: 'SNTBTC'
      },
      mthbtc: {
        key: 'MTH / BTC',
        symbol: 'MTHBTC'
      },
      gxsbtc: {
        key: 'GXS / BTC',
        symbol: 'GXSBTC'
      },
      iotabtc: {
        key: 'IOTA / BTC',
        symbol: 'IOTABTC'
      },
      eosbtc: {
        key: 'EOS / BTC',
        symbol: 'EOSBTC'
      },
      manabtc: {
        key: 'MANA / BTC',
        symbol: 'MANABTC'
      },
      enjbtc: {
        key: 'ENJ / BTC',
        symbol: 'ENJBTC'
      },
      insbtc: {
        key: 'INS / BTC',
        symbol: 'INSBTC'
      },
      iostbtc: {
        key: 'IOST / BTC',
        symbol: 'IOSTBTC'
      }

    };
    var keys = (0, _keys2.default)(obj);
    keys.forEach(function (key) {
      (0, _extends3.default)(obj[key], {
        stream: key + '@kline_1h',
        start_time: '',
        open_price: 0,
        last_price: 0,
        upper: null,
        lower: null,
        percent: 0,
        volume: 0
      });
    });
    return obj;
  }()
  // pairs: [{
  //   stream: 'btcusdt',
  //   key: 'BTC / USDT',
  //   symbol: 'BTCUSDT',
  // }, {
  //   stream: 'ethbtc',
  //   key: 'ETH / BTC',
  //   symbol: 'ETHBTC',
  // }, {
  //   stream: 'xvgbtc',
  //   key: 'XVG / BTC',
  //   symbol: 'XVGBTC',
  //   target: 0.000012
  // }, {
  //   stream: 'sntbtc',
  //   key: 'SNT / BTC',
  //   symbol: 'SNTBTC',
  //   target: 0.000038
  // }, {
  //   stream: 'iotabtc',
  //   key: 'IOTA / BTC',
  //   symbol: 'IOTABTC',
  //   // target: 0.000260
  // }, {

  //   stream: '--',

  // }, {
  //   stream: 'bccusdt',
  //   key: 'BCC / USDT',
  //   symbol: 'BCCUSDT',
  //   target: 2389
  // }, {
  //   stream: 'ethusdt',
  //   key: 'ETH / USDT',
  //   symbol: 'ETHUSDT',
  // }, {
  //   stream: 'ltcusdt',
  //   key: 'LTC / USDT',
  //   symbol: 'LTCUSDT',
  // }, {
  //   stream: '--',
  // }, {

  //   stream: 'xrpbtc',
  //   key: 'XRP / BTC',
  //   symbol: 'XRPBTC',
  // }, {
  //   stream: 'xlmbtc',
  //   key: 'XLM / BTC',
  //   symbol: 'XLMBTC',
  // }, {
  //   stream: '--'
  // }, {

  // }, {
  //   stream: 'gxsbtc',
  //   key: 'GXS / BTC',
  //   symbol: 'GXSBTC',
  // }, {
  //   stream: 'trxbtc',
  //   key: 'TRX / BTC',
  //   symbol: 'TRXBTC',
  // }, {

  //   stream: 'rdnbtc',
  //   key: 'RDN / BTC',
  //   symbol: 'RDNBTC',
  // }, {
  //   stream: 'lendbtc',
  //   key: 'LEND / BTC',
  //   symbol: 'LENDBTC',
  // }, {
  //   stream: 'mthbtc',
  //   key: 'MTH / BTC',
  //   symbol: 'MTHBTC',
  //   // target: 0.00002522

  // }, {
  //   stream: 'saltbtc',
  //   key: 'SALT / BTC',
  //   symbol: 'SALTBTC',
  //   // target: 0.000904
  // }, {
  //   stream: 'iotabtc',
  //   key: 'IOTA / BTC',
  //   symbol: 'IOTABTC',
  //   // target: 0.000260
  // }, {
  //   stream: 'funbtc',
  //   key: 'FUN / BTC',
  //   symbol: 'FUNBTC'
  // }, {

  //   stream: 'eosbtc',
  //   key: 'EOS / BTC',
  //   symbol: 'EOSBTC'
  // }, {

  //   stream: 'manabtc',
  //   key: 'MANA / BTC',
  //   symbol: 'MANABTC',
  //   // }, {
  //   //   stream: 'xrpbtc',
  //   //   key: 'XRP / BTC',
  //   //   symbol: 'XRPBTC'
  // }].map(a => {
  //   a.stream += '@kline_60m';
  //   return Object.assign(a, {
  //     start_time: '',
  //     open_price: 0,
  //     last_price: 0,
  //     upper: null,
  //     lower: null,
  //     percent: 0,
  //     volume: 0
  //   });
  // }),
};

exports.default = {
  namespaced: true,
  state: state,
  getters: {
    picked: function picked(state) {
      return ['btcusdt', 'ethbtc', 'eosbtc', 'gxsbtc', 'sntbtc', 'mthbtc', 'iotabtc', 'xvgbtc', 'manabtc', 'enjbtc', 'insbtc', 'iostbtc'].map(function (a) {
        return state.items[a];
      });
    }
  },
  actions: {
    watch: function watch(_ref) {
      var state = _ref.state;

      state.watching = true;
    },
    unwatch: function unwatch(_ref2) {
      var state = _ref2.state;

      state.watching = false;
    },
    init: function init(_ref3) {
      var state = _ref3.state;


      // var trading = localStorage.getItem('trading');
      // if (trading) {
      //   var obj = JSON.parse(trading);
      //   console.log(obj);
      //   state.pairs[0].trading.usdt = obj.usdt;
      //   for (let key in obj.balance) {
      //     state.pairs[0].trading.balance[key] = obj.balance[key];
      //   }
      // }
      function warn(str) {
        console.warn(str);
        state.alert_text = str;
        var el = document.createElement('audio');
        el.setAttribute('src', 'http://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.mp3');
        el.setAttribute('autoplay', 'autoplay');
        el.setAttribute('cotrols', 'controls');
        document.body.appendChild(el);
      }

      function connect() {
        try {
          //  Try to establish the WebSocket connection
          // var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
          var streams = function () {
            var str = '';
            // state.pairs.forEach(a => {
            //   str += a.stream + '/';
            // });
            for (var key in state.items) {
              str += state.items[key].stream + '/';
            }
            return str;
          }();
          // var ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=' + streams);
          var ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=' + streams);
          // setTimeout(() => {
          //   ws.close();
          // }, 8000);
          ws.onopen = function (event) {
            state.status = 'Connected';
            console.log('Binance Connection established. ' + this.readyState);
          };
          ws.onmessage = function (event) {
            // console.log('Received data: ' + event.data);
            var obj = JSON.parse(event.data);
            // console.log(obj);
            function save(trading) {
              localStorage.setItem('trading', (0, _stringify2.default)(trading));
            }
            if (obj.stream) {
              var a = state.items[obj.stream.split('@')[0]];
              a.start_time = new Date(obj.data.k.t).getMinutes();
              a.open_price = obj.data.k.o;
              a.last_price = obj.data.k.c;
              if (state.watching && state.alerting === false) {
                if (a.lower && Number(a.last_price) < Number(a.lower)) {
                  state.alerting = true;
                  warn(a.symbol + ' is too low!!!');
                  // if (navigator.vibrate) {
                  //   navigator.vibrate(60 * 1000);
                  // }
                }
                if (a.upper && Number(a.last_price) > Number(a.upper)) {
                  state.alerting = true;
                  warn(a.symbol + ' is too high!!!');
                  // if (navigator.vibrate) {
                  //   navigator.vibrate(60 * 1000);
                  // }
                }
              }
              a.volume = obj.data.k.q;
              a.percent = ((obj.data.k.c - obj.data.k.o) / obj.data.k.c * 100).toFixed(2);
              if (obj.data.s === 'BTCUSDT') {
                state.ratio = obj.data.k.c;
              }
              // state.pairs.forEach(a => {
              //   if (a.stream === obj.stream) {
              //     a.start_time = new Date(obj.data.k.t).getMinutes();
              //     a.open_price = obj.data.k.o;
              //     a.last_price = obj.data.k.c;
              //     a.volume = obj.data.k.q;
              //     a.percent = ((obj.data.k.c - obj.data.k.o) / obj.data.k.c * 100).toFixed(2);
              //   }
              //   if (obj.data.s === 'BTCUSDT') {
              //     state.ratio = obj.data.k.c;
              //   }
              // });
            } else {
                // if (Array.isArray(obj[1])) {
                //   var last = state.coins.start_time;
                //   var now = new Date().getTime();
                //   // Update 
                //   function update() {
                //     state.coins.pairs.forEach(a => {
                //       a.prices.length = 0;
                //       a.percent.push('');
                //       if (a.percent.length > 5) {
                //         a.percent.shift();
                //       }
                //     });
                //     state.coins.start_time = now;
                //   }
                //   if (!last) {
                //     update();
                //   } else if (now - last > 180000) {
                //     update();
                //   }

                //   state.coins.pairs.forEach(a => {
                //     if (obj[0] === a.id) {
                //       var price = obj[1][6];
                //       if (price > a.last_price) {
                //         a.color = 'green';
                //       }
                //       else {
                //         a.color = 'red';
                //       }
                //       a.last_price = price;
                //       a.prices.push(price);
                //       if (a.prices.length > 1) {
                //         var start = a.prices[0];
                //         var end = a.prices[a.prices.length - 1];
                //         a.percent[a.percent.length - 1] = ((end - start) / start * 100).toFixed(2);
                //         // console.log(a.percent);
                //       }
                //       a.sum = a.percent.reduce((sum, b) => {
                //         return sum + Number(b);
                //       }, 0).toFixed(2);
                //     }
                //   });
                // }
              }
          };
          ws.onclose = function (event) {
            state.status = 'Disconnected';
            console.warn('Disconnected: ' + this.readyState);
            // connect();
            // state.coins.pairs.forEach(a => {
            //   a.last_price = 0;
            //   a.color = 'black';
            // });
          };
          ws.onerror = function (event) {
            state.status = 'Errored';
            console.warn('Errored!');
            // connect();
            // state.coins.pairs.forEach(a => {
            //   a.last_price = 0;
            //   a.color = 'black';
            // });
            // state.coins.status = 'Errored';
          };
        } catch (e) {
          alert(e.message);
        }
      }

      if (state.status === 'Waiting') {
        connect();
      }
      // var hash = CryptoJS.HmacSHA256('', 'zhRco1KqyFSHBg7f46IxkGYk90Cq6uueascgK8onGVvW9chd5nrrKmk5S55cunCB');
      // var signature = CryptoJS.enc.Base64.stringify(hash);
      // console.log(signature);
      // axios({
      //   // url: `https://api.binance.com/api/v3/account?signature=${signature}`,
      //   url: `https://api.binance.com/api/v1/ping`,
      //   // this is essential cause a fetch request is without cookie by default
      //   withCredentials: true,
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-MBX-APIKEY': 'hoJJNqGnwueeGPjdajf7h54HttIdV8kfGeKuTnxGRDmGpmDfeklp27Smc4WVTL8l'
      //   },
      //   mode: 'cors',
      // }).then(res => {
      //   console.log(res);
      // });
    }
  },
  mutations: {}
};

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(17);
var $keys = __webpack_require__(30);

__webpack_require__(152)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(143);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(49);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(146);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    navbar: {
      options: [{
        name: 'Home',
        icon: 'fa-home',
        to: '/main/home'
      }, {
        name: 'Projects',
        icon: 'fa-code',
        to: '/main/projects'
      }, {
        name: 'Canvas',
        icon: 'fa-image',
        to: '/main/canvas'
      }, {
        name: 'Blog',
        icon: 'fa-book',
        to: '/main/blog'
      }, {
        name: 'Farm',
        icon: 'fa-gamepad',
        href: '/farm/index.html'
      }, {
        name: 'Vue',
        icon: 'fa-cog',
        href: '/vue/index.html'
      }, {
        name: 'Mall',
        icon: 'fa-laptop',
        to: '/mall'
      }, {
        name: 'Admin',
        icon: 'fa-cogs',
        to: '/admin'
      }]
    },
    theme: {
      options: ['blue', 'zhihu', 'angulur', 'github'],
      val: 'zhihu'
    }
  },
  modules: {
    // routes
    // home: require('./home/home.js').default,
    // blog: require('./blog/blog.js').default,
    // projects: require('./projects/projects.js').default,
    post: __webpack_require__(169).default,
    // Canvas: require('./canvas/Canvas.js').default,

    // data
    // posts: require('./posts.js').default,
    // focus: require('./focus.js').default,
    news: __webpack_require__(170).default
  },
  actions: {
    init: function init(_ref) {
      var _this = this;

      var state = _ref.state,
          dispatch = _ref.dispatch;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var theme;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  setTimeout(function () {
                    console.log(111);
                    resolve();
                  }, 1000);
                });

              case 2:
                theme = localStorage.getItem('theme');

                if (theme) {
                  dispatch('switch_theme', { name: theme });
                }
                state.inited = true;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    switch_theme: function switch_theme(_ref2, _ref3) {
      var state = _ref2.state;
      var name = _ref3.name;

      state.theme.val = name;
      localStorage.setItem('theme', name);
    }
  }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  firstMount: true,
  tick: 0,
  state: 'pending',
  id: null,
  html: ''
};

var actions = {
  fetchPost: function fetchPost(ctx, _ref) {
    var id = _ref.id;

    ctx.commit('FETCH_POST_PENDING');

    // var params = router.currentRoute.path.split('/');
    // var id = params[params.length - 1];
    // console.log(id)

    return (0, _axios2.default)({
      url: '/api/marked/' + id,
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(function (res) {
      ctx.commit('SET_POST', { newPost: res.data, id: id });
    }).catch(function (err) {
      console.log(err);
    });
  }
};

var mutations = {
  FETCH_POST_PENDING: function FETCH_POST_PENDING(state) {
    state.state = 'pending';
    state.html = '';
  },
  SET_POST: function SET_POST(state, _ref2) {
    var newPost = _ref2.newPost,
        id = _ref2.id;

    state.state = 'resolved';
    state.tick++;
    state.id = id;
    state.html = newPost;
  }
};

exports.default = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(51);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespaced: true,
  state: {
    inited: false,
    status: '',
    items: [],
    page: 1
  },
  getters: {
    nav: function nav(state) {
      var nav = [];
      var start, end;
      if (state.page <= 2) {
        start = 1;
        end = 5;
      } else {
        start = state.page - 2;
        end = state.page + 2;
      }
      for (var i = start; i < end + 1; i++) {
        nav.push(i);
      }
      console.log(nav);
      return nav;
    }
  },
  actions: {
    init: function init(_ref) {
      var state = _ref.state,
          dispatch = _ref.dispatch;

      if (state.inited === false) {
        dispatch('fetch', { page: 1 });
      }
    },
    fetch: function fetch(_ref2, _ref3) {
      var state = _ref2.state;
      var page = _ref3.page;

      state.status = 'loading';
      return (0, _axios2.default)({
        url: '//cnodejs.org/api/v1/topics?page=' + page + '&limit=20',
        // this is essential cause a fetch request is without cookie by default
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      }).then(function (res) {
        var _state$items;

        // var el = document.querySelector('#container-1996');
        // window.scroll(0, el.offsetTop);
        state.items.length = 0;
        (_state$items = state.items).push.apply(_state$items, (0, _toConsumableArray3.default)(res.data.data));
        state.inited = true;
        state.page = page;
        state.status = 'success';
      }).catch(function (err) {
        var _state$items2;

        state.status = 'error';
        state.items.length = 0;
        (_state$items2 = state.items).push.apply(_state$items2, [{
          author: {}
        }]);
        state.inited = true;
        state.page = 1;
        console.log(err);
      });
    },
    to_page: function to_page(_ref4, _ref5) {
      var state = _ref4.state,
          dispatch = _ref4.dispatch;
      var page = _ref5.page;

      dispatch('fetch', { page: page }).then(function () {
        state.page = page;
      });
    }
  },
  mutations: {}
};

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexMain = __webpack_require__(168);

var _indexMain2 = _interopRequireDefault(_indexMain);

var _home = __webpack_require__(147);

var _home2 = _interopRequireDefault(_home);

var _vuex = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {},
  computed: {
    picked: function picked() {
      // console.log(this.$store.getters['main/home/binance/picked']);
      return this.$store.getters['main/home/binance/picked'];
    },
    home: function home() {
      return this.$store.state.main.home;
    },
    user: function user() {
      return this.$store.state.app.user;
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.complete(['main'], _indexMain2.default);
    this.$store.complete(['main', 'home'], _home2.default);
  },

  mounted: function mounted() {
    this.$store.dispatch('main/home/binance/init');
  },
  methods: {
    // register(store) {
    //   store.complete(['main', 'home'], rawModule);
    // },
    // preFetch(store) {
    //   return store.dispatch('main/home/init');
    // },
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 282:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Binance container-fluid"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": '/main/home'
    }
  }, [_vm._v("\n        Back\n      ")])], 1), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        Binance (" + _vm._s(_vm.home.binance.status) + ")\n      ")]), _c('div', {
    staticClass: "panel-body"
  }, [_vm._m(0), (_vm.home.binance.alert_text) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n          " + _vm._s(_vm.home.binance.alert_text) + "\n        ")]) : _vm._e()]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.picked), function(a) {
    return _c('div', {
      staticClass: "list-group-item",
      style: ((a.percent > 1 ? 'background: #dff0d8;' : '') +
        (a.percent < -1 ? 'background: #f2dede;' : ''))
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-3"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-4 col-sm-6"
    }, [_vm._v("\n                  " + _vm._s(a.key) + "\n                ")]), _c('div', {
      staticClass: "col-xs-6"
    }, [_vm._v("\n                  " + _vm._s(a.stream.match(/usdt/) ? Number(a.open_price).toFixed(2) : a.open_price) + "\n                ")])])]), _c('div', {
      staticClass: "col-sm-4"
    }, [_c('div', {
      staticClass: "row",
      class: (a.percent > 1 ? 'bg-success' : '') + ' ' +
        (a.percent < -1 ? 'bg-danger' : '')
    }, [_c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                  " + _vm._s(a.stream.match(/usdt/) ? Number(a.last_price).toFixed(2) : a.last_price) + "\n                ")]), _c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                  (" + _vm._s(a.percent) + "%)\n                ")]), _c('div', {
      staticClass: "col-xs-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v(" \n                  $" + _vm._s(a.stream.match(/usdt/) ? '--' : (a.last_price * _vm.home.binance.ratio).toFixed(2)) + " \n                ")])])]), _c('div', {
      staticClass: "col-sm-5"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.lower),
        expression: "a.lower"
      }],
      staticClass: "input-sm form-control",
      attrs: {
        "placeholder": "Lower limit"
      },
      domProps: {
        "value": (a.lower)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.lower = $event.target.value
        }
      }
    })]), _c('div', {
      staticClass: "col-xs-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.upper),
        expression: "a.upper"
      }],
      staticClass: "input-sm form-control",
      attrs: {
        "placeholder": "Upper limit"
      },
      domProps: {
        "value": (a.upper)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.upper = $event.target.value
        }
      }
    })]), _c('div', {
      staticClass: "col-xs-4"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.home.binance.watching === false),
        expression: " home.binance.watching === false "
      }],
      staticClass: "btn btn-primary btn-sm",
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/home/binance/watch')
        }
      }
    }, [_vm._v("\n                    Watch\n                  ")]), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.home.binance.watching === true),
        expression: " home.binance.watching === true "
      }],
      staticClass: "btn btn-success btn-sm",
      on: {
        "click": function($event) {
          _vm.$store.dispatch('main/home/binance/unwatch')
        }
      }
    }, [_vm._v("\n                    Watching\n                  ")])])])])])])
  })), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _c('tbody', _vm._l((_vm.picked), function(a) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(a.key))]), _c('td', [_vm._v("\n                  " + _vm._s(a.open_price) + "\n                ")]), _c('td', {
      class: (a.percent > 1 ? 'bg-success' : '') + ' ' +
        (a.percent < -1 ? 'bg-danger' : '')
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                      " + _vm._s(a.stream.match(/usdt/) ? Number(a.last_price).toFixed(2) : a.last_price) + "\n                    ")]), _c('div', {
      staticClass: "col-md-4",
      style: ('color: ' + (a.percent > 0 ? 'green' : 'red') + ';')
    }, [_vm._v("\n                      (" + _vm._s(a.percent) + "%)\n                    ")]), _c('div', {
      staticClass: "col-md-4"
    }, [_vm._v(" \n                      $" + _vm._s(a.stream.match(/usdt/) ? '--' : (a.last_price * _vm.home.binance.ratio).toFixed(2)) + " \n                    ")])])]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.lower),
        expression: "a.lower"
      }],
      staticClass: "input-sm form-control",
      domProps: {
        "value": (a.lower)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.lower = $event.target.value
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (a.upper),
        expression: "a.upper"
      }],
      staticClass: "input-sm form-control",
      domProps: {
        "value": (a.upper)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          a.upper = $event.target.value
        }
      }
    })]), _c('td', {
      style: ('color: ' + (a.last_price < a.target ? 'red' : 'green') + ';')
    }, [_vm._v("\n                  " + _vm._s(a.target) + "\n                ")]), _c('td', [_vm._v(_vm._s(parseInt(a.volume)))]), _c('td', [_vm._v(_vm._s(a.start_time))])])
  }))])])]), _c('div', {
    staticClass: "list-group"
  }, _vm._l((_vm.home.binance.pairs), function(a) {
    return _c('div', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.key) + "\n            ")]), _c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.open_price) + "\n            ")]), _c('div', {
      staticClass: "col-xs-3"
    }, [_vm._v("\n              " + _vm._s(a.last_price) + "\n            ")]), _c('div', {
      staticClass: "col-xs-1"
    }, [_vm._v("\n              " + _vm._s(a.start_time) + "\n            ")]), _c('div', {
      staticClass: "col-xs-2"
    }, [_vm._v("\n              " + _vm._s(a.percent) + "\n            ")])])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n          Tips:"), _c('br'), _vm._v("\n          1. The only right moment to buy is when the price is falling hard. "), _c('br'), _vm._v("\n          2. The price always soar up all of a sudden. All you need to do is wait. "), _c('br'), _vm._v("\n          3. Sell half of your holdings near the top to refund. "), _c('br')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("\n                  Pair\n                ")]), _c('th', [_vm._v("Open Price")]), _c('th', [_vm._v("Last Price")]), _c('th', [_vm._v("Lower Limit")]), _c('th', [_vm._v("Upper Limit")]), _c('th', [_vm._v("Target")]), _c('th', [_vm._v("Volume")]), _c('th', [_vm._v("Start Time")])])])
}]}

/***/ })

});