var W = function(e, t) {
  return W = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (i[a] = n[a]);
  }, W(e, t);
};
function U(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  W(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var E = function() {
  return E = Object.assign || function(t) {
    for (var i, n = 1, a = arguments.length; n < a; n++) {
      i = arguments[n];
      for (var p in i)
        Object.prototype.hasOwnProperty.call(i, p) && (t[p] = i[p]);
    }
    return t;
  }, E.apply(this, arguments);
};
function j(e, t, i) {
  if (i || arguments.length === 2)
    for (var n = 0, a = t.length, p; n < a; n++)
      (p || !(n in t)) && (p || (p = Array.prototype.slice.call(t, 0, n)), p[n] = t[n]);
  return e.concat(p || Array.prototype.slice.call(t));
}
var y;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(y || (y = {}));
var _;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(_ || (_ = {}));
var A;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(A || (A = {}));
function pe(e) {
  return e.type === _.literal;
}
function at(e) {
  return e.type === _.argument;
}
function Oe(e) {
  return e.type === _.number;
}
function Me(e) {
  return e.type === _.date;
}
function Ge(e) {
  return e.type === _.time;
}
function De(e) {
  return e.type === _.select;
}
function ke(e) {
  return e.type === _.plural;
}
function st(e) {
  return e.type === _.pound;
}
function Ue(e) {
  return e.type === _.tag;
}
function Fe(e) {
  return !!(e && typeof e == "object" && e.type === A.number);
}
function q(e) {
  return !!(e && typeof e == "object" && e.type === A.dateTime);
}
var je = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ut = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ht(e) {
  var t = {};
  return e.replace(ut, function(i) {
    var n = i.length;
    switch (i[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "short" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var lt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ft(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(lt).filter(function(f) {
    return f.length > 0;
  }), i = [], n = 0, a = t; n < a.length; n++) {
    var p = a[n], m = p.split("/");
    if (m.length === 0)
      throw new Error("Invalid number skeleton");
    for (var s = m[0], h = m.slice(1), r = 0, o = h; r < o.length; r++) {
      var u = o[r];
      if (u.length === 0)
        throw new Error("Invalid number skeleton");
    }
    i.push({ stem: s, options: h });
  }
  return i;
}
function ct(e) {
  return e.replace(/^(.*?)-/, "");
}
var me = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ze = /^(@+)?(\+|#+)?[rs]?$/g, pt = /(\*)(0+)|(#+)(0+)|(0+)/g, Ve = /^(0+)$/;
function de(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ze, function(i, n, a) {
    return typeof a != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : a === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof a == "string" ? a.length : 0)), "";
  }), t;
}
function Xe(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function mt(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var i = e.slice(0, 2);
    if (i === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : i === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ve.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ge(e) {
  var t = {}, i = Xe(e);
  return i || t;
}
function dt(e) {
  for (var t = {}, i = 0, n = e; i < n.length; i++) {
    var a = n[i];
    switch (a.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = ct(a.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = E(E(E({}, t), { notation: "scientific" }), a.options.reduce(function(h, r) {
          return E(E({}, h), ge(r));
        }, {}));
        continue;
      case "engineering":
        t = E(E(E({}, t), { notation: "engineering" }), a.options.reduce(function(h, r) {
          return E(E({}, h), ge(r));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(a.options[0]);
        continue;
      case "integer-width":
        if (a.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        a.options[0].replace(pt, function(h, r, o, u, f, l) {
          if (r)
            t.minimumIntegerDigits = o.length;
          else {
            if (u && f)
              throw new Error("We currently do not support maximum integer digits");
            if (l)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Ve.test(a.stem)) {
      t.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (me.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(me, function(h, r, o, u, f, l) {
        return o === "*" ? t.minimumFractionDigits = r.length : u && u[0] === "#" ? t.maximumFractionDigits = u.length : f && l ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + l.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), "";
      });
      var p = a.options[0];
      p === "w" ? t = E(E({}, t), { trailingZeroDisplay: "stripIfInteger" }) : p && (t = E(E({}, t), de(p)));
      continue;
    }
    if (ze.test(a.stem)) {
      t = E(E({}, t), de(a.stem));
      continue;
    }
    var m = Xe(a.stem);
    m && (t = E(E({}, t), m));
    var s = mt(a.stem);
    s && (t = E(E({}, t), s));
  }
  return t;
}
var G = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function gt(e, t) {
  for (var i = "", n = 0; n < e.length; n++) {
    var a = e.charAt(n);
    if (a === "j") {
      for (var p = 0; n + 1 < e.length && e.charAt(n + 1) === a; )
        p++, n++;
      var m = 1 + (p & 1), s = p < 2 ? 1 : 3 + (p >> 1), h = "a", r = vt(t);
      for ((r == "H" || r == "k") && (s = 0); s-- > 0; )
        i += h;
      for (; m-- > 0; )
        i = r + i;
    } else
      a === "J" ? i += "H" : i += a;
  }
  return i;
}
function vt(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var i = e.language, n;
  i !== "root" && (n = e.maximize().region);
  var a = G[n || ""] || G[i || ""] || G["".concat(i, "-001")] || G["001"];
  return a[0];
}
var z, bt = new RegExp("^".concat(je.source, "*")), yt = new RegExp("".concat(je.source, "*$"));
function x(e, t) {
  return { start: e, end: t };
}
var xt = !!String.prototype.startsWith, Et = !!String.fromCodePoint, _t = !!Object.fromEntries, St = !!String.prototype.codePointAt, wt = !!String.prototype.trimStart, Tt = !!String.prototype.trimEnd, Ht = !!Number.isSafeInteger, Bt = Ht ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Z = !0;
try {
  var Pt = We("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Z = ((z = Pt.exec("a")) === null || z === void 0 ? void 0 : z[0]) === "a";
} catch {
  Z = !1;
}
var ve = xt ? (
  // Native
  function(t, i, n) {
    return t.startsWith(i, n);
  }
) : (
  // For IE11
  function(t, i, n) {
    return t.slice(n, n + i.length) === i;
  }
), J = Et ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], i = 0; i < arguments.length; i++)
      t[i] = arguments[i];
    for (var n = "", a = t.length, p = 0, m; a > p; ) {
      if (m = t[p++], m > 1114111)
        throw RangeError(m + " is not a valid code point");
      n += m < 65536 ? String.fromCharCode(m) : String.fromCharCode(((m -= 65536) >> 10) + 55296, m % 1024 + 56320);
    }
    return n;
  }
), be = (
  // native
  _t ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var i = {}, n = 0, a = t; n < a.length; n++) {
        var p = a[n], m = p[0], s = p[1];
        i[m] = s;
      }
      return i;
    }
  )
), $e = St ? (
  // Native
  function(t, i) {
    return t.codePointAt(i);
  }
) : (
  // IE 11
  function(t, i) {
    var n = t.length;
    if (!(i < 0 || i >= n)) {
      var a = t.charCodeAt(i), p;
      return a < 55296 || a > 56319 || i + 1 === n || (p = t.charCodeAt(i + 1)) < 56320 || p > 57343 ? a : (a - 55296 << 10) + (p - 56320) + 65536;
    }
  }
), Nt = wt ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(bt, "");
  }
), At = Tt ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(yt, "");
  }
);
function We(e, t) {
  return new RegExp(e, t);
}
var Q;
if (Z) {
  var ye = We("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Q = function(t, i) {
    var n;
    ye.lastIndex = i;
    var a = ye.exec(t);
    return (n = a[1]) !== null && n !== void 0 ? n : "";
  };
} else
  Q = function(t, i) {
    for (var n = []; ; ) {
      var a = $e(t, i);
      if (a === void 0 || qe(a) || Ct(a))
        break;
      n.push(a), i += a >= 65536 ? 2 : 1;
    }
    return J.apply(void 0, n);
  };
var It = (
  /** @class */
  function() {
    function e(t, i) {
      i === void 0 && (i = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!i.ignoreTag, this.locale = i.locale, this.requiresOtherClause = !!i.requiresOtherClause, this.shouldParseSkeletons = !!i.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, i, n) {
      for (var a = []; !this.isEOF(); ) {
        var p = this.char();
        if (p === 123) {
          var m = this.parseArgument(t, n);
          if (m.err)
            return m;
          a.push(m.val);
        } else {
          if (p === 125 && t > 0)
            break;
          if (p === 35 && (i === "plural" || i === "selectordinal")) {
            var s = this.clonePosition();
            this.bump(), a.push({
              type: _.pound,
              location: x(s, this.clonePosition())
            });
          } else if (p === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(y.UNMATCHED_CLOSING_TAG, x(this.clonePosition(), this.clonePosition()));
          } else if (p === 60 && !this.ignoreTag && Y(this.peek() || 0)) {
            var m = this.parseTag(t, i);
            if (m.err)
              return m;
            a.push(m.val);
          } else {
            var m = this.parseLiteral(t, i);
            if (m.err)
              return m;
            a.push(m.val);
          }
        }
      }
      return { val: a, err: null };
    }, e.prototype.parseTag = function(t, i) {
      var n = this.clonePosition();
      this.bump();
      var a = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: _.literal,
            value: "<".concat(a, "/>"),
            location: x(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var p = this.parseMessage(t + 1, i, !0);
        if (p.err)
          return p;
        var m = p.val, s = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Y(this.char()))
            return this.error(y.INVALID_TAG, x(s, this.clonePosition()));
          var h = this.clonePosition(), r = this.parseTagName();
          return a !== r ? this.error(y.UNMATCHED_CLOSING_TAG, x(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: _.tag,
              value: a,
              children: m,
              location: x(n, this.clonePosition())
            },
            err: null
          } : this.error(y.INVALID_TAG, x(s, this.clonePosition())));
        } else
          return this.error(y.UNCLOSED_TAG, x(n, this.clonePosition()));
      } else
        return this.error(y.INVALID_TAG, x(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Lt(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, i) {
      for (var n = this.clonePosition(), a = ""; ; ) {
        var p = this.tryParseQuote(i);
        if (p) {
          a += p;
          continue;
        }
        var m = this.tryParseUnquoted(t, i);
        if (m) {
          a += m;
          continue;
        }
        var s = this.tryParseLeftAngleBracket();
        if (s) {
          a += s;
          continue;
        }
        break;
      }
      var h = x(n, this.clonePosition());
      return {
        val: { type: _.literal, value: a, location: h },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Rt(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var i = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            i.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          i.push(n);
        this.bump();
      }
      return J.apply(void 0, i);
    }, e.prototype.tryParseUnquoted = function(t, i) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (i === "plural" || i === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), J(n));
    }, e.prototype.parseArgument = function(t, i) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(y.EMPTY_ARGUMENT, x(n, this.clonePosition()));
      var a = this.parseIdentifierIfPossible().value;
      if (!a)
        return this.error(y.MALFORMED_ARGUMENT, x(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: _.argument,
              // value does not include the opening and closing braces.
              value: a,
              location: x(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition())) : this.parseArgumentOptions(t, i, a, n);
        default:
          return this.error(y.MALFORMED_ARGUMENT, x(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), i = this.offset(), n = Q(this.message, i), a = i + n.length;
      this.bumpTo(a);
      var p = this.clonePosition(), m = x(t, p);
      return { value: n, location: m };
    }, e.prototype.parseArgumentOptions = function(t, i, n, a) {
      var p, m = this.clonePosition(), s = this.parseIdentifierIfPossible().value, h = this.clonePosition();
      switch (s) {
        case "":
          return this.error(y.EXPECT_ARGUMENT_TYPE, x(m, h));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var r = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var o = this.clonePosition(), u = this.parseSimpleArgStyleIfPossible();
            if (u.err)
              return u;
            var f = At(u.val);
            if (f.length === 0)
              return this.error(y.EXPECT_ARGUMENT_STYLE, x(this.clonePosition(), this.clonePosition()));
            var l = x(o, this.clonePosition());
            r = { style: f, styleLocation: l };
          }
          var c = this.tryParseArgumentClose(a);
          if (c.err)
            return c;
          var d = x(a, this.clonePosition());
          if (r && ve(r == null ? void 0 : r.style, "::", 0)) {
            var g = Nt(r.style.slice(2));
            if (s === "number") {
              var u = this.parseNumberSkeletonFromString(g, r.styleLocation);
              return u.err ? u : {
                val: { type: _.number, value: n, location: d, style: u.val },
                err: null
              };
            } else {
              if (g.length === 0)
                return this.error(y.EXPECT_DATE_TIME_SKELETON, d);
              var v = g;
              this.locale && (v = gt(g, this.locale));
              var f = {
                type: A.dateTime,
                pattern: v,
                location: r.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ht(v) : {}
              }, b = s === "date" ? _.date : _.time;
              return {
                val: { type: b, value: n, location: d, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: s === "number" ? _.number : s === "date" ? _.date : _.time,
              value: n,
              location: d,
              style: (p = r == null ? void 0 : r.style) !== null && p !== void 0 ? p : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var T = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(y.EXPECT_SELECT_ARGUMENT_OPTIONS, x(T, E({}, T)));
          this.bumpSpace();
          var N = this.parseIdentifierIfPossible(), w = 0;
          if (s !== "select" && N.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, x(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var u = this.tryParseDecimalInteger(y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (u.err)
              return u;
            this.bumpSpace(), N = this.parseIdentifierIfPossible(), w = u.val;
          }
          var M = this.tryParsePluralOrSelectOptions(t, s, i, N);
          if (M.err)
            return M;
          var c = this.tryParseArgumentClose(a);
          if (c.err)
            return c;
          var ce = x(a, this.clonePosition());
          return s === "select" ? {
            val: {
              type: _.select,
              value: n,
              options: be(M.val),
              location: ce
            },
            err: null
          } : {
            val: {
              type: _.plural,
              value: n,
              options: be(M.val),
              offset: w,
              pluralType: s === "plural" ? "cardinal" : "ordinal",
              location: ce
            },
            err: null
          };
        }
        default:
          return this.error(y.INVALID_ARGUMENT_TYPE, x(m, h));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, i = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, x(a, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(i.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(i.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, i) {
      var n = [];
      try {
        n = ft(t);
      } catch {
        return this.error(y.INVALID_NUMBER_SKELETON, i);
      }
      return {
        val: {
          type: A.number,
          tokens: n,
          location: i,
          parsedOptions: this.shouldParseSkeletons ? dt(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, i, n, a) {
      for (var p, m = !1, s = [], h = /* @__PURE__ */ new Set(), r = a.value, o = a.location; ; ) {
        if (r.length === 0) {
          var u = this.clonePosition();
          if (i !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(y.EXPECT_PLURAL_ARGUMENT_SELECTOR, y.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            o = x(u, this.clonePosition()), r = this.message.slice(u.offset, this.offset());
          } else
            break;
        }
        if (h.has(r))
          return this.error(i === "select" ? y.DUPLICATE_SELECT_ARGUMENT_SELECTOR : y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, o);
        r === "other" && (m = !0), this.bumpSpace();
        var l = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(i === "select" ? y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, x(this.clonePosition(), this.clonePosition()));
        var c = this.parseMessage(t + 1, i, n);
        if (c.err)
          return c;
        var d = this.tryParseArgumentClose(l);
        if (d.err)
          return d;
        s.push([
          r,
          {
            value: c.val,
            location: x(l, this.clonePosition())
          }
        ]), h.add(r), this.bumpSpace(), p = this.parseIdentifierIfPossible(), r = p.value, o = p.location;
      }
      return s.length === 0 ? this.error(i === "select" ? y.EXPECT_SELECT_ARGUMENT_SELECTOR : y.EXPECT_PLURAL_ARGUMENT_SELECTOR, x(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !m ? this.error(y.MISSING_OTHER_CLAUSE, x(this.clonePosition(), this.clonePosition())) : { val: s, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, i) {
      var n = 1, a = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var p = !1, m = 0; !this.isEOF(); ) {
        var s = this.char();
        if (s >= 48 && s <= 57)
          p = !0, m = m * 10 + (s - 48), this.bump();
        else
          break;
      }
      var h = x(a, this.clonePosition());
      return p ? (m *= n, Bt(m) ? { val: m, err: null } : this.error(i, h)) : this.error(t, h);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var i = $e(this.message, t);
      if (i === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return i;
    }, e.prototype.error = function(t, i) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: i
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (ve(this.message, t, this.offset())) {
        for (var i = 0; i < t.length; i++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var i = this.offset(), n = this.message.indexOf(t, i);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var i = this.offset();
        if (i === t)
          break;
        if (i > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && qe(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), i = this.offset(), n = this.message.charCodeAt(i + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function Y(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Rt(e) {
  return Y(e) || e === 47;
}
function Lt(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function qe(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ct(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function K(e) {
  e.forEach(function(t) {
    if (delete t.location, De(t) || ke(t))
      for (var i in t.options)
        delete t.options[i].location, K(t.options[i].value);
    else
      Oe(t) && Fe(t.style) || (Me(t) || Ge(t)) && q(t.style) ? delete t.style.location : Ue(t) && K(t.children);
  });
}
function Ot(e, t) {
  t === void 0 && (t = {}), t = E({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var i = new It(e, t).parse();
  if (i.err) {
    var n = SyntaxError(y[i.err.kind]);
    throw n.location = i.err.location, n.originalMessage = i.err.message, n;
  }
  return t != null && t.captureLocation || K(i.val), i.val;
}
function V(e, t) {
  var i = t && t.cache ? t.cache : Ft, n = t && t.serializer ? t.serializer : Ut, a = t && t.strategy ? t.strategy : Gt;
  return a(e, {
    cache: i,
    serializer: n
  });
}
function Mt(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Ze(e, t, i, n) {
  var a = Mt(n) ? n : i(n), p = t.get(a);
  return typeof p > "u" && (p = e.call(this, n), t.set(a, p)), p;
}
function Je(e, t, i) {
  var n = Array.prototype.slice.call(arguments, 3), a = i(n), p = t.get(a);
  return typeof p > "u" && (p = e.apply(this, n), t.set(a, p)), p;
}
function te(e, t, i, n, a) {
  return i.bind(t, e, n, a);
}
function Gt(e, t) {
  var i = e.length === 1 ? Ze : Je;
  return te(e, this, i, t.cache.create(), t.serializer);
}
function Dt(e, t) {
  return te(e, this, Je, t.cache.create(), t.serializer);
}
function kt(e, t) {
  return te(e, this, Ze, t.cache.create(), t.serializer);
}
var Ut = function() {
  return JSON.stringify(arguments);
};
function re() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
re.prototype.get = function(e) {
  return this.cache[e];
};
re.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Ft = {
  create: function() {
    return new re();
  }
}, X = {
  variadic: Dt,
  monadic: kt
}, I;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(I || (I = {}));
var F = (
  /** @class */
  function(e) {
    U(t, e);
    function t(i, n, a) {
      var p = e.call(this, i) || this;
      return p.code = n, p.originalMessage = a, p;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), xe = (
  /** @class */
  function(e) {
    U(t, e);
    function t(i, n, a, p) {
      return e.call(this, 'Invalid values for "'.concat(i, '": "').concat(n, '". Options are "').concat(Object.keys(a).join('", "'), '"'), I.INVALID_VALUE, p) || this;
    }
    return t;
  }(F)
), jt = (
  /** @class */
  function(e) {
    U(t, e);
    function t(i, n, a) {
      return e.call(this, 'Value for "'.concat(i, '" must be of type ').concat(n), I.INVALID_VALUE, a) || this;
    }
    return t;
  }(F)
), zt = (
  /** @class */
  function(e) {
    U(t, e);
    function t(i, n) {
      return e.call(this, 'The intl string context variable "'.concat(i, '" was not provided to the string "').concat(n, '"'), I.MISSING_VALUE, n) || this;
    }
    return t;
  }(F)
), S;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(S || (S = {}));
function Vt(e) {
  return e.length < 2 ? e : e.reduce(function(t, i) {
    var n = t[t.length - 1];
    return !n || n.type !== S.literal || i.type !== S.literal ? t.push(i) : n.value += i.value, t;
  }, []);
}
function Xt(e) {
  return typeof e == "function";
}
function D(e, t, i, n, a, p, m) {
  if (e.length === 1 && pe(e[0]))
    return [
      {
        type: S.literal,
        value: e[0].value
      }
    ];
  for (var s = [], h = 0, r = e; h < r.length; h++) {
    var o = r[h];
    if (pe(o)) {
      s.push({
        type: S.literal,
        value: o.value
      });
      continue;
    }
    if (st(o)) {
      typeof p == "number" && s.push({
        type: S.literal,
        value: i.getNumberFormat(t).format(p)
      });
      continue;
    }
    var u = o.value;
    if (!(a && u in a))
      throw new zt(u, m);
    var f = a[u];
    if (at(o)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
        type: typeof f == "string" ? S.literal : S.object,
        value: f
      });
      continue;
    }
    if (Me(o)) {
      var l = typeof o.style == "string" ? n.date[o.style] : q(o.style) ? o.style.parsedOptions : void 0;
      s.push({
        type: S.literal,
        value: i.getDateTimeFormat(t, l).format(f)
      });
      continue;
    }
    if (Ge(o)) {
      var l = typeof o.style == "string" ? n.time[o.style] : q(o.style) ? o.style.parsedOptions : n.time.medium;
      s.push({
        type: S.literal,
        value: i.getDateTimeFormat(t, l).format(f)
      });
      continue;
    }
    if (Oe(o)) {
      var l = typeof o.style == "string" ? n.number[o.style] : Fe(o.style) ? o.style.parsedOptions : void 0;
      l && l.scale && (f = f * (l.scale || 1)), s.push({
        type: S.literal,
        value: i.getNumberFormat(t, l).format(f)
      });
      continue;
    }
    if (Ue(o)) {
      var c = o.children, d = o.value, g = a[d];
      if (!Xt(g))
        throw new jt(d, "function", m);
      var v = D(c, t, i, n, a, p), b = g(v.map(function(w) {
        return w.value;
      }));
      Array.isArray(b) || (b = [b]), s.push.apply(s, b.map(function(w) {
        return {
          type: typeof w == "string" ? S.literal : S.object,
          value: w
        };
      }));
    }
    if (De(o)) {
      var T = o.options[f] || o.options.other;
      if (!T)
        throw new xe(o.value, f, Object.keys(o.options), m);
      s.push.apply(s, D(T.value, t, i, n, a));
      continue;
    }
    if (ke(o)) {
      var T = o.options["=".concat(f)];
      if (!T) {
        if (!Intl.PluralRules)
          throw new F(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, I.MISSING_INTL_API, m);
        var N = i.getPluralRules(t, { type: o.pluralType }).select(f - (o.offset || 0));
        T = o.options[N] || o.options.other;
      }
      if (!T)
        throw new xe(o.value, f, Object.keys(o.options), m);
      s.push.apply(s, D(T.value, t, i, n, a, f - (o.offset || 0)));
      continue;
    }
  }
  return Vt(s);
}
function $t(e, t) {
  return t ? E(E(E({}, e || {}), t || {}), Object.keys(e).reduce(function(i, n) {
    return i[n] = E(E({}, e[n]), t[n] || {}), i;
  }, {})) : e;
}
function Wt(e, t) {
  return t ? Object.keys(e).reduce(function(i, n) {
    return i[n] = $t(e[n], t[n]), i;
  }, E({}, e)) : e;
}
function $(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, i) {
          e[t] = i;
        }
      };
    }
  };
}
function qt(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: V(function() {
      for (var t, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, j([void 0], i, !1)))();
    }, {
      cache: $(e.number),
      strategy: X.variadic
    }),
    getDateTimeFormat: V(function() {
      for (var t, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, j([void 0], i, !1)))();
    }, {
      cache: $(e.dateTime),
      strategy: X.variadic
    }),
    getPluralRules: V(function() {
      for (var t, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, j([void 0], i, !1)))();
    }, {
      cache: $(e.pluralRules),
      strategy: X.variadic
    })
  };
}
var Zt = (
  /** @class */
  function() {
    function e(t, i, n, a) {
      var p = this;
      if (i === void 0 && (i = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(m) {
        var s = p.formatToParts(m);
        if (s.length === 1)
          return s[0].value;
        var h = s.reduce(function(r, o) {
          return !r.length || o.type !== S.literal || typeof r[r.length - 1] != "string" ? r.push(o.value) : r[r.length - 1] += o.value, r;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(m) {
        return D(p.ast, p.locales, p.formatters, p.formats, m, void 0, p.message);
      }, this.resolvedOptions = function() {
        return {
          locale: p.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return p.ast;
      }, this.locales = i, this.resolvedLocale = e.resolveLocale(i), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: a == null ? void 0 : a.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Wt(e.formats, n), this.formatters = a && a.formatters || qt(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var i = Intl.NumberFormat.supportedLocalesOf(t);
      return i.length > 0 ? new Intl.Locale(i[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = Ot, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
), B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Qt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(i, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), i;
}
function k(e) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, k(e);
}
function Yt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ee(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tr(n.key), n);
  }
}
function Kt(e, t, i) {
  return t && Ee(e.prototype, t), i && Ee(e, i), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function er(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tr(e) {
  var t = er(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function H(e, t) {
  var i = Qe(e, t, "get");
  return rr(e, i);
}
function L(e, t, i) {
  var n = Qe(e, t, "set");
  return ir(e, n, i), i;
}
function Qe(e, t, i) {
  if (!t.has(e))
    throw new TypeError("attempted to " + i + " private field on non-instance");
  return t.get(e);
}
function rr(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function ir(e, t, i) {
  if (t.set)
    t.set.call(e, i);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = i;
  }
}
function nr(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function C(e, t, i) {
  nr(e, t), t.set(e, i);
}
var _e = function(t) {
  if (!t)
    return [];
  Array.isArray(t) || (t = [t]);
  for (var i = {}, n = 0; n < t.length; ++n) {
    var a, p = t[n];
    if (p && k(p) === "object" && (p = String(p)), typeof p != "string") {
      var m = "Locales should be strings, ".concat(JSON.stringify(p), " isn't.");
      throw new TypeError(m);
    }
    var s = p.split("-");
    if (!s.every(function(u) {
      return /[a-z0-9]+/i.test(u);
    })) {
      var h = JSON.stringify(p), r = "The locale ".concat(h, " is not a structurally valid BCP 47 language tag.");
      throw new RangeError(r);
    }
    var o = s[0].toLowerCase();
    s[0] = (a = {
      in: "id",
      iw: "he",
      ji: "yi"
    }[o]) !== null && a !== void 0 ? a : o, i[s.join("-")] = !0;
  }
  return Object.keys(i);
};
function or(e) {
  var t = Object.prototype.hasOwnProperty.call(e, "type") && e.type;
  if (!t)
    return "cardinal";
  if (t === "cardinal" || t === "ordinal")
    return t;
  throw new RangeError("Not a valid plural type: " + JSON.stringify(t));
}
function Se(e) {
  switch (k(e)) {
    case "number":
      return e;
    case "bigint":
      throw new TypeError("Cannot convert a BigInt value to a number");
    default:
      return Number(e);
  }
}
function ar(e, t, i, n) {
  var a = function(l) {
    do {
      if (t(l))
        return l;
      l = l.replace(/-?[^-]*$/, "");
    } while (l);
    return null;
  }, p = function(l) {
    for (var c = _e(l), d = 0; d < c.length; ++d) {
      var g = a(c[d]);
      if (g)
        return g;
    }
    var v = new e().resolvedOptions().locale;
    return a(v);
  }, m = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ function() {
    function f() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Yt(this, f), C(this, m, {
        writable: !0,
        value: void 0
      }), C(this, s, {
        writable: !0,
        value: void 0
      }), C(this, h, {
        writable: !0,
        value: void 0
      }), C(this, r, {
        writable: !0,
        value: void 0
      }), C(this, o, {
        writable: !0,
        value: void 0
      }), L(this, m, p(l)), L(this, h, t(H(this, m))), L(this, s, n(H(this, m))), L(this, r, or(c)), L(this, o, new e("en", c));
    }
    return Kt(f, [{
      key: "resolvedOptions",
      value: function() {
        var c = H(this, o).resolvedOptions(), d = c.minimumIntegerDigits, g = c.minimumFractionDigits, v = c.maximumFractionDigits, b = c.minimumSignificantDigits, T = c.maximumSignificantDigits, N = c.roundingPriority, w = {
          locale: H(this, m),
          type: H(this, r),
          minimumIntegerDigits: d,
          minimumFractionDigits: g,
          maximumFractionDigits: v
        };
        return typeof b == "number" && (w.minimumSignificantDigits = b, w.maximumSignificantDigits = T), w.pluralCategories = i(H(this, m), H(this, r) === "ordinal").slice(0), w.roundingPriority = N || "auto", w;
      }
    }, {
      key: "select",
      value: function(c) {
        if (!(this instanceof f))
          throw new TypeError("select() called on incompatible ".concat(this));
        if (typeof c != "number" && (c = Number(c)), !isFinite(c))
          return "other";
        var d = H(this, o).format(Math.abs(c));
        return H(this, h).call(this, d, H(this, r) === "ordinal");
      }
    }, {
      key: "selectRange",
      value: function(c, d) {
        if (!(this instanceof f))
          throw new TypeError("selectRange() called on incompatible ".concat(this));
        if (c === void 0)
          throw new TypeError("start is undefined");
        if (d === void 0)
          throw new TypeError("end is undefined");
        var g = Se(c), v = Se(d);
        if (!isFinite(g))
          throw new RangeError("start must be finite");
        if (!isFinite(v))
          throw new RangeError("end must be finite");
        return H(this, s).call(this, this.select(g), this.select(v));
      }
    }], [{
      key: "supportedLocalesOf",
      value: function(c) {
        return _e(c).filter(a);
      }
    }]), f;
  }();
  return typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u.prototype, Symbol.toStringTag, {
    value: "Intl.PluralRules",
    writable: !1,
    configurable: !0
  }), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
const sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), ur = /* @__PURE__ */ Qt(sr);
var hr = ur;
function lr(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
function ie(e, t) {
  return t.forEach(function(i) {
    i && typeof i != "string" && !Array.isArray(i) && Object.keys(i).forEach(function(n) {
      if (n !== "default" && !(n in e)) {
        var a = Object.getOwnPropertyDescriptor(i, n);
        Object.defineProperty(e, n, a.get ? a : {
          enumerable: !0,
          get: function() {
            return i[n];
          }
        });
      }
    });
  }), Object.freeze(e);
}
var fr = /* @__PURE__ */ lr(hr), ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof B < "u" ? B : typeof self < "u" ? self : {};
function oe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ae = { exports: {} };
(function(e, t) {
  var i = function(r, o) {
    return o ? "other" : r == 1 ? "one" : "other";
  }, n = function(r, o) {
    return o ? "other" : r == 0 || r == 1 ? "one" : "other";
  }, a = function(r, o) {
    return o ? "other" : r >= 0 && r <= 1 ? "one" : "other";
  }, p = function(r, o) {
    var u = String(r).split("."), f = !u[1];
    return o ? "other" : r == 1 && f ? "one" : "other";
  }, m = function(r, o) {
    return "other";
  }, s = function(r, o) {
    return o ? "other" : r == 1 ? "one" : r == 2 ? "two" : "other";
  };
  (function(h, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), e.exports = r;
  })(ne, {
    af: i,
    ak: n,
    am: a,
    an: i,
    ar: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-2);
      return o ? "other" : r == 0 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : l >= 3 && l <= 10 ? "few" : l >= 11 && l <= 99 ? "many" : "other";
    },
    ars: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-2);
      return o ? "other" : r == 0 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : l >= 3 && l <= 10 ? "few" : l >= 11 && l <= 99 ? "many" : "other";
    },
    as: function(r, o) {
      return o ? r == 1 || r == 5 || r == 7 || r == 8 || r == 9 || r == 10 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : r == 6 ? "many" : "other" : r >= 0 && r <= 1 ? "one" : "other";
    },
    asa: i,
    ast: p,
    az: function(r, o) {
      var u = String(r).split("."), f = u[0], l = f.slice(-1), c = f.slice(-2), d = f.slice(-3);
      return o ? l == 1 || l == 2 || l == 5 || l == 7 || l == 8 || c == 20 || c == 50 || c == 70 || c == 80 ? "one" : l == 3 || l == 4 || d == 100 || d == 200 || d == 300 || d == 400 || d == 500 || d == 600 || d == 700 || d == 800 || d == 900 ? "few" : f == 0 || l == 6 || c == 40 || c == 60 || c == 90 ? "many" : "other" : r == 1 ? "one" : "other";
    },
    bal: function(r, o) {
      return r == 1 ? "one" : "other";
    },
    be: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-1), c = f && u[0].slice(-2);
      return o ? (l == 2 || l == 3) && c != 12 && c != 13 ? "few" : "other" : l == 1 && c != 11 ? "one" : l >= 2 && l <= 4 && (c < 12 || c > 14) ? "few" : f && l == 0 || l >= 5 && l <= 9 || c >= 11 && c <= 14 ? "many" : "other";
    },
    bem: i,
    bez: i,
    bg: i,
    bho: n,
    bm: m,
    bn: function(r, o) {
      return o ? r == 1 || r == 5 || r == 7 || r == 8 || r == 9 || r == 10 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : r == 6 ? "many" : "other" : r >= 0 && r <= 1 ? "one" : "other";
    },
    bo: m,
    br: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-1), c = f && u[0].slice(-2), d = f && u[0].slice(-6);
      return o ? "other" : l == 1 && c != 11 && c != 71 && c != 91 ? "one" : l == 2 && c != 12 && c != 72 && c != 92 ? "two" : (l == 3 || l == 4 || l == 9) && (c < 10 || c > 19) && (c < 70 || c > 79) && (c < 90 || c > 99) ? "few" : r != 0 && f && d == 0 ? "many" : "other";
    },
    brx: i,
    bs: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = f.slice(-2), v = l.slice(-1), b = l.slice(-2);
      return o ? "other" : c && d == 1 && g != 11 || v == 1 && b != 11 ? "one" : c && d >= 2 && d <= 4 && (g < 12 || g > 14) || v >= 2 && v <= 4 && (b < 12 || b > 14) ? "few" : "other";
    },
    ca: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? r == 1 || r == 3 ? "one" : r == 2 ? "two" : r == 4 ? "few" : "other" : r == 1 && l ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    ce: i,
    ceb: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = l.slice(-1);
      return o ? "other" : c && (f == 1 || f == 2 || f == 3) || c && d != 4 && d != 6 && d != 9 || !c && g != 4 && g != 6 && g != 9 ? "one" : "other";
    },
    cgg: i,
    chr: i,
    ckb: i,
    cs: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1];
      return o ? "other" : r == 1 && l ? "one" : f >= 2 && f <= 4 && l ? "few" : l ? "other" : "many";
    },
    cy: function(r, o) {
      return o ? r == 0 || r == 7 || r == 8 || r == 9 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : r == 3 || r == 4 ? "few" : r == 5 || r == 6 ? "many" : "other" : r == 0 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : r == 3 ? "few" : r == 6 ? "many" : "other";
    },
    da: function(r, o) {
      var u = String(r).split("."), f = u[0], l = Number(u[0]) == r;
      return o ? "other" : r == 1 || !l && (f == 0 || f == 1) ? "one" : "other";
    },
    de: p,
    doi: a,
    dsb: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-2), g = l.slice(-2);
      return o ? "other" : c && d == 1 || g == 1 ? "one" : c && d == 2 || g == 2 ? "two" : c && (d == 3 || d == 4) || g == 3 || g == 4 ? "few" : "other";
    },
    dv: i,
    dz: m,
    ee: i,
    el: i,
    en: function(r, o) {
      var u = String(r).split("."), f = !u[1], l = Number(u[0]) == r, c = l && u[0].slice(-1), d = l && u[0].slice(-2);
      return o ? c == 1 && d != 11 ? "one" : c == 2 && d != 12 ? "two" : c == 3 && d != 13 ? "few" : "other" : r == 1 && f ? "one" : "other";
    },
    eo: i,
    es: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? "other" : r == 1 ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    et: p,
    eu: i,
    fa: a,
    ff: function(r, o) {
      return o ? "other" : r >= 0 && r < 2 ? "one" : "other";
    },
    fi: p,
    fil: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = l.slice(-1);
      return o ? r == 1 ? "one" : "other" : c && (f == 1 || f == 2 || f == 3) || c && d != 4 && d != 6 && d != 9 || !c && g != 4 && g != 6 && g != 9 ? "one" : "other";
    },
    fo: i,
    fr: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? r == 1 ? "one" : "other" : r >= 0 && r < 2 ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    fur: i,
    fy: p,
    ga: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? r == 1 ? "one" : "other" : r == 1 ? "one" : r == 2 ? "two" : f && r >= 3 && r <= 6 ? "few" : f && r >= 7 && r <= 10 ? "many" : "other";
    },
    gd: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? r == 1 || r == 11 ? "one" : r == 2 || r == 12 ? "two" : r == 3 || r == 13 ? "few" : "other" : r == 1 || r == 11 ? "one" : r == 2 || r == 12 ? "two" : f && r >= 3 && r <= 10 || f && r >= 13 && r <= 19 ? "few" : "other";
    },
    gl: p,
    gsw: i,
    gu: function(r, o) {
      return o ? r == 1 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : r == 6 ? "many" : "other" : r >= 0 && r <= 1 ? "one" : "other";
    },
    guw: n,
    gv: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-1), d = f.slice(-2);
      return o ? "other" : l && c == 1 ? "one" : l && c == 2 ? "two" : l && (d == 0 || d == 20 || d == 40 || d == 60 || d == 80) ? "few" : l ? "other" : "many";
    },
    ha: i,
    haw: i,
    he: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1];
      return o ? "other" : f == 1 && l || f == 0 && !l ? "one" : f == 2 && l ? "two" : "other";
    },
    hi: function(r, o) {
      return o ? r == 1 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : r == 6 ? "many" : "other" : r >= 0 && r <= 1 ? "one" : "other";
    },
    hnj: m,
    hr: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = f.slice(-2), v = l.slice(-1), b = l.slice(-2);
      return o ? "other" : c && d == 1 && g != 11 || v == 1 && b != 11 ? "one" : c && d >= 2 && d <= 4 && (g < 12 || g > 14) || v >= 2 && v <= 4 && (b < 12 || b > 14) ? "few" : "other";
    },
    hsb: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-2), g = l.slice(-2);
      return o ? "other" : c && d == 1 || g == 1 ? "one" : c && d == 2 || g == 2 ? "two" : c && (d == 3 || d == 4) || g == 3 || g == 4 ? "few" : "other";
    },
    hu: function(r, o) {
      return o ? r == 1 || r == 5 ? "one" : "other" : r == 1 ? "one" : "other";
    },
    hy: function(r, o) {
      return o ? r == 1 ? "one" : "other" : r >= 0 && r < 2 ? "one" : "other";
    },
    ia: p,
    id: m,
    ig: m,
    ii: m,
    io: p,
    is: function(r, o) {
      var u = String(r).split("."), f = u[0], l = (u[1] || "").replace(/0+$/, ""), c = Number(u[0]) == r, d = f.slice(-1), g = f.slice(-2);
      return o ? "other" : c && d == 1 && g != 11 || l % 10 == 1 && l % 100 != 11 ? "one" : "other";
    },
    it: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? r == 11 || r == 8 || r == 80 || r == 800 ? "many" : "other" : r == 1 && l ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    iu: s,
    ja: m,
    jbo: m,
    jgo: i,
    jmc: i,
    jv: m,
    jw: m,
    ka: function(r, o) {
      var u = String(r).split("."), f = u[0], l = f.slice(-2);
      return o ? f == 1 ? "one" : f == 0 || l >= 2 && l <= 20 || l == 40 || l == 60 || l == 80 ? "many" : "other" : r == 1 ? "one" : "other";
    },
    kab: function(r, o) {
      return o ? "other" : r >= 0 && r < 2 ? "one" : "other";
    },
    kaj: i,
    kcg: i,
    kde: m,
    kea: m,
    kk: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-1);
      return o ? l == 6 || l == 9 || f && l == 0 && r != 0 ? "many" : "other" : r == 1 ? "one" : "other";
    },
    kkj: i,
    kl: i,
    km: m,
    kn: a,
    ko: m,
    ks: i,
    ksb: i,
    ksh: function(r, o) {
      return o ? "other" : r == 0 ? "zero" : r == 1 ? "one" : "other";
    },
    ku: i,
    kw: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-2), c = f && u[0].slice(-3), d = f && u[0].slice(-5), g = f && u[0].slice(-6);
      return o ? f && r >= 1 && r <= 4 || l >= 1 && l <= 4 || l >= 21 && l <= 24 || l >= 41 && l <= 44 || l >= 61 && l <= 64 || l >= 81 && l <= 84 ? "one" : r == 5 || l == 5 ? "many" : "other" : r == 0 ? "zero" : r == 1 ? "one" : l == 2 || l == 22 || l == 42 || l == 62 || l == 82 || f && c == 0 && (d >= 1e3 && d <= 2e4 || d == 4e4 || d == 6e4 || d == 8e4) || r != 0 && g == 1e5 ? "two" : l == 3 || l == 23 || l == 43 || l == 63 || l == 83 ? "few" : r != 1 && (l == 1 || l == 21 || l == 41 || l == 61 || l == 81) ? "many" : "other";
    },
    ky: i,
    lag: function(r, o) {
      var u = String(r).split("."), f = u[0];
      return o ? "other" : r == 0 ? "zero" : (f == 0 || f == 1) && r != 0 ? "one" : "other";
    },
    lb: i,
    lg: i,
    lij: function(r, o) {
      var u = String(r).split("."), f = !u[1], l = Number(u[0]) == r;
      return o ? r == 11 || r == 8 || l && r >= 80 && r <= 89 || l && r >= 800 && r <= 899 ? "many" : "other" : r == 1 && f ? "one" : "other";
    },
    lkt: m,
    ln: n,
    lo: function(r, o) {
      return o && r == 1 ? "one" : "other";
    },
    lt: function(r, o) {
      var u = String(r).split("."), f = u[1] || "", l = Number(u[0]) == r, c = l && u[0].slice(-1), d = l && u[0].slice(-2);
      return o ? "other" : c == 1 && (d < 11 || d > 19) ? "one" : c >= 2 && c <= 9 && (d < 11 || d > 19) ? "few" : f != 0 ? "many" : "other";
    },
    lv: function(r, o) {
      var u = String(r).split("."), f = u[1] || "", l = f.length, c = Number(u[0]) == r, d = c && u[0].slice(-1), g = c && u[0].slice(-2), v = f.slice(-2), b = f.slice(-1);
      return o ? "other" : c && d == 0 || g >= 11 && g <= 19 || l == 2 && v >= 11 && v <= 19 ? "zero" : d == 1 && g != 11 || l == 2 && b == 1 && v != 11 || l != 2 && b == 1 ? "one" : "other";
    },
    mas: i,
    mg: n,
    mgo: i,
    mk: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = f.slice(-2), v = l.slice(-1), b = l.slice(-2);
      return o ? d == 1 && g != 11 ? "one" : d == 2 && g != 12 ? "two" : (d == 7 || d == 8) && g != 17 && g != 18 ? "many" : "other" : c && d == 1 && g != 11 || v == 1 && b != 11 ? "one" : "other";
    },
    ml: i,
    mn: i,
    mo: function(r, o) {
      var u = String(r).split("."), f = !u[1], l = Number(u[0]) == r, c = l && u[0].slice(-2);
      return o ? r == 1 ? "one" : "other" : r == 1 && f ? "one" : !f || r == 0 || r != 1 && c >= 1 && c <= 19 ? "few" : "other";
    },
    mr: function(r, o) {
      return o ? r == 1 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : "other" : r == 1 ? "one" : "other";
    },
    ms: function(r, o) {
      return o && r == 1 ? "one" : "other";
    },
    mt: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-2);
      return o ? "other" : r == 1 ? "one" : r == 2 ? "two" : r == 0 || l >= 3 && l <= 10 ? "few" : l >= 11 && l <= 19 ? "many" : "other";
    },
    my: m,
    nah: i,
    naq: s,
    nb: i,
    nd: i,
    ne: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? f && r >= 1 && r <= 4 ? "one" : "other" : r == 1 ? "one" : "other";
    },
    nl: p,
    nn: i,
    nnh: i,
    no: i,
    nqo: m,
    nr: i,
    nso: n,
    ny: i,
    nyn: i,
    om: i,
    or: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? r == 1 || r == 5 || f && r >= 7 && r <= 9 ? "one" : r == 2 || r == 3 ? "two" : r == 4 ? "few" : r == 6 ? "many" : "other" : r == 1 ? "one" : "other";
    },
    os: i,
    osa: m,
    pa: n,
    pap: i,
    pcm: a,
    pl: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-1), d = f.slice(-2);
      return o ? "other" : r == 1 && l ? "one" : l && c >= 2 && c <= 4 && (d < 12 || d > 14) ? "few" : l && f != 1 && (c == 0 || c == 1) || l && c >= 5 && c <= 9 || l && d >= 12 && d <= 14 ? "many" : "other";
    },
    prg: function(r, o) {
      var u = String(r).split("."), f = u[1] || "", l = f.length, c = Number(u[0]) == r, d = c && u[0].slice(-1), g = c && u[0].slice(-2), v = f.slice(-2), b = f.slice(-1);
      return o ? "other" : c && d == 0 || g >= 11 && g <= 19 || l == 2 && v >= 11 && v <= 19 ? "zero" : d == 1 && g != 11 || l == 2 && b == 1 && v != 11 || l != 2 && b == 1 ? "one" : "other";
    },
    ps: i,
    pt: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? "other" : f == 0 || f == 1 ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    pt_PT: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? "other" : r == 1 && l ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    rm: i,
    ro: function(r, o) {
      var u = String(r).split("."), f = !u[1], l = Number(u[0]) == r, c = l && u[0].slice(-2);
      return o ? r == 1 ? "one" : "other" : r == 1 && f ? "one" : !f || r == 0 || r != 1 && c >= 1 && c <= 19 ? "few" : "other";
    },
    rof: i,
    ru: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-1), d = f.slice(-2);
      return o ? "other" : l && c == 1 && d != 11 ? "one" : l && c >= 2 && c <= 4 && (d < 12 || d > 14) ? "few" : l && c == 0 || l && c >= 5 && c <= 9 || l && d >= 11 && d <= 14 ? "many" : "other";
    },
    rwk: i,
    sah: m,
    saq: i,
    sat: s,
    sc: function(r, o) {
      var u = String(r).split("."), f = !u[1];
      return o ? r == 11 || r == 8 || r == 80 || r == 800 ? "many" : "other" : r == 1 && f ? "one" : "other";
    },
    scn: function(r, o) {
      var u = String(r).split("."), f = !u[1];
      return o ? r == 11 || r == 8 || r == 80 || r == 800 ? "many" : "other" : r == 1 && f ? "one" : "other";
    },
    sd: i,
    sdh: i,
    se: s,
    seh: i,
    ses: m,
    sg: m,
    sh: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = f.slice(-2), v = l.slice(-1), b = l.slice(-2);
      return o ? "other" : c && d == 1 && g != 11 || v == 1 && b != 11 ? "one" : c && d >= 2 && d <= 4 && (g < 12 || g > 14) || v >= 2 && v <= 4 && (b < 12 || b > 14) ? "few" : "other";
    },
    shi: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? "other" : r >= 0 && r <= 1 ? "one" : f && r >= 2 && r <= 10 ? "few" : "other";
    },
    si: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "";
      return o ? "other" : r == 0 || r == 1 || f == 0 && l == 1 ? "one" : "other";
    },
    sk: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1];
      return o ? "other" : r == 1 && l ? "one" : f >= 2 && f <= 4 && l ? "few" : l ? "other" : "many";
    },
    sl: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-2);
      return o ? "other" : l && c == 1 ? "one" : l && c == 2 ? "two" : l && (c == 3 || c == 4) || !l ? "few" : "other";
    },
    sma: s,
    smi: s,
    smj: s,
    smn: s,
    sms: s,
    sn: i,
    so: i,
    sq: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-1), c = f && u[0].slice(-2);
      return o ? r == 1 ? "one" : l == 4 && c != 14 ? "many" : "other" : r == 1 ? "one" : "other";
    },
    sr: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = f.slice(-2), v = l.slice(-1), b = l.slice(-2);
      return o ? "other" : c && d == 1 && g != 11 || v == 1 && b != 11 ? "one" : c && d >= 2 && d <= 4 && (g < 12 || g > 14) || v >= 2 && v <= 4 && (b < 12 || b > 14) ? "few" : "other";
    },
    ss: i,
    ssy: i,
    st: i,
    su: m,
    sv: function(r, o) {
      var u = String(r).split("."), f = !u[1], l = Number(u[0]) == r, c = l && u[0].slice(-1), d = l && u[0].slice(-2);
      return o ? (c == 1 || c == 2) && d != 11 && d != 12 ? "one" : "other" : r == 1 && f ? "one" : "other";
    },
    sw: p,
    syr: i,
    ta: i,
    te: i,
    teo: i,
    th: m,
    ti: n,
    tig: i,
    tk: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r, l = f && u[0].slice(-1);
      return o ? l == 6 || l == 9 || r == 10 ? "few" : "other" : r == 1 ? "one" : "other";
    },
    tl: function(r, o) {
      var u = String(r).split("."), f = u[0], l = u[1] || "", c = !u[1], d = f.slice(-1), g = l.slice(-1);
      return o ? r == 1 ? "one" : "other" : c && (f == 1 || f == 2 || f == 3) || c && d != 4 && d != 6 && d != 9 || !c && g != 4 && g != 6 && g != 9 ? "one" : "other";
    },
    tn: i,
    to: m,
    tpi: m,
    tr: i,
    ts: i,
    tzm: function(r, o) {
      var u = String(r).split("."), f = Number(u[0]) == r;
      return o ? "other" : r == 0 || r == 1 || f && r >= 11 && r <= 99 ? "one" : "other";
    },
    ug: i,
    uk: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = Number(u[0]) == r, d = c && u[0].slice(-1), g = c && u[0].slice(-2), v = f.slice(-1), b = f.slice(-2);
      return o ? d == 3 && g != 13 ? "few" : "other" : l && v == 1 && b != 11 ? "one" : l && v >= 2 && v <= 4 && (b < 12 || b > 14) ? "few" : l && v == 0 || l && v >= 5 && v <= 9 || l && b >= 11 && b <= 14 ? "many" : "other";
    },
    und: m,
    ur: p,
    uz: i,
    ve: i,
    vec: function(r, o) {
      var u = String(r).split("."), f = u[0], l = !u[1], c = f.slice(-6);
      return o ? r == 11 || r == 8 || r == 80 || r == 800 ? "many" : "other" : r == 1 && l ? "one" : f != 0 && c == 0 && l ? "many" : "other";
    },
    vi: function(r, o) {
      return o && r == 1 ? "one" : "other";
    },
    vo: i,
    vun: i,
    wa: n,
    wae: i,
    wo: m,
    xh: i,
    xog: i,
    yi: p,
    yo: m,
    yue: m,
    zh: m,
    zu: a
  });
})(ae);
var Ye = /* @__PURE__ */ oe(ae.exports), cr = /* @__PURE__ */ ie({
  __proto__: null,
  default: Ye
}, [ae.exports]), se = { exports: {} };
(function(e, t) {
  var i = "zero", n = "one", a = "two", p = "few", m = "many", s = "other", h = {
    cardinal: [n, s],
    ordinal: [s]
  }, r = {
    cardinal: [n, s],
    ordinal: [n, s]
  }, o = {
    cardinal: [s],
    ordinal: [s]
  }, u = {
    cardinal: [n, a, s],
    ordinal: [s]
  };
  (function(f, l) {
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), e.exports = l;
  })(ne, {
    af: h,
    ak: h,
    am: h,
    an: h,
    ar: {
      cardinal: [i, n, a, p, m, s],
      ordinal: [s]
    },
    ars: {
      cardinal: [i, n, a, p, m, s],
      ordinal: [s]
    },
    as: {
      cardinal: [n, s],
      ordinal: [n, a, p, m, s]
    },
    asa: h,
    ast: h,
    az: {
      cardinal: [n, s],
      ordinal: [n, p, m, s]
    },
    bal: r,
    be: {
      cardinal: [n, p, m, s],
      ordinal: [p, s]
    },
    bem: h,
    bez: h,
    bg: h,
    bho: h,
    bm: o,
    bn: {
      cardinal: [n, s],
      ordinal: [n, a, p, m, s]
    },
    bo: o,
    br: {
      cardinal: [n, a, p, m, s],
      ordinal: [s]
    },
    brx: h,
    bs: {
      cardinal: [n, p, s],
      ordinal: [s]
    },
    ca: {
      cardinal: [n, m, s],
      ordinal: [n, a, p, s]
    },
    ce: h,
    ceb: h,
    cgg: h,
    chr: h,
    ckb: h,
    cs: {
      cardinal: [n, p, m, s],
      ordinal: [s]
    },
    cy: {
      cardinal: [i, n, a, p, m, s],
      ordinal: [i, n, a, p, m, s]
    },
    da: h,
    de: h,
    doi: h,
    dsb: {
      cardinal: [n, a, p, s],
      ordinal: [s]
    },
    dv: h,
    dz: o,
    ee: h,
    el: h,
    en: {
      cardinal: [n, s],
      ordinal: [n, a, p, s]
    },
    eo: h,
    es: {
      cardinal: [n, m, s],
      ordinal: [s]
    },
    et: h,
    eu: h,
    fa: h,
    ff: h,
    fi: h,
    fil: r,
    fo: h,
    fr: {
      cardinal: [n, m, s],
      ordinal: [n, s]
    },
    fur: h,
    fy: h,
    ga: {
      cardinal: [n, a, p, m, s],
      ordinal: [n, s]
    },
    gd: {
      cardinal: [n, a, p, s],
      ordinal: [n, a, p, s]
    },
    gl: h,
    gsw: h,
    gu: {
      cardinal: [n, s],
      ordinal: [n, a, p, m, s]
    },
    guw: h,
    gv: {
      cardinal: [n, a, p, m, s],
      ordinal: [s]
    },
    ha: h,
    haw: h,
    he: u,
    hi: {
      cardinal: [n, s],
      ordinal: [n, a, p, m, s]
    },
    hnj: o,
    hr: {
      cardinal: [n, p, s],
      ordinal: [s]
    },
    hsb: {
      cardinal: [n, a, p, s],
      ordinal: [s]
    },
    hu: r,
    hy: r,
    ia: h,
    id: o,
    ig: o,
    ii: o,
    io: h,
    is: h,
    it: {
      cardinal: [n, m, s],
      ordinal: [m, s]
    },
    iu: u,
    ja: o,
    jbo: o,
    jgo: h,
    jmc: h,
    jv: o,
    jw: o,
    ka: {
      cardinal: [n, s],
      ordinal: [n, m, s]
    },
    kab: h,
    kaj: h,
    kcg: h,
    kde: o,
    kea: o,
    kk: {
      cardinal: [n, s],
      ordinal: [m, s]
    },
    kkj: h,
    kl: h,
    km: o,
    kn: h,
    ko: o,
    ks: h,
    ksb: h,
    ksh: {
      cardinal: [i, n, s],
      ordinal: [s]
    },
    ku: h,
    kw: {
      cardinal: [i, n, a, p, m, s],
      ordinal: [n, m, s]
    },
    ky: h,
    lag: {
      cardinal: [i, n, s],
      ordinal: [s]
    },
    lb: h,
    lg: h,
    lij: {
      cardinal: [n, s],
      ordinal: [m, s]
    },
    lkt: o,
    ln: h,
    lo: {
      cardinal: [s],
      ordinal: [n, s]
    },
    lt: {
      cardinal: [n, p, m, s],
      ordinal: [s]
    },
    lv: {
      cardinal: [i, n, s],
      ordinal: [s]
    },
    mas: h,
    mg: h,
    mgo: h,
    mk: {
      cardinal: [n, s],
      ordinal: [n, a, m, s]
    },
    ml: h,
    mn: h,
    mo: {
      cardinal: [n, p, s],
      ordinal: [n, s]
    },
    mr: {
      cardinal: [n, s],
      ordinal: [n, a, p, s]
    },
    ms: {
      cardinal: [s],
      ordinal: [n, s]
    },
    mt: {
      cardinal: [n, a, p, m, s],
      ordinal: [s]
    },
    my: o,
    nah: h,
    naq: u,
    nb: h,
    nd: h,
    ne: r,
    nl: h,
    nn: h,
    nnh: h,
    no: h,
    nqo: o,
    nr: h,
    nso: h,
    ny: h,
    nyn: h,
    om: h,
    or: {
      cardinal: [n, s],
      ordinal: [n, a, p, m, s]
    },
    os: h,
    osa: o,
    pa: h,
    pap: h,
    pcm: h,
    pl: {
      cardinal: [n, p, m, s],
      ordinal: [s]
    },
    prg: {
      cardinal: [i, n, s],
      ordinal: [s]
    },
    ps: h,
    pt: {
      cardinal: [n, m, s],
      ordinal: [s]
    },
    pt_PT: {
      cardinal: [n, m, s],
      ordinal: [s]
    },
    rm: h,
    ro: {
      cardinal: [n, p, s],
      ordinal: [n, s]
    },
    rof: h,
    ru: {
      cardinal: [n, p, m, s],
      ordinal: [s]
    },
    rwk: h,
    sah: o,
    saq: h,
    sat: u,
    sc: {
      cardinal: [n, s],
      ordinal: [m, s]
    },
    scn: {
      cardinal: [n, s],
      ordinal: [m, s]
    },
    sd: h,
    sdh: h,
    se: u,
    seh: h,
    ses: o,
    sg: o,
    sh: {
      cardinal: [n, p, s],
      ordinal: [s]
    },
    shi: {
      cardinal: [n, p, s],
      ordinal: [s]
    },
    si: h,
    sk: {
      cardinal: [n, p, m, s],
      ordinal: [s]
    },
    sl: {
      cardinal: [n, a, p, s],
      ordinal: [s]
    },
    sma: u,
    smi: u,
    smj: u,
    smn: u,
    sms: u,
    sn: h,
    so: h,
    sq: {
      cardinal: [n, s],
      ordinal: [n, m, s]
    },
    sr: {
      cardinal: [n, p, s],
      ordinal: [s]
    },
    ss: h,
    ssy: h,
    st: h,
    su: o,
    sv: r,
    sw: h,
    syr: h,
    ta: h,
    te: h,
    teo: h,
    th: o,
    ti: h,
    tig: h,
    tk: {
      cardinal: [n, s],
      ordinal: [p, s]
    },
    tl: r,
    tn: h,
    to: o,
    tpi: o,
    tr: h,
    ts: h,
    tzm: h,
    ug: h,
    uk: {
      cardinal: [n, p, m, s],
      ordinal: [p, s]
    },
    und: o,
    ur: h,
    uz: h,
    ve: h,
    vec: {
      cardinal: [n, m, s],
      ordinal: [m, s]
    },
    vi: {
      cardinal: [s],
      ordinal: [n, s]
    },
    vo: h,
    vun: h,
    wa: h,
    wae: h,
    wo: o,
    xh: h,
    xog: h,
    yi: h,
    yo: o,
    yue: o,
    zh: o,
    zu: h
  });
})(se);
var Ke = /* @__PURE__ */ oe(se.exports), pr = /* @__PURE__ */ ie({
  __proto__: null,
  default: Ke
}, [se.exports]), ue = { exports: {} };
(function(e, t) {
  var i = function(m, s) {
    return "other";
  }, n = function(m, s) {
    return m === "other" && s === "one" ? "one" : "other";
  }, a = function(m, s) {
    return s || "other";
  };
  (function(p, m) {
    Object.defineProperty(m, "__esModule", {
      value: !0
    }), e.exports = m;
  })(ne, {
    af: i,
    ak: n,
    am: a,
    an: i,
    ar: function(m, s) {
      return s === "few" ? "few" : s === "many" ? "many" : m === "zero" && s === "one" || m === "zero" && s === "two" ? "zero" : "other";
    },
    as: a,
    az: a,
    be: a,
    bg: i,
    bn: a,
    bs: a,
    ca: i,
    cs: a,
    cy: a,
    da: a,
    de: a,
    el: a,
    en: i,
    es: i,
    et: i,
    eu: i,
    fa: n,
    fi: i,
    fil: a,
    fr: a,
    ga: a,
    gl: a,
    gsw: a,
    gu: a,
    he: i,
    hi: a,
    hr: a,
    hu: a,
    hy: a,
    ia: i,
    id: i,
    io: i,
    is: a,
    it: a,
    ja: i,
    ka: function(m, s) {
      return m || "other";
    },
    kk: a,
    km: i,
    kn: a,
    ko: i,
    ky: a,
    lij: a,
    lo: i,
    lt: a,
    lv: function(m, s) {
      return s === "one" ? "one" : "other";
    },
    mk: i,
    ml: a,
    mn: a,
    mr: a,
    ms: i,
    my: i,
    nb: i,
    ne: a,
    nl: a,
    no: i,
    or: n,
    pa: a,
    pcm: i,
    pl: a,
    ps: a,
    pt: a,
    ro: function(m, s) {
      return s === "few" || s === "one" ? "few" : "other";
    },
    ru: a,
    sc: a,
    scn: a,
    sd: n,
    si: function(m, s) {
      return m === "one" && s === "one" ? "one" : "other";
    },
    sk: a,
    sl: function(m, s) {
      return s === "few" || s === "one" ? "few" : s === "two" ? "two" : "other";
    },
    sq: a,
    sr: a,
    sv: i,
    sw: a,
    ta: a,
    te: a,
    th: i,
    tk: a,
    tr: a,
    ug: a,
    uk: a,
    ur: i,
    uz: a,
    vi: i,
    yue: i,
    zh: i,
    zu: a
  });
})(ue);
var et = /* @__PURE__ */ oe(ue.exports), mr = /* @__PURE__ */ ie({
  __proto__: null,
  default: et
}, [ue.exports]), dr = Ye || cr, gr = Ke || pr, vr = et || mr, he = function(t) {
  return t === "pt-PT" ? "pt_PT" : t;
}, br = function(t) {
  return dr[he(t)];
}, yr = function(t, i) {
  return gr[he(t)][i ? "ordinal" : "cardinal"];
}, xr = function(t) {
  return vr[he(t)];
}, Er = fr.default(Intl.NumberFormat, br, yr, xr), _r = Er, Sr = _r;
function wr(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var P = /* @__PURE__ */ wr(Sr);
if (typeof Intl > "u")
  typeof B < "u" ? B.Intl = {
    PluralRules: P.default
  } : typeof window < "u" ? window.Intl = {
    PluralRules: P.default
  } : B.Intl = {
    PluralRules: P.default
  }, P.default.polyfill = !0;
else if (!Intl.PluralRules || !Intl.PluralRules.prototype.selectRange)
  Intl.PluralRules = P.default, P.default.polyfill = !0;
else {
  var we = ["en", "es", "ru", "zh"], Tr = Intl.PluralRules.supportedLocalesOf(we);
  Tr.length < we.length && (Intl.PluralRules = P.default, P.default.polyfill = !0);
}
var Hr = typeof B == "object" && B && B.Object === Object && B, Br = Hr, Pr = Br, Nr = typeof self == "object" && self && self.Object === Object && self, Ar = Pr || Nr || Function("return this")(), Ir = Ar, Rr = Ir, Lr = Rr.Symbol, le = Lr;
function Cr(e, t) {
  for (var i = -1, n = e == null ? 0 : e.length, a = Array(n); ++i < n; )
    a[i] = t(e[i], i, e);
  return a;
}
var Or = Cr, Mr = Array.isArray, Gr = Mr, Te = le, tt = Object.prototype, Dr = tt.hasOwnProperty, kr = tt.toString, O = Te ? Te.toStringTag : void 0;
function Ur(e) {
  var t = Dr.call(e, O), i = e[O];
  try {
    e[O] = void 0;
    var n = !0;
  } catch {
  }
  var a = kr.call(e);
  return n && (t ? e[O] = i : delete e[O]), a;
}
var Fr = Ur, jr = Object.prototype, zr = jr.toString;
function Vr(e) {
  return zr.call(e);
}
var Xr = Vr, He = le, $r = Fr, Wr = Xr, qr = "[object Null]", Zr = "[object Undefined]", Be = He ? He.toStringTag : void 0;
function Jr(e) {
  return e == null ? e === void 0 ? Zr : qr : Be && Be in Object(e) ? $r(e) : Wr(e);
}
var Qr = Jr;
function Yr(e) {
  return e != null && typeof e == "object";
}
var Kr = Yr, ei = Qr, ti = Kr, ri = "[object Symbol]";
function ii(e) {
  return typeof e == "symbol" || ti(e) && ei(e) == ri;
}
var ni = ii, Pe = le, oi = Or, ai = Gr, si = ni, ui = 1 / 0, Ne = Pe ? Pe.prototype : void 0, Ae = Ne ? Ne.toString : void 0;
function rt(e) {
  if (typeof e == "string")
    return e;
  if (ai(e))
    return oi(e, rt) + "";
  if (si(e))
    return Ae ? Ae.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ui ? "-0" : t;
}
var hi = rt, li = hi;
function fi(e) {
  return e == null ? "" : li(e);
}
var ci = fi;
function pi(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var mi = pi, di = mi, gi = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, vi = di(gi), bi = vi, yi = ci, xi = bi, it = /&(?:amp|lt|gt|quot|#39);/g, Ei = RegExp(it.source);
function _i(e) {
  return e = yi(e), e && Ei.test(e) ? e.replace(it, xi) : e;
}
var Si = _i;
const wi = /* @__PURE__ */ Jt(Si), Ti = { en: { "notification.favourite": "{name} liked your post", "notification.follow": "{name} followed you", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name} mentioned you", "notification.reblog": "{name} reposted your post", "notification.poll": "A poll you have voted in has ended", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name} sent you a message", "notification.pleroma:emoji_reaction": "{name} reacted to your post", "status.show_more": "Show more", "status.reblog": "Repost", "status.favourite": "Like", "notifications.group": "{count, plural, one {# notification} other {# notifications}}" }, id: { "notification.favourite": "{name} menyukai status anda", "notification.follow": "{name} mengikuti anda", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name} menyebut Anda", "notification.reblog": "{name} mem-boost status anda", "notification.poll": "Japat yang Anda ikuti telah berakhir", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name} sent you a message", "notification.pleroma:emoji_reaction": "{name} reacted to your post", "status.show_more": "Show more", "status.reblog": "Repost", "status.favourite": "Difavoritkan", "notifications.group": "{count} notifikasi" }, ja: { "notification.favourite": "{name}さんがあなたの投稿をお気に入りに登録しました", "notification.follow": "{name}さんにフォローされました", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name}さんがあなたに返信しました", "notification.reblog": "{name}さんがあなたの投稿をリピートしました", "notification.poll": "アンケートが終了しました", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name}さんがあなたにメッセージを送りました", "notification.pleroma:emoji_reaction": "{name}さんがあなたの投稿に反応しました", "status.show_more": "Show more", "status.reblog": "リピート", "status.favourite": "お気に入り", "notifications.group": "{count} 件の通知" } }, Hi = 5, Ie = "tag", Re = (e) => self.registration.getNotifications().then((t) => {
  if (t.length >= Hi) {
    const i = {
      title: R("notifications.group", e.data.preferred_locale, { count: t.length + 1 }),
      body: t.map((n) => n.title).join(`
`),
      tag: Ie,
      data: {
        url: new URL("/notifications", self.location.href).href,
        count: t.length + 1,
        preferred_locale: e.data.preferred_locale
      }
    };
    return t.forEach((n) => n.close()), self.registration.showNotification(i.title, i);
  } else if (t.length === 1 && t[0].tag === Ie) {
    const i = fe(t[0]), n = (i.data.count || 0) + 1;
    return i.title = R("notifications.group", e.data.preferred_locale, { count: n }), i.body = `${e.title}
${i.body}`, i.data = { ...i.data, count: n }, self.registration.showNotification(i.title, i);
  }
  return self.registration.showNotification(e.title, e);
}), ee = (e, t, i) => {
  const n = new URL(e, self.location.href).href;
  return fetch(n, {
    headers: {
      Authorization: `Bearer ${i}`,
      "Content-Type": "application/json"
    },
    method: t,
    credentials: "include"
  }).then((a) => {
    if (a.ok)
      return a;
    throw new Error(String(a.status));
  }).then((a) => a.json());
}, fe = (e) => {
  const t = {};
  let i;
  for (i in e)
    t[i] = e[i];
  return t;
}, R = (e, t, i = {}) => new Zt(Ti[t][e], t).format(i), Le = (e) => wi(e.replace(/<br\s*\/?>/g, `
`).replace(/<\/p><[^>]*>/g, `

`).replace(/<[^>]*>/g, "")), Bi = (e) => {
  if (!e.data) {
    console.error("An empty web push event was received.", { event: e });
    return;
  }
  const { access_token: t, notification_id: i, preferred_locale: n, title: a, body: p, icon: m } = e.data.json();
  e.waitUntil(
    ee(`/api/v1/notifications/${i}`, "get", t).then((s) => {
      var r, o, u, f, l, c, d, g;
      const h = {
        title: R(`notification.${s.type}`, n, { name: s.account.display_name.length > 0 ? s.account.display_name : s.account.username }),
        body: s.status && Le(s.status.content),
        icon: s.account.avatar_static,
        timestamp: s.created_at && Number(new Date(s.created_at)),
        tag: s.id,
        image: (o = (r = s.status) == null ? void 0 : r.media_attachments[0]) == null ? void 0 : o.preview_url,
        data: { access_token: t, preferred_locale: n, id: s.status ? s.status.id : s.account.id, url: s.status ? `/@${s.account.acct}/posts/${s.status.id}` : `/@${s.account.acct}` }
      };
      return (u = s.status) != null && u.spoiler_text || (f = s.status) != null && f.sensitive ? (h.data.hiddenBody = Le((l = s.status) == null ? void 0 : l.content), h.data.hiddenImage = (d = (c = s.status) == null ? void 0 : c.media_attachments[0]) == null ? void 0 : d.preview_url, (g = s.status) != null && g.spoiler_text && (h.body = s.status.spoiler_text), h.image = void 0, h.actions = [Pi(n)]) : s.type === "mention" && (h.actions = [nt(n), ot(n)]), Re(h);
    }).catch(() => Re({
      title: a,
      body: p,
      icon: m,
      tag: i,
      timestamp: Number(/* @__PURE__ */ new Date()),
      data: { access_token: t, preferred_locale: n, url: "/notifications" }
    }))
  );
}, Pi = (e) => ({
  action: "expand",
  icon: `/${require("../../assets/images/web-push/web-push-icon_expand.png")}`,
  title: R("status.show_more", e)
}), nt = (e) => ({
  action: "reblog",
  icon: `/${require("../../assets/images/web-push/web-push-icon_reblog.png")}`,
  title: R("status.reblog", e)
}), ot = (e) => ({
  action: "favourite",
  icon: `/${require("../../assets/images/web-push/web-push-icon_favourite.png")}`,
  title: R("status.favourite", e)
}), Ni = (e) => {
  const t = e.find((n) => n.focused), i = e.find((n) => n.visibilityState === "visible");
  return t || i || e[0];
}, Ai = (e) => {
  const t = fe(e);
  return t.body = t.data.hiddenBody, t.image = t.data.hiddenImage, t.actions = [nt(e.data.preferred_locale), ot(e.data.preferred_locale)], self.registration.showNotification(t.title, t);
}, Ce = (e, t) => {
  var n;
  const i = fe(e);
  return i.actions = (n = i.actions) == null ? void 0 : n.filter((a) => a.action !== t), self.registration.showNotification(i.title, i);
}, Ii = (e) => self.clients.matchAll({ type: "window" }).then((t) => t.length === 0 ? self.clients.openWindow(e) : Ni(t).navigate(e).then((n) => n == null ? void 0 : n.focus())), Ri = (e) => {
  const t = new Promise((i, n) => {
    if (e.action)
      if (e.action === "expand")
        i(Ai(e.notification));
      else if (e.action === "reblog") {
        const { data: a } = e.notification;
        i(ee(`/api/v1/statuses/${a.id}/reblog`, "post", a.access_token).then(() => Ce(e.notification, "reblog")));
      } else if (e.action === "favourite") {
        const { data: a } = e.notification;
        i(ee(`/api/v1/statuses/${a.id}/favourite`, "post", a.access_token).then(() => Ce(e.notification, "favourite")));
      } else
        n(`Unknown action: ${e.action}`);
    else
      e.notification.close(), i(Ii(e.notification.data.url));
  });
  e.waitUntil(t);
};
self.addEventListener("push", Bi);
self.addEventListener("notificationclick", Ri);
