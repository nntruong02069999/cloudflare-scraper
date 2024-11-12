"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ChromeLauncher = require('chrome-launcher');
var chromium = require('chromium');
var CDP = require('chrome-remote-interface');
var Xvfb = require('xvfb');
var fs = require('fs');
var Browser = /*#__PURE__*/function () {
  function Browser() {
    _classCallCheck(this, Browser);
  }
  return _createClass(Browser, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _process$env, CHROME_EXECUTABLE_PATH, CF_SCRAPER_HEADLESS, HTTP_PROXY, HTTPS_PROXY, chromePath, chromeFlags, proxy, _this$cdpSession, Network, Page, Runtime;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _process$env = process.env, CHROME_EXECUTABLE_PATH = _process$env.CHROME_EXECUTABLE_PATH, CF_SCRAPER_HEADLESS = _process$env.CF_SCRAPER_HEADLESS, HTTP_PROXY = _process$env.HTTP_PROXY, HTTPS_PROXY = _process$env.HTTPS_PROXY;
              if (process.platform === 'linux' && CF_SCRAPER_HEADLESS !== 'false') {
                this.xvfb = new Xvfb({
                  silent: true,
                  xvfb_args: ['-screen', '0', '1280x720x24', '-ac']
                });
                this.xvfb.startSync();
              }
              chromePath = chromium.path;
              if (CHROME_EXECUTABLE_PATH) {
                chromePath = CHROME_EXECUTABLE_PATH;
              }
              chromeFlags = ['--no-sandbox'];
              proxy = HTTPS_PROXY ? HTTPS_PROXY : HTTP_PROXY;
              if (proxy) {
                chromeFlags.push("--proxy-server=\"".concat(proxy, "\""));
              }
              _context.next = 10;
              return ChromeLauncher.launch({
                chromePath: chromePath,
                chromeFlags: chromeFlags
              });
            case 10:
              this.chrome = _context.sent;
              _context.next = 13;
              return CDP({
                port: this.chrome.port
              });
            case 13:
              this.cdpSession = _context.sent;
              _this$cdpSession = this.cdpSession, Network = _this$cdpSession.Network, Page = _this$cdpSession.Page, Runtime = _this$cdpSession.Runtime;
              _context.next = 17;
              return Runtime.enable();
            case 17:
              _context.next = 19;
              return Network.enable();
            case 19:
              _context.next = 21;
              return Page.enable();
            case 21:
              _context.next = 23;
              return Page.setLifecycleEventsEnabled({
                enabled: true
              });
            case 23:
              _context.next = 30;
              break;
            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](0);
              _context.next = 29;
              return this.close();
            case 29:
              throw _context.t0;
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 25]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.cdpSession) {
                _context2.next = 4;
                break;
              }
              _context2.next = 3;
              return this.cdpSession.close();
            case 3:
              this.cdpSession = null;
            case 4:
              if (!this.chrome) {
                _context2.next = 8;
                break;
              }
              _context2.next = 7;
              return this.chrome.kill();
            case 7:
              this.chrome = null;
            case 8:
              if (this.xvfb) {
                this.xvfb.stopSync();
                this.xvfb = null;
              }
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function close() {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }, {
    key: "cdp",
    get: function get() {
      if (!this.cdpSession) {
        throw new Error('browser not initialised');
      }
      return this.cdpSession;
    }
  }, {
    key: "waitUntil",
    value: function () {
      var _waitUntil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(eventName, timeout) {
        var Page, timeoutId, timeoutPromise, eventPromise;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              Page = this.cdp.Page;
              timeoutPromise = new Promise(function (resolve, reject) {
                timeoutId = setTimeout(function () {
                  return reject('timeout');
                }, timeout);
              });
              eventPromise = new Promise(function (resolve) {
                Page.lifecycleEvent(function (args) {
                  if (args.name === eventName) {
                    if (timeoutId) {
                      clearTimeout(timeoutId);
                    }
                    resolve();
                  }
                });
              });
              return _context3.abrupt("return", Promise.race([eventPromise, timeoutPromise]));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function waitUntil(_x, _x2) {
        return _waitUntil.apply(this, arguments);
      }
      return waitUntil;
    }()
  }, {
    key: "getPageHtml",
    value: function () {
      var _getPageHtml = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var DOM, rootNode, pageSource;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              DOM = this.cdp.DOM;
              _context4.next = 3;
              return DOM.getDocument({
                depth: -1
              });
            case 3:
              rootNode = _context4.sent;
              _context4.next = 6;
              return DOM.getOuterHTML({
                nodeId: rootNode.root.nodeId
              });
            case 6:
              pageSource = _context4.sent;
              return _context4.abrupt("return", pageSource.outerHTML);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getPageHtml() {
        return _getPageHtml.apply(this, arguments);
      }
      return getPageHtml;
    }()
  }, {
    key: "getUserAgent",
    value: function () {
      var _getUserAgent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var Runtime, evaluation;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              Runtime = this.cdp.Runtime;
              _context5.next = 3;
              return Runtime.evaluate({
                expression: 'window.navigator.userAgent'
              });
            case 3:
              evaluation = _context5.sent;
              return _context5.abrupt("return", evaluation.result.value);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getUserAgent() {
        return _getUserAgent.apply(this, arguments);
      }
      return getUserAgent;
    }()
  }, {
    key: "navigate",
    value: function () {
      var _navigate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
        var Page;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              Page = this.cdp.Page;
              _context6.next = 3;
              return Page.navigate({
                url: url
              });
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function navigate(_x3) {
        return _navigate.apply(this, arguments);
      }
      return navigate;
    }()
  }, {
    key: "getCookies",
    value: function () {
      var _getCookies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var Network, _yield$Network$getCoo, cookies;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              Network = this.cdp.Network;
              _context7.next = 3;
              return Network.getCookies();
            case 3:
              _yield$Network$getCoo = _context7.sent;
              cookies = _yield$Network$getCoo.cookies;
              return _context7.abrupt("return", cookies);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getCookies() {
        return _getCookies.apply(this, arguments);
      }
      return getCookies;
    }()
  }, {
    key: "takeScreenshot",
    value: function () {
      var _takeScreenshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(filepath) {
        var Page, _yield$Page$captureSc, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              Page = this.cdp.Page;
              _context8.next = 3;
              return Page.captureScreenshot();
            case 3:
              _yield$Page$captureSc = _context8.sent;
              data = _yield$Page$captureSc.data;
              fs.writeFileSync(filepath, Buffer.from(data, 'base64'));
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function takeScreenshot(_x4) {
        return _takeScreenshot.apply(this, arguments);
      }
      return takeScreenshot;
    }()
  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var browser;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              browser = new Browser();
              _context9.next = 3;
              return browser.init();
            case 3:
              return _context9.abrupt("return", browser);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function create() {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }]);
}();
module.exports = Browser;