import { app as Rl } from "/scripts/app.js";
function q_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function il(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var OS = { exports: {} }, Zc = {}, MS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), X_ = Symbol.for("react.portal"), Q_ = Symbol.for("react.fragment"), Z_ = Symbol.for("react.strict_mode"), J_ = Symbol.for("react.profiler"), eE = Symbol.for("react.provider"), tE = Symbol.for("react.context"), nE = Symbol.for("react.forward_ref"), rE = Symbol.for("react.suspense"), oE = Symbol.for("react.memo"), iE = Symbol.for("react.lazy"), o0 = Symbol.iterator;
function aE(e) {
  return e === null || typeof e != "object" ? null : (e = o0 && e[o0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var IS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, RS = Object.assign, $S = {};
function ya(e, t, n) {
  this.props = e, this.context = t, this.refs = $S, this.updater = n || IS;
}
ya.prototype.isReactComponent = {};
ya.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ya.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function AS() {
}
AS.prototype = ya.prototype;
function xm(e, t, n) {
  this.props = e, this.context = t, this.refs = $S, this.updater = n || IS;
}
var wm = xm.prototype = new AS();
wm.constructor = xm;
RS(wm, ya.prototype);
wm.isPureReactComponent = !0;
var i0 = Array.isArray, DS = Object.prototype.hasOwnProperty, Cm = { current: null }, FS = { key: !0, ref: !0, __self: !0, __source: !0 };
function LS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      DS.call(t, r) && !FS.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: al, type: e, key: i, ref: a, props: o, _owner: Cm.current };
}
function sE(e, t) {
  return { $$typeof: al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function km(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function lE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var a0 = /\/+/g;
function cf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? lE("" + e.key) : t.toString(36);
}
function Su(e, t, n, r, o) {
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
          case al:
          case X_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + cf(a, 0) : r, i0(o) ? (n = "", e != null && (n = e.replace(a0, "$&/") + "/"), Su(o, t, n, "", function(u) {
      return u;
    })) : o != null && (km(o) && (o = sE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(a0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", i0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + cf(i, s);
      a += Su(i, t, n, l, o);
    }
  else if (l = aE(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + cf(i, s++), a += Su(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function $l(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Su(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function uE(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ot = { current: null }, xu = { transition: null }, cE = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: xu, ReactCurrentOwner: Cm };
ue.Children = { map: $l, forEach: function(e, t, n) {
  $l(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $l(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $l(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!km(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = ya;
ue.Fragment = Q_;
ue.Profiler = J_;
ue.PureComponent = xm;
ue.StrictMode = Z_;
ue.Suspense = rE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cE;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = RS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Cm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      DS.call(t, l) && !FS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: al, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: tE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: eE, _context: e }, e.Consumer = e;
};
ue.createElement = LS;
ue.createFactory = function(e) {
  var t = LS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: nE, render: e };
};
ue.isValidElement = km;
ue.lazy = function(e) {
  return { $$typeof: iE, _payload: { _status: -1, _result: e }, _init: uE };
};
ue.memo = function(e, t) {
  return { $$typeof: oE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = xu.transition;
  xu.transition = {};
  try {
    e();
  } finally {
    xu.transition = t;
  }
};
ue.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function(e, t) {
  return Ot.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return Ot.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return Ot.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return Ot.current.useEffect(e, t);
};
ue.useId = function() {
  return Ot.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return Ot.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return Ot.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return Ot.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return Ot.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return Ot.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return Ot.current.useRef(e);
};
ue.useState = function(e) {
  return Ot.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return Ot.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return Ot.current.useTransition();
};
ue.version = "18.2.0";
MS.exports = ue;
var v = MS.exports;
const re = /* @__PURE__ */ il(v), s0 = /* @__PURE__ */ q_({
  __proto__: null,
  default: re
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
var dE = v, fE = Symbol.for("react.element"), pE = Symbol.for("react.fragment"), hE = Object.prototype.hasOwnProperty, mE = dE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vE = { key: !0, ref: !0, __self: !0, __source: !0 };
function zS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    hE.call(t, r) && !vE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: fE, type: e, key: i, ref: a, props: o, _owner: mE.current };
}
Zc.Fragment = pE;
Zc.jsx = zS;
Zc.jsxs = zS;
OS.exports = Zc;
var w = OS.exports, $p = {}, NS = { exports: {} }, en = {}, jS = { exports: {} }, VS = {};
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
  function t(A, z) {
    var U = A.length;
    A.push(z);
    e:
      for (; 0 < U; ) {
        var V = U - 1 >>> 1, Y = A[V];
        if (0 < o(Y, z))
          A[V] = z, A[U] = Y, U = V;
        else
          break e;
      }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0)
      return null;
    var z = A[0], U = A.pop();
    if (U !== z) {
      A[0] = U;
      e:
        for (var V = 0, Y = A.length, N = Y >>> 1; V < N; ) {
          var te = 2 * (V + 1) - 1, le = A[te], ie = te + 1, se = A[ie];
          if (0 > o(le, U))
            ie < Y && 0 > o(se, le) ? (A[V] = se, A[ie] = U, V = ie) : (A[V] = le, A[te] = U, V = te);
          else if (ie < Y && 0 > o(se, U))
            A[V] = se, A[ie] = U, V = ie;
          else
            break e;
        }
    }
    return z;
  }
  function o(A, z) {
    var U = A.sortIndex - z.sortIndex;
    return U !== 0 ? U : A.id - z.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(A) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null)
        r(u);
      else if (z.startTime <= A)
        r(u), z.sortIndex = z.expirationTime, t(l, z);
      else
        break;
      z = n(u);
    }
  }
  function x(A) {
    if (g = !1, b(A), !y)
      if (n(l) !== null)
        y = !0, K(k);
      else {
        var z = n(u);
        z !== null && $(x, z.startTime - A);
      }
  }
  function k(A, z) {
    y = !1, g && (g = !1, m(_), _ = -1), p = !0;
    var U = f;
    try {
      for (b(z), d = n(l); d !== null && (!(d.expirationTime > z) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= z);
          z = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), b(z);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var N = !0;
      else {
        var te = n(u);
        te !== null && $(x, te.startTime - z), N = !1;
      }
      return N;
    } finally {
      d = null, f = U, p = !1;
    }
  }
  var P = !1, T = null, _ = -1, M = 5, I = -1;
  function D() {
    return !(e.unstable_now() - I < M);
  }
  function G() {
    if (T !== null) {
      var A = e.unstable_now();
      I = A;
      var z = !0;
      try {
        z = T(!0, A);
      } finally {
        z ? H() : (P = !1, T = null);
      }
    } else
      P = !1;
  }
  var H;
  if (typeof h == "function")
    H = function() {
      h(G);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), W = L.port2;
    L.port1.onmessage = G, H = function() {
      W.postMessage(null);
    };
  } else
    H = function() {
      S(G, 0);
    };
  function K(A) {
    T = A, P || (P = !0, H());
  }
  function $(A, z) {
    _ = S(function() {
      A(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    y || p || (y = !0, K(k));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = f;
    }
    var U = f;
    f = z;
    try {
      return A();
    } finally {
      f = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, z) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var U = f;
    f = A;
    try {
      return z();
    } finally {
      f = U;
    }
  }, e.unstable_scheduleCallback = function(A, z, U) {
    var V = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? V + U : V) : U = V, A) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = U + Y, A = { id: c++, callback: z, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (g ? (m(_), _ = -1) : g = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), y || p || (y = !0, K(k))), A;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(A) {
    var z = f;
    return function() {
      var U = f;
      f = z;
      try {
        return A.apply(this, arguments);
      } finally {
        f = U;
      }
    };
  };
})(VS);
jS.exports = VS;
var gE = jS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BS = v, Qt = gE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var WS = /* @__PURE__ */ new Set(), Ts = {};
function qo(e, t) {
  Zi(e, t), Zi(e + "Capture", t);
}
function Zi(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++)
    WS.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ap = Object.prototype.hasOwnProperty, yE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, l0 = {}, u0 = {};
function bE(e) {
  return Ap.call(u0, e) ? !0 : Ap.call(l0, e) ? !1 : yE.test(e) ? u0[e] = !0 : (l0[e] = !0, !1);
}
function SE(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xE(e, t, n, r) {
  if (t === null || typeof t > "u" || SE(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
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
function Mt(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ht[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ht[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ht[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ht[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ht[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pm = /[\-:]([a-z])/g;
function Tm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pm,
    Tm
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pm, Tm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pm, Tm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _m(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xE(t, n, o, r) && (n = null), r || o === null ? bE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Al = Symbol.for("react.element"), pi = Symbol.for("react.portal"), hi = Symbol.for("react.fragment"), Em = Symbol.for("react.strict_mode"), Dp = Symbol.for("react.profiler"), HS = Symbol.for("react.provider"), US = Symbol.for("react.context"), Om = Symbol.for("react.forward_ref"), Fp = Symbol.for("react.suspense"), Lp = Symbol.for("react.suspense_list"), Mm = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), GS = Symbol.for("react.offscreen"), c0 = Symbol.iterator;
function Ea(e) {
  return e === null || typeof e != "object" ? null : (e = c0 && e[c0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, df;
function Ua(e) {
  if (df === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      df = t && t[1] || "";
    }
  return `
` + df + e;
}
var ff = !1;
function pf(e, t) {
  if (!e || ff)
    return "";
  ff = !0;
  var n = Error.prepareStackTrace;
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
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
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
    ff = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ua(e) : "";
}
function wE(e) {
  switch (e.tag) {
    case 5:
      return Ua(e.type);
    case 16:
      return Ua("Lazy");
    case 13:
      return Ua("Suspense");
    case 19:
      return Ua("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = pf(e.type, !1), e;
    case 11:
      return e = pf(e.type.render, !1), e;
    case 1:
      return e = pf(e.type, !0), e;
    default:
      return "";
  }
}
function zp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case hi:
      return "Fragment";
    case pi:
      return "Portal";
    case Dp:
      return "Profiler";
    case Em:
      return "StrictMode";
    case Fp:
      return "Suspense";
    case Lp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case US:
        return (e.displayName || "Context") + ".Consumer";
      case HS:
        return (e._context.displayName || "Context") + ".Provider";
      case Om:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Mm:
        return t = e.displayName || null, t !== null ? t : zp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return zp(e(t));
        } catch {
        }
    }
  return null;
}
function CE(e) {
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
      return zp(t);
    case 8:
      return t === Em ? "StrictMode" : "Mode";
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
function oo(e) {
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
function KS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kE(e) {
  var t = KS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Dl(e) {
  e._valueTracker || (e._valueTracker = kE(e));
}
function YS(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = KS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Np(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function d0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = oo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qS(e, t) {
  t = t.checked, t != null && _m(e, "checked", t, !1);
}
function jp(e, t) {
  qS(e, t);
  var n = oo(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vp(e, t.type, oo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function f0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Vp(e, t, n) {
  (t !== "number" || Qu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ga = Array.isArray;
function zi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + oo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function p0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Ga(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: oo(n) };
}
function XS(e, t) {
  var n = oo(t.value), r = oo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function h0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function QS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? QS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Fl, ZS = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Fl = Fl || document.createElement("div"), Fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function _s(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rs = {
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
}, PE = ["Webkit", "ms", "Moz", "O"];
Object.keys(rs).forEach(function(e) {
  PE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rs[t] = rs[e];
  });
});
function JS(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rs.hasOwnProperty(e) && rs[e] ? ("" + t).trim() : t + "px";
}
function ex(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = JS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var TE = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Hp(e, t) {
  if (t) {
    if (TE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(F(62));
  }
}
function Up(e, t) {
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
var Gp = null;
function Im(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Kp = null, Ni = null, ji = null;
function m0(e) {
  if (e = ul(e)) {
    if (typeof Kp != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = rd(t), Kp(e.stateNode, e.type, t));
  }
}
function tx(e) {
  Ni ? ji ? ji.push(e) : ji = [e] : Ni = e;
}
function nx() {
  if (Ni) {
    var e = Ni, t = ji;
    if (ji = Ni = null, m0(e), t)
      for (e = 0; e < t.length; e++)
        m0(t[e]);
  }
}
function rx(e, t) {
  return e(t);
}
function ox() {
}
var hf = !1;
function ix(e, t, n) {
  if (hf)
    return e(t, n);
  hf = !0;
  try {
    return rx(e, t, n);
  } finally {
    hf = !1, (Ni !== null || ji !== null) && (ox(), nx());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = rd(n);
  if (r === null)
    return null;
  n = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(F(231, t, typeof n));
  return n;
}
var Yp = !1;
if (xr)
  try {
    var Oa = {};
    Object.defineProperty(Oa, "passive", { get: function() {
      Yp = !0;
    } }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
  } catch {
    Yp = !1;
  }
function _E(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var os = !1, Zu = null, Ju = !1, qp = null, EE = { onError: function(e) {
  os = !0, Zu = e;
} };
function OE(e, t, n, r, o, i, a, s, l) {
  os = !1, Zu = null, _E.apply(EE, arguments);
}
function ME(e, t, n, r, o, i, a, s, l) {
  if (OE.apply(this, arguments), os) {
    if (os) {
      var u = Zu;
      os = !1, Zu = null;
    } else
      throw Error(F(198));
    Ju || (Ju = !0, qp = u);
  }
}
function Xo(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ax(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function v0(e) {
  if (Xo(e) !== e)
    throw Error(F(188));
}
function IE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Xo(e), t === null)
      throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return v0(o), e;
        if (i === r)
          return v0(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(F(189));
      }
    }
    if (n.alternate !== r)
      throw Error(F(190));
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function sx(e) {
  return e = IE(e), e !== null ? lx(e) : null;
}
function lx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = lx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ux = Qt.unstable_scheduleCallback, g0 = Qt.unstable_cancelCallback, RE = Qt.unstable_shouldYield, $E = Qt.unstable_requestPaint, Ke = Qt.unstable_now, AE = Qt.unstable_getCurrentPriorityLevel, Rm = Qt.unstable_ImmediatePriority, cx = Qt.unstable_UserBlockingPriority, ec = Qt.unstable_NormalPriority, DE = Qt.unstable_LowPriority, dx = Qt.unstable_IdlePriority, Jc = null, Xn = null;
function FE(e) {
  if (Xn && typeof Xn.onCommitFiberRoot == "function")
    try {
      Xn.onCommitFiberRoot(Jc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : NE, LE = Math.log, zE = Math.LN2;
function NE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (LE(e) / zE | 0) | 0;
}
var Ll = 64, zl = 4194304;
function Ka(e) {
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
function tc(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Ka(s) : (i &= a, i !== 0 && (r = Ka(i)));
  } else
    a = n & ~o, a !== 0 ? r = Ka(a) : i !== 0 && (r = Ka(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function jE(e, t) {
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
function VE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $n(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = jE(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Xp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fx() {
  var e = Ll;
  return Ll <<= 1, !(Ll & 4194240) && (Ll = 64), e;
}
function mf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function sl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $n(t), e[t] = n;
}
function BE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function $m(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function px(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var hx, Am, mx, vx, gx, Qp = !1, Nl = [], Kr = null, Yr = null, qr = null, Os = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Vr = [], WE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function y0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kr = null;
      break;
    case "dragenter":
    case "dragleave":
      Yr = null;
      break;
    case "mouseover":
    case "mouseout":
      qr = null;
      break;
    case "pointerover":
    case "pointerout":
      Os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ms.delete(t.pointerId);
  }
}
function Ma(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ul(t), t !== null && Am(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function HE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kr = Ma(Kr, e, t, n, r, o), !0;
    case "dragenter":
      return Yr = Ma(Yr, e, t, n, r, o), !0;
    case "mouseover":
      return qr = Ma(qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Os.set(i, Ma(Os.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ms.set(i, Ma(Ms.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function yx(e) {
  var t = Oo(e.target);
  if (t !== null) {
    var n = Xo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ax(n), t !== null) {
          e.blockedOn = t, gx(e.priority, function() {
            mx(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gp = r, n.target.dispatchEvent(r), Gp = null;
    } else
      return t = ul(n), t !== null && Am(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function b0(e, t, n) {
  wu(e) && n.delete(t);
}
function UE() {
  Qp = !1, Kr !== null && wu(Kr) && (Kr = null), Yr !== null && wu(Yr) && (Yr = null), qr !== null && wu(qr) && (qr = null), Os.forEach(b0), Ms.forEach(b0);
}
function Ia(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qp || (Qp = !0, Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, UE)));
}
function Is(e) {
  function t(o) {
    return Ia(o, e);
  }
  if (0 < Nl.length) {
    Ia(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kr !== null && Ia(Kr, e), Yr !== null && Ia(Yr, e), qr !== null && Ia(qr, e), Os.forEach(t), Ms.forEach(t), n = 0; n < Vr.length; n++)
    r = Vr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && (n = Vr[0], n.blockedOn === null); )
    yx(n), n.blockedOn === null && Vr.shift();
}
var Vi = Er.ReactCurrentBatchConfig, nc = !0;
function GE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 1, Dm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function KE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 4, Dm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function Dm(e, t, n, r) {
  if (nc) {
    var o = Zp(e, t, n, r);
    if (o === null)
      Pf(e, t, r, rc, n), y0(e, r);
    else if (HE(o, e, t, n, r))
      r.stopPropagation();
    else if (y0(e, r), t & 4 && -1 < WE.indexOf(e)) {
      for (; o !== null; ) {
        var i = ul(o);
        if (i !== null && hx(i), i = Zp(e, t, n, r), i === null && Pf(e, t, r, rc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Pf(e, t, r, null, n);
  }
}
var rc = null;
function Zp(e, t, n, r) {
  if (rc = null, e = Im(r), e = Oo(e), e !== null)
    if (t = Xo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = ax(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return rc = e, null;
}
function bx(e) {
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
      switch (AE()) {
        case Rm:
          return 1;
        case cx:
          return 4;
        case ec:
        case DE:
          return 16;
        case dx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null, Fm = null, Cu = null;
function Sx() {
  if (Cu)
    return Cu;
  var e, t = Fm, n = t.length, r, o = "value" in Ur ? Ur.value : Ur.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Cu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ku(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function jl() {
  return !0;
}
function S0() {
  return !1;
}
function tn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? jl : S0, this.isPropagationStopped = S0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jl);
  }, persist: function() {
  }, isPersistent: jl }), t;
}
var ba = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lm = tn(ba), ll = Ve({}, ba, { view: 0, detail: 0 }), YE = tn(ll), vf, gf, Ra, ed = Ve({}, ll, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ra && (Ra && e.type === "mousemove" ? (vf = e.screenX - Ra.screenX, gf = e.screenY - Ra.screenY) : gf = vf = 0, Ra = e), vf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gf;
} }), x0 = tn(ed), qE = Ve({}, ed, { dataTransfer: 0 }), XE = tn(qE), QE = Ve({}, ll, { relatedTarget: 0 }), yf = tn(QE), ZE = Ve({}, ba, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), JE = tn(ZE), eO = Ve({}, ba, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), tO = tn(eO), nO = Ve({}, ba, { data: 0 }), w0 = tn(nO), rO = {
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
}, oO = {
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
}, iO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function aO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = iO[e]) ? !!t[e] : !1;
}
function zm() {
  return aO;
}
var sO = Ve({}, ll, { key: function(e) {
  if (e.key) {
    var t = rO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ku(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zm, charCode: function(e) {
  return e.type === "keypress" ? ku(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ku(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), lO = tn(sO), uO = Ve({}, ed, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), C0 = tn(uO), cO = Ve({}, ll, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zm }), dO = tn(cO), fO = Ve({}, ba, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pO = tn(fO), hO = Ve({}, ed, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mO = tn(hO), vO = [9, 13, 27, 32], Nm = xr && "CompositionEvent" in window, is = null;
xr && "documentMode" in document && (is = document.documentMode);
var gO = xr && "TextEvent" in window && !is, xx = xr && (!Nm || is && 8 < is && 11 >= is), k0 = " ", P0 = !1;
function wx(e, t) {
  switch (e) {
    case "keyup":
      return vO.indexOf(t.keyCode) !== -1;
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
function Cx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mi = !1;
function yO(e, t) {
  switch (e) {
    case "compositionend":
      return Cx(t);
    case "keypress":
      return t.which !== 32 ? null : (P0 = !0, k0);
    case "textInput":
      return e = t.data, e === k0 && P0 ? null : e;
    default:
      return null;
  }
}
function bO(e, t) {
  if (mi)
    return e === "compositionend" || !Nm && wx(e, t) ? (e = Sx(), Cu = Fm = Ur = null, mi = !1, e) : null;
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
      return xx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var SO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function T0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!SO[e.type] : t === "textarea";
}
function kx(e, t, n, r) {
  tx(r), t = oc(t, "onChange"), 0 < t.length && (n = new Lm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var as = null, Rs = null;
function xO(e) {
  Dx(e, 0);
}
function td(e) {
  var t = yi(e);
  if (YS(t))
    return e;
}
function wO(e, t) {
  if (e === "change")
    return t;
}
var Px = !1;
if (xr) {
  var bf;
  if (xr) {
    var Sf = "oninput" in document;
    if (!Sf) {
      var _0 = document.createElement("div");
      _0.setAttribute("oninput", "return;"), Sf = typeof _0.oninput == "function";
    }
    bf = Sf;
  } else
    bf = !1;
  Px = bf && (!document.documentMode || 9 < document.documentMode);
}
function E0() {
  as && (as.detachEvent("onpropertychange", Tx), Rs = as = null);
}
function Tx(e) {
  if (e.propertyName === "value" && td(Rs)) {
    var t = [];
    kx(t, Rs, e, Im(e)), ix(xO, t);
  }
}
function CO(e, t, n) {
  e === "focusin" ? (E0(), as = t, Rs = n, as.attachEvent("onpropertychange", Tx)) : e === "focusout" && E0();
}
function kO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return td(Rs);
}
function PO(e, t) {
  if (e === "click")
    return td(t);
}
function TO(e, t) {
  if (e === "input" || e === "change")
    return td(t);
}
function _O(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ln = typeof Object.is == "function" ? Object.is : _O;
function $s(e, t) {
  if (Ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ap.call(t, o) || !Ln(e[o], t[o]))
      return !1;
  }
  return !0;
}
function O0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function M0(e, t) {
  var n = O0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = O0(n);
  }
}
function _x(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _x(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ex() {
  for (var e = window, t = Qu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Qu(e.document);
  }
  return t;
}
function jm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function EO(e) {
  var t = Ex(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _x(n.ownerDocument.documentElement, n)) {
    if (r !== null && jm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = M0(n, i);
        var a = M0(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var OO = xr && "documentMode" in document && 11 >= document.documentMode, vi = null, Jp = null, ss = null, eh = !1;
function I0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eh || vi == null || vi !== Qu(r) || (r = vi, "selectionStart" in r && jm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ss && $s(ss, r) || (ss = r, r = oc(Jp, "onSelect"), 0 < r.length && (t = new Lm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vi)));
}
function Vl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gi = { animationend: Vl("Animation", "AnimationEnd"), animationiteration: Vl("Animation", "AnimationIteration"), animationstart: Vl("Animation", "AnimationStart"), transitionend: Vl("Transition", "TransitionEnd") }, xf = {}, Ox = {};
xr && (Ox = document.createElement("div").style, "AnimationEvent" in window || (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation), "TransitionEvent" in window || delete gi.transitionend.transition);
function nd(e) {
  if (xf[e])
    return xf[e];
  if (!gi[e])
    return e;
  var t = gi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ox)
      return xf[e] = t[n];
  return e;
}
var Mx = nd("animationend"), Ix = nd("animationiteration"), Rx = nd("animationstart"), $x = nd("transitionend"), Ax = /* @__PURE__ */ new Map(), R0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function uo(e, t) {
  Ax.set(e, t), qo(t, [e]);
}
for (var wf = 0; wf < R0.length; wf++) {
  var Cf = R0[wf], MO = Cf.toLowerCase(), IO = Cf[0].toUpperCase() + Cf.slice(1);
  uo(MO, "on" + IO);
}
uo(Mx, "onAnimationEnd");
uo(Ix, "onAnimationIteration");
uo(Rx, "onAnimationStart");
uo("dblclick", "onDoubleClick");
uo("focusin", "onFocus");
uo("focusout", "onBlur");
uo($x, "onTransitionEnd");
Zi("onMouseEnter", ["mouseout", "mouseover"]);
Zi("onMouseLeave", ["mouseout", "mouseover"]);
Zi("onPointerEnter", ["pointerout", "pointerover"]);
Zi("onPointerLeave", ["pointerout", "pointerover"]);
qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ya = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), RO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));
function $0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ME(r, t, void 0, e), e.currentTarget = null;
}
function Dx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          $0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          $0(o, s, u), i = l;
        }
    }
  }
  if (Ju)
    throw e = qp, Ju = !1, qp = null, e;
}
function Oe(e, t) {
  var n = t[ih];
  n === void 0 && (n = t[ih] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fx(t, e, 2, !1), n.add(r));
}
function kf(e, t, n) {
  var r = 0;
  t && (r |= 4), Fx(n, e, r, t);
}
var Bl = "_reactListening" + Math.random().toString(36).slice(2);
function As(e) {
  if (!e[Bl]) {
    e[Bl] = !0, WS.forEach(function(n) {
      n !== "selectionchange" && (RO.has(n) || kf(n, !1, e), kf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bl] || (t[Bl] = !0, kf("selectionchange", !1, t));
  }
}
function Fx(e, t, n, r) {
  switch (bx(t)) {
    case 1:
      var o = GE;
      break;
    case 4:
      o = KE;
      break;
    default:
      o = Dm;
  }
  n = o.bind(null, t, n, e), o = void 0, !Yp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = Oo(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  ix(function() {
    var u = i, c = Im(n), d = [];
    e: {
      var f = Ax.get(e);
      if (f !== void 0) {
        var p = Lm, y = e;
        switch (e) {
          case "keypress":
            if (ku(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = lO;
            break;
          case "focusin":
            y = "focus", p = yf;
            break;
          case "focusout":
            y = "blur", p = yf;
            break;
          case "beforeblur":
          case "afterblur":
            p = yf;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = x0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = XE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = dO;
            break;
          case Mx:
          case Ix:
          case Rx:
            p = JE;
            break;
          case $x:
            p = pO;
            break;
          case "scroll":
            p = YE;
            break;
          case "wheel":
            p = mO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = tO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = C0;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, b; h !== null; ) {
          b = h;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, m !== null && (x = Es(h, m), x != null && g.push(Ds(h, x, b)))), S)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Gp && (y = n.relatedTarget || n.fromElement) && (Oo(y) || y[wr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Oo(y) : null, y !== null && (S = Xo(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (g = x0, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = C0, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = p == null ? f : yi(p), b = y == null ? f : yi(y), f = new g(x, h + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, Oo(c) === u && (g = new g(m, h + "enter", y, n, c), g.target = b, g.relatedTarget = S, x = g), S = x, p && y)
            t: {
              for (g = p, m = y, h = 0, b = g; b; b = ii(b))
                h++;
              for (b = 0, x = m; x; x = ii(x))
                b++;
              for (; 0 < h - b; )
                g = ii(g), h--;
              for (; 0 < b - h; )
                m = ii(m), b--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = ii(g), m = ii(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && A0(d, f, p, g, !1), y !== null && S !== null && A0(d, S, y, g, !0);
        }
      }
      e: {
        if (f = u ? yi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = wO;
        else if (T0(f))
          if (Px)
            k = TO;
          else {
            k = kO;
            var P = CO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = PO);
        if (k && (k = k(e, u))) {
          kx(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Vp(f, "number", f.value);
      }
      switch (P = u ? yi(u) : window, e) {
        case "focusin":
          (T0(P) || P.contentEditable === "true") && (vi = P, Jp = u, ss = null);
          break;
        case "focusout":
          ss = Jp = vi = null;
          break;
        case "mousedown":
          eh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          eh = !1, I0(d, n, c);
          break;
        case "selectionchange":
          if (OO)
            break;
        case "keydown":
        case "keyup":
          I0(d, n, c);
      }
      var T;
      if (Nm)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        mi ? wx(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (xx && n.locale !== "ko" && (mi || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && mi && (T = Sx()) : (Ur = c, Fm = "value" in Ur ? Ur.value : Ur.textContent, mi = !0)), P = oc(u, _), 0 < P.length && (_ = new w0(_, e, null, n, c), d.push({ event: _, listeners: P }), T ? _.data = T : (T = Cx(n), T !== null && (_.data = T)))), (T = gO ? yO(e, n) : bO(e, n)) && (u = oc(u, "onBeforeInput"), 0 < u.length && (c = new w0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    Dx(d, t);
  });
}
function Ds(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(Ds(e, i, o)), i = Es(e, t), i != null && r.push(Ds(e, i, o))), e = e.return;
  }
  return r;
}
function ii(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function A0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Es(n, i), l != null && a.unshift(Ds(n, l, s))) : o || (l = Es(n, i), l != null && a.push(Ds(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var $O = /\r\n?/g, AO = /\u0000|\uFFFD/g;
function D0(e) {
  return (typeof e == "string" ? e : "" + e).replace($O, `
`).replace(AO, "");
}
function Wl(e, t, n) {
  if (t = D0(t), D0(e) !== t && n)
    throw Error(F(425));
}
function ic() {
}
var th = null, nh = null;
function rh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var oh = typeof setTimeout == "function" ? setTimeout : void 0, DO = typeof clearTimeout == "function" ? clearTimeout : void 0, F0 = typeof Promise == "function" ? Promise : void 0, FO = typeof queueMicrotask == "function" ? queueMicrotask : typeof F0 < "u" ? function(e) {
  return F0.resolve(null).then(e).catch(LO);
} : oh;
function LO(e) {
  setTimeout(function() {
    throw e;
  });
}
function Tf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Is(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Is(t);
}
function Xr(e) {
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
function L0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sa = Math.random().toString(36).slice(2), Kn = "__reactFiber$" + Sa, Fs = "__reactProps$" + Sa, wr = "__reactContainer$" + Sa, ih = "__reactEvents$" + Sa, zO = "__reactListeners$" + Sa, NO = "__reactHandles$" + Sa;
function Oo(e) {
  var t = e[Kn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wr] || n[Kn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = L0(e); e !== null; ) {
          if (n = e[Kn])
            return n;
          e = L0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ul(e) {
  return e = e[Kn] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function rd(e) {
  return e[Fs] || null;
}
var ah = [], bi = -1;
function co(e) {
  return { current: e };
}
function Re(e) {
  0 > bi || (e.current = ah[bi], ah[bi] = null, bi--);
}
function Te(e, t) {
  bi++, ah[bi] = e.current, e.current = t;
}
var io = {}, wt = co(io), At = co(!1), Bo = io;
function Ji(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return io;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Dt(e) {
  return e = e.childContextTypes, e != null;
}
function ac() {
  Re(At), Re(wt);
}
function z0(e, t, n) {
  if (wt.current !== io)
    throw Error(F(168));
  Te(wt, t), Te(At, n);
}
function Lx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, CE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function sc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || io, Bo = wt.current, Te(wt, e), Te(At, At.current), !0;
}
function N0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Lx(e, t, Bo), r.__reactInternalMemoizedMergedChildContext = e, Re(At), Re(wt), Te(wt, e)) : Re(At), Te(At, n);
}
var ur = null, od = !1, _f = !1;
function zx(e) {
  ur === null ? ur = [e] : ur.push(e);
}
function jO(e) {
  od = !0, zx(e);
}
function fo() {
  if (!_f && ur !== null) {
    _f = !0;
    var e = 0, t = xe;
    try {
      var n = ur;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ur = null, od = !1;
    } catch (o) {
      throw ur !== null && (ur = ur.slice(e + 1)), ux(Rm, fo), o;
    } finally {
      xe = t, _f = !1;
    }
  }
  return null;
}
var Si = [], xi = 0, lc = null, uc = 0, fn = [], pn = 0, Wo = null, fr = 1, pr = "";
function wo(e, t) {
  Si[xi++] = uc, Si[xi++] = lc, lc = e, uc = t;
}
function Nx(e, t, n) {
  fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Wo, Wo = e;
  var r = fr;
  e = pr;
  var o = 32 - $n(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $n(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, fr = 1 << 32 - $n(t) + o | n << o | r, pr = i + e;
  } else
    fr = 1 << i | n << o | r, pr = e;
}
function Vm(e) {
  e.return !== null && (wo(e, 1), Nx(e, 1, 0));
}
function Bm(e) {
  for (; e === lc; )
    lc = Si[--xi], Si[xi] = null, uc = Si[--xi], Si[xi] = null;
  for (; e === Wo; )
    Wo = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null, fr = fn[--pn], fn[pn] = null;
}
var Yt = null, Kt = null, De = !1, Mn = null;
function jx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function j0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Yt = e, Kt = Xr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Yt = e, Kt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wo !== null ? { id: fr, overflow: pr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Yt = e, Kt = null, !0) : !1;
    default:
      return !1;
  }
}
function sh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lh(e) {
  if (De) {
    var t = Kt;
    if (t) {
      var n = t;
      if (!j0(e, t)) {
        if (sh(e))
          throw Error(F(418));
        t = Xr(n.nextSibling);
        var r = Yt;
        t && j0(e, t) ? jx(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, Yt = e);
      }
    } else {
      if (sh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, De = !1, Yt = e;
    }
  }
}
function V0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Yt = e;
}
function Hl(e) {
  if (e !== Yt)
    return !1;
  if (!De)
    return V0(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rh(e.type, e.memoizedProps)), t && (t = Kt)) {
    if (sh(e))
      throw Vx(), Error(F(418));
    for (; t; )
      jx(e, t), t = Xr(t.nextSibling);
  }
  if (V0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Kt = Xr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Kt = null;
    }
  } else
    Kt = Yt ? Xr(e.stateNode.nextSibling) : null;
  return !0;
}
function Vx() {
  for (var e = Kt; e; )
    e = Xr(e.nextSibling);
}
function ea() {
  Kt = Yt = null, De = !1;
}
function Wm(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
var VO = Er.ReactCurrentBatchConfig;
function En(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var cc = co(null), dc = null, wi = null, Hm = null;
function Um() {
  Hm = wi = dc = null;
}
function Gm(e) {
  var t = cc.current;
  Re(cc), e._currentValue = t;
}
function uh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Bi(e, t) {
  dc = e, Hm = wi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($t = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (Hm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, wi === null) {
      if (dc === null)
        throw Error(F(308));
      wi = e, dc.dependencies = { lanes: 0, firstContext: e };
    } else
      wi = wi.next = e;
  return t;
}
var Mo = null;
function Km(e) {
  Mo === null ? Mo = [e] : Mo.push(e);
}
function Bx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Km(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cr(e, r);
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function Ym(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, he & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Km(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cr(e, n);
}
function Pu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $m(e, n);
  }
}
function B0(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function fc(e, t, n, r) {
  var o = e.updateQueue;
  Nr = !1;
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
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, g = s;
          switch (f = t, p = n, g.tag) {
            case 1:
              if (y = g.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = g.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null)
                break e;
              d = Ve({}, d, f);
              break e;
            case 2:
              Nr = !0;
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
    Uo |= a, e.lanes = a, e.memoizedState = d;
  }
}
function W0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var Hx = new BS.Component().refs;
function ch(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var id = { isMounted: function(e) {
  return (e = e._reactInternals) ? Xo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Pu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Pu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _t(), r = Jr(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qr(e, o, r), t !== null && (An(t, e, r, n), Pu(t, e, r));
} };
function H0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !$s(n, r) || !$s(o, i) : !0;
}
function Ux(e, t, n) {
  var r = !1, o = io, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Dt(t) ? Bo : wt.current, r = t.contextTypes, i = (r = r != null) ? Ji(e, o) : io), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = id, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function U0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && id.enqueueReplaceState(t, t.state, null);
}
function dh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Hx, Ym(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Dt(t) ? Bo : wt.current, o.context = Ji(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ch(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && id.enqueueReplaceState(o, o.state, null), fc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function $a(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(F(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === Hx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Ul(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function G0(e) {
  var t = e._init;
  return t(e._payload);
}
function Gx(e) {
  function t(m, h) {
    if (e) {
      var b = m.deletions;
      b === null ? (m.deletions = [h], m.flags |= 16) : b.push(h);
    }
  }
  function n(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = eo(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, b) {
    return m.index = b, e ? (b = m.alternate, b !== null ? (b = b.index, b < h ? (m.flags |= 2, h) : b) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, b, x) {
    return h === null || h.tag !== 6 ? (h = Af(b, m.mode, x), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function l(m, h, b, x) {
    var k = b.type;
    return k === hi ? c(m, h, b.props.children, x, b.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && G0(k) === h.type) ? (x = o(h, b.props), x.ref = $a(m, h, b), x.return = m, x) : (x = Iu(b.type, b.key, b.props, null, m.mode, x), x.ref = $a(m, h, b), x.return = m, x);
  }
  function u(m, h, b, x) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = Df(b, m.mode, x), h.return = m, h) : (h = o(h, b.children || []), h.return = m, h);
  }
  function c(m, h, b, x, k) {
    return h === null || h.tag !== 7 ? (h = Fo(b, m.mode, x, k), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function d(m, h, b) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Af("" + h, m.mode, b), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Al:
          return b = Iu(h.type, h.key, h.props, null, m.mode, b), b.ref = $a(m, null, h), b.return = m, b;
        case pi:
          return h = Df(h, m.mode, b), h.return = m, h;
        case zr:
          var x = h._init;
          return d(m, x(h._payload), b);
      }
      if (Ga(h) || Ea(h))
        return h = Fo(h, m.mode, b, null), h.return = m, h;
      Ul(m, h);
    }
    return null;
  }
  function f(m, h, b, x) {
    var k = h !== null ? h.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(m, h, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Al:
          return b.key === k ? l(m, h, b, x) : null;
        case pi:
          return b.key === k ? u(m, h, b, x) : null;
        case zr:
          return k = b._init, f(
            m,
            h,
            k(b._payload),
            x
          );
      }
      if (Ga(b) || Ea(b))
        return k !== null ? null : c(m, h, b, x, null);
      Ul(m, b);
    }
    return null;
  }
  function p(m, h, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return m = m.get(b) || null, s(h, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Al:
          return m = m.get(x.key === null ? b : x.key) || null, l(h, m, x, k);
        case pi:
          return m = m.get(x.key === null ? b : x.key) || null, u(h, m, x, k);
        case zr:
          var P = x._init;
          return p(m, h, b, P(x._payload), k);
      }
      if (Ga(x) || Ea(x))
        return m = m.get(b) || null, c(h, m, x, k, null);
      Ul(h, x);
    }
    return null;
  }
  function y(m, h, b, x) {
    for (var k = null, P = null, T = h, _ = h = 0, M = null; T !== null && _ < b.length; _++) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var I = f(m, T, b[_], x);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(m, T), h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I, T = M;
    }
    if (_ === b.length)
      return n(m, T), De && wo(m, _), k;
    if (T === null) {
      for (; _ < b.length; _++)
        T = d(m, b[_], x), T !== null && (h = i(T, h, _), P === null ? k = T : P.sibling = T, P = T);
      return De && wo(m, _), k;
    }
    for (T = r(m, T); _ < b.length; _++)
      M = p(T, m, _, b[_], x), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? _ : M.key), h = i(M, h, _), P === null ? k = M : P.sibling = M, P = M);
    return e && T.forEach(function(D) {
      return t(m, D);
    }), De && wo(m, _), k;
  }
  function g(m, h, b, x) {
    var k = Ea(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, T = h, _ = h = 0, M = null, I = b.next(); T !== null && !I.done; _++, I = b.next()) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var D = f(m, T, I.value, x);
      if (D === null) {
        T === null && (T = M);
        break;
      }
      e && T && D.alternate === null && t(m, T), h = i(D, h, _), P === null ? k = D : P.sibling = D, P = D, T = M;
    }
    if (I.done)
      return n(
        m,
        T
      ), De && wo(m, _), k;
    if (T === null) {
      for (; !I.done; _++, I = b.next())
        I = d(m, I.value, x), I !== null && (h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I);
      return De && wo(m, _), k;
    }
    for (T = r(m, T); !I.done; _++, I = b.next())
      I = p(T, m, _, I.value, x), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? _ : I.key), h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I);
    return e && T.forEach(function(G) {
      return t(m, G);
    }), De && wo(m, _), k;
  }
  function S(m, h, b, x) {
    if (typeof b == "object" && b !== null && b.type === hi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Al:
          e: {
            for (var k = b.key, P = h; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === hi) {
                  if (P.tag === 7) {
                    n(m, P.sibling), h = o(P, b.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && G0(k) === P.type) {
                  n(m, P.sibling), h = o(P, b.props), h.ref = $a(m, P, b), h.return = m, m = h;
                  break e;
                }
                n(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            b.type === hi ? (h = Fo(b.props.children, m.mode, x, b.key), h.return = m, m = h) : (x = Iu(b.type, b.key, b.props, null, m.mode, x), x.ref = $a(m, h, b), x.return = m, m = x);
          }
          return a(m);
        case pi:
          e: {
            for (P = b.key; h !== null; ) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === b.containerInfo && h.stateNode.implementation === b.implementation) {
                  n(m, h.sibling), h = o(h, b.children || []), h.return = m, m = h;
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Df(b, m.mode, x), h.return = m, m = h;
          }
          return a(m);
        case zr:
          return P = b._init, S(m, h, P(b._payload), x);
      }
      if (Ga(b))
        return y(m, h, b, x);
      if (Ea(b))
        return g(m, h, b, x);
      Ul(m, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, b), h.return = m, m = h) : (n(m, h), h = Af(b, m.mode, x), h.return = m, m = h), a(m)) : n(m, h);
  }
  return S;
}
var ta = Gx(!0), Kx = Gx(!1), cl = {}, Qn = co(cl), Ls = co(cl), zs = co(cl);
function Io(e) {
  if (e === cl)
    throw Error(F(174));
  return e;
}
function qm(e, t) {
  switch (Te(zs, t), Te(Ls, e), Te(Qn, cl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wp(t, e);
  }
  Re(Qn), Te(Qn, t);
}
function na() {
  Re(Qn), Re(Ls), Re(zs);
}
function Yx(e) {
  Io(zs.current);
  var t = Io(Qn.current), n = Wp(t, e.type);
  t !== n && (Te(Ls, e), Te(Qn, n));
}
function Xm(e) {
  Ls.current === e && (Re(Qn), Re(Ls));
}
var ze = co(0);
function pc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
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
var Ef = [];
function Qm() {
  for (var e = 0; e < Ef.length; e++)
    Ef[e]._workInProgressVersionPrimary = null;
  Ef.length = 0;
}
var Tu = Er.ReactCurrentDispatcher, Of = Er.ReactCurrentBatchConfig, Ho = 0, je = null, tt = null, it = null, hc = !1, ls = !1, Ns = 0, BO = 0;
function gt() {
  throw Error(F(321));
}
function Zm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n]))
      return !1;
  return !0;
}
function Jm(e, t, n, r, o, i) {
  if (Ho = i, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tu.current = e === null || e.memoizedState === null ? GO : KO, e = n(r, o), ls) {
    i = 0;
    do {
      if (ls = !1, Ns = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Tu.current = YO, e = n(r, o);
    } while (ls);
  }
  if (Tu.current = mc, t = tt !== null && tt.next !== null, Ho = 0, it = tt = je = null, hc = !1, t)
    throw Error(F(300));
  return e;
}
function ev() {
  var e = Ns !== 0;
  return Ns = 0, e;
}
function Bn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? je.memoizedState = it = e : it = it.next = e, it;
}
function bn() {
  if (tt === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = tt.next;
  var t = it === null ? je.memoizedState : it.next;
  if (t !== null)
    it = t, tt = e;
  else {
    if (e === null)
      throw Error(F(310));
    tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, it === null ? je.memoizedState = it = e : it = it.next = e;
  }
  return it;
}
function js(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mf(e) {
  var t = bn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = tt, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Ho & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, je.lanes |= c, Uo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Ln(r, t.memoizedState) || ($t = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, je.lanes |= i, Uo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function If(e) {
  var t = bn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    Ln(i, t.memoizedState) || ($t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function qx() {
}
function Xx(e, t) {
  var n = je, r = bn(), o = t(), i = !Ln(r.memoizedState, o);
  if (i && (r.memoizedState = o, $t = !0), r = r.queue, tv(Jx.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vs(9, Zx.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ho & 30 || Qx(n, t, o);
  }
  return o;
}
function Qx(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zx(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ew(t) && tw(e);
}
function Jx(e, t, n) {
  return n(function() {
    ew(t) && tw(e);
  });
}
function ew(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function tw(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function K0(e) {
  var t = Bn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: js, lastRenderedState: e }, t.queue = e, e = e.dispatch = UO.bind(null, je, e), [t.memoizedState, e];
}
function Vs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nw() {
  return bn().memoizedState;
}
function _u(e, t, n, r) {
  var o = Bn();
  je.flags |= e, o.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r);
}
function ad(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && Zm(r, a.deps)) {
      o.memoizedState = Vs(t, n, i, r);
      return;
    }
  }
  je.flags |= e, o.memoizedState = Vs(1 | t, n, i, r);
}
function Y0(e, t) {
  return _u(8390656, 8, e, t);
}
function tv(e, t) {
  return ad(2048, 8, e, t);
}
function rw(e, t) {
  return ad(4, 2, e, t);
}
function ow(e, t) {
  return ad(4, 4, e, t);
}
function iw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function aw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ad(4, 4, iw.bind(null, t, e), n);
}
function nv() {
}
function sw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function uw(e, t, n) {
  return Ho & 21 ? (Ln(n, t) || (n = fx(), je.lanes |= n, Uo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $t = !0), e.memoizedState = n);
}
function WO(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Of.transition;
  Of.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, Of.transition = r;
  }
}
function cw() {
  return bn().memoizedState;
}
function HO(e, t, n) {
  var r = Jr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dw(e))
    fw(t, n);
  else if (n = Bx(e, t, n, r), n !== null) {
    var o = _t();
    An(n, e, r, o), pw(n, t, r);
  }
}
function UO(e, t, n) {
  var r = Jr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dw(e))
    fw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Ln(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Km(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Bx(e, t, o, r), n !== null && (o = _t(), An(n, e, r, o), pw(n, t, r));
  }
}
function dw(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function fw(e, t) {
  ls = hc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $m(e, n);
  }
}
var mc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, GO = { readContext: yn, useCallback: function(e, t) {
  return Bn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: Y0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _u(
    4194308,
    4,
    iw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _u(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _u(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Bn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Bn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = HO.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Bn();
  return e = { current: e }, t.memoizedState = e;
}, useState: K0, useDebugValue: nv, useDeferredValue: function(e) {
  return Bn().memoizedState = e;
}, useTransition: function() {
  var e = K0(!1), t = e[0];
  return e = WO.bind(null, e[1]), Bn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, o = Bn();
  if (De) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Ho & 30 || Qx(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Y0(Jx.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Vs(9, Zx.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Bn(), t = st.identifierPrefix;
  if (De) {
    var n = pr, r = fr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ns++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = BO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, KO = {
  readContext: yn,
  useCallback: sw,
  useContext: yn,
  useEffect: tv,
  useImperativeHandle: aw,
  useInsertionEffect: rw,
  useLayoutEffect: ow,
  useMemo: lw,
  useReducer: Mf,
  useRef: nw,
  useState: function() {
    return Mf(js);
  },
  useDebugValue: nv,
  useDeferredValue: function(e) {
    var t = bn();
    return uw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Mf(js)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: qx,
  useSyncExternalStore: Xx,
  useId: cw,
  unstable_isNewReconciler: !1
}, YO = { readContext: yn, useCallback: sw, useContext: yn, useEffect: tv, useImperativeHandle: aw, useInsertionEffect: rw, useLayoutEffect: ow, useMemo: lw, useReducer: If, useRef: nw, useState: function() {
  return If(js);
}, useDebugValue: nv, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : uw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = If(js)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: qx, useSyncExternalStore: Xx, useId: cw, unstable_isNewReconciler: !1 };
function ra(e, t) {
  try {
    var n = "", r = t;
    do
      n += wE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Rf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qO = typeof WeakMap == "function" ? WeakMap : Map;
function hw(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gc || (gc = !0, wh = r), fh(e, t);
  }, n;
}
function mw(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      fh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    fh(e, t), typeof r != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function q0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qO();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = uM.bind(null, e, t, n), t.then(e, e));
}
function X0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Q0(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e);
}
var XO = Er.ReactCurrentOwner, $t = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? Kx(t, null, n, r) : ta(t, e.child, n, r);
}
function Z0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Bi(t, o), r = Jm(e, t, n, r, i, o), n = ev(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && n && Vm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function J0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !cv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, vw(e, t, i, r, o)) : (e = Iu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $s, n(a, r) && e.ref === t.ref)
      return kr(e, t, o);
  }
  return t.flags |= 1, e = eo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($s(i, r) && e.ref === t.ref)
      if ($t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && ($t = !0);
      else
        return t.lanes = e.lanes, kr(e, t, o);
  }
  return ph(e, t, n, r, o);
}
function gw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(ki, Ut), Ut |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Te(ki, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Te(ki, Ut), Ut |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Te(ki, Ut), Ut |= r;
  return Pt(e, t, o, n), t.child;
}
function yw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ph(e, t, n, r, o) {
  var i = Dt(n) ? Bo : wt.current;
  return i = Ji(t, i), Bi(t, o), n = Jm(e, t, n, r, i, o), r = ev(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && r && Vm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function ey(e, t, n, r, o) {
  if (Dt(n)) {
    var i = !0;
    sc(t);
  } else
    i = !1;
  if (Bi(t, o), t.stateNode === null)
    Eu(e, t), Ux(t, n, r), dh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Dt(n) ? Bo : wt.current, u = Ji(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && U0(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, fc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || At.current || Nr ? (typeof c == "function" && (ch(t, n, c, r), l = t.memoizedState), (s = Nr || H0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Wx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : En(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Dt(n) ? Bo : wt.current, l = Ji(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && U0(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, fc(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || At.current || Nr ? (typeof p == "function" && (ch(t, n, p, r), y = t.memoizedState), (u = Nr || H0(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return hh(e, t, n, r, i, o);
}
function hh(e, t, n, r, o, i) {
  yw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && N0(t, n, !1), kr(e, t, i);
  r = t.stateNode, XO.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = ta(t, e.child, null, i), t.child = ta(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && N0(t, n, !0), t.child;
}
function bw(e) {
  var t = e.stateNode;
  t.pendingContext ? z0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && z0(e, t.context, !1), qm(e, t.containerInfo);
}
function ty(e, t, n, r, o) {
  return ea(), Wm(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var mh = { dehydrated: null, treeContext: null, retryLane: 0 };
function vh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sw(e, t, n) {
  var r = t.pendingProps, o = ze.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(ze, o & 1), e === null)
    return lh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = ud(a, r, 0, null), e = Fo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = vh(n), t.memoizedState = mh, e) : rv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return QO(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = eo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = eo(s, i) : (i = Fo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? vh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = mh, r;
  }
  return i = e.child, e = i.sibling, r = eo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function rv(e, t) {
  return t = ud({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gl(e, t, n, r) {
  return r !== null && Wm(r), ta(t, e.child, null, n), e = rv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function QO(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Rf(Error(F(422))), Gl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ud({ mode: "visible", children: r.children }, o, 0, null), i = Fo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ta(t, e.child, null, a), t.child.memoizedState = vh(a), t.memoizedState = mh, i);
  if (!(t.mode & 1))
    return Gl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Rf(i, r, void 0), Gl(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, $t || s) {
    if (r = st, r !== null) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cr(e, o), An(r, e, o, -1));
    }
    return uv(), r = Rf(Error(F(421))), Gl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Kt = Xr(o.nextSibling), Yt = t, De = !0, Mn = null, e !== null && (fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Wo, fr = e.id, pr = e.overflow, Wo = t), t = rv(t, r.children), t.flags |= 4096, t);
}
function ny(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), uh(e.return, t, n);
}
function $f(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function xw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = ze.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ny(e, n, t);
          else if (e.tag === 19)
            ny(e, n, t);
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
    r &= 1;
  }
  if (Te(ze, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && pc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), $f(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && pc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        $f(t, !0, n, null, i);
        break;
      case "together":
        $f(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Eu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Uo |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = eo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = eo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ZO(e, t, n) {
  switch (t.tag) {
    case 3:
      bw(t), ea();
      break;
    case 5:
      Yx(t);
      break;
    case 1:
      Dt(t.type) && sc(t);
      break;
    case 4:
      qm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(cc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sw(e, t, n) : (Te(ze, ze.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
      Te(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return xw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(ze, ze.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gw(e, t, n);
  }
  return kr(e, t, n);
}
var ww, gh, Cw, kw;
ww = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
gh = function() {
};
Cw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Io(Qn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Np(e, o), r = Np(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Bp(e, o), r = Bp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ic);
    }
    Hp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ts.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ts.hasOwnProperty(u) ? (l != null && u === "onScroll" && Oe("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Aa(e, t) {
  if (!De)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function yt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function JO(e, t, n) {
  var r = t.pendingProps;
  switch (Bm(t), t.tag) {
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
      return yt(t), null;
    case 1:
      return Dt(t.type) && ac(), yt(t), null;
    case 3:
      return r = t.stateNode, na(), Re(At), Re(wt), Qm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (Ph(Mn), Mn = null))), gh(e, t), yt(t), null;
    case 5:
      Xm(t);
      var o = Io(zs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Cw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Io(Qn.current), Hl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Kn] = t, r[Fs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Oe("cancel", r), Oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ya.length; o++)
                Oe(Ya[o], r);
              break;
            case "source":
              Oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Oe(
                "error",
                r
              ), Oe("load", r);
              break;
            case "details":
              Oe("toggle", r);
              break;
            case "input":
              d0(r, i), Oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Oe("invalid", r);
              break;
            case "textarea":
              p0(r, i), Oe("invalid", r);
          }
          Hp(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Wl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Wl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ts.hasOwnProperty(a) && s != null && a === "onScroll" && Oe("scroll", r);
            }
          switch (n) {
            case "input":
              Dl(r), f0(r, i, !0);
              break;
            case "textarea":
              Dl(r), h0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ic);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = QS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Kn] = t, e[Fs] = r, ww(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Up(n, r), n) {
              case "dialog":
                Oe("cancel", e), Oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ya.length; o++)
                  Oe(Ya[o], e);
                o = r;
                break;
              case "source":
                Oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Oe(
                  "error",
                  e
                ), Oe("load", e), o = r;
                break;
              case "details":
                Oe("toggle", e), o = r;
                break;
              case "input":
                d0(e, r), o = Np(e, r), Oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Oe("invalid", e);
                break;
              case "textarea":
                p0(e, r), o = Bp(e, r), Oe("invalid", e);
                break;
              default:
                o = r;
            }
            Hp(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? ex(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ZS(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _s(e, l) : typeof l == "number" && _s(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ts.hasOwnProperty(i) ? l != null && i === "onScroll" && Oe("scroll", e) : l != null && _m(e, i, l, a));
              }
            switch (n) {
              case "input":
                Dl(e), f0(e, r, !1);
                break;
              case "textarea":
                Dl(e), h0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + oo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? zi(e, !!r.multiple, i, !1) : r.defaultValue != null && zi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ic);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return yt(t), null;
    case 6:
      if (e && t.stateNode != null)
        kw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Io(zs.current), Io(Qn.current), Hl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Kn] = t, (i = r.nodeValue !== n) && (e = Yt, e !== null))
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Kn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Re(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Kt !== null && t.mode & 1 && !(t.flags & 128))
          Vx(), ea(), t.flags |= 98560, i = !1;
        else if (i = Hl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Kn] = t;
          } else
            ea(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), i = !1;
        } else
          Mn !== null && (Ph(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? nt === 0 && (nt = 3) : uv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return na(), gh(e, t), e === null && As(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return Gm(t.type._context), yt(t), null;
    case 17:
      return Dt(t.type) && ac(), yt(t), null;
    case 19:
      if (Re(ze), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Aa(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = pc(e), a !== null) {
                for (t.flags |= 128, Aa(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(ze, ze.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > oa && (t.flags |= 128, r = !0, Aa(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = pc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Aa(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > oa && n !== 1073741824 && (t.flags |= 128, r = !0, Aa(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ze.current, Te(ze, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return lv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ut & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function eM(e, t) {
  switch (Bm(t), t.tag) {
    case 1:
      return Dt(t.type) && ac(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return na(), Re(At), Re(wt), Qm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xm(t), null;
    case 13:
      if (Re(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ea();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(ze), null;
    case 4:
      return na(), null;
    case 10:
      return Gm(t.type._context), null;
    case 22:
    case 23:
      return lv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kl = !1, St = !1, tM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        We(e, t, r);
      }
    else
      n.current = null;
}
function yh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var ry = !1;
function nM(e, t) {
  if (th = nc, e = Ex(), jm(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (nh = { focusedElem: e, selectionRange: n }, nc = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps, S = y.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : En(t.type, g), S);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (x) {
          We(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return y = ry, ry = !1, y;
}
function us(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && yh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function sd(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Pw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Kn], delete t[Fs], delete t[ih], delete t[zO], delete t[NO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Tw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oy(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tw(e.return))
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
function Sh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ic));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Sh(e, t, n), e = e.sibling; e !== null; )
      Sh(e, t, n), e = e.sibling;
}
function xh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (xh(e, t, n), e = e.sibling; e !== null; )
      xh(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; )
    _w(e, t, n), n = n.sibling;
}
function _w(e, t, n) {
  if (Xn && typeof Xn.onCommitFiberUnmount == "function")
    try {
      Xn.onCommitFiberUnmount(Jc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || Ci(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, $r(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Tf(e.parentNode, n) : e.nodeType === 1 && Tf(e, n), Is(e)) : Tf(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = On, dt = n.stateNode.containerInfo, On = !0, $r(e, t, n), dt = r, On = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!St && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && yh(n, t, a), o = o.next;
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (!St && (Ci(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          We(n, t, s);
        }
      $r(e, t, n);
      break;
    case 21:
      $r(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (St = (r = St) || n.memoizedState !== null, $r(e, t, n), St = r) : $r(e, t, n);
      break;
    default:
      $r(e, t, n);
  }
}
function iy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tM()), t.forEach(function(r) {
      var o = dM.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Tn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                dt = s.stateNode, On = !1;
                break e;
              case 3:
                dt = s.stateNode.containerInfo, On = !0;
                break e;
              case 4:
                dt = s.stateNode.containerInfo, On = !0;
                break e;
            }
            s = s.return;
          }
        if (dt === null)
          throw Error(F(160));
        _w(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ew(t, e), t = t.sibling;
}
function Ew(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), jn(e), r & 4) {
        try {
          us(3, e, e.return), sd(3, e);
        } catch (g) {
          We(e, e.return, g);
        }
        try {
          us(5, e, e.return);
        } catch (g) {
          We(e, e.return, g);
        }
      }
      break;
    case 1:
      Tn(t, e), jn(e), r & 512 && n !== null && Ci(n, n.return);
      break;
    case 5:
      if (Tn(t, e), jn(e), r & 512 && n !== null && Ci(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          _s(o, "");
        } catch (g) {
          We(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && qS(o, i), Up(s, a);
            var u = Up(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? ex(o, d) : c === "dangerouslySetInnerHTML" ? ZS(o, d) : c === "children" ? _s(o, d) : _m(o, c, d, u);
            }
            switch (s) {
              case "input":
                jp(o, i);
                break;
              case "textarea":
                XS(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? zi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? zi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : zi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Fs] = i;
          } catch (g) {
            We(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Tn(t, e), jn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          We(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Tn(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Is(t.containerInfo);
        } catch (g) {
          We(e, e.return, g);
        }
      break;
    case 4:
      Tn(t, e), jn(e);
      break;
    case 13:
      Tn(t, e), jn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (av = Ke())), r & 4 && iy(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (St = (u = St) || c, Tn(t, e), St = u) : Tn(t, e), jn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  us(4, f, f.return);
                  break;
                case 1:
                  Ci(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (g) {
                      We(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ci(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : sy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = JS("display", a));
                } catch (g) {
                  We(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  We(e, e.return, g);
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
      Tn(t, e), jn(e), r & 4 && iy(e);
      break;
    case 21:
      break;
    default:
      Tn(
        t,
        e
      ), jn(e);
  }
}
function jn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_s(o, ""), r.flags &= -33);
          var i = oy(e);
          xh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = oy(e);
          Sh(e, s, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      We(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rM(e, t, n) {
  B = e, Ow(e);
}
function Ow(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Kl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || St;
        s = Kl;
        var u = St;
        if (Kl = a, (St = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? ly(o) : l !== null ? (l.return = a, B = l) : ly(o);
        for (; i !== null; )
          B = i, Ow(i), i = i.sibling;
        B = o, Kl = s, St = u;
      }
      ay(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : ay(e);
  }
}
function ay(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || sd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && W0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                W0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                    d !== null && Is(d);
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
              throw Error(F(163));
          }
        St || t.flags & 512 && bh(t);
      } catch (f) {
        We(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function sy(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function ly(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sd(4, t);
          } catch (l) {
            We(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              We(t, o, l);
            }
          }
          var i = t.return;
          try {
            bh(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            bh(t);
          } catch (l) {
            We(t, a, l);
          }
      }
    } catch (l) {
      We(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, B = s;
      break;
    }
    B = t.return;
  }
}
var oM = Math.ceil, vc = Er.ReactCurrentDispatcher, ov = Er.ReactCurrentOwner, vn = Er.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Ut = 0, ki = co(0), nt = 0, Bs = null, Uo = 0, ld = 0, iv = 0, cs = null, It = null, av = 0, oa = 1 / 0, lr = null, gc = !1, wh = null, Zr = null, Yl = !1, Gr = null, yc = 0, ds = 0, Ch = null, Ou = -1, Mu = 0;
function _t() {
  return he & 6 ? Ke() : Ou !== -1 ? Ou : Ou = Ke();
}
function Jr(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : VO.transition !== null ? (Mu === 0 && (Mu = fx()), Mu) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bx(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < ds)
    throw ds = 0, Ch = null, Error(F(185));
  sl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (ld |= n), nt === 4 && Br(e, pt)), Ft(e, r), n === 1 && he === 0 && !(t.mode & 1) && (oa = Ke() + 500, od && fo()));
}
function Ft(e, t) {
  var n = e.callbackNode;
  VE(e, t);
  var r = tc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && g0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && g0(n), t === 1)
      e.tag === 0 ? jO(uy.bind(null, e)) : zx(uy.bind(null, e)), FO(function() {
        !(he & 6) && fo();
      }), n = null;
    else {
      switch (px(r)) {
        case 1:
          n = Rm;
          break;
        case 4:
          n = cx;
          break;
        case 16:
          n = ec;
          break;
        case 536870912:
          n = dx;
          break;
        default:
          n = ec;
      }
      n = Lw(n, Mw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mw(e, t) {
  if (Ou = -1, Mu = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Wi() && e.callbackNode !== n)
    return null;
  var r = tc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = bc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Rw();
    (st !== e || pt !== t) && (lr = null, oa = Ke() + 500, Do(e, t));
    do
      try {
        sM();
        break;
      } catch (s) {
        Iw(e, s);
      }
    while (!0);
    Um(), vc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Xp(e), o !== 0 && (r = o, t = kh(e, o))), t === 1)
      throw n = Bs, Do(e, 0), Br(e, r), Ft(e, Ke()), n;
    if (t === 6)
      Br(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !iM(o) && (t = bc(e, r), t === 2 && (i = Xp(e), i !== 0 && (r = i, t = kh(e, i))), t === 1))
        throw n = Bs, Do(e, 0), Br(e, r), Ft(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Co(e, It, lr);
          break;
        case 3:
          if (Br(e, r), (r & 130023424) === r && (t = av + 500 - Ke(), 10 < t)) {
            if (tc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              _t(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = oh(Co.bind(null, e, It, lr), t);
            break;
          }
          Co(e, It, lr);
          break;
        case 4:
          if (Br(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - $n(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * oM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = oh(Co.bind(null, e, It, lr), r);
            break;
          }
          Co(e, It, lr);
          break;
        case 5:
          Co(e, It, lr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Ft(e, Ke()), e.callbackNode === n ? Mw.bind(null, e) : null;
}
function kh(e, t) {
  var n = cs;
  return e.current.memoizedState.isDehydrated && (Do(e, t).flags |= 256), e = bc(e, t), e !== 2 && (t = It, It = n, t !== null && Ph(t)), e;
}
function Ph(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function iM(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ln(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
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
function Br(e, t) {
  for (t &= ~iv, t &= ~ld, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function uy(e) {
  if (he & 6)
    throw Error(F(327));
  Wi();
  var t = tc(e, 0);
  if (!(t & 1))
    return Ft(e, Ke()), null;
  var n = bc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xp(e);
    r !== 0 && (t = r, n = kh(e, r));
  }
  if (n === 1)
    throw n = Bs, Do(e, 0), Br(e, t), Ft(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Co(e, It, lr), Ft(e, Ke()), null;
}
function sv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (oa = Ke() + 500, od && fo());
  }
}
function Go(e) {
  Gr !== null && Gr.tag === 0 && !(he & 6) && Wi();
  var t = he;
  he |= 1;
  var n = vn.transition, r = xe;
  try {
    if (vn.transition = null, xe = 1, e)
      return e();
  } finally {
    xe = r, vn.transition = n, he = t, !(he & 6) && fo();
  }
}
function lv() {
  Ut = ki.current, Re(ki);
}
function Do(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, DO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Bm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ac();
          break;
        case 3:
          na(), Re(At), Re(wt), Qm();
          break;
        case 5:
          Xm(r);
          break;
        case 4:
          na();
          break;
        case 13:
          Re(ze);
          break;
        case 19:
          Re(ze);
          break;
        case 10:
          Gm(r.type._context);
          break;
        case 22:
        case 23:
          lv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = eo(e.current, null), pt = Ut = t, nt = 0, Bs = null, iv = ld = Uo = 0, It = cs = null, Mo !== null) {
    for (t = 0; t < Mo.length; t++)
      if (n = Mo[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Mo = null;
  }
  return e;
}
function Iw(e, t) {
  do {
    var n = Ze;
    try {
      if (Um(), Tu.current = mc, hc) {
        for (var r = je.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        hc = !1;
      }
      if (Ho = 0, it = tt = je = null, ls = !1, Ns = 0, ov.current = null, n === null || n.return === null) {
        nt = 1, Bs = t, Ze = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = pt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = X0(a);
          if (p !== null) {
            p.flags &= -257, Q0(p, a, s, i, t), p.mode & 1 && q0(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              q0(i, u, t), uv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (De && s.mode & 1) {
          var S = X0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Q0(S, a, s, i, t), Wm(ra(l, s));
            break e;
          }
        }
        i = l = ra(l, s), nt !== 4 && (nt = 2), cs === null ? cs = [i] : cs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = hw(i, l, t);
              B0(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = mw(i, s, t);
                B0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Aw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rw() {
  var e = vc.current;
  return vc.current = mc, e === null ? mc : e;
}
function uv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Uo & 268435455) && !(ld & 268435455) || Br(st, pt);
}
function bc(e, t) {
  var n = he;
  he |= 2;
  var r = Rw();
  (st !== e || pt !== t) && (lr = null, Do(e, t));
  do
    try {
      aM();
      break;
    } catch (o) {
      Iw(e, o);
    }
  while (!0);
  if (Um(), he = n, vc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function aM() {
  for (; Ze !== null; )
    $w(Ze);
}
function sM() {
  for (; Ze !== null && !RE(); )
    $w(Ze);
}
function $w(e) {
  var t = Fw(e.alternate, e, Ut);
  e.memoizedProps = e.pendingProps, t === null ? Aw(e) : Ze = t, ov.current = null;
}
function Aw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = eM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = JO(n, t, Ut), n !== null) {
      Ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  nt === 0 && (nt = 5);
}
function Co(e, t, n) {
  var r = xe, o = vn.transition;
  try {
    vn.transition = null, xe = 1, lM(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function lM(e, t, n, r) {
  do
    Wi();
  while (Gr !== null);
  if (he & 6)
    throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (BE(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yl || (Yl = !0, Lw(ec, function() {
    return Wi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, ov.current = null, nM(e, n), Ew(n, e), EO(nh), nc = !!th, nh = th = null, e.current = n, rM(n), $E(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (Yl && (Yl = !1, Gr = e, yc = o), i = e.pendingLanes, i === 0 && (Zr = null), FE(n.stateNode), Ft(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gc)
    throw gc = !1, e = wh, wh = null, e;
  return yc & 1 && e.tag !== 0 && Wi(), i = e.pendingLanes, i & 1 ? e === Ch ? ds++ : (ds = 0, Ch = e) : ds = 0, fo(), null;
}
function Wi() {
  if (Gr !== null) {
    var e = px(yc), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Gr === null)
        var r = !1;
      else {
        if (e = Gr, Gr = null, yc = 0, he & 6)
          throw Error(F(331));
        var o = he;
        for (he |= 4, B = e.current; B !== null; ) {
          var i = B, a = i.child;
          if (B.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Pw(c), c === u) {
                        B = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, B = f;
                        break;
                      }
                      B = p;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var S = g.sibling;
                    g.sibling = null, g = S;
                  } while (g !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, B = a;
          else
            e:
              for (; B !== null; ) {
                if (i = B, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, B = m;
                  break e;
                }
                B = i.return;
              }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          a = B;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, B = b;
          else
            e:
              for (a = h; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        sd(9, s);
                    }
                  } catch (k) {
                    We(s, s.return, k);
                  }
                if (s === a) {
                  B = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, B = x;
                  break e;
                }
                B = s.return;
              }
        }
        if (he = o, fo(), Xn && typeof Xn.onPostCommitFiberRoot == "function")
          try {
            Xn.onPostCommitFiberRoot(Jc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      xe = n, vn.transition = t;
    }
  }
  return !1;
}
function cy(e, t, n) {
  t = ra(n, t), t = hw(e, t, 1), e = Qr(e, t, 1), t = _t(), e !== null && (sl(e, 1, t), Ft(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    cy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zr === null || !Zr.has(r))) {
          e = ra(n, e), e = mw(t, e, 1), t = Qr(t, e, 1), e = _t(), t !== null && (sl(t, 1, e), Ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - av ? Do(e, 0) : iv |= n), Ft(e, t);
}
function Dw(e, t) {
  t === 0 && (e.mode & 1 ? (t = zl, zl <<= 1, !(zl & 130023424) && (zl = 4194304)) : t = 1);
  var n = _t();
  e = Cr(e, t), e !== null && (sl(e, t, n), Ft(e, n));
}
function cM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dw(e, n);
}
function dM(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Dw(e, n);
}
var Fw;
Fw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current)
      $t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return $t = !1, ZO(e, t, n);
      $t = !!(e.flags & 131072);
    }
  else
    $t = !1, De && t.flags & 1048576 && Nx(t, uc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Eu(e, t), e = t.pendingProps;
      var o = Ji(t, wt.current);
      Bi(t, n), o = Jm(null, t, r, e, o, n);
      var i = ev();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Dt(r) ? (i = !0, sc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ym(t), o.updater = id, t.stateNode = o, o._reactInternals = t, dh(t, r, e, n), t = hh(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Vm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Eu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = pM(r), e = En(r, e), o) {
          case 0:
            t = ph(null, t, r, e, n);
            break e;
          case 1:
            t = ey(null, t, r, e, n);
            break e;
          case 11:
            t = Z0(null, t, r, e, n);
            break e;
          case 14:
            t = J0(null, t, r, En(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), ph(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), ey(e, t, r, o, n);
    case 3:
      e: {
        if (bw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Wx(e, t), fc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ra(Error(F(423)), t), t = ty(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ra(Error(F(424)), t), t = ty(e, t, r, n, o);
            break e;
          } else
            for (Kt = Xr(t.stateNode.containerInfo.firstChild), Yt = t, De = !0, Mn = null, n = Kx(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ea(), r === o) {
            t = kr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yx(t), e === null && lh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, rh(r, o) ? a = null : i !== null && rh(r, i) && (t.flags |= 32), yw(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && lh(t), null;
    case 13:
      return Sw(e, t, n);
    case 4:
      return qm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ta(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Z0(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(cc, r._currentValue), r._currentValue = a, i !== null)
          if (Ln(i.value, a)) {
            if (i.children === o.children && !At.current) {
              t = kr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = vr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), uh(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(F(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), uh(a, n, t), a = i.sibling;
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
        Pt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Bi(t, n), o = yn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = En(r, t.pendingProps), o = En(r.type, o), J0(e, t, r, o, n);
    case 15:
      return vw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Eu(e, t), t.tag = 1, Dt(r) ? (e = !0, sc(t)) : e = !1, Bi(t, n), Ux(t, r, o), dh(t, r, o, n), hh(null, t, r, !0, e, n);
    case 19:
      return xw(e, t, n);
    case 22:
      return gw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Lw(e, t) {
  return ux(e, t);
}
function fM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new fM(e, t, n, r);
}
function cv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pM(e) {
  if (typeof e == "function")
    return cv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Om)
      return 11;
    if (e === Mm)
      return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Iu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    cv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case hi:
          return Fo(n.children, o, i, t);
        case Em:
          a = 8, o |= 8;
          break;
        case Dp:
          return e = hn(12, n, t, o | 2), e.elementType = Dp, e.lanes = i, e;
        case Fp:
          return e = hn(13, n, t, o), e.elementType = Fp, e.lanes = i, e;
        case Lp:
          return e = hn(19, n, t, o), e.elementType = Lp, e.lanes = i, e;
        case GS:
          return ud(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case HS:
                a = 10;
                break e;
              case US:
                a = 9;
                break e;
              case Om:
                a = 11;
                break e;
              case Mm:
                a = 14;
                break e;
              case zr:
                a = 16, r = null;
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
  return t = hn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Fo(e, t, n, r) {
  return e = hn(7, e, r, t), e.lanes = n, e;
}
function ud(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = GS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Af(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Df(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mf(0), this.expirationTimes = mf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function dv(e, t, n, r, o, i, a, s, l) {
  return e = new hM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ym(i), e;
}
function mM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zw(e) {
  if (!e)
    return io;
  e = e._reactInternals;
  e: {
    if (Xo(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n))
      return Lx(e, n, t);
  }
  return t;
}
function Nw(e, t, n, r, o, i, a, s, l) {
  return e = dv(n, r, !0, e, o, i, a, s, l), e.context = zw(null), n = e.current, r = _t(), o = Jr(n), i = vr(r, o), i.callback = t ?? null, Qr(n, i, o), e.current.lanes = o, sl(e, o, r), Ft(e, r), e;
}
function cd(e, t, n, r) {
  var o = t.current, i = _t(), a = Jr(o);
  return n = zw(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(o, t, a), e !== null && (An(e, o, a, i), Pu(e, o, a)), a;
}
function Sc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fv(e, t) {
  dy(e, t), (e = e.alternate) && dy(e, t);
}
function vM() {
  return null;
}
var jw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pv(e) {
  this._internalRoot = e;
}
dd.prototype.render = pv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  cd(e, t, null, null);
};
dd.prototype.unmount = pv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Go(function() {
      cd(null, e, null, null);
    }), t[wr] = null;
  }
};
function dd(e) {
  this._internalRoot = e;
}
dd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++)
      ;
    Vr.splice(n, 0, e), n === 0 && yx(e);
  }
};
function hv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fy() {
}
function gM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Sc(a);
        i.call(u);
      };
    }
    var a = Nw(t, r, e, 0, null, !1, !1, "", fy);
    return e._reactRootContainer = a, e[wr] = a.current, As(e.nodeType === 8 ? e.parentNode : e), Go(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Sc(l);
      s.call(u);
    };
  }
  var l = dv(e, 0, !1, null, null, !1, !1, "", fy);
  return e._reactRootContainer = l, e[wr] = l.current, As(e.nodeType === 8 ? e.parentNode : e), Go(function() {
    cd(t, l, n, r);
  }), l;
}
function pd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Sc(a);
        s.call(l);
      };
    }
    cd(t, a, e, o);
  } else
    a = gM(n, t, e, o, r);
  return Sc(a);
}
hx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ka(t.pendingLanes);
        n !== 0 && ($m(t, n | 1), Ft(t, Ke()), !(he & 6) && (oa = Ke() + 500, fo()));
      }
      break;
    case 13:
      Go(function() {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = _t();
          An(r, e, 1, o);
        }
      }), fv(e, 1);
  }
};
Am = function(e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = _t();
      An(t, e, 134217728, n);
    }
    fv(e, 134217728);
  }
};
mx = function(e) {
  if (e.tag === 13) {
    var t = Jr(e), n = Cr(e, t);
    if (n !== null) {
      var r = _t();
      An(n, e, t, r);
    }
    fv(e, t);
  }
};
vx = function() {
  return xe;
};
gx = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
Kp = function(e, t, n) {
  switch (t) {
    case "input":
      if (jp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = rd(r);
            if (!o)
              throw Error(F(90));
            YS(r), jp(r, o);
          }
        }
      }
      break;
    case "textarea":
      XS(e, n);
      break;
    case "select":
      t = n.value, t != null && zi(e, !!n.multiple, t, !1);
  }
};
rx = sv;
ox = Go;
var yM = { usingClientEntryPoint: !1, Events: [ul, yi, rd, tx, nx, sv] }, Da = { findFiberByHostInstance: Oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, bM = { bundleType: Da.bundleType, version: Da.version, rendererPackageName: Da.rendererPackageName, rendererConfig: Da.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = sx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Da.findFiberByHostInstance || vM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      Jc = ql.inject(bM), Xn = ql;
    } catch {
    }
}
en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yM;
en.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hv(t))
    throw Error(F(200));
  return mM(e, t, null, n);
};
en.createRoot = function(e, t) {
  if (!hv(e))
    throw Error(F(299));
  var n = !1, r = "", o = jw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = dv(e, 1, !1, null, null, n, !1, r, o), e[wr] = t.current, As(e.nodeType === 8 ? e.parentNode : e), new pv(t);
};
en.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = sx(t), e = e === null ? null : e.stateNode, e;
};
en.flushSync = function(e) {
  return Go(e);
};
en.hydrate = function(e, t, n) {
  if (!fd(t))
    throw Error(F(200));
  return pd(null, e, t, !0, n);
};
en.hydrateRoot = function(e, t, n) {
  if (!hv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = jw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Nw(t, null, e, 1, n ?? null, o, !1, i, a), e[wr] = t.current, As(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new dd(t);
};
en.render = function(e, t, n) {
  if (!fd(t))
    throw Error(F(200));
  return pd(null, e, t, !1, n);
};
en.unmountComponentAtNode = function(e) {
  if (!fd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Go(function() {
    pd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wr] = null;
    });
  }), !0) : !1;
};
en.unstable_batchedUpdates = sv;
en.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return pd(e, t, n, !1, r);
};
en.version = "18.2.0-next-9e3b772b8-20220608";
function Vw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vw);
    } catch (e) {
      console.error(e);
    }
}
Vw(), NS.exports = en;
var hd = NS.exports, py = hd;
$p.createRoot = py.createRoot, $p.hydrateRoot = py.hydrateRoot;
var Bw = "Expected a function", hy = NaN, SM = "[object Symbol]", xM = /^\s+|\s+$/g, wM = /^[-+]0x[0-9a-f]+$/i, CM = /^0b[01]+$/i, kM = /^0o[0-7]+$/i, PM = parseInt, TM = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, _M = typeof self == "object" && self && self.Object === Object && self, EM = TM || _M || Function("return this")(), OM = Object.prototype, MM = OM.toString, IM = Math.max, RM = Math.min, Ff = function() {
  return EM.Date.now();
};
function $M(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Bw);
  t = my(t) || 0, xc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? IM(my(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var T = r, _ = o;
    return r = o = void 0, u = P, a = e.apply(_, T), a;
  }
  function y(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function g(P) {
    var T = P - l, _ = P - u, M = t - T;
    return d ? RM(M, i - _) : M;
  }
  function S(P) {
    var T = P - l, _ = P - u;
    return l === void 0 || T >= t || T < 0 || d && _ >= i;
  }
  function m() {
    var P = Ff();
    if (S(P))
      return h(P);
    s = setTimeout(m, g(P));
  }
  function h(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : h(Ff());
  }
  function k() {
    var P = Ff(), T = S(P);
    if (r = arguments, o = this, l = P, T) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = b, k.flush = x, k;
}
function AM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Bw);
  return xc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), $M(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function xc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function DM(e) {
  return !!e && typeof e == "object";
}
function FM(e) {
  return typeof e == "symbol" || DM(e) && MM.call(e) == SM;
}
function my(e) {
  if (typeof e == "number")
    return e;
  if (FM(e))
    return hy;
  if (xc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(xM, "");
  var n = CM.test(e);
  return n || kM.test(e) ? PM(e.slice(2), n ? 2 : 8) : wM.test(e) ? hy : +e;
}
var LM = AM;
const zM = /* @__PURE__ */ il(LM);
function NM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var VM = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = NM(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), bt = "-ms-", wc = "-moz-", ge = "-webkit-", Ww = "comm", mv = "rule", vv = "decl", BM = "@import", Hw = "@keyframes", WM = "@layer", HM = Math.abs, md = String.fromCharCode, UM = Object.assign;
function GM(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Uw(e) {
  return e.trim();
}
function KM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Th(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function Un(e) {
  return e.length;
}
function gv(e) {
  return e.length;
}
function Xl(e, t) {
  return t.push(e), e;
}
function YM(e, t) {
  return e.map(t).join("");
}
var vd = 1, ia = 1, Gw = 0, jt = 0, Qe = 0, xa = "";
function gd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vd, column: ia, length: a, return: "" };
}
function Fa(e, t) {
  return UM(gd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qM() {
  return Qe;
}
function XM() {
  return Qe = jt > 0 ? ft(xa, --jt) : 0, ia--, Qe === 10 && (ia = 1, vd--), Qe;
}
function qt() {
  return Qe = jt < Gw ? ft(xa, jt++) : 0, ia++, Qe === 10 && (ia = 1, vd++), Qe;
}
function Zn() {
  return ft(xa, jt);
}
function Ru() {
  return jt;
}
function dl(e, t) {
  return Ws(xa, e, t);
}
function Hs(e) {
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
function Kw(e) {
  return vd = ia = 1, Gw = Un(xa = e), jt = 0, [];
}
function Yw(e) {
  return xa = "", e;
}
function $u(e) {
  return Uw(dl(jt - 1, _h(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function QM(e) {
  for (; (Qe = Zn()) && Qe < 33; )
    qt();
  return Hs(e) > 2 || Hs(Qe) > 3 ? "" : " ";
}
function ZM(e, t) {
  for (; --t && qt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return dl(e, Ru() + (t < 6 && Zn() == 32 && qt() == 32));
}
function _h(e) {
  for (; qt(); )
    switch (Qe) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _h(Qe);
        break;
      case 40:
        e === 41 && _h(e);
        break;
      case 92:
        qt();
        break;
    }
  return jt;
}
function JM(e, t) {
  for (; qt() && e + Qe !== 57; )
    if (e + Qe === 84 && Zn() === 47)
      break;
  return "/*" + dl(t, jt - 1) + "*" + md(e === 47 ? e : qt());
}
function eI(e) {
  for (; !Hs(Zn()); )
    qt();
  return dl(e, jt);
}
function tI(e) {
  return Yw(Au("", null, null, null, [""], e = Kw(e), 0, [0], e));
}
function Au(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, g = 1, S = 1, m = 1, h = 0, b = "", x = o, k = i, P = r, T = b; S; )
    switch (y = h, h = qt()) {
      case 40:
        if (y != 108 && ft(T, d - 1) == 58) {
          Th(T += ye($u(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += $u(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += QM(y);
        break;
      case 92:
        T += ZM(Ru() - 1, 7);
        continue;
      case 47:
        switch (Zn()) {
          case 42:
          case 47:
            Xl(nI(JM(qt(), Ru()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * g:
        s[u++] = Un(T) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (T = ye(T, /\f/g, "")), p > 0 && Un(T) - d && Xl(p > 32 ? gy(T + ";", r, n, d - 1) : gy(ye(T, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (Xl(P = vy(T, t, n, u, c, o, s, b, x = [], k = [], d), i), h === 123)
              if (c === 0)
                Au(T, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Au(e, P, P, r && Xl(vy(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    Au(T, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = m = 1, b = T = "", d = a;
        break;
      case 58:
        d = 1 + Un(T), p = y;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && XM() == 125)
            continue;
        }
        switch (T += md(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            s[u++] = (Un(T) - 1) * m, m = 1;
            break;
          case 64:
            Zn() === 45 && (T += $u(qt())), f = Zn(), c = d = Un(b = T += eI(Ru())), h++;
            break;
          case 45:
            y === 45 && Un(T) == 2 && (g = 0);
        }
    }
  return i;
}
function vy(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = gv(f), y = 0, g = 0, S = 0; y < r; ++y)
    for (var m = 0, h = Ws(e, d + 1, d = HM(g = a[y])), b = e; m < p; ++m)
      (b = Uw(g > 0 ? f[m] + " " + h : ye(h, /&\f/g, f[m]))) && (l[S++] = b);
  return gd(e, t, n, o === 0 ? mv : s, l, u, c);
}
function nI(e, t, n) {
  return gd(e, t, n, Ww, md(qM()), Ws(e, 2, -2), 0);
}
function gy(e, t, n, r) {
  return gd(e, t, n, vv, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function Hi(e, t) {
  for (var n = "", r = gv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function rI(e, t, n, r) {
  switch (e.type) {
    case WM:
      if (e.children.length)
        break;
    case BM:
    case vv:
      return e.return = e.return || e.value;
    case Ww:
      return "";
    case Hw:
      return e.return = e.value + "{" + Hi(e.children, r) + "}";
    case mv:
      e.value = e.props.join(",");
  }
  return Un(n = Hi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function oI(e) {
  var t = gv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function iI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var yy = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function qw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var aI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Zn(), o === 38 && i === 12 && (n[r] = 1), !Hs(i); )
    qt();
  return dl(t, jt);
}, sI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Hs(o)) {
      case 0:
        o === 38 && Zn() === 12 && (n[r] = 1), t[r] += aI(jt - 1, n, r);
        break;
      case 2:
        t[r] += $u(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Zn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += md(o);
    }
  while (o = qt());
  return t;
}, lI = function(t, n) {
  return Yw(sI(Kw(t), n));
}, by = /* @__PURE__ */ new WeakMap(), uI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !by.get(r)) && !o) {
      by.set(t, !0);
      for (var i = [], a = lI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, cI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xw(e, t) {
  switch (GM(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + wc + e + bt + e + e;
    case 6828:
    case 4268:
      return ge + e + bt + e + e;
    case 6165:
      return ge + e + bt + "flex-" + e + e;
    case 5187:
      return ge + e + ye(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + bt + "flex-$1$2") + e;
    case 5443:
      return ge + e + bt + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + bt + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + bt + ye(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + bt + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ye(e, "-grow", "") + ge + e + bt + ye(e, "grow", "positive") + e;
    case 4554:
      return ge + ye(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (Un(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + wc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Th(e, "stretch") ? Xw(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Un(e) - 3 - (~Th(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ge) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + bt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + bt + e + e;
  }
  return e;
}
var dI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case vv:
        t.return = Xw(t.value, t.length);
        break;
      case Hw:
        return Hi([Fa(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case mv:
        if (t.length)
          return YM(t.props, function(i) {
            switch (KM(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Hi([Fa(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + wc + "$1")]
                })], o);
              case "::placeholder":
                return Hi([Fa(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Fa(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + wc + "$1")]
                }), Fa(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, fI = [dI], pI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var S = g.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || fI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var S = g.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
        i[S[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [uI, cI];
  {
    var c, d = [rI, iI(function(g) {
      c.insert(g);
    })], f = oI(u.concat(o, d)), p = function(S) {
      return Hi(tI(S), f);
    };
    l = function(S, m, h, b) {
      c = h, p(S ? S + "{" + m.styles + "}" : m.styles), b && (y.inserted[m.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new VM({
      key: n,
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
  return y.sheet.hydrate(s), y;
};
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, q.apply(this, arguments);
}
var Qw = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, yv = lt ? Symbol.for("react.element") : 60103, bv = lt ? Symbol.for("react.portal") : 60106, yd = lt ? Symbol.for("react.fragment") : 60107, bd = lt ? Symbol.for("react.strict_mode") : 60108, Sd = lt ? Symbol.for("react.profiler") : 60114, xd = lt ? Symbol.for("react.provider") : 60109, wd = lt ? Symbol.for("react.context") : 60110, Sv = lt ? Symbol.for("react.async_mode") : 60111, Cd = lt ? Symbol.for("react.concurrent_mode") : 60111, kd = lt ? Symbol.for("react.forward_ref") : 60112, Pd = lt ? Symbol.for("react.suspense") : 60113, hI = lt ? Symbol.for("react.suspense_list") : 60120, Td = lt ? Symbol.for("react.memo") : 60115, _d = lt ? Symbol.for("react.lazy") : 60116, mI = lt ? Symbol.for("react.block") : 60121, vI = lt ? Symbol.for("react.fundamental") : 60117, gI = lt ? Symbol.for("react.responder") : 60118, yI = lt ? Symbol.for("react.scope") : 60119;
function nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yv:
        switch (e = e.type, e) {
          case Sv:
          case Cd:
          case yd:
          case Sd:
          case bd:
          case Pd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wd:
              case kd:
              case _d:
              case Td:
              case xd:
                return e;
              default:
                return t;
            }
        }
      case bv:
        return t;
    }
  }
}
function Zw(e) {
  return nn(e) === Cd;
}
we.AsyncMode = Sv;
we.ConcurrentMode = Cd;
we.ContextConsumer = wd;
we.ContextProvider = xd;
we.Element = yv;
we.ForwardRef = kd;
we.Fragment = yd;
we.Lazy = _d;
we.Memo = Td;
we.Portal = bv;
we.Profiler = Sd;
we.StrictMode = bd;
we.Suspense = Pd;
we.isAsyncMode = function(e) {
  return Zw(e) || nn(e) === Sv;
};
we.isConcurrentMode = Zw;
we.isContextConsumer = function(e) {
  return nn(e) === wd;
};
we.isContextProvider = function(e) {
  return nn(e) === xd;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yv;
};
we.isForwardRef = function(e) {
  return nn(e) === kd;
};
we.isFragment = function(e) {
  return nn(e) === yd;
};
we.isLazy = function(e) {
  return nn(e) === _d;
};
we.isMemo = function(e) {
  return nn(e) === Td;
};
we.isPortal = function(e) {
  return nn(e) === bv;
};
we.isProfiler = function(e) {
  return nn(e) === Sd;
};
we.isStrictMode = function(e) {
  return nn(e) === bd;
};
we.isSuspense = function(e) {
  return nn(e) === Pd;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yd || e === Cd || e === Sd || e === bd || e === Pd || e === hI || typeof e == "object" && e !== null && (e.$$typeof === _d || e.$$typeof === Td || e.$$typeof === xd || e.$$typeof === wd || e.$$typeof === kd || e.$$typeof === vI || e.$$typeof === gI || e.$$typeof === yI || e.$$typeof === mI);
};
we.typeOf = nn;
Qw.exports = we;
var bI = Qw.exports, Jw = bI, SI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, eC = {};
eC[Jw.ForwardRef] = SI;
eC[Jw.Memo] = xI;
var wI = !0;
function tC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var xv = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, wv = function(t, n, r) {
  xv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function CI(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var kI = {
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
}, PI = /[A-Z]|^ms/g, TI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, nC = function(t) {
  return t.charCodeAt(1) === 45;
}, Sy = function(t) {
  return t != null && typeof t != "boolean";
}, Lf = /* @__PURE__ */ qw(function(e) {
  return nC(e) ? e : e.replace(PI, "-$&").toLowerCase();
}), xy = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(TI, function(r, o, i) {
          return Gn = {
            name: o,
            styles: i,
            next: Gn
          }, o;
        });
  }
  return kI[t] !== 1 && !nC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Us(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Gn = {
          name: n.name,
          styles: n.styles,
          next: Gn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Gn = {
              name: r.name,
              styles: r.styles,
              next: Gn
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return _I(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Gn, a = n(e);
        return Gn = i, Us(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function _I(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Us(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Sy(a) && (r += Lf(i) + ":" + xy(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Sy(a[s]) && (r += Lf(i) + ":" + xy(i, a[s]) + ";");
      else {
        var l = Us(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Lf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var wy = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Gn, Ed = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Gn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Us(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Us(r, n, t[s]), o && (i += a[s]);
  wy.lastIndex = 0;
  for (var l = "", u; (u = wy.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = CI(i) + l;
  return {
    name: c,
    styles: i,
    next: Gn
  };
}, EI = function(t) {
  return t();
}, rC = s0.useInsertionEffect ? s0.useInsertionEffect : !1, oC = rC || EI, Cy = rC || v.useLayoutEffect, Cv = {}.hasOwnProperty, iC = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ pI({
    key: "css"
  }) : null
);
iC.Provider;
var kv = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(iC);
    return t(n, o, r);
  });
}, aa = /* @__PURE__ */ v.createContext({}), OI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, MI = /* @__PURE__ */ yy(function(e) {
  return yy(function(t) {
    return OI(e, t);
  });
}), II = function(t) {
  var n = v.useContext(aa);
  return t.theme !== n && (n = MI(n)(t.theme)), /* @__PURE__ */ v.createElement(aa.Provider, {
    value: n
  }, t.children);
}, Eh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", RI = function(t, n) {
  var r = {};
  for (var o in n)
    Cv.call(n, o) && (r[o] = n[o]);
  return r[Eh] = t, r;
}, $I = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return xv(n, r, o), oC(function() {
    return wv(n, r, o);
  }), null;
}, AI = /* @__PURE__ */ kv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Eh], i = [r], a = "";
  typeof e.className == "string" ? a = tC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Ed(i, void 0, v.useContext(aa));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Cv.call(e, u) && u !== "css" && u !== Eh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement($I, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ v.createElement(o, l));
}), DI = AI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Cv.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = DI, i[1] = RI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
}, Od = /* @__PURE__ */ kv(function(e, t) {
  var n = e.styles, r = Ed([n], void 0, v.useContext(aa)), o = v.useRef();
  return Cy(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Cy(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && wv(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Pv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ed(t);
}
var aC = function() {
  var t = Pv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, sC = String.raw, lC = sC`
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
`, FI = () => /* @__PURE__ */ w.jsx(Od, { styles: lC }), LI = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  Od,
  {
    styles: sC`
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

      ${lC}
    `
  }
);
function zI(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Je(e = {}) {
  const {
    name: t,
    strict: n = !0,
    hookName: r = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = v.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = v.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? zI(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [NI, jI] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function uC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(NI, { value: { zIndex: n }, children: t });
}
uC.displayName = "PortalManager";
var sa = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [cC, VI] = Je({
  strict: !1,
  name: "PortalContext"
}), Tv = "chakra-portal", BI = ".chakra-portal", WI = (e) => /* @__PURE__ */ w.jsx(
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
), HI = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = VI(), l = jI();
  sa(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Tv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(WI, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? hd.createPortal(
    /* @__PURE__ */ w.jsx(cC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, UI = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Tv), l;
  }, [o]), [, s] = v.useState({});
  return sa(() => s({}), []), sa(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? hd.createPortal(
    /* @__PURE__ */ w.jsx(cC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function fl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(UI, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(HI, { ...r });
}
fl.className = Tv;
fl.selector = BI;
fl.displayName = "Portal";
function po() {
  const e = v.useContext(
    aa
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var _v = v.createContext({});
_v.displayName = "ColorModeContext";
function wa() {
  const e = v.useContext(_v);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ky(e, t) {
  const { colorMode: n } = wa();
  return n === "dark" ? t : e;
}
var Ql = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function GI(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? Ql.dark : Ql.light), document.body.classList.remove(r ? Ql.light : Ql.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(r) {
      var o;
      return ((o = n.query().matches) != null ? o : r === "dark") ? "dark" : "light";
    },
    addListener(r) {
      const o = n.query(), i = (a) => {
        r(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const r = document.createElement("style");
      return r.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(r), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(r);
          });
        });
      };
    }
  };
  return n;
}
var KI = "chakra-ui-color-mode";
function YI(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {
      }
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var qI = YI(KI), Py = () => {
};
function Ty(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function dC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = qI
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => Ty(a, s)
  ), [c, d] = v.useState(
    () => Ty(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: g } = v.useMemo(
    () => GI({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, m = v.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), y(k), a.set(k);
    },
    [a, f, p, y]
  );
  sa(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
    const x = a.get();
    if (x) {
      m(x);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const h = v.useCallback(() => {
    m(S === "dark" ? "light" : "dark");
  }, [S, m]);
  v.useEffect(() => {
    if (r)
      return g(m);
  }, [r, g, m]);
  const b = v.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Py : h,
      setColorMode: t ? Py : m,
      forced: t !== void 0
    }),
    [S, h, m, t]
  );
  return /* @__PURE__ */ w.jsx(_v.Provider, { value: b, children: n });
}
dC.displayName = "ColorModeProvider";
var XI = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function QI(e) {
  let t = e;
  return XI.has(t) || (t = "light"), t;
}
function ZI(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = QI(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function JI(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: ZI(e) }
    }
  );
}
function eR() {
  const e = wa(), t = po();
  return { ...e, theme: t };
}
var ae = (...e) => e.filter(Boolean).join(" ");
function tR() {
  return !1;
}
function Lt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var pl = (e) => {
  const { condition: t, message: n } = e;
  t && tR() && console.warn(n);
};
function qn(e, ...t) {
  return nR(e) ? e(...t) : e;
}
var nR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, zf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function fC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Cc = { exports: {} };
Cc.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Null]", h = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", T = "[object Undefined]", _ = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", z = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, N = {};
  N[D] = N[G] = N[H] = N[L] = N[W] = N[K] = N[$] = N[A] = N[z] = !0, N[s] = N[l] = N[M] = N[c] = N[I] = N[d] = N[f] = N[p] = N[g] = N[S] = N[h] = N[x] = N[k] = N[P] = N[_] = !1;
  var te = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, le = typeof self == "object" && self && self.Object === Object && self, ie = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, Ce = me && me.exports === se, et = Ce && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || et && et.binding && et.binding("util");
    } catch {
    }
  }(), on = qe && qe.isTypedArray;
  function Pn(C, E, R) {
    switch (R.length) {
      case 0:
        return C.call(E);
      case 1:
        return C.call(E, R[0]);
      case 2:
        return C.call(E, R[0], R[1]);
      case 3:
        return C.call(E, R[0], R[1], R[2]);
    }
    return C.apply(E, R);
  }
  function Mr(C, E) {
    for (var R = -1, j = Array(C); ++R < C; )
      j[R] = E(R);
    return j;
  }
  function fe(C) {
    return function(E) {
      return C(E);
    };
  }
  function mt(C, E) {
    return C == null ? void 0 : C[E];
  }
  function Ge(C, E) {
    return function(R) {
      return C(E(R));
    };
  }
  var Wt = Array.prototype, Ir = Function.prototype, vt = Object.prototype, Nn = ie["__core-js_shared__"], Rr = Ir.toString, an = vt.hasOwnProperty, ni = function() {
    var C = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), ka = vt.toString, Pl = Rr.call(Object), Tl = RegExp(
    "^" + Rr.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vo = Ce ? ie.Buffer : void 0, Vg = ie.Symbol, Bg = ie.Uint8Array, Wg = vo ? vo.allocUnsafe : void 0, Hg = Ge(Object.getPrototypeOf, Object), Ug = Object.create, UT = vt.propertyIsEnumerable, GT = Wt.splice, go = Vg ? Vg.toStringTag : void 0, _l = function() {
    try {
      var C = tf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), KT = vo ? vo.isBuffer : void 0, Gg = Math.max, YT = Date.now, Kg = tf(ie, "Map"), Pa = tf(Object, "create"), qT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!bo(E))
        return {};
      if (Ug)
        return Ug(E);
      C.prototype = E;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function yo(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function XT() {
    this.__data__ = Pa ? Pa(null) : {}, this.size = 0;
  }
  function QT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function ZT(C) {
    var E = this.__data__;
    if (Pa) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function JT(C) {
    var E = this.__data__;
    return Pa ? E[C] !== void 0 : an.call(E, C);
  }
  function e_(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Pa && E === void 0 ? r : E, this;
  }
  yo.prototype.clear = XT, yo.prototype.delete = QT, yo.prototype.get = ZT, yo.prototype.has = JT, yo.prototype.set = e_;
  function ar(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function t_() {
    this.__data__ = [], this.size = 0;
  }
  function n_(C) {
    var E = this.__data__, R = El(E, C);
    if (R < 0)
      return !1;
    var j = E.length - 1;
    return R == j ? E.pop() : GT.call(E, R, 1), --this.size, !0;
  }
  function r_(C) {
    var E = this.__data__, R = El(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function o_(C) {
    return El(this.__data__, C) > -1;
  }
  function i_(C, E) {
    var R = this.__data__, j = El(R, C);
    return j < 0 ? (++this.size, R.push([C, E])) : R[j][1] = E, this;
  }
  ar.prototype.clear = t_, ar.prototype.delete = n_, ar.prototype.get = r_, ar.prototype.has = o_, ar.prototype.set = i_;
  function ri(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function a_() {
    this.size = 0, this.__data__ = {
      hash: new yo(),
      map: new (Kg || ar)(),
      string: new yo()
    };
  }
  function s_(C) {
    var E = Ml(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function l_(C) {
    return Ml(this, C).get(C);
  }
  function u_(C) {
    return Ml(this, C).has(C);
  }
  function c_(C, E) {
    var R = Ml(this, C), j = R.size;
    return R.set(C, E), this.size += R.size == j ? 0 : 1, this;
  }
  ri.prototype.clear = a_, ri.prototype.delete = s_, ri.prototype.get = l_, ri.prototype.has = u_, ri.prototype.set = c_;
  function oi(C) {
    var E = this.__data__ = new ar(C);
    this.size = E.size;
  }
  function d_() {
    this.__data__ = new ar(), this.size = 0;
  }
  function f_(C) {
    var E = this.__data__, R = E.delete(C);
    return this.size = E.size, R;
  }
  function p_(C) {
    return this.__data__.get(C);
  }
  function h_(C) {
    return this.__data__.has(C);
  }
  function m_(C, E) {
    var R = this.__data__;
    if (R instanceof ar) {
      var j = R.__data__;
      if (!Kg || j.length < n - 1)
        return j.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new ri(j);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  oi.prototype.clear = d_, oi.prototype.delete = f_, oi.prototype.get = p_, oi.prototype.has = h_, oi.prototype.set = m_;
  function v_(C, E) {
    var R = of(C), j = !R && rf(C), pe = !R && !j && Zg(C), ke = !R && !j && !pe && e0(C), $e = R || j || pe || ke, ce = $e ? Mr(C.length, String) : [], Ae = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      Xg(sn, Ae))) && ce.push(sn);
    return ce;
  }
  function Jd(C, E, R) {
    (R !== void 0 && !Il(C[E], R) || R === void 0 && !(E in C)) && ef(C, E, R);
  }
  function g_(C, E, R) {
    var j = C[E];
    (!(an.call(C, E) && Il(j, R)) || R === void 0 && !(E in C)) && ef(C, E, R);
  }
  function El(C, E) {
    for (var R = C.length; R--; )
      if (Il(C[R][0], E))
        return R;
    return -1;
  }
  function ef(C, E, R) {
    E == "__proto__" && _l ? _l(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var y_ = I_();
  function Ol(C) {
    return C == null ? C === void 0 ? T : m : go && go in Object(C) ? R_(C) : z_(C);
  }
  function Yg(C) {
    return Ta(C) && Ol(C) == s;
  }
  function b_(C) {
    if (!bo(C) || F_(C))
      return !1;
    var E = sf(C) ? Tl : V;
    return E.test(B_(C));
  }
  function S_(C) {
    return Ta(C) && Jg(C.length) && !!N[Ol(C)];
  }
  function x_(C) {
    if (!bo(C))
      return L_(C);
    var E = Qg(C), R = [];
    for (var j in C)
      j == "constructor" && (E || !an.call(C, j)) || R.push(j);
    return R;
  }
  function qg(C, E, R, j, pe) {
    C !== E && y_(E, function(ke, $e) {
      if (pe || (pe = new oi()), bo(ke))
        w_(C, E, $e, R, qg, j, pe);
      else {
        var ce = j ? j(nf(C, $e), ke, $e + "", C, E, pe) : void 0;
        ce === void 0 && (ce = ke), Jd(C, $e, ce);
      }
    }, t0);
  }
  function w_(C, E, R, j, pe, ke, $e) {
    var ce = nf(C, R), Ae = nf(E, R), sn = $e.get(Ae);
    if (sn) {
      Jd(C, R, sn);
      return;
    }
    var Ht = ke ? ke(ce, Ae, R + "", C, E, $e) : void 0, _a = Ht === void 0;
    if (_a) {
      var lf = of(Ae), uf = !lf && Zg(Ae), r0 = !lf && !uf && e0(Ae);
      Ht = Ae, lf || uf || r0 ? of(ce) ? Ht = ce : W_(ce) ? Ht = E_(ce) : uf ? (_a = !1, Ht = P_(Ae, !0)) : r0 ? (_a = !1, Ht = __(Ae, !0)) : Ht = [] : H_(Ae) || rf(Ae) ? (Ht = ce, rf(ce) ? Ht = U_(ce) : (!bo(ce) || sf(ce)) && (Ht = $_(Ae))) : _a = !1;
    }
    _a && ($e.set(Ae, Ht), pe(Ht, Ae, j, ke, $e), $e.delete(Ae)), Jd(C, R, Ht);
  }
  function C_(C, E) {
    return j_(N_(C, E, n0), C + "");
  }
  var k_ = _l ? function(C, E) {
    return _l(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: K_(E),
      writable: !0
    });
  } : n0;
  function P_(C, E) {
    if (E)
      return C.slice();
    var R = C.length, j = Wg ? Wg(R) : new C.constructor(R);
    return C.copy(j), j;
  }
  function T_(C) {
    var E = new C.constructor(C.byteLength);
    return new Bg(E).set(new Bg(C)), E;
  }
  function __(C, E) {
    var R = E ? T_(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function E_(C, E) {
    var R = -1, j = C.length;
    for (E || (E = Array(j)); ++R < j; )
      E[R] = C[R];
    return E;
  }
  function O_(C, E, R, j) {
    var pe = !R;
    R || (R = {});
    for (var ke = -1, $e = E.length; ++ke < $e; ) {
      var ce = E[ke], Ae = j ? j(R[ce], C[ce], ce, R, C) : void 0;
      Ae === void 0 && (Ae = C[ce]), pe ? ef(R, ce, Ae) : g_(R, ce, Ae);
    }
    return R;
  }
  function M_(C) {
    return C_(function(E, R) {
      var j = -1, pe = R.length, ke = pe > 1 ? R[pe - 1] : void 0, $e = pe > 2 ? R[2] : void 0;
      for (ke = C.length > 3 && typeof ke == "function" ? (pe--, ke) : void 0, $e && A_(R[0], R[1], $e) && (ke = pe < 3 ? void 0 : ke, pe = 1), E = Object(E); ++j < pe; ) {
        var ce = R[j];
        ce && C(E, ce, j, ke);
      }
      return E;
    });
  }
  function I_(C) {
    return function(E, R, j) {
      for (var pe = -1, ke = Object(E), $e = j(E), ce = $e.length; ce--; ) {
        var Ae = $e[C ? ce : ++pe];
        if (R(ke[Ae], Ae, ke) === !1)
          break;
      }
      return E;
    };
  }
  function Ml(C, E) {
    var R = C.__data__;
    return D_(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function tf(C, E) {
    var R = mt(C, E);
    return b_(R) ? R : void 0;
  }
  function R_(C) {
    var E = an.call(C, go), R = C[go];
    try {
      C[go] = void 0;
      var j = !0;
    } catch {
    }
    var pe = ka.call(C);
    return j && (E ? C[go] = R : delete C[go]), pe;
  }
  function $_(C) {
    return typeof C.constructor == "function" && !Qg(C) ? qT(Hg(C)) : {};
  }
  function Xg(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function A_(C, E, R) {
    if (!bo(R))
      return !1;
    var j = typeof E;
    return (j == "number" ? af(R) && Xg(E, R.length) : j == "string" && E in R) ? Il(R[E], C) : !1;
  }
  function D_(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function F_(C) {
    return !!ni && ni in C;
  }
  function Qg(C) {
    var E = C && C.constructor, R = typeof E == "function" && E.prototype || vt;
    return C === R;
  }
  function L_(C) {
    var E = [];
    if (C != null)
      for (var R in Object(C))
        E.push(R);
    return E;
  }
  function z_(C) {
    return ka.call(C);
  }
  function N_(C, E, R) {
    return E = Gg(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var j = arguments, pe = -1, ke = Gg(j.length - E, 0), $e = Array(ke); ++pe < ke; )
        $e[pe] = j[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = j[pe];
      return ce[E] = R($e), Pn(C, this, ce);
    };
  }
  function nf(C, E) {
    if (!(E === "constructor" && typeof C[E] == "function") && E != "__proto__")
      return C[E];
  }
  var j_ = V_(k_);
  function V_(C) {
    var E = 0, R = 0;
    return function() {
      var j = YT(), pe = i - (j - R);
      if (R = j, pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return C.apply(void 0, arguments);
    };
  }
  function B_(C) {
    if (C != null) {
      try {
        return Rr.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function Il(C, E) {
    return C === E || C !== C && E !== E;
  }
  var rf = Yg(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Yg : function(C) {
    return Ta(C) && an.call(C, "callee") && !UT.call(C, "callee");
  }, of = Array.isArray;
  function af(C) {
    return C != null && Jg(C.length) && !sf(C);
  }
  function W_(C) {
    return Ta(C) && af(C);
  }
  var Zg = KT || Y_;
  function sf(C) {
    if (!bo(C))
      return !1;
    var E = Ol(C);
    return E == p || E == y || E == u || E == b;
  }
  function Jg(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function bo(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ta(C) {
    return C != null && typeof C == "object";
  }
  function H_(C) {
    if (!Ta(C) || Ol(C) != h)
      return !1;
    var E = Hg(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && Rr.call(R) == Pl;
  }
  var e0 = on ? fe(on) : S_;
  function U_(C) {
    return O_(C, t0(C));
  }
  function t0(C) {
    return af(C) ? v_(C, !0) : x_(C);
  }
  var G_ = M_(function(C, E, R, j) {
    qg(C, E, R, j);
  });
  function K_(C) {
    return function() {
      return C;
    };
  }
  function n0(C) {
    return C;
  }
  function Y_() {
    return !1;
  }
  e.exports = G_;
})(Cc, Cc.exports);
var rR = Cc.exports;
const mn = /* @__PURE__ */ il(rR);
var oR = (e) => /!(important)?$/.test(e), _y = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, iR = (e, t) => (n) => {
  const r = String(t), o = oR(r), i = _y(r), a = e ? `${e}.${i}` : i;
  let s = Lt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = _y(s), o ? `${s} !important` : s;
};
function Ev(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = iR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Zl = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Ev({
      scale: e,
      transform: t
    }), r;
  };
}
var aR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function sR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: aR(t),
    transform: n ? Ev({
      scale: n,
      compose: r
    }) : r
  };
}
var pC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function lR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...pC
  ].join(" ");
}
function uR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...pC
  ].join(" ");
}
var cR = {
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
}, dR = {
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
function fR(e) {
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
var pR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Oh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, hR = new Set(Object.values(Oh)), Mh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), mR = (e) => e.trim();
function vR(e, t) {
  if (e == null || Mh.has(e))
    return e;
  if (!(Ih(e) || Mh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(mR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Oh ? Oh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (hR.has(f))
      return f;
    const p = f.indexOf(" "), [y, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Ih(g) ? g : g && g.split(" "), m = `colors.${y}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : y;
    return S ? [
      h,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Ih = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), gR = (e, t) => vR(e, t ?? {});
function yR(e) {
  return /^var\(--.+\)$/.test(e);
}
var bR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Vn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : cR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : dR;
  },
  ring(e) {
    return fR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? lR() : e === "auto-gpu" ? uR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = bR(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const n = { left: "right", right: "left" };
    return t.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if (yR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: gR,
  blur: Vn("blur"),
  opacity: Vn("opacity"),
  brightness: Vn("brightness"),
  contrast: Vn("contrast"),
  dropShadow: Vn("drop-shadow"),
  grayscale: Vn("grayscale"),
  hueRotate: (e) => Vn("hue-rotate")(de.degree(e)),
  invert: Vn("invert"),
  saturate: Vn("saturate"),
  sepia: Vn("sepia"),
  bgImage(e) {
    return e == null || Ih(e) || Mh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = pR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: ln("borderWidths"),
  borderStyles: ln("borderStyles"),
  colors: ln("colors"),
  borders: ln("borders"),
  gradients: ln("gradients", de.gradient),
  radii: ln("radii", de.px),
  space: ln("space", Zl(de.vh, de.px)),
  spaceT: ln("space", Zl(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Ev({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", Zl(de.vh, de.px)),
  sizesT: ln("sizes", Zl(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: sR,
  blur: ln("blur", de.blur)
}, Du = {
  background: O.colors("background"),
  backgroundColor: O.colors("backgroundColor"),
  backgroundImage: O.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: de.bgClip },
  bgSize: O.prop("backgroundSize"),
  bgPosition: O.prop("backgroundPosition"),
  bg: O.colors("background"),
  bgColor: O.colors("backgroundColor"),
  bgPos: O.prop("backgroundPosition"),
  bgRepeat: O.prop("backgroundRepeat"),
  bgAttachment: O.prop("backgroundAttachment"),
  bgGradient: O.gradients("backgroundImage"),
  bgClip: { transform: de.bgClip }
};
Object.assign(Du, {
  bgImage: Du.backgroundImage,
  bgImg: Du.backgroundImage
});
var ve = {
  border: O.borders("border"),
  borderWidth: O.borderWidths("borderWidth"),
  borderStyle: O.borderStyles("borderStyle"),
  borderColor: O.colors("borderColor"),
  borderRadius: O.radii("borderRadius"),
  borderTop: O.borders("borderTop"),
  borderBlockStart: O.borders("borderBlockStart"),
  borderTopLeftRadius: O.radii("borderTopLeftRadius"),
  borderStartStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: O.radii("borderTopRightRadius"),
  borderStartEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: O.borders("borderRight"),
  borderInlineEnd: O.borders("borderInlineEnd"),
  borderBottom: O.borders("borderBottom"),
  borderBlockEnd: O.borders("borderBlockEnd"),
  borderBottomLeftRadius: O.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: O.radii("borderBottomRightRadius"),
  borderLeft: O.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: O.borders(["borderLeft", "borderRight"]),
  borderInline: O.borders("borderInline"),
  borderY: O.borders(["borderTop", "borderBottom"]),
  borderBlock: O.borders("borderBlock"),
  borderTopWidth: O.borderWidths("borderTopWidth"),
  borderBlockStartWidth: O.borderWidths("borderBlockStartWidth"),
  borderTopColor: O.colors("borderTopColor"),
  borderBlockStartColor: O.colors("borderBlockStartColor"),
  borderTopStyle: O.borderStyles("borderTopStyle"),
  borderBlockStartStyle: O.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: O.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: O.borderWidths("borderBlockEndWidth"),
  borderBottomColor: O.colors("borderBottomColor"),
  borderBlockEndColor: O.colors("borderBlockEndColor"),
  borderBottomStyle: O.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: O.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: O.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: O.borderWidths("borderInlineStartWidth"),
  borderLeftColor: O.colors("borderLeftColor"),
  borderInlineStartColor: O.colors("borderInlineStartColor"),
  borderLeftStyle: O.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: O.borderStyles("borderInlineStartStyle"),
  borderRightWidth: O.borderWidths("borderRightWidth"),
  borderInlineEndWidth: O.borderWidths("borderInlineEndWidth"),
  borderRightColor: O.colors("borderRightColor"),
  borderInlineEndColor: O.colors("borderInlineEndColor"),
  borderRightStyle: O.borderStyles("borderRightStyle"),
  borderInlineEndStyle: O.borderStyles("borderInlineEndStyle"),
  borderTopRadius: O.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: O.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: O.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: O.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ve, {
  rounded: ve.borderRadius,
  roundedTop: ve.borderTopRadius,
  roundedTopLeft: ve.borderTopLeftRadius,
  roundedTopRight: ve.borderTopRightRadius,
  roundedTopStart: ve.borderStartStartRadius,
  roundedTopEnd: ve.borderStartEndRadius,
  roundedBottom: ve.borderBottomRadius,
  roundedBottomLeft: ve.borderBottomLeftRadius,
  roundedBottomRight: ve.borderBottomRightRadius,
  roundedBottomStart: ve.borderEndStartRadius,
  roundedBottomEnd: ve.borderEndEndRadius,
  roundedLeft: ve.borderLeftRadius,
  roundedRight: ve.borderRightRadius,
  roundedStart: ve.borderInlineStartRadius,
  roundedEnd: ve.borderInlineEndRadius,
  borderStart: ve.borderInlineStart,
  borderEnd: ve.borderInlineEnd,
  borderTopStartRadius: ve.borderStartStartRadius,
  borderTopEndRadius: ve.borderStartEndRadius,
  borderBottomStartRadius: ve.borderEndStartRadius,
  borderBottomEndRadius: ve.borderEndEndRadius,
  borderStartRadius: ve.borderInlineStartRadius,
  borderEndRadius: ve.borderInlineEndRadius,
  borderStartWidth: ve.borderInlineStartWidth,
  borderEndWidth: ve.borderInlineEndWidth,
  borderStartColor: ve.borderInlineStartColor,
  borderEndColor: ve.borderInlineEndColor,
  borderStartStyle: ve.borderInlineStartStyle,
  borderEndStyle: ve.borderInlineEndStyle
});
var SR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Rh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Rh, {
  shadow: Rh.boxShadow
});
var xR = {
  filter: { transform: de.filter },
  blur: O.blur("--chakra-blur"),
  brightness: O.propT("--chakra-brightness", de.brightness),
  contrast: O.propT("--chakra-contrast", de.contrast),
  hueRotate: O.propT("--chakra-hue-rotate", de.hueRotate),
  invert: O.propT("--chakra-invert", de.invert),
  saturate: O.propT("--chakra-saturate", de.saturate),
  dropShadow: O.propT("--chakra-drop-shadow", de.dropShadow),
  backdropFilter: { transform: de.backdropFilter },
  backdropBlur: O.blur("--chakra-backdrop-blur"),
  backdropBrightness: O.propT(
    "--chakra-backdrop-brightness",
    de.brightness
  ),
  backdropContrast: O.propT("--chakra-backdrop-contrast", de.contrast),
  backdropHueRotate: O.propT(
    "--chakra-backdrop-hue-rotate",
    de.hueRotate
  ),
  backdropInvert: O.propT("--chakra-backdrop-invert", de.invert),
  backdropSaturate: O.propT("--chakra-backdrop-saturate", de.saturate)
}, kc = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: de.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: O.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: O.space("gap"),
  rowGap: O.space("rowGap"),
  columnGap: O.space("columnGap")
};
Object.assign(kc, {
  flexDir: kc.flexDirection
});
var hC = {
  gridGap: O.space("gridGap"),
  gridColumnGap: O.space("gridColumnGap"),
  gridRowGap: O.space("gridRowGap"),
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
}, wR = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: de.outline },
  outlineOffset: !0,
  outlineColor: O.colors("outlineColor")
}, cn = {
  width: O.sizesT("width"),
  inlineSize: O.sizesT("inlineSize"),
  height: O.sizes("height"),
  blockSize: O.sizes("blockSize"),
  boxSize: O.sizes(["width", "height"]),
  minWidth: O.sizes("minWidth"),
  minInlineSize: O.sizes("minInlineSize"),
  minHeight: O.sizes("minHeight"),
  minBlockSize: O.sizes("minBlockSize"),
  maxWidth: O.sizes("maxWidth"),
  maxInlineSize: O.sizes("maxInlineSize"),
  maxHeight: O.sizes("maxHeight"),
  maxBlockSize: O.sizes("maxBlockSize"),
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
      var n, r, o;
      return { [`@media screen and (min-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (max-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: O.propT("float", de.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(cn, {
  w: cn.width,
  h: cn.height,
  minW: cn.minWidth,
  maxW: cn.maxWidth,
  minH: cn.minHeight,
  maxH: cn.maxHeight,
  overscroll: cn.overscrollBehavior,
  overscrollX: cn.overscrollBehaviorX,
  overscrollY: cn.overscrollBehaviorY
});
var CR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function kR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var PR = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, TR = PR(kR), _R = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, ER = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Nf = (e, t, n) => {
  const r = {}, o = TR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, OR = {
  srOnly: {
    transform(e) {
      return e === !0 ? _R : e === "focusable" ? ER : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Nf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Nf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Nf(t, e, n)
  }
}, fs = {
  position: !0,
  pos: O.prop("position"),
  zIndex: O.prop("zIndex", "zIndices"),
  inset: O.spaceT("inset"),
  insetX: O.spaceT(["left", "right"]),
  insetInline: O.spaceT("insetInline"),
  insetY: O.spaceT(["top", "bottom"]),
  insetBlock: O.spaceT("insetBlock"),
  top: O.spaceT("top"),
  insetBlockStart: O.spaceT("insetBlockStart"),
  bottom: O.spaceT("bottom"),
  insetBlockEnd: O.spaceT("insetBlockEnd"),
  left: O.spaceT("left"),
  insetInlineStart: O.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: O.spaceT("right"),
  insetInlineEnd: O.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(fs, {
  insetStart: fs.insetInlineStart,
  insetEnd: fs.insetInlineEnd
});
var MR = {
  ring: { transform: de.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Me = {
  margin: O.spaceT("margin"),
  marginTop: O.spaceT("marginTop"),
  marginBlockStart: O.spaceT("marginBlockStart"),
  marginRight: O.spaceT("marginRight"),
  marginInlineEnd: O.spaceT("marginInlineEnd"),
  marginBottom: O.spaceT("marginBottom"),
  marginBlockEnd: O.spaceT("marginBlockEnd"),
  marginLeft: O.spaceT("marginLeft"),
  marginInlineStart: O.spaceT("marginInlineStart"),
  marginX: O.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: O.spaceT("marginInline"),
  marginY: O.spaceT(["marginTop", "marginBottom"]),
  marginBlock: O.spaceT("marginBlock"),
  padding: O.space("padding"),
  paddingTop: O.space("paddingTop"),
  paddingBlockStart: O.space("paddingBlockStart"),
  paddingRight: O.space("paddingRight"),
  paddingBottom: O.space("paddingBottom"),
  paddingBlockEnd: O.space("paddingBlockEnd"),
  paddingLeft: O.space("paddingLeft"),
  paddingInlineStart: O.space("paddingInlineStart"),
  paddingInlineEnd: O.space("paddingInlineEnd"),
  paddingX: O.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: O.space("paddingInline"),
  paddingY: O.space(["paddingTop", "paddingBottom"]),
  paddingBlock: O.space("paddingBlock")
};
Object.assign(Me, {
  m: Me.margin,
  mt: Me.marginTop,
  mr: Me.marginRight,
  me: Me.marginInlineEnd,
  marginEnd: Me.marginInlineEnd,
  mb: Me.marginBottom,
  ml: Me.marginLeft,
  ms: Me.marginInlineStart,
  marginStart: Me.marginInlineStart,
  mx: Me.marginX,
  my: Me.marginY,
  p: Me.padding,
  pt: Me.paddingTop,
  py: Me.paddingY,
  px: Me.paddingX,
  pb: Me.paddingBottom,
  pl: Me.paddingLeft,
  ps: Me.paddingInlineStart,
  paddingStart: Me.paddingInlineStart,
  pr: Me.paddingRight,
  pe: Me.paddingInlineEnd,
  paddingEnd: Me.paddingInlineEnd
});
var IR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, RR = {
  clipPath: !0,
  transform: O.propT("transform", de.transform),
  transformOrigin: !0,
  translateX: O.spaceT("--chakra-translate-x"),
  translateY: O.spaceT("--chakra-translate-y"),
  skewX: O.degreeT("--chakra-skew-x"),
  skewY: O.degreeT("--chakra-skew-y"),
  scaleX: O.prop("--chakra-scale-x"),
  scaleY: O.prop("--chakra-scale-y"),
  scale: O.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: O.degreeT("--chakra-rotate")
}, $R = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: O.prop("transitionDuration", "transition.duration"),
  transitionProperty: O.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: O.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, AR = {
  fontFamily: O.prop("fontFamily", "fonts"),
  fontSize: O.prop("fontSize", "fontSizes", de.px),
  fontWeight: O.prop("fontWeight", "fontWeights"),
  lineHeight: O.prop("lineHeight", "lineHeights"),
  letterSpacing: O.prop("letterSpacing", "letterSpacings"),
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
}, DR = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: O.spaceT("scrollMargin"),
  scrollMarginTop: O.spaceT("scrollMarginTop"),
  scrollMarginBottom: O.spaceT("scrollMarginBottom"),
  scrollMarginLeft: O.spaceT("scrollMarginLeft"),
  scrollMarginRight: O.spaceT("scrollMarginRight"),
  scrollMarginX: O.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: O.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: O.spaceT("scrollPadding"),
  scrollPaddingTop: O.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: O.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: O.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: O.spaceT("scrollPaddingRight"),
  scrollPaddingX: O.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: O.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function mC(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Md = (e, ...t) => t.map(mC).join(` ${e} `).replace(/calc/g, ""), Ey = (...e) => `calc(${Md("+", ...e)})`, Oy = (...e) => `calc(${Md("-", ...e)})`, $h = (...e) => `calc(${Md("*", ...e)})`, My = (...e) => `calc(${Md("/", ...e)})`, Iy = (e) => {
  const t = mC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : $h(t, -1);
}, _o = Object.assign(
  (e) => ({
    add: (...t) => _o(Ey(e, ...t)),
    subtract: (...t) => _o(Oy(e, ...t)),
    multiply: (...t) => _o($h(e, ...t)),
    divide: (...t) => _o(My(e, ...t)),
    negate: () => _o(Iy(e)),
    toString: () => e.toString()
  }),
  {
    add: Ey,
    subtract: Oy,
    multiply: $h,
    divide: My,
    negate: Iy
  }
);
function FR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function LR(e) {
  const t = FR(e.toString());
  return NR(zR(t));
}
function zR(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function NR(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function jR(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function VR(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function BR(e, t = "") {
  return LR(`--${jR(e, t)}`);
}
function J(e, t, n) {
  const r = BR(e, n);
  return {
    variable: r,
    reference: VR(r, t)
  };
}
function WR(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = J(`${e}-${o}`, i);
      continue;
    }
    n[r] = J(`${e}-${r}`);
  }
  return n;
}
function HR(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function UR(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Ah(e) {
  if (e == null)
    return e;
  const { unitless: t } = UR(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var vC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ov = (e) => Object.fromEntries(Object.entries(e).sort(vC));
function Ry(e) {
  const t = Ov(e);
  return Object.assign(Object.values(t), t);
}
function GR(e) {
  const t = Object.keys(Ov(e));
  return new Set(t);
}
function $y(e) {
  var t;
  if (!e)
    return e;
  e = (t = Ah(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function qa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Ah(e)})`), t && n.push("and", `(max-width: ${Ah(t)})`), n.join(" ");
}
function KR(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Ry(e), r = Object.entries(e).sort(vC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? $y(d) : void 0, {
      _minW: $y(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: qa(null, d),
      minWQuery: qa(s),
      minMaxQuery: qa(s, d)
    };
  }), o = GR(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Ov(e),
    asArray: Ry(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => qa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!Lt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; HR(s) === null; )
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
var ut = {
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
}, Ar = (e) => gC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), sr = (e) => gC((t) => e(t, "~ &"), "[data-peer]", ".peer"), gC = (e, ...t) => t.map(e).join(", "), Id = {
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
  _groupHover: Ar(ut.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: sr(ut.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ar(ut.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: sr(ut.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ar(ut.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: sr(ut.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ar(ut.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: sr(ut.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ar(ut.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: sr(ut.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ar(ut.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: sr(ut.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ar(ut.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: sr(ut.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ar(ut.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: sr(ut.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: sr(ut.placeholderShown),
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
}, yC = Object.keys(
  Id
);
function Ay(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function YR(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Ay(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, g = `${p}.-${y.join(".")}`, S = _o.negate(s), m = _o.negate(u);
        r[g] = {
          value: S,
          var: l,
          varRef: m
        };
      }
      n[l] = s, r[o] = {
        value: s,
        var: l,
        varRef: u
      };
      continue;
    }
    const c = (f) => {
      const y = [String(o).split(".")[0], f].join(".");
      if (!e[y])
        return f;
      const { reference: S } = Ay(y, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = Lt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var g, S;
          if (!y)
            return f;
          const m = c(`${y}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (S = (g = Id) == null ? void 0 : g[p]) != null ? S : p;
          return f[h] = { [l]: m }, f;
        },
        {}
      )
    ), r[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: n,
    cssMap: r
  };
}
function qR(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function XR(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function QR(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Dy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (QR(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (r != null && r(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var ZR = [
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
function JR(e) {
  return XR(e, ZR);
}
function e$(e) {
  return e.semanticTokens;
}
function t$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var n$ = (e) => yC.includes(e) || e === "default";
function r$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Dy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Dy(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(n$)
    }
  ), n;
}
function o$(e) {
  var t;
  const n = t$(e), r = JR(n), o = e$(n), i = r$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = YR(i, { cssVarPrefix: a });
  return Object.assign(n, {
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
    __breakpoints: KR(n.breakpoints)
  }), n;
}
var Mv = mn(
  {},
  Du,
  ve,
  SR,
  kc,
  cn,
  xR,
  MR,
  wR,
  hC,
  OR,
  fs,
  Rh,
  Me,
  DR,
  AR,
  IR,
  RR,
  CR,
  $R
);
Object.assign({}, Me, cn, kc, hC, fs);
var i$ = [...Object.keys(Mv), ...yC], a$ = { ...Mv, ...Id }, s$ = (e) => e in a$, l$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = qn(e[a], t);
    if (s == null)
      continue;
    if (s = Lt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
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
function u$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function c$(e) {
  return /^var\(--.+\)$/.test(e);
}
var d$ = (e, t) => e.startsWith("--") && typeof t == "string" && !c$(t), f$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = u$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function p$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = qn(i, r), d = l$(c)(r);
    let f = {};
    for (let p in d) {
      const y = d[p];
      let g = qn(y, r);
      p in n && (p = n[p]), d$(p, g) && (g = f$(r, g));
      let S = t[p];
      if (S === !0 && (S = { property: p }), Lt(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, g, r, c)) != null ? u : g;
      m = S != null && S.processResult ? o(m, !0) : m;
      const h = qn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = qn(S.static, r);
        f = mn({}, f, b);
      }
      if (h && Array.isArray(h)) {
        for (const b of h)
          f[b] = m;
        continue;
      }
      if (h) {
        h === "&" && Lt(m) ? f = mn({}, f, m) : f[h] = m;
        continue;
      }
      if (Lt(m)) {
        f = mn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var bC = (e) => (t) => p$({
  theme: t,
  pseudos: Id,
  configs: Mv
})(e);
function Ee(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function h$(e, t) {
  if (Array.isArray(e))
    return e;
  if (Lt(e))
    return t(e);
  if (e != null)
    return [e];
}
function m$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function v$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = h$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let y = 0; y < d; y++) {
      const g = t.details[y], S = t.details[m$(c, y)], m = qa(g.minW, S == null ? void 0 : S._minW), h = qn((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (h) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            mn(u, {
              [b]: f ? h[b] : { [m]: h[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? mn(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function g$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = v$(i);
    return mn(
      {},
      qn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Cn(e) {
  return qR(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var y$ = [
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
function b$(e) {
  return Lt(e) ? y$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var S$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, x$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, w$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, C$ = {
  property: S$,
  easing: x$,
  duration: w$
}, k$ = C$, P$ = {
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
}, T$ = P$, _$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, E$ = _$, O$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, M$ = O$, I$ = {
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
}, R$ = I$, $$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, A$ = $$, D$ = {
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
}, F$ = D$, L$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, z$ = L$, N$ = {
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
}, SC = N$, xC = {
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
}, j$ = {
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
}, V$ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, B$ = {
  ...xC,
  ...j$,
  container: V$
}, wC = B$, W$ = {
  breakpoints: M$,
  zIndices: T$,
  radii: A$,
  blur: z$,
  colors: R$,
  ...SC,
  sizes: wC,
  shadows: F$,
  space: xC,
  borders: E$,
  transition: k$
}, { defineMultiStyleConfig: H$, definePartsStyle: Xa } = Ee([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), cr = J("stepper-indicator-size"), Pi = J("stepper-icon-size"), Ti = J("stepper-title-font-size"), Qa = J("stepper-description-font-size"), La = J("stepper-accent-color"), U$ = Xa(({ colorScheme: e }) => ({
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
    [La.variable]: `colors.${e}.500`,
    _dark: {
      [La.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Ti.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Qa.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Ti.reference
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
    width: Pi.reference,
    height: Pi.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: cr.reference,
    height: cr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: La.reference
    },
    "&[data-status=complete]": {
      bg: La.reference,
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
      bg: La.reference
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
      maxHeight: `calc(100% - ${cr.reference} - 8px)`,
      top: `calc(${cr.reference} + 4px)`,
      insetStart: `calc(${cr.reference} / 2 - 1px)`
    }
  }
})), G$ = H$({
  baseStyle: U$,
  sizes: {
    xs: Xa({
      stepper: {
        [cr.variable]: "sizes.4",
        [Pi.variable]: "sizes.3",
        [Ti.variable]: "fontSizes.xs",
        [Qa.variable]: "fontSizes.xs"
      }
    }),
    sm: Xa({
      stepper: {
        [cr.variable]: "sizes.6",
        [Pi.variable]: "sizes.4",
        [Ti.variable]: "fontSizes.sm",
        [Qa.variable]: "fontSizes.xs"
      }
    }),
    md: Xa({
      stepper: {
        [cr.variable]: "sizes.8",
        [Pi.variable]: "sizes.5",
        [Ti.variable]: "fontSizes.md",
        [Qa.variable]: "fontSizes.sm"
      }
    }),
    lg: Xa({
      stepper: {
        [cr.variable]: "sizes.10",
        [Pi.variable]: "sizes.6",
        [Ti.variable]: "fontSizes.lg",
        [Qa.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Se(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c)
      t[d] = l(d);
    return Se(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return Se(e, t);
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
var K$ = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), Y$ = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), q$ = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), X$ = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var Q$ = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var Z$ = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), J$ = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), eA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), tA = Se("formError").parts("text", "icon"), nA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), rA = Se("list").parts("container", "item", "icon"), oA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), iA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), aA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var sA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), lA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), uA = Se("radio").parts(
  "container",
  "control",
  "label"
), cA = Se("select").parts("field", "icon"), dA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), fA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), pA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), hA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), mA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), vA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), gA = Se("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Se("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Ro(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class yA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Za = yA;
function Iv(e) {
  if (typeof e != "string")
    throw new Za(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = TA.test(e) ? xA(e) : e;
  const n = wA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Gs(s, 2), 16)), parseInt(Gs(a[3] || "f", 2), 16) / 255];
  }
  const r = CA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = kA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = PA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Ro(0, 100, s) !== s)
      throw new Za(e);
    if (Ro(0, 100, l) !== l)
      throw new Za(e);
    return [..._A(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Za(e);
}
function bA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Fy = (e) => parseInt(e.replace(/_/g, ""), 36), SA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Fy(t.substring(0, 3)), r = Fy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function xA(e) {
  const t = e.toLowerCase().trim(), n = SA[bA(t)];
  if (!n)
    throw new Za(e);
  return `#${n}`;
}
const Gs = (e, t) => Array.from(Array(t)).map(() => e).join(""), wA = new RegExp(`^#${Gs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), CA = new RegExp(`^#${Gs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), kA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Gs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), PA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, TA = /^[a-z]+$/i, Ly = (e) => Math.round(e * 255), _A = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Ly);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Ly);
};
function EA(e, t, n, r) {
  return `rgba(${Ro(0, 255, e).toFixed()}, ${Ro(0, 255, t).toFixed()}, ${Ro(0, 255, n).toFixed()}, ${parseFloat(Ro(0, 1, r).toFixed(3))})`;
}
function OA(e, t) {
  const [n, r, o, i] = Iv(e);
  return EA(n, r, o, i - t);
}
function MA(e) {
  const [t, n, r, o] = Iv(e);
  let i = (a) => {
    const s = Ro(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function IA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var RA = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = IA(e, `colors.${t}`, t);
  try {
    return MA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, $A = (e) => {
  const [t, n, r] = Iv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, AA = (e) => (t) => {
  const n = Tt(t, e);
  return $A(n) < 128 ? "dark" : "light";
}, DA = (e) => (t) => AA(e)(t) === "dark", la = (e, t) => (n) => {
  const r = Tt(n, e);
  return OA(r, 1 - t);
};
function zy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var FA = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function LA(e) {
  const t = FA();
  return !e || RA(e) ? t : e.string && e.colors ? NA(e.string, e.colors) : e.string && !e.colors ? zA(e.string) : e.colors && !e.string ? jA(e.colors) : t;
}
function zA(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let r = 0; r < e.length; r += 1)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = t >> r * 8 & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function NA(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function jA(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Rv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function CC(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Rd = (e, ...t) => t.map(CC).join(` ${e} `).replace(/calc/g, ""), Ny = (...e) => `calc(${Rd("+", ...e)})`, jy = (...e) => `calc(${Rd("-", ...e)})`, Dh = (...e) => `calc(${Rd("*", ...e)})`, Vy = (...e) => `calc(${Rd("/", ...e)})`, By = (e) => {
  const t = CC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Dh(t, -1);
}, dr = Object.assign(
  (e) => ({
    add: (...t) => dr(Ny(e, ...t)),
    subtract: (...t) => dr(jy(e, ...t)),
    multiply: (...t) => dr(Dh(e, ...t)),
    divide: (...t) => dr(Vy(e, ...t)),
    negate: () => dr(By(e)),
    toString: () => e.toString()
  }),
  {
    add: Ny,
    subtract: jy,
    multiply: Dh,
    divide: Vy,
    negate: By
  }
);
function VA(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function BA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function kC(e) {
  const t = BA(e.toString());
  return t.includes("\\.") ? e : VA(e) ? t.replace(".", "\\.") : e;
}
function WA(e, t = "") {
  return [t, kC(e)].filter(Boolean).join("-");
}
function HA(e, t) {
  return `var(${kC(e)}${t ? `, ${t}` : ""})`;
}
function UA(e, t = "") {
  return `--${WA(e, t)}`;
}
function rt(e, t) {
  const n = UA(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: HA(n, GA(t == null ? void 0 : t.fallback))
  };
}
function GA(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: KA, definePartsStyle: Fu } = Ee(pA.keys), ps = rt("switch-track-width"), Lo = rt("switch-track-height"), jf = rt("switch-track-diff"), YA = dr.subtract(ps, Lo), Fh = rt("switch-thumb-x"), za = rt("switch-bg"), qA = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ps.reference],
    height: [Lo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [za.variable]: "colors.gray.300",
    _dark: {
      [za.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [za.variable]: `colors.${t}.500`,
      _dark: {
        [za.variable]: `colors.${t}.200`
      }
    },
    bg: za.reference
  };
}, XA = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Lo.reference],
  height: [Lo.reference],
  _checked: {
    transform: `translateX(${Fh.reference})`
  }
}, QA = Fu((e) => ({
  container: {
    [jf.variable]: YA,
    [Fh.variable]: jf.reference,
    _rtl: {
      [Fh.variable]: dr(jf).negate().toString()
    }
  },
  track: qA(e),
  thumb: XA
})), ZA = {
  sm: Fu({
    container: {
      [ps.variable]: "1.375rem",
      [Lo.variable]: "sizes.3"
    }
  }),
  md: Fu({
    container: {
      [ps.variable]: "1.875rem",
      [Lo.variable]: "sizes.4"
    }
  }),
  lg: Fu({
    container: {
      [ps.variable]: "2.875rem",
      [Lo.variable]: "sizes.6"
    }
  })
}, JA = KA({
  baseStyle: QA,
  sizes: ZA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: e5, definePartsStyle: Ui } = Ee(hA.keys), t5 = Ui({
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
}), Pc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, n5 = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Pc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Pc
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), r5 = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Pc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Pc
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: Q(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: Q(`${t}.100`, `${t}.700`)(e)
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
}), o5 = {
  simple: n5,
  striped: r5,
  unstyled: {}
}, i5 = {
  sm: Ui({
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
  md: Ui({
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
  lg: Ui({
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
}, a5 = e5({
  baseStyle: t5,
  variants: o5,
  sizes: i5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), In = J("tabs-bg"), Jl = J("tabs-border-color"), { defineMultiStyleConfig: s5, definePartsStyle: Jn } = Ee(mA.keys), l5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, u5 = (e) => {
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
}, c5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, d5 = {
  p: 4
}, f5 = Jn((e) => ({
  root: l5(e),
  tab: u5(e),
  tablist: c5(e),
  tabpanel: d5
})), p5 = {
  sm: Jn({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Jn({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Jn({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, h5 = Jn((e) => {
  const { colorScheme: t, orientation: n } = e, r = n === "vertical", o = r ? "borderStart" : "borderBottom", i = r ? "marginStart" : "marginBottom";
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
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [In.variable]: "colors.gray.200",
        _dark: {
          [In.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Rt.reference,
      bg: In.reference
    }
  };
}), m5 = Jn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Jl.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [Jl.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [Jl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Jl.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), v5 = Jn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [In.variable]: "colors.gray.50",
      _dark: {
        [In.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [In.variable]: "colors.white",
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [In.variable]: "colors.gray.800",
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Rt.reference,
      bg: In.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), g5 = Jn((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Tt(n, `${t}.700`),
        bg: Tt(n, `${t}.100`)
      }
    }
  };
}), y5 = Jn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Rt.variable]: "colors.gray.600",
      _dark: {
        [Rt.variable]: "inherit"
      },
      _selected: {
        [Rt.variable]: "colors.white",
        [In.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: "colors.gray.800",
          [In.variable]: `colors.${t}.300`
        }
      },
      color: Rt.reference,
      bg: In.reference
    }
  };
}), b5 = Jn({}), S5 = {
  line: h5,
  enclosed: m5,
  "enclosed-colored": v5,
  "soft-rounded": g5,
  "solid-rounded": y5,
  unstyled: b5
}, x5 = s5({
  baseStyle: f5,
  sizes: p5,
  variants: S5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = WR("badge", ["bg", "color", "shadow"]), w5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, C5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, k5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, P5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, T5 = {
  solid: C5,
  subtle: k5,
  outline: P5
}, hs = {
  baseStyle: w5,
  variants: T5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: _5, definePartsStyle: zo } = Ee(vA.keys), Wy = J("tag-bg"), Hy = J("tag-color"), Vf = J("tag-shadow"), Lu = J("tag-min-height"), zu = J("tag-min-width"), Nu = J("tag-font-size"), ju = J("tag-padding-inline"), E5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Hy.variable]: Ye.color.reference,
  [Wy.variable]: Ye.bg.reference,
  [Vf.variable]: Ye.shadow.reference,
  color: Hy.reference,
  bg: Wy.reference,
  boxShadow: Vf.reference,
  borderRadius: "md",
  minH: Lu.reference,
  minW: zu.reference,
  fontSize: Nu.reference,
  px: ju.reference,
  _focusVisible: {
    [Vf.variable]: "shadows.outline"
  }
}, O5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, M5 = {
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
}, I5 = zo({
  container: E5,
  label: O5,
  closeButton: M5
}), R5 = {
  sm: zo({
    container: {
      [Lu.variable]: "sizes.5",
      [zu.variable]: "sizes.5",
      [Nu.variable]: "fontSizes.xs",
      [ju.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: zo({
    container: {
      [Lu.variable]: "sizes.6",
      [zu.variable]: "sizes.6",
      [Nu.variable]: "fontSizes.sm",
      [ju.variable]: "space.2"
    }
  }),
  lg: zo({
    container: {
      [Lu.variable]: "sizes.8",
      [zu.variable]: "sizes.8",
      [Nu.variable]: "fontSizes.md",
      [ju.variable]: "space.3"
    }
  })
}, $5 = {
  subtle: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.outline(e)
    };
  })
}, A5 = _5({
  variants: $5,
  baseStyle: I5,
  sizes: R5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: hr, defineMultiStyleConfig: D5 } = Ee(nA.keys), _i = J("input-height"), Ei = J("input-font-size"), Oi = J("input-padding"), Mi = J("input-border-radius"), F5 = hr({
  addon: {
    height: _i.reference,
    fontSize: Ei.reference,
    px: Oi.reference,
    borderRadius: Mi.reference
  },
  field: {
    width: "100%",
    height: _i.reference,
    fontSize: Ei.reference,
    px: Oi.reference,
    borderRadius: Mi.reference,
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
}), Dr = {
  lg: {
    [Ei.variable]: "fontSizes.lg",
    [Oi.variable]: "space.4",
    [Mi.variable]: "radii.md",
    [_i.variable]: "sizes.12"
  },
  md: {
    [Ei.variable]: "fontSizes.md",
    [Oi.variable]: "space.4",
    [Mi.variable]: "radii.md",
    [_i.variable]: "sizes.10"
  },
  sm: {
    [Ei.variable]: "fontSizes.sm",
    [Oi.variable]: "space.3",
    [Mi.variable]: "radii.sm",
    [_i.variable]: "sizes.8"
  },
  xs: {
    [Ei.variable]: "fontSizes.xs",
    [Oi.variable]: "space.2",
    [Mi.variable]: "radii.sm",
    [_i.variable]: "sizes.6"
  }
}, L5 = {
  lg: hr({
    field: Dr.lg,
    group: Dr.lg
  }),
  md: hr({
    field: Dr.md,
    group: Dr.md
  }),
  sm: hr({
    field: Dr.sm,
    group: Dr.sm
  }),
  xs: hr({
    field: Dr.xs,
    group: Dr.xs
  })
};
function $v(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var z5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = $v(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: Q("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Tt(t, r),
        boxShadow: `0 0 0 1px ${Tt(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Tt(t, n),
        boxShadow: `0 0 0 1px ${Tt(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: Q("inherit", "whiteAlpha.50")(e),
      bg: Q("gray.100", "whiteAlpha.300")(e)
    }
  };
}), N5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = $v(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Tt(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Tt(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e)
    }
  };
}), j5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = $v(e);
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
        borderColor: Tt(t, r),
        boxShadow: `0px 1px 0px 0px ${Tt(t, r)}`
      },
      _focusVisible: {
        borderColor: Tt(t, n),
        boxShadow: `0px 1px 0px 0px ${Tt(t, n)}`
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
}), V5 = hr({
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
}), B5 = {
  outline: z5,
  filled: N5,
  flushed: j5,
  unstyled: V5
}, be = D5({
  baseStyle: F5,
  sizes: L5,
  variants: B5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Uy, W5 = {
  ...(Uy = be.baseStyle) == null ? void 0 : Uy.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Gy, Ky, H5 = {
  outline: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.outline(e).field) != null ? n : {};
  },
  flushed: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {};
  },
  filled: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.filled(e).field) != null ? n : {};
  },
  unstyled: (Ky = (Gy = be.variants) == null ? void 0 : Gy.unstyled.field) != null ? Ky : {}
}, Yy, qy, Xy, Qy, Zy, Jy, eb, tb, U5 = {
  xs: (qy = (Yy = be.sizes) == null ? void 0 : Yy.xs.field) != null ? qy : {},
  sm: (Qy = (Xy = be.sizes) == null ? void 0 : Xy.sm.field) != null ? Qy : {},
  md: (Jy = (Zy = be.sizes) == null ? void 0 : Zy.md.field) != null ? Jy : {},
  lg: (tb = (eb = be.sizes) == null ? void 0 : eb.lg.field) != null ? tb : {}
}, G5 = {
  baseStyle: W5,
  sizes: U5,
  variants: H5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, eu = rt("tooltip-bg"), Bf = rt("tooltip-fg"), K5 = rt("popper-arrow-bg"), Y5 = {
  bg: eu.reference,
  color: Bf.reference,
  [eu.variable]: "colors.gray.700",
  [Bf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [eu.variable]: "colors.gray.300",
    [Bf.variable]: "colors.gray.900"
  },
  [K5.variable]: eu.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, q5 = {
  baseStyle: Y5
}, { defineMultiStyleConfig: X5, definePartsStyle: Ja } = Ee(lA.keys), Q5 = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    zy(),
    zy("1rem", "rgba(0,0,0,0.1)")
  )(e), a = Q(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Tt(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, Z5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, J5 = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), eD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Q5(e)
}), tD = Ja((e) => ({
  label: Z5,
  filledTrack: eD(e),
  track: J5(e)
})), nD = {
  xs: Ja({
    track: { h: "1" }
  }),
  sm: Ja({
    track: { h: "2" }
  }),
  md: Ja({
    track: { h: "3" }
  }),
  lg: Ja({
    track: { h: "4" }
  })
}, rD = X5({
  sizes: nD,
  baseStyle: tD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), oD = (e) => typeof e == "function";
function Et(e, ...t) {
  return oD(e) ? e(...t) : e;
}
var { definePartsStyle: Vu, defineMultiStyleConfig: iD } = Ee(Q$.keys), ms = J("checkbox-size"), aD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ms.reference,
    h: ms.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e),
      _hover: {
        bg: Q(`${t}.600`, `${t}.300`)(e),
        borderColor: Q(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: Q("gray.200", "transparent")(e),
        bg: Q("gray.200", "whiteAlpha.300")(e),
        color: Q("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e)
    },
    _disabled: {
      bg: Q("gray.100", "whiteAlpha.100")(e),
      borderColor: Q("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: Q("red.500", "red.300")(e)
    }
  };
}, sD = {
  _disabled: { cursor: "not-allowed" }
}, lD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, uD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, cD = Vu((e) => ({
  icon: uD,
  container: sD,
  control: Et(aD, e),
  label: lD
})), dD = {
  sm: Vu({
    control: { [ms.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Vu({
    control: { [ms.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Vu({
    control: { [ms.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Tc = iD({
  baseStyle: cD,
  sizes: dD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: fD, definePartsStyle: Bu } = Ee(uA.keys), pD = (e) => {
  var t;
  const n = (t = Et(Tc.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...n,
    borderRadius: "full",
    _checked: {
      ...n == null ? void 0 : n._checked,
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
}, hD = Bu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Tc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Tc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: pD(e)
  };
}), mD = {
  md: Bu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Bu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Bu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, vD = fD({
  baseStyle: hD,
  sizes: mD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: gD, definePartsStyle: yD } = Ee(cA.keys), tu = J("select-bg"), nb, bD = {
  ...(nb = be.baseStyle) == null ? void 0 : nb.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: tu.reference,
  [tu.variable]: "colors.white",
  _dark: {
    [tu.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: tu.reference
  }
}, SD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, xD = yD({
  field: bD,
  icon: SD
}), nu = {
  paddingInlineEnd: "8"
}, rb, ob, ib, ab, sb, lb, ub, cb, wD = {
  lg: {
    ...(rb = be.sizes) == null ? void 0 : rb.lg,
    field: {
      ...(ob = be.sizes) == null ? void 0 : ob.lg.field,
      ...nu
    }
  },
  md: {
    ...(ib = be.sizes) == null ? void 0 : ib.md,
    field: {
      ...(ab = be.sizes) == null ? void 0 : ab.md.field,
      ...nu
    }
  },
  sm: {
    ...(sb = be.sizes) == null ? void 0 : sb.sm,
    field: {
      ...(lb = be.sizes) == null ? void 0 : lb.sm.field,
      ...nu
    }
  },
  xs: {
    ...(ub = be.sizes) == null ? void 0 : ub.xs,
    field: {
      ...(cb = be.sizes) == null ? void 0 : cb.xs.field,
      ...nu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, CD = gD({
  baseStyle: xD,
  sizes: wD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Wf = J("skeleton-start-color"), Hf = J("skeleton-end-color"), kD = {
  [Wf.variable]: "colors.gray.100",
  [Hf.variable]: "colors.gray.400",
  _dark: {
    [Wf.variable]: "colors.gray.800",
    [Hf.variable]: "colors.gray.600"
  },
  background: Wf.reference,
  borderColor: Hf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, PD = {
  baseStyle: kD
}, Uf = J("skip-link-bg"), TD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Uf.variable]: "colors.white",
    _dark: {
      [Uf.variable]: "colors.gray.700"
    },
    bg: Uf.reference
  }
}, _D = {
  baseStyle: TD
}, { defineMultiStyleConfig: ED, definePartsStyle: $d } = Ee(dA.keys), Ks = J("slider-thumb-size"), Ys = J("slider-track-size"), Wr = J("slider-bg"), OD = (e) => {
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
    ...Rv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, MD = (e) => ({
  ...Rv({
    orientation: e.orientation,
    horizontal: { h: Ys.reference },
    vertical: { w: Ys.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Wr.variable]: "colors.gray.200",
  _dark: {
    [Wr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Wr.variable]: "colors.gray.300",
    _dark: {
      [Wr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Wr.reference
}), ID = (e) => {
  const { orientation: t } = e;
  return {
    ...Rv({
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
    w: Ks.reference,
    h: Ks.reference,
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
}, RD = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Wr.variable]: `colors.${t}.500`,
    _dark: {
      [Wr.variable]: `colors.${t}.200`
    },
    bg: Wr.reference
  };
}, $D = $d((e) => ({
  container: OD(e),
  track: MD(e),
  thumb: ID(e),
  filledTrack: RD(e)
})), AD = $d({
  container: {
    [Ks.variable]: "sizes.4",
    [Ys.variable]: "sizes.1"
  }
}), DD = $d({
  container: {
    [Ks.variable]: "sizes.3.5",
    [Ys.variable]: "sizes.1"
  }
}), FD = $d({
  container: {
    [Ks.variable]: "sizes.2.5",
    [Ys.variable]: "sizes.0.5"
  }
}), LD = {
  lg: AD,
  md: DD,
  sm: FD
}, zD = ED({
  baseStyle: $D,
  sizes: LD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Eo = rt("spinner-size"), ND = {
  width: [Eo.reference],
  height: [Eo.reference]
}, jD = {
  xs: {
    [Eo.variable]: "sizes.3"
  },
  sm: {
    [Eo.variable]: "sizes.4"
  },
  md: {
    [Eo.variable]: "sizes.6"
  },
  lg: {
    [Eo.variable]: "sizes.8"
  },
  xl: {
    [Eo.variable]: "sizes.12"
  }
}, VD = {
  baseStyle: ND,
  sizes: jD,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: BD, definePartsStyle: PC } = Ee(fA.keys), WD = {
  fontWeight: "medium"
}, HD = {
  opacity: 0.8,
  marginBottom: "2"
}, UD = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, GD = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, KD = PC({
  container: {},
  label: WD,
  helpText: HD,
  number: UD,
  icon: GD
}), YD = {
  md: PC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, qD = BD({
  baseStyle: KD,
  sizes: YD,
  defaultProps: {
    size: "md"
  }
}), Gf = J("kbd-bg"), XD = {
  [Gf.variable]: "colors.gray.100",
  _dark: {
    [Gf.variable]: "colors.whiteAlpha.100"
  },
  bg: Gf.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, QD = {
  baseStyle: XD
}, ZD = {
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
}, JD = {
  baseStyle: ZD
}, { defineMultiStyleConfig: eF, definePartsStyle: tF } = Ee(rA.keys), nF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, rF = tF({
  icon: nF
}), oF = eF({
  baseStyle: rF
}), { defineMultiStyleConfig: iF, definePartsStyle: aF } = Ee(oA.keys), Hn = J("menu-bg"), Kf = J("menu-shadow"), sF = {
  [Hn.variable]: "#fff",
  [Kf.variable]: "shadows.sm",
  _dark: {
    [Hn.variable]: "colors.gray.700",
    [Kf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Hn.reference,
  boxShadow: Kf.reference
}, lF = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Hn.variable]: "colors.gray.100",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Hn.variable]: "colors.gray.200",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Hn.variable]: "colors.gray.100",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Hn.reference
}, uF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, cF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, dF = {
  opacity: 0.6
}, fF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, pF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, hF = aF({
  button: pF,
  list: sF,
  item: lF,
  groupTitle: uF,
  icon: cF,
  command: dF,
  divider: fF
}), mF = iF({
  baseStyle: hF
}), { defineMultiStyleConfig: vF, definePartsStyle: Lh } = Ee(iA.keys), Yf = J("modal-bg"), qf = J("modal-shadow"), gF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, yF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, bF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Yf.variable]: "colors.white",
    [qf.variable]: "shadows.lg",
    _dark: {
      [Yf.variable]: "colors.gray.700",
      [qf.variable]: "shadows.dark-lg"
    },
    bg: Yf.reference,
    boxShadow: qf.reference
  };
}, SF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, xF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, wF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, CF = {
  px: "6",
  py: "4"
}, kF = Lh((e) => ({
  overlay: gF,
  dialogContainer: Et(yF, e),
  dialog: Et(bF, e),
  header: SF,
  closeButton: xF,
  body: Et(wF, e),
  footer: CF
}));
function _n(e) {
  return Lh(e === "full" ? {
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
var PF = {
  xs: _n("xs"),
  sm: _n("sm"),
  md: _n("md"),
  lg: _n("lg"),
  xl: _n("xl"),
  "2xl": _n("2xl"),
  "3xl": _n("3xl"),
  "4xl": _n("4xl"),
  "5xl": _n("5xl"),
  "6xl": _n("6xl"),
  full: _n("full")
}, TF = vF({
  baseStyle: kF,
  sizes: PF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: _F, definePartsStyle: TC } = Ee(aA.keys), Av = rt("number-input-stepper-width"), _C = rt("number-input-input-padding"), EF = dr(Av).add("0.5rem").toString(), Xf = rt("number-input-bg"), Qf = rt("number-input-color"), Zf = rt("number-input-border-color"), OF = {
  [Av.variable]: "sizes.6",
  [_C.variable]: EF
}, MF = (e) => {
  var t, n;
  return (n = (t = Et(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, IF = {
  width: Av.reference
}, RF = {
  borderStart: "1px solid",
  borderStartColor: Zf.reference,
  color: Qf.reference,
  bg: Xf.reference,
  [Qf.variable]: "colors.chakra-body-text",
  [Zf.variable]: "colors.chakra-border-color",
  _dark: {
    [Qf.variable]: "colors.whiteAlpha.800",
    [Zf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Xf.variable]: "colors.gray.200",
    _dark: {
      [Xf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, $F = TC((e) => {
  var t;
  return {
    root: OF,
    field: (t = Et(MF, e)) != null ? t : {},
    stepperGroup: IF,
    stepper: RF
  };
});
function ru(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = SC.fontSizes[a];
  return TC({
    field: {
      ...o.field,
      paddingInlineEnd: _C.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: dr(s).multiply(0.75).toString(),
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
var AF = {
  xs: ru("xs"),
  sm: ru("sm"),
  md: ru("md"),
  lg: ru("lg")
}, DF = _F({
  baseStyle: $F,
  sizes: AF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), db, FF = {
  ...(db = be.baseStyle) == null ? void 0 : db.field,
  textAlign: "center"
}, LF = {
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
}, fb, pb, zF = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (pb = (fb = be.variants) == null ? void 0 : fb.unstyled.field) != null ? pb : {}
}, NF = {
  baseStyle: FF,
  sizes: LF,
  variants: zF,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: jF, definePartsStyle: VF } = Ee(sA.keys), ou = rt("popper-bg"), BF = rt("popper-arrow-bg"), hb = rt("popper-arrow-shadow-color"), WF = { zIndex: 10 }, HF = {
  [ou.variable]: "colors.white",
  bg: ou.reference,
  [BF.variable]: ou.reference,
  [hb.variable]: "colors.gray.200",
  _dark: {
    [ou.variable]: "colors.gray.700",
    [hb.variable]: "colors.whiteAlpha.300"
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
}, UF = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, GF = {
  px: 3,
  py: 2
}, KF = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, YF = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, qF = VF({
  popper: WF,
  content: HF,
  header: UF,
  body: GF,
  footer: KF,
  closeButton: YF
}), XF = jF({
  baseStyle: qF
}), { definePartsStyle: zh, defineMultiStyleConfig: QF } = Ee(Z$.keys), Jf = J("drawer-bg"), ep = J("drawer-box-shadow");
function ai(e) {
  return zh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var ZF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, JF = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, e4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Jf.variable]: "colors.white",
    [ep.variable]: "shadows.lg",
    _dark: {
      [Jf.variable]: "colors.gray.700",
      [ep.variable]: "shadows.dark-lg"
    },
    bg: Jf.reference,
    boxShadow: ep.reference
  };
}, t4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, n4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, r4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, o4 = {
  px: "6",
  py: "4"
}, i4 = zh((e) => ({
  overlay: ZF,
  dialogContainer: JF,
  dialog: Et(e4, e),
  header: t4,
  closeButton: n4,
  body: r4,
  footer: o4
})), a4 = {
  xs: ai("xs"),
  sm: ai("md"),
  md: ai("lg"),
  lg: ai("2xl"),
  xl: ai("4xl"),
  full: ai("full")
}, s4 = QF({
  baseStyle: i4,
  sizes: a4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: l4, defineMultiStyleConfig: u4 } = Ee(J$.keys), c4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, d4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, f4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, p4 = l4({
  preview: c4,
  input: d4,
  textarea: f4
}), h4 = u4({
  baseStyle: p4
}), { definePartsStyle: m4, defineMultiStyleConfig: v4 } = Ee(eA.keys), Gi = J("form-control-color"), g4 = {
  marginStart: "1",
  [Gi.variable]: "colors.red.500",
  _dark: {
    [Gi.variable]: "colors.red.300"
  },
  color: Gi.reference
}, y4 = {
  mt: "2",
  [Gi.variable]: "colors.gray.600",
  _dark: {
    [Gi.variable]: "colors.whiteAlpha.600"
  },
  color: Gi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, b4 = m4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: g4,
  helperText: y4
}), S4 = v4({
  baseStyle: b4
}), { definePartsStyle: x4, defineMultiStyleConfig: w4 } = Ee(tA.keys), Ki = J("form-error-color"), C4 = {
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, k4 = {
  marginEnd: "0.5em",
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference
}, P4 = x4({
  text: C4,
  icon: k4
}), T4 = w4({
  baseStyle: P4
}), _4 = {
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
}, E4 = {
  baseStyle: _4
}, O4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, M4 = {
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
}, I4 = {
  baseStyle: O4,
  sizes: M4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: R4, definePartsStyle: $4 } = Ee(X$.keys), tp = J("breadcrumb-link-decor"), A4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: tp.reference,
  [tp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [tp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, D4 = $4({
  link: A4
}), F4 = R4({
  baseStyle: D4
}), L4 = {
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
}, EC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: Q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = la(`${t}.200`, 0.12)(n), o = la(`${t}.200`, 0.24)(n);
  return {
    color: Q(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: Q(`${t}.50`, r)(e)
    },
    _active: {
      bg: Q(`${t}.100`, o)(e)
    }
  };
}, z4 = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Et(EC, e)
  };
}, N4 = {
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
}, j4 = (e) => {
  var t;
  const { colorScheme: n } = e;
  if (n === "gray") {
    const l = Q("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: Q("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${n}.500`,
    color: o = "white",
    hoverBg: i = `${n}.600`,
    activeBg: a = `${n}.700`
  } = (t = N4[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
  return {
    bg: s,
    color: Q(o, "gray.800")(e),
    _hover: {
      bg: Q(i, `${n}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: Q(a, `${n}.400`)(e) }
  };
}, V4 = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: Q(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: Q(`${t}.700`, `${t}.500`)(e)
    }
  };
}, B4 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, W4 = {
  ghost: EC,
  outline: z4,
  solid: j4,
  link: V4,
  unstyled: B4
}, H4 = {
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
}, U4 = {
  baseStyle: L4,
  variants: W4,
  sizes: H4,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: No, defineMultiStyleConfig: G4 } = Ee(gA.keys), _c = J("card-bg"), gr = J("card-padding"), OC = J("card-shadow"), Wu = J("card-radius"), MC = J("card-border-width", "0"), IC = J("card-border-color"), K4 = No({
  container: {
    [_c.variable]: "colors.chakra-body-bg",
    backgroundColor: _c.reference,
    boxShadow: OC.reference,
    borderRadius: Wu.reference,
    color: "chakra-body-text",
    borderWidth: MC.reference,
    borderColor: IC.reference
  },
  body: {
    padding: gr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: gr.reference
  },
  footer: {
    padding: gr.reference
  }
}), Y4 = {
  sm: No({
    container: {
      [Wu.variable]: "radii.base",
      [gr.variable]: "space.3"
    }
  }),
  md: No({
    container: {
      [Wu.variable]: "radii.md",
      [gr.variable]: "space.5"
    }
  }),
  lg: No({
    container: {
      [Wu.variable]: "radii.xl",
      [gr.variable]: "space.7"
    }
  })
}, q4 = {
  elevated: No({
    container: {
      [OC.variable]: "shadows.base",
      _dark: {
        [_c.variable]: "colors.gray.700"
      }
    }
  }),
  outline: No({
    container: {
      [MC.variable]: "1px",
      [IC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: No({
    container: {
      [_c.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [gr.variable]: 0
    },
    header: {
      [gr.variable]: 0
    },
    footer: {
      [gr.variable]: 0
    }
  }
}, X4 = G4({
  baseStyle: K4,
  variants: q4,
  sizes: Y4,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), vs = rt("close-button-size"), Na = rt("close-button-bg"), Q4 = {
  w: [vs.reference],
  h: [vs.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Na.variable]: "colors.blackAlpha.100",
    _dark: {
      [Na.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Na.variable]: "colors.blackAlpha.200",
    _dark: {
      [Na.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Na.reference
}, Z4 = {
  lg: {
    [vs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [vs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [vs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, J4 = {
  baseStyle: Q4,
  sizes: Z4,
  defaultProps: {
    size: "md"
  }
}, { variants: eL, defaultProps: tL } = hs, nL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, rL = {
  baseStyle: nL,
  variants: eL,
  defaultProps: tL
}, oL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, iL = {
  baseStyle: oL
}, aL = {
  opacity: 0.6,
  borderColor: "inherit"
}, sL = {
  borderStyle: "solid"
}, lL = {
  borderStyle: "dashed"
}, uL = {
  solid: sL,
  dashed: lL
}, cL = {
  baseStyle: aL,
  variants: uL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: dL, defineMultiStyleConfig: fL } = Ee(K$.keys), pL = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, hL = {
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
}, mL = {
  pt: "2",
  px: "4",
  pb: "5"
}, vL = {
  fontSize: "1.25em"
}, gL = dL({
  container: pL,
  button: hL,
  panel: mL,
  icon: vL
}), yL = fL({ baseStyle: gL }), { definePartsStyle: hl, defineMultiStyleConfig: bL } = Ee(Y$.keys), Xt = J("alert-fg"), Pr = J("alert-bg"), SL = hl({
  container: {
    bg: Pr.reference,
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
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Dv(e) {
  const { theme: t, colorScheme: n } = e, r = la(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var xL = hl((e) => {
  const { colorScheme: t } = e, n = Dv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      }
    }
  };
}), wL = hl((e) => {
  const { colorScheme: t } = e, n = Dv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Xt.reference
    }
  };
}), CL = hl((e) => {
  const { colorScheme: t } = e, n = Dv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Xt.reference
    }
  };
}), kL = hl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Xt.variable]: "colors.white",
      [Pr.variable]: `colors.${t}.600`,
      _dark: {
        [Xt.variable]: "colors.gray.900",
        [Pr.variable]: `colors.${t}.200`
      },
      color: Xt.reference
    }
  };
}), PL = {
  subtle: xL,
  "left-accent": wL,
  "top-accent": CL,
  solid: kL
}, TL = bL({
  baseStyle: SL,
  variants: PL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: RC, defineMultiStyleConfig: _L } = Ee(q$.keys), Yi = J("avatar-border-color"), gs = J("avatar-bg"), qs = J("avatar-font-size"), ua = J("avatar-size"), EL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Yi.reference,
  [Yi.variable]: "white",
  _dark: {
    [Yi.variable]: "colors.gray.800"
  }
}, OL = {
  bg: gs.reference,
  fontSize: qs.reference,
  width: ua.reference,
  height: ua.reference,
  lineHeight: "1",
  [gs.variable]: "colors.gray.200",
  _dark: {
    [gs.variable]: "colors.whiteAlpha.400"
  }
}, ML = (e) => {
  const { name: t, theme: n } = e, r = t ? LA({ string: t }) : "colors.gray.400", o = DA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: gs.reference,
    fontSize: qs.reference,
    color: i,
    borderColor: Yi.reference,
    verticalAlign: "top",
    width: ua.reference,
    height: ua.reference,
    "&:not([data-loaded])": {
      [gs.variable]: r
    },
    [Yi.variable]: "colors.white",
    _dark: {
      [Yi.variable]: "colors.gray.800"
    }
  };
}, IL = {
  fontSize: qs.reference,
  lineHeight: "1"
}, RL = RC((e) => ({
  badge: Et(EL, e),
  excessLabel: Et(OL, e),
  container: Et(ML, e),
  label: IL
}));
function Fr(e) {
  const t = e !== "100%" ? wC[e] : void 0;
  return RC({
    container: {
      [ua.variable]: t ?? e,
      [qs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [ua.variable]: t ?? e,
      [qs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var $L = {
  "2xs": Fr(4),
  xs: Fr(6),
  sm: Fr(8),
  md: Fr(12),
  lg: Fr(16),
  xl: Fr(24),
  "2xl": Fr(32),
  full: Fr("100%")
}, AL = _L({
  baseStyle: RL,
  sizes: $L,
  defaultProps: {
    size: "md"
  }
}), DL = {
  Accordion: yL,
  Alert: TL,
  Avatar: AL,
  Badge: hs,
  Breadcrumb: F4,
  Button: U4,
  Checkbox: Tc,
  CloseButton: J4,
  Code: rL,
  Container: iL,
  Divider: cL,
  Drawer: s4,
  Editable: h4,
  Form: S4,
  FormError: T4,
  FormLabel: E4,
  Heading: I4,
  Input: be,
  Kbd: QD,
  Link: JD,
  List: oF,
  Menu: mF,
  Modal: TF,
  NumberInput: DF,
  PinInput: NF,
  Popover: XF,
  Progress: rD,
  Radio: vD,
  Select: CD,
  Skeleton: PD,
  SkipLink: _D,
  Slider: zD,
  Spinner: VD,
  Stat: qD,
  Switch: JA,
  Table: a5,
  Tabs: x5,
  Tag: A5,
  Textarea: G5,
  Tooltip: q5,
  Card: X4,
  Stepper: G$
}, FL = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, LL = {
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
}, zL = "ltr", NL = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, $C = {
  semanticTokens: FL,
  direction: zL,
  ...W$,
  components: DL,
  styles: LL,
  config: NL
};
function es(e) {
  return typeof e == "function";
}
function jL(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var VL = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return b$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, jL(
    ...r.map(
      (i) => (a) => es(i) ? i(a) : WL(a, i)
    )
  )(o);
}, BL = VL($C);
function WL(...e) {
  return mn({}, ...e, AC);
}
function AC(e, t, n, r) {
  if ((es(e) || es(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = es(e) ? e(...o) : e, a = es(t) ? t(...o) : t;
      return mn({}, i, a, AC);
    };
}
function HL() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var UL = /* @__PURE__ */ HL();
function GL(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function KL(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var YL = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, DC = YL(KL);
function FC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var LC = (e) => FC(e, (t) => t != null);
function qL(e) {
  return typeof e == "function";
}
function zC(e, ...t) {
  return qL(e) ? e(...t) : e;
}
function XL(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var QL = typeof Element < "u", ZL = typeof Map == "function", JL = typeof Set == "function", e3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hu(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Hu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (ZL && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Hu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (JL && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (e3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    if (QL && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Hu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var t3 = function(t, n) {
  try {
    return Hu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const n3 = /* @__PURE__ */ il(t3);
function NC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = eR(), s = e ? DC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    LC(GL(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = g$(l)(u);
    n3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Qo(e, t = {}) {
  return NC(e, t);
}
function Ct(e, t = {}) {
  return NC(e, t);
}
var r3 = /* @__PURE__ */ new Set([
  ...i$,
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
]), o3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function i3(e) {
  return o3.has(e) || !r3.has(e);
}
function a3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function s3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var l3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, u3 = /* @__PURE__ */ qw(
  function(e) {
    return l3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), c3 = u3, d3 = function(t) {
  return t !== "theme";
}, mb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? c3 : d3;
}, vb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, f3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return xv(n, r, o), oC(function() {
    return wv(n, r, o);
  }), null;
}, p3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = vb(t, n, r), l = s || mb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = kv(function(g, S, m) {
      var h = u && g.as || o, b = "", x = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var P in g)
          k[P] = g[P];
        k.theme = v.useContext(aa);
      }
      typeof g.className == "string" ? b = tC(S.registered, x, g.className) : g.className != null && (b = g.className + " ");
      var T = Ed(d.concat(x), S.registered, k);
      b += S.key + "-" + T.name, a !== void 0 && (b += " " + a);
      var _ = u && s === void 0 ? mb(h) : l, M = {};
      for (var I in g)
        u && I === "as" || // $FlowFixMe
        _(I) && (M[I] = g[I]);
      return M.className = b, M.ref = m, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(f3, {
        cache: S,
        serialized: T,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ v.createElement(h, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(g, S) {
      return e(g, q({}, n, S, {
        shouldForwardProp: vb(y, S, !0)
      })).apply(void 0, d);
    }, y;
  };
}, h3 = [
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
], Ec = p3.bind();
h3.forEach(function(e) {
  Ec[e] = Ec(e);
});
var gb, m3 = (gb = Ec.default) != null ? gb : Ec, v3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = FC(a, (d, f) => s$(f)), l = zC(e, t), u = a3(
    {},
    o,
    l,
    LC(s),
    i
  ), c = bC(u)(t.theme);
  return r ? [c, r] : c;
};
function np(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = i3);
  const o = v3({ baseStyle: n }), i = m3(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = wa();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function g3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(np, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return np(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, np(n)), e.get(n);
    }
  });
}
var X = g3();
function oe(e) {
  return v.forwardRef(e);
}
function y3(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = v.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = v.useContext(o);
    if (!s && t) {
      const l = new Error(n);
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
function b3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = v.useMemo(() => o$(n), [n]);
  return /* @__PURE__ */ w.jsxs(II, { theme: o, children: [
    /* @__PURE__ */ w.jsx(S3, { root: t }),
    r
  ] });
}
function S3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx(Od, { styles: (n) => ({ [t]: n.__cssVars }) });
}
y3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function x3() {
  const { colorMode: e } = wa();
  return /* @__PURE__ */ w.jsx(
    Od,
    {
      styles: (t) => {
        const n = DC(t, "styles.global"), r = zC(n, { theme: t, colorMode: e });
        return r ? bC(r)(t) : void 0;
      }
    }
  );
}
var Fv = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Fv.displayName = "EnvironmentContext";
function w3({ defer: e } = {}) {
  const [, t] = v.useReducer((n) => n + 1, 0);
  return sa(() => {
    e && t();
  }, [e]), v.useContext(Fv);
}
function jC(e) {
  const { children: t, environment: n, disabled: r } = e, o = v.useRef(null), i = v.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ w.jsxs(Fv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
jC.displayName = "EnvironmentProvider";
var C3 = (e) => {
  const {
    children: t,
    colorModeManager: n,
    portalZIndex: r,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ w.jsx(
    jC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(b3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    dC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(LI, { scope: o }) : /* @__PURE__ */ w.jsx(FI, {}),
        !c && /* @__PURE__ */ w.jsx(x3, {}),
        r ? /* @__PURE__ */ w.jsx(uC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, k3 = (e, t) => e.find((n) => n.id === t);
function yb(e, t) {
  const n = VC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function VC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (k3(r, t))
      return n;
}
function P3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function T3(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0, r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a
  };
}
function to(e, t = []) {
  const n = v.useRef(e);
  return v.useEffect(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function _3(e, t) {
  const n = to(e);
  v.useEffect(() => {
    if (t == null)
      return;
    let r = null;
    return r = window.setTimeout(() => {
      n();
    }, t), () => {
      r && window.clearTimeout(r);
    };
  }, [t, n]);
}
function ca(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const BC = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ad = v.createContext({}), ml = v.createContext(null), Dd = typeof document < "u", Lv = Dd ? v.useLayoutEffect : v.useEffect, WC = v.createContext({ strict: !1 }), zv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), E3 = "framerAppearId", HC = "data-" + zv(E3);
function O3(e, t, n, r) {
  const { visualElement: o } = v.useContext(Ad), i = v.useContext(WC), a = v.useContext(ml), s = v.useContext(BC).reducedMotion, l = v.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  v.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = v.useRef(!!n[HC]);
  return Lv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ii(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function M3(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ii(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Xs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Fd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Nv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], jv = ["initial", ...Nv];
function Ld(e) {
  return Fd(e.animate) || jv.some((t) => Xs(e[t]));
}
function UC(e) {
  return !!(Ld(e) || e.variants);
}
function I3(e, t) {
  if (Ld(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xs(n) ? n : void 0,
      animate: Xs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function R3(e) {
  const { initial: t, animate: n } = I3(e, v.useContext(Ad));
  return v.useMemo(() => ({ initial: t, animate: n }), [bb(t), bb(n)]);
}
function bb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Sb = {
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
}, Qs = {};
for (const e in Sb)
  Qs[e] = {
    isEnabled: (t) => Sb[e].some((n) => !!t[n])
  };
function $3(e) {
  for (const t in e)
    Qs[t] = {
      ...Qs[t],
      ...e[t]
    };
}
const Vv = v.createContext({}), GC = v.createContext({}), A3 = Symbol.for("motionComponentSymbol");
function D3({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && $3(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(BC),
      ...s,
      layoutId: F3(s)
    }, { isStatic: d } = c, f = R3(s), p = r(s, d);
    if (!d && Dd) {
      f.visualElement = O3(o, p, c, t);
      const y = v.useContext(GC), g = v.useContext(WC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        y
      ));
    }
    return v.createElement(
      Ad.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, M3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[A3] = o, a;
}
function F3({ layoutId: e }) {
  const t = v.useContext(Vv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function L3(e) {
  function t(r, o = {}) {
    return D3(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const z3 = [
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
function Bv(e) {
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
      !!(z3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Oc = {};
function N3(e) {
  Object.assign(Oc, e);
}
const vl = [
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
], Zo = new Set(vl);
function KC(e, { layout: t, layoutId: n }) {
  return Zo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Oc[e] || e === "opacity");
}
const Vt = (e) => !!(e && e.getVelocity), j3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, V3 = vl.length;
function B3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < V3; a++) {
    const s = vl[a];
    if (e[s] !== void 0) {
      const l = j3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const YC = (e) => (t) => typeof t == "string" && t.startsWith(e), qC = YC("--"), Nh = YC("var(--"), W3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, H3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ao = (e, t, n) => Math.min(Math.max(n, e), t), Jo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ys = {
  ...Jo,
  transform: (e) => ao(0, 1, e)
}, iu = {
  ...Jo,
  default: 1
}, bs = (e) => Math.round(e * 1e5) / 1e5, zd = /(-)?([\d]*\.?[\d])+/g, XC = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, U3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function gl(e) {
  return typeof e == "string";
}
const yl = (e) => ({
  test: (t) => gl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = yl("deg"), er = yl("%"), ne = yl("px"), G3 = yl("vh"), K3 = yl("vw"), xb = {
  ...er,
  parse: (e) => er.parse(e) / 100,
  transform: (e) => er.transform(e * 100)
}, wb = {
  ...Jo,
  transform: Math.round
}, QC = {
  // Border props
  borderWidth: ne,
  borderTopWidth: ne,
  borderRightWidth: ne,
  borderBottomWidth: ne,
  borderLeftWidth: ne,
  borderRadius: ne,
  radius: ne,
  borderTopLeftRadius: ne,
  borderTopRightRadius: ne,
  borderBottomRightRadius: ne,
  borderBottomLeftRadius: ne,
  // Positioning props
  width: ne,
  maxWidth: ne,
  height: ne,
  maxHeight: ne,
  size: ne,
  top: ne,
  right: ne,
  bottom: ne,
  left: ne,
  // Spacing props
  padding: ne,
  paddingTop: ne,
  paddingRight: ne,
  paddingBottom: ne,
  paddingLeft: ne,
  margin: ne,
  marginTop: ne,
  marginRight: ne,
  marginBottom: ne,
  marginLeft: ne,
  // Transform props
  rotate: Lr,
  rotateX: Lr,
  rotateY: Lr,
  rotateZ: Lr,
  scale: iu,
  scaleX: iu,
  scaleY: iu,
  scaleZ: iu,
  skew: Lr,
  skewX: Lr,
  skewY: Lr,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: ys,
  originX: xb,
  originY: xb,
  originZ: ne,
  // Misc
  zIndex: wb,
  // SVG
  fillOpacity: ys,
  strokeOpacity: ys,
  numOctaves: wb
};
function Wv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (qC(d)) {
      i[d] = f;
      continue;
    }
    const p = QC[d], y = H3(f, p);
    if (Zo.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = B3(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Hv = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ZC(e, t, n) {
  for (const r in t)
    !Vt(t[r]) && !KC(r, n) && (e[r] = t[r]);
}
function Y3({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = Hv();
    return Wv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function q3(e, t, n) {
  const r = e.style || {}, o = {};
  return ZC(o, r, e), Object.assign(o, Y3(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function X3(e, t, n) {
  const r = {}, o = q3(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const Q3 = /* @__PURE__ */ new Set([
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
function Mc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Q3.has(e);
}
let JC = (e) => !Mc(e);
function Z3(e) {
  e && (JC = (t) => t.startsWith("on") ? !Mc(t) : e(t));
}
try {
  Z3(require("@emotion/is-prop-valid").default);
} catch {
}
function J3(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (JC(o) || n === !0 && Mc(o) || !t && !Mc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Cb(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function ez(e, t, n) {
  const r = Cb(t, e.x, e.width), o = Cb(n, e.y, e.height);
  return `${r} ${o}`;
}
const tz = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, nz = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function rz(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? tz : nz;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Uv(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (Wv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: g } = e;
  p.transform && (g && (y.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = ez(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && rz(p, a, s, l, !1);
}
const ek = () => ({
  ...Hv(),
  attrs: {}
}), Gv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function oz(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = ek();
    return Uv(i, t, { enableHardwareAcceleration: !1 }, Gv(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ZC(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function iz(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Bv(n) ? oz : X3)(r, i, a, n), c = {
      ...J3(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = v.useMemo(() => Vt(d) ? d.get() : d, [d]);
    return v.createElement(n, {
      ...c,
      children: f
    });
  };
}
function tk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const nk = /* @__PURE__ */ new Set([
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
function rk(e, t, n, r) {
  tk(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(nk.has(o) ? o : zv(o), t.attrs[o]);
}
function Kv(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Vt(n[o]) || t.style && Vt(t.style[o]) || KC(o, e)) && (r[o] = n[o]);
  return r;
}
function ok(e, t) {
  const n = Kv(e, t);
  for (const r in e)
    if (Vt(e[r]) || Vt(t[r])) {
      const o = vl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function Yv(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function ik(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ic = (e) => Array.isArray(e), az = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), sz = (e) => Ic(e) ? e[e.length - 1] || 0 : e;
function Uu(e) {
  const t = Vt(e) ? e.get() : e;
  return az(t) ? t.toValue() : t;
}
function lz({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: uz(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const ak = (e) => (t, n) => {
  const r = v.useContext(Ad), o = v.useContext(ml), i = () => lz(e, t, r, o);
  return n ? i() : ik(i);
};
function uz(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Uu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Ld(e), u = UC(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Fd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = Yv(e, p);
    if (!y)
      return;
    const { transitionEnd: g, transition: S, ...m } = y;
    for (const h in m) {
      let b = m[h];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[h] = b);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const He = (e) => e;
class kb {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function cz(e) {
  let t = new kb(), n = new kb(), r = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : n;
      return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const au = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], dz = 40;
function fz(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = au.reduce((d, f) => (d[f] = cz(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, dz), 1), o.timestamp = d, o.isProcessing = !0, au.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: au.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, g = !1, S = !1) => (n || l(), p.schedule(y, g, S)), d;
  }, {}), cancel: (d) => au.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: _e, cancel: Tr, state: ot, steps: rp } = fz(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), pz = {
  useVisualState: ak({
    scrapeMotionValuesFromProps: ok,
    createRenderState: ek,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      _e.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), _e.render(() => {
        Uv(n, r, { enableHardwareAcceleration: !1 }, Gv(t.tagName), e.transformTemplate), rk(t, n);
      });
    }
  })
}, hz = {
  useVisualState: ak({
    scrapeMotionValuesFromProps: Kv,
    createRenderState: Hv
  })
};
function mz(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Bv(e) ? pz : hz,
    preloadedFeatures: n,
    useRender: iz(t),
    createVisualElement: r,
    Component: e
  };
}
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Nd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const vz = (e) => (t) => sk(t) && e(t, Nd(t));
function yr(e, t, n, r) {
  return mr(e, t, vz(n), r);
}
const gz = (e, t) => (n) => t(e(n)), no = (...e) => e.reduce(gz);
function lk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Pb = lk("dragHorizontal"), Tb = lk("dragVertical");
function uk(e) {
  let t = !1;
  if (e === "y")
    t = Tb();
  else if (e === "x")
    t = Pb();
  else {
    const n = Pb(), r = Tb();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function ck() {
  const e = uk(!0);
  return e ? (e(), !1) : !0;
}
class ho {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function _b(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || ck())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && _e.update(() => s[r](i, a));
  };
  return yr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class yz extends ho {
  mount() {
    this.unmount = no(_b(this.node, !0), _b(this.node, !1));
  }
  unmount() {
  }
}
class bz extends ho {
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
    this.unmount = no(mr(this.node.current, "focus", () => this.onFocus()), mr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const dk = (e, t) => t ? e === t ? !0 : dk(e, t.parentElement) : !1;
function op(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Nd(n));
}
class Sz extends ho {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = yr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        _e.update(() => {
          dk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = yr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = no(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || op("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && _e.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mr(this.node.current, "keyup", a), op("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = mr(this.node.current, "keydown", t), r = () => {
        this.isPressing && op("cancel", (i, a) => this.cancelPress(i, a));
      }, o = mr(this.node.current, "blur", r);
      this.removeAccessibleListeners = no(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && _e.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ck();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = yr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = mr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = no(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const jh = /* @__PURE__ */ new WeakMap(), ip = /* @__PURE__ */ new WeakMap(), xz = (e) => {
  const t = jh.get(e.target);
  t && t(e);
}, wz = (e) => {
  e.forEach(xz);
};
function Cz({ root: e, ...t }) {
  const n = e || document;
  ip.has(n) || ip.set(n, {});
  const r = ip.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(wz, { root: e, ...t })), r[o];
}
function kz(e, t, n) {
  const r = Cz(t);
  return jh.set(e, n), r.observe(e), () => {
    jh.delete(e), r.unobserve(e);
  };
}
const Pz = {
  some: 0,
  all: 1
};
class Tz extends ho {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Pz[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return kz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(_z(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function _z({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ez = {
  inView: {
    Feature: Tz
  },
  tap: {
    Feature: Sz
  },
  focus: {
    Feature: bz
  },
  hover: {
    Feature: yz
  }
};
function fk(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Oz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Mz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function jd(e, t, n) {
  const r = e.getProps();
  return Yv(r, t, n !== void 0 ? n : r.custom, Oz(e), Mz(e));
}
let Iz = He, qv = He;
const ro = (e) => e * 1e3, br = (e) => e / 1e3, Rz = {
  current: !1
}, pk = (e) => Array.isArray(e) && typeof e[0] == "number";
function hk(e) {
  return !!(!e || typeof e == "string" && mk[e] || pk(e) || Array.isArray(e) && e.every(hk));
}
const ts = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, mk = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ts([0, 0.65, 0.55, 1]),
  circOut: ts([0.55, 0, 1, 0.45]),
  backIn: ts([0.31, 0.01, 0.66, -0.59]),
  backOut: ts([0.33, 1.53, 0.69, 0.99])
};
function vk(e) {
  if (e)
    return pk(e) ? ts(e) : Array.isArray(e) ? e.map(vk) : mk[e];
}
function $z(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function Az(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const gk = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Dz = 1e-7, Fz = 12;
function Lz(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = gk(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Dz && ++s < Fz);
  return a;
}
function bl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => Lz(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : gk(o(i), t, r);
}
const zz = bl(0.42, 0, 1, 1), Nz = bl(0, 0, 0.58, 1), yk = bl(0.42, 0, 0.58, 1), jz = (e) => Array.isArray(e) && typeof e[0] != "number", bk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Sk = (e) => (t) => 1 - e(1 - t), xk = (e) => 1 - Math.sin(Math.acos(e)), Xv = Sk(xk), Vz = bk(Xv), wk = bl(0.33, 1.53, 0.69, 0.99), Qv = Sk(wk), Bz = bk(Qv), Wz = (e) => (e *= 2) < 1 ? 0.5 * Qv(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Hz = {
  linear: He,
  easeIn: zz,
  easeInOut: yk,
  easeOut: Nz,
  circIn: xk,
  circInOut: Vz,
  circOut: Xv,
  backIn: Qv,
  backInOut: Bz,
  backOut: wk,
  anticipate: Wz
}, Eb = (e) => {
  if (Array.isArray(e)) {
    qv(e.length === 4);
    const [t, n, r, o] = e;
    return bl(t, n, r, o);
  } else if (typeof e == "string")
    return Hz[e];
  return e;
}, Zv = (e, t) => (n) => !!(gl(n) && U3.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ck = (e, t, n) => (r) => {
  if (!gl(r))
    return r;
  const [o, i, a, s] = r.match(zd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Uz = (e) => ao(0, 255, e), ap = {
  ...Jo,
  transform: (e) => Math.round(Uz(e))
}, $o = {
  test: Zv("rgb", "red"),
  parse: Ck("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ap.transform(e) + ", " + ap.transform(t) + ", " + ap.transform(n) + ", " + bs(ys.transform(r)) + ")"
};
function Gz(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Vh = {
  test: Zv("#"),
  parse: Gz,
  transform: $o.transform
}, Ri = {
  test: Zv("hsl", "hue"),
  parse: Ck("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + er.transform(bs(t)) + ", " + er.transform(bs(n)) + ", " + bs(ys.transform(r)) + ")"
}, kt = {
  test: (e) => $o.test(e) || Vh.test(e) || Ri.test(e),
  parse: (e) => $o.test(e) ? $o.parse(e) : Ri.test(e) ? Ri.parse(e) : Vh.parse(e),
  transform: (e) => gl(e) ? e : e.hasOwnProperty("red") ? $o.transform(e) : Ri.transform(e)
}, Ne = (e, t, n) => -n * e + n * t + e;
function sp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Kz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = sp(l, s, e + 1 / 3), i = sp(l, s, e), a = sp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const lp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, Yz = [Vh, $o, Ri], qz = (e) => Yz.find((t) => t.test(e));
function Ob(e) {
  const t = qz(e);
  let n = t.parse(e);
  return t === Ri && (n = Kz(n)), n;
}
const kk = (e, t) => {
  const n = Ob(e), r = Ob(t), o = { ...n };
  return (i) => (o.red = lp(n.red, r.red, i), o.green = lp(n.green, r.green, i), o.blue = lp(n.blue, r.blue, i), o.alpha = Ne(n.alpha, r.alpha, i), $o.transform(o));
};
function Xz(e) {
  var t, n;
  return isNaN(e) && gl(e) && (((t = e.match(zd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(XC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Pk = {
  regex: W3,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Tk = {
  regex: XC,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, _k = {
  regex: zd,
  countKey: "Numbers",
  token: "${n}",
  parse: Jo.parse
};
function up(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Rc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && up(n, Pk), up(n, Tk), up(n, _k), n;
}
function Ek(e) {
  return Rc(e).values;
}
function Ok(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Rc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Pk.token, a[l]) : l < r + n ? s = s.replace(Tk.token, kt.transform(a[l])) : s = s.replace(_k.token, bs(a[l]));
    return s;
  };
}
const Qz = (e) => typeof e == "number" ? 0 : e;
function Zz(e) {
  const t = Ek(e);
  return Ok(e)(t.map(Qz));
}
const so = {
  test: Xz,
  parse: Ek,
  createTransformer: Ok,
  getAnimatableNone: Zz
}, Mk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ik(e, t) {
  return typeof e == "number" ? (n) => Ne(e, t, n) : kt.test(e) ? kk(e, t) : e.startsWith("var(") ? Mk(e, t) : $k(e, t);
}
const Rk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Ik(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, Jz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ik(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, $k = (e, t) => {
  const n = so.createTransformer(t), r = Rc(e), o = Rc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? no(Rk(r.values, o.values), n) : Mk(e, t);
}, Zs = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Mb = (e, t) => (n) => Ne(e, t, n);
function eN(e) {
  return typeof e == "number" ? Mb : typeof e == "string" ? kt.test(e) ? kk : $k : Array.isArray(e) ? Rk : typeof e == "object" ? Jz : Mb;
}
function tN(e, t, n) {
  const r = [], o = n || eN(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || He : t;
      s = no(l, s);
    }
    r.push(s);
  }
  return r;
}
function Ak(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (qv(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = tN(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Zs(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(ao(e[0], e[i - 1], u)) : l;
}
function nN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Zs(0, t, r);
    e.push(Ne(n, 1, o));
  }
}
function rN(e) {
  const t = [0];
  return nN(t, e.length - 1), t;
}
function oN(e, t) {
  return e.map((n) => n * t);
}
function iN(e, t) {
  return e.map(() => t || yk).splice(0, e.length - 1);
}
function $c({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = jz(r) ? r.map(Eb) : Eb(r), i = {
    done: !1,
    value: t[0]
  }, a = oN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : rN(t),
    e
  ), s = Ak(a, t, {
    ease: Array.isArray(o) ? o : iN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Dk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const aN = 5;
function Fk(e, t, n) {
  const r = Math.max(t - aN, 0);
  return Dk(n - e(r), t - r);
}
const cp = 1e-3, sN = 0.01, Ib = 10, lN = 0.05, uN = 1;
function cN({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Iz(e <= ro(Ib));
  let a = 1 - t;
  a = ao(lN, uN, a), e = ao(sN, Ib, br(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Bh(u, a), y = Math.exp(-d);
    return cp - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), g = Bh(Math.pow(u, 2), a);
    return (-o(u) + cp > 0 ? -1 : 1) * ((f - p) * y) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -cp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = fN(o, i, s);
  if (e = ro(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const dN = 12;
function fN(e, t, n) {
  let r = n;
  for (let o = 1; o < dN; o++)
    r = r - e(r) / t(r);
  return r;
}
function Bh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const pN = ["duration", "bounce"], hN = ["stiffness", "damping", "mass"];
function Rb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function mN(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Rb(e, hN) && Rb(e, pN)) {
    const n = cN(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Lk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = mN(r), p = c ? -br(c) : 0, y = l / (2 * Math.sqrt(s * u)), g = i - o, S = br(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (y < 1) {
    const b = Bh(S, y);
    h = (x) => {
      const k = Math.exp(-y * S * x);
      return i - k * ((p + y * S * g) / b * Math.sin(b * x) + g * Math.cos(b * x));
    };
  } else if (y === 1)
    h = (b) => i - Math.exp(-S * b) * (g + (p + S * g) * b);
  else {
    const b = S * Math.sqrt(y * y - 1);
    h = (x) => {
      const k = Math.exp(-y * S * x), P = Math.min(b * x, 300);
      return i - k * ((p + y * S * g) * Math.sinh(P) + b * g * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = h(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (y < 1 ? k = Fk(h, b, x) : k = 0);
        const P = Math.abs(k) <= n, T = Math.abs(i - x) <= t;
        a.done = P && T;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function $b({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (_) => s !== void 0 && _ < s || l !== void 0 && _ > l, y = (_) => s === void 0 ? l : l === void 0 || Math.abs(s - _) < Math.abs(l - _) ? s : l;
  let g = n * t;
  const S = d + g, m = a === void 0 ? S : a(S);
  m !== S && (g = m - d);
  const h = (_) => -g * Math.exp(-_ / r), b = (_) => m + h(_), x = (_) => {
    const M = h(_), I = b(_);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : I;
  };
  let k, P;
  const T = (_) => {
    p(f.value) && (k = _, P = Lk({
      keyframes: [f.value, y(f.value)],
      velocity: Fk(b, _, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (_) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(_), T(_)), k !== void 0 && _ > k ? P.next(_ - k) : (!M && x(_), f);
    }
  };
}
const vN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => _e.update(t, !0),
    stop: () => Tr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Ab = 2e4;
function Db(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ab; )
    t += n, r = e.next(t);
  return t >= Ab ? 1 / 0 : t;
}
const gN = {
  decay: $b,
  inertia: $b,
  tween: $c,
  keyframes: $c,
  spring: Lk
};
function Ac({ autoplay: e = !0, delay: t = 0, driver: n = vN, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, g, S;
  const m = () => {
    S = new Promise((V) => {
      g = V;
    });
  };
  m();
  let h;
  const b = gN[o] || $c;
  let x;
  b !== $c && typeof r[0] != "number" && (x = Ak([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let T = "idle", _ = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Db(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), _ !== null ? L = _ : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), N = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), T === "finished" && _ === null && (L = H);
    let te = L, le = k;
    if (i) {
      const Ce = L / G;
      let et = Math.floor(Ce), qe = Ce % 1;
      !qe && Ce >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = ao(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ie = N ? { done: !1, value: r[0] } : le.next(te);
    x && (ie.value = x(ie.value));
    let { done: se } = ie;
    !N && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = _ === null && (T === "finished" || T === "running" && se);
    return d && d(ie.value), me && A(), ie;
  }, K = () => {
    h && h.stop(), h = void 0;
  }, $ = () => {
    T = "idle", K(), g(), m(), M = I = null;
  }, A = () => {
    T = "finished", c && c(), K(), g();
  }, z = () => {
    if (y)
      return;
    h || (h = n(W));
    const V = h.now();
    l && l(), _ !== null ? M = V - _ : (!M || T === "finished") && (M = V), T === "finished" && m(), I = M, _ = null, T = "running", h.start();
  };
  e && z();
  const U = {
    then(V, Y) {
      return S.then(V, Y);
    },
    get time() {
      return br(L);
    },
    set time(V) {
      V = ro(V), L = V, _ !== null || !h || p === 0 ? _ = V : M = h.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Db(k) : k.calculatedDuration;
      return br(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !h || (p = V, U.time = br(L));
    },
    get state() {
      return T;
    },
    play: z,
    pause: () => {
      T = "paused", _ = L;
    },
    stop: () => {
      y = !0, T !== "idle" && (T = "idle", u && u(), $());
    },
    cancel: () => {
      I !== null && W(I), $();
    },
    complete: () => {
      T = "finished";
    },
    sample: (V) => (M = 0, W(V))
  };
  return U;
}
function yN(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const bN = yN(() => Object.hasOwnProperty.call(Element.prototype, "animate")), SN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), su = 10, xN = 2e4, wN = (e, t) => t.type === "spring" || e === "backgroundColor" || !hk(t.ease);
function CN(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(bN() && SN.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (wN(t, o)) {
    const h = Ac({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < xN; )
      b = h.sample(k), x.push(b.value), k += su;
    p = void 0, c = x, d = k - su, f = "linear";
  }
  const y = $z(e.owner.current, t, c, {
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
  o.syncStart && (y.startTime = ot.isProcessing ? ot.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => y.cancel(), S = () => {
    _e.update(g), s(), u();
  };
  return y.onfinish = () => {
    e.set(Az(c, o)), r && r(), S();
  }, {
    then(h, b) {
      return l.then(h, b);
    },
    attachTimeline(h) {
      return y.timeline = h, y.onfinish = null, He;
    },
    get time() {
      return br(y.currentTime || 0);
    },
    set time(h) {
      y.currentTime = ro(h);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(h) {
      y.playbackRate = h;
    },
    get duration() {
      return br(d);
    },
    play: () => {
      a || (y.play(), Tr(g));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: h } = y;
      if (h) {
        const b = Ac({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(h - su).value, b.sample(h).value, su);
      }
      S();
    },
    complete: () => y.finish(),
    cancel: S
  };
}
function kN({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: He,
    pause: He,
    stop: He,
    then: (i) => (i(), Promise.resolve()),
    cancel: He,
    complete: He
  });
  return t ? Ac({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const PN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, TN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), _N = {
  type: "keyframes",
  duration: 0.8
}, EN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ON = (e, { keyframes: t }) => t.length > 2 ? _N : Zo.has(e) ? e.startsWith("scale") ? TN(t[1]) : PN : EN, Wh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(so.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), MN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function IN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(zd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = MN.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const RN = /([a-z-]*)\(.*?\)/g, Hh = {
  ...so,
  getAnimatableNone: (e) => {
    const t = e.match(RN);
    return t ? t.map(IN).join(" ") : e;
  }
}, $N = {
  ...QC,
  // Color props
  color: kt,
  backgroundColor: kt,
  outlineColor: kt,
  fill: kt,
  stroke: kt,
  // Border props
  borderColor: kt,
  borderTopColor: kt,
  borderRightColor: kt,
  borderBottomColor: kt,
  borderLeftColor: kt,
  filter: Hh,
  WebkitFilter: Hh
}, Jv = (e) => $N[e];
function zk(e, t) {
  let n = Jv(e);
  return n !== Hh && (n = so), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Nk = (e) => /^0[^.\s]+$/.test(e);
function AN(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Nk(e);
}
function DN(e, t, n, r) {
  const o = Wh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), AN(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = zk(t, s);
    }
  return i;
}
function FN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function eg(e, t) {
  return e[t] || e.default || e;
}
const tg = (e, t, n, r = {}) => (o) => {
  const i = eg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - ro(a);
  const l = DN(t, e, n, i), u = l[0], c = l[l.length - 1], d = Wh(e, u), f = Wh(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (y) => {
      t.set(y), i.onUpdate && i.onUpdate(y);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (FN(i) || (p = {
    ...p,
    ...ON(e, p)
  }), p.duration && (p.duration = ro(p.duration)), p.repeatDelay && (p.repeatDelay = ro(p.repeatDelay)), !d || !f || Rz.current || i.type === !1)
    return kN(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = CN(t, e, p);
    if (y)
      return y;
  }
  return Ac(p);
};
function Dc(e) {
  return !!(Vt(e) && e.add);
}
const jk = (e) => /^\-?\d*\.?\d+$/.test(e);
function ng(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class og {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ng(this.subscriptions, t), () => rg(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const LN = (e) => !isNaN(parseFloat(e));
class zN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: i, timestamp: a } = ot;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, _e.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => _e.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = LN(this.current), this.owner = n.owner;
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
  on(t, n) {
    this.events[t] || (this.events[t] = new og());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), _e.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
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
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
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
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
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
      Dk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
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
function da(e, t) {
  return new zN(e, t);
}
const Vk = (e) => (t) => t.test(e), NN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bk = [Jo, ne, er, Lr, K3, G3, NN], ja = (e) => Bk.find(Vk(e)), jN = [...Bk, kt, so], VN = (e) => jN.find(Vk(e));
function BN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, da(n));
}
function WN(e, t) {
  const n = jd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = sz(i[a]);
    BN(e, a, s);
  }
}
function HN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (jk(c) || Nk(c)) ? c = parseFloat(c) : !VN(c) && so.test(u) && (c = zk(l, u)), e.addValue(l, da(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function UN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function GN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = UN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function KN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Wk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && KN(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...eg(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[HC];
      h && (g = !1, y.elapsed = window.HandoffAppearAnimations(h, d, f, _e), y.syncStart = !0);
    }
    let S = g && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(tg(d, f, p, e.shouldReduceMotion && Zo.has(d) ? { type: !1 } : y));
    const m = f.animation;
    Dc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && WN(e, a);
  }), u;
}
function Uh(e, t, n = {}) {
  const r = jd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Wk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return YN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function YN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(qN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Uh(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function qN(e, t) {
  return e.sortNodePosition(t);
}
function XN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Uh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Uh(e, t, n);
  else {
    const o = typeof t == "function" ? jd(e, t, n.custom) : t;
    r = Promise.all(Wk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const QN = [...Nv].reverse(), ZN = Nv.length;
function JN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => XN(e, n, r)));
}
function ej(e) {
  let t = JN(e);
  const n = nj();
  let r = !0;
  const o = (l, u) => {
    const c = jd(e, u);
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
    let y = {}, g = 1 / 0;
    for (let m = 0; m < ZN; m++) {
      const h = QN[m], b = n[h], x = c[h] !== void 0 ? c[h] : d[h], k = Xs(x), P = h === u ? b.isActive : null;
      P === !1 && (g = m);
      let T = x === d[h] && x !== c[h] && k;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Fd(x) || typeof x == "boolean")
        continue;
      const _ = tj(b.prevProp, x);
      let M = _ || // If we're making this variant active, we want to always make it active
      h === u && b.isActive && !T && k || // If we removed a higher-priority variant (i is in reverse order)
      m > g && k;
      const I = Array.isArray(x) ? x : [x];
      let D = I.reduce(o, {});
      P === !1 && (D = {});
      const { prevResolvedValues: G = {} } = b, H = {
        ...G,
        ...D
      }, L = (W) => {
        M = !0, p.delete(W), b.needsAnimating[W] = !0;
      };
      for (const W in H) {
        const K = D[W], $ = G[W];
        y.hasOwnProperty(W) || (K !== $ ? Ic(K) && Ic($) ? !fk(K, $) || _ ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (y = { ...y, ...D }), r && e.blockInitialAnimation && (M = !1), M && !T && f.push(...I.map((W) => ({
        animation: W,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const b = e.getBaseTarget(h);
        b !== void 0 && (m[h] = b);
      }), f.push({ animation: m });
    }
    let S = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), r = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var y;
      return (y = p.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u);
    }), n[l].isActive = u;
    const f = a(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n
  };
}
function tj(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !fk(t, e) : !1;
}
function So(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function nj() {
  return {
    animate: So(!0),
    whileInView: So(),
    whileHover: So(),
    whileTap: So(),
    whileDrag: So(),
    whileFocus: So(),
    exit: So()
  };
}
class rj extends ho {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ej(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Fd(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let oj = 0;
class ij extends ho {
  constructor() {
    super(...arguments), this.id = oj++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const aj = {
  animation: {
    Feature: rj
  },
  exit: {
    Feature: ij
  }
}, Fb = (e, t) => Math.abs(e - t);
function sj(e, t) {
  const n = Fb(e.x, t.x), r = Fb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Hk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = fp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = sj(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = ot;
      this.history.push({ ...p, timestamp: y });
      const { onStart: g, onMove: S } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = dp(d, this.transformPagePoint), _e.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = fp(c.type === "pointercancel" ? this.lastMoveEventInfo : dp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !sk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Nd(t), a = dp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, fp(a, this.history)), this.removeListeners = no(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function dp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Lb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fp({ point: e }, t) {
  return {
    point: e,
    delta: Lb(e, Uk(t)),
    offset: Lb(e, lj(t)),
    velocity: uj(t, 0.1)
  };
}
function lj(e) {
  return e[0];
}
function Uk(e) {
  return e[e.length - 1];
}
function uj(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Uk(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > ro(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = br(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Zt(e) {
  return e.max - e.min;
}
function Gh(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function zb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Ne(t.min, t.max, e.origin), e.scale = Zt(n) / Zt(t), (Gh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ne(n.min, n.max, e.origin) - e.originPoint, (Gh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ss(e, t, n, r) {
  zb(e.x, t.x, n.x, r ? r.originX : void 0), zb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Nb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Zt(t);
}
function cj(e, t, n) {
  Nb(e.x, t.x, n.x), Nb(e.y, t.y, n.y);
}
function jb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Zt(t);
}
function xs(e, t, n) {
  jb(e.x, t.x, n.x), jb(e.y, t.y, n.y);
}
function dj(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Ne(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Ne(n, e, r.max) : Math.min(e, n)), e;
}
function Vb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function fj(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Vb(e.x, n, o),
    y: Vb(e.y, t, r)
  };
}
function Bb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function pj(e, t) {
  return {
    x: Bb(e.x, t.x),
    y: Bb(e.y, t.y)
  };
}
function hj(e, t) {
  let n = 0.5;
  const r = Zt(e), o = Zt(t);
  return o > r ? n = Zs(t.min, t.max - r, e.min) : r > o && (n = Zs(e.min, e.max - o, t.min)), ao(0, 1, n);
}
function mj(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Kh = 0.35;
function vj(e = Kh) {
  return e === !1 ? e = 0 : e === !0 && (e = Kh), {
    x: Wb(e, "left", "right"),
    y: Wb(e, "top", "bottom")
  };
}
function Wb(e, t, n) {
  return {
    min: Hb(e, t),
    max: Hb(e, n)
  };
}
function Hb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ub = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $i = () => ({
  x: Ub(),
  y: Ub()
}), Gb = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: Gb(),
  y: Gb()
});
function Wn(e) {
  return [e("x"), e("y")];
}
function Gk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function gj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function yj(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function pp(e) {
  return e === void 0 || e === 1;
}
function Yh({ scale: e, scaleX: t, scaleY: n }) {
  return !pp(e) || !pp(t) || !pp(n);
}
function ko(e) {
  return Yh(e) || Kk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Kk(e) {
  return Kb(e.x) || Kb(e.y);
}
function Kb(e) {
  return e && e !== "0%";
}
function Fc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Yb(e, t, n, r, o) {
  return o !== void 0 && (e = Fc(e, o, r)), Fc(e, n, r) + t;
}
function qh(e, t = 0, n = 1, r, o) {
  e.min = Yb(e.min, t, n, r, o), e.max = Yb(e.max, t, n, r, o);
}
function Yk(e, { x: t, y: n }) {
  qh(e.x, t.translate, t.scale, t.originPoint), qh(e.y, n.translate, n.scale, n.originPoint);
}
function bj(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Ai(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Yk(e, a)), r && ko(i.latestValues) && Ai(e, i.latestValues));
  }
  t.x = qb(t.x), t.y = qb(t.y);
}
function qb(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function jr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Xb(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Ne(e.min, e.max, i);
  qh(e, t[n], t[r], a, t.scale);
}
const Sj = ["x", "scaleX", "originX"], xj = ["y", "scaleY", "originY"];
function Ai(e, t) {
  Xb(e.x, t, Sj), Xb(e.y, t, xj);
}
function qk(e, t) {
  return Gk(yj(e.getBoundingClientRect(), t));
}
function wj(e, t, n) {
  const r = qk(e, n), { scroll: o } = t;
  return o && (jr(r.x, o.offset.x), jr(r.y, o.offset.y)), r;
}
const Xk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Cj = /* @__PURE__ */ new WeakMap();
class kj {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Nd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = uk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wn((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (er.test(g)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const m = S.layout.layoutBox[y];
            m && (g = Zt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), f && _e.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = Pj(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Hk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Xk(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && _e.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !lu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = dj(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ii(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = fj(o.layoutBox, n) : this.constraints = !1, this.elastic = vj(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Wn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = mj(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ii(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = wj(r, o.root, this.visualElement.getTransformPagePoint());
    let a = pj(o.layout.layoutBox, i);
    if (n) {
      const s = n(gj(a));
      this.hasMutatedConstraints = !!s, s && (a = Gk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Wn((c) => {
      if (!lu(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(tg(t, r, 0, n));
  }
  stopAnimation() {
    Wn((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Wn((n) => {
      const { drag: r } = this.getProps();
      if (!lu(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Ne(a, s, 0.5));
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
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Ii(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Wn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = hj({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Wn((a) => {
      if (!lu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Ne(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Cj.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ii(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = mr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Wn((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Kh, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function lu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Pj(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Tj extends ho {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new kj(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qb = (e) => (t, n) => {
  e && _e.update(() => e(t, n));
};
class _j extends ho {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new Hk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Qb(t),
      onStart: Qb(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && _e.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Qk() {
  const e = v.useContext(ml);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function Ej() {
  return Oj(v.useContext(ml));
}
function Oj(e) {
  return e === null ? !0 : e.isPresent;
}
const Gu = {
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
function Zb(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Va = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Zb(e, t.target.x), r = Zb(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Mj = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = so.parse(e);
    if (o.length > 5)
      return r;
    const i = so.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Ne(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class Ij extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    N3(Rj), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Gu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || _e.postRender(() => {
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
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Zk(e) {
  const [t, n] = Qk(), r = v.useContext(Vv);
  return re.createElement(Ij, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(GC), isPresent: t, safeToRemove: n });
}
const Rj = {
  borderRadius: {
    ...Va,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Va,
  borderTopRightRadius: Va,
  borderBottomLeftRadius: Va,
  borderBottomRightRadius: Va,
  boxShadow: Mj
}, Jk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $j = Jk.length, Jb = (e) => typeof e == "string" ? parseFloat(e) : e, e1 = (e) => typeof e == "number" || ne.test(e);
function Aj(e, t, n, r, o, i) {
  o ? (e.opacity = Ne(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Dj(r)
  ), e.opacityExit = Ne(t.opacity !== void 0 ? t.opacity : 1, 0, Fj(r))) : i && (e.opacity = Ne(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < $j; a++) {
    const s = `border${Jk[a]}Radius`;
    let l = t1(t, s), u = t1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || e1(l) === e1(u) ? (e[s] = Math.max(Ne(Jb(l), Jb(u), r), 0), (er.test(u) || er.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = Ne(t.rotate || 0, n.rotate || 0, r));
}
function t1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Dj = eP(0, 0.5, Xv), Fj = eP(0.5, 0.95, He);
function eP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Zs(e, t, r));
}
function n1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  n1(e.x, t.x), n1(e.y, t.y);
}
function r1(e, t, n, r, o) {
  return e -= t, e = Fc(e, 1 / n, r), o !== void 0 && (e = Fc(e, 1 / o, r)), e;
}
function Lj(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (er.test(t) && (t = parseFloat(t), t = Ne(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Ne(i.min, i.max, r);
  e === i && (s -= t), e.min = r1(e.min, t, n, s, o), e.max = r1(e.max, t, n, s, o);
}
function o1(e, t, [n, r, o], i, a) {
  Lj(e, t[n], t[r], t[o], t.scale, i, a);
}
const zj = ["x", "scaleX", "originX"], Nj = ["y", "scaleY", "originY"];
function i1(e, t, n, r) {
  o1(e.x, t, zj, n ? n.x : void 0, r ? r.x : void 0), o1(e.y, t, Nj, n ? n.y : void 0, r ? r.y : void 0);
}
function a1(e) {
  return e.translate === 0 && e.scale === 1;
}
function tP(e) {
  return a1(e.x) && a1(e.y);
}
function jj(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function nP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function s1(e) {
  return Zt(e.x) / Zt(e.y);
}
class Vj {
  constructor() {
    this.members = [];
  }
  add(t) {
    ng(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (rg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
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
function l1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const Bj = (e, t) => e.depth - t.depth;
class Wj {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ng(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    rg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Bj), this.isDirty = !1, this.children.forEach(t);
  }
}
function Hj(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return _e.read(r, !0), () => Tr(r);
}
function Uj(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Gj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Kj(e, t, n) {
  const r = Vt(e) ? e : da(e);
  return r.start(tg("", r, t, n)), r.animation;
}
const u1 = ["", "X", "Y", "Z"], Yj = { visibility: "hidden" }, c1 = 1e3;
let qj = 0;
const Po = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function rP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = qj++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Po.totalNodes = Po.resolvedTargetDeltas = Po.recalculatedProjection = 0, this.nodes.forEach(Zj), this.nodes.forEach(rV), this.nodes.forEach(oV), this.nodes.forEach(Jj), Uj(Po);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wj());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new og()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = Gj(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = Hj(f, 250), Gu.hasAnimatedSinceResize && (Gu.hasAnimatedSinceResize = !1, this.nodes.forEach(f1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || uV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !nP(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...eg(g, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || f1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Tr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(iV), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(d1);
        return;
      }
      this.isUpdating || this.nodes.forEach(tV), this.isUpdating = !1, this.nodes.forEach(nV), this.nodes.forEach(Xj), this.nodes.forEach(Qj), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = ao(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, rp.update.process(ot), rp.preRender.process(ot), rp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eV), this.sharedNodes.forEach(aV);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _e.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Xe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !tP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || ko(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), cV(l), {
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
        return Xe();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (jr(s.x, l.offset.x), jr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            un(s, a);
            const { scroll: f } = this.root;
            f && (jr(s.x, -f.offset.x), jr(s.y, -f.offset.y));
          }
          jr(s.x, c.offset.x), jr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Xe();
      un(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Ai(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ko(c.latestValues) && Ai(l, c.latestValues);
      }
      return ko(this.latestValues) && Ai(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ko(u.latestValues))
          continue;
        Yh(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), i1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ko(this.latestValues) && i1(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ot.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = ot.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xs(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), cj(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), Yk(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xs(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Po.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Yh(this.parent.latestValues) || Kk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ot.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      un(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      bj(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = $i(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = $i(), this.projectionDeltaWithTransform = $i());
      const g = this.projectionTransform;
      Ss(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = l1(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), Po.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = $i();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, g = p !== y, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(lV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        p1(d.x, a.x, k), p1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (xs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), sV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && jj(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), g && (this.animationValues = c, Aj(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
        Gu.hasAnimatedSinceResize = !0, this.currentAnimation = Kj(0, c1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(c1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && oP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Zt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Zt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Ai(s, c), Ss(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Vj()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < u1.length; c++) {
        const d = "rotate" + u1[c];
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
        return Yj;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Uu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Uu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ko(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = l1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in Oc) {
        if (f[g] === void 0)
          continue;
        const { correct: S, applyTo: m } = Oc[g], h = u.transform === "none" ? f[g] : S(f[g], d);
        if (m) {
          const b = m.length;
          for (let x = 0; x < b; x++)
            u[m[x]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Uu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(d1), this.root.sharedNodes.clear();
    }
  };
}
function Xj(e) {
  e.updateLayout();
}
function Qj(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Wn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Zt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : oP(i, n.layoutBox, r) && Wn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Zt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = $i();
    Ss(s, r, n.layoutBox);
    const l = $i();
    a ? Ss(l, e.applyTransform(o, !0), n.measuredBox) : Ss(l, r, n.layoutBox);
    const u = !tP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Xe();
          xs(y, n.layoutBox, f.layoutBox);
          const g = Xe();
          xs(g, r, p.layoutBox), nP(y, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = y, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Zj(e) {
  Po.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Jj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function eV(e) {
  e.clearSnapshot();
}
function d1(e) {
  e.clearMeasurements();
}
function tV(e) {
  e.isLayoutDirty = !1;
}
function nV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function f1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function rV(e) {
  e.resolveTargetDelta();
}
function oV(e) {
  e.calcProjection();
}
function iV(e) {
  e.resetRotation();
}
function aV(e) {
  e.removeLeadSnapshot();
}
function p1(e, t, n) {
  e.translate = Ne(t.translate, 0, n), e.scale = Ne(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function h1(e, t, n, r) {
  e.min = Ne(t.min, n.min, r), e.max = Ne(t.max, n.max, r);
}
function sV(e, t, n, r) {
  h1(e.x, t.x, n.x, r), h1(e.y, t.y, n.y, r);
}
function lV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const uV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, m1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), v1 = m1("applewebkit/") && !m1("chrome/") ? Math.round : He;
function g1(e) {
  e.min = v1(e.min), e.max = v1(e.max);
}
function cV(e) {
  g1(e.x), g1(e.y);
}
function oP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Gh(s1(t), s1(n), 0.2);
}
const dV = rP({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), hp = {
  current: void 0
}, iP = rP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!hp.current) {
      const e = new dV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), hp.current = e;
    }
    return hp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), fV = {
  pan: {
    Feature: _j
  },
  drag: {
    Feature: Tj,
    ProjectionNode: iP,
    MeasureLayout: Zk
  }
}, pV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function hV(e) {
  const t = pV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function Xh(e, t, n = 1) {
  const [r, o] = hV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return jk(a) ? parseFloat(a) : a;
  } else
    return Nh(o) ? Xh(o, t, n + 1) : o;
}
function mV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Nh(i))
      return;
    const a = Xh(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Nh(i))
      continue;
    const a = Xh(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const vV = /* @__PURE__ */ new Set([
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
]), aP = (e) => vV.has(e), gV = (e) => Object.keys(e).some(aP), y1 = (e) => e === Jo || e === ne, b1 = (e, t) => parseFloat(e.split(", ")[t]), S1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return b1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? b1(i[1], e) : 0;
  }
}, yV = /* @__PURE__ */ new Set(["x", "y", "z"]), bV = vl.filter((e) => !yV.has(e));
function SV(e) {
  const t = [];
  return bV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const fa = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: S1(4, 13),
  y: S1(5, 14)
};
fa.translateX = fa.x;
fa.translateY = fa.y;
const xV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = fa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = fa[u](l, i);
  }), e;
}, wV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(aP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = ja(c);
    const f = t[l];
    let p;
    if (Ic(f)) {
      const y = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = ja(c);
      for (let S = g; S < y && f[S] !== null; S++)
        p ? qv(ja(f[S]) === p) : p = ja(f[S]);
    } else
      p = ja(f);
    if (d !== p)
      if (y1(d) && y1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = SV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = xV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Dd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function CV(e, t, n, r) {
  return gV(t) ? wV(e, t, n, r) : { target: t, transitionEnd: r };
}
const kV = (e, t, n, r) => {
  const o = mV(e, t, r);
  return t = o.target, r = o.transitionEnd, CV(e, t, n, r);
}, Qh = { current: null }, sP = { current: !1 };
function PV() {
  if (sP.current = !0, !!Dd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Qh.current = e.matches;
      e.addListener(t), t();
    } else
      Qh.current = !1;
}
function TV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Vt(i))
      e.addValue(o, i), Dc(r) && r.add(o);
    else if (Vt(a))
      e.addValue(o, da(i, { owner: e })), Dc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, da(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const x1 = /* @__PURE__ */ new WeakMap(), lP = Object.keys(Qs), _V = lP.length, w1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], EV = jv.length;
class OV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => _e.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Ld(n), this.isVariantNode = UC(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Vt(f) && (f.set(s[d], !1), Dc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    this.current = t, x1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), sP.current || PV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    x1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Zo.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && _e.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < _V; l++) {
      const u = lP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Qs[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ii(d),
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
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < w1.length; r++) {
      const o = w1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = TV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < EV; r++) {
      const o = jv[r], i = this.props[o];
      (Xs(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = da(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Yv(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Vt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new og()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class uP extends OV {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
    let a = GN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      HN(this, r, a);
      const s = kV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function MV(e) {
  return window.getComputedStyle(e);
}
class IV extends uP {
  readValueFromInstance(t, n) {
    if (Zo.has(n)) {
      const r = Jv(n);
      return r && r.default || 0;
    } else {
      const r = MV(t), o = (qC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return qk(t, n);
  }
  build(t, n, r, o) {
    Wv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Kv(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Vt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    tk(t, n, r, o);
  }
}
class RV extends uP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zo.has(n)) {
      const r = Jv(n);
      return r && r.default || 0;
    }
    return n = nk.has(n) ? n : zv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ok(t, n);
  }
  build(t, n, r, o) {
    Uv(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Gv(t.tagName), super.mount(t);
  }
}
const $V = (e, t) => Bv(e) ? new RV(t, { enableHardwareAcceleration: !1 }) : new IV(t, { enableHardwareAcceleration: !0 }), AV = {
  layout: {
    ProjectionNode: iP,
    MeasureLayout: Zk
  }
}, DV = {
  ...aj,
  ...Ez,
  ...fV,
  ...AV
}, or = /* @__PURE__ */ L3((e, t) => mz(e, t, DV, $V));
function cP() {
  const e = v.useRef(!1);
  return Lv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function FV() {
  const e = cP(), [t, n] = v.useState(0), r = v.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [v.useCallback(() => _e.postRender(r), [r]), t];
}
class LV extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
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
function zV({ children: e, isPresent: t }) {
  const n = v.useId(), r = v.useRef(null), o = v.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return v.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), v.createElement(LV, { isPresent: t, childRef: r, sizeRef: o }, v.cloneElement(e, { ref: r }));
}
const mp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = ik(NV), l = v.useId(), u = v.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [n]
  );
  return v.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), v.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = v.createElement(zV, { isPresent: n }, e)), v.createElement(ml.Provider, { value: u }, e);
};
function NV() {
  return /* @__PURE__ */ new Map();
}
function jV(e) {
  return v.useEffect(() => () => e(), []);
}
const To = (e) => e.key || "";
function VV(e, t) {
  e.forEach((n) => {
    const r = To(n);
    t.set(r, n);
  });
}
function BV(e) {
  const t = [];
  return v.Children.forEach(e, (n) => {
    v.isValidElement(n) && t.push(n);
  }), t;
}
const ei = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Vv).forceRender || FV()[0], l = cP(), u = BV(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, y = v.useRef(!0);
  if (Lv(() => {
    y.current = !1, VV(u, p), f.current = c;
  }), jV(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return v.createElement(v.Fragment, null, c.map((h) => v.createElement(mp, { key: To(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(To), S = u.map(To), m = g.length;
  for (let h = 0; h < m; h++) {
    const b = g[h];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const k = g.indexOf(b);
    let P = h;
    if (!P) {
      const T = () => {
        d.delete(b);
        const _ = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (_.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = To(M);
          return (
            // filter out the node exiting
            I === b || // filter out the leftover children
            _.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = v.createElement(mp, { key: To(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((h) => {
    const b = h.key;
    return d.has(b) ? h : v.createElement(mp, { key: To(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((h) => v.cloneElement(h)));
};
var WV = {
  initial: (e) => {
    const { position: t } = e, n = ["top", "bottom"].includes(t) ? "y" : "x";
    let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (r = 1), {
      opacity: 0,
      [n]: r * 24
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
}, dP = v.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = WV,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = Ej();
  ca(() => {
    p || r == null || r();
  }, [p]), ca(() => {
    f(s);
  }, [s]);
  const y = () => f(null), g = () => f(s), S = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), _3(S, d);
  const m = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = v.useMemo(() => P3(a), [a]);
  return /* @__PURE__ */ w.jsx(
    or.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: g,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: qn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
dP.displayName = "ToastComponent";
var C1 = {
  path: /* @__PURE__ */ w.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ w.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ w.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, kn = oe((e, t) => {
  const {
    as: n,
    viewBox: r,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = ae("chakra-icon", s), d = Qo("Icon", e), f = {
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
  }, y = r ?? C1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const g = a ?? C1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: g });
});
kn.displayName = "Icon";
function HV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function UV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function k1(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var GV = aC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Vd = oe((e, t) => {
  const n = Qo("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Cn(e), u = ae("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${GV} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ w.jsx(X.span, { srOnly: !0, children: r })
    }
  );
});
Vd.displayName = "Spinner";
var [KV, ig] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [YV, ag] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), fP = {
  info: { icon: UV, colorScheme: "blue" },
  warning: { icon: k1, colorScheme: "orange" },
  success: { icon: HV, colorScheme: "green" },
  error: { icon: k1, colorScheme: "red" },
  loading: { icon: Vd, colorScheme: "blue" }
};
function qV(e) {
  return fP[e].colorScheme;
}
function XV(e) {
  return fP[e].icon;
}
var pP = oe(
  function(t, n) {
    const r = ag(), { status: o } = ig(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ae("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
pP.displayName = "AlertDescription";
function hP(e) {
  const { status: t } = ig(), n = XV(t), r = ag(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ae("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ w.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
hP.displayName = "AlertIcon";
var mP = oe(
  function(t, n) {
    const r = ag(), { status: o } = ig();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ae("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
mP.displayName = "AlertTitle";
var vP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : qV(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(KV, { value: { status: o }, children: /* @__PURE__ */ w.jsx(YV, { value: l, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: ae("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
vP.displayName = "Alert";
function QV(e) {
  return /* @__PURE__ */ w.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Bd = oe(
  function(t, n) {
    const r = Qo("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: {
          ...l,
          ...r,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ w.jsx(QV, { width: "1em", height: "1em" })
      }
    );
  }
);
Bd.displayName = "CloseButton";
var ZV = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ws = JV(ZV);
function JV(e) {
  let t = e;
  const n = /* @__PURE__ */ new Set(), r = (o) => {
    t = o(t), n.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (n.add(o), () => {
      r(() => e), n.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      r((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = eB(o, i), { position: s, id: l } = a;
      return r((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && r((a) => {
        const s = { ...a }, { position: l, index: u } = yb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: nB(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) => (o ?? [
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
      r((i) => {
        const a = VC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!yb(ws.getState(), o).position
  };
}
var P1 = 0;
function eB(e, t = {}) {
  var n, r;
  P1 += 1;
  const o = (n = t.id) != null ? n : P1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ws.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var tB = (e) => {
  const {
    status: t,
    variant: n = "solid",
    id: r,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = r ? {
    root: `toast-${r}`,
    title: `toast-${r}-title`,
    description: `toast-${r}-description`
  } : void 0;
  return /* @__PURE__ */ w.jsxs(
    vP,
    {
      addRole: !1,
      status: t,
      variant: n,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ w.jsx(hP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(mP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(pP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          Bd,
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
function nB(e = {}) {
  const { render: t, toastComponent: n = tB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [rB, lY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), oB = (e) => {
  const t = v.useSyncExternalStore(
    ws.subscribe,
    ws.getState,
    ws.getState
  ), {
    motionVariants: n,
    component: r = dP,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ w.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: T3(s),
        children: /* @__PURE__ */ w.jsx(ei, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
          r,
          {
            motionVariants: n,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ w.jsx(fl, { ...o, children: a });
}, iB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(C3, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(rB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(oB, { ...o })
  ] });
}, aB = iB($C), sB = Object.defineProperty, lB = (e, t, n) => t in e ? sB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (lB(e, typeof t != "symbol" ? t + "" : t, n), n);
function T1(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var uB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function _1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function E1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Zh = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Lc = (e) => e, cB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return uB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = T1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Be(this, "destroy", () => {
      this.descendants.clear();
    }), Be(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), Be(this, "count", () => this.descendants.size), Be(this, "enabledCount", () => this.enabledValues().length), Be(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), Be(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Be(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Be(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Be(this, "first", () => this.item(0)), Be(this, "firstEnabled", () => this.enabledItem(0)), Be(this, "last", () => this.item(this.descendants.size - 1)), Be(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Be(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), Be(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Be(this, "next", (e, t = !0) => {
      const n = _1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = _1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = E1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = E1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = T1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function dB(e, t) {
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
function at(...e) {
  return (t) => {
    e.forEach((n) => {
      dB(n, t);
    });
  };
}
function fB(...e) {
  return v.useMemo(() => at(...e), e);
}
function pB() {
  const e = v.useRef(new cB());
  return Zh(() => () => e.current.destroy()), e.current;
}
var [hB, gP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function mB(e) {
  const t = gP(), [n, r] = v.useState(-1), o = v.useRef(null);
  Zh(() => () => {
    o.current && t.unregister(o.current);
  }, []), Zh(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Lc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function yP() {
  return [
    Lc(hB),
    () => Lc(gP()),
    () => pB(),
    (o) => mB(o)
  ];
}
var [vB, Wd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [gB, sg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  yB,
  uY,
  bB,
  SB
] = yP(), bP = oe(
  function(t, n) {
    const { getButtonProps: r } = sg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Wd().button
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ...o,
        className: ae("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
bP.displayName = "AccordionButton";
function xB(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = to(r), a = to(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = to(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function wB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  PB(e), TB(e);
  const s = bB(), [l, u] = v.useState(-1);
  v.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = xB({
    value: r,
    defaultValue() {
      return o ? n ?? [] : n ?? -1;
    },
    onChange: t
  });
  return {
    index: c,
    setIndex: d,
    htmlProps: a,
    getAccordionItemProps: (p) => {
      let y = !1;
      return p !== null && (y = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: y, onChange: (S) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const m = S ? c.concat(p) : c.filter((h) => h !== p);
            d(m);
          } else
            S ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [CB, lg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function kB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = lg(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  _B(e);
  const { register: f, index: p, descendants: y } = SB({
    disabled: t && !n
  }), { isOpen: g, onChange: S } = i(
    p === -1 ? null : p
  );
  EB({ isOpen: g, isDisabled: t });
  const m = () => {
    S == null || S(!0);
  }, h = () => {
    S == null || S(!1);
  }, b = v.useCallback(() => {
    S == null || S(!g), a(p);
  }, [p, a, g, S]), x = v.useCallback(
    (_) => {
      const I = {
        ArrowDown: () => {
          const D = y.nextEnabled(p);
          D == null || D.node.focus();
        },
        ArrowUp: () => {
          const D = y.prevEnabled(p);
          D == null || D.node.focus();
        },
        Home: () => {
          const D = y.firstEnabled();
          D == null || D.node.focus();
        },
        End: () => {
          const D = y.lastEnabled();
          D == null || D.node.focus();
        }
      }[_.key];
      I && (_.preventDefault(), I(_));
    },
    [y, p]
  ), k = v.useCallback(() => {
    a(p);
  }, [a, p]), P = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!g,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      g,
      b,
      k,
      x,
      d,
      f
    ]
  ), T = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !g
      };
    },
    [c, g, d]
  );
  return {
    isOpen: g,
    isDisabled: t,
    isFocusable: n,
    onOpen: m,
    onClose: h,
    getButtonProps: P,
    getPanelProps: T,
    htmlProps: o
  };
}
function PB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  pl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function TB(e) {
  pl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function _B(e) {
  pl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function EB(e) {
  pl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function SP(e) {
  const { isOpen: t, isDisabled: n } = sg(), { reduceMotion: r } = lg(), o = ae("chakra-accordion__icon", e.className), i = Wd(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ w.jsx(
    kn,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
SP.displayName = "AccordionIcon";
var xP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = kB(t), l = {
      ...Wd().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(gB, { value: u, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        ...i,
        className: ae("chakra-accordion__item", o),
        __css: l,
        children: typeof r == "function" ? r({
          isExpanded: !!a.isOpen,
          isDisabled: !!a.isDisabled
        }) : r
      }
    ) });
  }
);
xP.displayName = "AccordionItem";
var Ao = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ba = {
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
function Jh(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ba.slideRight;
    case "left":
      return Ba.slideLeft;
    case "bottom":
      return Ba.slideDown;
    case "top":
      return Ba.slideUp;
    default:
      return Ba.slideRight;
  }
}
var jo = {
  enter: {
    duration: 0.2,
    ease: Ao.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Ao.easeIn
  }
}, Dn = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, OB = (e) => e != null && parseInt(e.toString(), 10) > 0, O1 = {
  exit: {
    height: { duration: 0.2, ease: Ao.ease },
    opacity: { duration: 0.3, ease: Ao.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Ao.ease },
    opacity: { duration: 0.4, ease: Ao.ease }
  }
}, MB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: OB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(O1.exit, o)
    };
  },
  enter: ({
    animateOpacity: e,
    endingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: 1 },
      height: t,
      transitionEnd: r == null ? void 0 : r.enter,
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(O1.enter, o)
    };
  }
}, wP = v.forwardRef(
  (e, t) => {
    const {
      in: n,
      unmountOnExit: r,
      animateOpacity: o = !0,
      startingHeight: i = 0,
      endingHeight: a = "auto",
      style: s,
      className: l,
      transition: u,
      transitionEnd: c,
      ...d
    } = e, [f, p] = v.useState(!1);
    v.useEffect(() => {
      const h = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(h);
    }, []), pl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(i.toString()) > 0, g = {
      startingHeight: i,
      endingHeight: a,
      animateOpacity: o,
      transition: f ? u : { enter: { duration: 0 } },
      transitionEnd: {
        enter: c == null ? void 0 : c.enter,
        exit: r ? c == null ? void 0 : c.exit : {
          ...c == null ? void 0 : c.exit,
          display: y ? "block" : "none"
        }
      }
    }, S = r ? n : !0, m = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(ei, { initial: !1, custom: g, children: S && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: t,
        ...d,
        className: ae("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: g,
        variants: MB,
        initial: r ? "exit" : !1,
        animate: m,
        exit: "exit"
      }
    ) });
  }
);
wP.displayName = "Collapse";
var IB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Dn.exit(jo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, CP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: IB
}, RB = v.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(ei, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ref: n,
      className: ae("chakra-fade", i),
      custom: f,
      ...CP,
      animate: c,
      ...u
    }
  ) });
});
RB.displayName = "Fade";
var $B = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(jo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, kP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: $B
}, AB = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      initialScale: a = 0.95,
      className: s,
      transition: l,
      transitionEnd: u,
      delay: c,
      ...d
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", y = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ w.jsx(ei, { custom: y, children: f && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", s),
        ...kP,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
AB.displayName = "ScaleFade";
var DB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(jo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Dn.exit(jo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, ns = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: DB
}, FB = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      className: a,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: u,
      transitionEnd: c,
      delay: d,
      ...f
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", g = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(ei, { custom: g, children: p && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", a),
        custom: g,
        ...ns,
        animate: y,
        ...f
      }
    ) });
  }
);
FB.displayName = "SlideFade";
var M1 = {
  exit: {
    duration: 0.15,
    ease: Ao.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, LB = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = Jh({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(M1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = Jh({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(M1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, PP = v.forwardRef(function(t, n) {
  const {
    direction: r = "right",
    style: o,
    unmountOnExit: i,
    in: a,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = Jh({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, S = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ w.jsx(ei, { custom: m, children: g && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ae("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: m,
      variants: LB,
      style: y,
      ...d
    }
  ) });
});
PP.displayName = "Slide";
var TP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = lg(), { getPanelProps: s, isOpen: l } = sg(), u = s(i, n), c = ae("chakra-accordion__panel", r), d = Wd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(wP, { in: l, ...o, children: f });
  }
);
TP.displayName = "AccordionPanel";
var _P = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = wB(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(yB, { value: l, children: /* @__PURE__ */ w.jsx(CB, { value: c, children: /* @__PURE__ */ w.jsx(vB, { value: i, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: o,
      ...s,
      className: ae("chakra-accordion", r.className),
      __css: i.root,
      children: t
    }
  ) }) }) });
});
_P.displayName = "Accordion";
function zB(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [cY, NB] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function jB(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function em(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ae("chakra-button__icon", n);
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...r,
      className: i,
      children: o
    }
  );
}
em.displayName = "ButtonIcon";
function tm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Vd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ae("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? r : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, r]
  );
  return /* @__PURE__ */ w.jsx(X.div, { className: l, ...s, __css: c, children: o });
}
tm.displayName = "ButtonSpinner";
var tr = oe((e, t) => {
  const n = NB(), r = Qo("Button", { ...n, ...e }), {
    isDisabled: o = n == null ? void 0 : n.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: y = "start",
    className: g,
    as: S,
    ...m
  } = Cn(e), h = v.useMemo(() => {
    const P = { ...r == null ? void 0 : r._focus, zIndex: 1 };
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
      ...r,
      ...!!n && { _focus: P }
    };
  }, [r, n]), { ref: b, type: x } = jB(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: fB(t, b),
      as: S,
      type: f ?? x,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: h,
      className: ae("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ w.jsx(
          tm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(I1, { ...k }) }) : /* @__PURE__ */ w.jsx(I1, { ...k }),
        i && y === "end" && /* @__PURE__ */ w.jsx(
          tm,
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
tr.displayName = "Button";
function I1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(em, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(em, { marginStart: o, children: n })
  ] });
}
var Js = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ w.jsx(
      tr,
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
Js.displayName = "IconButton";
var [VB, BB] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [WB, EP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function HB(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [y, g] = v.useState(!1), [S, m] = v.useState(!1), h = v.useCallback(
    (T = {}, _ = null) => ({
      id: d,
      ...T,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(_, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), b = v.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ref: _,
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: T.id !== void 0 ? T.id : u,
      htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), x = v.useCallback(
    (T = {}, _ = null) => ({
      id: c,
      ...T,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(_, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = v.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ...a,
      ref: _,
      role: "group",
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, S, r, i]
  ), P = v.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ref: _,
      role: "presentation",
      "aria-hidden": !0,
      children: T.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var UB = oe(
  function(t, n) {
    const r = Ct("Form", t), o = Cn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = HB(o), l = ae("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(WB, { value: s, children: /* @__PURE__ */ w.jsx(VB, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
UB.displayName = "FormControl";
var GB = oe(
  function(t, n) {
    const r = EP(), o = BB(), i = ae("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
GB.displayName = "FormHelperText";
function OP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = KB(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": zf(n),
    "aria-required": zf(o),
    "aria-readonly": zf(r)
  };
}
function KB(e) {
  var t, n, r;
  const o = EP(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: y,
    ...g
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...g,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Le(o == null ? void 0 : o.onFocus, p),
    onBlur: Le(o == null ? void 0 : o.onBlur, y)
  };
}
function ug(e, t, n, r) {
  const o = to(n);
  return v.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!n || !i))
      return i.addEventListener(t, o, r), () => {
        i.removeEventListener(t, o, r);
      };
  }, [t, e, r, o, n]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, r);
  };
}
function YB(e) {
  return "current" in e;
}
var MP = () => typeof window < "u";
function qB() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var XB = (e) => MP() && e.test(navigator.vendor), QB = (e) => MP() && e.test(qB()), ZB = () => QB(/mac|iphone|ipad|ipod/i), JB = () => ZB() && XB(/apple/i);
function e6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  ug(o, "pointerdown", (i) => {
    if (!JB() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = YB(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function IP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var RP = { exports: {} }, t6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", n6 = t6, r6 = n6;
function $P() {
}
function AP() {
}
AP.resetWarningCache = $P;
var o6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== r6) {
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
  var n = {
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
    checkPropTypes: AP,
    resetWarningCache: $P
  };
  return n.PropTypes = n, n;
};
RP.exports = o6();
var i6 = RP.exports;
const xo = /* @__PURE__ */ il(i6);
var nm = "data-focus-lock", DP = "data-focus-lock-disabled", a6 = "data-no-focus-lock", s6 = "data-autofocus-inside", l6 = "data-no-autofocus";
function u6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function c6(e, t) {
  var n = v.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function FP(e, t) {
  return c6(t || null, function(n) {
    return e.forEach(function(r) {
      return u6(r, n);
    });
  });
}
var vp = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Yn = function() {
  return Yn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Yn.apply(this, arguments);
};
function LP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function d6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function zP(e) {
  return e;
}
function NP(e, t) {
  t === void 0 && (t = zP);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), n;
        }
      };
    }
  };
  return o;
}
function cg(e, t) {
  return t === void 0 && (t = zP), NP(e, t);
}
function jP(e) {
  e === void 0 && (e = {});
  var t = NP(null);
  return t.options = Yn({ async: !0, ssr: !1 }, e), t;
}
var VP = function(e) {
  var t = e.sideCar, n = LP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, Yn({}, n));
};
VP.isSideCarExport = !0;
function f6(e, t) {
  return e.useMedium(t), VP;
}
var BP = cg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), WP = cg(), p6 = cg(), h6 = jP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), m6 = [], dg = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, m = t.className, h = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? m6 : x, P = t.as, T = P === void 0 ? "div" : P, _ = t.lockProps, M = _ === void 0 ? {} : _, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = v.useState({}), K = W[0], $ = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = v.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var z = v.useCallback(function(se) {
    var me = u.current;
    if (me && me.focus) {
      var Ce = typeof D == "function" ? D(me) : D;
      if (Ce) {
        var et = typeof Ce == "object" ? Ce : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(et);
        }) : me.focus(et);
      }
    }
  }, [D]), U = v.useCallback(function(se) {
    l.current && BP.useMedium(se);
  }, []), V = WP.useMedium, Y = v.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), N = q((r = {}, r[DP] = d && "disabled", r[nm] = S, r), M), te = f !== !0, le = te && f !== "tail", ie = FP([n, Y]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: vp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: vp
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(I, {
    id: K,
    sideCar: h6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: g,
    whiteList: h,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: z,
    focusOptions: G
  }), /* @__PURE__ */ v.createElement(T, q({
    ref: ie
  }, N, {
    className: m,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: vp
  }));
});
dg.propTypes = {};
dg.defaultProps = {
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
const HP = dg;
function zc(e, t) {
  return zc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, zc(e, t);
}
function v6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zc(e, t);
}
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function g6(e, t) {
  if (Ko(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ko(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UP(e) {
  var t = g6(e, "string");
  return Ko(t) === "symbol" ? t : String(t);
}
function Di(e, t, n) {
  return t = UP(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function y6(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      v6(c, u);
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
        return /* @__PURE__ */ re.createElement(o, this.props);
      }, c;
    }(v.PureComponent);
    return Di(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ir = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Nc = function(e) {
  return Array.isArray(e) ? e : [e];
}, GP = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, b6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, KP = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, YP = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, S6 = function(e, t) {
  return !e || YP(e) || !b6(e) && t(KP(e));
}, qP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = S6(t, qP.bind(void 0, e));
  return e.set(t, r), r;
}, x6 = function(e, t) {
  return e && !YP(e) ? k6(e) ? t(KP(e)) : !1 : !0;
}, XP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = x6(t, XP.bind(void 0, e));
  return e.set(t, r), r;
}, QP = function(e) {
  return e.dataset;
}, w6 = function(e) {
  return e.tagName === "BUTTON";
}, ZP = function(e) {
  return e.tagName === "INPUT";
}, JP = function(e) {
  return ZP(e) && e.type === "radio";
}, C6 = function(e) {
  return !((ZP(e) || w6(e)) && (e.type === "hidden" || e.disabled));
}, k6 = function(e) {
  var t = e.getAttribute(l6);
  return ![!0, "true", ""].includes(t);
}, fg = function(e) {
  var t;
  return !!(e && (!((t = QP(e)) === null || t === void 0) && t.focusGuard));
}, jc = function(e) {
  return !fg(e);
}, P6 = function(e) {
  return !!e;
}, T6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, e2 = function(e, t, n) {
  return ir(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(T6);
}, _6 = [
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
], pg = _6.join(","), E6 = "".concat(pg, ", [data-focus-guard]"), t2 = function(e, t) {
  return ir((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? E6 : pg) ? [r] : [], t2(r));
  }, []);
}, O6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Hd([e.contentDocument.body], t) : [e];
}, Hd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = t2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return O6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ir(r.parentNode.querySelectorAll(pg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, M6 = function(e) {
  var t = e.querySelectorAll("[".concat(s6, "]"));
  return ir(t).map(function(n) {
    return Hd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, hg = function(e, t) {
  return ir(e).filter(function(n) {
    return qP(t, n);
  }).filter(function(n) {
    return C6(n);
  });
}, R1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ir(e).filter(function(n) {
    return XP(t, n);
  });
}, rm = function(e, t, n) {
  return e2(hg(Hd(e, n), t), !0, n);
}, $1 = function(e, t) {
  return e2(hg(Hd(e), t), !1);
}, I6 = function(e, t) {
  return hg(M6(e), t);
}, qi = function(e, t) {
  return e.shadowRoot ? qi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ir(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? qi(o, t) : !1;
    }
    return qi(n, t);
  });
}, R6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, n2 = function(e) {
  return e.parentNode ? n2(e.parentNode) : e;
}, mg = function(e) {
  var t = Nc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(nm);
    return n.push.apply(n, o ? R6(ir(n2(r).querySelectorAll("[".concat(nm, '="').concat(o, '"]:not([').concat(DP, '="disabled"])')))) : [r]), n;
  }, []);
}, $6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, el = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? el(t.shadowRoot) : t instanceof HTMLIFrameElement && $6(function() {
      return t.contentWindow.document;
    }) ? el(t.contentWindow.document) : t;
  }
}, A6 = function(e, t) {
  return e === t;
}, D6 = function(e, t) {
  return !!ir(e.querySelectorAll("iframe")).some(function(n) {
    return A6(n, t);
  });
}, r2 = function(e, t) {
  return t === void 0 && (t = el(GP(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : mg(e).some(function(n) {
    return qi(n, t) || D6(n, t);
  });
}, F6 = function(e) {
  e === void 0 && (e = document);
  var t = el(e);
  return t ? ir(e.querySelectorAll("[".concat(a6, "]"))).some(function(n) {
    return qi(n, t);
  }) : !1;
}, L6 = function(e, t) {
  return t.filter(JP).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, vg = function(e, t) {
  return JP(e) && e.name ? L6(e, t) : e;
}, z6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(vg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, A1 = function(e) {
  return e[0] && e.length > 1 ? vg(e[0], e) : e[0];
}, D1 = function(e, t) {
  return e.length > 1 ? e.indexOf(vg(e[t], e)) : t;
}, o2 = "NEW_FOCUS", N6 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = fg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = z6(t), g = n !== void 0 ? y.indexOf(n) : -1, S = g - (r ? y.indexOf(r) : l), m = D1(e, 0), h = D1(e, o - 1);
    if (l === -1 || c === -1)
      return o2;
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
}, j6 = function(e) {
  return function(t) {
    var n, r = (n = QP(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, V6 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = R1(r.filter(j6(n)));
  return o && o.length ? A1(o) : A1(R1(t));
}, om = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && om(e.parentNode.host || e.parentNode, t), t;
}, gp = function(e, t) {
  for (var n = om(e), r = om(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, i2 = function(e, t, n) {
  var r = Nc(e), o = Nc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = gp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = gp(i, l);
      u && (!a || qi(u, a) ? a = u : a = gp(u, a));
    });
  }), a;
}, B6 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(I6(r, t));
  }, []);
}, W6 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(P6);
}, H6 = function(e, t) {
  var n = el(Nc(e).length > 0 ? document : GP(e).ownerDocument), r = mg(e).filter(jc), o = i2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = $1(r, i), s = rm(r, i).filter(function(p) {
    var y = p.node;
    return jc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = $1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = W6(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = N6(c, l, n, t);
    if (d === o2) {
      var f = V6(a, c, B6(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, U6 = function(e) {
  var t = mg(e).filter(jc), n = i2(e, e, t), r = /* @__PURE__ */ new Map(), o = rm([n], r, !0), i = rm(t, r).filter(function(a) {
    var s = a.node;
    return jc(s);
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
      guard: fg(s)
    };
  });
}, G6 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, yp = 0, bp = !1, a2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = H6(e, t);
  if (!bp && r) {
    if (yp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), bp = !0, setTimeout(function() {
        bp = !1;
      }, 1);
      return;
    }
    yp++, G6(r.node, n.focusOptions), yp--;
  }
};
function gg(e) {
  setTimeout(e, 1);
}
var K6 = function() {
  return document && document.activeElement === document.body;
}, Y6 = function() {
  return K6() || F6();
}, Xi = null, Fi = null, Qi = null, tl = !1, q6 = function() {
  return !0;
}, X6 = function(t) {
  return (Xi.whiteList || q6)(t);
}, Q6 = function(t, n) {
  Qi = {
    observerNode: t,
    portaledElement: n
  };
}, Z6 = function(t) {
  return Qi && Qi.portaledElement === t;
};
function F1(e, t, n, r) {
  var o = null, i = e;
  do {
    var a = r[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var J6 = function(t) {
  return t && "current" in t ? t.current : t;
}, e9 = function(t) {
  return t ? !!tl : tl === "meanwhile";
}, t9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, n9 = function(t, n) {
  return n.some(function(r) {
    return t9(t, r, r);
  });
}, Vc = function() {
  var t = !1;
  if (Xi) {
    var n = Xi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Qi && Qi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(J6).filter(Boolean));
      if ((!c || X6(c)) && (o || e9(s) || !Y6() || !Fi && i) && (u && !// active element is "inside" working area
      (r2(d) || // check for shadow-dom contained elements
      c && n9(c, d) || Z6(c)) && (document && !Fi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = a2(d, Fi, {
        focusOptions: l
      }), Qi = {})), tl = !1, Fi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = U6(d), y = p.map(function(g) {
          var S = g.node;
          return S;
        }).indexOf(f);
        y > -1 && (p.filter(function(g) {
          var S = g.guard, m = g.node;
          return S && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var S = g.node;
          return S.removeAttribute("tabIndex");
        }), F1(y, p.length, 1, p), F1(y, -1, -1, p));
      }
    }
  }
  return t;
}, s2 = function(t) {
  Vc() && t && (t.stopPropagation(), t.preventDefault());
}, yg = function() {
  return gg(Vc);
}, r9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Q6(r, n);
}, o9 = function() {
  return null;
}, l2 = function() {
  tl = "just", gg(function() {
    tl = "meanwhile";
  });
}, i9 = function() {
  document.addEventListener("focusin", s2), document.addEventListener("focusout", yg), window.addEventListener("blur", l2);
}, a9 = function() {
  document.removeEventListener("focusin", s2), document.removeEventListener("focusout", yg), window.removeEventListener("blur", l2);
};
function s9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function l9(e) {
  var t = e.slice(-1)[0];
  t && !Xi && i9();
  var n = Xi, r = n && t && t.id === n.id;
  Xi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Fi = null, (!r || n.observed !== t.observed) && t.onActivation(), Vc(), gg(Vc)) : (a9(), Fi = null);
}
BP.assignSyncMedium(r9);
WP.assignMedium(yg);
p6.assignMedium(function(e) {
  return e({
    moveFocusInside: a2,
    focusInside: r2
  });
});
const u9 = y6(s9, l9)(o9);
var u2 = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(HP, q({
    sideCar: u9,
    ref: n
  }, t));
}), c2 = HP.propTypes || {};
c2.sideCar;
IP(c2, ["sideCar"]);
u2.propTypes = {};
const L1 = u2;
function d2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function f2(e) {
  var t;
  if (!d2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function c9(e) {
  var t, n;
  return (n = (t = p2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function p2(e) {
  return d2(e) ? e.ownerDocument : document;
}
function d9(e) {
  return p2(e).activeElement;
}
var h2 = (e) => e.hasAttribute("tabindex"), f9 = (e) => h2(e) && e.tabIndex === -1;
function p9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function m2(e) {
  return e.parentElement && m2(e.parentElement) ? !0 : e.hidden;
}
function h9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function v2(e) {
  if (!f2(e) || m2(e) || p9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : h9(e) ? !0 : h2(e);
}
function m9(e) {
  return e ? f2(e) && v2(e) && !f9(e) : !1;
}
var v9 = [
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
], g9 = v9.join(), y9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function g2(e) {
  const t = Array.from(
    e.querySelectorAll(g9)
  );
  return t.unshift(e), t.filter((n) => v2(n) && y9(n));
}
var z1, b9 = (z1 = L1.default) != null ? z1 : L1, y2 = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: n,
    contentRef: r,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = v.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && g2(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    b9,
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
y2.displayName = "FocusLock";
var S9 = UL ? v.useLayoutEffect : v.useEffect;
function N1(e, t = []) {
  const n = v.useRef(e);
  return S9(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function x9(e, t) {
  const n = v.useId();
  return v.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function w9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function C9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = N1(n), a = N1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = w9(r, s), d = x9(o, "disclosure"), f = v.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = v.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), y = v.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: y,
    isControlled: u,
    getButtonProps: (g = {}) => ({
      ...g,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: XL(g.onClick, y)
    }),
    getDisclosureProps: (g = {}) => ({
      ...g,
      hidden: !c,
      id: d
    })
  };
}
var Ud = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = OP(a), l = ae("chakra-input", t.className);
  return /* @__PURE__ */ w.jsx(
    X.input,
    {
      size: r,
      ...s,
      __css: i.field,
      ref: n,
      className: l
    }
  );
});
Ud.displayName = "Input";
Ud.id = "Input";
var b2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function k9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : Lt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function P9(e, t = b2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var Li = oe(function(t, n) {
  const r = Qo("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Cn(t), u = s3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ w.jsx(
    X.p,
    {
      ref: n,
      className: ae("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
Li.displayName = "Text";
var S2 = (e) => /* @__PURE__ */ w.jsx(
  X.div,
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
S2.displayName = "StackItem";
function T9(e) {
  const { spacing: t, direction: n } = e, r = {
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
    "&": k9(
      n,
      (o) => r[o]
    )
  };
}
var x2 = oe((e, t) => {
  const {
    isInline: n,
    direction: r,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = n ? "row" : r ?? "column", y = v.useMemo(
    () => T9({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, S = !d && !g, m = v.useMemo(() => {
    const b = zB(l);
    return S ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, T = k + 1 === b.length, M = d ? /* @__PURE__ */ w.jsx(S2, { children: x }, P) : x;
      if (!g)
        return M;
      const I = v.cloneElement(
        u,
        {
          __css: y
        }
      ), D = T ? null : I;
      return /* @__PURE__ */ w.jsxs(v.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    y,
    g,
    S,
    d,
    l
  ]), h = ae("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
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
x2.displayName = "Stack";
var Gt = oe((e, t) => /* @__PURE__ */ w.jsx(x2, { align: "center", ...e, direction: "row", ref: t }));
Gt.displayName = "HStack";
var Fe = X("div");
Fe.displayName = "Box";
var w2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ w.jsx(
    Fe,
    {
      ref: n,
      boxSize: r,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
w2.displayName = "Square";
var _9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(w2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
_9.displayName = "Circle";
var C2 = oe(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = Qo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...y
  } = Cn(t), g = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ w.jsx(
    X.hr,
    {
      ref: n,
      "aria-orientation": f,
      ...y,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...g[f],
        ...p
      },
      className: ae("chakra-divider", d)
    }
  );
});
C2.displayName = "Divider";
function E9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = w3(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = v.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return v.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((y) => y.media === f.media ? { ...y, matches: f.matches } : y));
    };
    return c.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      c.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((u) => u.matches);
}
function O9(e, t, n = b2) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1)
    return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function M9(e) {
  var t, n;
  const r = Lt(e) ? e : { fallback: e ?? "base" }, i = po().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = E9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function I9(e, t) {
  var n;
  const r = Lt(t) ? t : { fallback: t ?? "base" }, o = M9(r), i = po();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(P9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return O9(s, o, a);
}
function R9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function $9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = v.useState([]), i = v.useRef(), a = () => {
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
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (R9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function A9(e, t, n, r) {
  if (t == null)
    return r;
  if (!r)
    return e.find(
      (a) => n(a).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (i) => n(i).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let i;
    return o.includes(r) ? (i = o.indexOf(r) + 1, i === o.length && (i = 0), o[i]) : (i = e.indexOf(o[0]), e[i]);
  }
  return r;
}
function D9() {
  const e = v.useRef(/* @__PURE__ */ new Map()), t = e.current, n = v.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = v.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return v.useEffect(
    () => () => {
      t.forEach((o, i) => {
        r(o.el, o.type, i, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function Sp(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function F9(e = {}) {
  const {
    ref: t,
    isDisabled: n,
    isFocusable: r,
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
    ...y
  } = e, [g, S] = v.useState(!0), [m, h] = v.useState(!1), b = D9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = g ? d : d || 0, P = n && !r, T = v.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), _ = v.useCallback(
    ($) => {
      m && Sp($) && ($.preventDefault(), $.stopPropagation(), h(!1), b.remove(document, "keyup", _, !1));
    },
    [m, b]
  ), M = v.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Sp($.nativeEvent) || g)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), h(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", _, !1);
    },
    [
      n,
      g,
      u,
      o,
      i,
      b,
      _
    ]
  ), I = v.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Sp($.nativeEvent) || g)
        return;
      i && $.key === " " && ($.preventDefault(), h(!1), $.currentTarget.click());
    },
    [i, g, n, c]
  ), D = v.useCallback(
    ($) => {
      $.button === 0 && (h(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = v.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      g || h(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, g, a, b, D]
  ), H = v.useCallback(
    ($) => {
      $.button === 0 && (g || h(!1), s == null || s($));
    },
    [s, g]
  ), L = v.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = v.useCallback(
    ($) => {
      m && ($.preventDefault(), h(!1)), p == null || p($);
    },
    [m, p]
  ), K = at(t, x);
  return g ? {
    ...y,
    ref: K,
    type: "button",
    "aria-disabled": P ? void 0 : n,
    disabled: P,
    onClick: T,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...y,
    ref: K,
    role: "button",
    "data-active": dn(m),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: T,
    onMouseDown: G,
    onMouseUp: H,
    onKeyUp: I,
    onKeyDown: M,
    onMouseOver: L,
    onMouseLeave: W
  };
}
function L9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = d9(t);
  return !n || t.contains(n) ? !1 : !!m9(n);
}
function k2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  ca(() => {
    if (!i || L9(e))
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
var z9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function N9(e, t = z9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = j9(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  sa(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = v.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = g2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  ca(() => {
    c();
  }, [c]), ug(a, "transitionend", c);
}
function j9(e) {
  return "current" in e;
}
var si = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: si("--popper-arrow-shadow-color"),
  arrowSize: si("--popper-arrow-size", "8px"),
  arrowSizeHalf: si("--popper-arrow-size-half"),
  arrowBg: si("--popper-arrow-bg"),
  transformOrigin: si("--popper-transform-origin"),
  arrowOffset: si("--popper-arrow-offset")
};
function V9(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var B9 = {
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
}, W9 = (e) => B9[e], j1 = {
  scroll: !0,
  resize: !0
};
function H9(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...j1, ...e }
  } : t = {
    enabled: e,
    options: j1
  }, t;
}
var U9 = {
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
}, G9 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    V1(e);
  },
  effect: ({ state: e }) => () => {
    V1(e);
  }
}, V1 = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    W9(e.placement)
  );
}, K9 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    Y9(e);
  }
}, Y9 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = q9(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: xt.arrowSize.varRef,
      height: xt.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [xt.arrowSizeHalf.var]: `calc(${xt.arrowSize.varRef} / 2 - 1px)`,
      [xt.arrowOffset.var]: `calc(${xt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, q9 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, X9 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    B1(e);
  },
  effect: ({ state: e }) => () => {
    B1(e);
  }
}, B1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = V9(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: xt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, Q9 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, Z9 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function J9(e, t = "ltr") {
  var n, r;
  const o = ((n = Q9[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = Z9[e]) != null ? r : o;
}
var zt = "top", Sn = "bottom", xn = "right", Nt = "left", bg = "auto", Sl = [zt, Sn, xn, Nt], pa = "start", nl = "end", e8 = "clippingParents", P2 = "viewport", Wa = "popper", t8 = "reference", W1 = /* @__PURE__ */ Sl.reduce(function(e, t) {
  return e.concat([t + "-" + pa, t + "-" + nl]);
}, []), T2 = /* @__PURE__ */ [].concat(Sl, [bg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pa, t + "-" + nl]);
}, []), n8 = "beforeRead", r8 = "read", o8 = "afterRead", i8 = "beforeMain", a8 = "main", s8 = "afterMain", l8 = "beforeWrite", u8 = "write", c8 = "afterWrite", d8 = [n8, r8, o8, i8, a8, s8, l8, u8, c8];
function rr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yo(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function gn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Sg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function f8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !gn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function p8(e) {
  var t = e.state, n = {
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
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !gn(o) || !rr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const h8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: f8,
  effect: p8,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var Vo = Math.max, Bc = Math.min, ha = Math.round;
function im() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _2() {
  return !/^((?!chrome|android).)*safari/i.test(im());
}
function ma(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && ha(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ha(r.height) / e.offsetHeight || 1);
  var a = Yo(e) ? Jt(e) : window, s = a.visualViewport, l = !_2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function xg(e) {
  var t = ma(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function E2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Sg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function _r(e) {
  return Jt(e).getComputedStyle(e);
}
function m8(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function mo(e) {
  return ((Yo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Gd(e) {
  return rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Sg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mo(e)
  );
}
function H1(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  _r(e).position === "fixed" ? null : e.offsetParent;
}
function v8(e) {
  var t = /firefox/i.test(im()), n = /Trident/i.test(im());
  if (n && gn(e)) {
    var r = _r(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Gd(e);
  for (Sg(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = _r(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function xl(e) {
  for (var t = Jt(e), n = H1(e); n && m8(n) && _r(n).position === "static"; )
    n = H1(n);
  return n && (rr(n) === "html" || rr(n) === "body" && _r(n).position === "static") ? t : n || v8(e) || t;
}
function wg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cs(e, t, n) {
  return Vo(e, Bc(t, n));
}
function g8(e, t, n) {
  var r = Cs(e, t, n);
  return r > n ? n : r;
}
function O2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function M2(e) {
  return Object.assign({}, O2(), e);
}
function I2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var y8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, M2(typeof t != "number" ? t : I2(t, Sl));
};
function b8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = nr(n.placement), l = wg(s), u = [Nt, xn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = y8(o.padding, n), f = xg(i), p = l === "y" ? zt : Nt, y = l === "y" ? Sn : xn, g = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], m = xl(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = g / 2 - S / 2, x = d[p], k = h - f[c] - d[y], P = h / 2 - f[c] / 2 + b, T = Cs(x, P, k), _ = l;
    n.modifiersData[r] = (t = {}, t[_] = T, t.centerOffset = T - P, t);
  }
}
function S8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || E2(t.elements.popper, o) && (t.elements.arrow = o));
}
const x8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: b8,
  effect: S8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function va(e) {
  return e.split("-")[1];
}
var w8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function C8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ha(n * o) / o || 0,
    y: ha(r * o) / o || 0
  };
}
function U1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, g = y === void 0 ? 0 : y, S = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = S.x, g = S.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = Nt, x = zt, k = window;
  if (u) {
    var P = xl(n), T = "clientHeight", _ = "clientWidth";
    if (P === Jt(n) && (P = mo(n), _r(P).position !== "static" && s === "absolute" && (T = "scrollHeight", _ = "scrollWidth")), P = P, o === zt || (o === Nt || o === xn) && i === nl) {
      x = Sn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      g -= M - r.height, g *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === Sn) && i === nl) {
      b = xn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && w8), G = c === !0 ? C8({
    x: p,
    y: g
  }, Jt(n)) : {
    x: p,
    y: g
  };
  if (p = G.x, g = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = h ? "0" : "", H[b] = m ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = h ? g + "px" : "", t[b] = m ? p + "px" : "", t.transform = "", t));
}
function k8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nr(t.placement),
    variation: va(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, U1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, U1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const P8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: k8,
  data: {}
};
var uu = {
  passive: !0
};
function T8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, uu);
  }), s && l.addEventListener("resize", n.update, uu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, uu);
    }), s && l.removeEventListener("resize", n.update, uu);
  };
}
const _8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: T8,
  data: {}
};
var E8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ku(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return E8[t];
  });
}
var O8 = {
  start: "end",
  end: "start"
};
function G1(e) {
  return e.replace(/start|end/g, function(t) {
    return O8[t];
  });
}
function Cg(e) {
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function kg(e) {
  return ma(mo(e)).left + Cg(e).scrollLeft;
}
function M8(e, t) {
  var n = Jt(e), r = mo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = _2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + kg(e),
    y: l
  };
}
function I8(e) {
  var t, n = mo(e), r = Cg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Vo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Vo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + kg(e), l = -r.scrollTop;
  return _r(o || n).direction === "rtl" && (s += Vo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Pg(e) {
  var t = _r(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function R2(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : gn(e) && Pg(e) ? e : R2(Gd(e));
}
function ks(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = R2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Jt(r), a = o ? [i].concat(i.visualViewport || [], Pg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ks(Gd(a)))
  );
}
function am(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function R8(e, t) {
  var n = ma(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function K1(e, t, n) {
  return t === P2 ? am(M8(e, n)) : Yo(t) ? R8(t, n) : am(I8(mo(e)));
}
function $8(e) {
  var t = ks(Gd(e)), n = ["absolute", "fixed"].indexOf(_r(e).position) >= 0, r = n && gn(e) ? xl(e) : e;
  return Yo(r) ? t.filter(function(o) {
    return Yo(o) && E2(o, r) && rr(o) !== "body";
  }) : [];
}
function A8(e, t, n, r) {
  var o = t === "clippingParents" ? $8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = K1(e, u, r);
    return l.top = Vo(c.top, l.top), l.right = Bc(c.right, l.right), l.bottom = Bc(c.bottom, l.bottom), l.left = Vo(c.left, l.left), l;
  }, K1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function $2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? va(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case zt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Sn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case xn:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Nt:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? wg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case pa:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case nl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function rl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? e8 : s, u = n.rootBoundary, c = u === void 0 ? P2 : u, d = n.elementContext, f = d === void 0 ? Wa : d, p = n.altBoundary, y = p === void 0 ? !1 : p, g = n.padding, S = g === void 0 ? 0 : g, m = M2(typeof S != "number" ? S : I2(S, Sl)), h = f === Wa ? t8 : Wa, b = e.rects.popper, x = e.elements[y ? h : f], k = A8(Yo(x) ? x : x.contextElement || mo(e.elements.popper), l, c, a), P = ma(e.elements.reference), T = $2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), _ = am(Object.assign({}, b, T)), M = f === Wa ? _ : P, I = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, D = e.modifiersData.offset;
  if (f === Wa && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [xn, Sn].indexOf(H) >= 0 ? 1 : -1, W = [zt, Sn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function D8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? T2 : l, c = va(r), d = c ? s ? W1 : W1.filter(function(y) {
    return va(y) === c;
  }) : Sl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, g) {
    return y[g] = rl(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[nr(g)], y;
  }, {});
  return Object.keys(p).sort(function(y, g) {
    return p[y] - p[g];
  });
}
function F8(e) {
  if (nr(e) === bg)
    return [];
  var t = Ku(e);
  return [G1(e), t, G1(t)];
}
function L8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, S = t.options.placement, m = nr(S), h = m === S, b = l || (h || !y ? [Ku(S)] : F8(S)), x = [S].concat(b).reduce(function(te, le) {
      return te.concat(nr(le) === bg ? D8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, T = /* @__PURE__ */ new Map(), _ = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = nr(D), H = va(D) === pa, L = [zt, Sn].indexOf(G) >= 0, W = L ? "width" : "height", K = rl(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? xn : Nt : H ? Sn : zt;
      k[W] > P[W] && ($ = Ku($));
      var A = Ku($), z = [];
      if (i && z.push(K[G] <= 0), s && z.push(K[$] <= 0, K[A] <= 0), z.every(function(te) {
        return te;
      })) {
        M = D, _ = !1;
        break;
      }
      T.set(D, z);
    }
    if (_)
      for (var U = y ? 3 : 1, V = function(le) {
        var ie = x.find(function(se) {
          var me = T.get(se);
          if (me)
            return me.slice(0, le).every(function(Ce) {
              return Ce;
            });
        });
        if (ie)
          return M = ie, "break";
      }, Y = U; Y > 0; Y--) {
        var N = V(Y);
        if (N === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const z8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: L8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Y1(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function q1(e) {
  return [zt, xn, Sn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function N8(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = rl(t, {
    elementContext: "reference"
  }), s = rl(t, {
    altBoundary: !0
  }), l = Y1(a, r), u = Y1(s, o, i), c = q1(l), d = q1(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const j8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: N8
};
function V8(e, t, n) {
  var r = nr(e), o = [Nt, zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Nt, xn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function B8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = T2.reduce(function(c, d) {
    return c[d] = V8(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const W8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: B8
};
function H8(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const U8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: H8,
  data: {}
};
function G8(e) {
  return e === "x" ? "y" : "x";
}
function K8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, g = y === void 0 ? 0 : y, S = rl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = nr(t.placement), h = va(t.placement), b = !h, x = wg(m), k = G8(x), P = t.modifiersData.popperOffsets, T = t.rects.reference, _ = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, I = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var H, L = x === "y" ? zt : Nt, W = x === "y" ? Sn : xn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + S[L], z = $ - S[W], U = p ? -_[K] / 2 : 0, V = h === pa ? T[K] : _[K], Y = h === pa ? -_[K] : -T[K], N = t.elements.arrow, te = p && N ? xg(N) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : O2(), ie = le[L], se = le[W], me = Cs(0, T[K], te[K]), Ce = b ? T[K] / 2 - U - me - ie - I.mainAxis : V - me - ie - I.mainAxis, et = b ? -T[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && xl(t.elements.arrow), on = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[x]) != null ? H : 0, Mr = $ + Ce - Pn - on, fe = $ + et - Pn, mt = Cs(p ? Bc(A, Mr) : A, $, p ? Vo(z, fe) : z);
      P[x] = mt, G[x] = mt - $;
    }
    if (s) {
      var Ge, Wt = x === "x" ? zt : Nt, Ir = x === "x" ? Sn : xn, vt = P[k], Nn = k === "y" ? "height" : "width", Rr = vt + S[Wt], an = vt - S[Ir], ni = [zt, Nt].indexOf(m) !== -1, ka = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Pl = ni ? Rr : vt - T[Nn] - _[Nn] - ka + I.altAxis, Tl = ni ? vt + T[Nn] + _[Nn] - ka - I.altAxis : an, vo = p && ni ? g8(Pl, vt, Tl) : Cs(p ? Pl : Rr, vt, p ? Tl : an);
      P[k] = vo, G[k] = vo - vt;
    }
    t.modifiersData[r] = G;
  }
}
const Y8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: K8,
  requiresIfExists: ["offset"]
};
function q8(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function X8(e) {
  return e === Jt(e) || !gn(e) ? Cg(e) : q8(e);
}
function Q8(e) {
  var t = e.getBoundingClientRect(), n = ha(t.width) / e.offsetWidth || 1, r = ha(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Z8(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && Q8(t), i = mo(t), a = ma(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Pg(i)) && (s = X8(t)), gn(t) ? (l = ma(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = kg(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function J8(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function e7(e) {
  var t = J8(e);
  return d8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function t7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function n7(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var X1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Q1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function r7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? X1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, X1, i),
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
          reference: Yo(s) ? ks(s) : s.contextElement ? ks(s.contextElement) : [],
          popper: ks(l)
        };
        var b = e7(n7([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, b = m.popper;
          if (Q1(h, b)) {
            c.rects = {
              reference: Z8(h, xl(b), c.options.strategy === "fixed"),
              popper: xg(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, T = k.options, _ = T === void 0 ? {} : T, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: _,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: t7(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Q1(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function y() {
      c.orderedModifiers.forEach(function(S) {
        var m = S.name, h = S.options, b = h === void 0 ? {} : h, x = S.effect;
        if (typeof x == "function") {
          var k = x({
            state: c,
            name: m,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function g() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var o7 = [_8, U8, P8, h8, W8, z8, Y8, x8, j8], i7 = /* @__PURE__ */ r7({
  defaultModifiers: o7
});
function A2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: n,
    placement: r = "bottom",
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
  } = e, y = v.useRef(null), g = v.useRef(null), S = v.useRef(null), m = J9(r, p), h = v.useRef(() => {
  }), b = v.useCallback(() => {
    var I;
    !t || !y.current || !g.current || ((I = h.current) == null || I.call(h), S.current = i7(y.current, g.current, {
      placement: m,
      modifiers: [
        X9,
        K9,
        G9,
        {
          ...U9,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...H9(a)
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
        ...n ?? []
      ],
      strategy: o
    }), S.current.forceUpdate(), h.current = S.current.destroy);
  }, [
    m,
    t,
    n,
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
    var I;
    !y.current && !g.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const x = v.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), k = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = v.useCallback(
    (I) => {
      g.current = I, b();
    },
    [b]
  ), T = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(P, D),
      style: {
        ...I.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), _ = v.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: a7(I)
    };
  }, []), M = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: D,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var I;
      (I = S.current) == null || I.update();
    },
    forceUpdate() {
      var I;
      (I = S.current) == null || I.forceUpdate();
    },
    transformOrigin: xt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: T,
    getArrowProps: _,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function a7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function D2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = to(n), a = to(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = v.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
  function S(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = h.onClick) == null || x.call(h, b), g();
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
    onOpen: y,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: m
  };
}
function s7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = to(n), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      xp(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && xp(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && xp(d, t) && (a.isPointerDown = !1, o(d));
    }, c = F2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function xp(e, t) {
  var n;
  const r = e.target;
  return r && !F2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function F2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function L2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), ug(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = c9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function z2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  l7,
  u7,
  c7,
  d7
] = yP(), [f7, wl] = Je({
  strict: !1,
  name: "MenuContext"
});
function p7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function N2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Z1(e) {
  return N2(e).activeElement === e;
}
function h7(e = {}) {
  const {
    id: t,
    closeOnSelect: n = !0,
    closeOnBlur: r = !0,
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
    computePositionOnMount: y = !1,
    ...g
  } = e, S = v.useRef(null), m = v.useRef(null), h = c7(), b = v.useCallback(() => {
    requestAnimationFrame(() => {
      var N;
      (N = S.current) == null || N.focus({ preventScroll: !1 });
    });
  }, []), x = v.useCallback(() => {
    const N = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = h.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(N);
  }, [h, o]), k = v.useCallback(() => {
    const N = setTimeout(() => {
      const te = h.lastEnabled();
      te && H(te.index);
    });
    A.current.add(N);
  }, [h]), P = v.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: T, onOpen: _, onClose: M, onToggle: I } = D2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  s7({
    enabled: T && r,
    ref: S,
    handler: (N) => {
      var te;
      (te = m.current) != null && te.contains(N.target) || M();
    }
  });
  const D = A2({
    ...g,
    enabled: T || y,
    placement: d,
    direction: p
  }), [G, H] = v.useState(-1);
  ca(() => {
    T || H(-1);
  }, [T]), k2(S, {
    focusRef: m,
    visible: T,
    shouldFocus: !0
  });
  const L = L2({ isOpen: T, ref: S }), [W, K] = p7(t, "menu-button", "menu-list"), $ = v.useCallback(() => {
    _(), b();
  }, [_, b]), A = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const N = A.current;
    return () => {
      N.forEach((te) => clearTimeout(te)), N.clear();
    };
  }, []);
  const z = v.useCallback(() => {
    _(), x();
  }, [x, _]), U = v.useCallback(() => {
    _(), k();
  }, [_, k]), V = v.useCallback(() => {
    var N, te;
    const le = N2(S.current), ie = (N = S.current) == null ? void 0 : N.contains(le.activeElement);
    if (!(T && !ie))
      return;
    const me = (te = h.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [T, G, h]), Y = v.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: z,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: h,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: T,
    onToggle: I,
    onOpen: _,
    onClose: M,
    menuRef: S,
    buttonRef: m,
    focusedIndex: G,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: H,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: Y
  };
}
function m7(e = {}, t = null) {
  const n = wl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
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
    ref: at(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": dn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, s)
  };
}
function sm(e) {
  var t;
  return b7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function v7(e = {}, t = null) {
  const n = wl();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: r,
    setFocusedIndex: o,
    menuRef: i,
    isOpen: a,
    onClose: s,
    menuId: l,
    isLazy: u,
    lazyBehavior: c,
    unstable__animationState: d
  } = n, f = u7(), p = $9({
    preventDefault: (m) => m.key !== " " && sm(m.target)
  }), y = v.useCallback(
    (m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const h = m.key, x = {
        Tab: (P) => P.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const P = f.nextEnabled(r);
          P && o(P.index);
        },
        ArrowUp: () => {
          const P = f.prevEnabled(r);
          P && o(P.index);
        }
      }[h];
      if (x) {
        m.preventDefault(), x(m);
        return;
      }
      const k = p((P) => {
        const T = A9(
          f.values(),
          P,
          (_) => {
            var M, I;
            return (I = (M = _ == null ? void 0 : _.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (T) {
          const _ = f.indexOf(T.node);
          o(_);
        }
      });
      sm(m.target) && k(m);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), g = v.useRef(!1);
  a && (g.current = !0);
  const S = z2({
    wasSelected: g.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: at(i, t),
    children: S ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Le(e.onKeyDown, y)
  };
}
function g7(e = {}) {
  const { popper: t, isOpen: n } = wl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function y7(e = {}, t = null) {
  const {
    onMouseEnter: n,
    onMouseMove: r,
    onMouseLeave: o,
    onClick: i,
    onFocus: a,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: u,
    type: c,
    ...d
  } = e, f = wl(), {
    setFocusedIndex: p,
    focusedIndex: y,
    closeOnSelect: g,
    onClose: S,
    menuRef: m,
    isOpen: h,
    menuId: b,
    rafId: x
  } = f, k = v.useRef(null), P = `${b}-menuitem-${v.useId()}`, { index: T, register: _ } = d7({
    disabled: s && !l
  }), M = v.useCallback(
    ($) => {
      n == null || n($), !s && p(T);
    },
    [p, T, s, n]
  ), I = v.useCallback(
    ($) => {
      r == null || r($), k.current && !Z1(k.current) && M($);
    },
    [M, r]
  ), D = v.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = v.useCallback(
    ($) => {
      i == null || i($), sm($.currentTarget) && (u ?? g) && S();
    },
    [S, i, g, u]
  ), H = v.useCallback(
    ($) => {
      a == null || a($), p(T);
    },
    [p, a, T]
  ), L = T === y, W = s && !l;
  ca(() => {
    if (h)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : m.current && !Z1(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, m, h]);
  const K = F9({
    onClick: G,
    onFocus: H,
    onMouseEnter: M,
    onMouseMove: I,
    onMouseLeave: D,
    ref: at(_, k, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...K,
    type: c ?? K.type,
    id: P,
    role: "menuitem",
    tabIndex: L ? 0 : -1
  };
}
function b7(e) {
  var t;
  if (!S7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function S7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [x7, Cl] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Tg = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = po(), { descendants: i, ...a } = h7({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(l7, { value: i, children: /* @__PURE__ */ w.jsx(f7, { value: s, children: /* @__PURE__ */ w.jsx(x7, { value: n, children: qn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
Tg.displayName = "Menu";
var j2 = oe(
  (e, t) => {
    const n = Cl();
    return /* @__PURE__ */ w.jsx(
      X.span,
      {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
      }
    );
  }
);
j2.displayName = "MenuCommand";
var w7 = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Cl(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
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
    return /* @__PURE__ */ w.jsx(X.button, { ref: t, type: i, ...r, __css: a });
  }
), _g = (e) => {
  const { className: t, children: n, ...r } = e, o = Cl(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ae("chakra-menu__icon", i.props.className)
  }) : null, s = ae("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
_g.displayName = "MenuIcon";
var Yu = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = y7(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    w7,
    {
      ...l,
      className: ae("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(_g, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(j2, { marginStart: i, children: o })
      ]
    }
  );
});
Yu.displayName = "MenuItem";
var C7 = {
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
}, k7 = X(or.div), V2 = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = wl(), d = v7(s, n), f = g7(i), p = Cl();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        k7,
        {
          variants: C7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ae("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: fC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
V2.displayName = "MenuList";
var P7 = oe((e, t) => {
  const n = Cl();
  return /* @__PURE__ */ w.jsx(
    X.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button
      }
    }
  );
}), B2 = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = m7(o, t), a = r || P7;
    return /* @__PURE__ */ w.jsx(
      a,
      {
        ...i,
        className: ae("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ w.jsx(
          X.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
B2.displayName = "MenuButton";
var T7 = {
  slideInBottom: {
    ...ns,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...ns,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...ns,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...ns,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...kP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, _7 = X(or.section), E7 = (e) => T7[e || "none"], W2 = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = E7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(_7, { ref: t, ...r, ...o });
  }
);
W2.displayName = "ModalTransition";
var O7 = Object.defineProperty, M7 = (e, t, n) => t in e ? O7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, I7 = (e, t, n) => (M7(e, typeof t != "symbol" ? t + "" : t, n), n), R7 = class {
  constructor() {
    I7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, lm = new R7();
function H2(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = lm.add(o);
        r(i);
      }
      return () => {
        lm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var $7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, li = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), du = {}, wp = 0, U2 = function(e) {
  return e && (e.host || U2(e.parentNode));
}, A7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = U2(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, D7 = function(e, t, n, r) {
  var o = A7(t, Array.isArray(e) ? e : [e]);
  du[n] || (du[n] = /* @__PURE__ */ new WeakMap());
  var i = du[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), y = p !== null && p !== "false", g = (li.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        li.set(f, g), i.set(f, S), a.push(f), g === 1 && y && cu.set(f, !0), S === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), wp++, function() {
    a.forEach(function(d) {
      var f = li.get(d) - 1, p = i.get(d) - 1;
      li.set(d, f), i.set(d, p), f || (cu.has(d) || d.removeAttribute(r), cu.delete(d)), p || d.removeAttribute(n);
    }), wp--, wp || (li = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), du = {});
  };
}, F7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || $7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), D7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function L7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = N7(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  z7(u, t && a);
  const y = H2(u, t), g = v.useRef(null), S = v.useCallback((M) => {
    g.current = M.target;
  }, []), m = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [h, b] = v.useState(!1), [x, k] = v.useState(!1), P = v.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, h]
  ), T = v.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && lm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), _ = v.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, T),
      onKeyDown: Le(M.onKeyDown, m),
      onMouseDown: Le(M.onMouseDown, S)
    }),
    [m, S, T]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: _,
    index: y
  };
}
function z7(e, t) {
  const n = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return F7(e.current);
  }, [t, e, n]);
}
function N7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [j7, Ca] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [V7, lo] = Je({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Kd = (e) => {
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
    portalProps: n,
    children: r,
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
    onCloseComplete: y
  } = t, g = Ct("Modal", t), m = {
    ...L7(t),
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
  return /* @__PURE__ */ w.jsx(V7, { value: m, children: /* @__PURE__ */ w.jsx(j7, { value: g, children: /* @__PURE__ */ w.jsx(ei, { onExitComplete: y, children: m.isOpen && /* @__PURE__ */ w.jsx(fl, { ...n, children: r }) }) }) });
};
Kd.displayName = "Modal";
var qu = "right-scroll-bar-position", Xu = "width-before-scroll-bar", B7 = "with-scroll-bars-hidden", W7 = "--removed-body-scroll-bar-size", G2 = jP(), Cp = function() {
}, Yd = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Cp,
    onWheelCapture: Cp,
    onTouchMoveCapture: Cp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, g = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, h = e.gapMode, b = LP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = FP([n, t]), P = Yn(Yn({}, b), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(x, { sideCar: G2, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: h }),
    a ? v.cloneElement(v.Children.only(s), Yn(Yn({}, P), { ref: k })) : v.createElement(m, Yn({}, P, { className: l, ref: k }), s)
  );
});
Yd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yd.classNames = {
  fullWidth: Xu,
  zeroRight: qu
};
var J1, H7 = function() {
  if (J1)
    return J1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function U7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = H7();
  return t && e.setAttribute("nonce", t), e;
}
function G7(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function K7(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Y7 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = U7()) && (G7(t, n), K7(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, q7 = function() {
  var e = Y7();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, K2 = function() {
  var e = q7(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, X7 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kp = function(e) {
  return parseInt(e || "", 10) || 0;
}, Q7 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kp(n), kp(r), kp(o)];
}, Z7 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return X7;
  var t = Q7(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, J7 = K2(), eW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(B7, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(qu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Xu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(qu, " .").concat(qu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xu, " .").concat(Xu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(W7, ": ").concat(s, `px;
  }
`);
}, tW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return Z7(o);
  }, [o]);
  return v.createElement(J7, { styles: eW(i, !t, o, n ? "" : "!important") });
}, um = !1;
if (typeof window < "u")
  try {
    var fu = Object.defineProperty({}, "passive", {
      get: function() {
        return um = !0, !0;
      }
    });
    window.addEventListener("test", fu, fu), window.removeEventListener("test", fu, fu);
  } catch {
    um = !1;
  }
var ui = um ? { passive: !1 } : !1, nW = function(e) {
  return e.tagName === "TEXTAREA";
}, Y2 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !nW(e) && n[t] === "visible")
  );
}, rW = function(e) {
  return Y2(e, "overflowY");
}, oW = function(e) {
  return Y2(e, "overflowX");
}, eS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = q2(e, r);
    if (o) {
      var i = X2(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, iW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, aW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, q2 = function(e, t) {
  return e === "v" ? rW(t) : oW(t);
}, X2 = function(e, t) {
  return e === "v" ? iW(t) : aW(t);
}, sW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, lW = function(e, t, n, r, o) {
  var i = sW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = X2(e, s), y = p[0], g = p[1], S = p[2], m = g - S - i * y;
    (y || m) && q2(e, s) && (d += m, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, pu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tS = function(e) {
  return [e.deltaX, e.deltaY];
}, nS = function(e) {
  return e && "current" in e ? e.current : e;
}, uW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, cW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, dW = 0, ci = [];
function fW(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(dW++)[0], i = v.useState(K2)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = d6([e.lockRef.current], (e.shards || []).map(nS), !0).filter(Boolean);
      return g.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, S) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = pu(g), h = n.current, b = "deltaX" in g ? g.deltaX : h[0] - m[0], x = "deltaY" in g ? g.deltaY : h[1] - m[1], k, P = g.target, T = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in g && T === "h" && P.type === "range")
      return !1;
    var _ = eS(T, P);
    if (!_)
      return !0;
    if (_ ? k = T : (k = T === "v" ? "h" : "v", _ = eS(T, P)), !_)
      return !1;
    if (!r.current && "changedTouches" in g && (b || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return lW(M, S, g, M === "h" ? b : x, !0);
  }, []), l = v.useCallback(function(g) {
    var S = g;
    if (!(!ci.length || ci[ci.length - 1] !== i)) {
      var m = "deltaY" in S ? tS(S) : pu(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && uW(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var b = (a.current.shards || []).map(nS).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(g, S, m, h) {
    var b = { name: g, delta: S, target: m, should: h, shadowParent: pW(m) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = v.useCallback(function(g) {
    n.current = pu(g), r.current = void 0;
  }, []), d = v.useCallback(function(g) {
    u(g.type, tS(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    u(g.type, pu(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return ci.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, ui), document.addEventListener("touchmove", l, ui), document.addEventListener("touchstart", c, ui), function() {
      ci = ci.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, ui), document.removeEventListener("touchmove", l, ui), document.removeEventListener("touchstart", c, ui);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    y ? v.createElement(i, { styles: cW(o) }) : null,
    p ? v.createElement(tW, { gapMode: e.gapMode }) : null
  );
}
function pW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const hW = f6(G2, fW);
var Q2 = v.forwardRef(function(e, t) {
  return v.createElement(Yd, Yn({}, e, { ref: t, sideCar: hW }));
});
Q2.classNames = Yd.classNames;
const mW = Q2;
function Z2(e) {
  const {
    autoFocus: t,
    trapFocus: n,
    dialogRef: r,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = lo(), [f, p] = Qk();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = H2(r, d);
  return /* @__PURE__ */ w.jsx(
    y2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        mW,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: y === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var Eg = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = lo(), u = s(a, t), c = l(o), d = ae("chakra-modal__content", n), f = Ca(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: g } = lo();
    return /* @__PURE__ */ w.jsx(Z2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ w.jsx(
          W2,
          {
            preset: g,
            motionProps: i,
            className: d,
            ...u,
            __css: p,
            children: r
          }
        )
      }
    ) });
  }
);
Eg.displayName = "ModalContent";
var [vW, gW] = Je(), yW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function bW(e, t) {
  var n, r;
  if (e)
    return (r = (n = yW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function SW(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = po(), l = (t = s.components) == null ? void 0 : t.Drawer, u = bW(o, s.direction);
  return /* @__PURE__ */ w.jsx(vW, { value: { placement: u }, children: /* @__PURE__ */ w.jsx(
    Kd,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var xW = X(PP), J2 = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = lo(), c = s(a, t), d = l(i), f = ae("chakra-modal__content", n), p = Ca(), y = {
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
    }, { placement: S } = gW();
    return /* @__PURE__ */ w.jsx(Z2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          xW,
          {
            motionProps: o,
            direction: S,
            in: u,
            className: f,
            ...c,
            __css: y,
            children: r
          }
        )
      }
    ) });
  }
);
J2.displayName = "DrawerContent";
var qd = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = lo();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ae("chakra-modal__header", n), l = {
      flex: 0,
      ...Ca().header
    };
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ref: t,
        className: a,
        id: o,
        ...r,
        __css: l
      }
    );
  }
);
qd.displayName = "ModalHeader";
var wW = X(or.div), Xd = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ae("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ca().overlay
    }, { motionPreset: u } = lo(), d = o || (u === "none" ? {} : CP);
    return /* @__PURE__ */ w.jsx(
      wW,
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
Xd.displayName = "ModalOverlay";
var Qd = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = lo();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ae("chakra-modal__body", n), s = Ca();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      className: a,
      id: o,
      ...r,
      __css: s.body
    }
  );
});
Qd.displayName = "ModalBody";
var Og = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = lo(), a = ae("chakra-modal__close-btn", r), s = Ca();
    return /* @__PURE__ */ w.jsx(
      Bd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Le(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
Og.displayName = "ModalCloseButton";
var [CW, ti] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [kW, kl] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), eT = oe(
  function(t, n) {
    const { getHeaderProps: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ...r(t, n),
        className: ae("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
eT.displayName = "PopoverHeader";
function Mg(e) {
  const t = v.Children.only(e.children), { getTriggerProps: n } = ti();
  return v.cloneElement(t, n(t.props, t.ref));
}
Mg.displayName = "PopoverTrigger";
var di = {
  click: "click",
  hover: "hover"
};
function PW(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = di.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: y,
    ...g
  } = e, { isOpen: S, onClose: m, onOpen: h, onToggle: b } = D2(e), x = v.useRef(null), k = v.useRef(null), P = v.useRef(null), T = v.useRef(!1), _ = v.useRef(!1);
  S && (_.current = !0);
  const [M, I] = v.useState(!1), [D, G] = v.useState(!1), H = v.useId(), L = o ?? H, [W, K, $, A] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((fe) => `${fe}-${L}`), {
    referenceRef: z,
    getArrowProps: U,
    getPopperProps: V,
    getArrowInnerProps: Y,
    forceUpdate: N
  } = A2({
    ...g,
    enabled: S || !!y
  }), te = L2({ isOpen: S, ref: P });
  e6({
    enabled: S,
    ref: k
  }), k2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === di.click
  }), N9(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === di.click
  });
  const le = z2({
    wasSelected: _.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ie = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        style: {
          ...fe.style,
          transformOrigin: xt.transformOrigin.varRef,
          [xt.arrowSize.var]: s ? `${s}px` : void 0,
          [xt.arrowShadowColor.var]: l
        },
        ref: at(P, mt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Wt) => {
          n && Wt.key === "Escape" && m();
        }),
        onBlur: Le(fe.onBlur, (Wt) => {
          const Ir = rS(Wt), vt = Pp(P.current, Ir), Nn = Pp(k.current, Ir);
          S && t && (!vt && !Nn) && m();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === di.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Wt) => {
          Wt.nativeEvent.relatedTarget !== null && (T.current = !1, setTimeout(() => m(), d));
        }
      )), Ge;
    },
    [
      le,
      K,
      M,
      $,
      D,
      A,
      u,
      n,
      m,
      S,
      t,
      d,
      l,
      s
    ]
  ), se = v.useCallback(
    (fe = {}, mt = null) => V(
      {
        ...fe,
        style: {
          visibility: S ? "visible" : "hidden",
          ...fe.style
        }
      },
      mt
    ),
    [S, V]
  ), me = v.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, x, z)
    }),
    [x, z]
  ), Ce = v.useRef(), et = v.useRef(), qe = v.useCallback(
    (fe) => {
      x.current == null && z(fe);
    },
    [z]
  ), on = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === di.click && (Ge.onClick = Le(fe.onClick, b)), u === di.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        Ce.current === void 0 && h();
      }), Ge.onBlur = Le(fe.onBlur, (Wt) => {
        const Ir = rS(Wt), vt = !Pp(P.current, Ir);
        S && t && vt && m();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Wt) => {
        Wt.key === "Escape" && m();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0, Ce.current = window.setTimeout(() => h(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        T.current = !1, Ce.current && (clearTimeout(Ce.current), Ce.current = void 0), et.current = window.setTimeout(() => {
          T.current === !1 && m();
        }, d);
      })), Ge;
    },
    [
      W,
      S,
      K,
      u,
      qe,
      b,
      h,
      t,
      m,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    Ce.current && clearTimeout(Ce.current), et.current && clearTimeout(et.current);
  }, []);
  const Pn = v.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: $,
      ref: at(mt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Mr = v.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: A,
      ref: at(mt, (Ge) => {
        G(!!Ge);
      })
    }),
    [A]
  );
  return {
    forceUpdate: N,
    isOpen: S,
    onAnimationComplete: te.onComplete,
    onClose: m,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ie,
    getTriggerProps: on,
    getHeaderProps: Pn,
    getBodyProps: Mr
  };
}
function Pp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function rS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Ig(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = po(), i = PW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(CW, { value: i, children: /* @__PURE__ */ w.jsx(kW, { value: t, children: qn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Ig.displayName = "Popover";
var Tp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Rg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ti(), c = kl(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          className: ae("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Tp("colors", s),
            "--popper-arrow-bg": Tp("colors", d),
            "--popper-arrow-shadow": Tp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Rg.displayName = "PopoverArrow";
var $g = oe(
  function(t, n) {
    const { getBodyProps: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r(t, n),
        className: ae("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
$g.displayName = "PopoverBody";
var Ag = oe(
  function(t, n) {
    const { onClose: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      Bd,
      {
        size: "sm",
        onClick: r,
        className: ae("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Ag.displayName = "PopoverCloseButton";
function TW(e) {
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
var _W = {
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
}, EW = X(or.section), tT = oe(function(t, n) {
  const { variants: r = _W, ...o } = t, { isOpen: i } = ti();
  return /* @__PURE__ */ w.jsx(
    EW,
    {
      ref: n,
      variants: TW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
tT.displayName = "PopoverTransition";
var Dg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ti(), u = kl(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ w.jsx(
          tT,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: fC(
              l,
              i.onAnimationComplete
            ),
            className: ae("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
Dg.displayName = "PopoverContent";
var [OW, nT] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), rT = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(OW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
rT.displayName = "Tag";
var MW = oe((e, t) => {
  const n = nT();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
MW.displayName = "TagLabel";
var IW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
IW.displayName = "TagLeftIcon";
var RW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
RW.displayName = "TagRightIcon";
var oT = (e) => /* @__PURE__ */ w.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
oT.displayName = "TagCloseIcon";
var $W = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...nT().closeButton
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: a,
        children: r || /* @__PURE__ */ w.jsx(oT, {})
      }
    );
  }
);
$W.displayName = "TagCloseButton";
var AW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, DW = Object.defineProperty, FW = Object.defineProperties, LW = Object.getOwnPropertyDescriptors, Wc = Object.getOwnPropertySymbols, iT = Object.prototype.hasOwnProperty, aT = Object.prototype.propertyIsEnumerable, oS = (e, t, n) => t in e ? DW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, iS = (e, t) => {
  for (var n in t || (t = {}))
    iT.call(t, n) && oS(e, n, t[n]);
  if (Wc)
    for (var n of Wc(t))
      aT.call(t, n) && oS(e, n, t[n]);
  return e;
}, zW = (e, t) => FW(e, LW(t)), NW = (e, t) => {
  var n = {};
  for (var r in e)
    iT.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wc)
    for (var r of Wc(e))
      t.indexOf(r) < 0 && aT.call(e, r) && (n[r] = e[r]);
  return n;
}, rn = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = NW(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        iS(zW(iS({
          ref: i
        }, AW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => v.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: xo.string,
    size: xo.oneOfType([xo.string, xo.number]),
    stroke: xo.oneOfType([xo.string, xo.number])
  }, r.displayName = `${t}`, r;
}, jW = rn("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), VW = rn("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), BW = rn("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), WW = rn("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), HW = rn("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), UW = rn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), Fg = rn("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), GW = rn("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), KW = rn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), sT = rn("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), lT = rn("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), YW = rn(
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
), qW = rn("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let hu;
const XW = new Uint8Array(16);
function QW() {
  if (!hu && (hu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !hu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return hu(XW);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function ZW(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const JW = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), aS = {
  randomUUID: JW
};
function eH(e, t, n) {
  if (aS.randomUUID && !t && !e)
    return aS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || QW)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return ZW(r);
}
async function uT(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function ol(e, t) {
  const n = e + "/" + Date.now() + ".json";
  nH(n, t);
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
async function tH(e, t) {
  try {
    return await (await fetch("/workspace/update_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    alert("Error saving workflow .json file: " + n), console.error("Error saving workspace:", n);
  }
}
async function cT(e) {
  try {
    return await (await fetch("/workspace/delete_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e
      })
    })).text();
  } catch (t) {
    console.error("Error deleting file:", t);
  }
}
async function nH(e, t) {
  try {
    return await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    console.error("Error saving workspace backup:", n);
  }
}
async function rH(e) {
  try {
    return await (await fetch("/workspace/list_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dir: e
      })
    })).text();
  } catch (t) {
    console.error("Error saving workspace:", t);
  }
}
function oH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function dT(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
let Pe, Ie = null;
async function iH() {
  const e = async () => {
    let n = await uT("workflows");
    n == null && (n = localStorage.getItem("workspace") ?? "{}"), Pe = JSON.parse(n ?? "{}");
  }, t = async () => {
    Ie = await sH();
  };
  await Promise.all([e(), t()]);
}
function cm(e, t) {
  if (Pe == null)
    return;
  const n = Pe[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Pe[e] = {
      ...Pe[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Pe)), ol("workflows", JSON.stringify(Pe)), t.name != null) {
      n.filePath && cT(n.filePath), dm(e);
      return;
    }
    t.json != null && dm(e);
  }
}
function dm(e) {
  if (Pe == null)
    return;
  const t = Pe[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = oH(t.name) + ".json";
  Pe[e].filePath = n, tH(n, t.json);
}
function sS(e) {
  if (Pe == null)
    throw new Error("workspace is not loaded");
  const t = eH(), n = "Untitled Flow";
  return Pe[t] = {
    id: t,
    name: n,
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Pe)), ol("workflows", JSON.stringify(Pe)), dm(t), Pe[t];
}
function mu() {
  if (Pe == null)
    throw new Error("workspace is not loaded");
  return Object.values(Pe).sort((e, t) => t.updateTime - e.updateTime);
}
function aH(e) {
  var n;
  if (Pe == null)
    throw new Error("workspace is not loaded");
  const t = (n = Pe[e]) == null ? void 0 : n.filePath;
  delete Pe[e], localStorage.setItem("workspace", JSON.stringify(Pe)), ol("workflows", JSON.stringify(Pe)), t != null && cT(t);
}
async function sH() {
  let e = await uT("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((n, r) => r.updateTime - n.updateTime);
    },
    upsert(n) {
      return t[n] == null && (t[n] = {
        name: n,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[n].updateTime = Date.now(), ol("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], ol("tags", JSON.stringify(t));
    }
  };
}
const fT = v.createContext({
  curFlowID: null
});
function lS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lS(Object(n), !0).forEach(function(r) {
      Di(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function lH(e) {
  if (Array.isArray(e))
    return e;
}
function uH(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function fm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function pT(e, t) {
  if (e) {
    if (typeof e == "string")
      return fm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fm(e, t);
  }
}
function cH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return lH(e) || uH(e, t) || pT(e, t) || cH();
}
function Or(e, t) {
  if (e == null)
    return {};
  var n = IP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var dH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function fH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Or(e, dH), g = v.useState(s !== void 0 ? s : n), S = Sr(g, 2), m = S[0], h = S[1], b = v.useState(l !== void 0 ? l : o), x = Sr(b, 2), k = x[0], P = x[1], T = v.useState(p !== void 0 ? p : a), _ = Sr(T, 2), M = _[0], I = _[1], D = v.useCallback(function(A, z) {
    typeof u == "function" && u(A, z), I(A);
  }, [u]), G = v.useCallback(function(A, z) {
    var U;
    typeof c == "function" && (U = c(A, z)), h(U !== void 0 ? U : A);
  }, [c]), H = v.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = v.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : m, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
  return Z(Z({}, y), {}, {
    inputValue: W,
    menuIsOpen: K,
    onChange: D,
    onInputChange: G,
    onMenuClose: L,
    onMenuOpen: H,
    value: $
  });
}
function pH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, UP(r.key), r);
  }
}
function hH(e, t, n) {
  return t && uS(e.prototype, t), n && uS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function mH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && zc(e, t);
}
function Hc(e) {
  return Hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hc(e);
}
function vH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yH(e, t) {
  if (t && (Ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gH(e);
}
function bH(e) {
  var t = vH();
  return function() {
    var r = Hc(e), o;
    if (t) {
      var i = Hc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return yH(this, o);
  };
}
function SH(e) {
  if (Array.isArray(e))
    return fm(e);
}
function xH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function wH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hT(e) {
  return SH(e) || xH(e) || pT(e) || wH();
}
function CH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const kH = Math.min, PH = Math.max, Uc = Math.round, vu = Math.floor, Gc = (e) => ({
  x: e,
  y: e
});
function TH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function mT(e) {
  return gT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vT(e) {
  var t;
  return (t = (gT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gT(e) {
  return e instanceof Node || e instanceof Fn(e).Node;
}
function pm(e) {
  return e instanceof Element || e instanceof Fn(e).Element;
}
function Lg(e) {
  return e instanceof HTMLElement || e instanceof Fn(e).HTMLElement;
}
function cS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fn(e).ShadowRoot;
}
function yT(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = zg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function _H() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function EH(e) {
  return ["html", "body", "#document"].includes(mT(e));
}
function zg(e) {
  return Fn(e).getComputedStyle(e);
}
function OH(e) {
  if (mT(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cS(e) && e.host || // Fallback.
    vT(e)
  );
  return cS(t) ? t.host : t;
}
function bT(e) {
  const t = OH(e);
  return EH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lg(t) && yT(t) ? t : bT(t);
}
function Kc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bT(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Fn(o);
  return i ? t.concat(a, a.visualViewport || [], yT(o) ? o : [], a.frameElement && n ? Kc(a.frameElement) : []) : t.concat(o, Kc(o, [], n));
}
function MH(e) {
  const t = zg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Lg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Uc(n) !== i || Uc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Ng(e) {
  return pm(e) ? e : e.contextElement;
}
function _p(e) {
  const t = Ng(e);
  if (!Lg(t))
    return Gc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = MH(t);
  let a = (i ? Uc(n.width) : n.width) / r, s = (i ? Uc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const IH = /* @__PURE__ */ Gc(0);
function RH(e) {
  const t = Fn(e);
  return !_H() || !t.visualViewport ? IH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $H(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fn(e) ? !1 : t;
}
function dS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ng(e);
  let a = Gc(1);
  t && (r ? pm(r) && (a = _p(r)) : a = _p(e));
  const s = $H(i, n, r) ? RH(i) : Gc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Fn(i), p = r && pm(r) ? Fn(r) : r;
    let y = f.frameElement;
    for (; y && r && p !== f; ) {
      const g = _p(y), S = y.getBoundingClientRect(), m = zg(y), h = S.left + (y.clientLeft + parseFloat(m.paddingLeft)) * g.x, b = S.top + (y.clientTop + parseFloat(m.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += h, u += b, y = Fn(y).frameElement;
    }
  }
  return TH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function AH(e, t) {
  let n = null, r;
  const o = vT(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = vu(c), y = vu(o.clientWidth - (u + d)), g = vu(o.clientHeight - (c + f)), S = vu(u), h = {
      rootMargin: -p + "px " + -y + "px " + -g + "px " + -S + "px",
      threshold: PH(0, kH(1, l)) || 1
    };
    let b = !0;
    function x(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!b)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, h);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function DH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Ng(e), c = o || i ? [...u ? Kc(u) : [], ...Kc(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const d = u && s ? AH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, g = l ? dS(e) : null;
  l && S();
  function S() {
    const m = dS(e);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(), g = m, y = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
var hm = v.useLayoutEffect, FH = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Yc = function() {
};
function LH(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function zH(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(LH(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var fS = function(t) {
  return KH(t) ? t.filter(Boolean) : Ko(t) === "object" && t !== null ? [t] : [];
}, ST = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Or(t, FH);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function Zd(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function NH(e) {
  return Zd(e) ? window.innerHeight : e.clientHeight;
}
function xT(e) {
  return Zd(e) ? window.pageYOffset : e.scrollTop;
}
function qc(e, t) {
  if (Zd(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function jH(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function VH(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function gu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Yc, o = xT(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = VH(s, o, i, n);
    qc(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function pS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? qc(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && qc(e, Math.max(t.offsetTop - o, 0));
}
function BH(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function hS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function WH() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var wT = !1, HH = {
  get passive() {
    return wT = !0;
  }
}, yu = typeof window < "u" ? window : {};
yu.addEventListener && yu.removeEventListener && (yu.addEventListener("p", Yc, HH), yu.removeEventListener("p", Yc, !1));
var UH = wT;
function GH(e) {
  return e != null;
}
function KH(e) {
  return Array.isArray(e);
}
function bu(e, t, n) {
  return e ? t : n;
}
var YH = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = Sr(a, 1), l = s[0];
    return !r.includes(l);
  });
  return i.reduce(function(a, s) {
    var l = Sr(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, qH = ["children", "innerProps"], XH = ["children", "innerProps"];
function QH(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = jH(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, g = f.top, S = n.offsetParent.getBoundingClientRect(), m = S.top, h = a ? window.innerHeight : NH(l), b = xT(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = m - k, T = h - g, _ = P + b, M = d - b - g, I = p - h + b + x, D = b + g - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (T >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= y && !a)
        return i && gu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && T >= r) {
        i && gu(l, I, G);
        var H = a ? T - x : M - x;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : _;
        return W >= r && (L = Math.min(W - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && qc(l, I), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= y)
        return {
          placement: "top",
          maxHeight: t
        };
      if (_ >= y && !a)
        return i && gu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && _ >= r || a && P >= r) {
        var K = t;
        return (!a && _ >= r || a && P >= r) && (K = a ? P - k : _ - k), i && gu(l, D, G), {
          placement: "top",
          maxHeight: K
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function ZH(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var CT = function(t) {
  return t === "auto" ? "bottom" : t;
}, JH = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, Di(r, ZH(o), "100%"), Di(r, "position", "absolute"), Di(r, "width", "100%"), Di(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, kT = /* @__PURE__ */ v.createContext(null), eU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = v.useContext(kT) || {}, c = u.setPortalPlacement, d = v.useRef(null), f = v.useState(o), p = Sr(f, 2), y = p[0], g = p[1], S = v.useState(null), m = Sr(S, 2), h = m[0], b = m[1], x = l.spacing.controlHeight;
  return hm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", T = s && !P, _ = QH({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: T,
        isFixedPosition: P,
        controlHeight: x
      });
      g(_.maxHeight), b(_.placement), c == null || c(_.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: h || CT(i),
      maxHeight: y
    })
  });
}, tU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, nU = tU, rU = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return Z({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, oU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, PT = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, iU = PT, aU = PT, sU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Or(t, qH);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, lU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Or(t, XH);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, uU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, cU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = v.useRef(null), u = v.useRef(null), c = v.useState(CT(a)), d = Sr(c, 2), f = d[0], p = d[1], y = v.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), g = v.useState(null), S = Sr(g, 2), m = S[0], h = S[1], b = v.useCallback(function() {
    if (o) {
      var T = BH(o), _ = s === "fixed" ? 0 : window.pageYOffset, M = T[f] + _;
      (M !== (m == null ? void 0 : m.offset) || T.left !== (m == null ? void 0 : m.rect.left) || T.width !== (m == null ? void 0 : m.rect.width)) && h({
        offset: M,
        rect: T
      });
    }
  }, [o, s, f, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  hm(function() {
    b();
  }, [b]);
  var x = v.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = DH(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  hm(function() {
    x();
  }, [x]);
  var k = v.useCallback(function(T) {
    l.current = T, x();
  }, [x]);
  if (!n && s !== "fixed" || !m)
    return null;
  var P = ee("div", q({
    ref: k
  }, Ue(Z(Z({}, t), {}, {
    offset: m.offset,
    position: s,
    rect: m.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return ee(kT.Provider, {
    value: y
  }, n ? /* @__PURE__ */ hd.createPortal(P, n) : P);
}, dU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, fU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, pU = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return Z({
    alignItems: "center",
    display: o && i && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, hU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, mU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, vU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, mS, gU = ["size"], yU = ["innerProps", "isRtl", "size"], bU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, TT = function(t) {
  var n = t.size, r = Or(t, gU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: bU
  }, r));
}, jg = function(t) {
  return ee(TT, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, _T = function(t) {
  return ee(TT, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, ET = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, SU = ET, xU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(_T, null));
}, wU = ET, CU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(jg, null));
}, kU = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, PU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, TU = aC(mS || (mS = CH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), _U = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, a = i.colors, s = i.spacing.baseUnit;
  return Z({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, Ep = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Pv({
      animation: "".concat(TU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, EU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Or(t, yU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(Ep, {
    delay: 0,
    offset: r
  }), ee(Ep, {
    delay: 160,
    offset: !0
  }), ee(Ep, {
    delay: 320,
    offset: !r
  }));
}, OU = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, a = i.colors, s = i.borderRadius, l = i.spacing;
  return Z({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: o ? a.primary : a.neutral30
    }
  });
}, MU = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return ee("div", q({
    ref: i
  }, Ue(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, IU = MU, RU = ["data"], $U = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, AU = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, a = t.Heading, s = t.headingProps, l = t.innerProps, u = t.label, c = t.theme, d = t.selectProps;
  return ee("div", q({}, Ue(t, "group", {
    group: !0
  }), l), ee(a, q({}, s, {
    selectProps: d,
    theme: c,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), u), ee("div", null, n));
}, DU = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return Z({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, FU = function(t) {
  var n = ST(t);
  n.data;
  var r = Or(n, RU);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, LU = AU, zU = ["innerRef", "isDisabled", "isHidden", "inputClassName"], NU = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, jU), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, OT = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, jU = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, OT)
}, VU = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, OT);
}, BU = function(t) {
  var n = t.cx, r = t.value, o = ST(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Or(o, zU);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: VU(s),
    disabled: a
  }, u)));
}, WU = BU, HU = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors;
  return Z({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, UU = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, a = t.cropWithEllipsis;
  return Z({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, GU = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors, s = t.isFocused;
  return Z({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, MT = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, KU = MT, YU = MT;
function qU(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(jg, {
    size: 14
  }));
}
var XU = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, a = t.isDisabled, s = t.removeProps, l = t.selectProps, u = r.Container, c = r.Label, d = r.Remove;
  return ee(u, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), i),
    selectProps: l
  }, ee(c, {
    data: o,
    innerProps: Z({}, Ue(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, n), ee(d, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: l
  }));
}, QU = XU, ZU = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.theme, s = a.spacing, l = a.colors;
  return Z({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? l.primary : o ? l.primary25 : "transparent",
    color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? l.primary : l.primary50
    }
  });
}, JU = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.innerRef, s = t.innerProps;
  return ee("div", q({}, Ue(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, eG = JU, tG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, nG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, rG = nG, oG = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, a = o.colors;
  return Z({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, iG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, aG = iG, sG = {
  ClearIndicator: CU,
  Control: IU,
  DropdownIndicator: xU,
  DownChevron: _T,
  CrossIcon: jg,
  Group: LU,
  GroupHeading: FU,
  IndicatorsContainer: vU,
  IndicatorSeparator: PU,
  Input: WU,
  LoadingIndicator: EU,
  Menu: nU,
  MenuList: oU,
  MenuPortal: cU,
  LoadingMessage: lU,
  NoOptionsMessage: sU,
  MultiValue: QU,
  MultiValueContainer: KU,
  MultiValueLabel: YU,
  MultiValueRemove: qU,
  Option: eG,
  Placeholder: rG,
  SelectContainer: fU,
  SingleValue: aG,
  ValueContainer: hU
}, lG = function(t) {
  return Z(Z({}, sG), t.components);
}, vS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function uG(e, t) {
  return !!(e === t || vS(e) && vS(t));
}
function cG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!uG(e[n], t[n]))
      return !1;
  return !0;
}
function dG(e, t) {
  t === void 0 && (t = cG);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var fG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, pG = function(t) {
  return ee("span", q({
    css: fG
  }, t));
}, gS = pG, hG = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.isDisabled, i = t.tabSelectsValue, a = t.context;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options".concat(o ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, a = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(y, g) {
      return y && y.length ? "".concat(y.indexOf(g) + 1, " of ").concat(y.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(c(s, r), ".");
    if (n === "menu") {
      var d = l ? " disabled" : "", f = "".concat(u ? "selected" : "focused").concat(d);
      return "option ".concat(a, " ").concat(f, ", ").concat(c(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, mG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, y = l.isOptionDisabled, g = l.isSearchable, S = l.menuIsOpen, m = l.options, h = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = v.useMemo(function() {
    return Z(Z({}, hG), c || {});
  }, [c]), T = v.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, z = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(z), Y = V ? d(V) : "", N = K || A || void 0, te = N ? N.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && y(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, y, s, d]), _ = v.useMemo(function() {
    var L = "", W = r || o, K = !!(r && s && s.includes(r));
    if (W && P.onFocus) {
      var $ = {
        focused: W,
        label: d(W),
        isDisabled: y(W, s),
        isSelected: K,
        options: i,
        context: W === r ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus($);
    }
    return L;
  }, [r, o, d, y, P, i, s]), M = v.useMemo(function() {
    var L = "";
    if (S && m.length && P.onFilter) {
      var W = h({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, S, P, m, h]), I = v.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && y(r, s),
        isMulti: p,
        isSearchable: g,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, y, g, S, P, s, b]), D = "".concat(_, " ").concat(M, " ").concat(I), G = ee(v.Fragment, null, ee("span", {
    id: "aria-selection"
  }, T), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(v.Fragment, null, ee(gS, {
    id: u
  }, H && G), ee(gS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, vG = mG, mm = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], gG = new RegExp("[" + mm.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), IT = {};
for (var Op = 0; Op < mm.length; Op++)
  for (var Mp = mm[Op], Ip = 0; Ip < Mp.letters.length; Ip++)
    IT[Mp.letters[Ip]] = Mp.base;
var RT = function(t) {
  return t.replace(gG, function(n) {
    return IT[n];
  });
}, yG = dG(RT), yS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, bG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, SG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: bG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? yS(r) : r, d = l ? yS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = yG(c), d = RT(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, xG = ["innerRef"];
function wG(e) {
  var t = e.innerRef, n = Or(e, xG), r = YH(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Pv({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var CG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function kG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = v.useRef(!1), s = v.useRef(!1), l = v.useRef(0), u = v.useRef(null), c = v.useCallback(function(S, m) {
    if (u.current !== null) {
      var h = u.current, b = h.scrollTop, x = h.scrollHeight, k = h.clientHeight, P = u.current, T = m > 0, _ = x - k - b, M = !1;
      _ > m && a.current && (r && r(S), a.current = !1), T && s.current && (i && i(S), s.current = !1), T && m > _ ? (n && !a.current && n(S), P.scrollTop = x, M = !0, a.current = !0) : !T && -m > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && CG(S);
    }
  }, [n, r, o, i]), d = v.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = v.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = v.useCallback(function(S) {
    var m = l.current - S.changedTouches[0].clientY;
    c(S, m);
  }, [c]), y = v.useCallback(function(S) {
    if (S) {
      var m = UH ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, m), S.addEventListener("touchstart", f, m), S.addEventListener("touchmove", p, m);
    }
  }, [p, f, d]), g = v.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return v.useEffect(function() {
    if (t) {
      var S = u.current;
      return y(S), function() {
        g(S);
      };
    }
  }, [t, y, g]), function(S) {
    u.current = S;
  };
}
var bS = ["boxSizing", "height", "overflow", "paddingRight", "position"], SS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function xS(e) {
  e.preventDefault();
}
function wS(e) {
  e.stopPropagation();
}
function CS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function kS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var PS = !!(typeof window < "u" && window.document && window.document.createElement), Ha = 0, fi = {
  capture: !1,
  passive: !1
};
function PG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = v.useRef({}), i = v.useRef(null), a = v.useCallback(function(l) {
    if (PS) {
      var u = document.body, c = u && u.style;
      if (r && bS.forEach(function(y) {
        var g = c && c[y];
        o.current[y] = g;
      }), r && Ha < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(SS).forEach(function(y) {
          var g = SS[y];
          c && (c[y] = g);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && kS() && (u.addEventListener("touchmove", xS, fi), l && (l.addEventListener("touchstart", CS, fi), l.addEventListener("touchmove", wS, fi))), Ha += 1;
    }
  }, [r]), s = v.useCallback(function(l) {
    if (PS) {
      var u = document.body, c = u && u.style;
      Ha = Math.max(Ha - 1, 0), r && Ha < 1 && bS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && kS() && (u.removeEventListener("touchmove", xS, fi), l && (l.removeEventListener("touchstart", CS, fi), l.removeEventListener("touchmove", wS, fi)));
    }
  }, [r]);
  return v.useEffect(function() {
    if (t) {
      var l = i.current;
      return a(l), function() {
        s(l);
      };
    }
  }, [t, a, s]), function(l) {
    i.current = l;
  };
}
var TG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, _G = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function EG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = kG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = PG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(v.Fragment, null, n && ee("div", {
    onClick: TG,
    css: _G
  }), t(d));
}
var OG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, MG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: OG,
    value: "",
    onChange: function() {
    }
  });
}, IG = MG, RG = function(t) {
  return t.label;
}, $G = function(t) {
  return t.label;
}, AG = function(t) {
  return t.value;
}, DG = function(t) {
  return !!t.isDisabled;
}, FG = {
  clearIndicator: wU,
  container: dU,
  control: OU,
  dropdownIndicator: SU,
  group: $U,
  groupHeading: DU,
  indicatorsContainer: mU,
  indicatorSeparator: kU,
  input: NU,
  loadingIndicator: _U,
  loadingMessage: aU,
  menu: JH,
  menuList: rU,
  menuPortal: uU,
  multiValue: HU,
  multiValueLabel: UU,
  multiValueRemove: GU,
  noOptionsMessage: iU,
  option: ZU,
  placeholder: tG,
  singleValue: oG,
  valueContainer: pU
}, LG = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, zG = 4, $T = 4, NG = 38, jG = $T * 2, VG = {
  baseUnit: $T,
  controlHeight: NG,
  menuGutter: jG
}, Rp = {
  borderRadius: zG,
  colors: LG,
  spacing: VG
}, BG = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: hS(),
  captureMenuScroll: !hS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: SG(),
  formatGroupLabel: RG,
  getOptionLabel: $G,
  getOptionValue: AG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: DG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !WH(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function TS(e, t, n, r) {
  var o = LT(e, t, n), i = zT(e, t, n), a = FT(e, t), s = Xc(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r
  };
}
function AT(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return TS(e, a, t, s);
      }).filter(function(a) {
        return _S(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = TS(e, n, t, r);
    return _S(e, i) ? i : void 0;
  }).filter(GH);
}
function DT(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, hT(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function WG(e, t) {
  return DT(AT(e, t));
}
function _S(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!jT(e) || !i) && NT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function HG(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function UG(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var FT = function(t, n) {
  return t.getOptionLabel(n);
}, Xc = function(t, n) {
  return t.getOptionValue(n);
};
function LT(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function zT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Xc(e, t);
  return n.some(function(o) {
    return Xc(e, o) === r;
  });
}
function NT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var jT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, GG = 1, VT = /* @__PURE__ */ function(e) {
  mH(n, e);
  var t = bH(n);
  function n(r) {
    var o;
    if (pH(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.instancePrefix = "", o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(s) {
      o.controlRef = s;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(s) {
      o.focusedOptionRef = s;
    }, o.menuListRef = null, o.getMenuListRef = function(s) {
      o.menuListRef = s;
    }, o.inputRef = null, o.getInputRef = function(s) {
      o.inputRef = s;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(s, l) {
      var u = o.props, c = u.onChange, d = u.name;
      l.name = d, o.ariaOnChange(s, l), c(s, l);
    }, o.setValue = function(s, l, u) {
      var c = o.props, d = c.closeMenuOnSelect, f = c.isMulti, p = c.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: p
      }), d && (o.setState({
        inputIsHiddenAfterUpdate: !f
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(s, {
        action: l,
        option: u
      });
    }, o.selectOption = function(s) {
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), y = o.isOptionDisabled(s, f);
      if (p) {
        var g = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== g;
        }), "deselect-option", s);
      } else if (!y)
        c ? o.setValue([].concat(hT(f), [s]), "select-option", s) : o.setValue(s, "select-option");
      else {
        o.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: d
        });
        return;
      }
      u && o.blurInput();
    }, o.removeValue = function(s) {
      var l = o.props.isMulti, u = o.state.selectValue, c = o.getOptionValue(s), d = u.filter(function(p) {
        return o.getOptionValue(p) !== c;
      }), f = bu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(bu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = bu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return zH.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return FT(o.props, s);
    }, o.getOptionValue = function(s) {
      return Xc(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = FG[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return lG(o.props);
    }, o.buildCategorizedOptions = function() {
      return AT(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return DT(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(s, l) {
      o.setState({
        ariaSelection: Z({
          value: s
        }, l)
      });
    }, o.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(s) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && o.onMenuClose() : l && o.openMenu("first") : (l && (o.openAfterFocus = !0), o.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !o.props.isDisabled) {
        var l = o.props, u = l.isMulti, c = l.menuIsOpen;
        o.focusInput(), c ? (o.setState({
          inputIsHiddenAfterUpdate: !u
        }), o.onMenuClose()) : o.openMenu("first"), s.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (o.clearValue(), s.preventDefault(), o.openAfterFocus = !1, s.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(s) {
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && Zd(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(s) {
      var l = s.touches, u = l && l.item(0);
      u && (o.initialTouchX = u.clientX, o.initialTouchY = u.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(s) {
      var l = s.touches, u = l && l.item(0);
      if (u) {
        var c = Math.abs(u.clientX - o.initialTouchX), d = Math.abs(u.clientY - o.initialTouchY), f = 5;
        o.userIsDragging = c > f || d > f;
      }
    }, o.onTouchEnd = function(s) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(s.target) && o.menuListRef && !o.menuListRef.contains(s.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(s) {
      o.userIsDragging || o.onControlMouseDown(s);
    }, o.onClearIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onClearIndicatorMouseDown(s);
    }, o.onDropdownIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(s);
    }, o.handleInputChange = function(s) {
      var l = o.props.inputValue, u = s.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(u, {
        action: "input-change",
        prevInputValue: l
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(s) {
      o.props.onFocus && o.props.onFocus(s), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(s) {
      var l = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(s), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(s) {
      o.blockOptionHover || o.state.focusedOption === s || o.setState({
        focusedOption: s
      });
    }, o.shouldHideSelectedOptions = function() {
      return jT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, y = l.isDisabled, g = l.menuIsOpen, S = l.onKeyDown, m = l.tabSelectsValue, h = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!y && !(typeof S == "function" && (S(s), s.defaultPrevented))) {
        switch (o.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!u || f)
              return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!u || f)
              return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f)
              return;
            if (k)
              o.removeValue(k);
            else {
              if (!c)
                return;
              u ? o.popValue() : p && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || s.shiftKey || !g || !m || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            h && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (g) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            g ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!g) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            g ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            g ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!g)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!g)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!g)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!g)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++GG), o.state.selectValue = fS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return hH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && pS(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, a = i.isDisabled, s = i.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !a && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !o.menuIsOpen) && this.focusInput(), l && a && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !a && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (pS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, i) {
      this.props.onInputChange(o, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var i = this, a = this.state, s = a.selectValue, l = a.isFocused, u = this.buildFocusableOptions(), c = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c]
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, a = i.selectValue, s = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = a.indexOf(s);
        s || (l = -1);
        var u = a.length - 1, c = -1;
        if (a.length) {
          switch (o) {
            case "previous":
              l === 0 ? c = 0 : l === -1 ? c = u : c = l - 1;
              break;
            case "next":
              l > -1 && l < u && (c = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(a);
        a || (u = -1), o === "up" ? l = u > 0 ? u - 1 : s.length - 1 : o === "down" ? l = (u + 1) % s.length : o === "pageup" ? (l = u - i, l < 0 && (l = 0)) : o === "pagedown" ? (l = u + i, l > s.length - 1 && (l = s.length - 1)) : o === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[l],
          focusedValue: null
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Rp) : Z(Z({}, Rp), this.props.theme) : Rp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, g = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: g,
        isMulti: f,
        isRtl: p,
        options: y,
        selectOption: u,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, i = o.isClearable, a = o.isMulti;
      return i === void 0 ? a : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return LT(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return zT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return NT(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), y = p.Input, g = this.state, S = g.inputIsHidden, m = g.ariaSelection, h = this.commonProps, b = s || this.getElementId("input"), x = Z(Z(Z({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox"
        }, d && {
          "aria-controls": this.getElementId("listbox"),
          "aria-owns": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (m == null ? void 0 : m.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ v.createElement(y, q({}, h, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: S,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ v.createElement(wG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Yc,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, g = p.isDisabled, S = p.isMulti, m = p.inputValue, h = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !y)
        return m ? null : /* @__PURE__ */ v.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), h);
      if (S)
        return x.map(function(_, M) {
          var I = _ === k, D = "".concat(o.getOptionLabel(_), "-").concat(o.getOptionValue(_));
          return /* @__PURE__ */ v.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: g,
            key: D,
            index: M,
            removeProps: {
              onClick: function() {
                return o.removeValue(_);
              },
              onTouchEnd: function() {
                return o.removeValue(_);
              },
              onMouseDown: function(H) {
                H.preventDefault();
              }
            },
            data: _
          }), o.formatOptionLabel(_, "value"));
        });
      if (m)
        return null;
      var T = x[0];
      return /* @__PURE__ */ v.createElement(c, q({}, f, {
        data: T,
        isDisabled: g
      }), this.formatOptionLabel(T, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !i || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!i || !u)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, a = o.IndicatorSeparator;
      if (!i || !a)
        return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ v.createElement(a, q({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i)
        return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, y = this.commonProps, g = this.state.focusedOption, S = this.props, m = S.captureMenuScroll, h = S.inputValue, b = S.isLoading, x = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, T = S.menuIsOpen, _ = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!T)
        return null;
      var K = function(N, te) {
        var le = N.type, ie = N.data, se = N.isDisabled, me = N.isSelected, Ce = N.label, et = N.value, qe = g === ie, on = se ? void 0 : function() {
          return o.onOptionHover(ie);
        }, Pn = se ? void 0 : function() {
          return o.selectOption(ie);
        }, Mr = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Mr,
          onClick: Pn,
          onMouseMove: on,
          onMouseOver: on,
          tabIndex: -1
        };
        return /* @__PURE__ */ v.createElement(p, q({}, y, {
          innerProps: fe,
          data: ie,
          isDisabled: se,
          isSelected: me,
          key: Mr,
          label: Ce,
          type: le,
          value: et,
          isFocused: qe,
          innerRef: qe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(N.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var N = Y.data, te = Y.options, le = Y.index, ie = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ie, "-heading");
            return /* @__PURE__ */ v.createElement(a, q({}, y, {
              key: ie,
              data: N,
              options: te,
              Heading: s,
              headingProps: {
                id: se,
                data: Y.data
              },
              label: o.formatGroupLabel(Y.data)
            }), Y.options.map(function(me) {
              return K(me, "".concat(le, "-").concat(me.index));
            }));
          } else if (Y.type === "option")
            return K(Y, "".concat(Y.index));
        });
      else if (b) {
        var A = x({
          inputValue: h
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(d, y, A);
      } else {
        var z = H({
          inputValue: h
        });
        if (z === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(f, y, z);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: _,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ v.createElement(eU, q({}, y, U), function(Y) {
        var N = Y.ref, te = Y.placerProps, le = te.placement, ie = te.maxHeight;
        return /* @__PURE__ */ v.createElement(l, q({}, y, U, {
          innerRef: N,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ v.createElement(EG, {
          captureEnabled: m,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ v.createElement(u, q({}, y, {
            innerRef: function(Ce) {
              o.getMenuListRef(Ce), se(Ce);
            },
            isLoading: b,
            maxHeight: ie,
            focusedOption: g
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ v.createElement(c, q({}, y, {
        appendTo: I,
        controlElement: this.controlRef,
        menuPlacement: _,
        menuPosition: M
      }), V) : V;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ v.createElement(IG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(g) {
              return o.getOptionValue(g);
            }).join(a);
            return /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(g, S) {
              return /* @__PURE__ */ v.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(g)
              });
            }) : /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ v.createElement("div", null, p);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ v.createElement("input", {
            name: u,
            type: "hidden",
            value: y
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ v.createElement(vG, q({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: l,
        isFocused: u,
        selectValue: c,
        focusableOptions: d
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, y = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v.createElement(s, q({}, g, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ v.createElement(i, q({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ v.createElement(l, q({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v.createElement(a, q({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, y = o.menuIsOpen, g = o.inputValue, S = o.isMulti, m = fS(p), h = {};
      if (a && (p !== a.value || f !== a.options || y !== a.menuIsOpen || g !== a.inputValue)) {
        var b = y ? WG(o, m) : [], x = s ? HG(i, m) : null, k = UG(i, b);
        h = {
          selectValue: m,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, T = u, _ = c && d;
      return c && !_ && (T = {
        value: bu(S, m, m[0] || null),
        options: m,
        action: "initial-input-focus"
      }, _ = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (T = null), Z(Z(Z({}, h), P), {}, {
        prevProps: o,
        ariaSelection: T,
        prevWasFocused: _
      });
    }
  }]), n;
}(v.Component);
VT.defaultProps = BG;
var KG = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = fH(e);
  return /* @__PURE__ */ v.createElement(VT, q({
    ref: t
  }, n));
}), YG = KG, qG = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function vm() {
  return vm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vm.apply(this, arguments);
}
function XG(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var BT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = XG(t, qG);
  return vm({}, n);
}, QG = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, ZG = function(t) {
  return QG(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, zn = function(t) {
  var n = po(), r = ZG(n.components.Input.defaultProps.size), o = t ?? r, i = I9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function ga() {
  return ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ga.apply(this, arguments);
}
var JG = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ga({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, eK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, y = l.controlShouldRenderValue, g = zn(c), S = Ct("Input", {
    size: g,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), m = {
    display: i && a && y ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, h = u != null && u.valueContainer ? u.valueContainer(m, t) : m;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: h
  }), n);
}, tK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, nK = ["height", "h"];
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function rK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, g = c.errorBorderColor, S = c.isInvalid, m = c.isReadOnly, h = zn(f), b = Ct("Input", {
    size: h,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: g
  }), x = b.field, k = x.height, P = x.h, T = rK(x, nK), _ = k || P, M = wn({}, T, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: _
  }, s ? {
    pointerEvents: "none"
  } : {}), I = d != null && d.control ? d.control(M, t) : M;
  return /* @__PURE__ */ re.createElement(Fe, wn({
    ref: i,
    className: r({
      control: !0,
      "control--is-disabled": s,
      "control--is-focused": l,
      "control--menu-is-open": u
    }, n),
    sx: I
  }, a, {
    "data-focus": l ? !0 : void 0,
    "data-focus-visible": l ? !0 : void 0,
    "data-invalid": S ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": m ? !0 : void 0
  }), o);
}, iK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(C2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, aK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, sK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), y = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), g = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = g[p], m = wn({}, y.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: S
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), h = s != null && s.dropdownIndicator ? s.dropdownIndicator(m, t) : m, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement(Fe, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: h
  }), n || /* @__PURE__ */ re.createElement(aK, {
    sx: x
  }));
}, lK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, uK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = Qo("CloseButton", {
    size: u
  }), d = wn({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, y = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement(Fe, wn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(lK, {
    sx: y
  }));
}, cK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, g = y[p], S = {
    marginRight: 3
  }, m = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(Vd, wn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: m
  }, o, {
    size: f || g,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const dK = oK;
var fK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Ps() {
  return Ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ps.apply(this, arguments);
}
function pK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var hK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = BT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = pK(l, fK), y = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, g = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    color: "inherit",
    marginX: "0.125rem",
    paddingY: "0.125rem",
    visibility: c ? "hidden" : "visible",
    // Force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : "",
    _after: Ps({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, y)
  }, S = a != null && a.inputContainer ? a.inputContainer(g, t) : g, m = Ps({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, y), h = a != null && a.input ? a.input(m, t) : m;
  return /* @__PURE__ */ re.createElement(Fe, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ re.createElement(X.input, Ps({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: h,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const mK = hK;
var vK = ["data"];
function gK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
var yK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, bK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[yK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(Tg, null, /* @__PURE__ */ re.createElement(Fe, Bt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const SK = bK;
var xK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, g = c.errorBorderColor, S = Ct("Menu"), m = zn(f), h = Ct("Input", {
    size: m,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: g
  }), b = h.field, x = Bt({}, S.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = S.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ re.createElement(Fe, Bt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: k,
    ref: i
  }), a);
}, wK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Fe, Bt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, CK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Fe, Bt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, kK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, y = {}, g = p != null && p.group ? p.group(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Bt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: g
  }), /* @__PURE__ */ re.createElement(s, Bt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Fe, null, n));
}, PK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = BT(t);
  l.data;
  var u = gK(l, vK), c = Ct("Menu"), d = zn(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, y = Bt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), g = i != null && i.groupHeading ? i.groupHeading(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Bt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: g
  }));
}, TK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Bt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, _K = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, y = c.hideSelectedOptions, g = c.selectedOptionStyle, S = c.selectedOptionColorScheme, m = Ct("Menu").item, h = zn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = ky(S + ".500", S + ".300"), P = ky("white", "black"), T = g === "check" && (!p || y === !1), _ = g === "color", M = Bt({}, m, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: h,
    paddingX: b[h],
    paddingY: x[h]
  }, _ && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), I = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ re.createElement(Fe, Bt({
    role: "option"
  }, i, {
    className: r({
      option: !0,
      "option--is-disabled": l,
      "option--is-focused": s,
      "option--is-selected": u
    }, n),
    sx: I,
    ref: o,
    "data-focus": s ? !0 : void 0,
    "aria-disabled": l ? !0 : void 0,
    "aria-selected": u
  }), T && /* @__PURE__ */ re.createElement(_g, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(TK, null)), a);
};
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rn.apply(this, arguments);
}
var EK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, OK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, WT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, MK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, y = o.Label, g = o.Remove, S = d.chakraStyles, m = d.colorScheme, h = d.tagVariant, b = d.size, x = zn(b), k = "", P = "", T = !1;
  EK(a) && (k = a.colorScheme), OK(a) && (P = a.variant), WT(a) && (T = a.isFixed);
  var _ = Ct("Tag", {
    size: x,
    colorScheme: k || m,
    variant: P || h || (T ? "solid" : "subtle")
  }), M = Rn({}, _.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = S != null && S.multiValue ? S.multiValue(M, t) : M, D = Rn({}, _.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, H = Rn({}, _.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = S != null && S.multiValueRemove ? S.multiValueRemove(H, t) : H;
  return /* @__PURE__ */ re.createElement(p, {
    data: a,
    innerProps: Rn({
      className: i({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, r)
    }, s),
    sx: I,
    selectProps: d
  }, /* @__PURE__ */ re.createElement(y, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(g, {
    data: a,
    innerProps: Rn({
      className: i({
        "multi-value__remove": !0
      }, r),
      "aria-label": "Remove " + (n || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, IK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, RK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, $K = function(t) {
  return /* @__PURE__ */ re.createElement(kn, Rn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, AK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return WT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Fe, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement($K, null));
};
const DK = MK;
function gm() {
  return gm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gm.apply(this, arguments);
}
var FK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, gm({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const LK = FK;
function ym() {
  return ym = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ym.apply(this, arguments);
}
var zK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Fe, ym({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const NK = zK;
var jK = {
  ClearIndicator: uK,
  Control: dK,
  DropdownIndicator: sK,
  Group: kK,
  GroupHeading: PK,
  IndicatorSeparator: iK,
  IndicatorsContainer: tK,
  Input: mK,
  LoadingIndicator: cK,
  LoadingMessage: wK,
  Menu: SK,
  MenuList: xK,
  MultiValue: DK,
  MultiValueContainer: IK,
  MultiValueLabel: RK,
  MultiValueRemove: AK,
  NoOptionsMessage: CK,
  Option: _K,
  Placeholder: LK,
  SelectContainer: JG,
  SingleValue: NK,
  ValueContainer: eK
};
const VK = jK;
var BK = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function WK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var HK = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, y = t.tagVariant, g = t.selectedOptionStyle, S = g === void 0 ? "color" : g, m = t.selectedOptionColorScheme, h = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, T = P === void 0 ? {} : P, _ = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = WK(t, BK), G = po(), H = G.components.Input.defaultProps.variant, L = OP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: _,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = m || h || "blue";
  typeof A != "string" && (A = "blue");
  var z = Qc({
    // Allow overriding of custom components
    components: Qc({}, VK, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: y,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: b ?? H,
    chakraStyles: T,
    focusBorderColor: x,
    errorBorderColor: k,
    // Extract custom props from form control
    onFocus: L.onFocus,
    onBlur: L.onBlur,
    isDisabled: L.disabled,
    isInvalid: !!L["aria-invalid"],
    inputId: L.id,
    isReadOnly: L.readOnly,
    required: d ?? L.required,
    menuIsOpen: W
  }, D, {
    // aria-invalid can be passed to react-select, so we allow that to
    // override the `isInvalid` prop
    "aria-invalid": (n = D["aria-invalid"]) != null ? n : L["aria-invalid"]
  });
  return z;
};
const UK = HK;
function bm() {
  return bm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bm.apply(this, arguments);
}
var GK = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = UK(e);
  return /* @__PURE__ */ re.createElement(YG, bm({
    ref: t
  }, n));
});
const KK = GK;
function YK({ workflow: e }) {
  var c;
  const [t, n] = v.useState([]), [r, o] = v.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = v.useState(i);
  if (v.useEffect(() => {
    Ie && n(Ie.listAll() ?? []);
  }, []), v.useEffect(() => {
    var d;
    s(
      ((d = e.tags) == null ? void 0 : d.map((f) => ({
        value: f,
        label: f
      }))) ?? []
    );
  }, [e.tags]), Ie == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ w.jsxs(Ig, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(Mg, { children: /* @__PURE__ */ w.jsx(tr, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(sT, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Dg, { children: [
      /* @__PURE__ */ w.jsx(Rg, {}),
      /* @__PURE__ */ w.jsx(Ag, {}),
      /* @__PURE__ */ w.jsx(eT, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs($g, { children: [
        /* @__PURE__ */ w.jsx(
          KK,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              console.log(d), s(d), cm(e.id, {
                tags: d.map((f) => f.value)
              });
            },
            chakraStyles: {
              dropdownIndicator: (d, f) => ({
                ...d,
                p: 0,
                w: "30px"
              }),
              menuList: (d, f) => ({
                ...d,
                shadow: "none",
                pt: 0
              })
            },
            placeholder: "Select tags",
            closeMenuOnSelect: !1,
            maxMenuHeight: u
          }
        ),
        /* @__PURE__ */ w.jsxs(
          Gt,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ w.jsx(
                Ud,
                {
                  placeholder: "New tag name",
                  size: "sm",
                  mt: 6,
                  mb: 6,
                  variant: "flushed",
                  value: r,
                  onChange: (d) => {
                    o(d.target.value);
                  }
                }
              ),
              /* @__PURE__ */ w.jsx(
                tr,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ w.jsx(Fg, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    Ie == null || Ie.upsert(r), n((Ie == null ? void 0 : Ie.listAll()) ?? []), o("");
                  },
                  children: "New Tag"
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function qK({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await rH("workflows");
    if (console.log(o), o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Kd, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(Xd, {}),
    /* @__PURE__ */ w.jsxs(Eg, { children: [
      /* @__PURE__ */ w.jsx(qd, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(Og, {}),
      /* @__PURE__ */ w.jsx(Qd, { children: /* @__PURE__ */ w.jsx(_P, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs(xP, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(bP, { children: [
            /* @__PURE__ */ w.jsxs(Fe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              dT(i)
            ] }),
            /* @__PURE__ */ w.jsx(SP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(TP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Fe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function XK({ onclose: e }) {
  const [t, n] = v.useState((Ie == null ? void 0 : Ie.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(Kd, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(Xd, {}),
    /* @__PURE__ */ w.jsxs(Eg, { children: [
      /* @__PURE__ */ w.jsx(qd, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(Og, {}),
      /* @__PURE__ */ w.jsx(Qd, { children: t.map((r) => /* @__PURE__ */ w.jsxs(Gt, { children: [
        /* @__PURE__ */ w.jsx(rT, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          Js,
          {
            onClick: () => {
              Ie == null || Ie.delete(r.name), n((Ie == null ? void 0 : Ie.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(lT, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function QK({}) {
  const { isOpen: e, onOpen: t, onClose: n } = C9(), [r, o] = v.useState(!1);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(Tg, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        B2,
        {
          as: Js,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(HW, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(V2, { children: [
        /* @__PURE__ */ w.jsx(
          Yu,
          {
            icon: /* @__PURE__ */ w.jsx(GW, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ w.jsx(
          Yu,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(sT, { size: 16 }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsx(
          Yu,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(WW, { size: 16 }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(XK, { onclose: () => o(!1) }),
    e && /* @__PURE__ */ w.jsx(qK, { onclose: n })
  ] });
}
const ES = 6;
function ZK({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = v.useState([]), { colorMode: i } = wa(), { curFlowID: a } = v.useContext(fT), [s, l] = v.useState(), [u, c] = v.useState(!1);
  v.useEffect(() => {
    const p = mu();
    o(p);
  }, []);
  const d = (p) => {
    aH(p);
    const y = mu();
    o(y);
  }, f = (p) => {
    l(p), o(mu().filter((y) => {
      var g;
      return (g = y.tags) == null ? void 0 : g.includes(p);
    }));
  };
  return /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ w.jsxs(
    SW,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ w.jsx(Xd, {}),
        /* @__PURE__ */ w.jsxs(J2, { children: [
          /* @__PURE__ */ w.jsx(qd, { children: /* @__PURE__ */ w.jsxs(Gt, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ w.jsxs(Gt, { children: [
              /* @__PURE__ */ w.jsx(Li, { mr: 6, children: "Workflows" }),
              /* @__PURE__ */ w.jsx(
                tr,
                {
                  leftIcon: /* @__PURE__ */ w.jsx(Fg, {}),
                  variant: "outline",
                  size: "sm",
                  colorScheme: "teal",
                  onClick: n,
                  children: "New"
                }
              )
            ] }),
            /* @__PURE__ */ w.jsx(Gt, { alignItems: "center", children: /* @__PURE__ */ w.jsx(QK, {}) })
          ] }) }),
          /* @__PURE__ */ w.jsxs(Qd, { children: [
            /* @__PURE__ */ w.jsxs(Gt, { spacing: 2, wrap: "wrap", mb: 6, children: [
              s != null && /* @__PURE__ */ w.jsx(
                Js,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ w.jsx(qW, {}),
                  onClick: () => {
                    l(void 0), o(mu());
                  }
                }
              ),
              Ie == null ? void 0 : Ie.listAll().slice(0, u ? void 0 : ES).map((p) => /* @__PURE__ */ w.jsx(
                tr,
                {
                  variant: "solid",
                  width: "auto",
                  flexShrink: 0,
                  size: "sm",
                  py: 4,
                  onClick: () => f(p.name),
                  isActive: s === p.name,
                  children: p.name
                }
              )),
              ((Ie == null ? void 0 : Ie.listAll().length) ?? 0) > ES && /* @__PURE__ */ w.jsx(
                Js,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: u ? /* @__PURE__ */ w.jsx(VW, {}) : /* @__PURE__ */ w.jsx(jW, {}),
                  onClick: () => c(!u)
                }
              )
            ] }),
            r.map((p) => {
              const y = p.id === a;
              return /* @__PURE__ */ w.jsxs(Gt, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ w.jsxs(
                  Fe,
                  {
                    as: "button",
                    textAlign: "left",
                    backgroundColor: y ? "teal.200" : void 0,
                    color: y ? "#333" : void 0,
                    w: "90%",
                    borderRadius: 6,
                    p: 2,
                    mb: 2,
                    onClick: () => {
                      t(p.id);
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
                      /* @__PURE__ */ w.jsx(Li, { fontWeight: "500", children: p.name ?? "untitled" }),
                      /* @__PURE__ */ w.jsxs(Li, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        dT(p.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ w.jsx(YK, { workflow: p }),
                /* @__PURE__ */ w.jsx(Ig, { children: ({ isOpen: g, onClose: S }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
                  /* @__PURE__ */ w.jsx(Mg, { children: /* @__PURE__ */ w.jsx(lT, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ w.jsxs(Dg, { children: [
                    /* @__PURE__ */ w.jsx(Rg, {}),
                    /* @__PURE__ */ w.jsx(Ag, {}),
                    /* @__PURE__ */ w.jsxs($g, { children: [
                      /* @__PURE__ */ w.jsx(Li, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ w.jsx(
                        tr,
                        {
                          colorScheme: "red",
                          size: "sm",
                          onClick: () => {
                            d(p.id), S();
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
const JK = {
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
function eY() {
  v.useState([]);
  const e = v.useRef({}), [t, n] = v.useState(null), [r, o] = v.useState("root"), [i, a] = v.useState(!0), [s, l] = v.useState(null), u = v.useRef(null), { colorMode: c, toggleColorMode: d } = wa(), f = (h) => {
    u.current = h, l(h);
  }, p = async () => {
    var x;
    const h = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(k) {
      },
      async addCustomNodeDefs(k) {
        e.current = k;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Rl.registerExtension(h);
    try {
      await iH();
    } catch (k) {
      console.error("error loading db", k);
    }
    a(!1);
    const b = localStorage.getItem("curFlowID");
    if (b)
      f(b), Pe && n(((x = Pe[b]) == null ? void 0 : x.name) ?? "");
    else {
      const k = localStorage.getItem("workflow"), P = sS(k ?? "");
      f(P.id), n(P.name ?? "");
    }
  };
  v.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify(Rl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && cm(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const y = (h) => {
    u.current != null && cm(u.current, {
      name: h
    });
  }, g = v.useCallback(
    zM(y, 700),
    []
  ), S = (h) => {
    if (Pe == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(h);
    const b = Pe[h];
    if (b == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    Rl.loadGraphData(JSON.parse(b.json)), n(b.name), o("root");
  }, m = () => {
    const h = JK, b = sS(JSON.stringify(h));
    f(b.id), n(b.name), Rl.loadGraphData(h);
  };
  return i ? null : /* @__PURE__ */ w.jsx(fT.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
    Fe,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ w.jsxs(
          Gt,
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
              /* @__PURE__ */ w.jsxs(Gt, { children: [
                /* @__PURE__ */ w.jsx(
                  tr,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ w.jsxs(Gt, { gap: 1, children: [
                      /* @__PURE__ */ w.jsx(BW, { size: 21 }),
                      /* @__PURE__ */ w.jsx(YW, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  tr,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => m(),
                    children: /* @__PURE__ */ w.jsxs(Gt, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ w.jsx(Fg, { size: 16, color: "white" }),
                      /* @__PURE__ */ w.jsx(Li, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Ud,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    onChange: (h) => {
                      n(h.target.value), g(h.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsx(Gt, { children: /* @__PURE__ */ w.jsx(tr, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ w.jsx(UW, { size: 20 }) : /* @__PURE__ */ w.jsx(KW, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ w.jsx(
          ZK,
          {
            onclose: () => o("root"),
            loadWorkflowID: S,
            onClickNewFlow: () => {
              m(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const HT = document.createElement("div");
document.body.append(HT);
const tY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, nY = BL({ config: tY });
$p.createRoot(HT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(aB, { children: [
    /* @__PURE__ */ w.jsx(JI, { initialColorMode: nY.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(eY, {})
  ] }) })
);
const Sm = document.body, rY = { attributes: !0, attributeFilter: ["class"] }, oY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Sm.classList)
        r.includes("chakra") && Sm.classList.remove(r);
}, iY = new MutationObserver(oY);
iY.observe(Sm, rY);
