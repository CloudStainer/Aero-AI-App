"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3840],
  {
    86757: function (t, r, e) {
      let i, n;
      e.d(r, {
        YHE: function () {
          return v;
        },
      }),
        e(40537),
        e(76454),
        e(3897),
        e(88017),
        e(50972),
        e(9014),
        e(2737),
        e(43094),
        e(11153),
        e(42058),
        e(61984),
        e(11857),
        e(21086);
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
        g = e(25566);
      function A(t) {
        let { namespace: r, reference: e } = (function (t) {
          let [r, e, i] = t.split(":");
          return { namespace: r, reference: e, address: i };
        })(t);
        return (function (t) {
          let { namespace: r, reference: e } = t;
          return [r, e].join(":");
        })({ namespace: r, reference: e });
      }
      function v(t) {
        return (function (t, r) {
          let e = [];
          return (
            t.forEach((t) => {
              let i = r(t);
              e.includes(i) || e.push(i);
            }),
            e
          );
        })(t, A);
      }
      e(82957).Buffer,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var b =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof e.g
            ? e.g
            : "u" > typeof self
            ? self
            : {},
        y = { exports: {} };
      (function () {
        var t = "input is invalid type",
          r = "object" == typeof window,
          e = r ? window : {};
        e.JS_SHA3_NO_WINDOW && (r = !1);
        var i = !r && "object" == typeof self;
        !e.JS_SHA3_NO_NODE_JS &&
        "object" == typeof g &&
        g.versions &&
        g.versions.node
          ? (e = b)
          : i && (e = self);
        var n = !e.JS_SHA3_NO_COMMON_JS && y.exports,
          o = !e.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
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
        (e.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          o &&
            (e.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return (
                "object" == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var p = function (t, r, e) {
              return function (i) {
                return new F(t, r, t).update(i)[e]();
              };
            },
            m = function (t, r, e) {
              return function (i, n) {
                return new F(t, r, n).update(i)[e]();
              };
            },
            A = function (t, r, e) {
              return function (r, i, n, o) {
                return S["cshake" + t].update(r, i, n, o)[e]();
              };
            },
            v = function (t, r, e) {
              return function (r, i, n, o) {
                return S["kmac" + t].update(r, i, n, o)[e]();
              };
            },
            w = function (t, r, e, i) {
              for (var n = 0; n < d.length; ++n) {
                var o = d[n];
                t[o] = r(e, i, o);
              }
              return t;
            },
            M = function (t, r) {
              var e = p(t, r, "hex");
              return (
                (e.create = function () {
                  return new F(t, r, t);
                }),
                (e.update = function (t) {
                  return e.create().update(t);
                }),
                w(e, p, t, r)
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
                createMethod: function (t, r) {
                  var e = m(t, r, "hex");
                  return (
                    (e.create = function (e) {
                      return new F(t, r, e);
                    }),
                    (e.update = function (t, r) {
                      return e.create(r).update(t);
                    }),
                    w(e, m, t, r)
                  );
                },
              },
              {
                name: "cshake",
                padding: f,
                bits: l,
                createMethod: function (t, r) {
                  var e = c[t],
                    i = A(t, r, "hex");
                  return (
                    (i.create = function (i, n, o) {
                      return n || o
                        ? new F(t, r, i).bytepad([n, o], e)
                        : S["shake" + t].create(i);
                    }),
                    (i.update = function (t, r, e, n) {
                      return i.create(r, e, n).update(t);
                    }),
                    w(i, A, t, r)
                  );
                },
              },
              {
                name: "kmac",
                padding: f,
                bits: l,
                createMethod: function (t, r) {
                  var e = c[t],
                    i = v(t, r, "hex");
                  return (
                    (i.create = function (i, n, o) {
                      return new k(t, r, n)
                        .bytepad(["KMAC", o], e)
                        .bytepad([i], e);
                    }),
                    (i.update = function (t, r, e, n) {
                      return i.create(t, e, n).update(r);
                    }),
                    w(i, v, t, r)
                  );
                },
              },
            ],
            S = {},
            B = [],
            I = 0;
          I < E.length;
          ++I
        )
          for (var N = E[I], C = N.bits, x = 0; x < C.length; ++x) {
            var _ = N.name + "_" + C[x];
            if (
              (B.push(_),
              (S[_] = N.createMethod(C[x], N.padding)),
              "sha3" !== N.name)
            ) {
              var R = N.name + C[x];
              B.push(R), (S[R] = S[_]);
            }
          }
        function F(t, r, e) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = r),
            (this.outputBits = e),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = e >> 5),
            (this.extraBytes = (31 & e) >> 3);
          for (var i = 0; i < 50; ++i) this.s[i] = 0;
        }
        function k(t, r, e) {
          F.call(this, t, r, e);
        }
        (F.prototype.update = function (r) {
          if (this.finalized) throw Error("finalize already called");
          var e,
            i = typeof r;
          if ("string" !== i) {
            if ("object" === i) {
              if (null === r) throw Error(t);
              if (o && r.constructor === ArrayBuffer) r = new Uint8Array(r);
              else if (!Array.isArray(r) && (!o || !ArrayBuffer.isView(r)))
                throw Error(t);
            } else throw Error(t);
            e = !0;
          }
          for (
            var n,
              s,
              f = this.blocks,
              u = this.byteCount,
              a = r.length,
              l = this.blockCount,
              d = 0,
              c = this.s;
            d < a;

          ) {
            if (this.reset)
              for (this.reset = !1, f[0] = this.block, n = 1; n < l + 1; ++n)
                f[n] = 0;
            if (e)
              for (n = this.start; d < a && n < u; ++d)
                f[n >> 2] |= r[d] << h[3 & n++];
            else
              for (n = this.start; d < a && n < u; ++d)
                (s = r.charCodeAt(d)) < 128
                  ? (f[n >> 2] |= s << h[3 & n++])
                  : (s < 2048
                      ? (f[n >> 2] |= (192 | (s >> 6)) << h[3 & n++])
                      : (s < 55296 || s >= 57344
                          ? (f[n >> 2] |= (224 | (s >> 12)) << h[3 & n++])
                          : ((s =
                              65536 +
                              (((1023 & s) << 10) |
                                (1023 & r.charCodeAt(++d)))),
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
          (F.prototype.encode = function (t, r) {
            var e = 255 & t,
              i = 1,
              n = [e];
            for (t >>= 8, e = 255 & t; e > 0; )
              n.unshift(e), (t >>= 8), (e = 255 & t), ++i;
            return r ? n.push(i) : n.unshift(i), this.update(n), n.length;
          }),
          (F.prototype.encodeString = function (r) {
            var e,
              i = typeof r;
            if ("string" !== i) {
              if ("object" === i) {
                if (null === r) throw Error(t);
                if (o && r.constructor === ArrayBuffer) r = new Uint8Array(r);
                else if (!Array.isArray(r) && (!o || !ArrayBuffer.isView(r)))
                  throw Error(t);
              } else throw Error(t);
              e = !0;
            }
            var n = 0,
              s = r.length;
            if (e) n = s;
            else
              for (var f = 0; f < r.length; ++f) {
                var h = r.charCodeAt(f);
                h < 128
                  ? (n += 1)
                  : h < 2048
                  ? (n += 2)
                  : h < 55296 || h >= 57344
                  ? (n += 3)
                  : ((h =
                      65536 +
                      (((1023 & h) << 10) | (1023 & r.charCodeAt(++f)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(r), n;
          }),
          (F.prototype.bytepad = function (t, r) {
            for (var e = this.encode(r), i = 0; i < t.length; ++i)
              e += this.encodeString(t[i]);
            var n = r - (e % r),
              o = [];
            return (o.length = n), this.update(o), this;
          }),
          (F.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                r = this.lastByteIndex,
                e = this.blockCount,
                i = this.s;
              if (
                ((t[r >> 2] |= this.padding[3 & r]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[e], r = 1; r < e + 1; ++r) t[r] = 0;
              for (t[e - 1] |= 2147483648, r = 0; r < e; ++r) i[r] ^= t[r];
              D(i);
            }
          }),
          (F.prototype.toString = F.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  r = this.blockCount,
                  e = this.s,
                  i = this.outputBlocks,
                  n = this.extraBytes,
                  o = 0,
                  f = 0,
                  h = "";
                f < i;

              ) {
                for (o = 0; o < r && f < i; ++o, ++f)
                  h +=
                    s[((t = e[o]) >> 4) & 15] +
                    s[15 & t] +
                    s[(t >> 12) & 15] +
                    s[(t >> 8) & 15] +
                    s[(t >> 20) & 15] +
                    s[(t >> 16) & 15] +
                    s[(t >> 28) & 15] +
                    s[(t >> 24) & 15];
                f % r == 0 && (D(e), (o = 0));
              }
              return (
                n &&
                  ((h += s[((t = e[o]) >> 4) & 15] + s[15 & t]),
                  n > 1 && (h += s[(t >> 12) & 15] + s[(t >> 8) & 15]),
                  n > 2 && (h += s[(t >> 20) & 15] + s[(t >> 16) & 15])),
                h
              );
            }),
          (F.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              r = this.blockCount,
              e = this.s,
              i = this.outputBlocks,
              n = this.extraBytes,
              o = 0,
              s = 0,
              f = this.outputBits >> 3;
            t = new ArrayBuffer(n ? (i + 1) << 2 : f);
            for (var h = new Uint32Array(t); s < i; ) {
              for (o = 0; o < r && s < i; ++o, ++s) h[s] = e[o];
              s % r == 0 && D(e);
            }
            return n && ((h[o] = e[o]), (t = t.slice(0, f))), t;
          }),
          (F.prototype.buffer = F.prototype.arrayBuffer),
          (F.prototype.digest = F.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  r,
                  e = this.blockCount,
                  i = this.s,
                  n = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  f = 0,
                  h = [];
                f < n;

              ) {
                for (s = 0; s < e && f < n; ++s, ++f)
                  (t = f << 2),
                    (r = i[s]),
                    (h[t] = 255 & r),
                    (h[t + 1] = (r >> 8) & 255),
                    (h[t + 2] = (r >> 16) & 255),
                    (h[t + 3] = (r >> 24) & 255);
                f % e == 0 && D(i);
              }
              return (
                o &&
                  ((t = f << 2),
                  (r = i[s]),
                  (h[t] = 255 & r),
                  o > 1 && (h[t + 1] = (r >> 8) & 255),
                  o > 2 && (h[t + 2] = (r >> 16) & 255)),
                h
              );
            }),
          (k.prototype = new F()),
          (k.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), F.prototype.finalize.call(this)
            );
          });
        var D = function (t) {
          var r,
            e,
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
            B,
            I,
            N,
            C,
            x,
            _,
            R,
            F,
            k,
            D,
            T,
            U,
            O,
            P,
            q,
            z,
            L,
            Q,
            H,
            Y,
            J,
            G,
            K,
            j,
            X,
            W,
            V,
            Z,
            $,
            tt,
            tr,
            te,
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
              (r = c ^ ((s << 1) | (f >>> 31))),
              (e = p ^ ((f << 1) | (s >>> 31))),
              (t[0] ^= r),
              (t[1] ^= e),
              (t[10] ^= r),
              (t[11] ^= e),
              (t[20] ^= r),
              (t[21] ^= e),
              (t[30] ^= r),
              (t[31] ^= e),
              (t[40] ^= r),
              (t[41] ^= e),
              (r = n ^ ((h << 1) | (a >>> 31))),
              (e = o ^ ((a << 1) | (h >>> 31))),
              (t[2] ^= r),
              (t[3] ^= e),
              (t[12] ^= r),
              (t[13] ^= e),
              (t[22] ^= r),
              (t[23] ^= e),
              (t[32] ^= r),
              (t[33] ^= e),
              (t[42] ^= r),
              (t[43] ^= e),
              (r = s ^ ((l << 1) | (d >>> 31))),
              (e = f ^ ((d << 1) | (l >>> 31))),
              (t[4] ^= r),
              (t[5] ^= e),
              (t[14] ^= r),
              (t[15] ^= e),
              (t[24] ^= r),
              (t[25] ^= e),
              (t[34] ^= r),
              (t[35] ^= e),
              (t[44] ^= r),
              (t[45] ^= e),
              (r = h ^ ((c << 1) | (p >>> 31))),
              (e = a ^ ((p << 1) | (c >>> 31))),
              (t[6] ^= r),
              (t[7] ^= e),
              (t[16] ^= r),
              (t[17] ^= e),
              (t[26] ^= r),
              (t[27] ^= e),
              (t[36] ^= r),
              (t[37] ^= e),
              (t[46] ^= r),
              (t[47] ^= e),
              (r = l ^ ((n << 1) | (o >>> 31))),
              (e = d ^ ((o << 1) | (n >>> 31))),
              (t[8] ^= r),
              (t[9] ^= e),
              (t[18] ^= r),
              (t[19] ^= e),
              (t[28] ^= r),
              (t[29] ^= e),
              (t[38] ^= r),
              (t[39] ^= e),
              (t[48] ^= r),
              (t[49] ^= e),
              (m = t[0]),
              (g = t[1]),
              (K = (t[11] << 4) | (t[10] >>> 28)),
              (j = (t[10] << 4) | (t[11] >>> 28)),
              (x = (t[20] << 3) | (t[21] >>> 29)),
              (_ = (t[21] << 3) | (t[20] >>> 29)),
              (tf = (t[31] << 9) | (t[30] >>> 23)),
              (th = (t[30] << 9) | (t[31] >>> 23)),
              (H = (t[40] << 18) | (t[41] >>> 14)),
              (Y = (t[41] << 18) | (t[40] >>> 14)),
              (T = (t[2] << 1) | (t[3] >>> 31)),
              (U = (t[3] << 1) | (t[2] >>> 31)),
              (A = (t[13] << 12) | (t[12] >>> 20)),
              (v = (t[12] << 12) | (t[13] >>> 20)),
              (X = (t[22] << 10) | (t[23] >>> 22)),
              (W = (t[23] << 10) | (t[22] >>> 22)),
              (R = (t[33] << 13) | (t[32] >>> 19)),
              (F = (t[32] << 13) | (t[33] >>> 19)),
              (tu = (t[42] << 2) | (t[43] >>> 30)),
              (ta = (t[43] << 2) | (t[42] >>> 30)),
              (tr = (t[5] << 30) | (t[4] >>> 2)),
              (te = (t[4] << 30) | (t[5] >>> 2)),
              (O = (t[14] << 6) | (t[15] >>> 26)),
              (P = (t[15] << 6) | (t[14] >>> 26)),
              (b = (t[25] << 11) | (t[24] >>> 21)),
              (y = (t[24] << 11) | (t[25] >>> 21)),
              (V = (t[34] << 15) | (t[35] >>> 17)),
              (Z = (t[35] << 15) | (t[34] >>> 17)),
              (k = (t[45] << 29) | (t[44] >>> 3)),
              (D = (t[44] << 29) | (t[45] >>> 3)),
              (B = (t[6] << 28) | (t[7] >>> 4)),
              (I = (t[7] << 28) | (t[6] >>> 4)),
              (ti = (t[17] << 23) | (t[16] >>> 9)),
              (tn = (t[16] << 23) | (t[17] >>> 9)),
              (q = (t[26] << 25) | (t[27] >>> 7)),
              (z = (t[27] << 25) | (t[26] >>> 7)),
              (w = (t[36] << 21) | (t[37] >>> 11)),
              (M = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (J = (t[8] << 27) | (t[9] >>> 5)),
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
              (t[10] = B ^ (~N & x)),
              (t[11] = I ^ (~C & _)),
              (t[20] = T ^ (~O & q)),
              (t[21] = U ^ (~P & z)),
              (t[30] = J ^ (~K & X)),
              (t[31] = G ^ (~j & W)),
              (t[40] = tr ^ (~ti & to)),
              (t[41] = te ^ (~tn & ts)),
              (t[2] = A ^ (~b & w)),
              (t[3] = v ^ (~y & M)),
              (t[12] = N ^ (~x & R)),
              (t[13] = C ^ (~_ & F)),
              (t[22] = O ^ (~q & L)),
              (t[23] = P ^ (~z & Q)),
              (t[32] = K ^ (~X & V)),
              (t[33] = j ^ (~W & Z)),
              (t[42] = ti ^ (~to & tf)),
              (t[43] = tn ^ (~ts & th)),
              (t[4] = b ^ (~w & E)),
              (t[5] = y ^ (~M & S)),
              (t[14] = x ^ (~R & k)),
              (t[15] = _ ^ (~F & D)),
              (t[24] = q ^ (~L & H)),
              (t[25] = z ^ (~Q & Y)),
              (t[34] = X ^ (~V & $)),
              (t[35] = W ^ (~Z & tt)),
              (t[44] = to ^ (~tf & tu)),
              (t[45] = ts ^ (~th & ta)),
              (t[6] = w ^ (~E & m)),
              (t[7] = M ^ (~S & g)),
              (t[16] = R ^ (~k & B)),
              (t[17] = F ^ (~D & I)),
              (t[26] = L ^ (~H & T)),
              (t[27] = Q ^ (~Y & U)),
              (t[36] = V ^ (~$ & J)),
              (t[37] = Z ^ (~tt & G)),
              (t[46] = tf ^ (~tu & tr)),
              (t[47] = th ^ (~ta & te)),
              (t[8] = E ^ (~m & A)),
              (t[9] = S ^ (~g & v)),
              (t[18] = k ^ (~B & N)),
              (t[19] = D ^ (~I & C)),
              (t[28] = H ^ (~T & O)),
              (t[29] = Y ^ (~U & P)),
              (t[38] = $ ^ (~J & K)),
              (t[39] = tt ^ (~G & j)),
              (t[48] = tu ^ (~tr & ti)),
              (t[49] = ta ^ (~te & tn)),
              (t[0] ^= u[i]),
              (t[1] ^= u[i + 1]);
        };
        if (n) y.exports = S;
        else for (I = 0; I < B.length; ++I) e[B[I]] = S[B[I]];
      })(),
        y.exports;
      let w = !1,
        M = !1,
        E = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        S = E.default,
        B = null,
        I = (function () {
          try {
            let t = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
                try {
                  if ("test" !== "test".normalize(r))
                    throw Error("bad normalize");
                } catch {
                  t.push(r);
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
      let N = "0123456789abcdef";
      class C {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          let e = t.toLowerCase();
          null == E[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            S > E[e] || console.log.apply(console, r);
        }
        debug(...t) {
          this._log(C.levels.DEBUG, t);
        }
        info(...t) {
          this._log(C.levels.INFO, t);
        }
        warn(...t) {
          this._log(C.levels.WARNING, t);
        }
        makeError(t, r, e) {
          if (M) return this.makeError("censored error", r, {});
          r || (r = C.errors.UNKNOWN_ERROR), e || (e = {});
          let i = [];
          Object.keys(e).forEach((t) => {
            let r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  e += N[r[t] >> 4] + N[15 & r[t]];
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push(`code=${r}`),
            i.push(`version=${this.version}`);
          let n = t,
            o = "";
          switch (r) {
            case f.NUMERIC_FAULT: {
              o = "NUMERIC_FAULT";
              let r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  o += "-" + r;
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
              o = r;
          }
          o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"),
            i.length && (t += " (" + i.join(", ") + ")");
          let s = Error(t);
          return (
            (s.reason = n),
            (s.code = r),
            Object.keys(e).forEach(function (t) {
              s[t] = e[t];
            }),
            s
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, C.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          I &&
            this.throwError(
              "platform missing String.prototype.normalize",
              C.errors.UNSUPPORTED_OPERATION,
              { operation: "String.prototype.normalize", form: I }
            );
        }
        checkSafeUint53(t, r) {
          "number" == typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, C.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, C.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          (e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                C.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r }
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                C.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r }
              );
        }
        checkNew(t, r) {
          (t === Object || null == t) &&
            this.throwError("missing new", C.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                C.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t === Object || null == t) &&
              this.throwError("missing new", C.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return B || (B = new C("logger/5.7.0")), B;
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                C.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            w)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              C.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (M = !!t), (w = !!r);
        }
        static setLogLevel(t) {
          let r = E[t.toLowerCase()];
          if (null == r) {
            C.globalLogger().warn("invalid log level - " + t);
            return;
          }
          S = r;
        }
        static from(t) {
          return new C(t);
        }
      }
      (C.errors = f), (C.levels = s);
      let x = new C("bytes/5.7.0");
      function _(t) {
        return !!t.toHexString;
      }
      function R(t) {
        return (
          t.slice ||
            (t.slice = function () {
              let r = Array.prototype.slice.call(arguments);
              return R(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function F(t) {
        return "number" == typeof t && t == t && t % 1 == 0;
      }
      function k(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !F(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          let e = t[r];
          if (!F(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function D(t, r) {
        if ((r || (r = {}), "number" == typeof t)) {
          x.checkSafeUint53(t, "invalid arrayify value");
          let r = [];
          for (; t; ) r.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === r.length && r.push(0), R(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          _(t) && (t = t.toHexString()),
          T(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
              ? (e += "0")
              : x.throwArgumentError("hex data is odd-length", "value", t));
          let i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return R(new Uint8Array(i));
        }
        return k(t)
          ? R(new Uint8Array(t))
          : x.throwArgumentError("invalid arrayify value", "value", t);
      }
      function T(t, r) {
        return !(
          "string" != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          (r && t.length !== 2 + 2 * r)
        );
      }
      let U = "0123456789abcdef";
      function O(t, r) {
        if ((r || (r = {}), "number" == typeof t)) {
          x.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          for (; t; ) (r = U[15 & t] + r), (t = Math.floor(t / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" == typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (r.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          _(t))
        )
          return t.toHexString();
        if (T(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                ? (t += "0")
                : x.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (k(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += U[(240 & i) >> 4] + U[15 & i];
          }
          return r;
        }
        return x.throwArgumentError("invalid hexlify value", "value", t);
      }
      function P(t, r) {
        for (
          "string" != typeof t
            ? (t = O(t))
            : T(t) || x.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * r + 2 &&
              x.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * r + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      var q = { exports: {} },
        z = (function (t) {
          var r = t.default;
          if ("function" == typeof r) {
            var e = function () {
              return r.apply(this, arguments);
            };
            e.prototype = r.prototype;
          } else e = {};
          return (
            Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.keys(t).forEach(function (r) {
              var i = Object.getOwnPropertyDescriptor(t, r);
              Object.defineProperty(
                e,
                r,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }
              );
            }),
            e
          );
        })(Object.freeze({ __proto__: null, default: {} }));
      !(function (t, r) {
        function e(t, r) {
          if (!t) throw Error(r || "Assertion failed");
        }
        function i(t, r) {
          t.super_ = r;
          var e = function () {};
          (e.prototype = r.prototype),
            (t.prototype = new e()),
            (t.prototype.constructor = t);
        }
        function n(t, r, e) {
          if (n.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === r || "be" === r) && ((e = r), (r = 10)),
              this._init(t || 0, r || 10, e || "be"));
        }
        "object" == typeof t ? (t.exports = n) : (r.BN = n),
          (n.BN = n),
          (n.wordSize = 26);
        try {
          a =
            "u" > typeof window && "u" > typeof window.Buffer
              ? window.Buffer
              : z.Buffer;
        } catch {}
        function o(t, r) {
          var i = t.charCodeAt(r);
          return i >= 48 && i <= 57
            ? i - 48
            : i >= 65 && i <= 70
            ? i - 55
            : i >= 97 && i <= 102
            ? i - 87
            : void e(!1, "Invalid character in " + t);
        }
        function s(t, r, e) {
          var i = o(t, e);
          return e - 1 >= r && (i |= o(t, e - 1) << 4), i;
        }
        function f(t, r, i, n) {
          for (var o = 0, s = 0, f = Math.min(t.length, i), h = r; h < f; h++) {
            var u = t.charCodeAt(h) - 48;
            (o *= n),
              (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              e(u >= 0 && s < n, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function h(t, r) {
          (t.words = r.words),
            (t.length = r.length),
            (t.negative = r.negative),
            (t.red = r.red);
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
          (n.max = function (t, r) {
            return t.cmp(r) > 0 ? t : r;
          }),
          (n.min = function (t, r) {
            return 0 > t.cmp(r) ? t : r;
          }),
          (n.prototype._init = function (t, r, i) {
            if ("number" == typeof t) return this._initNumber(t, r, i);
            if ("object" == typeof t) return this._initArray(t, r, i);
            "hex" === r && (r = 16), e(r === (0 | r) && r >= 2 && r <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === r
                  ? this._parseHex(t, n, i)
                  : (this._parseBase(t, r, n),
                    "le" === i && this._initArray(this.toArray(), r, i)));
          }),
          (n.prototype._initNumber = function (t, r, i) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (e(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === i && this._initArray(this.toArray(), r, i);
          }),
          (n.prototype._initArray = function (t, r, i) {
            if ((e("number" == typeof t.length), t.length <= 0))
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
          (n.prototype._parseHex = function (t, r, e) {
            (this.length = Math.ceil((t.length - r) / 6)),
              (this.words = Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              o = 0,
              f = 0;
            if ("be" === e)
              for (i = t.length - 1; i >= r; i -= 2)
                (n = s(t, r, i) << o),
                  (this.words[f] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - r) % 2 == 0 ? r + 1 : r;
                i < t.length;
                i += 2
              )
                (n = s(t, r, i) << o),
                  (this.words[f] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (n.prototype._parseBase = function (t, r, e) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
            i--, (n = (n / r) | 0);
            for (
              var o = t.length - e,
                s = o % i,
                h = Math.min(o, o - s) + e,
                u = 0,
                a = e;
              a < h;
              a += i
            )
              (u = f(t, a, a + i, r)),
                this.imuln(n),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var l = 1;
              for (u = f(t, a, t.length, r), a = 0; a < s; a++) l *= r;
              this.imuln(l),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (n.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
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
        function p(t, r, e) {
          e.negative = r.negative ^ t.negative;
          var i = (t.length + r.length) | 0;
          (e.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | r.words[0],
            s = n * o,
            f = 67108863 & s,
            h = (s / 67108864) | 0;
          e.words[0] = f;
          for (var u = 1; u < i; u++) {
            for (
              var a = h >>> 26,
                l = 67108863 & h,
                d = Math.min(u, r.length - 1),
                c = Math.max(0, u - t.length + 1);
              c <= d;
              c++
            ) {
              var p = (u - c) | 0;
              (a +=
                ((s = (n = 0 | t.words[p]) * (o = 0 | r.words[c]) + l) /
                  67108864) |
                0),
                (l = 67108863 & s);
            }
            (e.words[u] = 0 | l), (h = 0 | a);
          }
          return 0 !== h ? (e.words[u] = 0 | h) : e.length--, e._strip();
        }
        (n.prototype.toString = function (t, r) {
          if (((r = 0 | r || 1), 16 === (t = t || 10) || "hex" === t)) {
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
            for (0 !== o && (i = o.toString(16) + i); i.length % r != 0; )
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
            for (this.isZero() && (i = "0" + i); i.length % r != 0; )
              i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i;
          }
          e(!1, "Base should be between 2 and 36");
        }),
          (n.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  e(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (n.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (n.prototype.toBuffer = function (t, r) {
              return this.toArrayLike(a, t, r);
            }),
          (n.prototype.toArray = function (t, r) {
            return this.toArrayLike(Array, t, r);
          }),
          (n.prototype.toArrayLike = function (t, r, i) {
            this._strip();
            var n = this.byteLength(),
              o = i || Math.max(1, n);
            e(n <= o, "byte array longer than desired length"),
              e(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n), s;
          }),
          (n.prototype._toArrayLikeLE = function (t, r) {
            for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
              var s = (this.words[n] << o) | i;
              (t[e++] = 255 & s),
                e < t.length && (t[e++] = (s >> 8) & 255),
                e < t.length && (t[e++] = (s >> 16) & 255),
                6 === o
                  ? (e < t.length && (t[e++] = (s >> 24) & 255),
                    (i = 0),
                    (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (e < t.length) for (t[e++] = i; e < t.length; ) t[e++] = 0;
          }),
          (n.prototype._toArrayLikeBE = function (t, r) {
            for (
              var e = t.length - 1, i = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var s = (this.words[n] << o) | i;
              (t[e--] = 255 & s),
                e >= 0 && (t[e--] = (s >> 8) & 255),
                e >= 0 && (t[e--] = (s >> 16) & 255),
                6 === o
                  ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                  : ((i = s >>> 24), (o += 2));
            }
            if (e >= 0) for (t[e--] = i; e >= 0; ) t[e--] = 0;
          }),
          Math.clz32
            ? (n.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (n.prototype._countBits = function (t) {
                var r = t,
                  e = 0;
                return (
                  r >= 4096 && ((e += 13), (r >>>= 13)),
                  r >= 64 && ((e += 7), (r >>>= 7)),
                  r >= 8 && ((e += 4), (r >>>= 4)),
                  r >= 2 && ((e += 2), (r >>>= 2)),
                  e + r
                );
              }),
          (n.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var r = t,
              e = 0;
            return (
              8191 & r || ((e += 13), (r >>>= 13)),
              127 & r || ((e += 7), (r >>>= 7)),
              15 & r || ((e += 4), (r >>>= 4)),
              3 & r || ((e += 2), (r >>>= 2)),
              1 & r || e++,
              e
            );
          }),
          (n.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              r = this._countBits(t);
            return (this.length - 1) * 26 + r;
          }),
          (n.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, r = 0; r < this.length; r++) {
              var e = this._zeroBits(this.words[r]);
              if (((t += e), 26 !== e)) break;
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
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] | t.words[r];
            return this._strip();
          }),
          (n.prototype.ior = function (t) {
            return e((this.negative | t.negative) == 0), this.iuor(t);
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
            var r;
            r = this.length > t.length ? t : this;
            for (var e = 0; e < r.length; e++)
              this.words[e] = this.words[e] & t.words[e];
            return (this.length = r.length), this._strip();
          }),
          (n.prototype.iand = function (t) {
            return e((this.negative | t.negative) == 0), this.iuand(t);
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
            var r, e;
            this.length > t.length
              ? ((r = this), (e = t))
              : ((r = t), (e = this));
            for (var i = 0; i < e.length; i++)
              this.words[i] = r.words[i] ^ e.words[i];
            if (this !== r)
              for (; i < r.length; i++) this.words[i] = r.words[i];
            return (this.length = r.length), this._strip();
          }),
          (n.prototype.ixor = function (t) {
            return e((this.negative | t.negative) == 0), this.iuxor(t);
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
            e("number" == typeof t && t >= 0);
            var r = 0 | Math.ceil(t / 26),
              i = t % 26;
            this._expand(r), i > 0 && r--;
            for (var n = 0; n < r; n++)
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
          (n.prototype.setn = function (t, r) {
            e("number" == typeof t && t >= 0);
            var i = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(i + 1),
              r
                ? (this.words[i] = this.words[i] | (1 << n))
                : (this.words[i] = this.words[i] & ~(1 << n)),
              this._strip()
            );
          }),
          (n.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (r = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (r = this.isub(t)),
                (t.negative = 1),
                r._normSign()
              );
            this.length > t.length
              ? ((e = this), (i = t))
              : ((e = t), (i = this));
            for (var r, e, i, n = 0, o = 0; o < i.length; o++)
              (r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & r),
                (n = r >>> 26);
            for (; 0 !== n && o < e.length; o++)
              (r = (0 | e.words[o]) + n),
                (this.words[o] = 67108863 & r),
                (n = r >>> 26);
            if (((this.length = e.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (e !== this)
              for (; o < e.length; o++) this.words[o] = e.words[o];
            return this;
          }),
          (n.prototype.add = function (t) {
            var r;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (r = t.sub(this)), (this.negative = 1), r)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (n.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var r,
                e,
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
            n > 0 ? ((r = this), (e = t)) : ((r = t), (e = this));
            for (var o = 0, s = 0; s < e.length; s++)
              (o = (i = (0 | r.words[s]) - (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & i);
            for (; 0 !== o && s < r.length; s++)
              (o = (i = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & i);
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (n.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, r, e) {
          var i,
            n,
            o,
            s = t.words,
            f = r.words,
            h = e.words,
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
            B = 0 | s[5],
            I = 8191 & B,
            N = B >>> 13,
            C = 0 | s[6],
            x = 8191 & C,
            _ = C >>> 13,
            R = 0 | s[7],
            F = 8191 & R,
            k = R >>> 13,
            D = 0 | s[8],
            T = 8191 & D,
            U = D >>> 13,
            O = 0 | s[9],
            P = 8191 & O,
            q = O >>> 13,
            z = 0 | f[0],
            L = 8191 & z,
            Q = z >>> 13,
            H = 0 | f[1],
            Y = 8191 & H,
            J = H >>> 13,
            G = 0 | f[2],
            K = 8191 & G,
            j = G >>> 13,
            X = 0 | f[3],
            W = 8191 & X,
            V = X >>> 13,
            Z = 0 | f[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            tr = 0 | f[5],
            te = 8191 & tr,
            ti = tr >>> 13,
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
          (e.negative = t.negative ^ r.negative),
            (e.length = 19),
            (i = Math.imul(l, L)),
            (n = ((n = Math.imul(l, Q)) + Math.imul(d, L)) | 0),
            (o = Math.imul(d, Q));
          var tg = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (i = Math.imul(p, L)),
            (n = ((n = Math.imul(p, Q)) + Math.imul(m, L)) | 0),
            (o = Math.imul(m, Q)),
            (i = (i + Math.imul(l, Y)) | 0),
            (n = ((n = (n + Math.imul(l, J)) | 0) + Math.imul(d, Y)) | 0),
            (o = (o + Math.imul(d, J)) | 0);
          var tA = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tA >>> 26)) | 0),
            (tA &= 67108863),
            (i = Math.imul(A, L)),
            (n = ((n = Math.imul(A, Q)) + Math.imul(v, L)) | 0),
            (o = Math.imul(v, Q)),
            (i = (i + Math.imul(p, Y)) | 0),
            (n = ((n = (n + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0),
            (i = (i + Math.imul(l, K)) | 0),
            (n = ((n = (n + Math.imul(l, j)) | 0) + Math.imul(d, K)) | 0),
            (o = (o + Math.imul(d, j)) | 0);
          var tv = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tv >>> 26)) | 0),
            (tv &= 67108863),
            (i = Math.imul(y, L)),
            (n = ((n = Math.imul(y, Q)) + Math.imul(w, L)) | 0),
            (o = Math.imul(w, Q)),
            (i = (i + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(v, Y)) | 0),
            (o = (o + Math.imul(v, J)) | 0),
            (i = (i + Math.imul(p, K)) | 0),
            (n = ((n = (n + Math.imul(p, j)) | 0) + Math.imul(m, K)) | 0),
            (o = (o + Math.imul(m, j)) | 0),
            (i = (i + Math.imul(l, W)) | 0),
            (n = ((n = (n + Math.imul(l, V)) | 0) + Math.imul(d, W)) | 0),
            (o = (o + Math.imul(d, V)) | 0);
          var tb = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tb >>> 26)) | 0),
            (tb &= 67108863),
            (i = Math.imul(E, L)),
            (n = ((n = Math.imul(E, Q)) + Math.imul(S, L)) | 0),
            (o = Math.imul(S, Q)),
            (i = (i + Math.imul(y, Y)) | 0),
            (n = ((n = (n + Math.imul(y, J)) | 0) + Math.imul(w, Y)) | 0),
            (o = (o + Math.imul(w, J)) | 0),
            (i = (i + Math.imul(A, K)) | 0),
            (n = ((n = (n + Math.imul(A, j)) | 0) + Math.imul(v, K)) | 0),
            (o = (o + Math.imul(v, j)) | 0),
            (i = (i + Math.imul(p, W)) | 0),
            (n = ((n = (n + Math.imul(p, V)) | 0) + Math.imul(m, W)) | 0),
            (o = (o + Math.imul(m, V)) | 0),
            (i = (i + Math.imul(l, $)) | 0),
            (n = ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(d, $)) | 0),
            (o = (o + Math.imul(d, tt)) | 0);
          var ty = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (i = Math.imul(I, L)),
            (n = ((n = Math.imul(I, Q)) + Math.imul(N, L)) | 0),
            (o = Math.imul(N, Q)),
            (i = (i + Math.imul(E, Y)) | 0),
            (n = ((n = (n + Math.imul(E, J)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (i = (i + Math.imul(y, K)) | 0),
            (n = ((n = (n + Math.imul(y, j)) | 0) + Math.imul(w, K)) | 0),
            (o = (o + Math.imul(w, j)) | 0),
            (i = (i + Math.imul(A, W)) | 0),
            (n = ((n = (n + Math.imul(A, V)) | 0) + Math.imul(v, W)) | 0),
            (o = (o + Math.imul(v, V)) | 0),
            (i = (i + Math.imul(p, $)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
            (o = (o + Math.imul(m, tt)) | 0),
            (i = (i + Math.imul(l, te)) | 0),
            (n = ((n = (n + Math.imul(l, ti)) | 0) + Math.imul(d, te)) | 0),
            (o = (o + Math.imul(d, ti)) | 0);
          var tw = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tw >>> 26)) | 0),
            (tw &= 67108863),
            (i = Math.imul(x, L)),
            (n = ((n = Math.imul(x, Q)) + Math.imul(_, L)) | 0),
            (o = Math.imul(_, Q)),
            (i = (i + Math.imul(I, Y)) | 0),
            (n = ((n = (n + Math.imul(I, J)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (i = (i + Math.imul(E, K)) | 0),
            (n = ((n = (n + Math.imul(E, j)) | 0) + Math.imul(S, K)) | 0),
            (o = (o + Math.imul(S, j)) | 0),
            (i = (i + Math.imul(y, W)) | 0),
            (n = ((n = (n + Math.imul(y, V)) | 0) + Math.imul(w, W)) | 0),
            (o = (o + Math.imul(w, V)) | 0),
            (i = (i + Math.imul(A, $)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (i = (i + Math.imul(p, te)) | 0),
            (n = ((n = (n + Math.imul(p, ti)) | 0) + Math.imul(m, te)) | 0),
            (o = (o + Math.imul(m, ti)) | 0),
            (i = (i + Math.imul(l, to)) | 0),
            (n = ((n = (n + Math.imul(l, ts)) | 0) + Math.imul(d, to)) | 0),
            (o = (o + Math.imul(d, ts)) | 0);
          var tM = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tM >>> 26)) | 0),
            (tM &= 67108863),
            (i = Math.imul(F, L)),
            (n = ((n = Math.imul(F, Q)) + Math.imul(k, L)) | 0),
            (o = Math.imul(k, Q)),
            (i = (i + Math.imul(x, Y)) | 0),
            (n = ((n = (n + Math.imul(x, J)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (i = (i + Math.imul(I, K)) | 0),
            (n = ((n = (n + Math.imul(I, j)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, j)) | 0),
            (i = (i + Math.imul(E, W)) | 0),
            (n = ((n = (n + Math.imul(E, V)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, V)) | 0),
            (i = (i + Math.imul(y, $)) | 0),
            (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(w, $)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (i = (i + Math.imul(A, te)) | 0),
            (n = ((n = (n + Math.imul(A, ti)) | 0) + Math.imul(v, te)) | 0),
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
            (i = Math.imul(T, L)),
            (n = ((n = Math.imul(T, Q)) + Math.imul(U, L)) | 0),
            (o = Math.imul(U, Q)),
            (i = (i + Math.imul(F, Y)) | 0),
            (n = ((n = (n + Math.imul(F, J)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (i = (i + Math.imul(x, K)) | 0),
            (n = ((n = (n + Math.imul(x, j)) | 0) + Math.imul(_, K)) | 0),
            (o = (o + Math.imul(_, j)) | 0),
            (i = (i + Math.imul(I, W)) | 0),
            (n = ((n = (n + Math.imul(I, V)) | 0) + Math.imul(N, W)) | 0),
            (o = (o + Math.imul(N, V)) | 0),
            (i = (i + Math.imul(E, $)) | 0),
            (n = ((n = (n + Math.imul(E, tt)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (i = (i + Math.imul(y, te)) | 0),
            (n = ((n = (n + Math.imul(y, ti)) | 0) + Math.imul(w, te)) | 0),
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
            (i = (i + Math.imul(T, Y)) | 0),
            (n = ((n = (n + Math.imul(T, J)) | 0) + Math.imul(U, Y)) | 0),
            (o = (o + Math.imul(U, J)) | 0),
            (i = (i + Math.imul(F, K)) | 0),
            (n = ((n = (n + Math.imul(F, j)) | 0) + Math.imul(k, K)) | 0),
            (o = (o + Math.imul(k, j)) | 0),
            (i = (i + Math.imul(x, W)) | 0),
            (n = ((n = (n + Math.imul(x, V)) | 0) + Math.imul(_, W)) | 0),
            (o = (o + Math.imul(_, V)) | 0),
            (i = (i + Math.imul(I, $)) | 0),
            (n = ((n = (n + Math.imul(I, tt)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (i = (i + Math.imul(E, te)) | 0),
            (n = ((n = (n + Math.imul(E, ti)) | 0) + Math.imul(S, te)) | 0),
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
          var tB = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 67108863),
            (i = Math.imul(P, Y)),
            (n = ((n = Math.imul(P, J)) + Math.imul(q, Y)) | 0),
            (o = Math.imul(q, J)),
            (i = (i + Math.imul(T, K)) | 0),
            (n = ((n = (n + Math.imul(T, j)) | 0) + Math.imul(U, K)) | 0),
            (o = (o + Math.imul(U, j)) | 0),
            (i = (i + Math.imul(F, W)) | 0),
            (n = ((n = (n + Math.imul(F, V)) | 0) + Math.imul(k, W)) | 0),
            (o = (o + Math.imul(k, V)) | 0),
            (i = (i + Math.imul(x, $)) | 0),
            (n = ((n = (n + Math.imul(x, tt)) | 0) + Math.imul(_, $)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(I, te)) | 0),
            (n = ((n = (n + Math.imul(I, ti)) | 0) + Math.imul(N, te)) | 0),
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
          var tI = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 67108863),
            (i = Math.imul(P, K)),
            (n = ((n = Math.imul(P, j)) + Math.imul(q, K)) | 0),
            (o = Math.imul(q, j)),
            (i = (i + Math.imul(T, W)) | 0),
            (n = ((n = (n + Math.imul(T, V)) | 0) + Math.imul(U, W)) | 0),
            (o = (o + Math.imul(U, V)) | 0),
            (i = (i + Math.imul(F, $)) | 0),
            (n = ((n = (n + Math.imul(F, tt)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (i = (i + Math.imul(x, te)) | 0),
            (n = ((n = (n + Math.imul(x, ti)) | 0) + Math.imul(_, te)) | 0),
            (o = (o + Math.imul(_, ti)) | 0),
            (i = (i + Math.imul(I, to)) | 0),
            (n = ((n = (n + Math.imul(I, ts)) | 0) + Math.imul(N, to)) | 0),
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
            (i = Math.imul(P, W)),
            (n = ((n = Math.imul(P, V)) + Math.imul(q, W)) | 0),
            (o = Math.imul(q, V)),
            (i = (i + Math.imul(T, $)) | 0),
            (n = ((n = (n + Math.imul(T, tt)) | 0) + Math.imul(U, $)) | 0),
            (o = (o + Math.imul(U, tt)) | 0),
            (i = (i + Math.imul(F, te)) | 0),
            (n = ((n = (n + Math.imul(F, ti)) | 0) + Math.imul(k, te)) | 0),
            (o = (o + Math.imul(k, ti)) | 0),
            (i = (i + Math.imul(x, to)) | 0),
            (n = ((n = (n + Math.imul(x, ts)) | 0) + Math.imul(_, to)) | 0),
            (o = (o + Math.imul(_, ts)) | 0),
            (i = (i + Math.imul(I, th)) | 0),
            (n = ((n = (n + Math.imul(I, tu)) | 0) + Math.imul(N, th)) | 0),
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
            (i = (i + Math.imul(T, te)) | 0),
            (n = ((n = (n + Math.imul(T, ti)) | 0) + Math.imul(U, te)) | 0),
            (o = (o + Math.imul(U, ti)) | 0),
            (i = (i + Math.imul(F, to)) | 0),
            (n = ((n = (n + Math.imul(F, ts)) | 0) + Math.imul(k, to)) | 0),
            (o = (o + Math.imul(k, ts)) | 0),
            (i = (i + Math.imul(x, th)) | 0),
            (n = ((n = (n + Math.imul(x, tu)) | 0) + Math.imul(_, th)) | 0),
            (o = (o + Math.imul(_, tu)) | 0),
            (i = (i + Math.imul(I, tl)) | 0),
            (n = ((n = (n + Math.imul(I, td)) | 0) + Math.imul(N, tl)) | 0),
            (o = (o + Math.imul(N, td)) | 0),
            (i = (i + Math.imul(E, tp)) | 0),
            (n = ((n = (n + Math.imul(E, tm)) | 0) + Math.imul(S, tp)) | 0),
            (o = (o + Math.imul(S, tm)) | 0);
          var tx = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tx >>> 26)) | 0),
            (tx &= 67108863),
            (i = Math.imul(P, te)),
            (n = ((n = Math.imul(P, ti)) + Math.imul(q, te)) | 0),
            (o = Math.imul(q, ti)),
            (i = (i + Math.imul(T, to)) | 0),
            (n = ((n = (n + Math.imul(T, ts)) | 0) + Math.imul(U, to)) | 0),
            (o = (o + Math.imul(U, ts)) | 0),
            (i = (i + Math.imul(F, th)) | 0),
            (n = ((n = (n + Math.imul(F, tu)) | 0) + Math.imul(k, th)) | 0),
            (o = (o + Math.imul(k, tu)) | 0),
            (i = (i + Math.imul(x, tl)) | 0),
            (n = ((n = (n + Math.imul(x, td)) | 0) + Math.imul(_, tl)) | 0),
            (o = (o + Math.imul(_, td)) | 0),
            (i = (i + Math.imul(I, tp)) | 0),
            (n = ((n = (n + Math.imul(I, tm)) | 0) + Math.imul(N, tp)) | 0),
            (o = (o + Math.imul(N, tm)) | 0);
          var t_ = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (t_ >>> 26)) | 0),
            (t_ &= 67108863),
            (i = Math.imul(P, to)),
            (n = ((n = Math.imul(P, ts)) + Math.imul(q, to)) | 0),
            (o = Math.imul(q, ts)),
            (i = (i + Math.imul(T, th)) | 0),
            (n = ((n = (n + Math.imul(T, tu)) | 0) + Math.imul(U, th)) | 0),
            (o = (o + Math.imul(U, tu)) | 0),
            (i = (i + Math.imul(F, tl)) | 0),
            (n = ((n = (n + Math.imul(F, td)) | 0) + Math.imul(k, tl)) | 0),
            (o = (o + Math.imul(k, td)) | 0),
            (i = (i + Math.imul(x, tp)) | 0),
            (n = ((n = (n + Math.imul(x, tm)) | 0) + Math.imul(_, tp)) | 0),
            (o = (o + Math.imul(_, tm)) | 0);
          var tR = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tR >>> 26)) | 0),
            (tR &= 67108863),
            (i = Math.imul(P, th)),
            (n = ((n = Math.imul(P, tu)) + Math.imul(q, th)) | 0),
            (o = Math.imul(q, tu)),
            (i = (i + Math.imul(T, tl)) | 0),
            (n = ((n = (n + Math.imul(T, td)) | 0) + Math.imul(U, tl)) | 0),
            (o = (o + Math.imul(U, td)) | 0),
            (i = (i + Math.imul(F, tp)) | 0),
            (n = ((n = (n + Math.imul(F, tm)) | 0) + Math.imul(k, tp)) | 0),
            (o = (o + Math.imul(k, tm)) | 0);
          var tF = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tF >>> 26)) | 0),
            (tF &= 67108863),
            (i = Math.imul(P, tl)),
            (n = ((n = Math.imul(P, td)) + Math.imul(q, tl)) | 0),
            (o = Math.imul(q, td)),
            (i = (i + Math.imul(T, tp)) | 0),
            (n = ((n = (n + Math.imul(T, tm)) | 0) + Math.imul(U, tp)) | 0),
            (o = (o + Math.imul(U, tm)) | 0);
          var tk = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
          (u = (((o + (n >>> 13)) | 0) + (tk >>> 26)) | 0),
            (tk &= 67108863),
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
            (h[9] = tB),
            (h[10] = tI),
            (h[11] = tN),
            (h[12] = tC),
            (h[13] = tx),
            (h[14] = t_),
            (h[15] = tR),
            (h[16] = tF),
            (h[17] = tk),
            (h[18] = tD),
            0 !== u && ((h[19] = u), e.length++),
            e
          );
        };
        function g(t, r, e) {
          (e.negative = r.negative ^ t.negative),
            (e.length = t.length + r.length);
          for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
            var s = n;
            n = 0;
            for (
              var f = 67108863 & i,
                h = Math.min(o, r.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= h;
              u++
            ) {
              var a = o - u,
                l = (0 | t.words[a]) * (0 | r.words[u]),
                d = 67108863 & l;
              (s = (s + ((l / 67108864) | 0)) | 0),
                (f = 67108863 & (d = (d + f) | 0)),
                (n += (s = (s + (d >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (e.words[o] = f), (i = s), (s = n);
          }
          return 0 !== i ? (e.words[o] = i) : e.length--, e._strip();
        }
        Math.imul || (m = p),
          (n.prototype.mulTo = function (t, r) {
            var e,
              i = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, r)
              : i < 63
              ? p(this, t, r)
              : g(this, t, r);
          }),
          (n.prototype.mul = function (t) {
            var r = new n(null);
            return (r.words = Array(this.length + t.length)), this.mulTo(t, r);
          }),
          (n.prototype.mulf = function (t) {
            var r = new n(null);
            return (r.words = Array(this.length + t.length)), g(this, t, r);
          }),
          (n.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (n.prototype.imuln = function (t) {
            var r = t < 0;
            r && (t = -t), e("number" == typeof t), e(t < 67108864);
            for (var i = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                s = (67108863 & o) + (67108863 & i);
              (i >>= 26),
                (i += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[n] = 67108863 & s);
            }
            return (
              0 !== i && ((this.words[n] = i), this.length++),
              r ? this.ineg() : this
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
            var r = (function (t) {
              for (var r = Array(t.bitLength()), e = 0; e < r.length; e++) {
                var i = (e / 26) | 0,
                  n = e % 26;
                r[e] = (t.words[i] >>> n) & 1;
              }
              return r;
            })(t);
            if (0 === r.length) return new n(1);
            for (
              var e = this, i = 0;
              i < r.length && 0 === r[i];
              i++, e = e.sqr()
            );
            if (++i < r.length)
              for (var o = e.sqr(); i < r.length; i++, o = o.sqr())
                0 !== r[i] && (e = e.mul(o));
            return e;
          }),
          (n.prototype.iushln = function (t) {
            e("number" == typeof t && t >= 0);
            var r,
              i = t % 26,
              n = (t - i) / 26,
              o = (67108863 >>> (26 - i)) << (26 - i);
            if (0 !== i) {
              var s = 0;
              for (r = 0; r < this.length; r++) {
                var f = this.words[r] & o,
                  h = ((0 | this.words[r]) - f) << i;
                (this.words[r] = h | s), (s = f >>> (26 - i));
              }
              s && ((this.words[r] = s), this.length++);
            }
            if (0 !== n) {
              for (r = this.length - 1; r >= 0; r--)
                this.words[r + n] = this.words[r];
              for (r = 0; r < n; r++) this.words[r] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (n.prototype.ishln = function (t) {
            return e(0 === this.negative), this.iushln(t);
          }),
          (n.prototype.iushrn = function (t, r, i) {
            e("number" == typeof t && t >= 0),
              (n = r ? (r - (r % 26)) / 26 : 0);
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
          (n.prototype.ishrn = function (t, r, i) {
            return e(0 === this.negative), this.iushrn(t, r, i);
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
            e("number" == typeof t && t >= 0);
            var r = t % 26,
              i = (t - r) / 26;
            return !(this.length <= i) && !!(this.words[i] & (1 << r));
          }),
          (n.prototype.imaskn = function (t) {
            e("number" == typeof t && t >= 0);
            var r = t % 26,
              i = (t - r) / 26;
            return (e(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= i)
              ? this
              : (0 !== r && i++,
                (this.length = Math.min(i, this.length)),
                0 !== r &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> r) << r)),
                this._strip());
          }),
          (n.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (n.prototype.iaddn = function (t) {
            return (
              e("number" == typeof t),
              e(t < 67108864),
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
            for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
              (this.words[r] -= 67108864),
                r === this.length - 1
                  ? (this.words[r + 1] = 1)
                  : this.words[r + 1]++;
            return (this.length = Math.max(this.length, r + 1)), this;
          }),
          (n.prototype.isubn = function (t) {
            if ((e("number" == typeof t), e(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var r = 0; r < this.length && this.words[r] < 0; r++)
                (this.words[r] += 67108864), (this.words[r + 1] -= 1);
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
          (n.prototype._ishlnsubmul = function (t, r, i) {
            var n,
              o = t.length + i;
            this._expand(o);
            var s,
              f = 0;
            for (n = 0; n < t.length; n++) {
              s = (0 | this.words[n + i]) + f;
              var h = (0 | t.words[n]) * r;
              (s -= 67108863 & h),
                (f = (s >> 26) - ((h / 67108864) | 0)),
                (this.words[n + i] = 67108863 & s);
            }
            for (; n < this.length - i; n++)
              (f = (s = (0 | this.words[n + i]) + f) >> 26),
                (this.words[n + i] = 67108863 & s);
            if (0 === f) return this._strip();
            for (e(-1 === f), f = 0, n = 0; n < this.length; n++)
              (f = (s = -(0 | this.words[n]) + f) >> 26),
                (this.words[n] = 67108863 & s);
            return (this.negative = 1), this._strip();
          }),
          (n.prototype._wordDiv = function (t, r) {
            var e = this.length - t.length,
              i = this.clone(),
              o = t,
              s = 0 | o.words[o.length - 1];
            0 != (e = 26 - this._countBits(s)) &&
              ((o = o.ushln(e)), i.iushln(e), (s = 0 | o.words[o.length - 1]));
            var f,
              h = i.length - o.length;
            if ("mod" !== r) {
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
              "div" !== r && 0 !== e && i.iushrn(e),
              { div: f || null, mod: i }
            );
          }),
          (n.prototype.divmod = function (t, r, i) {
            var o, s, f;
            return (e(!t.isZero()), this.isZero())
              ? { div: new n(0), mod: new n(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((f = this.neg().divmod(t, r)),
                "mod" !== r && (o = f.div.neg()),
                "div" !== r &&
                  ((s = f.mod.neg()), i && 0 !== s.negative && s.iadd(t)),
                { div: o, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((f = this.divmod(t.neg(), r)),
                "mod" !== r && (o = f.div.neg()),
                { div: o, mod: f.mod })
              : this.negative & t.negative
              ? ((f = this.neg().divmod(t.neg(), r)),
                "div" !== r &&
                  ((s = f.mod.neg()), i && 0 !== s.negative && s.isub(t)),
                { div: f.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new n(0), mod: this }
              : 1 === t.length
              ? "div" === r
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === r
                ? { div: null, mod: new n(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new n(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, r);
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
            var r = this.divmod(t);
            if (r.mod.isZero()) return r.div;
            var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = e.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? r.div
              : 0 !== r.div.negative
              ? r.div.isubn(1)
              : r.div.iaddn(1);
          }),
          (n.prototype.modrn = function (t) {
            var r = t < 0;
            r && (t = -t), e(t <= 67108863);
            for (var i = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (i * n + (0 | this.words[o])) % t;
            return r ? -n : n;
          }),
          (n.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (n.prototype.idivn = function (t) {
            var r = t < 0;
            r && (t = -t), e(t <= 67108863);
            for (var i = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * i;
              (this.words[n] = (o / t) | 0), (i = o % t);
            }
            return this._strip(), r ? this.ineg() : this;
          }),
          (n.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (n.prototype.egcd = function (t) {
            e(0 === t.negative), e(!t.isZero());
            var r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var o = new n(1), s = new n(0), f = new n(0), h = new n(1), u = 0;
              r.isEven() && i.isEven();

            )
              r.iushrn(1), i.iushrn(1), ++u;
            for (var a = i.clone(), l = r.clone(); !r.isZero(); ) {
              for (var d = 0, c = 1; !(r.words[0] & c) && d < 26; ++d, c <<= 1);
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  (o.isOdd() || s.isOdd()) && (o.iadd(a), s.isub(l)),
                    o.iushrn(1),
                    s.iushrn(1);
              for (var p = 0, m = 1; !(i.words[0] & m) && p < 26; ++p, m <<= 1);
              if (p > 0)
                for (i.iushrn(p); p-- > 0; )
                  (f.isOdd() || h.isOdd()) && (f.iadd(a), h.isub(l)),
                    f.iushrn(1),
                    h.iushrn(1);
              r.cmp(i) >= 0
                ? (r.isub(i), o.isub(f), s.isub(h))
                : (i.isub(r), f.isub(o), h.isub(s));
            }
            return { a: f, b: h, gcd: i.iushln(u) };
          }),
          (n.prototype._invmp = function (t) {
            e(0 === t.negative), e(!t.isZero());
            var r,
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
            return 0 > (r = 0 === i.cmpn(1) ? s : f).cmpn(0) && r.iadd(t), r;
          }),
          (n.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var r = this.clone(),
              e = t.clone();
            (r.negative = 0), (e.negative = 0);
            for (var i = 0; r.isEven() && e.isEven(); i++)
              r.iushrn(1), e.iushrn(1);
            for (;;) {
              for (; r.isEven(); ) r.iushrn(1);
              for (; e.isEven(); ) e.iushrn(1);
              var n = r.cmp(e);
              if (n < 0) {
                var o = r;
                (r = e), (e = o);
              } else if (0 === n || 0 === e.cmpn(1)) break;
              r.isub(e);
            }
            return e.iushln(i);
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
            e("number" == typeof t);
            var r = t % 26,
              i = (t - r) / 26,
              n = 1 << r;
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
            var r,
              i = t < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if ((this._strip(), this.length > 1)) r = 1;
            else {
              i && (t = -t), e(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              r = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (n.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var r = this.ucmp(t);
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (n.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var r = 0, e = this.length - 1; e >= 0; e--) {
              var i = 0 | this.words[e],
                n = 0 | t.words[e];
              if (i !== n) {
                i < n ? (r = -1) : i > n && (r = 1);
                break;
              }
            }
            return r;
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
              e(!this.red, "Already a number in reduction context"),
              e(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (n.prototype.fromRed = function () {
            return (
              e(
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
              e(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (n.prototype.redAdd = function (t) {
            return (
              e(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (n.prototype.redIAdd = function (t) {
            return (
              e(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (n.prototype.redSub = function (t) {
            return (
              e(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (n.prototype.redISub = function (t) {
            return (
              e(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (n.prototype.redShl = function (t) {
            return (
              e(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (n.prototype.redMul = function (t) {
            return (
              e(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (n.prototype.redIMul = function (t) {
            return (
              e(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (n.prototype.redSqr = function () {
            return (
              e(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (n.prototype.redISqr = function () {
            return (
              e(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (n.prototype.redSqrt = function () {
            return (
              e(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (n.prototype.redInvm = function () {
            return (
              e(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (n.prototype.redNeg = function () {
            return (
              e(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (n.prototype.redPow = function (t) {
            return (
              e(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var A = { k256: null, p224: null, p192: null, p25519: null };
        function v(t, r) {
          (this.name = t),
            (this.p = new n(r, 16)),
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
            var r = n._prime(t);
            (this.m = r.p), (this.prime = r);
          } else
            e(t.gtn(1), "modulus must be greater than 1"),
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
            var r,
              e = t;
            do
              this.split(e, this.tmp),
                (r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength());
            while (r > this.n);
            var i = r < this.n ? -1 : e.ucmp(this.p);
            return (
              0 === i
                ? ((e.words[0] = 0), (e.length = 1))
                : i > 0
                ? e.isub(this.p)
                : void 0 !== e.strip
                ? e.strip()
                : e._strip(),
              e
            );
          }),
          (v.prototype.split = function (t, r) {
            t.iushrn(this.n, 0, r);
          }),
          (v.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(b, v),
          (b.prototype.split = function (t, r) {
            for (var e = Math.min(t.length, 9), i = 0; i < e; i++)
              r.words[i] = t.words[i];
            if (((r.length = e), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (r.words[r.length++] = 4194303 & n, i = 10; i < t.length; i++) {
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
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = 0 | t.words[e];
              (r += 977 * i),
                (t.words[e] = 67108863 & r),
                (r = 64 * i + ((r / 67108864) | 0));
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
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = (0 | t.words[e]) * 19 + r,
                n = 67108863 & i;
              (i >>>= 26), (t.words[e] = n), (r = i);
            }
            return 0 !== r && (t.words[t.length++] = r), t;
          }),
          (n._prime = function (t) {
            var r;
            if (A[t]) return A[t];
            if ("k256" === t) r = new b();
            else if ("p224" === t) r = new y();
            else if ("p192" === t) r = new w();
            else if ("p25519" === t) r = new M();
            else throw Error("Unknown prime " + t);
            return (A[t] = r), r;
          }),
          (E.prototype._verify1 = function (t) {
            e(0 === t.negative, "red works only with positives"),
              e(t.red, "red works only with red numbers");
          }),
          (E.prototype._verify2 = function (t, r) {
            e((t.negative | r.negative) == 0, "red works only with positives"),
              e(t.red && t.red === r.red, "red works only with red numbers");
          }),
          (E.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (h(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (E.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (E.prototype.add = function (t, r) {
            this._verify2(t, r);
            var e = t.add(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
          }),
          (E.prototype.iadd = function (t, r) {
            this._verify2(t, r);
            var e = t.iadd(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e;
          }),
          (E.prototype.sub = function (t, r) {
            this._verify2(t, r);
            var e = t.sub(r);
            return 0 > e.cmpn(0) && e.iadd(this.m), e._forceRed(this);
          }),
          (E.prototype.isub = function (t, r) {
            this._verify2(t, r);
            var e = t.isub(r);
            return 0 > e.cmpn(0) && e.iadd(this.m), e;
          }),
          (E.prototype.shl = function (t, r) {
            return this._verify1(t), this.imod(t.ushln(r));
          }),
          (E.prototype.imul = function (t, r) {
            return this._verify2(t, r), this.imod(t.imul(r));
          }),
          (E.prototype.mul = function (t, r) {
            return this._verify2(t, r), this.imod(t.mul(r));
          }),
          (E.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (E.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (E.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var r = this.m.andln(3);
            if ((e(r % 2 == 1), 3 === r)) {
              var i = this.m.add(new n(1)).iushrn(2);
              return this.pow(t, i);
            }
            for (
              var o = this.m.subn(1), s = 0;
              !o.isZero() && 0 === o.andln(1);

            )
              s++, o.iushrn(1);
            e(!o.isZero());
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
              e(g < p);
              var A = this.pow(l, new n(1).iushln(p - g - 1));
              (d = d.redMul(A)), (l = A.redSqr()), (c = c.redMul(l)), (p = g);
            }
            return d;
          }),
          (E.prototype.invm = function (t) {
            var r = t._invmp(this.m);
            return 0 !== r.negative
              ? ((r.negative = 0), this.imod(r).redNeg())
              : this.imod(r);
          }),
          (E.prototype.pow = function (t, r) {
            if (r.isZero()) return new n(1).toRed(this);
            if (0 === r.cmpn(1)) return t.clone();
            var e = Array(16);
            (e[0] = new n(1).toRed(this)), (e[1] = t);
            for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
            var o = e[0],
              s = 0,
              f = 0,
              h = r.bitLength() % 26;
            for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
              for (var u = r.words[i], a = h - 1; a >= 0; a--) {
                var l = (u >> a) & 1;
                if ((o !== e[0] && (o = this.sqr(o)), 0 === l && 0 === s)) {
                  f = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= l),
                  (4 != ++f && (0 !== i || 0 !== a)) ||
                    ((o = this.mul(o, e[s])), (f = 0), (s = 0));
              }
              h = 26;
            }
            return o;
          }),
          (E.prototype.convertTo = function (t) {
            var r = t.umod(this.m);
            return r === t ? r.clone() : r;
          }),
          (E.prototype.convertFrom = function (t) {
            var r = t.clone();
            return (r.red = null), r;
          }),
          (n.mont = function (t) {
            return new S(t);
          }),
          i(S, E),
          (S.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (S.prototype.convertFrom = function (t) {
            var r = this.imod(t.mul(this.rinv));
            return (r.red = null), r;
          }),
          (S.prototype.imul = function (t, r) {
            if (t.isZero() || r.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var e = t.imul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = e.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (S.prototype.mul = function (t, r) {
            if (t.isZero() || r.isZero()) return new n(0)._forceRed(this);
            var e = t.mul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              o = e.isub(i).iushrn(this.shift),
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
      })(q, b);
      var L = q.exports;
      let Q = "bignumber/5.7.0";
      var H = L.BN;
      let Y = new C(Q),
        J = {},
        G = !1;
      class K {
        constructor(t, r) {
          t !== J &&
            Y.throwError(
              "cannot call constructor directly; use BigNumber.from",
              C.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return X(W(this).fromTwos(t));
        }
        toTwos(t) {
          return X(W(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? K.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return X(W(this).add(W(t)));
        }
        sub(t) {
          return X(W(this).sub(W(t)));
        }
        div(t) {
          return (
            K.from(t).isZero() && V("division-by-zero", "div"),
            X(W(this).div(W(t)))
          );
        }
        mul(t) {
          return X(W(this).mul(W(t)));
        }
        mod(t) {
          let r = W(t);
          return r.isNeg() && V("division-by-zero", "mod"), X(W(this).umod(r));
        }
        pow(t) {
          let r = W(t);
          return r.isNeg() && V("negative-power", "pow"), X(W(this).pow(r));
        }
        and(t) {
          let r = W(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              V("unbound-bitwise-result", "and"),
            X(W(this).and(r))
          );
        }
        or(t) {
          let r = W(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              V("unbound-bitwise-result", "or"),
            X(W(this).or(r))
          );
        }
        xor(t) {
          let r = W(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              V("unbound-bitwise-result", "xor"),
            X(W(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && V("negative-width", "mask"),
            X(W(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && V("negative-width", "shl"),
            X(W(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && V("negative-width", "shr"),
            X(W(this).shrn(t))
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
            V("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch {}
          return Y.throwError(
            "this platform does not support BigInt",
            C.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? G ||
                  ((G = !0),
                  Y.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? Y.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    C.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : Y.throwError(
                    "BigNumber.toString does not accept parameters",
                    C.errors.UNEXPECTED_ARGUMENT,
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
          if (t instanceof K) return t;
          if ("string" == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new K(J, j(t))
              : t.match(/^-?[0-9]+$/)
              ? new K(J, j(new H(t)))
              : Y.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" == typeof t)
            return (
              t % 1 && V("underflow", "BigNumber.from", t),
              (t >= 9007199254740991 || t <= -9007199254740991) &&
                V("overflow", "BigNumber.from", t),
              K.from(String(t))
            );
          if ("bigint" == typeof t) return K.from(t.toString());
          if (k(t)) return K.from(O(t));
          if (t) {
            if (t.toHexString) {
              let r = t.toHexString();
              if ("string" == typeof r) return K.from(r);
            } else {
              let r = t._hex;
              if (
                (null == r && "BigNumber" === t.type && (r = t.hex),
                "string" == typeof r &&
                  (T(r) || ("-" === r[0] && T(r.substring(1)))))
              )
                return K.from(r);
            }
          }
          return Y.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !!(t && t._isBigNumber);
        }
      }
      function j(t) {
        if ("string" != typeof t) return j(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] &&
              Y.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = j(t)) ? t : "-" + t
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
      function X(t) {
        return K.from(j(t));
      }
      function W(t) {
        let r = K.from(t).toHexString();
        return "-" === r[0]
          ? new H("-" + r.substring(3), 16)
          : new H(r.substring(2), 16);
      }
      function V(t, r, e) {
        let i = { fault: t, operation: r };
        return (
          null != e && (i.value = e), Y.throwError(t, C.errors.NUMERIC_FAULT, i)
        );
      }
      let Z = new C(Q),
        $ = {},
        tt = K.from(0),
        tr = K.from(-1);
      function te(t, r, e, i) {
        let n = { fault: r, operation: e };
        return (
          void 0 !== i && (n.value = i),
          Z.throwError(t, C.errors.NUMERIC_FAULT, n)
        );
      }
      let ti = "0";
      for (; ti.length < 256; ) ti += ti;
      function tn(t) {
        if ("number" != typeof t)
          try {
            t = K.from(t).toNumber();
          } catch {}
        return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + ti.substring(0, t)
          : Z.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function to(t, r) {
        null == r && (r = 0);
        let e = tn(r),
          i = (t = K.from(t)).lt(tt);
        i && (t = t.mul(tr));
        let n = t.mod(e).toString();
        for (; n.length < e.length - 1; ) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let o = t.div(e).toString();
        return (t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t;
      }
      function ts(t, r) {
        null == r && (r = 0);
        let e = tn(r);
        ("string" == typeof t && t.match(/^-?[0-9.]+$/)) ||
          Z.throwArgumentError("invalid decimal value", "value", t);
        let i = "-" === t.substring(0, 1);
        i && (t = t.substring(1)),
          "." === t && Z.throwArgumentError("missing value", "value", t);
        let n = t.split(".");
        n.length > 2 &&
          Z.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          s = n[1];
        for (o || (o = "0"), s || (s = "0"); "0" === s[s.length - 1]; )
          s = s.substring(0, s.length - 1);
        for (
          s.length > e.length - 1 &&
            te(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === s && (s = "0");
          s.length < e.length - 1;

        )
          s += "0";
        let f = K.from(o),
          h = K.from(s),
          u = f.mul(e).add(h);
        return i && (u = u.mul(tr)), u;
      }
      class tf {
        constructor(t, r, e, i) {
          t !== $ &&
            Z.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              C.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = tn(i)),
            Object.freeze(this);
        }
        static from(t) {
          if (t instanceof tf) return t;
          "number" == typeof t && (t = `fixed128x${t}`);
          let r = !0,
            e = 128,
            i = 18;
          if ("string" == typeof t) {
            if ("fixed" !== t) {
              if ("ufixed" === t) r = !1;
              else {
                let n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                n || Z.throwArgumentError("invalid fixed format", "format", t),
                  (r = "u" !== n[1]),
                  (e = parseInt(n[2])),
                  (i = parseInt(n[3]));
              }
            }
          } else if (t) {
            let n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    Z.throwArgumentError(
                      "invalid fixed format (" + r + " not " + e + ")",
                      "format." + r,
                      t[r]
                    ),
                  t[r]);
            (r = n("signed", "boolean", r)),
              (e = n("width", "number", e)),
              (i = n("decimals", "number", i));
          }
          return (
            e % 8 &&
              Z.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e
              ),
            i > 80 &&
              Z.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i
              ),
            new tf($, r, e, i)
          );
        }
      }
      class th {
        constructor(t, r, e, i) {
          t !== $ &&
            Z.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              C.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.format = i),
            (this._hex = r),
            (this._value = e),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            Z.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          let r = ts(this._value, this.format.decimals),
            e = ts(t._value, t.format.decimals);
          return th.fromValue(r.add(e), this.format.decimals, this.format);
        }
        subUnsafe(t) {
          this._checkFormat(t);
          let r = ts(this._value, this.format.decimals),
            e = ts(t._value, t.format.decimals);
          return th.fromValue(r.sub(e), this.format.decimals, this.format);
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          let r = ts(this._value, this.format.decimals),
            e = ts(t._value, t.format.decimals);
          return th.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          let r = ts(this._value, this.format.decimals),
            e = ts(t._value, t.format.decimals);
          return th.fromValue(
            r.mul(this.format._multiplier).div(e),
            this.format.decimals,
            this.format
          );
        }
        floor() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = th.from(t[0], this.format),
            e = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && e && (r = r.subUnsafe(tu.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = th.from(t[0], this.format),
            e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(tu.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          let r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              Z.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          let e = th.from("1" + ti.substring(0, t), this.format),
            i = ta.toFormat(this.format);
          return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e);
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
            : (t % 8 && Z.throwArgumentError("invalid byte width", "width", t),
              P(
                K.from(this._hex)
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
          return th.fromString(this._value, t);
        }
        static fromValue(t, r, e) {
          var i;
          return (
            null != e ||
              null == r ||
              (null != (i = r) &&
                (K.isBigNumber(i) ||
                  ("number" == typeof i && i % 1 == 0) ||
                  ("string" == typeof i && i.match(/^-?[0-9]+$/)) ||
                  T(i) ||
                  "bigint" == typeof i ||
                  k(i))) ||
              ((e = r), (r = null)),
            null == r && (r = 0),
            null == e && (e = "fixed"),
            th.fromString(to(t, r), tf.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          let e = tf.from(r),
            i = ts(t, e.decimals);
          !e.signed &&
            i.lt(tt) &&
            te("unsigned value cannot be negative", "overflow", "value", t);
          let n = null;
          return new th(
            $,
            e.signed
              ? i.toTwos(e.width).toHexString()
              : P(i.toHexString(), e.width / 8),
            to(i, e.decimals),
            e
          );
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          let e = tf.from(r);
          if (D(t).length > e.width / 8) throw Error("overflow");
          let i = K.from(t);
          return (
            e.signed && (i = i.fromTwos(e.width)),
            new th(
              $,
              i.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
              to(i, e.decimals),
              e
            )
          );
        }
        static from(t, r) {
          if ("string" == typeof t) return th.fromString(t, r);
          if (k(t)) return th.fromBytes(t, r);
          try {
            return th.fromValue(t, 0, r);
          } catch (t) {
            if (t.code !== C.errors.INVALID_ARGUMENT) throw t;
          }
          return Z.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !!(t && t._isFixedNumber);
        }
      }
      let tu = th.from(1),
        ta = th.from("0.5"),
        tl = new C("strings/5.7.0");
      function td(t, r, e, i, n) {
        if (t === u.BAD_PREFIX || t === u.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let i = r + 1; i < e.length && e[i] >> 6 == 2; i++) t++;
          return t;
        }
        return t === u.OVERRUN ? e.length - r - 1 : 0;
      }
      function tc(t, r) {
        r ||
          (r = function (t) {
            return [parseInt(t, 16)];
          });
        let e = 0,
          i = {};
        return (
          t.split(",").forEach((t) => {
            let n = t.split(":");
            i[(e += parseInt(n[0], 16))] = r(n[1]);
          }),
          i
        );
      }
      function tp(t) {
        let r = 0;
        return t.split(",").map((t) => {
          let e = t.split("-");
          return (
            1 === e.length ? (e[1] = "0") : "" === e[1] && (e[1] = "1"),
            { l: r + parseInt(e[0], 16), h: (r = parseInt(e[1], 16)) }
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
          error: function (t, r, e, i, n) {
            return tl.throwArgumentError(
              `invalid codepoint at offset ${r}; ${t}`,
              "bytes",
              e
            );
          },
          ignore: td,
          replace: function (t, r, e, i, n) {
            return t === u.OVERLONG
              ? (i.push(n), 0)
              : (i.push(65533), td(t, r, e));
          },
        }),
        tp(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        tc(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        tc(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        tc(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (t) {
            if (t.length % 4 != 0) throw Error("bad data");
            let r = [];
            for (let e = 0; e < t.length; e += 4)
              r.push(parseInt(t.substring(e, e + 4), 16));
            return r;
          }
        ),
        tp(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      let tm = "hash/5.7.0";
      function tg(t, r) {
        null == r && (r = 1);
        let e = [],
          i = e.forEach,
          n = function (t, r) {
            i.call(t, function (t) {
              r > 0 && Array.isArray(t) ? n(t, r - 1) : e.push(t);
            });
          };
        return n(t, r), e;
      }
      function tA(t, r) {
        let e = Array(t);
        for (let i = 0, n = -1; i < t; i++) e[i] = n += 1 + r();
        return e;
      }
      function tv(t, r) {
        let e = tA(t(), t),
          i = t(),
          n = tA(i, t),
          o = (function (t, r) {
            let e = Array(t);
            for (let i = 0; i < t; i++) e[i] = 1 + r();
            return e;
          })(i, t);
        for (let t = 0; t < i; t++)
          for (let r = 0; r < o[t]; r++) e.push(n[t] + r);
        return r ? e.map((t) => r[t]) : e;
      }
      function tb(t, r, e) {
        let i = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let n = 0; n < r; n++)
          (function (t, r) {
            let e = Array(t);
            for (let n = 0, o = 0; n < t; n++) {
              var i;
              e[n] = o += 1 & (i = r()) ? ~i >> 1 : i >> 1;
            }
            return e;
          })(t, e).forEach((t, r) => i[r].push(t));
        return i;
      }
      let ty =
        ((o = (function (t) {
          let r = 0;
          function e() {
            return (t[r++] << 8) | t[r++];
          }
          let i = e(),
            n = 1,
            o = [0, 1];
          for (let t = 1; t < i; t++) o.push((n += e()));
          let s = e(),
            f = r;
          r += s;
          let h = 0,
            u = 0;
          function a() {
            return 0 == h && ((u = (u << 8) | t[r++]), (h = 8)), (u >> --h) & 1;
          }
          let l = 0;
          for (let t = 0; t < 31; t++) l = (l << 1) | a();
          let d = [],
            c = 0,
            p = 2147483648;
          for (;;) {
            let t = Math.floor(((l - c + 1) * n - 1) / p),
              r = 0,
              e = i;
            for (; e - r > 1; ) {
              let i = (r + e) >>> 1;
              t < o[i] ? (e = i) : (r = i);
            }
            if (0 == r) break;
            d.push(r);
            let s = c + Math.floor((p * o[r]) / n),
              f = c + Math.floor((p * o[r + 1]) / n) - 1;
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
          return d.map((r) => {
            switch (r - m) {
              case 3:
                return m + 65792 + ((t[f++] << 16) | (t[f++] << 8) | t[f++]);
              case 2:
                return m + 256 + ((t[f++] << 8) | t[f++]);
              case 1:
                return m + t[f++];
              default:
                return r - 1;
            }
          });
        })(
          (function (t) {
            t = atob(t);
            let r = [];
            for (let e = 0; e < t.length; e++) r.push(t.charCodeAt(e));
            return D(r);
          })(
            "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"
          )
        )),
        (n = 0),
        () => o[n++]);
      tv(ty),
        tv(ty),
        (function (t) {
          let r = [];
          for (;;) {
            let e = t();
            if (0 == e) break;
            r.push(
              (function (t, r) {
                let e = 1 + r(),
                  i = r(),
                  n = (function (t) {
                    let r = [];
                    for (;;) {
                      let e = t();
                      if (0 == e) break;
                      r.push(e);
                    }
                    return r;
                  })(r);
                return tg(
                  tb(n.length, 1 + t, r).map((t, r) => {
                    let o = t[0],
                      s = t.slice(1);
                    return Array(n[r])
                      .fill(void 0)
                      .map((t, r) => {
                        let n = r * i;
                        return [o + r * e, s.map((t) => t + n)];
                      });
                  })
                );
              })(e, t)
            );
          }
          for (;;) {
            let e = t() - 1;
            if (e < 0) break;
            r.push(tb(1 + t(), 1 + e, t).map((t) => [t[0], t.slice(1)]));
          }
          (function (t) {
            let r = {};
            for (let e = 0; e < t.length; e++) {
              let i = t[e];
              r[i[0]] = i[1];
            }
          })(tg(r));
        })(ty),
        (i = tv(ty).sort((t, r) => t - r)),
        (function t() {
          let r = [];
          for (;;) {
            let e = tv(ty, i);
            if (0 == e.length) break;
            r.push({ set: new Set(e), node: t() });
          }
          r.sort((t, r) => r.set.size - t.set.size);
          let e = ty();
          return {
            branches: r,
            valid: e % 3,
            fe0f: !!(1 & (e = (e / 3) | 0)),
            save: 1 == (e >>= 1),
            check: 2 == e,
          };
        })(),
        new C(tm),
        new Uint8Array(32).fill(0),
        new C("rlp/5.7.0"),
        new C("address/5.7.0");
      let tw = {};
      for (let t = 0; t < 10; t++) tw[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        tw[String.fromCharCode(65 + t)] = String(10 + t);
      new C("properties/5.7.0"),
        new C(tm),
        new Uint8Array(32).fill(0),
        K.from(-1);
      let tM = K.from(0),
        tE = K.from(1);
      K.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
        P(tE.toHexString(), 32),
        P(tM.toHexString(), 32);
      var tS = {},
        tB = {};
      function tI(t, r) {
        if (!t) throw Error(r || "Assertion failed");
      }
      tI.equal = function (t, r, e) {
        if (t != r) throw Error(e || "Assertion failed: " + t + " != " + r);
      };
      var tN = { exports: {} };
      "function" == typeof Object.create
        ? (tN.exports = function (t, r) {
            r &&
              ((t.super_ = r),
              (t.prototype = Object.create(r.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (tN.exports = function (t, r) {
            if (r) {
              t.super_ = r;
              var e = function () {};
              (e.prototype = r.prototype),
                (t.prototype = new e()),
                (t.prototype.constructor = t);
            }
          });
      var tC = tN.exports;
      function tx(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function t_(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function tR(t) {
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
      (tB.inherits = tC),
        (tB.toArray = function (t, r) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var e = [];
          if ("string" == typeof t) {
            if (r) {
              if ("hex" === r)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (t = "0" + t),
                    n = 0;
                  n < t.length;
                  n += 2
                )
                  e.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var i = 0, n = 0; n < t.length; n++) {
                var o,
                  s,
                  f = t.charCodeAt(n);
                f < 128
                  ? (e[i++] = f)
                  : (f < 2048
                      ? (e[i++] = (f >> 6) | 192)
                      : (((o = t),
                        (s = n),
                        (64512 & o.charCodeAt(s)) != 55296 ||
                          s < 0 ||
                          s + 1 >= o.length ||
                          (64512 & o.charCodeAt(s + 1)) != 56320)
                          ? (e[i++] = (f >> 12) | 224)
                          : ((f =
                              65536 +
                              ((1023 & f) << 10) +
                              (1023 & t.charCodeAt(++n))),
                            (e[i++] = (f >> 18) | 240),
                            (e[i++] = ((f >> 12) & 63) | 128)),
                        (e[i++] = ((f >> 6) & 63) | 128)),
                    (e[i++] = (63 & f) | 128));
              }
          } else for (n = 0; n < t.length; n++) e[n] = 0 | t[n];
          return e;
        }),
        (tB.toHex = function (t) {
          for (var r = "", e = 0; e < t.length; e++) r += t_(t[e].toString(16));
          return r;
        }),
        (tB.htonl = tx),
        (tB.toHex32 = function (t, r) {
          for (var e = "", i = 0; i < t.length; i++) {
            var n = t[i];
            "little" === r && (n = tx(n)), (e += tR(n.toString(16)));
          }
          return e;
        }),
        (tB.zero2 = t_),
        (tB.zero8 = tR),
        (tB.join32 = function (t, r, e, i) {
          var n,
            o = e - r;
          tI(o % 4 == 0);
          for (var s = Array(o / 4), f = 0, h = r; f < s.length; f++, h += 4)
            (n =
              "big" === i
                ? (t[h] << 24) | (t[h + 1] << 16) | (t[h + 2] << 8) | t[h + 3]
                : (t[h + 3] << 24) | (t[h + 2] << 16) | (t[h + 1] << 8) | t[h]),
              (s[f] = n >>> 0);
          return s;
        }),
        (tB.split32 = function (t, r) {
          for (
            var e = Array(4 * t.length), i = 0, n = 0;
            i < t.length;
            i++, n += 4
          ) {
            var o = t[i];
            "big" === r
              ? ((e[n] = o >>> 24),
                (e[n + 1] = (o >>> 16) & 255),
                (e[n + 2] = (o >>> 8) & 255),
                (e[n + 3] = 255 & o))
              : ((e[n + 3] = o >>> 24),
                (e[n + 2] = (o >>> 16) & 255),
                (e[n + 1] = (o >>> 8) & 255),
                (e[n] = 255 & o));
          }
          return e;
        }),
        (tB.rotr32 = function (t, r) {
          return (t >>> r) | (t << (32 - r));
        }),
        (tB.rotl32 = function (t, r) {
          return (t << r) | (t >>> (32 - r));
        }),
        (tB.sum32 = function (t, r) {
          return (t + r) >>> 0;
        }),
        (tB.sum32_3 = function (t, r, e) {
          return (t + r + e) >>> 0;
        }),
        (tB.sum32_4 = function (t, r, e, i) {
          return (t + r + e + i) >>> 0;
        }),
        (tB.sum32_5 = function (t, r, e, i, n) {
          return (t + r + e + i + n) >>> 0;
        }),
        (tB.sum64 = function (t, r, e, i) {
          var n = t[r],
            o = (i + t[r + 1]) >>> 0;
          (t[r] = ((o < i ? 1 : 0) + e + n) >>> 0), (t[r + 1] = o);
        }),
        (tB.sum64_hi = function (t, r, e, i) {
          return (((r + i) >>> 0 < r ? 1 : 0) + t + e) >>> 0;
        }),
        (tB.sum64_lo = function (t, r, e, i) {
          return (r + i) >>> 0;
        }),
        (tB.sum64_4_hi = function (t, r, e, i, n, o, s, f) {
          var h,
            u = r;
          return (
            (t +
              e +
              n +
              s +
              (0 +
                ((u = (u + i) >>> 0) < r ? 1 : 0) +
                ((u = (u + o) >>> 0) < o ? 1 : 0) +
                ((u = (u + f) >>> 0) < f ? 1 : 0))) >>>
            0
          );
        }),
        (tB.sum64_4_lo = function (t, r, e, i, n, o, s, f) {
          return (r + i + o + f) >>> 0;
        }),
        (tB.sum64_5_hi = function (t, r, e, i, n, o, s, f, h, u) {
          var a,
            l = r;
          return (
            (t +
              e +
              n +
              s +
              h +
              (0 +
                ((l = (l + i) >>> 0) < r ? 1 : 0) +
                ((l = (l + o) >>> 0) < o ? 1 : 0) +
                ((l = (l + f) >>> 0) < f ? 1 : 0) +
                ((l = (l + u) >>> 0) < u ? 1 : 0))) >>>
            0
          );
        }),
        (tB.sum64_5_lo = function (t, r, e, i, n, o, s, f, h, u) {
          return (r + i + o + f + u) >>> 0;
        }),
        (tB.rotr64_hi = function (t, r, e) {
          return ((r << (32 - e)) | (t >>> e)) >>> 0;
        }),
        (tB.rotr64_lo = function (t, r, e) {
          return ((t << (32 - e)) | (r >>> e)) >>> 0;
        }),
        (tB.shr64_hi = function (t, r, e) {
          return t >>> e;
        }),
        (tB.shr64_lo = function (t, r, e) {
          return ((t << (32 - e)) | (r >>> e)) >>> 0;
        });
      var tF = {};
      function tk() {
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
      (tF.BlockHash = tk),
        (tk.prototype.update = function (t, r) {
          if (
            ((t = tB.toArray(t, r)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var e = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - e, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = tB.join32(t, 0, t.length - e, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (tk.prototype.digest = function (t) {
          return (
            this.update(this._pad()), tI(null === this.pending), this._digest(t)
          );
        }),
        (tk.prototype._pad = function () {
          var t = this.pendingTotal,
            r = this._delta8,
            e = r - ((t + this.padLength) % r),
            i = Array(e + this.padLength);
          i[0] = 128;
          for (var n = 1; n < e; n++) i[n] = 0;
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
      var tD = {},
        tT = {},
        tU = tB.rotr32;
      function tO(t, r, e) {
        return (t & r) ^ (t & e) ^ (r & e);
      }
      (tT.ft_1 = function (t, r, e, i) {
        return 0 === t
          ? (r & e) ^ (~r & i)
          : 1 === t || 3 === t
          ? r ^ e ^ i
          : 2 === t
          ? tO(r, e, i)
          : void 0;
      }),
        (tT.ch32 = function (t, r, e) {
          return (t & r) ^ (~t & e);
        }),
        (tT.maj32 = tO),
        (tT.p32 = function (t, r, e) {
          return t ^ r ^ e;
        }),
        (tT.s0_256 = function (t) {
          return tU(t, 2) ^ tU(t, 13) ^ tU(t, 22);
        }),
        (tT.s1_256 = function (t) {
          return tU(t, 6) ^ tU(t, 11) ^ tU(t, 25);
        }),
        (tT.g0_256 = function (t) {
          return tU(t, 7) ^ tU(t, 18) ^ (t >>> 3);
        }),
        (tT.g1_256 = function (t) {
          return tU(t, 17) ^ tU(t, 19) ^ (t >>> 10);
        });
      var tP = tB.rotl32,
        tq = tB.sum32,
        tz = tB.sum32_5,
        tL = tT.ft_1,
        tQ = tF.BlockHash,
        tH = [1518500249, 1859775393, 2400959708, 3395469782];
      function tY() {
        if (!(this instanceof tY)) return new tY();
        tQ.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = Array(80));
      }
      tB.inherits(tY, tQ),
        (tY.blockSize = 512),
        (tY.outSize = 160),
        (tY.hmacStrength = 80),
        (tY.padLength = 64),
        (tY.prototype._update = function (t, r) {
          for (var e = this.W, i = 0; i < 16; i++) e[i] = t[r + i];
          for (; i < e.length; i++)
            e[i] = tP(e[i - 3] ^ e[i - 8] ^ e[i - 14] ^ e[i - 16], 1);
          var n = this.h[0],
            o = this.h[1],
            s = this.h[2],
            f = this.h[3],
            h = this.h[4];
          for (i = 0; i < e.length; i++) {
            var u = ~~(i / 20),
              a = tz(tP(n, 5), tL(u, o, s, f), h, e[i], tH[u]);
            (h = f), (f = s), (s = tP(o, 30)), (o = n), (n = a);
          }
          (this.h[0] = tq(this.h[0], n)),
            (this.h[1] = tq(this.h[1], o)),
            (this.h[2] = tq(this.h[2], s)),
            (this.h[3] = tq(this.h[3], f)),
            (this.h[4] = tq(this.h[4], h));
        }),
        (tY.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        });
      var tJ = tB.sum32,
        tG = tB.sum32_4,
        tK = tB.sum32_5,
        tj = tT.ch32,
        tX = tT.maj32,
        tW = tT.s0_256,
        tV = tT.s1_256,
        tZ = tT.g0_256,
        t$ = tT.g1_256,
        t0 = tF.BlockHash,
        t1 = [
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
      function t2() {
        if (!(this instanceof t2)) return new t2();
        t0.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = t1),
          (this.W = Array(64));
      }
      function t3() {
        if (!(this instanceof t3)) return new t3();
        t2.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      tB.inherits(t2, t0),
        (t2.blockSize = 512),
        (t2.outSize = 256),
        (t2.hmacStrength = 192),
        (t2.padLength = 64),
        (t2.prototype._update = function (t, r) {
          for (var e = this.W, i = 0; i < 16; i++) e[i] = t[r + i];
          for (; i < e.length; i++)
            e[i] = tG(t$(e[i - 2]), e[i - 7], tZ(e[i - 15]), e[i - 16]);
          var n = this.h[0],
            o = this.h[1],
            s = this.h[2],
            f = this.h[3],
            h = this.h[4],
            u = this.h[5],
            a = this.h[6],
            l = this.h[7];
          for (tI(this.k.length === e.length), i = 0; i < e.length; i++) {
            var d = tK(l, tV(h), tj(h, u, a), this.k[i], e[i]),
              c = tJ(tW(n), tX(n, o, s));
            (l = a),
              (a = u),
              (u = h),
              (h = tJ(f, d)),
              (f = s),
              (s = o),
              (o = n),
              (n = tJ(d, c));
          }
          (this.h[0] = tJ(this.h[0], n)),
            (this.h[1] = tJ(this.h[1], o)),
            (this.h[2] = tJ(this.h[2], s)),
            (this.h[3] = tJ(this.h[3], f)),
            (this.h[4] = tJ(this.h[4], h)),
            (this.h[5] = tJ(this.h[5], u)),
            (this.h[6] = tJ(this.h[6], a)),
            (this.h[7] = tJ(this.h[7], l));
        }),
        (t2.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        }),
        tB.inherits(t3, t2),
        (t3.blockSize = 512),
        (t3.outSize = 224),
        (t3.hmacStrength = 192),
        (t3.padLength = 64),
        (t3.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h.slice(0, 7), "big")
            : tB.split32(this.h.slice(0, 7), "big");
        });
      var t6 = tB.rotr64_hi,
        t8 = tB.rotr64_lo,
        t4 = tB.shr64_hi,
        t5 = tB.shr64_lo,
        t7 = tB.sum64,
        t9 = tB.sum64_hi,
        rt = tB.sum64_lo,
        rr = tB.sum64_4_hi,
        re = tB.sum64_4_lo,
        ri = tB.sum64_5_hi,
        rn = tB.sum64_5_lo,
        ro = tF.BlockHash,
        rs = [
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
      function rf() {
        if (!(this instanceof rf)) return new rf();
        ro.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = rs),
          (this.W = Array(160));
      }
      function rh() {
        if (!(this instanceof rh)) return new rh();
        rf.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      tB.inherits(rf, ro),
        (rf.blockSize = 1024),
        (rf.outSize = 512),
        (rf.hmacStrength = 192),
        (rf.padLength = 128),
        (rf.prototype._prepareBlock = function (t, r) {
          for (var e = this.W, i = 0; i < 32; i++) e[i] = t[r + i];
          for (; i < e.length; i += 2) {
            var n = (function (t, r) {
                var e = t6(t, r, 19) ^ t6(r, t, 29) ^ t4(t, r, 6);
                return e < 0 && (e += 4294967296), e;
              })(e[i - 4], e[i - 3]),
              o = (function (t, r) {
                var e = t8(t, r, 19) ^ t8(r, t, 29) ^ t5(t, r, 6);
                return e < 0 && (e += 4294967296), e;
              })(e[i - 4], e[i - 3]),
              s = e[i - 14],
              f = e[i - 13],
              h = (function (t, r) {
                var e = t6(t, r, 1) ^ t6(t, r, 8) ^ t4(t, r, 7);
                return e < 0 && (e += 4294967296), e;
              })(e[i - 30], e[i - 29]),
              u = (function (t, r) {
                var e = t8(t, r, 1) ^ t8(t, r, 8) ^ t5(t, r, 7);
                return e < 0 && (e += 4294967296), e;
              })(e[i - 30], e[i - 29]),
              a = e[i - 32],
              l = e[i - 31];
            (e[i] = rr(n, o, s, f, h, u, a, l)),
              (e[i + 1] = re(n, o, s, f, h, u, a, l));
          }
        }),
        (rf.prototype._update = function (t, r) {
          this._prepareBlock(t, r);
          var e = this.W,
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
          tI(this.k.length === e.length);
          for (var b = 0; b < e.length; b += 2) {
            var y = A,
              w = v,
              M = (function (t, r) {
                var e = t6(t, r, 14) ^ t6(t, r, 18) ^ t6(r, t, 9);
                return e < 0 && (e += 4294967296), e;
              })(l, d),
              E = (function (t, r) {
                var e = t8(t, r, 14) ^ t8(t, r, 18) ^ t8(r, t, 9);
                return e < 0 && (e += 4294967296), e;
              })(l, d),
              S = (function (t, r, e, i, n) {
                var o = (t & e) ^ (~t & n);
                return o < 0 && (o += 4294967296), o;
              })(l, 0, c, 0, m),
              B = (function (t, r, e, i, n, o) {
                var s = (r & i) ^ (~r & o);
                return s < 0 && (s += 4294967296), s;
              })(0, d, 0, p, 0, g),
              I = this.k[b],
              N = this.k[b + 1],
              C = e[b],
              x = e[b + 1],
              _ = ri(y, w, M, E, S, B, I, N, C, x),
              R = rn(y, w, M, E, S, B, I, N, C, x);
            y = (function (t, r) {
              var e = t6(t, r, 28) ^ t6(r, t, 2) ^ t6(r, t, 7);
              return e < 0 && (e += 4294967296), e;
            })(i, n);
            var F = t9(
                y,
                (w = (function (t, r) {
                  var e = t8(t, r, 28) ^ t8(r, t, 2) ^ t8(r, t, 7);
                  return e < 0 && (e += 4294967296), e;
                })(i, n)),
                (M = (function (t, r, e, i, n) {
                  var o = (t & e) ^ (t & n) ^ (e & n);
                  return o < 0 && (o += 4294967296), o;
                })(i, 0, o, 0, f)),
                (E = (function (t, r, e, i, n, o) {
                  var s = (r & i) ^ (r & o) ^ (i & o);
                  return s < 0 && (s += 4294967296), s;
                })(0, n, 0, s, 0, h))
              ),
              k = rt(y, w, M, E);
            (A = m),
              (v = g),
              (m = c),
              (g = p),
              (c = l),
              (p = d),
              (l = t9(u, a, _, R)),
              (d = rt(a, a, _, R)),
              (u = f),
              (a = h),
              (f = o),
              (h = s),
              (o = i),
              (s = n),
              (i = t9(_, R, F, k)),
              (n = rt(_, R, F, k));
          }
          t7(this.h, 0, i, n),
            t7(this.h, 2, o, s),
            t7(this.h, 4, f, h),
            t7(this.h, 6, u, a),
            t7(this.h, 8, l, d),
            t7(this.h, 10, c, p),
            t7(this.h, 12, m, g),
            t7(this.h, 14, A, v);
        }),
        (rf.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "big")
            : tB.split32(this.h, "big");
        }),
        tB.inherits(rh, rf),
        (rh.blockSize = 1024),
        (rh.outSize = 384),
        (rh.hmacStrength = 192),
        (rh.padLength = 128),
        (rh.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h.slice(0, 12), "big")
            : tB.split32(this.h.slice(0, 12), "big");
        }),
        (tD.sha1 = tY),
        (tD.sha224 = t3),
        (tD.sha256 = t2),
        (tD.sha384 = rh),
        (tD.sha512 = rf);
      var ru = {},
        ra = tB.rotl32,
        rl = tB.sum32,
        rd = tB.sum32_3,
        rc = tB.sum32_4,
        rp = tF.BlockHash;
      function rm() {
        if (!(this instanceof rm)) return new rm();
        rp.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function rg(t, r, e, i) {
        return t <= 15
          ? r ^ e ^ i
          : t <= 31
          ? (r & e) | (~r & i)
          : t <= 47
          ? (r | ~e) ^ i
          : t <= 63
          ? (r & i) | (e & ~i)
          : r ^ (e | ~i);
      }
      tB.inherits(rm, rp),
        (ru.ripemd160 = rm),
        (rm.blockSize = 512),
        (rm.outSize = 160),
        (rm.hmacStrength = 192),
        (rm.padLength = 64),
        (rm.prototype._update = function (t, r) {
          for (
            var e = this.h[0],
              i = this.h[1],
              n = this.h[2],
              o = this.h[3],
              s = this.h[4],
              f = e,
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
              m = rl(
                ra(
                  rc(
                    e,
                    rg(d, i, n, o),
                    t[rA[d] + r],
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
                  rb[d]
                ),
                s
              );
            (e = s),
              (s = o),
              (o = ra(n, 10)),
              (n = i),
              (i = m),
              (m = rl(
                ra(
                  rc(
                    f,
                    rg(79 - d, h, u, a),
                    t[rv[d] + r],
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
                  ry[d]
                ),
                l
              )),
              (f = l),
              (l = a),
              (a = ra(u, 10)),
              (u = h),
              (h = m);
          }
          (m = rd(this.h[1], n, a)),
            (this.h[1] = rd(this.h[2], o, l)),
            (this.h[2] = rd(this.h[3], s, f)),
            (this.h[3] = rd(this.h[4], e, h)),
            (this.h[4] = rd(this.h[0], i, u)),
            (this.h[0] = m);
        }),
        (rm.prototype._digest = function (t) {
          return "hex" === t
            ? tB.toHex32(this.h, "little")
            : tB.split32(this.h, "little");
        });
      var rA = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        rv = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        rb = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        ry = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
      function rw(t, r, e) {
        if (!(this instanceof rw)) return new rw(t, r, e);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(tB.toArray(r, e));
      }
      function rM(t, r, e) {
        return (
          t(
            (e = {
              path: r,
              exports: {},
              require: function (t, r) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(t, r ?? e.path);
              },
            }),
            e.exports
          ),
          e.exports
        );
      }
      (rw.prototype._init = function (t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
          tI(t.length <= this.blockSize);
        for (var r = t.length; r < this.blockSize; r++) t.push(0);
        for (r = 0; r < t.length; r++) t[r] ^= 54;
        for (this.inner = new this.Hash().update(t), r = 0; r < t.length; r++)
          t[r] ^= 106;
        this.outer = new this.Hash().update(t);
      }),
        (rw.prototype.update = function (t, r) {
          return this.inner.update(t, r), this;
        }),
        (rw.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        }),
        (tS.utils = tB),
        (tS.common = tF),
        (tS.sha = tD),
        (tS.ripemd = ru),
        (tS.hmac = rw),
        (tS.sha1 = tS.sha.sha1),
        (tS.sha256 = tS.sha.sha256),
        (tS.sha224 = tS.sha.sha224),
        (tS.sha384 = tS.sha.sha384),
        (tS.sha512 = tS.sha.sha512),
        (tS.ripemd160 = tS.ripemd.ripemd160);
      var rE = rS;
      function rS(t, r) {
        if (!t) throw Error(r || "Assertion failed");
      }
      rS.equal = function (t, r, e) {
        if (t != r) throw Error(e || "Assertion failed: " + t + " != " + r);
      };
      var rB = rM(function (t, r) {
          function e(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function i(t) {
            for (var r = "", i = 0; i < t.length; i++)
              r += e(t[i].toString(16));
            return r;
          }
          (r.toArray = function (t, r) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var e = [];
            if ("string" != typeof t) {
              for (var i = 0; i < t.length; i++) e[i] = 0 | t[i];
              return e;
            }
            if ("hex" === r) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (t = "0" + t);
              for (var i = 0; i < t.length; i += 2)
                e.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i),
                  o = n >> 8,
                  s = 255 & n;
                o ? e.push(o, s) : e.push(s);
              }
            return e;
          }),
            (r.zero2 = e),
            (r.toHex = i),
            (r.encode = function (t, r) {
              return "hex" === r ? i(t) : t;
            });
        }),
        rI = rM(function (t, r) {
          (r.assert = rE),
            (r.toArray = rB.toArray),
            (r.zero2 = rB.zero2),
            (r.toHex = rB.toHex),
            (r.encode = rB.encode),
            (r.getNAF = function (t, r, e) {
              var i = Array(Math.max(t.bitLength(), e) + 1);
              i.fill(0);
              for (
                var n = 1 << (r + 1), o = t.clone(), s = 0;
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
            (r.getJSF = function (t, r) {
              var e = [[], []];
              (t = t.clone()), (r = r.clone());
              for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || r.cmpn(-o) > 0; ) {
                var s,
                  f,
                  h = (t.andln(3) + n) & 3,
                  u = (r.andln(3) + o) & 3;
                3 === h && (h = -1),
                  3 === u && (u = -1),
                  (s =
                    1 & h
                      ? (3 == (i = (t.andln(7) + n) & 7) || 5 === i) && 2 === u
                        ? -h
                        : h
                      : 0),
                  e[0].push(s),
                  (f =
                    1 & u
                      ? (3 == (i = (r.andln(7) + o) & 7) || 5 === i) && 2 === h
                        ? -u
                        : u
                      : 0),
                  e[1].push(f),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * o === f + 1 && (o = 1 - o),
                  t.iushrn(1),
                  r.iushrn(1);
              }
              return e;
            }),
            (r.cachedProperty = function (t, r, e) {
              var i = "_" + r;
              t.prototype[r] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = e.call(this));
              };
            }),
            (r.parseBytes = function (t) {
              return "string" == typeof t ? r.toArray(t, "hex") : t;
            }),
            (r.intFromLE = function (t) {
              return new L(t, "hex", "le");
            });
        }),
        rN = rI.getNAF,
        rC = rI.getJSF,
        rx = rI.assert;
      function r_(t, r) {
        (this.type = t),
          (this.p = new L(r.p, 16)),
          (this.red = r.prime ? L.red(r.prime) : L.mont(this.p)),
          (this.zero = new L(0).toRed(this.red)),
          (this.one = new L(1).toRed(this.red)),
          (this.two = new L(2).toRed(this.red)),
          (this.n = r.n && new L(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var e = this.n && this.p.div(this.n);
        !e || e.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function rR(t, r) {
        (this.curve = t), (this.type = r), (this.precomputed = null);
      }
      (r_.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (r_.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (r_.prototype._fixedNafMul = function (t, r) {
          rx(t.precomputed);
          var e = t._getDoubles(),
            i = rN(r, 1, this._bitLength),
            n = (1 << (e.step + 1)) - (e.step % 2 == 0 ? 2 : 1);
          n /= 3;
          var o,
            s,
            f = [];
          for (o = 0; o < i.length; o += e.step) {
            s = 0;
            for (var h = o + e.step - 1; h >= o; h--) s = (s << 1) + i[h];
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
                ? (a = a.mixedAdd(e.points[o]))
                : s === -l && (a = a.mixedAdd(e.points[o].neg()));
            u = u.add(a);
          }
          return u.toP();
        }),
        (r_.prototype._wnafMul = function (t, r) {
          var e = 4,
            i = t._getNAFPoints(e);
          e = i.wnd;
          for (
            var n = i.points,
              o = rN(r, e, this._bitLength),
              s = this.jpoint(null, null, null),
              f = o.length - 1;
            f >= 0;
            f--
          ) {
            for (var h = 0; f >= 0 && 0 === o[f]; f--) h++;
            if ((f >= 0 && h++, (s = s.dblp(h)), f < 0)) break;
            var u = o[f];
            rx(0 !== u),
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
        (r_.prototype._wnafMulAdd = function (t, r, e, i, n) {
          var o,
            s,
            f,
            h = this._wnafT1,
            u = this._wnafT2,
            a = this._wnafT3,
            l = 0;
          for (o = 0; o < i; o++) {
            var d = (f = r[o])._getNAFPoints(t);
            (h[o] = d.wnd), (u[o] = d.points);
          }
          for (o = i - 1; o >= 1; o -= 2) {
            var c = o - 1,
              p = o;
            if (1 !== h[c] || 1 !== h[p]) {
              (a[c] = rN(e[c], h[c], this._bitLength)),
                (a[p] = rN(e[p], h[p], this._bitLength)),
                (l = Math.max(a[c].length, l)),
                (l = Math.max(a[p].length, l));
              continue;
            }
            var m = [r[c], null, null, r[p]];
            0 === r[c].y.cmp(r[p].y)
              ? ((m[1] = r[c].add(r[p])),
                (m[2] = r[c].toJ().mixedAdd(r[p].neg())))
              : 0 === r[c].y.cmp(r[p].y.redNeg())
              ? ((m[1] = r[c].toJ().mixedAdd(r[p])),
                (m[2] = r[c].add(r[p].neg())))
              : ((m[1] = r[c].toJ().mixedAdd(r[p])),
                (m[2] = r[c].toJ().mixedAdd(r[p].neg())));
            var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              A = rC(e[c], e[p]);
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
        (r_.BasePoint = rR),
        (rR.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (rR.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (r_.prototype.decodePoint = function (t, r) {
          t = rI.toArray(t, r);
          var e = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * e)
            return (
              6 === t[0]
                ? rx(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && rx(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e)
            return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
          throw Error("Unknown point format");
        }),
        (rR.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (rR.prototype._encode = function (t) {
          var r = this.curve.p.byteLength(),
            e = this.getX().toArray("be", r);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(e)
            : [4].concat(e, this.getY().toArray("be", r));
        }),
        (rR.prototype.encode = function (t, r) {
          return rI.encode(this._encode(r), t);
        }),
        (rR.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, t)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (rR.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
          );
        }),
        (rR.prototype._getDoubles = function (t, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var e = [this], i = this, n = 0; n < r; n += t) {
            for (var o = 0; o < t; o++) i = i.dbl();
            e.push(i);
          }
          return { step: t, points: e };
        }),
        (rR.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              e = (1 << t) - 1,
              i = 1 === e ? null : this.dbl(),
              n = 1;
            n < e;
            n++
          )
            r[n] = r[n - 1].add(i);
          return { wnd: t, points: r };
        }),
        (rR.prototype._getBeta = function () {
          return null;
        }),
        (rR.prototype.dblp = function (t) {
          for (var r = this, e = 0; e < t; e++) r = r.dbl();
          return r;
        });
      var rF = rM(function (t) {
          "function" == typeof Object.create
            ? (t.exports = function (t, r) {
                r &&
                  ((t.super_ = r),
                  (t.prototype = Object.create(r.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, r) {
                if (r) {
                  t.super_ = r;
                  var e = function () {};
                  (e.prototype = r.prototype),
                    (t.prototype = new e()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        rk = rI.assert;
      function rD(t) {
        r_.call(this, "short", t),
          (this.a = new L(t.a, 16).toRed(this.red)),
          (this.b = new L(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function rT(t, r, e, i) {
        r_.BasePoint.call(this, t, "affine"),
          null === r && null === e
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new L(r, 16)),
              (this.y = new L(e, 16)),
              i &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function rU(t, r, e, i) {
        r_.BasePoint.call(this, t, "jacobian"),
          null === r && null === e && null === i
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new L(0)))
            : ((this.x = new L(r, 16)),
              (this.y = new L(e, 16)),
              (this.z = new L(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      rF(rD, r_),
        (rD.prototype._getEndomorphism = function (t) {
          if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
            if (t.beta) r = new L(t.beta, 16).toRed(this.red);
            else {
              var r,
                e,
                i,
                n = this._getEndoRoots(this.p);
              r = (r = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red);
            }
            if (t.lambda) e = new L(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))
                ? (e = o[0])
                : ((e = o[1]),
                  rk(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))));
            }
            return (
              (i = t.basis
                ? t.basis.map(function (t) {
                    return { a: new L(t.a, 16), b: new L(t.b, 16) };
                  })
                : this._getEndoBasis(e)),
              { beta: r, lambda: e, basis: i }
            );
          }
        }),
        (rD.prototype._getEndoRoots = function (t) {
          var r = t === this.p ? this.red : L.mont(t),
            e = new L(2).toRed(r).redInvm(),
            i = e.redNeg(),
            n = new L(3).toRed(r).redNeg().redSqrt().redMul(e);
          return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
        }),
        (rD.prototype._getEndoBasis = function (t) {
          for (
            var r,
              e,
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
              c = new L(1),
              p = new L(0),
              m = new L(0),
              g = new L(1),
              A = 0;
            0 !== l.cmpn(0);

          ) {
            var v = d.div(l);
            (h = d.sub(v.mul(l))), (u = m.sub(v.mul(c)));
            var b = g.sub(v.mul(p));
            if (!i && 0 > h.cmp(a))
              (r = f.neg()), (e = c), (i = h.neg()), (n = u);
            else if (i && 2 == ++A) break;
            (f = h), (d = l), (l = h), (m = c), (c = u), (g = p), (p = b);
          }
          (o = h.neg()), (s = u);
          var y = i.sqr().add(n.sqr());
          return (
            o.sqr().add(s.sqr()).cmp(y) >= 0 && ((o = r), (s = e)),
            i.negative && ((i = i.neg()), (n = n.neg())),
            o.negative && ((o = o.neg()), (s = s.neg())),
            [
              { a: i, b: n },
              { a: o, b: s },
            ]
          );
        }),
        (rD.prototype._endoSplit = function (t) {
          var r = this.endo.basis,
            e = r[0],
            i = r[1],
            n = i.b.mul(t).divRound(this.n),
            o = e.b.neg().mul(t).divRound(this.n),
            s = n.mul(e.a),
            f = o.mul(i.a),
            h = n.mul(e.b),
            u = o.mul(i.b);
          return { k1: t.sub(s).sub(f), k2: h.add(u).neg() };
        }),
        (rD.prototype.pointFromX = function (t, r) {
          (t = new L(t, 16)).red || (t = t.toRed(this.red));
          var e = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            i = e.redSqrt();
          if (0 !== i.redSqr().redSub(e).cmp(this.zero))
            throw Error("invalid point");
          var n = i.fromRed().isOdd();
          return ((r && !n) || (!r && n)) && (i = i.redNeg()), this.point(t, i);
        }),
        (rD.prototype.validate = function (t) {
          if (t.inf) return !0;
          var r = t.x,
            e = t.y,
            i = this.a.redMul(r),
            n = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
          return 0 === e.redSqr().redISub(n).cmpn(0);
        }),
        (rD.prototype._endoWnafMulAdd = function (t, r, e) {
          for (
            var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var s = this._endoSplit(r[o]),
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
            var u = this._wnafMulAdd(1, i, n, 2 * o, e), a = 0;
            a < 2 * o;
            a++
          )
            (i[a] = null), (n[a] = null);
          return u;
        }),
        rF(rT, r_.BasePoint),
        (rD.prototype.point = function (t, r, e) {
          return new rT(this, t, r, e);
        }),
        (rD.prototype.pointFromJSON = function (t, r) {
          return rT.fromJSON(this, t, r);
        }),
        (rT.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var e = this.curve,
                i = function (t) {
                  return e.point(t.x.redMul(e.endo.beta), t.y);
                };
              (t.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i),
                  },
                });
            }
            return r;
          }
        }),
        (rT.prototype.toJSON = function () {
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
        (rT.fromJSON = function (t, r, e) {
          "string" == typeof r && (r = JSON.parse(r));
          var i = t.point(r[0], r[1], e);
          if (!r[2]) return i;
          function n(r) {
            return t.point(r[0], r[1], e);
          }
          var o = r[2];
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
        (rT.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (rT.prototype.isInfinity = function () {
          return this.inf;
        }),
        (rT.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
            return this.curve.point(null, null);
          var r = this.y.redSub(t.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
          var e = r.redSqr().redISub(this.x).redISub(t.x),
            i = r.redMul(this.x.redSub(e)).redISub(this.y);
          return this.curve.point(e, i);
        }),
        (rT.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            e = this.x.redSqr(),
            i = t.redInvm(),
            n = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(i),
            o = n.redSqr().redISub(this.x.redAdd(this.x)),
            s = n.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (rT.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (rT.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (rT.prototype.mul = function (t) {
          return (
            (t = new L(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (rT.prototype.mulAdd = function (t, r, e) {
          var i = [this, r],
            n = [t, e];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2);
        }),
        (rT.prototype.jmulAdd = function (t, r, e) {
          var i = [this, r],
            n = [t, e];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0);
        }),
        (rT.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (rT.prototype.neg = function (t) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var e = this.precomputed,
              i = function (t) {
                return t.neg();
              };
            r.precomputed = {
              naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
              doubles: e.doubles && {
                step: e.doubles.step,
                points: e.doubles.points.map(i),
              },
            };
          }
          return r;
        }),
        (rT.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        rF(rU, r_.BasePoint),
        (rD.prototype.jpoint = function (t, r, e) {
          return new rU(this, t, r, e);
        }),
        (rU.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            r = t.redSqr(),
            e = this.x.redMul(r),
            i = this.y.redMul(r).redMul(t);
          return this.curve.point(e, i);
        }),
        (rU.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (rU.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var r = t.z.redSqr(),
            e = this.z.redSqr(),
            i = this.x.redMul(r),
            n = t.x.redMul(e),
            o = this.y.redMul(r.redMul(t.z)),
            s = t.y.redMul(e.redMul(this.z)),
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
        (rU.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var r = this.z.redSqr(),
            e = this.x,
            i = t.x.redMul(r),
            n = this.y,
            o = t.y.redMul(r).redMul(this.z),
            s = e.redSub(i),
            f = n.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var h = s.redSqr(),
            u = h.redMul(s),
            a = e.redMul(h),
            l = f.redSqr().redIAdd(u).redISub(a).redISub(a),
            d = f.redMul(a.redISub(l)).redISub(n.redMul(u)),
            c = this.z.redMul(s);
          return this.curve.jpoint(l, d, c);
        }),
        (rU.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var r,
              e = this;
            for (r = 0; r < t; r++) e = e.dbl();
            return e;
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            o = this.x,
            s = this.y,
            f = this.z,
            h = f.redSqr().redSqr(),
            u = s.redAdd(s);
          for (r = 0; r < t; r++) {
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
            r + 1 < t && (h = h.redMul(d)), (o = m), (f = v), (u = A);
          }
          return this.curve.jpoint(o, u.redMul(n), f);
        }),
        (rU.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (rU.prototype._zeroDbl = function () {
          var t, r, e;
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
              (r = f.redMul(s.redISub(h)).redISub(u)),
              (e = this.y.redAdd(this.y));
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
              (r = p.redMul(c.redISub(t)).redISub(g)),
              (e = (e = this.y.redMul(this.z)).redIAdd(e));
          }
          return this.curve.jpoint(t, r, e);
        }),
        (rU.prototype._threeDbl = function () {
          var t, r, e;
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
              (r = f.redMul(s.redISub(h)).redISub(u)),
              (e = this.y.redAdd(this.y));
          } else {
            var a = this.z.redSqr(),
              l = this.y.redSqr(),
              d = this.x.redMul(l),
              c = this.x.redSub(a).redMul(this.x.redAdd(a));
            c = c.redAdd(c).redIAdd(c);
            var p = d.redIAdd(d),
              m = (p = p.redIAdd(p)).redAdd(p);
            (t = c.redSqr().redISub(m)),
              (e = this.y.redAdd(this.z).redSqr().redISub(l).redISub(a));
            var g = l.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (r = c.redMul(p.redISub(t)).redISub(g));
          }
          return this.curve.jpoint(t, r, e);
        }),
        (rU.prototype._dbl = function () {
          var t = this.curve.a,
            r = this.x,
            e = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            o = r.redSqr(),
            s = e.redSqr(),
            f = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
            h = r.redAdd(r),
            u = (h = h.redIAdd(h)).redMul(s),
            a = f.redSqr().redISub(u.redAdd(u)),
            l = u.redISub(a),
            d = s.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var c = f.redMul(l).redISub(d),
            p = e.redAdd(e).redMul(i);
          return this.curve.jpoint(a, c, p);
        }),
        (rU.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            r = this.y.redSqr(),
            e = this.z.redSqr(),
            i = r.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            o = n.redSqr(),
            s = this.x.redAdd(r).redSqr().redISub(t).redISub(i),
            f = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            h = i.redIAdd(i);
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var u = n.redIAdd(s).redSqr().redISub(o).redISub(f).redISub(h),
            a = r.redMul(u);
          a = (a = a.redIAdd(a)).redIAdd(a);
          var l = this.x.redMul(f).redISub(a);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var d = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(f)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var c = this.z.redAdd(s).redSqr().redISub(e).redISub(f);
          return this.curve.jpoint(l, d, c);
        }),
        (rU.prototype.mul = function (t, r) {
          return (t = new L(t, r)), this.curve._wnafMul(this, t);
        }),
        (rU.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var r = this.z.redSqr(),
            e = t.z.redSqr();
          if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
          var i = r.redMul(this.z),
            n = e.redMul(t.z);
          return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
        }),
        (rU.prototype.eqXToP = function (t) {
          var r = this.z.redSqr(),
            e = t.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(e)) return !0;
          for (var i = t.clone(), n = this.curve.redN.redMul(r); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0;
          }
        }),
        (rU.prototype.inspect = function () {
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
        (rU.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var rO = rM(function (t, r) {
          (r.base = r_), (r.short = rD), (r.mont = null), (r.edwards = null);
        }),
        rP = rM(function (t, r) {
          var e,
            i = rI.assert;
          function n(t) {
            "short" === t.type
              ? (this.curve = new rO.short(t))
              : "edwards" === t.type
              ? (this.curve = new rO.edwards(t))
              : (this.curve = new rO.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(t, e) {
            Object.defineProperty(r, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var i = new n(e);
                return (
                  Object.defineProperty(r, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                  }),
                  i
                );
              },
            });
          }
          (r.PresetCurve = n),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: tS.sha256,
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
              hash: tS.sha256,
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
              hash: tS.sha256,
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
              hash: tS.sha384,
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
              hash: tS.sha512,
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
              hash: tS.sha256,
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
              hash: tS.sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            e = null.crash();
          } catch {
            e = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: tS.sha256,
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
              e,
            ],
          });
        });
      function rq(t) {
        if (!(this instanceof rq)) return new rq(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = rB.toArray(t.entropy, t.entropyEnc || "hex"),
          e = rB.toArray(t.nonce, t.nonceEnc || "hex"),
          i = rB.toArray(t.pers, t.persEnc || "hex");
        rE(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, e, i);
      }
      (rq.prototype._init = function (t, r, e) {
        var i = t.concat(r).concat(e);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var n = 0; n < this.V.length; n++)
          (this.K[n] = 0), (this.V[n] = 1);
        this._update(i),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (rq.prototype._hmac = function () {
          return new tS.hmac(this.hash, this.K);
        }),
        (rq.prototype._update = function (t) {
          var r = this._hmac().update(this.V).update([0]);
          t && (r = r.update(t)),
            (this.K = r.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (rq.prototype.reseed = function (t, r, e, i) {
          "string" != typeof r && ((i = e), (e = r), (r = null)),
            (t = rB.toArray(t, r)),
            (e = rB.toArray(e, i)),
            rE(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(e || [])),
            (this._reseed = 1);
        }),
        (rq.prototype.generate = function (t, r, e, i) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof r && ((i = e), (e = r), (r = null)),
            e && ((e = rB.toArray(e, i || "hex")), this._update(e));
          for (var n = []; n.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (n = n.concat(this.V));
          var o = n.slice(0, t);
          return this._update(e), this._reseed++, rB.encode(o, r);
        });
      var rz = rI.assert;
      function rL(t, r) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      (rL.fromPublic = function (t, r, e) {
        return r instanceof rL ? r : new rL(t, { pub: r, pubEnc: e });
      }),
        (rL.fromPrivate = function (t, r, e) {
          return r instanceof rL ? r : new rL(t, { priv: r, privEnc: e });
        }),
        (rL.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (rL.prototype.getPublic = function (t, r) {
          return (
            "string" == typeof t && ((r = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, t) : this.pub
          );
        }),
        (rL.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (rL.prototype._importPrivate = function (t, r) {
          (this.priv = new L(t, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (rL.prototype._importPublic = function (t, r) {
          if (t.x || t.y) {
            "mont" === this.ec.curve.type
              ? rz(t.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                rz(t.x && t.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, r);
        }),
        (rL.prototype.derive = function (t) {
          return (
            t.validate() || rz(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (rL.prototype.sign = function (t, r, e) {
          return this.ec.sign(t, this, r, e);
        }),
        (rL.prototype.verify = function (t, r) {
          return this.ec.verify(t, r, this);
        }),
        (rL.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var rQ = rI.assert;
      function rH(t, r) {
        if (t instanceof rH) return t;
        this._importDER(t, r) ||
          (rQ(t.r && t.s, "Signature without r or s"),
          (this.r = new L(t.r, 16)),
          (this.s = new L(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function rY() {
        this.place = 0;
      }
      function rJ(t, r) {
        var e = t[r.place++];
        if (!(128 & e)) return e;
        var i = 15 & e;
        if (0 === i || i > 4) return !1;
        for (var n = 0, o = 0, s = r.place; o < i; o++, s++)
          (n <<= 8), (n |= t[s]), (n >>>= 0);
        return !(n <= 127) && ((r.place = s), n);
      }
      function rG(t) {
        for (var r = 0, e = t.length - 1; !t[r] && !(128 & t[r + 1]) && r < e; )
          r++;
        return 0 === r ? t : t.slice(r);
      }
      function rK(t, r) {
        if (r < 128) {
          t.push(r);
          return;
        }
        var e = 1 + ((Math.log(r) / Math.LN2) >>> 3);
        for (t.push(128 | e); --e; ) t.push((r >>> (e << 3)) & 255);
        t.push(r);
      }
      (rH.prototype._importDER = function (t, r) {
        t = rI.toArray(t, r);
        var e = new rY();
        if (48 !== t[e.place++]) return !1;
        var i = rJ(t, e);
        if (!1 === i || i + e.place !== t.length || 2 !== t[e.place++])
          return !1;
        var n = rJ(t, e);
        if (!1 === n) return !1;
        var o = t.slice(e.place, n + e.place);
        if (((e.place += n), 2 !== t[e.place++])) return !1;
        var s = rJ(t, e);
        if (!1 === s || t.length !== s + e.place) return !1;
        var f = t.slice(e.place, s + e.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === f[0]) {
          if (!(128 & f[1])) return !1;
          f = f.slice(1);
        }
        return (
          (this.r = new L(o)),
          (this.s = new L(f)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (rH.prototype.toDER = function (t) {
          var r = this.r.toArray(),
            e = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & e[0] && (e = [0].concat(e)),
              r = rG(r),
              e = rG(e);
            !e[0] && !(128 & e[1]);

          )
            e = e.slice(1);
          var i = [2];
          rK(i, r.length), (i = i.concat(r)).push(2), rK(i, e.length);
          var n = i.concat(e),
            o = [48];
          return rK(o, n.length), (o = o.concat(n)), rI.encode(o, t);
        });
      var rj = function () {
          throw Error("unsupported");
        },
        rX = rI.assert;
      function rW(t) {
        if (!(this instanceof rW)) return new rW(t);
        "string" == typeof t &&
          (rX(
            Object.prototype.hasOwnProperty.call(rP, t),
            "Unknown curve " + t
          ),
          (t = rP[t])),
          t instanceof rP.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (rW.prototype.keyPair = function (t) {
        return new rL(this, t);
      }),
        (rW.prototype.keyFromPrivate = function (t, r) {
          return rL.fromPrivate(this, t, r);
        }),
        (rW.prototype.keyFromPublic = function (t, r) {
          return rL.fromPublic(this, t, r);
        }),
        (rW.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var r = new rq({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || rj(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              e = this.n.byteLength(),
              i = this.n.sub(new L(2));
            ;

          ) {
            var n = new L(r.generate(e));
            if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
          }
        }),
        (rW.prototype._truncateToN = function (t, r) {
          var e = 8 * t.byteLength() - this.n.bitLength();
          return (
            e > 0 && (t = t.ushrn(e)),
            !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (rW.prototype.sign = function (t, r, e, i) {
          "object" == typeof e && ((i = e), (e = null)),
            i || (i = {}),
            (r = this.keyFromPrivate(r, e)),
            (t = this._truncateToN(new L(t, 16)));
          for (
            var n = this.n.byteLength(),
              o = r.getPrivate().toArray("be", n),
              s = t.toArray("be", n),
              f = new rq({
                hash: this.hash,
                entropy: o,
                nonce: s,
                pers: i.pers,
                persEnc: i.persEnc || "utf8",
              }),
              h = this.n.sub(new L(1)),
              u = 0;
            ;
            u++
          ) {
            var a = i.k ? i.k(u) : new L(f.generate(this.n.byteLength()));
            if (
              !(0 >= (a = this._truncateToN(a, !0)).cmpn(1) || a.cmp(h) >= 0)
            ) {
              var l = this.g.mul(a);
              if (!l.isInfinity()) {
                var d = l.getX(),
                  c = d.umod(this.n);
                if (0 !== c.cmpn(0)) {
                  var p = a.invm(this.n).mul(c.mul(r.getPrivate()).iadd(t));
                  if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                    var m =
                      (l.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(c) ? 2 : 0);
                    return (
                      i.canonical &&
                        p.cmp(this.nh) > 0 &&
                        ((p = this.n.sub(p)), (m ^= 1)),
                      new rH({ r: c, s: p, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (rW.prototype.verify = function (t, r, e, i) {
          (t = this._truncateToN(new L(t, 16))), (e = this.keyFromPublic(e, i));
          var n = (r = new rH(r, "hex")).r,
            o = r.s;
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
            ? !(s = this.g.jmulAdd(h, e.getPublic(), u)).isInfinity() &&
                s.eqXToP(n)
            : !(s = this.g.mulAdd(h, e.getPublic(), u)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(n);
        }),
        (rW.prototype.recoverPubKey = function (t, r, e, i) {
          rX((3 & e) === e, "The recovery param is more than two bits"),
            (r = new rH(r, i));
          var n = this.n,
            o = new L(t),
            s = r.r,
            f = r.s,
            h = 1 & e,
            u = e >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw Error("Unable to find sencond key candinate");
          s = u
            ? this.curve.pointFromX(s.add(this.curve.n), h)
            : this.curve.pointFromX(s, h);
          var a = r.r.invm(n),
            l = n.sub(o).mul(a).umod(n),
            d = f.mul(a).umod(n);
          return this.g.mulAdd(l, s, d);
        }),
        (rW.prototype.getKeyRecoveryParam = function (t, r, e, i) {
          if (null !== (r = new rH(r, i)).recoveryParam) return r.recoveryParam;
          for (var n, o = 0; o < 4; o++) {
            try {
              n = this.recoverPubKey(t, r, o);
            } catch {
              continue;
            }
            if (n.eq(e)) return o;
          }
          throw Error("Unable to find valid recovery factor");
        }),
        rM(function (t, r) {
          (r.version = "6.5.4"),
            (r.utils = rI),
            (r.rand = function () {
              throw Error("unsupported");
            }),
            (r.curve = rO),
            (r.curves = rP),
            (r.ec = rW),
            (r.eddsa = null);
        }).ec,
        new C("signing-key/5.7.0"),
        new C("transactions/5.7.0"),
        ((m = a || (a = {}))[(m.legacy = 0)] = "legacy"),
        (m[(m.eip2930 = 1)] = "eip2930"),
        (m[(m.eip1559 = 2)] = "eip1559"),
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
    },
  },
]);