"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1926],
  {
    36453: function (t, e, i) {
      i.d(e, {
        v: function () {
          return h;
        },
      });
      var n = i(40504),
        s = i(39545),
        r = i(64522),
        o = i(13223),
        a = i(15636);
      let l = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (a.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var u = i(93295);
      class h {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: r = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = n.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: r,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, s.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = n.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: s,
            velocity: a,
            delay: h,
            onComplete: c,
            onUpdate: d,
            isGenerator: p,
          } = this.options;
          if (
            !p &&
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                a = l(s, e),
                u = l(r, e);
              return (
                (0, o.K)(
                  a === u,
                  `You are trying to animate ${e} from "${s}" to "${r}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!a &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, s, a)
          ) {
            if (r.c.current || !h) {
              null == d || d((0, u.$)(t, this.options, e)),
                null == c || c(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let m = this.initPlayback(t, e);
          !1 !== m &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...m }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    21792: function (t, e, i) {
      i.d(e, {
        s: function () {
          return ta;
        },
        y: function () {
          return tl;
        },
      });
      var n = i(39545),
        s = i(56717),
        r = i(14438);
      function o(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, r.R)(i - t(n), e - n);
      }
      var a = i(13223),
        l = i(59111);
      function u(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let h = ["duration", "bounce"],
        c = ["stiffness", "damping", "mass"];
      function d(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function p({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let p = t[0],
          m = t[t.length - 1],
          f = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!d(t, c) && d(t, h)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, o;
                (0, a.K)(
                  t <= (0, s.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, l.u)(0.05, 1, h)),
                  (t = (0, l.u)(0.01, 10, (0, s.X)(t))),
                  h < 1
                    ? ((r = (e) => {
                        let n = e * h,
                          s = n * t;
                        return 0.001 - ((n - i) / u(e, h)) * Math.exp(-s);
                      }),
                      (o = (e) => {
                        let n = e * h * t,
                          s = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          o = u(Math.pow(e, 2), h);
                        return (
                          ((n * i + i - s) *
                            Math.exp(-n) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let c = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(r, o, 5 / t);
                if (((t = (0, s.w)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -(0, s.X)(n.velocity || 0) }),
          T = P || 0,
          b = g / (2 * Math.sqrt(v * y)),
          S = m - p,
          A = (0, s.X)(Math.sqrt(v / y)),
          V = 5 > Math.abs(S);
        if ((i || (i = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5), b < 1)) {
          let t = u(A, b);
          r = (e) =>
            m -
            Math.exp(-b * A * e) *
              (((T + b * A * S) / t) * Math.sin(t * e) + S * Math.cos(t * e));
        } else if (1 === b)
          r = (t) => m - Math.exp(-A * t) * (S + (T + A * S) * t);
        else {
          let t = A * Math.sqrt(b * b - 1);
          r = (e) => {
            let i = Math.exp(-b * A * e),
              n = Math.min(t * e, 300);
            return (
              m -
              (i * ((T + b * A * S) * Math.sinh(n) + t * S * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let n = r(t);
            if (w) f.done = t >= x;
            else {
              let a = 0;
              b < 1 && (a = 0 === t ? (0, s.w)(T) : o(r, t, n));
              let l = Math.abs(a) <= i,
                u = Math.abs(m - n) <= e;
              f.done = l && u;
            }
            return (f.value = f.done ? m : n), f;
          },
        };
      }
      function m({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: a,
        min: l,
        max: u,
        restDelta: h = 0.5,
        restSpeed: c,
      }) {
        let d, m;
        let f = t[0],
          v = { done: !1, value: f },
          g = (t) => (void 0 !== l && t < l) || (void 0 !== u && t > u),
          y = (t) =>
            void 0 === l
              ? u
              : void 0 === u
              ? l
              : Math.abs(l - t) < Math.abs(u - t)
              ? l
              : u,
          x = i * e,
          P = f + x,
          w = void 0 === a ? P : a(P);
        w !== P && (x = w - f);
        let T = (t) => -x * Math.exp(-t / n),
          b = (t) => w + T(t),
          S = (t) => {
            let e = T(t),
              i = b(t);
            (v.done = Math.abs(e) <= h), (v.value = v.done ? w : i);
          },
          A = (t) => {
            g(v.value) &&
              ((d = t),
              (m = p({
                keyframes: [v.value, y(v.value)],
                velocity: o(b, t, v.value),
                damping: s,
                stiffness: r,
                restDelta: h,
                restSpeed: c,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== d || ((e = !0), S(t), A(t)),
              void 0 !== d && t >= d)
                ? m.next(t - d)
                : (e || S(t), v);
            },
          }
        );
      }
      var f = i(44439);
      let v = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function g(t, e, i, n) {
        if (t === e && i === n) return f.Z;
        let s = (e) =>
          (function (t, e, i, n, s) {
            let r, o;
            let a = 0;
            do (r = v((o = e + (i - e) / 2), n, s) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : v(s(t), e, n));
      }
      let y = g(0.42, 0, 1, 1),
        x = g(0, 0, 0.58, 1),
        P = g(0.42, 0, 0.58, 1),
        w = (t) => Array.isArray(t) && "number" != typeof t[0];
      var T = i(26378),
        b = i(87457),
        S = i(63627);
      let A = g(0.33, 1.53, 0.69, 0.99),
        V = (0, S.M)(A),
        C = (0, b.o)(V),
        M = {
          linear: f.Z,
          easeIn: y,
          easeInOut: P,
          easeOut: x,
          circIn: T.Z7,
          circInOut: T.X7,
          circOut: T.Bn,
          backIn: V,
          backInOut: C,
          backOut: A,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * V(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        E = (t) => {
          if (Array.isArray(t)) {
            (0, a.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, s] = t;
            return g(e, i, n, s);
          }
          return "string" == typeof t
            ? ((0, a.k)(void 0 !== M[t], `Invalid easing type '${t}'`), M[t])
            : t;
        };
      var R = i(56920),
        D = i(76376),
        k = i(96781);
      function j(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var L = i(87325),
        F = i(18859),
        B = i(92943);
      function W(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let O = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        $ = [L.$, F.m, B.J],
        U = (t) => $.find((e) => e.test(t));
      function I(t) {
        let e = U(t);
        if (
          ((0, a.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === B.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let s = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (s = j(a, n, t + 1 / 3)),
                  (r = j(a, n, t)),
                  (o = j(a, n, t - 1 / 3));
              } else s = r = o = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let N = (t, e) => {
        let i = I(t),
          n = I(e);
        if (!i || !n) return W(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = O(i.red, n.red, t)),
          (s.green = O(i.green, n.green, t)),
          (s.blue = O(i.blue, n.blue, t)),
          (s.alpha = (0, k.t)(i.alpha, n.alpha, t)),
          F.m.transform(s)
        );
      };
      var X = i(33964),
        z = i(15636),
        H = i(37249);
      let Y = new Set(["none", "hidden"]);
      function K(t, e) {
        return (i) => (0, k.t)(t, e, i);
      }
      function Z(t) {
        return "number" == typeof t
          ? K
          : "string" == typeof t
          ? (0, H.t)(t)
            ? W
            : X.$.test(t)
            ? N
            : _
          : Array.isArray(t)
          ? G
          : "object" == typeof t
          ? X.$.test(t)
            ? N
            : q
          : W;
      }
      function G(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => Z(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function q(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = Z(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let _ = (t, e) => {
        let i = z.P.createTransformer(e),
          n = (0, z.V)(t),
          s = (0, z.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (Y.has(t) && !s.values.length) || (Y.has(e) && !n.values.length)
            ? Y.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, R.z)(
                G(
                  (function (t, e) {
                    var i;
                    let n = [],
                      s = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][s[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[r] = l), s[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, a.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            W(t, e));
      };
      function J(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, k.t)(t, e, i)
          : Z(t)(t, e);
      }
      function Q({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let s = w(n) ? n.map(E) : E(n),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
            let r = t.length;
            if (
              ((0, a.k)(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  s = i || J,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = s(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || f.Z : e;
                    r = (0, R.z)(t, r);
                  }
                  n.push(r);
                }
                return n;
              })(e, n, s),
              u = o.length,
              h = (e) => {
                let i = 0;
                if (u > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, D.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => h((0, l.u)(t[0], t[r - 1], e)) : h;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let s = (0, D.Y)(0, e, n);
                        t.push((0, k.t)(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || P).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      var tt = i(36453),
        te = i(40504),
        ti = i(45414);
      let tn = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => ti.Wi.update(e, !0),
          stop: () => (0, ti.Pn)(e),
          now: () =>
            ti.frameData.isProcessing ? ti.frameData.timestamp : te.X.now(),
        };
      };
      var ts = i(93295);
      let tr = { decay: m, inertia: m, tween: Q, keyframes: Q, spring: p },
        to = (t) => t / 100;
      class ta extends tt.v {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: r,
            } = this.options,
            o = (null == s ? void 0 : s.KeyframeResolver) || n.e;
          (this.resolver = new o(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: s = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = tr[n] || Q;
          l !== Q &&
            "number" != typeof t[0] &&
            ((e = (0, R.z)(to, J(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + r;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (s + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: s,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: c,
          } = i;
          if (null === this.startTime) return s.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: m,
            repeatDelay: f,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let x = this.currentTime,
            P = s;
          if (p) {
            let t = Math.min(this.currentTime, h) / c,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === m
                  ? ((i = 1 - i), f && (i -= f / c))
                  : "mirror" === m && (P = r)),
              (x = (0, l.u)(0, 1, i) * c);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y ||
            null === u ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== n && (w.value = (0, ts.$)(a, this.options, n)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, s.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, s.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, s.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, s.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tn, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function tl(t) {
        return new ta(t);
      }
    },
    93295: function (t, e, i) {
      i.d(e, {
        $: function () {
          return s;
        },
      });
      let n = (t) => null !== t;
      function s(t, { repeat: e, repeatType: i = "loop" }, s) {
        let r = t.filter(n),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== s ? s : r[o];
      }
    },
    58881: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    45750: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    64252: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    26378: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return r;
        },
      });
      var n = i(87457),
        s = i(63627);
      let r = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, s.M)(r),
        a = (0, n.o)(r);
    },
    87457: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    63627: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    85005: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(24118);
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function r(t, e) {
        let i = !1,
          r = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  s = !1,
                  r = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, s = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return s && r.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), r.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      s = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      s && ((s = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let s = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(s - o.timestamp, 40), 1)),
              (o.timestamp = s),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((r = !1), t(f));
          },
          v = () => {
            (i = !0), (r = !0), o.isProcessing || t(f);
          };
        return {
          schedule: s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, s = !1) => (i || v(), n.schedule(t, e, s))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) l[s[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    45414: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return r;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(44439);
      let {
        schedule: s,
        cancel: r,
        state: o,
        steps: a,
      } = (0, i(85005).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    40504: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var s = i(24118),
        r = i(45414);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              r.frameData.isProcessing || s.c.useManualTiming
                ? r.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    91926: function (t, e, i) {
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return nU;
        },
      });
      let s = (t) => Array.isArray(t);
      function r(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function o(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, r] = a(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, r] = a(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        return e;
      }
      function u(t, e, i) {
        let n = t.getProps();
        return l(n, e, void 0 !== i ? i : n.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...h];
      var d,
        p,
        m,
        f = i(8834),
        v = i(56717);
      let g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        P = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : f.G.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : g
            : P;
      function T(t, e) {
        return t[e] || t.default || t;
      }
      var b = i(24118),
        S = i(64522),
        A = i(93295),
        V = i(45414);
      let C = (t) => /^0[^.\s]+$/u.test(t);
      var M = i(13223);
      let E = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var R = i(37249);
      let D = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var k = i(90401),
        j = i(74305),
        L = i(27492);
      let F = (t) => (e) => e.test(t),
        B = [
          j.Rx,
          L.px,
          L.aQ,
          L.RW,
          L.vw,
          L.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        W = (t) => B.find(F(t));
      var O = i(39545),
        $ = i(15636),
        U = i(50796);
      let I = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function N(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(U.KP) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = I.has(e) ? 1 : 0;
        return n !== i && (r *= 100), e + "(" + r + s + ")";
      }
      let X = /\b([a-z-]*)\(.*?\)/gu,
        z = {
          ...$.P,
          getAnimatableNone: (t) => {
            let e = t.match(X);
            return e ? e.map(N).join(" ") : t;
          },
        };
      var H = i(33964);
      let Y = { ...j.Rx, transform: Math.round },
        K = {
          borderWidth: L.px,
          borderTopWidth: L.px,
          borderRightWidth: L.px,
          borderBottomWidth: L.px,
          borderLeftWidth: L.px,
          borderRadius: L.px,
          radius: L.px,
          borderTopLeftRadius: L.px,
          borderTopRightRadius: L.px,
          borderBottomRightRadius: L.px,
          borderBottomLeftRadius: L.px,
          width: L.px,
          maxWidth: L.px,
          height: L.px,
          maxHeight: L.px,
          size: L.px,
          top: L.px,
          right: L.px,
          bottom: L.px,
          left: L.px,
          padding: L.px,
          paddingTop: L.px,
          paddingRight: L.px,
          paddingBottom: L.px,
          paddingLeft: L.px,
          margin: L.px,
          marginTop: L.px,
          marginRight: L.px,
          marginBottom: L.px,
          marginLeft: L.px,
          rotate: L.RW,
          rotateX: L.RW,
          rotateY: L.RW,
          rotateZ: L.RW,
          scale: j.bA,
          scaleX: j.bA,
          scaleY: j.bA,
          scaleZ: j.bA,
          skew: L.RW,
          skewX: L.RW,
          skewY: L.RW,
          distance: L.px,
          translateX: L.px,
          translateY: L.px,
          translateZ: L.px,
          x: L.px,
          y: L.px,
          z: L.px,
          perspective: L.px,
          transformPerspective: L.px,
          opacity: j.Fq,
          originX: L.$C,
          originY: L.$C,
          originZ: L.px,
          zIndex: Y,
          backgroundPositionX: L.px,
          backgroundPositionY: L.px,
          fillOpacity: j.Fq,
          strokeOpacity: j.Fq,
          numOctaves: Y,
        },
        Z = {
          ...K,
          color: H.$,
          backgroundColor: H.$,
          outlineColor: H.$,
          fill: H.$,
          stroke: H.$,
          borderColor: H.$,
          borderTopColor: H.$,
          borderRightColor: H.$,
          borderBottomColor: H.$,
          borderLeftColor: H.$,
          filter: z,
          WebkitFilter: z,
        },
        G = (t) => Z[t];
      function q(t, e) {
        let i = G(t);
        return (
          i !== z && (i = $.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let _ = new Set(["auto", "none", "0"]);
      class J extends O.e {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, R.t)(n))) {
              let s = (function t(e, i, n = 1) {
                (0, M.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [s, r] = (function (t) {
                  let e = D.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${null != i ? i : n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return E(t) ? parseFloat(t) : t;
                }
                return (0, R.t)(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !k.z2.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            r = W(n),
            o = W(s);
          if (r !== o) {
            if ((0, k.mP)(r) && (0, k.mP)(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || C(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n; ) {
                let e = t[s];
                "string" == typeof e &&
                  !_.has(e) &&
                  (0, $.V)(e).values.length &&
                  (n = t[s]),
                  s++;
              }
              if (n && i) for (let s of e) t[s] = q(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = k.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let s = e.getValue(i);
          s && s.jump(this.measuredOrigin, !1);
          let r = n.length - 1,
            o = n[r];
          (n[r] = k.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function Q(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var tt = i(44439),
        te = i(36453),
        ti = i(21792);
      let tn = new Set(["opacity", "clipPath", "filter", "transform"]),
        ts = (t) => Array.isArray(t) && "number" == typeof t[0],
        tr = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        to = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tr([0, 0.65, 0.55, 1]),
          circOut: tr([0.55, 0, 1, 0.45]),
          backIn: tr([0.31, 0.01, 0.66, -0.59]),
          backOut: tr([0.33, 1.53, 0.69, 0.99]),
        };
      function ta(t) {
        return tl(t) || to.easeOut;
      }
      function tl(t) {
        if (t) return ts(t) ? tr(t) : Array.isArray(t) ? t.map(ta) : to[t];
      }
      let tu = Q(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class th extends te.v {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: s,
          } = this.options;
          (this.resolver = new J(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: s = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in to) ||
                ts(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new ti.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  s = [],
                  r = 0;
                for (; !n.done && r < 2e4; )
                  s.push((n = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: s,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (s = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tl(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: s,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: s,
            times: r,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, A.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: s,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, v.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, v.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, v.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tt.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tt.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: s,
            ease: r,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new ti.s({
                ...u,
                keyframes: i,
                duration: n,
                type: s,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              c = (0, v.w)(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: s,
            damping: r,
            type: o,
          } = t;
          return (
            tu() &&
            i &&
            tn.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== s &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let tc = Q(() => void 0 !== window.ScrollTimeline);
      class td {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!tc() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      s = (null === n ? 0 : n.value) / 100;
                    i !== s && t(s), (i = s);
                  };
                  return V.Wi.update(n, !0), () => (0, V.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tp =
          (t, e, i, n = {}, s, r, o) =>
          (a) => {
            let l = T(n, t) || {},
              u = l.delay || n.delay || 0,
              { elapsed: h = 0 } = n;
            h -= (0, v.w)(u);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                a(), l.onComplete && l.onComplete(), o && o();
              },
              onStop: o,
              name: t,
              motionValue: e,
              element: r ? void 0 : s,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: s,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && (c = { ...c, ...w(t, c) }),
              c.duration && (c.duration = (0, v.w)(c.duration)),
              c.repeatDelay && (c.repeatDelay = (0, v.w)(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (d = !0)),
              (S.c.current || b.c.skipAnimations) &&
                ((d = !0), (c.duration = 0), (c.delay = 0)),
              d && !r && void 0 !== e.get())
            ) {
              let t = (0, A.$)(c.keyframes, l);
              if (void 0 !== t)
                return (
                  V.Wi.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new td([])
                );
            }
            return !r && th.supports(c) ? new th(c) : new ti.s(c);
          },
        tm = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tf = (t) => (s(t) ? t[t.length - 1] || 0 : t);
      var tv = i(3078);
      let tg = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        ty = "data-" + tg("framerAppearId");
      function tx(t) {
        return f.G.has(t) ? "transform" : tn.has(t) ? tg(t) : void 0;
      }
      var tP = i(69013);
      class tw extends tv.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = tx(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, tP.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var tT = i(23999);
      function tb(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let s = t.getValue("willChange");
        if (
          (s ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((s = new tw("auto")), t.addValue("willChange", s)),
          (n = s),
          (0, tT.i)(n) && n.add)
        )
          return s.add(e);
      }
      function tS(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        var r;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let h = [],
          c = s && t.animationState && t.animationState.getState()[s];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            s = l[e];
          if (
            void 0 === s ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let a = { delay: i, ...T(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[ty];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, V.Wi);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          n.start(
            tp(
              e,
              n,
              s,
              t.shouldReduceMotion && f.G.has(e) ? { type: !1 } : a,
              t,
              u,
              tb(t, e)
            )
          );
          let d = n.animation;
          d && h.push(d);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              V.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...s
                    } = u(t, e) || {};
                    for (let e in (s = { ...s, ...i })) {
                      let i = tf(s[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, tv.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function tA(t, e, i = {}) {
        var n;
        let s = u(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = s ? () => Promise.all(tS(t, s, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, s = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === s ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tV)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tA(t, e, { ...r, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function tV(t, e) {
        return t.sortNodePosition(e);
      }
      let tC = c.length,
        tM = [...h].reverse(),
        tE = h.length;
      function tR(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function tD() {
        return {
          animate: tR(!0),
          whileInView: tR(),
          whileHover: tR(),
          whileTap: tR(),
          whileDrag: tR(),
          whileFocus: tR(),
          exit: tR(),
        };
      }
      class tk {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class tj extends tk {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => tA(t, e, i)));
                          else if ("string" == typeof e) n = tA(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(tS(t, s, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = tD(),
                  a = !0,
                  l = (e) => (i, n) => {
                    var s;
                    let r = u(
                      t,
                      n,
                      "exit" === e
                        ? null === (s = t.presenceContext) || void 0 === s
                          ? void 0
                          : s.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...n } = r;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < tC; t++) {
                          let n = c[t],
                            s = e.props[n];
                          (o(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    v = 1 / 0;
                  for (let e = 0; e < tE; e++) {
                    var g;
                    let c = tM[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      P = o(x),
                      w = c === u ? y.isActive : null;
                    !1 === w && (v = e);
                    let T = x === d[c] && x !== h[c] && P;
                    if (
                      (T && a && t.manuallyAnimateOnMount && (T = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let b =
                        ((g = y.prevProp),
                        "string" == typeof x
                          ? x !== g
                          : !!Array.isArray(x) && !r(x, g)),
                      S =
                        b || (c === u && y.isActive && !T && P) || (e > v && P),
                      A = !1,
                      V = Array.isArray(x) ? x : [x],
                      C = V.reduce(l(c), {});
                    !1 === w && (C = {});
                    let { prevResolvedValues: M = {} } = y,
                      E = { ...M, ...C },
                      R = (e) => {
                        (S = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = C[t],
                        i = M[t];
                      if (!f.hasOwnProperty(t))
                        (s(e) && s(i) ? r(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? R(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = C),
                      y.isActive && (f = { ...f, ...C }),
                      a && t.blockInitialAnimation && (S = !1);
                    let D = !(T && b) || A;
                    S &&
                      D &&
                      p.push(
                        ...V.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      s && (s.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    a &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, n) {
                    var s;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let r = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = tD()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let tL = 0;
      class tF extends tk {
        constructor() {
          super(...arguments), (this.id = tL++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let tB = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tW(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tO = (t) => (e) => tB(e) && t(e, tW(e));
      function t$(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function tU(t, e, i, n) {
        return t$(t, e, tO(i), n);
      }
      var tI = i(56920);
      let tN = (t, e) => Math.abs(t - e);
      class tX {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: s = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = tY(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tN(t.x, e.x) ** 2 + tN(t.y, e.y) ** 2) >= 3);
              if (!n && !s) return;
              let { point: r } = i,
                { timestamp: o } = V.frameData;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tz(e, this.transformPagePoint)),
                V.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = tY(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : tz(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !tB(t))
          )
            return;
          (this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let r = tz(tW(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = V.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tY(r, this.history)),
            (this.removeListeners = (0, tI.z)(
              tU(this.contextWindow, "pointermove", this.handlePointerMove),
              tU(this.contextWindow, "pointerup", this.handlePointerUp),
              tU(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, V.Pn)(this.updatePoint);
        }
      }
      function tz(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tH(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tY({ point: t }, e) {
        return {
          point: t,
          delta: tH(t, tK(e)),
          offset: tH(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              s = tK(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(s.timestamp - n.timestamp > (0, v.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let r = (0, v.X)(s.timestamp - n.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tK(t) {
        return t[t.length - 1];
      }
      function tZ(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tG = tZ("dragHorizontal"),
        tq = tZ("dragVertical");
      function t_(t) {
        let e = !1;
        if ("y" === t) e = tq();
        else if ("x" === t) e = tG();
        else {
          let t = tG(),
            i = tq();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tJ() {
        let t = t_(!0);
        return !t || (t(), !1);
      }
      function tQ(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var t0 = i(76376),
        t1 = i(96781);
      function t5(t) {
        return t.max - t.min;
      }
      function t2(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, t1.t)(e.min, e.max, t.origin)),
          (t.scale = t5(i) / t5(e)),
          (t.translate = (0, t1.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function t3(t, e, i, n) {
        t2(t.x, e.x, i.x, n ? n.originX : void 0),
          t2(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function t4(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + t5(e));
      }
      function t9(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + t5(e));
      }
      function t6(t, e, i) {
        t9(t.x, e.x, i.x), t9(t.y, e.y, i.y);
      }
      var t7 = i(59111);
      function t8(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function et(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function ee(t, e, i) {
        return { min: ei(t, e), max: ei(t, i) };
      }
      function ei(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let en = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        es = () => ({ x: en(), y: en() }),
        er = () => ({ min: 0, max: 0 }),
        eo = () => ({ x: er(), y: er() });
      function ea(t) {
        return [t("x"), t("y")];
      }
      function el({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function eu(t) {
        return void 0 === t || 1 === t;
      }
      function eh({ scale: t, scaleX: e, scaleY: i }) {
        return !eu(t) || !eu(e) || !eu(i);
      }
      function ec(t) {
        return (
          eh(t) ||
          ed(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ed(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function ep(t, e, i, n, s) {
        return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e;
      }
      function em(t, e = 0, i = 1, n, s) {
        (t.min = ep(t.min, e, i, n, s)), (t.max = ep(t.max, e, i, n, s));
      }
      function ef(t, { x: e, y: i }) {
        em(t.x, e.translate, e.scale, e.originPoint),
          em(t.y, i.translate, i.scale, i.originPoint);
      }
      function ev(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eg(t, e, i, n, s = 0.5) {
        let r = (0, t1.t)(t.min, t.max, s);
        em(t, e, i, r, n);
      }
      function ey(t, e) {
        eg(t.x, e.x, e.scaleX, e.scale, e.originX),
          eg(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function ex(t, e) {
        return el(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let eP = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ew = new WeakMap();
      class eT {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eo()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new tX(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tW(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: s,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = t_(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  ea((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (L.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = t5(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && V.Wi.postRender(() => r(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = tb(this.visualElement, "transform"));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: s,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      s &&
                      s(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                ea((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: eP(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: r } = this.getProps();
          r && V.Wi.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !eb(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, t1.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, t1.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            s = this.constraints;
          e && tQ(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: s }
              ) {
                return { x: t8(t.x, i, s), y: t8(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ee(t, "left", "right"), y: ee(t, "top", "bottom") }
              );
            })(i)),
            s !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              ea((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !tQ(e)) return !1;
          let n = e.current;
          (0, M.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let r = (function (t, e, i) {
              let n = ex(t, i),
                { scroll: s } = e;
              return s && (ev(n.x, s.offset.x), ev(n.y, s.offset.y)), n;
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            o = { x: et((t = s.layout.layoutBox).x, r.x), y: et(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = el(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            ea((o) => {
              if (!eb(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            tp(t, i, 0, e, this.visualElement, !1, tb(this.visualElement, t))
          );
        }
        stopAnimation() {
          ea((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          ea((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          ea((e) => {
            let { drag: i } = this.getProps();
            if (!eb(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              s = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: r } = n.layout.layoutBox[e];
              s.set(t[e] - (0, t1.t)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!tQ(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          ea((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = t5(t),
                  s = t5(e);
                return (
                  s > n
                    ? (i = (0, t0.Y)(e.min, e.max - n, t.min))
                    : n > s && (i = (0, t0.Y)(t.min, t.max - s, e.min)),
                  (0, t7.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            ea((e) => {
              if (!eb(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: s, max: r } = this.constraints[e];
              i.set((0, t1.t)(s, r, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ew.set(this.visualElement, this);
          let t = tU(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              tQ(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            V.Wi.read(e);
          let s = t$(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (ea((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), t(), n(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function eb(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class eS extends tk {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tt.Z),
            (this.removeListeners = tt.Z),
            (this.controls = new eT(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tt.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let eA = (t) => (e, i) => {
        t && V.Wi.postRender(() => t(e, i));
      };
      class eV extends tk {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tt.Z);
        }
        onPointerDown(t) {
          this.session = new tX(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eP(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: eA(t),
            onStart: eA(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && V.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tU(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var eC = i(57437),
        eM = i(2265),
        eE = i(64252),
        eR = i(58881);
      let eD = (0, eM.createContext)({}),
        ek = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ej(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eL = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!L.px.test(t)) return t;
              t = parseFloat(t);
            }
            let i = ej(t, e.target.x),
              n = ej(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        eF = {},
        { schedule: eB, cancel: eW } = (0, i(85005).Z)(queueMicrotask, !1);
      class eO extends eM.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = t;
          Object.assign(eF, eU),
            s &&
              (e.group && e.group.add(s),
              i && i.register && n && i.register(s),
              s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ek.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = s),
              n || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === s ||
                (s
                  ? r.promote()
                  : r.relegate() ||
                    V.Wi.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            eB.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function e$(t) {
        let [e, i] = (function () {
            let t = (0, eM.useContext)(eE.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, eM.useId)();
            (0, eM.useEffect)(() => n(s), []);
            let r = (0, eM.useCallback)(() => i && i(s), [s, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          n = (0, eM.useContext)(eR.p);
        return (0, eC.jsx)(eO, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, eM.useContext)(eD),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let eU = {
        borderRadius: {
          ...eL,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eL,
        borderTopRightRadius: eL,
        borderBottomLeftRadius: eL,
        borderBottomRightRadius: eL,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = $.P.parse(t);
            if (n.length > 5) return t;
            let s = $.P.createTransformer(t),
              r = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + r] /= o), (n[1 + r] /= a);
            let l = (0, t1.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + r] && (n[2 + r] /= l),
              "number" == typeof n[3 + r] && (n[3 + r] /= l),
              s(n)
            );
          },
        },
      };
      var eI = i(34081),
        eN = i(26378);
      let eX = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ez = eX.length,
        eH = (t) => ("string" == typeof t ? parseFloat(t) : t),
        eY = (t) => "number" == typeof t || L.px.test(t);
      function eK(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eZ = eq(0, 0.5, eN.Bn),
        eG = eq(0.5, 0.95, tt.Z);
      function eq(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, t0.Y)(t, e, n)));
      }
      function e_(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function eJ(t, e) {
        e_(t.x, e.x), e_(t.y, e.y);
      }
      function eQ(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function e0(t, e, i, n, s) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== s && (t = n + (1 / s) * (t - n)),
          t
        );
      }
      function e1(t, e, [i, n, s], r, o) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
          if (
            (L.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, t1.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, t1.t)(r.min, r.max, n);
          t === r && (a -= e),
            (t.min = e0(t.min, e, i, a, s)),
            (t.max = e0(t.max, e, i, a, s));
        })(t, e[i], e[n], e[s], e.scale, r, o);
      }
      let e5 = ["x", "scaleX", "originX"],
        e2 = ["y", "scaleY", "originY"];
      function e3(t, e, i, n) {
        e1(t.x, e, e5, i ? i.x : void 0, n ? n.x : void 0),
          e1(t.y, e, e2, i ? i.y : void 0, n ? n.y : void 0);
      }
      function e4(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function e9(t) {
        return e4(t.x) && e4(t.y);
      }
      function e6(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function e7(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function e8(t, e) {
        return e7(t.x, e.x) && e7(t.y, e.y);
      }
      function it(t) {
        return t5(t.x) / t5(t.y);
      }
      function ie(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class ii {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tP.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tP.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let is = (t, e) => t.depth - e.depth;
      class ir {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tP.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tP.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(is),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function io(t) {
        let e = (0, tT.i)(t) ? t.get() : t;
        return tm(e) ? e.toValue() : e;
      }
      var ia = i(40504);
      let il = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        iu = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ih = ["", "X", "Y", "Z"],
        ic = { visibility: "hidden" },
        id = 0;
      function ip(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function im({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = id++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  iu &&
                    (il.totalNodes =
                      il.resolvedTargetDeltas =
                      il.recalculatedProjection =
                        0),
                  this.nodes.forEach(iy),
                  this.nodes.forEach(iA),
                  this.nodes.forEach(iV),
                  this.nodes.forEach(ix),
                  iu && window.MotionDebug.record(il);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ir());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eI.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: s, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (s || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = ia.X.now(),
                      n = ({ timestamp: e }) => {
                        let s = e - i;
                        s >= 250 && ((0, V.Pn)(n), t(s - 250));
                      };
                    return V.Wi.read(n, !0), () => (0, V.Pn)(n);
                  })(n, 0)),
                  ek.hasAnimatedSinceResize &&
                    ((ek.hasAnimatedSinceResize = !1), this.nodes.forEach(iS));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                r &&
                (n || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        ik,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !e8(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...T(s, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || iS(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, V.Pn)(this.updateProjection);
          }
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
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(iC),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[ty];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      V.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iw);
              return;
            }
            this.isUpdating || this.nodes.forEach(iT),
              (this.isUpdating = !1),
              this.nodes.forEach(ib),
              this.nodes.forEach(iv),
              this.nodes.forEach(ig),
              this.clearAllSnapshots();
            let t = ia.X.now();
            (V.frameData.delta = (0, t7.u)(
              0,
              1e3 / 60,
              t - V.frameData.timestamp
            )),
              (V.frameData.timestamp = t),
              (V.frameData.isProcessing = !0),
              V.S6.update.process(V.frameData),
              V.S6.preRender.process(V.frameData),
              V.S6.render.process(V.frameData),
              (V.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), eB.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(iP), this.sharedNodes.forEach(iM);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              V.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            V.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eo()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !e9(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              (e || ec(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              iF((e = n).x),
              iF(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return eo();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(iW)
              )
            ) {
              let { scroll: t } = this.root;
              t && (ev(i.x, t.offset.x), ev(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = eo();
            if (
              (eJ(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && eJ(i, t),
                ev(i.x, s.offset.x),
                ev(i.y, s.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = eo();
            eJ(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ey(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ec(n.latestValues) && ey(i, n.latestValues);
            }
            return ec(this.latestValues) && ey(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = eo();
            eJ(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ec(i.latestValues)) continue;
              eh(i.latestValues) && i.updateSnapshot();
              let n = eo();
              eJ(n, i.measurePageBox()),
                e3(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return ec(this.latestValues) && e3(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                V.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, s;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = V.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eo()),
                    (this.relativeTargetOrigin = eo()),
                    t6(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    eJ(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eo()), (this.targetWithTransforms = eo())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (s = this.relativeParent.target),
                      t4(i.x, n.x, s.x),
                      t4(i.y, n.y, s.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : eJ(this.target, this.layout.layoutBox),
                      ef(this.target, this.targetDelta))
                    : eJ(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eo()),
                      (this.relativeTargetOrigin = eo()),
                      t6(this.relativeTargetOrigin, this.target, t.target),
                      eJ(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                iu && il.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              eh(this.parent.latestValues) ||
              ed(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === V.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: s, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || r))
            )
              return;
            eJ(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let s, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      ey(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), ef(t, r)),
                    n && ec(s.latestValues) && ey(t, s.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = eo()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (eQ(this.prevProjectionDelta.x, this.projectionDelta.x),
                eQ(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              t3(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                ie(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ie(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              iu && il.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = es()),
              (this.projectionDelta = es()),
              (this.projectionDeltaWithTransform = es());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              s = n ? n.latestValues : {},
              r = { ...this.latestValues },
              o = es();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eo(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(iD)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (iE(o.x, t.x, n),
                  iE(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m;
                  t6(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    iR(p.x, m.x, a.x, n),
                    iR(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      e6(u.x, d.x) && e6(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = eo()),
                    eJ(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, n, s, r) {
                    s
                      ? ((t.opacity = (0, t1.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          eZ(n)
                        )),
                        (t.opacityExit = (0, t1.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eG(n)
                        )))
                      : r &&
                        (t.opacity = (0, t1.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let s = 0; s < ez; s++) {
                      let r = `border${eX[s]}Radius`,
                        o = eK(e, r),
                        a = eK(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || eY(o) === eY(a)
                          ? ((t[r] = Math.max((0, t1.t)(eH(o), eH(a), n), 0)),
                            (L.aQ.test(a) || L.aQ.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, t1.t)(e.rotate || 0, i.rotate || 0, n));
                  })(r, s, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, V.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = V.Wi.update(() => {
                (ek.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, tT.i)(0) ? 0 : (0, tv.BX)(0);
                    return n.start(tp("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: s,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                iB(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || eo();
                let e = t5(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = t5(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              eJ(e, i),
                ey(e, s),
                t3(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new ii()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ip("z", t, n, this.animationValues);
            for (let e = 0; e < ih.length; e++)
              ip(`rotate${ih[e]}`, t, n, this.animationValues),
                ip(`skew${ih[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ic;
            let n = { visibility: "" },
              s = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  io(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = s ? s(this.latestValues, "") : "none"),
                n
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    io(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ec(this.latestValues) &&
                  ((e.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  s = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((s || r || o) &&
                    (n = `translate3d(${s}px, ${r}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: s,
                    rotateY: r,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    s && (n += `rotateX(${s}deg) `),
                    r && (n += `rotateY(${r}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              s && (n.transform = s(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (n.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            eF)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = eF[t],
                s = "none" === n.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = s;
              } else n[t] = s;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  r === this
                    ? io(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(iw),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iv(t) {
        t.updateLayout();
      }
      function ig(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = i.source !== t.layout.source;
          "size" === s
            ? ea((t) => {
                let n = r ? i.measuredBox[t] : i.layoutBox[t],
                  s = t5(n);
                (n.min = e[t].min), (n.max = n.min + s);
              })
            : iB(s, i.layoutBox, e) &&
              ea((n) => {
                let s = r ? i.measuredBox[n] : i.layoutBox[n],
                  o = t5(e[n]);
                (s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = es();
          t3(o, e, i.layoutBox);
          let a = es();
          r
            ? t3(a, t.applyTransform(n, !0), i.measuredBox)
            : t3(a, e, i.layoutBox);
          let l = !e9(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = eo();
                t6(o, i.layoutBox, s.layoutBox);
                let a = eo();
                t6(a, e, r.layoutBox),
                  e8(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function iy(t) {
        iu && il.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ix(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function iP(t) {
        t.clearSnapshot();
      }
      function iw(t) {
        t.clearMeasurements();
      }
      function iT(t) {
        t.isLayoutDirty = !1;
      }
      function ib(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function iS(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function iA(t) {
        t.resolveTargetDelta();
      }
      function iV(t) {
        t.calcProjection();
      }
      function iC(t) {
        t.resetSkewAndRotation();
      }
      function iM(t) {
        t.removeLeadSnapshot();
      }
      function iE(t, e, i) {
        (t.translate = (0, t1.t)(e.translate, 0, i)),
          (t.scale = (0, t1.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iR(t, e, i, n) {
        (t.min = (0, t1.t)(e.min, i.min, n)),
          (t.max = (0, t1.t)(e.max, i.max, n));
      }
      function iD(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ik = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ij = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        iL = ij("applewebkit/") && !ij("chrome/") ? Math.round : tt.Z;
      function iF(t) {
        (t.min = iL(t.min)), (t.max = iL(t.max));
      }
      function iB(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(it(e) - it(i))))
        );
      }
      function iW(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let iO = im({
          attachResizeListener: (t, e) => t$(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        i$ = { current: void 0 },
        iU = im({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!i$.current) {
              let t = new iO({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (i$.current = t);
            }
            return i$.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function iI(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tU(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, s) => {
            if ("touch" === n.pointerType || tJ()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = r[i];
            o && V.Wi.postRender(() => o(n, s));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class iN extends tk {
        mount() {
          this.unmount = (0, tI.z)(iI(this.node, !0), iI(this.node, !1));
        }
        unmount() {}
      }
      class iX extends tk {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tI.z)(
            t$(this.node.current, "focus", () => this.onFocus()),
            t$(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let iz = (t, e) => !!e && (t === e || iz(t, e.parentElement));
      function iH(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tW(i));
      }
      class iY extends tk {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tt.Z),
            (this.removeEndListeners = tt.Z),
            (this.removeAccessibleListeners = tt.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tU(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: s,
                      } = this.node.getProps(),
                      r = s || iz(this.node.current, t.target) ? i : n;
                    r && V.Wi.update(() => r(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                s = tU(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tI.z)(n, s)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = t$(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = t$(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          iH("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && V.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    iH("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = t$(this.node.current, "blur", () => {
                  this.isPressing &&
                    iH("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tI.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && V.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tJ()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && V.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tU(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = t$(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tI.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let iK = new WeakMap(),
        iZ = new WeakMap(),
        iG = (t) => {
          let e = iK.get(t.target);
          e && e(t);
        },
        iq = (t) => {
          t.forEach(iG);
        },
        i_ = { some: 0, all: 1 };
      class iJ extends tk {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: s } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : i_[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              iZ.has(i) || iZ.set(i, {});
              let n = iZ.get(i),
                s = JSON.stringify(e);
              return (
                n[s] ||
                  (n[s] = new IntersectionObserver(iq, { root: t, ...e })),
                n[s]
              );
            })(e);
            return (
              iK.set(t, i),
              n.observe(t),
              () => {
                iK.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), s && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              r = e ? i : n;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var iQ = i(45750);
      let i0 = (0, eM.createContext)({});
      var i1 = i(11534);
      let i5 = (0, eM.createContext)({ strict: !1 }),
        i2 = !1;
      function i3() {
        window.MotionHandoffIsComplete = !0;
      }
      function i4(t) {
        return n(t.animate) || c.some((e) => o(t[e]));
      }
      function i9(t) {
        return !!(i4(t) || t.variants);
      }
      function i6(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let i7 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        i8 = {};
      for (let t in i7) i8[t] = { isEnabled: (e) => i7[t].some((t) => !!e[t]) };
      var nt = i(44563);
      let ne = Symbol.for("motionComponentSymbol"),
        ni = [
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
          "view",
        ];
      function nn(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ni.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function ns(t, { style: e, vars: i }, n, s) {
        for (let r in (Object.assign(t.style, e, s && s.getProjectionStyles(n)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let nr = new Set([
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
        "lengthAdjust",
      ]);
      function no(t, e, i, n) {
        for (let i in (ns(t, e, void 0, n), e.attrs))
          t.setAttribute(nr.has(i) ? i : tg(i), e.attrs[i]);
      }
      function na(t, { layout: e, layoutId: i }) {
        return (
          f.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eF[t] || "opacity" === t))
        );
      }
      function nl(t, e, i) {
        var n;
        let { style: s } = t,
          r = {};
        for (let o in s)
          ((0, tT.i)(s[o]) ||
            (e.style && (0, tT.i)(e.style[o])) ||
            na(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (r[o] = s[o]);
        return (
          i && s && "string" == typeof s.willChange && (i.applyWillChange = !1),
          r
        );
      }
      function nu(t, e, i) {
        let n = nl(t, e, i);
        for (let i in t)
          ((0, tT.i)(t[i]) || (0, tT.i)(e[i])) &&
            (n[
              -1 !== f._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      var nh = i(53576);
      let nc = (t) => (e, i) => {
        let s = (0, eM.useContext)(i0),
          r = (0, eM.useContext)(eE.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: s,
              },
              r,
              o,
              a,
              l
            ) {
              let u = {
                latestValues: (function (t, e, i, s, r) {
                  var o;
                  let a = {},
                    l = [],
                    u =
                      s &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    h = r(t, {});
                  for (let t in h) a[t] = io(h[t]);
                  let { initial: c, animate: d } = t,
                    p = i4(t),
                    m = i9(t);
                  e &&
                    m &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let f = !!i && !1 === i.initial,
                    v = (f = f || !1 === c) ? d : c;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !n(v) &&
                      nd(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = f ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    u &&
                      (d &&
                        !1 !== c &&
                        !n(d) &&
                        nd(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = tx(e);
                              i && (0, tP.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(r, o, a, !l && t, e),
                renderState: i(),
              };
              return s && (u.mount = (t) => s(r, t, u)), u;
            })(t, e, s, r, i);
        return i ? o() : (0, nh.h)(o);
      };
      function nd(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let s = l(t, n[e]);
          if (s) {
            let { transitionEnd: t, transition: e, ...n } = s;
            i(n, t);
          }
        }
      }
      let np = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nm = () => ({ ...np(), attrs: {} }),
        nf = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        nv = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ng = f._.length;
      function ny(t, e, i) {
        let { style: n, vars: s, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (f.G.has(t)) {
            o = !0;
            continue;
          }
          if ((0, R.f)(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = nf(i, K[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    s = !0;
                  for (let r = 0; r < ng; r++) {
                    let o = f._[r],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = nf(a, K[o]);
                      if (!l) {
                        s = !1;
                        let e = nv[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, s ? "" : n)) : s && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function nx(t, e, i) {
        return "string" == typeof t ? t : L.px.transform(e + i * t);
      }
      let nP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nw = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nT(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: s,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((ny(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: m } = t;
        d.transform && (m && (p.transform = d.transform), delete d.transform),
          m &&
            (void 0 !== s || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = nx(e, t.x, t.width),
                s = nx(i, t.y, t.height);
              return `${n} ${s}`;
            })(m, void 0 !== s ? s : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? nP : nw;
              t[r.offset] = L.px.transform(-n);
              let o = L.px.transform(e),
                a = L.px.transform(i);
              t[r.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let nb = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        nS = {
          useVisualState: nc({
            scrapeMotionValuesFromProps: nu,
            createRenderState: nm,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              V.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                V.Wi.render(() => {
                  nT(i, n, nb(e.tagName), t.transformTemplate), no(e, i);
                });
            },
          }),
        },
        nA = {
          useVisualState: nc({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: nl,
            createRenderState: np,
          }),
        };
      function nV(t, e, i) {
        for (let n in e) (0, tT.i)(e[n]) || na(n, i) || (t[n] = e[n]);
      }
      let nC = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
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
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function nM(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          nC.has(t)
        );
      }
      let nE = (t) => !nM(t);
      try {
        (d = require("@emotion/is-prop-valid").default) &&
          (nE = (t) => (t.startsWith("on") ? !nM(t) : d(t)));
      } catch (t) {}
      let nR = { current: null },
        nD = { current: !1 },
        nk = new WeakMap(),
        nj = [...B, H.$, $.P],
        nL = (t) => nj.find(F(t)),
        nF = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class nB {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = O.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              (this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0),
                V.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = i4(e)),
            (this.isVariantNode = i9(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, tT.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            nk.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nD.current ||
              (function () {
                if (((nD.current = !0), nt.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nR.current = t.matches);
                    t.addListener(e), e();
                  } else nR.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nR.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nk.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, V.Pn)(this.notifyUpdate),
          (0, V.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = f.G.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && V.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              s(), r(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in i8) {
            let e = i8[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eo();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nF.length; e++) {
            let i = nF[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if ((0, tT.i)(s)) t.addValue(n, s);
              else if ((0, tT.i)(r)) t.addValue(n, (0, tv.BX)(s, { owner: t }));
              else if (r !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, tv.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, tv.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (E(n) || C(n))
                ? (n = parseFloat(n))
                : !nL(n) && $.P.test(e) && (n = q(t, e)),
              this.setBaseTarget(t, (0, tT.i)(n) ? n.get() : n)),
            (0, tT.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let s = l(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            s && (i = s[t]);
          }
          if (n && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || (0, tT.i)(s)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eI.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nW extends nB {
        constructor() {
          super(...arguments), (this.KeyframeResolver = J);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class nO extends nW {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = ns);
        }
        readValueFromInstance(t, e) {
          if (f.G.has(e)) {
            let t = G(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, R.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ex(t, e);
        }
        build(t, e, i) {
          ny(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nl(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, tT.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class n$ extends nW {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = eo);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (f.G.has(e)) {
            let t = G(e);
            return (t && t.default) || 0;
          }
          return (e = nr.has(e) ? e : tg(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nu(t, e, i);
        }
        build(t, e, i) {
          nT(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          no(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = nb(t.tagName)), super.mount(t);
        }
      }
      let nU = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((p = {
          animation: { Feature: tj },
          exit: { Feature: tF },
          inView: { Feature: iJ },
          tap: { Feature: iY },
          focus: { Feature: iX },
          hover: { Feature: iN },
          pan: { Feature: eV },
          drag: { Feature: eS, ProjectionNode: iU, MeasureLayout: e$ },
          layout: { ProjectionNode: iU, MeasureLayout: e$ },
        }),
        (m = (t, e) =>
          nn(t)
            ? new n$(e)
            : new nO(e, { allowProjection: t !== eM.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: s,
              Component: r,
            } = t;
            e &&
              (function (t) {
                for (let e in t) i8[e] = { ...i8[e], ...t[e] };
              })(e);
            let a = (0, eM.forwardRef)(function (t, e) {
              var a;
              let l;
              let u = {
                  ...(0, eM.useContext)(iQ._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, eM.useContext)(eR.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (i4(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || o(e) ? e : void 0,
                        animate: o(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, eM.useContext)(i0));
                  return (0, eM.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [i6(e), i6(i)]
                  );
                })(t),
                d = s(t, h);
              if (!h && nt.j) {
                (0, eM.useContext)(i5).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = i8;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, s) {
                    var r;
                    let { visualElement: o } = (0, eM.useContext)(i0),
                      a = (0, eM.useContext)(i5),
                      l = (0, eM.useContext)(eE.O),
                      u = (0, eM.useContext)(iQ._).reducedMotion,
                      h = (0, eM.useRef)();
                    (n = n || a.renderer),
                      !h.current &&
                        n &&
                        (h.current = n(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = h.current,
                      d = (0, eM.useContext)(eD);
                    c &&
                      !c.projection &&
                      s &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: s,
                          layout: r,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: s,
                            layout: r,
                            alwaysMeasureLayout: !!o || (a && tQ(a)),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, i, s, d),
                      (0, eM.useInsertionEffect)(() => {
                        c && c.update(i, l);
                      });
                    let p = i[ty],
                      m = (0, eM.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (r = window.MotionHasOptimisedAnimation) ||
                          void 0 === r
                            ? void 0
                            : r.call(window, p))
                      );
                    return (
                      (0, i1.L)(() => {
                        c &&
                          (c.updateFeatures(),
                          eB.render(c.render),
                          m.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, eM.useEffect)(() => {
                        c &&
                          (!m.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          (m.current = !1),
                          i2 || ((i2 = !0), queueMicrotask(i3)));
                      }),
                      c
                    );
                  })(r, d, u, i, t.ProjectionNode));
              }
              return (0, eC.jsxs)(i0.Provider, {
                value: c,
                children: [
                  l && c.visualElement
                    ? (0, eC.jsx)(l, { visualElement: c.visualElement, ...u })
                    : null,
                  n(
                    r,
                    t,
                    ((a = c.visualElement),
                    (0, eM.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          a && (t ? a.mount(t) : a.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : tQ(e) && (e.current = t));
                      },
                      [a]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (a[ne] = r), a;
          })({
            ...(nn(t) ? nS : nA),
            preloadedFeatures: p,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: s }, r) => {
                let o = (
                    nn(e)
                      ? function (t, e, i, n) {
                          let s = (0, eM.useMemo)(() => {
                            let i = nm();
                            return (
                              nT(i, e, nb(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            nV(e, t.style, t), (s.style = { ...e, ...s.style });
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                nV(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, eM.useMemo)(() => {
                                      let i = np();
                                      return (
                                        ny(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, s, r, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let s in t)
                      ("values" !== s || "object" != typeof t.values) &&
                        (nE(s) ||
                          (!0 === i && nM(s)) ||
                          (!e && !nM(s)) ||
                          (t.draggable && s.startsWith("onDrag"))) &&
                        (n[s] = t[s]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== eM.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, eM.useMemo)(() => ((0, tT.i)(u) ? u.get() : u), [u]);
                return (0, eM.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: m,
            Component: t,
          });
        })
      );
    },
    37249: function (t, e, i) {
      i.d(e, {
        f: function () {
          return s;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        s = n("--"),
        r = n("var(--"),
        o = (t) => !!r(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    90401: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(8834),
        s = i(74305),
        r = i(27492);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === s.Rx || t === r.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let s = n.match(/^matrix3d\((.+)\)$/u);
            if (s) return l(s[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    8834: function (t, e, i) {
      i.d(e, {
        G: function () {
          return s;
        },
        _: function () {
          return n;
        },
      });
      let n = [
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
          "skewY",
        ],
        s = new Set(n);
    },
    39545: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(90401),
        s = i(45414);
      let r = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(r).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), r.forEach((t) => t.complete()), r.clear();
      }
      function u() {
        r.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, s, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (r.add(this),
                o || ((o = !0), s.Wi.read(u), s.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let s = 0; s < t.length; s++)
            if (null === t[s]) {
              if (0 === s) {
                let s = null == n ? void 0 : n.get(),
                  r = t[t.length - 1];
                if (void 0 !== s) t[0] = s;
                else if (i && e) {
                  let n = i.readValue(e, r);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
              } else t[s] = t[s - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            r.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), r.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    24118: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    69013: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return s;
        },
        y4: function () {
          return n;
        },
      });
    },
    59111: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    13223: function (t, e, i) {
      i.d(e, {
        K: function () {
          return s;
        },
        k: function () {
          return r;
        },
      });
      var n = i(44439);
      let s = n.Z,
        r = n.Z;
    },
    44563: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    96781: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    44439: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    56920: function (t, e, i) {
      i.d(e, {
        z: function () {
          return s;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        s = (...t) => t.reduce(n);
    },
    76376: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    34081: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(69013);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    56717: function (t, e, i) {
      i.d(e, {
        X: function () {
          return s;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        s = (t) => t / 1e3;
    },
    53576: function (t, e, i) {
      i.d(e, {
        h: function () {
          return s;
        },
      });
      var n = i(2265);
      function s(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    64522: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    11534: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(2265);
      let s = i(44563).j ? n.useLayoutEffect : n.useEffect;
    },
    14438: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    3078: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
      });
      var n = i(34081),
        s = i(14438),
        r = i(40504),
        o = i(45414);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.5.5"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = r.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = r.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    87325: function (t, e, i) {
      i.d(e, {
        $: function () {
          return s;
        },
      });
      var n = i(18859);
      let s = {
        test: (0, i(42702).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            s = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (s = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (s = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (s += s)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    92943: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(74305),
        s = i(27492),
        r = i(50796),
        o = i(42702);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          s.aQ.transform((0, r.Nw)(e)) +
          ", " +
          s.aQ.transform((0, r.Nw)(i)) +
          ", " +
          (0, r.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    33964: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(50796),
        s = i(87325),
        r = i(92943),
        o = i(18859);
      let a = {
        test: (t) => o.m.test(t) || s.$.test(t) || r.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : r.J.test(t)
            ? r.J.parse(t)
            : s.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : r.J.transform(t),
      };
    },
    18859: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(59111),
        s = i(74305),
        r = i(50796),
        o = i(42702);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...s.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, r.Nw)(s.Fq.transform(n)) +
            ")",
        };
    },
    42702: function (t, e, i) {
      i.d(e, {
        d: function () {
          return r;
        },
        i: function () {
          return s;
        },
      });
      var n = i(50796);
      let s = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        r = (t, e, i) => (s) => {
          if (!(0, n.HD)(s)) return s;
          let [r, o, a, l] = s.match(n.KP);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    15636: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(33964),
        s = i(50796);
      let r = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (s.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(u), l.push("var"), i.push(t))
                  : (s.number.push(u), l.push(r), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: s, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === r
                ? (l += (0, s.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, s.HD)(t) &&
              ((null === (e = t.match(s.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(s.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    74305: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return r;
        },
        Rx: function () {
          return s;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(59111);
      let s = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        r = { ...s, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...s, default: 1 };
    },
    27492: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return r;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(50796);
      let s = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = s("deg"),
        o = s("%"),
        a = s("px"),
        l = s("vh"),
        u = s("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    50796: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return s;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return r;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        r =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    23999: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
]);
