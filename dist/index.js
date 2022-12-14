var e = require("react");
function t() {
  return (t =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var r = function () {};
function n(e, t) {
  return Math.random() * (t - e + 1) + e;
}
function o(e, t) {
  return Math.floor(n(e, t));
}
var a = e.forwardRef(function (a, i) {
  var c = a.progress,
    s = a.height,
    u = void 0 === s ? 2 : s,
    l = a.className,
    f = void 0 === l ? "" : l,
    d = a.color,
    v = void 0 === d ? "red" : d,
    h = a.background,
    p = void 0 === h ? "transparent" : h,
    m = a.onLoaderFinished,
    b = a.transitionTime,
    g = void 0 === b ? 300 : b,
    y = a.loaderSpeed,
    w = void 0 === y ? 500 : y,
    S = a.waitingTime,
    x = void 0 === S ? 1e3 : S,
    E = a.shadow,
    R = void 0 === E || E,
    k = a.containerStyle,
    I = void 0 === k ? {} : k,
    M = a.style,
    N = void 0 === M ? {} : M,
    T = a.shadowStyle,
    Y = void 0 === T ? {} : T,
    O = a.containerClassName,
    j = void 0 === O ? "" : O,
    P = e.useRef(!1),
    q = e.useState(0),
    z = q[0],
    C = q[1],
    F = e.useRef({ active: !1, refreshRate: 1e3 }),
    H = e.useState(!1),
    L = H[0],
    A = H[1],
    B = e.useState({ active: !1, value: 20 }),
    D = B[0],
    G = B[1],
    J = {
      position: "fixed",
      top: 0,
      left: 0,
      height: u,
      background: p,
      zIndex: 99999999999,
      width: "100%",
    },
    K = {
      boxShadow: "0 0 10px " + v + ", 0 0 10px " + v,
      width: "5%",
      opacity: 1,
      position: "absolute",
      height: "100%",
      transition: "all " + w + "ms ease",
      transform: "rotate(3deg) translate(0px, -4px)",
      left: "-10rem",
    },
    Q = e.useState({
      height: "100%",
      background: v,
      transition: "all " + w + "ms ease",
      width: "0%",
    }),
    U = Q[0],
    V = Q[1],
    W = e.useState(K),
    X = W[0],
    Z = W[1];
  e.useEffect(function () {
    return (
      (P.current = !0),
      function () {
        P.current = !1;
      }
    );
  }, []),
    e.useImperativeHandle(i, function () {
      return {
        continuousStart: function (e, t) {
          if ((void 0 === t && (t = 1e3), !D.active))
            if (L)
              console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              );
            else {
              var r = e || o(10, 20);
              (F.current = { active: !0, refreshRate: t }), C(r), te(r);
            }
        },
        staticStart: function (e) {
          if (!F.current.active)
            if (L)
              console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              );
            else {
              var t = e || o(30, 50);
              G({ active: !0, value: t }), C(t), te(t);
            }
        },
        complete: function () {
          L
            ? console.warn(
                "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
              )
            : (C(100), te(100));
        },
      };
    }),
    e.useEffect(
      function () {
        V(t({}, U, { background: v })),
          Z(t({}, X, { boxShadow: "0 0 10px " + v + ", 0 0 5px " + v }));
      },
      [v]
    ),
    e.useEffect(
      function () {
        if (i) {
          if (i && void 0 !== c)
            return void console.warn(
              'react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.'
            );
          te(z), A(!1);
        } else c && te(c), A(!0);
      },
      [c]
    );
  var $,
    _,
    ee,
    te = function e(r) {
      r >= 100
        ? (V(t({}, U, { width: "100%" })),
          R && Z(t({}, X, { left: r - 10 + "%" })),
          setTimeout(function () {
            P.current &&
              (V(
                t({}, U, {
                  opacity: 0,
                  width: "100%",
                  transition: "all " + g + "ms ease-out",
                  color: v,
                })
              ),
              setTimeout(function () {
                P.current &&
                  (F.current.active &&
                    ((F.current = t({}, F.current, { active: !1 })),
                    C(0),
                    e(0)),
                  D.active && (G(t({}, D, { active: !1 })), C(0), e(0)),
                  m && m(),
                  C(0),
                  e(0));
              }, g));
          }, x))
        : (V(function (e) {
            return t({}, e, {
              width: r + "%",
              opacity: 1,
              transition: r > 0 ? "all " + w + "ms ease" : "",
            });
          }),
          R &&
            Z(
              t({}, X, {
                left: r - 5.5 + "%",
                transition: r > 0 ? "all " + w + "ms ease" : "",
              })
            ));
    };
  return (
    ($ = function () {
      var e = n(Math.min(10, (100 - z) / 5), Math.min(20, (100 - z) / 3));
      z + e < 95 && (C(z + e), te(z + e));
    }),
    (_ = F.current.active ? F.current.refreshRate : null),
    (ee = e.useRef(r)),
    e.useEffect(function () {
      ee.current = $;
    }),
    e.useEffect(function () {}, [void 0]),
    e.useEffect(
      function () {
        if (null !== _ && !1 !== _) {
          var e = setInterval(function () {
            return ee.current();
          }, _);
          return function () {
            return clearInterval(e);
          };
        }
      },
      [_]
    ),
    e.createElement(
      "div",
      { className: j, style: t({}, J, I) },
      e.createElement(
        "div",
        { className: f, style: t({}, U, N) },
        R ? e.createElement("div", { style: t({}, X, Y) }) : null
      )
    )
  );
});
module.exports = a;
//# sourceMappingURL=index.js.map
