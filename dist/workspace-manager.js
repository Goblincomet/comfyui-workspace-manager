import { app as Wl } from "/scripts/app.js";
function SP(e, t) {
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
var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var W1 = { exports: {} }, pc = {}, U1 = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs = Symbol.for("react.element"), wP = Symbol.for("react.portal"), kP = Symbol.for("react.fragment"), CP = Symbol.for("react.strict_mode"), _P = Symbol.for("react.profiler"), PP = Symbol.for("react.provider"), TP = Symbol.for("react.context"), EP = Symbol.for("react.forward_ref"), $P = Symbol.for("react.suspense"), AP = Symbol.for("react.memo"), MP = Symbol.for("react.lazy"), Nv = Symbol.iterator;
function RP(e) {
  return e === null || typeof e != "object" ? null : (e = Nv && e[Nv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, G1 = Object.assign, K1 = {};
function Wi(e, t, r) {
  this.props = e, this.context = t, this.refs = K1, this.updater = r || H1;
}
Wi.prototype.isReactComponent = {};
Wi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Y1() {
}
Y1.prototype = Wi.prototype;
function hh(e, t, r) {
  this.props = e, this.context = t, this.refs = K1, this.updater = r || H1;
}
var mh = hh.prototype = new Y1();
mh.constructor = hh;
G1(mh, Wi.prototype);
mh.isPureReactComponent = !0;
var Lv = Array.isArray, q1 = Object.prototype.hasOwnProperty, vh = { current: null }, X1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Q1(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      q1.call(t, n) && !X1.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Rs, type: e, key: i, ref: a, props: o, _owner: vh.current };
}
function OP(e, t) {
  return { $$typeof: Rs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function gh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rs;
}
function IP(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Bv = /\/+/g;
function yd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? IP("" + e.key) : t.toString(36);
}
function Ul(e, t, r, n, o) {
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
          case Rs:
          case wP:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + yd(a, 0) : n, Lv(o) ? (r = "", e != null && (r = e.replace(Bv, "$&/") + "/"), Ul(o, t, r, "", function(u) {
      return u;
    })) : o != null && (gh(o) && (o = OP(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Bv, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Lv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + yd(i, s);
      a += Ul(i, t, r, l, o);
    }
  else if (l = RP(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + yd(i, s++), a += Ul(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function sl(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Ul(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function DP(e) {
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
var St = { current: null }, Hl = { transition: null }, zP = { ReactCurrentDispatcher: St, ReactCurrentBatchConfig: Hl, ReactCurrentOwner: vh };
ee.Children = { map: sl, forEach: function(e, t, r) {
  sl(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return sl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!gh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ee.Component = Wi;
ee.Fragment = kP;
ee.Profiler = _P;
ee.PureComponent = hh;
ee.StrictMode = CP;
ee.Suspense = $P;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zP;
ee.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = G1({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = vh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      q1.call(t, l) && !X1.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Rs, type: e.type, key: o, ref: i, props: n, _owner: a };
};
ee.createContext = function(e) {
  return e = { $$typeof: TP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: PP, _context: e }, e.Consumer = e;
};
ee.createElement = Q1;
ee.createFactory = function(e) {
  var t = Q1.bind(null, e);
  return t.type = e, t;
};
ee.createRef = function() {
  return { current: null };
};
ee.forwardRef = function(e) {
  return { $$typeof: EP, render: e };
};
ee.isValidElement = gh;
ee.lazy = function(e) {
  return { $$typeof: MP, _payload: { _status: -1, _result: e }, _init: DP };
};
ee.memo = function(e, t) {
  return { $$typeof: AP, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function(e) {
  var t = Hl.transition;
  Hl.transition = {};
  try {
    e();
  } finally {
    Hl.transition = t;
  }
};
ee.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function(e, t) {
  return St.current.useCallback(e, t);
};
ee.useContext = function(e) {
  return St.current.useContext(e);
};
ee.useDebugValue = function() {
};
ee.useDeferredValue = function(e) {
  return St.current.useDeferredValue(e);
};
ee.useEffect = function(e, t) {
  return St.current.useEffect(e, t);
};
ee.useId = function() {
  return St.current.useId();
};
ee.useImperativeHandle = function(e, t, r) {
  return St.current.useImperativeHandle(e, t, r);
};
ee.useInsertionEffect = function(e, t) {
  return St.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function(e, t) {
  return St.current.useLayoutEffect(e, t);
};
ee.useMemo = function(e, t) {
  return St.current.useMemo(e, t);
};
ee.useReducer = function(e, t, r) {
  return St.current.useReducer(e, t, r);
};
ee.useRef = function(e) {
  return St.current.useRef(e);
};
ee.useState = function(e) {
  return St.current.useState(e);
};
ee.useSyncExternalStore = function(e, t, r) {
  return St.current.useSyncExternalStore(e, t, r);
};
ee.useTransition = function() {
  return St.current.useTransition();
};
ee.version = "18.2.0";
U1.exports = ee;
var v = U1.exports;
const xo = /* @__PURE__ */ Ms(v), Vv = /* @__PURE__ */ SP({
  __proto__: null,
  default: xo
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FP = v, jP = Symbol.for("react.element"), NP = Symbol.for("react.fragment"), LP = Object.prototype.hasOwnProperty, BP = FP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, VP = { key: !0, ref: !0, __self: !0, __source: !0 };
function Z1(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    LP.call(t, n) && !VP.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: jP, type: e, key: i, ref: a, props: o, _owner: BP.current };
}
pc.Fragment = NP;
pc.jsx = Z1;
pc.jsxs = Z1;
W1.exports = pc;
var C = W1.exports, zf = {}, J1 = { exports: {} }, Wt = {}, eb = { exports: {} }, tb = {};
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
  function t(D, N) {
    var V = D.length;
    D.push(N);
    e:
      for (; 0 < V; ) {
        var L = V - 1 >>> 1, J = D[L];
        if (0 < o(J, N))
          D[L] = N, D[V] = J, V = L;
        else
          break e;
      }
  }
  function r(D) {
    return D.length === 0 ? null : D[0];
  }
  function n(D) {
    if (D.length === 0)
      return null;
    var N = D[0], V = D.pop();
    if (V !== N) {
      D[0] = V;
      e:
        for (var L = 0, J = D.length, B = J >>> 1; L < B; ) {
          var Q = 2 * (L + 1) - 1, ve = D[Q], se = Q + 1, ye = D[se];
          if (0 > o(ve, V))
            se < J && 0 > o(ye, ve) ? (D[L] = ye, D[se] = V, L = se) : (D[L] = ve, D[Q] = V, L = Q);
          else if (se < J && 0 > o(ye, V))
            D[L] = ye, D[se] = V, L = se;
          else
            break e;
        }
    }
    return N;
  }
  function o(D, N) {
    var V = D.sortIndex - N.sortIndex;
    return V !== 0 ? V : D.id - N.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, b = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var N = r(u); N !== null; ) {
      if (N.callback === null)
        n(u);
      else if (N.startTime <= D)
        n(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = r(u);
    }
  }
  function w(D) {
    if (g = !1, y(D), !b)
      if (r(l) !== null)
        b = !0, Y(k);
      else {
        var N = r(u);
        N !== null && O(w, N.startTime - D);
      }
  }
  function k(D, N) {
    b = !1, g && (g = !1, m($), $ = -1), p = !0;
    var V = f;
    try {
      for (y(N), d = r(l); d !== null && (!(d.expirationTime > N) || D && !z()); ) {
        var L = d.callback;
        if (typeof L == "function") {
          d.callback = null, f = d.priorityLevel;
          var J = L(d.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? d.callback = J : d === r(l) && n(l), y(N);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var B = !0;
      else {
        var Q = r(u);
        Q !== null && O(w, Q.startTime - N), B = !1;
      }
      return B;
    } finally {
      d = null, f = V, p = !1;
    }
  }
  var P = !1, _ = null, $ = -1, M = 5, R = -1;
  function z() {
    return !(e.unstable_now() - R < M);
  }
  function X() {
    if (_ !== null) {
      var D = e.unstable_now();
      R = D;
      var N = !0;
      try {
        N = _(!0, D);
      } finally {
        N ? G() : (P = !1, _ = null);
      }
    } else
      P = !1;
  }
  var G;
  if (typeof h == "function")
    G = function() {
      h(X);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), q = K.port2;
    K.port1.onmessage = X, G = function() {
      q.postMessage(null);
    };
  } else
    G = function() {
      x(X, 0);
    };
  function Y(D) {
    _ = D, P || (P = !0, G());
  }
  function O(D, N) {
    $ = x(function() {
      D(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    b || p || (b = !0, Y(k));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(D) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var V = f;
    f = N;
    try {
      return D();
    } finally {
      f = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, N) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var V = f;
    f = D;
    try {
      return N();
    } finally {
      f = V;
    }
  }, e.unstable_scheduleCallback = function(D, N, V) {
    var L = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? L + V : L) : V = L, D) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = V + J, D = { id: c++, callback: N, priorityLevel: D, startTime: V, expirationTime: J, sortIndex: -1 }, V > L ? (D.sortIndex = V, t(u, D), r(l) === null && D === r(u) && (g ? (m($), $ = -1) : g = !0, O(w, V - L))) : (D.sortIndex = J, t(l, D), b || p || (b = !0, Y(k))), D;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(D) {
    var N = f;
    return function() {
      var V = f;
      f = N;
      try {
        return D.apply(this, arguments);
      } finally {
        f = V;
      }
    };
  };
})(tb);
eb.exports = tb;
var WP = eb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rb = v, Lt = WP;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nb = /* @__PURE__ */ new Set(), Xa = {};
function Eo(e, t) {
  Pi(e, t), Pi(e + "Capture", t);
}
function Pi(e, t) {
  for (Xa[e] = t, e = 0; e < t.length; e++)
    nb.add(t[e]);
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ff = Object.prototype.hasOwnProperty, UP = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wv = {}, Uv = {};
function HP(e) {
  return Ff.call(Uv, e) ? !0 : Ff.call(Wv, e) ? !1 : UP.test(e) ? Uv[e] = !0 : (Wv[e] = !0, !1);
}
function GP(e, t, r, n) {
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
function KP(e, t, r, n) {
  if (t === null || typeof t > "u" || GP(e, t, r, n))
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
function wt(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  at[e] = new wt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  at[t] = new wt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  at[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  at[e] = new wt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  at[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  at[e] = new wt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  at[e] = new wt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  at[e] = new wt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  at[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yh = /[\-:]([a-z])/g;
function bh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    yh,
    bh
  );
  at[t] = new wt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(yh, bh);
  at[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(yh, bh);
  at[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  at[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new wt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  at[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xh(e, t, r, n) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (KP(t, r, o, n) && (r = null), n || o === null ? HP(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var cn = rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ll = Symbol.for("react.element"), Wo = Symbol.for("react.portal"), Uo = Symbol.for("react.fragment"), Sh = Symbol.for("react.strict_mode"), jf = Symbol.for("react.profiler"), ob = Symbol.for("react.provider"), ib = Symbol.for("react.context"), wh = Symbol.for("react.forward_ref"), Nf = Symbol.for("react.suspense"), Lf = Symbol.for("react.suspense_list"), kh = Symbol.for("react.memo"), xn = Symbol.for("react.lazy"), ab = Symbol.for("react.offscreen"), Hv = Symbol.iterator;
function ta(e) {
  return e === null || typeof e != "object" ? null : (e = Hv && e[Hv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Re = Object.assign, bd;
function ga(e) {
  if (bd === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      bd = t && t[1] || "";
    }
  return `
` + bd + e;
}
var xd = !1;
function Sd(e, t) {
  if (!e || xd)
    return "";
  xd = !0;
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
    xd = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? ga(e) : "";
}
function YP(e) {
  switch (e.tag) {
    case 5:
      return ga(e.type);
    case 16:
      return ga("Lazy");
    case 13:
      return ga("Suspense");
    case 19:
      return ga("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Sd(e.type, !1), e;
    case 11:
      return e = Sd(e.type.render, !1), e;
    case 1:
      return e = Sd(e.type, !0), e;
    default:
      return "";
  }
}
function Bf(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Uo:
      return "Fragment";
    case Wo:
      return "Portal";
    case jf:
      return "Profiler";
    case Sh:
      return "StrictMode";
    case Nf:
      return "Suspense";
    case Lf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ib:
        return (e.displayName || "Context") + ".Consumer";
      case ob:
        return (e._context.displayName || "Context") + ".Provider";
      case wh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case kh:
        return t = e.displayName || null, t !== null ? t : Bf(e.type) || "Memo";
      case xn:
        t = e._payload, e = e._init;
        try {
          return Bf(e(t));
        } catch {
        }
    }
  return null;
}
function qP(e) {
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
      return Bf(t);
    case 8:
      return t === Sh ? "StrictMode" : "Mode";
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
function Nn(e) {
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
function sb(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function XP(e) {
  var t = sb(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function ul(e) {
  e._valueTracker || (e._valueTracker = XP(e));
}
function lb(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = sb(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function xu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vf(e, t) {
  var r = t.checked;
  return Re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Gv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Nn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ub(e, t) {
  t = t.checked, t != null && xh(e, "checked", t, !1);
}
function Wf(e, t) {
  ub(e, t);
  var r = Nn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Uf(e, t.type, r) : t.hasOwnProperty("defaultValue") && Uf(e, t.type, Nn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Kv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Uf(e, t, r) {
  (t !== "number" || xu(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ya = Array.isArray;
function fi(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Nn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hf(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(I(91));
  return Re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yv(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(I(92));
      if (ya(r)) {
        if (1 < r.length)
          throw Error(I(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Nn(r) };
}
function cb(e, t) {
  var r = Nn(t.value), n = Nn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function qv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function db(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? db(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cl, fb = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (cl = cl || document.createElement("div"), cl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Qa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ea = {
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
}, QP = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ea).forEach(function(e) {
  QP.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ea[t] = Ea[e];
  });
});
function pb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ea.hasOwnProperty(e) && Ea[e] ? ("" + t).trim() : t + "px";
}
function hb(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = pb(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var ZP = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Kf(e, t) {
  if (t) {
    if (ZP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(I(62));
  }
}
function Yf(e, t) {
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
var qf = null;
function Ch(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xf = null, pi = null, hi = null;
function Xv(e) {
  if (e = Ds(e)) {
    if (typeof Xf != "function")
      throw Error(I(280));
    var t = e.stateNode;
    t && (t = yc(t), Xf(e.stateNode, e.type, t));
  }
}
function mb(e) {
  pi ? hi ? hi.push(e) : hi = [e] : pi = e;
}
function vb() {
  if (pi) {
    var e = pi, t = hi;
    if (hi = pi = null, Xv(e), t)
      for (e = 0; e < t.length; e++)
        Xv(t[e]);
  }
}
function gb(e, t) {
  return e(t);
}
function yb() {
}
var wd = !1;
function bb(e, t, r) {
  if (wd)
    return e(t, r);
  wd = !0;
  try {
    return gb(e, t, r);
  } finally {
    wd = !1, (pi !== null || hi !== null) && (yb(), vb());
  }
}
function Za(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = yc(r);
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
    throw Error(I(231, t, typeof r));
  return r;
}
var Qf = !1;
if (rn)
  try {
    var ra = {};
    Object.defineProperty(ra, "passive", { get: function() {
      Qf = !0;
    } }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
  } catch {
    Qf = !1;
  }
function JP(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var $a = !1, Su = null, wu = !1, Zf = null, e2 = { onError: function(e) {
  $a = !0, Su = e;
} };
function t2(e, t, r, n, o, i, a, s, l) {
  $a = !1, Su = null, JP.apply(e2, arguments);
}
function r2(e, t, r, n, o, i, a, s, l) {
  if (t2.apply(this, arguments), $a) {
    if ($a) {
      var u = Su;
      $a = !1, Su = null;
    } else
      throw Error(I(198));
    wu || (wu = !0, Zf = u);
  }
}
function $o(e) {
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
function xb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Qv(e) {
  if ($o(e) !== e)
    throw Error(I(188));
}
function n2(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $o(e), t === null)
      throw Error(I(188));
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
          return Qv(o), e;
        if (i === n)
          return Qv(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
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
          throw Error(I(189));
      }
    }
    if (r.alternate !== n)
      throw Error(I(190));
  }
  if (r.tag !== 3)
    throw Error(I(188));
  return r.stateNode.current === r ? e : t;
}
function Sb(e) {
  return e = n2(e), e !== null ? wb(e) : null;
}
function wb(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = wb(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var kb = Lt.unstable_scheduleCallback, Zv = Lt.unstable_cancelCallback, o2 = Lt.unstable_shouldYield, i2 = Lt.unstable_requestPaint, Ne = Lt.unstable_now, a2 = Lt.unstable_getCurrentPriorityLevel, _h = Lt.unstable_ImmediatePriority, Cb = Lt.unstable_UserBlockingPriority, ku = Lt.unstable_NormalPriority, s2 = Lt.unstable_LowPriority, _b = Lt.unstable_IdlePriority, hc = null, Mr = null;
function l2(e) {
  if (Mr && typeof Mr.onCommitFiberRoot == "function")
    try {
      Mr.onCommitFiberRoot(hc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var mr = Math.clz32 ? Math.clz32 : d2, u2 = Math.log, c2 = Math.LN2;
function d2(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (u2(e) / c2 | 0) | 0;
}
var dl = 64, fl = 4194304;
function ba(e) {
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
function Cu(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = ba(s) : (i &= a, i !== 0 && (n = ba(i)));
  } else
    a = r & ~o, a !== 0 ? n = ba(a) : i !== 0 && (n = ba(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - mr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function f2(e, t) {
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
function p2(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - mr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = f2(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Jf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pb() {
  var e = dl;
  return dl <<= 1, !(dl & 4194240) && (dl = 64), e;
}
function kd(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Os(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mr(t), e[t] = r;
}
function h2(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - mr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function Ph(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - mr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var he = 0;
function Tb(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Eb, Th, $b, Ab, Mb, ep = !1, pl = [], $n = null, An = null, Mn = null, Ja = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), kn = [], m2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $n = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      Mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ja.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      es.delete(t.pointerId);
  }
}
function na(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ds(t), t !== null && Th(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function v2(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return $n = na($n, e, t, r, n, o), !0;
    case "dragenter":
      return An = na(An, e, t, r, n, o), !0;
    case "mouseover":
      return Mn = na(Mn, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ja.set(i, na(Ja.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, es.set(i, na(es.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function Rb(e) {
  var t = so(e.target);
  if (t !== null) {
    var r = $o(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = xb(r), t !== null) {
          e.blockedOn = t, Mb(e.priority, function() {
            $b(r);
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
function Gl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = tp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      qf = n, r.target.dispatchEvent(n), qf = null;
    } else
      return t = Ds(r), t !== null && Th(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function eg(e, t, r) {
  Gl(e) && r.delete(t);
}
function g2() {
  ep = !1, $n !== null && Gl($n) && ($n = null), An !== null && Gl(An) && (An = null), Mn !== null && Gl(Mn) && (Mn = null), Ja.forEach(eg), es.forEach(eg);
}
function oa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ep || (ep = !0, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, g2)));
}
function ts(e) {
  function t(o) {
    return oa(o, e);
  }
  if (0 < pl.length) {
    oa(pl[0], e);
    for (var r = 1; r < pl.length; r++) {
      var n = pl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for ($n !== null && oa($n, e), An !== null && oa(An, e), Mn !== null && oa(Mn, e), Ja.forEach(t), es.forEach(t), r = 0; r < kn.length; r++)
    n = kn[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < kn.length && (r = kn[0], r.blockedOn === null); )
    Rb(r), r.blockedOn === null && kn.shift();
}
var mi = cn.ReactCurrentBatchConfig, _u = !0;
function y2(e, t, r, n) {
  var o = he, i = mi.transition;
  mi.transition = null;
  try {
    he = 1, Eh(e, t, r, n);
  } finally {
    he = o, mi.transition = i;
  }
}
function b2(e, t, r, n) {
  var o = he, i = mi.transition;
  mi.transition = null;
  try {
    he = 4, Eh(e, t, r, n);
  } finally {
    he = o, mi.transition = i;
  }
}
function Eh(e, t, r, n) {
  if (_u) {
    var o = tp(e, t, r, n);
    if (o === null)
      Od(e, t, n, Pu, r), Jv(e, n);
    else if (v2(o, e, t, r, n))
      n.stopPropagation();
    else if (Jv(e, n), t & 4 && -1 < m2.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ds(o);
        if (i !== null && Eb(i), i = tp(e, t, r, n), i === null && Od(e, t, n, Pu, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Od(e, t, n, null, r);
  }
}
var Pu = null;
function tp(e, t, r, n) {
  if (Pu = null, e = Ch(n), e = so(e), e !== null)
    if (t = $o(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = xb(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Pu = e, null;
}
function Ob(e) {
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
      switch (a2()) {
        case _h:
          return 1;
        case Cb:
          return 4;
        case ku:
        case s2:
          return 16;
        case _b:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null, $h = null, Kl = null;
function Ib() {
  if (Kl)
    return Kl;
  var e, t = $h, r = t.length, n, o = "value" in Tn ? Tn.value : Tn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Kl = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Yl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hl() {
  return !0;
}
function tg() {
  return !1;
}
function Ut(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hl : tg, this.isPropagationStopped = tg, this;
  }
  return Re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = hl);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = hl);
  }, persist: function() {
  }, isPersistent: hl }), t;
}
var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ah = Ut(Ui), Is = Re({}, Ui, { view: 0, detail: 0 }), x2 = Ut(Is), Cd, _d, ia, mc = Re({}, Is, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ia && (ia && e.type === "mousemove" ? (Cd = e.screenX - ia.screenX, _d = e.screenY - ia.screenY) : _d = Cd = 0, ia = e), Cd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _d;
} }), rg = Ut(mc), S2 = Re({}, mc, { dataTransfer: 0 }), w2 = Ut(S2), k2 = Re({}, Is, { relatedTarget: 0 }), Pd = Ut(k2), C2 = Re({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _2 = Ut(C2), P2 = Re({}, Ui, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), T2 = Ut(P2), E2 = Re({}, Ui, { data: 0 }), ng = Ut(E2), $2 = {
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
}, A2 = {
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
}, M2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function R2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = M2[e]) ? !!t[e] : !1;
}
function Mh() {
  return R2;
}
var O2 = Re({}, Is, { key: function(e) {
  if (e.key) {
    var t = $2[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Yl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? A2[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mh, charCode: function(e) {
  return e.type === "keypress" ? Yl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), I2 = Ut(O2), D2 = Re({}, mc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), og = Ut(D2), z2 = Re({}, Is, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mh }), F2 = Ut(z2), j2 = Re({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), N2 = Ut(j2), L2 = Re({}, mc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), B2 = Ut(L2), V2 = [9, 13, 27, 32], Rh = rn && "CompositionEvent" in window, Aa = null;
rn && "documentMode" in document && (Aa = document.documentMode);
var W2 = rn && "TextEvent" in window && !Aa, Db = rn && (!Rh || Aa && 8 < Aa && 11 >= Aa), ig = " ", ag = !1;
function zb(e, t) {
  switch (e) {
    case "keyup":
      return V2.indexOf(t.keyCode) !== -1;
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
function Fb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ho = !1;
function U2(e, t) {
  switch (e) {
    case "compositionend":
      return Fb(t);
    case "keypress":
      return t.which !== 32 ? null : (ag = !0, ig);
    case "textInput":
      return e = t.data, e === ig && ag ? null : e;
    default:
      return null;
  }
}
function H2(e, t) {
  if (Ho)
    return e === "compositionend" || !Rh && zb(e, t) ? (e = Ib(), Kl = $h = Tn = null, Ho = !1, e) : null;
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
      return Db && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var G2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!G2[e.type] : t === "textarea";
}
function jb(e, t, r, n) {
  mb(n), t = Tu(t, "onChange"), 0 < t.length && (r = new Ah("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Ma = null, rs = null;
function K2(e) {
  qb(e, 0);
}
function vc(e) {
  var t = Yo(e);
  if (lb(t))
    return e;
}
function Y2(e, t) {
  if (e === "change")
    return t;
}
var Nb = !1;
if (rn) {
  var Td;
  if (rn) {
    var Ed = "oninput" in document;
    if (!Ed) {
      var lg = document.createElement("div");
      lg.setAttribute("oninput", "return;"), Ed = typeof lg.oninput == "function";
    }
    Td = Ed;
  } else
    Td = !1;
  Nb = Td && (!document.documentMode || 9 < document.documentMode);
}
function ug() {
  Ma && (Ma.detachEvent("onpropertychange", Lb), rs = Ma = null);
}
function Lb(e) {
  if (e.propertyName === "value" && vc(rs)) {
    var t = [];
    jb(t, rs, e, Ch(e)), bb(K2, t);
  }
}
function q2(e, t, r) {
  e === "focusin" ? (ug(), Ma = t, rs = r, Ma.attachEvent("onpropertychange", Lb)) : e === "focusout" && ug();
}
function X2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vc(rs);
}
function Q2(e, t) {
  if (e === "click")
    return vc(t);
}
function Z2(e, t) {
  if (e === "input" || e === "change")
    return vc(t);
}
function J2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var gr = typeof Object.is == "function" ? Object.is : J2;
function ns(e, t) {
  if (gr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Ff.call(t, o) || !gr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function cg(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function dg(e, t) {
  var r = cg(e);
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
    r = cg(r);
  }
}
function Bb(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Vb() {
  for (var e = window, t = xu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = xu(e.document);
  }
  return t;
}
function Oh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function eT(e) {
  var t = Vb(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Bb(r.ownerDocument.documentElement, r)) {
    if (n !== null && Oh(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = dg(r, i);
        var a = dg(
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
var tT = rn && "documentMode" in document && 11 >= document.documentMode, Go = null, rp = null, Ra = null, np = !1;
function fg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  np || Go == null || Go !== xu(n) || (n = Go, "selectionStart" in n && Oh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Ra && ns(Ra, n) || (Ra = n, n = Tu(rp, "onSelect"), 0 < n.length && (t = new Ah("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Go)));
}
function ml(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Ko = { animationend: ml("Animation", "AnimationEnd"), animationiteration: ml("Animation", "AnimationIteration"), animationstart: ml("Animation", "AnimationStart"), transitionend: ml("Transition", "TransitionEnd") }, $d = {}, Wb = {};
rn && (Wb = document.createElement("div").style, "AnimationEvent" in window || (delete Ko.animationend.animation, delete Ko.animationiteration.animation, delete Ko.animationstart.animation), "TransitionEvent" in window || delete Ko.transitionend.transition);
function gc(e) {
  if ($d[e])
    return $d[e];
  if (!Ko[e])
    return e;
  var t = Ko[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in Wb)
      return $d[e] = t[r];
  return e;
}
var Ub = gc("animationend"), Hb = gc("animationiteration"), Gb = gc("animationstart"), Kb = gc("transitionend"), Yb = /* @__PURE__ */ new Map(), pg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wn(e, t) {
  Yb.set(e, t), Eo(t, [e]);
}
for (var Ad = 0; Ad < pg.length; Ad++) {
  var Md = pg[Ad], rT = Md.toLowerCase(), nT = Md[0].toUpperCase() + Md.slice(1);
  Wn(rT, "on" + nT);
}
Wn(Ub, "onAnimationEnd");
Wn(Hb, "onAnimationIteration");
Wn(Gb, "onAnimationStart");
Wn("dblclick", "onDoubleClick");
Wn("focusin", "onFocus");
Wn("focusout", "onBlur");
Wn(Kb, "onTransitionEnd");
Pi("onMouseEnter", ["mouseout", "mouseover"]);
Pi("onMouseLeave", ["mouseout", "mouseover"]);
Pi("onPointerEnter", ["pointerout", "pointerover"]);
Pi("onPointerLeave", ["pointerout", "pointerover"]);
Eo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Eo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Eo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), oT = new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));
function hg(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, r2(n, t, void 0, e), e.currentTarget = null;
}
function qb(e, t) {
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
          hg(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          hg(o, s, u), i = l;
        }
    }
  }
  if (wu)
    throw e = Zf, wu = !1, Zf = null, e;
}
function ke(e, t) {
  var r = t[lp];
  r === void 0 && (r = t[lp] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Xb(t, e, 2, !1), r.add(n));
}
function Rd(e, t, r) {
  var n = 0;
  t && (n |= 4), Xb(r, e, n, t);
}
var vl = "_reactListening" + Math.random().toString(36).slice(2);
function os(e) {
  if (!e[vl]) {
    e[vl] = !0, nb.forEach(function(r) {
      r !== "selectionchange" && (oT.has(r) || Rd(r, !1, e), Rd(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vl] || (t[vl] = !0, Rd("selectionchange", !1, t));
  }
}
function Xb(e, t, r, n) {
  switch (Ob(t)) {
    case 1:
      var o = y2;
      break;
    case 4:
      o = b2;
      break;
    default:
      o = Eh;
  }
  r = o.bind(null, t, r, e), o = void 0, !Qf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Od(e, t, r, n, o) {
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
            if (a = so(s), a === null)
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
  bb(function() {
    var u = i, c = Ch(r), d = [];
    e: {
      var f = Yb.get(e);
      if (f !== void 0) {
        var p = Ah, b = e;
        switch (e) {
          case "keypress":
            if (Yl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = I2;
            break;
          case "focusin":
            b = "focus", p = Pd;
            break;
          case "focusout":
            b = "blur", p = Pd;
            break;
          case "beforeblur":
          case "afterblur":
            p = Pd;
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
            p = rg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = w2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = F2;
            break;
          case Ub:
          case Hb:
          case Gb:
            p = _2;
            break;
          case Kb:
            p = N2;
            break;
          case "scroll":
            p = x2;
            break;
          case "wheel":
            p = B2;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = T2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = og;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null && (y = w, m !== null && (w = Za(h, m), w != null && g.push(is(h, w, y)))), x)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, b, null, r, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== qf && (b = r.relatedTarget || r.fromElement) && (so(b) || b[nn]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (b = r.relatedTarget || r.toElement, p = u, b = b ? so(b) : null, b !== null && (x = $o(b), b !== x || b.tag !== 5 && b.tag !== 6) && (b = null)) : (p = null, b = u), p !== b)) {
          if (g = rg, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = og, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : Yo(p), y = b == null ? f : Yo(b), f = new g(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = y, w = null, so(c) === u && (g = new g(m, h + "enter", b, r, c), g.target = y, g.relatedTarget = x, w = g), x = w, p && b)
            t: {
              for (g = p, m = b, h = 0, y = g; y; y = zo(y))
                h++;
              for (y = 0, w = m; w; w = zo(w))
                y++;
              for (; 0 < h - y; )
                g = zo(g), h--;
              for (; 0 < y - h; )
                m = zo(m), y--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = zo(g), m = zo(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && mg(d, f, p, g, !1), b !== null && x !== null && mg(d, x, b, g, !0);
        }
      }
      e: {
        if (f = u ? Yo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = Y2;
        else if (sg(f))
          if (Nb)
            k = Z2;
          else {
            k = X2;
            var P = q2;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = Q2);
        if (k && (k = k(e, u))) {
          jb(d, k, r, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Uf(f, "number", f.value);
      }
      switch (P = u ? Yo(u) : window, e) {
        case "focusin":
          (sg(P) || P.contentEditable === "true") && (Go = P, rp = u, Ra = null);
          break;
        case "focusout":
          Ra = rp = Go = null;
          break;
        case "mousedown":
          np = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          np = !1, fg(d, r, c);
          break;
        case "selectionchange":
          if (tT)
            break;
        case "keydown":
        case "keyup":
          fg(d, r, c);
      }
      var _;
      if (Rh)
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
        Ho ? zb(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (Db && r.locale !== "ko" && (Ho || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ho && (_ = Ib()) : (Tn = c, $h = "value" in Tn ? Tn.value : Tn.textContent, Ho = !0)), P = Tu(u, $), 0 < P.length && ($ = new ng($, e, null, r, c), d.push({ event: $, listeners: P }), _ ? $.data = _ : (_ = Fb(r), _ !== null && ($.data = _)))), (_ = W2 ? U2(e, r) : H2(e, r)) && (u = Tu(u, "onBeforeInput"), 0 < u.length && (c = new ng("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    qb(d, t);
  });
}
function is(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Tu(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Za(e, r), i != null && n.unshift(is(e, i, o)), i = Za(e, t), i != null && n.push(is(e, i, o))), e = e.return;
  }
  return n;
}
function zo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Za(r, i), l != null && a.unshift(is(r, l, s))) : o || (l = Za(r, i), l != null && a.push(is(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var iT = /\r\n?/g, aT = /\u0000|\uFFFD/g;
function vg(e) {
  return (typeof e == "string" ? e : "" + e).replace(iT, `
`).replace(aT, "");
}
function gl(e, t, r) {
  if (t = vg(t), vg(e) !== t && r)
    throw Error(I(425));
}
function Eu() {
}
var op = null, ip = null;
function ap(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var sp = typeof setTimeout == "function" ? setTimeout : void 0, sT = typeof clearTimeout == "function" ? clearTimeout : void 0, gg = typeof Promise == "function" ? Promise : void 0, lT = typeof queueMicrotask == "function" ? queueMicrotask : typeof gg < "u" ? function(e) {
  return gg.resolve(null).then(e).catch(uT);
} : sp;
function uT(e) {
  setTimeout(function() {
    throw e;
  });
}
function Id(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), ts(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  ts(t);
}
function Rn(e) {
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
function yg(e) {
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
var Hi = Math.random().toString(36).slice(2), Tr = "__reactFiber$" + Hi, as = "__reactProps$" + Hi, nn = "__reactContainer$" + Hi, lp = "__reactEvents$" + Hi, cT = "__reactListeners$" + Hi, dT = "__reactHandles$" + Hi;
function so(e) {
  var t = e[Tr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[nn] || r[Tr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = yg(e); e !== null; ) {
          if (r = e[Tr])
            return r;
          e = yg(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Ds(e) {
  return e = e[Tr] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(I(33));
}
function yc(e) {
  return e[as] || null;
}
var up = [], qo = -1;
function Un(e) {
  return { current: e };
}
function _e(e) {
  0 > qo || (e.current = up[qo], up[qo] = null, qo--);
}
function xe(e, t) {
  qo++, up[qo] = e.current, e.current = t;
}
var Ln = {}, ht = Un(Ln), Pt = Un(!1), So = Ln;
function Ti(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return Ln;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Tt(e) {
  return e = e.childContextTypes, e != null;
}
function $u() {
  _e(Pt), _e(ht);
}
function bg(e, t, r) {
  if (ht.current !== Ln)
    throw Error(I(168));
  xe(ht, t), xe(Pt, r);
}
function Qb(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(I(108, qP(e) || "Unknown", o));
  return Re({}, r, n);
}
function Au(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, So = ht.current, xe(ht, e), xe(Pt, Pt.current), !0;
}
function xg(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(I(169));
  r ? (e = Qb(e, t, So), n.__reactInternalMemoizedMergedChildContext = e, _e(Pt), _e(ht), xe(ht, e)) : _e(Pt), xe(Pt, r);
}
var Hr = null, bc = !1, Dd = !1;
function Zb(e) {
  Hr === null ? Hr = [e] : Hr.push(e);
}
function fT(e) {
  bc = !0, Zb(e);
}
function Hn() {
  if (!Dd && Hr !== null) {
    Dd = !0;
    var e = 0, t = he;
    try {
      var r = Hr;
      for (he = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Hr = null, bc = !1;
    } catch (o) {
      throw Hr !== null && (Hr = Hr.slice(e + 1)), kb(_h, Hn), o;
    } finally {
      he = t, Dd = !1;
    }
  }
  return null;
}
var Xo = [], Qo = 0, Mu = null, Ru = 0, Zt = [], Jt = 0, wo = null, Yr = 1, qr = "";
function eo(e, t) {
  Xo[Qo++] = Ru, Xo[Qo++] = Mu, Mu = e, Ru = t;
}
function Jb(e, t, r) {
  Zt[Jt++] = Yr, Zt[Jt++] = qr, Zt[Jt++] = wo, wo = e;
  var n = Yr;
  e = qr;
  var o = 32 - mr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - mr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Yr = 1 << 32 - mr(t) + o | r << o | n, qr = i + e;
  } else
    Yr = 1 << i | r << o | n, qr = e;
}
function Ih(e) {
  e.return !== null && (eo(e, 1), Jb(e, 1, 0));
}
function Dh(e) {
  for (; e === Mu; )
    Mu = Xo[--Qo], Xo[Qo] = null, Ru = Xo[--Qo], Xo[Qo] = null;
  for (; e === wo; )
    wo = Zt[--Jt], Zt[Jt] = null, qr = Zt[--Jt], Zt[Jt] = null, Yr = Zt[--Jt], Zt[Jt] = null;
}
var Ft = null, zt = null, Ee = !1, pr = null;
function ex(e, t) {
  var r = er(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Sg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ft = e, zt = Rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ft = e, zt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = wo !== null ? { id: Yr, overflow: qr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = er(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ft = e, zt = null, !0) : !1;
    default:
      return !1;
  }
}
function cp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dp(e) {
  if (Ee) {
    var t = zt;
    if (t) {
      var r = t;
      if (!Sg(e, t)) {
        if (cp(e))
          throw Error(I(418));
        t = Rn(r.nextSibling);
        var n = Ft;
        t && Sg(e, t) ? ex(n, r) : (e.flags = e.flags & -4097 | 2, Ee = !1, Ft = e);
      }
    } else {
      if (cp(e))
        throw Error(I(418));
      e.flags = e.flags & -4097 | 2, Ee = !1, Ft = e;
    }
  }
}
function wg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function yl(e) {
  if (e !== Ft)
    return !1;
  if (!Ee)
    return wg(e), Ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ap(e.type, e.memoizedProps)), t && (t = zt)) {
    if (cp(e))
      throw tx(), Error(I(418));
    for (; t; )
      ex(e, t), t = Rn(t.nextSibling);
  }
  if (wg(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              zt = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else
    zt = Ft ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function tx() {
  for (var e = zt; e; )
    e = Rn(e.nextSibling);
}
function Ei() {
  zt = Ft = null, Ee = !1;
}
function zh(e) {
  pr === null ? pr = [e] : pr.push(e);
}
var pT = cn.ReactCurrentBatchConfig;
function dr(e, t) {
  if (e && e.defaultProps) {
    t = Re({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ou = Un(null), Iu = null, Zo = null, Fh = null;
function jh() {
  Fh = Zo = Iu = null;
}
function Nh(e) {
  var t = Ou.current;
  _e(Ou), e._currentValue = t;
}
function fp(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function vi(e, t) {
  Iu = e, Fh = Zo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
}
function ir(e) {
  var t = e._currentValue;
  if (Fh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Zo === null) {
      if (Iu === null)
        throw Error(I(308));
      Zo = e, Iu.dependencies = { lanes: 0, firstContext: e };
    } else
      Zo = Zo.next = e;
  return t;
}
var lo = null;
function Lh(e) {
  lo === null ? lo = [e] : lo.push(e);
}
function rx(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Lh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, on(e, n);
}
function on(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Sn = !1;
function Bh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Zr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function On(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, oe & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, on(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Lh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, on(e, r);
}
function ql(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ph(e, r);
  }
}
function kg(e, t) {
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
function Du(e, t, r, n) {
  var o = e.updateQueue;
  Sn = !1;
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
          var b = e, g = s;
          switch (f = t, p = r, g.tag) {
            case 1:
              if (b = g.payload, typeof b == "function") {
                d = b.call(p, d, f);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = g.payload, f = typeof b == "function" ? b.call(p, d, f) : b, f == null)
                break e;
              d = Re({}, d, f);
              break e;
            case 2:
              Sn = !0;
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
    Co |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Cg(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(I(191, o));
        o.call(n);
      }
    }
}
var ox = new rb.Component().refs;
function pp(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Re({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var xc = { isMounted: function(e) {
  return (e = e._reactInternals) ? $o(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = bt(), o = Dn(e), i = Zr(n, o);
  i.payload = t, r != null && (i.callback = r), t = On(e, i, o), t !== null && (vr(t, e, o, n), ql(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = bt(), o = Dn(e), i = Zr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = On(e, i, o), t !== null && (vr(t, e, o, n), ql(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = bt(), n = Dn(e), o = Zr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = On(e, o, n), t !== null && (vr(t, e, n, r), ql(t, e, n));
} };
function _g(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ns(r, n) || !ns(o, i) : !0;
}
function ix(e, t, r) {
  var n = !1, o = Ln, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ir(i) : (o = Tt(t) ? So : ht.current, n = t.contextTypes, i = (n = n != null) ? Ti(e, o) : Ln), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xc, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Pg(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && xc.enqueueReplaceState(t, t.state, null);
}
function hp(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = ox, Bh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ir(i) : (i = Tt(t) ? So : ht.current, o.context = Ti(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (pp(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && xc.enqueueReplaceState(o, o.state, null), Du(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function aa(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(I(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(I(147, e));
      var o = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === ox && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(I(284));
    if (!r._owner)
      throw Error(I(290, e));
  }
  return e;
}
function bl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Tg(e) {
  var t = e._init;
  return t(e._payload);
}
function ax(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [h], m.flags |= 16) : y.push(h);
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
    return m = zn(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, w) {
    return h === null || h.tag !== 6 ? (h = Vd(y, m.mode, w), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, w) {
    var k = y.type;
    return k === Uo ? c(m, h, y.props.children, w, y.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && Tg(k) === h.type) ? (w = o(h, y.props), w.ref = aa(m, h, y), w.return = m, w) : (w = tu(y.type, y.key, y.props, null, m.mode, w), w.ref = aa(m, h, y), w.return = m, w);
  }
  function u(m, h, y, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Wd(y, m.mode, w), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function c(m, h, y, w, k) {
    return h === null || h.tag !== 7 ? (h = mo(y, m.mode, w, k), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function d(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Vd("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ll:
          return y = tu(h.type, h.key, h.props, null, m.mode, y), y.ref = aa(m, null, h), y.return = m, y;
        case Wo:
          return h = Wd(h, m.mode, y), h.return = m, h;
        case xn:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (ya(h) || ta(h))
        return h = mo(h, m.mode, y, null), h.return = m, h;
      bl(m, h);
    }
    return null;
  }
  function f(m, h, y, w) {
    var k = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return k !== null ? null : s(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ll:
          return y.key === k ? l(m, h, y, w) : null;
        case Wo:
          return y.key === k ? u(m, h, y, w) : null;
        case xn:
          return k = y._init, f(
            m,
            h,
            k(y._payload),
            w
          );
      }
      if (ya(y) || ta(y))
        return k !== null ? null : c(m, h, y, w, null);
      bl(m, y);
    }
    return null;
  }
  function p(m, h, y, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(y) || null, s(h, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ll:
          return m = m.get(w.key === null ? y : w.key) || null, l(h, m, w, k);
        case Wo:
          return m = m.get(w.key === null ? y : w.key) || null, u(h, m, w, k);
        case xn:
          var P = w._init;
          return p(m, h, y, P(w._payload), k);
      }
      if (ya(w) || ta(w))
        return m = m.get(y) || null, c(h, m, w, k, null);
      bl(h, w);
    }
    return null;
  }
  function b(m, h, y, w) {
    for (var k = null, P = null, _ = h, $ = h = 0, M = null; _ !== null && $ < y.length; $++) {
      _.index > $ ? (M = _, _ = null) : M = _.sibling;
      var R = f(m, _, y[$], w);
      if (R === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && R.alternate === null && t(m, _), h = i(R, h, $), P === null ? k = R : P.sibling = R, P = R, _ = M;
    }
    if ($ === y.length)
      return r(m, _), Ee && eo(m, $), k;
    if (_ === null) {
      for (; $ < y.length; $++)
        _ = d(m, y[$], w), _ !== null && (h = i(_, h, $), P === null ? k = _ : P.sibling = _, P = _);
      return Ee && eo(m, $), k;
    }
    for (_ = n(m, _); $ < y.length; $++)
      M = p(_, m, $, y[$], w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? $ : M.key), h = i(M, h, $), P === null ? k = M : P.sibling = M, P = M);
    return e && _.forEach(function(z) {
      return t(m, z);
    }), Ee && eo(m, $), k;
  }
  function g(m, h, y, w) {
    var k = ta(y);
    if (typeof k != "function")
      throw Error(I(150));
    if (y = k.call(y), y == null)
      throw Error(I(151));
    for (var P = k = null, _ = h, $ = h = 0, M = null, R = y.next(); _ !== null && !R.done; $++, R = y.next()) {
      _.index > $ ? (M = _, _ = null) : M = _.sibling;
      var z = f(m, _, R.value, w);
      if (z === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && z.alternate === null && t(m, _), h = i(z, h, $), P === null ? k = z : P.sibling = z, P = z, _ = M;
    }
    if (R.done)
      return r(
        m,
        _
      ), Ee && eo(m, $), k;
    if (_ === null) {
      for (; !R.done; $++, R = y.next())
        R = d(m, R.value, w), R !== null && (h = i(R, h, $), P === null ? k = R : P.sibling = R, P = R);
      return Ee && eo(m, $), k;
    }
    for (_ = n(m, _); !R.done; $++, R = y.next())
      R = p(_, m, $, R.value, w), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? $ : R.key), h = i(R, h, $), P === null ? k = R : P.sibling = R, P = R);
    return e && _.forEach(function(X) {
      return t(m, X);
    }), Ee && eo(m, $), k;
  }
  function x(m, h, y, w) {
    if (typeof y == "object" && y !== null && y.type === Uo && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ll:
          e: {
            for (var k = y.key, P = h; P !== null; ) {
              if (P.key === k) {
                if (k = y.type, k === Uo) {
                  if (P.tag === 7) {
                    r(m, P.sibling), h = o(P, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && Tg(k) === P.type) {
                  r(m, P.sibling), h = o(P, y.props), h.ref = aa(m, P, y), h.return = m, m = h;
                  break e;
                }
                r(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            y.type === Uo ? (h = mo(y.props.children, m.mode, w, y.key), h.return = m, m = h) : (w = tu(y.type, y.key, y.props, null, m.mode, w), w.ref = aa(m, h, y), w.return = m, m = w);
          }
          return a(m);
        case Wo:
          e: {
            for (P = y.key; h !== null; ) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  r(m, h.sibling), h = o(h, y.children || []), h.return = m, m = h;
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Wd(y, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case xn:
          return P = y._init, x(m, h, P(y._payload), w);
      }
      if (ya(y))
        return b(m, h, y, w);
      if (ta(y))
        return g(m, h, y, w);
      bl(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, y), h.return = m, m = h) : (r(m, h), h = Vd(y, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var $i = ax(!0), sx = ax(!1), zs = {}, Rr = Un(zs), ss = Un(zs), ls = Un(zs);
function uo(e) {
  if (e === zs)
    throw Error(I(174));
  return e;
}
function Vh(e, t) {
  switch (xe(ls, t), xe(ss, e), xe(Rr, zs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gf(t, e);
  }
  _e(Rr), xe(Rr, t);
}
function Ai() {
  _e(Rr), _e(ss), _e(ls);
}
function lx(e) {
  uo(ls.current);
  var t = uo(Rr.current), r = Gf(t, e.type);
  t !== r && (xe(ss, e), xe(Rr, r));
}
function Wh(e) {
  ss.current === e && (_e(Rr), _e(ss));
}
var $e = Un(0);
function zu(e) {
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
var zd = [];
function Uh() {
  for (var e = 0; e < zd.length; e++)
    zd[e]._workInProgressVersionPrimary = null;
  zd.length = 0;
}
var Xl = cn.ReactCurrentDispatcher, Fd = cn.ReactCurrentBatchConfig, ko = 0, Me = null, He = null, qe = null, Fu = !1, Oa = !1, us = 0, hT = 0;
function ut() {
  throw Error(I(321));
}
function Hh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!gr(e[r], t[r]))
      return !1;
  return !0;
}
function Gh(e, t, r, n, o, i) {
  if (ko = i, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xl.current = e === null || e.memoizedState === null ? yT : bT, e = r(n, o), Oa) {
    i = 0;
    do {
      if (Oa = !1, us = 0, 25 <= i)
        throw Error(I(301));
      i += 1, qe = He = null, t.updateQueue = null, Xl.current = xT, e = r(n, o);
    } while (Oa);
  }
  if (Xl.current = ju, t = He !== null && He.next !== null, ko = 0, qe = He = Me = null, Fu = !1, t)
    throw Error(I(300));
  return e;
}
function Kh() {
  var e = us !== 0;
  return us = 0, e;
}
function wr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return qe === null ? Me.memoizedState = qe = e : qe = qe.next = e, qe;
}
function ar() {
  if (He === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = He.next;
  var t = qe === null ? Me.memoizedState : qe.next;
  if (t !== null)
    qe = t, He = e;
  else {
    if (e === null)
      throw Error(I(310));
    He = e, e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }, qe === null ? Me.memoizedState = qe = e : qe = qe.next = e;
  }
  return qe;
}
function cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jd(e) {
  var t = ar(), r = t.queue;
  if (r === null)
    throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = He, o = n.baseQueue, i = r.pending;
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
      if ((ko & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Me.lanes |= c, Co |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, gr(n, t.memoizedState) || (_t = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Me.lanes |= i, Co |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Nd(e) {
  var t = ar(), r = t.queue;
  if (r === null)
    throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    gr(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function ux() {
}
function cx(e, t) {
  var r = Me, n = ar(), o = t(), i = !gr(n.memoizedState, o);
  if (i && (n.memoizedState = o, _t = !0), n = n.queue, Yh(px.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || qe !== null && qe.memoizedState.tag & 1) {
    if (r.flags |= 2048, ds(9, fx.bind(null, r, n, o, t), void 0, null), Xe === null)
      throw Error(I(349));
    ko & 30 || dx(r, t, o);
  }
  return o;
}
function dx(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function fx(e, t, r, n) {
  t.value = r, t.getSnapshot = n, hx(t) && mx(e);
}
function px(e, t, r) {
  return r(function() {
    hx(t) && mx(e);
  });
}
function hx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !gr(e, r);
  } catch {
    return !0;
  }
}
function mx(e) {
  var t = on(e, 1);
  t !== null && vr(t, e, 1, -1);
}
function Eg(e) {
  var t = wr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cs, lastRenderedState: e }, t.queue = e, e = e.dispatch = gT.bind(null, Me, e), [t.memoizedState, e];
}
function ds(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function vx() {
  return ar().memoizedState;
}
function Ql(e, t, r, n) {
  var o = wr();
  Me.flags |= e, o.memoizedState = ds(1 | t, r, void 0, n === void 0 ? null : n);
}
function Sc(e, t, r, n) {
  var o = ar();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (He !== null) {
    var a = He.memoizedState;
    if (i = a.destroy, n !== null && Hh(n, a.deps)) {
      o.memoizedState = ds(t, r, i, n);
      return;
    }
  }
  Me.flags |= e, o.memoizedState = ds(1 | t, r, i, n);
}
function $g(e, t) {
  return Ql(8390656, 8, e, t);
}
function Yh(e, t) {
  return Sc(2048, 8, e, t);
}
function gx(e, t) {
  return Sc(4, 2, e, t);
}
function yx(e, t) {
  return Sc(4, 4, e, t);
}
function bx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function xx(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Sc(4, 4, bx.bind(null, t, e), r);
}
function qh() {
}
function Sx(e, t) {
  var r = ar();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Hh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function wx(e, t) {
  var r = ar();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Hh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function kx(e, t, r) {
  return ko & 21 ? (gr(r, t) || (r = Pb(), Me.lanes |= r, Co |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = r);
}
function mT(e, t) {
  var r = he;
  he = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Fd.transition;
  Fd.transition = {};
  try {
    e(!1), t();
  } finally {
    he = r, Fd.transition = n;
  }
}
function Cx() {
  return ar().memoizedState;
}
function vT(e, t, r) {
  var n = Dn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, _x(e))
    Px(t, r);
  else if (r = rx(e, t, r, n), r !== null) {
    var o = bt();
    vr(r, e, n, o), Tx(r, t, n);
  }
}
function gT(e, t, r) {
  var n = Dn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (_x(e))
    Px(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, gr(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Lh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = rx(e, t, o, n), r !== null && (o = bt(), vr(r, e, n, o), Tx(r, t, n));
  }
}
function _x(e) {
  var t = e.alternate;
  return e === Me || t !== null && t === Me;
}
function Px(e, t) {
  Oa = Fu = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Tx(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ph(e, r);
  }
}
var ju = { readContext: ir, useCallback: ut, useContext: ut, useEffect: ut, useImperativeHandle: ut, useInsertionEffect: ut, useLayoutEffect: ut, useMemo: ut, useReducer: ut, useRef: ut, useState: ut, useDebugValue: ut, useDeferredValue: ut, useTransition: ut, useMutableSource: ut, useSyncExternalStore: ut, useId: ut, unstable_isNewReconciler: !1 }, yT = { readContext: ir, useCallback: function(e, t) {
  return wr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ir, useEffect: $g, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ql(
    4194308,
    4,
    bx.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Ql(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ql(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = wr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = wr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = vT.bind(null, Me, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = wr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Eg, useDebugValue: qh, useDeferredValue: function(e) {
  return wr().memoizedState = e;
}, useTransition: function() {
  var e = Eg(!1), t = e[0];
  return e = mT.bind(null, e[1]), wr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Me, o = wr();
  if (Ee) {
    if (r === void 0)
      throw Error(I(407));
    r = r();
  } else {
    if (r = t(), Xe === null)
      throw Error(I(349));
    ko & 30 || dx(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, $g(px.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, ds(9, fx.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = wr(), t = Xe.identifierPrefix;
  if (Ee) {
    var r = qr, n = Yr;
    r = (n & ~(1 << 32 - mr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = us++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = hT++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bT = {
  readContext: ir,
  useCallback: Sx,
  useContext: ir,
  useEffect: Yh,
  useImperativeHandle: xx,
  useInsertionEffect: gx,
  useLayoutEffect: yx,
  useMemo: wx,
  useReducer: jd,
  useRef: vx,
  useState: function() {
    return jd(cs);
  },
  useDebugValue: qh,
  useDeferredValue: function(e) {
    var t = ar();
    return kx(t, He.memoizedState, e);
  },
  useTransition: function() {
    var e = jd(cs)[0], t = ar().memoizedState;
    return [e, t];
  },
  useMutableSource: ux,
  useSyncExternalStore: cx,
  useId: Cx,
  unstable_isNewReconciler: !1
}, xT = { readContext: ir, useCallback: Sx, useContext: ir, useEffect: Yh, useImperativeHandle: xx, useInsertionEffect: gx, useLayoutEffect: yx, useMemo: wx, useReducer: Nd, useRef: vx, useState: function() {
  return Nd(cs);
}, useDebugValue: qh, useDeferredValue: function(e) {
  var t = ar();
  return He === null ? t.memoizedState = e : kx(t, He.memoizedState, e);
}, useTransition: function() {
  var e = Nd(cs)[0], t = ar().memoizedState;
  return [e, t];
}, useMutableSource: ux, useSyncExternalStore: cx, useId: Cx, unstable_isNewReconciler: !1 };
function Mi(e, t) {
  try {
    var r = "", n = t;
    do
      r += YP(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ld(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function mp(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var ST = typeof WeakMap == "function" ? WeakMap : Map;
function Ex(e, t, r) {
  r = Zr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Lu || (Lu = !0, _p = n), mp(e, t);
  }, r;
}
function $x(e, t, r) {
  r = Zr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      mp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    mp(e, t), typeof n != "function" && (In === null ? In = /* @__PURE__ */ new Set([this]) : In.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function Ag(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ST();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = DT.bind(null, e, t, r), t.then(e, e));
}
function Mg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rg(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Zr(-1, 1), t.tag = 2, On(r, t, 1))), r.lanes |= 1), e);
}
var wT = cn.ReactCurrentOwner, _t = !1;
function gt(e, t, r, n) {
  t.child = e === null ? sx(t, null, r, n) : $i(t, e.child, r, n);
}
function Og(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return vi(t, o), n = Gh(e, t, r, n, i, o), r = Kh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, an(e, t, o)) : (Ee && r && Ih(t), t.flags |= 1, gt(e, t, n, o), t.child);
}
function Ig(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !nm(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ax(e, t, i, n, o)) : (e = tu(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : ns, r(a, n) && e.ref === t.ref)
      return an(e, t, o);
  }
  return t.flags |= 1, e = zn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Ax(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ns(i, n) && e.ref === t.ref)
      if (_t = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (_t = !0);
      else
        return t.lanes = e.lanes, an(e, t, o);
  }
  return vp(e, t, r, n, o);
}
function Mx(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(ei, Dt), Dt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(ei, Dt), Dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, xe(ei, Dt), Dt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, xe(ei, Dt), Dt |= n;
  return gt(e, t, o, r), t.child;
}
function Rx(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function vp(e, t, r, n, o) {
  var i = Tt(r) ? So : ht.current;
  return i = Ti(t, i), vi(t, o), r = Gh(e, t, r, n, i, o), n = Kh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, an(e, t, o)) : (Ee && n && Ih(t), t.flags |= 1, gt(e, t, r, o), t.child);
}
function Dg(e, t, r, n, o) {
  if (Tt(r)) {
    var i = !0;
    Au(t);
  } else
    i = !1;
  if (vi(t, o), t.stateNode === null)
    Zl(e, t), ix(t, r, n), hp(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = ir(u) : (u = Tt(r) ? So : ht.current, u = Ti(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Pg(t, a, n, u), Sn = !1;
    var f = t.memoizedState;
    a.state = f, Du(t, n, a, o), l = t.memoizedState, s !== n || f !== l || Pt.current || Sn ? (typeof c == "function" && (pp(t, r, c, n), l = t.memoizedState), (s = Sn || _g(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, nx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : dr(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = ir(l) : (l = Tt(r) ? So : ht.current, l = Ti(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Pg(t, a, n, l), Sn = !1, f = t.memoizedState, a.state = f, Du(t, n, a, o);
    var b = t.memoizedState;
    s !== d || f !== b || Pt.current || Sn ? (typeof p == "function" && (pp(t, r, p, n), b = t.memoizedState), (u = Sn || _g(t, r, u, n, f, b, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, b, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, b, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = b), a.props = n, a.state = b, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return gp(e, t, r, n, i, o);
}
function gp(e, t, r, n, o, i) {
  Rx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && xg(t, r, !1), an(e, t, i);
  n = t.stateNode, wT.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = $i(t, e.child, null, i), t.child = $i(t, null, s, i)) : gt(e, t, s, i), t.memoizedState = n.state, o && xg(t, r, !0), t.child;
}
function Ox(e) {
  var t = e.stateNode;
  t.pendingContext ? bg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bg(e, t.context, !1), Vh(e, t.containerInfo);
}
function zg(e, t, r, n, o) {
  return Ei(), zh(o), t.flags |= 256, gt(e, t, r, n), t.child;
}
var yp = { dehydrated: null, treeContext: null, retryLane: 0 };
function bp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ix(e, t, r) {
  var n = t.pendingProps, o = $e.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), xe($e, o & 1), e === null)
    return dp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Cc(a, n, 0, null), e = mo(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bp(r), t.memoizedState = yp, e) : Xh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return kT(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = zn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = zn(s, i) : (i = mo(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? bp(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = yp, n;
  }
  return i = e.child, e = i.sibling, n = zn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Xh(e, t) {
  return t = Cc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xl(e, t, r, n) {
  return n !== null && zh(n), $i(t, e.child, null, r), e = Xh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function kT(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Ld(Error(I(422))), xl(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Cc({ mode: "visible", children: n.children }, o, 0, null), i = mo(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && $i(t, e.child, null, a), t.child.memoizedState = bp(a), t.memoizedState = yp, i);
  if (!(t.mode & 1))
    return xl(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(I(419)), n = Ld(i, n, void 0), xl(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, _t || s) {
    if (n = Xe, n !== null) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, on(e, o), vr(n, e, o, -1));
    }
    return rm(), n = Ld(Error(I(421))), xl(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, zt = Rn(o.nextSibling), Ft = t, Ee = !0, pr = null, e !== null && (Zt[Jt++] = Yr, Zt[Jt++] = qr, Zt[Jt++] = wo, Yr = e.id, qr = e.overflow, wo = t), t = Xh(t, n.children), t.flags |= 4096, t);
}
function Fg(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), fp(e.return, t, r);
}
function Bd(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function Dx(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (gt(e, t, n.children, r), n = $e.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fg(e, r, t);
          else if (e.tag === 19)
            Fg(e, r, t);
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
  if (xe($e, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && zu(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Bd(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && zu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        Bd(t, !0, r, null, i);
        break;
      case "together":
        Bd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function an(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Co |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, r = zn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = zn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function CT(e, t, r) {
  switch (t.tag) {
    case 3:
      Ox(t), Ei();
      break;
    case 5:
      lx(t);
      break;
    case 1:
      Tt(t.type) && Au(t);
      break;
    case 4:
      Vh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      xe(Ou, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (xe($e, $e.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Ix(e, t, r) : (xe($e, $e.current & 1), e = an(e, t, r), e !== null ? e.sibling : null);
      xe($e, $e.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return Dx(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), xe($e, $e.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mx(e, t, r);
  }
  return an(e, t, r);
}
var zx, xp, Fx, jx;
zx = function(e, t) {
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
xp = function() {
};
Fx = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, uo(Rr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Vf(e, o), n = Vf(e, n), i = [];
        break;
      case "select":
        o = Re({}, o, { value: void 0 }), n = Re({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Hf(e, o), n = Hf(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Eu);
    }
    Kf(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Xa.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Xa.hasOwnProperty(u) ? (l != null && u === "onScroll" && ke("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jx = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function sa(e, t) {
  if (!Ee)
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
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function _T(e, t, r) {
  var n = t.pendingProps;
  switch (Dh(t), t.tag) {
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
      return ct(t), null;
    case 1:
      return Tt(t.type) && $u(), ct(t), null;
    case 3:
      return n = t.stateNode, Ai(), _e(Pt), _e(ht), Uh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pr !== null && (Ep(pr), pr = null))), xp(e, t), ct(t), null;
    case 5:
      Wh(t);
      var o = uo(ls.current);
      if (r = t.type, e !== null && t.stateNode != null)
        Fx(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(I(166));
          return ct(t), null;
        }
        if (e = uo(Rr.current), yl(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[Tr] = t, n[as] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              ke("cancel", n), ke("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < xa.length; o++)
                ke(xa[o], n);
              break;
            case "source":
              ke("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ke(
                "error",
                n
              ), ke("load", n);
              break;
            case "details":
              ke("toggle", n);
              break;
            case "input":
              Gv(n, i), ke("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", n);
              break;
            case "textarea":
              Yv(n, i), ke("invalid", n);
          }
          Kf(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && gl(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && gl(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Xa.hasOwnProperty(a) && s != null && a === "onScroll" && ke("scroll", n);
            }
          switch (r) {
            case "input":
              ul(n), Kv(n, i, !0);
              break;
            case "textarea":
              ul(n), qv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Eu);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = db(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Tr] = t, e[as] = n, zx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Yf(r, n), r) {
              case "dialog":
                ke("cancel", e), ke("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < xa.length; o++)
                  ke(xa[o], e);
                o = n;
                break;
              case "source":
                ke("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  e
                ), ke("load", e), o = n;
                break;
              case "details":
                ke("toggle", e), o = n;
                break;
              case "input":
                Gv(e, n), o = Vf(e, n), ke("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Re({}, n, { value: void 0 }), ke("invalid", e);
                break;
              case "textarea":
                Yv(e, n), o = Hf(e, n), ke("invalid", e);
                break;
              default:
                o = n;
            }
            Kf(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? hb(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && fb(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Qa(e, l) : typeof l == "number" && Qa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Xa.hasOwnProperty(i) ? l != null && i === "onScroll" && ke("scroll", e) : l != null && xh(e, i, l, a));
              }
            switch (r) {
              case "input":
                ul(e), Kv(e, n, !1);
                break;
              case "textarea":
                ul(e), qv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Nn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? fi(e, !!n.multiple, i, !1) : n.defaultValue != null && fi(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Eu);
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
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null)
        jx(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(I(166));
        if (r = uo(ls.current), uo(Rr.current), yl(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Tr] = t, (i = n.nodeValue !== r) && (e = Ft, e !== null))
            switch (e.tag) {
              case 3:
                gl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && gl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Tr] = t, t.stateNode = n;
      }
      return ct(t), null;
    case 13:
      if (_e($e), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && zt !== null && t.mode & 1 && !(t.flags & 128))
          tx(), Ei(), t.flags |= 98560, i = !1;
        else if (i = yl(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(I(317));
            i[Tr] = t;
          } else
            Ei(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ct(t), i = !1;
        } else
          pr !== null && (Ep(pr), pr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || $e.current & 1 ? Ge === 0 && (Ge = 3) : rm())), t.updateQueue !== null && (t.flags |= 4), ct(t), null);
    case 4:
      return Ai(), xp(e, t), e === null && os(t.stateNode.containerInfo), ct(t), null;
    case 10:
      return Nh(t.type._context), ct(t), null;
    case 17:
      return Tt(t.type) && $u(), ct(t), null;
    case 19:
      if (_e($e), i = t.memoizedState, i === null)
        return ct(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          sa(i, !1);
        else {
          if (Ge !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = zu(e), a !== null) {
                for (t.flags |= 128, sa(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return xe($e, $e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ne() > Ri && (t.flags |= 128, n = !0, sa(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = zu(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), sa(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ee)
              return ct(t), null;
          } else
            2 * Ne() - i.renderingStartTime > Ri && r !== 1073741824 && (t.flags |= 128, n = !0, sa(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, r = $e.current, xe($e, n ? r & 1 | 2 : r & 1), t) : (ct(t), null);
    case 22:
    case 23:
      return tm(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Dt & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function PT(e, t) {
  switch (Dh(t), t.tag) {
    case 1:
      return Tt(t.type) && $u(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ai(), _e(Pt), _e(ht), Uh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wh(t), null;
    case 13:
      if (_e($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(I(340));
        Ei();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e($e), null;
    case 4:
      return Ai(), null;
    case 10:
      return Nh(t.type._context), null;
    case 22:
    case 23:
      return tm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1, ft = !1, TT = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Jo(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        De(e, t, n);
      }
    else
      r.current = null;
}
function Sp(e, t, r) {
  try {
    r();
  } catch (n) {
    De(e, t, n);
  }
}
var jg = !1;
function ET(e, t) {
  if (op = _u, e = Vb(), Oh(e)) {
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
  for (ip = { focusedElem: e, selectionRange: r }, _u = !1, j = t; j !== null; )
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, j = e;
    else
      for (; j !== null; ) {
        t = j;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var g = b.memoizedProps, x = b.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : dr(t.type, g), x);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (w) {
          De(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break;
        }
        j = t.return;
      }
  return b = jg, jg = !1, b;
}
function Ia(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Sp(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function wc(e, t) {
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
function wp(e) {
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
function Nx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tr], delete t[as], delete t[lp], delete t[cT], delete t[dT])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ng(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lx(e.return))
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
function kp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Eu));
  else if (n !== 4 && (e = e.child, e !== null))
    for (kp(e, t, r), e = e.sibling; e !== null; )
      kp(e, t, r), e = e.sibling;
}
function Cp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (Cp(e, t, r), e = e.sibling; e !== null; )
      Cp(e, t, r), e = e.sibling;
}
var rt = null, fr = !1;
function mn(e, t, r) {
  for (r = r.child; r !== null; )
    Bx(e, t, r), r = r.sibling;
}
function Bx(e, t, r) {
  if (Mr && typeof Mr.onCommitFiberUnmount == "function")
    try {
      Mr.onCommitFiberUnmount(hc, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      ft || Jo(r, t);
    case 6:
      var n = rt, o = fr;
      rt = null, mn(e, t, r), rt = n, fr = o, rt !== null && (fr ? (e = rt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : rt.removeChild(r.stateNode));
      break;
    case 18:
      rt !== null && (fr ? (e = rt, r = r.stateNode, e.nodeType === 8 ? Id(e.parentNode, r) : e.nodeType === 1 && Id(e, r), ts(e)) : Id(rt, r.stateNode));
      break;
    case 4:
      n = rt, o = fr, rt = r.stateNode.containerInfo, fr = !0, mn(e, t, r), rt = n, fr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ft && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Sp(r, t, a), o = o.next;
        } while (o !== n);
      }
      mn(e, t, r);
      break;
    case 1:
      if (!ft && (Jo(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          De(r, t, s);
        }
      mn(e, t, r);
      break;
    case 21:
      mn(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (ft = (n = ft) || r.memoizedState !== null, mn(e, t, r), ft = n) : mn(e, t, r);
      break;
    default:
      mn(e, t, r);
  }
}
function Lg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new TT()), t.forEach(function(n) {
      var o = FT.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function ur(e, t) {
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
                rt = s.stateNode, fr = !1;
                break e;
              case 3:
                rt = s.stateNode.containerInfo, fr = !0;
                break e;
              case 4:
                rt = s.stateNode.containerInfo, fr = !0;
                break e;
            }
            s = s.return;
          }
        if (rt === null)
          throw Error(I(160));
        Bx(i, a, o), rt = null, fr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        De(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Vx(t, e), t = t.sibling;
}
function Vx(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ur(t, e), br(e), n & 4) {
        try {
          Ia(3, e, e.return), wc(3, e);
        } catch (g) {
          De(e, e.return, g);
        }
        try {
          Ia(5, e, e.return);
        } catch (g) {
          De(e, e.return, g);
        }
      }
      break;
    case 1:
      ur(t, e), br(e), n & 512 && r !== null && Jo(r, r.return);
      break;
    case 5:
      if (ur(t, e), br(e), n & 512 && r !== null && Jo(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Qa(o, "");
        } catch (g) {
          De(e, e.return, g);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ub(o, i), Yf(s, a);
            var u = Yf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? hb(o, d) : c === "dangerouslySetInnerHTML" ? fb(o, d) : c === "children" ? Qa(o, d) : xh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Wf(o, i);
                break;
              case "textarea":
                cb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? fi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? fi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : fi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[as] = i;
          } catch (g) {
            De(e, e.return, g);
          }
      }
      break;
    case 6:
      if (ur(t, e), br(e), n & 4) {
        if (e.stateNode === null)
          throw Error(I(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          De(e, e.return, g);
        }
      }
      break;
    case 3:
      if (ur(t, e), br(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          ts(t.containerInfo);
        } catch (g) {
          De(e, e.return, g);
        }
      break;
    case 4:
      ur(t, e), br(e);
      break;
    case 13:
      ur(t, e), br(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Jh = Ne())), n & 4 && Lg(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (ft = (u = ft) || c, ur(t, e), ft = u) : ur(t, e), br(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (f = j, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ia(4, f, f.return);
                  break;
                case 1:
                  Jo(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                    } catch (g) {
                      De(n, r, g);
                    }
                  }
                  break;
                case 5:
                  Jo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Vg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, j = p) : Vg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = pb("display", a));
                } catch (g) {
                  De(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  De(e, e.return, g);
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
      ur(t, e), br(e), n & 4 && Lg(e);
      break;
    case 21:
      break;
    default:
      ur(
        t,
        e
      ), br(e);
  }
}
function br(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Lx(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(I(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Qa(o, ""), n.flags &= -33);
          var i = Ng(e);
          Cp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Ng(e);
          kp(e, s, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $T(e, t, r) {
  j = e, Wx(e);
}
function Wx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Sl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || ft;
        s = Sl;
        var u = ft;
        if (Sl = a, (ft = l) && !u)
          for (j = o; j !== null; )
            a = j, l = a.child, a.tag === 22 && a.memoizedState !== null ? Wg(o) : l !== null ? (l.return = a, j = l) : Wg(o);
        for (; i !== null; )
          j = i, Wx(i), i = i.sibling;
        j = o, Sl = s, ft = u;
      }
      Bg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : Bg(e);
  }
}
function Bg(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ft || wc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ft)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : dr(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Cg(t, i, n);
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
                Cg(t, a, r);
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
                    d !== null && ts(d);
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
              throw Error(I(163));
          }
        ft || t.flags & 512 && wp(t);
      } catch (f) {
        De(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, j = r;
      break;
    }
    j = t.return;
  }
}
function Vg(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, j = r;
      break;
    }
    j = t.return;
  }
}
function Wg(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            wc(4, t);
          } catch (l) {
            De(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              De(t, o, l);
            }
          }
          var i = t.return;
          try {
            wp(t);
          } catch (l) {
            De(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            wp(t);
          } catch (l) {
            De(t, a, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var AT = Math.ceil, Nu = cn.ReactCurrentDispatcher, Qh = cn.ReactCurrentOwner, rr = cn.ReactCurrentBatchConfig, oe = 0, Xe = null, Ue = null, it = 0, Dt = 0, ei = Un(0), Ge = 0, fs = null, Co = 0, kc = 0, Zh = 0, Da = null, kt = null, Jh = 0, Ri = 1 / 0, Ur = null, Lu = !1, _p = null, In = null, wl = !1, En = null, Bu = 0, za = 0, Pp = null, Jl = -1, eu = 0;
function bt() {
  return oe & 6 ? Ne() : Jl !== -1 ? Jl : Jl = Ne();
}
function Dn(e) {
  return e.mode & 1 ? oe & 2 && it !== 0 ? it & -it : pT.transition !== null ? (eu === 0 && (eu = Pb()), eu) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ob(e.type)), e) : 1;
}
function vr(e, t, r, n) {
  if (50 < za)
    throw za = 0, Pp = null, Error(I(185));
  Os(e, r, n), (!(oe & 2) || e !== Xe) && (e === Xe && (!(oe & 2) && (kc |= r), Ge === 4 && Cn(e, it)), Et(e, n), r === 1 && oe === 0 && !(t.mode & 1) && (Ri = Ne() + 500, bc && Hn()));
}
function Et(e, t) {
  var r = e.callbackNode;
  p2(e, t);
  var n = Cu(e, e === Xe ? it : 0);
  if (n === 0)
    r !== null && Zv(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Zv(r), t === 1)
      e.tag === 0 ? fT(Ug.bind(null, e)) : Zb(Ug.bind(null, e)), lT(function() {
        !(oe & 6) && Hn();
      }), r = null;
    else {
      switch (Tb(n)) {
        case 1:
          r = _h;
          break;
        case 4:
          r = Cb;
          break;
        case 16:
          r = ku;
          break;
        case 536870912:
          r = _b;
          break;
        default:
          r = ku;
      }
      r = Qx(r, Ux.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Ux(e, t) {
  if (Jl = -1, eu = 0, oe & 6)
    throw Error(I(327));
  var r = e.callbackNode;
  if (gi() && e.callbackNode !== r)
    return null;
  var n = Cu(e, e === Xe ? it : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Vu(e, n);
  else {
    t = n;
    var o = oe;
    oe |= 2;
    var i = Gx();
    (Xe !== e || it !== t) && (Ur = null, Ri = Ne() + 500, ho(e, t));
    do
      try {
        OT();
        break;
      } catch (s) {
        Hx(e, s);
      }
    while (!0);
    jh(), Nu.current = i, oe = o, Ue !== null ? t = 0 : (Xe = null, it = 0, t = Ge);
  }
  if (t !== 0) {
    if (t === 2 && (o = Jf(e), o !== 0 && (n = o, t = Tp(e, o))), t === 1)
      throw r = fs, ho(e, 0), Cn(e, n), Et(e, Ne()), r;
    if (t === 6)
      Cn(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !MT(o) && (t = Vu(e, n), t === 2 && (i = Jf(e), i !== 0 && (n = i, t = Tp(e, i))), t === 1))
        throw r = fs, ho(e, 0), Cn(e, n), Et(e, Ne()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          to(e, kt, Ur);
          break;
        case 3:
          if (Cn(e, n), (n & 130023424) === n && (t = Jh + 500 - Ne(), 10 < t)) {
            if (Cu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              bt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = sp(to.bind(null, e, kt, Ur), t);
            break;
          }
          to(e, kt, Ur);
          break;
        case 4:
          if (Cn(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - mr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Ne() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * AT(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = sp(to.bind(null, e, kt, Ur), n);
            break;
          }
          to(e, kt, Ur);
          break;
        case 5:
          to(e, kt, Ur);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Et(e, Ne()), e.callbackNode === r ? Ux.bind(null, e) : null;
}
function Tp(e, t) {
  var r = Da;
  return e.current.memoizedState.isDehydrated && (ho(e, t).flags |= 256), e = Vu(e, t), e !== 2 && (t = kt, kt = r, t !== null && Ep(t)), e;
}
function Ep(e) {
  kt === null ? kt = e : kt.push.apply(kt, e);
}
function MT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!gr(i(), o))
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
function Cn(e, t) {
  for (t &= ~Zh, t &= ~kc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - mr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Ug(e) {
  if (oe & 6)
    throw Error(I(327));
  gi();
  var t = Cu(e, 0);
  if (!(t & 1))
    return Et(e, Ne()), null;
  var r = Vu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Jf(e);
    n !== 0 && (t = n, r = Tp(e, n));
  }
  if (r === 1)
    throw r = fs, ho(e, 0), Cn(e, t), Et(e, Ne()), r;
  if (r === 6)
    throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, to(e, kt, Ur), Et(e, Ne()), null;
}
function em(e, t) {
  var r = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = r, oe === 0 && (Ri = Ne() + 500, bc && Hn());
  }
}
function _o(e) {
  En !== null && En.tag === 0 && !(oe & 6) && gi();
  var t = oe;
  oe |= 1;
  var r = rr.transition, n = he;
  try {
    if (rr.transition = null, he = 1, e)
      return e();
  } finally {
    he = n, rr.transition = r, oe = t, !(oe & 6) && Hn();
  }
}
function tm() {
  Dt = ei.current, _e(ei);
}
function ho(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, sT(r)), Ue !== null)
    for (r = Ue.return; r !== null; ) {
      var n = r;
      switch (Dh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && $u();
          break;
        case 3:
          Ai(), _e(Pt), _e(ht), Uh();
          break;
        case 5:
          Wh(n);
          break;
        case 4:
          Ai();
          break;
        case 13:
          _e($e);
          break;
        case 19:
          _e($e);
          break;
        case 10:
          Nh(n.type._context);
          break;
        case 22:
        case 23:
          tm();
      }
      r = r.return;
    }
  if (Xe = e, Ue = e = zn(e.current, null), it = Dt = t, Ge = 0, fs = null, Zh = kc = Co = 0, kt = Da = null, lo !== null) {
    for (t = 0; t < lo.length; t++)
      if (r = lo[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    lo = null;
  }
  return e;
}
function Hx(e, t) {
  do {
    var r = Ue;
    try {
      if (jh(), Xl.current = ju, Fu) {
        for (var n = Me.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Fu = !1;
      }
      if (ko = 0, qe = He = Me = null, Oa = !1, us = 0, Qh.current = null, r === null || r.return === null) {
        Ge = 1, fs = t, Ue = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = it, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = Mg(a);
          if (p !== null) {
            p.flags &= -257, Rg(p, a, s, i, t), p.mode & 1 && Ag(i, u, t), t = p, l = u;
            var b = t.updateQueue;
            if (b === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ag(i, u, t), rm();
              break e;
            }
            l = Error(I(426));
          }
        } else if (Ee && s.mode & 1) {
          var x = Mg(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Rg(x, a, s, i, t), zh(Mi(l, s));
            break e;
          }
        }
        i = l = Mi(l, s), Ge !== 4 && (Ge = 2), Da === null ? Da = [i] : Da.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Ex(i, l, t);
              kg(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (In === null || !In.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = $x(i, s, t);
                kg(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yx(r);
    } catch (k) {
      t = k, Ue === r && r !== null && (Ue = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Gx() {
  var e = Nu.current;
  return Nu.current = ju, e === null ? ju : e;
}
function rm() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Xe === null || !(Co & 268435455) && !(kc & 268435455) || Cn(Xe, it);
}
function Vu(e, t) {
  var r = oe;
  oe |= 2;
  var n = Gx();
  (Xe !== e || it !== t) && (Ur = null, ho(e, t));
  do
    try {
      RT();
      break;
    } catch (o) {
      Hx(e, o);
    }
  while (!0);
  if (jh(), oe = r, Nu.current = n, Ue !== null)
    throw Error(I(261));
  return Xe = null, it = 0, Ge;
}
function RT() {
  for (; Ue !== null; )
    Kx(Ue);
}
function OT() {
  for (; Ue !== null && !o2(); )
    Kx(Ue);
}
function Kx(e) {
  var t = Xx(e.alternate, e, Dt);
  e.memoizedProps = e.pendingProps, t === null ? Yx(e) : Ue = t, Qh.current = null;
}
function Yx(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = PT(r, t), r !== null) {
        r.flags &= 32767, Ue = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ge = 6, Ue = null;
        return;
      }
    } else if (r = _T(r, t, Dt), r !== null) {
      Ue = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function to(e, t, r) {
  var n = he, o = rr.transition;
  try {
    rr.transition = null, he = 1, IT(e, t, r, n);
  } finally {
    rr.transition = o, he = n;
  }
  return null;
}
function IT(e, t, r, n) {
  do
    gi();
  while (En !== null);
  if (oe & 6)
    throw Error(I(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (h2(e, i), e === Xe && (Ue = Xe = null, it = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || wl || (wl = !0, Qx(ku, function() {
    return gi(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = rr.transition, rr.transition = null;
    var a = he;
    he = 1;
    var s = oe;
    oe |= 4, Qh.current = null, ET(e, r), Vx(r, e), eT(ip), _u = !!op, ip = op = null, e.current = r, $T(r), i2(), oe = s, he = a, rr.transition = i;
  } else
    e.current = r;
  if (wl && (wl = !1, En = e, Bu = o), i = e.pendingLanes, i === 0 && (In = null), l2(r.stateNode), Et(e, Ne()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Lu)
    throw Lu = !1, e = _p, _p = null, e;
  return Bu & 1 && e.tag !== 0 && gi(), i = e.pendingLanes, i & 1 ? e === Pp ? za++ : (za = 0, Pp = e) : za = 0, Hn(), null;
}
function gi() {
  if (En !== null) {
    var e = Tb(Bu), t = rr.transition, r = he;
    try {
      if (rr.transition = null, he = 16 > e ? 16 : e, En === null)
        var n = !1;
      else {
        if (e = En, En = null, Bu = 0, oe & 6)
          throw Error(I(331));
        var o = oe;
        for (oe |= 4, j = e.current; j !== null; ) {
          var i = j, a = i.child;
          if (j.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ia(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, j = d;
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling, p = c.return;
                      if (Nx(c), c === u) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, j = f;
                        break;
                      }
                      j = p;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var g = b.child;
                if (g !== null) {
                  b.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, j = a;
          else
            e:
              for (; j !== null; ) {
                if (i = j, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ia(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, j = m;
                  break e;
                }
                j = i.return;
              }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          a = j;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null)
            y.return = a, j = y;
          else
            e:
              for (a = h; j !== null; ) {
                if (s = j, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wc(9, s);
                    }
                  } catch (k) {
                    De(s, s.return, k);
                  }
                if (s === a) {
                  j = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, j = w;
                  break e;
                }
                j = s.return;
              }
        }
        if (oe = o, Hn(), Mr && typeof Mr.onPostCommitFiberRoot == "function")
          try {
            Mr.onPostCommitFiberRoot(hc, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      he = r, rr.transition = t;
    }
  }
  return !1;
}
function Hg(e, t, r) {
  t = Mi(r, t), t = Ex(e, t, 1), e = On(e, t, 1), t = bt(), e !== null && (Os(e, 1, t), Et(e, t));
}
function De(e, t, r) {
  if (e.tag === 3)
    Hg(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hg(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (In === null || !In.has(n))) {
          e = Mi(r, e), e = $x(t, e, 1), t = On(t, e, 1), e = bt(), t !== null && (Os(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function DT(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = bt(), e.pingedLanes |= e.suspendedLanes & r, Xe === e && (it & r) === r && (Ge === 4 || Ge === 3 && (it & 130023424) === it && 500 > Ne() - Jh ? ho(e, 0) : Zh |= r), Et(e, t);
}
function qx(e, t) {
  t === 0 && (e.mode & 1 ? (t = fl, fl <<= 1, !(fl & 130023424) && (fl = 4194304)) : t = 1);
  var r = bt();
  e = on(e, t), e !== null && (Os(e, t, r), Et(e, r));
}
function zT(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), qx(e, r);
}
function FT(e, t) {
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
      throw Error(I(314));
  }
  n !== null && n.delete(t), qx(e, r);
}
var Xx;
Xx = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current)
      _t = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return _t = !1, CT(e, t, r);
      _t = !!(e.flags & 131072);
    }
  else
    _t = !1, Ee && t.flags & 1048576 && Jb(t, Ru, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Zl(e, t), e = t.pendingProps;
      var o = Ti(t, ht.current);
      vi(t, r), o = Gh(null, t, n, e, o, r);
      var i = Kh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Tt(n) ? (i = !0, Au(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bh(t), o.updater = xc, t.stateNode = o, o._reactInternals = t, hp(t, n, e, r), t = gp(null, t, n, !0, i, r)) : (t.tag = 0, Ee && i && Ih(t), gt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Zl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = NT(n), e = dr(n, e), o) {
          case 0:
            t = vp(null, t, n, e, r);
            break e;
          case 1:
            t = Dg(null, t, n, e, r);
            break e;
          case 11:
            t = Og(null, t, n, e, r);
            break e;
          case 14:
            t = Ig(null, t, n, dr(n.type, e), r);
            break e;
        }
        throw Error(I(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : dr(n, o), vp(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : dr(n, o), Dg(e, t, n, o, r);
    case 3:
      e: {
        if (Ox(t), e === null)
          throw Error(I(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, nx(e, t), Du(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Mi(Error(I(423)), t), t = zg(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Mi(Error(I(424)), t), t = zg(e, t, n, r, o);
            break e;
          } else
            for (zt = Rn(t.stateNode.containerInfo.firstChild), Ft = t, Ee = !0, pr = null, r = sx(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Ei(), n === o) {
            t = an(e, t, r);
            break e;
          }
          gt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return lx(t), e === null && dp(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ap(n, o) ? a = null : i !== null && ap(n, i) && (t.flags |= 32), Rx(e, t), gt(e, t, a, r), t.child;
    case 6:
      return e === null && dp(t), null;
    case 13:
      return Ix(e, t, r);
    case 4:
      return Vh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = $i(t, null, n, r) : gt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : dr(n, o), Og(e, t, n, o, r);
    case 7:
      return gt(e, t, t.pendingProps, r), t.child;
    case 8:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, xe(Ou, n._currentValue), n._currentValue = a, i !== null)
          if (gr(i.value, a)) {
            if (i.children === o.children && !Pt.current) {
              t = an(e, t, r);
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
                      l = Zr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), fp(
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
                  throw Error(I(341));
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), fp(a, r, t), a = i.sibling;
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
        gt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, vi(t, r), o = ir(o), n = n(o), t.flags |= 1, gt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = dr(n, t.pendingProps), o = dr(n.type, o), Ig(e, t, n, o, r);
    case 15:
      return Ax(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : dr(n, o), Zl(e, t), t.tag = 1, Tt(n) ? (e = !0, Au(t)) : e = !1, vi(t, r), ix(t, n, o), hp(t, n, o, r), gp(null, t, n, !0, e, r);
    case 19:
      return Dx(e, t, r);
    case 22:
      return Mx(e, t, r);
  }
  throw Error(I(156, t.tag));
};
function Qx(e, t) {
  return kb(e, t);
}
function jT(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function er(e, t, r, n) {
  return new jT(e, t, r, n);
}
function nm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function NT(e) {
  if (typeof e == "function")
    return nm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wh)
      return 11;
    if (e === kh)
      return 14;
  }
  return 2;
}
function zn(e, t) {
  var r = e.alternate;
  return r === null ? (r = er(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function tu(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    nm(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Uo:
          return mo(r.children, o, i, t);
        case Sh:
          a = 8, o |= 8;
          break;
        case jf:
          return e = er(12, r, t, o | 2), e.elementType = jf, e.lanes = i, e;
        case Nf:
          return e = er(13, r, t, o), e.elementType = Nf, e.lanes = i, e;
        case Lf:
          return e = er(19, r, t, o), e.elementType = Lf, e.lanes = i, e;
        case ab:
          return Cc(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ob:
                a = 10;
                break e;
              case ib:
                a = 9;
                break e;
              case wh:
                a = 11;
                break e;
              case kh:
                a = 14;
                break e;
              case xn:
                a = 16, n = null;
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
  return t = er(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function mo(e, t, r, n) {
  return e = er(7, e, n, t), e.lanes = r, e;
}
function Cc(e, t, r, n) {
  return e = er(22, e, n, t), e.elementType = ab, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Vd(e, t, r) {
  return e = er(6, e, null, t), e.lanes = r, e;
}
function Wd(e, t, r) {
  return t = er(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function LT(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kd(0), this.expirationTimes = kd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kd(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function om(e, t, r, n, o, i, a, s, l) {
  return e = new LT(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = er(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bh(i), e;
}
function BT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Zx(e) {
  if (!e)
    return Ln;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1)
      throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Tt(r))
      return Qb(e, r, t);
  }
  return t;
}
function Jx(e, t, r, n, o, i, a, s, l) {
  return e = om(r, n, !0, e, o, i, a, s, l), e.context = Zx(null), r = e.current, n = bt(), o = Dn(r), i = Zr(n, o), i.callback = t ?? null, On(r, i, o), e.current.lanes = o, Os(e, o, n), Et(e, n), e;
}
function _c(e, t, r, n) {
  var o = t.current, i = bt(), a = Dn(o);
  return r = Zx(r), t.context === null ? t.context = r : t.pendingContext = r, t = Zr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = On(o, t, a), e !== null && (vr(e, o, a, i), ql(e, o, a)), a;
}
function Wu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gg(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function im(e, t) {
  Gg(e, t), (e = e.alternate) && Gg(e, t);
}
function VT() {
  return null;
}
var eS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function am(e) {
  this._internalRoot = e;
}
Pc.prototype.render = am.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(I(409));
  _c(e, t, null, null);
};
Pc.prototype.unmount = am.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _o(function() {
      _c(null, e, null, null);
    }), t[nn] = null;
  }
};
function Pc(e) {
  this._internalRoot = e;
}
Pc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ab();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < kn.length && t !== 0 && t < kn[r].priority; r++)
      ;
    kn.splice(r, 0, e), r === 0 && Rb(e);
  }
};
function sm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Kg() {
}
function WT(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Wu(a);
        i.call(u);
      };
    }
    var a = Jx(t, n, e, 0, null, !1, !1, "", Kg);
    return e._reactRootContainer = a, e[nn] = a.current, os(e.nodeType === 8 ? e.parentNode : e), _o(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Wu(l);
      s.call(u);
    };
  }
  var l = om(e, 0, !1, null, null, !1, !1, "", Kg);
  return e._reactRootContainer = l, e[nn] = l.current, os(e.nodeType === 8 ? e.parentNode : e), _o(function() {
    _c(t, l, r, n);
  }), l;
}
function Ec(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Wu(a);
        s.call(l);
      };
    }
    _c(t, a, e, o);
  } else
    a = WT(r, t, e, o, n);
  return Wu(a);
}
Eb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ba(t.pendingLanes);
        r !== 0 && (Ph(t, r | 1), Et(t, Ne()), !(oe & 6) && (Ri = Ne() + 500, Hn()));
      }
      break;
    case 13:
      _o(function() {
        var n = on(e, 1);
        if (n !== null) {
          var o = bt();
          vr(n, e, 1, o);
        }
      }), im(e, 1);
  }
};
Th = function(e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var r = bt();
      vr(t, e, 134217728, r);
    }
    im(e, 134217728);
  }
};
$b = function(e) {
  if (e.tag === 13) {
    var t = Dn(e), r = on(e, t);
    if (r !== null) {
      var n = bt();
      vr(r, e, t, n);
    }
    im(e, t);
  }
};
Ab = function() {
  return he;
};
Mb = function(e, t) {
  var r = he;
  try {
    return he = e, t();
  } finally {
    he = r;
  }
};
Xf = function(e, t, r) {
  switch (t) {
    case "input":
      if (Wf(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = yc(n);
            if (!o)
              throw Error(I(90));
            lb(n), Wf(n, o);
          }
        }
      }
      break;
    case "textarea":
      cb(e, r);
      break;
    case "select":
      t = r.value, t != null && fi(e, !!r.multiple, t, !1);
  }
};
gb = em;
yb = _o;
var UT = { usingClientEntryPoint: !1, Events: [Ds, Yo, yc, mb, vb, em] }, la = { findFiberByHostInstance: so, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, HT = { bundleType: la.bundleType, version: la.version, rendererPackageName: la.rendererPackageName, rendererConfig: la.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: cn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Sb(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: la.findFiberByHostInstance || VT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kl.isDisabled && kl.supportsFiber)
    try {
      hc = kl.inject(HT), Mr = kl;
    } catch {
    }
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UT;
Wt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sm(t))
    throw Error(I(200));
  return BT(e, t, null, r);
};
Wt.createRoot = function(e, t) {
  if (!sm(e))
    throw Error(I(299));
  var r = !1, n = "", o = eS;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = om(e, 1, !1, null, null, r, !1, n, o), e[nn] = t.current, os(e.nodeType === 8 ? e.parentNode : e), new am(t);
};
Wt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Sb(t), e = e === null ? null : e.stateNode, e;
};
Wt.flushSync = function(e) {
  return _o(e);
};
Wt.hydrate = function(e, t, r) {
  if (!Tc(t))
    throw Error(I(200));
  return Ec(null, e, t, !0, r);
};
Wt.hydrateRoot = function(e, t, r) {
  if (!sm(e))
    throw Error(I(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = eS;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Jx(t, null, e, 1, r ?? null, o, !1, i, a), e[nn] = t.current, os(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Pc(t);
};
Wt.render = function(e, t, r) {
  if (!Tc(t))
    throw Error(I(200));
  return Ec(null, e, t, !1, r);
};
Wt.unmountComponentAtNode = function(e) {
  if (!Tc(e))
    throw Error(I(40));
  return e._reactRootContainer ? (_o(function() {
    Ec(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nn] = null;
    });
  }), !0) : !1;
};
Wt.unstable_batchedUpdates = em;
Wt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Tc(r))
    throw Error(I(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(I(38));
  return Ec(e, t, r, !1, n);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function tS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tS);
    } catch (e) {
      console.error(e);
    }
}
tS(), J1.exports = Wt;
var lm = J1.exports, Yg = lm;
zf.createRoot = Yg.createRoot, zf.hydrateRoot = Yg.hydrateRoot;
var rS = "Expected a function", qg = NaN, GT = "[object Symbol]", KT = /^\s+|\s+$/g, YT = /^[-+]0x[0-9a-f]+$/i, qT = /^0b[01]+$/i, XT = /^0o[0-7]+$/i, QT = parseInt, ZT = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, JT = typeof self == "object" && self && self.Object === Object && self, eE = ZT || JT || Function("return this")(), tE = Object.prototype, rE = tE.toString, nE = Math.max, oE = Math.min, Ud = function() {
  return eE.Date.now();
};
function iE(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(rS);
  t = Xg(t) || 0, Uu(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? nE(Xg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function p(P) {
    var _ = n, $ = o;
    return n = o = void 0, u = P, a = e.apply($, _), a;
  }
  function b(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function g(P) {
    var _ = P - l, $ = P - u, M = t - _;
    return d ? oE(M, i - $) : M;
  }
  function x(P) {
    var _ = P - l, $ = P - u;
    return l === void 0 || _ >= t || _ < 0 || d && $ >= i;
  }
  function m() {
    var P = Ud();
    if (x(P))
      return h(P);
    s = setTimeout(m, g(P));
  }
  function h(P) {
    return s = void 0, f && n ? p(P) : (n = o = void 0, a);
  }
  function y() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : h(Ud());
  }
  function k() {
    var P = Ud(), _ = x(P);
    if (n = arguments, o = this, l = P, _) {
      if (s === void 0)
        return b(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = y, k.flush = w, k;
}
function aE(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(rS);
  return Uu(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), iE(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Uu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function sE(e) {
  return !!e && typeof e == "object";
}
function lE(e) {
  return typeof e == "symbol" || sE(e) && rE.call(e) == GT;
}
function Xg(e) {
  if (typeof e == "number")
    return e;
  if (lE(e))
    return qg;
  if (Uu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Uu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(KT, "");
  var r = qT.test(e);
  return r || XT.test(e) ? QT(e.slice(2), r ? 2 : 8) : YT.test(e) ? qg : +e;
}
var uE = aE;
const cE = /* @__PURE__ */ Ms(uE);
function dE(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function fE(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var pE = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fE(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = dE(o);
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
}(), dt = "-ms-", Hu = "-moz-", ue = "-webkit-", nS = "comm", um = "rule", cm = "decl", hE = "@import", oS = "@keyframes", mE = "@layer", vE = Math.abs, $c = String.fromCharCode, gE = Object.assign;
function yE(e, t) {
  return nt(e, 0) ^ 45 ? (((t << 2 ^ nt(e, 0)) << 2 ^ nt(e, 1)) << 2 ^ nt(e, 2)) << 2 ^ nt(e, 3) : 0;
}
function iS(e) {
  return e.trim();
}
function bE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function $p(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ps(e, t, r) {
  return e.slice(t, r);
}
function _r(e) {
  return e.length;
}
function dm(e) {
  return e.length;
}
function Cl(e, t) {
  return t.push(e), e;
}
function xE(e, t) {
  return e.map(t).join("");
}
var Ac = 1, Oi = 1, aS = 0, Mt = 0, We = 0, Gi = "";
function Mc(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ac, column: Oi, length: a, return: "" };
}
function ua(e, t) {
  return gE(Mc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function SE() {
  return We;
}
function wE() {
  return We = Mt > 0 ? nt(Gi, --Mt) : 0, Oi--, We === 10 && (Oi = 1, Ac--), We;
}
function jt() {
  return We = Mt < aS ? nt(Gi, Mt++) : 0, Oi++, We === 10 && (Oi = 1, Ac++), We;
}
function Or() {
  return nt(Gi, Mt);
}
function ru() {
  return Mt;
}
function Fs(e, t) {
  return ps(Gi, e, t);
}
function hs(e) {
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
function sS(e) {
  return Ac = Oi = 1, aS = _r(Gi = e), Mt = 0, [];
}
function lS(e) {
  return Gi = "", e;
}
function nu(e) {
  return iS(Fs(Mt - 1, Ap(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kE(e) {
  for (; (We = Or()) && We < 33; )
    jt();
  return hs(e) > 2 || hs(We) > 3 ? "" : " ";
}
function CE(e, t) {
  for (; --t && jt() && !(We < 48 || We > 102 || We > 57 && We < 65 || We > 70 && We < 97); )
    ;
  return Fs(e, ru() + (t < 6 && Or() == 32 && jt() == 32));
}
function Ap(e) {
  for (; jt(); )
    switch (We) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ap(We);
        break;
      case 40:
        e === 41 && Ap(e);
        break;
      case 92:
        jt();
        break;
    }
  return Mt;
}
function _E(e, t) {
  for (; jt() && e + We !== 57; )
    if (e + We === 84 && Or() === 47)
      break;
  return "/*" + Fs(t, Mt - 1) + "*" + $c(e === 47 ? e : jt());
}
function PE(e) {
  for (; !hs(Or()); )
    jt();
  return Fs(e, Mt);
}
function TE(e) {
  return lS(ou("", null, null, null, [""], e = sS(e), 0, [0], e));
}
function ou(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, b = 0, g = 1, x = 1, m = 1, h = 0, y = "", w = o, k = i, P = n, _ = y; x; )
    switch (b = h, h = jt()) {
      case 40:
        if (b != 108 && nt(_, d - 1) == 58) {
          $p(_ += ce(nu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += nu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += kE(b);
        break;
      case 92:
        _ += CE(ru() - 1, 7);
        continue;
      case 47:
        switch (Or()) {
          case 42:
          case 47:
            Cl(EE(_E(jt(), ru()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = _r(_) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (_ = ce(_, /\f/g, "")), p > 0 && _r(_) - d && Cl(p > 32 ? Zg(_ + ";", n, r, d - 1) : Zg(ce(_, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (Cl(P = Qg(_, t, r, u, c, o, s, y, w = [], k = [], d), i), h === 123)
              if (c === 0)
                ou(_, t, P, P, w, i, d, s, k);
              else
                switch (f === 99 && nt(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ou(e, P, P, n && Cl(Qg(e, P, P, 0, 0, o, s, y, o, w = [], d), k), o, k, d, s, n ? w : k);
                    break;
                  default:
                    ou(_, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = m = 1, y = _ = "", d = a;
        break;
      case 58:
        d = 1 + _r(_), p = b;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && wE() == 125)
            continue;
        }
        switch (_ += $c(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (_r(_) - 1) * m, m = 1;
            break;
          case 64:
            Or() === 45 && (_ += nu(jt())), f = Or(), c = d = _r(y = _ += PE(ru())), h++;
            break;
          case 45:
            b === 45 && _r(_) == 2 && (g = 0);
        }
    }
  return i;
}
function Qg(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = dm(f), b = 0, g = 0, x = 0; b < n; ++b)
    for (var m = 0, h = ps(e, d + 1, d = vE(g = a[b])), y = e; m < p; ++m)
      (y = iS(g > 0 ? f[m] + " " + h : ce(h, /&\f/g, f[m]))) && (l[x++] = y);
  return Mc(e, t, r, o === 0 ? um : s, l, u, c);
}
function EE(e, t, r) {
  return Mc(e, t, r, nS, $c(SE()), ps(e, 2, -2), 0);
}
function Zg(e, t, r, n) {
  return Mc(e, t, r, cm, ps(e, 0, n), ps(e, n + 1, -1), n);
}
function yi(e, t) {
  for (var r = "", n = dm(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function $E(e, t, r, n) {
  switch (e.type) {
    case mE:
      if (e.children.length)
        break;
    case hE:
    case cm:
      return e.return = e.return || e.value;
    case nS:
      return "";
    case oS:
      return e.return = e.value + "{" + yi(e.children, n) + "}";
    case um:
      e.value = e.props.join(",");
  }
  return _r(r = yi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function AE(e) {
  var t = dm(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function ME(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Jg = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function uS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var RE = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Or(), o === 38 && i === 12 && (r[n] = 1), !hs(i); )
    jt();
  return Fs(t, Mt);
}, OE = function(t, r) {
  var n = -1, o = 44;
  do
    switch (hs(o)) {
      case 0:
        o === 38 && Or() === 12 && (r[n] = 1), t[n] += RE(Mt - 1, r, n);
        break;
      case 2:
        t[n] += nu(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Or() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += $c(o);
    }
  while (o = jt());
  return t;
}, IE = function(t, r) {
  return lS(OE(sS(t), r));
}, e0 = /* @__PURE__ */ new WeakMap(), DE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !e0.get(n)) && !o) {
      e0.set(t, !0);
      for (var i = [], a = IE(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, zE = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function cS(e, t) {
  switch (yE(e, t)) {
    case 5103:
      return ue + "print-" + e + e;
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
      return ue + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ue + e + Hu + e + dt + e + e;
    case 6828:
    case 4268:
      return ue + e + dt + e + e;
    case 6165:
      return ue + e + dt + "flex-" + e + e;
    case 5187:
      return ue + e + ce(e, /(\w+).+(:[^]+)/, ue + "box-$1$2" + dt + "flex-$1$2") + e;
    case 5443:
      return ue + e + dt + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    case 4675:
      return ue + e + dt + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ue + e + dt + ce(e, "shrink", "negative") + e;
    case 5292:
      return ue + e + dt + ce(e, "basis", "preferred-size") + e;
    case 6060:
      return ue + "box-" + ce(e, "-grow", "") + ue + e + dt + ce(e, "grow", "positive") + e;
    case 4554:
      return ue + ce(e, /([^-])(transform)/g, "$1" + ue + "$2") + e;
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, ue + "$1"), /(image-set)/, ue + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, ue + "$1$`$1");
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, ue + "box-pack:$3" + dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ue + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, ue + "$1$2") + e;
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
      if (_r(e) - 1 - t > 6)
        switch (nt(e, t + 1)) {
          case 109:
            if (nt(e, t + 4) !== 45)
              break;
          case 102:
            return ce(e, /(.+:)(.+)-([^]+)/, "$1" + ue + "$2-$3$1" + Hu + (nt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~$p(e, "stretch") ? cS(ce(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (nt(e, _r(e) - 3 - (~$p(e, "!important") && 10))) {
        case 107:
          return ce(e, ":", ":" + ue) + e;
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ue + (nt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ue + "$2$3$1" + dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return ue + e + dt + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ue + e + dt + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ue + e + dt + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ue + e + dt + e + e;
  }
  return e;
}
var FE = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case cm:
        t.return = cS(t.value, t.length);
        break;
      case oS:
        return yi([ua(t, {
          value: ce(t.value, "@", "@" + ue)
        })], o);
      case um:
        if (t.length)
          return xE(t.props, function(i) {
            switch (bE(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return yi([ua(t, {
                  props: [ce(i, /:(read-\w+)/, ":" + Hu + "$1")]
                })], o);
              case "::placeholder":
                return yi([ua(t, {
                  props: [ce(i, /:(plac\w+)/, ":" + ue + "input-$1")]
                }), ua(t, {
                  props: [ce(i, /:(plac\w+)/, ":" + Hu + "$1")]
                }), ua(t, {
                  props: [ce(i, /:(plac\w+)/, dt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, jE = [FE], NE = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || jE, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var x = g.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++)
        i[x[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [DE, zE];
  {
    var c, d = [$E, ME(function(g) {
      c.insert(g);
    })], f = AE(u.concat(o, d)), p = function(x) {
      return yi(TE(x), f);
    };
    l = function(x, m, h, y) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), y && (b.inserted[m.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new pE({
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
  return b.sheet.hydrate(s), b;
};
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Po.apply(this, arguments);
}
var dS = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe = typeof Symbol == "function" && Symbol.for, fm = Qe ? Symbol.for("react.element") : 60103, pm = Qe ? Symbol.for("react.portal") : 60106, Rc = Qe ? Symbol.for("react.fragment") : 60107, Oc = Qe ? Symbol.for("react.strict_mode") : 60108, Ic = Qe ? Symbol.for("react.profiler") : 60114, Dc = Qe ? Symbol.for("react.provider") : 60109, zc = Qe ? Symbol.for("react.context") : 60110, hm = Qe ? Symbol.for("react.async_mode") : 60111, Fc = Qe ? Symbol.for("react.concurrent_mode") : 60111, jc = Qe ? Symbol.for("react.forward_ref") : 60112, Nc = Qe ? Symbol.for("react.suspense") : 60113, LE = Qe ? Symbol.for("react.suspense_list") : 60120, Lc = Qe ? Symbol.for("react.memo") : 60115, Bc = Qe ? Symbol.for("react.lazy") : 60116, BE = Qe ? Symbol.for("react.block") : 60121, VE = Qe ? Symbol.for("react.fundamental") : 60117, WE = Qe ? Symbol.for("react.responder") : 60118, UE = Qe ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fm:
        switch (e = e.type, e) {
          case hm:
          case Fc:
          case Rc:
          case Ic:
          case Oc:
          case Nc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case zc:
              case jc:
              case Bc:
              case Lc:
              case Dc:
                return e;
              default:
                return t;
            }
        }
      case pm:
        return t;
    }
  }
}
function fS(e) {
  return Ht(e) === Fc;
}
me.AsyncMode = hm;
me.ConcurrentMode = Fc;
me.ContextConsumer = zc;
me.ContextProvider = Dc;
me.Element = fm;
me.ForwardRef = jc;
me.Fragment = Rc;
me.Lazy = Bc;
me.Memo = Lc;
me.Portal = pm;
me.Profiler = Ic;
me.StrictMode = Oc;
me.Suspense = Nc;
me.isAsyncMode = function(e) {
  return fS(e) || Ht(e) === hm;
};
me.isConcurrentMode = fS;
me.isContextConsumer = function(e) {
  return Ht(e) === zc;
};
me.isContextProvider = function(e) {
  return Ht(e) === Dc;
};
me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fm;
};
me.isForwardRef = function(e) {
  return Ht(e) === jc;
};
me.isFragment = function(e) {
  return Ht(e) === Rc;
};
me.isLazy = function(e) {
  return Ht(e) === Bc;
};
me.isMemo = function(e) {
  return Ht(e) === Lc;
};
me.isPortal = function(e) {
  return Ht(e) === pm;
};
me.isProfiler = function(e) {
  return Ht(e) === Ic;
};
me.isStrictMode = function(e) {
  return Ht(e) === Oc;
};
me.isSuspense = function(e) {
  return Ht(e) === Nc;
};
me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Rc || e === Fc || e === Ic || e === Oc || e === Nc || e === LE || typeof e == "object" && e !== null && (e.$$typeof === Bc || e.$$typeof === Lc || e.$$typeof === Dc || e.$$typeof === zc || e.$$typeof === jc || e.$$typeof === VE || e.$$typeof === WE || e.$$typeof === UE || e.$$typeof === BE);
};
me.typeOf = Ht;
dS.exports = me;
var HE = dS.exports, pS = HE, GE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, KE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hS = {};
hS[pS.ForwardRef] = GE;
hS[pS.Memo] = KE;
var YE = !0;
function qE(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var mS = function(t, r, n) {
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
  YE === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, vS = function(t, r, n) {
  mS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function XE(e) {
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
var QE = {
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
}, ZE = /[A-Z]|^ms/g, JE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gS = function(t) {
  return t.charCodeAt(1) === 45;
}, t0 = function(t) {
  return t != null && typeof t != "boolean";
}, Hd = /* @__PURE__ */ uS(function(e) {
  return gS(e) ? e : e.replace(ZE, "-$&").toLowerCase();
}), r0 = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(JE, function(n, o, i) {
          return Pr = {
            name: o,
            styles: i,
            next: Pr
          }, o;
        });
  }
  return QE[t] !== 1 && !gS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ms(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Pr = {
          name: r.name,
          styles: r.styles,
          next: Pr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Pr = {
              name: n.name,
              styles: n.styles,
              next: Pr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return e$(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Pr, a = r(e);
        return Pr = i, ms(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function e$(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ms(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : t0(a) && (n += Hd(i) + ":" + r0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          t0(a[s]) && (n += Hd(i) + ":" + r0(i, a[s]) + ";");
      else {
        var l = ms(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Hd(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var n0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Pr, mm = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Pr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += ms(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += ms(n, r, t[s]), o && (i += a[s]);
  n0.lastIndex = 0;
  for (var l = "", u; (u = n0.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = XE(i) + l;
  return {
    name: c,
    styles: i,
    next: Pr
  };
}, t$ = function(t) {
  return t();
}, yS = Vv.useInsertionEffect ? Vv.useInsertionEffect : !1, r$ = yS || t$, o0 = yS || v.useLayoutEffect, bS = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ NE({
    key: "css"
  }) : null
);
bS.Provider;
var xS = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(r, n) {
    var o = v.useContext(bS);
    return t(r, o, n);
  });
}, vs = /* @__PURE__ */ v.createContext({}), n$ = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Po({}, t, r);
}, o$ = /* @__PURE__ */ Jg(function(e) {
  return Jg(function(t) {
    return n$(e, t);
  });
}), i$ = function(t) {
  var r = v.useContext(vs);
  return t.theme !== r && (r = o$(r)(t.theme)), /* @__PURE__ */ v.createElement(vs.Provider, {
    value: r
  }, t.children);
}, Vc = /* @__PURE__ */ xS(function(e, t) {
  var r = e.styles, n = mm([r], void 0, v.useContext(vs)), o = v.useRef();
  return o0(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), o0(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && vS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function a$() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mm(t);
}
var s$ = function() {
  var t = a$.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, SS = String.raw, wS = SS`
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
`, l$ = () => /* @__PURE__ */ C.jsx(Vc, { styles: wS }), u$ = ({ scope: e = "" }) => /* @__PURE__ */ C.jsx(
  Vc,
  {
    styles: SS`
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

      ${wS}
    `
  }
);
function c$(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function mt(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = v.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = v.useContext(s);
    if (!c && r) {
      const d = new Error(
        i ?? c$(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [d$, f$] = mt({
  strict: !1,
  name: "PortalManagerContext"
});
function kS(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ C.jsx(d$, { value: { zIndex: r }, children: t });
}
kS.displayName = "PortalManager";
var gs = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [CS, p$] = mt({
  strict: !1,
  name: "PortalContext"
}), vm = "chakra-portal", h$ = ".chakra-portal", m$ = (e) => /* @__PURE__ */ C.jsx(
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
), v$ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = p$(), l = f$();
  gs(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = vm, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ C.jsx(m$, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? lm.createPortal(
    /* @__PURE__ */ C.jsx(CS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ C.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, g$ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = vm), l;
  }, [o]), [, s] = v.useState({});
  return gs(() => s({}), []), gs(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? lm.createPortal(
    /* @__PURE__ */ C.jsx(CS, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function js(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ C.jsx(g$, { containerRef: r, ...n }) : /* @__PURE__ */ C.jsx(v$, { ...n });
}
js.className = vm;
js.selector = h$;
js.displayName = "Portal";
function Wc() {
  const e = v.useContext(
    vs
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var gm = v.createContext({});
gm.displayName = "ColorModeContext";
function Ns() {
  const e = v.useContext(gm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var _l = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function y$(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? _l.dark : _l.light), document.body.classList.remove(n ? _l.light : _l.dark);
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
var b$ = "chakra-ui-color-mode";
function x$(e) {
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
var S$ = x$(b$), i0 = () => {
};
function a0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function _S(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = S$
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => a0(a, s)
  ), [c, d] = v.useState(
    () => a0(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: b, addListener: g } = v.useMemo(
    () => y$({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = v.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), b(k), a.set(k);
    },
    [a, f, p, b]
  );
  gs(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
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
  const h = v.useCallback(() => {
    m(x === "dark" ? "light" : "dark");
  }, [x, m]);
  v.useEffect(() => {
    if (n)
      return g(m);
  }, [n, g, m]);
  const y = v.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? i0 : h,
      setColorMode: t ? i0 : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ C.jsx(gm.Provider, { value: y, children: r });
}
_S.displayName = "ColorModeProvider";
var w$ = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function k$(e) {
  let t = e;
  return w$.has(t) || (t = "light"), t;
}
function C$(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = k$(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function _$(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ C.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: C$(e) }
    }
  );
}
function P$() {
  const e = Ns(), t = Wc();
  return { ...e, theme: t };
}
var fe = (...e) => e.filter(Boolean).join(" ");
function nr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Ar(e, ...t) {
  return T$(e) ? e(...t) : e;
}
var T$ = (e) => typeof e == "function", Qt = (e) => e ? "" : void 0, Gd = (e) => e ? !0 : void 0;
function Ve(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function PS(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Gu = { exports: {} };
Gu.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", g = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", y = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", P = "[object String]", _ = "[object Undefined]", $ = "[object WeakMap]", M = "[object ArrayBuffer]", R = "[object DataView]", z = "[object Float32Array]", X = "[object Float64Array]", G = "[object Int8Array]", K = "[object Int16Array]", q = "[object Int32Array]", Y = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", N = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, L = /^\[object .+?Constructor\]$/, J = /^(?:0|[1-9]\d*)$/, B = {};
  B[z] = B[X] = B[G] = B[K] = B[q] = B[Y] = B[O] = B[D] = B[N] = !0, B[s] = B[l] = B[M] = B[c] = B[R] = B[d] = B[f] = B[p] = B[g] = B[x] = B[h] = B[w] = B[k] = B[P] = B[$] = !1;
  var Q = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, ve = typeof self == "object" && self && self.Object === Object && self, se = Q || ve || Function("return this")(), ye = t && !t.nodeType && t, be = ye && !0 && e && !e.nodeType && e, Oe = be && be.exports === ye, Ze = Oe && Q.process, Je = function() {
    try {
      var S = be && be.require && be.require("util").types;
      return S || Ze && Ze.binding && Ze.binding("util");
    } catch {
    }
  }(), Lr = Je && Je.isTypedArray;
  function Br(S, T, A) {
    switch (A.length) {
      case 0:
        return S.call(T);
      case 1:
        return S.call(T, A[0]);
      case 2:
        return S.call(T, A[0], A[1]);
      case 3:
        return S.call(T, A[0], A[1], A[2]);
    }
    return S.apply(T, A);
  }
  function Xi(S, T) {
    for (var A = -1, F = Array(S); ++A < S; )
      F[A] = T(A);
    return F;
  }
  function ie(S) {
    return function(T) {
      return S(T);
    };
  }
  function st(S, T) {
    return S == null ? void 0 : S[T];
  }
  function je(S, T) {
    return function(A) {
      return S(T(A));
    };
  }
  var Ot = Array.prototype, pn = Function.prototype, lt = Object.prototype, yr = se["__core-js_shared__"], hn = pn.toString, Gt = lt.hasOwnProperty, Oo = function() {
    var S = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Qi = lt.toString, el = hn.call(Object), tl = RegExp(
    "^" + hn.call(Gt).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Yn = Oe ? se.Buffer : void 0, wv = se.Symbol, kv = se.Uint8Array, Cv = Yn ? Yn.allocUnsafe : void 0, _v = je(Object.getPrototypeOf, Object), Pv = Object.create, g_ = lt.propertyIsEnumerable, y_ = Ot.splice, qn = wv ? wv.toStringTag : void 0, rl = function() {
    try {
      var S = cd(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), b_ = Yn ? Yn.isBuffer : void 0, Tv = Math.max, x_ = Date.now, Ev = cd(se, "Map"), Zi = cd(Object, "create"), S_ = /* @__PURE__ */ function() {
    function S() {
    }
    return function(T) {
      if (!Qn(T))
        return {};
      if (Pv)
        return Pv(T);
      S.prototype = T;
      var A = new S();
      return S.prototype = void 0, A;
    };
  }();
  function Xn(S) {
    var T = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++T < A; ) {
      var F = S[T];
      this.set(F[0], F[1]);
    }
  }
  function w_() {
    this.__data__ = Zi ? Zi(null) : {}, this.size = 0;
  }
  function k_(S) {
    var T = this.has(S) && delete this.__data__[S];
    return this.size -= T ? 1 : 0, T;
  }
  function C_(S) {
    var T = this.__data__;
    if (Zi) {
      var A = T[S];
      return A === n ? void 0 : A;
    }
    return Gt.call(T, S) ? T[S] : void 0;
  }
  function __(S) {
    var T = this.__data__;
    return Zi ? T[S] !== void 0 : Gt.call(T, S);
  }
  function P_(S, T) {
    var A = this.__data__;
    return this.size += this.has(S) ? 0 : 1, A[S] = Zi && T === void 0 ? n : T, this;
  }
  Xn.prototype.clear = w_, Xn.prototype.delete = k_, Xn.prototype.get = C_, Xn.prototype.has = __, Xn.prototype.set = P_;
  function Vr(S) {
    var T = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++T < A; ) {
      var F = S[T];
      this.set(F[0], F[1]);
    }
  }
  function T_() {
    this.__data__ = [], this.size = 0;
  }
  function E_(S) {
    var T = this.__data__, A = nl(T, S);
    if (A < 0)
      return !1;
    var F = T.length - 1;
    return A == F ? T.pop() : y_.call(T, A, 1), --this.size, !0;
  }
  function $_(S) {
    var T = this.__data__, A = nl(T, S);
    return A < 0 ? void 0 : T[A][1];
  }
  function A_(S) {
    return nl(this.__data__, S) > -1;
  }
  function M_(S, T) {
    var A = this.__data__, F = nl(A, S);
    return F < 0 ? (++this.size, A.push([S, T])) : A[F][1] = T, this;
  }
  Vr.prototype.clear = T_, Vr.prototype.delete = E_, Vr.prototype.get = $_, Vr.prototype.has = A_, Vr.prototype.set = M_;
  function Io(S) {
    var T = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++T < A; ) {
      var F = S[T];
      this.set(F[0], F[1]);
    }
  }
  function R_() {
    this.size = 0, this.__data__ = {
      hash: new Xn(),
      map: new (Ev || Vr)(),
      string: new Xn()
    };
  }
  function O_(S) {
    var T = il(this, S).delete(S);
    return this.size -= T ? 1 : 0, T;
  }
  function I_(S) {
    return il(this, S).get(S);
  }
  function D_(S) {
    return il(this, S).has(S);
  }
  function z_(S, T) {
    var A = il(this, S), F = A.size;
    return A.set(S, T), this.size += A.size == F ? 0 : 1, this;
  }
  Io.prototype.clear = R_, Io.prototype.delete = O_, Io.prototype.get = I_, Io.prototype.has = D_, Io.prototype.set = z_;
  function Do(S) {
    var T = this.__data__ = new Vr(S);
    this.size = T.size;
  }
  function F_() {
    this.__data__ = new Vr(), this.size = 0;
  }
  function j_(S) {
    var T = this.__data__, A = T.delete(S);
    return this.size = T.size, A;
  }
  function N_(S) {
    return this.__data__.get(S);
  }
  function L_(S) {
    return this.__data__.has(S);
  }
  function B_(S, T) {
    var A = this.__data__;
    if (A instanceof Vr) {
      var F = A.__data__;
      if (!Ev || F.length < r - 1)
        return F.push([S, T]), this.size = ++A.size, this;
      A = this.__data__ = new Io(F);
    }
    return A.set(S, T), this.size = A.size, this;
  }
  Do.prototype.clear = F_, Do.prototype.delete = j_, Do.prototype.get = N_, Do.prototype.has = L_, Do.prototype.set = B_;
  function V_(S, T) {
    var A = pd(S), F = !A && fd(S), ne = !A && !F && Ov(S), ge = !A && !F && !ne && Dv(S), Pe = A || F || ne || ge, te = Pe ? Xi(S.length, String) : [], Te = te.length;
    for (var Kt in S)
      (T || Gt.call(S, Kt)) && !(Pe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Kt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ne && (Kt == "offset" || Kt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ge && (Kt == "buffer" || Kt == "byteLength" || Kt == "byteOffset") || // Skip index properties.
      Mv(Kt, Te))) && te.push(Kt);
    return te;
  }
  function ld(S, T, A) {
    (A !== void 0 && !al(S[T], A) || A === void 0 && !(T in S)) && ud(S, T, A);
  }
  function W_(S, T, A) {
    var F = S[T];
    (!(Gt.call(S, T) && al(F, A)) || A === void 0 && !(T in S)) && ud(S, T, A);
  }
  function nl(S, T) {
    for (var A = S.length; A--; )
      if (al(S[A][0], T))
        return A;
    return -1;
  }
  function ud(S, T, A) {
    T == "__proto__" && rl ? rl(S, T, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : S[T] = A;
  }
  var U_ = nP();
  function ol(S) {
    return S == null ? S === void 0 ? _ : m : qn && qn in Object(S) ? oP(S) : cP(S);
  }
  function $v(S) {
    return Ji(S) && ol(S) == s;
  }
  function H_(S) {
    if (!Qn(S) || lP(S))
      return !1;
    var T = md(S) ? tl : L;
    return T.test(hP(S));
  }
  function G_(S) {
    return Ji(S) && Iv(S.length) && !!B[ol(S)];
  }
  function K_(S) {
    if (!Qn(S))
      return uP(S);
    var T = Rv(S), A = [];
    for (var F in S)
      F == "constructor" && (T || !Gt.call(S, F)) || A.push(F);
    return A;
  }
  function Av(S, T, A, F, ne) {
    S !== T && U_(T, function(ge, Pe) {
      if (ne || (ne = new Do()), Qn(ge))
        Y_(S, T, Pe, A, Av, F, ne);
      else {
        var te = F ? F(dd(S, Pe), ge, Pe + "", S, T, ne) : void 0;
        te === void 0 && (te = ge), ld(S, Pe, te);
      }
    }, zv);
  }
  function Y_(S, T, A, F, ne, ge, Pe) {
    var te = dd(S, A), Te = dd(T, A), Kt = Pe.get(Te);
    if (Kt) {
      ld(S, A, Kt);
      return;
    }
    var It = ge ? ge(te, Te, A + "", S, T, Pe) : void 0, ea = It === void 0;
    if (ea) {
      var vd = pd(Te), gd = !vd && Ov(Te), jv = !vd && !gd && Dv(Te);
      It = Te, vd || gd || jv ? pd(te) ? It = te : mP(te) ? It = eP(te) : gd ? (ea = !1, It = Q_(Te, !0)) : jv ? (ea = !1, It = J_(Te, !0)) : It = [] : vP(Te) || fd(Te) ? (It = te, fd(te) ? It = gP(te) : (!Qn(te) || md(te)) && (It = iP(Te))) : ea = !1;
    }
    ea && (Pe.set(Te, It), ne(It, Te, F, ge, Pe), Pe.delete(Te)), ld(S, A, It);
  }
  function q_(S, T) {
    return fP(dP(S, T, Fv), S + "");
  }
  var X_ = rl ? function(S, T) {
    return rl(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: bP(T),
      writable: !0
    });
  } : Fv;
  function Q_(S, T) {
    if (T)
      return S.slice();
    var A = S.length, F = Cv ? Cv(A) : new S.constructor(A);
    return S.copy(F), F;
  }
  function Z_(S) {
    var T = new S.constructor(S.byteLength);
    return new kv(T).set(new kv(S)), T;
  }
  function J_(S, T) {
    var A = T ? Z_(S.buffer) : S.buffer;
    return new S.constructor(A, S.byteOffset, S.length);
  }
  function eP(S, T) {
    var A = -1, F = S.length;
    for (T || (T = Array(F)); ++A < F; )
      T[A] = S[A];
    return T;
  }
  function tP(S, T, A, F) {
    var ne = !A;
    A || (A = {});
    for (var ge = -1, Pe = T.length; ++ge < Pe; ) {
      var te = T[ge], Te = F ? F(A[te], S[te], te, A, S) : void 0;
      Te === void 0 && (Te = S[te]), ne ? ud(A, te, Te) : W_(A, te, Te);
    }
    return A;
  }
  function rP(S) {
    return q_(function(T, A) {
      var F = -1, ne = A.length, ge = ne > 1 ? A[ne - 1] : void 0, Pe = ne > 2 ? A[2] : void 0;
      for (ge = S.length > 3 && typeof ge == "function" ? (ne--, ge) : void 0, Pe && aP(A[0], A[1], Pe) && (ge = ne < 3 ? void 0 : ge, ne = 1), T = Object(T); ++F < ne; ) {
        var te = A[F];
        te && S(T, te, F, ge);
      }
      return T;
    });
  }
  function nP(S) {
    return function(T, A, F) {
      for (var ne = -1, ge = Object(T), Pe = F(T), te = Pe.length; te--; ) {
        var Te = Pe[S ? te : ++ne];
        if (A(ge[Te], Te, ge) === !1)
          break;
      }
      return T;
    };
  }
  function il(S, T) {
    var A = S.__data__;
    return sP(T) ? A[typeof T == "string" ? "string" : "hash"] : A.map;
  }
  function cd(S, T) {
    var A = st(S, T);
    return H_(A) ? A : void 0;
  }
  function oP(S) {
    var T = Gt.call(S, qn), A = S[qn];
    try {
      S[qn] = void 0;
      var F = !0;
    } catch {
    }
    var ne = Qi.call(S);
    return F && (T ? S[qn] = A : delete S[qn]), ne;
  }
  function iP(S) {
    return typeof S.constructor == "function" && !Rv(S) ? S_(_v(S)) : {};
  }
  function Mv(S, T) {
    var A = typeof S;
    return T = T ?? a, !!T && (A == "number" || A != "symbol" && J.test(S)) && S > -1 && S % 1 == 0 && S < T;
  }
  function aP(S, T, A) {
    if (!Qn(A))
      return !1;
    var F = typeof T;
    return (F == "number" ? hd(A) && Mv(T, A.length) : F == "string" && T in A) ? al(A[T], S) : !1;
  }
  function sP(S) {
    var T = typeof S;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? S !== "__proto__" : S === null;
  }
  function lP(S) {
    return !!Oo && Oo in S;
  }
  function Rv(S) {
    var T = S && S.constructor, A = typeof T == "function" && T.prototype || lt;
    return S === A;
  }
  function uP(S) {
    var T = [];
    if (S != null)
      for (var A in Object(S))
        T.push(A);
    return T;
  }
  function cP(S) {
    return Qi.call(S);
  }
  function dP(S, T, A) {
    return T = Tv(T === void 0 ? S.length - 1 : T, 0), function() {
      for (var F = arguments, ne = -1, ge = Tv(F.length - T, 0), Pe = Array(ge); ++ne < ge; )
        Pe[ne] = F[T + ne];
      ne = -1;
      for (var te = Array(T + 1); ++ne < T; )
        te[ne] = F[ne];
      return te[T] = A(Pe), Br(S, this, te);
    };
  }
  function dd(S, T) {
    if (!(T === "constructor" && typeof S[T] == "function") && T != "__proto__")
      return S[T];
  }
  var fP = pP(X_);
  function pP(S) {
    var T = 0, A = 0;
    return function() {
      var F = x_(), ne = i - (F - A);
      if (A = F, ne > 0) {
        if (++T >= o)
          return arguments[0];
      } else
        T = 0;
      return S.apply(void 0, arguments);
    };
  }
  function hP(S) {
    if (S != null) {
      try {
        return hn.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function al(S, T) {
    return S === T || S !== S && T !== T;
  }
  var fd = $v(/* @__PURE__ */ function() {
    return arguments;
  }()) ? $v : function(S) {
    return Ji(S) && Gt.call(S, "callee") && !g_.call(S, "callee");
  }, pd = Array.isArray;
  function hd(S) {
    return S != null && Iv(S.length) && !md(S);
  }
  function mP(S) {
    return Ji(S) && hd(S);
  }
  var Ov = b_ || xP;
  function md(S) {
    if (!Qn(S))
      return !1;
    var T = ol(S);
    return T == p || T == b || T == u || T == y;
  }
  function Iv(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Qn(S) {
    var T = typeof S;
    return S != null && (T == "object" || T == "function");
  }
  function Ji(S) {
    return S != null && typeof S == "object";
  }
  function vP(S) {
    if (!Ji(S) || ol(S) != h)
      return !1;
    var T = _v(S);
    if (T === null)
      return !0;
    var A = Gt.call(T, "constructor") && T.constructor;
    return typeof A == "function" && A instanceof A && hn.call(A) == el;
  }
  var Dv = Lr ? ie(Lr) : G_;
  function gP(S) {
    return tP(S, zv(S));
  }
  function zv(S) {
    return hd(S) ? V_(S, !0) : K_(S);
  }
  var yP = rP(function(S, T, A, F) {
    Av(S, T, A, F);
  });
  function bP(S) {
    return function() {
      return S;
    };
  }
  function Fv(S) {
    return S;
  }
  function xP() {
    return !1;
  }
  e.exports = yP;
})(Gu, Gu.exports);
var E$ = Gu.exports;
const tr = /* @__PURE__ */ Ms(E$);
var $$ = (e) => /!(important)?$/.test(e), s0 = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, A$ = (e, t) => (r) => {
  const n = String(t), o = $$(n), i = s0(n), a = e ? `${e}.${i}` : i;
  let s = nr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = s0(s), o ? `${s} !important` : s;
};
function ym(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = A$(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Pl = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Yt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = ym({
      scale: e,
      transform: t
    }), n;
  };
}
var M$ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function R$(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: M$(t),
    transform: r ? ym({
      scale: r,
      compose: n
    }) : n
  };
}
var TS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function O$() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...TS
  ].join(" ");
}
function I$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...TS
  ].join(" ");
}
var D$ = {
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
}, z$ = {
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
function F$(e) {
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
var j$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Mp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, N$ = new Set(Object.values(Mp)), Rp = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), L$ = (e) => e.trim();
function B$(e, t) {
  if (e == null || Rp.has(e))
    return e;
  if (!(Op(e) || Rp.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(L$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Mp ? Mp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (N$.has(f))
      return f;
    const p = f.indexOf(" "), [b, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Op(g) ? g : g && g.split(" "), m = `colors.${b}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : b;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Op = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), V$ = (e, t) => B$(e, t ?? {});
function W$(e) {
  return /^var\(--.+\)$/.test(e);
}
var U$ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, xr = (e) => (t) => `${e}(${t})`, re = {
  filter(e) {
    return e !== "auto" ? e : D$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : z$;
  },
  ring(e) {
    return F$(re.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? O$() : e === "auto-gpu" ? I$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = U$(e);
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
    if (W$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: V$,
  blur: xr("blur"),
  opacity: xr("opacity"),
  brightness: xr("brightness"),
  contrast: xr("contrast"),
  dropShadow: xr("drop-shadow"),
  grayscale: xr("grayscale"),
  hueRotate: (e) => xr("hue-rotate")(re.degree(e)),
  invert: xr("invert"),
  saturate: xr("saturate"),
  sepia: xr("sepia"),
  bgImage(e) {
    return e == null || Op(e) || Rp.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = j$[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, E = {
  borderWidths: Yt("borderWidths"),
  borderStyles: Yt("borderStyles"),
  colors: Yt("colors"),
  borders: Yt("borders"),
  gradients: Yt("gradients", re.gradient),
  radii: Yt("radii", re.px),
  space: Yt("space", Pl(re.vh, re.px)),
  spaceT: Yt("space", Pl(re.vh, re.px)),
  degreeT(e) {
    return { property: e, transform: re.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: ym({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Yt("sizes", Pl(re.vh, re.px)),
  sizesT: Yt("sizes", Pl(re.vh, re.fraction)),
  shadows: Yt("shadows"),
  logical: R$,
  blur: Yt("blur", re.blur)
}, iu = {
  background: E.colors("background"),
  backgroundColor: E.colors("backgroundColor"),
  backgroundImage: E.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: re.bgClip },
  bgSize: E.prop("backgroundSize"),
  bgPosition: E.prop("backgroundPosition"),
  bg: E.colors("background"),
  bgColor: E.colors("backgroundColor"),
  bgPos: E.prop("backgroundPosition"),
  bgRepeat: E.prop("backgroundRepeat"),
  bgAttachment: E.prop("backgroundAttachment"),
  bgGradient: E.gradients("backgroundImage"),
  bgClip: { transform: re.bgClip }
};
Object.assign(iu, {
  bgImage: iu.backgroundImage,
  bgImg: iu.backgroundImage
});
var le = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(le, {
  rounded: le.borderRadius,
  roundedTop: le.borderTopRadius,
  roundedTopLeft: le.borderTopLeftRadius,
  roundedTopRight: le.borderTopRightRadius,
  roundedTopStart: le.borderStartStartRadius,
  roundedTopEnd: le.borderStartEndRadius,
  roundedBottom: le.borderBottomRadius,
  roundedBottomLeft: le.borderBottomLeftRadius,
  roundedBottomRight: le.borderBottomRightRadius,
  roundedBottomStart: le.borderEndStartRadius,
  roundedBottomEnd: le.borderEndEndRadius,
  roundedLeft: le.borderLeftRadius,
  roundedRight: le.borderRightRadius,
  roundedStart: le.borderInlineStartRadius,
  roundedEnd: le.borderInlineEndRadius,
  borderStart: le.borderInlineStart,
  borderEnd: le.borderInlineEnd,
  borderTopStartRadius: le.borderStartStartRadius,
  borderTopEndRadius: le.borderStartEndRadius,
  borderBottomStartRadius: le.borderEndStartRadius,
  borderBottomEndRadius: le.borderEndEndRadius,
  borderStartRadius: le.borderInlineStartRadius,
  borderEndRadius: le.borderInlineEndRadius,
  borderStartWidth: le.borderInlineStartWidth,
  borderEndWidth: le.borderInlineEndWidth,
  borderStartColor: le.borderInlineStartColor,
  borderEndColor: le.borderInlineEndColor,
  borderStartStyle: le.borderInlineStartStyle,
  borderEndStyle: le.borderInlineEndStyle
});
var H$ = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Ip = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ip, {
  shadow: Ip.boxShadow
});
var G$ = {
  filter: { transform: re.filter },
  blur: E.blur("--chakra-blur"),
  brightness: E.propT("--chakra-brightness", re.brightness),
  contrast: E.propT("--chakra-contrast", re.contrast),
  hueRotate: E.propT("--chakra-hue-rotate", re.hueRotate),
  invert: E.propT("--chakra-invert", re.invert),
  saturate: E.propT("--chakra-saturate", re.saturate),
  dropShadow: E.propT("--chakra-drop-shadow", re.dropShadow),
  backdropFilter: { transform: re.backdropFilter },
  backdropBlur: E.blur("--chakra-backdrop-blur"),
  backdropBrightness: E.propT(
    "--chakra-backdrop-brightness",
    re.brightness
  ),
  backdropContrast: E.propT("--chakra-backdrop-contrast", re.contrast),
  backdropHueRotate: E.propT(
    "--chakra-backdrop-hue-rotate",
    re.hueRotate
  ),
  backdropInvert: E.propT("--chakra-backdrop-invert", re.invert),
  backdropSaturate: E.propT("--chakra-backdrop-saturate", re.saturate)
}, Ku = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: re.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: E.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: E.space("gap"),
  rowGap: E.space("rowGap"),
  columnGap: E.space("columnGap")
};
Object.assign(Ku, {
  flexDir: Ku.flexDirection
});
var ES = {
  gridGap: E.space("gridGap"),
  gridColumnGap: E.space("gridColumnGap"),
  gridRowGap: E.space("gridRowGap"),
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
}, K$ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: re.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, Xt = {
  width: E.sizesT("width"),
  inlineSize: E.sizesT("inlineSize"),
  height: E.sizes("height"),
  blockSize: E.sizes("blockSize"),
  boxSize: E.sizes(["width", "height"]),
  minWidth: E.sizes("minWidth"),
  minInlineSize: E.sizes("minInlineSize"),
  minHeight: E.sizes("minHeight"),
  minBlockSize: E.sizes("minBlockSize"),
  maxWidth: E.sizes("maxWidth"),
  maxInlineSize: E.sizes("maxInlineSize"),
  maxHeight: E.sizes("maxHeight"),
  maxBlockSize: E.sizes("maxBlockSize"),
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
  float: E.propT("float", re.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Xt, {
  w: Xt.width,
  h: Xt.height,
  minW: Xt.minWidth,
  maxW: Xt.maxWidth,
  minH: Xt.minHeight,
  maxH: Xt.maxHeight,
  overscroll: Xt.overscrollBehavior,
  overscrollX: Xt.overscrollBehaviorX,
  overscrollY: Xt.overscrollBehaviorY
});
var Y$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function q$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var X$ = (e) => {
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
}, Q$ = X$(q$), Z$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, J$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Kd = (e, t, r) => {
  const n = {}, o = Q$(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, eA = {
  srOnly: {
    transform(e) {
      return e === !0 ? Z$ : e === "focusable" ? J$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Kd(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Kd(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Kd(t, e, r)
  }
}, Fa = {
  position: !0,
  pos: E.prop("position"),
  zIndex: E.prop("zIndex", "zIndices"),
  inset: E.spaceT("inset"),
  insetX: E.spaceT(["left", "right"]),
  insetInline: E.spaceT("insetInline"),
  insetY: E.spaceT(["top", "bottom"]),
  insetBlock: E.spaceT("insetBlock"),
  top: E.spaceT("top"),
  insetBlockStart: E.spaceT("insetBlockStart"),
  bottom: E.spaceT("bottom"),
  insetBlockEnd: E.spaceT("insetBlockEnd"),
  left: E.spaceT("left"),
  insetInlineStart: E.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: E.spaceT("right"),
  insetInlineEnd: E.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Fa, {
  insetStart: Fa.insetInlineStart,
  insetEnd: Fa.insetInlineEnd
});
var tA = {
  ring: { transform: re.ring },
  ringColor: E.colors("--chakra-ring-color"),
  ringOffset: E.prop("--chakra-ring-offset-width"),
  ringOffsetColor: E.colors("--chakra-ring-offset-color"),
  ringInset: E.prop("--chakra-ring-inset")
}, Ce = {
  margin: E.spaceT("margin"),
  marginTop: E.spaceT("marginTop"),
  marginBlockStart: E.spaceT("marginBlockStart"),
  marginRight: E.spaceT("marginRight"),
  marginInlineEnd: E.spaceT("marginInlineEnd"),
  marginBottom: E.spaceT("marginBottom"),
  marginBlockEnd: E.spaceT("marginBlockEnd"),
  marginLeft: E.spaceT("marginLeft"),
  marginInlineStart: E.spaceT("marginInlineStart"),
  marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: E.spaceT("marginInline"),
  marginY: E.spaceT(["marginTop", "marginBottom"]),
  marginBlock: E.spaceT("marginBlock"),
  padding: E.space("padding"),
  paddingTop: E.space("paddingTop"),
  paddingBlockStart: E.space("paddingBlockStart"),
  paddingRight: E.space("paddingRight"),
  paddingBottom: E.space("paddingBottom"),
  paddingBlockEnd: E.space("paddingBlockEnd"),
  paddingLeft: E.space("paddingLeft"),
  paddingInlineStart: E.space("paddingInlineStart"),
  paddingInlineEnd: E.space("paddingInlineEnd"),
  paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: E.space("paddingInline"),
  paddingY: E.space(["paddingTop", "paddingBottom"]),
  paddingBlock: E.space("paddingBlock")
};
Object.assign(Ce, {
  m: Ce.margin,
  mt: Ce.marginTop,
  mr: Ce.marginRight,
  me: Ce.marginInlineEnd,
  marginEnd: Ce.marginInlineEnd,
  mb: Ce.marginBottom,
  ml: Ce.marginLeft,
  ms: Ce.marginInlineStart,
  marginStart: Ce.marginInlineStart,
  mx: Ce.marginX,
  my: Ce.marginY,
  p: Ce.padding,
  pt: Ce.paddingTop,
  py: Ce.paddingY,
  px: Ce.paddingX,
  pb: Ce.paddingBottom,
  pl: Ce.paddingLeft,
  ps: Ce.paddingInlineStart,
  paddingStart: Ce.paddingInlineStart,
  pr: Ce.paddingRight,
  pe: Ce.paddingInlineEnd,
  paddingEnd: Ce.paddingInlineEnd
});
var rA = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, nA = {
  clipPath: !0,
  transform: E.propT("transform", re.transform),
  transformOrigin: !0,
  translateX: E.spaceT("--chakra-translate-x"),
  translateY: E.spaceT("--chakra-translate-y"),
  skewX: E.degreeT("--chakra-skew-x"),
  skewY: E.degreeT("--chakra-skew-y"),
  scaleX: E.prop("--chakra-scale-x"),
  scaleY: E.prop("--chakra-scale-y"),
  scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: E.degreeT("--chakra-rotate")
}, oA = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: E.prop("transitionDuration", "transition.duration"),
  transitionProperty: E.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: E.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, iA = {
  fontFamily: E.prop("fontFamily", "fonts"),
  fontSize: E.prop("fontSize", "fontSizes", re.px),
  fontWeight: E.prop("fontWeight", "fontWeights"),
  lineHeight: E.prop("lineHeight", "lineHeights"),
  letterSpacing: E.prop("letterSpacing", "letterSpacings"),
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
}, aA = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: E.spaceT("scrollMargin"),
  scrollMarginTop: E.spaceT("scrollMarginTop"),
  scrollMarginBottom: E.spaceT("scrollMarginBottom"),
  scrollMarginLeft: E.spaceT("scrollMarginLeft"),
  scrollMarginRight: E.spaceT("scrollMarginRight"),
  scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: E.spaceT("scrollPadding"),
  scrollPaddingTop: E.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: E.spaceT("scrollPaddingRight"),
  scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function $S(e) {
  return nr(e) && e.reference ? e.reference : String(e);
}
var Uc = (e, ...t) => t.map($S).join(` ${e} `).replace(/calc/g, ""), l0 = (...e) => `calc(${Uc("+", ...e)})`, u0 = (...e) => `calc(${Uc("-", ...e)})`, Dp = (...e) => `calc(${Uc("*", ...e)})`, c0 = (...e) => `calc(${Uc("/", ...e)})`, d0 = (e) => {
  const t = $S(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Dp(t, -1);
}, io = Object.assign(
  (e) => ({
    add: (...t) => io(l0(e, ...t)),
    subtract: (...t) => io(u0(e, ...t)),
    multiply: (...t) => io(Dp(e, ...t)),
    divide: (...t) => io(c0(e, ...t)),
    negate: () => io(d0(e)),
    toString: () => e.toString()
  }),
  {
    add: l0,
    subtract: u0,
    multiply: Dp,
    divide: c0,
    negate: d0
  }
);
function sA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function lA(e) {
  const t = sA(e.toString());
  return cA(uA(t));
}
function uA(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function cA(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function dA(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function fA(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function pA(e, t = "") {
  return lA(`--${dA(e, t)}`);
}
function U(e, t, r) {
  const n = pA(e, r);
  return {
    variable: n,
    reference: fA(n, t)
  };
}
function hA(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = U(`${e}-${o}`, i);
      continue;
    }
    r[n] = U(`${e}-${n}`);
  }
  return r;
}
function mA(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function vA(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function zp(e) {
  if (e == null)
    return e;
  const { unitless: t } = vA(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var AS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, bm = (e) => Object.fromEntries(Object.entries(e).sort(AS));
function f0(e) {
  const t = bm(e);
  return Object.assign(Object.values(t), t);
}
function gA(e) {
  const t = Object.keys(bm(e));
  return new Set(t);
}
function p0(e) {
  var t;
  if (!e)
    return e;
  e = (t = zp(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Sa(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${zp(e)})`), t && r.push("and", `(max-width: ${zp(t)})`), r.join(" ");
}
function yA(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = f0(e), n = Object.entries(e).sort(AS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? p0(d) : void 0, {
      _minW: p0(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Sa(null, d),
      minWQuery: Sa(s),
      minMaxQuery: Sa(s, d)
    };
  }), o = gA(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: bm(e),
    asArray: f0(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => Sa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!nr(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; mA(s) === null; )
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
var et = {
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
}, vn = (e) => MS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Wr = (e) => MS((t) => e(t, "~ &"), "[data-peer]", ".peer"), MS = (e, ...t) => t.map(e).join(", "), Hc = {
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
  _groupHover: vn(et.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Wr(et.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: vn(et.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Wr(et.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: vn(et.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Wr(et.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: vn(et.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Wr(et.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: vn(et.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Wr(et.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: vn(et.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Wr(et.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: vn(et.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Wr(et.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: vn(et.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Wr(et.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Wr(et.placeholderShown),
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
}, RS = Object.keys(
  Hc
);
function h0(e, t) {
  return U(String(e).replace(/\./g, "-"), void 0, t);
}
function bA(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = h0(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...b] = f, g = `${p}.-${b.join(".")}`, x = io.negate(s), m = io.negate(u);
        n[g] = {
          value: x,
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
      const b = [String(o).split(".")[0], f].join(".");
      if (!e[b])
        return f;
      const { reference: x } = h0(b, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = nr(s) ? s : { default: s };
    r = tr(
      r,
      Object.entries(d).reduce(
        (f, [p, b]) => {
          var g, x;
          if (!b)
            return f;
          const m = c(`${b}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (x = (g = Hc) == null ? void 0 : g[p]) != null ? x : p;
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
function xA(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function SA(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function wA(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function m0(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (wA(a) || Array.isArray(a)) {
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
var kA = [
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
function CA(e) {
  return SA(e, kA);
}
function _A(e) {
  return e.semanticTokens;
}
function PA(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var TA = (e) => RS.includes(e) || e === "default";
function EA({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return m0(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), m0(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(TA)
    }
  ), r;
}
function $A(e) {
  var t;
  const r = PA(e), n = CA(r), o = _A(r), i = EA({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = bA(i, { cssVarPrefix: a });
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
    __breakpoints: yA(r.breakpoints)
  }), r;
}
var xm = tr(
  {},
  iu,
  le,
  H$,
  Ku,
  Xt,
  G$,
  tA,
  K$,
  ES,
  eA,
  Fa,
  Ip,
  Ce,
  aA,
  iA,
  rA,
  nA,
  Y$,
  oA
);
Object.assign({}, Ce, Xt, Ku, ES, Fa);
var AA = [...Object.keys(xm), ...RS], MA = { ...xm, ...Hc }, RA = (e) => e in MA, OA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Ar(e[a], t);
    if (s == null)
      continue;
    if (s = nr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function IA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function DA(e) {
  return /^var\(--.+\)$/.test(e);
}
var zA = (e, t) => e.startsWith("--") && typeof t == "string" && !DA(t), FA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = IA(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function jA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Ar(i, n), d = OA(c)(n);
    let f = {};
    for (let p in d) {
      const b = d[p];
      let g = Ar(b, n);
      p in r && (p = r[p]), zA(p, g) && (g = FA(n, g));
      let x = t[p];
      if (x === !0 && (x = { property: p }), nr(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = tr(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, g, n, c)) != null ? u : g;
      m = x != null && x.processResult ? o(m, !0) : m;
      const h = Ar(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const y = Ar(x.static, n);
        f = tr({}, f, y);
      }
      if (h && Array.isArray(h)) {
        for (const y of h)
          f[y] = m;
        continue;
      }
      if (h) {
        h === "&" && nr(m) ? f = tr({}, f, m) : f[h] = m;
        continue;
      }
      if (nr(m)) {
        f = tr({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var OS = (e) => (t) => jA({
  theme: t,
  pseudos: Hc,
  configs: xm
})(e);
function we(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function NA(e, t) {
  if (Array.isArray(e))
    return e;
  if (nr(e))
    return t(e);
  if (e != null)
    return [e];
}
function LA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function BA(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = NA(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let b = 0; b < d; b++) {
      const g = t.details[b], x = t.details[LA(c, b)], m = Sa(g.minW, x == null ? void 0 : x._minW), h = Ar((s = n[o]) == null ? void 0 : s[c[b]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((y) => {
            tr(u, {
              [y]: f ? h[y] : { [m]: h[y] }
            });
          });
          continue;
        }
        if (!p) {
          f ? tr(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function VA(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = BA(i);
    return tr(
      {},
      Ar((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function dn(e) {
  return xA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var WA = [
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
function UA(e) {
  return nr(e) ? WA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var HA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, GA = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, KA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, YA = {
  property: HA,
  easing: GA,
  duration: KA
}, qA = YA, XA = {
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
}, QA = XA, ZA = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, JA = ZA, eM = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, tM = eM, rM = {
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
}, nM = rM, oM = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, iM = oM, aM = {
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
}, sM = aM, lM = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, uM = lM, cM = {
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
}, IS = cM, DS = {
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
}, dM = {
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
}, fM = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, pM = {
  ...DS,
  ...dM,
  container: fM
}, zS = pM, hM = {
  breakpoints: tM,
  zIndices: QA,
  radii: iM,
  blur: uM,
  colors: nM,
  ...IS,
  sizes: zS,
  shadows: sM,
  space: DS,
  borders: JA,
  transition: qA
}, { defineMultiStyleConfig: mM, definePartsStyle: wa } = we([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Gr = U("stepper-indicator-size"), ti = U("stepper-icon-size"), ri = U("stepper-title-font-size"), ka = U("stepper-description-font-size"), ca = U("stepper-accent-color"), vM = wa(({ colorScheme: e }) => ({
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
    [ca.variable]: `colors.${e}.500`,
    _dark: {
      [ca.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ri.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ka.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ri.reference
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
    width: ti.reference,
    height: ti.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Gr.reference,
    height: Gr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: ca.reference
    },
    "&[data-status=complete]": {
      bg: ca.reference,
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
      bg: ca.reference
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
      maxHeight: `calc(100% - ${Gr.reference} - 8px)`,
      top: `calc(${Gr.reference} + 4px)`,
      insetStart: `calc(${Gr.reference} / 2 - 1px)`
    }
  }
})), gM = mM({
  baseStyle: vM,
  sizes: {
    xs: wa({
      stepper: {
        [Gr.variable]: "sizes.4",
        [ti.variable]: "sizes.3",
        [ri.variable]: "fontSizes.xs",
        [ka.variable]: "fontSizes.xs"
      }
    }),
    sm: wa({
      stepper: {
        [Gr.variable]: "sizes.6",
        [ti.variable]: "sizes.4",
        [ri.variable]: "fontSizes.sm",
        [ka.variable]: "fontSizes.xs"
      }
    }),
    md: wa({
      stepper: {
        [Gr.variable]: "sizes.8",
        [ti.variable]: "sizes.5",
        [ri.variable]: "fontSizes.md",
        [ka.variable]: "fontSizes.sm"
      }
    }),
    lg: wa({
      stepper: {
        [Gr.variable]: "sizes.10",
        [ti.variable]: "sizes.6",
        [ri.variable]: "fontSizes.lg",
        [ka.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function pe(e, t = {}) {
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
    return pe(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return pe(e, t);
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
var yM = pe("accordion").parts("root", "container", "button", "panel").extend("icon"), bM = pe("alert").parts("title", "description", "container").extend("icon", "spinner"), xM = pe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), SM = pe("breadcrumb").parts("link", "item", "container").extend("separator");
pe("button").parts();
var wM = pe("checkbox").parts("control", "icon", "container").extend("label");
pe("progress").parts("track", "filledTrack").extend("label");
var kM = pe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), CM = pe("editable").parts(
  "preview",
  "input",
  "textarea"
), _M = pe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), PM = pe("formError").parts("text", "icon"), TM = pe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), EM = pe("list").parts("container", "item", "icon"), $M = pe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), AM = pe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), MM = pe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
pe("pininput").parts("field");
var RM = pe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), OM = pe("progress").parts(
  "label",
  "filledTrack",
  "track"
), IM = pe("radio").parts(
  "container",
  "control",
  "label"
), DM = pe("select").parts("field", "icon"), zM = pe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), FM = pe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), jM = pe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), NM = pe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), LM = pe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), BM = pe("tag").parts(
  "container",
  "label",
  "closeButton"
), VM = pe("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
pe("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function co(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class WM extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ca = WM;
function Sm(e) {
  if (typeof e != "string")
    throw new Ca(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = QM.test(e) ? GM(e) : e;
  const r = KM.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(ys(s, 2), 16)), parseInt(ys(a[3] || "f", 2), 16) / 255];
  }
  const n = YM.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = qM.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = XM.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (co(0, 100, s) !== s)
      throw new Ca(e);
    if (co(0, 100, l) !== l)
      throw new Ca(e);
    return [...ZM(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ca(e);
}
function UM(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const v0 = (e) => parseInt(e.replace(/_/g, ""), 36), HM = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = v0(t.substring(0, 3)), n = v0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function GM(e) {
  const t = e.toLowerCase().trim(), r = HM[UM(t)];
  if (!r)
    throw new Ca(e);
  return `#${r}`;
}
const ys = (e, t) => Array.from(Array(t)).map(() => e).join(""), KM = new RegExp(`^#${ys("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), YM = new RegExp(`^#${ys("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), qM = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ys(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), XM = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, QM = /^[a-z]+$/i, g0 = (e) => Math.round(e * 255), ZM = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(g0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(g0);
};
function JM(e, t, r, n) {
  return `rgba(${co(0, 255, e).toFixed()}, ${co(0, 255, t).toFixed()}, ${co(0, 255, r).toFixed()}, ${parseFloat(co(0, 1, n).toFixed(3))})`;
}
function eR(e, t) {
  const [r, n, o, i] = Sm(e);
  return JM(r, n, o, i - t);
}
function tR(e) {
  const [t, r, n, o] = Sm(e);
  let i = (a) => {
    const s = co(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function rR(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var nR = (e) => Object.keys(e).length === 0, yt = (e, t, r) => {
  const n = rR(e, `colors.${t}`, t);
  try {
    return tR(n), n;
  } catch {
    return r ?? "#000000";
  }
}, oR = (e) => {
  const [t, r, n] = Sm(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, iR = (e) => (t) => {
  const r = yt(t, e);
  return oR(r) < 128 ? "dark" : "light";
}, aR = (e) => (t) => iR(e)(t) === "dark", Ii = (e, t) => (r) => {
  const n = yt(r, e);
  return eR(n, 1 - t);
};
function y0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var sR = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function lR(e) {
  const t = sR();
  return !e || nR(e) ? t : e.string && e.colors ? cR(e.string, e.colors) : e.string && !e.colors ? uR(e.string) : e.colors && !e.string ? dR(e.colors) : t;
}
function uR(e) {
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
function cR(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function dR(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function W(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function wm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function FS(e) {
  return nr(e) && e.reference ? e.reference : String(e);
}
var Gc = (e, ...t) => t.map(FS).join(` ${e} `).replace(/calc/g, ""), b0 = (...e) => `calc(${Gc("+", ...e)})`, x0 = (...e) => `calc(${Gc("-", ...e)})`, Fp = (...e) => `calc(${Gc("*", ...e)})`, S0 = (...e) => `calc(${Gc("/", ...e)})`, w0 = (e) => {
  const t = FS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Fp(t, -1);
}, Kr = Object.assign(
  (e) => ({
    add: (...t) => Kr(b0(e, ...t)),
    subtract: (...t) => Kr(x0(e, ...t)),
    multiply: (...t) => Kr(Fp(e, ...t)),
    divide: (...t) => Kr(S0(e, ...t)),
    negate: () => Kr(w0(e)),
    toString: () => e.toString()
  }),
  {
    add: b0,
    subtract: x0,
    multiply: Fp,
    divide: S0,
    negate: w0
  }
);
function fR(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function pR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function jS(e) {
  const t = pR(e.toString());
  return t.includes("\\.") ? e : fR(e) ? t.replace(".", "\\.") : e;
}
function hR(e, t = "") {
  return [t, jS(e)].filter(Boolean).join("-");
}
function mR(e, t) {
  return `var(${jS(e)}${t ? `, ${t}` : ""})`;
}
function vR(e, t = "") {
  return `--${hR(e, t)}`;
}
function Ke(e, t) {
  const r = vR(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: mR(r, gR(t == null ? void 0 : t.fallback))
  };
}
function gR(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: yR, definePartsStyle: au } = we(jM.keys), ja = Ke("switch-track-width"), vo = Ke("switch-track-height"), Yd = Ke("switch-track-diff"), bR = Kr.subtract(ja, vo), jp = Ke("switch-thumb-x"), da = Ke("switch-bg"), xR = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ja.reference],
    height: [vo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [da.variable]: "colors.gray.300",
    _dark: {
      [da.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [da.variable]: `colors.${t}.500`,
      _dark: {
        [da.variable]: `colors.${t}.200`
      }
    },
    bg: da.reference
  };
}, SR = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [vo.reference],
  height: [vo.reference],
  _checked: {
    transform: `translateX(${jp.reference})`
  }
}, wR = au((e) => ({
  container: {
    [Yd.variable]: bR,
    [jp.variable]: Yd.reference,
    _rtl: {
      [jp.variable]: Kr(Yd).negate().toString()
    }
  },
  track: xR(e),
  thumb: SR
})), kR = {
  sm: au({
    container: {
      [ja.variable]: "1.375rem",
      [vo.variable]: "sizes.3"
    }
  }),
  md: au({
    container: {
      [ja.variable]: "1.875rem",
      [vo.variable]: "sizes.4"
    }
  }),
  lg: au({
    container: {
      [ja.variable]: "2.875rem",
      [vo.variable]: "sizes.6"
    }
  })
}, CR = yR({
  baseStyle: wR,
  sizes: kR,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: _R, definePartsStyle: bi } = we(NM.keys), PR = bi({
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
}), Yu = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, TR = bi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: W("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...Yu
    },
    td: {
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...Yu
    },
    caption: {
      color: W("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), ER = bi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: W("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...Yu
    },
    td: {
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...Yu
    },
    caption: {
      color: W("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: W(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: W(`${t}.100`, `${t}.700`)(e)
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
}), $R = {
  simple: TR,
  striped: ER,
  unstyled: {}
}, AR = {
  sm: bi({
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
  md: bi({
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
  lg: bi({
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
}, MR = _R({
  baseStyle: PR,
  variants: $R,
  sizes: AR,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ct = U("tabs-color"), hr = U("tabs-bg"), Tl = U("tabs-border-color"), { defineMultiStyleConfig: RR, definePartsStyle: Ir } = we(LM.keys), OR = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, IR = (e) => {
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
}, DR = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, zR = {
  p: 4
}, FR = Ir((e) => ({
  root: OR(e),
  tab: IR(e),
  tablist: DR(e),
  tabpanel: zR
})), jR = {
  sm: Ir({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ir({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ir({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, NR = Ir((e) => {
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
        [Ct.variable]: `colors.${t}.600`,
        _dark: {
          [Ct.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [hr.variable]: "colors.gray.200",
        _dark: {
          [hr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ct.reference,
      bg: hr.reference
    }
  };
}), LR = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Tl.variable]: "transparent",
      _selected: {
        [Ct.variable]: `colors.${t}.600`,
        [Tl.variable]: "colors.white",
        _dark: {
          [Ct.variable]: `colors.${t}.300`,
          [Tl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Tl.reference
      },
      color: Ct.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), BR = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [hr.variable]: "colors.gray.50",
      _dark: {
        [hr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [hr.variable]: "colors.white",
        [Ct.variable]: `colors.${t}.600`,
        _dark: {
          [hr.variable]: "colors.gray.800",
          [Ct.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ct.reference,
      bg: hr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), VR = Ir((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: yt(r, `${t}.700`),
        bg: yt(r, `${t}.100`)
      }
    }
  };
}), WR = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ct.variable]: "colors.gray.600",
      _dark: {
        [Ct.variable]: "inherit"
      },
      _selected: {
        [Ct.variable]: "colors.white",
        [hr.variable]: `colors.${t}.600`,
        _dark: {
          [Ct.variable]: "colors.gray.800",
          [hr.variable]: `colors.${t}.300`
        }
      },
      color: Ct.reference,
      bg: hr.reference
    }
  };
}), UR = Ir({}), HR = {
  line: NR,
  enclosed: LR,
  "enclosed-colored": BR,
  "soft-rounded": VR,
  "solid-rounded": WR,
  unstyled: UR
}, GR = RR({
  baseStyle: FR,
  sizes: jR,
  variants: HR,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Le = hA("badge", ["bg", "color", "shadow"]), KR = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, YR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ii(`${t}.500`, 0.6)(r);
  return {
    [Le.bg.variable]: `colors.${t}.500`,
    [Le.color.variable]: "colors.white",
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, qR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ii(`${t}.200`, 0.16)(r);
  return {
    [Le.bg.variable]: `colors.${t}.100`,
    [Le.color.variable]: `colors.${t}.800`,
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: `colors.${t}.200`
    }
  };
}, XR = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ii(`${t}.200`, 0.8)(r);
  return {
    [Le.color.variable]: `colors.${t}.500`,
    _dark: {
      [Le.color.variable]: n
    },
    [Le.shadow.variable]: `inset 0 0 0px 1px ${Le.color.reference}`
  };
}, QR = {
  solid: YR,
  subtle: qR,
  outline: XR
}, Na = {
  baseStyle: KR,
  variants: QR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: ZR, definePartsStyle: go } = we(BM.keys), k0 = U("tag-bg"), C0 = U("tag-color"), qd = U("tag-shadow"), su = U("tag-min-height"), lu = U("tag-min-width"), uu = U("tag-font-size"), cu = U("tag-padding-inline"), JR = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [C0.variable]: Le.color.reference,
  [k0.variable]: Le.bg.reference,
  [qd.variable]: Le.shadow.reference,
  color: C0.reference,
  bg: k0.reference,
  boxShadow: qd.reference,
  borderRadius: "md",
  minH: su.reference,
  minW: lu.reference,
  fontSize: uu.reference,
  px: cu.reference,
  _focusVisible: {
    [qd.variable]: "shadows.outline"
  }
}, e5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, t5 = {
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
}, r5 = go({
  container: JR,
  label: e5,
  closeButton: t5
}), n5 = {
  sm: go({
    container: {
      [su.variable]: "sizes.5",
      [lu.variable]: "sizes.5",
      [uu.variable]: "fontSizes.xs",
      [cu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: go({
    container: {
      [su.variable]: "sizes.6",
      [lu.variable]: "sizes.6",
      [uu.variable]: "fontSizes.sm",
      [cu.variable]: "space.2"
    }
  }),
  lg: go({
    container: {
      [su.variable]: "sizes.8",
      [lu.variable]: "sizes.8",
      [uu.variable]: "fontSizes.md",
      [cu.variable]: "space.3"
    }
  })
}, o5 = {
  subtle: go((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: go((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: go((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.outline(e)
    };
  })
}, i5 = ZR({
  variants: o5,
  baseStyle: r5,
  sizes: n5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Xr, defineMultiStyleConfig: a5 } = we(TM.keys), ni = U("input-height"), oi = U("input-font-size"), ii = U("input-padding"), ai = U("input-border-radius"), s5 = Xr({
  addon: {
    height: ni.reference,
    fontSize: oi.reference,
    px: ii.reference,
    borderRadius: ai.reference
  },
  field: {
    width: "100%",
    height: ni.reference,
    fontSize: oi.reference,
    px: ii.reference,
    borderRadius: ai.reference,
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
}), gn = {
  lg: {
    [oi.variable]: "fontSizes.lg",
    [ii.variable]: "space.4",
    [ai.variable]: "radii.md",
    [ni.variable]: "sizes.12"
  },
  md: {
    [oi.variable]: "fontSizes.md",
    [ii.variable]: "space.4",
    [ai.variable]: "radii.md",
    [ni.variable]: "sizes.10"
  },
  sm: {
    [oi.variable]: "fontSizes.sm",
    [ii.variable]: "space.3",
    [ai.variable]: "radii.sm",
    [ni.variable]: "sizes.8"
  },
  xs: {
    [oi.variable]: "fontSizes.xs",
    [ii.variable]: "space.2",
    [ai.variable]: "radii.sm",
    [ni.variable]: "sizes.6"
  }
}, l5 = {
  lg: Xr({
    field: gn.lg,
    group: gn.lg
  }),
  md: Xr({
    field: gn.md,
    group: gn.md
  }),
  sm: Xr({
    field: gn.sm,
    group: gn.sm
  }),
  xs: Xr({
    field: gn.xs,
    group: gn.xs
  })
};
function km(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || W("blue.500", "blue.300")(e),
    errorBorderColor: r || W("red.500", "red.300")(e)
  };
}
var u5 = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: W("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: yt(t, n),
        boxShadow: `0 0 0 1px ${yt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: yt(t, r),
        boxShadow: `0 0 0 1px ${yt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: W("inherit", "whiteAlpha.50")(e),
      bg: W("gray.100", "whiteAlpha.300")(e)
    }
  };
}), c5 = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: W("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: W("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: yt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: yt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: W("gray.100", "whiteAlpha.50")(e)
    }
  };
}), d5 = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
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
        borderColor: yt(t, n),
        boxShadow: `0px 1px 0px 0px ${yt(t, n)}`
      },
      _focusVisible: {
        borderColor: yt(t, r),
        boxShadow: `0px 1px 0px 0px ${yt(t, r)}`
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
}), f5 = Xr({
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
}), p5 = {
  outline: u5,
  filled: c5,
  flushed: d5,
  unstyled: f5
}, de = a5({
  baseStyle: s5,
  sizes: l5,
  variants: p5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), _0, h5 = {
  ...(_0 = de.baseStyle) == null ? void 0 : _0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, P0, T0, m5 = {
  outline: (e) => {
    var t, r;
    return (r = (t = de.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = de.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = de.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (T0 = (P0 = de.variants) == null ? void 0 : P0.unstyled.field) != null ? T0 : {}
}, E0, $0, A0, M0, R0, O0, I0, D0, v5 = {
  xs: ($0 = (E0 = de.sizes) == null ? void 0 : E0.xs.field) != null ? $0 : {},
  sm: (M0 = (A0 = de.sizes) == null ? void 0 : A0.sm.field) != null ? M0 : {},
  md: (O0 = (R0 = de.sizes) == null ? void 0 : R0.md.field) != null ? O0 : {},
  lg: (D0 = (I0 = de.sizes) == null ? void 0 : I0.lg.field) != null ? D0 : {}
}, g5 = {
  baseStyle: h5,
  sizes: v5,
  variants: m5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, El = Ke("tooltip-bg"), Xd = Ke("tooltip-fg"), y5 = Ke("popper-arrow-bg"), b5 = {
  bg: El.reference,
  color: Xd.reference,
  [El.variable]: "colors.gray.700",
  [Xd.variable]: "colors.whiteAlpha.900",
  _dark: {
    [El.variable]: "colors.gray.300",
    [Xd.variable]: "colors.gray.900"
  },
  [y5.variable]: El.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, x5 = {
  baseStyle: b5
}, { defineMultiStyleConfig: S5, definePartsStyle: _a } = we(OM.keys), w5 = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = W(
    y0(),
    y0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = W(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${yt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, k5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, C5 = (e) => ({
  bg: W("gray.100", "whiteAlpha.300")(e)
}), _5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...w5(e)
}), P5 = _a((e) => ({
  label: k5,
  filledTrack: _5(e),
  track: C5(e)
})), T5 = {
  xs: _a({
    track: { h: "1" }
  }),
  sm: _a({
    track: { h: "2" }
  }),
  md: _a({
    track: { h: "3" }
  }),
  lg: _a({
    track: { h: "4" }
  })
}, E5 = S5({
  sizes: T5,
  baseStyle: P5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), $5 = (e) => typeof e == "function";
function xt(e, ...t) {
  return $5(e) ? e(...t) : e;
}
var { definePartsStyle: du, defineMultiStyleConfig: A5 } = we(wM.keys), La = U("checkbox-size"), M5 = (e) => {
  const { colorScheme: t } = e;
  return {
    w: La.reference,
    h: La.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: W(`${t}.500`, `${t}.200`)(e),
      borderColor: W(`${t}.500`, `${t}.200`)(e),
      color: W("white", "gray.900")(e),
      _hover: {
        bg: W(`${t}.600`, `${t}.300`)(e),
        borderColor: W(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: W("gray.200", "transparent")(e),
        bg: W("gray.200", "whiteAlpha.300")(e),
        color: W("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: W(`${t}.500`, `${t}.200`)(e),
      borderColor: W(`${t}.500`, `${t}.200`)(e),
      color: W("white", "gray.900")(e)
    },
    _disabled: {
      bg: W("gray.100", "whiteAlpha.100")(e),
      borderColor: W("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: W("red.500", "red.300")(e)
    }
  };
}, R5 = {
  _disabled: { cursor: "not-allowed" }
}, O5 = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, I5 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, D5 = du((e) => ({
  icon: I5,
  container: R5,
  control: xt(M5, e),
  label: O5
})), z5 = {
  sm: du({
    control: { [La.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: du({
    control: { [La.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: du({
    control: { [La.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, qu = A5({
  baseStyle: D5,
  sizes: z5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: F5, definePartsStyle: fu } = we(IM.keys), j5 = (e) => {
  var t;
  const r = (t = xt(qu.baseStyle, e)) == null ? void 0 : t.control;
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
}, N5 = fu((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = qu).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = qu).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: j5(e)
  };
}), L5 = {
  md: fu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: fu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: fu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, B5 = F5({
  baseStyle: N5,
  sizes: L5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: V5, definePartsStyle: W5 } = we(DM.keys), $l = U("select-bg"), z0, U5 = {
  ...(z0 = de.baseStyle) == null ? void 0 : z0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $l.reference,
  [$l.variable]: "colors.white",
  _dark: {
    [$l.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $l.reference
  }
}, H5 = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, G5 = W5({
  field: U5,
  icon: H5
}), Al = {
  paddingInlineEnd: "8"
}, F0, j0, N0, L0, B0, V0, W0, U0, K5 = {
  lg: {
    ...(F0 = de.sizes) == null ? void 0 : F0.lg,
    field: {
      ...(j0 = de.sizes) == null ? void 0 : j0.lg.field,
      ...Al
    }
  },
  md: {
    ...(N0 = de.sizes) == null ? void 0 : N0.md,
    field: {
      ...(L0 = de.sizes) == null ? void 0 : L0.md.field,
      ...Al
    }
  },
  sm: {
    ...(B0 = de.sizes) == null ? void 0 : B0.sm,
    field: {
      ...(V0 = de.sizes) == null ? void 0 : V0.sm.field,
      ...Al
    }
  },
  xs: {
    ...(W0 = de.sizes) == null ? void 0 : W0.xs,
    field: {
      ...(U0 = de.sizes) == null ? void 0 : U0.xs.field,
      ...Al
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Y5 = V5({
  baseStyle: G5,
  sizes: K5,
  variants: de.variants,
  defaultProps: de.defaultProps
}), Qd = U("skeleton-start-color"), Zd = U("skeleton-end-color"), q5 = {
  [Qd.variable]: "colors.gray.100",
  [Zd.variable]: "colors.gray.400",
  _dark: {
    [Qd.variable]: "colors.gray.800",
    [Zd.variable]: "colors.gray.600"
  },
  background: Qd.reference,
  borderColor: Zd.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, X5 = {
  baseStyle: q5
}, Jd = U("skip-link-bg"), Q5 = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Jd.variable]: "colors.white",
    _dark: {
      [Jd.variable]: "colors.gray.700"
    },
    bg: Jd.reference
  }
}, Z5 = {
  baseStyle: Q5
}, { defineMultiStyleConfig: J5, definePartsStyle: Kc } = we(zM.keys), bs = U("slider-thumb-size"), xs = U("slider-track-size"), _n = U("slider-bg"), eO = (e) => {
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
    ...wm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, tO = (e) => ({
  ...wm({
    orientation: e.orientation,
    horizontal: { h: xs.reference },
    vertical: { w: xs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [_n.variable]: "colors.gray.200",
  _dark: {
    [_n.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [_n.variable]: "colors.gray.300",
    _dark: {
      [_n.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: _n.reference
}), rO = (e) => {
  const { orientation: t } = e;
  return {
    ...wm({
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
    w: bs.reference,
    h: bs.reference,
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
}, nO = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [_n.variable]: `colors.${t}.500`,
    _dark: {
      [_n.variable]: `colors.${t}.200`
    },
    bg: _n.reference
  };
}, oO = Kc((e) => ({
  container: eO(e),
  track: tO(e),
  thumb: rO(e),
  filledTrack: nO(e)
})), iO = Kc({
  container: {
    [bs.variable]: "sizes.4",
    [xs.variable]: "sizes.1"
  }
}), aO = Kc({
  container: {
    [bs.variable]: "sizes.3.5",
    [xs.variable]: "sizes.1"
  }
}), sO = Kc({
  container: {
    [bs.variable]: "sizes.2.5",
    [xs.variable]: "sizes.0.5"
  }
}), lO = {
  lg: iO,
  md: aO,
  sm: sO
}, uO = J5({
  baseStyle: oO,
  sizes: lO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), ao = Ke("spinner-size"), cO = {
  width: [ao.reference],
  height: [ao.reference]
}, dO = {
  xs: {
    [ao.variable]: "sizes.3"
  },
  sm: {
    [ao.variable]: "sizes.4"
  },
  md: {
    [ao.variable]: "sizes.6"
  },
  lg: {
    [ao.variable]: "sizes.8"
  },
  xl: {
    [ao.variable]: "sizes.12"
  }
}, fO = {
  baseStyle: cO,
  sizes: dO,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: pO, definePartsStyle: NS } = we(FM.keys), hO = {
  fontWeight: "medium"
}, mO = {
  opacity: 0.8,
  marginBottom: "2"
}, vO = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, gO = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, yO = NS({
  container: {},
  label: hO,
  helpText: mO,
  number: vO,
  icon: gO
}), bO = {
  md: NS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, xO = pO({
  baseStyle: yO,
  sizes: bO,
  defaultProps: {
    size: "md"
  }
}), ef = U("kbd-bg"), SO = {
  [ef.variable]: "colors.gray.100",
  _dark: {
    [ef.variable]: "colors.whiteAlpha.100"
  },
  bg: ef.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, wO = {
  baseStyle: SO
}, kO = {
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
}, CO = {
  baseStyle: kO
}, { defineMultiStyleConfig: _O, definePartsStyle: PO } = we(EM.keys), TO = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, EO = PO({
  icon: TO
}), $O = _O({
  baseStyle: EO
}), { defineMultiStyleConfig: AO, definePartsStyle: MO } = we($M.keys), Cr = U("menu-bg"), tf = U("menu-shadow"), RO = {
  [Cr.variable]: "#fff",
  [tf.variable]: "shadows.sm",
  _dark: {
    [Cr.variable]: "colors.gray.700",
    [tf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Cr.reference,
  boxShadow: tf.reference
}, OO = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Cr.variable]: "colors.gray.200",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Cr.reference
}, IO = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, DO = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, zO = {
  opacity: 0.6
}, FO = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, jO = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, NO = MO({
  button: jO,
  list: RO,
  item: OO,
  groupTitle: IO,
  icon: DO,
  command: zO,
  divider: FO
}), LO = AO({
  baseStyle: NO
}), { defineMultiStyleConfig: BO, definePartsStyle: Np } = we(AM.keys), rf = U("modal-bg"), nf = U("modal-shadow"), VO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, WO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, UO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [rf.variable]: "colors.white",
    [nf.variable]: "shadows.lg",
    _dark: {
      [rf.variable]: "colors.gray.700",
      [nf.variable]: "shadows.dark-lg"
    },
    bg: rf.reference,
    boxShadow: nf.reference
  };
}, HO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, GO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, KO = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, YO = {
  px: "6",
  py: "4"
}, qO = Np((e) => ({
  overlay: VO,
  dialogContainer: xt(WO, e),
  dialog: xt(UO, e),
  header: HO,
  closeButton: GO,
  body: xt(KO, e),
  footer: YO
}));
function cr(e) {
  return Np(e === "full" ? {
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
var XO = {
  xs: cr("xs"),
  sm: cr("sm"),
  md: cr("md"),
  lg: cr("lg"),
  xl: cr("xl"),
  "2xl": cr("2xl"),
  "3xl": cr("3xl"),
  "4xl": cr("4xl"),
  "5xl": cr("5xl"),
  "6xl": cr("6xl"),
  full: cr("full")
}, QO = BO({
  baseStyle: qO,
  sizes: XO,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: ZO, definePartsStyle: LS } = we(MM.keys), Cm = Ke("number-input-stepper-width"), BS = Ke("number-input-input-padding"), JO = Kr(Cm).add("0.5rem").toString(), of = Ke("number-input-bg"), af = Ke("number-input-color"), sf = Ke("number-input-border-color"), eI = {
  [Cm.variable]: "sizes.6",
  [BS.variable]: JO
}, tI = (e) => {
  var t, r;
  return (r = (t = xt(de.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, rI = {
  width: Cm.reference
}, nI = {
  borderStart: "1px solid",
  borderStartColor: sf.reference,
  color: af.reference,
  bg: of.reference,
  [af.variable]: "colors.chakra-body-text",
  [sf.variable]: "colors.chakra-border-color",
  _dark: {
    [af.variable]: "colors.whiteAlpha.800",
    [sf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [of.variable]: "colors.gray.200",
    _dark: {
      [of.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, oI = LS((e) => {
  var t;
  return {
    root: eI,
    field: (t = xt(tI, e)) != null ? t : {},
    stepperGroup: rI,
    stepper: nI
  };
});
function Ml(e) {
  var t, r, n;
  const o = (t = de.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = IS.fontSizes[a];
  return LS({
    field: {
      ...o.field,
      paddingInlineEnd: BS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Kr(s).multiply(0.75).toString(),
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
var iI = {
  xs: Ml("xs"),
  sm: Ml("sm"),
  md: Ml("md"),
  lg: Ml("lg")
}, aI = ZO({
  baseStyle: oI,
  sizes: iI,
  variants: de.variants,
  defaultProps: de.defaultProps
}), H0, sI = {
  ...(H0 = de.baseStyle) == null ? void 0 : H0.field,
  textAlign: "center"
}, lI = {
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
}, G0, K0, uI = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = xt((t = de.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = xt((t = de.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = xt((t = de.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (K0 = (G0 = de.variants) == null ? void 0 : G0.unstyled.field) != null ? K0 : {}
}, cI = {
  baseStyle: sI,
  sizes: lI,
  variants: uI,
  defaultProps: de.defaultProps
}, { defineMultiStyleConfig: dI, definePartsStyle: fI } = we(RM.keys), Rl = Ke("popper-bg"), pI = Ke("popper-arrow-bg"), Y0 = Ke("popper-arrow-shadow-color"), hI = { zIndex: 10 }, mI = {
  [Rl.variable]: "colors.white",
  bg: Rl.reference,
  [pI.variable]: Rl.reference,
  [Y0.variable]: "colors.gray.200",
  _dark: {
    [Rl.variable]: "colors.gray.700",
    [Y0.variable]: "colors.whiteAlpha.300"
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
}, vI = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, gI = {
  px: 3,
  py: 2
}, yI = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, bI = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, xI = fI({
  popper: hI,
  content: mI,
  header: vI,
  body: gI,
  footer: yI,
  closeButton: bI
}), SI = dI({
  baseStyle: xI
}), { definePartsStyle: Lp, defineMultiStyleConfig: wI } = we(kM.keys), lf = U("drawer-bg"), uf = U("drawer-box-shadow");
function Fo(e) {
  return Lp(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var kI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, CI = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, _I = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [lf.variable]: "colors.white",
    [uf.variable]: "shadows.lg",
    _dark: {
      [lf.variable]: "colors.gray.700",
      [uf.variable]: "shadows.dark-lg"
    },
    bg: lf.reference,
    boxShadow: uf.reference
  };
}, PI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, TI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, EI = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, $I = {
  px: "6",
  py: "4"
}, AI = Lp((e) => ({
  overlay: kI,
  dialogContainer: CI,
  dialog: xt(_I, e),
  header: PI,
  closeButton: TI,
  body: EI,
  footer: $I
})), MI = {
  xs: Fo("xs"),
  sm: Fo("md"),
  md: Fo("lg"),
  lg: Fo("2xl"),
  xl: Fo("4xl"),
  full: Fo("full")
}, RI = wI({
  baseStyle: AI,
  sizes: MI,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: OI, defineMultiStyleConfig: II } = we(CM.keys), DI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, zI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, FI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, jI = OI({
  preview: DI,
  input: zI,
  textarea: FI
}), NI = II({
  baseStyle: jI
}), { definePartsStyle: LI, defineMultiStyleConfig: BI } = we(_M.keys), xi = U("form-control-color"), VI = {
  marginStart: "1",
  [xi.variable]: "colors.red.500",
  _dark: {
    [xi.variable]: "colors.red.300"
  },
  color: xi.reference
}, WI = {
  mt: "2",
  [xi.variable]: "colors.gray.600",
  _dark: {
    [xi.variable]: "colors.whiteAlpha.600"
  },
  color: xi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, UI = LI({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: VI,
  helperText: WI
}), HI = BI({
  baseStyle: UI
}), { definePartsStyle: GI, defineMultiStyleConfig: KI } = we(PM.keys), Si = U("form-error-color"), YI = {
  [Si.variable]: "colors.red.500",
  _dark: {
    [Si.variable]: "colors.red.300"
  },
  color: Si.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, qI = {
  marginEnd: "0.5em",
  [Si.variable]: "colors.red.500",
  _dark: {
    [Si.variable]: "colors.red.300"
  },
  color: Si.reference
}, XI = GI({
  text: YI,
  icon: qI
}), QI = KI({
  baseStyle: XI
}), ZI = {
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
}, JI = {
  baseStyle: ZI
}, eD = {
  fontFamily: "heading",
  fontWeight: "bold"
}, tD = {
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
}, rD = {
  baseStyle: eD,
  sizes: tD,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: nD, definePartsStyle: oD } = we(SM.keys), cf = U("breadcrumb-link-decor"), iD = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: cf.reference,
  [cf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [cf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, aD = oD({
  link: iD
}), sD = nD({
  baseStyle: aD
}), lD = {
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
}, VS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: W("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: W("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: W("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Ii(`${t}.200`, 0.12)(r), o = Ii(`${t}.200`, 0.24)(r);
  return {
    color: W(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: W(`${t}.50`, n)(e)
    },
    _active: {
      bg: W(`${t}.100`, o)(e)
    }
  };
}, uD = (e) => {
  const { colorScheme: t } = e, r = W("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...xt(VS, e)
  };
}, cD = {
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
}, dD = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = W("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: W("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: W("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: W("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = cD[r]) != null ? t : {}, s = W(n, `${r}.200`)(e);
  return {
    bg: s,
    color: W(o, "gray.800")(e),
    _hover: {
      bg: W(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: W(a, `${r}.400`)(e) }
  };
}, fD = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: W(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: W(`${t}.700`, `${t}.500`)(e)
    }
  };
}, pD = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, hD = {
  ghost: VS,
  outline: uD,
  solid: dD,
  link: fD,
  unstyled: pD
}, mD = {
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
}, vD = {
  baseStyle: lD,
  variants: hD,
  sizes: mD,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: yo, defineMultiStyleConfig: gD } = we(VM.keys), Xu = U("card-bg"), Jr = U("card-padding"), WS = U("card-shadow"), pu = U("card-radius"), US = U("card-border-width", "0"), HS = U("card-border-color"), yD = yo({
  container: {
    [Xu.variable]: "colors.chakra-body-bg",
    backgroundColor: Xu.reference,
    boxShadow: WS.reference,
    borderRadius: pu.reference,
    color: "chakra-body-text",
    borderWidth: US.reference,
    borderColor: HS.reference
  },
  body: {
    padding: Jr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Jr.reference
  },
  footer: {
    padding: Jr.reference
  }
}), bD = {
  sm: yo({
    container: {
      [pu.variable]: "radii.base",
      [Jr.variable]: "space.3"
    }
  }),
  md: yo({
    container: {
      [pu.variable]: "radii.md",
      [Jr.variable]: "space.5"
    }
  }),
  lg: yo({
    container: {
      [pu.variable]: "radii.xl",
      [Jr.variable]: "space.7"
    }
  })
}, xD = {
  elevated: yo({
    container: {
      [WS.variable]: "shadows.base",
      _dark: {
        [Xu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: yo({
    container: {
      [US.variable]: "1px",
      [HS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: yo({
    container: {
      [Xu.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Jr.variable]: 0
    },
    header: {
      [Jr.variable]: 0
    },
    footer: {
      [Jr.variable]: 0
    }
  }
}, SD = gD({
  baseStyle: yD,
  variants: xD,
  sizes: bD,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ba = Ke("close-button-size"), fa = Ke("close-button-bg"), wD = {
  w: [Ba.reference],
  h: [Ba.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [fa.variable]: "colors.blackAlpha.100",
    _dark: {
      [fa.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [fa.variable]: "colors.blackAlpha.200",
    _dark: {
      [fa.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: fa.reference
}, kD = {
  lg: {
    [Ba.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ba.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ba.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, CD = {
  baseStyle: wD,
  sizes: kD,
  defaultProps: {
    size: "md"
  }
}, { variants: _D, defaultProps: PD } = Na, TD = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, ED = {
  baseStyle: TD,
  variants: _D,
  defaultProps: PD
}, $D = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, AD = {
  baseStyle: $D
}, MD = {
  opacity: 0.6,
  borderColor: "inherit"
}, RD = {
  borderStyle: "solid"
}, OD = {
  borderStyle: "dashed"
}, ID = {
  solid: RD,
  dashed: OD
}, DD = {
  baseStyle: MD,
  variants: ID,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: zD, defineMultiStyleConfig: FD } = we(yM.keys), jD = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, ND = {
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
}, LD = {
  pt: "2",
  px: "4",
  pb: "5"
}, BD = {
  fontSize: "1.25em"
}, VD = zD({
  container: jD,
  button: ND,
  panel: LD,
  icon: BD
}), WD = FD({ baseStyle: VD }), { definePartsStyle: Ls, defineMultiStyleConfig: UD } = we(bM.keys), Nt = U("alert-fg"), sn = U("alert-bg"), HD = Ls({
  container: {
    bg: sn.reference,
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
    color: Nt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Nt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function _m(e) {
  const { theme: t, colorScheme: r } = e, n = Ii(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var GD = Ls((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [sn.variable]: r.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [sn.variable]: r.dark
      }
    }
  };
}), KD = Ls((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [sn.variable]: r.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [sn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Nt.reference
    }
  };
}), YD = Ls((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [sn.variable]: r.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [sn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Nt.reference
    }
  };
}), qD = Ls((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Nt.variable]: "colors.white",
      [sn.variable]: `colors.${t}.600`,
      _dark: {
        [Nt.variable]: "colors.gray.900",
        [sn.variable]: `colors.${t}.200`
      },
      color: Nt.reference
    }
  };
}), XD = {
  subtle: GD,
  "left-accent": KD,
  "top-accent": YD,
  solid: qD
}, QD = UD({
  baseStyle: HD,
  variants: XD,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: GS, defineMultiStyleConfig: ZD } = we(xM.keys), wi = U("avatar-border-color"), Va = U("avatar-bg"), Ss = U("avatar-font-size"), Di = U("avatar-size"), JD = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: wi.reference,
  [wi.variable]: "white",
  _dark: {
    [wi.variable]: "colors.gray.800"
  }
}, ez = {
  bg: Va.reference,
  fontSize: Ss.reference,
  width: Di.reference,
  height: Di.reference,
  lineHeight: "1",
  [Va.variable]: "colors.gray.200",
  _dark: {
    [Va.variable]: "colors.whiteAlpha.400"
  }
}, tz = (e) => {
  const { name: t, theme: r } = e, n = t ? lR({ string: t }) : "colors.gray.400", o = aR(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Va.reference,
    fontSize: Ss.reference,
    color: i,
    borderColor: wi.reference,
    verticalAlign: "top",
    width: Di.reference,
    height: Di.reference,
    "&:not([data-loaded])": {
      [Va.variable]: n
    },
    [wi.variable]: "colors.white",
    _dark: {
      [wi.variable]: "colors.gray.800"
    }
  };
}, rz = {
  fontSize: Ss.reference,
  lineHeight: "1"
}, nz = GS((e) => ({
  badge: xt(JD, e),
  excessLabel: xt(ez, e),
  container: xt(tz, e),
  label: rz
}));
function yn(e) {
  const t = e !== "100%" ? zS[e] : void 0;
  return GS({
    container: {
      [Di.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Di.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var oz = {
  "2xs": yn(4),
  xs: yn(6),
  sm: yn(8),
  md: yn(12),
  lg: yn(16),
  xl: yn(24),
  "2xl": yn(32),
  full: yn("100%")
}, iz = ZD({
  baseStyle: nz,
  sizes: oz,
  defaultProps: {
    size: "md"
  }
}), az = {
  Accordion: WD,
  Alert: QD,
  Avatar: iz,
  Badge: Na,
  Breadcrumb: sD,
  Button: vD,
  Checkbox: qu,
  CloseButton: CD,
  Code: ED,
  Container: AD,
  Divider: DD,
  Drawer: RI,
  Editable: NI,
  Form: HI,
  FormError: QI,
  FormLabel: JI,
  Heading: rD,
  Input: de,
  Kbd: wO,
  Link: CO,
  List: $O,
  Menu: LO,
  Modal: QO,
  NumberInput: aI,
  PinInput: cI,
  Popover: SI,
  Progress: E5,
  Radio: B5,
  Select: Y5,
  Skeleton: X5,
  SkipLink: Z5,
  Slider: uO,
  Spinner: fO,
  Stat: xO,
  Switch: CR,
  Table: MR,
  Tabs: GR,
  Tag: i5,
  Textarea: g5,
  Tooltip: x5,
  Card: SD,
  Stepper: gM
}, sz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, lz = {
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
}, uz = "ltr", cz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, KS = {
  semanticTokens: sz,
  direction: uz,
  ...hM,
  components: az,
  styles: lz,
  config: cz
};
function Pa(e) {
  return typeof e == "function";
}
function dz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var fz = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return UA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, dz(
    ...n.map(
      (i) => (a) => Pa(i) ? i(a) : hz(a, i)
    )
  )(o);
}, pz = fz(KS);
function hz(...e) {
  return tr({}, ...e, YS);
}
function YS(e, t, r, n) {
  if ((Pa(e) || Pa(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Pa(e) ? e(...o) : e, a = Pa(t) ? t(...o) : t;
      return tr({}, i, a, YS);
    };
}
function mz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function vz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var gz = (e) => {
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
}, qS = gz(vz);
function XS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var QS = (e) => XS(e, (t) => t != null);
function yz(e) {
  return typeof e == "function";
}
function ZS(e, ...t) {
  return yz(e) ? e(...t) : e;
}
var bz = typeof Element < "u", xz = typeof Map == "function", Sz = typeof Set == "function", wz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function hu(e, t) {
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
        if (!hu(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (xz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!hu(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Sz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (wz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (bz && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !hu(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var kz = function(t, r) {
  try {
    return hu(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Cz = /* @__PURE__ */ Ms(kz);
function JS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = P$(), s = e ? qS(i, `components.${e}`) : void 0, l = n || s, u = tr(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    QS(mz(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = VA(l)(u);
    Cz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Bs(e, t = {}) {
  return JS(e, t);
}
function Ki(e, t = {}) {
  return JS(e, t);
}
var _z = /* @__PURE__ */ new Set([
  ...AA,
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
]), Pz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Tz(e) {
  return Pz.has(e) || !_z.has(e);
}
function Ez(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function $z(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var Az = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mz = /* @__PURE__ */ uS(
  function(e) {
    return Az.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Rz = Mz, Oz = function(t) {
  return t !== "theme";
}, q0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Rz : Oz;
}, X0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Iz = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return mS(r, n, o), r$(function() {
    return vS(r, n, o);
  }), null;
}, Dz = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = X0(t, r, n), l = s || q0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var b = xS(function(g, x, m) {
      var h = u && g.as || o, y = "", w = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var P in g)
          k[P] = g[P];
        k.theme = v.useContext(vs);
      }
      typeof g.className == "string" ? y = qE(x.registered, w, g.className) : g.className != null && (y = g.className + " ");
      var _ = mm(d.concat(w), x.registered, k);
      y += x.key + "-" + _.name, a !== void 0 && (y += " " + a);
      var $ = u && s === void 0 ? q0(h) : l, M = {};
      for (var R in g)
        u && R === "as" || // $FlowFixMe
        $(R) && (M[R] = g[R]);
      return M.className = y, M.ref = m, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(Iz, {
        cache: x,
        serialized: _,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ v.createElement(h, M));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = d, b.__emotion_forwardProp = s, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + a;
      }
    }), b.withComponent = function(g, x) {
      return e(g, Po({}, r, x, {
        shouldForwardProp: X0(b, x, !0)
      })).apply(void 0, d);
    }, b;
  };
}, zz = [
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
], Qu = Dz.bind();
zz.forEach(function(e) {
  Qu[e] = Qu(e);
});
var Q0, Fz = (Q0 = Qu.default) != null ? Q0 : Qu, jz = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = XS(a, (d, f) => RA(f)), l = ZS(e, t), u = Ez(
    {},
    o,
    l,
    QS(s),
    i
  ), c = OS(u)(t.theme);
  return n ? [c, n] : c;
};
function df(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Tz);
  const o = jz({ baseStyle: r }), i = Fz(
    e,
    n
  )(o);
  return xo.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Ns();
    return xo.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function Nz() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(df, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return df(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, df(r)), e.get(r);
    }
  });
}
var Z = Nz();
function ae(e) {
  return v.forwardRef(e);
}
function Lz(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = v.createContext(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = v.useContext(o);
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
function Bz(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = v.useMemo(() => $A(r), [r]);
  return /* @__PURE__ */ C.jsxs(i$, { theme: o, children: [
    /* @__PURE__ */ C.jsx(Vz, { root: t }),
    n
  ] });
}
function Vz({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ C.jsx(Vc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
Lz({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function Wz() {
  const { colorMode: e } = Ns();
  return /* @__PURE__ */ C.jsx(
    Vc,
    {
      styles: (t) => {
        const r = qS(t, "styles.global"), n = ZS(r, { theme: t, colorMode: e });
        return n ? OS(n)(t) : void 0;
      }
    }
  );
}
var ew = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
ew.displayName = "EnvironmentContext";
function tw(e) {
  const { children: t, environment: r, disabled: n } = e, o = v.useRef(null), i = v.useMemo(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), a = !n || !r;
  return /* @__PURE__ */ C.jsxs(ew.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ C.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
tw.displayName = "EnvironmentProvider";
var Uz = (e) => {
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
    tw,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ C.jsx(Bz, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ C.jsxs(
    _S,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ C.jsx(u$, { scope: o }) : /* @__PURE__ */ C.jsx(l$, {}),
        !c && /* @__PURE__ */ C.jsx(Wz, {}),
        n ? /* @__PURE__ */ C.jsx(kS, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, Hz = (e, t) => e.find((r) => r.id === t);
function Z0(e, t) {
  const r = rw(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function rw(e, t) {
  for (const [r, n] of Object.entries(e))
    if (Hz(n, t))
      return r;
}
function Gz(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function Kz(e) {
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
function ws(e, t = []) {
  const r = v.useRef(e);
  return v.useEffect(() => {
    r.current = e;
  }), v.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function Yz(e, t) {
  const r = ws(e);
  v.useEffect(() => {
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
function zi(e, t) {
  const r = v.useRef(!1), n = v.useRef(!1);
  v.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), v.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const nw = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Yc = v.createContext({}), Vs = v.createContext(null), qc = typeof document < "u", Pm = qc ? v.useLayoutEffect : v.useEffect, ow = v.createContext({ strict: !1 }), Tm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), qz = "framerAppearId", iw = "data-" + Tm(qz);
function Xz(e, t, r, n) {
  const { visualElement: o } = v.useContext(Yc), i = v.useContext(ow), a = v.useContext(Vs), s = v.useContext(nw).reducedMotion, l = v.useRef();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  v.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = v.useRef(!!r[iw]);
  return Pm(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function si(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Qz(e, t, r) {
  return v.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : si(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ks(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Xc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Em = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], $m = ["initial", ...Em];
function Qc(e) {
  return Xc(e.animate) || $m.some((t) => ks(e[t]));
}
function aw(e) {
  return !!(Qc(e) || e.variants);
}
function Zz(e, t) {
  if (Qc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ks(r) ? r : void 0,
      animate: ks(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Jz(e) {
  const { initial: t, animate: r } = Zz(e, v.useContext(Yc));
  return v.useMemo(() => ({ initial: t, animate: r }), [J0(t), J0(r)]);
}
function J0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ey = {
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
}, Cs = {};
for (const e in ey)
  Cs[e] = {
    isEnabled: (t) => ey[e].some((r) => !!t[r])
  };
function e3(e) {
  for (const t in e)
    Cs[t] = {
      ...Cs[t],
      ...e[t]
    };
}
const Am = v.createContext({}), sw = v.createContext({}), t3 = Symbol.for("motionComponentSymbol");
function r3({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && e3(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(nw),
      ...s,
      layoutId: n3(s)
    }, { isStatic: d } = c, f = Jz(s), p = n(s, d);
    if (!d && qc) {
      f.visualElement = Xz(o, p, c, t);
      const b = v.useContext(sw), g = v.useContext(ow).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        b
      ));
    }
    return v.createElement(
      Yc.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, Qz(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[t3] = o, a;
}
function n3({ layoutId: e }) {
  const t = v.useContext(Am).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function o3(e) {
  function t(n, o = {}) {
    return r3(e(n, o));
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
const i3 = [
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
function Mm(e) {
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
      !!(i3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Zu = {};
function a3(e) {
  Object.assign(Zu, e);
}
const Ws = [
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
], Ao = new Set(Ws);
function lw(e, { layout: t, layoutId: r }) {
  return Ao.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Zu[e] || e === "opacity");
}
const Rt = (e) => !!(e && e.getVelocity), s3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, l3 = Ws.length;
function u3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < l3; a++) {
    const s = Ws[a];
    if (e[s] !== void 0) {
      const l = s3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const uw = (e) => (t) => typeof t == "string" && t.startsWith(e), cw = uw("--"), Bp = uw("var(--"), c3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, d3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Bn = (e, t, r) => Math.min(Math.max(r, e), t), Mo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Wa = {
  ...Mo,
  transform: (e) => Bn(0, 1, e)
}, Ol = {
  ...Mo,
  default: 1
}, Ua = (e) => Math.round(e * 1e5) / 1e5, Zc = /(-)?([\d]*\.?[\d])+/g, dw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, f3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Us(e) {
  return typeof e == "string";
}
const Hs = (e) => ({
  test: (t) => Us(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), bn = Hs("deg"), Dr = Hs("%"), H = Hs("px"), p3 = Hs("vh"), h3 = Hs("vw"), ty = {
  ...Dr,
  parse: (e) => Dr.parse(e) / 100,
  transform: (e) => Dr.transform(e * 100)
}, ry = {
  ...Mo,
  transform: Math.round
}, fw = {
  // Border props
  borderWidth: H,
  borderTopWidth: H,
  borderRightWidth: H,
  borderBottomWidth: H,
  borderLeftWidth: H,
  borderRadius: H,
  radius: H,
  borderTopLeftRadius: H,
  borderTopRightRadius: H,
  borderBottomRightRadius: H,
  borderBottomLeftRadius: H,
  // Positioning props
  width: H,
  maxWidth: H,
  height: H,
  maxHeight: H,
  size: H,
  top: H,
  right: H,
  bottom: H,
  left: H,
  // Spacing props
  padding: H,
  paddingTop: H,
  paddingRight: H,
  paddingBottom: H,
  paddingLeft: H,
  margin: H,
  marginTop: H,
  marginRight: H,
  marginBottom: H,
  marginLeft: H,
  // Transform props
  rotate: bn,
  rotateX: bn,
  rotateY: bn,
  rotateZ: bn,
  scale: Ol,
  scaleX: Ol,
  scaleY: Ol,
  scaleZ: Ol,
  skew: bn,
  skewX: bn,
  skewY: bn,
  distance: H,
  translateX: H,
  translateY: H,
  translateZ: H,
  x: H,
  y: H,
  z: H,
  perspective: H,
  transformPerspective: H,
  opacity: Wa,
  originX: ty,
  originY: ty,
  originZ: H,
  // Misc
  zIndex: ry,
  // SVG
  fillOpacity: Wa,
  strokeOpacity: Wa,
  numOctaves: ry
};
function Rm(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (cw(d)) {
      i[d] = f;
      continue;
    }
    const p = fw[d], b = d3(f, p);
    if (Ao.has(d)) {
      if (l = !0, a[d] = b, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = b) : o[d] = b;
  }
  if (t.transform || (l || n ? o.transform = u3(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Om = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function pw(e, t, r) {
  for (const n in t)
    !Rt(t[n]) && !lw(n, r) && (e[n] = t[n]);
}
function m3({ transformTemplate: e }, t, r) {
  return v.useMemo(() => {
    const n = Om();
    return Rm(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function v3(e, t, r) {
  const n = e.style || {}, o = {};
  return pw(o, n, e), Object.assign(o, m3(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function g3(e, t, r) {
  const n = {}, o = v3(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const y3 = /* @__PURE__ */ new Set([
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
function Ju(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || y3.has(e);
}
let hw = (e) => !Ju(e);
function b3(e) {
  e && (hw = (t) => t.startsWith("on") ? !Ju(t) : e(t));
}
try {
  b3(require("@emotion/is-prop-valid").default);
} catch {
}
function x3(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (hw(o) || r === !0 && Ju(o) || !t && !Ju(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function ny(e, t, r) {
  return typeof e == "string" ? e : H.transform(t + r * e);
}
function S3(e, t, r) {
  const n = ny(t, e.x, e.width), o = ny(r, e.y, e.height);
  return `${n} ${o}`;
}
const w3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, k3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function C3(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? w3 : k3;
  e[i.offset] = H.transform(-n);
  const a = H.transform(t), s = H.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Im(e, {
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
  if (Rm(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: b, dimensions: g } = e;
  p.transform && (g && (b.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || b.transform) && (b.transformOrigin = S3(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && C3(p, a, s, l, !1);
}
const mw = () => ({
  ...Om(),
  attrs: {}
}), Dm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function _3(e, t, r, n) {
  const o = v.useMemo(() => {
    const i = mw();
    return Im(i, t, { enableHardwareAcceleration: !1 }, Dm(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    pw(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function P3(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Mm(r) ? _3 : g3)(n, i, a, r), c = {
      ...x3(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = v.useMemo(() => Rt(d) ? d.get() : d, [d]);
    return v.createElement(r, {
      ...c,
      children: f
    });
  };
}
function vw(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const gw = /* @__PURE__ */ new Set([
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
function yw(e, t, r, n) {
  vw(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(gw.has(o) ? o : Tm(o), t.attrs[o]);
}
function zm(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Rt(r[o]) || t.style && Rt(t.style[o]) || lw(o, e)) && (n[o] = r[o]);
  return n;
}
function bw(e, t) {
  const r = zm(e, t);
  for (const n in e)
    if (Rt(e[n]) || Rt(t[n])) {
      const o = Ws.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Fm(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function xw(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ec = (e) => Array.isArray(e), T3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), E3 = (e) => ec(e) ? e[e.length - 1] || 0 : e;
function mu(e) {
  const t = Rt(e) ? e.get() : e;
  return T3(t) ? t.toValue() : t;
}
function $3({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: A3(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const Sw = (e) => (t, r) => {
  const n = v.useContext(Yc), o = v.useContext(Vs), i = () => $3(e, t, n, o);
  return r ? i() : xw(i);
};
function A3(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = mu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Qc(e), u = aw(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Xc(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const b = Fm(e, p);
    if (!b)
      return;
    const { transitionEnd: g, transition: x, ...m } = b;
    for (const h in m) {
      let y = m[h];
      if (Array.isArray(y)) {
        const w = c ? y.length - 1 : 0;
        y = y[w];
      }
      y !== null && (o[h] = y);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const Fe = (e) => e;
class oy {
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
function M3(e) {
  let t = new oy(), r = new oy(), n = 0, o = !1, i = !1;
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
const Il = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], R3 = 40;
function O3(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Il.reduce((d, f) => (d[f] = M3(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, R3), 1), o.timestamp = d, o.isProcessing = !0, Il.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Il.reduce((d, f) => {
    const p = i[f];
    return d[f] = (b, g = !1, x = !1) => (r || l(), p.schedule(b, g, x)), d;
  }, {}), cancel: (d) => Il.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Se, cancel: ln, state: Ye, steps: ff } = O3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fe, !0), I3 = {
  useVisualState: Sw({
    scrapeMotionValuesFromProps: bw,
    createRenderState: mw,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      Se.read(() => {
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
      }), Se.render(() => {
        Im(r, n, { enableHardwareAcceleration: !1 }, Dm(t.tagName), e.transformTemplate), yw(t, r);
      });
    }
  })
}, D3 = {
  useVisualState: Sw({
    scrapeMotionValuesFromProps: zm,
    createRenderState: Om
  })
};
function z3(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Mm(e) ? I3 : D3,
    preloadedFeatures: r,
    useRender: P3(t),
    createVisualElement: n,
    Component: e
  };
}
function Qr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const ww = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Jc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const F3 = (e) => (t) => ww(t) && e(t, Jc(t));
function en(e, t, r, n) {
  return Qr(e, t, F3(r), n);
}
const j3 = (e, t) => (r) => t(e(r)), Fn = (...e) => e.reduce(j3);
function kw(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const iy = kw("dragHorizontal"), ay = kw("dragVertical");
function Cw(e) {
  let t = !1;
  if (e === "y")
    t = ay();
  else if (e === "x")
    t = iy();
  else {
    const r = iy(), n = ay();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function _w() {
  const e = Cw(!0);
  return e ? (e(), !1) : !0;
}
class Gn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function sy(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || _w())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Se.update(() => s[n](i, a));
  };
  return en(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class N3 extends Gn {
  mount() {
    this.unmount = Fn(sy(this.node, !0), sy(this.node, !1));
  }
  unmount() {
  }
}
class L3 extends Gn {
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
    this.unmount = Fn(Qr(this.node.current, "focus", () => this.onFocus()), Qr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Pw = (e, t) => t ? e === t ? !0 : Pw(e, t.parentElement) : !1;
function pf(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Jc(r));
}
class B3 extends Gn {
  constructor() {
    super(...arguments), this.removeStartListeners = Fe, this.removeEndListeners = Fe, this.removeAccessibleListeners = Fe, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = en(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Se.update(() => {
          Pw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = en(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = Fn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || pf("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Se.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Qr(this.node.current, "keyup", a), pf("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Qr(this.node.current, "keydown", t), n = () => {
        this.isPressing && pf("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Qr(this.node.current, "blur", n);
      this.removeAccessibleListeners = Fn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Se.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !_w();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Se.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = en(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Qr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Fn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Vp = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new WeakMap(), V3 = (e) => {
  const t = Vp.get(e.target);
  t && t(e);
}, W3 = (e) => {
  e.forEach(V3);
};
function U3({ root: e, ...t }) {
  const r = e || document;
  hf.has(r) || hf.set(r, {});
  const n = hf.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(W3, { root: e, ...t })), n[o];
}
function H3(e, t, r) {
  const n = U3(t);
  return Vp.set(e, r), n.observe(e), () => {
    Vp.delete(e), n.unobserve(e);
  };
}
const G3 = {
  some: 0,
  all: 1
};
class K3 extends Gn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : G3[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return H3(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Y3(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function Y3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const q3 = {
  inView: {
    Feature: K3
  },
  tap: {
    Feature: B3
  },
  focus: {
    Feature: L3
  },
  hover: {
    Feature: N3
  }
};
function Tw(e, t) {
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
function X3(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function Q3(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function ed(e, t, r) {
  const n = e.getProps();
  return Fm(n, t, r !== void 0 ? r : n.custom, X3(e), Q3(e));
}
let Z3 = Fe, jm = Fe;
const jn = (e) => e * 1e3, tn = (e) => e / 1e3, J3 = {
  current: !1
}, Ew = (e) => Array.isArray(e) && typeof e[0] == "number";
function $w(e) {
  return !!(!e || typeof e == "string" && Aw[e] || Ew(e) || Array.isArray(e) && e.every($w));
}
const Ta = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Aw = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ta([0, 0.65, 0.55, 1]),
  circOut: Ta([0.55, 0, 1, 0.45]),
  backIn: Ta([0.31, 0.01, 0.66, -0.59]),
  backOut: Ta([0.33, 1.53, 0.69, 0.99])
};
function Mw(e) {
  if (e)
    return Ew(e) ? Ta(e) : Array.isArray(e) ? e.map(Mw) : Aw[e];
}
function e4(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = Mw(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function t4(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Rw = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, r4 = 1e-7, n4 = 12;
function o4(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Rw(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > r4 && ++s < n4);
  return a;
}
function Gs(e, t, r, n) {
  if (e === t && r === n)
    return Fe;
  const o = (i) => o4(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Rw(o(i), t, n);
}
const i4 = Gs(0.42, 0, 1, 1), a4 = Gs(0, 0, 0.58, 1), Ow = Gs(0.42, 0, 0.58, 1), s4 = (e) => Array.isArray(e) && typeof e[0] != "number", Iw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Dw = (e) => (t) => 1 - e(1 - t), zw = (e) => 1 - Math.sin(Math.acos(e)), Nm = Dw(zw), l4 = Iw(Nm), Fw = Gs(0.33, 1.53, 0.69, 0.99), Lm = Dw(Fw), u4 = Iw(Lm), c4 = (e) => (e *= 2) < 1 ? 0.5 * Lm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), d4 = {
  linear: Fe,
  easeIn: i4,
  easeInOut: Ow,
  easeOut: a4,
  circIn: zw,
  circInOut: l4,
  circOut: Nm,
  backIn: Lm,
  backInOut: u4,
  backOut: Fw,
  anticipate: c4
}, ly = (e) => {
  if (Array.isArray(e)) {
    jm(e.length === 4);
    const [t, r, n, o] = e;
    return Gs(t, r, n, o);
  } else if (typeof e == "string")
    return d4[e];
  return e;
}, Bm = (e, t) => (r) => !!(Us(r) && f3.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), jw = (e, t, r) => (n) => {
  if (!Us(n))
    return n;
  const [o, i, a, s] = n.match(Zc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, f4 = (e) => Bn(0, 255, e), mf = {
  ...Mo,
  transform: (e) => Math.round(f4(e))
}, fo = {
  test: Bm("rgb", "red"),
  parse: jw("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + mf.transform(e) + ", " + mf.transform(t) + ", " + mf.transform(r) + ", " + Ua(Wa.transform(n)) + ")"
};
function p4(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Wp = {
  test: Bm("#"),
  parse: p4,
  transform: fo.transform
}, li = {
  test: Bm("hsl", "hue"),
  parse: jw("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Dr.transform(Ua(t)) + ", " + Dr.transform(Ua(r)) + ", " + Ua(Wa.transform(n)) + ")"
}, vt = {
  test: (e) => fo.test(e) || Wp.test(e) || li.test(e),
  parse: (e) => fo.test(e) ? fo.parse(e) : li.test(e) ? li.parse(e) : Wp.parse(e),
  transform: (e) => Us(e) ? e : e.hasOwnProperty("red") ? fo.transform(e) : li.transform(e)
}, Ae = (e, t, r) => -r * e + r * t + e;
function vf(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function h4({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = vf(l, s, e + 1 / 3), i = vf(l, s, e), a = vf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const gf = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, m4 = [Wp, fo, li], v4 = (e) => m4.find((t) => t.test(e));
function uy(e) {
  const t = v4(e);
  let r = t.parse(e);
  return t === li && (r = h4(r)), r;
}
const Nw = (e, t) => {
  const r = uy(e), n = uy(t), o = { ...r };
  return (i) => (o.red = gf(r.red, n.red, i), o.green = gf(r.green, n.green, i), o.blue = gf(r.blue, n.blue, i), o.alpha = Ae(r.alpha, n.alpha, i), fo.transform(o));
};
function g4(e) {
  var t, r;
  return isNaN(e) && Us(e) && (((t = e.match(Zc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(dw)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Lw = {
  regex: c3,
  countKey: "Vars",
  token: "${v}",
  parse: Fe
}, Bw = {
  regex: dw,
  countKey: "Colors",
  token: "${c}",
  parse: vt.parse
}, Vw = {
  regex: Zc,
  countKey: "Numbers",
  token: "${n}",
  parse: Mo.parse
};
function yf(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function tc(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && yf(r, Lw), yf(r, Bw), yf(r, Vw), r;
}
function Ww(e) {
  return tc(e).values;
}
function Uw(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = tc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(Lw.token, a[l]) : l < n + r ? s = s.replace(Bw.token, vt.transform(a[l])) : s = s.replace(Vw.token, Ua(a[l]));
    return s;
  };
}
const y4 = (e) => typeof e == "number" ? 0 : e;
function b4(e) {
  const t = Ww(e);
  return Uw(e)(t.map(y4));
}
const Vn = {
  test: g4,
  parse: Ww,
  createTransformer: Uw,
  getAnimatableNone: b4
}, Hw = (e, t) => (r) => `${r > 0 ? t : e}`;
function Gw(e, t) {
  return typeof e == "number" ? (r) => Ae(e, t, r) : vt.test(e) ? Nw(e, t) : e.startsWith("var(") ? Hw(e, t) : Yw(e, t);
}
const Kw = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Gw(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, x4 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Gw(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Yw = (e, t) => {
  const r = Vn.createTransformer(t), n = tc(e), o = tc(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? Fn(Kw(n.values, o.values), r) : Hw(e, t);
}, _s = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, cy = (e, t) => (r) => Ae(e, t, r);
function S4(e) {
  return typeof e == "number" ? cy : typeof e == "string" ? vt.test(e) ? Nw : Yw : Array.isArray(e) ? Kw : typeof e == "object" ? x4 : cy;
}
function w4(e, t, r) {
  const n = [], o = r || S4(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Fe : t;
      s = Fn(l, s);
    }
    n.push(s);
  }
  return n;
}
function qw(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (jm(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = w4(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = _s(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(Bn(e[0], e[i - 1], u)) : l;
}
function k4(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = _s(0, t, n);
    e.push(Ae(r, 1, o));
  }
}
function C4(e) {
  const t = [0];
  return k4(t, e.length - 1), t;
}
function _4(e, t) {
  return e.map((r) => r * t);
}
function P4(e, t) {
  return e.map(() => t || Ow).splice(0, e.length - 1);
}
function rc({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = s4(n) ? n.map(ly) : ly(n), i = {
    done: !1,
    value: t[0]
  }, a = _4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : C4(t),
    e
  ), s = qw(a, t, {
    ease: Array.isArray(o) ? o : P4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Xw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const T4 = 5;
function Qw(e, t, r) {
  const n = Math.max(t - T4, 0);
  return Xw(r - e(n), t - n);
}
const bf = 1e-3, E4 = 0.01, dy = 10, $4 = 0.05, A4 = 1;
function M4({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  Z3(e <= jn(dy));
  let a = 1 - t;
  a = Bn($4, A4, a), e = Bn(E4, dy, tn(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Up(u, a), b = Math.exp(-d);
    return bf - f / p * b;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, b = Math.exp(-d), g = Up(Math.pow(u, 2), a);
    return (-o(u) + bf > 0 ? -1 : 1) * ((f - p) * b) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -bf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = O4(o, i, s);
  if (e = jn(e), isNaN(l))
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
const R4 = 12;
function O4(e, t, r) {
  let n = r;
  for (let o = 1; o < R4; o++)
    n = n - e(n) / t(n);
  return n;
}
function Up(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const I4 = ["duration", "bounce"], D4 = ["stiffness", "damping", "mass"];
function fy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function z4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!fy(e, D4) && fy(e, I4)) {
    const r = M4(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Zw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = z4(n), p = c ? -tn(c) : 0, b = l / (2 * Math.sqrt(s * u)), g = i - o, x = tn(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (b < 1) {
    const y = Up(x, b);
    h = (w) => {
      const k = Math.exp(-b * x * w);
      return i - k * ((p + b * x * g) / y * Math.sin(y * w) + g * Math.cos(y * w));
    };
  } else if (b === 1)
    h = (y) => i - Math.exp(-x * y) * (g + (p + x * g) * y);
  else {
    const y = x * Math.sqrt(b * b - 1);
    h = (w) => {
      const k = Math.exp(-b * x * w), P = Math.min(y * w, 300);
      return i - k * ((p + b * x * g) * Math.sinh(P) + y * g * Math.cosh(P)) / y;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (y) => {
      const w = h(y);
      if (f)
        a.done = y >= d;
      else {
        let k = p;
        y !== 0 && (b < 1 ? k = Qw(h, y, w) : k = 0);
        const P = Math.abs(k) <= r, _ = Math.abs(i - w) <= t;
        a.done = P && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function py({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, b = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let g = r * t;
  const x = d + g, m = a === void 0 ? x : a(x);
  m !== x && (g = m - d);
  const h = ($) => -g * Math.exp(-$ / n), y = ($) => m + h($), w = ($) => {
    const M = h($), R = y($);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : R;
  };
  let k, P;
  const _ = ($) => {
    p(f.value) && (k = $, P = Zw({
      keyframes: [f.value, b(f.value)],
      velocity: Qw(y, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: ($) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, w($), _($)), k !== void 0 && $ > k ? P.next($ - k) : (!M && w($), f);
    }
  };
}
const F4 = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Se.update(t, !0),
    stop: () => ln(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ye.isProcessing ? Ye.timestamp : performance.now()
  };
}, hy = 2e4;
function my(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < hy; )
    t += r, n = e.next(t);
  return t >= hy ? 1 / 0 : t;
}
const j4 = {
  decay: py,
  inertia: py,
  tween: rc,
  keyframes: rc,
  spring: Zw
};
function nc({ autoplay: e = !0, delay: t = 0, driver: r = F4, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, b = !1, g, x;
  const m = () => {
    x = new Promise((L) => {
      g = L;
    });
  };
  m();
  let h;
  const y = j4[o] || rc;
  let w;
  y !== rc && typeof n[0] != "number" && (w = qw([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const k = y({ ...f, keyframes: n });
  let P;
  s === "mirror" && (P = y({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", $ = null, M = null, R = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = my(k));
  const { calculatedDuration: z } = k;
  let X = 1 / 0, G = 1 / 0;
  z !== null && (X = z + a, G = X * (i + 1) - a);
  let K = 0;
  const q = (L) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, L)), p < 0 && (M = Math.min(L - G / p, M)), $ !== null ? K = $ : K = Math.round(L - M) * p;
    const J = K - t * (p >= 0 ? 1 : -1), B = p >= 0 ? J < 0 : J > G;
    K = Math.max(J, 0), _ === "finished" && $ === null && (K = G);
    let Q = K, ve = k;
    if (i) {
      const Oe = K / X;
      let Ze = Math.floor(Oe), Je = Oe % 1;
      !Je && Oe >= 1 && (Je = 1), Je === 1 && Ze--, Ze = Math.min(Ze, i + 1);
      const Lr = !!(Ze % 2);
      Lr && (s === "reverse" ? (Je = 1 - Je, a && (Je -= a / X)) : s === "mirror" && (ve = P));
      let Br = Bn(0, 1, Je);
      K > G && (Br = s === "reverse" && Lr ? 1 : 0), Q = Br * X;
    }
    const se = B ? { done: !1, value: n[0] } : ve.next(Q);
    w && (se.value = w(se.value));
    let { done: ye } = se;
    !B && z !== null && (ye = p >= 0 ? K >= G : K <= 0);
    const be = $ === null && (_ === "finished" || _ === "running" && ye);
    return d && d(se.value), be && D(), se;
  }, Y = () => {
    h && h.stop(), h = void 0;
  }, O = () => {
    _ = "idle", Y(), g(), m(), M = R = null;
  }, D = () => {
    _ = "finished", c && c(), Y(), g();
  }, N = () => {
    if (b)
      return;
    h || (h = r(q));
    const L = h.now();
    l && l(), $ !== null ? M = L - $ : (!M || _ === "finished") && (M = L), _ === "finished" && m(), R = M, $ = null, _ = "running", h.start();
  };
  e && N();
  const V = {
    then(L, J) {
      return x.then(L, J);
    },
    get time() {
      return tn(K);
    },
    set time(L) {
      L = jn(L), K = L, $ !== null || !h || p === 0 ? $ = L : M = h.now() - L / p;
    },
    get duration() {
      const L = k.calculatedDuration === null ? my(k) : k.calculatedDuration;
      return tn(L);
    },
    get speed() {
      return p;
    },
    set speed(L) {
      L === p || !h || (p = L, V.time = tn(K));
    },
    get state() {
      return _;
    },
    play: N,
    pause: () => {
      _ = "paused", $ = K;
    },
    stop: () => {
      b = !0, _ !== "idle" && (_ = "idle", u && u(), O());
    },
    cancel: () => {
      R !== null && q(R), O();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (L) => (M = 0, q(L))
  };
  return V;
}
function N4(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const L4 = N4(() => Object.hasOwnProperty.call(Element.prototype, "animate")), B4 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Dl = 10, V4 = 2e4, W4 = (e, t) => t.type === "spring" || e === "backgroundColor" || !$w(t.ease);
function U4(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(L4() && B4.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (W4(t, o)) {
    const h = nc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !y.done && k < V4; )
      y = h.sample(k), w.push(y.value), k += Dl;
    p = void 0, c = w, d = k - Dl, f = "linear";
  }
  const b = e4(e.owner.current, t, c, {
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
  o.syncStart && (b.startTime = Ye.isProcessing ? Ye.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => b.cancel(), x = () => {
    Se.update(g), s(), u();
  };
  return b.onfinish = () => {
    e.set(t4(c, o)), n && n(), x();
  }, {
    then(h, y) {
      return l.then(h, y);
    },
    attachTimeline(h) {
      return b.timeline = h, b.onfinish = null, Fe;
    },
    get time() {
      return tn(b.currentTime || 0);
    },
    set time(h) {
      b.currentTime = jn(h);
    },
    get speed() {
      return b.playbackRate;
    },
    set speed(h) {
      b.playbackRate = h;
    },
    get duration() {
      return tn(d);
    },
    play: () => {
      a || (b.play(), ln(g));
    },
    pause: () => b.pause(),
    stop: () => {
      if (a = !0, b.playState === "idle")
        return;
      const { currentTime: h } = b;
      if (h) {
        const y = nc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(h - Dl).value, y.sample(h).value, Dl);
      }
      x();
    },
    complete: () => b.finish(),
    cancel: x
  };
}
function H4({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
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
  return t ? nc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const G4 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, K4 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Y4 = {
  type: "keyframes",
  duration: 0.8
}, q4 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, X4 = (e, { keyframes: t }) => t.length > 2 ? Y4 : Ao.has(e) ? e.startsWith("scale") ? K4(t[1]) : G4 : q4, Hp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Vn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Q4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Z4(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Zc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = Q4.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const J4 = /([a-z-]*)\(.*?\)/g, Gp = {
  ...Vn,
  getAnimatableNone: (e) => {
    const t = e.match(J4);
    return t ? t.map(Z4).join(" ") : e;
  }
}, eF = {
  ...fw,
  // Color props
  color: vt,
  backgroundColor: vt,
  outlineColor: vt,
  fill: vt,
  stroke: vt,
  // Border props
  borderColor: vt,
  borderTopColor: vt,
  borderRightColor: vt,
  borderBottomColor: vt,
  borderLeftColor: vt,
  filter: Gp,
  WebkitFilter: Gp
}, Vm = (e) => eF[e];
function Jw(e, t) {
  let r = Vm(e);
  return r !== Gp && (r = Vn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const ek = (e) => /^0[^.\s]+$/.test(e);
function tF(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || ek(e);
}
function rF(e, t, r, n) {
  const o = Hp(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), tF(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Jw(t, s);
    }
  return i;
}
function nF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Wm(e, t) {
  return e[t] || e.default || e;
}
const Um = (e, t, r, n = {}) => (o) => {
  const i = Wm(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - jn(a);
  const l = rF(t, e, r, i), u = l[0], c = l[l.length - 1], d = Hp(e, u), f = Hp(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (b) => {
      t.set(b), i.onUpdate && i.onUpdate(b);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (nF(i) || (p = {
    ...p,
    ...X4(e, p)
  }), p.duration && (p.duration = jn(p.duration)), p.repeatDelay && (p.repeatDelay = jn(p.repeatDelay)), !d || !f || J3.current || i.type === !1)
    return H4(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const b = U4(t, e, p);
    if (b)
      return b;
  }
  return nc(p);
};
function oc(e) {
  return !!(Rt(e) && e.add);
}
const tk = (e) => /^\-?\d*\.?\d+$/.test(e);
function Hm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Km {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Hm(this.subscriptions, t), () => Gm(this.subscriptions, t);
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
const oF = (e) => !isNaN(parseFloat(e));
class iF {
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
      const { delta: i, timestamp: a } = Ye;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Se.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Se.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = oF(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new Km());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Se.read(() => {
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
      Xw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Fi(e, t) {
  return new iF(e, t);
}
const rk = (e) => (t) => t.test(e), aF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, nk = [Mo, H, Dr, bn, h3, p3, aF], pa = (e) => nk.find(rk(e)), sF = [...nk, vt, Vn], lF = (e) => sF.find(rk(e));
function uF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Fi(r));
}
function cF(e, t) {
  const r = ed(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = E3(i[a]);
    uF(e, a, s);
  }
}
function dF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (tk(c) || ek(c)) ? c = parseFloat(c) : !lF(c) && Vn.test(u) && (c = Jw(l, u)), e.addValue(l, Fi(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function fF(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function pF(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = fF(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function hF({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function ok(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && hF(c, d))
      continue;
    const b = {
      delay: r,
      elapsed: 0,
      ...Wm(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[iw];
      h && (g = !1, b.elapsed = window.HandoffAppearAnimations(h, d, f, Se), b.syncStart = !0);
    }
    let x = g && p === f.get();
    if (b.type === "spring" && (f.getVelocity() || b.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(Um(d, f, p, e.shouldReduceMotion && Ao.has(d) ? { type: !1 } : b));
    const m = f.animation;
    oc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && cF(e, a);
  }), u;
}
function Kp(e, t, r = {}) {
  const n = ed(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(ok(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return mF(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function mF(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(vF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Kp(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function vF(e, t) {
  return e.sortNodePosition(t);
}
function gF(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Kp(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Kp(e, t, r);
  else {
    const o = typeof t == "function" ? ed(e, t, r.custom) : t;
    n = Promise.all(ok(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const yF = [...Em].reverse(), bF = Em.length;
function xF(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => gF(e, r, n)));
}
function SF(e) {
  let t = xF(e);
  const r = kF();
  let n = !0;
  const o = (l, u) => {
    const c = ed(e, u);
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
    let b = {}, g = 1 / 0;
    for (let m = 0; m < bF; m++) {
      const h = yF[m], y = r[h], w = c[h] !== void 0 ? c[h] : d[h], k = ks(w), P = h === u ? y.isActive : null;
      P === !1 && (g = m);
      let _ = w === d[h] && w !== c[h] && k;
      if (_ && n && e.manuallyAnimateOnMount && (_ = !1), y.protectedKeys = { ...b }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !w && !y.prevProp || // Or if the prop doesn't define an animation
      Xc(w) || typeof w == "boolean")
        continue;
      const $ = wF(y.prevProp, w);
      let M = $ || // If we're making this variant active, we want to always make it active
      h === u && y.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      m > g && k;
      const R = Array.isArray(w) ? w : [w];
      let z = R.reduce(o, {});
      P === !1 && (z = {});
      const { prevResolvedValues: X = {} } = y, G = {
        ...X,
        ...z
      }, K = (q) => {
        M = !0, p.delete(q), y.needsAnimating[q] = !0;
      };
      for (const q in G) {
        const Y = z[q], O = X[q];
        b.hasOwnProperty(q) || (Y !== O ? ec(Y) && ec(O) ? !Tw(Y, O) || $ ? K(q) : y.protectedKeys[q] = !0 : Y !== void 0 ? K(q) : p.add(q) : Y !== void 0 && p.has(q) ? K(q) : y.protectedKeys[q] = !0);
      }
      y.prevProp = w, y.prevResolvedValues = z, y.isActive && (b = { ...b, ...z }), n && e.blockInitialAnimation && (M = !1), M && !_ && f.push(...R.map((q) => ({
        animation: q,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const y = e.getBaseTarget(h);
        y !== void 0 && (m[h] = y);
      }), f.push({ animation: m });
    }
    let x = !!f.length;
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), n = !1, x ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var b;
      return (b = p.animationState) === null || b === void 0 ? void 0 : b.setActive(l, u);
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
function wF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Tw(t, e) : !1;
}
function Zn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function kF() {
  return {
    animate: Zn(!0),
    whileInView: Zn(),
    whileHover: Zn(),
    whileTap: Zn(),
    whileDrag: Zn(),
    whileFocus: Zn(),
    exit: Zn()
  };
}
class CF extends Gn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = SF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Xc(t) && (this.unmount = t.subscribe(this.node));
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
let _F = 0;
class PF extends Gn {
  constructor() {
    super(...arguments), this.id = _F++;
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
const TF = {
  animation: {
    Feature: CF
  },
  exit: {
    Feature: PF
  }
}, vy = (e, t) => Math.abs(e - t);
function EF(e, t) {
  const r = vy(e.x, t.x), n = vy(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class ik {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Sf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = EF(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: b } = Ye;
      this.history.push({ ...p, timestamp: b });
      const { onStart: g, onMove: x } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = xf(d, this.transformPagePoint), Se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, b = Sf(c.type === "pointercancel" ? this.lastMoveEventInfo : xf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, b), p && p(c, b);
    }, !ww(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = Jc(t), a = xf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ye;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, Sf(a, this.history)), this.removeListeners = Fn(en(this.contextWindow, "pointermove", this.handlePointerMove), en(this.contextWindow, "pointerup", this.handlePointerUp), en(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ln(this.updatePoint);
  }
}
function xf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Sf({ point: e }, t) {
  return {
    point: e,
    delta: gy(e, ak(t)),
    offset: gy(e, $F(t)),
    velocity: AF(t, 0.1)
  };
}
function $F(e) {
  return e[0];
}
function ak(e) {
  return e[e.length - 1];
}
function AF(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = ak(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > jn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = tn(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Bt(e) {
  return e.max - e.min;
}
function Yp(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function yy(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Ae(t.min, t.max, e.origin), e.scale = Bt(r) / Bt(t), (Yp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ae(r.min, r.max, e.origin) - e.originPoint, (Yp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ha(e, t, r, n) {
  yy(e.x, t.x, r.x, n ? n.originX : void 0), yy(e.y, t.y, r.y, n ? n.originY : void 0);
}
function by(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Bt(t);
}
function MF(e, t, r) {
  by(e.x, t.x, r.x), by(e.y, t.y, r.y);
}
function xy(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Bt(t);
}
function Ga(e, t, r) {
  xy(e.x, t.x, r.x), xy(e.y, t.y, r.y);
}
function RF(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Ae(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Ae(r, e, n.max) : Math.min(e, r)), e;
}
function Sy(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function OF(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Sy(e.x, r, o),
    y: Sy(e.y, t, n)
  };
}
function wy(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function IF(e, t) {
  return {
    x: wy(e.x, t.x),
    y: wy(e.y, t.y)
  };
}
function DF(e, t) {
  let r = 0.5;
  const n = Bt(e), o = Bt(t);
  return o > n ? r = _s(t.min, t.max - n, e.min) : n > o && (r = _s(e.min, e.max - o, t.min)), Bn(0, 1, r);
}
function zF(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const qp = 0.35;
function FF(e = qp) {
  return e === !1 ? e = 0 : e === !0 && (e = qp), {
    x: ky(e, "left", "right"),
    y: ky(e, "top", "bottom")
  };
}
function ky(e, t, r) {
  return {
    min: Cy(e, t),
    max: Cy(e, r)
  };
}
function Cy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _y = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ui = () => ({
  x: _y(),
  y: _y()
}), Py = () => ({ min: 0, max: 0 }), Be = () => ({
  x: Py(),
  y: Py()
});
function kr(e) {
  return [e("x"), e("y")];
}
function sk({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function jF({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NF(e, t) {
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
function wf(e) {
  return e === void 0 || e === 1;
}
function Xp({ scale: e, scaleX: t, scaleY: r }) {
  return !wf(e) || !wf(t) || !wf(r);
}
function ro(e) {
  return Xp(e) || lk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function lk(e) {
  return Ty(e.x) || Ty(e.y);
}
function Ty(e) {
  return e && e !== "0%";
}
function ic(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Ey(e, t, r, n, o) {
  return o !== void 0 && (e = ic(e, o, n)), ic(e, r, n) + t;
}
function Qp(e, t = 0, r = 1, n, o) {
  e.min = Ey(e.min, t, r, n, o), e.max = Ey(e.max, t, r, n, o);
}
function uk(e, { x: t, y: r }) {
  Qp(e.x, t.translate, t.scale, t.originPoint), Qp(e.y, r.translate, r.scale, r.originPoint);
}
function LF(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && ci(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, uk(e, a)), n && ro(i.latestValues) && ci(e, i.latestValues));
  }
  t.x = $y(t.x), t.y = $y(t.y);
}
function $y(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function wn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ay(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Ae(e.min, e.max, i);
  Qp(e, t[r], t[n], a, t.scale);
}
const BF = ["x", "scaleX", "originX"], VF = ["y", "scaleY", "originY"];
function ci(e, t) {
  Ay(e.x, t, BF), Ay(e.y, t, VF);
}
function ck(e, t) {
  return sk(NF(e.getBoundingClientRect(), t));
}
function WF(e, t, r) {
  const n = ck(e, r), { scroll: o } = t;
  return o && (wn(n.x, o.offset.x), wn(n.y, o.offset.y)), n;
}
const dk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, UF = /* @__PURE__ */ new WeakMap();
class HF {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Be(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Jc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Cw(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), kr((b) => {
        let g = this.getAxisMotionValue(b).get() || 0;
        if (Dr.test(g)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[b];
            m && (g = Bt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[b] = g;
      }), f && Se.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: b } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = GF(b), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, b), this.updateAxis("y", u.point, b), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new ik(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: dk(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Se.update(() => i(t, r));
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
    if (!n || !zl(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = RF(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && si(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = OF(o.layoutBox, r) : this.constraints = !1, this.elastic = FF(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && kr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = zF(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !si(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = WF(n, o.root, this.visualElement.getTransformPagePoint());
    let a = IF(o.layout.layoutBox, i);
    if (r) {
      const s = r(jF(a));
      this.hasMutatedConstraints = !!s, s && (a = sk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = kr((c) => {
      if (!zl(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, b = {
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
      return this.startAxisValueAnimation(c, b);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Um(t, n, 0, r));
  }
  stopAnimation() {
    kr((t) => this.getAxisMotionValue(t).stop());
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
    kr((r) => {
      const { drag: n } = this.getProps();
      if (!zl(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - Ae(a, s, 0.5));
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
    if (!si(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    kr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = DF({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), kr((a) => {
      if (!zl(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Ae(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    UF.set(this.visualElement, this);
    const t = this.visualElement.current, r = en(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      si(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Qr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (kr((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = qp, dragMomentum: s = !0 } = t;
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
function zl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function GF(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class KF extends Gn {
  constructor(t) {
    super(t), this.removeGroupControls = Fe, this.removeListeners = Fe, this.controls = new HF(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Fe;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const My = (e) => (t, r) => {
  e && Se.update(() => e(t, r));
};
class YF extends Gn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Fe;
  }
  onPointerDown(t) {
    this.session = new ik(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: dk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: My(t),
      onStart: My(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && Se.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = en(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function fk() {
  const e = v.useContext(Vs);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = v.useId();
  return v.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function qF() {
  return XF(v.useContext(Vs));
}
function XF(e) {
  return e === null ? !0 : e.isPresent;
}
const vu = {
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
function Ry(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ha = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (H.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Ry(e, t.target.x), n = Ry(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, QF = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Vn.parse(e);
    if (o.length > 5)
      return n;
    const i = Vn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Ae(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class ZF extends xo.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    a3(JF), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), vu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Se.postRender(() => {
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
function pk(e) {
  const [t, r] = fk(), n = v.useContext(Am);
  return xo.createElement(ZF, { ...e, layoutGroup: n, switchLayoutGroup: v.useContext(sw), isPresent: t, safeToRemove: r });
}
const JF = {
  borderRadius: {
    ...ha,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ha,
  borderTopRightRadius: ha,
  borderBottomLeftRadius: ha,
  borderBottomRightRadius: ha,
  boxShadow: QF
}, hk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ej = hk.length, Oy = (e) => typeof e == "string" ? parseFloat(e) : e, Iy = (e) => typeof e == "number" || H.test(e);
function tj(e, t, r, n, o, i) {
  o ? (e.opacity = Ae(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    rj(n)
  ), e.opacityExit = Ae(t.opacity !== void 0 ? t.opacity : 1, 0, nj(n))) : i && (e.opacity = Ae(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < ej; a++) {
    const s = `border${hk[a]}Radius`;
    let l = Dy(t, s), u = Dy(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Iy(l) === Iy(u) ? (e[s] = Math.max(Ae(Oy(l), Oy(u), n), 0), (Dr.test(u) || Dr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = Ae(t.rotate || 0, r.rotate || 0, n));
}
function Dy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const rj = mk(0, 0.5, Nm), nj = mk(0.5, 0.95, Fe);
function mk(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(_s(e, t, n));
}
function zy(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  zy(e.x, t.x), zy(e.y, t.y);
}
function Fy(e, t, r, n, o) {
  return e -= t, e = ic(e, 1 / r, n), o !== void 0 && (e = ic(e, 1 / o, n)), e;
}
function oj(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Dr.test(t) && (t = parseFloat(t), t = Ae(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Ae(i.min, i.max, n);
  e === i && (s -= t), e.min = Fy(e.min, t, r, s, o), e.max = Fy(e.max, t, r, s, o);
}
function jy(e, t, [r, n, o], i, a) {
  oj(e, t[r], t[n], t[o], t.scale, i, a);
}
const ij = ["x", "scaleX", "originX"], aj = ["y", "scaleY", "originY"];
function Ny(e, t, r, n) {
  jy(e.x, t, ij, r ? r.x : void 0, n ? n.x : void 0), jy(e.y, t, aj, r ? r.y : void 0, n ? n.y : void 0);
}
function Ly(e) {
  return e.translate === 0 && e.scale === 1;
}
function vk(e) {
  return Ly(e.x) && Ly(e.y);
}
function sj(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function gk(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function By(e) {
  return Bt(e.x) / Bt(e.y);
}
class lj {
  constructor() {
    this.members = [];
  }
  add(t) {
    Hm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Gm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Vy(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const uj = (e, t) => e.depth - t.depth;
class cj {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Hm(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(uj), this.isDirty = !1, this.children.forEach(t);
  }
}
function dj(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (ln(n), e(i - t));
  };
  return Se.read(n, !0), () => ln(n);
}
function fj(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function pj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function hj(e, t, r) {
  const n = Rt(e) ? e : Fi(e);
  return n.start(Um("", n, t, r)), n.animation;
}
const Wy = ["", "X", "Y", "Z"], mj = { visibility: "hidden" }, Uy = 1e3;
let vj = 0;
const no = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function yk({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = vj++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, no.totalNodes = no.resolvedTargetDeltas = no.recalculatedProjection = 0, this.nodes.forEach(bj), this.nodes.forEach(Cj), this.nodes.forEach(_j), this.nodes.forEach(xj), fj(no);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cj());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Km()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = pj(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = dj(f, 250), vu.hasAnimatedSinceResize && (vu.hasAnimatedSinceResize = !1, this.nodes.forEach(Gy));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: b }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || Aj, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !gk(this.targetLayout, b) || p, y = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, y);
          const w = {
            ...Wm(g, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Gy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = b;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ln(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Pj), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hy);
        return;
      }
      this.isUpdating || this.nodes.forEach(wj), this.isUpdating = !1, this.nodes.forEach(kj), this.nodes.forEach(gj), this.nodes.forEach(yj), this.clearAllSnapshots();
      const s = performance.now();
      Ye.delta = Bn(0, 1e3 / 60, s - Ye.timestamp), Ye.timestamp = s, Ye.isProcessing = !0, ff.update.process(Ye), ff.preRender.process(Ye), ff.render.process(Ye), Ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Sj), this.sharedNodes.forEach(Tj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !vk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || ro(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), Mj(l), {
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
      return l && (wn(s.x, l.offset.x), wn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Be();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            qt(s, a);
            const { scroll: f } = this.root;
            f && (wn(s.x, -f.offset.x), wn(s.y, -f.offset.y));
          }
          wn(s.x, c.offset.x), wn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Be();
      qt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && ci(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ro(c.latestValues) && ci(l, c.latestValues);
      }
      return ro(this.latestValues) && ci(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Be();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ro(u.latestValues))
          continue;
        Xp(u.latestValues) && u.updateSnapshot();
        const c = Be(), d = u.measurePageBox();
        qt(c, d), Ny(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ro(this.latestValues) && Ny(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ye.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Be(), this.relativeTargetOrigin = Be(), Ga(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Be(), this.targetWithTransforms = Be()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), MF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), uk(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Be(), this.relativeTargetOrigin = Be(), Ga(this.relativeTargetOrigin, this.target, p.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          no.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Xp(this.parent.latestValues) || lk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ye.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      LF(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: b } = s;
      if (!b) {
        this.projectionTransform && (this.projectionDelta = ui(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = ui(), this.projectionDeltaWithTransform = ui());
      const g = this.projectionTransform;
      Ha(this.projectionDelta, this.layoutCorrected, b, this.latestValues), this.projectionTransform = Vy(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), no.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Be(), p = l ? l.source : void 0, b = this.layout ? this.layout.source : void 0, g = p !== b, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some($j));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        Ky(d.x, a.x, k), Ky(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ga(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ej(this.relativeTarget, this.relativeTargetOrigin, f, k), y && sj(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Be()), qt(y, this.relativeTarget)), g && (this.animationValues = c, tj(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ln(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Se.update(() => {
        vu.hasAnimatedSinceResize = !0, this.currentAnimation = hj(0, Uy, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Uy), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && bk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Be();
          const d = Bt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Bt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        qt(s, l), ci(s, c), Ha(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new lj()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < Wy.length; c++) {
        const d = "rotate" + Wy[c];
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
        return mj;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = mu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = mu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ro(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Vy(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: b } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${b.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in Zu) {
        if (f[g] === void 0)
          continue;
        const { correct: x, applyTo: m } = Zu[g], h = u.transform === "none" ? f[g] : x(f[g], d);
        if (m) {
          const y = m.length;
          for (let w = 0; w < y; w++)
            u[m[w]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? mu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Hy), this.root.sharedNodes.clear();
    }
  };
}
function gj(e) {
  e.updateLayout();
}
function yj(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? kr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Bt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : bk(i, r.layoutBox, n) && kr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Bt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = ui();
    Ha(s, n, r.layoutBox);
    const l = ui();
    a ? Ha(l, e.applyTransform(o, !0), r.measuredBox) : Ha(l, n, r.layoutBox);
    const u = !vk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const b = Be();
          Ga(b, r.layoutBox, f.layoutBox);
          const g = Be();
          Ga(g, n, p.layoutBox), gk(b, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = b, e.relativeParent = d);
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
function bj(e) {
  no.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function xj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Sj(e) {
  e.clearSnapshot();
}
function Hy(e) {
  e.clearMeasurements();
}
function wj(e) {
  e.isLayoutDirty = !1;
}
function kj(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Gy(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Cj(e) {
  e.resolveTargetDelta();
}
function _j(e) {
  e.calcProjection();
}
function Pj(e) {
  e.resetRotation();
}
function Tj(e) {
  e.removeLeadSnapshot();
}
function Ky(e, t, r) {
  e.translate = Ae(t.translate, 0, r), e.scale = Ae(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Yy(e, t, r, n) {
  e.min = Ae(t.min, r.min, n), e.max = Ae(t.max, r.max, n);
}
function Ej(e, t, r, n) {
  Yy(e.x, t.x, r.x, n), Yy(e.y, t.y, r.y, n);
}
function $j(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Aj = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qy = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Xy = qy("applewebkit/") && !qy("chrome/") ? Math.round : Fe;
function Qy(e) {
  e.min = Xy(e.min), e.max = Xy(e.max);
}
function Mj(e) {
  Qy(e.x), Qy(e.y);
}
function bk(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Yp(By(t), By(r), 0.2);
}
const Rj = yk({
  attachResizeListener: (e, t) => Qr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), kf = {
  current: void 0
}, xk = yk({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!kf.current) {
      const e = new Rj({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), kf.current = e;
    }
    return kf.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Oj = {
  pan: {
    Feature: YF
  },
  drag: {
    Feature: KF,
    ProjectionNode: xk,
    MeasureLayout: pk
  }
}, Ij = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Dj(e) {
  const t = Ij.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Zp(e, t, r = 1) {
  const [n, o] = Dj(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return tk(a) ? parseFloat(a) : a;
  } else
    return Bp(o) ? Zp(o, t, r + 1) : o;
}
function zj(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Bp(i))
      return;
    const a = Zp(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Bp(i))
      continue;
    const a = Zp(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const Fj = /* @__PURE__ */ new Set([
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
]), Sk = (e) => Fj.has(e), jj = (e) => Object.keys(e).some(Sk), Zy = (e) => e === Mo || e === H, Jy = (e, t) => parseFloat(e.split(", ")[t]), e1 = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Jy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Jy(i[1], e) : 0;
  }
}, Nj = /* @__PURE__ */ new Set(["x", "y", "z"]), Lj = Ws.filter((e) => !Nj.has(e));
function Bj(e) {
  const t = [];
  return Lj.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ji = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: e1(4, 13),
  y: e1(5, 14)
};
ji.translateX = ji.x;
ji.translateY = ji.y;
const Vj = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = ji[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ji[u](l, i);
  }), e;
}, Wj = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Sk);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = pa(c);
    const f = t[l];
    let p;
    if (ec(f)) {
      const b = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = pa(c);
      for (let x = g; x < b && f[x] !== null; x++)
        p ? jm(pa(f[x]) === p) : p = pa(f[x]);
    } else
      p = pa(f);
    if (d !== p)
      if (Zy(d) && Zy(p)) {
        const b = u.get();
        typeof b == "string" && u.set(parseFloat(b)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === H && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = Bj(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = Vj(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), qc && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function Uj(e, t, r, n) {
  return jj(t) ? Wj(e, t, r, n) : { target: t, transitionEnd: n };
}
const Hj = (e, t, r, n) => {
  const o = zj(e, t, n);
  return t = o.target, n = o.transitionEnd, Uj(e, t, r, n);
}, Jp = { current: null }, wk = { current: !1 };
function Gj() {
  if (wk.current = !0, !!qc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Jp.current = e.matches;
      e.addListener(t), t();
    } else
      Jp.current = !1;
}
function Kj(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (Rt(i))
      e.addValue(o, i), oc(n) && n.add(o);
    else if (Rt(a))
      e.addValue(o, Fi(i, { owner: e })), oc(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Fi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const t1 = /* @__PURE__ */ new WeakMap(), kk = Object.keys(Cs), Yj = kk.length, r1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], qj = $m.length;
class Xj {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Se.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Qc(r), this.isVariantNode = aw(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Rt(f) && (f.set(s[d], !1), oc(u) && u.add(d));
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
    this.current = t, t1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), wk.current || Gj(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Jp.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    t1.delete(this.current), this.projection && this.projection.unmount(), ln(this.notifyUpdate), ln(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ao.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Se.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < Yj; l++) {
      const u = kk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Cs[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && si(d),
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
    for (let n = 0; n < r1.length; n++) {
      const o = r1[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = Kj(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < qj; n++) {
      const o = $m[n], i = this.props[o];
      (ks(i) || i === !1) && (r[o] = i);
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
    return n === void 0 && r !== void 0 && (n = Fi(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Fm(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Rt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Km()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Ck extends Xj {
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
    let a = pF(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      dF(this, n, a);
      const s = Hj(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function Qj(e) {
  return window.getComputedStyle(e);
}
class Zj extends Ck {
  readValueFromInstance(t, r) {
    if (Ao.has(r)) {
      const n = Vm(r);
      return n && n.default || 0;
    } else {
      const n = Qj(t), o = (cw(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return ck(t, r);
  }
  build(t, r, n, o) {
    Rm(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return zm(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Rt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    vw(t, r, n, o);
  }
}
class Jj extends Ck {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ao.has(r)) {
      const n = Vm(r);
      return n && n.default || 0;
    }
    return r = gw.has(r) ? r : Tm(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Be();
  }
  scrapeMotionValuesFromProps(t, r) {
    return bw(t, r);
  }
  build(t, r, n, o) {
    Im(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    yw(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Dm(t.tagName), super.mount(t);
  }
}
const eN = (e, t) => Mm(e) ? new Jj(t, { enableHardwareAcceleration: !1 }) : new Zj(t, { enableHardwareAcceleration: !0 }), tN = {
  layout: {
    ProjectionNode: xk,
    MeasureLayout: pk
  }
}, rN = {
  ...TF,
  ...q3,
  ...Oj,
  ...tN
}, Yi = /* @__PURE__ */ o3((e, t) => z3(e, t, rN, eN));
function _k() {
  const e = v.useRef(!1);
  return Pm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function nN() {
  const e = _k(), [t, r] = v.useState(0), n = v.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [v.useCallback(() => Se.postRender(n), [n]), t];
}
class oN extends v.Component {
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
function iN({ children: e, isPresent: t }) {
  const r = v.useId(), n = v.useRef(null), o = v.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return v.useInsertionEffect(() => {
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
  }, [t]), v.createElement(oN, { isPresent: t, childRef: n, sizeRef: o }, v.cloneElement(e, { ref: n }));
}
const Cf = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = xw(aN), l = v.useId(), u = v.useMemo(
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
  return v.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [r]), v.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), a === "popLayout" && (e = v.createElement(iN, { isPresent: r }, e)), v.createElement(Vs.Provider, { value: u }, e);
};
function aN() {
  return /* @__PURE__ */ new Map();
}
function sN(e) {
  return v.useEffect(() => () => e(), []);
}
const oo = (e) => e.key || "";
function lN(e, t) {
  e.forEach((r) => {
    const n = oo(r);
    t.set(n, r);
  });
}
function uN(e) {
  const t = [];
  return v.Children.forEach(e, (r) => {
    v.isValidElement(r) && t.push(r);
  }), t;
}
const td = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Am).forceRender || nN()[0], l = _k(), u = uN(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, b = v.useRef(!0);
  if (Pm(() => {
    b.current = !1, lN(u, p), f.current = c;
  }), sN(() => {
    b.current = !0, p.clear(), d.clear();
  }), b.current)
    return v.createElement(v.Fragment, null, c.map((h) => v.createElement(Cf, { key: oo(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(oo), x = u.map(oo), m = g.length;
  for (let h = 0; h < m; h++) {
    const y = g[h];
    x.indexOf(y) === -1 && !d.has(y) && d.set(y, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, y) => {
    if (x.indexOf(y) !== -1)
      return;
    const w = p.get(y);
    if (!w)
      return;
    const k = g.indexOf(y);
    let P = h;
    if (!P) {
      const _ = () => {
        d.delete(y);
        const $ = Array.from(p.keys()).filter((M) => !x.includes(M));
        if ($.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const R = oo(M);
          return (
            // filter out the node exiting
            R === y || // filter out the leftover children
            $.includes(R)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      P = v.createElement(Cf, { key: oo(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(y, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((h) => {
    const y = h.key;
    return d.has(y) ? h : v.createElement(Cf, { key: oo(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((h) => v.cloneElement(h)));
};
var cN = {
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
}, Pk = v.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = cN,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = qF();
  zi(() => {
    p || n == null || n();
  }, [p]), zi(() => {
    f(s);
  }, [s]);
  const b = () => f(null), g = () => f(s), x = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), Yz(x, d);
  const m = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = v.useMemo(() => Gz(a), [a]);
  return /* @__PURE__ */ C.jsx(
    Yi.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: b,
      onHoverEnd: g,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ C.jsx(
        Z.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Ar(r, { id: t, onClose: x })
        }
      )
    }
  );
});
Pk.displayName = "ToastComponent";
var n1 = {
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
}, Ks = ae((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = fe("chakra-icon", s), d = Bs("Icon", e), f = {
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
  }, b = n ?? n1.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ C.jsx(Z.svg, { as: r, ...p, ...u });
  const g = a ?? n1.path;
  return /* @__PURE__ */ C.jsx(Z.svg, { verticalAlign: "middle", viewBox: b, ...p, ...u, children: g });
});
Ks.displayName = "Icon";
function dN(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function fN(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function o1(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var pN = s$({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ym = ae((e, t) => {
  const r = Bs("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = dn(e), u = fe("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${pN} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ C.jsx(
    Z.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ C.jsx(Z.span, { srOnly: !0, children: n })
    }
  );
});
Ym.displayName = "Spinner";
var [hN, qm] = mt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [mN, Xm] = mt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Tk = {
  info: { icon: fN, colorScheme: "blue" },
  warning: { icon: o1, colorScheme: "orange" },
  success: { icon: dN, colorScheme: "green" },
  error: { icon: o1, colorScheme: "red" },
  loading: { icon: Ym, colorScheme: "blue" }
};
function vN(e) {
  return Tk[e].colorScheme;
}
function gN(e) {
  return Tk[e].icon;
}
var Ek = ae(
  function(t, r) {
    const n = Xm(), { status: o } = qm(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: fe("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Ek.displayName = "AlertDescription";
function $k(e) {
  const { status: t } = qm(), r = gN(t), n = Xm(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ C.jsx(
    Z.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: fe("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ C.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
$k.displayName = "AlertIcon";
var Ak = ae(
  function(t, r) {
    const n = Xm(), { status: o } = qm();
    return /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: fe("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Ak.displayName = "AlertTitle";
var Mk = ae(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = dn(t), s = (n = t.colorScheme) != null ? n : vN(o), l = Ki("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ C.jsx(hN, { value: { status: o }, children: /* @__PURE__ */ C.jsx(mN, { value: l, children: /* @__PURE__ */ C.jsx(
    Z.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: fe("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
Mk.displayName = "Alert";
function yN(e) {
  return /* @__PURE__ */ C.jsx(Ks, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var rd = ae(
  function(t, r) {
    const n = Bs("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = dn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ C.jsx(
      Z.button,
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
        children: o || /* @__PURE__ */ C.jsx(yN, { width: "1em", height: "1em" })
      }
    );
  }
);
rd.displayName = "CloseButton";
var bN = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Ka = xN(bN);
function xN(e) {
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
      const a = SN(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Z0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: kN(i)
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
        const a = rw(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Z0(Ka.getState(), o).position
  };
}
var i1 = 0;
function SN(e, t = {}) {
  var r, n;
  i1 += 1;
  const o = (r = t.id) != null ? r : i1, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ka.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var wN = (e) => {
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
    Mk,
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
        /* @__PURE__ */ C.jsx($k, { children: u }),
        /* @__PURE__ */ C.jsxs(Z.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ C.jsx(Ak, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ C.jsx(Ek, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ C.jsx(
          rd,
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
function kN(e = {}) {
  const { render: t, toastComponent: r = wN } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ C.jsx(r, { ...o, ...e });
}
var [CN, i9] = mt({
  name: "ToastOptionsContext",
  strict: !1
}), _N = (e) => {
  const t = v.useSyncExternalStore(
    Ka.subscribe,
    Ka.getState,
    Ka.getState
  ), {
    motionVariants: r,
    component: n = Pk,
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
        style: Kz(s),
        children: /* @__PURE__ */ C.jsx(td, { initial: !1, children: l.map((u) => /* @__PURE__ */ C.jsx(
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
  return /* @__PURE__ */ C.jsx(js, { ...o, children: a });
}, PN = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ C.jsxs(Uz, { theme: n, ...i, children: [
    /* @__PURE__ */ C.jsx(CN, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ C.jsx(_N, { ...o })
  ] });
}, TN = PN(KS), EN = Object.defineProperty, $N = (e, t, r) => t in e ? EN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ie = (e, t, r) => ($N(e, typeof t != "symbol" ? t + "" : t, r), r);
function a1(e) {
  return e.sort((t, r) => {
    const n = t.compareDocumentPosition(r);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var AN = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function s1(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function l1(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var eh = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ac = (e) => e, MN = class {
  constructor() {
    Ie(this, "descendants", /* @__PURE__ */ new Map()), Ie(this, "register", (e) => {
      if (e != null)
        return AN(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Ie(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = a1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Ie(this, "destroy", () => {
      this.descendants.clear();
    }), Ie(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), Ie(this, "count", () => this.descendants.size), Ie(this, "enabledCount", () => this.enabledValues().length), Ie(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), Ie(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Ie(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Ie(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Ie(this, "first", () => this.item(0)), Ie(this, "firstEnabled", () => this.enabledItem(0)), Ie(this, "last", () => this.item(this.descendants.size - 1)), Ie(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Ie(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), Ie(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Ie(this, "next", (e, t = !0) => {
      const r = s1(e, this.count(), t);
      return this.item(r);
    }), Ie(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = s1(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Ie(this, "prev", (e, t = !0) => {
      const r = l1(e, this.count() - 1, t);
      return this.item(r);
    }), Ie(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = l1(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Ie(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = a1(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function RN(e, t) {
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
function ot(...e) {
  return (t) => {
    e.forEach((r) => {
      RN(r, t);
    });
  };
}
function ON(...e) {
  return v.useMemo(() => ot(...e), e);
}
function IN() {
  const e = v.useRef(new MN());
  return eh(() => () => e.current.destroy()), e.current;
}
var [DN, Rk] = mt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function zN(e) {
  const t = Rk(), [r, n] = v.useState(-1), o = v.useRef(null);
  eh(() => () => {
    o.current && t.unregister(o.current);
  }, []), eh(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = ac(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: ot(i, o)
  };
}
function FN() {
  return [
    ac(DN),
    () => ac(Rk()),
    () => IN(),
    (o) => zN(o)
  ];
}
var th = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, ma = {
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
function rh(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return ma.slideRight;
    case "left":
      return ma.slideLeft;
    case "bottom":
      return ma.slideDown;
    case "top":
      return ma.slideUp;
    default:
      return ma.slideRight;
  }
}
var u1 = {
  enter: {
    duration: 0.2,
    ease: th.easeOut
  },
  exit: {
    duration: 0.1,
    ease: th.easeIn
  }
}, sc = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, jN = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : sc.enter(u1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : sc.exit(u1.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Ok = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: jN
}, NN = v.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ C.jsx(td, { custom: f, children: d && /* @__PURE__ */ C.jsx(
    Yi.div,
    {
      ref: r,
      className: fe("chakra-fade", i),
      custom: f,
      ...Ok,
      animate: c,
      ...u
    }
  ) });
});
NN.displayName = "Fade";
var c1 = {
  exit: {
    duration: 0.15,
    ease: th.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, LN = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = rh({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : sc.exit(c1.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = rh({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : sc.enter(c1.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Ik = v.forwardRef(function(t, r) {
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
  } = t, p = rh({ direction: n }), b = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ C.jsx(td, { custom: m, children: g && /* @__PURE__ */ C.jsx(
    Yi.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: fe("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: LN,
      style: b,
      ...d
    }
  ) });
});
Ik.displayName = "Slide";
function BN(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [a9, VN] = mt({
  strict: !1,
  name: "ButtonGroupContext"
});
function WN(e) {
  const [t, r] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function nh(e) {
  const { children: t, className: r, ...n } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = fe("chakra-button__icon", r);
  return /* @__PURE__ */ C.jsx(
    Z.span,
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
nh.displayName = "ButtonIcon";
function oh(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ C.jsx(Ym, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = fe("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
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
  return /* @__PURE__ */ C.jsx(Z.div, { className: l, ...s, __css: c, children: o });
}
oh.displayName = "ButtonSpinner";
var zr = ae((e, t) => {
  const r = VN(), n = Bs("Button", { ...r, ...e }), {
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
    spinnerPlacement: b = "start",
    className: g,
    as: x,
    ...m
  } = dn(e), h = v.useMemo(() => {
    const P = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: P }
    };
  }, [n, r]), { ref: y, type: w } = WN(x), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ C.jsxs(
    Z.button,
    {
      ref: ON(t, y),
      as: x,
      type: f ?? w,
      "data-active": Qt(a),
      "data-loading": Qt(i),
      __css: h,
      className: fe("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && b === "start" && /* @__PURE__ */ C.jsx(
          oh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ C.jsx(Z.span, { opacity: 0, children: /* @__PURE__ */ C.jsx(d1, { ...k }) }) : /* @__PURE__ */ C.jsx(d1, { ...k }),
        i && b === "end" && /* @__PURE__ */ C.jsx(
          oh,
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
zr.displayName = "Button";
function d1(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    t && /* @__PURE__ */ C.jsx(nh, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ C.jsx(nh, { marginStart: o, children: r })
  ] });
}
var Dk = ae(
  (e, t) => {
    const { icon: r, children: n, isRound: o, "aria-label": i, ...a } = e, s = r || n, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ C.jsx(
      zr,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": i,
        ...a,
        children: l
      }
    );
  }
);
Dk.displayName = "IconButton";
var [UN, HN] = mt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [GN, zk] = mt({
  strict: !1,
  name: "FormControlContext"
});
function KN(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [b, g] = v.useState(!1), [x, m] = v.useState(!1), h = v.useCallback(
    (_ = {}, $ = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: ot($, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), y = v.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ref: $,
      "data-focus": Qt(x),
      "data-disabled": Qt(o),
      "data-invalid": Qt(n),
      "data-readonly": Qt(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, x, n, i, u]
  ), w = v.useCallback(
    (_ = {}, $ = null) => ({
      id: c,
      ..._,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: ot($, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = v.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ...a,
      ref: $,
      role: "group",
      "data-focus": Qt(x),
      "data-disabled": Qt(o),
      "data-invalid": Qt(n),
      "data-readonly": Qt(i)
    }),
    [a, o, x, n, i]
  ), P = v.useCallback(
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
    isFocused: !!x,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: b,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: y,
    getRequiredIndicatorProps: P
  };
}
var YN = ae(
  function(t, r) {
    const n = Ki("Form", t), o = dn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = KN(o), l = fe("chakra-form-control", t.className);
    return /* @__PURE__ */ C.jsx(GN, { value: s, children: /* @__PURE__ */ C.jsx(UN, { value: n, children: /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
YN.displayName = "FormControl";
var qN = ae(
  function(t, r) {
    const n = zk(), o = HN(), i = fe("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
qN.displayName = "FormHelperText";
function XN(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = QN(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Gd(r),
    "aria-required": Gd(o),
    "aria-readonly": Gd(n)
  };
}
function QN(e) {
  var t, r, n;
  const o = zk(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: b,
    ...g
  } = e, x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), {
    ...g,
    "aria-describedby": x.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Ve(o == null ? void 0 : o.onFocus, p),
    onBlur: Ve(o == null ? void 0 : o.onBlur, b)
  };
}
function Qm(e, t, r, n) {
  const o = ws(r);
  return v.useEffect(() => {
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
function ZN(e) {
  return "current" in e;
}
var Fk = () => typeof window < "u";
function JN() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var eL = (e) => Fk() && e.test(navigator.vendor), tL = (e) => Fk() && e.test(JN()), rL = () => tL(/mac|iphone|ipad|ipod/i), nL = () => rL() && eL(/apple/i);
function oL(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Qm(o, "pointerdown", (i) => {
    if (!nL() || !n)
      return;
    const a = i.target, l = (r ?? [t]).some((u) => {
      const c = ZN(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function iL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var jk = { exports: {} }, aL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", sL = aL, lL = sL;
function Nk() {
}
function Lk() {
}
Lk.resetWarningCache = Nk;
var uL = function() {
  function e(n, o, i, a, s, l) {
    if (l !== lL) {
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
    checkPropTypes: Lk,
    resetWarningCache: Nk
  };
  return r.PropTypes = r, r;
};
jk.exports = uL();
var cL = jk.exports;
const Jn = /* @__PURE__ */ Ms(cL);
var ih = "data-focus-lock", Bk = "data-focus-lock-disabled", dL = "data-no-focus-lock", fL = "data-autofocus-inside", pL = "data-no-autofocus";
function hL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function mL(e, t) {
  var r = v.useState(function() {
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
function Vk(e, t) {
  return mL(t || null, function(r) {
    return e.forEach(function(n) {
      return hL(n, r);
    });
  });
}
var _f = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Er = function() {
  return Er = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Er.apply(this, arguments);
};
function Wk(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function vL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Uk(e) {
  return e;
}
function Hk(e, t) {
  t === void 0 && (t = Uk);
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
function Zm(e, t) {
  return t === void 0 && (t = Uk), Hk(e, t);
}
function Gk(e) {
  e === void 0 && (e = {});
  var t = Hk(null);
  return t.options = Er({ async: !0, ssr: !1 }, e), t;
}
var Kk = function(e) {
  var t = e.sideCar, r = Wk(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return v.createElement(n, Er({}, r));
};
Kk.isSideCarExport = !0;
function gL(e, t) {
  return e.useMedium(t), Kk;
}
var Yk = Zm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), qk = Zm(), yL = Zm(), bL = Gk({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), xL = [], Jm = /* @__PURE__ */ v.forwardRef(function(t, r) {
  var n, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, b = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, y = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? xL : w, P = t.as, _ = P === void 0 ? "div" : P, $ = t.lockProps, M = $ === void 0 ? {} : $, R = t.sideCar, z = t.returnFocus, X = t.focusOptions, G = t.onActivation, K = t.onDeactivation, q = v.useState({}), Y = q[0], O = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && G && G(s.current), l.current = !0;
  }, [G]), D = v.useCallback(function() {
    l.current = !1, K && K(s.current);
  }, [K]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var N = v.useCallback(function(ye) {
    var be = u.current;
    if (be && be.focus) {
      var Oe = typeof z == "function" ? z(be) : z;
      if (Oe) {
        var Ze = typeof Oe == "object" ? Oe : void 0;
        u.current = null, ye ? Promise.resolve().then(function() {
          return be.focus(Ze);
        }) : be.focus(Ze);
      }
    }
  }, [z]), V = v.useCallback(function(ye) {
    l.current && Yk.useMedium(ye);
  }, []), L = qk.useMedium, J = v.useCallback(function(ye) {
    s.current !== ye && (s.current = ye, a(ye));
  }, []), B = Po((n = {}, n[Bk] = d && "disabled", n[ih] = x, n), M), Q = f !== !0, ve = Q && f !== "tail", se = Vk([r, J]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, Q && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: _f
    }),
    // first tabbed element guard
    y ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: _f
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(R, {
    id: Y,
    sideCar: bL,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: b,
    autoFocus: g,
    whiteList: h,
    shards: k,
    onActivation: O,
    onDeactivation: D,
    returnFocus: N,
    focusOptions: X
  }), /* @__PURE__ */ v.createElement(_, Po({
    ref: se
  }, B, {
    className: m,
    onBlur: L,
    onFocus: V
  }), c), ve && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: _f
  }));
});
Jm.propTypes = {};
Jm.defaultProps = {
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
const Xk = Jm;
function ah(e, t) {
  return ah = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ah(e, t);
}
function SL(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ah(e, t);
}
function Ps(e) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ps(e);
}
function wL(e, t) {
  if (Ps(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ps(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kL(e) {
  var t = wL(e, "string");
  return Ps(t) === "symbol" ? t : String(t);
}
function CL(e, t, r) {
  return t = kL(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _L(e, t) {
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
      SL(c, u);
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
        return /* @__PURE__ */ xo.createElement(o, this.props);
      }, c;
    }(v.PureComponent);
    return CL(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Nr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, lc = function(e) {
  return Array.isArray(e) ? e : [e];
}, Qk = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, PL = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Zk = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Jk = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, TL = function(e, t) {
  return !e || Jk(e) || !PL(e) && t(Zk(e));
}, eC = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = TL(t, eC.bind(void 0, e));
  return e.set(t, n), n;
}, EL = function(e, t) {
  return e && !Jk(e) ? ML(e) ? t(Zk(e)) : !1 : !0;
}, tC = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = EL(t, tC.bind(void 0, e));
  return e.set(t, n), n;
}, rC = function(e) {
  return e.dataset;
}, $L = function(e) {
  return e.tagName === "BUTTON";
}, nC = function(e) {
  return e.tagName === "INPUT";
}, oC = function(e) {
  return nC(e) && e.type === "radio";
}, AL = function(e) {
  return !((nC(e) || $L(e)) && (e.type === "hidden" || e.disabled));
}, ML = function(e) {
  var t = e.getAttribute(pL);
  return ![!0, "true", ""].includes(t);
}, ev = function(e) {
  var t;
  return !!(e && (!((t = rC(e)) === null || t === void 0) && t.focusGuard));
}, uc = function(e) {
  return !ev(e);
}, RL = function(e) {
  return !!e;
}, OL = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, iC = function(e, t, r) {
  return Nr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(OL);
}, IL = [
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
], tv = IL.join(","), DL = "".concat(tv, ", [data-focus-guard]"), aC = function(e, t) {
  return Nr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? DL : tv) ? [n] : [], aC(n));
  }, []);
}, zL = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? nd([e.contentDocument.body], t) : [e];
}, nd = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = aC(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return zL(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? Nr(n.parentNode.querySelectorAll(tv)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, FL = function(e) {
  var t = e.querySelectorAll("[".concat(fL, "]"));
  return Nr(t).map(function(r) {
    return nd([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, rv = function(e, t) {
  return Nr(e).filter(function(r) {
    return eC(t, r);
  }).filter(function(r) {
    return AL(r);
  });
}, f1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Nr(e).filter(function(r) {
    return tC(t, r);
  });
}, sh = function(e, t, r) {
  return iC(rv(nd(e, r), t), !0, r);
}, p1 = function(e, t) {
  return iC(rv(nd(e), t), !1);
}, jL = function(e, t) {
  return rv(FL(e), t);
}, ki = function(e, t) {
  return e.shadowRoot ? ki(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Nr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? ki(o, t) : !1;
    }
    return ki(r, t);
  });
}, NL = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, sC = function(e) {
  return e.parentNode ? sC(e.parentNode) : e;
}, nv = function(e) {
  var t = lc(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(ih);
    return r.push.apply(r, o ? NL(Nr(sC(n).querySelectorAll("[".concat(ih, '="').concat(o, '"]:not([').concat(Bk, '="disabled"])')))) : [n]), r;
  }, []);
}, LL = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ts = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ts(t.shadowRoot) : t instanceof HTMLIFrameElement && LL(function() {
      return t.contentWindow.document;
    }) ? Ts(t.contentWindow.document) : t;
  }
}, BL = function(e, t) {
  return e === t;
}, VL = function(e, t) {
  return !!Nr(e.querySelectorAll("iframe")).some(function(r) {
    return BL(r, t);
  });
}, lC = function(e, t) {
  return t === void 0 && (t = Ts(Qk(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : nv(e).some(function(r) {
    return ki(r, t) || VL(r, t);
  });
}, WL = function(e) {
  e === void 0 && (e = document);
  var t = Ts(e);
  return t ? Nr(e.querySelectorAll("[".concat(dL, "]"))).some(function(r) {
    return ki(r, t);
  }) : !1;
}, UL = function(e, t) {
  return t.filter(oC).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, ov = function(e, t) {
  return oC(e) && e.name ? UL(e, t) : e;
}, HL = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(ov(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, h1 = function(e) {
  return e[0] && e.length > 1 ? ov(e[0], e) : e[0];
}, m1 = function(e, t) {
  return e.length > 1 ? e.indexOf(ov(e[t], e)) : t;
}, uC = "NEW_FOCUS", GL = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = ev(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), b = HL(t), g = r !== void 0 ? b.indexOf(r) : -1, x = g - (n ? b.indexOf(n) : l), m = m1(e, 0), h = m1(e, o - 1);
    if (l === -1 || c === -1)
      return uC;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(x) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, KL = function(e) {
  return function(t) {
    var r, n = (r = rC(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, YL = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = f1(n.filter(KL(r)));
  return o && o.length ? h1(o) : h1(f1(t));
}, lh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && lh(e.parentNode.host || e.parentNode, t), t;
}, Pf = function(e, t) {
  for (var r = lh(e), n = lh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, cC = function(e, t, r) {
  var n = lc(e), o = lc(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Pf(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Pf(i, l);
      u && (!a || ki(u, a) ? a = u : a = Pf(u, a));
    });
  }), a;
}, qL = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(jL(n, t));
  }, []);
}, XL = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(RL);
}, QL = function(e, t) {
  var r = Ts(lc(e).length > 0 ? document : Qk(e).ownerDocument), n = nv(e).filter(uc), o = cC(r || e, e, n), i = /* @__PURE__ */ new Map(), a = p1(n, i), s = sh(n, i).filter(function(p) {
    var b = p.node;
    return uc(b);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = p1([o], i).map(function(p) {
      var b = p.node;
      return b;
    }), u = XL(l, s), c = u.map(function(p) {
      var b = p.node;
      return b;
    }), d = GL(c, l, r, t);
    if (d === uC) {
      var f = YL(a, c, qL(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, ZL = function(e) {
  var t = nv(e).filter(uc), r = cC(e, e, t), n = /* @__PURE__ */ new Map(), o = sh([r], n, !0), i = sh(t, n).filter(function(a) {
    var s = a.node;
    return uc(s);
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
      guard: ev(s)
    };
  });
}, JL = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Tf = 0, Ef = !1, dC = function(e, t, r) {
  r === void 0 && (r = {});
  var n = QL(e, t);
  if (!Ef && n) {
    if (Tf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ef = !0, setTimeout(function() {
        Ef = !1;
      }, 1);
      return;
    }
    Tf++, JL(n.node, r.focusOptions), Tf--;
  }
};
function iv(e) {
  setTimeout(e, 1);
}
var eB = function() {
  return document && document.activeElement === document.body;
}, tB = function() {
  return eB() || WL();
}, Ci = null, di = null, _i = null, Es = !1, rB = function() {
  return !0;
}, nB = function(t) {
  return (Ci.whiteList || rB)(t);
}, oB = function(t, r) {
  _i = {
    observerNode: t,
    portaledElement: r
  };
}, iB = function(t) {
  return _i && _i.portaledElement === t;
};
function v1(e, t, r, n) {
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
var aB = function(t) {
  return t && "current" in t ? t.current : t;
}, sB = function(t) {
  return t ? !!Es : Es === "meanwhile";
}, lB = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, uB = function(t, r) {
  return r.some(function(n) {
    return lB(t, n, n);
  });
}, cc = function() {
  var t = !1;
  if (Ci) {
    var r = Ci, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || _i && _i.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(aB).filter(Boolean));
      if ((!c || nB(c)) && (o || sB(s) || !tB() || !di && i) && (u && !// active element is "inside" working area
      (lC(d) || // check for shadow-dom contained elements
      c && uB(c, d) || iB(c)) && (document && !di && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = dC(d, di, {
        focusOptions: l
      }), _i = {})), Es = !1, di = document && document.activeElement), document) {
        var f = document && document.activeElement, p = ZL(d), b = p.map(function(g) {
          var x = g.node;
          return x;
        }).indexOf(f);
        b > -1 && (p.filter(function(g) {
          var x = g.guard, m = g.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var x = g.node;
          return x.removeAttribute("tabIndex");
        }), v1(b, p.length, 1, p), v1(b, -1, -1, p));
      }
    }
  }
  return t;
}, fC = function(t) {
  cc() && t && (t.stopPropagation(), t.preventDefault());
}, av = function() {
  return iv(cc);
}, cB = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || oB(n, r);
}, dB = function() {
  return null;
}, pC = function() {
  Es = "just", iv(function() {
    Es = "meanwhile";
  });
}, fB = function() {
  document.addEventListener("focusin", fC), document.addEventListener("focusout", av), window.addEventListener("blur", pC);
}, pB = function() {
  document.removeEventListener("focusin", fC), document.removeEventListener("focusout", av), window.removeEventListener("blur", pC);
};
function hB(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function mB(e) {
  var t = e.slice(-1)[0];
  t && !Ci && fB();
  var r = Ci, n = r && t && t.id === r.id;
  Ci = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (di = null, (!n || r.observed !== t.observed) && t.onActivation(), cc(), iv(cc)) : (pB(), di = null);
}
Yk.assignSyncMedium(cB);
qk.assignMedium(av);
yL.assignMedium(function(e) {
  return e({
    moveFocusInside: dC,
    focusInside: lC
  });
});
const vB = _L(hB, mB)(dB);
var hC = /* @__PURE__ */ v.forwardRef(function(t, r) {
  return /* @__PURE__ */ v.createElement(Xk, Po({
    sideCar: vB,
    ref: r
  }, t));
}), mC = Xk.propTypes || {};
mC.sideCar;
iL(mC, ["sideCar"]);
hC.propTypes = {};
const g1 = hC;
function vC(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function gC(e) {
  var t;
  if (!vC(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function gB(e) {
  var t, r;
  return (r = (t = yC(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function yC(e) {
  return vC(e) ? e.ownerDocument : document;
}
function yB(e) {
  return yC(e).activeElement;
}
var bC = (e) => e.hasAttribute("tabindex"), bB = (e) => bC(e) && e.tabIndex === -1;
function xB(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function xC(e) {
  return e.parentElement && xC(e.parentElement) ? !0 : e.hidden;
}
function SB(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function SC(e) {
  if (!gC(e) || xC(e) || xB(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : SB(e) ? !0 : bC(e);
}
function wB(e) {
  return e ? gC(e) && SC(e) && !bB(e) : !1;
}
var kB = [
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
], CB = kB.join(), _B = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function wC(e) {
  const t = Array.from(
    e.querySelectorAll(CB)
  );
  return t.unshift(e), t.filter((r) => SC(r) && _B(r));
}
var y1, PB = (y1 = g1.default) != null ? y1 : g1, kC = (e) => {
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
  } = e, c = v.useCallback(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && wC(n.current).length === 0 && requestAnimationFrame(() => {
      var b;
      (b = n.current) == null || b.focus();
    });
  }, [t, n]), d = v.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ C.jsx(
    PB,
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
kC.displayName = "FocusLock";
var od = ae(function(t, r) {
  const { htmlSize: n, ...o } = t, i = Ki("Input", o), a = dn(o), s = XN(a), l = fe("chakra-input", t.className);
  return /* @__PURE__ */ C.jsx(
    Z.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
od.displayName = "Input";
od.id = "Input";
function TB(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : nr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var po = ae(function(t, r) {
  const n = Bs("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = dn(t), u = $z({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ C.jsx(
    Z.p,
    {
      ref: r,
      className: fe("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
po.displayName = "Text";
var CC = (e) => /* @__PURE__ */ C.jsx(
  Z.div,
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
CC.displayName = "StackItem";
function EB(e) {
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
    "&": TB(
      r,
      (o) => n[o]
    )
  };
}
var _C = ae((e, t) => {
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
  } = e, p = r ? "row" : n ?? "column", b = v.useMemo(
    () => EB({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, x = !d && !g, m = v.useMemo(() => {
    const y = BN(l);
    return x ? y : y.map((w, k) => {
      const P = typeof w.key < "u" ? w.key : k, _ = k + 1 === y.length, M = d ? /* @__PURE__ */ C.jsx(CC, { children: w }, P) : w;
      if (!g)
        return M;
      const R = v.cloneElement(
        u,
        {
          __css: b
        }
      ), z = _ ? null : R;
      return /* @__PURE__ */ C.jsxs(v.Fragment, { children: [
        M,
        z
      ] }, P);
    });
  }, [
    u,
    b,
    g,
    x,
    d,
    l
  ]), h = fe("chakra-stack", c);
  return /* @__PURE__ */ C.jsx(
    Z.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: g ? void 0 : a,
      className: h,
      ...f,
      children: m
    }
  );
});
_C.displayName = "Stack";
var $r = ae((e, t) => /* @__PURE__ */ C.jsx(_C, { align: "center", ...e, direction: "row", ref: t }));
$r.displayName = "HStack";
var id = Z("div");
id.displayName = "Box";
var PC = ae(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ C.jsx(
    id,
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
PC.displayName = "Square";
var $B = ae(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ C.jsx(PC, { size: n, ref: r, borderRadius: "9999px", ...o });
});
$B.displayName = "Circle";
function AB(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function MB(e = {}) {
  const { timeout: t = 300, preventDefault: r = () => !0 } = e, [n, o] = v.useState([]), i = v.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  v.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...n];
        d.pop(), o(d);
        return;
      }
      if (AB(c)) {
        const d = n.concat(c.key);
        r(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function RB(e, t, r, n) {
  if (t == null)
    return n;
  if (!n)
    return e.find(
      (a) => r(a).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (i) => r(i).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let i;
    return o.includes(n) ? (i = o.indexOf(n) + 1, i === o.length && (i = 0), o[i]) : (i = e.indexOf(o[0]), e[i]);
  }
  return n;
}
function OB() {
  const e = v.useRef(/* @__PURE__ */ new Map()), t = e.current, r = v.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), n = v.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return v.useEffect(
    () => () => {
      t.forEach((o, i) => {
        n(o.el, o.type, i, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
function $f(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function IB(e = {}) {
  const {
    ref: t,
    isDisabled: r,
    isFocusable: n,
    clickOnEnter: o = !0,
    clickOnSpace: i = !0,
    onMouseDown: a,
    onMouseUp: s,
    onClick: l,
    onKeyDown: u,
    onKeyUp: c,
    tabIndex: d,
    onMouseOver: f,
    onMouseLeave: p,
    ...b
  } = e, [g, x] = v.useState(!0), [m, h] = v.useState(!1), y = OB(), w = (O) => {
    O && O.tagName !== "BUTTON" && x(!1);
  }, k = g ? d : d || 0, P = r && !n, _ = v.useCallback(
    (O) => {
      if (r) {
        O.stopPropagation(), O.preventDefault();
        return;
      }
      O.currentTarget.focus(), l == null || l(O);
    },
    [r, l]
  ), $ = v.useCallback(
    (O) => {
      m && $f(O) && (O.preventDefault(), O.stopPropagation(), h(!1), y.remove(document, "keyup", $, !1));
    },
    [m, y]
  ), M = v.useCallback(
    (O) => {
      if (u == null || u(O), r || O.defaultPrevented || O.metaKey || !$f(O.nativeEvent) || g)
        return;
      const D = o && O.key === "Enter";
      i && O.key === " " && (O.preventDefault(), h(!0)), D && (O.preventDefault(), O.currentTarget.click()), y.add(document, "keyup", $, !1);
    },
    [
      r,
      g,
      u,
      o,
      i,
      y,
      $
    ]
  ), R = v.useCallback(
    (O) => {
      if (c == null || c(O), r || O.defaultPrevented || O.metaKey || !$f(O.nativeEvent) || g)
        return;
      i && O.key === " " && (O.preventDefault(), h(!1), O.currentTarget.click());
    },
    [i, g, r, c]
  ), z = v.useCallback(
    (O) => {
      O.button === 0 && (h(!1), y.remove(document, "mouseup", z, !1));
    },
    [y]
  ), X = v.useCallback(
    (O) => {
      if (O.button !== 0)
        return;
      if (r) {
        O.stopPropagation(), O.preventDefault();
        return;
      }
      g || h(!0), O.currentTarget.focus({ preventScroll: !0 }), y.add(document, "mouseup", z, !1), a == null || a(O);
    },
    [r, g, a, y, z]
  ), G = v.useCallback(
    (O) => {
      O.button === 0 && (g || h(!1), s == null || s(O));
    },
    [s, g]
  ), K = v.useCallback(
    (O) => {
      if (r) {
        O.preventDefault();
        return;
      }
      f == null || f(O);
    },
    [r, f]
  ), q = v.useCallback(
    (O) => {
      m && (O.preventDefault(), h(!1)), p == null || p(O);
    },
    [m, p]
  ), Y = ot(t, w);
  return g ? {
    ...b,
    ref: Y,
    type: "button",
    "aria-disabled": P ? void 0 : r,
    disabled: P,
    onClick: _,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...b,
    ref: Y,
    role: "button",
    "data-active": Qt(m),
    "aria-disabled": r ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: _,
    onMouseDown: X,
    onMouseUp: G,
    onKeyUp: R,
    onKeyDown: M,
    onMouseOver: K,
    onMouseLeave: q
  };
}
function DB(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = yB(t);
  return !r || t.contains(r) ? !1 : !!wB(r);
}
function TC(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  zi(() => {
    if (!i || DB(e))
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
var zB = {
  preventScroll: !0,
  shouldFocus: !1
};
function FB(e, t = zB) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, a = jB(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  gs(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = v.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = wC(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, a, r]);
  zi(() => {
    c();
  }, [c]), Qm(a, "transitionend", c);
}
function jB(e) {
  return "current" in e;
}
var jo = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), pt = {
  arrowShadowColor: jo("--popper-arrow-shadow-color"),
  arrowSize: jo("--popper-arrow-size", "8px"),
  arrowSizeHalf: jo("--popper-arrow-size-half"),
  arrowBg: jo("--popper-arrow-bg"),
  transformOrigin: jo("--popper-transform-origin"),
  arrowOffset: jo("--popper-arrow-offset")
};
function NB(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var LB = {
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
}, BB = (e) => LB[e], b1 = {
  scroll: !0,
  resize: !0
};
function VB(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...b1, ...e }
  } : t = {
    enabled: e,
    options: b1
  }, t;
}
var WB = {
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
}, UB = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    x1(e);
  },
  effect: ({ state: e }) => () => {
    x1(e);
  }
}, x1 = (e) => {
  e.elements.popper.style.setProperty(
    pt.transformOrigin.var,
    BB(e.placement)
  );
}, HB = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    GB(e);
  }
}, GB = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = KB(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: pt.arrowSize.varRef,
      height: pt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [pt.arrowSizeHalf.var]: `calc(${pt.arrowSize.varRef} / 2 - 1px)`,
      [pt.arrowOffset.var]: `calc(${pt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, KB = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: pt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: pt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: pt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: pt.arrowOffset.varRef };
}, YB = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    S1(e);
  },
  effect: ({ state: e }) => () => {
    S1(e);
  }
}, S1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = NB(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: pt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, qB = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, XB = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function QB(e, t = "ltr") {
  var r, n;
  const o = ((r = qB[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = XB[e]) != null ? n : o;
}
var $t = "top", sr = "bottom", lr = "right", At = "left", sv = "auto", Ys = [$t, sr, lr, At], Ni = "start", $s = "end", ZB = "clippingParents", EC = "viewport", va = "popper", JB = "reference", w1 = /* @__PURE__ */ Ys.reduce(function(e, t) {
  return e.concat([t + "-" + Ni, t + "-" + $s]);
}, []), $C = /* @__PURE__ */ [].concat(Ys, [sv]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ni, t + "-" + $s]);
}, []), e6 = "beforeRead", t6 = "read", r6 = "afterRead", n6 = "beforeMain", o6 = "main", i6 = "afterMain", a6 = "beforeWrite", s6 = "write", l6 = "afterWrite", u6 = [e6, t6, r6, n6, o6, i6, a6, s6, l6];
function jr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function To(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function or(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function lv(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function c6(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !or(i) || !jr(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function d6(e) {
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
      !or(o) || !jr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const f6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: c6,
  effect: d6,
  requires: ["computeStyles"]
};
function Fr(e) {
  return e.split("-")[0];
}
var bo = Math.max, dc = Math.min, Li = Math.round;
function uh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function AC() {
  return !/^((?!chrome|android).)*safari/i.test(uh());
}
function Bi(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && or(e) && (o = e.offsetWidth > 0 && Li(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Li(n.height) / e.offsetHeight || 1);
  var a = To(e) ? Vt(e) : window, s = a.visualViewport, l = !AC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
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
function uv(e) {
  var t = Bi(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function MC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && lv(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function un(e) {
  return Vt(e).getComputedStyle(e);
}
function p6(e) {
  return ["table", "td", "th"].indexOf(jr(e)) >= 0;
}
function Kn(e) {
  return ((To(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ad(e) {
  return jr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (lv(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Kn(e)
  );
}
function k1(e) {
  return !or(e) || // https://github.com/popperjs/popper-core/issues/837
  un(e).position === "fixed" ? null : e.offsetParent;
}
function h6(e) {
  var t = /firefox/i.test(uh()), r = /Trident/i.test(uh());
  if (r && or(e)) {
    var n = un(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ad(e);
  for (lv(o) && (o = o.host); or(o) && ["html", "body"].indexOf(jr(o)) < 0; ) {
    var i = un(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function qs(e) {
  for (var t = Vt(e), r = k1(e); r && p6(r) && un(r).position === "static"; )
    r = k1(r);
  return r && (jr(r) === "html" || jr(r) === "body" && un(r).position === "static") ? t : r || h6(e) || t;
}
function cv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ya(e, t, r) {
  return bo(e, dc(t, r));
}
function m6(e, t, r) {
  var n = Ya(e, t, r);
  return n > r ? r : n;
}
function RC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function OC(e) {
  return Object.assign({}, RC(), e);
}
function IC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var v6 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, OC(typeof t != "number" ? t : IC(t, Ys));
};
function g6(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Fr(r.placement), l = cv(s), u = [At, lr].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = v6(o.padding, r), f = uv(i), p = l === "y" ? $t : At, b = l === "y" ? sr : lr, g = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], x = a[l] - r.rects.reference[l], m = qs(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = g / 2 - x / 2, w = d[p], k = h - f[c] - d[b], P = h / 2 - f[c] / 2 + y, _ = Ya(w, P, k), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = _, t.centerOffset = _ - P, t);
  }
}
function y6(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || MC(t.elements.popper, o) && (t.elements.arrow = o));
}
const b6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: g6,
  effect: y6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vi(e) {
  return e.split("-")[1];
}
var x6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function S6(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Li(r * o) / o || 0,
    y: Li(n * o) / o || 0
  };
}
function C1(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, b = a.y, g = b === void 0 ? 0 : b, x = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = x.x, g = x.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), y = At, w = $t, k = window;
  if (u) {
    var P = qs(r), _ = "clientHeight", $ = "clientWidth";
    if (P === Vt(r) && (P = Kn(r), un(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", $ = "scrollWidth")), P = P, o === $t || (o === At || o === lr) && i === $s) {
      w = sr;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      g -= M - n.height, g *= l ? 1 : -1;
    }
    if (o === At || (o === $t || o === sr) && i === $s) {
      y = lr;
      var R = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[$]
      );
      p -= R - n.width, p *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: s
  }, u && x6), X = c === !0 ? S6({
    x: p,
    y: g
  }, Vt(r)) : {
    x: p,
    y: g
  };
  if (p = X.x, g = X.y, l) {
    var G;
    return Object.assign({}, z, (G = {}, G[w] = h ? "0" : "", G[y] = m ? "0" : "", G.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, z, (t = {}, t[w] = h ? g + "px" : "", t[y] = m ? p + "px" : "", t.transform = "", t));
}
function w6(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Fr(t.placement),
    variation: Vi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, C1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, C1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const k6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: w6,
  data: {}
};
var Fl = {
  passive: !0
};
function C6(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Fl);
  }), s && l.addEventListener("resize", r.update, Fl), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Fl);
    }), s && l.removeEventListener("resize", r.update, Fl);
  };
}
const _6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: C6,
  data: {}
};
var P6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return P6[t];
  });
}
var T6 = {
  start: "end",
  end: "start"
};
function _1(e) {
  return e.replace(/start|end/g, function(t) {
    return T6[t];
  });
}
function dv(e) {
  var t = Vt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function fv(e) {
  return Bi(Kn(e)).left + dv(e).scrollLeft;
}
function E6(e, t) {
  var r = Vt(e), n = Kn(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = AC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + fv(e),
    y: l
  };
}
function $6(e) {
  var t, r = Kn(e), n = dv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = bo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = bo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + fv(e), l = -n.scrollTop;
  return un(o || r).direction === "rtl" && (s += bo(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function pv(e) {
  var t = un(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function DC(e) {
  return ["html", "body", "#document"].indexOf(jr(e)) >= 0 ? e.ownerDocument.body : or(e) && pv(e) ? e : DC(ad(e));
}
function qa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = DC(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Vt(n), a = o ? [i].concat(i.visualViewport || [], pv(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(qa(ad(a)))
  );
}
function ch(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function A6(e, t) {
  var r = Bi(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function P1(e, t, r) {
  return t === EC ? ch(E6(e, r)) : To(t) ? A6(t, r) : ch($6(Kn(e)));
}
function M6(e) {
  var t = qa(ad(e)), r = ["absolute", "fixed"].indexOf(un(e).position) >= 0, n = r && or(e) ? qs(e) : e;
  return To(n) ? t.filter(function(o) {
    return To(o) && MC(o, n) && jr(o) !== "body";
  }) : [];
}
function R6(e, t, r, n) {
  var o = t === "clippingParents" ? M6(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, u) {
    var c = P1(e, u, n);
    return l.top = bo(c.top, l.top), l.right = dc(c.right, l.right), l.bottom = dc(c.bottom, l.bottom), l.left = bo(c.left, l.left), l;
  }, P1(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function zC(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Fr(n) : null, i = n ? Vi(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case $t:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case sr:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case lr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case At:
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
  var u = o ? cv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ni:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case $s:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function As(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? ZB : s, u = r.rootBoundary, c = u === void 0 ? EC : u, d = r.elementContext, f = d === void 0 ? va : d, p = r.altBoundary, b = p === void 0 ? !1 : p, g = r.padding, x = g === void 0 ? 0 : g, m = OC(typeof x != "number" ? x : IC(x, Ys)), h = f === va ? JB : va, y = e.rects.popper, w = e.elements[b ? h : f], k = R6(To(w) ? w : w.contextElement || Kn(e.elements.popper), l, c, a), P = Bi(e.elements.reference), _ = zC({
    reference: P,
    element: y,
    strategy: "absolute",
    placement: o
  }), $ = ch(Object.assign({}, y, _)), M = f === va ? $ : P, R = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, z = e.modifiersData.offset;
  if (f === va && z) {
    var X = z[o];
    Object.keys(R).forEach(function(G) {
      var K = [lr, sr].indexOf(G) >= 0 ? 1 : -1, q = [$t, sr].indexOf(G) >= 0 ? "y" : "x";
      R[G] += X[q] * K;
    });
  }
  return R;
}
function O6(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? $C : l, c = Vi(n), d = c ? s ? w1 : w1.filter(function(b) {
    return Vi(b) === c;
  }) : Ys, f = d.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(b, g) {
    return b[g] = As(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Fr(g)], b;
  }, {});
  return Object.keys(p).sort(function(b, g) {
    return p[b] - p[g];
  });
}
function I6(e) {
  if (Fr(e) === sv)
    return [];
  var t = gu(e);
  return [_1(e), t, _1(t)];
}
function D6(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, b = p === void 0 ? !0 : p, g = r.allowedAutoPlacements, x = t.options.placement, m = Fr(x), h = m === x, y = l || (h || !b ? [gu(x)] : I6(x)), w = [x].concat(y).reduce(function(Q, ve) {
      return Q.concat(Fr(ve) === sv ? O6(t, {
        placement: ve,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : ve);
    }, []), k = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), $ = !0, M = w[0], R = 0; R < w.length; R++) {
      var z = w[R], X = Fr(z), G = Vi(z) === Ni, K = [$t, sr].indexOf(X) >= 0, q = K ? "width" : "height", Y = As(t, {
        placement: z,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), O = K ? G ? lr : At : G ? sr : $t;
      k[q] > P[q] && (O = gu(O));
      var D = gu(O), N = [];
      if (i && N.push(Y[X] <= 0), s && N.push(Y[O] <= 0, Y[D] <= 0), N.every(function(Q) {
        return Q;
      })) {
        M = z, $ = !1;
        break;
      }
      _.set(z, N);
    }
    if ($)
      for (var V = b ? 3 : 1, L = function(ve) {
        var se = w.find(function(ye) {
          var be = _.get(ye);
          if (be)
            return be.slice(0, ve).every(function(Oe) {
              return Oe;
            });
        });
        if (se)
          return M = se, "break";
      }, J = V; J > 0; J--) {
        var B = L(J);
        if (B === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[n]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const z6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: D6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function T1(e, t, r) {
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
function E1(e) {
  return [$t, lr, sr, At].some(function(t) {
    return e[t] >= 0;
  });
}
function F6(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = As(t, {
    elementContext: "reference"
  }), s = As(t, {
    altBoundary: !0
  }), l = T1(a, n), u = T1(s, o, i), c = E1(l), d = E1(u);
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
const j6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: F6
};
function N6(e, t, r) {
  var n = Fr(e), o = [At, $t].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [At, lr].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function L6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = $C.reduce(function(c, d) {
    return c[d] = N6(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const B6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: L6
};
function V6(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = zC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const W6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: V6,
  data: {}
};
function U6(e) {
  return e === "x" ? "y" : "x";
}
function H6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, b = r.tetherOffset, g = b === void 0 ? 0 : b, x = As(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Fr(t.placement), h = Vi(t.placement), y = !h, w = cv(m), k = U6(w), P = t.modifiersData.popperOffsets, _ = t.rects.reference, $ = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, R = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var G, K = w === "y" ? $t : At, q = w === "y" ? sr : lr, Y = w === "y" ? "height" : "width", O = P[w], D = O + x[K], N = O - x[q], V = p ? -$[Y] / 2 : 0, L = h === Ni ? _[Y] : $[Y], J = h === Ni ? -$[Y] : -_[Y], B = t.elements.arrow, Q = p && B ? uv(B) : {
        width: 0,
        height: 0
      }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : RC(), se = ve[K], ye = ve[q], be = Ya(0, _[Y], Q[Y]), Oe = y ? _[Y] / 2 - V - be - se - R.mainAxis : L - be - se - R.mainAxis, Ze = y ? -_[Y] / 2 + V + be + ye + R.mainAxis : J + be + ye + R.mainAxis, Je = t.elements.arrow && qs(t.elements.arrow), Lr = Je ? w === "y" ? Je.clientTop || 0 : Je.clientLeft || 0 : 0, Br = (G = z == null ? void 0 : z[w]) != null ? G : 0, Xi = O + Oe - Br - Lr, ie = O + Ze - Br, st = Ya(p ? dc(D, Xi) : D, O, p ? bo(N, ie) : N);
      P[w] = st, X[w] = st - O;
    }
    if (s) {
      var je, Ot = w === "x" ? $t : At, pn = w === "x" ? sr : lr, lt = P[k], yr = k === "y" ? "height" : "width", hn = lt + x[Ot], Gt = lt - x[pn], Oo = [$t, At].indexOf(m) !== -1, Qi = (je = z == null ? void 0 : z[k]) != null ? je : 0, el = Oo ? hn : lt - _[yr] - $[yr] - Qi + R.altAxis, tl = Oo ? lt + _[yr] + $[yr] - Qi - R.altAxis : Gt, Yn = p && Oo ? m6(el, lt, tl) : Ya(p ? el : hn, lt, p ? tl : Gt);
      P[k] = Yn, X[k] = Yn - lt;
    }
    t.modifiersData[n] = X;
  }
}
const G6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: H6,
  requiresIfExists: ["offset"]
};
function K6(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Y6(e) {
  return e === Vt(e) || !or(e) ? dv(e) : K6(e);
}
function q6(e) {
  var t = e.getBoundingClientRect(), r = Li(t.width) / e.offsetWidth || 1, n = Li(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function X6(e, t, r) {
  r === void 0 && (r = !1);
  var n = or(t), o = or(t) && q6(t), i = Kn(t), a = Bi(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((jr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  pv(i)) && (s = Y6(t)), or(t) ? (l = Bi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = fv(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Q6(e) {
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
function Z6(e) {
  var t = Q6(e);
  return u6.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function J6(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function eV(e) {
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
var $1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function A1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function tV(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? $1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $1, i),
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
        g(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: To(s) ? qa(s) : s.contextElement ? qa(s.contextElement) : [],
          popper: qa(l)
        };
        var y = Z6(eV([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(w) {
          return w.enabled;
        }), b(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, y = m.popper;
          if (A1(h, y)) {
            c.rects = {
              reference: X6(h, qs(y), c.options.strategy === "fixed"),
              popper: uv(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var k = c.orderedModifiers[w], P = k.fn, _ = k.options, $ = _ === void 0 ? {} : _, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: $,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: J6(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!A1(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function b() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, y = h === void 0 ? {} : h, w = x.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: m,
            instance: p,
            options: y
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function g() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return p;
  };
}
var rV = [_6, W6, k6, f6, B6, z6, G6, b6, j6], nV = /* @__PURE__ */ tV({
  defaultModifiers: rV
});
function FC(e = {}) {
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
  } = e, b = v.useRef(null), g = v.useRef(null), x = v.useRef(null), m = QB(n, p), h = v.useRef(() => {
  }), y = v.useCallback(() => {
    var R;
    !t || !b.current || !g.current || ((R = h.current) == null || R.call(h), x.current = nV(b.current, g.current, {
      placement: m,
      modifiers: [
        YB,
        HB,
        UB,
        {
          ...WB,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...VB(a)
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
    }), x.current.forceUpdate(), h.current = x.current.destroy);
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
  v.useEffect(() => () => {
    var R;
    !b.current && !g.current && ((R = x.current) == null || R.destroy(), x.current = null);
  }, []);
  const w = v.useCallback(
    (R) => {
      b.current = R, y();
    },
    [y]
  ), k = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: ot(w, z)
    }),
    [w]
  ), P = v.useCallback(
    (R) => {
      g.current = R, y();
    },
    [y]
  ), _ = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: ot(P, z),
      style: {
        ...R.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), $ = v.useCallback((R = {}, z = null) => {
    const { size: X, shadowColor: G, bg: K, style: q, ...Y } = R;
    return {
      ...Y,
      ref: z,
      "data-popper-arrow": "",
      style: oV(R)
    };
  }, []), M = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: z,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var R;
      (R = x.current) == null || R.update();
    },
    forceUpdate() {
      var R;
      (R = x.current) == null || R.forceUpdate();
    },
    transformOrigin: pt.transformOrigin.varRef,
    referenceRef: w,
    popperRef: P,
    getPopperProps: _,
    getArrowProps: $,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function oV(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function jC(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = ws(r), a = ws(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), b = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = v.useCallback(() => {
    u ? p() : b();
  }, [u, b, p]);
  function x(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(y) {
        var w;
        (w = h.onClick) == null || w.call(h, y), g();
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
    onOpen: b,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: m
  };
}
function iV(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = ws(r), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!n)
      return;
    const s = (d) => {
      Af(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && r && Af(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, r && a.isPointerDown && Af(d, t) && (a.isPointerDown = !1, o(d));
    }, c = NC(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [r, t, o, a, n]);
}
function Af(e, t) {
  var r;
  const n = e.target;
  return n && !NC(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function NC(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function LC(e) {
  const { isOpen: t, ref: r } = e, [n, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, n]), Qm(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = gB(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function BC(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  aV,
  sV,
  lV,
  uV
] = FN(), [cV, Xs] = mt({
  strict: !1,
  name: "MenuContext"
});
function dV(e, ...t) {
  const r = v.useId(), n = e || r;
  return v.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function VC(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function M1(e) {
  return VC(e).activeElement === e;
}
function fV(e = {}) {
  const {
    id: t,
    closeOnSelect: r = !0,
    closeOnBlur: n = !0,
    initialFocusRef: o,
    autoSelect: i = !0,
    isLazy: a,
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: b = !1,
    ...g
  } = e, x = v.useRef(null), m = v.useRef(null), h = lV(), y = v.useCallback(() => {
    requestAnimationFrame(() => {
      var B;
      (B = x.current) == null || B.focus({ preventScroll: !1 });
    });
  }, []), w = v.useCallback(() => {
    const B = setTimeout(() => {
      var Q;
      if (o)
        (Q = o.current) == null || Q.focus();
      else {
        const ve = h.firstEnabled();
        ve && G(ve.index);
      }
    });
    D.current.add(B);
  }, [h, o]), k = v.useCallback(() => {
    const B = setTimeout(() => {
      const Q = h.lastEnabled();
      Q && G(Q.index);
    });
    D.current.add(B);
  }, [h]), P = v.useCallback(() => {
    c == null || c(), i ? w() : y();
  }, [i, w, y, c]), { isOpen: _, onOpen: $, onClose: M, onToggle: R } = jC({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  iV({
    enabled: _ && n,
    ref: x,
    handler: (B) => {
      var Q;
      (Q = m.current) != null && Q.contains(B.target) || M();
    }
  });
  const z = FC({
    ...g,
    enabled: _ || b,
    placement: d,
    direction: p
  }), [X, G] = v.useState(-1);
  zi(() => {
    _ || G(-1);
  }, [_]), TC(x, {
    focusRef: m,
    visible: _,
    shouldFocus: !0
  });
  const K = LC({ isOpen: _, ref: x }), [q, Y] = dV(t, "menu-button", "menu-list"), O = v.useCallback(() => {
    $(), y();
  }, [$, y]), D = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const B = D.current;
    return () => {
      B.forEach((Q) => clearTimeout(Q)), B.clear();
    };
  }, []);
  const N = v.useCallback(() => {
    $(), w();
  }, [w, $]), V = v.useCallback(() => {
    $(), k();
  }, [$, k]), L = v.useCallback(() => {
    var B, Q;
    const ve = VC(x.current), se = (B = x.current) == null ? void 0 : B.contains(ve.activeElement);
    if (!(_ && !se))
      return;
    const be = (Q = h.item(X)) == null ? void 0 : Q.node;
    be == null || be.focus({ preventScroll: !0 });
  }, [_, X, h]), J = v.useRef(null);
  return {
    openAndFocusMenu: O,
    openAndFocusFirstItem: N,
    openAndFocusLastItem: V,
    onTransitionEnd: L,
    unstable__animationState: K,
    descendants: h,
    popper: z,
    buttonId: q,
    menuId: Y,
    forceUpdate: z.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: R,
    onOpen: $,
    onClose: M,
    menuRef: x,
    buttonRef: m,
    focusedIndex: X,
    closeOnSelect: r,
    closeOnBlur: n,
    autoSelect: i,
    setFocusedIndex: G,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: J
  };
}
function pV(e = {}, t = null) {
  const r = Xs(), { onToggle: n, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = r, s = v.useCallback(
    (l) => {
      const u = l.key, d = {
        Enter: i,
        ArrowDown: i,
        ArrowUp: a
      }[u];
      d && (l.preventDefault(), l.stopPropagation(), d(l));
    },
    [i, a]
  );
  return {
    ...e,
    ref: ot(r.buttonRef, t, o.referenceRef),
    id: r.buttonId,
    "data-active": Qt(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: Ve(e.onClick, n),
    onKeyDown: Ve(e.onKeyDown, s)
  };
}
function dh(e) {
  var t;
  return gV(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function hV(e = {}, t = null) {
  const r = Xs();
  if (!r)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: n,
    setFocusedIndex: o,
    menuRef: i,
    isOpen: a,
    onClose: s,
    menuId: l,
    isLazy: u,
    lazyBehavior: c,
    unstable__animationState: d
  } = r, f = sV(), p = MB({
    preventDefault: (m) => m.key !== " " && dh(m.target)
  }), b = v.useCallback(
    (m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const h = m.key, w = {
        Tab: (P) => P.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const P = f.nextEnabled(n);
          P && o(P.index);
        },
        ArrowUp: () => {
          const P = f.prevEnabled(n);
          P && o(P.index);
        }
      }[h];
      if (w) {
        m.preventDefault(), w(m);
        return;
      }
      const k = p((P) => {
        const _ = RB(
          f.values(),
          P,
          ($) => {
            var M, R;
            return (R = (M = $ == null ? void 0 : $.node) == null ? void 0 : M.textContent) != null ? R : "";
          },
          f.item(n)
        );
        if (_) {
          const $ = f.indexOf(_.node);
          o($);
        }
      });
      dh(m.target) && k(m);
    },
    [
      f,
      n,
      p,
      s,
      o
    ]
  ), g = v.useRef(!1);
  a && (g.current = !0);
  const x = BC({
    wasSelected: g.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: ot(i, t),
    children: x ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Ve(e.onKeyDown, b)
  };
}
function mV(e = {}) {
  const { popper: t, isOpen: r } = Xs();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: r ? "visible" : "hidden",
      ...e.style
    }
  });
}
function vV(e = {}, t = null) {
  const {
    onMouseEnter: r,
    onMouseMove: n,
    onMouseLeave: o,
    onClick: i,
    onFocus: a,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: u,
    type: c,
    ...d
  } = e, f = Xs(), {
    setFocusedIndex: p,
    focusedIndex: b,
    closeOnSelect: g,
    onClose: x,
    menuRef: m,
    isOpen: h,
    menuId: y,
    rafId: w
  } = f, k = v.useRef(null), P = `${y}-menuitem-${v.useId()}`, { index: _, register: $ } = uV({
    disabled: s && !l
  }), M = v.useCallback(
    (O) => {
      r == null || r(O), !s && p(_);
    },
    [p, _, s, r]
  ), R = v.useCallback(
    (O) => {
      n == null || n(O), k.current && !M1(k.current) && M(O);
    },
    [M, n]
  ), z = v.useCallback(
    (O) => {
      o == null || o(O), !s && p(-1);
    },
    [p, s, o]
  ), X = v.useCallback(
    (O) => {
      i == null || i(O), dh(O.currentTarget) && (u ?? g) && x();
    },
    [x, i, g, u]
  ), G = v.useCallback(
    (O) => {
      a == null || a(O), p(_);
    },
    [p, a, _]
  ), K = _ === b, q = s && !l;
  zi(() => {
    if (h)
      return K && !q && k.current ? (w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
        var O;
        (O = k.current) == null || O.focus({ preventScroll: !0 }), w.current = null;
      })) : m.current && !M1(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        w.current && cancelAnimationFrame(w.current);
      };
  }, [K, q, m, h]);
  const Y = IB({
    onClick: X,
    onFocus: G,
    onMouseEnter: M,
    onMouseMove: R,
    onMouseLeave: z,
    ref: ot($, k, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...Y,
    type: c ?? Y.type,
    id: P,
    role: "menuitem",
    tabIndex: K ? 0 : -1
  };
}
function gV(e) {
  var t;
  if (!yV(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function yV(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [bV, Qs] = mt({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), WC = (e) => {
  const { children: t } = e, r = Ki("Menu", e), n = dn(e), { direction: o } = Wc(), { descendants: i, ...a } = fV({ ...n, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ C.jsx(aV, { value: i, children: /* @__PURE__ */ C.jsx(cV, { value: s, children: /* @__PURE__ */ C.jsx(bV, { value: r, children: Ar(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
WC.displayName = "Menu";
var UC = ae(
  (e, t) => {
    const r = Qs();
    return /* @__PURE__ */ C.jsx(
      Z.span,
      {
        ref: t,
        ...e,
        __css: r.command,
        className: "chakra-menu__command"
      }
    );
  }
);
UC.displayName = "MenuCommand";
var xV = ae(
  (e, t) => {
    const { type: r, ...n } = e, o = Qs(), i = n.as || r ? r ?? void 0 : "button", a = v.useMemo(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...o.item
      }),
      [o.item]
    );
    return /* @__PURE__ */ C.jsx(Z.button, { ref: t, type: i, ...n, __css: a });
  }
), HC = (e) => {
  const { className: t, children: r, ...n } = e, o = Qs(), i = v.Children.only(r), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: fe("chakra-menu__icon", i.props.className)
  }) : null, s = fe("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ C.jsx(Z.span, { className: s, ...n, __css: o.icon, children: a });
};
HC.displayName = "MenuIcon";
var GC = ae((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = vV(s, t), c = r || o ? /* @__PURE__ */ C.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ C.jsxs(
    xV,
    {
      ...l,
      className: fe("chakra-menu__menuitem", l.className),
      children: [
        r && /* @__PURE__ */ C.jsx(HC, { fontSize: "0.8em", marginEnd: n, children: r }),
        c,
        o && /* @__PURE__ */ C.jsx(UC, { marginStart: i, children: o })
      ]
    }
  );
});
GC.displayName = "MenuItem";
var SV = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
}, wV = Z(Yi.div), KC = ae(function(t, r) {
  var n, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = Xs(), d = hV(s, r), f = mV(i), p = Qs();
  return /* @__PURE__ */ C.jsx(
    Z.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ C.jsx(
        wV,
        {
          variants: SV,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: fe("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: PS(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
KC.displayName = "MenuList";
var kV = ae((e, t) => {
  const r = Qs();
  return /* @__PURE__ */ C.jsx(
    Z.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...r.button
      }
    }
  );
}), YC = ae(
  (e, t) => {
    const { children: r, as: n, ...o } = e, i = pV(o, t), a = n || kV;
    return /* @__PURE__ */ C.jsx(
      a,
      {
        ...i,
        className: fe("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ C.jsx(
          Z.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
YC.displayName = "MenuButton";
var CV = Object.defineProperty, _V = (e, t, r) => t in e ? CV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, PV = (e, t, r) => (_V(e, typeof t != "symbol" ? t + "" : t, r), r), TV = class {
  constructor() {
    PV(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, fh = new TV();
function qC(e, t) {
  const [r, n] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = fh.add(o);
        n(i);
      }
      return () => {
        fh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var EV = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, No = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Nl = {}, Mf = 0, XC = function(e) {
  return e && (e.host || XC(e.parentNode));
}, $V = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = XC(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, AV = function(e, t, r, n) {
  var o = $V(t, Array.isArray(e) ? e : [e]);
  Nl[r] || (Nl[r] = /* @__PURE__ */ new WeakMap());
  var i = Nl[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), b = p !== null && p !== "false", g = (No.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        No.set(f, g), i.set(f, x), a.push(f), g === 1 && b && jl.set(f, !0), x === 1 && f.setAttribute(r, "true"), b || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Mf++, function() {
    a.forEach(function(d) {
      var f = No.get(d) - 1, p = i.get(d) - 1;
      No.set(d, f), i.set(d, p), f || (jl.has(d) || d.removeAttribute(n), jl.delete(d)), p || d.removeAttribute(r);
    }), Mf--, Mf || (No = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Nl = {});
  };
}, MV = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || EV(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), AV(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function RV(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = IV(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  OV(u, t && a);
  const b = qC(u, t), g = v.useRef(null), x = v.useCallback((M) => {
    g.current = M.target;
  }, []), m = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, y] = v.useState(!1), [w, k] = v.useState(!1), P = v.useCallback(
    (M = {}, R = null) => ({
      role: "dialog",
      ...M,
      ref: ot(R, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: Ve(
        M.onClick,
        (z) => z.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), _ = v.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && fh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = v.useCallback(
    (M = {}, R = null) => ({
      ...M,
      ref: ot(R, c),
      onClick: Ve(M.onClick, _),
      onKeyDown: Ve(M.onKeyDown, m),
      onMouseDown: Ve(M.onMouseDown, x)
    }),
    [m, x, _]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: y,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: $,
    index: b
  };
}
function OV(e, t) {
  const r = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return MV(e.current);
  }, [t, e, r]);
}
function IV(e, ...t) {
  const r = v.useId(), n = e || r;
  return v.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [DV, Zs] = mt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [zV, qi] = mt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), QC = (e) => {
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
    onCloseComplete: b
  } = t, g = Ki("Modal", t), m = {
    ...RV(t),
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
  return /* @__PURE__ */ C.jsx(zV, { value: m, children: /* @__PURE__ */ C.jsx(DV, { value: g, children: /* @__PURE__ */ C.jsx(td, { onExitComplete: b, children: m.isOpen && /* @__PURE__ */ C.jsx(js, { ...r, children: n }) }) }) });
};
QC.displayName = "Modal";
var yu = "right-scroll-bar-position", bu = "width-before-scroll-bar", FV = "with-scroll-bars-hidden", jV = "--removed-body-scroll-bar-size", ZC = Gk(), Rf = function() {
}, sd = v.forwardRef(function(e, t) {
  var r = v.useRef(null), n = v.useState({
    onScrollCapture: Rf,
    onWheelCapture: Rf,
    onTouchMoveCapture: Rf
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, b = e.inert, g = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, y = Wk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = Vk([r, t]), P = Er(Er({}, y), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(w, { sideCar: ZC, removeScrollBar: u, shards: d, noIsolation: p, inert: b, setCallbacks: i, allowPinchZoom: !!g, lockRef: r, gapMode: h }),
    a ? v.cloneElement(v.Children.only(s), Er(Er({}, P), { ref: k })) : v.createElement(m, Er({}, P, { className: l, ref: k }), s)
  );
});
sd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
sd.classNames = {
  fullWidth: bu,
  zeroRight: yu
};
var R1, NV = function() {
  if (R1)
    return R1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function LV() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = NV();
  return t && e.setAttribute("nonce", t), e;
}
function BV(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function VV(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var WV = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = LV()) && (BV(t, r), VV(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, UV = function() {
  var e = WV();
  return function(t, r) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, JC = function() {
  var e = UV(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, HV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Of = function(e) {
  return parseInt(e || "", 10) || 0;
}, GV = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Of(r), Of(n), Of(o)];
}, KV = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return HV;
  var t = GV(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, YV = JC(), qV = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(FV, ` {
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
  
  .`).concat(yu, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(bu, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(yu, " .").concat(yu, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(bu, " .").concat(bu, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(jV, ": ").concat(s, `px;
  }
`);
}, XV = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = v.useMemo(function() {
    return KV(o);
  }, [o]);
  return v.createElement(YV, { styles: qV(i, !t, o, r ? "" : "!important") });
}, ph = !1;
if (typeof window < "u")
  try {
    var Ll = Object.defineProperty({}, "passive", {
      get: function() {
        return ph = !0, !0;
      }
    });
    window.addEventListener("test", Ll, Ll), window.removeEventListener("test", Ll, Ll);
  } catch {
    ph = !1;
  }
var Lo = ph ? { passive: !1 } : !1, QV = function(e) {
  return e.tagName === "TEXTAREA";
}, e_ = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !QV(e) && r[t] === "visible")
  );
}, ZV = function(e) {
  return e_(e, "overflowY");
}, JV = function(e) {
  return e_(e, "overflowX");
}, O1 = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = t_(e, n);
    if (o) {
      var i = r_(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, e8 = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, t8 = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, t_ = function(e, t) {
  return e === "v" ? ZV(t) : JV(t);
}, r_ = function(e, t) {
  return e === "v" ? e8(t) : t8(t);
}, r8 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, n8 = function(e, t, r, n, o) {
  var i = r8(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = r_(e, s), b = p[0], g = p[1], x = p[2], m = g - x - i * b;
    (b || m) && t_(e, s) && (d += m, f += b), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Bl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, I1 = function(e) {
  return [e.deltaX, e.deltaY];
}, D1 = function(e) {
  return e && "current" in e ? e.current : e;
}, o8 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, i8 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, a8 = 0, Bo = [];
function s8(e) {
  var t = v.useRef([]), r = v.useRef([0, 0]), n = v.useRef(), o = v.useState(a8++)[0], i = v.useState(JC)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = vL([e.lockRef.current], (e.shards || []).map(D1), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = Bl(g), h = r.current, y = "deltaX" in g ? g.deltaX : h[0] - m[0], w = "deltaY" in g ? g.deltaY : h[1] - m[1], k, P = g.target, _ = Math.abs(y) > Math.abs(w) ? "h" : "v";
    if ("touches" in g && _ === "h" && P.type === "range")
      return !1;
    var $ = O1(_, P);
    if (!$)
      return !0;
    if ($ ? k = _ : (k = _ === "v" ? "h" : "v", $ = O1(_, P)), !$)
      return !1;
    if (!n.current && "changedTouches" in g && (y || w) && (n.current = k), !k)
      return !0;
    var M = n.current || k;
    return n8(M, x, g, M === "h" ? y : w, !0);
  }, []), l = v.useCallback(function(g) {
    var x = g;
    if (!(!Bo.length || Bo[Bo.length - 1] !== i)) {
      var m = "deltaY" in x ? I1(x) : Bl(x), h = t.current.filter(function(k) {
        return k.name === x.type && (k.target === x.target || x.target === k.shadowParent) && o8(k.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var y = (a.current.shards || []).map(D1).filter(Boolean).filter(function(k) {
          return k.contains(x.target);
        }), w = y.length > 0 ? s(x, y[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(g, x, m, h) {
    var y = { name: g, delta: x, target: m, should: h, shadowParent: l8(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== y;
      });
    }, 1);
  }, []), c = v.useCallback(function(g) {
    r.current = Bl(g), n.current = void 0;
  }, []), d = v.useCallback(function(g) {
    u(g.type, I1(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    u(g.type, Bl(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Bo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Lo), document.addEventListener("touchmove", l, Lo), document.addEventListener("touchstart", c, Lo), function() {
      Bo = Bo.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, Lo), document.removeEventListener("touchmove", l, Lo), document.removeEventListener("touchstart", c, Lo);
    };
  }, []);
  var p = e.removeScrollBar, b = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    b ? v.createElement(i, { styles: i8(o) }) : null,
    p ? v.createElement(XV, { gapMode: e.gapMode }) : null
  );
}
function l8(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const u8 = gL(ZC, s8);
var n_ = v.forwardRef(function(e, t) {
  return v.createElement(sd, Er({}, e, { ref: t, sideCar: u8 }));
});
n_.classNames = sd.classNames;
const c8 = n_;
function d8(e) {
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
  } = qi(), [f, p] = fk();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const b = qC(n, d);
  return /* @__PURE__ */ C.jsx(
    kC,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ C.jsx(
        c8,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: b === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var [f8, p8] = mt(), h8 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function m8(e, t) {
  var r, n;
  if (e)
    return (n = (r = h8[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function v8(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = Wc(), l = (t = s.components) == null ? void 0 : t.Drawer, u = m8(o, s.direction);
  return /* @__PURE__ */ C.jsx(f8, { value: { placement: u }, children: /* @__PURE__ */ C.jsx(
    QC,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var g8 = Z(Ik), o_ = ae(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = qi(), c = s(a, t), d = l(i), f = fe("chakra-modal__content", r), p = Zs(), b = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: x } = p8();
    return /* @__PURE__ */ C.jsx(d8, { children: /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ C.jsx(
          g8,
          {
            motionProps: o,
            direction: x,
            in: u,
            className: f,
            ...c,
            __css: b,
            children: n
          }
        )
      }
    ) });
  }
);
o_.displayName = "DrawerContent";
var i_ = ae(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = qi();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = fe("chakra-modal__header", r), l = {
      flex: 0,
      ...Zs().header
    };
    return /* @__PURE__ */ C.jsx(
      Z.header,
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
i_.displayName = "ModalHeader";
var y8 = Z(Yi.div), a_ = ae(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = fe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Zs().overlay
    }, { motionPreset: u } = qi(), d = o || (u === "none" ? {} : Ok);
    return /* @__PURE__ */ C.jsx(
      y8,
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
a_.displayName = "ModalOverlay";
var s_ = ae((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = qi();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = fe("chakra-modal__body", r), s = Zs();
  return /* @__PURE__ */ C.jsx(
    Z.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
s_.displayName = "ModalBody";
var l_ = ae(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = qi(), a = fe("chakra-modal__close-btn", n), s = Zs();
    return /* @__PURE__ */ C.jsx(
      rd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Ve(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
l_.displayName = "ModalCloseButton";
var [b8, Ro] = mt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [x8, Js] = mt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), u_ = ae(
  function(t, r) {
    const { getHeaderProps: n } = Ro(), o = Js();
    return /* @__PURE__ */ C.jsx(
      Z.header,
      {
        ...n(t, r),
        className: fe("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
u_.displayName = "PopoverHeader";
function hv(e) {
  const t = v.Children.only(e.children), { getTriggerProps: r } = Ro();
  return v.cloneElement(t, r(t.props, t.ref));
}
hv.displayName = "PopoverTrigger";
var Vo = {
  click: "click",
  hover: "hover"
};
function S8(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Vo.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: b,
    ...g
  } = e, { isOpen: x, onClose: m, onOpen: h, onToggle: y } = jC(e), w = v.useRef(null), k = v.useRef(null), P = v.useRef(null), _ = v.useRef(!1), $ = v.useRef(!1);
  x && ($.current = !0);
  const [M, R] = v.useState(!1), [z, X] = v.useState(!1), G = v.useId(), K = o ?? G, [q, Y, O, D] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((ie) => `${ie}-${K}`), {
    referenceRef: N,
    getArrowProps: V,
    getPopperProps: L,
    getArrowInnerProps: J,
    forceUpdate: B
  } = FC({
    ...g,
    enabled: x || !!b
  }), Q = LC({ isOpen: x, ref: P });
  oL({
    enabled: x,
    ref: k
  }), TC(P, {
    focusRef: k,
    visible: x,
    shouldFocus: i && u === Vo.click
  }), FB(P, {
    focusRef: n,
    visible: x,
    shouldFocus: a && u === Vo.click
  });
  const ve = BC({
    wasSelected: $.current,
    enabled: f,
    mode: p,
    isSelected: Q.present
  }), se = v.useCallback(
    (ie = {}, st = null) => {
      const je = {
        ...ie,
        style: {
          ...ie.style,
          transformOrigin: pt.transformOrigin.varRef,
          [pt.arrowSize.var]: s ? `${s}px` : void 0,
          [pt.arrowShadowColor.var]: l
        },
        ref: ot(P, st),
        children: ve ? ie.children : null,
        id: Y,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Ve(ie.onKeyDown, (Ot) => {
          r && Ot.key === "Escape" && m();
        }),
        onBlur: Ve(ie.onBlur, (Ot) => {
          const pn = z1(Ot), lt = If(P.current, pn), yr = If(k.current, pn);
          x && t && (!lt && !yr) && m();
        }),
        "aria-labelledby": M ? O : void 0,
        "aria-describedby": z ? D : void 0
      };
      return u === Vo.hover && (je.role = "tooltip", je.onMouseEnter = Ve(ie.onMouseEnter, () => {
        _.current = !0;
      }), je.onMouseLeave = Ve(
        ie.onMouseLeave,
        (Ot) => {
          Ot.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), je;
    },
    [
      ve,
      Y,
      M,
      O,
      z,
      D,
      u,
      r,
      m,
      x,
      t,
      d,
      l,
      s
    ]
  ), ye = v.useCallback(
    (ie = {}, st = null) => L(
      {
        ...ie,
        style: {
          visibility: x ? "visible" : "hidden",
          ...ie.style
        }
      },
      st
    ),
    [x, L]
  ), be = v.useCallback(
    (ie, st = null) => ({
      ...ie,
      // If anchor is rendered, it is used as reference.
      ref: ot(st, w, N)
    }),
    [w, N]
  ), Oe = v.useRef(), Ze = v.useRef(), Je = v.useCallback(
    (ie) => {
      w.current == null && N(ie);
    },
    [N]
  ), Lr = v.useCallback(
    (ie = {}, st = null) => {
      const je = {
        ...ie,
        ref: ot(k, st, Je),
        id: q,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": Y
      };
      return u === Vo.click && (je.onClick = Ve(ie.onClick, y)), u === Vo.hover && (je.onFocus = Ve(ie.onFocus, () => {
        Oe.current === void 0 && h();
      }), je.onBlur = Ve(ie.onBlur, (Ot) => {
        const pn = z1(Ot), lt = !If(P.current, pn);
        x && t && lt && m();
      }), je.onKeyDown = Ve(ie.onKeyDown, (Ot) => {
        Ot.key === "Escape" && m();
      }), je.onMouseEnter = Ve(ie.onMouseEnter, () => {
        _.current = !0, Oe.current = window.setTimeout(() => h(), c);
      }), je.onMouseLeave = Ve(ie.onMouseLeave, () => {
        _.current = !1, Oe.current && (clearTimeout(Oe.current), Oe.current = void 0), Ze.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), je;
    },
    [
      q,
      x,
      Y,
      u,
      Je,
      y,
      h,
      t,
      m,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    Oe.current && clearTimeout(Oe.current), Ze.current && clearTimeout(Ze.current);
  }, []);
  const Br = v.useCallback(
    (ie = {}, st = null) => ({
      ...ie,
      id: O,
      ref: ot(st, (je) => {
        R(!!je);
      })
    }),
    [O]
  ), Xi = v.useCallback(
    (ie = {}, st = null) => ({
      ...ie,
      id: D,
      ref: ot(st, (je) => {
        X(!!je);
      })
    }),
    [D]
  );
  return {
    forceUpdate: B,
    isOpen: x,
    onAnimationComplete: Q.onComplete,
    onClose: m,
    getAnchorProps: be,
    getArrowProps: V,
    getArrowInnerProps: J,
    getPopoverPositionerProps: ye,
    getPopoverProps: se,
    getTriggerProps: Lr,
    getHeaderProps: Br,
    getBodyProps: Xi
  };
}
function If(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function z1(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function mv(e) {
  const t = Ki("Popover", e), { children: r, ...n } = dn(e), o = Wc(), i = S8({ ...n, direction: o.direction });
  return /* @__PURE__ */ C.jsx(b8, { value: i, children: /* @__PURE__ */ C.jsx(x8, { value: t, children: Ar(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
mv.displayName = "Popover";
var Df = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function vv(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Ro(), c = Js(), d = (t = r ?? n) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ C.jsx(
    Z.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ C.jsx(
        Z.div,
        {
          className: fe("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Df("colors", s),
            "--popper-arrow-bg": Df("colors", d),
            "--popper-arrow-shadow": Df("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
vv.displayName = "PopoverArrow";
var gv = ae(
  function(t, r) {
    const { getBodyProps: n } = Ro(), o = Js();
    return /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ...n(t, r),
        className: fe("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
gv.displayName = "PopoverBody";
var yv = ae(
  function(t, r) {
    const { onClose: n } = Ro(), o = Js();
    return /* @__PURE__ */ C.jsx(
      rd,
      {
        size: "sm",
        onClick: n,
        className: fe("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
yv.displayName = "PopoverCloseButton";
function w8(e) {
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
var k8 = {
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
}, C8 = Z(Yi.section), c_ = ae(function(t, r) {
  const { variants: n = k8, ...o } = t, { isOpen: i } = Ro();
  return /* @__PURE__ */ C.jsx(
    C8,
    {
      ref: r,
      variants: w8(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
c_.displayName = "PopoverTransition";
var bv = ae(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Ro(), u = Js(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ C.jsx(
      Z.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ C.jsx(
          c_,
          {
            ...o,
            ...a(i, r),
            onAnimationComplete: PS(
              l,
              i.onAnimationComplete
            ),
            className: fe("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
bv.displayName = "PopoverContent";
var _8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, P8 = Object.defineProperty, T8 = Object.defineProperties, E8 = Object.getOwnPropertyDescriptors, fc = Object.getOwnPropertySymbols, d_ = Object.prototype.hasOwnProperty, f_ = Object.prototype.propertyIsEnumerable, F1 = (e, t, r) => t in e ? P8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, j1 = (e, t) => {
  for (var r in t || (t = {}))
    d_.call(t, r) && F1(e, r, t[r]);
  if (fc)
    for (var r of fc(t))
      f_.call(t, r) && F1(e, r, t[r]);
  return e;
}, $8 = (e, t) => T8(e, E8(t)), A8 = (e, t) => {
  var r = {};
  for (var n in e)
    d_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && fc)
    for (var n of fc(e))
      t.indexOf(n) < 0 && f_.call(e, n) && (r[n] = e[n]);
  return r;
}, fn = (e, t, r) => {
  const n = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = A8(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        j1($8(j1({
          ref: i
        }, _8), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([f, p]) => v.createElement(f, p)), ...c || []]
      );
    }
  );
  return n.propTypes = {
    color: Jn.string,
    size: Jn.oneOfType([Jn.string, Jn.number]),
    stroke: Jn.oneOfType([Jn.string, Jn.number])
  }, n.displayName = `${t}`, n;
}, M8 = fn("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), R8 = fn("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), O8 = fn("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), I8 = fn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), xv = fn("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), D8 = fn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), p_ = fn("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), z8 = fn("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), F8 = fn(
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
let Vl;
const j8 = new Uint8Array(16);
function N8() {
  if (!Vl && (Vl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Vl(j8);
}
const tt = [];
for (let e = 0; e < 256; ++e)
  tt.push((e + 256).toString(16).slice(1));
function L8(e, t = 0) {
  return tt[e[t + 0]] + tt[e[t + 1]] + tt[e[t + 2]] + tt[e[t + 3]] + "-" + tt[e[t + 4]] + tt[e[t + 5]] + "-" + tt[e[t + 6]] + tt[e[t + 7]] + "-" + tt[e[t + 8]] + tt[e[t + 9]] + "-" + tt[e[t + 10]] + tt[e[t + 11]] + tt[e[t + 12]] + tt[e[t + 13]] + tt[e[t + 14]] + tt[e[t + 15]];
}
const B8 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), N1 = {
  randomUUID: B8
};
function V8(e, t, r) {
  if (N1.randomUUID && !t && !e)
    return N1.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || N8)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return L8(n);
}
async function Sv(e, t) {
  const r = e + "/" + Date.now() + ".json";
  W8(r, t);
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (n) {
    console.error("Error saving workspace:", n);
  }
}
async function W8(e, t) {
  try {
    const n = await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
    return console.log(n), n;
  } catch (r) {
    console.error("Error saving workspace backup:", r);
  }
}
let ze, Sr = null;
async function U8() {
  const e = async () => {
    let r = await h_("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), ze = JSON.parse(r ?? "{}");
  }, t = async () => {
    Sr = await G8();
  };
  await Promise.all([e(), t()]);
}
function L1(e, t) {
  if (ze == null)
    return;
  const r = ze[e];
  if (r == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const n = {
    ...r,
    ...t,
    id: e
  }, o = JSON.stringify(r), i = JSON.stringify(n);
  o !== i && (ze[e] = {
    ...ze[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(ze)), Sv("workflows", JSON.stringify(ze)));
}
function B1(e, t) {
  if (ze == null)
    throw new Error("workspace is not loaded");
  const r = V8();
  return ze[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(ze)), Sv("workflows", JSON.stringify(ze)), ze[r];
}
function V1() {
  if (ze == null)
    throw new Error("workspace is not loaded");
  return Object.values(ze).sort((e, t) => t.updateTime - e.updateTime);
}
function H8(e) {
  if (ze == null)
    throw new Error("workspace is not loaded");
  delete ze[e], localStorage.setItem("workspace", JSON.stringify(ze)), Sv("workflows", JSON.stringify(ze));
}
async function h_(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function G8() {
  let e = await h_("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
const m_ = v.createContext({
  curFlowID: null
});
function K8({ workflow: e }) {
  const [t, r] = v.useState([]), [n, o] = v.useState("");
  return v.useEffect(() => {
    Sr && r(Sr.listAll() ?? []);
  }, []), Sr == null ? null : /* @__PURE__ */ C.jsx(mv, { children: ({}) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx(hv, { children: /* @__PURE__ */ C.jsx(zr, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ C.jsx(p_, { color: "#718096" }) }) }),
    /* @__PURE__ */ C.jsxs(bv, { children: [
      /* @__PURE__ */ C.jsx(vv, {}),
      /* @__PURE__ */ C.jsx(yv, {}),
      /* @__PURE__ */ C.jsxs(u_, { children: [
        "Add Tags to ",
        /* @__PURE__ */ C.jsx("b", { children: e.name })
      ] }),
      /* @__PURE__ */ C.jsxs(gv, { children: [
        /* @__PURE__ */ C.jsxs($r, { children: [
          /* @__PURE__ */ C.jsx(
            od,
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
            zr,
            {
              iconSpacing: 1,
              leftIcon: /* @__PURE__ */ C.jsx(xv, { size: 16 }),
              colorScheme: "teal",
              variant: "solid",
              size: "xs",
              px: 5,
              isDisabled: n.length === 0,
              onClick: () => {
                Sr == null || Sr.upsert(n), r((Sr == null ? void 0 : Sr.listAll()) ?? []), o("");
              },
              children: "New Tag"
            }
          )
        ] }),
        t.map((i) => /* @__PURE__ */ C.jsx(po, { mb: 4, fontWeight: 600, children: i.name }))
      ] })
    ] })
  ] }) });
}
function Y8({}) {
  return /* @__PURE__ */ C.jsxs(WC, { children: [
    /* @__PURE__ */ C.jsx(
      YC,
      {
        as: Dk,
        "aria-label": "Options",
        icon: /* @__PURE__ */ C.jsx(O8, {}),
        variant: "outline"
      }
    ),
    /* @__PURE__ */ C.jsx(KC, { children: /* @__PURE__ */ C.jsx(GC, { icon: /* @__PURE__ */ C.jsx(R8, {}), children: "Backups" }) })
  ] });
}
function q8({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = v.useState([]), { colorMode: i } = Ns(), { curFlowID: a } = v.useContext(m_);
  v.useEffect(() => {
    const l = V1();
    o(l);
  }, []);
  const s = (l) => {
    H8(l);
    const u = V1();
    o(u);
  };
  return /* @__PURE__ */ C.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ C.jsxs(
    v8,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ C.jsx(a_, {}),
        /* @__PURE__ */ C.jsxs(o_, { children: [
          /* @__PURE__ */ C.jsx(l_, {}),
          /* @__PURE__ */ C.jsx(i_, { children: /* @__PURE__ */ C.jsxs($r, { alignItems: "center", children: [
            /* @__PURE__ */ C.jsx(po, { mr: 6, children: "Recent Workflows" }),
            /* @__PURE__ */ C.jsx(
              zr,
              {
                leftIcon: /* @__PURE__ */ C.jsx(xv, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                onClick: r,
                children: "New"
              }
            ),
            /* @__PURE__ */ C.jsx(Y8, {})
          ] }) }),
          /* @__PURE__ */ C.jsxs(s_, { children: [
            /* @__PURE__ */ C.jsx($r, { spacing: 4, mb: 6, children: /* @__PURE__ */ C.jsx(
              zr,
              {
                leftIcon: /* @__PURE__ */ C.jsx(p_, {}),
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
              return /* @__PURE__ */ C.jsxs($r, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ C.jsxs(
                  id,
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
                      /* @__PURE__ */ C.jsx(po, { fontWeight: "500", children: l.name ?? "untitled" }),
                      /* @__PURE__ */ C.jsxs(po, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        X8(l.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ C.jsx(K8, { workflow: l }),
                /* @__PURE__ */ C.jsx(mv, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
                  /* @__PURE__ */ C.jsx(hv, { children: /* @__PURE__ */ C.jsx(z8, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ C.jsxs(bv, { children: [
                    /* @__PURE__ */ C.jsx(vv, {}),
                    /* @__PURE__ */ C.jsx(yv, {}),
                    /* @__PURE__ */ C.jsxs(gv, { children: [
                      /* @__PURE__ */ C.jsx(po, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ C.jsx(
                        zr,
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
function X8(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function Q8(e) {
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
function Z8() {
  const e = [];
  for (let t of Wl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = Q8(t.type), e.push(t.type));
  return e;
}
const J8 = {
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
function e9() {
  const [e, t] = v.useState([]), r = v.useRef({}), [n, o] = v.useState(null), [i, a] = v.useState("root"), [s, l] = v.useState(!0), [u, c] = v.useState(null), d = v.useRef(null), { colorMode: f, toggleColorMode: p } = Ns(), b = (w) => {
    d.current = w, c(w), setTimeout(() => {
      const k = Z8();
      t(k);
    }, 1e3);
  }, g = async () => {
    var P;
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
    Wl.registerExtension(w);
    try {
      await U8();
    } catch (_) {
      console.error("error loading db", _);
    }
    l(!1);
    const k = localStorage.getItem("curFlowID");
    if (k)
      b(k), ze && o(((P = ze[k]) == null ? void 0 : P.name) ?? "");
    else {
      const _ = localStorage.getItem("workflow"), $ = B1(_ ?? "");
      b($.id), o($.name ?? "");
    }
  };
  v.useEffect(() => {
    g(), setInterval(() => {
      if (d.current != null) {
        const w = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", d.current), w != null && L1(d.current, {
          json: w
        });
      }
    }, 1e3);
  }, []);
  const x = (w) => {
    d.current != null && L1(d.current, {
      name: w
    });
  }, m = v.useCallback(
    cE(x, 700),
    []
  ), h = (w) => {
    if (ze == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    b(w);
    const k = ze[w];
    if (k == null) {
      alert("Error: Workflow not found! id: " + w);
      return;
    }
    o(k.name), Wl.loadGraphData(JSON.parse(k.json)), a("root");
  }, y = () => {
    const w = J8, k = B1(JSON.stringify(w));
    b(k.id), o(k.name), Wl.loadGraphData(w);
  };
  return s ? null : /* @__PURE__ */ C.jsx(m_.Provider, { value: { curFlowID: u }, children: /* @__PURE__ */ C.jsxs(
    id,
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
          $r,
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
              /* @__PURE__ */ C.jsxs($r, { children: [
                /* @__PURE__ */ C.jsx(
                  zr,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ C.jsxs($r, { gap: 1, children: [
                      /* @__PURE__ */ C.jsx(M8, { size: 21 }),
                      /* @__PURE__ */ C.jsx(F8, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  zr,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => y(),
                    children: /* @__PURE__ */ C.jsxs($r, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ C.jsx(xv, { size: 16, color: "white" }),
                      /* @__PURE__ */ C.jsx(po, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  od,
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
              /* @__PURE__ */ C.jsx($r, { children: /* @__PURE__ */ C.jsx(zr, { onClick: p, variant: "link", children: f === "light" ? /* @__PURE__ */ C.jsx(I8, { size: 20 }) : /* @__PURE__ */ C.jsx(D8, { size: 20 }) }) })
            ]
          }
        ),
        i === "recentFlows" && /* @__PURE__ */ C.jsx(
          q8,
          {
            onclose: () => a("root"),
            loadWorkflowID: h,
            onClickNewFlow: () => {
              y(), a("root");
            }
          }
        )
      ]
    }
  ) });
}
const v_ = document.createElement("div");
document.body.append(v_);
const t9 = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, r9 = pz({ config: t9 });
zf.createRoot(v_).render(
  /* @__PURE__ */ C.jsx(xo.StrictMode, { children: /* @__PURE__ */ C.jsxs(TN, { children: [
    /* @__PURE__ */ C.jsx(_$, { initialColorMode: r9.config.initialColorMode }),
    /* @__PURE__ */ C.jsx(e9, {})
  ] }) })
);
