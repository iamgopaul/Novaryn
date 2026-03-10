var __defProp = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// src/middleware/errorHandler.ts
function errorResponse(message, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

// node_modules/@neondatabase/serverless/index.mjs
function ha(r) {
  return 0;
}
function Yt(r, e = false) {
  let { protocol: t } = new URL(r), n = "http:" + r.substring(t.length), { username: i, password: s, host: o, hostname: u, port: c, pathname: l, search: f, searchParams: y, hash: g } = new URL(n);
  s = decodeURIComponent(s), i = decodeURIComponent(i), l = decodeURIComponent(l);
  let A = i + ":" + s, C = e ? Object.fromEntries(y.entries()) : f;
  return {
    href: r,
    protocol: t,
    auth: A,
    username: i,
    password: s,
    host: o,
    hostname: u,
    port: c,
    pathname: l,
    search: f,
    query: C,
    hash: g
  };
}
function Xe(r) {
  let e = 1779033703, t = 3144134277, n = 1013904242, i = 2773480762, s = 1359893119, o = 2600822924, u = 528734635, c = 1541459225, l = 0, f = 0, y = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], g = a((I, w) => I >>> w | I << 32 - w, "rrot"), A = new Uint32Array(64), C = new Uint8Array(64), D = a(() => {
    for (let R = 0, j = 0;R < 16; R++, j += 4)
      A[R] = C[j] << 24 | C[j + 1] << 16 | C[j + 2] << 8 | C[j + 3];
    for (let R = 16;R < 64; R++) {
      let j = g(A[R - 15], 7) ^ g(A[R - 15], 18) ^ A[R - 15] >>> 3, le = g(A[R - 2], 17) ^ g(A[R - 2], 19) ^ A[R - 2] >>> 10;
      A[R] = A[R - 16] + j + A[R - 7] + le | 0;
    }
    let I = e, w = t, Z = n, W = i, J = s, X = o, se = u, oe = c;
    for (let R = 0;R < 64; R++) {
      let j = g(J, 6) ^ g(J, 11) ^ g(J, 25), le = J & X ^ ~J & se, de = oe + j + le + y[R] + A[R] | 0, We = g(I, 2) ^ g(I, 13) ^ g(I, 22), fe = I & w ^ I & Z ^ w & Z, _e = We + fe | 0;
      oe = se, se = X, X = J, J = W + de | 0, W = Z, Z = w, w = I, I = de + _e | 0;
    }
    e = e + I | 0, t = t + w | 0, n = n + Z | 0, i = i + W | 0, s = s + J | 0, o = o + X | 0, u = u + se | 0, c = c + oe | 0, f = 0;
  }, "process"), Y = a((I) => {
    typeof I == "string" && (I = new TextEncoder().encode(I));
    for (let w = 0;w < I.length; w++)
      C[f++] = I[w], f === 64 && D();
    l += I.length;
  }, "add"), P = a(() => {
    if (C[f++] = 128, f == 64 && D(), f + 8 > 64) {
      for (;f < 64; )
        C[f++] = 0;
      D();
    }
    for (;f < 58; )
      C[f++] = 0;
    let I = l * 8;
    C[f++] = I / 1099511627776 & 255, C[f++] = I / 4294967296 & 255, C[f++] = I >>> 24, C[f++] = I >>> 16 & 255, C[f++] = I >>> 8 & 255, C[f++] = I & 255, D();
    let w = new Uint8Array(32);
    return w[0] = e >>> 24, w[1] = e >>> 16 & 255, w[2] = e >>> 8 & 255, w[3] = e & 255, w[4] = t >>> 24, w[5] = t >>> 16 & 255, w[6] = t >>> 8 & 255, w[7] = t & 255, w[8] = n >>> 24, w[9] = n >>> 16 & 255, w[10] = n >>> 8 & 255, w[11] = n & 255, w[12] = i >>> 24, w[13] = i >>> 16 & 255, w[14] = i >>> 8 & 255, w[15] = i & 255, w[16] = s >>> 24, w[17] = s >>> 16 & 255, w[18] = s >>> 8 & 255, w[19] = s & 255, w[20] = o >>> 24, w[21] = o >>> 16 & 255, w[22] = o >>> 8 & 255, w[23] = o & 255, w[24] = u >>> 24, w[25] = u >>> 16 & 255, w[26] = u >>> 8 & 255, w[27] = u & 255, w[28] = c >>> 24, w[29] = c >>> 16 & 255, w[30] = c >>> 8 & 255, w[31] = c & 255, w;
  }, "digest");
  return r === undefined ? { add: Y, digest: P } : (Y(r), P());
}
function gu(r) {
  return crypto.getRandomValues(d.alloc(r));
}
function bu(r) {
  if (r === "sha256")
    return { update: a(function(e) {
      return { digest: a(function() {
        return d.from(Xe(e));
      }, "digest") };
    }, "update") };
  if (r === "md5")
    return { update: a(function(e) {
      return {
        digest: a(function() {
          return typeof e == "string" ? et.hashStr(e) : et.hashByteArray(e);
        }, "digest")
      };
    }, "update") };
  throw new Error(`Hash type '${r}' not supported`);
}
function vu(r, e) {
  if (r !== "sha256")
    throw new Error(`Only sha256 is supported (requested: '${r}')`);
  return { update: a(function(t) {
    return { digest: a(function() {
      typeof e == "string" && (e = new TextEncoder().encode(e)), typeof t == "string" && (t = new TextEncoder().encode(t));
      let n = e.length;
      if (n > 64)
        e = Xe(e);
      else if (n < 64) {
        let c = new Uint8Array(64);
        c.set(e), e = c;
      }
      let i = new Uint8Array(64), s = new Uint8Array(64);
      for (let c = 0;c < 64; c++)
        i[c] = 54 ^ e[c], s[c] = 92 ^ e[c];
      let o = new Uint8Array(t.length + 64);
      o.set(i, 0), o.set(t, 64);
      let u = new Uint8Array(96);
      return u.set(s, 0), u.set(Xe(o), 64), d.from(Xe(u));
    }, "digest") };
  }, "update") };
}
function ju(...r) {
  return r.join("/");
}
function Hu(r, e) {
  e(new Error("No filesystem"));
}
function $c({ socket: r, servername: e }) {
  return r.startTls(e), r;
}
function Ea(r, { alphabet: e, scratchArr: t } = {}) {
  if (!He)
    if (He = new Uint16Array(256), wt = new Uint16Array(256), xi)
      for (let C = 0;C < 256; C++)
        He[C] = yt[C & 15] << 8 | yt[C >>> 4], wt[C] = mt[C & 15] << 8 | mt[C >>> 4];
    else
      for (let C = 0;C < 256; C++)
        He[C] = yt[C & 15] | yt[C >>> 4] << 8, wt[C] = mt[C & 15] | mt[C >>> 4] << 8;
  r.byteOffset % 4 !== 0 && (r = new Uint8Array(r));
  let n = r.length, i = n >>> 1, s = n >>> 2, o = t || new Uint16Array(n), u = new Uint32Array(r.buffer, r.byteOffset, s), c = new Uint32Array(o.buffer, o.byteOffset, i), l = e === "upper" ? wt : He, f = 0, y = 0, g;
  if (xi)
    for (;f < s; )
      g = u[f++], c[y++] = l[g >>> 8 & 255] << 16 | l[g & 255], c[y++] = l[g >>> 24] << 16 | l[g >>> 16 & 255];
  else
    for (;f < s; )
      g = u[f++], c[y++] = l[g >>> 24] << 16 | l[g >>> 16 & 255], c[y++] = l[g >>> 8 & 255] << 16 | l[g & 255];
  for (f <<= 2;f < n; )
    o[f] = l[r[f++]];
  return xa.decode(o.subarray(0, n));
}
function Aa(r, e = {}) {
  let t = "", n = r.length, i = va >>> 1, s = Math.ceil(n / i), o = new Uint16Array(s > 1 ? i : n);
  for (let u = 0;u < s; u++) {
    let c = u * i, l = c + i;
    t += Ea(r.subarray(c, l), ba(ga({}, e), { scratchArr: o }));
  }
  return t;
}
function Ei(r, e = {}) {
  return e.alphabet !== "upper" && typeof r.toHex == "function" ? r.toHex() : Aa(r, e);
}
function bt() {
  typeof window < "u" && typeof document < "u" && typeof console < "u" && typeof console.warn == "function" && console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`);
}
function Lu(r) {
  return r instanceof d ? "\\x" + Ei(r) : r;
}
function ss(r) {
  let { query: e, params: t } = r instanceof $e ? r.toParameterizedQuery() : r;
  return { query: e, params: t.map((n) => Lu((0, us.prepareValue)(n))) };
}
function cs(r, {
  arrayMode: e,
  fullResults: t,
  fetchOptions: n,
  isolationLevel: i,
  readOnly: s,
  deferrable: o,
  authToken: u,
  disableWarningInBrowsers: c
} = {}) {
  if (!r)
    throw new Error("No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?");
  let l;
  try {
    l = Yt(r);
  } catch {
    throw new Error("Database connection string provided to `neon()` is not a valid URL. Connection string: " + String(r));
  }
  let { protocol: f, username: y, hostname: g, port: A, pathname: C } = l;
  if (f !== "postgres:" && f !== "postgresql:" || !y || !g || !C)
    throw new Error("Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
  function D(P, ...I) {
    if (!(Array.isArray(P) && Array.isArray(P.raw) && Array.isArray(I)))
      throw new Error('This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).');
    return new Ce(Y, new $e(P, I));
  }
  a(D, "templateFn"), D.query = (P, I, w) => new Ce(Y, { query: P, params: I ?? [] }, w), D.unsafe = (P) => new Ge(P), D.transaction = async (P, I) => {
    if (typeof P == "function" && (P = P(D)), !Array.isArray(P))
      throw new Error(is);
    P.forEach((W) => {
      if (!(W instanceof Ce))
        throw new Error(is);
    });
    let w = P.map((W) => W.queryData), Z = P.map((W) => W.opts ?? {});
    return Y(w, Z, I);
  };
  async function Y(P, I, w) {
    let { fetchEndpoint: Z, fetchFunction: W } = ce, J = Array.isArray(P) ? { queries: P.map((ee) => ss(ee)) } : ss(P), X = n ?? {}, se = e ?? false, oe = t ?? false, R = i, j = s, le = o;
    w !== undefined && (w.fetchOptions !== undefined && (X = { ...X, ...w.fetchOptions }), w.arrayMode !== undefined && (se = w.arrayMode), w.fullResults !== undefined && (oe = w.fullResults), w.isolationLevel !== undefined && (R = w.isolationLevel), w.readOnly !== undefined && (j = w.readOnly), w.deferrable !== undefined && (le = w.deferrable)), I !== undefined && !Array.isArray(I) && I.fetchOptions !== undefined && (X = { ...X, ...I.fetchOptions });
    let de = u;
    !Array.isArray(I) && I?.authToken !== undefined && (de = I.authToken);
    let We = typeof Z == "function" ? Z(g, A, { jwtAuth: de !== undefined }) : Z, fe = { "Neon-Connection-String": r, "Neon-Raw-Text-Output": "true", "Neon-Array-Mode": "true" }, _e = await Fu(de);
    _e && (fe.Authorization = `Bearer ${_e}`), Array.isArray(P) && (R !== undefined && (fe["Neon-Batch-Isolation-Level"] = R), j !== undefined && (fe["Neon-Batch-Read-Only"] = String(j)), le !== undefined && (fe["Neon-Batch-Deferrable"] = String(le))), c || ce.disableWarningInBrowsers || bt();
    let ye;
    try {
      ye = await (W ?? fetch)(We, { method: "POST", body: JSON.stringify(J), headers: fe, ...X });
    } catch (ee) {
      let M = new be(`Error connecting to database: ${ee}`);
      throw M.sourceError = ee, M;
    }
    if (ye.ok) {
      let ee = await ye.json();
      if (Array.isArray(P)) {
        let M = ee.results;
        if (!Array.isArray(M))
          throw new be("Neon internal error: unexpected result format");
        return M.map(($, me) => {
          let Ot = I[me] ?? {}, vo = Ot.arrayMode ?? se, xo = Ot.fullResults ?? oe;
          return os($, { arrayMode: vo, fullResults: xo, types: Ot.types });
        });
      } else {
        let M = I ?? {}, $ = M.arrayMode ?? se, me = M.fullResults ?? oe;
        return os(ee, { arrayMode: $, fullResults: me, types: M.types });
      }
    } else {
      let { status: ee } = ye;
      if (ee === 400) {
        let M = await ye.json(), $ = new be(M.message);
        for (let me of Ru)
          $[me] = M[me] ?? undefined;
        throw $;
      } else {
        let M = await ye.text();
        throw new be(`Server error (HTTP status ${ee}): ${M}`);
      }
    }
  }
  return a(Y, "execute"), D;
}
function os(r, {
  arrayMode: e,
  fullResults: t,
  types: n
}) {
  let i = new as.default(n), s = r.fields.map((c) => c.name), o = r.fields.map((c) => i.getTypeParser(c.dataTypeID)), u = e === true ? r.rows.map((c) => c.map((l, f) => l === null ? null : o[f](l))) : r.rows.map((c) => Object.fromEntries(c.map((l, f) => [s[f], l === null ? null : o[f](l)])));
  return t ? (r.viaNeonFetch = true, r.rowAsArray = e, r.rows = u, r._parsers = o, r._types = i, r) : u;
}
async function Fu(r) {
  if (typeof r == "string")
    return r;
  if (typeof r == "function")
    try {
      return await Promise.resolve(r());
    } catch (e) {
      let t = new be("Error getting auth token.");
      throw e instanceof Error && (t = new be(`Error getting auth token: ${e.message}`)), t;
    }
}
function vl(r, e) {
  if (e)
    return { callback: e, result: undefined };
  let t, n, i = a(function(o, u) {
    o ? t(o) : n(u);
  }, "cb"), s = new r(function(o, u) {
    n = o, t = u;
  });
  return { callback: i, result: s };
}
var So, Ie, Eo, Ao, Co, _o, Io = (r, e, t) => (e in r) ? Ie(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, a = (r, e) => Ie(r, "name", { value: e, configurable: true }), G = (r, e) => () => (r && (e = r(r = 0)), e), T = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), ie = (r, e) => {
  for (var t in e)
    Ie(r, t, {
      get: e[t],
      enumerable: true
    });
}, Dn = (r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Ao(e))
      !_o.call(r, i) && i !== t && Ie(r, i, { get: () => e[i], enumerable: !(n = Eo(e, i)) || n.enumerable });
  return r;
}, Se = (r, e, t) => (t = r != null ? So(Co(r)) : {}, Dn(e || !r || !r.__esModule ? Ie(t, "default", { value: r, enumerable: true }) : t, r)), O = (r) => Dn(Ie({}, "__esModule", { value: true }), r), E = (r, e, t) => Io(r, typeof e != "symbol" ? e + "" : e, t), Qn, Nn, ii, b, v, x, d, m, p, ge, wi, mi, yi, S, ce, Fe, gi, Zt, tr, rr, Ti, Bi, Fi, Mi, Wi, Hi, Ki, Zi, Je, At, es, U, et, ts, lr, fr, tt, rt, nt, ku, it, ds, mr, wr, gr, br, vr, $u, xr, ys, Er, Sr, ms, vs, Es, Cs, _s, cc, Is, Ps, Bt, Ms, qs, ln, Qs, Ws, js, Gs, vn, Vs, zs, En, eo, io, so, ol, oo, ao, lo, yo, Ln, ot, pa, da, ya, bi, ma, wa, vi, ga, ba, va = 1008000, xi, xa, Jt, yt, mt, Sa, Si, He, wt, gt = class gt2 {
  constructor(e, t) {
    this.strings = e;
    this.values = t;
  }
  toParameterizedQuery(e = { query: "", params: [] }) {
    let { strings: t, values: n } = this;
    for (let i = 0, s = t.length;i < s; i++)
      if (e.query += t[i], i < n.length) {
        let o = n[i];
        if (o instanceof Ge)
          e.query += o.sql;
        else if (o instanceof Ce)
          if (o.queryData instanceof gt2)
            o.queryData.toParameterizedQuery(e);
          else {
            if (o.queryData.params?.length)
              throw new Error("This query is not composable");
            e.query += o.queryData.query;
          }
        else {
          let { params: u } = e;
          u.push(o), e.query += "$" + u.length, (o instanceof d || ArrayBuffer.isView(o)) && (e.query += "::bytea");
        }
      }
    return e;
  }
}, $e, Xt = class Xt2 {
  constructor(e) {
    this.sql = e;
  }
}, Ge, as, us, _t, be, is = "transaction() expects an array of queries, or a function returning an array of queries", Ru, dr = class dr2 {
  constructor(e, t, n) {
    this.execute = e;
    this.queryData = t;
    this.opts = n;
  }
  then(e, t) {
    return this.execute(this.queryData, this.opts).then(e, t);
  }
  catch(e) {
    return this.execute(this.queryData, this.opts).catch(e);
  }
  finally(e) {
    return this.execute(this.queryData, this.opts).finally(e);
  }
}, Ce, go, wo, kn, ut, bo, Un, Mn, ct, export_DatabaseError, export_defaults, export_escapeIdentifier, export_escapeLiteral, export_types;
var init_serverless = __esm(() => {
  So = Object.create;
  Ie = Object.defineProperty;
  Eo = Object.getOwnPropertyDescriptor;
  Ao = Object.getOwnPropertyNames;
  Co = Object.getPrototypeOf;
  _o = Object.prototype.hasOwnProperty;
  Qn = T((lt) => {
    p();
    lt.byteLength = Po;
    lt.toByteArray = Ro;
    lt.fromByteArray = ko;
    var ae = [], te = [], To = typeof Uint8Array < "u" ? Uint8Array : Array, qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Ee = 0, On = qt.length;Ee < On; ++Ee)
      ae[Ee] = qt[Ee], te[qt.charCodeAt(Ee)] = Ee;
    var Ee, On;
    te[45] = 62;
    te[95] = 63;
    function qn(r) {
      var e = r.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var t = r.indexOf("=");
      t === -1 && (t = e);
      var n = t === e ? 0 : 4 - t % 4;
      return [t, n];
    }
    a(qn, "getLens");
    function Po(r) {
      var e = qn(r), t = e[0], n = e[1];
      return (t + n) * 3 / 4 - n;
    }
    a(Po, "byteLength");
    function Bo(r, e, t) {
      return (e + t) * 3 / 4 - t;
    }
    a(Bo, "_byteLength");
    function Ro(r) {
      var e, t = qn(r), n = t[0], i = t[1], s = new To(Bo(r, n, i)), o = 0, u = i > 0 ? n - 4 : n, c;
      for (c = 0;c < u; c += 4)
        e = te[r.charCodeAt(c)] << 18 | te[r.charCodeAt(c + 1)] << 12 | te[r.charCodeAt(c + 2)] << 6 | te[r.charCodeAt(c + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
      return i === 2 && (e = te[r.charCodeAt(c)] << 2 | te[r.charCodeAt(c + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = te[r.charCodeAt(c)] << 10 | te[r.charCodeAt(c + 1)] << 4 | te[r.charCodeAt(c + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s;
    }
    a(Ro, "toByteArray");
    function Lo(r) {
      return ae[r >> 18 & 63] + ae[r >> 12 & 63] + ae[r >> 6 & 63] + ae[r & 63];
    }
    a(Lo, "tripletToBase64");
    function Fo(r, e, t) {
      for (var n, i = [], s = e;s < t; s += 3)
        n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(Lo(n));
      return i.join("");
    }
    a(Fo, "encodeChunk");
    function ko(r) {
      for (var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n;o < u; o += s)
        i.push(Fo(r, o, o + s > u ? u : o + s));
      return n === 1 ? (e = r[t - 1], i.push(ae[e >> 2] + ae[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(ae[e >> 10] + ae[e >> 4 & 63] + ae[e << 2 & 63] + "=")), i.join("");
    }
    a(ko, "fromByteArray");
  });
  Nn = T((Qt) => {
    p();
    Qt.read = function(r, e, t, n, i) {
      var s, o, u = i * 8 - n - 1, c = (1 << u) - 1, l = c >> 1, f = -7, y = t ? i - 1 : 0, g = t ? -1 : 1, A = r[e + y];
      for (y += g, s = A & (1 << -f) - 1, A >>= -f, f += u;f > 0; s = s * 256 + r[e + y], y += g, f -= 8)
        ;
      for (o = s & (1 << -f) - 1, s >>= -f, f += n;f > 0; o = o * 256 + r[e + y], y += g, f -= 8)
        ;
      if (s === 0)
        s = 1 - l;
      else {
        if (s === c)
          return o ? NaN : (A ? -1 : 1) * (1 / 0);
        o = o + Math.pow(2, n), s = s - l;
      }
      return (A ? -1 : 1) * o * Math.pow(2, s - n);
    };
    Qt.write = function(r, e, t, n, i, s) {
      var o, u, c, l = s * 8 - i - 1, f = (1 << l) - 1, y = f >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = n ? 0 : s - 1, C = n ? 1 : -1, D = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = f) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + y >= 1 ? e += g / c : e += g * Math.pow(2, 1 - y), e * c >= 2 && (o++, c /= 2), o + y >= f ? (u = 0, o = f) : o + y >= 1 ? (u = (e * c - 1) * Math.pow(2, i), o = o + y) : (u = e * Math.pow(2, y - 1) * Math.pow(2, i), o = 0));i >= 8; r[t + A] = u & 255, A += C, u /= 256, i -= 8)
        ;
      for (o = o << i | u, l += i;l > 0; r[t + A] = o & 255, A += C, o /= 256, l -= 8)
        ;
      r[t + A - C] |= D * 128;
    };
  });
  ii = T((Re) => {
    p();
    var Nt = Qn(), Pe = Nn(), Wn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Re.Buffer = h;
    Re.SlowBuffer = Qo;
    Re.INSPECT_MAX_BYTES = 50;
    var ft = 2147483647;
    Re.kMaxLength = ft;
    h.TYPED_ARRAY_SUPPORT = Mo();
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Mo() {
      try {
        let r = new Uint8Array(1), e = { foo: a(function() {
          return 42;
        }, "foo") };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
      } catch {
        return false;
      }
    }
    a(Mo, "typedArraySupport");
    Object.defineProperty(h.prototype, "parent", { enumerable: true, get: a(function() {
      if (h.isBuffer(this))
        return this.buffer;
    }, "get") });
    Object.defineProperty(h.prototype, "offset", { enumerable: true, get: a(function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    }, "get") });
    function he(r) {
      if (r > ft)
        throw new RangeError('The value "' + r + '" is invalid for option "size"');
      let e = new Uint8Array(r);
      return Object.setPrototypeOf(e, h.prototype), e;
    }
    a(he, "createBuffer");
    function h(r, e, t) {
      if (typeof r == "number") {
        if (typeof e == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return $t(r);
      }
      return Gn(r, e, t);
    }
    a(h, "Buffer");
    h.poolSize = 8192;
    function Gn(r, e, t) {
      if (typeof r == "string")
        return Do(r, e);
      if (ArrayBuffer.isView(r))
        return Oo(r);
      if (r == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
      if (ue(r, ArrayBuffer) || r && ue(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ue(r, SharedArrayBuffer) || r && ue(r.buffer, SharedArrayBuffer)))
        return jt(r, e, t);
      if (typeof r == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = r.valueOf && r.valueOf();
      if (n != null && n !== r)
        return h.from(n, e, t);
      let i = qo(r);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
        return h.from(r[Symbol.toPrimitive]("string"), e, t);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
    }
    a(Gn, "from");
    h.from = function(r, e, t) {
      return Gn(r, e, t);
    };
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h, Uint8Array);
    function Vn(r) {
      if (typeof r != "number")
        throw new TypeError('"size" argument must be of type number');
      if (r < 0)
        throw new RangeError('The value "' + r + '" is invalid for option "size"');
    }
    a(Vn, "assertSize");
    function Uo(r, e, t) {
      return Vn(r), r <= 0 ? he(r) : e !== undefined ? typeof t == "string" ? he(r).fill(e, t) : he(r).fill(e) : he(r);
    }
    a(Uo, "alloc");
    h.alloc = function(r, e, t) {
      return Uo(r, e, t);
    };
    function $t(r) {
      return Vn(r), he(r < 0 ? 0 : Gt(r) | 0);
    }
    a($t, "allocUnsafe");
    h.allocUnsafe = function(r) {
      return $t(r);
    };
    h.allocUnsafeSlow = function(r) {
      return $t(r);
    };
    function Do(r, e) {
      if ((typeof e != "string" || e === "") && (e = "utf8"), !h.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e);
      let t = zn(r, e) | 0, n = he(t), i = n.write(r, e);
      return i !== t && (n = n.slice(0, i)), n;
    }
    a(Do, "fromString");
    function Wt(r) {
      let e = r.length < 0 ? 0 : Gt(r.length) | 0, t = he(e);
      for (let n = 0;n < e; n += 1)
        t[n] = r[n] & 255;
      return t;
    }
    a(Wt, "fromArrayLike");
    function Oo(r) {
      if (ue(r, Uint8Array)) {
        let e = new Uint8Array(r);
        return jt(e.buffer, e.byteOffset, e.byteLength);
      }
      return Wt(r);
    }
    a(Oo, "fromArrayView");
    function jt(r, e, t) {
      if (e < 0 || r.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (r.byteLength < e + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return e === undefined && t === undefined ? n = new Uint8Array(r) : t === undefined ? n = new Uint8Array(r, e) : n = new Uint8Array(r, e, t), Object.setPrototypeOf(n, h.prototype), n;
    }
    a(jt, "fromArrayBuffer");
    function qo(r) {
      if (h.isBuffer(r)) {
        let e = Gt(r.length) | 0, t = he(e);
        return t.length === 0 || r.copy(t, 0, 0, e), t;
      }
      if (r.length !== undefined)
        return typeof r.length != "number" || zt(r.length) ? he(0) : Wt(r);
      if (r.type === "Buffer" && Array.isArray(r.data))
        return Wt(r.data);
    }
    a(qo, "fromObject");
    function Gt(r) {
      if (r >= ft)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ft.toString(16) + " bytes");
      return r | 0;
    }
    a(Gt, "checked");
    function Qo(r) {
      return +r != r && (r = 0), h.alloc(+r);
    }
    a(Qo, "SlowBuffer");
    h.isBuffer = a(function(e) {
      return e != null && e._isBuffer === true && e !== h.prototype;
    }, "isBuffer");
    h.compare = a(function(e, t) {
      if (ue(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), ue(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(e) || !h.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e === t)
        return 0;
      let n = e.length, i = t.length;
      for (let s = 0, o = Math.min(n, i);s < o; ++s)
        if (e[s] !== t[s]) {
          n = e[s], i = t[s];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    }, "compare");
    h.isEncoding = a(function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, "isEncoding");
    h.concat = a(function(e, t) {
      if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return h.alloc(0);
      let n;
      if (t === undefined)
        for (t = 0, n = 0;n < e.length; ++n)
          t += e[n].length;
      let i = h.allocUnsafe(t), s = 0;
      for (n = 0;n < e.length; ++n) {
        let o = e[n];
        if (ue(o, Uint8Array))
          s + o.length > i.length ? (h.isBuffer(o) || (o = h.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
        else if (h.isBuffer(o))
          o.copy(i, s);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        s += o.length;
      }
      return i;
    }, "concat");
    function zn(r, e) {
      if (h.isBuffer(r))
        return r.length;
      if (ArrayBuffer.isView(r) || ue(r, ArrayBuffer))
        return r.byteLength;
      if (typeof r != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
      let t = r.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && t === 0)
        return 0;
      let i = false;
      for (;; )
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return Ht(r).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return ni(r).length;
          default:
            if (i)
              return n ? -1 : Ht(r).length;
            e = ("" + e).toLowerCase(), i = true;
        }
    }
    a(zn, "byteLength");
    h.byteLength = zn;
    function No(r, e, t) {
      let n = false;
      if ((e === undefined || e < 0) && (e = 0), e > this.length || ((t === undefined || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
        return "";
      for (r || (r = "utf8");; )
        switch (r) {
          case "hex":
            return Zo(this, e, t);
          case "utf8":
          case "utf-8":
            return Yn(this, e, t);
          case "ascii":
            return Ko(this, e, t);
          case "latin1":
          case "binary":
            return Yo(this, e, t);
          case "base64":
            return Vo(this, e, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Jo(this, e, t);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + r);
            r = (r + "").toLowerCase(), n = true;
        }
    }
    a(No, "slowToString");
    h.prototype._isBuffer = true;
    function Ae(r, e, t) {
      let n = r[e];
      r[e] = r[t], r[t] = n;
    }
    a(Ae, "swap");
    h.prototype.swap16 = a(function() {
      let e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t = 0;t < e; t += 2)
        Ae(this, t, t + 1);
      return this;
    }, "swap16");
    h.prototype.swap32 = a(function() {
      let e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t = 0;t < e; t += 4)
        Ae(this, t, t + 3), Ae(this, t + 1, t + 2);
      return this;
    }, "swap32");
    h.prototype.swap64 = a(function() {
      let e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0;t < e; t += 8)
        Ae(this, t, t + 7), Ae(this, t + 1, t + 6), Ae(this, t + 2, t + 5), Ae(this, t + 3, t + 4);
      return this;
    }, "swap64");
    h.prototype.toString = a(function() {
      let e = this.length;
      return e === 0 ? "" : arguments.length === 0 ? Yn(this, 0, e) : No.apply(this, arguments);
    }, "toString");
    h.prototype.toLocaleString = h.prototype.toString;
    h.prototype.equals = a(function(e) {
      if (!h.isBuffer(e))
        throw new TypeError("Argument must be a Buffer");
      return this === e ? true : h.compare(this, e) === 0;
    }, "equals");
    h.prototype.inspect = a(function() {
      let e = "", t = Re.INSPECT_MAX_BYTES;
      return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
    }, "inspect");
    Wn && (h.prototype[Wn] = h.prototype.inspect);
    h.prototype.compare = a(function(e, t, n, i, s) {
      if (ue(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
      if (t === undefined && (t = 0), n === undefined && (n = e ? e.length : 0), i === undefined && (i = 0), s === undefined && (s = this.length), t < 0 || n > e.length || i < 0 || s > this.length)
        throw new RangeError("out of range index");
      if (i >= s && t >= n)
        return 0;
      if (i >= s)
        return -1;
      if (t >= n)
        return 1;
      if (t >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e)
        return 0;
      let o = s - i, u = n - t, c = Math.min(o, u), l = this.slice(i, s), f = e.slice(t, n);
      for (let y = 0;y < c; ++y)
        if (l[y] !== f[y]) {
          o = l[y], u = f[y];
          break;
        }
      return o < u ? -1 : u < o ? 1 : 0;
    }, "compare");
    function Kn(r, e, t, n, i) {
      if (r.length === 0)
        return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, zt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
        if (i)
          return -1;
        t = r.length - 1;
      } else if (t < 0)
        if (i)
          t = 0;
        else
          return -1;
      if (typeof e == "string" && (e = h.from(e, n)), h.isBuffer(e))
        return e.length === 0 ? -1 : jn(r, e, t, n, i);
      if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : jn(r, [e], t, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    a(Kn, "bidirectionalIndexOf");
    function jn(r, e, t, n, i) {
      let s = 1, o = r.length, u = e.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (r.length < 2 || e.length < 2)
          return -1;
        s = 2, o /= 2, u /= 2, t /= 2;
      }
      function c(f, y) {
        return s === 1 ? f[y] : f.readUInt16BE(y * s);
      }
      a(c, "read");
      let l;
      if (i) {
        let f = -1;
        for (l = t;l < o; l++)
          if (c(r, l) === c(e, f === -1 ? 0 : l - f)) {
            if (f === -1 && (f = l), l - f + 1 === u)
              return f * s;
          } else
            f !== -1 && (l -= l - f), f = -1;
      } else
        for (t + u > o && (t = o - u), l = t;l >= 0; l--) {
          let f = true;
          for (let y = 0;y < u; y++)
            if (c(r, l + y) !== c(e, y)) {
              f = false;
              break;
            }
          if (f)
            return l;
        }
      return -1;
    }
    a(jn, "arrayIndexOf");
    h.prototype.includes = a(function(e, t, n) {
      return this.indexOf(e, t, n) !== -1;
    }, "includes");
    h.prototype.indexOf = a(function(e, t, n) {
      return Kn(this, e, t, n, true);
    }, "indexOf");
    h.prototype.lastIndexOf = a(function(e, t, n) {
      return Kn(this, e, t, n, false);
    }, "lastIndexOf");
    function Wo(r, e, t, n) {
      t = Number(t) || 0;
      let i = r.length - t;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let s = e.length;
      n > s / 2 && (n = s / 2);
      let o;
      for (o = 0;o < n; ++o) {
        let u = parseInt(e.substr(o * 2, 2), 16);
        if (zt(u))
          return o;
        r[t + o] = u;
      }
      return o;
    }
    a(Wo, "hexWrite");
    function jo(r, e, t, n) {
      return ht(Ht(e, r.length - t), r, t, n);
    }
    a(jo, "utf8Write");
    function Ho(r, e, t, n) {
      return ht(ra(e), r, t, n);
    }
    a(Ho, "asciiWrite");
    function $o(r, e, t, n) {
      return ht(ni(e), r, t, n);
    }
    a($o, "base64Write");
    function Go(r, e, t, n) {
      return ht(na(e, r.length - t), r, t, n);
    }
    a(Go, "ucs2Write");
    h.prototype.write = a(function(e, t, n, i) {
      if (t === undefined)
        i = "utf8", n = this.length, t = 0;
      else if (n === undefined && typeof t == "string")
        i = t, n = this.length, t = 0;
      else if (isFinite(t))
        t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === undefined && (i = "utf8")) : (i = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let s = this.length - t;
      if ((n === undefined || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let o = false;
      for (;; )
        switch (i) {
          case "hex":
            return Wo(this, e, t, n);
          case "utf8":
          case "utf-8":
            return jo(this, e, t, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Ho(this, e, t, n);
          case "base64":
            return $o(this, e, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Go(this, e, t, n);
          default:
            if (o)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), o = true;
        }
    }, "write");
    h.prototype.toJSON = a(function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    }, "toJSON");
    function Vo(r, e, t) {
      return e === 0 && t === r.length ? Nt.fromByteArray(r) : Nt.fromByteArray(r.slice(e, t));
    }
    a(Vo, "base64Slice");
    function Yn(r, e, t) {
      t = Math.min(r.length, t);
      let n = [], i = e;
      for (;i < t; ) {
        let s = r[i], o = null, u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
        if (i + u <= t) {
          let c, l, f, y;
          switch (u) {
            case 1:
              s < 128 && (o = s);
              break;
            case 2:
              c = r[i + 1], (c & 192) === 128 && (y = (s & 31) << 6 | c & 63, y > 127 && (o = y));
              break;
            case 3:
              c = r[i + 1], l = r[i + 2], (c & 192) === 128 && (l & 192) === 128 && (y = (s & 15) << 12 | (c & 63) << 6 | l & 63, y > 2047 && (y < 55296 || y > 57343) && (o = y));
              break;
            case 4:
              c = r[i + 1], l = r[i + 2], f = r[i + 3], (c & 192) === 128 && (l & 192) === 128 && (f & 192) === 128 && (y = (s & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | f & 63, y > 65535 && y < 1114112 && (o = y));
          }
        }
        o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u;
      }
      return zo(n);
    }
    a(Yn, "utf8Slice");
    var Hn = 4096;
    function zo(r) {
      let e = r.length;
      if (e <= Hn)
        return String.fromCharCode.apply(String, r);
      let t = "", n = 0;
      for (;n < e; )
        t += String.fromCharCode.apply(String, r.slice(n, n += Hn));
      return t;
    }
    a(zo, "decodeCodePointsArray");
    function Ko(r, e, t) {
      let n = "";
      t = Math.min(r.length, t);
      for (let i = e;i < t; ++i)
        n += String.fromCharCode(r[i] & 127);
      return n;
    }
    a(Ko, "asciiSlice");
    function Yo(r, e, t) {
      let n = "";
      t = Math.min(r.length, t);
      for (let i = e;i < t; ++i)
        n += String.fromCharCode(r[i]);
      return n;
    }
    a(Yo, "latin1Slice");
    function Zo(r, e, t) {
      let n = r.length;
      (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
      let i = "";
      for (let s = e;s < t; ++s)
        i += ia[r[s]];
      return i;
    }
    a(Zo, "hexSlice");
    function Jo(r, e, t) {
      let n = r.slice(e, t), i = "";
      for (let s = 0;s < n.length - 1; s += 2)
        i += String.fromCharCode(n[s] + n[s + 1] * 256);
      return i;
    }
    a(Jo, "utf16leSlice");
    h.prototype.slice = a(function(e, t) {
      let n = this.length;
      e = ~~e, t = t === undefined ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
      let i = this.subarray(e, t);
      return Object.setPrototypeOf(i, h.prototype), i;
    }, "slice");
    function q(r, e, t) {
      if (r % 1 !== 0 || r < 0)
        throw new RangeError("offset is not uint");
      if (r + e > t)
        throw new RangeError("Trying to access beyond buffer length");
    }
    a(q, "checkOffset");
    h.prototype.readUintLE = h.prototype.readUIntLE = a(function(e, t, n) {
      e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
      let i = this[e], s = 1, o = 0;
      for (;++o < t && (s *= 256); )
        i += this[e + o] * s;
      return i;
    }, "readUIntLE");
    h.prototype.readUintBE = h.prototype.readUIntBE = a(function(e, t, n) {
      e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
      let i = this[e + --t], s = 1;
      for (;t > 0 && (s *= 256); )
        i += this[e + --t] * s;
      return i;
    }, "readUIntBE");
    h.prototype.readUint8 = h.prototype.readUInt8 = a(function(e, t) {
      return e = e >>> 0, t || q(e, 1, this.length), this[e];
    }, "readUInt8");
    h.prototype.readUint16LE = h.prototype.readUInt16LE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, "readUInt16LE");
    h.prototype.readUint16BE = h.prototype.readUInt16BE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, "readUInt16BE");
    h.prototype.readUint32LE = h.prototype.readUInt32LE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    }, "readUInt32LE");
    h.prototype.readUint32BE = h.prototype.readUInt32BE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, "readUInt32BE");
    h.prototype.readBigUInt64LE = we(a(function(e) {
      e = e >>> 0, Be(e, "offset");
      let t = this[e], n = this[e + 7];
      (t === undefined || n === undefined) && je(e, this.length - 8);
      let i = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(s) << BigInt(32));
    }, "readBigUInt64LE"));
    h.prototype.readBigUInt64BE = we(a(function(e) {
      e = e >>> 0, Be(e, "offset");
      let t = this[e], n = this[e + 7];
      (t === undefined || n === undefined) && je(e, this.length - 8);
      let i = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(s);
    }, "readBigUInt64BE"));
    h.prototype.readIntLE = a(function(e, t, n) {
      e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
      let i = this[e], s = 1, o = 0;
      for (;++o < t && (s *= 256); )
        i += this[e + o] * s;
      return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i;
    }, "readIntLE");
    h.prototype.readIntBE = a(function(e, t, n) {
      e = e >>> 0, t = t >>> 0, n || q(e, t, this.length);
      let i = t, s = 1, o = this[e + --i];
      for (;i > 0 && (s *= 256); )
        o += this[e + --i] * s;
      return s *= 128, o >= s && (o -= Math.pow(2, 8 * t)), o;
    }, "readIntBE");
    h.prototype.readInt8 = a(function(e, t) {
      return e = e >>> 0, t || q(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    }, "readInt8");
    h.prototype.readInt16LE = a(function(e, t) {
      e = e >>> 0, t || q(e, 2, this.length);
      let n = this[e] | this[e + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, "readInt16LE");
    h.prototype.readInt16BE = a(function(e, t) {
      e = e >>> 0, t || q(e, 2, this.length);
      let n = this[e + 1] | this[e] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, "readInt16BE");
    h.prototype.readInt32LE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, "readInt32LE");
    h.prototype.readInt32BE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, "readInt32BE");
    h.prototype.readBigInt64LE = we(a(function(e) {
      e = e >>> 0, Be(e, "offset");
      let t = this[e], n = this[e + 7];
      (t === undefined || n === undefined) && je(e, this.length - 8);
      let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    }, "readBigInt64LE"));
    h.prototype.readBigInt64BE = we(a(function(e) {
      e = e >>> 0, Be(e, "offset");
      let t = this[e], n = this[e + 7];
      (t === undefined || n === undefined) && je(e, this.length - 8);
      let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
    }, "readBigInt64BE"));
    h.prototype.readFloatLE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), Pe.read(this, e, true, 23, 4);
    }, "readFloatLE");
    h.prototype.readFloatBE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 4, this.length), Pe.read(this, e, false, 23, 4);
    }, "readFloatBE");
    h.prototype.readDoubleLE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 8, this.length), Pe.read(this, e, true, 52, 8);
    }, "readDoubleLE");
    h.prototype.readDoubleBE = a(function(e, t) {
      return e = e >>> 0, t || q(e, 8, this.length), Pe.read(this, e, false, 52, 8);
    }, "readDoubleBE");
    function V(r, e, t, n, i, s) {
      if (!h.isBuffer(r))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < s)
        throw new RangeError('"value" argument is out of bounds');
      if (t + n > r.length)
        throw new RangeError("Index out of range");
    }
    a(V, "checkInt");
    h.prototype.writeUintLE = h.prototype.writeUIntLE = a(function(e, t, n, i) {
      if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        V(this, e, t, n, u, 0);
      }
      let s = 1, o = 0;
      for (this[t] = e & 255;++o < n && (s *= 256); )
        this[t + o] = e / s & 255;
      return t + n;
    }, "writeUIntLE");
    h.prototype.writeUintBE = h.prototype.writeUIntBE = a(function(e, t, n, i) {
      if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        V(this, e, t, n, u, 0);
      }
      let s = n - 1, o = 1;
      for (this[t + s] = e & 255;--s >= 0 && (o *= 256); )
        this[t + s] = e / o & 255;
      return t + n;
    }, "writeUIntBE");
    h.prototype.writeUint8 = h.prototype.writeUInt8 = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
    }, "writeUInt8");
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    }, "writeUInt16LE");
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    }, "writeUInt16BE");
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
    }, "writeUInt32LE");
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    }, "writeUInt32BE");
    function Zn(r, e, t, n, i) {
      ri(e, n, i, r, t, 7);
      let s = Number(e & BigInt(4294967295));
      r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s;
      let o = Number(e >> BigInt(32) & BigInt(4294967295));
      return r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, t;
    }
    a(Zn, "wrtBigUInt64LE");
    function Jn(r, e, t, n, i) {
      ri(e, n, i, r, t, 7);
      let s = Number(e & BigInt(4294967295));
      r[t + 7] = s, s = s >> 8, r[t + 6] = s, s = s >> 8, r[t + 5] = s, s = s >> 8, r[t + 4] = s;
      let o = Number(e >> BigInt(32) & BigInt(4294967295));
      return r[t + 3] = o, o = o >> 8, r[t + 2] = o, o = o >> 8, r[t + 1] = o, o = o >> 8, r[t] = o, t + 8;
    }
    a(Jn, "wrtBigUInt64BE");
    h.prototype.writeBigUInt64LE = we(a(function(e, t = 0) {
      return Zn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"));
    h.prototype.writeBigUInt64BE = we(a(function(e, t = 0) {
      return Jn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"));
    h.prototype.writeIntLE = a(function(e, t, n, i) {
      if (e = +e, t = t >>> 0, !i) {
        let c = Math.pow(2, 8 * n - 1);
        V(this, e, t, n, c - 1, -c);
      }
      let s = 0, o = 1, u = 0;
      for (this[t] = e & 255;++s < n && (o *= 256); )
        e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
      return t + n;
    }, "writeIntLE");
    h.prototype.writeIntBE = a(function(e, t, n, i) {
      if (e = +e, t = t >>> 0, !i) {
        let c = Math.pow(2, 8 * n - 1);
        V(this, e, t, n, c - 1, -c);
      }
      let s = n - 1, o = 1, u = 0;
      for (this[t + s] = e & 255;--s >= 0 && (o *= 256); )
        e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1), this[t + s] = (e / o >> 0) - u & 255;
      return t + n;
    }, "writeIntBE");
    h.prototype.writeInt8 = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
    }, "writeInt8");
    h.prototype.writeInt16LE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    }, "writeInt16LE");
    h.prototype.writeInt16BE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    }, "writeInt16BE");
    h.prototype.writeInt32LE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
    }, "writeInt32LE");
    h.prototype.writeInt32BE = a(function(e, t, n) {
      return e = +e, t = t >>> 0, n || V(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    }, "writeInt32BE");
    h.prototype.writeBigInt64LE = we(a(function(e, t = 0) {
      return Zn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64LE"));
    h.prototype.writeBigInt64BE = we(a(function(e, t = 0) {
      return Jn(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE"));
    function Xn(r, e, t, n, i, s) {
      if (t + n > r.length)
        throw new RangeError("Index out of range");
      if (t < 0)
        throw new RangeError("Index out of range");
    }
    a(Xn, "checkIEEE754");
    function ei(r, e, t, n, i) {
      return e = +e, t = t >>> 0, i || Xn(r, e, t, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Pe.write(r, e, t, n, 23, 4), t + 4;
    }
    a(ei, "writeFloat");
    h.prototype.writeFloatLE = a(function(e, t, n) {
      return ei(this, e, t, true, n);
    }, "writeFloatLE");
    h.prototype.writeFloatBE = a(function(e, t, n) {
      return ei(this, e, t, false, n);
    }, "writeFloatBE");
    function ti(r, e, t, n, i) {
      return e = +e, t = t >>> 0, i || Xn(r, e, t, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Pe.write(r, e, t, n, 52, 8), t + 8;
    }
    a(ti, "writeDouble");
    h.prototype.writeDoubleLE = a(function(e, t, n) {
      return ti(this, e, t, true, n);
    }, "writeDoubleLE");
    h.prototype.writeDoubleBE = a(function(e, t, n) {
      return ti(this, e, t, false, n);
    }, "writeDoubleBE");
    h.prototype.copy = a(function(e, t, n, i) {
      if (!h.isBuffer(e))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)
        return 0;
      if (t < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
      let s = i - n;
      return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), s;
    }, "copy");
    h.prototype.fill = a(function(e, t, n, i) {
      if (typeof e == "string") {
        if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== undefined && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !h.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (e.length === 1) {
          let o = e.charCodeAt(0);
          (i === "utf8" && o < 128 || i === "latin1") && (e = o);
        }
      } else
        typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= t)
        return this;
      t = t >>> 0, n = n === undefined ? this.length : n >>> 0, e || (e = 0);
      let s;
      if (typeof e == "number")
        for (s = t;s < n; ++s)
          this[s] = e;
      else {
        let o = h.isBuffer(e) ? e : h.from(e, i), u = o.length;
        if (u === 0)
          throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (s = 0;s < n - t; ++s)
          this[s + t] = o[s % u];
      }
      return this;
    }, "fill");
    var Te = {};
    function Vt(r, e, t) {
      var n;
      Te[r] = (n = class extends t {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
        }
        get code() {
          return r;
        }
        set code(s) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: s, writable: true });
        }
        toString() {
          return `${this.name} [${r}]: ${this.message}`;
        }
      }, a(n, "NodeError"), n);
    }
    a(Vt, "E");
    Vt("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
      return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    Vt("ERR_INVALID_ARG_TYPE", function(r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    }, TypeError);
    Vt("ERR_OUT_OF_RANGE", function(r, e, t) {
      let n = `The value of "${r}" is out of range.`, i = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = $n(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = $n(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n;
    }, RangeError);
    function $n(r) {
      let e = "", t = r.length, n = r[0] === "-" ? 1 : 0;
      for (;t >= n + 4; t -= 3)
        e = `_${r.slice(t - 3, t)}${e}`;
      return `${r.slice(0, t)}${e}`;
    }
    a($n, "addNumericalSeparator");
    function Xo(r, e, t) {
      Be(e, "offset"), (r[e] === undefined || r[e + t] === undefined) && je(e, r.length - (t + 1));
    }
    a(Xo, "checkBounds");
    function ri(r, e, t, n, i, s) {
      if (r > t || r < e) {
        let o = typeof e == "bigint" ? "n" : "", u;
        throw s > 3 ? e === 0 || e === BigInt(0) ? u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}` : u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}` : u = `>= ${e}${o} and <= ${t}${o}`, new Te.ERR_OUT_OF_RANGE("value", u, r);
      }
      Xo(n, i, s);
    }
    a(ri, "checkIntBI");
    function Be(r, e) {
      if (typeof r != "number")
        throw new Te.ERR_INVALID_ARG_TYPE(e, "number", r);
    }
    a(Be, "validateNumber");
    function je(r, e, t) {
      throw Math.floor(r) !== r ? (Be(r, t), new Te.ERR_OUT_OF_RANGE(t || "offset", "an integer", r)) : e < 0 ? new Te.ERR_BUFFER_OUT_OF_BOUNDS : new Te.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${e}`, r);
    }
    a(je, "boundsError");
    var ea = /[^+/0-9A-Za-z-_]/g;
    function ta(r) {
      if (r = r.split("=")[0], r = r.trim().replace(ea, ""), r.length < 2)
        return "";
      for (;r.length % 4 !== 0; )
        r = r + "=";
      return r;
    }
    a(ta, "base64clean");
    function Ht(r, e) {
      e = e || 1 / 0;
      let t, n = r.length, i = null, s = [];
      for (let o = 0;o < n; ++o) {
        if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
          if (!i) {
            if (t > 56319) {
              (e -= 3) > -1 && s.push(239, 191, 189);
              continue;
            } else if (o + 1 === n) {
              (e -= 3) > -1 && s.push(239, 191, 189);
              continue;
            }
            i = t;
            continue;
          }
          if (t < 56320) {
            (e -= 3) > -1 && s.push(239, 191, 189), i = t;
            continue;
          }
          t = (i - 55296 << 10 | t - 56320) + 65536;
        } else
          i && (e -= 3) > -1 && s.push(239, 191, 189);
        if (i = null, t < 128) {
          if ((e -= 1) < 0)
            break;
          s.push(t);
        } else if (t < 2048) {
          if ((e -= 2) < 0)
            break;
          s.push(t >> 6 | 192, t & 63 | 128);
        } else if (t < 65536) {
          if ((e -= 3) < 0)
            break;
          s.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        } else if (t < 1114112) {
          if ((e -= 4) < 0)
            break;
          s.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return s;
    }
    a(Ht, "utf8ToBytes");
    function ra(r) {
      let e = [];
      for (let t = 0;t < r.length; ++t)
        e.push(r.charCodeAt(t) & 255);
      return e;
    }
    a(ra, "asciiToBytes");
    function na(r, e) {
      let t, n, i, s = [];
      for (let o = 0;o < r.length && !((e -= 2) < 0); ++o)
        t = r.charCodeAt(o), n = t >> 8, i = t % 256, s.push(i), s.push(n);
      return s;
    }
    a(na, "utf16leToBytes");
    function ni(r) {
      return Nt.toByteArray(ta(r));
    }
    a(ni, "base64ToBytes");
    function ht(r, e, t, n) {
      let i;
      for (i = 0;i < n && !(i + t >= e.length || i >= r.length); ++i)
        e[i + t] = r[i];
      return i;
    }
    a(ht, "blitBuffer");
    function ue(r, e) {
      return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name;
    }
    a(ue, "isInstance");
    function zt(r) {
      return r !== r;
    }
    a(zt, "numberIsNaN");
    var ia = function() {
      let r = "0123456789abcdef", e = new Array(256);
      for (let t = 0;t < 16; ++t) {
        let n = t * 16;
        for (let i = 0;i < 16; ++i)
          e[n + i] = r[t] + r[i];
      }
      return e;
    }();
    function we(r) {
      return typeof BigInt > "u" ? sa : r;
    }
    a(we, "defineBigIntMethod");
    function sa() {
      throw new Error("BigInt not supported");
    }
    a(sa, "BufferBigIntNotDefined");
  });
  p = G(() => {
    b = globalThis, v = globalThis.setImmediate ?? ((r) => setTimeout(r, 0)), x = globalThis.clearImmediate ?? ((r) => clearTimeout(r)), d = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : ii().Buffer, m = globalThis.process ?? {};
    m.env ?? (m.env = {});
    try {
      m.nextTick(() => {});
    } catch {
      let e = Promise.resolve();
      m.nextTick = e.then.bind(e);
    }
  });
  ge = T((Rl, Kt) => {
    p();
    var Le = typeof Reflect == "object" ? Reflect : null, si = Le && typeof Le.apply == "function" ? Le.apply : a(function(e, t, n) {
      return Function.prototype.apply.call(e, t, n);
    }, "ReflectApply"), pt;
    Le && typeof Le.ownKeys == "function" ? pt = Le.ownKeys : Object.getOwnPropertySymbols ? pt = a(function(e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    }, "ReflectOwnKeys") : pt = a(function(e) {
      return Object.getOwnPropertyNames(e);
    }, "ReflectOwnKeys");
    function oa(r) {
      console && console.warn && console.warn(r);
    }
    a(oa, "ProcessEmitWarning");
    var ai = Number.isNaN || a(function(e) {
      return e !== e;
    }, "NumberIsNaN");
    function B() {
      B.init.call(this);
    }
    a(B, "EventEmitter");
    Kt.exports = B;
    Kt.exports.once = la;
    B.EventEmitter = B;
    B.prototype._events = undefined;
    B.prototype._eventsCount = 0;
    B.prototype._maxListeners = undefined;
    var oi = 10;
    function dt(r) {
      if (typeof r != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
    }
    a(dt, "checkListener");
    Object.defineProperty(B, "defaultMaxListeners", { enumerable: true, get: a(function() {
      return oi;
    }, "get"), set: a(function(r) {
      if (typeof r != "number" || r < 0 || ai(r))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
      oi = r;
    }, "set") });
    B.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    B.prototype.setMaxListeners = a(function(e) {
      if (typeof e != "number" || e < 0 || ai(e))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
      return this._maxListeners = e, this;
    }, "setMaxListeners");
    function ui(r) {
      return r._maxListeners === undefined ? B.defaultMaxListeners : r._maxListeners;
    }
    a(ui, "_getMaxListeners");
    B.prototype.getMaxListeners = a(function() {
      return ui(this);
    }, "getMaxListeners");
    B.prototype.emit = a(function(e) {
      for (var t = [], n = 1;n < arguments.length; n++)
        t.push(arguments[n]);
      var i = e === "error", s = this._events;
      if (s !== undefined)
        i = i && s.error === undefined;
      else if (!i)
        return false;
      if (i) {
        var o;
        if (t.length > 0 && (o = t[0]), o instanceof Error)
          throw o;
        var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw u.context = o, u;
      }
      var c = s[e];
      if (c === undefined)
        return false;
      if (typeof c == "function")
        si(c, this, t);
      else
        for (var l = c.length, f = pi(c, l), n = 0;n < l; ++n)
          si(f[n], this, t);
      return true;
    }, "emit");
    function ci(r, e, t, n) {
      var i, s, o;
      if (dt(t), s = r._events, s === undefined ? (s = r._events = Object.create(null), r._eventsCount = 0) : (s.newListener !== undefined && (r.emit("newListener", e, t.listener ? t.listener : t), s = r._events), o = s[e]), o === undefined)
        o = s[e] = t, ++r._eventsCount;
      else if (typeof o == "function" ? o = s[e] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), i = ui(r), i > 0 && o.length > i && !o.warned) {
        o.warned = true;
        var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = r, u.type = e, u.count = o.length, oa(u);
      }
      return r;
    }
    a(ci, "_addListener");
    B.prototype.addListener = a(function(e, t) {
      return ci(this, e, t, false);
    }, "addListener");
    B.prototype.on = B.prototype.addListener;
    B.prototype.prependListener = a(function(e, t) {
      return ci(this, e, t, true);
    }, "prependListener");
    function aa() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    a(aa, "onceWrapper");
    function li(r, e, t) {
      var n = {
        fired: false,
        wrapFn: undefined,
        target: r,
        type: e,
        listener: t
      }, i = aa.bind(n);
      return i.listener = t, n.wrapFn = i, i;
    }
    a(li, "_onceWrap");
    B.prototype.once = a(function(e, t) {
      return dt(t), this.on(e, li(this, e, t)), this;
    }, "once");
    B.prototype.prependOnceListener = a(function(e, t) {
      return dt(t), this.prependListener(e, li(this, e, t)), this;
    }, "prependOnceListener");
    B.prototype.removeListener = a(function(e, t) {
      var n, i, s, o, u;
      if (dt(t), i = this._events, i === undefined)
        return this;
      if (n = i[e], n === undefined)
        return this;
      if (n === t || n.listener === t)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
      else if (typeof n != "function") {
        for (s = -1, o = n.length - 1;o >= 0; o--)
          if (n[o] === t || n[o].listener === t) {
            u = n[o].listener, s = o;
            break;
          }
        if (s < 0)
          return this;
        s === 0 ? n.shift() : ua(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== undefined && this.emit("removeListener", e, u || t);
      }
      return this;
    }, "removeListener");
    B.prototype.off = B.prototype.removeListener;
    B.prototype.removeAllListeners = a(function(e) {
      var t, n, i;
      if (n = this._events, n === undefined)
        return this;
      if (n.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
      if (arguments.length === 0) {
        var s = Object.keys(n), o;
        for (i = 0;i < s.length; ++i)
          o = s[i], o !== "removeListener" && this.removeAllListeners(o);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (t = n[e], typeof t == "function")
        this.removeListener(e, t);
      else if (t !== undefined)
        for (i = t.length - 1;i >= 0; i--)
          this.removeListener(e, t[i]);
      return this;
    }, "removeAllListeners");
    function fi(r, e, t) {
      var n = r._events;
      if (n === undefined)
        return [];
      var i = n[e];
      return i === undefined ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? ca(i) : pi(i, i.length);
    }
    a(fi, "_listeners");
    B.prototype.listeners = a(function(e) {
      return fi(this, e, true);
    }, "listeners");
    B.prototype.rawListeners = a(function(e) {
      return fi(this, e, false);
    }, "rawListeners");
    B.listenerCount = function(r, e) {
      return typeof r.listenerCount == "function" ? r.listenerCount(e) : hi.call(r, e);
    };
    B.prototype.listenerCount = hi;
    function hi(r) {
      var e = this._events;
      if (e !== undefined) {
        var t = e[r];
        if (typeof t == "function")
          return 1;
        if (t !== undefined)
          return t.length;
      }
      return 0;
    }
    a(hi, "listenerCount");
    B.prototype.eventNames = a(function() {
      return this._eventsCount > 0 ? pt(this._events) : [];
    }, "eventNames");
    function pi(r, e) {
      for (var t = new Array(e), n = 0;n < e; ++n)
        t[n] = r[n];
      return t;
    }
    a(pi, "arrayClone");
    function ua(r, e) {
      for (;e + 1 < r.length; e++)
        r[e] = r[e + 1];
      r.pop();
    }
    a(ua, "spliceOne");
    function ca(r) {
      for (var e = new Array(r.length), t = 0;t < e.length; ++t)
        e[t] = r[t].listener || r[t];
      return e;
    }
    a(ca, "unwrapListeners");
    function la(r, e) {
      return new Promise(function(t, n) {
        function i(o) {
          r.removeListener(e, s), n(o);
        }
        a(i, "errorListener");
        function s() {
          typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(arguments));
        }
        a(s, "resolver"), di(r, e, s, { once: true }), e !== "error" && fa(r, i, { once: true });
      });
    }
    a(la, "once");
    function fa(r, e, t) {
      typeof r.on == "function" && di(r, "error", e, t);
    }
    a(fa, "addErrorHandlerIfEventEmitter");
    function di(r, e, t, n) {
      if (typeof r.on == "function")
        n.once ? r.once(e, t) : r.on(e, t);
      else if (typeof r.addEventListener == "function")
        r.addEventListener(e, a(function i(s) {
          n.once && r.removeEventListener(e, i), t(s);
        }, "wrapListener"));
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
    }
    a(di, "eventTargetAgnosticAddListener");
  });
  wi = {};
  ie(wi, { Socket: () => ce, isIP: () => ha });
  Fe = G(() => {
    p();
    mi = Se(ge(), 1);
    a(ha, "isIP");
    yi = /^[^.]+\./, S = class S2 extends mi.EventEmitter {
      constructor() {
        super(...arguments);
        E(this, "opts", {});
        E(this, "connecting", false);
        E(this, "pending", true);
        E(this, "writable", true);
        E(this, "encrypted", false);
        E(this, "authorized", false);
        E(this, "destroyed", false);
        E(this, "ws", null);
        E(this, "writeBuffer");
        E(this, "tlsState", 0);
        E(this, "tlsRead");
        E(this, "tlsWrite");
      }
      static get poolQueryViaFetch() {
        return S2.opts.poolQueryViaFetch ?? S2.defaults.poolQueryViaFetch;
      }
      static set poolQueryViaFetch(t) {
        S2.opts.poolQueryViaFetch = t;
      }
      static get fetchEndpoint() {
        return S2.opts.fetchEndpoint ?? S2.defaults.fetchEndpoint;
      }
      static set fetchEndpoint(t) {
        S2.opts.fetchEndpoint = t;
      }
      static get fetchConnectionCache() {
        return true;
      }
      static set fetchConnectionCache(t) {
        console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)");
      }
      static get fetchFunction() {
        return S2.opts.fetchFunction ?? S2.defaults.fetchFunction;
      }
      static set fetchFunction(t) {
        S2.opts.fetchFunction = t;
      }
      static get webSocketConstructor() {
        return S2.opts.webSocketConstructor ?? S2.defaults.webSocketConstructor;
      }
      static set webSocketConstructor(t) {
        S2.opts.webSocketConstructor = t;
      }
      get webSocketConstructor() {
        return this.opts.webSocketConstructor ?? S2.webSocketConstructor;
      }
      set webSocketConstructor(t) {
        this.opts.webSocketConstructor = t;
      }
      static get wsProxy() {
        return S2.opts.wsProxy ?? S2.defaults.wsProxy;
      }
      static set wsProxy(t) {
        S2.opts.wsProxy = t;
      }
      get wsProxy() {
        return this.opts.wsProxy ?? S2.wsProxy;
      }
      set wsProxy(t) {
        this.opts.wsProxy = t;
      }
      static get coalesceWrites() {
        return S2.opts.coalesceWrites ?? S2.defaults.coalesceWrites;
      }
      static set coalesceWrites(t) {
        S2.opts.coalesceWrites = t;
      }
      get coalesceWrites() {
        return this.opts.coalesceWrites ?? S2.coalesceWrites;
      }
      set coalesceWrites(t) {
        this.opts.coalesceWrites = t;
      }
      static get useSecureWebSocket() {
        return S2.opts.useSecureWebSocket ?? S2.defaults.useSecureWebSocket;
      }
      static set useSecureWebSocket(t) {
        S2.opts.useSecureWebSocket = t;
      }
      get useSecureWebSocket() {
        return this.opts.useSecureWebSocket ?? S2.useSecureWebSocket;
      }
      set useSecureWebSocket(t) {
        this.opts.useSecureWebSocket = t;
      }
      static get forceDisablePgSSL() {
        return S2.opts.forceDisablePgSSL ?? S2.defaults.forceDisablePgSSL;
      }
      static set forceDisablePgSSL(t) {
        S2.opts.forceDisablePgSSL = t;
      }
      get forceDisablePgSSL() {
        return this.opts.forceDisablePgSSL ?? S2.forceDisablePgSSL;
      }
      set forceDisablePgSSL(t) {
        this.opts.forceDisablePgSSL = t;
      }
      static get disableSNI() {
        return S2.opts.disableSNI ?? S2.defaults.disableSNI;
      }
      static set disableSNI(t) {
        S2.opts.disableSNI = t;
      }
      get disableSNI() {
        return this.opts.disableSNI ?? S2.disableSNI;
      }
      set disableSNI(t) {
        this.opts.disableSNI = t;
      }
      static get disableWarningInBrowsers() {
        return S2.opts.disableWarningInBrowsers ?? S2.defaults.disableWarningInBrowsers;
      }
      static set disableWarningInBrowsers(t) {
        S2.opts.disableWarningInBrowsers = t;
      }
      get disableWarningInBrowsers() {
        return this.opts.disableWarningInBrowsers ?? S2.disableWarningInBrowsers;
      }
      set disableWarningInBrowsers(t) {
        this.opts.disableWarningInBrowsers = t;
      }
      static get pipelineConnect() {
        return S2.opts.pipelineConnect ?? S2.defaults.pipelineConnect;
      }
      static set pipelineConnect(t) {
        S2.opts.pipelineConnect = t;
      }
      get pipelineConnect() {
        return this.opts.pipelineConnect ?? S2.pipelineConnect;
      }
      set pipelineConnect(t) {
        this.opts.pipelineConnect = t;
      }
      static get subtls() {
        return S2.opts.subtls ?? S2.defaults.subtls;
      }
      static set subtls(t) {
        S2.opts.subtls = t;
      }
      get subtls() {
        return this.opts.subtls ?? S2.subtls;
      }
      set subtls(t) {
        this.opts.subtls = t;
      }
      static get pipelineTLS() {
        return S2.opts.pipelineTLS ?? S2.defaults.pipelineTLS;
      }
      static set pipelineTLS(t) {
        S2.opts.pipelineTLS = t;
      }
      get pipelineTLS() {
        return this.opts.pipelineTLS ?? S2.pipelineTLS;
      }
      set pipelineTLS(t) {
        this.opts.pipelineTLS = t;
      }
      static get rootCerts() {
        return S2.opts.rootCerts ?? S2.defaults.rootCerts;
      }
      static set rootCerts(t) {
        S2.opts.rootCerts = t;
      }
      get rootCerts() {
        return this.opts.rootCerts ?? S2.rootCerts;
      }
      set rootCerts(t) {
        this.opts.rootCerts = t;
      }
      wsProxyAddrForHost(t, n) {
        let i = this.wsProxy;
        if (i === undefined)
          throw new Error("No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string");
        return typeof i == "function" ? i(t, n) : `${i}?address=${t}:${n}`;
      }
      setNoDelay() {
        return this;
      }
      setKeepAlive() {
        return this;
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
      connect(t, n, i) {
        this.connecting = true, i && this.once("connect", i);
        let s = a(() => {
          this.connecting = false, this.pending = false, this.emit("connect"), this.emit("ready");
        }, "handleWebSocketOpen"), o = a((c, l = false) => {
          c.binaryType = "arraybuffer", c.addEventListener("error", (f) => {
            this.emit("error", f), this.emit("close");
          }), c.addEventListener("message", (f) => {
            if (this.tlsState === 0) {
              let y = d.from(f.data);
              this.emit("data", y);
            }
          }), c.addEventListener("close", () => {
            this.emit("close");
          }), l ? s() : c.addEventListener("open", s);
        }, "configureWebSocket"), u;
        try {
          u = this.wsProxyAddrForHost(n, typeof t == "string" ? parseInt(t, 10) : t);
        } catch (c) {
          this.emit("error", c), this.emit("close");
          return;
        }
        try {
          let l = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
          if (this.webSocketConstructor !== undefined)
            this.ws = new this.webSocketConstructor(l), o(this.ws);
          else
            try {
              this.ws = new WebSocket(l), o(this.ws);
            } catch {
              this.ws = new __unstable_WebSocket(l), o(this.ws);
            }
        } catch (c) {
          let f = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
          fetch(f, { headers: { Upgrade: "websocket" } }).then((y) => {
            if (this.ws = y.webSocket, this.ws == null)
              throw c;
            this.ws.accept(), o(this.ws, true);
          }).catch((y) => {
            this.emit("error", new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${y}`)), this.emit("close");
          });
        }
      }
      async startTls(t) {
        if (this.subtls === undefined)
          throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.");
        this.tlsState = 1;
        let n = await this.subtls.TrustedCert.databaseFromPEM(this.rootCerts), i = new this.subtls.WebSocketReadQueue(this.ws), s = i.read.bind(i), o = this.rawWrite.bind(this), { read: u, write: c } = await this.subtls.startTls(t, n, s, o, { useSNI: !this.disableSNI, expectPreData: this.pipelineTLS ? new Uint8Array([83]) : undefined });
        this.tlsRead = u, this.tlsWrite = c, this.tlsState = 2, this.encrypted = true, this.authorized = true, this.emit("secureConnection", this), this.tlsReadLoop();
      }
      async tlsReadLoop() {
        for (;; ) {
          let t = await this.tlsRead();
          if (t === undefined)
            break;
          {
            let n = d.from(t);
            this.emit("data", n);
          }
        }
      }
      rawWrite(t) {
        if (!this.coalesceWrites) {
          this.ws && this.ws.send(t);
          return;
        }
        if (this.writeBuffer === undefined)
          this.writeBuffer = t, setTimeout(() => {
            this.ws && this.ws.send(this.writeBuffer), this.writeBuffer = undefined;
          }, 0);
        else {
          let n = new Uint8Array(this.writeBuffer.length + t.length);
          n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), this.writeBuffer = n;
        }
      }
      write(t, n = "utf8", i = (s) => {}) {
        return t.length === 0 ? (i(), true) : (typeof t == "string" && (t = d.from(t, n)), this.tlsState === 0 ? (this.rawWrite(t), i()) : this.tlsState === 1 ? this.once("secureConnection", () => {
          this.write(t, n, i);
        }) : (this.tlsWrite(t), i()), true);
      }
      end(t = d.alloc(0), n = "utf8", i = () => {}) {
        return this.write(t, n, () => {
          this.ws.close(), i();
        }), this;
      }
      destroy() {
        return this.destroyed = true, this.end();
      }
    };
    a(S, "Socket"), E(S, "defaults", {
      poolQueryViaFetch: false,
      fetchEndpoint: a((t, n, i) => {
        let s;
        return i?.jwtAuth ? s = t.replace(yi, "apiauth.") : s = t.replace(yi, "api."), "https://" + s + "/sql";
      }, "fetchEndpoint"),
      fetchConnectionCache: true,
      fetchFunction: undefined,
      webSocketConstructor: undefined,
      wsProxy: a((t) => t + "/v2", "wsProxy"),
      useSecureWebSocket: true,
      forceDisablePgSSL: true,
      coalesceWrites: true,
      pipelineConnect: "password",
      subtls: undefined,
      rootCerts: "",
      pipelineTLS: false,
      disableSNI: false,
      disableWarningInBrowsers: false
    }), E(S, "opts", {});
    ce = S;
  });
  gi = {};
  ie(gi, { parse: () => Yt });
  Zt = G(() => {
    p();
    a(Yt, "parse");
  });
  tr = T((Ai) => {
    p();
    Ai.parse = function(r, e) {
      return new er(r, e).parse();
    };
    var vt = class vt2 {
      constructor(e, t) {
        this.source = e, this.transform = t || Ca, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var e = this.source[this.position++];
        return e === "\\" ? { value: this.source[this.position++], escaped: true } : { value: e, escaped: false };
      }
      record(e) {
        this.recorded.push(e);
      }
      newEntry(e) {
        var t;
        (this.recorded.length > 0 || e) && (t = this.recorded.join(""), t === "NULL" && !e && (t = null), t !== null && (t = this.transform(t)), this.entries.push(t), this.recorded = []);
      }
      consumeDimensions() {
        if (this.source[0] === "[")
          for (;!this.isEof(); ) {
            var e = this.nextCharacter();
            if (e.value === "=")
              break;
          }
      }
      parse(e) {
        var t, n, i;
        for (this.consumeDimensions();!this.isEof(); )
          if (t = this.nextCharacter(), t.value === "{" && !i)
            this.dimension++, this.dimension > 1 && (n = new vt2(this.source.substr(this.position - 1), this.transform), this.entries.push(n.parse(true)), this.position += n.position - 2);
          else if (t.value === "}" && !i) {
            if (this.dimension--, !this.dimension && (this.newEntry(), e))
              return this.entries;
          } else
            t.value === '"' && !t.escaped ? (i && this.newEntry(true), i = !i) : t.value === "," && !i ? this.newEntry() : this.record(t.value);
        if (this.dimension !== 0)
          throw new Error("array dimension not balanced");
        return this.entries;
      }
    };
    a(vt, "ArrayParser");
    var er = vt;
    function Ca(r) {
      return r;
    }
    a(Ca, "identity");
  });
  rr = T((Zl, Ci) => {
    p();
    var _a = tr();
    Ci.exports = { create: a(function(r, e) {
      return { parse: a(function() {
        return _a.parse(r, e);
      }, "parse") };
    }, "create") };
  });
  Ti = T((ef, Ii) => {
    p();
    var Ia = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, Ta = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, Pa = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, Ba = /^-?infinity$/;
    Ii.exports = a(function(e) {
      if (Ba.test(e))
        return Number(e.replace("i", "I"));
      var t = Ia.exec(e);
      if (!t)
        return Ra(e) || null;
      var n = !!t[8], i = parseInt(t[1], 10);
      n && (i = _i(i));
      var s = parseInt(t[2], 10) - 1, o = t[3], u = parseInt(t[4], 10), c = parseInt(t[5], 10), l = parseInt(t[6], 10), f = t[7];
      f = f ? 1000 * parseFloat(f) : 0;
      var y, g = La(e);
      return g != null ? (y = new Date(Date.UTC(i, s, o, u, c, l, f)), nr(i) && y.setUTCFullYear(i), g !== 0 && y.setTime(y.getTime() - g)) : (y = new Date(i, s, o, u, c, l, f), nr(i) && y.setFullYear(i)), y;
    }, "parseDate");
    function Ra(r) {
      var e = Ta.exec(r);
      if (e) {
        var t = parseInt(e[1], 10), n = !!e[4];
        n && (t = _i(t));
        var i = parseInt(e[2], 10) - 1, s = e[3], o = new Date(t, i, s);
        return nr(t) && o.setFullYear(t), o;
      }
    }
    a(Ra, "getDate");
    function La(r) {
      if (r.endsWith("+00"))
        return 0;
      var e = Pa.exec(r.split(" ")[1]);
      if (e) {
        var t = e[1];
        if (t === "Z")
          return 0;
        var n = t === "-" ? -1 : 1, i = parseInt(e[2], 10) * 3600 + parseInt(e[3] || 0, 10) * 60 + parseInt(e[4] || 0, 10);
        return i * n * 1000;
      }
    }
    a(La, "timeZoneOffset");
    function _i(r) {
      return -(r - 1);
    }
    a(_i, "bcYearToNegativeYear");
    function nr(r) {
      return r >= 0 && r < 100;
    }
    a(nr, "is0To99");
  });
  Bi = T((nf, Pi) => {
    p();
    Pi.exports = ka;
    var Fa = Object.prototype.hasOwnProperty;
    function ka(r) {
      for (var e = 1;e < arguments.length; e++) {
        var t = arguments[e];
        for (var n in t)
          Fa.call(t, n) && (r[n] = t[n]);
      }
      return r;
    }
    a(ka, "extend");
  });
  Fi = T((af, Li) => {
    p();
    var Ma = Bi();
    Li.exports = ke;
    function ke(r) {
      if (!(this instanceof ke))
        return new ke(r);
      Ma(this, Va(r));
    }
    a(ke, "PostgresInterval");
    var Ua = [
      "seconds",
      "minutes",
      "hours",
      "days",
      "months",
      "years"
    ];
    ke.prototype.toPostgres = function() {
      var r = Ua.filter(this.hasOwnProperty, this);
      return this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"), r.length === 0 ? "0" : r.map(function(e) {
        var t = this[e] || 0;
        return e === "seconds" && this.milliseconds && (t = (t + this.milliseconds / 1000).toFixed(6).replace(/\.?0+$/, "")), t + " " + e;
      }, this).join(" ");
    };
    var Da = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, Oa = ["years", "months", "days"], qa = ["hours", "minutes", "seconds"];
    ke.prototype.toISOString = ke.prototype.toISO = function() {
      var r = Oa.map(t, this).join(""), e = qa.map(t, this).join("");
      return "P" + r + "T" + e;
      function t(n) {
        var i = this[n] || 0;
        return n === "seconds" && this.milliseconds && (i = (i + this.milliseconds / 1000).toFixed(6).replace(/0+$/, "")), i + Da[n];
      }
    };
    var ir = "([+-]?\\d+)", Qa = ir + "\\s+years?", Na = ir + "\\s+mons?", Wa = ir + "\\s+days?", ja = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", Ha = new RegExp([Qa, Na, Wa, ja].map(function(r) {
      return "(" + r + ")?";
    }).join("\\s*")), Ri = { years: 2, months: 4, days: 6, hours: 9, minutes: 10, seconds: 11, milliseconds: 12 }, $a = ["hours", "minutes", "seconds", "milliseconds"];
    function Ga(r) {
      var e = r + "000000".slice(r.length);
      return parseInt(e, 10) / 1000;
    }
    a(Ga, "parseMilliseconds");
    function Va(r) {
      if (!r)
        return {};
      var e = Ha.exec(r), t = e[8] === "-";
      return Object.keys(Ri).reduce(function(n, i) {
        var s = Ri[i], o = e[s];
        return !o || (o = i === "milliseconds" ? Ga(o) : parseInt(o, 10), !o) || (t && ~$a.indexOf(i) && (o *= -1), n[i] = o), n;
      }, {});
    }
    a(Va, "parse");
  });
  Mi = T((lf, ki) => {
    p();
    ki.exports = a(function(e) {
      if (/^\\x/.test(e))
        return new d(e.substr(2), "hex");
      for (var t = "", n = 0;n < e.length; )
        if (e[n] !== "\\")
          t += e[n], ++n;
        else if (/[0-7]{3}/.test(e.substr(n + 1, 3)))
          t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8)), n += 4;
        else {
          for (var i = 1;n + i < e.length && e[n + i] === "\\"; )
            i++;
          for (var s = 0;s < Math.floor(i / 2); ++s)
            t += "\\";
          n += Math.floor(i / 2) * 2;
        }
      return new d(t, "binary");
    }, "parseBytea");
  });
  Wi = T((pf, Ni) => {
    p();
    var Ve = tr(), ze = rr(), xt = Ti(), Di = Fi(), Oi = Mi();
    function St(r) {
      return a(function(t) {
        return t === null ? t : r(t);
      }, "nullAllowed");
    }
    a(St, "allowNull");
    function qi(r) {
      return r === null ? r : r === "TRUE" || r === "t" || r === "true" || r === "y" || r === "yes" || r === "on" || r === "1";
    }
    a(qi, "parseBool");
    function za(r) {
      return r ? Ve.parse(r, qi) : null;
    }
    a(za, "parseBoolArray");
    function Ka(r) {
      return parseInt(r, 10);
    }
    a(Ka, "parseBaseTenInt");
    function sr(r) {
      return r ? Ve.parse(r, St(Ka)) : null;
    }
    a(sr, "parseIntegerArray");
    function Ya(r) {
      return r ? Ve.parse(r, St(function(e) {
        return Qi(e).trim();
      })) : null;
    }
    a(Ya, "parseBigIntegerArray");
    var Za = a(function(r) {
      if (!r)
        return null;
      var e = ze.create(r, function(t) {
        return t !== null && (t = cr(t)), t;
      });
      return e.parse();
    }, "parsePointArray"), or = a(function(r) {
      if (!r)
        return null;
      var e = ze.create(r, function(t) {
        return t !== null && (t = parseFloat(t)), t;
      });
      return e.parse();
    }, "parseFloatArray"), re = a(function(r) {
      if (!r)
        return null;
      var e = ze.create(r);
      return e.parse();
    }, "parseStringArray"), ar = a(function(r) {
      if (!r)
        return null;
      var e = ze.create(r, function(t) {
        return t !== null && (t = xt(t)), t;
      });
      return e.parse();
    }, "parseDateArray"), Ja = a(function(r) {
      if (!r)
        return null;
      var e = ze.create(r, function(t) {
        return t !== null && (t = Di(t)), t;
      });
      return e.parse();
    }, "parseIntervalArray"), Xa = a(function(r) {
      return r ? Ve.parse(r, St(Oi)) : null;
    }, "parseByteAArray"), ur = a(function(r) {
      return parseInt(r, 10);
    }, "parseInteger"), Qi = a(function(r) {
      var e = String(r);
      return /^\d+$/.test(e) ? e : r;
    }, "parseBigInteger"), Ui = a(function(r) {
      return r ? Ve.parse(r, St(JSON.parse)) : null;
    }, "parseJsonArray"), cr = a(function(r) {
      return r[0] !== "(" ? null : (r = r.substring(1, r.length - 1).split(","), { x: parseFloat(r[0]), y: parseFloat(r[1]) });
    }, "parsePoint"), eu = a(function(r) {
      if (r[0] !== "<" && r[1] !== "(")
        return null;
      for (var e = "(", t = "", n = false, i = 2;i < r.length - 1; i++) {
        if (n || (e += r[i]), r[i] === ")") {
          n = true;
          continue;
        } else if (!n)
          continue;
        r[i] !== "," && (t += r[i]);
      }
      var s = cr(e);
      return s.radius = parseFloat(t), s;
    }, "parseCircle"), tu = a(function(r) {
      r(20, Qi), r(21, ur), r(23, ur), r(26, ur), r(700, parseFloat), r(701, parseFloat), r(16, qi), r(1082, xt), r(1114, xt), r(1184, xt), r(600, cr), r(651, re), r(718, eu), r(1000, za), r(1001, Xa), r(1005, sr), r(1007, sr), r(1028, sr), r(1016, Ya), r(1017, Za), r(1021, or), r(1022, or), r(1231, or), r(1014, re), r(1015, re), r(1008, re), r(1009, re), r(1040, re), r(1041, re), r(1115, ar), r(1182, ar), r(1185, ar), r(1186, Di), r(1187, Ja), r(17, Oi), r(114, JSON.parse.bind(JSON)), r(3802, JSON.parse.bind(JSON)), r(199, Ui), r(3807, Ui), r(3907, re), r(2951, re), r(791, re), r(1183, re), r(1270, re);
    }, "init");
    Ni.exports = { init: tu };
  });
  Hi = T((mf, ji) => {
    p();
    var z = 1e6;
    function ru(r) {
      var e = r.readInt32BE(0), t = r.readUInt32BE(4), n = "";
      e < 0 && (e = ~e + (t === 0), t = ~t + 1 >>> 0, n = "-");
      var i = "", s, o, u, c, l, f;
      {
        if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0)
          return n + u + i;
        for (c = "", l = 6 - u.length, f = 0;f < l; f++)
          c += "0";
        i = c + u + i;
      }
      {
        if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0)
          return n + u + i;
        for (c = "", l = 6 - u.length, f = 0;f < l; f++)
          c += "0";
        i = c + u + i;
      }
      {
        if (s = e % z, e = e / z >>> 0, o = 4294967296 * s + t, t = o / z >>> 0, u = "" + (o - z * t), t === 0 && e === 0)
          return n + u + i;
        for (c = "", l = 6 - u.length, f = 0;f < l; f++)
          c += "0";
        i = c + u + i;
      }
      return s = e % z, o = 4294967296 * s + t, u = "" + o % z, n + u + i;
    }
    a(ru, "readInt8");
    ji.exports = ru;
  });
  Ki = T((bf, zi) => {
    p();
    var nu = Hi(), L = a(function(r, e, t, n, i) {
      t = t || 0, n = n || false, i = i || function(A, C, D) {
        return A * Math.pow(2, D) + C;
      };
      var s = t >> 3, o = a(function(A) {
        return n ? ~A & 255 : A;
      }, "inv"), u = 255, c = 8 - t % 8;
      e < c && (u = 255 << 8 - e & 255, c = e), t && (u = u >> t % 8);
      var l = 0;
      t % 8 + e >= 8 && (l = i(0, o(r[s]) & u, c));
      for (var f = e + t >> 3, y = s + 1;y < f; y++)
        l = i(l, o(r[y]), 8);
      var g = (e + t) % 8;
      return g > 0 && (l = i(l, o(r[f]) >> 8 - g, g)), l;
    }, "parseBits"), Vi = a(function(r, e, t) {
      var n = Math.pow(2, t - 1) - 1, i = L(r, 1), s = L(r, t, 1);
      if (s === 0)
        return 0;
      var o = 1, u = a(function(l, f, y) {
        l === 0 && (l = 1);
        for (var g = 1;g <= y; g++)
          o /= 2, (f & 1 << y - g) > 0 && (l += o);
        return l;
      }, "parsePrecisionBits"), c = L(r, e, t + 1, false, u);
      return s == Math.pow(2, t + 1) - 1 ? c === 0 ? i === 0 ? 1 / 0 : -1 / 0 : NaN : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
    }, "parseFloatFromBits"), iu = a(function(r) {
      return L(r, 1) == 1 ? -1 * (L(r, 15, 1, true) + 1) : L(r, 15, 1);
    }, "parseInt16"), $i = a(function(r) {
      return L(r, 1) == 1 ? -1 * (L(r, 31, 1, true) + 1) : L(r, 31, 1);
    }, "parseInt32"), su = a(function(r) {
      return Vi(r, 23, 8);
    }, "parseFloat32"), ou = a(function(r) {
      return Vi(r, 52, 11);
    }, "parseFloat64"), au = a(function(r) {
      var e = L(r, 16, 32);
      if (e == 49152)
        return NaN;
      for (var t = Math.pow(1e4, L(r, 16, 16)), n = 0, i = [], s = L(r, 16), o = 0;o < s; o++)
        n += L(r, 16, 64 + 16 * o) * t, t /= 1e4;
      var u = Math.pow(10, L(r, 16, 48));
      return (e === 0 ? 1 : -1) * Math.round(n * u) / u;
    }, "parseNumeric"), Gi = a(function(r, e) {
      var t = L(e, 1), n = L(e, 63, 1), i = new Date((t === 0 ? 1 : -1) * n / 1000 + 946684800000);
      return r || i.setTime(i.getTime() + i.getTimezoneOffset() * 60000), i.usec = n % 1000, i.getMicroSeconds = function() {
        return this.usec;
      }, i.setMicroSeconds = function(s) {
        this.usec = s;
      }, i.getUTCMicroSeconds = function() {
        return this.usec;
      }, i;
    }, "parseDate"), Ke = a(function(r) {
      for (var e = L(r, 32), t = L(r, 32, 32), n = L(r, 32, 64), i = 96, s = [], o = 0;o < e; o++)
        s[o] = L(r, 32, i), i += 32, i += 32;
      var u = a(function(l) {
        var f = L(r, 32, i);
        if (i += 32, f == 4294967295)
          return null;
        var y;
        if (l == 23 || l == 20)
          return y = L(r, f * 8, i), i += f * 8, y;
        if (l == 25)
          return y = r.toString(this.encoding, i >> 3, (i += f << 3) >> 3), y;
        console.log("ERROR: ElementType not implemented: " + l);
      }, "parseElement"), c = a(function(l, f) {
        var y = [], g;
        if (l.length > 1) {
          var A = l.shift();
          for (g = 0;g < A; g++)
            y[g] = c(l, f);
          l.unshift(A);
        } else
          for (g = 0;g < l[0]; g++)
            y[g] = u(f);
        return y;
      }, "parse");
      return c(s, n);
    }, "parseArray"), uu = a(function(r) {
      return r.toString("utf8");
    }, "parseText"), cu = a(function(r) {
      return r === null ? null : L(r, 8) > 0;
    }, "parseBool"), lu = a(function(r) {
      r(20, nu), r(21, iu), r(23, $i), r(26, $i), r(1700, au), r(700, su), r(701, ou), r(16, cu), r(1114, Gi.bind(null, false)), r(1184, Gi.bind(null, true)), r(1000, Ke), r(1007, Ke), r(1016, Ke), r(1008, Ke), r(1009, Ke), r(25, uu);
    }, "init");
    zi.exports = { init: lu };
  });
  Zi = T((Sf, Yi) => {
    p();
    Yi.exports = {
      BOOL: 16,
      BYTEA: 17,
      CHAR: 18,
      INT8: 20,
      INT2: 21,
      INT4: 23,
      REGPROC: 24,
      TEXT: 25,
      OID: 26,
      TID: 27,
      XID: 28,
      CID: 29,
      JSON: 114,
      XML: 142,
      PG_NODE_TREE: 194,
      SMGR: 210,
      PATH: 602,
      POLYGON: 604,
      CIDR: 650,
      FLOAT4: 700,
      FLOAT8: 701,
      ABSTIME: 702,
      RELTIME: 703,
      TINTERVAL: 704,
      CIRCLE: 718,
      MACADDR8: 774,
      MONEY: 790,
      MACADDR: 829,
      INET: 869,
      ACLITEM: 1033,
      BPCHAR: 1042,
      VARCHAR: 1043,
      DATE: 1082,
      TIME: 1083,
      TIMESTAMP: 1114,
      TIMESTAMPTZ: 1184,
      INTERVAL: 1186,
      TIMETZ: 1266,
      BIT: 1560,
      VARBIT: 1562,
      NUMERIC: 1700,
      REFCURSOR: 1790,
      REGPROCEDURE: 2202,
      REGOPER: 2203,
      REGOPERATOR: 2204,
      REGCLASS: 2205,
      REGTYPE: 2206,
      UUID: 2950,
      TXID_SNAPSHOT: 2970,
      PG_LSN: 3220,
      PG_NDISTINCT: 3361,
      PG_DEPENDENCIES: 3402,
      TSVECTOR: 3614,
      TSQUERY: 3615,
      GTSVECTOR: 3642,
      REGCONFIG: 3734,
      REGDICTIONARY: 3769,
      JSONB: 3802,
      REGNAMESPACE: 4089,
      REGROLE: 4096
    };
  });
  Je = T((Ze) => {
    p();
    var fu = Wi(), hu = Ki(), pu = rr(), du = Zi();
    Ze.getTypeParser = yu;
    Ze.setTypeParser = mu;
    Ze.arrayParser = pu;
    Ze.builtins = du;
    var Ye = { text: {}, binary: {} };
    function Ji(r) {
      return String(r);
    }
    a(Ji, "noParse");
    function yu(r, e) {
      return e = e || "text", Ye[e] && Ye[e][r] || Ji;
    }
    a(yu, "getTypeParser");
    function mu(r, e, t) {
      typeof e == "function" && (t = e, e = "text"), Ye[e][r] = t;
    }
    a(mu, "setTypeParser");
    fu.init(function(r, e) {
      Ye.text[r] = e;
    });
    hu.init(function(r, e) {
      Ye.binary[r] = e;
    });
  });
  At = T((If, Xi) => {
    p();
    var wu = Je();
    function Et(r) {
      this._types = r || wu, this.text = {}, this.binary = {};
    }
    a(Et, "TypeOverrides");
    Et.prototype.getOverrides = function(r) {
      switch (r) {
        case "text":
          return this.text;
        case "binary":
          return this.binary;
        default:
          return {};
      }
    };
    Et.prototype.setTypeParser = function(r, e, t) {
      typeof e == "function" && (t = e, e = "text"), this.getOverrides(e)[r] = t;
    };
    Et.prototype.getTypeParser = function(r, e) {
      return e = e || "text", this.getOverrides(e)[r] || this._types.getTypeParser(r, e);
    };
    Xi.exports = Et;
  });
  es = G(() => {
    p();
    a(Xe, "sha256");
  });
  ts = G(() => {
    p();
    U = class U2 {
      constructor() {
        E(this, "_dataLength", 0);
        E(this, "_bufferLength", 0);
        E(this, "_state", new Int32Array(4));
        E(this, "_buffer", new ArrayBuffer(68));
        E(this, "_buffer8");
        E(this, "_buffer32");
        this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
      }
      static hashByteArray(e, t = false) {
        return this.onePassHasher.start().appendByteArray(e).end(t);
      }
      static hashStr(e, t = false) {
        return this.onePassHasher.start().appendStr(e).end(t);
      }
      static hashAsciiStr(e, t = false) {
        return this.onePassHasher.start().appendAsciiStr(e).end(t);
      }
      static _hex(e) {
        let { hexChars: t, hexOut: n } = U2, i, s, o, u;
        for (u = 0;u < 4; u += 1)
          for (s = u * 8, i = e[u], o = 0;o < 8; o += 2)
            n[s + 1 + o] = t.charAt(i & 15), i >>>= 4, n[s + 0 + o] = t.charAt(i & 15), i >>>= 4;
        return n.join("");
      }
      static _md5cycle(e, t) {
        let n = e[0], i = e[1], s = e[2], o = e[3];
        n += (i & s | ~i & o) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & s | ~i & o) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + i | 0, o += (n & i | ~n & s) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + n | 0, s += (o & n | ~o & i) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & n) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + s | 0, n += (i & o | s & ~o) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i & o | s & ~o) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + i | 0, o += (n & s | i & ~s) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + n | 0, s += (o & i | n & ~i) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & n | o & ~n) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + s | 0, n += (i ^ s ^ o) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (i ^ s ^ o) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + i | 0, o += (n ^ i ^ s) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + n | 0, s += (o ^ n ^ i) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ n) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + s | 0, n += (s ^ (i | ~o)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + s | 0, n += (s ^ (i | ~o)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + i | 0, o += (i ^ (n | ~s)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + n | 0, s += (n ^ (o | ~i)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~n)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + s | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = s + e[2] | 0, e[3] = o + e[3] | 0;
      }
      start() {
        return this._dataLength = 0, this._bufferLength = 0, this._state.set(U2.stateIdentity), this;
      }
      appendStr(e) {
        let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o;
        for (o = 0;o < e.length; o += 1) {
          if (s = e.charCodeAt(o), s < 128)
            t[i++] = s;
          else if (s < 2048)
            t[i++] = (s >>> 6) + 192, t[i++] = s & 63 | 128;
          else if (s < 55296 || s > 56319)
            t[i++] = (s >>> 12) + 224, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
          else {
            if (s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, s > 1114111)
              throw new Error("Unicode standard supports code points up to U+10FFFF");
            t[i++] = (s >>> 18) + 240, t[i++] = s >>> 12 & 63 | 128, t[i++] = s >>> 6 & 63 | 128, t[i++] = s & 63 | 128;
          }
          i >= 64 && (this._dataLength += 64, U2._md5cycle(this._state, n), i -= 64, n[0] = n[16]);
        }
        return this._bufferLength = i, this;
      }
      appendAsciiStr(e) {
        let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
        for (;; ) {
          for (s = Math.min(e.length - o, 64 - i);s--; )
            t[i++] = e.charCodeAt(o++);
          if (i < 64)
            break;
          this._dataLength += 64, U2._md5cycle(this._state, n), i = 0;
        }
        return this._bufferLength = i, this;
      }
      appendByteArray(e) {
        let t = this._buffer8, n = this._buffer32, i = this._bufferLength, s, o = 0;
        for (;; ) {
          for (s = Math.min(e.length - o, 64 - i);s--; )
            t[i++] = e[o++];
          if (i < 64)
            break;
          this._dataLength += 64, U2._md5cycle(this._state, n), i = 0;
        }
        return this._bufferLength = i, this;
      }
      getState() {
        let e = this._state;
        return { buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)), buflen: this._bufferLength, length: this._dataLength, state: [e[0], e[1], e[2], e[3]] };
      }
      setState(e) {
        let { buffer: t, state: n } = e, i = this._state, s;
        for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], s = 0;s < t.length; s += 1)
          this._buffer8[s] = t.charCodeAt(s);
      }
      end(e = false) {
        let t = this._bufferLength, n = this._buffer8, i = this._buffer32, s = (t >> 2) + 1;
        this._dataLength += t;
        let o = this._dataLength * 8;
        if (n[t] = 128, n[t + 1] = n[t + 2] = n[t + 3] = 0, i.set(U2.buffer32Identity.subarray(s), s), t > 55 && (U2._md5cycle(this._state, i), i.set(U2.buffer32Identity)), o <= 4294967295)
          i[14] = o;
        else {
          let u = o.toString(16).match(/(.*?)(.{0,8})$/);
          if (u === null)
            return;
          let c = parseInt(u[2], 16), l = parseInt(u[1], 16) || 0;
          i[14] = c, i[15] = l;
        }
        return U2._md5cycle(this._state, i), e ? this._state : U2._hex(this._state);
      }
    };
    a(U, "Md5"), E(U, "stateIdentity", new Int32Array([1732584193, -271733879, -1732584194, 271733878])), E(U, "buffer32Identity", new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), E(U, "hexChars", "0123456789abcdef"), E(U, "hexOut", []), E(U, "onePassHasher", new U);
    et = U;
  });
  lr = {};
  ie(lr, { createHash: () => bu, createHmac: () => vu, randomBytes: () => gu });
  fr = G(() => {
    p();
    es();
    ts();
    a(gu, "randomBytes");
    a(bu, "createHash");
    a(vu, "createHmac");
  });
  tt = T((Qf, hr) => {
    p();
    hr.exports = {
      host: "localhost",
      user: m.platform === "win32" ? m.env.USERNAME : m.env.USER,
      database: undefined,
      password: null,
      connectionString: undefined,
      port: 5432,
      rows: 0,
      binary: false,
      max: 10,
      idleTimeoutMillis: 30000,
      client_encoding: "",
      ssl: false,
      application_name: undefined,
      fallback_application_name: undefined,
      options: undefined,
      parseInputDatesAsUTC: false,
      statement_timeout: false,
      lock_timeout: false,
      idle_in_transaction_session_timeout: false,
      query_timeout: false,
      connect_timeout: 0,
      keepalives: 1,
      keepalives_idle: 0
    };
    var Me = Je(), xu = Me.getTypeParser(20, "text"), Su = Me.getTypeParser(1016, "text");
    hr.exports.__defineSetter__("parseInt8", function(r) {
      Me.setTypeParser(20, "text", r ? Me.getTypeParser(23, "text") : xu), Me.setTypeParser(1016, "text", r ? Me.getTypeParser(1007, "text") : Su);
    });
  });
  rt = T((Wf, ns) => {
    p();
    var Eu = (fr(), O(lr)), Au = tt();
    function Cu(r) {
      var e = r.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
      return '"' + e + '"';
    }
    a(Cu, "escapeElement");
    function rs(r) {
      for (var e = "{", t = 0;t < r.length; t++)
        t > 0 && (e = e + ","), r[t] === null || typeof r[t] > "u" ? e = e + "NULL" : Array.isArray(r[t]) ? e = e + rs(r[t]) : r[t] instanceof d ? e += "\\\\x" + r[t].toString("hex") : e += Cu(Ct(r[t]));
      return e = e + "}", e;
    }
    a(rs, "arrayString");
    var Ct = a(function(r, e) {
      if (r == null)
        return null;
      if (r instanceof d)
        return r;
      if (ArrayBuffer.isView(r)) {
        var t = d.from(r.buffer, r.byteOffset, r.byteLength);
        return t.length === r.byteLength ? t : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
      }
      return r instanceof Date ? Au.parseInputDatesAsUTC ? Tu(r) : Iu(r) : Array.isArray(r) ? rs(r) : typeof r == "object" ? _u(r, e) : r.toString();
    }, "prepareValue");
    function _u(r, e) {
      if (r && typeof r.toPostgres == "function") {
        if (e = e || [], e.indexOf(r) !== -1)
          throw new Error('circular reference detected while preparing "' + r + '" for query');
        return e.push(r), Ct(r.toPostgres(Ct), e);
      }
      return JSON.stringify(r);
    }
    a(_u, "prepareObject");
    function N(r, e) {
      for (r = "" + r;r.length < e; )
        r = "0" + r;
      return r;
    }
    a(N, "pad");
    function Iu(r) {
      var e = -r.getTimezoneOffset(), t = r.getFullYear(), n = t < 1;
      n && (t = Math.abs(t) + 1);
      var i = N(t, 4) + "-" + N(r.getMonth() + 1, 2) + "-" + N(r.getDate(), 2) + "T" + N(r.getHours(), 2) + ":" + N(r.getMinutes(), 2) + ":" + N(r.getSeconds(), 2) + "." + N(r.getMilliseconds(), 3);
      return e < 0 ? (i += "-", e *= -1) : i += "+", i += N(Math.floor(e / 60), 2) + ":" + N(e % 60, 2), n && (i += " BC"), i;
    }
    a(Iu, "dateToString");
    function Tu(r) {
      var e = r.getUTCFullYear(), t = e < 1;
      t && (e = Math.abs(e) + 1);
      var n = N(e, 4) + "-" + N(r.getUTCMonth() + 1, 2) + "-" + N(r.getUTCDate(), 2) + "T" + N(r.getUTCHours(), 2) + ":" + N(r.getUTCMinutes(), 2) + ":" + N(r.getUTCSeconds(), 2) + "." + N(r.getUTCMilliseconds(), 3);
      return n += "+00:00", t && (n += " BC"), n;
    }
    a(Tu, "dateToStringUTC");
    function Pu(r, e, t) {
      return r = typeof r == "string" ? { text: r } : r, e && (typeof e == "function" ? r.callback = e : r.values = e), t && (r.callback = t), r;
    }
    a(Pu, "normalizeQueryConfig");
    var pr = a(function(r) {
      return Eu.createHash("md5").update(r, "utf-8").digest("hex");
    }, "md5"), Bu = a(function(r, e, t) {
      var n = pr(e + r), i = pr(d.concat([d.from(n), t]));
      return "md5" + i;
    }, "postgresMd5PasswordHash");
    ns.exports = {
      prepareValue: a(function(e) {
        return Ct(e);
      }, "prepareValueWrapper"),
      normalizeQueryConfig: Pu,
      postgresMd5PasswordHash: Bu,
      md5: pr
    };
  });
  nt = {};
  ie(nt, { default: () => ku });
  it = G(() => {
    p();
    ku = {};
  });
  ds = T((th, ps) => {
    p();
    var yr = (fr(), O(lr));
    function Mu(r) {
      if (r.indexOf("SCRAM-SHA-256") === -1)
        throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
      let e = yr.randomBytes(18).toString("base64");
      return { mechanism: "SCRAM-SHA-256", clientNonce: e, response: "n,,n=*,r=" + e, message: "SASLInitialResponse" };
    }
    a(Mu, "startSession");
    function Uu(r, e, t) {
      if (r.message !== "SASLInitialResponse")
        throw new Error("SASL: Last message was not SASLInitialResponse");
      if (typeof e != "string")
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
      if (typeof t != "string")
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
      let n = qu(t);
      if (n.nonce.startsWith(r.clientNonce)) {
        if (n.nonce.length === r.clientNonce.length)
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      } else
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      var i = d.from(n.salt, "base64"), s = Wu(e, i, n.iteration), o = Ue(s, "Client Key"), u = Nu(o), c = "n=*,r=" + r.clientNonce, l = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration, f = "c=biws,r=" + n.nonce, y = c + "," + l + "," + f, g = Ue(u, y), A = hs(o, g), C = A.toString("base64"), D = Ue(s, "Server Key"), Y = Ue(D, y);
      r.message = "SASLResponse", r.serverSignature = Y.toString("base64"), r.response = f + ",p=" + C;
    }
    a(Uu, "continueSession");
    function Du(r, e) {
      if (r.message !== "SASLResponse")
        throw new Error("SASL: Last message was not SASLResponse");
      if (typeof e != "string")
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
      let { serverSignature: t } = Qu(e);
      if (t !== r.serverSignature)
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
    }
    a(Du, "finalizeSession");
    function Ou(r) {
      if (typeof r != "string")
        throw new TypeError("SASL: text must be a string");
      return r.split("").map((e, t) => r.charCodeAt(t)).every((e) => e >= 33 && e <= 43 || e >= 45 && e <= 126);
    }
    a(Ou, "isPrintableChars");
    function ls(r) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
    }
    a(ls, "isBase64");
    function fs(r) {
      if (typeof r != "string")
        throw new TypeError("SASL: attribute pairs text must be a string");
      return new Map(r.split(",").map((e) => {
        if (!/^.=/.test(e))
          throw new Error("SASL: Invalid attribute pair entry");
        let t = e[0], n = e.substring(2);
        return [t, n];
      }));
    }
    a(fs, "parseAttributePairs");
    function qu(r) {
      let e = fs(r), t = e.get("r");
      if (t) {
        if (!Ou(t))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
      } else
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      let n = e.get("s");
      if (n) {
        if (!ls(n))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
      } else
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      let i = e.get("i");
      if (i) {
        if (!/^[1-9][0-9]*$/.test(i))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
      } else
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      let s = parseInt(i, 10);
      return { nonce: t, salt: n, iteration: s };
    }
    a(qu, "parseServerFirstMessage");
    function Qu(r) {
      let t = fs(r).get("v");
      if (t) {
        if (!ls(t))
          throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
      } else
        throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
      return { serverSignature: t };
    }
    a(Qu, "parseServerFinalMessage");
    function hs(r, e) {
      if (!d.isBuffer(r))
        throw new TypeError("first argument must be a Buffer");
      if (!d.isBuffer(e))
        throw new TypeError("second argument must be a Buffer");
      if (r.length !== e.length)
        throw new Error("Buffer lengths must match");
      if (r.length === 0)
        throw new Error("Buffers cannot be empty");
      return d.from(r.map((t, n) => r[n] ^ e[n]));
    }
    a(hs, "xorBuffers");
    function Nu(r) {
      return yr.createHash("sha256").update(r).digest();
    }
    a(Nu, "sha256");
    function Ue(r, e) {
      return yr.createHmac("sha256", r).update(e).digest();
    }
    a(Ue, "hmacSha256");
    function Wu(r, e, t) {
      for (var n = Ue(r, d.concat([e, d.from([0, 0, 0, 1])])), i = n, s = 0;s < t - 1; s++)
        n = Ue(r, n), i = hs(i, n);
      return i;
    }
    a(Wu, "Hi");
    ps.exports = { startSession: Mu, continueSession: Uu, finalizeSession: Du };
  });
  mr = {};
  ie(mr, { join: () => ju });
  wr = G(() => {
    p();
    a(ju, "join");
  });
  gr = {};
  ie(gr, { stat: () => Hu });
  br = G(() => {
    p();
    a(Hu, "stat");
  });
  vr = {};
  ie(vr, { default: () => $u });
  xr = G(() => {
    p();
    $u = {};
  });
  ys = {};
  ie(ys, { StringDecoder: () => Sr });
  ms = G(() => {
    p();
    Er = class Er2 {
      constructor(e) {
        E(this, "td");
        this.td = new TextDecoder(e);
      }
      write(e) {
        return this.td.decode(e, { stream: true });
      }
      end(e) {
        return this.td.decode(e);
      }
    };
    a(Er, "StringDecoder");
    Sr = Er;
  });
  vs = T((fh, bs) => {
    p();
    var { Transform: Gu } = (xr(), O(vr)), { StringDecoder: Vu } = (ms(), O(ys)), ve = Symbol("last"), It = Symbol("decoder");
    function zu(r, e, t) {
      let n;
      if (this.overflow) {
        if (n = this[It].write(r).split(this.matcher), n.length === 1)
          return t();
        n.shift(), this.overflow = false;
      } else
        this[ve] += this[It].write(r), n = this[ve].split(this.matcher);
      this[ve] = n.pop();
      for (let i = 0;i < n.length; i++)
        try {
          gs(this, this.mapper(n[i]));
        } catch (s) {
          return t(s);
        }
      if (this.overflow = this[ve].length > this.maxLength, this.overflow && !this.skipOverflow) {
        t(new Error("maximum buffer reached"));
        return;
      }
      t();
    }
    a(zu, "transform");
    function Ku(r) {
      if (this[ve] += this[It].end(), this[ve])
        try {
          gs(this, this.mapper(this[ve]));
        } catch (e) {
          return r(e);
        }
      r();
    }
    a(Ku, "flush");
    function gs(r, e) {
      e !== undefined && r.push(e);
    }
    a(gs, "push");
    function ws(r) {
      return r;
    }
    a(ws, "noop");
    function Yu(r, e, t) {
      switch (r = r || /\r?\n/, e = e || ws, t = t || {}, arguments.length) {
        case 1:
          typeof r == "function" ? (e = r, r = /\r?\n/) : typeof r == "object" && !(r instanceof RegExp) && !r[Symbol.split] && (t = r, r = /\r?\n/);
          break;
        case 2:
          typeof r == "function" ? (t = e, e = r, r = /\r?\n/) : typeof e == "object" && (t = e, e = ws);
      }
      t = Object.assign({}, t), t.autoDestroy = true, t.transform = zu, t.flush = Ku, t.readableObjectMode = true;
      let n = new Gu(t);
      return n[ve] = "", n[It] = new Vu("utf8"), n.matcher = r, n.mapper = e, n.maxLength = t.maxLength, n.skipOverflow = t.skipOverflow || false, n.overflow = false, n._destroy = function(i, s) {
        this._writableState.errorEmitted = false, s(i);
      }, n;
    }
    a(Yu, "split");
    bs.exports = Yu;
  });
  Es = T((dh, pe) => {
    p();
    var xs = (wr(), O(mr)), Zu = (xr(), O(vr)).Stream, Ju = vs(), Ss = (it(), O(nt)), Xu = 5432, Tt = m.platform === "win32", st = m.stderr, ec = 56, tc = 7, rc = 61440, nc = 32768;
    function ic(r) {
      return (r & rc) == nc;
    }
    a(ic, "isRegFile");
    var De = ["host", "port", "database", "user", "password"], Ar = De.length, sc = De[Ar - 1];
    function Cr() {
      var r = st instanceof Zu && st.writable === true;
      if (r) {
        var e = Array.prototype.slice.call(arguments).concat(`
`);
        st.write(Ss.format.apply(Ss, e));
      }
    }
    a(Cr, "warn");
    Object.defineProperty(pe.exports, "isWin", { get: a(function() {
      return Tt;
    }, "get"), set: a(function(r) {
      Tt = r;
    }, "set") });
    pe.exports.warnTo = function(r) {
      var e = st;
      return st = r, e;
    };
    pe.exports.getFileName = function(r) {
      var e = r || m.env, t = e.PGPASSFILE || (Tt ? xs.join(e.APPDATA || "./", "postgresql", "pgpass.conf") : xs.join(e.HOME || "./", ".pgpass"));
      return t;
    };
    pe.exports.usePgPass = function(r, e) {
      return Object.prototype.hasOwnProperty.call(m.env, "PGPASSWORD") ? false : Tt ? true : (e = e || "<unkn>", ic(r.mode) ? r.mode & (ec | tc) ? (Cr('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', e), false) : true : (Cr('WARNING: password file "%s" is not a plain file', e), false));
    };
    var oc = pe.exports.match = function(r, e) {
      return De.slice(0, -1).reduce(function(t, n, i) {
        return i == 1 && Number(r[n] || Xu) === Number(e[n]) ? t && true : t && (e[n] === "*" || e[n] === r[n]);
      }, true);
    };
    pe.exports.getPassword = function(r, e, t) {
      var n, i = e.pipe(Ju());
      function s(c) {
        var l = ac(c);
        l && uc(l) && oc(r, l) && (n = l[sc], i.end());
      }
      a(s, "onLine");
      var o = a(function() {
        e.destroy(), t(n);
      }, "onEnd"), u = a(function(c) {
        e.destroy(), Cr("WARNING: error on reading file: %s", c), t(undefined);
      }, "onErr");
      e.on("error", u), i.on("data", s).on("end", o).on("error", u);
    };
    var ac = pe.exports.parseLine = function(r) {
      if (r.length < 11 || r.match(/^\s+#/))
        return null;
      for (var e = "", t = "", n = 0, i = 0, s = 0, o = {}, u = false, c = a(function(f, y, g) {
        var A = r.substring(y, g);
        Object.hasOwnProperty.call(m.env, "PGPASS_NO_DEESCAPE") || (A = A.replace(/\\([:\\])/g, "$1")), o[De[f]] = A;
      }, "addToObj"), l = 0;l < r.length - 1; l += 1) {
        if (e = r.charAt(l + 1), t = r.charAt(l), u = n == Ar - 1, u) {
          c(n, i);
          break;
        }
        l >= 0 && e == ":" && t !== "\\" && (c(n, i, l + 1), i = l + 2, n += 1);
      }
      return o = Object.keys(o).length === Ar ? o : null, o;
    }, uc = pe.exports.isValidEntry = function(r) {
      for (var e = { 0: function(o) {
        return o.length > 0;
      }, 1: function(o) {
        return o === "*" ? true : (o = Number(o), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
      }, 2: function(o) {
        return o.length > 0;
      }, 3: function(o) {
        return o.length > 0;
      }, 4: function(o) {
        return o.length > 0;
      } }, t = 0;t < De.length; t += 1) {
        var n = e[t], i = r[De[t]] || "", s = n(i);
        if (!s)
          return false;
      }
      return true;
    };
  });
  Cs = T((gh, _r) => {
    p();
    var wh = (wr(), O(mr)), As = (br(), O(gr)), Pt = Es();
    _r.exports = function(r, e) {
      var t = Pt.getFileName();
      As.stat(t, function(n, i) {
        if (n || !Pt.usePgPass(i, t))
          return e(undefined);
        var s = As.createReadStream(t);
        Pt.getPassword(r, s, e);
      });
    };
    _r.exports.warnTo = Pt.warnTo;
  });
  _s = {};
  ie(_s, { default: () => cc });
  Is = G(() => {
    p();
    cc = {};
  });
  Ps = T((xh, Ts) => {
    p();
    var lc = (Zt(), O(gi)), Ir = (br(), O(gr));
    function Tr(r) {
      if (r.charAt(0) === "/") {
        var t = r.split(" ");
        return { host: t[0], database: t[1] };
      }
      var e = lc.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1") : r, true), t = e.query;
      for (var n in t)
        Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
      var i = (e.auth || ":").split(":");
      if (t.user = i[0], t.password = i.splice(1).join(":"), t.port = e.port, e.protocol == "socket:")
        return t.host = decodeURI(e.pathname), t.database = e.query.db, t.client_encoding = e.query.encoding, t;
      t.host || (t.host = e.hostname);
      var s = e.pathname;
      if (!t.host && s && /^%2f/i.test(s)) {
        var o = s.split("/");
        t.host = decodeURIComponent(o[0]), s = o.splice(1).join("/");
      }
      switch (s && s.charAt(0) === "/" && (s = s.slice(1) || null), t.database = s && decodeURI(s), (t.ssl === "true" || t.ssl === "1") && (t.ssl = true), t.ssl === "0" && (t.ssl = false), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = Ir.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = Ir.readFileSync(t.sslkey).toString()), t.sslrootcert && (t.ssl.ca = Ir.readFileSync(t.sslrootcert).toString()), t.sslmode) {
        case "disable": {
          t.ssl = false;
          break;
        }
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          break;
        case "no-verify": {
          t.ssl.rejectUnauthorized = false;
          break;
        }
      }
      return t;
    }
    a(Tr, "parse");
    Ts.exports = Tr;
    Tr.parse = Tr;
  });
  Bt = T((Ah, Ls) => {
    p();
    var fc = (Is(), O(_s)), Rs = tt(), Bs = Ps().parse, H = a(function(r, e, t) {
      return t === undefined ? t = m.env["PG" + r.toUpperCase()] : t === false || (t = m.env[t]), e[r] || t || Rs[r];
    }, "val"), hc = a(function() {
      switch (m.env.PGSSLMODE) {
        case "disable":
          return false;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return true;
        case "no-verify":
          return { rejectUnauthorized: false };
      }
      return Rs.ssl;
    }, "readSSLConfigFromEnvironment"), Oe = a(function(r) {
      return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quoteParamValue"), ne = a(function(r, e, t) {
      var n = e[t];
      n != null && r.push(t + "=" + Oe(n));
    }, "add"), Br = class Br2 {
      constructor(e) {
        e = typeof e == "string" ? Bs(e) : e || {}, e.connectionString && (e = Object.assign({}, e, Bs(e.connectionString))), this.user = H("user", e), this.database = H("database", e), this.database === undefined && (this.database = this.user), this.port = parseInt(H("port", e), 10), this.host = H("host", e), Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: H("password", e)
        }), this.binary = H("binary", e), this.options = H("options", e), this.ssl = typeof e.ssl > "u" ? hc() : e.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = true), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: false }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this.client_encoding = H("client_encoding", e), this.replication = H("replication", e), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = H("application_name", e, "PGAPPNAME"), this.fallback_application_name = H("fallback_application_name", e, false), this.statement_timeout = H("statement_timeout", e, false), this.lock_timeout = H("lock_timeout", e, false), this.idle_in_transaction_session_timeout = H("idle_in_transaction_session_timeout", e, false), this.query_timeout = H("query_timeout", e, false), e.connectionTimeoutMillis === undefined ? this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(e.connectionTimeoutMillis / 1000), e.keepAlive === false ? this.keepalives = 0 : e.keepAlive === true && (this.keepalives = 1), typeof e.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(e.keepAliveInitialDelayMillis / 1000));
      }
      getLibpqConnectionString(e) {
        var t = [];
        ne(t, this, "user"), ne(t, this, "password"), ne(t, this, "port"), ne(t, this, "application_name"), ne(t, this, "fallback_application_name"), ne(t, this, "connect_timeout"), ne(t, this, "options");
        var n = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
        if (ne(t, n, "sslmode"), ne(t, n, "sslca"), ne(t, n, "sslkey"), ne(t, n, "sslcert"), ne(t, n, "sslrootcert"), this.database && t.push("dbname=" + Oe(this.database)), this.replication && t.push("replication=" + Oe(this.replication)), this.host && t.push("host=" + Oe(this.host)), this.isDomainSocket)
          return e(null, t.join(" "));
        this.client_encoding && t.push("client_encoding=" + Oe(this.client_encoding)), fc.lookup(this.host, function(i, s) {
          return i ? e(i, null) : (t.push("hostaddr=" + Oe(s)), e(null, t.join(" ")));
        });
      }
    };
    a(Br, "ConnectionParameters");
    var Pr = Br;
    Ls.exports = Pr;
  });
  Ms = T((Ih, ks) => {
    p();
    var pc = Je(), Fs = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, Lr = class Lr2 {
      constructor(e, t) {
        this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = undefined, this._types = t, this.RowCtor = null, this.rowAsArray = e === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
      }
      addCommandComplete(e) {
        var t;
        e.text ? t = Fs.exec(e.text) : t = Fs.exec(e.command), t && (this.command = t[1], t[3] ? (this.oid = parseInt(t[2], 10), this.rowCount = parseInt(t[3], 10)) : t[2] && (this.rowCount = parseInt(t[2], 10)));
      }
      _parseRowAsArray(e) {
        for (var t = new Array(e.length), n = 0, i = e.length;n < i; n++) {
          var s = e[n];
          s !== null ? t[n] = this._parsers[n](s) : t[n] = null;
        }
        return t;
      }
      parseRow(e) {
        for (var t = {}, n = 0, i = e.length;n < i; n++) {
          var s = e[n], o = this.fields[n].name;
          s !== null ? t[o] = this._parsers[n](s) : t[o] = null;
        }
        return t;
      }
      addRow(e) {
        this.rows.push(e);
      }
      addFields(e) {
        this.fields = e, this.fields.length && (this._parsers = new Array(e.length));
        for (var t = 0;t < e.length; t++) {
          var n = e[t];
          this._types ? this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || "text") : this._parsers[t] = pc.getTypeParser(n.dataTypeID, n.format || "text");
        }
      }
    };
    a(Lr, "Result");
    var Rr = Lr;
    ks.exports = Rr;
  });
  qs = T((Bh, Os) => {
    p();
    var { EventEmitter: dc } = ge(), Us = Ms(), Ds = rt(), kr = class kr2 extends dc {
      constructor(e, t, n) {
        super(), e = Ds.normalizeQueryConfig(e, t, n), this.text = e.text, this.values = e.values, this.rows = e.rows, this.types = e.types, this.name = e.name, this.binary = e.binary, this.portal = e.portal || "", this.callback = e.callback, this._rowMode = e.rowMode, m.domain && e.callback && (this.callback = m.domain.bind(e.callback)), this._result = new Us(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = false, this._canceledDueToError = false, this._promise = null;
      }
      requiresPreparation() {
        return this.name || this.rows ? true : !this.text || !this.values ? false : this.values.length > 0;
      }
      _checkForMultirow() {
        this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new Us(this._rowMode, this.types), this._results.push(this._result));
      }
      handleRowDescription(e) {
        this._checkForMultirow(), this._result.addFields(e.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
      }
      handleDataRow(e) {
        let t;
        if (!this._canceledDueToError) {
          try {
            t = this._result.parseRow(e.fields);
          } catch (n) {
            this._canceledDueToError = n;
            return;
          }
          this.emit("row", t, this._result), this._accumulateRows && this._result.addRow(t);
        }
      }
      handleCommandComplete(e, t) {
        this._checkForMultirow(), this._result.addCommandComplete(e), this.rows && t.sync();
      }
      handleEmptyQuery(e) {
        this.rows && e.sync();
      }
      handleError(e, t) {
        if (this._canceledDueToError && (e = this._canceledDueToError, this._canceledDueToError = false), this.callback)
          return this.callback(e);
        this.emit("error", e);
      }
      handleReadyForQuery(e) {
        if (this._canceledDueToError)
          return this.handleError(this._canceledDueToError, e);
        if (this.callback)
          try {
            this.callback(null, this._results);
          } catch (t) {
            m.nextTick(() => {
              throw t;
            });
          }
        this.emit("end", this._results);
      }
      submit(e) {
        if (typeof this.text != "string" && typeof this.name != "string")
          return new Error("A query must have either text or a name. Supplying neither is unsupported.");
        let t = e.parsedStatements[this.name];
        return this.text && t && this.text !== t ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(e) : e.query(this.text), null);
      }
      hasBeenParsed(e) {
        return this.name && e.parsedStatements[this.name];
      }
      handlePortalSuspended(e) {
        this._getRows(e, this.rows);
      }
      _getRows(e, t) {
        e.execute({ portal: this.portal, rows: t }), t ? e.flush() : e.sync();
      }
      prepare(e) {
        this.isPreparedStatement = true, this.hasBeenParsed(e) || e.parse({ text: this.text, name: this.name, types: this.types });
        try {
          e.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: Ds.prepareValue });
        } catch (t) {
          this.handleError(t, e);
          return;
        }
        e.describe({ type: "P", name: this.portal || "" }), this._getRows(e, this.rows);
      }
      handleCopyInResponse(e) {
        e.sendCopyFail("No source stream defined");
      }
      handleCopyData(e, t) {}
    };
    a(kr, "Query");
    var Fr = kr;
    Os.exports = Fr;
  });
  ln = T((_) => {
    p();
    Object.defineProperty(_, "__esModule", { value: true });
    _.NoticeMessage = _.DataRowMessage = _.CommandCompleteMessage = _.ReadyForQueryMessage = _.NotificationResponseMessage = _.BackendKeyDataMessage = _.AuthenticationMD5Password = _.ParameterStatusMessage = _.ParameterDescriptionMessage = _.RowDescriptionMessage = _.Field = _.CopyResponse = _.CopyDataMessage = _.DatabaseError = _.copyDone = _.emptyQuery = _.replicationStart = _.portalSuspended = _.noData = _.closeComplete = _.bindComplete = _.parseComplete = undefined;
    _.parseComplete = { name: "parseComplete", length: 5 };
    _.bindComplete = { name: "bindComplete", length: 5 };
    _.closeComplete = { name: "closeComplete", length: 5 };
    _.noData = { name: "noData", length: 5 };
    _.portalSuspended = { name: "portalSuspended", length: 5 };
    _.replicationStart = { name: "replicationStart", length: 4 };
    _.emptyQuery = { name: "emptyQuery", length: 4 };
    _.copyDone = { name: "copyDone", length: 4 };
    var Kr = class Kr2 extends Error {
      constructor(e, t, n) {
        super(e), this.length = t, this.name = n;
      }
    };
    a(Kr, "DatabaseError");
    var Mr = Kr;
    _.DatabaseError = Mr;
    var Yr = class Yr2 {
      constructor(e, t) {
        this.length = e, this.chunk = t, this.name = "copyData";
      }
    };
    a(Yr, "CopyDataMessage");
    var Ur = Yr;
    _.CopyDataMessage = Ur;
    var Zr = class Zr2 {
      constructor(e, t, n, i) {
        this.length = e, this.name = t, this.binary = n, this.columnTypes = new Array(i);
      }
    };
    a(Zr, "CopyResponse");
    var Dr = Zr;
    _.CopyResponse = Dr;
    var Jr = class Jr2 {
      constructor(e, t, n, i, s, o, u) {
        this.name = e, this.tableID = t, this.columnID = n, this.dataTypeID = i, this.dataTypeSize = s, this.dataTypeModifier = o, this.format = u;
      }
    };
    a(Jr, "Field");
    var Or = Jr;
    _.Field = Or;
    var Xr = class Xr2 {
      constructor(e, t) {
        this.length = e, this.fieldCount = t, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
      }
    };
    a(Xr, "RowDescriptionMessage");
    var qr = Xr;
    _.RowDescriptionMessage = qr;
    var en = class en2 {
      constructor(e, t) {
        this.length = e, this.parameterCount = t, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
      }
    };
    a(en, "ParameterDescriptionMessage");
    var Qr = en;
    _.ParameterDescriptionMessage = Qr;
    var tn = class tn2 {
      constructor(e, t, n) {
        this.length = e, this.parameterName = t, this.parameterValue = n, this.name = "parameterStatus";
      }
    };
    a(tn, "ParameterStatusMessage");
    var Nr = tn;
    _.ParameterStatusMessage = Nr;
    var rn = class rn2 {
      constructor(e, t) {
        this.length = e, this.salt = t, this.name = "authenticationMD5Password";
      }
    };
    a(rn, "AuthenticationMD5Password");
    var Wr = rn;
    _.AuthenticationMD5Password = Wr;
    var nn = class nn2 {
      constructor(e, t, n) {
        this.length = e, this.processID = t, this.secretKey = n, this.name = "backendKeyData";
      }
    };
    a(nn, "BackendKeyDataMessage");
    var jr = nn;
    _.BackendKeyDataMessage = jr;
    var sn = class sn2 {
      constructor(e, t, n, i) {
        this.length = e, this.processId = t, this.channel = n, this.payload = i, this.name = "notification";
      }
    };
    a(sn, "NotificationResponseMessage");
    var Hr = sn;
    _.NotificationResponseMessage = Hr;
    var on = class on2 {
      constructor(e, t) {
        this.length = e, this.status = t, this.name = "readyForQuery";
      }
    };
    a(on, "ReadyForQueryMessage");
    var $r = on;
    _.ReadyForQueryMessage = $r;
    var an = class an2 {
      constructor(e, t) {
        this.length = e, this.text = t, this.name = "commandComplete";
      }
    };
    a(an, "CommandCompleteMessage");
    var Gr = an;
    _.CommandCompleteMessage = Gr;
    var un = class un2 {
      constructor(e, t) {
        this.length = e, this.fields = t, this.name = "dataRow", this.fieldCount = t.length;
      }
    };
    a(un, "DataRowMessage");
    var Vr = un;
    _.DataRowMessage = Vr;
    var cn = class cn2 {
      constructor(e, t) {
        this.length = e, this.message = t, this.name = "notice";
      }
    };
    a(cn, "NoticeMessage");
    var zr = cn;
    _.NoticeMessage = zr;
  });
  Qs = T((Rt) => {
    p();
    Object.defineProperty(Rt, "__esModule", { value: true });
    Rt.Writer = undefined;
    var hn = class hn2 {
      constructor(e = 256) {
        this.size = e, this.offset = 5, this.headerPosition = 0, this.buffer = d.allocUnsafe(e);
      }
      ensure(e) {
        if (this.buffer.length - this.offset < e) {
          let n = this.buffer, i = n.length + (n.length >> 1) + e;
          this.buffer = d.allocUnsafe(i), n.copy(this.buffer);
        }
      }
      addInt32(e) {
        return this.ensure(4), this.buffer[this.offset++] = e >>> 24 & 255, this.buffer[this.offset++] = e >>> 16 & 255, this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
      }
      addInt16(e) {
        return this.ensure(2), this.buffer[this.offset++] = e >>> 8 & 255, this.buffer[this.offset++] = e >>> 0 & 255, this;
      }
      addCString(e) {
        if (!e)
          this.ensure(1);
        else {
          let t = d.byteLength(e);
          this.ensure(t + 1), this.buffer.write(e, this.offset, "utf-8"), this.offset += t;
        }
        return this.buffer[this.offset++] = 0, this;
      }
      addString(e = "") {
        let t = d.byteLength(e);
        return this.ensure(t), this.buffer.write(e, this.offset), this.offset += t, this;
      }
      add(e) {
        return this.ensure(e.length), e.copy(this.buffer, this.offset), this.offset += e.length, this;
      }
      join(e) {
        if (e) {
          this.buffer[this.headerPosition] = e;
          let t = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(t, this.headerPosition + 1);
        }
        return this.buffer.slice(e ? 0 : 5, this.offset);
      }
      flush(e) {
        let t = this.join(e);
        return this.offset = 5, this.headerPosition = 0, this.buffer = d.allocUnsafe(this.size), t;
      }
    };
    a(hn, "Writer");
    var fn = hn;
    Rt.Writer = fn;
  });
  Ws = T((Ft) => {
    p();
    Object.defineProperty(Ft, "__esModule", { value: true });
    Ft.serialize = undefined;
    var pn = Qs(), F = new pn.Writer, yc = a((r) => {
      F.addInt16(3).addInt16(0);
      for (let n of Object.keys(r))
        F.addCString(n).addCString(r[n]);
      F.addCString("client_encoding").addCString("UTF8");
      let e = F.addCString("").flush(), t = e.length + 4;
      return new pn.Writer().addInt32(t).add(e).flush();
    }, "startup"), mc = a(() => {
      let r = d.allocUnsafe(8);
      return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
    }, "requestSsl"), wc = a((r) => F.addCString(r).flush(112), "password"), gc = a(function(r, e) {
      return F.addCString(r).addInt32(d.byteLength(e)).addString(e), F.flush(112);
    }, "sendSASLInitialResponseMessage"), bc = a(function(r) {
      return F.addString(r).flush(112);
    }, "sendSCRAMClientFinalMessage"), vc = a((r) => F.addCString(r).flush(81), "query"), Ns = [], xc = a((r) => {
      let e = r.name || "";
      e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
      let t = r.types || Ns, n = t.length, i = F.addCString(e).addCString(r.text).addInt16(n);
      for (let s = 0;s < n; s++)
        i.addInt32(t[s]);
      return F.flush(80);
    }, "parse"), qe = new pn.Writer, Sc = a(function(r, e) {
      for (let t = 0;t < r.length; t++) {
        let n = e ? e(r[t], t) : r[t];
        n == null ? (F.addInt16(0), qe.addInt32(-1)) : n instanceof d ? (F.addInt16(1), qe.addInt32(n.length), qe.add(n)) : (F.addInt16(0), qe.addInt32(d.byteLength(n)), qe.addString(n));
      }
    }, "writeValues"), Ec = a((r = {}) => {
      let e = r.portal || "", t = r.statement || "", n = r.binary || false, i = r.values || Ns, s = i.length;
      return F.addCString(e).addCString(t), F.addInt16(s), Sc(i, r.valueMapper), F.addInt16(s), F.add(qe.flush()), F.addInt16(n ? 1 : 0), F.flush(66);
    }, "bind"), Ac = d.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), Cc = a((r) => {
      if (!r || !r.portal && !r.rows)
        return Ac;
      let e = r.portal || "", t = r.rows || 0, n = d.byteLength(e), i = 4 + n + 1 + 4, s = d.allocUnsafe(1 + i);
      return s[0] = 69, s.writeInt32BE(i, 1), s.write(e, 5, "utf-8"), s[n + 5] = 0, s.writeUInt32BE(t, s.length - 4), s;
    }, "execute"), _c = a((r, e) => {
      let t = d.allocUnsafe(16);
      return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(5678, 6), t.writeInt32BE(r, 8), t.writeInt32BE(e, 12), t;
    }, "cancel"), dn = a((r, e) => {
      let n = 4 + d.byteLength(e) + 1, i = d.allocUnsafe(1 + n);
      return i[0] = r, i.writeInt32BE(n, 1), i.write(e, 5, "utf-8"), i[n] = 0, i;
    }, "cstringMessage"), Ic = F.addCString("P").flush(68), Tc = F.addCString("S").flush(68), Pc = a((r) => r.name ? dn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? Ic : Tc, "describe"), Bc = a((r) => {
      let e = `${r.type}${r.name || ""}`;
      return dn(67, e);
    }, "close"), Rc = a((r) => F.add(r).flush(100), "copyData"), Lc = a((r) => dn(102, r), "copyFail"), Lt = a((r) => d.from([r, 0, 0, 0, 4]), "codeOnlyBuffer"), Fc = Lt(72), kc = Lt(83), Mc = Lt(88), Uc = Lt(99), Dc = {
      startup: yc,
      password: wc,
      requestSsl: mc,
      sendSASLInitialResponseMessage: gc,
      sendSCRAMClientFinalMessage: bc,
      query: vc,
      parse: xc,
      bind: Ec,
      execute: Cc,
      describe: Pc,
      close: Bc,
      flush: a(() => Fc, "flush"),
      sync: a(() => kc, "sync"),
      end: a(() => Mc, "end"),
      copyData: Rc,
      copyDone: a(() => Uc, "copyDone"),
      copyFail: Lc,
      cancel: _c
    };
    Ft.serialize = Dc;
  });
  js = T((kt) => {
    p();
    Object.defineProperty(kt, "__esModule", { value: true });
    kt.BufferReader = undefined;
    var Oc = d.allocUnsafe(0), mn = class mn2 {
      constructor(e = 0) {
        this.offset = e, this.buffer = Oc, this.encoding = "utf-8";
      }
      setBuffer(e, t) {
        this.offset = e, this.buffer = t;
      }
      int16() {
        let e = this.buffer.readInt16BE(this.offset);
        return this.offset += 2, e;
      }
      byte() {
        let e = this.buffer[this.offset];
        return this.offset++, e;
      }
      int32() {
        let e = this.buffer.readInt32BE(this.offset);
        return this.offset += 4, e;
      }
      uint32() {
        let e = this.buffer.readUInt32BE(this.offset);
        return this.offset += 4, e;
      }
      string(e) {
        let t = this.buffer.toString(this.encoding, this.offset, this.offset + e);
        return this.offset += e, t;
      }
      cstring() {
        let e = this.offset, t = e;
        for (;this.buffer[t++] !== 0; )
          ;
        return this.offset = t, this.buffer.toString(this.encoding, e, t - 1);
      }
      bytes(e) {
        let t = this.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, t;
      }
    };
    a(mn, "BufferReader");
    var yn = mn;
    kt.BufferReader = yn;
  });
  Gs = T((Mt) => {
    p();
    Object.defineProperty(Mt, "__esModule", { value: true });
    Mt.Parser = undefined;
    var k = ln(), qc = js(), wn = 1, Qc = 4, Hs = wn + Qc, $s = d.allocUnsafe(0), bn = class bn2 {
      constructor(e) {
        if (this.buffer = $s, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new qc.BufferReader, e?.mode === "binary")
          throw new Error("Binary mode not supported yet");
        this.mode = e?.mode || "text";
      }
      parse(e, t) {
        this.mergeBuffer(e);
        let n = this.bufferOffset + this.bufferLength, i = this.bufferOffset;
        for (;i + Hs <= n; ) {
          let s = this.buffer[i], o = this.buffer.readUInt32BE(i + wn), u = wn + o;
          if (u + i <= n) {
            let c = this.handlePacket(i + Hs, s, o, this.buffer);
            t(c), i += u;
          } else
            break;
        }
        i === n ? (this.buffer = $s, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = n - i, this.bufferOffset = i);
      }
      mergeBuffer(e) {
        if (this.bufferLength > 0) {
          let t = this.bufferLength + e.byteLength;
          if (t + this.bufferOffset > this.buffer.byteLength) {
            let i;
            if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength)
              i = this.buffer;
            else {
              let s = this.buffer.byteLength * 2;
              for (;t >= s; )
                s *= 2;
              i = d.allocUnsafe(s);
            }
            this.buffer.copy(i, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = i, this.bufferOffset = 0;
          }
          e.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = t;
        } else
          this.buffer = e, this.bufferOffset = 0, this.bufferLength = e.byteLength;
      }
      handlePacket(e, t, n, i) {
        switch (t) {
          case 50:
            return k.bindComplete;
          case 49:
            return k.parseComplete;
          case 51:
            return k.closeComplete;
          case 110:
            return k.noData;
          case 115:
            return k.portalSuspended;
          case 99:
            return k.copyDone;
          case 87:
            return k.replicationStart;
          case 73:
            return k.emptyQuery;
          case 68:
            return this.parseDataRowMessage(e, n, i);
          case 67:
            return this.parseCommandCompleteMessage(e, n, i);
          case 90:
            return this.parseReadyForQueryMessage(e, n, i);
          case 65:
            return this.parseNotificationMessage(e, n, i);
          case 82:
            return this.parseAuthenticationResponse(e, n, i);
          case 83:
            return this.parseParameterStatusMessage(e, n, i);
          case 75:
            return this.parseBackendKeyData(e, n, i);
          case 69:
            return this.parseErrorMessage(e, n, i, "error");
          case 78:
            return this.parseErrorMessage(e, n, i, "notice");
          case 84:
            return this.parseRowDescriptionMessage(e, n, i);
          case 116:
            return this.parseParameterDescriptionMessage(e, n, i);
          case 71:
            return this.parseCopyInMessage(e, n, i);
          case 72:
            return this.parseCopyOutMessage(e, n, i);
          case 100:
            return this.parseCopyData(e, n, i);
          default:
            return new k.DatabaseError("received invalid response: " + t.toString(16), n, "error");
        }
      }
      parseReadyForQueryMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.string(1);
        return new k.ReadyForQueryMessage(t, i);
      }
      parseCommandCompleteMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring();
        return new k.CommandCompleteMessage(t, i);
      }
      parseCopyData(e, t, n) {
        let i = n.slice(e, e + (t - 4));
        return new k.CopyDataMessage(t, i);
      }
      parseCopyInMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, "copyInResponse");
      }
      parseCopyOutMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, "copyOutResponse");
      }
      parseCopyMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = this.reader.byte() !== 0, o = this.reader.int16(), u = new k.CopyResponse(t, i, s, o);
        for (let c = 0;c < o; c++)
          u.columnTypes[c] = this.reader.int16();
        return u;
      }
      parseNotificationMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(), s = this.reader.cstring(), o = this.reader.cstring();
        return new k.NotificationResponseMessage(t, i, s, o);
      }
      parseRowDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(), s = new k.RowDescriptionMessage(t, i);
        for (let o = 0;o < i; o++)
          s.fields[o] = this.parseField();
        return s;
      }
      parseField() {
        let e = this.reader.cstring(), t = this.reader.uint32(), n = this.reader.int16(), i = this.reader.uint32(), s = this.reader.int16(), o = this.reader.int32(), u = this.reader.int16() === 0 ? "text" : "binary";
        return new k.Field(e, t, n, i, s, o, u);
      }
      parseParameterDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(), s = new k.ParameterDescriptionMessage(t, i);
        for (let o = 0;o < i; o++)
          s.dataTypeIDs[o] = this.reader.int32();
        return s;
      }
      parseDataRowMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(), s = new Array(i);
        for (let o = 0;o < i; o++) {
          let u = this.reader.int32();
          s[o] = u === -1 ? null : this.reader.string(u);
        }
        return new k.DataRowMessage(t, s);
      }
      parseParameterStatusMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring(), s = this.reader.cstring();
        return new k.ParameterStatusMessage(t, i, s);
      }
      parseBackendKeyData(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(), s = this.reader.int32();
        return new k.BackendKeyDataMessage(t, i, s);
      }
      parseAuthenticationResponse(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(), s = { name: "authenticationOk", length: t };
        switch (i) {
          case 0:
            break;
          case 3:
            s.length === 8 && (s.name = "authenticationCleartextPassword");
            break;
          case 5:
            if (s.length === 12) {
              s.name = "authenticationMD5Password";
              let o = this.reader.bytes(4);
              return new k.AuthenticationMD5Password(t, o);
            }
            break;
          case 10:
            {
              s.name = "authenticationSASL", s.mechanisms = [];
              let o;
              do
                o = this.reader.cstring(), o && s.mechanisms.push(o);
              while (o);
            }
            break;
          case 11:
            s.name = "authenticationSASLContinue", s.data = this.reader.string(t - 8);
            break;
          case 12:
            s.name = "authenticationSASLFinal", s.data = this.reader.string(t - 8);
            break;
          default:
            throw new Error("Unknown authenticationOk message type " + i);
        }
        return s;
      }
      parseErrorMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = {}, o = this.reader.string(1);
        for (;o !== "\x00"; )
          s[o] = this.reader.cstring(), o = this.reader.string(1);
        let u = s.M, c = i === "notice" ? new k.NoticeMessage(t, u) : new k.DatabaseError(u, t, i);
        return c.severity = s.S, c.code = s.C, c.detail = s.D, c.hint = s.H, c.position = s.P, c.internalPosition = s.p, c.internalQuery = s.q, c.where = s.W, c.schema = s.s, c.table = s.t, c.column = s.c, c.dataType = s.d, c.constraint = s.n, c.file = s.F, c.line = s.L, c.routine = s.R, c;
      }
    };
    a(bn, "Parser");
    var gn = bn;
    Mt.Parser = gn;
  });
  vn = T((xe) => {
    p();
    Object.defineProperty(xe, "__esModule", { value: true });
    xe.DatabaseError = xe.serialize = xe.parse = undefined;
    var Nc = ln();
    Object.defineProperty(xe, "DatabaseError", { enumerable: true, get: a(function() {
      return Nc.DatabaseError;
    }, "get") });
    var Wc = Ws();
    Object.defineProperty(xe, "serialize", {
      enumerable: true,
      get: a(function() {
        return Wc.serialize;
      }, "get")
    });
    var jc = Gs();
    function Hc(r, e) {
      let t = new jc.Parser;
      return r.on("data", (n) => t.parse(n, e)), new Promise((n) => r.on("end", () => n()));
    }
    a(Hc, "parse");
    xe.parse = Hc;
  });
  Vs = {};
  ie(Vs, { connect: () => $c });
  zs = G(() => {
    p();
    a($c, "connect");
  });
  En = T((Xh, Zs) => {
    p();
    var Ks = (Fe(), O(wi)), Gc = ge().EventEmitter, { parse: Vc, serialize: Q } = vn(), Ys = Q.flush(), zc = Q.sync(), Kc = Q.end(), Sn = class Sn2 extends Gc {
      constructor(e) {
        super(), e = e || {}, this.stream = e.stream || new Ks.Socket, this._keepAlive = e.keepAlive, this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis, this.lastBuffer = false, this.parsedStatements = {}, this.ssl = e.ssl || false, this._ending = false, this._emitMessage = false;
        var t = this;
        this.on("newListener", function(n) {
          n === "message" && (t._emitMessage = true);
        });
      }
      connect(e, t) {
        var n = this;
        this._connecting = true, this.stream.setNoDelay(true), this.stream.connect(e, t), this.stream.once("connect", function() {
          n._keepAlive && n.stream.setKeepAlive(true, n._keepAliveInitialDelayMillis), n.emit("connect");
        });
        let i = a(function(s) {
          n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE") || n.emit("error", s);
        }, "reportStreamError");
        if (this.stream.on("error", i), this.stream.on("close", function() {
          n.emit("end");
        }), !this.ssl)
          return this.attachListeners(this.stream);
        this.stream.once("data", function(s) {
          var o = s.toString("utf8");
          switch (o) {
            case "S":
              break;
            case "N":
              return n.stream.end(), n.emit("error", new Error("The server does not support SSL connections"));
            default:
              return n.stream.end(), n.emit("error", new Error("There was an error establishing an SSL connection"));
          }
          var u = (zs(), O(Vs));
          let c = { socket: n.stream };
          n.ssl !== true && (Object.assign(c, n.ssl), ("key" in n.ssl) && (c.key = n.ssl.key)), Ks.isIP(t) === 0 && (c.servername = t);
          try {
            n.stream = u.connect(c);
          } catch (l) {
            return n.emit("error", l);
          }
          n.attachListeners(n.stream), n.stream.on("error", i), n.emit("sslconnect");
        });
      }
      attachListeners(e) {
        e.on("end", () => {
          this.emit("end");
        }), Vc(e, (t) => {
          var n = t.name === "error" ? "errorMessage" : t.name;
          this._emitMessage && this.emit("message", t), this.emit(n, t);
        });
      }
      requestSsl() {
        this.stream.write(Q.requestSsl());
      }
      startup(e) {
        this.stream.write(Q.startup(e));
      }
      cancel(e, t) {
        this._send(Q.cancel(e, t));
      }
      password(e) {
        this._send(Q.password(e));
      }
      sendSASLInitialResponseMessage(e, t) {
        this._send(Q.sendSASLInitialResponseMessage(e, t));
      }
      sendSCRAMClientFinalMessage(e) {
        this._send(Q.sendSCRAMClientFinalMessage(e));
      }
      _send(e) {
        return this.stream.writable ? this.stream.write(e) : false;
      }
      query(e) {
        this._send(Q.query(e));
      }
      parse(e) {
        this._send(Q.parse(e));
      }
      bind(e) {
        this._send(Q.bind(e));
      }
      execute(e) {
        this._send(Q.execute(e));
      }
      flush() {
        this.stream.writable && this.stream.write(Ys);
      }
      sync() {
        this._ending = true, this._send(Ys), this._send(zc);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        if (this._ending = true, !this._connecting || !this.stream.writable) {
          this.stream.end();
          return;
        }
        return this.stream.write(Kc, () => {
          this.stream.end();
        });
      }
      close(e) {
        this._send(Q.close(e));
      }
      describe(e) {
        this._send(Q.describe(e));
      }
      sendCopyFromChunk(e) {
        this._send(Q.copyData(e));
      }
      endCopyFrom() {
        this._send(Q.copyDone());
      }
      sendCopyFail(e) {
        this._send(Q.copyFail(e));
      }
    };
    a(Sn, "Connection");
    var xn = Sn;
    Zs.exports = xn;
  });
  eo = T((np, Xs) => {
    p();
    var Yc = ge().EventEmitter, rp = (it(), O(nt)), Zc = rt(), An = ds(), Jc = Cs(), Xc = At(), el = Bt(), Js = qs(), tl = tt(), rl = En(), Cn = class Cn2 extends Yc {
      constructor(e) {
        super(), this.connectionParameters = new el(e), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }), this.replication = this.connectionParameters.replication;
        var t = e || {};
        this._Promise = t.Promise || b.Promise, this._types = new Xc(t.types), this._ending = false, this._connecting = false, this._connected = false, this._connectionError = false, this._queryable = true, this.connection = t.connection || new rl({ stream: t.stream, ssl: this.connectionParameters.ssl, keepAlive: t.keepAlive || false, keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this.queryQueue = [], this.binary = t.binary || tl.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || false, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0;
      }
      _errorAllQueries(e) {
        let t = a((n) => {
          m.nextTick(() => {
            n.handleError(e, this.connection);
          });
        }, "enqueueError");
        this.activeQuery && (t(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(t), this.queryQueue.length = 0;
      }
      _connect(e) {
        var t = this, n = this.connection;
        if (this._connectionCallback = e, this._connecting || this._connected) {
          let i = new Error("Client has already been connected. You cannot reuse a client.");
          m.nextTick(() => {
            e(i);
          });
          return;
        }
        this._connecting = true, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
          n._ending = true, n.stream.destroy(new Error("timeout expired"));
        }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
          t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
        }), n.on("sslconnect", function() {
          n.startup(t.getStartupConf());
        }), this._attachListeners(n), n.once("end", () => {
          let i = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
          clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(i), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i) : this._connectionError || this._handleErrorEvent(i)), m.nextTick(() => {
            this.emit("end");
          });
        });
      }
      connect(e) {
        if (e) {
          this._connect(e);
          return;
        }
        return new this._Promise((t, n) => {
          this._connect((i) => {
            i ? n(i) : t();
          });
        });
      }
      _attachListeners(e) {
        e.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), e.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), e.on("authenticationSASL", this._handleAuthSASL.bind(this)), e.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), e.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), e.on("backendKeyData", this._handleBackendKeyData.bind(this)), e.on("error", this._handleErrorEvent.bind(this)), e.on("errorMessage", this._handleErrorMessage.bind(this)), e.on("readyForQuery", this._handleReadyForQuery.bind(this)), e.on("notice", this._handleNotice.bind(this)), e.on("rowDescription", this._handleRowDescription.bind(this)), e.on("dataRow", this._handleDataRow.bind(this)), e.on("portalSuspended", this._handlePortalSuspended.bind(this)), e.on("emptyQuery", this._handleEmptyQuery.bind(this)), e.on("commandComplete", this._handleCommandComplete.bind(this)), e.on("parseComplete", this._handleParseComplete.bind(this)), e.on("copyInResponse", this._handleCopyInResponse.bind(this)), e.on("copyData", this._handleCopyData.bind(this)), e.on("notification", this._handleNotification.bind(this));
      }
      _checkPgPass(e) {
        let t = this.connection;
        typeof this.password == "function" ? this._Promise.resolve().then(() => this.password()).then((n) => {
          if (n !== undefined) {
            if (typeof n != "string") {
              t.emit("error", new TypeError("Password must be a string"));
              return;
            }
            this.connectionParameters.password = this.password = n;
          } else
            this.connectionParameters.password = this.password = null;
          e();
        }).catch((n) => {
          t.emit("error", n);
        }) : this.password !== null ? e() : Jc(this.connectionParameters, (n) => {
          n !== undefined && (this.connectionParameters.password = this.password = n), e();
        });
      }
      _handleAuthCleartextPassword(e) {
        this._checkPgPass(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(e) {
        this._checkPgPass(() => {
          let t = Zc.postgresMd5PasswordHash(this.user, this.password, e.salt);
          this.connection.password(t);
        });
      }
      _handleAuthSASL(e) {
        this._checkPgPass(() => {
          this.saslSession = An.startSession(e.mechanisms), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
        });
      }
      _handleAuthSASLContinue(e) {
        An.continueSession(this.saslSession, this.password, e.data), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
      }
      _handleAuthSASLFinal(e) {
        An.finalizeSession(this.saslSession, e.data), this.saslSession = null;
      }
      _handleBackendKeyData(e) {
        this.processID = e.processID, this.secretKey = e.secretKey;
      }
      _handleReadyForQuery(e) {
        this._connecting && (this._connecting = false, this._connected = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
        let { activeQuery: t } = this;
        this.activeQuery = null, this.readyForQuery = true, t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
      }
      _handleErrorWhileConnecting(e) {
        if (!this._connectionError) {
          if (this._connectionError = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback)
            return this._connectionCallback(e);
          this.emit("error", e);
        }
      }
      _handleErrorEvent(e) {
        if (this._connecting)
          return this._handleErrorWhileConnecting(e);
        this._queryable = false, this._errorAllQueries(e), this.emit("error", e);
      }
      _handleErrorMessage(e) {
        if (this._connecting)
          return this._handleErrorWhileConnecting(e);
        let t = this.activeQuery;
        if (!t) {
          this._handleErrorEvent(e);
          return;
        }
        this.activeQuery = null, t.handleError(e, this.connection);
      }
      _handleRowDescription(e) {
        this.activeQuery.handleRowDescription(e);
      }
      _handleDataRow(e) {
        this.activeQuery.handleDataRow(e);
      }
      _handlePortalSuspended(e) {
        this.activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(e) {
        this.activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(e) {
        this.activeQuery.handleCommandComplete(e, this.connection);
      }
      _handleParseComplete(e) {
        this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
      }
      _handleCopyInResponse(e) {
        this.activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(e) {
        this.activeQuery.handleCopyData(e, this.connection);
      }
      _handleNotification(e) {
        this.emit("notification", e);
      }
      _handleNotice(e) {
        this.emit("notice", e);
      }
      getStartupConf() {
        var e = this.connectionParameters, t = { user: e.user, database: e.database }, n = e.application_name || e.fallback_application_name;
        return n && (t.application_name = n), e.replication && (t.replication = "" + e.replication), e.statement_timeout && (t.statement_timeout = String(parseInt(e.statement_timeout, 10))), e.lock_timeout && (t.lock_timeout = String(parseInt(e.lock_timeout, 10))), e.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(e.idle_in_transaction_session_timeout, 10))), e.options && (t.options = e.options), t;
      }
      cancel(e, t) {
        if (e.activeQuery === t) {
          var n = this.connection;
          this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
            n.cancel(e.processID, e.secretKey);
          });
        } else
          e.queryQueue.indexOf(t) !== -1 && e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
      }
      setTypeParser(e, t, n) {
        return this._types.setTypeParser(e, t, n);
      }
      getTypeParser(e, t) {
        return this._types.getTypeParser(e, t);
      }
      escapeIdentifier(e) {
        return '"' + e.replace(/"/g, '""') + '"';
      }
      escapeLiteral(e) {
        for (var t = false, n = "'", i = 0;i < e.length; i++) {
          var s = e[i];
          s === "'" ? n += s + s : s === "\\" ? (n += s + s, t = true) : n += s;
        }
        return n += "'", t === true && (n = " E" + n), n;
      }
      _pulseQueryQueue() {
        if (this.readyForQuery === true)
          if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
            this.readyForQuery = false, this.hasExecuted = true;
            let e = this.activeQuery.submit(this.connection);
            e && m.nextTick(() => {
              this.activeQuery.handleError(e, this.connection), this.readyForQuery = true, this._pulseQueryQueue();
            });
          } else
            this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
      }
      query(e, t, n) {
        var i, s, o, u, c;
        if (e == null)
          throw new TypeError("Client was passed a null or undefined query");
        return typeof e.submit == "function" ? (o = e.query_timeout || this.connectionParameters.query_timeout, s = i = e, typeof t == "function" && (i.callback = i.callback || t)) : (o = this.connectionParameters.query_timeout, i = new Js(e, t, n), i.callback || (s = new this._Promise((l, f) => {
          i.callback = (y, g) => y ? f(y) : l(g);
        }))), o && (c = i.callback, u = setTimeout(() => {
          var l = new Error("Query read timeout");
          m.nextTick(() => {
            i.handleError(l, this.connection);
          }), c(l), i.callback = () => {};
          var f = this.queryQueue.indexOf(i);
          f > -1 && this.queryQueue.splice(f, 1), this._pulseQueryQueue();
        }, o), i.callback = (l, f) => {
          clearTimeout(u), c(l, f);
        }), this.binary && !i.binary && (i.binary = true), i._result && !i._result._types && (i._result._types = this._types), this._queryable ? this._ending ? (m.nextTick(() => {
          i.handleError(new Error("Client was closed and is not queryable"), this.connection);
        }), s) : (this.queryQueue.push(i), this._pulseQueryQueue(), s) : (m.nextTick(() => {
          i.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
        }), s);
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      end(e) {
        if (this._ending = true, !this.connection._connecting)
          if (e)
            e();
          else
            return this._Promise.resolve();
        if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e)
          this.connection.once("end", e);
        else
          return new this._Promise((t) => {
            this.connection.once("end", t);
          });
      }
    };
    a(Cn, "Client");
    var Ut = Cn;
    Ut.Query = Js;
    Xs.exports = Ut;
  });
  io = T((op, no) => {
    p();
    var nl = ge().EventEmitter, to = a(function() {}, "NOOP"), ro = a((r, e) => {
      let t = r.findIndex(e);
      return t === -1 ? undefined : r.splice(t, 1)[0];
    }, "removeWhere"), Tn = class Tn2 {
      constructor(e, t, n) {
        this.client = e, this.idleListener = t, this.timeoutId = n;
      }
    };
    a(Tn, "IdleItem");
    var _n = Tn, Pn = class Pn2 {
      constructor(e) {
        this.callback = e;
      }
    };
    a(Pn, "PendingItem");
    var Qe = Pn;
    function il() {
      throw new Error("Release called on client which has already been released to the pool.");
    }
    a(il, "throwOnDoubleRelease");
    function Dt(r, e) {
      if (e)
        return { callback: e, result: undefined };
      let t, n, i = a(function(o, u) {
        o ? t(o) : n(u);
      }, "cb"), s = new r(function(o, u) {
        n = o, t = u;
      }).catch((o) => {
        throw Error.captureStackTrace(o), o;
      });
      return { callback: i, result: s };
    }
    a(Dt, "promisify");
    function sl(r, e) {
      return a(function t(n) {
        n.client = e, e.removeListener("error", t), e.on("error", () => {
          r.log("additional client error after disconnection due to error", n);
        }), r._remove(e), r.emit("error", n, e);
      }, "idleListener");
    }
    a(sl, "makeIdleListener");
    var Bn = class Bn2 extends nl {
      constructor(e, t) {
        super(), this.options = Object.assign({}, e), e != null && "password" in e && Object.defineProperty(this.options, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: e.password
        }), e != null && e.ssl && e.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: false }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.min = this.options.min || 0, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || false, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {}, this.Client = this.options.Client || t || ot().Client, this.Promise = this.options.Promise || b.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = new WeakSet, this._pendingQueue = [], this._endCallback = undefined, this.ending = false, this.ended = false;
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _isAboveMin() {
        return this._clients.length > this.options.min;
      }
      _pulseQueue() {
        if (this.log("pulse queue"), this.ended) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((t) => {
            this._remove(t.client);
          }), this._clients.length || (this.ended = true, this._endCallback());
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull())
          return;
        let e = this._pendingQueue.shift();
        if (this._idle.length) {
          let t = this._idle.pop();
          clearTimeout(t.timeoutId);
          let n = t.client;
          n.ref && n.ref();
          let i = t.idleListener;
          return this._acquireClient(n, e, i, false);
        }
        if (!this._isFull())
          return this.newClient(e);
        throw new Error("unexpected condition");
      }
      _remove(e) {
        let t = ro(this._idle, (n) => n.client === e);
        t !== undefined && clearTimeout(t.timeoutId), this._clients = this._clients.filter((n) => n !== e), e.end(), this.emit("remove", e);
      }
      connect(e) {
        if (this.ending) {
          let i = new Error("Cannot use a pool after calling end on the pool");
          return e ? e(i) : this.Promise.reject(i);
        }
        let t = Dt(this.Promise, e), n = t.result;
        if (this._isFull() || this._idle.length) {
          if (this._idle.length && m.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis)
            return this._pendingQueue.push(new Qe(t.callback)), n;
          let i = a((u, c, l) => {
            clearTimeout(o), t.callback(u, c, l);
          }, "queueCallback"), s = new Qe(i), o = setTimeout(() => {
            ro(this._pendingQueue, (u) => u.callback === i), s.timedOut = true, t.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
          return o.unref && o.unref(), this._pendingQueue.push(s), n;
        }
        return this.newClient(new Qe(t.callback)), n;
      }
      newClient(e) {
        let t = new this.Client(this.options);
        this._clients.push(t);
        let n = sl(this, t);
        this.log("checking client timeout");
        let i, s = false;
        this.options.connectionTimeoutMillis && (i = setTimeout(() => {
          this.log("ending client due to timeout"), s = true, t.connection ? t.connection.stream.destroy() : t.end();
        }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), t.connect((o) => {
          if (i && clearTimeout(i), t.on("error", n), o)
            this.log("client failed to connect", o), this._clients = this._clients.filter((u) => u !== t), s && (o = new Error("Connection terminated due to connection timeout", { cause: o })), this._pulseQueue(), e.timedOut || e.callback(o, undefined, to);
          else {
            if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
              let u = setTimeout(() => {
                this.log("ending client due to expired lifetime"), this._expired.add(t), this._idle.findIndex((l) => l.client === t) !== -1 && this._acquireClient(t, new Qe((l, f, y) => y()), n, false);
              }, this.options.maxLifetimeSeconds * 1000);
              u.unref(), t.once("end", () => clearTimeout(u));
            }
            return this._acquireClient(t, e, n, true);
          }
        });
      }
      _acquireClient(e, t, n, i) {
        i && this.emit("connect", e), this.emit("acquire", e), e.release = this._releaseOnce(e, n), e.removeListener("error", n), t.timedOut ? i && this.options.verify ? this.options.verify(e, e.release) : e.release() : i && this.options.verify ? this.options.verify(e, (s) => {
          if (s)
            return e.release(s), t.callback(s, undefined, to);
          t.callback(undefined, e, e.release);
        }) : t.callback(undefined, e, e.release);
      }
      _releaseOnce(e, t) {
        let n = false;
        return (i) => {
          n && il(), n = true, this._release(e, t, i);
        };
      }
      _release(e, t, n) {
        if (e.on("error", t), e._poolUseCount = (e._poolUseCount || 0) + 1, this.emit("release", n, e), n || this.ending || !e._queryable || e._ending || e._poolUseCount >= this.options.maxUses) {
          e._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(e), this._pulseQueue();
          return;
        }
        if (this._expired.has(e)) {
          this.log("remove expired client"), this._expired.delete(e), this._remove(e), this._pulseQueue();
          return;
        }
        let s;
        this.options.idleTimeoutMillis && this._isAboveMin() && (s = setTimeout(() => {
          this.log("remove idle client"), this._remove(e);
        }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && s.unref()), this.options.allowExitOnIdle && e.unref(), this._idle.push(new _n(e, t, s)), this._pulseQueue();
      }
      query(e, t, n) {
        if (typeof e == "function") {
          let s = Dt(this.Promise, e);
          return v(function() {
            return s.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
          }), s.result;
        }
        typeof t == "function" && (n = t, t = undefined);
        let i = Dt(this.Promise, n);
        return n = i.callback, this.connect((s, o) => {
          if (s)
            return n(s);
          let u = false, c = a((l) => {
            u || (u = true, o.release(l), n(l));
          }, "onError");
          o.once("error", c), this.log("dispatching query");
          try {
            o.query(e, t, (l, f) => {
              if (this.log("query dispatched"), o.removeListener("error", c), !u)
                return u = true, o.release(l), l ? n(l) : n(undefined, f);
            });
          } catch (l) {
            return o.release(l), n(l);
          }
        }), i.result;
      }
      end(e) {
        if (this.log("ending"), this.ending) {
          let n = new Error("Called end on pool more than once");
          return e ? e(n) : this.Promise.reject(n);
        }
        this.ending = true;
        let t = Dt(this.Promise, e);
        return this._endCallback = t.callback, this._pulseQueue(), t.result;
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce((e, t) => e + (this._expired.has(t) ? 1 : 0), 0);
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    a(Bn, "Pool");
    var In = Bn;
    no.exports = In;
  });
  so = {};
  ie(so, { default: () => ol });
  oo = G(() => {
    p();
    ol = {};
  });
  ao = T((lp, al) => {
    al.exports = { name: "pg", version: "8.8.0", description: "PostgreSQL client - pure javascript & libpq with the same API", keywords: [
      "database",
      "libpq",
      "pg",
      "postgre",
      "postgres",
      "postgresql",
      "rdbms"
    ], homepage: "https://github.com/brianc/node-postgres", repository: { type: "git", url: "git://github.com/brianc/node-postgres.git", directory: "packages/pg" }, author: "Brian Carlson <brian.m.carlson@gmail.com>", main: "./lib", dependencies: { "buffer-writer": "2.0.0", "packet-reader": "1.0.0", "pg-connection-string": "^2.5.0", "pg-pool": "^3.5.2", "pg-protocol": "^1.5.0", "pg-types": "^2.1.0", pgpass: "1.x" }, devDependencies: {
      async: "2.6.4",
      bluebird: "3.5.2",
      co: "4.6.0",
      "pg-copy-streams": "0.3.0"
    }, peerDependencies: { "pg-native": ">=3.0.1" }, peerDependenciesMeta: { "pg-native": { optional: true } }, scripts: { test: "make test-all" }, files: ["lib", "SPONSORS.md"], license: "MIT", engines: { node: ">= 8.0.0" }, gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655" };
  });
  lo = T((fp, co) => {
    p();
    var uo = ge().EventEmitter, ul = (it(), O(nt)), Rn = rt(), Ne = co.exports = function(r, e, t) {
      uo.call(this), r = Rn.normalizeQueryConfig(r, e, t), this.text = r.text, this.values = r.values, this.name = r.name, this.callback = r.callback, this.state = "new", this._arrayMode = r.rowMode === "array", this._emitRowEvents = false, this.on("newListener", function(n) {
        n === "row" && (this._emitRowEvents = true);
      }.bind(this));
    };
    ul.inherits(Ne, uo);
    var cl = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
    Ne.prototype.handleError = function(r) {
      var e = this.native.pq.resultErrorFields();
      if (e)
        for (var t in e) {
          var n = cl[t] || t;
          r[n] = e[t];
        }
      this.callback ? this.callback(r) : this.emit("error", r), this.state = "error";
    };
    Ne.prototype.then = function(r, e) {
      return this._getPromise().then(r, e);
    };
    Ne.prototype.catch = function(r) {
      return this._getPromise().catch(r);
    };
    Ne.prototype._getPromise = function() {
      return this._promise ? this._promise : (this._promise = new Promise(function(r, e) {
        this._once("end", r), this._once("error", e);
      }.bind(this)), this._promise);
    };
    Ne.prototype.submit = function(r) {
      this.state = "running";
      var e = this;
      this.native = r.native, r.native.arrayMode = this._arrayMode;
      var t = a(function(s, o, u) {
        if (r.native.arrayMode = false, v(function() {
          e.emit("_done");
        }), s)
          return e.handleError(s);
        e._emitRowEvents && (u.length > 1 ? o.forEach((c, l) => {
          c.forEach((f) => {
            e.emit("row", f, u[l]);
          });
        }) : o.forEach(function(c) {
          e.emit("row", c, u);
        })), e.state = "end", e.emit("end", u), e.callback && e.callback(null, u);
      }, "after");
      if (m.domain && (t = m.domain.bind(t)), this.name) {
        this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
        var n = (this.values || []).map(Rn.prepareValue);
        if (r.namedQueries[this.name]) {
          if (this.text && r.namedQueries[this.name] !== this.text) {
            let s = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
            return t(s);
          }
          return r.native.execute(this.name, n, t);
        }
        return r.native.prepare(this.name, this.text, n.length, function(s) {
          return s ? t(s) : (r.namedQueries[e.name] = e.text, e.native.execute(e.name, n, t));
        });
      } else if (this.values) {
        if (!Array.isArray(this.values)) {
          let s = new Error("Query values must be an array");
          return t(s);
        }
        var i = this.values.map(Rn.prepareValue);
        r.native.query(this.text, i, t);
      } else
        r.native.query(this.text, t);
    };
  });
  yo = T((yp, po) => {
    p();
    var ll = (oo(), O(so)), fl = At(), dp = ao(), fo = ge().EventEmitter, hl = (it(), O(nt)), pl = Bt(), ho = lo(), K = po.exports = function(r) {
      fo.call(this), r = r || {}, this._Promise = r.Promise || b.Promise, this._types = new fl(r.types), this.native = new ll({ types: this._types }), this._queryQueue = [], this._ending = false, this._connecting = false, this._connected = false, this._queryable = true;
      var e = this.connectionParameters = new pl(r);
      this.user = e.user, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: e.password }), this.database = e.database, this.host = e.host, this.port = e.port, this.namedQueries = {};
    };
    K.Query = ho;
    hl.inherits(K, fo);
    K.prototype._errorAllQueries = function(r) {
      let e = a((t) => {
        m.nextTick(() => {
          t.native = this.native, t.handleError(r);
        });
      }, "enqueueError");
      this._hasActiveQuery() && (e(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(e), this._queryQueue.length = 0;
    };
    K.prototype._connect = function(r) {
      var e = this;
      if (this._connecting) {
        m.nextTick(() => r(new Error("Client has already been connected. You cannot reuse a client.")));
        return;
      }
      this._connecting = true, this.connectionParameters.getLibpqConnectionString(function(t, n) {
        if (t)
          return r(t);
        e.native.connect(n, function(i) {
          if (i)
            return e.native.end(), r(i);
          e._connected = true, e.native.on("error", function(s) {
            e._queryable = false, e._errorAllQueries(s), e.emit("error", s);
          }), e.native.on("notification", function(s) {
            e.emit("notification", { channel: s.relname, payload: s.extra });
          }), e.emit("connect"), e._pulseQueryQueue(true), r();
        });
      });
    };
    K.prototype.connect = function(r) {
      if (r) {
        this._connect(r);
        return;
      }
      return new this._Promise((e, t) => {
        this._connect((n) => {
          n ? t(n) : e();
        });
      });
    };
    K.prototype.query = function(r, e, t) {
      var n, i, s, o, u;
      if (r == null)
        throw new TypeError("Client was passed a null or undefined query");
      if (typeof r.submit == "function")
        s = r.query_timeout || this.connectionParameters.query_timeout, i = n = r, typeof e == "function" && (r.callback = e);
      else if (s = this.connectionParameters.query_timeout, n = new ho(r, e, t), !n.callback) {
        let c, l;
        i = new this._Promise((f, y) => {
          c = f, l = y;
        }), n.callback = (f, y) => f ? l(f) : c(y);
      }
      return s && (u = n.callback, o = setTimeout(() => {
        var c = new Error("Query read timeout");
        m.nextTick(() => {
          n.handleError(c, this.connection);
        }), u(c), n.callback = () => {};
        var l = this._queryQueue.indexOf(n);
        l > -1 && this._queryQueue.splice(l, 1), this._pulseQueryQueue();
      }, s), n.callback = (c, l) => {
        clearTimeout(o), u(c, l);
      }), this._queryable ? this._ending ? (n.native = this.native, m.nextTick(() => {
        n.handleError(new Error("Client was closed and is not queryable"));
      }), i) : (this._queryQueue.push(n), this._pulseQueryQueue(), i) : (n.native = this.native, m.nextTick(() => {
        n.handleError(new Error("Client has encountered a connection error and is not queryable"));
      }), i);
    };
    K.prototype.end = function(r) {
      var e = this;
      this._ending = true, this._connected || this.once("connect", this.end.bind(this, r));
      var t;
      return r || (t = new this._Promise(function(n, i) {
        r = a((s) => s ? i(s) : n(), "cb");
      })), this.native.end(function() {
        e._errorAllQueries(new Error("Connection terminated")), m.nextTick(() => {
          e.emit("end"), r && r();
        });
      }), t;
    };
    K.prototype._hasActiveQuery = function() {
      return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
    };
    K.prototype._pulseQueryQueue = function(r) {
      if (this._connected && !this._hasActiveQuery()) {
        var e = this._queryQueue.shift();
        if (!e) {
          r || this.emit("drain");
          return;
        }
        this._activeQuery = e, e.submit(this);
        var t = this;
        e.once("_done", function() {
          t._pulseQueryQueue();
        });
      }
    };
    K.prototype.cancel = function(r) {
      this._activeQuery === r ? this.native.cancel(function() {}) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
    };
    K.prototype.ref = function() {};
    K.prototype.unref = function() {};
    K.prototype.setTypeParser = function(r, e, t) {
      return this._types.setTypeParser(r, e, t);
    };
    K.prototype.getTypeParser = function(r, e) {
      return this._types.getTypeParser(r, e);
    };
  });
  Ln = T((gp, mo) => {
    p();
    mo.exports = yo();
  });
  ot = T((vp, at) => {
    p();
    var dl = eo(), yl = tt(), ml = En(), wl = io(), { DatabaseError: gl } = vn(), bl = a((r) => {
      var e;
      return e = class extends wl {
        constructor(n) {
          super(n, r);
        }
      }, a(e, "BoundPool"), e;
    }, "poolFactory"), Fn = a(function(r) {
      this.defaults = yl, this.Client = r, this.Query = this.Client.Query, this.Pool = bl(this.Client), this._pools = [], this.Connection = ml, this.types = Je(), this.DatabaseError = gl;
    }, "PG");
    typeof m.env.NODE_PG_FORCE_NATIVE < "u" ? at.exports = new Fn(Ln()) : (at.exports = new Fn(dl), Object.defineProperty(at.exports, "native", {
      configurable: true,
      enumerable: false,
      get() {
        var r = null;
        try {
          r = new Fn(Ln());
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND")
            throw e;
        }
        return Object.defineProperty(at.exports, "native", { value: r }), r;
      }
    }));
  });
  p();
  p();
  Fe();
  Zt();
  p();
  pa = Object.defineProperty;
  da = Object.defineProperties;
  ya = Object.getOwnPropertyDescriptors;
  bi = Object.getOwnPropertySymbols;
  ma = Object.prototype.hasOwnProperty;
  wa = Object.prototype.propertyIsEnumerable;
  vi = a((r, e, t) => (e in r) ? pa(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, "__defNormalProp");
  ga = a((r, e) => {
    for (var t in e || (e = {}))
      ma.call(e, t) && vi(r, t, e[t]);
    if (bi)
      for (var t of bi(e))
        wa.call(e, t) && vi(r, t, e[t]);
    return r;
  }, "__spreadValues");
  ba = a((r, e) => da(r, ya(e)), "__spreadProps");
  xi = new Uint8Array(new Uint16Array([258]).buffer)[0] === 2;
  xa = new TextDecoder;
  Jt = new TextEncoder;
  yt = Jt.encode("0123456789abcdef");
  mt = Jt.encode("0123456789ABCDEF");
  Sa = Jt.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  Si = Sa.slice();
  Si[62] = 45;
  Si[63] = 95;
  a(Ea, "_toHex");
  a(Aa, "_toHexChunked");
  a(Ei, "toHex");
  p();
  a(gt, "SqlTemplate");
  $e = gt;
  a(Xt, "UnsafeRawSql");
  Ge = Xt;
  p();
  a(bt, "warnIfBrowser");
  Fe();
  as = Se(At());
  us = Se(rt());
  _t = class _t2 extends Error {
    constructor(t) {
      super(t);
      E(this, "name", "NeonDbError");
      E(this, "severity");
      E(this, "code");
      E(this, "detail");
      E(this, "hint");
      E(this, "position");
      E(this, "internalPosition");
      E(this, "internalQuery");
      E(this, "where");
      E(this, "schema");
      E(this, "table");
      E(this, "column");
      E(this, "dataType");
      E(this, "constraint");
      E(this, "file");
      E(this, "line");
      E(this, "routine");
      E(this, "sourceError");
      "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, _t2);
    }
  };
  a(_t, "NeonDbError");
  be = _t;
  Ru = ["severity", "code", "detail", "hint", "position", "internalPosition", "internalQuery", "where", "schema", "table", "column", "dataType", "constraint", "file", "line", "routine"];
  a(Lu, "encodeBuffersAsBytea");
  a(ss, "prepareQuery");
  a(cs, "neon");
  a(dr, "NeonQueryPromise");
  Ce = dr;
  a(os, "processQueryResult");
  a(Fu, "getAuthToken");
  p();
  go = Se(ot());
  p();
  wo = Se(ot());
  kn = class kn2 extends wo.Client {
    constructor(t) {
      super(t);
      this.config = t;
    }
    get neonConfig() {
      return this.connection.stream;
    }
    connect(t) {
      let { neonConfig: n } = this;
      n.forceDisablePgSSL && (this.ssl = this.connection.ssl = false), this.ssl && n.useSecureWebSocket && console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");
      let i = typeof this.config != "string" && this.config?.host !== undefined || typeof this.config != "string" && this.config?.connectionString !== undefined || m.env.PGHOST !== undefined, s = m.env.USER ?? m.env.USERNAME;
      if (!i && this.host === "localhost" && this.user === s && this.database === s && this.password === null)
        throw new Error(`No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`);
      let o = super.connect(t), u = n.pipelineTLS && this.ssl, c = n.pipelineConnect === "password";
      if (!u && !n.pipelineConnect)
        return o;
      let l = this.connection;
      if (u && l.on("connect", () => l.stream.emit("data", "S")), c) {
        l.removeAllListeners("authenticationCleartextPassword"), l.removeAllListeners("readyForQuery"), l.once("readyForQuery", () => l.on("readyForQuery", this._handleReadyForQuery.bind(this)));
        let f = this.ssl ? "sslconnect" : "connect";
        l.on(f, () => {
          this.neonConfig.disableWarningInBrowsers || bt(), this._handleAuthCleartextPassword(), this._handleReadyForQuery();
        });
      }
      return o;
    }
    async _handleAuthSASLContinue(t) {
      if (typeof crypto > "u" || crypto.subtle === undefined || crypto.subtle.importKey === undefined)
        throw new Error("Cannot use SASL auth when `crypto.subtle` is not defined");
      let n = crypto.subtle, i = this.saslSession, s = this.password, o = t.data;
      if (i.message !== "SASLInitialResponse" || typeof s != "string" || typeof o != "string")
        throw new Error("SASL: protocol error");
      let u = Object.fromEntries(o.split(",").map((M) => {
        if (!/^.=/.test(M))
          throw new Error("SASL: Invalid attribute pair entry");
        let $ = M[0], me = M.substring(2);
        return [$, me];
      })), c = u.r, l = u.s, f = u.i;
      if (!c || !/^[!-+--~]+$/.test(c))
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");
      if (!l || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(l))
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");
      if (!f || !/^[1-9][0-9]*$/.test(f))
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");
      if (!c.startsWith(i.clientNonce))
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
      if (c.length === i.clientNonce.length)
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
      let y = parseInt(f, 10), g = d.from(l, "base64"), A = new TextEncoder, C = A.encode(s), D = await n.importKey("raw", C, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), Y = new Uint8Array(await n.sign("HMAC", D, d.concat([g, d.from([0, 0, 0, 1])]))), P = Y;
      for (var I = 0;I < y - 1; I++)
        Y = new Uint8Array(await n.sign("HMAC", D, Y)), P = d.from(P.map((M, $) => P[$] ^ Y[$]));
      let w = P, Z = await n.importKey("raw", w, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), W = new Uint8Array(await n.sign("HMAC", Z, A.encode("Client Key"))), J = await n.digest("SHA-256", W), X = "n=*,r=" + i.clientNonce, se = "r=" + c + ",s=" + l + ",i=" + y, oe = "c=biws,r=" + c, R = X + "," + se + "," + oe, j = await n.importKey("raw", J, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      var le = new Uint8Array(await n.sign("HMAC", j, A.encode(R))), de = d.from(W.map((M, $) => W[$] ^ le[$])), We = de.toString("base64");
      let fe = await n.importKey("raw", w, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), _e = await n.sign("HMAC", fe, A.encode("Server Key")), ye = await n.importKey("raw", _e, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      var ee = d.from(await n.sign("HMAC", ye, A.encode(R)));
      i.message = "SASLResponse", i.serverSignature = ee.toString("base64"), i.response = oe + ",p=" + We, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
    }
  };
  a(kn, "NeonClient");
  ut = kn;
  Fe();
  bo = Se(Bt());
  a(vl, "promisify");
  Un = class Un2 extends go.Pool {
    constructor() {
      super(...arguments);
      E(this, "Client", ut);
      E(this, "hasFetchUnsupportedListeners", false);
      E(this, "addListener", this.on);
    }
    on(t, n) {
      return t !== "error" && (this.hasFetchUnsupportedListeners = true), super.on(t, n);
    }
    query(t, n, i) {
      if (!ce.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof t == "function")
        return super.query(t, n, i);
      typeof n == "function" && (i = n, n = undefined);
      let s = vl(this.Promise, i);
      i = s.callback;
      try {
        let o = new bo.default(this.options), u = encodeURIComponent, c = encodeURI, l = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`, f = typeof t == "string" ? t : t.text, y = n ?? t.values ?? [];
        cs(l, { fullResults: true, arrayMode: t.rowMode === "array" }).query(f, y, { types: t.types ?? this.options?.types }).then((A) => i(undefined, A)).catch((A) => i(A));
      } catch (o) {
        i(o);
      }
      return s.result;
    }
  };
  a(Un, "NeonPool");
  Mn = Un;
  Fe();
  ct = Se(ot());
  export_DatabaseError = ct.DatabaseError;
  export_defaults = ct.defaults;
  export_escapeIdentifier = ct.escapeIdentifier;
  export_escapeLiteral = ct.escapeLiteral;
  export_types = ct.types;
  /*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  */
});

// node_modules/drizzle-orm/entity.js
function is2(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(`Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
var entityKind, hasOwnEntityKind;
var init_entity = __esm(() => {
  entityKind = Symbol.for("drizzle:entityKind");
  hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");
});

// node_modules/drizzle-orm/logger.js
var ConsoleLogWriter, DefaultLogger, NoopLogger;
var init_logger = __esm(() => {
  init_entity();
  ConsoleLogWriter = class ConsoleLogWriter {
    static [entityKind] = "ConsoleLogWriter";
    write(message) {
      console.log(message);
    }
  };
  DefaultLogger = class DefaultLogger {
    static [entityKind] = "DefaultLogger";
    writer;
    constructor(config) {
      this.writer = config?.writer ?? new ConsoleLogWriter;
    }
    logQuery(query, params) {
      const stringifiedParams = params.map((p2) => {
        try {
          return JSON.stringify(p2);
        } catch {
          return String(p2);
        }
      });
      const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
      this.writer.write(`Query: ${query}${paramsStr}`);
    }
  };
  NoopLogger = class NoopLogger {
    static [entityKind] = "NoopLogger";
    logQuery() {}
  };
});

// node_modules/drizzle-orm/query-promise.js
var QueryPromise;
var init_query_promise = __esm(() => {
  init_entity();
  QueryPromise = class QueryPromise {
    static [entityKind] = "QueryPromise";
    [Symbol.toStringTag] = "QueryPromise";
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
    finally(onFinally) {
      return this.then((value) => {
        onFinally?.();
        return value;
      }, (reason) => {
        onFinally?.();
        throw reason;
      });
    }
    then(onFulfilled, onRejected) {
      return this.execute().then(onFulfilled, onRejected);
    }
  };
});

// node_modules/drizzle-orm/column.js
var Column;
var init_column = __esm(() => {
  init_entity();
  Column = class Column {
    constructor(table, config) {
      this.table = table;
      this.config = config;
      this.name = config.name;
      this.keyAsName = config.keyAsName;
      this.notNull = config.notNull;
      this.default = config.default;
      this.defaultFn = config.defaultFn;
      this.onUpdateFn = config.onUpdateFn;
      this.hasDefault = config.hasDefault;
      this.primary = config.primaryKey;
      this.isUnique = config.isUnique;
      this.uniqueName = config.uniqueName;
      this.uniqueType = config.uniqueType;
      this.dataType = config.dataType;
      this.columnType = config.columnType;
      this.generated = config.generated;
      this.generatedIdentity = config.generatedIdentity;
    }
    static [entityKind] = "Column";
    name;
    keyAsName;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = undefined;
    generated = undefined;
    generatedIdentity = undefined;
    config;
    mapFromDriverValue(value) {
      return value;
    }
    mapToDriverValue(value) {
      return value;
    }
    shouldDisableInsert() {
      return this.config.generated !== undefined && this.config.generated.type !== "byDefault";
    }
  };
});

// node_modules/drizzle-orm/column-builder.js
var ColumnBuilder;
var init_column_builder = __esm(() => {
  init_entity();
  ColumnBuilder = class ColumnBuilder {
    static [entityKind] = "ColumnBuilder";
    config;
    constructor(name, dataType, columnType) {
      this.config = {
        name,
        keyAsName: name === "",
        notNull: false,
        default: undefined,
        hasDefault: false,
        primaryKey: false,
        isUnique: false,
        uniqueName: undefined,
        uniqueType: undefined,
        dataType,
        columnType,
        generated: undefined
      };
    }
    $type() {
      return this;
    }
    notNull() {
      this.config.notNull = true;
      return this;
    }
    default(value) {
      this.config.default = value;
      this.config.hasDefault = true;
      return this;
    }
    $defaultFn(fn) {
      this.config.defaultFn = fn;
      this.config.hasDefault = true;
      return this;
    }
    $default = this.$defaultFn;
    $onUpdateFn(fn) {
      this.config.onUpdateFn = fn;
      this.config.hasDefault = true;
      return this;
    }
    $onUpdate = this.$onUpdateFn;
    primaryKey() {
      this.config.primaryKey = true;
      this.config.notNull = true;
      return this;
    }
    setName(name) {
      if (this.config.name !== "")
        return;
      this.config.name = name;
    }
  };
});

// node_modules/drizzle-orm/table.utils.js
var TableName;
var init_table_utils = __esm(() => {
  TableName = Symbol.for("drizzle:Name");
});

// node_modules/drizzle-orm/pg-core/foreign-keys.js
var ForeignKeyBuilder, ForeignKey;
var init_foreign_keys = __esm(() => {
  init_entity();
  init_table_utils();
  ForeignKeyBuilder = class ForeignKeyBuilder {
    static [entityKind] = "PgForeignKeyBuilder";
    reference;
    _onUpdate = "no action";
    _onDelete = "no action";
    constructor(config, actions) {
      this.reference = () => {
        const { name, columns, foreignColumns } = config();
        return { name, columns, foreignTable: foreignColumns[0].table, foreignColumns };
      };
      if (actions) {
        this._onUpdate = actions.onUpdate;
        this._onDelete = actions.onDelete;
      }
    }
    onUpdate(action) {
      this._onUpdate = action === undefined ? "no action" : action;
      return this;
    }
    onDelete(action) {
      this._onDelete = action === undefined ? "no action" : action;
      return this;
    }
    build(table) {
      return new ForeignKey(table, this);
    }
  };
  ForeignKey = class ForeignKey {
    constructor(table, builder) {
      this.table = table;
      this.reference = builder.reference;
      this.onUpdate = builder._onUpdate;
      this.onDelete = builder._onDelete;
    }
    static [entityKind] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
      const { name, columns, foreignColumns } = this.reference();
      const columnNames = columns.map((column) => column.name);
      const foreignColumnNames = foreignColumns.map((column) => column.name);
      const chunks = [
        this.table[TableName],
        ...columnNames,
        foreignColumns[0].table[TableName],
        ...foreignColumnNames
      ];
      return name ?? `${chunks.join("_")}_fk`;
    }
  };
});

// node_modules/drizzle-orm/tracing-utils.js
function iife(fn, ...args) {
  return fn(...args);
}
var init_tracing_utils = () => {};

// node_modules/drizzle-orm/pg-core/unique-constraint.js
function unique(name) {
  return new UniqueOnConstraintBuilder(name);
}
function uniqueKeyName(table, columns) {
  return `${table[TableName]}_${columns.join("_")}_unique`;
}
var UniqueConstraintBuilder, UniqueOnConstraintBuilder, UniqueConstraint;
var init_unique_constraint = __esm(() => {
  init_entity();
  init_table_utils();
  UniqueConstraintBuilder = class UniqueConstraintBuilder {
    constructor(columns, name) {
      this.name = name;
      this.columns = columns;
    }
    static [entityKind] = "PgUniqueConstraintBuilder";
    columns;
    nullsNotDistinctConfig = false;
    nullsNotDistinct() {
      this.nullsNotDistinctConfig = true;
      return this;
    }
    build(table) {
      return new UniqueConstraint(table, this.columns, this.nullsNotDistinctConfig, this.name);
    }
  };
  UniqueOnConstraintBuilder = class UniqueOnConstraintBuilder {
    static [entityKind] = "PgUniqueOnConstraintBuilder";
    name;
    constructor(name) {
      this.name = name;
    }
    on(...columns) {
      return new UniqueConstraintBuilder(columns, this.name);
    }
  };
  UniqueConstraint = class UniqueConstraint {
    constructor(table, columns, nullsNotDistinct, name) {
      this.table = table;
      this.columns = columns;
      this.name = name ?? uniqueKeyName(this.table, this.columns.map((column) => column.name));
      this.nullsNotDistinct = nullsNotDistinct;
    }
    static [entityKind] = "PgUniqueConstraint";
    columns;
    name;
    nullsNotDistinct = false;
    getName() {
      return this.name;
    }
  };
});

// node_modules/drizzle-orm/pg-core/utils/array.js
function parsePgArrayValue(arrayString, startFrom, inQuotes) {
  for (let i = startFrom;i < arrayString.length; i++) {
    const char = arrayString[i];
    if (char === "\\") {
      i++;
      continue;
    }
    if (char === '"') {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i + 1];
    }
    if (inQuotes) {
      continue;
    }
    if (char === "," || char === "}") {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i];
    }
  }
  return [arrayString.slice(startFrom).replace(/\\/g, ""), arrayString.length];
}
function parsePgNestedArray(arrayString, startFrom = 0) {
  const result = [];
  let i = startFrom;
  let lastCharIsComma = false;
  while (i < arrayString.length) {
    const char = arrayString[i];
    if (char === ",") {
      if (lastCharIsComma || i === startFrom) {
        result.push("");
      }
      lastCharIsComma = true;
      i++;
      continue;
    }
    lastCharIsComma = false;
    if (char === "\\") {
      i += 2;
      continue;
    }
    if (char === '"') {
      const [value2, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    if (char === "}") {
      return [result, i + 1];
    }
    if (char === "{") {
      const [value2, startFrom2] = parsePgNestedArray(arrayString, i + 1);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    const [value, newStartFrom] = parsePgArrayValue(arrayString, i, false);
    result.push(value);
    i = newStartFrom;
  }
  return [result, i];
}
function parsePgArray(arrayString) {
  const [result] = parsePgNestedArray(arrayString, 1);
  return result;
}
function makePgArray(array) {
  return `{${array.map((item) => {
    if (Array.isArray(item)) {
      return makePgArray(item);
    }
    if (typeof item === "string") {
      return `"${item.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
    }
    return `${item}`;
  }).join(",")}}`;
}
var init_array = () => {};

// node_modules/drizzle-orm/pg-core/columns/common.js
var PgColumnBuilder, PgColumn, ExtraConfigColumn, PgArrayBuilder, PgArray;
var init_common = __esm(() => {
  init_column_builder();
  init_column();
  init_entity();
  init_foreign_keys();
  init_tracing_utils();
  init_unique_constraint();
  init_array();
  PgColumnBuilder = class PgColumnBuilder extends ColumnBuilder {
    foreignKeyConfigs = [];
    static [entityKind] = "PgColumnBuilder";
    array(size) {
      return new PgArrayBuilder(this.config.name, this, size);
    }
    references(ref, actions = {}) {
      this.foreignKeyConfigs.push({ ref, actions });
      return this;
    }
    unique(name, config) {
      this.config.isUnique = true;
      this.config.uniqueName = name;
      this.config.uniqueType = config?.nulls;
      return this;
    }
    generatedAlwaysAs(as2) {
      this.config.generated = {
        as: as2,
        type: "always",
        mode: "stored"
      };
      return this;
    }
    buildForeignKeys(column, table) {
      return this.foreignKeyConfigs.map(({ ref, actions }) => {
        return iife((ref2, actions2) => {
          const builder = new ForeignKeyBuilder(() => {
            const foreignColumn = ref2();
            return { columns: [column], foreignColumns: [foreignColumn] };
          });
          if (actions2.onUpdate) {
            builder.onUpdate(actions2.onUpdate);
          }
          if (actions2.onDelete) {
            builder.onDelete(actions2.onDelete);
          }
          return builder.build(table);
        }, ref, actions);
      });
    }
    buildExtraConfigColumn(table) {
      return new ExtraConfigColumn(table, this.config);
    }
  };
  PgColumn = class PgColumn extends Column {
    constructor(table, config) {
      if (!config.uniqueName) {
        config.uniqueName = uniqueKeyName(table, [config.name]);
      }
      super(table, config);
      this.table = table;
    }
    static [entityKind] = "PgColumn";
  };
  ExtraConfigColumn = class ExtraConfigColumn extends PgColumn {
    static [entityKind] = "ExtraConfigColumn";
    getSQLType() {
      return this.getSQLType();
    }
    indexConfig = {
      order: this.config.order ?? "asc",
      nulls: this.config.nulls ?? "last",
      opClass: this.config.opClass
    };
    defaultConfig = {
      order: "asc",
      nulls: "last",
      opClass: undefined
    };
    asc() {
      this.indexConfig.order = "asc";
      return this;
    }
    desc() {
      this.indexConfig.order = "desc";
      return this;
    }
    nullsFirst() {
      this.indexConfig.nulls = "first";
      return this;
    }
    nullsLast() {
      this.indexConfig.nulls = "last";
      return this;
    }
    op(opClass) {
      this.indexConfig.opClass = opClass;
      return this;
    }
  };
  PgArrayBuilder = class PgArrayBuilder extends PgColumnBuilder {
    static [entityKind] = "PgArrayBuilder";
    constructor(name, baseBuilder, size) {
      super(name, "array", "PgArray");
      this.config.baseBuilder = baseBuilder;
      this.config.size = size;
    }
    build(table) {
      const baseColumn = this.config.baseBuilder.build(table);
      return new PgArray(table, this.config, baseColumn);
    }
  };
  PgArray = class PgArray extends PgColumn {
    constructor(table, config, baseColumn, range) {
      super(table, config);
      this.baseColumn = baseColumn;
      this.range = range;
      this.size = config.size;
    }
    size;
    static [entityKind] = "PgArray";
    getSQLType() {
      return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        value = parsePgArray(value);
      }
      return value.map((v2) => this.baseColumn.mapFromDriverValue(v2));
    }
    mapToDriverValue(value, isNestedArray = false) {
      const a2 = value.map((v2) => v2 === null ? null : is2(this.baseColumn, PgArray) ? this.baseColumn.mapToDriverValue(v2, true) : this.baseColumn.mapToDriverValue(v2));
      if (isNestedArray)
        return a2;
      return makePgArray(a2);
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/enum.js
function isPgEnum(obj) {
  return !!obj && typeof obj === "function" && isPgEnumSym in obj && obj[isPgEnumSym] === true;
}
var PgEnumObjectColumn, isPgEnumSym, PgEnumColumn;
var init_enum = __esm(() => {
  init_entity();
  init_common();
  PgEnumObjectColumn = class PgEnumObjectColumn extends PgColumn {
    static [entityKind] = "PgEnumObjectColumn";
    enum;
    enumValues = this.config.enum.enumValues;
    constructor(table, config) {
      super(table, config);
      this.enum = config.enum;
    }
    getSQLType() {
      return this.enum.enumName;
    }
  };
  isPgEnumSym = Symbol.for("drizzle:isPgEnum");
  PgEnumColumn = class PgEnumColumn extends PgColumn {
    static [entityKind] = "PgEnumColumn";
    enum = this.config.enum;
    enumValues = this.config.enum.enumValues;
    constructor(table, config) {
      super(table, config);
      this.enum = config.enum;
    }
    getSQLType() {
      return this.enum.enumName;
    }
  };
});

// node_modules/drizzle-orm/subquery.js
var Subquery, WithSubquery;
var init_subquery = __esm(() => {
  init_entity();
  Subquery = class Subquery {
    static [entityKind] = "Subquery";
    constructor(sql, fields, alias, isWith = false, usedTables = []) {
      this._ = {
        brand: "Subquery",
        sql,
        selectedFields: fields,
        alias,
        isWith,
        usedTables
      };
    }
  };
  WithSubquery = class WithSubquery extends Subquery {
    static [entityKind] = "WithSubquery";
  };
});

// node_modules/drizzle-orm/version.js
var version = "0.45.1";
var init_version = () => {};

// node_modules/drizzle-orm/tracing.js
var otel, rawTracer, tracer;
var init_tracing = __esm(() => {
  init_tracing_utils();
  init_version();
  tracer = {
    startActiveSpan(name, fn) {
      if (!otel) {
        return fn();
      }
      if (!rawTracer) {
        rawTracer = otel.trace.getTracer("drizzle-orm", version);
      }
      return iife((otel2, rawTracer2) => rawTracer2.startActiveSpan(name, (span) => {
        try {
          return fn(span);
        } catch (e) {
          span.setStatus({
            code: otel2.SpanStatusCode.ERROR,
            message: e instanceof Error ? e.message : "Unknown error"
          });
          throw e;
        } finally {
          span.end();
        }
      }), otel, rawTracer);
    }
  };
});

// node_modules/drizzle-orm/view-common.js
var ViewBaseConfig;
var init_view_common = __esm(() => {
  ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");
});

// node_modules/drizzle-orm/table.js
function getTableName(table) {
  return table[TableName];
}
function getTableUniqueName(table) {
  return `${table[Schema] ?? "public"}.${table[TableName]}`;
}
var Schema, Columns, ExtraConfigColumns, OriginalName, BaseName, IsAlias, ExtraConfigBuilder, IsDrizzleTable, Table;
var init_table = __esm(() => {
  init_entity();
  init_table_utils();
  Schema = Symbol.for("drizzle:Schema");
  Columns = Symbol.for("drizzle:Columns");
  ExtraConfigColumns = Symbol.for("drizzle:ExtraConfigColumns");
  OriginalName = Symbol.for("drizzle:OriginalName");
  BaseName = Symbol.for("drizzle:BaseName");
  IsAlias = Symbol.for("drizzle:IsAlias");
  ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
  IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");
  Table = class Table {
    static [entityKind] = "Table";
    static Symbol = {
      Name: TableName,
      Schema,
      OriginalName,
      Columns,
      ExtraConfigColumns,
      BaseName,
      IsAlias,
      ExtraConfigBuilder
    };
    [TableName];
    [OriginalName];
    [Schema];
    [Columns];
    [ExtraConfigColumns];
    [BaseName];
    [IsAlias] = false;
    [IsDrizzleTable] = true;
    [ExtraConfigBuilder] = undefined;
    constructor(name, schema, baseName) {
      this[TableName] = this[OriginalName] = name;
      this[Schema] = schema;
      this[BaseName] = baseName;
    }
  };
});

// node_modules/drizzle-orm/sql/sql.js
function isSQLWrapper(value) {
  return value !== null && value !== undefined && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
function isDriverValueEncoder(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
}
function fillPlaceholders(params, values) {
  return params.map((p2) => {
    if (is2(p2, Placeholder)) {
      if (!(p2.name in values)) {
        throw new Error(`No value for placeholder "${p2.name}" was provided`);
      }
      return values[p2.name];
    }
    if (is2(p2, Param) && is2(p2.value, Placeholder)) {
      if (!(p2.value.name in values)) {
        throw new Error(`No value for placeholder "${p2.value.name}" was provided`);
      }
      return p2.encoder.mapToDriverValue(values[p2.value.name]);
    }
    return p2;
  });
}
var StringChunk, SQL, Name, noopDecoder, noopEncoder, noopMapper, Param, Placeholder, IsDrizzleView, View;
var init_sql = __esm(() => {
  init_entity();
  init_enum();
  init_subquery();
  init_tracing();
  init_view_common();
  init_column();
  init_table();
  StringChunk = class StringChunk {
    static [entityKind] = "StringChunk";
    value;
    constructor(value) {
      this.value = Array.isArray(value) ? value : [value];
    }
    getSQL() {
      return new SQL([this]);
    }
  };
  SQL = class SQL {
    constructor(queryChunks) {
      this.queryChunks = queryChunks;
      for (const chunk of queryChunks) {
        if (is2(chunk, Table)) {
          const schemaName = chunk[Table.Symbol.Schema];
          this.usedTables.push(schemaName === undefined ? chunk[Table.Symbol.Name] : schemaName + "." + chunk[Table.Symbol.Name]);
        }
      }
    }
    static [entityKind] = "SQL";
    decoder = noopDecoder;
    shouldInlineParams = false;
    usedTables = [];
    append(query) {
      this.queryChunks.push(...query.queryChunks);
      return this;
    }
    toQuery(config) {
      return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
        const query = this.buildQueryFromSourceParams(this.queryChunks, config);
        span?.setAttributes({
          "drizzle.query.text": query.sql,
          "drizzle.query.params": JSON.stringify(query.params)
        });
        return query;
      });
    }
    buildQueryFromSourceParams(chunks, _config) {
      const config = Object.assign({}, _config, {
        inlineParams: _config.inlineParams || this.shouldInlineParams,
        paramStartIndex: _config.paramStartIndex || { value: 0 }
      });
      const {
        casing,
        escapeName,
        escapeParam,
        prepareTyping,
        inlineParams,
        paramStartIndex
      } = config;
      return mergeQueries(chunks.map((chunk) => {
        if (is2(chunk, StringChunk)) {
          return { sql: chunk.value.join(""), params: [] };
        }
        if (is2(chunk, Name)) {
          return { sql: escapeName(chunk.value), params: [] };
        }
        if (chunk === undefined) {
          return { sql: "", params: [] };
        }
        if (Array.isArray(chunk)) {
          const result = [new StringChunk("(")];
          for (const [i, p2] of chunk.entries()) {
            result.push(p2);
            if (i < chunk.length - 1) {
              result.push(new StringChunk(", "));
            }
          }
          result.push(new StringChunk(")"));
          return this.buildQueryFromSourceParams(result, config);
        }
        if (is2(chunk, SQL)) {
          return this.buildQueryFromSourceParams(chunk.queryChunks, {
            ...config,
            inlineParams: inlineParams || chunk.shouldInlineParams
          });
        }
        if (is2(chunk, Table)) {
          const schemaName = chunk[Table.Symbol.Schema];
          const tableName = chunk[Table.Symbol.Name];
          return {
            sql: schemaName === undefined || chunk[IsAlias] ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
            params: []
          };
        }
        if (is2(chunk, Column)) {
          const columnName = casing.getColumnCasing(chunk);
          if (_config.invokeSource === "indexes") {
            return { sql: escapeName(columnName), params: [] };
          }
          const schemaName = chunk.table[Table.Symbol.Schema];
          return {
            sql: chunk.table[IsAlias] || schemaName === undefined ? escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(columnName) : escapeName(schemaName) + "." + escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(columnName),
            params: []
          };
        }
        if (is2(chunk, View)) {
          const schemaName = chunk[ViewBaseConfig].schema;
          const viewName = chunk[ViewBaseConfig].name;
          return {
            sql: schemaName === undefined || chunk[ViewBaseConfig].isAlias ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
            params: []
          };
        }
        if (is2(chunk, Param)) {
          if (is2(chunk.value, Placeholder)) {
            return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
          }
          const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
          if (is2(mappedValue, SQL)) {
            return this.buildQueryFromSourceParams([mappedValue], config);
          }
          if (inlineParams) {
            return { sql: this.mapInlineParam(mappedValue, config), params: [] };
          }
          let typings = ["none"];
          if (prepareTyping) {
            typings = [prepareTyping(chunk.encoder)];
          }
          return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
        }
        if (is2(chunk, Placeholder)) {
          return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
        }
        if (is2(chunk, SQL.Aliased) && chunk.fieldAlias !== undefined) {
          return { sql: escapeName(chunk.fieldAlias), params: [] };
        }
        if (is2(chunk, Subquery)) {
          if (chunk._.isWith) {
            return { sql: escapeName(chunk._.alias), params: [] };
          }
          return this.buildQueryFromSourceParams([
            new StringChunk("("),
            chunk._.sql,
            new StringChunk(") "),
            new Name(chunk._.alias)
          ], config);
        }
        if (isPgEnum(chunk)) {
          if (chunk.schema) {
            return { sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName), params: [] };
          }
          return { sql: escapeName(chunk.enumName), params: [] };
        }
        if (isSQLWrapper(chunk)) {
          if (chunk.shouldOmitSQLParens?.()) {
            return this.buildQueryFromSourceParams([chunk.getSQL()], config);
          }
          return this.buildQueryFromSourceParams([
            new StringChunk("("),
            chunk.getSQL(),
            new StringChunk(")")
          ], config);
        }
        if (inlineParams) {
          return { sql: this.mapInlineParam(chunk, config), params: [] };
        }
        return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk], typings: ["none"] };
      }));
    }
    mapInlineParam(chunk, { escapeString }) {
      if (chunk === null) {
        return "null";
      }
      if (typeof chunk === "number" || typeof chunk === "boolean") {
        return chunk.toString();
      }
      if (typeof chunk === "string") {
        return escapeString(chunk);
      }
      if (typeof chunk === "object") {
        const mappedValueAsString = chunk.toString();
        if (mappedValueAsString === "[object Object]") {
          return escapeString(JSON.stringify(chunk));
        }
        return escapeString(mappedValueAsString);
      }
      throw new Error("Unexpected param value: " + chunk);
    }
    getSQL() {
      return this;
    }
    as(alias) {
      if (alias === undefined) {
        return this;
      }
      return new SQL.Aliased(this, alias);
    }
    mapWith(decoder) {
      this.decoder = typeof decoder === "function" ? { mapFromDriverValue: decoder } : decoder;
      return this;
    }
    inlineParams() {
      this.shouldInlineParams = true;
      return this;
    }
    if(condition) {
      return condition ? this : undefined;
    }
  };
  Name = class Name {
    constructor(value) {
      this.value = value;
    }
    static [entityKind] = "Name";
    brand;
    getSQL() {
      return new SQL([this]);
    }
  };
  noopDecoder = {
    mapFromDriverValue: (value) => value
  };
  noopEncoder = {
    mapToDriverValue: (value) => value
  };
  noopMapper = {
    ...noopDecoder,
    ...noopEncoder
  };
  Param = class Param {
    constructor(value, encoder = noopEncoder) {
      this.value = value;
      this.encoder = encoder;
    }
    static [entityKind] = "Param";
    brand;
    getSQL() {
      return new SQL([this]);
    }
  };
  ((sql2) => {
    function empty() {
      return new SQL([]);
    }
    sql2.empty = empty;
    function fromList(list) {
      return new SQL(list);
    }
    sql2.fromList = fromList;
    function raw(str) {
      return new SQL([new StringChunk(str)]);
    }
    sql2.raw = raw;
    function join(chunks, separator) {
      const result = [];
      for (const [i, chunk] of chunks.entries()) {
        if (i > 0 && separator !== undefined) {
          result.push(separator);
        }
        result.push(chunk);
      }
      return new SQL(result);
    }
    sql2.join = join;
    function identifier(value) {
      return new Name(value);
    }
    sql2.identifier = identifier;
    function placeholder2(name2) {
      return new Placeholder(name2);
    }
    sql2.placeholder = placeholder2;
    function param2(value, encoder) {
      return new Param(value, encoder);
    }
    sql2.param = param2;
  })(sql || (sql = {}));
  ((SQL2) => {

    class Aliased {
      constructor(sql2, fieldAlias) {
        this.sql = sql2;
        this.fieldAlias = fieldAlias;
      }
      static [entityKind] = "SQL.Aliased";
      isSelectionField = false;
      getSQL() {
        return this.sql;
      }
      clone() {
        return new Aliased(this.sql, this.fieldAlias);
      }
    }
    SQL2.Aliased = Aliased;
  })(SQL || (SQL = {}));
  Placeholder = class Placeholder {
    constructor(name2) {
      this.name = name2;
    }
    static [entityKind] = "Placeholder";
    getSQL() {
      return new SQL([this]);
    }
  };
  IsDrizzleView = Symbol.for("drizzle:IsDrizzleView");
  View = class View {
    static [entityKind] = "View";
    [ViewBaseConfig];
    [IsDrizzleView] = true;
    constructor({ name: name2, schema, selectedFields, query }) {
      this[ViewBaseConfig] = {
        name: name2,
        originalName: name2,
        schema,
        selectedFields,
        query,
        isExisting: !query,
        isAlias: false
      };
    }
    getSQL() {
      return new SQL([this]);
    }
  };
  Column.prototype.getSQL = function() {
    return new SQL([this]);
  };
  Table.prototype.getSQL = function() {
    return new SQL([this]);
  };
  Subquery.prototype.getSQL = function() {
    return new SQL([this]);
  };
});

// node_modules/drizzle-orm/alias.js
function aliasedTable(table, tableAlias) {
  return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedTableColumn(column, tableAlias) {
  return new Proxy(column, new ColumnAliasProxyHandler(new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false))));
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql.join(query.queryChunks.map((c) => {
    if (is2(c, Column)) {
      return aliasedTableColumn(c, alias);
    }
    if (is2(c, SQL)) {
      return mapColumnsInSQLToAlias(c, alias);
    }
    if (is2(c, SQL.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c, alias);
    }
    return c;
  }));
}
var ColumnAliasProxyHandler, TableAliasProxyHandler;
var init_alias = __esm(() => {
  init_column();
  init_entity();
  init_sql();
  init_table();
  init_view_common();
  ColumnAliasProxyHandler = class ColumnAliasProxyHandler {
    constructor(table) {
      this.table = table;
    }
    static [entityKind] = "ColumnAliasProxyHandler";
    get(columnObj, prop) {
      if (prop === "table") {
        return this.table;
      }
      return columnObj[prop];
    }
  };
  TableAliasProxyHandler = class TableAliasProxyHandler {
    constructor(alias, replaceOriginalName) {
      this.alias = alias;
      this.replaceOriginalName = replaceOriginalName;
    }
    static [entityKind] = "TableAliasProxyHandler";
    get(target, prop) {
      if (prop === Table.Symbol.IsAlias) {
        return true;
      }
      if (prop === Table.Symbol.Name) {
        return this.alias;
      }
      if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
        return this.alias;
      }
      if (prop === ViewBaseConfig) {
        return {
          ...target[ViewBaseConfig],
          name: this.alias,
          isAlias: true
        };
      }
      if (prop === Table.Symbol.Columns) {
        const columns = target[Table.Symbol.Columns];
        if (!columns) {
          return columns;
        }
        const proxiedColumns = {};
        Object.keys(columns).map((key) => {
          proxiedColumns[key] = new Proxy(columns[key], new ColumnAliasProxyHandler(new Proxy(target, this)));
        });
        return proxiedColumns;
      }
      const value = target[prop];
      if (is2(value, Column)) {
        return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
      }
      return value;
    }
  };
});

// node_modules/drizzle-orm/selection-proxy.js
var SelectionProxyHandler;
var init_selection_proxy = __esm(() => {
  init_alias();
  init_column();
  init_entity();
  init_sql();
  init_subquery();
  init_view_common();
  SelectionProxyHandler = class SelectionProxyHandler {
    static [entityKind] = "SelectionProxyHandler";
    config;
    constructor(config) {
      this.config = { ...config };
    }
    get(subquery, prop) {
      if (prop === "_") {
        return {
          ...subquery["_"],
          selectedFields: new Proxy(subquery._.selectedFields, this)
        };
      }
      if (prop === ViewBaseConfig) {
        return {
          ...subquery[ViewBaseConfig],
          selectedFields: new Proxy(subquery[ViewBaseConfig].selectedFields, this)
        };
      }
      if (typeof prop === "symbol") {
        return subquery[prop];
      }
      const columns = is2(subquery, Subquery) ? subquery._.selectedFields : is2(subquery, View) ? subquery[ViewBaseConfig].selectedFields : subquery;
      const value = columns[prop];
      if (is2(value, SQL.Aliased)) {
        if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
          return value.sql;
        }
        const newValue = value.clone();
        newValue.isSelectionField = true;
        return newValue;
      }
      if (is2(value, SQL)) {
        if (this.config.sqlBehavior === "sql") {
          return value;
        }
        throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
      }
      if (is2(value, Column)) {
        if (this.config.alias) {
          return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(value.table, new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false))));
        }
        return value;
      }
      if (typeof value !== "object" || value === null) {
        return value;
      }
      return new Proxy(value, new SelectionProxyHandler(this.config));
    }
  };
});

// node_modules/drizzle-orm/utils.js
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce((result2, { path, field }, columnIndex) => {
    let decoder;
    if (is2(field, Column)) {
      decoder = field;
    } else if (is2(field, SQL)) {
      decoder = field.decoder;
    } else if (is2(field, Subquery)) {
      decoder = field._.sql.decoder;
    } else {
      decoder = field.sql.decoder;
    }
    let node = result2;
    for (const [pathChunkIndex, pathChunk] of path.entries()) {
      if (pathChunkIndex < path.length - 1) {
        if (!(pathChunk in node)) {
          node[pathChunk] = {};
        }
        node = node[pathChunk];
      } else {
        const rawValue = row[columnIndex];
        const value = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
        if (joinsNotNullableMap && is2(field, Column) && path.length === 2) {
          const objectName = path[0];
          if (!(objectName in nullifyMap)) {
            nullifyMap[objectName] = value === null ? getTableName(field.table) : false;
          } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
            nullifyMap[objectName] = false;
          }
        }
      }
    }
    return result2;
  }, {});
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name, field]) => {
    if (typeof name !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name] : [name];
    if (is2(field, Column) || is2(field, SQL) || is2(field, SQL.Aliased) || is2(field, Subquery)) {
      result.push({ path: newPath, field });
    } else if (is2(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index, key] of leftKeys.entries()) {
    if (key !== rightKeys[index]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table, values) {
  const entries = Object.entries(values).filter(([, value]) => value !== undefined).map(([key, value]) => {
    if (is2(value, SQL) || is2(value, Column)) {
      return [key, value];
    } else {
      return [key, new Param(value, table[Table.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name === "constructor")
        continue;
      Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || /* @__PURE__ */ Object.create(null));
    }
  }
}
function getTableColumns(table) {
  return table[Table.Symbol.Columns];
}
function getTableLikeName(table) {
  return is2(table, Subquery) ? table._.alias : is2(table, View) ? table[ViewBaseConfig].name : is2(table, SQL) ? undefined : table[Table.Symbol.IsAlias] ? table[Table.Symbol.Name] : table[Table.Symbol.BaseName];
}
function getColumnNameAndConfig(a2, b2) {
  return {
    name: typeof a2 === "string" && a2.length > 0 ? a2 : "",
    config: typeof a2 === "object" ? a2 : b2
  };
}
function isConfig(data) {
  if (typeof data !== "object" || data === null)
    return false;
  if (data.constructor.name !== "Object")
    return false;
  if ("logger" in data) {
    const type = typeof data["logger"];
    if (type !== "boolean" && (type !== "object" || typeof data["logger"]["logQuery"] !== "function") && type !== "undefined")
      return false;
    return true;
  }
  if ("schema" in data) {
    const type = typeof data["schema"];
    if (type !== "object" && type !== "undefined")
      return false;
    return true;
  }
  if ("casing" in data) {
    const type = typeof data["casing"];
    if (type !== "string" && type !== "undefined")
      return false;
    return true;
  }
  if ("mode" in data) {
    if (data["mode"] !== "default" || data["mode"] !== "planetscale" || data["mode"] !== undefined)
      return false;
    return true;
  }
  if ("connection" in data) {
    const type = typeof data["connection"];
    if (type !== "string" && type !== "object" && type !== "undefined")
      return false;
    return true;
  }
  if ("client" in data) {
    const type = typeof data["client"];
    if (type !== "object" && type !== "function" && type !== "undefined")
      return false;
    return true;
  }
  if (Object.keys(data).length === 0)
    return true;
  return false;
}
var textDecoder;
var init_utils = __esm(() => {
  init_column();
  init_entity();
  init_sql();
  init_subquery();
  init_table();
  init_view_common();
  textDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder;
});

// node_modules/drizzle-orm/pg-core/columns/int.common.js
var PgIntColumnBaseBuilder;
var init_int_common = __esm(() => {
  init_entity();
  init_common();
  PgIntColumnBaseBuilder = class PgIntColumnBaseBuilder extends PgColumnBuilder {
    static [entityKind] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(sequence) {
      if (sequence) {
        const { name, ...options } = sequence;
        this.config.generatedIdentity = {
          type: "always",
          sequenceName: name,
          sequenceOptions: options
        };
      } else {
        this.config.generatedIdentity = {
          type: "always"
        };
      }
      this.config.hasDefault = true;
      this.config.notNull = true;
      return this;
    }
    generatedByDefaultAsIdentity(sequence) {
      if (sequence) {
        const { name, ...options } = sequence;
        this.config.generatedIdentity = {
          type: "byDefault",
          sequenceName: name,
          sequenceOptions: options
        };
      } else {
        this.config.generatedIdentity = {
          type: "byDefault"
        };
      }
      this.config.hasDefault = true;
      this.config.notNull = true;
      return this;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/bigint.js
function bigint(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (config.mode === "number") {
    return new PgBigInt53Builder(name);
  }
  return new PgBigInt64Builder(name);
}
var PgBigInt53Builder, PgBigInt53, PgBigInt64Builder, PgBigInt64;
var init_bigint = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  init_int_common();
  PgBigInt53Builder = class PgBigInt53Builder extends PgIntColumnBaseBuilder {
    static [entityKind] = "PgBigInt53Builder";
    constructor(name) {
      super(name, "number", "PgBigInt53");
    }
    build(table) {
      return new PgBigInt53(table, this.config);
    }
  };
  PgBigInt53 = class PgBigInt53 extends PgColumn {
    static [entityKind] = "PgBigInt53";
    getSQLType() {
      return "bigint";
    }
    mapFromDriverValue(value) {
      if (typeof value === "number") {
        return value;
      }
      return Number(value);
    }
  };
  PgBigInt64Builder = class PgBigInt64Builder extends PgIntColumnBaseBuilder {
    static [entityKind] = "PgBigInt64Builder";
    constructor(name) {
      super(name, "bigint", "PgBigInt64");
    }
    build(table) {
      return new PgBigInt64(table, this.config);
    }
  };
  PgBigInt64 = class PgBigInt64 extends PgColumn {
    static [entityKind] = "PgBigInt64";
    getSQLType() {
      return "bigint";
    }
    mapFromDriverValue(value) {
      return BigInt(value);
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/bigserial.js
function bigserial(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (config.mode === "number") {
    return new PgBigSerial53Builder(name);
  }
  return new PgBigSerial64Builder(name);
}
var PgBigSerial53Builder, PgBigSerial53, PgBigSerial64Builder, PgBigSerial64;
var init_bigserial = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgBigSerial53Builder = class PgBigSerial53Builder extends PgColumnBuilder {
    static [entityKind] = "PgBigSerial53Builder";
    constructor(name) {
      super(name, "number", "PgBigSerial53");
      this.config.hasDefault = true;
      this.config.notNull = true;
    }
    build(table) {
      return new PgBigSerial53(table, this.config);
    }
  };
  PgBigSerial53 = class PgBigSerial53 extends PgColumn {
    static [entityKind] = "PgBigSerial53";
    getSQLType() {
      return "bigserial";
    }
    mapFromDriverValue(value) {
      if (typeof value === "number") {
        return value;
      }
      return Number(value);
    }
  };
  PgBigSerial64Builder = class PgBigSerial64Builder extends PgColumnBuilder {
    static [entityKind] = "PgBigSerial64Builder";
    constructor(name) {
      super(name, "bigint", "PgBigSerial64");
      this.config.hasDefault = true;
    }
    build(table) {
      return new PgBigSerial64(table, this.config);
    }
  };
  PgBigSerial64 = class PgBigSerial64 extends PgColumn {
    static [entityKind] = "PgBigSerial64";
    getSQLType() {
      return "bigserial";
    }
    mapFromDriverValue(value) {
      return BigInt(value);
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/boolean.js
function boolean(name) {
  return new PgBooleanBuilder(name ?? "");
}
var PgBooleanBuilder, PgBoolean;
var init_boolean = __esm(() => {
  init_entity();
  init_common();
  PgBooleanBuilder = class PgBooleanBuilder extends PgColumnBuilder {
    static [entityKind] = "PgBooleanBuilder";
    constructor(name) {
      super(name, "boolean", "PgBoolean");
    }
    build(table) {
      return new PgBoolean(table, this.config);
    }
  };
  PgBoolean = class PgBoolean extends PgColumn {
    static [entityKind] = "PgBoolean";
    getSQLType() {
      return "boolean";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/char.js
function char(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgCharBuilder(name, config);
}
var PgCharBuilder, PgChar;
var init_char = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgCharBuilder = class PgCharBuilder extends PgColumnBuilder {
    static [entityKind] = "PgCharBuilder";
    constructor(name, config) {
      super(name, "string", "PgChar");
      this.config.length = config.length;
      this.config.enumValues = config.enum;
    }
    build(table) {
      return new PgChar(table, this.config);
    }
  };
  PgChar = class PgChar extends PgColumn {
    static [entityKind] = "PgChar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
      return this.length === undefined ? `char` : `char(${this.length})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/cidr.js
function cidr(name) {
  return new PgCidrBuilder(name ?? "");
}
var PgCidrBuilder, PgCidr;
var init_cidr = __esm(() => {
  init_entity();
  init_common();
  PgCidrBuilder = class PgCidrBuilder extends PgColumnBuilder {
    static [entityKind] = "PgCidrBuilder";
    constructor(name) {
      super(name, "string", "PgCidr");
    }
    build(table) {
      return new PgCidr(table, this.config);
    }
  };
  PgCidr = class PgCidr extends PgColumn {
    static [entityKind] = "PgCidr";
    getSQLType() {
      return "cidr";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/custom.js
function customType(customTypeParams) {
  return (a2, b2) => {
    const { name, config } = getColumnNameAndConfig(a2, b2);
    return new PgCustomColumnBuilder(name, config, customTypeParams);
  };
}
var PgCustomColumnBuilder, PgCustomColumn;
var init_custom = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgCustomColumnBuilder = class PgCustomColumnBuilder extends PgColumnBuilder {
    static [entityKind] = "PgCustomColumnBuilder";
    constructor(name, fieldConfig, customTypeParams) {
      super(name, "custom", "PgCustomColumn");
      this.config.fieldConfig = fieldConfig;
      this.config.customTypeParams = customTypeParams;
    }
    build(table) {
      return new PgCustomColumn(table, this.config);
    }
  };
  PgCustomColumn = class PgCustomColumn extends PgColumn {
    static [entityKind] = "PgCustomColumn";
    sqlName;
    mapTo;
    mapFrom;
    constructor(table, config) {
      super(table, config);
      this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
      this.mapTo = config.customTypeParams.toDriver;
      this.mapFrom = config.customTypeParams.fromDriver;
    }
    getSQLType() {
      return this.sqlName;
    }
    mapFromDriverValue(value) {
      return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
    }
    mapToDriverValue(value) {
      return typeof this.mapTo === "function" ? this.mapTo(value) : value;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/date.common.js
var PgDateColumnBaseBuilder;
var init_date_common = __esm(() => {
  init_entity();
  init_sql();
  init_common();
  PgDateColumnBaseBuilder = class PgDateColumnBaseBuilder extends PgColumnBuilder {
    static [entityKind] = "PgDateColumnBaseBuilder";
    defaultNow() {
      return this.default(sql`now()`);
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/date.js
function date(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (config?.mode === "date") {
    return new PgDateBuilder(name);
  }
  return new PgDateStringBuilder(name);
}
var PgDateBuilder, PgDate, PgDateStringBuilder, PgDateString;
var init_date = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  init_date_common();
  PgDateBuilder = class PgDateBuilder extends PgDateColumnBaseBuilder {
    static [entityKind] = "PgDateBuilder";
    constructor(name) {
      super(name, "date", "PgDate");
    }
    build(table) {
      return new PgDate(table, this.config);
    }
  };
  PgDate = class PgDate extends PgColumn {
    static [entityKind] = "PgDate";
    getSQLType() {
      return "date";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string")
        return new Date(value);
      return value;
    }
    mapToDriverValue(value) {
      return value.toISOString();
    }
  };
  PgDateStringBuilder = class PgDateStringBuilder extends PgDateColumnBaseBuilder {
    static [entityKind] = "PgDateStringBuilder";
    constructor(name) {
      super(name, "string", "PgDateString");
    }
    build(table) {
      return new PgDateString(table, this.config);
    }
  };
  PgDateString = class PgDateString extends PgColumn {
    static [entityKind] = "PgDateString";
    getSQLType() {
      return "date";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string")
        return value;
      return value.toISOString().slice(0, -14);
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/double-precision.js
function doublePrecision(name) {
  return new PgDoublePrecisionBuilder(name ?? "");
}
var PgDoublePrecisionBuilder, PgDoublePrecision;
var init_double_precision = __esm(() => {
  init_entity();
  init_common();
  PgDoublePrecisionBuilder = class PgDoublePrecisionBuilder extends PgColumnBuilder {
    static [entityKind] = "PgDoublePrecisionBuilder";
    constructor(name) {
      super(name, "number", "PgDoublePrecision");
    }
    build(table) {
      return new PgDoublePrecision(table, this.config);
    }
  };
  PgDoublePrecision = class PgDoublePrecision extends PgColumn {
    static [entityKind] = "PgDoublePrecision";
    getSQLType() {
      return "double precision";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        return Number.parseFloat(value);
      }
      return value;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/inet.js
function inet(name) {
  return new PgInetBuilder(name ?? "");
}
var PgInetBuilder, PgInet;
var init_inet = __esm(() => {
  init_entity();
  init_common();
  PgInetBuilder = class PgInetBuilder extends PgColumnBuilder {
    static [entityKind] = "PgInetBuilder";
    constructor(name) {
      super(name, "string", "PgInet");
    }
    build(table) {
      return new PgInet(table, this.config);
    }
  };
  PgInet = class PgInet extends PgColumn {
    static [entityKind] = "PgInet";
    getSQLType() {
      return "inet";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/integer.js
function integer(name) {
  return new PgIntegerBuilder(name ?? "");
}
var PgIntegerBuilder, PgInteger;
var init_integer = __esm(() => {
  init_entity();
  init_common();
  init_int_common();
  PgIntegerBuilder = class PgIntegerBuilder extends PgIntColumnBaseBuilder {
    static [entityKind] = "PgIntegerBuilder";
    constructor(name) {
      super(name, "number", "PgInteger");
    }
    build(table) {
      return new PgInteger(table, this.config);
    }
  };
  PgInteger = class PgInteger extends PgColumn {
    static [entityKind] = "PgInteger";
    getSQLType() {
      return "integer";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        return Number.parseInt(value);
      }
      return value;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/interval.js
function interval(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgIntervalBuilder(name, config);
}
var PgIntervalBuilder, PgInterval;
var init_interval = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgIntervalBuilder = class PgIntervalBuilder extends PgColumnBuilder {
    static [entityKind] = "PgIntervalBuilder";
    constructor(name, intervalConfig) {
      super(name, "string", "PgInterval");
      this.config.intervalConfig = intervalConfig;
    }
    build(table) {
      return new PgInterval(table, this.config);
    }
  };
  PgInterval = class PgInterval extends PgColumn {
    static [entityKind] = "PgInterval";
    fields = this.config.intervalConfig.fields;
    precision = this.config.intervalConfig.precision;
    getSQLType() {
      const fields = this.fields ? ` ${this.fields}` : "";
      const precision = this.precision ? `(${this.precision})` : "";
      return `interval${fields}${precision}`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/json.js
function json(name) {
  return new PgJsonBuilder(name ?? "");
}
var PgJsonBuilder, PgJson;
var init_json = __esm(() => {
  init_entity();
  init_common();
  PgJsonBuilder = class PgJsonBuilder extends PgColumnBuilder {
    static [entityKind] = "PgJsonBuilder";
    constructor(name) {
      super(name, "json", "PgJson");
    }
    build(table) {
      return new PgJson(table, this.config);
    }
  };
  PgJson = class PgJson extends PgColumn {
    static [entityKind] = "PgJson";
    constructor(table, config) {
      super(table, config);
    }
    getSQLType() {
      return "json";
    }
    mapToDriverValue(value) {
      return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch {
          return value;
        }
      }
      return value;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/jsonb.js
function jsonb(name) {
  return new PgJsonbBuilder(name ?? "");
}
var PgJsonbBuilder, PgJsonb;
var init_jsonb = __esm(() => {
  init_entity();
  init_common();
  PgJsonbBuilder = class PgJsonbBuilder extends PgColumnBuilder {
    static [entityKind] = "PgJsonbBuilder";
    constructor(name) {
      super(name, "json", "PgJsonb");
    }
    build(table) {
      return new PgJsonb(table, this.config);
    }
  };
  PgJsonb = class PgJsonb extends PgColumn {
    static [entityKind] = "PgJsonb";
    constructor(table, config) {
      super(table, config);
    }
    getSQLType() {
      return "jsonb";
    }
    mapToDriverValue(value) {
      return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch {
          return value;
        }
      }
      return value;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/line.js
function line(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (!config?.mode || config.mode === "tuple") {
    return new PgLineBuilder(name);
  }
  return new PgLineABCBuilder(name);
}
var PgLineBuilder, PgLineTuple, PgLineABCBuilder, PgLineABC;
var init_line = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgLineBuilder = class PgLineBuilder extends PgColumnBuilder {
    static [entityKind] = "PgLineBuilder";
    constructor(name) {
      super(name, "array", "PgLine");
    }
    build(table) {
      return new PgLineTuple(table, this.config);
    }
  };
  PgLineTuple = class PgLineTuple extends PgColumn {
    static [entityKind] = "PgLine";
    getSQLType() {
      return "line";
    }
    mapFromDriverValue(value) {
      const [a2, b2, c] = value.slice(1, -1).split(",");
      return [Number.parseFloat(a2), Number.parseFloat(b2), Number.parseFloat(c)];
    }
    mapToDriverValue(value) {
      return `{${value[0]},${value[1]},${value[2]}}`;
    }
  };
  PgLineABCBuilder = class PgLineABCBuilder extends PgColumnBuilder {
    static [entityKind] = "PgLineABCBuilder";
    constructor(name) {
      super(name, "json", "PgLineABC");
    }
    build(table) {
      return new PgLineABC(table, this.config);
    }
  };
  PgLineABC = class PgLineABC extends PgColumn {
    static [entityKind] = "PgLineABC";
    getSQLType() {
      return "line";
    }
    mapFromDriverValue(value) {
      const [a2, b2, c] = value.slice(1, -1).split(",");
      return { a: Number.parseFloat(a2), b: Number.parseFloat(b2), c: Number.parseFloat(c) };
    }
    mapToDriverValue(value) {
      return `{${value.a},${value.b},${value.c}}`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/macaddr.js
function macaddr(name) {
  return new PgMacaddrBuilder(name ?? "");
}
var PgMacaddrBuilder, PgMacaddr;
var init_macaddr = __esm(() => {
  init_entity();
  init_common();
  PgMacaddrBuilder = class PgMacaddrBuilder extends PgColumnBuilder {
    static [entityKind] = "PgMacaddrBuilder";
    constructor(name) {
      super(name, "string", "PgMacaddr");
    }
    build(table) {
      return new PgMacaddr(table, this.config);
    }
  };
  PgMacaddr = class PgMacaddr extends PgColumn {
    static [entityKind] = "PgMacaddr";
    getSQLType() {
      return "macaddr";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/macaddr8.js
function macaddr8(name) {
  return new PgMacaddr8Builder(name ?? "");
}
var PgMacaddr8Builder, PgMacaddr8;
var init_macaddr8 = __esm(() => {
  init_entity();
  init_common();
  PgMacaddr8Builder = class PgMacaddr8Builder extends PgColumnBuilder {
    static [entityKind] = "PgMacaddr8Builder";
    constructor(name) {
      super(name, "string", "PgMacaddr8");
    }
    build(table) {
      return new PgMacaddr8(table, this.config);
    }
  };
  PgMacaddr8 = class PgMacaddr8 extends PgColumn {
    static [entityKind] = "PgMacaddr8";
    getSQLType() {
      return "macaddr8";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/numeric.js
function numeric(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  const mode = config?.mode;
  return mode === "number" ? new PgNumericNumberBuilder(name, config?.precision, config?.scale) : mode === "bigint" ? new PgNumericBigIntBuilder(name, config?.precision, config?.scale) : new PgNumericBuilder(name, config?.precision, config?.scale);
}
var PgNumericBuilder, PgNumeric, PgNumericNumberBuilder, PgNumericNumber, PgNumericBigIntBuilder, PgNumericBigInt;
var init_numeric = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgNumericBuilder = class PgNumericBuilder extends PgColumnBuilder {
    static [entityKind] = "PgNumericBuilder";
    constructor(name, precision, scale) {
      super(name, "string", "PgNumeric");
      this.config.precision = precision;
      this.config.scale = scale;
    }
    build(table) {
      return new PgNumeric(table, this.config);
    }
  };
  PgNumeric = class PgNumeric extends PgColumn {
    static [entityKind] = "PgNumeric";
    precision;
    scale;
    constructor(table, config) {
      super(table, config);
      this.precision = config.precision;
      this.scale = config.scale;
    }
    mapFromDriverValue(value) {
      if (typeof value === "string")
        return value;
      return String(value);
    }
    getSQLType() {
      if (this.precision !== undefined && this.scale !== undefined) {
        return `numeric(${this.precision}, ${this.scale})`;
      } else if (this.precision === undefined) {
        return "numeric";
      } else {
        return `numeric(${this.precision})`;
      }
    }
  };
  PgNumericNumberBuilder = class PgNumericNumberBuilder extends PgColumnBuilder {
    static [entityKind] = "PgNumericNumberBuilder";
    constructor(name, precision, scale) {
      super(name, "number", "PgNumericNumber");
      this.config.precision = precision;
      this.config.scale = scale;
    }
    build(table) {
      return new PgNumericNumber(table, this.config);
    }
  };
  PgNumericNumber = class PgNumericNumber extends PgColumn {
    static [entityKind] = "PgNumericNumber";
    precision;
    scale;
    constructor(table, config) {
      super(table, config);
      this.precision = config.precision;
      this.scale = config.scale;
    }
    mapFromDriverValue(value) {
      if (typeof value === "number")
        return value;
      return Number(value);
    }
    mapToDriverValue = String;
    getSQLType() {
      if (this.precision !== undefined && this.scale !== undefined) {
        return `numeric(${this.precision}, ${this.scale})`;
      } else if (this.precision === undefined) {
        return "numeric";
      } else {
        return `numeric(${this.precision})`;
      }
    }
  };
  PgNumericBigIntBuilder = class PgNumericBigIntBuilder extends PgColumnBuilder {
    static [entityKind] = "PgNumericBigIntBuilder";
    constructor(name, precision, scale) {
      super(name, "bigint", "PgNumericBigInt");
      this.config.precision = precision;
      this.config.scale = scale;
    }
    build(table) {
      return new PgNumericBigInt(table, this.config);
    }
  };
  PgNumericBigInt = class PgNumericBigInt extends PgColumn {
    static [entityKind] = "PgNumericBigInt";
    precision;
    scale;
    constructor(table, config) {
      super(table, config);
      this.precision = config.precision;
      this.scale = config.scale;
    }
    mapFromDriverValue = BigInt;
    mapToDriverValue = String;
    getSQLType() {
      if (this.precision !== undefined && this.scale !== undefined) {
        return `numeric(${this.precision}, ${this.scale})`;
      } else if (this.precision === undefined) {
        return "numeric";
      } else {
        return `numeric(${this.precision})`;
      }
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/point.js
function point(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (!config?.mode || config.mode === "tuple") {
    return new PgPointTupleBuilder(name);
  }
  return new PgPointObjectBuilder(name);
}
var PgPointTupleBuilder, PgPointTuple, PgPointObjectBuilder, PgPointObject;
var init_point = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgPointTupleBuilder = class PgPointTupleBuilder extends PgColumnBuilder {
    static [entityKind] = "PgPointTupleBuilder";
    constructor(name) {
      super(name, "array", "PgPointTuple");
    }
    build(table) {
      return new PgPointTuple(table, this.config);
    }
  };
  PgPointTuple = class PgPointTuple extends PgColumn {
    static [entityKind] = "PgPointTuple";
    getSQLType() {
      return "point";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        const [x2, y] = value.slice(1, -1).split(",");
        return [Number.parseFloat(x2), Number.parseFloat(y)];
      }
      return [value.x, value.y];
    }
    mapToDriverValue(value) {
      return `(${value[0]},${value[1]})`;
    }
  };
  PgPointObjectBuilder = class PgPointObjectBuilder extends PgColumnBuilder {
    static [entityKind] = "PgPointObjectBuilder";
    constructor(name) {
      super(name, "json", "PgPointObject");
    }
    build(table) {
      return new PgPointObject(table, this.config);
    }
  };
  PgPointObject = class PgPointObject extends PgColumn {
    static [entityKind] = "PgPointObject";
    getSQLType() {
      return "point";
    }
    mapFromDriverValue(value) {
      if (typeof value === "string") {
        const [x2, y] = value.slice(1, -1).split(",");
        return { x: Number.parseFloat(x2), y: Number.parseFloat(y) };
      }
      return value;
    }
    mapToDriverValue(value) {
      return `(${value.x},${value.y})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/postgis_extension/utils.js
function hexToBytes(hex) {
  const bytes = [];
  for (let c = 0;c < hex.length; c += 2) {
    bytes.push(Number.parseInt(hex.slice(c, c + 2), 16));
  }
  return new Uint8Array(bytes);
}
function bytesToFloat64(bytes, offset) {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  for (let i = 0;i < 8; i++) {
    view.setUint8(i, bytes[offset + i]);
  }
  return view.getFloat64(0, true);
}
function parseEWKB(hex) {
  const bytes = hexToBytes(hex);
  let offset = 0;
  const byteOrder = bytes[offset];
  offset += 1;
  const view = new DataView(bytes.buffer);
  const geomType = view.getUint32(offset, byteOrder === 1);
  offset += 4;
  let _srid;
  if (geomType & 536870912) {
    _srid = view.getUint32(offset, byteOrder === 1);
    offset += 4;
  }
  if ((geomType & 65535) === 1) {
    const x2 = bytesToFloat64(bytes, offset);
    offset += 8;
    const y = bytesToFloat64(bytes, offset);
    offset += 8;
    return [x2, y];
  }
  throw new Error("Unsupported geometry type");
}
var init_utils2 = () => {};

// node_modules/drizzle-orm/pg-core/columns/postgis_extension/geometry.js
function geometry(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (!config?.mode || config.mode === "tuple") {
    return new PgGeometryBuilder(name);
  }
  return new PgGeometryObjectBuilder(name);
}
var PgGeometryBuilder, PgGeometry, PgGeometryObjectBuilder, PgGeometryObject;
var init_geometry = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  init_utils2();
  PgGeometryBuilder = class PgGeometryBuilder extends PgColumnBuilder {
    static [entityKind] = "PgGeometryBuilder";
    constructor(name) {
      super(name, "array", "PgGeometry");
    }
    build(table) {
      return new PgGeometry(table, this.config);
    }
  };
  PgGeometry = class PgGeometry extends PgColumn {
    static [entityKind] = "PgGeometry";
    getSQLType() {
      return "geometry(point)";
    }
    mapFromDriverValue(value) {
      return parseEWKB(value);
    }
    mapToDriverValue(value) {
      return `point(${value[0]} ${value[1]})`;
    }
  };
  PgGeometryObjectBuilder = class PgGeometryObjectBuilder extends PgColumnBuilder {
    static [entityKind] = "PgGeometryObjectBuilder";
    constructor(name) {
      super(name, "json", "PgGeometryObject");
    }
    build(table) {
      return new PgGeometryObject(table, this.config);
    }
  };
  PgGeometryObject = class PgGeometryObject extends PgColumn {
    static [entityKind] = "PgGeometryObject";
    getSQLType() {
      return "geometry(point)";
    }
    mapFromDriverValue(value) {
      const parsed = parseEWKB(value);
      return { x: parsed[0], y: parsed[1] };
    }
    mapToDriverValue(value) {
      return `point(${value.x} ${value.y})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/real.js
function real(name) {
  return new PgRealBuilder(name ?? "");
}
var PgRealBuilder, PgReal;
var init_real = __esm(() => {
  init_entity();
  init_common();
  PgRealBuilder = class PgRealBuilder extends PgColumnBuilder {
    static [entityKind] = "PgRealBuilder";
    constructor(name, length) {
      super(name, "number", "PgReal");
      this.config.length = length;
    }
    build(table) {
      return new PgReal(table, this.config);
    }
  };
  PgReal = class PgReal extends PgColumn {
    static [entityKind] = "PgReal";
    constructor(table, config) {
      super(table, config);
    }
    getSQLType() {
      return "real";
    }
    mapFromDriverValue = (value) => {
      if (typeof value === "string") {
        return Number.parseFloat(value);
      }
      return value;
    };
  };
});

// node_modules/drizzle-orm/pg-core/columns/serial.js
function serial(name) {
  return new PgSerialBuilder(name ?? "");
}
var PgSerialBuilder, PgSerial;
var init_serial = __esm(() => {
  init_entity();
  init_common();
  PgSerialBuilder = class PgSerialBuilder extends PgColumnBuilder {
    static [entityKind] = "PgSerialBuilder";
    constructor(name) {
      super(name, "number", "PgSerial");
      this.config.hasDefault = true;
      this.config.notNull = true;
    }
    build(table) {
      return new PgSerial(table, this.config);
    }
  };
  PgSerial = class PgSerial extends PgColumn {
    static [entityKind] = "PgSerial";
    getSQLType() {
      return "serial";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/smallint.js
function smallint(name) {
  return new PgSmallIntBuilder(name ?? "");
}
var PgSmallIntBuilder, PgSmallInt;
var init_smallint = __esm(() => {
  init_entity();
  init_common();
  init_int_common();
  PgSmallIntBuilder = class PgSmallIntBuilder extends PgIntColumnBaseBuilder {
    static [entityKind] = "PgSmallIntBuilder";
    constructor(name) {
      super(name, "number", "PgSmallInt");
    }
    build(table) {
      return new PgSmallInt(table, this.config);
    }
  };
  PgSmallInt = class PgSmallInt extends PgColumn {
    static [entityKind] = "PgSmallInt";
    getSQLType() {
      return "smallint";
    }
    mapFromDriverValue = (value) => {
      if (typeof value === "string") {
        return Number(value);
      }
      return value;
    };
  };
});

// node_modules/drizzle-orm/pg-core/columns/smallserial.js
function smallserial(name) {
  return new PgSmallSerialBuilder(name ?? "");
}
var PgSmallSerialBuilder, PgSmallSerial;
var init_smallserial = __esm(() => {
  init_entity();
  init_common();
  PgSmallSerialBuilder = class PgSmallSerialBuilder extends PgColumnBuilder {
    static [entityKind] = "PgSmallSerialBuilder";
    constructor(name) {
      super(name, "number", "PgSmallSerial");
      this.config.hasDefault = true;
      this.config.notNull = true;
    }
    build(table) {
      return new PgSmallSerial(table, this.config);
    }
  };
  PgSmallSerial = class PgSmallSerial extends PgColumn {
    static [entityKind] = "PgSmallSerial";
    getSQLType() {
      return "smallserial";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/text.js
function text(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgTextBuilder(name, config);
}
var PgTextBuilder, PgText;
var init_text = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgTextBuilder = class PgTextBuilder extends PgColumnBuilder {
    static [entityKind] = "PgTextBuilder";
    constructor(name, config) {
      super(name, "string", "PgText");
      this.config.enumValues = config.enum;
    }
    build(table) {
      return new PgText(table, this.config);
    }
  };
  PgText = class PgText extends PgColumn {
    static [entityKind] = "PgText";
    enumValues = this.config.enumValues;
    getSQLType() {
      return "text";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/time.js
function time(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgTimeBuilder(name, config.withTimezone ?? false, config.precision);
}
var PgTimeBuilder, PgTime;
var init_time = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  init_date_common();
  PgTimeBuilder = class PgTimeBuilder extends PgDateColumnBaseBuilder {
    constructor(name, withTimezone, precision) {
      super(name, "string", "PgTime");
      this.withTimezone = withTimezone;
      this.precision = precision;
      this.config.withTimezone = withTimezone;
      this.config.precision = precision;
    }
    static [entityKind] = "PgTimeBuilder";
    build(table) {
      return new PgTime(table, this.config);
    }
  };
  PgTime = class PgTime extends PgColumn {
    static [entityKind] = "PgTime";
    withTimezone;
    precision;
    constructor(table, config) {
      super(table, config);
      this.withTimezone = config.withTimezone;
      this.precision = config.precision;
    }
    getSQLType() {
      const precision = this.precision === undefined ? "" : `(${this.precision})`;
      return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/timestamp.js
function timestamp(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  if (config?.mode === "string") {
    return new PgTimestampStringBuilder(name, config.withTimezone ?? false, config.precision);
  }
  return new PgTimestampBuilder(name, config?.withTimezone ?? false, config?.precision);
}
var PgTimestampBuilder, PgTimestamp, PgTimestampStringBuilder, PgTimestampString;
var init_timestamp = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  init_date_common();
  PgTimestampBuilder = class PgTimestampBuilder extends PgDateColumnBaseBuilder {
    static [entityKind] = "PgTimestampBuilder";
    constructor(name, withTimezone, precision) {
      super(name, "date", "PgTimestamp");
      this.config.withTimezone = withTimezone;
      this.config.precision = precision;
    }
    build(table) {
      return new PgTimestamp(table, this.config);
    }
  };
  PgTimestamp = class PgTimestamp extends PgColumn {
    static [entityKind] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(table, config) {
      super(table, config);
      this.withTimezone = config.withTimezone;
      this.precision = config.precision;
    }
    getSQLType() {
      const precision = this.precision === undefined ? "" : ` (${this.precision})`;
      return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
    mapFromDriverValue(value) {
      if (typeof value === "string")
        return new Date(this.withTimezone ? value : value + "+0000");
      return value;
    }
    mapToDriverValue = (value) => {
      return value.toISOString();
    };
  };
  PgTimestampStringBuilder = class PgTimestampStringBuilder extends PgDateColumnBaseBuilder {
    static [entityKind] = "PgTimestampStringBuilder";
    constructor(name, withTimezone, precision) {
      super(name, "string", "PgTimestampString");
      this.config.withTimezone = withTimezone;
      this.config.precision = precision;
    }
    build(table) {
      return new PgTimestampString(table, this.config);
    }
  };
  PgTimestampString = class PgTimestampString extends PgColumn {
    static [entityKind] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(table, config) {
      super(table, config);
      this.withTimezone = config.withTimezone;
      this.precision = config.precision;
    }
    getSQLType() {
      const precision = this.precision === undefined ? "" : `(${this.precision})`;
      return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
    }
    mapFromDriverValue(value) {
      if (typeof value === "string")
        return value;
      const shortened = value.toISOString().slice(0, -1).replace("T", " ");
      if (this.withTimezone) {
        const offset = value.getTimezoneOffset();
        const sign = offset <= 0 ? "+" : "-";
        return `${shortened}${sign}${Math.floor(Math.abs(offset) / 60).toString().padStart(2, "0")}`;
      }
      return shortened;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/uuid.js
function uuid(name) {
  return new PgUUIDBuilder(name ?? "");
}
var PgUUIDBuilder, PgUUID;
var init_uuid = __esm(() => {
  init_entity();
  init_sql();
  init_common();
  PgUUIDBuilder = class PgUUIDBuilder extends PgColumnBuilder {
    static [entityKind] = "PgUUIDBuilder";
    constructor(name) {
      super(name, "string", "PgUUID");
    }
    defaultRandom() {
      return this.default(sql`gen_random_uuid()`);
    }
    build(table) {
      return new PgUUID(table, this.config);
    }
  };
  PgUUID = class PgUUID extends PgColumn {
    static [entityKind] = "PgUUID";
    getSQLType() {
      return "uuid";
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/varchar.js
function varchar(a2, b2 = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgVarcharBuilder(name, config);
}
var PgVarcharBuilder, PgVarchar;
var init_varchar = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgVarcharBuilder = class PgVarcharBuilder extends PgColumnBuilder {
    static [entityKind] = "PgVarcharBuilder";
    constructor(name, config) {
      super(name, "string", "PgVarchar");
      this.config.length = config.length;
      this.config.enumValues = config.enum;
    }
    build(table) {
      return new PgVarchar(table, this.config);
    }
  };
  PgVarchar = class PgVarchar extends PgColumn {
    static [entityKind] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
      return this.length === undefined ? `varchar` : `varchar(${this.length})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/vector_extension/bit.js
function bit(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgBinaryVectorBuilder(name, config);
}
var PgBinaryVectorBuilder, PgBinaryVector;
var init_bit = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgBinaryVectorBuilder = class PgBinaryVectorBuilder extends PgColumnBuilder {
    static [entityKind] = "PgBinaryVectorBuilder";
    constructor(name, config) {
      super(name, "string", "PgBinaryVector");
      this.config.dimensions = config.dimensions;
    }
    build(table) {
      return new PgBinaryVector(table, this.config);
    }
  };
  PgBinaryVector = class PgBinaryVector extends PgColumn {
    static [entityKind] = "PgBinaryVector";
    dimensions = this.config.dimensions;
    getSQLType() {
      return `bit(${this.dimensions})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/vector_extension/halfvec.js
function halfvec(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgHalfVectorBuilder(name, config);
}
var PgHalfVectorBuilder, PgHalfVector;
var init_halfvec = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgHalfVectorBuilder = class PgHalfVectorBuilder extends PgColumnBuilder {
    static [entityKind] = "PgHalfVectorBuilder";
    constructor(name, config) {
      super(name, "array", "PgHalfVector");
      this.config.dimensions = config.dimensions;
    }
    build(table) {
      return new PgHalfVector(table, this.config);
    }
  };
  PgHalfVector = class PgHalfVector extends PgColumn {
    static [entityKind] = "PgHalfVector";
    dimensions = this.config.dimensions;
    getSQLType() {
      return `halfvec(${this.dimensions})`;
    }
    mapToDriverValue(value) {
      return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
      return value.slice(1, -1).split(",").map((v2) => Number.parseFloat(v2));
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/vector_extension/sparsevec.js
function sparsevec(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgSparseVectorBuilder(name, config);
}
var PgSparseVectorBuilder, PgSparseVector;
var init_sparsevec = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgSparseVectorBuilder = class PgSparseVectorBuilder extends PgColumnBuilder {
    static [entityKind] = "PgSparseVectorBuilder";
    constructor(name, config) {
      super(name, "string", "PgSparseVector");
      this.config.dimensions = config.dimensions;
    }
    build(table) {
      return new PgSparseVector(table, this.config);
    }
  };
  PgSparseVector = class PgSparseVector extends PgColumn {
    static [entityKind] = "PgSparseVector";
    dimensions = this.config.dimensions;
    getSQLType() {
      return `sparsevec(${this.dimensions})`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/vector_extension/vector.js
function vector(a2, b2) {
  const { name, config } = getColumnNameAndConfig(a2, b2);
  return new PgVectorBuilder(name, config);
}
var PgVectorBuilder, PgVector;
var init_vector = __esm(() => {
  init_entity();
  init_utils();
  init_common();
  PgVectorBuilder = class PgVectorBuilder extends PgColumnBuilder {
    static [entityKind] = "PgVectorBuilder";
    constructor(name, config) {
      super(name, "array", "PgVector");
      this.config.dimensions = config.dimensions;
    }
    build(table) {
      return new PgVector(table, this.config);
    }
  };
  PgVector = class PgVector extends PgColumn {
    static [entityKind] = "PgVector";
    dimensions = this.config.dimensions;
    getSQLType() {
      return `vector(${this.dimensions})`;
    }
    mapToDriverValue(value) {
      return JSON.stringify(value);
    }
    mapFromDriverValue(value) {
      return value.slice(1, -1).split(",").map((v2) => Number.parseFloat(v2));
    }
  };
});

// node_modules/drizzle-orm/pg-core/columns/all.js
function getPgColumnBuilders() {
  return {
    bigint,
    bigserial,
    boolean,
    char,
    cidr,
    customType,
    date,
    doublePrecision,
    inet,
    integer,
    interval,
    json,
    jsonb,
    line,
    macaddr,
    macaddr8,
    numeric,
    point,
    geometry,
    real,
    serial,
    smallint,
    smallserial,
    text,
    time,
    timestamp,
    uuid,
    varchar,
    bit,
    halfvec,
    sparsevec,
    vector
  };
}
var init_all = __esm(() => {
  init_bigint();
  init_bigserial();
  init_boolean();
  init_char();
  init_cidr();
  init_custom();
  init_date();
  init_double_precision();
  init_inet();
  init_integer();
  init_interval();
  init_json();
  init_jsonb();
  init_line();
  init_macaddr();
  init_macaddr8();
  init_numeric();
  init_point();
  init_geometry();
  init_real();
  init_serial();
  init_smallint();
  init_smallserial();
  init_text();
  init_time();
  init_timestamp();
  init_uuid();
  init_varchar();
  init_bit();
  init_halfvec();
  init_sparsevec();
  init_vector();
});

// node_modules/drizzle-orm/pg-core/table.js
function pgTableWithSchema(name, columns, extraConfig, schema, baseName = name) {
  const rawTable = new PgTable(name, schema, baseName);
  const parsedColumns = typeof columns === "function" ? columns(getPgColumnBuilders()) : columns;
  const builtColumns = Object.fromEntries(Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
    const colBuilder = colBuilderBase;
    colBuilder.setName(name2);
    const column = colBuilder.build(rawTable);
    rawTable[InlineForeignKeys].push(...colBuilder.buildForeignKeys(column, rawTable));
    return [name2, column];
  }));
  const builtColumnsForExtraConfig = Object.fromEntries(Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
    const colBuilder = colBuilderBase;
    colBuilder.setName(name2);
    const column = colBuilder.buildExtraConfigColumn(rawTable);
    return [name2, column];
  }));
  const table = Object.assign(rawTable, builtColumns);
  table[Table.Symbol.Columns] = builtColumns;
  table[Table.Symbol.ExtraConfigColumns] = builtColumnsForExtraConfig;
  if (extraConfig) {
    table[PgTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return Object.assign(table, {
    enableRLS: () => {
      table[PgTable.Symbol.EnableRLS] = true;
      return table;
    }
  });
}
var InlineForeignKeys, EnableRLS, PgTable, pgTable = (name, columns, extraConfig) => {
  return pgTableWithSchema(name, columns, extraConfig, undefined);
};
var init_table2 = __esm(() => {
  init_entity();
  init_table();
  init_all();
  InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");
  EnableRLS = Symbol.for("drizzle:EnableRLS");
  PgTable = class PgTable extends Table {
    static [entityKind] = "PgTable";
    static Symbol = Object.assign({}, Table.Symbol, {
      InlineForeignKeys,
      EnableRLS
    });
    [InlineForeignKeys] = [];
    [EnableRLS] = false;
    [Table.Symbol.ExtraConfigBuilder] = undefined;
    [Table.Symbol.ExtraConfigColumns] = {};
  };
});

// node_modules/drizzle-orm/pg-core/checks.js
var init_checks = () => {};

// node_modules/drizzle-orm/pg-core/columns/index.js
var init_columns = __esm(() => {
  init_bigint();
  init_bigserial();
  init_boolean();
  init_char();
  init_cidr();
  init_common();
  init_custom();
  init_date();
  init_double_precision();
  init_enum();
  init_inet();
  init_int_common();
  init_integer();
  init_interval();
  init_json();
  init_jsonb();
  init_line();
  init_macaddr();
  init_macaddr8();
  init_numeric();
  init_point();
  init_geometry();
  init_real();
  init_serial();
  init_smallint();
  init_smallserial();
  init_text();
  init_time();
  init_timestamp();
  init_uuid();
  init_varchar();
  init_bit();
  init_halfvec();
  init_sparsevec();
  init_vector();
});

// node_modules/drizzle-orm/pg-core/indexes.js
var init_indexes = () => {};

// node_modules/drizzle-orm/pg-core/policies.js
var init_policies = () => {};

// node_modules/drizzle-orm/pg-core/primary-keys.js
var PrimaryKeyBuilder, PrimaryKey;
var init_primary_keys = __esm(() => {
  init_entity();
  init_table2();
  PrimaryKeyBuilder = class PrimaryKeyBuilder {
    static [entityKind] = "PgPrimaryKeyBuilder";
    columns;
    name;
    constructor(columns, name) {
      this.columns = columns;
      this.name = name;
    }
    build(table) {
      return new PrimaryKey(table, this.columns, this.name);
    }
  };
  PrimaryKey = class PrimaryKey {
    constructor(table, columns, name) {
      this.table = table;
      this.columns = columns;
      this.name = name;
    }
    static [entityKind] = "PgPrimaryKey";
    columns;
    name;
    getName() {
      return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
    }
  };
});

// node_modules/drizzle-orm/pg-core/view-common.js
var PgViewConfig;
var init_view_common2 = __esm(() => {
  PgViewConfig = Symbol.for("drizzle:PgViewConfig");
});

// node_modules/drizzle-orm/casing.js
function toSnakeCase(input) {
  const words = input.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.map((word) => word.toLowerCase()).join("_");
}
function toCamelCase(input) {
  const words = input.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.reduce((acc, word, i) => {
    const formattedWord = i === 0 ? word.toLowerCase() : `${word[0].toUpperCase()}${word.slice(1)}`;
    return acc + formattedWord;
  }, "");
}
function noopCase(input) {
  return input;
}
var CasingCache;
var init_casing = __esm(() => {
  init_entity();
  init_table();
  CasingCache = class CasingCache {
    static [entityKind] = "CasingCache";
    cache = {};
    cachedTables = {};
    convert;
    constructor(casing) {
      this.convert = casing === "snake_case" ? toSnakeCase : casing === "camelCase" ? toCamelCase : noopCase;
    }
    getColumnCasing(column) {
      if (!column.keyAsName)
        return column.name;
      const schema = column.table[Table.Symbol.Schema] ?? "public";
      const tableName = column.table[Table.Symbol.OriginalName];
      const key = `${schema}.${tableName}.${column.name}`;
      if (!this.cache[key]) {
        this.cacheTable(column.table);
      }
      return this.cache[key];
    }
    cacheTable(table) {
      const schema = table[Table.Symbol.Schema] ?? "public";
      const tableName = table[Table.Symbol.OriginalName];
      const tableKey = `${schema}.${tableName}`;
      if (!this.cachedTables[tableKey]) {
        for (const column of Object.values(table[Table.Symbol.Columns])) {
          const columnKey = `${tableKey}.${column.name}`;
          this.cache[columnKey] = this.convert(column.name);
        }
        this.cachedTables[tableKey] = true;
      }
    }
    clearCache() {
      this.cache = {};
      this.cachedTables = {};
    }
  };
});

// node_modules/drizzle-orm/errors.js
var DrizzleError, DrizzleQueryError, TransactionRollbackError;
var init_errors = __esm(() => {
  init_entity();
  DrizzleError = class DrizzleError extends Error {
    static [entityKind] = "DrizzleError";
    constructor({ message, cause }) {
      super(message);
      this.name = "DrizzleError";
      this.cause = cause;
    }
  };
  DrizzleQueryError = class DrizzleQueryError extends Error {
    constructor(query, params, cause) {
      super(`Failed query: ${query}
params: ${params}`);
      this.query = query;
      this.params = params;
      this.cause = cause;
      Error.captureStackTrace(this, DrizzleQueryError);
      if (cause)
        this.cause = cause;
    }
  };
  TransactionRollbackError = class TransactionRollbackError extends DrizzleError {
    static [entityKind] = "TransactionRollbackError";
    constructor() {
      super({ message: "Rollback" });
    }
  };
});

// node_modules/drizzle-orm/sql/expressions/conditions.js
function bindIfParam(value, column) {
  if (isDriverValueEncoder(column) && !isSQLWrapper(value) && !is2(value, Param) && !is2(value, Placeholder) && !is2(value, Column) && !is2(value, Table) && !is2(value, View)) {
    return new Param(value, column);
  }
  return value;
}
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c) => c !== undefined);
  if (conditions.length === 0) {
    return;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" and ")),
    new StringChunk(")")
  ]);
}
function or(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c) => c !== undefined);
  if (conditions.length === 0) {
    return;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" or ")),
    new StringChunk(")")
  ]);
}
function not(condition) {
  return sql`not ${condition}`;
}
function inArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`false`;
    }
    return sql`${column} in ${values.map((v2) => bindIfParam(v2, column))}`;
  }
  return sql`${column} in ${bindIfParam(values, column)}`;
}
function notInArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`true`;
    }
    return sql`${column} not in ${values.map((v2) => bindIfParam(v2, column))}`;
  }
  return sql`${column} not in ${bindIfParam(values, column)}`;
}
function isNull(value) {
  return sql`${value} is null`;
}
function isNotNull(value) {
  return sql`${value} is not null`;
}
function exists(subquery) {
  return sql`exists ${subquery}`;
}
function notExists(subquery) {
  return sql`not exists ${subquery}`;
}
function between(column, min, max) {
  return sql`${column} between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
}
function notBetween(column, min, max) {
  return sql`${column} not between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
}
function like(column, value) {
  return sql`${column} like ${value}`;
}
function notLike(column, value) {
  return sql`${column} not like ${value}`;
}
function ilike(column, value) {
  return sql`${column} ilike ${value}`;
}
function notIlike(column, value) {
  return sql`${column} not ilike ${value}`;
}
var eq = (left, right) => {
  return sql`${left} = ${bindIfParam(right, left)}`;
}, ne = (left, right) => {
  return sql`${left} <> ${bindIfParam(right, left)}`;
}, gt3 = (left, right) => {
  return sql`${left} > ${bindIfParam(right, left)}`;
}, gte = (left, right) => {
  return sql`${left} >= ${bindIfParam(right, left)}`;
}, lt = (left, right) => {
  return sql`${left} < ${bindIfParam(right, left)}`;
}, lte = (left, right) => {
  return sql`${left} <= ${bindIfParam(right, left)}`;
};
var init_conditions = __esm(() => {
  init_column();
  init_entity();
  init_table();
  init_sql();
});

// node_modules/drizzle-orm/sql/expressions/select.js
function asc(column) {
  return sql`${column} asc`;
}
function desc(column) {
  return sql`${column} desc`;
}
var init_select = __esm(() => {
  init_sql();
});

// node_modules/drizzle-orm/sql/expressions/index.js
var init_expressions = __esm(() => {
  init_conditions();
  init_select();
});

// node_modules/drizzle-orm/relations.js
function getOperators() {
  return {
    and,
    between,
    eq,
    exists,
    gt: gt3,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql
  };
}
function getOrderByOperators() {
  return {
    sql,
    asc,
    desc
  };
}
function extractTablesRelationalConfig(schema, configHelpers) {
  if (Object.keys(schema).length === 1 && "default" in schema && !is2(schema["default"], Table)) {
    schema = schema["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema)) {
    if (is2(value, Table)) {
      const dbName = getTableUniqueName(value);
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table.Symbol.Name],
        schema: value[Table.Symbol.Schema],
        columns: value[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column of Object.values(value[Table.Symbol.Columns])) {
        if (column.primary) {
          tablesConfig[key].primaryKey.push(column);
        }
      }
      const extraConfig = value[Table.Symbol.ExtraConfigBuilder]?.(value[Table.Symbol.ExtraConfigColumns]);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is2(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is2(value, Relations)) {
      const dbName = getTableUniqueName(value.table);
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(configHelpers(value.table));
      let primaryKey;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
          if (primaryKey) {
            tableConfig.primaryKey.push(...primaryKey);
          }
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
}
function createOne(sourceTable) {
  return function one(table, config) {
    return new One(sourceTable, table, config, config?.fields.reduce((res, f) => res && f.notNull, true) ?? false);
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config) {
    return new Many(sourceTable, referencedTable, config);
  };
}
function normalizeRelation(schema, tableNamesMap, relation) {
  if (is2(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[getTableUniqueName(relation.referencedTable)];
  if (!referencedTableTsName) {
    throw new Error(`Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`);
  }
  const referencedTableConfig = schema[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[getTableUniqueName(sourceTable)];
  if (!sourceTableTsName) {
    throw new Error(`Table "${sourceTable[Table.Symbol.Name]}" not found in schema`);
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(referencedTableConfig.relations)) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(`There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`) : new Error(`There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`);
  }
  if (reverseRelations[0] && is2(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(`There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`);
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value) => value) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is2(relation, One) ? subRows && mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRows, selectionItem.selection, mapColumnValue) : subRows.map((subRow) => mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRow, selectionItem.selection, mapColumnValue));
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is2(field, Column)) {
        decoder = field;
      } else if (is2(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value === null ? null : decoder.mapFromDriverValue(value);
    }
  }
  return result;
}
var Relation, Relations, One, Many;
var init_relations = __esm(() => {
  init_table();
  init_column();
  init_entity();
  init_primary_keys();
  init_expressions();
  init_sql();
  Relation = class Relation {
    constructor(sourceTable, referencedTable, relationName) {
      this.sourceTable = sourceTable;
      this.referencedTable = referencedTable;
      this.relationName = relationName;
      this.referencedTableName = referencedTable[Table.Symbol.Name];
    }
    static [entityKind] = "Relation";
    referencedTableName;
    fieldName;
  };
  Relations = class Relations {
    constructor(table, config) {
      this.table = table;
      this.config = config;
    }
    static [entityKind] = "Relations";
  };
  One = class One extends Relation {
    constructor(sourceTable, referencedTable, config, isNullable) {
      super(sourceTable, referencedTable, config?.relationName);
      this.config = config;
      this.isNullable = isNullable;
    }
    static [entityKind] = "One";
    withFieldName(fieldName) {
      const relation = new One(this.sourceTable, this.referencedTable, this.config, this.isNullable);
      relation.fieldName = fieldName;
      return relation;
    }
  };
  Many = class Many extends Relation {
    constructor(sourceTable, referencedTable, config) {
      super(sourceTable, referencedTable, config?.relationName);
      this.config = config;
    }
    static [entityKind] = "Many";
    withFieldName(fieldName) {
      const relation = new Many(this.sourceTable, this.referencedTable, this.config);
      relation.fieldName = fieldName;
      return relation;
    }
  };
});

// node_modules/drizzle-orm/sql/functions/aggregate.js
var init_aggregate = () => {};

// node_modules/drizzle-orm/sql/functions/vector.js
var init_vector2 = () => {};

// node_modules/drizzle-orm/sql/functions/index.js
var init_functions = __esm(() => {
  init_aggregate();
  init_vector2();
});

// node_modules/drizzle-orm/sql/index.js
var init_sql2 = __esm(() => {
  init_expressions();
  init_functions();
  init_sql();
});

// node_modules/drizzle-orm/pg-core/view-base.js
var PgViewBase;
var init_view_base = __esm(() => {
  init_entity();
  init_sql();
  PgViewBase = class PgViewBase extends View {
    static [entityKind] = "PgViewBase";
  };
});

// node_modules/drizzle-orm/pg-core/dialect.js
var PgDialect;
var init_dialect = __esm(() => {
  init_alias();
  init_casing();
  init_column();
  init_entity();
  init_errors();
  init_columns();
  init_table2();
  init_relations();
  init_sql2();
  init_sql();
  init_subquery();
  init_table();
  init_utils();
  init_view_common();
  init_view_base();
  PgDialect = class PgDialect {
    static [entityKind] = "PgDialect";
    casing;
    constructor(config) {
      this.casing = new CasingCache(config?.casing);
    }
    async migrate(migrations, session, config) {
      const migrationsTable = typeof config === "string" ? "__drizzle_migrations" : config.migrationsTable ?? "__drizzle_migrations";
      const migrationsSchema = typeof config === "string" ? "drizzle" : config.migrationsSchema ?? "drizzle";
      const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
      await session.execute(sql`CREATE SCHEMA IF NOT EXISTS ${sql.identifier(migrationsSchema)}`);
      await session.execute(migrationTableCreate);
      const dbMigrations = await session.all(sql`select id, hash, created_at from ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} order by created_at desc limit 1`);
      const lastDbMigration = dbMigrations[0];
      await session.transaction(async (tx) => {
        for await (const migration of migrations) {
          if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
            for (const stmt of migration.sql) {
              await tx.execute(sql.raw(stmt));
            }
            await tx.execute(sql`insert into ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`);
          }
        }
      });
    }
    escapeName(name) {
      return `"${name}"`;
    }
    escapeParam(num) {
      return `$${num + 1}`;
    }
    escapeString(str) {
      return `'${str.replace(/'/g, "''")}'`;
    }
    buildWithCTE(queries) {
      if (!queries?.length)
        return;
      const withSqlChunks = [sql`with `];
      for (const [i, w] of queries.entries()) {
        withSqlChunks.push(sql`${sql.identifier(w._.alias)} as (${w._.sql})`);
        if (i < queries.length - 1) {
          withSqlChunks.push(sql`, `);
        }
      }
      withSqlChunks.push(sql` `);
      return sql.join(withSqlChunks);
    }
    buildDeleteQuery({ table, where, returning, withList }) {
      const withSql = this.buildWithCTE(withList);
      const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : undefined;
      const whereSql = where ? sql` where ${where}` : undefined;
      return sql`${withSql}delete from ${table}${whereSql}${returningSql}`;
    }
    buildUpdateSet(table, set) {
      const tableColumns = table[Table.Symbol.Columns];
      const columnNames = Object.keys(tableColumns).filter((colName) => set[colName] !== undefined || tableColumns[colName]?.onUpdateFn !== undefined);
      const setSize = columnNames.length;
      return sql.join(columnNames.flatMap((colName, i) => {
        const col = tableColumns[colName];
        const onUpdateFnResult = col.onUpdateFn?.();
        const value = set[colName] ?? (is2(onUpdateFnResult, SQL) ? onUpdateFnResult : sql.param(onUpdateFnResult, col));
        const res = sql`${sql.identifier(this.casing.getColumnCasing(col))} = ${value}`;
        if (i < setSize - 1) {
          return [res, sql.raw(", ")];
        }
        return [res];
      }));
    }
    buildUpdateQuery({ table, set, where, returning, withList, from, joins }) {
      const withSql = this.buildWithCTE(withList);
      const tableName = table[PgTable.Symbol.Name];
      const tableSchema = table[PgTable.Symbol.Schema];
      const origTableName = table[PgTable.Symbol.OriginalName];
      const alias = tableName === origTableName ? undefined : tableName;
      const tableSql = sql`${tableSchema ? sql`${sql.identifier(tableSchema)}.` : undefined}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`}`;
      const setSql = this.buildUpdateSet(table, set);
      const fromSql = from && sql.join([sql.raw(" from "), this.buildFromTable(from)]);
      const joinsSql = this.buildJoins(joins);
      const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: !from })}` : undefined;
      const whereSql = where ? sql` where ${where}` : undefined;
      return sql`${withSql}update ${tableSql} set ${setSql}${fromSql}${joinsSql}${whereSql}${returningSql}`;
    }
    buildSelection(fields, { isSingleTable = false } = {}) {
      const columnsLen = fields.length;
      const chunks = fields.flatMap(({ field }, i) => {
        const chunk = [];
        if (is2(field, SQL.Aliased) && field.isSelectionField) {
          chunk.push(sql.identifier(field.fieldAlias));
        } else if (is2(field, SQL.Aliased) || is2(field, SQL)) {
          const query = is2(field, SQL.Aliased) ? field.sql : field;
          if (isSingleTable) {
            chunk.push(new SQL(query.queryChunks.map((c) => {
              if (is2(c, PgColumn)) {
                return sql.identifier(this.casing.getColumnCasing(c));
              }
              return c;
            })));
          } else {
            chunk.push(query);
          }
          if (is2(field, SQL.Aliased)) {
            chunk.push(sql` as ${sql.identifier(field.fieldAlias)}`);
          }
        } else if (is2(field, Column)) {
          if (isSingleTable) {
            chunk.push(sql.identifier(this.casing.getColumnCasing(field)));
          } else {
            chunk.push(field);
          }
        } else if (is2(field, Subquery)) {
          const entries = Object.entries(field._.selectedFields);
          if (entries.length === 1) {
            const entry = entries[0][1];
            const fieldDecoder = is2(entry, SQL) ? entry.decoder : is2(entry, Column) ? { mapFromDriverValue: (v2) => entry.mapFromDriverValue(v2) } : entry.sql.decoder;
            if (fieldDecoder) {
              field._.sql.decoder = fieldDecoder;
            }
          }
          chunk.push(field);
        }
        if (i < columnsLen - 1) {
          chunk.push(sql`, `);
        }
        return chunk;
      });
      return sql.join(chunks);
    }
    buildJoins(joins) {
      if (!joins || joins.length === 0) {
        return;
      }
      const joinsArray = [];
      for (const [index, joinMeta] of joins.entries()) {
        if (index === 0) {
          joinsArray.push(sql` `);
        }
        const table = joinMeta.table;
        const lateralSql = joinMeta.lateral ? sql` lateral` : undefined;
        const onSql = joinMeta.on ? sql` on ${joinMeta.on}` : undefined;
        if (is2(table, PgTable)) {
          const tableName = table[PgTable.Symbol.Name];
          const tableSchema = table[PgTable.Symbol.Schema];
          const origTableName = table[PgTable.Symbol.OriginalName];
          const alias = tableName === origTableName ? undefined : joinMeta.alias;
          joinsArray.push(sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : undefined}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`}${onSql}`);
        } else if (is2(table, View)) {
          const viewName = table[ViewBaseConfig].name;
          const viewSchema = table[ViewBaseConfig].schema;
          const origViewName = table[ViewBaseConfig].originalName;
          const alias = viewName === origViewName ? undefined : joinMeta.alias;
          joinsArray.push(sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql`${sql.identifier(viewSchema)}.` : undefined}${sql.identifier(origViewName)}${alias && sql` ${sql.identifier(alias)}`}${onSql}`);
        } else {
          joinsArray.push(sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${table}${onSql}`);
        }
        if (index < joins.length - 1) {
          joinsArray.push(sql` `);
        }
      }
      return sql.join(joinsArray);
    }
    buildFromTable(table) {
      if (is2(table, Table) && table[Table.Symbol.IsAlias]) {
        let fullName = sql`${sql.identifier(table[Table.Symbol.OriginalName])}`;
        if (table[Table.Symbol.Schema]) {
          fullName = sql`${sql.identifier(table[Table.Symbol.Schema])}.${fullName}`;
        }
        return sql`${fullName} ${sql.identifier(table[Table.Symbol.Name])}`;
      }
      return table;
    }
    buildSelectQuery({
      withList,
      fields,
      fieldsFlat,
      where,
      having,
      table,
      joins,
      orderBy,
      groupBy,
      limit,
      offset,
      lockingClause,
      distinct,
      setOperators
    }) {
      const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
      for (const f of fieldsList) {
        if (is2(f.field, Column) && getTableName(f.field.table) !== (is2(table, Subquery) ? table._.alias : is2(table, PgViewBase) ? table[ViewBaseConfig].name : is2(table, SQL) ? undefined : getTableName(table)) && !((table2) => joins?.some(({ alias }) => alias === (table2[Table.Symbol.IsAlias] ? getTableName(table2) : table2[Table.Symbol.BaseName])))(f.field.table)) {
          const tableName = getTableName(f.field.table);
          throw new Error(`Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`);
        }
      }
      const isSingleTable = !joins || joins.length === 0;
      const withSql = this.buildWithCTE(withList);
      let distinctSql;
      if (distinct) {
        distinctSql = distinct === true ? sql` distinct` : sql` distinct on (${sql.join(distinct.on, sql`, `)})`;
      }
      const selection = this.buildSelection(fieldsList, { isSingleTable });
      const tableSql = this.buildFromTable(table);
      const joinsSql = this.buildJoins(joins);
      const whereSql = where ? sql` where ${where}` : undefined;
      const havingSql = having ? sql` having ${having}` : undefined;
      let orderBySql;
      if (orderBy && orderBy.length > 0) {
        orderBySql = sql` order by ${sql.join(orderBy, sql`, `)}`;
      }
      let groupBySql;
      if (groupBy && groupBy.length > 0) {
        groupBySql = sql` group by ${sql.join(groupBy, sql`, `)}`;
      }
      const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? sql` limit ${limit}` : undefined;
      const offsetSql = offset ? sql` offset ${offset}` : undefined;
      const lockingClauseSql = sql.empty();
      if (lockingClause) {
        const clauseSql = sql` for ${sql.raw(lockingClause.strength)}`;
        if (lockingClause.config.of) {
          clauseSql.append(sql` of ${sql.join(Array.isArray(lockingClause.config.of) ? lockingClause.config.of : [lockingClause.config.of], sql`, `)}`);
        }
        if (lockingClause.config.noWait) {
          clauseSql.append(sql` nowait`);
        } else if (lockingClause.config.skipLocked) {
          clauseSql.append(sql` skip locked`);
        }
        lockingClauseSql.append(clauseSql);
      }
      const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
      if (setOperators.length > 0) {
        return this.buildSetOperations(finalQuery, setOperators);
      }
      return finalQuery;
    }
    buildSetOperations(leftSelect, setOperators) {
      const [setOperator, ...rest] = setOperators;
      if (!setOperator) {
        throw new Error("Cannot pass undefined values to any set operator");
      }
      if (rest.length === 0) {
        return this.buildSetOperationQuery({ leftSelect, setOperator });
      }
      return this.buildSetOperations(this.buildSetOperationQuery({ leftSelect, setOperator }), rest);
    }
    buildSetOperationQuery({
      leftSelect,
      setOperator: { type, isAll, rightSelect, limit, orderBy, offset }
    }) {
      const leftChunk = sql`(${leftSelect.getSQL()}) `;
      const rightChunk = sql`(${rightSelect.getSQL()})`;
      let orderBySql;
      if (orderBy && orderBy.length > 0) {
        const orderByValues = [];
        for (const singleOrderBy of orderBy) {
          if (is2(singleOrderBy, PgColumn)) {
            orderByValues.push(sql.identifier(singleOrderBy.name));
          } else if (is2(singleOrderBy, SQL)) {
            for (let i = 0;i < singleOrderBy.queryChunks.length; i++) {
              const chunk = singleOrderBy.queryChunks[i];
              if (is2(chunk, PgColumn)) {
                singleOrderBy.queryChunks[i] = sql.identifier(chunk.name);
              }
            }
            orderByValues.push(sql`${singleOrderBy}`);
          } else {
            orderByValues.push(sql`${singleOrderBy}`);
          }
        }
        orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)} `;
      }
      const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? sql` limit ${limit}` : undefined;
      const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
      const offsetSql = offset ? sql` offset ${offset}` : undefined;
      return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
    }
    buildInsertQuery({ table, values: valuesOrSelect, onConflict, returning, withList, select: select2, overridingSystemValue_ }) {
      const valuesSqlList = [];
      const columns = table[Table.Symbol.Columns];
      const colEntries = Object.entries(columns).filter(([_, col]) => !col.shouldDisableInsert());
      const insertOrder = colEntries.map(([, column]) => sql.identifier(this.casing.getColumnCasing(column)));
      if (select2) {
        const select22 = valuesOrSelect;
        if (is2(select22, SQL)) {
          valuesSqlList.push(select22);
        } else {
          valuesSqlList.push(select22.getSQL());
        }
      } else {
        const values = valuesOrSelect;
        valuesSqlList.push(sql.raw("values "));
        for (const [valueIndex, value] of values.entries()) {
          const valueList = [];
          for (const [fieldName, col] of colEntries) {
            const colValue = value[fieldName];
            if (colValue === undefined || is2(colValue, Param) && colValue.value === undefined) {
              if (col.defaultFn !== undefined) {
                const defaultFnResult = col.defaultFn();
                const defaultValue = is2(defaultFnResult, SQL) ? defaultFnResult : sql.param(defaultFnResult, col);
                valueList.push(defaultValue);
              } else if (!col.default && col.onUpdateFn !== undefined) {
                const onUpdateFnResult = col.onUpdateFn();
                const newValue = is2(onUpdateFnResult, SQL) ? onUpdateFnResult : sql.param(onUpdateFnResult, col);
                valueList.push(newValue);
              } else {
                valueList.push(sql`default`);
              }
            } else {
              valueList.push(colValue);
            }
          }
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push(sql`, `);
          }
        }
      }
      const withSql = this.buildWithCTE(withList);
      const valuesSql = sql.join(valuesSqlList);
      const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : undefined;
      const onConflictSql = onConflict ? sql` on conflict ${onConflict}` : undefined;
      const overridingSql = overridingSystemValue_ === true ? sql`overriding system value ` : undefined;
      return sql`${withSql}insert into ${table} ${insertOrder} ${overridingSql}${valuesSql}${onConflictSql}${returningSql}`;
    }
    buildRefreshMaterializedViewQuery({ view, concurrently, withNoData }) {
      const concurrentlySql = concurrently ? sql` concurrently` : undefined;
      const withNoDataSql = withNoData ? sql` with no data` : undefined;
      return sql`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
    }
    prepareTyping(encoder) {
      if (is2(encoder, PgJsonb) || is2(encoder, PgJson)) {
        return "json";
      } else if (is2(encoder, PgNumeric)) {
        return "decimal";
      } else if (is2(encoder, PgTime)) {
        return "time";
      } else if (is2(encoder, PgTimestamp) || is2(encoder, PgTimestampString)) {
        return "timestamp";
      } else if (is2(encoder, PgDate) || is2(encoder, PgDateString)) {
        return "date";
      } else if (is2(encoder, PgUUID)) {
        return "uuid";
      } else {
        return "none";
      }
    }
    sqlToQuery(sql22, invokeSource) {
      return sql22.toQuery({
        casing: this.casing,
        escapeName: this.escapeName,
        escapeParam: this.escapeParam,
        escapeString: this.escapeString,
        prepareTyping: this.prepareTyping,
        invokeSource
      });
    }
    buildRelationalQueryWithoutPK({
      fullSchema,
      schema,
      tableNamesMap,
      table,
      tableConfig,
      queryConfig: config,
      tableAlias,
      nestedQueryRelation,
      joinOn
    }) {
      let selection = [];
      let limit, offset, orderBy = [], where;
      const joins = [];
      if (config === true) {
        const selectionEntries = Object.entries(tableConfig.columns);
        selection = selectionEntries.map(([key, value]) => ({
          dbKey: value.name,
          tsKey: key,
          field: aliasedTableColumn(value, tableAlias),
          relationTableTsKey: undefined,
          isJson: false,
          selection: []
        }));
      } else {
        const aliasedColumns = Object.fromEntries(Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]));
        if (config.where) {
          const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
          where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
        }
        const fieldsSelection = [];
        let selectedColumns = [];
        if (config.columns) {
          let isIncludeMode = false;
          for (const [field, value] of Object.entries(config.columns)) {
            if (value === undefined) {
              continue;
            }
            if (field in tableConfig.columns) {
              if (!isIncludeMode && value === true) {
                isIncludeMode = true;
              }
              selectedColumns.push(field);
            }
          }
          if (selectedColumns.length > 0) {
            selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
          }
        } else {
          selectedColumns = Object.keys(tableConfig.columns);
        }
        for (const field of selectedColumns) {
          const column = tableConfig.columns[field];
          fieldsSelection.push({ tsKey: field, value: column });
        }
        let selectedRelations = [];
        if (config.with) {
          selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
        }
        let extras;
        if (config.extras) {
          extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql }) : config.extras;
          for (const [tsKey, value] of Object.entries(extras)) {
            fieldsSelection.push({
              tsKey,
              value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
            });
          }
        }
        for (const { tsKey, value } of fieldsSelection) {
          selection.push({
            dbKey: is2(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
            tsKey,
            field: is2(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
            relationTableTsKey: undefined,
            isJson: false,
            selection: []
          });
        }
        let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
        if (!Array.isArray(orderByOrig)) {
          orderByOrig = [orderByOrig];
        }
        orderBy = orderByOrig.map((orderByValue) => {
          if (is2(orderByValue, Column)) {
            return aliasedTableColumn(orderByValue, tableAlias);
          }
          return mapColumnsInSQLToAlias(orderByValue, tableAlias);
        });
        limit = config.limit;
        offset = config.offset;
        for (const {
          tsKey: selectedRelationTsKey,
          queryConfig: selectedRelationConfigValue,
          relation
        } of selectedRelations) {
          const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
          const relationTableName = getTableUniqueName(relation.referencedTable);
          const relationTableTsName = tableNamesMap[relationTableName];
          const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
          const joinOn2 = and(...normalizedRelation.fields.map((field2, i) => eq(aliasedTableColumn(normalizedRelation.references[i], relationTableAlias), aliasedTableColumn(field2, tableAlias))));
          const builtRelation = this.buildRelationalQueryWithoutPK({
            fullSchema,
            schema,
            tableNamesMap,
            table: fullSchema[relationTableTsName],
            tableConfig: schema[relationTableTsName],
            queryConfig: is2(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
            tableAlias: relationTableAlias,
            joinOn: joinOn2,
            nestedQueryRelation: relation
          });
          const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier("data")}`.as(selectedRelationTsKey);
          joins.push({
            on: sql`true`,
            table: new Subquery(builtRelation.sql, {}, relationTableAlias),
            alias: relationTableAlias,
            joinType: "left",
            lateral: true
          });
          selection.push({
            dbKey: selectedRelationTsKey,
            tsKey: selectedRelationTsKey,
            field,
            relationTableTsKey: relationTableTsName,
            isJson: true,
            selection: builtRelation.selection
          });
        }
      }
      if (selection.length === 0) {
        throw new DrizzleError({ message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")` });
      }
      let result;
      where = and(joinOn, where);
      if (nestedQueryRelation) {
        let field = sql`json_build_array(${sql.join(selection.map(({ field: field2, tsKey, isJson }) => isJson ? sql`${sql.identifier(`${tableAlias}_${tsKey}`)}.${sql.identifier("data")}` : is2(field2, SQL.Aliased) ? field2.sql : field2), sql`, `)})`;
        if (is2(nestedQueryRelation, Many)) {
          field = sql`coalesce(json_agg(${field}${orderBy.length > 0 ? sql` order by ${sql.join(orderBy, sql`, `)}` : undefined}), '[]'::json)`;
        }
        const nestedSelection = [{
          dbKey: "data",
          tsKey: "data",
          field: field.as("data"),
          isJson: true,
          relationTableTsKey: tableConfig.tsName,
          selection
        }];
        const needsSubquery = limit !== undefined || offset !== undefined || orderBy.length > 0;
        if (needsSubquery) {
          result = this.buildSelectQuery({
            table: aliasedTable(table, tableAlias),
            fields: {},
            fieldsFlat: [{
              path: [],
              field: sql.raw("*")
            }],
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
          where = undefined;
          limit = undefined;
          offset = undefined;
          orderBy = [];
        } else {
          result = aliasedTable(table, tableAlias);
        }
        result = this.buildSelectQuery({
          table: is2(result, PgTable) ? result : new Subquery(result, {}, tableAlias),
          fields: {},
          fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
            path: [],
            field: is2(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
          })),
          joins,
          where,
          limit,
          offset,
          orderBy,
          setOperators: []
        });
      } else {
        result = this.buildSelectQuery({
          table: aliasedTable(table, tableAlias),
          fields: {},
          fieldsFlat: selection.map(({ field }) => ({
            path: [],
            field: is2(field, Column) ? aliasedTableColumn(field, tableAlias) : field
          })),
          joins,
          where,
          limit,
          offset,
          orderBy,
          setOperators: []
        });
      }
      return {
        tableTsKey: tableConfig.tsName,
        sql: result,
        selection
      };
    }
  };
});

// node_modules/drizzle-orm/query-builders/query-builder.js
var TypedQueryBuilder;
var init_query_builder = __esm(() => {
  init_entity();
  TypedQueryBuilder = class TypedQueryBuilder {
    static [entityKind] = "TypedQueryBuilder";
    getSelectedFields() {
      return this._.selectedFields;
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/select.js
function createSetOperator(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select2) => ({
      type,
      isAll,
      rightSelect: select2
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var PgSelectBuilder, PgSelectQueryBuilderBase, PgSelectBase, getPgSetOperators = () => ({
  union,
  unionAll,
  intersect,
  intersectAll,
  except,
  exceptAll
}), union, unionAll, intersect, intersectAll, except, exceptAll;
var init_select2 = __esm(() => {
  init_entity();
  init_view_base();
  init_query_builder();
  init_query_promise();
  init_selection_proxy();
  init_sql();
  init_subquery();
  init_table();
  init_tracing();
  init_utils();
  init_utils();
  init_view_common();
  init_utils3();
  PgSelectBuilder = class PgSelectBuilder {
    static [entityKind] = "PgSelectBuilder";
    fields;
    session;
    dialect;
    withList = [];
    distinct;
    constructor(config) {
      this.fields = config.fields;
      this.session = config.session;
      this.dialect = config.dialect;
      if (config.withList) {
        this.withList = config.withList;
      }
      this.distinct = config.distinct;
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    from(source) {
      const isPartialSelect = !!this.fields;
      const src = source;
      let fields;
      if (this.fields) {
        fields = this.fields;
      } else if (is2(src, Subquery)) {
        fields = Object.fromEntries(Object.keys(src._.selectedFields).map((key) => [key, src[key]]));
      } else if (is2(src, PgViewBase)) {
        fields = src[ViewBaseConfig].selectedFields;
      } else if (is2(src, SQL)) {
        fields = {};
      } else {
        fields = getTableColumns(src);
      }
      return new PgSelectBase({
        table: src,
        fields,
        isPartialSelect,
        session: this.session,
        dialect: this.dialect,
        withList: this.withList,
        distinct: this.distinct
      }).setToken(this.authToken);
    }
  };
  PgSelectQueryBuilderBase = class PgSelectQueryBuilderBase extends TypedQueryBuilder {
    static [entityKind] = "PgSelectQueryBuilder";
    _;
    config;
    joinsNotNullableMap;
    tableName;
    isPartialSelect;
    session;
    dialect;
    cacheConfig = undefined;
    usedTables = /* @__PURE__ */ new Set;
    constructor({ table, fields, isPartialSelect, session, dialect, withList, distinct }) {
      super();
      this.config = {
        withList,
        table,
        fields: { ...fields },
        distinct,
        setOperators: []
      };
      this.isPartialSelect = isPartialSelect;
      this.session = session;
      this.dialect = dialect;
      this._ = {
        selectedFields: fields,
        config: this.config
      };
      this.tableName = getTableLikeName(table);
      this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      for (const item of extractUsedTable(table))
        this.usedTables.add(item);
    }
    getUsedTables() {
      return [...this.usedTables];
    }
    createJoin(joinType, lateral) {
      return (table, on) => {
        const baseTableName = this.tableName;
        const tableName = getTableLikeName(table);
        for (const item of extractUsedTable(table))
          this.usedTables.add(item);
        if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
          throw new Error(`Alias "${tableName}" is already used in this query`);
        }
        if (!this.isPartialSelect) {
          if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
            this.config.fields = {
              [baseTableName]: this.config.fields
            };
          }
          if (typeof tableName === "string" && !is2(table, SQL)) {
            const selection = is2(table, Subquery) ? table._.selectedFields : is2(table, View) ? table[ViewBaseConfig].selectedFields : table[Table.Symbol.Columns];
            this.config.fields[tableName] = selection;
          }
        }
        if (typeof on === "function") {
          on = on(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
        }
        if (!this.config.joins) {
          this.config.joins = [];
        }
        this.config.joins.push({ on, table, joinType, alias: tableName, lateral });
        if (typeof tableName === "string") {
          switch (joinType) {
            case "left": {
              this.joinsNotNullableMap[tableName] = false;
              break;
            }
            case "right": {
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
              this.joinsNotNullableMap[tableName] = true;
              break;
            }
            case "cross":
            case "inner": {
              this.joinsNotNullableMap[tableName] = true;
              break;
            }
            case "full": {
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
              this.joinsNotNullableMap[tableName] = false;
              break;
            }
          }
        }
        return this;
      };
    }
    leftJoin = this.createJoin("left", false);
    leftJoinLateral = this.createJoin("left", true);
    rightJoin = this.createJoin("right", false);
    innerJoin = this.createJoin("inner", false);
    innerJoinLateral = this.createJoin("inner", true);
    fullJoin = this.createJoin("full", false);
    crossJoin = this.createJoin("cross", false);
    crossJoinLateral = this.createJoin("cross", true);
    createSetOperator(type, isAll) {
      return (rightSelection) => {
        const rightSelect = typeof rightSelection === "function" ? rightSelection(getPgSetOperators()) : rightSelection;
        if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
          throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
        }
        this.config.setOperators.push({ type, isAll, rightSelect });
        return this;
      };
    }
    union = this.createSetOperator("union", false);
    unionAll = this.createSetOperator("union", true);
    intersect = this.createSetOperator("intersect", false);
    intersectAll = this.createSetOperator("intersect", true);
    except = this.createSetOperator("except", false);
    exceptAll = this.createSetOperator("except", true);
    addSetOperators(setOperators) {
      this.config.setOperators.push(...setOperators);
      return this;
    }
    where(where) {
      if (typeof where === "function") {
        where = where(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
      }
      this.config.where = where;
      return this;
    }
    having(having) {
      if (typeof having === "function") {
        having = having(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
      }
      this.config.having = having;
      return this;
    }
    groupBy(...columns) {
      if (typeof columns[0] === "function") {
        const groupBy = columns[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
        this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
      } else {
        this.config.groupBy = columns;
      }
      return this;
    }
    orderBy(...columns) {
      if (typeof columns[0] === "function") {
        const orderBy = columns[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
        const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).orderBy = orderByArray;
        } else {
          this.config.orderBy = orderByArray;
        }
      } else {
        const orderByArray = columns;
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).orderBy = orderByArray;
        } else {
          this.config.orderBy = orderByArray;
        }
      }
      return this;
    }
    limit(limit) {
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).limit = limit;
      } else {
        this.config.limit = limit;
      }
      return this;
    }
    offset(offset) {
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).offset = offset;
      } else {
        this.config.offset = offset;
      }
      return this;
    }
    for(strength, config = {}) {
      this.config.lockingClause = { strength, config };
      return this;
    }
    getSQL() {
      return this.dialect.buildSelectQuery(this.config);
    }
    toSQL() {
      const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
      return rest;
    }
    as(alias) {
      const usedTables = [];
      usedTables.push(...extractUsedTable(this.config.table));
      if (this.config.joins) {
        for (const it2 of this.config.joins)
          usedTables.push(...extractUsedTable(it2.table));
      }
      return new Proxy(new Subquery(this.getSQL(), this.config.fields, alias, false, [...new Set(usedTables)]), new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
    }
    getSelectedFields() {
      return new Proxy(this.config.fields, new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
    }
    $dynamic() {
      return this;
    }
    $withCache(config) {
      this.cacheConfig = config === undefined ? { config: {}, enable: true, autoInvalidate: true } : config === false ? { enable: false } : { enable: true, autoInvalidate: true, ...config };
      return this;
    }
  };
  PgSelectBase = class PgSelectBase extends PgSelectQueryBuilderBase {
    static [entityKind] = "PgSelect";
    _prepare(name) {
      const { session, config, dialect, joinsNotNullableMap, authToken, cacheConfig, usedTables } = this;
      if (!session) {
        throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
      }
      const { fields } = config;
      return tracer.startActiveSpan("drizzle.prepareQuery", () => {
        const fieldsList = orderSelectedFields(fields);
        const query = session.prepareQuery(dialect.sqlToQuery(this.getSQL()), fieldsList, name, true, undefined, {
          type: "select",
          tables: [...usedTables]
        }, cacheConfig);
        query.joinsNotNullableMap = joinsNotNullableMap;
        return query.setToken(authToken);
      });
    }
    prepare(name) {
      return this._prepare(name);
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute = (placeholderValues) => {
      return tracer.startActiveSpan("drizzle.operation", () => {
        return this._prepare().execute(placeholderValues, this.authToken);
      });
    };
  };
  applyMixins(PgSelectBase, [QueryPromise]);
  union = createSetOperator("union", false);
  unionAll = createSetOperator("union", true);
  intersect = createSetOperator("intersect", false);
  intersectAll = createSetOperator("intersect", true);
  except = createSetOperator("except", false);
  exceptAll = createSetOperator("except", true);
});

// node_modules/drizzle-orm/pg-core/query-builders/query-builder.js
var QueryBuilder;
var init_query_builder2 = __esm(() => {
  init_entity();
  init_dialect();
  init_selection_proxy();
  init_subquery();
  init_select2();
  QueryBuilder = class QueryBuilder {
    static [entityKind] = "PgQueryBuilder";
    dialect;
    dialectConfig;
    constructor(dialect) {
      this.dialect = is2(dialect, PgDialect) ? dialect : undefined;
      this.dialectConfig = is2(dialect, PgDialect) ? undefined : dialect;
    }
    $with = (alias, selection) => {
      const queryBuilder = this;
      const as2 = (qb) => {
        if (typeof qb === "function") {
          qb = qb(queryBuilder);
        }
        return new Proxy(new WithSubquery(qb.getSQL(), selection ?? ("getSelectedFields" in qb ? qb.getSelectedFields() ?? {} : {}), alias, true), new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      };
      return { as: as2 };
    };
    with(...queries) {
      const self = this;
      function select2(fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: undefined,
          dialect: self.getDialect(),
          withList: queries
        });
      }
      function selectDistinct(fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: undefined,
          dialect: self.getDialect(),
          distinct: true
        });
      }
      function selectDistinctOn(on, fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: undefined,
          dialect: self.getDialect(),
          distinct: { on }
        });
      }
      return { select: select2, selectDistinct, selectDistinctOn };
    }
    select(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: this.getDialect()
      });
    }
    selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: this.getDialect(),
        distinct: true
      });
    }
    selectDistinctOn(on, fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: this.getDialect(),
        distinct: { on }
      });
    }
    getDialect() {
      if (!this.dialect) {
        this.dialect = new PgDialect(this.dialectConfig);
      }
      return this.dialect;
    }
  };
});

// node_modules/drizzle-orm/pg-core/view.js
var PgMaterializedViewConfig;
var init_view = __esm(() => {
  PgMaterializedViewConfig = Symbol.for("drizzle:PgMaterializedViewConfig");
});

// node_modules/drizzle-orm/pg-core/utils.js
function extractUsedTable(table) {
  if (is2(table, PgTable)) {
    return [table[Schema] ? `${table[Schema]}.${table[Table.Symbol.BaseName]}` : table[Table.Symbol.BaseName]];
  }
  if (is2(table, Subquery)) {
    return table._.usedTables ?? [];
  }
  if (is2(table, SQL)) {
    return table.usedTables ?? [];
  }
  return [];
}
var init_utils3 = __esm(() => {
  init_entity();
  init_table2();
  init_sql();
  init_subquery();
  init_table();
});

// node_modules/drizzle-orm/pg-core/query-builders/delete.js
var PgDeleteBase;
var init_delete = __esm(() => {
  init_entity();
  init_query_promise();
  init_selection_proxy();
  init_table();
  init_tracing();
  init_utils();
  init_utils3();
  PgDeleteBase = class PgDeleteBase extends QueryPromise {
    constructor(table, session, dialect, withList) {
      super();
      this.session = session;
      this.dialect = dialect;
      this.config = { table, withList };
    }
    static [entityKind] = "PgDelete";
    config;
    cacheConfig;
    where(where) {
      this.config.where = where;
      return this;
    }
    returning(fields = this.config.table[Table.Symbol.Columns]) {
      this.config.returningFields = fields;
      this.config.returning = orderSelectedFields(fields);
      return this;
    }
    getSQL() {
      return this.dialect.buildDeleteQuery(this.config);
    }
    toSQL() {
      const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
      return rest;
    }
    _prepare(name) {
      return tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true, undefined, {
          type: "delete",
          tables: extractUsedTable(this.config.table)
        }, this.cacheConfig);
      });
    }
    prepare(name) {
      return this._prepare(name);
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute = (placeholderValues) => {
      return tracer.startActiveSpan("drizzle.operation", () => {
        return this._prepare().execute(placeholderValues, this.authToken);
      });
    };
    getSelectedFields() {
      return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
        alias: getTableName(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })) : undefined;
    }
    $dynamic() {
      return this;
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/insert.js
var PgInsertBuilder, PgInsertBase;
var init_insert = __esm(() => {
  init_entity();
  init_query_promise();
  init_selection_proxy();
  init_sql();
  init_table();
  init_tracing();
  init_utils();
  init_utils3();
  init_query_builder2();
  PgInsertBuilder = class PgInsertBuilder {
    constructor(table, session, dialect, withList, overridingSystemValue_) {
      this.table = table;
      this.session = session;
      this.dialect = dialect;
      this.withList = withList;
      this.overridingSystemValue_ = overridingSystemValue_;
    }
    static [entityKind] = "PgInsertBuilder";
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    overridingSystemValue() {
      this.overridingSystemValue_ = true;
      return this;
    }
    values(values) {
      values = Array.isArray(values) ? values : [values];
      if (values.length === 0) {
        throw new Error("values() must be called with at least one value");
      }
      const mappedValues = values.map((entry) => {
        const result = {};
        const cols = this.table[Table.Symbol.Columns];
        for (const colKey of Object.keys(entry)) {
          const colValue = entry[colKey];
          result[colKey] = is2(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
        }
        return result;
      });
      return new PgInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList, false, this.overridingSystemValue_).setToken(this.authToken);
    }
    select(selectQuery) {
      const select2 = typeof selectQuery === "function" ? selectQuery(new QueryBuilder) : selectQuery;
      if (!is2(select2, SQL) && !haveSameKeys(this.table[Columns], select2._.selectedFields)) {
        throw new Error("Insert select error: selected fields are not the same or are in a different order compared to the table definition");
      }
      return new PgInsertBase(this.table, select2, this.session, this.dialect, this.withList, true);
    }
  };
  PgInsertBase = class PgInsertBase extends QueryPromise {
    constructor(table, values, session, dialect, withList, select2, overridingSystemValue_) {
      super();
      this.session = session;
      this.dialect = dialect;
      this.config = { table, values, withList, select: select2, overridingSystemValue_ };
    }
    static [entityKind] = "PgInsert";
    config;
    cacheConfig;
    returning(fields = this.config.table[Table.Symbol.Columns]) {
      this.config.returningFields = fields;
      this.config.returning = orderSelectedFields(fields);
      return this;
    }
    onConflictDoNothing(config = {}) {
      if (config.target === undefined) {
        this.config.onConflict = sql`do nothing`;
      } else {
        let targetColumn = "";
        targetColumn = Array.isArray(config.target) ? config.target.map((it2) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(it2))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(config.target));
        const whereSql = config.where ? sql` where ${config.where}` : undefined;
        this.config.onConflict = sql`(${sql.raw(targetColumn)})${whereSql} do nothing`;
      }
      return this;
    }
    onConflictDoUpdate(config) {
      if (config.where && (config.targetWhere || config.setWhere)) {
        throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');
      }
      const whereSql = config.where ? sql` where ${config.where}` : undefined;
      const targetWhereSql = config.targetWhere ? sql` where ${config.targetWhere}` : undefined;
      const setWhereSql = config.setWhere ? sql` where ${config.setWhere}` : undefined;
      const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config.set));
      let targetColumn = "";
      targetColumn = Array.isArray(config.target) ? config.target.map((it2) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(it2))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(config.target));
      this.config.onConflict = sql`(${sql.raw(targetColumn)})${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
      return this;
    }
    getSQL() {
      return this.dialect.buildInsertQuery(this.config);
    }
    toSQL() {
      const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
      return rest;
    }
    _prepare(name) {
      return tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true, undefined, {
          type: "insert",
          tables: extractUsedTable(this.config.table)
        }, this.cacheConfig);
      });
    }
    prepare(name) {
      return this._prepare(name);
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute = (placeholderValues) => {
      return tracer.startActiveSpan("drizzle.operation", () => {
        return this._prepare().execute(placeholderValues, this.authToken);
      });
    };
    getSelectedFields() {
      return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
        alias: getTableName(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })) : undefined;
    }
    $dynamic() {
      return this;
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js
var PgRefreshMaterializedView;
var init_refresh_materialized_view = __esm(() => {
  init_entity();
  init_query_promise();
  init_tracing();
  PgRefreshMaterializedView = class PgRefreshMaterializedView extends QueryPromise {
    constructor(view, session, dialect) {
      super();
      this.session = session;
      this.dialect = dialect;
      this.config = { view };
    }
    static [entityKind] = "PgRefreshMaterializedView";
    config;
    concurrently() {
      if (this.config.withNoData !== undefined) {
        throw new Error("Cannot use concurrently and withNoData together");
      }
      this.config.concurrently = true;
      return this;
    }
    withNoData() {
      if (this.config.concurrently !== undefined) {
        throw new Error("Cannot use concurrently and withNoData together");
      }
      this.config.withNoData = true;
      return this;
    }
    getSQL() {
      return this.dialect.buildRefreshMaterializedViewQuery(this.config);
    }
    toSQL() {
      const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
      return rest;
    }
    _prepare(name) {
      return tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), undefined, name, true);
      });
    }
    prepare(name) {
      return this._prepare(name);
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute = (placeholderValues) => {
      return tracer.startActiveSpan("drizzle.operation", () => {
        return this._prepare().execute(placeholderValues, this.authToken);
      });
    };
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/update.js
var PgUpdateBuilder, PgUpdateBase;
var init_update = __esm(() => {
  init_entity();
  init_table2();
  init_query_promise();
  init_selection_proxy();
  init_sql();
  init_subquery();
  init_table();
  init_utils();
  init_view_common();
  init_utils3();
  PgUpdateBuilder = class PgUpdateBuilder {
    constructor(table, session, dialect, withList) {
      this.table = table;
      this.session = session;
      this.dialect = dialect;
      this.withList = withList;
    }
    static [entityKind] = "PgUpdateBuilder";
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    set(values) {
      return new PgUpdateBase(this.table, mapUpdateSet(this.table, values), this.session, this.dialect, this.withList).setToken(this.authToken);
    }
  };
  PgUpdateBase = class PgUpdateBase extends QueryPromise {
    constructor(table, set, session, dialect, withList) {
      super();
      this.session = session;
      this.dialect = dialect;
      this.config = { set, table, withList, joins: [] };
      this.tableName = getTableLikeName(table);
      this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
    }
    static [entityKind] = "PgUpdate";
    config;
    tableName;
    joinsNotNullableMap;
    cacheConfig;
    from(source) {
      const src = source;
      const tableName = getTableLikeName(src);
      if (typeof tableName === "string") {
        this.joinsNotNullableMap[tableName] = true;
      }
      this.config.from = src;
      return this;
    }
    getTableLikeFields(table) {
      if (is2(table, PgTable)) {
        return table[Table.Symbol.Columns];
      } else if (is2(table, Subquery)) {
        return table._.selectedFields;
      }
      return table[ViewBaseConfig].selectedFields;
    }
    createJoin(joinType) {
      return (table, on) => {
        const tableName = getTableLikeName(table);
        if (typeof tableName === "string" && this.config.joins.some((join) => join.alias === tableName)) {
          throw new Error(`Alias "${tableName}" is already used in this query`);
        }
        if (typeof on === "function") {
          const from = this.config.from && !is2(this.config.from, SQL) ? this.getTableLikeFields(this.config.from) : undefined;
          on = on(new Proxy(this.config.table[Table.Symbol.Columns], new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })), from && new Proxy(from, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
        }
        this.config.joins.push({ on, table, joinType, alias: tableName });
        if (typeof tableName === "string") {
          switch (joinType) {
            case "left": {
              this.joinsNotNullableMap[tableName] = false;
              break;
            }
            case "right": {
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
              this.joinsNotNullableMap[tableName] = true;
              break;
            }
            case "inner": {
              this.joinsNotNullableMap[tableName] = true;
              break;
            }
            case "full": {
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
              this.joinsNotNullableMap[tableName] = false;
              break;
            }
          }
        }
        return this;
      };
    }
    leftJoin = this.createJoin("left");
    rightJoin = this.createJoin("right");
    innerJoin = this.createJoin("inner");
    fullJoin = this.createJoin("full");
    where(where) {
      this.config.where = where;
      return this;
    }
    returning(fields) {
      if (!fields) {
        fields = Object.assign({}, this.config.table[Table.Symbol.Columns]);
        if (this.config.from) {
          const tableName = getTableLikeName(this.config.from);
          if (typeof tableName === "string" && this.config.from && !is2(this.config.from, SQL)) {
            const fromFields = this.getTableLikeFields(this.config.from);
            fields[tableName] = fromFields;
          }
          for (const join of this.config.joins) {
            const tableName2 = getTableLikeName(join.table);
            if (typeof tableName2 === "string" && !is2(join.table, SQL)) {
              const fromFields = this.getTableLikeFields(join.table);
              fields[tableName2] = fromFields;
            }
          }
        }
      }
      this.config.returningFields = fields;
      this.config.returning = orderSelectedFields(fields);
      return this;
    }
    getSQL() {
      return this.dialect.buildUpdateQuery(this.config);
    }
    toSQL() {
      const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
      return rest;
    }
    _prepare(name) {
      const query = this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true, undefined, {
        type: "insert",
        tables: extractUsedTable(this.config.table)
      }, this.cacheConfig);
      query.joinsNotNullableMap = this.joinsNotNullableMap;
      return query;
    }
    prepare(name) {
      return this._prepare(name);
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute = (placeholderValues) => {
      return this._prepare().execute(placeholderValues, this.authToken);
    };
    getSelectedFields() {
      return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
        alias: getTableName(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })) : undefined;
    }
    $dynamic() {
      return this;
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/index.js
var init_query_builders = __esm(() => {
  init_delete();
  init_insert();
  init_query_builder2();
  init_refresh_materialized_view();
  init_select2();
  init_update();
});

// node_modules/drizzle-orm/pg-core/query-builders/count.js
var PgCountBuilder;
var init_count = __esm(() => {
  init_entity();
  init_sql();
  PgCountBuilder = class PgCountBuilder extends SQL {
    constructor(params) {
      super(PgCountBuilder.buildEmbeddedCount(params.source, params.filters).queryChunks);
      this.params = params;
      this.mapWith(Number);
      this.session = params.session;
      this.sql = PgCountBuilder.buildCount(params.source, params.filters);
    }
    sql;
    token;
    static [entityKind] = "PgCountBuilder";
    [Symbol.toStringTag] = "PgCountBuilder";
    session;
    static buildEmbeddedCount(source, filters) {
      return sql`(select count(*) from ${source}${sql.raw(" where ").if(filters)}${filters})`;
    }
    static buildCount(source, filters) {
      return sql`select count(*) as count from ${source}${sql.raw(" where ").if(filters)}${filters};`;
    }
    setToken(token) {
      this.token = token;
      return this;
    }
    then(onfulfilled, onrejected) {
      return Promise.resolve(this.session.count(this.sql, this.token)).then(onfulfilled, onrejected);
    }
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
    finally(onFinally) {
      return this.then((value) => {
        onFinally?.();
        return value;
      }, (reason) => {
        onFinally?.();
        throw reason;
      });
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/query.js
var RelationalQueryBuilder, PgRelationalQuery;
var init_query = __esm(() => {
  init_entity();
  init_query_promise();
  init_relations();
  init_tracing();
  RelationalQueryBuilder = class RelationalQueryBuilder {
    constructor(fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session) {
      this.fullSchema = fullSchema;
      this.schema = schema;
      this.tableNamesMap = tableNamesMap;
      this.table = table;
      this.tableConfig = tableConfig;
      this.dialect = dialect;
      this.session = session;
    }
    static [entityKind] = "PgRelationalQueryBuilder";
    findMany(config) {
      return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? config : {}, "many");
    }
    findFirst(config) {
      return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? { ...config, limit: 1 } : { limit: 1 }, "first");
    }
  };
  PgRelationalQuery = class PgRelationalQuery extends QueryPromise {
    constructor(fullSchema, schema, tableNamesMap, table, tableConfig, dialect, session, config, mode) {
      super();
      this.fullSchema = fullSchema;
      this.schema = schema;
      this.tableNamesMap = tableNamesMap;
      this.table = table;
      this.tableConfig = tableConfig;
      this.dialect = dialect;
      this.session = session;
      this.config = config;
      this.mode = mode;
    }
    static [entityKind] = "PgRelationalQuery";
    _prepare(name) {
      return tracer.startActiveSpan("drizzle.prepareQuery", () => {
        const { query, builtQuery } = this._toSQL();
        return this.session.prepareQuery(builtQuery, undefined, name, true, (rawRows, mapColumnValue) => {
          const rows = rawRows.map((row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue));
          if (this.mode === "first") {
            return rows[0];
          }
          return rows;
        });
      });
    }
    prepare(name) {
      return this._prepare(name);
    }
    _getQuery() {
      return this.dialect.buildRelationalQueryWithoutPK({
        fullSchema: this.fullSchema,
        schema: this.schema,
        tableNamesMap: this.tableNamesMap,
        table: this.table,
        tableConfig: this.tableConfig,
        queryConfig: this.config,
        tableAlias: this.tableConfig.tsName
      });
    }
    getSQL() {
      return this._getQuery().sql;
    }
    _toSQL() {
      const query = this._getQuery();
      const builtQuery = this.dialect.sqlToQuery(query.sql);
      return { query, builtQuery };
    }
    toSQL() {
      return this._toSQL().builtQuery;
    }
    authToken;
    setToken(token) {
      this.authToken = token;
      return this;
    }
    execute() {
      return tracer.startActiveSpan("drizzle.operation", () => {
        return this._prepare().execute(undefined, this.authToken);
      });
    }
  };
});

// node_modules/drizzle-orm/pg-core/query-builders/raw.js
var PgRaw;
var init_raw = __esm(() => {
  init_entity();
  init_query_promise();
  PgRaw = class PgRaw extends QueryPromise {
    constructor(execute, sql3, query, mapBatchResult) {
      super();
      this.execute = execute;
      this.sql = sql3;
      this.query = query;
      this.mapBatchResult = mapBatchResult;
    }
    static [entityKind] = "PgRaw";
    getSQL() {
      return this.sql;
    }
    getQuery() {
      return this.query;
    }
    mapResult(result, isFromBatch) {
      return isFromBatch ? this.mapBatchResult(result) : result;
    }
    _prepare() {
      return this;
    }
    isResponseInArrayMode() {
      return false;
    }
  };
});

// node_modules/drizzle-orm/pg-core/db.js
var PgDatabase;
var init_db = __esm(() => {
  init_entity();
  init_query_builders();
  init_selection_proxy();
  init_sql();
  init_subquery();
  init_count();
  init_query();
  init_raw();
  init_refresh_materialized_view();
  PgDatabase = class PgDatabase {
    constructor(dialect, session, schema) {
      this.dialect = dialect;
      this.session = session;
      this._ = schema ? {
        schema: schema.schema,
        fullSchema: schema.fullSchema,
        tableNamesMap: schema.tableNamesMap,
        session
      } : {
        schema: undefined,
        fullSchema: {},
        tableNamesMap: {},
        session
      };
      this.query = {};
      if (this._.schema) {
        for (const [tableName, columns] of Object.entries(this._.schema)) {
          this.query[tableName] = new RelationalQueryBuilder(schema.fullSchema, this._.schema, this._.tableNamesMap, schema.fullSchema[tableName], columns, dialect, session);
        }
      }
      this.$cache = { invalidate: async (_params) => {} };
    }
    static [entityKind] = "PgDatabase";
    query;
    $with = (alias, selection) => {
      const self = this;
      const as2 = (qb) => {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder(self.dialect));
        }
        return new Proxy(new WithSubquery(qb.getSQL(), selection ?? ("getSelectedFields" in qb ? qb.getSelectedFields() ?? {} : {}), alias, true), new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      };
      return { as: as2 };
    };
    $count(source, filters) {
      return new PgCountBuilder({ source, filters, session: this.session });
    }
    $cache;
    with(...queries) {
      const self = this;
      function select3(fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: self.session,
          dialect: self.dialect,
          withList: queries
        });
      }
      function selectDistinct(fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: self.session,
          dialect: self.dialect,
          withList: queries,
          distinct: true
        });
      }
      function selectDistinctOn(on, fields) {
        return new PgSelectBuilder({
          fields: fields ?? undefined,
          session: self.session,
          dialect: self.dialect,
          withList: queries,
          distinct: { on }
        });
      }
      function update2(table) {
        return new PgUpdateBuilder(table, self.session, self.dialect, queries);
      }
      function insert2(table) {
        return new PgInsertBuilder(table, self.session, self.dialect, queries);
      }
      function delete_(table) {
        return new PgDeleteBase(table, self.session, self.dialect, queries);
      }
      return { select: select3, selectDistinct, selectDistinctOn, update: update2, insert: insert2, delete: delete_ };
    }
    select(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: this.session,
        dialect: this.dialect
      });
    }
    selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: this.session,
        dialect: this.dialect,
        distinct: true
      });
    }
    selectDistinctOn(on, fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: this.session,
        dialect: this.dialect,
        distinct: { on }
      });
    }
    update(table) {
      return new PgUpdateBuilder(table, this.session, this.dialect);
    }
    insert(table) {
      return new PgInsertBuilder(table, this.session, this.dialect);
    }
    delete(table) {
      return new PgDeleteBase(table, this.session, this.dialect);
    }
    refreshMaterializedView(view) {
      return new PgRefreshMaterializedView(view, this.session, this.dialect);
    }
    authToken;
    execute(query) {
      const sequel = typeof query === "string" ? sql.raw(query) : query.getSQL();
      const builtQuery = this.dialect.sqlToQuery(sequel);
      const prepared = this.session.prepareQuery(builtQuery, undefined, undefined, false);
      return new PgRaw(() => prepared.execute(undefined, this.authToken), sequel, builtQuery, (result) => prepared.mapResult(result, true));
    }
    transaction(transaction, config) {
      return this.session.transaction(transaction, config);
    }
  };
});

// node_modules/drizzle-orm/cache/core/cache.js
async function hashQuery(sql3, params) {
  const dataToHash = `${sql3}-${JSON.stringify(params)}`;
  const encoder = new TextEncoder;
  const data = encoder.encode(dataToHash);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = [...new Uint8Array(hashBuffer)];
  const hashHex = hashArray.map((b2) => b2.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
var Cache, NoopCache;
var init_cache = __esm(() => {
  init_entity();
  Cache = class Cache {
    static [entityKind] = "Cache";
  };
  NoopCache = class NoopCache extends Cache {
    strategy() {
      return "all";
    }
    static [entityKind] = "NoopCache";
    async get(_key) {
      return;
    }
    async put(_hashedQuery, _response, _tables, _config) {}
    async onMutate(_params) {}
  };
});

// node_modules/drizzle-orm/pg-core/alias.js
var init_alias2 = () => {};

// node_modules/drizzle-orm/pg-core/roles.js
var init_roles = () => {};

// node_modules/drizzle-orm/pg-core/sequence.js
var init_sequence = () => {};

// node_modules/drizzle-orm/pg-core/schema.js
var init_schema = () => {};

// node_modules/drizzle-orm/pg-core/session.js
var PgPreparedQuery, PgSession, PgTransaction;
var init_session = __esm(() => {
  init_cache();
  init_entity();
  init_errors();
  init_sql2();
  init_tracing();
  init_db();
  PgPreparedQuery = class PgPreparedQuery {
    constructor(query, cache, queryMetadata, cacheConfig) {
      this.query = query;
      this.cache = cache;
      this.queryMetadata = queryMetadata;
      this.cacheConfig = cacheConfig;
      if (cache && cache.strategy() === "all" && cacheConfig === undefined) {
        this.cacheConfig = { enable: true, autoInvalidate: true };
      }
      if (!this.cacheConfig?.enable) {
        this.cacheConfig = undefined;
      }
    }
    authToken;
    getQuery() {
      return this.query;
    }
    mapResult(response, _isFromBatch) {
      return response;
    }
    setToken(token) {
      this.authToken = token;
      return this;
    }
    static [entityKind] = "PgPreparedQuery";
    joinsNotNullableMap;
    async queryWithCache(queryString, params, query) {
      if (this.cache === undefined || is2(this.cache, NoopCache) || this.queryMetadata === undefined) {
        try {
          return await query();
        } catch (e) {
          throw new DrizzleQueryError(queryString, params, e);
        }
      }
      if (this.cacheConfig && !this.cacheConfig.enable) {
        try {
          return await query();
        } catch (e) {
          throw new DrizzleQueryError(queryString, params, e);
        }
      }
      if ((this.queryMetadata.type === "insert" || this.queryMetadata.type === "update" || this.queryMetadata.type === "delete") && this.queryMetadata.tables.length > 0) {
        try {
          const [res] = await Promise.all([
            query(),
            this.cache.onMutate({ tables: this.queryMetadata.tables })
          ]);
          return res;
        } catch (e) {
          throw new DrizzleQueryError(queryString, params, e);
        }
      }
      if (!this.cacheConfig) {
        try {
          return await query();
        } catch (e) {
          throw new DrizzleQueryError(queryString, params, e);
        }
      }
      if (this.queryMetadata.type === "select") {
        const fromCache = await this.cache.get(this.cacheConfig.tag ?? await hashQuery(queryString, params), this.queryMetadata.tables, this.cacheConfig.tag !== undefined, this.cacheConfig.autoInvalidate);
        if (fromCache === undefined) {
          let result;
          try {
            result = await query();
          } catch (e) {
            throw new DrizzleQueryError(queryString, params, e);
          }
          await this.cache.put(this.cacheConfig.tag ?? await hashQuery(queryString, params), result, this.cacheConfig.autoInvalidate ? this.queryMetadata.tables : [], this.cacheConfig.tag !== undefined, this.cacheConfig.config);
          return result;
        }
        return fromCache;
      }
      try {
        return await query();
      } catch (e) {
        throw new DrizzleQueryError(queryString, params, e);
      }
    }
  };
  PgSession = class PgSession {
    constructor(dialect) {
      this.dialect = dialect;
    }
    static [entityKind] = "PgSession";
    execute(query, token) {
      return tracer.startActiveSpan("drizzle.operation", () => {
        const prepared = tracer.startActiveSpan("drizzle.prepareQuery", () => {
          return this.prepareQuery(this.dialect.sqlToQuery(query), undefined, undefined, false);
        });
        return prepared.setToken(token).execute(undefined, token);
      });
    }
    all(query) {
      return this.prepareQuery(this.dialect.sqlToQuery(query), undefined, undefined, false).all();
    }
    async count(sql22, token) {
      const res = await this.execute(sql22, token);
      return Number(res[0]["count"]);
    }
  };
  PgTransaction = class PgTransaction extends PgDatabase {
    constructor(dialect, session, schema, nestedIndex = 0) {
      super(dialect, session, schema);
      this.schema = schema;
      this.nestedIndex = nestedIndex;
    }
    static [entityKind] = "PgTransaction";
    rollback() {
      throw new TransactionRollbackError;
    }
    getTransactionConfigSQL(config) {
      const chunks = [];
      if (config.isolationLevel) {
        chunks.push(`isolation level ${config.isolationLevel}`);
      }
      if (config.accessMode) {
        chunks.push(config.accessMode);
      }
      if (typeof config.deferrable === "boolean") {
        chunks.push(config.deferrable ? "deferrable" : "not deferrable");
      }
      return sql.raw(chunks.join(" "));
    }
    setTransaction(config) {
      return this.session.execute(sql`set transaction ${this.getTransactionConfigSQL(config)}`);
    }
  };
});

// node_modules/drizzle-orm/pg-core/utils/index.js
var init_utils4 = __esm(() => {
  init_array();
});

// node_modules/drizzle-orm/pg-core/index.js
var init_pg_core = __esm(() => {
  init_alias2();
  init_checks();
  init_columns();
  init_db();
  init_dialect();
  init_foreign_keys();
  init_indexes();
  init_policies();
  init_primary_keys();
  init_query_builders();
  init_roles();
  init_schema();
  init_sequence();
  init_session();
  init_table2();
  init_unique_constraint();
  init_utils3();
  init_utils4();
  init_view_common2();
  init_view();
});

// node_modules/drizzle-orm/neon-serverless/session.js
var NeonPreparedQuery, NeonSession, NeonTransaction;
var init_session2 = __esm(() => {
  init_serverless();
  init_cache();
  init_entity();
  init_logger();
  init_pg_core();
  init_session();
  init_sql();
  init_utils();
  NeonPreparedQuery = class NeonPreparedQuery extends PgPreparedQuery {
    constructor(client, queryString, params, logger, cache, queryMetadata, cacheConfig, fields, name, _isResponseInArrayMode, customResultMapper) {
      super({ sql: queryString, params }, cache, queryMetadata, cacheConfig);
      this.client = client;
      this.params = params;
      this.logger = logger;
      this.fields = fields;
      this._isResponseInArrayMode = _isResponseInArrayMode;
      this.customResultMapper = customResultMapper;
      this.rawQueryConfig = {
        name,
        text: queryString,
        types: {
          getTypeParser: (typeId, format) => {
            if (typeId === export_types.builtins.TIMESTAMPTZ) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.TIMESTAMP) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.DATE) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.INTERVAL) {
              return (val) => val;
            }
            if (typeId === 1231) {
              return (val) => val;
            }
            if (typeId === 1115) {
              return (val) => val;
            }
            if (typeId === 1185) {
              return (val) => val;
            }
            if (typeId === 1187) {
              return (val) => val;
            }
            if (typeId === 1182) {
              return (val) => val;
            }
            return export_types.getTypeParser(typeId, format);
          }
        }
      };
      this.queryConfig = {
        name,
        text: queryString,
        rowMode: "array",
        types: {
          getTypeParser: (typeId, format) => {
            if (typeId === export_types.builtins.TIMESTAMPTZ) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.TIMESTAMP) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.DATE) {
              return (val) => val;
            }
            if (typeId === export_types.builtins.INTERVAL) {
              return (val) => val;
            }
            if (typeId === 1231) {
              return (val) => val;
            }
            if (typeId === 1115) {
              return (val) => val;
            }
            if (typeId === 1185) {
              return (val) => val;
            }
            if (typeId === 1187) {
              return (val) => val;
            }
            if (typeId === 1182) {
              return (val) => val;
            }
            return export_types.getTypeParser(typeId, format);
          }
        }
      };
    }
    static [entityKind] = "NeonPreparedQuery";
    rawQueryConfig;
    queryConfig;
    async execute(placeholderValues = {}) {
      const params = fillPlaceholders(this.params, placeholderValues);
      this.logger.logQuery(this.rawQueryConfig.text, params);
      const { fields, client, rawQueryConfig: rawQuery, queryConfig: query, joinsNotNullableMap, customResultMapper } = this;
      if (!fields && !customResultMapper) {
        return await this.queryWithCache(rawQuery.text, params, async () => {
          return await client.query(rawQuery, params);
        });
      }
      const result = await this.queryWithCache(query.text, params, async () => {
        return await client.query(query, params);
      });
      return customResultMapper ? customResultMapper(result.rows) : result.rows.map((row) => mapResultRow(fields, row, joinsNotNullableMap));
    }
    all(placeholderValues = {}) {
      const params = fillPlaceholders(this.params, placeholderValues);
      this.logger.logQuery(this.rawQueryConfig.text, params);
      return this.queryWithCache(this.rawQueryConfig.text, params, async () => {
        return await this.client.query(this.rawQueryConfig, params);
      }).then((result) => result.rows);
    }
    values(placeholderValues = {}) {
      const params = fillPlaceholders(this.params, placeholderValues);
      this.logger.logQuery(this.rawQueryConfig.text, params);
      return this.queryWithCache(this.queryConfig.text, params, async () => {
        return await this.client.query(this.queryConfig, params);
      }).then((result) => result.rows);
    }
    isResponseInArrayMode() {
      return this._isResponseInArrayMode;
    }
  };
  NeonSession = class NeonSession extends PgSession {
    constructor(client, dialect2, schema2, options = {}) {
      super(dialect2);
      this.client = client;
      this.schema = schema2;
      this.options = options;
      this.logger = options.logger ?? new NoopLogger;
      this.cache = options.cache ?? new NoopCache;
    }
    static [entityKind] = "NeonSession";
    logger;
    cache;
    prepareQuery(query, fields, name, isResponseInArrayMode, customResultMapper, queryMetadata, cacheConfig) {
      return new NeonPreparedQuery(this.client, query.sql, query.params, this.logger, this.cache, queryMetadata, cacheConfig, fields, name, isResponseInArrayMode, customResultMapper);
    }
    async query(query, params) {
      this.logger.logQuery(query, params);
      const result = await this.client.query({
        rowMode: "array",
        text: query,
        values: params
      });
      return result;
    }
    async queryObjects(query, params) {
      return this.client.query(query, params);
    }
    async count(sql22) {
      const res = await this.execute(sql22);
      return Number(res["rows"][0]["count"]);
    }
    async transaction(transaction, config = {}) {
      const session2 = this.client instanceof Mn ? new NeonSession(await this.client.connect(), this.dialect, this.schema, this.options) : this;
      const tx = new NeonTransaction(this.dialect, session2, this.schema);
      await tx.execute(sql`begin ${tx.getTransactionConfigSQL(config)}`);
      try {
        const result = await transaction(tx);
        await tx.execute(sql`commit`);
        return result;
      } catch (error) {
        await tx.execute(sql`rollback`);
        throw error;
      } finally {
        if (this.client instanceof Mn) {
          session2.client.release();
        }
      }
    }
  };
  NeonTransaction = class NeonTransaction extends PgTransaction {
    static [entityKind] = "NeonTransaction";
    async transaction(transaction) {
      const savepointName = `sp${this.nestedIndex + 1}`;
      const tx = new NeonTransaction(this.dialect, this.session, this.schema, this.nestedIndex + 1);
      await tx.execute(sql.raw(`savepoint ${savepointName}`));
      try {
        const result = await transaction(tx);
        await tx.execute(sql.raw(`release savepoint ${savepointName}`));
        return result;
      } catch (e) {
        await tx.execute(sql.raw(`rollback to savepoint ${savepointName}`));
        throw e;
      }
    }
  };
});

// node_modules/drizzle-orm/neon-serverless/driver.js
function construct(client, config = {}) {
  const dialect2 = new PgDialect({ casing: config.casing });
  let logger;
  if (config.logger === true) {
    logger = new DefaultLogger;
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema2;
  if (config.schema) {
    const tablesConfig = extractTablesRelationalConfig(config.schema, createTableRelationsHelpers);
    schema2 = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const driver = new NeonDriver(client, dialect2, { logger, cache: config.cache });
  const session2 = driver.createSession(schema2);
  const db2 = new NeonDatabase(dialect2, session2, schema2);
  db2.$client = client;
  db2.$cache = config.cache;
  if (db2.$cache) {
    db2.$cache["invalidate"] = config.cache?.onMutate;
  }
  return db2;
}
function drizzle(...params) {
  if (typeof params[0] === "string") {
    const instance = new Mn({
      connectionString: params[0]
    });
    return construct(instance, params[1]);
  }
  if (isConfig(params[0])) {
    const { connection, client, ws, ...drizzleConfig } = params[0];
    if (ws) {
      ce.webSocketConstructor = ws;
    }
    if (client)
      return construct(client, drizzleConfig);
    const instance = typeof connection === "string" ? new Mn({
      connectionString: connection
    }) : new Mn(connection);
    return construct(instance, drizzleConfig);
  }
  return construct(params[0], params[1]);
}
var NeonDriver, NeonDatabase;
var init_driver = __esm(() => {
  init_serverless();
  init_entity();
  init_logger();
  init_db();
  init_dialect();
  init_relations();
  init_utils();
  init_session2();
  NeonDriver = class NeonDriver {
    constructor(client, dialect2, options = {}) {
      this.client = client;
      this.dialect = dialect2;
      this.options = options;
    }
    static [entityKind] = "NeonDriver";
    createSession(schema2) {
      return new NeonSession(this.client, this.dialect, schema2, {
        logger: this.options.logger,
        cache: this.options.cache
      });
    }
  };
  NeonDatabase = class NeonDatabase extends PgDatabase {
    static [entityKind] = "NeonServerlessDatabase";
  };
  ((drizzle2) => {
    function mock(config) {
      return construct({}, config);
    }
    drizzle2.mock = mock;
  })(drizzle || (drizzle = {}));
});

// node_modules/drizzle-orm/neon-serverless/index.js
var init_neon_serverless = __esm(() => {
  init_driver();
  init_session2();
});

// src/db/schema.ts
var exports_schema = {};
__export(exports_schema, {
  users: () => users,
  sessions: () => sessions,
  sdkKeys: () => sdkKeys,
  registrationChallenges: () => registrationChallenges,
  projects: () => projects,
  projectInvites: () => projectInvites,
  passwordResets: () => passwordResets,
  orgs: () => orgs,
  orgMembers: () => orgMembers,
  invites: () => invites,
  flags: () => flags,
  flagRules: () => flagRules,
  exposures: () => exposures,
  experiments: () => experiments,
  environments: () => environments,
  authChallenges: () => authChallenges,
  auditLog: () => auditLog
});
var tsz, orgs, projects, environments, flags, flagRules, experiments, auditLog, sdkKeys, exposures, users, sessions, orgMembers, invites, passwordResets, projectInvites, authChallenges, registrationChallenges;
var init_schema2 = __esm(() => {
  init_pg_core();
  tsz = { withTimezone: true };
  orgs = pgTable("orgs", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  projects = pgTable("projects", {
    id: uuid("id").primaryKey().defaultRandom(),
    orgId: uuid("org_id").references(() => orgs.id).notNull(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  environments = pgTable("environments", {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id").references(() => projects.id).notNull(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  flags = pgTable("flags", {
    id: uuid("id").primaryKey().defaultRandom(),
    envId: uuid("env_id").references(() => environments.id).notNull(),
    key: text("key").notNull(),
    type: text("type").notNull().default("boolean"),
    defaultValueJson: jsonb("default_value_json").notNull(),
    enabled: boolean("enabled").notNull().default(false),
    version: integer("version").notNull().default(1),
    updatedAt: timestamp("updated_at", tsz).defaultNow().notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  flagRules = pgTable("flag_rules", {
    id: uuid("id").primaryKey().defaultRandom(),
    flagId: uuid("flag_id").references(() => flags.id).notNull(),
    priority: integer("priority").notNull(),
    ruleJson: jsonb("rule_json").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  experiments = pgTable("experiments", {
    id: uuid("id").primaryKey().defaultRandom(),
    envId: uuid("env_id").references(() => environments.id).notNull(),
    key: text("key").notNull(),
    variantsJson: jsonb("variants_json").notNull(),
    status: text("status").notNull().default("draft"),
    version: integer("version").notNull().default(1),
    updatedAt: timestamp("updated_at", tsz).defaultNow().notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  auditLog = pgTable("audit_log", {
    id: uuid("id").primaryKey().defaultRandom(),
    actor: text("actor").notNull(),
    action: text("action").notNull(),
    resource: text("resource").notNull(),
    beforeJson: jsonb("before_json"),
    afterJson: jsonb("after_json"),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  sdkKeys = pgTable("sdk_keys", {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id").references(() => projects.id).notNull(),
    name: text("name").notNull(),
    keyHash: text("key_hash").notNull(),
    keyPlain: text("key_plain"),
    prefix: text("prefix").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  exposures = pgTable("exposures", {
    id: uuid("id").primaryKey().defaultRandom(),
    experimentKey: text("experiment_key").notNull(),
    userId: text("user_id").notNull(),
    variant: text("variant").notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    username: text("username").unique(),
    phone: text("phone").unique(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    twoFactorEnabled: boolean("two_factor_enabled").notNull().default(false),
    twoFactorMethod: text("two_factor_method").notNull().default("either"),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", tsz).defaultNow().notNull()
  });
  sessions = pgTable("sessions", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at", tsz).notNull(),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  orgMembers = pgTable("org_members", {
    id: uuid("id").primaryKey().defaultRandom(),
    orgId: uuid("org_id").references(() => orgs.id, { onDelete: "cascade" }).notNull(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    role: text("role").notNull().default("member"),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  }, (t) => [unique().on(t.orgId, t.userId)]);
  invites = pgTable("invites", {
    id: uuid("id").primaryKey().defaultRandom(),
    orgId: uuid("org_id").references(() => orgs.id, { onDelete: "cascade" }).notNull(),
    email: text("email").notNull(),
    role: text("role").notNull().default("member"),
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at", tsz).notNull(),
    acceptedAt: timestamp("accepted_at", tsz),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  passwordResets = pgTable("password_resets", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at", tsz).notNull(),
    usedAt: timestamp("used_at", tsz),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  projectInvites = pgTable("project_invites", {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id").references(() => projects.id, { onDelete: "cascade" }).notNull(),
    fromUserId: uuid("from_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    toUserId: uuid("to_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    status: text("status").notNull().default("pending"),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
    respondedAt: timestamp("responded_at", tsz)
  });
  authChallenges = pgTable("auth_challenges", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
    purpose: text("purpose").notNull(),
    channel: text("channel").notNull(),
    codeHash: text("code_hash").notNull(),
    expiresAt: timestamp("expires_at", tsz).notNull(),
    usedAt: timestamp("used_at", tsz),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
  registrationChallenges = pgTable("registration_challenges", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull(),
    username: text("username").notNull(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    codeHash: text("code_hash").notNull(),
    expiresAt: timestamp("expires_at", tsz).notNull(),
    usedAt: timestamp("used_at", tsz),
    createdAt: timestamp("created_at", tsz).defaultNow().notNull()
  });
});

// src/db/client.ts
var connectionString, dbUnavailable, queryClient = null, db2;
var init_client = __esm(() => {
  init_serverless();
  init_neon_serverless();
  init_schema2();
  connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("[DB] DATABASE_URL not set");
  }
  dbUnavailable = new Proxy({}, {
    get() {
      throw new Error("DATABASE_URL is not configured");
    }
  });
  if (connectionString) {
    try {
      console.log("[DB] Creating Neon HTTP client for Edge runtime...");
      ce.webSocketConstructor = globalThis.WebSocket;
      queryClient = new Mn({ connectionString });
      console.log("[DB] Neon HTTP client configured for Edge runtime");
    } catch (error) {
      console.error("[DB] Failed to create Neon client:", error?.message);
      queryClient = null;
    }
  }
  db2 = queryClient ? drizzle(queryClient, { schema: exports_schema }) : dbUnavailable;
});

// node_modules/drizzle-orm/index.js
var init_drizzle_orm = __esm(() => {
  init_alias();
  init_column_builder();
  init_column();
  init_entity();
  init_errors();
  init_logger();
  init_query_promise();
  init_relations();
  init_sql2();
  init_subquery();
  init_table();
  init_utils();
  init_view_common();
});

// src/middleware/session.ts
function extractToken(req) {
  const cookie = req.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
  if (match?.[1])
    return decodeURIComponent(match[1]);
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  if (bearer && !bearer.startsWith("ct_") && bearer !== (process.env.ADMIN_API_KEY ?? "")) {
    return bearer;
  }
  return null;
}
async function getSessionUser(req) {
  const token = extractToken(req);
  if (!token)
    return null;
  const [row] = await db2.select({
    id: users.id,
    email: users.email,
    username: users.username,
    phone: users.phone,
    name: users.name,
    orgId: orgMembers.orgId,
    role: orgMembers.role,
    twoFactorEnabled: users.twoFactorEnabled,
    twoFactorMethod: users.twoFactorMethod
  }).from(sessions).innerJoin(users, eq(sessions.userId, users.id)).innerJoin(orgMembers, eq(orgMembers.userId, users.id)).where(and(eq(sessions.token, token), gt3(sessions.expiresAt, new Date))).limit(1);
  if (!row)
    return null;
  return row;
}
function makeSessionCookie(token, expiresAt) {
  const expires = expiresAt.toUTCString();
  return `sid=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Expires=${expires}`;
}
function clearSessionCookie() {
  return "sid=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0";
}
var ROLE_LEVELS;
var init_session3 = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  ROLE_LEVELS = { member: 0, admin: 1, owner: 2 };
});

// src/middleware/auth.ts
async function getAuthUser(req) {
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  if (ADMIN_API_KEY && bearer === ADMIN_API_KEY) {
    return {
      id: "admin",
      email: "admin",
      username: null,
      phone: null,
      name: "admin",
      orgId: "admin",
      role: "owner",
      twoFactorEnabled: false,
      twoFactorMethod: "either"
    };
  }
  return getSessionUser(req);
}
async function requireAuth(req, minRole = "member") {
  const user = await getAuthUser(req);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  if ((ROLE_LEVELS[user.role] ?? 0) < (ROLE_LEVELS[minRole] ?? 0)) {
    return new Response(JSON.stringify({ error: `Forbidden — requires role: ${minRole}` }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }
  return { user };
}
var ADMIN_API_KEY;
var init_auth = __esm(() => {
  init_session3();
  ADMIN_API_KEY = process.env.ADMIN_API_KEY;
});

// src/utils/password.ts
import { randomBytes, scrypt as nodeScrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: 128 * 1024 * 1024
  });
  return `scrypt$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${salt}$${derived.toString("hex")}`;
}
async function verifyPassword(password, hashed) {
  if (!hashed.startsWith("scrypt$")) {
    const bunRuntime = globalThis.Bun;
    if (bunRuntime?.password?.verify) {
      return bunRuntime.password.verify(password, hashed);
    }
    return false;
  }
  const [, n, r, p2, salt, storedHex] = hashed.split("$");
  if (!n || !r || !p2 || !salt || !storedHex)
    return false;
  const derived = await scrypt(password, salt, storedHex.length / 2, {
    N: Number(n),
    r: Number(r),
    p: Number(p2),
    maxmem: 128 * 1024 * 1024
  });
  const stored = Buffer.from(storedHex, "hex");
  if (stored.length !== derived.length)
    return false;
  return timingSafeEqual(stored, derived);
}
var scrypt, SCRYPT_N = 1024, SCRYPT_R = 8, SCRYPT_P = 1, KEYLEN = 64;
var init_password = __esm(() => {
  scrypt = promisify(nodeScrypt);
});

// node_modules/zod/v4/core/core.js
function $constructor(name, initializer, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: new Set
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0;i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a;
    const inst = params?.Parent ? new Definition : this;
    init(inst, def);
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
var NEVER, $brand, $ZodAsyncError, $ZodEncodeError, globalConfig;
var init_core = __esm(() => {
  NEVER = Object.freeze({
    status: "aborted"
  });
  $brand = Symbol("zod_brand");
  $ZodAsyncError = class $ZodAsyncError extends Error {
    constructor() {
      super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
  };
  $ZodEncodeError = class $ZodEncodeError extends Error {
    constructor(name) {
      super(`Encountered unidirectional transform during encode: ${name}`);
      this.name = "ZodEncodeError";
    }
  };
  globalConfig = {};
});

// node_modules/zod/v4/core/util.js
var exports_util = {};
__export(exports_util, {
  unwrapMessage: () => unwrapMessage,
  uint8ArrayToHex: () => uint8ArrayToHex,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  stringifyPrimitive: () => stringifyPrimitive,
  slugify: () => slugify,
  shallowClone: () => shallowClone,
  safeExtend: () => safeExtend,
  required: () => required,
  randomString: () => randomString,
  propertyKeyTypes: () => propertyKeyTypes,
  promiseAllObject: () => promiseAllObject,
  primitiveTypes: () => primitiveTypes,
  prefixIssues: () => prefixIssues,
  pick: () => pick,
  partial: () => partial,
  parsedType: () => parsedType,
  optionalKeys: () => optionalKeys,
  omit: () => omit,
  objectClone: () => objectClone,
  numKeys: () => numKeys,
  nullish: () => nullish,
  normalizeParams: () => normalizeParams,
  mergeDefs: () => mergeDefs,
  merge: () => merge,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  joinValues: () => joinValues,
  issue: () => issue,
  isPlainObject: () => isPlainObject,
  isObject: () => isObject,
  hexToUint8Array: () => hexToUint8Array,
  getSizableOrigin: () => getSizableOrigin,
  getParsedType: () => getParsedType,
  getLengthableOrigin: () => getLengthableOrigin,
  getEnumValues: () => getEnumValues,
  getElementAtPath: () => getElementAtPath,
  floatSafeRemainder: () => floatSafeRemainder,
  finalizeIssue: () => finalizeIssue,
  extend: () => extend,
  escapeRegex: () => escapeRegex,
  esc: () => esc,
  defineLazy: () => defineLazy,
  createTransparentProxy: () => createTransparentProxy,
  cloneDef: () => cloneDef,
  clone: () => clone,
  cleanRegex: () => cleanRegex,
  cleanEnum: () => cleanEnum,
  captureStackTrace: () => captureStackTrace,
  cached: () => cached,
  base64urlToUint8Array: () => base64urlToUint8Array,
  base64ToUint8Array: () => base64ToUint8Array,
  assignProp: () => assignProp,
  assertNotEqual: () => assertNotEqual,
  assertNever: () => assertNever,
  assertIs: () => assertIs,
  assertEqual: () => assertEqual,
  assert: () => assert,
  allowsEval: () => allowsEval,
  aborted: () => aborted,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  Class: () => Class,
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v2) => typeof v2 === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v2]) => v2);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    const match = stepString.match(/\d?e-(\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
function defineLazy(object, key, getter) {
  let value = undefined;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return;
      }
      if (value === undefined) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v2) {
      Object.defineProperty(object, key, {
        value: v2
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema2) {
  return mergeDefs(schema2._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0;i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0;i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
function pick(schema2, mask) {
  const currDef = schema2._zod.def;
  const checks2 = currDef.checks;
  const hasChecks = checks2 && checks2.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema2, def);
}
function omit(schema2, mask) {
  const currDef = schema2._zod.def;
  const checks2 = currDef.checks;
  const hasChecks = checks2 && checks2.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const newShape = { ...schema2._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema2, def);
}
function extend(schema2, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks2 = schema2._zod.def.checks;
  const hasChecks = checks2 && checks2.length > 0;
  if (hasChecks) {
    const existingShape = schema2._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const _shape = { ...schema2._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema2, def);
}
function safeExtend(schema2, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const _shape = { ...schema2._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema2, def);
}
function merge(a2, b2) {
  const def = mergeDefs(a2._zod.def, {
    get shape() {
      const _shape = { ...a2._zod.def.shape, ...b2._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b2._zod.def.catchall;
    },
    checks: []
  });
  return clone(a2, def);
}
function partial(Class, schema2, mask) {
  const currDef = schema2._zod.def;
  const checks2 = currDef.checks;
  const hasChecks = checks2 && checks2.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const oldShape = schema2._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema2, def);
}
function required(Class, schema2, mask) {
  const def = mergeDefs(schema2._zod.def, {
    get shape() {
      const oldShape = schema2._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema2, def);
}
function aborted(x2, startIndex = 0) {
  if (x2.aborted === true)
    return true;
  for (let i = startIndex;i < x2.issues.length; i++) {
    if (x2.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a;
    (_a = iss).path ?? (_a.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0;i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0;i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base64.length % 4) % 4);
  return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0;i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b2) => b2.toString(16).padStart(2, "0")).join("");
}

class Class {
  constructor(..._args) {}
}
var EVALUATING, captureStackTrace, allowsEval, getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, propertyKeyTypes, primitiveTypes, NUMBER_FORMAT_RANGES, BIGINT_FORMAT_RANGES;
var init_util = __esm(() => {
  EVALUATING = Symbol("evaluating");
  captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
  allowsEval = cached(() => {
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
      return false;
    }
    try {
      const F = Function;
      new F("");
      return true;
    } catch (_) {
      return false;
    }
  });
  propertyKeyTypes = new Set(["string", "number", "symbol"]);
  primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  };
  BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
  };
});

// node_modules/zod/v4/core/errors.js
function flattenError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error2) => {
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}
function treeifyError(error, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error2, path = []) => {
    var _a, _b;
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error) {
  const lines = [];
  const issues = [...error.issues].sort((a2, b2) => (a2.path ?? []).length - (b2.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`✖ ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  → at ${toDotPath(issue2.path)}`);
  }
  return lines.join(`
`);
}
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
}, $ZodError, $ZodRealError;
var init_errors2 = __esm(() => {
  init_core();
  init_util();
  $ZodError = $constructor("$ZodError", initializer);
  $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
});

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema2, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
}, parse, _parseAsync = (_Err) => async (schema2, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
}, parseAsync, _safeParse = (_Err) => (schema2, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
}, safeParse, _safeParseAsync = (_Err) => async (schema2, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
}, safeParseAsync, _encode = (_Err) => (schema2, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema2, value, ctx);
}, encode, _decode = (_Err) => (schema2, value, _ctx) => {
  return _parse(_Err)(schema2, value, _ctx);
}, decode, _encodeAsync = (_Err) => async (schema2, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema2, value, ctx);
}, encodeAsync, _decodeAsync = (_Err) => async (schema2, value, _ctx) => {
  return _parseAsync(_Err)(schema2, value, _ctx);
}, decodeAsync, _safeEncode = (_Err) => (schema2, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema2, value, ctx);
}, safeEncode, _safeDecode = (_Err) => (schema2, value, _ctx) => {
  return _safeParse(_Err)(schema2, value, _ctx);
}, safeDecode, _safeEncodeAsync = (_Err) => async (schema2, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema2, value, ctx);
}, safeEncodeAsync, _safeDecodeAsync = (_Err) => async (schema2, value, _ctx) => {
  return _safeParseAsync(_Err)(schema2, value, _ctx);
}, safeDecodeAsync;
var init_parse = __esm(() => {
  init_core();
  init_errors2();
  init_util();
  parse = /* @__PURE__ */ _parse($ZodRealError);
  parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
  safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
  safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
  encode = /* @__PURE__ */ _encode($ZodRealError);
  decode = /* @__PURE__ */ _decode($ZodRealError);
  encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
  decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
  safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
  safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
  safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
  safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);
});

// node_modules/zod/v4/core/regexes.js
var exports_regexes = {};
__export(exports_regexes, {
  xid: () => xid,
  uuid7: () => uuid7,
  uuid6: () => uuid6,
  uuid4: () => uuid4,
  uuid: () => uuid3,
  uppercase: () => uppercase,
  unicodeEmail: () => unicodeEmail,
  undefined: () => _undefined,
  ulid: () => ulid,
  time: () => time3,
  string: () => string,
  sha512_hex: () => sha512_hex,
  sha512_base64url: () => sha512_base64url,
  sha512_base64: () => sha512_base64,
  sha384_hex: () => sha384_hex,
  sha384_base64url: () => sha384_base64url,
  sha384_base64: () => sha384_base64,
  sha256_hex: () => sha256_hex,
  sha256_base64url: () => sha256_base64url,
  sha256_base64: () => sha256_base64,
  sha1_hex: () => sha1_hex,
  sha1_base64url: () => sha1_base64url,
  sha1_base64: () => sha1_base64,
  rfc5322Email: () => rfc5322Email,
  number: () => number,
  null: () => _null,
  nanoid: () => nanoid,
  md5_hex: () => md5_hex,
  md5_base64url: () => md5_base64url,
  md5_base64: () => md5_base64,
  mac: () => mac,
  lowercase: () => lowercase,
  ksuid: () => ksuid,
  ipv6: () => ipv6,
  ipv4: () => ipv4,
  integer: () => integer3,
  idnEmail: () => idnEmail,
  html5Email: () => html5Email,
  hostname: () => hostname,
  hex: () => hex,
  guid: () => guid,
  extendedDuration: () => extendedDuration,
  emoji: () => emoji,
  email: () => email,
  e164: () => e164,
  duration: () => duration,
  domain: () => domain,
  datetime: () => datetime,
  date: () => date3,
  cuid2: () => cuid2,
  cuid: () => cuid,
  cidrv6: () => cidrv6,
  cidrv4: () => cidrv4,
  browserEmail: () => browserEmail,
  boolean: () => boolean3,
  bigint: () => bigint3,
  base64url: () => base64url,
  base64: () => base64
});
function emoji() {
  return new RegExp(_emoji, "u");
}
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time3(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time4 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time4}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var cuid, cuid2, ulid, xid, ksuid, nanoid, duration, extendedDuration, guid, uuid3 = (version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
}, uuid4, uuid6, uuid7, email, html5Email, rfc5322Email, unicodeEmail, idnEmail, browserEmail, _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`, ipv4, ipv6, mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
}, cidrv4, cidrv6, base64, base64url, hostname, domain, e164, dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`, date3, string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
}, bigint3, integer3, number, boolean3, _null, _undefined, lowercase, uppercase, hex, md5_hex, md5_base64, md5_base64url, sha1_hex, sha1_base64, sha1_base64url, sha256_hex, sha256_base64, sha256_base64url, sha384_hex, sha384_base64, sha384_base64url, sha512_hex, sha512_base64, sha512_base64url;
var init_regexes = __esm(() => {
  init_util();
  cuid = /^[cC][^\s-]{8,}$/;
  cuid2 = /^[0-9a-z]+$/;
  ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  xid = /^[0-9a-vA-V]{20}$/;
  ksuid = /^[A-Za-z0-9]{27}$/;
  nanoid = /^[a-zA-Z0-9_-]{21}$/;
  duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  uuid4 = /* @__PURE__ */ uuid3(4);
  uuid6 = /* @__PURE__ */ uuid3(6);
  uuid7 = /* @__PURE__ */ uuid3(7);
  email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
  idnEmail = unicodeEmail;
  browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  base64url = /^[A-Za-z0-9_-]*$/;
  hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
  domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  e164 = /^\+[1-9]\d{6,14}$/;
  date3 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
  bigint3 = /^-?\d+n?$/;
  integer3 = /^-?\d+$/;
  number = /^-?\d+(?:\.\d+)?$/;
  boolean3 = /^(?:true|false)$/i;
  _null = /^null$/i;
  _undefined = /^undefined$/i;
  lowercase = /^[^A-Z]*$/;
  uppercase = /^[^a-z]*$/;
  hex = /^[0-9a-fA-F]*$/;
  md5_hex = /^[0-9a-fA-F]{32}$/;
  md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
  md5_base64url = /* @__PURE__ */ fixedBase64url(22);
  sha1_hex = /^[0-9a-fA-F]{40}$/;
  sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
  sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
  sha256_hex = /^[0-9a-fA-F]{64}$/;
  sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
  sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
  sha384_hex = /^[0-9a-fA-F]{96}$/;
  sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
  sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
  sha512_hex = /^[0-9a-fA-F]{128}$/;
  sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
  sha512_base64url = /* @__PURE__ */ fixedBase64url(86);
});

// node_modules/zod/v4/core/checks.js
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheck, numericOriginMap, $ZodCheckLessThan, $ZodCheckGreaterThan, $ZodCheckMultipleOf, $ZodCheckNumberFormat, $ZodCheckBigIntFormat, $ZodCheckMaxSize, $ZodCheckMinSize, $ZodCheckSizeEquals, $ZodCheckMaxLength, $ZodCheckMinLength, $ZodCheckLengthEquals, $ZodCheckStringFormat, $ZodCheckRegex, $ZodCheckLowerCase, $ZodCheckUpperCase, $ZodCheckIncludes, $ZodCheckStartsWith, $ZodCheckEndsWith, $ZodCheckProperty, $ZodCheckMimeType, $ZodCheckOverwrite;
var init_checks2 = __esm(() => {
  init_core();
  init_regexes();
  init_util();
  $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
    var _a;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a = inst._zod).onattach ?? (_a.onattach = []);
  });
  numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
  };
  $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (def.value < curr) {
        if (def.inclusive)
          bag.maximum = def.value;
        else
          bag.exclusiveMaximum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (def.value > curr) {
        if (def.inclusive)
          bag.minimum = def.value;
        else
          bag.exclusiveMinimum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      var _a;
      (_a = inst2._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
    });
    inst._zod.check = (payload) => {
      if (typeof payload.value !== typeof def.value)
        throw new Error("Cannot mix number and bigint in multiple_of check.");
      const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
      if (isMultiple)
        return;
      payload.issues.push({
        origin: typeof payload.value,
        code: "not_multiple_of",
        divisor: def.value,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
    $ZodCheck.init(inst, def);
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
      if (isInt)
        bag.pattern = integer3;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (isInt) {
        if (!Number.isInteger(input)) {
          payload.issues.push({
            expected: origin,
            format: def.format,
            code: "invalid_type",
            continue: false,
            input,
            inst
          });
          return;
        }
        if (!Number.isSafeInteger(input)) {
          if (input > 0) {
            payload.issues.push({
              input,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              inclusive: true,
              continue: !def.abort
            });
          } else {
            payload.issues.push({
              input,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              inclusive: true,
              continue: !def.abort
            });
          }
          return;
        }
      }
      if (input < minimum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
      if (input > maximum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_big",
          maximum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
    $ZodCheck.init(inst, def);
    const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (input < minimum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
      if (input > maximum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_big",
          maximum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size <= def.maximum)
        return;
      payload.issues.push({
        origin: getSizableOrigin(input),
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size >= def.minimum)
        return;
      payload.issues.push({
        origin: getSizableOrigin(input),
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.size;
      bag.maximum = def.size;
      bag.size = def.size;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size === def.size)
        return;
      const tooBig = size > def.size;
      payload.issues.push({
        origin: getSizableOrigin(input),
        ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length <= def.maximum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length >= def.minimum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a;
    $ZodCheck.init(inst, def);
    (_a = inst._zod.def).when ?? (_a.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== undefined;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length)
        return;
      const origin = getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push({
        origin,
        ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        bag.patterns ?? (bag.patterns = new Set);
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern)
      (_a = inst._zod).check ?? (_a.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          ...def.pattern ? { pattern: def.pattern.toString() } : {},
          inst,
          continue: !def.abort
        });
      });
    else
      (_b = inst._zod).check ?? (_b.check = () => {});
  });
  $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = new Set);
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = new Set);
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = new Set);
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      const result = def.schema._zod.run({
        value: payload.value[def.property],
        issues: []
      }, {});
      if (result instanceof Promise) {
        return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
      }
      handleCheckPropertyResult(result, payload, def.property);
      return;
    };
  });
  $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload) => {
      if (mimeSet.has(payload.value.type))
        return;
      payload.issues.push({
        code: "invalid_value",
        values: def.mime,
        input: payload.value.type,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  });
});

// node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(`
`).filter((x2) => x2);
    const minIndent = Math.min(...lines.map((x2) => x2.length - x2.trimStart().length));
    const dedented = lines.map((x2) => x2.slice(minIndent)).map((x2) => " ".repeat(this.indent * 2) + x2);
    for (const line3 of dedented) {
      this.content.push(line3);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x2) => `  ${x2}`)];
    return new F(...args, lines.join(`
`));
  }
}

// node_modules/zod/v4/core/versions.js
var version2;
var init_versions = __esm(() => {
  version2 = {
    major: 4,
    minor: 3,
    patch: 6
  };
});

// node_modules/zod/v4/core/schemas.js
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === undefined) {
    if (key in input) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
function mergeValues(a2, b2) {
  if (a2 === b2) {
    return { valid: true, data: a2 };
  }
  if (a2 instanceof Date && b2 instanceof Date && +a2 === +b2) {
    return { valid: true, data: a2 };
  }
  if (isPlainObject(a2) && isPlainObject(b2)) {
    const bKeys = Object.keys(b2);
    const sharedKeys = Object.keys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a2) && Array.isArray(b2)) {
    if (a2.length !== b2.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
function handleOptionalResult(result, input) {
  if (result.issues.length && input === undefined) {
    return { issues: [], value: undefined };
  }
  return result;
}
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
var $ZodType, $ZodString, $ZodStringFormat, $ZodGUID, $ZodUUID, $ZodEmail, $ZodURL, $ZodEmoji, $ZodNanoID, $ZodCUID, $ZodCUID2, $ZodULID, $ZodXID, $ZodKSUID, $ZodISODateTime, $ZodISODate, $ZodISOTime, $ZodISODuration, $ZodIPv4, $ZodIPv6, $ZodMAC, $ZodCIDRv4, $ZodCIDRv6, $ZodBase64, $ZodBase64URL, $ZodE164, $ZodJWT, $ZodCustomStringFormat, $ZodNumber, $ZodNumberFormat, $ZodBoolean, $ZodBigInt, $ZodBigIntFormat, $ZodSymbol, $ZodUndefined, $ZodNull, $ZodAny, $ZodUnknown, $ZodNever, $ZodVoid, $ZodDate, $ZodArray, $ZodObject, $ZodObjectJIT, $ZodUnion, $ZodXor, $ZodDiscriminatedUnion, $ZodIntersection, $ZodTuple, $ZodRecord, $ZodMap, $ZodSet, $ZodEnum, $ZodLiteral, $ZodFile, $ZodTransform, $ZodOptional, $ZodExactOptional, $ZodNullable, $ZodDefault, $ZodPrefault, $ZodNonOptional, $ZodSuccess, $ZodCatch, $ZodNaN, $ZodPipe, $ZodCodec, $ZodReadonly, $ZodTemplateLiteral, $ZodFunction, $ZodPromise, $ZodLazy, $ZodCustom;
var init_schemas = __esm(() => {
  init_checks2();
  init_core();
  init_parse();
  init_regexes();
  init_util();
  init_versions();
  init_util();
  $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
    var _a;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version2;
    const checks2 = [...inst._zod.def.checks ?? []];
    if (inst._zod.traits.has("$ZodCheck")) {
      checks2.unshift(inst);
    }
    for (const ch of checks2) {
      for (const fn of ch._zod.onattach) {
        fn(inst);
      }
    }
    if (checks2.length === 0) {
      (_a = inst._zod).deferred ?? (_a.deferred = []);
      inst._zod.deferred?.push(() => {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      const runChecks = (payload, checks3, ctx) => {
        let isAborted = aborted(payload);
        let asyncResult;
        for (const ch of checks3) {
          if (ch._zod.def.when) {
            const shouldRun = ch._zod.def.when(payload);
            if (!shouldRun)
              continue;
          } else if (isAborted) {
            continue;
          }
          const currLen = payload.issues.length;
          const _ = ch._zod.check(payload);
          if (_ instanceof Promise && ctx?.async === false) {
            throw new $ZodAsyncError;
          }
          if (asyncResult || _ instanceof Promise) {
            asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
              await _;
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                return;
              if (!isAborted)
                isAborted = aborted(payload, currLen);
            });
          } else {
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              continue;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          }
        }
        if (asyncResult) {
          return asyncResult.then(() => {
            return payload;
          });
        }
        return payload;
      };
      const handleCanaryResult = (canary, payload, ctx) => {
        if (aborted(canary)) {
          canary.aborted = true;
          return canary;
        }
        const checkResult = runChecks(payload, checks2, ctx);
        if (checkResult instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError;
          return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
        }
        return inst._zod.parse(checkResult, ctx);
      };
      inst._zod.run = (payload, ctx) => {
        if (ctx.skipChecks) {
          return inst._zod.parse(payload, ctx);
        }
        if (ctx.direction === "backward") {
          const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
          if (canary instanceof Promise) {
            return canary.then((canary2) => {
              return handleCanaryResult(canary2, payload, ctx);
            });
          }
          return handleCanaryResult(canary, payload, ctx);
        }
        const result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError;
          return result.then((result2) => runChecks(result2, checks2, ctx));
        }
        return runChecks(result, checks2, ctx);
      };
    }
    defineLazy(inst, "~standard", () => ({
      validate: (value) => {
        try {
          const r = safeParse(inst, value);
          return r.success ? { value: r.data } : { issues: r.error?.issues };
        } catch (_) {
          return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
        }
      },
      vendor: "zod",
      version: 1
    }));
  });
  $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
      if (def.coerce)
        try {
          payload.value = String(payload.value);
        } catch (_2) {}
      if (typeof payload.value === "string")
        return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
      const versionMap = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      };
      const v2 = versionMap[def.version];
      if (v2 === undefined)
        throw new Error(`Invalid UUID version: "${def.version}"`);
      def.pattern ?? (def.pattern = uuid3(v2));
    } else
      def.pattern ?? (def.pattern = uuid3());
    $ZodStringFormat.init(inst, def);
  });
  $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
  });
  $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      try {
        const trimmed = payload.value.trim();
        const url = new URL(trimmed);
        if (def.hostname) {
          def.hostname.lastIndex = 0;
          if (!def.hostname.test(url.hostname)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: def.hostname.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.protocol) {
          def.protocol.lastIndex = 0;
          if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: def.protocol.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.normalize) {
          payload.value = url.href;
        } else {
          payload.value = trimmed;
        }
        return;
      } catch (_) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
  });
  $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
    def.pattern ?? (def.pattern = nanoid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
  });
  $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = datetime(def));
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = date3);
    $ZodStringFormat.init(inst, def);
  });
  $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = time3(def));
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = duration);
    $ZodStringFormat.init(inst, def);
  });
  $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv4`;
  });
  $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv6`;
    inst._zod.check = (payload) => {
      try {
        new URL(`http://[${payload.value}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
    def.pattern ?? (def.pattern = mac(def.delimiter));
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `mac`;
  });
  $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      const parts = payload.value.split("/");
      try {
        if (parts.length !== 2)
          throw new Error;
        const [address, prefix] = parts;
        if (!prefix)
          throw new Error;
        const prefixNum = Number(prefix);
        if (`${prefixNum}` !== prefix)
          throw new Error;
        if (prefixNum < 0 || prefixNum > 128)
          throw new Error;
        new URL(`http://[${address}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64";
    inst._zod.check = (payload) => {
      if (isValidBase64(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64url";
    inst._zod.check = (payload) => {
      if (isValidBase64URL(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
  });
  $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (isValidJWT(payload.value, def.alg))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (def.fn(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? number;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Number(payload.value);
        } catch (_) {}
      const input = payload.value;
      if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
        return payload;
      }
      const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
      payload.issues.push({
        expected: "number",
        code: "invalid_type",
        input,
        inst,
        ...received ? { received } : {}
      });
      return payload;
    };
  });
  $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
    $ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def);
  });
  $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = boolean3;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Boolean(payload.value);
        } catch (_) {}
      const input = payload.value;
      if (typeof input === "boolean")
        return payload;
      payload.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = bigint3;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = BigInt(payload.value);
        } catch (_) {}
      if (typeof payload.value === "bigint")
        return payload;
      payload.issues.push({
        expected: "bigint",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
    $ZodCheckBigIntFormat.init(inst, def);
    $ZodBigInt.init(inst, def);
  });
  $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "symbol")
        return payload;
      payload.issues.push({
        expected: "symbol",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _undefined;
    inst._zod.values = new Set([undefined]);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "undefined")
        return payload;
      payload.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _null;
    inst._zod.values = new Set([null]);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (input === null)
        return payload;
      payload.issues.push({
        expected: "null",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.issues.push({
        expected: "never",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "undefined")
        return payload;
      payload.issues.push({
        expected: "void",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce) {
        try {
          payload.value = new Date(payload.value);
        } catch (_err) {}
      }
      const input = payload.value;
      const isDate = input instanceof Date;
      const isValidDate = isDate && !Number.isNaN(input.getTime());
      if (isValidDate)
        return payload;
      payload.issues.push({
        expected: "date",
        code: "invalid_type",
        input,
        ...isDate ? { received: "Invalid Date" } : {},
        inst
      });
      return payload;
    };
  });
  $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      const proms = [];
      for (let i = 0;i < input.length; i++) {
        const item = input[i];
        const result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
        } else {
          handleArrayResult(result, payload, i);
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
    $ZodType.init(inst, def);
    const desc2 = Object.getOwnPropertyDescriptor(def, "shape");
    if (!desc2?.get) {
      const sh = def.shape;
      Object.defineProperty(def, "shape", {
        get: () => {
          const newSh = { ...sh };
          Object.defineProperty(def, "shape", {
            value: newSh
          });
          return newSh;
        }
      });
    }
    const _normalized = cached(() => normalizeDef(def));
    defineLazy(inst._zod, "propValues", () => {
      const shape = def.shape;
      const propValues = {};
      for (const key in shape) {
        const field = shape[key]._zod;
        if (field.values) {
          propValues[key] ?? (propValues[key] = new Set);
          for (const v2 of field.values)
            propValues[key].add(v2);
        }
      }
      return propValues;
    });
    const isObject2 = isObject;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = {};
      const proms = [];
      const shape = value.shape;
      for (const key of value.keys) {
        const el = shape[key];
        const isOptionalOut = el._zod.optout === "optional";
        const r = el._zod.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
        } else {
          handlePropertyResult(r, payload, key, input, isOptionalOut);
        }
      }
      if (!catchall) {
        return proms.length ? Promise.all(proms).then(() => payload) : payload;
      }
      return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
  });
  $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
    $ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = cached(() => normalizeDef(def));
    const generateFastpass = (shape) => {
      const doc = new Doc(["shape", "payload", "ctx"]);
      const normalized = _normalized.value;
      const parseStr = (key) => {
        const k = esc(key);
        return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
      };
      doc.write(`const input = payload.value;`);
      const ids = Object.create(null);
      let counter = 0;
      for (const key of normalized.keys) {
        ids[key] = `key_${counter++}`;
      }
      doc.write(`const newResult = {};`);
      for (const key of normalized.keys) {
        const id = ids[key];
        const k = esc(key);
        const schema2 = shape[key];
        const isOptionalOut = schema2?._zod?.optout === "optional";
        doc.write(`const ${id} = ${parseStr(key)};`);
        if (isOptionalOut) {
          doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        } else {
          doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        }
      }
      doc.write(`payload.value = newResult;`);
      doc.write(`return payload;`);
      const fn = doc.compile();
      return (payload, ctx) => fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject2 = isObject;
    const jit = !globalConfig.jitless;
    const allowsEval2 = allowsEval;
    const fastEnabled = jit && allowsEval2.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
        if (!fastpass)
          fastpass = generateFastpass(def.shape);
        payload = fastpass(payload, ctx);
        if (!catchall)
          return payload;
        return handleCatchall([], input, payload, ctx, value, inst);
      }
      return superParse(payload, ctx);
    };
  });
  $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : undefined);
    defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
    defineLazy(inst._zod, "values", () => {
      if (def.options.every((o) => o._zod.values)) {
        return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
      }
      return;
    });
    defineLazy(inst._zod, "pattern", () => {
      if (def.options.every((o) => o._zod.pattern)) {
        const patterns = def.options.map((o) => o._zod.pattern);
        return new RegExp(`^(${patterns.map((p2) => cleanRegex(p2.source)).join("|")})$`);
      }
      return;
    });
    const single = def.options.length === 1;
    const first = def.options[0]._zod.run;
    inst._zod.parse = (payload, ctx) => {
      if (single) {
        return first(payload, ctx);
      }
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          if (result.issues.length === 0)
            return result;
          results.push(result);
        }
      }
      if (!async)
        return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
    $ZodUnion.init(inst, def);
    def.inclusive = false;
    const single = def.options.length === 1;
    const first = def.options[0]._zod.run;
    inst._zod.parse = (payload, ctx) => {
      if (single) {
        return first(payload, ctx);
      }
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          results.push(result);
        }
      }
      if (!async)
        return handleExclusiveUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleExclusiveUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
    def.inclusive = false;
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    defineLazy(inst._zod, "propValues", () => {
      const propValues = {};
      for (const option of def.options) {
        const pv = option._zod.propValues;
        if (!pv || Object.keys(pv).length === 0)
          throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
        for (const [k, v2] of Object.entries(pv)) {
          if (!propValues[k])
            propValues[k] = new Set;
          for (const val of v2) {
            propValues[k].add(val);
          }
        }
      }
      return propValues;
    });
    const disc = cached(() => {
      const opts = def.options;
      const map = new Map;
      for (const o of opts) {
        const values = o._zod.propValues?.[def.discriminator];
        if (!values || values.size === 0)
          throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
        for (const v2 of values) {
          if (map.has(v2)) {
            throw new Error(`Duplicate discriminator value "${String(v2)}"`);
          }
          map.set(v2, o);
        }
      }
      return map;
    });
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!isObject(input)) {
        payload.issues.push({
          code: "invalid_type",
          expected: "object",
          input,
          inst
        });
        return payload;
      }
      const opt = disc.value.get(input?.[def.discriminator]);
      if (opt) {
        return opt._zod.run(payload, ctx);
      }
      if (def.unionFallback) {
        return _super(payload, ctx);
      }
      payload.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: def.discriminator,
        input,
        path: [def.discriminator],
        inst
      });
      return payload;
    };
  });
  $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      const left = def.left._zod.run({ value: input, issues: [] }, ctx);
      const right = def.right._zod.run({ value: input, issues: [] }, ctx);
      const async = left instanceof Promise || right instanceof Promise;
      if (async) {
        return Promise.all([left, right]).then(([left2, right2]) => {
          return handleIntersectionResults(payload, left2, right2);
        });
      }
      return handleIntersectionResults(payload, left, right);
    };
  });
  $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
    $ZodType.init(inst, def);
    const items = def.items;
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          input,
          inst,
          expected: "tuple",
          code: "invalid_type"
        });
        return payload;
      }
      payload.value = [];
      const proms = [];
      const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
      const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
      if (!def.rest) {
        const tooBig = input.length > items.length;
        const tooSmall = input.length < optStart - 1;
        if (tooBig || tooSmall) {
          payload.issues.push({
            ...tooBig ? { code: "too_big", maximum: items.length, inclusive: true } : { code: "too_small", minimum: items.length },
            input,
            inst,
            origin: "array"
          });
          return payload;
        }
      }
      let i = -1;
      for (const item of items) {
        i++;
        if (i >= input.length) {
          if (i >= optStart)
            continue;
        }
        const result = item._zod.run({
          value: input[i],
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
      if (def.rest) {
        const rest = input.slice(items.length);
        for (const el of rest) {
          i++;
          const result = def.rest._zod.run({
            value: el,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleTupleResult(result2, payload, i)));
          } else {
            handleTupleResult(result, payload, i);
          }
        }
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!isPlainObject(input)) {
        payload.issues.push({
          expected: "record",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      const proms = [];
      const values = def.keyType._zod.values;
      if (values) {
        payload.value = {};
        const recordKeys = new Set;
        for (const key of values) {
          if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
            recordKeys.add(typeof key === "number" ? key.toString() : key);
            const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((result2) => {
                if (result2.issues.length) {
                  payload.issues.push(...prefixIssues(key, result2.issues));
                }
                payload.value[key] = result2.value;
              }));
            } else {
              if (result.issues.length) {
                payload.issues.push(...prefixIssues(key, result.issues));
              }
              payload.value[key] = result.value;
            }
          }
        }
        let unrecognized;
        for (const key in input) {
          if (!recordKeys.has(key)) {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          }
        }
        if (unrecognized && unrecognized.length > 0) {
          payload.issues.push({
            code: "unrecognized_keys",
            input,
            inst,
            keys: unrecognized
          });
        }
      } else {
        payload.value = {};
        for (const key of Reflect.ownKeys(input)) {
          if (key === "__proto__")
            continue;
          let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
          if (checkNumericKey) {
            const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
            if (retryResult instanceof Promise) {
              throw new Error("Async schemas not supported in object keys currently");
            }
            if (retryResult.issues.length === 0) {
              keyResult = retryResult;
            }
          }
          if (keyResult.issues.length) {
            if (def.mode === "loose") {
              payload.value[key] = input[key];
            } else {
              payload.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
                input: key,
                path: [key],
                inst
              });
            }
            continue;
          }
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[keyResult.value] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[keyResult.value] = result.value;
          }
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!(input instanceof Map)) {
        payload.issues.push({
          expected: "map",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      const proms = [];
      payload.value = new Map;
      for (const [key, value] of input) {
        const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
        if (keyResult instanceof Promise || valueResult instanceof Promise) {
          proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
            handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
          }));
        } else {
          handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
        }
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!(input instanceof Set)) {
        payload.issues.push({
          input,
          inst,
          expected: "set",
          code: "invalid_type"
        });
        return payload;
      }
      const proms = [];
      payload.value = new Set;
      for (const item of input) {
        const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleSetResult(result2, payload)));
        } else
          handleSetResult(result, payload);
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (valuesSet.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values,
        input,
        inst
      });
      return payload;
    };
  });
  $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    if (def.values.length === 0) {
      throw new Error("Cannot create literal schema with no valid values");
    }
    const values = new Set(def.values);
    inst._zod.values = values;
    inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (values.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values: def.values,
        input,
        inst
      });
      return payload;
    };
  });
  $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (input instanceof File)
        return payload;
      payload.issues.push({
        expected: "file",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        throw new $ZodEncodeError(inst.constructor.name);
      }
      const _out = def.transform(payload.value, payload);
      if (ctx.async) {
        const output = _out instanceof Promise ? _out : Promise.resolve(_out);
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      if (_out instanceof Promise) {
        throw new $ZodAsyncError;
      }
      payload.value = _out;
      return payload;
    };
  });
  $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? new Set([...def.innerType._zod.values, undefined]) : undefined;
    });
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
      if (def.innerType._zod.optin === "optional") {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise)
          return result.then((r) => handleOptionalResult(r, payload.value));
        return handleOptionalResult(result, payload.value);
      }
      if (payload.value === undefined) {
        return payload;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
    inst._zod.parse = (payload, ctx) => {
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
    });
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === null)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === undefined) {
        payload.value = def.defaultValue;
        return payload;
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleDefaultResult(result2, def));
      }
      return handleDefaultResult(result, def);
    };
  });
  $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === undefined) {
        payload.value = def.defaultValue;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => {
      const v2 = def.innerType._zod.values;
      return v2 ? new Set([...v2].filter((x2) => x2 !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleNonOptionalResult(result2, inst));
      }
      return handleNonOptionalResult(result, inst);
    };
  });
  $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        throw new $ZodEncodeError("ZodSuccess");
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.issues.length === 0;
          return payload;
        });
      }
      payload.value = result.issues.length === 0;
      return payload;
    };
  });
  $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.value;
          if (result2.issues.length) {
            payload.value = def.catchValue({
              ...payload,
              error: {
                issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
              },
              input: payload.value
            });
            payload.issues = [];
          }
          return payload;
        });
      }
      payload.value = result.value;
      if (result.issues.length) {
        payload.value = def.catchValue({
          ...payload,
          error: {
            issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
          },
          input: payload.value
        });
        payload.issues = [];
      }
      return payload;
    };
  });
  $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
        payload.issues.push({
          input: payload.value,
          inst,
          expected: "nan",
          code: "invalid_type"
        });
        return payload;
      }
      return payload;
    };
  });
  $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        const right = def.out._zod.run(payload, ctx);
        if (right instanceof Promise) {
          return right.then((right2) => handlePipeResult(right2, def.in, ctx));
        }
        return handlePipeResult(right, def.in, ctx);
      }
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handlePipeResult(left2, def.out, ctx));
      }
      return handlePipeResult(left, def.out, ctx);
    };
  });
  $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
      const direction = ctx.direction || "forward";
      if (direction === "forward") {
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
          return left.then((left2) => handleCodecAResult(left2, def, ctx));
        }
        return handleCodecAResult(left, def, ctx);
      } else {
        const right = def.out._zod.run(payload, ctx);
        if (right instanceof Promise) {
          return right.then((right2) => handleCodecAResult(right2, def, ctx));
        }
        return handleCodecAResult(right, def, ctx);
      }
    };
  });
  $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
    defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then(handleReadonlyResult);
      }
      return handleReadonlyResult(result);
    };
  });
  $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts) {
      if (typeof part === "object" && part !== null) {
        if (!part._zod.pattern) {
          throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
        }
        const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
        if (!source)
          throw new Error(`Invalid template literal part: ${part._zod.traits}`);
        const start = source.startsWith("^") ? 1 : 0;
        const end = source.endsWith("$") ? source.length - 1 : source.length;
        regexParts.push(source.slice(start, end));
      } else if (part === null || primitiveTypes.has(typeof part)) {
        regexParts.push(escapeRegex(`${part}`));
      } else {
        throw new Error(`Invalid template literal part: ${part}`);
      }
    }
    inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "string") {
        payload.issues.push({
          input: payload.value,
          inst,
          expected: "string",
          code: "invalid_type"
        });
        return payload;
      }
      inst._zod.pattern.lastIndex = 0;
      if (!inst._zod.pattern.test(payload.value)) {
        payload.issues.push({
          input: payload.value,
          inst,
          code: "invalid_format",
          format: def.format ?? "template_literal",
          pattern: inst._zod.pattern.source
        });
        return payload;
      }
      return payload;
    };
  });
  $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
    $ZodType.init(inst, def);
    inst._def = def;
    inst._zod.def = def;
    inst.implement = (func) => {
      if (typeof func !== "function") {
        throw new Error("implement() must be called with a function");
      }
      return function(...args) {
        const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
        const result = Reflect.apply(func, this, parsedArgs);
        if (inst._def.output) {
          return parse(inst._def.output, result);
        }
        return result;
      };
    };
    inst.implementAsync = (func) => {
      if (typeof func !== "function") {
        throw new Error("implementAsync() must be called with a function");
      }
      return async function(...args) {
        const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
        const result = await Reflect.apply(func, this, parsedArgs);
        if (inst._def.output) {
          return await parseAsync(inst._def.output, result);
        }
        return result;
      };
    };
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "function") {
        payload.issues.push({
          code: "invalid_type",
          expected: "function",
          input: payload.value,
          inst
        });
        return payload;
      }
      const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
      if (hasPromiseOutput) {
        payload.value = inst.implementAsync(payload.value);
      } else {
        payload.value = inst.implement(payload.value);
      }
      return payload;
    };
    inst.input = (...args) => {
      const F = inst.constructor;
      if (Array.isArray(args[0])) {
        return new F({
          type: "function",
          input: new $ZodTuple({
            type: "tuple",
            items: args[0],
            rest: args[1]
          }),
          output: inst._def.output
        });
      }
      return new F({
        type: "function",
        input: args[0],
        output: inst._def.output
      });
    };
    inst.output = (output) => {
      const F = inst.constructor;
      return new F({
        type: "function",
        input: inst._def.input,
        output
      });
    };
    return inst;
  });
  $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
    };
  });
  $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "innerType", () => def.getter());
    defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
    defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
    defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? undefined);
    defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? undefined);
    inst._zod.parse = (payload, ctx) => {
      const inner = inst._zod.innerType;
      return inner._zod.run(payload, ctx);
    };
  });
  $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
      return payload;
    };
    inst._zod.check = (payload) => {
      const input = payload.value;
      const r = def.fn(input);
      if (r instanceof Promise) {
        return r.then((r2) => handleRefineResult(r2, payload, input, inst));
      }
      handleRefineResult(r, payload, input, inst);
      return;
    };
  });
});

// node_modules/zod/v4/locales/ar.js
function ar_default() {
  return {
    localeError: error()
  };
}
var error = () => {
  const Sizable = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `مدخلات غير مقبولة: يفترض إدخال instanceof ${issue2.expected}، ولكن تم إدخال ${received}`;
        }
        return `مدخلات غير مقبولة: يفترض إدخال ${expected}، ولكن تم إدخال ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `مدخلات غير مقبولة: يفترض إدخال ${stringifyPrimitive(issue2.values[0])}`;
        return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
        return `أكبر من اللازم: يفترض أن تكون ${issue2.origin ?? "القيمة"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `أصغر من اللازم: يفترض لـ ${issue2.origin} أن يكون ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `نَص غير مقبول: يجب أن يبدأ بـ "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue2.divisor}`;
      case "unrecognized_keys":
        return `معرف${issue2.keys.length > 1 ? "ات" : ""} غريب${issue2.keys.length > 1 ? "ة" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${issue2.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${issue2.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
var init_ar = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/az.js
function az_default() {
  return {
    localeError: error2()
  };
}
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Yanlış dəyər: gözlənilən instanceof ${issue2.expected}, daxil olan ${received}`;
        }
        return `Yanlış dəyər: gözlənilən ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanlış dəyər: gözlənilən ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `Çox böyük: gözlənilən ${issue2.origin ?? "dəyər"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çox kiçik: gözlənilən ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
        if (_issue.format === "ends_with")
          return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
        if (_issue.format === "includes")
          return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
        if (_issue.format === "regex")
          return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
        return `Yanlış ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${issue2.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${issue2.origin} daxilində yanlış dəyər`;
      default:
        return `Yanlış dəyər`;
    }
  };
};
var init_az = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
function be_default() {
  return {
    localeError: error3()
  };
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "лік",
    array: "масіў"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Няправільны ўвод: чакаўся instanceof ${issue2.expected}, атрымана ${received}`;
        }
        return `Няправільны ўвод: чакаўся ${expected}, атрымана ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Няправільны ўвод: чакалася ${stringifyPrimitive(issue2.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Занадта вялікі: чакалася, што ${issue2.origin ?? "значэнне"} павінна быць ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта малы: чакалася, што ${issue2.origin} павінна ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Занадта малы: чакалася, што ${issue2.origin} павінна быць ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
        return `Няправільны ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${issue2.keys.length > 1 ? "ключы" : "ключ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${issue2.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};
var init_be = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/bg.js
function bg_default() {
  return {
    localeError: error4()
  };
}
var error4 = () => {
  const Sizable = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Невалиден вход: очакван instanceof ${issue2.expected}, получен ${received}`;
        }
        return `Невалиден вход: очакван ${expected}, получен ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Невалиден вход: очакван ${stringifyPrimitive(issue2.values[0])}`;
        return `Невалидна опция: очаквано едно от ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Твърде голямо: очаква се ${issue2.origin ?? "стойност"} да съдържа ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елемента"}`;
        return `Твърде голямо: очаква се ${issue2.origin ?? "стойност"} да бъде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Твърде малко: очаква се ${issue2.origin} да съдържа ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Твърде малко: очаква се ${issue2.origin} да бъде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Невалиден низ: трябва да започва с "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Невалиден низ: трябва да завършва с "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Невалиден низ: трябва да включва "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Невалиден низ: трябва да съвпада с ${_issue.pattern}`;
        let invalid_adj = "Невалиден";
        if (_issue.format === "emoji")
          invalid_adj = "Невалидно";
        if (_issue.format === "datetime")
          invalid_adj = "Невалидно";
        if (_issue.format === "date")
          invalid_adj = "Невалидна";
        if (_issue.format === "time")
          invalid_adj = "Невалидно";
        if (_issue.format === "duration")
          invalid_adj = "Невалидна";
        return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${issue2.keys.length > 1 ? "и" : ""} ключ${issue2.keys.length > 1 ? "ове" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${issue2.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${issue2.origin}`;
      default:
        return `Невалиден вход`;
    }
  };
};
var init_bg = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ca.js
function ca_default() {
  return {
    localeError: error5()
  };
}
var error5 = () => {
  const Sizable = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipus invàlid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
        }
        return `Tipus invàlid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor invàlid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opció invàlida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a màxim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingués ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a mínim" : "més de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingués ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format invàlid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
        return `Format invàlid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${issue2.origin}`;
      default:
        return `Entrada invàlida`;
    }
  };
};
var init_ca = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/cs.js
function cs_default() {
  return {
    localeError: error6()
  };
}
var error6 = () => {
  const Sizable = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "číslo",
    string: "řetězec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neplatný vstup: očekáváno instanceof ${issue2.expected}, obdrženo ${received}`;
        }
        return `Neplatný vstup: očekáváno ${expected}, obdrženo ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatný vstup: očekáváno ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatná možnost: očekávána jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš velká: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí mít ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvků"}`;
        }
        return `Hodnota je příliš malá: ${issue2.origin ?? "hodnota"} musí být ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
        return `Neplatný formát ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${issue2.origin}`;
      default:
        return `Neplatný vstup`;
    }
  };
};
var init_cs = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/da.js
function da_default() {
  return {
    localeError: error7()
  };
}
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
        }
        return `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig værdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldigt valg: forventede en af følgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: skal matche mønsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${issue2.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
var init_da = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/de.js
function de_default() {
  return {
    localeError: error8()
  };
}
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ungültige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
        }
        return `Ungültige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ungültige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ungültige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu groß: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ungültiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ungültig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${issue2.origin}`;
      default:
        return `Ungültige Eingabe`;
    }
  };
};
var init_de = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/en.js
function en_default() {
  return {
    localeError: error9()
  };
}
var error9 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
var init_en = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/eo.js
function eo_default() {
  return {
    localeError: error10()
  };
}
var error10 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nevalida enigo: atendiĝis instanceof ${issue2.expected}, riceviĝis ${received}`;
        }
        return `Nevalida enigo: atendiĝis ${expected}, riceviĝis ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendiĝis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendiĝis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendiĝis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendiĝis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendiĝis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} ŝlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
var init_eo = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/es.js
function es_default() {
  return {
    localeError: error11()
  };
}
var error11 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrada inválida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
        }
        return `Entrada inválida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opción inválida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Demasiado pequeño: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado pequeño: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inválida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
        return `Inválido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Entrada inválida`;
    }
  };
};
var init_es = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/fa.js
function fa_default() {
  return {
    localeError: error12()
  };
}
var error12 = () => {
  const Sizable = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "آرایه"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ورودی نامعتبر: می‌بایست instanceof ${issue2.expected} می‌بود، ${received} دریافت شد`;
        }
        return `ورودی نامعتبر: می‌بایست ${expected} می‌بود، ${received} دریافت شد`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ورودی نامعتبر: می‌بایست ${stringifyPrimitive(issue2.values[0])} می‌بود`;
        }
        return `گزینه نامعتبر: می‌بایست یکی از ${joinValues(issue2.values, "|")} می‌بود`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
        }
        return `خیلی بزرگ: ${issue2.origin ?? "مقدار"} باید ${adj}${issue2.maximum.toString()} باشد`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} باشد`;
        }
        return `خیلی کوچک: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
        }
        if (_issue.format === "ends_with") {
          return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
        }
        if (_issue.format === "includes") {
          return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
        }
        if (_issue.format === "regex") {
          return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${issue2.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${issue2.keys.length > 1 ? "های" : ""} ناشناس: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${issue2.origin}`;
      case "invalid_union":
        return `ورودی نامعتبر`;
      case "invalid_element":
        return `مقدار نامعتبر در ${issue2.origin}`;
      default:
        return `ورودی نامعتبر`;
    }
  };
};
var init_fa = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/fi.js
function fi_default() {
  return {
    localeError: error13()
  };
}
var error13 = () => {
  const Sizable = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
        }
        return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen syöte: täytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: täytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon täytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon täytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen syöte`;
    }
  };
};
var init_fi = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/fr.js
function fr_default() {
  return {
    localeError: error14()
  };
}
var error14 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrée invalide : instanceof ${issue2.expected} attendu, ${received} reçu`;
        }
        return `Entrée invalide : ${expected} attendu, ${received} reçu`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${issue2.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
        return `Trop grand : ${issue2.origin ?? "valeur"} doit être ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : ${issue2.origin} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : ${issue2.origin} doit être ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
var init_fr = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/fr-CA.js
function fr_CA_default() {
  return {
    localeError: error15()
  };
}
var error15 = () => {
  const Sizable = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrée invalide : attendu instanceof ${issue2.expected}, reçu ${received}`;
        }
        return `Entrée invalide : attendu ${expected}, reçu ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrée invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "≤" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "≥" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chaîne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clé${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entrée invalide`;
    }
  };
};
var init_fr_CA = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/he.js
function he_default() {
  return {
    localeError: error16()
  };
}
var error16 = () => {
  const TypeNames = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  };
  const Sizable = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
  };
  const typeEntry = (t) => t ? TypeNames[t] : undefined;
  const typeLabel = (t) => {
    const e = typeEntry(t);
    if (e)
      return e.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => `ה${typeLabel(t)}`;
  const verbFor = (t) => {
    const e = typeEntry(t);
    const gender = e?.gender ?? "m";
    return gender === "f" ? "צריכה להיות" : "צריך להיות";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `קלט לא תקין: צריך להיות instanceof ${issue2.expected}, התקבל ${received}`;
        }
        return `קלט לא תקין: צריך להיות ${expected}, התקבל ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return `ערך לא תקין: הערך חייב להיות ${stringifyPrimitive(issue2.values[0])}`;
        }
        const stringified = issue2.values.map((v2) => stringifyPrimitive(v2));
        if (issue2.values.length === 2) {
          return `ערך לא תקין: האפשרויות המתאימות הן ${stringified[0]} או ${stringified[1]}`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return `ערך לא תקין: האפשרויות המתאימות הן ${restValues} או ${lastValue}`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.longLabel ?? "ארוך"} מדי: ${subject} צריכה להכיל ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `קטן או שווה ל-${issue2.maximum}` : `קטן מ-${issue2.maximum}`;
          return `גדול מדי: ${subject} צריך להיות ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} או פחות` : `פחות מ-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `גדול מדי: ${subject} ${verb} להכיל ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be2 = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.longLabel} מדי: ${subject} ${be2} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.longLabel ?? "גדול"} מדי: ${subject} ${be2} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.shortLabel ?? "קצר"} מדי: ${subject} צריכה להכיל ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "או יותר" : "לפחות"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `גדול או שווה ל-${issue2.minimum}` : `גדול מ-${issue2.minimum}`;
          return `קטן מדי: ${subject} צריך להיות ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "צריכה" : "צריך";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "לפחות פריט אחד" : "לפחות פריט אחד";
            return `קטן מדי: ${subject} ${verb} להכיל ${singularPhrase}`;
          }
          const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} או יותר` : `יותר מ-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `קטן מדי: ${subject} ${verb} להכיל ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be2 = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.shortLabel} מדי: ${subject} ${be2} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.shortLabel ?? "קטן"} מדי: ${subject} ${be2} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `המחרוזת חייבת להתחיל ב "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `המחרוזת חייבת להסתיים ב "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `המחרוזת חייבת לכלול "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `המחרוזת חייבת להתאים לתבנית ${_issue.pattern}`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "תקינה" : "תקין";
        return `${noun} לא ${adjective}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${issue2.divisor}`;
      case "unrecognized_keys":
        return `מפתח${issue2.keys.length > 1 ? "ות" : ""} לא מזוה${issue2.keys.length > 1 ? "ים" : "ה"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key": {
        return `שדה לא תקין באובייקט`;
      }
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return `ערך לא תקין ב${place}`;
      }
      default:
        return `קלט לא תקין`;
    }
  };
};
var init_he = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/hu.js
function hu_default() {
  return {
    localeError: error17()
  };
}
var error17 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "szám",
    array: "tömb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Érvénytelen bemenet: a várt érték instanceof ${issue2.expected}, a kapott érték ${received}`;
        }
        return `Érvénytelen bemenet: a várt érték ${expected}, a kapott érték ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Érvénytelen bemenet: a várt érték ${stringifyPrimitive(issue2.values[0])}`;
        return `Érvénytelen opció: valamelyik érték várt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Túl nagy: ${issue2.origin ?? "érték"} mérete túl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `Túl nagy: a bemeneti érték ${issue2.origin ?? "érték"} túl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Túl kicsi: a bemeneti érték ${issue2.origin} mérete túl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Túl kicsi: a bemeneti érték ${issue2.origin} túl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
        if (_issue.format === "ends_with")
          return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
        if (_issue.format === "includes")
          return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
        return `Érvénytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${issue2.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${issue2.origin}`;
      default:
        return `Érvénytelen bemenet`;
    }
  };
};
var init_hu = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "ն" : "ը");
}
function hy_default() {
  return {
    localeError: error18()
  };
}
var error18 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "նշան",
        many: "նշաններ"
      },
      verb: "ունենալ"
    },
    file: {
      unit: {
        one: "բայթ",
        many: "բայթեր"
      },
      verb: "ունենալ"
    },
    array: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    },
    set: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "մուտք",
    email: "էլ. հասցե",
    url: "URL",
    emoji: "էմոջի",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO ամսաթիվ և ժամ",
    date: "ISO ամսաթիվ",
    time: "ISO ժամ",
    duration: "ISO տևողություն",
    ipv4: "IPv4 հասցե",
    ipv6: "IPv6 հասցե",
    cidrv4: "IPv4 միջակայք",
    cidrv6: "IPv6 միջակայք",
    base64: "base64 ձևաչափով տող",
    base64url: "base64url ձևաչափով տող",
    json_string: "JSON տող",
    e164: "E.164 համար",
    jwt: "JWT",
    template_literal: "մուտք"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "թիվ",
    array: "զանգված"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Սխալ մուտքագրում․ սպասվում էր instanceof ${issue2.expected}, ստացվել է ${received}`;
        }
        return `Սխալ մուտքագրում․ սպասվում էր ${expected}, ստացվել է ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Սխալ մուտքագրում․ սպասվում էր ${stringifyPrimitive(issue2.values[1])}`;
        return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin ?? "արժեք")} կունենա ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin ?? "արժեք")} լինի ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin)} կունենա ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${withDefiniteArticle(issue2.origin)} լինի ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Սխալ տող․ պետք է սկսվի "${_issue.prefix}"-ով`;
        if (_issue.format === "ends_with")
          return `Սխալ տող․ պետք է ավարտվի "${_issue.suffix}"-ով`;
        if (_issue.format === "includes")
          return `Սխալ տող․ պետք է պարունակի "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Սխալ տող․ պետք է համապատասխանի ${_issue.pattern} ձևաչափին`;
        return `Սխալ ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${issue2.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${issue2.keys.length > 1 ? "ներ" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${withDefiniteArticle(issue2.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${withDefiniteArticle(issue2.origin)}-ում`;
      default:
        return `Սխալ մուտքագրում`;
    }
  };
};
var init_hy = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/id.js
function id_default() {
  return {
    localeError: error19()
  };
}
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
var init_id = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/is.js
function is_default() {
  return {
    localeError: error20()
  };
}
var error20 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "númer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Rangt gildi: Þú slóst inn ${received} þar sem á að vera instanceof ${issue2.expected}`;
        }
        return `Rangt gildi: Þú slóst inn ${received} þar sem á að vera ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Rangt gildi: gert ráð fyrir ${stringifyPrimitive(issue2.values[0])}`;
        return `Ógilt val: má vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Of stórt: gert er ráð fyrir að ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
        return `Of stórt: gert er ráð fyrir að ${issue2.origin ?? "gildi"} sé ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Of lítið: gert er ráð fyrir að ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Of lítið: gert er ráð fyrir að ${issue2.origin} sé ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ógildur strengur: verður að byrja á "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ógildur strengur: verður að enda á "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ógildur strengur: verður að innihalda "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ógildur strengur: verður að fylgja mynstri ${_issue.pattern}`;
        return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${issue2.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
var init_is = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/it.js
function it_default() {
  return {
    localeError: error21()
  };
}
var error21 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
        }
        return `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
var init_it = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ja.js
function ja_default() {
  return {
    localeError: error22()
  };
}
var error22 = () => {
  const Sizable = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数値",
    array: "配列"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `無効な入力: instanceof ${issue2.expected}が期待されましたが、${received}が入力されました`;
        }
        return `無効な入力: ${expected}が期待されましたが、${received}が入力されました`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無効な入力: ${stringifyPrimitive(issue2.values[0])}が期待されました`;
        return `無効な選択: ${joinValues(issue2.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const adj = issue2.inclusive ? "以下である" : "より小さい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
        return `大きすぎる値: ${issue2.origin ?? "値"}は${issue2.maximum.toString()}${adj}必要があります`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "以上である" : "より大きい";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${sizing.unit}${adj}必要があります`;
        return `小さすぎる値: ${issue2.origin}は${issue2.minimum.toString()}${adj}必要があります`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
        if (_issue.format === "ends_with")
          return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
        if (_issue.format === "includes")
          return `無効な文字列: "${_issue.includes}"を含む必要があります`;
        if (_issue.format === "regex")
          return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
        return `無効な${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${issue2.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${issue2.keys.length > 1 ? "群" : ""}: ${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${issue2.origin}内の無効な値`;
      default:
        return `無効な入力`;
    }
  };
};
var init_ja = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ka.js
function ka_default() {
  return {
    localeError: error23()
  };
}
var error23 = () => {
  const Sizable = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "რიცხვი",
    string: "სტრინგი",
    boolean: "ბულეანი",
    function: "ფუნქცია",
    array: "მასივი"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `არასწორი შეყვანა: მოსალოდნელი instanceof ${issue2.expected}, მიღებული ${received}`;
        }
        return `არასწორი შეყვანა: მოსალოდნელი ${expected}, მიღებული ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `არასწორი შეყვანა: მოსალოდნელი ${stringifyPrimitive(issue2.values[0])}`;
        return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${joinValues(issue2.values, "|")}-დან`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `ზედმეტად დიდი: მოსალოდნელი ${issue2.origin ?? "მნიშვნელობა"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `ზედმეტად დიდი: მოსალოდნელი ${issue2.origin ?? "მნიშვნელობა"} იყოს ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ზედმეტად პატარა: მოსალოდნელი ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `ზედმეტად პატარა: მოსალოდნელი ${issue2.origin} იყოს ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `არასწორი სტრინგი: უნდა იწყებოდეს "${_issue.prefix}"-ით`;
        }
        if (_issue.format === "ends_with")
          return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${_issue.suffix}"-ით`;
        if (_issue.format === "includes")
          return `არასწორი სტრინგი: უნდა შეიცავდეს "${_issue.includes}"-ს`;
        if (_issue.format === "regex")
          return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${_issue.pattern}`;
        return `არასწორი ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${issue2.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${issue2.keys.length > 1 ? "ები" : "ი"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${issue2.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${issue2.origin}-ში`;
      default:
        return `არასწორი შეყვანა`;
    }
  };
};
var init_ka = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/km.js
function km_default() {
  return {
    localeError: error24()
  };
}
var error24 = () => {
  const Sizable = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "លេខ",
    array: "អារេ (Array)",
    null: "គ្មានតម្លៃ (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${issue2.expected} ប៉ុន្តែទទួលបាន ${received}`;
        }
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${expected} ប៉ុន្តែទទួលបាន ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${stringifyPrimitive(issue2.values[0])}`;
        return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
        return `ធំពេក៖ ត្រូវការ ${issue2.origin ?? "តម្លៃ"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `តូចពេក៖ ត្រូវការ ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
        return `មិនត្រឹមត្រូវ៖ ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue2.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      case "invalid_union":
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue2.origin}`;
      default:
        return `ទិន្នន័យមិនត្រឹមត្រូវ`;
    }
  };
};
var init_km = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}
var init_kh = __esm(() => {
  init_km();
});

// node_modules/zod/v4/locales/ko.js
function ko_default() {
  return {
    localeError: error25()
  };
}
var error25 = () => {
  const Sizable = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `잘못된 입력: 예상 타입은 instanceof ${issue2.expected}, 받은 타입은 ${received}입니다`;
        }
        return `잘못된 입력: 예상 타입은 ${expected}, 받은 타입은 ${received}입니다`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `잘못된 입력: 값은 ${stringifyPrimitive(issue2.values[0])} 이어야 합니다`;
        return `잘못된 옵션: ${joinValues(issue2.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const adj = issue2.inclusive ? "이하" : "미만";
        const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing)
          return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "값"}이 너무 큽니다: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "이상" : "초과";
        const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "요소";
        if (sizing) {
          return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "값"}이 너무 작습니다: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
        }
        if (_issue.format === "ends_with")
          return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
        if (_issue.format === "includes")
          return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
        if (_issue.format === "regex")
          return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
        return `잘못된 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${issue2.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${issue2.origin}`;
      case "invalid_union":
        return `잘못된 입력`;
      case "invalid_element":
        return `잘못된 값: ${issue2.origin}`;
      default:
        return `잘못된 입력`;
    }
  };
};
var init_ko = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/lt.js
function getUnitTypeFromNumber(number2) {
  const abs = Math.abs(number2);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
function lt_default() {
  return {
    localeError: error26()
  };
}
var capitalizeFirstCharacter = (text3) => {
  return text3.charAt(0).toUpperCase() + text3.slice(1);
}, error26 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skaičius",
    bigint: "sveikasis skaičius",
    string: "eilutė",
    boolean: "loginė reikšmė",
    undefined: "neapibrėžta reikšmė",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulinė reikšmė"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Gautas tipas ${received}, o tikėtasi - instanceof ${issue2.expected}`;
        }
        return `Gautas tipas ${received}, o tikėtasi - ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Privalo būti ${stringifyPrimitive(issue2.values[0])}`;
        return `Privalo būti vienas iš ${joinValues(issue2.values, "|")} pasirinkimų`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "elementų"}`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "elementų"}`;
        const adj = issue2.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi būti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Eilutė privalo prasidėti "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Eilutė privalo pasibaigti "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Eilutė privalo įtraukti "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Eilutė privalo atitikti ${_issue.pattern}`;
        return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
var init_lt = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/mk.js
function mk_default() {
  return {
    localeError: error27()
  };
}
var error27 = () => {
  const Sizable = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "број",
    array: "низа"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Грешен внес: се очекува instanceof ${issue2.expected}, примено ${received}`;
        }
        return `Грешен внес: се очекува ${expected}, примено ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Грешана опција: се очекува една ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да има ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементи"}`;
        return `Премногу голем: се очекува ${issue2.origin ?? "вредноста"} да биде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Премногу мал: се очекува ${issue2.origin} да има ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Премногу мал: се очекува ${issue2.origin} да биде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${issue2.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${issue2.origin}`;
      default:
        return `Грешен внес`;
    }
  };
};
var init_mk = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ms.js
function ms_default() {
  return {
    localeError: error28()
  };
}
var error28 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
var init_ms = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/nl.js
function nl_default() {
  return {
    localeError: error29()
  };
}
var error29 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
        }
        return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht één van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
        return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
var init_nl = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/no.js
function no_default() {
  return {
    localeError: error30()
  };
}
var error30 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
        }
        return `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til å ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til å ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: må starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: må ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: må inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
var init_no = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ota.js
function ota_default() {
  return {
    localeError: error31()
  };
}
var error31 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Fâsit giren: umulan instanceof ${issue2.expected}, alınan ${received}`;
        }
        return `Fâsit giren: umulan ${expected}, alınan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Fâsit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `Fâsit tercih: mûteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
        return `Fazla büyük: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
        }
        return `Fazla küçük: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
        if (_issue.format === "ends_with")
          return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
        if (_issue.format === "regex")
          return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
        return `Fâsit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${issue2.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${issue2.origin} için tanınmayan kıymet var.`;
      default:
        return `Kıymet tanınamadı.`;
    }
  };
};
var init_ota = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ps.js
function ps_default() {
  return {
    localeError: error32()
  };
}
var error32 = () => {
  const Sizable = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "عدد",
    array: "ارې"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ناسم ورودي: باید instanceof ${issue2.expected} وای, مګر ${received} ترلاسه شو`;
        }
        return `ناسم ورودي: باید ${expected} وای, مګر ${received} ترلاسه شو`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `ناسم ورودي: باید ${stringifyPrimitive(issue2.values[0])} وای`;
        }
        return `ناسم انتخاب: باید یو له ${joinValues(issue2.values, "|")} څخه وای`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
        }
        return `ډیر لوی: ${issue2.origin ?? "ارزښت"} باید ${adj}${issue2.maximum.toString()} وي`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} ${sizing.unit} ولري`;
        }
        return `ډیر کوچنی: ${issue2.origin} باید ${adj}${issue2.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
        }
        if (_issue.format === "ends_with") {
          return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
        }
        if (_issue.format === "includes") {
          return `ناسم متن: باید "${_issue.includes}" ولري`;
        }
        if (_issue.format === "regex") {
          return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${issue2.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${issue2.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${issue2.origin} کې`;
      case "invalid_union":
        return `ناسمه ورودي`;
      case "invalid_element":
        return `ناسم عنصر په ${issue2.origin} کې`;
      default:
        return `ناسمه ورودي`;
    }
  };
};
var init_ps = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/pl.js
function pl_default() {
  return {
    localeError: error33()
  };
}
var error33 = () => {
  const Sizable = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
        }
        return `Nieprawidłowe dane wejściowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawidłowe dane wejściowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za duża wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt duż(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za mała wartość: oczekiwano, że ${issue2.origin ?? "wartość"} będzie mieć ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "elementów"}`;
        }
        return `Zbyt mał(y/a/e): oczekiwano, że ${issue2.origin ?? "wartość"} będzie wynosić ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
        return `Nieprawidłow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${issue2.origin}`;
      default:
        return `Nieprawidłowe dane wejściowe`;
    }
  };
};
var init_pl = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/pt.js
function pt_default() {
  return {
    localeError: error34()
  };
}
var error34 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "número",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipo inválido: esperado instanceof ${issue2.expected}, recebido ${received}`;
        }
        return `Tipo inválido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inválida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Opção inválida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inválido: deve começar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inválido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inválido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${issue2.origin}`;
      default:
        return `Campo inválido`;
    }
  };
};
var init_pt = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
function ru_default() {
  return {
    localeError: error35()
  };
}
var error35 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "массив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Неверный ввод: ожидалось instanceof ${issue2.expected}, получено ${received}`;
        }
        return `Неверный ввод: ожидалось ${expected}, получено ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неверный ввод: ожидалось ${stringifyPrimitive(issue2.values[0])}`;
        return `Неверный вариант: ожидалось одно из ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет иметь ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `Слишком большое значение: ожидалось, что ${issue2.origin ?? "значение"} будет ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет иметь ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${issue2.origin} будет ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неверная строка: должна содержать "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
        return `Неверный ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${issue2.keys.length > 1 ? "ые" : "ый"} ключ${issue2.keys.length > 1 ? "и" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${issue2.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${issue2.origin}`;
      default:
        return `Неверные входные данные`;
    }
  };
};
var init_ru = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/sl.js
function sl_default() {
  return {
    localeError: error36()
  };
}
var error36 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "število",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neveljaven vnos: pričakovano instanceof ${issue2.expected}, prejeto ${received}`;
        }
        return `Neveljaven vnos: pričakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pričakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna možnost: pričakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pričakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pričakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pričakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i ključi" : " ključ"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
var init_sl = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/sv.js
function sv_default() {
  return {
    localeError: error37()
  };
}
var error37 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ogiltig inmatning: förväntat instanceof ${issue2.expected}, fick ${received}`;
        }
        return `Ogiltig inmatning: förväntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: förväntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: förväntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För stor(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `För stor(t): förväntat ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `För lite(t): förväntade ${issue2.origin ?? "värdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${issue2.origin ?? "värdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
};
var init_sv = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ta.js
function ta_default() {
  return {
    localeError: error38()
  };
}
var error38 = () => {
  const Sizable = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "எண்",
    array: "அணி",
    null: "வெறுமை"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${issue2.expected}, பெறப்பட்டது ${received}`;
        }
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${expected}, பெறப்பட்டது ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${stringifyPrimitive(issue2.values[0])}`;
        return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${joinValues(issue2.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
        }
        return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue2.origin ?? "மதிப்பு"} ${adj}${issue2.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`;
        }
        return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue2.origin} ${adj}${issue2.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
        if (_issue.format === "ends_with")
          return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
        if (_issue.format === "includes")
          return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
        if (_issue.format === "regex")
          return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
        return `தவறான ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${issue2.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${issue2.keys.length > 1 ? "கள்" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${issue2.origin} இல் தவறான மதிப்பு`;
      default:
        return `தவறான உள்ளீடு`;
    }
  };
};
var init_ta = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/th.js
function th_default() {
  return {
    localeError: error39()
  };
}
var error39 = () => {
  const Sizable = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "ตัวเลข",
    array: "อาร์เรย์ (Array)",
    null: "ไม่มีค่า (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${issue2.expected} แต่ได้รับ ${received}`;
        }
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${expected} แต่ได้รับ ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `ค่าไม่ถูกต้อง: ควรเป็น ${stringifyPrimitive(issue2.values[0])}`;
        return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "ไม่เกิน" : "น้อยกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
        return `เกินกำหนด: ${issue2.origin ?? "ค่า"} ควรมี${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "อย่างน้อย" : "มากกว่า";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `น้อยกว่ากำหนด: ${issue2.origin} ควรมี${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
        if (_issue.format === "regex")
          return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
        return `รูปแบบไม่ถูกต้อง: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue2.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${issue2.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${issue2.origin}`;
      default:
        return `ข้อมูลไม่ถูกต้อง`;
    }
  };
};
var init_th = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/tr.js
function tr_default() {
  return {
    localeError: error40()
  };
}
var error40 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Geçersiz değer: beklenen instanceof ${issue2.expected}, alınan ${received}`;
        }
        return `Geçersiz değer: beklenen ${expected}, alınan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Geçersiz değer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "öğe"}`;
        return `Çok büyük: beklenen ${issue2.origin ?? "değer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Çok küçük: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
        if (_issue.format === "ends_with")
          return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Geçersiz metin: "${_issue.includes}" içermeli`;
        if (_issue.format === "regex")
          return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
        return `Geçersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${issue2.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${issue2.origin} içinde geçersiz değer`;
      default:
        return `Geçersiz değer`;
    }
  };
};
var init_tr = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/uk.js
function uk_default() {
  return {
    localeError: error41()
  };
}
var error41 = () => {
  const Sizable = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Неправильні вхідні дані: очікується instanceof ${issue2.expected}, отримано ${received}`;
        }
        return `Неправильні вхідні дані: очікується ${expected}, отримано ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Неправильні вхідні дані: очікується ${stringifyPrimitive(issue2.values[0])}`;
        return `Неправильна опція: очікується одне з ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "елементів"}`;
        return `Занадто велике: очікується, що ${issue2.origin ?? "значення"} буде ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Занадто мале: очікується, що ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Занадто мале: очікується, що ${issue2.origin} буде ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Неправильний рядок: повинен містити "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
        return `Неправильний ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${issue2.keys.length > 1 ? "і" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${issue2.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${issue2.origin}`;
      default:
        return `Неправильні вхідні дані`;
    }
  };
};
var init_uk = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}
var init_ua = __esm(() => {
  init_uk();
});

// node_modules/zod/v4/locales/ur.js
function ur_default() {
  return {
    localeError: error42()
  };
}
var error42 = () => {
  const Sizable = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "نمبر",
    array: "آرے",
    null: "نل"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `غلط ان پٹ: instanceof ${issue2.expected} متوقع تھا، ${received} موصول ہوا`;
        }
        return `غلط ان پٹ: ${expected} متوقع تھا، ${received} موصول ہوا`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `غلط ان پٹ: ${stringifyPrimitive(issue2.values[0])} متوقع تھا`;
        return `غلط آپشن: ${joinValues(issue2.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کے ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
        return `بہت بڑا: ${issue2.origin ?? "ویلیو"} کا ${adj}${issue2.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `بہت چھوٹا: ${issue2.origin} کے ${adj}${issue2.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
        }
        return `بہت چھوٹا: ${issue2.origin} کا ${adj}${issue2.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
        }
        if (_issue.format === "ends_with")
          return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
        if (_issue.format === "includes")
          return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
        if (_issue.format === "regex")
          return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
        return `غلط ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${issue2.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${issue2.keys.length > 1 ? "ز" : ""}: ${joinValues(issue2.keys, "، ")}`;
      case "invalid_key":
        return `${issue2.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${issue2.origin} میں غلط ویلیو`;
      default:
        return `غلط ان پٹ`;
    }
  };
};
var init_ur = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/uz.js
function uz_default() {
  return {
    localeError: error43()
  };
}
var error43 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo‘lishi kerak" },
    file: { unit: "bayt", verb: "bo‘lishi kerak" },
    array: { unit: "element", verb: "bo‘lishi kerak" },
    set: { unit: "element", verb: "bo‘lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Noto‘g‘ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
        }
        return `Noto‘g‘ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Noto‘g‘ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
        return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
        return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Noto‘g‘ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
        if (_issue.format === "ends_with")
          return `Noto‘g‘ri satr: "${_issue.suffix}" bilan tugashi kerak`;
        if (_issue.format === "includes")
          return `Noto‘g‘ri satr: "${_issue.includes}" ni o‘z ichiga olishi kerak`;
        if (_issue.format === "regex")
          return `Noto‘g‘ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
        return `Noto‘g‘ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto‘g‘ri raqam: ${issue2.divisor} ning karralisi bo‘lishi kerak`;
      case "unrecognized_keys":
        return `Noma’lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto‘g‘ri`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto‘g‘ri qiymat`;
      default:
        return `Noto‘g‘ri kirish`;
    }
  };
};
var init_uz = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/vi.js
function vi_default() {
  return {
    localeError: error44()
  };
}
var error44 = () => {
  const Sizable = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "số",
    array: "mảng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Đầu vào không hợp lệ: mong đợi instanceof ${issue2.expected}, nhận được ${received}`;
        }
        return `Đầu vào không hợp lệ: mong đợi ${expected}, nhận được ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Đầu vào không hợp lệ: mong đợi ${stringifyPrimitive(issue2.values[0])}`;
        return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
        return `Quá lớn: mong đợi ${issue2.origin ?? "giá trị"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Quá nhỏ: mong đợi ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Quá nhỏ: mong đợi ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${issue2.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${issue2.origin}`;
      default:
        return `Đầu vào không hợp lệ`;
    }
  };
};
var init_vi = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/zh-CN.js
function zh_CN_default() {
  return {
    localeError: error45()
  };
}
var error45 = () => {
  const Sizable = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "数字",
    array: "数组",
    null: "空值(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `无效输入：期望 instanceof ${issue2.expected}，实际接收 ${received}`;
        }
        return `无效输入：期望 ${expected}，实际接收 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `无效输入：期望 ${stringifyPrimitive(issue2.values[0])}`;
        return `无效选项：期望以下之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "个元素"}`;
        return `数值过大：期望 ${issue2.origin ?? "值"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `数值过小：期望 ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `无效字符串：必须以 "${_issue.prefix}" 开头`;
        if (_issue.format === "ends_with")
          return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
        if (_issue.format === "includes")
          return `无效字符串：必须包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
        return `无效${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${issue2.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${issue2.origin} 中包含无效值(value)`;
      default:
        return `无效输入`;
    }
  };
};
var init_zh_CN = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/zh-TW.js
function zh_TW_default() {
  return {
    localeError: error46()
  };
}
var error46 = () => {
  const Sizable = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `無效的輸入值：預期為 instanceof ${issue2.expected}，但收到 ${received}`;
        }
        return `無效的輸入值：預期為 ${expected}，但收到 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `無效的輸入值：預期為 ${stringifyPrimitive(issue2.values[0])}`;
        return `無效的選項：預期為以下其中之一 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "個元素"}`;
        return `數值過大：預期 ${issue2.origin ?? "值"} 應為 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `數值過小：預期 ${issue2.origin} 應為 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
        }
        if (_issue.format === "ends_with")
          return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
        if (_issue.format === "includes")
          return `無效的字串：必須包含 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `無效的字串：必須符合格式 ${_issue.pattern}`;
        return `無效的 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${issue2.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${issue2.keys.length > 1 ? "們" : ""}：${joinValues(issue2.keys, "、")}`;
      case "invalid_key":
        return `${issue2.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${issue2.origin} 中有無效的值`;
      default:
        return `無效的輸入值`;
    }
  };
};
var init_zh_TW = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/yo.js
function yo_default() {
  return {
    localeError: error47()
  };
}
var error47 = () => {
  const Sizable = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nọ́mbà",
    array: "akopọ"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${issue2.expected}, àmọ̀ a rí ${received}`;
        }
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${expected}, àmọ̀ a rí ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ìbáwọlé aṣìṣe: a ní láti fi ${stringifyPrimitive(issue2.values[0])}`;
        return `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tó pọ̀ jù: a ní láti jẹ́ pé ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
        return `Tó pọ̀ jù: a ní láti jẹ́ ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Kéré ju: a ní láti jẹ́ pé ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
        return `Kéré ju: a ní láti jẹ́ ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_issue.pattern}`;
        return `Aṣìṣe: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${issue2.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${issue2.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
var init_yo = __esm(() => {
  init_util();
});

// node_modules/zod/v4/locales/index.js
var exports_locales = {};
__export(exports_locales, {
  zhTW: () => zh_TW_default,
  zhCN: () => zh_CN_default,
  yo: () => yo_default,
  vi: () => vi_default,
  uz: () => uz_default,
  ur: () => ur_default,
  uk: () => uk_default,
  ua: () => ua_default,
  tr: () => tr_default,
  th: () => th_default,
  ta: () => ta_default,
  sv: () => sv_default,
  sl: () => sl_default,
  ru: () => ru_default,
  pt: () => pt_default,
  ps: () => ps_default,
  pl: () => pl_default,
  ota: () => ota_default,
  no: () => no_default,
  nl: () => nl_default,
  ms: () => ms_default,
  mk: () => mk_default,
  lt: () => lt_default,
  ko: () => ko_default,
  km: () => km_default,
  kh: () => kh_default,
  ka: () => ka_default,
  ja: () => ja_default,
  it: () => it_default,
  is: () => is_default,
  id: () => id_default,
  hy: () => hy_default,
  hu: () => hu_default,
  he: () => he_default,
  frCA: () => fr_CA_default,
  fr: () => fr_default,
  fi: () => fi_default,
  fa: () => fa_default,
  es: () => es_default,
  eo: () => eo_default,
  en: () => en_default,
  de: () => de_default,
  da: () => da_default,
  cs: () => cs_default,
  ca: () => ca_default,
  bg: () => bg_default,
  be: () => be_default,
  az: () => az_default,
  ar: () => ar_default
});
var init_locales = __esm(() => {
  init_ar();
  init_az();
  init_be();
  init_bg();
  init_ca();
  init_cs();
  init_da();
  init_de();
  init_en();
  init_eo();
  init_es();
  init_fa();
  init_fi();
  init_fr();
  init_fr_CA();
  init_he();
  init_hu();
  init_hy();
  init_id();
  init_is();
  init_it();
  init_ja();
  init_ka();
  init_kh();
  init_km();
  init_ko();
  init_lt();
  init_mk();
  init_ms();
  init_nl();
  init_no();
  init_ota();
  init_ps();
  init_pl();
  init_pt();
  init_ru();
  init_sl();
  init_sv();
  init_ta();
  init_th();
  init_tr();
  init_ua();
  init_uk();
  init_ur();
  init_uz();
  init_vi();
  init_zh_CN();
  init_zh_TW();
  init_yo();
});

// node_modules/zod/v4/core/registries.js
class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema2, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema2, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema2);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema2) {
    const meta = this._map.get(schema2);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema2);
    return this;
  }
  get(schema2) {
    const p2 = schema2._zod.parent;
    if (p2) {
      const pm = { ...this.get(p2) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema2) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema2);
  }
  has(schema2) {
    return this._map.has(schema2);
  }
}
function registry() {
  return new $ZodRegistry;
}
var _a, $output, $input, globalRegistry;
var init_registries = __esm(() => {
  $output = Symbol("ZodOutput");
  $input = Symbol("ZodInput");
  (_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
  globalRegistry = globalThis.__zod_globalRegistry;
});

// node_modules/zod/v4/core/api.js
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _positive(params) {
  return _gt(0, params);
}
function _negative(params) {
  return _lt(0, params);
}
function _nonpositive(params) {
  return _lte(0, params);
}
function _nonnegative(params) {
  return _gte(0, params);
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
function _property(property, schema2, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema: schema2,
    ...normalizeParams(params)
  });
}
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
function _trim() {
  return _overwrite((input) => input.trim());
}
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
function _slugify() {
  return _overwrite((input) => slugify(input));
}
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v2) => [v2, v2])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema2 = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema2;
}
function _refine(Class2, fn, _params) {
  const schema2 = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema2;
}
function _superRefine(fn) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {};
  return ch;
}
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v2) => typeof v2 === "string" ? v2.toLowerCase() : v2);
    falsyArray = falsyArray.map((v2) => typeof v2 === "string" ? v2.toLowerCase() : v2);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: (input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec,
          continue: false
        });
        return {};
      }
    },
    reverseTransform: (input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    },
    error: params.error
  });
  return codec;
}
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}
var TimePrecision;
var init_api = __esm(() => {
  init_checks2();
  init_registries();
  init_schemas();
  init_util();
  TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
  };
});

// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? undefined
  };
}
function process2(schema2, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema2._zod.def;
  const seen = ctx.seen.get(schema2);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema2);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema2, result);
  const overrideSchema = schema2._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema2],
      path: _params.path
    };
    if (schema2._zod.processJSONSchema) {
      schema2._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema2, ctx, _json, params);
    }
    const parent = schema2._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process2(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta2 = ctx.metadataRegistry.get(schema2);
  if (meta2)
    Object.assign(result.schema, meta2);
  if (ctx.io === "input" && isTransforming(schema2)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema2);
  return _result.schema;
}
function extractDefs(ctx, schema2) {
  const root = ctx.seen.get(schema2);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema3 = seen.schema;
    for (const key in schema3) {
      delete schema3[key];
    }
    schema3.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema2 === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema2 !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema2) {
  const root = ctx.seen.get(schema2);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema3 = seen.def ?? seen.schema;
    const _cached = { ...schema3 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema3.allOf = schema3.allOf ?? [];
        schema3.allOf.push(refSchema);
      } else {
        Object.assign(schema3, refSchema);
      }
      Object.assign(schema3, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema3) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema3[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema3) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema3[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema3[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema3.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema3) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema3[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema3[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema3,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {} else {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema2)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema2["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema2, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema2, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema2, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process2(schema2, ctx);
  extractDefs(ctx, schema2);
  return finalize(ctx, schema2);
}, createStandardJSONSchemaMethod = (schema2, io2, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io: io2, processors });
  process2(schema2, ctx);
  extractDefs(ctx, schema2);
  return finalize(ctx, schema2);
};
var init_to_json_schema = __esm(() => {
  init_registries();
});

// node_modules/zod/v4/core/json-schema-processors.js
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema2] = entry;
      process2(schema2, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema2] = entry;
      extractDefs(ctx2, schema2);
      schemas[key] = finalize(ctx2, schema2);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process2(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}
var formatMap, stringProcessor = (schema2, ctx, _json, _params) => {
  const json3 = _json;
  json3.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema2._zod.bag;
  if (typeof minimum === "number")
    json3.minLength = minimum;
  if (typeof maximum === "number")
    json3.maxLength = maximum;
  if (format) {
    json3.format = formatMap[format] ?? format;
    if (json3.format === "")
      delete json3.format;
    if (format === "time") {
      delete json3.format;
    }
  }
  if (contentEncoding)
    json3.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json3.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json3.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
}, numberProcessor = (schema2, ctx, _json, _params) => {
  const json3 = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema2._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json3.type = "integer";
  else
    json3.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json3.minimum = exclusiveMinimum;
      json3.exclusiveMinimum = true;
    } else {
      json3.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json3.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json3.minimum;
      else
        delete json3.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json3.maximum = exclusiveMaximum;
      json3.exclusiveMaximum = true;
    } else {
      json3.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json3.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json3.maximum;
      else
        delete json3.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json3.multipleOf = multipleOf;
}, booleanProcessor = (_schema, _ctx, json3, _params) => {
  json3.type = "boolean";
}, bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
}, symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
}, nullProcessor = (_schema, ctx, json3, _params) => {
  if (ctx.target === "openapi-3.0") {
    json3.type = "string";
    json3.nullable = true;
    json3.enum = [null];
  } else {
    json3.type = "null";
  }
}, undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
}, voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
}, neverProcessor = (_schema, _ctx, json3, _params) => {
  json3.not = {};
}, anyProcessor = (_schema, _ctx, _json, _params) => {}, unknownProcessor = (_schema, _ctx, _json, _params) => {}, dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
}, enumProcessor = (schema2, _ctx, json3, _params) => {
  const def = schema2._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v2) => typeof v2 === "number"))
    json3.type = "number";
  if (values.every((v2) => typeof v2 === "string"))
    json3.type = "string";
  json3.enum = values;
}, literalProcessor = (schema2, ctx, json3, _params) => {
  const def = schema2._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === undefined) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else {}
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {} else if (vals.length === 1) {
    const val = vals[0];
    json3.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json3.enum = [val];
    } else {
      json3.const = val;
    }
  } else {
    if (vals.every((v2) => typeof v2 === "number"))
      json3.type = "number";
    if (vals.every((v2) => typeof v2 === "string"))
      json3.type = "string";
    if (vals.every((v2) => typeof v2 === "boolean"))
      json3.type = "boolean";
    if (vals.every((v2) => v2 === null))
      json3.type = "null";
    json3.enum = vals;
  }
}, nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
}, templateLiteralProcessor = (schema2, _ctx, json3, _params) => {
  const _json = json3;
  const pattern = schema2._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
}, fileProcessor = (schema2, _ctx, json3, _params) => {
  const _json = json3;
  const file = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema2._zod.bag;
  if (minimum !== undefined)
    file.minLength = minimum;
  if (maximum !== undefined)
    file.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file.contentMediaType = mime[0];
      Object.assign(_json, file);
    } else {
      Object.assign(_json, file);
      _json.anyOf = mime.map((m2) => ({ contentMediaType: m2 }));
    }
  } else {
    Object.assign(_json, file);
  }
}, successProcessor = (_schema, _ctx, json3, _params) => {
  json3.type = "boolean";
}, customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
}, functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
}, transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
}, mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
}, setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
}, arrayProcessor = (schema2, ctx, _json, params) => {
  const json3 = _json;
  const def = schema2._zod.def;
  const { minimum, maximum } = schema2._zod.bag;
  if (typeof minimum === "number")
    json3.minItems = minimum;
  if (typeof maximum === "number")
    json3.maxItems = maximum;
  json3.type = "array";
  json3.items = process2(def.element, ctx, { ...params, path: [...params.path, "items"] });
}, objectProcessor = (schema2, ctx, _json, params) => {
  const json3 = _json;
  const def = schema2._zod.def;
  json3.type = "object";
  json3.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json3.properties[key] = process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v2 = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v2.optin === undefined;
    } else {
      return v2.optout === undefined;
    }
  }));
  if (requiredKeys.size > 0) {
    json3.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json3.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json3.additionalProperties = false;
  } else if (def.catchall) {
    json3.additionalProperties = process2(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
}, unionProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x2, i) => process2(x2, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json3.oneOf = options;
  } else {
    json3.anyOf = options;
  }
}, intersectionProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  const a2 = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b2 = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a2) ? a2.allOf : [a2],
    ...isSimpleIntersection(b2) ? b2.allOf : [b2]
  ];
  json3.allOf = allOf;
}, tupleProcessor = (schema2, ctx, _json, params) => {
  const json3 = _json;
  const def = schema2._zod.def;
  json3.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x2, i) => process2(x2, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json3.prefixItems = prefixItems;
    if (rest) {
      json3.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json3.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json3.items.anyOf.push(rest);
    }
    json3.minItems = prefixItems.length;
    if (!rest) {
      json3.maxItems = prefixItems.length;
    }
  } else {
    json3.items = prefixItems;
    if (rest) {
      json3.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema2._zod.bag;
  if (typeof minimum === "number")
    json3.minItems = minimum;
  if (typeof maximum === "number")
    json3.maxItems = maximum;
}, recordProcessor = (schema2, ctx, _json, params) => {
  const json3 = _json;
  const def = schema2._zod.def;
  json3.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json3.patternProperties = {};
    for (const pattern of patterns) {
      json3.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json3.propertyNames = process2(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json3.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v2) => typeof v2 === "string" || typeof v2 === "number");
    if (validKeyValues.length > 0) {
      json3.required = validKeyValues;
    }
  }
}, nullableProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  const inner = process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json3.nullable = true;
  } else {
    json3.anyOf = [inner, { type: "null" }];
  }
}, nonoptionalProcessor = (schema2, ctx, _json, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
}, defaultProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
  json3.default = JSON.parse(JSON.stringify(def.defaultValue));
}, prefaultProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json3._prefault = JSON.parse(JSON.stringify(def.defaultValue));
}, catchProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json3.default = catchValue;
}, pipeProcessor = (schema2, ctx, _json, params) => {
  const def = schema2._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = innerType;
}, readonlyProcessor = (schema2, ctx, json3, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
  json3.readOnly = true;
}, promiseProcessor = (schema2, ctx, _json, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
}, optionalProcessor = (schema2, ctx, _json, params) => {
  const def = schema2._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = def.innerType;
}, lazyProcessor = (schema2, ctx, _json, params) => {
  const innerType = schema2._zod.innerType;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema2);
  seen.ref = innerType;
}, allProcessors;
var init_json_schema_processors = __esm(() => {
  init_to_json_schema();
  init_util();
  formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  };
  allProcessors = {
    string: stringProcessor,
    number: numberProcessor,
    boolean: booleanProcessor,
    bigint: bigintProcessor,
    symbol: symbolProcessor,
    null: nullProcessor,
    undefined: undefinedProcessor,
    void: voidProcessor,
    never: neverProcessor,
    any: anyProcessor,
    unknown: unknownProcessor,
    date: dateProcessor,
    enum: enumProcessor,
    literal: literalProcessor,
    nan: nanProcessor,
    template_literal: templateLiteralProcessor,
    file: fileProcessor,
    success: successProcessor,
    custom: customProcessor,
    function: functionProcessor,
    transform: transformProcessor,
    map: mapProcessor,
    set: setProcessor,
    array: arrayProcessor,
    object: objectProcessor,
    union: unionProcessor,
    intersection: intersectionProcessor,
    tuple: tupleProcessor,
    record: recordProcessor,
    nullable: nullableProcessor,
    nonoptional: nonoptionalProcessor,
    default: defaultProcessor,
    prefault: prefaultProcessor,
    catch: catchProcessor,
    pipe: pipeProcessor,
    readonly: readonlyProcessor,
    promise: promiseProcessor,
    optional: optionalProcessor,
    lazy: lazyProcessor
  };
});

// node_modules/zod/v4/core/json-schema-generator.js
class JSONSchemaGenerator {
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  process(schema2, _params = { path: [], schemaPath: [] }) {
    return process2(schema2, this.ctx, _params);
  }
  emit(schema2, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema2);
    const result = finalize(this.ctx, schema2);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
}
var init_json_schema_generator = __esm(() => {
  init_json_schema_processors();
  init_to_json_schema();
});

// node_modules/zod/v4/core/json-schema.js
var exports_json_schema = {};
var init_json_schema = () => {};

// node_modules/zod/v4/core/index.js
var exports_core2 = {};
__export(exports_core2, {
  version: () => version2,
  util: () => exports_util,
  treeifyError: () => treeifyError,
  toJSONSchema: () => toJSONSchema,
  toDotPath: () => toDotPath,
  safeParseAsync: () => safeParseAsync,
  safeParse: () => safeParse,
  safeEncodeAsync: () => safeEncodeAsync,
  safeEncode: () => safeEncode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeDecode: () => safeDecode,
  registry: () => registry,
  regexes: () => exports_regexes,
  process: () => process2,
  prettifyError: () => prettifyError,
  parseAsync: () => parseAsync,
  parse: () => parse,
  meta: () => meta,
  locales: () => exports_locales,
  isValidJWT: () => isValidJWT,
  isValidBase64URL: () => isValidBase64URL,
  isValidBase64: () => isValidBase64,
  initializeContext: () => initializeContext,
  globalRegistry: () => globalRegistry,
  globalConfig: () => globalConfig,
  formatError: () => formatError,
  flattenError: () => flattenError,
  finalize: () => finalize,
  extractDefs: () => extractDefs,
  encodeAsync: () => encodeAsync,
  encode: () => encode,
  describe: () => describe,
  decodeAsync: () => decodeAsync,
  decode: () => decode,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  config: () => config,
  clone: () => clone,
  _xor: () => _xor,
  _xid: () => _xid,
  _void: () => _void,
  _uuidv7: () => _uuidv7,
  _uuidv6: () => _uuidv6,
  _uuidv4: () => _uuidv4,
  _uuid: () => _uuid,
  _url: () => _url,
  _uppercase: () => _uppercase,
  _unknown: () => _unknown,
  _union: () => _union,
  _undefined: () => _undefined2,
  _ulid: () => _ulid,
  _uint64: () => _uint64,
  _uint32: () => _uint32,
  _tuple: () => _tuple,
  _trim: () => _trim,
  _transform: () => _transform,
  _toUpperCase: () => _toUpperCase,
  _toLowerCase: () => _toLowerCase,
  _templateLiteral: () => _templateLiteral,
  _symbol: () => _symbol,
  _superRefine: () => _superRefine,
  _success: () => _success,
  _stringbool: () => _stringbool,
  _stringFormat: () => _stringFormat,
  _string: () => _string,
  _startsWith: () => _startsWith,
  _slugify: () => _slugify,
  _size: () => _size,
  _set: () => _set,
  _safeParseAsync: () => _safeParseAsync,
  _safeParse: () => _safeParse,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeEncode: () => _safeEncode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeDecode: () => _safeDecode,
  _regex: () => _regex,
  _refine: () => _refine,
  _record: () => _record,
  _readonly: () => _readonly,
  _property: () => _property,
  _promise: () => _promise,
  _positive: () => _positive,
  _pipe: () => _pipe,
  _parseAsync: () => _parseAsync,
  _parse: () => _parse,
  _overwrite: () => _overwrite,
  _optional: () => _optional,
  _number: () => _number,
  _nullable: () => _nullable,
  _null: () => _null2,
  _normalize: () => _normalize,
  _nonpositive: () => _nonpositive,
  _nonoptional: () => _nonoptional,
  _nonnegative: () => _nonnegative,
  _never: () => _never,
  _negative: () => _negative,
  _nativeEnum: () => _nativeEnum,
  _nanoid: () => _nanoid,
  _nan: () => _nan,
  _multipleOf: () => _multipleOf,
  _minSize: () => _minSize,
  _minLength: () => _minLength,
  _min: () => _gte,
  _mime: () => _mime,
  _maxSize: () => _maxSize,
  _maxLength: () => _maxLength,
  _max: () => _lte,
  _map: () => _map,
  _mac: () => _mac,
  _lte: () => _lte,
  _lt: () => _lt,
  _lowercase: () => _lowercase,
  _literal: () => _literal,
  _length: () => _length,
  _lazy: () => _lazy,
  _ksuid: () => _ksuid,
  _jwt: () => _jwt,
  _isoTime: () => _isoTime,
  _isoDuration: () => _isoDuration,
  _isoDateTime: () => _isoDateTime,
  _isoDate: () => _isoDate,
  _ipv6: () => _ipv6,
  _ipv4: () => _ipv4,
  _intersection: () => _intersection,
  _int64: () => _int64,
  _int32: () => _int32,
  _int: () => _int,
  _includes: () => _includes,
  _guid: () => _guid,
  _gte: () => _gte,
  _gt: () => _gt,
  _float64: () => _float64,
  _float32: () => _float32,
  _file: () => _file,
  _enum: () => _enum,
  _endsWith: () => _endsWith,
  _encodeAsync: () => _encodeAsync,
  _encode: () => _encode,
  _emoji: () => _emoji2,
  _email: () => _email,
  _e164: () => _e164,
  _discriminatedUnion: () => _discriminatedUnion,
  _default: () => _default,
  _decodeAsync: () => _decodeAsync,
  _decode: () => _decode,
  _date: () => _date,
  _custom: () => _custom,
  _cuid2: () => _cuid2,
  _cuid: () => _cuid,
  _coercedString: () => _coercedString,
  _coercedNumber: () => _coercedNumber,
  _coercedDate: () => _coercedDate,
  _coercedBoolean: () => _coercedBoolean,
  _coercedBigint: () => _coercedBigint,
  _cidrv6: () => _cidrv6,
  _cidrv4: () => _cidrv4,
  _check: () => _check,
  _catch: () => _catch,
  _boolean: () => _boolean,
  _bigint: () => _bigint,
  _base64url: () => _base64url,
  _base64: () => _base64,
  _array: () => _array,
  _any: () => _any,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  JSONSchema: () => exports_json_schema,
  Doc: () => Doc,
  $output: () => $output,
  $input: () => $input,
  $constructor: () => $constructor,
  $brand: () => $brand,
  $ZodXor: () => $ZodXor,
  $ZodXID: () => $ZodXID,
  $ZodVoid: () => $ZodVoid,
  $ZodUnknown: () => $ZodUnknown,
  $ZodUnion: () => $ZodUnion,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUUID: () => $ZodUUID,
  $ZodURL: () => $ZodURL,
  $ZodULID: () => $ZodULID,
  $ZodType: () => $ZodType,
  $ZodTuple: () => $ZodTuple,
  $ZodTransform: () => $ZodTransform,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodSymbol: () => $ZodSymbol,
  $ZodSuccess: () => $ZodSuccess,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodString: () => $ZodString,
  $ZodSet: () => $ZodSet,
  $ZodRegistry: () => $ZodRegistry,
  $ZodRecord: () => $ZodRecord,
  $ZodRealError: () => $ZodRealError,
  $ZodReadonly: () => $ZodReadonly,
  $ZodPromise: () => $ZodPromise,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPipe: () => $ZodPipe,
  $ZodOptional: () => $ZodOptional,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodObject: () => $ZodObject,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodNumber: () => $ZodNumber,
  $ZodNullable: () => $ZodNullable,
  $ZodNull: () => $ZodNull,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNever: () => $ZodNever,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNaN: () => $ZodNaN,
  $ZodMap: () => $ZodMap,
  $ZodMAC: () => $ZodMAC,
  $ZodLiteral: () => $ZodLiteral,
  $ZodLazy: () => $ZodLazy,
  $ZodKSUID: () => $ZodKSUID,
  $ZodJWT: () => $ZodJWT,
  $ZodIntersection: () => $ZodIntersection,
  $ZodISOTime: () => $ZodISOTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODate: () => $ZodISODate,
  $ZodIPv6: () => $ZodIPv6,
  $ZodIPv4: () => $ZodIPv4,
  $ZodGUID: () => $ZodGUID,
  $ZodFunction: () => $ZodFunction,
  $ZodFile: () => $ZodFile,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodError: () => $ZodError,
  $ZodEnum: () => $ZodEnum,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEmail: () => $ZodEmail,
  $ZodE164: () => $ZodE164,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodDefault: () => $ZodDefault,
  $ZodDate: () => $ZodDate,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodCustom: () => $ZodCustom,
  $ZodCodec: () => $ZodCodec,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheck: () => $ZodCheck,
  $ZodCatch: () => $ZodCatch,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCUID: () => $ZodCUID,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodBoolean: () => $ZodBoolean,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBase64: () => $ZodBase64,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodArray: () => $ZodArray,
  $ZodAny: () => $ZodAny
});
var init_core2 = __esm(() => {
  init_util();
  init_regexes();
  init_locales();
  init_json_schema_processors();
  init_json_schema_generator();
  init_json_schema();
  init_core();
  init_parse();
  init_errors2();
  init_schemas();
  init_checks2();
  init_versions();
  init_registries();
  init_api();
  init_to_json_schema();
});

// node_modules/zod/v4/classic/checks.js
var exports_checks2 = {};
__export(exports_checks2, {
  uppercase: () => _uppercase,
  trim: () => _trim,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  regex: () => _regex,
  property: () => _property,
  positive: () => _positive,
  overwrite: () => _overwrite,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonnegative: () => _nonnegative,
  negative: () => _negative,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  length: () => _length,
  includes: () => _includes,
  gte: () => _gte,
  gt: () => _gt,
  endsWith: () => _endsWith
});
var init_checks3 = __esm(() => {
  init_core2();
});

// node_modules/zod/v4/classic/iso.js
var exports_iso = {};
__export(exports_iso, {
  time: () => time4,
  duration: () => duration2,
  datetime: () => datetime2,
  date: () => date4,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
function date4(params) {
  return _isoDate(ZodISODate, params);
}
function time4(params) {
  return _isoTime(ZodISOTime, params);
}
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}
var ZodISODateTime, ZodISODate, ZodISOTime, ZodISODuration;
var init_iso = __esm(() => {
  init_core2();
  init_schemas2();
  ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
});

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
    }
  });
}, ZodError, ZodRealError;
var init_errors3 = __esm(() => {
  init_core2();
  init_core2();
  init_util();
  ZodError = $constructor("ZodError", initializer2);
  ZodRealError = $constructor("ZodError", initializer2, {
    Parent: Error
  });
});

// node_modules/zod/v4/classic/parse.js
var parse3, parseAsync2, safeParse2, safeParseAsync2, encode2, decode2, encodeAsync2, decodeAsync2, safeEncode2, safeDecode2, safeEncodeAsync2, safeDecodeAsync2;
var init_parse2 = __esm(() => {
  init_core2();
  init_errors3();
  parse3 = /* @__PURE__ */ _parse(ZodRealError);
  parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
  safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
  safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
  encode2 = /* @__PURE__ */ _encode(ZodRealError);
  decode2 = /* @__PURE__ */ _decode(ZodRealError);
  encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
  decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
  safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
  safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
  safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
  safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
});

// node_modules/zod/v4/classic/schemas.js
var exports_schemas2 = {};
__export(exports_schemas2, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid5,
  url: () => url,
  unknown: () => unknown,
  union: () => union2,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  transform: () => transform,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  set: () => set,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  promise: () => promise,
  preprocess: () => preprocess,
  prefault: () => prefault,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  nonoptional: () => nonoptional,
  never: () => never,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  meta: () => meta2,
  map: () => map,
  mac: () => mac2,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  literal: () => literal,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json3,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  function: () => _function,
  float64: () => float64,
  float32: () => float32,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  date: () => date5,
  custom: () => custom2,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  codec: () => codec,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean4,
  bigint: () => bigint4,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array2,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIntersection: () => ZodIntersection,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny
});
function string2(params) {
  return _string(ZodString, params);
}
function email2(params) {
  return _email(ZodEmail, params);
}
function guid2(params) {
  return _guid(ZodGUID, params);
}
function uuid5(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: /^https?$/,
    hostname: exports_regexes.domain,
    ...exports_util.normalizeParams(params)
  });
}
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
function ulid2(params) {
  return _ulid(ZodULID, params);
}
function xid2(params) {
  return _xid(ZodXID, params);
}
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
function mac2(params) {
  return _mac(ZodMAC, params);
}
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
function base642(params) {
  return _base64(ZodBase64, params);
}
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
function e1642(params) {
  return _e164(ZodE164, params);
}
function jwt(params) {
  return _jwt(ZodJWT, params);
}
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", exports_regexes.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", exports_regexes.hex, _params);
}
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = `${alg}_${enc}`;
  const regex = exports_regexes[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
function number2(params) {
  return _number(ZodNumber, params);
}
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
function boolean4(params) {
  return _boolean(ZodBoolean, params);
}
function bigint4(params) {
  return _bigint(ZodBigInt, params);
}
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
function _null3(params) {
  return _null2(ZodNull, params);
}
function any() {
  return _any(ZodAny);
}
function unknown() {
  return _unknown(ZodUnknown);
}
function never(params) {
  return _never(ZodNever, params);
}
function _void2(params) {
  return _void(ZodVoid, params);
}
function date5(params) {
  return _date(ZodDate, params);
}
function array2(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema2) {
  const shape = schema2._zod.def.shape;
  return _enum2(Object.keys(shape));
}
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...exports_util.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...exports_util.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...exports_util.normalizeParams(params)
  });
}
function union2(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...exports_util.normalizeParams(params)
  });
}
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: false,
    ...exports_util.normalizeParams(params)
  });
}
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...exports_util.normalizeParams(params)
  });
}
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...exports_util.normalizeParams(params)
  });
}
function record(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  const k = clone(keyType);
  k._zod.values = undefined;
  return new ZodRecord({
    type: "record",
    keyType: k,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...exports_util.normalizeParams(params)
  });
}
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v2) => [v2, v2])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...exports_util.normalizeParams(params)
  });
}
function file(params) {
  return _file(ZodFile, params);
}
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...exports_util.normalizeParams(params)
  });
}
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
function nan(params) {
  return _nan(ZodNaN, params);
}
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...exports_util.normalizeParams(params)
  });
}
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array2(unknown()),
    output: params?.output ?? unknown()
  });
}
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
  });
  ch._zod.check = fn;
  return ch;
}
function custom2(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
function _instanceof(cls, params = {}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...exports_util.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
function json3(params) {
  const jsonSchema = lazy(() => {
    return union2([string2(params), number2(), boolean4(), _null3(), array2(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema2) {
  return pipe(transform(fn), schema2);
}
var ZodType, _ZodString, ZodString, ZodStringFormat, ZodEmail, ZodGUID, ZodUUID, ZodURL, ZodEmoji, ZodNanoID, ZodCUID, ZodCUID2, ZodULID, ZodXID, ZodKSUID, ZodIPv4, ZodMAC, ZodIPv6, ZodCIDRv4, ZodCIDRv6, ZodBase64, ZodBase64URL, ZodE164, ZodJWT, ZodCustomStringFormat, ZodNumber, ZodNumberFormat, ZodBoolean, ZodBigInt, ZodBigIntFormat, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodDate, ZodArray, ZodObject, ZodUnion, ZodXor, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodEnum, ZodLiteral, ZodFile, ZodTransform, ZodOptional, ZodExactOptional, ZodNullable, ZodDefault, ZodPrefault, ZodNonOptional, ZodSuccess, ZodCatch, ZodNaN, ZodPipe, ZodCodec, ZodReadonly, ZodTemplateLiteral, ZodLazy, ZodPromise, ZodFunction, ZodCustom, describe2, meta2, stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
var init_schemas2 = __esm(() => {
  init_core2();
  init_core2();
  init_json_schema_processors();
  init_to_json_schema();
  init_checks3();
  init_iso();
  init_parse2();
  ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
    $ZodType.init(inst, def);
    Object.assign(inst["~standard"], {
      jsonSchema: {
        input: createStandardJSONSchemaMethod(inst, "input"),
        output: createStandardJSONSchemaMethod(inst, "output")
      }
    });
    inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
    inst.def = def;
    inst.type = def.type;
    Object.defineProperty(inst, "_def", { value: def });
    inst.check = (...checks3) => {
      return inst.clone(exports_util.mergeDefs(def, {
        checks: [
          ...def.checks ?? [],
          ...checks3.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
        ]
      }), {
        parent: true
      });
    };
    inst.with = inst.check;
    inst.clone = (def2, params) => clone(inst, def2, params);
    inst.brand = () => inst;
    inst.register = (reg, meta2) => {
      reg.add(inst, meta2);
      return inst;
    };
    inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => safeParse2(inst, data, params);
    inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.encode = (data, params) => encode2(inst, data, params);
    inst.decode = (data, params) => decode2(inst, data, params);
    inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
    inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
    inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
    inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
    inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
    inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
    inst.refine = (check, params) => inst.check(refine(check, params));
    inst.superRefine = (refinement) => inst.check(superRefine(refinement));
    inst.overwrite = (fn) => inst.check(_overwrite(fn));
    inst.optional = () => optional(inst);
    inst.exactOptional = () => exactOptional(inst);
    inst.nullable = () => nullable(inst);
    inst.nullish = () => optional(nullable(inst));
    inst.nonoptional = (params) => nonoptional(inst, params);
    inst.array = () => array2(inst);
    inst.or = (arg) => union2([inst, arg]);
    inst.and = (arg) => intersection(inst, arg);
    inst.transform = (tx) => pipe(inst, transform(tx));
    inst.default = (def2) => _default2(inst, def2);
    inst.prefault = (def2) => prefault(inst, def2);
    inst.catch = (params) => _catch2(inst, params);
    inst.pipe = (target) => pipe(inst, target);
    inst.readonly = () => readonly(inst);
    inst.describe = (description) => {
      const cl = inst.clone();
      globalRegistry.add(cl, { description });
      return cl;
    };
    Object.defineProperty(inst, "description", {
      get() {
        return globalRegistry.get(inst)?.description;
      },
      configurable: true
    });
    inst.meta = (...args) => {
      if (args.length === 0) {
        return globalRegistry.get(inst);
      }
      const cl = inst.clone();
      globalRegistry.add(cl, args[0]);
      return cl;
    };
    inst.isOptional = () => inst.safeParse(undefined).success;
    inst.isNullable = () => inst.safeParse(null).success;
    inst.apply = (fn) => fn(inst);
    return inst;
  });
  _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => stringProcessor(inst, ctx, json3, params);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    inst.regex = (...args) => inst.check(_regex(...args));
    inst.includes = (...args) => inst.check(_includes(...args));
    inst.startsWith = (...args) => inst.check(_startsWith(...args));
    inst.endsWith = (...args) => inst.check(_endsWith(...args));
    inst.min = (...args) => inst.check(_minLength(...args));
    inst.max = (...args) => inst.check(_maxLength(...args));
    inst.length = (...args) => inst.check(_length(...args));
    inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
    inst.lowercase = (params) => inst.check(_lowercase(params));
    inst.uppercase = (params) => inst.check(_uppercase(params));
    inst.trim = () => inst.check(_trim());
    inst.normalize = (...args) => inst.check(_normalize(...args));
    inst.toLowerCase = () => inst.check(_toLowerCase());
    inst.toUpperCase = () => inst.check(_toUpperCase());
    inst.slugify = () => inst.check(_slugify());
  });
  ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(_email(ZodEmail, params));
    inst.url = (params) => inst.check(_url(ZodURL, params));
    inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(_xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(_e164(ZodE164, params));
    inst.datetime = (params) => inst.check(datetime2(params));
    inst.date = (params) => inst.check(date4(params));
    inst.time = (params) => inst.check(time4(params));
    inst.duration = (params) => inst.check(duration2(params));
  });
  ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  });
  ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
    $ZodMAC.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
    $ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
    $ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => numberProcessor(inst, ctx, json3, params);
    inst.gt = (value, params) => inst.check(_gt(value, params));
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.lt = (value, params) => inst.check(_lt(value, params));
    inst.lte = (value, params) => inst.check(_lte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    inst.int = (params) => inst.check(int(params));
    inst.safe = (params) => inst.check(int(params));
    inst.positive = (params) => inst.check(_gt(0, params));
    inst.nonnegative = (params) => inst.check(_gte(0, params));
    inst.negative = (params) => inst.check(_lt(0, params));
    inst.nonpositive = (params) => inst.check(_lte(0, params));
    inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
    inst.step = (value, params) => inst.check(_multipleOf(value, params));
    inst.finite = () => inst;
    const bag = inst._zod.bag;
    inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
  });
  ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
    $ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
  });
  ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
    $ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => booleanProcessor(inst, ctx, json3, params);
  });
  ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
    $ZodBigInt.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => bigintProcessor(inst, ctx, json3, params);
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.gt = (value, params) => inst.check(_gt(value, params));
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.lt = (value, params) => inst.check(_lt(value, params));
    inst.lte = (value, params) => inst.check(_lte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    inst.positive = (params) => inst.check(_gt(BigInt(0), params));
    inst.negative = (params) => inst.check(_lt(BigInt(0), params));
    inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
    inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
    inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
  });
  ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
    $ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
  });
  ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
    $ZodSymbol.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => symbolProcessor(inst, ctx, json3, params);
  });
  ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
    $ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => undefinedProcessor(inst, ctx, json3, params);
  });
  ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
    $ZodNull.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => nullProcessor(inst, ctx, json3, params);
  });
  ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
    $ZodAny.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => anyProcessor(inst, ctx, json3, params);
  });
  ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => unknownProcessor(inst, ctx, json3, params);
  });
  ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => neverProcessor(inst, ctx, json3, params);
  });
  ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
    $ZodVoid.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => voidProcessor(inst, ctx, json3, params);
  });
  ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
    $ZodDate.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => dateProcessor(inst, ctx, json3, params);
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
  });
  ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => arrayProcessor(inst, ctx, json3, params);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
    inst.nonempty = (params) => inst.check(_minLength(1, params));
    inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(_length(len, params));
    inst.unwrap = () => inst.element;
  });
  ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
    $ZodObjectJIT.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => objectProcessor(inst, ctx, json3, params);
    exports_util.defineLazy(inst, "shape", () => {
      return def.shape;
    });
    inst.keyof = () => _enum2(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
    inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
    inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
    inst.extend = (incoming) => {
      return exports_util.extend(inst, incoming);
    };
    inst.safeExtend = (incoming) => {
      return exports_util.safeExtend(inst, incoming);
    };
    inst.merge = (other) => exports_util.merge(inst, other);
    inst.pick = (mask) => exports_util.pick(inst, mask);
    inst.omit = (mask) => exports_util.omit(inst, mask);
    inst.partial = (...args) => exports_util.partial(ZodOptional, inst, args[0]);
    inst.required = (...args) => exports_util.required(ZodNonOptional, inst, args[0]);
  });
  ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => unionProcessor(inst, ctx, json3, params);
    inst.options = def.options;
  });
  ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
    ZodUnion.init(inst, def);
    $ZodXor.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => unionProcessor(inst, ctx, json3, params);
    inst.options = def.options;
  });
  ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
    ZodUnion.init(inst, def);
    $ZodDiscriminatedUnion.init(inst, def);
  });
  ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => intersectionProcessor(inst, ctx, json3, params);
  });
  ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
    $ZodTuple.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => tupleProcessor(inst, ctx, json3, params);
    inst.rest = (rest) => inst.clone({
      ...inst._zod.def,
      rest
    });
  });
  ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
    $ZodRecord.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => recordProcessor(inst, ctx, json3, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
  });
  ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
    $ZodMap.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => mapProcessor(inst, ctx, json3, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
    inst.min = (...args) => inst.check(_minSize(...args));
    inst.nonempty = (params) => inst.check(_minSize(1, params));
    inst.max = (...args) => inst.check(_maxSize(...args));
    inst.size = (...args) => inst.check(_size(...args));
  });
  ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
    $ZodSet.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => setProcessor(inst, ctx, json3, params);
    inst.min = (...args) => inst.check(_minSize(...args));
    inst.nonempty = (params) => inst.check(_minSize(1, params));
    inst.max = (...args) => inst.check(_maxSize(...args));
    inst.size = (...args) => inst.check(_size(...args));
  });
  ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => enumProcessor(inst, ctx, json3, params);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
      const newEntries = {};
      for (const value of values) {
        if (keys.has(value)) {
          newEntries[value] = def.entries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...exports_util.normalizeParams(params),
        entries: newEntries
      });
    };
    inst.exclude = (values, params) => {
      const newEntries = { ...def.entries };
      for (const value of values) {
        if (keys.has(value)) {
          delete newEntries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...exports_util.normalizeParams(params),
        entries: newEntries
      });
    };
  });
  ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
    $ZodLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => literalProcessor(inst, ctx, json3, params);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
      get() {
        if (def.values.length > 1) {
          throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        }
        return def.values[0];
      }
    });
  });
  ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
    $ZodFile.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => fileProcessor(inst, ctx, json3, params);
    inst.min = (size, params) => inst.check(_minSize(size, params));
    inst.max = (size, params) => inst.check(_maxSize(size, params));
    inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
  });
  ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => transformProcessor(inst, ctx, json3, params);
    inst._zod.parse = (payload, _ctx) => {
      if (_ctx.direction === "backward") {
        throw new $ZodEncodeError(inst.constructor.name);
      }
      payload.addIssue = (issue2) => {
        if (typeof issue2 === "string") {
          payload.issues.push(exports_util.issue(issue2, payload.value, def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = inst);
          payload.issues.push(exports_util.issue(_issue));
        }
      };
      const output = def.transform(payload.value, payload);
      if (output instanceof Promise) {
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      payload.value = output;
      return payload;
    };
  });
  ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => optionalProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
    $ZodExactOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => optionalProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => nullableProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => defaultProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
  });
  ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => prefaultProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => nonoptionalProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
    $ZodSuccess.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => successProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => catchProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
  });
  ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
    $ZodNaN.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => nanProcessor(inst, ctx, json3, params);
  });
  ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => pipeProcessor(inst, ctx, json3, params);
    inst.in = def.in;
    inst.out = def.out;
  });
  ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
    ZodPipe.init(inst, def);
    $ZodCodec.init(inst, def);
  });
  ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => readonlyProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
    $ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => templateLiteralProcessor(inst, ctx, json3, params);
  });
  ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
    $ZodLazy.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => lazyProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.getter();
  });
  ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
    $ZodPromise.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => promiseProcessor(inst, ctx, json3, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
    $ZodFunction.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => functionProcessor(inst, ctx, json3, params);
  });
  ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json3, params) => customProcessor(inst, ctx, json3, params);
  });
  describe2 = describe;
  meta2 = meta;
});

// node_modules/zod/v4/classic/compat.js
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodIssueCode, ZodFirstPartyTypeKind;
var init_compat = __esm(() => {
  init_core2();
  ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom"
  };
  (function(ZodFirstPartyTypeKind2) {})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
});

// node_modules/zod/v4/classic/from-json-schema.js
function detectVersion(schema2, defaultTarget) {
  const $schema = schema2.$schema;
  if ($schema === "https://json-schema.org/draft/2020-12/schema") {
    return "draft-2020-12";
  }
  if ($schema === "http://json-schema.org/draft-07/schema#") {
    return "draft-7";
  }
  if ($schema === "http://json-schema.org/draft-04/schema#") {
    return "draft-4";
  }
  return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#")) {
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  }
  const path = ref.slice(1).split("/").filter(Boolean);
  if (path.length === 0) {
    return ctx.rootSchema;
  }
  const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path[0] === defsKey) {
    const key = path[1];
    if (!key || !ctx.defs[key]) {
      throw new Error(`Reference not found: ${ref}`);
    }
    return ctx.defs[key];
  }
  throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema2, ctx) {
  if (schema2.not !== undefined) {
    if (typeof schema2.not === "object" && Object.keys(schema2.not).length === 0) {
      return z.never();
    }
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema2.unevaluatedItems !== undefined) {
    throw new Error("unevaluatedItems is not supported");
  }
  if (schema2.unevaluatedProperties !== undefined) {
    throw new Error("unevaluatedProperties is not supported");
  }
  if (schema2.if !== undefined || schema2.then !== undefined || schema2.else !== undefined) {
    throw new Error("Conditional schemas (if/then/else) are not supported");
  }
  if (schema2.dependentSchemas !== undefined || schema2.dependentRequired !== undefined) {
    throw new Error("dependentSchemas and dependentRequired are not supported");
  }
  if (schema2.$ref) {
    const refPath = schema2.$ref;
    if (ctx.refs.has(refPath)) {
      return ctx.refs.get(refPath);
    }
    if (ctx.processing.has(refPath)) {
      return z.lazy(() => {
        if (!ctx.refs.has(refPath)) {
          throw new Error(`Circular reference not resolved: ${refPath}`);
        }
        return ctx.refs.get(refPath);
      });
    }
    ctx.processing.add(refPath);
    const resolved = resolveRef(refPath, ctx);
    const zodSchema2 = convertSchema(resolved, ctx);
    ctx.refs.set(refPath, zodSchema2);
    ctx.processing.delete(refPath);
    return zodSchema2;
  }
  if (schema2.enum !== undefined) {
    const enumValues = schema2.enum;
    if (ctx.version === "openapi-3.0" && schema2.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
      return z.null();
    }
    if (enumValues.length === 0) {
      return z.never();
    }
    if (enumValues.length === 1) {
      return z.literal(enumValues[0]);
    }
    if (enumValues.every((v2) => typeof v2 === "string")) {
      return z.enum(enumValues);
    }
    const literalSchemas = enumValues.map((v2) => z.literal(v2));
    if (literalSchemas.length < 2) {
      return literalSchemas[0];
    }
    return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema2.const !== undefined) {
    return z.literal(schema2.const);
  }
  const type = schema2.type;
  if (Array.isArray(type)) {
    const typeSchemas = type.map((t) => {
      const typeSchema = { ...schema2, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    if (typeSchemas.length === 0) {
      return z.never();
    }
    if (typeSchemas.length === 1) {
      return typeSchemas[0];
    }
    return z.union(typeSchemas);
  }
  if (!type) {
    return z.any();
  }
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema2.format) {
        const format = schema2.format;
        if (format === "email") {
          stringSchema = stringSchema.check(z.email());
        } else if (format === "uri" || format === "uri-reference") {
          stringSchema = stringSchema.check(z.url());
        } else if (format === "uuid" || format === "guid") {
          stringSchema = stringSchema.check(z.uuid());
        } else if (format === "date-time") {
          stringSchema = stringSchema.check(z.iso.datetime());
        } else if (format === "date") {
          stringSchema = stringSchema.check(z.iso.date());
        } else if (format === "time") {
          stringSchema = stringSchema.check(z.iso.time());
        } else if (format === "duration") {
          stringSchema = stringSchema.check(z.iso.duration());
        } else if (format === "ipv4") {
          stringSchema = stringSchema.check(z.ipv4());
        } else if (format === "ipv6") {
          stringSchema = stringSchema.check(z.ipv6());
        } else if (format === "mac") {
          stringSchema = stringSchema.check(z.mac());
        } else if (format === "cidr") {
          stringSchema = stringSchema.check(z.cidrv4());
        } else if (format === "cidr-v6") {
          stringSchema = stringSchema.check(z.cidrv6());
        } else if (format === "base64") {
          stringSchema = stringSchema.check(z.base64());
        } else if (format === "base64url") {
          stringSchema = stringSchema.check(z.base64url());
        } else if (format === "e164") {
          stringSchema = stringSchema.check(z.e164());
        } else if (format === "jwt") {
          stringSchema = stringSchema.check(z.jwt());
        } else if (format === "emoji") {
          stringSchema = stringSchema.check(z.emoji());
        } else if (format === "nanoid") {
          stringSchema = stringSchema.check(z.nanoid());
        } else if (format === "cuid") {
          stringSchema = stringSchema.check(z.cuid());
        } else if (format === "cuid2") {
          stringSchema = stringSchema.check(z.cuid2());
        } else if (format === "ulid") {
          stringSchema = stringSchema.check(z.ulid());
        } else if (format === "xid") {
          stringSchema = stringSchema.check(z.xid());
        } else if (format === "ksuid") {
          stringSchema = stringSchema.check(z.ksuid());
        }
      }
      if (typeof schema2.minLength === "number") {
        stringSchema = stringSchema.min(schema2.minLength);
      }
      if (typeof schema2.maxLength === "number") {
        stringSchema = stringSchema.max(schema2.maxLength);
      }
      if (schema2.pattern) {
        stringSchema = stringSchema.regex(new RegExp(schema2.pattern));
      }
      zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      if (typeof schema2.minimum === "number") {
        numberSchema = numberSchema.min(schema2.minimum);
      }
      if (typeof schema2.maximum === "number") {
        numberSchema = numberSchema.max(schema2.maximum);
      }
      if (typeof schema2.exclusiveMinimum === "number") {
        numberSchema = numberSchema.gt(schema2.exclusiveMinimum);
      } else if (schema2.exclusiveMinimum === true && typeof schema2.minimum === "number") {
        numberSchema = numberSchema.gt(schema2.minimum);
      }
      if (typeof schema2.exclusiveMaximum === "number") {
        numberSchema = numberSchema.lt(schema2.exclusiveMaximum);
      } else if (schema2.exclusiveMaximum === true && typeof schema2.maximum === "number") {
        numberSchema = numberSchema.lt(schema2.maximum);
      }
      if (typeof schema2.multipleOf === "number") {
        numberSchema = numberSchema.multipleOf(schema2.multipleOf);
      }
      zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      const shape = {};
      const properties = schema2.properties || {};
      const requiredSet = new Set(schema2.required || []);
      for (const [key, propSchema] of Object.entries(properties)) {
        const propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema2.propertyNames) {
        const keySchema = convertSchema(schema2.propertyNames, ctx);
        const valueSchema = schema2.additionalProperties && typeof schema2.additionalProperties === "object" ? convertSchema(schema2.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        const objectSchema2 = z.object(shape).passthrough();
        const recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema2.patternProperties) {
        const patternProps = schema2.patternProperties;
        const patternKeys = Object.keys(patternProps);
        const looseRecords = [];
        for (const pattern of patternKeys) {
          const patternValue = convertSchema(patternProps[pattern], ctx);
          const keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        const schemasToIntersect = [];
        if (Object.keys(shape).length > 0) {
          schemasToIntersect.push(z.object(shape).passthrough());
        }
        schemasToIntersect.push(...looseRecords);
        if (schemasToIntersect.length === 0) {
          zodSchema = z.object({}).passthrough();
        } else if (schemasToIntersect.length === 1) {
          zodSchema = schemasToIntersect[0];
        } else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i = 2;i < schemasToIntersect.length; i++) {
            result = z.intersection(result, schemasToIntersect[i]);
          }
          zodSchema = result;
        }
        break;
      }
      const objectSchema = z.object(shape);
      if (schema2.additionalProperties === false) {
        zodSchema = objectSchema.strict();
      } else if (typeof schema2.additionalProperties === "object") {
        zodSchema = objectSchema.catchall(convertSchema(schema2.additionalProperties, ctx));
      } else {
        zodSchema = objectSchema.passthrough();
      }
      break;
    }
    case "array": {
      const prefixItems = schema2.prefixItems;
      const items = schema2.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
        const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema2.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema2.minItems));
        }
        if (typeof schema2.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema2.maxItems));
        }
      } else if (Array.isArray(items)) {
        const tupleItems = items.map((item) => convertSchema(item, ctx));
        const rest = schema2.additionalItems && typeof schema2.additionalItems === "object" ? convertSchema(schema2.additionalItems, ctx) : undefined;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema2.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema2.minItems));
        }
        if (typeof schema2.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema2.maxItems));
        }
      } else if (items !== undefined) {
        const element = convertSchema(items, ctx);
        let arraySchema = z.array(element);
        if (typeof schema2.minItems === "number") {
          arraySchema = arraySchema.min(schema2.minItems);
        }
        if (typeof schema2.maxItems === "number") {
          arraySchema = arraySchema.max(schema2.maxItems);
        }
        zodSchema = arraySchema;
      } else {
        zodSchema = z.array(z.any());
      }
      break;
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
  if (schema2.description) {
    zodSchema = zodSchema.describe(schema2.description);
  }
  if (schema2.default !== undefined) {
    zodSchema = zodSchema.default(schema2.default);
  }
  return zodSchema;
}
function convertSchema(schema2, ctx) {
  if (typeof schema2 === "boolean") {
    return schema2 ? z.any() : z.never();
  }
  let baseSchema = convertBaseSchema(schema2, ctx);
  const hasExplicitType = schema2.type || schema2.enum !== undefined || schema2.const !== undefined;
  if (schema2.anyOf && Array.isArray(schema2.anyOf)) {
    const options = schema2.anyOf.map((s) => convertSchema(s, ctx));
    const anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema2.oneOf && Array.isArray(schema2.oneOf)) {
    const options = schema2.oneOf.map((s) => convertSchema(s, ctx));
    const oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema2.allOf && Array.isArray(schema2.allOf)) {
    if (schema2.allOf.length === 0) {
      baseSchema = hasExplicitType ? baseSchema : z.any();
    } else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema2.allOf[0], ctx);
      const startIdx = hasExplicitType ? 0 : 1;
      for (let i = startIdx;i < schema2.allOf.length; i++) {
        result = z.intersection(result, convertSchema(schema2.allOf[i], ctx));
      }
      baseSchema = result;
    }
  }
  if (schema2.nullable === true && ctx.version === "openapi-3.0") {
    baseSchema = z.nullable(baseSchema);
  }
  if (schema2.readOnly === true) {
    baseSchema = z.readonly(baseSchema);
  }
  const extraMeta = {};
  const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const key of coreMetadataKeys) {
    if (key in schema2) {
      extraMeta[key] = schema2[key];
    }
  }
  const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const key of contentMetadataKeys) {
    if (key in schema2) {
      extraMeta[key] = schema2[key];
    }
  }
  for (const key of Object.keys(schema2)) {
    if (!RECOGNIZED_KEYS.has(key)) {
      extraMeta[key] = schema2[key];
    }
  }
  if (Object.keys(extraMeta).length > 0) {
    ctx.registry.add(baseSchema, extraMeta);
  }
  return baseSchema;
}
function fromJSONSchema(schema2, params) {
  if (typeof schema2 === "boolean") {
    return schema2 ? z.any() : z.never();
  }
  const version3 = detectVersion(schema2, params?.defaultTarget);
  const defs = schema2.$defs || schema2.definitions || {};
  const ctx = {
    version: version3,
    defs,
    refs: new Map,
    processing: new Set,
    rootSchema: schema2,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(schema2, ctx);
}
var z, RECOGNIZED_KEYS;
var init_from_json_schema = __esm(() => {
  init_registries();
  init_checks3();
  init_iso();
  init_schemas2();
  z = {
    ...exports_schemas2,
    ...exports_checks2,
    iso: exports_iso
  };
  RECOGNIZED_KEYS = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly"
  ]);
});

// node_modules/zod/v4/classic/coerce.js
var exports_coerce = {};
__export(exports_coerce, {
  string: () => string3,
  number: () => number3,
  date: () => date6,
  boolean: () => boolean5,
  bigint: () => bigint5
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean5(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint5(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date6(params) {
  return _coercedDate(ZodDate, params);
}
var init_coerce = __esm(() => {
  init_core2();
  init_schemas2();
});

// node_modules/zod/v4/classic/external.js
var exports_external = {};
__export(exports_external, {
  xor: () => xor,
  xid: () => xid2,
  void: () => _void2,
  uuidv7: () => uuidv7,
  uuidv6: () => uuidv6,
  uuidv4: () => uuidv4,
  uuid: () => uuid5,
  util: () => exports_util,
  url: () => url,
  uppercase: () => _uppercase,
  unknown: () => unknown,
  union: () => union2,
  undefined: () => _undefined3,
  ulid: () => ulid2,
  uint64: () => uint64,
  uint32: () => uint32,
  tuple: () => tuple,
  trim: () => _trim,
  treeifyError: () => treeifyError,
  transform: () => transform,
  toUpperCase: () => _toUpperCase,
  toLowerCase: () => _toLowerCase,
  toJSONSchema: () => toJSONSchema,
  templateLiteral: () => templateLiteral,
  symbol: () => symbol,
  superRefine: () => superRefine,
  success: () => success,
  stringbool: () => stringbool,
  stringFormat: () => stringFormat,
  string: () => string2,
  strictObject: () => strictObject,
  startsWith: () => _startsWith,
  slugify: () => _slugify,
  size: () => _size,
  setErrorMap: () => setErrorMap,
  set: () => set,
  safeParseAsync: () => safeParseAsync2,
  safeParse: () => safeParse2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeEncode: () => safeEncode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeDecode: () => safeDecode2,
  registry: () => registry,
  regexes: () => exports_regexes,
  regex: () => _regex,
  refine: () => refine,
  record: () => record,
  readonly: () => readonly,
  property: () => _property,
  promise: () => promise,
  prettifyError: () => prettifyError,
  preprocess: () => preprocess,
  prefault: () => prefault,
  positive: () => _positive,
  pipe: () => pipe,
  partialRecord: () => partialRecord,
  parseAsync: () => parseAsync2,
  parse: () => parse3,
  overwrite: () => _overwrite,
  optional: () => optional,
  object: () => object,
  number: () => number2,
  nullish: () => nullish2,
  nullable: () => nullable,
  null: () => _null3,
  normalize: () => _normalize,
  nonpositive: () => _nonpositive,
  nonoptional: () => nonoptional,
  nonnegative: () => _nonnegative,
  never: () => never,
  negative: () => _negative,
  nativeEnum: () => nativeEnum,
  nanoid: () => nanoid2,
  nan: () => nan,
  multipleOf: () => _multipleOf,
  minSize: () => _minSize,
  minLength: () => _minLength,
  mime: () => _mime,
  meta: () => meta2,
  maxSize: () => _maxSize,
  maxLength: () => _maxLength,
  map: () => map,
  mac: () => mac2,
  lte: () => _lte,
  lt: () => _lt,
  lowercase: () => _lowercase,
  looseRecord: () => looseRecord,
  looseObject: () => looseObject,
  locales: () => exports_locales,
  literal: () => literal,
  length: () => _length,
  lazy: () => lazy,
  ksuid: () => ksuid2,
  keyof: () => keyof,
  jwt: () => jwt,
  json: () => json3,
  iso: () => exports_iso,
  ipv6: () => ipv62,
  ipv4: () => ipv42,
  intersection: () => intersection,
  int64: () => int64,
  int32: () => int32,
  int: () => int,
  instanceof: () => _instanceof,
  includes: () => _includes,
  httpUrl: () => httpUrl,
  hostname: () => hostname2,
  hex: () => hex2,
  hash: () => hash,
  guid: () => guid2,
  gte: () => _gte,
  gt: () => _gt,
  globalRegistry: () => globalRegistry,
  getErrorMap: () => getErrorMap,
  function: () => _function,
  fromJSONSchema: () => fromJSONSchema,
  formatError: () => formatError,
  float64: () => float64,
  float32: () => float32,
  flattenError: () => flattenError,
  file: () => file,
  exactOptional: () => exactOptional,
  enum: () => _enum2,
  endsWith: () => _endsWith,
  encodeAsync: () => encodeAsync2,
  encode: () => encode2,
  emoji: () => emoji2,
  email: () => email2,
  e164: () => e1642,
  discriminatedUnion: () => discriminatedUnion,
  describe: () => describe2,
  decodeAsync: () => decodeAsync2,
  decode: () => decode2,
  date: () => date5,
  custom: () => custom2,
  cuid2: () => cuid22,
  cuid: () => cuid3,
  core: () => exports_core2,
  config: () => config,
  coerce: () => exports_coerce,
  codec: () => codec,
  clone: () => clone,
  cidrv6: () => cidrv62,
  cidrv4: () => cidrv42,
  check: () => check,
  catch: () => _catch2,
  boolean: () => boolean4,
  bigint: () => bigint4,
  base64url: () => base64url2,
  base64: () => base642,
  array: () => array2,
  any: () => any,
  _function: () => _function,
  _default: () => _default2,
  _ZodString: () => _ZodString,
  ZodXor: () => ZodXor,
  ZodXID: () => ZodXID,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodUUID: () => ZodUUID,
  ZodURL: () => ZodURL,
  ZodULID: () => ZodULID,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransform: () => ZodTransform,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodSymbol: () => ZodSymbol,
  ZodSuccess: () => ZodSuccess,
  ZodStringFormat: () => ZodStringFormat,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodRecord: () => ZodRecord,
  ZodRealError: () => ZodRealError,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPrefault: () => ZodPrefault,
  ZodPipe: () => ZodPipe,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNonOptional: () => ZodNonOptional,
  ZodNever: () => ZodNever,
  ZodNanoID: () => ZodNanoID,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodMAC: () => ZodMAC,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodKSUID: () => ZodKSUID,
  ZodJWT: () => ZodJWT,
  ZodIssueCode: () => ZodIssueCode,
  ZodIntersection: () => ZodIntersection,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate,
  ZodIPv6: () => ZodIPv6,
  ZodIPv4: () => ZodIPv4,
  ZodGUID: () => ZodGUID,
  ZodFunction: () => ZodFunction,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFile: () => ZodFile,
  ZodExactOptional: () => ZodExactOptional,
  ZodError: () => ZodError,
  ZodEnum: () => ZodEnum,
  ZodEmoji: () => ZodEmoji,
  ZodEmail: () => ZodEmail,
  ZodE164: () => ZodE164,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodCustom: () => ZodCustom,
  ZodCodec: () => ZodCodec,
  ZodCatch: () => ZodCatch,
  ZodCUID2: () => ZodCUID2,
  ZodCUID: () => ZodCUID,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodBoolean: () => ZodBoolean,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBigInt: () => ZodBigInt,
  ZodBase64URL: () => ZodBase64URL,
  ZodBase64: () => ZodBase64,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny,
  TimePrecision: () => TimePrecision,
  NEVER: () => NEVER,
  $output: () => $output,
  $input: () => $input,
  $brand: () => $brand
});
var init_external = __esm(() => {
  init_core2();
  init_core2();
  init_en();
  init_core2();
  init_json_schema_processors();
  init_from_json_schema();
  init_locales();
  init_iso();
  init_iso();
  init_coerce();
  init_schemas2();
  init_checks3();
  init_errors3();
  init_parse2();
  init_compat();
  config(en_default());
});

// node_modules/zod/index.js
var init_zod = __esm(() => {
  init_external();
  init_external();
});

// src/routes/auth.ts
var exports_auth = {};
__export(exports_auth, {
  handleAuth: () => handleAuth
});
function randomToken(bytes = 32) {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes))).map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function addDays(d2, n) {
  return new Date(d2.getTime() + n * 86400000);
}
function addHours(d2, h) {
  return new Date(d2.getTime() + h * 3600000);
}
async function createSession(userId) {
  const token = randomToken(32);
  const expiresAt = addDays(new Date, 30);
  await db2.insert(sessions).values({ userId, token, expiresAt });
  return { token, expiresAt };
}
function safeUser(u, role) {
  return {
    id: u.id,
    email: u.email,
    username: u.username ?? null,
    phone: u.phone ?? null,
    name: u.name,
    role,
    twoFactorEnabled: u.twoFactorEnabled ?? false,
    twoFactorMethod: u.twoFactorMethod ?? "either"
  };
}
function normalizeUsername(username) {
  return username.trim().toLowerCase();
}
function normalizePhone(phone) {
  return phone.replace(/\s+/g, "").trim();
}
function randomNumericCode(length = 6) {
  const digits = "0123456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes).map((b2) => digits[b2 % digits.length]).join("");
}
async function hashCode(code) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  return Array.from(new Uint8Array(buf)).map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
function maskEmail(email3) {
  const [name, domain2] = email3.split("@");
  if (!name || !domain2)
    return email3;
  if (name.length <= 2)
    return `${name[0] ?? "*"}*@${domain2}`;
  return `${name.slice(0, 2)}***@${domain2}`;
}
function isProduction() {
  return false;
}
async function sendEmailOtp(to, code, purpose) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.OTP_FROM_EMAIL ?? "onboarding@resend.dev";
  if (!resendApiKey)
    return false;
  const subject = purpose === "login" ? "Your Novaryn login code" : purpose === "recovery" ? "Your Novaryn recovery code" : "Verify your Novaryn email";
  const text3 = purpose === "login" ? `Your Novaryn login code is ${code}. It expires in 10 minutes.` : purpose === "recovery" ? `Your Novaryn recovery code is ${code}. It expires in 10 minutes.` : `Your Novaryn verification code is ${code}. It expires in 10 minutes.`;
  const controller = new AbortController;
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject,
        text: text3
      }),
      signal: controller.signal
    });
    return res.ok;
  } catch (error48) {
    console.error("sendEmailOtp failed:", error48);
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
async function deliverOtp(channel, destination, code, purpose) {
  return sendEmailOtp(destination, code, purpose);
}
async function createChallenge(userId, purpose, channel) {
  const code = randomNumericCode(6);
  const codeHash = await hashCode(code);
  const expiresAt = addHours(new Date, 1 / 6);
  const [challenge] = await db2.insert(authChallenges).values({
    userId,
    purpose,
    channel,
    codeHash,
    expiresAt
  }).returning({ id: authChallenges.id });
  return { challengeId: challenge.id, code, expiresAt };
}
async function handleAuth(req, segments) {
  const method = req.method;
  const sub = segments[0] ?? "";
  if (sub === "register" && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = RegisterSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const normalizedUsername = normalizeUsername(parsed.data.username);
    const existing = await db2.select().from(users).where(eq(users.email, parsed.data.email)).limit(1);
    if (existing.length > 0)
      return errorResponse("Email already in use", 409);
    const existingUsername = await db2.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
    if (existingUsername.length > 0)
      return errorResponse("Username already taken", 409);
    const passwordHash = await hashPassword(parsed.data.password);
    const [user] = await db2.insert(users).values({
      email: parsed.data.email,
      username: normalizedUsername,
      name: parsed.data.name,
      passwordHash
    }).returning();
    const [personalOrg] = await db2.insert(orgs).values({ name: `${parsed.data.name}'s Workspace` }).returning();
    await db2.insert(orgMembers).values({ orgId: personalOrg.id, userId: user.id, role: "owner" });
    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, "owner")), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt)
      }
    });
  }
  if (sub === "login" && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = LoginSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const identifier = parsed.data.identifier.trim();
    const normalized = normalizeUsername(identifier);
    let userResult = await db2.select().from(users).where(eq(users.email, identifier.toLowerCase())).limit(1);
    if (userResult.length === 0) {
      userResult = await db2.select().from(users).where(eq(users.username, normalized)).limit(1);
    }
    const user = userResult[0];
    if (!user)
      return errorResponse("Invalid username/email or password", 401);
    const valid = await verifyPassword(parsed.data.password, user.passwordHash);
    if (!valid)
      return errorResponse("Invalid username/email or password", 401);
    const [membership] = await db2.select({ role: orgMembers.role }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    const role = membership?.role ?? "member";
    if (user.twoFactorEnabled) {
      if (!user.email)
        return errorResponse("No 2FA email configured", 400);
      const channels = ["email"];
      const selectedChannel = "email";
      const challenge = await createChallenge(user.id, "login", selectedChannel);
      const delivered = await deliverOtp(selectedChannel, user.email, challenge.code, "login");
      const destination = maskEmail(user.email);
      if (!delivered)
        console.log(`[2fa:${selectedChannel}] ${user.email} code=${challenge.code}`);
      const includeDevCode = !isProduction() || !delivered;
      return jsonResponse({
        requiresTwoFactor: true,
        challengeId: challenge.challengeId,
        channels,
        sentChannel: selectedChannel,
        destination,
        ...includeDevCode ? { devCode: challenge.code } : {}
      });
    }
    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt)
      }
    });
  }
  if ((sub === "2fa" && segments[1] === "send" || sub === "2fa-send") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = TwoFactorSendSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [challenge] = await db2.select().from(authChallenges).where(and(eq(authChallenges.id, parsed.data.challengeId), isNull(authChallenges.usedAt), gt3(authChallenges.expiresAt, new Date))).limit(1);
    if (!challenge)
      return errorResponse("2FA challenge not found or expired", 404);
    const [user] = await db2.select().from(users).where(eq(users.id, challenge.userId)).limit(1);
    if (!user)
      return errorResponse("User not found", 404);
    if (!user.email)
      return errorResponse("Email not set", 400);
    const code = randomNumericCode(6);
    const codeHash = await hashCode(code);
    const expiresAt = addHours(new Date, 1 / 6);
    await db2.update(authChallenges).set({ channel: parsed.data.channel, codeHash, expiresAt }).where(eq(authChallenges.id, challenge.id));
    const delivered = await deliverOtp(parsed.data.channel, user.email, code, "login");
    const destination = maskEmail(user.email);
    if (!delivered)
      console.log(`[2fa:${parsed.data.channel}] ${user.email} code=${code}`);
    const includeDevCode = !isProduction() || !delivered;
    return jsonResponse({
      ok: true,
      challengeId: challenge.id,
      sentChannel: parsed.data.channel,
      destination,
      ...includeDevCode ? { devCode: code } : {}
    });
  }
  if ((sub === "2fa" && segments[1] === "verify" || sub === "2fa-verify") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = TwoFactorVerifySchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [challenge] = await db2.select().from(authChallenges).where(and(eq(authChallenges.id, parsed.data.challengeId), isNull(authChallenges.usedAt), gt3(authChallenges.expiresAt, new Date))).limit(1);
    if (!challenge || challenge.purpose !== "login")
      return errorResponse("2FA challenge not found or expired", 404);
    const codeHash = await hashCode(parsed.data.code);
    if (codeHash !== challenge.codeHash)
      return errorResponse("Invalid verification code", 401);
    const [user] = await db2.select().from(users).where(eq(users.id, challenge.userId)).limit(1);
    if (!user)
      return errorResponse("User not found", 404);
    const [membership] = await db2.select({ role: orgMembers.role }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    const role = membership?.role ?? "member";
    await db2.update(authChallenges).set({ usedAt: new Date }).where(eq(authChallenges.id, challenge.id));
    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt)
      }
    });
  }
  if (sub === "logout" && method === "POST") {
    const cookie = req.headers.get("cookie") ?? "";
    const match = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
    if (match?.[1]) {
      const token = decodeURIComponent(match[1]);
      await db2.delete(sessions).where(eq(sessions.token, token));
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": clearSessionCookie()
      }
    });
  }
  if (sub === "me" && method === "GET") {
    const user = await getSessionUser(req);
    if (!user) {
      const anyUser = await db2.select({ id: users.id }).from(users).limit(1);
      return new Response(JSON.stringify({ user: null, needsSetup: anyUser.length === 0 }), { status: 200, headers: { "Content-Type": "application/json" } });
    }
    return jsonResponse({ user, needsSetup: false });
  }
  if (sub === "invite" && method === "POST") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response)
      return auth;
    const { user } = auth;
    const body = await req.json().catch(() => null);
    const parsed = InviteSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [membership] = await db2.select({ orgId: orgMembers.orgId }).from(orgMembers).where(and(eq(orgMembers.orgId, parsed.data.orgId), eq(orgMembers.userId, user.id))).limit(1);
    if (!membership)
      return errorResponse("Org not found", 404);
    const token = randomToken(24);
    const expiresAt = addDays(new Date, 7);
    const [invite] = await db2.insert(invites).values({
      orgId: parsed.data.orgId,
      email: parsed.data.email,
      role: parsed.data.role,
      token,
      expiresAt
    }).returning();
    return jsonResponse({ invite, inviteUrl: `/invite/${token}` }, 201);
  }
  if (sub === "invite" && segments[1] && method === "GET") {
    const token = segments[1];
    const [invite] = await db2.select().from(invites).where(and(eq(invites.token, token), gt3(invites.expiresAt, new Date), isNull(invites.acceptedAt))).limit(1);
    if (!invite)
      return errorResponse("Invite not found or expired", 404);
    const [org] = await db2.select({ name: orgs.name }).from(orgs).where(eq(orgs.id, invite.orgId)).limit(1);
    return jsonResponse({ email: invite.email, role: invite.role, orgName: org?.name ?? "" });
  }
  if ((sub === "invite" && segments[1] === "accept" || sub === "invite-accept") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = AcceptInviteSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [invite] = await db2.select().from(invites).where(and(eq(invites.token, parsed.data.token), gt3(invites.expiresAt, new Date), isNull(invites.acceptedAt))).limit(1);
    if (!invite)
      return errorResponse("Invite not found or already used", 404);
    const normalizedUsername = normalizeUsername(parsed.data.username);
    let [user] = await db2.select().from(users).where(eq(users.email, invite.email)).limit(1);
    if (!user) {
      const existingUsername = await db2.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
      if (existingUsername.length > 0)
        return errorResponse("Username already taken", 409);
      const passwordHash = await hashPassword(parsed.data.password);
      const [created] = await db2.insert(users).values({
        email: invite.email,
        username: normalizedUsername,
        name: parsed.data.name,
        passwordHash
      }).returning();
      user = created;
      const [personalOrg] = await db2.insert(orgs).values({ name: `${parsed.data.name}'s Workspace` }).returning();
      await db2.insert(orgMembers).values({ orgId: personalOrg.id, userId: user.id, role: "owner" });
    } else if (!user.username) {
      const existingUsername = await db2.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
      if (existingUsername.length > 0)
        return errorResponse("Username already taken", 409);
      await db2.update(users).set({ username: normalizedUsername, updatedAt: new Date }).where(eq(users.id, user.id));
      user = { ...user, username: normalizedUsername };
    }
    await db2.insert(orgMembers).values({ orgId: invite.orgId, userId: user.id, role: invite.role }).onConflictDoNothing();
    await db2.update(invites).set({ acceptedAt: new Date }).where(eq(invites.id, invite.id));
    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, invite.role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt)
      }
    });
  }
  if (sub === "reset-password" && method === "POST" && !segments[1]) {
    const body = await req.json().catch(() => null);
    const parsed = ResetRequestSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const identifier = parsed.data.identifier.trim();
    const normalizedUsername = normalizeUsername(identifier);
    const normalizedPhone = normalizePhone(identifier);
    const [user] = await db2.select().from(users).where(or(ilike(users.email, identifier), eq(users.username, normalizedUsername), eq(users.phone, normalizedPhone))).limit(1);
    if (!user)
      return jsonResponse({ ok: true });
    if (!user.email)
      return errorResponse("Email not set for recovery", 400);
    const channel = "email";
    const challenge = await createChallenge(user.id, "recovery", channel);
    const delivered = await deliverOtp(channel, user.email, challenge.code, "recovery");
    const destination = maskEmail(user.email);
    if (!delivered)
      console.log(`[recovery:${channel}] ${user.email} code=${challenge.code}`);
    const includeDevCode = !isProduction() || !delivered;
    return jsonResponse({
      ok: true,
      recoveryChallengeId: challenge.challengeId,
      channel,
      destination,
      ...includeDevCode ? { devCode: challenge.code } : {}
    });
  }
  if ((sub === "reset-password" && segments[1] === "confirm" || sub === "reset-password-confirm") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = ResetConfirmSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    if (parsed.data.challengeId && parsed.data.code) {
      const [challenge] = await db2.select().from(authChallenges).where(and(eq(authChallenges.id, parsed.data.challengeId), gt3(authChallenges.expiresAt, new Date), isNull(authChallenges.usedAt))).limit(1);
      if (!challenge || challenge.purpose !== "recovery")
        return errorResponse("Recovery code invalid or expired", 404);
      const codeHash = await hashCode(parsed.data.code);
      if (codeHash !== challenge.codeHash)
        return errorResponse("Recovery code invalid", 401);
      const passwordHash2 = await hashPassword(parsed.data.password);
      await db2.update(users).set({ passwordHash: passwordHash2, updatedAt: new Date }).where(eq(users.id, challenge.userId));
      await db2.update(authChallenges).set({ usedAt: new Date }).where(eq(authChallenges.id, challenge.id));
      await db2.delete(sessions).where(eq(sessions.userId, challenge.userId));
      return jsonResponse({ ok: true });
    }
    if (!parsed.data.token)
      return errorResponse("token or challengeId+code required", 400);
    const [reset] = await db2.select().from(passwordResets).where(and(eq(passwordResets.token, parsed.data.token), gt3(passwordResets.expiresAt, new Date), isNull(passwordResets.usedAt))).limit(1);
    if (!reset)
      return errorResponse("Reset token invalid or expired", 404);
    const passwordHash = await hashPassword(parsed.data.password);
    await db2.update(users).set({ passwordHash, updatedAt: new Date }).where(eq(users.id, reset.userId));
    await db2.update(passwordResets).set({ usedAt: new Date }).where(eq(passwordResets.id, reset.id));
    await db2.delete(sessions).where(eq(sessions.userId, reset.userId));
    return jsonResponse({ ok: true });
  }
  if (sub === "users" && segments[1] === "search" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response)
      return auth;
    const q = new URL(req.url).searchParams.get("q") ?? "";
    const parsed = SearchUsersSchema.safeParse({ q });
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const term = `%${parsed.data.q.toLowerCase()}%`;
    const rows = await db2.select({ id: users.id, username: users.username, name: users.name }).from(users).where(or(ilike(users.username, term), ilike(users.name, term))).limit(20);
    const filtered = rows.filter((u) => !!u.username && u.id !== auth.user.id).map((u) => ({ id: u.id, username: u.username, name: u.name }));
    return jsonResponse(filtered);
  }
  if (sub === "project-invites" && method === "POST" && !segments[1]) {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response)
      return auth;
    const body = await req.json().catch(() => null);
    const parsed = SendProjectInviteSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const targetUsername = normalizeUsername(parsed.data.username);
    const [targetUser] = await db2.select({ id: users.id }).from(users).where(eq(users.username, targetUsername)).limit(1);
    if (!targetUser)
      return errorResponse("User not found", 404);
    if (targetUser.id === auth.user.id)
      return errorResponse("You cannot invite yourself", 400);
    const [project] = await db2.select({ id: projects.id, orgId: projects.orgId, name: projects.name }).from(projects).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, auth.user.id))).limit(1);
    if (!project)
      return errorResponse("Project not found", 404);
    const [existingMembership] = await db2.select({ id: orgMembers.id }).from(orgMembers).where(and(eq(orgMembers.orgId, project.orgId), eq(orgMembers.userId, targetUser.id))).limit(1);
    if (existingMembership)
      return errorResponse("User already has access", 409);
    const [existingInvite] = await db2.select({ id: projectInvites.id }).from(projectInvites).where(and(eq(projectInvites.projectId, project.id), eq(projectInvites.fromUserId, auth.user.id), eq(projectInvites.toUserId, targetUser.id), eq(projectInvites.status, "pending"))).limit(1);
    if (existingInvite)
      return errorResponse("Invite already sent", 409);
    const [invite] = await db2.insert(projectInvites).values({
      projectId: project.id,
      fromUserId: auth.user.id,
      toUserId: targetUser.id,
      status: "pending"
    }).returning();
    return jsonResponse(invite, 201);
  }
  if (sub === "project-invites" && segments[1] === "received" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response)
      return auth;
    const rows = await db2.select({
      id: projectInvites.id,
      status: projectInvites.status,
      createdAt: projectInvites.createdAt,
      projectId: projects.id,
      projectName: projects.name,
      fromUserId: users.id,
      fromUsername: users.username,
      fromName: users.name
    }).from(projectInvites).innerJoin(projects, eq(projectInvites.projectId, projects.id)).innerJoin(users, eq(projectInvites.fromUserId, users.id)).where(and(eq(projectInvites.toUserId, auth.user.id), eq(projectInvites.status, "pending"))).orderBy(desc(projectInvites.createdAt));
    return jsonResponse(rows);
  }
  if (sub === "project-invites" && segments[1] && segments[2] && method === "POST") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response)
      return auth;
    const inviteId = segments[1];
    const action = segments[2];
    if (action !== "accept" && action !== "decline")
      return errorResponse("Not found", 404);
    const [invite] = await db2.select({
      id: projectInvites.id,
      status: projectInvites.status,
      toUserId: projectInvites.toUserId,
      projectId: projects.id,
      orgId: projects.orgId
    }).from(projectInvites).innerJoin(projects, eq(projectInvites.projectId, projects.id)).where(and(eq(projectInvites.id, inviteId), eq(projectInvites.toUserId, auth.user.id))).limit(1);
    if (!invite)
      return errorResponse("Invite not found", 404);
    if (invite.status !== "pending")
      return errorResponse("Invite already handled", 409);
    if (action === "accept") {
      await db2.insert(orgMembers).values({ orgId: invite.orgId, userId: auth.user.id, role: "member" }).onConflictDoNothing();
    }
    await db2.update(projectInvites).set({ status: action === "accept" ? "accepted" : "declined", respondedAt: new Date }).where(eq(projectInvites.id, invite.id));
    return jsonResponse({ ok: true });
  }
  if (sub === "team" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response)
      return auth;
    const { user } = auth;
    const [myMembership] = await db2.select({ orgId: orgMembers.orgId }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    if (!myMembership)
      return jsonResponse([]);
    const members = await db2.select({ id: users.id, email: users.email, name: users.name, role: orgMembers.role, createdAt: users.createdAt }).from(orgMembers).innerJoin(users, eq(orgMembers.userId, users.id)).where(eq(orgMembers.orgId, myMembership.orgId));
    return jsonResponse(members);
  }
  if (sub === "team" && segments[1] && method === "PATCH") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response)
      return auth;
    const { user } = auth;
    const targetId = segments[1];
    const body = await req.json().catch(() => null);
    const parsed = UpdateMemberSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [myMembership] = await db2.select({ orgId: orgMembers.orgId }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    if (!myMembership)
      return errorResponse("Forbidden", 403);
    const [target] = await db2.select({ role: orgMembers.role }).from(orgMembers).where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId))).limit(1);
    if (target?.role === "owner")
      return errorResponse("Cannot change owner role", 403);
    if (!target)
      return errorResponse("Member not found", 404);
    await db2.update(orgMembers).set({ role: parsed.data.role }).where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)));
    return jsonResponse({ ok: true });
  }
  if (sub === "team" && segments[1] && method === "DELETE") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response)
      return auth;
    const { user } = auth;
    const targetId = segments[1];
    const [myMembership] = await db2.select({ orgId: orgMembers.orgId }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    if (!myMembership)
      return errorResponse("Forbidden", 403);
    const [target] = await db2.select({ role: orgMembers.role }).from(orgMembers).where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId))).limit(1);
    if (target?.role === "owner")
      return errorResponse("Cannot remove owner", 403);
    if (!target)
      return errorResponse("Member not found", 404);
    await db2.delete(orgMembers).where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)));
    await db2.delete(users).where(eq(users.id, targetId));
    return jsonResponse({ ok: true });
  }
  if (sub === "profile" && method === "PATCH") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response)
      return auth;
    const body = await req.json().catch(() => null);
    const parsed = UpdateProfileSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");
    const [user] = await db2.select().from(users).where(eq(users.id, auth.user.id)).limit(1);
    if (!user)
      return errorResponse("User not found", 404);
    const updates = {};
    if (parsed.data.username) {
      const normalizedUsername = normalizeUsername(parsed.data.username);
      const [existingUsername] = await db2.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
      if (existingUsername && existingUsername.id !== auth.user.id)
        return errorResponse("Username already taken", 409);
      updates.username = normalizedUsername;
    }
    if (parsed.data.phone !== undefined) {
      const normalizedPhone = normalizePhone(parsed.data.phone);
      const [existingPhone] = await db2.select({ id: users.id }).from(users).where(eq(users.phone, normalizedPhone)).limit(1);
      if (existingPhone && existingPhone.id !== auth.user.id)
        return errorResponse("Phone number already in use", 409);
      updates.phone = normalizedPhone;
    }
    if (parsed.data.name)
      updates.name = parsed.data.name;
    if (parsed.data.twoFactorMethod)
      updates.twoFactorMethod = parsed.data.twoFactorMethod;
    if (parsed.data.twoFactorEnabled !== undefined) {
      const finalPhone = updates.phone ?? user.phone;
      const finalMethod = updates.twoFactorMethod ?? user.twoFactorMethod;
      if (parsed.data.twoFactorEnabled && finalMethod === "phone" && !finalPhone) {
        return errorResponse("Add a phone number before enabling phone-only 2FA", 400);
      }
      updates.twoFactorEnabled = parsed.data.twoFactorEnabled;
    }
    if (parsed.data.newPassword) {
      if (!parsed.data.currentPassword)
        return errorResponse("Current password required");
      const valid = await verifyPassword(parsed.data.currentPassword, user.passwordHash);
      if (!valid)
        return errorResponse("Current password incorrect", 401);
      updates.passwordHash = await hashPassword(parsed.data.newPassword);
    }
    updates.updatedAt = new Date;
    await db2.update(users).set(updates).where(eq(users.id, user.id));
    return jsonResponse({ ok: true });
  }
  return errorResponse("Not found", 404);
}
var RegisterSchema, RegisterConfirmSchema, LoginSchema, InviteSchema, AcceptInviteSchema, ResetRequestSchema, ResetConfirmSchema, UpdateProfileSchema, TwoFactorSendSchema, TwoFactorVerifySchema, UpdateMemberSchema, SearchUsersSchema, SendProjectInviteSchema;
var init_auth2 = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
  init_session3();
  init_password();
  init_zod();
  RegisterSchema = exports_external.object({
    email: exports_external.string().email(),
    username: exports_external.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
    name: exports_external.string().min(1).max(100),
    password: exports_external.string().min(8)
  });
  RegisterConfirmSchema = exports_external.object({
    challengeId: exports_external.string().uuid(),
    code: exports_external.string().length(6)
  });
  LoginSchema = exports_external.object({
    identifier: exports_external.string().min(1),
    password: exports_external.string().min(1)
  });
  InviteSchema = exports_external.object({
    email: exports_external.string().email(),
    role: exports_external.enum(["admin", "member"]).default("member"),
    orgId: exports_external.string().uuid()
  });
  AcceptInviteSchema = exports_external.object({
    token: exports_external.string(),
    username: exports_external.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
    name: exports_external.string().min(1).max(100),
    password: exports_external.string().min(8)
  });
  ResetRequestSchema = exports_external.object({
    identifier: exports_external.string().min(1)
  });
  ResetConfirmSchema = exports_external.object({
    token: exports_external.string().optional(),
    challengeId: exports_external.string().uuid().optional(),
    code: exports_external.string().length(6).optional(),
    password: exports_external.string().min(8)
  });
  UpdateProfileSchema = exports_external.object({
    username: exports_external.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/).optional(),
    phone: exports_external.string().min(7).max(20).optional(),
    twoFactorEnabled: exports_external.boolean().optional(),
    twoFactorMethod: exports_external.enum(["email", "phone", "either"]).optional(),
    name: exports_external.string().min(1).max(100).optional(),
    currentPassword: exports_external.string().optional(),
    newPassword: exports_external.string().min(8).optional()
  });
  TwoFactorSendSchema = exports_external.object({
    challengeId: exports_external.string().uuid(),
    channel: exports_external.literal("email")
  });
  TwoFactorVerifySchema = exports_external.object({
    challengeId: exports_external.string().uuid(),
    code: exports_external.string().length(6)
  });
  UpdateMemberSchema = exports_external.object({
    role: exports_external.enum(["admin", "member"])
  });
  SearchUsersSchema = exports_external.object({ q: exports_external.string().min(1).max(32) });
  SendProjectInviteSchema = exports_external.object({
    projectId: exports_external.string().uuid(),
    username: exports_external.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/)
  });
});

// src/engine/hash.ts
import { createHash } from "crypto";
function getBucket(userId, key) {
  const hash2 = createHash("sha256").update(`${userId}:${key}`).digest("hex");
  const int2 = parseInt(hash2.slice(0, 8), 16);
  return int2 % 100;
}
var init_hash = () => {};

// src/engine/evaluator.ts
function evaluateFlag(flag, userId) {
  if (!flag.enabled) {
    return {
      key: flag.key,
      value: flag.defaultValueJson,
      reason: "disabled",
      version: flag.version
    };
  }
  const sortedRules = [...flag.rules].sort((a2, b2) => a2.priority - b2.priority);
  for (const r of sortedRules) {
    const rule = r.ruleJson;
    if (rule.type === "allowlist") {
      if (rule.userIds.includes(userId)) {
        return {
          key: flag.key,
          value: true,
          reason: "allowlist",
          version: flag.version
        };
      }
    }
    if (rule.type === "rollout") {
      const bucket = getBucket(userId, flag.key);
      if (bucket < rule.percentage) {
        return {
          key: flag.key,
          value: true,
          reason: "rollout",
          bucket,
          version: flag.version
        };
      }
    }
  }
  return {
    key: flag.key,
    value: flag.defaultValueJson,
    reason: "default",
    version: flag.version
  };
}
var init_evaluator = __esm(() => {
  init_hash();
});

// src/types/index.ts
var CreateFlagSchema, UpdateFlagSchema, RuleSchema, CreateRuleSchema, CreateOrgSchema, CreateProjectSchema, CreateEnvironmentSchema, VariantSchema, CreateExperimentSchema, UpdateExperimentSchema, EvaluateQuerySchema;
var init_types = __esm(() => {
  init_zod();
  CreateFlagSchema = exports_external.object({
    envId: exports_external.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
    key: exports_external.string().min(1).max(100),
    type: exports_external.enum(["boolean", "string", "number", "json"]).default("boolean"),
    defaultValue: exports_external.unknown(),
    enabled: exports_external.boolean().default(false)
  });
  UpdateFlagSchema = exports_external.object({
    defaultValue: exports_external.unknown().optional(),
    enabled: exports_external.boolean().optional()
  });
  RuleSchema = exports_external.discriminatedUnion("type", [
    exports_external.object({ type: exports_external.literal("allowlist"), userIds: exports_external.array(exports_external.string()) }),
    exports_external.object({ type: exports_external.literal("segment"), segmentKey: exports_external.string() }),
    exports_external.object({ type: exports_external.literal("rollout"), percentage: exports_external.number().min(0).max(100) })
  ]);
  CreateRuleSchema = exports_external.object({
    priority: exports_external.number().int().min(0),
    rule: RuleSchema
  });
  CreateOrgSchema = exports_external.object({
    name: exports_external.string().min(1).max(100)
  });
  CreateProjectSchema = exports_external.object({
    orgId: exports_external.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID").optional(),
    name: exports_external.string().min(1).max(100)
  });
  CreateEnvironmentSchema = exports_external.object({
    projectId: exports_external.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
    name: exports_external.string().min(1).max(50)
  });
  VariantSchema = exports_external.object({
    key: exports_external.string().min(1),
    weight: exports_external.number().min(0).max(100)
  });
  CreateExperimentSchema = exports_external.object({
    envId: exports_external.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "Invalid UUID"),
    key: exports_external.string().min(1).max(100),
    variants: exports_external.array(VariantSchema).min(2)
  });
  UpdateExperimentSchema = exports_external.object({
    variants: exports_external.array(VariantSchema).min(2).optional(),
    status: exports_external.enum(["draft", "running", "paused", "completed"]).optional()
  });
  EvaluateQuerySchema = exports_external.object({
    project: exports_external.string().min(1).nullable().optional(),
    env: exports_external.string().min(1),
    userId: exports_external.string().min(1),
    keys: exports_external.string().min(1)
  });
});

// src/routes/evaluate.ts
var exports_evaluate = {};
__export(exports_evaluate, {
  handleEvaluate: () => handleEvaluate
});
async function handleEvaluate(req, scopedProjectId) {
  const url2 = new URL(req.url);
  const parsed = EvaluateQuerySchema.safeParse({
    project: url2.searchParams.get("project"),
    env: url2.searchParams.get("env"),
    userId: url2.searchParams.get("userId"),
    keys: url2.searchParams.get("keys")
  });
  if (!parsed.success)
    return errorResponse(parsed.error.message);
  const { project, env, userId, keys } = parsed.data;
  if (!scopedProjectId && !project) {
    return errorResponse("project is required when not using an SDK key", 400);
  }
  const keyList = keys.split(",").map((k) => k.trim()).filter(Boolean);
  const whereClause = scopedProjectId ? and(eq(projects.id, scopedProjectId), eq(environments.name, env)) : and(eq(projects.name, project), eq(environments.name, env));
  const [envRecord] = await db2.select({ id: environments.id }).from(environments).innerJoin(projects, eq(environments.projectId, projects.id)).where(whereClause).limit(1);
  if (!envRecord)
    return errorResponse("Project or environment not found", 404);
  const flagRecords = await db2.select().from(flags).where(and(eq(flags.envId, envRecord.id), inArray(flags.key, keyList)));
  const flagIds = flagRecords.map((f) => f.id);
  const rules = flagIds.length > 0 ? await db2.select().from(flagRules).where(inArray(flagRules.flagId, flagIds)) : [];
  const rulesByFlagId = new Map;
  for (const rule of rules) {
    if (!rulesByFlagId.has(rule.flagId))
      rulesByFlagId.set(rule.flagId, []);
    rulesByFlagId.get(rule.flagId).push(rule);
  }
  const results = flagRecords.map((flag) => {
    const flagWithRules = {
      key: flag.key,
      type: flag.type,
      defaultValueJson: flag.defaultValueJson,
      enabled: flag.enabled,
      version: flag.version,
      rules: rulesByFlagId.get(flag.id) ?? []
    };
    return evaluateFlag(flagWithRules, userId);
  });
  return jsonResponse({ userId, flags: results });
}
var init_evaluate = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_evaluator();
  init_types();
});

// src/routes/sdkKeys.ts
var exports_sdkKeys = {};
__export(exports_sdkKeys, {
  resolveSdkKey: () => resolveSdkKey,
  handleSdkKeys: () => handleSdkKeys
});
function generateKey() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return "ct_" + Array.from(bytes).map((b2) => chars[b2 % chars.length]).join("");
}
async function hashKey(key) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(key));
  return Array.from(new Uint8Array(buf)).map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
async function handleSdkKeys(req, segments) {
  const minRole = req.method === "GET" ? "member" : "admin";
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response)
    return auth;
  const { user } = auth;
  if (req.method === "GET" && segments.length === 0) {
    const keys = await db2.select({
      id: sdkKeys.id,
      name: sdkKeys.name,
      prefix: sdkKeys.prefix,
      keyPlain: sdkKeys.keyPlain,
      projectId: sdkKeys.projectId,
      createdAt: sdkKeys.createdAt
    }).from(sdkKeys).innerJoin(projects, eq(sdkKeys.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(eq(orgMembers.userId, user.id));
    return jsonResponse(keys);
  }
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateSdkKeySchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const [project] = await db2.select({ id: projects.id }).from(projects).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, user.id))).limit(1);
    if (!project)
      return errorResponse("Project not found", 404);
    const plainKey = generateKey();
    const keyHash = await hashKey(plainKey);
    const prefix = plainKey.slice(0, 12);
    const [record2] = await db2.insert(sdkKeys).values({
      projectId: parsed.data.projectId,
      name: parsed.data.name,
      keyHash,
      keyPlain: plainKey,
      prefix
    }).returning();
    return jsonResponse({ ...record2, key: plainKey }, 201);
  }
  if (req.method === "DELETE" && segments.length === 1) {
    const id = segments[0];
    const [record2] = await db2.select({ id: sdkKeys.id }).from(sdkKeys).innerJoin(projects, eq(sdkKeys.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(sdkKeys.id, id), eq(orgMembers.userId, user.id))).limit(1);
    if (!record2)
      return errorResponse("SDK key not found", 404);
    const [deleted] = await db2.delete(sdkKeys).where(eq(sdkKeys.id, record2.id)).returning();
    if (!deleted)
      return errorResponse("SDK key not found", 404);
    return jsonResponse({ deleted: true });
  }
  return errorResponse("Not found", 404);
}
async function resolveSdkKey(rawKey) {
  const keyHash = await hashKey(rawKey);
  const [record2] = await db2.select({ projectId: sdkKeys.projectId }).from(sdkKeys).where(eq(sdkKeys.keyHash, keyHash)).limit(1);
  return record2 ?? null;
}
var CreateSdkKeySchema;
var init_sdkKeys = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
  init_zod();
  CreateSdkKeySchema = exports_external.object({
    projectId: exports_external.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
    name: exports_external.string().min(1).max(100)
  });
});

// src/routes/stream.ts
var exports_stream = {};
__export(exports_stream, {
  handleStream: () => handleStream,
  getSubscribers: () => getSubscribers,
  broadcast: () => broadcast
});
function getSubscribers() {
  return subscribers;
}
function broadcast(project, env, data) {
  const key = `${project}:${env}`;
  const subs = subscribers.get(key);
  if (!subs || subs.size === 0)
    return;
  const message = `data: ${JSON.stringify(data)}

`;
  const encoder = new TextEncoder;
  for (const controller of subs) {
    try {
      controller.enqueue(encoder.encode(message));
    } catch {
      subs.delete(controller);
    }
  }
}
async function handleStream(req) {
  const url2 = new URL(req.url);
  const project = url2.searchParams.get("project");
  const env = url2.searchParams.get("env");
  if (!project || !env) {
    return new Response(JSON.stringify({ error: "Missing project or env" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const key = `${project}:${env}`;
  const stream = new ReadableStream({
    start(controller) {
      if (!subscribers.has(key))
        subscribers.set(key, new Set);
      subscribers.get(key).add(controller);
      const encoder = new TextEncoder;
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "connected", project, env })}

`));
      req.signal.addEventListener("abort", () => {
        subscribers.get(key)?.delete(controller);
        try {
          controller.close();
        } catch {}
      });
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    }
  });
}
var subscribers;
var init_stream = __esm(() => {
  subscribers = new Map;
});

// src/routes/flags.ts
var exports_flags = {};
__export(exports_flags, {
  handleFlags: () => handleFlags
});
async function getProjectEnvNames(envId) {
  const [row] = await db2.select({ project: projects.name, env: environments.name }).from(environments).innerJoin(projects, eq(environments.projectId, projects.id)).where(eq(environments.id, envId)).limit(1);
  return row ?? null;
}
async function canAccessEnvironment(userId, envId) {
  const [row] = await db2.select({ id: environments.id }).from(environments).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(environments.id, envId), eq(orgMembers.userId, userId))).limit(1);
  return !!row;
}
async function handleFlags(req, segments) {
  const minRole = req.method === "GET" ? "member" : "admin";
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response)
    return auth;
  const { user } = auth;
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateFlagSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const { envId, key, type, defaultValue, enabled } = parsed.data;
    if (!await canAccessEnvironment(user.id, envId)) {
      return errorResponse("Environment not found", 404);
    }
    const existing = await db2.select().from(flags).where(and(eq(flags.envId, envId), eq(flags.key, key))).limit(1);
    if (existing.length > 0)
      return errorResponse("Flag key already exists in this environment", 409);
    const [flag] = await db2.insert(flags).values({
      envId,
      key,
      type,
      defaultValueJson: defaultValue ?? false,
      enabled
    }).returning();
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "create_flag",
      resource: `flags/${key}`,
      beforeJson: null,
      afterJson: flag
    });
    const names = await getProjectEnvNames(envId);
    if (names)
      broadcast(names.project, names.env, { type: "flag_created", flag });
    return jsonResponse(flag, 201);
  }
  if (req.method === "PUT" && segments.length === 1) {
    const key = segments[0];
    const body = await req.json().catch(() => null);
    const parsed = UpdateFlagSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const [existing] = await db2.select({
      id: flags.id,
      envId: flags.envId,
      key: flags.key,
      type: flags.type,
      defaultValueJson: flags.defaultValueJson,
      enabled: flags.enabled,
      version: flags.version,
      updatedAt: flags.updatedAt,
      createdAt: flags.createdAt
    }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(flags.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!existing)
      return errorResponse("Flag not found", 404);
    const updates = {};
    if (parsed.data.enabled !== undefined)
      updates.enabled = parsed.data.enabled;
    if (parsed.data.defaultValue !== undefined)
      updates.defaultValueJson = parsed.data.defaultValue;
    const [updated] = await db2.update(flags).set({ ...updates, version: existing.version + 1, updatedAt: new Date }).where(eq(flags.key, key)).returning();
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "update_flag",
      resource: `flags/${key}`,
      beforeJson: existing,
      afterJson: updated
    });
    const names = await getProjectEnvNames(existing.envId);
    if (names)
      broadcast(names.project, names.env, { type: "flag_updated", flag: updated });
    return jsonResponse(updated);
  }
  if (req.method === "GET" && segments.length === 0) {
    const all = await db2.select({
      id: flags.id,
      envId: flags.envId,
      key: flags.key,
      type: flags.type,
      defaultValueJson: flags.defaultValueJson,
      enabled: flags.enabled,
      version: flags.version,
      updatedAt: flags.updatedAt,
      createdAt: flags.createdAt
    }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(eq(orgMembers.userId, user.id));
    return jsonResponse(all);
  }
  if (req.method === "DELETE" && segments.length === 1) {
    const key = segments[0];
    const [flag] = await db2.select({
      id: flags.id,
      envId: flags.envId,
      key: flags.key,
      type: flags.type,
      defaultValueJson: flags.defaultValueJson,
      enabled: flags.enabled,
      version: flags.version,
      updatedAt: flags.updatedAt,
      createdAt: flags.createdAt
    }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(flags.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!flag)
      return errorResponse("Flag not found", 404);
    await db2.delete(flagRules).where(eq(flagRules.flagId, flag.id));
    await db2.delete(flags).where(eq(flags.id, flag.id));
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "delete_flag",
      resource: `flags/${key}`,
      beforeJson: flag,
      afterJson: null
    });
    const names = await getProjectEnvNames(flag.envId);
    if (names)
      broadcast(names.project, names.env, { type: "flag_deleted", flagKey: key });
    return jsonResponse({ deleted: true });
  }
  if (req.method === "POST" && segments.length === 2 && segments[1] === "rules") {
    const key = segments[0];
    const body = await req.json().catch(() => null);
    const parsed = CreateRuleSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const [flag] = await db2.select({ id: flags.id, envId: flags.envId, key: flags.key }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(flags.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!flag)
      return errorResponse("Flag not found", 404);
    const [rule] = await db2.insert(flagRules).values({
      flagId: flag.id,
      priority: parsed.data.priority,
      ruleJson: parsed.data.rule
    }).returning();
    if (!rule)
      return errorResponse("Failed to create rule", 500);
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "create_rule",
      resource: `flags/${key}/rules/${rule.id}`,
      beforeJson: null,
      afterJson: rule
    });
    const names = await getProjectEnvNames(flag.envId);
    if (names)
      broadcast(names.project, names.env, { type: "flag_rules_updated", flagKey: key });
    return jsonResponse(rule, 201);
  }
  if (req.method === "GET" && segments.length === 2 && segments[1] === "rules") {
    const key = segments[0];
    const [flag] = await db2.select({ id: flags.id }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(flags.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!flag)
      return errorResponse("Flag not found", 404);
    const rules = await db2.select().from(flagRules).where(eq(flagRules.flagId, flag.id));
    return jsonResponse(rules);
  }
  if (req.method === "DELETE" && segments.length === 3 && segments[1] === "rules") {
    const key = segments[0];
    const ruleId = segments[2];
    const [flag] = await db2.select({ id: flags.id, envId: flags.envId }).from(flags).innerJoin(environments, eq(flags.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(flags.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!flag)
      return errorResponse("Flag not found", 404);
    const [deleted] = await db2.delete(flagRules).where(and(eq(flagRules.id, ruleId), eq(flagRules.flagId, flag.id))).returning();
    if (!deleted)
      return errorResponse("Rule not found", 404);
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "delete_rule",
      resource: `flags/${key}/rules/${ruleId}`,
      beforeJson: deleted,
      afterJson: null
    });
    const names = await getProjectEnvNames(flag.envId);
    if (names)
      broadcast(names.project, names.env, { type: "flag_rules_updated", flagKey: key });
    return jsonResponse({ deleted: true });
  }
  return errorResponse("Not found", 404);
}
var init_flags = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
  init_types();
  init_stream();
});

// src/routes/experiments.ts
var exports_experiments = {};
__export(exports_experiments, {
  handleExperiments: () => handleExperiments
});
async function handleExperiments(req, segments) {
  const minRole = req.method === "GET" ? "member" : "admin";
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response)
    return auth;
  const { user } = auth;
  if (req.method === "POST" && segments.length === 0) {
    const body = await req.json().catch(() => null);
    const parsed = CreateExperimentSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const totalWeight = parsed.data.variants.reduce((sum, v2) => sum + v2.weight, 0);
    if (totalWeight !== 100)
      return errorResponse("Variant weights must sum to 100");
    const [env] = await db2.select({ id: environments.id }).from(environments).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(environments.id, parsed.data.envId), eq(orgMembers.userId, user.id))).limit(1);
    if (!env)
      return errorResponse("Environment not found", 404);
    const [experiment] = await db2.insert(experiments).values({
      envId: parsed.data.envId,
      key: parsed.data.key,
      variantsJson: parsed.data.variants,
      status: "draft"
    }).returning();
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "create_experiment",
      resource: `experiments/${parsed.data.key}`,
      beforeJson: null,
      afterJson: experiment
    });
    return jsonResponse(experiment, 201);
  }
  if (req.method === "PUT" && segments.length === 1) {
    const key = segments[0];
    const body = await req.json().catch(() => null);
    const parsed = UpdateExperimentSchema.safeParse(body);
    if (!parsed.success)
      return errorResponse(parsed.error.message);
    const [existing] = await db2.select({
      id: experiments.id,
      envId: experiments.envId,
      key: experiments.key,
      variantsJson: experiments.variantsJson,
      status: experiments.status,
      version: experiments.version,
      updatedAt: experiments.updatedAt,
      createdAt: experiments.createdAt
    }).from(experiments).innerJoin(environments, eq(experiments.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(experiments.key, key), eq(orgMembers.userId, user.id))).limit(1);
    if (!existing)
      return errorResponse("Experiment not found", 404);
    const updates = {};
    if (parsed.data.variants)
      updates.variantsJson = parsed.data.variants;
    if (parsed.data.status)
      updates.status = parsed.data.status;
    const [updated] = await db2.update(experiments).set({ ...updates, version: existing.version + 1, updatedAt: new Date }).where(eq(experiments.key, key)).returning();
    await db2.insert(auditLog).values({
      actor: user.name,
      action: "update_experiment",
      resource: `experiments/${key}`,
      beforeJson: existing,
      afterJson: updated
    });
    return jsonResponse(updated);
  }
  if (req.method === "GET" && segments.length === 0) {
    const all = await db2.select({
      id: experiments.id,
      envId: experiments.envId,
      key: experiments.key,
      variantsJson: experiments.variantsJson,
      status: experiments.status,
      version: experiments.version,
      updatedAt: experiments.updatedAt,
      createdAt: experiments.createdAt
    }).from(experiments).innerJoin(environments, eq(experiments.envId, environments.id)).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(eq(orgMembers.userId, user.id));
    return jsonResponse(all);
  }
  return errorResponse("Not found", 404);
}
var init_experiments = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
  init_types();
});

// src/routes/audit.ts
var exports_audit = {};
__export(exports_audit, {
  handleAudit: () => handleAudit
});
async function handleAudit(req) {
  const auth = await requireAuth(req, "member");
  if (auth instanceof Response)
    return auth;
  const url2 = new URL(req.url);
  const limit = Math.min(parseInt(url2.searchParams.get("limit") ?? "50"), 200);
  const logs = await db2.select().from(auditLog).orderBy(desc(auditLog.createdAt)).limit(limit);
  return jsonResponse(logs);
}
var init_audit = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
});

// src/routes/admin.ts
var exports_admin = {};
__export(exports_admin, {
  handleAdmin: () => handleAdmin
});
async function handleAdmin(req, segments) {
  const minRole = req.method === "GET" ? "member" : "admin";
  const auth = await requireAuth(req, minRole);
  if (auth instanceof Response)
    return auth;
  const { user } = auth;
  const resource = segments[0];
  if (resource === "orgs") {
    if (req.method === "GET") {
      const rows = await db2.select({ id: orgs.id, name: orgs.name, createdAt: orgs.createdAt }).from(orgs).innerJoin(orgMembers, eq(orgMembers.orgId, orgs.id)).where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateOrgSchema.safeParse(body);
      if (!parsed.success)
        return errorResponse(parsed.error.message);
      const [org] = await db2.insert(orgs).values({ name: parsed.data.name }).returning();
      await db2.insert(orgMembers).values({ orgId: org.id, userId: user.id, role: "owner" });
      return jsonResponse(org, 201);
    }
  }
  if (resource === "projects") {
    if (req.method === "GET") {
      const rows = await db2.select({ id: projects.id, orgId: projects.orgId, name: projects.name, createdAt: projects.createdAt }).from(projects).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateProjectSchema.safeParse(body);
      if (!parsed.success)
        return errorResponse(parsed.error.message);
      const desiredOrgId = parsed.data.orgId;
      if (!desiredOrgId) {
        const [membership] = await db2.select({ orgId: orgMembers.orgId }).from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
        if (!membership)
          return errorResponse("Org not found", 404);
        const [project2] = await db2.insert(projects).values({
          orgId: membership.orgId,
          name: parsed.data.name
        }).returning();
        return jsonResponse(project2, 201);
      }
      const [org] = await db2.select({ id: orgs.id }).from(orgs).innerJoin(orgMembers, eq(orgMembers.orgId, orgs.id)).where(and(eq(orgs.id, desiredOrgId), eq(orgMembers.userId, user.id))).limit(1);
      if (!org)
        return errorResponse("Org not found", 404);
      const [project] = await db2.insert(projects).values({
        orgId: desiredOrgId,
        name: parsed.data.name
      }).returning();
      return jsonResponse(project, 201);
    }
  }
  if (resource === "environments") {
    if (req.method === "GET") {
      const rows = await db2.select({ id: environments.id, projectId: environments.projectId, name: environments.name, createdAt: environments.createdAt }).from(environments).innerJoin(projects, eq(environments.projectId, projects.id)).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(eq(orgMembers.userId, user.id));
      return jsonResponse(rows);
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => null);
      const parsed = CreateEnvironmentSchema.safeParse(body);
      if (!parsed.success)
        return errorResponse(parsed.error.message);
      const [project] = await db2.select({ id: projects.id }).from(projects).innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId)).where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, user.id))).limit(1);
      if (!project)
        return errorResponse("Project not found", 404);
      const [env] = await db2.insert(environments).values({
        projectId: parsed.data.projectId,
        name: parsed.data.name
      }).returning();
      return jsonResponse(env, 201);
    }
  }
  return errorResponse("Not found", 404);
}
var init_admin = __esm(() => {
  init_client();
  init_schema2();
  init_drizzle_orm();
  init_auth();
  init_types();
});

// src/app.ts
var exports_app = {};
__export(exports_app, {
  handleRequest: () => handleRequest
});
function getBearerToken(req) {
  return req.headers.get("authorization")?.replace("Bearer ", "").trim() ?? null;
}
async function handleRequest(req) {
  const url2 = new URL(req.url);
  const path = url2.pathname.replace(/\/$/, "");
  const segments = path.split("/").filter(Boolean);
  console.log(`[${new Date().toISOString()}] ${req.method} ${path}`);
  try {
    if (path === "/health") {
      return jsonResponse({ status: "ok", timestamp: new Date().toISOString() });
    }
    if (segments[0] === "auth") {
      const { handleAuth: handleAuth2 } = await Promise.resolve().then(() => (init_auth2(), exports_auth));
      return await handleAuth2(req, segments.slice(1));
    }
    if (path === "/evaluate" && req.method === "GET") {
      const { handleEvaluate: handleEvaluate2 } = await Promise.resolve().then(() => (init_evaluate(), exports_evaluate));
      const { resolveSdkKey: resolveSdkKey2 } = await Promise.resolve().then(() => (init_sdkKeys(), exports_sdkKeys));
      const token = getBearerToken(req);
      if (token?.startsWith("ct_")) {
        const sdk = await resolveSdkKey2(token);
        if (!sdk)
          return errorResponse("Invalid SDK key", 401);
        return await handleEvaluate2(req, sdk.projectId);
      }
      return await handleEvaluate2(req);
    }
    if (path === "/stream" && req.method === "GET") {
      const { handleStream: handleStream2 } = await Promise.resolve().then(() => (init_stream(), exports_stream));
      const { resolveSdkKey: resolveSdkKey2 } = await Promise.resolve().then(() => (init_sdkKeys(), exports_sdkKeys));
      const token = getBearerToken(req);
      if (token?.startsWith("ct_")) {
        const sdk = await resolveSdkKey2(token);
        if (!sdk)
          return errorResponse("Invalid SDK key", 401);
      }
      return await handleStream2(req);
    }
    if (segments[0] === "admin") {
      const { handleFlags: handleFlags2 } = await Promise.resolve().then(() => (init_flags(), exports_flags));
      const { handleExperiments: handleExperiments2 } = await Promise.resolve().then(() => (init_experiments(), exports_experiments));
      const { handleAudit: handleAudit2 } = await Promise.resolve().then(() => (init_audit(), exports_audit));
      const { handleSdkKeys: handleSdkKeys2 } = await Promise.resolve().then(() => (init_sdkKeys(), exports_sdkKeys));
      const { handleAdmin: handleAdmin2 } = await Promise.resolve().then(() => (init_admin(), exports_admin));
      const resource = segments[1];
      const rest = segments.slice(2);
      if (resource === "flags")
        return await handleFlags2(req, rest);
      if (resource === "experiments")
        return await handleExperiments2(req, rest);
      if (resource === "audit" && req.method === "GET")
        return await handleAudit2(req);
      if (resource === "sdk-keys")
        return await handleSdkKeys2(req, rest);
      if (resource === "orgs" || resource === "projects" || resource === "environments") {
        return await handleAdmin2(req, segments.slice(1));
      }
    }
    return errorResponse("Not found", 404);
  } catch (err) {
    console.error("Unhandled error:", err);
    console.error("Error details:", {
      message: err?.message,
      stack: err?.stack,
      cause: err?.cause
    });
    return errorResponse("Internal server error", 500);
  }
}
var init_app = () => {};

// src/vercel/nodeAdapter.ts
async function runNodeAdapter(req, res) {
  try {
    const { handleRequest: handleRequest2 } = await Promise.resolve().then(() => (init_app(), exports_app));
    const method = req?.method ?? "GET";
    if (typeof req?.headers?.get === "function" && typeof req?.text === "function") {
      const response2 = await handleRequest2(req);
      if (!res)
        return;
      res.statusCode = response2.status;
      response2.headers.forEach((value, key) => res.setHeader(key, value));
      const payload2 = Buffer.from(await response2.arrayBuffer());
      res.end(payload2);
      return;
    }
    const proto = req?.headers?.["x-forwarded-proto"] ?? "https";
    const host = req?.headers?.host ?? "localhost";
    const rawPath = req?.url ?? "/";
    const parsed = rawPath.startsWith("http://") || rawPath.startsWith("https://") ? new URL(rawPath) : new URL(`${proto}://${host}${rawPath}`);
    const normalizedPath = parsed.pathname.startsWith("/api/") ? parsed.pathname.replace(/^\/api/, "") : parsed.pathname === "/api" ? "/" : parsed.pathname;
    const url2 = `${proto}://${host}${normalizedPath}${parsed.search}`;
    const headers = new Headers;
    for (const [key, value] of Object.entries(req?.headers ?? {})) {
      if (Array.isArray(value))
        headers.set(key, value.join(", "));
      else if (typeof value === "string")
        headers.set(key, value);
    }
    const body = await new Promise((resolve) => {
      if (method === "GET" || method === "HEAD") {
        resolve(Buffer.alloc(0));
        return;
      }
      if (req?.body !== undefined && req?.body !== null) {
        if (Buffer.isBuffer(req.body)) {
          resolve(req.body);
          return;
        }
        if (typeof req.body === "string") {
          resolve(Buffer.from(req.body));
          return;
        }
        resolve(Buffer.from(JSON.stringify(req.body)));
        return;
      }
      if (typeof req?.on !== "function") {
        resolve(Buffer.alloc(0));
        return;
      }
      if (req.readableEnded) {
        resolve(Buffer.alloc(0));
        return;
      }
      const chunks = [];
      const timeout = setTimeout(() => resolve(Buffer.concat(chunks)), 5000);
      req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
      req.on("end", () => {
        clearTimeout(timeout);
        resolve(Buffer.concat(chunks));
      });
      req.on("error", () => {
        clearTimeout(timeout);
        resolve(Buffer.alloc(0));
      });
    });
    const request = new Request(url2, {
      method,
      headers,
      body: method === "GET" || method === "HEAD" ? undefined : body
    });
    const response = await handleRequest2(request);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    const payload = Buffer.from(await response.arrayBuffer());
    res.end(payload);
  } catch (error48) {
    console.error("Vercel adapter error:", error48);
    if (!res)
      return;
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Function adapter failure", message: error48?.message ?? "unknown" }));
  }
}
export {
  runNodeAdapter
};
