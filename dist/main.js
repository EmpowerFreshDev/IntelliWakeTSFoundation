var Fn = Object.defineProperty, Pn = Object.defineProperties;
var Bn = Object.getOwnPropertyDescriptors;
var rn = Object.getOwnPropertySymbols;
var xn = Object.prototype.hasOwnProperty, Rn = Object.prototype.propertyIsEnumerable;
var ne = Math.pow, We = (n, e, a) => e in n ? Fn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[e] = a, D = (n, e) => {
  for (var a in e || (e = {}))
    xn.call(e, a) && We(n, a, e[a]);
  if (rn)
    for (var a of rn(e))
      Rn.call(e, a) && We(n, a, e[a]);
  return n;
}, V = (n, e) => Pn(n, Bn(e));
var _e = (n, e, a) => (We(n, typeof e != "symbol" ? e + "" : e, a), a);
var ae = (n, e, a) => new Promise((r, t) => {
  var i = (o) => {
    try {
      l(a.next(o));
    } catch (s) {
      t(s);
    }
  }, u = (o) => {
    try {
      l(a.throw(o));
    } catch (s) {
      t(s);
    }
  }, l = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(i, u);
  l((a = a.apply(n, e)).next());
});
function Xa(n, e, a = 2) {
  if (!(+e > 0))
    return [];
  const r = +n < 1 ? 1 : +n > +e ? +e : +n, t = +n < +a || +n > +e - +a ? +a : Math.ceil(+a / 2);
  let i = +r - +t, u = +r + +t, l = [], o = [], s;
  for (let m = 1; m <= +e; m++)
    (m === 1 || m === +e || m >= i && m <= u) && l.push(m);
  for (let m of l)
    s && (m - s === 2 ? o.push(s + 1) : m - s !== 1 && o.push(null)), o.push(m), s = m;
  return o;
}
const Yn = {
  primaryAscending: !0,
  primaryEmptyToBottom: null,
  secondarySort: null,
  secondaryAscending: !0,
  secondaryEmptyToBottom: null
}, ja = (n, e) => e === null || n === e, er = (n) => {
  switch (n) {
    case !0:
      return "true";
    case !1:
      return "false";
    default:
      return "null";
  }
}, nr = (n) => {
  switch (n) {
    case "true":
      return !0;
    case "false":
      return !1;
    default:
      return null;
  }
}, ar = {
  page: 1,
  countPerPage: 50,
  search: "",
  sortColumns: V(D({}, Yn), { primarySort: "" }),
  active: !0,
  filterValues: {}
}, rr = (n, e, a = !0, r = null) => e.primarySort === n ? V(D({}, e), {
  primaryAscending: !e.primaryAscending,
  primaryEmptyToBottom: r
}) : {
  primarySort: n,
  primaryAscending: a,
  primaryEmptyToBottom: r,
  secondarySort: e.primarySort,
  secondaryAscending: e.primaryAscending,
  secondaryEmptyToBottom: e.primaryEmptyToBottom
}, tn = (n, e) => n.sort(
  (a, r) => {
    var t, i, u, l, o;
    return e.primarySort ? (o = un(
      (t = a[e.primarySort]) != null ? t : null,
      (i = r[e.primarySort]) != null ? i : null,
      e.primaryAscending,
      e.primaryEmptyToBottom
    )) != null ? o : e.secondarySort ? un(
      (u = a[e.secondarySort]) != null ? u : null,
      (l = r[e.secondarySort]) != null ? l : null,
      e.secondaryAscending,
      e.secondaryEmptyToBottom
    ) : 0 : 0;
  }
), re = (n) => n == null || n === "", F = (n) => n == null, Hn = (n, e, a, r = "Top") => {
  //!!emptyTo
  return (n != null ? n : null) === (e != null ? e : null) ? null : e ? n ? a.indexOf(n) - a.indexOf(e) : r === "Top" ? 1 : -1 : r === "Top" ? -1 : 1;
}, tr = (n, e, a, r = "Top") => {
  var t;
  return (t = Hn(n, e, a, r)) != null ? t : 0;
}, Wn = (n, e, a = null) => {
  //!!emptyTo
  if (n === e)
    return null;
  if (a)
    if (a.endsWith("0")) {
      if (!n && e)
        return typeof e == "boolean" ? a === "Top0" ? 1 : -1 : a === "Top0" ? -1 : 1;
      if (!e && n)
        return typeof n == "boolean" ? a === "Top0" ? -1 : 1 : a === "Top0" ? 1 : -1;
    } else {
      if (re(n) && !re(e))
        return typeof e == "boolean" ? a === "Top" ? 1 : -1 : a === "Top" ? -1 : 1;
      if (re(e) && !re(n))
        return typeof n == "boolean" ? a === "Top" ? -1 : 1 : a === "Top" ? 1 : -1;
    }
  if (typeof n == "boolean" && typeof e == "boolean")
    return (n ? 1 : 0) - (e ? 1 : 0);
  const r = f(n, void 0, !0), t = f(e, void 0, !0);
  return !isNaN(r) && !isNaN(t) ? r - t : (n != null ? n : "").toString().localeCompare((e != null ? e : "").toString(), void 0, { sensitivity: "base" });
}, le = (n, e, a = null) => {
  var r;
  return (r = Wn(n, e, a)) != null ? r : 0;
};
function ir(n) {
  if (Array.isArray(n.at(0))) {
    for (const e of n) {
      const a = le(e[0], e[1], e[2]);
      if (a)
        return a;
    }
    return 0;
  } else
    return le(n[0], n[1], n[2]);
}
const zn = (n, e, a = ".", r = null) => {
  const t = (n != null ? n : "").toString().split(a), i = (e != null ? e : "").toString().split(a), u = an(t.length, i.length);
  for (let l = 0; l < u; l++) {
    const o = le(t[l], i[l], r);
    if (o !== 0)
      return o;
  }
  return null;
}, ur = (n, e, a = ".", r = null) => {
  var t;
  return (t = zn(n, e, a, r)) != null ? t : 0;
}, or = (n, e = 10) => {
  let a = 0;
  return n.sort((r, t) => le(r.sort_order, t.sort_order)).map(
    (r) => V(D({}, r), {
      sort_order: a += e
    }),
    []
  );
}, Gn = (n, e, a, r = "Top") => n == e ? null : a.indexOf(n) < 0 ? a.indexOf(e) < 0 ? le(n, e) : r === "Top" ? -1 : 1 : a.indexOf(e) < 0 ? r === "Top" ? 1 : -1 : re(n) ? re(e) ? 0 : r === "Top" ? -1 : 1 : re(e) ? r === "Top" ? 1 : -1 : n === e ? 0 : a.indexOf(n) - a.indexOf(e), lr = (n, e, a, r = "Top") => {
  var t;
  return (t = Gn(n, e, a, r)) != null ? t : 0;
}, un = (n, e, a, r) => le(
  a ? n : e,
  a ? e : n,
  r ? a ? "Bottom0" : "Top0" : void 0
), Ye = (n, e = !0, a = 8) => (n != null ? n : "").trim().split(/(\s+)/).map((r) => e ? r.trim().toLowerCase() : r.trim()).filter((r) => !!r).filter((r, t) => !a || t < a), sr = (n, e = " ", a = !0) => {
  if (!n)
    return "";
  let r;
  return Array.isArray(n) ? r = n.map((t) => (t != null ? t : "").trim()).filter((t) => !!t).join(e).trim() : r = n.trim(), a ? r.toLowerCase() : r;
}, Kn = (n, e) => e.length === 0 ? !0 : n ? e.every((a) => n.includes(a)) : !1, cr = (n, e) => {
  if (!e)
    return !0;
  if (!n)
    return !1;
  const a = Ye(e);
  return Kn(n, a);
}, se = (n, e, a) => {
  var i;
  if (e.length === 0)
    return !0;
  if (!n || typeof n == "object" && ((i = n.type) != null && i.toString().includes("react.")))
    return !1;
  const r = (u) => Object.keys(n).some((l) => {
    const o = n[l], s = typeof o;
    if (!Array.isArray(o) && ["number", "bigint", "string"].includes(s))
      return o.toString().toLowerCase().includes(u.toLowerCase());
    if (Array.isArray(o)) {
      for (const m of o)
        if (se(m, [u], a))
          return !0;
    }
    return s === "object" ? se(o, [u], a) : !1;
  });
  let t = e;
  if ((a == null ? void 0 : a.matchUntilTerm) !== void 0)
    if ((a == null ? void 0 : a.matchFromTerm) !== void 0) {
      if (a.matchFromTerm < a.matchUntilTerm)
        throw new Error(`Could not match terms from ${a.matchFromTerm} to ${a.matchUntilTerm}`);
      if (a.matchFromTerm + 1 > e.length)
        return !1;
      t = t.slice(a.matchFromTerm, a.matchUntilTerm + 1);
    } else
      t = t.slice(0, a.matchUntilTerm + 1);
  else if ((a == null ? void 0 : a.matchFromTerm) !== void 0) {
    if (a.matchFromTerm + 1 > e.length)
      return !1;
    t = t.slice(a.matchFromTerm);
  }
  return a != null && a.matchSomeTerm ? t.some(r) : t.every(r);
}, mr = (n, e, a) => {
  if (!e)
    return !0;
  if (!n)
    return !1;
  const r = Ye(e);
  return se(n, r, a);
}, on = (n, e, a) => {
  const r = Ye(e);
  let t = f(a == null ? void 0 : a.limit);
  if (r.length === 0 && !t)
    return n;
  let i = a != null && a.page ? f(a.page - 1) * (t != null ? t : 0) : 0;
  return t ? (n != null ? n : []).reduce((u, l, o) => o < i || u.length >= t ? u : !r.length || se(l, r, a) ? [...u, l] : u, []) : (n != null ? n : []).filter((u) => se(u, r, a));
}, fr = (n, e, a) => {
  const r = Ye(e);
  return r.length === 0 ? !0 : se(n, r, a);
}, gr = (n, e, a, r) => r != null && r.limit ? on(tn(n, a), e, r) : tn(on(n, e, r), a), j = (n) => {
  if (!n)
    return [];
  const e = H(n);
  let a = [];
  const r = [" ", "_", ",", "-", "/", "\\", "'", '"', "=", "+", "~", ".", ",", "(", ")", "<", ">", "{", "}"];
  e:
    for (const t of e) {
      for (const i of r)
        if (t.includes(i)) {
          a = j([...a, ...t.split(i).filter((u) => !!u)]);
          continue e;
        }
      a = [
        ...a,
        ...t.replace(/([a-zA-Z])([0-9])/g, "$1 $2").replace(/([0-9])([a-zA-Z])/g, "$1 $2").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z0-9])/g, "$1 $2").replace(/([a-zA-Z0-9])([:;@#])/g, "$1 $2").replace(/([:;@#])([a-zA-Z0-9])/g, "$1 $2").split(" ")
      ].filter((i) => !!i);
    }
  return a.filter((t) => !!t);
}, Vn = (n) => {
  if (!n)
    return [];
  const e = H(n);
  let a = [];
  const r = [" ", "_", ",", "-", "/", "\\", "'", '"', "=", "+", "~", ".", ",", "(", ")", "<", ">", "{", "}"];
  e:
    for (const t of e) {
      for (const i of r)
        if (t.includes(i)) {
          a = Vn([...a, ...t.split(i).filter((u) => !!u)]);
          continue e;
        }
      a = [...a, t].filter((i) => !!i);
    }
  return a.filter((t) => !!t);
}, Zn = (n) => n ? n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase() : "", Qe = (n) => n ? n === n.toUpperCase() ? n : n.toLowerCase() === "id" ? "ID" : Zn(n) : "", hr = (n) => j(n).map((e) => e.toLowerCase()).join("_"), dr = (n) => j(n).map((e) => e.toLowerCase()).join("-"), Ar = (n) => j(n).map((e, a) => a ? e === e.toUpperCase() ? e : Qe(e) : e.toLowerCase()).join(""), qn = (n) => j(n).map((e) => e === e.toUpperCase() ? e : Qe(e)).join(" "), Sr = (n) => j(n).map((e) => e === e.toUpperCase() ? e : Qe(e)).join(""), yr = (n) => {
  if (!n)
    return "";
  if (typeof n == "string") {
    const e = n.split(",");
    if (e.length === 2)
      return j([e[1], e[0]]).map((a) => a.substring(0, 1).toUpperCase()).join("");
  }
  return j(n).map((e) => e.substring(0, 1).toUpperCase()).join("");
}, vr = (n) => n ? /<[^>]*>/.test(n) : !1, Dr = function(n, e) {
  if (!n)
    return "";
  if (n.includes("<img "))
    return n;
  let a = n.replace(/(?:\r\n|\r|\n)/g, "<br />");
  const r = e ? `<a href="$1" target="_blank" class="${e}">$1</a>` : "<a href='$1' target='_blank'>$1</a>";
  return a.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi, r);
}, vn = function(n) {
  return n ? n.toString().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : "";
}, Tr = function(n) {
  return n ? vn(n).replace(/(?:\r\n|\r|\n)/g, "<br />") : "";
}, Mr = (n) => vn(n).replace(/<[^>]*>/g, ""), Jn = (n, e, a) => {
  let r = (n != null ? n : "").toString();
  for (; r.length < e; )
    r = a + r;
  return r;
}, Qn = (n, e, a) => {
  let r = (n != null ? n : "").toString();
  for (; r.length < e; )
    r = r + a;
  return r;
}, Cr = (n, e = 2) => "$" + f(n).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}), br = (n, e = 9) => "$" + f(n).toLocaleString(void 0, {
  maximumFractionDigits: e
}), wr = (n, e = 0) => (f(n) * 100).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}) + "%", kr = (n, e = 9) => (f(n) * 100).toLocaleString(void 0, {
  maximumFractionDigits: e
}) + "%", Or = (n, e = 2) => F(n) || f(n) === 0 ? "" : "$" + f(n).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}), Nr = (n, e = 2) => F(n) || f(n) === 0 ? "-" : "$" + f(n).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}), Er = (n, e = 2) => F(n) || f(n) === 0 ? "" : (f(n) * 100).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}) + "%", Ir = (n, e = 2) => F(n) || f(n) === 0 ? "-" : (f(n) * 100).toLocaleString(void 0, {
  maximumFractionDigits: e,
  minimumFractionDigits: e
}) + "%", v = function(n, e = 0, a = null) {
  return f(n).toLocaleString(void 0, {
    maximumFractionDigits: e,
    minimumFractionDigits: a != null ? a : e
  });
}, pr = function(n, e = 9) {
  return f(n, e).toLocaleString(void 0, {
    maximumFractionDigits: e
  });
}, $r = function(n, e = 0) {
  return F(n) || f(n) === 0 ? "" : f(n).toLocaleString(void 0, {
    maximumFractionDigits: e,
    minimumFractionDigits: e
  });
}, Ur = function(n, e = 9) {
  return F(n) || f(n, e) === 0 ? "" : f(n, e).toLocaleString(void 0, {
    maximumFractionDigits: e
  });
}, _r = function(n, e = 0) {
  return F(n) || f(n) === 0 ? "-" : f(n).toLocaleString(void 0, {
    maximumFractionDigits: e,
    minimumFractionDigits: e
  });
}, Lr = function(n, e = 9) {
  return F(n) || f(n, e) === 0 ? "-" : f(n, e).toLocaleString(void 0, {
    maximumFractionDigits: e
  });
}, Z = (n) => {
  let e = v(n);
  if (!e)
    return null;
  switch (e.substring(e.length - 2)) {
    case "11":
    case "12":
    case "13":
      e += "th";
      break;
    default:
      switch (e.substring(e.length - 1)) {
        case "1":
          e += "st";
          break;
        case "2":
          e += "nd";
          break;
        case "3":
          e += "rd";
          break;
        default:
          e += "th";
          break;
      }
  }
  return e;
}, Fr = (n) => n ? typeof n == "string" ? [n] : n : [], Pr = (n) => {
  let e = (n != null ? n : "").replace(/[^\d-]/g, "");
  return e = e.replace(/^(\d{3})-?(\d{1,2})/, "$1-$2"), e = e.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, "$1-$2-$3"), e = e.split("").filter((a, r) => a !== "-" || r === 3 || r === 6).join(""), e.substring(0, 11);
}, He = (n, e = !0) => {
  var i, u, l;
  if (!n)
    return null;
  let a = T(["(", ")", "-", " ", "+"], "", n), r = "";
  for (; (a.startsWith("0") || a.startsWith("1")) && a.length !== 10; )
    r += a[0], a = a.substring(1);
  let t = {
    countryCode: r,
    areaCode: a.substring(0, 3),
    exchangeNumber: a.substring(3, 6),
    subscriberNumber: a.substring(6, 10),
    extension: ""
  };
  if (!e && (((i = t.areaCode) == null ? void 0 : i.length) != 3 || ((u = t.exchangeNumber) == null ? void 0 : u.length) != 3 || ((l = t.subscriberNumber) == null ? void 0 : l.length) != 4))
    return null;
  if (t.areaCode && t.exchangeNumber && t.subscriberNumber) {
    let o = n != null ? n : "", s = o.indexOf(t.areaCode);
    s >= 0 && (s = o.indexOf(
      t.exchangeNumber,
      s + t.areaCode.length
    ), s >= 0 && (s = o.indexOf(
      t.subscriberNumber,
      s + t.exchangeNumber.length
    ), s >= 0 && (t.extension = o.substring(s + t.subscriberNumber.length).trim())));
  }
  return t;
}, Br = (n, e = !0) => {
  const a = He(n, e);
  if (!a)
    return null;
  let r = "";
  return a.areaCode && (r += `(${a.areaCode})`), a.exchangeNumber && (r += ` ${a.exchangeNumber}`), a.subscriberNumber && (r += `-${a.subscriberNumber}`), a.extension && (r += ` ${a.extension}`), r;
}, xr = (n, e = !0) => {
  const a = He(n, e);
  return !a || !a.areaCode || !a.exchangeNumber || !a.subscriberNumber ? null : `+1${a.areaCode}${a.exchangeNumber}${a.subscriberNumber}`;
}, Rr = (n, e = !1) => {
  const r = (e ? ("" + n).replace(/\D/g, "") : "" + n).match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  return r ? [r[1] ? "+1 " : "", "(", r[2], ") ", r[3], "-", r[4]].join("") : n;
}, Yr = (n, e = !0) => {
  const a = He(n, e);
  return !a || !a.areaCode || !a.exchangeNumber || !a.subscriberNumber ? null : `${a.areaCode}.${a.exchangeNumber}.${a.subscriberNumber}`;
}, Hr = (n, e = !0) => {
  const a = He(n, e);
  return !a || !a.areaCode || !a.exchangeNumber || !a.subscriberNumber ? null : `${a.areaCode}-${a.exchangeNumber}-${a.subscriberNumber}`;
}, Dn = (n) => {
  let e = ("" + (n != null ? n : "")).toString().replace(/\D/g, "");
  return e.length === 9 && (e = e.replace(/(\d{5})/, "$1-")), e;
}, Wr = (n) => {
  if (!n)
    return null;
  let e = ("" + (n != null ? n : "")).toString().replace(/\D/g, "");
  return e.length === 9 && (e = e.replace(/(\d{2})/, "$1-")), e;
}, zr = (n) => n ? n.startsWith("http") ? n : "http://" + n : "", Xn = (n, e, a, r) => {
  let t = "";
  return e ? (t += e, n ? (t += ", " + n, a && (t += " " + a)) : a && (t += ", " + a)) : n ? (t += n, a && (t += " " + a)) : a && (t += a), r && (t && (t += ", "), t += r), t;
}, Gr = (n, e) => {
  if (!n)
    return "";
  const a = e ? `_${e}` : "";
  return Xn(
    n[a + "first_name"],
    n[a + "last_name"],
    n[a + "middle_name"],
    n[a + "suffix_name"]
  );
}, jn = (n) => {
  if (!n)
    return n;
  let e = "";
  const a = n.toLowerCase().split(" ");
  for (let r = 0; r < a.length; r++)
    e += a[r].substring(0, 1).toUpperCase() + a[r].substring(1, a[r].length) + " ";
  return e.trim();
}, ea = (n, e = "ABCDEFGHJKLMNPQRTUVWXYZ2346789") => {
  let a = "";
  const r = e.length;
  for (let t = 0; t < n; t++)
    a += e.charAt(Math.floor(Math.random() * r));
  return a;
}, Kr = (n) => ea(n, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12346789");
function na(n) {
  return "aeiou".indexOf(n.toLowerCase()) !== -1;
}
function k(n, e, a = !1, r = 0, t = null) {
  if (!n)
    return "";
  let i = n, u = (n != null ? n : "").toLowerCase();
  const l = v(e != null ? e : 0, r, t);
  let o = "";
  return f(l) !== 1 && (u.endsWith("y") && !na(u.charAt(u.length - 2)) ? (i = i.substring(0, i.length - 1), o = "ies") : o = n && (u.endsWith("s") || u.endsWith("z") || u.endsWith("ch") || u.endsWith("sh") || u.endsWith("x")) ? "es" : "s"), `${a ? l : ""} ${i}${o}`.trim();
}
function aa(n, e, a = !1, r = 0, t = null) {
  return e ? k(n, e, a, r, t) : null;
}
function Vr(n, e, a = !1, r = 0, t = null) {
  var i;
  return (i = aa(n, e, a, r, t)) != null ? i : "";
}
const Zr = (n, e = 0, a = "round") => {
  let r = E(n);
  if (r === null)
    return null;
  const t = (u, l) => {
    let o = v(Ze(u, e, a), e);
    if (e) {
      for (; o.endsWith("0"); )
        o = o.substring(0, o.length - 1);
      for (; o.endsWith("."); )
        o = o.substring(0, o.length - 1);
    }
    return o + l;
  };
  if (r < 999)
    return t(r, "");
  if (r /= 1e3, r < 999)
    return t(r, "k");
  if (r /= 1e3, r < 999)
    return t(r, "M");
  if (r /= 1e3, r < 999)
    return t(r, "B");
  if (r /= 1e3, r < 999)
    return t(r, "T");
  let i = "";
  do
    i += "Q", r /= 1e3;
  while (r > 999);
  return t(r, i);
}, qr = (n, e = 15) => !n || n.length <= e ? n : `${n.substring(0, e)}...`, Jr = (n, e) => {
  var r;
  if (!n)
    return !1;
  const a = T("*", "([\\s\\S]*?)", T("\\", "\\/", e));
  return a ? !!((r = n.match(new RegExp(a))) != null && r.length) : !1;
}, Qr = (...n) => {
  let e = n.map((a, r) => r === 0 ? (a != null ? a : "").trim().replace(/[\/]*$/g, "") : (a != null ? a : "").trim().replace(/(^[\/]*|[\/]*$)/g, "")).filter((a) => a.length).join("/");
  return n[0] === "/" && !e.startsWith("/") ? "/" + e : e;
}, Xr = (n) => n ? !!n.toString().match(/\d/) : !1, jr = (n) => n ? !!n.toString().match(/[a-zA-Z]/) : !1;
var ra = /* @__PURE__ */ ((n) => (n.Same = "Same", n.Inserted = "Inserted", n.Deleted = "Deleted", n))(ra || {});
function et(n, e) {
  let a = [], r = (n != null ? n : "").split(/[\r\n]+/g), t = (e != null ? e : "").split(/[\r\n]+/g);
  for (; r.length || t.length; ) {
    if (!t.length) {
      a = [
        ...a,
        ...r.map((u) => ({ result: "Deleted", value: u }))
      ], r = [];
      continue;
    }
    if (!r.length) {
      a = [
        ...a,
        ...t.map((u) => ({ result: "Inserted", value: u }))
      ], t = [];
      continue;
    }
    if (r[0] === t[0]) {
      a = [
        ...a,
        {
          result: "Same",
          value: r[0]
        }
      ], r = r.slice(1), t = t.slice(1);
      continue;
    }
    let i = !1;
    for (let u = 0; u < t.length; u++) {
      const l = r.findIndex((o) => t[u] === o);
      if (l > 0) {
        a = [
          ...a,
          ...r.filter((o, s) => s < l).map((o) => ({
            result: "Deleted",
            value: o
          }))
        ], r = r.slice(l), i = !0;
        break;
      }
    }
    if (!i) {
      {
        const u = t.findIndex((l) => r[0] === l);
        u >= 0 && (a = [
          ...a,
          ...t.filter((l, o) => o < u).map((l) => ({
            result: "Inserted",
            value: l
          }))
        ], t = t.slice(u), i = !0);
      }
      if (!i)
        throw console.log("-------------- Could not compare"), console.log(a), console.log(r), console.log(t), console.log("--------------"), new Error("Could not finish comparing");
    }
  }
  return a;
}
function ta(n, e, a = "") {
  return e.map((r) => {
    var i, u, l;
    let t = (r.transform ? r.transform(n[r.property], n) : (i = n[r.property]) != null ? i : "").toString();
    return r.rightJustify ? t = Jn(t.substring(t.length - r.length), r.length, (u = r.padCharacter) != null ? u : " ") : t = Qn(t.substring(0, r.length), r.length, (l = r.padCharacter) != null ? l : " "), t;
  }).join(a);
}
function nt(n, e, a = "", r = "\r") {
  return n.map((t) => ta(t, e, a)).join(r);
}
const Be = "YYYY-MM-DD", ia = "HH:mm:ss", at = "HH:mm", ua = Be + " " + ia, Xe = "MMM D, YYYY", Tn = `dd, ${Xe}`, te = "h:mm a", oa = `${Xe}, ${te}`, la = `${Tn}, ${te}`, je = "MMMM D, YYYY", Mn = `dddd, ${je}`, sa = `${je}, ${te}`, ca = `${Mn}, ${te}`, ma = (n) => {
  var e;
  return n ? (e = Y("now", n)) != null ? e : (/* @__PURE__ */ new Date()).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
}, fa = () => Intl.DateTimeFormat().resolvedOptions().timeZone, Ie = (n, e) => {
  var g;
  if (!n)
    return ((g = A(e != null ? e : "now", { ignoreIANA: !0 })) != null ? g : /* @__PURE__ */ new Date()).getTimezoneOffset();
  const a = e ? R(e, void 0, !0) : null;
  let r = a ? new Date(a) : /* @__PURE__ */ new Date();
  function t(h) {
    const S = h.replace(":", " ").split(" ");
    return {
      day: parseInt(S[0]),
      hour: parseInt(S[1]),
      minute: parseInt(S[2])
    };
  }
  let i = r.toLocaleString(["nl-NL"], {
    timeZone: n,
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: !1
  });
  const u = t(i), l = u.day * 1440 + u.hour * 60 + u.minute;
  i = r.toLocaleString(["nl-NL"], { day: "numeric", hour: "numeric", minute: "numeric", hour12: !1 });
  const o = t(i);
  let s = o.day * 1440 + o.hour * 60 + o.minute;
  return u.day > o.day && (s += u.day * 1440), (s - l + r.getTimezoneOffset()) % 1440;
}, Cn = (n) => n.includes(":"), en = (n) => n.includes("-") || /\d{8}/.test(n), bn = (n) => n === "now" || n === "today" || n.includes("T") || n.substring(15).includes("Z") || n.includes("+") || n.substring(15).includes("-"), ga = (n) => !!(n != null && n.includes("/")) && /^[a-zA-Z_\/]*$/.test(n), rt = (n) => !!n && /([a-zA-Z_\/]+)/.test(n), ln = (n) => !n || typeof n != "string" || !en(n) ? !1 : !!R(n), ha = (n) => {
  let e = n.split(" ");
  if (e.length === 1)
    return n;
  let a = e[1].split(":");
  return a.length === 1 ? n : (a.length === 2 && (a.push("00"), e[1] = a.join(":")), e.join(" "));
}, da = (n) => {
  var r, t, i, u;
  const e = ha(n);
  let a = [
    "([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?",
    "([0-9]{4})(-([0-9]{2})(-([0-9]{2})( ([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?",
    "([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?"
  ].reduce((l, o) => {
    const s = (e.length === 16 ? e + ":00" : e).match(new RegExp(o));
    return (s == null ? void 0 : s.at(4)) === void 0 ? l : l ? s && s[10] && !l[10] ? s : l : s;
  }, null);
  if (a) {
    let l = new Date(f(a[1]), 0, 1);
    a[1] && l.setUTCFullYear(f(a[1])), a[3] && l.setUTCMonth(f(a[3]) - 1), a[5] && l.setUTCDate(f(a[5])), l.setUTCHours(f((r = a[7]) != null ? r : 0)), l.setUTCMinutes(f((t = a[8]) != null ? t : 0)), l.setUTCSeconds(f((i = a[10]) != null ? i : 0)), l.setUTCMilliseconds(f(((u = a[12]) != null ? u : 0).toString().padEnd(3, "0").substring(0, 3)));
    let o = 0;
    if (a[14])
      o = f(a[16]) + parseInt(a[17], 10), o *= a[15] === "-" ? 1 : -1;
    else if (e.length > 12) {
      const g = e.substring(e.length - 3);
      (g.startsWith("-") || g.endsWith("+")) && (o -= f(g));
    }
    const s = l.valueOf() + o * 36e5;
    let m = new Date(s);
    return m ? m.valueOf() : null;
  }
  return null;
}, R = (n, e, a) => {
  var r;
  if (!n && n !== 0 && n !== "0")
    return null;
  if (typeof n == "number")
    return n;
  if (typeof n == "object")
    return n.valueOf();
  if (n.toString().toLowerCase() === "now" || n.toString().toLowerCase() === "today")
    return (/* @__PURE__ */ new Date()).valueOf();
  try {
    let t = da(n);
    if ((t === null || isNaN(t)) && (t = Date.parse(n.toString()), !isNaN(t)))
      return t;
    if (isNaN(t))
      return null;
    if (!a && !bn(n)) {
      let i = e;
      if (!i) {
        const u = n.split(" "), l = u[u.length - 1];
        ga(l) && (i = l);
      }
      t += ((r = Ie(i, n)) != null ? r : 0) * 6e4;
    }
    return t;
  } catch (t) {
    return null;
  }
}, p = (n, e) => {
  let a = R(n, e == null ? void 0 : e.timezoneSource, e == null ? void 0 : e.ignoreIANA);
  return !a && a !== 0 || !e ? a : $(a, e);
}, Y = (n, e) => {
  const a = p(n, e);
  return a ? new Date(a).toISOString() : null;
}, A = (n, e) => {
  const a = p(n, e);
  return !a && a !== 0 ? null : new Date(a);
}, tt = (n, e) => {
  const a = Y(n, e);
  if (!a)
    return null;
  let r = a, t = r.indexOf("."), i = r.indexOf("Z");
  return t > 0 && i > t && (r = r.substring(0, t) + r.substring(i)), r = T("-", "", r), r = T(":", "", r), r;
}, ce = (n, e, a, r) => {
  var I, N, O;
  const t = typeof e == "string" && !bn(e), i = typeof e == "string" && !en(e) && Cn(e) ? `${b("now")} ${e}` : e;
  let u = A(R(i, t ? r : void 0));
  if (a)
    try {
      if (!u || isNaN(u.valueOf()))
        return null;
      const d = i && i !== "now" && i !== "today" ? u : void 0, c = (I = Ie(r, d)) != null ? I : 0, C = (N = Ie(a, d)) != null ? N : 0, U = t ? r ? ((O = Ie(void 0, d)) != null ? O : 0) - c - (C - c) : C - c - (C - c) : c - C;
      u = A(u, { minutes: U });
    } catch (d) {
      return console.log("Invalid Timezone", d), null;
    }
  if (!u || isNaN(u.valueOf()))
    return null;
  const l = (d, c) => {
    var C, U, W, ee, G, ge, he, de, Ae, Se, ye, ve, De, Te, Me, Ce, be, we, ke, Oe;
    if (a === "UTC")
      switch (d) {
        case "YYYY":
          return c.getUTCFullYear().toString().padStart(4, "0");
        case "YY":
          return c.getUTCFullYear().toString().substring(2).padStart(2, "0");
        case "Q":
          return Math.ceil((c.getUTCMonth() + 1) / 3).toString();
        case "Qo":
          return (C = Z(Math.ceil((c.getUTCMonth() + 1) / 3))) != null ? C : "";
        case "MMMM":
          return (U = Le[c.getUTCMonth()]) != null ? U : "";
        case "MMM":
          return ((W = Le[c.getUTCMonth()]) != null ? W : "").substring(0, 3);
        case "MM":
          return (c.getUTCMonth() + 1).toString().padStart(2, "0");
        case "Mo":
          return (ee = Z(c.getUTCMonth() + 1)) != null ? ee : "";
        case "M":
          return (c.getUTCMonth() + 1).toString();
        case "w":
          return f((G = Q(c)) == null ? void 0 : G.week).toString();
        case "DD":
          return c.getUTCDate().toString().padStart(2, "0");
        case "Do":
          return (ge = Z(c.getUTCDate())) != null ? ge : "";
        case "D":
          return c.getUTCDate().toString();
        case "d":
          return c.getUTCDay().toString();
        case "do":
          return (he = Z(c.getUTCDay())) != null ? he : "";
        case "dd":
          return ((de = ue[c.getUTCDay()]) != null ? de : "").substring(0, 2);
        case "ddd":
          return ((Ae = ue[c.getUTCDay()]) != null ? Ae : "").substring(0, 3);
        case "dddd":
          return (Se = ue[c.getUTCDay()]) != null ? Se : "";
        case "HH":
          return c.getUTCHours().toString().padStart(2, "0");
        case "H":
          return c.getUTCHours().toString();
        case "hh":
          return (c.getUTCHours() > 12 ? c.getUTCHours() - 12 : c.getUTCHours()).toString().padStart(2, "0");
        case "h": {
          const K = c.getUTCHours() > 12 ? c.getUTCHours() - 12 : c.getUTCHours();
          return (K === 0 ? 12 : K).toString();
        }
        case "mm":
          return c.getUTCMinutes().toString().padStart(2, "0");
        case "m":
          return c.getUTCMinutes().toString();
        case "ssss":
          return c.getUTCMilliseconds().toString().padStart(4, "0");
        case "sss":
          return c.getUTCMilliseconds().toString().padStart(3, "0");
        case "ss":
          return c.getUTCSeconds().toString().padStart(2, "0");
        case "s":
          return c.getUTCSeconds().toString();
        case "A":
          return c.getUTCHours() >= 12 ? "PM" : "AM";
        case "a":
          return c.getUTCHours() >= 12 ? "pm" : "am";
        default:
          return d;
      }
    else
      switch (d) {
        case "YYYY":
          return c.getFullYear().toString().padStart(4, "0");
        case "YY":
          return c.getFullYear().toString().substring(2).padStart(2, "0");
        case "Q":
          return Math.ceil((c.getMonth() + 1) / 3).toString();
        case "Qo":
          return (ye = Z(Math.ceil((c.getMonth() + 1) / 3))) != null ? ye : "";
        case "MMMM":
          return (ve = Le[c.getMonth()]) != null ? ve : "";
        case "MMM":
          return ((De = Le[c.getMonth()]) != null ? De : "").substring(0, 3);
        case "MM":
          return (c.getMonth() + 1).toString().padStart(2, "0");
        case "Mo":
          return (Te = Z(c.getMonth() + 1)) != null ? Te : "";
        case "M":
          return (c.getMonth() + 1).toString();
        case "w":
          return f((Me = Q(c)) == null ? void 0 : Me.week).toString();
        case "DD":
          return c.getDate().toString().padStart(2, "0");
        case "Do":
          return (Ce = Z(c.getDate())) != null ? Ce : "";
        case "D":
          return c.getDate().toString();
        case "d":
          return c.getDay().toString();
        case "do":
          return (be = Z(c.getDay())) != null ? be : "";
        case "dd":
          return ((we = ue[c.getDay()]) != null ? we : "").substring(0, 2);
        case "ddd":
          return ((ke = ue[c.getDay()]) != null ? ke : "").substring(0, 3);
        case "dddd":
          return (Oe = ue[c.getDay()]) != null ? Oe : "";
        case "HH":
          return c.getHours().toString().padStart(2, "0");
        case "H":
          return c.getHours().toString();
        case "hh":
          return (c.getHours() > 12 ? c.getHours() - 12 : c.getHours()).toString().padStart(2, "0");
        case "h": {
          const K = c.getHours() > 12 ? c.getHours() - 12 : c.getHours();
          return (K === 0 ? 12 : K).toString();
        }
        case "mm":
          return c.getMinutes().toString().padStart(2, "0");
        case "m":
          return c.getMinutes().toString();
        case "ssss":
          return c.getMilliseconds().toString().padStart(4, "0");
        case "sss":
          return c.getMilliseconds().toString().padStart(3, "0");
        case "ss":
          return c.getSeconds().toString().padStart(2, "0");
        case "s":
          return c.getSeconds().toString();
        case "A":
          return c.getHours() >= 12 ? "PM" : "AM";
        case "a":
          return c.getHours() >= 12 ? "pm" : "am";
        default:
          return d;
      }
  };
  let o;
  switch (n) {
    case "Local":
      o = "M/D/YYYY";
      break;
    case "LocalDoW":
      o = "dd, M/D/YYYY";
      break;
    case "LocalDateTime":
      o = "M/D/YYYY h:mm a";
      break;
    case "LocalDoWTime":
      o = "dd, M/D/YYYY h:mm a";
      break;
    case "Date":
      o = Be;
      break;
    case "DateTime":
      o = ua;
      break;
    case "DisplayDate":
      o = Xe;
      break;
    case "DisplayDateDoW":
      o = Tn;
      break;
    case "DisplayTime":
      o = te;
      break;
    case "DisplayDateTime":
      o = oa;
      break;
    case "DisplayDateDoWTime":
      o = la;
      break;
    case "DisplayDateLong":
      o = je;
      break;
    case "DisplayDateDoWLong":
      o = Mn;
      break;
    case "DisplayDateTimeLong":
      o = sa;
      break;
    case "DisplayDateDoWTimeLong":
      o = ca;
      break;
    case "ISO":
      if (u)
        return u.toISOString();
      o = "YYYY-MM-DDTHH:mm:ss.sssZ";
      break;
    case "ISOInput":
      o = "YYYY-MM-DDTHH:mm";
      break;
    default:
      o = n != null ? n : "YYYY-MM-DD h:mm:ss a";
      break;
  }
  const s = o.split("");
  let m = "", g = "", h = "", S = !1;
  const M = ["Mo", "Qo", "Do", "do"];
  for (const d of s)
    S ? d === "]" ? S = !1 : m += d : d === "[" ? (m += l(h, u), h = "", g = "", S = !0) : (d === g || g === "" || h.length > 0 && M.some(
      (c) => c.startsWith(h) && d === c.substring(h.length, h.length + 1)
    ) ? h += d : (m += l(h, u), h = d), g = d);
  return m += l(h, u), m;
}, me = (n, e, a, r) => ce(n, e, a, r), Aa = (n) => {
  var a;
  const e = (a = A(n)) != null ? a : /* @__PURE__ */ new Date();
  return `${e.getFullYear()}${(e.getMonth() + 1).toString().padStart(2, "0")}${e.getDate().toString().padStart(2, "0")}${e.getHours().toString().padStart(2, "0")}${e.getMinutes().toString().padStart(2, "0")}${e.getSeconds().toString().padStart(2, "0")}`;
}, it = (n) => {
  var a;
  const e = (a = A(n)) != null ? a : /* @__PURE__ */ new Date();
  return `${e.getFullYear()}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}_${e.getHours().toString().padStart(2, "0")}-${e.getMinutes().toString().padStart(2, "0")}-${e.getSeconds().toString().padStart(2, "0")}`;
}, ut = (n) => {
  var a;
  const e = (a = A(n)) != null ? a : /* @__PURE__ */ new Date();
  return `${e.getFullYear()}/${(e.getMonth() + 1).toString().padStart(2, "0")}/${e.getDate().toString().padStart(2, "0")} ${e.getHours().toString().padStart(2, "0")}:${e.getMinutes().toString().padStart(2, "0")}:${e.getSeconds().toString().padStart(2, "0")}`;
}, ot = (n) => {
  var a;
  const e = (a = A(n)) != null ? a : /* @__PURE__ */ new Date();
  return `${e.getFullYear()}/${(e.getMonth() + 1).toString().padStart(2, "0")}/${e.getDate().toString().padStart(2, "0")}`;
}, lt = (n) => {
  var a;
  const e = (a = A(n)) != null ? a : /* @__PURE__ */ new Date();
  return `${e.getHours().toString().padStart(2, "0")}:${e.getMinutes().toString().padStart(2, "0")}:${e.getSeconds().toString().padStart(2, "0")}`;
}, Le = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ue = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Fe = (n) => Math.floor(n / 365 / 24 / 60 / 60 / 1e3), oe = (n, e) => Math.floor((n - (e ? Fe(n) * 365 * 24 * 60 * 60 * 1e3 : 0)) / 30 / 24 / 60 / 60 / 1e3), sn = (n) => Math.floor(n / 7 / 24 / 60 / 60 / 1e3), P = (n, e) => Math.floor((n - (e ? oe(n) * 30 * 24 * 60 * 60 * 1e3 : 0)) / 24 / 60 / 60 / 1e3), z = (n, e) => Math.floor((n - (e ? P(n) * 24 * 60 * 60 * 1e3 : 0)) / 60 / 60 / 1e3), B = (n, e) => Math.floor((n - (e ? z(n) * 60 * 60 * 1e3 : 0)) / 60 / 1e3), pe = (n, e) => Math.floor((n - (e ? B(n) * 60 * 1e3 : 0)) / 1e3), Sa = (n) => n % 4 === 0 && n % 100 !== 0 || n % 400 === 0, J = (n, e) => {
  var t;
  let a = e, r = n;
  for (; a < 0; )
    a += 12, r -= 1;
  for (; a > 11; )
    a -= 12, r += 1;
  return (t = [31, Sa(r) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a]) != null ? t : null;
}, st = (n) => {
  const e = A(n);
  return e ? J(e.getUTCFullYear(), e.getUTCMonth()) : null;
}, $e = (n, e) => {
  var l, o, s, m, g, h, S, M, I;
  let a = R(n);
  if (!a)
    return null;
  const r = e < 0, t = (l = A(n)) != null ? l : /* @__PURE__ */ new Date(), i = t.getUTCDate(), u = i === J(t.getUTCFullYear(), t.getUTCMonth());
  for (let N = 0; N < Math.abs(e); N++) {
    const O = (o = A(a)) != null ? o : /* @__PURE__ */ new Date(), d = O.getUTCFullYear(), c = O.getUTCMonth();
    if (u)
      r ? a -= 24 * 60 * 60 * 1e3 * ((s = J(d, c)) != null ? s : 0) : a += 24 * 60 * 60 * 1e3 * ((m = J(d, c + 1)) != null ? m : 0);
    else {
      r ? a -= 24 * 60 * 60 * 1e3 * ((g = J(d, c - 1)) != null ? g : 0) : a += 24 * 60 * 60 * 1e3 * ((h = J(d, c)) != null ? h : 0);
      let C = (S = A(a)) != null ? S : /* @__PURE__ */ new Date();
      C.getUTCDate() < 15 && C.getUTCDate() < i && (a -= 24 * 60 * 60 * 1e3 * C.getUTCDate()), C = (M = A(a)) != null ? M : /* @__PURE__ */ new Date();
      const U = (I = J(C.getUTCFullYear(), C.getUTCMonth())) != null ? I : 0;
      C.getUTCDate() > 15 && C.getUTCDate() < i && C.getUTCDate() < U && (a += 24 * 60 * 60 * 1e3 * ((U > i ? i : U) - C.getUTCDate()));
    }
  }
  return a;
}, $ = (n, e) => {
  var r, t, i, u, l, o, s, m, g, h, S, M, I, N, O, d, c, C, U, W, ee, G, ge, he, de, Ae, Se, ye, ve, De, Te, Me, Ce, be, we, ke, Oe, K;
  let a = R(n);
  for (const _ of Object.keys(e)) {
    if (a === null)
      return null;
    switch (_) {
      case "year":
      case "years":
        switch (e[_]) {
          case "StartOf":
            {
              const y = (r = A(a)) != null ? r : /* @__PURE__ */ new Date();
              a = (t = $(a, {
                month: y.getUTCMonth() * -1,
                months: "StartOf"
              })) != null ? t : 0;
            }
            break;
          case "EndOf":
            {
              const y = (i = A(a)) != null ? i : /* @__PURE__ */ new Date();
              a = (u = $(a, {
                month: 11 - y.getUTCMonth(),
                months: "EndOf"
              })) != null ? u : 0;
            }
            break;
          default:
            a = $e(a, f(e[_]) * 12);
            break;
        }
        break;
      case "month":
      case "months":
        switch (e[_]) {
          case "StartOf":
            {
              const y = (l = A(a)) != null ? l : /* @__PURE__ */ new Date();
              a = (o = $(a, {
                day: (y.getUTCDate() - 1) * -1,
                days: "StartOf"
              })) != null ? o : 0;
            }
            break;
          case "EndOf":
            {
              const y = (s = A(a)) != null ? s : /* @__PURE__ */ new Date();
              a = (g = $(a, {
                day: ((m = J(y.getUTCFullYear(), y.getUTCMonth())) != null ? m : 0) - y.getUTCDate(),
                days: "EndOf"
              })) != null ? g : 0;
            }
            break;
          default:
            a = $e(a, f(e[_]));
            break;
        }
        break;
      case "quarter":
      case "quarters":
        switch (e[_]) {
          case "StartOf":
            {
              const y = (h = A(a)) != null ? h : /* @__PURE__ */ new Date();
              a = (S = $(a, {
                month: y.getUTCMonth() % 3 * -1,
                months: "StartOf"
              })) != null ? S : 0;
            }
            break;
          case "EndOf":
            {
              const y = (M = A(a)) != null ? M : /* @__PURE__ */ new Date();
              a = (I = $(a, {
                month: 2 - y.getUTCMonth() % 3,
                months: "EndOf"
              })) != null ? I : 0;
            }
            break;
          default:
            a = $e(a, f(e[_]) * 3);
            break;
        }
        break;
      default:
        if (a === null)
          return null;
        switch (_) {
          case "week":
          case "weeks":
            switch (e[_]) {
              case "StartOf":
                {
                  const y = (N = A(a)) != null ? N : /* @__PURE__ */ new Date();
                  a = (O = $(a, {
                    day: y.getUTCDay() * -1,
                    days: "StartOf"
                  })) != null ? O : 0;
                }
                break;
              case "StartOfMon":
                {
                  const y = (d = A(a)) != null ? d : /* @__PURE__ */ new Date();
                  switch (y.getUTCDay()) {
                    case 0:
                      a = (c = $(a, {
                        day: -6,
                        days: "StartOf"
                      })) != null ? c : 0;
                      break;
                    case 1:
                      a = (C = $(a, {
                        days: "StartOf"
                      })) != null ? C : 0;
                      break;
                    default:
                      a = (U = $(a, {
                        day: (y.getUTCDay() - 1) * -1,
                        days: "StartOf"
                      })) != null ? U : 0;
                      break;
                  }
                }
                break;
              case "EndOf":
                {
                  const y = (W = A(a)) != null ? W : /* @__PURE__ */ new Date();
                  a = (ee = $(a, {
                    day: 6 - y.getUTCDay(),
                    days: "EndOf"
                  })) != null ? ee : 0;
                }
                break;
              default:
                a += f(e[_]) * 7 * 24 * 60 * 60 * 1e3;
                break;
            }
            break;
          case "day":
          case "days":
            switch (e[_]) {
              case "StartOf":
                {
                  const y = (G = A(a)) != null ? G : /* @__PURE__ */ new Date();
                  a = (he = $(a, {
                    // Added to support moving to the beginning of a day, but in a selected timezone
                    hour: y.getUTCHours() * -1 + (e.timezoneSource ? ((ge = Ie(e.timezoneSource)) != null ? ge : 0) / 60 : 0),
                    hours: "StartOf"
                  })) != null ? he : 0;
                }
                break;
              case "EndOf":
                {
                  const y = (de = A(a)) != null ? de : /* @__PURE__ */ new Date();
                  a = (Ae = $(a, {
                    hour: 23 - y.getUTCHours(),
                    hours: "EndOf"
                  })) != null ? Ae : 0;
                }
                break;
              default:
                a += f(e[_]) * 24 * 60 * 60 * 1e3;
                break;
            }
            break;
          case "hour":
          case "hours":
            switch (e[_]) {
              case "StartOf":
                {
                  const y = (Se = A(a)) != null ? Se : /* @__PURE__ */ new Date();
                  a = (ye = $(a, {
                    minute: y.getUTCMinutes() * -1,
                    minutes: "StartOf"
                  })) != null ? ye : 0;
                }
                break;
              case "EndOf":
                {
                  const y = (ve = A(a)) != null ? ve : /* @__PURE__ */ new Date();
                  a = (De = $(a, {
                    minute: 59 - y.getUTCMinutes(),
                    minutes: "EndOf"
                  })) != null ? De : 0;
                }
                break;
              default:
                a += f(e[_]) * 60 * 60 * 1e3;
                break;
            }
            break;
          case "minute":
          case "minutes":
            switch (e[_]) {
              case "StartOf":
                {
                  const y = (Te = A(a)) != null ? Te : /* @__PURE__ */ new Date();
                  a = (Me = $(a, {
                    second: y.getUTCSeconds() * -1,
                    seconds: "StartOf"
                  })) != null ? Me : 0;
                }
                break;
              case "EndOf":
                {
                  const y = (Ce = A(a)) != null ? Ce : /* @__PURE__ */ new Date();
                  a = (be = $(a, {
                    second: 59 - y.getUTCSeconds(),
                    seconds: "EndOf"
                  })) != null ? be : 0;
                }
                break;
              default:
                a += f(e[_]) * 60 * 1e3;
                break;
            }
            break;
          case "second":
          case "seconds":
            switch (e[_]) {
              case "StartOf":
                {
                  const y = (we = A(a)) != null ? we : /* @__PURE__ */ new Date();
                  a = (ke = $(a, {
                    millisecond: y.getUTCMilliseconds() * -1
                  })) != null ? ke : 0;
                }
                break;
              case "EndOf":
                {
                  const y = (Oe = A(a)) != null ? Oe : /* @__PURE__ */ new Date();
                  a = (K = $(a, {
                    millisecond: 999 - y.getUTCMilliseconds()
                  })) != null ? K : 0;
                }
                break;
              default:
                a += f(e[_]) * 1e3;
                break;
            }
            break;
          case "millisecond":
          case "milliseconds":
            a += f(e[_]);
            break;
        }
        break;
    }
  }
  return a;
}, ct = (n, e) => {
  let a = b(n);
  const r = b(e);
  if (!a || !r || a === r)
    return 0;
  let t = 0;
  for (; L(a, "IsBefore", r, "day"); ) {
    const i = cn(a);
    i !== 0 && i !== 6 && t++, a = b(a, { days: 1 });
  }
  for (; L(a, "IsAfter", r, "day"); ) {
    a = b(a, { days: -1 });
    const i = cn(a);
    i !== 0 && i !== 6 && t--;
  }
  return t;
}, q = (n, e, a) => {
  var i, u;
  let r = R(n), t = R(e);
  if (!r || !t)
    return null;
  if (r === t)
    return 0;
  switch (a) {
    case "year":
    case "years":
    case "month":
    case "months":
      const l = r < t, o = (["year", "years"].includes(a) ? 12 : 1) * (l ? -1 : 1);
      let s = 0, m = (i = $e(t, o)) != null ? i : 0;
      for (; l ? r <= m : r >= m; )
        s -= l ? -1 : 1, m = (u = $e(m, o)) != null ? u : 0;
      return s;
    default: {
      const g = t - r;
      switch (a) {
        case "week":
        case "weeks":
          return g < 0 ? sn(g * -1) * -1 : sn(g);
        case "day":
        case "days":
          return g < 0 ? P(g * -1) * -1 : P(g);
        case "hour":
        case "hours":
          return g < 0 ? z(g * -1) * -1 : z(g);
        case "minute":
        case "minutes":
          return g < 0 ? B(g * -1) * -1 : B(g);
        case "second":
        case "seconds":
          return g < 0 ? pe(g * -1) * -1 : pe(g);
        case "millisecond":
        case "milliseconds":
          return g;
      }
    }
  }
  return null;
}, mt = (n, e, a) => f(ce(n, p(e, a))), ft = (n, e) => {
  console.error("Deprecated!  Use: DateWeekISONumber");
  const a = A(n != null ? n : "now", D({ timezoneSource: "UTC" }, e));
  if (!a)
    return null;
  const r = f(ce("YYYY", n)), t = new Date(r, 0, 1), i = Math.floor((a.valueOf() - t.valueOf()) / (24 * 60 * 60 * 1e3)) + 7, u = Math.ceil(i / 7);
  return { year: r, week: u };
}, ya = (n, e) => {
  const a = A(n != null ? n : "now", e);
  if (!a)
    return null;
  const r = new Date(a.valueOf()), t = (a.getDay() + 6) % 7;
  r.setDate(r.getDate() - t + 3);
  const i = r.valueOf();
  r.setMonth(0, 1), r.getDay() !== 4 && r.setMonth(0, 1 + (4 - r.getDay() + 7) % 7);
  const u = 1 + Math.ceil((i - r.valueOf()) / 6048e5), l = a;
  return l.setDate(l.getDate() + 3 - (l.getDay() + 6) % 7), { year: l.getFullYear(), week: u };
}, Q = (n, e) => {
  var a;
  return (a = ya(n, e)) != null ? a : { year: (/* @__PURE__ */ new Date()).getFullYear(), week: 1 };
}, wn = (n) => {
  var i, u;
  if (!(n != null && n.year))
    return null;
  const e = (n.week - 1) * 7;
  let a = b(new Date(n.year, 0, e), { week: "StartOfMon" }), r = (i = Q(a)) != null ? i : n, t = 0;
  for (; n.week !== r.week || n.year !== r.year; ) {
    if (t > 4)
      return null;
    t++, r.year < n.year || r.year === n.year && r.week < n.week ? a = b(a, { weeks: 1 }) : a = b(a, { weeks: -1 }), r = (u = Q(a)) != null ? u : n;
  }
  return a;
}, va = (n) => {
  const e = wn(n);
  return e ? {
    start: e,
    end: b(e, { days: 6 })
  } : null;
}, gt = (n) => {
  var e;
  return (e = va(n)) != null ? e : {
    start: b("now", { week: "StartOfMon" }),
    end: b("now", { week: "StartOfMon", days: 6 })
  };
}, ht = (n) => {
  const e = b(n != null ? n : "now", { month: "StartOf", days: 6, week: "StartOfMon" });
  let a = b(e, { weeks: 2 });
  for (; L(e, "IsSame", a, "month"); )
    a = b(a, { week: 1 });
  return a = b(a, { week: -1, days: 6 }), { start: e, end: a };
}, dt = (n, e) => {
  let a = wn(n);
  return a ? Q(b(a, typeof e == "number" ? { weeks: e } : e)) : null;
}, Da = (n, e) => {
  var i, u, l, o, s, m, g, h, S, M, I, N, O, d, c;
  let a = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  const r = (i = p(n)) != null ? i : 0;
  let t = (u = p(e)) != null ? u : 0;
  return a.year = (l = q(r, t, "year")) != null ? l : 0, a.year && (t = (o = p(t, { year: a.year * -1 })) != null ? o : 0), a.month = (s = q(r, t, "month")) != null ? s : 0, a.month && (t = (m = p(t, { month: a.month * -1 })) != null ? m : 0), a.day = (g = q(r, t, "day")) != null ? g : 0, a.day && (t = (h = p(t, { day: a.day * -1 })) != null ? h : 0), a.hour = (S = q(r, t, "hour")) != null ? S : 0, a.hour && (t = (M = p(t, { hour: a.hour * -1 })) != null ? M : 0), a.minute = (I = q(r, t, "minute")) != null ? I : 0, a.minute && (t = (N = p(t, { minute: a.minute * -1 })) != null ? N : 0), a.second = (O = q(r, t, "second")) != null ? O : 0, a.second && (t = (d = p(t, { second: a.second * -1 })) != null ? d : 0), a.millisecond = (c = q(r, t, "millisecond")) != null ? c : 0, a;
}, Ta = (n, e, a = !1, r = !1) => {
  const t = Da(n, e);
  let i = "";
  return t.year ? (i += ` ${v(t.year)}${r ? "Y" : " " + k("Year", t.year)}`, i += ` ${v(t.month)}${r ? "Mo" : " " + k("Month", t.month)}`, t.day && !a && (i += ` ${v(t.day)}${r ? "D" : " " + k("Day", t.day)}`)) : t.month ? (i += ` ${v(t.month)}${r ? "Mo" : " " + k("Month", t.month)}`, t.day && (i += ` ${v(t.day)}${r ? "D" : " " + k("Day", t.day)}`)) : t.day ? (i += ` ${v(t.day)}${r ? "D" : " " + k("Day", t.day)}`, t.hour && (i += ` ${v(t.hour)}${r ? "h" : " " + k("Hour", t.hour)}`), t.minute && !a && (i += ` ${v(t.minute)}${r ? "m" : " " + k("Minute", t.minute)}`)) : t.hour ? (i += ` ${v(t.hour)}${r ? "h" : " " + k("Hour", t.hour)}`, t.minute && (i += ` ${v(t.minute)}${r ? "m" : " " + k("Minute", t.minute)}`)) : ((t.minute || !i && a) && (i += ` ${v(t.minute)}${r ? "m" : " " + k("Minute", t.minute)}`), (!i || !a && t.second) && (i += ` ${v(t.second)}${r ? "s" : " " + k("Second", t.second)}`)), i.trim();
}, At = (n, e = !1, a = !1) => {
  const r = n * 1e3;
  let t = "";
  return Fe(r) ? (t += ` ${v(Fe(r), 0)}${a ? "Y" : " " + k("Year", Fe(r))}`, t += ` ${v(oe(r, !0), 0)}${a ? "Mo" : " " + k("Month", oe(r, !0))}`, P(r, !0) && !e && (t += ` ${v(P(r, !0), 0)}${a ? "D" : " " + k("Day", P(r, !0))}`)) : oe(r, !0) ? (t += ` ${v(oe(r, !0), 0)}${a ? "Mo" : " " + k("Month", oe(r, !0))}`, P(r, !0) && (t += ` ${v(P(r, !0), 0)}${a ? "D" : " " + k("Day", P(r, !0))}`)) : P(r, !0) ? (t += ` ${v(P(r, !0), 0)}${a ? "D" : " " + k("Day", P(r, !0))}`, z(r, !0) && (t += ` ${v(z(r, !0), 0)}${a ? "h" : " " + k("Hour", z(r, !0))}`), B(r, !0) && !e && (t += ` ${v(B(r, !0), 0)}${a ? "m" : " " + k("Minute", B(r, !0))}`)) : z(r, !0) ? (t += ` ${v(z(r, !0), 0)}${a ? "h" : " " + k("Hour", z(r, !0))}`, B(r, !0) && (t += ` ${v(B(r, !0), 0)}${a ? "m" : " " + k("Minute", B(r, !0))}`)) : ((B(r, !0) || !t && e) && (t += ` ${v(B(r, !0), 0)}${a ? "m" : " " + k("Minute", B(r, !0))}`), (!t || !e && pe(r, !0)) && (t += ` ${v(pe(r, !0), 0)}${a ? "s" : " " + k("Second", pe(r, !0))}`)), t.trim();
}, w = (n, e) => e === 0 ? ["IsSame", "IsSameOrBefore", "IsSameOrAfter"].includes(n) : e > 0 ? ["IsAfter", "IsSameOrAfter"].includes(n) : ["IsBefore", "IsSameOrBefore"].includes(n), L = (n, e, a, r) => {
  var u, l, o, s, m, g, h, S, M, I;
  const t = a && typeof a == "object" && !(a instanceof Date) ? p("now", a) : a, i = ((u = R(n, void 0, !0)) != null ? u : 0) - ((l = R(t, void 0, !0)) != null ? l : 0);
  if (i === 0)
    return w(e, i);
  if (r) {
    const N = (o = A(n)) != null ? o : /* @__PURE__ */ new Date(), O = (s = A(t)) != null ? s : /* @__PURE__ */ new Date(), d = N.getUTCFullYear() - O.getUTCFullYear();
    if (["year", "years"].includes(r))
      return w(e, d);
    const c = N.getUTCMonth() - O.getUTCMonth();
    if (["month", "months"].includes(r))
      return d !== 0 ? w(e, d) : w(e, c);
    if (["week", "weeks"].includes(r)) {
      if (Math.abs(i) > 7 * 24 * 60 * 60 * 1e3)
        return w(e, i);
      const G = ((g = (m = Q(n)) == null ? void 0 : m.week) != null ? g : 0) - ((S = (h = Q(t)) == null ? void 0 : h.week) != null ? S : 0);
      return G === 0 && ((I = (M = Q(n)) == null ? void 0 : M.week) != null ? I : 0) === 1 && Math.abs(d) > 1 && d !== 0 ? w(e, d) : w(e, G);
    }
    const C = N.getUTCDate() - O.getUTCDate();
    if (["day", "days"].includes(r))
      return d !== 0 ? w(e, d) : c !== 0 ? w(e, c) : w(e, C);
    const U = N.getUTCHours() - O.getUTCHours();
    if (["hour", "hours"].includes(r))
      return d !== 0 ? w(e, d) : c !== 0 ? w(e, c) : C !== 0 ? w(e, C) : w(e, U);
    const W = N.getUTCMinutes() - O.getUTCMinutes();
    if (["minute", "minutes"].includes(r))
      return d !== 0 ? w(e, d) : c !== 0 ? w(e, c) : C !== 0 ? w(e, C) : U !== 0 ? w(e, U) : w(e, W);
    const ee = N.getUTCSeconds() - O.getUTCSeconds();
    if (["second", "second"].includes(r))
      return d !== 0 ? w(e, d) : c !== 0 ? w(e, c) : C !== 0 ? w(e, C) : U !== 0 ? w(e, U) : W !== 0 ? w(e, W) : w(e, ee);
  }
  return w(e, i);
};
function St(...n) {
  var e;
  return (e = n == null ? void 0 : n.reduce((a, r) => {
    const t = ie(r);
    return t && (!a || L(t, "IsBefore", a, "day")) ? t : a;
  }, null)) != null ? e : null;
}
function yt(...n) {
  var e;
  return (e = n == null ? void 0 : n.reduce((a, r) => {
    const t = ie(r);
    return t && (!a || L(t, "IsAfter", a, "day")) ? t : a;
  }, null)) != null ? e : null;
}
const vt = (n, e, a) => L(n, "IsSameOrAfter", e, "day") && L(n, "IsSameOrBefore", a, "day"), Ma = (n, e, a) => L(n, "IsBefore", e, a) ? -1 : L(n, "IsAfter", e, a) ? 1 : null, Ca = (n, e, a) => {
  var r;
  return (r = Ma(n, e, a)) != null ? r : 0;
};
var ba = /* @__PURE__ */ ((n) => (n[n.Q1 = 1] = "Q1", n[n.Q2 = 2] = "Q2", n[n.Q3 = 3] = "Q3", n[n.Q4 = 4] = "Q4", n))(ba || {});
const Dt = (n, e) => {
  var r, t;
  const a = R(`${n}-${(e * 3 - 1).toString().padStart(2, "0")}-01`, "UTC");
  return a ? {
    start: ((r = Y(a, { quarter: "StartOf" })) != null ? r : "").substring(0, 10),
    end: ((t = Y(a, { quarter: "EndOf" })) != null ? t : "").substring(0, 10)
  } : null;
}, Tt = () => ({
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  quarter: Math.floor((/* @__PURE__ */ new Date()).getUTCMonth() / 3) + 1
}), Mt = (n) => {
  const e = A(n);
  return e ? {
    year: e.getUTCFullYear(),
    quarter: Math.floor(e.getUTCMonth() / 3) + 1
  } : null;
}, Ct = (n, e) => {
  var r, t;
  const a = R(`${n}-${e.toString().padStart(2, "0")}-01`, "UTC");
  return a ? {
    start: ((r = Y(a, { month: "StartOf" })) != null ? r : "").substring(0, 10),
    end: ((t = Y(a, { month: "EndOf" })) != null ? t : "").substring(0, 10)
  } : null;
}, bt = () => ({
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  monthOneBased: Math.floor((/* @__PURE__ */ new Date()).getUTCMonth()) + 1
}), wt = (n) => {
  const e = A(n);
  return e ? {
    year: e.getUTCFullYear(),
    monthOneBased: Math.floor(e.getUTCMonth()) + 1
  } : null;
}, kt = [0, 1, 2, 3, 4, 5, 6], cn = (n) => {
  const e = ie(n);
  if (!e)
    return null;
  const a = A(e);
  return a ? a.getUTCDay() : null;
}, ie = (n, e) => {
  var a, r, t;
  if (!n)
    return null;
  try {
    const i = !n || typeof n == "object" || typeof n == "number" || ["now", "today"].includes(n) ? (r = me("Date", n, (a = e == null ? void 0 : e.timezoneDisplay) != null ? a : fa())) != null ? r : "" : (n != null ? n : "").substring(0, 10);
    if (!n || !i)
      return null;
    if (e != null && e.fromFormat) {
      if (i.length && i.length === e.fromFormat.length) {
        const l = e.fromFormat.indexOf("Y"), o = e.fromFormat.lastIndexOf("Y"), s = e.fromFormat.indexOf("M"), m = e.fromFormat.lastIndexOf("M"), g = e.fromFormat.indexOf("D"), h = e.fromFormat.lastIndexOf("D"), S = i.slice(l, o + 1), M = i.slice(s, m + 1), I = i.slice(g, h + 1);
        if (f(S) && f(M) && f(S))
          return ie(
            `${S.padStart(4, "20")}-${M.padStart(2, "0")}-${I.padStart(2, "0")}`,
            qe(e, "fromFormat")
          );
      }
      return null;
    }
    let u = new Date(i);
    return u instanceof Date && isFinite(u) ? (e && (u = (t = A(u, e)) != null ? t : u, Object.values(e).includes("EndOf") && u.setUTCHours(10)), me(e != null && e.formatLocale ? "Local" : "Date", u, "UTC")) : null;
  } catch (i) {
    return null;
  }
}, b = (n, e) => {
  var a, r, t;
  return (t = (r = ie(n, e)) != null ? r : me(e != null && e.formatLocale ? "Local" : "Date", /* @__PURE__ */ new Date(), (a = e == null ? void 0 : e.timezoneDisplay) != null ? a : "UTC")) != null ? t : (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}, X = (n, e) => {
  var a, r, t;
  if ((!n || typeof n == "string" && !Cn(n)) && n !== "now" && n !== "today")
    return null;
  try {
    let i = ce(
      e != null && e.formatLocale ? te : "HH:mm:ss",
      p(n, e),
      (a = e == null ? void 0 : e.timezoneSource) != null ? a : void 0
    );
    if (i)
      return i;
    let u = (n != null ? n : "").toString().toLowerCase().trim(), l = 0;
    u.endsWith("am") && (u = u.substring(0, u.length - 2).trim()), u.endsWith("a") && (u = u.substring(0, u.length - 1).trim()), u.endsWith("pm") && (u = u.substring(0, u.length - 2).trim(), l += 12), u.endsWith("p") && (u = u.substring(0, u.length - 1).trim(), l += 12), u.substring(1, 2) === ":" && (u = `0${u}`), u = b("now") + "T" + u;
    let o = p(u, e);
    if (o) {
      let s = ce(
        e != null && e.formatLocale ? te : "HH:mm:ss",
        o + l * 60 * 60 * 1e3,
        (r = e == null ? void 0 : e.timezoneSource) != null ? r : "UTC",
        (t = e == null ? void 0 : e.timezoneSource) != null ? t : "UTC"
      );
      if (s)
        return s;
    }
  } catch (i) {
  }
  return null;
}, Ot = (n, e = "00:00", a = "24:00") => {
  let r = X(e);
  if (!r)
    return [];
  const t = [r], i = X(a, { minutes: n * -1 });
  if (!i || n <= 0)
    return t;
  for (; r < i && (r = X(r, { minutes: n }), !!r); )
    t.push(r);
  return t;
}, wa = (n, e = 1) => {
  if (typeof n != "string" || en(n)) {
    const a = A(n);
    return a ? (a.setMilliseconds(0), a.setSeconds(0), a.setMinutes(a.getMinutes() - a.getMinutes() % e), Y(a)) : null;
  } else {
    const a = X(n);
    return a ? X(wa(A(`${b("now")} ${a}`), e)) : null;
  }
}, kn = () => (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/New_York" }), Nt = () => {
  var n;
  return (n = me("Date", "now", "America/New_York")) != null ? n : b("now");
}, Et = (n, e, a = "now") => {
  var t;
  if (!n)
    return "";
  const r = (t = q(b(a, { week: e }), b(n, { week: e }), "weeks")) != null ? t : 0;
  switch (r) {
    case 0:
      return "This Week";
    case -1:
      return "Last Week";
    case 1:
      return "Next Week";
    default:
      return `${v(Math.abs(r))} Weeks ${r < 0 ? "Ago" : "from Now"}`;
  }
}, ka = (n = "now") => E(ce("d", b(n))), It = (n = "now") => {
  const e = ka(n);
  return e === null ? !1 : e === 0 || e === 6;
}, pt = (n, e, a = { day: 1 }, r = 1e3) => {
  if (!Object.values(a).some((l) => f(l) > 0))
    return [];
  const t = L(n, "IsAfter", e, "day");
  let i = b(t ? e : n), u = [];
  for (; L(i, "IsSameOrBefore", t ? n : e, "day") && (u.push(i), i = b(i, a), !(u.length >= r)); )
    ;
  return u.sort((l, o) => Ca(t ? o : l, t ? l : o));
}, nn = [
  {
    group: "US (Common)",
    zones: [
      { value: "America/Puerto_Rico", name: "Puerto Rico (Atlantic)" },
      { value: "America/New_York", name: "New York (Eastern)" },
      { value: "America/Chicago", name: "Chicago (Central)" },
      { value: "America/Denver", name: "Denver (Mountain)" },
      { value: "America/Phoenix", name: "Phoenix (MST)" },
      { value: "America/Los_Angeles", name: "Los Angeles (Pacific)" },
      { value: "America/Anchorage", name: "Anchorage (Alaska)" },
      { value: "Pacific/Honolulu", name: "Honolulu (Hawaii)" }
    ]
  },
  {
    group: "America",
    zones: [
      { value: "America/Adak", name: "Adak" },
      { value: "America/Anchorage", name: "Anchorage" },
      { value: "America/Anguilla", name: "Anguilla" },
      { value: "America/Antigua", name: "Antigua" },
      { value: "America/Araguaina", name: "Araguaina" },
      { value: "America/Argentina/Buenos_Aires", name: "Argentina - Buenos Aires" },
      { value: "America/Argentina/Catamarca", name: "Argentina - Catamarca" },
      { value: "America/Argentina/ComodRivadavia", name: "Argentina - ComodRivadavia" },
      { value: "America/Argentina/Cordoba", name: "Argentina - Cordoba" },
      { value: "America/Argentina/Jujuy", name: "Argentina - Jujuy" },
      { value: "America/Argentina/La_Rioja", name: "Argentina - La Rioja" },
      { value: "America/Argentina/Mendoza", name: "Argentina - Mendoza" },
      { value: "America/Argentina/Rio_Gallegos", name: "Argentina - Rio Gallegos" },
      { value: "America/Argentina/Salta", name: "Argentina - Salta" },
      { value: "America/Argentina/San_Juan", name: "Argentina - San Juan" },
      { value: "America/Argentina/San_Luis", name: "Argentina - San Luis" },
      { value: "America/Argentina/Tucuman", name: "Argentina - Tucuman" },
      { value: "America/Argentina/Ushuaia", name: "Argentina - Ushuaia" },
      { value: "America/Aruba", name: "Aruba" },
      { value: "America/Asuncion", name: "Asuncion" },
      { value: "America/Atikokan", name: "Atikokan" },
      { value: "America/Atka", name: "Atka" },
      { value: "America/Bahia", name: "Bahia" },
      { value: "America/Barbados", name: "Barbados" },
      { value: "America/Belem", name: "Belem" },
      { value: "America/Belize", name: "Belize" },
      { value: "America/Blanc-Sablon", name: "Blanc-Sablon" },
      { value: "America/Boa_Vista", name: "Boa Vista" },
      { value: "America/Bogota", name: "Bogota" },
      { value: "America/Boise", name: "Boise" },
      { value: "America/Buenos_Aires", name: "Buenos Aires" },
      { value: "America/Cambridge_Bay", name: "Cambridge Bay" },
      { value: "America/Campo_Grande", name: "Campo Grande" },
      { value: "America/Cancun", name: "Cancun" },
      { value: "America/Caracas", name: "Caracas" },
      { value: "America/Catamarca", name: "Catamarca" },
      { value: "America/Cayenne", name: "Cayenne" },
      { value: "America/Cayman", name: "Cayman" },
      { value: "America/Chicago", name: "Chicago" },
      { value: "America/Chihuahua", name: "Chihuahua" },
      { value: "America/Coral_Harbour", name: "Coral Harbour" },
      { value: "America/Cordoba", name: "Cordoba" },
      { value: "America/Costa_Rica", name: "Costa Rica" },
      { value: "America/Cuiaba", name: "Cuiaba" },
      { value: "America/Curacao", name: "Curacao" },
      { value: "America/Danmarkshavn", name: "Danmarkshavn" },
      { value: "America/Dawson", name: "Dawson" },
      { value: "America/Dawson_Creek", name: "Dawson Creek" },
      { value: "America/Denver", name: "Denver" },
      { value: "America/Detroit", name: "Detroit" },
      { value: "America/Dominica", name: "Dominica" },
      { value: "America/Edmonton", name: "Edmonton" },
      { value: "America/Eirunepe", name: "Eirunepe" },
      { value: "America/El_Salvador", name: "El Salvador" },
      { value: "America/Ensenada", name: "Ensenada" },
      { value: "America/Fortaleza", name: "Fortaleza" },
      { value: "America/Fort_Wayne", name: "Fort Wayne" },
      { value: "America/Glace_Bay", name: "Glace Bay" },
      { value: "America/Godthab", name: "Godthab" },
      { value: "America/Goose_Bay", name: "Goose Bay" },
      { value: "America/Grand_Turk", name: "Grand Turk" },
      { value: "America/Grenada", name: "Grenada" },
      { value: "America/Guadeloupe", name: "Guadeloupe" },
      { value: "America/Guatemala", name: "Guatemala" },
      { value: "America/Guayaquil", name: "Guayaquil" },
      { value: "America/Guyana", name: "Guyana" },
      { value: "America/Halifax", name: "Halifax" },
      { value: "America/Havana", name: "Havana" },
      { value: "America/Hermosillo", name: "Hermosillo" },
      { value: "America/Indiana/Indianapolis", name: "Indiana - Indianapolis" },
      { value: "America/Indiana/Knox", name: "Indiana - Knox" },
      { value: "America/Indiana/Marengo", name: "Indiana - Marengo" },
      { value: "America/Indiana/Petersburg", name: "Indiana - Petersburg" },
      { value: "America/Indiana/Tell_City", name: "Indiana - Tell City" },
      { value: "America/Indiana/Vevay", name: "Indiana - Vevay" },
      { value: "America/Indiana/Vincennes", name: "Indiana - Vincennes" },
      { value: "America/Indiana/Winamac", name: "Indiana - Winamac" },
      { value: "America/Indianapolis", name: "Indianapolis" },
      { value: "America/Inuvik", name: "Inuvik" },
      { value: "America/Iqaluit", name: "Iqaluit" },
      { value: "America/Jamaica", name: "Jamaica" },
      { value: "America/Jujuy", name: "Jujuy" },
      { value: "America/Juneau", name: "Juneau" },
      { value: "America/Kentucky/Louisville", name: "Kentucky - Louisville" },
      { value: "America/Kentucky/Monticello", name: "Kentucky - Monticello" },
      { value: "America/Knox_IN", name: "Knox IN" },
      { value: "America/La_Paz", name: "La Paz" },
      { value: "America/Lima", name: "Lima" },
      { value: "America/Los_Angeles", name: "Los Angeles" },
      { value: "America/Louisville", name: "Louisville" },
      { value: "America/Maceio", name: "Maceio" },
      { value: "America/Managua", name: "Managua" },
      { value: "America/Manaus", name: "Manaus" },
      { value: "America/Marigot", name: "Marigot" },
      { value: "America/Martinique", name: "Martinique" },
      { value: "America/Matamoros", name: "Matamoros" },
      { value: "America/Mazatlan", name: "Mazatlan" },
      { value: "America/Mendoza", name: "Mendoza" },
      { value: "America/Menominee", name: "Menominee" },
      { value: "America/Merida", name: "Merida" },
      { value: "America/Mexico_City", name: "Mexico City" },
      { value: "America/Miquelon", name: "Miquelon" },
      { value: "America/Moncton", name: "Moncton" },
      { value: "America/Monterrey", name: "Monterrey" },
      { value: "America/Montevideo", name: "Montevideo" },
      { value: "America/Montreal", name: "Montreal" },
      { value: "America/Montserrat", name: "Montserrat" },
      { value: "America/Nassau", name: "Nassau" },
      { value: "America/New_York", name: "New York" },
      { value: "America/Nipigon", name: "Nipigon" },
      { value: "America/Nome", name: "Nome" },
      { value: "America/Noronha", name: "Noronha" },
      { value: "America/North_Dakota/Center", name: "North Dakota - Center" },
      { value: "America/North_Dakota/New_Salem", name: "North Dakota - New Salem" },
      { value: "America/Ojinaga", name: "Ojinaga" },
      { value: "America/Panama", name: "Panama" },
      { value: "America/Pangnirtung", name: "Pangnirtung" },
      { value: "America/Paramaribo", name: "Paramaribo" },
      { value: "America/Phoenix", name: "Phoenix" },
      { value: "America/Port-au-Prince", name: "Port-au-Prince" },
      { value: "America/Porto_Acre", name: "Porto Acre" },
      { value: "America/Port_of_Spain", name: "Port of Spain" },
      { value: "America/Porto_Velho", name: "Porto Velho" },
      { value: "America/Puerto_Rico", name: "Puerto Rico" },
      { value: "America/Rainy_River", name: "Rainy River" },
      { value: "America/Rankin_Inlet", name: "Rankin Inlet" },
      { value: "America/Recife", name: "Recife" },
      { value: "America/Regina", name: "Regina" },
      { value: "America/Resolute", name: "Resolute" },
      { value: "America/Rio_Branco", name: "Rio Branco" },
      { value: "America/Rosario", name: "Rosario" },
      { value: "America/Santa_Isabel", name: "Santa Isabel" },
      { value: "America/Santarem", name: "Santarem" },
      { value: "America/Santiago", name: "Santiago" },
      { value: "America/Santo_Domingo", name: "Santo Domingo" },
      { value: "America/Sao_Paulo", name: "Sao Paulo" },
      { value: "America/Scoresbysund", name: "Scoresbysund" },
      { value: "America/Shiprock", name: "Shiprock" },
      { value: "America/St_Barthelemy", name: "St Barthelemy" },
      { value: "America/St_Johns", name: "St Johns" },
      { value: "America/St_Kitts", name: "St Kitts" },
      { value: "America/St_Lucia", name: "St Lucia" },
      { value: "America/St_Thomas", name: "St Thomas" },
      { value: "America/St_Vincent", name: "St Vincent" },
      { value: "America/Swift_Current", name: "Swift Current" },
      { value: "America/Tegucigalpa", name: "Tegucigalpa" },
      { value: "America/Thule", name: "Thule" },
      { value: "America/Thunder_Bay", name: "Thunder Bay" },
      { value: "America/Tijuana", name: "Tijuana" },
      { value: "America/Toronto", name: "Toronto" },
      { value: "America/Tortola", name: "Tortola" },
      { value: "America/Vancouver", name: "Vancouver" },
      { value: "America/Virgin", name: "Virgin" },
      { value: "America/Whitehorse", name: "Whitehorse" },
      { value: "America/Winnipeg", name: "Winnipeg" },
      { value: "America/Yakutat", name: "Yakutat" },
      { value: "America/Yellowknife", name: "Yellowknife" }
    ]
  },
  {
    group: "Europe",
    zones: [
      { value: "Europe/Amsterdam", name: "Amsterdam" },
      { value: "Europe/Andorra", name: "Andorra" },
      { value: "Europe/Athens", name: "Athens" },
      { value: "Europe/Belfast", name: "Belfast" },
      { value: "Europe/Belgrade", name: "Belgrade" },
      { value: "Europe/Berlin", name: "Berlin" },
      { value: "Europe/Bratislava", name: "Bratislava" },
      { value: "Europe/Brussels", name: "Brussels" },
      { value: "Europe/Bucharest", name: "Bucharest" },
      { value: "Europe/Budapest", name: "Budapest" },
      { value: "Europe/Chisinau", name: "Chisinau" },
      { value: "Europe/Copenhagen", name: "Copenhagen" },
      { value: "Europe/Dublin", name: "Dublin" },
      { value: "Europe/Gibraltar", name: "Gibraltar" },
      { value: "Europe/Guernsey", name: "Guernsey" },
      { value: "Europe/Helsinki", name: "Helsinki" },
      { value: "Europe/Isle_of_Man", name: "Isle of Man" },
      { value: "Europe/Istanbul", name: "Istanbul" },
      { value: "Europe/Jersey", name: "Jersey" },
      { value: "Europe/Kaliningrad", name: "Kaliningrad" },
      { value: "Europe/Kiev", name: "Kiev" },
      { value: "Europe/Lisbon", name: "Lisbon" },
      { value: "Europe/Ljubljana", name: "Ljubljana" },
      { value: "Europe/London", name: "London" },
      { value: "Europe/Luxembourg", name: "Luxembourg" },
      { value: "Europe/Madrid", name: "Madrid" },
      { value: "Europe/Malta", name: "Malta" },
      { value: "Europe/Mariehamn", name: "Mariehamn" },
      { value: "Europe/Minsk", name: "Minsk" },
      { value: "Europe/Monaco", name: "Monaco" },
      { value: "Europe/Moscow", name: "Moscow" },
      { value: "Europe/Nicosia", name: "Nicosia" },
      { value: "Europe/Oslo", name: "Oslo" },
      { value: "Europe/Paris", name: "Paris" },
      { value: "Europe/Podgorica", name: "Podgorica" },
      { value: "Europe/Prague", name: "Prague" },
      { value: "Europe/Riga", name: "Riga" },
      { value: "Europe/Rome", name: "Rome" },
      { value: "Europe/Samara", name: "Samara" },
      { value: "Europe/San_Marino", name: "San Marino" },
      { value: "Europe/Sarajevo", name: "Sarajevo" },
      { value: "Europe/Simferopol", name: "Simferopol" },
      { value: "Europe/Skopje", name: "Skopje" },
      { value: "Europe/Sofia", name: "Sofia" },
      { value: "Europe/Stockholm", name: "Stockholm" },
      { value: "Europe/Tallinn", name: "Tallinn" },
      { value: "Europe/Tirane", name: "Tirane" },
      { value: "Europe/Tiraspol", name: "Tiraspol" },
      { value: "Europe/Uzhgorod", name: "Uzhgorod" },
      { value: "Europe/Vaduz", name: "Vaduz" },
      { value: "Europe/Vatican", name: "Vatican" },
      { value: "Europe/Vienna", name: "Vienna" },
      { value: "Europe/Vilnius", name: "Vilnius" },
      { value: "Europe/Volgograd", name: "Volgograd" },
      { value: "Europe/Warsaw", name: "Warsaw" },
      { value: "Europe/Zagreb", name: "Zagreb" },
      { value: "Europe/Zaporozhye", name: "Zaporozhye" },
      { value: "Europe/Zurich", name: "Zurich" }
    ]
  },
  {
    group: "Asia",
    zones: [
      { value: "Asia/Aden", name: "Aden" },
      { value: "Asia/Almaty", name: "Almaty" },
      { value: "Asia/Amman", name: "Amman" },
      { value: "Asia/Anadyr", name: "Anadyr" },
      { value: "Asia/Aqtau", name: "Aqtau" },
      { value: "Asia/Aqtobe", name: "Aqtobe" },
      { value: "Asia/Ashgabat", name: "Ashgabat" },
      { value: "Asia/Ashkhabad", name: "Ashkhabad" },
      { value: "Asia/Baghdad", name: "Baghdad" },
      { value: "Asia/Bahrain", name: "Bahrain" },
      { value: "Asia/Baku", name: "Baku" },
      { value: "Asia/Bangkok", name: "Bangkok" },
      { value: "Asia/Beirut", name: "Beirut" },
      { value: "Asia/Bishkek", name: "Bishkek" },
      { value: "Asia/Brunei", name: "Brunei" },
      { value: "Asia/Calcutta", name: "Calcutta" },
      { value: "Asia/Choibalsan", name: "Choibalsan" },
      { value: "Asia/Chongqing", name: "Chongqing" },
      { value: "Asia/Chungking", name: "Chungking" },
      { value: "Asia/Colombo", name: "Colombo" },
      { value: "Asia/Dacca", name: "Dacca" },
      { value: "Asia/Damascus", name: "Damascus" },
      { value: "Asia/Dhaka", name: "Dhaka" },
      { value: "Asia/Dili", name: "Dili" },
      { value: "Asia/Dubai", name: "Dubai" },
      { value: "Asia/Dushanbe", name: "Dushanbe" },
      { value: "Asia/Gaza", name: "Gaza" },
      { value: "Asia/Harbin", name: "Harbin" },
      { value: "Asia/Ho_Chi_Minh", name: "Ho Chi Minh" },
      { value: "Asia/Hong_Kong", name: "Hong Kong" },
      { value: "Asia/Hovd", name: "Hovd" },
      { value: "Asia/Irkutsk", name: "Irkutsk" },
      { value: "Asia/Istanbul", name: "Istanbul" },
      { value: "Asia/Jakarta", name: "Jakarta" },
      { value: "Asia/Jayapura", name: "Jayapura" },
      { value: "Asia/Jerusalem", name: "Jerusalem" },
      { value: "Asia/Kabul", name: "Kabul" },
      { value: "Asia/Kamchatka", name: "Kamchatka" },
      { value: "Asia/Karachi", name: "Karachi" },
      { value: "Asia/Kashgar", name: "Kashgar" },
      { value: "Asia/Kathmandu", name: "Kathmandu" },
      { value: "Asia/Katmandu", name: "Katmandu" },
      { value: "Asia/Kolkata", name: "Kolkata" },
      { value: "Asia/Krasnoyarsk", name: "Krasnoyarsk" },
      { value: "Asia/Kuala_Lumpur", name: "Kuala Lumpur" },
      { value: "Asia/Kuching", name: "Kuching" },
      { value: "Asia/Kuwait", name: "Kuwait" },
      { value: "Asia/Macao", name: "Macao" },
      { value: "Asia/Macau", name: "Macau" },
      { value: "Asia/Magadan", name: "Magadan" },
      { value: "Asia/Makassar", name: "Makassar" },
      { value: "Asia/Manila", name: "Manila" },
      { value: "Asia/Muscat", name: "Muscat" },
      { value: "Asia/Nicosia", name: "Nicosia" },
      { value: "Asia/Novokuznetsk", name: "Novokuznetsk" },
      { value: "Asia/Novosibirsk", name: "Novosibirsk" },
      { value: "Asia/Omsk", name: "Omsk" },
      { value: "Asia/Oral", name: "Oral" },
      { value: "Asia/Phnom_Penh", name: "Phnom Penh" },
      { value: "Asia/Pontianak", name: "Pontianak" },
      { value: "Asia/Pyongyang", name: "Pyongyang" },
      { value: "Asia/Qatar", name: "Qatar" },
      { value: "Asia/Qyzylorda", name: "Qyzylorda" },
      { value: "Asia/Rangoon", name: "Rangoon" },
      { value: "Asia/Riyadh", name: "Riyadh" },
      { value: "Asia/Saigon", name: "Saigon" },
      { value: "Asia/Sakhalin", name: "Sakhalin" },
      { value: "Asia/Samarkand", name: "Samarkand" },
      { value: "Asia/Seoul", name: "Seoul" },
      { value: "Asia/Shanghai", name: "Shanghai" },
      { value: "Asia/Singapore", name: "Singapore" },
      { value: "Asia/Taipei", name: "Taipei" },
      { value: "Asia/Tashkent", name: "Tashkent" },
      { value: "Asia/Tbilisi", name: "Tbilisi" },
      { value: "Asia/Tehran", name: "Tehran" },
      { value: "Asia/Tel_Aviv", name: "Tel Aviv" },
      { value: "Asia/Thimbu", name: "Thimbu" },
      { value: "Asia/Thimphu", name: "Thimphu" },
      { value: "Asia/Tokyo", name: "Tokyo" },
      { value: "Asia/Ujung_Pandang", name: "Ujung Pandang" },
      { value: "Asia/Ulaanbaatar", name: "Ulaanbaatar" },
      { value: "Asia/Ulan_Bator", name: "Ulan Bator" },
      { value: "Asia/Urumqi", name: "Urumqi" },
      { value: "Asia/Vientiane", name: "Vientiane" },
      { value: "Asia/Vladivostok", name: "Vladivostok" },
      { value: "Asia/Yakutsk", name: "Yakutsk" },
      { value: "Asia/Yekaterinburg", name: "Yekaterinburg" },
      { value: "Asia/Yerevan", name: "Yerevan" }
    ]
  },
  {
    group: "Africa",
    zones: [
      { value: "Africa/Abidjan", name: "Abidjan" },
      { value: "Africa/Accra", name: "Accra" },
      { value: "Africa/Addis_Ababa", name: "Addis Ababa" },
      { value: "Africa/Algiers", name: "Algiers" },
      { value: "Africa/Asmara", name: "Asmara" },
      { value: "Africa/Asmera", name: "Asmera" },
      { value: "Africa/Bamako", name: "Bamako" },
      { value: "Africa/Bangui", name: "Bangui" },
      { value: "Africa/Banjul", name: "Banjul" },
      { value: "Africa/Bissau", name: "Bissau" },
      { value: "Africa/Blantyre", name: "Blantyre" },
      { value: "Africa/Brazzaville", name: "Brazzaville" },
      { value: "Africa/Bujumbura", name: "Bujumbura" },
      { value: "Africa/Cairo", name: "Cairo" },
      { value: "Africa/Casablanca", name: "Casablanca" },
      { value: "Africa/Ceuta", name: "Ceuta" },
      { value: "Africa/Conakry", name: "Conakry" },
      { value: "Africa/Dakar", name: "Dakar" },
      { value: "Africa/Dar_es_Salaam", name: "Dar es Salaam" },
      { value: "Africa/Djibouti", name: "Djibouti" },
      { value: "Africa/Douala", name: "Douala" },
      { value: "Africa/El_Aaiun", name: "El Aaiun" },
      { value: "Africa/Freetown", name: "Freetown" },
      { value: "Africa/Gaborone", name: "Gaborone" },
      { value: "Africa/Harare", name: "Harare" },
      { value: "Africa/Johannesburg", name: "Johannesburg" },
      { value: "Africa/Kampala", name: "Kampala" },
      { value: "Africa/Khartoum", name: "Khartoum" },
      { value: "Africa/Kigali", name: "Kigali" },
      { value: "Africa/Kinshasa", name: "Kinshasa" },
      { value: "Africa/Lagos", name: "Lagos" },
      { value: "Africa/Libreville", name: "Libreville" },
      { value: "Africa/Lome", name: "Lome" },
      { value: "Africa/Luanda", name: "Luanda" },
      { value: "Africa/Lubumbashi", name: "Lubumbashi" },
      { value: "Africa/Lusaka", name: "Lusaka" },
      { value: "Africa/Malabo", name: "Malabo" },
      { value: "Africa/Maputo", name: "Maputo" },
      { value: "Africa/Maseru", name: "Maseru" },
      { value: "Africa/Mbabane", name: "Mbabane" },
      { value: "Africa/Mogadishu", name: "Mogadishu" },
      { value: "Africa/Monrovia", name: "Monrovia" },
      { value: "Africa/Nairobi", name: "Nairobi" },
      { value: "Africa/Ndjamena", name: "Ndjamena" },
      { value: "Africa/Niamey", name: "Niamey" },
      { value: "Africa/Nouakchott", name: "Nouakchott" },
      { value: "Africa/Ouagadougou", name: "Ouagadougou" },
      { value: "Africa/Porto-Novo", name: "Porto-Novo" },
      { value: "Africa/Sao_Tome", name: "Sao Tome" },
      { value: "Africa/Timbuktu", name: "Timbuktu" },
      { value: "Africa/Tripoli", name: "Tripoli" },
      { value: "Africa/Tunis", name: "Tunis" },
      { value: "Africa/Windhoek", name: "Windhoek" }
    ]
  },
  {
    group: "Australia",
    zones: [
      { value: "Australia/ACT", name: "ACT" },
      { value: "Australia/Adelaide", name: "Adelaide" },
      { value: "Australia/Brisbane", name: "Brisbane" },
      { value: "Australia/Broken_Hill", name: "Broken Hill" },
      { value: "Australia/Canberra", name: "Canberra" },
      { value: "Australia/Currie", name: "Currie" },
      { value: "Australia/Darwin", name: "Darwin" },
      { value: "Australia/Eucla", name: "Eucla" },
      { value: "Australia/Hobart", name: "Hobart" },
      { value: "Australia/LHI", name: "LHI" },
      { value: "Australia/Lindeman", name: "Lindeman" },
      { value: "Australia/Lord_Howe", name: "Lord Howe" },
      { value: "Australia/Melbourne", name: "Melbourne" },
      { value: "Australia/North", name: "North" },
      { value: "Australia/NSW", name: "NSW" },
      { value: "Australia/Perth", name: "Perth" },
      { value: "Australia/Queensland", name: "Queensland" },
      { value: "Australia/South", name: "South" },
      { value: "Australia/Sydney", name: "Sydney" },
      { value: "Australia/Tasmania", name: "Tasmania" },
      { value: "Australia/Victoria", name: "Victoria" },
      { value: "Australia/West", name: "West" },
      { value: "Australia/Yancowinna", name: "Yancowinna" }
    ]
  },
  {
    group: "Indian",
    zones: [
      { value: "Indian/Antananarivo", name: "Antananarivo" },
      { value: "Indian/Chagos", name: "Chagos" },
      { value: "Indian/Christmas", name: "Christmas" },
      { value: "Indian/Cocos", name: "Cocos" },
      { value: "Indian/Comoro", name: "Comoro" },
      { value: "Indian/Kerguelen", name: "Kerguelen" },
      { value: "Indian/Mahe", name: "Mahe" },
      { value: "Indian/Maldives", name: "Maldives" },
      { value: "Indian/Mauritius", name: "Mauritius" },
      { value: "Indian/Mayotte", name: "Mayotte" },
      { value: "Indian/Reunion", name: "Reunion" }
    ]
  },
  {
    group: "Atlantic",
    zones: [
      { value: "Atlantic/Azores", name: "Azores" },
      { value: "Atlantic/Bermuda", name: "Bermuda" },
      { value: "Atlantic/Canary", name: "Canary" },
      { value: "Atlantic/Cape_Verde", name: "Cape Verde" },
      { value: "Atlantic/Faeroe", name: "Faeroe" },
      { value: "Atlantic/Faroe", name: "Faroe" },
      { value: "Atlantic/Jan_Mayen", name: "Jan Mayen" },
      { value: "Atlantic/Madeira", name: "Madeira" },
      { value: "Atlantic/Reykjavik", name: "Reykjavik" },
      { value: "Atlantic/South_Georgia", name: "South Georgia" },
      { value: "Atlantic/Stanley", name: "Stanley" },
      { value: "Atlantic/St_Helena", name: "St Helena" }
    ]
  },
  {
    group: "Pacific",
    zones: [
      { value: "Pacific/Apia", name: "Apia" },
      { value: "Pacific/Auckland", name: "Auckland" },
      { value: "Pacific/Chatham", name: "Chatham" },
      { value: "Pacific/Easter", name: "Easter" },
      { value: "Pacific/Efate", name: "Efate" },
      { value: "Pacific/Enderbury", name: "Enderbury" },
      { value: "Pacific/Fakaofo", name: "Fakaofo" },
      { value: "Pacific/Fiji", name: "Fiji" },
      { value: "Pacific/Funafuti", name: "Funafuti" },
      { value: "Pacific/Galapagos", name: "Galapagos" },
      { value: "Pacific/Gambier", name: "Gambier" },
      { value: "Pacific/Guadalcanal", name: "Guadalcanal" },
      { value: "Pacific/Guam", name: "Guam" },
      { value: "Pacific/Honolulu", name: "Honolulu" },
      { value: "Pacific/Johnston", name: "Johnston" },
      { value: "Pacific/Kiritimati", name: "Kiritimati" },
      { value: "Pacific/Kosrae", name: "Kosrae" },
      { value: "Pacific/Kwajalein", name: "Kwajalein" },
      { value: "Pacific/Majuro", name: "Majuro" },
      { value: "Pacific/Marquesas", name: "Marquesas" },
      { value: "Pacific/Midway", name: "Midway" },
      { value: "Pacific/Nauru", name: "Nauru" },
      { value: "Pacific/Niue", name: "Niue" },
      { value: "Pacific/Norfolk", name: "Norfolk" },
      { value: "Pacific/Noumea", name: "Noumea" },
      { value: "Pacific/Pago_Pago", name: "Pago Pago" },
      { value: "Pacific/Palau", name: "Palau" },
      { value: "Pacific/Pitcairn", name: "Pitcairn" },
      { value: "Pacific/Ponape", name: "Ponape" },
      { value: "Pacific/Port_Moresby", name: "Port Moresby" },
      { value: "Pacific/Rarotonga", name: "Rarotonga" },
      { value: "Pacific/Saipan", name: "Saipan" },
      { value: "Pacific/Samoa", name: "Samoa" },
      { value: "Pacific/Tahiti", name: "Tahiti" },
      { value: "Pacific/Tarawa", name: "Tarawa" },
      { value: "Pacific/Tongatapu", name: "Tongatapu" },
      { value: "Pacific/Truk", name: "Truk" },
      { value: "Pacific/Wake", name: "Wake" },
      { value: "Pacific/Wallis", name: "Wallis" },
      { value: "Pacific/Yap", name: "Yap" }
    ]
  },
  {
    group: "Antarctica",
    zones: [
      { value: "Antarctica/Casey", name: "Casey" },
      { value: "Antarctica/Davis", name: "Davis" },
      { value: "Antarctica/DumontDUrville", name: "DumontDUrville" },
      { value: "Antarctica/Macquarie", name: "Macquarie" },
      { value: "Antarctica/Mawson", name: "Mawson" },
      { value: "Antarctica/McMurdo", name: "McMurdo" },
      { value: "Antarctica/Palmer", name: "Palmer" },
      { value: "Antarctica/Rothera", name: "Rothera" },
      { value: "Antarctica/South_Pole", name: "South Pole" },
      { value: "Antarctica/Syowa", name: "Syowa" },
      { value: "Antarctica/Vostok", name: "Vostok" }
    ]
  },
  {
    group: "Arctic",
    zones: [{ value: "Arctic/Longyearbyen", name: "Longyearbyen" }]
  },
  {
    group: "UTC",
    zones: [{ value: "UTC", name: "UTC" }]
  },
  {
    group: "Manual Offsets",
    zones: [
      { value: "UTC-12", name: "UTC-12" },
      { value: "UTC-11", name: "UTC-11" },
      { value: "UTC-10", name: "UTC-10" },
      { value: "UTC-9", name: "UTC-9" },
      { value: "UTC-8", name: "UTC-8" },
      { value: "UTC-7", name: "UTC-7" },
      { value: "UTC-6", name: "UTC-6" },
      { value: "UTC-5", name: "UTC-5" },
      { value: "UTC-4", name: "UTC-4" },
      { value: "UTC-3", name: "UTC-3" },
      { value: "UTC-2", name: "UTC-2" },
      { value: "UTC-1", name: "UTC-1" },
      { value: "UTC+0", name: "UTC+0" },
      { value: "UTC+1", name: "UTC+1" },
      { value: "UTC+2", name: "UTC+2" },
      { value: "UTC+3", name: "UTC+3" },
      { value: "UTC+4", name: "UTC+4" },
      { value: "UTC+5", name: "UTC+5" },
      { value: "UTC+6", name: "UTC+6" },
      { value: "UTC+7", name: "UTC+7" },
      { value: "UTC+8", name: "UTC+8" },
      { value: "UTC+9", name: "UTC+9" },
      { value: "UTC+10", name: "UTC+10" },
      { value: "UTC+11", name: "UTC+11" },
      { value: "UTC+12", name: "UTC+12" },
      { value: "UTC+13", name: "UTC+13" },
      { value: "UTC+14", name: "UTC+14" }
    ]
  }
], $t = () => {
  var n, e;
  return ((e = (n = nn.find((a) => a.group === "America")) == null ? void 0 : n.zones) != null ? e : []).map((a) => a.value);
}, Ut = () => nn.reduce((n, e) => [...n, ...e.zones.map((a) => a.value)], []), _t = () => {
  var n, e;
  return ((e = (n = nn.find((a) => a.group === "US (Common)")) == null ? void 0 : n.zones) != null ? e : []).map((a) => a.value);
};
function Oa(n, e) {
  var r, t;
  const a = (r = A(n, { timezoneSource: e != null ? e : void 0 })) != null ? r : /* @__PURE__ */ new Date();
  try {
    return (t = a.toLocaleDateString(void 0, { timeZoneName: "short", timeZone: e != null ? e : void 0 }).split(",").map((u) => u.trim()).at(1)) != null ? t : null;
  } catch (i) {
    return console.warn("Invalid timezone identifier (IANAZoneAbbrNull): " + (e != null ? e : "(NONE)")), null;
  }
}
function Lt(n, e) {
  var r, t;
  const a = (r = A(n, { timezoneSource: e != null ? e : void 0 })) != null ? r : /* @__PURE__ */ new Date();
  try {
    const i = a.toLocaleDateString(void 0, { timeZoneName: "short", timeZone: e != null ? e : void 0 });
    return (t = i.split(",").map((u) => u.trim()).at(1)) != null ? t : i;
  } catch (i) {
    return console.warn("Invalid timezone identifier (IANAZoneAbbr): " + (e != null ? e : "(NONE)")), "";
  }
}
function Ft(n, e) {
  var t, i;
  if (!n)
    return null;
  const a = Oa((t = e == null ? void 0 : e.forDate) != null ? t : "2020-01-01", n);
  return e != null && e.hideIANA && a ? a : `${T("_", " ", e != null && e.removePrefix ? (i = n.split("/").at(1)) != null ? i : "" : n)}${a ? ` (${a})` : ""}`;
}
function Pt(n) {
  const e = n % 19, a = Math.floor(n / 100), r = n % 100, t = Math.floor(a / 4), i = a % 4, u = Math.floor((a + 8) / 25), l = Math.floor((a - u + 1) / 3), o = (19 * e + a - t - l + 15) % 30, s = Math.floor(r / 4), m = r % 4, g = (32 + 2 * i + 2 * s - o - m) % 7, h = Math.floor((e + 11 * o + 22 * g) / 451), S = Math.floor((o + g - 7 * h + 114) / 31), M = (o + g - 7 * h + 114) % 31, I = S, N = M + 1;
  return ie(`${n}-${I}-${N}`);
}
const T = function(n, e, a) {
  if (!a)
    return "";
  if (Array.isArray(n)) {
    let r = a;
    for (const t of n)
      r = T(t, e, r);
    return r;
  }
  return a.replace(new RegExp(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), e);
}, Bt = function(n, e) {
  if (!n || !n.length)
    return "";
  const a = H(n);
  let r = e != null ? e : "";
  for (const t of a)
    Array.isArray(t) ? r = T(t[0], t[1], r) : r = T(Object.keys(t)[0], Object.values(t)[0], r);
  return r;
};
function Na(n) {
  const e = f(n, void 0, !0);
  return e !== null && !isNaN(e);
}
function xt(n) {
  return Na(n) && f(n, 0) === f(n, 8);
}
function Ea(n, e, a = 2) {
  return E(n) === null ? null : e == 0 ? f(n, 0) : f(Math.round(f(n) / f(e)) * f(e), a);
}
function Rt(n, e, a = 2) {
  var r;
  return (r = Ea(n, e, a)) != null ? r : 0;
}
const f = (n, e, a) => {
  if (typeof n == "number")
    return e !== void 0 ? Ze(n, e) : n;
  if (!n)
    return 0;
  if (e === void 0) {
    const t = +n;
    if (!Number.isNaN(t))
      return t;
  }
  let r = n.toString();
  return r = T("$", "", r), r = T('"', "", r), r = T("'", "", r), r = T(",", "", r), r = T("%", "", r), r.trim().length === 0 || isNaN(r) ? a ? NaN : 0 : e !== void 0 ? Ze(parseFloat(r), e) : parseFloat(r);
}, Yt = (n, e, a = 2) => E(n, a) !== null && E(n, a) === E(e, a);
function Ht(n) {
  let e = f(n, 8).toString(), a = e.indexOf(".");
  return a === -1 ? 0 : e.length - a - 1;
}
const Ia = (...n) => fe(n).reduce(
  (e, a) => e === null || a > e ? a : e,
  null
), an = (...n) => {
  var e;
  return (e = Ia(...n)) != null ? e : 0;
}, pa = (...n) => fe(n).reduce(
  (e, a) => e === null || a < e ? a : e,
  null
), On = (...n) => {
  var e;
  return (e = pa(...n)) != null ? e : 0;
}, fe = (...n) => {
  let e = [];
  for (const a of n) {
    const r = H(a);
    for (const t of r) {
      const i = H(t);
      for (const u of i) {
        const l = E(u);
        l !== null && (e = [...e, l]);
      }
    }
  }
  return e;
}, $a = (n, ...e) => {
  const a = fe(e);
  return a.length === 0 ? null : f(Nn(n, a) / a.length, n);
}, Wt = (n, ...e) => {
  var a;
  return (a = $a(n, ...e)) != null ? a : 0;
};
function zt(...n) {
  const e = fe(n);
  if (e.length === 0)
    return null;
  {
    const a = e.sort((t, i) => t - i), r = Math.floor(a.length / 2);
    return f(a[r]);
  }
}
const Ua = (n, e, a) => {
  const r = E(n);
  if (r === null)
    return null;
  const t = f(e);
  return t === 0 ? null : a !== void 0 ? f(f(r) / t, a + 2) : f(r) / t;
}, _a = (n, e, a) => {
  var r;
  return (r = Ua(n, e, a)) != null ? r : 0;
}, Nn = (n, ...e) => fe(e).reduce((a, r) => f(a + r, n), 0), La = (n, ...e) => fe(e).reduce(
  (a, r, t) => t ? f(a - r, n) : r,
  0
), E = (n, e) => {
  if (n == null || n === "")
    return null;
  let a = f(n, e, !0);
  return isNaN(a) ? null : a;
}, Ve = (n) => {
  if (!n)
    return null;
  if (typeof n == "object")
    return n;
  let e = null;
  try {
    e = JSON.parse(n);
  } catch (a) {
    return null;
  }
  return e;
}, Gt = (n, e) => n.length > e ? n.substring(0, e - 1) + "&hellip;" : n, Kt = (n, e = "") => {
  var t, i;
  const a = (t = n[e + "latitude"]) != null ? t : "";
  let r = (i = n[e + "longitude"]) != null ? i : "";
  return "http://maps.google.com/maps?q=" + a + "," + r;
}, Vt = (n, e = "") => {
  var r, t, i, u, l, o, s;
  if (!n || !((r = n[e + "address1"]) != null ? r : n[e + "address_1"]) || !n[e + "zip"])
    return "";
  let a = ((i = (t = n[e + "address1"]) != null ? t : n[e + "address_1"]) != null ? i : "") + " ";
  return (n[e + "address2"] || n[e + "address_2"]) && (a += ((u = n[e + "address2"]) != null ? u : n[e + "address_2"]) + " "), a += ((l = n[e + "city"]) != null ? l : "") + ", ", a += ((o = n[e + "state"]) != null ? o : "") + " ", a += (s = n[e + "zip"]) != null ? s : "", "https://www.google.com/maps/search/?api=1&query=" + encodeURI(a);
};
function Zt(n, e, a = "", r = "") {
  if (!n || !e)
    return "";
  const t = (s, m) => {
    var g, h;
    return !s || !((g = s[m + "address1"]) != null ? g : s[m + "address_1"]) || !s[m + "zip"] ? "" : `${(h = s[m + "address1"]) != null ? h : s[m + "address_1"]}, ${s[m + "city"]}, ${s[m + "state"]} ${s[m + "zip"]}`;
  }, i = t(n, a);
  if (!i)
    return "";
  const u = encodeURIComponent(i), l = t(e, r);
  if (!l)
    return "";
  const o = encodeURIComponent(l);
  return `https://www.google.com/maps/dir/?api=1&origin=${u}&destination=${o}`;
}
const qt = (n) => {
  const e = new RegExp("^\\d{1,}(\\.\\d{0,4})?$");
  return !n || e.test(n);
}, Fa = () => {
  let n = (/* @__PURE__ */ new Date()).getTime(), e = performance && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    let r = Math.random() * 16;
    return n > 0 ? (r = (n + r) % 16 | 0, n = Math.floor(n / 16)) : (r = (e + r) % 16 | 0, e = Math.floor(e / 16)), (a === "x" ? r : r & 11).toString(16);
  });
}, x = (n, e) => {
  var t, i;
  if (!n)
    return !1;
  if (n === !0)
    return n;
  const a = E(n);
  if (a !== null)
    return a > 0;
  let r = n.toString().toLowerCase().trim();
  return !((t = e == null ? void 0 : e.nos) != null ? t : []).some((u) => u.toString().toLowerCase().trim() === r) && ["true", "active", "on", "yes", "y", "t", ...(i = e == null ? void 0 : e.yeses) != null ? i : []].some(
    (u) => u.toString().toLowerCase().trim() === r
  );
}, Jt = (n, e, a, r, t = !0, i = !0, u = !0, l = !0) => {
  t && n[e + "name"] && (a[r + "name"] = n[e + "name"]), a[r + "address_1"] = n[e + "address_1"], a[r + "address_2"] = n[e + "address_2"], a[r + "city"] = n[e + "city"], a[r + "state"] = n[e + "state"], a[r + "zip"] = n[e + "zip"], i && n[e + "phone"] && (a[r + "phone"] = n[e + "phone"]), u && n[e + "timezone"] && (a[r + "timezone"] = n[e + "timezone"]), l && n[e + "latitude"] && (a[r + "latitude"] = n[e + "latitude"]), l && n[e + "longitude"] && (a[r + "longitude"] = n[e + "longitude"]);
}, Qt = (n, e) => !!n[(e != null ? e : "") + "address_1"], Xt = (n, e) => {
  var t, i, u, l, o;
  const a = e != null ? e : "";
  let r = ((t = n[a + "address_1"]) != null ? t : "").trim();
  return (i = n[a + "address_2"]) != null && i && (r += ", " + n[a + "address_2"]), (u = n[a + "city"]) != null && u && (r += ", " + n[a + "city"]), (l = n[a + "state"]) != null && l && (r += ", " + n[a + "state"]), (o = n[a + "zip"]) != null && o && (r += "  " + Dn(n[a + "zip"])), r;
}, jt = (n, e) => {
  var t, i, u, l, o;
  const a = e != null ? e : "";
  let r = ((t = n[a + "address_1"]) != null ? t : "").trim();
  return n[a + "address_2"] && (r += `
` + ((i = n[a + "address_2"]) != null ? i : "").trim()), (u = n[a + "city"]) != null && u && (r += `
` + n[a + "city"]), (l = n[a + "state"]) != null && l && (r += ", " + n[a + "state"]), (o = n[a + "zip"]) != null && o && (r += "  " + Dn(n[a + "zip"])), r;
}, ei = (n) => Array.from(n, function(e) {
  return ("0" + (e & 255).toString(16)).slice(-2);
}).join("").replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5"), ni = (n) => {
  let e = atob(n), a, r = e.length, t = new Uint8Array(r);
  for (a = 0; a < r; ++a)
    t[a] = e.charCodeAt(a);
  return t;
}, ai = (n) => Object.keys(n).reduce((e, a) => e + `&${a}=${encodeURIComponent(n[a])}`, ""), Ze = (n, e = 0, a = "round") => a === "round" ? +Math.round((f(n) + Number.EPSILON) * ne(10, e)) / ne(10, e) : a === "down" ? +Math.floor((f(n) + Number.EPSILON) * ne(10, e)) / ne(10, e) : +Math.ceil((f(n) + Number.EPSILON) * ne(10, e)) / ne(10, e), ri = (n) => `json:${JSON.stringify(n)}`, ti = (n) => n ? n === "json:undefined" ? void 0 : n === "json:null" ? null : Ve(n.toString().substring(5)) : void 0, Pa = (n) => n instanceof new Uint16Array().constructor.prototype.__proto__.constructor, ii = (n) => Pa(n) ? String.fromCharCode.apply(null, new Uint16Array(n)) : n, ui = (n) => {
  let e = new ArrayBuffer(n.length * 2), a = new Uint16Array(e);
  for (var r = 0, t = n.length; r < t; r++)
    a[r] = n.charCodeAt(r);
  return e;
}, oi = (n, e) => ae(void 0, null, function* () {
  for (const a of n)
    if (yield e(a))
      return a;
}), li = (n, e) => ae(void 0, null, function* () {
  for (const a of n)
    if (yield e(a))
      return !0;
  return !1;
}), si = (n, e) => ae(void 0, null, function* () {
  for (const a of n)
    if (!(yield e(a)))
      return !1;
  return !0;
}), ci = (n, e) => ae(void 0, null, function* () {
  let a = [];
  for (const r of n)
    (yield e(r)) && a.push(r);
  return a;
}), H = (n) => n == null ? [] : Array.isArray(n) ? n : [n], mi = (n, e = 1, a = 0) => {
  const r = n > a ? e > 0 ? e : an(e * -1, 1) : e < 0 ? e : On(e * -1, -1);
  let t = [], i = a;
  for (; r > 0 ? n > i : n < i; )
    t.push(i), i += r;
  return t;
}, fi = (n, e = "") => {
  const a = `,; :.'"\`|*	\r
`.split("").filter((t) => !e.includes(t)).join(""), r = new RegExp(`[${a}]`, "g");
  return n.split(r).filter((t) => t.trim().length > 0);
}, gi = (n, ...e) => e.every((a) => a in n), hi = (n, ...e) => e.every((a) => a in n && !!n[a]);
function qe(n, ...e) {
  let a = D({}, n);
  for (let r of e)
    delete a[r];
  return a;
}
function di(n, ...e) {
  let a = D({}, n);
  const r = new Set(e);
  for (let t in n)
    r.has(t) && !a[t] && delete a[t];
  return a;
}
function Ai(n) {
  let e = D({}, n);
  for (let a in n)
    a in n && e[a] === void 0 && delete e[a];
  return e;
}
function Si(n, ...e) {
  let a = {};
  for (let r of e)
    r in n && (a[r] = n[r]);
  return a;
}
function yi(n, e) {
  let a = [];
  const r = H(e).map((t) => t == null ? void 0 : t.toString().toLowerCase().trim()).filter((t) => !!t);
  if (n && r.length) {
    const t = Object.keys(n);
    for (const i of r)
      for (const u of t)
        u.toLowerCase().trim() === i && a.push(n[u]);
  }
  if (a.length) {
    const t = a.findIndex((i) => !!i && !!i.toString().trim().length);
    return t >= 0 ? a[t] : a[0];
  }
}
function vi(n, e, a = !1) {
  if (!e || !n)
    return "";
  const r = H(n);
  let t = e;
  do
    for (const i of r)
      t.startsWith(i) && (t = t.substring(i.length));
  while (a && r.some((i) => t.startsWith(i)));
  return t;
}
function Di(n, e, a = !1) {
  if (!e || !n)
    return "";
  const r = H(n);
  let t = e;
  do
    for (const i of r)
      t.endsWith(i) && (t = t.substring(0, t.length - i.length));
  while (a && r.some((i) => t.endsWith(i)));
  return t;
}
function Ti(n, ...e) {
  if (n || e.length === 0)
    return n;
  for (const a of e)
    if (a)
      return a;
  return e[e.length - 1];
}
const En = (n, e, a) => n * 0.299 + e * 0.587 + a * 0.114, In = (n) => (n.indexOf("#") === 0 && (n = n.slice(1)), n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n.length !== 6 ? [0, 0, 0] : [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)]), Mi = (n) => {
  const [e, a, r] = In(n);
  return En(e, a, r);
};
function Ba(n, e, a, r = !1) {
  if (r)
    return En(n, e, a) > 186 ? "#000000" : "#FFFFFF";
  const t = (255 - n).toString(16), i = (255 - e).toString(16), u = (255 - a).toString(16);
  return "#" + t.padStart(2, "0") + i.padStart(2, "0") + u.padStart(2, "0");
}
function Ci(n, e = !1) {
  const [a, r, t] = In(n);
  return Ba(a, r, t, e);
}
function bi(n = 200) {
  return new Promise((e) => setTimeout(e, n));
}
function wi(n, e) {
  return ae(this, null, function* () {
    const a = /* @__PURE__ */ new Date(), r = yield e;
    return console.log(n, Ta(a, "now")), r;
  });
}
function ki(n, e) {
  return Object.keys(n).reduce((a, r) => (a[`${e}${r}`] = n[r], a), {});
}
function Oi(n, e) {
  const a = {};
  for (const r in n)
    r.startsWith(e) && (a[r.slice(e.length)] = n[r]);
  return a;
}
function Ni(n) {
  const e = f(n, 5), a = n < 0 ? Math.ceil(e) : Math.floor(e), r = La(5, n, a);
  return {
    whole: a,
    decimal: r
  };
}
function Ei(n, e, a = 2) {
  if (n === 0 || e.some((o) => o < 0) || !e.some((o) => !!o))
    return [];
  let r = e.reduce((o, s) => o + s, 0), t = e.map((o) => _a(o, r) * 100), i = [], u = e.reverse().findIndex((o) => o !== 0);
  u = u < 0 ? 0 : e.length - 1 - u;
  let l = n;
  return t.forEach((o, s) => {
    let m = parseFloat((n * (o / 100)).toFixed(a));
    l -= m, s === u && (m = Nn(a, l, m)), i.push({ percentage: o, amount: m });
  }), i;
}
function xa(n, e, a) {
  var h, S, M, I, N;
  const r = [], t = (h = a == null ? void 0 : a.startHue) != null ? h : e, i = (S = a == null ? void 0 : a.startSaturation) != null ? S : 30, u = (M = a == null ? void 0 : a.endSaturation) != null ? M : 80, l = (I = a == null ? void 0 : a.startLightness) != null ? I : 30, o = (N = a == null ? void 0 : a.endLightness) != null ? N : 60, s = (e - t) / (n - 1), m = (u - i) / (n - 1), g = (o - l) / (n - 1);
  for (let O = 0; O < n; O++) {
    const d = f(t + s * O), c = f(i + m * O), C = f(l + g * O), U = `hsl(${d}, ${c}%, ${C}%)`;
    r.push(U);
  }
  return r.sort(() => a != null && a.randomize ? Math.random() - 0.5 : 0);
}
function Ii(n, e) {
  var a, r, t, i, u, l, o;
  return xa(n, (a = e == null ? void 0 : e.endHue) != null ? a : 360, {
    startHue: (r = e == null ? void 0 : e.startHue) != null ? r : 0,
    startSaturation: (t = e == null ? void 0 : e.saturation) != null ? t : 80,
    endSaturation: (i = e == null ? void 0 : e.saturation) != null ? i : 80,
    startLightness: (u = e == null ? void 0 : e.lightness) != null ? u : 60,
    endLightness: (l = e == null ? void 0 : e.lightness) != null ? l : 60,
    randomize: (o = e == null ? void 0 : e.randomize) != null ? o : !0
  });
}
const Ra = {
  firstRowIsHeader: !0,
  surroundingLines: !0,
  columns: []
}, pi = {
  Reset: "\x1B[0m",
  // Bright: '\x1b[1m',
  // Dim: '\x1b[2m',
  Underscore: "\x1B[4m",
  // Blink: '\x1b[5m',
  Reverse: "\x1B[7m",
  // Hidden: '\x1b[8m',
  fg: {
    Black: "\x1B[30m",
    Red: "\x1B[31m",
    Green: "\x1B[32m",
    Yellow: "\x1B[33m",
    Blue: "\x1B[34m",
    Magenta: "\x1B[35m",
    Cyan: "\x1B[36m",
    White: "\x1B[37m",
    Crimson: "\x1B[38m"
  },
  bg: {
    Black: "\x1B[40m",
    Red: "\x1B[41m",
    Green: "\x1B[42m",
    Yellow: "\x1B[43m",
    Blue: "\x1B[44m",
    Magenta: "\x1B[45m",
    Cyan: "\x1B[46m",
    White: "\x1B[47m",
    Crimson: "\x1B[48m"
  }
}, $i = (n, e = Ra) => {
  const a = "(null)";
  if (n.length === 0)
    return;
  let r = D({}, e);
  if (!r.columns || r.columns.length === 0) {
    r.columns = [];
    const i = n[0];
    for (let u = 0; u < i.length; u++)
      r.columns.push({
        characters: n.reduce((l, o) => {
          var m;
          const s = ((m = o[u]) != null ? m : a).toString().length;
          return s > l ? s : l;
        }, 1),
        justify: n.find(
          (l, o) => {
            var s;
            return o === 0 ? !1 : isNaN(parseFloat(((s = l[u]) != null ? s : "0").toString()));
          }
        ) ? "L" : "R"
      });
  }
  let t = !0;
  r.surroundingLines && (console.log(" "), console.log(
    n[0].map((i, u) => {
      var s, m, g;
      let l = "";
      const o = ((s = r.columns) != null ? s : [])[u];
      return o && (o.justify === "L" ? l = l.padEnd(o.characters, (m = o.padWith) != null ? m : "-") : l = l.padStart(o.characters, (g = o.padWith) != null ? g : "-")), l;
    }).join("---")
  ));
  for (const i of n)
    console.log(
      i.map((u, l) => {
        var m, g, h;
        let o = (u != null ? u : "(null)").toString();
        const s = ((m = r.columns) != null ? m : [])[l];
        return s && (s.justify === "L" ? o = o.padEnd(s.characters, (g = s.padWith) != null ? g : " ") : o = o.padStart(s.characters, (h = s.padWith) != null ? h : " ")), o;
      }).join("   ")
    ), r.firstRowIsHeader && t && console.log(
      i.map((u, l) => {
        var m, g, h;
        let o = "";
        const s = ((m = r.columns) != null ? m : [])[l];
        return s && (s.justify === "L" ? o = o.padEnd(s.characters, (g = s.padWith) != null ? g : "-") : o = o.padStart(s.characters, (h = s.padWith) != null ? h : "-")), o;
      }).join("---")
    ), t = !1;
  r.surroundingLines && (console.log(
    n[0].map((i, u) => {
      var s, m, g;
      let l = "";
      const o = ((s = r.columns) != null ? s : [])[u];
      return o && (o.justify === "L" ? l = l.padEnd(o.characters, (m = o.padWith) != null ? m : "-") : l = l.padStart(o.characters, (g = o.padWith) != null ? g : "-")), l;
    }).join("---")
  ), console.log(" "));
};
function ze(n) {
  return n != null && typeof n == "object";
}
const mn = (n, e) => {
  switch (typeof n) {
    case "function":
    case "object":
      return !1;
    default:
      const a = E(n), r = a === null ? null : E(e);
      return a !== null && r !== null ? a == r : n == e;
  }
}, Ui = (n, e) => {
  const a = {};
  return ze(n) ? ze(e) ? (Object.keys(n).forEach((r) => {
    r in e ? xe(n[r], e[r]) || (a[r] = { val1: n[r], val2: e[r] }) : a[r] = { val1: n[r] };
  }), Object.keys(e).filter((r) => !(r in n)).forEach((r) => {
    a[r] = { val2: e[r] };
  })) : Object.keys(n).forEach((r) => {
    a[r] = { val1: n[r] };
  }) : ze(e) && Object.keys(e).forEach((r) => {
    a[r] = { val1: e[r] };
  }), a;
}, xe = (n, e) => {
  var a, r;
  if (n === void 0 && e === void 0 || n === null && e === null)
    return !0;
  if (!n && e || n && !e)
    return !1;
  if (Array.isArray(n)) {
    if (n.length !== e.length)
      return !1;
    for (let t = 0; t < n.length; t++)
      if (!xe(n[t], e[t]))
        return !1;
    return !0;
  }
  switch (typeof n) {
    case "function":
      return typeof e == "function";
    case "object":
      if (typeof e != "object")
        return !1;
      if (typeof n == "object" && ((a = n.type) != null && a.toString().includes("react.")) || typeof e == "object" && ((r = e.type) != null && r.toString().includes("react.")))
        return !0;
      const t = Object.keys(n), i = Object.keys(e);
      if (t.length !== i.length)
        return !1;
      for (const u of t)
        if (!xe(n[u], e[u]))
          return !1;
      return !0;
    case "string": {
      if (typeof e == "string" && (n.includes("-") || n.includes("/"))) {
        const u = p(n);
        if (u) {
          const l = p(e);
          if (l)
            return L(u, "IsSame", l, "second");
        }
      }
      return mn(n, e);
    }
    default:
      return mn(n, e);
  }
}, fn = (n, e) => {
  var a, r;
  if (n === void 0 && e === void 0 || n === null && e === null)
    return !0;
  if (!n && e || n && !e)
    return !1;
  if (Array.isArray(n)) {
    if (n.length !== e.length)
      return !1;
    for (let t = 0; t < n.length; t++)
      if (!fn(n[t], e[t]))
        return !1;
    return !0;
  }
  switch (typeof n) {
    case "function":
      return !0;
    case "boolean":
      return x(n) === x(e);
    case "object":
      if (typeof n == "object" && ((a = n.type) != null && a.toString().includes("react.")) || typeof e == "object" && ((r = e.type) != null && r.toString().includes("react.")))
        return !0;
      const t = Object.keys(n);
      for (const i of t)
        if (!fn(n[i], e[i]))
          return !1;
      return !0;
    case "string":
      if (typeof e == "boolean")
        return x(n) === x(e);
      if (typeof e == "string") {
        const i = p(n);
        if (i) {
          const u = p(e);
          if (u)
            return L(i, "IsSame", u, "second");
        }
      }
      if (typeof e == "number") {
        const i = E(n);
        if (i !== null)
          return e === i;
      }
      return n == e;
    case "number":
      if (typeof e == "string") {
        const i = E(e);
        if (i !== null)
          return n === i;
      }
      return n == e;
    default:
      return n == e;
  }
}, gn = (n, e) => {
  var a, r;
  if (n === void 0 && e === void 0 || n === null && e === null || n === "" && e === null || n === null && e === "" || n === "false" && !e || !n && e === "false")
    return !0;
  if (!n && e || n && !e)
    return !1;
  if (Array.isArray(n)) {
    if (n.length !== e.length)
      return !1;
    for (let t = 0; t < n.length; t++)
      if (!gn(n[t], e[t]))
        return !1;
    return !0;
  }
  switch (typeof n) {
    case "function":
      return !0;
    case "boolean":
      return x(n) === x(e);
    case "object":
      if (typeof n == "object" && ((a = n.type) != null && a.toString().includes("react.")) || typeof e == "object" && ((r = e.type) != null && r.toString().includes("react.")))
        return !0;
      const t = Object.keys(n);
      for (const i of t)
        if (!gn(n[i], e[i]))
          return !1;
      return !0;
    case "string":
      if (typeof e == "boolean")
        return x(n) === x(e);
      if (typeof e == "string" && (n.includes("-") || n.includes("/"))) {
        const i = p(n);
        if (i && (e.includes("-") || e.includes("/"))) {
          const u = p(e);
          if (u)
            return L(i, "IsSame", u, "second");
        }
      }
      if (typeof e == "number") {
        const i = E(n);
        if (i !== null)
          return e === i;
      }
      return n == e;
    case "number":
      if (typeof e == "string") {
        const i = E(e);
        if (i !== null)
          return n === i;
      }
      return n == e;
    default:
      return n == e;
  }
};
function hn(n) {
  if (!n)
    return n;
  if (n instanceof Date)
    return new Date(n.valueOf());
  if (n instanceof Array) {
    const e = [];
    for (let a = 0, r = n.length; a < r; a++)
      e[a] = hn(n[a]);
    return e;
  }
  if (n instanceof Object) {
    const e = {};
    for (let a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = hn(n[a]));
    return e;
  }
  return n;
}
const _i = {}, Li = (n, e, a, r) => {
  a && e && a((t) => {
    let i = D({}, t);
    return r && Je(r[e], n) ? delete i[e] : i[e] = n, i;
  });
}, Fi = (n, e, a) => V(D({}, a), {
  [n]: e
}), Pi = (n, e) => D(D({}, n), e), Bi = {}, xi = (n, e, a, r, t = {}) => V(D({}, r), {
  [n]: V(D(D({}, t), r[n]), {
    [e]: a
  })
}), Ri = (n, e, a, r = {}) => V(D({}, a), {
  [n]: D(D(D({}, r), a[n]), e)
}), Ya = (n, e, a) => {
  let r = [...n], t = r.findIndex(
    (u) => !!e.id && e.id === u.id || !!e.uuid && e.uuid === u.uuid
  );
  if (t >= 0)
    return r[t] = D(D({}, r[t]), e), r;
  let i = D(D({}, a), e);
  return !i.id && !i.uuid && (i.uuid = Fa()), [...r, D({}, i)];
}, Yi = (n, e, a) => e.reduce((r, t) => Ya(r, t, a), n), Hi = (n, e) => n.map((a) => D(D({}, a), e[a.id])), Wi = function(n, e = !0) {
  if (!n.length)
    return "";
  const a = Object.keys(n[0]);
  return '"' + a.join('","') + `"
` + n.map(
    (r) => a.map((t) => {
      const i = r[t];
      return e && (typeof i == "number" && !i || i === "0") ? "" : typeof i == "string" ? '"' + T('"', '""', i) + '"' : (i != null ? i : "").toString();
    }).join(",")
  ).join(`
`);
}, zi = function(n, e = !0) {
  if (!n.length)
    return "";
  const a = Object.keys(n[0]);
  return '"' + a.join('"	"') + `"
` + n.map(
    (r) => a.map((t) => {
      const i = r[t];
      return e && (typeof i == "number" && !i || i === "0") ? "" : typeof i == "string" ? '"' + T('"', '""', i) + '"' : (i != null ? i : "").toString();
    }).join("	")
  ).join(`
`);
}, Ha = function(n, e = !0) {
  return n.map(
    (a) => a.map(
      (r) => e && (typeof r == "number" && !r || r === "0") ? "" : typeof r == "string" ? '"' + T('"', '""', r) + '"' : (r != null ? r : "").toString()
    ).join(",")
  ).join(`
`);
}, Gi = function(n, e, a = !0) {
  const r = Ha(e, a);
  let t = document.createElement("a");
  const i = new Blob([r], { type: "text/csv;charset=utf-8;" });
  t.href = URL.createObjectURL(i), t.setAttribute("download", n), t.click();
}, Ki = function(n, e) {
  const a = e.map(
    (i) => i.map((u) => u && !isNaN(u) ? Math.round(u * 100) / 100 : u != null ? u : "").join(",")
  ).join(`
`);
  let r = document.createElement("a");
  const t = new Blob([a], { type: "text/csv;charset=utf-8;" });
  r.href = URL.createObjectURL(t), r.setAttribute("download", n), r.click();
}, Vi = (n, e = !0, a = !0) => {
  const r = n.reduce(
    (i, u) => [
      ...i,
      ...Object.keys(u).filter((l) => !i.includes(l))
    ],
    []
  );
  let t = "";
  e && (t += r.map((i) => `"${a ? qn(i) : i}"`).join("	"));
  for (const i of n)
    t && (t += `\r
`), t += r.map((u) => {
      if (i[u] === void 0 || i[u] === null || typeof i[u] == "string" && i[u].trim() === "")
        return "";
      const l = E(i[u]);
      return l !== null ? l.toString() : `"${i[u]}"`;
    }).join("	");
  return t;
}, Zi = (n) => {
  if (!n || typeof n != "string")
    return !1;
  try {
    const e = JSON.parse(n), a = Object.prototype.toString.call(e);
    return a === "[object Object]" || a === "[object Array]";
  } catch (e) {
    return !1;
  }
}, Je = (n, e, a = !1) => {
  if (n === e)
    return !0;
  if (n === null)
    return e === null;
  if (e === null)
    return a && console.log(n, e), !1;
  if (n === void 0)
    return e === void 0;
  if (e === void 0)
    return a && console.log(n, e), !1;
  if (Array.isArray(n))
    if (Array.isArray(e)) {
      if (n.length !== e.length)
        return a && console.log("Lengths", n, e), !1;
      for (let r = 0; r < n.length; r++)
        if (!Je(n[r], e[r]))
          return !1;
      return !0;
    } else
      return a && console.log("Array/Not", n, e), !1;
  else if (Array.isArray(e))
    return a && console.log("Array/Not", n, e), !1;
  if (typeof n == "object" || typeof e == "object") {
    const r = Object.keys(n), t = Object.keys(e);
    if (r.length !== t.length)
      return a && console.log("Object Keys", n, e), !1;
    const i = r.findIndex((u) => !Je(n[u], e[u]));
    if (i === -1)
      return !0;
    if (a)
      return console.log("Object Key", r[i], n, e), !1;
  } else {
    if (n === e)
      return !0;
    {
      const r = E(n);
      if (r !== null) {
        const t = E(e);
        if (t !== null && r === t)
          return !0;
        a && console.log("Numbers1", n, e);
      } else if (E(e) !== null)
        return a && console.log("Numbers2", n, e), !1;
      if (ln(n)) {
        let t = me(n, Be);
        if (t)
          if (ln(e)) {
            let i = me(e, Be);
            if (i && t === i)
              return !0;
            a && console.log("Dates", n, e);
          } else
            a && console.log("Dates", n, e);
      }
    }
  }
  return a && console.log("Fallout", n, e), !1;
}, pn = (n, e) => {
  const a = D({}, n);
  for (const r in e)
    e.hasOwnProperty(r) && xe(e[r], a[r]) && delete a[r];
  return a;
}, qi = (n, e) => {
  const a = D({}, n);
  for (const r in e)
    if (e.hasOwnProperty(r) && a.hasOwnProperty(r)) {
      const t = pn(a[r], e[r]);
      Object.keys(t).length === 0 ? delete a[r] : a[r] = t;
    }
  return a;
}, Ji = (n, e) => {
  const a = D({}, n);
  for (const r in n)
    if (n.hasOwnProperty(r)) {
      const t = e.find((i) => i.id == r);
      if (t) {
        const i = pn(a[r], t);
        Object.keys(i).length === 0 ? delete a[r] : a[r] = i;
      }
    }
  return a;
}, Qi = (n, e, a = []) => {
  let r = {};
  for (const t of Object.keys(n))
    a.includes(t) || n[t] !== e[t] && (r[t] = n[t]);
  return r;
}, Xi = (n, e, a = []) => {
  let r = {};
  for (const t of Object.keys(n))
    !a.includes(t) && e[t] !== void 0 && (r[t] = n[t]);
  return r;
}, Ne = ["&&", "||", "!=", "<>", ">=", "<=", "=", "<", ">", "-", "+", "/", "*", "^"], Wa = ["abs", "pow", "int", "round", "includes", "includesinarray"];
function ji(n, e, a) {
  return ae(this, null, function* () {
    let r = /\[(.*?)\]/g, t = [], i;
    const u = D({}, e != null ? e : {}), l = [], o = [];
    for (; (i = r.exec(n)) !== null; )
      if (u[i[1]] === void 0)
        if (a != null && a.requestVariable) {
          const s = yield a.requestVariable(i[1]);
          typeof s == "number" || typeof s == "string" ? u[i[1]] = f(s, 5) : typeof s == "object" ? (F(s == null ? void 0 : s.value) ? t.push(i[1]) : u[i[1]] = f(s == null ? void 0 : s.value, 5), s != null && s.warning && l.push(s.warning), s != null && s.error && o.push(s.error)) : t.push(i[1]);
        } else
          t.push(i[1]);
    return {
      calculation: za(n, u),
      missingVariables: t,
      variables: u,
      warnings: l,
      errors: o
    };
  });
}
function za(n, e) {
  return E(Re(`[${n}]`, e));
}
const Re = (n, e) => {
  var t, i, u;
  let a = n;
  if (e)
    for (const l of Object.keys(e))
      a = T(`[${l}]`, e[l], a);
  let r = Ue(a, "[", "]");
  for (; r; ) {
    let l = (t = a.substring(0, r[0])) != null ? t : "", o = (i = Pe(a.substring(r[0] + 1, r[1]))) != null ? i : "", s = (u = a.substring(r[1] + 1)) != null ? u : "";
    a = `${l}${o}${s}`, r = Ue(a, "[", "]");
  }
  return a = $n(a), a;
}, eu = (n, e) => x(Re(`[${n}]`, e)), Ue = (n, e, a) => {
  if (n) {
    const r = n.length;
    let t = null;
    for (let i = 0; i < r; i++)
      if (n.substring(i, i + 1) === e)
        t = i;
      else if (t !== null && n.substring(i, i + 1) === a)
        return [t, i];
  }
  return null;
}, dn = (n, e, a) => {
  if (n) {
    const r = n.indexOf(e);
    if (r >= 0) {
      let t = 0;
      for (let i = r + 1; i < n.length; i++)
        if (n.charAt(i) === e)
          t++;
        else if (n.charAt(i) === a)
          if (t)
            t--;
          else
            return [r, i];
    }
  }
  return null;
};
function nu(n, e, a) {
  if (!n)
    return [];
  let r = n;
  const t = [];
  let i = dn(r, e, a);
  for (; i; )
    t.push(r.substring(i[0] + 1, i[1])), r = r.substring(i[1] + 1), i = dn(r, e, a);
  return t;
}
const Pe = (n) => {
  let e = $n(n);
  e = T(" ", "", e);
  const a = [...Ne, "("], r = [...Ne, ")"];
  let t = Ue(e, "(", ")");
  for (; t; ) {
    let i = e.substring(0, t[0]);
    i.length > 0 && a.indexOf(i.substring(i.length - 1)) === -1 && a.indexOf(i.substring(i.length - 2)) === -1 && (i = i.concat("*")), i = i.concat(
      Pe(e.substring(t[0] + 1, t[0] + 1 + (t[1] - t[0] - 1)))
    );
    let u = e.substring(t[1] + 1, t[1] + 1 + (e.length - t[1]));
    u.length > 0 && r.indexOf(u.substring(0, 1)) === -1 && r.indexOf(u.substring(0, 2)) === -1 && (i = i.concat("*")), e = i.concat(u), t = Ue(e, "(", ")");
  }
  for (const i of Ne) {
    let u = i, l = i, o = e.split(i);
    if (o.length > 1) {
      i === "-" && Ne.indexOf(o[0].substring(o[0].length - 1)) > -1 && (u = o[0].substring(o[0].length - 1), o[0] = o[0].substring(0, o[0].length - 1), o[1] = "-" + o[1]);
      let s = Pe(o[0]);
      for (let m = 1; m < o.length; m++) {
        l = i, i === "-" && Ne.indexOf(o[m].substring(o[m].length - 1)) > -1 && (l = o[m].substring(o[m].length - 1), o[m] = o[m].substring(0, o[m].length - 1), o[m + 1] = "-" + o[m + 1]);
        let g = Pe(o[m]);
        const h = parseFloat(s), S = parseFloat(g), M = !isNaN(h) && !isNaN(S);
        switch (u) {
          case "^":
            M ? s = Math.pow(h, S).toString() : s = g;
            break;
          case "*":
            M ? s = (h * S).toString() : s = g;
            break;
          case "/":
            M && (S === 0 ? s = "0" : s = (h / S).toString());
            break;
          case "+":
            M ? s = (h + S).toString() : s = g;
            break;
          case "-":
            M ? s = (h - S).toString() : s = `-${g}`;
            break;
          case "<=":
            M ? s = h <= S ? "1" : "0" : s = s <= g ? "1" : "0";
            break;
          case ">=":
            M ? s = h >= S ? "1" : "0" : s = s >= g ? "1" : "0";
            break;
          case "<":
            M ? s = h < S ? "1" : "0" : s = s < g ? "1" : "0";
            break;
          case ">":
            M ? s = h > S ? "1" : "0" : s = s > g ? "1" : "0";
            break;
          case "=":
            s = s === g ? "1" : "0";
            break;
          case "!=":
            s = s !== g ? "1" : "0";
            break;
          case "||":
            s = s || g;
            break;
          case "&&":
            s = s && g;
            break;
          default:
            s = g;
        }
        u = l;
      }
      return s;
    }
  }
  return e;
}, An = (n, e) => {
  if (!n)
    return null;
  for (const a of Wa) {
    const r = ("" + n.toLowerCase()).indexOf(a + "(", e);
    if (r >= 0) {
      const t = n.substring(r + a.length).toLowerCase(), i = Ue(t, "(", ")");
      if (i) {
        const u = t.substring(1, i[1]);
        return {
          expression: n,
          pos: r,
          pre: n.substring(0, r).trim(),
          post: t.substring(i[1] + 1).trim(),
          function: a,
          argumentText: u,
          arguments: u.split(",").map((l) => l.trim())
        };
      }
    }
  }
  return null;
}, Ga = (n) => {
  var r, t;
  const e = parseFloat(Re(`[${(r = n.arguments[0]) != null ? r : "0"}]`)), a = parseFloat(Re(`[${(t = n.arguments[1]) != null ? t : "0"}]`));
  switch (n.function) {
    case "abs":
      if (!isNaN(e))
        return Math.abs(e).toString();
      break;
    case "pow":
      if (!isNaN(e) && !isNaN(a))
        return Math.pow(e, a).toString();
      break;
    case "int":
      if (!isNaN(e))
        return parseInt(n.arguments[0]).toString();
      break;
    case "round":
      if (!isNaN(e) && !isNaN(a)) {
        const s = Math.pow(10, a), m = e * s;
        return (Math.round(m) / s).toString();
      }
      break;
    case "includes":
      let i = 1, u = [];
      for (; n.arguments[i] !== void 0; )
        u.push(n.arguments[i]), i++;
      return u.join(",").includes(n.arguments[0]) ? "1" : "0";
    case "includesinarray":
      let l = 1, o = [];
      for (; n.arguments[l] !== void 0; )
        o.push(n.arguments[l]), l++;
      return o.includes(n.arguments[0]) ? "1" : "0";
  }
  return "";
}, $n = (n) => {
  let e = n, a = An(e, 0);
  for (; a; )
    e = a.pre + Ga(a) + a.post, a = An(e, 0);
  return e;
}, Un = (n) => {
  const e = D({}, n);
  return Object.values(n).forEach((a) => typeof a == "number" && delete e[a]), e;
};
function au(n) {
  return Object.keys(n).map((e) => ({
    key: e,
    value: n[e]
  }));
}
function ru(n) {
  return Object.keys(n).map((e) => ({
    key: n[e],
    name: e
  }));
}
const tu = (n) => Object.keys(Un(n)), Ka = (n) => [...new Set(Object.values(Un(n)))], iu = (n, e) => e == null ? void 0 : Object.keys(n)[Object.values(n).indexOf(e)], uu = (n, e) => e == null ? void 0 : Object.values(n)[Object.keys(n).indexOf(e)];
function ou(n, e, a) {
  return !!e && Ka(n).some(
    (r) => a != null && a.ignoreSpace ? T(" ", "", r == null ? void 0 : r.toString()) === T(" ", "", e == null ? void 0 : e.toString()) : r === e
  );
}
var Sn;
((n) => {
  n.Header = (r = "calendar") => ({
    "Content-Type": "text/Calendar",
    "Content-Disposition": `inline; filename=${r}.ics`
  }), n.VCALENDAROpen_Text = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
`, n.VCALENDARClose_Text = `END:VCALENDAR
`;
  const e = (r, t) => {
    var i;
    return r ? `TZID=${t != null ? t : "America/New_York"}:${(i = Aa(p(r))) != null ? i : ""}` : "";
  }, a = (r) => T(`\r
`, "\\n", T(`
`, "\\n", T("\r", "\\n", T(",", "\\,", T(";", "\\;", T("\\", "\\\\", r))))));
  n.VEVENT_Text = (r) => {
    var i, u;
    let t = "";
    return t += `BEGIN:VEVENT
`, t += `CLASS:PUBLIC
`, t += "CREATED;" + e((i = r.dateTimeCreated) != null ? i : (/* @__PURE__ */ new Date()).toISOString()) + `
`, t += "DESCRIPTION:" + a(r.description) + `
`, t += "DTSTART;" + e(r.dateTimeStart) + `
`, r.durationMinutes ? t += "DURATION:PT" + r.durationMinutes + `M
` : r.dateTimeEnd && (t += "DTEND;" + e(r.dateTimeEnd) + `
`), t += "DTSTAMP;" + e((/* @__PURE__ */ new Date()).toISOString()) + `
`, r.organizerName && r.organizerEmail && (t += `ORGANIZER;CN=${r.organizerName}:MAILTO:${r.organizerEmail}
`), t += "LAST-MODIFIED;" + e((u = r.dateTimeModified) != null ? u : (/* @__PURE__ */ new Date()).toISOString()) + `
`, r.location && (r.location_altrep ? t += `LOCATION;ALTREP="${a(r.location_altrep)}":` + a(r.location) + `
` : t += "LOCATION:" + a(r.location) + `
`), r.priority && (t += `PRIORITY:${r.priority}
`), t += `SEQUENCE:0
`, t += "SUMMARY:" + a(r.subject) + `
`, t += `TRANSP:OPAQUE
`, t += "UID:" + r.UID + `
`, r.alarmTriggerMinutes !== void 0 && (t += `BEGIN:VALARM
`, t += `TRIGGER:-PT${r.alarmTriggerMinutes}M
`, t += `ACTION:DISPLAY
`, t += `DESCRIPTION:Reminder
`, t += `END:VALARM
`), t += `END:VEVENT
`, t;
  }, n.ICS_Text = (r) => n.VCALENDAROpen_Text + (0, n.VEVENT_Text)(r) + n.VCALENDARClose_Text;
})(Sn || (Sn = {}));
function lu(n) {
  var r, t;
  const e = n.some((i) => !!i.id);
  let a = `!TRNS${e ? "	TRNSID" : ""}	TRNSTYPE	DATE	ACCNT	NAME	AMOUNT	MEMO	NUM
!SPL${e ? "	SPLID" : ""}	DATE	ACCNT	NAME	AMOUNT	MEMO
!ENDTRNS
`;
  for (const i of n) {
    const u = `TRNS${e ? `	${(r = i.id) != null ? r : ""}` : ""}	CHECK	${b(i.date, {
      formatLocale: !0
    })}	${T("	", "", i.account)}	${T("	", "", i.payee)}	-${f(
      i.amount,
      2
    ).toString()}	${T("	", "", i.memo)}	${f(i.number, 0).toString()}
`, l = `SPL${e ? `	${(t = i.id) != null ? t : ""}` : ""}	${b(i.date, {
      formatLocale: !0
    })}	${T("	", "", i.category)}	${T("	", "", i.payee)}	${f(
      i.amount,
      2
    ).toString()}	${T("	", "", i.memo)}
`;
    a += `${u}${l}ENDTRNS
`;
  }
  return a;
}
const Ge = (n, e) => {
  var a, r, t, i, u, l, o, s, m, g;
  if (e.nullIfFalsey && !n || n === null || n === void 0)
    return e.nullable || e.nullIfFalsey ? null : e.type === "date" ? b((a = e.default) != null ? a : "now") : e.type === "datetime" ? Y((r = e.default) != null ? r : "now") : e.type === "time" ? X((t = e.default) != null ? t : "now") : e.type === "number" ? f(e.default) : e.type === "boolean" ? x((i = e.default) != null ? i : !0) : e.type === "object" ? typeof e.default == "string" ? (u = Ve(e.default)) != null ? u : {} : (l = e.default) != null ? l : {} : ((o = e.default) != null ? o : "").toString();
  if (e.type === "boolean") {
    if (typeof n != "boolean")
      return x(n);
  } else if (e.type === "number") {
    if (typeof n != "number")
      return e.nullable ? E(n) : f(n);
  } else {
    if (e.type === "date")
      return e.nullable ? ie(n) : b(n);
    if (e.type === "datetime")
      return e.nullable ? Y(n) : (s = Y(n)) != null ? s : ma();
    if (e.type === "time")
      return e.nullable ? X(n) : (m = X(n)) != null ? m : "00:00";
    if (e.type === "object") {
      if (typeof n == "string")
        return (g = Ve(n)) != null ? g : e.nullable ? null : {};
      if (typeof n != "object")
        return e.nullable ? null : {};
    } else if (typeof n != "string")
      return n ? n.toString() : "";
  }
  return n;
}, Ke = (n, e) => {
  let a = n;
  if (e.length && n)
    switch (typeof n) {
      case "string":
        a = n.substring(0, e.length);
        break;
      case "number":
        const r = n.toString();
        if (!r.includes(".") && n.toString().length > e.length)
          throw new Error(
            `Value ${n} longer than ${v(e.length)}, is ${r.length}`
          );
        if (r.toString().length > e.length + 1) {
          const t = r.split(".")[0];
          if (t.toString().length > e.length)
            throw new Error(
              `Whole value ${n} longer than ${v(e.length)}, is ${r.length}`
            );
          if (a = f(n, e.length - t.length), a.toString().length > e.length + 1)
            throw new Error(
              `Value ${a} longer than ${v(e.length)}, is ${a.toString().length}`
            );
        }
    }
  if (!e.nullable || n) {
    if (e.values && !e.values.includes(n))
      return null;
    if (e.minValue !== void 0 && e.minValue > n)
      return e.minValue;
    if (e.maxValue !== void 0 && e.maxValue < n)
      return e.maxValue;
  }
  return a;
}, Va = (n, e) => {
  if (!n)
    return n;
  const a = D({}, n);
  for (const r of Object.keys(n)) {
    const t = e[r];
    t ? (t.isArray ? !a[r] && t.nullable ? a[r] = null : (a[r] = H(a[r]).filter(
      (i) => t.type !== "number" || i !== "" && !F(i)
    ).map((i) => Ge(i, t)).filter(
      (i) => t.arrayAllowFalsey || (t.type === "number" ? !F(i) : !!i)
    ).map((i) => Ke(i, t)).filter(
      (i) => t.arrayAllowFalsey || (t.type === "number" ? !F(i) : !!i)
    ), t.isArray && t.type === "object" && a[r].length === 1 && Array.isArray(a[r].at(0)) && (a[r] = a[r].at(0))) : a[r] = Ke(Ge(a[r], t), t), !t.nullIfFalsey && t.nullable && (t.type === "number" ? F(a[r]) || a[r] === "" : !a[r]) && typeof a[r] != "boolean" && (a[r] = null), t.nullIfFalsey && !a[r] && (a[r] = null)) : delete a[r];
  }
  for (const r of Object.keys(e))
    if (!(r in a)) {
      const t = e[r];
      t && (a[r] = Ke(Ge(a[r], t), t), t.isArray && !Array.isArray(a[r]) && (a[r] = H(a.key)));
    }
  return a;
}, su = (n, e) => {
  var r, t, i, u;
  let a = {};
  if (e != null && e.default)
    for (const l of Object.keys(e.default).filter((o) => {
      var s, m;
      return (s = e.includeColumns) != null && s.includes(o) ? !0 : !e.includeColumns && !((m = e.excludeColumns) != null && m.includes(o));
    })) {
      let o = Array.isArray(e.default[l]) || (r = e.arrayFormDataItems) != null && r.includes(l) ? (i = (t = n.getAll(l)) != null ? t : e == null ? void 0 : e.default[l]) != null ? i : null : n.get(l);
      o !== void 0 && typeof e.default[l] == "boolean" && (o = x(o)), o !== void 0 && typeof e.default[l] == "number" && (o = f(o)), a[l] = (u = o != null ? o : e == null ? void 0 : e.default[l]) != null ? u : null;
    }
  else
    n.forEach((l, o) => {
      const s = n.getAll(o);
      Array.isArray(s) && s.length > 1 ? a[o] = s : a[o] = l;
    });
  return e != null && e.constraint && (a = Va(a, e.constraint)), a;
}, cu = (n) => {
  if (n instanceof FormData)
    return n;
  const e = new FormData();
  for (const a of Object.keys(n))
    if (Array.isArray(n[a]))
      for (const r of n[a])
        e.append(a, r);
    else
      e.append(a, n[a]);
  return e;
};
var Za = /* @__PURE__ */ ((n) => (n.Local = "local", n.Migrate = "migrate", n.Dev = "dev", n.Test = "test", n.QA = "qa", n.Demo = "demo", n.ProdSupport = "prodsupport", n.Prod = "prod", n))(Za || {});
const _n = (n) => {
  let e;
  return typeof n == "string" ? e = [n] : e = n, !!e.find((a) => Ln() === a);
}, Ln = () => {
  var n, e, a;
  return (a = (e = (n = process.env.REACT_APP_STAGE) != null ? n : process.env.STAGE) != null ? e : process.env.VITE_APP_STAGE) != null ? a : "local";
}, mu = (n) => {
  var a;
  const e = n != null ? n : Ln();
  switch (e) {
    case "dev":
      return "Development";
    case "qa":
      return "QA";
    case "prodsupport":
      return "Production Support";
    case "prod":
      return "Production";
    default:
      return (a = jn(e)) != null ? a : "Local";
  }
}, qa = () => _n([
  "local",
  "migrate",
  "dev",
  "qa"
  /* QA */
]), Ja = () => _n([
  "qa",
  "test"
  /* Test */
]), fu = () => qa() || Ja();
class gu {
  constructor(e) {
    _e(this, "events");
    _e(this, "offendingMS");
    _e(this, "warnAutomatically", !1);
    var a, r;
    this.events = [
      {
        eventMS: (/* @__PURE__ */ new Date()).valueOf(),
        label: "Start",
        durationMS: 0
      }
    ], this.offendingMS = (a = e == null ? void 0 : e.offendingMS) != null ? a : 500, this.warnAutomatically = (r = e == null ? void 0 : e.warnAutomatically) != null ? r : !1;
  }
  /**
   * Reset the control to start tracking times from this point forward
   */
  reset() {
    this.events = [
      {
        eventMS: (/* @__PURE__ */ new Date()).valueOf(),
        label: "Start",
        durationMS: 0
      }
    ];
  }
  /**
   * Get the maximum TS in the events
   */
  get maxTS() {
    return this.events.reduce((e, a) => an(e, a.eventMS), 0);
  }
  /**
   * Get the minimum TS in the events
   */
  get minTS() {
    return this.events.reduce((e, a) => On(e, a.eventMS), this.maxTS);
  }
  /**
   * Get the total duration of all events
   */
  get duration() {
    return this.maxTS - this.minTS;
  }
  /**
   * Mark the current time with a label for analysis later, and throw a console warn if appropriate
   * @param label
   * @param options
   */
  mark(e, a) {
    var u, l;
    const r = this.maxTS, t = (/* @__PURE__ */ new Date()).valueOf(), i = {
      eventMS: t,
      label: e,
      durationMS: t - r
    };
    return this.events.push(i), ((u = a == null ? void 0 : a.warnAutomatically) != null ? u : this.warnAutomatically) && i.durationMS > ((l = a == null ? void 0 : a.offendingMS) != null ? l : this.offendingMS) && console.info(`Time exceeded - ${e} - ${v(i.durationMS)}ms (${kn()})`), i;
  }
  /**
   * Mark the current time with a label for analysis later, and throw a console warn if appropriate
   * @param label
   * @param promiseFunction
   * @param options
   */
  markResolved(e, a, r) {
    return a.then(() => {
      this.mark(e, r);
    }), a;
  }
  /**
   * Report back only the events that exceeded the offending MS
   */
  get offendingEvents() {
    return this.events.reduce((e, a) => a.durationMS > this.offendingMS ? [...e, a] : e, []);
  }
  /**
   * Analyze events, and if any are offending, or if the sum offends, then display those events and return them
   * @param options
   */
  durationOffends(e) {
    var r, t, i;
    const a = this.offendingEvents;
    if (a.length || this.duration > ((r = e == null ? void 0 : e.offendingMS) != null ? r : this.offendingMS)) {
      const u = e != null && e.showAll ? this.events.filter((l) => l.durationMS) : a;
      return ((t = e == null ? void 0 : e.warnAutomatically) != null ? t : this.warnAutomatically) && (console.info(`"${(i = e == null ? void 0 : e.label) != null ? i : "Unknown Event"}" took ${v(this.duration)}ms`), console.table(u.map((l) => qe(l, "eventMS")))), u;
    }
    return null;
  }
  /**
   * Analyze events, and if any are offending, or if the sum offends, then display those events and return them
   * @param label
   * @param offendingMS
   * @param showAll
   */
  consoleDurationOffends(e, a, r = !1) {
    const t = this.offendingEvents;
    if (t.length || this.duration > (a != null ? a : this.offendingMS)) {
      const i = r ? this.events.filter((u) => u.durationMS) : t;
      return console.info(`"${e}" took ${v(this.duration)}ms`), i.length && console.table(i.map((u) => qe(u, "eventMS"))), i;
    }
    return null;
  }
}
function hu(n, e, a) {
  const r = (/* @__PURE__ */ new Date()).valueOf(), t = E(e);
  return a.then(() => {
    const i = (/* @__PURE__ */ new Date()).valueOf() - r;
    t && i > t && console.info(`Time Exceeded - ${n} - ${v(i)}ms (${kn()})`);
  }), a;
}
const Ee = (n) => typeof n == "number" ? n : n.id;
var yn;
((n) => {
  n.IsSelected = (e, a) => !a.includes(Ee(e)), n.SelectedIDs = (e, a) => e.reduce(
    (r, t) => {
      const i = Ee(t);
      return a.find((u) => u === i) ? r : [...r, i];
    },
    []
  ), n.ToggleUnSelectedID = (e, a) => a.includes(e) ? a.filter((r) => r !== e) : [...a, e], n.SelectIDs = (e, a) => a.filter((r) => !e.find((t) => r === Ee(t))), n.UnSelectIDs = (e, a) => [...a, ...e.map((r) => Ee(r))], n.SelectedBetween = (e, a, r, t) => {
    const i = e.map((s) => Ee(s)), u = !(0, n.IsSelected)(r, t);
    let l = [], o = !1;
    for (const s of i)
      if (s === a || s === r) {
        if (l.push(s), o)
          break;
        o = !0;
      } else
        o && l.push(s);
    return u ? (0, n.SelectIDs)(l, t) : (0, n.UnSelectIDs)(l, t);
  };
})(yn || (yn = {}));
const du = (n, e, a, r = !0) => {
  let t = [], i = !1;
  for (const u of n)
    if (u === e || u === a) {
      if (r && t.push(u), i)
        break;
      i = !0;
    } else
      i && t.push(u);
  return t;
};
export {
  Fi as AddChange,
  xi as AddIDChange,
  Ri as AddIDChanges,
  k as AddS,
  Vr as AddSBlank,
  aa as AddSNull,
  ha as AddSecondsToDateTimeString,
  Jt as AddressCopy,
  jt as AddressMultiRow,
  Xt as AddressSingleRow,
  Qt as AddressValid,
  fi as ArrayFromStringWS,
  mi as ArrayRange,
  Wi as ArrayToCSVString,
  ei as ArrayToGuidString,
  zi as ArrayToTSVString,
  Hi as ArrayWithIDChanges,
  Jr as AsteriskMatch,
  Wt as AverageNumber,
  $a as AverageNumberNull,
  Qr as BuildPath,
  Ya as ChangeArrayByIDOrUUID,
  Li as ChangeValueChanges,
  lu as ChecksToIIF,
  _a as CleanDivide,
  Ua as CleanDivideNull,
  f as CleanNumber,
  E as CleanNumberNull,
  Nn as CleanNumbers,
  vn as CleanScripts,
  La as CleanSubtractNumbers,
  Ti as CoalesceFalsey,
  Mi as ColorBrightnessHex,
  En as ColorBrightnessRGB,
  Yi as CombineArrayWithIDOrUUIDChanges,
  wi as ConsoleAsyncTime,
  pi as ConsoleColor,
  Va as ConstrainObject,
  Ht as CountDecimalDigits,
  fa as CurrentTimeZone,
  Be as DATE_FORMAT_DATE,
  Xe as DATE_FORMAT_DATE_DISPLAY,
  Tn as DATE_FORMAT_DATE_DISPLAY_DOW,
  Mn as DATE_FORMAT_DATE_DISPLAY_DOW_LONG,
  je as DATE_FORMAT_DATE_DISPLAY_LONG,
  ua as DATE_FORMAT_DATE_TIME,
  oa as DATE_FORMAT_DATE_TIME_DISPLAY,
  la as DATE_FORMAT_DATE_TIME_DISPLAY_DOW,
  ca as DATE_FORMAT_DATE_TIME_DISPLAY_DOW_LONG,
  sa as DATE_FORMAT_DATE_TIME_DISPLAY_LONG,
  te as DATE_FORMAT_TIME_DISPLAY,
  at as DATE_FORMAT_TIME_NO_SECONDS,
  ia as DATE_FORMAT_TIME_SECONDS,
  Gi as DataToCSVExport,
  Ki as DataToCSVExportNoQuotes,
  Ha as DataToCSVString,
  Vi as DataToTabDelim,
  $ as DateAdjustTS,
  L as DateCompare,
  mt as DateComponent,
  cn as DateDayOfWeek,
  q as DateDiff,
  Da as DateDiffComponents,
  Ta as DateDiffLongDescription,
  ka as DateDoWSundayZero,
  me as DateFormat,
  ce as DateFormatAny,
  wn as DateFromWeekNumber,
  tt as DateICS,
  Y as DateISO,
  vt as DateIsBetween,
  It as DateIsWeekend,
  wt as DateMonth,
  A as DateObject,
  b as DateOnly,
  ie as DateOnlyNull,
  p as DateParseTS,
  Mt as DateQuarter,
  Q as DateWeekISONumber,
  ya as DateWeekISONumberNull,
  ft as DateWeekNumber,
  pt as DatesBetween,
  gt as DatesFromWeekNumber,
  va as DatesFromWeekNumberNull,
  Ct as DatesMonth,
  Dt as DatesQuarter,
  ct as DayDiffNoWeekend,
  st as DaysInMonth,
  J as DaysInMonthYear,
  hn as DeepClone,
  xe as DeepEqual,
  Ui as Differences,
  Z as DigitsNth,
  Xn as DisplayNameFromFL,
  Gr as DisplayNameFromObject,
  Ei as DistributeEvenly,
  kt as DoWs,
  At as DurationLongDescription,
  ba as EQuarter,
  Nt as ESTTodayDate,
  kn as ESTTodayDateTimeLabel,
  ra as EStringComparisonResult,
  Pt as EasterDate,
  qr as EllipsesAtMax,
  au as EnumArray,
  iu as EnumKeyFromValue,
  ru as EnumKeyNames,
  tu as EnumKeys,
  ou as EnumValidValue,
  uu as EnumValueFromKey,
  Ka as EnumValues,
  Yt as EqualNumber,
  eu as EvaluateCondition,
  za as EvaluateMath,
  Re as EvaluateString,
  Oi as ExtractPrefixedKeys,
  Ni as ExtractWholeDecimal,
  ja as FindIsActive,
  er as FindIsActiveString,
  cu as FormDataFromObject,
  ai as FormUrlEncoded,
  zr as FormatExternalURL,
  Br as FormatPhoneNumber,
  Hr as FormatPhoneNumberDashes,
  Yr as FormatPhoneNumberDots,
  xr as FormatPhoneNumberE164US,
  Rr as FormatPhoneNumberOld,
  Pr as FormatSSN,
  Wr as FormatTaxID,
  Dn as FormatZip,
  Fa as GenerateUUID,
  yi as GetPropertyValueCaseInsensitive,
  Ln as GetStage,
  mu as GetStageName,
  Vt as GoogleMapsAddressLink,
  Zt as GoogleMapsDirectionsLink,
  Kt as GoogleMapsGPSLink,
  yt as GreaterDate,
  an as GreaterNumber,
  Ia as GreaterNumberNull,
  lt as HHcmmcss,
  Mr as HTMLToText,
  jr as HasAlpha,
  Xr as HasDigits,
  Ft as IANADescription,
  Ie as IANAOffset,
  Lt as IANAZoneAbbr,
  Oa as IANAZoneAbbrNull,
  Sn as ICS,
  vr as IncludesHTML,
  bt as InitialDateMonth,
  Tt as InitialDateQuarter,
  Ci as InvertColorHex,
  Ba as InvertColorRGB,
  ln as IsDateString,
  Je as IsEqual,
  Zi as IsJSON,
  Na as IsNumber,
  x as IsOn,
  _n as IsStage,
  qa as IsStageDevFocused,
  fu as IsStageDevTestFocused,
  Ja as IsStageTestFocused,
  qt as IsValidInputDecimal,
  na as IsVowel,
  xt as IsWholeNumber,
  Ve as JSONParse,
  ti as JSONStringToObject,
  St as LeastDate,
  On as LeastNumber,
  pa as LeastNumberNull,
  Jn as LeftPad,
  da as ManualParse,
  zt as MedianNumber,
  ht as MonthDatesFromDateISOWeeks,
  Le as MonthNames,
  ma as NowISOString,
  Rt as NumberConstrainToIncrement,
  Ea as NumberConstrainToIncrementNull,
  mr as ObjectContainsSearch,
  se as ObjectContainsSearchTerms,
  Qi as ObjectDiffs,
  su as ObjectFromFormData,
  ta as ObjectToFixedFields,
  ri as ObjectToJSONString,
  Pi as ObjectWithChanges,
  nt as ObjectsToFixedFields,
  di as OmitFalsey,
  qe as OmitProperty,
  Ai as OmitUndefined,
  Xa as PagesForRange,
  He as PhoneComponents,
  Si as PickProperty,
  ki as PrefixKeys,
  ji as ProcessMath,
  gi as PropertiesExist,
  hi as PropertiesNotFalsey,
  In as RBGFromHex,
  Kr as RandomKey,
  ea as RandomString,
  or as ReSortOrder,
  Xi as ReduceObjectToOtherKeys,
  pn as RemoveDupProperties,
  qi as RemoveDupPropertiesByID,
  Ji as RemoveDupPropertiesByIDArray,
  Di as RemoveEnding,
  vi as RemoveStarting,
  T as ReplaceAll,
  Bt as ReplaceAllMultiple,
  Dr as ReplaceLinks,
  Qn as RightPad,
  Ze as RoundTo,
  fr as SearchRow,
  on as SearchRows,
  gr as SearchSort,
  Ye as SearchTerms,
  du as SelectBetweenIDs,
  Zr as ShortNumber,
  bi as Sleep,
  rr as SortColumnUpdate,
  tn as SortColumns,
  le as SortCompare,
  Ca as SortCompareDate,
  Ma as SortCompareDateNull,
  Wn as SortCompareNull,
  ir as SortCompares,
  tr as SortIndex,
  Hn as SortIndexNull,
  lr as SortPerArray,
  Gn as SortPerArrayNull,
  ur as SortSplitItems,
  zn as SortSplitItemsNull,
  Vn as SplitNonWhiteSpace,
  Za as Stages,
  et as StringCompares,
  cr as StringContainsSearch,
  Kn as StringContainsSearchTerms,
  nr as StringFindIsActive,
  nu as StringGetSets,
  en as StringHasDateData,
  Cn as StringHasTimeData,
  bn as StringHasTimeZoneData,
  rt as StringIncludesIANA,
  ga as StringIsIANA,
  mn as StringOrNumberEqual,
  ni as StringToByteArray,
  fn as SubsetEqual,
  gn as SubsetFormEqual,
  P as TSDays,
  z as TSHours,
  B as TSMinutes,
  oe as TSMonthsEstimate,
  pe as TSSeconds,
  sn as TSWeeks,
  Fe as TSYearsEstimate,
  sr as TermsToSearch,
  Tr as TextToHTML,
  wa as TimeFloorMinute,
  X as TimeOnly,
  Ot as TimeSeries,
  hu as TimeTrackResolved,
  gu as TimeTracker,
  Ut as TimeZoneOlsons,
  nn as TimeZoneOlsonsAll,
  $t as TimeZoneOlsonsAmerica,
  _t as TimeZoneOlsonsAmericaCommon,
  H as ToArray,
  Ar as ToCamelCase,
  Cr as ToCurrency,
  Or as ToCurrencyBlank,
  Nr as ToCurrencyDash,
  br as ToCurrencyMax,
  v as ToDigits,
  $r as ToDigitsBlank,
  Ur as ToDigitsBlankMax,
  _r as ToDigitsDash,
  Lr as ToDigitsDashMax,
  pr as ToDigitsMax,
  Zn as ToFirstLetterUpper,
  Qe as ToFirstLetterUpperSmart,
  Ee as ToID,
  yr as ToInitials,
  dr as ToKebabCase,
  Sr as ToPascalCase,
  wr as ToPercent,
  Er as ToPercentBlank,
  Ir as ToPercentDash,
  kr as ToPercentMax,
  hr as ToSnakeCase,
  Fr as ToStringArray,
  qn as ToUpperCaseWords,
  j as ToWords,
  Gt as Trunc,
  jn as UCWords,
  yn as UnselectedIDList,
  fe as ValidNumbers,
  ue as WeekDays,
  dt as WeekNumberAdjust,
  Et as WeeksFromLabel,
  Aa as YYYYMMDDHHmmss,
  it as YYYY_MM_DD_HH_mm_ss,
  ot as YYYYsMMsDD,
  ut as YYYYsMMsDDsHHcmmcss,
  ii as ab2str,
  $i as consoleLogTable,
  si as everyAsync,
  ci as filterAsync,
  oi as findAsync,
  Ii as hslRainbow,
  xa as hslShades,
  _i as initialChanges,
  Ra as initialConsoleLogTableDef,
  ar as initialFilterSortPaginator,
  Bi as initialIDChanges,
  Yn as initialSortColumn,
  Pa as isAB,
  F as isNullUndefined,
  li as someAsync,
  ui as str2ab
};
