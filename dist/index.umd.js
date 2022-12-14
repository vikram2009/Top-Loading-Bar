!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : ((e = e || self).reactTopLoadingBar = t(e.react));
})(this, function (e) {
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      }).apply(this, arguments);
  }
  var n = function () {};
  function o(e, t) {
    return Math.random() * (t - e + 1) + e;
  }
  function r(e, t) {
    return Math.floor(o(e, t));
  }
  return e.forwardRef(function (a, i) {
    var c = a.progress,
      s = a.height,
      u = void 0 === s ? 2 : s,
      l = a.className,
      f = void 0 === l ? "" : l,
      d = a.color,
      v = void 0 === d ? "red" : d,
      p = a.background,
      h = void 0 === p ? "transparent" : p,
      m = a.onLoaderFinished,
      b = a.transitionTime,
      g = void 0 === b ? 300 : b,
      y = a.loaderSpeed,
      w = void 0 === y ? 500 : y,
      x = a.waitingTime,
      S = void 0 === x ? 1e3 : x,
      E = a.shadow,
      R = void 0 === E || E,
      T = a.containerStyle,
      k = void 0 === T ? {} : T,
      I = a.style,
      M = void 0 === I ? {} : I,
      N = a.shadowStyle,
      Y = void 0 === N ? {} : N,
      j = a.containerClassName,
      O = void 0 === j ? "" : j,
      L = e.useRef(!1),
      P = e.useState(0),
      q = P[0],
      z = P[1],
      B = e.useRef({ active: !1, refreshRate: 1e3 }),
      C = e.useState(!1),
      F = C[0],
      H = C[1],
      A = e.useState({ active: !1, value: 20 }),
      D = A[0],
      G = A[1],
      J = {
        position: "fixed",
        top: 0,
        left: 0,
        height: u,
        background: h,
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
        (L.current = !0),
        function () {
          L.current = !1;
        }
      );
    }, []),
      e.useImperativeHandle(i, function () {
        return {
          continuousStart: function (e, t) {
            if ((void 0 === t && (t = 1e3), !D.active))
              if (F)
                console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                );
              else {
                var n = e || r(10, 20);
                (B.current = { active: !0, refreshRate: t }), z(n), te(n);
              }
          },
          staticStart: function (e) {
            if (!B.current.active)
              if (F)
                console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                );
              else {
                var t = e || r(30, 50);
                G({ active: !0, value: t }), z(t), te(t);
              }
          },
          complete: function () {
            F
              ? console.warn(
                  "react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"
                )
              : (z(100), te(100));
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
            te(q), H(!1);
          } else c && te(c), H(!0);
        },
        [c]
      );
    var $,
      _,
      ee,
      te = function e(n) {
        n >= 100
          ? (V(t({}, U, { width: "100%" })),
            R && Z(t({}, X, { left: n - 10 + "%" })),
            setTimeout(function () {
              L.current &&
                (V(
                  t({}, U, {
                    opacity: 0,
                    width: "100%",
                    transition: "all " + g + "ms ease-out",
                    color: v,
                  })
                ),
                setTimeout(function () {
                  L.current &&
                    (B.current.active &&
                      ((B.current = t({}, B.current, { active: !1 })),
                      z(0),
                      e(0)),
                    D.active && (G(t({}, D, { active: !1 })), z(0), e(0)),
                    m && m(),
                    z(0),
                    e(0));
                }, g));
            }, S))
          : (V(function (e) {
              return t({}, e, {
                width: n + "%",
                opacity: 1,
                transition: n > 0 ? "all " + w + "ms ease" : "",
              });
            }),
            R &&
              Z(
                t({}, X, {
                  left: n - 5.5 + "%",
                  transition: n > 0 ? "all " + w + "ms ease" : "",
                })
              ));
      };
    return (
      ($ = function () {
        var e = o(Math.min(10, (100 - q) / 5), Math.min(20, (100 - q) / 3));
        q + e < 95 && (z(q + e), te(q + e));
      }),
      (_ = B.current.active ? B.current.refreshRate : null),
      (ee = e.useRef(n)),
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
        { className: O, style: t({}, J, k) },
        e.createElement(
          "div",
          { className: f, style: t({}, U, M) },
          R ? e.createElement("div", { style: t({}, X, Y) }) : null
        )
      )
    );
  });
});
//# sourceMappingURL=index.umd.js.map
