function AnchorJS(a) {
    "use strict";
    function b(a) {
        a.icon = a.hasOwnProperty("icon") ? a.icon : "", a.visible = a.hasOwnProperty("visible") ? a.visible : "hover", a.placement = a.hasOwnProperty("placement") ? a.placement : "right", a["class"] = a.hasOwnProperty("class") ? a["class"] : "", a.truncate = a.hasOwnProperty("truncate") ? Math.floor(a.truncate) : 64
    }

    function c(a) {
        var b;
        if ("string" == typeof a || a instanceof String)b = [].slice.call(document.querySelectorAll(a)); else {
            if (!(Array.isArray(a) || a instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");
            b = [].slice.call(a)
        }
        return b
    }

    function d() {
        if (null === document.head.querySelector("style.anchorjs")) {
            var a, b = document.createElement("style"), c = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", d = " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e = ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }', f = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
            b.className = "anchorjs", b.appendChild(document.createTextNode("")), a = document.head.querySelector('[rel="stylesheet"], style'), void 0 === a ? document.head.appendChild(b) : document.head.insertBefore(b, a), b.sheet.insertRule(c, b.sheet.cssRules.length), b.sheet.insertRule(d, b.sheet.cssRules.length), b.sheet.insertRule(f, b.sheet.cssRules.length), b.sheet.insertRule(e, b.sheet.cssRules.length)
        }
    }

    this.options = a || {}, this.elements = [], b(this.options), this.isTouchDevice = function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
    }, this.add = function (a) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q = [];
        if (b(this.options), p = this.options.visible, "touch" === p && (p = this.isTouchDevice() ? "always" : "hover"), a || (a = "h1, h2, h3, h4, h5, h6"), e = c(a), 0 === e.length)return !1;
        for (d(), f = document.querySelectorAll("[id]"), g = [].map.call(f, function (a) {
            return a.id
        }), i = 0; i < e.length; i++)if (this.hasAnchorJSLink(e[i]))q.push(i); else {
            if (e[i].hasAttribute("id"))h = e[i].getAttribute("id"); else {
                l = this.urlify(e[i].textContent), m = l, k = 0;
                do void 0 !== j && (m = l + "-" + k), j = g.indexOf(m), k += 1; while (-1 !== j);
                j = void 0, g.push(m), e[i].setAttribute("id", m), h = m
            }
            n = h.replace(/-/g, " "), o = document.createElement("a"), o.className = "anchorjs-link " + this.options["class"], o.href = "#" + h, o.setAttribute("aria-label", "Anchor link for: " + n), o.setAttribute("data-anchorjs-icon", this.options.icon), "always" === p && (o.style.opacity = "1"), "" === this.options.icon && (o.style.fontFamily = "anchorjs-icons", o.style.fontStyle = "normal", o.style.fontVariant = "normal", o.style.fontWeight = "normal", o.style.lineHeight = 1, "left" === this.options.placement && (o.style.lineHeight = "inherit")), "left" === this.options.placement ? (o.style.position = "absolute", o.style.marginLeft = "-1em", o.style.paddingRight = "0.5em", e[i].insertBefore(o, e[i].firstChild)) : (o.style.paddingLeft = "0.375em", e[i].appendChild(o))
        }
        for (i = 0; i < q.length; i++)e.splice(q[i] - i, 1);
        return this.elements = this.elements.concat(e), this
    }, this.remove = function (a) {
        for (var b, d, e = c(a), f = 0; f < e.length; f++)d = e[f].querySelector(".anchorjs-link"), d && (b = this.elements.indexOf(e[f]), -1 !== b && this.elements.splice(b, 1), e[f].removeChild(d));
        return this
    }, this.removeAll = function () {
        this.remove(this.elements)
    }, this.urlify = function (a) {
        var c, d = /[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;
        return this.options.truncate || b(this.options), c = a.trim().replace(/\'/gi, "").replace(d, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
    }, this.hasAnchorJSLink = function (a) {
        var b = (" " + a.firstChild.className + " ").indexOf(" anchorjs-link ") > -1, c = (" " + a.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
        return b || c
    }
}
var anchors = new AnchorJS;
/*!
 * clipboard.js v1.5.9
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = a(); else if ("function" == typeof define && define.amd)define([], a); else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.Clipboard = a()
    }
}(function () {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)return i(g, !0);
                    if (f)return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {exports: {}};
                a[g][0].call(k.exports, function (b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }

        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
            var d = a("matches-selector");
            b.exports = function (a, b, c) {
                for (var e = c ? a : a.parentNode; e && e !== document;) {
                    if (d(e, b))return e;
                    e = e.parentNode
                }
            }
        }, {"matches-selector": 5}], 2: [function (a, b, c) {
            function d(a, b, c, d, f) {
                var g = e.apply(this, arguments);
                return a.addEventListener(c, g, f), {
                    destroy: function () {
                        a.removeEventListener(c, g, f)
                    }
                }
            }

            function e(a, b, c, d) {
                return function (c) {
                    c.delegateTarget = f(c.target, b, !0), c.delegateTarget && d.call(a, c)
                }
            }

            var f = a("closest");
            b.exports = d
        }, {closest: 1}], 3: [function (a, b, c) {
            c.node = function (a) {
                return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType
            }, c.nodeList = function (a) {
                var b = Object.prototype.toString.call(a);
                return void 0 !== a && ("[object NodeList]" === b || "[object HTMLCollection]" === b) && "length" in a && (0 === a.length || c.node(a[0]))
            }, c.string = function (a) {
                return "string" == typeof a || a instanceof String
            }, c.fn = function (a) {
                var b = Object.prototype.toString.call(a);
                return "[object Function]" === b
            }
        }, {}], 4: [function (a, b, c) {
            function d(a, b, c) {
                if (!a && !b && !c)throw new Error("Missing required arguments");
                if (!h.string(b))throw new TypeError("Second argument must be a String");
                if (!h.fn(c))throw new TypeError("Third argument must be a Function");
                if (h.node(a))return e(a, b, c);
                if (h.nodeList(a))return f(a, b, c);
                if (h.string(a))return g(a, b, c);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function e(a, b, c) {
                return a.addEventListener(b, c), {
                    destroy: function () {
                        a.removeEventListener(b, c)
                    }
                }
            }

            function f(a, b, c) {
                return Array.prototype.forEach.call(a, function (a) {
                    a.addEventListener(b, c)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(a, function (a) {
                            a.removeEventListener(b, c)
                        })
                    }
                }
            }

            function g(a, b, c) {
                return i(document.body, a, b, c)
            }

            var h = a("./is"), i = a("delegate");
            b.exports = d
        }, {"./is": 3, delegate: 2}], 5: [function (a, b, c) {
            function d(a, b) {
                if (f)return f.call(a, b);
                for (var c = a.parentNode.querySelectorAll(b), d = 0; d < c.length; ++d)if (c[d] == a)return !0;
                return !1
            }

            var e = Element.prototype, f = e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
            b.exports = d
        }, {}], 6: [function (a, b, c) {
            function d(a) {
                var b;
                if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName)a.focus(), a.setSelectionRange(0, a.value.length), b = a.value; else {
                    a.hasAttribute("contenteditable") && a.focus();
                    var c = window.getSelection(), d = document.createRange();
                    d.selectNodeContents(a), c.removeAllRanges(), c.addRange(d), b = c.toString()
                }
                return b
            }

            b.exports = d
        }, {}], 7: [function (a, b, c) {
            function d() {
            }

            d.prototype = {
                on: function (a, b, c) {
                    var d = this.e || (this.e = {});
                    return (d[a] || (d[a] = [])).push({fn: b, ctx: c}), this
                }, once: function (a, b, c) {
                    function d() {
                        e.off(a, d), b.apply(c, arguments)
                    }

                    var e = this;
                    return d._ = b, this.on(a, d, c)
                }, emit: function (a) {
                    var b = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), d = 0, e = c.length;
                    for (d; e > d; d++)c[d].fn.apply(c[d].ctx, b);
                    return this
                }, off: function (a, b) {
                    var c = this.e || (this.e = {}), d = c[a], e = [];
                    if (d && b)for (var f = 0, g = d.length; g > f; f++)d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                    return e.length ? c[a] = e : delete c[a], this
                }
            }, b.exports = d
        }, {}], 8: [function (b, c, d) {
            !function (e, f) {
                if ("function" == typeof a && a.amd)a(["module", "select"], f); else if ("undefined" != typeof d)f(c, b("select")); else {
                    var g = {exports: {}};
                    f(g, e.select), e.clipboardAction = g.exports
                }
            }(this, function (a, b) {
                "use strict";
                function c(a) {
                    return a && a.__esModule ? a : {"default": a}
                }

                function d(a, b) {
                    if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
                }

                var e = c(b), f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                    return typeof a
                } : function (a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
                }, g = function () {
                    function a(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                        }
                    }

                    return function (b, c, d) {
                        return c && a(b.prototype, c), d && a(b, d), b
                    }
                }(), h = function () {
                    function a(b) {
                        d(this, a), this.resolveOptions(b), this.initSelection()
                    }

                    return a.prototype.resolveOptions = function () {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = a.action, this.emitter = a.emitter, this.target = a.target, this.text = a.text, this.trigger = a.trigger, this.selectedText = ""
                    }, a.prototype.initSelection = function () {
                        if (this.text && this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');
                        if (this.text)this.selectFake(); else {
                            if (!this.target)throw new Error('Missing required attributes, use either "target" or "text"');
                            this.selectTarget()
                        }
                    }, a.prototype.selectFake = function () {
                        var a = this, b = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function () {
                            return a.removeFake()
                        }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "fixed", this.fakeElem.style[b ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, e["default"])(this.fakeElem), this.copyText()
                    }, a.prototype.removeFake = function () {
                        this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                    }, a.prototype.selectTarget = function () {
                        this.selectedText = (0, e["default"])(this.target), this.copyText()
                    }, a.prototype.copyText = function () {
                        var a = void 0;
                        try {
                            a = document.execCommand(this.action)
                        } catch (b) {
                            a = !1
                        }
                        this.handleResult(a)
                    }, a.prototype.handleResult = function (a) {
                        a ? this.emitter.emit("success", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        }) : this.emitter.emit("error", {
                            action: this.action,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }, a.prototype.clearSelection = function () {
                        this.target && this.target.blur(), window.getSelection().removeAllRanges()
                    }, a.prototype.destroy = function () {
                        this.removeFake()
                    }, g(a, [{
                        key: "action", set: function () {
                            var a = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                            if (this._action = a, "copy" !== this._action && "cut" !== this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (a) {
                            if (void 0 !== a) {
                                if (!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || 1 !== a.nodeType)throw new Error('Invalid "target" value, use a valid Element');
                                this._target = a
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), a
                }();
                a.exports = h
            })
        }, {select: 6}], 9: [function (b, c, d) {
            !function (e, f) {
                if ("function" == typeof a && a.amd)a(["module", "./clipboard-action", "tiny-emitter", "good-listener"], f); else if ("undefined" != typeof d)f(c, b("./clipboard-action"), b("tiny-emitter"), b("good-listener")); else {
                    var g = {exports: {}};
                    f(g, e.clipboardAction, e.tinyEmitter, e.goodListener), e.clipboard = g.exports
                }
            }(this, function (a, b, c, d) {
                "use strict";
                function e(a) {
                    return a && a.__esModule ? a : {"default": a}
                }

                function f(a, b) {
                    if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
                }

                function g(a, b) {
                    if (!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !b || "object" != typeof b && "function" != typeof b ? a : b
                }

                function h(a, b) {
                    if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                    a.prototype = Object.create(b && b.prototype, {
                        constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
                }

                function i(a, b) {
                    var c = "data-clipboard-" + a;
                    if (b.hasAttribute(c))return b.getAttribute(c)
                }

                var j = e(b), k = e(c), l = e(d), m = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this));
                        return e.resolveOptions(d), e.listenClick(c), e
                    }

                    return h(b, a), b.prototype.resolveOptions = function () {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        this.action = "function" == typeof a.action ? a.action : this.defaultAction, this.target = "function" == typeof a.target ? a.target : this.defaultTarget, this.text = "function" == typeof a.text ? a.text : this.defaultText
                    }, b.prototype.listenClick = function (a) {
                        var b = this;
                        this.listener = (0, l["default"])(a, "click", function (a) {
                            return b.onClick(a)
                        })
                    }, b.prototype.onClick = function (a) {
                        var b = a.delegateTarget || a.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new j["default"]({
                            action: this.action(b),
                            target: this.target(b),
                            text: this.text(b),
                            trigger: b,
                            emitter: this
                        })
                    }, b.prototype.defaultAction = function (a) {
                        return i("action", a)
                    }, b.prototype.defaultTarget = function (a) {
                        var b = i("target", a);
                        return b ? document.querySelector(b) : void 0
                    }, b.prototype.defaultText = function (a) {
                        return i("text", a)
                    }, b.prototype.destroy = function () {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }, b
                }(k["default"]);
                a.exports = m
            })
        }, {"./clipboard-action": 8, "good-listener": 4, "tiny-emitter": 7}]
    }, {}, [9])(9)
}), /*!

 Holder - client side image placeholders
 Version 2.9.2+30qun
 © 2016 Ivan Malopinsky - http://imsky.co

 Site:     http://holderjs.com
 Issues:   https://github.com/imsky/holder/issues
 License:  MIT

 */
    !function (a) {
        if (a.document) {
            var b = a.document;
            b.querySelectorAll || (b.querySelectorAll = function (c) {
                var d, e = b.createElement("style"), f = [];
                for (b.documentElement.firstChild.appendChild(e), b._qsa = [], e.styleSheet.cssText = c + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", a.scrollBy(0, 0), e.parentNode.removeChild(e); b._qsa.length;)d = b._qsa.shift(), d.style.removeAttribute("x-qsa"), f.push(d);
                return b._qsa = null, f
            }), b.querySelector || (b.querySelector = function (a) {
                var c = b.querySelectorAll(a);
                return c.length ? c[0] : null
            }), b.getElementsByClassName || (b.getElementsByClassName = function (a) {
                return a = String(a).replace(/^|\s+/g, "."), b.querySelectorAll(a)
            }), Object.keys || (Object.keys = function (a) {
                if (a !== Object(a))throw TypeError("Object.keys called on non-object");
                var b, c = [];
                for (b in a)Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
                return c
            }), Array.prototype.forEach || (Array.prototype.forEach = function (a) {
                if (void 0 === this || null === this)throw TypeError();
                var b = Object(this), c = b.length >>> 0;
                if ("function" != typeof a)throw TypeError();
                var d, e = arguments[1];
                for (d = 0; c > d; d++)d in b && a.call(e, b[d], d, b)
            }), function (a) {
                var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                a.atob = a.atob || function (a) {
                        a = String(a);
                        var c, d = 0, e = [], f = 0, g = 0;
                        if (a = a.replace(/\s/g, ""), a.length % 4 === 0 && (a = a.replace(/=+$/, "")), a.length % 4 === 1)throw Error("InvalidCharacterError");
                        if (/[^+\/0-9A-Za-z]/.test(a))throw Error("InvalidCharacterError");
                        for (; d < a.length;)c = b.indexOf(a.charAt(d)), f = f << 6 | c, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), d += 1;
                        return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
                    }, a.btoa = a.btoa || function (a) {
                        a = String(a);
                        var c, d, e, f, g, h, i, j = 0, k = [];
                        if (/[^\x00-\xFF]/.test(a))throw Error("InvalidCharacterError");
                        for (; j < a.length;)c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(b.charAt(f), b.charAt(g), b.charAt(h), b.charAt(i));
                        return k.join("")
                    }
            }(a), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (a) {
                var b = this.__proto__ || this.constructor.prototype;
                return a in this && (!(a in b) || b[a] !== this[a])
            }), function () {
                if ("performance" in a == 0 && (a.performance = {}), Date.now = Date.now || function () {
                            return (new Date).getTime()
                        }, "now" in a.performance == 0) {
                    var b = Date.now();
                    performance.timing && performance.timing.navigationStart && (b = performance.timing.navigationStart), a.performance.now = function () {
                        return Date.now() - b
                    }
                }
            }(), a.requestAnimationFrame || (a.webkitRequestAnimationFrame && a.webkitCancelAnimationFrame ? !function (a) {
                a.requestAnimationFrame = function (b) {
                    return webkitRequestAnimationFrame(function () {
                        b(a.performance.now())
                    })
                }, a.cancelAnimationFrame = a.webkitCancelAnimationFrame
            }(a) : a.mozRequestAnimationFrame && a.mozCancelAnimationFrame ? !function (a) {
                a.requestAnimationFrame = function (b) {
                    return mozRequestAnimationFrame(function () {
                        b(a.performance.now())
                    })
                }, a.cancelAnimationFrame = a.mozCancelAnimationFrame
            }(a) : !function (a) {
                a.requestAnimationFrame = function (b) {
                    return a.setTimeout(b, 1e3 / 60)
                }, a.cancelAnimationFrame = a.clearTimeout
            }(a))
        }
    }(this), function (a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Holder = b() : a.Holder = b()
}(this, function () {
    return function (a) {
        function b(d) {
            if (c[d])return c[d].exports;
            var e = c[d] = {exports: {}, id: d, loaded: !1};
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
        }

        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0)
    }([function (a, b, c) {
        a.exports = c(1)
    }, function (a, b, c) {
        (function (b) {
            function d(a, b, c, d) {
                var g = e(c.substr(c.lastIndexOf(a.domain)), a);
                g && f({mode: null, el: d, flags: g, engineSettings: b})
            }

            function e(a, b) {
                var c = {
                    theme: A(E.settings.themes.gray, null),
                    stylesheets: b.stylesheets,
                    instanceOptions: b
                }, d = a.indexOf("?"), e = [a];
                -1 !== d && (e = [a.slice(0, d), a.slice(d + 1)]);
                var f = e[0].split("/");
                c.holderURL = a;
                var g = f[1], h = g.match(/([\d]+p?)x([\d]+p?)/);
                if (!h)return !1;
                if (c.fluid = -1 !== g.indexOf("p"), c.dimensions = {
                        width: h[1].replace("p", "%"),
                        height: h[2].replace("p", "%")
                    }, 2 === e.length) {
                    var i = r.parse(e[1]);
                    if (i.bg && (c.theme.bg = t.parseColor(i.bg)), i.fg && (c.theme.fg = t.parseColor(i.fg)), i.bg && !i.fg && (c.autoFg = !0), i.theme && c.instanceOptions.themes.hasOwnProperty(i.theme) && (c.theme = A(c.instanceOptions.themes[i.theme], null)), i.text && (c.text = i.text), i.textmode && (c.textmode = i.textmode), i.size && (c.size = i.size), i.font && (c.font = i.font), i.align && (c.align = i.align), i.lineWrap && (c.lineWrap = i.lineWrap), c.nowrap = t.truthy(i.nowrap), c.auto = t.truthy(i.auto), c.outline = t.truthy(i.outline), t.truthy(i.random)) {
                        E.vars.cache.themeKeys = E.vars.cache.themeKeys || Object.keys(c.instanceOptions.themes);
                        var j = E.vars.cache.themeKeys[0 | Math.random() * E.vars.cache.themeKeys.length];
                        c.theme = A(c.instanceOptions.themes[j], null)
                    }
                }
                return c
            }

            function f(a) {
                var b = a.mode, c = a.el, d = a.flags, e = a.engineSettings, f = d.dimensions, h = d.theme, i = f.width + "x" + f.height;
                b = null == b ? d.fluid ? "fluid" : "image" : b;
                var l = /holder_([a-z]+)/g, m = !1;
                if (null != d.text && (h.text = d.text, "object" === c.nodeName.toLowerCase())) {
                    for (var n = h.text.split("\\n"), o = 0; o < n.length; o++)n[o] = t.encodeHtmlEntity(n[o]);
                    h.text = n.join("\\n")
                }
                if (h.text) {
                    var p = h.text.match(l);
                    null !== p && p.forEach(function (a) {
                        "holder_dimensions" === a && (h.text = h.text.replace(a, i))
                    })
                }
                var q = d.holderURL, r = A(e, null);
                if (d.font && (h.font = d.font, !r.noFontFallback && "img" === c.nodeName.toLowerCase() && E.setup.supportsCanvas && "svg" === r.renderer && (r = A(r, {renderer: "canvas"}))), d.font && "canvas" == r.renderer && (r.reRender = !0), "background" == b)null == c.getAttribute("data-background-src") && v.setAttr(c, {"data-background-src": q}); else {
                    var s = {};
                    s[E.vars.dataAttr] = q, v.setAttr(c, s)
                }
                d.theme = h, c.holderData = {
                    flags: d,
                    engineSettings: r
                }, ("image" == b || "fluid" == b) && v.setAttr(c, {alt: h.text ? m ? h.text : h.text + " [" + i + "]" : i});
                var u = {mode: b, el: c, holderSettings: {dimensions: f, theme: h, flags: d}, engineSettings: r};
                "image" == b ? (d.auto || (c.style.width = f.width + "px", c.style.height = f.height + "px"), "html" == r.renderer ? c.style.backgroundColor = h.bg : (g(u), "exact" == d.textmode && (c.holderData.resizeUpdate = !0, E.vars.resizableImages.push(c), j(c)))) : "background" == b && "html" != r.renderer ? g(u) : "fluid" == b && (c.holderData.resizeUpdate = !0, "%" == f.height.slice(-1) ? c.style.height = f.height : null != d.auto && d.auto || (c.style.height = f.height + "px"), "%" == f.width.slice(-1) ? c.style.width = f.width : null != d.auto && d.auto || (c.style.width = f.width + "px"), ("inline" == c.style.display || "" === c.style.display || "none" == c.style.display) && (c.style.display = "block"), k(c), "html" == r.renderer ? c.style.backgroundColor = h.bg : (E.vars.resizableImages.push(c), j(c)))
            }

            function g(a) {
                function c() {
                    var b = null;
                    switch (i.renderer) {
                        case"canvas":
                            b = z(k, a);
                            break;
                        case"svg":
                            b = y(k, a);
                            break;
                        default:
                            throw"Holder: invalid renderer: " + i.renderer
                    }
                    return b
                }

                var d = null, e = a.mode, f = a.el, g = a.holderSettings, i = a.engineSettings;
                switch (i.renderer) {
                    case"svg":
                        if (!E.setup.supportsSVG)return;
                        break;
                    case"canvas":
                        if (!E.setup.supportsCanvas)return;
                        break;
                    default:
                        return
                }
                var j = {
                    width: g.dimensions.width,
                    height: g.dimensions.height,
                    theme: g.theme,
                    flags: g.flags
                }, k = h(j);
                if (d = c(), null == d)throw"Holder: couldn't render placeholder";
                "background" == e ? (f.style.backgroundImage = "url(" + d + ")", f.style.backgroundSize = j.width + "px " + j.height + "px") : ("img" === f.nodeName.toLowerCase() ? v.setAttr(f, {src: d}) : "object" === f.nodeName.toLowerCase() && v.setAttr(f, {
                    data: d,
                    type: "image/svg+xml"
                }), i.reRender && b.setTimeout(function () {
                    var a = c();
                    if (null == a)throw"Holder: couldn't render placeholder";
                    "img" === f.nodeName.toLowerCase() ? v.setAttr(f, {src: a}) : "object" === f.nodeName.toLowerCase() && v.setAttr(f, {
                        data: a,
                        type: "image/svg+xml"
                    })
                }, 150)), v.setAttr(f, {"data-holder-rendered": !0})
            }

            function h(a) {
                function b(a, b, c, d) {
                    b.width = c, b.height = d, a.width = Math.max(a.width, b.width), a.height += b.height
                }

                var c = E.defaults.size;
                switch (parseFloat(a.theme.size) ? c = a.theme.size : parseFloat(a.flags.size) && (c = a.flags.size), a.font = {
                    family: a.theme.font ? a.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                    size: i(a.width, a.height, c, E.defaults.scale),
                    units: a.theme.units ? a.theme.units : E.defaults.units,
                    weight: a.theme.fontweight ? a.theme.fontweight : "bold"
                }, a.text = a.theme.text || Math.floor(a.width) + "x" + Math.floor(a.height), a.noWrap = a.theme.nowrap || a.flags.nowrap, a.align = a.theme.align || a.flags.align || "center", a.flags.textmode) {
                    case"literal":
                        a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
                        break;
                    case"exact":
                        if (!a.flags.exactDimensions)break;
                        a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
                }
                var d = a.flags.lineWrap || E.setup.lineWrapRatio, e = a.width * d, f = e, g = new s({
                    width: a.width,
                    height: a.height
                }), h = g.Shape, j = new h.Rect("holderBg", {fill: a.theme.bg});
                if (j.resize(a.width, a.height), g.root.add(j), a.flags.outline) {
                    var k = new w(j.properties.fill);
                    k = k.lighten(k.lighterThan("7f7f7f") ? -.1 : .1), j.properties.outline = {
                        fill: k.toHex(!0),
                        width: 2
                    }
                }
                var l = a.theme.fg;
                if (a.flags.autoFg) {
                    var m = new w(j.properties.fill), n = new w("fff"), o = new w("000", {alpha: .285714});
                    l = m.blendAlpha(m.lighterThan("7f7f7f") ? o : n).toHex(!0)
                }
                var p = new h.Group("holderTextGroup", {text: a.text, align: a.align, font: a.font, fill: l});
                p.moveTo(null, null, 1), g.root.add(p);
                var q = p.textPositionData = F(g);
                if (!q)throw"Holder: staging fallback not supported yet.";
                p.properties.leading = q.boundingBox.height;
                var r = null, t = null;
                if (q.lineCount > 1) {
                    var u, v = 0, x = 0, y = 0;
                    t = new h.Group("line" + y), ("left" === a.align || "right" === a.align) && (f = a.width * (1 - 2 * (1 - d)));
                    for (var z = 0; z < q.words.length; z++) {
                        var A = q.words[z];
                        r = new h.Text(A.text);
                        var B = "\\n" == A.text;
                        !a.noWrap && (v + A.width >= f || B === !0) && (b(p, t, v, p.properties.leading), p.add(t), v = 0, x += p.properties.leading, y += 1, t = new h.Group("line" + y), t.y = x), B !== !0 && (r.moveTo(v, 0), v += q.spaceWidth + A.width, t.add(r))
                    }
                    if (b(p, t, v, p.properties.leading), p.add(t), "left" === a.align)p.moveTo(a.width - e, null, null); else if ("right" === a.align) {
                        for (u in p.children)t = p.children[u], t.moveTo(a.width - t.width, null, null);
                        p.moveTo(0 - (a.width - e), null, null)
                    } else {
                        for (u in p.children)t = p.children[u], t.moveTo((p.width - t.width) / 2, null, null);
                        p.moveTo((a.width - p.width) / 2, null, null)
                    }
                    p.moveTo(null, (a.height - p.height) / 2, null), (a.height - p.height) / 2 < 0 && p.moveTo(null, 0, null)
                } else r = new h.Text(a.text), t = new h.Group("line0"), t.add(r), p.add(t), "left" === a.align ? p.moveTo(a.width - e, null, null) : "right" === a.align ? p.moveTo(0 - (a.width - e), null, null) : p.moveTo((a.width - q.boundingBox.width) / 2, null, null), p.moveTo(null, (a.height - q.boundingBox.height) / 2, null);
                return g
            }

            function i(a, b, c, d) {
                var e = parseInt(a, 10), f = parseInt(b, 10), g = Math.max(e, f), h = Math.min(e, f), i = .8 * Math.min(h, g * d);
                return Math.round(Math.max(c, i))
            }

            function j(a) {
                var b;
                b = null == a || null == a.nodeType ? E.vars.resizableImages : [a];
                for (var c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    if (e.holderData) {
                        var f = e.holderData.flags, h = B(e);
                        if (h) {
                            if (!e.holderData.resizeUpdate)continue;
                            if (f.fluid && f.auto) {
                                var i = e.holderData.fluidConfig;
                                switch (i.mode) {
                                    case"width":
                                        h.height = h.width / i.ratio;
                                        break;
                                    case"height":
                                        h.width = h.height * i.ratio
                                }
                            }
                            var j = {
                                mode: "image",
                                holderSettings: {dimensions: h, theme: f.theme, flags: f},
                                el: e,
                                engineSettings: e.holderData.engineSettings
                            };
                            "exact" == f.textmode && (f.exactDimensions = h, j.holderSettings.dimensions = f.dimensions), g(j)
                        } else n(e)
                    }
                }
            }

            function k(a) {
                if (a.holderData) {
                    var b = B(a);
                    if (b) {
                        var c = a.holderData.flags, d = {
                            fluidHeight: "%" == c.dimensions.height.slice(-1),
                            fluidWidth: "%" == c.dimensions.width.slice(-1),
                            mode: null,
                            initialDimensions: b
                        };
                        d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height), a.holderData.fluidConfig = d
                    } else n(a)
                }
            }

            function l() {
                var a, c = [], d = Object.keys(E.vars.invisibleImages);
                d.forEach(function (b) {
                    a = E.vars.invisibleImages[b], B(a) && "img" == a.nodeName.toLowerCase() && (c.push(a), delete E.vars.invisibleImages[b])
                }), c.length && D.run({images: c}), setTimeout(function () {
                    b.requestAnimationFrame(l)
                }, 10)
            }

            function m() {
                E.vars.visibilityCheckStarted || (b.requestAnimationFrame(l), E.vars.visibilityCheckStarted = !0)
            }

            function n(a) {
                a.holderData.invisibleId || (E.vars.invisibleId += 1, E.vars.invisibleImages["i" + E.vars.invisibleId] = a, a.holderData.invisibleId = E.vars.invisibleId)
            }

            function o(a) {
                E.vars.debounceTimer || a.call(this), E.vars.debounceTimer && b.clearTimeout(E.vars.debounceTimer), E.vars.debounceTimer = b.setTimeout(function () {
                    E.vars.debounceTimer = null, a.call(this)
                }, E.setup.debounce)
            }

            function p() {
                o(function () {
                    j(null)
                })
            }

            var q = c(2), r = c(3), s = c(10), t = c(11), u = c(12), v = c(13), w = c(14), x = c(15), y = c(16), z = c(19), A = t.extend, B = t.dimensionCheck, C = x.svg_ns, D = {
                version: x.version,
                addTheme: function (a, b) {
                    return null != a && null != b && (E.settings.themes[a] = b), delete E.vars.cache.themeKeys, this
                },
                addImage: function (a, b) {
                    var c = v.getNodeArray(b);
                    return c.forEach(function (b) {
                        var c = v.newEl("img"), d = {};
                        d[E.setup.dataAttr] = a, v.setAttr(c, d), b.appendChild(c)
                    }), this
                },
                setResizeUpdate: function (a, b) {
                    a.holderData && (a.holderData.resizeUpdate = !!b, a.holderData.resizeUpdate && j(a))
                },
                run: function (a) {
                    a = a || {};
                    var c = {}, g = A(E.settings, a);
                    E.vars.preempted = !0, E.vars.dataAttr = g.dataAttr || E.setup.dataAttr, c.renderer = g.renderer ? g.renderer : E.setup.renderer, -1 === E.setup.renderers.join(",").indexOf(c.renderer) && (c.renderer = E.setup.supportsSVG ? "svg" : E.setup.supportsCanvas ? "canvas" : "html");
                    var h = v.getNodeArray(g.images), i = v.getNodeArray(g.bgnodes), j = v.getNodeArray(g.stylenodes), k = v.getNodeArray(g.objects);
                    return c.stylesheets = [], c.svgXMLStylesheet = !0, c.noFontFallback = !!g.noFontFallback && g.noFontFallback, j.forEach(function (a) {
                        if (a.attributes.rel && a.attributes.href && "stylesheet" == a.attributes.rel.value) {
                            var b = a.attributes.href.value, d = v.newEl("a");
                            d.href = b;
                            var e = d.protocol + "//" + d.host + d.pathname + d.search;
                            c.stylesheets.push(e)
                        }
                    }), i.forEach(function (a) {
                        if (b.getComputedStyle) {
                            var d = b.getComputedStyle(a, null).getPropertyValue("background-image"), h = a.getAttribute("data-background-src"), i = h || d, j = null, k = g.domain + "/", l = i.indexOf(k);
                            if (0 === l)j = i; else if (1 === l && "?" === i[0])j = i.slice(1); else {
                                var m = i.substr(l).match(/([^\"]*)"?\)/);
                                if (null !== m)j = m[1]; else if (0 === i.indexOf("url("))throw"Holder: unable to parse background URL: " + i
                            }
                            if (null != j) {
                                var n = e(j, g);
                                n && f({mode: "background", el: a, flags: n, engineSettings: c})
                            }
                        }
                    }), k.forEach(function (a) {
                        var b = {};
                        try {
                            b.data = a.getAttribute("data"), b.dataSrc = a.getAttribute(E.vars.dataAttr)
                        } catch (e) {
                        }
                        var f = null != b.data && 0 === b.data.indexOf(g.domain), h = null != b.dataSrc && 0 === b.dataSrc.indexOf(g.domain);
                        f ? d(g, c, b.data, a) : h && d(g, c, b.dataSrc, a)
                    }), h.forEach(function (a) {
                        var b = {};
                        try {
                            b.src = a.getAttribute("src"), b.dataSrc = a.getAttribute(E.vars.dataAttr), b.rendered = a.getAttribute("data-holder-rendered")
                        } catch (e) {
                        }
                        var f = null != b.src, h = null != b.dataSrc && 0 === b.dataSrc.indexOf(g.domain), i = null != b.rendered && "true" == b.rendered;
                        f ? 0 === b.src.indexOf(g.domain) ? d(g, c, b.src, a) : h && (i ? d(g, c, b.dataSrc, a) : !function (a, b, c, e, f) {
                            t.imageExists(a, function (a) {
                                a || d(b, c, e, f)
                            })
                        }(b.src, g, c, b.dataSrc, a)) : h && d(g, c, b.dataSrc, a)
                    }), this
                }
            }, E = {
                settings: {
                    domain: "holder.js",
                    images: "img",
                    objects: "object",
                    bgnodes: "body .holderjs",
                    stylenodes: "head link.holderjs",
                    themes: {
                        gray: {bg: "#EEEEEE", fg: "#AAAAAA"},
                        social: {bg: "#3a5a97", fg: "#FFFFFF"},
                        industrial: {bg: "#434A52", fg: "#C2F200"},
                        sky: {bg: "#0D8FDB", fg: "#FFFFFF"},
                        vine: {bg: "#39DBAC", fg: "#1E292C"},
                        lava: {bg: "#F8591A", fg: "#1C2846"}
                    }
                }, defaults: {size: 10, units: "pt", scale: 1 / 16}
            }, F = function () {
                var a = null, b = null, c = null;
                return function (d) {
                    var e = d.root;
                    if (E.setup.supportsSVG) {
                        var f = !1, g = function (a) {
                            return document.createTextNode(a)
                        };
                        (null == a || a.parentNode !== document.body) && (f = !0), a = u.initSVG(a, e.properties.width, e.properties.height), a.style.display = "block", f && (b = v.newEl("text", C), c = g(null), v.setAttr(b, {x: 0}), b.appendChild(c), a.appendChild(b), document.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
                        var h = e.children.holderTextGroup, i = h.properties;
                        v.setAttr(b, {
                            y: i.font.size,
                            style: t.cssProps({
                                "font-weight": i.font.weight,
                                "font-size": i.font.size + i.font.units,
                                "font-family": i.font.family
                            })
                        }), c.nodeValue = i.text;
                        var j = b.getBBox(), k = Math.ceil(j.width / e.properties.width), l = i.text.split(" "), m = i.text.match(/\\n/g);
                        k += null == m ? 0 : m.length, c.nodeValue = i.text.replace(/[ ]+/g, "");
                        var n = b.getComputedTextLength(), o = j.width - n, p = Math.round(o / Math.max(1, l.length - 1)), q = [];
                        if (k > 1) {
                            c.nodeValue = "";
                            for (var r = 0; r < l.length; r++)if (0 !== l[r].length) {
                                c.nodeValue = t.decodeHtmlEntity(l[r]);
                                var s = b.getBBox();
                                q.push({text: l[r], width: s.width})
                            }
                        }
                        return a.style.display = "none", {spaceWidth: p, lineCount: k, boundingBox: j, words: q}
                    }
                    return !1
                }
            }();
            for (var G in E.flags)E.flags.hasOwnProperty(G) && (E.flags[G].match = function (a) {
                return a.match(this.regex)
            });
            E.setup = {
                renderer: "html",
                debounce: 100,
                ratio: 1,
                supportsCanvas: !1,
                supportsSVG: !1,
                lineWrapRatio: .9,
                dataAttr: "data-src",
                renderers: ["html", "canvas", "svg"]
            }, E.vars = {
                preempted: !1,
                resizableImages: [],
                invisibleImages: {},
                invisibleId: 0,
                visibilityCheckStarted: !1,
                debounceTimer: null,
                cache: {}
            }, function () {
                var a = v.newEl("canvas");
                a.getContext && -1 != a.toDataURL("image/png").indexOf("data:image/png") && (E.setup.renderer = "canvas", E.setup.supportsCanvas = !0), document.createElementNS && document.createElementNS(C, "svg").createSVGRect && (E.setup.renderer = "svg", E.setup.supportsSVG = !0)
            }(), m(), q && q(function () {
                E.vars.preempted || D.run(), b.addEventListener ? (b.addEventListener("resize", p, !1), b.addEventListener("orientationchange", p, !1)) : b.attachEvent("onresize", p), "object" == typeof b.Turbolinks && b.document.addEventListener("page:change", function () {
                    D.run()
                })
            }), a.exports = D
        }).call(b, function () {
            return this
        }())
    }, function (a, b) {
        function c(a) {
            function b(a) {
                if (!v) {
                    if (!g.body)return e(b);
                    for (v = !0; a = w.shift();)e(a)
                }
            }

            function c(a) {
                (t || a.type === i || g[m] === l) && (d(), b())
            }

            function d() {
                t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
            }

            function e(a, b) {
                setTimeout(a, +b >= 0 ? b : 1)
            }

            function f(a) {
                v ? e(a) : w.push(a)
            }

            null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function y() {
                document.removeEventListener("DOMContentLoaded", y, !1), document.readyState = "complete"
            }, !1), document.readyState = "loading");
            var g = a.document, h = g.documentElement, i = "load", j = !1, k = "on" + i, l = "complete", m = "readyState", n = "attachEvent", o = "detachEvent", p = "addEventListener", q = "DOMContentLoaded", r = "onreadystatechange", s = "removeEventListener", t = p in g, u = j, v = j, w = [];
            if (g[m] === l)e(b); else if (t)g[p](q, c, j), a[p](i, c, j); else {
                g[n](r, c), a[n](k, c);
                try {
                    u = null == a.frameElement && h
                } catch (x) {
                }
                u && u.doScroll && !function z() {
                    if (!v) {
                        try {
                            u.doScroll("left")
                        } catch (a) {
                            return e(z, 50)
                        }
                        d(), b()
                    }
                }()
            }
            return f.version = "1.4.0", f.isReady = function () {
                return v
            }, f
        }

        a.exports = "undefined" != typeof window && c(window)
    }, function (a, b, c) {
        var d = encodeURIComponent, e = decodeURIComponent, f = c(4), g = c(5), h = /(\w+)\[(\d+)\]/, i = /\w+\.\w+/;
        b.parse = function (a) {
            if ("string" != typeof a)return {};
            if (a = f(a), "" === a)return {};
            "?" === a.charAt(0) && (a = a.slice(1));
            for (var b = {}, c = a.split("&"), d = 0; d < c.length; d++) {
                var g, j, k, l = c[d].split("="), m = e(l[0]);
                if (g = h.exec(m))b[g[1]] = b[g[1]] || [], b[g[1]][g[2]] = e(l[1]); else if (g = i.test(m)) {
                    for (g = m.split("."), j = b; g.length;)if (k = g.shift(), k.length) {
                        if (j[k]) {
                            if (j[k] && "object" != typeof j[k])break
                        } else j[k] = {};
                        g.length || (j[k] = e(l[1])), j = j[k]
                    }
                } else b[l[0]] = null == l[1] ? "" : e(l[1])
            }
            return b
        }, b.stringify = function (a) {
            if (!a)return "";
            var b = [];
            for (var c in a) {
                var e = a[c];
                if ("array" != g(e))b.push(d(c) + "=" + d(a[c])); else for (var f = 0; f < e.length; ++f)b.push(d(c + "[" + f + "]") + "=" + d(e[f]))
            }
            return b.join("&")
        }
    }, function (a, b) {
        function c(a) {
            return a.replace(/^\s*|\s*$/g, "")
        }

        b = a.exports = c, b.left = function (a) {
            return a.replace(/^\s*/, "")
        }, b.right = function (a) {
            return a.replace(/\s*$/, "")
        }
    }, function (a, b, c) {
        (function (b) {
            var c = Object.prototype.toString;
            a.exports = function (a) {
                switch (c.call(a)) {
                    case"[object Date]":
                        return "date";
                    case"[object RegExp]":
                        return "regexp";
                    case"[object Arguments]":
                        return "arguments";
                    case"[object Array]":
                        return "array";
                    case"[object Error]":
                        return "error"
                }
                return null === a ? "null" : void 0 === a ? "undefined" : a !== a ? "nan" : a && 1 === a.nodeType ? "element" : "undefined" != typeof b && b.isBuffer(a) ? "buffer" : (a = a.valueOf ? a.valueOf() : Object.prototype.valueOf.apply(a), typeof a)
            }
        }).call(b, c(6).Buffer)
    }, function (a, b, c) {
        (function (a, d) {
            function e() {
                function a() {
                }

                try {
                    var b = new Uint8Array(1);
                    return b.foo = function () {
                        return 42
                    }, b.constructor = a, 42 === b.foo() && b.constructor === a && "function" == typeof b.subarray && 0 === b.subarray(1, 1).byteLength
                } catch (c) {
                    return !1
                }
            }

            function f() {
                return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(b) {
                return this instanceof a ? (this.length = 0, this.parent = void 0, "number" == typeof b ? g(this, b) : "string" == typeof b ? h(this, b, arguments.length > 1 ? arguments[1] : "utf8") : i(this, b)) : arguments.length > 1 ? new a(b, arguments[1]) : new a(b)
            }

            function g(b, c) {
                if (b = p(b, 0 > c ? 0 : 0 | q(c)), !a.TYPED_ARRAY_SUPPORT)for (var d = 0; c > d; d++)b[d] = 0;
                return b
            }

            function h(a, b, c) {
                ("string" != typeof c || "" === c) && (c = "utf8");
                var d = 0 | s(b, c);
                return a = p(a, d), a.write(b, c), a
            }

            function i(b, c) {
                if (a.isBuffer(c))return j(b, c);
                if (Y(c))return k(b, c);
                if (null == c)throw new TypeError("must start with number, buffer, array or string");
                if ("undefined" != typeof ArrayBuffer) {
                    if (c.buffer instanceof ArrayBuffer)return l(b, c);
                    if (c instanceof ArrayBuffer)return m(b, c)
                }
                return c.length ? n(b, c) : o(b, c)
            }

            function j(a, b) {
                var c = 0 | q(b.length);
                return a = p(a, c), b.copy(a, 0, 0, c), a
            }

            function k(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1)a[d] = 255 & b[d];
                return a
            }

            function l(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1)a[d] = 255 & b[d];
                return a
            }

            function m(b, c) {
                return a.TYPED_ARRAY_SUPPORT ? (c.byteLength, b = a._augment(new Uint8Array(c))) : b = l(b, new Uint8Array(c)), b
            }

            function n(a, b) {
                var c = 0 | q(b.length);
                a = p(a, c);
                for (var d = 0; c > d; d += 1)a[d] = 255 & b[d];
                return a
            }

            function o(a, b) {
                var c, d = 0;
                "Buffer" === b.type && Y(b.data) && (c = b.data, d = 0 | q(c.length)), a = p(a, d);
                for (var e = 0; d > e; e += 1)a[e] = 255 & c[e];
                return a
            }

            function p(b, c) {
                a.TYPED_ARRAY_SUPPORT ? (b = a._augment(new Uint8Array(c)), b.__proto__ = a.prototype) : (b.length = c, b._isBuffer = !0);
                var d = 0 !== c && c <= a.poolSize >>> 1;
                return d && (b.parent = Z), b
            }

            function q(a) {
                if (a >= f())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f().toString(16) + " bytes");
                return 0 | a
            }

            function r(b, c) {
                if (!(this instanceof r))return new r(b, c);
                var d = new a(b, c);
                return delete d.parent, d
            }

            function s(a, b) {
                "string" != typeof a && (a = "" + a);
                var c = a.length;
                if (0 === c)return 0;
                for (var d = !1; ;)switch (b) {
                    case"ascii":
                    case"binary":
                    case"raw":
                    case"raws":
                        return c;
                    case"utf8":
                    case"utf-8":
                        return R(a).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * c;
                    case"hex":
                        return c >>> 1;
                    case"base64":
                        return U(a).length;
                    default:
                        if (d)return R(a).length;
                        b = ("" + b).toLowerCase(), d = !0
                }
            }

            function t(a, b, c) {
                var d = !1;
                if (b = 0 | b, c = void 0 === c || c === 1 / 0 ? this.length : 0 | c, a || (a = "utf8"), 0 > b && (b = 0), c > this.length && (c = this.length), b >= c)return "";
                for (; ;)switch (a) {
                    case"hex":
                        return F(this, b, c);
                    case"utf8":
                    case"utf-8":
                        return B(this, b, c);
                    case"ascii":
                        return D(this, b, c);
                    case"binary":
                        return E(this, b, c);
                    case"base64":
                        return A(this, b, c);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return G(this, b, c);
                    default:
                        if (d)throw new TypeError("Unknown encoding: " + a);
                        a = (a + "").toLowerCase(), d = !0
                }
            }

            function u(a, b, c, d) {
                c = Number(c) || 0;
                var e = a.length - c;
                d ? (d = Number(d), d > e && (d = e)) : d = e;
                var f = b.length;
                if (f % 2 !== 0)throw new Error("Invalid hex string");
                d > f / 2 && (d = f / 2);
                for (var g = 0; d > g; g++) {
                    var h = parseInt(b.substr(2 * g, 2), 16);
                    if (isNaN(h))throw new Error("Invalid hex string");
                    a[c + g] = h
                }
                return g
            }

            function v(a, b, c, d) {
                return V(R(b, a.length - c), a, c, d)
            }

            function w(a, b, c, d) {
                return V(S(b), a, c, d)
            }

            function x(a, b, c, d) {
                return w(a, b, c, d)
            }

            function y(a, b, c, d) {
                return V(U(b), a, c, d)
            }

            function z(a, b, c, d) {
                return V(T(b, a.length - c), a, c, d)
            }

            function A(a, b, c) {
                return 0 === b && c === a.length ? W.fromByteArray(a) : W.fromByteArray(a.slice(b, c))
            }

            function B(a, b, c) {
                c = Math.min(a.length, c);
                for (var d = [], e = b; c > e;) {
                    var f = a[e], g = null, h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (c >= e + h) {
                        var i, j, k, l;
                        switch (h) {
                            case 1:
                                128 > f && (g = f);
                                break;
                            case 2:
                                i = a[e + 1], 128 === (192 & i) && (l = (31 & f) << 6 | 63 & i, l > 127 && (g = l));
                                break;
                            case 3:
                                i = a[e + 1], j = a[e + 2], 128 === (192 & i) && 128 === (192 & j) && (l = (15 & f) << 12 | (63 & i) << 6 | 63 & j, l > 2047 && (55296 > l || l > 57343) && (g = l));
                                break;
                            case 4:
                                i = a[e + 1], j = a[e + 2], k = a[e + 3], 128 === (192 & i) && 128 === (192 & j) && 128 === (192 & k) && (l = (15 & f) << 18 | (63 & i) << 12 | (63 & j) << 6 | 63 & k, l > 65535 && 1114112 > l && (g = l))
                        }
                    }
                    null === g ? (g = 65533, h = 1) : g > 65535 && (g -= 65536, d.push(g >>> 10 & 1023 | 55296), g = 56320 | 1023 & g), d.push(g), e += h
                }
                return C(d)
            }

            function C(a) {
                var b = a.length;
                if ($ >= b)return String.fromCharCode.apply(String, a);
                for (var c = "", d = 0; b > d;)c += String.fromCharCode.apply(String, a.slice(d, d += $));
                return c
            }

            function D(a, b, c) {
                var d = "";
                c = Math.min(a.length, c);
                for (var e = b; c > e; e++)d += String.fromCharCode(127 & a[e]);
                return d
            }

            function E(a, b, c) {
                var d = "";
                c = Math.min(a.length, c);
                for (var e = b; c > e; e++)d += String.fromCharCode(a[e]);
                return d
            }

            function F(a, b, c) {
                var d = a.length;
                (!b || 0 > b) && (b = 0), (!c || 0 > c || c > d) && (c = d);
                for (var e = "", f = b; c > f; f++)e += Q(a[f]);
                return e
            }

            function G(a, b, c) {
                for (var d = a.slice(b, c), e = "", f = 0; f < d.length; f += 2)e += String.fromCharCode(d[f] + 256 * d[f + 1]);
                return e
            }

            function H(a, b, c) {
                if (a % 1 !== 0 || 0 > a)throw new RangeError("offset is not uint");
                if (a + b > c)throw new RangeError("Trying to access beyond buffer length")
            }

            function I(b, c, d, e, f, g) {
                if (!a.isBuffer(b))throw new TypeError("buffer must be a Buffer instance");
                if (c > f || g > c)throw new RangeError("value is out of bounds");
                if (d + e > b.length)throw new RangeError("index out of range")
            }

            function J(a, b, c, d) {
                0 > b && (b = 65535 + b + 1);
                for (var e = 0, f = Math.min(a.length - c, 2); f > e; e++)a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e)
            }

            function K(a, b, c, d) {
                0 > b && (b = 4294967295 + b + 1);
                for (var e = 0, f = Math.min(a.length - c, 4); f > e; e++)a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255
            }

            function L(a, b, c, d, e, f) {
                if (b > e || f > b)throw new RangeError("value is out of bounds");
                if (c + d > a.length)throw new RangeError("index out of range");
                if (0 > c)throw new RangeError("index out of range")
            }

            function M(a, b, c, d, e) {
                return e || L(a, b, c, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(a, b, c, d, 23, 4), c + 4
            }

            function N(a, b, c, d, e) {
                return e || L(a, b, c, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(a, b, c, d, 52, 8), c + 8
            }

            function O(a) {
                if (a = P(a).replace(aa, ""), a.length < 2)return "";
                for (; a.length % 4 !== 0;)a += "=";
                return a
            }

            function P(a) {
                return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
            }

            function Q(a) {
                return 16 > a ? "0" + a.toString(16) : a.toString(16)
            }

            function R(a, b) {
                b = b || 1 / 0;
                for (var c, d = a.length, e = null, f = [], g = 0; d > g; g++) {
                    if (c = a.charCodeAt(g), c > 55295 && 57344 > c) {
                        if (!e) {
                            if (c > 56319) {
                                (b -= 3) > -1 && f.push(239, 191, 189);
                                continue
                            }
                            if (g + 1 === d) {
                                (b -= 3) > -1 && f.push(239, 191, 189);
                                continue
                            }
                            e = c;
                            continue
                        }
                        if (56320 > c) {
                            (b -= 3) > -1 && f.push(239, 191, 189), e = c;
                            continue
                        }
                        c = e - 55296 << 10 | c - 56320 | 65536
                    } else e && (b -= 3) > -1 && f.push(239, 191, 189);
                    if (e = null, 128 > c) {
                        if ((b -= 1) < 0)break;
                        f.push(c)
                    } else if (2048 > c) {
                        if ((b -= 2) < 0)break;
                        f.push(c >> 6 | 192, 63 & c | 128)
                    } else if (65536 > c) {
                        if ((b -= 3) < 0)break;
                        f.push(c >> 12 | 224, c >> 6 & 63 | 128, 63 & c | 128)
                    } else {
                        if (!(1114112 > c))throw new Error("Invalid code point");
                        if ((b -= 4) < 0)break;
                        f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, 63 & c | 128)
                    }
                }
                return f
            }

            function S(a) {
                for (var b = [], c = 0; c < a.length; c++)b.push(255 & a.charCodeAt(c));
                return b
            }

            function T(a, b) {
                for (var c, d, e, f = [], g = 0; g < a.length && !((b -= 2) < 0); g++)c = a.charCodeAt(g), d = c >> 8, e = c % 256, f.push(e), f.push(d);
                return f
            }

            function U(a) {
                return W.toByteArray(O(a))
            }

            function V(a, b, c, d) {
                for (var e = 0; d > e && !(e + c >= b.length || e >= a.length); e++)b[e + c] = a[e];
                return e
            }

            var W = c(7), X = c(8), Y = c(9);
            b.Buffer = a, b.SlowBuffer = r, b.INSPECT_MAX_BYTES = 50, a.poolSize = 8192;
            var Z = {};
            a.TYPED_ARRAY_SUPPORT = void 0 !== d.TYPED_ARRAY_SUPPORT ? d.TYPED_ARRAY_SUPPORT : e(), a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array), a.isBuffer = function (a) {
                return !(null == a || !a._isBuffer)
            }, a.compare = function (b, c) {
                if (!a.isBuffer(b) || !a.isBuffer(c))throw new TypeError("Arguments must be Buffers");
                if (b === c)return 0;
                for (var d = b.length, e = c.length, f = 0, g = Math.min(d, e); g > f && b[f] === c[f];)++f;
                return f !== g && (d = b[f], e = c[f]), e > d ? -1 : d > e ? 1 : 0
            }, a.isEncoding = function (a) {
                switch (String(a).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"binary":
                    case"base64":
                    case"raw":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, a.concat = function (b, c) {
                if (!Y(b))throw new TypeError("list argument must be an Array of Buffers.");
                if (0 === b.length)return new a(0);
                var d;
                if (void 0 === c)for (c = 0, d = 0; d < b.length; d++)c += b[d].length;
                var e = new a(c), f = 0;
                for (d = 0; d < b.length; d++) {
                    var g = b[d];
                    g.copy(e, f), f += g.length
                }
                return e
            }, a.byteLength = s, a.prototype.length = void 0, a.prototype.parent = void 0, a.prototype.toString = function () {
                var a = 0 | this.length;
                return 0 === a ? "" : 0 === arguments.length ? B(this, 0, a) : t.apply(this, arguments)
            }, a.prototype.equals = function (b) {
                if (!a.isBuffer(b))throw new TypeError("Argument must be a Buffer");
                return this === b || 0 === a.compare(this, b)
            }, a.prototype.inspect = function () {
                var a = "", c = b.INSPECT_MAX_BYTES;
                return this.length > 0 && (a = this.toString("hex", 0, c).match(/.{2}/g).join(" "), this.length > c && (a += " ... ")), "<Buffer " + a + ">"
            }, a.prototype.compare = function (b) {
                if (!a.isBuffer(b))throw new TypeError("Argument must be a Buffer");
                return this === b ? 0 : a.compare(this, b)
            }, a.prototype.indexOf = function (b, c) {
                function d(a, b, c) {
                    for (var d = -1, e = 0; c + e < a.length; e++)if (a[c + e] === b[-1 === d ? 0 : e - d]) {
                        if (-1 === d && (d = e), e - d + 1 === b.length)return c + d
                    } else d = -1;
                    return -1
                }

                if (c > 2147483647 ? c = 2147483647 : -2147483648 > c && (c = -2147483648), c >>= 0, 0 === this.length)return -1;
                if (c >= this.length)return -1;
                if (0 > c && (c = Math.max(this.length + c, 0)), "string" == typeof b)return 0 === b.length ? -1 : String.prototype.indexOf.call(this, b, c);
                if (a.isBuffer(b))return d(this, b, c);
                if ("number" == typeof b)return a.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, b, c) : d(this, [b], c);
                throw new TypeError("val must be string, number or Buffer")
            }, a.prototype.get = function (a) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(a)
            }, a.prototype.set = function (a, b) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(a, b)
            }, a.prototype.write = function (a, b, c, d) {
                if (void 0 === b)d = "utf8", c = this.length, b = 0; else if (void 0 === c && "string" == typeof b)d = b, c = this.length, b = 0; else if (isFinite(b))b = 0 | b, isFinite(c) ? (c = 0 | c, void 0 === d && (d = "utf8")) : (d = c, c = void 0); else {
                    var e = d;
                    d = b, b = 0 | c, c = e
                }
                var f = this.length - b;
                if ((void 0 === c || c > f) && (c = f), a.length > 0 && (0 > c || 0 > b) || b > this.length)throw new RangeError("attempt to write outside buffer bounds");
                d || (d = "utf8");
                for (var g = !1; ;)switch (d) {
                    case"hex":
                        return u(this, a, b, c);
                    case"utf8":
                    case"utf-8":
                        return v(this, a, b, c);
                    case"ascii":
                        return w(this, a, b, c);
                    case"binary":
                        return x(this, a, b, c);
                    case"base64":
                        return y(this, a, b, c);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return z(this, a, b, c);
                    default:
                        if (g)throw new TypeError("Unknown encoding: " + d);
                        d = ("" + d).toLowerCase(), g = !0
                }
            }, a.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var $ = 4096;
            a.prototype.slice = function (b, c) {
                var d = this.length;
                b = ~~b, c = void 0 === c ? d : ~~c, 0 > b ? (b += d, 0 > b && (b = 0)) : b > d && (b = d), 0 > c ? (c += d, 0 > c && (c = 0)) : c > d && (c = d), b > c && (c = b);
                var e;
                if (a.TYPED_ARRAY_SUPPORT)e = a._augment(this.subarray(b, c)); else {
                    var f = c - b;
                    e = new a(f, (void 0));
                    for (var g = 0; f > g; g++)e[g] = this[g + b]
                }
                return e.length && (e.parent = this.parent || this), e
            }, a.prototype.readUIntLE = function (a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);)d += this[a + f] * e;
                return d
            }, a.prototype.readUIntBE = function (a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a + --b], e = 1; b > 0 && (e *= 256);)d += this[a + --b] * e;
                return d
            }, a.prototype.readUInt8 = function (a, b) {
                return b || H(a, 1, this.length), this[a]
            }, a.prototype.readUInt16LE = function (a, b) {
                return b || H(a, 2, this.length), this[a] | this[a + 1] << 8
            }, a.prototype.readUInt16BE = function (a, b) {
                return b || H(a, 2, this.length), this[a] << 8 | this[a + 1]
            }, a.prototype.readUInt32LE = function (a, b) {
                return b || H(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
            }, a.prototype.readUInt32BE = function (a, b) {
                return b || H(a, 4, this.length), 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3])
            }, a.prototype.readIntLE = function (a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = this[a], e = 1, f = 0; ++f < b && (e *= 256);)d += this[a + f] * e;
                return e *= 128, d >= e && (d -= Math.pow(2, 8 * b)), d
            }, a.prototype.readIntBE = function (a, b, c) {
                a = 0 | a, b = 0 | b, c || H(a, b, this.length);
                for (var d = b, e = 1, f = this[a + --d]; d > 0 && (e *= 256);)f += this[a + --d] * e;
                return e *= 128, f >= e && (f -= Math.pow(2, 8 * b)), f
            }, a.prototype.readInt8 = function (a, b) {
                return b || H(a, 1, this.length), 128 & this[a] ? -1 * (255 - this[a] + 1) : this[a]
            }, a.prototype.readInt16LE = function (a, b) {
                b || H(a, 2, this.length);
                var c = this[a] | this[a + 1] << 8;
                return 32768 & c ? 4294901760 | c : c
            }, a.prototype.readInt16BE = function (a, b) {
                b || H(a, 2, this.length);
                var c = this[a + 1] | this[a] << 8;
                return 32768 & c ? 4294901760 | c : c
            }, a.prototype.readInt32LE = function (a, b) {
                return b || H(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24
            }, a.prototype.readInt32BE = function (a, b) {
                return b || H(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]
            }, a.prototype.readFloatLE = function (a, b) {
                return b || H(a, 4, this.length), X.read(this, a, !0, 23, 4)
            }, a.prototype.readFloatBE = function (a, b) {
                return b || H(a, 4, this.length), X.read(this, a, !1, 23, 4)
            }, a.prototype.readDoubleLE = function (a, b) {
                return b || H(a, 8, this.length), X.read(this, a, !0, 52, 8)
            }, a.prototype.readDoubleBE = function (a, b) {
                return b || H(a, 8, this.length), X.read(this, a, !1, 52, 8)
            }, a.prototype.writeUIntLE = function (a, b, c, d) {
                a = +a, b = 0 | b, c = 0 | c, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);
                var e = 1, f = 0;
                for (this[b] = 255 & a; ++f < c && (e *= 256);)this[b + f] = a / e & 255;
                return b + c
            }, a.prototype.writeUIntBE = function (a, b, c, d) {
                a = +a, b = 0 | b, c = 0 | c, d || I(this, a, b, c, Math.pow(2, 8 * c), 0);
                var e = c - 1, f = 1;
                for (this[b + e] = 255 & a; --e >= 0 && (f *= 256);)this[b + e] = a / f & 255;
                return b + c
            }, a.prototype.writeUInt8 = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (b = Math.floor(b)), this[c] = 255 & b, c + 1
            }, a.prototype.writeUInt16LE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[c] = 255 & b, this[c + 1] = b >>> 8) : J(this, b, c, !0), c + 2
            }, a.prototype.writeUInt16BE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[c] = b >>> 8, this[c + 1] = 255 & b) : J(this, b, c, !1), c + 2
            }, a.prototype.writeUInt32LE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[c + 3] = b >>> 24, this[c + 2] = b >>> 16, this[c + 1] = b >>> 8, this[c] = 255 & b) : K(this, b, c, !0), c + 4
            }, a.prototype.writeUInt32BE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[c] = b >>> 24, this[c + 1] = b >>> 16, this[c + 2] = b >>> 8, this[c + 3] = 255 & b) : K(this, b, c, !1), c + 4
            }, a.prototype.writeIntLE = function (a, b, c, d) {
                if (a = +a, b = 0 | b, !d) {
                    var e = Math.pow(2, 8 * c - 1);
                    I(this, a, b, c, e - 1, -e)
                }
                var f = 0, g = 1, h = 0 > a ? 1 : 0;
                for (this[b] = 255 & a; ++f < c && (g *= 256);)this[b + f] = (a / g >> 0) - h & 255;
                return b + c
            }, a.prototype.writeIntBE = function (a, b, c, d) {
                if (a = +a, b = 0 | b, !d) {
                    var e = Math.pow(2, 8 * c - 1);
                    I(this, a, b, c, e - 1, -e)
                }
                var f = c - 1, g = 1, h = 0 > a ? 1 : 0;
                for (this[b + f] = 255 & a; --f >= 0 && (g *= 256);)this[b + f] = (a / g >> 0) - h & 255;
                return b + c
            }, a.prototype.writeInt8 = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (b = Math.floor(b)), 0 > b && (b = 255 + b + 1), this[c] = 255 & b, c + 1
            }, a.prototype.writeInt16LE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[c] = 255 & b, this[c + 1] = b >>> 8) : J(this, b, c, !0), c + 2
            }, a.prototype.writeInt16BE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[c] = b >>> 8, this[c + 1] = 255 & b) : J(this, b, c, !1), c + 2
            }, a.prototype.writeInt32LE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[c] = 255 & b, this[c + 1] = b >>> 8, this[c + 2] = b >>> 16, this[c + 3] = b >>> 24) : K(this, b, c, !0), c + 4
            }, a.prototype.writeInt32BE = function (b, c, d) {
                return b = +b, c = 0 | c, d || I(this, b, c, 4, 2147483647, -2147483648), 0 > b && (b = 4294967295 + b + 1), a.TYPED_ARRAY_SUPPORT ? (this[c] = b >>> 24, this[c + 1] = b >>> 16, this[c + 2] = b >>> 8, this[c + 3] = 255 & b) : K(this, b, c, !1), c + 4
            }, a.prototype.writeFloatLE = function (a, b, c) {
                return M(this, a, b, !0, c)
            }, a.prototype.writeFloatBE = function (a, b, c) {
                return M(this, a, b, !1, c)
            }, a.prototype.writeDoubleLE = function (a, b, c) {
                return N(this, a, b, !0, c)
            }, a.prototype.writeDoubleBE = function (a, b, c) {
                return N(this, a, b, !1, c)
            }, a.prototype.copy = function (b, c, d, e) {
                if (d || (d = 0), e || 0 === e || (e = this.length), c >= b.length && (c = b.length), c || (c = 0), e > 0 && d > e && (e = d), e === d)return 0;
                if (0 === b.length || 0 === this.length)return 0;
                if (0 > c)throw new RangeError("targetStart out of bounds");
                if (0 > d || d >= this.length)throw new RangeError("sourceStart out of bounds");
                if (0 > e)throw new RangeError("sourceEnd out of bounds");
                e > this.length && (e = this.length), b.length - c < e - d && (e = b.length - c + d);
                var f, g = e - d;
                if (this === b && c > d && e > c)for (f = g - 1; f >= 0; f--)b[f + c] = this[f + d]; else if (1e3 > g || !a.TYPED_ARRAY_SUPPORT)for (f = 0; g > f; f++)b[f + c] = this[f + d]; else b._set(this.subarray(d, d + g), c);
                return g
            }, a.prototype.fill = function (a, b, c) {
                if (a || (a = 0), b || (b = 0), c || (c = this.length), b > c)throw new RangeError("end < start");
                if (c !== b && 0 !== this.length) {
                    if (0 > b || b >= this.length)throw new RangeError("start out of bounds");
                    if (0 > c || c > this.length)throw new RangeError("end out of bounds");
                    var d;
                    if ("number" == typeof a)for (d = b; c > d; d++)this[d] = a; else {
                        var e = R(a.toString()), f = e.length;
                        for (d = b; c > d; d++)this[d] = e[d % f]
                    }
                    return this
                }
            }, a.prototype.toArrayBuffer = function () {
                if ("undefined" != typeof Uint8Array) {
                    if (a.TYPED_ARRAY_SUPPORT)return new a(this).buffer;
                    for (var b = new Uint8Array(this.length), c = 0, d = b.length; d > c; c += 1)b[c] = this[c];
                    return b.buffer
                }
                throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
            };
            var _ = a.prototype;
            a._augment = function (b) {
                return b.constructor = a, b._isBuffer = !0, b._set = b.set, b.get = _.get, b.set = _.set, b.write = _.write, b.toString = _.toString, b.toLocaleString = _.toString, b.toJSON = _.toJSON, b.equals = _.equals, b.compare = _.compare, b.indexOf = _.indexOf, b.copy = _.copy, b.slice = _.slice, b.readUIntLE = _.readUIntLE, b.readUIntBE = _.readUIntBE, b.readUInt8 = _.readUInt8, b.readUInt16LE = _.readUInt16LE, b.readUInt16BE = _.readUInt16BE, b.readUInt32LE = _.readUInt32LE, b.readUInt32BE = _.readUInt32BE, b.readIntLE = _.readIntLE, b.readIntBE = _.readIntBE, b.readInt8 = _.readInt8, b.readInt16LE = _.readInt16LE, b.readInt16BE = _.readInt16BE, b.readInt32LE = _.readInt32LE, b.readInt32BE = _.readInt32BE, b.readFloatLE = _.readFloatLE, b.readFloatBE = _.readFloatBE, b.readDoubleLE = _.readDoubleLE, b.readDoubleBE = _.readDoubleBE, b.writeUInt8 = _.writeUInt8, b.writeUIntLE = _.writeUIntLE, b.writeUIntBE = _.writeUIntBE, b.writeUInt16LE = _.writeUInt16LE, b.writeUInt16BE = _.writeUInt16BE, b.writeUInt32LE = _.writeUInt32LE, b.writeUInt32BE = _.writeUInt32BE, b.writeIntLE = _.writeIntLE, b.writeIntBE = _.writeIntBE, b.writeInt8 = _.writeInt8, b.writeInt16LE = _.writeInt16LE, b.writeInt16BE = _.writeInt16BE, b.writeInt32LE = _.writeInt32LE, b.writeInt32BE = _.writeInt32BE, b.writeFloatLE = _.writeFloatLE, b.writeFloatBE = _.writeFloatBE, b.writeDoubleLE = _.writeDoubleLE, b.writeDoubleBE = _.writeDoubleBE, b.fill = _.fill, b.inspect = _.inspect, b.toArrayBuffer = _.toArrayBuffer, b
            };
            var aa = /[^+\/0-9A-Za-z-_]/g
        }).call(b, c(6).Buffer, function () {
            return this
        }())
    }, function (a, b, c) {
        var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        !function (a) {
            "use strict";
            function b(a) {
                var b = a.charCodeAt(0);
                return b === g || b === l ? 62 : b === h || b === m ? 63 : i > b ? -1 : i + 10 > b ? b - i + 26 + 26 : k + 26 > b ? b - k : j + 26 > b ? b - j + 26 : void 0
            }

            function c(a) {
                function c(a) {
                    j[l++] = a
                }

                var d, e, g, h, i, j;
                if (a.length % 4 > 0)throw new Error("Invalid string. Length must be a multiple of 4");
                var k = a.length;
                i = "=" === a.charAt(k - 2) ? 2 : "=" === a.charAt(k - 1) ? 1 : 0, j = new f(3 * a.length / 4 - i), g = i > 0 ? a.length - 4 : a.length;
                var l = 0;
                for (d = 0, e = 0; g > d; d += 4, e += 3)h = b(a.charAt(d)) << 18 | b(a.charAt(d + 1)) << 12 | b(a.charAt(d + 2)) << 6 | b(a.charAt(d + 3)), c((16711680 & h) >> 16), c((65280 & h) >> 8), c(255 & h);
                return 2 === i ? (h = b(a.charAt(d)) << 2 | b(a.charAt(d + 1)) >> 4, c(255 & h)) : 1 === i && (h = b(a.charAt(d)) << 10 | b(a.charAt(d + 1)) << 4 | b(a.charAt(d + 2)) >> 2, c(h >> 8 & 255), c(255 & h)), j
            }

            function e(a) {
                function b(a) {
                    return d.charAt(a)
                }

                function c(a) {
                    return b(a >> 18 & 63) + b(a >> 12 & 63) + b(a >> 6 & 63) + b(63 & a)
                }

                var e, f, g, h = a.length % 3, i = "";
                for (e = 0, g = a.length - h; g > e; e += 3)f = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], i += c(f);
                switch (h) {
                    case 1:
                        f = a[a.length - 1], i += b(f >> 2), i += b(f << 4 & 63), i += "==";
                        break;
                    case 2:
                        f = (a[a.length - 2] << 8) + a[a.length - 1], i += b(f >> 10), i += b(f >> 4 & 63), i += b(f << 2 & 63), i += "="
                }
                return i
            }

            var f = "undefined" != typeof Uint8Array ? Uint8Array : Array, g = "+".charCodeAt(0), h = "/".charCodeAt(0), i = "0".charCodeAt(0), j = "a".charCodeAt(0), k = "A".charCodeAt(0), l = "-".charCodeAt(0), m = "_".charCodeAt(0);
            a.toByteArray = c, a.fromByteArray = e
        }(b)
    }, function (a, b) {
        b.read = function (a, b, c, d, e) {
            var f, g, h = 8 * e - d - 1, i = (1 << h) - 1, j = i >> 1, k = -7, l = c ? e - 1 : 0, m = c ? -1 : 1, n = a[b + l];
            for (l += m, f = n & (1 << -k) - 1, n >>= -k, k += h; k > 0; f = 256 * f + a[b + l], l += m, k -= 8);
            for (g = f & (1 << -k) - 1, f >>= -k, k += d; k > 0; g = 256 * g + a[b + l], l += m, k -= 8);
            if (0 === f)f = 1 - j; else {
                if (f === i)return g ? NaN : (n ? -1 : 1) * (1 / 0);
                g += Math.pow(2, d), f -= j
            }
            return (n ? -1 : 1) * g * Math.pow(2, f - d)
        }, b.write = function (a, b, c, d, e, f) {
            var g, h, i, j = 8 * f - e - 1, k = (1 << j) - 1, l = k >> 1, m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0, n = d ? 0 : f - 1, o = d ? 1 : -1, p = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
            for (b = Math.abs(b), isNaN(b) || b === 1 / 0 ? (h = isNaN(b) ? 1 : 0, g = k) : (g = Math.floor(Math.log(b) / Math.LN2), b * (i = Math.pow(2, -g)) < 1 && (g--, i *= 2), b += g + l >= 1 ? m / i : m * Math.pow(2, 1 - l), b * i >= 2 && (g++, i /= 2), g + l >= k ? (h = 0, g = k) : g + l >= 1 ? (h = (b * i - 1) * Math.pow(2, e), g += l) : (h = b * Math.pow(2, l - 1) * Math.pow(2, e), g = 0)); e >= 8; a[c + n] = 255 & h, n += o, h /= 256, e -= 8);
            for (g = g << e | h, j += e; j > 0; a[c + n] = 255 & g, n += o, g /= 256, j -= 8);
            a[c + n - o] |= 128 * p
        }
    }, function (a, b) {
        var c = Array.isArray, d = Object.prototype.toString;
        a.exports = c || function (a) {
                return !!a && "[object Array]" == d.call(a)
            }
    }, function (a, b) {
        var c = function (a) {
            function b(a, b) {
                for (var c in b)a[c] = b[c];
                return a
            }

            var c = 1, d = function (a) {
                c++, this.parent = null, this.children = {}, this.id = c, this.name = "n" + c, "undefined" != typeof a && (this.name = a), this.x = this.y = this.z = 0, this.width = this.height = 0
            };
            d.prototype.resize = function (a, b) {
                null != a && (this.width = a), null != b && (this.height = b)
            }, d.prototype.moveTo = function (a, b, c) {
                this.x = null != a ? a : this.x, this.y = null != b ? b : this.y, this.z = null != c ? c : this.z
            }, d.prototype.add = function (a) {
                var b = a.name;
                if ("undefined" != typeof this.children[b])throw"SceneGraph: child already exists: " + b;
                this.children[b] = a, a.parent = this
            };
            var e = function () {
                d.call(this, "root"), this.properties = a
            };
            e.prototype = new d;
            var f = function (a, c) {
                if (d.call(this, a), this.properties = {fill: "#000000"}, "undefined" != typeof c)b(this.properties, c); else if ("undefined" != typeof a && "string" != typeof a)throw"SceneGraph: invalid node name"
            };
            f.prototype = new d;
            var g = function () {
                f.apply(this, arguments), this.type = "group"
            };
            g.prototype = new f;
            var h = function () {
                f.apply(this, arguments), this.type = "rect"
            };
            h.prototype = new f;
            var i = function (a) {
                f.call(this), this.type = "text", this.properties.text = a
            };
            i.prototype = new f;
            var j = new e;
            return this.Shape = {Rect: h, Text: i, Group: g}, this.root = j, this
        };
        a.exports = c
    }, function (a, b) {
        (function (a) {
            b.extend = function (a, b) {
                var c = {};
                for (var d in a)a.hasOwnProperty(d) && (c[d] = a[d]);
                if (null != b)for (var e in b)b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }, b.cssProps = function (a) {
                var b = [];
                for (var c in a)a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                return b.join(";")
            }, b.encodeHtmlEntity = function (a) {
                for (var b = [], c = 0, d = a.length - 1; d >= 0; d--)c = a.charCodeAt(d), c > 128 ? b.unshift(["&#", c, ";"].join("")) : b.unshift(a[d]);
                return b.join("")
            }, b.imageExists = function (a, b) {
                var c = new Image;
                c.onerror = function () {
                    b.call(this, !1)
                }, c.onload = function () {
                    b.call(this, !0)
                }, c.src = a
            }, b.decodeHtmlEntity = function (a) {
                return a.replace(/&#(\d+);/g, function (a, b) {
                    return String.fromCharCode(b)
                })
            }, b.dimensionCheck = function (a) {
                var b = {height: a.clientHeight, width: a.clientWidth};
                return !(!b.height || !b.width) && b
            }, b.truthy = function (a) {
                return "string" == typeof a ? "true" === a || "yes" === a || "1" === a || "on" === a || "✓" === a : !!a
            }, b.parseColor = function (a) {
                var b, c = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i, d = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/, e = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/, f = a.match(c);
                return null !== f ? (b = f[1] || f[2], "#" !== b[0] ? "#" + b : b) : (f = a.match(d), null !== f ? b = "rgb(" + f.slice(1).join(",") + ")" : (f = a.match(e), null !== f ? b = "rgba(" + f.slice(1).join(",") + ")" : null))
            }, b.canvasRatio = function () {
                var b = 1, c = 1;
                if (a.document) {
                    var d = a.document.createElement("canvas");
                    if (d.getContext) {
                        var e = d.getContext("2d");
                        b = a.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
                    }
                }
                return b / c
            }
        }).call(b, function () {
            return this
        }())
    }, function (a, b, c) {
        (function (a) {
            var d = c(13), e = "http://www.w3.org/2000/svg", f = 8;
            b.initSVG = function (a, b, c) {
                var g, h, i = !1;
                a && a.querySelector ? (h = a.querySelector("style"), null === h && (i = !0)) : (a = d.newEl("svg", e), i = !0), i && (g = d.newEl("defs", e), h = d.newEl("style", e), d.setAttr(h, {type: "text/css"}), g.appendChild(h), a.appendChild(g)), a.webkitMatchesSelector && a.setAttribute("xmlns", e);
                for (var j = 0; j < a.childNodes.length; j++)a.childNodes[j].nodeType === f && a.removeChild(a.childNodes[j]);
                for (; h.childNodes.length;)h.removeChild(h.childNodes[0]);
                return d.setAttr(a, {
                    width: b,
                    height: c,
                    viewBox: "0 0 " + b + " " + c,
                    preserveAspectRatio: "none"
                }), a
            }, b.svgStringToDataURI = function () {
                var b = "data:image/svg+xml;charset=UTF-8,", c = "data:image/svg+xml;charset=UTF-8;base64,";
                return function (d, e) {
                    return e ? c + btoa(a.unescape(encodeURIComponent(d))) : b + encodeURIComponent(d)
                }
            }(), b.serializeSVG = function (b, c) {
                if (a.XMLSerializer) {
                    var e = new XMLSerializer, f = "", g = c.stylesheets;
                    if (c.svgXMLStylesheet) {
                        for (var h = d.createXML(), i = g.length - 1; i >= 0; i--) {
                            var j = h.createProcessingInstruction("xml-stylesheet", 'href="' + g[i] + '" rel="stylesheet"');
                            h.insertBefore(j, h.firstChild)
                        }
                        h.removeChild(h.documentElement), f = e.serializeToString(h)
                    }
                    var k = e.serializeToString(b);
                    return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), f + k
                }
            }
        }).call(b, function () {
            return this
        }())
    }, function (a, b) {
        (function (a) {
            b.newEl = function (b, c) {
                return a.document ? null == c ? a.document.createElement(b) : a.document.createElementNS(c, b) : void 0
            }, b.setAttr = function (a, b) {
                for (var c in b)a.setAttribute(c, b[c])
            }, b.createXML = function () {
                return a.DOMParser ? (new DOMParser).parseFromString("<xml />", "application/xml") : void 0
            }, b.getNodeArray = function (b) {
                var c = null;
                return "string" == typeof b ? c = document.querySelectorAll(b) : a.NodeList && b instanceof a.NodeList ? c = b : a.Node && b instanceof a.Node ? c = [b] : a.HTMLCollection && b instanceof a.HTMLCollection ? c = b : b instanceof Array ? c = b : null === b && (c = []), c = Array.prototype.slice.call(c)
            }
        }).call(b, function () {
            return this
        }())
    }, function (a, b) {
        var c = function (a, b) {
            "string" == typeof a && (this.original = a, "#" === a.charAt(0) && (a = a.slice(1)), /[^a-f0-9]+/i.test(a) || (3 === a.length && (a = a.replace(/./g, "$&$&")), 6 === a.length && (this.alpha = 1, b && b.alpha && (this.alpha = b.alpha), this.set(parseInt(a, 16)))))
        };
        c.rgb2hex = function (a, b, c) {
            function d(a) {
                var b = (0 | a).toString(16);
                return 16 > a && (b = "0" + b), b
            }

            return [a, b, c].map(d).join("")
        }, c.hsl2rgb = function (a, b, c) {
            var d = a / 60, e = (1 - Math.abs(2 * c - 1)) * b, f = e * (1 - Math.abs(parseInt(d) % 2 - 1)), g = c - e / 2, h = 0, i = 0, j = 0;
            return d >= 0 && 1 > d ? (h = e, i = f) : d >= 1 && 2 > d ? (h = f, i = e) : d >= 2 && 3 > d ? (i = e, j = f) : d >= 3 && 4 > d ? (i = f, j = e) : d >= 4 && 5 > d ? (h = f, j = e) : d >= 5 && 6 > d && (h = e, j = f), h += g, i += g, j += g, h = parseInt(255 * h), i = parseInt(255 * i), j = parseInt(255 * j), [h, i, j]
        }, c.prototype.set = function (a) {
            this.raw = a;
            var b = (16711680 & this.raw) >> 16, c = (65280 & this.raw) >> 8, d = 255 & this.raw, e = .2126 * b + .7152 * c + .0722 * d, f = -.09991 * b - .33609 * c + .436 * d, g = .615 * b - .55861 * c - .05639 * d;
            return this.rgb = {r: b, g: c, b: d}, this.yuv = {y: e, u: f, v: g}, this
        }, c.prototype.lighten = function (a) {
            var b = Math.min(1, Math.max(0, Math.abs(a))) * (0 > a ? -1 : 1), d = 255 * b | 0, e = Math.min(255, Math.max(0, this.rgb.r + d)), f = Math.min(255, Math.max(0, this.rgb.g + d)), g = Math.min(255, Math.max(0, this.rgb.b + d)), h = c.rgb2hex(e, f, g);
            return new c(h)
        }, c.prototype.toHex = function (a) {
            return (a ? "#" : "") + this.raw.toString(16)
        }, c.prototype.lighterThan = function (a) {
            return a instanceof c || (a = new c(a)), this.yuv.y > a.yuv.y
        }, c.prototype.blendAlpha = function (a) {
            a instanceof c || (a = new c(a));
            var b = a, d = this, e = b.alpha * b.rgb.r + (1 - b.alpha) * d.rgb.r, f = b.alpha * b.rgb.g + (1 - b.alpha) * d.rgb.g, g = b.alpha * b.rgb.b + (1 - b.alpha) * d.rgb.b;
            return new c(c.rgb2hex(e, f, g))
        }, a.exports = c
    }, function (a, b) {
        a.exports = {version: "2.9.2", svg_ns: "http://www.w3.org/2000/svg"}
    }, function (a, b, c) {
        function d(a, b) {
            return l.element({tag: b, width: a.width, height: a.height, fill: a.properties.fill})
        }

        function e(a) {
            return j.cssProps({
                fill: a.fill,
                "font-weight": a.font.weight,
                "font-family": a.font.family + ", monospace",
                "font-size": a.font.size + a.font.units
            })
        }

        function f(a, b, c) {
            var d = c / 2;
            return ["M", d, d, "H", a - d, "V", b - d, "H", d, "V", 0, "M", 0, d, "L", a, b - d, "M", 0, b - d, "L", a, d].join(" ")
        }

        var g = c(17), h = c(12), i = c(15), j = c(11), k = i.svg_ns, l = {
            element: function (a) {
                var b = a.tag, c = a.content || "";
                return delete a.tag, delete a.content, [b, c, a]
            }
        };
        a.exports = function (a, b) {
            var c = b.engineSettings, i = c.stylesheets, j = i.map(function (a) {
                return '<?xml-stylesheet rel="stylesheet" href="' + a + '"?>'
            }).join("\n"), m = "holder_" + Number(new Date).toString(16), n = a.root, o = n.children.holderTextGroup, p = "#" + m + " text { " + e(o.properties) + " } ";
            o.y += .8 * o.textPositionData.boundingBox.height;
            var q = [];
            Object.keys(o.children).forEach(function (a) {
                var b = o.children[a];
                Object.keys(b.children).forEach(function (a) {
                    var c = b.children[a], d = o.x + b.x + c.x, e = o.y + b.y + c.y, f = l.element({
                        tag: "text",
                        content: c.properties.text,
                        x: d,
                        y: e
                    });
                    q.push(f)
                })
            });
            var r = l.element({tag: "g", content: q}), s = null;
            if (n.children.holderBg.properties.outline) {
                var t = n.children.holderBg.properties.outline;
                s = l.element({
                    tag: "path",
                    d: f(n.children.holderBg.width, n.children.holderBg.height, t.width),
                    "stroke-width": t.width,
                    stroke: t.fill,
                    fill: "none"
                })
            }
            var u = d(n.children.holderBg, "rect"), v = [];
            v.push(u), t && v.push(s), v.push(r);
            var w = l.element({tag: "g", id: m, content: v}), x = l.element({
                tag: "style",
                content: p,
                type: "text/css"
            }), y = l.element({tag: "defs", content: x}), z = l.element({
                tag: "svg",
                content: [y, w],
                width: n.properties.width,
                height: n.properties.height,
                xmlns: k,
                viewBox: [0, 0, n.properties.width, n.properties.height].join(" "),
                preserveAspectRatio: "none"
            }), A = g(z);
            A = j + A[0];
            var B = h.svgStringToDataURI(A, "background" === b.mode);
            return B
        }
    }, function (a, b, c) {
        c(18), a.exports = function d(a, b, c) {
            "use strict";
            function e(a) {
                var b = a.match(/^[\w-]+/), d = {
                    tag: b ? b[0] : "div",
                    attr: {},
                    children: []
                }, e = a.match(/#([\w-]+)/), f = a.match(/\$([\w-]+)/), g = a.match(/\.[\w-]+/g);
                return e && (d.attr.id = e[1], c[e[1]] = d), f && (c[f[1]] = d), g && (d.attr["class"] = g.join(" ").replace(/\./g, "")), a.match(/&$/g) && (n = !1), d
            }

            function f(a, b) {
                return null !== b && b !== !1 && void 0 !== b ? "string" != typeof b && "object" != typeof b ? String(b) : b : void 0
            }

            function g(a) {
                return a || 0 === a ? String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
            }

            function h(a) {
                return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            var i, j, k, l, m = 1, n = !0;
            if (c = c || {}, "string" == typeof a[0])a[0] = e(a[0]); else {
                if (!Array.isArray(a[0]))throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(a[0]));
                m = 0
            }
            for (; m < a.length; m++) {
                if (a[m] === !1 || null === a[m]) {
                    a[0] = !1;
                    break
                }
                if (void 0 !== a[m] && a[m] !== !0)if ("string" == typeof a[m])n && (a[m] = h(a[m])), a[0].children.push(a[m]); else if ("number" == typeof a[m])a[0].children.push(a[m]); else if (Array.isArray(a[m])) {
                    if (Array.isArray(a[m][0])) {
                        if (a[m].reverse().forEach(function (b) {
                                a.splice(m + 1, 0, b)
                            }), 0 !== m)continue;
                        m++
                    }
                    d(a[m], b, c), a[m][0] && a[0].children.push(a[m][0])
                } else if ("function" == typeof a[m])k = a[m]; else {
                    if ("object" != typeof a[m])throw new TypeError('"' + a[m] + '" is not allowed as a value.');
                    for (j in a[m])a[m].hasOwnProperty(j) && null !== a[m][j] && a[m][j] !== !1 && ("style" === j && "object" == typeof a[m][j] ? a[0].attr[j] = JSON.stringify(a[m][j], f).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'") : a[0].attr[j] = a[m][j])
                }
            }
            if (a[0] !== !1) {
                i = "<" + a[0].tag;
                for (l in a[0].attr)a[0].attr.hasOwnProperty(l) && (i += " " + l + '="' + g(a[0].attr[l]) + '"');
                i += ">", a[0].children.forEach(function (a) {
                    i += a
                }), i += "</" + a[0].tag + ">", a[0] = i
            }
            return c[0] = a[0], k && k(a[0]), c
        }
    }, function (a, b) {
        "use strict";
        function c(a) {
            var b = "" + a, c = d.exec(b);
            if (!c)return b;
            var e, f = "", g = 0, h = 0;
            for (g = c.index; g < b.length; g++) {
                switch (b.charCodeAt(g)) {
                    case 34:
                        e = "&quot;";
                        break;
                    case 38:
                        e = "&amp;";
                        break;
                    case 39:
                        e = "&#39;";
                        break;
                    case 60:
                        e = "&lt;";
                        break;
                    case 62:
                        e = "&gt;";
                        break;
                    default:
                        continue
                }
                h !== g && (f += b.substring(h, g)), h = g + 1, f += e
            }
            return h !== g ? f + b.substring(h, g) : f
        }

        var d = /["'&<>]/;
        a.exports = c
    }, function (a, b, c) {
        var d = c(13), e = c(11);
        a.exports = function () {
            var a = d.newEl("canvas"), b = null;
            return function (c) {
                null == b && (b = a.getContext("2d"));
                var d = e.canvasRatio(), f = c.root;
                a.width = d * f.properties.width, a.height = d * f.properties.height, b.textBaseline = "middle";
                var g = f.children.holderBg, h = d * g.width, i = d * g.height, j = 2, k = j / 2;
                b.fillStyle = g.properties.fill, b.fillRect(0, 0, h, i), g.properties.outline && (b.strokeStyle = g.properties.outline.fill, b.lineWidth = g.properties.outline.width, b.moveTo(k, k), b.lineTo(h - k, k), b.lineTo(h - k, i - k), b.lineTo(k, i - k), b.lineTo(k, k), b.moveTo(0, k), b.lineTo(h, i - k), b.moveTo(0, i - k), b.lineTo(h, k), b.stroke());
                var l = f.children.holderTextGroup;
                b.font = l.properties.font.weight + " " + d * l.properties.font.size + l.properties.font.units + " " + l.properties.font.family + ", monospace", b.fillStyle = l.properties.fill;
                for (var m in l.children) {
                    var n = l.children[m];
                    for (var o in n.children) {
                        var p = n.children[o], q = d * (l.x + n.x + p.x), r = d * (l.y + n.y + p.y + l.properties.leading / 2);
                        b.fillText(p.properties.text, q, r)
                    }
                }
                return a.toDataURL("image/png")
            }
        }()
    }])
}), function (a, b) {
    b && (Holder = a.Holder)
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package), /*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */
    !function (a) {
        "use strict";
        a(function () {
            a(".tooltip-demo").tooltip({
                selector: '[data-toggle="tooltip"]',
                container: "body"
            }), a('[data-toggle="popover"]').popover(), a(".tooltip-test").tooltip(), a(".popover-test").popover(), a('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate", !0), a('.bd-example [href="#"]').click(function (a) {
                a.preventDefault()
            }), a("#exampleModal").on("show.bs.modal", function (b) {
                var c = a(b.relatedTarget), d = c.data("whatever"), e = a(this);
                e.find(".modal-title").text("New message to " + d), e.find(".modal-body input").val(d)
            }), a(".highlight").each(function () {
                var b = '<div class="bd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>';
                a(this).before(b), a(".btn-clipboard").tooltip()
            });
            var b = new Clipboard(".btn-clipboard", {
                target: function (a) {
                    return a.parentNode.nextElementSibling
                }
            });
            b.on("success", function (b) {
                a(b.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), b.clearSelection()
            }), b.on("error", function (b) {
                var c = /Mac/i.test(navigator.userAgent) ? "Press ⌘ to copy" : "Press Ctrl-C to copy";
                a(b.trigger).attr("title", c).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
            })
        })
    }(jQuery), function () {
    "use strict";
    anchors.options.placement = "left", anchors.add(".bd-content > h1, .bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5")
}();