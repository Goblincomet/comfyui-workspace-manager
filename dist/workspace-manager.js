import { app as jl } from "/scripts/app.js";
function K2(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ps(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var R1 = { exports: {} }, uc = {}, M1 = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ts = Symbol.for("react.element"), Y2 = Symbol.for("react.portal"), q2 = Symbol.for("react.fragment"), X2 = Symbol.for("react.strict_mode"), Q2 = Symbol.for("react.profiler"), Z2 = Symbol.for("react.provider"), J2 = Symbol.for("react.context"), e_ = Symbol.for("react.forward_ref"), t_ = Symbol.for("react.suspense"), r_ = Symbol.for("react.memo"), n_ = Symbol.for("react.lazy"), Rv = Symbol.iterator;
function o_(e) {
  return e === null || typeof e != "object" ? null : (e = Rv && e[Rv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var O1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, z1 = Object.assign, I1 = {};
function Ni(e, t, r) {
  this.props = e, this.context = t, this.refs = I1, this.updater = r || O1;
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function F1() {
}
F1.prototype = Ni.prototype;
function ih(e, t, r) {
  this.props = e, this.context = t, this.refs = I1, this.updater = r || O1;
}
var ah = ih.prototype = new F1();
ah.constructor = ih;
z1(ah, Ni.prototype);
ah.isPureReactComponent = !0;
var Mv = Array.isArray, D1 = Object.prototype.hasOwnProperty, sh = { current: null }, j1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function L1(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      D1.call(t, n) && !j1.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in s = e.defaultProps, s)
      o[n] === void 0 && (o[n] = s[n]);
  return { $$typeof: Ts, type: e, key: i, ref: a, props: o, _owner: sh.current };
}
function i_(e, t) {
  return { $$typeof: Ts, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function lh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function a_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Ov = /\/+/g;
function pd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? a_("" + e.key) : t.toString(36);
}
function Ll(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ts:
          case Y2:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + pd(a, 0) : n, Mv(o) ? (r = "", e != null && (r = e.replace(Ov, "$&/") + "/"), Ll(o, t, r, "", function(u) {
      return u;
    })) : o != null && (lh(o) && (o = i_(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Ov, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Mv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + pd(i, s);
      a += Ll(i, t, r, l, o);
    }
  else if (l = o_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + pd(i, s++), a += Ll(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function rl(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Ll(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function s_(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var yt = { current: null }, Bl = { transition: null }, l_ = { ReactCurrentDispatcher: yt, ReactCurrentBatchConfig: Bl, ReactCurrentOwner: sh };
X.Children = { map: rl, forEach: function(e, t, r) {
  rl(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return rl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!lh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = Ni;
X.Fragment = q2;
X.Profiler = Q2;
X.PureComponent = ih;
X.StrictMode = X2;
X.Suspense = t_;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l_;
X.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = z1({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = sh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      D1.call(t, l) && !j1.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Ts, type: e.type, key: o, ref: i, props: n, _owner: a };
};
X.createContext = function(e) {
  return e = { $$typeof: J2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Z2, _context: e }, e.Consumer = e;
};
X.createElement = L1;
X.createFactory = function(e) {
  var t = L1.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: e_, render: e };
};
X.isValidElement = lh;
X.lazy = function(e) {
  return { $$typeof: n_, _payload: { _status: -1, _result: e }, _init: s_ };
};
X.memo = function(e, t) {
  return { $$typeof: r_, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = Bl.transition;
  Bl.transition = {};
  try {
    e();
  } finally {
    Bl.transition = t;
  }
};
X.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function(e, t) {
  return yt.current.useCallback(e, t);
};
X.useContext = function(e) {
  return yt.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return yt.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return yt.current.useEffect(e, t);
};
X.useId = function() {
  return yt.current.useId();
};
X.useImperativeHandle = function(e, t, r) {
  return yt.current.useImperativeHandle(e, t, r);
};
X.useInsertionEffect = function(e, t) {
  return yt.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return yt.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return yt.current.useMemo(e, t);
};
X.useReducer = function(e, t, r) {
  return yt.current.useReducer(e, t, r);
};
X.useRef = function(e) {
  return yt.current.useRef(e);
};
X.useState = function(e) {
  return yt.current.useState(e);
};
X.useSyncExternalStore = function(e, t, r) {
  return yt.current.useSyncExternalStore(e, t, r);
};
X.useTransition = function() {
  return yt.current.useTransition();
};
X.version = "18.2.0";
M1.exports = X;
var b = M1.exports;
const yo = /* @__PURE__ */ Ps(b), zv = /* @__PURE__ */ K2({
  __proto__: null,
  default: yo
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u_ = b, c_ = Symbol.for("react.element"), d_ = Symbol.for("react.fragment"), f_ = Object.prototype.hasOwnProperty, p_ = u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function B1(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    f_.call(t, n) && !h_.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: c_, type: e, key: i, ref: a, props: o, _owner: p_.current };
}
uc.Fragment = d_;
uc.jsx = B1;
uc.jsxs = B1;
R1.exports = uc;
var C = R1.exports, $f = {}, N1 = { exports: {} }, Bt = {}, V1 = { exports: {} }, W1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(z, D) {
    var B = z.length;
    z.push(D);
    e:
      for (; 0 < B; ) {
        var L = B - 1 >>> 1, q = z[L];
        if (0 < o(q, D))
          z[L] = D, z[B] = q, B = L;
        else
          break e;
      }
  }
  function r(z) {
    return z.length === 0 ? null : z[0];
  }
  function n(z) {
    if (z.length === 0)
      return null;
    var D = z[0], B = z.pop();
    if (B !== D) {
      z[0] = B;
      e:
        for (var L = 0, q = z.length, H = q >>> 1; L < H; ) {
          var he = 2 * (L + 1) - 1, Me = z[he], ce = he + 1, be = z[ce];
          if (0 > o(Me, B))
            ce < q && 0 > o(be, Me) ? (z[L] = be, z[ce] = B, L = ce) : (z[L] = Me, z[he] = B, L = he);
          else if (ce < q && 0 > o(be, B))
            z[L] = be, z[ce] = B, L = ce;
          else
            break e;
        }
    }
    return D;
  }
  function o(z, D) {
    var B = z.sortIndex - D.sortIndex;
    return B !== 0 ? B : z.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(z) {
    for (var D = r(u); D !== null; ) {
      if (D.callback === null)
        n(u);
      else if (D.startTime <= z)
        n(u), D.sortIndex = D.expirationTime, t(l, D);
      else
        break;
      D = r(u);
    }
  }
  function w(z) {
    if (y = !1, v(z), !g)
      if (r(l) !== null)
        g = !0, Y(k);
      else {
        var D = r(u);
        D !== null && oe(w, D.startTime - z);
      }
  }
  function k(z, D) {
    g = !1, y && (y = !1, m($), $ = -1), p = !0;
    var B = f;
    try {
      for (v(D), d = r(l); d !== null && (!(d.expirationTime > D) || z && !j()); ) {
        var L = d.callback;
        if (typeof L == "function") {
          d.callback = null, f = d.priorityLevel;
          var q = L(d.expirationTime <= D);
          D = e.unstable_now(), typeof q == "function" ? d.callback = q : d === r(l) && n(l), v(D);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var H = !0;
      else {
        var he = r(u);
        he !== null && oe(w, he.startTime - D), H = !1;
      }
      return H;
    } finally {
      d = null, f = B, p = !1;
    }
  }
  var E = !1, _ = null, $ = -1, R = 5, M = -1;
  function j() {
    return !(e.unstable_now() - M < R);
  }
  function ee() {
    if (_ !== null) {
      var z = e.unstable_now();
      M = z;
      var D = !0;
      try {
        D = _(!0, z);
      } finally {
        D ? U() : (E = !1, _ = null);
      }
    } else
      E = !1;
  }
  var U;
  if (typeof h == "function")
    U = function() {
      h(ee);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(), K = G.port2;
    G.port1.onmessage = ee, U = function() {
      K.postMessage(null);
    };
  } else
    U = function() {
      S(ee, 0);
    };
  function Y(z) {
    _ = z, E || (E = !0, U());
  }
  function oe(z, D) {
    $ = S(function() {
      z(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, Y(k));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(z) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = f;
    }
    var B = f;
    f = D;
    try {
      return z();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, D) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var B = f;
    f = z;
    try {
      return D();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(z, D, B) {
    var L = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? L + B : L) : B = L, z) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = B + q, z = { id: c++, callback: D, priorityLevel: z, startTime: B, expirationTime: q, sortIndex: -1 }, B > L ? (z.sortIndex = B, t(u, z), r(l) === null && z === r(u) && (y ? (m($), $ = -1) : y = !0, oe(w, B - L))) : (z.sortIndex = q, t(l, z), g || p || (g = !0, Y(k))), z;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(z) {
    var D = f;
    return function() {
      var B = f;
      f = D;
      try {
        return z.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(W1);
V1.exports = W1;
var m_ = V1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1 = b, Dt = m_;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var U1 = /* @__PURE__ */ new Set(), Ga = {};
function Po(e, t) {
  _i(e, t), _i(e + "Capture", t);
}
function _i(e, t) {
  for (Ga[e] = t, e = 0; e < t.length; e++)
    U1.add(t[e]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Af = Object.prototype.hasOwnProperty, v_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Iv = {}, Fv = {};
function g_(e) {
  return Af.call(Fv, e) ? !0 : Af.call(Iv, e) ? !1 : v_.test(e) ? Fv[e] = !0 : (Iv[e] = !0, !1);
}
function y_(e, t, r, n) {
  if (r !== null && r.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function b_(e, t, r, n) {
  if (t === null || typeof t > "u" || y_(e, t, r, n))
    return !0;
  if (n)
    return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function bt(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ot[e] = new bt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ot[t] = new bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ot[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ot[e] = new bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ot[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ot[e] = new bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ot[e] = new bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ot[e] = new bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ot[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uh = /[\-:]([a-z])/g;
function ch(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uh,
    ch
  );
  ot[t] = new bt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uh, ch);
  ot[t] = new bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uh, ch);
  ot[t] = new bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ot[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ot[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dh(e, t, r, n) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b_(t, r, o, n) && (r = null), n || o === null ? g_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var un = H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nl = Symbol.for("react.element"), Vo = Symbol.for("react.portal"), Wo = Symbol.for("react.fragment"), fh = Symbol.for("react.strict_mode"), Rf = Symbol.for("react.profiler"), G1 = Symbol.for("react.provider"), K1 = Symbol.for("react.context"), ph = Symbol.for("react.forward_ref"), Mf = Symbol.for("react.suspense"), Of = Symbol.for("react.suspense_list"), hh = Symbol.for("react.memo"), gn = Symbol.for("react.lazy"), Y1 = Symbol.for("react.offscreen"), Dv = Symbol.iterator;
function Qi(e) {
  return e === null || typeof e != "object" ? null : (e = Dv && e[Dv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Re = Object.assign, hd;
function pa(e) {
  if (hd === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      hd = t && t[1] || "";
    }
  return `
` + hd + e;
}
var md = !1;
function vd(e, t) {
  if (!e || md)
    return "";
  md = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || o[a] !== i[s]) {
                var l = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    md = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? pa(e) : "";
}
function x_(e) {
  switch (e.tag) {
    case 5:
      return pa(e.type);
    case 16:
      return pa("Lazy");
    case 13:
      return pa("Suspense");
    case 19:
      return pa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vd(e.type, !1), e;
    case 11:
      return e = vd(e.type.render, !1), e;
    case 1:
      return e = vd(e.type, !0), e;
    default:
      return "";
  }
}
function zf(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Wo:
      return "Fragment";
    case Vo:
      return "Portal";
    case Rf:
      return "Profiler";
    case fh:
      return "StrictMode";
    case Mf:
      return "Suspense";
    case Of:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case K1:
        return (e.displayName || "Context") + ".Consumer";
      case G1:
        return (e._context.displayName || "Context") + ".Provider";
      case ph:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hh:
        return t = e.displayName || null, t !== null ? t : zf(e.type) || "Memo";
      case gn:
        t = e._payload, e = e._init;
        try {
          return zf(e(t));
        } catch {
        }
    }
  return null;
}
function S_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zf(t);
    case 8:
      return t === fh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function q1(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function w_(e) {
  var t = q1(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var o = r.get, i = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      n = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(a) {
      n = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ol(e) {
  e._valueTracker || (e._valueTracker = w_(e));
}
function X1(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = q1(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function mu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function If(e, t) {
  var r = t.checked;
  return Re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function jv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Fn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Q1(e, t) {
  t = t.checked, t != null && dh(e, "checked", t, !1);
}
function Ff(e, t) {
  Q1(e, t);
  var r = Fn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Df(e, t.type, r) : t.hasOwnProperty("defaultValue") && Df(e, t.type, Fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Df(e, t, r) {
  (t !== "number" || mu(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ha = Array.isArray;
function di(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Fn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function jf(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return Re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bv(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(O(92));
      if (ha(r)) {
        if (1 < r.length)
          throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Fn(r) };
}
function Z1(e, t) {
  var r = Fn(t.value), n = Fn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Nv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function J1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? J1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var il, eb = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (il = il || document.createElement("div"), il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = il.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ka(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ca = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, k_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ca).forEach(function(e) {
  k_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ca[t] = Ca[e];
  });
});
function tb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ca.hasOwnProperty(e) && Ca[e] ? ("" + t).trim() : t + "px";
}
function rb(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = tb(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var C_ = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bf(e, t) {
  if (t) {
    if (C_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function Nf(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vf = null;
function mh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Wf = null, fi = null, pi = null;
function Vv(e) {
  if (e = As(e)) {
    if (typeof Wf != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = hc(t), Wf(e.stateNode, e.type, t));
  }
}
function nb(e) {
  fi ? pi ? pi.push(e) : pi = [e] : fi = e;
}
function ob() {
  if (fi) {
    var e = fi, t = pi;
    if (pi = fi = null, Vv(e), t)
      for (e = 0; e < t.length; e++)
        Vv(t[e]);
  }
}
function ib(e, t) {
  return e(t);
}
function ab() {
}
var gd = !1;
function sb(e, t, r) {
  if (gd)
    return e(t, r);
  gd = !0;
  try {
    return ib(e, t, r);
  } finally {
    gd = !1, (fi !== null || pi !== null) && (ab(), ob());
  }
}
function Ya(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = hc(r);
  if (n === null)
    return null;
  r = n[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (r && typeof r != "function")
    throw Error(O(231, t, typeof r));
  return r;
}
var Hf = !1;
if (tn)
  try {
    var Zi = {};
    Object.defineProperty(Zi, "passive", { get: function() {
      Hf = !0;
    } }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
  } catch {
    Hf = !1;
  }
function __(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var _a = !1, vu = null, gu = !1, Uf = null, P_ = { onError: function(e) {
  _a = !0, vu = e;
} };
function T_(e, t, r, n, o, i, a, s, l) {
  _a = !1, vu = null, __.apply(P_, arguments);
}
function E_(e, t, r, n, o, i, a, s, l) {
  if (T_.apply(this, arguments), _a) {
    if (_a) {
      var u = vu;
      _a = !1, vu = null;
    } else
      throw Error(O(198));
    gu || (gu = !0, Uf = u);
  }
}
function To(e) {
  var t = e, r = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function lb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Wv(e) {
  if (To(e) !== e)
    throw Error(O(188));
}
function $_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = To(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (n = o.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r)
          return Wv(o), e;
        if (i === n)
          return Wv(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (r.return !== n.return)
      r = o, n = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(O(189));
      }
    }
    if (r.alternate !== n)
      throw Error(O(190));
  }
  if (r.tag !== 3)
    throw Error(O(188));
  return r.stateNode.current === r ? e : t;
}
function ub(e) {
  return e = $_(e), e !== null ? cb(e) : null;
}
function cb(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = cb(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var db = Dt.unstable_scheduleCallback, Hv = Dt.unstable_cancelCallback, A_ = Dt.unstable_shouldYield, R_ = Dt.unstable_requestPaint, je = Dt.unstable_now, M_ = Dt.unstable_getCurrentPriorityLevel, vh = Dt.unstable_ImmediatePriority, fb = Dt.unstable_UserBlockingPriority, yu = Dt.unstable_NormalPriority, O_ = Dt.unstable_LowPriority, pb = Dt.unstable_IdlePriority, cc = null, $r = null;
function z_(e) {
  if ($r && typeof $r.onCommitFiberRoot == "function")
    try {
      $r.onCommitFiberRoot(cc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var pr = Math.clz32 ? Math.clz32 : D_, I_ = Math.log, F_ = Math.LN2;
function D_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (I_(e) / F_ | 0) | 0;
}
var al = 64, sl = 4194304;
function ma(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bu(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = ma(s) : (i &= a, i !== 0 && (n = ma(i)));
  } else
    a = r & ~o, a !== 0 ? n = ma(a) : i !== 0 && (n = ma(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - pr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function j_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function L_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - pr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = j_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Gf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hb() {
  var e = al;
  return al <<= 1, !(al & 4194240) && (al = 64), e;
}
function yd(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Es(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pr(t), e[t] = r;
}
function B_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - pr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function gh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - pr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var de = 0;
function mb(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var vb, yh, gb, yb, bb, Kf = !1, ll = [], Pn = null, Tn = null, En = null, qa = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), xn = [], N_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      Tn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      qa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xa.delete(t.pointerId);
  }
}
function Ji(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = As(t), t !== null && yh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function V_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return Pn = Ji(Pn, e, t, r, n, o), !0;
    case "dragenter":
      return Tn = Ji(Tn, e, t, r, n, o), !0;
    case "mouseover":
      return En = Ji(En, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return qa.set(i, Ji(qa.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Xa.set(i, Ji(Xa.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function xb(e) {
  var t = io(e.target);
  if (t !== null) {
    var r = To(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = lb(r), t !== null) {
          e.blockedOn = t, bb(e.priority, function() {
            gb(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Yf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Vf = n, r.target.dispatchEvent(n), Vf = null;
    } else
      return t = As(r), t !== null && yh(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Gv(e, t, r) {
  Nl(e) && r.delete(t);
}
function W_() {
  Kf = !1, Pn !== null && Nl(Pn) && (Pn = null), Tn !== null && Nl(Tn) && (Tn = null), En !== null && Nl(En) && (En = null), qa.forEach(Gv), Xa.forEach(Gv);
}
function ea(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Kf || (Kf = !0, Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, W_)));
}
function Qa(e) {
  function t(o) {
    return ea(o, e);
  }
  if (0 < ll.length) {
    ea(ll[0], e);
    for (var r = 1; r < ll.length; r++) {
      var n = ll[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Pn !== null && ea(Pn, e), Tn !== null && ea(Tn, e), En !== null && ea(En, e), qa.forEach(t), Xa.forEach(t), r = 0; r < xn.length; r++)
    n = xn[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < xn.length && (r = xn[0], r.blockedOn === null); )
    xb(r), r.blockedOn === null && xn.shift();
}
var hi = un.ReactCurrentBatchConfig, xu = !0;
function H_(e, t, r, n) {
  var o = de, i = hi.transition;
  hi.transition = null;
  try {
    de = 1, bh(e, t, r, n);
  } finally {
    de = o, hi.transition = i;
  }
}
function U_(e, t, r, n) {
  var o = de, i = hi.transition;
  hi.transition = null;
  try {
    de = 4, bh(e, t, r, n);
  } finally {
    de = o, hi.transition = i;
  }
}
function bh(e, t, r, n) {
  if (xu) {
    var o = Yf(e, t, r, n);
    if (o === null)
      Ed(e, t, n, Su, r), Uv(e, n);
    else if (V_(o, e, t, r, n))
      n.stopPropagation();
    else if (Uv(e, n), t & 4 && -1 < N_.indexOf(e)) {
      for (; o !== null; ) {
        var i = As(o);
        if (i !== null && vb(i), i = Yf(e, t, r, n), i === null && Ed(e, t, n, Su, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Ed(e, t, n, null, r);
  }
}
var Su = null;
function Yf(e, t, r, n) {
  if (Su = null, e = mh(n), e = io(e), e !== null)
    if (t = To(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = lb(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Su = e, null;
}
function Sb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (M_()) {
        case vh:
          return 1;
        case fb:
          return 4;
        case yu:
        case O_:
          return 16;
        case pb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Cn = null, xh = null, Vl = null;
function wb() {
  if (Vl)
    return Vl;
  var e, t = xh, r = t.length, n, o = "value" in Cn ? Cn.value : Cn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Vl = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Wl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ul() {
  return !0;
}
function Kv() {
  return !1;
}
function Nt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ul : Kv, this.isPropagationStopped = Kv, this;
  }
  return Re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ul);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ul);
  }, persist: function() {
  }, isPersistent: ul }), t;
}
var Vi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Sh = Nt(Vi), $s = Re({}, Vi, { view: 0, detail: 0 }), G_ = Nt($s), bd, xd, ta, dc = Re({}, $s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ta && (ta && e.type === "mousemove" ? (bd = e.screenX - ta.screenX, xd = e.screenY - ta.screenY) : xd = bd = 0, ta = e), bd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xd;
} }), Yv = Nt(dc), K_ = Re({}, dc, { dataTransfer: 0 }), Y_ = Nt(K_), q_ = Re({}, $s, { relatedTarget: 0 }), Sd = Nt(q_), X_ = Re({}, Vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Q_ = Nt(X_), Z_ = Re({}, Vi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), J_ = Nt(Z_), eP = Re({}, Vi, { data: 0 }), qv = Nt(eP), tP = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, rP = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, nP = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nP[e]) ? !!t[e] : !1;
}
function wh() {
  return oP;
}
var iP = Re({}, $s, { key: function(e) {
  if (e.key) {
    var t = tP[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rP[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wh, charCode: function(e) {
  return e.type === "keypress" ? Wl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), aP = Nt(iP), sP = Re({}, dc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xv = Nt(sP), lP = Re({}, $s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wh }), uP = Nt(lP), cP = Re({}, Vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dP = Nt(cP), fP = Re({}, dc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pP = Nt(fP), hP = [9, 13, 27, 32], kh = tn && "CompositionEvent" in window, Pa = null;
tn && "documentMode" in document && (Pa = document.documentMode);
var mP = tn && "TextEvent" in window && !Pa, kb = tn && (!kh || Pa && 8 < Pa && 11 >= Pa), Qv = " ", Zv = !1;
function Cb(e, t) {
  switch (e) {
    case "keyup":
      return hP.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _b(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ho = !1;
function vP(e, t) {
  switch (e) {
    case "compositionend":
      return _b(t);
    case "keypress":
      return t.which !== 32 ? null : (Zv = !0, Qv);
    case "textInput":
      return e = t.data, e === Qv && Zv ? null : e;
    default:
      return null;
  }
}
function gP(e, t) {
  if (Ho)
    return e === "compositionend" || !kh && Cb(e, t) ? (e = wb(), Vl = xh = Cn = null, Ho = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yP = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Jv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yP[e.type] : t === "textarea";
}
function Pb(e, t, r, n) {
  nb(n), t = wu(t, "onChange"), 0 < t.length && (r = new Sh("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Ta = null, Za = null;
function bP(e) {
  Db(e, 0);
}
function fc(e) {
  var t = Ko(e);
  if (X1(t))
    return e;
}
function xP(e, t) {
  if (e === "change")
    return t;
}
var Tb = !1;
if (tn) {
  var wd;
  if (tn) {
    var kd = "oninput" in document;
    if (!kd) {
      var eg = document.createElement("div");
      eg.setAttribute("oninput", "return;"), kd = typeof eg.oninput == "function";
    }
    wd = kd;
  } else
    wd = !1;
  Tb = wd && (!document.documentMode || 9 < document.documentMode);
}
function tg() {
  Ta && (Ta.detachEvent("onpropertychange", Eb), Za = Ta = null);
}
function Eb(e) {
  if (e.propertyName === "value" && fc(Za)) {
    var t = [];
    Pb(t, Za, e, mh(e)), sb(bP, t);
  }
}
function SP(e, t, r) {
  e === "focusin" ? (tg(), Ta = t, Za = r, Ta.attachEvent("onpropertychange", Eb)) : e === "focusout" && tg();
}
function wP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fc(Za);
}
function kP(e, t) {
  if (e === "click")
    return fc(t);
}
function CP(e, t) {
  if (e === "input" || e === "change")
    return fc(t);
}
function _P(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mr = typeof Object.is == "function" ? Object.is : _P;
function Ja(e, t) {
  if (mr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Af.call(t, o) || !mr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function rg(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ng(e, t) {
  var r = rg(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t)
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = rg(r);
  }
}
function $b(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $b(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ab() {
  for (var e = window, t = mu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = mu(e.document);
  }
  return t;
}
function Ch(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function PP(e) {
  var t = Ab(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && $b(r.ownerDocument.documentElement, r)) {
    if (n !== null && Ch(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = ng(r, i);
        var a = ng(
          r,
          n
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var TP = tn && "documentMode" in document && 11 >= document.documentMode, Uo = null, qf = null, Ea = null, Xf = !1;
function og(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Xf || Uo == null || Uo !== mu(n) || (n = Uo, "selectionStart" in n && Ch(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Ea && Ja(Ea, n) || (Ea = n, n = wu(qf, "onSelect"), 0 < n.length && (t = new Sh("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Uo)));
}
function cl(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Go = { animationend: cl("Animation", "AnimationEnd"), animationiteration: cl("Animation", "AnimationIteration"), animationstart: cl("Animation", "AnimationStart"), transitionend: cl("Transition", "TransitionEnd") }, Cd = {}, Rb = {};
tn && (Rb = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);
function pc(e) {
  if (Cd[e])
    return Cd[e];
  if (!Go[e])
    return e;
  var t = Go[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in Rb)
      return Cd[e] = t[r];
  return e;
}
var Mb = pc("animationend"), Ob = pc("animationiteration"), zb = pc("animationstart"), Ib = pc("transitionend"), Fb = /* @__PURE__ */ new Map(), ig = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
  Fb.set(e, t), Po(t, [e]);
}
for (var _d = 0; _d < ig.length; _d++) {
  var Pd = ig[_d], EP = Pd.toLowerCase(), $P = Pd[0].toUpperCase() + Pd.slice(1);
  Bn(EP, "on" + $P);
}
Bn(Mb, "onAnimationEnd");
Bn(Ob, "onAnimationIteration");
Bn(zb, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Ib, "onTransitionEnd");
_i("onMouseEnter", ["mouseout", "mouseover"]);
_i("onMouseLeave", ["mouseout", "mouseover"]);
_i("onPointerEnter", ["pointerout", "pointerover"]);
_i("onPointerLeave", ["pointerout", "pointerover"]);
Po("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Po("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Po("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Po("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Po("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Po("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var va = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), AP = new Set("cancel close invalid load scroll toggle".split(" ").concat(va));
function ag(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, E_(n, t, void 0, e), e.currentTarget = null;
}
function Db(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          ag(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          ag(o, s, u), i = l;
        }
    }
  }
  if (gu)
    throw e = Uf, gu = !1, Uf = null, e;
}
function xe(e, t) {
  var r = t[tp];
  r === void 0 && (r = t[tp] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (jb(t, e, 2, !1), r.add(n));
}
function Td(e, t, r) {
  var n = 0;
  t && (n |= 4), jb(r, e, n, t);
}
var dl = "_reactListening" + Math.random().toString(36).slice(2);
function es(e) {
  if (!e[dl]) {
    e[dl] = !0, U1.forEach(function(r) {
      r !== "selectionchange" && (AP.has(r) || Td(r, !1, e), Td(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dl] || (t[dl] = !0, Td("selectionchange", !1, t));
  }
}
function jb(e, t, r, n) {
  switch (Sb(t)) {
    case 1:
      var o = H_;
      break;
    case 4:
      o = U_;
      break;
    default:
      o = bh;
  }
  r = o.bind(null, t, r, e), o = void 0, !Hf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Ed(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e:
      for (; ; ) {
        if (n === null)
          return;
        var a = n.tag;
        if (a === 3 || a === 4) {
          var s = n.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = n.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = io(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              n = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
  sb(function() {
    var u = i, c = mh(r), d = [];
    e: {
      var f = Fb.get(e);
      if (f !== void 0) {
        var p = Sh, g = e;
        switch (e) {
          case "keypress":
            if (Wl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = aP;
            break;
          case "focusin":
            g = "focus", p = Sd;
            break;
          case "focusout":
            g = "blur", p = Sd;
            break;
          case "beforeblur":
          case "afterblur":
            p = Sd;
            break;
          case "click":
            if (r.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Yv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Y_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = uP;
            break;
          case Mb:
          case Ob:
          case zb:
            p = Q_;
            break;
          case Ib:
            p = dP;
            break;
          case "scroll":
            p = G_;
            break;
          case "wheel":
            p = pP;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = J_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Xv;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (v.tag === 5 && w !== null && (v = w, m !== null && (w = Ya(h, m), w != null && y.push(ts(h, w, v)))), S)
            break;
          h = h.return;
        }
        0 < y.length && (f = new p(f, g, null, r, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Vf && (g = r.relatedTarget || r.fromElement) && (io(g) || g[rn]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = r.relatedTarget || r.toElement, p = u, g = g ? io(g) : null, g !== null && (S = To(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = Yv, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Xv, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = p == null ? f : Ko(p), v = g == null ? f : Ko(g), f = new y(w, h + "leave", p, r, c), f.target = S, f.relatedTarget = v, w = null, io(c) === u && (y = new y(m, h + "enter", g, r, c), y.target = v, y.relatedTarget = S, w = y), S = w, p && g)
            t: {
              for (y = p, m = g, h = 0, v = y; v; v = Io(v))
                h++;
              for (v = 0, w = m; w; w = Io(w))
                v++;
              for (; 0 < h - v; )
                y = Io(y), h--;
              for (; 0 < v - h; )
                m = Io(m), v--;
              for (; h--; ) {
                if (y === m || m !== null && y === m.alternate)
                  break t;
                y = Io(y), m = Io(m);
              }
              y = null;
            }
          else
            y = null;
          p !== null && sg(d, f, p, y, !1), g !== null && S !== null && sg(d, S, g, y, !0);
        }
      }
      e: {
        if (f = u ? Ko(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = xP;
        else if (Jv(f))
          if (Tb)
            k = CP;
          else {
            k = wP;
            var E = SP;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = kP);
        if (k && (k = k(e, u))) {
          Pb(d, k, r, c);
          break e;
        }
        E && E(e, f, u), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Df(f, "number", f.value);
      }
      switch (E = u ? Ko(u) : window, e) {
        case "focusin":
          (Jv(E) || E.contentEditable === "true") && (Uo = E, qf = u, Ea = null);
          break;
        case "focusout":
          Ea = qf = Uo = null;
          break;
        case "mousedown":
          Xf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xf = !1, og(d, r, c);
          break;
        case "selectionchange":
          if (TP)
            break;
        case "keydown":
        case "keyup":
          og(d, r, c);
      }
      var _;
      if (kh)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Ho ? Cb(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (kb && r.locale !== "ko" && (Ho || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ho && (_ = wb()) : (Cn = c, xh = "value" in Cn ? Cn.value : Cn.textContent, Ho = !0)), E = wu(u, $), 0 < E.length && ($ = new qv($, e, null, r, c), d.push({ event: $, listeners: E }), _ ? $.data = _ : (_ = _b(r), _ !== null && ($.data = _)))), (_ = mP ? vP(e, r) : gP(e, r)) && (u = wu(u, "onBeforeInput"), 0 < u.length && (c = new qv("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    Db(d, t);
  });
}
function ts(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function wu(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ya(e, r), i != null && n.unshift(ts(e, i, o)), i = Ya(e, t), i != null && n.push(ts(e, i, o))), e = e.return;
  }
  return n;
}
function Io(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ya(r, i), l != null && a.unshift(ts(r, l, s))) : o || (l = Ya(r, i), l != null && a.push(ts(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var RP = /\r\n?/g, MP = /\u0000|\uFFFD/g;
function lg(e) {
  return (typeof e == "string" ? e : "" + e).replace(RP, `
`).replace(MP, "");
}
function fl(e, t, r) {
  if (t = lg(t), lg(e) !== t && r)
    throw Error(O(425));
}
function ku() {
}
var Qf = null, Zf = null;
function Jf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ep = typeof setTimeout == "function" ? setTimeout : void 0, OP = typeof clearTimeout == "function" ? clearTimeout : void 0, ug = typeof Promise == "function" ? Promise : void 0, zP = typeof queueMicrotask == "function" ? queueMicrotask : typeof ug < "u" ? function(e) {
  return ug.resolve(null).then(e).catch(IP);
} : ep;
function IP(e) {
  setTimeout(function() {
    throw e;
  });
}
function $d(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), Qa(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  Qa(t);
}
function $n(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function cg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wi = Math.random().toString(36).slice(2), Pr = "__reactFiber$" + Wi, rs = "__reactProps$" + Wi, rn = "__reactContainer$" + Wi, tp = "__reactEvents$" + Wi, FP = "__reactListeners$" + Wi, DP = "__reactHandles$" + Wi;
function io(e) {
  var t = e[Pr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[rn] || r[Pr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = cg(e); e !== null; ) {
          if (r = e[Pr])
            return r;
          e = cg(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function As(e) {
  return e = e[Pr] || e[rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function hc(e) {
  return e[rs] || null;
}
var rp = [], Yo = -1;
function Nn(e) {
  return { current: e };
}
function we(e) {
  0 > Yo || (e.current = rp[Yo], rp[Yo] = null, Yo--);
}
function me(e, t) {
  Yo++, rp[Yo] = e.current, e.current = t;
}
var Dn = {}, ft = Nn(Dn), kt = Nn(!1), bo = Dn;
function Pi(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return Dn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ct(e) {
  return e = e.childContextTypes, e != null;
}
function Cu() {
  we(kt), we(ft);
}
function dg(e, t, r) {
  if (ft.current !== Dn)
    throw Error(O(168));
  me(ft, t), me(kt, r);
}
function Lb(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(O(108, S_(e) || "Unknown", o));
  return Re({}, r, n);
}
function _u(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, bo = ft.current, me(ft, e), me(kt, kt.current), !0;
}
function fg(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(O(169));
  r ? (e = Lb(e, t, bo), n.__reactInternalMemoizedMergedChildContext = e, we(kt), we(ft), me(ft, e)) : we(kt), me(kt, r);
}
var Vr = null, mc = !1, Ad = !1;
function Bb(e) {
  Vr === null ? Vr = [e] : Vr.push(e);
}
function jP(e) {
  mc = !0, Bb(e);
}
function Vn() {
  if (!Ad && Vr !== null) {
    Ad = !0;
    var e = 0, t = de;
    try {
      var r = Vr;
      for (de = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Vr = null, mc = !1;
    } catch (o) {
      throw Vr !== null && (Vr = Vr.slice(e + 1)), db(vh, Vn), o;
    } finally {
      de = t, Ad = !1;
    }
  }
  return null;
}
var qo = [], Xo = 0, Pu = null, Tu = 0, qt = [], Xt = 0, xo = null, Ur = 1, Gr = "";
function Zn(e, t) {
  qo[Xo++] = Tu, qo[Xo++] = Pu, Pu = e, Tu = t;
}
function Nb(e, t, r) {
  qt[Xt++] = Ur, qt[Xt++] = Gr, qt[Xt++] = xo, xo = e;
  var n = Ur;
  e = Gr;
  var o = 32 - pr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - pr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Ur = 1 << 32 - pr(t) + o | r << o | n, Gr = i + e;
  } else
    Ur = 1 << i | r << o | n, Gr = e;
}
function _h(e) {
  e.return !== null && (Zn(e, 1), Nb(e, 1, 0));
}
function Ph(e) {
  for (; e === Pu; )
    Pu = qo[--Xo], qo[Xo] = null, Tu = qo[--Xo], qo[Xo] = null;
  for (; e === xo; )
    xo = qt[--Xt], qt[Xt] = null, Gr = qt[--Xt], qt[Xt] = null, Ur = qt[--Xt], qt[Xt] = null;
}
var zt = null, Ot = null, Pe = !1, dr = null;
function Vb(e, t) {
  var r = Zt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function pg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, zt = e, Ot = $n(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, zt = e, Ot = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = xo !== null ? { id: Ur, overflow: Gr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Zt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, zt = e, Ot = null, !0) : !1;
    default:
      return !1;
  }
}
function np(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function op(e) {
  if (Pe) {
    var t = Ot;
    if (t) {
      var r = t;
      if (!pg(e, t)) {
        if (np(e))
          throw Error(O(418));
        t = $n(r.nextSibling);
        var n = zt;
        t && pg(e, t) ? Vb(n, r) : (e.flags = e.flags & -4097 | 2, Pe = !1, zt = e);
      }
    } else {
      if (np(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Pe = !1, zt = e;
    }
  }
}
function hg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zt = e;
}
function pl(e) {
  if (e !== zt)
    return !1;
  if (!Pe)
    return hg(e), Pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jf(e.type, e.memoizedProps)), t && (t = Ot)) {
    if (np(e))
      throw Wb(), Error(O(418));
    for (; t; )
      Vb(e, t), t = $n(t.nextSibling);
  }
  if (hg(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ot = $n(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else
    Ot = zt ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function Wb() {
  for (var e = Ot; e; )
    e = $n(e.nextSibling);
}
function Ti() {
  Ot = zt = null, Pe = !1;
}
function Th(e) {
  dr === null ? dr = [e] : dr.push(e);
}
var LP = un.ReactCurrentBatchConfig;
function ur(e, t) {
  if (e && e.defaultProps) {
    t = Re({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Eu = Nn(null), $u = null, Qo = null, Eh = null;
function $h() {
  Eh = Qo = $u = null;
}
function Ah(e) {
  var t = Eu.current;
  we(Eu), e._currentValue = t;
}
function ip(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function mi(e, t) {
  $u = e, Eh = Qo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (wt = !0), e.firstContext = null);
}
function nr(e) {
  var t = e._currentValue;
  if (Eh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qo === null) {
      if ($u === null)
        throw Error(O(308));
      Qo = e, $u.dependencies = { lanes: 0, firstContext: e };
    } else
      Qo = Qo.next = e;
  return t;
}
var ao = null;
function Rh(e) {
  ao === null ? ao = [e] : ao.push(e);
}
function Hb(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Rh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, nn(e, n);
}
function nn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var yn = !1;
function Mh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ub(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function An(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, te & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, nn(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Rh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, nn(e, r);
}
function Hl(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, gh(e, r);
  }
}
function mg(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var o = null, i = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        i === null ? o = i = a : i = i.next = a, r = r.next;
      } while (r !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    r = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Au(e, t, r, n) {
  var o = e.updateQueue;
  yn = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    a = 0, c = u = l = null, s = i;
    do {
      var f = s.lane, p = s.eventTime;
      if ((n & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, y = s;
          switch (f = t, p = r, y.tag) {
            case 1:
              if (g = y.payload, typeof g == "function") {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, f = typeof g == "function" ? g.call(p, d, f) : g, f == null)
                break e;
              d = Re({}, d, f);
              break e;
            case 2:
              yn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, a |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    wo |= a, e.lanes = a, e.memoizedState = d;
  }
}
function vg(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(O(191, o));
        o.call(n);
      }
    }
}
var Gb = new H1.Component().refs;
function ap(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Re({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var vc = { isMounted: function(e) {
  return (e = e._reactInternals) ? To(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = vt(), o = Mn(e), i = Xr(n, o);
  i.payload = t, r != null && (i.callback = r), t = An(e, i, o), t !== null && (hr(t, e, o, n), Hl(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = vt(), o = Mn(e), i = Xr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = An(e, i, o), t !== null && (hr(t, e, o, n), Hl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = vt(), n = Mn(e), o = Xr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = An(e, o, n), t !== null && (hr(t, e, n, r), Hl(t, e, n));
} };
function gg(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ja(r, n) || !Ja(o, i) : !0;
}
function Kb(e, t, r) {
  var n = !1, o = Dn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = nr(i) : (o = Ct(t) ? bo : ft.current, n = t.contextTypes, i = (n = n != null) ? Pi(e, o) : Dn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vc, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function yg(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && vc.enqueueReplaceState(t, t.state, null);
}
function sp(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = Gb, Mh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = nr(i) : (i = Ct(t) ? bo : ft.current, o.context = Pi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ap(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && vc.enqueueReplaceState(o, o.state, null), Au(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ra(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(O(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(O(147, e));
      var o = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === Gb && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!r._owner)
      throw Error(O(290, e));
  }
  return e;
}
function hl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function bg(e) {
  var t = e._init;
  return t(e._payload);
}
function Yb(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
    }
  }
  function r(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function n(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = On(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, v, w) {
    return h === null || h.tag !== 6 ? (h = Dd(v, m.mode, w), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, w) {
    var k = v.type;
    return k === Wo ? c(m, h, v.props.children, w, v.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === gn && bg(k) === h.type) ? (w = o(h, v.props), w.ref = ra(m, h, v), w.return = m, w) : (w = Xl(v.type, v.key, v.props, null, m.mode, w), w.ref = ra(m, h, v), w.return = m, w);
  }
  function u(m, h, v, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = jd(v, m.mode, w), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, w, k) {
    return h === null || h.tag !== 7 ? (h = po(v, m.mode, w, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Dd("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case nl:
          return v = Xl(h.type, h.key, h.props, null, m.mode, v), v.ref = ra(m, null, h), v.return = m, v;
        case Vo:
          return h = jd(h, m.mode, v), h.return = m, h;
        case gn:
          var w = h._init;
          return d(m, w(h._payload), v);
      }
      if (ha(h) || Qi(h))
        return h = po(h, m.mode, v, null), h.return = m, h;
      hl(m, h);
    }
    return null;
  }
  function f(m, h, v, w) {
    var k = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return k !== null ? null : s(m, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nl:
          return v.key === k ? l(m, h, v, w) : null;
        case Vo:
          return v.key === k ? u(m, h, v, w) : null;
        case gn:
          return k = v._init, f(
            m,
            h,
            k(v._payload),
            w
          );
      }
      if (ha(v) || Qi(v))
        return k !== null ? null : c(m, h, v, w, null);
      hl(m, v);
    }
    return null;
  }
  function p(m, h, v, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(v) || null, s(h, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case nl:
          return m = m.get(w.key === null ? v : w.key) || null, l(h, m, w, k);
        case Vo:
          return m = m.get(w.key === null ? v : w.key) || null, u(h, m, w, k);
        case gn:
          var E = w._init;
          return p(m, h, v, E(w._payload), k);
      }
      if (ha(w) || Qi(w))
        return m = m.get(v) || null, c(h, m, w, k, null);
      hl(h, w);
    }
    return null;
  }
  function g(m, h, v, w) {
    for (var k = null, E = null, _ = h, $ = h = 0, R = null; _ !== null && $ < v.length; $++) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var M = f(m, _, v[$], w);
      if (M === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && M.alternate === null && t(m, _), h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M, _ = R;
    }
    if ($ === v.length)
      return r(m, _), Pe && Zn(m, $), k;
    if (_ === null) {
      for (; $ < v.length; $++)
        _ = d(m, v[$], w), _ !== null && (h = i(_, h, $), E === null ? k = _ : E.sibling = _, E = _);
      return Pe && Zn(m, $), k;
    }
    for (_ = n(m, _); $ < v.length; $++)
      R = p(_, m, $, v[$], w), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? $ : R.key), h = i(R, h, $), E === null ? k = R : E.sibling = R, E = R);
    return e && _.forEach(function(j) {
      return t(m, j);
    }), Pe && Zn(m, $), k;
  }
  function y(m, h, v, w) {
    var k = Qi(v);
    if (typeof k != "function")
      throw Error(O(150));
    if (v = k.call(v), v == null)
      throw Error(O(151));
    for (var E = k = null, _ = h, $ = h = 0, R = null, M = v.next(); _ !== null && !M.done; $++, M = v.next()) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var j = f(m, _, M.value, w);
      if (j === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && j.alternate === null && t(m, _), h = i(j, h, $), E === null ? k = j : E.sibling = j, E = j, _ = R;
    }
    if (M.done)
      return r(
        m,
        _
      ), Pe && Zn(m, $), k;
    if (_ === null) {
      for (; !M.done; $++, M = v.next())
        M = d(m, M.value, w), M !== null && (h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M);
      return Pe && Zn(m, $), k;
    }
    for (_ = n(m, _); !M.done; $++, M = v.next())
      M = p(_, m, $, M.value, w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? $ : M.key), h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M);
    return e && _.forEach(function(ee) {
      return t(m, ee);
    }), Pe && Zn(m, $), k;
  }
  function S(m, h, v, w) {
    if (typeof v == "object" && v !== null && v.type === Wo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nl:
          e: {
            for (var k = v.key, E = h; E !== null; ) {
              if (E.key === k) {
                if (k = v.type, k === Wo) {
                  if (E.tag === 7) {
                    r(m, E.sibling), h = o(E, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === gn && bg(k) === E.type) {
                  r(m, E.sibling), h = o(E, v.props), h.ref = ra(m, E, v), h.return = m, m = h;
                  break e;
                }
                r(m, E);
                break;
              } else
                t(m, E);
              E = E.sibling;
            }
            v.type === Wo ? (h = po(v.props.children, m.mode, w, v.key), h.return = m, m = h) : (w = Xl(v.type, v.key, v.props, null, m.mode, w), w.ref = ra(m, h, v), w.return = m, m = w);
          }
          return a(m);
        case Vo:
          e: {
            for (E = v.key; h !== null; ) {
              if (h.key === E)
                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                  r(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = jd(v, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case gn:
          return E = v._init, S(m, h, E(v._payload), w);
      }
      if (ha(v))
        return g(m, h, v, w);
      if (Qi(v))
        return y(m, h, v, w);
      hl(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, v), h.return = m, m = h) : (r(m, h), h = Dd(v, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return S;
}
var Ei = Yb(!0), qb = Yb(!1), Rs = {}, Ar = Nn(Rs), ns = Nn(Rs), os = Nn(Rs);
function so(e) {
  if (e === Rs)
    throw Error(O(174));
  return e;
}
function Oh(e, t) {
  switch (me(os, t), me(ns, e), me(Ar, Rs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Lf(t, e);
  }
  we(Ar), me(Ar, t);
}
function $i() {
  we(Ar), we(ns), we(os);
}
function Xb(e) {
  so(os.current);
  var t = so(Ar.current), r = Lf(t, e.type);
  t !== r && (me(ns, e), me(Ar, r));
}
function zh(e) {
  ns.current === e && (we(Ar), we(ns));
}
var Ee = Nn(0);
function Ru(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Rd = [];
function Ih() {
  for (var e = 0; e < Rd.length; e++)
    Rd[e]._workInProgressVersionPrimary = null;
  Rd.length = 0;
}
var Ul = un.ReactCurrentDispatcher, Md = un.ReactCurrentBatchConfig, So = 0, Ae = null, We = null, Ke = null, Mu = !1, $a = !1, is = 0, BP = 0;
function st() {
  throw Error(O(321));
}
function Fh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!mr(e[r], t[r]))
      return !1;
  return !0;
}
function Dh(e, t, r, n, o, i) {
  if (So = i, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ul.current = e === null || e.memoizedState === null ? HP : UP, e = r(n, o), $a) {
    i = 0;
    do {
      if ($a = !1, is = 0, 25 <= i)
        throw Error(O(301));
      i += 1, Ke = We = null, t.updateQueue = null, Ul.current = GP, e = r(n, o);
    } while ($a);
  }
  if (Ul.current = Ou, t = We !== null && We.next !== null, So = 0, Ke = We = Ae = null, Mu = !1, t)
    throw Error(O(300));
  return e;
}
function jh() {
  var e = is !== 0;
  return is = 0, e;
}
function xr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ke === null ? Ae.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
}
function or() {
  if (We === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = We.next;
  var t = Ke === null ? Ae.memoizedState : Ke.next;
  if (t !== null)
    Ke = t, We = e;
  else {
    if (e === null)
      throw Error(O(310));
    We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Ke === null ? Ae.memoizedState = Ke = e : Ke = Ke.next = e;
  }
  return Ke;
}
function as(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Od(e) {
  var t = or(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = We, o = n.baseQueue, i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    n.baseQueue = o = i, r.pending = null;
  }
  if (o !== null) {
    i = o.next, n = n.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((So & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Ae.lanes |= c, wo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, mr(n, t.memoizedState) || (wt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ae.lanes |= i, wo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function zd(e) {
  var t = or(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    mr(i, t.memoizedState) || (wt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function Qb() {
}
function Zb(e, t) {
  var r = Ae, n = or(), o = t(), i = !mr(n.memoizedState, o);
  if (i && (n.memoizedState = o, wt = !0), n = n.queue, Lh(tx.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Ke !== null && Ke.memoizedState.tag & 1) {
    if (r.flags |= 2048, ss(9, ex.bind(null, r, n, o, t), void 0, null), Ye === null)
      throw Error(O(349));
    So & 30 || Jb(r, t, o);
  }
  return o;
}
function Jb(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function ex(e, t, r, n) {
  t.value = r, t.getSnapshot = n, rx(t) && nx(e);
}
function tx(e, t, r) {
  return r(function() {
    rx(t) && nx(e);
  });
}
function rx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !mr(e, r);
  } catch {
    return !0;
  }
}
function nx(e) {
  var t = nn(e, 1);
  t !== null && hr(t, e, 1, -1);
}
function xg(e) {
  var t = xr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }, t.queue = e, e = e.dispatch = WP.bind(null, Ae, e), [t.memoizedState, e];
}
function ss(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function ox() {
  return or().memoizedState;
}
function Gl(e, t, r, n) {
  var o = xr();
  Ae.flags |= e, o.memoizedState = ss(1 | t, r, void 0, n === void 0 ? null : n);
}
function gc(e, t, r, n) {
  var o = or();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (We !== null) {
    var a = We.memoizedState;
    if (i = a.destroy, n !== null && Fh(n, a.deps)) {
      o.memoizedState = ss(t, r, i, n);
      return;
    }
  }
  Ae.flags |= e, o.memoizedState = ss(1 | t, r, i, n);
}
function Sg(e, t) {
  return Gl(8390656, 8, e, t);
}
function Lh(e, t) {
  return gc(2048, 8, e, t);
}
function ix(e, t) {
  return gc(4, 2, e, t);
}
function ax(e, t) {
  return gc(4, 4, e, t);
}
function sx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function lx(e, t, r) {
  return r = r != null ? r.concat([e]) : null, gc(4, 4, sx.bind(null, t, e), r);
}
function Bh() {
}
function ux(e, t) {
  var r = or();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Fh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function cx(e, t) {
  var r = or();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Fh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function dx(e, t, r) {
  return So & 21 ? (mr(r, t) || (r = hb(), Ae.lanes |= r, wo |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = r);
}
function NP(e, t) {
  var r = de;
  de = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Md.transition;
  Md.transition = {};
  try {
    e(!1), t();
  } finally {
    de = r, Md.transition = n;
  }
}
function fx() {
  return or().memoizedState;
}
function VP(e, t, r) {
  var n = Mn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, px(e))
    hx(t, r);
  else if (r = Hb(e, t, r, n), r !== null) {
    var o = vt();
    hr(r, e, n, o), mx(r, t, n);
  }
}
function WP(e, t, r) {
  var n = Mn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (px(e))
    hx(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, mr(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Rh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = Hb(e, t, o, n), r !== null && (o = vt(), hr(r, e, n, o), mx(r, t, n));
  }
}
function px(e) {
  var t = e.alternate;
  return e === Ae || t !== null && t === Ae;
}
function hx(e, t) {
  $a = Mu = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function mx(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, gh(e, r);
  }
}
var Ou = { readContext: nr, useCallback: st, useContext: st, useEffect: st, useImperativeHandle: st, useInsertionEffect: st, useLayoutEffect: st, useMemo: st, useReducer: st, useRef: st, useState: st, useDebugValue: st, useDeferredValue: st, useTransition: st, useMutableSource: st, useSyncExternalStore: st, useId: st, unstable_isNewReconciler: !1 }, HP = { readContext: nr, useCallback: function(e, t) {
  return xr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nr, useEffect: Sg, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Gl(
    4194308,
    4,
    sx.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Gl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = xr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = xr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = VP.bind(null, Ae, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = xr();
  return e = { current: e }, t.memoizedState = e;
}, useState: xg, useDebugValue: Bh, useDeferredValue: function(e) {
  return xr().memoizedState = e;
}, useTransition: function() {
  var e = xg(!1), t = e[0];
  return e = NP.bind(null, e[1]), xr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Ae, o = xr();
  if (Pe) {
    if (r === void 0)
      throw Error(O(407));
    r = r();
  } else {
    if (r = t(), Ye === null)
      throw Error(O(349));
    So & 30 || Jb(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, Sg(tx.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, ss(9, ex.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = xr(), t = Ye.identifierPrefix;
  if (Pe) {
    var r = Gr, n = Ur;
    r = (n & ~(1 << 32 - pr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = is++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = BP++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, UP = {
  readContext: nr,
  useCallback: ux,
  useContext: nr,
  useEffect: Lh,
  useImperativeHandle: lx,
  useInsertionEffect: ix,
  useLayoutEffect: ax,
  useMemo: cx,
  useReducer: Od,
  useRef: ox,
  useState: function() {
    return Od(as);
  },
  useDebugValue: Bh,
  useDeferredValue: function(e) {
    var t = or();
    return dx(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = Od(as)[0], t = or().memoizedState;
    return [e, t];
  },
  useMutableSource: Qb,
  useSyncExternalStore: Zb,
  useId: fx,
  unstable_isNewReconciler: !1
}, GP = { readContext: nr, useCallback: ux, useContext: nr, useEffect: Lh, useImperativeHandle: lx, useInsertionEffect: ix, useLayoutEffect: ax, useMemo: cx, useReducer: zd, useRef: ox, useState: function() {
  return zd(as);
}, useDebugValue: Bh, useDeferredValue: function(e) {
  var t = or();
  return We === null ? t.memoizedState = e : dx(t, We.memoizedState, e);
}, useTransition: function() {
  var e = zd(as)[0], t = or().memoizedState;
  return [e, t];
}, useMutableSource: Qb, useSyncExternalStore: Zb, useId: fx, unstable_isNewReconciler: !1 };
function Ai(e, t) {
  try {
    var r = "", n = t;
    do
      r += x_(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Id(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function lp(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var KP = typeof WeakMap == "function" ? WeakMap : Map;
function vx(e, t, r) {
  r = Xr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Iu || (Iu = !0, yp = n), lp(e, t);
  }, r;
}
function gx(e, t, r) {
  r = Xr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      lp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    lp(e, t), typeof n != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function wg(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new KP();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = sT.bind(null, e, t, r), t.then(e, e));
}
function kg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cg(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Xr(-1, 1), t.tag = 2, An(r, t, 1))), r.lanes |= 1), e);
}
var YP = un.ReactCurrentOwner, wt = !1;
function ht(e, t, r, n) {
  t.child = e === null ? qb(t, null, r, n) : Ei(t, e.child, r, n);
}
function _g(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return mi(t, o), n = Dh(e, t, r, n, i, o), r = jh(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (Pe && r && _h(t), t.flags |= 1, ht(e, t, n, o), t.child);
}
function Pg(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Yh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, yx(e, t, i, n, o)) : (e = Xl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Ja, r(a, n) && e.ref === t.ref)
      return on(e, t, o);
  }
  return t.flags |= 1, e = On(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function yx(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ja(i, n) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (wt = !0);
      else
        return t.lanes = e.lanes, on(e, t, o);
  }
  return up(e, t, r, n, o);
}
function bx(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(Jo, Mt), Mt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(Jo, Mt), Mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, me(Jo, Mt), Mt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, me(Jo, Mt), Mt |= n;
  return ht(e, t, o, r), t.child;
}
function xx(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function up(e, t, r, n, o) {
  var i = Ct(r) ? bo : ft.current;
  return i = Pi(t, i), mi(t, o), r = Dh(e, t, r, n, i, o), n = jh(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (Pe && n && _h(t), t.flags |= 1, ht(e, t, r, o), t.child);
}
function Tg(e, t, r, n, o) {
  if (Ct(r)) {
    var i = !0;
    _u(t);
  } else
    i = !1;
  if (mi(t, o), t.stateNode === null)
    Kl(e, t), Kb(t, r, n), sp(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = nr(u) : (u = Ct(r) ? bo : ft.current, u = Pi(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && yg(t, a, n, u), yn = !1;
    var f = t.memoizedState;
    a.state = f, Au(t, n, a, o), l = t.memoizedState, s !== n || f !== l || kt.current || yn ? (typeof c == "function" && (ap(t, r, c, n), l = t.memoizedState), (s = yn || gg(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, Ub(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ur(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = nr(l) : (l = Ct(r) ? bo : ft.current, l = Pi(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && yg(t, a, n, l), yn = !1, f = t.memoizedState, a.state = f, Au(t, n, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || kt.current || yn ? (typeof p == "function" && (ap(t, r, p, n), g = t.memoizedState), (u = yn || gg(t, r, u, n, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return cp(e, t, r, n, i, o);
}
function cp(e, t, r, n, o, i) {
  xx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && fg(t, r, !1), on(e, t, i);
  n = t.stateNode, YP.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ei(t, e.child, null, i), t.child = Ei(t, null, s, i)) : ht(e, t, s, i), t.memoizedState = n.state, o && fg(t, r, !0), t.child;
}
function Sx(e) {
  var t = e.stateNode;
  t.pendingContext ? dg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dg(e, t.context, !1), Oh(e, t.containerInfo);
}
function Eg(e, t, r, n, o) {
  return Ti(), Th(o), t.flags |= 256, ht(e, t, r, n), t.child;
}
var dp = { dehydrated: null, treeContext: null, retryLane: 0 };
function fp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wx(e, t, r) {
  var n = t.pendingProps, o = Ee.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), me(Ee, o & 1), e === null)
    return op(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = xc(a, n, 0, null), e = po(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fp(r), t.memoizedState = dp, e) : Nh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return qP(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = On(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = On(s, i) : (i = po(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? fp(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = dp, n;
  }
  return i = e.child, e = i.sibling, n = On(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Nh(e, t) {
  return t = xc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ml(e, t, r, n) {
  return n !== null && Th(n), Ei(t, e.child, null, r), e = Nh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qP(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Id(Error(O(422))), ml(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = xc({ mode: "visible", children: n.children }, o, 0, null), i = po(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && Ei(t, e.child, null, a), t.child.memoizedState = fp(a), t.memoizedState = dp, i);
  if (!(t.mode & 1))
    return ml(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(O(419)), n = Id(i, n, void 0), ml(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, wt || s) {
    if (n = Ye, n !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, nn(e, o), hr(n, e, o, -1));
    }
    return Kh(), n = Id(Error(O(421))), ml(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ot = $n(o.nextSibling), zt = t, Pe = !0, dr = null, e !== null && (qt[Xt++] = Ur, qt[Xt++] = Gr, qt[Xt++] = xo, Ur = e.id, Gr = e.overflow, xo = t), t = Nh(t, n.children), t.flags |= 4096, t);
}
function $g(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ip(e.return, t, r);
}
function Fd(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function kx(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (ht(e, t, n.children, r), n = Ee.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && $g(e, r, t);
          else if (e.tag === 19)
            $g(e, r, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    n &= 1;
  }
  if (me(Ee, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Ru(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Fd(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ru(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        Fd(t, !0, r, null, i);
        break;
      case "together":
        Fd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), wo |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, r = On(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = On(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function XP(e, t, r) {
  switch (t.tag) {
    case 3:
      Sx(t), Ti();
      break;
    case 5:
      Xb(t);
      break;
    case 1:
      Ct(t.type) && _u(t);
      break;
    case 4:
      Oh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      me(Eu, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (me(Ee, Ee.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? wx(e, t, r) : (me(Ee, Ee.current & 1), e = on(e, t, r), e !== null ? e.sibling : null);
      me(Ee, Ee.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return kx(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), me(Ee, Ee.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bx(e, t, r);
  }
  return on(e, t, r);
}
var Cx, pp, _x, Px;
Cx = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6)
      e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t)
      break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t)
        return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
pp = function() {
};
_x = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, so(Ar.current);
    var i = null;
    switch (r) {
      case "input":
        o = If(e, o), n = If(e, n), i = [];
        break;
      case "select":
        o = Re({}, o, { value: void 0 }), n = Re({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = jf(e, o), n = jf(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ku);
    }
    Bf(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ga.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = o != null ? o[u] : void 0, n.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a]);
          } else
            r || (i || (i = []), i.push(
              u,
              r
            )), r = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ga.hasOwnProperty(u) ? (l != null && u === "onScroll" && xe("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Px = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function na(e, t) {
  if (!Pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), r = r.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
    }
}
function lt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function QP(e, t, r) {
  var n = t.pendingProps;
  switch (Ph(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return lt(t), null;
    case 1:
      return Ct(t.type) && Cu(), lt(t), null;
    case 3:
      return n = t.stateNode, $i(), we(kt), we(ft), Ih(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dr !== null && (Sp(dr), dr = null))), pp(e, t), lt(t), null;
    case 5:
      zh(t);
      var o = so(os.current);
      if (r = t.type, e !== null && t.stateNode != null)
        _x(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(O(166));
          return lt(t), null;
        }
        if (e = so(Ar.current), pl(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[Pr] = t, n[rs] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              xe("cancel", n), xe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < va.length; o++)
                xe(va[o], n);
              break;
            case "source":
              xe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                n
              ), xe("load", n);
              break;
            case "details":
              xe("toggle", n);
              break;
            case "input":
              jv(n, i), xe("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", n);
              break;
            case "textarea":
              Bv(n, i), xe("invalid", n);
          }
          Bf(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && fl(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && fl(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ga.hasOwnProperty(a) && s != null && a === "onScroll" && xe("scroll", n);
            }
          switch (r) {
            case "input":
              ol(n), Lv(n, i, !0);
              break;
            case "textarea":
              ol(n), Nv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = ku);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = J1(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Pr] = t, e[rs] = n, Cx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Nf(r, n), r) {
              case "dialog":
                xe("cancel", e), xe("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < va.length; o++)
                  xe(va[o], e);
                o = n;
                break;
              case "source":
                xe("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), o = n;
                break;
              case "details":
                xe("toggle", e), o = n;
                break;
              case "input":
                jv(e, n), o = If(e, n), xe("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Re({}, n, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                Bv(e, n), o = jf(e, n), xe("invalid", e);
                break;
              default:
                o = n;
            }
            Bf(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? rb(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && eb(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ka(e, l) : typeof l == "number" && Ka(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ga.hasOwnProperty(i) ? l != null && i === "onScroll" && xe("scroll", e) : l != null && dh(e, i, l, a));
              }
            switch (r) {
              case "input":
                ol(e), Lv(e, n, !1);
                break;
              case "textarea":
                ol(e), Nv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Fn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? di(e, !!n.multiple, i, !1) : n.defaultValue != null && di(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ku);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return lt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Px(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(O(166));
        if (r = so(os.current), so(Ar.current), pl(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Pr] = t, (i = n.nodeValue !== r) && (e = zt, e !== null))
            switch (e.tag) {
              case 3:
                fl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && fl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Pr] = t, t.stateNode = n;
      }
      return lt(t), null;
    case 13:
      if (we(Ee), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Pe && Ot !== null && t.mode & 1 && !(t.flags & 128))
          Wb(), Ti(), t.flags |= 98560, i = !1;
        else if (i = pl(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[Pr] = t;
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          lt(t), i = !1;
        } else
          dr !== null && (Sp(dr), dr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? He === 0 && (He = 3) : Kh())), t.updateQueue !== null && (t.flags |= 4), lt(t), null);
    case 4:
      return $i(), pp(e, t), e === null && es(t.stateNode.containerInfo), lt(t), null;
    case 10:
      return Ah(t.type._context), lt(t), null;
    case 17:
      return Ct(t.type) && Cu(), lt(t), null;
    case 19:
      if (we(Ee), i = t.memoizedState, i === null)
        return lt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          na(i, !1);
        else {
          if (He !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Ru(e), a !== null) {
                for (t.flags |= 128, na(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return me(Ee, Ee.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && je() > Ri && (t.flags |= 128, n = !0, na(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Ru(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), na(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Pe)
              return lt(t), null;
          } else
            2 * je() - i.renderingStartTime > Ri && r !== 1073741824 && (t.flags |= 128, n = !0, na(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, r = Ee.current, me(Ee, n ? r & 1 | 2 : r & 1), t) : (lt(t), null);
    case 22:
    case 23:
      return Gh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Mt & 1073741824 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function ZP(e, t) {
  switch (Ph(t), t.tag) {
    case 1:
      return Ct(t.type) && Cu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $i(), we(kt), we(ft), Ih(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zh(t), null;
    case 13:
      if (we(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        Ti();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(Ee), null;
    case 4:
      return $i(), null;
    case 10:
      return Ah(t.type._context), null;
    case 22:
    case 23:
      return Gh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vl = !1, ct = !1, JP = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Zo(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ze(e, t, n);
      }
    else
      r.current = null;
}
function hp(e, t, r) {
  try {
    r();
  } catch (n) {
    ze(e, t, n);
  }
}
var Ag = !1;
function eT(e, t) {
  if (Qf = xu, e = Ab(), Ch(e)) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset, i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== r || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || n !== 0 && d.nodeType !== 3 || (l = a + n), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === r && ++u === o && (s = a), f === i && ++c === n && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          r = null;
      }
    r = r || { start: 0, end: 0 };
  } else
    r = null;
  for (Zf = { focusedElem: e, selectionRange: r }, xu = !1, F = t; F !== null; )
    if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, F = e;
    else
      for (; F !== null; ) {
        t = F;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps, S = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ur(t.type, y), S);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          ze(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, F = e;
          break;
        }
        F = t.return;
      }
  return g = Ag, Ag = !1, g;
}
function Aa(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && hp(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function yc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function mp(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Tx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Tx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pr], delete t[rs], delete t[tp], delete t[FP], delete t[DP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ex(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rg(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ex(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function vp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ku));
  else if (n !== 4 && (e = e.child, e !== null))
    for (vp(e, t, r), e = e.sibling; e !== null; )
      vp(e, t, r), e = e.sibling;
}
function gp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (gp(e, t, r), e = e.sibling; e !== null; )
      gp(e, t, r), e = e.sibling;
}
var et = null, cr = !1;
function fn(e, t, r) {
  for (r = r.child; r !== null; )
    $x(e, t, r), r = r.sibling;
}
function $x(e, t, r) {
  if ($r && typeof $r.onCommitFiberUnmount == "function")
    try {
      $r.onCommitFiberUnmount(cc, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      ct || Zo(r, t);
    case 6:
      var n = et, o = cr;
      et = null, fn(e, t, r), et = n, cr = o, et !== null && (cr ? (e = et, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : et.removeChild(r.stateNode));
      break;
    case 18:
      et !== null && (cr ? (e = et, r = r.stateNode, e.nodeType === 8 ? $d(e.parentNode, r) : e.nodeType === 1 && $d(e, r), Qa(e)) : $d(et, r.stateNode));
      break;
    case 4:
      n = et, o = cr, et = r.stateNode.containerInfo, cr = !0, fn(e, t, r), et = n, cr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ct && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && hp(r, t, a), o = o.next;
        } while (o !== n);
      }
      fn(e, t, r);
      break;
    case 1:
      if (!ct && (Zo(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          ze(r, t, s);
        }
      fn(e, t, r);
      break;
    case 21:
      fn(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (ct = (n = ct) || r.memoizedState !== null, fn(e, t, r), ct = n) : fn(e, t, r);
      break;
    default:
      fn(e, t, r);
  }
}
function Mg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new JP()), t.forEach(function(n) {
      var o = uT.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function sr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                et = s.stateNode, cr = !1;
                break e;
              case 3:
                et = s.stateNode.containerInfo, cr = !0;
                break e;
              case 4:
                et = s.stateNode.containerInfo, cr = !0;
                break e;
            }
            s = s.return;
          }
        if (et === null)
          throw Error(O(160));
        $x(i, a, o), et = null, cr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ze(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ax(t, e), t = t.sibling;
}
function Ax(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (sr(t, e), gr(e), n & 4) {
        try {
          Aa(3, e, e.return), yc(3, e);
        } catch (y) {
          ze(e, e.return, y);
        }
        try {
          Aa(5, e, e.return);
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 1:
      sr(t, e), gr(e), n & 512 && r !== null && Zo(r, r.return);
      break;
    case 5:
      if (sr(t, e), gr(e), n & 512 && r !== null && Zo(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ka(o, "");
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Q1(o, i), Nf(s, a);
            var u = Nf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? rb(o, d) : c === "dangerouslySetInnerHTML" ? eb(o, d) : c === "children" ? Ka(o, d) : dh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Ff(o, i);
                break;
              case "textarea":
                Z1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? di(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? di(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : di(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[rs] = i;
          } catch (y) {
            ze(e, e.return, y);
          }
      }
      break;
    case 6:
      if (sr(t, e), gr(e), n & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 3:
      if (sr(t, e), gr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          Qa(t.containerInfo);
        } catch (y) {
          ze(e, e.return, y);
        }
      break;
    case 4:
      sr(t, e), gr(e);
      break;
    case 13:
      sr(t, e), gr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Hh = je())), n & 4 && Mg(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (ct = (u = ct) || c, sr(t, e), ct = u) : sr(t, e), gr(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (f = F, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Aa(4, f, f.return);
                  break;
                case 1:
                  Zo(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      ze(n, r, y);
                    }
                  }
                  break;
                case 5:
                  Zo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    zg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, F = p) : zg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = tb("display", a));
                } catch (y) {
                  ze(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  ze(e, e.return, y);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      sr(t, e), gr(e), n & 4 && Mg(e);
      break;
    case 21:
      break;
    default:
      sr(
        t,
        e
      ), gr(e);
  }
}
function gr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Ex(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(O(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Ka(o, ""), n.flags &= -33);
          var i = Rg(e);
          gp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Rg(e);
          vp(e, s, a);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ze(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tT(e, t, r) {
  F = e, Rx(e);
}
function Rx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || vl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || ct;
        s = vl;
        var u = ct;
        if (vl = a, (ct = l) && !u)
          for (F = o; F !== null; )
            a = F, l = a.child, a.tag === 22 && a.memoizedState !== null ? Ig(o) : l !== null ? (l.return = a, F = l) : Ig(o);
        for (; i !== null; )
          F = i, Rx(i), i = i.sibling;
        F = o, vl = s, ct = u;
      }
      Og(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : Og(e);
  }
}
function Og(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || yc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ct)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : ur(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && vg(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (r = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                vg(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Qa(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        ct || t.flags & 512 && mp(t);
      } catch (f) {
        ze(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, F = r;
      break;
    }
    F = t.return;
  }
}
function zg(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, F = r;
      break;
    }
    F = t.return;
  }
}
function Ig(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            yc(4, t);
          } catch (l) {
            ze(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ze(t, o, l);
            }
          }
          var i = t.return;
          try {
            mp(t);
          } catch (l) {
            ze(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            mp(t);
          } catch (l) {
            ze(t, a, l);
          }
      }
    } catch (l) {
      ze(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, F = s;
      break;
    }
    F = t.return;
  }
}
var rT = Math.ceil, zu = un.ReactCurrentDispatcher, Vh = un.ReactCurrentOwner, er = un.ReactCurrentBatchConfig, te = 0, Ye = null, Ve = null, nt = 0, Mt = 0, Jo = Nn(0), He = 0, ls = null, wo = 0, bc = 0, Wh = 0, Ra = null, xt = null, Hh = 0, Ri = 1 / 0, Nr = null, Iu = !1, yp = null, Rn = null, gl = !1, _n = null, Fu = 0, Ma = 0, bp = null, Yl = -1, ql = 0;
function vt() {
  return te & 6 ? je() : Yl !== -1 ? Yl : Yl = je();
}
function Mn(e) {
  return e.mode & 1 ? te & 2 && nt !== 0 ? nt & -nt : LP.transition !== null ? (ql === 0 && (ql = hb()), ql) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sb(e.type)), e) : 1;
}
function hr(e, t, r, n) {
  if (50 < Ma)
    throw Ma = 0, bp = null, Error(O(185));
  Es(e, r, n), (!(te & 2) || e !== Ye) && (e === Ye && (!(te & 2) && (bc |= r), He === 4 && Sn(e, nt)), _t(e, n), r === 1 && te === 0 && !(t.mode & 1) && (Ri = je() + 500, mc && Vn()));
}
function _t(e, t) {
  var r = e.callbackNode;
  L_(e, t);
  var n = bu(e, e === Ye ? nt : 0);
  if (n === 0)
    r !== null && Hv(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Hv(r), t === 1)
      e.tag === 0 ? jP(Fg.bind(null, e)) : Bb(Fg.bind(null, e)), zP(function() {
        !(te & 6) && Vn();
      }), r = null;
    else {
      switch (mb(n)) {
        case 1:
          r = vh;
          break;
        case 4:
          r = fb;
          break;
        case 16:
          r = yu;
          break;
        case 536870912:
          r = pb;
          break;
        default:
          r = yu;
      }
      r = Lx(r, Mx.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Mx(e, t) {
  if (Yl = -1, ql = 0, te & 6)
    throw Error(O(327));
  var r = e.callbackNode;
  if (vi() && e.callbackNode !== r)
    return null;
  var n = bu(e, e === Ye ? nt : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Du(e, n);
  else {
    t = n;
    var o = te;
    te |= 2;
    var i = zx();
    (Ye !== e || nt !== t) && (Nr = null, Ri = je() + 500, fo(e, t));
    do
      try {
        iT();
        break;
      } catch (s) {
        Ox(e, s);
      }
    while (!0);
    $h(), zu.current = i, te = o, Ve !== null ? t = 0 : (Ye = null, nt = 0, t = He);
  }
  if (t !== 0) {
    if (t === 2 && (o = Gf(e), o !== 0 && (n = o, t = xp(e, o))), t === 1)
      throw r = ls, fo(e, 0), Sn(e, n), _t(e, je()), r;
    if (t === 6)
      Sn(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !nT(o) && (t = Du(e, n), t === 2 && (i = Gf(e), i !== 0 && (n = i, t = xp(e, i))), t === 1))
        throw r = ls, fo(e, 0), Sn(e, n), _t(e, je()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Jn(e, xt, Nr);
          break;
        case 3:
          if (Sn(e, n), (n & 130023424) === n && (t = Hh + 500 - je(), 10 < t)) {
            if (bu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              vt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ep(Jn.bind(null, e, xt, Nr), t);
            break;
          }
          Jn(e, xt, Nr);
          break;
        case 4:
          if (Sn(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - pr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = je() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * rT(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = ep(Jn.bind(null, e, xt, Nr), n);
            break;
          }
          Jn(e, xt, Nr);
          break;
        case 5:
          Jn(e, xt, Nr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return _t(e, je()), e.callbackNode === r ? Mx.bind(null, e) : null;
}
function xp(e, t) {
  var r = Ra;
  return e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256), e = Du(e, t), e !== 2 && (t = xt, xt = r, t !== null && Sp(t)), e;
}
function Sp(e) {
  xt === null ? xt = e : xt.push.apply(xt, e);
}
function nT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!mr(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null)
      r.return = t, t = r;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Sn(e, t) {
  for (t &= ~Wh, t &= ~bc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - pr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Fg(e) {
  if (te & 6)
    throw Error(O(327));
  vi();
  var t = bu(e, 0);
  if (!(t & 1))
    return _t(e, je()), null;
  var r = Du(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Gf(e);
    n !== 0 && (t = n, r = xp(e, n));
  }
  if (r === 1)
    throw r = ls, fo(e, 0), Sn(e, t), _t(e, je()), r;
  if (r === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jn(e, xt, Nr), _t(e, je()), null;
}
function Uh(e, t) {
  var r = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = r, te === 0 && (Ri = je() + 500, mc && Vn());
  }
}
function ko(e) {
  _n !== null && _n.tag === 0 && !(te & 6) && vi();
  var t = te;
  te |= 1;
  var r = er.transition, n = de;
  try {
    if (er.transition = null, de = 1, e)
      return e();
  } finally {
    de = n, er.transition = r, te = t, !(te & 6) && Vn();
  }
}
function Gh() {
  Mt = Jo.current, we(Jo);
}
function fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, OP(r)), Ve !== null)
    for (r = Ve.return; r !== null; ) {
      var n = r;
      switch (Ph(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Cu();
          break;
        case 3:
          $i(), we(kt), we(ft), Ih();
          break;
        case 5:
          zh(n);
          break;
        case 4:
          $i();
          break;
        case 13:
          we(Ee);
          break;
        case 19:
          we(Ee);
          break;
        case 10:
          Ah(n.type._context);
          break;
        case 22:
        case 23:
          Gh();
      }
      r = r.return;
    }
  if (Ye = e, Ve = e = On(e.current, null), nt = Mt = t, He = 0, ls = null, Wh = bc = wo = 0, xt = Ra = null, ao !== null) {
    for (t = 0; t < ao.length; t++)
      if (r = ao[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    ao = null;
  }
  return e;
}
function Ox(e, t) {
  do {
    var r = Ve;
    try {
      if ($h(), Ul.current = Ou, Mu) {
        for (var n = Ae.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Mu = !1;
      }
      if (So = 0, Ke = We = Ae = null, $a = !1, is = 0, Vh.current = null, r === null || r.return === null) {
        He = 1, ls = t, Ve = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = nt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = kg(a);
          if (p !== null) {
            p.flags &= -257, Cg(p, a, s, i, t), p.mode & 1 && wg(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              wg(i, u, t), Kh();
              break e;
            }
            l = Error(O(426));
          }
        } else if (Pe && s.mode & 1) {
          var S = kg(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Cg(S, a, s, i, t), Th(Ai(l, s));
            break e;
          }
        }
        i = l = Ai(l, s), He !== 4 && (He = 2), Ra === null ? Ra = [i] : Ra.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = vx(i, l, t);
              mg(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Rn === null || !Rn.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = gx(i, s, t);
                mg(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Fx(r);
    } catch (k) {
      t = k, Ve === r && r !== null && (Ve = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function zx() {
  var e = zu.current;
  return zu.current = Ou, e === null ? Ou : e;
}
function Kh() {
  (He === 0 || He === 3 || He === 2) && (He = 4), Ye === null || !(wo & 268435455) && !(bc & 268435455) || Sn(Ye, nt);
}
function Du(e, t) {
  var r = te;
  te |= 2;
  var n = zx();
  (Ye !== e || nt !== t) && (Nr = null, fo(e, t));
  do
    try {
      oT();
      break;
    } catch (o) {
      Ox(e, o);
    }
  while (!0);
  if ($h(), te = r, zu.current = n, Ve !== null)
    throw Error(O(261));
  return Ye = null, nt = 0, He;
}
function oT() {
  for (; Ve !== null; )
    Ix(Ve);
}
function iT() {
  for (; Ve !== null && !A_(); )
    Ix(Ve);
}
function Ix(e) {
  var t = jx(e.alternate, e, Mt);
  e.memoizedProps = e.pendingProps, t === null ? Fx(e) : Ve = t, Vh.current = null;
}
function Fx(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = ZP(r, t), r !== null) {
        r.flags &= 32767, Ve = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        He = 6, Ve = null;
        return;
      }
    } else if (r = QP(r, t, Mt), r !== null) {
      Ve = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  He === 0 && (He = 5);
}
function Jn(e, t, r) {
  var n = de, o = er.transition;
  try {
    er.transition = null, de = 1, aT(e, t, r, n);
  } finally {
    er.transition = o, de = n;
  }
  return null;
}
function aT(e, t, r, n) {
  do
    vi();
  while (_n !== null);
  if (te & 6)
    throw Error(O(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (B_(e, i), e === Ye && (Ve = Ye = null, nt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || gl || (gl = !0, Lx(yu, function() {
    return vi(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = er.transition, er.transition = null;
    var a = de;
    de = 1;
    var s = te;
    te |= 4, Vh.current = null, eT(e, r), Ax(r, e), PP(Zf), xu = !!Qf, Zf = Qf = null, e.current = r, tT(r), R_(), te = s, de = a, er.transition = i;
  } else
    e.current = r;
  if (gl && (gl = !1, _n = e, Fu = o), i = e.pendingLanes, i === 0 && (Rn = null), z_(r.stateNode), _t(e, je()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Iu)
    throw Iu = !1, e = yp, yp = null, e;
  return Fu & 1 && e.tag !== 0 && vi(), i = e.pendingLanes, i & 1 ? e === bp ? Ma++ : (Ma = 0, bp = e) : Ma = 0, Vn(), null;
}
function vi() {
  if (_n !== null) {
    var e = mb(Fu), t = er.transition, r = de;
    try {
      if (er.transition = null, de = 16 > e ? 16 : e, _n === null)
        var n = !1;
      else {
        if (e = _n, _n = null, Fu = 0, te & 6)
          throw Error(O(331));
        var o = te;
        for (te |= 4, F = e.current; F !== null; ) {
          var i = F, a = i.child;
          if (F.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Aa(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, F = d;
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling, p = c.return;
                      if (Tx(c), c === u) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, F = f;
                        break;
                      }
                      F = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var S = y.sibling;
                    y.sibling = null, y = S;
                  } while (y !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, F = a;
          else
            e:
              for (; F !== null; ) {
                if (i = F, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Aa(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, F = m;
                  break e;
                }
                F = i.return;
              }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          a = F;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null)
            v.return = a, F = v;
          else
            e:
              for (a = h; F !== null; ) {
                if (s = F, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yc(9, s);
                    }
                  } catch (k) {
                    ze(s, s.return, k);
                  }
                if (s === a) {
                  F = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, F = w;
                  break e;
                }
                F = s.return;
              }
        }
        if (te = o, Vn(), $r && typeof $r.onPostCommitFiberRoot == "function")
          try {
            $r.onPostCommitFiberRoot(cc, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      de = r, er.transition = t;
    }
  }
  return !1;
}
function Dg(e, t, r) {
  t = Ai(r, t), t = vx(e, t, 1), e = An(e, t, 1), t = vt(), e !== null && (Es(e, 1, t), _t(e, t));
}
function ze(e, t, r) {
  if (e.tag === 3)
    Dg(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dg(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rn === null || !Rn.has(n))) {
          e = Ai(r, e), e = gx(t, e, 1), t = An(t, e, 1), e = vt(), t !== null && (Es(t, 1, e), _t(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sT(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & r, Ye === e && (nt & r) === r && (He === 4 || He === 3 && (nt & 130023424) === nt && 500 > je() - Hh ? fo(e, 0) : Wh |= r), _t(e, t);
}
function Dx(e, t) {
  t === 0 && (e.mode & 1 ? (t = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : t = 1);
  var r = vt();
  e = nn(e, t), e !== null && (Es(e, t, r), _t(e, r));
}
function lT(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Dx(e, r);
}
function uT(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  n !== null && n.delete(t), Dx(e, r);
}
var jx;
jx = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || kt.current)
      wt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return wt = !1, XP(e, t, r);
      wt = !!(e.flags & 131072);
    }
  else
    wt = !1, Pe && t.flags & 1048576 && Nb(t, Tu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Kl(e, t), e = t.pendingProps;
      var o = Pi(t, ft.current);
      mi(t, r), o = Dh(null, t, n, e, o, r);
      var i = jh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ct(n) ? (i = !0, _u(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Mh(t), o.updater = vc, t.stateNode = o, o._reactInternals = t, sp(t, n, e, r), t = cp(null, t, n, !0, i, r)) : (t.tag = 0, Pe && i && _h(t), ht(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Kl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = dT(n), e = ur(n, e), o) {
          case 0:
            t = up(null, t, n, e, r);
            break e;
          case 1:
            t = Tg(null, t, n, e, r);
            break e;
          case 11:
            t = _g(null, t, n, e, r);
            break e;
          case 14:
            t = Pg(null, t, n, ur(n.type, e), r);
            break e;
        }
        throw Error(O(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), up(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), Tg(e, t, n, o, r);
    case 3:
      e: {
        if (Sx(t), e === null)
          throw Error(O(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, Ub(e, t), Au(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ai(Error(O(423)), t), t = Eg(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Ai(Error(O(424)), t), t = Eg(e, t, n, r, o);
            break e;
          } else
            for (Ot = $n(t.stateNode.containerInfo.firstChild), zt = t, Pe = !0, dr = null, r = qb(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Ti(), n === o) {
            t = on(e, t, r);
            break e;
          }
          ht(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Xb(t), e === null && op(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Jf(n, o) ? a = null : i !== null && Jf(n, i) && (t.flags |= 32), xx(e, t), ht(e, t, a, r), t.child;
    case 6:
      return e === null && op(t), null;
    case 13:
      return wx(e, t, r);
    case 4:
      return Oh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Ei(t, null, n, r) : ht(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), _g(e, t, n, o, r);
    case 7:
      return ht(e, t, t.pendingProps, r), t.child;
    case 8:
      return ht(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ht(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, me(Eu, n._currentValue), n._currentValue = a, i !== null)
          if (mr(i.value, a)) {
            if (i.children === o.children && !kt.current) {
              t = on(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      l = Xr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), ip(
                      i.return,
                      r,
                      t
                    ), s.lanes |= r;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(O(341));
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), ip(a, r, t), a = i.sibling;
              } else
                a = i.child;
              if (a !== null)
                a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ht(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, mi(t, r), o = nr(o), n = n(o), t.flags |= 1, ht(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = ur(n, t.pendingProps), o = ur(n.type, o), Pg(e, t, n, o, r);
    case 15:
      return yx(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), Kl(e, t), t.tag = 1, Ct(n) ? (e = !0, _u(t)) : e = !1, mi(t, r), Kb(t, n, o), sp(t, n, o, r), cp(null, t, n, !0, e, r);
    case 19:
      return kx(e, t, r);
    case 22:
      return bx(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function Lx(e, t) {
  return db(e, t);
}
function cT(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Zt(e, t, r, n) {
  return new cT(e, t, r, n);
}
function Yh(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dT(e) {
  if (typeof e == "function")
    return Yh(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ph)
      return 11;
    if (e === hh)
      return 14;
  }
  return 2;
}
function On(e, t) {
  var r = e.alternate;
  return r === null ? (r = Zt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Xl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    Yh(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Wo:
          return po(r.children, o, i, t);
        case fh:
          a = 8, o |= 8;
          break;
        case Rf:
          return e = Zt(12, r, t, o | 2), e.elementType = Rf, e.lanes = i, e;
        case Mf:
          return e = Zt(13, r, t, o), e.elementType = Mf, e.lanes = i, e;
        case Of:
          return e = Zt(19, r, t, o), e.elementType = Of, e.lanes = i, e;
        case Y1:
          return xc(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case G1:
                a = 10;
                break e;
              case K1:
                a = 9;
                break e;
              case ph:
                a = 11;
                break e;
              case hh:
                a = 14;
                break e;
              case gn:
                a = 16, n = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Zt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function po(e, t, r, n) {
  return e = Zt(7, e, n, t), e.lanes = r, e;
}
function xc(e, t, r, n) {
  return e = Zt(22, e, n, t), e.elementType = Y1, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Dd(e, t, r) {
  return e = Zt(6, e, null, t), e.lanes = r, e;
}
function jd(e, t, r) {
  return t = Zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fT(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yd(0), this.expirationTimes = yd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yd(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qh(e, t, r, n, o, i, a, s, l) {
  return e = new fT(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Zt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mh(i), e;
}
function pT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Bx(e) {
  if (!e)
    return Dn;
  e = e._reactInternals;
  e: {
    if (To(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ct(r))
      return Lb(e, r, t);
  }
  return t;
}
function Nx(e, t, r, n, o, i, a, s, l) {
  return e = qh(r, n, !0, e, o, i, a, s, l), e.context = Bx(null), r = e.current, n = vt(), o = Mn(r), i = Xr(n, o), i.callback = t ?? null, An(r, i, o), e.current.lanes = o, Es(e, o, n), _t(e, n), e;
}
function Sc(e, t, r, n) {
  var o = t.current, i = vt(), a = Mn(o);
  return r = Bx(r), t.context === null ? t.context = r : t.pendingContext = r, t = Xr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = An(o, t, a), e !== null && (hr(e, o, a, i), Hl(e, o, a)), a;
}
function ju(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jg(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Xh(e, t) {
  jg(e, t), (e = e.alternate) && jg(e, t);
}
function hT() {
  return null;
}
var Vx = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Qh(e) {
  this._internalRoot = e;
}
wc.prototype.render = Qh.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  Sc(e, t, null, null);
};
wc.prototype.unmount = Qh.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ko(function() {
      Sc(null, e, null, null);
    }), t[rn] = null;
  }
};
function wc(e) {
  this._internalRoot = e;
}
wc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yb();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < xn.length && t !== 0 && t < xn[r].priority; r++)
      ;
    xn.splice(r, 0, e), r === 0 && xb(e);
  }
};
function Zh(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function kc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lg() {
}
function mT(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = ju(a);
        i.call(u);
      };
    }
    var a = Nx(t, n, e, 0, null, !1, !1, "", Lg);
    return e._reactRootContainer = a, e[rn] = a.current, es(e.nodeType === 8 ? e.parentNode : e), ko(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = ju(l);
      s.call(u);
    };
  }
  var l = qh(e, 0, !1, null, null, !1, !1, "", Lg);
  return e._reactRootContainer = l, e[rn] = l.current, es(e.nodeType === 8 ? e.parentNode : e), ko(function() {
    Sc(t, l, r, n);
  }), l;
}
function Cc(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = ju(a);
        s.call(l);
      };
    }
    Sc(t, a, e, o);
  } else
    a = mT(r, t, e, o, n);
  return ju(a);
}
vb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ma(t.pendingLanes);
        r !== 0 && (gh(t, r | 1), _t(t, je()), !(te & 6) && (Ri = je() + 500, Vn()));
      }
      break;
    case 13:
      ko(function() {
        var n = nn(e, 1);
        if (n !== null) {
          var o = vt();
          hr(n, e, 1, o);
        }
      }), Xh(e, 1);
  }
};
yh = function(e) {
  if (e.tag === 13) {
    var t = nn(e, 134217728);
    if (t !== null) {
      var r = vt();
      hr(t, e, 134217728, r);
    }
    Xh(e, 134217728);
  }
};
gb = function(e) {
  if (e.tag === 13) {
    var t = Mn(e), r = nn(e, t);
    if (r !== null) {
      var n = vt();
      hr(r, e, t, n);
    }
    Xh(e, t);
  }
};
yb = function() {
  return de;
};
bb = function(e, t) {
  var r = de;
  try {
    return de = e, t();
  } finally {
    de = r;
  }
};
Wf = function(e, t, r) {
  switch (t) {
    case "input":
      if (Ff(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = hc(n);
            if (!o)
              throw Error(O(90));
            X1(n), Ff(n, o);
          }
        }
      }
      break;
    case "textarea":
      Z1(e, r);
      break;
    case "select":
      t = r.value, t != null && di(e, !!r.multiple, t, !1);
  }
};
ib = Uh;
ab = ko;
var vT = { usingClientEntryPoint: !1, Events: [As, Ko, hc, nb, ob, Uh] }, oa = { findFiberByHostInstance: io, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, gT = { bundleType: oa.bundleType, version: oa.version, rendererPackageName: oa.rendererPackageName, rendererConfig: oa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: un.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ub(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: oa.findFiberByHostInstance || hT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yl.isDisabled && yl.supportsFiber)
    try {
      cc = yl.inject(gT), $r = yl;
    } catch {
    }
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vT;
Bt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zh(t))
    throw Error(O(200));
  return pT(e, t, null, r);
};
Bt.createRoot = function(e, t) {
  if (!Zh(e))
    throw Error(O(299));
  var r = !1, n = "", o = Vx;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qh(e, 1, !1, null, null, r, !1, n, o), e[rn] = t.current, es(e.nodeType === 8 ? e.parentNode : e), new Qh(t);
};
Bt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = ub(t), e = e === null ? null : e.stateNode, e;
};
Bt.flushSync = function(e) {
  return ko(e);
};
Bt.hydrate = function(e, t, r) {
  if (!kc(t))
    throw Error(O(200));
  return Cc(null, e, t, !0, r);
};
Bt.hydrateRoot = function(e, t, r) {
  if (!Zh(e))
    throw Error(O(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = Vx;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Nx(t, null, e, 1, r ?? null, o, !1, i, a), e[rn] = t.current, es(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new wc(t);
};
Bt.render = function(e, t, r) {
  if (!kc(t))
    throw Error(O(200));
  return Cc(null, e, t, !1, r);
};
Bt.unmountComponentAtNode = function(e) {
  if (!kc(e))
    throw Error(O(40));
  return e._reactRootContainer ? (ko(function() {
    Cc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rn] = null;
    });
  }), !0) : !1;
};
Bt.unstable_batchedUpdates = Uh;
Bt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!kc(r))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return Cc(e, t, r, !1, n);
};
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function Wx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx);
    } catch (e) {
      console.error(e);
    }
}
Wx(), N1.exports = Bt;
var Jh = N1.exports, Bg = Jh;
$f.createRoot = Bg.createRoot, $f.hydrateRoot = Bg.hydrateRoot;
var Hx = "Expected a function", Ng = NaN, yT = "[object Symbol]", bT = /^\s+|\s+$/g, xT = /^[-+]0x[0-9a-f]+$/i, ST = /^0b[01]+$/i, wT = /^0o[0-7]+$/i, kT = parseInt, CT = typeof kn == "object" && kn && kn.Object === Object && kn, _T = typeof self == "object" && self && self.Object === Object && self, PT = CT || _T || Function("return this")(), TT = Object.prototype, ET = TT.toString, $T = Math.max, AT = Math.min, Ld = function() {
  return PT.Date.now();
};
function RT(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Hx);
  t = Vg(t) || 0, Lu(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? $T(Vg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function p(E) {
    var _ = n, $ = o;
    return n = o = void 0, u = E, a = e.apply($, _), a;
  }
  function g(E) {
    return u = E, s = setTimeout(m, t), c ? p(E) : a;
  }
  function y(E) {
    var _ = E - l, $ = E - u, R = t - _;
    return d ? AT(R, i - $) : R;
  }
  function S(E) {
    var _ = E - l, $ = E - u;
    return l === void 0 || _ >= t || _ < 0 || d && $ >= i;
  }
  function m() {
    var E = Ld();
    if (S(E))
      return h(E);
    s = setTimeout(m, y(E));
  }
  function h(E) {
    return s = void 0, f && n ? p(E) : (n = o = void 0, a);
  }
  function v() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : h(Ld());
  }
  function k() {
    var E = Ld(), _ = S(E);
    if (n = arguments, o = this, l = E, _) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = v, k.flush = w, k;
}
function MT(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Hx);
  return Lu(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), RT(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Lu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function OT(e) {
  return !!e && typeof e == "object";
}
function zT(e) {
  return typeof e == "symbol" || OT(e) && ET.call(e) == yT;
}
function Vg(e) {
  if (typeof e == "number")
    return e;
  if (zT(e))
    return Ng;
  if (Lu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Lu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(bT, "");
  var r = ST.test(e);
  return r || wT.test(e) ? kT(e.slice(2), r ? 2 : 8) : xT.test(e) ? Ng : +e;
}
var IT = MT;
const FT = /* @__PURE__ */ Ps(IT);
function DT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var LT = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = DT(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ut = "-ms-", Bu = "-moz-", ae = "-webkit-", Ux = "comm", em = "rule", tm = "decl", BT = "@import", Gx = "@keyframes", NT = "@layer", VT = Math.abs, _c = String.fromCharCode, WT = Object.assign;
function HT(e, t) {
  return rt(e, 0) ^ 45 ? (((t << 2 ^ rt(e, 0)) << 2 ^ rt(e, 1)) << 2 ^ rt(e, 2)) << 2 ^ rt(e, 3) : 0;
}
function Kx(e) {
  return e.trim();
}
function UT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, r) {
  return e.replace(t, r);
}
function wp(e, t) {
  return e.indexOf(t);
}
function rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function us(e, t, r) {
  return e.slice(t, r);
}
function Cr(e) {
  return e.length;
}
function rm(e) {
  return e.length;
}
function bl(e, t) {
  return t.push(e), e;
}
function GT(e, t) {
  return e.map(t).join("");
}
var Pc = 1, Mi = 1, Yx = 0, Et = 0, Ne = 0, Hi = "";
function Tc(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Pc, column: Mi, length: a, return: "" };
}
function ia(e, t) {
  return WT(Tc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function KT() {
  return Ne;
}
function YT() {
  return Ne = Et > 0 ? rt(Hi, --Et) : 0, Mi--, Ne === 10 && (Mi = 1, Pc--), Ne;
}
function It() {
  return Ne = Et < Yx ? rt(Hi, Et++) : 0, Mi++, Ne === 10 && (Mi = 1, Pc++), Ne;
}
function Rr() {
  return rt(Hi, Et);
}
function Ql() {
  return Et;
}
function Ms(e, t) {
  return us(Hi, e, t);
}
function cs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function qx(e) {
  return Pc = Mi = 1, Yx = Cr(Hi = e), Et = 0, [];
}
function Xx(e) {
  return Hi = "", e;
}
function Zl(e) {
  return Kx(Ms(Et - 1, kp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qT(e) {
  for (; (Ne = Rr()) && Ne < 33; )
    It();
  return cs(e) > 2 || cs(Ne) > 3 ? "" : " ";
}
function XT(e, t) {
  for (; --t && It() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return Ms(e, Ql() + (t < 6 && Rr() == 32 && It() == 32));
}
function kp(e) {
  for (; It(); )
    switch (Ne) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kp(Ne);
        break;
      case 40:
        e === 41 && kp(e);
        break;
      case 92:
        It();
        break;
    }
  return Et;
}
function QT(e, t) {
  for (; It() && e + Ne !== 57; )
    if (e + Ne === 84 && Rr() === 47)
      break;
  return "/*" + Ms(t, Et - 1) + "*" + _c(e === 47 ? e : It());
}
function ZT(e) {
  for (; !cs(Rr()); )
    It();
  return Ms(e, Et);
}
function JT(e) {
  return Xx(Jl("", null, null, null, [""], e = qx(e), 0, [0], e));
}
function Jl(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, S = 1, m = 1, h = 0, v = "", w = o, k = i, E = n, _ = v; S; )
    switch (g = h, h = It()) {
      case 40:
        if (g != 108 && rt(_, d - 1) == 58) {
          wp(_ += se(Zl(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Zl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += qT(g);
        break;
      case 92:
        _ += XT(Ql() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            bl(eE(QT(It(), Ql()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * y:
        s[u++] = Cr(_) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (_ = se(_, /\f/g, "")), p > 0 && Cr(_) - d && bl(p > 32 ? Hg(_ + ";", n, r, d - 1) : Hg(se(_, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (bl(E = Wg(_, t, r, u, c, o, s, v, w = [], k = [], d), i), h === 123)
              if (c === 0)
                Jl(_, t, E, E, w, i, d, s, k);
              else
                switch (f === 99 && rt(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jl(e, E, E, n && bl(Wg(e, E, E, 0, 0, o, s, v, o, w = [], d), k), o, k, d, s, n ? w : k);
                    break;
                  default:
                    Jl(_, E, E, E, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, y = m = 1, v = _ = "", d = a;
        break;
      case 58:
        d = 1 + Cr(_), p = g;
      default:
        if (y < 1) {
          if (h == 123)
            --y;
          else if (h == 125 && y++ == 0 && YT() == 125)
            continue;
        }
        switch (_ += _c(h), h * y) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Cr(_) - 1) * m, m = 1;
            break;
          case 64:
            Rr() === 45 && (_ += Zl(It())), f = Rr(), c = d = Cr(v = _ += ZT(Ql())), h++;
            break;
          case 45:
            g === 45 && Cr(_) == 2 && (y = 0);
        }
    }
  return i;
}
function Wg(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = rm(f), g = 0, y = 0, S = 0; g < n; ++g)
    for (var m = 0, h = us(e, d + 1, d = VT(y = a[g])), v = e; m < p; ++m)
      (v = Kx(y > 0 ? f[m] + " " + h : se(h, /&\f/g, f[m]))) && (l[S++] = v);
  return Tc(e, t, r, o === 0 ? em : s, l, u, c);
}
function eE(e, t, r) {
  return Tc(e, t, r, Ux, _c(KT()), us(e, 2, -2), 0);
}
function Hg(e, t, r, n) {
  return Tc(e, t, r, tm, us(e, 0, n), us(e, n + 1, -1), n);
}
function gi(e, t) {
  for (var r = "", n = rm(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function tE(e, t, r, n) {
  switch (e.type) {
    case NT:
      if (e.children.length)
        break;
    case BT:
    case tm:
      return e.return = e.return || e.value;
    case Ux:
      return "";
    case Gx:
      return e.return = e.value + "{" + gi(e.children, n) + "}";
    case em:
      e.value = e.props.join(",");
  }
  return Cr(r = gi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function rE(e) {
  var t = rm(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function nE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ug = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Qx(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var oE = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Rr(), o === 38 && i === 12 && (r[n] = 1), !cs(i); )
    It();
  return Ms(t, Et);
}, iE = function(t, r) {
  var n = -1, o = 44;
  do
    switch (cs(o)) {
      case 0:
        o === 38 && Rr() === 12 && (r[n] = 1), t[n] += oE(Et - 1, r, n);
        break;
      case 2:
        t[n] += Zl(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Rr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += _c(o);
    }
  while (o = It());
  return t;
}, aE = function(t, r) {
  return Xx(iE(qx(t), r));
}, Gg = /* @__PURE__ */ new WeakMap(), sE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Gg.get(n)) && !o) {
      Gg.set(t, !0);
      for (var i = [], a = aE(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, lE = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Zx(e, t) {
  switch (HT(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + Bu + e + ut + e + e;
    case 6828:
    case 4268:
      return ae + e + ut + e + e;
    case 6165:
      return ae + e + ut + "flex-" + e + e;
    case 5187:
      return ae + e + se(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + ut + "flex-$1$2") + e;
    case 5443:
      return ae + e + ut + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return ae + e + ut + "flex-line-pack" + se(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ae + e + ut + se(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + ut + se(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + se(e, "-grow", "") + ae + e + ut + se(e, "grow", "positive") + e;
    case 4554:
      return ae + se(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Cr(e) - 1 - t > 6)
        switch (rt(e, t + 1)) {
          case 109:
            if (rt(e, t + 4) !== 45)
              break;
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + Bu + (rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~wp(e, "stretch") ? Zx(se(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (rt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (rt(e, Cr(e) - 3 - (~wp(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + ae) + e;
        case 101:
          return se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + ut + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (rt(e, t + 11)) {
        case 114:
          return ae + e + ut + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + ut + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + ut + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + ut + e + e;
  }
  return e;
}
var uE = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case tm:
        t.return = Zx(t.value, t.length);
        break;
      case Gx:
        return gi([ia(t, {
          value: se(t.value, "@", "@" + ae)
        })], o);
      case em:
        if (t.length)
          return GT(t.props, function(i) {
            switch (UT(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return gi([ia(t, {
                  props: [se(i, /:(read-\w+)/, ":" + Bu + "$1")]
                })], o);
              case "::placeholder":
                return gi([ia(t, {
                  props: [se(i, /:(plac\w+)/, ":" + ae + "input-$1")]
                }), ia(t, {
                  props: [se(i, /:(plac\w+)/, ":" + Bu + "$1")]
                }), ia(t, {
                  props: [se(i, /:(plac\w+)/, ut + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, cE = [uE], dE = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var S = y.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cE, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var S = y.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
        i[S[m]] = !0;
      s.push(y);
    }
  );
  var l, u = [sE, lE];
  {
    var c, d = [tE, nE(function(y) {
      c.insert(y);
    })], f = rE(u.concat(o, d)), p = function(S) {
      return gi(JT(S), f);
    };
    l = function(S, m, h, v) {
      c = h, p(S ? S + "{" + m.styles + "}" : m.styles), v && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new LT({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(s), g;
};
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Co.apply(this, arguments);
}
var Jx = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = typeof Symbol == "function" && Symbol.for, nm = qe ? Symbol.for("react.element") : 60103, om = qe ? Symbol.for("react.portal") : 60106, Ec = qe ? Symbol.for("react.fragment") : 60107, $c = qe ? Symbol.for("react.strict_mode") : 60108, Ac = qe ? Symbol.for("react.profiler") : 60114, Rc = qe ? Symbol.for("react.provider") : 60109, Mc = qe ? Symbol.for("react.context") : 60110, im = qe ? Symbol.for("react.async_mode") : 60111, Oc = qe ? Symbol.for("react.concurrent_mode") : 60111, zc = qe ? Symbol.for("react.forward_ref") : 60112, Ic = qe ? Symbol.for("react.suspense") : 60113, fE = qe ? Symbol.for("react.suspense_list") : 60120, Fc = qe ? Symbol.for("react.memo") : 60115, Dc = qe ? Symbol.for("react.lazy") : 60116, pE = qe ? Symbol.for("react.block") : 60121, hE = qe ? Symbol.for("react.fundamental") : 60117, mE = qe ? Symbol.for("react.responder") : 60118, vE = qe ? Symbol.for("react.scope") : 60119;
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nm:
        switch (e = e.type, e) {
          case im:
          case Oc:
          case Ec:
          case Ac:
          case $c:
          case Ic:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Mc:
              case zc:
              case Dc:
              case Fc:
              case Rc:
                return e;
              default:
                return t;
            }
        }
      case om:
        return t;
    }
  }
}
function eS(e) {
  return Vt(e) === Oc;
}
fe.AsyncMode = im;
fe.ConcurrentMode = Oc;
fe.ContextConsumer = Mc;
fe.ContextProvider = Rc;
fe.Element = nm;
fe.ForwardRef = zc;
fe.Fragment = Ec;
fe.Lazy = Dc;
fe.Memo = Fc;
fe.Portal = om;
fe.Profiler = Ac;
fe.StrictMode = $c;
fe.Suspense = Ic;
fe.isAsyncMode = function(e) {
  return eS(e) || Vt(e) === im;
};
fe.isConcurrentMode = eS;
fe.isContextConsumer = function(e) {
  return Vt(e) === Mc;
};
fe.isContextProvider = function(e) {
  return Vt(e) === Rc;
};
fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nm;
};
fe.isForwardRef = function(e) {
  return Vt(e) === zc;
};
fe.isFragment = function(e) {
  return Vt(e) === Ec;
};
fe.isLazy = function(e) {
  return Vt(e) === Dc;
};
fe.isMemo = function(e) {
  return Vt(e) === Fc;
};
fe.isPortal = function(e) {
  return Vt(e) === om;
};
fe.isProfiler = function(e) {
  return Vt(e) === Ac;
};
fe.isStrictMode = function(e) {
  return Vt(e) === $c;
};
fe.isSuspense = function(e) {
  return Vt(e) === Ic;
};
fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ec || e === Oc || e === Ac || e === $c || e === Ic || e === fE || typeof e == "object" && e !== null && (e.$$typeof === Dc || e.$$typeof === Fc || e.$$typeof === Rc || e.$$typeof === Mc || e.$$typeof === zc || e.$$typeof === hE || e.$$typeof === mE || e.$$typeof === vE || e.$$typeof === pE);
};
fe.typeOf = Vt;
Jx.exports = fe;
var gE = Jx.exports, tS = gE, yE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rS = {};
rS[tS.ForwardRef] = yE;
rS[tS.Memo] = bE;
var xE = !0;
function SE(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var nS = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xE === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, oS = function(t, r, n) {
  nS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function wE(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var kE = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, CE = /[A-Z]|^ms/g, _E = /_EMO_([^_]+?)_([^]*?)_EMO_/g, iS = function(t) {
  return t.charCodeAt(1) === 45;
}, Kg = function(t) {
  return t != null && typeof t != "boolean";
}, Bd = /* @__PURE__ */ Qx(function(e) {
  return iS(e) ? e : e.replace(CE, "-$&").toLowerCase();
}), Yg = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(_E, function(n, o, i) {
          return _r = {
            name: o,
            styles: i,
            next: _r
          }, o;
        });
  }
  return kE[t] !== 1 && !iS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ds(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return _r = {
          name: r.name,
          styles: r.styles,
          next: _r
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            _r = {
              name: n.name,
              styles: n.styles,
              next: _r
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return PE(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = _r, a = r(e);
        return _r = i, ds(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function PE(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ds(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Kg(a) && (n += Bd(i) + ":" + Yg(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Kg(a[s]) && (n += Bd(i) + ":" + Yg(i, a[s]) + ";");
      else {
        var l = ds(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Bd(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var qg = /label:\s*([^\s;\n{]+)\s*(;|$)/g, _r, am = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  _r = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += ds(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += ds(n, r, t[s]), o && (i += a[s]);
  qg.lastIndex = 0;
  for (var l = "", u; (u = qg.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = wE(i) + l;
  return {
    name: c,
    styles: i,
    next: _r
  };
}, TE = function(t) {
  return t();
}, aS = zv.useInsertionEffect ? zv.useInsertionEffect : !1, EE = aS || TE, Xg = aS || b.useLayoutEffect, sS = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dE({
    key: "css"
  }) : null
);
sS.Provider;
var lS = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(sS);
    return t(r, o, n);
  });
}, fs = /* @__PURE__ */ b.createContext({}), $E = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Co({}, t, r);
}, AE = /* @__PURE__ */ Ug(function(e) {
  return Ug(function(t) {
    return $E(e, t);
  });
}), RE = function(t) {
  var r = b.useContext(fs);
  return t.theme !== r && (r = AE(r)(t.theme)), /* @__PURE__ */ b.createElement(fs.Provider, {
    value: r
  }, t.children);
}, jc = /* @__PURE__ */ lS(function(e, t) {
  var r = e.styles, n = am([r], void 0, b.useContext(fs)), o = b.useRef();
  return Xg(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Xg(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && oS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function ME() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return am(t);
}
var OE = function() {
  var t = ME.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, uS = String.raw, cS = uS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, zE = () => /* @__PURE__ */ C.jsx(jc, { styles: cS }), IE = ({ scope: e = "" }) => /* @__PURE__ */ C.jsx(
  jc,
  {
    styles: uS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${cS}
    `
  }
);
function FE(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Wt(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = b.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = b.useContext(s);
    if (!c && r) {
      const d = new Error(
        i ?? FE(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [DE, jE] = Wt({
  strict: !1,
  name: "PortalManagerContext"
});
function dS(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ C.jsx(DE, { value: { zIndex: r }, children: t });
}
dS.displayName = "PortalManager";
var ps = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [fS, LE] = Wt({
  strict: !1,
  name: "PortalContext"
}), sm = "chakra-portal", BE = ".chakra-portal", NE = (e) => /* @__PURE__ */ C.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), VE = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = LE(), l = jE();
  ps(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = sm, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ C.jsx(NE, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? Jh.createPortal(
    /* @__PURE__ */ C.jsx(fS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ C.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, WE = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = sm), l;
  }, [o]), [, s] = b.useState({});
  return ps(() => s({}), []), ps(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Jh.createPortal(
    /* @__PURE__ */ C.jsx(fS, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function Os(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ C.jsx(WE, { containerRef: r, ...n }) : /* @__PURE__ */ C.jsx(VE, { ...n });
}
Os.className = sm;
Os.selector = BE;
Os.displayName = "Portal";
function lm() {
  const e = b.useContext(
    fs
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var um = b.createContext({});
um.displayName = "ColorModeContext";
function zs() {
  const e = b.useContext(um);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var xl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function HE(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? xl.dark : xl.light), document.body.classList.remove(n ? xl.light : xl.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var o;
      return ((o = r.query().matches) != null ? o : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), i = (a) => {
        n(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return r;
}
var UE = "chakra-ui-color-mode";
function GE(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var KE = GE(UE), Qg = () => {
};
function Zg(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function pS(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = KE
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => Zg(a, s)
  ), [c, d] = b.useState(
    () => Zg(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = b.useMemo(
    () => HE({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), g(k), a.set(k);
    },
    [a, f, p, g]
  );
  ps(() => {
    o === "system" && d(f());
  }, []), b.useEffect(() => {
    const w = a.get();
    if (w) {
      m(w);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const h = b.useCallback(() => {
    m(S === "dark" ? "light" : "dark");
  }, [S, m]);
  b.useEffect(() => {
    if (n)
      return y(m);
  }, [n, y, m]);
  const v = b.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Qg : h,
      setColorMode: t ? Qg : m,
      forced: t !== void 0
    }),
    [S, h, m, t]
  );
  return /* @__PURE__ */ C.jsx(um.Provider, { value: v, children: r });
}
pS.displayName = "ColorModeProvider";
var YE = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function qE(e) {
  let t = e;
  return YE.has(t) || (t = "light"), t;
}
function XE(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = qE(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function QE(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ C.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: XE(e) }
    }
  );
}
function ZE() {
  const e = zs(), t = lm();
  return { ...e, theme: t };
}
var ge = (...e) => e.filter(Boolean).join(" ");
function tr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Kr(e, ...t) {
  return JE(e) ? e(...t) : e;
}
var JE = (e) => typeof e == "function", Sr = (e) => e ? "" : void 0, Nd = (e) => e ? !0 : void 0;
function tt(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function e$(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Nu = { exports: {} };
Nu.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", S = "[object Number]", m = "[object Null]", h = "[object Object]", v = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", E = "[object String]", _ = "[object Undefined]", $ = "[object WeakMap]", R = "[object ArrayBuffer]", M = "[object DataView]", j = "[object Float32Array]", ee = "[object Float64Array]", U = "[object Int8Array]", G = "[object Int16Array]", K = "[object Int32Array]", Y = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", z = "[object Uint16Array]", D = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, L = /^\[object .+?Constructor\]$/, q = /^(?:0|[1-9]\d*)$/, H = {};
  H[j] = H[ee] = H[U] = H[G] = H[K] = H[Y] = H[oe] = H[z] = H[D] = !0, H[s] = H[l] = H[R] = H[c] = H[M] = H[d] = H[f] = H[p] = H[y] = H[S] = H[h] = H[w] = H[k] = H[E] = H[$] = !1;
  var he = typeof kn == "object" && kn && kn.Object === Object && kn, Me = typeof self == "object" && self && self.Object === Object && self, ce = he || Me || Function("return this")(), be = t && !t.nodeType && t, Te = be && !0 && e && !e.nodeType && e, Oe = Te && Te.exports === be, Xe = Oe && he.process, Qe = function() {
    try {
      var x = Te && Te.require && Te.require("util").types;
      return x || Xe && Xe.binding && Xe.binding("util");
    } catch {
    }
  }(), Dr = Qe && Qe.isTypedArray;
  function jr(x, P, A) {
    switch (A.length) {
      case 0:
        return x.call(P);
      case 1:
        return x.call(P, A[0]);
      case 2:
        return x.call(P, A[0], A[1]);
      case 3:
        return x.call(P, A[0], A[1], A[2]);
    }
    return x.apply(P, A);
  }
  function Gi(x, P) {
    for (var A = -1, I = Array(x); ++A < x; )
      I[A] = P(A);
    return I;
  }
  function ne(x) {
    return function(P) {
      return x(P);
    };
  }
  function it(x, P) {
    return x == null ? void 0 : x[P];
  }
  function De(x, P) {
    return function(A) {
      return x(P(A));
    };
  }
  var At = Array.prototype, cn = Function.prototype, at = Object.prototype, vr = ce["__core-js_shared__"], dn = cn.toString, Ht = at.hasOwnProperty, Mo = function() {
    var x = /[^.]+$/.exec(vr && vr.keys && vr.keys.IE_PROTO || "");
    return x ? "Symbol(src)_1." + x : "";
  }(), Ki = at.toString, qs = dn.call(Object), Xs = RegExp(
    "^" + dn.call(Ht).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Gn = Oe ? ce.Buffer : void 0, hv = ce.Symbol, mv = ce.Uint8Array, vv = Gn ? Gn.allocUnsafe : void 0, gv = De(Object.getPrototypeOf, Object), yv = Object.create, WC = at.propertyIsEnumerable, HC = At.splice, Kn = hv ? hv.toStringTag : void 0, Qs = function() {
    try {
      var x = id(Object, "defineProperty");
      return x({}, "", {}), x;
    } catch {
    }
  }(), UC = Gn ? Gn.isBuffer : void 0, bv = Math.max, GC = Date.now, xv = id(ce, "Map"), Yi = id(Object, "create"), KC = /* @__PURE__ */ function() {
    function x() {
    }
    return function(P) {
      if (!qn(P))
        return {};
      if (yv)
        return yv(P);
      x.prototype = P;
      var A = new x();
      return x.prototype = void 0, A;
    };
  }();
  function Yn(x) {
    var P = -1, A = x == null ? 0 : x.length;
    for (this.clear(); ++P < A; ) {
      var I = x[P];
      this.set(I[0], I[1]);
    }
  }
  function YC() {
    this.__data__ = Yi ? Yi(null) : {}, this.size = 0;
  }
  function qC(x) {
    var P = this.has(x) && delete this.__data__[x];
    return this.size -= P ? 1 : 0, P;
  }
  function XC(x) {
    var P = this.__data__;
    if (Yi) {
      var A = P[x];
      return A === n ? void 0 : A;
    }
    return Ht.call(P, x) ? P[x] : void 0;
  }
  function QC(x) {
    var P = this.__data__;
    return Yi ? P[x] !== void 0 : Ht.call(P, x);
  }
  function ZC(x, P) {
    var A = this.__data__;
    return this.size += this.has(x) ? 0 : 1, A[x] = Yi && P === void 0 ? n : P, this;
  }
  Yn.prototype.clear = YC, Yn.prototype.delete = qC, Yn.prototype.get = XC, Yn.prototype.has = QC, Yn.prototype.set = ZC;
  function Lr(x) {
    var P = -1, A = x == null ? 0 : x.length;
    for (this.clear(); ++P < A; ) {
      var I = x[P];
      this.set(I[0], I[1]);
    }
  }
  function JC() {
    this.__data__ = [], this.size = 0;
  }
  function e2(x) {
    var P = this.__data__, A = Zs(P, x);
    if (A < 0)
      return !1;
    var I = P.length - 1;
    return A == I ? P.pop() : HC.call(P, A, 1), --this.size, !0;
  }
  function t2(x) {
    var P = this.__data__, A = Zs(P, x);
    return A < 0 ? void 0 : P[A][1];
  }
  function r2(x) {
    return Zs(this.__data__, x) > -1;
  }
  function n2(x, P) {
    var A = this.__data__, I = Zs(A, x);
    return I < 0 ? (++this.size, A.push([x, P])) : A[I][1] = P, this;
  }
  Lr.prototype.clear = JC, Lr.prototype.delete = e2, Lr.prototype.get = t2, Lr.prototype.has = r2, Lr.prototype.set = n2;
  function Oo(x) {
    var P = -1, A = x == null ? 0 : x.length;
    for (this.clear(); ++P < A; ) {
      var I = x[P];
      this.set(I[0], I[1]);
    }
  }
  function o2() {
    this.size = 0, this.__data__ = {
      hash: new Yn(),
      map: new (xv || Lr)(),
      string: new Yn()
    };
  }
  function i2(x) {
    var P = el(this, x).delete(x);
    return this.size -= P ? 1 : 0, P;
  }
  function a2(x) {
    return el(this, x).get(x);
  }
  function s2(x) {
    return el(this, x).has(x);
  }
  function l2(x, P) {
    var A = el(this, x), I = A.size;
    return A.set(x, P), this.size += A.size == I ? 0 : 1, this;
  }
  Oo.prototype.clear = o2, Oo.prototype.delete = i2, Oo.prototype.get = a2, Oo.prototype.has = s2, Oo.prototype.set = l2;
  function zo(x) {
    var P = this.__data__ = new Lr(x);
    this.size = P.size;
  }
  function u2() {
    this.__data__ = new Lr(), this.size = 0;
  }
  function c2(x) {
    var P = this.__data__, A = P.delete(x);
    return this.size = P.size, A;
  }
  function d2(x) {
    return this.__data__.get(x);
  }
  function f2(x) {
    return this.__data__.has(x);
  }
  function p2(x, P) {
    var A = this.__data__;
    if (A instanceof Lr) {
      var I = A.__data__;
      if (!xv || I.length < r - 1)
        return I.push([x, P]), this.size = ++A.size, this;
      A = this.__data__ = new Oo(I);
    }
    return A.set(x, P), this.size = A.size, this;
  }
  zo.prototype.clear = u2, zo.prototype.delete = c2, zo.prototype.get = d2, zo.prototype.has = f2, zo.prototype.set = p2;
  function h2(x, P) {
    var A = ld(x), I = !A && sd(x), J = !A && !I && _v(x), pe = !A && !I && !J && Tv(x), Ce = A || I || J || pe, Q = Ce ? Gi(x.length, String) : [], _e = Q.length;
    for (var Ut in x)
      (P || Ht.call(x, Ut)) && !(Ce && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ut == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      J && (Ut == "offset" || Ut == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      pe && (Ut == "buffer" || Ut == "byteLength" || Ut == "byteOffset") || // Skip index properties.
      kv(Ut, _e))) && Q.push(Ut);
    return Q;
  }
  function nd(x, P, A) {
    (A !== void 0 && !tl(x[P], A) || A === void 0 && !(P in x)) && od(x, P, A);
  }
  function m2(x, P, A) {
    var I = x[P];
    (!(Ht.call(x, P) && tl(I, A)) || A === void 0 && !(P in x)) && od(x, P, A);
  }
  function Zs(x, P) {
    for (var A = x.length; A--; )
      if (tl(x[A][0], P))
        return A;
    return -1;
  }
  function od(x, P, A) {
    P == "__proto__" && Qs ? Qs(x, P, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : x[P] = A;
  }
  var v2 = $2();
  function Js(x) {
    return x == null ? x === void 0 ? _ : m : Kn && Kn in Object(x) ? A2(x) : F2(x);
  }
  function Sv(x) {
    return qi(x) && Js(x) == s;
  }
  function g2(x) {
    if (!qn(x) || z2(x))
      return !1;
    var P = cd(x) ? Xs : L;
    return P.test(B2(x));
  }
  function y2(x) {
    return qi(x) && Pv(x.length) && !!H[Js(x)];
  }
  function b2(x) {
    if (!qn(x))
      return I2(x);
    var P = Cv(x), A = [];
    for (var I in x)
      I == "constructor" && (P || !Ht.call(x, I)) || A.push(I);
    return A;
  }
  function wv(x, P, A, I, J) {
    x !== P && v2(P, function(pe, Ce) {
      if (J || (J = new zo()), qn(pe))
        x2(x, P, Ce, A, wv, I, J);
      else {
        var Q = I ? I(ad(x, Ce), pe, Ce + "", x, P, J) : void 0;
        Q === void 0 && (Q = pe), nd(x, Ce, Q);
      }
    }, Ev);
  }
  function x2(x, P, A, I, J, pe, Ce) {
    var Q = ad(x, A), _e = ad(P, A), Ut = Ce.get(_e);
    if (Ut) {
      nd(x, A, Ut);
      return;
    }
    var Rt = pe ? pe(Q, _e, A + "", x, P, Ce) : void 0, Xi = Rt === void 0;
    if (Xi) {
      var dd = ld(_e), fd = !dd && _v(_e), Av = !dd && !fd && Tv(_e);
      Rt = _e, dd || fd || Av ? ld(Q) ? Rt = Q : N2(Q) ? Rt = P2(Q) : fd ? (Xi = !1, Rt = k2(_e, !0)) : Av ? (Xi = !1, Rt = _2(_e, !0)) : Rt = [] : V2(_e) || sd(_e) ? (Rt = Q, sd(Q) ? Rt = W2(Q) : (!qn(Q) || cd(Q)) && (Rt = R2(_e))) : Xi = !1;
    }
    Xi && (Ce.set(_e, Rt), J(Rt, _e, I, pe, Ce), Ce.delete(_e)), nd(x, A, Rt);
  }
  function S2(x, P) {
    return j2(D2(x, P, $v), x + "");
  }
  var w2 = Qs ? function(x, P) {
    return Qs(x, "toString", {
      configurable: !0,
      enumerable: !1,
      value: U2(P),
      writable: !0
    });
  } : $v;
  function k2(x, P) {
    if (P)
      return x.slice();
    var A = x.length, I = vv ? vv(A) : new x.constructor(A);
    return x.copy(I), I;
  }
  function C2(x) {
    var P = new x.constructor(x.byteLength);
    return new mv(P).set(new mv(x)), P;
  }
  function _2(x, P) {
    var A = P ? C2(x.buffer) : x.buffer;
    return new x.constructor(A, x.byteOffset, x.length);
  }
  function P2(x, P) {
    var A = -1, I = x.length;
    for (P || (P = Array(I)); ++A < I; )
      P[A] = x[A];
    return P;
  }
  function T2(x, P, A, I) {
    var J = !A;
    A || (A = {});
    for (var pe = -1, Ce = P.length; ++pe < Ce; ) {
      var Q = P[pe], _e = I ? I(A[Q], x[Q], Q, A, x) : void 0;
      _e === void 0 && (_e = x[Q]), J ? od(A, Q, _e) : m2(A, Q, _e);
    }
    return A;
  }
  function E2(x) {
    return S2(function(P, A) {
      var I = -1, J = A.length, pe = J > 1 ? A[J - 1] : void 0, Ce = J > 2 ? A[2] : void 0;
      for (pe = x.length > 3 && typeof pe == "function" ? (J--, pe) : void 0, Ce && M2(A[0], A[1], Ce) && (pe = J < 3 ? void 0 : pe, J = 1), P = Object(P); ++I < J; ) {
        var Q = A[I];
        Q && x(P, Q, I, pe);
      }
      return P;
    });
  }
  function $2(x) {
    return function(P, A, I) {
      for (var J = -1, pe = Object(P), Ce = I(P), Q = Ce.length; Q--; ) {
        var _e = Ce[x ? Q : ++J];
        if (A(pe[_e], _e, pe) === !1)
          break;
      }
      return P;
    };
  }
  function el(x, P) {
    var A = x.__data__;
    return O2(P) ? A[typeof P == "string" ? "string" : "hash"] : A.map;
  }
  function id(x, P) {
    var A = it(x, P);
    return g2(A) ? A : void 0;
  }
  function A2(x) {
    var P = Ht.call(x, Kn), A = x[Kn];
    try {
      x[Kn] = void 0;
      var I = !0;
    } catch {
    }
    var J = Ki.call(x);
    return I && (P ? x[Kn] = A : delete x[Kn]), J;
  }
  function R2(x) {
    return typeof x.constructor == "function" && !Cv(x) ? KC(gv(x)) : {};
  }
  function kv(x, P) {
    var A = typeof x;
    return P = P ?? a, !!P && (A == "number" || A != "symbol" && q.test(x)) && x > -1 && x % 1 == 0 && x < P;
  }
  function M2(x, P, A) {
    if (!qn(A))
      return !1;
    var I = typeof P;
    return (I == "number" ? ud(A) && kv(P, A.length) : I == "string" && P in A) ? tl(A[P], x) : !1;
  }
  function O2(x) {
    var P = typeof x;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? x !== "__proto__" : x === null;
  }
  function z2(x) {
    return !!Mo && Mo in x;
  }
  function Cv(x) {
    var P = x && x.constructor, A = typeof P == "function" && P.prototype || at;
    return x === A;
  }
  function I2(x) {
    var P = [];
    if (x != null)
      for (var A in Object(x))
        P.push(A);
    return P;
  }
  function F2(x) {
    return Ki.call(x);
  }
  function D2(x, P, A) {
    return P = bv(P === void 0 ? x.length - 1 : P, 0), function() {
      for (var I = arguments, J = -1, pe = bv(I.length - P, 0), Ce = Array(pe); ++J < pe; )
        Ce[J] = I[P + J];
      J = -1;
      for (var Q = Array(P + 1); ++J < P; )
        Q[J] = I[J];
      return Q[P] = A(Ce), jr(x, this, Q);
    };
  }
  function ad(x, P) {
    if (!(P === "constructor" && typeof x[P] == "function") && P != "__proto__")
      return x[P];
  }
  var j2 = L2(w2);
  function L2(x) {
    var P = 0, A = 0;
    return function() {
      var I = GC(), J = i - (I - A);
      if (A = I, J > 0) {
        if (++P >= o)
          return arguments[0];
      } else
        P = 0;
      return x.apply(void 0, arguments);
    };
  }
  function B2(x) {
    if (x != null) {
      try {
        return dn.call(x);
      } catch {
      }
      try {
        return x + "";
      } catch {
      }
    }
    return "";
  }
  function tl(x, P) {
    return x === P || x !== x && P !== P;
  }
  var sd = Sv(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Sv : function(x) {
    return qi(x) && Ht.call(x, "callee") && !WC.call(x, "callee");
  }, ld = Array.isArray;
  function ud(x) {
    return x != null && Pv(x.length) && !cd(x);
  }
  function N2(x) {
    return qi(x) && ud(x);
  }
  var _v = UC || G2;
  function cd(x) {
    if (!qn(x))
      return !1;
    var P = Js(x);
    return P == p || P == g || P == u || P == v;
  }
  function Pv(x) {
    return typeof x == "number" && x > -1 && x % 1 == 0 && x <= a;
  }
  function qn(x) {
    var P = typeof x;
    return x != null && (P == "object" || P == "function");
  }
  function qi(x) {
    return x != null && typeof x == "object";
  }
  function V2(x) {
    if (!qi(x) || Js(x) != h)
      return !1;
    var P = gv(x);
    if (P === null)
      return !0;
    var A = Ht.call(P, "constructor") && P.constructor;
    return typeof A == "function" && A instanceof A && dn.call(A) == qs;
  }
  var Tv = Dr ? ne(Dr) : y2;
  function W2(x) {
    return T2(x, Ev(x));
  }
  function Ev(x) {
    return ud(x) ? h2(x, !0) : b2(x);
  }
  var H2 = E2(function(x, P, A, I) {
    wv(x, P, A, I);
  });
  function U2(x) {
    return function() {
      return x;
    };
  }
  function $v(x) {
    return x;
  }
  function G2() {
    return !1;
  }
  e.exports = H2;
})(Nu, Nu.exports);
var t$ = Nu.exports;
const Jt = /* @__PURE__ */ Ps(t$);
var r$ = (e) => /!(important)?$/.test(e), Jg = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, n$ = (e, t) => (r) => {
  const n = String(t), o = r$(n), i = Jg(n), a = e ? `${e}.${i}` : i;
  let s = tr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = Jg(s), o ? `${s} !important` : s;
};
function cm(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = n$(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Sl = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Gt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = cm({
      scale: e,
      transform: t
    }), n;
  };
}
var o$ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function i$(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: o$(t),
    transform: r ? cm({
      scale: r,
      compose: n
    }) : n
  };
}
var hS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function a$() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...hS
  ].join(" ");
}
function s$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...hS
  ].join(" ");
}
var l$ = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, u$ = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function c$(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var d$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Cp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, f$ = new Set(Object.values(Cp)), _p = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), p$ = (e) => e.trim();
function h$(e, t) {
  if (e == null || _p.has(e))
    return e;
  if (!(Pp(e) || _p.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(p$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Cp ? Cp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (f$.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Pp(y) ? y : y && y.split(" "), m = `colors.${g}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return S ? [
      h,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Pp = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), m$ = (e, t) => h$(e, t ?? {});
function v$(e) {
  return /^var\(--.+\)$/.test(e);
}
var g$ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, yr = (e) => (t) => `${e}(${t})`, Z = {
  filter(e) {
    return e !== "auto" ? e : l$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : u$;
  },
  ring(e) {
    return c$(Z.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? a$() : e === "auto-gpu" ? s$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = g$(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (v$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: m$,
  blur: yr("blur"),
  opacity: yr("opacity"),
  brightness: yr("brightness"),
  contrast: yr("contrast"),
  dropShadow: yr("drop-shadow"),
  grayscale: yr("grayscale"),
  hueRotate: (e) => yr("hue-rotate")(Z.degree(e)),
  invert: yr("invert"),
  saturate: yr("saturate"),
  sepia: yr("sepia"),
  bgImage(e) {
    return e == null || Pp(e) || _p.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = d$[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, T = {
  borderWidths: Gt("borderWidths"),
  borderStyles: Gt("borderStyles"),
  colors: Gt("colors"),
  borders: Gt("borders"),
  gradients: Gt("gradients", Z.gradient),
  radii: Gt("radii", Z.px),
  space: Gt("space", Sl(Z.vh, Z.px)),
  spaceT: Gt("space", Sl(Z.vh, Z.px)),
  degreeT(e) {
    return { property: e, transform: Z.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: cm({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Gt("sizes", Sl(Z.vh, Z.px)),
  sizesT: Gt("sizes", Sl(Z.vh, Z.fraction)),
  shadows: Gt("shadows"),
  logical: i$,
  blur: Gt("blur", Z.blur)
}, eu = {
  background: T.colors("background"),
  backgroundColor: T.colors("backgroundColor"),
  backgroundImage: T.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Z.bgClip },
  bgSize: T.prop("backgroundSize"),
  bgPosition: T.prop("backgroundPosition"),
  bg: T.colors("background"),
  bgColor: T.colors("backgroundColor"),
  bgPos: T.prop("backgroundPosition"),
  bgRepeat: T.prop("backgroundRepeat"),
  bgAttachment: T.prop("backgroundAttachment"),
  bgGradient: T.gradients("backgroundImage"),
  bgClip: { transform: Z.bgClip }
};
Object.assign(eu, {
  bgImage: eu.backgroundImage,
  bgImg: eu.backgroundImage
});
var ie = {
  border: T.borders("border"),
  borderWidth: T.borderWidths("borderWidth"),
  borderStyle: T.borderStyles("borderStyle"),
  borderColor: T.colors("borderColor"),
  borderRadius: T.radii("borderRadius"),
  borderTop: T.borders("borderTop"),
  borderBlockStart: T.borders("borderBlockStart"),
  borderTopLeftRadius: T.radii("borderTopLeftRadius"),
  borderStartStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: T.radii("borderTopRightRadius"),
  borderStartEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: T.borders("borderRight"),
  borderInlineEnd: T.borders("borderInlineEnd"),
  borderBottom: T.borders("borderBottom"),
  borderBlockEnd: T.borders("borderBlockEnd"),
  borderBottomLeftRadius: T.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: T.radii("borderBottomRightRadius"),
  borderLeft: T.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: T.borders(["borderLeft", "borderRight"]),
  borderInline: T.borders("borderInline"),
  borderY: T.borders(["borderTop", "borderBottom"]),
  borderBlock: T.borders("borderBlock"),
  borderTopWidth: T.borderWidths("borderTopWidth"),
  borderBlockStartWidth: T.borderWidths("borderBlockStartWidth"),
  borderTopColor: T.colors("borderTopColor"),
  borderBlockStartColor: T.colors("borderBlockStartColor"),
  borderTopStyle: T.borderStyles("borderTopStyle"),
  borderBlockStartStyle: T.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: T.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: T.borderWidths("borderBlockEndWidth"),
  borderBottomColor: T.colors("borderBottomColor"),
  borderBlockEndColor: T.colors("borderBlockEndColor"),
  borderBottomStyle: T.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: T.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: T.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: T.borderWidths("borderInlineStartWidth"),
  borderLeftColor: T.colors("borderLeftColor"),
  borderInlineStartColor: T.colors("borderInlineStartColor"),
  borderLeftStyle: T.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: T.borderStyles("borderInlineStartStyle"),
  borderRightWidth: T.borderWidths("borderRightWidth"),
  borderInlineEndWidth: T.borderWidths("borderInlineEndWidth"),
  borderRightColor: T.colors("borderRightColor"),
  borderInlineEndColor: T.colors("borderInlineEndColor"),
  borderRightStyle: T.borderStyles("borderRightStyle"),
  borderInlineEndStyle: T.borderStyles("borderInlineEndStyle"),
  borderTopRadius: T.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: T.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: T.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: T.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ie, {
  rounded: ie.borderRadius,
  roundedTop: ie.borderTopRadius,
  roundedTopLeft: ie.borderTopLeftRadius,
  roundedTopRight: ie.borderTopRightRadius,
  roundedTopStart: ie.borderStartStartRadius,
  roundedTopEnd: ie.borderStartEndRadius,
  roundedBottom: ie.borderBottomRadius,
  roundedBottomLeft: ie.borderBottomLeftRadius,
  roundedBottomRight: ie.borderBottomRightRadius,
  roundedBottomStart: ie.borderEndStartRadius,
  roundedBottomEnd: ie.borderEndEndRadius,
  roundedLeft: ie.borderLeftRadius,
  roundedRight: ie.borderRightRadius,
  roundedStart: ie.borderInlineStartRadius,
  roundedEnd: ie.borderInlineEndRadius,
  borderStart: ie.borderInlineStart,
  borderEnd: ie.borderInlineEnd,
  borderTopStartRadius: ie.borderStartStartRadius,
  borderTopEndRadius: ie.borderStartEndRadius,
  borderBottomStartRadius: ie.borderEndStartRadius,
  borderBottomEndRadius: ie.borderEndEndRadius,
  borderStartRadius: ie.borderInlineStartRadius,
  borderEndRadius: ie.borderInlineEndRadius,
  borderStartWidth: ie.borderInlineStartWidth,
  borderEndWidth: ie.borderInlineEndWidth,
  borderStartColor: ie.borderInlineStartColor,
  borderEndColor: ie.borderInlineEndColor,
  borderStartStyle: ie.borderInlineStartStyle,
  borderEndStyle: ie.borderInlineEndStyle
});
var y$ = {
  color: T.colors("color"),
  textColor: T.colors("color"),
  fill: T.colors("fill"),
  stroke: T.colors("stroke")
}, Tp = {
  boxShadow: T.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: T.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: T.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Tp, {
  shadow: Tp.boxShadow
});
var b$ = {
  filter: { transform: Z.filter },
  blur: T.blur("--chakra-blur"),
  brightness: T.propT("--chakra-brightness", Z.brightness),
  contrast: T.propT("--chakra-contrast", Z.contrast),
  hueRotate: T.propT("--chakra-hue-rotate", Z.hueRotate),
  invert: T.propT("--chakra-invert", Z.invert),
  saturate: T.propT("--chakra-saturate", Z.saturate),
  dropShadow: T.propT("--chakra-drop-shadow", Z.dropShadow),
  backdropFilter: { transform: Z.backdropFilter },
  backdropBlur: T.blur("--chakra-backdrop-blur"),
  backdropBrightness: T.propT(
    "--chakra-backdrop-brightness",
    Z.brightness
  ),
  backdropContrast: T.propT("--chakra-backdrop-contrast", Z.contrast),
  backdropHueRotate: T.propT(
    "--chakra-backdrop-hue-rotate",
    Z.hueRotate
  ),
  backdropInvert: T.propT("--chakra-backdrop-invert", Z.invert),
  backdropSaturate: T.propT("--chakra-backdrop-saturate", Z.saturate)
}, Vu = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Z.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: T.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: T.space("gap"),
  rowGap: T.space("rowGap"),
  columnGap: T.space("columnGap")
};
Object.assign(Vu, {
  flexDir: Vu.flexDirection
});
var mS = {
  gridGap: T.space("gridGap"),
  gridColumnGap: T.space("gridColumnGap"),
  gridRowGap: T.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, x$ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Z.outline },
  outlineOffset: !0,
  outlineColor: T.colors("outlineColor")
}, Yt = {
  width: T.sizesT("width"),
  inlineSize: T.sizesT("inlineSize"),
  height: T.sizes("height"),
  blockSize: T.sizes("blockSize"),
  boxSize: T.sizes(["width", "height"]),
  minWidth: T.sizes("minWidth"),
  minInlineSize: T.sizes("minInlineSize"),
  minHeight: T.sizes("minHeight"),
  minBlockSize: T.sizes("minBlockSize"),
  maxWidth: T.sizes("maxWidth"),
  maxInlineSize: T.sizes("maxInlineSize"),
  maxHeight: T.sizes("maxHeight"),
  maxBlockSize: T.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: T.propT("float", Z.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Yt, {
  w: Yt.width,
  h: Yt.height,
  minW: Yt.minWidth,
  maxW: Yt.maxWidth,
  minH: Yt.minHeight,
  maxH: Yt.maxHeight,
  overscroll: Yt.overscrollBehavior,
  overscrollX: Yt.overscrollBehaviorX,
  overscrollY: Yt.overscrollBehaviorY
});
var S$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: T.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: T.prop("listStyleImage")
};
function w$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var k$ = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, C$ = k$(w$), _$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, P$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Vd = (e, t, r) => {
  const n = {}, o = C$(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, T$ = {
  srOnly: {
    transform(e) {
      return e === !0 ? _$ : e === "focusable" ? P$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Vd(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Vd(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Vd(t, e, r)
  }
}, Oa = {
  position: !0,
  pos: T.prop("position"),
  zIndex: T.prop("zIndex", "zIndices"),
  inset: T.spaceT("inset"),
  insetX: T.spaceT(["left", "right"]),
  insetInline: T.spaceT("insetInline"),
  insetY: T.spaceT(["top", "bottom"]),
  insetBlock: T.spaceT("insetBlock"),
  top: T.spaceT("top"),
  insetBlockStart: T.spaceT("insetBlockStart"),
  bottom: T.spaceT("bottom"),
  insetBlockEnd: T.spaceT("insetBlockEnd"),
  left: T.spaceT("left"),
  insetInlineStart: T.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: T.spaceT("right"),
  insetInlineEnd: T.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Oa, {
  insetStart: Oa.insetInlineStart,
  insetEnd: Oa.insetInlineEnd
});
var E$ = {
  ring: { transform: Z.ring },
  ringColor: T.colors("--chakra-ring-color"),
  ringOffset: T.prop("--chakra-ring-offset-width"),
  ringOffsetColor: T.colors("--chakra-ring-offset-color"),
  ringInset: T.prop("--chakra-ring-inset")
}, Se = {
  margin: T.spaceT("margin"),
  marginTop: T.spaceT("marginTop"),
  marginBlockStart: T.spaceT("marginBlockStart"),
  marginRight: T.spaceT("marginRight"),
  marginInlineEnd: T.spaceT("marginInlineEnd"),
  marginBottom: T.spaceT("marginBottom"),
  marginBlockEnd: T.spaceT("marginBlockEnd"),
  marginLeft: T.spaceT("marginLeft"),
  marginInlineStart: T.spaceT("marginInlineStart"),
  marginX: T.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: T.spaceT("marginInline"),
  marginY: T.spaceT(["marginTop", "marginBottom"]),
  marginBlock: T.spaceT("marginBlock"),
  padding: T.space("padding"),
  paddingTop: T.space("paddingTop"),
  paddingBlockStart: T.space("paddingBlockStart"),
  paddingRight: T.space("paddingRight"),
  paddingBottom: T.space("paddingBottom"),
  paddingBlockEnd: T.space("paddingBlockEnd"),
  paddingLeft: T.space("paddingLeft"),
  paddingInlineStart: T.space("paddingInlineStart"),
  paddingInlineEnd: T.space("paddingInlineEnd"),
  paddingX: T.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: T.space("paddingInline"),
  paddingY: T.space(["paddingTop", "paddingBottom"]),
  paddingBlock: T.space("paddingBlock")
};
Object.assign(Se, {
  m: Se.margin,
  mt: Se.marginTop,
  mr: Se.marginRight,
  me: Se.marginInlineEnd,
  marginEnd: Se.marginInlineEnd,
  mb: Se.marginBottom,
  ml: Se.marginLeft,
  ms: Se.marginInlineStart,
  marginStart: Se.marginInlineStart,
  mx: Se.marginX,
  my: Se.marginY,
  p: Se.padding,
  pt: Se.paddingTop,
  py: Se.paddingY,
  px: Se.paddingX,
  pb: Se.paddingBottom,
  pl: Se.paddingLeft,
  ps: Se.paddingInlineStart,
  paddingStart: Se.paddingInlineStart,
  pr: Se.paddingRight,
  pe: Se.paddingInlineEnd,
  paddingEnd: Se.paddingInlineEnd
});
var $$ = {
  textDecorationColor: T.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: T.shadows("textShadow")
}, A$ = {
  clipPath: !0,
  transform: T.propT("transform", Z.transform),
  transformOrigin: !0,
  translateX: T.spaceT("--chakra-translate-x"),
  translateY: T.spaceT("--chakra-translate-y"),
  skewX: T.degreeT("--chakra-skew-x"),
  skewY: T.degreeT("--chakra-skew-y"),
  scaleX: T.prop("--chakra-scale-x"),
  scaleY: T.prop("--chakra-scale-y"),
  scale: T.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: T.degreeT("--chakra-rotate")
}, R$ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: T.prop("transitionDuration", "transition.duration"),
  transitionProperty: T.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: T.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, M$ = {
  fontFamily: T.prop("fontFamily", "fonts"),
  fontSize: T.prop("fontSize", "fontSizes", Z.px),
  fontWeight: T.prop("fontWeight", "fontWeights"),
  lineHeight: T.prop("lineHeight", "lineHeights"),
  letterSpacing: T.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, O$ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: T.spaceT("scrollMargin"),
  scrollMarginTop: T.spaceT("scrollMarginTop"),
  scrollMarginBottom: T.spaceT("scrollMarginBottom"),
  scrollMarginLeft: T.spaceT("scrollMarginLeft"),
  scrollMarginRight: T.spaceT("scrollMarginRight"),
  scrollMarginX: T.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: T.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: T.spaceT("scrollPadding"),
  scrollPaddingTop: T.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: T.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: T.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: T.spaceT("scrollPaddingRight"),
  scrollPaddingX: T.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: T.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function vS(e) {
  return tr(e) && e.reference ? e.reference : String(e);
}
var Lc = (e, ...t) => t.map(vS).join(` ${e} `).replace(/calc/g, ""), e0 = (...e) => `calc(${Lc("+", ...e)})`, t0 = (...e) => `calc(${Lc("-", ...e)})`, Ep = (...e) => `calc(${Lc("*", ...e)})`, r0 = (...e) => `calc(${Lc("/", ...e)})`, n0 = (e) => {
  const t = vS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ep(t, -1);
}, no = Object.assign(
  (e) => ({
    add: (...t) => no(e0(e, ...t)),
    subtract: (...t) => no(t0(e, ...t)),
    multiply: (...t) => no(Ep(e, ...t)),
    divide: (...t) => no(r0(e, ...t)),
    negate: () => no(n0(e)),
    toString: () => e.toString()
  }),
  {
    add: e0,
    subtract: t0,
    multiply: Ep,
    divide: r0,
    negate: n0
  }
);
function z$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function I$(e) {
  const t = z$(e.toString());
  return D$(F$(t));
}
function F$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function D$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function j$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function L$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function B$(e, t = "") {
  return I$(`--${j$(e, t)}`);
}
function V(e, t, r) {
  const n = B$(e, r);
  return {
    variable: n,
    reference: L$(n, t)
  };
}
function N$(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = V(`${e}-${o}`, i);
      continue;
    }
    r[n] = V(`${e}-${n}`);
  }
  return r;
}
function V$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function W$(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function $p(e) {
  if (e == null)
    return e;
  const { unitless: t } = W$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var gS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, dm = (e) => Object.fromEntries(Object.entries(e).sort(gS));
function o0(e) {
  const t = dm(e);
  return Object.assign(Object.values(t), t);
}
function H$(e) {
  const t = Object.keys(dm(e));
  return new Set(t);
}
function i0(e) {
  var t;
  if (!e)
    return e;
  e = (t = $p(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function ga(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${$p(e)})`), t && r.push("and", `(max-width: ${$p(t)})`), r.join(" ");
}
function U$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = o0(e), n = Object.entries(e).sort(gS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? i0(d) : void 0, {
      _minW: i0(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: ga(null, d),
      minWQuery: ga(s),
      minMaxQuery: ga(s, d)
    };
  }), o = H$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: dm(e),
    asArray: o0(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => ga(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!tr(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; V$(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    }
  };
}
var Ze = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, pn = (e) => yS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Br = (e) => yS((t) => e(t, "~ &"), "[data-peer]", ".peer"), yS = (e, ...t) => t.map(e).join(", "), Bc = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: pn(Ze.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Br(Ze.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: pn(Ze.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Br(Ze.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: pn(Ze.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Br(Ze.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: pn(Ze.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Br(Ze.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: pn(Ze.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Br(Ze.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: pn(Ze.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Br(Ze.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: pn(Ze.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Br(Ze.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: pn(Ze.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Br(Ze.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Br(Ze.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, bS = Object.keys(
  Bc
);
function a0(e, t) {
  return V(String(e).replace(/\./g, "-"), void 0, t);
}
function G$(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = a0(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, S = no.negate(s), m = no.negate(u);
        n[y] = {
          value: S,
          var: l,
          varRef: m
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: u
      };
      continue;
    }
    const c = (f) => {
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: S } = a0(g, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = tr(s) ? s : { default: s };
    r = Jt(
      r,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, S;
          if (!g)
            return f;
          const m = c(`${g}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (S = (y = Bc) == null ? void 0 : y[p]) != null ? S : p;
          return f[h] = { [l]: m }, f;
        },
        {}
      )
    ), n[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function K$(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Y$(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function q$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function s0(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (q$(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (n != null && n(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var X$ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function Q$(e) {
  return Y$(e, X$);
}
function Z$(e) {
  return e.semanticTokens;
}
function J$(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var eA = (e) => bS.includes(e) || e === "default";
function tA({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return s0(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), s0(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(eA)
    }
  ), r;
}
function rA(e) {
  var t;
  const r = J$(e), n = Q$(r), o = Z$(r), i = tA({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = G$(i, { cssVarPrefix: a });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: U$(r.breakpoints)
  }), r;
}
var fm = Jt(
  {},
  eu,
  ie,
  y$,
  Vu,
  Yt,
  b$,
  E$,
  x$,
  mS,
  T$,
  Oa,
  Tp,
  Se,
  O$,
  M$,
  $$,
  A$,
  S$,
  R$
);
Object.assign({}, Se, Yt, Vu, mS, Oa);
var nA = [...Object.keys(fm), ...bS], oA = { ...fm, ...Bc }, iA = (e) => e in oA, aA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Kr(e[a], t);
    if (s == null)
      continue;
    if (s = tr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let u = 0; u < l; u += 1) {
      const c = o == null ? void 0 : o[u];
      if (!c) {
        i[a] = s[u];
        continue;
      }
      i[c] = i[c] || {}, s[u] != null && (i[c][a] = s[u]);
    }
  }
  return i;
};
function sA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function lA(e) {
  return /^var\(--.+\)$/.test(e);
}
var uA = (e, t) => e.startsWith("--") && typeof t == "string" && !lA(t), cA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = sA(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function dA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Kr(i, n), d = aA(c)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = Kr(g, n);
      p in r && (p = r[p]), uA(p, y) && (y = cA(n, y));
      let S = t[p];
      if (S === !0 && (S = { property: p }), tr(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = Jt(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let m = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, y, n, c)) != null ? u : y;
      m = S != null && S.processResult ? o(m, !0) : m;
      const h = Kr(S == null ? void 0 : S.property, n);
      if (!a && (S != null && S.static)) {
        const v = Kr(S.static, n);
        f = Jt({}, f, v);
      }
      if (h && Array.isArray(h)) {
        for (const v of h)
          f[v] = m;
        continue;
      }
      if (h) {
        h === "&" && tr(m) ? f = Jt({}, f, m) : f[h] = m;
        continue;
      }
      if (tr(m)) {
        f = Jt({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var xS = (e) => (t) => dA({
  theme: t,
  pseudos: Bc,
  configs: fm
})(e);
function ye(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function fA(e, t) {
  if (Array.isArray(e))
    return e;
  if (tr(e))
    return t(e);
  if (e != null)
    return [e];
}
function pA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function hA(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = fA(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], S = t.details[pA(c, g)], m = ga(y.minW, S == null ? void 0 : S._minW), h = Kr((s = n[o]) == null ? void 0 : s[c[g]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((v) => {
            Jt(u, {
              [v]: f ? h[v] : { [m]: h[v] }
            });
          });
          continue;
        }
        if (!p) {
          f ? Jt(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function mA(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = hA(i);
    return Jt(
      {},
      Kr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Wn(e) {
  return K$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var vA = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function gA(e) {
  return tr(e) ? vA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var yA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, bA = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, xA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, SA = {
  property: yA,
  easing: bA,
  duration: xA
}, wA = SA, kA = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, CA = kA, _A = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, PA = _A, TA = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, EA = TA, $A = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, AA = $A, RA = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, MA = RA, OA = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, zA = OA, IA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, FA = IA, DA = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, SS = DA, wS = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, jA = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, LA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, BA = {
  ...wS,
  ...jA,
  container: LA
}, kS = BA, NA = {
  breakpoints: EA,
  zIndices: CA,
  radii: MA,
  blur: FA,
  colors: AA,
  ...SS,
  sizes: kS,
  shadows: zA,
  space: wS,
  borders: PA,
  transition: wA
}, { defineMultiStyleConfig: VA, definePartsStyle: ya } = ye([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Wr = V("stepper-indicator-size"), ei = V("stepper-icon-size"), ti = V("stepper-title-font-size"), ba = V("stepper-description-font-size"), aa = V("stepper-accent-color"), WA = ya(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [aa.variable]: `colors.${e}.500`,
    _dark: {
      [aa.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ti.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ba.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ti.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: ei.reference,
    height: ei.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Wr.reference,
    height: Wr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: aa.reference
    },
    "&[data-status=complete]": {
      bg: aa.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: aa.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Wr.reference} - 8px)`,
      top: `calc(${Wr.reference} + 4px)`,
      insetStart: `calc(${Wr.reference} / 2 - 1px)`
    }
  }
})), HA = VA({
  baseStyle: WA,
  sizes: {
    xs: ya({
      stepper: {
        [Wr.variable]: "sizes.4",
        [ei.variable]: "sizes.3",
        [ti.variable]: "fontSizes.xs",
        [ba.variable]: "fontSizes.xs"
      }
    }),
    sm: ya({
      stepper: {
        [Wr.variable]: "sizes.6",
        [ei.variable]: "sizes.4",
        [ti.variable]: "fontSizes.sm",
        [ba.variable]: "fontSizes.xs"
      }
    }),
    md: ya({
      stepper: {
        [Wr.variable]: "sizes.8",
        [ei.variable]: "sizes.5",
        [ti.variable]: "fontSizes.md",
        [ba.variable]: "fontSizes.sm"
      }
    }),
    lg: ya({
      stepper: {
        [Wr.variable]: "sizes.10",
        [ei.variable]: "sizes.6",
        [ti.variable]: "fontSizes.lg",
        [ba.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function ue(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    n();
    for (const d of c)
      t[d] = l(d);
    return ue(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return ue(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => c
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var UA = ue("accordion").parts("root", "container", "button", "panel").extend("icon"), GA = ue("alert").parts("title", "description", "container").extend("icon", "spinner"), KA = ue("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), YA = ue("breadcrumb").parts("link", "item", "container").extend("separator");
ue("button").parts();
var qA = ue("checkbox").parts("control", "icon", "container").extend("label");
ue("progress").parts("track", "filledTrack").extend("label");
var XA = ue("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), QA = ue("editable").parts(
  "preview",
  "input",
  "textarea"
), ZA = ue("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), JA = ue("formError").parts("text", "icon"), e5 = ue("input").parts(
  "addon",
  "field",
  "element",
  "group"
), t5 = ue("list").parts("container", "item", "icon"), r5 = ue("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), n5 = ue("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), o5 = ue("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ue("pininput").parts("field");
var i5 = ue("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), a5 = ue("progress").parts(
  "label",
  "filledTrack",
  "track"
), s5 = ue("radio").parts(
  "container",
  "control",
  "label"
), l5 = ue("select").parts("field", "icon"), u5 = ue("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), c5 = ue("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), d5 = ue("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), f5 = ue("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), p5 = ue("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), h5 = ue("tag").parts(
  "container",
  "label",
  "closeButton"
), m5 = ue("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
ue("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function lo(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class v5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var xa = v5;
function pm(e) {
  if (typeof e != "string")
    throw new xa(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = C5.test(e) ? b5(e) : e;
  const r = x5.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(hs(s, 2), 16)), parseInt(hs(a[3] || "f", 2), 16) / 255];
  }
  const n = S5.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = w5.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = k5.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (lo(0, 100, s) !== s)
      throw new xa(e);
    if (lo(0, 100, l) !== l)
      throw new xa(e);
    return [..._5(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new xa(e);
}
function g5(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const l0 = (e) => parseInt(e.replace(/_/g, ""), 36), y5 = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = l0(t.substring(0, 3)), n = l0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function b5(e) {
  const t = e.toLowerCase().trim(), r = y5[g5(t)];
  if (!r)
    throw new xa(e);
  return `#${r}`;
}
const hs = (e, t) => Array.from(Array(t)).map(() => e).join(""), x5 = new RegExp(`^#${hs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), S5 = new RegExp(`^#${hs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), w5 = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${hs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), k5 = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, C5 = /^[a-z]+$/i, u0 = (e) => Math.round(e * 255), _5 = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(u0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(u0);
};
function P5(e, t, r, n) {
  return `rgba(${lo(0, 255, e).toFixed()}, ${lo(0, 255, t).toFixed()}, ${lo(0, 255, r).toFixed()}, ${parseFloat(lo(0, 1, n).toFixed(3))})`;
}
function T5(e, t) {
  const [r, n, o, i] = pm(e);
  return P5(r, n, o, i - t);
}
function E5(e) {
  const [t, r, n, o] = pm(e);
  let i = (a) => {
    const s = lo(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function $5(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var A5 = (e) => Object.keys(e).length === 0, mt = (e, t, r) => {
  const n = $5(e, `colors.${t}`, t);
  try {
    return E5(n), n;
  } catch {
    return r ?? "#000000";
  }
}, R5 = (e) => {
  const [t, r, n] = pm(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, M5 = (e) => (t) => {
  const r = mt(t, e);
  return R5(r) < 128 ? "dark" : "light";
}, O5 = (e) => (t) => M5(e)(t) === "dark", Oi = (e, t) => (r) => {
  const n = mt(r, e);
  return T5(n, 1 - t);
};
function c0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var z5 = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function I5(e) {
  const t = z5();
  return !e || A5(e) ? t : e.string && e.colors ? D5(e.string, e.colors) : e.string && !e.colors ? F5(e.string) : e.colors && !e.string ? j5(e.colors) : t;
}
function F5(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function D5(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function j5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function N(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function hm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function CS(e) {
  return tr(e) && e.reference ? e.reference : String(e);
}
var Nc = (e, ...t) => t.map(CS).join(` ${e} `).replace(/calc/g, ""), d0 = (...e) => `calc(${Nc("+", ...e)})`, f0 = (...e) => `calc(${Nc("-", ...e)})`, Ap = (...e) => `calc(${Nc("*", ...e)})`, p0 = (...e) => `calc(${Nc("/", ...e)})`, h0 = (e) => {
  const t = CS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ap(t, -1);
}, Hr = Object.assign(
  (e) => ({
    add: (...t) => Hr(d0(e, ...t)),
    subtract: (...t) => Hr(f0(e, ...t)),
    multiply: (...t) => Hr(Ap(e, ...t)),
    divide: (...t) => Hr(p0(e, ...t)),
    negate: () => Hr(h0(e)),
    toString: () => e.toString()
  }),
  {
    add: d0,
    subtract: f0,
    multiply: Ap,
    divide: p0,
    negate: h0
  }
);
function L5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function B5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function _S(e) {
  const t = B5(e.toString());
  return t.includes("\\.") ? e : L5(e) ? t.replace(".", "\\.") : e;
}
function N5(e, t = "") {
  return [t, _S(e)].filter(Boolean).join("-");
}
function V5(e, t) {
  return `var(${_S(e)}${t ? `, ${t}` : ""})`;
}
function W5(e, t = "") {
  return `--${N5(e, t)}`;
}
function Ue(e, t) {
  const r = W5(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: V5(r, H5(t == null ? void 0 : t.fallback))
  };
}
function H5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: U5, definePartsStyle: tu } = ye(d5.keys), za = Ue("switch-track-width"), ho = Ue("switch-track-height"), Wd = Ue("switch-track-diff"), G5 = Hr.subtract(za, ho), Rp = Ue("switch-thumb-x"), sa = Ue("switch-bg"), K5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [za.reference],
    height: [ho.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [sa.variable]: "colors.gray.300",
    _dark: {
      [sa.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [sa.variable]: `colors.${t}.500`,
      _dark: {
        [sa.variable]: `colors.${t}.200`
      }
    },
    bg: sa.reference
  };
}, Y5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [ho.reference],
  height: [ho.reference],
  _checked: {
    transform: `translateX(${Rp.reference})`
  }
}, q5 = tu((e) => ({
  container: {
    [Wd.variable]: G5,
    [Rp.variable]: Wd.reference,
    _rtl: {
      [Rp.variable]: Hr(Wd).negate().toString()
    }
  },
  track: K5(e),
  thumb: Y5
})), X5 = {
  sm: tu({
    container: {
      [za.variable]: "1.375rem",
      [ho.variable]: "sizes.3"
    }
  }),
  md: tu({
    container: {
      [za.variable]: "1.875rem",
      [ho.variable]: "sizes.4"
    }
  }),
  lg: tu({
    container: {
      [za.variable]: "2.875rem",
      [ho.variable]: "sizes.6"
    }
  })
}, Q5 = U5({
  baseStyle: q5,
  sizes: X5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Z5, definePartsStyle: yi } = ye(f5.keys), J5 = yi({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Wu = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, eR = yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Wu
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Wu
    },
    caption: {
      color: N("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), tR = yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Wu
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Wu
    },
    caption: {
      color: N("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: N(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: N(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), rR = {
  simple: eR,
  striped: tR,
  unstyled: {}
}, nR = {
  sm: yi({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: yi({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: yi({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, oR = Z5({
  baseStyle: J5,
  variants: rR,
  sizes: nR,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), St = V("tabs-color"), fr = V("tabs-bg"), wl = V("tabs-border-color"), { defineMultiStyleConfig: iR, definePartsStyle: Mr } = ye(p5.keys), aR = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, sR = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, lR = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, uR = {
  p: 4
}, cR = Mr((e) => ({
  root: aR(e),
  tab: sR(e),
  tablist: lR(e),
  tabpanel: uR
})), dR = {
  sm: Mr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Mr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Mr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, fR = Mr((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [St.variable]: `colors.${t}.600`,
        _dark: {
          [St.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [fr.variable]: "colors.gray.200",
        _dark: {
          [fr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: St.reference,
      bg: fr.reference
    }
  };
}), pR = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [wl.variable]: "transparent",
      _selected: {
        [St.variable]: `colors.${t}.600`,
        [wl.variable]: "colors.white",
        _dark: {
          [St.variable]: `colors.${t}.300`,
          [wl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: wl.reference
      },
      color: St.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), hR = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [fr.variable]: "colors.gray.50",
      _dark: {
        [fr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [fr.variable]: "colors.white",
        [St.variable]: `colors.${t}.600`,
        _dark: {
          [fr.variable]: "colors.gray.800",
          [St.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: St.reference,
      bg: fr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), mR = Mr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: mt(r, `${t}.700`),
        bg: mt(r, `${t}.100`)
      }
    }
  };
}), vR = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [St.variable]: "colors.gray.600",
      _dark: {
        [St.variable]: "inherit"
      },
      _selected: {
        [St.variable]: "colors.white",
        [fr.variable]: `colors.${t}.600`,
        _dark: {
          [St.variable]: "colors.gray.800",
          [fr.variable]: `colors.${t}.300`
        }
      },
      color: St.reference,
      bg: fr.reference
    }
  };
}), gR = Mr({}), yR = {
  line: fR,
  enclosed: pR,
  "enclosed-colored": hR,
  "soft-rounded": mR,
  "solid-rounded": vR,
  unstyled: gR
}, bR = iR({
  baseStyle: cR,
  sizes: dR,
  variants: yR,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Le = N$("badge", ["bg", "color", "shadow"]), xR = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, SR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Oi(`${t}.500`, 0.6)(r);
  return {
    [Le.bg.variable]: `colors.${t}.500`,
    [Le.color.variable]: "colors.white",
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, wR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Oi(`${t}.200`, 0.16)(r);
  return {
    [Le.bg.variable]: `colors.${t}.100`,
    [Le.color.variable]: `colors.${t}.800`,
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: `colors.${t}.200`
    }
  };
}, kR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Oi(`${t}.200`, 0.8)(r);
  return {
    [Le.color.variable]: `colors.${t}.500`,
    _dark: {
      [Le.color.variable]: n
    },
    [Le.shadow.variable]: `inset 0 0 0px 1px ${Le.color.reference}`
  };
}, CR = {
  solid: SR,
  subtle: wR,
  outline: kR
}, Ia = {
  baseStyle: xR,
  variants: CR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: _R, definePartsStyle: mo } = ye(h5.keys), m0 = V("tag-bg"), v0 = V("tag-color"), Hd = V("tag-shadow"), ru = V("tag-min-height"), nu = V("tag-min-width"), ou = V("tag-font-size"), iu = V("tag-padding-inline"), PR = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [v0.variable]: Le.color.reference,
  [m0.variable]: Le.bg.reference,
  [Hd.variable]: Le.shadow.reference,
  color: v0.reference,
  bg: m0.reference,
  boxShadow: Hd.reference,
  borderRadius: "md",
  minH: ru.reference,
  minW: nu.reference,
  fontSize: ou.reference,
  px: iu.reference,
  _focusVisible: {
    [Hd.variable]: "shadows.outline"
  }
}, TR = {
  lineHeight: 1.2,
  overflow: "visible"
}, ER = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, $R = mo({
  container: PR,
  label: TR,
  closeButton: ER
}), AR = {
  sm: mo({
    container: {
      [ru.variable]: "sizes.5",
      [nu.variable]: "sizes.5",
      [ou.variable]: "fontSizes.xs",
      [iu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: mo({
    container: {
      [ru.variable]: "sizes.6",
      [nu.variable]: "sizes.6",
      [ou.variable]: "fontSizes.sm",
      [iu.variable]: "space.2"
    }
  }),
  lg: mo({
    container: {
      [ru.variable]: "sizes.8",
      [nu.variable]: "sizes.8",
      [ou.variable]: "fontSizes.md",
      [iu.variable]: "space.3"
    }
  })
}, RR = {
  subtle: mo((e) => {
    var t;
    return {
      container: (t = Ia.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: mo((e) => {
    var t;
    return {
      container: (t = Ia.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: mo((e) => {
    var t;
    return {
      container: (t = Ia.variants) == null ? void 0 : t.outline(e)
    };
  })
}, MR = _R({
  variants: RR,
  baseStyle: $R,
  sizes: AR,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Yr, defineMultiStyleConfig: OR } = ye(e5.keys), ri = V("input-height"), ni = V("input-font-size"), oi = V("input-padding"), ii = V("input-border-radius"), zR = Yr({
  addon: {
    height: ri.reference,
    fontSize: ni.reference,
    px: oi.reference,
    borderRadius: ii.reference
  },
  field: {
    width: "100%",
    height: ri.reference,
    fontSize: ni.reference,
    px: oi.reference,
    borderRadius: ii.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), hn = {
  lg: {
    [ni.variable]: "fontSizes.lg",
    [oi.variable]: "space.4",
    [ii.variable]: "radii.md",
    [ri.variable]: "sizes.12"
  },
  md: {
    [ni.variable]: "fontSizes.md",
    [oi.variable]: "space.4",
    [ii.variable]: "radii.md",
    [ri.variable]: "sizes.10"
  },
  sm: {
    [ni.variable]: "fontSizes.sm",
    [oi.variable]: "space.3",
    [ii.variable]: "radii.sm",
    [ri.variable]: "sizes.8"
  },
  xs: {
    [ni.variable]: "fontSizes.xs",
    [oi.variable]: "space.2",
    [ii.variable]: "radii.sm",
    [ri.variable]: "sizes.6"
  }
}, IR = {
  lg: Yr({
    field: hn.lg,
    group: hn.lg
  }),
  md: Yr({
    field: hn.md,
    group: hn.md
  }),
  sm: Yr({
    field: hn.sm,
    group: hn.sm
  }),
  xs: Yr({
    field: hn.xs,
    group: hn.xs
  })
};
function mm(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || N("blue.500", "blue.300")(e),
    errorBorderColor: r || N("red.500", "red.300")(e)
  };
}
var FR = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = mm(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: N("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: mt(t, n),
        boxShadow: `0 0 0 1px ${mt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: mt(t, r),
        boxShadow: `0 0 0 1px ${mt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: N("inherit", "whiteAlpha.50")(e),
      bg: N("gray.100", "whiteAlpha.300")(e)
    }
  };
}), DR = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = mm(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: N("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: N("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: mt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: mt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: N("gray.100", "whiteAlpha.50")(e)
    }
  };
}), jR = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = mm(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: mt(t, n),
        boxShadow: `0px 1px 0px 0px ${mt(t, n)}`
      },
      _focusVisible: {
        borderColor: mt(t, r),
        boxShadow: `0px 1px 0px 0px ${mt(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), LR = Yr({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), BR = {
  outline: FR,
  filled: DR,
  flushed: jR,
  unstyled: LR
}, le = OR({
  baseStyle: zR,
  sizes: IR,
  variants: BR,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), g0, NR = {
  ...(g0 = le.baseStyle) == null ? void 0 : g0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, y0, b0, VR = {
  outline: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (b0 = (y0 = le.variants) == null ? void 0 : y0.unstyled.field) != null ? b0 : {}
}, x0, S0, w0, k0, C0, _0, P0, T0, WR = {
  xs: (S0 = (x0 = le.sizes) == null ? void 0 : x0.xs.field) != null ? S0 : {},
  sm: (k0 = (w0 = le.sizes) == null ? void 0 : w0.sm.field) != null ? k0 : {},
  md: (_0 = (C0 = le.sizes) == null ? void 0 : C0.md.field) != null ? _0 : {},
  lg: (T0 = (P0 = le.sizes) == null ? void 0 : P0.lg.field) != null ? T0 : {}
}, HR = {
  baseStyle: NR,
  sizes: WR,
  variants: VR,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, kl = Ue("tooltip-bg"), Ud = Ue("tooltip-fg"), UR = Ue("popper-arrow-bg"), GR = {
  bg: kl.reference,
  color: Ud.reference,
  [kl.variable]: "colors.gray.700",
  [Ud.variable]: "colors.whiteAlpha.900",
  _dark: {
    [kl.variable]: "colors.gray.300",
    [Ud.variable]: "colors.gray.900"
  },
  [UR.variable]: kl.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, KR = {
  baseStyle: GR
}, { defineMultiStyleConfig: YR, definePartsStyle: Sa } = ye(a5.keys), qR = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = N(
    c0(),
    c0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = N(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${mt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, XR = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, QR = (e) => ({
  bg: N("gray.100", "whiteAlpha.300")(e)
}), ZR = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...qR(e)
}), JR = Sa((e) => ({
  label: XR,
  filledTrack: ZR(e),
  track: QR(e)
})), eM = {
  xs: Sa({
    track: { h: "1" }
  }),
  sm: Sa({
    track: { h: "2" }
  }),
  md: Sa({
    track: { h: "3" }
  }),
  lg: Sa({
    track: { h: "4" }
  })
}, tM = YR({
  sizes: eM,
  baseStyle: JR,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), rM = (e) => typeof e == "function";
function gt(e, ...t) {
  return rM(e) ? e(...t) : e;
}
var { definePartsStyle: au, defineMultiStyleConfig: nM } = ye(qA.keys), Fa = V("checkbox-size"), oM = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Fa.reference,
    h: Fa.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: N(`${t}.500`, `${t}.200`)(e),
      borderColor: N(`${t}.500`, `${t}.200`)(e),
      color: N("white", "gray.900")(e),
      _hover: {
        bg: N(`${t}.600`, `${t}.300`)(e),
        borderColor: N(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: N("gray.200", "transparent")(e),
        bg: N("gray.200", "whiteAlpha.300")(e),
        color: N("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: N(`${t}.500`, `${t}.200`)(e),
      borderColor: N(`${t}.500`, `${t}.200`)(e),
      color: N("white", "gray.900")(e)
    },
    _disabled: {
      bg: N("gray.100", "whiteAlpha.100")(e),
      borderColor: N("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: N("red.500", "red.300")(e)
    }
  };
}, iM = {
  _disabled: { cursor: "not-allowed" }
}, aM = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, sM = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, lM = au((e) => ({
  icon: sM,
  container: iM,
  control: gt(oM, e),
  label: aM
})), uM = {
  sm: au({
    control: { [Fa.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: au({
    control: { [Fa.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: au({
    control: { [Fa.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Hu = nM({
  baseStyle: lM,
  sizes: uM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: cM, definePartsStyle: su } = ye(s5.keys), dM = (e) => {
  var t;
  const r = (t = gt(Hu.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, fM = su((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Hu).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Hu).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: dM(e)
  };
}), pM = {
  md: su({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: su({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: su({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, hM = cM({
  baseStyle: fM,
  sizes: pM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: mM, definePartsStyle: vM } = ye(l5.keys), Cl = V("select-bg"), E0, gM = {
  ...(E0 = le.baseStyle) == null ? void 0 : E0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Cl.reference,
  [Cl.variable]: "colors.white",
  _dark: {
    [Cl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Cl.reference
  }
}, yM = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, bM = vM({
  field: gM,
  icon: yM
}), _l = {
  paddingInlineEnd: "8"
}, $0, A0, R0, M0, O0, z0, I0, F0, xM = {
  lg: {
    ...($0 = le.sizes) == null ? void 0 : $0.lg,
    field: {
      ...(A0 = le.sizes) == null ? void 0 : A0.lg.field,
      ..._l
    }
  },
  md: {
    ...(R0 = le.sizes) == null ? void 0 : R0.md,
    field: {
      ...(M0 = le.sizes) == null ? void 0 : M0.md.field,
      ..._l
    }
  },
  sm: {
    ...(O0 = le.sizes) == null ? void 0 : O0.sm,
    field: {
      ...(z0 = le.sizes) == null ? void 0 : z0.sm.field,
      ..._l
    }
  },
  xs: {
    ...(I0 = le.sizes) == null ? void 0 : I0.xs,
    field: {
      ...(F0 = le.sizes) == null ? void 0 : F0.xs.field,
      ..._l
    },
    icon: {
      insetEnd: "1"
    }
  }
}, SM = mM({
  baseStyle: bM,
  sizes: xM,
  variants: le.variants,
  defaultProps: le.defaultProps
}), Gd = V("skeleton-start-color"), Kd = V("skeleton-end-color"), wM = {
  [Gd.variable]: "colors.gray.100",
  [Kd.variable]: "colors.gray.400",
  _dark: {
    [Gd.variable]: "colors.gray.800",
    [Kd.variable]: "colors.gray.600"
  },
  background: Gd.reference,
  borderColor: Kd.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, kM = {
  baseStyle: wM
}, Yd = V("skip-link-bg"), CM = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Yd.variable]: "colors.white",
    _dark: {
      [Yd.variable]: "colors.gray.700"
    },
    bg: Yd.reference
  }
}, _M = {
  baseStyle: CM
}, { defineMultiStyleConfig: PM, definePartsStyle: Vc } = ye(u5.keys), ms = V("slider-thumb-size"), vs = V("slider-track-size"), wn = V("slider-bg"), TM = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...hm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, EM = (e) => ({
  ...hm({
    orientation: e.orientation,
    horizontal: { h: vs.reference },
    vertical: { w: vs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [wn.variable]: "colors.gray.200",
  _dark: {
    [wn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [wn.variable]: "colors.gray.300",
    _dark: {
      [wn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: wn.reference
}), $M = (e) => {
  const { orientation: t } = e;
  return {
    ...hm({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: ms.reference,
    h: ms.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, AM = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [wn.variable]: `colors.${t}.500`,
    _dark: {
      [wn.variable]: `colors.${t}.200`
    },
    bg: wn.reference
  };
}, RM = Vc((e) => ({
  container: TM(e),
  track: EM(e),
  thumb: $M(e),
  filledTrack: AM(e)
})), MM = Vc({
  container: {
    [ms.variable]: "sizes.4",
    [vs.variable]: "sizes.1"
  }
}), OM = Vc({
  container: {
    [ms.variable]: "sizes.3.5",
    [vs.variable]: "sizes.1"
  }
}), zM = Vc({
  container: {
    [ms.variable]: "sizes.2.5",
    [vs.variable]: "sizes.0.5"
  }
}), IM = {
  lg: MM,
  md: OM,
  sm: zM
}, FM = PM({
  baseStyle: RM,
  sizes: IM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), oo = Ue("spinner-size"), DM = {
  width: [oo.reference],
  height: [oo.reference]
}, jM = {
  xs: {
    [oo.variable]: "sizes.3"
  },
  sm: {
    [oo.variable]: "sizes.4"
  },
  md: {
    [oo.variable]: "sizes.6"
  },
  lg: {
    [oo.variable]: "sizes.8"
  },
  xl: {
    [oo.variable]: "sizes.12"
  }
}, LM = {
  baseStyle: DM,
  sizes: jM,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: BM, definePartsStyle: PS } = ye(c5.keys), NM = {
  fontWeight: "medium"
}, VM = {
  opacity: 0.8,
  marginBottom: "2"
}, WM = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, HM = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, UM = PS({
  container: {},
  label: NM,
  helpText: VM,
  number: WM,
  icon: HM
}), GM = {
  md: PS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, KM = BM({
  baseStyle: UM,
  sizes: GM,
  defaultProps: {
    size: "md"
  }
}), qd = V("kbd-bg"), YM = {
  [qd.variable]: "colors.gray.100",
  _dark: {
    [qd.variable]: "colors.whiteAlpha.100"
  },
  bg: qd.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, qM = {
  baseStyle: YM
}, XM = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, QM = {
  baseStyle: XM
}, { defineMultiStyleConfig: ZM, definePartsStyle: JM } = ye(t5.keys), eO = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, tO = JM({
  icon: eO
}), rO = ZM({
  baseStyle: tO
}), { defineMultiStyleConfig: nO, definePartsStyle: oO } = ye(r5.keys), kr = V("menu-bg"), Xd = V("menu-shadow"), iO = {
  [kr.variable]: "#fff",
  [Xd.variable]: "shadows.sm",
  _dark: {
    [kr.variable]: "colors.gray.700",
    [Xd.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: kr.reference,
  boxShadow: Xd.reference
}, aO = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [kr.variable]: "colors.gray.200",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: kr.reference
}, sO = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, lO = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, uO = {
  opacity: 0.6
}, cO = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, dO = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, fO = oO({
  button: dO,
  list: iO,
  item: aO,
  groupTitle: sO,
  icon: lO,
  command: uO,
  divider: cO
}), pO = nO({
  baseStyle: fO
}), { defineMultiStyleConfig: hO, definePartsStyle: Mp } = ye(n5.keys), Qd = V("modal-bg"), Zd = V("modal-shadow"), mO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, vO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, gO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Qd.variable]: "colors.white",
    [Zd.variable]: "shadows.lg",
    _dark: {
      [Qd.variable]: "colors.gray.700",
      [Zd.variable]: "shadows.dark-lg"
    },
    bg: Qd.reference,
    boxShadow: Zd.reference
  };
}, yO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, bO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, xO = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, SO = {
  px: "6",
  py: "4"
}, wO = Mp((e) => ({
  overlay: mO,
  dialogContainer: gt(vO, e),
  dialog: gt(gO, e),
  header: yO,
  closeButton: bO,
  body: gt(xO, e),
  footer: SO
}));
function lr(e) {
  return Mp(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var kO = {
  xs: lr("xs"),
  sm: lr("sm"),
  md: lr("md"),
  lg: lr("lg"),
  xl: lr("xl"),
  "2xl": lr("2xl"),
  "3xl": lr("3xl"),
  "4xl": lr("4xl"),
  "5xl": lr("5xl"),
  "6xl": lr("6xl"),
  full: lr("full")
}, CO = hO({
  baseStyle: wO,
  sizes: kO,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: _O, definePartsStyle: TS } = ye(o5.keys), vm = Ue("number-input-stepper-width"), ES = Ue("number-input-input-padding"), PO = Hr(vm).add("0.5rem").toString(), Jd = Ue("number-input-bg"), ef = Ue("number-input-color"), tf = Ue("number-input-border-color"), TO = {
  [vm.variable]: "sizes.6",
  [ES.variable]: PO
}, EO = (e) => {
  var t, r;
  return (r = (t = gt(le.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, $O = {
  width: vm.reference
}, AO = {
  borderStart: "1px solid",
  borderStartColor: tf.reference,
  color: ef.reference,
  bg: Jd.reference,
  [ef.variable]: "colors.chakra-body-text",
  [tf.variable]: "colors.chakra-border-color",
  _dark: {
    [ef.variable]: "colors.whiteAlpha.800",
    [tf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Jd.variable]: "colors.gray.200",
    _dark: {
      [Jd.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, RO = TS((e) => {
  var t;
  return {
    root: TO,
    field: (t = gt(EO, e)) != null ? t : {},
    stepperGroup: $O,
    stepper: AO
  };
});
function Pl(e) {
  var t, r, n;
  const o = (t = le.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = SS.fontSizes[a];
  return TS({
    field: {
      ...o.field,
      paddingInlineEnd: ES.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Hr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var MO = {
  xs: Pl("xs"),
  sm: Pl("sm"),
  md: Pl("md"),
  lg: Pl("lg")
}, OO = _O({
  baseStyle: RO,
  sizes: MO,
  variants: le.variants,
  defaultProps: le.defaultProps
}), D0, zO = {
  ...(D0 = le.baseStyle) == null ? void 0 : D0.field,
  textAlign: "center"
}, IO = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, j0, L0, FO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (L0 = (j0 = le.variants) == null ? void 0 : j0.unstyled.field) != null ? L0 : {}
}, DO = {
  baseStyle: zO,
  sizes: IO,
  variants: FO,
  defaultProps: le.defaultProps
}, { defineMultiStyleConfig: jO, definePartsStyle: LO } = ye(i5.keys), Tl = Ue("popper-bg"), BO = Ue("popper-arrow-bg"), B0 = Ue("popper-arrow-shadow-color"), NO = { zIndex: 10 }, VO = {
  [Tl.variable]: "colors.white",
  bg: Tl.reference,
  [BO.variable]: Tl.reference,
  [B0.variable]: "colors.gray.200",
  _dark: {
    [Tl.variable]: "colors.gray.700",
    [B0.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, WO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, HO = {
  px: 3,
  py: 2
}, UO = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, GO = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, KO = LO({
  popper: NO,
  content: VO,
  header: WO,
  body: HO,
  footer: UO,
  closeButton: GO
}), YO = jO({
  baseStyle: KO
}), { definePartsStyle: Op, defineMultiStyleConfig: qO } = ye(XA.keys), rf = V("drawer-bg"), nf = V("drawer-box-shadow");
function Fo(e) {
  return Op(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var XO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, QO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, ZO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [rf.variable]: "colors.white",
    [nf.variable]: "shadows.lg",
    _dark: {
      [rf.variable]: "colors.gray.700",
      [nf.variable]: "shadows.dark-lg"
    },
    bg: rf.reference,
    boxShadow: nf.reference
  };
}, JO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, ez = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, tz = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, rz = {
  px: "6",
  py: "4"
}, nz = Op((e) => ({
  overlay: XO,
  dialogContainer: QO,
  dialog: gt(ZO, e),
  header: JO,
  closeButton: ez,
  body: tz,
  footer: rz
})), oz = {
  xs: Fo("xs"),
  sm: Fo("md"),
  md: Fo("lg"),
  lg: Fo("2xl"),
  xl: Fo("4xl"),
  full: Fo("full")
}, iz = qO({
  baseStyle: nz,
  sizes: oz,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: az, defineMultiStyleConfig: sz } = ye(QA.keys), lz = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, uz = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, cz = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, dz = az({
  preview: lz,
  input: uz,
  textarea: cz
}), fz = sz({
  baseStyle: dz
}), { definePartsStyle: pz, defineMultiStyleConfig: hz } = ye(ZA.keys), bi = V("form-control-color"), mz = {
  marginStart: "1",
  [bi.variable]: "colors.red.500",
  _dark: {
    [bi.variable]: "colors.red.300"
  },
  color: bi.reference
}, vz = {
  mt: "2",
  [bi.variable]: "colors.gray.600",
  _dark: {
    [bi.variable]: "colors.whiteAlpha.600"
  },
  color: bi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, gz = pz({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: mz,
  helperText: vz
}), yz = hz({
  baseStyle: gz
}), { definePartsStyle: bz, defineMultiStyleConfig: xz } = ye(JA.keys), xi = V("form-error-color"), Sz = {
  [xi.variable]: "colors.red.500",
  _dark: {
    [xi.variable]: "colors.red.300"
  },
  color: xi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, wz = {
  marginEnd: "0.5em",
  [xi.variable]: "colors.red.500",
  _dark: {
    [xi.variable]: "colors.red.300"
  },
  color: xi.reference
}, kz = bz({
  text: Sz,
  icon: wz
}), Cz = xz({
  baseStyle: kz
}), _z = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, Pz = {
  baseStyle: _z
}, Tz = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Ez = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, $z = {
  baseStyle: Tz,
  sizes: Ez,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Az, definePartsStyle: Rz } = ye(YA.keys), of = V("breadcrumb-link-decor"), Mz = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: of.reference,
  [of.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [of.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, Oz = Rz({
  link: Mz
}), zz = Az({
  baseStyle: Oz
}), Iz = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, $S = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: N("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: N("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: N("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Oi(`${t}.200`, 0.12)(r), o = Oi(`${t}.200`, 0.24)(r);
  return {
    color: N(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: N(`${t}.50`, n)(e)
    },
    _active: {
      bg: N(`${t}.100`, o)(e)
    }
  };
}, Fz = (e) => {
  const { colorScheme: t } = e, r = N("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...gt($S, e)
  };
}, Dz = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, jz = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = N("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: N("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: N("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: N("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = Dz[r]) != null ? t : {}, s = N(n, `${r}.200`)(e);
  return {
    bg: s,
    color: N(o, "gray.800")(e),
    _hover: {
      bg: N(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: N(a, `${r}.400`)(e) }
  };
}, Lz = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: N(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: N(`${t}.700`, `${t}.500`)(e)
    }
  };
}, Bz = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Nz = {
  ghost: $S,
  outline: Fz,
  solid: jz,
  link: Lz,
  unstyled: Bz
}, Vz = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, Wz = {
  baseStyle: Iz,
  variants: Nz,
  sizes: Vz,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: vo, defineMultiStyleConfig: Hz } = ye(m5.keys), Uu = V("card-bg"), Qr = V("card-padding"), AS = V("card-shadow"), lu = V("card-radius"), RS = V("card-border-width", "0"), MS = V("card-border-color"), Uz = vo({
  container: {
    [Uu.variable]: "colors.chakra-body-bg",
    backgroundColor: Uu.reference,
    boxShadow: AS.reference,
    borderRadius: lu.reference,
    color: "chakra-body-text",
    borderWidth: RS.reference,
    borderColor: MS.reference
  },
  body: {
    padding: Qr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Qr.reference
  },
  footer: {
    padding: Qr.reference
  }
}), Gz = {
  sm: vo({
    container: {
      [lu.variable]: "radii.base",
      [Qr.variable]: "space.3"
    }
  }),
  md: vo({
    container: {
      [lu.variable]: "radii.md",
      [Qr.variable]: "space.5"
    }
  }),
  lg: vo({
    container: {
      [lu.variable]: "radii.xl",
      [Qr.variable]: "space.7"
    }
  })
}, Kz = {
  elevated: vo({
    container: {
      [AS.variable]: "shadows.base",
      _dark: {
        [Uu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: vo({
    container: {
      [RS.variable]: "1px",
      [MS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: vo({
    container: {
      [Uu.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Qr.variable]: 0
    },
    header: {
      [Qr.variable]: 0
    },
    footer: {
      [Qr.variable]: 0
    }
  }
}, Yz = Hz({
  baseStyle: Uz,
  variants: Kz,
  sizes: Gz,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Da = Ue("close-button-size"), la = Ue("close-button-bg"), qz = {
  w: [Da.reference],
  h: [Da.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [la.variable]: "colors.blackAlpha.100",
    _dark: {
      [la.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [la.variable]: "colors.blackAlpha.200",
    _dark: {
      [la.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: la.reference
}, Xz = {
  lg: {
    [Da.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Da.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Da.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Qz = {
  baseStyle: qz,
  sizes: Xz,
  defaultProps: {
    size: "md"
  }
}, { variants: Zz, defaultProps: Jz } = Ia, e3 = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, t3 = {
  baseStyle: e3,
  variants: Zz,
  defaultProps: Jz
}, r3 = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, n3 = {
  baseStyle: r3
}, o3 = {
  opacity: 0.6,
  borderColor: "inherit"
}, i3 = {
  borderStyle: "solid"
}, a3 = {
  borderStyle: "dashed"
}, s3 = {
  solid: i3,
  dashed: a3
}, l3 = {
  baseStyle: o3,
  variants: s3,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: u3, defineMultiStyleConfig: c3 } = ye(UA.keys), d3 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, f3 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, p3 = {
  pt: "2",
  px: "4",
  pb: "5"
}, h3 = {
  fontSize: "1.25em"
}, m3 = u3({
  container: d3,
  button: f3,
  panel: p3,
  icon: h3
}), v3 = c3({ baseStyle: m3 }), { definePartsStyle: Is, defineMultiStyleConfig: g3 } = ye(GA.keys), Ft = V("alert-fg"), an = V("alert-bg"), y3 = Is({
  container: {
    bg: an.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function gm(e) {
  const { theme: t, colorScheme: r } = e, n = Oi(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var b3 = Is((e) => {
  const { colorScheme: t } = e, r = gm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      }
    }
  };
}), x3 = Is((e) => {
  const { colorScheme: t } = e, r = gm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Ft.reference
    }
  };
}), S3 = Is((e) => {
  const { colorScheme: t } = e, r = gm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Ft.reference
    }
  };
}), w3 = Is((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Ft.variable]: "colors.white",
      [an.variable]: `colors.${t}.600`,
      _dark: {
        [Ft.variable]: "colors.gray.900",
        [an.variable]: `colors.${t}.200`
      },
      color: Ft.reference
    }
  };
}), k3 = {
  subtle: b3,
  "left-accent": x3,
  "top-accent": S3,
  solid: w3
}, C3 = g3({
  baseStyle: y3,
  variants: k3,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: OS, defineMultiStyleConfig: _3 } = ye(KA.keys), Si = V("avatar-border-color"), ja = V("avatar-bg"), gs = V("avatar-font-size"), zi = V("avatar-size"), P3 = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Si.reference,
  [Si.variable]: "white",
  _dark: {
    [Si.variable]: "colors.gray.800"
  }
}, T3 = {
  bg: ja.reference,
  fontSize: gs.reference,
  width: zi.reference,
  height: zi.reference,
  lineHeight: "1",
  [ja.variable]: "colors.gray.200",
  _dark: {
    [ja.variable]: "colors.whiteAlpha.400"
  }
}, E3 = (e) => {
  const { name: t, theme: r } = e, n = t ? I5({ string: t }) : "colors.gray.400", o = O5(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ja.reference,
    fontSize: gs.reference,
    color: i,
    borderColor: Si.reference,
    verticalAlign: "top",
    width: zi.reference,
    height: zi.reference,
    "&:not([data-loaded])": {
      [ja.variable]: n
    },
    [Si.variable]: "colors.white",
    _dark: {
      [Si.variable]: "colors.gray.800"
    }
  };
}, $3 = {
  fontSize: gs.reference,
  lineHeight: "1"
}, A3 = OS((e) => ({
  badge: gt(P3, e),
  excessLabel: gt(T3, e),
  container: gt(E3, e),
  label: $3
}));
function mn(e) {
  const t = e !== "100%" ? kS[e] : void 0;
  return OS({
    container: {
      [zi.variable]: t ?? e,
      [gs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [zi.variable]: t ?? e,
      [gs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var R3 = {
  "2xs": mn(4),
  xs: mn(6),
  sm: mn(8),
  md: mn(12),
  lg: mn(16),
  xl: mn(24),
  "2xl": mn(32),
  full: mn("100%")
}, M3 = _3({
  baseStyle: A3,
  sizes: R3,
  defaultProps: {
    size: "md"
  }
}), O3 = {
  Accordion: v3,
  Alert: C3,
  Avatar: M3,
  Badge: Ia,
  Breadcrumb: zz,
  Button: Wz,
  Checkbox: Hu,
  CloseButton: Qz,
  Code: t3,
  Container: n3,
  Divider: l3,
  Drawer: iz,
  Editable: fz,
  Form: yz,
  FormError: Cz,
  FormLabel: Pz,
  Heading: $z,
  Input: le,
  Kbd: qM,
  Link: QM,
  List: rO,
  Menu: pO,
  Modal: CO,
  NumberInput: OO,
  PinInput: DO,
  Popover: YO,
  Progress: tM,
  Radio: hM,
  Select: SM,
  Skeleton: kM,
  SkipLink: _M,
  Slider: FM,
  Spinner: LM,
  Stat: KM,
  Switch: Q5,
  Table: oR,
  Tabs: bR,
  Tag: MR,
  Textarea: HR,
  Tooltip: KR,
  Card: Yz,
  Stepper: HA
}, z3 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, I3 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, F3 = "ltr", D3 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, zS = {
  semanticTokens: z3,
  direction: F3,
  ...NA,
  components: O3,
  styles: I3,
  config: D3
};
function wa(e) {
  return typeof e == "function";
}
function j3(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var L3 = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return gA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, j3(
    ...n.map(
      (i) => (a) => wa(i) ? i(a) : N3(a, i)
    )
  )(o);
}, B3 = L3(zS);
function N3(...e) {
  return Jt({}, ...e, IS);
}
function IS(e, t, r, n) {
  if ((wa(e) || wa(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = wa(e) ? e(...o) : e, a = wa(t) ? t(...o) : t;
      return Jt({}, i, a, IS);
    };
}
function V3(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function W3(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var H3 = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, FS = H3(W3);
function DS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var jS = (e) => DS(e, (t) => t != null);
function U3(e) {
  return typeof e == "function";
}
function LS(e, ...t) {
  return U3(e) ? e(...t) : e;
}
var G3 = typeof Element < "u", K3 = typeof Map == "function", Y3 = typeof Set == "function", q3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function uu(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!uu(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (K3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!uu(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Y3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (q3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (G3 && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !uu(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var X3 = function(t, r) {
  try {
    return uu(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Q3 = /* @__PURE__ */ Ps(X3);
function BS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = ZE(), s = e ? FS(i, `components.${e}`) : void 0, l = n || s, u = Jt(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    jS(V3(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = mA(l)(u);
    Q3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Fs(e, t = {}) {
  return BS(e, t);
}
function Ds(e, t = {}) {
  return BS(e, t);
}
var Z3 = /* @__PURE__ */ new Set([
  ...nA,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), J3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function e4(e) {
  return J3.has(e) || !Z3.has(e);
}
function t4(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function r4(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var n4 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, o4 = /* @__PURE__ */ Qx(
  function(e) {
    return n4.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), i4 = o4, a4 = function(t) {
  return t !== "theme";
}, N0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? i4 : a4;
}, V0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, s4 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return nS(r, n, o), EE(function() {
    return oS(r, n, o);
  }), null;
}, l4 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = V0(t, r, n), l = s || N0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = lS(function(y, S, m) {
      var h = u && y.as || o, v = "", w = [], k = y;
      if (y.theme == null) {
        k = {};
        for (var E in y)
          k[E] = y[E];
        k.theme = b.useContext(fs);
      }
      typeof y.className == "string" ? v = SE(S.registered, w, y.className) : y.className != null && (v = y.className + " ");
      var _ = am(d.concat(w), S.registered, k);
      v += S.key + "-" + _.name, a !== void 0 && (v += " " + a);
      var $ = u && s === void 0 ? N0(h) : l, R = {};
      for (var M in y)
        u && M === "as" || // $FlowFixMe
        $(M) && (R[M] = y[M]);
      return R.className = v, R.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(s4, {
        cache: S,
        serialized: _,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ b.createElement(h, R));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, S) {
      return e(y, Co({}, r, S, {
        shouldForwardProp: V0(g, S, !0)
      })).apply(void 0, d);
    }, g;
  };
}, u4 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Gu = l4.bind();
u4.forEach(function(e) {
  Gu[e] = Gu(e);
});
var W0, c4 = (W0 = Gu.default) != null ? W0 : Gu, d4 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = DS(a, (d, f) => iA(f)), l = LS(e, t), u = t4(
    {},
    o,
    l,
    jS(s),
    i
  ), c = xS(u)(t.theme);
  return n ? [c, n] : c;
};
function af(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = e4);
  const o = d4({ baseStyle: r }), i = c4(
    e,
    n
  )(o);
  return yo.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = zs();
    return yo.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function f4() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(af, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return af(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, af(r)), e.get(r);
    }
  });
}
var re = f4();
function ke(e) {
  return b.forwardRef(e);
}
function p4(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = b.createContext(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = b.useContext(o);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
function h4(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => rA(r), [r]);
  return /* @__PURE__ */ C.jsxs(RE, { theme: o, children: [
    /* @__PURE__ */ C.jsx(m4, { root: t }),
    n
  ] });
}
function m4({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ C.jsx(jc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
p4({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function v4() {
  const { colorMode: e } = zs();
  return /* @__PURE__ */ C.jsx(
    jc,
    {
      styles: (t) => {
        const r = FS(t, "styles.global"), n = LS(r, { theme: t, colorMode: e });
        return n ? xS(n)(t) : void 0;
      }
    }
  );
}
var NS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
NS.displayName = "EnvironmentContext";
function VS(e) {
  const { children: t, environment: r, disabled: n } = e, o = b.useRef(null), i = b.useMemo(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), a = !n || !r;
  return /* @__PURE__ */ C.jsxs(NS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ C.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
VS.displayName = "EnvironmentProvider";
var g4 = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ C.jsx(
    VS,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ C.jsx(h4, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ C.jsxs(
    pS,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ C.jsx(IE, { scope: o }) : /* @__PURE__ */ C.jsx(zE, {}),
        !c && /* @__PURE__ */ C.jsx(v4, {}),
        n ? /* @__PURE__ */ C.jsx(dS, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, y4 = (e, t) => e.find((r) => r.id === t);
function H0(e, t) {
  const r = WS(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function WS(e, t) {
  for (const [r, n] of Object.entries(e))
    if (y4(n, t))
      return r;
}
function b4(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function x4(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a
  };
}
function Ku(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function S4(e, t) {
  const r = Ku(e);
  b.useEffect(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function Yu(e, t) {
  const r = b.useRef(!1), n = b.useRef(!1);
  b.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), b.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const HS = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Wc = b.createContext({}), js = b.createContext(null), Hc = typeof document < "u", ym = Hc ? b.useLayoutEffect : b.useEffect, US = b.createContext({ strict: !1 }), bm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), w4 = "framerAppearId", GS = "data-" + bm(w4);
function k4(e, t, r, n) {
  const { visualElement: o } = b.useContext(Wc), i = b.useContext(US), a = b.useContext(js), s = b.useContext(HS).reducedMotion, l = b.useRef();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  b.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = b.useRef(!!r[GS]);
  return ym(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function ai(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function C4(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ai(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ys(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Uc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const xm = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Sm = ["initial", ...xm];
function Gc(e) {
  return Uc(e.animate) || Sm.some((t) => ys(e[t]));
}
function KS(e) {
  return !!(Gc(e) || e.variants);
}
function _4(e, t) {
  if (Gc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ys(r) ? r : void 0,
      animate: ys(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function P4(e) {
  const { initial: t, animate: r } = _4(e, b.useContext(Wc));
  return b.useMemo(() => ({ initial: t, animate: r }), [U0(t), U0(r)]);
}
function U0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const G0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, bs = {};
for (const e in G0)
  bs[e] = {
    isEnabled: (t) => G0[e].some((r) => !!t[r])
  };
function T4(e) {
  for (const t in e)
    bs[t] = {
      ...bs[t],
      ...e[t]
    };
}
const wm = b.createContext({}), YS = b.createContext({}), E4 = Symbol.for("motionComponentSymbol");
function $4({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && T4(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(HS),
      ...s,
      layoutId: A4(s)
    }, { isStatic: d } = c, f = P4(s), p = n(s, d);
    if (!d && Hc) {
      f.visualElement = k4(o, p, c, t);
      const g = b.useContext(YS), y = b.useContext(US).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return b.createElement(
      Wc.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, C4(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[E4] = o, a;
}
function A4({ layoutId: e }) {
  const t = b.useContext(wm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function R4(e) {
  function t(n, o = {}) {
    return $4(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const M4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function km(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(M4.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const qu = {};
function O4(e) {
  Object.assign(qu, e);
}
const Ls = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Eo = new Set(Ls);
function qS(e, { layout: t, layoutId: r }) {
  return Eo.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!qu[e] || e === "opacity");
}
const $t = (e) => !!(e && e.getVelocity), z4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, I4 = Ls.length;
function F4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < I4; a++) {
    const s = Ls[a];
    if (e[s] !== void 0) {
      const l = z4[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const XS = (e) => (t) => typeof t == "string" && t.startsWith(e), QS = XS("--"), zp = XS("var(--"), D4 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, j4 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, jn = (e, t, r) => Math.min(Math.max(r, e), t), $o = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, La = {
  ...$o,
  transform: (e) => jn(0, 1, e)
}, El = {
  ...$o,
  default: 1
}, Ba = (e) => Math.round(e * 1e5) / 1e5, Kc = /(-)?([\d]*\.?[\d])+/g, ZS = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, L4 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Bs(e) {
  return typeof e == "string";
}
const Ns = (e) => ({
  test: (t) => Bs(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), vn = Ns("deg"), Or = Ns("%"), W = Ns("px"), B4 = Ns("vh"), N4 = Ns("vw"), K0 = {
  ...Or,
  parse: (e) => Or.parse(e) / 100,
  transform: (e) => Or.transform(e * 100)
}, Y0 = {
  ...$o,
  transform: Math.round
}, JS = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  radius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  size: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  // Transform props
  rotate: vn,
  rotateX: vn,
  rotateY: vn,
  rotateZ: vn,
  scale: El,
  scaleX: El,
  scaleY: El,
  scaleZ: El,
  skew: vn,
  skewX: vn,
  skewY: vn,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: La,
  originX: K0,
  originY: K0,
  originZ: W,
  // Misc
  zIndex: Y0,
  // SVG
  fillOpacity: La,
  strokeOpacity: La,
  numOctaves: Y0
};
function Cm(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (QS(d)) {
      i[d] = f;
      continue;
    }
    const p = JS[d], g = j4(f, p);
    if (Eo.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = F4(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const _m = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ew(e, t, r) {
  for (const n in t)
    !$t(t[n]) && !qS(n, r) && (e[n] = t[n]);
}
function V4({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = _m();
    return Cm(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function W4(e, t, r) {
  const n = e.style || {}, o = {};
  return ew(o, n, e), Object.assign(o, V4(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function H4(e, t, r) {
  const n = {}, o = W4(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const U4 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function Xu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || U4.has(e);
}
let tw = (e) => !Xu(e);
function G4(e) {
  e && (tw = (t) => t.startsWith("on") ? !Xu(t) : e(t));
}
try {
  G4(require("@emotion/is-prop-valid").default);
} catch {
}
function K4(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (tw(o) || r === !0 && Xu(o) || !t && !Xu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function q0(e, t, r) {
  return typeof e == "string" ? e : W.transform(t + r * e);
}
function Y4(e, t, r) {
  const n = q0(t, e.x, e.width), o = q0(r, e.y, e.height);
  return `${n} ${o}`;
}
const q4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, X4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Q4(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? q4 : X4;
  e[i.offset] = W.transform(-n);
  const a = W.transform(t), s = W.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Pm(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (Cm(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = Y4(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && Q4(p, a, s, l, !1);
}
const rw = () => ({
  ..._m(),
  attrs: {}
}), Tm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Z4(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = rw();
    return Pm(i, t, { enableHardwareAcceleration: !1 }, Tm(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ew(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function J4(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (km(r) ? Z4 : H4)(n, i, a, r), c = {
      ...K4(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => $t(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
function nw(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const ow = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function iw(e, t, r, n) {
  nw(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(ow.has(o) ? o : bm(o), t.attrs[o]);
}
function Em(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    ($t(r[o]) || t.style && $t(t.style[o]) || qS(o, e)) && (n[o] = r[o]);
  return n;
}
function aw(e, t) {
  const r = Em(e, t);
  for (const n in e)
    if ($t(e[n]) || $t(t[n])) {
      const o = Ls.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function $m(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function sw(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qu = (e) => Array.isArray(e), eI = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), tI = (e) => Qu(e) ? e[e.length - 1] || 0 : e;
function cu(e) {
  const t = $t(e) ? e.get() : e;
  return eI(t) ? t.toValue() : t;
}
function rI({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: nI(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const lw = (e) => (t, r) => {
  const n = b.useContext(Wc), o = b.useContext(js), i = () => rI(e, t, n, o);
  return r ? i() : sw(i);
};
function nI(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = cu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Gc(e), u = KS(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Uc(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = $m(e, p);
    if (!g)
      return;
    const { transitionEnd: y, transition: S, ...m } = g;
    for (const h in m) {
      let v = m[h];
      if (Array.isArray(v)) {
        const w = c ? v.length - 1 : 0;
        v = v[w];
      }
      v !== null && (o[h] = v);
    }
    for (const h in y)
      o[h] = y[h];
  }), o;
}
const Fe = (e) => e;
class X0 {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function oI(e) {
  let t = new X0(), r = new X0(), n = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : r;
      return u && a.add(l), f.add(l) && d && o && (n = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      r.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let u = 0; u < n; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const $l = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], iI = 40;
function aI(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = $l.reduce((d, f) => (d[f] = oI(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, iI), 1), o.timestamp = d, o.isProcessing = !0, $l.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: $l.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, S = !1) => (r || l(), p.schedule(g, y, S)), d;
  }, {}), cancel: (d) => $l.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: ve, cancel: sn, state: Ge, steps: sf } = aI(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fe, !0), sI = {
  useVisualState: lw({
    scrapeMotionValuesFromProps: aw,
    createRenderState: rw,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      ve.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), ve.render(() => {
        Pm(r, n, { enableHardwareAcceleration: !1 }, Tm(t.tagName), e.transformTemplate), iw(t, r);
      });
    }
  })
}, lI = {
  useVisualState: lw({
    scrapeMotionValuesFromProps: Em,
    createRenderState: _m
  })
};
function uI(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...km(e) ? sI : lI,
    preloadedFeatures: r,
    useRender: J4(t),
    createVisualElement: n,
    Component: e
  };
}
function qr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const uw = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Yc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const cI = (e) => (t) => uw(t) && e(t, Yc(t));
function Zr(e, t, r, n) {
  return qr(e, t, cI(r), n);
}
const dI = (e, t) => (r) => t(e(r)), zn = (...e) => e.reduce(dI);
function cw(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Q0 = cw("dragHorizontal"), Z0 = cw("dragVertical");
function dw(e) {
  let t = !1;
  if (e === "y")
    t = Z0();
  else if (e === "x")
    t = Q0();
  else {
    const r = Q0(), n = Z0();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function fw() {
  const e = dw(!0);
  return e ? (e(), !1) : !0;
}
class Hn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function J0(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || fw())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && ve.update(() => s[n](i, a));
  };
  return Zr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class fI extends Hn {
  mount() {
    this.unmount = zn(J0(this.node, !0), J0(this.node, !1));
  }
  unmount() {
  }
}
class pI extends Hn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = zn(qr(this.node.current, "focus", () => this.onFocus()), qr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const pw = (e, t) => t ? e === t ? !0 : pw(e, t.parentElement) : !1;
function lf(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Yc(r));
}
class hI extends Hn {
  constructor() {
    super(...arguments), this.removeStartListeners = Fe, this.removeEndListeners = Fe, this.removeAccessibleListeners = Fe, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Zr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        ve.update(() => {
          pw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Zr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = zn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || lf("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && ve.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = qr(this.node.current, "keyup", a), lf("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = qr(this.node.current, "keydown", t), n = () => {
        this.isPressing && lf("cancel", (i, a) => this.cancelPress(i, a));
      }, o = qr(this.node.current, "blur", n);
      this.removeAccessibleListeners = zn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && ve.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !fw();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && ve.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Zr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = qr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = zn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ip = /* @__PURE__ */ new WeakMap(), uf = /* @__PURE__ */ new WeakMap(), mI = (e) => {
  const t = Ip.get(e.target);
  t && t(e);
}, vI = (e) => {
  e.forEach(mI);
};
function gI({ root: e, ...t }) {
  const r = e || document;
  uf.has(r) || uf.set(r, {});
  const n = uf.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(vI, { root: e, ...t })), n[o];
}
function yI(e, t, r) {
  const n = gI(t);
  return Ip.set(e, r), n.observe(e), () => {
    Ip.delete(e), n.unobserve(e);
  };
}
const bI = {
  some: 0,
  all: 1
};
class xI extends Hn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : bI[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return yI(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(SI(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function SI({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const wI = {
  inView: {
    Feature: xI
  },
  tap: {
    Feature: hI
  },
  focus: {
    Feature: pI
  },
  hover: {
    Feature: fI
  }
};
function hw(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function kI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function CI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function qc(e, t, r) {
  const n = e.getProps();
  return $m(n, t, r !== void 0 ? r : n.custom, kI(e), CI(e));
}
let _I = Fe, Am = Fe;
const In = (e) => e * 1e3, Jr = (e) => e / 1e3, PI = {
  current: !1
}, mw = (e) => Array.isArray(e) && typeof e[0] == "number";
function vw(e) {
  return !!(!e || typeof e == "string" && gw[e] || mw(e) || Array.isArray(e) && e.every(vw));
}
const ka = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, gw = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ka([0, 0.65, 0.55, 1]),
  circOut: ka([0.55, 0, 1, 0.45]),
  backIn: ka([0.31, 0.01, 0.66, -0.59]),
  backOut: ka([0.33, 1.53, 0.69, 0.99])
};
function yw(e) {
  if (e)
    return mw(e) ? ka(e) : Array.isArray(e) ? e.map(yw) : gw[e];
}
function TI(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = yw(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function EI(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const bw = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, $I = 1e-7, AI = 12;
function RI(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = bw(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > $I && ++s < AI);
  return a;
}
function Vs(e, t, r, n) {
  if (e === t && r === n)
    return Fe;
  const o = (i) => RI(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : bw(o(i), t, n);
}
const MI = Vs(0.42, 0, 1, 1), OI = Vs(0, 0, 0.58, 1), xw = Vs(0.42, 0, 0.58, 1), zI = (e) => Array.isArray(e) && typeof e[0] != "number", Sw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ww = (e) => (t) => 1 - e(1 - t), kw = (e) => 1 - Math.sin(Math.acos(e)), Rm = ww(kw), II = Sw(Rm), Cw = Vs(0.33, 1.53, 0.69, 0.99), Mm = ww(Cw), FI = Sw(Mm), DI = (e) => (e *= 2) < 1 ? 0.5 * Mm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), jI = {
  linear: Fe,
  easeIn: MI,
  easeInOut: xw,
  easeOut: OI,
  circIn: kw,
  circInOut: II,
  circOut: Rm,
  backIn: Mm,
  backInOut: FI,
  backOut: Cw,
  anticipate: DI
}, ey = (e) => {
  if (Array.isArray(e)) {
    Am(e.length === 4);
    const [t, r, n, o] = e;
    return Vs(t, r, n, o);
  } else if (typeof e == "string")
    return jI[e];
  return e;
}, Om = (e, t) => (r) => !!(Bs(r) && L4.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), _w = (e, t, r) => (n) => {
  if (!Bs(n))
    return n;
  const [o, i, a, s] = n.match(Kc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, LI = (e) => jn(0, 255, e), cf = {
  ...$o,
  transform: (e) => Math.round(LI(e))
}, uo = {
  test: Om("rgb", "red"),
  parse: _w("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + cf.transform(e) + ", " + cf.transform(t) + ", " + cf.transform(r) + ", " + Ba(La.transform(n)) + ")"
};
function BI(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Fp = {
  test: Om("#"),
  parse: BI,
  transform: uo.transform
}, si = {
  test: Om("hsl", "hue"),
  parse: _w("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Or.transform(Ba(t)) + ", " + Or.transform(Ba(r)) + ", " + Ba(La.transform(n)) + ")"
}, pt = {
  test: (e) => uo.test(e) || Fp.test(e) || si.test(e),
  parse: (e) => uo.test(e) ? uo.parse(e) : si.test(e) ? si.parse(e) : Fp.parse(e),
  transform: (e) => Bs(e) ? e : e.hasOwnProperty("red") ? uo.transform(e) : si.transform(e)
}, $e = (e, t, r) => -r * e + r * t + e;
function df(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function NI({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = df(l, s, e + 1 / 3), i = df(l, s, e), a = df(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const ff = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, VI = [Fp, uo, si], WI = (e) => VI.find((t) => t.test(e));
function ty(e) {
  const t = WI(e);
  let r = t.parse(e);
  return t === si && (r = NI(r)), r;
}
const Pw = (e, t) => {
  const r = ty(e), n = ty(t), o = { ...r };
  return (i) => (o.red = ff(r.red, n.red, i), o.green = ff(r.green, n.green, i), o.blue = ff(r.blue, n.blue, i), o.alpha = $e(r.alpha, n.alpha, i), uo.transform(o));
};
function HI(e) {
  var t, r;
  return isNaN(e) && Bs(e) && (((t = e.match(Kc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(ZS)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Tw = {
  regex: D4,
  countKey: "Vars",
  token: "${v}",
  parse: Fe
}, Ew = {
  regex: ZS,
  countKey: "Colors",
  token: "${c}",
  parse: pt.parse
}, $w = {
  regex: Kc,
  countKey: "Numbers",
  token: "${n}",
  parse: $o.parse
};
function pf(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function Zu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && pf(r, Tw), pf(r, Ew), pf(r, $w), r;
}
function Aw(e) {
  return Zu(e).values;
}
function Rw(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Zu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(Tw.token, a[l]) : l < n + r ? s = s.replace(Ew.token, pt.transform(a[l])) : s = s.replace($w.token, Ba(a[l]));
    return s;
  };
}
const UI = (e) => typeof e == "number" ? 0 : e;
function GI(e) {
  const t = Aw(e);
  return Rw(e)(t.map(UI));
}
const Ln = {
  test: HI,
  parse: Aw,
  createTransformer: Rw,
  getAnimatableNone: GI
}, Mw = (e, t) => (r) => `${r > 0 ? t : e}`;
function Ow(e, t) {
  return typeof e == "number" ? (r) => $e(e, t, r) : pt.test(e) ? Pw(e, t) : e.startsWith("var(") ? Mw(e, t) : Iw(e, t);
}
const zw = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Ow(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, KI = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Ow(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Iw = (e, t) => {
  const r = Ln.createTransformer(t), n = Zu(e), o = Zu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? zn(zw(n.values, o.values), r) : Mw(e, t);
}, xs = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, ry = (e, t) => (r) => $e(e, t, r);
function YI(e) {
  return typeof e == "number" ? ry : typeof e == "string" ? pt.test(e) ? Pw : Iw : Array.isArray(e) ? zw : typeof e == "object" ? KI : ry;
}
function qI(e, t, r) {
  const n = [], o = r || YI(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Fe : t;
      s = zn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Fw(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Am(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = qI(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = xs(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(jn(e[0], e[i - 1], u)) : l;
}
function XI(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = xs(0, t, n);
    e.push($e(r, 1, o));
  }
}
function QI(e) {
  const t = [0];
  return XI(t, e.length - 1), t;
}
function ZI(e, t) {
  return e.map((r) => r * t);
}
function JI(e, t) {
  return e.map(() => t || xw).splice(0, e.length - 1);
}
function Ju({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = zI(n) ? n.map(ey) : ey(n), i = {
    done: !1,
    value: t[0]
  }, a = ZI(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : QI(t),
    e
  ), s = Fw(a, t, {
    ease: Array.isArray(o) ? o : JI(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Dw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const eF = 5;
function jw(e, t, r) {
  const n = Math.max(t - eF, 0);
  return Dw(r - e(n), t - n);
}
const hf = 1e-3, tF = 0.01, ny = 10, rF = 0.05, nF = 1;
function oF({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  _I(e <= In(ny));
  let a = 1 - t;
  a = jn(rF, nF, a), e = jn(tF, ny, Jr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Dp(u, a), g = Math.exp(-d);
    return hf - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Dp(Math.pow(u, 2), a);
    return (-o(u) + hf > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -hf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = aF(o, i, s);
  if (e = In(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * n;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(n * u),
      duration: e
    };
  }
}
const iF = 12;
function aF(e, t, r) {
  let n = r;
  for (let o = 1; o < iF; o++)
    n = n - e(n) / t(n);
  return n;
}
function Dp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sF = ["duration", "bounce"], lF = ["stiffness", "damping", "mass"];
function oy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function uF(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!oy(e, lF) && oy(e, sF)) {
    const r = oF(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Lw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = uF(n), p = c ? -Jr(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, S = Jr(Math.sqrt(s / u)), m = Math.abs(y) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (g < 1) {
    const v = Dp(S, g);
    h = (w) => {
      const k = Math.exp(-g * S * w);
      return i - k * ((p + g * S * y) / v * Math.sin(v * w) + y * Math.cos(v * w));
    };
  } else if (g === 1)
    h = (v) => i - Math.exp(-S * v) * (y + (p + S * y) * v);
  else {
    const v = S * Math.sqrt(g * g - 1);
    h = (w) => {
      const k = Math.exp(-g * S * w), E = Math.min(v * w, 300);
      return i - k * ((p + g * S * y) * Math.sinh(E) + v * y * Math.cosh(E)) / v;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (v) => {
      const w = h(v);
      if (f)
        a.done = v >= d;
      else {
        let k = p;
        v !== 0 && (g < 1 ? k = jw(h, v, w) : k = 0);
        const E = Math.abs(k) <= r, _ = Math.abs(i - w) <= t;
        a.done = E && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function iy({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, g = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let y = r * t;
  const S = d + y, m = a === void 0 ? S : a(S);
  m !== S && (y = m - d);
  const h = ($) => -y * Math.exp(-$ / n), v = ($) => m + h($), w = ($) => {
    const R = h($), M = v($);
    f.done = Math.abs(R) <= u, f.value = f.done ? m : M;
  };
  let k, E;
  const _ = ($) => {
    p(f.value) && (k = $, E = Lw({
      keyframes: [f.value, g(f.value)],
      velocity: jw(v, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: ($) => {
      let R = !1;
      return !E && k === void 0 && (R = !0, w($), _($)), k !== void 0 && $ > k ? E.next($ - k) : (!R && w($), f);
    }
  };
}
const cF = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ve.update(t, !0),
    stop: () => sn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ge.isProcessing ? Ge.timestamp : performance.now()
  };
}, ay = 2e4;
function sy(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < ay; )
    t += r, n = e.next(t);
  return t >= ay ? 1 / 0 : t;
}
const dF = {
  decay: iy,
  inertia: iy,
  tween: Ju,
  keyframes: Ju,
  spring: Lw
};
function ec({ autoplay: e = !0, delay: t = 0, driver: r = cF, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, S;
  const m = () => {
    S = new Promise((L) => {
      y = L;
    });
  };
  m();
  let h;
  const v = dF[o] || Ju;
  let w;
  v !== Ju && typeof n[0] != "number" && (w = Fw([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const k = v({ ...f, keyframes: n });
  let E;
  s === "mirror" && (E = v({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", $ = null, R = null, M = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = sy(k));
  const { calculatedDuration: j } = k;
  let ee = 1 / 0, U = 1 / 0;
  j !== null && (ee = j + a, U = ee * (i + 1) - a);
  let G = 0;
  const K = (L) => {
    if (R === null)
      return;
    p > 0 && (R = Math.min(R, L)), p < 0 && (R = Math.min(L - U / p, R)), $ !== null ? G = $ : G = Math.round(L - R) * p;
    const q = G - t * (p >= 0 ? 1 : -1), H = p >= 0 ? q < 0 : q > U;
    G = Math.max(q, 0), _ === "finished" && $ === null && (G = U);
    let he = G, Me = k;
    if (i) {
      const Oe = G / ee;
      let Xe = Math.floor(Oe), Qe = Oe % 1;
      !Qe && Oe >= 1 && (Qe = 1), Qe === 1 && Xe--, Xe = Math.min(Xe, i + 1);
      const Dr = !!(Xe % 2);
      Dr && (s === "reverse" ? (Qe = 1 - Qe, a && (Qe -= a / ee)) : s === "mirror" && (Me = E));
      let jr = jn(0, 1, Qe);
      G > U && (jr = s === "reverse" && Dr ? 1 : 0), he = jr * ee;
    }
    const ce = H ? { done: !1, value: n[0] } : Me.next(he);
    w && (ce.value = w(ce.value));
    let { done: be } = ce;
    !H && j !== null && (be = p >= 0 ? G >= U : G <= 0);
    const Te = $ === null && (_ === "finished" || _ === "running" && be);
    return d && d(ce.value), Te && z(), ce;
  }, Y = () => {
    h && h.stop(), h = void 0;
  }, oe = () => {
    _ = "idle", Y(), y(), m(), R = M = null;
  }, z = () => {
    _ = "finished", c && c(), Y(), y();
  }, D = () => {
    if (g)
      return;
    h || (h = r(K));
    const L = h.now();
    l && l(), $ !== null ? R = L - $ : (!R || _ === "finished") && (R = L), _ === "finished" && m(), M = R, $ = null, _ = "running", h.start();
  };
  e && D();
  const B = {
    then(L, q) {
      return S.then(L, q);
    },
    get time() {
      return Jr(G);
    },
    set time(L) {
      L = In(L), G = L, $ !== null || !h || p === 0 ? $ = L : R = h.now() - L / p;
    },
    get duration() {
      const L = k.calculatedDuration === null ? sy(k) : k.calculatedDuration;
      return Jr(L);
    },
    get speed() {
      return p;
    },
    set speed(L) {
      L === p || !h || (p = L, B.time = Jr(G));
    },
    get state() {
      return _;
    },
    play: D,
    pause: () => {
      _ = "paused", $ = G;
    },
    stop: () => {
      g = !0, _ !== "idle" && (_ = "idle", u && u(), oe());
    },
    cancel: () => {
      M !== null && K(M), oe();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (L) => (R = 0, K(L))
  };
  return B;
}
function fF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const pF = fF(() => Object.hasOwnProperty.call(Element.prototype, "animate")), hF = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Al = 10, mF = 2e4, vF = (e, t) => t.type === "spring" || e === "backgroundColor" || !vw(t.ease);
function gF(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(pF() && hF.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (vF(t, o)) {
    const h = ec({
      ...o,
      repeat: 0,
      delay: 0
    });
    let v = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !v.done && k < mF; )
      v = h.sample(k), w.push(v.value), k += Al;
    p = void 0, c = w, d = k - Al, f = "linear";
  }
  const g = TI(e.owner.current, t, c, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  });
  o.syncStart && (g.startTime = Ge.isProcessing ? Ge.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const y = () => g.cancel(), S = () => {
    ve.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set(EI(c, o)), n && n(), S();
  }, {
    then(h, v) {
      return l.then(h, v);
    },
    attachTimeline(h) {
      return g.timeline = h, g.onfinish = null, Fe;
    },
    get time() {
      return Jr(g.currentTime || 0);
    },
    set time(h) {
      g.currentTime = In(h);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(h) {
      g.playbackRate = h;
    },
    get duration() {
      return Jr(d);
    },
    play: () => {
      a || (g.play(), sn(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: h } = g;
      if (h) {
        const v = ec({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(v.sample(h - Al).value, v.sample(h).value, Al);
      }
      S();
    },
    complete: () => g.finish(),
    cancel: S
  };
}
function yF({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Fe,
    pause: Fe,
    stop: Fe,
    then: (i) => (i(), Promise.resolve()),
    cancel: Fe,
    complete: Fe
  });
  return t ? ec({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const bF = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, xF = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), SF = {
  type: "keyframes",
  duration: 0.8
}, wF = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, kF = (e, { keyframes: t }) => t.length > 2 ? SF : Eo.has(e) ? e.startsWith("scale") ? xF(t[1]) : bF : wF, jp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Ln.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), CF = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function _F(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Kc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = CF.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const PF = /([a-z-]*)\(.*?\)/g, Lp = {
  ...Ln,
  getAnimatableNone: (e) => {
    const t = e.match(PF);
    return t ? t.map(_F).join(" ") : e;
  }
}, TF = {
  ...JS,
  // Color props
  color: pt,
  backgroundColor: pt,
  outlineColor: pt,
  fill: pt,
  stroke: pt,
  // Border props
  borderColor: pt,
  borderTopColor: pt,
  borderRightColor: pt,
  borderBottomColor: pt,
  borderLeftColor: pt,
  filter: Lp,
  WebkitFilter: Lp
}, zm = (e) => TF[e];
function Bw(e, t) {
  let r = zm(e);
  return r !== Lp && (r = Ln), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Nw = (e) => /^0[^.\s]+$/.test(e);
function EF(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Nw(e);
}
function $F(e, t, r, n) {
  const o = jp(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), EF(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Bw(t, s);
    }
  return i;
}
function AF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Im(e, t) {
  return e[t] || e.default || e;
}
const Fm = (e, t, r, n = {}) => (o) => {
  const i = Im(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - In(a);
  const l = $F(t, e, r, i), u = l[0], c = l[l.length - 1], d = jp(e, u), f = jp(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (g) => {
      t.set(g), i.onUpdate && i.onUpdate(g);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (AF(i) || (p = {
    ...p,
    ...kF(e, p)
  }), p.duration && (p.duration = In(p.duration)), p.repeatDelay && (p.repeatDelay = In(p.repeatDelay)), !d || !f || PI.current || i.type === !1)
    return yF(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = gF(t, e, p);
    if (g)
      return g;
  }
  return ec(p);
};
function tc(e) {
  return !!($t(e) && e.add);
}
const Vw = (e) => /^\-?\d*\.?\d+$/.test(e);
function Dm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Lm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Dm(this.subscriptions, t), () => jm(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const RF = (e) => !isNaN(parseFloat(e));
class MF {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = Ge;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, ve.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => ve.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = RF(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Lm());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), ve.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      Dw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ii(e, t) {
  return new MF(e, t);
}
const Ww = (e) => (t) => t.test(e), OF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Hw = [$o, W, Or, vn, N4, B4, OF], ua = (e) => Hw.find(Ww(e)), zF = [...Hw, pt, Ln], IF = (e) => zF.find(Ww(e));
function FF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ii(r));
}
function DF(e, t) {
  const r = qc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = tI(i[a]);
    FF(e, a, s);
  }
}
function jF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Vw(c) || Nw(c)) ? c = parseFloat(c) : !IF(c) && Ln.test(u) && (c = Bw(l, u)), e.addValue(l, Ii(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function LF(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function BF(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = LF(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function NF({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Uw(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && NF(c, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...Im(i || {}, d)
    };
    let y = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[GS];
      h && (y = !1, g.elapsed = window.HandoffAppearAnimations(h, d, f, ve), g.syncStart = !0);
    }
    let S = y && p === f.get();
    if (g.type === "spring" && (f.getVelocity() || g.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(Fm(d, f, p, e.shouldReduceMotion && Eo.has(d) ? { type: !1 } : g));
    const m = f.animation;
    tc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && DF(e, a);
  }), u;
}
function Bp(e, t, r = {}) {
  const n = qc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Uw(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return VF(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function VF(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(WF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Bp(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function WF(e, t) {
  return e.sortNodePosition(t);
}
function HF(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Bp(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Bp(e, t, r);
  else {
    const o = typeof t == "function" ? qc(e, t, r.custom) : t;
    n = Promise.all(Uw(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const UF = [...xm].reverse(), GF = xm.length;
function KF(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => HF(e, r, n)));
}
function YF(e) {
  let t = KF(e);
  const r = XF();
  let n = !0;
  const o = (l, u) => {
    const c = qc(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let m = 0; m < GF; m++) {
      const h = UF[m], v = r[h], w = c[h] !== void 0 ? c[h] : d[h], k = ys(w), E = h === u ? v.isActive : null;
      E === !1 && (y = m);
      let _ = w === d[h] && w !== c[h] && k;
      if (_ && n && e.manuallyAnimateOnMount && (_ = !1), v.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !w && !v.prevProp || // Or if the prop doesn't define an animation
      Uc(w) || typeof w == "boolean")
        continue;
      const $ = qF(v.prevProp, w);
      let R = $ || // If we're making this variant active, we want to always make it active
      h === u && v.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      m > y && k;
      const M = Array.isArray(w) ? w : [w];
      let j = M.reduce(o, {});
      E === !1 && (j = {});
      const { prevResolvedValues: ee = {} } = v, U = {
        ...ee,
        ...j
      }, G = (K) => {
        R = !0, p.delete(K), v.needsAnimating[K] = !0;
      };
      for (const K in U) {
        const Y = j[K], oe = ee[K];
        g.hasOwnProperty(K) || (Y !== oe ? Qu(Y) && Qu(oe) ? !hw(Y, oe) || $ ? G(K) : v.protectedKeys[K] = !0 : Y !== void 0 ? G(K) : p.add(K) : Y !== void 0 && p.has(K) ? G(K) : v.protectedKeys[K] = !0);
      }
      v.prevProp = w, v.prevResolvedValues = j, v.isActive && (g = { ...g, ...j }), n && e.blockInitialAnimation && (R = !1), R && !_ && f.push(...M.map((K) => ({
        animation: K,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const v = e.getBaseTarget(h);
        v !== void 0 && (m[h] = v);
      }), f.push({ animation: m });
    }
    let S = !!f.length;
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), n = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var g;
      return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
    }), r[l].isActive = u;
    const f = a(c, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function qF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hw(t, e) : !1;
}
function Xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function XF() {
  return {
    animate: Xn(!0),
    whileInView: Xn(),
    whileHover: Xn(),
    whileTap: Xn(),
    whileDrag: Xn(),
    whileFocus: Xn(),
    exit: Xn()
  };
}
class QF extends Hn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = YF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Uc(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let ZF = 0;
class JF extends Hn {
  constructor() {
    super(...arguments), this.id = ZF++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const eD = {
  animation: {
    Feature: QF
  },
  exit: {
    Feature: JF
  }
}, ly = (e, t) => Math.abs(e - t);
function tD(e, t) {
  const r = ly(e.x, t.x), n = ly(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Gw {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = vf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = tD(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = Ge;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: S } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = mf(d, this.transformPagePoint), ve.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = vf(c.type === "pointercancel" ? this.lastMoveEventInfo : mf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !uw(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = Yc(t), a = mf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ge;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, vf(a, this.history)), this.removeListeners = zn(Zr(this.contextWindow, "pointermove", this.handlePointerMove), Zr(this.contextWindow, "pointerup", this.handlePointerUp), Zr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), sn(this.updatePoint);
  }
}
function mf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vf({ point: e }, t) {
  return {
    point: e,
    delta: uy(e, Kw(t)),
    offset: uy(e, rD(t)),
    velocity: nD(t, 0.1)
  };
}
function rD(e) {
  return e[0];
}
function Kw(e) {
  return e[e.length - 1];
}
function nD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Kw(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > In(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Jr(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function jt(e) {
  return e.max - e.min;
}
function Np(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function cy(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = $e(t.min, t.max, e.origin), e.scale = jt(r) / jt(t), (Np(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = $e(r.min, r.max, e.origin) - e.originPoint, (Np(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Na(e, t, r, n) {
  cy(e.x, t.x, r.x, n ? n.originX : void 0), cy(e.y, t.y, r.y, n ? n.originY : void 0);
}
function dy(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + jt(t);
}
function oD(e, t, r) {
  dy(e.x, t.x, r.x), dy(e.y, t.y, r.y);
}
function fy(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + jt(t);
}
function Va(e, t, r) {
  fy(e.x, t.x, r.x), fy(e.y, t.y, r.y);
}
function iD(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? $e(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? $e(r, e, n.max) : Math.min(e, r)), e;
}
function py(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function aD(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: py(e.x, r, o),
    y: py(e.y, t, n)
  };
}
function hy(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function sD(e, t) {
  return {
    x: hy(e.x, t.x),
    y: hy(e.y, t.y)
  };
}
function lD(e, t) {
  let r = 0.5;
  const n = jt(e), o = jt(t);
  return o > n ? r = xs(t.min, t.max - n, e.min) : n > o && (r = xs(e.min, e.max - o, t.min)), jn(0, 1, r);
}
function uD(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Vp = 0.35;
function cD(e = Vp) {
  return e === !1 ? e = 0 : e === !0 && (e = Vp), {
    x: my(e, "left", "right"),
    y: my(e, "top", "bottom")
  };
}
function my(e, t, r) {
  return {
    min: vy(e, t),
    max: vy(e, r)
  };
}
function vy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const gy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), li = () => ({
  x: gy(),
  y: gy()
}), yy = () => ({ min: 0, max: 0 }), Be = () => ({
  x: yy(),
  y: yy()
});
function wr(e) {
  return [e("x"), e("y")];
}
function Yw({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function dD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function fD(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function gf(e) {
  return e === void 0 || e === 1;
}
function Wp({ scale: e, scaleX: t, scaleY: r }) {
  return !gf(e) || !gf(t) || !gf(r);
}
function eo(e) {
  return Wp(e) || qw(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function qw(e) {
  return by(e.x) || by(e.y);
}
function by(e) {
  return e && e !== "0%";
}
function rc(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function xy(e, t, r, n, o) {
  return o !== void 0 && (e = rc(e, o, n)), rc(e, r, n) + t;
}
function Hp(e, t = 0, r = 1, n, o) {
  e.min = xy(e.min, t, r, n, o), e.max = xy(e.max, t, r, n, o);
}
function Xw(e, { x: t, y: r }) {
  Hp(e.x, t.translate, t.scale, t.originPoint), Hp(e.y, r.translate, r.scale, r.originPoint);
}
function pD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && ui(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Xw(e, a)), n && eo(i.latestValues) && ui(e, i.latestValues));
  }
  t.x = Sy(t.x), t.y = Sy(t.y);
}
function Sy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function bn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function wy(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = $e(e.min, e.max, i);
  Hp(e, t[r], t[n], a, t.scale);
}
const hD = ["x", "scaleX", "originX"], mD = ["y", "scaleY", "originY"];
function ui(e, t) {
  wy(e.x, t, hD), wy(e.y, t, mD);
}
function Qw(e, t) {
  return Yw(fD(e.getBoundingClientRect(), t));
}
function vD(e, t, r) {
  const n = Qw(e, r), { scroll: o } = t;
  return o && (bn(n.x, o.offset.x), bn(n.y, o.offset.y)), n;
}
const Zw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, gD = /* @__PURE__ */ new WeakMap();
class yD {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Be(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Yc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = dw(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), wr((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (Or.test(y)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const m = S.layout.layoutBox[g];
            m && (y = jt(m) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && ve.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = bD(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Gw(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Zw(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ve.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Rl(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = iD(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && ai(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = aD(o.layoutBox, r) : this.constraints = !1, this.elastic = cD(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && wr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = uD(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ai(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = vD(n, o.root, this.visualElement.getTransformPagePoint());
    let a = sD(o.layout.layoutBox, i);
    if (r) {
      const s = r(dD(a));
      this.hasMutatedConstraints = !!s, s && (a = Yw(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = wr((c) => {
      if (!Rl(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: n ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Fm(t, n, 0, r));
  }
  stopAnimation() {
    wr((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    wr((r) => {
      const { drag: n } = this.getProps();
      if (!Rl(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - $e(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!ai(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    wr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = lD({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), wr((a) => {
      if (!Rl(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set($e(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    gD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Zr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ai(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = qr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (wr((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Vp, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function Rl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function bD(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class xD extends Hn {
  constructor(t) {
    super(t), this.removeGroupControls = Fe, this.removeListeners = Fe, this.controls = new yD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Fe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ky = (e) => (t, r) => {
  e && ve.update(() => e(t, r));
};
class SD extends Hn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Fe;
  }
  onPointerDown(t) {
    this.session = new Gw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: ky(t),
      onStart: ky(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && ve.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Jw() {
  const e = b.useContext(js);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function wD() {
  return kD(b.useContext(js));
}
function kD(e) {
  return e === null ? !0 : e.isPresent;
}
const du = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Cy(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ca = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (W.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Cy(e, t.target.x), n = Cy(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, CD = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Ln.parse(e);
    if (o.length > 5)
      return n;
    const i = Ln.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = $e(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class _D extends yo.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    O4(PD), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), du.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || ve.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ek(e) {
  const [t, r] = Jw(), n = b.useContext(wm);
  return yo.createElement(_D, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(YS), isPresent: t, safeToRemove: r });
}
const PD = {
  borderRadius: {
    ...ca,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ca,
  borderTopRightRadius: ca,
  borderBottomLeftRadius: ca,
  borderBottomRightRadius: ca,
  boxShadow: CD
}, tk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], TD = tk.length, _y = (e) => typeof e == "string" ? parseFloat(e) : e, Py = (e) => typeof e == "number" || W.test(e);
function ED(e, t, r, n, o, i) {
  o ? (e.opacity = $e(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    $D(n)
  ), e.opacityExit = $e(t.opacity !== void 0 ? t.opacity : 1, 0, AD(n))) : i && (e.opacity = $e(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < TD; a++) {
    const s = `border${tk[a]}Radius`;
    let l = Ty(t, s), u = Ty(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Py(l) === Py(u) ? (e[s] = Math.max($e(_y(l), _y(u), n), 0), (Or.test(u) || Or.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = $e(t.rotate || 0, r.rotate || 0, n));
}
function Ty(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const $D = rk(0, 0.5, Rm), AD = rk(0.5, 0.95, Fe);
function rk(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(xs(e, t, n));
}
function Ey(e, t) {
  e.min = t.min, e.max = t.max;
}
function Kt(e, t) {
  Ey(e.x, t.x), Ey(e.y, t.y);
}
function $y(e, t, r, n, o) {
  return e -= t, e = rc(e, 1 / r, n), o !== void 0 && (e = rc(e, 1 / o, n)), e;
}
function RD(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Or.test(t) && (t = parseFloat(t), t = $e(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = $e(i.min, i.max, n);
  e === i && (s -= t), e.min = $y(e.min, t, r, s, o), e.max = $y(e.max, t, r, s, o);
}
function Ay(e, t, [r, n, o], i, a) {
  RD(e, t[r], t[n], t[o], t.scale, i, a);
}
const MD = ["x", "scaleX", "originX"], OD = ["y", "scaleY", "originY"];
function Ry(e, t, r, n) {
  Ay(e.x, t, MD, r ? r.x : void 0, n ? n.x : void 0), Ay(e.y, t, OD, r ? r.y : void 0, n ? n.y : void 0);
}
function My(e) {
  return e.translate === 0 && e.scale === 1;
}
function nk(e) {
  return My(e.x) && My(e.y);
}
function zD(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function ok(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Oy(e) {
  return jt(e.x) / jt(e.y);
}
class ID {
  constructor() {
    this.members = [];
  }
  add(t) {
    Dm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (jm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function zy(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const FD = (e, t) => e.depth - t.depth;
class DD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Dm(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    jm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(FD), this.isDirty = !1, this.children.forEach(t);
  }
}
function jD(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (sn(n), e(i - t));
  };
  return ve.read(n, !0), () => sn(n);
}
function LD(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function BD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function ND(e, t, r) {
  const n = $t(e) ? e : Ii(e);
  return n.start(Fm("", n, t, r)), n.animation;
}
const Iy = ["", "X", "Y", "Z"], VD = { visibility: "hidden" }, Fy = 1e3;
let WD = 0;
const to = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function ik({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = WD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, to.totalNodes = to.resolvedTargetDeltas = to.recalculatedProjection = 0, this.nodes.forEach(GD), this.nodes.forEach(QD), this.nodes.forEach(ZD), this.nodes.forEach(KD), LD(to);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new DD());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Lm()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = BD(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = jD(f, 250), du.hasAnimatedSinceResize && (du.hasAnimatedSinceResize = !1, this.nodes.forEach(jy));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || nj, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !ok(this.targetLayout, g) || p, v = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const w = {
            ...Im(y, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || jy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, sn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JD), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Dy);
        return;
      }
      this.isUpdating || this.nodes.forEach(qD), this.isUpdating = !1, this.nodes.forEach(XD), this.nodes.forEach(HD), this.nodes.forEach(UD), this.clearAllSnapshots();
      const s = performance.now();
      Ge.delta = jn(0, 1e3 / 60, s - Ge.timestamp), Ge.timestamp = s, Ge.isProcessing = !0, sf.update.process(Ge), sf.preRender.process(Ge), sf.render.process(Ge), Ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YD), this.sharedNodes.forEach(ej);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Be(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !nk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || eo(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), oj(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return Be();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (bn(s.x, l.offset.x), bn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Be();
      Kt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Kt(s, a);
            const { scroll: f } = this.root;
            f && (bn(s.x, -f.offset.x), bn(s.y, -f.offset.y));
          }
          bn(s.x, c.offset.x), bn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Be();
      Kt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && ui(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), eo(c.latestValues) && ui(l, c.latestValues);
      }
      return eo(this.latestValues) && ui(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Be();
      Kt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !eo(u.latestValues))
          continue;
        Wp(u.latestValues) && u.updateSnapshot();
        const c = Be(), d = u.measurePageBox();
        Kt(c, d), Ry(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return eo(this.latestValues) && Ry(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = Ge.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Be(), this.relativeTargetOrigin = Be(), Va(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Be(), this.targetWithTransforms = Be()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), oD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Kt(this.target, this.layout.layoutBox), Xw(this.target, this.targetDelta)) : Kt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Be(), this.relativeTargetOrigin = Be(), Va(this.relativeTargetOrigin, this.target, p.target), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          to.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Wp(this.parent.latestValues) || qw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ge.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Kt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      pD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = li(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = li(), this.projectionDeltaWithTransform = li());
      const y = this.projectionTransform;
      Na(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = zy(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), to.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Be(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(rj));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        Ly(d.x, a.x, k), Ly(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Va(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), tj(this.relativeTarget, this.relativeTargetOrigin, f, k), v && zD(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Be()), Kt(v, this.relativeTarget)), y && (this.animationValues = c, ED(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (sn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.update(() => {
        du.hasAnimatedSinceResize = !0, this.currentAnimation = ND(0, Fy, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Fy), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && ak(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Be();
          const d = jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        Kt(s, l), ui(s, c), Na(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new ID()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const u = {};
      for (let c = 0; c < Iy.length; c++) {
        const d = "rotate" + Iy[c];
        l[d] && (u[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return VD;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = cu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = cu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !eo(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = zy(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in qu) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: m } = qu[y], h = u.transform === "none" ? f[y] : S(f[y], d);
        if (m) {
          const v = m.length;
          for (let w = 0; w < v; w++)
            u[m[w]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? cu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Dy), this.root.sharedNodes.clear();
    }
  };
}
function HD(e) {
  e.updateLayout();
}
function UD(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? wr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = jt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : ak(i, r.layoutBox, n) && wr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = jt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = li();
    Na(s, n, r.layoutBox);
    const l = li();
    a ? Na(l, e.applyTransform(o, !0), r.measuredBox) : Na(l, n, r.layoutBox);
    const u = !nk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Be();
          Va(g, r.layoutBox, f.layoutBox);
          const y = Be();
          Va(y, n, p.layoutBox), ok(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function GD(e) {
  to.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function KD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YD(e) {
  e.clearSnapshot();
}
function Dy(e) {
  e.clearMeasurements();
}
function qD(e) {
  e.isLayoutDirty = !1;
}
function XD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function jy(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function QD(e) {
  e.resolveTargetDelta();
}
function ZD(e) {
  e.calcProjection();
}
function JD(e) {
  e.resetRotation();
}
function ej(e) {
  e.removeLeadSnapshot();
}
function Ly(e, t, r) {
  e.translate = $e(t.translate, 0, r), e.scale = $e(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function By(e, t, r, n) {
  e.min = $e(t.min, r.min, n), e.max = $e(t.max, r.max, n);
}
function tj(e, t, r, n) {
  By(e.x, t.x, r.x, n), By(e.y, t.y, r.y, n);
}
function rj(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const nj = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ny = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Vy = Ny("applewebkit/") && !Ny("chrome/") ? Math.round : Fe;
function Wy(e) {
  e.min = Vy(e.min), e.max = Vy(e.max);
}
function oj(e) {
  Wy(e.x), Wy(e.y);
}
function ak(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Np(Oy(t), Oy(r), 0.2);
}
const ij = ik({
  attachResizeListener: (e, t) => qr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), yf = {
  current: void 0
}, sk = ik({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!yf.current) {
      const e = new ij({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), yf.current = e;
    }
    return yf.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), aj = {
  pan: {
    Feature: SD
  },
  drag: {
    Feature: xD,
    ProjectionNode: sk,
    MeasureLayout: ek
  }
}, sj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function lj(e) {
  const t = sj.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Up(e, t, r = 1) {
  const [n, o] = lj(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return Vw(a) ? parseFloat(a) : a;
  } else
    return zp(o) ? Up(o, t, r + 1) : o;
}
function uj(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!zp(i))
      return;
    const a = Up(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!zp(i))
      continue;
    const a = Up(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const cj = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), lk = (e) => cj.has(e), dj = (e) => Object.keys(e).some(lk), Hy = (e) => e === $o || e === W, Uy = (e, t) => parseFloat(e.split(", ")[t]), Gy = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Uy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Uy(i[1], e) : 0;
  }
}, fj = /* @__PURE__ */ new Set(["x", "y", "z"]), pj = Ls.filter((e) => !fj.has(e));
function hj(e) {
  const t = [];
  return pj.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Fi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Gy(4, 13),
  y: Gy(5, 14)
};
Fi.translateX = Fi.x;
Fi.translateY = Fi.y;
const mj = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = Fi[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = Fi[u](l, i);
  }), e;
}, vj = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(lk);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = ua(c);
    const f = t[l];
    let p;
    if (Qu(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = ua(c);
      for (let S = y; S < g && f[S] !== null; S++)
        p ? Am(ua(f[S]) === p) : p = ua(f[S]);
    } else
      p = ua(f);
    if (d !== p)
      if (Hy(d) && Hy(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === W && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = hj(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = mj(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Hc && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function gj(e, t, r, n) {
  return dj(t) ? vj(e, t, r, n) : { target: t, transitionEnd: n };
}
const yj = (e, t, r, n) => {
  const o = uj(e, t, n);
  return t = o.target, n = o.transitionEnd, gj(e, t, r, n);
}, Gp = { current: null }, uk = { current: !1 };
function bj() {
  if (uk.current = !0, !!Hc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Gp.current = e.matches;
      e.addListener(t), t();
    } else
      Gp.current = !1;
}
function xj(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if ($t(i))
      e.addValue(o, i), tc(n) && n.add(o);
    else if ($t(a))
      e.addValue(o, Ii(i, { owner: e })), tc(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ii(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Ky = /* @__PURE__ */ new WeakMap(), ck = Object.keys(bs), Sj = ck.length, Yy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], wj = Sm.length;
class kj {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => ve.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Gc(r), this.isVariantNode = KS(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && $t(f) && (f.set(s[d], !1), tc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Ky.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), uk.current || bj(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Gp.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ky.delete(this.current), this.projection && this.projection.unmount(), sn(this.notifyUpdate), sn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Eo.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ve.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    for (let l = 0; l < Sj; l++) {
      const u = ck[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = bs[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && ai(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Be();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < Yy.length; n++) {
      const o = Yy[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = xj(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < wj; n++) {
      const o = Sm[n], i = this.props[o];
      (ys(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = Ii(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = $m(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !$t(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Lm()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class dk extends kj {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, i) {
    let a = BF(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      jF(this, n, a);
      const s = yj(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function Cj(e) {
  return window.getComputedStyle(e);
}
class _j extends dk {
  readValueFromInstance(t, r) {
    if (Eo.has(r)) {
      const n = zm(r);
      return n && n.default || 0;
    } else {
      const n = Cj(t), o = (QS(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Qw(t, r);
  }
  build(t, r, n, o) {
    Cm(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Em(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $t(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    nw(t, r, n, o);
  }
}
class Pj extends dk {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Eo.has(r)) {
      const n = zm(r);
      return n && n.default || 0;
    }
    return r = ow.has(r) ? r : bm(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Be();
  }
  scrapeMotionValuesFromProps(t, r) {
    return aw(t, r);
  }
  build(t, r, n, o) {
    Pm(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    iw(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Tm(t.tagName), super.mount(t);
  }
}
const Tj = (e, t) => km(e) ? new Pj(t, { enableHardwareAcceleration: !1 }) : new _j(t, { enableHardwareAcceleration: !0 }), Ej = {
  layout: {
    ProjectionNode: sk,
    MeasureLayout: ek
  }
}, $j = {
  ...eD,
  ...wI,
  ...aj,
  ...Ej
}, Ws = /* @__PURE__ */ R4((e, t) => uI(e, t, $j, Tj));
function fk() {
  const e = b.useRef(!1);
  return ym(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Aj() {
  const e = fk(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => ve.postRender(n), [n]), t];
}
class Rj extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Mj({ children: e, isPresent: t }) {
  const r = b.useId(), n = b.useRef(null), o = b.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return b.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !n.current || !i || !a)
      return;
    n.current.dataset.motionPopId = r;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), b.createElement(Rj, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const bf = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = sw(Oj), l = b.useId(), u = b.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [r]
  );
  return b.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [r]), b.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), a === "popLayout" && (e = b.createElement(Mj, { isPresent: r }, e)), b.createElement(js.Provider, { value: u }, e);
};
function Oj() {
  return /* @__PURE__ */ new Map();
}
function zj(e) {
  return b.useEffect(() => () => e(), []);
}
const ro = (e) => e.key || "";
function Ij(e, t) {
  e.forEach((r) => {
    const n = ro(r);
    t.set(n, r);
  });
}
function Fj(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const Xc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(wm).forceRender || Aj()[0], l = fk(), u = Fj(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, g = b.useRef(!0);
  if (ym(() => {
    g.current = !1, Ij(u, p), f.current = c;
  }), zj(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(bf, { key: ro(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const y = f.current.map(ro), S = u.map(ro), m = y.length;
  for (let h = 0; h < m; h++) {
    const v = y[h];
    S.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, v) => {
    if (S.indexOf(v) !== -1)
      return;
    const w = p.get(v);
    if (!w)
      return;
    const k = y.indexOf(v);
    let E = h;
    if (!E) {
      const _ = () => {
        d.delete(v);
        const $ = Array.from(p.keys()).filter((R) => !S.includes(R));
        if ($.forEach((R) => p.delete(R)), f.current = u.filter((R) => {
          const M = ro(R);
          return (
            // filter out the node exiting
            M === v || // filter out the leftover children
            $.includes(M)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      E = b.createElement(bf, { key: ro(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(v, E);
    }
    c.splice(k, 0, E);
  }), c = c.map((h) => {
    const v = h.key;
    return d.has(v) ? h : b.createElement(bf, { key: ro(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var Dj = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, pk = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = Dj,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = wD();
  Yu(() => {
    p || n == null || n();
  }, [p]), Yu(() => {
    f(s);
  }, [s]);
  const g = () => f(null), y = () => f(s), S = () => {
    p && o();
  };
  b.useEffect(() => {
    p && i && o();
  }, [p, i, o]), S4(S, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => b4(a), [a]);
  return /* @__PURE__ */ C.jsx(
    Ws.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: y,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ C.jsx(
        re.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Kr(r, { id: t, onClose: S })
        }
      )
    }
  );
});
pk.displayName = "ToastComponent";
var qy = {
  path: /* @__PURE__ */ C.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ C.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ C.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ C.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Hs = ke((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = ge("chakra-icon", s), d = Fs("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: c,
    __css: f
  }, g = n ?? qy.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ C.jsx(re.svg, { as: r, ...p, ...u });
  const y = a ?? qy.path;
  return /* @__PURE__ */ C.jsx(re.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
Hs.displayName = "Icon";
function jj(e) {
  return /* @__PURE__ */ C.jsx(Hs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function Lj(e) {
  return /* @__PURE__ */ C.jsx(Hs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function Xy(e) {
  return /* @__PURE__ */ C.jsx(Hs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var Bj = OE({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Bm = ke((e, t) => {
  const r = Fs("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Wn(e), u = ge("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${Bj} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ C.jsx(
    re.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ C.jsx(re.span, { srOnly: !0, children: n })
    }
  );
});
Bm.displayName = "Spinner";
var [Nj, Nm] = Wt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [Vj, Vm] = Wt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), hk = {
  info: { icon: Lj, colorScheme: "blue" },
  warning: { icon: Xy, colorScheme: "orange" },
  success: { icon: jj, colorScheme: "green" },
  error: { icon: Xy, colorScheme: "red" },
  loading: { icon: Bm, colorScheme: "blue" }
};
function Wj(e) {
  return hk[e].colorScheme;
}
function Hj(e) {
  return hk[e].icon;
}
var mk = ke(
  function(t, r) {
    const n = Vm(), { status: o } = Nm(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ C.jsx(
      re.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: ge("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
mk.displayName = "AlertDescription";
function vk(e) {
  const { status: t } = Nm(), r = Hj(t), n = Vm(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ C.jsx(
    re.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ge("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ C.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
vk.displayName = "AlertIcon";
var gk = ke(
  function(t, r) {
    const n = Vm(), { status: o } = Nm();
    return /* @__PURE__ */ C.jsx(
      re.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: ge("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
gk.displayName = "AlertTitle";
var yk = ke(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Wn(t), s = (n = t.colorScheme) != null ? n : Wj(o), l = Ds("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ C.jsx(Nj, { value: { status: o }, children: /* @__PURE__ */ C.jsx(Vj, { value: l, children: /* @__PURE__ */ C.jsx(
    re.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: ge("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
yk.displayName = "Alert";
function Uj(e) {
  return /* @__PURE__ */ C.jsx(Hs, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Qc = ke(
  function(t, r) {
    const n = Fs("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Wn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ C.jsx(
      re.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: i,
        __css: {
          ...l,
          ...n,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ C.jsx(Uj, { width: "1em", height: "1em" })
      }
    );
  }
);
Qc.displayName = "CloseButton";
var Gj = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Wa = Kj(Gj);
function Kj(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      n((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = Yj(o, i), { position: s, id: l } = a;
      return n((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && n((a) => {
        const s = { ...a }, { position: l, index: u } = H0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: Xj(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, u) => (l[u] = i[u].map((c) => ({
          ...c,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      n((i) => {
        const a = WS(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!H0(Wa.getState(), o).position
  };
}
var Qy = 0;
function Yj(e, t = {}) {
  var r, n;
  Qy += 1;
  const o = (r = t.id) != null ? r : Qy, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Wa.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var qj = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ C.jsxs(
    yk,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ C.jsx(vk, { children: u }),
        /* @__PURE__ */ C.jsxs(re.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ C.jsx(gk, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ C.jsx(mk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ C.jsx(
          Qc,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function Xj(e = {}) {
  const { render: t, toastComponent: r = qj } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ C.jsx(r, { ...o, ...e });
}
var [Qj, t8] = Wt({
  name: "ToastOptionsContext",
  strict: !1
}), Zj = (e) => {
  const t = b.useSyncExternalStore(
    Wa.subscribe,
    Wa.getState,
    Wa.getState
  ), {
    motionVariants: r,
    component: n = pk,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: x4(s),
        children: /* @__PURE__ */ C.jsx(Xc, { initial: !1, children: l.map((u) => /* @__PURE__ */ C.jsx(
          n,
          {
            motionVariants: r,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ C.jsx(Os, { ...o, children: a });
}, Jj = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ C.jsxs(g4, { theme: n, ...i, children: [
    /* @__PURE__ */ C.jsx(Qj, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ C.jsx(Zj, { ...o })
  ] });
}, eL = Jj(zS);
function tL(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Qt(...e) {
  return (t) => {
    e.forEach((r) => {
      tL(r, t);
    });
  };
}
function rL(...e) {
  return b.useMemo(() => Qt(...e), e);
}
var Kp = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, da = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function Yp(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return da.slideRight;
    case "left":
      return da.slideLeft;
    case "bottom":
      return da.slideDown;
    case "top":
      return da.slideUp;
    default:
      return da.slideRight;
  }
}
var Zy = {
  enter: {
    duration: 0.2,
    ease: Kp.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Kp.easeIn
  }
}, nc = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, nL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : nc.enter(Zy.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : nc.exit(Zy.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, bk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: nL
}, oL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ C.jsx(Xc, { custom: f, children: d && /* @__PURE__ */ C.jsx(
    Ws.div,
    {
      ref: r,
      className: ge("chakra-fade", i),
      custom: f,
      ...bk,
      animate: c,
      ...u
    }
  ) });
});
oL.displayName = "Fade";
var Jy = {
  exit: {
    duration: 0.15,
    ease: Kp.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, iL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Yp({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : nc.exit(Jy.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Yp({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : nc.enter(Jy.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, xk = b.forwardRef(function(t, r) {
  const {
    direction: n = "right",
    style: o,
    unmountOnExit: i,
    in: a,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = Yp({ direction: n }), g = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), y = i ? a && i : !0, S = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ C.jsx(Xc, { custom: m, children: y && /* @__PURE__ */ C.jsx(
    Ws.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: ge("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: m,
      variants: iL,
      style: g,
      ...d
    }
  ) });
});
xk.displayName = "Slide";
function aL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [r8, sL] = Wt({
  strict: !1,
  name: "ButtonGroupContext"
});
function lL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function qp(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ge("chakra-button__icon", r);
  return /* @__PURE__ */ C.jsx(
    re.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: i,
      children: o
    }
  );
}
qp.displayName = "ButtonIcon";
function Xp(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ C.jsx(Bm, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ge("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, n]
  );
  return /* @__PURE__ */ C.jsx(re.div, { className: l, ...s, __css: c, children: o });
}
Xp.displayName = "ButtonSpinner";
var en = ke((e, t) => {
  const r = sL(), n = Fs("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: g = "start",
    className: y,
    as: S,
    ...m
  } = Wn(e), h = b.useMemo(() => {
    const E = { ...n == null ? void 0 : n._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...n,
      ...!!r && { _focus: E }
    };
  }, [n, r]), { ref: v, type: w } = lL(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ C.jsxs(
    re.button,
    {
      ref: rL(t, v),
      as: S,
      type: f ?? w,
      "data-active": Sr(a),
      "data-loading": Sr(i),
      __css: h,
      className: ge("chakra-button", y),
      ...m,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ C.jsx(
          Xp,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ C.jsx(re.span, { opacity: 0, children: /* @__PURE__ */ C.jsx(e1, { ...k }) }) : /* @__PURE__ */ C.jsx(e1, { ...k }),
        i && g === "end" && /* @__PURE__ */ C.jsx(
          Xp,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
en.displayName = "Button";
function e1(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    t && /* @__PURE__ */ C.jsx(qp, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ C.jsx(qp, { marginStart: o, children: r })
  ] });
}
var [uL, cL] = Wt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [dL, Sk] = Wt({
  strict: !1,
  name: "FormControlContext"
});
function fL(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [g, y] = b.useState(!1), [S, m] = b.useState(!1), h = b.useCallback(
    (_ = {}, $ = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qt($, (R) => {
        R && y(!0);
      })
    }),
    [d]
  ), v = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ref: $,
      "data-focus": Sr(S),
      "data-disabled": Sr(o),
      "data-invalid": Sr(n),
      "data-readonly": Sr(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, S, n, i, u]
  ), w = b.useCallback(
    (_ = {}, $ = null) => ({
      id: c,
      ..._,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qt($, (R) => {
        R && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ...a,
      ref: $,
      role: "group",
      "data-focus": Sr(S),
      "data-disabled": Sr(o),
      "data-invalid": Sr(n),
      "data-readonly": Sr(i)
    }),
    [a, o, S, n, i]
  ), E = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ref: $,
      role: "presentation",
      "aria-hidden": !0,
      children: _.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: g,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: v,
    getRequiredIndicatorProps: E
  };
}
var pL = ke(
  function(t, r) {
    const n = Ds("Form", t), o = Wn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = fL(o), l = ge("chakra-form-control", t.className);
    return /* @__PURE__ */ C.jsx(dL, { value: s, children: /* @__PURE__ */ C.jsx(uL, { value: n, children: /* @__PURE__ */ C.jsx(
      re.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
pL.displayName = "FormControl";
var hL = ke(
  function(t, r) {
    const n = Sk(), o = cL(), i = ge("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ C.jsx(
      re.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
hL.displayName = "FormHelperText";
function mL(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = vL(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Nd(r),
    "aria-required": Nd(o),
    "aria-readonly": Nd(n)
  };
}
function vL(e) {
  var t, r, n;
  const o = Sk(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: g,
    ...y
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...y,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: tt(o == null ? void 0 : o.onFocus, p),
    onBlur: tt(o == null ? void 0 : o.onBlur, g)
  };
}
function Wm(e, t, r, n) {
  const o = Ku(r);
  return b.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !i))
      return i.addEventListener(t, o, n), () => {
        i.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, n);
  };
}
function gL(e) {
  return "current" in e;
}
var wk = () => typeof window < "u";
function yL() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var bL = (e) => wk() && e.test(navigator.vendor), xL = (e) => wk() && e.test(yL()), SL = () => xL(/mac|iphone|ipad|ipod/i), wL = () => SL() && bL(/apple/i);
function kL(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Wm(o, "pointerdown", (i) => {
    if (!wL() || !n)
      return;
    const a = i.target, l = (r ?? [t]).some((u) => {
      const c = gL(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function CL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var kk = { exports: {} }, _L = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", PL = _L, TL = PL;
function Ck() {
}
function _k() {
}
_k.resetWarningCache = Ck;
var EL = function() {
  function e(n, o, i, a, s, l) {
    if (l !== TL) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: _k,
    resetWarningCache: Ck
  };
  return r.PropTypes = r, r;
};
kk.exports = EL();
var $L = kk.exports;
const Qn = /* @__PURE__ */ Ps($L);
var Qp = "data-focus-lock", Pk = "data-focus-lock-disabled", AL = "data-no-focus-lock", RL = "data-autofocus-inside", ML = "data-no-autofocus";
function OL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function zL(e, t) {
  var r = b.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function Tk(e, t) {
  return zL(t || null, function(r) {
    return e.forEach(function(n) {
      return OL(n, r);
    });
  });
}
var xf = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Tr = function() {
  return Tr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Tr.apply(this, arguments);
};
function Ek(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function IL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function $k(e) {
  return e;
}
function Ak(e, t) {
  t === void 0 && (t = $k);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, n);
      return r.push(a), function() {
        r = r.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(i);
      }
      r = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var a = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(i), a = r;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), r;
        }
      };
    }
  };
  return o;
}
function Hm(e, t) {
  return t === void 0 && (t = $k), Ak(e, t);
}
function Rk(e) {
  e === void 0 && (e = {});
  var t = Ak(null);
  return t.options = Tr({ async: !0, ssr: !1 }, e), t;
}
var Mk = function(e) {
  var t = e.sideCar, r = Ek(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, Tr({}, r));
};
Mk.isSideCarExport = !0;
function FL(e, t) {
  return e.useMedium(t), Mk;
}
var Ok = Hm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), zk = Hm(), DL = Hm(), jL = Rk({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), LL = [], Um = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, m = t.className, h = t.whiteList, v = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? LL : w, E = t.as, _ = E === void 0 ? "div" : E, $ = t.lockProps, R = $ === void 0 ? {} : $, M = t.sideCar, j = t.returnFocus, ee = t.focusOptions, U = t.onActivation, G = t.onDeactivation, K = b.useState({}), Y = K[0], oe = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && U && U(s.current), l.current = !0;
  }, [U]), z = b.useCallback(function() {
    l.current = !1, G && G(s.current);
  }, [G]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var D = b.useCallback(function(be) {
    var Te = u.current;
    if (Te && Te.focus) {
      var Oe = typeof j == "function" ? j(Te) : j;
      if (Oe) {
        var Xe = typeof Oe == "object" ? Oe : void 0;
        u.current = null, be ? Promise.resolve().then(function() {
          return Te.focus(Xe);
        }) : Te.focus(Xe);
      }
    }
  }, [j]), B = b.useCallback(function(be) {
    l.current && Ok.useMedium(be);
  }, []), L = zk.useMedium, q = b.useCallback(function(be) {
    s.current !== be && (s.current = be, a(be));
  }, []), H = Co((n = {}, n[Pk] = d && "disabled", n[Qp] = S, n), R), he = f !== !0, Me = he && f !== "tail", ce = Tk([r, q]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, he && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: xf
    }),
    // first tabbed element guard
    v ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: xf
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(M, {
    id: Y,
    sideCar: jL,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: h,
    shards: k,
    onActivation: oe,
    onDeactivation: z,
    returnFocus: D,
    focusOptions: ee
  }), /* @__PURE__ */ b.createElement(_, Co({
    ref: ce
  }, H, {
    className: m,
    onBlur: L,
    onFocus: B
  }), c), Me && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: xf
  }));
});
Um.propTypes = {};
Um.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const Ik = Um;
function Zp(e, t) {
  return Zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Zp(e, t);
}
function BL(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zp(e, t);
}
function Ss(e) {
  "@babel/helpers - typeof";
  return Ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ss(e);
}
function NL(e, t) {
  if (Ss(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ss(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VL(e) {
  var t = NL(e, "string");
  return Ss(t) === "symbol" ? t : String(t);
}
function WL(e, t, r) {
  return t = VL(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function HL(e, t) {
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      BL(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return a;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        i.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = i.indexOf(this);
        i.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ yo.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return WL(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Fr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, oc = function(e) {
  return Array.isArray(e) ? e : [e];
}, Fk = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, UL = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Dk = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, jk = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, GL = function(e, t) {
  return !e || jk(e) || !UL(e) && t(Dk(e));
}, Lk = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = GL(t, Lk.bind(void 0, e));
  return e.set(t, n), n;
}, KL = function(e, t) {
  return e && !jk(e) ? XL(e) ? t(Dk(e)) : !1 : !0;
}, Bk = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = KL(t, Bk.bind(void 0, e));
  return e.set(t, n), n;
}, Nk = function(e) {
  return e.dataset;
}, YL = function(e) {
  return e.tagName === "BUTTON";
}, Vk = function(e) {
  return e.tagName === "INPUT";
}, Wk = function(e) {
  return Vk(e) && e.type === "radio";
}, qL = function(e) {
  return !((Vk(e) || YL(e)) && (e.type === "hidden" || e.disabled));
}, XL = function(e) {
  var t = e.getAttribute(ML);
  return ![!0, "true", ""].includes(t);
}, Gm = function(e) {
  var t;
  return !!(e && (!((t = Nk(e)) === null || t === void 0) && t.focusGuard));
}, ic = function(e) {
  return !Gm(e);
}, QL = function(e) {
  return !!e;
}, ZL = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Hk = function(e, t, r) {
  return Fr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(ZL);
}, JL = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], Km = JL.join(","), eB = "".concat(Km, ", [data-focus-guard]"), Uk = function(e, t) {
  return Fr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? eB : Km) ? [n] : [], Uk(n));
  }, []);
}, tB = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Zc([e.contentDocument.body], t) : [e];
}, Zc = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = Uk(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return tB(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? Fr(n.parentNode.querySelectorAll(Km)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, rB = function(e) {
  var t = e.querySelectorAll("[".concat(RL, "]"));
  return Fr(t).map(function(r) {
    return Zc([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Ym = function(e, t) {
  return Fr(e).filter(function(r) {
    return Lk(t, r);
  }).filter(function(r) {
    return qL(r);
  });
}, t1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Fr(e).filter(function(r) {
    return Bk(t, r);
  });
}, Jp = function(e, t, r) {
  return Hk(Ym(Zc(e, r), t), !0, r);
}, r1 = function(e, t) {
  return Hk(Ym(Zc(e), t), !1);
}, nB = function(e, t) {
  return Ym(rB(e), t);
}, wi = function(e, t) {
  return e.shadowRoot ? wi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Fr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? wi(o, t) : !1;
    }
    return wi(r, t);
  });
}, oB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, Gk = function(e) {
  return e.parentNode ? Gk(e.parentNode) : e;
}, qm = function(e) {
  var t = oc(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(Qp);
    return r.push.apply(r, o ? oB(Fr(Gk(n).querySelectorAll("[".concat(Qp, '="').concat(o, '"]:not([').concat(Pk, '="disabled"])')))) : [n]), r;
  }, []);
}, iB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ws = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ws(t.shadowRoot) : t instanceof HTMLIFrameElement && iB(function() {
      return t.contentWindow.document;
    }) ? ws(t.contentWindow.document) : t;
  }
}, aB = function(e, t) {
  return e === t;
}, sB = function(e, t) {
  return !!Fr(e.querySelectorAll("iframe")).some(function(r) {
    return aB(r, t);
  });
}, Kk = function(e, t) {
  return t === void 0 && (t = ws(Fk(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : qm(e).some(function(r) {
    return wi(r, t) || sB(r, t);
  });
}, lB = function(e) {
  e === void 0 && (e = document);
  var t = ws(e);
  return t ? Fr(e.querySelectorAll("[".concat(AL, "]"))).some(function(r) {
    return wi(r, t);
  }) : !1;
}, uB = function(e, t) {
  return t.filter(Wk).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, Xm = function(e, t) {
  return Wk(e) && e.name ? uB(e, t) : e;
}, cB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(Xm(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, n1 = function(e) {
  return e[0] && e.length > 1 ? Xm(e[0], e) : e[0];
}, o1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Xm(e[t], e)) : t;
}, Yk = "NEW_FOCUS", dB = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = Gm(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = cB(t), y = r !== void 0 ? g.indexOf(r) : -1, S = y - (n ? g.indexOf(n) : l), m = o1(e, 0), h = o1(e, o - 1);
    if (l === -1 || c === -1)
      return Yk;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, fB = function(e) {
  return function(t) {
    var r, n = (r = Nk(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, pB = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = t1(n.filter(fB(r)));
  return o && o.length ? n1(o) : n1(t1(t));
}, eh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && eh(e.parentNode.host || e.parentNode, t), t;
}, Sf = function(e, t) {
  for (var r = eh(e), n = eh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, qk = function(e, t, r) {
  var n = oc(e), o = oc(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Sf(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Sf(i, l);
      u && (!a || wi(u, a) ? a = u : a = Sf(u, a));
    });
  }), a;
}, hB = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(nB(n, t));
  }, []);
}, mB = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(QL);
}, vB = function(e, t) {
  var r = ws(oc(e).length > 0 ? document : Fk(e).ownerDocument), n = qm(e).filter(ic), o = qk(r || e, e, n), i = /* @__PURE__ */ new Map(), a = r1(n, i), s = Jp(n, i).filter(function(p) {
    var g = p.node;
    return ic(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = r1([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = mB(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = dB(c, l, r, t);
    if (d === Yk) {
      var f = pB(a, c, hB(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, gB = function(e) {
  var t = qm(e).filter(ic), r = qk(e, e, t), n = /* @__PURE__ */ new Map(), o = Jp([r], n, !0), i = Jp(t, n).filter(function(a) {
    var s = a.node;
    return ic(s);
  }).map(function(a) {
    var s = a.node;
    return s;
  });
  return o.map(function(a) {
    var s = a.node, l = a.index;
    return {
      node: s,
      index: l,
      lockItem: i.indexOf(s) >= 0,
      guard: Gm(s)
    };
  });
}, yB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, wf = 0, kf = !1, Xk = function(e, t, r) {
  r === void 0 && (r = {});
  var n = vB(e, t);
  if (!kf && n) {
    if (wf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), kf = !0, setTimeout(function() {
        kf = !1;
      }, 1);
      return;
    }
    wf++, yB(n.node, r.focusOptions), wf--;
  }
};
function Qm(e) {
  setTimeout(e, 1);
}
var bB = function() {
  return document && document.activeElement === document.body;
}, xB = function() {
  return bB() || lB();
}, ki = null, ci = null, Ci = null, ks = !1, SB = function() {
  return !0;
}, wB = function(t) {
  return (ki.whiteList || SB)(t);
}, kB = function(t, r) {
  Ci = {
    observerNode: t,
    portaledElement: r
  };
}, CB = function(t) {
  return Ci && Ci.portaledElement === t;
};
function i1(e, t, r, n) {
  var o = null, i = e;
  do {
    var a = n[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += r) !== t);
  o && (o.node.tabIndex = 0);
}
var _B = function(t) {
  return t && "current" in t ? t.current : t;
}, PB = function(t) {
  return t ? !!ks : ks === "meanwhile";
}, TB = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, EB = function(t, r) {
  return r.some(function(n) {
    return TB(t, n, n);
  });
}, ac = function() {
  var t = !1;
  if (ki) {
    var r = ki, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Ci && Ci.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(_B).filter(Boolean));
      if ((!c || wB(c)) && (o || PB(s) || !xB() || !ci && i) && (u && !// active element is "inside" working area
      (Kk(d) || // check for shadow-dom contained elements
      c && EB(c, d) || CB(c)) && (document && !ci && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = Xk(d, ci, {
        focusOptions: l
      }), Ci = {})), ks = !1, ci = document && document.activeElement), document) {
        var f = document && document.activeElement, p = gB(d), g = p.map(function(y) {
          var S = y.node;
          return S;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var S = y.guard, m = y.node;
          return S && m.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var S = y.node;
          return S.removeAttribute("tabIndex");
        }), i1(g, p.length, 1, p), i1(g, -1, -1, p));
      }
    }
  }
  return t;
}, Qk = function(t) {
  ac() && t && (t.stopPropagation(), t.preventDefault());
}, Zm = function() {
  return Qm(ac);
}, $B = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || kB(n, r);
}, AB = function() {
  return null;
}, Zk = function() {
  ks = "just", Qm(function() {
    ks = "meanwhile";
  });
}, RB = function() {
  document.addEventListener("focusin", Qk), document.addEventListener("focusout", Zm), window.addEventListener("blur", Zk);
}, MB = function() {
  document.removeEventListener("focusin", Qk), document.removeEventListener("focusout", Zm), window.removeEventListener("blur", Zk);
};
function OB(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function zB(e) {
  var t = e.slice(-1)[0];
  t && !ki && RB();
  var r = ki, n = r && t && t.id === r.id;
  ki = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (ci = null, (!n || r.observed !== t.observed) && t.onActivation(), ac(), Qm(ac)) : (MB(), ci = null);
}
Ok.assignSyncMedium($B);
zk.assignMedium(Zm);
DL.assignMedium(function(e) {
  return e({
    moveFocusInside: Xk,
    focusInside: Kk
  });
});
const IB = HL(OB, zB)(AB);
var Jk = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(Ik, Co({
    sideCar: IB,
    ref: r
  }, t));
}), eC = Ik.propTypes || {};
eC.sideCar;
CL(eC, ["sideCar"]);
Jk.propTypes = {};
const a1 = Jk;
function tC(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function rC(e) {
  var t;
  if (!tC(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function FB(e) {
  var t, r;
  return (r = (t = nC(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function nC(e) {
  return tC(e) ? e.ownerDocument : document;
}
function DB(e) {
  return nC(e).activeElement;
}
var oC = (e) => e.hasAttribute("tabindex"), jB = (e) => oC(e) && e.tabIndex === -1;
function LB(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function iC(e) {
  return e.parentElement && iC(e.parentElement) ? !0 : e.hidden;
}
function BB(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function aC(e) {
  if (!rC(e) || iC(e) || LB(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : BB(e) ? !0 : oC(e);
}
function NB(e) {
  return e ? rC(e) && aC(e) && !jB(e) : !1;
}
var VB = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], WB = VB.join(), HB = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function sC(e) {
  const t = Array.from(
    e.querySelectorAll(WB)
  );
  return t.unshift(e), t.filter((r) => aC(r) && HB(r));
}
var s1, UB = (s1 = a1.default) != null ? s1 : a1, lC = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = b.useCallback(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && sC(n.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = n.current) == null || g.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ C.jsx(
    UB,
    {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i
    }
  );
};
lC.displayName = "FocusLock";
var Jc = ke(function(t, r) {
  const { htmlSize: n, ...o } = t, i = Ds("Input", o), a = Wn(o), s = mL(a), l = ge("chakra-input", t.className);
  return /* @__PURE__ */ C.jsx(
    re.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
Jc.displayName = "Input";
Jc.id = "Input";
function GB(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : tr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var co = ke(function(t, r) {
  const n = Fs("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Wn(t), u = r4({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ C.jsx(
    re.p,
    {
      ref: r,
      className: ge("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
co.displayName = "Text";
var uC = (e) => /* @__PURE__ */ C.jsx(
  re.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
uC.displayName = "StackItem";
function KB(e) {
  const { spacing: t, direction: r } = e, n = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": GB(
      r,
      (o) => n[o]
    )
  };
}
var cC = ke((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", g = b.useMemo(
    () => KB({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, S = !d && !y, m = b.useMemo(() => {
    const v = aL(l);
    return S ? v : v.map((w, k) => {
      const E = typeof w.key < "u" ? w.key : k, _ = k + 1 === v.length, R = d ? /* @__PURE__ */ C.jsx(uC, { children: w }, E) : w;
      if (!y)
        return R;
      const M = b.cloneElement(
        u,
        {
          __css: g
        }
      ), j = _ ? null : M;
      return /* @__PURE__ */ C.jsxs(b.Fragment, { children: [
        R,
        j
      ] }, E);
    });
  }, [
    u,
    g,
    y,
    S,
    d,
    l
  ]), h = ge("chakra-stack", c);
  return /* @__PURE__ */ C.jsx(
    re.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: y ? void 0 : a,
      className: h,
      ...f,
      children: m
    }
  );
});
cC.displayName = "Stack";
var Er = ke((e, t) => /* @__PURE__ */ C.jsx(cC, { align: "center", ...e, direction: "row", ref: t }));
Er.displayName = "HStack";
var ed = re("div");
ed.displayName = "Box";
var dC = ke(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ C.jsx(
    ed,
    {
      ref: r,
      boxSize: n,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
dC.displayName = "Square";
var YB = ke(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ C.jsx(dC, { size: n, ref: r, borderRadius: "9999px", ...o });
});
YB.displayName = "Circle";
function qB(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = DB(t);
  return !r || t.contains(r) ? !1 : !!NB(r);
}
function XB(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  Yu(() => {
    if (!i || qB(e))
      return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return s = requestAnimationFrame(() => {
        a.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [i, e, o]);
}
var QB = {
  preventScroll: !0,
  shouldFocus: !1
};
function ZB(e, t = QB) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, a = JB(e) ? e.current : e, s = o && i, l = b.useRef(s), u = b.useRef(i);
  ps(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = b.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = sC(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, a, r]);
  Yu(() => {
    c();
  }, [c]), Wm(a, "transitionend", c);
}
function JB(e) {
  return "current" in e;
}
var Do = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), dt = {
  arrowShadowColor: Do("--popper-arrow-shadow-color"),
  arrowSize: Do("--popper-arrow-size", "8px"),
  arrowSizeHalf: Do("--popper-arrow-size-half"),
  arrowBg: Do("--popper-arrow-bg"),
  transformOrigin: Do("--popper-transform-origin"),
  arrowOffset: Do("--popper-arrow-offset")
};
function eN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var tN = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, rN = (e) => tN[e], l1 = {
  scroll: !0,
  resize: !0
};
function nN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...l1, ...e }
  } : t = {
    enabled: e,
    options: l1
  }, t;
}
var oN = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, iN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    u1(e);
  },
  effect: ({ state: e }) => () => {
    u1(e);
  }
}, u1 = (e) => {
  e.elements.popper.style.setProperty(
    dt.transformOrigin.var,
    rN(e.placement)
  );
}, aN = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    sN(e);
  }
}, sN = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = lN(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: dt.arrowSize.varRef,
      height: dt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [dt.arrowSizeHalf.var]: `calc(${dt.arrowSize.varRef} / 2 - 1px)`,
      [dt.arrowOffset.var]: `calc(${dt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, lN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: dt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: dt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: dt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: dt.arrowOffset.varRef };
}, uN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    c1(e);
  },
  effect: ({ state: e }) => () => {
    c1(e);
  }
}, c1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = eN(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: dt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, cN = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, dN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function fN(e, t = "ltr") {
  var r, n;
  const o = ((r = cN[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = dN[e]) != null ? n : o;
}
var Pt = "top", ir = "bottom", ar = "right", Tt = "left", Jm = "auto", Us = [Pt, ir, ar, Tt], Di = "start", Cs = "end", pN = "clippingParents", fC = "viewport", fa = "popper", hN = "reference", d1 = /* @__PURE__ */ Us.reduce(function(e, t) {
  return e.concat([t + "-" + Di, t + "-" + Cs]);
}, []), pC = /* @__PURE__ */ [].concat(Us, [Jm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Di, t + "-" + Cs]);
}, []), mN = "beforeRead", vN = "read", gN = "afterRead", yN = "beforeMain", bN = "main", xN = "afterMain", SN = "beforeWrite", wN = "write", kN = "afterWrite", CN = [mN, vN, gN, yN, bN, xN, SN, wN, kN];
function Ir(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Lt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _o(e) {
  var t = Lt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rr(e) {
  var t = Lt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ev(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _N(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !rr(i) || !Ir(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function PN(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !rr(o) || !Ir(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const TN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _N,
  effect: PN,
  requires: ["computeStyles"]
};
function zr(e) {
  return e.split("-")[0];
}
var go = Math.max, sc = Math.min, ji = Math.round;
function th() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hC() {
  return !/^((?!chrome|android).)*safari/i.test(th());
}
function Li(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && rr(e) && (o = e.offsetWidth > 0 && ji(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ji(n.height) / e.offsetHeight || 1);
  var a = _o(e) ? Lt(e) : window, s = a.visualViewport, l = !hC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function tv(e) {
  var t = Li(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function mC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ev(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ln(e) {
  return Lt(e).getComputedStyle(e);
}
function EN(e) {
  return ["table", "td", "th"].indexOf(Ir(e)) >= 0;
}
function Un(e) {
  return ((_o(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function td(e) {
  return Ir(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ev(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Un(e)
  );
}
function f1(e) {
  return !rr(e) || // https://github.com/popperjs/popper-core/issues/837
  ln(e).position === "fixed" ? null : e.offsetParent;
}
function $N(e) {
  var t = /firefox/i.test(th()), r = /Trident/i.test(th());
  if (r && rr(e)) {
    var n = ln(e);
    if (n.position === "fixed")
      return null;
  }
  var o = td(e);
  for (ev(o) && (o = o.host); rr(o) && ["html", "body"].indexOf(Ir(o)) < 0; ) {
    var i = ln(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Gs(e) {
  for (var t = Lt(e), r = f1(e); r && EN(r) && ln(r).position === "static"; )
    r = f1(r);
  return r && (Ir(r) === "html" || Ir(r) === "body" && ln(r).position === "static") ? t : r || $N(e) || t;
}
function rv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ha(e, t, r) {
  return go(e, sc(t, r));
}
function AN(e, t, r) {
  var n = Ha(e, t, r);
  return n > r ? r : n;
}
function vC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gC(e) {
  return Object.assign({}, vC(), e);
}
function yC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var RN = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, gC(typeof t != "number" ? t : yC(t, Us));
};
function MN(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = zr(r.placement), l = rv(s), u = [Tt, ar].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = RN(o.padding, r), f = tv(i), p = l === "y" ? Pt : Tt, g = l === "y" ? ir : ar, y = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], S = a[l] - r.rects.reference[l], m = Gs(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, v = y / 2 - S / 2, w = d[p], k = h - f[c] - d[g], E = h / 2 - f[c] / 2 + v, _ = Ha(w, E, k), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = _, t.centerOffset = _ - E, t);
  }
}
function ON(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || mC(t.elements.popper, o) && (t.elements.arrow = o));
}
const zN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: MN,
  effect: ON,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Bi(e) {
  return e.split("-")[1];
}
var IN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function FN(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ji(r * o) / o || 0,
    y: ji(n * o) / o || 0
  };
}
function p1(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, y = g === void 0 ? 0 : g, S = typeof c == "function" ? c({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = S.x, y = S.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), v = Tt, w = Pt, k = window;
  if (u) {
    var E = Gs(r), _ = "clientHeight", $ = "clientWidth";
    if (E === Lt(r) && (E = Un(r), ln(E).position !== "static" && s === "absolute" && (_ = "scrollHeight", $ = "scrollWidth")), E = E, o === Pt || (o === Tt || o === ar) && i === Cs) {
      w = ir;
      var R = d && E === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[_]
      );
      y -= R - n.height, y *= l ? 1 : -1;
    }
    if (o === Tt || (o === Pt || o === ir) && i === Cs) {
      v = ar;
      var M = d && E === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[$]
      );
      p -= M - n.width, p *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: s
  }, u && IN), ee = c === !0 ? FN({
    x: p,
    y
  }, Lt(r)) : {
    x: p,
    y
  };
  if (p = ee.x, y = ee.y, l) {
    var U;
    return Object.assign({}, j, (U = {}, U[w] = h ? "0" : "", U[v] = m ? "0" : "", U.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", U));
  }
  return Object.assign({}, j, (t = {}, t[w] = h ? y + "px" : "", t[v] = m ? p + "px" : "", t.transform = "", t));
}
function DN(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: zr(t.placement),
    variation: Bi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, p1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, p1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const jN = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: DN,
  data: {}
};
var Ml = {
  passive: !0
};
function LN(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = Lt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ml);
  }), s && l.addEventListener("resize", r.update, Ml), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ml);
    }), s && l.removeEventListener("resize", r.update, Ml);
  };
}
const BN = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: LN,
  data: {}
};
var NN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return NN[t];
  });
}
var VN = {
  start: "end",
  end: "start"
};
function h1(e) {
  return e.replace(/start|end/g, function(t) {
    return VN[t];
  });
}
function nv(e) {
  var t = Lt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ov(e) {
  return Li(Un(e)).left + nv(e).scrollLeft;
}
function WN(e, t) {
  var r = Lt(e), n = Un(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = hC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + ov(e),
    y: l
  };
}
function HN(e) {
  var t, r = Un(e), n = nv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = go(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = go(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + ov(e), l = -n.scrollTop;
  return ln(o || r).direction === "rtl" && (s += go(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function iv(e) {
  var t = ln(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function bC(e) {
  return ["html", "body", "#document"].indexOf(Ir(e)) >= 0 ? e.ownerDocument.body : rr(e) && iv(e) ? e : bC(td(e));
}
function Ua(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = bC(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Lt(n), a = o ? [i].concat(i.visualViewport || [], iv(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ua(td(a)))
  );
}
function rh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function UN(e, t) {
  var r = Li(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function m1(e, t, r) {
  return t === fC ? rh(WN(e, r)) : _o(t) ? UN(t, r) : rh(HN(Un(e)));
}
function GN(e) {
  var t = Ua(td(e)), r = ["absolute", "fixed"].indexOf(ln(e).position) >= 0, n = r && rr(e) ? Gs(e) : e;
  return _o(n) ? t.filter(function(o) {
    return _o(o) && mC(o, n) && Ir(o) !== "body";
  }) : [];
}
function KN(e, t, r, n) {
  var o = t === "clippingParents" ? GN(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, u) {
    var c = m1(e, u, n);
    return l.top = go(c.top, l.top), l.right = sc(c.right, l.right), l.bottom = sc(c.bottom, l.bottom), l.left = go(c.left, l.left), l;
  }, m1(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function xC(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? zr(n) : null, i = n ? Bi(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Pt:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ir:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ar:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Tt:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? rv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Di:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Cs:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function _s(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? pN : s, u = r.rootBoundary, c = u === void 0 ? fC : u, d = r.elementContext, f = d === void 0 ? fa : d, p = r.altBoundary, g = p === void 0 ? !1 : p, y = r.padding, S = y === void 0 ? 0 : y, m = gC(typeof S != "number" ? S : yC(S, Us)), h = f === fa ? hN : fa, v = e.rects.popper, w = e.elements[g ? h : f], k = KN(_o(w) ? w : w.contextElement || Un(e.elements.popper), l, c, a), E = Li(e.elements.reference), _ = xC({
    reference: E,
    element: v,
    strategy: "absolute",
    placement: o
  }), $ = rh(Object.assign({}, v, _)), R = f === fa ? $ : E, M = {
    top: k.top - R.top + m.top,
    bottom: R.bottom - k.bottom + m.bottom,
    left: k.left - R.left + m.left,
    right: R.right - k.right + m.right
  }, j = e.modifiersData.offset;
  if (f === fa && j) {
    var ee = j[o];
    Object.keys(M).forEach(function(U) {
      var G = [ar, ir].indexOf(U) >= 0 ? 1 : -1, K = [Pt, ir].indexOf(U) >= 0 ? "y" : "x";
      M[U] += ee[K] * G;
    });
  }
  return M;
}
function YN(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? pC : l, c = Bi(n), d = c ? s ? d1 : d1.filter(function(g) {
    return Bi(g) === c;
  }) : Us, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, y) {
    return g[y] = _s(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[zr(y)], g;
  }, {});
  return Object.keys(p).sort(function(g, y) {
    return p[g] - p[y];
  });
}
function qN(e) {
  if (zr(e) === Jm)
    return [];
  var t = fu(e);
  return [h1(e), t, h1(t)];
}
function XN(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, g = p === void 0 ? !0 : p, y = r.allowedAutoPlacements, S = t.options.placement, m = zr(S), h = m === S, v = l || (h || !g ? [fu(S)] : qN(S)), w = [S].concat(v).reduce(function(he, Me) {
      return he.concat(zr(Me) === Jm ? YN(t, {
        placement: Me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : Me);
    }, []), k = t.rects.reference, E = t.rects.popper, _ = /* @__PURE__ */ new Map(), $ = !0, R = w[0], M = 0; M < w.length; M++) {
      var j = w[M], ee = zr(j), U = Bi(j) === Di, G = [Pt, ir].indexOf(ee) >= 0, K = G ? "width" : "height", Y = _s(t, {
        placement: j,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), oe = G ? U ? ar : Tt : U ? ir : Pt;
      k[K] > E[K] && (oe = fu(oe));
      var z = fu(oe), D = [];
      if (i && D.push(Y[ee] <= 0), s && D.push(Y[oe] <= 0, Y[z] <= 0), D.every(function(he) {
        return he;
      })) {
        R = j, $ = !1;
        break;
      }
      _.set(j, D);
    }
    if ($)
      for (var B = g ? 3 : 1, L = function(Me) {
        var ce = w.find(function(be) {
          var Te = _.get(be);
          if (Te)
            return Te.slice(0, Me).every(function(Oe) {
              return Oe;
            });
        });
        if (ce)
          return R = ce, "break";
      }, q = B; q > 0; q--) {
        var H = L(q);
        if (H === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const QN = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: XN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function v1(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function g1(e) {
  return [Pt, ar, ir, Tt].some(function(t) {
    return e[t] >= 0;
  });
}
function ZN(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = _s(t, {
    elementContext: "reference"
  }), s = _s(t, {
    altBoundary: !0
  }), l = v1(a, n), u = v1(s, o, i), c = g1(l), d = g1(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const JN = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ZN
};
function e6(e, t, r) {
  var n = zr(e), o = [Tt, Pt].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Tt, ar].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function t6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = pC.reduce(function(c, d) {
    return c[d] = e6(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const r6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: t6
};
function n6(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = xC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const o6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: n6,
  data: {}
};
function i6(e) {
  return e === "x" ? "y" : "x";
}
function a6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, g = r.tetherOffset, y = g === void 0 ? 0 : g, S = _s(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = zr(t.placement), h = Bi(t.placement), v = !h, w = rv(m), k = i6(w), E = t.modifiersData.popperOffsets, _ = t.rects.reference, $ = t.rects.popper, R = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, M = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var U, G = w === "y" ? Pt : Tt, K = w === "y" ? ir : ar, Y = w === "y" ? "height" : "width", oe = E[w], z = oe + S[G], D = oe - S[K], B = p ? -$[Y] / 2 : 0, L = h === Di ? _[Y] : $[Y], q = h === Di ? -$[Y] : -_[Y], H = t.elements.arrow, he = p && H ? tv(H) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vC(), ce = Me[G], be = Me[K], Te = Ha(0, _[Y], he[Y]), Oe = v ? _[Y] / 2 - B - Te - ce - M.mainAxis : L - Te - ce - M.mainAxis, Xe = v ? -_[Y] / 2 + B + Te + be + M.mainAxis : q + Te + be + M.mainAxis, Qe = t.elements.arrow && Gs(t.elements.arrow), Dr = Qe ? w === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, jr = (U = j == null ? void 0 : j[w]) != null ? U : 0, Gi = oe + Oe - jr - Dr, ne = oe + Xe - jr, it = Ha(p ? sc(z, Gi) : z, oe, p ? go(D, ne) : D);
      E[w] = it, ee[w] = it - oe;
    }
    if (s) {
      var De, At = w === "x" ? Pt : Tt, cn = w === "x" ? ir : ar, at = E[k], vr = k === "y" ? "height" : "width", dn = at + S[At], Ht = at - S[cn], Mo = [Pt, Tt].indexOf(m) !== -1, Ki = (De = j == null ? void 0 : j[k]) != null ? De : 0, qs = Mo ? dn : at - _[vr] - $[vr] - Ki + M.altAxis, Xs = Mo ? at + _[vr] + $[vr] - Ki - M.altAxis : Ht, Gn = p && Mo ? AN(qs, at, Xs) : Ha(p ? qs : dn, at, p ? Xs : Ht);
      E[k] = Gn, ee[k] = Gn - at;
    }
    t.modifiersData[n] = ee;
  }
}
const s6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: a6,
  requiresIfExists: ["offset"]
};
function l6(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function u6(e) {
  return e === Lt(e) || !rr(e) ? nv(e) : l6(e);
}
function c6(e) {
  var t = e.getBoundingClientRect(), r = ji(t.width) / e.offsetWidth || 1, n = ji(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function d6(e, t, r) {
  r === void 0 && (r = !1);
  var n = rr(t), o = rr(t) && c6(t), i = Un(t), a = Li(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ir(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  iv(i)) && (s = u6(t)), rr(t) ? (l = Li(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = ov(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function f6(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function p6(e) {
  var t = f6(e);
  return CN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function h6(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function m6(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var y1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function b1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function v6(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? y1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, y1, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        y(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: _o(s) ? Ua(s) : s.contextElement ? Ua(s.contextElement) : [],
          popper: Ua(l)
        };
        var v = p6(m6([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, v = m.popper;
          if (b1(h, v)) {
            c.rects = {
              reference: d6(h, Gs(v), c.options.strategy === "fixed"),
              popper: tv(v)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var k = c.orderedModifiers[w], E = k.fn, _ = k.options, $ = _ === void 0 ? {} : _, R = k.name;
              typeof E == "function" && (c = E({
                state: c,
                options: $,
                name: R,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: h6(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!b1(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function g() {
      c.orderedModifiers.forEach(function(S) {
        var m = S.name, h = S.options, v = h === void 0 ? {} : h, w = S.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: m,
            instance: p,
            options: v
          }), E = function() {
          };
          d.push(k || E);
        }
      });
    }
    function y() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var g6 = [BN, o6, jN, TN, r6, QN, s6, zN, JN], y6 = /* @__PURE__ */ v6({
  defaultModifiers: g6
});
function b6(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: a = !0,
    offset: s,
    gutter: l = 8,
    flip: u = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, g = b.useRef(null), y = b.useRef(null), S = b.useRef(null), m = fN(n, p), h = b.useRef(() => {
  }), v = b.useCallback(() => {
    var M;
    !t || !g.current || !y.current || ((M = h.current) == null || M.call(h), S.current = y6(g.current, y.current, {
      placement: m,
      modifiers: [
        uN,
        aN,
        iN,
        {
          ...oN,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...nN(a)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!u,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: c }
        },
        // allow users override internal modifiers
        ...r ?? []
      ],
      strategy: o
    }), S.current.forceUpdate(), h.current = S.current.destroy);
  }, [
    m,
    t,
    r,
    f,
    a,
    i,
    s,
    l,
    u,
    d,
    c,
    o
  ]);
  b.useEffect(() => () => {
    var M;
    !g.current && !y.current && ((M = S.current) == null || M.destroy(), S.current = null);
  }, []);
  const w = b.useCallback(
    (M) => {
      g.current = M, v();
    },
    [v]
  ), k = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Qt(w, j)
    }),
    [w]
  ), E = b.useCallback(
    (M) => {
      y.current = M, v();
    },
    [v]
  ), _ = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Qt(E, j),
      style: {
        ...M.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, E, f]
  ), $ = b.useCallback((M = {}, j = null) => {
    const { size: ee, shadowColor: U, bg: G, style: K, ...Y } = M;
    return {
      ...Y,
      ref: j,
      "data-popper-arrow": "",
      style: x6(M)
    };
  }, []), R = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: j,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var M;
      (M = S.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = S.current) == null || M.forceUpdate();
    },
    transformOrigin: dt.transformOrigin.varRef,
    referenceRef: w,
    popperRef: E,
    getPopperProps: _,
    getArrowProps: $,
    getArrowInnerProps: R,
    getReferenceProps: k
  };
}
function x6(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function S6(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = Ku(r), a = Ku(t), [s, l] = b.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = b.useId(), f = o ?? `disclosure-${d}`, p = b.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), g = b.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), y = b.useCallback(() => {
    u ? p() : g();
  }, [u, g, p]);
  function S(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(v) {
        var w;
        (w = h.onClick) == null || w.call(h, v), y();
      }
    };
  }
  function m(h = {}) {
    return {
      ...h,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: g,
    onClose: p,
    onToggle: y,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: m
  };
}
function w6(e) {
  const { isOpen: t, ref: r } = e, [n, o] = b.useState(t), [i, a] = b.useState(!1);
  return b.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, n]), Wm(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = FB(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function k6(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var C6 = Object.defineProperty, _6 = (e, t, r) => t in e ? C6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P6 = (e, t, r) => (_6(e, typeof t != "symbol" ? t + "" : t, r), r), T6 = class {
  constructor() {
    P6(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, nh = new T6();
function SC(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = nh.add(o);
        n(i);
      }
      return () => {
        nh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var E6 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, jo = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap(), zl = {}, Cf = 0, wC = function(e) {
  return e && (e.host || wC(e.parentNode));
}, $6 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = wC(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, A6 = function(e, t, r, n) {
  var o = $6(t, Array.isArray(e) ? e : [e]);
  zl[r] || (zl[r] = /* @__PURE__ */ new WeakMap());
  var i = zl[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), g = p !== null && p !== "false", y = (jo.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        jo.set(f, y), i.set(f, S), a.push(f), y === 1 && g && Ol.set(f, !0), S === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Cf++, function() {
    a.forEach(function(d) {
      var f = jo.get(d) - 1, p = i.get(d) - 1;
      jo.set(d, f), i.set(d, p), f || (Ol.has(d) || d.removeAttribute(n), Ol.delete(d)), p || d.removeAttribute(r);
    }), Cf--, Cf || (jo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap(), zl = {});
  };
}, R6 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || E6(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), A6(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function M6(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = z6(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  O6(u, t && a);
  const g = SC(u, t), y = b.useRef(null), S = b.useCallback((R) => {
    y.current = R.target;
  }, []), m = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, v] = b.useState(!1), [w, k] = b.useState(!1), E = b.useCallback(
    (R = {}, M = null) => ({
      role: "dialog",
      ...R,
      ref: Qt(M, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: tt(
        R.onClick,
        (j) => j.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), _ = b.useCallback(
    (R) => {
      R.stopPropagation(), y.current === R.target && nh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (R = {}, M = null) => ({
      ...R,
      ref: Qt(M, c),
      onClick: tt(R.onClick, _),
      onKeyDown: tt(R.onKeyDown, m),
      onMouseDown: tt(R.onMouseDown, S)
    }),
    [m, S, _]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: v,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: E,
    getDialogContainerProps: $,
    index: g
  };
}
function O6(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return R6(e.current);
  }, [t, e, r]);
}
function z6(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [I6, Ks] = Wt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [F6, Ui] = Wt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), kC = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: r,
    children: n,
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: g
  } = t, y = Ds("Modal", t), m = {
    ...M6(t),
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ C.jsx(F6, { value: m, children: /* @__PURE__ */ C.jsx(I6, { value: y, children: /* @__PURE__ */ C.jsx(Xc, { onExitComplete: g, children: m.isOpen && /* @__PURE__ */ C.jsx(Os, { ...r, children: n }) }) }) });
};
kC.displayName = "Modal";
var pu = "right-scroll-bar-position", hu = "width-before-scroll-bar", D6 = "with-scroll-bars-hidden", j6 = "--removed-body-scroll-bar-size", CC = Rk(), _f = function() {
}, rd = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: _f,
    onWheelCapture: _f,
    onTouchMoveCapture: _f
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, h = e.gapMode, v = Ek(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = Tk([r, t]), E = Tr(Tr({}, v), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: CC, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), Tr(Tr({}, E), { ref: k })) : b.createElement(m, Tr({}, E, { className: l, ref: k }), s)
  );
});
rd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rd.classNames = {
  fullWidth: hu,
  zeroRight: pu
};
var x1, L6 = function() {
  if (x1)
    return x1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function B6() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = L6();
  return t && e.setAttribute("nonce", t), e;
}
function N6(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function V6(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var W6 = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = B6()) && (N6(t, r), V6(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, H6 = function() {
  var e = W6();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, _C = function() {
  var e = H6(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, U6 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pf = function(e) {
  return parseInt(e || "", 10) || 0;
}, G6 = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pf(r), Pf(n), Pf(o)];
}, K6 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return U6;
  var t = G6(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Y6 = _C(), q6 = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(D6, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(pu, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(hu, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(pu, " .").concat(pu, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(hu, " .").concat(hu, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(j6, ": ").concat(s, `px;
  }
`);
}, X6 = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return K6(o);
  }, [o]);
  return b.createElement(Y6, { styles: q6(i, !t, o, r ? "" : "!important") });
}, oh = !1;
if (typeof window < "u")
  try {
    var Il = Object.defineProperty({}, "passive", {
      get: function() {
        return oh = !0, !0;
      }
    });
    window.addEventListener("test", Il, Il), window.removeEventListener("test", Il, Il);
  } catch {
    oh = !1;
  }
var Lo = oh ? { passive: !1 } : !1, Q6 = function(e) {
  return e.tagName === "TEXTAREA";
}, PC = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Q6(e) && r[t] === "visible")
  );
}, Z6 = function(e) {
  return PC(e, "overflowY");
}, J6 = function(e) {
  return PC(e, "overflowX");
}, S1 = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = TC(e, n);
    if (o) {
      var i = EC(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, eV = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, tV = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, TC = function(e, t) {
  return e === "v" ? Z6(t) : J6(t);
}, EC = function(e, t) {
  return e === "v" ? eV(t) : tV(t);
}, rV = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nV = function(e, t, r, n, o) {
  var i = rV(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = EC(e, s), g = p[0], y = p[1], S = p[2], m = y - S - i * g;
    (g || m) && TC(e, s) && (d += m, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Fl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, w1 = function(e) {
  return [e.deltaX, e.deltaY];
}, k1 = function(e) {
  return e && "current" in e ? e.current : e;
}, oV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, iV = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aV = 0, Bo = [];
function sV(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(aV++)[0], i = b.useState(_C)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = IL([e.lockRef.current], (e.shards || []).map(k1), !0).filter(Boolean);
      return y.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = b.useCallback(function(y, S) {
    if ("touches" in y && y.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = Fl(y), h = r.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], w = "deltaY" in y ? y.deltaY : h[1] - m[1], k, E = y.target, _ = Math.abs(v) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && _ === "h" && E.type === "range")
      return !1;
    var $ = S1(_, E);
    if (!$)
      return !0;
    if ($ ? k = _ : (k = _ === "v" ? "h" : "v", $ = S1(_, E)), !$)
      return !1;
    if (!n.current && "changedTouches" in y && (v || w) && (n.current = k), !k)
      return !0;
    var R = n.current || k;
    return nV(R, S, y, R === "h" ? v : w, !0);
  }, []), l = b.useCallback(function(y) {
    var S = y;
    if (!(!Bo.length || Bo[Bo.length - 1] !== i)) {
      var m = "deltaY" in S ? w1(S) : Fl(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && oV(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var v = (a.current.shards || []).map(k1).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), w = v.length > 0 ? s(S, v[0]) : !a.current.noIsolation;
        w && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, S, m, h) {
    var v = { name: y, delta: S, target: m, should: h, shadowParent: lV(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== v;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = Fl(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, w1(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, Fl(y), y.target, s(y, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Bo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Lo), document.addEventListener("touchmove", l, Lo), document.addEventListener("touchstart", c, Lo), function() {
      Bo = Bo.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, Lo), document.removeEventListener("touchmove", l, Lo), document.removeEventListener("touchstart", c, Lo);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    g ? b.createElement(i, { styles: iV(o) }) : null,
    p ? b.createElement(X6, { gapMode: e.gapMode }) : null
  );
}
function lV(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const uV = FL(CC, sV);
var $C = b.forwardRef(function(e, t) {
  return b.createElement(rd, Tr({}, e, { ref: t, sideCar: uV }));
});
$C.classNames = rd.classNames;
const cV = $C;
function dV(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = Ui(), [f, p] = Jw();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = SC(n, d);
  return /* @__PURE__ */ C.jsx(
    lC,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ C.jsx(
        cV,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: g === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var [fV, pV] = Wt(), hV = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function mV(e, t) {
  var r, n;
  if (e)
    return (n = (r = hV[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function vV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = lm(), l = (t = s.components) == null ? void 0 : t.Drawer, u = mV(o, s.direction);
  return /* @__PURE__ */ C.jsx(fV, { value: { placement: u }, children: /* @__PURE__ */ C.jsx(
    kC,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var gV = re(xk), AC = ke(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Ui(), c = s(a, t), d = l(i), f = ge("chakra-modal__content", r), p = Ks(), g = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: S } = pV();
    return /* @__PURE__ */ C.jsx(dV, { children: /* @__PURE__ */ C.jsx(
      re.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ C.jsx(
          gV,
          {
            motionProps: o,
            direction: S,
            in: u,
            className: f,
            ...c,
            __css: g,
            children: n
          }
        )
      }
    ) });
  }
);
AC.displayName = "DrawerContent";
var RC = ke(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = Ui();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ge("chakra-modal__header", r), l = {
      flex: 0,
      ...Ks().header
    };
    return /* @__PURE__ */ C.jsx(
      re.header,
      {
        ref: t,
        className: a,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
RC.displayName = "ModalHeader";
var yV = re(Ws.div), MC = ke(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = ge("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ks().overlay
    }, { motionPreset: u } = Ui(), d = o || (u === "none" ? {} : bk);
    return /* @__PURE__ */ C.jsx(
      yV,
      {
        ...d,
        __css: l,
        ref: t,
        className: a,
        ...i
      }
    );
  }
);
MC.displayName = "ModalOverlay";
var OC = ke((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = Ui();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ge("chakra-modal__body", r), s = Ks();
  return /* @__PURE__ */ C.jsx(
    re.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
OC.displayName = "ModalBody";
var zC = ke(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = Ui(), a = ge("chakra-modal__close-btn", n), s = Ks();
    return /* @__PURE__ */ C.jsx(
      Qc,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: tt(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
zC.displayName = "ModalCloseButton";
var [bV, Ao] = Wt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [xV, Ys] = Wt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), IC = ke(
  function(t, r) {
    const { getHeaderProps: n } = Ao(), o = Ys();
    return /* @__PURE__ */ C.jsx(
      re.header,
      {
        ...n(t, r),
        className: ge("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
IC.displayName = "PopoverHeader";
function av(e) {
  const t = b.Children.only(e.children), { getTriggerProps: r } = Ao();
  return b.cloneElement(t, r(t.props, t.ref));
}
av.displayName = "PopoverTrigger";
var No = {
  click: "click",
  hover: "hover"
};
function SV(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = No.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...y
  } = e, { isOpen: S, onClose: m, onOpen: h, onToggle: v } = S6(e), w = b.useRef(null), k = b.useRef(null), E = b.useRef(null), _ = b.useRef(!1), $ = b.useRef(!1);
  S && ($.current = !0);
  const [R, M] = b.useState(!1), [j, ee] = b.useState(!1), U = b.useId(), G = o ?? U, [K, Y, oe, z] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((ne) => `${ne}-${G}`), {
    referenceRef: D,
    getArrowProps: B,
    getPopperProps: L,
    getArrowInnerProps: q,
    forceUpdate: H
  } = b6({
    ...y,
    enabled: S || !!g
  }), he = w6({ isOpen: S, ref: E });
  kL({
    enabled: S,
    ref: k
  }), XB(E, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === No.click
  }), ZB(E, {
    focusRef: n,
    visible: S,
    shouldFocus: a && u === No.click
  });
  const Me = k6({
    wasSelected: $.current,
    enabled: f,
    mode: p,
    isSelected: he.present
  }), ce = b.useCallback(
    (ne = {}, it = null) => {
      const De = {
        ...ne,
        style: {
          ...ne.style,
          transformOrigin: dt.transformOrigin.varRef,
          [dt.arrowSize.var]: s ? `${s}px` : void 0,
          [dt.arrowShadowColor.var]: l
        },
        ref: Qt(E, it),
        children: Me ? ne.children : null,
        id: Y,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: tt(ne.onKeyDown, (At) => {
          r && At.key === "Escape" && m();
        }),
        onBlur: tt(ne.onBlur, (At) => {
          const cn = C1(At), at = Tf(E.current, cn), vr = Tf(k.current, cn);
          S && t && (!at && !vr) && m();
        }),
        "aria-labelledby": R ? oe : void 0,
        "aria-describedby": j ? z : void 0
      };
      return u === No.hover && (De.role = "tooltip", De.onMouseEnter = tt(ne.onMouseEnter, () => {
        _.current = !0;
      }), De.onMouseLeave = tt(
        ne.onMouseLeave,
        (At) => {
          At.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), De;
    },
    [
      Me,
      Y,
      R,
      oe,
      j,
      z,
      u,
      r,
      m,
      S,
      t,
      d,
      l,
      s
    ]
  ), be = b.useCallback(
    (ne = {}, it = null) => L(
      {
        ...ne,
        style: {
          visibility: S ? "visible" : "hidden",
          ...ne.style
        }
      },
      it
    ),
    [S, L]
  ), Te = b.useCallback(
    (ne, it = null) => ({
      ...ne,
      // If anchor is rendered, it is used as reference.
      ref: Qt(it, w, D)
    }),
    [w, D]
  ), Oe = b.useRef(), Xe = b.useRef(), Qe = b.useCallback(
    (ne) => {
      w.current == null && D(ne);
    },
    [D]
  ), Dr = b.useCallback(
    (ne = {}, it = null) => {
      const De = {
        ...ne,
        ref: Qt(k, it, Qe),
        id: K,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": Y
      };
      return u === No.click && (De.onClick = tt(ne.onClick, v)), u === No.hover && (De.onFocus = tt(ne.onFocus, () => {
        Oe.current === void 0 && h();
      }), De.onBlur = tt(ne.onBlur, (At) => {
        const cn = C1(At), at = !Tf(E.current, cn);
        S && t && at && m();
      }), De.onKeyDown = tt(ne.onKeyDown, (At) => {
        At.key === "Escape" && m();
      }), De.onMouseEnter = tt(ne.onMouseEnter, () => {
        _.current = !0, Oe.current = window.setTimeout(() => h(), c);
      }), De.onMouseLeave = tt(ne.onMouseLeave, () => {
        _.current = !1, Oe.current && (clearTimeout(Oe.current), Oe.current = void 0), Xe.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), De;
    },
    [
      K,
      S,
      Y,
      u,
      Qe,
      v,
      h,
      t,
      m,
      c,
      d
    ]
  );
  b.useEffect(() => () => {
    Oe.current && clearTimeout(Oe.current), Xe.current && clearTimeout(Xe.current);
  }, []);
  const jr = b.useCallback(
    (ne = {}, it = null) => ({
      ...ne,
      id: oe,
      ref: Qt(it, (De) => {
        M(!!De);
      })
    }),
    [oe]
  ), Gi = b.useCallback(
    (ne = {}, it = null) => ({
      ...ne,
      id: z,
      ref: Qt(it, (De) => {
        ee(!!De);
      })
    }),
    [z]
  );
  return {
    forceUpdate: H,
    isOpen: S,
    onAnimationComplete: he.onComplete,
    onClose: m,
    getAnchorProps: Te,
    getArrowProps: B,
    getArrowInnerProps: q,
    getPopoverPositionerProps: be,
    getPopoverProps: ce,
    getTriggerProps: Dr,
    getHeaderProps: jr,
    getBodyProps: Gi
  };
}
function Tf(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function C1(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function sv(e) {
  const t = Ds("Popover", e), { children: r, ...n } = Wn(e), o = lm(), i = SV({ ...n, direction: o.direction });
  return /* @__PURE__ */ C.jsx(bV, { value: i, children: /* @__PURE__ */ C.jsx(xV, { value: t, children: Kr(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
sv.displayName = "Popover";
var Ef = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function lv(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Ao(), c = Ys(), d = (t = r ?? n) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ C.jsx(
    re.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ C.jsx(
        re.div,
        {
          className: ge("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Ef("colors", s),
            "--popper-arrow-bg": Ef("colors", d),
            "--popper-arrow-shadow": Ef("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
lv.displayName = "PopoverArrow";
var uv = ke(
  function(t, r) {
    const { getBodyProps: n } = Ao(), o = Ys();
    return /* @__PURE__ */ C.jsx(
      re.div,
      {
        ...n(t, r),
        className: ge("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
uv.displayName = "PopoverBody";
var cv = ke(
  function(t, r) {
    const { onClose: n } = Ao(), o = Ys();
    return /* @__PURE__ */ C.jsx(
      Qc,
      {
        size: "sm",
        onClick: n,
        className: ge("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
cv.displayName = "PopoverCloseButton";
function wV(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
var kV = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, CV = re(Ws.section), FC = ke(function(t, r) {
  const { variants: n = kV, ...o } = t, { isOpen: i } = Ao();
  return /* @__PURE__ */ C.jsx(
    CV,
    {
      ref: r,
      variants: wV(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
FC.displayName = "PopoverTransition";
var dv = ke(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Ao(), u = Ys(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ C.jsx(
      re.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ C.jsx(
          FC,
          {
            ...o,
            ...a(i, r),
            onAnimationComplete: e$(
              l,
              i.onAnimationComplete
            ),
            className: ge("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
dv.displayName = "PopoverContent";
var _V = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, PV = Object.defineProperty, TV = Object.defineProperties, EV = Object.getOwnPropertyDescriptors, lc = Object.getOwnPropertySymbols, DC = Object.prototype.hasOwnProperty, jC = Object.prototype.propertyIsEnumerable, _1 = (e, t, r) => t in e ? PV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P1 = (e, t) => {
  for (var r in t || (t = {}))
    DC.call(t, r) && _1(e, r, t[r]);
  if (lc)
    for (var r of lc(t))
      jC.call(t, r) && _1(e, r, t[r]);
  return e;
}, $V = (e, t) => TV(e, EV(t)), AV = (e, t) => {
  var r = {};
  for (var n in e)
    DC.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && lc)
    for (var n of lc(e))
      t.indexOf(n) < 0 && jC.call(e, n) && (r[n] = e[n]);
  return r;
}, Ro = (e, t, r) => {
  const n = b.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = AV(a, ["color", "size", "stroke", "children"]);
      return b.createElement(
        "svg",
        P1($V(P1({
          ref: i
        }, _V), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([f, p]) => b.createElement(f, p)), ...c || []]
      );
    }
  );
  return n.propTypes = {
    color: Qn.string,
    size: Qn.oneOfType([Qn.string, Qn.number]),
    stroke: Qn.oneOfType([Qn.string, Qn.number])
  }, n.displayName = `${t}`, n;
}, RV = Ro("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), MV = Ro("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), fv = Ro("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), OV = Ro("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), LC = Ro("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), zV = Ro("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), IV = Ro(
  "triangle-inverted-filled",
  "IconTriangleInvertedFilled",
  [
    [
      "path",
      {
        d: "M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0"
      }
    ]
  ]
);
let Dl;
const FV = new Uint8Array(16);
function DV() {
  if (!Dl && (Dl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Dl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Dl(FV);
}
const Je = [];
for (let e = 0; e < 256; ++e)
  Je.push((e + 256).toString(16).slice(1));
function jV(e, t = 0) {
  return Je[e[t + 0]] + Je[e[t + 1]] + Je[e[t + 2]] + Je[e[t + 3]] + "-" + Je[e[t + 4]] + Je[e[t + 5]] + "-" + Je[e[t + 6]] + Je[e[t + 7]] + "-" + Je[e[t + 8]] + Je[e[t + 9]] + "-" + Je[e[t + 10]] + Je[e[t + 11]] + Je[e[t + 12]] + Je[e[t + 13]] + Je[e[t + 14]] + Je[e[t + 15]];
}
const LV = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), T1 = {
  randomUUID: LV
};
function BV(e, t, r) {
  if (T1.randomUUID && !t && !e)
    return T1.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || DV)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return jV(n);
}
let Ie, br = null;
async function NV() {
  const e = async () => {
    let r = await BC("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), Ie = JSON.parse(r ?? "{}");
  }, t = async () => {
    br = await WV();
  };
  await Promise.all([e(), t()]);
}
function E1(e, t) {
  if (Ie == null)
    return;
  const r = Ie[e];
  if (r == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const n = {
    ...r,
    ...t,
    id: e
  }, o = JSON.stringify(r), i = JSON.stringify(n);
  o !== i && (console.log("updateFlow haschange", e, t), Ie[e] = {
    ...Ie[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(Ie)), pv("workflows", JSON.stringify(Ie)));
}
function $1(e, t) {
  if (Ie == null)
    throw new Error("workspace is not loaded");
  const r = BV();
  return Ie[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Ie)), pv("workflows", JSON.stringify(Ie)), Ie[r];
}
function A1() {
  if (Ie == null)
    throw new Error("workspace is not loaded");
  return Object.values(Ie).sort((e, t) => t.updateTime - e.updateTime);
}
function VV(e) {
  if (Ie == null)
    throw new Error("workspace is not loaded");
  delete Ie[e], localStorage.setItem("workspace", JSON.stringify(Ie)), pv("workflows", JSON.stringify(Ie));
}
async function pv(e, t) {
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (r) {
    console.error("Error saving workspace:", r);
  }
}
async function BC(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function WV() {
  let e = await BC("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((r, n) => n.updateTime - r.updateTime);
    },
    upsert(r) {
      return t[r] == null && (t[r] = {
        name: r,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[r].updateTime = Date.now(), t[r];
    },
    delete(r) {
      delete t[r];
    }
  };
}
const NC = b.createContext({
  curFlowID: null
});
function HV({ workflow: e }) {
  const [t, r] = b.useState([]), [n, o] = b.useState("");
  return b.useEffect(() => {
    br && r(br.listAll() ?? []);
  }, []), br == null ? null : /* @__PURE__ */ C.jsx(sv, { children: ({}) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx(av, { children: /* @__PURE__ */ C.jsx(en, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ C.jsx(LC, { color: "#718096" }) }) }),
    /* @__PURE__ */ C.jsxs(dv, { children: [
      /* @__PURE__ */ C.jsx(lv, {}),
      /* @__PURE__ */ C.jsx(cv, {}),
      /* @__PURE__ */ C.jsxs(IC, { children: [
        "Add Tags to ",
        /* @__PURE__ */ C.jsx("b", { children: e.name })
      ] }),
      /* @__PURE__ */ C.jsxs(uv, { children: [
        /* @__PURE__ */ C.jsxs(Er, { children: [
          /* @__PURE__ */ C.jsx(
            Jc,
            {
              placeholder: "New tag name",
              size: "sm",
              value: n,
              onChange: (i) => {
                o(i.target.value);
              }
            }
          ),
          /* @__PURE__ */ C.jsx(
            en,
            {
              iconSpacing: 1,
              leftIcon: /* @__PURE__ */ C.jsx(fv, { size: 16 }),
              colorScheme: "teal",
              variant: "solid",
              size: "xs",
              px: 5,
              isDisabled: n.length === 0,
              onClick: () => {
                br == null || br.upsert(n), r((br == null ? void 0 : br.listAll()) ?? []), o("");
              },
              children: "New Tag"
            }
          )
        ] }),
        t.map((i) => /* @__PURE__ */ C.jsx(co, { mb: 4, fontWeight: 600, children: i.name }))
      ] })
    ] })
  ] }) });
}
function UV({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = b.useState([]), { colorMode: i } = zs(), { curFlowID: a } = b.useContext(NC);
  b.useEffect(() => {
    const l = A1();
    o(l);
  }, []);
  const s = (l) => {
    VV(l);
    const u = A1();
    o(u);
  };
  return /* @__PURE__ */ C.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ C.jsxs(
    vV,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ C.jsx(MC, {}),
        /* @__PURE__ */ C.jsxs(AC, { children: [
          /* @__PURE__ */ C.jsx(zC, {}),
          /* @__PURE__ */ C.jsx(RC, { children: /* @__PURE__ */ C.jsxs(Er, { alignItems: "center", children: [
            /* @__PURE__ */ C.jsx(co, { mr: 6, children: "Recent Workflows" }),
            /* @__PURE__ */ C.jsx(
              en,
              {
                leftIcon: /* @__PURE__ */ C.jsx(fv, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                onClick: r,
                children: "New"
              }
            )
          ] }) }),
          /* @__PURE__ */ C.jsxs(OC, { children: [
            /* @__PURE__ */ C.jsx(Er, { spacing: 4, mb: 6, children: /* @__PURE__ */ C.jsx(
              en,
              {
                leftIcon: /* @__PURE__ */ C.jsx(LC, {}),
                colorScheme: "gray",
                variant: "solid",
                size: "sm",
                px: 3,
                borderRadius: 16,
                children: "New Tag"
              }
            ) }),
            n.map((l) => {
              const u = l.id === a;
              return /* @__PURE__ */ C.jsxs(Er, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ C.jsxs(
                  ed,
                  {
                    as: "button",
                    textAlign: "left",
                    backgroundColor: u ? "teal.200" : void 0,
                    color: u ? "#333" : void 0,
                    w: "90%",
                    borderRadius: 6,
                    p: 2,
                    mb: 2,
                    onClick: () => {
                      t(l.id);
                    },
                    _hover: {
                      bg: i === "light" ? "gray.200" : "#4A5568"
                    },
                    _active: {
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9"
                    },
                    children: [
                      /* @__PURE__ */ C.jsx(co, { fontWeight: "500", children: l.name ?? "untitled" }),
                      /* @__PURE__ */ C.jsxs(co, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        GV(l.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ C.jsx(HV, { workflow: l }),
                /* @__PURE__ */ C.jsx(sv, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
                  /* @__PURE__ */ C.jsx(av, { children: /* @__PURE__ */ C.jsx(zV, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ C.jsxs(dv, { children: [
                    /* @__PURE__ */ C.jsx(lv, {}),
                    /* @__PURE__ */ C.jsx(cv, {}),
                    /* @__PURE__ */ C.jsxs(uv, { children: [
                      /* @__PURE__ */ C.jsx(co, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ C.jsx(
                        en,
                        {
                          colorScheme: "red",
                          size: "sm",
                          onClick: () => {
                            s(l.id), d();
                          },
                          children: "Yes, delete"
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
function GV(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function KV(e) {
  let t = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": ""
  };
  return String(e).replace(/[&<>"'`=]/g, function(n) {
    return t[n];
  });
}
function YV() {
  const e = [];
  for (let t of jl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = KV(t.type), e.push(t.type));
  return e;
}
const qV = {
  last_node_id: 9,
  last_link_id: 9,
  nodes: [
    {
      id: 7,
      type: "CLIPTextEncode",
      pos: [413, 389],
      size: { 0: 425.27801513671875, 1: 180.6060791015625 },
      flags: {},
      order: 3,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 5 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
      properties: {},
      widgets_values: ["text, watermark"]
    },
    {
      id: 6,
      type: "CLIPTextEncode",
      pos: [415, 186],
      size: { 0: 422.84503173828125, 1: 164.31304931640625 },
      flags: {},
      order: 2,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 3 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
      properties: {},
      widgets_values: ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]
    },
    {
      id: 5,
      type: "EmptyLatentImage",
      pos: [473, 609],
      size: { 0: 315, 1: 106 },
      flags: {},
      order: 1,
      mode: 0,
      outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
      properties: {},
      widgets_values: [512, 512, 1]
    },
    {
      id: 3,
      type: "KSampler",
      pos: [863, 186],
      size: { 0: 315, 1: 262 },
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        { name: "model", type: "MODEL", link: 1 },
        { name: "positive", type: "CONDITIONING", link: 4 },
        { name: "negative", type: "CONDITIONING", link: 6 },
        { name: "latent_image", type: "LATENT", link: 2 }
      ],
      outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
      properties: {},
      widgets_values: [156680208700286, !0, 20, 8, "euler", "normal", 1]
    },
    {
      id: 8,
      type: "VAEDecode",
      pos: [1209, 188],
      size: { 0: 210, 1: 46 },
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        { name: "samples", type: "LATENT", link: 7 },
        { name: "vae", type: "VAE", link: 8 }
      ],
      outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
      properties: {}
    },
    {
      id: 9,
      type: "SaveImage",
      pos: [1451, 189],
      size: { 0: 210, 1: 26 },
      flags: {},
      order: 6,
      mode: 0,
      inputs: [{ name: "images", type: "IMAGE", link: 9 }],
      properties: {}
    },
    {
      id: 4,
      type: "CheckpointLoaderSimple",
      pos: [26, 474],
      size: { 0: 315, 1: 98 },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        { name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
        { name: "CLIP", type: "CLIP", links: [3, 5], slot_index: 1 },
        { name: "VAE", type: "VAE", links: [8], slot_index: 2 }
      ],
      properties: {},
      widgets_values: ["v1-5-pruned-emaonly.ckpt"]
    }
  ],
  links: [
    [1, 4, 0, 3, 0, "MODEL"],
    [2, 5, 0, 3, 3, "LATENT"],
    [3, 4, 1, 6, 0, "CLIP"],
    [4, 6, 0, 3, 1, "CONDITIONING"],
    [5, 4, 1, 7, 0, "CLIP"],
    [6, 7, 0, 3, 2, "CONDITIONING"],
    [7, 3, 0, 8, 0, "LATENT"],
    [8, 4, 2, 8, 1, "VAE"],
    [9, 8, 0, 9, 0, "IMAGE"]
  ],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
};
function XV() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(null), [i, a] = b.useState("root"), [s, l] = b.useState(!0), [u, c] = b.useState(null), d = b.useRef(null), { colorMode: f, toggleColorMode: p } = zs(), g = (w) => {
    d.current = w, c(w), setTimeout(() => {
      const k = YV();
      t(k);
    }, 1e3);
  }, y = async () => {
    var E;
    const w = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(_) {
      },
      async addCustomNodeDefs(_) {
        r.current = _;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    jl.registerExtension(w);
    try {
      await NV();
    } catch (_) {
      console.error("error loading db", _);
    }
    l(!1);
    const k = localStorage.getItem("curFlowID");
    if (k)
      g(k), Ie && o(((E = Ie[k]) == null ? void 0 : E.name) ?? "");
    else {
      const _ = localStorage.getItem("workflow"), $ = $1(_ ?? "");
      g($.id), o($.name ?? "");
    }
  };
  b.useEffect(() => {
    y(), setInterval(() => {
      if (d.current != null) {
        const w = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", d.current), w != null && E1(d.current, {
          json: w
        });
      }
    }, 1e3);
  }, []);
  const S = (w) => {
    d.current != null && E1(d.current, {
      name: w
    });
  }, m = b.useCallback(
    FT(S, 700),
    []
  ), h = (w) => {
    if (Ie == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    g(w);
    const k = Ie[w];
    if (k == null) {
      alert("Error: Workflow not found! id: " + w);
      return;
    }
    o(k.name), jl.loadGraphData(JSON.parse(k.json)), a("root");
  }, v = () => {
    const w = qV, k = $1(JSON.stringify(w));
    g(k.id), o(k.name), jl.loadGraphData(w);
  };
  return s ? null : /* @__PURE__ */ C.jsx(NC.Provider, { value: { curFlowID: u }, children: /* @__PURE__ */ C.jsxs(
    ed,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ C.jsxs(
          Er,
          {
            style: {
              padding: 8,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            children: [
              /* @__PURE__ */ C.jsxs(Er, { children: [
                /* @__PURE__ */ C.jsx(
                  en,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ C.jsxs(Er, { gap: 1, children: [
                      /* @__PURE__ */ C.jsx(RV, { size: 21 }),
                      /* @__PURE__ */ C.jsx(IV, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  en,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => v(),
                    children: /* @__PURE__ */ C.jsxs(Er, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ C.jsx(fv, { size: 16, color: "white" }),
                      /* @__PURE__ */ C.jsx(co, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  Jc,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: n ?? "",
                    onChange: (w) => {
                      o(w.target.value), m(w.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsx(Er, { children: /* @__PURE__ */ C.jsx(en, { onClick: p, variant: "link", children: f === "light" ? /* @__PURE__ */ C.jsx(MV, { size: 20 }) : /* @__PURE__ */ C.jsx(OV, { size: 20 }) }) })
            ]
          }
        ),
        i === "recentFlows" && /* @__PURE__ */ C.jsx(
          UV,
          {
            onclose: () => a("root"),
            loadWorkflowID: h,
            onClickNewFlow: () => {
              v(), a("root");
            }
          }
        )
      ]
    }
  ) });
}
const VC = document.createElement("div");
document.body.append(VC);
const QV = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, ZV = B3({ config: QV });
$f.createRoot(VC).render(
  /* @__PURE__ */ C.jsx(yo.StrictMode, { children: /* @__PURE__ */ C.jsxs(eL, { children: [
    /* @__PURE__ */ C.jsx(QE, { initialColorMode: ZV.config.initialColorMode }),
    /* @__PURE__ */ C.jsx(XV, {})
  ] }) })
);
