import {
  useRef as t,
  useEffect as e,
  forwardRef as o,
  useState as n,
  useImperativeHandle as r,
  createElement as a,
} from "react";
function i() {
  return (i =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var n in o)
          Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
      }
      return t;
    }).apply(this, arguments);
}
var c = function () {};
function l(t, e) {
  return Math.random() * (e - t + 1) + t;
}
function s(t, e) {
  return Math.floor(l(t, e));
}
var u = o(function (o, u) {
  var d = o.progress,
    f = o.height,
    v = void 0 === f ? 2 : f,
    h = o.className,
    p = void 0 === h ? "" : h,
    m = o.color,
    b = void 0 === m ? "red" : m,
    g = o.background,
    y = void 0 === g ? "transparent" : g,
    w = o.onLoaderFinished,
    x = o.transitionTime,
    S = void 0 === x ? 300 : x,
    k = o.loaderSpeed,
    M = void 0 === k ? 500 : k,
    N = o.waitingTime,
    R = void 0 === N ? 1e3 : N,
    T = o.shadow,
    Y = void 0 === T || T,
    I = o.containerStyle,
    O = void 0 === I ? {} : I,
    j = o.style,
    P = void 0 === j ? {} : j,
    z = o.shadowStyle,
    C = void 0 === z ? {} : z,
    F = o.containerClassName,
    L = void 0 === F ? "" : F,
    q = t(!1),
    A = n(0),
    B = A[0],
    D = A[1],
    E = t({ active: !1, refreshRate: 1e3 }),
    G = n(!1),
    H = G[0],
    J = G[1],
    K = n({ active: !1, value: 20 }),
    Q = K[0],
    U = K[1],
    V = {
      position: "fixed",
      top: 0,
      left: 0,
      height: v,
      background: y,
      zIndex: 99999999999,
      width: "100%",
    },
    W = {
      boxShadow: "0 0 10px " + b + ", 0 0 10px " + b,
      width: "5%",
      opacity: 1,
      position: "absolute",
      height: "100%",
      transition: "all " + M + "ms ease",
      transform: "rotate(3deg) translate(0px, -4px)",
      left: "-10rem",
    },
    X = n({
      height: "100%",
      background: b,
      transition: "all " + M + "ms ease",
      width: "0%",
    }),
    Z = X[0],
    $ = X[1],
    _ = n(W),
    tt = _[0],
    et = _[1];
  e(function () {
    return (
      (q.current = !0),
      function () {
        q.current = !1;
      }
    );
  }, []),
    r(u, function () {
      return {
        continuousStart: function (t, e) {
          if ((void 0 === e && (e = 1e3), !Q.active))
            if (H)
              console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              );
            else {
              var o = t || s(10, 20);
              (E.current = { active: !0, refreshRate: e }), D(o), at(o);
            }
        },
        staticStart: function (t) {
          if (!E.current.active)
            if (H)
              console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              );
            else {
              var e = t || s(30, 50);
              U({ active: !0, value: e }), D(e), at(e);
            }
        },
        complete: function () {
          H
            ? console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              )
            : (D(100), at(100));
        },
      };
    }),
    e(
      function () {
        $(i({}, Z, { background: b })),
          et(i({}, tt, { boxShadow: "0 0 10px " + b + ", 0 0 5px " + b }));
      },
      [b]
    ),
    e(
      function () {
        if (u) {
          if (u && void 0 !== d)
            return void console.warn(
              'react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.'
            );
          at(B), J(!1);
        } else d && at(d), J(!0);
      },
      [d]
    );
  var ot,
    nt,
    rt,
    at = function t(e) {
      e >= 100
        ? ($(i({}, Z, { width: "100%" })),
          Y && et(i({}, tt, { left: e - 10 + "%" })),
          setTimeout(function () {
            q.current &&
              ($(
                i({}, Z, {
                  opacity: 0,
                  width: "100%",
                  transition: "all " + S + "ms ease-out",
                  color: b,
                })
              ),
              setTimeout(function () {
                q.current &&
                  (E.current.active &&
                    ((E.current = i({}, E.current, { active: !1 })),
                    D(0),
                    t(0)),
                  Q.active && (U(i({}, Q, { active: !1 })), D(0), t(0)),
                  w && w(),
                  D(0),
                  t(0));
              }, S));
          }, R))
        : ($(function (t) {
            return i({}, t, {
              width: e + "%",
              opacity: 1,
              transition: e > 0 ? "all " + M + "ms ease" : "",
            });
          }),
          Y &&
            et(
              i({}, tt, {
                left: e - 5.5 + "%",
                transition: e > 0 ? "all " + M + "ms ease" : "",
              })
            ));
    };
  return (
    (ot = function () {
      var t = l(Math.min(10, (100 - B) / 5), Math.min(20, (100 - B) / 3));
      B + t < 95 && (D(B + t), at(B + t));
    }),
    (nt = E.current.active ? E.current.refreshRate : null),
    (rt = t(c)),
    e(function () {
      rt.current = ot;
    }),
    e(function () {}, [void 0]),
    e(
      function () {
        if (null !== nt && !1 !== nt) {
          var t = setInterval(function () {
            return rt.current();
          }, nt);
          return function () {
            return clearInterval(t);
          };
        }
      },
      [nt]
    ),
    a(
      "div",
      { className: L, style: i({}, V, O) },
      a(
        "div",
        { className: p, style: i({}, Z, P) },
        Y ? a("div", { style: i({}, tt, C) }) : null
      )
    )
  );
});
export default u;
//# sourceMappingURL=index.modern.js.map
