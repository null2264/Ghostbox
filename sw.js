var $ = function(e, r) {
  return $ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var f in n)
      Object.prototype.hasOwnProperty.call(n, f) && (i[f] = n[f]);
  }, $(e, r);
};
function G(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  $(e, r);
  function i() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
}
var E = function() {
  return E = Object.assign || function(r) {
    for (var i, n = 1, f = arguments.length; n < f; n++) {
      i = arguments[n];
      for (var c in i)
        Object.prototype.hasOwnProperty.call(i, c) && (r[c] = i[c]);
    }
    return r;
  }, E.apply(this, arguments);
};
function k(e, r, i) {
  if (i || arguments.length === 2)
    for (var n = 0, f = r.length, c; n < f; n++)
      (c || !(n in r)) && (c || (c = Array.prototype.slice.call(r, 0, n)), c[n] = r[n]);
  return e.concat(c || Array.prototype.slice.call(r));
}
var y;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(y || (y = {}));
var _;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(_ || (_ = {}));
var B;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(B || (B = {}));
function ae(e) {
  return e.type === _.literal;
}
function tt(e) {
  return e.type === _.argument;
}
function Be(e) {
  return e.type === _.number;
}
function Ae(e) {
  return e.type === _.date;
}
function Pe(e) {
  return e.type === _.time;
}
function Ie(e) {
  return e.type === _.select;
}
function Le(e) {
  return e.type === _.plural;
}
function rt(e) {
  return e.type === _.pound;
}
function Ce(e) {
  return e.type === _.tag;
}
function Oe(e) {
  return !!(e && typeof e == "object" && e.type === B.number);
}
function X(e) {
  return !!(e && typeof e == "object" && e.type === B.dateTime);
}
var Re = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, it = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function nt(e) {
  var r = {};
  return e.replace(it, function(i) {
    var n = i.length;
    switch (i[0]) {
      case "G":
        r.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        r.year = n === 2 ? "2-digit" : "numeric";
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
        r.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        r.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        r.weekday = n === 4 ? "short" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        r.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        r.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        r.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        r.hourCycle = "h12", r.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        r.hourCycle = "h23", r.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        r.hourCycle = "h11", r.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        r.hourCycle = "h24", r.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        r.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        r.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        r.timeZoneName = n < 4 ? "short" : "long";
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
  }), r;
}
var ot = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function at(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var r = e.split(ot).filter(function(h) {
    return h.length > 0;
  }), i = [], n = 0, f = r; n < f.length; n++) {
    var c = f[n], p = c.split("/");
    if (p.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = p[0], o = p.slice(1), t = 0, s = o; t < s.length; t++) {
      var a = s[t];
      if (a.length === 0)
        throw new Error("Invalid number skeleton");
    }
    i.push({ stem: u, options: o });
  }
  return i;
}
function st(e) {
  return e.replace(/^(.*?)-/, "");
}
var se = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, De = /^(@+)?(\+|#+)?[rs]?$/g, ut = /(\*)(0+)|(#+)(0+)|(0+)/g, Me = /^(0+)$/;
function ue(e) {
  var r = {};
  return e[e.length - 1] === "r" ? r.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (r.roundingPriority = "lessPrecision"), e.replace(De, function(i, n, f) {
    return typeof f != "string" ? (r.minimumSignificantDigits = n.length, r.maximumSignificantDigits = n.length) : f === "+" ? r.minimumSignificantDigits = n.length : n[0] === "#" ? r.maximumSignificantDigits = n.length : (r.minimumSignificantDigits = n.length, r.maximumSignificantDigits = n.length + (typeof f == "string" ? f.length : 0)), "";
  }), r;
}
function Ge(e) {
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
function ht(e) {
  var r;
  if (e[0] === "E" && e[1] === "E" ? (r = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (r = {
    notation: "scientific"
  }, e = e.slice(1)), r) {
    var i = e.slice(0, 2);
    if (i === "+!" ? (r.signDisplay = "always", e = e.slice(2)) : i === "+?" && (r.signDisplay = "exceptZero", e = e.slice(2)), !Me.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    r.minimumIntegerDigits = e.length;
  }
  return r;
}
function he(e) {
  var r = {}, i = Ge(e);
  return i || r;
}
function lt(e) {
  for (var r = {}, i = 0, n = e; i < n.length; i++) {
    var f = n[i];
    switch (f.stem) {
      case "percent":
      case "%":
        r.style = "percent";
        continue;
      case "%x100":
        r.style = "percent", r.scale = 100;
        continue;
      case "currency":
        r.style = "currency", r.currency = f.options[0];
        continue;
      case "group-off":
      case ",_":
        r.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        r.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        r.style = "unit", r.unit = st(f.options[0]);
        continue;
      case "compact-short":
      case "K":
        r.notation = "compact", r.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        r.notation = "compact", r.compactDisplay = "long";
        continue;
      case "scientific":
        r = E(E(E({}, r), { notation: "scientific" }), f.options.reduce(function(o, t) {
          return E(E({}, o), he(t));
        }, {}));
        continue;
      case "engineering":
        r = E(E(E({}, r), { notation: "engineering" }), f.options.reduce(function(o, t) {
          return E(E({}, o), he(t));
        }, {}));
        continue;
      case "notation-simple":
        r.notation = "standard";
        continue;
      case "unit-width-narrow":
        r.currencyDisplay = "narrowSymbol", r.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        r.currencyDisplay = "code", r.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        r.currencyDisplay = "name", r.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        r.currencyDisplay = "symbol";
        continue;
      case "scale":
        r.scale = parseFloat(f.options[0]);
        continue;
      case "integer-width":
        if (f.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        f.options[0].replace(ut, function(o, t, s, a, h, l) {
          if (t)
            r.minimumIntegerDigits = s.length;
          else {
            if (a && h)
              throw new Error("We currently do not support maximum integer digits");
            if (l)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Me.test(f.stem)) {
      r.minimumIntegerDigits = f.stem.length;
      continue;
    }
    if (se.test(f.stem)) {
      if (f.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      f.stem.replace(se, function(o, t, s, a, h, l) {
        return s === "*" ? r.minimumFractionDigits = t.length : a && a[0] === "#" ? r.maximumFractionDigits = a.length : h && l ? (r.minimumFractionDigits = h.length, r.maximumFractionDigits = h.length + l.length) : (r.minimumFractionDigits = t.length, r.maximumFractionDigits = t.length), "";
      });
      var c = f.options[0];
      c === "w" ? r = E(E({}, r), { trailingZeroDisplay: "stripIfInteger" }) : c && (r = E(E({}, r), ue(c)));
      continue;
    }
    if (De.test(f.stem)) {
      r = E(E({}, r), ue(f.stem));
      continue;
    }
    var p = Ge(f.stem);
    p && (r = E(E({}, r), p));
    var u = ht(f.stem);
    u && (r = E(E({}, r), u));
  }
  return r;
}
var O = {
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
function ft(e, r) {
  for (var i = "", n = 0; n < e.length; n++) {
    var f = e.charAt(n);
    if (f === "j") {
      for (var c = 0; n + 1 < e.length && e.charAt(n + 1) === f; )
        c++, n++;
      var p = 1 + (c & 1), u = c < 2 ? 1 : 3 + (c >> 1), o = "a", t = ct(r);
      for ((t == "H" || t == "k") && (u = 0); u-- > 0; )
        i += o;
      for (; p-- > 0; )
        i = t + i;
    } else
      f === "J" ? i += "H" : i += f;
  }
  return i;
}
function ct(e) {
  var r = e.hourCycle;
  if (r === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (r = e.hourCycles[0]), r)
    switch (r) {
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
  var f = O[n || ""] || O[i || ""] || O["".concat(i, "-001")] || O["001"];
  return f[0];
}
var F, mt = new RegExp("^".concat(Re.source, "*")), pt = new RegExp("".concat(Re.source, "*$"));
function x(e, r) {
  return { start: e, end: r };
}
var gt = !!String.prototype.startsWith, dt = !!String.fromCodePoint, bt = !!Object.fromEntries, vt = !!String.prototype.codePointAt, yt = !!String.prototype.trimStart, xt = !!String.prototype.trimEnd, Et = !!Number.isSafeInteger, _t = Et ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, q = !0;
try {
  var St = ke("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  q = ((F = St.exec("a")) === null || F === void 0 ? void 0 : F[0]) === "a";
} catch {
  q = !1;
}
var le = gt ? (
  // Native
  function(r, i, n) {
    return r.startsWith(i, n);
  }
) : (
  // For IE11
  function(r, i, n) {
    return r.slice(n, n + i.length) === i;
  }
), W = dt ? String.fromCodePoint : (
  // IE11
  function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    for (var n = "", f = r.length, c = 0, p; f > c; ) {
      if (p = r[c++], p > 1114111)
        throw RangeError(p + " is not a valid code point");
      n += p < 65536 ? String.fromCharCode(p) : String.fromCharCode(((p -= 65536) >> 10) + 55296, p % 1024 + 56320);
    }
    return n;
  }
), fe = (
  // native
  bt ? Object.fromEntries : (
    // Ponyfill
    function(r) {
      for (var i = {}, n = 0, f = r; n < f.length; n++) {
        var c = f[n], p = c[0], u = c[1];
        i[p] = u;
      }
      return i;
    }
  )
), Ue = vt ? (
  // Native
  function(r, i) {
    return r.codePointAt(i);
  }
) : (
  // IE 11
  function(r, i) {
    var n = r.length;
    if (!(i < 0 || i >= n)) {
      var f = r.charCodeAt(i), c;
      return f < 55296 || f > 56319 || i + 1 === n || (c = r.charCodeAt(i + 1)) < 56320 || c > 57343 ? f : (f - 55296 << 10) + (c - 56320) + 65536;
    }
  }
), Tt = yt ? (
  // Native
  function(r) {
    return r.trimStart();
  }
) : (
  // Ponyfill
  function(r) {
    return r.replace(mt, "");
  }
), wt = xt ? (
  // Native
  function(r) {
    return r.trimEnd();
  }
) : (
  // Ponyfill
  function(r) {
    return r.replace(pt, "");
  }
);
function ke(e, r) {
  return new RegExp(e, r);
}
var Z;
if (q) {
  var ce = ke("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Z = function(r, i) {
    var n;
    ce.lastIndex = i;
    var f = ce.exec(r);
    return (n = f[1]) !== null && n !== void 0 ? n : "";
  };
} else
  Z = function(r, i) {
    for (var n = []; ; ) {
      var f = Ue(r, i);
      if (f === void 0 || Fe(f) || At(f))
        break;
      n.push(f), i += f >= 65536 ? 2 : 1;
    }
    return W.apply(void 0, n);
  };
var Ht = (
  /** @class */
  function() {
    function e(r, i) {
      i === void 0 && (i = {}), this.message = r, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!i.ignoreTag, this.locale = i.locale, this.requiresOtherClause = !!i.requiresOtherClause, this.shouldParseSkeletons = !!i.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(r, i, n) {
      for (var f = []; !this.isEOF(); ) {
        var c = this.char();
        if (c === 123) {
          var p = this.parseArgument(r, n);
          if (p.err)
            return p;
          f.push(p.val);
        } else {
          if (c === 125 && r > 0)
            break;
          if (c === 35 && (i === "plural" || i === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), f.push({
              type: _.pound,
              location: x(u, this.clonePosition())
            });
          } else if (c === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(y.UNMATCHED_CLOSING_TAG, x(this.clonePosition(), this.clonePosition()));
          } else if (c === 60 && !this.ignoreTag && J(this.peek() || 0)) {
            var p = this.parseTag(r, i);
            if (p.err)
              return p;
            f.push(p.val);
          } else {
            var p = this.parseLiteral(r, i);
            if (p.err)
              return p;
            f.push(p.val);
          }
        }
      }
      return { val: f, err: null };
    }, e.prototype.parseTag = function(r, i) {
      var n = this.clonePosition();
      this.bump();
      var f = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: _.literal,
            value: "<".concat(f, "/>"),
            location: x(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var c = this.parseMessage(r + 1, i, !0);
        if (c.err)
          return c;
        var p = c.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !J(this.char()))
            return this.error(y.INVALID_TAG, x(u, this.clonePosition()));
          var o = this.clonePosition(), t = this.parseTagName();
          return f !== t ? this.error(y.UNMATCHED_CLOSING_TAG, x(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: _.tag,
              value: f,
              children: p,
              location: x(n, this.clonePosition())
            },
            err: null
          } : this.error(y.INVALID_TAG, x(u, this.clonePosition())));
        } else
          return this.error(y.UNCLOSED_TAG, x(n, this.clonePosition()));
      } else
        return this.error(y.INVALID_TAG, x(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var r = this.offset();
      for (this.bump(); !this.isEOF() && Bt(this.char()); )
        this.bump();
      return this.message.slice(r, this.offset());
    }, e.prototype.parseLiteral = function(r, i) {
      for (var n = this.clonePosition(), f = ""; ; ) {
        var c = this.tryParseQuote(i);
        if (c) {
          f += c;
          continue;
        }
        var p = this.tryParseUnquoted(r, i);
        if (p) {
          f += p;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          f += u;
          continue;
        }
        break;
      }
      var o = x(n, this.clonePosition());
      return {
        val: { type: _.literal, value: f, location: o },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Nt(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(r) {
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
          if (r === "plural" || r === "selectordinal")
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
      return W.apply(void 0, i);
    }, e.prototype.tryParseUnquoted = function(r, i) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (i === "plural" || i === "selectordinal") || n === 125 && r > 0 ? null : (this.bump(), W(n));
    }, e.prototype.parseArgument = function(r, i) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(y.EMPTY_ARGUMENT, x(n, this.clonePosition()));
      var f = this.parseIdentifierIfPossible().value;
      if (!f)
        return this.error(y.MALFORMED_ARGUMENT, x(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: _.argument,
              // value does not include the opening and closing braces.
              value: f,
              location: x(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(n, this.clonePosition())) : this.parseArgumentOptions(r, i, f, n);
        default:
          return this.error(y.MALFORMED_ARGUMENT, x(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var r = this.clonePosition(), i = this.offset(), n = Z(this.message, i), f = i + n.length;
      this.bumpTo(f);
      var c = this.clonePosition(), p = x(r, c);
      return { value: n, location: p };
    }, e.prototype.parseArgumentOptions = function(r, i, n, f) {
      var c, p = this.clonePosition(), u = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (u) {
        case "":
          return this.error(y.EXPECT_ARGUMENT_TYPE, x(p, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var t = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var s = this.clonePosition(), a = this.parseSimpleArgStyleIfPossible();
            if (a.err)
              return a;
            var h = wt(a.val);
            if (h.length === 0)
              return this.error(y.EXPECT_ARGUMENT_STYLE, x(this.clonePosition(), this.clonePosition()));
            var l = x(s, this.clonePosition());
            t = { style: h, styleLocation: l };
          }
          var m = this.tryParseArgumentClose(f);
          if (m.err)
            return m;
          var g = x(f, this.clonePosition());
          if (t && le(t == null ? void 0 : t.style, "::", 0)) {
            var d = Tt(t.style.slice(2));
            if (u === "number") {
              var a = this.parseNumberSkeletonFromString(d, t.styleLocation);
              return a.err ? a : {
                val: { type: _.number, value: n, location: g, style: a.val },
                err: null
              };
            } else {
              if (d.length === 0)
                return this.error(y.EXPECT_DATE_TIME_SKELETON, g);
              var b = d;
              this.locale && (b = ft(d, this.locale));
              var h = {
                type: B.dateTime,
                pattern: b,
                location: t.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? nt(b) : {}
              }, v = u === "date" ? _.date : _.time;
              return {
                val: { type: v, value: n, location: g, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? _.number : u === "date" ? _.date : _.time,
              value: n,
              location: g,
              style: (c = t == null ? void 0 : t.style) !== null && c !== void 0 ? c : null
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
          var I = this.parseIdentifierIfPossible(), N = 0;
          if (u !== "select" && I.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, x(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var a = this.tryParseDecimalInteger(y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (a.err)
              return a;
            this.bumpSpace(), I = this.parseIdentifierIfPossible(), N = a.val;
          }
          var C = this.tryParsePluralOrSelectOptions(r, u, i, I);
          if (C.err)
            return C;
          var m = this.tryParseArgumentClose(f);
          if (m.err)
            return m;
          var oe = x(f, this.clonePosition());
          return u === "select" ? {
            val: {
              type: _.select,
              value: n,
              options: fe(C.val),
              location: oe
            },
            err: null
          } : {
            val: {
              type: _.plural,
              value: n,
              options: fe(C.val),
              offset: N,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: oe
            },
            err: null
          };
        }
        default:
          return this.error(y.INVALID_ARGUMENT_TYPE, x(p, o));
      }
    }, e.prototype.tryParseArgumentClose = function(r) {
      return this.isEOF() || this.char() !== 125 ? this.error(y.EXPECT_ARGUMENT_CLOSING_BRACE, x(r, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var r = 0, i = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var f = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, x(f, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            r += 1, this.bump();
            break;
          }
          case 125: {
            if (r > 0)
              r -= 1;
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
    }, e.prototype.parseNumberSkeletonFromString = function(r, i) {
      var n = [];
      try {
        n = at(r);
      } catch {
        return this.error(y.INVALID_NUMBER_SKELETON, i);
      }
      return {
        val: {
          type: B.number,
          tokens: n,
          location: i,
          parsedOptions: this.shouldParseSkeletons ? lt(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(r, i, n, f) {
      for (var c, p = !1, u = [], o = /* @__PURE__ */ new Set(), t = f.value, s = f.location; ; ) {
        if (t.length === 0) {
          var a = this.clonePosition();
          if (i !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(y.EXPECT_PLURAL_ARGUMENT_SELECTOR, y.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            s = x(a, this.clonePosition()), t = this.message.slice(a.offset, this.offset());
          } else
            break;
        }
        if (o.has(t))
          return this.error(i === "select" ? y.DUPLICATE_SELECT_ARGUMENT_SELECTOR : y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, s);
        t === "other" && (p = !0), this.bumpSpace();
        var l = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(i === "select" ? y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, x(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(r + 1, i, n);
        if (m.err)
          return m;
        var g = this.tryParseArgumentClose(l);
        if (g.err)
          return g;
        u.push([
          t,
          {
            value: m.val,
            location: x(l, this.clonePosition())
          }
        ]), o.add(t), this.bumpSpace(), c = this.parseIdentifierIfPossible(), t = c.value, s = c.location;
      }
      return u.length === 0 ? this.error(i === "select" ? y.EXPECT_SELECT_ARGUMENT_SELECTOR : y.EXPECT_PLURAL_ARGUMENT_SELECTOR, x(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !p ? this.error(y.MISSING_OTHER_CLAUSE, x(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(r, i) {
      var n = 1, f = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var c = !1, p = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          c = !0, p = p * 10 + (u - 48), this.bump();
        else
          break;
      }
      var o = x(f, this.clonePosition());
      return c ? (p *= n, _t(p) ? { val: p, err: null } : this.error(i, o)) : this.error(r, o);
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
      var r = this.position.offset;
      if (r >= this.message.length)
        throw Error("out of bound");
      var i = Ue(this.message, r);
      if (i === void 0)
        throw Error("Offset ".concat(r, " is at invalid UTF-16 code unit boundary"));
      return i;
    }, e.prototype.error = function(r, i) {
      return {
        val: null,
        err: {
          kind: r,
          message: this.message,
          location: i
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var r = this.char();
        r === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += r < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(r) {
      if (le(this.message, r, this.offset())) {
        for (var i = 0; i < r.length; i++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(r) {
      var i = this.offset(), n = this.message.indexOf(r, i);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(r) {
      if (this.offset() > r)
        throw Error("targetOffset ".concat(r, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (r = Math.min(r, this.message.length); ; ) {
        var i = this.offset();
        if (i === r)
          break;
        if (i > r)
          throw Error("targetOffset ".concat(r, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Fe(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var r = this.char(), i = this.offset(), n = this.message.charCodeAt(i + (r >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function J(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Nt(e) {
  return J(e) || e === 47;
}
function Bt(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Fe(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function At(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Q(e) {
  e.forEach(function(r) {
    if (delete r.location, Ie(r) || Le(r))
      for (var i in r.options)
        delete r.options[i].location, Q(r.options[i].value);
    else
      Be(r) && Oe(r.style) || (Ae(r) || Pe(r)) && X(r.style) ? delete r.style.location : Ce(r) && Q(r.children);
  });
}
function Pt(e, r) {
  r === void 0 && (r = {}), r = E({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, r);
  var i = new Ht(e, r).parse();
  if (i.err) {
    var n = SyntaxError(y[i.err.kind]);
    throw n.location = i.err.location, n.originalMessage = i.err.message, n;
  }
  return r != null && r.captureLocation || Q(i.val), i.val;
}
function j(e, r) {
  var i = r && r.cache ? r.cache : Dt, n = r && r.serializer ? r.serializer : Rt, f = r && r.strategy ? r.strategy : Lt;
  return f(e, {
    cache: i,
    serializer: n
  });
}
function It(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function je(e, r, i, n) {
  var f = It(n) ? n : i(n), c = r.get(f);
  return typeof c > "u" && (c = e.call(this, n), r.set(f, c)), c;
}
function Ve(e, r, i) {
  var n = Array.prototype.slice.call(arguments, 3), f = i(n), c = r.get(f);
  return typeof c > "u" && (c = e.apply(this, n), r.set(f, c)), c;
}
function K(e, r, i, n, f) {
  return i.bind(r, e, n, f);
}
function Lt(e, r) {
  var i = e.length === 1 ? je : Ve;
  return K(e, this, i, r.cache.create(), r.serializer);
}
function Ct(e, r) {
  return K(e, this, Ve, r.cache.create(), r.serializer);
}
function Ot(e, r) {
  return K(e, this, je, r.cache.create(), r.serializer);
}
var Rt = function() {
  return JSON.stringify(arguments);
};
function ee() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ee.prototype.get = function(e) {
  return this.cache[e];
};
ee.prototype.set = function(e, r) {
  this.cache[e] = r;
};
var Dt = {
  create: function() {
    return new ee();
  }
}, V = {
  variadic: Ct,
  monadic: Ot
}, A;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(A || (A = {}));
var U = (
  /** @class */
  function(e) {
    G(r, e);
    function r(i, n, f) {
      var c = e.call(this, i) || this;
      return c.code = n, c.originalMessage = f, c;
    }
    return r.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, r;
  }(Error)
), me = (
  /** @class */
  function(e) {
    G(r, e);
    function r(i, n, f, c) {
      return e.call(this, 'Invalid values for "'.concat(i, '": "').concat(n, '". Options are "').concat(Object.keys(f).join('", "'), '"'), A.INVALID_VALUE, c) || this;
    }
    return r;
  }(U)
), Mt = (
  /** @class */
  function(e) {
    G(r, e);
    function r(i, n, f) {
      return e.call(this, 'Value for "'.concat(i, '" must be of type ').concat(n), A.INVALID_VALUE, f) || this;
    }
    return r;
  }(U)
), Gt = (
  /** @class */
  function(e) {
    G(r, e);
    function r(i, n) {
      return e.call(this, 'The intl string context variable "'.concat(i, '" was not provided to the string "').concat(n, '"'), A.MISSING_VALUE, n) || this;
    }
    return r;
  }(U)
), S;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(S || (S = {}));
function Ut(e) {
  return e.length < 2 ? e : e.reduce(function(r, i) {
    var n = r[r.length - 1];
    return !n || n.type !== S.literal || i.type !== S.literal ? r.push(i) : n.value += i.value, r;
  }, []);
}
function kt(e) {
  return typeof e == "function";
}
function R(e, r, i, n, f, c, p) {
  if (e.length === 1 && ae(e[0]))
    return [
      {
        type: S.literal,
        value: e[0].value
      }
    ];
  for (var u = [], o = 0, t = e; o < t.length; o++) {
    var s = t[o];
    if (ae(s)) {
      u.push({
        type: S.literal,
        value: s.value
      });
      continue;
    }
    if (rt(s)) {
      typeof c == "number" && u.push({
        type: S.literal,
        value: i.getNumberFormat(r).format(c)
      });
      continue;
    }
    var a = s.value;
    if (!(f && a in f))
      throw new Gt(a, p);
    var h = f[a];
    if (tt(s)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), u.push({
        type: typeof h == "string" ? S.literal : S.object,
        value: h
      });
      continue;
    }
    if (Ae(s)) {
      var l = typeof s.style == "string" ? n.date[s.style] : X(s.style) ? s.style.parsedOptions : void 0;
      u.push({
        type: S.literal,
        value: i.getDateTimeFormat(r, l).format(h)
      });
      continue;
    }
    if (Pe(s)) {
      var l = typeof s.style == "string" ? n.time[s.style] : X(s.style) ? s.style.parsedOptions : n.time.medium;
      u.push({
        type: S.literal,
        value: i.getDateTimeFormat(r, l).format(h)
      });
      continue;
    }
    if (Be(s)) {
      var l = typeof s.style == "string" ? n.number[s.style] : Oe(s.style) ? s.style.parsedOptions : void 0;
      l && l.scale && (h = h * (l.scale || 1)), u.push({
        type: S.literal,
        value: i.getNumberFormat(r, l).format(h)
      });
      continue;
    }
    if (Ce(s)) {
      var m = s.children, g = s.value, d = f[g];
      if (!kt(d))
        throw new Mt(g, "function", p);
      var b = R(m, r, i, n, f, c), v = d(b.map(function(N) {
        return N.value;
      }));
      Array.isArray(v) || (v = [v]), u.push.apply(u, v.map(function(N) {
        return {
          type: typeof N == "string" ? S.literal : S.object,
          value: N
        };
      }));
    }
    if (Ie(s)) {
      var T = s.options[h] || s.options.other;
      if (!T)
        throw new me(s.value, h, Object.keys(s.options), p);
      u.push.apply(u, R(T.value, r, i, n, f));
      continue;
    }
    if (Le(s)) {
      var T = s.options["=".concat(h)];
      if (!T) {
        if (!Intl.PluralRules)
          throw new U(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, A.MISSING_INTL_API, p);
        var I = i.getPluralRules(r, { type: s.pluralType }).select(h - (s.offset || 0));
        T = s.options[I] || s.options.other;
      }
      if (!T)
        throw new me(s.value, h, Object.keys(s.options), p);
      u.push.apply(u, R(T.value, r, i, n, f, h - (s.offset || 0)));
      continue;
    }
  }
  return Ut(u);
}
function Ft(e, r) {
  return r ? E(E(E({}, e || {}), r || {}), Object.keys(e).reduce(function(i, n) {
    return i[n] = E(E({}, e[n]), r[n] || {}), i;
  }, {})) : e;
}
function jt(e, r) {
  return r ? Object.keys(e).reduce(function(i, n) {
    return i[n] = Ft(e[n], r[n]), i;
  }, E({}, e)) : e;
}
function z(e) {
  return {
    create: function() {
      return {
        get: function(r) {
          return e[r];
        },
        set: function(r, i) {
          e[r] = i;
        }
      };
    }
  };
}
function Vt(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: j(function() {
      for (var r, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((r = Intl.NumberFormat).bind.apply(r, k([void 0], i, !1)))();
    }, {
      cache: z(e.number),
      strategy: V.variadic
    }),
    getDateTimeFormat: j(function() {
      for (var r, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((r = Intl.DateTimeFormat).bind.apply(r, k([void 0], i, !1)))();
    }, {
      cache: z(e.dateTime),
      strategy: V.variadic
    }),
    getPluralRules: j(function() {
      for (var r, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      return new ((r = Intl.PluralRules).bind.apply(r, k([void 0], i, !1)))();
    }, {
      cache: z(e.pluralRules),
      strategy: V.variadic
    })
  };
}
var zt = (
  /** @class */
  function() {
    function e(r, i, n, f) {
      var c = this;
      if (i === void 0 && (i = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(p) {
        var u = c.formatToParts(p);
        if (u.length === 1)
          return u[0].value;
        var o = u.reduce(function(t, s) {
          return !t.length || s.type !== S.literal || typeof t[t.length - 1] != "string" ? t.push(s.value) : t[t.length - 1] += s.value, t;
        }, []);
        return o.length <= 1 ? o[0] || "" : o;
      }, this.formatToParts = function(p) {
        return R(c.ast, c.locales, c.formatters, c.formats, p, void 0, c.message);
      }, this.resolvedOptions = function() {
        return {
          locale: c.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return c.ast;
      }, this.locales = i, this.resolvedLocale = e.resolveLocale(i), typeof r == "string") {
        if (this.message = r, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(r, {
          ignoreTag: f == null ? void 0 : f.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = r;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = jt(e.formats, n), this.formatters = f && f.formatters || Vt(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(r) {
      var i = Intl.NumberFormat.supportedLocalesOf(r);
      return i.length > 0 ? new Intl.Locale(i[0]) : new Intl.Locale(typeof r == "string" ? r : r[0]);
    }, e.__parse = Pt, e.formats = {
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
), w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xt(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var i = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var f = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(i, n, f.get ? f : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), i;
}
function D(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(r) {
    return typeof r;
  } : D = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, D(e);
}
function qt(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function pe(e, r) {
  for (var i = 0; i < r.length; i++) {
    var n = r[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Wt(e, r, i) {
  return r && pe(e.prototype, r), i && pe(e, i), e;
}
var Zt = function(r) {
  return r.split("-").every(function(i) {
    return /[a-z0-9]+/i.test(i);
  });
}, ge = function(r) {
  if (!r)
    return [];
  Array.isArray(r) || (r = [r]);
  for (var i = {}, n = 0; n < r.length; ++n) {
    var f = r[n];
    if (f && D(f) === "object" && (f = String(f)), typeof f != "string") {
      var c = "Locales should be strings, ".concat(JSON.stringify(f), " isn't.");
      throw new TypeError(c);
    }
    if (f[0] !== "*") {
      if (!Zt(f)) {
        var p = JSON.stringify(f), u = "The locale ".concat(p, " is not a structurally valid BCP 47 language tag.");
        throw new RangeError(u);
      }
      i[f] = !0;
    }
  }
  return Object.keys(i);
}, Jt = function() {
  return (
    /* istanbul ignore next */
    typeof navigator < "u" && navigator && (navigator.userLanguage || navigator.language) || "en-US"
  );
}, Qt = function(r) {
  if (!r)
    return "cardinal";
  if (r === "cardinal" || r === "ordinal")
    return r;
  throw new RangeError("Not a valid plural type: " + JSON.stringify(r));
};
function Yt(e, r, i) {
  var n = function(u) {
    do {
      if (r(u))
        return u;
      u = u.replace(/-?[^-]*$/, "");
    } while (u);
    return null;
  }, f = function(u) {
    for (var o = ge(u), t = 0; t < o.length; ++t) {
      var s = n(o[t]);
      if (s)
        return s;
    }
    return n(Jt());
  }, c = /* @__PURE__ */ function() {
    function p(u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      qt(this, p), this._locale = f(u), this._select = r(this._locale), this._type = Qt(o.type), this._nf = new e("en", o);
    }
    return Wt(p, [{
      key: "resolvedOptions",
      value: function() {
        var o = this._nf.resolvedOptions(), t = o.minimumIntegerDigits, s = o.minimumFractionDigits, a = o.maximumFractionDigits, h = o.minimumSignificantDigits, l = o.maximumSignificantDigits, m = {
          locale: this._locale,
          minimumIntegerDigits: t,
          minimumFractionDigits: s,
          maximumFractionDigits: a,
          pluralCategories: i(this._locale, this._type === "ordinal"),
          type: this._type
        };
        return typeof h == "number" && (m.minimumSignificantDigits = h, m.maximumSignificantDigits = l), m;
      }
    }, {
      key: "select",
      value: function(o) {
        if (!(this instanceof p))
          throw new TypeError("select() called on incompatible ".concat(this));
        if (typeof o != "number" && (o = Number(o)), !isFinite(o))
          return "other";
        var t = this._nf.format(Math.abs(o));
        return this._select(t, this._type === "ordinal");
      }
    }], [{
      key: "supportedLocalesOf",
      value: function(o) {
        return ge(o).filter(n);
      }
    }]), p;
  }();
  return Object.defineProperty(c, "prototype", {
    writable: !1
  }), c;
}
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" })), er = /* @__PURE__ */ Xt(Kt);
function tr(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function de(e, r) {
  for (var i = 0; i < r.length; i++) {
    var n = r[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function rr(e, r, i) {
  return r && de(e.prototype, r), i && de(e, i), e;
}
var ir = /* @__PURE__ */ function() {
  function e(r, i) {
    var n = i.minimumIntegerDigits, f = i.minimumFractionDigits, c = i.maximumFractionDigits, p = i.minimumSignificantDigits, u = i.maximumSignificantDigits;
    tr(this, e), this._minID = typeof n == "number" ? n : 1, this._minFD = typeof f == "number" ? f : 0, this._maxFD = typeof c == "number" ? c : Math.max(this._minFD, 3), (typeof p == "number" || typeof u == "number") && (this._minSD = typeof p == "number" ? p : 1, this._maxSD = typeof u == "number" ? u : 21);
  }
  return rr(e, [{
    key: "resolvedOptions",
    value: function() {
      var i = {
        minimumIntegerDigits: this._minID,
        minimumFractionDigits: this._minFD,
        maximumFractionDigits: this._maxFD
      };
      return typeof this._minSD == "number" && (i.minimumSignificantDigits = this._minSD, i.maximumSignificantDigits = this._maxSD), i;
    }
  }, {
    key: "format",
    value: function(i) {
      if (this._minSD) {
        for (var n = String(i), f = 0, c = 0; c < n.length; ++c) {
          var p = n[c];
          p >= "0" && p <= "9" && ++f;
        }
        return f < this._minSD ? i.toPrecision(this._minSD) : f > this._maxSD ? i.toPrecision(this._maxSD) : n;
      }
      return this._minFD > 0 ? i.toFixed(this._minFD) : this._maxFD === 0 ? i.toFixed(0) : String(i);
    }
  }]), e;
}(), nr = ir, or = er, ar = nr;
function ze(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var sr = /* @__PURE__ */ ze(or), ur = /* @__PURE__ */ ze(ar);
function M(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? M = function(r) {
    return typeof r;
  } : M = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, M(e);
}
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof w < "u" ? w : typeof self < "u" ? self : {};
function Xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var te = { exports: {} };
(function(e, r) {
  var i = function(t, s) {
    return s ? "other" : t == 1 ? "one" : "other";
  }, n = function(t, s) {
    return s ? "other" : t == 0 || t == 1 ? "one" : "other";
  }, f = function(t, s) {
    return s ? "other" : t >= 0 && t <= 1 ? "one" : "other";
  }, c = function(t, s) {
    var a = String(t).split("."), h = !a[1];
    return s ? "other" : t == 1 && h ? "one" : "other";
  }, p = function(t, s) {
    return "other";
  }, u = function(t, s) {
    return s ? "other" : t == 1 ? "one" : t == 2 ? "two" : "other";
  };
  (function(o, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), e.exports = t;
  })($e, {
    _in: p,
    af: i,
    ak: n,
    am: f,
    an: i,
    ar: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-2);
      return s ? "other" : t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : l >= 3 && l <= 10 ? "few" : l >= 11 && l <= 99 ? "many" : "other";
    },
    ars: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-2);
      return s ? "other" : t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : l >= 3 && l <= 10 ? "few" : l >= 11 && l <= 99 ? "many" : "other";
    },
    as: function(t, s) {
      return s ? t == 1 || t == 5 || t == 7 || t == 8 || t == 9 || t == 10 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : t == 6 ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
    },
    asa: i,
    ast: c,
    az: function(t, s) {
      var a = String(t).split("."), h = a[0], l = h.slice(-1), m = h.slice(-2), g = h.slice(-3);
      return s ? l == 1 || l == 2 || l == 5 || l == 7 || l == 8 || m == 20 || m == 50 || m == 70 || m == 80 ? "one" : l == 3 || l == 4 || g == 100 || g == 200 || g == 300 || g == 400 || g == 500 || g == 600 || g == 700 || g == 800 || g == 900 ? "few" : h == 0 || l == 6 || m == 40 || m == 60 || m == 90 ? "many" : "other" : t == 1 ? "one" : "other";
    },
    be: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-1), m = h && a[0].slice(-2);
      return s ? (l == 2 || l == 3) && m != 12 && m != 13 ? "few" : "other" : l == 1 && m != 11 ? "one" : l >= 2 && l <= 4 && (m < 12 || m > 14) ? "few" : h && l == 0 || l >= 5 && l <= 9 || m >= 11 && m <= 14 ? "many" : "other";
    },
    bem: i,
    bez: i,
    bg: i,
    bho: n,
    bm: p,
    bn: function(t, s) {
      return s ? t == 1 || t == 5 || t == 7 || t == 8 || t == 9 || t == 10 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : t == 6 ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
    },
    bo: p,
    br: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-1), m = h && a[0].slice(-2), g = h && a[0].slice(-6);
      return s ? "other" : l == 1 && m != 11 && m != 71 && m != 91 ? "one" : l == 2 && m != 12 && m != 72 && m != 92 ? "two" : (l == 3 || l == 4 || l == 9) && (m < 10 || m > 19) && (m < 70 || m > 79) && (m < 90 || m > 99) ? "few" : t != 0 && h && g == 0 ? "many" : "other";
    },
    brx: i,
    bs: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = h.slice(-2), b = l.slice(-1), v = l.slice(-2);
      return s ? "other" : m && g == 1 && d != 11 || b == 1 && v != 11 ? "one" : m && g >= 2 && g <= 4 && (d < 12 || d > 14) || b >= 2 && b <= 4 && (v < 12 || v > 14) ? "few" : "other";
    },
    ca: function(t, s) {
      var a = String(t).split("."), h = !a[1];
      return s ? t == 1 || t == 3 ? "one" : t == 2 ? "two" : t == 4 ? "few" : "other" : t == 1 && h ? "one" : "other";
    },
    ce: i,
    ceb: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = l.slice(-1);
      return s ? "other" : m && (h == 1 || h == 2 || h == 3) || m && g != 4 && g != 6 && g != 9 || !m && d != 4 && d != 6 && d != 9 ? "one" : "other";
    },
    cgg: i,
    chr: i,
    ckb: i,
    cs: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1];
      return s ? "other" : t == 1 && l ? "one" : h >= 2 && h <= 4 && l ? "few" : l ? "other" : "many";
    },
    cy: function(t, s) {
      return s ? t == 0 || t == 7 || t == 8 || t == 9 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : t == 3 || t == 4 ? "few" : t == 5 || t == 6 ? "many" : "other" : t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : t == 3 ? "few" : t == 6 ? "many" : "other";
    },
    da: function(t, s) {
      var a = String(t).split("."), h = a[0], l = Number(a[0]) == t;
      return s ? "other" : t == 1 || !l && (h == 0 || h == 1) ? "one" : "other";
    },
    de: c,
    doi: f,
    dsb: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-2), d = l.slice(-2);
      return s ? "other" : m && g == 1 || d == 1 ? "one" : m && g == 2 || d == 2 ? "two" : m && (g == 3 || g == 4) || d == 3 || d == 4 ? "few" : "other";
    },
    dv: i,
    dz: p,
    ee: i,
    el: i,
    en: function(t, s) {
      var a = String(t).split("."), h = !a[1], l = Number(a[0]) == t, m = l && a[0].slice(-1), g = l && a[0].slice(-2);
      return s ? m == 1 && g != 11 ? "one" : m == 2 && g != 12 ? "two" : m == 3 && g != 13 ? "few" : "other" : t == 1 && h ? "one" : "other";
    },
    eo: i,
    es: i,
    et: c,
    eu: i,
    fa: f,
    ff: function(t, s) {
      return s ? "other" : t >= 0 && t < 2 ? "one" : "other";
    },
    fi: c,
    fil: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = l.slice(-1);
      return s ? t == 1 ? "one" : "other" : m && (h == 1 || h == 2 || h == 3) || m && g != 4 && g != 6 && g != 9 || !m && d != 4 && d != 6 && d != 9 ? "one" : "other";
    },
    fo: i,
    fr: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = h.slice(-6);
      return s ? t == 1 ? "one" : "other" : t >= 0 && t < 2 ? "one" : h != 0 && m == 0 && l ? "many" : "other";
    },
    fur: i,
    fy: c,
    ga: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? t == 1 ? "one" : "other" : t == 1 ? "one" : t == 2 ? "two" : h && t >= 3 && t <= 6 ? "few" : h && t >= 7 && t <= 10 ? "many" : "other";
    },
    gd: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? t == 1 || t == 11 ? "one" : t == 2 || t == 12 ? "two" : t == 3 || t == 13 ? "few" : "other" : t == 1 || t == 11 ? "one" : t == 2 || t == 12 ? "two" : h && t >= 3 && t <= 10 || h && t >= 13 && t <= 19 ? "few" : "other";
    },
    gl: c,
    gsw: i,
    gu: function(t, s) {
      return s ? t == 1 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : t == 6 ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
    },
    guw: n,
    gv: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = h.slice(-1), g = h.slice(-2);
      return s ? "other" : l && m == 1 ? "one" : l && m == 2 ? "two" : l && (g == 0 || g == 20 || g == 40 || g == 60 || g == 80) ? "few" : l ? "other" : "many";
    },
    ha: i,
    haw: i,
    he: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = Number(a[0]) == t, g = m && a[0].slice(-1);
      return s ? "other" : t == 1 && l ? "one" : h == 2 && l ? "two" : l && (t < 0 || t > 10) && m && g == 0 ? "many" : "other";
    },
    hi: function(t, s) {
      return s ? t == 1 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : t == 6 ? "many" : "other" : t >= 0 && t <= 1 ? "one" : "other";
    },
    hr: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = h.slice(-2), b = l.slice(-1), v = l.slice(-2);
      return s ? "other" : m && g == 1 && d != 11 || b == 1 && v != 11 ? "one" : m && g >= 2 && g <= 4 && (d < 12 || d > 14) || b >= 2 && b <= 4 && (v < 12 || v > 14) ? "few" : "other";
    },
    hsb: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-2), d = l.slice(-2);
      return s ? "other" : m && g == 1 || d == 1 ? "one" : m && g == 2 || d == 2 ? "two" : m && (g == 3 || g == 4) || d == 3 || d == 4 ? "few" : "other";
    },
    hu: function(t, s) {
      return s ? t == 1 || t == 5 ? "one" : "other" : t == 1 ? "one" : "other";
    },
    hy: function(t, s) {
      return s ? t == 1 ? "one" : "other" : t >= 0 && t < 2 ? "one" : "other";
    },
    ia: c,
    id: p,
    ig: p,
    ii: p,
    io: c,
    is: function(t, s) {
      var a = String(t).split("."), h = a[0], l = Number(a[0]) == t, m = h.slice(-1), g = h.slice(-2);
      return s ? "other" : l && m == 1 && g != 11 || !l ? "one" : "other";
    },
    it: function(t, s) {
      var a = String(t).split("."), h = !a[1];
      return s ? t == 11 || t == 8 || t == 80 || t == 800 ? "many" : "other" : t == 1 && h ? "one" : "other";
    },
    iu: u,
    iw: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = Number(a[0]) == t, g = m && a[0].slice(-1);
      return s ? "other" : t == 1 && l ? "one" : h == 2 && l ? "two" : l && (t < 0 || t > 10) && m && g == 0 ? "many" : "other";
    },
    ja: p,
    jbo: p,
    jgo: i,
    ji: c,
    jmc: i,
    jv: p,
    jw: p,
    ka: function(t, s) {
      var a = String(t).split("."), h = a[0], l = h.slice(-2);
      return s ? h == 1 ? "one" : h == 0 || l >= 2 && l <= 20 || l == 40 || l == 60 || l == 80 ? "many" : "other" : t == 1 ? "one" : "other";
    },
    kab: function(t, s) {
      return s ? "other" : t >= 0 && t < 2 ? "one" : "other";
    },
    kaj: i,
    kcg: i,
    kde: p,
    kea: p,
    kk: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-1);
      return s ? l == 6 || l == 9 || h && l == 0 && t != 0 ? "many" : "other" : t == 1 ? "one" : "other";
    },
    kkj: i,
    kl: i,
    km: p,
    kn: f,
    ko: p,
    ks: i,
    ksb: i,
    ksh: function(t, s) {
      return s ? "other" : t == 0 ? "zero" : t == 1 ? "one" : "other";
    },
    ku: i,
    kw: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-2), m = h && a[0].slice(-3), g = h && a[0].slice(-5), d = h && a[0].slice(-6);
      return s ? h && t >= 1 && t <= 4 || l >= 1 && l <= 4 || l >= 21 && l <= 24 || l >= 41 && l <= 44 || l >= 61 && l <= 64 || l >= 81 && l <= 84 ? "one" : t == 5 || l == 5 ? "many" : "other" : t == 0 ? "zero" : t == 1 ? "one" : l == 2 || l == 22 || l == 42 || l == 62 || l == 82 || h && m == 0 && (g >= 1e3 && g <= 2e4 || g == 4e4 || g == 6e4 || g == 8e4) || t != 0 && d == 1e5 ? "two" : l == 3 || l == 23 || l == 43 || l == 63 || l == 83 ? "few" : t != 1 && (l == 1 || l == 21 || l == 41 || l == 61 || l == 81) ? "many" : "other";
    },
    ky: i,
    lag: function(t, s) {
      var a = String(t).split("."), h = a[0];
      return s ? "other" : t == 0 ? "zero" : (h == 0 || h == 1) && t != 0 ? "one" : "other";
    },
    lb: i,
    lg: i,
    lij: function(t, s) {
      var a = String(t).split("."), h = !a[1], l = Number(a[0]) == t;
      return s ? t == 11 || t == 8 || l && t >= 80 && t <= 89 || l && t >= 800 && t <= 899 ? "many" : "other" : t == 1 && h ? "one" : "other";
    },
    lkt: p,
    ln: n,
    lo: function(t, s) {
      return s && t == 1 ? "one" : "other";
    },
    lt: function(t, s) {
      var a = String(t).split("."), h = a[1] || "", l = Number(a[0]) == t, m = l && a[0].slice(-1), g = l && a[0].slice(-2);
      return s ? "other" : m == 1 && (g < 11 || g > 19) ? "one" : m >= 2 && m <= 9 && (g < 11 || g > 19) ? "few" : h != 0 ? "many" : "other";
    },
    lv: function(t, s) {
      var a = String(t).split("."), h = a[1] || "", l = h.length, m = Number(a[0]) == t, g = m && a[0].slice(-1), d = m && a[0].slice(-2), b = h.slice(-2), v = h.slice(-1);
      return s ? "other" : m && g == 0 || d >= 11 && d <= 19 || l == 2 && b >= 11 && b <= 19 ? "zero" : g == 1 && d != 11 || l == 2 && v == 1 && b != 11 || l != 2 && v == 1 ? "one" : "other";
    },
    mas: i,
    mg: n,
    mgo: i,
    mk: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = h.slice(-2), b = l.slice(-1), v = l.slice(-2);
      return s ? g == 1 && d != 11 ? "one" : g == 2 && d != 12 ? "two" : (g == 7 || g == 8) && d != 17 && d != 18 ? "many" : "other" : m && g == 1 && d != 11 || b == 1 && v != 11 ? "one" : "other";
    },
    ml: i,
    mn: i,
    mo: function(t, s) {
      var a = String(t).split("."), h = !a[1], l = Number(a[0]) == t, m = l && a[0].slice(-2);
      return s ? t == 1 ? "one" : "other" : t == 1 && h ? "one" : !h || t == 0 || m >= 2 && m <= 19 ? "few" : "other";
    },
    mr: function(t, s) {
      return s ? t == 1 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : "other" : t == 1 ? "one" : "other";
    },
    ms: function(t, s) {
      return s && t == 1 ? "one" : "other";
    },
    mt: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-2);
      return s ? "other" : t == 1 ? "one" : t == 0 || l >= 2 && l <= 10 ? "few" : l >= 11 && l <= 19 ? "many" : "other";
    },
    my: p,
    nah: i,
    naq: u,
    nb: i,
    nd: i,
    ne: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? h && t >= 1 && t <= 4 ? "one" : "other" : t == 1 ? "one" : "other";
    },
    nl: c,
    nn: i,
    nnh: i,
    no: i,
    nqo: p,
    nr: i,
    nso: n,
    ny: i,
    nyn: i,
    om: i,
    or: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? t == 1 || t == 5 || h && t >= 7 && t <= 9 ? "one" : t == 2 || t == 3 ? "two" : t == 4 ? "few" : t == 6 ? "many" : "other" : t == 1 ? "one" : "other";
    },
    os: i,
    osa: p,
    pa: n,
    pap: i,
    pcm: f,
    pl: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = h.slice(-1), g = h.slice(-2);
      return s ? "other" : t == 1 && l ? "one" : l && m >= 2 && m <= 4 && (g < 12 || g > 14) ? "few" : l && h != 1 && (m == 0 || m == 1) || l && m >= 5 && m <= 9 || l && g >= 12 && g <= 14 ? "many" : "other";
    },
    prg: function(t, s) {
      var a = String(t).split("."), h = a[1] || "", l = h.length, m = Number(a[0]) == t, g = m && a[0].slice(-1), d = m && a[0].slice(-2), b = h.slice(-2), v = h.slice(-1);
      return s ? "other" : m && g == 0 || d >= 11 && d <= 19 || l == 2 && b >= 11 && b <= 19 ? "zero" : g == 1 && d != 11 || l == 2 && v == 1 && b != 11 || l != 2 && v == 1 ? "one" : "other";
    },
    ps: i,
    pt: function(t, s) {
      var a = String(t).split("."), h = a[0];
      return s ? "other" : h == 0 || h == 1 ? "one" : "other";
    },
    pt_PT: c,
    rm: i,
    ro: function(t, s) {
      var a = String(t).split("."), h = !a[1], l = Number(a[0]) == t, m = l && a[0].slice(-2);
      return s ? t == 1 ? "one" : "other" : t == 1 && h ? "one" : !h || t == 0 || m >= 2 && m <= 19 ? "few" : "other";
    },
    rof: i,
    root: p,
    ru: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = h.slice(-1), g = h.slice(-2);
      return s ? "other" : l && m == 1 && g != 11 ? "one" : l && m >= 2 && m <= 4 && (g < 12 || g > 14) ? "few" : l && m == 0 || l && m >= 5 && m <= 9 || l && g >= 11 && g <= 14 ? "many" : "other";
    },
    rwk: i,
    sah: p,
    saq: i,
    sat: u,
    sc: function(t, s) {
      var a = String(t).split("."), h = !a[1];
      return s ? t == 11 || t == 8 || t == 80 || t == 800 ? "many" : "other" : t == 1 && h ? "one" : "other";
    },
    scn: function(t, s) {
      var a = String(t).split("."), h = !a[1];
      return s ? t == 11 || t == 8 || t == 80 || t == 800 ? "many" : "other" : t == 1 && h ? "one" : "other";
    },
    sd: i,
    sdh: i,
    se: u,
    seh: i,
    ses: p,
    sg: p,
    sh: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = h.slice(-2), b = l.slice(-1), v = l.slice(-2);
      return s ? "other" : m && g == 1 && d != 11 || b == 1 && v != 11 ? "one" : m && g >= 2 && g <= 4 && (d < 12 || d > 14) || b >= 2 && b <= 4 && (v < 12 || v > 14) ? "few" : "other";
    },
    shi: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? "other" : t >= 0 && t <= 1 ? "one" : h && t >= 2 && t <= 10 ? "few" : "other";
    },
    si: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "";
      return s ? "other" : t == 0 || t == 1 || h == 0 && l == 1 ? "one" : "other";
    },
    sk: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1];
      return s ? "other" : t == 1 && l ? "one" : h >= 2 && h <= 4 && l ? "few" : l ? "other" : "many";
    },
    sl: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = h.slice(-2);
      return s ? "other" : l && m == 1 ? "one" : l && m == 2 ? "two" : l && (m == 3 || m == 4) || !l ? "few" : "other";
    },
    sma: u,
    smi: u,
    smj: u,
    smn: u,
    sms: u,
    sn: i,
    so: i,
    sq: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-1), m = h && a[0].slice(-2);
      return s ? t == 1 ? "one" : l == 4 && m != 14 ? "many" : "other" : t == 1 ? "one" : "other";
    },
    sr: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = h.slice(-2), b = l.slice(-1), v = l.slice(-2);
      return s ? "other" : m && g == 1 && d != 11 || b == 1 && v != 11 ? "one" : m && g >= 2 && g <= 4 && (d < 12 || d > 14) || b >= 2 && b <= 4 && (v < 12 || v > 14) ? "few" : "other";
    },
    ss: i,
    ssy: i,
    st: i,
    su: p,
    sv: function(t, s) {
      var a = String(t).split("."), h = !a[1], l = Number(a[0]) == t, m = l && a[0].slice(-1), g = l && a[0].slice(-2);
      return s ? (m == 1 || m == 2) && g != 11 && g != 12 ? "one" : "other" : t == 1 && h ? "one" : "other";
    },
    sw: c,
    syr: i,
    ta: i,
    te: i,
    teo: i,
    th: p,
    ti: n,
    tig: i,
    tk: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t, l = h && a[0].slice(-1);
      return s ? l == 6 || l == 9 || t == 10 ? "few" : "other" : t == 1 ? "one" : "other";
    },
    tl: function(t, s) {
      var a = String(t).split("."), h = a[0], l = a[1] || "", m = !a[1], g = h.slice(-1), d = l.slice(-1);
      return s ? t == 1 ? "one" : "other" : m && (h == 1 || h == 2 || h == 3) || m && g != 4 && g != 6 && g != 9 || !m && d != 4 && d != 6 && d != 9 ? "one" : "other";
    },
    tn: i,
    to: p,
    tr: i,
    ts: i,
    tzm: function(t, s) {
      var a = String(t).split("."), h = Number(a[0]) == t;
      return s ? "other" : t == 0 || t == 1 || h && t >= 11 && t <= 99 ? "one" : "other";
    },
    ug: i,
    uk: function(t, s) {
      var a = String(t).split("."), h = a[0], l = !a[1], m = Number(a[0]) == t, g = m && a[0].slice(-1), d = m && a[0].slice(-2), b = h.slice(-1), v = h.slice(-2);
      return s ? g == 3 && d != 13 ? "few" : "other" : l && b == 1 && v != 11 ? "one" : l && b >= 2 && b <= 4 && (v < 12 || v > 14) ? "few" : l && b == 0 || l && b >= 5 && b <= 9 || l && v >= 11 && v <= 14 ? "many" : "other";
    },
    ur: c,
    uz: i,
    ve: i,
    vi: function(t, s) {
      return s && t == 1 ? "one" : "other";
    },
    vo: i,
    vun: i,
    wa: n,
    wae: i,
    wo: p,
    xh: i,
    xog: i,
    yi: c,
    yo: p,
    yue: p,
    zh: p,
    zu: f
  });
})(te);
var qe = /* @__PURE__ */ Xe(te.exports), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), te.exports, {
  default: qe
})), re = { exports: {} };
(function(e, r) {
  var i = "zero", n = "one", f = "two", c = "few", p = "many", u = "other", o = {
    cardinal: [n, u],
    ordinal: [u]
  }, t = {
    cardinal: [u],
    ordinal: [u]
  }, s = {
    cardinal: [n, c, p, u],
    ordinal: [u]
  }, a = {
    cardinal: [n, u],
    ordinal: [n, u]
  }, h = {
    cardinal: [n, f, u],
    ordinal: [u]
  };
  (function(l, m) {
    Object.defineProperty(m, "__esModule", {
      value: !0
    }), e.exports = m;
  })($e, {
    _in: t,
    af: o,
    ak: o,
    am: o,
    an: o,
    ar: {
      cardinal: [i, n, f, c, p, u],
      ordinal: [u]
    },
    ars: {
      cardinal: [i, n, f, c, p, u],
      ordinal: [u]
    },
    as: {
      cardinal: [n, u],
      ordinal: [n, f, c, p, u]
    },
    asa: o,
    ast: o,
    az: {
      cardinal: [n, u],
      ordinal: [n, c, p, u]
    },
    be: {
      cardinal: [n, c, p, u],
      ordinal: [c, u]
    },
    bem: o,
    bez: o,
    bg: o,
    bho: o,
    bm: t,
    bn: {
      cardinal: [n, u],
      ordinal: [n, f, c, p, u]
    },
    bo: t,
    br: {
      cardinal: [n, f, c, p, u],
      ordinal: [u]
    },
    brx: o,
    bs: {
      cardinal: [n, c, u],
      ordinal: [u]
    },
    ca: {
      cardinal: [n, u],
      ordinal: [n, f, c, u]
    },
    ce: o,
    ceb: o,
    cgg: o,
    chr: o,
    ckb: o,
    cs: s,
    cy: {
      cardinal: [i, n, f, c, p, u],
      ordinal: [i, n, f, c, p, u]
    },
    da: o,
    de: o,
    doi: o,
    dsb: {
      cardinal: [n, f, c, u],
      ordinal: [u]
    },
    dv: o,
    dz: t,
    ee: o,
    el: o,
    en: {
      cardinal: [n, u],
      ordinal: [n, f, c, u]
    },
    eo: o,
    es: o,
    et: o,
    eu: o,
    fa: o,
    ff: o,
    fi: o,
    fil: a,
    fo: o,
    fr: {
      cardinal: [n, p, u],
      ordinal: [n, u]
    },
    fur: o,
    fy: o,
    ga: {
      cardinal: [n, f, c, p, u],
      ordinal: [n, u]
    },
    gd: {
      cardinal: [n, f, c, u],
      ordinal: [n, f, c, u]
    },
    gl: o,
    gsw: o,
    gu: {
      cardinal: [n, u],
      ordinal: [n, f, c, p, u]
    },
    guw: o,
    gv: {
      cardinal: [n, f, c, p, u],
      ordinal: [u]
    },
    ha: o,
    haw: o,
    he: {
      cardinal: [n, f, p, u],
      ordinal: [u]
    },
    hi: {
      cardinal: [n, u],
      ordinal: [n, f, c, p, u]
    },
    hr: {
      cardinal: [n, c, u],
      ordinal: [u]
    },
    hsb: {
      cardinal: [n, f, c, u],
      ordinal: [u]
    },
    hu: a,
    hy: a,
    ia: o,
    id: t,
    ig: t,
    ii: t,
    io: o,
    is: o,
    it: {
      cardinal: [n, u],
      ordinal: [p, u]
    },
    iu: h,
    iw: {
      cardinal: [n, f, p, u],
      ordinal: [u]
    },
    ja: t,
    jbo: t,
    jgo: o,
    ji: o,
    jmc: o,
    jv: t,
    jw: t,
    ka: {
      cardinal: [n, u],
      ordinal: [n, p, u]
    },
    kab: o,
    kaj: o,
    kcg: o,
    kde: t,
    kea: t,
    kk: {
      cardinal: [n, u],
      ordinal: [p, u]
    },
    kkj: o,
    kl: o,
    km: t,
    kn: o,
    ko: t,
    ks: o,
    ksb: o,
    ksh: {
      cardinal: [i, n, u],
      ordinal: [u]
    },
    ku: o,
    kw: {
      cardinal: [i, n, f, c, p, u],
      ordinal: [n, p, u]
    },
    ky: o,
    lag: {
      cardinal: [i, n, u],
      ordinal: [u]
    },
    lb: o,
    lg: o,
    lij: {
      cardinal: [n, u],
      ordinal: [p, u]
    },
    lkt: t,
    ln: o,
    lo: {
      cardinal: [u],
      ordinal: [n, u]
    },
    lt: s,
    lv: {
      cardinal: [i, n, u],
      ordinal: [u]
    },
    mas: o,
    mg: o,
    mgo: o,
    mk: {
      cardinal: [n, u],
      ordinal: [n, f, p, u]
    },
    ml: o,
    mn: o,
    mo: {
      cardinal: [n, c, u],
      ordinal: [n, u]
    },
    mr: {
      cardinal: [n, u],
      ordinal: [n, f, c, u]
    },
    ms: {
      cardinal: [u],
      ordinal: [n, u]
    },
    mt: s,
    my: t,
    nah: o,
    naq: h,
    nb: o,
    nd: o,
    ne: a,
    nl: o,
    nn: o,
    nnh: o,
    no: o,
    nqo: t,
    nr: o,
    nso: o,
    ny: o,
    nyn: o,
    om: o,
    or: {
      cardinal: [n, u],
      ordinal: [n, f, c, p, u]
    },
    os: o,
    osa: t,
    pa: o,
    pap: o,
    pcm: o,
    pl: s,
    prg: {
      cardinal: [i, n, u],
      ordinal: [u]
    },
    ps: o,
    pt: o,
    pt_PT: o,
    rm: o,
    ro: {
      cardinal: [n, c, u],
      ordinal: [n, u]
    },
    rof: o,
    root: t,
    ru: s,
    rwk: o,
    sah: t,
    saq: o,
    sat: h,
    sc: {
      cardinal: [n, u],
      ordinal: [p, u]
    },
    scn: {
      cardinal: [n, u],
      ordinal: [p, u]
    },
    sd: o,
    sdh: o,
    se: h,
    seh: o,
    ses: t,
    sg: t,
    sh: {
      cardinal: [n, c, u],
      ordinal: [u]
    },
    shi: {
      cardinal: [n, c, u],
      ordinal: [u]
    },
    si: o,
    sk: s,
    sl: {
      cardinal: [n, f, c, u],
      ordinal: [u]
    },
    sma: h,
    smi: h,
    smj: h,
    smn: h,
    sms: h,
    sn: o,
    so: o,
    sq: {
      cardinal: [n, u],
      ordinal: [n, p, u]
    },
    sr: {
      cardinal: [n, c, u],
      ordinal: [u]
    },
    ss: o,
    ssy: o,
    st: o,
    su: t,
    sv: a,
    sw: o,
    syr: o,
    ta: o,
    te: o,
    teo: o,
    th: t,
    ti: o,
    tig: o,
    tk: {
      cardinal: [n, u],
      ordinal: [c, u]
    },
    tl: a,
    tn: o,
    to: t,
    tr: o,
    ts: o,
    tzm: o,
    ug: o,
    uk: {
      cardinal: [n, c, p, u],
      ordinal: [c, u]
    },
    ur: o,
    uz: o,
    ve: o,
    vi: {
      cardinal: [u],
      ordinal: [n, u]
    },
    vo: o,
    vun: o,
    wa: o,
    wae: o,
    wo: t,
    xh: o,
    xog: o,
    yi: o,
    yo: t,
    yue: t,
    zh: t,
    zu: o
  });
})(re);
var We = /* @__PURE__ */ Xe(re.exports), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), re.exports, {
  default: We
})), fr = qe || hr, cr = We || lr, mr = (typeof Intl > "u" ? "undefined" : M(Intl)) === "object" && Intl.NumberFormat || ur.default, Ze = function(r) {
  return r === "in" ? "_in" : r === "pt-PT" ? "pt_PT" : r;
}, pr = function(r) {
  return fr[Ze(r)];
}, gr = function(r, i) {
  return cr[Ze(r)][i ? "ordinal" : "cardinal"];
}, dr = sr.default(mr, pr, gr), br = dr, vr = br;
function yr(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var H = /* @__PURE__ */ yr(vr);
if (typeof Intl > "u")
  typeof w < "u" ? w.Intl = {
    PluralRules: H.default
  } : typeof window < "u" ? window.Intl = {
    PluralRules: H.default
  } : w.Intl = {
    PluralRules: H.default
  }, H.default.polyfill = !0;
else if (!Intl.PluralRules)
  Intl.PluralRules = H.default, H.default.polyfill = !0;
else {
  var be = ["en", "es", "ru", "zh"], xr = Intl.PluralRules.supportedLocalesOf(be);
  xr.length < be.length && (Intl.PluralRules = H.default, H.default.polyfill = !0);
}
var Er = typeof w == "object" && w && w.Object === Object && w, _r = Er, Sr = _r, Tr = typeof self == "object" && self && self.Object === Object && self, wr = Sr || Tr || Function("return this")(), Hr = wr, Nr = Hr, Br = Nr.Symbol, ie = Br;
function Ar(e, r) {
  for (var i = -1, n = e == null ? 0 : e.length, f = Array(n); ++i < n; )
    f[i] = r(e[i], i, e);
  return f;
}
var Pr = Ar, Ir = Array.isArray, Lr = Ir, ve = ie, Je = Object.prototype, Cr = Je.hasOwnProperty, Or = Je.toString, L = ve ? ve.toStringTag : void 0;
function Rr(e) {
  var r = Cr.call(e, L), i = e[L];
  try {
    e[L] = void 0;
    var n = !0;
  } catch {
  }
  var f = Or.call(e);
  return n && (r ? e[L] = i : delete e[L]), f;
}
var Dr = Rr, Mr = Object.prototype, Gr = Mr.toString;
function Ur(e) {
  return Gr.call(e);
}
var kr = Ur, ye = ie, Fr = Dr, jr = kr, Vr = "[object Null]", zr = "[object Undefined]", xe = ye ? ye.toStringTag : void 0;
function $r(e) {
  return e == null ? e === void 0 ? zr : Vr : xe && xe in Object(e) ? Fr(e) : jr(e);
}
var Xr = $r;
function qr(e) {
  return e != null && typeof e == "object";
}
var Wr = qr, Zr = Xr, Jr = Wr, Qr = "[object Symbol]";
function Yr(e) {
  return typeof e == "symbol" || Jr(e) && Zr(e) == Qr;
}
var Kr = Yr, Ee = ie, ei = Pr, ti = Lr, ri = Kr, ii = 1 / 0, _e = Ee ? Ee.prototype : void 0, Se = _e ? _e.toString : void 0;
function Qe(e) {
  if (typeof e == "string")
    return e;
  if (ti(e))
    return ei(e, Qe) + "";
  if (ri(e))
    return Se ? Se.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -ii ? "-0" : r;
}
var ni = Qe, oi = ni;
function ai(e) {
  return e == null ? "" : oi(e);
}
var si = ai;
function ui(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var hi = ui, li = hi, fi = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, ci = li(fi), mi = ci, pi = si, gi = mi, Ye = /&(?:amp|lt|gt|quot|#39);/g, di = RegExp(Ye.source);
function bi(e) {
  return e = pi(e), e && di.test(e) ? e.replace(Ye, gi) : e;
}
var vi = bi;
const yi = /* @__PURE__ */ $t(vi), xi = { en: { "notification.favourite": "{name} liked your post", "notification.follow": "{name} followed you", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name} mentioned you", "notification.reblog": "{name} reposted your post", "notification.poll": "A poll you have voted in has ended", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name} sent you a message", "notification.pleroma:emoji_reaction": "{name} reacted to your post", "status.show_more": "Show more", "status.reblog": "Repost", "status.favourite": "Like", "notifications.group": "{count, plural, one {# notification} other {# notifications}}" }, id: { "notification.favourite": "{name} menyukai status anda", "notification.follow": "{name} mengikuti anda", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name} menyebut Anda", "notification.reblog": "{name} mem-boost status anda", "notification.poll": "Japat yang Anda ikuti telah berakhir", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name} sent you a message", "notification.pleroma:emoji_reaction": "{name} reacted to your post", "status.show_more": "Show more", "status.reblog": "Repost", "status.favourite": "Difavoritkan", "notifications.group": "{count} notifikasi" }, ja: { "notification.favourite": "{name}さんがあなたの投稿をお気に入りに登録しました", "notification.follow": "{name}さんにフォローされました", "notification.follow_request": "{name} has requested to follow you", "notification.mention": "{name}さんがあなたに返信しました", "notification.reblog": "{name}さんがあなたの投稿をリピートしました", "notification.poll": "アンケートが終了しました", "notification.status": "{name} just posted", "notification.move": "{name} moved to {targetName}", "notification.user_approved": "Welcome to {instance}!", "notification.pleroma:chat_mention": "{name}さんがあなたにメッセージを送りました", "notification.pleroma:emoji_reaction": "{name}さんがあなたの投稿に反応しました", "status.show_more": "Show more", "status.reblog": "リピート", "status.favourite": "お気に入り", "notifications.group": "{count} 件の通知" } }, Ei = 5, Te = "tag", we = (e) => self.registration.getNotifications().then((r) => {
  if (r.length >= Ei) {
    const i = {
      title: P("notifications.group", e.data.preferred_locale, { count: r.length + 1 }),
      body: r.map((n) => n.title).join(`
`),
      tag: Te,
      data: {
        url: new URL("/notifications", self.location.href).href,
        count: r.length + 1,
        preferred_locale: e.data.preferred_locale
      }
    };
    return r.forEach((n) => n.close()), self.registration.showNotification(i.title, i);
  } else if (r.length === 1 && r[0].tag === Te) {
    const i = ne(r[0]), n = (i.data.count || 0) + 1;
    return i.title = P("notifications.group", e.data.preferred_locale, { count: n }), i.body = `${e.title}
${i.body}`, i.data = { ...i.data, count: n }, self.registration.showNotification(i.title, i);
  }
  return self.registration.showNotification(e.title, e);
}), Y = (e, r, i) => {
  const n = new URL(e, self.location.href).href;
  return fetch(n, {
    headers: {
      Authorization: `Bearer ${i}`,
      "Content-Type": "application/json"
    },
    method: r,
    credentials: "include"
  }).then((f) => {
    if (f.ok)
      return f;
    throw new Error(String(f.status));
  }).then((f) => f.json());
}, ne = (e) => {
  const r = {};
  let i;
  for (i in e)
    r[i] = e[i];
  return r;
}, P = (e, r, i = {}) => new zt(xi[r][e], r).format(i), He = (e) => yi(e.replace(/<br\s*\/?>/g, `
`).replace(/<\/p><[^>]*>/g, `

`).replace(/<[^>]*>/g, "")), _i = (e) => {
  if (!e.data) {
    console.error("An empty web push event was received.", { event: e });
    return;
  }
  const { access_token: r, notification_id: i, preferred_locale: n, title: f, body: c, icon: p } = e.data.json();
  e.waitUntil(
    Y(`/api/v1/notifications/${i}`, "get", r).then((u) => {
      var t, s, a, h, l, m, g, d;
      const o = {
        title: P(`notification.${u.type}`, n, { name: u.account.display_name.length > 0 ? u.account.display_name : u.account.username }),
        body: u.status && He(u.status.content),
        icon: u.account.avatar_static,
        timestamp: u.created_at && Number(new Date(u.created_at)),
        tag: u.id,
        image: (s = (t = u.status) == null ? void 0 : t.media_attachments[0]) == null ? void 0 : s.preview_url,
        data: { access_token: r, preferred_locale: n, id: u.status ? u.status.id : u.account.id, url: u.status ? `/@${u.account.acct}/posts/${u.status.id}` : `/@${u.account.acct}` }
      };
      return (a = u.status) != null && a.spoiler_text || (h = u.status) != null && h.sensitive ? (o.data.hiddenBody = He((l = u.status) == null ? void 0 : l.content), o.data.hiddenImage = (g = (m = u.status) == null ? void 0 : m.media_attachments[0]) == null ? void 0 : g.preview_url, (d = u.status) != null && d.spoiler_text && (o.body = u.status.spoiler_text), o.image = void 0, o.actions = [Si(n)]) : u.type === "mention" && (o.actions = [Ke(n), et(n)]), we(o);
    }).catch(() => we({
      title: f,
      body: c,
      icon: p,
      tag: i,
      timestamp: Number(/* @__PURE__ */ new Date()),
      data: { access_token: r, preferred_locale: n, url: "/notifications" }
    }))
  );
}, Si = (e) => ({
  action: "expand",
  icon: `/${require("../../assets/images/web-push/web-push-icon_expand.png")}`,
  title: P("status.show_more", e)
}), Ke = (e) => ({
  action: "reblog",
  icon: `/${require("../../assets/images/web-push/web-push-icon_reblog.png")}`,
  title: P("status.reblog", e)
}), et = (e) => ({
  action: "favourite",
  icon: `/${require("../../assets/images/web-push/web-push-icon_favourite.png")}`,
  title: P("status.favourite", e)
}), Ti = (e) => {
  const r = e.find((n) => n.focused), i = e.find((n) => n.visibilityState === "visible");
  return r || i || e[0];
}, wi = (e) => {
  const r = ne(e);
  return r.body = r.data.hiddenBody, r.image = r.data.hiddenImage, r.actions = [Ke(e.data.preferred_locale), et(e.data.preferred_locale)], self.registration.showNotification(r.title, r);
}, Ne = (e, r) => {
  var n;
  const i = ne(e);
  return i.actions = (n = i.actions) == null ? void 0 : n.filter((f) => f.action !== r), self.registration.showNotification(i.title, i);
}, Hi = (e) => self.clients.matchAll({ type: "window" }).then((r) => r.length === 0 ? self.clients.openWindow(e) : Ti(r).navigate(e).then((n) => n == null ? void 0 : n.focus())), Ni = (e) => {
  const r = new Promise((i, n) => {
    if (e.action)
      if (e.action === "expand")
        i(wi(e.notification));
      else if (e.action === "reblog") {
        const { data: f } = e.notification;
        i(Y(`/api/v1/statuses/${f.id}/reblog`, "post", f.access_token).then(() => Ne(e.notification, "reblog")));
      } else if (e.action === "favourite") {
        const { data: f } = e.notification;
        i(Y(`/api/v1/statuses/${f.id}/favourite`, "post", f.access_token).then(() => Ne(e.notification, "favourite")));
      } else
        n(`Unknown action: ${e.action}`);
    else
      e.notification.close(), i(Hi(e.notification.data.url));
  });
  e.waitUntil(r);
};
self.addEventListener("push", _i);
self.addEventListener("notificationclick", Ni);
