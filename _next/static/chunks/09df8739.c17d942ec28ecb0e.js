"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7529],
  {
    74466: function (t, e, r) {
      let i, n;
      r.d(e, {
        D6H: function () {
          return e1;
        },
        DQe: function () {
          return A;
        },
        L5o: function () {
          return e3;
        },
        Maj: function () {
          return e$;
        },
        eGA: function () {
          return b;
        },
        gpE: function () {
          return eZ;
        },
        guN: function () {
          return v;
        },
        qt8: function () {
          return e2;
        },
      }),
        r(40537),
        r(76454),
        r(3897),
        r(88017),
        r(50972),
        r(9014),
        r(2737),
        r(43094),
        r(11153),
        r(42058),
        r(61984),
        r(11857),
        r(21086);
      var o,
        s,
        f,
        h,
        u,
        a,
        l,
        d,
        c,
        p,
        m,
        g = r(25566);
      function A(t) {
        let [e, r] = t.split(":");
        return { namespace: e, reference: r };
      }
      function v(t, e = []) {
        let r = [];
        return (
          Object.keys(t).forEach((i) => {
            if (e.length && !e.includes(i)) return;
            let n = t[i];
            r.push(...n.accounts);
          }),
          r
        );
      }
      function b(t = [], e = []) {
        return [...new Set([...t, ...e])];
      }
      r(82957).Buffer,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var y =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        w = { exports: {} };
      (function () {
        var t = "input is invalid type",
          e = "object" == typeof window,
          r = e ? window : {};
        r.JS_SHA3_NO_WINDOW && (e = !1);
        var i = !e && "object" == typeof self;
        !r.JS_SHA3_NO_NODE_JS &&
        "object" == typeof g &&
        g.versions &&
        g.versions.node
          ? (r = y)
          : i && (r = self);
        var n = !r.JS_SHA3_NO_COMMON_JS && w.exports,
          o = !r.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
          s = "0123456789abcdef".split(""),
          f = [4, 1024, 262144, 67108864],
          h = [0, 8, 16, 24],
          u = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          a = [224, 256, 384, 512],
          l = [128, 256],
          d = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          c = { 128: 168, 256: 136 };
        (r.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          o &&
            (r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return (
                "object" == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var p = function (t, e, r) {
              return function (i) {
                return new U(t, e, t).update(i)[r]();
              };
            },
            m = function (t, e, r) {
              return function (i, n) {
                return new U(t, e, n).update(i)[r]();
              };
            },
            A = function (t, e, r) {
              return function (e, i, n, o) {
                return S["cshake" + t].update(e, i, n, o)[r]();
              };
            },
            v = function (t, e, r) {
              return function (e, i, n, o) {
                return S["kmac" + t].update(e, i, n, o)[r]();
              };
            },
            b = function (t, e, r, i) {
              for (var n = 0; n < d.length; ++n) {
                var o = d[n];
                t[o] = e(r, i, o);
              }
              return t;
            },
            M = function (t, e) {
              var r = p(t, e, "hex");
              return (
                (r.create = function () {
                  return new U(t, e, t);
                }),
                (r.update = function (t) {
                  return r.create().update(t);
                }),
                b(r, p, t, e)
              );
            },
            E = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: a,
                createMethod: M,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: a,
                createMethod: M,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: l,
                createMethod: function (t, e) {
                  var r = m(t, e, "hex");
                  return (
                    (r.create = function (r) {
                      return new U(t, e, r);
                    }),
                    (r.update = function (t, e) {
                      return r.create(e).update(t);
                    }),
                    b(r, m, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: f,
                bits: l,
                createMethod: function (t, e) {
                  var r = c[t],
                    i = A(t, e, "hex");
                  return (
                    (i.create = function (i, n, o) {
                      return n || o
                        ? new U(t, e, i).bytepad([n, o], r)
                        : S["shake" + t].create(i);
                    }),
                    (i.update = function (t, e, r, n) {
                      return i.create(e, r, n).update(t);
                    }),
                    b(i, A, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: f,
                bits: l,
                createMethod: function (t, e) {
                  var r = c[t],
                    i = v(t, e, "hex");
                  return (
                    (i.create = function (i, n, o) {
                      return new T(t, e, n)
                        .bytepad(["KMAC", o], r)
                        .bytepad([i], r);
                    }),
                    (i.update = function (t, e, r, n) {
                      return i.create(t, r, n).update(e);
                    }),
                    b(i, v, t, e)
                  );
                },
              },
            ],
            S = {},
            I = [],
            B = 0;
          B < E.length;
          ++B
        )
          for (var N = E[B], C = N.bits, x = 0; x < C.length; ++x) {
            var _ = N.name + "_" + C[x];
            if (
              (I.push(_),
              (S[_] = N.createMethod(C[x], N.padding)),
              "sha3" !== N.name)
            ) {
              var R = N.name + C[x];
              I.push(R), (S[R] = S[_]);
            }
          }
        function U(t, e, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var i = 0; i < 50; ++i) this.s[i] = 0;
        }
        function T(t, e, r) {
          U.call(this, t, e, r);
        }
        (U.prototype.update = function (e) {
          if (this.finalized) throw Error("finalize already called");
          var r,
            i = typeof e;
          if ("string" !== i) {
            if ("object" === i) {
              if (null === e) throw Error(t);
              if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!o || !ArrayBuffer.isView(e)))
                throw Error(t);
            } else throw Error(t);
            r = !0;
          }
          for (
            var n,
              s,
              f = this.blocks,
              u = this.byteCount,
              a = e.length,
              l = this.blockCount,
              d = 0,
              c = this.s;
            d < a;

          ) {
            if (this.reset)
              for (this.reset = !1, f[0] = this.block, n = 1; n < l + 1; ++n)
                f[n] = 0;
            if (r)
              for (n = this.start; d < a && n < u; ++d)
                f[n >> 2] |= e[d] << h[3 & n++];
            else
              for (n = this.start; d < a && n < u; ++d)
                (s = e.charCodeAt(d)) < 128
                  ? (f[n >> 2] |= s << h[3 & n++])
                  : (s < 2048
                      ? (f[n >> 2] |= (192 | (s >> 6)) << h[3 & n++])
                      : (s < 55296 || s >= 57344
                          ? (f[n >> 2] |= (224 | (s >> 12)) << h[3 & n++])
                          : ((s =
                              65536 +
                              (((1023 & s) << 10) |
                                (1023 & e.charCodeAt(++d)))),
                            (f[n >> 2] |= (240 | (s >> 18)) << h[3 & n++]),
                            (f[n >> 2] |=
                              (128 | ((s >> 12) & 63)) << h[3 & n++])),
                        (f[n >> 2] |= (128 | ((s >> 6) & 63)) << h[3 & n++])),
                    (f[n >> 2] |= (128 | (63 & s)) << h[3 & n++]));
            if (((this.lastByteIndex = n), n >= u)) {
              for (this.start = n - u, this.block = f[l], n = 0; n < l; ++n)
                c[n] ^= f[n];
              D(c), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (U.prototype.encode = function (t, e) {
            var r = 255 & t,
              i = 1,
              n = [r];
            for (t >>= 8, r = 255 & t; r > 0; )
              n.unshift(r), (t >>= 8), (r = 255 & t), ++i;
            return e ? n.push(i) : n.unshift(i), this.update(n), n.length;
          }),
          (U.prototype.encodeString = function (e) {
            var r,
              i = typeof e;
            if ("string" !== i) {
              if ("object" === i) {
                if (null === e) throw Error(t);
                if (o && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!Array.isArray(e) && (!o || !ArrayBuffer.isView(e)))
                  throw Error(t);
              } else throw Error(t);
              r = !0;
            }
            var n = 0,
              s = e.length;
            if (r) n = s;
            else
              for (var f = 0; f < e.length; ++f) {
                var h = e.charCodeAt(f);
                h < 128
                  ? (n += 1)
                  : h < 2048
                  ? (n += 2)
                  : h < 55296 || h >= 57344
                  ? (n += 3)
                  : ((h =
                      65536 +
                      (((1023 & h) << 10) | (1023 & e.charCodeAt(++f)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(e), n;
          }),
          (U.prototype.bytepad = function (t, e) {
            for (var r = this.encode(e), i = 0; i < t.length; ++i)
              r += this.encodeString(t[i]);
            var n = e - (r % e),
              o = [];
            return (o.length = n), this.update(o), this;
          }),
          (U.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                i = this.s;
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) i[e] ^= t[e];
              D(i);
            }
          }),
          (U.prototype.toString = U.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  r = this.s,
                  i = this.outputBlocks,
                  n = this.extraBytes,
                  o = 0,
                  f = 0,
                  h = "";
                f < i;

              ) {
                for (o = 0; o < e && f < i; ++o, ++f)
                  h +=
                    s[((t = r[o]) >> 4) & 15] +
                    s[15 & t] +
                    s[(t >> 12) & 15] +
                    s[(t >> 8) & 15] +
                    s[(t >> 20) & 15] +
                    s[(t >> 16) & 15] +
                    s[(t >> 28) & 15] +
                    s[(t >> 24) & 15];
                f % e == 0 && (D(r), (o = 0));
              }
              return (
                n &&
                  ((h += s[((t = r[o]) >> 4) & 15] + s[15 & t]),
                  n > 1 && (h += s[(t >> 12) & 15] + s[(t >> 8) & 15]),
                  n > 2 && (h += s[(t >> 20) & 15] + s[(t >> 16) & 15])),
                h
              );
            }),
          (U.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              r = this.s,
              i = this.outputBlocks,
              n = this.extraBytes,
              o = 0,
              s = 0,
              f = this.outputBits >> 3;
            t = new ArrayBuffer(n ? (i + 1) << 2 : f);
            for (var h = new Uint32Array(t); s < i; ) {
              for (o = 0; o < e && s < i; ++o, ++s) h[s] = r[o];
              s % e == 0 && D(r);
            }
            return n && ((h[o] = r[o]), (t = t.slice(0, f))), t;
          }),
          (U.prototype.buffer = U.prototype.arrayBuffer),
          (U.prototype.digest = U.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  r = this.blockCount,
                  i = this.s,
                  n = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  f = 0,
                  h = [];
                f < n;

              ) {
                for (s = 0; s < r && f < n; ++s, ++f)
                  (t = f << 2),
                    (e = i[s]),
                    (h[t] = 255 & e),
                    (h[t + 1] = (e >> 8) & 255),
                    (h[t + 2] = (e >> 16) & 255),
                    (h[t + 3] = (e >> 24) & 255);
                f % r == 0 && D(i);
              }
              return (
                o &&
                  ((t = f << 2),
                  (e = i[s]),
                  (h[t] = 255 & e),
                  o > 1 && (h[t + 1] = (e >> 8) & 255),
                  o > 2 && (h[t + 2] = (e >> 16) & 255)),
                h
              );
            }),
          (T.prototype = new U()),
          (T.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), U.prototype.finalize.call(this)
            );
          });
        var D = function (t) {
          var e,
            r,
            i,
            n,
            o,
            s,
            f,
            h,
            a,
            l,
            d,
            c,
            p,
            m,
            g,
            A,
            v,
            b,
            y,
            w,
            M,
            E,
            S,
            I,
            B,
            N,
            C,
            x,
            _,
            R,
            U,
            T,
            D,
            F,
            O,
            k,
            P,
            q,
            z,
            L,
            Q,
            H,
            J,
            Y,
            G,
            K,
            j,
            X,
            V,
            W,
            Z,
            $,
            tt,
            te,
            tr,
            ti,
            tn,
            to,
            ts,
            tf,
            th,
            tu,
            ta;
          for (i = 0; i < 48; i += 2)
            (n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (f = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]),
              (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]),
              (e = c ^ ((s << 1) | (f >>> 31))),
              (r = p ^ ((f << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = n ^ ((h << 1) | (a >>> 31))),
              (r = o ^ ((a << 1) | (h >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((l << 1) | (d >>> 31))),
              (r = f ^ ((d << 1) | (l >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = h ^ ((c << 1) | (p >>> 31))),
              (r = a ^ ((p << 1) | (c >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = l ^ ((n << 1) | (o >>> 31))),
              (r = d ^ ((o << 1) | (n >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (m = t[0]),
              (g = t[1]),
              (K = (t[11] << 4) | (t[10] >>> 28)),
              (j = (t[10] << 4) | (t[11] >>> 28)),
              (x = (t[20] << 3) | (t[21] >>> 29)),
              (_ = (t[21] << 3) | (t[20] >>> 29)),
              (tf = (t[31] << 9) | (t[30] >>> 23)),
              (th = (t[30] << 9) | (t[31] >>> 23)),
              (H = (t[40] << 18) | (t[41] >>> 14)),
              (J = (t[41] << 18) | (t[40] >>> 14)),
              (F = (t[2] << 1) | (t[3] >>> 31)),
              (O = (t[3] << 1) | (t[2] >>> 31)),
              (A = (t[13] << 12) | (t[12] >>> 20)),
              (v = (t[12] << 12) | (t[13] >>> 20)),
              (X = (t[22] << 10) | (t[23] >>> 22)),
              (V = (t[23] << 10) | (t[22] >>> 22)),
              (R = (t[33] << 13) | (t[32] >>> 19)),
              (U = (t[32] << 13) | (t[33] >>> 19)),
              (tu = (t[42] << 2) | (t[43] >>> 30)),
              (ta = (t[43] << 2) | (t[42] >>> 30)),
              (te = (t[5] << 30) | (t[4] >>> 2)),
              (tr = (t[4] << 30) | (t[5] >>> 2)),
              (k = (t[14] << 6) | (t[15] >>> 26)),
              (P = (t[15] << 6) | (t[14] >>> 26)),
              (b = (t[25] << 11) | (t[24] >>> 21)),
              (y = (t[24] << 11) | (t[25] >>> 21)),
              (W = (t[34] << 15) | (t[35] >>> 17)),
              (Z = (t[35] << 15) | (t[34] >>> 17)),
              (T = (t[45] << 29) | (t[44] >>> 3)),
              (D = (t[44] << 29) | (t[45] >>> 3)),
              (I = (t[6] << 28) | (t[7] >>> 4)),
              (B = (t[7] << 28) | (t[6] >>> 4)),
              (ti = (t[17] << 23) | (t[16] >>> 9)),
              (tn = (t[16] << 23) | (t[17] >>> 9)),
              (q = (t[26] << 25) | (t[27] >>> 7)),
              (z = (t[27] << 25) | (t[26] >>> 7)),
              (w = (t[36] << 21) | (t[37] >>> 11)),
              (M = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (Y = (t[8] << 27) | (t[9] >>> 5)),
              (G = (t[9] << 27) | (t[8] >>> 5)),
              (N = (t[18] << 20) | (t[19] >>> 12)),
              (C = (t[19] << 20) | (t[18] >>> 12)),
              (to = (t[29] << 7) | (t[28] >>> 25)),
              (ts = (t[28] << 7) | (t[29] >>> 25)),
              (L = (t[38] << 8) | (t[39] >>> 24)),
              (Q = (t[39] << 8) | (t[38] >>> 24)),
              (E = (t[48] << 14) | (t[49] >>> 18)),
              (S = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = m ^ (~A & b)),
              (t[1] = g ^ (~v & y)),
              (t[10] = I ^ (~N & x)),
              (t[11] = B ^ (~C & _)),
              (t[20] = F ^ (~k & q)),
              (t[21] = O ^ (~P & z)),
              (t[30] = Y ^ (~K & X)),
              (t[31] = G ^ (~j & V)),
              (t[40] = te ^ (~ti & to)),
              (t[41] = tr ^ (~tn & ts)),
              (t[2] = A ^ (~b & w)),
              (t[3] = v ^ (~y & M)),
              (t[12] = N ^ (~x & R)),
              (t[13] = C ^ (~_ & U)),
              (t[22] = k ^ (~q & L)),
              (t[23] = P ^ (~z & Q)),
              (t[32] = K ^ (~X & W)),
              (t[33] = j ^ (~V & Z)),
              (t[42] = ti ^ (~to & tf)),
              (t[43] = tn ^ (~ts & th)),
              (t[4] = b ^ (~w & E)),
              (t[5] = y ^ (~M & S)),
              (t[14] = x ^ (~R & T)),
              (t[15] = _ ^ (~U & D)),
              (t[24] = q ^ (~L & H)),
              (t[25] = z ^ (~Q & J)),
              (t[34] = X ^ (~W & $)),
              (t[35] = V ^ (~Z & tt)),
              (t[44] = to ^ (~tf & tu)),
              (t[45] = ts ^ (~th & ta)),
              (t[6] = w ^ (~E & m)),
              (t[7] = M ^ (~S & g)),
              (t[16] = R ^ (~T & I)),
              (t[17] = U ^ (~D & B)),
              (t[26] = L ^ (~H & F)),
              (t[27] = Q ^ (~J & O)),
              (t[36] = W ^ (~$ & Y)),
              (t[37] = Z ^ (~tt & G)),
              (t[46] = tf ^ (~tu & te)),
              (t[47] = th ^ (~ta & tr)),
              (t[8] = E ^ (~m & A)),
              (t[9] = S ^ (~g & v)),
              (t[18] = T ^ (~I & N)),
              (t[19] = D ^ (~B & C)),
              (t[28] = H ^ (~F & k)),
              (t[29] = J ^ (~O & P)),
              (t[38] = $ ^ (~Y & K)),
              (t[39] = tt ^ (~G & j)),
              (t[48] = tu ^ (~te & ti)),
              (t[49] = ta ^ (~tr & tn)),
              (t[0] ^= u[i]),
              (t[1] ^= u[i + 1]);
        };
        if (n) w.exports = S;
        else for (B = 0; B < I.length; ++B) r[I[B]] = S[I[B]];
      })(),
        w.exports;
      let M = !1,
        E = !1,
        S = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        I = S.default,
        B = null,
        N = (function () {
          try {
            let t = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
                try {
                  if ("test" !== "test".normalize(e))
                    throw Error("bad normalize");
                } catch {
                  t.push(e);
                }
              }),
              t.length)
            )
              throw Error("missing " + t.join(", "));
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw Error("broken implementation");
          } catch (t) {
            return t.message;
          }
          return null;
        })();
      ((l = s || (s = {})).DEBUG = "DEBUG"),
        (l.INFO = "INFO"),
        (l.WARNING = "WARNING"),
        (l.ERROR = "ERROR"),
        (l.OFF = "OFF"),
        ((d = f || (f = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (d.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
        (d.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
        (d.NETWORK_ERROR = "NETWORK_ERROR"),
        (d.SERVER_ERROR = "SERVER_ERROR"),
        (d.TIMEOUT = "TIMEOUT"),
        (d.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
        (d.NUMERIC_FAULT = "NUMERIC_FAULT"),
        (d.MISSING_NEW = "MISSING_NEW"),
        (d.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
        (d.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
        (d.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
        (d.CALL_EXCEPTION = "CALL_EXCEPTION"),
        (d.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
        (d.NONCE_EXPIRED = "NONCE_EXPIRED"),
        (d.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
        (d.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
        (d.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
        (d.ACTION_REJECTED = "ACTION_REJECTED");
      let C = "0123456789abcdef";
      class x {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          let r = t.toLowerCase();
          null == S[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            I > S[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(x.levels.DEBUG, t);
        }
        info(...t) {
          this._log(x.levels.INFO, t);
        }
        warn(...t) {
          this._log(x.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (E) return this.makeError("censored error", e, {});
          e || (e = x.errors.UNKNOWN_ERROR), r || (r = {});
          let i = [];
          Object.keys(r).forEach((t) => {
            let e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  r += C[e[t] >> 4] + C[15 & e[t]];
                i.push(t + "=Uint8Array(0x" + r + ")");
              } else i.push(t + "=" + JSON.stringify(e));
            } catch {
              i.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            i.push(`code=${e}`),
            i.push(`version=${this.version}`);
          let n = t,
            o = "";
          switch (e) {
            case f.NUMERIC_FAULT: {
              o = "NUMERIC_FAULT";
              let e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  o += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  o += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  o += "-unbound-result";
              }
              break;
            }
            case f.CALL_EXCEPTION:
            case f.INSUFFICIENT_FUNDS:
            case f.MISSING_NEW:
            case f.NONCE_EXPIRED:
            case f.REPLACEMENT_UNDERPRICED:
            case f.TRANSACTION_REPLACED:
            case f.UNPREDICTABLE_GAS_LIMIT:
              o = e;
          }
          o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"),
            i.length && (t += " (" + i.join(", ") + ")");
          let s = Error(t);
          return (
            (s.reason = n),
            (s.code = e),
            Object.keys(r).forEach(function (t) {
              s[t] = r[t];
            }),
            s
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, x.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, i) {
          t || this.throwError(e, r, i);
        }
        assertArgument(t, e, r, i) {
          t || this.throwArgumentError(e, r, i);
        }
        checkNormalize(t) {
          N &&
            this.throwError(
              "platform missing String.prototype.normalize",
              x.errors.UNSUPPORTED_OPERATION,
              { operation: "String.prototype.normalize", form: N }
            );
        }
        checkSafeUint53(t, e) {
          "number" == typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, x.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, x.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          (r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                x.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e }
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                x.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e }
              );
        }
        checkNew(t, e) {
          (t === Object || null == t) &&
            this.throwError("missing new", x.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                x.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t === Object || null == t) &&
              this.throwError("missing new", x.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return B || (B = new x("logger/5.7.0")), B;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                x.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            M)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              x.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (E = !!t), (M = !!e);
        }
        static setLogLevel(t) {
          let e = S[t.toLowerCase()];
          if (null == e) {
            x.globalLogger().warn("invalid log level - " + t);
            return;
          }
          I = e;
        }
        static from(t) {
          return new x(t);
        }
      }
      (x.errors = f), (x.levels = s);
      let _ = new x("bytes/5.7.0");
      function R(t) {
        return !!t.toHexString;
      }
      function U(t) {
        return (
          t.slice ||
            (t.slice = function () {
              let e = Array.prototype.slice.call(arguments);
              return U(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function T(t) {
        return "number" == typeof t && t == t && t % 1 == 0;
      }
      function D(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !T(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (!T(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function F(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          _.checkSafeUint53(t, "invalid arrayify value");
          let e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), U(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          R(t) && (t = t.toHexString()),
          O(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
              ? (r += "0")
              : _.throwArgumentError("hex data is odd-length", "value", t));
          let i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return U(new Uint8Array(i));
        }
        return D(t)
          ? U(new Uint8Array(t))
          : _.throwArgumentError("invalid arrayify value", "value", t);
      }
      function O(t, e) {
        return !(
          "string" != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          (e && t.length !== 2 + 2 * e)
        );
      }
      let k = "0123456789abcdef";
      function P(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          _.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = k[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" == typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          R(t))
        )
          return t.toHexString();
        if (O(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : _.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (D(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += k[(240 & i) >> 4] + k[15 & i];
          }
          return e;
        }
        return _.throwArgumentError("invalid hexlify value", "value", t);
      }
      function q(t, e) {
        for (
          "string" != typeof t
            ? (t = P(t))
            : O(t) || _.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 &&
              _.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      var z = { exports: {} },
        L = (function (t) {
          var e = t.default;
          if ("function" == typeof e) {
            var r = function () {
              return e.apply(this, arguments);
            };
            r.prototype = e.prototype;
          } else r = {};
          return (
            Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.keys(t).forEach(function (e) {
              var i = Object.getOwnPropertyDescriptor(t, e);
              Object.defineProperty(
                r,
                e,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[e];
                      },
                    }
              );
            }),
            r
          );
        })(Object.freeze({ __proto__: null, default: {} }));
      !(function (t, e) {
        function r(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function n(t, e, r) {
          if (n.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = n) : (e.BN = n),
          (n.BN = n),
          (n.wordSize = 26);
        try {
          a =
            "u" > typeof window && "u" > typeof window.Buffer
              ? window.Buffer
              : L.Buffer;
        } catch {}
        function o(t, e) {
          var i = t.charCodeAt(e);
          return i >= 48 && i <= 57
            ? i - 48
            : i >= 65 && i <= 70
            ? i - 55
            : i >= 97 && i <= 102
            ? i - 87
            : void r(!1, "Invalid character in " + t);
        }
        function s(t, e, r) {
          var i = o(t, r);
          return r - 1 >= e && (i |= o(t, r - 1) << 4), i;
        }
        function f(t, e, i, n) {
          for (var o = 0, s = 0, f = Math.min(t.length, i), h = e; h < f; h++) {
            var u = t.charCodeAt(h) - 48;
            (o *= n),
              (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              r(u >= 0 && s < n, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function h(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((n.isBN = function (t) {
            return (
              t instanceof n ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === n.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (n.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (n.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (n.prototype._init = function (t, e, i) {
            if ("number" == typeof t) return this._initNumber(t, e, i);
            if ("object" == typeof t) return this._initArray(t, e, i);
            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === e
                  ? this._parseHex(t, n, i)
                  : (this._parseBase(t, e, n),
                    "le" === i && this._initArray(this.toArray(), e, i)));
          }),
          (n.prototype._initNumber = function (t, e, i) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (r(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === i && this._initArray(this.toArray(), e, i);
          }),
          (n.prototype._initArray = function (t, e, i) {
            if ((r("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              s,
              f = 0;
            if ("be" === i)
              for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                (s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[o] |= (s << f) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - f)) & 67108863),
                  (f += 24) >= 26 && ((f -= 26), o++);
            else if ("le" === i)
              for (n = 0, o = 0; n < t.length; n += 3)
                (s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[o] |= (s << f) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - f)) & 67108863),
                  (f += 24) >= 26 && ((f -= 26), o++);
            return this._strip();
          }),
          (n.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              o = 0,
              f = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = s(t, e, i) << o),
                  (this.words[f] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = s(t, e, i) << o),
                  (this.words[f] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (n.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
            i--, (n = (n / e) | 0);
            for (
              var o = t.length - r,
                s = o % i,
                h = Math.min(o, o - s) + r,
                u = 0,
                a = r;
              a < h;
              a += i
            )
              (u = f(t, a, a + i, e)),
                this.imuln(n),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var l = 1;
              for (u = f(t, a, t.length, e), a = 0; a < s; a++) l *= e;
              this.imuln(l),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (n.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (n.prototype._move = function (t) {
            h(t, this);
          }),
          (n.prototype.clone = function () {
            var t = new n(null);
            return this.copy(t), t;
          }),
          (n.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (n.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (n.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "u" > typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            n.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
          } catch {
            n.prototype.inspect = u;
          }
        else n.prototype.inspect = u;
        function u() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var a,
          l = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          c = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function p(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var i = (t.length + e.length) | 0;
          (r.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | e.words[0],
            s = n * o,
            f = 67108863 & s,
            h = (s / 67108864) | 0;
          r.words[0] = f;
          for (var u = 1; u < i; u++) {
            for (
              var a = h >>> 26,
                l = 67108863 & h,
                d = Math.min(u, e.length - 1),
                c = Math.max(0, u - t.length + 1);
              c <= d;
              c++
            ) {
              var p = (u - c) | 0;
              (a +=
                ((s = (n = 0 | t.words[p]) * (o = 0 | e.words[c]) + l) /
                  67108864) |
                0),
                (l = 67108863 & s);
            }
            (r.words[u] = 0 | l), (h = 0 | a);
          }
          return 0 !== h ? (r.words[u] = 0 | h) : r.length--, r._strip();
        }
        (n.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            i = "";
            for (var i, n = 0, o = 0, s = 0; s < this.length; s++) {
              var f = this.words[s],
                h = (((f << n) | o) & 16777215).toString(16);
              (o = (f >>> (24 - n)) & 16777215),
                (n += 2) >= 26 && ((n -= 26), s--),
                (i =
                  0 !== o || s !== this.length - 1
                    ? l[6 - h.length] + h + i
                    : h + i);
            }
            for (0 !== o && (i = o.toString(16) + i); i.length % e != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = d[t],
              a = c[t];
            i = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var m = p.modrn(a).toString(t);
              i = (p = p.idivn(a)).isZero() ? m + i : l[u - m.length] + m + i;
            }
            for (this.isZero() && (i = "0" + i); i.length % e != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (n.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (n.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (n.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(a, t, e);
            }),
          (n.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (n.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              o = i || Math.max(1, n);
            r(n <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s;
          }),
          (n.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
              var s = (this.words[n] << o) | i;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (i = 0),
                    (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = i; r < t.length; ) t[r++] = 0;
          }),
          (n.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, i = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var s = (this.words[n] << o) | i;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (i = 0), (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = i; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (n.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (n.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (n.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              8191 & e || ((r += 13), (e >>>= 13)),
              127 & e || ((r += 7), (e >>>= 7)),
              15 & e || ((r += 4), (e >>>= 4)),
              3 & e || ((r += 2), (e >>>= 2)),
              1 & e || r++,
              r
            );
          }),
          (n.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (n.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (n.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (n.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (n.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (n.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (n.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (n.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (n.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (n.prototype.ior = function (t) {
            return r((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (n.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (n.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (n.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (n.prototype.iand = function (t) {
            return r((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (n.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (n.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (n.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var i = 0; i < r.length; i++)
              this.words[i] = e.words[i] ^ r.words[i];
            if (this !== e)
              for (; i < e.length; i++) this.words[i] = e.words[i];
            return (this.length = e.length), this._strip();
          }),
          (n.prototype.ixor = function (t) {
            return r((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (n.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (n.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (n.prototype.inotn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              i = t % 26;
            this._expand(e), i > 0 && e--;
            for (var n = 0; n < e; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              i > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
              this._strip()
            );
          }),
          (n.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (n.prototype.setn = function (t, e) {
            r("number" == typeof t && t >= 0);
            var i = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(i + 1),
              e
                ? (this.words[i] = this.words[i] | (1 << n))
                : (this.words[i] = this.words[i] & ~(1 << n)),
              this._strip()
            );
          }),
          (n.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (i = t))
              : ((r = t), (i = this));
            for (var e, r, i, n = 0, o = 0; o < i.length; o++)
              (e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (e = (0 | r.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (n.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (n.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                i = this.iadd(t);
              return (t.negative = 1), i._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (i = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & i);
            for (; 0 !== o && s < e.length; s++)
              (o = (i = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & i);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (n.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var i,
            n,
            o,
            s = t.words,
            f = e.words,
            h = r.words,
            u = 0,
            a = 0 | s[0],
            l = 8191 & a,
            d = a >>> 13,
            c = 0 | s[1],
            p = 8191 & c,
            m = c >>> 13,
            g = 0 | s[2],
            A = 8191 & g,
            v = g >>> 13,
            b = 0 | s[3],
            y = 8191 & b,
            w = b >>> 13,
            M = 0 | s[4],
            E = 8191 & M,
            S = M >>> 13,
            I = 0 | s[5],
            B = 8191 & I,
            N = I >>> 13,
            C = 0 | s[6],
            x = 8191 & C,
            _ = C >>> 13,
            R = 0 | s[7],
            U = 8191 & R,
            T = R >>> 13,
            D = 0 | s[8],
            F = 8191 & D,
            O = D >>> 13,
            k = 0 | s[9],
            P = 8191 & k,
            q = k >>> 13,
            z = 0 | f[0],
            L = 8191 & z,
            Q = z >>> 13,
            H = 0 | f[1],
            J = 8191 & H,
            Y = H >>> 13,
            G = 0 | f[2],
            K = 8191 & G,
            j = G >>> 13,
            X = 0 | f[3],
            V = 8191 & X,
            W = X >>> 13,
            Z = 0 | f[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            te = 0 | f[5],
            tr = 8191 & te,
            ti = te >>> 13,
            tn = 0 | f[6],
            to = 8191 & tn,
            ts = tn >>> 13,
            tf = 0 | f[7],
            th = 8191 & tf,
            tu = tf >>> 13,
            ta = 0 | f[8],
            tl = 8191 & ta,
            td = ta >>> 13,
            tc = 0 | f[9],
            tp = 8191 & tc,
            tm = tc >>> 13;
          (r.negative = t.negative ^ e.negative),
            (r.length = 19),
            (i = Math.imul(l, L)),
            (n = ((n = Math.imul(l, Q)) + Math.imul(d, L)) | 0),
            (o = Math.imul(d, Q));
          var tg = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (i = Math.imul(p, L)),
            (n = ((n = Math.imul(p, Q)) + Math.imul(m, L)) | 0),
            (o = Math.imul(m, Q)),
            (i = (i + Math.imul(l, J)) | 0),
            (n = ((n = (n + Math.imul(l, Y)) | 0) + Math.imul(d, J)) | 0),
            (o = (o + Math.imul(d, Y)) | 0);
          var tA = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tA >>> 26)) | 0),
            (tA &= 67108863),
            (i = Math.imul(A, L)),
            (n = ((n = Math.imul(A, Q)) + Math.imul(v, L)) | 0),
            (o = Math.imul(v, Q)),
            (i = (i + Math.imul(p, J)) | 0),
            (n = ((n = (n + Math.imul(p, Y)) | 0) + Math.imul(m, J)) | 0),
            (o = (o + Math.imul(m, Y)) | 0),
            (i = (i + Math.imul(l, K)) | 0),
            (n = ((n = (n + Math.imul(l, j)) | 0) + Math.imul(d, K)) | 0),
            (o = (o + Math.imul(d, j)) | 0);
          var tv = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tv >>> 26)) | 0),
            (tv &= 67108863),
            (i = Math.imul(y, L)),
            (n = ((n = Math.imul(y, Q)) + Math.imul(w, L)) | 0),
            (o = Math.imul(w, Q)),
            (i = (i + Math.imul(A, J)) | 0),
            (n = ((n = (n + Math.imul(A, Y)) | 0) + Math.imul(v, J)) | 0),
            (o = (o + Math.imul(v, Y)) | 0),
            (i = (i + Math.imul(p, K)) | 0),
            (n = ((n = (n + Math.imul(p, j)) | 0) + Math.imul(m, K)) | 0),
            (o = (o + Math.imul(m, j)) | 0),
            (i = (i + Math.imul(l, V)) | 0),
            (n = ((n = (n + Math.imul(l, W)) | 0) + Math.imul(d, V)) | 0),
            (o = (o + Math.imul(d, W)) | 0);
          var tb = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tb >>> 26)) | 0),
            (tb &= 67108863),
            (i = Math.imul(E, L)),
            (n = ((n = Math.imul(E, Q)) + Math.imul(S, L)) | 0),
            (o = Math.imul(S, Q)),
            (i = (i + Math.imul(y, J)) | 0),
            (n = ((n = (n + Math.imul(y, Y)) | 0) + Math.imul(w, J)) | 0),
            (o = (o + Math.imul(w, Y)) | 0),
            (i = (i + Math.imul(A, K)) | 0),
            (n = ((n = (n + Math.imul(A, j)) | 0) + Math.imul(v, K)) | 0),
            (o = (o + Math.imul(v, j)) | 0),
            (i = (i + Math.imul(p, V)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(m, V)) | 0),
            (o = (o + Math.imul(m, W)) | 0),
            (i = (i + Math.imul(l, $)) | 0),
            (n = ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(d, $)) | 0),
            (o = (o + Math.imul(d, tt)) | 0);
          var ty = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (i = Math.imul(B, L)),
            (n = ((n = Math.imul(B, Q)) + Math.imul(N, L)) | 0),
            (o = Math.imul(N, Q)),
            (i = (i + Math.imul(E, J)) | 0),
            (n = ((n = (n + Math.imul(E, Y)) | 0) + Math.imul(S, J)) | 0),
            (o = (o + Math.imul(S, Y)) | 0),
            (i = (i + Math.imul(y, K)) | 0),
            (n = ((n = (n + Math.imul(y, j)) | 0) + Math.imul(w, K)) | 0),
            (o = (o + Math.imul(w, j)) | 0),
            (i = (i + Math.imul(A, V)) | 0),
            (n = ((n = (n + Math.imul(A, W)) | 0) + Math.imul(v, V)) | 0),
            (o = (o + Math.imul(v, W)) | 0),
            (i = (i + Math.imul(p, $)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
            (o = (o + Math.imul(m, tt)) | 0),
            (i = (i + Math.imul(l, tr)) | 0),
            (n = ((n = (n + Math.imul(l, ti)) | 0) + Math.imul(d, tr)) | 0),
            (o = (o + Math.imul(d, ti)) | 0);
          var tw = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tw >>> 26)) | 0),
            (tw &= 67108863),
            (i = Math.imul(x, L)),
            (n = ((n = Math.imul(x, Q)) + Math.imul(_, L)) | 0),
            (o = Math.imul(_, Q)),
            (i = (i + Math.imul(B, J)) | 0),
            (n = ((n = (n + Math.imul(B, Y)) | 0) + Math.imul(N, J)) | 0),
            (o = (o + Math.imul(N, Y)) | 0),
            (i = (i + Math.imul(E, K)) | 0),
            (n = ((n = (n + Math.imul(E, j)) | 0) + Math.imul(S, K)) | 0),
            (o = (o + Math.imul(S, j)) | 0),
            (i = (i + Math.imul(y, V)) | 0),
            (n = ((n = (n + Math.imul(y, W)) | 0) + Math.imul(w, V)) | 0),
            (o = (o + Math.imul(w, W)) | 0),
            (i = (i + Math.imul(A, $)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (i = (i + Math.imul(p, tr)) | 0),
            (n = ((n = (n + Math.imul(p, ti)) | 0) + Math.imul(m, tr)) | 0),
            (o = (o + Math.imul(m, ti)) | 0),
            (i = (i + Math.imul(l, to)) | 0),
            (n = ((n = (n + Math.imul(l, ts)) | 0) + Math.imul(d, to)) | 0),
            (o = (o + Math.imul(d, ts)) | 0);
          var tM = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tM >>> 26)) | 0),
            (tM &= 67108863),
            (i = Math.imul(U, L)),
            (n = ((n = Math.imul(U, Q)) + Math.imul(T, L)) | 0),
            (o = Math.imul(T, Q)),
            (i = (i + Math.imul(x, J)) | 0),
            (n = ((n = (n + Math.imul(x, Y)) | 0) + Math.imul(_, J)) | 0),
            (o = (o + Math.imul(_, Y)) | 0),
            (i = (i + Math.imul(B, K)) | 0),
            (n = ((n = (n + Math.imul(B, j)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, j)) | 0),
            (i = (i + Math.imul(E, V)) | 0),
            (n = ((n = (n + Math.imul(E, W)) | 0) + Math.imul(S, V)) | 0),
            (o = (o + Math.imul(S, W)) | 0),
            (i = (i + Math.imul(y, $)) | 0),
            (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(w, $)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (i = (i + Math.imul(A, tr)) | 0),
            (n = ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(v, tr)) | 0),
            (o = (o + Math.imul(v, ti)) | 0),
            (i = (i + Math.imul(p, to)) | 0),
            (n = ((n = (n + Math.imul(p, ts)) | 0) + Math.imul(m, to)) | 0),
            (o = (o + Math.imul(m, ts)) | 0),
            (i = (i + Math.imul(l, th)) | 0),
            (n = ((n = (n + Math.imul(l, tu)) | 0) + Math.imul(d, th)) | 0),
            (o = (o + Math.imul(d, tu)) | 0);
          var tE = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tE >>> 26)) | 0),
            (tE &= 67108863),
            (i = Math.imul(F, L)),
            (n = ((n = Math.imul(F, Q)) + Math.imul(O, L)) | 0),
            (o = Math.imul(O, Q)),
            (i = (i + Math.imul(U, J)) | 0),
            (n = ((n = (n + Math.imul(U, Y)) | 0) + Math.imul(T, J)) | 0),
            (o = (o + Math.imul(T, Y)) | 0),
            (i = (i + Math.imul(x, K)) | 0),
            (n = ((n = (n + Math.imul(x, j)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, j)) | 0),
            (i = (i + Math.imul(B, V)) | 0),
            (n = ((n = (n + Math.imul(B, W)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (i = (i + Math.imul(E, $)) | 0),
            (n = ((n = (n + Math.imul(E, tt)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (i = (i + Math.imul(y, tr)) | 0),
            (n = ((n = (n + Math.imul(y, ti)) | 0) + Math.imul(w, tr)) | 0),
            (o = (o + Math.imul(w, ti)) | 0),
            (i = (i + Math.imul(A, to)) | 0),
            (n = ((n = (n + Math.imul(A, ts)) | 0) + Math.imul(v, to)) | 0),
            (o = (o + Math.imul(v, ts)) | 0),
            (i = (i + Math.imul(p, th)) | 0),
            (n = ((n = (n + Math.imul(p, tu)) | 0) + Math.imul(m, th)) | 0),
            (o = (o + Math.imul(m, tu)) | 0),
            (i = (i + Math.imul(l, tl)) | 0),
            (n = ((n = (n + Math.imul(l, td)) | 0) + Math.imul(d, tl)) | 0),
            (o = (o + Math.imul(d, td)) | 0);
          var tS = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tS >>> 26)) | 0),
            (tS &= 67108863),
            (i = Math.imul(P, L)),
            (n = ((n = Math.imul(P, Q)) + Math.imul(q, L)) | 0),
            (o = Math.imul(q, Q)),
            (i = (i + Math.imul(F, J)) | 0),
            (n = ((n = (n + Math.imul(F, Y)) | 0) + Math.imul(O, J)) | 0),
            (o = (o + Math.imul(O, Y)) | 0),
            (i = (i + Math.imul(U, K)) | 0),
            (n = ((n = (n + Math.imul(U, j)) | 0) + Math.imul(T, K)) | 0),
            (o = (o + Math.imul(T, j)) | 0),
            (i = (i + Math.imul(x, V)) | 0),
            (n = ((n = (n + Math.imul(x, W)) | 0) + Math.imul(_, V)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (i = (i + Math.imul(B, $)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (i = (i + Math.imul(E, tr)) | 0),
            (n = ((n = (n + Math.imul(E, ti)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, ti)) | 0),
            (i = (i + Math.imul(y, to)) | 0),
            (n = ((n = (n + Math.imul(y, ts)) | 0) + Math.imul(w, to)) | 0),
            (o = (o + Math.imul(w, ts)) | 0),
            (i = (i + Math.imul(A, th)) | 0),
            (n = ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(v, th)) | 0),
            (o = (o + Math.imul(v, tu)) | 0),
            (i = (i + Math.imul(p, tl)) | 0),
            (n = ((n = (n + Math.imul(p, td)) | 0) + Math.imul(m, tl)) | 0),
            (o = (o + Math.imul(m, td)) | 0),
            (i = (i + Math.imul(l, tp)) | 0),
            (n = ((n = (n + Math.imul(l, tm)) | 0) + Math.imul(d, tp)) | 0),
            (o = (o + Math.imul(d, tm)) | 0);
          var tI = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 67108863),
            (i = Math.imul(P, J)),
            (n = ((n = Math.imul(P, Y)) + Math.imul(q, J)) | 0),
            (o = Math.imul(q, Y)),
            (i = (i + Math.imul(F, K)) | 0),
            (n = ((n = (n + Math.imul(F, j)) | 0) + Math.imul(O, K)) | 0),
            (o = (o + Math.imul(O, j)) | 0),
            (i = (i + Math.imul(U, V)) | 0),
            (n = ((n = (n + Math.imul(U, W)) | 0) + Math.imul(T, V)) | 0),
            (o = (o + Math.imul(T, W)) | 0),
            (i = (i + Math.imul(x, $)) | 0),
            (n = ((n = (n + Math.imul(x, tt)) | 0) + Math.imul(_, $)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(B, tr)) | 0),
            (n = ((n = (n + Math.imul(B, ti)) | 0) + Math.imul(N, tr)) | 0),
            (o = (o + Math.imul(N, ti)) | 0),
            (i = (i + Math.imul(E, to)) | 0),
            (n = ((n = (n + Math.imul(E, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (i = (i + Math.imul(y, th)) | 0),
            (n = ((n = (n + Math.imul(y, tu)) | 0) + Math.imul(w, th)) | 0),
            (o = (o + Math.imul(w, tu)) | 0),
            (i = (i + Math.imul(A, tl)) | 0),
            (n = ((n = (n + Math.imul(A, td)) | 0) + Math.imul(v, tl)) | 0),
            (o = (o + Math.imul(v, td)) | 0),
            (i = (i + Math.imul(p, tp)) | 0),
            (n = ((n = (n + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0),
            (o = (o + Math.imul(m, tm)) | 0);
          var tB = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 67108863),
            (i = Math.imul(P, K)),
            (n = ((n = Math.imul(P, j)) + Math.imul(q, K)) | 0),
            (o = Math.imul(q, j)),
            (i = (i + Math.imul(F, V)) | 0),
            (n = ((n = (n + Math.imul(F, W)) | 0) + Math.imul(O, V)) | 0),
            (o = (o + Math.imul(O, W)) | 0),
            (i = (i + Math.imul(U, $)) | 0),
            (n = ((n = (n + Math.imul(U, tt)) | 0) + Math.imul(T, $)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (i = (i + Math.imul(x, tr)) | 0),
            (n = ((n = (n + Math.imul(x, ti)) | 0) + Math.imul(_, tr)) | 0),
            (o = (o + Math.imul(_, ti)) | 0),
            (i = (i + Math.imul(B, to)) | 0),
            (n = ((n = (n + Math.imul(B, ts)) | 0) + Math.imul(N, to)) | 0),
            (o = (o + Math.imul(N, ts)) | 0),
            (i = (i + Math.imul(E, th)) | 0),
            (n = ((n = (n + Math.imul(E, tu)) | 0) + Math.imul(S, th)) | 0),
            (o = (o + Math.imul(S, tu)) | 0),
            (i = (i + Math.imul(y, tl)) | 0),
            (n = ((n = (n + Math.imul(y, td)) | 0) + Math.imul(w, tl)) | 0),
            (o = (o + Math.imul(w, td)) | 0),
            (i = (i + Math.imul(A, tp)) | 0),
            (n = ((n = (n + Math.imul(A, tm)) | 0) + Math.imul(v, tp)) | 0),
            (o = (o + Math.imul(v, tm)) | 0);
          var tN = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tN >>> 26)) | 0),
            (tN &= 67108863),
            (i = Math.imul(P, V)),
            (n = ((n = Math.imul(P, W)) + Math.imul(q, V)) | 0),
            (o = Math.imul(q, W)),
            (i = (i + Math.imul(F, $)) | 0),
            (n = ((n = (n + Math.imul(F, tt)) | 0) + Math.imul(O, $)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (i = (i + Math.imul(U, tr)) | 0),
            (n = ((n = (n + Math.imul(U, ti)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, ti)) | 0),
            (i = (i + Math.imul(x, to)) | 0),
            (n = ((n = (n + Math.imul(x, ts)) | 0) + Math.imul(_, to)) | 0),
            (o = (o + Math.imul(_, ts)) | 0),
            (i = (i + Math.imul(B, th)) | 0),
            (n = ((n = (n + Math.imul(B, tu)) | 0) + Math.imul(N, th)) | 0),
            (o = (o + Math.imul(N, tu)) | 0),
            (i = (i + Math.imul(E, tl)) | 0),
            (n = ((n = (n + Math.imul(E, td)) | 0) + Math.imul(S, tl)) | 0),
            (o = (o + Math.imul(S, td)) | 0),
            (i = (i + Math.imul(y, tp)) | 0),
            (n = ((n = (n + Math.imul(y, tm)) | 0) + Math.imul(w, tp)) | 0),
            (o = (o + Math.imul(w, tm)) | 0);
          var tC = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tC >>> 26)) | 0),
            (tC &= 67108863),
            (i = Math.imul(P, $)),
            (n = ((n = Math.imul(P, tt)) + Math.imul(q, $)) | 0),
            (o = Math.imul(q, tt)),
            (i = (i + Math.imul(F, tr)) | 0),
            (n = ((n = (n + Math.imul(F, ti)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, ti)) | 0),
            (i = (i + Math.imul(U, to)) | 0),
            (n = ((n = (n + Math.imul(U, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (i = (i + Math.imul(x, th)) | 0),
            (n = ((n = (n + Math.imul(x, tu)) | 0) + Math.imul(_, th)) | 0),
            (o = (o + Math.imul(_, tu)) | 0),
            (i = (i + Math.imul(B, tl)) | 0),
            (n = ((n = (n + Math.imul(B, td)) | 0) + Math.imul(N, tl)) | 0),
            (o = (o + Math.imul(N, td)) | 0),
            (i = (i + Math.imul(E, tp)) | 0),
            (n = ((n = (n + Math.imul(E, tm)) | 0) + Math.imul(S, tp)) | 0),
            (o = (o + Math.imul(S, tm)) | 0);
          var tx = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tx >>> 26)) | 0),
            (tx &= 67108863),
            (i = Math.imul(P, tr)),
            (n = ((n = Math.imul(P, ti)) + Math.imul(q, tr)) | 0),
            (o = Math.imul(q, ti)),
            (i = (i + Math.imul(F, to)) | 0),
            (n = ((n = (n + Math.imul(F, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (i = (i + Math.imul(U, th)) | 0),
            (n = ((n = (n + Math.imul(U, tu)) | 0) + Math.imul(T, th)) | 0),
            (o = (o + Math.imul(T, tu)) | 0),
            (i = (i + Math.imul(x, tl)) | 0),
            (n = ((n = (n + Math.imul(x, td)) | 0) + Math.imul(_, tl)) | 0),
            (o = (o + Math.imul(_, td)) | 0),
            (i = (i + Math.imul(B, tp)) | 0),
            (n = ((n = (n + Math.imul(B, tm)) | 0) + Math.imul(N, tp)) | 0),
            (o = (o + Math.imul(N, tm)) | 0);
          var t_ = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (t_ >>> 26)) | 0),
            (t_ &= 67108863),
            (i = Math.imul(P, to)),
            (n = ((n = Math.imul(P, ts)) + Math.imul(q, to)) | 0),
            (o = Math.imul(q, ts)),
            (i = (i + Math.imul(F, th)) | 0),
            (n = ((n = (n + Math.imul(F, tu)) | 0) + Math.imul(O, th)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (i = (i + Math.imul(U, tl)) | 0),
            (n = ((n = (n + Math.imul(U, td)) | 0) + Math.imul(T, tl)) | 0),
            (o = (o + Math.imul(T, td)) | 0),
            (i = (i + Math.imul(x, tp)) | 0),
            (n = ((n = (n + Math.imul(x, tm)) | 0) + Math.imul(_, tp)) | 0),
            (o = (o + Math.imul(_, tm)) | 0);
          var tR = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tR >>> 26)) | 0),
            (tR &= 67108863),
            (i = Math.imul(P, th)),
            (n = ((n = Math.imul(P, tu)) + Math.imul(q, th)) | 0),
            (o = Math.imul(q, tu)),
            (i = (i + Math.imul(F, tl)) | 0),
            (n = ((n = (n + Math.imul(F, td)) | 0) + Math.imul(O, tl)) | 0),
            (o = (o + Math.imul(O, td)) | 0),
            (i = (i + Math.imul(U, tp)) | 0),
            (n = ((n = (n + Math.imul(U, tm)) | 0) + Math.imul(T, tp)) | 0),
            (o = (o + Math.imul(T, tm)) | 0);
          var tU = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tU >>> 26)) | 0),
            (tU &= 67108863),
            (i = Math.imul(P, tl)),
            (n = ((n = Math.imul(P, td)) + Math.imul(q, tl)) | 0),
            (o = Math.imul(q, td)),
            (i = (i + Math.imul(F, tp)) | 0),
            (n = ((n = (n + Math.imul(F, tm)) | 0) + Math.imul(O, tp)) | 0),
            (o = (o + Math.imul(O, tm)) | 0);
          var tT = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tT >>> 26)) | 0),
            (tT &= 67108863),
            (i = Math.imul(P, tp)),
            (n = ((n = Math.imul(P, tm)) + Math.imul(q, tp)) | 0),
            (o = Math.imul(q, tm));
          var tD = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          return (
            (u = (((o + (n >>> 13)) | 0) + (tD >>> 26)) | 0),
            (tD &= 67108863),
            (h[0] = tg),
            (h[1] = tA),
            (h[2] = tv),
            (h[3] = tb),
            (h[4] = ty),
            (h[5] = tw),
            (h[6] = tM),
            (h[7] = tE),
            (h[8] = tS),
            (h[9] = tI),
            (h[10] = tB),
            (h[11] = tN),
            (h[12] = tC),
            (h[13] = tx),
            (h[14] = t_),
            (h[15] = tR),
            (h[16] = tU),
            (h[17] = tT),
            (h[18] = tD),
            0 !== u && ((h[19] = u), r.length++),
            r
          );
        };
        function g(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
            var s = n;
            n = 0;
            for (
              var f = 67108863 & i,
                h = Math.min(o, e.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= h;
              u++
            ) {
              var a = o - u,
                l = (0 | t.words[a]) * (0 | e.words[u]),
                d = 67108863 & l;
              (s = (s + ((l / 67108864) | 0)) | 0),
                (f = 67108863 & (d = (d + f) | 0)),
                (n += (s = (s + (d >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = f), (i = s), (s = n);
          }
          return 0 !== i ? (r.words[o] = i) : r.length--, r._strip();
        }
        Math.imul || (m = p),
          (n.prototype.mulTo = function (t, e) {
            var r,
              i = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : i < 63
              ? p(this, t, e)
              : g(this, t, e);
          }),
          (n.prototype.mul = function (t) {
            var e = new n(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (n.prototype.mulf = function (t) {
            var e = new n(null);
            return (e.words = Array(this.length + t.length)), g(this, t, e);
          }),
          (n.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (n.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), r("number" == typeof t), r(t < 67108864);
            for (var i = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                s = (67108863 & o) + (67108863 & i);
              (i >>= 26),
                (i += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[n] = 67108863 & s);
            }
            return (
              0 !== i && ((this.words[n] = i), this.length++),
              e ? this.ineg() : this
            );
          }),
          (n.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (n.prototype.sqr = function () {
            return this.mul(this);
          }),
          (n.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (n.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26;
                e[r] = (t.words[i] >>> n) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new n(1);
            for (
              var r = this, i = 0;
              i < e.length && 0 === e[i];
              i++, r = r.sqr()
            );
            if (++i < e.length)
              for (var o = r.sqr(); i < e.length; i++, o = o.sqr())
                0 !== e[i] && (r = r.mul(o));
            return r;
          }),
          (n.prototype.iushln = function (t) {
            r("number" == typeof t && t >= 0);
            var e,
              i = t % 26,
              n = (t - i) / 26,
              o = (67108863 >>> (26 - i)) << (26 - i);
            if (0 !== i) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var f = this.words[e] & o,
                  h = ((0 | this.words[e]) - f) << i;
                (this.words[e] = h | s), (s = f >>> (26 - i));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== n) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + n] = this.words[e];
              for (e = 0; e < n; e++) this.words[e] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (n.prototype.ishln = function (t) {
            return r(0 === this.negative), this.iushln(t);
          }),
          (n.prototype.iushrn = function (t, e, i) {
            r("number" == typeof t && t >= 0),
              (n = e ? (e - (e % 26)) / 26 : 0);
            var n,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              f = 67108863 ^ ((67108863 >>> o) << o);
            if (((n -= s), (n = Math.max(0, n)), i)) {
              for (var h = 0; h < s; h++) i.words[h] = this.words[h];
              i.length = s;
            }
            if (0 !== s) {
              if (this.length > s)
                for (this.length -= s, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + s];
              else (this.words[0] = 0), (this.length = 1);
            }
            var u = 0;
            for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
              var a = 0 | this.words[h];
              (this.words[h] = (u << (26 - o)) | (a >>> o)), (u = a & f);
            }
            return (
              i && 0 !== u && (i.words[i.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (n.prototype.ishrn = function (t, e, i) {
            return r(0 === this.negative), this.iushrn(t, e, i);
          }),
          (n.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (n.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (n.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (n.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (n.prototype.testn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
              i = (t - e) / 26;
            return !(this.length <= i) && !!(this.words[i] & (1 << e));
          }),
          (n.prototype.imaskn = function (t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
              i = (t - e) / 26;
            return (r(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= i)
              ? this
              : (0 !== e && i++,
                (this.length = Math.min(i, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (n.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (n.prototype.iaddn = function (t) {
            return (
              r("number" == typeof t),
              r(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? (1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0))
                    : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                  this)
                : this._iaddn(t)
            );
          }),
          (n.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (n.prototype.isubn = function (t) {
            if ((r("number" == typeof t), r(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (n.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (n.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (n.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (n.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (n.prototype._ishlnsubmul = function (t, e, i) {
            var n,
              o = t.length + i;
            this._expand(o);
            var s,
              f = 0;
            for (n = 0; n < t.length; n++) {
              s = (0 | this.words[n + i]) + f;
              var h = (0 | t.words[n]) * e;
              (s -= 67108863 & h),
                (f = (s >> 26) - ((h / 67108864) | 0)),
                (this.words[n + i] = 67108863 & s);
            }
            for (; n < this.length - i; n++)
              (f = (s = (0 | this.words[n + i]) + f) >> 26),
                (this.words[n + i] = 67108863 & s);
            if (0 === f) return this._strip();
            for (r(-1 === f), f = 0, n = 0; n < this.length; n++)
              (f = (s = -(0 | this.words[n]) + f) >> 26),
                (this.words[n] = 67108863 & s);
            return (this.negative = 1), this._strip();
          }),
          (n.prototype._wordDiv = function (t, e) {
            var r = this.length - t.length,
              i = this.clone(),
              o = t,
              s = 0 | o.words[o.length - 1];
            0 != (r = 26 - this._countBits(s)) &&
              ((o = o.ushln(r)), i.iushln(r), (s = 0 | o.words[o.length - 1]));
            var f,
              h = i.length - o.length;
            if ("mod" !== e) {
              ((f = new n(null)).length = h + 1), (f.words = Array(f.length));
              for (var u = 0; u < f.length; u++) f.words[u] = 0;
            }
            var a = i.clone()._ishlnsubmul(o, 1, h);
            0 === a.negative && ((i = a), f && (f.words[h] = 1));
            for (var l = h - 1; l >= 0; l--) {
              var d =
                (0 | i.words[o.length + l]) * 67108864 +
                (0 | i.words[o.length + l - 1]);
              for (
                d = Math.min((d / s) | 0, 67108863), i._ishlnsubmul(o, d, l);
                0 !== i.negative;

              )
                d--,
                  (i.negative = 0),
                  i._ishlnsubmul(o, 1, l),
                  i.isZero() || (i.negative ^= 1);
              f && (f.words[l] = d);
            }
            return (
              f && f._strip(),
              i._strip(),
              "div" !== e && 0 !== r && i.iushrn(r),
              { div: f || null, mod: i }
            );
          }),
          (n.prototype.divmod = function (t, e, i) {
            var o, s, f;
            return (r(!t.isZero()), this.isZero())
              ? { div: new n(0), mod: new n(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((f = this.neg().divmod(t, e)),
                "mod" !== e && (o = f.div.neg()),
                "div" !== e &&
                  ((s = f.mod.neg()), i && 0 !== s.negative && s.iadd(t)),
                { div: o, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((f = this.divmod(t.neg(), e)),
                "mod" !== e && (o = f.div.neg()),
                { div: o, mod: f.mod })
              : this.negative & t.negative
              ? ((f = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = f.mod.neg()), i && 0 !== s.negative && s.isub(t)),
                { div: f.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new n(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new n(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new n(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (n.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (n.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (n.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (n.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (n.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), r(t <= 67108863);
            for (var i = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (i * n + (0 | this.words[o])) % t;
            return e ? -n : n;
          }),
          (n.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (n.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), r(t <= 67108863);
            for (var i = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * i;
              (this.words[n] = (o / t) | 0), (i = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (n.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (n.prototype.egcd = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
              i = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var o = new n(1), s = new n(0), f = new n(0), h = new n(1), u = 0;
              e.isEven() && i.isEven();

            )
              e.iushrn(1), i.iushrn(1), ++u;
            for (var a = i.clone(), l = e.clone(); !e.isZero(); ) {
              for (var d = 0, c = 1; !(e.words[0] & c) && d < 26; ++d, c <<= 1);
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (o.isOdd() || s.isOdd()) && (o.iadd(a), s.isub(l)),
                    o.iushrn(1),
                    s.iushrn(1);
              for (var p = 0, m = 1; !(i.words[0] & m) && p < 26; ++p, m <<= 1);
              if (p > 0)
                for (i.iushrn(p); p-- > 0; )
                  (f.isOdd() || h.isOdd()) && (f.iadd(a), h.isub(l)),
                    f.iushrn(1),
                    h.iushrn(1);
              e.cmp(i) >= 0
                ? (e.isub(i), o.isub(f), s.isub(h))
                : (i.isub(e), f.isub(o), h.isub(s));
            }
            return { a: f, b: h, gcd: i.iushln(u) };
          }),
          (n.prototype._invmp = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var e,
              i = this,
              o = t.clone();
            i = 0 !== i.negative ? i.umod(t) : i.clone();
            for (
              var s = new n(1), f = new n(0), h = o.clone();
              i.cmpn(1) > 0 && o.cmpn(1) > 0;

            ) {
              for (var u = 0, a = 1; !(i.words[0] & a) && u < 26; ++u, a <<= 1);
              if (u > 0)
                for (i.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(h), s.iushrn(1);
              for (var l = 0, d = 1; !(o.words[0] & d) && l < 26; ++l, d <<= 1);
              if (l > 0)
                for (o.iushrn(l); l-- > 0; )
                  f.isOdd() && f.iadd(h), f.iushrn(1);
              i.cmp(o) >= 0 ? (i.isub(o), s.isub(f)) : (o.isub(i), f.isub(s));
            }
            return 0 > (e = 0 === i.cmpn(1) ? s : f).cmpn(0) && e.iadd(t), e;
          }),
          (n.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var i = 0; e.isEven() && r.isEven(); i++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = e.cmp(r);
              if (n < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(i);
          }),
          (n.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (n.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (n.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (n.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (n.prototype.bincn = function (t) {
            r("number" == typeof t);
            var e = t % 26,
              i = (t - e) / 26,
              n = 1 << e;
            if (this.length <= i)
              return this._expand(i + 1), (this.words[i] |= n), this;
            for (var o = n, s = i; 0 !== o && s < this.length; s++) {
              var f = 0 | this.words[s];
              (f += o), (o = f >>> 26), (f &= 67108863), (this.words[s] = f);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (n.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (n.prototype.cmpn = function (t) {
            var e,
              i = t < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              i && (t = -t), r(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              e = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (n.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (n.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | t.words[r];
              if (i !== n) {
                i < n ? (e = -1) : i > n && (e = 1);
                break;
              }
            }
            return e;
          }),
          (n.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (n.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (n.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (n.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (n.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (n.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (n.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (n.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (n.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (n.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (n.red = function (t) {
            return new E(t);
          }),
          (n.prototype.toRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (n.prototype.fromRed = function () {
            return (
              r(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (n.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (n.prototype.forceRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (n.prototype.redAdd = function (t) {
            return (
              r(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (n.prototype.redIAdd = function (t) {
            return (
              r(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (n.prototype.redSub = function (t) {
            return (
              r(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (n.prototype.redISub = function (t) {
            return (
              r(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (n.prototype.redShl = function (t) {
            return (
              r(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (n.prototype.redMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (n.prototype.redIMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (n.prototype.redSqr = function () {
            return (
              r(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (n.prototype.redISqr = function () {
            return (
              r(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (n.prototype.redSqrt = function () {
            return (
              r(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (n.prototype.redInvm = function () {
            return (
              r(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (n.prototype.redNeg = function () {
            return (
              r(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (n.prototype.redPow = function (t) {
            return (
              r(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var A = { k256: null, p224: null, p192: null, p25519: null };
        function v(t, e) {
          (this.name = t),
            (this.p = new n(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new n(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function b() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function y() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function w() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function M() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function E(t) {
          if ("string" == typeof t) {
            var e = n._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            r(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function S(t) {
          E.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new n(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function () {
          var t = new n(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (v.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var i = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (v.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (v.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(b, v),
          (b.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), i = 0; i < r; i++)
              e.words[i] = t.words[i];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (e.words[e.length++] = 4194303 & n, i = 10; i < t.length; i++) {
              var o = 0 | t.words[i];
              (t.words[i - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
            }
            (n >>>= 22),
              (t.words[i - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (b.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 0 | t.words[r];
              (e += 977 * i),
                (t.words[r] = 67108863 & e),
                (e = 64 * i + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(y, v),
          i(w, v),
          i(M, v),
          (M.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = (0 | t.words[r]) * 19 + e,
                n = 67108863 & i;
              (i >>>= 26), (t.words[r] = n), (e = i);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (n._prime = function (t) {
            var e;
            if (A[t]) return A[t];
            if ("k256" === t) e = new b();
            else if ("p224" === t) e = new y();
            else if ("p192" === t) e = new w();
            else if ("p25519" === t) e = new M();
            else throw Error("Unknown prime " + t);
            return (A[t] = e), e;
          }),
          (E.prototype._verify1 = function (t) {
            r(0 === t.negative, "red works only with positives"),
              r(t.red, "red works only with red numbers");
          }),
          (E.prototype._verify2 = function (t, e) {
            r((t.negative | e.negative) == 0, "red works only with positives"),
              r(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (E.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (h(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (E.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (E.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (E.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (E.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (E.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (E.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (E.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (E.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (E.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (E.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (E.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((r(e % 2 == 1), 3 === e)) {
              var i = this.m.add(new n(1)).iushrn(2);
              return this.pow(t, i);
            }
            for (
              var o = this.m.subn(1), s = 0;
              !o.isZero() && 0 === o.andln(1);

            )
              s++, o.iushrn(1);
            r(!o.isZero());
            var f = new n(1).toRed(this),
              h = f.redNeg(),
              u = this.m.subn(1).iushrn(1),
              a = this.m.bitLength();
            for (
              a = new n(2 * a * a).toRed(this);
              0 !== this.pow(a, u).cmp(h);

            )
              a.redIAdd(h);
            for (
              var l = this.pow(a, o),
                d = this.pow(t, o.addn(1).iushrn(1)),
                c = this.pow(t, o),
                p = s;
              0 !== c.cmp(f);

            ) {
              for (var m = c, g = 0; 0 !== m.cmp(f); g++) m = m.redSqr();
              r(g < p);
              var A = this.pow(l, new n(1).iushln(p - g - 1));
              (d = d.redMul(A)), (l = A.redSqr()), (c = c.redMul(l)), (p = g);
            }
            return d;
          }),
          (E.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (E.prototype.pow = function (t, e) {
            if (e.isZero()) return new n(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new n(1).toRed(this)), (r[1] = t);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
            var o = r[0],
              s = 0,
              f = 0,
              h = e.bitLength() % 26;
            for (0 === h && (h = 26), i = e.length - 1; i >= 0; i--) {
              for (var u = e.words[i], a = h - 1; a >= 0; a--) {
                var l = (u >> a) & 1;
                if ((o !== r[0] && (o = this.sqr(o)), 0 === l && 0 === s)) {
                  f = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= l),
                  (4 != ++f && (0 !== i || 0 !== a)) ||
                    ((o = this.mul(o, r[s])), (f = 0), (s = 0));
              }
              h = 26;
            }
            return o;
          }),
          (E.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (E.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (n.mont = function (t) {
            return new S(t);
          }),
          i(S, E),
          (S.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (S.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (S.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (S.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
            var r = t.mul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              o = r.isub(i).iushrn(this.shift),
              s = o;
            return (
              o.cmp(this.m) >= 0
                ? (s = o.isub(this.m))
                : 0 > o.cmpn(0) && (s = o.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (S.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(z, y);
      var Q = z.exports;
      let H = "bignumber/5.7.0";
      var J = Q.BN;
      let Y = new x(H),
        G = {},
        K = !1;
      class j {
        constructor(t, e) {
          t !== G &&
            Y.throwError(
              "cannot call constructor directly; use BigNumber.from",
              x.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return V(W(this).fromTwos(t));
        }
        toTwos(t) {
          return V(W(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? j.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return V(W(this).add(W(t)));
        }
        sub(t) {
          return V(W(this).sub(W(t)));
        }
        div(t) {
          return (
            j.from(t).isZero() && Z("division-by-zero", "div"),
            V(W(this).div(W(t)))
          );
        }
        mul(t) {
          return V(W(this).mul(W(t)));
        }
        mod(t) {
          let e = W(t);
          return e.isNeg() && Z("division-by-zero", "mod"), V(W(this).umod(e));
        }
        pow(t) {
          let e = W(t);
          return e.isNeg() && Z("negative-power", "pow"), V(W(this).pow(e));
        }
        and(t) {
          let e = W(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              Z("unbound-bitwise-result", "and"),
            V(W(this).and(e))
          );
        }
        or(t) {
          let e = W(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              Z("unbound-bitwise-result", "or"),
            V(W(this).or(e))
          );
        }
        xor(t) {
          let e = W(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              Z("unbound-bitwise-result", "xor"),
            V(W(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && Z("negative-width", "mask"),
            V(W(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && Z("negative-width", "shl"),
            V(W(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && Z("negative-width", "shr"),
            V(W(this).shrn(t))
          );
        }
        eq(t) {
          return W(this).eq(W(t));
        }
        lt(t) {
          return W(this).lt(W(t));
        }
        lte(t) {
          return W(this).lte(W(t));
        }
        gt(t) {
          return W(this).gt(W(t));
        }
        gte(t) {
          return W(this).gte(W(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return W(this).isZero();
        }
        toNumber() {
          try {
            return W(this).toNumber();
          } catch {
            Z("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch {}
          return Y.throwError(
            "this platform does not support BigInt",
            x.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? K ||
                  ((K = !0),
                  Y.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? Y.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    x.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : Y.throwError(
                    "BigNumber.toString does not accept parameters",
                    x.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            W(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof j) return t;
          if ("string" == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new j(G, X(t))
              : t.match(/^-?[0-9]+$/)
              ? new j(G, X(new J(t)))
              : Y.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" == typeof t)
            return (
              t % 1 && Z("underflow", "BigNumber.from", t),
              (t >= 9007199254740991 || t <= -9007199254740991) &&
                Z("overflow", "BigNumber.from", t),
              j.from(String(t))
            );
          if ("bigint" == typeof t) return j.from(t.toString());
          if (D(t)) return j.from(P(t));
          if (t) {
            if (t.toHexString) {
              let e = t.toHexString();
              if ("string" == typeof e) return j.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && "BigNumber" === t.type && (e = t.hex),
                "string" == typeof e &&
                  (O(e) || ("-" === e[0] && O(e.substring(1)))))
              )
                return j.from(e);
            }
          }
          return Y.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !!(t && t._isBigNumber);
        }
      }
      function X(t) {
        if ("string" != typeof t) return X(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] &&
              Y.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = X(t)) ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        for (
          t.length % 2 && (t = "0x0" + t.substring(2));
          t.length > 4 && "0x00" === t.substring(0, 4);

        )
          t = "0x" + t.substring(4);
        return t;
      }
      function V(t) {
        return j.from(X(t));
      }
      function W(t) {
        let e = j.from(t).toHexString();
        return "-" === e[0]
          ? new J("-" + e.substring(3), 16)
          : new J(e.substring(2), 16);
      }
      function Z(t, e, r) {
        let i = { fault: t, operation: e };
        return (
          null != r && (i.value = r), Y.throwError(t, x.errors.NUMERIC_FAULT, i)
        );
      }
      let $ = new x(H),
        tt = {},
        te = j.from(0),
        tr = j.from(-1);
      function ti(t, e, r, i) {
        let n = { fault: e, operation: r };
        return (
          void 0 !== i && (n.value = i),
          $.throwError(t, x.errors.NUMERIC_FAULT, n)
        );
      }
      let tn = "0";
      for (; tn.length < 256; ) tn += tn;
      function to(t) {
        if ("number" != typeof t)
          try {
            t = j.from(t).toNumber();
          } catch {}
        return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + tn.substring(0, t)
          : $.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function ts(t, e) {
        null == e && (e = 0);
        let r = to(e),
          i = (t = j.from(t)).lt(te);
        i && (t = t.mul(tr));
        let n = t.mod(r).toString();
        for (; n.length < r.length - 1; ) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let o = t.div(r).toString();
        return (t = 1 === r.length ? o : o + "." + n), i && (t = "-" + t), t;
      }
      function tf(t, e) {
        null == e && (e = 0);
        let r = to(e);
        ("string" == typeof t && t.match(/^-?[0-9.]+$/)) ||
          $.throwArgumentError("invalid decimal value", "value", t);
        let i = "-" === t.substring(0, 1);
        i && (t = t.substring(1)),
          "." === t && $.throwArgumentError("missing value", "value", t);
        let n = t.split(".");
        n.length > 2 &&
          $.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          s = n[1];
        for (o || (o = "0"), s || (s = "0"); "0" === s[s.length - 1]; )
          s = s.substring(0, s.length - 1);
        for (
          s.length > r.length - 1 &&
            ti(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === s && (s = "0");
          s.length < r.length - 1;

        )
          s += "0";
        let f = j.from(o),
          h = j.from(s),
          u = f.mul(r).add(h);
        return i && (u = u.mul(tr)), u;
      }
      class th {
        constructor(t, e, r, i) {
          t !== tt &&
            $.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              x.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = e),
            (this.width = r),
            (this.decimals = i),
            (this.name =
              (e ? "" : "u") + "fixed" + String(r) + "x" + String(i)),
            (this._multiplier = to(i)),
            Object.freeze(this);
        }
        static from(t) {
          if (t instanceof th) return t;
          "number" == typeof t && (t = `fixed128x${t}`);
          let e = !0,
            r = 128,
            i = 18;
          if ("string" == typeof t) {
            if ("fixed" !== t) {
              if ("ufixed" === t) e = !1;
              else {
                let n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                n || $.throwArgumentError("invalid fixed format", "format", t),
                  (e = "u" !== n[1]),
                  (r = parseInt(n[2])),
                  (i = parseInt(n[3]));
              }
            }
          } else if (t) {
            let n = (e, r, i) =>
              null == t[e]
                ? i
                : (typeof t[e] !== r &&
                    $.throwArgumentError(
                      "invalid fixed format (" + e + " not " + r + ")",
                      "format." + e,
                      t[e]
                    ),
                  t[e]);
            (e = n("signed", "boolean", e)),
              (r = n("width", "number", r)),
              (i = n("decimals", "number", i));
          }
          return (
            r % 8 &&
              $.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r
              ),
            i > 80 &&
              $.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i
              ),
            new th(tt, e, r, i)
          );
        }
      }
      class tu {
        constructor(t, e, r, i) {
          t !== tt &&
            $.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              x.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.format = i),
            (this._hex = e),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            $.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          let e = tf(this._value, this.format.decimals),
            r = tf(t._value, t.format.decimals);
          return tu.fromValue(e.add(r), this.format.decimals, this.format);
        }
        subUnsafe(t) {
          this._checkFormat(t);
          let e = tf(this._value, this.format.decimals),
            r = tf(t._value, t.format.decimals);
          return tu.fromValue(e.sub(r), this.format.decimals, this.format);
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          let e = tf(this._value, this.format.decimals),
            r = tf(t._value, t.format.decimals);
          return tu.fromValue(
            e.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          let e = tf(this._value, this.format.decimals),
            r = tf(t._value, t.format.decimals);
          return tu.fromValue(
            e.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format
          );
        }
        floor() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = tu.from(t[0], this.format),
            r = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (e = e.subUnsafe(ta.toFormat(e.format))),
            e
          );
        }
        ceiling() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = tu.from(t[0], this.format),
            r = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (e = e.addUnsafe(ta.toFormat(e.format))),
            e
          );
        }
        round(t) {
          null == t && (t = 0);
          let e = this.toString().split(".");
          if (
            (1 === e.length && e.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              $.throwArgumentError("invalid decimal count", "decimals", t),
            e[1].length <= t)
          )
            return this;
          let r = tu.from("1" + tn.substring(0, t), this.format),
            i = tl.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(t) {
          return null == t
            ? this._hex
            : (t % 8 && $.throwArgumentError("invalid byte width", "width", t),
              q(
                j
                  .from(this._hex)
                  .fromTwos(this.format.width)
                  .toTwos(t)
                  .toHexString(),
                t / 8
              ));
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return tu.fromString(this._value, t);
        }
        static fromValue(t, e, r) {
          var i;
          return (
            null != r ||
              null == e ||
              (null != (i = e) &&
                (j.isBigNumber(i) ||
                  ("number" == typeof i && i % 1 == 0) ||
                  ("string" == typeof i && i.match(/^-?[0-9]+$/)) ||
                  O(i) ||
                  "bigint" == typeof i ||
                  D(i))) ||
              ((r = e), (e = null)),
            null == e && (e = 0),
            null == r && (r = "fixed"),
            tu.fromString(ts(t, e), th.from(r))
          );
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          let r = th.from(e),
            i = tf(t, r.decimals);
          !r.signed &&
            i.lt(te) &&
            ti("unsigned value cannot be negative", "overflow", "value", t);
          let n = null;
          return new tu(
            tt,
            r.signed
              ? i.toTwos(r.width).toHexString()
              : q(i.toHexString(), r.width / 8),
            ts(i, r.decimals),
            r
          );
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          let r = th.from(e);
          if (F(t).length > r.width / 8) throw Error("overflow");
          let i = j.from(t);
          return (
            r.signed && (i = i.fromTwos(r.width)),
            new tu(
              tt,
              i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
              ts(i, r.decimals),
              r
            )
          );
        }
        static from(t, e) {
          if ("string" == typeof t) return tu.fromString(t, e);
          if (D(t)) return tu.fromBytes(t, e);
          try {
            return tu.fromValue(t, 0, e);
          } catch (t) {
            if (t.code !== x.errors.INVALID_ARGUMENT) throw t;
          }
          return $.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !!(t && t._isFixedNumber);
        }
      }
      let ta = tu.from(1),
        tl = tu.from("0.5"),
        td = new x("strings/5.7.0");
      function tc(t, e, r, i, n) {
        if (t === u.BAD_PREFIX || t === u.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let i = e + 1; i < r.length && r[i] >> 6 == 2; i++) t++;
          return t;
        }
        return t === u.OVERRUN ? r.length - e - 1 : 0;
      }
      function tp(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            i[(r += parseInt(n[0], 16))] = e(n[1]);
          }),
          i
        );
      }
      function tm(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          return (
            1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1"),
            { l: e + parseInt(r[0], 16), h: (e = parseInt(r[1], 16)) }
          );
        });
      }
      ((c = h || (h = {})).current = ""),
        (c.NFC = "NFC"),
        (c.NFD = "NFD"),
        (c.NFKC = "NFKC"),
        (c.NFKD = "NFKD"),
        ((p = u || (u = {})).UNEXPECTED_CONTINUE =
          "unexpected continuation byte"),
        (p.BAD_PREFIX = "bad codepoint prefix"),
        (p.OVERRUN = "string overrun"),
        (p.MISSING_CONTINUE = "missing continuation byte"),
        (p.OUT_OF_RANGE = "out of UTF-8 range"),
        (p.UTF16_SURROGATE = "UTF-16 surrogate"),
        (p.OVERLONG = "overlong representation"),
        Object.freeze({
          error: function (t, e, r, i, n) {
            return td.throwArgumentError(
              `invalid codepoint at offset ${e}; ${t}`,
              "bytes",
              r
            );
          },
          ignore: tc,
          replace: function (t, e, r, i, n) {
            return t === u.OVERLONG
              ? (i.push(n), 0)
              : (i.push(65533), tc(t, e, r));
          },
        }),
        tm(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        tp(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        tp(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        tp(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (t) {
            if (t.length % 4 != 0) throw Error("bad data");
            let e = [];
            for (let r = 0; r < t.length; r += 4)
              e.push(parseInt(t.substring(r, r + 4), 16));
            return e;
          }
        ),
        tm(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      let tg = "hash/5.7.0";
      function tA(t, e) {
        null == e && (e = 1);
        let r = [],
          i = r.forEach,
          n = function (t, e) {
            i.call(t, function (t) {
              e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t);
            });
          };
        return n(t, e), r;
      }
      function tv(t, e) {
        let r = Array(t);
        for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
        return r;
      }
      function tb(t, e) {
        let r = tv(t(), t),
          i = t(),
          n = tv(i, t),
          o = (function (t, e) {
            let r = Array(t);
            for (let i = 0; i < t; i++) r[i] = 1 + e();
            return r;
          })(i, t);
        for (let t = 0; t < i; t++)
          for (let e = 0; e < o[t]; e++) r.push(n[t] + e);
        return e ? r.map((t) => e[t]) : r;
      }
      function ty(t, e, r) {
        let i = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let n = 0; n < e; n++)
          (function (t, e) {
            let r = Array(t);
            for (let n = 0, o = 0; n < t; n++) {
              var i;
              r[n] = o += 1 & (i = e()) ? ~i >> 1 : i >> 1;
            }
            return r;
          })(t, r).forEach((t, e) => i[e].push(t));
        return i;
      }
      let tw =
        ((o = (function (t) {
          let e = 0;
          function r() {
            return (t[e++] << 8) | t[e++];
          }
          let i = r(),
            n = 1,
            o = [0, 1];
          for (let t = 1; t < i; t++) o.push((n += r()));
          let s = r(),
            f = e;
          e += s;
          let h = 0,
            u = 0;
          function a() {
            return 0 == h && ((u = (u << 8) | t[e++]), (h = 8)), (u >> --h) & 1;
          }
          let l = 0;
          for (let t = 0; t < 31; t++) l = (l << 1) | a();
          let d = [],
            c = 0,
            p = 2147483648;
          for (;;) {
            let t = Math.floor(((l - c + 1) * n - 1) / p),
              e = 0,
              r = i;
            for (; r - e > 1; ) {
              let i = (e + r) >>> 1;
              t < o[i] ? (r = i) : (e = i);
            }
            if (0 == e) break;
            d.push(e);
            let s = c + Math.floor((p * o[e]) / n),
              f = c + Math.floor((p * o[e + 1]) / n) - 1;
            for (; !((s ^ f) & 1073741824); )
              (l = ((l << 1) & 2147483647) | a()),
                (s = (s << 1) & 2147483647),
                (f = ((f << 1) & 2147483647) | 1);
            for (; s & ~f & 536870912; )
              (l = (1073741824 & l) | ((l << 1) & 1073741823) | a()),
                (s = (s << 1) ^ 1073741824),
                (f = ((1073741824 ^ f) << 1) | 1073741824 | 1);
            (c = s), (p = 1 + f - s);
          }
          let m = i - 4;
          return d.map((e) => {
            switch (e - m) {
              case 3:
                return m + 65792 + ((t[f++] << 16) | (t[f++] << 8) | t[f++]);
              case 2:
                return m + 256 + ((t[f++] << 8) | t[f++]);
              case 1:
                return m + t[f++];
              default:
                return e - 1;
            }
          });
        })(
          (function (t) {
            t = atob(t);
            let e = [];
            for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
            return F(e);
          })(
            "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"
          )
        )),
        (n = 0),
        () => o[n++]);
      tb(tw),
        tb(tw),
        (function (t) {
          let e = [];
          for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(
              (function (t, e) {
                let r = 1 + e(),
                  i = e(),
                  n = (function (t) {
                    let e = [];
                    for (;;) {
                      let r = t();
                      if (0 == r) break;
                      e.push(r);
                    }
                    return e;
                  })(e);
                return tA(
                  ty(n.length, 1 + t, e).map((t, e) => {
                    let o = t[0],
                      s = t.slice(1);
                    return Array(n[e])
                      .fill(void 0)
                      .map((t, e) => {
                        let n = e * i;
                        return [o + e * r, s.map((t) => t + n)];
                      });
                  })
                );
              })(r, t)
            );
          }
          for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(ty(1 + t(), 1 + r, t).map((t) => [t[0], t.slice(1)]));
          }
          (function (t) {
            let e = {};
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              e[i[0]] = i[1];
            }
          })(tA(e));
        })(tw),
        (i = tb(tw).sort((t, e) => t - e)),
        (function t() {
          let e = [];
          for (;;) {
            let r = tb(tw, i);
            if (0 == r.length) break;
            e.push({ set: new Set(r), node: t() });
          }
          e.sort((t, e) => e.set.size - t.set.size);
          let r = tw();
          return {
            branches: e,
            valid: r % 3,
            fe0f: !!(1 & (r = (r / 3) | 0)),
            save: 1 == (r >>= 1),
            check: 2 == r,
          };
        })(),
        new x(tg),
        new Uint8Array(32).fill(0),
        new x("rlp/5.7.0"),
        new x("address/5.7.0");
      let tM = {};
      for (let t = 0; t < 10; t++) tM[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        tM[String.fromCharCode(65 + t)] = String(10 + t);
      new x("properties/5.7.0"),
        new x(tg),
        new Uint8Array(32).fill(0),
        j.from(-1);
      let tE = j.from(0),
        tS = j.from(1);
      j.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
        q(tS.toHexString(), 32),
        q(tE.toHexString(), 32);
      var tI = {},
        tB = {};
      function tN(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      tN.equal = function (t, e, r) {
        if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e);
      };
      var tC = { exports: {} };
      "function" == typeof Object.create
        ? (tC.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (tC.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
      var tx = tC.exports;
      function t_(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function tR(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function tU(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (tB.inherits = tx),
        (tB.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" == typeof t) {
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (t = "0" + t),
                    n = 0;
                  n < t.length;
                  n += 2
                )
                  r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var i = 0, n = 0; n < t.length; n++) {
                var o,
                  s,
                  f = t.charCodeAt(n);
                f < 128
                  ? (r[i++] = f)
                  : (f < 2048
                      ? (r[i++] = (f >> 6) | 192)
                      : (((o = t),
                        (s = n),
                        (64512 & o.charCodeAt(s)) != 55296 ||
                          s < 0 ||
                          s + 1 >= o.length ||
                          (64512 & o.charCodeAt(s + 1)) != 56320)
                          ? (r[i++] = (f >> 12) | 224)
                          : ((f =
                              65536 +
                              ((1023 & f) << 10) +
                              (1023 & t.charCodeAt(++n))),
                            (r[i++] = (f >> 18) | 240),
                            (r[i++] = ((f >> 12) & 63) | 128)),
                        (r[i++] = ((f >> 6) & 63) | 128)),
                    (r[i++] = (63 & f) | 128));
              }
          } else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
          return r;
        }),
        (tB.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += tR(t[r].toString(16));
          return e;
        }),
        (tB.htonl = t_),
        (tB.toHex32 = function (t, e) {
          for (var r = "", i = 0; i < t.length; i++) {
            var n = t[i];
            "little" === e && (n = t_(n)), (r += tU(n.toString(16)));
          }
          return r;
        }),
        (tB.zero2 = tR),
        (tB.zero8 = tU),
        (tB.join32 = function (t, e, r, i) {
          var n,
            o = r - e;
          tN(o % 4 == 0);
          for (var s = Array(o / 4), f = 0, h = e; f < s.length; f++, h += 4)
            (n =
              "big" === i
                ? (t[h] << 24) | (t[h + 1] << 16) | (t[h + 2] << 8) | t[h + 3]
                : (t[h + 3] << 24) | (t[h + 2] << 16) | (t[h + 1] << 8) | t[h]),
              (s[f] = n >>> 0);
          return s;
        }),
        (tB.split32 = function (t, e) {
          for (
            var r = Array(4 * t.length), i = 0, n = 0;
            i < t.length;
            i++, n += 4
          ) {
            var o = t[i];
            "big" === e
              ? ((r[n] = o >>> 24),
                (r[n + 1] = (o >>> 16) & 255),
                (r[n + 2] = (o >>> 8) & 255),
                (r[n + 3] = 255 & o))
              : ((r[n + 3] = o >>> 24),
                (r[n + 2] = (o >>> 16) & 255),
                (r[n + 1] = (o >>> 8) & 255),
                (r[n] = 255 & o));
          }
          return r;
        }),
        (tB.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (tB.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (tB.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (tB.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (tB.sum32_4 = function (t, e, r, i) {
          return (t + e + r + i) >>> 0;
        }),
        (tB.sum32_5 = function (t, e, r, i, n) {
          return (t + e + r + i + n) >>> 0;
        }),
        (tB.sum64 = function (t, e, r, i) {
          var n = t[e],
            o = (i + t[e + 1]) >>> 0;
          (t[e] = ((o < i ? 1 : 0) + r + n) >>> 0), (t[e + 1] = o);
        }),
        (tB.sum64_hi = function (t, e, r, i) {
          return (((e + i) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (tB.sum64_lo = function (t, e, r, i) {
          return (e + i) >>> 0;
        }),
        (tB.sum64_4_hi = function (t, e, r, i, n, o, s, f) {
          var h,
            u = e;
          return (
            (t +
              r +
              n +
              s +
              (0 +
                ((u = (u + i) >>> 0) < e ? 1 : 0) +
                ((u = (u + o) >>> 0) < o ? 1 : 0) +
                ((u = (u + f) >>> 0) < f ? 1 : 0))) >>>
            0
          );
        }),
        (tB.sum64_4_lo = function (t, e, r, i, n, o, s, f) {
          return (e + i + o + f) >>> 0;
        }),
        (tB.sum64_5_hi = function (t, e, r, i, n, o, s, f, h, u) {
          var a,
            l = e;
          return (
            (t +
              r +
              n +
              s +
              h +
              (0 +
                ((l = (l + i) >>> 0) < e ? 1 : 0) +
                ((l = (l + o) >>> 0) < o ? 1 : 0) +
                ((l = (l + f) >>> 0) < f ? 1 : 0) +
                ((l = (l + u) >>> 0) < u ? 1 : 0))) >>>
            0
          );
        }),
        (tB.sum64_5_lo = function (t, e, r, i, n, o, s, f, h, u) {
          return (e + i + o + f + u) >>> 0;
        }),
        (tB.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (tB.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (tB.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (tB.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
      var tT = {};
      function tD() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (tT.BlockHash = tD),
        (tD.prototype.update = function (t, e) {
          if (
            ((t = tB.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = tB.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (tD.prototype.digest = function (t) {
          return (
            this.update(this._pad()), tN(null === this.pending), this._digest(t)
          );
        }),
        (tD.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            i = Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) i[n++] = 0;
            (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (t >>> 24) & 255),
              (i[n++] = (t >>> 16) & 255),
              (i[n++] = (t >>> 8) & 255),
              (i[n++] = 255 & t);
          } else
            for (
              i[n++] = 255 & t,
                i[n++] = (t >>> 8) & 255,
                i[n++] = (t >>> 16) & 255,
                i[n++] = (t >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              i[n++] = 0;
          return i;
        });
      var tF = {},
        tO = {},
        tk = tB.rotr32;
      function tP(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      (tO.ft_1 = function (t, e, r, i) {
        return 0 === t
          ? (e & r) ^ (~e & i)
          : 1 === t || 3 === t
          ? e ^ r ^ i
          : 2 === t
          ? tP(e, r, i)
          : void 0;
      }),
        (tO.ch32 = function (t, e, r) {
          return (t & e) ^ (~t & r);
        }),
        (tO.maj32 = tP),
        (tO.p32 = function (t, e, r) {
          return t ^ e ^ r;
        }),
        (tO.s0_256 = function (t) {
          return tk(t, 2) ^ tk(t, 13) ^ tk(t, 22);
        }),
        (tO.s1_256 = function (t) {
          return tk(t, 6) ^ tk(t, 11) ^ tk(t, 25);
        }),
        (tO.g0_256 = function (t) {
          return tk(t, 7) ^ tk(t, 18) ^ (t >>> 3);
        }),
        (tO.g1_256 = function (t) {
          return tk(t, 17) ^ tk(t, 19) ^ (t >>> 10);
        });
      var tq = tB.rotl32,
        tz = tB.sum32,
        tL = tB.sum32_5,
        tQ = tO.ft_1,
        tH = tT.BlockHash,
        tJ = [1518500249, 1859775393, 2400959708, 3395469782];
      function tY() {
        if (!(this instanceof tY)) return new tY();
        tH.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = Array(80));
      }
      tB.inherits(tY, tH),
        (tY.blockSize = 512),
        (tY.outSize = 160),
        (tY.hmacStrength = 80),
        (tY.padLength = 64),
        (tY.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = tq(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            o = this.h[1],
            s = this.h[2],
            f = this.h[3],
            h = this.h[4];
          for (i = 0; i < r.length; i++) {
            var u = ~~(i / 20),
              a = tL(tq(n, 5), tQ(u, o, s, f), h, r[i], tJ[u]);
            (h = f), (f = s), (s = tq(o, 30)), (o = n), (n = a);
          }
          (this.h[0] = tz(this.h[0], n)),
            (this.h[1] = tz(this.h[1], o)),
            (this.h[2] = tz(this.h[2], s)),
            (this.h[3] = tz(this.h[3], f)),
            (this.h[4] = tz(this.h[4], h));
        }),
        (tY.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        });
      var tG = tB.sum32,
        tK = tB.sum32_4,
        tj = tB.sum32_5,
        tX = tO.ch32,
        tV = tO.maj32,
        tW = tO.s0_256,
        tZ = tO.s1_256,
        t$ = tO.g0_256,
        t0 = tO.g1_256,
        t1 = tT.BlockHash,
        t2 = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function t3() {
        if (!(this instanceof t3)) return new t3();
        t1.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = t2),
          (this.W = Array(64));
      }
      function t6() {
        if (!(this instanceof t6)) return new t6();
        t3.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      tB.inherits(t3, t1),
        (t3.blockSize = 512),
        (t3.outSize = 256),
        (t3.hmacStrength = 192),
        (t3.padLength = 64),
        (t3.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = tK(t0(r[i - 2]), r[i - 7], t$(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            o = this.h[1],
            s = this.h[2],
            f = this.h[3],
            h = this.h[4],
            u = this.h[5],
            a = this.h[6],
            l = this.h[7];
          for (tN(this.k.length === r.length), i = 0; i < r.length; i++) {
            var d = tj(l, tZ(h), tX(h, u, a), this.k[i], r[i]),
              c = tG(tW(n), tV(n, o, s));
            (l = a),
              (a = u),
              (u = h),
              (h = tG(f, d)),
              (f = s),
              (s = o),
              (o = n),
              (n = tG(d, c));
          }
          (this.h[0] = tG(this.h[0], n)),
            (this.h[1] = tG(this.h[1], o)),
            (this.h[2] = tG(this.h[2], s)),
            (this.h[3] = tG(this.h[3], f)),
            (this.h[4] = tG(this.h[4], h)),
            (this.h[5] = tG(this.h[5], u)),
            (this.h[6] = tG(this.h[6], a)),
            (this.h[7] = tG(this.h[7], l));
        }),
        (t3.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        }),
        tB.inherits(t6, t3),
        (t6.blockSize = 512),
        (t6.outSize = 224),
        (t6.hmacStrength = 192),
        (t6.padLength = 64),
        (t6.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h.slice(0, 7), "big")
            : tB.split32(this.h.slice(0, 7), "big");
        });
      var t8 = tB.rotr64_hi,
        t4 = tB.rotr64_lo,
        t5 = tB.shr64_hi,
        t7 = tB.shr64_lo,
        t9 = tB.sum64,
        et = tB.sum64_hi,
        ee = tB.sum64_lo,
        er = tB.sum64_4_hi,
        ei = tB.sum64_4_lo,
        en = tB.sum64_5_hi,
        eo = tB.sum64_5_lo,
        es = tT.BlockHash,
        ef = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function eh() {
        if (!(this instanceof eh)) return new eh();
        es.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = ef),
          (this.W = Array(160));
      }
      function eu() {
        if (!(this instanceof eu)) return new eu();
        eh.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      tB.inherits(eh, es),
        (eh.blockSize = 1024),
        (eh.outSize = 512),
        (eh.hmacStrength = 192),
        (eh.padLength = 128),
        (eh.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
          for (; i < r.length; i += 2) {
            var n = (function (t, e) {
                var r = t8(t, e, 19) ^ t8(e, t, 29) ^ t5(t, e, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[i - 4], r[i - 3]),
              o = (function (t, e) {
                var r = t4(t, e, 19) ^ t4(e, t, 29) ^ t7(t, e, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[i - 4], r[i - 3]),
              s = r[i - 14],
              f = r[i - 13],
              h = (function (t, e) {
                var r = t8(t, e, 1) ^ t8(t, e, 8) ^ t5(t, e, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[i - 30], r[i - 29]),
              u = (function (t, e) {
                var r = t4(t, e, 1) ^ t4(t, e, 8) ^ t7(t, e, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[i - 30], r[i - 29]),
              a = r[i - 32],
              l = r[i - 31];
            (r[i] = er(n, o, s, f, h, u, a, l)),
              (r[i + 1] = ei(n, o, s, f, h, u, a, l));
          }
        }),
        (eh.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            o = this.h[2],
            s = this.h[3],
            f = this.h[4],
            h = this.h[5],
            u = this.h[6],
            a = this.h[7],
            l = this.h[8],
            d = this.h[9],
            c = this.h[10],
            p = this.h[11],
            m = this.h[12],
            g = this.h[13],
            A = this.h[14],
            v = this.h[15];
          tN(this.k.length === r.length);
          for (var b = 0; b < r.length; b += 2) {
            var y = A,
              w = v,
              M = (function (t, e) {
                var r = t8(t, e, 14) ^ t8(t, e, 18) ^ t8(e, t, 9);
                return r < 0 && (r += 4294967296), r;
              })(l, d),
              E = (function (t, e) {
                var r = t4(t, e, 14) ^ t4(t, e, 18) ^ t4(e, t, 9);
                return r < 0 && (r += 4294967296), r;
              })(l, d),
              S = (function (t, e, r, i, n) {
                var o = (t & r) ^ (~t & n);
                return o < 0 && (o += 4294967296), o;
              })(l, 0, c, 0, m),
              I = (function (t, e, r, i, n, o) {
                var s = (e & i) ^ (~e & o);
                return s < 0 && (s += 4294967296), s;
              })(0, d, 0, p, 0, g),
              B = this.k[b],
              N = this.k[b + 1],
              C = r[b],
              x = r[b + 1],
              _ = en(y, w, M, E, S, I, B, N, C, x),
              R = eo(y, w, M, E, S, I, B, N, C, x);
            y = (function (t, e) {
              var r = t8(t, e, 28) ^ t8(e, t, 2) ^ t8(e, t, 7);
              return r < 0 && (r += 4294967296), r;
            })(i, n);
            var U = et(
                y,
                (w = (function (t, e) {
                  var r = t4(t, e, 28) ^ t4(e, t, 2) ^ t4(e, t, 7);
                  return r < 0 && (r += 4294967296), r;
                })(i, n)),
                (M = (function (t, e, r, i, n) {
                  var o = (t & r) ^ (t & n) ^ (r & n);
                  return o < 0 && (o += 4294967296), o;
                })(i, 0, o, 0, f)),
                (E = (function (t, e, r, i, n, o) {
                  var s = (e & i) ^ (e & o) ^ (i & o);
                  return s < 0 && (s += 4294967296), s;
                })(0, n, 0, s, 0, h))
              ),
              T = ee(y, w, M, E);
            (A = m),
              (v = g),
              (m = c),
              (g = p),
              (c = l),
              (p = d),
              (l = et(u, a, _, R)),
              (d = ee(a, a, _, R)),
              (u = f),
              (a = h),
              (f = o),
              (h = s),
              (o = i),
              (s = n),
              (i = et(_, R, U, T)),
              (n = ee(_, R, U, T));
          }
          t9(this.h, 0, i, n),
            t9(this.h, 2, o, s),
            t9(this.h, 4, f, h),
            t9(this.h, 6, u, a),
            t9(this.h, 8, l, d),
            t9(this.h, 10, c, p),
            t9(this.h, 12, m, g),
            t9(this.h, 14, A, v);
        }),
        (eh.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        }),
        tB.inherits(eu, eh),
        (eu.blockSize = 1024),
        (eu.outSize = 384),
        (eu.hmacStrength = 192),
        (eu.padLength = 128),
        (eu.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h.slice(0, 12), "big")
            : tB.split32(this.h.slice(0, 12), "big");
        }),
        (tF.sha1 = tY),
        (tF.sha224 = t6),
        (tF.sha256 = t3),
        (tF.sha384 = eu),
        (tF.sha512 = eh);
      var ea = {},
        el = tB.rotl32,
        ed = tB.sum32,
        ec = tB.sum32_3,
        ep = tB.sum32_4,
        em = tT.BlockHash;
      function eg() {
        if (!(this instanceof eg)) return new eg();
        em.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function eA(t, e, r, i) {
        return t <= 15
          ? e ^ r ^ i
          : t <= 31
          ? (e & r) | (~e & i)
          : t <= 47
          ? (e | ~r) ^ i
          : t <= 63
          ? (e & i) | (r & ~i)
          : e ^ (r | ~i);
      }
      tB.inherits(eg, em),
        (ea.ripemd160 = eg),
        (eg.blockSize = 512),
        (eg.outSize = 160),
        (eg.hmacStrength = 192),
        (eg.padLength = 64),
        (eg.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              o = this.h[3],
              s = this.h[4],
              f = r,
              h = i,
              u = n,
              a = o,
              l = s,
              d = 0;
            d < 80;
            d++
          ) {
            var c,
              p,
              m = ed(
                el(
                  ep(
                    r,
                    eA(d, i, n, o),
                    t[ev[d] + e],
                    (c = d) <= 15
                      ? 0
                      : c <= 31
                      ? 1518500249
                      : c <= 47
                      ? 1859775393
                      : c <= 63
                      ? 2400959708
                      : 2840853838
                  ),
                  ey[d]
                ),
                s
              );
            (r = s),
              (s = o),
              (o = el(n, 10)),
              (n = i),
              (i = m),
              (m = ed(
                el(
                  ep(
                    f,
                    eA(79 - d, h, u, a),
                    t[eb[d] + e],
                    (p = d) <= 15
                      ? 1352829926
                      : p <= 31
                      ? 1548603684
                      : p <= 47
                      ? 1836072691
                      : p <= 63
                      ? 2053994217
                      : 0
                  ),
                  ew[d]
                ),
                l
              )),
              (f = l),
              (l = a),
              (a = el(u, 10)),
              (u = h),
              (h = m);
          }
          (m = ec(this.h[1], n, a)),
            (this.h[1] = ec(this.h[2], o, l)),
            (this.h[2] = ec(this.h[3], s, f)),
            (this.h[3] = ec(this.h[4], r, h)),
            (this.h[4] = ec(this.h[0], i, u)),
            (this.h[0] = m);
        }),
        (eg.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "little")
            : tB.split32(this.h, "little");
        });
      var ev = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        eb = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        ey = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        ew = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
      function eM(t, e, r) {
        if (!(this instanceof eM)) return new eM(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(tB.toArray(e, r));
      }
      function eE(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(t, e ?? r.path);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      (eM.prototype._init = function (t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
          tN(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
          t[e] ^= 106;
        this.outer = new this.Hash().update(t);
      }),
        (eM.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (eM.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        }),
        (tI.utils = tB),
        (tI.common = tT),
        (tI.sha = tF),
        (tI.ripemd = ea),
        (tI.hmac = eM),
        (tI.sha1 = tI.sha.sha1),
        (tI.sha256 = tI.sha.sha256),
        (tI.sha224 = tI.sha.sha224),
        (tI.sha384 = tI.sha.sha384),
        (tI.sha512 = tI.sha.sha512),
        (tI.ripemd160 = tI.ripemd.ripemd160);
      var eS = eI;
      function eI(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      eI.equal = function (t, e, r) {
        if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e);
      };
      var eB = eE(function (t, e) {
          function r(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function i(t) {
            for (var e = "", i = 0; i < t.length; i++)
              e += r(t[i].toString(16));
            return e;
          }
          (e.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" != typeof t) {
              for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
              return r;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (t = "0" + t);
              for (var i = 0; i < t.length; i += 2)
                r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i),
                  o = n >> 8,
                  s = 255 & n;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (e.zero2 = r),
            (e.toHex = i),
            (e.encode = function (t, e) {
              return "hex" === e ? i(t) : t;
            });
        }),
        eN = eE(function (t, e) {
          (e.assert = eS),
            (e.toArray = eB.toArray),
            (e.zero2 = eB.zero2),
            (e.toHex = eB.toHex),
            (e.encode = eB.encode),
            (e.getNAF = function (t, e, r) {
              var i = Array(Math.max(t.bitLength(), r) + 1);
              i.fill(0);
              for (
                var n = 1 << (e + 1), o = t.clone(), s = 0;
                s < i.length;
                s++
              ) {
                var f,
                  h = o.andln(n - 1);
                o.isOdd()
                  ? ((f = h > (n >> 1) - 1 ? (n >> 1) - h : h), o.isubn(f))
                  : (f = 0),
                  (i[s] = f),
                  o.iushrn(1);
              }
              return i;
            }),
            (e.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || e.cmpn(-o) > 0; ) {
                var s,
                  f,
                  h = (t.andln(3) + n) & 3,
                  u = (e.andln(3) + o) & 3;
                3 === h && (h = -1),
                  3 === u && (u = -1),
                  (s =
                    1 & h
                      ? (3 == (i = (t.andln(7) + n) & 7) || 5 === i) && 2 === u
                        ? -h
                        : h
                      : 0),
                  r[0].push(s),
                  (f =
                    1 & u
                      ? (3 == (i = (e.andln(7) + o) & 7) || 5 === i) && 2 === h
                        ? -u
                        : u
                      : 0),
                  r[1].push(f),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * o === f + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (e.cachedProperty = function (t, e, r) {
              var i = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
              };
            }),
            (e.parseBytes = function (t) {
              return "string" == typeof t ? e.toArray(t, "hex") : t;
            }),
            (e.intFromLE = function (t) {
              return new Q(t, "hex", "le");
            });
        }),
        eC = eN.getNAF,
        ex = eN.getJSF,
        e_ = eN.assert;
      function eR(t, e) {
        (this.type = t),
          (this.p = new Q(e.p, 16)),
          (this.red = e.prime ? Q.red(e.prime) : Q.mont(this.p)),
          (this.zero = new Q(0).toRed(this.red)),
          (this.one = new Q(1).toRed(this.red)),
          (this.two = new Q(2).toRed(this.red)),
          (this.n = e.n && new Q(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function eU(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (eR.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (eR.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (eR.prototype._fixedNafMul = function (t, e) {
          e_(t.precomputed);
          var r = t._getDoubles(),
            i = eC(e, 1, this._bitLength),
            n = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
          n /= 3;
          var o,
            s,
            f = [];
          for (o = 0; o < i.length; o += r.step) {
            s = 0;
            for (var h = o + r.step - 1; h >= o; h--) s = (s << 1) + i[h];
            f.push(s);
          }
          for (
            var u = this.jpoint(null, null, null),
              a = this.jpoint(null, null, null),
              l = n;
            l > 0;
            l--
          ) {
            for (o = 0; o < f.length; o++)
              (s = f[o]) === l
                ? (a = a.mixedAdd(r.points[o]))
                : s === -l && (a = a.mixedAdd(r.points[o].neg()));
            u = u.add(a);
          }
          return u.toP();
        }),
        (eR.prototype._wnafMul = function (t, e) {
          var r = 4,
            i = t._getNAFPoints(r);
          r = i.wnd;
          for (
            var n = i.points,
              o = eC(e, r, this._bitLength),
              s = this.jpoint(null, null, null),
              f = o.length - 1;
            f >= 0;
            f--
          ) {
            for (var h = 0; f >= 0 && 0 === o[f]; f--) h++;
            if ((f >= 0 && h++, (s = s.dblp(h)), f < 0)) break;
            var u = o[f];
            e_(0 !== u),
              (s =
                "affine" === t.type
                  ? u > 0
                    ? s.mixedAdd(n[(u - 1) >> 1])
                    : s.mixedAdd(n[(-u - 1) >> 1].neg())
                  : u > 0
                  ? s.add(n[(u - 1) >> 1])
                  : s.add(n[(-u - 1) >> 1].neg()));
          }
          return "affine" === t.type ? s.toP() : s;
        }),
        (eR.prototype._wnafMulAdd = function (t, e, r, i, n) {
          var o,
            s,
            f,
            h = this._wnafT1,
            u = this._wnafT2,
            a = this._wnafT3,
            l = 0;
          for (o = 0; o < i; o++) {
            var d = (f = e[o])._getNAFPoints(t);
            (h[o] = d.wnd), (u[o] = d.points);
          }
          for (o = i - 1; o >= 1; o -= 2) {
            var c = o - 1,
              p = o;
            if (1 !== h[c] || 1 !== h[p]) {
              (a[c] = eC(r[c], h[c], this._bitLength)),
                (a[p] = eC(r[p], h[p], this._bitLength)),
                (l = Math.max(a[c].length, l)),
                (l = Math.max(a[p].length, l));
              continue;
            }
            var m = [e[c], null, null, e[p]];
            0 === e[c].y.cmp(e[p].y)
              ? ((m[1] = e[c].add(e[p])),
                (m[2] = e[c].toJ().mixedAdd(e[p].neg())))
              : 0 === e[c].y.cmp(e[p].y.redNeg())
              ? ((m[1] = e[c].toJ().mixedAdd(e[p])),
                (m[2] = e[c].add(e[p].neg())))
              : ((m[1] = e[c].toJ().mixedAdd(e[p])),
                (m[2] = e[c].toJ().mixedAdd(e[p].neg())));
            var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              A = ex(r[c], r[p]);
            for (
              l = Math.max(A[0].length, l),
                a[c] = Array(l),
                a[p] = Array(l),
                s = 0;
              s < l;
              s++
            ) {
              var v = 0 | A[0][s],
                b = 0 | A[1][s];
              (a[c][s] = g[(v + 1) * 3 + (b + 1)]), (a[p][s] = 0), (u[c] = m);
            }
          }
          var y = this.jpoint(null, null, null),
            w = this._wnafT4;
          for (o = l; o >= 0; o--) {
            for (var M = 0; o >= 0; ) {
              var E = !0;
              for (s = 0; s < i; s++)
                (w[s] = 0 | a[s][o]), 0 !== w[s] && (E = !1);
              if (!E) break;
              M++, o--;
            }
            if ((o >= 0 && M++, (y = y.dblp(M)), o < 0)) break;
            for (s = 0; s < i; s++) {
              var S = w[s];
              0 !== S &&
                (S > 0
                  ? (f = u[s][(S - 1) >> 1])
                  : S < 0 && (f = u[s][(-S - 1) >> 1].neg()),
                (y = "affine" === f.type ? y.mixedAdd(f) : y.add(f)));
            }
          }
          for (o = 0; o < i; o++) u[o] = null;
          return n ? y : y.toP();
        }),
        (eR.BasePoint = eU),
        (eU.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (eU.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (eR.prototype.decodePoint = function (t, e) {
          t = eN.toArray(t, e);
          var r = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0]
                ? e_(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && e_(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw Error("Unknown point format");
        }),
        (eU.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (eU.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (eU.prototype.encode = function (t, e) {
          return eN.encode(this._encode(e), t);
        }),
        (eU.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (eU.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (eU.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], i = this, n = 0; n < e; n += t) {
            for (var o = 0; o < t; o++) i = i.dbl();
            r.push(i);
          }
          return { step: t, points: r };
        }),
        (eU.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              i = 1 === r ? null : this.dbl(),
              n = 1;
            n < r;
            n++
          )
            e[n] = e[n - 1].add(i);
          return { wnd: t, points: e };
        }),
        (eU.prototype._getBeta = function () {
          return null;
        }),
        (eU.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var eT = eE(function (t) {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        eD = eN.assert;
      function eF(t) {
        eR.call(this, "short", t),
          (this.a = new Q(t.a, 16).toRed(this.red)),
          (this.b = new Q(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function eO(t, e, r, i) {
        eR.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new Q(e, 16)),
              (this.y = new Q(r, 16)),
              i &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function ek(t, e, r, i) {
        eR.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === i
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new Q(0)))
            : ((this.x = new Q(e, 16)),
              (this.y = new Q(r, 16)),
              (this.z = new Q(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      eT(eF, eR),
        (eF.prototype._getEndomorphism = function (t) {
          if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
            if (t.beta) e = new Q(t.beta, 16).toRed(this.red);
            else {
              var e,
                r,
                i,
                n = this._getEndoRoots(this.p);
              e = (e = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red);
            }
            if (t.lambda) r = new Q(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                ? (r = o[0])
                : ((r = o[1]),
                  eD(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (i = t.basis
                ? t.basis.map(function (t) {
                    return { a: new Q(t.a, 16), b: new Q(t.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: i }
            );
          }
        }),
        (eF.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : Q.mont(t),
            r = new Q(2).toRed(e).redInvm(),
            i = r.redNeg(),
            n = new Q(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
        }),
        (eF.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              i,
              n,
              o,
              s,
              f,
              h,
              u,
              a = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = t,
              d = this.n.clone(),
              c = new Q(1),
              p = new Q(0),
              m = new Q(0),
              g = new Q(1),
              A = 0;
            0 !== l.cmpn(0);

          ) {
            var v = d.div(l);
            (h = d.sub(v.mul(l))), (u = m.sub(v.mul(c)));
            var b = g.sub(v.mul(p));
            if (!i && 0 > h.cmp(a))
              (e = f.neg()), (r = c), (i = h.neg()), (n = u);
            else if (i && 2 == ++A) break;
            (f = h), (d = l), (l = h), (m = c), (c = u), (g = p), (p = b);
          }
          (o = h.neg()), (s = u);
          var y = i.sqr().add(n.sqr());
          return (
            o.sqr().add(s.sqr()).cmp(y) >= 0 && ((o = e), (s = r)),
            i.negative && ((i = i.neg()), (n = n.neg())),
            o.negative && ((o = o.neg()), (s = s.neg())),
            [
              { a: i, b: n },
              { a: o, b: s },
            ]
          );
        }),
        (eF.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            i = e[1],
            n = i.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            s = n.mul(r.a),
            f = o.mul(i.a),
            h = n.mul(r.b),
            u = o.mul(i.b);
          return { k1: t.sub(s).sub(f), k2: h.add(u).neg() };
        }),
        (eF.prototype.pointFromX = function (t, e) {
          (t = new Q(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            i = r.redSqrt();
          if (0 !== i.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var n = i.fromRed().isOdd();
          return ((e && !n) || (!e && n)) && (i = i.redNeg()), this.point(t, i);
        }),
        (eF.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            i = this.a.redMul(e),
            n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
          return 0 === r.redSqr().redISub(n).cmpn(0);
        }),
        (eF.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var s = this._endoSplit(e[o]),
              f = t[o],
              h = f._getBeta();
            s.k1.negative && (s.k1.ineg(), (f = f.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (h = h.neg(!0))),
              (i[2 * o] = f),
              (i[2 * o + 1] = h),
              (n[2 * o] = s.k1),
              (n[2 * o + 1] = s.k2);
          }
          for (
            var u = this._wnafMulAdd(1, i, n, 2 * o, r), a = 0;
            a < 2 * o;
            a++
          )
            (i[a] = null), (n[a] = null);
          return u;
        }),
        eT(eO, eR.BasePoint),
        (eF.prototype.point = function (t, e, r) {
          return new eO(this, t, e, r);
        }),
        (eF.prototype.pointFromJSON = function (t, e) {
          return eO.fromJSON(this, t, e);
        }),
        (eO.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                i = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i),
                  },
                });
            }
            return e;
          }
        }),
        (eO.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (eO.fromJSON = function (t, e, r) {
          "string" == typeof e && (e = JSON.parse(e));
          var i = t.point(e[0], e[1], r);
          if (!e[2]) return i;
          function n(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (i.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [i].concat(o.doubles.points.map(n)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [i].concat(o.naf.points.map(n)),
              },
            }),
            i
          );
        }),
        (eO.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (eO.prototype.isInfinity = function () {
          return this.inf;
        }),
        (eO.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
            return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            i = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, i);
        }),
        (eO.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            i = t.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
            o = n.redSqr().redISub(this.x.redAdd(this.x)),
            s = n.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (eO.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (eO.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (eO.prototype.mul = function (t) {
          return (
            (t = new Q(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (eO.prototype.mulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2);
        }),
        (eO.prototype.jmulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0);
        }),
        (eO.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (eO.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              i = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i),
              },
            };
          }
          return e;
        }),
        (eO.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        eT(ek, eR.BasePoint),
        (eF.prototype.jpoint = function (t, e, r) {
          return new ek(this, t, e, r);
        }),
        (ek.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            i = this.y.redMul(e).redMul(t);
          return this.curve.point(r, i);
        }),
        (ek.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (ek.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(e),
            n = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            f = i.redSub(n),
            h = o.redSub(s);
          if (0 === f.cmpn(0))
            return 0 !== h.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = f.redSqr(),
            a = u.redMul(f),
            l = i.redMul(u),
            d = h.redSqr().redIAdd(a).redISub(l).redISub(l),
            c = h.redMul(l.redISub(d)).redISub(o.redMul(a)),
            p = this.z.redMul(t.z).redMul(f);
          return this.curve.jpoint(d, c, p);
        }),
        (ek.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            i = t.x.redMul(e),
            n = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(i),
            f = n.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var h = s.redSqr(),
            u = h.redMul(s),
            a = r.redMul(h),
            l = f.redSqr().redIAdd(u).redISub(a).redISub(a),
            d = f.redMul(a.redISub(l)).redISub(n.redMul(u)),
            c = this.z.redMul(s);
          return this.curve.jpoint(l, d, c);
        }),
        (ek.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var e,
              r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            o = this.x,
            s = this.y,
            f = this.z,
            h = f.redSqr().redSqr(),
            u = s.redAdd(s);
          for (e = 0; e < t; e++) {
            var a = o.redSqr(),
              l = u.redSqr(),
              d = l.redSqr(),
              c = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(h)),
              p = o.redMul(l),
              m = c.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              A = c.redMul(g);
            A = A.redIAdd(A).redISub(d);
            var v = u.redMul(f);
            e + 1 < t && (h = h.redMul(d)), (o = m), (f = v), (u = A);
          }
          return this.curve.jpoint(o, u.redMul(n), f);
        }),
        (ek.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (ek.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              o = n.redSqr(),
              s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            s = s.redIAdd(s);
            var f = i.redAdd(i).redIAdd(i),
              h = f.redSqr().redISub(s).redISub(s),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = h),
              (e = f.redMul(s.redISub(h)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var a = this.x.redSqr(),
              l = this.y.redSqr(),
              d = l.redSqr(),
              c = this.x.redAdd(l).redSqr().redISub(a).redISub(d);
            c = c.redIAdd(c);
            var p = a.redAdd(a).redIAdd(a),
              m = p.redSqr(),
              g = d.redIAdd(d);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(c).redISub(c)),
              (e = p.redMul(c.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (ek.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              o = n.redSqr(),
              s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            s = s.redIAdd(s);
            var f = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
              h = f.redSqr().redISub(s).redISub(s);
            t = h;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = f.redMul(s.redISub(h)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var a = this.z.redSqr(),
              l = this.y.redSqr(),
              d = this.x.redMul(l),
              c = this.x.redSub(a).redMul(this.x.redAdd(a));
            c = c.redAdd(c).redIAdd(c);
            var p = d.redIAdd(d),
              m = (p = p.redIAdd(p)).redAdd(p);
            (t = c.redSqr().redISub(m)),
              (r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(a));
            var g = l.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (e = c.redMul(p.redISub(t)).redISub(g));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (ek.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            f = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
            h = e.redAdd(e),
            u = (h = h.redIAdd(h)).redMul(s),
            a = f.redSqr().redISub(u.redAdd(u)),
            l = u.redISub(a),
            d = s.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var c = f.redMul(l).redISub(d),
            p = r.redAdd(r).redMul(i);
          return this.curve.jpoint(a, c, p);
        }),
        (ek.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            i = e.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            o = n.redSqr(),
            s = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
            f = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            h = i.redIAdd(i);
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var u = n.redIAdd(s).redSqr().redISub(o).redISub(f).redISub(h),
            a = e.redMul(u);
          a = (a = a.redIAdd(a)).redIAdd(a);
          var l = this.x.redMul(f).redISub(a);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var d = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(f)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var c = this.z.redAdd(s).redSqr().redISub(r).redISub(f);
          return this.curve.jpoint(l, d, c);
        }),
        (ek.prototype.mul = function (t, e) {
          return (t = new Q(t, e)), this.curve._wnafMul(this, t);
        }),
        (ek.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var i = e.redMul(this.z),
            n = r.redMul(t.z);
          return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
        }),
        (ek.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (ek.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (ek.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var eP = eE(function (t, e) {
          (e.base = eR), (e.short = eF), (e.mont = null), (e.edwards = null);
        }),
        eq = eE(function (t, e) {
          var r,
            i = eN.assert;
          function n(t) {
            "short" === t.type
              ? (this.curve = new eP.short(t))
              : "edwards" === t.type
              ? (this.curve = new eP.edwards(t))
              : (this.curve = new eP.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(t, r) {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var i = new n(r);
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                  }),
                  i
                );
              },
            });
          }
          (e.PresetCurve = n),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: tI.sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            o("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: tI.sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            o("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: tI.sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            o("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: tI.sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            o("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: tI.sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            o("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: tI.sha256,
              gRed: !1,
              g: ["9"],
            }),
            o("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: tI.sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch {
            r = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: tI.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function ez(t) {
        if (!(this instanceof ez)) return new ez(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = eB.toArray(t.entropy, t.entropyEnc || "hex"),
          r = eB.toArray(t.nonce, t.nonceEnc || "hex"),
          i = eB.toArray(t.pers, t.persEnc || "hex");
        eS(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, i);
      }
      (ez.prototype._init = function (t, e, r) {
        var i = t.concat(e).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var n = 0; n < this.V.length; n++)
          (this.K[n] = 0), (this.V[n] = 1);
        this._update(i),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (ez.prototype._hmac = function () {
          return new tI.hmac(this.hash, this.K);
        }),
        (ez.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (ez.prototype.reseed = function (t, e, r, i) {
          "string" != typeof e && ((i = r), (r = e), (e = null)),
            (t = eB.toArray(t, e)),
            (r = eB.toArray(r, i)),
            eS(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (ez.prototype.generate = function (t, e, r, i) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof e && ((i = r), (r = e), (e = null)),
            r && ((r = eB.toArray(r, i || "hex")), this._update(r));
          for (var n = []; n.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (n = n.concat(this.V));
          var o = n.slice(0, t);
          return this._update(r), this._reseed++, eB.encode(o, e);
        });
      var eL = eN.assert;
      function eQ(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (eQ.fromPublic = function (t, e, r) {
        return e instanceof eQ ? e : new eQ(t, { pub: e, pubEnc: r });
      }),
        (eQ.fromPrivate = function (t, e, r) {
          return e instanceof eQ ? e : new eQ(t, { priv: e, privEnc: r });
        }),
        (eQ.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (eQ.prototype.getPublic = function (t, e) {
          return (
            "string" == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (eQ.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (eQ.prototype._importPrivate = function (t, e) {
          (this.priv = new Q(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (eQ.prototype._importPublic = function (t, e) {
          if (t.x || t.y) {
            "mont" === this.ec.curve.type
              ? eL(t.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                eL(t.x && t.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (eQ.prototype.derive = function (t) {
          return (
            t.validate() || eL(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (eQ.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (eQ.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (eQ.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var eH = eN.assert;
      function eJ(t, e) {
        if (t instanceof eJ) return t;
        this._importDER(t, e) ||
          (eH(t.r && t.s, "Signature without r or s"),
          (this.r = new Q(t.r, 16)),
          (this.s = new Q(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function eY() {
        this.place = 0;
      }
      function eG(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        for (var n = 0, o = 0, s = e.place; o < i; o++, s++)
          (n <<= 8), (n |= t[s]), (n >>>= 0);
        return !(n <= 127) && ((e.place = s), n);
      }
      function eK(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function ej(t, e) {
        if (e < 128) {
          t.push(e);
          return;
        }
        var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
        for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
        t.push(e);
      }
      (eJ.prototype._importDER = function (t, e) {
        t = eN.toArray(t, e);
        var r = new eY();
        if (48 !== t[r.place++]) return !1;
        var i = eG(t, r);
        if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++])
          return !1;
        var n = eG(t, r);
        if (!1 === n) return !1;
        var o = t.slice(r.place, n + r.place);
        if (((r.place += n), 2 !== t[r.place++])) return !1;
        var s = eG(t, r);
        if (!1 === s || t.length !== s + r.place) return !1;
        var f = t.slice(r.place, s + r.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === f[0]) {
          if (!(128 & f[1])) return !1;
          f = f.slice(1);
        }
        return (
          (this.r = new Q(o)),
          (this.s = new Q(f)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (eJ.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = eK(e),
              r = eK(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          ej(i, e.length), (i = i.concat(e)).push(2), ej(i, r.length);
          var n = i.concat(r),
            o = [48];
          return ej(o, n.length), (o = o.concat(n)), eN.encode(o, t);
        });
      var eX = function () {
          throw Error("unsupported");
        },
        eV = eN.assert;
      function eW(t) {
        if (!(this instanceof eW)) return new eW(t);
        "string" == typeof t &&
          (eV(
            Object.prototype.hasOwnProperty.call(eq, t),
            "Unknown curve " + t
          ),
          (t = eq[t])),
          t instanceof eq.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      function eZ(t) {
        return t.includes(":");
      }
      function e$(t) {
        return eZ(t) ? t.split(":")[0] : t;
      }
      (eW.prototype.keyPair = function (t) {
        return new eQ(this, t);
      }),
        (eW.prototype.keyFromPrivate = function (t, e) {
          return eQ.fromPrivate(this, t, e);
        }),
        (eW.prototype.keyFromPublic = function (t, e) {
          return eQ.fromPublic(this, t, e);
        }),
        (eW.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new ez({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || eX(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              i = this.n.sub(new Q(2));
            ;

          ) {
            var n = new Q(e.generate(r));
            if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
          }
        }),
        (eW.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (eW.prototype.sign = function (t, e, r, i) {
          "object" == typeof r && ((i = r), (r = null)),
            i || (i = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new Q(t, 16)));
          for (
            var n = this.n.byteLength(),
              o = e.getPrivate().toArray("be", n),
              s = t.toArray("be", n),
              f = new ez({
                hash: this.hash,
                entropy: o,
                nonce: s,
                pers: i.pers,
                persEnc: i.persEnc || "utf8",
              }),
              h = this.n.sub(new Q(1)),
              u = 0;
            ;
            u++
          ) {
            var a = i.k ? i.k(u) : new Q(f.generate(this.n.byteLength()));
            if (
              !(0 >= (a = this._truncateToN(a, !0)).cmpn(1) || a.cmp(h) >= 0)
            ) {
              var l = this.g.mul(a);
              if (!l.isInfinity()) {
                var d = l.getX(),
                  c = d.umod(this.n);
                if (0 !== c.cmpn(0)) {
                  var p = a.invm(this.n).mul(c.mul(e.getPrivate()).iadd(t));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var m =
                      (l.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(c) ? 2 : 0);
                    return (
                      i.canonical &&
                        p.cmp(this.nh) > 0 &&
                        ((p = this.n.sub(p)), (m ^= 1)),
                      new eJ({ r: c, s: p, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (eW.prototype.verify = function (t, e, r, i) {
          (t = this._truncateToN(new Q(t, 16))), (r = this.keyFromPublic(r, i));
          var n = (e = new eJ(e, "hex")).r,
            o = e.s;
          if (
            0 > n.cmpn(1) ||
            n.cmp(this.n) >= 0 ||
            0 > o.cmpn(1) ||
            o.cmp(this.n) >= 0
          )
            return !1;
          var s,
            f = o.invm(this.n),
            h = f.mul(t).umod(this.n),
            u = f.mul(n).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(h, r.getPublic(), u)).isInfinity() &&
                s.eqXToP(n)
            : !(s = this.g.mulAdd(h, r.getPublic(), u)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(n);
        }),
        (eW.prototype.recoverPubKey = function (t, e, r, i) {
          eV((3 & r) === r, "The recovery param is more than two bits"),
            (e = new eJ(e, i));
          var n = this.n,
            o = new Q(t),
            s = e.r,
            f = e.s,
            h = 1 & r,
            u = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw Error("Unable to find sencond key candinate");
          s = u
            ? this.curve.pointFromX(s.add(this.curve.n), h)
            : this.curve.pointFromX(s, h);
          var a = e.r.invm(n),
            l = n.sub(o).mul(a).umod(n),
            d = f.mul(a).umod(n);
          return this.g.mulAdd(l, s, d);
        }),
        (eW.prototype.getKeyRecoveryParam = function (t, e, r, i) {
          if (null !== (e = new eJ(e, i)).recoveryParam) return e.recoveryParam;
          for (var n, o = 0; o < 4; o++) {
            try {
              n = this.recoverPubKey(t, e, o);
            } catch {
              continue;
            }
            if (n.eq(r)) return o;
          }
          throw Error("Unable to find valid recovery factor");
        }),
        eE(function (t, e) {
          (e.version = "6.5.4"),
            (e.utils = eN),
            (e.rand = function () {
              throw Error("unsupported");
            }),
            (e.curve = eP),
            (e.curves = eq),
            (e.ec = eW),
            (e.eddsa = null);
        }).ec,
        new x("signing-key/5.7.0"),
        new x("transactions/5.7.0"),
        ((m = a || (a = {}))[(m.legacy = 0)] = "legacy"),
        (m[(m.eip2930 = 1)] = "eip2930"),
        (m[(m.eip1559 = 2)] = "eip1559"),
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      let e0 = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function e1(t, e) {
        let { message: r, code: i } = e0[t];
        return { message: e ? `${r} ${e}` : r, code: i };
      }
      function e2(t, e) {
        return (
          !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
        );
      }
      function e3(t) {
        return (
          Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
        );
      }
    },
  },
]);
